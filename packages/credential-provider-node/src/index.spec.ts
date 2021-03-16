import { ProviderError } from "@aws-sdk/property-provider";

import { defaultProvider, ENV_IMDS_DISABLED } from "./";

jest.mock("@aws-sdk/credential-provider-env", () => {
  const envProvider = jest.fn();
  return {
    fromEnv: jest.fn().mockReturnValue(envProvider),
  };
});
import { fromEnv } from "@aws-sdk/credential-provider-env";

const loadedConfig = {
  credentialsFile: {
    foo: { aws_access_key_id: "key", aws_secret_access_key: "secret" },
  },
  configFile: { bar: { aws_access_key_id: "key", aws_secret_access_key: "secret" } },
};
jest.mock("@aws-sdk/shared-ini-file-loader", () => ({
  loadSharedConfigFiles: jest.fn().mockReturnValue(loadedConfig),
}));
import { loadSharedConfigFiles } from "@aws-sdk/shared-ini-file-loader";

jest.mock("@aws-sdk/credential-provider-sso", () => {
  const ssoProvider = jest.fn();
  return {
    fromSSO: jest.fn().mockReturnValue(ssoProvider),
  };
});
import { fromSSO, FromSSOInit } from "@aws-sdk/credential-provider-sso";

jest.mock("@aws-sdk/credential-provider-ini", () => {
  const iniProvider = jest.fn();
  return {
    ENV_PROFILE: "AWS_PROFILE",
    fromIni: jest.fn().mockReturnValue(iniProvider),
  };
});
import { ENV_PROFILE, fromIni, FromIniInit } from "@aws-sdk/credential-provider-ini";
import { ENV_CONFIG_PATH, ENV_CREDENTIALS_PATH } from "@aws-sdk/shared-ini-file-loader";

jest.mock("@aws-sdk/credential-provider-process", () => {
  const processProvider = jest.fn();
  return {
    ENV_PROFILE: "AWS_PROFILE",
    fromProcess: jest.fn(() => processProvider),
  };
});
import { fromProcess, FromProcessInit } from "@aws-sdk/credential-provider-process";

jest.mock("@aws-sdk/credential-provider-imds", () => {
  const containerMdsProvider = jest.fn();
  const instanceMdsProvider = jest.fn();
  return {
    fromContainerMetadata: jest.fn().mockReturnValue(containerMdsProvider),
    fromInstanceMetadata: jest.fn().mockReturnValue(instanceMdsProvider),
    ENV_CMDS_FULL_URI: "AWS_CONTAINER_CREDENTIALS_FULL_URI",
    ENV_CMDS_RELATIVE_URI: "AWS_CONTAINER_CREDENTIALS_RELATIVE_URI",
  };
});

import {
  ENV_CMDS_FULL_URI,
  ENV_CMDS_RELATIVE_URI,
  fromContainerMetadata,
  fromInstanceMetadata,
  RemoteProviderInit,
} from "@aws-sdk/credential-provider-imds";

const envAtLoadTime: { [key: string]: string | undefined } = [
  ENV_CONFIG_PATH,
  ENV_CREDENTIALS_PATH,
  ENV_PROFILE,
  ENV_CMDS_FULL_URI,
  ENV_CMDS_RELATIVE_URI,
  ENV_IMDS_DISABLED,
  "HOME",
  "USERPROFILE",
  "HOMEPATH",
  "HOMEDRIVE",
].reduce((envState: { [key: string]: string | undefined }, varName: string) => {
  envState[varName] = process.env[varName];
  return envState;
}, {});

beforeEach(() => {
  Object.keys(envAtLoadTime).forEach((envKey) => {
    delete process.env[envKey];
  });

  (fromEnv() as any).mockClear();
  (fromSSO() as any).mockClear();
  (fromIni() as any).mockClear();
  (fromProcess() as any).mockClear();
  (fromContainerMetadata() as any).mockClear();
  (fromInstanceMetadata() as any).mockClear();
  (fromEnv as any).mockClear();
  (fromSSO as any).mockClear();
  (fromIni as any).mockClear();
  (fromProcess as any).mockClear();
  (fromContainerMetadata as any).mockClear();
  (fromInstanceMetadata as any).mockClear();
  (loadSharedConfigFiles as any).mockClear();
});

