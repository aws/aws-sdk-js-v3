import {
  _CloudWatchDimensionConfiguration,
  _UnmarshalledCloudWatchDimensionConfiguration
} from "./_CloudWatchDimensionConfiguration";

/**
 * <p>Contains information associated with an Amazon CloudWatch event destination to which email sending events are published.</p> <p>Event destinations, such as Amazon CloudWatch, are associated with configuration sets, which enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p>
 */
export interface _CloudWatchDestination {
  /**
   * <p>A list of dimensions upon which to categorize your emails when you publish email sending events to Amazon CloudWatch.</p>
   */
  DimensionConfigurations:
    | Array<_CloudWatchDimensionConfiguration>
    | Iterable<_CloudWatchDimensionConfiguration>;
}

export interface _UnmarshalledCloudWatchDestination
  extends _CloudWatchDestination {
  /**
   * <p>A list of dimensions upon which to categorize your emails when you publish email sending events to Amazon CloudWatch.</p>
   */
  DimensionConfigurations: Array<_UnmarshalledCloudWatchDimensionConfiguration>;
}
