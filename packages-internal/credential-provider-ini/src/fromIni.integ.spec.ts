import { STS } from "@aws-sdk/client-sts";
import { externalDataInterceptor } from "@smithy/core/config";
import type { HttpRequest } from "@smithy/core/protocols";
import { HttpResponse } from "@smithy/core/protocols";
import type { NodeHttpHandlerOptions, ParsedIniData } from "@smithy/types";
import { mkdtempSync, rmSync } from "node:fs";
import { createServer } from "node:net";
import type { Server } from "node:net";
import { homedir, tmpdir } from "node:os";
import { join } from "node:path";
import { PassThrough } from "node:stream";
import { afterEach, beforeEach, describe, expect, test as it, vi } from "vitest";

import { fromIni } from "./fromIni";

let iniProfileData: ParsedIniData = null as any;

function setIniProfileData(data: ParsedIniData) {
  iniProfileData = data;
  let buffer = "";
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

class MockNodeHttpHandler {
  static create(instanceOrOptions?: any) {
    if (typeof instanceOrOptions?.handle === "function") {
      return instanceOrOptions;
    }
    return new MockNodeHttpHandler();
  }

  async handle(request: HttpRequest) {
    const body = new PassThrough({});

    const region = (request.hostname.match(/sts\.(.*?)\./) || [, "unknown"])[1];

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
            sessionToken: "SSO_SESSION_TOKEN",
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
    } else {
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

describe("fromIni region search order", () => {
  beforeEach(() => {
    process.env.AWS_PROFILE = "default";
    iniProfileData = {
      default: {
        output: "json",
        region: "us-stsar-1",
        role_arn: "ROLE_ARN",
        role_session_name: "ROLE_SESSION_NAME",
        external_id: "EXTERNAL_ID",
        source_profile: "assume",
      },
      assume: {
        region: "us-stsar-1",
        aws_access_key_id: "ASSUME_STATIC_ACCESS_KEY",
        aws_secret_access_key: "ASSUME_STATIC_SECRET_KEY",
      },
    };
    setIniProfileData(iniProfileData);
  });

  afterEach(() => {
    delete process.env.AWS_PROFILE;
  });

  it("should use 1st priority for the clientConfig given to the provider factory", async () => {
    const sts = new STS({
      requestHandler: new MockNodeHttpHandler(),
      region: "ap-northeast-2",
      credentials: fromIni({
        clientConfig: {
          requestHandler: new MockNodeHttpHandler(),
          region: "ap-northeast-1",
        },
      }),
    });

    await sts.getCallerIdentity({});
    const credentials = await sts.config.credentials();
    expect(credentials).toMatchObject({
      accessKeyId: "STS_AR_ACCESS_KEY_ID",
      secretAccessKey: "STS_AR_SECRET_ACCESS_KEY",
      sessionToken: "STS_AR_SESSION_TOKEN_ap-northeast-1",
    });
  });

  it("should use 2nd priority for the profile region", async () => {
    const sts = new STS({
      requestHandler: new MockNodeHttpHandler(),
      region: "ap-northeast-2",
      credentials: fromIni({
        clientConfig: {
          requestHandler: new MockNodeHttpHandler(),
        },
      }),
    });

    await sts.getCallerIdentity({});
    const credentials = await sts.config.credentials();
    expect(credentials).toMatchObject({
      accessKeyId: "STS_AR_ACCESS_KEY_ID",
      secretAccessKey: "STS_AR_SECRET_ACCESS_KEY",
      sessionToken: "STS_AR_SESSION_TOKEN_us-stsar-1",
    });
  });

  it("should use 3rd priority for the caller client", async () => {
    delete iniProfileData.default.region;
    setIniProfileData(iniProfileData);

    const sts = new STS({
      requestHandler: new MockNodeHttpHandler(),
      region: "ap-northeast-2",
      credentials: fromIni({
        clientConfig: {
          requestHandler: new MockNodeHttpHandler(),
        },
      }),
    });

    await sts.getCallerIdentity({});
    const credentials = await sts.config.credentials();
    expect(credentials).toMatchObject({
      accessKeyId: "STS_AR_ACCESS_KEY_ID",
      secretAccessKey: "STS_AR_SECRET_ACCESS_KEY",
      sessionToken: "STS_AR_SESSION_TOKEN_ap-northeast-2",
    });
  });

  it("should use 4th priority for the config file region", async () => {
    const credentialsData = await fromIni({
      clientConfig: {
        requestHandler: new MockNodeHttpHandler(),
      },
    })();

    const sts = new STS({
      requestHandler: new MockNodeHttpHandler(),
      credentials: credentialsData,
    });

    await sts.getCallerIdentity({});
    const credentials = await sts.config.credentials();
    expect(credentials).toMatchObject({
      accessKeyId: "STS_AR_ACCESS_KEY_ID",
      secretAccessKey: "STS_AR_SECRET_ACCESS_KEY",
      sessionToken: "STS_AR_SESSION_TOKEN_us-stsar-1",
    });
  });

  it("should use 5th priority for the AWS_REGION value", async () => {
    process.env.AWS_REGION = "ap-northeast-1";
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
    };
    setIniProfileData(iniProfileData);

    const credentialsData = await fromIni({
      clientConfig: {
        requestHandler: new MockNodeHttpHandler(),
      },
    })();

    const sts = new STS({
      requestHandler: new MockNodeHttpHandler(),
      credentials: credentialsData,
    });

    await sts.getCallerIdentity({});
    const credentials = await sts.config.credentials();
    expect(credentials).toMatchObject({
      accessKeyId: "STS_AR_ACCESS_KEY_ID",
      secretAccessKey: "STS_AR_SECRET_ACCESS_KEY",
      sessionToken: "STS_AR_SESSION_TOKEN_ap-northeast-1",
    });
  });

  it("should use 6th priority for the default partition's default region", async () => {
    delete process.env.AWS_REGION;
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
    };
    setIniProfileData(iniProfileData);

    const credentialsData = await fromIni({
      clientConfig: {
        requestHandler: new MockNodeHttpHandler(),
      },
    })();

    const sts = new STS({
      requestHandler: new MockNodeHttpHandler(),
      region: "ap-northeast-2",
      credentials: credentialsData,
    });

    await sts.getCallerIdentity({});
    const credentials = await sts.config.credentials();
    expect(credentials).toMatchObject({
      accessKeyId: "STS_AR_ACCESS_KEY_ID",
      secretAccessKey: "STS_AR_SECRET_ACCESS_KEY",
      sessionToken: "STS_AR_SESSION_TOKEN_us-east-1",
    });
  });
});

describe("fromIni with the credential daemon", () => {
  let dir: string;
  let server: Server | undefined;
  let daemonRequests: string[];
  const credentialsFilepath = join(homedir(), ".aws", "credentials");

  const sessionReply =
    JSON.stringify({
      jsonrpc: "2.0",
      id: 1,
      result: {
        credential: "dev",
        material: {
          type: "session_credentials",
          access_key_id: "DAEMON_ACCESS_KEY",
          secret_access_key: "DAEMON_SECRET_KEY",
          session_token: "DAEMON_SESSION_TOKEN",
        },
        expires_at: "3000-01-01T00:00:00.123456789Z",
      },
    }) + "\n";

  const startDaemon = async (reply: string = sessionReply) => {
    const socketPath = join(dir, "d.sock");
    server = createServer((socket) => {
      let buffer = "";
      socket.on("data", (chunk) => {
        buffer += chunk.toString("utf8");
        if (!buffer.includes("\n")) {
          return;
        }
        daemonRequests.push(buffer);
        socket.end(reply);
      });
      socket.on("error", () => {});
    });
    await new Promise<void>((resolve, reject) => {
      server!.once("error", reject);
      server!.listen(socketPath, resolve);
    });
    process.env.AWS_CREDENTIAL_DAEMON_SOCKET = socketPath;
  };

  beforeEach(() => {
    dir = mkdtempSync(join(tmpdir(), "ini-daemon-"));
    daemonRequests = [];
    process.env.AWS_PROFILE = "dev";
    externalDataInterceptor.interceptFile(credentialsFilepath, "");
  });

  afterEach(async () => {
    delete process.env.AWS_PROFILE;
    delete process.env.AWS_CREDENTIAL_DAEMON_SOCKET;
    externalDataInterceptor.interceptFile(credentialsFilepath, "");
    if (server) {
      await new Promise((resolve) => server!.close(resolve));
      server = undefined;
    }
    rmSync(dir, { recursive: true, force: true });
  });

  it("gets credentials from the credential daemon", async () => {
    await startDaemon();
    setIniProfileData({
      dev: {
        daemon_credential: "dev",
        aws_access_key_id: "INI_STATIC_ACCESS_KEY",
        aws_secret_access_key: "INI_STATIC_SECRET_KEY",
      },
    });
    expect(await fromIni()()).toEqual({
      accessKeyId: "DAEMON_ACCESS_KEY",
      secretAccessKey: "DAEMON_SECRET_KEY",
      sessionToken: "DAEMON_SESSION_TOKEN",
      expiration: new Date("3000-01-01T00:00:00.123Z"),
      $source: { CREDENTIAL_DAEMON: "Aq" },
    });
    expect(daemonRequests).toEqual([
      `{"jsonrpc":"2.0","id":1,"method":"credential/get","params":{"credential":"dev"}}\n`,
    ]);
  });

  it("gives INVALID_CONFIG for an empty daemon_credential in the config file", async () => {
    await startDaemon();
    externalDataInterceptor.interceptFile(
      join(homedir(), ".aws", "config"),
      "[profile dev]\ndaemon_credential =\naws_access_key_id = AKID\naws_secret_access_key = SECRET\n"
    );
    await expect(fromIni()()).rejects.toMatchObject({
      code: "INVALID_CONFIG",
      tryNextLink: false,
      message: expect.stringContaining("daemon_credential"),
    });
    expect(daemonRequests).toEqual([]);
  });

  it("ignores daemon_credential in the credentials file", async () => {
    await startDaemon();
    setIniProfileData({ dev: { region: "us-west-2" } });
    externalDataInterceptor.interceptFile(
      credentialsFilepath,
      "[dev]\ndaemon_credential = dev\naws_access_key_id = CREDS_FILE_KEY\naws_secret_access_key = CREDS_FILE_SECRET\n"
    );
    expect(await fromIni()()).toMatchObject({
      accessKeyId: "CREDS_FILE_KEY",
      secretAccessKey: "CREDS_FILE_SECRET",
    });
    expect(daemonRequests).toEqual([]);
  });

  it("reauth-required-sso: sends account_id and role_name and exposes REAUTH_REQUIRED", async () => {
    await startDaemon(
      JSON.stringify({
        jsonrpc: "2.0",
        id: 1,
        error: { code: -32000, message: "daemon error", data: { code: "REAUTH_REQUIRED" } },
      }) + "\n"
    );
    externalDataInterceptor.interceptFile(
      join(homedir(), ".aws", "config"),
      "[profile dev]\nsso_session = corp\nsso_account_id = 111111111111\nsso_role_name = ReadOnly\n" +
        "daemon_credential = corp\n[sso-session corp]\nsso_start_url = https://corp.awsapps.com/start\n" +
        "sso_region = us-east-1\n"
    );
    await expect(fromIni()()).rejects.toMatchObject({
      name: "CredentialDaemonProviderError",
      code: "REAUTH_REQUIRED",
      tryNextLink: false,
      message: expect.stringContaining("daemon error"),
    });
    expect(daemonRequests.map((line) => JSON.parse(line))).toEqual([
      {
        jsonrpc: "2.0",
        id: 1,
        method: "credential/get",
        params: { credential: "corp", account_id: "111111111111", role_name: "ReadOnly" },
      },
    ]);
  });

  it("sso-neither-key-role-arn: assumes the requested profile's role with the source profile's keys", async () => {
    await startDaemon();
    externalDataInterceptor.interceptFile(
      join(homedir(), ".aws", "config"),
      "[profile dev]\nsso_session = corp\ndaemon_credential = corp\n" +
        "role_arn = arn:aws:iam::123456789012:role/Admin\nsource_profile = base\n" +
        "[profile base]\naws_access_key_id = AKIDBASE\naws_secret_access_key = s\n" +
        "[sso-session corp]\nsso_start_url = https://corp.awsapps.com/start\nsso_region = us-east-1\n"
    );
    const roleCredentials = { accessKeyId: "ASIAROLE", secretAccessKey: "ROLE_SECRET", sessionToken: "ROLE_TOKEN" };
    const roleAssumer = vi.fn().mockResolvedValue(roleCredentials);
    expect(await fromIni({ roleAssumer })()).toMatchObject(roleCredentials);
    expect(roleAssumer).toHaveBeenCalledTimes(1);
    expect(roleAssumer.mock.calls[0][0]).toMatchObject({ accessKeyId: "AKIDBASE", secretAccessKey: "s" });
    expect(roleAssumer.mock.calls[0][1]).toMatchObject({ RoleArn: "arn:aws:iam::123456789012:role/Admin" });
    expect(daemonRequests).toEqual([]);
  });

  it("rejects with NOT_RUNNING and sends no request when the daemon is not running", async () => {
    process.env.AWS_CREDENTIAL_DAEMON_SOCKET = join(dir, "missing.sock");
    setIniProfileData({ dev: { daemon_credential: "dev" } });
    const handler = new MockNodeHttpHandler();
    const handle = vi.spyOn(handler, "handle");
    const sts = new STS({
      requestHandler: handler,
      region: "us-west-2",
      credentials: fromIni(),
    });
    await expect(sts.getCallerIdentity({})).rejects.toMatchObject({
      name: "CredentialDaemonProviderError",
      code: "NOT_RUNNING",
      tryNextLink: false,
    });
    expect(handle).not.toHaveBeenCalled();
  });
});
