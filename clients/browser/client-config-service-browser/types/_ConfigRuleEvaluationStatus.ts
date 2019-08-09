/**
 * <p>Status information for your AWS managed Config rules. The status includes information such as the last time the rule ran, the last time it failed, and the related error for the last failure.</p> <p>This action does not return status information about custom AWS Config rules.</p>
 */
export interface _ConfigRuleEvaluationStatus {
  /**
   * <p>The name of the AWS Config rule.</p>
   */
  ConfigRuleName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Config rule.</p>
   */
  ConfigRuleArn?: string;

  /**
   * <p>The ID of the AWS Config rule.</p>
   */
  ConfigRuleId?: string;

  /**
   * <p>The time that AWS Config last successfully invoked the AWS Config rule to evaluate your AWS resources.</p>
   */
  LastSuccessfulInvocationTime?: Date | string | number;

  /**
   * <p>The time that AWS Config last failed to invoke the AWS Config rule to evaluate your AWS resources.</p>
   */
  LastFailedInvocationTime?: Date | string | number;

  /**
   * <p>The time that AWS Config last successfully evaluated your AWS resources against the rule.</p>
   */
  LastSuccessfulEvaluationTime?: Date | string | number;

  /**
   * <p>The time that AWS Config last failed to evaluate your AWS resources against the rule.</p>
   */
  LastFailedEvaluationTime?: Date | string | number;

  /**
   * <p>The time that you first activated the AWS Config rule.</p>
   */
  FirstActivatedTime?: Date | string | number;

  /**
   * <p>The error code that AWS Config returned when the rule last failed.</p>
   */
  LastErrorCode?: string;

  /**
   * <p>The error message that AWS Config returned when the rule last failed.</p>
   */
  LastErrorMessage?: string;

  /**
   * <p>Indicates whether AWS Config has evaluated your resources against the rule at least once.</p> <ul> <li> <p> <code>true</code> - AWS Config has evaluated your AWS resources against the rule at least once.</p> </li> <li> <p> <code>false</code> - AWS Config has not once finished evaluating your AWS resources against the rule.</p> </li> </ul>
   */
  FirstEvaluationStarted?: boolean;
}

export interface _UnmarshalledConfigRuleEvaluationStatus
  extends _ConfigRuleEvaluationStatus {
  /**
   * <p>The time that AWS Config last successfully invoked the AWS Config rule to evaluate your AWS resources.</p>
   */
  LastSuccessfulInvocationTime?: Date;

  /**
   * <p>The time that AWS Config last failed to invoke the AWS Config rule to evaluate your AWS resources.</p>
   */
  LastFailedInvocationTime?: Date;

  /**
   * <p>The time that AWS Config last successfully evaluated your AWS resources against the rule.</p>
   */
  LastSuccessfulEvaluationTime?: Date;

  /**
   * <p>The time that AWS Config last failed to evaluate your AWS resources against the rule.</p>
   */
  LastFailedEvaluationTime?: Date;

  /**
   * <p>The time that you first activated the AWS Config rule.</p>
   */
  FirstActivatedTime?: Date;
}
