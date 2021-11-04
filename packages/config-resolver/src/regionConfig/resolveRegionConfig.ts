import { Provider } from "@aws-sdk/types";

import { getRealRegion } from "./getRealRegion";
import { isFipsRegion } from "./isFipsRegion";

export interface RegionInputConfig {
  /**
   * The AWS region to which this client will send requests
   */
  region?: string | Provider<string>;
}

interface PreviouslyResolved {
  useFipsEndpoint: Provider<boolean>;
}

export interface RegionResolvedConfig {
  /**
   * Resolved value for input config {@link RegionInputConfig.region}
   */
  region: Provider<string>;
  /**
   * Updated value for config {@link PreviouslyResolved.useFipsEndpoint}
   * if region is provided as a string
   */
  useFipsEndpoint: Provider<boolean>;
}

export const resolveRegionConfig = <T>(input: T & RegionInputConfig & PreviouslyResolved): T & RegionResolvedConfig => {
  const { region, useFipsEndpoint } = input;
  if (!region) {
    throw new Error("Region is missing");
  }

  return {
    ...input,
    region: async () => {
      if (typeof region === "string") {
        return getRealRegion(region);
      }
      const providedRegion = await region();
      return getRealRegion(providedRegion);
    },
    useFipsEndpoint: async () => {
      const providedRegion = typeof region === "string" ? region : await region();
      if (isFipsRegion(providedRegion)) {
        return true;
      }
      return useFipsEndpoint();
    },
  };
};
