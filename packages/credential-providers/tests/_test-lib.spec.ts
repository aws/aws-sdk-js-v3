import { S3 } from "@aws-sdk/client-s3";
import { ParsedIniData, RuntimeConfigAwsCredentialIdentityProvider } from "@aws-sdk/types";
import { AttributedAwsCredentialIdentity } from "@aws-sdk/types/src";
import { NodeHttpHandler } from "@smithy/node-http-handler";
import { HttpResponse } from "@smithy/protocol-http";
import { externalDataInterceptor } from "@smithy/shared-ini-file-loader";
import type { HttpRequest, NodeHttpHandlerOptions } from "@smithy/types";
import child_process from "node:child_process";
import { createHash } from "node:crypto";
import { homedir } from "node:os";
import { join } from "node:path";
import { PassThrough } from "node:stream";
import { afterAll, afterEach, beforeAll, beforeEach, describe, expect, test as it } from "vitest";

describe("placeholder for testing lib", () => {
  it("", () => {});
});

const assumeRoleArns: string[] = [];
let iniProfileData: ParsedIniData = null as any;

export type CredentialTestParameters = {
  // has caller context client
  withCaller: boolean;
  // has region specified on the caller client
  callerClientRegion: boolean;
  // AWS_REGION is set
  envRegion: boolean;
  // profile regions are set
  profileRegion: boolean;
  // provider itself has a clientConfig.region
  providerRegion: boolean;
  // profile name
  profile: string | undefined;
};

/**
 * Credential provider tester.
 */
export class CTest<P extends (init?: any) => RuntimeConfigAwsCredentialIdentityProvider> {
  private lastCredentials: AttributedAwsCredentialIdentity | undefined;

  public constructor(
    public credentialProvider: P,
    public providerParams: (testParams: CredentialTestParameters) => Parameters<P>[0],
    public profileCredentials?: boolean
  ) {
    this.init();
  }

  public static defaultRegionConfigProvider({ profile, providerRegion, withCaller }: CredentialTestParameters) {
    if (withCaller) {
      return {
        clientConfig: {
          region: providerRegion ? "provider-region" : undefined,
        },
      };
    }
    return {
      profile,
      clientConfig: {
        region: providerRegion ? "provider-region" : undefined,
      },
    };
  }

