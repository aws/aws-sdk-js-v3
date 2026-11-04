// smithy-typescript generated code
import type { LanguageCodeString, NumberCapability, RouteType, SMSSandboxPhoneNumberVerificationStatus } from "./enums";

/**
 * @public
 */
export interface AddPermissionInput {
  /**
   * The ARN of the topic whose access control policy you wish to modify.
   *
   * @public
   */
  TopicArn: string | undefined;

  /**
   * A unique identifier for the new policy statement.
   *
   * @public
   */
  Label: string | undefined;

  /**
   * The Amazon Web Services account IDs of the users (principals) who will be given access to the specified actions. The users must have Amazon Web Services account, but do not need to be signed up for this service.
   *
   * @public
   */
  AWSAccountId: string[] | undefined;

  /**
   * The action you want to allow for the specified principal(s).
   *
   * Valid values: Any Amazon SNS action name, for example `Publish`.
   *
   * @public
   */
  ActionName: string[] | undefined;
}

/**
 * The input for the `CheckIfPhoneNumberIsOptedOut` action.
 *
 * @public
 */
export interface CheckIfPhoneNumberIsOptedOutInput {
  /**
   * The phone number for which you want to check the opt out status.
   *
   * @public
   */
  phoneNumber: string | undefined;
}

/**
 * The response from the `CheckIfPhoneNumberIsOptedOut` action.
 *
 * @public
 */
export interface CheckIfPhoneNumberIsOptedOutResponse {
  /**
   * Indicates whether the phone number is opted out:
   *
   * - `true` – The phone number is opted out, meaning you cannot publish SMS messages to it.
   * - `false` – The phone number is opted in, meaning you can publish SMS messages to it.
   *
   * @public
   */
  isOptedOut?: boolean | undefined;
}

/**
 * Input for ConfirmSubscription action.
 *
 * @public
 */
export interface ConfirmSubscriptionInput {
  /**
   * The ARN of the topic for which you wish to confirm a subscription.
   *
   * @public
   */
  TopicArn: string | undefined;

  /**
   * Short-lived token sent to an endpoint during the `Subscribe` action.
   *
   * @public
   */
  Token: string | undefined;

  /**
   * Disallows unauthenticated unsubscribes of the subscription. If the value of this parameter is `true` and the request has an Amazon Web Services signature, then only the topic owner and the subscription owner can unsubscribe the endpoint. The unsubscribe action requires Amazon Web Services authentication.
   *
   * @public
   */
  AuthenticateOnUnsubscribe?: string | undefined;
}

/**
 * Response for ConfirmSubscriptions action.
 *
 * @public
 */
export interface ConfirmSubscriptionResponse {
  /**
   * The ARN of the created subscription.
   *
   * @public
   */
  SubscriptionArn?: string | undefined;
}

/**
 * Input for CreatePlatformApplication action.
 *
 * @public
 */
export interface CreatePlatformApplicationInput {
  /**
   * Application names must be made up of only uppercase and lowercase ASCII letters, numbers, underscores, hyphens, and periods, and must be between 1 and 256 characters long.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The following platforms are supported: ADM (Amazon Device Messaging), APNS (Apple Push Notification Service), APNS_SANDBOX, and GCM (Firebase Cloud Messaging).
   *
   * @public
   */
  Platform: string | undefined;

  /**
   * For a list of attributes, see [`SetPlatformApplicationAttributes`](https://docs.aws.amazon.com/sns/latest/api/API_SetPlatformApplicationAttributes.html).
   *
   * @public
   */
  Attributes: Record<string, string> | undefined;
}

/**
 * Response from CreatePlatformApplication action.
 *
 * @public
 */
export interface CreatePlatformApplicationResponse {
  /**
   * `PlatformApplicationArn` is returned.
   *
   * @public
   */
  PlatformApplicationArn?: string | undefined;
}

/**
 * Response from CreateEndpoint action.
 *
 * @public
 */
export interface CreateEndpointResponse {
  /**
   * EndpointArn returned from CreateEndpoint action.
   *
   * @public
   */
  EndpointArn?: string | undefined;
}

/**
 * Input for CreatePlatformEndpoint action.
 *
 * @public
 */
export interface CreatePlatformEndpointInput {
  /**
   * `PlatformApplicationArn` returned from CreatePlatformApplication is used to create a an endpoint.
   *
   * @public
   */
  PlatformApplicationArn: string | undefined;

  /**
   * Unique identifier created by the notification service for an app on a device. The specific name for Token will vary, depending on which notification service is being used. For example, when using APNS as the notification service, you need the device token. Alternatively, when using GCM (Firebase Cloud Messaging) or ADM, the device token equivalent is called the registration ID.
   *
   * @public
   */
  Token: string | undefined;

  /**
   * Arbitrary user data to associate with the endpoint. Amazon SNS does not use this data. The data must be in UTF-8 format and less than 2KB.
   *
   * @public
   */
  CustomUserData?: string | undefined;

  /**
   * For a list of attributes, see [`SetEndpointAttributes`](https://docs.aws.amazon.com/sns/latest/api/API_SetEndpointAttributes.html).
   *
   * @public
   */
  Attributes?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateSMSSandboxPhoneNumberInput {
  /**
   * The destination phone number to verify. On verification, Amazon SNS adds this phone number to the list of verified phone numbers that you can send SMS messages to.
   *
   * @public
   */
  PhoneNumber: string | undefined;

  /**
   * The language to use for sending the OTP. The default value is `en-US`.
   *
   * @public
   */
  LanguageCode?: LanguageCodeString | undefined;
}

/**
 * @public
 */
export interface CreateSMSSandboxPhoneNumberResult {}

/**
 * The list of tags to be added to the specified topic.
 *
 * @public
 */
export interface Tag {
  /**
   * The required key portion of the tag.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The optional value portion of the tag.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * Input for CreateTopic action.
 *
 * @public
 */
export interface CreateTopicInput {
  /**
   * The name of the topic you want to create.
   *
   * Constraints: Topic names must be made up of only uppercase and lowercase ASCII letters, numbers, underscores, and hyphens, and must be between 1 and 256 characters long.
   *
   * For a FIFO (first-in-first-out) topic, the name must end with the `.fifo` suffix.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A map of attributes with their corresponding values.
   *
   * The following lists names, descriptions, and values of the special request parameters that the `CreateTopic` action uses:
   *
   * - `DeliveryPolicy` – The policy that defines how Amazon SNS retries failed deliveries to HTTP/S endpoints.
   * - `DisplayName` – The display name to use for a topic with SMS, `email`, and `email-json` subscriptions. For `email` and `email-json` subscriptions, the display name is used as the sender name for regular notification messages. Subscription confirmation and unsubscribe confirmation emails always use "Amazon Web Services Notifications" as the sender name.
   * - `MaximumMessageSize` – The maximum size, in bytes, of a message that can be published to the topic. Valid values are `1024` to `1048576` (1 MiB). The default is `262144` (256 KiB).
   *
   *   A topic with a `MaximumMessageSize` above 256 KiB must have 100 or fewer subscriptions, and each subscription must be an Amazon SQS, Amazon Data Firehose, or Lambda subscription.
   * - `Policy` – The policy that defines who can access your topic. By default, only the topic owner can publish or subscribe to the topic.
   * - `TracingConfig` – Tracing mode of an Amazon SNS topic. By default `TracingConfig` is set to `PassThrough`, and the topic passes through the tracing header it receives from an Amazon SNS publisher to its subscriptions. If set to `Active`, Amazon SNS will vend X-Ray segment data to topic owner account if the sampled flag in the tracing header is true. This is only supported on standard topics.
   * - HTTP
   *
   *   - `HTTPSuccessFeedbackRoleArn` – Indicates successful message delivery status for an Amazon SNS topic that is subscribed to an HTTP endpoint.
   *   - `HTTPSuccessFeedbackSampleRate` – Indicates percentage of successful messages to sample for an Amazon SNS topic that is subscribed to an HTTP endpoint.
   *   - `HTTPFailureFeedbackRoleArn` – Indicates failed message delivery status for an Amazon SNS topic that is subscribed to an HTTP endpoint.
   * - Amazon Data Firehose
   *
   *   - `FirehoseSuccessFeedbackRoleArn` – Indicates successful message delivery status for an Amazon SNS topic that is subscribed to an Amazon Data Firehose endpoint.
   *   - `FirehoseSuccessFeedbackSampleRate` – Indicates percentage of successful messages to sample for an Amazon SNS topic that is subscribed to an Amazon Data Firehose endpoint.
   *   - `FirehoseFailureFeedbackRoleArn` – Indicates failed message delivery status for an Amazon SNS topic that is subscribed to an Amazon Data Firehose endpoint.
   * - Lambda
   *
   *   - `LambdaSuccessFeedbackRoleArn` – Indicates successful message delivery status for an Amazon SNS topic that is subscribed to an Lambda endpoint.
   *   - `LambdaSuccessFeedbackSampleRate` – Indicates percentage of successful messages to sample for an Amazon SNS topic that is subscribed to an Lambda endpoint.
   *   - `LambdaFailureFeedbackRoleArn` – Indicates failed message delivery status for an Amazon SNS topic that is subscribed to an Lambda endpoint.
   * - Platform application endpoint
   *
   *   - `ApplicationSuccessFeedbackRoleArn` – Indicates successful message delivery status for an Amazon SNS topic that is subscribed to a platform application endpoint.
   *   - `ApplicationSuccessFeedbackSampleRate` – Indicates percentage of successful messages to sample for an Amazon SNS topic that is subscribed to an platform application endpoint.
   *   - `ApplicationFailureFeedbackRoleArn` – Indicates failed message delivery status for an Amazon SNS topic that is subscribed to an platform application endpoint.
   *
   *   > **Note:**
   *   >
   *   > In addition to being able to configure topic attributes for message delivery status of notification messages sent to Amazon SNS application endpoints, you can also configure application attributes for the delivery status of push notification messages sent to push notification services.
   *   >
   *   > For example, For more information, see [Using Amazon SNS Application Attributes for Message Delivery Status](https://docs.aws.amazon.com/sns/latest/dg/sns-msg-status.html).
   * - Amazon SQS
   *
   *   - `SQSSuccessFeedbackRoleArn` – Indicates successful message delivery status for an Amazon SNS topic that is subscribed to an Amazon SQS endpoint.
   *   - `SQSSuccessFeedbackSampleRate` – Indicates percentage of successful messages to sample for an Amazon SNS topic that is subscribed to an Amazon SQS endpoint.
   *   - `SQSFailureFeedbackRoleArn` – Indicates failed message delivery status for an Amazon SNS topic that is subscribed to an Amazon SQS endpoint.
   *
   * > **Note:** The <ENDPOINT>SuccessFeedbackRoleArn and <ENDPOINT>FailureFeedbackRoleArn attributes are used to give Amazon SNS write access to use CloudWatch Logs on your behalf. The <ENDPOINT>SuccessFeedbackSampleRate attribute is for specifying the sample rate percentage (0-100) of successfully delivered messages. After you configure the <ENDPOINT>FailureFeedbackRoleArn attribute, then all failed message deliveries generate CloudWatch Logs.
   *
   * The following attribute applies only to [server-side encryption](https://docs.aws.amazon.com/sns/latest/dg/sns-server-side-encryption.html):
   *
   * - `KmsMasterKeyId` – The ID of an Amazon Web Services managed customer master key (CMK) for Amazon SNS or a custom CMK. For more information, see [Key Terms](https://docs.aws.amazon.com/sns/latest/dg/sns-server-side-encryption.html#sse-key-terms). For more examples, see [KeyId](https://docs.aws.amazon.com/kms/latest/APIReference/API_DescribeKey.html#API_DescribeKey_RequestParameters) in the *Key Management Service API Reference*.
   *
   * The following attributes apply only to [FIFO topics](https://docs.aws.amazon.com/sns/latest/dg/sns-fifo-topics.html):
   *
   * - `ArchivePolicy` – The policy that sets the retention period for messages stored in the message archive of an Amazon SNS FIFO topic.
   * - `ContentBasedDeduplication` – Enables content-based deduplication for FIFO topics.
   *
   *   - By default, `ContentBasedDeduplication` is set to `false`. If you create a FIFO topic and this attribute is `false`, you must specify a value for the `MessageDeduplicationId` parameter for the [Publish](https://docs.aws.amazon.com/sns/latest/api/API_Publish.html) action.
   *   - When you set `ContentBasedDeduplication` to `true`, Amazon SNS uses a SHA-256 hash to generate the `MessageDeduplicationId` using the body of the message (but not the attributes of the message).
   *
   *     (Optional) To override the generated value, you can specify a value for the `MessageDeduplicationId` parameter for the `Publish` action.
   *
   * - `FifoThroughputScope` – Enables higher throughput for your FIFO topic by adjusting the scope of deduplication. This attribute has two possible values:
   *
   *   - `Topic` – The scope of message deduplication is across the entire topic. This is the default value and maintains existing behavior, with a maximum throughput of 3000 messages per second or 20MB per second, whichever comes first.
   *   - `MessageGroup` – The scope of deduplication is within each individual message group, which enables higher throughput per topic subject to regional quotas. For more information on quotas or to request an increase, see [Amazon SNS service quotas](https://docs.aws.amazon.com/general/latest/gr/sns.html) in the Amazon Web Services General Reference.
   *
   * @public
   */
  Attributes?: Record<string, string> | undefined;

