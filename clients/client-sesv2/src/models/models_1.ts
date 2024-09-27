// smithy-typescript generated code
import {
  BehaviorOnMxFailure,
  BulkEmailContent,
  BulkEmailEntry,
  BulkEmailEntryResult,
  Destination,
  DkimStatus,
  EmailContent,
  EmailTemplateContent,
  EventDestinationDefinition,
  ListManagementOptions,
  MessageTag,
  SuppressionListReason,
  Tag,
  Topic,
  TopicPreference,
} from "./models_0";

/**
 * <p>If the action is successful, the service sends back an HTTP 200 response.</p>
 *          <p>The following data is returned in JSON format by the service.</p>
 * @public
 */
export interface PutEmailIdentityDkimSigningAttributesResponse {
  /**
   * <p>The DKIM authentication status of the identity. Amazon SES determines the authentication
   *             status by searching for specific records in the DNS configuration for your domain. If
   *             you used <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">Easy
   *                 DKIM</a> to set up DKIM authentication, Amazon SES tries to find three unique CNAME
   *             records in the DNS configuration for your domain.</p>
   *          <p>If you provided a public key to perform DKIM authentication, Amazon SES tries to find a TXT
   *             record that uses the selector that you specified. The value of the TXT record must be a
   *             public key that's paired with the private key that you specified in the process of
   *             creating the identity.</p>
   *          <p>The status can be one of the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PENDING</code> – The verification process was initiated, but Amazon SES
   *                     hasn't yet detected the DKIM records in the DNS configuration for the
   *                     domain.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SUCCESS</code> – The verification process completed
   *                     successfully.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code> – The verification process failed. This typically
   *                     occurs when Amazon SES fails to find the DKIM records in the DNS configuration of the
   *                     domain.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TEMPORARY_FAILURE</code> – A temporary issue is preventing Amazon SES
   *                     from determining the DKIM authentication status of the domain.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NOT_STARTED</code> – The DKIM verification process hasn't been
   *                     initiated for the domain.</p>
   *             </li>
   *          </ul>
   * @public
   */
  DkimStatus?: DkimStatus;

  /**
   * <p>If you used <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">Easy DKIM</a> to configure DKIM authentication for the domain, then this object
   *             contains a set of unique strings that you use to create a set of CNAME records that you
   *             add to the DNS configuration for your domain. When Amazon SES detects these records in the
   *             DNS configuration for your domain, the DKIM authentication process is complete.</p>
   *          <p>If you configured DKIM authentication for the domain by providing your own
   *             public-private key pair, then this object contains the selector that's associated with
   *             your public key.</p>
   *          <p>Regardless of the DKIM authentication method you use, Amazon SES searches for the
   *             appropriate records in the DNS configuration of the domain for up to 72 hours.</p>
   * @public
   */
  DkimTokens?: string[];
}

/**
 * <p>A request to set the attributes that control how bounce and complaint events are
 *             processed.</p>
 * @public
 */
export interface PutEmailIdentityFeedbackAttributesRequest {
  /**
   * <p>The email identity.</p>
   * @public
   */
  EmailIdentity: string | undefined;

  /**
   * <p>Sets the feedback forwarding configuration for the identity.</p>
   *          <p>If the value is <code>true</code>, you receive email notifications when bounce or
   *             complaint events occur. These notifications are sent to the address that you specified
   *             in the <code>Return-Path</code> header of the original email.</p>
   *          <p>You're required to have a method of tracking bounces and complaints. If you haven't
   *             set up another mechanism for receiving bounce or complaint notifications (for example,
   *             by setting up an event destination), you receive an email notification when these events
   *             occur (even if this setting is disabled).</p>
   * @public
   */
  EmailForwardingEnabled?: boolean;
}

/**
 * <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 * @public
 */
export interface PutEmailIdentityFeedbackAttributesResponse {}

/**
 * <p>A request to configure the custom MAIL FROM domain for a verified identity.</p>
 * @public
 */
export interface PutEmailIdentityMailFromAttributesRequest {
  /**
   * <p>The verified email identity.</p>
   * @public
   */
  EmailIdentity: string | undefined;

