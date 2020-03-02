import {
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export interface AddPermissionInput {
  __type?: "AddPermissionInput";
  /**
   * <p>The AWS account IDs of the users (principals) who will be given access to the
   *             specified actions. The users must have AWS accounts, but do not need to be signed up for
   *             this service.</p>
   */
  AWSAccountId: Array<string> | undefined;

  /**
   * <p>The action you want to allow for the specified principal(s).</p>
   *         <p>Valid values: Any Amazon SNS action name, for example <code>Publish</code>.</p>
   */
  ActionName: Array<string> | undefined;

  /**
   * <p>A unique identifier for the new policy statement.</p>
   */
  Label: string | undefined;

  /**
   * <p>The ARN of the topic whose access control policy you wish to modify.</p>
   */
  TopicArn: string | undefined;
}

export namespace AddPermissionInput {
  export function isa(o: any): o is AddPermissionInput {
    return __isa(o, "AddPermissionInput");
  }
}

/**
 * <p>Indicates that the user has been denied access to the requested resource.</p>
 */
export interface AuthorizationErrorException
  extends __SmithyException,
    $MetadataBearer {
  name: "AuthorizationErrorException";
  $fault: "client";
  message?: string;
}

export namespace AuthorizationErrorException {
  export function isa(o: any): o is AuthorizationErrorException {
    return __isa(o, "AuthorizationErrorException");
  }
}

/**
 * <p>The input for the <code>CheckIfPhoneNumberIsOptedOut</code> action.</p>
 */
export interface CheckIfPhoneNumberIsOptedOutInput {
  __type?: "CheckIfPhoneNumberIsOptedOutInput";
  /**
   * <p>The phone number for which you want to check the opt out status.</p>
   */
  phoneNumber: string | undefined;
}

export namespace CheckIfPhoneNumberIsOptedOutInput {
  export function isa(o: any): o is CheckIfPhoneNumberIsOptedOutInput {
    return __isa(o, "CheckIfPhoneNumberIsOptedOutInput");
  }
}

/**
 * <p>The response from the <code>CheckIfPhoneNumberIsOptedOut</code> action.</p>
 */
export interface CheckIfPhoneNumberIsOptedOutResponse {
  __type?: "CheckIfPhoneNumberIsOptedOutResponse";
  /**
   * <p>Indicates whether the phone number is opted out:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>true</code> – The phone number is opted out, meaning you cannot publish
   *                     SMS messages to it.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>false</code> – The phone number is opted in, meaning you can publish SMS
   *                     messages to it.</p>
   *             </li>
   *          </ul>
   */
  isOptedOut?: boolean;
}

export namespace CheckIfPhoneNumberIsOptedOutResponse {
  export function isa(o: any): o is CheckIfPhoneNumberIsOptedOutResponse {
    return __isa(o, "CheckIfPhoneNumberIsOptedOutResponse");
  }
}

/**
 * <p>Can't perform multiple operations on a tag simultaneously. Perform the operations
 *             sequentially.</p>
 */
export interface ConcurrentAccessException
  extends __SmithyException,
    $MetadataBearer {
  name: "ConcurrentAccessException";
  $fault: "client";
  message?: string;
}

export namespace ConcurrentAccessException {
  export function isa(o: any): o is ConcurrentAccessException {
    return __isa(o, "ConcurrentAccessException");
  }
}

/**
 * <p>Input for ConfirmSubscription action.</p>
 */
export interface ConfirmSubscriptionInput {
  __type?: "ConfirmSubscriptionInput";
  /**
   * <p>Disallows unauthenticated unsubscribes of the subscription. If the value of this
   *             parameter is <code>true</code> and the request has an AWS signature, then only the topic
   *             owner and the subscription owner can unsubscribe the endpoint. The unsubscribe action
   *             requires AWS authentication. </p>
   */
  AuthenticateOnUnsubscribe?: string;

  /**
   * <p>Short-lived token sent to an endpoint during the <code>Subscribe</code> action.</p>
   */
  Token: string | undefined;

  /**
   * <p>The ARN of the topic for which you wish to confirm a subscription.</p>
   */
  TopicArn: string | undefined;
}

export namespace ConfirmSubscriptionInput {
  export function isa(o: any): o is ConfirmSubscriptionInput {
    return __isa(o, "ConfirmSubscriptionInput");
  }
}

/**
 * <p>Response for ConfirmSubscriptions action.</p>
 */
export interface ConfirmSubscriptionResponse {
  __type?: "ConfirmSubscriptionResponse";
  /**
   * <p>The ARN of the created subscription.</p>
   */
  SubscriptionArn?: string;
}

export namespace ConfirmSubscriptionResponse {
  export function isa(o: any): o is ConfirmSubscriptionResponse {
    return __isa(o, "ConfirmSubscriptionResponse");
  }
}

/**
 * <p>Response from CreateEndpoint action.</p>
 */
export interface CreateEndpointResponse {
  __type?: "CreateEndpointResponse";
  /**
   * <p>EndpointArn returned from CreateEndpoint action.</p>
   */
  EndpointArn?: string;
}

export namespace CreateEndpointResponse {
  export function isa(o: any): o is CreateEndpointResponse {
    return __isa(o, "CreateEndpointResponse");
  }
}

/**
 * <p>Input for CreatePlatformApplication action.</p>
 */
export interface CreatePlatformApplicationInput {
  __type?: "CreatePlatformApplicationInput";
  /**
   * <p>For a list of attributes, see <a href="https://docs.aws.amazon.com/sns/latest/api/API_SetPlatformApplicationAttributes.html">SetPlatformApplicationAttributes</a>
   *         </p>
   */
  Attributes: { [key: string]: string } | undefined;

  /**
   * <p>Application names must be made up of only uppercase and lowercase ASCII letters,
   *             numbers, underscores, hyphens, and periods, and must be between 1 and 256 characters
   *             long.</p>
   */
  Name: string | undefined;

  /**
   * <p>The following platforms are supported: ADM (Amazon Device Messaging), APNS (Apple Push
   *             Notification Service), APNS_SANDBOX, and FCM (Firebase Cloud Messaging).</p>
   */
  Platform: string | undefined;
}

export namespace CreatePlatformApplicationInput {
  export function isa(o: any): o is CreatePlatformApplicationInput {
    return __isa(o, "CreatePlatformApplicationInput");
  }
}

/**
 * <p>Response from CreatePlatformApplication action.</p>
 */
export interface CreatePlatformApplicationResponse {
  __type?: "CreatePlatformApplicationResponse";
  /**
   * <p>PlatformApplicationArn is returned.</p>
   */
  PlatformApplicationArn?: string;
}

export namespace CreatePlatformApplicationResponse {
  export function isa(o: any): o is CreatePlatformApplicationResponse {
    return __isa(o, "CreatePlatformApplicationResponse");
  }
}

/**
 * <p>Input for CreatePlatformEndpoint action.</p>
 */
export interface CreatePlatformEndpointInput {
  __type?: "CreatePlatformEndpointInput";
  /**
   * <p>For a list of attributes, see <a href="https://docs.aws.amazon.com/sns/latest/api/API_SetEndpointAttributes.html">SetEndpointAttributes</a>.</p>
   */
  Attributes?: { [key: string]: string };

  /**
   * <p>Arbitrary user data to associate with the endpoint. Amazon SNS does not use this data. The
   *             data must be in UTF-8 format and less than 2KB.</p>
   */
  CustomUserData?: string;

  /**
   * <p>PlatformApplicationArn returned from CreatePlatformApplication is used to create a an
   *             endpoint.</p>
   */
  PlatformApplicationArn: string | undefined;

  /**
   * <p>Unique identifier created by the notification service for an app on a device. The
   *             specific name for Token will vary, depending on which notification service is being
   *             used. For example, when using APNS as the notification service, you need the device
   *             token. Alternatively, when using FCM or ADM, the device token equivalent is called the
   *             registration ID.</p>
   */
  Token: string | undefined;
}

export namespace CreatePlatformEndpointInput {
  export function isa(o: any): o is CreatePlatformEndpointInput {
    return __isa(o, "CreatePlatformEndpointInput");
  }
}

/**
 * <p>Input for CreateTopic action.</p>
 */
export interface CreateTopicInput {
  __type?: "CreateTopicInput";
  /**
   * <p>A map of attributes with their corresponding values.</p>
   *         <p>The following lists the names, descriptions, and values of the special request
   *             parameters that the <code>CreateTopic</code> action uses:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>DeliveryPolicy</code> – The policy that defines how Amazon SNS retries
   *                     failed deliveries to HTTP/S endpoints.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>DisplayName</code> – The display name to use for a topic with SMS
   *                     subscriptions.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Policy</code> – The policy that defines who can access your
   *                     topic. By default, only the topic owner can publish or subscribe to the
   *                     topic.</p>
   *             </li>
   *          </ul>
   *
   *         <p>The following attribute applies only to <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-server-side-encryption.html">server-side-encryption</a>:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>KmsMasterKeyId</code> - The ID of an AWS-managed customer master key (CMK)
   *                     for Amazon SNS or a custom CMK. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-server-side-encryption.html#sse-key-terms">Key
   *                         Terms</a>. For more examples, see <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_DescribeKey.html#API_DescribeKey_RequestParameters">KeyId</a> in the <i>AWS Key Management Service API
   *                         Reference</i>. </p>
   *             </li>
   *          </ul>
   */
  Attributes?: { [key: string]: string };

  /**
   * <p>The name of the topic you want to create.</p>
   *         <p>Constraints: Topic names must be made up of only uppercase and lowercase ASCII
   *             letters, numbers, underscores, and hyphens, and must be between 1 and 256 characters
   *             long.</p>
   */
  Name: string | undefined;

  /**
   * <p>The list of tags to add to a new topic.</p>
   *         <note>
   *             <p>To be able to tag a topic on creation, you must have the <code>sns:CreateTopic</code> and <code>sns:TagResource</code> permissions.</p>
   *         </note>
   */
  Tags?: Array<Tag>;
}

export namespace CreateTopicInput {
  export function isa(o: any): o is CreateTopicInput {
    return __isa(o, "CreateTopicInput");
  }
}

/**
 * <p>Response from CreateTopic action.</p>
 */
export interface CreateTopicResponse {
  __type?: "CreateTopicResponse";
  /**
   * <p>The Amazon Resource Name (ARN) assigned to the created topic.</p>
   */
  TopicArn?: string;
}

export namespace CreateTopicResponse {
  export function isa(o: any): o is CreateTopicResponse {
    return __isa(o, "CreateTopicResponse");
  }
}

/**
 * <p>Input for DeleteEndpoint action.</p>
 */
export interface DeleteEndpointInput {
  __type?: "DeleteEndpointInput";
  /**
   * <p>EndpointArn of endpoint to delete.</p>
   */
  EndpointArn: string | undefined;
}

export namespace DeleteEndpointInput {
  export function isa(o: any): o is DeleteEndpointInput {
    return __isa(o, "DeleteEndpointInput");
  }
}

/**
 * <p>Input for DeletePlatformApplication action.</p>
 */
export interface DeletePlatformApplicationInput {
  __type?: "DeletePlatformApplicationInput";
  /**
   * <p>PlatformApplicationArn of platform application object to delete.</p>
   */
  PlatformApplicationArn: string | undefined;
}

export namespace DeletePlatformApplicationInput {
  export function isa(o: any): o is DeletePlatformApplicationInput {
    return __isa(o, "DeletePlatformApplicationInput");
  }
}

export interface DeleteTopicInput {
  __type?: "DeleteTopicInput";
  /**
   * <p>The ARN of the topic you want to delete.</p>
   */
  TopicArn: string | undefined;
}

export namespace DeleteTopicInput {
  export function isa(o: any): o is DeleteTopicInput {
    return __isa(o, "DeleteTopicInput");
  }
}

/**
 * <p>Endpoint for mobile app and device.</p>
 */
export interface Endpoint {
  __type?: "Endpoint";
  /**
   * <p>Attributes for endpoint.</p>
   */
  Attributes?: { [key: string]: string };

  /**
   * <p>EndpointArn for mobile app and device.</p>
   */
  EndpointArn?: string;
}

export namespace Endpoint {
  export function isa(o: any): o is Endpoint {
    return __isa(o, "Endpoint");
  }
}

/**
 * <p>Exception error indicating endpoint disabled.</p>
 */
export interface EndpointDisabledException
  extends __SmithyException,
    $MetadataBearer {
  name: "EndpointDisabledException";
  $fault: "client";
  /**
   * <p>Message for endpoint disabled.</p>
   */
  message?: string;
}

export namespace EndpointDisabledException {
  export function isa(o: any): o is EndpointDisabledException {
    return __isa(o, "EndpointDisabledException");
  }
}

/**
 * <p>Indicates that the number of filter polices in your AWS account exceeds the limit. To
 *             add more filter polices, submit an SNS Limit Increase case in the AWS Support
 *             Center.</p>
 */
export interface FilterPolicyLimitExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "FilterPolicyLimitExceededException";
  $fault: "client";
  message?: string;
}

