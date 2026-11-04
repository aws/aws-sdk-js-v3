// smithy-typescript generated code
import type {
  BehaviorOnMxFailure,
  DkimSigningAttributesOrigin,
  DkimStatus,
  ReputationEntityType,
  ScalingMode,
  SendingStatus,
  SuppressionListReason,
  SuppressionListScope,
} from "./enums";
import type {
  BulkEmailContent,
  BulkEmailEntry,
  BulkEmailEntryResult,
  ConfigurationOverrides,
  Destination,
  DkimSigningAttributes,
  DomainDeliverabilityTrackingOption,
  EmailContent,
  EmailTemplateContent,
  EventDestinationDefinition,
  ListManagementOptions,
  MessageSecurityOptions,
  MessageTag,
  Tag,
  Topic,
  TopicPreference,
} from "./models_0";

/**
 * An HTTP 200 response if the request succeeds, or an error message if the request fails.
 *
 * @public
 */
export interface PutConfigurationSetVdmOptionsResponse {}

/**
 * A request to move a dedicated IP address to a dedicated IP pool.
 *
 * @public
 */
export interface PutDedicatedIpInPoolRequest {
  /**
   * The IP address that you want to move to the dedicated IP pool. The value you specify has to be a dedicated IP address that's associated with your Amazon Web Services account.
   *
   * @public
   */
  Ip: string | undefined;

  /**
   * The name of the IP pool that you want to add the dedicated IP address to. You have to specify an IP pool that already exists.
   *
   * @public
   */
  DestinationPoolName: string | undefined;
}

/**
 * An HTTP 200 response if the request succeeds, or an error message if the request fails.
 *
 * @public
 */
export interface PutDedicatedIpInPoolResponse {}

/**
 * A request to convert a dedicated IP pool to a different scaling mode.
 *
 * @public
 */
export interface PutDedicatedIpPoolScalingAttributesRequest {
  /**
   * The name of the dedicated IP pool.
   *
   * @public
   */
  PoolName: string | undefined;

  /**
   * The scaling mode to apply to the dedicated IP pool.
   *
   * > **Note:** Changing the scaling mode from `MANAGED` to `STANDARD` is not supported.
   *
   * @public
   */
  ScalingMode: ScalingMode | undefined;
}

/**
 * An HTTP 200 response if the request succeeds, or an error message if the request fails.
 *
 * @public
 */
export interface PutDedicatedIpPoolScalingAttributesResponse {}

/**
 * A request to change the warm-up attributes for a dedicated IP address. This operation is useful when you want to resume the warm-up process for an existing IP address.
 *
 * @public
 */
export interface PutDedicatedIpWarmupAttributesRequest {
  /**
   * The dedicated IP address that you want to update the warm-up attributes for.
   *
   * @public
   */
  Ip: string | undefined;

  /**
   * The warm-up percentage that you want to associate with the dedicated IP address.
   *
   * @public
   */
  WarmupPercentage: number | undefined;
}

/**
 * An HTTP 200 response if the request succeeds, or an error message if the request fails.
 *
 * @public
 */
export interface PutDedicatedIpWarmupAttributesResponse {}

/**
 * Enable or disable the Deliverability dashboard. When you enable the Deliverability dashboard, you gain access to reputation, deliverability, and other metrics for the domains that you use to send email using Amazon SES API v2. You also gain the ability to perform predictive inbox placement tests.
 *
 * When you use the Deliverability dashboard, you pay a monthly subscription charge, in addition to any other fees that you accrue by using Amazon SES and other Amazon Web Services services. For more information about the features and cost of a Deliverability dashboard subscription, see [Amazon Pinpoint Pricing](http://aws.amazon.com/pinpoint/pricing/).
 *
 * @public
 */
export interface PutDeliverabilityDashboardOptionRequest {
  /**
   * Specifies whether to enable the Deliverability dashboard. To enable the dashboard, set this value to `true`.
   *
   * @public
   */
  DashboardEnabled: boolean | undefined;

