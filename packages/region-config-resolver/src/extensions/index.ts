import { AwsRegionExtensionConfiguration } from "@aws-sdk/types";
import { Provider } from "@smithy/types";

export type RegionExtensionRuntimeConfigType = Partial<{ region: string | Provider<string> }>;

/**
 * @internal
 */
export const getAwsRegionExtensionConfiguration = (runtimeConfig: RegionExtensionRuntimeConfigType) => {
  let runtimeConfigRegion: Provider<string> = async () => {
    if (runtimeConfig.region === undefined) {
      throw new Error("Region is missing from runtimeConfig");
    }
    const region = runtimeConfig.region!;
    if (typeof region === "string") {
      return region;
    }
    return region();
  };

  return {
    setRegion(region: Provider<string>): void {
      runtimeConfigRegion = region;
    },
    region(): Provider<string> {
      return runtimeConfigRegion;
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
