import { Provider } from "@aws-sdk/types";

export interface RegionInputConfig {
  /**
   * The AWS region to which this client will send requests
   */
  region?: string | Provider<string>;
}

interface PreviouslyResolved {}

export interface RegionResolvedConfig {
  /**
   * Resolved value for input config {@link RegionInputConfig.region}
   */
  region: Provider<string>;
}

export const resolveRegionConfig = <T>(input: T & RegionInputConfig & PreviouslyResolved): T & RegionResolvedConfig => {
  if (!input.region) {
    throw new Error("Region is missing");
  }
  return {
    ...input,
    region: normalizeRegion(input.region!),
  };
};

const normalizeRegion = (region: string | Provider<string>): Provider<string> => {
  if (typeof region === "string") {
    const promisified = Promise.resolve(region);
    return () => promisified;
  }
  return region as Provider<string>;
};
