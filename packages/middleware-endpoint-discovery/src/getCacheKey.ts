import { AwsCredentialIdentity, Provider } from "@aws-sdk/types";

/**
 * Generate key to index the endpoints in the cache
 */
export const getCacheKey = async (
  commandName: string,
  config: { credentials: Provider<AwsCredentialIdentity>; },
  options: {
    identifiers?: Record<string, string>;
  }
) => {
  const { accessKeyId } = await config.credentials();
  const { identifiers } = options;
  return JSON.stringify({
    ...(accessKeyId && { accessKeyId }),
    ...(identifiers && {
      commandName,
      identifiers: Object.entries(identifiers)
        .sort()
        .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {}),
    }),
  });
};