afterAll(() => {
  Object.keys(envAtLoadTime).forEach((envKey) => {
    if (envAtLoadTime[envKey] === undefined) {
      delete process.env[envKey];
    } else {
      process.env[envKey] = envAtLoadTime[envKey];
    }
  });
});

describe("defaultProvider", () => {
  it("should stop after the environmental provider if credentials have been found", async () => {
    const creds = {
      accessKeyId: "foo",
      secretAccessKey: "bar",
    };

    (fromEnv() as any).mockImplementation(() => Promise.resolve(creds));

    expect(await defaultProvider()()).toEqual(creds);
    expect((fromEnv() as any).mock.calls.length).toBe(1);
    expect((fromIni() as any).mock.calls.length).toBe(0);
    expect((fromProcess() as any).mock.calls.length).toBe(0);
    expect((fromContainerMetadata() as any).mock.calls.length).toBe(0);
    expect((fromInstanceMetadata() as any).mock.calls.length).toBe(0);
  });

  it("should stop after the SSO provider if credentials have been found", async () => {
    const creds = {
      accessKeyId: "foo",
      secretAccessKey: "bar",
    };

    (fromEnv() as any).mockImplementation(() => Promise.reject(new ProviderError("Nothing here!")));
    (fromSSO() as any).mockImplementation(() => Promise.resolve(creds));

    expect(await defaultProvider()()).toEqual(creds);
    expect((fromEnv() as any).mock.calls.length).toBe(1);
    expect((fromSSO() as any).mock.calls.length).toBe(1);
    expect((fromIni() as any).mock.calls.length).toBe(0);
    expect((fromProcess() as any).mock.calls.length).toBe(0);
    expect((fromContainerMetadata() as any).mock.calls.length).toBe(0);
    expect((fromInstanceMetadata() as any).mock.calls.length).toBe(0);
  });

  it("should stop after the ini provider if credentials have been found", async () => {
    const creds = {
      accessKeyId: "foo",
      secretAccessKey: "bar",
    };

    (fromEnv() as any).mockImplementation(() => Promise.reject(new ProviderError("Nothing here!")));
    (fromSSO() as any).mockImplementation(() => Promise.reject(new ProviderError("Nothing here!")));
    (fromIni() as any).mockImplementation(() => Promise.resolve(creds));

    expect(await defaultProvider()()).toEqual(creds);
    expect((fromEnv() as any).mock.calls.length).toBe(1);
    expect((fromSSO() as any).mock.calls.length).toBe(1);
    expect((fromIni() as any).mock.calls.length).toBe(1);
    expect((fromProcess() as any).mock.calls.length).toBe(0);
    expect((fromContainerMetadata() as any).mock.calls.length).toBe(0);
    expect((fromInstanceMetadata() as any).mock.calls.length).toBe(0);
  });

  it("should stop after the process provider if credentials have been found", async () => {
    const creds = {
      accessKeyId: "foo",
      secretAccessKey: "bar",
    };

    (fromEnv() as any).mockImplementation(() => Promise.reject(new ProviderError("Nothing here!")));
    (fromSSO() as any).mockImplementation(() => Promise.reject(new ProviderError("Nothing here!")));
    (fromIni() as any).mockImplementation(() => Promise.reject(new ProviderError("Nothing here!")));
    (fromProcess() as any).mockImplementation(() => Promise.resolve(creds));

    expect(await defaultProvider()()).toEqual(creds);
    expect((fromEnv() as any).mock.calls.length).toBe(1);
    expect((fromSSO() as any).mock.calls.length).toBe(1);
    expect((fromIni() as any).mock.calls.length).toBe(1);
    expect((fromProcess() as any).mock.calls.length).toBe(1);
    expect((fromContainerMetadata() as any).mock.calls.length).toBe(0);
    expect((fromInstanceMetadata() as any).mock.calls.length).toBe(0);
  });

  it("should continue on to the IMDS provider if no env, ini or process credentials have been found", async () => {
    const creds = {
      accessKeyId: "foo",
      secretAccessKey: "bar",
    };
    (fromEnv() as any).mockImplementation(() => Promise.reject(new ProviderError("Keep moving!")));
    (fromSSO() as any).mockImplementation(() => Promise.reject(new ProviderError("Nope!")));
    (fromIni() as any).mockImplementation(() => Promise.reject(new ProviderError("Nothing here!")));
    (fromProcess() as any).mockImplementation(() => Promise.reject(new ProviderError("Nor here!")));
    (fromInstanceMetadata() as any).mockImplementation(() => Promise.resolve(creds));

    expect(await defaultProvider()()).toEqual(creds);
    expect((fromEnv() as any).mock.calls.length).toBe(1);
    expect((fromSSO() as any).mock.calls.length).toBe(1);
    expect((fromIni() as any).mock.calls.length).toBe(1);
    expect((fromProcess() as any).mock.calls.length).toBe(1);
    expect((fromContainerMetadata() as any).mock.calls.length).toBe(0);
    expect((fromInstanceMetadata() as any).mock.calls.length).toBe(1);
  });

  it("should not invoke the EC2 IMDS provider when the disabling environment variable is set", async () => {
    const creds = {
      accessKeyId: "foo",
      secretAccessKey: "bar",
    };

    (fromEnv() as any).mockImplementation(() => Promise.reject(new ProviderError("Keep moving!")));
    (fromSSO() as any).mockImplementation(() => Promise.reject(new ProviderError("Nope!")));
    (fromIni() as any).mockImplementation(() => Promise.reject(new ProviderError("Nothing here!")));
    (fromProcess() as any).mockImplementation(() => Promise.reject(new ProviderError("Nor here!")));
    (fromInstanceMetadata() as any).mockImplementation(() => Promise.resolve(creds));

    process.env[ENV_IMDS_DISABLED] = "1";

    await expect(defaultProvider()()).rejects.toMatchObject(
      new ProviderError("EC2 Instance Metadata Service access disabled")
    );
  });

  it("should continue on to the ECS IMDS provider if no env or ini credentials have been found and an ECS environment variable has been set", async () => {
    const creds = {
      accessKeyId: "foo",
      secretAccessKey: "bar",
    };

    (fromEnv() as any).mockImplementation(() => Promise.reject(new ProviderError("Keep moving!")));
    (fromSSO() as any).mockImplementation(() => Promise.reject(new ProviderError("Nope!")));
    (fromIni() as any).mockImplementation(() => Promise.reject(new ProviderError("Nothing here!")));
    (fromProcess() as any).mockImplementation(() => Promise.reject(new ProviderError("Nor here!")));
    (fromInstanceMetadata() as any).mockImplementation(() => Promise.reject(new Error("PANIC")));
    (fromContainerMetadata() as any).mockImplementation(() => Promise.resolve(creds));

    process.env[ENV_CMDS_RELATIVE_URI] = "/credentials";

    expect(await defaultProvider()()).toEqual(creds);
    expect((fromEnv() as any).mock.calls.length).toBe(1);
    expect((fromSSO() as any).mock.calls.length).toBe(1);
    expect((fromIni() as any).mock.calls.length).toBe(1);
    expect((fromProcess() as any).mock.calls.length).toBe(1);
    expect((fromContainerMetadata() as any).mock.calls.length).toBe(1);
    expect((fromInstanceMetadata() as any).mock.calls.length).toBe(0);
  });

  it("should read config files only once for all providers", async () => {
    const creds = {
      accessKeyId: "foo",
      secretAccessKey: "bar",
    };

    (fromEnv() as any).mockImplementation(() => Promise.reject(new ProviderError("Keep moving!")));
    (fromSSO() as any).mockImplementation(() => Promise.reject(new ProviderError("Nope!")));
    (fromIni() as any).mockImplementation(() => Promise.reject(new ProviderError("Nothing here!")));
    (fromProcess() as any).mockImplementation(() => Promise.reject(new ProviderError("Nor here!")));
    (fromInstanceMetadata() as any).mockImplementation(() => Promise.resolve(creds));

    await expect(defaultProvider()()).resolves;
    expect((loadSharedConfigFiles as any).mock.calls.length).toBe(1);
    expect((fromIni as any).mock.calls[1][0]).toMatchObject({ loadedConfig: loadSharedConfigFiles() });
    expect((fromSSO as any).mock.calls[1][0]).toMatchObject({ loadedConfig: loadSharedConfigFiles() });
    expect((fromProcess as any).mock.calls[1][0]).toMatchObject({ loadedConfig: loadSharedConfigFiles() });
  });

  it("should pass configuration on to the SSO provider", async () => {
    const ssoConfig: FromSSOInit = {
      profile: "foo",
      filepath: "/home/user/.secrets/credentials.ini",
      configFilepath: "/home/user/.secrets/credentials.ini",
    };

    (fromEnv() as any).mockImplementation(() => Promise.reject(new ProviderError("Keep moving!")));
    (fromSSO() as any).mockImplementation(() =>
      Promise.resolve({
        accessKeyId: "foo",
        secretAccessKey: "bar",
      })
    );

    (fromSSO as any).mockClear();

    await expect(defaultProvider(ssoConfig)()).resolves;

    expect((fromSSO as any).mock.calls.length).toBe(1);
    expect((fromSSO as any).mock.calls[0][0]).toEqual({ ...ssoConfig, loadedConfig });
  });

  it("should pass configuration on to the ini provider", async () => {
    const iniConfig: FromIniInit = {
      profile: "foo",
      mfaCodeProvider: () => Promise.resolve("mfaCode"),
      roleAssumer: () =>
        Promise.resolve({
          accessKeyId: "fizz",
          secretAccessKey: "buzz",
        }),
      filepath: "/home/user/.secrets/credentials.ini",
      configFilepath: "/home/user/.secrets/credentials.ini",
    };

    (fromEnv() as any).mockImplementation(() => Promise.reject(new ProviderError("Keep moving!")));
    (fromIni() as any).mockImplementation(() =>
      Promise.resolve({
        accessKeyId: "foo",
        secretAccessKey: "bar",
      })
    );

    (fromIni as any).mockClear();

    await expect(defaultProvider(iniConfig)()).resolves;

    expect((fromIni as any).mock.calls.length).toBe(1);
    expect((fromIni as any).mock.calls[0][0]).toEqual({ ...iniConfig, loadedConfig });
  });

  it("should pass configuration on to the process provider", async () => {
    const processConfig: FromProcessInit = {
      filepath: "/home/user/.secrets/credentials.ini",
      configFilepath: "/home/user/.secrets/credentials.ini",
    };

    (fromEnv() as any).mockImplementation(() => Promise.reject(new ProviderError("Keep moving!")));
    (fromIni() as any).mockImplementation(() => Promise.reject(new ProviderError("Nothing here!")));
    (fromProcess() as any).mockImplementation(() =>
      Promise.resolve({
        accessKeyId: "foo",
        secretAccessKey: "bar",
      })
    );

    (fromProcess as any).mockClear();

    await expect(defaultProvider(processConfig)()).resolves;
    expect((fromProcess as any).mock.calls.length).toBe(1);
    expect((fromProcess as any).mock.calls.length).toBe(1);
    expect((fromProcess as any).mock.calls[0][0]).toEqual({ ...processConfig, loadedConfig });
  });

  it("should pass configuration on to the IMDS provider", async () => {
    const imdsConfig: RemoteProviderInit = {
      timeout: 2000,
      maxRetries: 3,
    };

    (fromEnv() as any).mockImplementation(() => Promise.reject(new ProviderError("Keep moving!")));
    (fromIni() as any).mockImplementation(() => Promise.reject(new ProviderError("Nothing here!")));
    (fromProcess() as any).mockImplementation(() => Promise.reject(new ProviderError("Nor here!")));
    (fromInstanceMetadata() as any).mockImplementation(() =>
      Promise.resolve({
        accessKeyId: "foo",
        secretAccessKey: "bar",
      })
    );

    (fromInstanceMetadata as any).mockClear();

    await expect(defaultProvider(imdsConfig)()).resolves;

    expect((fromInstanceMetadata as any).mock.calls.length).toBe(1);
    expect((fromInstanceMetadata as any).mock.calls[0][0]).toEqual({ ...imdsConfig, loadedConfig });
  });

  it("should pass configuration on to the ECS IMDS provider", async () => {
    const ecsImdsConfig: RemoteProviderInit = {
      timeout: 2000,
      maxRetries: 3,
    };

    (fromEnv() as any).mockImplementation(() => Promise.reject(new ProviderError("Keep moving!")));
    (fromIni() as any).mockImplementation(() => Promise.reject(new ProviderError("Nothing here!")));
    (fromContainerMetadata() as any).mockImplementation(() =>
      Promise.resolve({
        accessKeyId: "foo",
        secretAccessKey: "bar",
      })
    );

    (fromContainerMetadata as any).mockClear();

    process.env[ENV_CMDS_RELATIVE_URI] = "/credentials";

    await expect(defaultProvider(ecsImdsConfig)()).resolves;

    expect((fromContainerMetadata as any).mock.calls.length).toBe(1);
    expect((fromContainerMetadata as any).mock.calls[0][0]).toEqual({ ...ecsImdsConfig, loadedConfig });
  });

  it("should return the same promise across invocations", async () => {
    const creds = {
      accessKeyId: "foo",
      secretAccessKey: "bar",
    };

    (fromEnv() as any).mockImplementation(() => Promise.resolve(creds));

    const provider = defaultProvider();

    expect(await provider()).toEqual(creds);

    expect(provider()).toStrictEqual(provider());

    expect(await provider()).toEqual(creds);
    expect((fromEnv() as any).mock.calls.length).toBe(1);
  });

  describe("memoization", () => {
    const dateDotNow = Date.now;

    afterEach(() => {
      Date.now = dateDotNow;
    });

    it("should invoke provider again when credentials expire", async () => {
      const clockMock = (Date.now = jest.fn());
      clockMock.mockReturnValue(0);
      const provider = fromEnv() as any;
      provider.mockClear();
      provider.mockImplementation(() =>
        Promise.resolve({
          accessKeyId: "foo",
          secretAccessKey: "bar",
          expiration: new Date(Date.now() + 600000), // expires in ten minutes
        })
      );
      const memoized = defaultProvider();

      expect((await memoized()).accessKeyId).toEqual("foo");
      expect(provider.mock.calls.length).toBe(1);
      expect((await memoized()).secretAccessKey).toEqual("bar");
      expect(provider.mock.calls.length).toBe(1);

      clockMock.mockReset();
      clockMock.mockReturnValue(601000); // One second past previous expiration

      expect((await memoized()).accessKeyId).toEqual("foo");
      expect(provider.mock.calls.length).toBe(2);
      expect((await memoized()).secretAccessKey).toEqual("bar");
      expect(provider.mock.calls.length).toBe(2);
    });
  });

  // CF https://github.com/boto/botocore/blob/1.8.32/botocore/credentials.py#L104
  describe("explicit profiles", () => {
    it("should only consult SSO provider if profile has been set", async () => {
      const creds = {
        accessKeyId: "foo",
        secretAccessKey: "bar",
      };

      (fromEnv() as any).mockImplementation(() => Promise.reject(new ProviderError("PANIC")));
      (fromSSO() as any).mockImplementation(() => Promise.resolve(Promise.resolve(creds)));
      (fromIni() as any).mockImplementation(() => Promise.reject(new ProviderError("PANIC")));
      (fromInstanceMetadata() as any).mockImplementation(() => Promise.reject(new ProviderError("PANIC")));
      (fromContainerMetadata() as any).mockImplementation(() => Promise.reject(new ProviderError("PANIC")));

      expect(await defaultProvider({ profile: "foo" })()).toEqual(creds);
      expect((fromEnv() as any).mock.calls.length).toBe(0);
      expect((fromSSO() as any).mock.calls.length).toBe(1);
      expect((fromIni() as any).mock.calls.length).toBe(0);
      expect((fromContainerMetadata() as any).mock.calls.length).toBe(0);
      expect((fromInstanceMetadata() as any).mock.calls.length).toBe(0);
    });

    it("should only consult SSO provider if the profile environment variable has been set", async () => {
      const creds = {
        accessKeyId: "foo",
        secretAccessKey: "bar",
      };

      (fromEnv() as any).mockImplementation(() => Promise.reject(new ProviderError("PANIC")));
      (fromSSO() as any).mockImplementation(() => Promise.resolve(creds));
      (fromIni() as any).mockImplementation(() => Promise.reject(new ProviderError("PANIC")));
      (fromProcess() as any).mockImplementation(() => Promise.reject(new ProviderError("PANIC")));
      (fromInstanceMetadata() as any).mockImplementation(() => Promise.reject(new ProviderError("PANIC")));
      (fromContainerMetadata() as any).mockImplementation(() => Promise.reject(new ProviderError("PANIC")));

      process.env[ENV_PROFILE] = "foo";
      expect(await defaultProvider()()).toEqual(creds);
      expect((fromEnv() as any).mock.calls.length).toBe(0);
      expect((fromSSO() as any).mock.calls.length).toBe(1);
      expect((fromIni() as any).mock.calls.length).toBe(0);
      expect((fromProcess() as any).mock.calls.length).toBe(0);
      expect((fromContainerMetadata() as any).mock.calls.length).toBe(0);
      expect((fromInstanceMetadata() as any).mock.calls.length).toBe(0);
    });

    it("should consult ini provider if no credentials is not found in SSO provider", async () => {
      const creds = {
        accessKeyId: "foo",
        secretAccessKey: "bar",
      };

      (fromEnv() as any).mockImplementation(() => Promise.reject(new ProviderError("PANIC")));
      (fromSSO() as any).mockImplementation(() => Promise.reject(new ProviderError("PANIC")));
      (fromIni() as any).mockImplementation(() => Promise.resolve(Promise.resolve(creds)));
      (fromInstanceMetadata() as any).mockImplementation(() => Promise.reject(new ProviderError("PANIC")));
      (fromContainerMetadata() as any).mockImplementation(() => Promise.reject(new ProviderError("PANIC")));

      expect(await defaultProvider({ profile: "foo" })()).toEqual(creds);
      expect((fromEnv() as any).mock.calls.length).toBe(0);
      expect((fromSSO() as any).mock.calls.length).toBe(1);
      expect((fromIni() as any).mock.calls.length).toBe(1);
      expect((fromContainerMetadata() as any).mock.calls.length).toBe(0);
      expect((fromInstanceMetadata() as any).mock.calls.length).toBe(0);
    });

    it("should consult the process provider if no credentials are found in the ini provider", async () => {
      const creds = {
        accessKeyId: "foo",
        secretAccessKey: "bar",
      };

      (fromEnv() as any).mockImplementation(() => Promise.reject(new ProviderError("PANIC")));
      (fromSSO() as any).mockImplementation(() => Promise.reject(new ProviderError("PANIC")));
      (fromIni() as any).mockImplementation(() => Promise.reject(new ProviderError("PANIC")));
      (fromProcess() as any).mockImplementation(() => Promise.resolve(creds));
      (fromInstanceMetadata() as any).mockImplementation(() => Promise.reject(new ProviderError("PANIC")));
      (fromContainerMetadata() as any).mockImplementation(() => Promise.reject(new ProviderError("PANIC")));

      process.env[ENV_PROFILE] = "foo";
      expect(await defaultProvider()()).toEqual(creds);
      expect((fromEnv() as any).mock.calls.length).toBe(0);
      expect((fromSSO() as any).mock.calls.length).toBe(1);
      expect((fromIni() as any).mock.calls.length).toBe(1);
      expect((fromProcess() as any).mock.calls.length).toBe(1);
      expect((fromContainerMetadata() as any).mock.calls.length).toBe(0);
      expect((fromInstanceMetadata() as any).mock.calls.length).toBe(0);
    });
  });
});
