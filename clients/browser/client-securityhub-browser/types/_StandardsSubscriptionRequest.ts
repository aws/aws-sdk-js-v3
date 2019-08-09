/**
 * <p>The standard that you want to enable.</p>
 */
export interface _StandardsSubscriptionRequest {
  /**
   * <p>The ARN of the standard that you want to enable.</p> <important> <p>In this release, Security Hub only supports the CIS AWS Foundations standard. </p> <p>Its ARN is <code>arn:aws:securityhub:::ruleset/cis-aws-foundations-benchmark/v/1.2.0</code>.</p> </important>
   */
  StandardsArn: string;

  /**
   * <p>A key-value pair of input for the standard.</p>
   */
  StandardsInput?: { [key: string]: string } | Iterable<[string, string]>;
}

export interface _UnmarshalledStandardsSubscriptionRequest
  extends _StandardsSubscriptionRequest {
  /**
   * <p>A key-value pair of input for the standard.</p>
   */
  StandardsInput?: { [key: string]: string };
}
