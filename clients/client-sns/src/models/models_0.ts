// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { SNSServiceException as __BaseException } from "./SNSServiceException";

export interface AddPermissionInput {
  /**
   * <p>The ARN of the topic whose access control policy you wish to modify.</p>
   */
  TopicArn: string | undefined;

  /**
   * <p>A unique identifier for the new policy statement.</p>
   */
  Label: string | undefined;

  /**
   * <p>The Amazon Web Services account IDs of the users (principals) who will be given access to the
   *             specified actions. The users must have Amazon Web Services account, but do not need to be signed up
   *             for this service.</p>
   */
  AWSAccountId: string[] | undefined;

  /**
   * <p>The action you want to allow for the specified principal(s).</p>
   *         <p>Valid values: Any Amazon SNS action name, for example <code>Publish</code>.</p>
   */
  ActionName: string[] | undefined;
}

/**
 * <p>Indicates that the user has been denied access to the requested resource.</p>
 */
export class AuthorizationErrorException extends __BaseException {
  readonly name: "AuthorizationErrorException" = "AuthorizationErrorException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AuthorizationErrorException, __BaseException>) {
    super({
      name: "AuthorizationErrorException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AuthorizationErrorException.prototype);
  }
}

/**
 * <p>Indicates an internal service error.</p>
 */
export class InternalErrorException extends __BaseException {
  readonly name: "InternalErrorException" = "InternalErrorException";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalErrorException, __BaseException>) {
    super({
      name: "InternalErrorException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalErrorException.prototype);
  }
}

/**
 * <p>Indicates that a request parameter does not comply with the associated
 *             constraints.</p>
 */
export class InvalidParameterException extends __BaseException {
  readonly name: "InvalidParameterException" = "InvalidParameterException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidParameterException, __BaseException>) {
    super({
      name: "InvalidParameterException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidParameterException.prototype);
  }
}

/**
 * <p>Indicates that the requested resource does not exist.</p>
 */
export class NotFoundException extends __BaseException {
  readonly name: "NotFoundException" = "NotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NotFoundException, __BaseException>) {
    super({
      name: "NotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NotFoundException.prototype);
  }
}

/**
 * <p>The input for the <code>CheckIfPhoneNumberIsOptedOut</code> action.</p>
 */
export interface CheckIfPhoneNumberIsOptedOutInput {
  /**
   * <p>The phone number for which you want to check the opt out status.</p>
   */
  phoneNumber: string | undefined;
}

/**
 * <p>The response from the <code>CheckIfPhoneNumberIsOptedOut</code> action.</p>
 */
export interface CheckIfPhoneNumberIsOptedOutResponse {
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

/**
 * <p>Indicates that the rate at which requests have been submitted for this action exceeds the limit for your Amazon Web Services account.</p>
 */
export class ThrottledException extends __BaseException {
  readonly name: "ThrottledException" = "ThrottledException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottledException, __BaseException>) {
    super({
      name: "ThrottledException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottledException.prototype);
  }
}

/**
 * <p>Input for ConfirmSubscription action.</p>
 */
export interface ConfirmSubscriptionInput {
  /**
   * <p>The ARN of the topic for which you wish to confirm a subscription.</p>
   */
  TopicArn: string | undefined;

  /**
   * <p>Short-lived token sent to an endpoint during the <code>Subscribe</code> action.</p>
   */
  Token: string | undefined;

  /**
   * <p>Disallows unauthenticated unsubscribes of the subscription. If the value of this
   *             parameter is <code>true</code> and the request has an Amazon Web Services signature, then only the
   *             topic owner and the subscription owner can unsubscribe the endpoint. The unsubscribe
   *             action requires Amazon Web Services authentication. </p>
   */
  AuthenticateOnUnsubscribe?: string;
}

/**
 * <p>Response for ConfirmSubscriptions action.</p>
 */
export interface ConfirmSubscriptionResponse {
  /**
   * <p>The ARN of the created subscription.</p>
   */
  SubscriptionArn?: string;
}

/**
 * <p>Indicates that the number of filter polices in your Amazon Web Services account exceeds the limit. To
 *             add more filter polices, submit an Amazon SNS Limit Increase case in the Amazon Web Services Support
 *             Center.</p>
 */
export class FilterPolicyLimitExceededException extends __BaseException {
  readonly name: "FilterPolicyLimitExceededException" = "FilterPolicyLimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<FilterPolicyLimitExceededException, __BaseException>) {
    super({
      name: "FilterPolicyLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, FilterPolicyLimitExceededException.prototype);
  }
}

/**
 * <p>Indicates that the customer already owns the maximum allowed number of
 *             subscriptions.</p>
 */
export class SubscriptionLimitExceededException extends __BaseException {
  readonly name: "SubscriptionLimitExceededException" = "SubscriptionLimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SubscriptionLimitExceededException, __BaseException>) {
    super({
      name: "SubscriptionLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SubscriptionLimitExceededException.prototype);
  }
}

/**
 * <p>Input for CreatePlatformApplication action.</p>
 */
export interface CreatePlatformApplicationInput {
  /**
   * <p>Application names must be made up of only uppercase and lowercase ASCII letters,
   *             numbers, underscores, hyphens, and periods, and must be between 1 and 256 characters
   *             long.</p>
   */
  Name: string | undefined;

  /**
   * <p>The following platforms are supported: ADM (Amazon Device Messaging), APNS (Apple Push
   *             Notification Service), APNS_SANDBOX, and GCM (Firebase Cloud Messaging).</p>
   */
  Platform: string | undefined;

  /**
   * <p>For a list of attributes, see <a href="https://docs.aws.amazon.com/sns/latest/api/API_SetPlatformApplicationAttributes.html">SetPlatformApplicationAttributes</a>.</p>
   */
  Attributes: Record<string, string> | undefined;
}

/**
 * <p>Response from CreatePlatformApplication action.</p>
 */
export interface CreatePlatformApplicationResponse {
  /**
   * <p>PlatformApplicationArn is returned.</p>
   */
  PlatformApplicationArn?: string;
}

/**
 * <p>Response from CreateEndpoint action.</p>
 */
export interface CreateEndpointResponse {
  /**
   * <p>EndpointArn returned from CreateEndpoint action.</p>
   */
  EndpointArn?: string;
}

/**
 * <p>Input for CreatePlatformEndpoint action.</p>
 */
export interface CreatePlatformEndpointInput {
  /**
   * <p>PlatformApplicationArn returned from CreatePlatformApplication is used to create a an
   *             endpoint.</p>
   */
  PlatformApplicationArn: string | undefined;

  /**
   * <p>Unique identifier created by the notification service for an app on a device. The
   *             specific name for Token will vary, depending on which notification service is being
   *             used. For example, when using APNS as the notification service, you need the device
   *             token. Alternatively, when using GCM (Firebase Cloud Messaging) or ADM, the device token
   *             equivalent is called the registration ID.</p>
   */
  Token: string | undefined;

  /**
   * <p>Arbitrary user data to associate with the endpoint. Amazon SNS does not use this data. The
   *             data must be in UTF-8 format and less than 2KB.</p>
   */
  CustomUserData?: string;

  /**
   * <p>For a list of attributes, see <a href="https://docs.aws.amazon.com/sns/latest/api/API_SetEndpointAttributes.html">SetEndpointAttributes</a>.</p>
   */
  Attributes?: Record<string, string>;
}

export enum LanguageCodeString {
  de_DE = "de-DE",
  en_GB = "en-GB",
  en_US = "en-US",
  es_419 = "es-419",
  es_ES = "es-ES",
  fr_CA = "fr-CA",
  fr_FR = "fr-FR",
  it_IT = "it-IT",
  jp_JP = "ja-JP",
  kr_KR = "kr-KR",
  pt_BR = "pt-BR",
  zh_CN = "zh-CN",
  zh_TW = "zh-TW",
}

export interface CreateSMSSandboxPhoneNumberInput {
  /**
   * <p>The destination phone number to verify. On verification, Amazon SNS adds this phone number
   *             to the list of verified phone numbers that you can send SMS messages to.</p>
   */
  PhoneNumber: string | undefined;

  /**
   * <p>The language to use for sending the OTP. The default value is
   *             <code>en-US</code>.</p>
   */
  LanguageCode?: LanguageCodeString | string;
}

export interface CreateSMSSandboxPhoneNumberResult {}

/**
 * <p>Indicates that the specified phone number opted out of receiving SMS messages from
 *             your Amazon Web Services account. You can't send SMS messages to phone numbers that opt out.</p>
 */
export class OptedOutException extends __BaseException {
  readonly name: "OptedOutException" = "OptedOutException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OptedOutException, __BaseException>) {
    super({
      name: "OptedOutException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OptedOutException.prototype);
  }
}

/**
 * <p>Indicates that a request parameter does not comply with the associated
 *             constraints.</p>
 */
export class UserErrorException extends __BaseException {
  readonly name: "UserErrorException" = "UserErrorException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UserErrorException, __BaseException>) {
    super({
      name: "UserErrorException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UserErrorException.prototype);
  }
}

/**
 * <p>Can't perform multiple operations on a tag simultaneously. Perform the operations
 *             sequentially.</p>
 */
export class ConcurrentAccessException extends __BaseException {
  readonly name: "ConcurrentAccessException" = "ConcurrentAccessException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConcurrentAccessException, __BaseException>) {
    super({
      name: "ConcurrentAccessException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConcurrentAccessException.prototype);
  }
}

/**
 * <p>The list of tags to be added to the specified topic.</p>
 */
export interface Tag {
  /**
   * <p>The required key portion of the tag.</p>
   */
  Key: string | undefined;

  /**
   * <p>The optional value portion of the tag.</p>
   */
  Value: string | undefined;
}

/**
 * <p>Input for CreateTopic action.</p>
 */
export interface CreateTopicInput {
  /**
   * <p>The name of the topic you want to create.</p>
   *         <p>Constraints: Topic names must be made up of only uppercase and lowercase ASCII
   *             letters, numbers, underscores, and hyphens, and must be between 1 and 256 characters
   *             long.</p>
   *         <p>For a FIFO (first-in-first-out) topic, the name must end with the <code>.fifo</code>
   *             suffix. </p>
   */
  Name: string | undefined;

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
   *                   <code>FifoTopic</code> – Set to true to create a FIFO topic.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Policy</code> – The policy that defines who can access your
   *                     topic. By default, only the topic owner can publish or subscribe to the
   *                     topic.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>SignatureVersion</code> – The signature version corresponds to
   *                     the hashing algorithm used while creating the signature of the notifications,
   *                     subscription confirmations, or unsubscribe confirmation messages sent by Amazon SNS.
   *                     By default, <code>SignatureVersion</code> is set to 1.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>TracingConfig</code> – Tracing mode of an Amazon SNS topic. By default
   *                         <code>TracingConfig</code> is set to <code>PassThrough</code>, and the topic
   *                     passes through the tracing header it receives from an Amazon SNS publisher to its
   *                     subscriptions. If set to Active, Amazon SNS will vend X-Ray segment data to topic
   *                     owner account if the sampled flag in the tracing header is true. This is only
   *                     supported on standard topics.</p>
   *             </li>
   *          </ul>
   *
   *         <p>The following attribute applies only to <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-server-side-encryption.html">server-side
   *             encryption</a>:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>KmsMasterKeyId</code> – The ID of an Amazon Web Services managed customer master
   *                     key (CMK) for Amazon SNS or a custom CMK. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-server-side-encryption.html#sse-key-terms">Key
   *                         Terms</a>. For more examples, see <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_DescribeKey.html#API_DescribeKey_RequestParameters">KeyId</a> in the <i>Key Management Service API Reference</i>. </p>
   *             </li>
   *          </ul>
   *
   *
   *         <p>The following attributes apply only to <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-fifo-topics.html">FIFO topics</a>:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>FifoTopic</code> – When this is set to <code>true</code>, a FIFO
   *                 topic is created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                     <code>ContentBasedDeduplication</code> – Enables content-based deduplication for
   *                     FIFO topics.</p>
   *
   *                 <ul>
   *                   <li>
   *                         <p>By default, <code>ContentBasedDeduplication</code> is set to <code>false</code>.
   *                             If you create a FIFO topic and this attribute is <code>false</code>, you must
   *                             specify a value for the <code>MessageDeduplicationId</code> parameter for the
   *                             <a href="https://docs.aws.amazon.com/sns/latest/api/API_Publish.html">Publish</a> action. </p>
   *                     </li>
   *                   <li>
   *                         <p>When you set <code>ContentBasedDeduplication</code> to <code>true</code>,
   *                             Amazon SNS uses a SHA-256 hash to generate the <code>MessageDeduplicationId</code> using
   *                             the body of the message (but not the attributes of the message).</p>
   *                         <p>(Optional) To override the generated value, you can specify a value
   *                             for the <code>MessageDeduplicationId</code> parameter for the <code>Publish</code>
   *                             action.</p>
   *                      </li>
   *                </ul>
   *             </li>
   *          </ul>
   */
  Attributes?: Record<string, string>;

  /**
   * <p>The list of tags to add to a new topic.</p>
   *         <note>
   *             <p>To be able to tag a topic on creation, you must have the
   *                     <code>sns:CreateTopic</code> and <code>sns:TagResource</code>
   *                 permissions.</p>
   *         </note>
   */
  Tags?: Tag[];

  /**
   * <p>The body of the policy document you want to use for this topic.</p>
   *         <p>You can only add one policy per topic.</p>
   *         <p>The policy must be in JSON string format.</p>
   *         <p>Length Constraints: Maximum length of 30,720.</p>
   */
  DataProtectionPolicy?: string;
}

/**
 * <p>Response from CreateTopic action.</p>
 */
export interface CreateTopicResponse {
  /**
   * <p>The Amazon Resource Name (ARN) assigned to the created topic.</p>
   */
  TopicArn?: string;
}

/**
 * <p>The credential signature isn't valid. You must use an HTTPS endpoint and sign your
 *             request using Signature Version 4.</p>
 */
export class InvalidSecurityException extends __BaseException {
  readonly name: "InvalidSecurityException" = "InvalidSecurityException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidSecurityException, __BaseException>) {
    super({
      name: "InvalidSecurityException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidSecurityException.prototype);
  }
}

/**
 * <p>A tag has been added to a resource with the same ARN as a deleted resource. Wait a
 *             short while and then retry the operation.</p>
 */
export class StaleTagException extends __BaseException {
  readonly name: "StaleTagException" = "StaleTagException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<StaleTagException, __BaseException>) {
    super({
      name: "StaleTagException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, StaleTagException.prototype);
  }
}

/**
 * <p>Can't add more than 50 tags to a topic.</p>
 */
export class TagLimitExceededException extends __BaseException {
  readonly name: "TagLimitExceededException" = "TagLimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TagLimitExceededException, __BaseException>) {
    super({
      name: "TagLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TagLimitExceededException.prototype);
  }
}

/**
 * <p>The request doesn't comply with the IAM tag policy. Correct your request and then
 *             retry it.</p>
 */
export class TagPolicyException extends __BaseException {
  readonly name: "TagPolicyException" = "TagPolicyException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TagPolicyException, __BaseException>) {
    super({
      name: "TagPolicyException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TagPolicyException.prototype);
  }
}

/**
 * <p>Indicates that the customer already owns the maximum allowed number of topics.</p>
 */
export class TopicLimitExceededException extends __BaseException {
  readonly name: "TopicLimitExceededException" = "TopicLimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TopicLimitExceededException, __BaseException>) {
    super({
      name: "TopicLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TopicLimitExceededException.prototype);
  }
}

/**
 * <p>Input for DeleteEndpoint action.</p>
 */
export interface DeleteEndpointInput {
  /**
   * <p>EndpointArn of endpoint to delete.</p>
   */
  EndpointArn: string | undefined;
}

/**
 * <p>Input for DeletePlatformApplication action.</p>
 */
export interface DeletePlatformApplicationInput {
  /**
   * <p>PlatformApplicationArn of platform application object to delete.</p>
   */
  PlatformApplicationArn: string | undefined;
}

export interface DeleteSMSSandboxPhoneNumberInput {
  /**
   * <p>The destination phone number to delete.</p>
   */
  PhoneNumber: string | undefined;
}

export interface DeleteSMSSandboxPhoneNumberResult {}

/**
 * <p>Can’t perform the action on the specified resource. Make sure that the resource
 *             exists.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
  }
}

export interface DeleteTopicInput {
  /**
   * <p>The ARN of the topic you want to delete.</p>
   */
  TopicArn: string | undefined;
}

export interface GetDataProtectionPolicyInput {
  /**
   * <p>The ARN of the topic whose <code>DataProtectionPolicy</code> you want to get.</p>
   *         <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names
   *                 (ARNs)</a> in the Amazon Web Services General Reference.</p>
   */
  ResourceArn: string | undefined;
}

export interface GetDataProtectionPolicyResponse {
  /**
   * <p>Retrieves the <code>DataProtectionPolicy</code> in JSON string format.</p>
   */
  DataProtectionPolicy?: string;
}

/**
 * <p>Input for GetEndpointAttributes action.</p>
 */
export interface GetEndpointAttributesInput {
  /**
   * <p>EndpointArn for GetEndpointAttributes input.</p>
   */
  EndpointArn: string | undefined;
}

/**
 * <p>Response from GetEndpointAttributes of the EndpointArn.</p>
 */
export interface GetEndpointAttributesResponse {
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
   *                 <note>
   *                     <p>The device token for the iOS platform is returned in lowercase.</p>
   *                 </note>
   *             </li>
   *          </ul>
   */
  Attributes?: Record<string, string>;
}

/**
 * <p>Input for GetPlatformApplicationAttributes action.</p>
 */
export interface GetPlatformApplicationAttributesInput {
  /**
   * <p>PlatformApplicationArn for GetPlatformApplicationAttributesInput.</p>
   */
  PlatformApplicationArn: string | undefined;
}

/**
 * <p>Response for GetPlatformApplicationAttributes action.</p>
 */
export interface GetPlatformApplicationAttributesResponse {
  /**
   * <p>Attributes include the following:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>AppleCertificateExpiryDate</code> – The expiry date of the SSL
   *                     certificate used to configure certificate-based authentication.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>ApplePlatformTeamID</code> – The Apple developer account ID used to
   *                     configure token-based authentication.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>ApplePlatformBundleID</code> – The app identifier used to configure
   *                     token-based authentication.</p>
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
   *          </ul>
   */
  Attributes?: Record<string, string>;
}

/**
 * <p>The input for the <code>GetSMSAttributes</code> request.</p>
 */
export interface GetSMSAttributesInput {
  /**
   * <p>A list of the individual attribute names, such as <code>MonthlySpendLimit</code>, for
   *             which you want values.</p>
   *         <p>For all attribute names, see <a href="https://docs.aws.amazon.com/sns/latest/api/API_SetSMSAttributes.html">SetSMSAttributes</a>.</p>
   *         <p>If you don't use this parameter, Amazon SNS returns all SMS attributes.</p>
   */
  attributes?: string[];
}

/**
 * <p>The response from the <code>GetSMSAttributes</code> request.</p>
 */
export interface GetSMSAttributesResponse {
  /**
   * <p>The SMS attribute names and their values.</p>
   */
  attributes?: Record<string, string>;
}

export interface GetSMSSandboxAccountStatusInput {}

export interface GetSMSSandboxAccountStatusResult {
  /**
   * <p>Indicates whether the calling Amazon Web Services account is in the SMS sandbox.</p>
   */
  IsInSandbox: boolean | undefined;
}

/**
 * <p>Input for GetSubscriptionAttributes.</p>
 */
export interface GetSubscriptionAttributesInput {
  /**
   * <p>The ARN of the subscription whose properties you want to get.</p>
   */
  SubscriptionArn: string | undefined;
}

/**
 * <p>Response for GetSubscriptionAttributes action.</p>
 */
export interface GetSubscriptionAttributesResponse {
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
   *                     the subscription. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-message-filtering.html">Amazon SNS Message
   *                         Filtering</a> in the <i>Amazon SNS Developer Guide</i>.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>FilterPolicyScope</code> – This attribute lets you choose the filtering scope by using one of the following string value types:</p>
   *                 <ul>
   *                   <li>
   *                      <p>
   *                         <code>MessageAttributes</code> (default) – The filter is applied on the message attributes.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>MessageBody</code> – The filter is applied on the message body.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>Owner</code> – The Amazon Web Services account ID of the subscription's
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
   *
   *         <p>The following attribute applies only to Amazon Kinesis Data Firehose delivery stream subscriptions:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SubscriptionRoleArn</code> – The ARN of the IAM role that has the following:</p>
   *                 <ul>
   *                   <li>
   *                         <p>Permission to write to the Kinesis Data Firehose delivery stream</p>
   *                     </li>
   *                   <li>
   *                         <p>Amazon SNS listed as a trusted entity</p>
   *                     </li>
   *                </ul>
   *                 <p>Specifying a valid ARN for this attribute is required for Kinesis Data Firehose delivery stream subscriptions.
   *                 For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-firehose-as-subscriber.html">Fanout
   *                     to Kinesis Data Firehose delivery streams</a> in the <i>Amazon SNS Developer Guide</i>.</p>
   *                     </li>
   *          </ul>
   */
  Attributes?: Record<string, string>;
}

/**
 * <p>Input for GetTopicAttributes action.</p>
 */
export interface GetTopicAttributesInput {
  /**
   * <p>The ARN of the topic whose properties you want to get.</p>
   */
  TopicArn: string | undefined;
}

/**
 * <p>Response for GetTopicAttributes action.</p>
 */
export interface GetTopicAttributesResponse {
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
   *                   <code>EffectiveDeliveryPolicy</code> – The JSON serialization of the
   *                     effective delivery policy, taking system defaults into account.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Owner</code> – The Amazon Web Services account ID of the topic's owner.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Policy</code> – The JSON serialization of the topic's access
   *                     control policy.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>SignatureVersion</code> – The version of the Amazon SNS signature used
   *                     for the topic.</p>
   *                 <ul>
   *                   <li>
   *                         <p>By default, <code>SignatureVersion</code> is set to <b>1</b>. The signature is a Base64-encoded
   *                                 <b>SHA1withRSA</b> signature.</p>
   *                     </li>
   *                   <li>
   *                         <p>When you set <code>SignatureVersion</code> to <b>2</b>. Amazon SNS uses a Base64-encoded <b>SHA256withRSA</b> signature. </p>
   *                         <note>
   *                             <p>If the API response does not include the
   *                                     <code>SignatureVersion</code> attribute, it means that the
   *                                     <code>SignatureVersion</code> for the topic has value <b>1</b>.</p>
   *                         </note>
   *                     </li>
   *                </ul>
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
   *                   <code>TracingConfig</code> – Tracing mode of an Amazon SNS topic. By default
   *                         <code>TracingConfig</code> is set to <code>PassThrough</code>, and the topic
   *                     passes through the tracing header it receives from an Amazon SNS publisher to its
   *                     subscriptions. If set to Active, Amazon SNS will vend X-Ray segment data to topic
   *                     owner account if the sampled flag in the tracing header is true. This is only
   *                     supported on standard topics.</p>
   *             </li>
   *          </ul>
   *
   *         <p>The following attribute applies only to <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-server-side-encryption.html">server-side-encryption</a>:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>KmsMasterKeyId</code> - The ID of an Amazon Web Services managed customer master key
   *                     (CMK) for Amazon SNS or a custom CMK. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-server-side-encryption.html#sse-key-terms">Key
   *                         Terms</a>. For more examples, see <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_DescribeKey.html#API_DescribeKey_RequestParameters">KeyId</a> in the <i>Key Management Service API Reference</i>.</p>
   *             </li>
   *          </ul>
   *
   *
   *         <p>The following attributes apply only to <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-fifo-topics.html">FIFO topics</a>:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>FifoTopic</code> – When this is set to <code>true</code>, a FIFO
   *                 topic is created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                     <code>ContentBasedDeduplication</code> – Enables content-based deduplication for
   *                     FIFO topics.</p>
   *
   *                 <ul>
   *                   <li>
   *                         <p>By default, <code>ContentBasedDeduplication</code> is set to <code>false</code>.
   *                             If you create a FIFO topic and this attribute is <code>false</code>, you must
   *                             specify a value for the <code>MessageDeduplicationId</code> parameter for the
   *                             <a href="https://docs.aws.amazon.com/sns/latest/api/API_Publish.html">Publish</a> action. </p>
   *                     </li>
   *                   <li>
   *                         <p>When you set <code>ContentBasedDeduplication</code> to <code>true</code>,
   *                             Amazon SNS uses a SHA-256 hash to generate the <code>MessageDeduplicationId</code> using
   *                             the body of the message (but not the attributes of the message).</p>
   *                         <p>(Optional) To override the generated value, you can specify a value
   *                             for the <code>MessageDeduplicationId</code> parameter for the <code>Publish</code>
   *                             action.</p>
   *                      </li>
   *                </ul>
   *             </li>
   *          </ul>
   */
  Attributes?: Record<string, string>;
}

/**
 * <p>Input for ListEndpointsByPlatformApplication action.</p>
 */
export interface ListEndpointsByPlatformApplicationInput {
  /**
   * <p>PlatformApplicationArn for ListEndpointsByPlatformApplicationInput action.</p>
   */
  PlatformApplicationArn: string | undefined;

  /**
   * <p>NextToken string is used when calling ListEndpointsByPlatformApplication action to
   *             retrieve additional records that are available after the first page results.</p>
   */
  NextToken?: string;
}

/**
 * <p>The endpoint for mobile app and device.</p>
 */
export interface Endpoint {
  /**
   * <p>The <code>EndpointArn</code> for mobile app and device.</p>
   */
  EndpointArn?: string;

  /**
   * <p>Attributes for endpoint.</p>
   */
  Attributes?: Record<string, string>;
}

/**
 * <p>Response for ListEndpointsByPlatformApplication action.</p>
 */
export interface ListEndpointsByPlatformApplicationResponse {
  /**
   * <p>Endpoints returned for ListEndpointsByPlatformApplication action.</p>
   */
  Endpoints?: Endpoint[];

  /**
   * <p>NextToken string is returned when calling ListEndpointsByPlatformApplication action if
   *             additional records are available after the first page results.</p>
   */
  NextToken?: string;
}

export interface ListOriginationNumbersRequest {
  /**
   * <p>Token that the previous <code>ListOriginationNumbers</code> request returns.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of origination numbers to return.</p>
   */
  MaxResults?: number;
}

export enum NumberCapability {
  MMS = "MMS",
  SMS = "SMS",
  VOICE = "VOICE",
}

export enum RouteType {
  Premium = "Premium",
  Promotional = "Promotional",
  Transactional = "Transactional",
}

/**
 * <p>A list of phone numbers and their metadata.</p>
 */
export interface PhoneNumberInformation {
  /**
   * <p>The date and time when the phone number was created.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>The phone number.</p>
   */
  PhoneNumber?: string;

  /**
   * <p>The status of the phone number.</p>
   */
  Status?: string;

  /**
   * <p>The two-character code for the country or region, in ISO 3166-1 alpha-2 format.</p>
   */
  Iso2CountryCode?: string;

  /**
   * <p>The list of supported routes.</p>
   */
  RouteType?: RouteType | string;

  /**
   * <p>The capabilities of each phone number.</p>
   */
  NumberCapabilities?: (NumberCapability | string)[];
}

export interface ListOriginationNumbersResult {
  /**
   * <p>A <code>NextToken</code> string is returned when you call the
   *                 <code>ListOriginationNumbers</code> operation if additional pages of records are
   *             available.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of the calling account's verified and pending origination numbers.</p>
   */
  PhoneNumbers?: PhoneNumberInformation[];
}

/**
 * <p>Indicates that a parameter in the request is invalid.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The input for the <code>ListPhoneNumbersOptedOut</code> action.</p>
 */
export interface ListPhoneNumbersOptedOutInput {
  /**
   * <p>A <code>NextToken</code> string is used when you call the
   *                 <code>ListPhoneNumbersOptedOut</code> action to retrieve additional records that are
   *             available after the first page of results.</p>
   */
  nextToken?: string;
}

/**
 * <p>The response from the <code>ListPhoneNumbersOptedOut</code> action.</p>
 */
export interface ListPhoneNumbersOptedOutResponse {
  /**
   * <p>A list of phone numbers that are opted out of receiving SMS messages. The list is
   *             paginated, and each page can contain up to 100 phone numbers.</p>
   */
  phoneNumbers?: string[];

  /**
   * <p>A <code>NextToken</code> string is returned when you call the
   *                 <code>ListPhoneNumbersOptedOut</code> action if additional records are available
   *             after the first page of results.</p>
   */
  nextToken?: string;
}

/**
 * <p>Input for ListPlatformApplications action.</p>
 */
export interface ListPlatformApplicationsInput {
  /**
   * <p>NextToken string is used when calling ListPlatformApplications action to retrieve
   *             additional records that are available after the first page results.</p>
   */
  NextToken?: string;
}

/**
 * <p>Platform application object.</p>
 */
export interface PlatformApplication {
  /**
   * <p>PlatformApplicationArn for platform application object.</p>
   */
  PlatformApplicationArn?: string;

  /**
   * <p>Attributes for platform application object.</p>
   */
  Attributes?: Record<string, string>;
}

/**
 * <p>Response for ListPlatformApplications action.</p>
 */
export interface ListPlatformApplicationsResponse {
  /**
   * <p>Platform applications returned when calling ListPlatformApplications action.</p>
   */
  PlatformApplications?: PlatformApplication[];

  /**
   * <p>NextToken string is returned when calling ListPlatformApplications action if
   *             additional records are available after the first page results.</p>
   */
  NextToken?: string;
}

export interface ListSMSSandboxPhoneNumbersInput {
  /**
   * <p>Token that the previous <code>ListSMSSandboxPhoneNumbersInput</code> request
   *             returns.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of phone numbers to return.</p>
   */
  MaxResults?: number;
}

export enum SMSSandboxPhoneNumberVerificationStatus {
  Pending = "Pending",
  Verified = "Verified",
}

/**
 * <p>A verified or pending destination phone number in the SMS sandbox.</p>
 *         <p>When you start using Amazon SNS to send SMS messages, your Amazon Web Services account is in the
 *                 <i>SMS sandbox</i>. The SMS sandbox provides a safe environment for
 *                 you to try Amazon SNS features without risking your reputation as an SMS sender. While your
 *                 Amazon Web Services account is in the SMS sandbox, you can use all of the features of Amazon SNS. However, you can send
 *                 SMS messages only to verified destination phone numbers. For more information, including how to
 *                 move out of the sandbox to send messages without restrictions,
 *                 see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">SMS sandbox</a> in
 *                 the <i>Amazon SNS Developer Guide</i>.</p>
 */
export interface SMSSandboxPhoneNumber {
  /**
   * <p>The destination phone number.</p>
   */
  PhoneNumber?: string;

  /**
   * <p>The destination phone number's verification status.</p>
   */
  Status?: SMSSandboxPhoneNumberVerificationStatus | string;
}

export interface ListSMSSandboxPhoneNumbersResult {
  /**
   * <p>A list of the calling account's pending and verified phone numbers.</p>
   */
  PhoneNumbers: SMSSandboxPhoneNumber[] | undefined;

  /**
   * <p>A <code>NextToken</code> string is returned when you call the
   *                 <code>ListSMSSandboxPhoneNumbersInput</code> operation if additional pages of
   *             records are available.</p>
   */
  NextToken?: string;
}

/**
 * <p>Input for ListSubscriptions action.</p>
 */
export interface ListSubscriptionsInput {
  /**
   * <p>Token returned by the previous <code>ListSubscriptions</code> request.</p>
   */
  NextToken?: string;
}

/**
 * <p>A wrapper type for the attributes of an Amazon SNS subscription.</p>
 */
export interface Subscription {
  /**
   * <p>The subscription's ARN.</p>
   */
  SubscriptionArn?: string;

  /**
   * <p>The subscription's owner.</p>
   */
  Owner?: string;

  /**
   * <p>The subscription's protocol.</p>
   */
  Protocol?: string;

  /**
   * <p>The subscription's endpoint (format depends on the protocol).</p>
   */
  Endpoint?: string;

  /**
   * <p>The ARN of the subscription's topic.</p>
   */
  TopicArn?: string;
}

/**
 * <p>Response for ListSubscriptions action</p>
 */
export interface ListSubscriptionsResponse {
  /**
   * <p>A list of subscriptions.</p>
   */
  Subscriptions?: Subscription[];

  /**
   * <p>Token to pass along to the next <code>ListSubscriptions</code> request. This element
   *             is returned if there are more subscriptions to retrieve.</p>
   */
  NextToken?: string;
}

/**
 * <p>Input for ListSubscriptionsByTopic action.</p>
 */
export interface ListSubscriptionsByTopicInput {
  /**
   * <p>The ARN of the topic for which you wish to find subscriptions.</p>
   */
  TopicArn: string | undefined;

  /**
   * <p>Token returned by the previous <code>ListSubscriptionsByTopic</code> request.</p>
   */
  NextToken?: string;
}

/**
 * <p>Response for ListSubscriptionsByTopic action.</p>
 */
export interface ListSubscriptionsByTopicResponse {
  /**
   * <p>A list of subscriptions.</p>
   */
  Subscriptions?: Subscription[];

  /**
   * <p>Token to pass along to the next <code>ListSubscriptionsByTopic</code> request. This
   *             element is returned if there are more subscriptions to retrieve.</p>
   */
  NextToken?: string;
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The ARN of the topic for which to list tags.</p>
   */
  ResourceArn: string | undefined;
}

export interface ListTagsForResourceResponse {
  /**
   * <p>The tags associated with the specified topic.</p>
   */
  Tags?: Tag[];
}

export interface ListTopicsInput {
  /**
   * <p>Token returned by the previous <code>ListTopics</code> request.</p>
   */
  NextToken?: string;
}

/**
 * <p>A wrapper type for the topic's Amazon Resource Name (ARN). To retrieve a topic's
 *             attributes, use <code>GetTopicAttributes</code>.</p>
 */
export interface Topic {
  /**
   * <p>The topic's ARN.</p>
   */
  TopicArn?: string;
}

/**
 * <p>Response for ListTopics action.</p>
 */
export interface ListTopicsResponse {
  /**
   * <p>A list of topic ARNs.</p>
   */
  Topics?: Topic[];

  /**
   * <p>Token to pass along to the next <code>ListTopics</code> request. This element is
   *             returned if there are additional topics to retrieve.</p>
   */
  NextToken?: string;
}

/**
 * <p>Input for the OptInPhoneNumber action.</p>
 */
export interface OptInPhoneNumberInput {
  /**
   * <p>The phone number to opt in. Use E.164 format.</p>
   */
  phoneNumber: string | undefined;
}

/**
 * <p>The response for the OptInPhoneNumber action.</p>
 */
export interface OptInPhoneNumberResponse {}

/**
 * <p>Exception error indicating endpoint disabled.</p>
 */
export class EndpointDisabledException extends __BaseException {
  readonly name: "EndpointDisabledException" = "EndpointDisabledException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EndpointDisabledException, __BaseException>) {
    super({
      name: "EndpointDisabledException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, EndpointDisabledException.prototype);
  }
}

/**
 * <p>Indicates that a request parameter does not comply with the associated constraints.</p>
 */
export class InvalidParameterValueException extends __BaseException {
  readonly name: "InvalidParameterValueException" = "InvalidParameterValueException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidParameterValueException, __BaseException>) {
    super({
      name: "InvalidParameterValueException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidParameterValueException.prototype);
  }
}

/**
 * <p>The ciphertext references a key that doesn't exist or that you don't have access
 *             to.</p>
 */
export class KMSAccessDeniedException extends __BaseException {
  readonly name: "KMSAccessDeniedException" = "KMSAccessDeniedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<KMSAccessDeniedException, __BaseException>) {
    super({
      name: "KMSAccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, KMSAccessDeniedException.prototype);
  }
}

/**
 * <p>The request was rejected because the specified customer master key (CMK) isn't
 *             enabled.</p>
 */
export class KMSDisabledException extends __BaseException {
  readonly name: "KMSDisabledException" = "KMSDisabledException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<KMSDisabledException, __BaseException>) {
    super({
      name: "KMSDisabledException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, KMSDisabledException.prototype);
  }
}

/**
 * <p>The request was rejected because the state of the specified resource isn't valid for
 *             this request. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use of a
 *                 Customer Master Key</a> in the <i>Key Management Service Developer
 *                 Guide</i>.</p>
 */
export class KMSInvalidStateException extends __BaseException {
  readonly name: "KMSInvalidStateException" = "KMSInvalidStateException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<KMSInvalidStateException, __BaseException>) {
    super({
      name: "KMSInvalidStateException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, KMSInvalidStateException.prototype);
  }
}

/**
 * <p>The request was rejected because the specified entity or resource can't be
 *             found.</p>
 */
export class KMSNotFoundException extends __BaseException {
  readonly name: "KMSNotFoundException" = "KMSNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<KMSNotFoundException, __BaseException>) {
    super({
      name: "KMSNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, KMSNotFoundException.prototype);
  }
}

/**
 * <p>The Amazon Web Services access key ID needs a subscription for the service.</p>
 */
export class KMSOptInRequired extends __BaseException {
  readonly name: "KMSOptInRequired" = "KMSOptInRequired";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<KMSOptInRequired, __BaseException>) {
    super({
      name: "KMSOptInRequired",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, KMSOptInRequired.prototype);
  }
}

/**
 * <p>The request was denied due to request throttling. For more information about
 *             throttling, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/limits.html#requests-per-second">Limits</a> in
 *             the <i>Key Management Service Developer Guide.</i>
 *          </p>
 */
export class KMSThrottlingException extends __BaseException {
  readonly name: "KMSThrottlingException" = "KMSThrottlingException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<KMSThrottlingException, __BaseException>) {
    super({
      name: "KMSThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, KMSThrottlingException.prototype);
  }
}

/**
 * <p>Exception error indicating platform application disabled.</p>
 */
export class PlatformApplicationDisabledException extends __BaseException {
  readonly name: "PlatformApplicationDisabledException" = "PlatformApplicationDisabledException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PlatformApplicationDisabledException, __BaseException>) {
    super({
      name: "PlatformApplicationDisabledException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PlatformApplicationDisabledException.prototype);
  }
}

/**
 * <p>The user-specified message attribute value. For string data types, the value attribute
 *             has the same restrictions on the content as the message body. For more information, see
 *             <a href="https://docs.aws.amazon.com/sns/latest/api/API_Publish.html">Publish</a>.</p>
 *         <p>Name, type, and value must not be empty or null. In addition, the message body should
 *             not be empty or null. All parts of the message attribute, including name, type, and
 *             value, are included in the message size restriction, which is currently 256 KB (262,144
 *             bytes). For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMessageAttributes.html">Amazon SNS message attributes</a> and
 *             <a href="https://docs.aws.amazon.com/sns/latest/dg/sms_publish-to-phone.html">Publishing
 *                 to a mobile phone</a> in the <i>Amazon SNS Developer Guide.</i>
 *          </p>
 */
export interface MessageAttributeValue {
  /**
   * <p>Amazon SNS supports the following logical data types: String, String.Array, Number, and
   *             Binary. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMessageAttributes.html#SNSMessageAttributes.DataTypes">Message
   *                 Attribute Data Types</a>.</p>
   */
  DataType: string | undefined;

  /**
   * <p>Strings are Unicode with UTF8 binary encoding. For a list of code values, see <a href="https://en.wikipedia.org/wiki/ASCII#ASCII_printable_characters">ASCII Printable
   *             Characters</a>.</p>
   */
  StringValue?: string;

  /**
   * <p>Binary type attributes can store any binary data, for example, compressed data,
   *             encrypted data, or images.</p>
   */
  BinaryValue?: Uint8Array;
}

/**
 * <p>Input for Publish action.</p>
 */
export interface PublishInput {
  /**
   * <p>The topic you want to publish to.</p>
   *         <p>If you don't specify a value for the <code>TopicArn</code> parameter, you must specify
   *             a value for the <code>PhoneNumber</code> or <code>TargetArn</code> parameters.</p>
   */
  TopicArn?: string;

  /**
   * <p>If you don't specify a value for the <code>TargetArn</code> parameter, you must
   *             specify a value for the <code>PhoneNumber</code> or <code>TopicArn</code>
   *             parameters.</p>
   */
  TargetArn?: string;

  /**
   * <p>The phone number to which you want to deliver an SMS message. Use E.164 format.</p>
   *         <p>If you don't specify a value for the <code>PhoneNumber</code> parameter, you must
   *             specify a value for the <code>TargetArn</code> or <code>TopicArn</code>
   *             parameters.</p>
   */
  PhoneNumber?: string;

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
   * <p>Optional parameter to be used as the "Subject" line when the message is delivered to
   *             email endpoints. This field will also be included, if present, in the standard JSON
   *             messages delivered to other endpoints.</p>
   *         <p>Constraints: Subjects must be ASCII text that begins with a letter, number, or
   *             punctuation mark; must not include line breaks or control characters; and must be less
   *             than 100 characters long.</p>
   */
  Subject?: string;

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
   * <p>Message attributes for Publish action.</p>
   */
  MessageAttributes?: Record<string, MessageAttributeValue>;

  /**
   * <p>This parameter applies only to FIFO (first-in-first-out) topics. The
   *                 <code>MessageDeduplicationId</code> can contain up to 128 alphanumeric characters
   *                 <code>(a-z, A-Z, 0-9)</code> and punctuation
   *                 <code>(!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~)</code>.</p>
   *         <p>Every message must have a unique <code>MessageDeduplicationId</code>, which is a token
   *             used for deduplication of sent messages. If a message with a particular
   *                 <code>MessageDeduplicationId</code> is sent successfully, any message sent with the
   *             same <code>MessageDeduplicationId</code> during the 5-minute deduplication interval is
   *             treated as a duplicate. </p>
   *         <p>If the topic has <code>ContentBasedDeduplication</code> set, the system generates a
   *                 <code>MessageDeduplicationId</code> based on the contents of the message. Your
   *                 <code>MessageDeduplicationId</code> overrides the generated one.</p>
   */
  MessageDeduplicationId?: string;

  /**
   * <p>This parameter applies only to FIFO (first-in-first-out) topics. The
   *                 <code>MessageGroupId</code> can contain up to 128 alphanumeric characters
   *                 <code>(a-z, A-Z, 0-9)</code> and punctuation
   *                 <code>(!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~)</code>.</p>
   *         <p>The <code>MessageGroupId</code> is a tag that specifies that a message belongs to a
   *             specific message group. Messages that belong to the same message group are processed in
   *             a FIFO manner (however, messages in different message groups might be processed out of
   *             order). Every message must include a <code>MessageGroupId</code>.</p>
   */
  MessageGroupId?: string;
}

/**
 * <p>Response for Publish action.</p>
 */
export interface PublishResponse {
  /**
   * <p>Unique identifier assigned to the published message.</p>
   *         <p>Length Constraint: Maximum 100 characters</p>
   */
  MessageId?: string;

  /**
   * <p>This response element applies only to FIFO (first-in-first-out) topics. </p>
   *         <p>The sequence number is a large, non-consecutive number that Amazon SNS assigns to each
   *             message. The length of <code>SequenceNumber</code> is 128 bits.
   *                 <code>SequenceNumber</code> continues to increase for each
   *                 <code>MessageGroupId</code>.</p>
   */
  SequenceNumber?: string;
}

/**
 * <p>Two or more batch entries in the request have the same <code>Id</code>.</p>
 */
export class BatchEntryIdsNotDistinctException extends __BaseException {
  readonly name: "BatchEntryIdsNotDistinctException" = "BatchEntryIdsNotDistinctException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BatchEntryIdsNotDistinctException, __BaseException>) {
    super({
      name: "BatchEntryIdsNotDistinctException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BatchEntryIdsNotDistinctException.prototype);
  }
}

/**
 * <p>The length of all the batch messages put together is more than the limit.</p>
 */
export class BatchRequestTooLongException extends __BaseException {
  readonly name: "BatchRequestTooLongException" = "BatchRequestTooLongException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BatchRequestTooLongException, __BaseException>) {
    super({
      name: "BatchRequestTooLongException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BatchRequestTooLongException.prototype);
  }
}

/**
 * <p>The batch request doesn't contain any entries.</p>
 */
export class EmptyBatchRequestException extends __BaseException {
  readonly name: "EmptyBatchRequestException" = "EmptyBatchRequestException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EmptyBatchRequestException, __BaseException>) {
    super({
      name: "EmptyBatchRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, EmptyBatchRequestException.prototype);
  }
}

/**
 * <p>The <code>Id</code> of a batch entry in a batch request doesn't abide by the specification. </p>
 */
export class InvalidBatchEntryIdException extends __BaseException {
  readonly name: "InvalidBatchEntryIdException" = "InvalidBatchEntryIdException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidBatchEntryIdException, __BaseException>) {
    super({
      name: "InvalidBatchEntryIdException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidBatchEntryIdException.prototype);
  }
}

/**
 * <p>Contains the details of a single Amazon SNS message along with an <code>Id</code> that identifies a message within the batch. </p>
 */
export interface PublishBatchRequestEntry {
  /**
   * <p>An identifier for the message in this batch.</p>
   *         <note>
   *             <p>The <code>Ids</code> of a batch request must be unique within a request. </p>
   *             <p>This identifier can have up to 80 characters. The following characters are accepted: alphanumeric characters, hyphens(-), and underscores (_). </p>
   *         </note>
   */
  Id: string | undefined;

  /**
   * <p>The body of the message.</p>
   */
  Message: string | undefined;

  /**
   * <p>The subject of the batch message.</p>
   */
  Subject?: string;

  /**
   * <p>Set <code>MessageStructure</code> to <code>json</code> if you want to send a different message for each protocol. For example, using one publish action, you can send a short message to your SMS subscribers and a longer message to your email subscribers. If you set <code>MessageStructure</code> to <code>json</code>, the value of the <code>Message</code> parameter must: </p>
   *         <ul>
   *             <li>
   *                <p>be a syntactically valid JSON object; and</p>
   *             </li>
   *             <li>
   *                <p>contain at least a top-level JSON key of "default" with a value that is a string.</p>
   *             </li>
   *          </ul>
   *         <p>You can define other top-level keys that define the message you want to send to a
   *             specific transport protocol (e.g. http). </p>
   */
  MessageStructure?: string;

  /**
   * <p>Each message attribute consists of a <code>Name</code>, <code>Type</code>, and <code>Value</code>. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-message-attributes.html">Amazon SNS message attributes</a> in the Amazon SNS Developer Guide.</p>
   */
  MessageAttributes?: Record<string, MessageAttributeValue>;

  /**
   * <p>This parameter applies only to FIFO (first-in-first-out) topics.</p>
   *         <p>The token used for deduplication of messages within a 5-minute minimum deduplication interval. If a message with a particular <code>MessageDeduplicationId</code> is sent successfully, subsequent messages with the same <code>MessageDeduplicationId</code> are accepted successfully but aren't delivered.</p>
   *         <ul>
   *             <li>
   *                <p>Every message must have a unique <code>MessageDeduplicationId</code>.</p>
   *                 <ul>
   *                   <li>
   *                      <p>You may provide a <code>MessageDeduplicationId</code> explicitly.</p>
   *                   </li>
   *                   <li>
   *                      <p>If you aren't able to provide a <code>MessageDeduplicationId</code> and you enable <code>ContentBasedDeduplication</code> for your topic, Amazon SNS uses a SHA-256 hash to generate the <code>MessageDeduplicationId</code> using the body of the message (but not the attributes of the message).</p>
   *                   </li>
   *                   <li>
   *                      <p>If you don't provide a <code>MessageDeduplicationId</code> and the topic doesn't have <code>ContentBasedDeduplication</code> set, the action fails with an error.</p>
   *                   </li>
   *                   <li>
   *                      <p>If the topic has a <code>ContentBasedDeduplication</code> set, your
   *                                 <code>MessageDeduplicationId</code> overrides the generated one. </p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>When <code>ContentBasedDeduplication</code> is in effect, messages with identical content sent within the deduplication interval are treated as duplicates and only one copy of the message is delivered.</p>
   *             </li>
   *             <li>
   *                <p>If you send one message with <code>ContentBasedDeduplication</code> enabled, and then another
   *                     message with a <code>MessageDeduplicationId</code> that is the same as the one
   *                     generated for the first <code>MessageDeduplicationId</code>, the two messages
   *                     are treated as duplicates and only one copy of the message is delivered. </p>
   *             </li>
   *          </ul>
   *         <note>
   *             <p>The <code>MessageDeduplicationId</code> is available to the consumer of the message (this can be useful for troubleshooting delivery issues).</p>
   *             <p>If a message is sent successfully but the acknowledgement is lost and the message is resent with the same <code>MessageDeduplicationId</code> after the deduplication interval, Amazon SNS can't detect duplicate messages. </p>
   *             <p>Amazon SNS continues to keep track of the message deduplication ID even after the message is received and deleted. </p>
   *         </note>
   *         <p>The length of <code>MessageDeduplicationId</code> is 128 characters.</p>
   *         <p>
   *             <code>MessageDeduplicationId</code> can contain alphanumeric characters <code>(a-z, A-Z, 0-9)</code> and punctuation <code>(!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~)</code>.</p>
   */
  MessageDeduplicationId?: string;

  /**
   * <p>This parameter applies only to FIFO (first-in-first-out) topics.</p>
   *         <p>The tag that specifies that a message belongs to a specific message group. Messages that belong to the same message group are processed in a FIFO manner (however, messages in different message groups might be processed out of order). To interleave multiple ordered streams within a single topic, use <code>MessageGroupId</code> values (for example, session data for multiple users). In this scenario, multiple consumers can process the topic, but the session data of each user is processed in a FIFO fashion. </p>
   *         <p>You must associate a non-empty <code>MessageGroupId</code> with a message. If you don't provide a <code>MessageGroupId</code>, the action fails. </p>
   *         <p>The length of <code>MessageGroupId</code> is 128 characters.</p>
   *         <p>
   *             <code>MessageGroupId</code> can contain alphanumeric characters <code>(a-z, A-Z, 0-9)</code> and punctuation <code>(!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~)</code>.</p>
   *
   *
   *         <important>
   *             <p>
   *                <code>MessageGroupId</code> is required for FIFO topics. You can't use it for standard topics. </p>
   *          </important>
   */
  MessageGroupId?: string;
}

export interface PublishBatchInput {
  /**
   * <p>The Amazon resource name (ARN) of the topic you want to batch publish to.</p>
   */
  TopicArn: string | undefined;

  /**
   * <p>A list of <code>PublishBatch</code> request entries to be sent to the SNS
   *             topic.</p>
   */
  PublishBatchRequestEntries: PublishBatchRequestEntry[] | undefined;
}

/**
 * <p>Gives a detailed description of failed messages in the batch.</p>
 */
export interface BatchResultErrorEntry {
  /**
   * <p>The <code>Id</code> of an entry in a batch request</p>
   */
  Id: string | undefined;

  /**
   * <p>An error code representing why the action failed on this entry.</p>
   */
  Code: string | undefined;

  /**
   * <p>A message explaining why the action failed on this entry.</p>
   */
  Message?: string;

  /**
   * <p>Specifies whether the error happened due to the caller of the batch API action.</p>
   */
  SenderFault: boolean | undefined;
}

/**
 * <p>Encloses data related to a successful message in a batch request for topic.</p>
 */
export interface PublishBatchResultEntry {
  /**
   * <p>The <code>Id</code> of an entry in a batch request.</p>
   */
  Id?: string;

  /**
   * <p>An identifier for the message.</p>
   */
  MessageId?: string;

  /**
   * <p>This parameter applies only to FIFO (first-in-first-out) topics.</p>
   *         <p>The large, non-consecutive number that Amazon SNS assigns to each message.</p>
   *         <p>The length of <code>SequenceNumber</code> is 128 bits. <code>SequenceNumber</code> continues to increase for a particular <code>MessageGroupId</code>.</p>
   */
  SequenceNumber?: string;
}

export interface PublishBatchResponse {
  /**
   * <p>A list of successful <code>PublishBatch</code> responses.</p>
   */
  Successful?: PublishBatchResultEntry[];

  /**
   * <p>A list of failed <code>PublishBatch</code> responses. </p>
   */
  Failed?: BatchResultErrorEntry[];
}

/**
 * <p>The batch request contains more entries than permissible.</p>
 */
export class TooManyEntriesInBatchRequestException extends __BaseException {
  readonly name: "TooManyEntriesInBatchRequestException" = "TooManyEntriesInBatchRequestException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyEntriesInBatchRequestException, __BaseException>) {
    super({
      name: "TooManyEntriesInBatchRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyEntriesInBatchRequestException.prototype);
  }
}

export interface PutDataProtectionPolicyInput {
  /**
   * <p>The ARN of the topic whose <code>DataProtectionPolicy</code> you want to add or
   *             update.</p>
   *         <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names
   *                 (ARNs)</a> in the Amazon Web Services General Reference.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The JSON serialization of the topic's <code>DataProtectionPolicy</code>.</p>
   *         <p>The <code>DataProtectionPolicy</code> must be in JSON string format.</p>
   *         <p>Length Constraints: Maximum length of 30,720.</p>
   */
  DataProtectionPolicy: string | undefined;
}

/**
 * <p>Input for RemovePermission action.</p>
 */
export interface RemovePermissionInput {
  /**
   * <p>The ARN of the topic whose access control policy you wish to modify.</p>
   */
  TopicArn: string | undefined;

  /**
   * <p>The unique label of the statement you want to remove.</p>
   */
  Label: string | undefined;
}

/**
 * <p>Input for SetEndpointAttributes action.</p>
 */
export interface SetEndpointAttributesInput {
  /**
   * <p>EndpointArn used for SetEndpointAttributes action.</p>
   */
  EndpointArn: string | undefined;

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
  Attributes: Record<string, string> | undefined;
}

/**
 * <p>Input for SetPlatformApplicationAttributes action.</p>
 */
export interface SetPlatformApplicationAttributesInput {
  /**
   * <p>PlatformApplicationArn for SetPlatformApplicationAttributes action.</p>
   */
  PlatformApplicationArn: string | undefined;

  /**
   * <p>A map of the platform application attributes. Attributes in this map include the
   *             following:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>PlatformCredential</code> – The credential received from the
   *                     notification service.</p>
   *                 <ul>
   *                   <li>
   *                         <p>For ADM, <code>PlatformCredential</code>is client secret.</p>
   *                     </li>
   *                   <li>
   *                         <p>For Apple Services using certificate credentials,
   *                                 <code>PlatformCredential</code> is private key.</p>
   *                     </li>
   *                   <li>
   *                         <p>For Apple Services using token credentials,
   *                                 <code>PlatformCredential</code> is signing key.</p>
   *                     </li>
   *                   <li>
   *                         <p>For GCM (Firebase Cloud Messaging), <code>PlatformCredential</code> is
   *                             API key. </p>
   *                     </li>
   *                </ul>
   *             </li>
   *          </ul>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>PlatformPrincipal</code> – The principal received from the
   *                     notification service.</p>
   *                 <ul>
   *                   <li>
   *                         <p>For ADM, <code>PlatformPrincipal</code>is client id.</p>
   *                     </li>
   *                   <li>
   *                         <p>For Apple Services using certificate credentials,
   *                                 <code>PlatformPrincipal</code> is SSL certificate.</p>
   *                     </li>
   *                   <li>
   *                         <p>For Apple Services using token credentials,
   *                                 <code>PlatformPrincipal</code> is signing key ID.</p>
   *                     </li>
   *                   <li>
   *                         <p>For GCM (Firebase Cloud Messaging), there is no
   *                                 <code>PlatformPrincipal</code>. </p>
   *                     </li>
   *                </ul>
   *             </li>
   *          </ul>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>EventEndpointCreated</code> – Topic ARN to which
   *                         <code>EndpointCreated</code> event notifications are sent.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>EventEndpointDeleted</code> – Topic ARN to which
   *                         <code>EndpointDeleted</code> event notifications are sent.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>EventEndpointUpdated</code> – Topic ARN to which
   *                         <code>EndpointUpdate</code> event notifications are sent.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>EventDeliveryFailure</code> – Topic ARN to which
   *                         <code>DeliveryFailure</code> event notifications are sent upon Direct
   *                     Publish delivery failure (permanent) to one of the application's
   *                     endpoints.</p>
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
   *         <p>The following attributes only apply to <code>APNs</code> token-based
   *             authentication:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>ApplePlatformTeamID</code> – The identifier that's assigned to your
   *                     Apple developer account team.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>ApplePlatformBundleID</code> – The bundle identifier that's assigned to
   *                     your iOS app.</p>
   *             </li>
   *          </ul>
   */
  Attributes: Record<string, string> | undefined;
}

/**
 * <p>The input for the SetSMSAttributes action.</p>
 */
export interface SetSMSAttributesInput {
  /**
   * <p>The default settings for sending SMS messages from your Amazon Web Services account. You can set
   *             values for the following attribute names:</p>
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
   *                     transactions, such as one-time passcodes for multi-factor authentication. Amazon SNS
   *                     optimizes the message delivery to achieve the highest reliability.</p>
   *             </li>
   *          </ul>
   *         <p>
   *             <code>UsageReportS3Bucket</code> – The name of the Amazon S3 bucket to receive daily SMS
   *             usage reports from Amazon SNS. Each day, Amazon SNS will deliver a usage report as a CSV file to
   *             the bucket. The report includes the following information for each SMS message that was
   *             successfully delivered by your Amazon Web Services account:</p>
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
   *             principal to perform the <code>s3:PutObject</code> and <code>s3:GetBucketLocation</code>
   *             actions.</p>
   *         <p>For an example bucket policy and usage report, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sms_stats.html">Monitoring SMS Activity</a> in the
   *                 <i>Amazon SNS Developer Guide</i>.</p>
   */
  attributes: Record<string, string> | undefined;
}

/**
 * <p>The response for the SetSMSAttributes action.</p>
 */
export interface SetSMSAttributesResponse {}

/**
 * <p>Input for SetSubscriptionAttributes action.</p>
 */
export interface SetSubscriptionAttributesInput {
  /**
   * <p>The ARN of the subscription to modify.</p>
   */
  SubscriptionArn: string | undefined;

  /**
   * <p>A map of attributes with their corresponding values.</p>
   *         <p>The following lists the names, descriptions, and values of the special request
   *             parameters that this action uses:</p>
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
   *                   <code>FilterPolicyScope</code> – This attribute lets you choose the filtering scope by using one of the following string value types:</p>
   *                 <ul>
   *                   <li>
   *                      <p>
   *                         <code>MessageAttributes</code> (default) – The filter is applied on the message attributes.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>MessageBody</code> – The filter is applied on the message body.</p>
   *                   </li>
   *                </ul>
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
   *
   *
   *         <p>The following attribute applies only to Amazon Kinesis Data Firehose delivery stream subscriptions:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SubscriptionRoleArn</code> – The ARN of the IAM role that has the following:</p>
   *                 <ul>
   *                   <li>
   *                         <p>Permission to write to the Kinesis Data Firehose delivery stream</p>
   *                     </li>
   *                   <li>
   *                         <p>Amazon SNS listed as a trusted entity</p>
   *                     </li>
   *                </ul>
   *                 <p>Specifying a valid ARN for this attribute is required for Kinesis Data Firehose delivery stream subscriptions.
   *                 For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-firehose-as-subscriber.html">Fanout
   *                     to Kinesis Data Firehose delivery streams</a> in the <i>Amazon SNS Developer Guide</i>.</p>
   *                     </li>
   *          </ul>
   */
  AttributeName: string | undefined;

  /**
   * <p>The new value for the attribute in JSON format.</p>
   */
  AttributeValue?: string;
}

/**
 * <p>Input for SetTopicAttributes action.</p>
 */
export interface SetTopicAttributesInput {
  /**
   * <p>The ARN of the topic to modify.</p>
   */
  TopicArn: string | undefined;

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
   *             <li>
   *                 <p>
   *                   <code>TracingConfig</code> – Tracing mode of an Amazon SNS topic. By default
   *                         <code>TracingConfig</code> is set to <code>PassThrough</code>, and the topic
   *                     passes through the tracing header it receives from an Amazon SNS publisher to its
   *                     subscriptions. If set to Active, Amazon SNS will vend X-Ray segment data to topic
   *                     owner account if the sampled flag in the tracing header is true. This is only
   *                     supported on standard topics.</p>
   *             </li>
   *          </ul>
   *
   *         <p>The following attribute applies only to <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-server-side-encryption.html">server-side-encryption</a>:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>KmsMasterKeyId</code> – The ID of an Amazon Web Services managed customer master
   *                     key (CMK) for Amazon SNS or a custom CMK. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-server-side-encryption.html#sse-key-terms">Key
   *                         Terms</a>. For more examples, see <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_DescribeKey.html#API_DescribeKey_RequestParameters">KeyId</a> in the <i>Key Management Service API Reference</i>. </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>SignatureVersion</code> – The signature version corresponds to the
   *                     hashing algorithm used while creating the signature of the notifications,
   *                     subscription confirmations, or unsubscribe confirmation messages sent by
   *                     Amazon SNS.</p>
   *             </li>
   *          </ul>
   *
   *
   *         <p>The following attribute applies only to <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-fifo-topics.html">FIFO topics</a>:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                     <code>ContentBasedDeduplication</code> – Enables content-based deduplication for
   *                     FIFO topics.</p>
   *
   *                 <ul>
   *                   <li>
   *                         <p>By default, <code>ContentBasedDeduplication</code> is set to <code>false</code>.
   *                             If you create a FIFO topic and this attribute is <code>false</code>, you must
   *                             specify a value for the <code>MessageDeduplicationId</code> parameter for the
   *                             <a href="https://docs.aws.amazon.com/sns/latest/api/API_Publish.html">Publish</a> action. </p>
   *                     </li>
   *                   <li>
   *                         <p>When you set <code>ContentBasedDeduplication</code> to <code>true</code>,
   *                             Amazon SNS uses a SHA-256 hash to generate the <code>MessageDeduplicationId</code> using
   *                             the body of the message (but not the attributes of the message).</p>
   *                         <p>(Optional) To override the generated value, you can specify a value
   *                             for the <code>MessageDeduplicationId</code> parameter for the <code>Publish</code>
   *                             action.</p>
   *                      </li>
   *                </ul>
   *             </li>
   *          </ul>
   */
  AttributeName: string | undefined;

  /**
   * <p>The new value for the attribute.</p>
   */
  AttributeValue?: string;
}

/**
 * <p>Input for Subscribe action.</p>
 */
export interface SubscribeInput {
  /**
   * <p>The ARN of the topic you want to subscribe to.</p>
   */
  TopicArn: string | undefined;

  /**
   * <p>The protocol that you want to use. Supported protocols include:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>http</code> – delivery of JSON-encoded message via HTTP
   *                     POST</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>https</code> – delivery of JSON-encoded message via HTTPS
   *                     POST</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>email</code> – delivery of message via SMTP</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>email-json</code> – delivery of JSON-encoded message via
   *                     SMTP</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>sms</code> – delivery of message via SMS</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>sqs</code> – delivery of JSON-encoded message to an Amazon SQS
   *                     queue</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>application</code> – delivery of JSON-encoded message to an
   *                     EndpointArn for a mobile app and device</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>lambda</code> – delivery of JSON-encoded message to an Lambda
   *                     function</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>firehose</code> – delivery of JSON-encoded message to an Amazon
   *                     Kinesis Data Firehose delivery stream.</p>
   *             </li>
   *          </ul>
   */
  Protocol: string | undefined;

  /**
   * <p>The endpoint that you want to receive notifications. Endpoints vary by
   *             protocol:</p>
   *         <ul>
   *             <li>
   *                 <p>For the <code>http</code> protocol, the (public) endpoint is a URL beginning
   *                     with <code>http://</code>.</p>
   *             </li>
   *             <li>
   *                 <p>For the <code>https</code> protocol, the (public) endpoint is a URL beginning
   *                     with <code>https://</code>.</p>
   *             </li>
   *             <li>
   *                 <p>For the <code>email</code> protocol, the endpoint is an email address.</p>
   *             </li>
   *             <li>
   *                 <p>For the <code>email-json</code> protocol, the endpoint is an email
   *                     address.</p>
   *             </li>
   *             <li>
   *                 <p>For the <code>sms</code> protocol, the endpoint is a phone number of an
   *                     SMS-enabled device.</p>
   *             </li>
   *             <li>
   *                 <p>For the <code>sqs</code> protocol, the endpoint is the ARN of an Amazon SQS
   *                     queue.</p>
   *             </li>
   *             <li>
   *                 <p>For the <code>application</code> protocol, the endpoint is the EndpointArn of
   *                     a mobile app and device.</p>
   *             </li>
   *             <li>
   *                 <p>For the <code>lambda</code> protocol, the endpoint is the ARN of an Lambda
   *                     function.</p>
   *             </li>
   *             <li>
   *                 <p>For the <code>firehose</code> protocol, the endpoint is the ARN of an Amazon
   *                     Kinesis Data Firehose delivery stream.</p>
   *             </li>
   *          </ul>
   */
  Endpoint?: string;

  /**
   * <p>A map of attributes with their corresponding values.</p>
   *         <p>The following lists the names, descriptions, and values of the special request
   *             parameters that the <code>Subscribe</code> action uses:</p>
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
   *                   <code>FilterPolicyScope</code> – This attribute lets you choose the filtering scope by using one of the following string value types:</p>
   *                 <ul>
   *                   <li>
   *                      <p>
   *                         <code>MessageAttributes</code> (default) – The filter is applied on the message attributes.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>MessageBody</code> – The filter is applied on the message body.</p>
   *                   </li>
   *                </ul>
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
   *
   *
   *         <p>The following attribute applies only to Amazon Kinesis Data Firehose delivery stream subscriptions:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SubscriptionRoleArn</code> – The ARN of the IAM role that has the following:</p>
   *                 <ul>
   *                   <li>
   *                         <p>Permission to write to the Kinesis Data Firehose delivery stream</p>
   *                     </li>
   *                   <li>
   *                         <p>Amazon SNS listed as a trusted entity</p>
   *                     </li>
   *                </ul>
   *                 <p>Specifying a valid ARN for this attribute is required for Kinesis Data Firehose delivery stream subscriptions.
   *                 For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-firehose-as-subscriber.html">Fanout
   *                     to Kinesis Data Firehose delivery streams</a> in the <i>Amazon SNS Developer Guide</i>.</p>
   *                     </li>
   *          </ul>
   */
  Attributes?: Record<string, string>;

  /**
   * <p>Sets whether the response from the <code>Subscribe</code> request includes the
   *             subscription ARN, even if the subscription is not yet confirmed.</p>
   *         <p>If you set this parameter to <code>true</code>, the response includes the ARN in all
   *             cases, even if the subscription is not yet confirmed. In addition to the ARN for
   *             confirmed subscriptions, the response also includes the <code>pending
   *                 subscription</code> ARN value for subscriptions that aren't yet confirmed. A
   *             subscription becomes confirmed when the subscriber calls the
   *                 <code>ConfirmSubscription</code> action with a confirmation token.</p>
   *         <p></p>
   *         <p>The default value is <code>false</code>.</p>
   */
  ReturnSubscriptionArn?: boolean;
}

/**
 * <p>Response for Subscribe action.</p>
 */
export interface SubscribeResponse {
  /**
   * <p>The ARN of the subscription if it is confirmed, or the string "pending confirmation"
   *             if the subscription requires confirmation. However, if the API request parameter
   *                 <code>ReturnSubscriptionArn</code> is true, then the value is always the
   *             subscription ARN, even if the subscription requires confirmation.</p>
   */
  SubscriptionArn?: string;
}

export interface TagResourceRequest {
  /**
   * <p>The ARN of the topic to which to add tags.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tags to be added to the specified topic. A tag consists of a required key and an
   *             optional value.</p>
   */
  Tags: Tag[] | undefined;
}

export interface TagResourceResponse {}

/**
 * <p>Input for Unsubscribe action.</p>
 */
export interface UnsubscribeInput {
  /**
   * <p>The ARN of the subscription to be deleted.</p>
   */
  SubscriptionArn: string | undefined;
}

export interface UntagResourceRequest {
  /**
   * <p>The ARN of the topic from which to remove tags.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The list of tag keys to remove from the specified topic.</p>
   */
  TagKeys: string[] | undefined;
}

export interface UntagResourceResponse {}

/**
 * <p>Indicates that the one-time password (OTP) used for verification is invalid.</p>
 */
export class VerificationException extends __BaseException {
  readonly name: "VerificationException" = "VerificationException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * <p>The status of the verification error.</p>
   */
  Status: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<VerificationException, __BaseException>) {
    super({
      name: "VerificationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, VerificationException.prototype);
    this.Message = opts.Message;
    this.Status = opts.Status;
  }
}

export interface VerifySMSSandboxPhoneNumberInput {
  /**
   * <p>The destination phone number to verify.</p>
   */
  PhoneNumber: string | undefined;

  /**
   * <p>The OTP sent to the destination number from the
   *                 <code>CreateSMSSandBoxPhoneNumber</code> call.</p>
   */
  OneTimePassword: string | undefined;
}

/**
 * <p>The destination phone number's verification status.</p>
 */
export interface VerifySMSSandboxPhoneNumberResult {}

/**
 * @internal
 */
export const AddPermissionInputFilterSensitiveLog = (obj: AddPermissionInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CheckIfPhoneNumberIsOptedOutInputFilterSensitiveLog = (obj: CheckIfPhoneNumberIsOptedOutInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CheckIfPhoneNumberIsOptedOutResponseFilterSensitiveLog = (
  obj: CheckIfPhoneNumberIsOptedOutResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConfirmSubscriptionInputFilterSensitiveLog = (obj: ConfirmSubscriptionInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConfirmSubscriptionResponseFilterSensitiveLog = (obj: ConfirmSubscriptionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreatePlatformApplicationInputFilterSensitiveLog = (obj: CreatePlatformApplicationInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreatePlatformApplicationResponseFilterSensitiveLog = (obj: CreatePlatformApplicationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateEndpointResponseFilterSensitiveLog = (obj: CreateEndpointResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreatePlatformEndpointInputFilterSensitiveLog = (obj: CreatePlatformEndpointInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateSMSSandboxPhoneNumberInputFilterSensitiveLog = (obj: CreateSMSSandboxPhoneNumberInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateSMSSandboxPhoneNumberResultFilterSensitiveLog = (obj: CreateSMSSandboxPhoneNumberResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagFilterSensitiveLog = (obj: Tag): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateTopicInputFilterSensitiveLog = (obj: CreateTopicInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateTopicResponseFilterSensitiveLog = (obj: CreateTopicResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteEndpointInputFilterSensitiveLog = (obj: DeleteEndpointInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeletePlatformApplicationInputFilterSensitiveLog = (obj: DeletePlatformApplicationInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteSMSSandboxPhoneNumberInputFilterSensitiveLog = (obj: DeleteSMSSandboxPhoneNumberInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteSMSSandboxPhoneNumberResultFilterSensitiveLog = (obj: DeleteSMSSandboxPhoneNumberResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteTopicInputFilterSensitiveLog = (obj: DeleteTopicInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetDataProtectionPolicyInputFilterSensitiveLog = (obj: GetDataProtectionPolicyInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetDataProtectionPolicyResponseFilterSensitiveLog = (obj: GetDataProtectionPolicyResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetEndpointAttributesInputFilterSensitiveLog = (obj: GetEndpointAttributesInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetEndpointAttributesResponseFilterSensitiveLog = (obj: GetEndpointAttributesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetPlatformApplicationAttributesInputFilterSensitiveLog = (
  obj: GetPlatformApplicationAttributesInput
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetPlatformApplicationAttributesResponseFilterSensitiveLog = (
  obj: GetPlatformApplicationAttributesResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetSMSAttributesInputFilterSensitiveLog = (obj: GetSMSAttributesInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetSMSAttributesResponseFilterSensitiveLog = (obj: GetSMSAttributesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetSMSSandboxAccountStatusInputFilterSensitiveLog = (obj: GetSMSSandboxAccountStatusInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetSMSSandboxAccountStatusResultFilterSensitiveLog = (obj: GetSMSSandboxAccountStatusResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetSubscriptionAttributesInputFilterSensitiveLog = (obj: GetSubscriptionAttributesInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetSubscriptionAttributesResponseFilterSensitiveLog = (obj: GetSubscriptionAttributesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetTopicAttributesInputFilterSensitiveLog = (obj: GetTopicAttributesInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetTopicAttributesResponseFilterSensitiveLog = (obj: GetTopicAttributesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListEndpointsByPlatformApplicationInputFilterSensitiveLog = (
  obj: ListEndpointsByPlatformApplicationInput
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EndpointFilterSensitiveLog = (obj: Endpoint): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListEndpointsByPlatformApplicationResponseFilterSensitiveLog = (
  obj: ListEndpointsByPlatformApplicationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListOriginationNumbersRequestFilterSensitiveLog = (obj: ListOriginationNumbersRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PhoneNumberInformationFilterSensitiveLog = (obj: PhoneNumberInformation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListOriginationNumbersResultFilterSensitiveLog = (obj: ListOriginationNumbersResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListPhoneNumbersOptedOutInputFilterSensitiveLog = (obj: ListPhoneNumbersOptedOutInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListPhoneNumbersOptedOutResponseFilterSensitiveLog = (obj: ListPhoneNumbersOptedOutResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListPlatformApplicationsInputFilterSensitiveLog = (obj: ListPlatformApplicationsInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PlatformApplicationFilterSensitiveLog = (obj: PlatformApplication): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListPlatformApplicationsResponseFilterSensitiveLog = (obj: ListPlatformApplicationsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListSMSSandboxPhoneNumbersInputFilterSensitiveLog = (obj: ListSMSSandboxPhoneNumbersInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SMSSandboxPhoneNumberFilterSensitiveLog = (obj: SMSSandboxPhoneNumber): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListSMSSandboxPhoneNumbersResultFilterSensitiveLog = (obj: ListSMSSandboxPhoneNumbersResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListSubscriptionsInputFilterSensitiveLog = (obj: ListSubscriptionsInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SubscriptionFilterSensitiveLog = (obj: Subscription): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListSubscriptionsResponseFilterSensitiveLog = (obj: ListSubscriptionsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListSubscriptionsByTopicInputFilterSensitiveLog = (obj: ListSubscriptionsByTopicInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListSubscriptionsByTopicResponseFilterSensitiveLog = (obj: ListSubscriptionsByTopicResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceRequestFilterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceResponseFilterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTopicsInputFilterSensitiveLog = (obj: ListTopicsInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TopicFilterSensitiveLog = (obj: Topic): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTopicsResponseFilterSensitiveLog = (obj: ListTopicsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OptInPhoneNumberInputFilterSensitiveLog = (obj: OptInPhoneNumberInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OptInPhoneNumberResponseFilterSensitiveLog = (obj: OptInPhoneNumberResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MessageAttributeValueFilterSensitiveLog = (obj: MessageAttributeValue): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PublishInputFilterSensitiveLog = (obj: PublishInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PublishResponseFilterSensitiveLog = (obj: PublishResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PublishBatchRequestEntryFilterSensitiveLog = (obj: PublishBatchRequestEntry): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PublishBatchInputFilterSensitiveLog = (obj: PublishBatchInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchResultErrorEntryFilterSensitiveLog = (obj: BatchResultErrorEntry): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PublishBatchResultEntryFilterSensitiveLog = (obj: PublishBatchResultEntry): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PublishBatchResponseFilterSensitiveLog = (obj: PublishBatchResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutDataProtectionPolicyInputFilterSensitiveLog = (obj: PutDataProtectionPolicyInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RemovePermissionInputFilterSensitiveLog = (obj: RemovePermissionInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SetEndpointAttributesInputFilterSensitiveLog = (obj: SetEndpointAttributesInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SetPlatformApplicationAttributesInputFilterSensitiveLog = (
  obj: SetPlatformApplicationAttributesInput
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SetSMSAttributesInputFilterSensitiveLog = (obj: SetSMSAttributesInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SetSMSAttributesResponseFilterSensitiveLog = (obj: SetSMSAttributesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SetSubscriptionAttributesInputFilterSensitiveLog = (obj: SetSubscriptionAttributesInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SetTopicAttributesInputFilterSensitiveLog = (obj: SetTopicAttributesInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SubscribeInputFilterSensitiveLog = (obj: SubscribeInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SubscribeResponseFilterSensitiveLog = (obj: SubscribeResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceRequestFilterSensitiveLog = (obj: TagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceResponseFilterSensitiveLog = (obj: TagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UnsubscribeInputFilterSensitiveLog = (obj: UnsubscribeInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceRequestFilterSensitiveLog = (obj: UntagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceResponseFilterSensitiveLog = (obj: UntagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VerifySMSSandboxPhoneNumberInputFilterSensitiveLog = (obj: VerifySMSSandboxPhoneNumberInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VerifySMSSandboxPhoneNumberResultFilterSensitiveLog = (obj: VerifySMSSandboxPhoneNumberResult): any => ({
  ...obj,
});
