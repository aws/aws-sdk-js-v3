import { Provider } from "@aws-sdk/types";

import { getRealRegion } from "./getRealRegion";
import { isFipsRegion } from "./isFipsRegion";

export interface RegionInputConfig {
  /**
   * The AWS region to which this client will send requests
   */
  region?: string | Provider<string>;

  /**
   * Enables FIPS compatible endpoints.
   */
  useFipsEndpoint?: boolean | Provider<boolean>;
}

interface PreviouslyResolved {}

export interface RegionResolvedConfig {
  /**
   * Resolved value for input config {@link RegionInputConfig.region}
   */
  region: Provider<string>;

  /**
   * Resolved value for input {@link RegionInputConfig.useFipsEndpoint}
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
      if (!useFipsEndpoint) {
        return Promise.resolve(false);
      }
      return typeof useFipsEndpoint === "boolean" ? Promise.resolve(useFipsEndpoint) : useFipsEndpoint();
    },
  };
};