export namespace FilterPolicyLimitExceededException {
  export function isa(o: any): o is FilterPolicyLimitExceededException {
    return __isa(o, "FilterPolicyLimitExceededException");
  }
}

/**
 * <p>Input for GetEndpointAttributes action.</p>
 */
export interface GetEndpointAttributesInput {
  __type?: "GetEndpointAttributesInput";
  /**
   * <p>EndpointArn for GetEndpointAttributes input.</p>
   */
  EndpointArn: string | undefined;
}

export namespace GetEndpointAttributesInput {
  export function isa(o: any): o is GetEndpointAttributesInput {
    return __isa(o, "GetEndpointAttributesInput");
  }
}

/**
 * <p>Response from GetEndpointAttributes of the EndpointArn.</p>
 */
export interface GetEndpointAttributesResponse {
  __type?: "GetEndpointAttributesResponse";
  /**
   * <p>Attributes include the following:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>CustomUserData</code> – arbitrary user data to associate with the
   *                     endpoint. Amazon SNS does not use this data. The data must be in UTF-8 format and
   *                     less than 2KB.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>Enabled</code> – flag that enables/disables delivery to the
   *                     endpoint. Amazon SNS will set this to false when a notification service indicates to
   *                     Amazon SNS that the endpoint is invalid. Users can set it back to true, typically
   *                     after updating Token.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>Token</code> – device token, also referred to as a registration id,
   *                     for an app and mobile device. This is returned from the notification service
   *                     when an app and mobile device are registered with the notification
   *                     service.</p>
   *                     <note>
   *                         <p>The device token for the iOS platform is returned in lowercase.</p>
   *                     </note>
   *             </li>
   *          </ul>
   */
  Attributes?: { [key: string]: string };
}

export namespace GetEndpointAttributesResponse {
  export function isa(o: any): o is GetEndpointAttributesResponse {
    return __isa(o, "GetEndpointAttributesResponse");
  }
}

/**
 * <p>Input for GetPlatformApplicationAttributes action.</p>
 */
export interface GetPlatformApplicationAttributesInput {
  __type?: "GetPlatformApplicationAttributesInput";
  /**
   * <p>PlatformApplicationArn for GetPlatformApplicationAttributesInput.</p>
   */
  PlatformApplicationArn: string | undefined;
}

export namespace GetPlatformApplicationAttributesInput {
  export function isa(o: any): o is GetPlatformApplicationAttributesInput {
    return __isa(o, "GetPlatformApplicationAttributesInput");
  }
}

/**
 * <p>Response for GetPlatformApplicationAttributes action.</p>
 */
export interface GetPlatformApplicationAttributesResponse {
  __type?: "GetPlatformApplicationAttributesResponse";
  /**
   * <p>Attributes include the following:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>EventEndpointCreated</code> – Topic ARN to which EndpointCreated
   *                     event notifications should be sent.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>EventEndpointDeleted</code> – Topic ARN to which EndpointDeleted
   *                     event notifications should be sent.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>EventEndpointUpdated</code> – Topic ARN to which EndpointUpdate
   *                     event notifications should be sent.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>EventDeliveryFailure</code> – Topic ARN to which DeliveryFailure
   *                     event notifications should be sent upon Direct Publish delivery failure
   *                     (permanent) to one of the application's endpoints.</p>
   *             </li>
   *          </ul>
   */
  Attributes?: { [key: string]: string };
}

export namespace GetPlatformApplicationAttributesResponse {
  export function isa(o: any): o is GetPlatformApplicationAttributesResponse {
    return __isa(o, "GetPlatformApplicationAttributesResponse");
  }
}

/**
 * <p>The input for the <code>GetSMSAttributes</code> request.</p>
 */
