import { ProviderError } from "@aws-sdk/property-provider";
import { loadSharedConfigFiles, ParsedIniData } from "@aws-sdk/shared-ini-file-loader";

import { ENV_PROFILE, fromSharedConfigFiles } from "./fromSharedConfigFiles";

jest.mock("@aws-sdk/shared-ini-file-loader", () => ({
  loadSharedConfigFiles: jest.fn(),
}));

describe("fromSharedConfigFiles", () => {
  const envProfile = process.env[ENV_PROFILE];

  beforeEach(() => {
    delete process.env[ENV_PROFILE];
  });

  afterAll(() => {
    process.env[ENV_PROFILE] = envProfile;
  });

  const getProviderError = (profile: string) =>
    new ProviderError(`No region found for profile ${profile} in SDK configuration files`);

  describe("loadedConfig", () => {
    const mockRegionAnswer = "mockRegionAnswer";
    const mockRegionNotAnswer = "mockRegionNotAnswer";
    const getIniDataWithAnswersRemoved = (iniData: ParsedIniData) =>
      Object.keys(iniData).reduce(
        (acc, key) => ({
          [key]: { region: mockRegionNotAnswer },
          ...acc,
        }),
        {}
      );

    type loadedConfigTestData = {
      message: string;
      iniDataToReturn: ParsedIniData;
      profile?: string;
    };

    const loadedConfigResolves: (loadedConfigTestData & {
      regionToVerify: string;
    })[] = [
      {
        message: "returns region from default profile",
        iniDataToReturn: {
          default: { region: mockRegionAnswer },
        },
        regionToVerify: mockRegionAnswer,
      },
      {
        message: "returns region from designated profile",
        iniDataToReturn: {
          default: { region: mockRegionNotAnswer },
          foo: { region: mockRegionAnswer },
        },
        regionToVerify: mockRegionAnswer,
        profile: "foo",
      },
    ];

    const loadedConfigRejects: loadedConfigTestData[] = [
      {
        message: "rejects if default profile is not present and profile value is not passed",
        iniDataToReturn: {
          foo: { region: mockRegionNotAnswer },
        },
      },
      {
        message: "rejects if designated profile is not present",
        iniDataToReturn: {
          default: { region: mockRegionNotAnswer },
        },
        profile: "foo",
      },
    ];

    describe("uses the shared ini file loader if pre-loaded config is not supplied", () => {
      describe("when config file is empty", () => {
        loadedConfigResolves.forEach(({ message, iniDataToReturn, regionToVerify, profile }) => {
          it(`${message} from credentials file`, () => {
            (loadSharedConfigFiles as jest.Mock).mockResolvedValueOnce({
              configFile: {},
              credentialsFile: iniDataToReturn,
            });
            return expect(fromSharedConfigFiles({ profile })()).resolves.toBe(regionToVerify);
          });
        });
      });

      describe("when credentials file is empty", () => {
        loadedConfigResolves.forEach(({ message, iniDataToReturn, regionToVerify, profile }) => {
          it(`${message} from config file`, () => {
            (loadSharedConfigFiles as jest.Mock).mockResolvedValueOnce({
              configFile: iniDataToReturn,
              credentialsFile: {},
            });
            return expect(fromSharedConfigFiles({ profile })()).resolves.toBe(regionToVerify);
          });
        });
      });

      describe("prefer credentials file if both not empty", () => {
        loadedConfigResolves.forEach(({ message, iniDataToReturn, regionToVerify, profile }) => {
          it(`${message} from credentials file`, () => {
            (loadSharedConfigFiles as jest.Mock).mockResolvedValueOnce({
              configFile: getIniDataWithAnswersRemoved(iniDataToReturn),
              credentialsFile: iniDataToReturn,
            });
            return expect(fromSharedConfigFiles({ profile })()).resolves.toBe(regionToVerify);
          });
        });
      });

      loadedConfigRejects.forEach(({ message, iniDataToReturn, profile }) => {
        it(message, () => {
          (loadSharedConfigFiles as jest.Mock).mockResolvedValueOnce({
            configFile: {},
            credentialsFile: iniDataToReturn,
          });
          return expect(fromSharedConfigFiles({ profile })()).rejects.toMatchObject(
            getProviderError(profile ?? "default")
          );
        });
      });
    });

    describe("uses pre-loaded config if supplied", () => {
      describe("when config file is empty", () => {
        loadedConfigResolves.forEach(({ message, iniDataToReturn, regionToVerify, profile }) => {
          it(`${message} from credentials file`, () => {
            const loadedConfig = Promise.resolve({
              configFile: {},
              credentialsFile: iniDataToReturn,
            });
            return expect(fromSharedConfigFiles({ loadedConfig, profile })()).resolves.toBe(regionToVerify);
          });
        });
      });

      describe("when credentials file is empty", () => {
        loadedConfigResolves.forEach(({ message, iniDataToReturn, regionToVerify, profile }) => {
          it(`${message} from config file`, () => {
            const loadedConfig = Promise.resolve({
              configFile: iniDataToReturn,
              credentialsFile: {},
            });
            return expect(fromSharedConfigFiles({ loadedConfig, profile })()).resolves.toBe(regionToVerify);
          });
        });
      });

      describe("prefer credentials file if both not empty", () => {
        loadedConfigResolves.forEach(({ message, iniDataToReturn, regionToVerify, profile }) => {
          it(`${message} from config file`, () => {
            const loadedConfig = Promise.resolve({
              configFile: getIniDataWithAnswersRemoved(iniDataToReturn),
              credentialsFile: iniDataToReturn,
            });
            return expect(fromSharedConfigFiles({ loadedConfig, profile })()).resolves.toBe(regionToVerify);
          });
        });
      });

      loadedConfigRejects.forEach(({ message, iniDataToReturn, profile }) => {
        it(message, () => {
          const loadedConfig = Promise.resolve({
            configFile: {},
            credentialsFile: iniDataToReturn,
          });
          return expect(fromSharedConfigFiles({ loadedConfig, profile })()).rejects.toMatchObject(
            getProviderError(profile ?? "default")
          );
        });
      });
    });
  });

  describe("profile", () => {
    const loadedConfigData = {
      configFile: {},
      credentialsFile: {
        default: { region: "credentialsFileDefault" },
        foo: { region: "credentialsFileDefault" },
      },
    };
    const loadedConfig = Promise.resolve(loadedConfigData);

    it("returns region from designated profile when profile is defined", () => {
      const profile = "foo";
      return expect(fromSharedConfigFiles({ loadedConfig, profile })()).resolves.toBe(
        loadedConfigData.credentialsFile[profile].region
      );
    });

    describe("when profile is not defined", () => {
      it(`returns region from value in '${ENV_PROFILE}' env var if it is set`, () => {
        const profile = "foo";
        process.env[ENV_PROFILE] = profile;
        return expect(fromSharedConfigFiles({ loadedConfig })()).resolves.toBe(
          loadedConfigData.credentialsFile[profile].region
        );
      });

      it(`returns region from default profile if '${ENV_PROFILE}' env var is not set`, () => {
        return expect(fromSharedConfigFiles({ loadedConfig })()).resolves.toBe(
          loadedConfigData.credentialsFile.default.region
        );
      });
    });
  });
});
