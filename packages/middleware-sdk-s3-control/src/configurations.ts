import { Provider, RegionInfoProvider } from "@aws-sdk/types";
export { NODE_USE_ARN_REGION_CONFIG_OPTIONS } from "@aws-sdk/middleware-bucket-endpoint";

export interface S3ControlInputConfig {
  /**
   * Enables IPv6/IPv4 dualstack endpoint. When a DNS lookup is performed on an endpoint of this type, it returns an “A” record with an IPv4 address and an “AAAA” record with an IPv6 address. In most cases the network stack in the client environment will automatically prefer the AAAA record and make a connection using the IPv6 address. Note, however, that currently on Windows, the IPv4 address will be preferred.
   */
  useDualstackEndpoint?: boolean;
  /**
   * Whether to override the request region with the region inferred from requested resource's ARN. Defaults to false
   */
  useArnRegion?: boolean | Provider<boolean>;
}

interface PreviouslyResolved {
  isCustomEndpoint: boolean;
  region: Provider<string>;
  regionInfoProvider: RegionInfoProvider;
}

export interface S3ControlResolvedConfig {
  isCustomEndpoint: boolean;
  useDualstackEndpoint: boolean;
  useArnRegion: Provider<boolean>;
  region: Provider<string>;
  regionInfoProvider: RegionInfoProvider;
}

export function resolveS3ControlConfig<T>(
  input: T & PreviouslyResolved & S3ControlInputConfig
): T & S3ControlResolvedConfig {
  const { useDualstackEndpoint = false, useArnRegion = false } = input;
  return {
    ...input,
    useDualstackEndpoint,
    useArnRegion: typeof useArnRegion === "function" ? useArnRegion : () => Promise.resolve(useArnRegion),
  };
}
