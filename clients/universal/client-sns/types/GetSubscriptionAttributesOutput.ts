import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Response for GetSubscriptionAttributes action.</p>
 */
export interface GetSubscriptionAttributesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A map of the subscription's attributes. Attributes in this map include the following:</p> <ul> <li> <p> <code>ConfirmationWasAuthenticated</code> – <code>true</code> if the subscription confirmation request was authenticated.</p> </li> <li> <p> <code>DeliveryPolicy</code> – The JSON serialization of the subscription's delivery policy.</p> </li> <li> <p> <code>EffectiveDeliveryPolicy</code> – The JSON serialization of the effective delivery policy that takes into account the topic delivery policy and account system defaults.</p> </li> <li> <p> <code>FilterPolicy</code> – The filter policy JSON that is assigned to the subscription.</p> </li> <li> <p> <code>Owner</code> – The AWS account ID of the subscription's owner.</p> </li> <li> <p> <code>PendingConfirmation</code> – <code>true</code> if the subscription hasn't been confirmed. To confirm a pending subscription, call the <code>ConfirmSubscription</code> action with a confirmation token.</p> </li> <li> <p> <code>RawMessageDelivery</code> – <code>true</code> if raw message delivery is enabled for the subscription. Raw messages are free of JSON formatting and can be sent to HTTP/S and Amazon SQS endpoints.</p> </li> <li> <p> <code>SubscriptionArn</code> – The subscription's ARN.</p> </li> <li> <p> <code>TopicArn</code> – The topic ARN that the subscription is associated with.</p> </li> </ul>
   */
  Attributes?: { [key: string]: string };

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
