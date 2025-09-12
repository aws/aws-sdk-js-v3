import "./setup.js";

import { afterEach, beforeAll, beforeEach, describe, expect, test as it, vi } from "vitest";
import { fs, vol } from "memfs";
import { STS, STSExtensionConfiguration } from "@aws-sdk/client-sts";
import * as credentialProviderHttp from "@aws-sdk/credential-provider-http";
import { fromCognitoIdentity, fromCognitoIdentityPool, fromIni, fromWebToken } from "@aws-sdk/credential-providers";
import { HttpResponse } from "@smithy/protocol-http";
import type { HttpRequest, NodeHttpHandlerOptions, ParsedIniData } from "@smithy/types";
import { AdaptiveRetryStrategy, StandardRetryStrategy } from "@smithy/util-retry";
import { PassThrough } from "node:stream";
import { homedir } from "node:os";
import { join } from "node:path";
import { defaultProvider } from "../src";

vi.hoisted(() => {});

vi.mock("node:child_process");

const assumeRoleArns: string[] = [];

class MockNodeHttpHandler {
  static create(instanceOrOptions?: any) {
    if (typeof instanceOrOptions?.handle === "function") {
      return instanceOrOptions;
    }
    return new MockNodeHttpHandler();
  }

  async handle(request: HttpRequest) {
    const body = new PassThrough({});

    if (request.body?.includes("RoleArn=")) {
      assumeRoleArns.push(request.body.match(/RoleArn=(.*?)&/)?.[1]);
    }

    const region = (request.hostname.match(/(sts|cognito-identity|portal\.sso)\.(.*?)\./) || [, , "unknown"])[2];

    if (request.headers.Authorization === "container-authorization") {
      body.write(
        JSON.stringify({
          AccessKeyId: "CONTAINER_ACCESS_KEY",
          SecretAccessKey: "CONTAINER_SECRET_ACCESS_KEY",
          Token: "CONTAINER_TOKEN",
          Expiration: "3000-01-01T00:00:00.000Z",
        })
      );
    } else if (request.path?.includes("/federation/credentials")) {
      body.write(
        JSON.stringify({
          roleCredentials: {
            accessKeyId: "SSO_ACCESS_KEY_ID",
            secretAccessKey: "SSO_SECRET_ACCESS_KEY",
            sessionToken: `SSO_SESSION_TOKEN_${region}`,
            expiration: "3000-01-01T00:00:00.000Z",
          },
        })
      );
    } else if (request.body?.includes("Action=AssumeRoleWithWebIdentity")) {
      body.write(`
<AssumeRoleWithWebIdentityResponse xmlns="https://sts.amazonaws.com/doc/2011-06-15/">
<AssumeRoleWithWebIdentityResult>
  <Credentials>
    <AccessKeyId>STS_ARWI_ACCESS_KEY_ID</AccessKeyId>
    <SecretAccessKey>STS_ARWI_SECRET_ACCESS_KEY</SecretAccessKey>
    <SessionToken>STS_ARWI_SESSION_TOKEN_${region}</SessionToken>
    <Expiration>3000-01-01T00:00:00.000Z</Expiration>
  </Credentials>
</AssumeRoleWithWebIdentityResult>
<ResponseMetadata>
  <RequestId>01234567-89ab-cdef-0123-456789abcdef</RequestId>
</ResponseMetadata>
</AssumeRoleWithWebIdentityResponse>`);
    } else if (request.body?.includes("Action=AssumeRole")) {
      body.write(`
<AssumeRoleResponse xmlns="https://sts.amazonaws.com/doc/2011-06-15/">
<AssumeRoleResult>
  <Credentials>
    <AccessKeyId>STS_AR_ACCESS_KEY_ID</AccessKeyId>
    <SecretAccessKey>STS_AR_SECRET_ACCESS_KEY</SecretAccessKey>
    <SessionToken>STS_AR_SESSION_TOKEN_${region}</SessionToken>
    <Expiration>3000-01-01T00:00:00.000Z</Expiration>
  </Credentials>
</AssumeRoleResult>
<ResponseMetadata>
  <RequestId>01234567-89ab-cdef-0123-456789abcdef</RequestId>
</ResponseMetadata>
</AssumeRoleResponse>`);
    } else if (request.body.includes("Action=GetCallerIdentity")) {
      body.write(`
<GetCallerIdentityResponse xmlns="https://sts.amazonaws.com/doc/2011-06-15/">
<GetCallerIdentityResult>
  <Arn>arn:aws:iam::123456789012:user/Alice</Arn>
  <UserId>AIDACKCEVSQ6C2EXAMPLE</UserId>
  <Account>123456789012</Account>
</GetCallerIdentityResult>
<ResponseMetadata>
  <RequestId>01234567-89ab-cdef-0123-456789abcdef</RequestId>
</ResponseMetadata>
</GetCallerIdentityResponse>`);
    } else if (request.headers["x-amz-target"] === "AWSCognitoIdentityService.GetCredentialsForIdentity") {
      body.write(`{
          "Credentials":{
            "SecretKey":"COGNITO_SECRET_KEY",
            "SessionToken":"COGNITO_SESSION_TOKEN_${region}",
            "Expiration":${new Date("3000-01-01T00:00:00.000Z").getTime() / 1000},
            "AccessKeyId":"COGNITO_ACCESS_KEY_ID"
          },
          "IdentityId":"${region}:COGNITO_IDENTITY_ID"
        }`);
    } else if (request.headers["x-amz-target"] === "AWSCognitoIdentityService.GetId") {
      body.write(`{
          "IdentityId":"${region}:COGNITO_IDENTITY_ID"
        }`);
    } else {
      console.log(request);
      throw new Error("request not supported.");
    }
    body.end();
    return {
      response: new HttpResponse({
        statusCode: 200,
        body,
        headers: {},
      }),
    };
  }

  updateHttpClientConfig(key: keyof NodeHttpHandlerOptions, value: NodeHttpHandlerOptions[typeof key]): void {}

  httpHandlerConfigs(): NodeHttpHandlerOptions {
    return null as any;
  }
}

