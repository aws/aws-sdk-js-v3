import { RegionResolvedConfig } from "@aws-sdk/config-resolver";
import { AwsAuthResolvedConfig } from "@aws-sdk/middleware-signing";

/**
 * Generate key to index the endpoints in the cache
 */
export const getCacheKey = async (
  commandName: string,
  config: AwsAuthResolvedConfig & RegionResolvedConfig,
  getEndpointDiscoveryId: () => string | undefined
) => {
  const region = await config.region();
  const { accessKeyId } = await config.credentials();
  const identifiers = getEndpointDiscoveryId ? getEndpointDiscoveryId() : undefined;
  return {
    commandName,
    ...(region && { region }),
    ...(accessKeyId && { accessKeyId }),
    ...(identifiers && { identifiers }),
  }.toString();
};