export interface GetSMSAttributesInput {
  __type?: "GetSMSAttributesInput";
  /**
   * <p>A list of the individual attribute names, such as <code>MonthlySpendLimit</code>, for
   *             which you want values.</p>
   *         <p>For all attribute names, see <a href="https://docs.aws.amazon.com/sns/latest/api/API_SetSMSAttributes.html">SetSMSAttributes</a>.</p>
   *         <p>If you don't use this parameter, Amazon SNS returns all SMS attributes.</p>
   */
  attributes?: Array<string>;
}

export namespace GetSMSAttributesInput {
  export function isa(o: any): o is GetSMSAttributesInput {
    return __isa(o, "GetSMSAttributesInput");
  }
}

/**
 * <p>The response from the <code>GetSMSAttributes</code> request.</p>
 */
export interface GetSMSAttributesResponse {
  __type?: "GetSMSAttributesResponse";
  /**
   * <p>The SMS attribute names and their values.</p>
   */
  attributes?: { [key: string]: string };
}

export namespace GetSMSAttributesResponse {
  export function isa(o: any): o is GetSMSAttributesResponse {
    return __isa(o, "GetSMSAttributesResponse");
  }
}

/**
 * <p>Input for GetSubscriptionAttributes.</p>
 */
export interface GetSubscriptionAttributesInput {
  __type?: "GetSubscriptionAttributesInput";
  /**
   * <p>The ARN of the subscription whose properties you want to get.</p>
   */
  SubscriptionArn: string | undefined;
}

export namespace GetSubscriptionAttributesInput {
  export function isa(o: any): o is GetSubscriptionAttributesInput {
    return __isa(o, "GetSubscriptionAttributesInput");
  }
}

/**
 * <p>Response for GetSubscriptionAttributes action.</p>
 */
export interface GetSubscriptionAttributesResponse {
  __type?: "GetSubscriptionAttributesResponse";
  /**
   * <p>A map of the subscription's attributes. Attributes in this map include the
   *             following:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>ConfirmationWasAuthenticated</code> – <code>true</code> if the
   *                     subscription confirmation request was authenticated.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>DeliveryPolicy</code> – The JSON serialization of the
   *                     subscription's delivery policy.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>EffectiveDeliveryPolicy</code> – The JSON serialization of the
   *                     effective delivery policy that takes into account the topic delivery policy and
   *                     account system defaults.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>FilterPolicy</code> – The filter policy JSON that is assigned to
   *                     the subscription.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>Owner</code> – The AWS account ID of the subscription's
   *                     owner.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>PendingConfirmation</code> – <code>true</code> if the subscription
   *                     hasn't been confirmed. To confirm a pending subscription, call the
   *                         <code>ConfirmSubscription</code> action with a confirmation token.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>RawMessageDelivery</code> – <code>true</code> if raw message
   *                     delivery is enabled for the subscription. Raw messages are free of JSON
   *                     formatting and can be sent to HTTP/S and Amazon SQS endpoints.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>RedrivePolicy</code> – When specified, sends undeliverable messages to the specified Amazon SQS dead-letter queue.
   *     Messages that can't be delivered due to client errors (for example, when the subscribed endpoint is unreachable)
   *     or server errors (for example, when the service that powers the subscribed endpoint becomes unavailable) are held
   *     in the dead-letter queue for further analysis or reprocessing.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>SubscriptionArn</code> – The subscription's ARN.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>TopicArn</code> – The topic ARN that the subscription is associated
   *                     with.</p>
   *             </li>
   *          </ul>
   */
  Attributes?: { [key: string]: string };
}

export namespace GetSubscriptionAttributesResponse {
  export function isa(o: any): o is GetSubscriptionAttributesResponse {
    return __isa(o, "GetSubscriptionAttributesResponse");
  }
}

/**
 * <p>Input for GetTopicAttributes action.</p>
 */
export interface GetTopicAttributesInput {
  __type?: "GetTopicAttributesInput";
  /**
   * <p>The ARN of the topic whose properties you want to get.</p>
   */
  TopicArn: string | undefined;
}

export namespace GetTopicAttributesInput {
  export function isa(o: any): o is GetTopicAttributesInput {
    return __isa(o, "GetTopicAttributesInput");
  }
}

/**
 * <p>Response for GetTopicAttributes action.</p>
 */
export interface GetTopicAttributesResponse {
  __type?: "GetTopicAttributesResponse";
  /**
   * <p>A map of the topic's attributes. Attributes in this map include the following:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>DeliveryPolicy</code> – The JSON serialization of the topic's
   *                     delivery policy.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>DisplayName</code> – The human-readable name used in the
   *                         <code>From</code> field for notifications to <code>email</code> and
   *                         <code>email-json</code> endpoints.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Owner</code> – The AWS account ID of the topic's owner.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Policy</code> – The JSON serialization of the topic's access
   *                     control policy.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>SubscriptionsConfirmed</code> – The number of confirmed
   *                     subscriptions for the topic.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>SubscriptionsDeleted</code> – The number of deleted subscriptions
   *                     for the topic.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>SubscriptionsPending</code> – The number of subscriptions pending
   *                     confirmation for the topic.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>TopicArn</code> – The topic's ARN.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>EffectiveDeliveryPolicy</code> – Yhe JSON serialization of the
   *                     effective delivery policy, taking system defaults into account.</p>
   *             </li>
   *          </ul>
   *
   *         <p>The following attribute applies only to <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-server-side-encryption.html">server-side-encryption</a>:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>KmsMasterKeyId</code> - The ID of an AWS-managed customer master key (CMK)
   *                     for Amazon SNS or a custom CMK. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-server-side-encryption.html#sse-key-terms">Key Terms</a>.
   *                     For more examples, see <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_DescribeKey.html#API_DescribeKey_RequestParameters">KeyId</a> in the <i>AWS Key Management Service API Reference</i>.</p>
   *             </li>
   *          </ul>
   */
  Attributes?: { [key: string]: string };
}

export namespace GetTopicAttributesResponse {
  export function isa(o: any): o is GetTopicAttributesResponse {
    return __isa(o, "GetTopicAttributesResponse");
  }
}

/**
 * <p>Indicates an internal service error.</p>
 */
export interface InternalErrorException
  extends __SmithyException,
    $MetadataBearer {
  name: "InternalErrorException";
  $fault: "server";
  message?: string;
}

export namespace InternalErrorException {
  export function isa(o: any): o is InternalErrorException {
    return __isa(o, "InternalErrorException");
  }
}

/**
 * <p>Indicates that a request parameter does not comply with the associated
 *             constraints.</p>
 */
export interface InvalidParameterException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidParameterException";
  $fault: "client";
  message?: string;
}

export namespace InvalidParameterException {
  export function isa(o: any): o is InvalidParameterException {
    return __isa(o, "InvalidParameterException");
  }
}

/**
 * <p>Indicates that a request parameter does not comply with the associated
 *             constraints.</p>
 */
export interface InvalidParameterValueException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidParameterValueException";
  $fault: "client";
  /**
   * <p>The parameter value is invalid.</p>
   */
  message?: string;
}

export namespace InvalidParameterValueException {
  export function isa(o: any): o is InvalidParameterValueException {
    return __isa(o, "InvalidParameterValueException");
  }
}

/**
 * <p>The credential signature isn't valid. You must use an HTTPS endpoint and sign your
 *             request using Signature Version 4.</p>
 */
export interface InvalidSecurityException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidSecurityException";
  $fault: "client";
  message?: string;
}

export namespace InvalidSecurityException {
  export function isa(o: any): o is InvalidSecurityException {
    return __isa(o, "InvalidSecurityException");
  }
}

/**
 * <p>The ciphertext references a key that doesn't exist or that you don't have access
 *             to.</p>
 */
export interface KMSAccessDeniedException
  extends __SmithyException,
    $MetadataBearer {
  name: "KMSAccessDeniedException";
  $fault: "client";
  message?: string;
}

export namespace KMSAccessDeniedException {
  export function isa(o: any): o is KMSAccessDeniedException {
    return __isa(o, "KMSAccessDeniedException");
  }
}

/**
 * <p>The request was rejected because the specified customer master key (CMK) isn't
 *             enabled.</p>
 */
export interface KMSDisabledException
  extends __SmithyException,
    $MetadataBearer {
  name: "KMSDisabledException";
  $fault: "client";
  message?: string;
}

export namespace KMSDisabledException {
  export function isa(o: any): o is KMSDisabledException {
    return __isa(o, "KMSDisabledException");
  }
}

/**
 * <p>The request was rejected because the state of the specified resource isn't valid for
 *             this request. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use of a
 *                 Customer Master Key</a> in the <i>AWS Key Management Service Developer
 *                 Guide</i>.</p>
 */