  /**
   * The list of tags to add to a new topic.
   *
   * > **Note:** To be able to tag a topic on creation, you must have the `sns:CreateTopic` and `sns:TagResource` permissions.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * > **Important:** Amazon SNS message data protection is no longer available to new customers. For more information and guidance on alternatives, see [Amazon SNS message data protection availability change](https://docs.aws.amazon.com/sns/latest/dg/sns-message-data-protection-availability-change.html).
   *
   * The body of the policy document you want to use for this topic.
   *
   * You can only add one policy per topic.
   *
   * The policy must be in JSON string format.
   *
   * Length Constraints: Maximum length of 30,720.
   *
   * @public
   */
  DataProtectionPolicy?: string | undefined;
}

/**
 * Response from CreateTopic action.
 *
 * @public
 */
export interface CreateTopicResponse {
  /**
   * The Amazon Resource Name (ARN) assigned to the created topic.
   *
   * @public
   */
  TopicArn?: string | undefined;
}

/**
 * Input for `DeleteEndpoint` action.
 *
 * @public
 */
export interface DeleteEndpointInput {
  /**
   * `EndpointArn` of endpoint to delete.
   *
   * @public
   */
  EndpointArn: string | undefined;
}

/**
 * Input for `DeletePlatformApplication` action.
 *
 * @public
 */
export interface DeletePlatformApplicationInput {
  /**
   * `PlatformApplicationArn` of platform application object to delete.
   *
   * @public
   */
  PlatformApplicationArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteSMSSandboxPhoneNumberInput {
  /**
   * The destination phone number to delete.
   *
   * @public
   */
  PhoneNumber: string | undefined;
}

/**
 * @public
 */
export interface DeleteSMSSandboxPhoneNumberResult {}

/**
 * @public
 */
export interface DeleteTopicInput {
  /**
   * The ARN of the topic you want to delete.
   *
   * @public
   */
  TopicArn: string | undefined;
}

/**
 * @public
 */
export interface GetDataProtectionPolicyInput {
  /**
   * The ARN of the topic whose `DataProtectionPolicy` you want to get.
   *
   * For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the Amazon Web Services General Reference.
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface GetDataProtectionPolicyResponse {
  /**
   * Retrieves the `DataProtectionPolicy` in JSON string format.
   *
   * @public
   */
  DataProtectionPolicy?: string | undefined;
}

/**
 * Input for `GetEndpointAttributes` action.
 *
 * @public
 */
export interface GetEndpointAttributesInput {
  /**
   * `EndpointArn` for `GetEndpointAttributes` input.
   *
   * @public
   */
  EndpointArn: string | undefined;
}

/**
 * Response from `GetEndpointAttributes` of the `EndpointArn`.
 *
 * @public
 */
export interface GetEndpointAttributesResponse {
  /**
   * Attributes include the following:
   *
   * - `CustomUserData` – arbitrary user data to associate with the endpoint. Amazon SNS does not use this data. The data must be in UTF-8 format and less than 2KB.
   * - `Enabled` – flag that enables/disables delivery to the endpoint. Amazon SNS will set this to false when a notification service indicates to Amazon SNS that the endpoint is invalid. Users can set it back to true, typically after updating Token.
   * - `Token` – device token, also referred to as a registration id, for an app and mobile device. This is returned from the notification service when an app and mobile device are registered with the notification service.
   *
   *   > **Note:** The device token for the iOS platform is returned in lowercase.
   *
   * @public
   */
  Attributes?: Record<string, string> | undefined;
}

/**
 * Input for `GetPlatformApplicationAttributes` action.
 *
 * @public
 */
export interface GetPlatformApplicationAttributesInput {
  /**
   * `PlatformApplicationArn` for GetPlatformApplicationAttributesInput.
   *
   * @public
   */
  PlatformApplicationArn: string | undefined;
}

/**
 * Response for `GetPlatformApplicationAttributes` action.
 *
 * @public
 */
export interface GetPlatformApplicationAttributesResponse {
  /**
   * Attributes include the following:
   *
   * - `AppleCertificateExpiryDate` – The expiry date of the SSL certificate used to configure certificate-based authentication.
   * - `ApplePlatformTeamID` – The Apple developer account ID used to configure token-based authentication.
   * - `ApplePlatformBundleID` – The app identifier used to configure token-based authentication.
   * - `AuthenticationMethod` – Returns the credential type used when sending push notifications from application to APNS/APNS_Sandbox, or application to GCM.
   *
   *   - APNS – Returns the token or certificate.
   *   - GCM – Returns the token or key.
   * - `EventEndpointCreated` – Topic ARN to which EndpointCreated event notifications should be sent.
   * - `EventEndpointDeleted` – Topic ARN to which EndpointDeleted event notifications should be sent.
   * - `EventEndpointUpdated` – Topic ARN to which EndpointUpdate event notifications should be sent.
   * - `EventDeliveryFailure` – Topic ARN to which DeliveryFailure event notifications should be sent upon Direct Publish delivery failure (permanent) to one of the application's endpoints.
   *
   * @public
   */
  Attributes?: Record<string, string> | undefined;
}

/**
 * The input for the `GetSMSAttributes` request.
 *
 * @public
 */
export interface GetSMSAttributesInput {
  /**
   * A list of the individual attribute names, such as `MonthlySpendLimit`, for which you want values.
   *
   * For all attribute names, see [SetSMSAttributes](https://docs.aws.amazon.com/sns/latest/api/API_SetSMSAttributes.html).
   *
   * If you don't use this parameter, Amazon SNS returns all SMS attributes.
   *
   * @public
   */
  attributes?: string[] | undefined;
}

/**
 * The response from the `GetSMSAttributes` request.
 *
 * @public
 */
export interface GetSMSAttributesResponse {
  /**
   * The SMS attribute names and their values.
   *
   * @public
   */
  attributes?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetSMSSandboxAccountStatusInput {}

/**
 * @public
 */
export interface GetSMSSandboxAccountStatusResult {
  /**
   * Indicates whether the calling Amazon Web Services account is in the SMS sandbox.
   *
   * @public
   */
  IsInSandbox: boolean | undefined;
}

/**
 * Input for GetSubscriptionAttributes.
 *
 * @public
 */
export interface GetSubscriptionAttributesInput {
  /**
   * The ARN of the subscription whose properties you want to get.
   *
   * @public
   */
  SubscriptionArn: string | undefined;
}

/**
 * Response for GetSubscriptionAttributes action.
 *
 * @public
 */
export interface GetSubscriptionAttributesResponse {
  /**
   * A map of the subscription's attributes. Attributes in this map include the following:
   *
   * - `ConfirmationWasAuthenticated` – `true` if the subscription confirmation request was authenticated.
   * - `DeliveryPolicy` – The JSON serialization of the subscription's delivery policy.
   * - `EffectiveDeliveryPolicy` – The JSON serialization of the effective delivery policy that takes into account the topic delivery policy and account system defaults.
   * - `FilterPolicy` – The filter policy JSON that is assigned to the subscription. For more information, see [Amazon SNS Message Filtering](https://docs.aws.amazon.com/sns/latest/dg/sns-message-filtering.html) in the *Amazon SNS Developer Guide*.
   * - `FilterPolicyScope` – This attribute lets you choose the filtering scope by using one of the following string value types:
   *
   *   - `MessageAttributes` (default) – The filter is applied on the message attributes.
   *   - `MessageBody` – The filter is applied on the message body.
   * - `Owner` – The Amazon Web Services account ID of the subscription's owner.
   * - `PendingConfirmation` – `true` if the subscription hasn't been confirmed. To confirm a pending subscription, call the `ConfirmSubscription` action with a confirmation token.
   * - `RawMessageDelivery` – `true` if raw message delivery is enabled for the subscription. Raw messages are free of JSON formatting and can be sent to HTTP/S and Amazon SQS endpoints.
   * - `RedrivePolicy` – When specified, sends undeliverable messages to the specified Amazon SQS dead-letter queue. Messages that can't be delivered due to client errors (for example, when the subscribed endpoint is unreachable) or server errors (for example, when the service that powers the subscribed endpoint becomes unavailable) are held in the dead-letter queue for further analysis or reprocessing.
   * - `SubscriptionArn` – The subscription's ARN.
   * - `TopicArn` – The topic ARN that the subscription is associated with.
   *
   * The following attribute applies only to Amazon Data Firehose delivery stream subscriptions:
   *
   * - `SubscriptionRoleArn` – The ARN of the IAM role that has the following:
   *
   *   - Permission to write to the Firehose delivery stream
   *   - Amazon SNS listed as a trusted entity
   *
   *   Specifying a valid ARN for this attribute is required for Firehose delivery stream subscriptions. For more information, see [Fanout to Firehose delivery streams](https://docs.aws.amazon.com/sns/latest/dg/sns-firehose-as-subscriber.html) in the *Amazon SNS Developer Guide*.
   *
   * @public
   */
  Attributes?: Record<string, string> | undefined;
}

/**
 * Input for GetTopicAttributes action.
 *
 * @public
 */
export interface GetTopicAttributesInput {
  /**
   * The ARN of the topic whose properties you want to get.
   *
   * @public
   */
  TopicArn: string | undefined;
}

/**
 * Response for GetTopicAttributes action.
 *
 * @public
 */
export interface GetTopicAttributesResponse {
  /**
   * A map of the topic's attributes. Attributes in this map include the following:
   *
   * - `DeliveryPolicy` – The JSON serialization of the topic's delivery policy.
   * - `DisplayName` – The human-readable name used in the `From` field for notifications to `email` and `email-json` endpoints. For subscription confirmation and unsubscribe confirmation emails, the sender name is always "Amazon Web Services Notifications" regardless of this attribute.
   * - `EffectiveDeliveryPolicy` – The JSON serialization of the effective delivery policy, taking system defaults into account.
   * - `MaximumMessageSize` – The maximum size, in bytes, of a message that can be published to the topic. Amazon SNS returns this attribute only if you explicitly set it. If Amazon SNS doesn't return it, the topic uses the default of `262144` (256 KiB).
   * - `Owner` – The Amazon Web Services account ID of the topic's owner.
   * - `Policy` – The JSON serialization of the topic's access control policy.
   * - `SignatureVersion` – The signature version corresponds to the hashing algorithm used while creating the signature of the notifications, subscription confirmations, or unsubscribe confirmation messages sent by Amazon SNS.
   *
   *   - By default, `SignatureVersion` is set to **1**. The signature is a Base64-encoded **SHA1withRSA** signature.
   *   - When you set `SignatureVersion` to **2**. Amazon SNS uses a Base64-encoded **SHA256withRSA** signature.
   *
   *     > **Note:** If the API response does not include the `SignatureVersion` attribute, it means that the `SignatureVersion` for the topic has value **1**.
   * - `SubscriptionsConfirmed` – The number of confirmed subscriptions for the topic.
   * - `SubscriptionsDeleted` – The number of deleted subscriptions for the topic.
   * - `SubscriptionsPending` – The number of subscriptions pending confirmation for the topic.
   * - `TopicArn` – The topic's ARN.
   * - `TracingConfig` – Tracing mode of an Amazon SNS topic. By default `TracingConfig` is set to `PassThrough`, and the topic passes through the tracing header it receives from an Amazon SNS publisher to its subscriptions. If set to `Active`, Amazon SNS will vend X-Ray segment data to topic owner account if the sampled flag in the tracing header is true. This is only supported on standard topics.
   *
   * The following attribute applies only to [server-side-encryption](https://docs.aws.amazon.com/sns/latest/dg/sns-server-side-encryption.html):
   *
   * - `KmsMasterKeyId` - The ID of an Amazon Web Services managed customer master key (CMK) for Amazon SNS or a custom CMK. For more information, see [Key Terms](https://docs.aws.amazon.com/sns/latest/dg/sns-server-side-encryption.html#sse-key-terms). For more examples, see [KeyId](https://docs.aws.amazon.com/kms/latest/APIReference/API_DescribeKey.html#API_DescribeKey_RequestParameters) in the *Key Management Service API Reference*.
   *
   * The following attributes apply only to [FIFO topics](https://docs.aws.amazon.com/sns/latest/dg/sns-fifo-topics.html):
   *
   * - `ArchivePolicy` – The policy that sets the retention period for messages stored in the message archive of an Amazon SNS FIFO topic.
   * - `BeginningArchiveTime` – The earliest starting point at which a message in the topic’s archive can be replayed from. This point in time is based on the configured message retention period set by the topic’s message archiving policy.
   * - `ContentBasedDeduplication` – Enables content-based deduplication for FIFO topics.
   *
   *   - By default, `ContentBasedDeduplication` is set to `false`. If you create a FIFO topic and this attribute is `false`, you must specify a value for the `MessageDeduplicationId` parameter for the [Publish](https://docs.aws.amazon.com/sns/latest/api/API_Publish.html) action.
   *   - When you set `ContentBasedDeduplication` to `true`, Amazon SNS uses a SHA-256 hash to generate the `MessageDeduplicationId` using the body of the message (but not the attributes of the message).
   *
   *     (Optional) To override the generated value, you can specify a value for the `MessageDeduplicationId` parameter for the `Publish` action.
   * - `FifoTopic` – When this is set to `true`, a FIFO topic is created.
   *
   * @public
   */
  Attributes?: Record<string, string> | undefined;
}

/**
 * Input for `ListEndpointsByPlatformApplication` action.
 *
 * @public
 */
export interface ListEndpointsByPlatformApplicationInput {
  /**
   * `PlatformApplicationArn` for `ListEndpointsByPlatformApplicationInput` action.
   *
   * @public
   */
  PlatformApplicationArn: string | undefined;