  /**
   * An array of objects, one for each verified domain that you use to send email and enabled the Deliverability dashboard for.
   *
   * @public
   */
  SubscribedDomains?: DomainDeliverabilityTrackingOption[] | undefined;
}

/**
 * A response that indicates whether the Deliverability dashboard is enabled.
 *
 * @public
 */
export interface PutDeliverabilityDashboardOptionResponse {}

/**
 * A request to associate a configuration set with an email identity.
 *
 * @public
 */
export interface PutEmailIdentityConfigurationSetAttributesRequest {
  /**
   * The email address or domain to associate with a configuration set.
   *
   * @public
   */
  EmailIdentity: string | undefined;

  /**
   * The configuration set to associate with an email identity.
   *
   * @public
   */
  ConfigurationSetName?: string | undefined;
}

/**
 * If the action is successful, the service sends back an HTTP 200 response with an empty HTTP body.
 *
 * @public
 */
export interface PutEmailIdentityConfigurationSetAttributesResponse {}

/**
 * A request to enable or disable DKIM signing of email that you send from an email identity.
 *
 * @public
 */
export interface PutEmailIdentityDkimAttributesRequest {
  /**
   * The email identity.
   *
   * @public
   */
  EmailIdentity: string | undefined;

  /**
   * Sets the DKIM signing configuration for the identity.
   *
   * When you set this value `true`, then the messages that are sent from the identity are signed using DKIM. If you set this value to `false`, your messages are sent without DKIM signing.
   *
   * @public
   */
  SigningEnabled?: boolean | undefined;
}

/**
 * An HTTP 200 response if the request succeeds, or an error message if the request fails.
 *
 * @public
 */
export interface PutEmailIdentityDkimAttributesResponse {}

/**
 * A request to change the DKIM attributes for an email identity.
 *
 * @public
 */
export interface PutEmailIdentityDkimSigningAttributesRequest {
  /**
   * The email identity.
   *
   * @public
   */
  EmailIdentity: string | undefined;

  /**
   * The method to use to configure DKIM for the identity. There are the following possible values:
   *
   * - `AWS_SES` – Configure DKIM for the identity by using [Easy DKIM](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html).
   * - `EXTERNAL` – Configure DKIM for the identity by using Bring Your Own DKIM (BYODKIM).
   *
   * @public
   */
  SigningAttributesOrigin: DkimSigningAttributesOrigin | undefined;

  /**
   * An object that contains information about the private key and selector that you want to use to configure DKIM for the identity for Bring Your Own DKIM (BYODKIM) for the identity, or, configures the key length to be used for [Easy DKIM](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html).
   *
   * @public
   */
  SigningAttributes?: DkimSigningAttributes | undefined;
}

/**
 * If the action is successful, the service sends back an HTTP 200 response.
 *
 * The following data is returned in JSON format by the service.
 *
 * @public
 */
export interface PutEmailIdentityDkimSigningAttributesResponse {
  /**
   * The DKIM authentication status of the identity. Amazon SES determines the authentication status by searching for specific records in the DNS configuration for your domain. If you used [Easy DKIM](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html) to set up DKIM authentication, Amazon SES tries to find three unique CNAME records in the DNS configuration for your domain.
   *
   * If you provided a public key to perform DKIM authentication, Amazon SES tries to find a TXT record that uses the selector that you specified. The value of the TXT record must be a public key that's paired with the private key that you specified in the process of creating the identity.
   *
   * The status can be one of the following:
   *
   * - `PENDING` – The verification process was initiated, but Amazon SES hasn't yet detected the DKIM records in the DNS configuration for the domain.
   * - `SUCCESS` – The verification process completed successfully.
   * - `FAILED` – The verification process failed. This typically occurs when Amazon SES fails to find the DKIM records in the DNS configuration of the domain.
   * - `TEMPORARY_FAILURE` – A temporary issue is preventing Amazon SES from determining the DKIM authentication status of the domain.
   * - `NOT_STARTED` – The DKIM verification process hasn't been initiated for the domain.
   *
   * @public
   */
  DkimStatus?: DkimStatus | undefined;

