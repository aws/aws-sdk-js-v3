import { defaultProvider, ENV_IMDS_DISABLED } from "./";
import { ProviderError } from "@aws-sdk/property-provider";

jest.mock("@aws-sdk/credential-provider-env", () => {
  const envProvider = jest.fn();
  return {
    fromEnv: jest.fn().mockReturnValue(envProvider)
  };
});
import { fromEnv } from "@aws-sdk/credential-provider-env";

jest.mock("@aws-sdk/credential-provider-ini", () => {
  const iniProvider = jest.fn();
  return {
    ENV_PROFILE: "AWS_PROFILE",
    fromIni: jest.fn().mockReturnValue(iniProvider)
  };
});
import {
  ENV_PROFILE,
  fromIni,
  FromIniInit
} from "@aws-sdk/credential-provider-ini";

import {
  ENV_CONFIG_PATH,
  ENV_CREDENTIALS_PATH
} from "@aws-sdk/shared-ini-file-loader";

jest.mock("@aws-sdk/credential-provider-process", () => {
  const processProvider = jest.fn();
  return {
    ENV_PROFILE: "AWS_PROFILE",
    fromProcess: jest.fn(() => processProvider)
  };
});
import {
  fromProcess,
  FromProcessInit
} from "@aws-sdk/credential-provider-process";

jest.mock("@aws-sdk/credential-provider-imds", () => {
  const containerMdsProvider = jest.fn();
  const instanceMdsProvider = jest.fn();
  return {
    fromContainerMetadata: jest.fn().mockReturnValue(containerMdsProvider),
    fromInstanceMetadata: jest.fn().mockReturnValue(instanceMdsProvider),
    ENV_CMDS_FULL_URI: "AWS_CONTAINER_CREDENTIALS_FULL_URI",
    ENV_CMDS_RELATIVE_URI: "AWS_CONTAINER_CREDENTIALS_RELATIVE_URI"
  };
});
import {
  ENV_CMDS_FULL_URI,
  ENV_CMDS_RELATIVE_URI,
  fromContainerMetadata,
  fromInstanceMetadata,
  RemoteProviderInit
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
  "HOMEDRIVE"
].reduce((envState: { [key: string]: string | undefined }, varName: string) => {
  envState[varName] = process.env[varName];
  return envState;
}, {});

beforeEach(() => {
  Object.keys(envAtLoadTime).forEach(envKey => {
    delete process.env[envKey];
  });

  (fromEnv() as any).mockClear();
  (fromIni() as any).mockClear();
  (fromProcess() as any).mockClear();
  (fromContainerMetadata() as any).mockClear();
  (fromInstanceMetadata() as any).mockClear();
  (fromEnv as any).mockClear();
  (fromIni as any).mockClear();
  (fromProcess as any).mockClear();
  (fromContainerMetadata as any).mockClear();
  (fromInstanceMetadata as any).mockClear();
});

