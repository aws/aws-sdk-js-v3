/**
 * <p>Identifies an AWS resource and indicates whether it complies with the AWS Config rule that it was evaluated against.</p>
 */
export interface _Evaluation {
  /**
   * <p>The type of AWS resource that was evaluated.</p>
   */
  ComplianceResourceType: string;

  /**
   * <p>The ID of the AWS resource that was evaluated.</p>
   */
  ComplianceResourceId: string;

  /**
   * <p>Indicates whether the AWS resource complies with the AWS Config rule that it was evaluated against.</p> <p>For the <code>Evaluation</code> data type, AWS Config supports only the <code>COMPLIANT</code>, <code>NON_COMPLIANT</code>, and <code>NOT_APPLICABLE</code> values. AWS Config does not support the <code>INSUFFICIENT_DATA</code> value for this data type.</p> <p>Similarly, AWS Config does not accept <code>INSUFFICIENT_DATA</code> as the value for <code>ComplianceType</code> from a <code>PutEvaluations</code> request. For example, an AWS Lambda function for a custom AWS Config rule cannot pass an <code>INSUFFICIENT_DATA</code> value to AWS Config.</p>
   */
  ComplianceType:
    | "COMPLIANT"
    | "NON_COMPLIANT"
    | "NOT_APPLICABLE"
    | "INSUFFICIENT_DATA"
    | string;

  /**
   * <p>Supplementary information about how the evaluation determined the compliance.</p>
   */
  Annotation?: string;

  /**
   * <p>The time of the event in AWS Config that triggered the evaluation. For event-based evaluations, the time indicates when AWS Config created the configuration item that triggered the evaluation. For periodic evaluations, the time indicates when AWS Config triggered the evaluation at the frequency that you specified (for example, every 24 hours).</p>
   */
  OrderingTimestamp: Date | string | number;
}

export interface _UnmarshalledEvaluation extends _Evaluation {
  /**
   * <p>The time of the event in AWS Config that triggered the evaluation. For event-based evaluations, the time indicates when AWS Config created the configuration item that triggered the evaluation. For periodic evaluations, the time indicates when AWS Config triggered the evaluation at the frequency that you specified (for example, every 24 hours).</p>
   */
  OrderingTimestamp: Date;
}
