import { CredentialsProviderError } from "@aws-sdk/property-provider";
import { loadSharedConfigFiles, SharedConfigInit as BaseSharedConfigInit } from "@aws-sdk/shared-ini-file-loader";
import { Profile, Provider } from "@aws-sdk/types";

const DEFAULT_PROFILE = "default";
export const ENV_PROFILE = "AWS_PROFILE";

export interface SharedConfigInit extends BaseSharedConfigInit {
  /**
   * The configuration profile to use.
   */
  profile?: string;

  /**
   * The preferred shared ini file to load the config. "config" option refers to
   * the shared config file(defaults to `~/.aws/config`). "credentials" option
   * refers to the shared credentials file(defaults to `~/.aws/credentials`)
   */
  preferredFile?: "config" | "credentials";
}

export type GetterFromConfig<T> = (profile: Profile) => T | undefined;

/**
 * Get config value from the shared config files with inferred profile name.
 */
export const fromSharedConfigFiles =
  <T = string>(
    configSelector: GetterFromConfig<T>,
    { preferredFile = "config", ...init }: SharedConfigInit = {}
  ): Provider<T> =>
  async () => {
    const { profile = process.env[ENV_PROFILE] || DEFAULT_PROFILE } = init;

    const { configFile, credentialsFile } = await loadSharedConfigFiles(init);

    const profileFromCredentials = credentialsFile[profile] || {};
    const profileFromConfig = configFile[profile] || {};
    const mergedProfile =
      preferredFile === "config"
        ? { ...profileFromCredentials, ...profileFromConfig }
        : { ...profileFromConfig, ...profileFromCredentials };

    try {
      const configValue = configSelector(mergedProfile);
      if (configValue === undefined) {
        throw new Error();
      }
      return configValue;
    } catch (e) {
      throw new CredentialsProviderError(
        e.message ||
          `Cannot load config for profile ${profile} in SDK configuration files with getter: ${configSelector}`
      );
    }
  };
