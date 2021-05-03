import { RegionResolvedConfig } from "@aws-sdk/config-resolver";
import { AwsAuthResolvedConfig } from "@aws-sdk/middleware-signing";

/**
 * Generate key to index the endpoints in the cache
 */
export const getCacheKey = async (
  commandName: string,
  config: AwsAuthResolvedConfig & RegionResolvedConfig,
  options: {
    endpointDiscoveryId?: string;
  }
) => {
  const region = await config.region();
  const { accessKeyId } = await config.credentials();
  const { endpointDiscoveryId } = options;
  return {
    commandName,
    ...(region && { region }),
    ...(accessKeyId && { accessKeyId }),
    ...(endpointDiscoveryId && { endpointDiscoveryId }),
  }.toString();
};