  /**
   * If you used [Easy DKIM](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html) to configure DKIM authentication for the domain, then this object contains a set of unique strings that you use to create a set of CNAME records that you add to the DNS configuration for your domain. When Amazon SES detects these records in the DNS configuration for your domain, the DKIM authentication process is complete.
   *
   * If you configured DKIM authentication for the domain by providing your own public-private key pair, then this object contains the selector that's associated with your public key.
   *
   * Regardless of the DKIM authentication method you use, Amazon SES searches for the appropriate records in the DNS configuration of the domain for up to 72 hours.
   *
   * @public
   */
  DkimTokens?: string[] | undefined;

  /**
   * The hosted zone where Amazon SES publishes the DKIM public key TXT records for this email identity. This value indicates the DNS zone that customers must reference when configuring their CNAME records for DKIM authentication.
   *
   * When configuring DKIM for your domain, create CNAME records in your DNS that point to the selectors in this hosted zone. For example:
   *
   * `selector1._domainkey.yourdomain.com CNAME selector1.<SigningHostedZone>`
   *
   * `selector2._domainkey.yourdomain.com CNAME selector2.<SigningHostedZone>`
   *
   * `selector3._domainkey.yourdomain.com CNAME selector3.<SigningHostedZone>`
   *
   * @public
   */
  SigningHostedZone?: string | undefined;
}

/**
 * A request to set the attributes that control how bounce and complaint events are processed.
 *
 * @public
 */
export interface PutEmailIdentityFeedbackAttributesRequest {
  /**
   * The email identity.
   *
   * @public
   */
  EmailIdentity: string | undefined;

  /**
   * Sets the feedback forwarding configuration for the identity.
   *
   * If the value is `true`, you receive email notifications when bounce or complaint events occur. These notifications are sent to the address that you specified in the `Return-Path` header of the original email.
   *
   * You're required to have a method of tracking bounces and complaints. If you haven't set up another mechanism for receiving bounce or complaint notifications (for example, by setting up an event destination), you receive an email notification when these events occur (even if this setting is disabled).
   *
   * @public
   */
  EmailForwardingEnabled?: boolean | undefined;
}

/**
 * An HTTP 200 response if the request succeeds, or an error message if the request fails.
 *
 * @public
 */
export interface PutEmailIdentityFeedbackAttributesResponse {}

/**
 * A request to configure the custom MAIL FROM domain for a verified identity.
 *
 * @public
 */
export interface PutEmailIdentityMailFromAttributesRequest {
  /**
   * The verified email identity.
   *
   * @public
   */
  EmailIdentity: string | undefined;

  /**
   * The custom MAIL FROM domain that you want the verified identity to use. The MAIL FROM domain must meet the following criteria:
   *
   * - It has to be a subdomain of the verified identity.
   * - It can't be used to receive email.
   * - It can't be used in a "From" address if the MAIL FROM domain is a destination for feedback forwarding emails.
   *
   * @public
   */
  MailFromDomain?: string | undefined;

  /**
   * The action to take if the required MX record isn't found when you send an email. When you set this value to `UseDefaultValue`, the mail is sent using *amazonses.com* as the MAIL FROM domain. When you set this value to `RejectMessage`, the Amazon SES API v2 returns a `MailFromDomainNotVerified` error, and doesn't attempt to deliver the email.
   *
   * These behaviors are taken when the custom MAIL FROM domain configuration is in the `Pending`, `Failed`, and `TemporaryFailure` states.
   *
   * @public
   */
  BehaviorOnMxFailure?: BehaviorOnMxFailure | undefined;
}

/**
 * An HTTP 200 response if the request succeeds, or an error message if the request fails.
 *
 * @public
 */
export interface PutEmailIdentityMailFromAttributesResponse {}

