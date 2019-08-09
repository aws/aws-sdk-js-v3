/**
 * <p>Represents a subscription filter.</p>
 */
export interface _SubscriptionFilter {
  /**
   * <p>The name of the subscription filter.</p>
   */
  filterName?: string;

  /**
   * <p>The name of the log group.</p>
   */
  logGroupName?: string;

  /**
   * <p>A symbolic description of how CloudWatch Logs should interpret the data in each log event. For example, a log event may contain timestamps, IP addresses, strings, and so on. You use the filter pattern to specify what to look for in the log event message.</p>
   */
  filterPattern?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the destination.</p>
   */
  destinationArn?: string;

  /**
   * <p/>
   */
  roleArn?: string;

  /**
   * <p>The method used to distribute log data to the destination, which can be either random or grouped by log stream.</p>
   */
  distribution?: "Random" | "ByLogStream" | string;

  /**
   * <p>The creation time of the subscription filter, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC.</p>
   */
  creationTime?: number;
}

export type _UnmarshalledSubscriptionFilter = _SubscriptionFilter;
