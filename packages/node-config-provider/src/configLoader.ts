import { chain, fromStatic, memoize } from "@aws-sdk/property-provider";
import { Provider } from "@aws-sdk/types";

import { fromEnv, GetterFromEnv } from "./fromEnv";
import { fromSharedConfigFiles, GetterFromConfig, SharedConfigInit } from "./fromSharedConfigFiles";

export type LocalConfigOptions = SharedConfigInit;

export interface LoadedConfigSelectors<T> {
  /**
   * Environment variable name to load the config string or a getter getting the
   * config values from all the environment variables. If you want to load a
   * non-string config value, you **must** use a getter.
   *
   * TODO: use EnvConfigSelector<T> when https://github.com/microsoft/TypeScript/issues/19360 is fixed
   */
  environmentVariableSelector: string | GetterFromEnv<T>;
  /**
   * Config name contained in shared config file or credential file to load the
   * config string or a getter getting values from all the shared configs
   * associated with the profile. If you want to load a non-string config value,
   * you **must** use a getter.
   *
   * TODO: use SharedConfigSelector<T> when https://github.com/microsoft/TypeScript/issues/19360 is fixed
   */
  configFileSelector: string | GetterFromConfig<T>;
  /**
   * Default value or getter
   */
  default: T;
}

export const loadConfig = <T = string>(
  { environmentVariableSelector, configFileSelector, default: defaultValue }: LoadedConfigSelectors<T>,
  configuration: LocalConfigOptions = {}
): Provider<T> =>
  memoize(
    chain(
      fromEnv(environmentVariableSelector),
      fromSharedConfigFiles(configFileSelector, configuration),
      fromStatic(defaultValue)
    )
  );