  public init() {
    let processSnapshot: typeof process.env = null as any;
    const nodeHttpHandlerCreate = NodeHttpHandler.create;

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
      NodeHttpHandler.create = MockNodeHttpHandler.create;
      const mockExec = ((bin: string, ...args: any[]) => {
        const callback = args.find((arg) => typeof arg === "function");
        if (bin === "credential-process") {
          return callback(null, {
            stdout: JSON.stringify({
              Version: 1,
              AccessKeyId: "PROCESS_ACCESS_KEY_ID",
              SecretAccessKey: "PROCESS_SECRET_ACCESS_KEY",
              SessionToken: "PROCESS_SESSION_TOKEN",
            }),
          });
        }
        return child_process.exec(bin, ...args);
      }) as any;

      externalDataInterceptor.interceptToken("exec", mockExec);
    });

    beforeEach(async () => {
      for (const variable in RESERVED_ENVIRONMENT_VARIABLES) {
        delete process.env[variable];
      }
      setIniProfileData({
        default: {
          region: "us-west-2",
          output: "json",
        },
      });
      const dir = join(homedir(), ".aws");
      externalDataInterceptor.interceptFile(join(dir, "credentials"), "");
      externalDataInterceptor.interceptFile("token-filepath", "token-contents");
      const ssoToken = {
        accessToken: "mock_sso_token",
        expiresAt: "3000-01-01T00:00:00.000Z",
      };
      const hasher = createHash("sha1");
      const cacheName = hasher.update("SSO_START_URL").digest("hex");
      const tokenPath = join(homedir(), ".aws", "sso", "cache", `${cacheName}.json`);
      externalDataInterceptor.interceptFile(tokenPath, JSON.stringify(ssoToken));
      externalDataInterceptor.interceptToken("SSO_START_URL", ssoToken);
      externalDataInterceptor.interceptToken("ssoNew", ssoToken);
      externalDataInterceptor.interceptToken("token-filepath", "token-contents");
    });

    afterEach(async () => {
      Object.assign(process.env, processSnapshot);
      setIniProfileData({
        default: {},
      });
      assumeRoleArns.length = 0;
    });

    afterAll(() => {
      NodeHttpHandler.create = nodeHttpHandlerCreate;
      delete externalDataInterceptor.getTokenRecord().exec;
    });
  }

  public setIni(data: Parameters<typeof setIniProfileData>[0]) {
    setIniProfileData(data);
  }

  public testRegion() {
    for (const withCaller of [true, false]) {
      for (const callerClientRegion of [true, false]) {
        for (const envRegion of [true, false]) {
          for (const profileRegion of [true, false]) {
            for (const providerRegion of [true, false]) {
              for (const profile of ["default", "alt", undefined]) {
                if (!callerClientRegion && !profileRegion && !envRegion) {
                  continue;
                }

                const params = {
                  withCaller,
                  callerClientRegion,
                  envRegion,
                  profileRegion,
                  providerRegion,
                  profile,
                };

                it(`${serializeParams(params)}`, async () => {
                  const region = await this.resolveStsRegion(params);

                  if (providerRegion) {
                    expect(region).toBe("provider-region");
                    return;
                  }

                  const usesProfileCredentials = this.profileCredentials;

                  if (usesProfileCredentials && profileRegion) {
                    expect(region).toBe(`${profile ?? "default"}-profile-region`);
                    return;
                  }

                  if (callerClientRegion && withCaller) {
                    expect(region).toBe("code-region");
                    return;
                  }

                  if (envRegion) {
                    expect(region).toBe("env-region");
                    return;
                  }

                  if (!usesProfileCredentials && profileRegion) {
                    expect(region).toBe(`${profile ?? "default"}-profile-region`);
                    return;
                  }

                  expect(region).toBe("us-east-1");
                });
              }
            }
          }
        }
      }
    }
  }

  private async resolveStsRegion(testParams: CredentialTestParameters) {
    const { withCaller, envRegion, profile, profileRegion, callerClientRegion, providerRegion } = testParams;

    if (envRegion) {
      process.env.AWS_REGION = "env-region";
    } else {
      delete process.env.AWS_REGION;
    }

    if (profileRegion) {
      iniProfileData = {
        default: {
          region: "default-profile-region",
          role_arn: "ROLE_ARN",
          role_session_name: "ROLE_SESSION_NAME",
          external_id: "EXTERNAL_ID",
          source_profile: "assume",
        },
        assume: {
          region: "assume-profile-region",
          aws_access_key_id: "ASSUME_STATIC_ACCESS_KEY",
          aws_secret_access_key: "ASSUME_STATIC_SECRET_KEY",
        },
        alt: {
          region: "alt-profile-region",
          role_arn: "ROLE_ARN",
          role_session_name: "ROLE_SESSION_NAME",
          external_id: "EXTERNAL_ID",
          source_profile: "assume2",
        },
        assume2: {
          region: "assume2-profile-region",
          aws_access_key_id: "ASSUME_STATIC_ACCESS_KEY",
          aws_secret_access_key: "ASSUME_STATIC_SECRET_KEY",
        },
      };
    } else {
      iniProfileData = {
        default: {
          role_arn: "ROLE_ARN",
          role_session_name: "ROLE_SESSION_NAME",
          external_id: "EXTERNAL_ID",
          source_profile: "assume",
        },
        assume: {
          aws_access_key_id: "ASSUME_STATIC_ACCESS_KEY",
          aws_secret_access_key: "ASSUME_STATIC_SECRET_KEY",
        },
        alt: {
          role_arn: "ROLE_ARN",
          role_session_name: "ROLE_SESSION_NAME",
          external_id: "EXTERNAL_ID",
          source_profile: "assume2",
        },
        assume2: {
          aws_access_key_id: "ASSUME_STATIC_ACCESS_KEY",
          aws_secret_access_key: "ASSUME_STATIC_SECRET_KEY",
        },
      };
    }
    setIniProfileData(iniProfileData);

    if (withCaller) {
      const s3 = new S3({
        profile,
        region: callerClientRegion ? "code-region" : undefined,
        credentials: this.credentialProvider(this.providerParams(testParams)),
      });

      await s3.listBuckets({});
      const credentials = await s3.config.credentials();
      return credentials.sessionToken!.replace("STS_AR_SESSION_TOKEN_", "");
    }

    const provider = this.credentialProvider(this.providerParams(testParams));

    const credentials = await provider();
    return credentials.sessionToken!.replace("STS_AR_SESSION_TOKEN_", "");
  }
}

export class MockNodeHttpHandler {
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
    } else if (request.body?.includes("Action=GetCallerIdentity")) {
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
    } else if (request.hostname.startsWith("s3.")) {
      body.write(`<?xml version="1.0" encoding="UTF-8"?>
<ListAllMyBucketsResult>
   <Buckets>
   </Buckets>
   <Owner>
      <DisplayName>xx</DisplayName>
      <ID>xx</ID>
   </Owner>
   <ContinuationToken>xx</ContinuationToken>
   <Prefix>xx</Prefix>
</ListAllMyBucketsResult>`);
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

function setIniProfileData(data: ParsedIniData) {
  iniProfileData = data;
  let buffer = "[profile memfs-test-mock]\n\n";
  for (const profile in data) {
    if (profile.startsWith("sso-session.")) {
      buffer += `[sso-session ${profile.split("sso-session.")[1]}]\n`;
    } else {
      buffer += `[profile ${profile}]\n`;
    }
    for (const [k, v] of Object.entries(data[profile])) {
      buffer += `${k} = ${v}\n`;
    }
    buffer += "\n";
  }
  const dir = join(homedir(), ".aws");
  externalDataInterceptor.interceptFile(join(dir, "config"), buffer);
}

function serializeParams(params: CredentialTestParameters) {
  let buffer = "";
  for (const [key, value] of Object.entries(params)) {
    if (typeof value === "boolean") {
      if (value) {
        buffer += ` ${key},`;
      }
    } else {
      buffer += ` ${key} = ${value},`;
    }
  }
  return buffer;
}
