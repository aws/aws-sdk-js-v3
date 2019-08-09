/**
 * <p>A resource that represents your subscription to a supported standard.</p>
 */
export interface _StandardsSubscription {
  /**
   * <p>The ARN of a resource that represents your subscription to a supported standard.</p>
   */
  StandardsSubscriptionArn: string;

  /**
   * <p>The ARN of a standard.</p> <p>In this release, Security Hub supports only the CIS AWS Foundations standard, which uses the following ARN: <code>arn:aws:securityhub:::ruleset/cis-aws-foundations-benchmark/v/1.2.0.</code> </p>
   */
  StandardsArn: string;

  /**
   * <p>A key-value pair of input for the standard.</p>
   */
  StandardsInput: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * <p>The status of the standards subscription.</p>
   */
  StandardsStatus:
    | "PENDING"
    | "READY"
    | "FAILED"
    | "DELETING"
    | "INCOMPLETE"
    | string;
}

export interface _UnmarshalledStandardsSubscription
  extends _StandardsSubscription {
  /**
   * <p>A key-value pair of input for the standard.</p>
   */
  StandardsInput: { [key: string]: string };
}
