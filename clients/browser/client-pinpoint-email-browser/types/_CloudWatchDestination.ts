import {
  _CloudWatchDimensionConfiguration,
  _UnmarshalledCloudWatchDimensionConfiguration
} from "./_CloudWatchDimensionConfiguration";

/**
 * <p>An object that defines an Amazon CloudWatch destination for email events. You can use Amazon CloudWatch to monitor and gain insights on your email sending metrics.</p>
 */
export interface _CloudWatchDestination {
  /**
   * <p>An array of objects that define the dimensions to use when you send email events to Amazon CloudWatch.</p>
   */
  DimensionConfigurations:
    | Array<_CloudWatchDimensionConfiguration>
    | Iterable<_CloudWatchDimensionConfiguration>;
}

export interface _UnmarshalledCloudWatchDestination
  extends _CloudWatchDestination {
  /**
   * <p>An array of objects that define the dimensions to use when you send email events to Amazon CloudWatch.</p>
   */
  DimensionConfigurations: Array<_UnmarshalledCloudWatchDimensionConfiguration>;
}
