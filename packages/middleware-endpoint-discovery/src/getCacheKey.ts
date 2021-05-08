import { RegionResolvedConfig } from "@aws-sdk/config-resolver";
import { AwsAuthResolvedConfig } from "@aws-sdk/middleware-signing";

/**
 * Generate key to index the endpoints in the cache
 */
export const getCacheKey = async (
  commandName: string,
  config: AwsAuthResolvedConfig & RegionResolvedConfig,
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
