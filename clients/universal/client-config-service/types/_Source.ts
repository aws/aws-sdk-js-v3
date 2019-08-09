import { _SourceDetail, _UnmarshalledSourceDetail } from "./_SourceDetail";

/**
 * <p>Provides the AWS Config rule owner (AWS or customer), the rule identifier, and the events that trigger the evaluation of your AWS resources.</p>
 */
export interface _Source {
  /**
   * <p>Indicates whether AWS or the customer owns and manages the AWS Config rule.</p>
   */
  Owner: "CUSTOM_LAMBDA" | "AWS" | string;

  /**
   * <p>For AWS Config managed rules, a predefined identifier from a list. For example, <code>IAM_PASSWORD_POLICY</code> is a managed rule. To reference a managed rule, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config_use-managed-rules.html">Using AWS Managed Config Rules</a>.</p> <p>For custom rules, the identifier is the Amazon Resource Name (ARN) of the rule's AWS Lambda function, such as <code>arn:aws:lambda:us-east-2:123456789012:function:custom_rule_name</code>.</p>
   */
  SourceIdentifier: string;

  /**
   * <p>Provides the source and type of the event that causes AWS Config to evaluate your AWS resources.</p>
   */
  SourceDetails?: Array<_SourceDetail> | Iterable<_SourceDetail>;
}

export interface _UnmarshalledSource extends _Source {
  /**
   * <p>Provides the source and type of the event that causes AWS Config to evaluate your AWS resources.</p>
   */
  SourceDetails?: Array<_UnmarshalledSourceDetail>;
}