/**
 * A request to add an email destination to the suppression list for your account or for a specific tenant.
 *
 * @public
 */
export interface PutSuppressedDestinationRequest {
  /**
   * The email address that should be added to the suppression list for your account or for the specified tenant.
   *
   * @public
   */
  EmailAddress: string | undefined;

  /**
   * The factors that should cause the email address to be added to the suppression list for your account or for the specified tenant.
   *
   * @public
   */
  Reason: SuppressionListReason | undefined;

  /**
   * The name of the tenant whose suppression list you want to add the address to. If you omit this parameter, the address is added to the account-level suppression list.
   *
   * @public
   */
  TenantName?: string | undefined;
}

/**
 * An HTTP 200 response if the request succeeds, or an error message if the request fails.
 *
 * @public
 */
export interface PutSuppressedDestinationResponse {}

/**
 * A request to configure the suppression list preferences for a tenant.
 *
 * @public
 */
export interface PutTenantSuppressionAttributesRequest {
  /**
   * The name of the tenant to configure suppression list preferences for.
   *
   * @public
   */
  TenantName: string | undefined;

  /**
   * A list that contains the reasons that email addresses are automatically added to the suppression list for the tenant. This list can contain any or all of the following:
   *
   * - `COMPLAINT` – Amazon SES adds an email address to the suppression list when a message sent to that address results in a complaint.
   * - `BOUNCE` – Amazon SES adds an email address to the suppression list when a message sent to that address results in a hard bounce.
   *
   * @public
   */
  SuppressedReasons?: SuppressionListReason[] | undefined;

  /**
   * The suppression scope for the tenant. Specify `TENANT` to use the tenant's own suppression list, or `ACCOUNT` to use the account-level suppression list.
   *
   * > **Note:** If you don't specify a suppression scope, the tenant defaults to `ACCOUNT` scope and uses the account-level suppression list.
   *
   * @public
   */
  SuppressionScope?: SuppressionListScope | undefined;
}

/**
 * If the action is successful, the service sends back an HTTP 200 response with an empty HTTP body.
 *
 * @public
 */
export interface PutTenantSuppressionAttributesResponse {}

/**
 * Represents a request to send email messages to multiple destinations using Amazon SES. For more information, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html).
 *
 * @public
 */
export interface SendBulkEmailRequest {
  /**
   * The email address to use as the "From" address for the email. The address that you specify has to be verified.
   *
   * @public
   */
  FromEmailAddress?: string | undefined;

  /**
   * This parameter is used only for sending authorization. It is the ARN of the identity that is associated with the sending authorization policy that permits you to use the email address specified in the `FromEmailAddress` parameter.
   *
   * For example, if the owner of example.com (which has ARN arn:aws:ses:us-east-1:123456789012:identity/example.com) attaches a policy to it that authorizes you to use sender@example.com, then you would specify the `FromEmailAddressIdentityArn` to be arn:aws:ses:us-east-1:123456789012:identity/example.com, and the `FromEmailAddress` to be sender@example.com.
   *
   * For more information about sending authorization, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html).
   *
   * @public
   */
  FromEmailAddressIdentityArn?: string | undefined;

  /**
   * The "Reply-to" email addresses for the message. When the recipient replies to the message, each Reply-to address receives the reply.
   *
   * @public
   */
  ReplyToAddresses?: string[] | undefined;

  /**
   * The address that you want bounce and complaint notifications to be sent to.
   *
   * @public
   */
  FeedbackForwardingEmailAddress?: string | undefined;

  /**
   * This parameter is used only for sending authorization. It is the ARN of the identity that is associated with the sending authorization policy that permits you to use the email address specified in the `FeedbackForwardingEmailAddress` parameter.
   *
   * For example, if the owner of example.com (which has ARN arn:aws:ses:us-east-1:123456789012:identity/example.com) attaches a policy to it that authorizes you to use feedback@example.com, then you would specify the `FeedbackForwardingEmailAddressIdentityArn` to be arn:aws:ses:us-east-1:123456789012:identity/example.com, and the `FeedbackForwardingEmailAddress` to be feedback@example.com.
   *
   * For more information about sending authorization, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html).
   *
   * @public
   */
  FeedbackForwardingEmailAddressIdentityArn?: string | undefined;

