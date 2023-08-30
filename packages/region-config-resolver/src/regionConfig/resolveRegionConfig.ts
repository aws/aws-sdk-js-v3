import { Provider } from "@smithy/types";

import { getRealRegion } from "./getRealRegion";
import { isFipsRegion } from "./isFipsRegion";

/**
 * @public
 */
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

/**
 * @internal
 */
interface PreviouslyResolved {}

/**
 * @internal
 */
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

/**
 * @internal
 */
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
      return typeof useFipsEndpoint !== "function" ? Promise.resolve(!!useFipsEndpoint) : useFipsEndpoint();
    },
  };
};
