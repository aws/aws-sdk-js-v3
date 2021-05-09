import { Credentials, Provider } from "@aws-sdk/types";

/**
 * Generate key to index the endpoints in the cache
 */
export const getCacheKey = async (
  commandName: string,
  config: { credentials: Provider<Credentials> },
  options: {
    identifiers?: Map<string, string>;
  }
) => {
  const { accessKeyId } = await config.credentials();
  const { identifiers } = options;
  return JSON.stringify({
    ...(accessKeyId && { accessKeyId }),
    ...(identifiers && {
      commandName,
      identifiers: Array.from(identifiers)
        .sort()
        .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {}),
    }),
  });
};