  /**
   * `NextToken` string is used when calling `ListEndpointsByPlatformApplication` action to retrieve additional records that are available after the first page results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * The endpoint for mobile app and device.
 *
 * @public
 */
export interface Endpoint {
  /**
   * The `EndpointArn` for mobile app and device.
   *
   * @public
   */
  EndpointArn?: string | undefined;

  /**
   * Attributes for endpoint.
   *
   * @public
   */
  Attributes?: Record<string, string> | undefined;
}

/**
 * Response for `ListEndpointsByPlatformApplication` action.
 *
 * @public
 */
export interface ListEndpointsByPlatformApplicationResponse {
  /**
   * Endpoints returned for `ListEndpointsByPlatformApplication` action.
   *
   * @public
   */
  Endpoints?: Endpoint[] | undefined;

  /**
   * `NextToken` string is returned when calling `ListEndpointsByPlatformApplication` action if additional records are available after the first page results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListOriginationNumbersRequest {
  /**
   * Token that the previous `ListOriginationNumbers` request returns.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of origination numbers to return.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * A list of phone numbers and their metadata.
 *
 * @public
 */
export interface PhoneNumberInformation {
  /**
   * The date and time when the phone number was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The phone number.
   *
   * @public
   */
  PhoneNumber?: string | undefined;

  /**
   * The status of the phone number.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * The two-character code for the country or region, in ISO 3166-1 alpha-2 format.
   *
   * @public
   */
  Iso2CountryCode?: string | undefined;

