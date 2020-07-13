import { ProviderError } from "@aws-sdk/property-provider";
import {
  loadSharedConfigFiles,
  SharedConfigFiles,
  SharedConfigInit as BaseSharedConfigInit,
} from "@aws-sdk/shared-ini-file-loader";
import { Provider } from "@aws-sdk/types";

const DEFAULT_PROFILE = "default";
export const ENV_PROFILE = "AWS_PROFILE";

export interface SharedConfigInit extends BaseSharedConfigInit {
  /**
   * The configuration profile to use.
   */
  profile?: string;

  /**
   * A promise that will be resolved with loaded and parsed credentials files.
   * Used to avoid loading shared config files multiple times.
   */
  loadedConfig?: Promise<SharedConfigFiles>;
}

export const fromSharedConfigFiles = (init: SharedConfigInit = {}): Provider<string> => async () => {
  const { loadedConfig = loadSharedConfigFiles(init), profile = process.env[ENV_PROFILE] || DEFAULT_PROFILE } = init;

  const { configFile, credentialsFile } = await loadedConfig;
  for (const file of [credentialsFile, configFile]) {
    const { region } = file[profile] || <any>{};
    if (typeof region === "string") {
      return region;
    }
  }

  throw new ProviderError(`No region found for profile ${profile} in SDK configuration files`);
};
