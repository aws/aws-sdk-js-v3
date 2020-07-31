import { ProviderError } from "@aws-sdk/property-provider";
import { loadSharedConfigFiles, ParsedIniData, Profile } from "@aws-sdk/shared-ini-file-loader";

import { ENV_PROFILE, fromSharedConfigFiles } from "./fromSharedConfigFiles";

jest.mock("@aws-sdk/shared-ini-file-loader", () => ({
  loadSharedConfigFiles: jest.fn(),
}));

describe("fromSharedConfigFiles", () => {
  const envProfile = process.env[ENV_PROFILE];
  const configKey = "config_key";

  beforeEach(() => {
    delete process.env[ENV_PROFILE];
  });

  afterAll(() => {
    process.env[ENV_PROFILE] = envProfile;
  });

  const getProviderError = (profile: string) =>
    new ProviderError(`No ${configKey} found for profile ${profile} in SDK configuration files`);

  describe("loadedConfig", () => {
    const mockConfigAnswer = "mockConfigAnswer";
    const mockConfigNotAnswer = "mockConfigNotAnswer";

    type loadedConfigTestData = {
      message: string;
      iniDataToReturn: ParsedIniData;
      profile?: string;
    };

    const loadedConfigResolves: (loadedConfigTestData & {
      configValueToVerify: string;
    })[] = [
      {
        message: "returns configValue from default profile",
        iniDataToReturn: {
          default: { [configKey]: mockConfigAnswer },
        },
        configValueToVerify: mockConfigAnswer,
      },
      {
        message: "returns configValue from designated profile",
        iniDataToReturn: {
          default: { [configKey]: mockConfigNotAnswer },
          foo: { [configKey]: mockConfigAnswer },
        },
        configValueToVerify: mockConfigAnswer,
        profile: "foo",
      },
    ];

    const loadedConfigRejects: loadedConfigTestData[] = [
      {
        message: "rejects if default profile is not present and profile value is not passed",
        iniDataToReturn: {
          foo: { [configKey]: mockConfigNotAnswer },
        },
      },
      {
        message: "rejects if designated profile is not present",
        iniDataToReturn: {
          default: { [configKey]: mockConfigNotAnswer },
        },
        profile: "foo",
      },
    ];

    describe("uses the shared ini file loader if pre-loaded config is not supplied", () => {
      loadedConfigResolves.forEach(({ message, iniDataToReturn, configValueToVerify, profile }) => {
        it(`${message} from config file`, () => {
          (loadSharedConfigFiles as jest.Mock).mockResolvedValueOnce({
            configFile: iniDataToReturn,
            credentialsFile: {},
          });
          expect(fromSharedConfigFiles(configKey, { profile })()).resolves.toBe(configValueToVerify);
        });
      });

      loadedConfigRejects.forEach(({ message, iniDataToReturn, profile }) => {
        it(message, () => {
          (loadSharedConfigFiles as jest.Mock).mockResolvedValueOnce({
            configFile: iniDataToReturn,
            credentialsFile: {},
          });
          expect(fromSharedConfigFiles(configKey, { profile })()).rejects.toMatchObject(
            getProviderError(profile ?? "default")
          );
        });
      });
    });

    describe("uses pre-loaded config if supplied", () => {
      loadedConfigResolves.forEach(({ message, iniDataToReturn, configValueToVerify, profile }) => {
        it(`${message} from config file`, () => {
          const loadedConfig = Promise.resolve({
            configFile: iniDataToReturn,
            credentialsFile: {},
          });
          expect(fromSharedConfigFiles(configKey, { loadedConfig, profile })()).resolves.toBe(configValueToVerify);
        });
      });

      loadedConfigRejects.forEach(({ message, iniDataToReturn, profile }) => {
        it(message, () => {
          const loadedConfig = Promise.resolve({
            configFile: {},
            credentialsFile: iniDataToReturn,
          });
          expect(fromSharedConfigFiles(configKey, { loadedConfig, profile })()).rejects.toMatchObject(
            getProviderError(profile ?? "default")
          );
        });
      });
    });
  });

  describe("profile", () => {
    const loadedConfigData = {
      configFile: {
        default: { [configKey]: "configFileDefault" },
        foo: { [configKey]: "configFileFoo" },
      },
      credentialsFile: {
        default: { [configKey]: "credentialsFileDefault" },
      },
    };
    const loadedConfig = Promise.resolve(loadedConfigData);

    it("returns configValue from preferred config file", () => {
      expect(fromSharedConfigFiles(configKey, { loadedConfig, preferredFile: "credentials" })()).resolves.toBe(
        loadedConfigData.credentialsFile.default[configKey]
      );
    });

    it("returns configValue from designated profile when profile is defined", () => {
      const profile = "foo";
      expect(fromSharedConfigFiles(configKey, { loadedConfig, profile })()).resolves.toBe(
        loadedConfigData.configFile[profile][configKey]
      );
    });

    describe("when profile is not defined", () => {
      it(`returns configValue from value in '${ENV_PROFILE}' env var if it is set`, () => {
        const profile = "foo";
        process.env[ENV_PROFILE] = profile;
        expect(fromSharedConfigFiles(configKey, { loadedConfig })()).resolves.toBe(
          loadedConfigData.configFile[profile][configKey]
        );
      });

      it(`returns configValue from default profile if '${ENV_PROFILE}' env var is not set`, () => {
        expect(fromSharedConfigFiles(configKey, { loadedConfig })()).resolves.toBe(
          loadedConfigData.configFile.default[configKey]
        );
      });
    });
  });

  describe("config getter", () => {
    const loadedConfigData = {
      configFile: {
        default: { [configKey]: "1111111" },
      },
      credentialsFile: {},
    };
    const loadedConfig = Promise.resolve(loadedConfigData);

    it("should be called when getting the config", async () => {
      const configGetter: (profile: Profile) => number = jest.fn().mockImplementation((profile: Profile) => {
        return parseInt(profile[configKey]!);
      });
      expect(await fromSharedConfigFiles(configGetter, { loadedConfig })()).toBe(1111111);
      expect(configGetter).toBeCalled();
    });

    it("loader should throw when the getter throws", () => {
      const exception = new Error("Exception when getting the config");
      const configGetter: (profile: Profile) => number = jest.fn().mockRejectedValue(exception);
      expect(fromSharedConfigFiles(configGetter, { loadedConfig })()).rejects.toEqual(exception);
    });
  });
});