  /**
   * The list of supported routes.
   *
   * @public
   */
  RouteType?: RouteType | undefined;

  /**
   * The capabilities of each phone number.
   *
   * @public
   */
  NumberCapabilities?: NumberCapability[] | undefined;
}

/**
 * @public
 */
export interface ListOriginationNumbersResult {
  /**
   * A `NextToken` string is returned when you call the `ListOriginationNumbers` operation if additional pages of records are available.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A list of the calling account's verified and pending origination numbers.
   *
   * @public
   */
  PhoneNumbers?: PhoneNumberInformation[] | undefined;
}

/**
 * The input for the `ListPhoneNumbersOptedOut` action.
 *
 * @public
 */
export interface ListPhoneNumbersOptedOutInput {
  /**
   * A `NextToken` string is used when you call the `ListPhoneNumbersOptedOut` action to retrieve additional records that are available after the first page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * The response from the `ListPhoneNumbersOptedOut` action.
 *
 * @public
 */
export interface ListPhoneNumbersOptedOutResponse {
  /**
   * A list of phone numbers that are opted out of receiving SMS messages. The list is paginated, and each page can contain up to 100 phone numbers.
   *
   * @public
   */
  phoneNumbers?: string[] | undefined;

  /**
   * A `NextToken` string is returned when you call the `ListPhoneNumbersOptedOut` action if additional records are available after the first page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Input for `ListPlatformApplications` action.
 *
 * @public
 */
export interface ListPlatformApplicationsInput {
  /**
   * `NextToken` string is used when calling `ListPlatformApplications` action to retrieve additional records that are available after the first page results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Platform application object.
 *
 * @public
 */
export interface PlatformApplication {
  /**
   * PlatformApplicationArn for platform application object.
   *
   * @public
   */
  PlatformApplicationArn?: string | undefined;

  /**
   * Attributes for platform application object.
   *
   * @public
   */
  Attributes?: Record<string, string> | undefined;
}

/**
 * Response for `ListPlatformApplications` action.
 *
 * @public
 */
export interface ListPlatformApplicationsResponse {
  /**
   * Platform applications returned when calling `ListPlatformApplications` action.
   *
   * @public
   */
  PlatformApplications?: PlatformApplication[] | undefined;

  /**
   * `NextToken` string is returned when calling `ListPlatformApplications` action if additional records are available after the first page results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSMSSandboxPhoneNumbersInput {
  /**
   * Token that the previous `ListSMSSandboxPhoneNumbersInput` request returns.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of phone numbers to return.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * A verified or pending destination phone number in the SMS sandbox.
 *
 * When you start using Amazon SNS to send SMS messages, your Amazon Web Services account is in the *SMS sandbox*. The SMS sandbox provides a safe environment for you to try Amazon SNS features without risking your reputation as an SMS sender. While your Amazon Web Services account is in the SMS sandbox, you can use all of the features of Amazon SNS. However, you can send SMS messages only to verified destination phone numbers. For more information, including how to move out of the sandbox to send messages without restrictions, see [SMS sandbox](https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html) in the *Amazon SNS Developer Guide*.
 *
 * @public
 */
export interface SMSSandboxPhoneNumber {
  /**
   * The destination phone number.
   *
   * @public
   */
  PhoneNumber?: string | undefined;

  /**
   * The destination phone number's verification status.
   *
   * @public
   */
  Status?: SMSSandboxPhoneNumberVerificationStatus | undefined;
}

/**
 * @public
 */
export interface ListSMSSandboxPhoneNumbersResult {
  /**
   * A list of the calling account's pending and verified phone numbers.
   *
   * @public
   */
  PhoneNumbers: SMSSandboxPhoneNumber[] | undefined;

  /**
   * A `NextToken` string is returned when you call the `ListSMSSandboxPhoneNumbersInput` operation if additional pages of records are available.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Input for ListSubscriptions action.
 *
 * @public
 */
export interface ListSubscriptionsInput {
  /**
   * Token returned by the previous `ListSubscriptions` request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A wrapper type for the attributes of an Amazon SNS subscription.
 *
 * @public
 */
export interface Subscription {
  /**
   * The subscription's ARN.
   *
   * @public
   */
  SubscriptionArn?: string | undefined;

  /**
   * The subscription's owner.
   *
   * @public
   */
  Owner?: string | undefined;

  /**
   * The subscription's protocol.
   *
   * @public
   */
  Protocol?: string | undefined;

  /**
   * The subscription's endpoint (format depends on the protocol).
   *
   * @public
   */
  Endpoint?: string | undefined;

  /**
   * The ARN of the subscription's topic.
   *
   * @public
   */
  TopicArn?: string | undefined;
}

/**
 * Response for ListSubscriptions action
 *
 * @public
 */
export interface ListSubscriptionsResponse {
  /**
   * A list of subscriptions.
   *
   * @public
   */
  Subscriptions?: Subscription[] | undefined;

  /**
   * Token to pass along to the next `ListSubscriptions` request. This element is returned if there are more subscriptions to retrieve.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Input for ListSubscriptionsByTopic action.
 *
 * @public
 */
export interface ListSubscriptionsByTopicInput {
  /**
   * The ARN of the topic for which you wish to find subscriptions.
   *
   * @public
   */
  TopicArn: string | undefined;

  /**
   * Token returned by the previous `ListSubscriptionsByTopic` request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Response for ListSubscriptionsByTopic action.
 *
 * @public
 */
export interface ListSubscriptionsByTopicResponse {
  /**
   * A list of subscriptions.
   *
   * @public
   */
  Subscriptions?: Subscription[] | undefined;

  /**
   * Token to pass along to the next `ListSubscriptionsByTopic` request. This element is returned if there are more subscriptions to retrieve.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The ARN of the topic for which to list tags.
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * The tags associated with the specified topic.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface ListTopicsInput {
  /**
   * Token returned by the previous `ListTopics` request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A wrapper type for the topic's Amazon Resource Name (ARN). To retrieve a topic's attributes, use `GetTopicAttributes`.
 *
 * @public
 */
export interface Topic {
  /**
   * The topic's ARN.
   *
   * @public
   */
  TopicArn?: string | undefined;
}

/**
 * Response for ListTopics action.
 *
 * @public
 */
export interface ListTopicsResponse {
  /**
   * A list of topic ARNs.
   *
   * @public
   */
  Topics?: Topic[] | undefined;

  /**
   * Token to pass along to the next `ListTopics` request. This element is returned if there are additional topics to retrieve.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Input for the OptInPhoneNumber action.
 *
 * @public
 */
export interface OptInPhoneNumberInput {
  /**
   * The phone number to opt in. Use E.164 format.
   *
   * @public
   */
  phoneNumber: string | undefined;
}

/**
 * The response for the OptInPhoneNumber action.
 *
 * @public
 */
export interface OptInPhoneNumberResponse {}

/**
 * The user-specified message attribute value. For string data types, the value attribute has the same restrictions on the content as the message body. For more information, see [Publish](https://docs.aws.amazon.com/sns/latest/api/API_Publish.html).
 *
 * Name, type, and value must not be empty or null. In addition, the message body should not be empty or null. All parts of the message attribute, including name, type, and value, are included in the message size restriction, which is 256 KiB (262,144 bytes) by default and is determined by the topic's `MaximumMessageSize` attribute. For more information, see [Large message payloads](https://docs.aws.amazon.com/sns/latest/dg/large-message-payloads.html), [Amazon SNS message attributes](https://docs.aws.amazon.com/sns/latest/dg/SNSMessageAttributes.html) and [Publishing to a mobile phone](https://docs.aws.amazon.com/sns/latest/dg/sms_publish-to-phone.html) in the *Amazon SNS Developer Guide.*
 *
 * @public
 */
export interface MessageAttributeValue {
  /**
   * Amazon SNS supports the following logical data types: String, String.Array, Number, and Binary. For more information, see [Message Attribute Data Types](https://docs.aws.amazon.com/sns/latest/dg/SNSMessageAttributes.html#SNSMessageAttributes.DataTypes).
   *
   * @public
   */
  DataType: string | undefined;

  /**
   * Strings are Unicode with UTF8 binary encoding. For a list of code values, see [ASCII Printable Characters](https://en.wikipedia.org/wiki/ASCII#ASCII_printable_characters).
   *
   * @public
   */
  StringValue?: string | undefined;

  /**
   * Binary type attributes can store any binary data, for example, compressed data, encrypted data, or images.
   *
   * @public
   */
  BinaryValue?: Uint8Array | undefined;
}

/**
 * Input for Publish action.
 *
 * @public
 */
export interface PublishInput {
  /**
   * The topic you want to publish to.
   *
   * If you don't specify a value for the `TopicArn` parameter, you must specify a value for the `PhoneNumber` or `TargetArn` parameters.
   *
   * @public
   */
  TopicArn?: string | undefined;

  /**
   * If you don't specify a value for the `TargetArn` parameter, you must specify a value for the `PhoneNumber` or `TopicArn` parameters.
   *
   * @public
   */
  TargetArn?: string | undefined;

  /**
   * The phone number to which you want to deliver an SMS message. Use E.164 format.
   *
   * If you don't specify a value for the `PhoneNumber` parameter, you must specify a value for the `TargetArn` or `TopicArn` parameters.
   *
   * @public
   */
  PhoneNumber?: string | undefined;

