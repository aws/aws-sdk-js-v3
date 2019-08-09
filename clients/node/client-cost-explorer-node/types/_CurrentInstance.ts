import { _TagValues, _UnmarshalledTagValues } from "./_TagValues";
import {
  _ResourceDetails,
  _UnmarshalledResourceDetails
} from "./_ResourceDetails";
import {
  _ResourceUtilization,
  _UnmarshalledResourceUtilization
} from "./_ResourceUtilization";

/**
 * <p>Context about the current instance.</p>
 */
export interface _CurrentInstance {
  /**
   * <p>Resource ID of the current instance.</p>
   */
  ResourceId?: string;

  /**
   * <p>Cost allocation resource tags applied to the instance.</p>
   */
  Tags?: Array<_TagValues> | Iterable<_TagValues>;

  /**
   * <p> Details about the resource and utilization.</p>
   */
  ResourceDetails?: _ResourceDetails;

  /**
   * <p> Utilization information of the current instance during the lookback period.</p>
   */
  ResourceUtilization?: _ResourceUtilization;

  /**
   * <p> Number of hours during the lookback period covered by reservations.</p>
   */
  ReservationCoveredHoursInLookbackPeriod?: string;

  /**
   * <p> Number of hours during the lookback period billed at On Demand rates.</p>
   */
  OnDemandHoursInLookbackPeriod?: string;

  /**
   * <p> The total number of hours the instance ran during the lookback period.</p>
   */
  TotalRunningHoursInLookbackPeriod?: string;

  /**
   * <p> Current On Demand cost of operating this instance on a monthly basis.</p>
   */
  MonthlyCost?: string;

  /**
   * <p> The currency code that Amazon Web Services used to calculate the costs for this instance.</p>
   */
  CurrencyCode?: string;
}

export interface _UnmarshalledCurrentInstance extends _CurrentInstance {
  /**
   * <p>Cost allocation resource tags applied to the instance.</p>
   */
  Tags?: Array<_UnmarshalledTagValues>;

  /**
   * <p> Details about the resource and utilization.</p>
   */
  ResourceDetails?: _UnmarshalledResourceDetails;

  /**
   * <p> Utilization information of the current instance during the lookback period.</p>
   */
  ResourceUtilization?: _UnmarshalledResourceUtilization;
}
