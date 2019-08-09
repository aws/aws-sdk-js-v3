import {
  _EvaluationResultIdentifier,
  _UnmarshalledEvaluationResultIdentifier
} from "./_EvaluationResultIdentifier";

/**
 * <p>The details of an AWS Config evaluation for an account ID and region in an aggregator. Provides the AWS resource that was evaluated, the compliance of the resource, related time stamps, and supplementary information. </p>
 */
export interface _AggregateEvaluationResult {
  /**
   * <p>Uniquely identifies the evaluation result.</p>
   */
  EvaluationResultIdentifier?: _EvaluationResultIdentifier;

  /**
   * <p>The resource compliance status.</p> <p>For the <code>AggregationEvaluationResult</code> data type, AWS Config supports only the <code>COMPLIANT</code> and <code>NON_COMPLIANT</code>. AWS Config does not support the <code>NOT_APPLICABLE</code> and <code>INSUFFICIENT_DATA</code> value.</p>
   */
  ComplianceType?:
    | "COMPLIANT"
    | "NON_COMPLIANT"
    | "NOT_APPLICABLE"
    | "INSUFFICIENT_DATA"
    | string;

  /**
   * <p>The time when AWS Config recorded the aggregate evaluation result.</p>
   */
  ResultRecordedTime?: Date | string | number;

  /**
   * <p>The time when the AWS Config rule evaluated the AWS resource.</p>
   */
  ConfigRuleInvokedTime?: Date | string | number;

  /**
   * <p>Supplementary information about how the agrregate evaluation determined the compliance.</p>
   */
  Annotation?: string;

  /**
   * <p>The 12-digit account ID of the source account.</p>
   */
  AccountId?: string;

  /**
   * <p>The source region from where the data is aggregated.</p>
   */
  AwsRegion?: string;
}

export interface _UnmarshalledAggregateEvaluationResult
  extends _AggregateEvaluationResult {
  /**
   * <p>Uniquely identifies the evaluation result.</p>
   */
  EvaluationResultIdentifier?: _UnmarshalledEvaluationResultIdentifier;

  /**
   * <p>The time when AWS Config recorded the aggregate evaluation result.</p>
   */
  ResultRecordedTime?: Date;

  /**
   * <p>The time when the AWS Config rule evaluated the AWS resource.</p>
   */
  ConfigRuleInvokedTime?: Date;
}