describe("credential-provider-node integration test", () => {
  let sts: STS = null as any;
  let processSnapshot: typeof process.env = null as any;
  let iniProfileData: ParsedIniData = null as any;
  const requestHandler = MockNodeHttpHandler.create({});

  function setIniProfileData(data: ParsedIniData) {
    iniProfileData = data;
    let buffer = "[profile memfs-test-mock]\n\n";
    for (const profile in data) {
      buffer += `[profile ${profile}]\n`;
      for (const [k, v] of Object.entries(data[profile])) {
        buffer += `${k} = ${v}\n`;
      }
      buffer += "\n";
    }
    const dir = join(homedir(), ".aws");
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    } else {
      expect(fs.readFileSync(join(dir, "config"), "utf-8").toString().split("\n")[0]).toEqual(
        `[profile memfs-test-mock]`
      );
    }
    fs.writeFileSync(join(homedir(), ".aws", "config"), buffer);
  }

  const sink = {
    data: [] as string[],
    debug(log: string) {
      this.data.push(log);
    },
    info(log: string) {
      this.data.push(log);
    },
    warn(log: string) {
      this.data.push(log);
    },
    error(log: string) {
      this.data.push(log);
    },
  };

  const RESERVED_ENVIRONMENT_VARIABLES = {
    AWS_DEFAULT_REGION: 1,
    AWS_REGION: 1,
    AWS_PROFILE: 1,
    AWS_ACCESS_KEY_ID: 1,
    AWS_SECRET_ACCESS_KEY: 1,
    AWS_SESSION_TOKEN: 1,
    AWS_CREDENTIAL_EXPIRATION: 1,
    AWS_EC2_METADATA_DISABLED: 1,
    AWS_WEB_IDENTITY_TOKEN_FILE: 1,
    AWS_ROLE_ARN: 1,
    AWS_CONTAINER_CREDENTIALS_FULL_URI: 1,
    AWS_CONTAINER_CREDENTIALS_RELATIVE_URI: 1,
    AWS_CONTAINER_AUTHORIZATION_TOKEN: 1,
    AWS_CONTAINER_AUTHORIZATION_TOKEN_FILE: 1,
  };

  function copy<T>(data: T): T {
    return JSON.parse(JSON.stringify(data));
  }

  beforeAll(async () => {
    processSnapshot = copy(process.env);
  });

  beforeEach(async () => {
    vol.reset();
    fs.writeFileSync("/token-path", "token-contents");

    const ssoToken = {
      accessToken: "mock_sso_token",
      expiresAt: "3000-01-01T00:00:00.000Z",
    };

    for (const variable in RESERVED_ENVIRONMENT_VARIABLES) {
      delete process.env[variable];
    }
    setIniProfileData({
      default: {
        region: "us-west-2",
        output: "json",
      },
    });
    sts = new STS({
      requestHandler,
      region: "us-west-2",
    });
  });

  afterEach(async () => {
    Object.assign(process.env, processSnapshot);
    setIniProfileData({
      default: {
        region: "us-west-2",
        output: "json",
      },
    });
    assumeRoleArns.length = 0;
    sink.data.length = 0;
  });

  describe.only("fromEnv", () => {
    it("should load static credentials from environment variables", async () => {
      process.env.AWS_ACCESS_KEY_ID = "ENV_ACCESS_KEY";
      process.env.AWS_SECRET_ACCESS_KEY = "ENV_SECRET_KEY";
      await sts.getCallerIdentity({});
      const credentials = await sts.config.credentials();
      expect(credentials).toEqual({
        accessKeyId: "ENV_ACCESS_KEY",
        secretAccessKey: "ENV_SECRET_KEY",
        $source: {
          CREDENTIALS_ENV_VARS: "g",
        },
      });
    });

    it("should optionally use session token and/or expiration", async () => {
      process.env.AWS_ACCESS_KEY_ID = "ENV_ACCESS_KEY";
      process.env.AWS_SECRET_ACCESS_KEY = "ENV_SECRET_KEY";
      process.env.AWS_SESSION_TOKEN = "ENV_SESSION_TOKEN";
      process.env.AWS_CREDENTIAL_EXPIRATION = "2000-01-01T00:00:00.000Z";
      await sts.getCallerIdentity({});
      const credentials = await sts.config.credentials();
      expect(credentials).toEqual({
        accessKeyId: "ENV_ACCESS_KEY",
        secretAccessKey: "ENV_SECRET_KEY",
        expiration: new Date("2000-01-01T00:00:00.000Z"),
        sessionToken: "ENV_SESSION_TOKEN",
        $source: {
          CREDENTIALS_ENV_VARS: "g",
        },
      });
    });

    it("should (for now) resolve AWS_PROFILE instead of static credentials from ENV if both are set. However, this is subject to change.", async () => {
      process.env.AWS_ACCESS_KEY_ID = "ENV_ACCESS_KEY";
      process.env.AWS_SECRET_ACCESS_KEY = "ENV_SECRET_KEY";
      process.env.AWS_PROFILE = "default";

      setIniProfileData({
        default: {
          aws_access_key_id: "INI_STATIC_ACCESS_KEY",
          aws_secret_access_key: "INI_STATIC_SECRET_KEY",
        },
      });

      sts = new STS({
        requestHandler,
        region: "us-west-2",
        logger: {
          trace() {},
          debug() {},
          info() {},
          warn() {},
          error() {},
        },
      });

      await sts.getCallerIdentity({});
      const credentials = await sts.config.credentials();

      expect(credentials).toEqual({
        accessKeyId: "INI_STATIC_ACCESS_KEY",
        secretAccessKey: "INI_STATIC_SECRET_KEY",
        $source: {
          CREDENTIALS_PROFILE: "n",
        },
      });
    });
  });

  describe("fromSSO", () => {
    it("should resolve SSO credentials if legacy SSO parameters are supplied directly", async () => {
      sts = new STS({
        requestHandler,
        // this is lower priority than the ssoRegion.
        region: "us-sso-region-2",
        credentials: defaultProvider({
          ssoStartUrl: "SSO_START_URL",
          ssoAccountId: "1234",
          ssoRegion: "us-sso-region-1",
          ssoRoleName: "sso-role",
        }),
      });
      await sts.getCallerIdentity({});
      const credentials = await sts.config.credentials();
      expect(credentials).toEqual({
        accessKeyId: "SSO_ACCESS_KEY_ID",
        secretAccessKey: "SSO_SECRET_ACCESS_KEY",
        sessionToken: "SSO_SESSION_TOKEN_us-sso-region-1",
        expiration: new Date("3000-01-01T00:00:00.000Z"),
        $source: {
          CREDENTIALS_CODE: "e",
          CREDENTIALS_SSO_LEGACY: "u",
        },
      });
    });
  });

  describe("fromIni", () => {
    it("should resolve static credentials if directly present in config profile", async () => {
      setIniProfileData({
        default: {
          aws_access_key_id: "INI_STATIC_ACCESS_KEY",
          aws_secret_access_key: "INI_STATIC_SECRET_KEY",
        },
      });
      await sts.getCallerIdentity({});
      const credentials = await sts.config.credentials();
      expect(credentials).toEqual({
        accessKeyId: "INI_STATIC_ACCESS_KEY",
        secretAccessKey: "INI_STATIC_SECRET_KEY",
        $source: {
          CREDENTIALS_PROFILE: "n",
        },
      });
    });

    it("should resolve assumeRole credentials", async () => {
      setIniProfileData({
        assume: {
          region: "us-stsar-1",
          aws_access_key_id: "ASSUME_STATIC_ACCESS_KEY",
          aws_secret_access_key: "ASSUME_STATIC_SECRET_KEY",
        },
        default: {
          region: "us-stsar-1",
          role_arn: "ROLE_ARN",
          role_session_name: "ROLE_SESSION_NAME",
          external_id: "EXTERNAL_ID",
          source_profile: "assume",
        },
      });
      await sts.getCallerIdentity({});
      const credentials = await sts.config.credentials();
      expect(credentials).toEqual({
        accessKeyId: "STS_AR_ACCESS_KEY_ID",
        secretAccessKey: "STS_AR_SECRET_ACCESS_KEY",
        sessionToken: "STS_AR_SESSION_TOKEN_us-stsar-1",
        expiration: new Date("3000-01-01T00:00:00.000Z"),
        $source: {
          CREDENTIALS_PROFILE_SOURCE_PROFILE: "o",
          CREDENTIALS_STS_ASSUME_ROLE: "i",
        },
      });
    });

    it("should use the outer client's region for STS when the partition is AWS", async () => {
      sts = new STS({
        requestHandler,
        region: "eu-west-1",
      });
      setIniProfileData({
        assume: {
          region: "eu-west-1",
          aws_access_key_id: "ASSUME_STATIC_ACCESS_KEY",
          aws_secret_access_key: "ASSUME_STATIC_SECRET_KEY",
        },
        default: {
          region: "eu-west-1",
          role_arn: "ROLE_ARN",
          role_session_name: "ROLE_SESSION_NAME",
          external_id: "EXTERNAL_ID",
          source_profile: "assume",
        },
      });
      await sts.getCallerIdentity({});
      const credentials = await sts.config.credentials();
      expect(credentials).toEqual({
        accessKeyId: "STS_AR_ACCESS_KEY_ID",
        secretAccessKey: "STS_AR_SECRET_ACCESS_KEY",
        sessionToken: "STS_AR_SESSION_TOKEN_eu-west-1",
        expiration: new Date("3000-01-01T00:00:00.000Z"),
        $source: {
          CREDENTIALS_PROFILE_SOURCE_PROFILE: "o",
          CREDENTIALS_STS_ASSUME_ROLE: "i",
        },
      });
    });

    it("should use the outer client's region for STS when the partition is not AWS", async () => {
      sts = new STS({
        requestHandler,
        region: "us-gov-stsar-1",
      });
      setIniProfileData({
        assume: {
          region: "us-gov-stsar-1",
          aws_access_key_id: "ASSUME_STATIC_ACCESS_KEY",
          aws_secret_access_key: "ASSUME_STATIC_SECRET_KEY",
        },
        default: {
          region: "us-gov-stsar-1",
          role_arn: "ROLE_ARN",
          role_session_name: "ROLE_SESSION_NAME",
          external_id: "EXTERNAL_ID",
          source_profile: "assume",
        },
      });
      await sts.getCallerIdentity({});
      const credentials = await sts.config.credentials();
      expect(credentials).toEqual({
        accessKeyId: "STS_AR_ACCESS_KEY_ID",
        secretAccessKey: "STS_AR_SECRET_ACCESS_KEY",
        sessionToken: "STS_AR_SESSION_TOKEN_us-gov-stsar-1",
        expiration: new Date("3000-01-01T00:00:00.000Z"),
        $source: {
          CREDENTIALS_PROFILE_SOURCE_PROFILE: "o",
          CREDENTIALS_STS_ASSUME_ROLE: "i",
        },
      });
    });

    it("should resolve credentials from STS assumeRoleWithWebIdentity if the ini profile is configured for web identity", async () => {
      setIniProfileData({
        default: {
          web_identity_token_file: "token-filepath",
          role_arn: "ROLE_ARN",
        },
      });
      await sts.getCallerIdentity({});
      const credentials = await sts.config.credentials();
      expect(credentials).toEqual({
        accessKeyId: "STS_ARWI_ACCESS_KEY_ID",
        secretAccessKey: "STS_ARWI_SECRET_ACCESS_KEY",
        sessionToken: "STS_ARWI_SESSION_TOKEN_us-west-2",
        expiration: new Date("3000-01-01T00:00:00.000Z"),
        $source: {
          CREDENTIALS_PROFILE_STS_WEB_ID_TOKEN: "q",
          CREDENTIALS_STS_ASSUME_ROLE_WEB_ID: "k",
        },
      });
    });

    it(
      "should resolve credentials from STS assumeRoleWithWebIdentity if the ini profile is" +
        " configured for web identity and the client region is not the default AWS partition",
      async () => {
        sts = new STS({
          requestHandler,
          region: "us-gov-sts-1",
        });
        setIniProfileData({
          default: {
            region: "us-gov-sts-1",
            web_identity_token_file: "token-filepath",
            role_arn: "ROLE_ARN",
          },
        });
        await sts.getCallerIdentity({});
        const credentials = await sts.config.credentials();
        expect(credentials).toEqual({
          accessKeyId: "STS_ARWI_ACCESS_KEY_ID",
          secretAccessKey: "STS_ARWI_SECRET_ACCESS_KEY",
          sessionToken: "STS_ARWI_SESSION_TOKEN_us-gov-sts-1",
          expiration: new Date("3000-01-01T00:00:00.000Z"),
          $source: {
            CREDENTIALS_PROFILE_STS_WEB_ID_TOKEN: "q",
            CREDENTIALS_STS_ASSUME_ROLE_WEB_ID: "k",
          },
        });
      }
    );

    it("should resolve process credentials if the profile is a process profile", async () => {
      setIniProfileData({
        default: {
          ...iniProfileData.default,
          credential_process: "credential-process",
        },
      });
      await sts.getCallerIdentity({});
      const credentials = await sts.config.credentials();
      expect(credentials).toEqual({
        accessKeyId: "PROCESS_ACCESS_KEY_ID",
        secretAccessKey: "PROCESS_SECRET_ACCESS_KEY",
        sessionToken: "PROCESS_SESSION_TOKEN",
        $source: {
          CREDENTIALS_PROCESS: "w",
          CREDENTIALS_PROFILE_PROCESS: "v",
        },
      });
    });

    it("should resolve SSO credentials if the profile is an SSO profile", async () => {
      iniProfileData["sso-session.ssoNew"] = {
        sso_region: "us-sso-region-1",
        sso_start_url: "SSO_START_URL",
        sso_registration_scopes: "sso:account:access",
      };
      Object.assign(iniProfileData.default, {
        sso_region: "us-sso-region-1",
        sso_session: "ssoNew",
        sso_account_id: "1234",
        sso_role_name: "integration-test",
      });
      setIniProfileData(iniProfileData);
      await sts.getCallerIdentity({});
      const credentials = await sts.config.credentials();
      expect(credentials).toEqual({
        accessKeyId: "SSO_ACCESS_KEY_ID",
        secretAccessKey: "SSO_SECRET_ACCESS_KEY",
        sessionToken: "SSO_SESSION_TOKEN_us-sso-region-1",
        expiration: new Date("3000-01-01T00:00:00.000Z"),
        $source: {
          CREDENTIALS_PROFILE_SSO: "r",
          CREDENTIALS_SSO: "s",
        },
      });
    });

    it("should be able to combine a source_profile having only credential_source with an origin profile having role_arn and source_profile", async () => {
      process.env.AWS_CONTAINER_CREDENTIALS_FULL_URI = "http://169.254.170.23";
      process.env.AWS_CONTAINER_AUTHORIZATION_TOKEN = "container-authorization";
      iniProfileData.default.source_profile = "credential_source_profile";
      iniProfileData.default.role_arn = "ROLE_ARN";
      iniProfileData.credential_source_profile = {
        credential_source: "EcsContainer",
      };
      setIniProfileData(iniProfileData);
      const spy = jest.spyOn(credentialProviderHttp, "fromHttp");
      sts = new STS({
        requestHandler,
        region: "us-west-2",
        credentials: defaultProvider({
          awsContainerCredentialsFullUri: process.env.AWS_CONTAINER_CREDENTIALS_FULL_URI,
          awsContainerAuthorizationToken: process.env.AWS_CONTAINER_AUTHORIZATION_TOKEN,
          clientConfig: {
            region: "us-west-2",
          },
          logger: sink,
        }),
      });
      await sts.getCallerIdentity({});
      const credentials = await sts.config.credentials();
      expect(credentials).toEqual({
        accessKeyId: "STS_AR_ACCESS_KEY_ID",
        secretAccessKey: "STS_AR_SECRET_ACCESS_KEY",
        sessionToken: "STS_AR_SESSION_TOKEN_us-west-2",
        expiration: new Date("3000-01-01T00:00:00.000Z"),
        $source: {
          CREDENTIALS_CODE: "e",
          CREDENTIALS_PROFILE_SOURCE_PROFILE: "o",
          CREDENTIALS_STS_ASSUME_ROLE: "i",
        },
      });
      expect(spy).toHaveBeenCalledWith(
        expect.objectContaining({
          awsContainerCredentialsFullUri: process.env.AWS_CONTAINER_CREDENTIALS_FULL_URI,
          awsContainerAuthorizationToken: process.env.AWS_CONTAINER_AUTHORIZATION_TOKEN,
        })
      );
      expect(assumeRoleArns).toEqual(["ROLE_ARN"]);
      spy.mockClear();
    });

    it("should be able to combine a source_profile having web_identity_token_file and role_arn with an origin profile having role_arn and source_profile", async () => {
      iniProfileData.default.source_profile = "credential_source_profile";
      iniProfileData.default.role_arn = "ROLE_ARN_2";

      iniProfileData.credential_source_profile = {
        web_identity_token_file: "token-filepath",
        role_arn: "ROLE_ARN_1",
      };
      setIniProfileData(iniProfileData);

      sts = new STS({
        requestHandler,
        region: "us-west-2",
        credentials: defaultProvider({
          awsContainerCredentialsFullUri: process.env.AWS_CONTAINER_CREDENTIALS_FULL_URI,
          awsContainerAuthorizationToken: process.env.AWS_CONTAINER_AUTHORIZATION_TOKEN,
          clientConfig: {
            region: "us-west-2",
          },
          logger: sink,
        }),
      });
      await sts.getCallerIdentity({});
      const credentials = await sts.config.credentials();
      expect(credentials).toEqual({
        accessKeyId: "STS_AR_ACCESS_KEY_ID",
        secretAccessKey: "STS_AR_SECRET_ACCESS_KEY",
        sessionToken: "STS_AR_SESSION_TOKEN_us-west-2",
        expiration: new Date("3000-01-01T00:00:00.000Z"),
        $source: {
          CREDENTIALS_CODE: "e",
          CREDENTIALS_PROFILE_SOURCE_PROFILE: "o",
          CREDENTIALS_STS_ASSUME_ROLE: "i",
        },
      });
      expect(assumeRoleArns).toEqual(["ROLE_ARN_1", "ROLE_ARN_2"]);
    });

    it("should complete chained role_arn credentials", async () => {
      process.env.AWS_CONTAINER_CREDENTIALS_FULL_URI = "http://169.254.170.23";
      process.env.AWS_CONTAINER_AUTHORIZATION_TOKEN = "container-authorization";

      iniProfileData.default.source_profile = "credential_source_profile_1";
      iniProfileData.default.role_arn = "ROLE_ARN_3";

      iniProfileData.credential_source_profile_1 = {
        source_profile: "credential_source_profile_2",
        role_arn: "ROLE_ARN_2",
      };

      iniProfileData.credential_source_profile_2 = {
        credential_source: "EcsContainer",
        role_arn: "ROLE_ARN_1",
      };
      setIniProfileData(iniProfileData);

      const spy = jest.spyOn(credentialProviderHttp, "fromHttp");
      sts = new STS({
        requestHandler,
        region: "us-west-2",
        credentials: defaultProvider({
          awsContainerCredentialsFullUri: process.env.AWS_CONTAINER_CREDENTIALS_FULL_URI,
          awsContainerAuthorizationToken: process.env.AWS_CONTAINER_AUTHORIZATION_TOKEN,
          clientConfig: {
            region: "us-west-2",
          },
          logger: sink,
        }),
      });
      await sts.getCallerIdentity({});
      const credentials = await sts.config.credentials();
      expect(credentials).toEqual({
        accessKeyId: "STS_AR_ACCESS_KEY_ID",
        secretAccessKey: "STS_AR_SECRET_ACCESS_KEY",
        sessionToken: "STS_AR_SESSION_TOKEN_us-west-2",
        expiration: new Date("3000-01-01T00:00:00.000Z"),
        $source: {
          CREDENTIALS_CODE: "e",
          CREDENTIALS_PROFILE_SOURCE_PROFILE: "o",
          CREDENTIALS_STS_ASSUME_ROLE: "i",
        },
      });
      expect(spy).toHaveBeenCalledWith(
        expect.objectContaining({
          awsContainerCredentialsFullUri: process.env.AWS_CONTAINER_CREDENTIALS_FULL_URI,
          awsContainerAuthorizationToken: process.env.AWS_CONTAINER_AUTHORIZATION_TOKEN,
        })
      );
      expect(assumeRoleArns).toEqual(["ROLE_ARN_1", "ROLE_ARN_2", "ROLE_ARN_3"]);
      spy.mockClear();
    });

    it("should complete chained role_arn credentials with optional role_arn in credential_source step", async () => {
      process.env.AWS_CONTAINER_CREDENTIALS_FULL_URI = "http://169.254.170.23";
      process.env.AWS_CONTAINER_AUTHORIZATION_TOKEN = "container-authorization";

      iniProfileData.default.source_profile = "credential_source_profile_1";
      iniProfileData.default.role_arn = "ROLE_ARN_3";

      iniProfileData.credential_source_profile_1 = {
        source_profile: "credential_source_profile_2",
        role_arn: "ROLE_ARN_2",
      };

      iniProfileData.credential_source_profile_2 = {
        credential_source: "EcsContainer",
        // This scenario tests the option of having no role_arn in this step of the chain.
      };
      setIniProfileData(iniProfileData);

      const spy = jest.spyOn(credentialProviderHttp, "fromHttp");
      sts = new STS({
        requestHandler,
        region: "us-west-2",
        credentials: defaultProvider({
          awsContainerCredentialsFullUri: process.env.AWS_CONTAINER_CREDENTIALS_FULL_URI,
          awsContainerAuthorizationToken: process.env.AWS_CONTAINER_AUTHORIZATION_TOKEN,
          clientConfig: {
            region: "us-west-2",
          },
          logger: sink,
        }),
      });
      await sts.getCallerIdentity({});
      const credentials = await sts.config.credentials();
      expect(credentials).toEqual({
        accessKeyId: "STS_AR_ACCESS_KEY_ID",
        secretAccessKey: "STS_AR_SECRET_ACCESS_KEY",
        sessionToken: "STS_AR_SESSION_TOKEN_us-west-2",
        expiration: new Date("3000-01-01T00:00:00.000Z"),
        $source: {
          CREDENTIALS_CODE: "e",
          CREDENTIALS_PROFILE_SOURCE_PROFILE: "o",
          CREDENTIALS_STS_ASSUME_ROLE: "i",
        },
      });
      expect(spy).toHaveBeenCalledWith(
        expect.objectContaining({
          awsContainerCredentialsFullUri: process.env.AWS_CONTAINER_CREDENTIALS_FULL_URI,
          awsContainerAuthorizationToken: process.env.AWS_CONTAINER_AUTHORIZATION_TOKEN,
        })
      );
      expect(assumeRoleArns).toEqual(["ROLE_ARN_2", "ROLE_ARN_3"]);
      spy.mockClear();
    });
  });

  describe("fromProcess", () => {
    it("should resolve process credentials if the profile is a process profile", async () => {
      // note: this is redundant with the resolveProcessCredentials portion of
      // credential-provider-ini. It's possible that this provider in the chain
      // is actually unreachable, because there is no separate ENV for the process
      // name. It requires a profile specifying the credential_process.
      Object.assign(iniProfileData.default, {
        credential_process: "credential-process",
      });
      setIniProfileData(iniProfileData);

      await sts.getCallerIdentity({});
      const credentials = await sts.config.credentials();
      expect(credentials).toEqual({
        accessKeyId: "PROCESS_ACCESS_KEY_ID",
        secretAccessKey: "PROCESS_SECRET_ACCESS_KEY",
        sessionToken: "PROCESS_SESSION_TOKEN",
        $source: {
          CREDENTIALS_PROCESS: "w",
          CREDENTIALS_PROFILE_PROCESS: "v",
        },
      });
    });
  });

  describe("fromTokenFile", () => {
    it("should resolve credentials with STS assumeRoleWithWebIdentity using a token", async () => {
      process.env.AWS_WEB_IDENTITY_TOKEN_FILE = "token-filepath";
      process.env.AWS_ROLE_ARN = "ROLE_ARN";
      await sts.getCallerIdentity({});
      const credentials = await sts.config.credentials();
      expect(credentials).toEqual({
        accessKeyId: "STS_ARWI_ACCESS_KEY_ID",
        secretAccessKey: "STS_ARWI_SECRET_ACCESS_KEY",
        sessionToken: "STS_ARWI_SESSION_TOKEN_us-west-2",
        expiration: new Date("3000-01-01T00:00:00.000Z"),
        $source: {
          CREDENTIALS_ENV_VARS_STS_WEB_ID_TOKEN: "h",
          CREDENTIALS_STS_ASSUME_ROLE_WEB_ID: "k",
        },
      });
    });
  });

  describe("remoteProvider", () => {
    it("should use container metadata if AWS_CONTAINER_CREDENTIALS_FULL_URI is set", async () => {
      process.env.AWS_CONTAINER_CREDENTIALS_FULL_URI = "http://169.254.170.23";
      process.env.AWS_CONTAINER_AUTHORIZATION_TOKEN = "container-authorization";
      await sts.getCallerIdentity({});
      const credentials = await sts.config.credentials();
      expect(credentials).toEqual({
        accessKeyId: "CONTAINER_ACCESS_KEY",
        secretAccessKey: "CONTAINER_SECRET_ACCESS_KEY",
        sessionToken: "CONTAINER_TOKEN",
        expiration: new Date("3000-01-01T00:00:00.000Z"),
        $source: {
          CREDENTIALS_HTTP: "z",
        },
      });
    });

    it.skip("should use instance metadata unless IMDS is disabled", async () => {
      // TODO
    });
  });

  describe("Region resolution for code-level providers given to a client", () => {
    it("fromCognitoIdentity provider should use caller client region", async () => {
      sts = new STS({
        requestHandler,
        region: "ap-northeast-1",
        credentials: fromCognitoIdentity({
          identityId: "",
        }),
      });
      await sts.getCallerIdentity({});
      const credentials = await sts.config.credentials();
      expect(credentials).toEqual({
        accessKeyId: "COGNITO_ACCESS_KEY_ID",
        secretAccessKey: "COGNITO_SECRET_KEY",
        sessionToken: "COGNITO_SESSION_TOKEN_ap-northeast-1",
        identityId: "",
        expiration: new Date("3000-01-01T00:00:00.000Z"),
        $source: { CREDENTIALS_CODE: "e" },
      });
    });

    it("fromCognitoIdentityPool provider should use caller client region", async () => {
      sts = new STS({
        requestHandler,
        region: "ap-northeast-1",
        credentials: fromCognitoIdentityPool({
          identityPoolId: "",
        }),
      });
      await sts.getCallerIdentity({});
      const credentials = await sts.config.credentials();
      expect(credentials).toEqual({
        accessKeyId: "COGNITO_ACCESS_KEY_ID",
        secretAccessKey: "COGNITO_SECRET_KEY",
        sessionToken: "COGNITO_SESSION_TOKEN_ap-northeast-1",
        identityId: "ap-northeast-1:COGNITO_IDENTITY_ID",
        expiration: new Date("3000-01-01T00:00:00.000Z"),
        $source: { CREDENTIALS_CODE: "e" },
      });
    });

    it("fromIni assumeRole provider should use the caller client's region for STS if profile does not set region", async () => {
      sts = new STS({
        requestHandler,
        region: "eu-west-1",
        credentials: fromIni({}),
      });
      iniProfileData.assume = {
        aws_access_key_id: "ASSUME_STATIC_ACCESS_KEY",
        aws_secret_access_key: "ASSUME_STATIC_SECRET_KEY",
      };
      delete iniProfileData.default.region;
      Object.assign(iniProfileData.default, {
        role_arn: "ROLE_ARN",
        role_session_name: "ROLE_SESSION_NAME",
        external_id: "EXTERNAL_ID",
        source_profile: "assume",
      });
      setIniProfileData(iniProfileData);
      await sts.getCallerIdentity({});
      const credentials = await sts.config.credentials();
      expect(credentials).toEqual({
        accessKeyId: "STS_AR_ACCESS_KEY_ID",
        secretAccessKey: "STS_AR_SECRET_ACCESS_KEY",
        sessionToken: "STS_AR_SESSION_TOKEN_eu-west-1",
        expiration: new Date("3000-01-01T00:00:00.000Z"),
        $source: {
          CREDENTIALS_CODE: "e",
          CREDENTIALS_PROFILE_SOURCE_PROFILE: "o",
          CREDENTIALS_STS_ASSUME_ROLE: "i",
        },
      });
    });

    it("fromIni assumeRole provider should prefer profile region for STS", async () => {
      sts = new STS({
        requestHandler,
        region: "eu-west-1",
        credentials: fromIni({}),
      });
      iniProfileData.assume = {
        aws_access_key_id: "ASSUME_STATIC_ACCESS_KEY",
        aws_secret_access_key: "ASSUME_STATIC_SECRET_KEY",
      };
      Object.assign(iniProfileData.default, {
        region: "eu-west-2",
        role_arn: "ROLE_ARN",
        role_session_name: "ROLE_SESSION_NAME",
        external_id: "EXTERNAL_ID",
        source_profile: "assume",
      });
      setIniProfileData(iniProfileData);
      await sts.getCallerIdentity({});
      const credentials = await sts.config.credentials();
      expect(credentials).toEqual({
        accessKeyId: "STS_AR_ACCESS_KEY_ID",
        secretAccessKey: "STS_AR_SECRET_ACCESS_KEY",
        sessionToken: "STS_AR_SESSION_TOKEN_eu-west-2",
        expiration: new Date("3000-01-01T00:00:00.000Z"),
        $source: {
          CREDENTIALS_CODE: "e",
          CREDENTIALS_PROFILE_SOURCE_PROFILE: "o",
          CREDENTIALS_STS_ASSUME_ROLE: "i",
        },
      });
    });

    it("fromWebToken provider should use caller client region", async () => {
      sts = new STS({
        requestHandler,
        region: "ap-northeast-1",
        credentials: fromWebToken({
          roleArn: "",
          webIdentityToken: "",
        }),
      });
      await sts.getCallerIdentity({});
      const credentials = await sts.config.credentials();
      expect(credentials).toEqual({
        accessKeyId: "STS_ARWI_ACCESS_KEY_ID",
        secretAccessKey: "STS_ARWI_SECRET_ACCESS_KEY",
        sessionToken: "STS_ARWI_SESSION_TOKEN_ap-northeast-1",
        expiration: new Date("3000-01-01T00:00:00.000Z"),
        $source: {
          CREDENTIALS_CODE: "e",
          CREDENTIALS_STS_ASSUME_ROLE_WEB_ID: "k",
        },
      });
    });

    it.skip(
      "fromSSO (SSO) provider is excluded from testing because the SSO_REGION is a required parameter and is used " +
        "instead of any fallback to the caller client region",
      async () => {}
    );

    it.skip(
      "fromSso (SSO-OIDC) provider is excluded from testing because it is " +
        "not used in a client initialization context",
      async () => {}
    );
  });

  // ToDo: renable https://github.com/aws/aws-sdk-js-v3/pull/7328
  describe.skip("client-scoped code configuration of AWS profile", () => {
    it("should allow clients to resolve credentials from different profiles", async () => {
      iniProfileData.aaa = {
        aws_access_key_id: "aaa",
        aws_secret_access_key: "aaa",
        aws_session_token: "aaa",
        region: "ap-northeast-1",
      };
      iniProfileData.bbb = {
        aws_access_key_id: "bbb",
        aws_secret_access_key: "bbb",
        aws_session_token: "bbb",
        region: "us-east-1",
      };
      setIniProfileData(iniProfileData);

      const clientA = new STS({
        requestHandler,
        profile: "aaa",
      });
      const clientB = new STS({
        requestHandler,
        profile: "bbb",
      });

      await clientA.getCallerIdentity();
      await clientB.getCallerIdentity();

      expect(await clientA.config.credentials()).toEqual({
        $source: {
          CREDENTIALS_PROFILE: "n",
        },
        accessKeyId: "aaa",
        secretAccessKey: "aaa",
        sessionToken: "aaa",
      });
      expect(await clientB.config.credentials()).toEqual({
        $source: {
          CREDENTIALS_PROFILE: "n",
        },
        accessKeyId: "bbb",
        secretAccessKey: "bbb",
        sessionToken: "bbb",
      });
    });
    it("should load various configuration properties from different profiles", async () => {
      // set AWS_PROFILE to show that client code-level profile takes priority over env.
      process.env.AWS_PROFILE = "default";
      iniProfileData.aaa = {
        aws_access_key_id: "aaa",
        aws_secret_access_key: "aaa",
        aws_session_token: "aaa",
        region: "ap-northeast-1",
        retry_mode: "adaptive",
        max_attempts: "33",
        use_fips_endpoint: "true",
        use_dualstack_endpoint: "true",
      };
      iniProfileData.bbb = {
        aws_access_key_id: "bbb",
        aws_secret_access_key: "bbb",
        aws_session_token: "bbb",
        region: "us-east-1",
        retry_mode: "standard",
        max_attempts: "12",
        use_fips_endpoint: "false",
        use_dualstack_endpoint: "false",
      };
      setIniProfileData(iniProfileData);

      const clientA = new STS({
        requestHandler,
        profile: "aaa",
      });
      const clientB = new STS({
        requestHandler,
        profile: "bbb",
      });

      await clientA.getCallerIdentity();
      await clientB.getCallerIdentity();

      expect(await clientA.config.region()).toEqual(iniProfileData.aaa.region);
      expect(await clientA.config.retryStrategy()).toBeInstanceOf(AdaptiveRetryStrategy);
      expect(await clientA.config.maxAttempts()).toEqual(Number(iniProfileData.aaa.max_attempts));
      expect(await clientA.config.useFipsEndpoint()).toEqual(iniProfileData.aaa.use_fips_endpoint === "true");
      expect(await clientA.config.useDualstackEndpoint()).toEqual(iniProfileData.aaa.use_dualstack_endpoint === "true");

      expect(await clientB.config.region()).toEqual(iniProfileData.bbb.region);
      expect(await clientB.config.retryStrategy()).toBeInstanceOf(StandardRetryStrategy);
      expect(await clientB.config.maxAttempts()).toEqual(Number(iniProfileData.bbb.max_attempts));
      expect(await clientB.config.useFipsEndpoint()).toEqual(iniProfileData.bbb.use_fips_endpoint === "true");
      expect(await clientB.config.useDualstackEndpoint()).toEqual(iniProfileData.bbb.use_dualstack_endpoint === "true");
    });

    it("should allow client profile to control fromIni init profile in implicit (default) credentials provider", async () => {
      sts = new STS({
        requestHandler,
        profile: "assume",
      });
      iniProfileData.static = {
        aws_access_key_id: "ASSUME_STATIC_ACCESS_KEY",
        aws_secret_access_key: "ASSUME_STATIC_SECRET_KEY",
      };
      iniProfileData.assume = {
        region: "eu-west-1",
        role_arn: "ROLE_ARN",
        role_session_name: "ROLE_SESSION_NAME",
        external_id: "EXTERNAL_ID",
        source_profile: "static",
      };
      setIniProfileData(iniProfileData);

      await sts.getCallerIdentity({});
      const credentials = await sts.config.credentials();
      expect(credentials).toEqual({
        accessKeyId: "STS_AR_ACCESS_KEY_ID",
        secretAccessKey: "STS_AR_SECRET_ACCESS_KEY",
        sessionToken: "STS_AR_SESSION_TOKEN_eu-west-1",
        expiration: new Date("3000-01-01T00:00:00.000Z"),
        $source: {
          CREDENTIALS_PROFILE_SOURCE_PROFILE: "o",
          CREDENTIALS_STS_ASSUME_ROLE: "i",
        },
      });
    });

    it(
      "should allow client profile to control fromIni init profile in explicit credentials provider " +
        "without requiring redundant setting of profile or region on the provider factory",
      async () => {
        sts = new STS({
          requestHandler,
          profile: "assume",
          // no profile is given to fromIni(), but it is used in
          // the context of this client and should fall back to the client's
          // profile.
          credentials: fromIni(),
        });
        const sts2 = new STS({
          requestHandler,
        });
        Object.assign(iniProfileData.default, {
          aws_access_key_id: "DEFAULT",
          aws_secret_access_key: "DEFAULT",
        });
        iniProfileData.static = {
          aws_access_key_id: "ASSUME_STATIC_ACCESS_KEY",
          aws_secret_access_key: "ASSUME_STATIC_SECRET_KEY",
        };
        iniProfileData.assume = {
          region: "ap-northeast-1",
          role_arn: "ROLE_ARN",
          role_session_name: "ROLE_SESSION_NAME",
          external_id: "EXTERNAL_ID",
          source_profile: "static",
        };
        setIniProfileData(iniProfileData);

        await sts.getCallerIdentity({});
        const credentials = await sts.config.credentials();
        expect(credentials).toEqual({
          accessKeyId: "STS_AR_ACCESS_KEY_ID",
          secretAccessKey: "STS_AR_SECRET_ACCESS_KEY",
          sessionToken: "STS_AR_SESSION_TOKEN_ap-northeast-1",
          expiration: new Date("3000-01-01T00:00:00.000Z"),
          $source: {
            CREDENTIALS_CODE: "e",
            CREDENTIALS_PROFILE_SOURCE_PROFILE: "o",
            CREDENTIALS_STS_ASSUME_ROLE: "i",
          },
        });
        expect(await sts2.config.credentials()).toEqual({
          accessKeyId: "DEFAULT",
          secretAccessKey: "DEFAULT",
          sessionToken: undefined,
          $source: {
            CREDENTIALS_PROFILE: "n",
          },
        });
      }
    );

    it("credential provider factory init still overrides profile setting", async () => {
      sts = new STS({
        requestHandler,
        profile: "assume",
        credentials: fromIni({
          profile: "default",
        }),
      });
      Object.assign(iniProfileData.default, {
        aws_access_key_id: "DEFAULT",
        aws_secret_access_key: "DEFAULT",
        region: "us-east-1",
      });
      iniProfileData.static = {
        aws_access_key_id: "ASSUME_STATIC_ACCESS_KEY",
        aws_secret_access_key: "ASSUME_STATIC_SECRET_KEY",
      };
      iniProfileData.assume = {
        region: "ap-northeast-1",
        role_arn: "ROLE_ARN",
        role_session_name: "ROLE_SESSION_NAME",
        external_id: "EXTERNAL_ID",
        source_profile: "static",
      };
      setIniProfileData(iniProfileData);

      await sts.getCallerIdentity({});
      const credentials = await sts.config.credentials();
      expect(credentials).toEqual({
        accessKeyId: "DEFAULT",
        secretAccessKey: "DEFAULT",
        sessionToken: undefined,
        $source: {
          CREDENTIALS_CODE: "e",
          CREDENTIALS_PROFILE: "n",
        },
      });
      expect(await sts.config.region()).toEqual("ap-northeast-1");
    });

    describe("sso", () => {
      it(
        "should allow SSO region to be used in the SSO client request if " +
          "a profile includes a region but also SSO credentials",
        async () => {
          sts = new STS({
            requestHandler,
            profile: "sso_root",
          });
          iniProfileData["sso-session.ssoNew"] = {
            sso_region: "us-sso-region-2",
            sso_start_url: "SSO_START_URL",
            sso_registration_scopes: "sso:account:access",
          };
          iniProfileData.sso_root = {
            sso_region: "us-sso-region-1",
            sso_session: "ssoNew",
            sso_account_id: "1234",
            sso_role_name: "integration-test",
            region: "ap-northeast-1",
          };
          setIniProfileData(iniProfileData);

          await sts.getCallerIdentity({});
          const credentials = await sts.config.credentials();
          expect(credentials).toEqual({
            accessKeyId: "SSO_ACCESS_KEY_ID",
            secretAccessKey: "SSO_SECRET_ACCESS_KEY",
            sessionToken: "SSO_SESSION_TOKEN_us-sso-region-2",
            expiration: new Date("3000-01-01T00:00:00.000Z"),
            $source: {
              CREDENTIALS_PROFILE_SSO: "r",
              CREDENTIALS_SSO: "s",
            },
          });
          expect(await sts.config.region()).toEqual("ap-northeast-1");
        }
      );
      it(
        "should allow SSO region to be used in the SSO client request if " +
          "a client has set a region in code but selects a profile with SSO creds",
        async () => {
          sts = new STS({
            requestHandler,
            region: "eu-west-1",
            credentials: fromIni({
              profile: "sso_root",
            }),
          });
          iniProfileData["sso-session.ssoNew"] = {
            sso_region: "us-sso-region-2",
            sso_start_url: "SSO_START_URL",
            sso_registration_scopes: "sso:account:access",
          };
          iniProfileData.sso_root = {
            sso_region: "us-sso-region-1",
            sso_session: "ssoNew",
            sso_account_id: "1234",
            sso_role_name: "integration-test",
            region: "ap-northeast-1",
          };
          setIniProfileData(iniProfileData);

          await sts.getCallerIdentity({});
          const credentials = await sts.config.credentials();
          expect(credentials).toEqual({
            accessKeyId: "SSO_ACCESS_KEY_ID",
            secretAccessKey: "SSO_SECRET_ACCESS_KEY",
            sessionToken: "SSO_SESSION_TOKEN_us-sso-region-2",
            expiration: new Date("3000-01-01T00:00:00.000Z"),
            $source: {
              CREDENTIALS_CODE: "e",
              CREDENTIALS_PROFILE_SSO: "r",
              CREDENTIALS_SSO: "s",
            },
          });
          expect(await sts.config.region()).toEqual("eu-west-1");
        }
      );
    });

    it("source_profile does not bring over any client configuration options", async () => {
      sts = new STS({
        requestHandler,
        profile: "assume",
      });
      iniProfileData.static = {
        aws_access_key_id: "ASSUME_STATIC_ACCESS_KEY",
        aws_secret_access_key: "ASSUME_STATIC_SECRET_KEY",
        region: "us-west-2",
        retry_mode: "adaptive",
        max_attempts: "33",
        use_fips_endpoint: "true",
        use_dualstack_endpoint: "true",
      };
      iniProfileData.assume = {
        region: "ap-northeast-1",
        role_arn: "ROLE_ARN",
        role_session_name: "ROLE_SESSION_NAME",
        external_id: "EXTERNAL_ID",
        source_profile: "static",
      };
      setIniProfileData(iniProfileData);

      await sts.getCallerIdentity({});
      const credentials = await sts.config.credentials();
      expect(credentials).toEqual({
        accessKeyId: "STS_AR_ACCESS_KEY_ID",
        secretAccessKey: "STS_AR_SECRET_ACCESS_KEY",
        sessionToken: "STS_AR_SESSION_TOKEN_ap-northeast-1",
        expiration: new Date("3000-01-01T00:00:00.000Z"),
        $source: {
          CREDENTIALS_PROFILE_SOURCE_PROFILE: "o",
          CREDENTIALS_STS_ASSUME_ROLE: "i",
        },
      });
      expect(await sts.config.region()).toEqual("ap-northeast-1");
      expect(await sts.config.retryStrategy()).toBeInstanceOf(StandardRetryStrategy);
      expect(await sts.config.maxAttempts()).toEqual(3);
      expect(await sts.config.useFipsEndpoint()).toEqual(false);
      expect(await sts.config.useDualstackEndpoint()).toEqual(false);
    });
  });

  describe("extension provided credentials", () => {
    class OverrideCredentialsExtension {
      private invocation = 0;

      configure(extensionConfiguration: STSExtensionConfiguration): void {
        extensionConfiguration.setCredentials(async () => ({
          accessKeyId: "STS_AK" + ++this.invocation,
          secretAccessKey: "STS_SAK" + this.invocation,
        }));
      }
    }

    it("allows an extension to modify client config credentials", async () => {
      const client = new STS({
        requestHandler,
        extensions: [new OverrideCredentialsExtension()],
      });

      const credentials = await client.config.credentials({});

      expect(credentials).toEqual({
        accessKeyId: "STS_AK1",
        secretAccessKey: "STS_SAK1",
        $source: {
          CREDENTIALS_CODE: "e",
        },
      });
    });

    it("the extension provided credentials are still memoized", async () => {
      const client = new STS({
        requestHandler,

        extensions: [new OverrideCredentialsExtension()],
      });

      const credentials1 = await client.config.credentials({});
      expect(credentials1).toEqual({
        accessKeyId: "STS_AK1",
        secretAccessKey: "STS_SAK1",
        $source: {
          CREDENTIALS_CODE: "e",
        },
      });

      const credentials2 = await client.config.credentials({});
      expect(credentials2).toEqual({
        accessKeyId: "STS_AK1",
        secretAccessKey: "STS_SAK1",
        $source: {
          CREDENTIALS_CODE: "e",
        },
      });

      const credentials3 = await client.config.credentials({
        forceRefresh: true,
      });
      expect(credentials3).toEqual({
        accessKeyId: "STS_AK2",
        secretAccessKey: "STS_SAK2",
        $source: {
          CREDENTIALS_CODE: "e",
        },
      });

      const credentials4 = await client.config.credentials({});
      expect(credentials4).toEqual({
        accessKeyId: "STS_AK2",
        secretAccessKey: "STS_SAK2",
        $source: {
          CREDENTIALS_CODE: "e",
        },
      });
    });
  });

  describe("No credentials available", () => {
    it("should throw CredentialsProviderError", async () => {
      process.env.AWS_EC2_METADATA_DISABLED = "true";
      expect(async () => sts.getCallerIdentity({})).rejects.toThrow("Could not load credentials from any providers");
    });
  });
});
