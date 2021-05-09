import { Credentials, Provider } from "@aws-sdk/types";

/**
 * Generate key to index the endpoints in the cache
 */
export const getCacheKey = async (
  commandName: string,
  config: { credentials: Provider<Credentials> },
  options: {
    identifiers?: Map<String, String>;
  }
) => {
  const { accessKeyId } = await config.credentials();
  const { identifiers } = options;
  return {
    ...(accessKeyId && { accessKeyId }),
    ...(identifiers && { commandName, identifiers }),
  }.toString();
};
