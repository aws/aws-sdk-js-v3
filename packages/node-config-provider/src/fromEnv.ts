import { CredentialsProviderError } from "@aws-sdk/property-provider";
import { Provider } from "@aws-sdk/types";

// Using Record<string, string | undefined> instead of NodeJS.ProcessEnv, in order to not get type errors in non node environments
export type GetterFromEnv<T> = (env: Record<string, string | undefined>) => T | undefined;

/**
 * Get config value given the environment variable name or getter from
 * environment variable.
 */
export const fromEnv =
  <T = string>(envVarSelector: GetterFromEnv<T>): Provider<T> =>
  async () => {
    try {
      const config = envVarSelector(process.env);
      if (config === undefined) {
        throw new Error();
      }
      return config as T;
    } catch (e) {
      throw new CredentialsProviderError(
        e.message || `Cannot load config from environment variables with getter: ${envVarSelector}`
      );
    }
  };