  /**
   * <p> The custom MAIL FROM domain that you want the verified identity to use. The MAIL FROM
   *             domain must meet the following criteria:</p>
   *          <ul>
   *             <li>
   *                <p>It has to be a subdomain of the verified identity.</p>
   *             </li>
   *             <li>
   *                <p>It can't be used to receive email.</p>
   *             </li>
   *             <li>
   *                <p>It can't be used in a "From" address if the MAIL FROM domain is a destination
   *                     for feedback forwarding emails.</p>
   *             </li>
   *          </ul>
   * @public
   */
  MailFromDomain?: string;

  /**
   * <p>The action to take if the required MX record isn't found when you send an email. When
   *             you set this value to <code>UseDefaultValue</code>, the mail is sent using
   *                 <i>amazonses.com</i> as the MAIL FROM domain. When you set this value
   *             to <code>RejectMessage</code>, the Amazon SES API v2 returns a
   *                 <code>MailFromDomainNotVerified</code> error, and doesn't attempt to deliver the
   *             email.</p>
   *          <p>These behaviors are taken when the custom MAIL FROM domain configuration is in the
   *                 <code>Pending</code>, <code>Failed</code>, and <code>TemporaryFailure</code>
   *             states.</p>
   * @public
   */
  BehaviorOnMxFailure?: BehaviorOnMxFailure;
}

/**
 * <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 * @public
 */
export interface PutEmailIdentityMailFromAttributesResponse {}

/**
 * <p>A request to add an email destination to the suppression list for your account.</p>
 * @public
 */
export interface PutSuppressedDestinationRequest {
  /**
   * <p>The email address that should be added to the suppression list for your
   *             account.</p>
   * @public
   */
  EmailAddress: string | undefined;

  /**
   * <p>The factors that should cause the email address to be added to the suppression list
   *             for your account.</p>
   * @public
   */
  Reason: SuppressionListReason | undefined;
}

/**
 * <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 * @public
 */
export interface PutSuppressedDestinationResponse {}

/**
 * <p>Represents a request to send email messages to multiple destinations using Amazon SES. For
 *             more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer
 *                 Guide</a>.</p>
 * @public
 */
export interface SendBulkEmailRequest {
  /**
   * <p>The email address to use as the "From" address for the email. The address that you
   *             specify has to be verified.</p>
   * @public
   */
  FromEmailAddress?: string;

  /**
   * <p>This parameter is used only for sending authorization. It is the ARN of the identity
   *             that is associated with the sending authorization policy that permits you to use the
   *             email address specified in the <code>FromEmailAddress</code> parameter.</p>
   *          <p>For example, if the owner of example.com (which has ARN
   *             arn:aws:ses:us-east-1:123456789012:identity/example.com) attaches a policy to it that
   *             authorizes you to use sender@example.com, then you would specify the
   *                 <code>FromEmailAddressIdentityArn</code> to be
   *             arn:aws:ses:us-east-1:123456789012:identity/example.com, and the
   *                 <code>FromEmailAddress</code> to be sender@example.com.</p>
   *          <p>For more information about sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer
   *                 Guide</a>.</p>
   * @public
   */
  FromEmailAddressIdentityArn?: string;

  /**
   * <p>The "Reply-to" email addresses for the message. When the recipient replies to the
   *             message, each Reply-to address receives the reply.</p>
   * @public
   */
  ReplyToAddresses?: string[];

  /**
   * <p>The address that you want bounce and complaint notifications to be sent to.</p>
   * @public
   */
  FeedbackForwardingEmailAddress?: string;

  /**
   * <p>This parameter is used only for sending authorization. It is the ARN of the identity
   *             that is associated with the sending authorization policy that permits you to use the
   *             email address specified in the <code>FeedbackForwardingEmailAddress</code>
   *             parameter.</p>
   *          <p>For example, if the owner of example.com (which has ARN
   *             arn:aws:ses:us-east-1:123456789012:identity/example.com) attaches a policy to it that
   *             authorizes you to use feedback@example.com, then you would specify the
   *                 <code>FeedbackForwardingEmailAddressIdentityArn</code> to be
   *             arn:aws:ses:us-east-1:123456789012:identity/example.com, and the
   *                 <code>FeedbackForwardingEmailAddress</code> to be feedback@example.com.</p>
   *          <p>For more information about sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer
   *                 Guide</a>.</p>
   * @public
   */
  FeedbackForwardingEmailAddressIdentityArn?: string;