  /**
   * The message you want to send.
   *
   * If you are publishing to a topic and you want to send the same message to all transport protocols, include the text of the message as a String value. If you want to send different messages for each transport protocol, set the value of the `MessageStructure` parameter to `json` and use a JSON object for the `Message` parameter.
   *
   * Constraints:
   *
   * - With the exception of SMS, messages must be UTF-8 encoded strings. By default, a message can be at most 256 KiB in size (262,144 bytes, not 262,144 characters).
   *
   *   When you publish to a topic, the maximum size is determined by the topic's `MaximumMessageSize` attribute, which supports values up to 1 MiB (1,048,576 bytes). Amazon SNS validates the combined size of the message body and message attributes against this value and returns an `InvalidParameter` error if the limit is exceeded.
   *
   *   For more information, see [Large message payloads](https://docs.aws.amazon.com/sns/latest/dg/large-message-payloads.html) in the *Amazon SNS Developer Guide.*
   * - For SMS, each message can contain up to 140 characters. This character limit depends on the encoding schema. For example, an SMS message can contain 160 GSM characters, 140 ASCII characters, or 70 UCS-2 characters.
   *
   *   If you publish a message that exceeds this size limit, Amazon SNS sends the message as multiple messages, each fitting within the size limit. Messages aren't truncated mid-word but are cut off at whole-word boundaries.
   *
   *   The total size limit for a single SMS `Publish` action is 1,600 characters.
   *
   * JSON-specific constraints:
   *
   * - Keys in the JSON object that correspond to supported transport protocols must have simple JSON string values.
   * - The values will be parsed (unescaped) before they are used in outgoing messages.
   * - Outbound notifications are JSON encoded (meaning that the characters will be reescaped for sending).
   * - Values have a minimum length of 0 (the empty string, "", is allowed).
   * - Values have a maximum length bounded by the overall message size (so, including multiple protocols may limit message sizes).
   * - Non-string values will cause the key to be ignored.
   * - Keys that do not correspond to supported transport protocols are ignored.
   * - Duplicate keys are not allowed.
   * - Failure to parse or validate any key or value in the message will cause the `Publish` call to return an error (no partial delivery).
   *
   * @public
   */
  Message: string | undefined;

  /**
   * Optional parameter to be used as the "Subject" line when the message is delivered to email endpoints. This field will also be included, if present, in the standard JSON messages delivered to other endpoints.
   *
   * Constraints: Subjects must be UTF-8 text with no line breaks or control characters, and less than 100 characters long.
   *
   * @public
   */
  Subject?: string | undefined;

  /**
   * Set `MessageStructure` to `json` if you want to send a different message for each protocol. For example, using one publish action, you can send a short message to your SMS subscribers and a longer message to your email subscribers. If you set `MessageStructure` to `json`, the value of the `Message` parameter must:
   *
   * - be a syntactically valid JSON object; and
   * - contain at least a top-level JSON key of "default" with a value that is a string.
   *
   * You can define other top-level keys that define the message you want to send to a specific transport protocol (e.g., "http").
   *
   * Valid value: `json`
   *
   * @public
   */
  MessageStructure?: string | undefined;

  /**
   * Message attributes for Publish action.
   *
   * @public
   */
  MessageAttributes?: Record<string, MessageAttributeValue> | undefined;

  /**
   * - This parameter applies only to FIFO (first-in-first-out) topics. The `MessageDeduplicationId` can contain up to 128 alphanumeric characters `(a-z, A-Z, 0-9)` and punctuation ``(!"#$%&'()*+,-./:;<=>?@[\]^_`\{|\}~)``.
   * - Every message must have a unique `MessageDeduplicationId`, which is a token used for deduplication of sent messages within the 5 minute minimum deduplication interval.
   * - The scope of deduplication depends on the `FifoThroughputScope` attribute, when set to `Topic` the message deduplication scope is across the entire topic, when set to `MessageGroup` the message deduplication scope is within each individual message group.
   * - If a message with a particular `MessageDeduplicationId` is sent successfully, subsequent messages within the deduplication scope and interval, with the same `MessageDeduplicationId`, are accepted successfully but aren't delivered.
   * - Every message must have a unique `MessageDeduplicationId`:
   *
   *   - You may provide a `MessageDeduplicationId` explicitly.
   *   - If you aren't able to provide a `MessageDeduplicationId` and you enable `ContentBasedDeduplication` for your topic, Amazon SNS uses a SHA-256 hash to generate the `MessageDeduplicationId` using the body of the message (but not the attributes of the message).
   *   - If you don't provide a `MessageDeduplicationId` and the topic doesn't have `ContentBasedDeduplication` set, the action fails with an error.
   *   - If the topic has a `ContentBasedDeduplication` set, your `MessageDeduplicationId` overrides the generated one.
   * - When `ContentBasedDeduplication` is in effect, messages with identical content sent within the deduplication scope and interval are treated as duplicates and only one copy of the message is delivered.
   * - If you send one message with `ContentBasedDeduplication` enabled, and then another message with a `MessageDeduplicationId` that is the same as the one generated for the first `MessageDeduplicationId`, the two messages are treated as duplicates, within the deduplication scope and interval, and only one copy of the message is delivered.
   *
   * @public
   */
  MessageDeduplicationId?: string | undefined;

  /**
   * The `MessageGroupId` can contain up to 128 alphanumeric characters `(a-z, A-Z, 0-9)` and punctuation ``(!"#$%&'()*+,-./:;<=>?@[\]^_`\{|\}~)``.
   *
   * For FIFO topics: The `MessageGroupId` is a tag that specifies that a message belongs to a specific message group. Messages that belong to the same message group are processed in a FIFO manner (however, messages in different message groups might be processed out of order). Every message must include a `MessageGroupId`.
   *
   * For standard topics: The `MessageGroupId` is optional and is forwarded only to Amazon SQS standard subscriptions to activate [fair queues](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-fair-queues.html). The `MessageGroupId` is not used for, or sent to, any other endpoint types. When provided, the same validation rules apply as for FIFO topics.
   *
   * @public
   */
  MessageGroupId?: string | undefined;
}

/**
 * Response for Publish action.
 *
 * @public
 */
export interface PublishResponse {
  /**
   * Unique identifier assigned to the published message.
   *
   * Length Constraint: Maximum 100 characters
   *
   * @public
   */
  MessageId?: string | undefined;

  /**
   * This response element applies only to FIFO (first-in-first-out) topics.
   *
   * The sequence number is a large, non-consecutive number that Amazon SNS assigns to each message. The length of `SequenceNumber` is 128 bits. `SequenceNumber` continues to increase for each `MessageGroupId`.
   *
   * @public
   */
  SequenceNumber?: string | undefined;
}

/**
 * Contains the details of a single Amazon SNS message along with an `Id` that identifies a message within the batch.
 *
 * @public
 */
export interface PublishBatchRequestEntry {
  /**
   * An identifier for the message in this batch.
   *
   * > **Note:**
   * >
   * > The `Ids` of a batch request must be unique within a request.
   * >
   * > This identifier can have up to 80 characters. The following characters are accepted: alphanumeric characters, hyphens(-), and underscores (_).
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The body of the message.
   *
   * @public
   */
  Message: string | undefined;

  /**
   * The subject of the batch message.
   *
   * @public
   */
  Subject?: string | undefined;

  /**
   * Set `MessageStructure` to `json` if you want to send a different message for each protocol. For example, using one publish action, you can send a short message to your SMS subscribers and a longer message to your email subscribers. If you set `MessageStructure` to `json`, the value of the `Message` parameter must:
   *
   * - be a syntactically valid JSON object; and
   * - contain at least a top-level JSON key of "default" with a value that is a string.
   *
   * You can define other top-level keys that define the message you want to send to a specific transport protocol (for example, http).
   *
   * @public
   */
  MessageStructure?: string | undefined;

  /**
   * Each message attribute consists of a `Name`, `Type`, and `Value`. For more information, see [Amazon SNS message attributes](https://docs.aws.amazon.com/sns/latest/dg/sns-message-attributes.html) in the Amazon SNS Developer Guide.
   *
   * @public
   */
  MessageAttributes?: Record<string, MessageAttributeValue> | undefined;

  /**
   * This parameter applies only to FIFO (first-in-first-out) topics.
   *
   * - This parameter applies only to FIFO (first-in-first-out) topics. The `MessageDeduplicationId` can contain up to 128 alphanumeric characters `(a-z, A-Z, 0-9)` and punctuation ``(!"#$%&'()*+,-./:;<=>?@[\]^_`\{|\}~)``.
   * - Every message must have a unique `MessageDeduplicationId`, which is a token used for deduplication of sent messages within the 5 minute minimum deduplication interval.
   * - The scope of deduplication depends on the `FifoThroughputScope` attribute, when set to `Topic` the message deduplication scope is across the entire topic, when set to `MessageGroup` the message deduplication scope is within each individual message group.
   * - If a message with a particular `MessageDeduplicationId` is sent successfully, subsequent messages within the deduplication scope and interval, with the same `MessageDeduplicationId`, are accepted successfully but aren't delivered.
   * - Every message must have a unique `MessageDeduplicationId`.
   *
   *   - You may provide a `MessageDeduplicationId` explicitly.
   *   - If you aren't able to provide a `MessageDeduplicationId` and you enable `ContentBasedDeduplication` for your topic, Amazon SNS uses a SHA-256 hash to generate the `MessageDeduplicationId` using the body of the message (but not the attributes of the message).
   *   - If you don't provide a `MessageDeduplicationId` and the topic doesn't have `ContentBasedDeduplication` set, the action fails with an error.
   *   - If the topic has a `ContentBasedDeduplication` set, your `MessageDeduplicationId` overrides the generated one.
   * - When `ContentBasedDeduplication` is in effect, messages with identical content sent within the deduplication scope and interval are treated as duplicates and only one copy of the message is delivered.
   * - If you send one message with `ContentBasedDeduplication` enabled, and then another message with a `MessageDeduplicationId` that is the same as the one generated for the first `MessageDeduplicationId`, the two messages are treated as duplicates, within the deduplication scope and interval, and only one copy of the message is delivered.
   *
   * > **Note:**
   * >
   * > The `MessageDeduplicationId` is available to the consumer of the message (this can be useful for troubleshooting delivery issues).
   * >
   * > If a message is sent successfully but the acknowledgement is lost and the message is resent with the same `MessageDeduplicationId` after the deduplication interval, Amazon SNS can't detect duplicate messages.
   * >
   * > Amazon SNS continues to keep track of the message deduplication ID even after the message is received and deleted.
   *
   * @public
   */
  MessageDeduplicationId?: string | undefined;

