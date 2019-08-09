import { _ScalingAction, _UnmarshalledScalingAction } from "./_ScalingAction";
import {
  _ScalingTrigger,
  _UnmarshalledScalingTrigger
} from "./_ScalingTrigger";

/**
 * <p>A scale-in or scale-out rule that defines scaling activity, including the CloudWatch metric alarm that triggers activity, how EC2 instances are added or removed, and the periodicity of adjustments. The automatic scaling policy for an instance group can comprise one or more automatic scaling rules.</p>
 */
export interface _ScalingRule {
  /**
   * <p>The name used to identify an automatic scaling rule. Rule names must be unique within a scaling policy.</p>
   */
  Name: string;

  /**
   * <p>A friendly, more verbose description of the automatic scaling rule.</p>
   */
  Description?: string;

  /**
   * <p>The conditions that trigger an automatic scaling activity.</p>
   */
  Action: _ScalingAction;

  /**
   * <p>The CloudWatch alarm definition that determines when automatic scaling activity is triggered.</p>
   */
  Trigger: _ScalingTrigger;
}

export interface _UnmarshalledScalingRule extends _ScalingRule {
  /**
   * <p>The conditions that trigger an automatic scaling activity.</p>
   */
  Action: _UnmarshalledScalingAction;

  /**
   * <p>The CloudWatch alarm definition that determines when automatic scaling activity is triggered.</p>
   */
  Trigger: _UnmarshalledScalingTrigger;
}