export interface KMSInvalidStateException
  extends __SmithyException,
    $MetadataBearer {
  name: "KMSInvalidStateException";
  $fault: "client";
  message?: string;
}

export namespace KMSInvalidStateException {
  export function isa(o: any): o is KMSInvalidStateException {
    return __isa(o, "KMSInvalidStateException");
  }
}

/**
 * <p>The request was rejected because the specified entity or resource can't be
 *             found.</p>
 */
export interface KMSNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "KMSNotFoundException";
  $fault: "client";
  message?: string;
}

export namespace KMSNotFoundException {
  export function isa(o: any): o is KMSNotFoundException {
    return __isa(o, "KMSNotFoundException");
  }
}

/**
 * <p>The AWS access key ID needs a subscription for the service.</p>
 */
export interface KMSOptInRequired extends __SmithyException, $MetadataBearer {
  name: "KMSOptInRequired";
  $fault: "client";
  message?: string;
}

export namespace KMSOptInRequired {
  export function isa(o: any): o is KMSOptInRequired {
    return __isa(o, "KMSOptInRequired");
  }
}

/**
 * <p>The request was denied due to request throttling. For more information about
 *             throttling, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/limits.html#requests-per-second">Limits</a> in
 *             the <i>AWS Key Management Service Developer Guide.</i>
 *          </p>
 */
export interface KMSThrottlingException
  extends __SmithyException,
    $MetadataBearer {
  name: "KMSThrottlingException";
  $fault: "client";
  message?: string;
}

export namespace KMSThrottlingException {
  export function isa(o: any): o is KMSThrottlingException {
    return __isa(o, "KMSThrottlingException");
  }
}

/**
 * <p>Input for ListEndpointsByPlatformApplication action.</p>
 */
export interface ListEndpointsByPlatformApplicationInput {
  __type?: "ListEndpointsByPlatformApplicationInput";
  /**
   * <p>NextToken string is used when calling ListEndpointsByPlatformApplication action to
   *             retrieve additional records that are available after the first page results.</p>
   */
  NextToken?: string;

  /**
   * <p>PlatformApplicationArn for ListEndpointsByPlatformApplicationInput action.</p>
   */
  PlatformApplicationArn: string | undefined;
}

export namespace ListEndpointsByPlatformApplicationInput {
  export function isa(o: any): o is ListEndpointsByPlatformApplicationInput {
    return __isa(o, "ListEndpointsByPlatformApplicationInput");
  }
}

/**
 * <p>Response for ListEndpointsByPlatformApplication action.</p>
 */
export interface ListEndpointsByPlatformApplicationResponse {
  __type?: "ListEndpointsByPlatformApplicationResponse";
  /**
   * <p>Endpoints returned for ListEndpointsByPlatformApplication action.</p>
   */
  Endpoints?: Array<Endpoint>;

  /**
   * <p>NextToken string is returned when calling ListEndpointsByPlatformApplication action if
   *             additional records are available after the first page results.</p>
   */
  NextToken?: string;
}

export namespace ListEndpointsByPlatformApplicationResponse {
  export function isa(o: any): o is ListEndpointsByPlatformApplicationResponse {
    return __isa(o, "ListEndpointsByPlatformApplicationResponse");
  }
}

/**
 * <p>The input for the <code>ListPhoneNumbersOptedOut</code> action.</p>
 */
export interface ListPhoneNumbersOptedOutInput {
  __type?: "ListPhoneNumbersOptedOutInput";
  /**
   * <p>A <code>NextToken</code> string is used when you call the
   *                 <code>ListPhoneNumbersOptedOut</code> action to retrieve additional records that are
   *             available after the first page of results.</p>
   */
  nextToken?: string;
}

export namespace ListPhoneNumbersOptedOutInput {
  export function isa(o: any): o is ListPhoneNumbersOptedOutInput {
    return __isa(o, "ListPhoneNumbersOptedOutInput");
  }
}

/**
 * <p>The response from the <code>ListPhoneNumbersOptedOut</code> action.</p>
 */
export interface ListPhoneNumbersOptedOutResponse {
  __type?: "ListPhoneNumbersOptedOutResponse";
  /**
   * <p>A <code>NextToken</code> string is returned when you call the
   *                 <code>ListPhoneNumbersOptedOut</code> action if additional records are available
   *             after the first page of results.</p>
   */
  nextToken?: string;

  /**
   * <p>A list of phone numbers that are opted out of receiving SMS messages. The list is
   *             paginated, and each page can contain up to 100 phone numbers.</p>
   */
  phoneNumbers?: Array<string>;
}

export namespace ListPhoneNumbersOptedOutResponse {
  export function isa(o: any): o is ListPhoneNumbersOptedOutResponse {
    return __isa(o, "ListPhoneNumbersOptedOutResponse");
  }
}

/**
 * <p>Input for ListPlatformApplications action.</p>
 */
export interface ListPlatformApplicationsInput {
  __type?: "ListPlatformApplicationsInput";
  /**
   * <p>NextToken string is used when calling ListPlatformApplications action to retrieve
   *             additional records that are available after the first page results.</p>
   */
  NextToken?: string;
}

export namespace ListPlatformApplicationsInput {
  export function isa(o: any): o is ListPlatformApplicationsInput {
    return __isa(o, "ListPlatformApplicationsInput");
  }
}

/**
 * <p>Response for ListPlatformApplications action.</p>
 */
export interface ListPlatformApplicationsResponse {
  __type?: "ListPlatformApplicationsResponse";
  /**
   * <p>NextToken string is returned when calling ListPlatformApplications action if
   *             additional records are available after the first page results.</p>
   */
  NextToken?: string;

  /**
   * <p>Platform applications returned when calling ListPlatformApplications action.</p>
   */
  PlatformApplications?: Array<PlatformApplication>;
}

export namespace ListPlatformApplicationsResponse {
  export function isa(o: any): o is ListPlatformApplicationsResponse {
    return __isa(o, "ListPlatformApplicationsResponse");
  }
}

/**
 * <p>Input for ListSubscriptionsByTopic action.</p>
 */
export interface ListSubscriptionsByTopicInput {
  __type?: "ListSubscriptionsByTopicInput";
  /**
   * <p>Token returned by the previous <code>ListSubscriptionsByTopic</code> request.</p>
   */
  NextToken?: string;

  /**
   * <p>The ARN of the topic for which you wish to find subscriptions.</p>
   */
  TopicArn: string | undefined;
}

export namespace ListSubscriptionsByTopicInput {
  export function isa(o: any): o is ListSubscriptionsByTopicInput {
    return __isa(o, "ListSubscriptionsByTopicInput");
  }
}

/**
 * <p>Response for ListSubscriptionsByTopic action.</p>
 */
export interface ListSubscriptionsByTopicResponse {
  __type?: "ListSubscriptionsByTopicResponse";
  /**
   * <p>Token to pass along to the next <code>ListSubscriptionsByTopic</code> request. This
   *             element is returned if there are more subscriptions to retrieve.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of subscriptions.</p>
   */
  Subscriptions?: Array<Subscription>;
}

export namespace ListSubscriptionsByTopicResponse {
  export function isa(o: any): o is ListSubscriptionsByTopicResponse {
    return __isa(o, "ListSubscriptionsByTopicResponse");
  }
}

/**
 * <p>Input for ListSubscriptions action.</p>
 */
export interface ListSubscriptionsInput {
  __type?: "ListSubscriptionsInput";
  /**
   * <p>Token returned by the previous <code>ListSubscriptions</code> request.</p>
   */
  NextToken?: string;
}

export namespace ListSubscriptionsInput {
  export function isa(o: any): o is ListSubscriptionsInput {
    return __isa(o, "ListSubscriptionsInput");
  }
}

/**
 * <p>Response for ListSubscriptions action</p>
 */
export interface ListSubscriptionsResponse {
  __type?: "ListSubscriptionsResponse";
  /**
   * <p>Token to pass along to the next <code>ListSubscriptions</code> request. This element
   *             is returned if there are more subscriptions to retrieve.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of subscriptions.</p>
   */
  Subscriptions?: Array<Subscription>;
}

export namespace ListSubscriptionsResponse {
  export function isa(o: any): o is ListSubscriptionsResponse {
    return __isa(o, "ListSubscriptionsResponse");
  }
}

export interface ListTagsForResourceRequest {
  __type?: "ListTagsForResourceRequest";
  /**
   * <p>The ARN of the topic for which to list tags.</p>
   */
  ResourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  export function isa(o: any): o is ListTagsForResourceRequest {
    return __isa(o, "ListTagsForResourceRequest");
  }
}

