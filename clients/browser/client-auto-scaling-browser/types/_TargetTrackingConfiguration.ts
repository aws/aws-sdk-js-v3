import {
  _PredefinedMetricSpecification,
  _UnmarshalledPredefinedMetricSpecification
} from "./_PredefinedMetricSpecification";
import {
  _CustomizedMetricSpecification,
  _UnmarshalledCustomizedMetricSpecification
} from "./_CustomizedMetricSpecification";

/**
 * <p>Represents a target tracking scaling policy configuration to use with Amazon EC2 Auto Scaling.</p>
 */
export interface _TargetTrackingConfiguration {
  /**
   * <p>A predefined metric. You must specify either a predefined metric or a customized metric.</p>
   */
  PredefinedMetricSpecification?: _PredefinedMetricSpecification;

  /**
   * <p>A customized metric. You must specify either a predefined metric or a customized metric.</p>
   */
  CustomizedMetricSpecification?: _CustomizedMetricSpecification;

  /**
   * <p>The target value for the metric.</p>
   */
  TargetValue: number;

  /**
   * <p>Indicates whether scaling in by the target tracking scaling policy is disabled. If scaling in is disabled, the target tracking scaling policy doesn't remove instances from the Auto Scaling group. Otherwise, the target tracking scaling policy can remove instances from the Auto Scaling group. The default is <code>false</code>.</p>
   */
  DisableScaleIn?: boolean;
}

export interface _UnmarshalledTargetTrackingConfiguration
  extends _TargetTrackingConfiguration {
  /**
   * <p>A predefined metric. You must specify either a predefined metric or a customized metric.</p>
   */
  PredefinedMetricSpecification?: _UnmarshalledPredefinedMetricSpecification;

  /**
   * <p>A customized metric. You must specify either a predefined metric or a customized metric.</p>
   */
  CustomizedMetricSpecification?: _UnmarshalledCustomizedMetricSpecification;
}