  /**
   * FIFO topics: The tag that specifies that a message belongs to a specific message group. Messages that belong to the same message group are processed in a FIFO manner (however, messages in different message groups might be processed out of order). To interleave multiple ordered streams within a single topic, use `MessageGroupId` values (for example, session data for multiple users). In this scenario, multiple consumers can process the topic, but the session data of each user is processed in a FIFO fashion. You must associate a non-empty `MessageGroupId` with a message. If you do not provide a `MessageGroupId`, the action fails.
   *
   * Standard topics: The `MessageGroupId` is optional and is forwarded only to Amazon SQS standard subscriptions to activate [fair queues](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-fair-queues.html). The `MessageGroupId` is not used for, or sent to, any other endpoint types.
   *
   * The length of `MessageGroupId` is 128 characters.
   *
   * `MessageGroupId` can contain alphanumeric characters `(a-z, A-Z, 0-9)` and punctuation ``(!"#$%&'()*+,-./:;<=>?@[\]^_`\{|\}~)``.
   *
   * @public
   */
  MessageGroupId?: string | undefined;
}

/**
 * @public
 */
export interface PublishBatchInput {
  /**
   * The Amazon resource name (ARN) of the topic you want to batch publish to.
   *
   * @public
   */
  TopicArn: string | undefined;

  /**
   * A list of `PublishBatch` request entries to be sent to the SNS topic.
   *
   * @public
   */
  PublishBatchRequestEntries: PublishBatchRequestEntry[] | undefined;
}

/**
 * Gives a detailed description of failed messages in the batch.
 *
 * @public
 */
export interface BatchResultErrorEntry {
  /**
   * The `Id` of an entry in a batch request
   *
   * @public
   */
  Id: string | undefined;

  /**
   * An error code representing why the action failed on this entry.
   *
   * @public
   */
  Code: string | undefined;

  /**
   * A message explaining why the action failed on this entry.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * Specifies whether the error happened due to the caller of the batch API action.
   *
   * @public
   */
  SenderFault: boolean | undefined;
}

/**
 * Encloses data related to a successful message in a batch request for topic.
 *
 * @public
 */
export interface PublishBatchResultEntry {
  /**
   * The `Id` of an entry in a batch request.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * An identifier for the message.
   *
   * @public
   */
  MessageId?: string | undefined;

  /**
   * This parameter applies only to FIFO (first-in-first-out) topics.
   *
   * The large, non-consecutive number that Amazon SNS assigns to each message.
   *
   * The length of `SequenceNumber` is 128 bits. `SequenceNumber` continues to increase for a particular `MessageGroupId`.
   *
   * @public
   */
  SequenceNumber?: string | undefined;
}

/**
 * @public
 */
export interface PublishBatchResponse {
  /**
   * A list of successful `PublishBatch` responses.
   *
   * @public
   */
  Successful?: PublishBatchResultEntry[] | undefined;

  /**
   * A list of failed `PublishBatch` responses.
   *
   * @public
   */
  Failed?: BatchResultErrorEntry[] | undefined;
}

/**
 * @public
 */
export interface PutDataProtectionPolicyInput {
  /**
   * The ARN of the topic whose `DataProtectionPolicy` you want to add or update.
   *
   * For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the Amazon Web Services General Reference.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The JSON serialization of the topic's `DataProtectionPolicy`.
   *
   * The `DataProtectionPolicy` must be in JSON string format.
   *
   * Length Constraints: Maximum length of 30,720.
   *
   * @public
   */
  DataProtectionPolicy: string | undefined;
}

/**
 * Input for RemovePermission action.
 *
 * @public
 */
export interface RemovePermissionInput {
  /**
   * The ARN of the topic whose access control policy you wish to modify.
   *
   * @public
   */
  TopicArn: string | undefined;

  /**
   * The unique label of the statement you want to remove.
   *
   * @public
   */
  Label: string | undefined;
}

/**
 * Input for `SetEndpointAttributes` action.
 *
 * @public
 */
export interface SetEndpointAttributesInput {
  /**
   * EndpointArn used for `SetEndpointAttributes` action.
   *
   * @public
   */
  EndpointArn: string | undefined;

  /**
   * A map of the endpoint attributes. Attributes in this map include the following:
   *
   * - `CustomUserData` – arbitrary user data to associate with the endpoint. Amazon SNS does not use this data. The data must be in UTF-8 format and less than 2KB.
   * - `Enabled` – flag that enables/disables delivery to the endpoint. Amazon SNS will set this to false when a notification service indicates to Amazon SNS that the endpoint is invalid. Users can set it back to true, typically after updating Token.
   * - `Token` – device token, also referred to as a registration id, for an app and mobile device. This is returned from the notification service when an app and mobile device are registered with the notification service.
   *
   * @public
   */
  Attributes: Record<string, string> | undefined;
}

/**
 * Input for `SetPlatformApplicationAttributes` action.
 *
 * @public
 */
export interface SetPlatformApplicationAttributesInput {
  /**
   * `PlatformApplicationArn` for `SetPlatformApplicationAttributes` action.
   *
   * @public
   */
  PlatformApplicationArn: string | undefined;

  /**
   * A map of the platform application attributes. Attributes in this map include the following:
   *
   * - `PlatformCredential` – The credential received from the notification service.
   *
   *   - For ADM, `PlatformCredential`is client secret.
   *   - For Apple Services using certificate credentials, `PlatformCredential` is private key.
   *   - For Apple Services using token credentials, `PlatformCredential` is signing key.
   *   - For GCM (Firebase Cloud Messaging) using key credentials, there is no `PlatformPrincipal`. The `PlatformCredential` is `API key`.
   *   - For GCM (Firebase Cloud Messaging) using token credentials, there is no `PlatformPrincipal`. The `PlatformCredential` is a JSON formatted private key file. When using the Amazon Web Services CLI, the file must be in string format and special characters must be ignored. To format the file correctly, Amazon SNS recommends using the following command: `` SERVICE_JSON=`jq @json <<< cat service.json` ``.
   *
   * - `PlatformPrincipal` – The principal received from the notification service.
   *
   *   - For ADM, `PlatformPrincipal`is client id.
   *   - For Apple Services using certificate credentials, `PlatformPrincipal` is SSL certificate.
   *   - For Apple Services using token credentials, `PlatformPrincipal` is signing key ID.
   *   - For GCM (Firebase Cloud Messaging), there is no `PlatformPrincipal`.
   *
   * - `EventEndpointCreated` – Topic ARN to which `EndpointCreated` event notifications are sent.
   * - `EventEndpointDeleted` – Topic ARN to which `EndpointDeleted` event notifications are sent.
   * - `EventEndpointUpdated` – Topic ARN to which `EndpointUpdate` event notifications are sent.
   * - `EventDeliveryFailure` – Topic ARN to which `DeliveryFailure` event notifications are sent upon Direct Publish delivery failure (permanent) to one of the application's endpoints.
   * - `SuccessFeedbackRoleArn` – IAM role ARN used to give Amazon SNS write access to use CloudWatch Logs on your behalf.
   * - `FailureFeedbackRoleArn` – IAM role ARN used to give Amazon SNS write access to use CloudWatch Logs on your behalf.
   * - `SuccessFeedbackSampleRate` – Sample rate percentage (0-100) of successfully delivered messages.
   *
   * The following attributes only apply to `APNs` token-based authentication:
   *
   * - `ApplePlatformTeamID` – The identifier that's assigned to your Apple developer account team.
   * - `ApplePlatformBundleID` – The bundle identifier that's assigned to your iOS app.
   *
   * @public
   */
  Attributes: Record<string, string> | undefined;
}

/**
 * The input for the SetSMSAttributes action.
 *
 * @public
 */
export interface SetSMSAttributesInput {
  /**
   * The default settings for sending SMS messages from your Amazon Web Services account. You can set values for the following attribute names:
   *
   * `MonthlySpendLimit` – The maximum amount in USD that you are willing to spend each month to send SMS messages. When Amazon SNS determines that sending an SMS message would incur a cost that exceeds this limit, it stops sending SMS messages within minutes.
   *
   * > **Important:** Amazon SNS stops sending SMS messages within minutes of the limit being crossed. During that interval, if you continue to send SMS messages, you will incur costs that exceed your limit.
   *
   * By default, the spend limit is set to the maximum allowed by Amazon SNS. If you want to raise the limit, submit an [SNS Limit Increase case](https://console.aws.amazon.com/support/home#/case/create?issueType=service-limit-increase&limitType=service-code-sns). For **New limit value**, enter your desired monthly spend limit. In the **Use Case Description** field, explain that you are requesting an SMS monthly spend limit increase.
   *
   * `DeliveryStatusIAMRole` – The ARN of the IAM role that allows Amazon SNS to write logs about SMS deliveries in CloudWatch Logs. For each SMS message that you send, Amazon SNS writes a log that includes the message price, the success or failure status, the reason for failure (if the message failed), the message dwell time, and other information.
   *
   * `DeliveryStatusSuccessSamplingRate` – The percentage of successful SMS deliveries for which Amazon SNS will write logs in CloudWatch Logs. The value can be an integer from 0 - 100. For example, to write logs only for failed deliveries, set this value to `0`. To write logs for 10% of your successful deliveries, set it to `10`.
   *
   * `DefaultSenderID` – A string, such as your business brand, that is displayed as the sender on the receiving device. Support for sender IDs varies by country. The sender ID can be 1 - 11 alphanumeric characters, and it must contain at least one letter.
   *
   * `DefaultSMSType` – The type of SMS message that you will send by default. You can assign the following values:
   *
   * - `Promotional` – (Default) Noncritical messages, such as marketing messages. Amazon SNS optimizes the message delivery to incur the lowest cost.
   * - `Transactional` – Critical messages that support customer transactions, such as one-time passcodes for multi-factor authentication. Amazon SNS optimizes the message delivery to achieve the highest reliability.
   *
   * `UsageReportS3Bucket` – The name of the Amazon S3 bucket to receive daily SMS usage reports from Amazon SNS. Each day, Amazon SNS will deliver a usage report as a CSV file to the bucket. The report includes the following information for each SMS message that was successfully delivered by your Amazon Web Services account:
   *
   * - Time that the message was published (in UTC)
   * - Message ID
   * - Destination phone number
   * - Message type
   * - Delivery status
   * - Message price (in USD)
   * - Part number (a message is split into multiple parts if it is too long for a single message)
   * - Total number of parts
   *
   * To receive the report, the bucket must have a policy that allows the Amazon SNS service principal to perform the `s3:PutObject` and `s3:GetBucketLocation` actions.
   *
   * For an example bucket policy and usage report, see [Monitoring SMS Activity](https://docs.aws.amazon.com/sns/latest/dg/sms_stats.html) in the *Amazon SNS Developer Guide*.
   *
   * @public
   */
  attributes: Record<string, string> | undefined;
}

/**
 * The response for the SetSMSAttributes action.
 *
 * @public
 */
export interface SetSMSAttributesResponse {}

/**
 * Input for SetSubscriptionAttributes action.
 *
 * @public
 */
export interface SetSubscriptionAttributesInput {
  /**
   * The ARN of the subscription to modify.
   *
   * @public
   */
  SubscriptionArn: string | undefined;

