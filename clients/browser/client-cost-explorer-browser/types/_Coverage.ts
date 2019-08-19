import { _CoverageHours, _UnmarshalledCoverageHours } from "./_CoverageHours";
import {
  _CoverageNormalizedUnits,
  _UnmarshalledCoverageNormalizedUnits
} from "./_CoverageNormalizedUnits";
import { _CoverageCost, _UnmarshalledCoverageCost } from "./_CoverageCost";

/**
 * <p>The amount of instance usage that a reservation covered.</p>
 */
export interface _Coverage {
  /**
   * <p>The amount of instance usage that the reservation covered, in hours.</p>
   */
  CoverageHours?: _CoverageHours;

  /**
   * <p>The amount of instance usage that the reservation covered, in normalized units.</p>
   */
  CoverageNormalizedUnits?: _CoverageNormalizedUnits;

  /**
   * <p>The amount of cost that the reservation covered.</p>
   */
  CoverageCost?: _CoverageCost;
}

export interface _UnmarshalledCoverage extends _Coverage {
  /**
   * <p>The amount of instance usage that the reservation covered, in hours.</p>
   */
  CoverageHours?: _UnmarshalledCoverageHours;

  /**
   * <p>The amount of instance usage that the reservation covered, in normalized units.</p>
   */
  CoverageNormalizedUnits?: _UnmarshalledCoverageNormalizedUnits;

  /**
   * <p>The amount of cost that the reservation covered.</p>
   */
  CoverageCost?: _UnmarshalledCoverageCost;
}
