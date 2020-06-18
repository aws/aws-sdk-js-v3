import { ProviderError } from "@aws-sdk/property-provider";
import {
  loadSharedConfigFiles,
  SharedConfigFiles,
  SharedConfigInit as BaseSharedConfigInit
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

export const fromSharedConfigFiles = (
  init: SharedConfigInit = {}
): Provider<string> => async () => {
  const {
    loadedConfig = loadSharedConfigFiles(init),
    profile = process.env[ENV_PROFILE] || DEFAULT_PROFILE
  } = init;

  const { configFile } = await loadedConfig;
  const { max_attempts } = configFile[profile] || <any>{};
  if (typeof max_attempts === "string") {
    return max_attempts;
  }

  throw new ProviderError(
    `No max_attempts value found for profile ${profile} in SDK configuration files`
  );
};
