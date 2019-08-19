import {
  _TargetTrackingConfiguration,
  _UnmarshalledTargetTrackingConfiguration
} from "./_TargetTrackingConfiguration";

/**
 * <p>Represents a scaling policy.</p>
 */
export interface _ScalingPolicy {
  /**
   * <p>The name of the scaling policy.</p>
   */
  PolicyName: string;

  /**
   * <p>The type of scaling policy.</p>
   */
  PolicyType: "TargetTrackingScaling" | string;

  /**
   * <p>The target tracking scaling policy. Includes support for predefined or customized metrics.</p>
   */
  TargetTrackingConfiguration?: _TargetTrackingConfiguration;
}

export interface _UnmarshalledScalingPolicy extends _ScalingPolicy {
  /**
   * <p>The target tracking scaling policy. Includes support for predefined or customized metrics.</p>
   */
  TargetTrackingConfiguration?: _UnmarshalledTargetTrackingConfiguration;
}