  /**
   * A list of tags, in the form of name/value pairs, to apply to an email that you send using the `SendEmail` operation. Tags correspond to characteristics of the email that you define, so that you can publish email sending events.
   *
   * @public
   */
  DefaultEmailTags?: MessageTag[] | undefined;

  /**
   * An object that contains the body of the message. You can specify a template message.
   *
   * @public
   */
  DefaultContent: BulkEmailContent | undefined;

  /**
   * The list of bulk email entry objects.
   *
   * @public
   */
  BulkEmailEntries: BulkEmailEntry[] | undefined;

  /**
   * The name of the configuration set to use when sending the email.
   *
   * @public
   */
  ConfigurationSetName?: string | undefined;

  /**
   * The ID of the multi-region endpoint (global-endpoint).
   *
   * @public
   */
  EndpointId?: string | undefined;

  /**
   * The name of the tenant through which this bulk email will be sent.
   *
   * > **Note:** The email sending operation will only succeed if all referenced resources (identities, configuration sets, and templates) are associated with this tenant.
   *
   * @public
   */
  TenantName?: string | undefined;

  /**
   * An object that overrides, for the messages in this request only, settings that would otherwise apply to them. The overrides apply to every message in the request. Each setting that you don't override keeps the value that already applies.
   *
   * @public
   */
  ConfigurationOverrides?: ConfigurationOverrides | undefined;
}

/**
 * The following data is returned in JSON format by the service.
 *
 * @public
 */
export interface SendBulkEmailResponse {
  /**
   * One object per intended recipient. Check each response object and retry any messages with a failure status.
   *
   * @public
   */
  BulkEmailEntryResults: BulkEmailEntryResult[] | undefined;
}

/**
 * Represents a request to send a custom verification email to a specified recipient.
 *
 * @public
 */
export interface SendCustomVerificationEmailRequest {
  /**
   * The email address to verify.
   *
   * @public
   */
  EmailAddress: string | undefined;

  /**
   * The name of the custom verification email template to use when sending the verification email.
   *
   * @public
   */
  TemplateName: string | undefined;

  /**
   * Name of a configuration set to use when sending the verification email.
   *
   * @public
   */
  ConfigurationSetName?: string | undefined;
}

/**
 * The following element is returned by the service.
 *
 * @public
 */
export interface SendCustomVerificationEmailResponse {
  /**
   * The unique message identifier returned from the `SendCustomVerificationEmail` operation.
   *
   * @public
   */
  MessageId?: string | undefined;
}

/**
 * Represents a request to send a single formatted email using Amazon SES. For more information, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-email-formatted.html).
 *
 * @public
 */
export interface SendEmailRequest {
  /**
   * The email address to use as the "From" address for the email. The address that you specify has to be verified.
   *
   * @public
   */
  FromEmailAddress?: string | undefined;

  /**
   * This parameter is used only for sending authorization. It is the ARN of the identity that is associated with the sending authorization policy that permits you to use the email address specified in the `FromEmailAddress` parameter.
   *
   * For example, if the owner of example.com (which has ARN arn:aws:ses:us-east-1:123456789012:identity/example.com) attaches a policy to it that authorizes you to use sender@example.com, then you would specify the `FromEmailAddressIdentityArn` to be arn:aws:ses:us-east-1:123456789012:identity/example.com, and the `FromEmailAddress` to be sender@example.com.
   *
   * For more information about sending authorization, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html).
   *
   * For Raw emails, the `FromEmailAddressIdentityArn` value overrides the X-SES-SOURCE-ARN and X-SES-FROM-ARN headers specified in raw email message content.
   *
   * @public
   */
  FromEmailAddressIdentityArn?: string | undefined;