export interface ListTagsForResourceResponse {
  __type?: "ListTagsForResourceResponse";
  /**
   * <p>The tags associated with the specified topic.</p>
   */
  Tags?: Array<Tag>;
}

export namespace ListTagsForResourceResponse {
  export function isa(o: any): o is ListTagsForResourceResponse {
    return __isa(o, "ListTagsForResourceResponse");
  }
}

export interface ListTopicsInput {
  __type?: "ListTopicsInput";
  /**
   * <p>Token returned by the previous <code>ListTopics</code> request.</p>
   */
  NextToken?: string;
}

export namespace ListTopicsInput {
  export function isa(o: any): o is ListTopicsInput {
    return __isa(o, "ListTopicsInput");
  }
}

/**
 * <p>Response for ListTopics action.</p>
 */
export interface ListTopicsResponse {
  __type?: "ListTopicsResponse";
  /**
   * <p>Token to pass along to the next <code>ListTopics</code> request. This element is
   *             returned if there are additional topics to retrieve.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of topic ARNs.</p>
   */
  Topics?: Array<Topic>;
}

export namespace ListTopicsResponse {
  export function isa(o: any): o is ListTopicsResponse {
    return __isa(o, "ListTopicsResponse");
  }
}

/**
 * <p>The user-specified message attribute value. For string data types, the value attribute
 *             has the same restrictions on the content as the message body. For more information, see
 *                 <a href="https://docs.aws.amazon.com/sns/latest/api/API_Publish.html">Publish</a>.</p>
 *         <p>Name, type, and value must not be empty or null. In addition, the message body should
 *             not be empty or null. All parts of the message attribute, including name, type, and
 *             value, are included in the message size restriction, which is currently 256 KB (262,144
 *             bytes). For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMessageAttributes.html">Using Amazon SNS Message
 *             Attributes</a>.</p>
 */
export interface MessageAttributeValue {
  __type?: "MessageAttributeValue";
  /**
   * <p>Binary type attributes can store any binary data, for example, compressed data,
   *             encrypted data, or images.</p>
   */
  BinaryValue?: Uint8Array;

  /**
   * <p>Amazon SNS supports the following logical data types: String, String.Array, Number, and
   *             Binary. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMessageAttributes.html#SNSMessageAttributes.DataTypes">Message
   *                 Attribute Data Types</a>.</p>
   */
  DataType: string | undefined;

  /**
   * <p>Strings are Unicode with UTF8 binary encoding. For a list of code values, see <a href="https://en.wikipedia.org/wiki/ASCII#ASCII_printable_characters">ASCII Printable
   *                 Characters</a>.</p>
   */
  StringValue?: string;
}

export namespace MessageAttributeValue {
  export function isa(o: any): o is MessageAttributeValue {
    return __isa(o, "MessageAttributeValue");
  }
}

/**
 * <p>Indicates that the requested resource does not exist.</p>
 */
export interface NotFoundException extends __SmithyException, $MetadataBearer {
  name: "NotFoundException";
  $fault: "client";
  message?: string;
}

export namespace NotFoundException {
  export function isa(o: any): o is NotFoundException {
    return __isa(o, "NotFoundException");
  }
}

/**
 * <p>Input for the OptInPhoneNumber action.</p>
 */
export interface OptInPhoneNumberInput {
  __type?: "OptInPhoneNumberInput";
  /**
   * <p>The phone number to opt in.</p>
   */
  phoneNumber: string | undefined;
}

export namespace OptInPhoneNumberInput {
  export function isa(o: any): o is OptInPhoneNumberInput {
    return __isa(o, "OptInPhoneNumberInput");
  }
}

/**
 * <p>The response for the OptInPhoneNumber action.</p>
 */
export interface OptInPhoneNumberResponse {
  __type?: "OptInPhoneNumberResponse";
}

export namespace OptInPhoneNumberResponse {
  export function isa(o: any): o is OptInPhoneNumberResponse {
    return __isa(o, "OptInPhoneNumberResponse");
  }
}

/**
 * <p>Platform application object.</p>
 */
export interface PlatformApplication {
  __type?: "PlatformApplication";
  /**
   * <p>Attributes for platform application object.</p>
   */
  Attributes?: { [key: string]: string };

  /**
   * <p>PlatformApplicationArn for platform application object.</p>
   */
  PlatformApplicationArn?: string;
}

export namespace PlatformApplication {
  export function isa(o: any): o is PlatformApplication {
    return __isa(o, "PlatformApplication");
  }
}

/**
 * <p>Exception error indicating platform application disabled.</p>
 */
export interface PlatformApplicationDisabledException
  extends __SmithyException,
    $MetadataBearer {
  name: "PlatformApplicationDisabledException";
  $fault: "client";
  /**
   * <p>Message for platform application disabled.</p>
   */
  message?: string;
}

export namespace PlatformApplicationDisabledException {
  export function isa(o: any): o is PlatformApplicationDisabledException {
    return __isa(o, "PlatformApplicationDisabledException");
  }
}

/**
 * <p>Input for Publish action.</p>
 */
export interface PublishInput {
  __type?: "PublishInput";
  /**
   * <p>The message you want to send.</p>
   *         <p>If you are publishing to a topic and you want to send the same message to all
   *             transport protocols, include the text of the message as a String value. If you want to
   *             send different messages for each transport protocol, set the value of the
   *                 <code>MessageStructure</code> parameter to <code>json</code> and use a JSON object
   *             for the <code>Message</code> parameter.
   *         </p>
   *         <p></p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>With the exception of SMS, messages must be UTF-8 encoded strings and at most
   *                     256 KB in size (262,144 bytes, not 262,144 characters).</p>
   *             </li>
   *             <li>
   *                 <p>For SMS, each message can contain up to 140 characters. This character limit
   *                     depends on the encoding schema. For example, an SMS message can contain 160 GSM
   *                     characters, 140 ASCII characters, or 70 UCS-2 characters.</p>
   *                 <p>If you publish a message that exceeds this size limit, Amazon SNS sends the message
   *                     as multiple messages, each fitting within the size limit. Messages aren't
   *                     truncated mid-word but are cut off at whole-word boundaries.</p>
   *                 <p>The total size limit for a single SMS <code>Publish</code> action is 1,600
   *                     characters.</p>
   *             </li>
   *          </ul>
   *         <p>JSON-specific constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Keys in the JSON object that correspond to supported transport protocols must
   *                     have simple JSON string values.</p>
   *             </li>
   *             <li>
   *                 <p>The values will be parsed (unescaped) before they are used in outgoing
   *                     messages.</p>
   *             </li>
   *             <li>
   *                 <p>Outbound notifications are JSON encoded (meaning that the characters will be
   *                     reescaped for sending).</p>
   *             </li>
   *             <li>
   *                 <p>Values have a minimum length of 0 (the empty string, "", is allowed).</p>
   *             </li>
   *             <li>
   *                 <p>Values have a maximum length bounded by the overall message size (so,
   *                     including multiple protocols may limit message sizes).</p>
   *             </li>
   *             <li>
   *                 <p>Non-string values will cause the key to be ignored.</p>
   *             </li>
   *             <li>
   *                 <p>Keys that do not correspond to supported transport protocols are
   *                     ignored.</p>
   *             </li>
   *             <li>
   *                 <p>Duplicate keys are not allowed.</p>
   *             </li>
   *             <li>
   *                 <p>Failure to parse or validate any key or value in the message will cause the
   *                         <code>Publish</code> call to return an error (no partial delivery).</p>
   *             </li>
   *          </ul>
   */
  Message: string | undefined;

  /**
   * <p>Message attributes for Publish action.</p>
   */
  MessageAttributes?: { [key: string]: MessageAttributeValue };

  /**
   * <p>Set <code>MessageStructure</code> to <code>json</code> if you want to send a different
   *             message for each protocol. For example, using one publish action, you can send a short
   *             message to your SMS subscribers and a longer message to your email subscribers. If you
   *             set <code>MessageStructure</code> to <code>json</code>, the value of the
   *                 <code>Message</code> parameter must: </p>
   *         <ul>
   *             <li>
   *                 <p>be a syntactically valid JSON object; and</p>
   *             </li>
   *             <li>
   *                 <p>contain at least a top-level JSON key of "default" with a value that is a
   *                     string.</p>
   *             </li>
   *          </ul>
   *         <p>You can define other top-level keys that define the message you want to send to a
   *             specific transport protocol (e.g., "http").</p>
   *         <p>Valid value: <code>json</code>
   *         </p>
   */
  MessageStructure?: string;

