import { fromEnv } from "./fromEnv";
import { SharedConfigInit, fromSharedConfigFiles } from "./fromSharedConfigFiles";
import { chain, memoize, fromStatic } from "@aws-sdk/property-provider";
import { Provider } from "@aws-sdk/types";

export const ENV_MAX_ATTEMPTS = "AWS_MAX_ATTEMPTS";
export const CONFIG_MAX_ATTEMPTS = "max_attempts";
export const DEFAULT_MAX_ATTEMPTS = "3";

export const ENV_RETRY_MODE = "AWS_RETRY_MODE";
export const CONFIG_RETRY_MODE = "retry_mode";
export const DEFAULT_RETRY_MODE = "standard";

const defaultProvider = (
  configuration: SharedConfigInit = {},
  {
    envVarName,
    configKey,
    defaultValue,
  }: {
    envVarName: string;
    configKey: string;
    defaultValue: string;
  }
): Provider<string> =>
  memoize(chain(fromEnv(envVarName), fromSharedConfigFiles(configuration, configKey), fromStatic(defaultValue)));

export const maxAttemptsProvider = (configuration: SharedConfigInit = {}): Provider<string> =>
  defaultProvider(configuration, {
    envVarName: ENV_MAX_ATTEMPTS,
    configKey: CONFIG_MAX_ATTEMPTS,
    defaultValue: DEFAULT_MAX_ATTEMPTS,
  });

export const retryModeProvider = (configuration: SharedConfigInit = {}): Provider<string> =>
  defaultProvider(configuration, {
    envVarName: ENV_RETRY_MODE,
    configKey: CONFIG_RETRY_MODE,
    defaultValue: DEFAULT_RETRY_MODE,
  });