  /**
   * An object that contains the recipients of the email message.
   *
   * @public
   */
  Destination?: Destination | undefined;

  /**
   * The "Reply-to" email addresses for the message. When the recipient replies to the message, each Reply-to address receives the reply.
   *
   * @public
   */
  ReplyToAddresses?: string[] | undefined;

  /**
   * The address that you want bounce and complaint notifications to be sent to.
   *
   * @public
   */
  FeedbackForwardingEmailAddress?: string | undefined;

  /**
   * This parameter is used only for sending authorization. It is the ARN of the identity that is associated with the sending authorization policy that permits you to use the email address specified in the `FeedbackForwardingEmailAddress` parameter.
   *
   * For example, if the owner of example.com (which has ARN arn:aws:ses:us-east-1:123456789012:identity/example.com) attaches a policy to it that authorizes you to use feedback@example.com, then you would specify the `FeedbackForwardingEmailAddressIdentityArn` to be arn:aws:ses:us-east-1:123456789012:identity/example.com, and the `FeedbackForwardingEmailAddress` to be feedback@example.com.
   *
   * For more information about sending authorization, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html).
   *
   * @public
   */
  FeedbackForwardingEmailAddressIdentityArn?: string | undefined;

  /**
   * An object that contains the body of the message. You can send either a Simple message, Raw message, or a Templated message.
   *
   * @public
   */
  Content: EmailContent | undefined;

  /**
   * A list of tags, in the form of name/value pairs, to apply to an email that you send using the `SendEmail` operation. Tags correspond to characteristics of the email that you define, so that you can publish email sending events.
   *
   * @public
   */
  EmailTags?: MessageTag[] | undefined;

  /**
   * The name of the configuration set to use when sending the email.
   *
   * @public
   */
  ConfigurationSetName?: string | undefined;

  /**
   * The ID of the multi-region endpoint (global-endpoint).
   *
   * @public
   */
  EndpointId?: string | undefined;

  /**
   * The name of the tenant through which this email will be sent.
   *
   * > **Note:** The email sending operation will only succeed if all referenced resources (identities, configuration sets, and templates) are associated with this tenant.
   *
   * @public
   */
  TenantName?: string | undefined;

  /**
   * An object used to specify a list or topic to which an email belongs, which will be used when a contact chooses to unsubscribe.
   *
   * @public
   */
  ListManagementOptions?: ListManagementOptions | undefined;

  /**
   * An object that overrides, for this message only, settings that would otherwise apply to it. Each setting that you don't override keeps the value that already applies.
   *
   * @public
   */
  ConfigurationOverrides?: ConfigurationOverrides | undefined;
}

/**
 * A unique message ID that you receive when an email is accepted for sending.
 *
 * @public
 */
export interface SendEmailResponse {
  /**
   * A unique identifier for the message that is generated when the message is accepted.
   *
   * > **Note:** It's possible for Amazon SES to accept a message without sending it. For example, this can happen when the message that you're trying to send has an attachment that contains a virus, or when you send a templated email that contains invalid personalization content.
   *
   * @public
   */
  MessageId?: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource that you want to add one or more tags to.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * A list of the tags that you want to add to the resource. A tag consists of a required tag key (`Key`) and an associated tag value (`Value`). The maximum length of a tag key is 128 characters. The maximum length of a tag value is 256 characters.
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
 * >Represents a request to create a preview of the MIME content of an email when provided with a template and a set of replacement data.
 *
 * @public
 */
export interface TestRenderEmailTemplateRequest {
  /**
   * The name of the template.
   *
   * @public
   */
  TemplateName: string | undefined;