  /**
   * A map of attributes with their corresponding values.
   *
   * The following lists the names, descriptions, and values of the special request parameters that this action uses:
   *
   * - `DeliveryPolicy` – The policy that defines how Amazon SNS retries failed deliveries to HTTP/S endpoints.
   * - `FilterPolicy` – The simple JSON object that lets your subscriber receive only a subset of messages, rather than receiving every message published to the topic.
   * - `FilterPolicyScope` – This attribute lets you choose the filtering scope by using one of the following string value types:
   *
   *   - `MessageAttributes` (default) – The filter is applied on the message attributes.
   *   - `MessageBody` – The filter is applied on the message body.
   * - `RawMessageDelivery` – When set to `true`, enables raw message delivery to Amazon SQS or HTTP/S endpoints. This eliminates the need for the endpoints to process JSON formatting, which is otherwise created for Amazon SNS metadata.
   * - `RedrivePolicy` – When specified, sends undeliverable messages to the specified Amazon SQS dead-letter queue. Messages that can't be delivered due to client errors (for example, when the subscribed endpoint is unreachable) or server errors (for example, when the service that powers the subscribed endpoint becomes unavailable) are held in the dead-letter queue for further analysis or reprocessing.
   *
   * The following attribute applies only to Amazon Data Firehose delivery stream subscriptions:
   *
   * - `SubscriptionRoleArn` – The ARN of the IAM role that has the following:
   *
   *   - Permission to write to the Firehose delivery stream
   *   - Amazon SNS listed as a trusted entity
   *
   *   Specifying a valid ARN for this attribute is required for Firehose delivery stream subscriptions. For more information, see [Fanout to Firehose delivery streams](https://docs.aws.amazon.com/sns/latest/dg/sns-firehose-as-subscriber.html) in the *Amazon SNS Developer Guide*.
   *
   * @public
   */
  AttributeName: string | undefined;

  /**
   * The new value for the attribute in JSON format.
   *
   * @public
   */
  AttributeValue?: string | undefined;
}

/**
 * Input for SetTopicAttributes action.
 *
 * @public
 */
export interface SetTopicAttributesInput {
  /**
   * The ARN of the topic to modify.
   *
   * @public
   */
  TopicArn: string | undefined;

  /**
   * A map of attributes with their corresponding values.
   *
   * The following lists the names, descriptions, and values of the special request parameters that the `SetTopicAttributes` action uses:
   *
   * - `DeliveryPolicy` – The policy that defines how Amazon SNS retries failed deliveries to HTTP/S endpoints.
   * - `DisplayName` – The display name to use for a topic with SMS, `email`, and `email-json` subscriptions. For `email` and `email-json` subscriptions, the display name is used as the sender name for regular notification messages. Subscription confirmation and unsubscribe confirmation emails always use "Amazon Web Services Notifications" as the sender name.
   * - `MaximumMessageSize` – The maximum size, in bytes, of a message that can be published to the topic. Valid values are `1024` to `1048576` (1 MiB). The default is `262144` (256 KiB).
   *
   *   A topic with a `MaximumMessageSize` above 256 KiB must have 100 or fewer subscriptions, and each subscription must be an Amazon SQS, Amazon Data Firehose, or Lambda subscription.
   *
   *   You can increase or decrease this value at any time. If the topic doesn't meet these requirements when you set a value above 256 KiB, Amazon SNS returns an `InvalidParameter` error. For more information, see [Large message payloads](https://docs.aws.amazon.com/sns/latest/dg/large-message-payloads.html) in the *Amazon SNS Developer Guide.*
   * - `Policy` – The policy that defines who can access your topic. By default, only the topic owner can publish or subscribe to the topic.
   * - `TracingConfig` – Tracing mode of an Amazon SNS topic. By default `TracingConfig` is set to `PassThrough`, and the topic passes through the tracing header it receives from an Amazon SNS publisher to its subscriptions. If set to `Active`, Amazon SNS will vend X-Ray segment data to topic owner account if the sampled flag in the tracing header is true. This is only supported on standard topics.
   * - HTTP
   *
   *   - `HTTPSuccessFeedbackRoleArn` – Indicates successful message delivery status for an Amazon SNS topic that is subscribed to an HTTP endpoint.
   *   - `HTTPSuccessFeedbackSampleRate` – Indicates percentage of successful messages to sample for an Amazon SNS topic that is subscribed to an HTTP endpoint.
   *   - `HTTPFailureFeedbackRoleArn` – Indicates failed message delivery status for an Amazon SNS topic that is subscribed to an HTTP endpoint.
   * - Amazon Data Firehose
   *
   *   - `FirehoseSuccessFeedbackRoleArn` – Indicates successful message delivery status for an Amazon SNS topic that is subscribed to an Amazon Data Firehose endpoint.
   *   - `FirehoseSuccessFeedbackSampleRate` – Indicates percentage of successful messages to sample for an Amazon SNS topic that is subscribed to an Amazon Data Firehose endpoint.
   *   - `FirehoseFailureFeedbackRoleArn` – Indicates failed message delivery status for an Amazon SNS topic that is subscribed to an Amazon Data Firehose endpoint.
   * - Lambda
   *
   *   - `LambdaSuccessFeedbackRoleArn` – Indicates successful message delivery status for an Amazon SNS topic that is subscribed to an Lambda endpoint.
   *   - `LambdaSuccessFeedbackSampleRate` – Indicates percentage of successful messages to sample for an Amazon SNS topic that is subscribed to an Lambda endpoint.
   *   - `LambdaFailureFeedbackRoleArn` – Indicates failed message delivery status for an Amazon SNS topic that is subscribed to an Lambda endpoint.
   * - Platform application endpoint
   *
   *   - `ApplicationSuccessFeedbackRoleArn` – Indicates successful message delivery status for an Amazon SNS topic that is subscribed to an platform application endpoint.
   *   - `ApplicationSuccessFeedbackSampleRate` – Indicates percentage of successful messages to sample for an Amazon SNS topic that is subscribed to an platform application endpoint.
   *   - `ApplicationFailureFeedbackRoleArn` – Indicates failed message delivery status for an Amazon SNS topic that is subscribed to an platform application endpoint.
   *
   *   > **Note:**
   *   >
   *   > In addition to being able to configure topic attributes for message delivery status of notification messages sent to Amazon SNS application endpoints, you can also configure application attributes for the delivery status of push notification messages sent to push notification services.
   *   >
   *   > For example, For more information, see [Using Amazon SNS Application Attributes for Message Delivery Status](https://docs.aws.amazon.com/sns/latest/dg/sns-msg-status.html).
   * - Amazon SQS
   *
   *   - `SQSSuccessFeedbackRoleArn` – Indicates successful message delivery status for an Amazon SNS topic that is subscribed to an Amazon SQS endpoint.
   *   - `SQSSuccessFeedbackSampleRate` – Indicates percentage of successful messages to sample for an Amazon SNS topic that is subscribed to an Amazon SQS endpoint.
   *   - `SQSFailureFeedbackRoleArn` – Indicates failed message delivery status for an Amazon SNS topic that is subscribed to an Amazon SQS endpoint.
   *
   * > **Note:** The <ENDPOINT>SuccessFeedbackRoleArn and <ENDPOINT>FailureFeedbackRoleArn attributes are used to give Amazon SNS write access to use CloudWatch Logs on your behalf. The <ENDPOINT>SuccessFeedbackSampleRate attribute is for specifying the sample rate percentage (0-100) of successfully delivered messages. After you configure the <ENDPOINT>FailureFeedbackRoleArn attribute, then all failed message deliveries generate CloudWatch Logs.
   *
   * The following attribute applies only to [server-side-encryption](https://docs.aws.amazon.com/sns/latest/dg/sns-server-side-encryption.html):
   *
   * - `KmsMasterKeyId` – The ID of an Amazon Web Services managed customer master key (CMK) for Amazon SNS or a custom CMK. For more information, see [Key Terms](https://docs.aws.amazon.com/sns/latest/dg/sns-server-side-encryption.html#sse-key-terms). For more examples, see [KeyId](https://docs.aws.amazon.com/kms/latest/APIReference/API_DescribeKey.html#API_DescribeKey_RequestParameters) in the *Key Management Service API Reference*.
   * - `SignatureVersion` – The signature version corresponds to the hashing algorithm used while creating the signature of the notifications, subscription confirmations, or unsubscribe confirmation messages sent by Amazon SNS. By default, `SignatureVersion` is set to `1`.
   *
   * The following attribute applies only to [FIFO topics](https://docs.aws.amazon.com/sns/latest/dg/sns-fifo-topics.html):
   *
   * - `ArchivePolicy` – The policy that sets the retention period for messages stored in the message archive of an Amazon SNS FIFO topic.
   * - `ContentBasedDeduplication` – Enables content-based deduplication for FIFO topics.
   *
   *   - By default, `ContentBasedDeduplication` is set to `false`. If you create a FIFO topic and this attribute is `false`, you must specify a value for the `MessageDeduplicationId` parameter for the [Publish](https://docs.aws.amazon.com/sns/latest/api/API_Publish.html) action.
   *   - When you set `ContentBasedDeduplication` to `true`, Amazon SNS uses a SHA-256 hash to generate the `MessageDeduplicationId` using the body of the message (but not the attributes of the message).
   *
   *     (Optional) To override the generated value, you can specify a value for the `MessageDeduplicationId` parameter for the `Publish` action.
   *
   * - `FifoThroughputScope` – Enables higher throughput for your FIFO topic by adjusting the scope of deduplication. This attribute has two possible values:
   *
   *   - `Topic` – The scope of message deduplication is across the entire topic. This is the default value and maintains existing behavior, with a maximum throughput of 3000 messages per second or 20MB per second, whichever comes first.
   *   - `MessageGroup` – The scope of deduplication is within each individual message group, which enables higher throughput per topic subject to regional quotas. For more information on quotas or to request an increase, see [Amazon SNS service quotas](https://docs.aws.amazon.com/general/latest/gr/sns.html) in the Amazon Web Services General Reference.
   *
   * @public
   */
  AttributeName: string | undefined;

