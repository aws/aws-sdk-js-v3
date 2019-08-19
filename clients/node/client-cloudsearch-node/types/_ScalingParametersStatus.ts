import {
  _ScalingParameters,
  _UnmarshalledScalingParameters
} from "./_ScalingParameters";
import { _OptionStatus, _UnmarshalledOptionStatus } from "./_OptionStatus";

/**
 * <p>The status and configuration of a search domain's scaling parameters. </p>
 */
export interface _ScalingParametersStatus {
  /**
   * <p>The desired instance type and desired number of replicas of each index partition.</p>
   */
  Options: _ScalingParameters;

  /**
   * <p>The status of domain configuration option.</p>
   */
  Status: _OptionStatus;
}

export interface _UnmarshalledScalingParametersStatus
  extends _ScalingParametersStatus {
  /**
   * <p>The desired instance type and desired number of replicas of each index partition.</p>
   */
  Options: _UnmarshalledScalingParameters;

  /**
   * <p>The status of domain configuration option.</p>
   */
  Status: _UnmarshalledOptionStatus;
}
