/**
 * <p>A configuration that shifts traffic from one version of a Lambda function to another in two increments. The original and target Lambda function versions are specified in the deployment's AppSpec file.</p>
 */
export interface _TimeBasedCanary {
  /**
   * <p>The percentage of traffic to shift in the first increment of a <code>TimeBasedCanary</code> deployment.</p>
   */
  canaryPercentage?: number;

  /**
   * <p>The number of minutes between the first and second traffic shifts of a <code>TimeBasedCanary</code> deployment.</p>
   */
  canaryInterval?: number;
}

export type _UnmarshalledTimeBasedCanary = _TimeBasedCanary;
