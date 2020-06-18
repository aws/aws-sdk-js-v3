import { fromSharedConfigFiles, ENV_PROFILE } from "./fromSharedConfigFiles";
import {
  loadSharedConfigFiles,
  ParsedIniData
} from "@aws-sdk/shared-ini-file-loader";
import { ProviderError } from "@aws-sdk/property-provider";

jest.mock("@aws-sdk/shared-ini-file-loader", () => ({
  loadSharedConfigFiles: jest.fn()
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
    new ProviderError(
      `No max_attempts value found for profile ${profile} in SDK configuration files`
    );

  describe("loadedConfig", () => {
    const mockMaxAttemptsAnswer = "mockMaxAttemptsAnswer";
    const mockMaxAttmeptsNotAnswer = "mockMaxAttmeptsNotAnswer";
    const getIniDataWithAnswersRemoved = (iniData: ParsedIniData) =>
      Object.keys(iniData).reduce(
        (acc, key) => ({
          [key]: { max_attempts: mockMaxAttmeptsNotAnswer },
          ...acc
        }),
        {}
      );

    type loadedConfigTestData = {
      message: string;
      iniDataToReturn: ParsedIniData;
      profile?: string;
    };

    const loadedConfigResolves: (loadedConfigTestData & {
      maxAttemptsToVerify: string;
    })[] = [
      {
        message: "returns maxAttempts from default profile",
        iniDataToReturn: {
          default: { max_attempts: mockMaxAttemptsAnswer }
        },
        maxAttemptsToVerify: mockMaxAttemptsAnswer
      },
      {
        message: "returns maxAttempts from designated profile",
        iniDataToReturn: {
          default: { max_attempts: mockMaxAttmeptsNotAnswer },
          foo: { max_attempts: mockMaxAttemptsAnswer }
        },
        maxAttemptsToVerify: mockMaxAttemptsAnswer,
        profile: "foo"
      }
    ];

    const loadedConfigRejects: loadedConfigTestData[] = [
      {
        message:
          "rejects if default profile is not present and profile value is not passed",
        iniDataToReturn: {
          foo: { max_attempts: mockMaxAttmeptsNotAnswer }
        }
      },
      {
        message: "rejects if designated profile is not present",
        iniDataToReturn: {
          default: { max_attempts: mockMaxAttmeptsNotAnswer }
        },
        profile: "foo"
      }
    ];

    describe("uses the shared ini file loader if pre-loaded config is not supplied", () => {
      describe("when config file is empty", () => {
        loadedConfigResolves.forEach(
          ({ message, iniDataToReturn, maxAttemptsToVerify, profile }) => {
            it(`${message} from credentials file`, () => {
              (loadSharedConfigFiles as jest.Mock).mockResolvedValueOnce({
                configFile: {},
                credentialsFile: iniDataToReturn
              });
              return expect(fromSharedConfigFiles({ profile })()).resolves.toBe(
                maxAttemptsToVerify
              );
            });
          }
        );
      });

      describe("when credentials file is empty", () => {
        loadedConfigResolves.forEach(
          ({ message, iniDataToReturn, maxAttemptsToVerify, profile }) => {
            it(`${message} from config file`, () => {
              (loadSharedConfigFiles as jest.Mock).mockResolvedValueOnce({
                configFile: iniDataToReturn,
                credentialsFile: {}
              });
              return expect(fromSharedConfigFiles({ profile })()).resolves.toBe(
                maxAttemptsToVerify
              );
            });
          }
        );
      });

      describe("prefer credentials file if both not empty", () => {
        loadedConfigResolves.forEach(
          ({ message, iniDataToReturn, maxAttemptsToVerify, profile }) => {
            it(`${message} from credentials file`, () => {
              (loadSharedConfigFiles as jest.Mock).mockResolvedValueOnce({
                configFile: getIniDataWithAnswersRemoved(iniDataToReturn),
                credentialsFile: iniDataToReturn
              });
              return expect(fromSharedConfigFiles({ profile })()).resolves.toBe(
                maxAttemptsToVerify
              );
            });
          }
        );
      });

      loadedConfigRejects.forEach(({ message, iniDataToReturn, profile }) => {
        it(message, () => {
          (loadSharedConfigFiles as jest.Mock).mockResolvedValueOnce({
            configFile: {},
            credentialsFile: iniDataToReturn
          });
          return expect(
            fromSharedConfigFiles({ profile })()
          ).rejects.toMatchObject(getProviderError(profile ?? "default"));
        });
      });
    });

    describe("uses pre-loaded config if supplied", () => {
      describe("when config file is empty", () => {
        loadedConfigResolves.forEach(
          ({ message, iniDataToReturn, maxAttemptsToVerify, profile }) => {
            it(`${message} from credentials file`, () => {
              const loadedConfig = Promise.resolve({
                configFile: {},
                credentialsFile: iniDataToReturn
              });
              return expect(
                fromSharedConfigFiles({ loadedConfig, profile })()
              ).resolves.toBe(maxAttemptsToVerify);
            });
          }
        );
      });

      describe("when credentials file is empty", () => {
        loadedConfigResolves.forEach(
          ({ message, iniDataToReturn, maxAttemptsToVerify, profile }) => {
            it(`${message} from config file`, () => {
              const loadedConfig = Promise.resolve({
                configFile: iniDataToReturn,
                credentialsFile: {}
              });
              return expect(
                fromSharedConfigFiles({ loadedConfig, profile })()
              ).resolves.toBe(maxAttemptsToVerify);
            });
          }
        );
      });

      describe("prefer credentials file if both not empty", () => {
        loadedConfigResolves.forEach(
          ({ message, iniDataToReturn, maxAttemptsToVerify, profile }) => {
            it(`${message} from config file`, () => {
              const loadedConfig = Promise.resolve({
                configFile: getIniDataWithAnswersRemoved(iniDataToReturn),
                credentialsFile: iniDataToReturn
              });
              return expect(
                fromSharedConfigFiles({ loadedConfig, profile })()
              ).resolves.toBe(maxAttemptsToVerify);
            });
          }
        );
      });

      loadedConfigRejects.forEach(({ message, iniDataToReturn, profile }) => {
        it(message, () => {
          const loadedConfig = Promise.resolve({
            configFile: {},
            credentialsFile: iniDataToReturn
          });
          return expect(
            fromSharedConfigFiles({ loadedConfig, profile })()
          ).rejects.toMatchObject(getProviderError(profile ?? "default"));
        });
      });
    });
  });

  describe("profile", () => {
    const loadedConfigData = {
      configFile: {},
      credentialsFile: {
        default: { max_attempts: "credentialsFileDefault" },
        foo: { max_attempts: "credentialsFileDefault" }
      }
    };
    const loadedConfig = Promise.resolve(loadedConfigData);

    it("returns maxAttempts from designated profile when profile is defined", () => {
      const profile = "foo";
      return expect(
        fromSharedConfigFiles({ loadedConfig, profile })()
      ).resolves.toBe(loadedConfigData.credentialsFile[profile].max_attempts);
    });

    describe("when profile is not defined", () => {
      it(`returns maxAttempts from value in '${ENV_PROFILE}' env var if it is set`, () => {
        const profile = "foo";
        process.env[ENV_PROFILE] = profile;
        return expect(fromSharedConfigFiles({ loadedConfig })()).resolves.toBe(
          loadedConfigData.credentialsFile[profile].max_attempts
        );
      });

      it(`returns maxAttempts from default profile if '${ENV_PROFILE}' env var is not set`, () => {
        return expect(fromSharedConfigFiles({ loadedConfig })()).resolves.toBe(
          loadedConfigData.credentialsFile.default.max_attempts
        );
      });
    });
  });
});
