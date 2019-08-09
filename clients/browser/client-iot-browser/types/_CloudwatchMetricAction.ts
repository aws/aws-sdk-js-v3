/**
 * <p>Describes an action that captures a CloudWatch metric.</p>
 */
export interface _CloudwatchMetricAction {
  /**
   * <p>The IAM role that allows access to the CloudWatch metric.</p>
   */
  roleArn: string;

  /**
   * <p>The CloudWatch metric namespace name.</p>
   */
  metricNamespace: string;

  /**
   * <p>The CloudWatch metric name.</p>
   */
  metricName: string;

  /**
   * <p>The CloudWatch metric value.</p>
   */
  metricValue: string;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/cloudwatch_concepts.html#Unit">metric unit</a> supported by CloudWatch.</p>
   */
  metricUnit: string;

  /**
   * <p>An optional <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/cloudwatch_concepts.html#about_timestamp">Unix timestamp</a>.</p>
   */
  metricTimestamp?: string;
}

export type _UnmarshalledCloudwatchMetricAction = _CloudwatchMetricAction;
