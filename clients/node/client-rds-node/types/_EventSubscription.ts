/**
 * <p>Contains the results of a successful invocation of the <code>DescribeEventSubscriptions</code> action.</p>
 */
export interface _EventSubscription {
  /**
   * <p>The AWS customer account associated with the RDS event notification subscription.</p>
   */
  CustomerAwsId?: string;

  /**
   * <p>The RDS event notification subscription Id.</p>
   */
  CustSubscriptionId?: string;

  /**
   * <p>The topic ARN of the RDS event notification subscription.</p>
   */
  SnsTopicArn?: string;

  /**
   * <p>The status of the RDS event notification subscription.</p> <p>Constraints:</p> <p>Can be one of the following: creating | modifying | deleting | active | no-permission | topic-not-exist</p> <p>The status "no-permission" indicates that RDS no longer has permission to post to the SNS topic. The status "topic-not-exist" indicates that the topic was deleted after the subscription was created.</p>
   */
  Status?: string;

  /**
   * <p>The time the RDS event notification subscription was created.</p>
   */
  SubscriptionCreationTime?: string;

  /**
   * <p>The source type for the RDS event notification subscription.</p>
   */
  SourceType?: string;

  /**
   * <p>A list of source IDs for the RDS event notification subscription.</p>
   */
  SourceIdsList?: Array<string> | Iterable<string>;

  /**
   * <p>A list of event categories for the RDS event notification subscription.</p>
   */
  EventCategoriesList?: Array<string> | Iterable<string>;

  /**
   * <p>A Boolean value indicating if the subscription is enabled. True indicates the subscription is enabled.</p>
   */
  Enabled?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) for the event subscription.</p>
   */
  EventSubscriptionArn?: string;
}

export interface _UnmarshalledEventSubscription extends _EventSubscription {
  /**
   * <p>A list of source IDs for the RDS event notification subscription.</p>
   */
  SourceIdsList?: Array<string>;

  /**
   * <p>A list of event categories for the RDS event notification subscription.</p>
   */
  EventCategoriesList?: Array<string>;
}