  /**
   * A list of replacement values to apply to the template. This parameter is a JSON object, typically consisting of key-value pairs in which the keys correspond to replacement tags in the email template.
   *
   * @public
   */
  TemplateData: string | undefined;
}

/**
 * The following element is returned by the service.
 *
 * @public
 */
export interface TestRenderEmailTemplateResponse {
  /**
   * The complete MIME message rendered by applying the data in the `TemplateData` parameter to the template specified in the TemplateName parameter.
   *
   * @public
   */
  RenderedTemplate: string | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource that you want to remove one or more tags from.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The tags (tag keys) that you want to remove from the resource. When you specify a tag key, the action removes both that key and its associated tag value.
   *
   * To remove more than one tag from the resource, append the `TagKeys` parameter and argument for each additional tag to remove, separated by an ampersand. For example: `/v2/email/tags?ResourceArn=ResourceArn&TagKeys=Key1&TagKeys=Key2`
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
 * A request to update the configuration of an existing configuration set.
 *
 * @public
 */
export interface UpdateConfigurationSetRequest {
  /**
   * The name of the configuration set to update.
   *
   * @public
   */
  ConfigurationSetName: string | undefined;

  /**
   * The security options that apply to the MIME message itself for messages sent with the configuration set.
   *
   * @public
   */
  MessageSecurityOptions?: MessageSecurityOptions | undefined;
}

/**
 * An HTTP 200 response if the request succeeds, or an error message if the request fails.
 *
 * @public
 */
export interface UpdateConfigurationSetResponse {}

/**
 * A request to change the settings for an event destination for a configuration set.
 *
 * @public
 */
export interface UpdateConfigurationSetEventDestinationRequest {
  /**
   * The name of the configuration set that contains the event destination to modify.
   *
   * @public
   */
  ConfigurationSetName: string | undefined;

  /**
   * The name of the event destination.
   *
   * @public
   */
  EventDestinationName: string | undefined;

  /**
   * An object that defines the event destination.
   *
   * @public
   */
  EventDestination: EventDestinationDefinition | undefined;
}

/**
 * An HTTP 200 response if the request succeeds, or an error message if the request fails.
 *
 * @public
 */
export interface UpdateConfigurationSetEventDestinationResponse {}

/**
 * @public
 */
export interface UpdateContactRequest {
  /**
   * The name of the contact list.
   *
   * @public
   */
  ContactListName: string | undefined;

  /**
   * The contact's email address.
   *
   * @public
   */
  EmailAddress: string | undefined;

  /**
   * The contact's preference for being opted-in to or opted-out of a topic.
   *
   * @public
   */
  TopicPreferences?: TopicPreference[] | undefined;

  /**
   * A boolean value status noting if the contact is unsubscribed from all contact list topics.
   *
   * @public
   */
  UnsubscribeAll?: boolean | undefined;

  /**
   * The attribute data attached to a contact.
   *
   * @public
   */
  AttributesData?: string | undefined;
}

/**
 * @public
 */
export interface UpdateContactResponse {}

/**
 * @public
 */
export interface UpdateContactListRequest {
  /**
   * The name of the contact list.
   *
   * @public
   */
  ContactListName: string | undefined;

  /**
   * An interest group, theme, or label within a list. A contact list can have multiple topics.
   *
   * @public
   */
  Topics?: Topic[] | undefined;

  /**
   * A description of what the contact list is about.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface UpdateContactListResponse {}

/**
 * Represents a request to update an existing custom verification email template.
 *
 * @public
 */
export interface UpdateCustomVerificationEmailTemplateRequest {
  /**
   * The name of the custom verification email template that you want to update.
   *
   * @public
   */
  TemplateName: string | undefined;

  /**
   * The email address that the custom verification email is sent from.
   *
   * @public
   */
  FromEmailAddress: string | undefined;

  /**
   * The subject line of the custom verification email.
   *
   * @public
   */
  TemplateSubject: string | undefined;

  /**
   * The content of the custom verification email. The total size of the email must be less than 10 MB. The message body may contain HTML, with some limitations. For more information, see [Custom verification email frequently asked questions](https://docs.aws.amazon.com/ses/latest/dg/creating-identities.html#send-email-verify-address-custom-faq) in the *Amazon SES Developer Guide*.
   *
   * @public
   */
  TemplateContent: string | undefined;

