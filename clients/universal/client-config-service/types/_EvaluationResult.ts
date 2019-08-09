import {
  _EvaluationResultIdentifier,
  _UnmarshalledEvaluationResultIdentifier
} from "./_EvaluationResultIdentifier";

/**
 * <p>The details of an AWS Config evaluation. Provides the AWS resource that was evaluated, the compliance of the resource, related time stamps, and supplementary information.</p>
 */
export interface _EvaluationResult {
  /**
   * <p>Uniquely identifies the evaluation result.</p>
   */
  EvaluationResultIdentifier?: _EvaluationResultIdentifier;

  /**
   * <p>Indicates whether the AWS resource complies with the AWS Config rule that evaluated it.</p> <p>For the <code>EvaluationResult</code> data type, AWS Config supports only the <code>COMPLIANT</code>, <code>NON_COMPLIANT</code>, and <code>NOT_APPLICABLE</code> values. AWS Config does not support the <code>INSUFFICIENT_DATA</code> value for the <code>EvaluationResult</code> data type.</p>
   */
  ComplianceType?:
    | "COMPLIANT"
    | "NON_COMPLIANT"
    | "NOT_APPLICABLE"
    | "INSUFFICIENT_DATA"
    | string;

  /**
   * <p>The time when AWS Config recorded the evaluation result.</p>
   */
  ResultRecordedTime?: Date | string | number;

  /**
   * <p>The time when the AWS Config rule evaluated the AWS resource.</p>
   */
  ConfigRuleInvokedTime?: Date | string | number;

  /**
   * <p>Supplementary information about how the evaluation determined the compliance.</p>
   */
  Annotation?: string;

  /**
   * <p>An encrypted token that associates an evaluation with an AWS Config rule. The token identifies the rule, the AWS resource being evaluated, and the event that triggered the evaluation.</p>
   */
  ResultToken?: string;
}

export interface _UnmarshalledEvaluationResult extends _EvaluationResult {
  /**
   * <p>Uniquely identifies the evaluation result.</p>
   */
  EvaluationResultIdentifier?: _UnmarshalledEvaluationResultIdentifier;

  /**
   * <p>The time when AWS Config recorded the evaluation result.</p>
   */
  ResultRecordedTime?: Date;

  /**
   * <p>The time when the AWS Config rule evaluated the AWS resource.</p>
   */
  ConfigRuleInvokedTime?: Date;
}
