import { CredentialsProviderError } from "@aws-sdk/property-provider";
import { getProfileName, loadSharedConfigFiles } from "@aws-sdk/shared-ini-file-loader";
import { ParsedIniData, Profile } from "@aws-sdk/types";

import { fromSharedConfigFiles, GetterFromConfig, SharedConfigInit } from "./fromSharedConfigFiles";

jest.mock("@aws-sdk/shared-ini-file-loader", () => ({
  getProfileName: jest.fn(),
  loadSharedConfigFiles: jest.fn(),
}));

describe("fromSharedConfigFiles", () => {
  const configKey = "config_key";
  const configGetter: GetterFromConfig<string> = (profile: Profile) => profile[configKey];

  const getCredentialsProviderError = (profile: string, getter: GetterFromConfig<string>) =>
    new CredentialsProviderError(
      `Cannot load config for profile ${profile} in SDK configuration files with getter: ${getter}`
    );

  describe("loadedConfig", () => {
    const mockConfigAnswer = "mockConfigAnswer";
    const mockConfigNotAnswer = "mockConfigNotAnswer";
    const mockCredentialsAnswer = "mockCredentialsAnswer";
    const mockCredentialsNotAnswer = "mockCredentialsNotAnswer";

    type LoadedConfigTestData = {
      message: string;
      iniDataInConfig: ParsedIniData;
      iniDataInCredentials: ParsedIniData;
    } & SharedConfigInit;

    const loadedConfigResolves: (LoadedConfigTestData & {
      configValueToVerify: string;
    })[] = [
      {
        message: "returns configValue from default profile",
        iniDataInConfig: {
          default: { [configKey]: mockConfigAnswer },
        },
        iniDataInCredentials: {
          default: { [configKey]: mockCredentialsNotAnswer },
        },
        configValueToVerify: mockConfigAnswer,
      },
      {
        message: "returns configValue from designated profile",
        iniDataInConfig: {
          default: { [configKey]: mockConfigNotAnswer },
          foo: { [configKey]: mockConfigAnswer },
        },
        iniDataInCredentials: {
          foo: { [configKey]: mockCredentialsNotAnswer },
        },
        profile: "foo",
        configValueToVerify: mockConfigAnswer,
      },
      {
        message: "returns configValue from credentials file if preferred",
        iniDataInConfig: {
          default: { [configKey]: mockConfigNotAnswer },
          foo: { [configKey]: mockConfigNotAnswer },
        },
        iniDataInCredentials: {
          foo: { [configKey]: mockCredentialsAnswer },
        },
        profile: "foo",
        preferredFile: "credentials",
        configValueToVerify: mockCredentialsAnswer,
      },
      {
        message: "returns configValue from config file if preferred credentials file doesn't contain config",
        iniDataInConfig: {
          foo: { [configKey]: mockConfigAnswer },
        },
        iniDataInCredentials: {},
        configValueToVerify: mockConfigAnswer,
        preferredFile: "credentials",
        profile: "foo",
      },
      {
        message: "returns configValue from credential file if preferred config file doesn't contain config",
        iniDataInConfig: {},
        iniDataInCredentials: {
          foo: { [configKey]: mockCredentialsAnswer },
        },
        configValueToVerify: mockCredentialsAnswer,
        profile: "foo",
      },
    ];

    const loadedConfigRejects: LoadedConfigTestData[] = [
      {
        message: "rejects if default profile is not present and profile value is not passed",
        iniDataInConfig: {
          foo: { [configKey]: mockConfigNotAnswer },
        },
        iniDataInCredentials: {},
      },
      {
        message: "rejects if designated profile is not present",
        iniDataInConfig: {
          default: { [configKey]: mockConfigNotAnswer },
        },
        iniDataInCredentials: {},
        profile: "foo",
      },
    ];

    loadedConfigResolves.forEach(
      ({ message, iniDataInConfig, iniDataInCredentials, configValueToVerify, profile, preferredFile }) => {
        it(message, () => {
          (loadSharedConfigFiles as jest.Mock).mockResolvedValueOnce({
            configFile: iniDataInConfig,
            credentialsFile: iniDataInCredentials,
          });
          (getProfileName as jest.Mock).mockReturnValueOnce(profile ?? "default");
          return expect(fromSharedConfigFiles(configGetter, { profile, preferredFile })()).resolves.toBe(
            configValueToVerify
          );
        });
      }
    );

    loadedConfigRejects.forEach(({ message, iniDataInConfig, iniDataInCredentials, profile, preferredFile }) => {
      it(message, () => {
        (loadSharedConfigFiles as jest.Mock).mockResolvedValueOnce({
          configFile: iniDataInConfig,
          credentialsFile: iniDataInCredentials,
        });
        (getProfileName as jest.Mock).mockReturnValueOnce(profile ?? "default");
        return expect(fromSharedConfigFiles(configGetter, { profile, preferredFile })()).rejects.toMatchObject(
          getCredentialsProviderError(profile ?? "default", configGetter)
        );
      });
    });

    it("rejects if getter throws", () => {
      const message = "Cannot load config";
      const failGetter = () => {
        throw new Error(message);
      };
      (loadSharedConfigFiles as jest.Mock).mockResolvedValueOnce({
        configFile: {},
        credentialsFile: {},
      });
      return expect(fromSharedConfigFiles(failGetter)()).rejects.toMatchObject(new CredentialsProviderError(message));
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

    beforeEach(() => {
      (loadSharedConfigFiles as jest.Mock).mockResolvedValueOnce(loadedConfigData);
    });

    it.each(["foo", "default"])("returns config value from %s profile", (profile) => {
      (getProfileName as jest.Mock).mockReturnValueOnce(profile);
      return expect(fromSharedConfigFiles(configGetter)()).resolves.toBe(
        loadedConfigData.configFile[profile][configKey]
      );
    });
  });
});