  /**
   * <p>The phone number to which you want to deliver an SMS message. Use E.164 format.</p>
   *         <p>If you don't specify a value for the <code>PhoneNumber</code> parameter, you must
   *             specify a value for the <code>TargetArn</code> or <code>TopicArn</code>
   *             parameters.</p>
   */
  PhoneNumber?: string;

  /**
   * <p>Optional parameter to be used as the "Subject" line when the message is delivered to
   *             email endpoints. This field will also be included, if present, in the standard JSON
   *             messages delivered to other endpoints.</p>
   *         <p>Constraints: Subjects must be ASCII text that begins with a letter, number, or
   *             punctuation mark; must not include line breaks or control characters; and must be less
   *             than 100 characters long.</p>
   */
  Subject?: string;

  /**
   * <p>If you don't specify a value for the <code>TargetArn</code> parameter, you must
   *             specify a value for the <code>PhoneNumber</code> or <code>TopicArn</code>
   *             parameters.</p>
   */
  TargetArn?: string;

  /**
   * <p>The topic you want to publish to.</p>
   *         <p>If you don't specify a value for the <code>TopicArn</code> parameter, you must specify
   *             a value for the <code>PhoneNumber</code> or <code>TargetArn</code> parameters.</p>
   */
  TopicArn?: string;
}

export namespace PublishInput {
  export function isa(o: any): o is PublishInput {
    return __isa(o, "PublishInput");
  }
}

/**
 * <p>Response for Publish action.</p>
 */
export interface PublishResponse {
  __type?: "PublishResponse";
  /**
   * <p>Unique identifier assigned to the published message.</p>
   *         <p>Length Constraint: Maximum 100 characters</p>
   */
  MessageId?: string;
}

export namespace PublishResponse {
  export function isa(o: any): o is PublishResponse {
    return __isa(o, "PublishResponse");
  }
}

/**
 * <p>Input for RemovePermission action.</p>
 */
export interface RemovePermissionInput {
  __type?: "RemovePermissionInput";
  /**
   * <p>The unique label of the statement you want to remove.</p>
   */
  Label: string | undefined;

  /**
   * <p>The ARN of the topic whose access control policy you wish to modify.</p>
   */
  TopicArn: string | undefined;
}

export namespace RemovePermissionInput {
  export function isa(o: any): o is RemovePermissionInput {
    return __isa(o, "RemovePermissionInput");
  }
}

/**
 * <p>Can't tag resource. Verify that the topic exists.</p>
 */
export interface ResourceNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  message?: string;
}

export namespace ResourceNotFoundException {
  export function isa(o: any): o is ResourceNotFoundException {
    return __isa(o, "ResourceNotFoundException");
  }
}

/**
 * <p>Input for SetEndpointAttributes action.</p>
 */
export interface SetEndpointAttributesInput {
  __type?: "SetEndpointAttributesInput";
  /**
   * <p>A map of the endpoint attributes. Attributes in this map include the following:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>CustomUserData</code> – arbitrary user data to associate with the
   *                     endpoint. Amazon SNS does not use this data. The data must be in UTF-8 format and
   *                     less than 2KB.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>Enabled</code> – flag that enables/disables delivery to the
   *                     endpoint. Amazon SNS will set this to false when a notification service indicates to
   *                     Amazon SNS that the endpoint is invalid. Users can set it back to true, typically
   *                     after updating Token.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>Token</code> – device token, also referred to as a registration id,
   *                     for an app and mobile device. This is returned from the notification service
   *                     when an app and mobile device are registered with the notification
   *                     service.</p>
   *             </li>
   *          </ul>
   */
  Attributes: { [key: string]: string } | undefined;

  /**
   * <p>EndpointArn used for SetEndpointAttributes action.</p>
   */
  EndpointArn: string | undefined;
}

export namespace SetEndpointAttributesInput {
  export function isa(o: any): o is SetEndpointAttributesInput {
    return __isa(o, "SetEndpointAttributesInput");
  }
}

/**
 * <p>Input for SetPlatformApplicationAttributes action.</p>
 */
export interface SetPlatformApplicationAttributesInput {
  __type?: "SetPlatformApplicationAttributesInput";
  /**
   * <p>A map of the platform application attributes. Attributes in this map include the
   *             following:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>PlatformCredential</code> – The credential received from the
   *                     notification service. For APNS/APNS_SANDBOX, PlatformCredential is private key.
   *                     For FCM, PlatformCredential is "API key". For ADM, PlatformCredential is "client
   *                     secret".</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>PlatformPrincipal</code> – The principal received from the
   *                     notification service. For APNS/APNS_SANDBOX, PlatformPrincipal is SSL
   *                     certificate. For FCM, PlatformPrincipal is not applicable. For ADM,
   *                     PlatformPrincipal is "client id".</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>EventEndpointCreated</code> – Topic ARN to which EndpointCreated
   *                     event notifications should be sent.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>EventEndpointDeleted</code> – Topic ARN to which EndpointDeleted
   *                     event notifications should be sent.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>EventEndpointUpdated</code> – Topic ARN to which EndpointUpdate
   *                     event notifications should be sent.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>EventDeliveryFailure</code> – Topic ARN to which DeliveryFailure
   *                     event notifications should be sent upon Direct Publish delivery failure
   *                     (permanent) to one of the application's endpoints.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>SuccessFeedbackRoleArn</code> – IAM role ARN used to give Amazon SNS
   *                     write access to use CloudWatch Logs on your behalf.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>FailureFeedbackRoleArn</code> – IAM role ARN used to give Amazon SNS
   *                     write access to use CloudWatch Logs on your behalf.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>SuccessFeedbackSampleRate</code> – Sample rate percentage (0-100)
   *                     of successfully delivered messages.</p>
   *             </li>
   *          </ul>
   */
  Attributes: { [key: string]: string } | undefined;

  /**
   * <p>PlatformApplicationArn for SetPlatformApplicationAttributes action.</p>
   */
  PlatformApplicationArn: string | undefined;
}

export namespace SetPlatformApplicationAttributesInput {
  export function isa(o: any): o is SetPlatformApplicationAttributesInput {
    return __isa(o, "SetPlatformApplicationAttributesInput");
  }
}

/**
 * <p>The input for the SetSMSAttributes action.</p>
 */
export interface SetSMSAttributesInput {
  __type?: "SetSMSAttributesInput";
  /**
   * <p>The default settings for sending SMS messages from your account. You can set values
   *             for the following attribute names:</p>
   *         <p>
   *             <code>MonthlySpendLimit</code> – The maximum amount in USD that you are willing to spend
   *             each month to send SMS messages. When Amazon SNS determines that sending an SMS message would
   *             incur a cost that exceeds this limit, it stops sending SMS messages within
   *             minutes.</p>
   *         <important>
   *             <p>Amazon SNS stops sending SMS messages within minutes of the limit being crossed. During
   *                 that interval, if you continue to send SMS messages, you will incur costs that
   *                 exceed your limit.</p>
   *         </important>
   *         <p>By default, the spend limit is set to the maximum allowed by Amazon SNS. If you want to
   *             raise the limit, submit an <a href="https://console.aws.amazon.com/support/home#/case/create?issueType=service-limit-increase&limitType=service-code-sns">SNS Limit Increase case</a>. For <b>New limit
   *                 value</b>, enter your desired monthly spend limit. In the <b>Use Case Description</b> field, explain that you are requesting
   *             an SMS monthly spend limit increase.</p>
   *         <p>
   *             <code>DeliveryStatusIAMRole</code> – The ARN of the IAM role that allows Amazon SNS to write
   *             logs about SMS deliveries in CloudWatch Logs. For each SMS message that you send, Amazon SNS
   *             writes a log that includes the message price, the success or failure status, the reason
   *             for failure (if the message failed), the message dwell time, and other
   *             information.</p>
   *         <p>
   *             <code>DeliveryStatusSuccessSamplingRate</code> – The percentage of successful SMS
   *             deliveries for which Amazon SNS will write logs in CloudWatch Logs. The value can be an
   *             integer from 0 - 100. For example, to write logs only for failed deliveries, set this
   *             value to <code>0</code>. To write logs for 10% of your successful deliveries, set it to
   *                 <code>10</code>.</p>
   *         <p>
   *             <code>DefaultSenderID</code> – A string, such as your business brand, that is displayed
   *             as the sender on the receiving device. Support for sender IDs varies by country. The
   *             sender ID can be 1 - 11 alphanumeric characters, and it must contain at least one
   *             letter.</p>
   *         <p>
   *             <code>DefaultSMSType</code> – The type of SMS message that you will send by default. You
   *             can assign the following values:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>Promotional</code> – (Default) Noncritical messages, such as marketing
   *                     messages. Amazon SNS optimizes the message delivery to incur the lowest cost.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>Transactional</code> – Critical messages that support customer
   *                     transactions, such as one-time passcodes for multi-factor authentication. Amazon
   *                     SNS optimizes the message delivery to achieve the highest reliability.</p>
   *             </li>
   *          </ul>
   *         <p>
   *             <code>UsageReportS3Bucket</code> – The name of the Amazon S3 bucket to receive daily SMS
   *             usage reports from Amazon SNS. Each day, Amazon SNS will deliver a usage report as a CSV file to
   *             the bucket. The report includes the following information for each SMS message that was
   *             successfully delivered by your account:</p>
   *         <ul>
   *             <li>
   *                 <p>Time that the message was published (in UTC)</p>
   *             </li>
   *             <li>
   *                 <p>Message ID</p>
   *             </li>
   *             <li>
   *                 <p>Destination phone number</p>
   *             </li>
   *             <li>
   *                 <p>Message type</p>
   *             </li>
   *             <li>
   *                 <p>Delivery status</p>
   *             </li>
   *             <li>
   *                 <p>Message price (in USD)</p>
   *             </li>
   *             <li>
   *                 <p>Part number (a message is split into multiple parts if it is too long for a
   *                     single message)</p>
   *             </li>
   *             <li>
   *                 <p>Total number of parts</p>
   *             </li>
   *          </ul>
   *         <p>To receive the report, the bucket must have a policy that allows the Amazon SNS service
   *             principle to perform the <code>s3:PutObject</code> and <code>s3:GetBucketLocation</code>
   *             actions.</p>
   *         <p>For an example bucket policy and usage report, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sms_stats.html">Monitoring SMS Activity</a> in the
   *                 <i>Amazon SNS Developer Guide</i>.</p>
   */
  attributes: { [key: string]: string } | undefined;
}

