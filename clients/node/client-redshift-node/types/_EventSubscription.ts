import { _Tag, _UnmarshalledTag } from "./_Tag";

/**
 * <p>Describes event subscriptions.</p>
 */
export interface _EventSubscription {
  /**
   * <p>The AWS customer account associated with the Amazon Redshift event notification subscription.</p>
   */
  CustomerAwsId?: string;

  /**
   * <p>The name of the Amazon Redshift event notification subscription.</p>
   */
  CustSubscriptionId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon SNS topic used by the event notification subscription.</p>
   */
  SnsTopicArn?: string;

  /**
   * <p>The status of the Amazon Redshift event notification subscription.</p> <p>Constraints:</p> <ul> <li> <p>Can be one of the following: active | no-permission | topic-not-exist</p> </li> <li> <p>The status "no-permission" indicates that Amazon Redshift no longer has permission to post to the Amazon SNS topic. The status "topic-not-exist" indicates that the topic was deleted after the subscription was created.</p> </li> </ul>
   */
  Status?: string;

  /**
   * <p>The date and time the Amazon Redshift event notification subscription was created.</p>
   */
  SubscriptionCreationTime?: Date | string | number;

  /**
   * <p>The source type of the events returned the Amazon Redshift event notification, such as cluster, or cluster-snapshot.</p>
   */
  SourceType?: string;

  /**
   * <p>A list of the sources that publish events to the Amazon Redshift event notification subscription.</p>
   */
  SourceIdsList?: Array<string> | Iterable<string>;

  /**
   * <p>The list of Amazon Redshift event categories specified in the event notification subscription.</p> <p>Values: Configuration, Management, Monitoring, Security</p>
   */
  EventCategoriesList?: Array<string> | Iterable<string>;

  /**
   * <p>The event severity specified in the Amazon Redshift event notification subscription.</p> <p>Values: ERROR, INFO</p>
   */
  Severity?: string;

  /**
   * <p>A boolean value indicating whether the subscription is enabled; <code>true</code> indicates that the subscription is enabled.</p>
   */
  Enabled?: boolean;

  /**
   * <p>The list of tags for the event subscription.</p>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;
}

export interface _UnmarshalledEventSubscription extends _EventSubscription {
  /**
   * <p>The date and time the Amazon Redshift event notification subscription was created.</p>
   */
  SubscriptionCreationTime?: Date;

  /**
   * <p>A list of the sources that publish events to the Amazon Redshift event notification subscription.</p>
   */
  SourceIdsList?: Array<string>;

  /**
   * <p>The list of Amazon Redshift event categories specified in the event notification subscription.</p> <p>Values: Configuration, Management, Monitoring, Security</p>
   */
  EventCategoriesList?: Array<string>;

  /**
   * <p>The list of tags for the event subscription.</p>
   */
  Tags?: Array<_UnmarshalledTag>;
}
