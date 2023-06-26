import { Provider, RegionInfoProvider } from "@smithy/types";
export { NODE_USE_ARN_REGION_CONFIG_OPTIONS } from "@aws-sdk/middleware-bucket-endpoint";

export interface S3ControlInputConfig {
  /**
   * Whether to override the request region with the region inferred from requested resource's ARN. Defaults to false
   */
  useArnRegion?: boolean | Provider<boolean>;
}

interface PreviouslyResolved {
  isCustomEndpoint?: boolean;
  region: Provider<string>;
  regionInfoProvider?: RegionInfoProvider;
  useFipsEndpoint: Provider<boolean>;
  useDualstackEndpoint: Provider<boolean>;
}

export interface S3ControlResolvedConfig {
  /**
   * Whether the endpoint is specified by caller.
   * @internal
   */
  isCustomEndpoint?: boolean;
  /**
   * Enables FIPS compatible endpoints.
   */
  useFipsEndpoint: Provider<boolean>;
  /**
   * Enables IPv6/IPv4 dualstack endpoint.
   */
  useDualstackEndpoint: Provider<boolean>;
  /**
   * Resolved value for input config {@link S3ControlInputConfig.useArnRegion}
   */
  useArnRegion: Provider<boolean>;
  /**
   * Resolved value for input config {@link RegionInputConfig.region}
   */
  region: Provider<string>;
  /**
   * Fetch related hostname, signing name or signing region with given region.
   * @internal
   */
  regionInfoProvider?: RegionInfoProvider;
}

export function resolveS3ControlConfig<T>(
  input: T & PreviouslyResolved & S3ControlInputConfig
): T & S3ControlResolvedConfig {
  const { useArnRegion = false } = input;
  return {
    ...input,
    useArnRegion: typeof useArnRegion === "function" ? useArnRegion : () => Promise.resolve(useArnRegion),
  };
}
