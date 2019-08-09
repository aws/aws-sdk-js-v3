import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Response for GetTopicAttributes action.</p>
 */
export interface GetTopicAttributesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A map of the topic's attributes. Attributes in this map include the following:</p> <ul> <li> <p> <code>TopicArn</code> – the topic's ARN</p> </li> <li> <p> <code>Owner</code> – the AWS account ID of the topic's owner</p> </li> <li> <p> <code>Policy</code> – the JSON serialization of the topic's access control policy</p> </li> <li> <p> <code>DisplayName</code> – the human-readable name used in the "From" field for notifications to email and email-json endpoints</p> </li> <li> <p> <code>SubscriptionsPending</code> – the number of subscriptions pending confirmation on this topic</p> </li> <li> <p> <code>SubscriptionsConfirmed</code> – the number of confirmed subscriptions on this topic</p> </li> <li> <p> <code>SubscriptionsDeleted</code> – the number of deleted subscriptions on this topic</p> </li> <li> <p> <code>DeliveryPolicy</code> – the JSON serialization of the topic's delivery policy</p> </li> <li> <p> <code>EffectiveDeliveryPolicy</code> – the JSON serialization of the effective delivery policy that takes into account system defaults</p> </li> </ul>
   */
  Attributes?: { [key: string]: string };

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
