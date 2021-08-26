import { Provider } from "@aws-sdk/types";

import { normalizeRegion } from "./normalizeRegion";

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