  /**
   * The new value for the attribute.
   *
   * @public
   */
  AttributeValue?: string | undefined;
}

/**
 * Input for Subscribe action.
 *
 * @public
 */
export interface SubscribeInput {
  /**
   * The ARN of the topic you want to subscribe to.
   *
   * @public
   */
  TopicArn: string | undefined;

  /**
   * The protocol that you want to use. Supported protocols include:
   *
   * - `http` – delivery of JSON-encoded message via HTTP POST
   * - `https` – delivery of JSON-encoded message via HTTPS POST
   * - `email` – delivery of message via SMTP
   * - `email-json` – delivery of JSON-encoded message via SMTP
   * - `sms` – delivery of message via SMS
   * - `sqs` – delivery of JSON-encoded message to an Amazon SQS queue
   * - `application` – delivery of JSON-encoded message to an EndpointArn for a mobile app and device
   * - `lambda` – delivery of JSON-encoded message to an Lambda function
   * - `firehose` – delivery of JSON-encoded message to an Amazon Data Firehose delivery stream.
   *
   * @public
   */
  Protocol: string | undefined;

  /**
   * The endpoint that you want to receive notifications. Endpoints vary by protocol:
   *
   * - For the `http` protocol, the (public) endpoint is a URL beginning with `http://`.
   * - For the `https` protocol, the (public) endpoint is a URL beginning with `https://`.
   * - For the `email` protocol, the endpoint is an email address.
   * - For the `email-json` protocol, the endpoint is an email address.
   * - For the `sms` protocol, the endpoint is a phone number of an SMS-enabled device.
   * - For the `sqs` protocol, the endpoint is the ARN of an Amazon SQS queue.
   * - For the `application` protocol, the endpoint is the EndpointArn of a mobile app and device.
   * - For the `lambda` protocol, the endpoint is the ARN of an Lambda function.
   * - For the `firehose` protocol, the endpoint is the ARN of an Amazon Data Firehose delivery stream.
   *
   * @public
   */
  Endpoint?: string | undefined;

  /**
   * A map of attributes with their corresponding values.
   *
   * The following lists the names, descriptions, and values of the special request parameters that the `Subscribe` action uses:
   *
   * - `DeliveryPolicy` – The policy that defines how Amazon SNS retries failed deliveries to HTTP/S endpoints.
   * - `FilterPolicy` – The simple JSON object that lets your subscriber receive only a subset of messages, rather than receiving every message published to the topic.
   * - `FilterPolicyScope` – This attribute lets you choose the filtering scope by using one of the following string value types:
   *
   *   - `MessageAttributes` (default) – The filter is applied on the message attributes.
   *   - `MessageBody` – The filter is applied on the message body.
   * - `RawMessageDelivery` – When set to `true`, enables raw message delivery to Amazon SQS or HTTP/S endpoints. This eliminates the need for the endpoints to process JSON formatting, which is otherwise created for Amazon SNS metadata.
   * - `RedrivePolicy` – When specified, sends undeliverable messages to the specified Amazon SQS dead-letter queue. Messages that can't be delivered due to client errors (for example, when the subscribed endpoint is unreachable) or server errors (for example, when the service that powers the subscribed endpoint becomes unavailable) are held in the dead-letter queue for further analysis or reprocessing.
   *
   * The following attribute applies only to Amazon Data Firehose delivery stream subscriptions:
   *
   * - `SubscriptionRoleArn` – The ARN of the IAM role that has the following:
   *
   *   - Permission to write to the Firehose delivery stream
   *   - Amazon SNS listed as a trusted entity
   *
   *   Specifying a valid ARN for this attribute is required for Firehose delivery stream subscriptions. For more information, see [Fanout to Firehose delivery streams](https://docs.aws.amazon.com/sns/latest/dg/sns-firehose-as-subscriber.html) in the *Amazon SNS Developer Guide*.
   *
   * The following attributes apply only to [FIFO topics](https://docs.aws.amazon.com/sns/latest/dg/sns-fifo-topics.html):
   *
   * - `ReplayPolicy` – Adds or updates an inline policy document for a subscription to replay messages stored in the specified Amazon SNS topic.
   * - `ReplayStatus` – Retrieves the status of the subscription message replay, which can be one of the following:
   *
   *   - `Completed` – The replay has successfully redelivered all messages, and is now delivering newly published messages. If an ending point was specified in the `ReplayPolicy` then the subscription will no longer receive newly published messages.
   *   - `In progress` – The replay is currently replaying the selected messages.
   *   - `Failed` – The replay was unable to complete.
   *   - `Pending` – The default state while the replay initiates.
   *
   * @public
   */
  Attributes?: Record<string, string> | undefined;

  /**
   * Sets whether the response from the `Subscribe` request includes the subscription ARN, even if the subscription is not yet confirmed.
   *
   * If you set this parameter to `true`, the response includes the ARN in all cases, even if the subscription is not yet confirmed. In addition to the ARN for confirmed subscriptions, the response also includes the `pending subscription` ARN value for subscriptions that aren't yet confirmed. A subscription becomes confirmed when the subscriber calls the `ConfirmSubscription` action with a confirmation token.
   *
   * The default value is `false`.
   *
   * @public
   */
  ReturnSubscriptionArn?: boolean | undefined;
}

/**
 * Response for Subscribe action.
 *
 * @public
 */
export interface SubscribeResponse {
  /**
   * The ARN of the subscription if it is confirmed, or the string "pending confirmation" if the subscription requires confirmation. However, if the API request parameter `ReturnSubscriptionArn` is true, then the value is always the subscription ARN, even if the subscription requires confirmation.
   *
   * @public
   */
  SubscriptionArn?: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The ARN of the topic to which to add tags.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The tags to be added to the specified topic. A tag consists of a required key and an optional value.
   *
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * Input for Unsubscribe action.
 *
 * @public
 */
export interface UnsubscribeInput {
  /**
   * The ARN of the subscription to be deleted.
   *
   * @public
   */
  SubscriptionArn: string | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * The ARN of the topic from which to remove tags.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The list of tag keys to remove from the specified topic.
   *
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface VerifySMSSandboxPhoneNumberInput {
  /**
   * The destination phone number to verify.
   *
   * @public
   */
  PhoneNumber: string | undefined;

  /**
   * The OTP sent to the destination number from the `CreateSMSSandBoxPhoneNumber` call.
   *
   * @public
   */
  OneTimePassword: string | undefined;
}

/**
 * The destination phone number's verification status.
 *
 * @public
 */
export interface VerifySMSSandboxPhoneNumberResult {}
