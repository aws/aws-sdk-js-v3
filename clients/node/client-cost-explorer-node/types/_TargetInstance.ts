import {
  _ResourceDetails,
  _UnmarshalledResourceDetails
} from "./_ResourceDetails";
import {
  _ResourceUtilization,
  _UnmarshalledResourceUtilization
} from "./_ResourceUtilization";

/**
 * <p> Details on recommended instance.</p>
 */
export interface _TargetInstance {
  /**
   * <p> Expected cost to operate this instance type on a monthly basis.</p>
   */
  EstimatedMonthlyCost?: string;

  /**
   * <p> Estimated savings resulting from modification, on a monthly basis.</p>
   */
  EstimatedMonthlySavings?: string;

  /**
   * <p> The currency code that Amazon Web Services used to calculate the costs for this instance.</p>
   */
  CurrencyCode?: string;

  /**
   * <p> Indicates whether or not this recommendation is the defaulted Amazon Web Services recommendation.</p>
   */
  DefaultTargetInstance?: boolean;

  /**
   * <p> Details on the target instance type. </p>
   */
  ResourceDetails?: _ResourceDetails;

  /**
   * <p> Expected utilization metrics for target instance type.</p>
   */
  ExpectedResourceUtilization?: _ResourceUtilization;
}

export interface _UnmarshalledTargetInstance extends _TargetInstance {
  /**
   * <p> Details on the target instance type. </p>
   */
  ResourceDetails?: _UnmarshalledResourceDetails;

  /**
   * <p> Expected utilization metrics for target instance type.</p>
   */
  ExpectedResourceUtilization?: _UnmarshalledResourceUtilization;
}
