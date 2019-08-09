/**
 * <p/>
 */
export interface _EventSubscription {
  /**
   * <p>The AWS customer account associated with the AWS DMS event notification subscription.</p>
   */
  CustomerAwsId?: string;

  /**
   * <p>The AWS DMS event notification subscription Id.</p>
   */
  CustSubscriptionId?: string;

  /**
   * <p>The topic ARN of the AWS DMS event notification subscription.</p>
   */
  SnsTopicArn?: string;

  /**
   * <p>The status of the AWS DMS event notification subscription.</p> <p>Constraints:</p> <p>Can be one of the following: creating | modifying | deleting | active | no-permission | topic-not-exist</p> <p>The status "no-permission" indicates that AWS DMS no longer has permission to post to the SNS topic. The status "topic-not-exist" indicates that the topic was deleted after the subscription was created.</p>
   */
  Status?: string;

  /**
   * <p>The time the RDS event notification subscription was created.</p>
   */
  SubscriptionCreationTime?: string;

  /**
   * <p> The type of AWS DMS resource that generates events. </p> <p>Valid values: replication-instance | replication-server | security-group | replication-task</p>
   */
  SourceType?: string;

  /**
   * <p>A list of source Ids for the event subscription.</p>
   */
  SourceIdsList?: Array<string> | Iterable<string>;

  /**
   * <p>A lists of event categories.</p>
   */
  EventCategoriesList?: Array<string> | Iterable<string>;

  /**
   * <p>Boolean value that indicates if the event subscription is enabled.</p>
   */
  Enabled?: boolean;
}

export interface _UnmarshalledEventSubscription extends _EventSubscription {
  /**
   * <p>A list of source Ids for the event subscription.</p>
   */
  SourceIdsList?: Array<string>;

  /**
   * <p>A lists of event categories.</p>
   */
  EventCategoriesList?: Array<string>;
}