  /**
   * <p>A list of tags, in the form of name/value pairs, to apply to an email that you send
   *             using the <code>SendEmail</code> operation. Tags correspond to characteristics of the
   *             email that you define, so that you can publish email sending events.</p>
   * @public
   */
  DefaultEmailTags?: MessageTag[];

  /**
   * <p>An object that contains the body of the message. You can specify a template
   *             message.</p>
   * @public
   */
  DefaultContent: BulkEmailContent | undefined;

  /**
   * <p>The list of bulk email entry objects.</p>
   * @public
   */
  BulkEmailEntries: BulkEmailEntry[] | undefined;

  /**
   * <p>The name of the configuration set to use when sending the email.</p>
   * @public
   */
  ConfigurationSetName?: string;
}

/**
 * <p>The following data is returned in JSON format by the service.</p>
 * @public
 */
export interface SendBulkEmailResponse {
  /**
   * <p>One object per intended recipient. Check each response object and retry any messages
   *             with a failure status.</p>
   * @public
   */
  BulkEmailEntryResults: BulkEmailEntryResult[] | undefined;
}

/**
 * <p>Represents a request to send a custom verification email to a specified
 *             recipient.</p>
 * @public
 */
export interface SendCustomVerificationEmailRequest {
  /**
   * <p>The email address to verify.</p>
   * @public
   */
  EmailAddress: string | undefined;

  /**
   * <p>The name of the custom verification email template to use when sending the
   *             verification email.</p>
   * @public
   */
  TemplateName: string | undefined;

  /**
   * <p>Name of a configuration set to use when sending the verification email.</p>
   * @public
   */
  ConfigurationSetName?: string;
}

/**
 * <p>The following element is returned by the service.</p>
 * @public
 */
export interface SendCustomVerificationEmailResponse {
  /**
   * <p>The unique message identifier returned from the
   *                 <code>SendCustomVerificationEmail</code> operation.</p>
   * @public
   */
  MessageId?: string;
}

/**
 * <p>Represents a request to send a single formatted email using Amazon SES. For more
 *             information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-email-formatted.html">Amazon SES Developer
 *                 Guide</a>.</p>
 * @public
 */
export interface SendEmailRequest {
  /**
   * <p>The email address to use as the "From" address for the email. The address that you
   *             specify has to be verified.
   *             </p>
   * @public
   */
  FromEmailAddress?: string;

  /**
   * <p>This parameter is used only for sending authorization. It is the ARN of the identity
   *             that is associated with the sending authorization policy that permits you to use the
   *             email address specified in the <code>FromEmailAddress</code> parameter.</p>
   *          <p>For example, if the owner of example.com (which has ARN
   *             arn:aws:ses:us-east-1:123456789012:identity/example.com) attaches a policy to it that
   *             authorizes you to use sender@example.com, then you would specify the
   *                 <code>FromEmailAddressIdentityArn</code> to be
   *             arn:aws:ses:us-east-1:123456789012:identity/example.com, and the
   *                 <code>FromEmailAddress</code> to be sender@example.com.</p>
   *          <p>For more information about sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer
   *                 Guide</a>.</p>
   *          <p>For Raw emails, the <code>FromEmailAddressIdentityArn</code> value overrides the
   *             X-SES-SOURCE-ARN and X-SES-FROM-ARN headers specified in raw email message
   *             content.</p>
   * @public
   */
  FromEmailAddressIdentityArn?: string;

  /**
   * <p>An object that contains the recipients of the email message.</p>
   * @public
   */
  Destination?: Destination;

  /**
   * <p>The "Reply-to" email addresses for the message. When the recipient replies to the
   *             message, each Reply-to address receives the reply.</p>
   * @public
   */
  ReplyToAddresses?: string[];

  /**
   * <p>The address that you want bounce and complaint notifications to be sent to.</p>
   * @public
   */
  FeedbackForwardingEmailAddress?: string;

  /**
   * <p>This parameter is used only for sending authorization. It is the ARN of the identity
   *             that is associated with the sending authorization policy that permits you to use the
   *             email address specified in the <code>FeedbackForwardingEmailAddress</code>
   *             parameter.</p>
   *          <p>For example, if the owner of example.com (which has ARN
   *             arn:aws:ses:us-east-1:123456789012:identity/example.com) attaches a policy to it that
   *             authorizes you to use feedback@example.com, then you would specify the
   *                 <code>FeedbackForwardingEmailAddressIdentityArn</code> to be
   *             arn:aws:ses:us-east-1:123456789012:identity/example.com, and the
   *                 <code>FeedbackForwardingEmailAddress</code> to be feedback@example.com.</p>
   *          <p>For more information about sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer
   *                 Guide</a>.</p>
   * @public
   */
  FeedbackForwardingEmailAddressIdentityArn?: string;