export namespace SetSMSAttributesInput {
  export function isa(o: any): o is SetSMSAttributesInput {
    return __isa(o, "SetSMSAttributesInput");
  }
}

/**
 * <p>The response for the SetSMSAttributes action.</p>
 */
export interface SetSMSAttributesResponse {
  __type?: "SetSMSAttributesResponse";
}

export namespace SetSMSAttributesResponse {
  export function isa(o: any): o is SetSMSAttributesResponse {
    return __isa(o, "SetSMSAttributesResponse");
  }
}

/**
 * <p>Input for SetSubscriptionAttributes action.</p>
 */
export interface SetSubscriptionAttributesInput {
  __type?: "SetSubscriptionAttributesInput";
  /**
   * <p>A map of attributes with their corresponding values.</p>
   *         <p>The following lists the names, descriptions, and values of the special request
   *             parameters that the <code>SetTopicAttributes</code> action uses:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>DeliveryPolicy</code> – The policy that defines how Amazon SNS retries
   *                     failed deliveries to HTTP/S endpoints.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>FilterPolicy</code> – The simple JSON object that lets your
   *                     subscriber receive only a subset of messages, rather than receiving every
   *                     message published to the topic.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>RawMessageDelivery</code> – When set to <code>true</code>,
   *                     enables raw message delivery to Amazon SQS or HTTP/S endpoints. This eliminates the
   *                     need for the endpoints to process JSON formatting, which is otherwise created
   *                     for Amazon SNS metadata.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>RedrivePolicy</code> – When specified, sends undeliverable messages to the specified Amazon SQS dead-letter queue.
   *     Messages that can't be delivered due to client errors (for example, when the subscribed endpoint is unreachable)
   *     or server errors (for example, when the service that powers the subscribed endpoint becomes unavailable) are held
   *     in the dead-letter queue for further analysis or reprocessing.</p>
   *             </li>
   *          </ul>
   */
  AttributeName: string | undefined;

  /**
   * <p>The new value for the attribute in JSON format.</p>
   */
  AttributeValue?: string;

  /**
   * <p>The ARN of the subscription to modify.</p>
   */
  SubscriptionArn: string | undefined;
}

export namespace SetSubscriptionAttributesInput {
  export function isa(o: any): o is SetSubscriptionAttributesInput {
    return __isa(o, "SetSubscriptionAttributesInput");
  }
}

/**
 * <p>Input for SetTopicAttributes action.</p>
 */
export interface SetTopicAttributesInput {
  __type?: "SetTopicAttributesInput";
  /**
   * <p>A map of attributes with their corresponding values.</p>
   *         <p>The following lists the names, descriptions, and values of the special request
   *             parameters that the <code>SetTopicAttributes</code> action uses:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>DeliveryPolicy</code> – The policy that defines how Amazon SNS retries
   *                     failed deliveries to HTTP/S endpoints.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>DisplayName</code> – The display name to use for a topic with SMS
   *                     subscriptions.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Policy</code> – The policy that defines who can access your
   *                     topic. By default, only the topic owner can publish or subscribe to the
   *                     topic.</p>
   *             </li>
   *          </ul>
   *
   *         <p>The following attribute applies only to <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-server-side-encryption.html">server-side-encryption</a>:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>KmsMasterKeyId</code> - The ID of an AWS-managed customer master key (CMK)
   *                     for Amazon SNS or a custom CMK. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-server-side-encryption.html#sse-key-terms">Key
   *                         Terms</a>. For more examples, see <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_DescribeKey.html#API_DescribeKey_RequestParameters">KeyId</a> in the <i>AWS Key Management Service API
   *                         Reference</i>. </p>
   *             </li>
   *          </ul>
   */
  AttributeName: string | undefined;

  /**
   * <p>The new value for the attribute.</p>
   */
  AttributeValue?: string;

  /**
   * <p>The ARN of the topic to modify.</p>
   */
  TopicArn: string | undefined;
}

export namespace SetTopicAttributesInput {
  export function isa(o: any): o is SetTopicAttributesInput {
    return __isa(o, "SetTopicAttributesInput");
  }
}

/**
 * <p>A tag has been added to a resource with the same ARN as a deleted resource.
 *             Wait a short while and then retry the operation.</p>
 */
export interface StaleTagException extends __SmithyException, $MetadataBearer {
  name: "StaleTagException";
  $fault: "client";
  message?: string;
}

export namespace StaleTagException {
  export function isa(o: any): o is StaleTagException {
    return __isa(o, "StaleTagException");
  }
}

/**
 * <p>Input for Subscribe action.</p>
 */
export interface SubscribeInput {
  __type?: "SubscribeInput";
  /**
   * <p>A map of attributes with their corresponding values.</p>
   *         <p>The following lists the names, descriptions, and values of the special request
   *             parameters that the <code>SetTopicAttributes</code> action uses:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>DeliveryPolicy</code> – The policy that defines how Amazon SNS retries
   *                     failed deliveries to HTTP/S endpoints.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>FilterPolicy</code> – The simple JSON object that lets your
   *                     subscriber receive only a subset of messages, rather than receiving every
   *                     message published to the topic.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>RawMessageDelivery</code> – When set to <code>true</code>,
   *                     enables raw message delivery to Amazon SQS or HTTP/S endpoints. This eliminates the
   *                     need for the endpoints to process JSON formatting, which is otherwise created
   *                     for Amazon SNS metadata.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>RedrivePolicy</code> – When specified, sends undeliverable messages to the specified Amazon SQS dead-letter queue.
   *     Messages that can't be delivered due to client errors (for example, when the subscribed endpoint is unreachable)
   *     or server errors (for example, when the service that powers the subscribed endpoint becomes unavailable) are held
   *     in the dead-letter queue for further analysis or reprocessing.</p>
   *             </li>
   *          </ul>
   */
  Attributes?: { [key: string]: string };

  /**
   * <p>The endpoint that you want to receive notifications. Endpoints vary by
   *             protocol:</p>
   *         <ul>
   *             <li>
   *                 <p>For the <code>http</code> protocol, the endpoint is an URL beginning with
   *                         <code>http://</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>For the <code>https</code> protocol, the endpoint is a URL beginning with
   *                         <code>https://</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>For the <code>email</code> protocol, the endpoint is an email address</p>
   *             </li>
   *             <li>
   *                 <p>For the <code>email-json</code> protocol, the endpoint is an email
   *                     address</p>
   *             </li>
   *             <li>
   *                 <p>For the <code>sms</code> protocol, the endpoint is a phone number of an
   *                     SMS-enabled device</p>
   *             </li>
   *             <li>
   *                 <p>For the <code>sqs</code> protocol, the endpoint is the ARN of an Amazon SQS
   *                     queue</p>
   *             </li>
   *             <li>
   *                 <p>For the <code>application</code> protocol, the endpoint is the EndpointArn of
   *                     a mobile app and device.</p>
   *             </li>
   *             <li>
   *                 <p>For the <code>lambda</code> protocol, the endpoint is the ARN of an Amazon Lambda
   *                     function.</p>
   *             </li>
   *          </ul>
   */
  Endpoint?: string;

