/**
 * <p>The user-specified preferences for how AWS CloudFormation performs a stack set operation. </p> <p>For more information on maximum concurrent accounts and failure tolerance, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-concepts.html#stackset-ops-options">Stack set operation options</a>.</p>
 */
export interface _StackSetOperationPreferences {
  /**
   * <p>The order of the regions in where you want to perform the stack operation.</p>
   */
  RegionOrder?: Array<string> | Iterable<string>;

  /**
   * <p>The number of accounts, per region, for which this operation can fail before AWS CloudFormation stops the operation in that region. If the operation is stopped in a region, AWS CloudFormation doesn't attempt the operation in any subsequent regions.</p> <p>Conditional: You must specify either <code>FailureToleranceCount</code> or <code>FailureTolerancePercentage</code> (but not both).</p>
   */
  FailureToleranceCount?: number;

  /**
   * <p>The percentage of accounts, per region, for which this stack operation can fail before AWS CloudFormation stops the operation in that region. If the operation is stopped in a region, AWS CloudFormation doesn't attempt the operation in any subsequent regions.</p> <p>When calculating the number of accounts based on the specified percentage, AWS CloudFormation rounds <i>down</i> to the next whole number.</p> <p>Conditional: You must specify either <code>FailureToleranceCount</code> or <code>FailureTolerancePercentage</code>, but not both.</p>
   */
  FailureTolerancePercentage?: number;

  /**
   * <p>The maximum number of accounts in which to perform this operation at one time. This is dependent on the value of <code>FailureToleranceCount</code>—<code>MaxConcurrentCount</code> is at most one more than the <code>FailureToleranceCount</code> .</p> <p>Note that this setting lets you specify the <i>maximum</i> for operations. For large deployments, under certain circumstances the actual number of accounts acted upon concurrently may be lower due to service throttling.</p> <p>Conditional: You must specify either <code>MaxConcurrentCount</code> or <code>MaxConcurrentPercentage</code>, but not both.</p>
   */
  MaxConcurrentCount?: number;

  /**
   * <p>The maximum percentage of accounts in which to perform this operation at one time.</p> <p>When calculating the number of accounts based on the specified percentage, AWS CloudFormation rounds down to the next whole number. This is true except in cases where rounding down would result is zero. In this case, CloudFormation sets the number as one instead.</p> <p>Note that this setting lets you specify the <i>maximum</i> for operations. For large deployments, under certain circumstances the actual number of accounts acted upon concurrently may be lower due to service throttling.</p> <p>Conditional: You must specify either <code>MaxConcurrentCount</code> or <code>MaxConcurrentPercentage</code>, but not both.</p>
   */
  MaxConcurrentPercentage?: number;
}

export interface _UnmarshalledStackSetOperationPreferences
  extends _StackSetOperationPreferences {
  /**
   * <p>The order of the regions in where you want to perform the stack operation.</p>
   */
  RegionOrder?: Array<string>;
}