  /**
   * <p>An object that contains the body of the message. You can send either a Simple message,
   *             Raw message, or a Templated message.</p>
   * @public
   */
  Content: EmailContent | undefined;

  /**
   * <p>A list of tags, in the form of name/value pairs, to apply to an email that you send
   *             using the <code>SendEmail</code> operation. Tags correspond to characteristics of the
   *             email that you define, so that you can publish email sending events. </p>
   * @public
   */
  EmailTags?: MessageTag[];

  /**
   * <p>The name of the configuration set to use when sending the email.</p>
   * @public
   */
  ConfigurationSetName?: string;

  /**
   * <p>An object used to specify a list or topic to which an email belongs, which will be
   *             used when a contact chooses to unsubscribe.</p>
   * @public
   */
  ListManagementOptions?: ListManagementOptions;
}

/**
 * <p>A unique message ID that you receive when an email is accepted for sending.</p>
 * @public
 */
export interface SendEmailResponse {
  /**
   * <p>A unique identifier for the message that is generated when the message is
   *             accepted.</p>
   *          <note>
   *             <p>It's possible for Amazon SES to accept a message without sending it. For example, this
   *                 can happen when the message that you're trying to send has an attachment that
   *                 contains a virus, or when you send a templated email that contains invalid
   *                 personalization content.</p>
   *          </note>
   * @public
   */
  MessageId?: string;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource that you want to add one or more tags
   *             to.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>A list of the tags that you want to add to the resource. A tag consists of a required
   *             tag key (<code>Key</code>) and an associated tag value (<code>Value</code>). The maximum
   *             length of a tag key is 128 characters. The maximum length of a tag value is 256
   *             characters.</p>
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * <p>>Represents a request to create a preview of the MIME content of an email when
 *             provided with a template and a set of replacement data.</p>
 * @public
 */
export interface TestRenderEmailTemplateRequest {
  /**
   * <p>The name of the template.</p>
   * @public
   */
  TemplateName: string | undefined;

  /**
   * <p>A list of replacement values to apply to the template. This parameter is a JSON
   *             object, typically consisting of key-value pairs in which the keys correspond to
   *             replacement tags in the email template.</p>
   * @public
   */
  TemplateData: string | undefined;
}

/**
 * <p>The following element is returned by the service.</p>
 * @public
 */
export interface TestRenderEmailTemplateResponse {
  /**
   * <p>The complete MIME message rendered by applying the data in the
   *                 <code>TemplateData</code> parameter to the template specified in the TemplateName
   *             parameter.</p>
   * @public
   */
  RenderedTemplate: string | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource that you want to remove one or more
   *             tags from.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tags (tag keys) that you want to remove from the resource. When you specify a tag
   *             key, the action removes both that key and its associated tag value.</p>
   *          <p>To remove more than one tag from the resource, append the <code>TagKeys</code>
   *             parameter and argument for each additional tag to remove, separated by an ampersand. For
   *             example:
   *                 <code>/v2/email/tags?ResourceArn=ResourceArn&TagKeys=Key1&TagKeys=Key2</code>
   *          </p>
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * <p>A request to change the settings for an event destination for a configuration
 *             set.</p>
 * @public
 */
export interface UpdateConfigurationSetEventDestinationRequest {
  /**
   * <p>The name of the configuration set that contains the event destination to
   *             modify.</p>
   * @public
   */
  ConfigurationSetName: string | undefined;

  /**
   * <p>The name of the event destination.</p>
   * @public
   */
  EventDestinationName: string | undefined;

  /**
   * <p>An object that defines the event destination.</p>
   * @public
   */
  EventDestination: EventDestinationDefinition | undefined;
}

/**
 * <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 * @public
 */
export interface UpdateConfigurationSetEventDestinationResponse {}

/**
 * @public
 */
export interface UpdateContactRequest {
  /**
   * <p>The name of the contact list.</p>
   * @public
   */
  ContactListName: string | undefined;