  /**
   * <p>The protocol you want to use. Supported protocols include:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>http</code> – delivery of JSON-encoded message via HTTP POST</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>https</code> – delivery of JSON-encoded message via HTTPS
   *                     POST</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>email</code> – delivery of message via SMTP</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>email-json</code> – delivery of JSON-encoded message via
   *                     SMTP</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>sms</code> – delivery of message via SMS</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>sqs</code> – delivery of JSON-encoded message to an Amazon SQS
   *                     queue</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>application</code> – delivery of JSON-encoded message to an
   *                     EndpointArn for a mobile app and device.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>lambda</code> – delivery of JSON-encoded message to an Amazon Lambda
   *                     function.</p>
   *             </li>
   *          </ul>
   */
  Protocol: string | undefined;

  /**
   * <p>Sets whether the response from the <code>Subscribe</code> request includes the
   *             subscription ARN, even if the subscription is not yet confirmed.</p>
   *         <ul>
   *             <li>
   *                 <p>If you have the subscription ARN returned, the response includes the ARN in
   *                     all cases, even if the subscription is not yet confirmed.</p>
   *             </li>
   *             <li>
   *                 <p>If you don't have the subscription ARN returned, in addition to the ARN for
   *                     confirmed subscriptions, the response also includes the <code>pending
   *                         subscription</code> ARN value for subscriptions that aren't yet confirmed. A
   *                     subscription becomes confirmed when the subscriber calls the
   *                         <code>ConfirmSubscription</code> action with a confirmation token.</p>
   *             </li>
   *          </ul>
   *         <p>If you set this parameter to <code>true</code>, .</p>
   *         <p>The default value is <code>false</code>.</p>
   */
  ReturnSubscriptionArn?: boolean;

  /**
   * <p>The ARN of the topic you want to subscribe to.</p>
   */
  TopicArn: string | undefined;
}

export namespace SubscribeInput {
  export function isa(o: any): o is SubscribeInput {
    return __isa(o, "SubscribeInput");
  }
}

/**
 * <p>Response for Subscribe action.</p>
 */
export interface SubscribeResponse {
  __type?: "SubscribeResponse";
  /**
   * <p>The ARN of the subscription if it is confirmed, or the string "pending confirmation"
   *             if the subscription requires confirmation. However, if the API request parameter
   *                 <code>ReturnSubscriptionArn</code> is true, then the value is always the
   *             subscription ARN, even if the subscription requires confirmation.</p>
   */
  SubscriptionArn?: string;
}

export namespace SubscribeResponse {
  export function isa(o: any): o is SubscribeResponse {
    return __isa(o, "SubscribeResponse");
  }
}

/**
 * <p>A wrapper type for the attributes of an Amazon SNS subscription.</p>
 */
export interface Subscription {
  __type?: "Subscription";
  /**
   * <p>The subscription's endpoint (format depends on the protocol).</p>
   */
  Endpoint?: string;

  /**
   * <p>The subscription's owner.</p>
   */
  Owner?: string;

  /**
   * <p>The subscription's protocol.</p>
   */
  Protocol?: string;

  /**
   * <p>The subscription's ARN.</p>
   */
  SubscriptionArn?: string;

  /**
   * <p>The ARN of the subscription's topic.</p>
   */
  TopicArn?: string;
}

export namespace Subscription {
  export function isa(o: any): o is Subscription {
    return __isa(o, "Subscription");
  }
}

/**
 * <p>Indicates that the customer already owns the maximum allowed number of
 *             subscriptions.</p>
 */
export interface SubscriptionLimitExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "SubscriptionLimitExceededException";
  $fault: "client";
  message?: string;
}

export namespace SubscriptionLimitExceededException {
  export function isa(o: any): o is SubscriptionLimitExceededException {
    return __isa(o, "SubscriptionLimitExceededException");
  }
}

/**
 * <p>The list of tags to be added to the specified topic.</p>
 */
export interface Tag {
  __type?: "Tag";
  /**
   * <p>The required key portion of the tag.</p>
   */
  Key: string | undefined;

  /**
   * <p>The optional value portion of the tag.</p>
   */
  Value: string | undefined;
}

export namespace Tag {
  export function isa(o: any): o is Tag {
    return __isa(o, "Tag");
  }
}

/**
 * <p>Can't add more than 50 tags to a topic.</p>
 */
export interface TagLimitExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "TagLimitExceededException";
  $fault: "client";
  message?: string;
}

export namespace TagLimitExceededException {
  export function isa(o: any): o is TagLimitExceededException {
    return __isa(o, "TagLimitExceededException");
  }
}

/**
 * <p>The request doesn't comply with the IAM tag policy. Correct your request and then
 *             retry it.</p>
 */
export interface TagPolicyException extends __SmithyException, $MetadataBearer {
  name: "TagPolicyException";
  $fault: "client";
  message?: string;
}

export namespace TagPolicyException {
  export function isa(o: any): o is TagPolicyException {
    return __isa(o, "TagPolicyException");
  }
}

export interface TagResourceRequest {
  __type?: "TagResourceRequest";
  /**
   * <p>The ARN of the topic to which to add tags.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tags to be added to the specified topic. A tag consists of a required key
   *             and an optional value.</p>
   */
  Tags: Array<Tag> | undefined;
}

export namespace TagResourceRequest {
  export function isa(o: any): o is TagResourceRequest {
    return __isa(o, "TagResourceRequest");
  }
}

export interface TagResourceResponse {
  __type?: "TagResourceResponse";
}

export namespace TagResourceResponse {
  export function isa(o: any): o is TagResourceResponse {
    return __isa(o, "TagResourceResponse");
  }
}

/**
 * <p>Indicates that the rate at which requests have been submitted for this action exceeds
 *             the limit for your account.</p>
 */
export interface ThrottledException extends __SmithyException, $MetadataBearer {
  name: "ThrottledException";
  $fault: "client";
  /**
   * <p>Throttled request.</p>
   */
  message?: string;
}

export namespace ThrottledException {
  export function isa(o: any): o is ThrottledException {
    return __isa(o, "ThrottledException");
  }
}

/**
 * <p>A wrapper type for the topic's Amazon Resource Name (ARN). To retrieve a topic's
 *             attributes, use <code>GetTopicAttributes</code>.</p>
 */
export interface Topic {
  __type?: "Topic";
  /**
   * <p>The topic's ARN.</p>
   */
  TopicArn?: string;
}

export namespace Topic {
  export function isa(o: any): o is Topic {
    return __isa(o, "Topic");
  }
}

/**
 * <p>Indicates that the customer already owns the maximum allowed number of topics.</p>
 */
export interface TopicLimitExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "TopicLimitExceededException";
  $fault: "client";
  message?: string;
}

export namespace TopicLimitExceededException {
  export function isa(o: any): o is TopicLimitExceededException {
    return __isa(o, "TopicLimitExceededException");
  }
}

/**
 * <p>Input for Unsubscribe action.</p>
 */
export interface UnsubscribeInput {
  __type?: "UnsubscribeInput";
  /**
   * <p>The ARN of the subscription to be deleted.</p>
   */
  SubscriptionArn: string | undefined;
}

export namespace UnsubscribeInput {
  export function isa(o: any): o is UnsubscribeInput {
    return __isa(o, "UnsubscribeInput");
  }
}

export interface UntagResourceRequest {
  __type?: "UntagResourceRequest";
  /**
   * <p>The ARN of the topic from which to remove tags.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The list of tag keys to remove from the specified topic.</p>
   */
  TagKeys: Array<string> | undefined;
}

export namespace UntagResourceRequest {
  export function isa(o: any): o is UntagResourceRequest {
    return __isa(o, "UntagResourceRequest");
  }
}

export interface UntagResourceResponse {
  __type?: "UntagResourceResponse";
}

export namespace UntagResourceResponse {
  export function isa(o: any): o is UntagResourceResponse {
    return __isa(o, "UntagResourceResponse");
  }
}
