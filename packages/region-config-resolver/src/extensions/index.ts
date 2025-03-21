import { AwsRegionExtensionConfiguration } from "@aws-sdk/types";
import { Provider } from "@smithy/types";

export type RegionExtensionRuntimeConfigType = Partial<{ region: string | Provider<string> }>;

/**
 * @internal
 */
export const getAwsRegionExtensionConfiguration = (runtimeConfig: RegionExtensionRuntimeConfigType) => {
  return {
    setRegion(region: Provider<string>): void {
      runtimeConfig.region = region;
    },
    region(): Provider<string> {
      return runtimeConfig.region as Provider<string>;
    },
  };
};

/**
 * @internal
 */
export const resolveAwsRegionExtensionConfiguration = (
  awsRegionExtensionConfiguration: AwsRegionExtensionConfiguration
): RegionExtensionRuntimeConfigType => {
  return {
    region: awsRegionExtensionConfiguration.region(),
  };
};
