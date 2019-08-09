/**
 * <p>Represents a log subscription, which tracks real-time data from a chosen log group to a specified destination.</p>
 */
export interface _LogSubscription {
  /**
   * <p>Identifier (ID) of the directory that you want to associate with the log subscription.</p>
   */
  DirectoryId?: string;

  /**
   * <p>The name of the log group.</p>
   */
  LogGroupName?: string;

  /**
   * <p>The date and time that the log subscription was created.</p>
   */
  SubscriptionCreatedDateTime?: Date | string | number;
}

export interface _UnmarshalledLogSubscription extends _LogSubscription {
  /**
   * <p>The date and time that the log subscription was created.</p>
   */
  SubscriptionCreatedDateTime?: Date;
}
