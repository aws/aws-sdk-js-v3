/**
 * <p>A complex type that identifies the CloudWatch alarm that you want Amazon Route 53 health checkers to use to determine whether the specified health check is healthy.</p>
 */
export interface _AlarmIdentifier {
  /**
   * <p>For the CloudWatch alarm that you want Route 53 health checkers to use to determine whether this health check is healthy, the region that the alarm was created in.</p> <p>For the current list of CloudWatch regions, see <a href="http://docs.aws.amazon.com/general/latest/gr/rande.html#cw_region">Amazon CloudWatch</a> in the <i>AWS Regions and Endpoints</i> chapter of the <i>Amazon Web Services General Reference</i>.</p>
   */
  Region:
    | "us-east-1"
    | "us-east-2"
    | "us-west-1"
    | "us-west-2"
    | "ca-central-1"
    | "eu-central-1"
    | "eu-west-1"
    | "eu-west-2"
    | "eu-west-3"
    | "ap-east-1"
    | "me-south-1"
    | "ap-south-1"
    | "ap-southeast-1"
    | "ap-southeast-2"
    | "ap-northeast-1"
    | "ap-northeast-2"
    | "ap-northeast-3"
    | "eu-north-1"
    | "sa-east-1"
    | "cn-northwest-1"
    | "cn-north-1"
    | string;

  /**
   * <p>The name of the CloudWatch alarm that you want Amazon Route 53 health checkers to use to determine whether this health check is healthy.</p> <note> <p>Route 53 supports CloudWatch alarms with the following features:</p> <ul> <li> <p>Standard-resolution metrics. High-resolution metrics aren't supported. For more information, see <a href="http://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/publishingMetrics.html#high-resolution-metrics">High-Resolution Metrics</a> in the <i>Amazon CloudWatch User Guide</i>.</p> </li> <li> <p>Statistics: Average, Minimum, Maximum, Sum, and SampleCount. Extended statistics aren't supported.</p> </li> </ul> </note>
   */
  Name: string;
}

export type _UnmarshalledAlarmIdentifier = _AlarmIdentifier;