  /**
   * The URL that the recipient of the verification email is sent to if his or her address is successfully verified.
   *
   * @public
   */
  SuccessRedirectionURL: string | undefined;

  /**
   * The URL that the recipient of the verification email is sent to if his or her address is not successfully verified.
   *
   * @public
   */
  FailureRedirectionURL: string | undefined;
}

/**
 * If the action is successful, the service sends back an HTTP 200 response with an empty HTTP body.
 *
 * @public
 */
export interface UpdateCustomVerificationEmailTemplateResponse {}

/**
 * Represents a request to update a sending authorization policy for an identity. Sending authorization is an Amazon SES feature that enables you to authorize other senders to use your identities. For information, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization-identity-owner-tasks-management.html).
 *
 * @public
 */
export interface UpdateEmailIdentityPolicyRequest {
  /**
   * The email identity.
   *
   * @public
   */
  EmailIdentity: string | undefined;

  /**
   * The name of the policy.
   *
   * The policy name cannot exceed 64 characters and can only include alphanumeric characters, dashes, and underscores.
   *
   * @public
   */
  PolicyName: string | undefined;

  /**
   * The text of the policy in JSON format. The policy cannot exceed 4 KB.
   *
   * For information about the syntax of sending authorization policies, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization-policies.html).
   *
   * @public
   */
  Policy: string | undefined;
}

/**
 * An HTTP 200 response if the request succeeds, or an error message if the request fails.
 *
 * @public
 */
export interface UpdateEmailIdentityPolicyResponse {}

/**
 * Represents a request to update an email template. For more information, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html).
 *
 * @public
 */
export interface UpdateEmailTemplateRequest {
  /**
   * The name of the template.
   *
   * @public
   */
  TemplateName: string | undefined;

  /**
   * The content of the email template, composed of a subject line, an HTML part, and a text-only part.
   *
   * @public
   */
  TemplateContent: EmailTemplateContent | undefined;
}

/**
 * If the action is successful, the service sends back an HTTP 200 response with an empty HTTP body.
 *
 * @public
 */
export interface UpdateEmailTemplateResponse {}

/**
 * Represents a request to update the customer-managed sending status for a reputation entity.
 *
 * @public
 */
export interface UpdateReputationEntityCustomerManagedStatusRequest {
  /**
   * The type of reputation entity. Currently, only `RESOURCE` type entities are supported.
   *
   * @public
   */
  ReputationEntityType: ReputationEntityType | undefined;

  /**
   * The unique identifier for the reputation entity. For resource-type entities, this is the Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  ReputationEntityReference: string | undefined;

  /**
   * The new customer-managed sending status for the reputation entity. This can be one of the following:
   *
   * - `ENABLED` – Allow sending for this entity.
   * - `DISABLED` – Prevent sending for this entity.
   * - `REINSTATED` – Allow sending even if there are active reputation findings.
   *
   * @public
   */
  SendingStatus: SendingStatus | undefined;
}

/**
 * If the action is successful, the service sends back an HTTP 200 response with an empty HTTP body.
 *
 * @public
 */
export interface UpdateReputationEntityCustomerManagedStatusResponse {}

/**
 * Represents a request to update the reputation management policy for a reputation entity.
 *
 * @public
 */
export interface UpdateReputationEntityPolicyRequest {
  /**
   * The type of reputation entity. Currently, only `RESOURCE` type entities are supported.
   *
   * @public
   */
  ReputationEntityType: ReputationEntityType | undefined;

  /**
   * The unique identifier for the reputation entity. For resource-type entities, this is the Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  ReputationEntityReference: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the reputation management policy to apply to this entity. This is an Amazon Web Services Amazon SES-managed policy.
   *
   * @public
   */
  ReputationEntityPolicy: string | undefined;
}

/**
 * If the action is successful, the service sends back an HTTP 200 response with an empty HTTP body.
 *
 * @public
 */
export interface UpdateReputationEntityPolicyResponse {}
