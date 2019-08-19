/**
 * <p>A configuration that shifts traffic from one version of a Lambda function to another in equal increments, with an equal number of minutes between each increment. The original and target Lambda function versions are specified in the deployment's AppSpec file.</p>
 */
export interface _TimeBasedLinear {
  /**
   * <p>The percentage of traffic that is shifted at the start of each increment of a <code>TimeBasedLinear</code> deployment.</p>
   */
  linearPercentage?: number;

  /**
   * <p>The number of minutes between each incremental traffic shift of a <code>TimeBasedLinear</code> deployment.</p>
   */
  linearInterval?: number;
}

export type _UnmarshalledTimeBasedLinear = _TimeBasedLinear;