  /**
   * <p>The contact's email address.</p>
   * @public
   */
  EmailAddress: string | undefined;

  /**
   * <p>The contact's preference for being opted-in to or opted-out of a topic.</p>
   * @public
   */
  TopicPreferences?: TopicPreference[];

  /**
   * <p>A boolean value status noting if the contact is unsubscribed from all contact list
   *             topics.</p>
   * @public
   */
  UnsubscribeAll?: boolean;

  /**
   * <p>The attribute data attached to a contact.</p>
   * @public
   */
  AttributesData?: string;
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
   * <p>The name of the contact list.</p>
   * @public
   */
  ContactListName: string | undefined;

  /**
   * <p>An interest group, theme, or label within a list. A contact list can have multiple
   *             topics.</p>
   * @public
   */
  Topics?: Topic[];

  /**
   * <p>A description of what the contact list is about.</p>
   * @public
   */
  Description?: string;
}

/**
 * @public
 */
export interface UpdateContactListResponse {}

/**
 * <p>Represents a request to update an existing custom verification email template.</p>
 * @public
 */
export interface UpdateCustomVerificationEmailTemplateRequest {
  /**
   * <p>The name of the custom verification email template that you want to update.</p>
   * @public
   */
  TemplateName: string | undefined;

  /**
   * <p>The email address that the custom verification email is sent from.</p>
   * @public
   */
  FromEmailAddress: string | undefined;

  /**
   * <p>The subject line of the custom verification email.</p>
   * @public
   */
  TemplateSubject: string | undefined;

  /**
   * <p>The content of the custom verification email. The total size of the email must be less
   *             than 10 MB. The message body may contain HTML, with some limitations. For more
   *             information, see <a href="https://docs.aws.amazon.com/ses/latest/dg/creating-identities.html#send-email-verify-address-custom-faq">Custom verification email frequently asked questions</a> in the <i>Amazon SES
   *                 Developer Guide</i>.</p>
   * @public
   */
  TemplateContent: string | undefined;

  /**
   * <p>The URL that the recipient of the verification email is sent to if his or her address
   *             is successfully verified.</p>
   * @public
   */
  SuccessRedirectionURL: string | undefined;

  /**
   * <p>The URL that the recipient of the verification email is sent to if his or her address
   *             is not successfully verified.</p>
   * @public
   */
  FailureRedirectionURL: string | undefined;
}

/**
 * <p>If the action is successful, the service sends back an HTTP 200 response with an empty
 *             HTTP body.</p>
 * @public
 */
export interface UpdateCustomVerificationEmailTemplateResponse {}

/**
 * <p>Represents a request to update a sending authorization policy for an identity. Sending
 *             authorization is an Amazon SES feature that enables you to authorize other senders to use
 *             your identities. For information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization-identity-owner-tasks-management.html">Amazon SES Developer Guide</a>.</p>
 * @public
 */
export interface UpdateEmailIdentityPolicyRequest {
  /**
   * <p>The email identity.</p>
   * @public
   */
  EmailIdentity: string | undefined;

  /**
   * <p>The name of the policy.</p>
   *          <p>The policy name cannot exceed 64 characters and can only include alphanumeric
   *             characters, dashes, and underscores.</p>
   * @public
   */
  PolicyName: string | undefined;

  /**
   * <p>The text of the policy in JSON format. The policy cannot exceed 4 KB.</p>
   *          <p> For information about the syntax of sending authorization policies, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization-policies.html">Amazon SES Developer
   *                 Guide</a>.</p>
   * @public
   */
  Policy: string | undefined;
}

/**
 * <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 * @public
 */
export interface UpdateEmailIdentityPolicyResponse {}

/**
 * <p>Represents a request to update an email template. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES
 *                 Developer Guide</a>.</p>
 * @public
 */
export interface UpdateEmailTemplateRequest {
  /**
   * <p>The name of the template.</p>
   * @public
   */
  TemplateName: string | undefined;

  /**
   * <p>The content of the email template, composed of a subject line, an HTML part, and a
   *             text-only part.</p>
   * @public
   */
  TemplateContent: EmailTemplateContent | undefined;
}

/**
 * <p>If the action is successful, the service sends back an HTTP 200 response with an empty
 *             HTTP body.</p>
 * @public
 */
export interface UpdateEmailTemplateResponse {}
