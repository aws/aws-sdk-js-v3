import {
  _TimeBasedCanary,
  _UnmarshalledTimeBasedCanary
} from "./_TimeBasedCanary";
import {
  _TimeBasedLinear,
  _UnmarshalledTimeBasedLinear
} from "./_TimeBasedLinear";

/**
 * <p>The configuration that specifies how traffic is shifted from one version of a Lambda function to another version during an AWS Lambda deployment.</p>
 */
export interface _TrafficRoutingConfig {
  /**
   * <p>The type of traffic shifting (<code>TimeBasedCanary</code> or <code>TimeBasedLinear</code>) used by a deployment configuration .</p>
   */
  type?: "TimeBasedCanary" | "TimeBasedLinear" | "AllAtOnce" | string;

  /**
   * <p>A configuration that shifts traffic from one version of a Lambda function to another in two increments. The original and target Lambda function versions are specified in the deployment's AppSpec file.</p>
   */
  timeBasedCanary?: _TimeBasedCanary;

  /**
   * <p>A configuration that shifts traffic from one version of a Lambda function to another in equal increments, with an equal number of minutes between each increment. The original and target Lambda function versions are specified in the deployment's AppSpec file.</p>
   */
  timeBasedLinear?: _TimeBasedLinear;
}

export interface _UnmarshalledTrafficRoutingConfig
  extends _TrafficRoutingConfig {
  /**
   * <p>A configuration that shifts traffic from one version of a Lambda function to another in two increments. The original and target Lambda function versions are specified in the deployment's AppSpec file.</p>
   */
  timeBasedCanary?: _UnmarshalledTimeBasedCanary;

  /**
   * <p>A configuration that shifts traffic from one version of a Lambda function to another in equal increments, with an equal number of minutes between each increment. The original and target Lambda function versions are specified in the deployment's AppSpec file.</p>
   */
  timeBasedLinear?: _UnmarshalledTimeBasedLinear;
}
