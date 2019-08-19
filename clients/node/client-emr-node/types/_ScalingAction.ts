import {
  _SimpleScalingPolicyConfiguration,
  _UnmarshalledSimpleScalingPolicyConfiguration
} from "./_SimpleScalingPolicyConfiguration";

/**
 * <p>The type of adjustment the automatic scaling activity makes when triggered, and the periodicity of the adjustment.</p>
 */
export interface _ScalingAction {
  /**
   * <p>Not available for instance groups. Instance groups use the market type specified for the group.</p>
   */
  Market?: "ON_DEMAND" | "SPOT" | string;

  /**
   * <p>The type of adjustment the automatic scaling activity makes when triggered, and the periodicity of the adjustment.</p>
   */
  SimpleScalingPolicyConfiguration: _SimpleScalingPolicyConfiguration;
}

export interface _UnmarshalledScalingAction extends _ScalingAction {
  /**
   * <p>The type of adjustment the automatic scaling activity makes when triggered, and the periodicity of the adjustment.</p>
   */
  SimpleScalingPolicyConfiguration: _UnmarshalledSimpleScalingPolicyConfiguration;
}
