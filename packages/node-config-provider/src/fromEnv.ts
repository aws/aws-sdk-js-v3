import { ProviderError } from "@aws-sdk/property-provider";
import { Provider } from "@aws-sdk/types";

export type GetterFromEnv<T> = (env: NodeJS.ProcessEnv) => T;
// type EnvConfigSelector<T> = T extends string ? (string | GetterFromEnv<T>) : GetterFromEnv<T>

/**
 * Get config value given the environment variable name or getter from
 * environment variable.
 * Typescript generic T to specify output type. If T is string, the input param
 * can be string OR a function returns T. If T is not string, the input param
 * must be a function returns T
 */
export const fromEnv = <T = string>(
  //TODO: type should be EnvConfigSelector<T> but doesn't work well when T is
  //boolean, because of TS limitation: https://github.com/microsoft/TypeScript/issues/19360
  envVarSelector: string | GetterFromEnv<T>
): Provider<T> => async () => {
  try {
    const config: T | string | undefined =
      typeof envVarSelector === "string"
        ? process.env[envVarSelector]
        : (envVarSelector as GetterFromEnv<T>)(process.env);
    if (config === undefined) {
      throw new Error();
    }
    return config as T;
  } catch (e) {
    throw new ProviderError(e.message || `No value defined for the ${envVarSelector} environment variable`);
  }
};