afterAll(() => {
  Object.keys(envAtLoadTime).forEach(envKey => {
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
      secretAccessKey: "bar"
    };

    (fromEnv() as any).mockImplementation(() => Promise.resolve(creds));

    expect(await defaultProvider()()).toEqual(creds);
    expect((fromEnv() as any).mock.calls.length).toBe(1);
    expect((fromIni() as any).mock.calls.length).toBe(0);
    expect((fromProcess() as any).mock.calls.length).toBe(0);
    expect((fromContainerMetadata() as any).mock.calls.length).toBe(0);
    expect((fromInstanceMetadata() as any).mock.calls.length).toBe(0);
  });

  it("should stop after the ini provider if credentials have been found", async () => {
    const creds = {
      accessKeyId: "foo",
      secretAccessKey: "bar"
    };

    (fromEnv() as any).mockImplementation(() =>
      Promise.reject(new ProviderError("Nothing here!"))
    );
    (fromIni() as any).mockImplementation(() => Promise.resolve(creds));

    expect(await defaultProvider()()).toEqual(creds);
    expect((fromEnv() as any).mock.calls.length).toBe(1);
    expect((fromIni() as any).mock.calls.length).toBe(1);
    expect((fromProcess() as any).mock.calls.length).toBe(0);
    expect((fromContainerMetadata() as any).mock.calls.length).toBe(0);
    expect((fromInstanceMetadata() as any).mock.calls.length).toBe(0);
  });

  it("should stop after the process provider if credentials have been found", async () => {
    const creds = {
      accessKeyId: "foo",
      secretAccessKey: "bar"
    };

    (fromEnv() as any).mockImplementation(() =>
      Promise.reject(new ProviderError("Nothing here!"))
    );
    (fromIni() as any).mockImplementation(() =>
      Promise.reject(new ProviderError("Nothing here!"))
    );
    (fromProcess() as any).mockImplementation(() => Promise.resolve(creds));

    expect(await defaultProvider()()).toEqual(creds);
    expect((fromEnv() as any).mock.calls.length).toBe(1);
    expect((fromIni() as any).mock.calls.length).toBe(1);
    expect((fromProcess() as any).mock.calls.length).toBe(1);
    expect((fromContainerMetadata() as any).mock.calls.length).toBe(0);
    expect((fromInstanceMetadata() as any).mock.calls.length).toBe(0);
  });

  it("should continue on to the IMDS provider if no env, ini or process credentials have been found", async () => {
    const creds = {
      accessKeyId: "foo",
      secretAccessKey: "bar"
    };
    (fromEnv() as any).mockImplementation(() =>
      Promise.reject(new ProviderError("Keep moving!"))
    );
    (fromIni() as any).mockImplementation(() =>
      Promise.reject(new ProviderError("Nothing here!"))
    );
    (fromProcess() as any).mockImplementation(() =>
      Promise.reject(new ProviderError("Nor here!"))
    );
    (fromInstanceMetadata() as any).mockImplementation(() =>
      Promise.resolve(creds)
    );

    expect(await defaultProvider()()).toEqual(creds);
    expect((fromEnv() as any).mock.calls.length).toBe(1);
    expect((fromIni() as any).mock.calls.length).toBe(1);
    expect((fromProcess() as any).mock.calls.length).toBe(1);
    expect((fromContainerMetadata() as any).mock.calls.length).toBe(0);
    expect((fromInstanceMetadata() as any).mock.calls.length).toBe(1);
  });

  it("should not invoke the EC2 IMDS provider when the disabling environment variable is set", async () => {
    const creds = {
      accessKeyId: "foo",
      secretAccessKey: "bar"
    };

    (fromEnv() as any).mockImplementation(() =>
      Promise.reject(new ProviderError("Keep moving!"))
    );
    (fromIni() as any).mockImplementation(() =>
      Promise.reject(new ProviderError("Nothing here!"))
    );
    (fromProcess() as any).mockImplementation(() =>
      Promise.reject(new ProviderError("Nor here!"))
    );
    (fromInstanceMetadata() as any).mockImplementation(() =>
      Promise.resolve(creds)
    );

    process.env[ENV_IMDS_DISABLED] = "1";

    await expect(defaultProvider()()).rejects.toMatchObject(
      new ProviderError("EC2 Instance Metadata Service access disabled")
    );
  });

  it("should continue on to the ECS IMDS provider if no env or ini credentials have been found and an ECS environment variable has been set", async () => {
    const creds = {
      accessKeyId: "foo",
      secretAccessKey: "bar"
    };

    (fromEnv() as any).mockImplementation(() =>
      Promise.reject(new ProviderError("Keep moving!"))
    );
    (fromIni() as any).mockImplementation(() =>
      Promise.reject(new ProviderError("Nothing here!"))
    );
    (fromProcess() as any).mockImplementation(() =>
      Promise.reject(new ProviderError("Nor here!"))
    );
    (fromInstanceMetadata() as any).mockImplementation(() =>
      Promise.reject(new Error("PANIC"))
    );
    (fromContainerMetadata() as any).mockImplementation(() =>
      Promise.resolve(creds)
    );

    process.env[ENV_CMDS_RELATIVE_URI] = "/credentials";

    expect(await defaultProvider()()).toEqual(creds);
    expect((fromEnv() as any).mock.calls.length).toBe(1);
    expect((fromIni() as any).mock.calls.length).toBe(1);
    expect((fromProcess() as any).mock.calls.length).toBe(1);
    expect((fromContainerMetadata() as any).mock.calls.length).toBe(1);
    expect((fromInstanceMetadata() as any).mock.calls.length).toBe(0);
  });

  it("should pass configuration on to the ini provider", async () => {
    const iniConfig: FromIniInit = {
      profile: "foo",
      mfaCodeProvider: () => Promise.resolve("mfaCode"),
      roleAssumer: () =>
        Promise.resolve({
          accessKeyId: "fizz",
          secretAccessKey: "buzz"
        }),
      filepath: "/home/user/.secrets/credentials.ini",
      configFilepath: "/home/user/.secrets/credentials.ini"
    };

    (fromEnv() as any).mockImplementation(() =>
      Promise.reject(new ProviderError("Keep moving!"))
    );
    (fromIni() as any).mockImplementation(() =>
      Promise.resolve({
        accessKeyId: "foo",
        secretAccessKey: "bar"
      })
    );

    (fromIni as any).mockClear();

    await expect(defaultProvider(iniConfig)()).resolves;

    expect((fromIni as any).mock.calls.length).toBe(1);
    expect((fromIni as any).mock.calls[0][0]).toBe(iniConfig);
  });

  it("should pass configuration on to the process provider", async () => {
    const processConfig: FromProcessInit = {
      filepath: "/home/user/.secrets/credentials.ini",
      configFilepath: "/home/user/.secrets/credentials.ini"
    };

    (fromEnv() as any).mockImplementation(() =>
      Promise.reject(new ProviderError("Keep moving!"))
    );
    (fromIni() as any).mockImplementation(() =>
      Promise.reject(new ProviderError("Nothing here!"))
    );
    (fromProcess() as any).mockImplementation(() =>
      Promise.resolve({
        accessKeyId: "foo",
        secretAccessKey: "bar"
      })
    );

    (fromProcess as any).mockClear();

    await expect(defaultProvider(processConfig)()).resolves;
    expect((fromProcess as any).mock.calls.length).toBe(1);
    expect((fromProcess as any).mock.calls.length).toBe(1);
    expect((fromProcess as any).mock.calls[0][0]).toBe(processConfig);
  });

  it("should pass configuration on to the IMDS provider", async () => {
    const imdsConfig: RemoteProviderInit = {
      timeout: 2000,
      maxRetries: 3
    };

    (fromEnv() as any).mockImplementation(() =>
      Promise.reject(new ProviderError("Keep moving!"))
    );
    (fromIni() as any).mockImplementation(() =>
      Promise.reject(new ProviderError("Nothing here!"))
    );
    (fromProcess() as any).mockImplementation(() =>
      Promise.reject(new ProviderError("Nor here!"))
    );
    (fromInstanceMetadata() as any).mockImplementation(() =>
      Promise.resolve({
        accessKeyId: "foo",
        secretAccessKey: "bar"
      })
    );

    (fromInstanceMetadata as any).mockClear();

    await expect(defaultProvider(imdsConfig)()).resolves;

    expect((fromInstanceMetadata as any).mock.calls.length).toBe(1);
    expect((fromInstanceMetadata as any).mock.calls[0][0]).toBe(imdsConfig);
  });

  it("should pass configuration on to the ECS IMDS provider", async () => {
    const ecsImdsConfig: RemoteProviderInit = {
      timeout: 2000,
      maxRetries: 3
    };

    (fromEnv() as any).mockImplementation(() =>
      Promise.reject(new ProviderError("Keep moving!"))
    );
    (fromIni() as any).mockImplementation(() =>
      Promise.reject(new ProviderError("Nothing here!"))
    );
    (fromContainerMetadata() as any).mockImplementation(() =>
      Promise.resolve({
        accessKeyId: "foo",
        secretAccessKey: "bar"
      })
    );

    (fromContainerMetadata as any).mockClear();

    process.env[ENV_CMDS_RELATIVE_URI] = "/credentials";

    await expect(defaultProvider(ecsImdsConfig)()).resolves;

    expect((fromContainerMetadata as any).mock.calls.length).toBe(1);
    expect((fromContainerMetadata as any).mock.calls[0][0]).toBe(ecsImdsConfig);
  });

  it("should return the same promise across invocations", async () => {
    const creds = {
      accessKeyId: "foo",
      secretAccessKey: "bar"
    };

    (fromEnv() as any).mockImplementation(() => Promise.resolve(creds));

    const provider = defaultProvider();

    expect(await provider()).toEqual(creds);

    expect(provider()).toBe(provider());

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
          expiration: Date.now() + 600 // expires in ten minutes
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
    it("should only consult the ini provider if a profile has been specified", async () => {
      const creds = {
        accessKeyId: "foo",
        secretAccessKey: "bar"
      };

      (fromEnv() as any).mockImplementation(() =>
        Promise.reject(new Error("PANIC"))
      );
      (fromIni() as any).mockImplementation(() => Promise.resolve(creds));
      (fromInstanceMetadata() as any).mockImplementation(() =>
        Promise.reject(new Error("PANIC"))
      );
      (fromContainerMetadata() as any).mockImplementation(() =>
        Promise.reject(new Error("PANIC"))
      );

      expect(await defaultProvider({ profile: "foo" })()).toEqual(creds);
      expect((fromEnv() as any).mock.calls.length).toBe(0);
      expect((fromIni() as any).mock.calls.length).toBe(1);
      expect((fromContainerMetadata() as any).mock.calls.length).toBe(0);
      expect((fromInstanceMetadata() as any).mock.calls.length).toBe(0);
    });

    it("should only consult the ini provider if the profile environment variable has been set", async () => {
      const creds = {
        accessKeyId: "foo",
        secretAccessKey: "bar"
      };

      (fromEnv() as any).mockImplementation(() =>
        Promise.reject(new Error("PANIC"))
      );
      (fromIni() as any).mockImplementation(() => Promise.resolve(creds));
      (fromProcess() as any).mockImplementation(() =>
        Promise.reject(new Error("PANIC"))
      );
      (fromInstanceMetadata() as any).mockImplementation(() =>
        Promise.reject(new Error("PANIC"))
      );
      (fromContainerMetadata() as any).mockImplementation(() =>
        Promise.reject(new Error("PANIC"))
      );

      process.env[ENV_PROFILE] = "foo";
      expect(await defaultProvider()()).toEqual(creds);
      expect((fromEnv() as any).mock.calls.length).toBe(0);
      expect((fromIni() as any).mock.calls.length).toBe(1);
      expect((fromProcess() as any).mock.calls.length).toBe(0);
      expect((fromContainerMetadata() as any).mock.calls.length).toBe(0);
      expect((fromInstanceMetadata() as any).mock.calls.length).toBe(0);
    });
  });
});
