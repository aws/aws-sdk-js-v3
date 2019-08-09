import {
  _ScalingConstraints,
  _UnmarshalledScalingConstraints
} from "./_ScalingConstraints";
import { _ScalingRule, _UnmarshalledScalingRule } from "./_ScalingRule";

/**
 * <p>An automatic scaling policy for a core instance group or task instance group in an Amazon EMR cluster. An automatic scaling policy defines how an instance group dynamically adds and terminates EC2 instances in response to the value of a CloudWatch metric. See <a>PutAutoScalingPolicy</a>.</p>
 */
export interface _AutoScalingPolicy {
  /**
   * <p>The upper and lower EC2 instance limits for an automatic scaling policy. Automatic scaling activity will not cause an instance group to grow above or below these limits.</p>
   */
  Constraints: _ScalingConstraints;

  /**
   * <p>The scale-in and scale-out rules that comprise the automatic scaling policy.</p>
   */
  Rules: Array<_ScalingRule> | Iterable<_ScalingRule>;
}

export interface _UnmarshalledAutoScalingPolicy extends _AutoScalingPolicy {
  /**
   * <p>The upper and lower EC2 instance limits for an automatic scaling policy. Automatic scaling activity will not cause an instance group to grow above or below these limits.</p>
   */
  Constraints: _UnmarshalledScalingConstraints;

  /**
   * <p>The scale-in and scale-out rules that comprise the automatic scaling policy.</p>
   */
  Rules: Array<_UnmarshalledScalingRule>;
}
