// smithy-typescript generated code
import {
  BehaviorOnMxFailure,
  BulkEmailContent,
  BulkEmailEntry,
  BulkEmailEntryResult,
  Destination,
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
 * @public
 * <p>A request to configure the custom MAIL FROM domain for a verified identity.</p>
 */
export interface PutEmailIdentityMailFromAttributesRequest {
  /**
   * @public
   * <p>The verified email identity.</p>
   */
  EmailIdentity: string | undefined;

  /**
   * @public
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
   */
  MailFromDomain?: string;

  /**
   * @public
   * <p>The action to take if the required MX record isn't found when you send an email. When
   *             you set this value to <code>UseDefaultValue</code>, the mail is sent using
   *                 <i>amazonses.com</i> as the MAIL FROM domain. When you set this value
   *             to <code>RejectMessage</code>, the Amazon SES API v2 returns a
   *                 <code>MailFromDomainNotVerified</code> error, and doesn't attempt to deliver the
   *             email.</p>
   *          <p>These behaviors are taken when the custom MAIL FROM domain configuration is in the
   *                 <code>Pending</code>, <code>Failed</code>, and <code>TemporaryFailure</code>
   *             states.</p>
   */
  BehaviorOnMxFailure?: BehaviorOnMxFailure;
}

/**
 * @public
 * <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 */
export interface PutEmailIdentityMailFromAttributesResponse {}

/**
 * @public
 * <p>A request to add an email destination to the suppression list for your account.</p>
 */
export interface PutSuppressedDestinationRequest {
  /**
   * @public
   * <p>The email address that should be added to the suppression list for your
   *             account.</p>
   */
  EmailAddress: string | undefined;

  /**
   * @public
   * <p>The factors that should cause the email address to be added to the suppression list
   *             for your account.</p>
   */
  Reason: SuppressionListReason | undefined;
}

/**
 * @public
 * <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 */
export interface PutSuppressedDestinationResponse {}

/**
 * @public
 * <p>Represents a request to send email messages to multiple destinations using Amazon SES. For
 *             more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer
 *                 Guide</a>.</p>
 */
export interface SendBulkEmailRequest {
  /**
   * @public
   * <p>The email address to use as the "From" address for the email. The
   *             address that you specify has to be verified.</p>
   */
  FromEmailAddress?: string;

  /**
   * @public
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
   */
  FromEmailAddressIdentityArn?: string;

  /**
   * @public
   * <p>The "Reply-to" email addresses for the message. When the recipient replies to the
   *             message, each Reply-to address receives the reply.</p>
   */
  ReplyToAddresses?: string[];

  /**
   * @public
   * <p>The address that you want bounce and complaint notifications to be sent to.</p>
   */
  FeedbackForwardingEmailAddress?: string;

  /**
   * @public
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
   */
  FeedbackForwardingEmailAddressIdentityArn?: string;

  /**
   * @public
   * <p>A list of tags, in the form of name/value pairs, to apply to an email that you send
   *             using the <code>SendEmail</code> operation. Tags correspond to characteristics of the
   *             email that you define, so that you can publish email sending events.</p>
   */
  DefaultEmailTags?: MessageTag[];

  /**
   * @public
   * <p>An object that contains the body of the message. You can specify a template
   *             message.</p>
   */
  DefaultContent: BulkEmailContent | undefined;

  /**
   * @public
   * <p>The list of bulk email entry objects.</p>
   */
  BulkEmailEntries: BulkEmailEntry[] | undefined;

  /**
   * @public
   * <p>The name of the configuration set to use when sending the email.</p>
   */
  ConfigurationSetName?: string;
}

/**
 * @public
 * <p>The following data is returned in JSON format by the service.</p>
 */
export interface SendBulkEmailResponse {
  /**
   * @public
   * <p>One object per intended recipient. Check each response object and retry any messages
   *             with a failure status.</p>
   */
  BulkEmailEntryResults: BulkEmailEntryResult[] | undefined;
}

/**
 * @public
 * <p>Represents a request to send a custom verification email to a specified
 *             recipient.</p>
 */
export interface SendCustomVerificationEmailRequest {
  /**
   * @public
   * <p>The email address to verify.</p>
   */
  EmailAddress: string | undefined;

  /**
   * @public
   * <p>The name of the custom verification email template to use when sending the
   *             verification email.</p>
   */
  TemplateName: string | undefined;

  /**
   * @public
   * <p>Name of a configuration set to use when sending the verification email.</p>
   */
  ConfigurationSetName?: string;
}

/**
 * @public
 * <p>The following element is returned by the service.</p>
 */
export interface SendCustomVerificationEmailResponse {
  /**
   * @public
   * <p>The unique message identifier returned from the
   *                 <code>SendCustomVerificationEmail</code> operation.</p>
   */
  MessageId?: string;
}

/**
 * @public
 * <p>Represents a request to send a single formatted email using Amazon SES. For more
 *             information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-email-formatted.html">Amazon SES Developer
 *                 Guide</a>.</p>
 */
export interface SendEmailRequest {
  /**
   * @public
   * <p>The email address to use as the "From" address for the email. The
   *             address that you specify has to be verified.
   *             </p>
   */
  FromEmailAddress?: string;

  /**
   * @public
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
   */
  FromEmailAddressIdentityArn?: string;

  /**
   * @public
   * <p>An object that contains the recipients of the email message.</p>
   */
  Destination?: Destination;

  /**
   * @public
   * <p>The "Reply-to" email addresses for the message. When the recipient replies to the
   *             message, each Reply-to address receives the reply.</p>
   */
  ReplyToAddresses?: string[];

  /**
   * @public
   * <p>The address that you want bounce and complaint notifications to be sent to.</p>
   */
  FeedbackForwardingEmailAddress?: string;

  /**
   * @public
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
   */
  FeedbackForwardingEmailAddressIdentityArn?: string;

  /**
   * @public
   * <p>An object that contains the body of the message. You can send either a Simple message
   *             Raw message or a template Message.</p>
   */
  Content: EmailContent | undefined;

  /**
   * @public
   * <p>A list of tags, in the form of name/value pairs, to apply to an email that you send
   *             using the <code>SendEmail</code> operation. Tags correspond to characteristics of the
   *             email that you define, so that you can publish email sending events. </p>
   */
  EmailTags?: MessageTag[];

  /**
   * @public
   * <p>The name of the configuration set to use when sending the email.</p>
   */
  ConfigurationSetName?: string;

  /**
   * @public
   * <p>An object used to specify a list or topic to which an email belongs, which will be
   *             used when a contact chooses to unsubscribe.</p>
   */
  ListManagementOptions?: ListManagementOptions;
}

/**
 * @public
 * <p>A unique message ID that you receive when an email is accepted for sending.</p>
 */
export interface SendEmailResponse {
  /**
   * @public
   * <p>A unique identifier for the message that is generated when the message is
   *             accepted.</p>
   *          <note>
   *             <p>It's possible for Amazon SES to accept a message without sending it. This can happen
   *                 when the message that you're trying to send has an attachment contains a virus, or
   *                 when you send a templated email that contains invalid personalization content, for
   *                 example.</p>
   *          </note>
   */
  MessageId?: string;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource that you want to add one or more tags
   *             to.</p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>A list of the tags that you want to add to the resource. A tag consists of a required
   *             tag key (<code>Key</code>) and an associated tag value (<code>Value</code>). The maximum
   *             length of a tag key is 128 characters. The maximum length of a tag value is 256
   *             characters.</p>
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 * <p>>Represents a request to create a preview of the MIME content of an email when
 *             provided with a template and a set of replacement data.</p>
 */
export interface TestRenderEmailTemplateRequest {
  /**
   * @public
   * <p>The name of the template.</p>
   */
  TemplateName: string | undefined;

  /**
   * @public
   * <p>A list of replacement values to apply to the template. This parameter is a JSON
   *             object, typically consisting of key-value pairs in which the keys correspond to
   *             replacement tags in the email template.</p>
   */
  TemplateData: string | undefined;
}

/**
 * @public
 * <p>The following element is returned by the service.</p>
 */
export interface TestRenderEmailTemplateResponse {
  /**
   * @public
   * <p>The complete MIME message rendered by applying the data in the
   *                 <code>TemplateData</code> parameter to the template specified in the TemplateName
   *             parameter.</p>
   */
  RenderedTemplate: string | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource that you want to remove one or more
   *             tags from.</p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>The tags (tag keys) that you want to remove from the resource. When you specify a tag
   *             key, the action removes both that key and its associated tag value.</p>
   *          <p>To remove more than one tag from the resource, append the <code>TagKeys</code>
   *             parameter and argument for each additional tag to remove, separated by an ampersand. For
   *             example:
   *                 <code>/v2/email/tags?ResourceArn=ResourceArn&TagKeys=Key1&TagKeys=Key2</code>
   *          </p>
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 * <p>A request to change the settings for an event destination for a configuration
 *             set.</p>
 */
export interface UpdateConfigurationSetEventDestinationRequest {
  /**
   * @public
   * <p>The name of the configuration set that contains the event destination to
   *             modify.</p>
   */
  ConfigurationSetName: string | undefined;

  /**
   * @public
   * <p>The name of the event destination.</p>
   */
  EventDestinationName: string | undefined;

  /**
   * @public
   * <p>An object that defines the event destination.</p>
   */
  EventDestination: EventDestinationDefinition | undefined;
}

/**
 * @public
 * <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 */
export interface UpdateConfigurationSetEventDestinationResponse {}

/**
 * @public
 */
export interface UpdateContactRequest {
  /**
   * @public
   * <p>The name of the contact list.</p>
   */
  ContactListName: string | undefined;

  /**
   * @public
   * <p>The contact's email address.</p>
   */
  EmailAddress: string | undefined;

  /**
   * @public
   * <p>The contact's preference for being opted-in to or opted-out of a topic.</p>
   */
  TopicPreferences?: TopicPreference[];

  /**
   * @public
   * <p>A boolean value status noting if the contact is unsubscribed from all contact list
   *             topics.</p>
   */
  UnsubscribeAll?: boolean;

  /**
   * @public
   * <p>The attribute data attached to a contact.</p>
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
   * @public
   * <p>The name of the contact list.</p>
   */
  ContactListName: string | undefined;

  /**
   * @public
   * <p>An interest group, theme, or label within a list. A contact list can have multiple
   *             topics.</p>
   */
  Topics?: Topic[];

  /**
   * @public
   * <p>A description of what the contact list is about.</p>
   */
  Description?: string;
}

/**
 * @public
 */
export interface UpdateContactListResponse {}

/**
 * @public
 * <p>Represents a request to update an existing custom verification email template.</p>
 */
export interface UpdateCustomVerificationEmailTemplateRequest {
  /**
   * @public
   * <p>The name of the custom verification email template that you want to update.</p>
   */
  TemplateName: string | undefined;

  /**
   * @public
   * <p>The email address that the custom verification email is sent from.</p>
   */
  FromEmailAddress: string | undefined;

  /**
   * @public
   * <p>The subject line of the custom verification email.</p>
   */
  TemplateSubject: string | undefined;

  /**
   * @public
   * <p>The content of the custom verification email. The total size of the email must be less
   *             than 10 MB. The message body may contain HTML, with some limitations. For more
   *             information, see <a href="https://docs.aws.amazon.com/ses/latest/dg/creating-identities.html#send-email-verify-address-custom-faq">Custom verification email frequently asked questions</a> in the <i>Amazon SES
   *                 Developer Guide</i>.</p>
   */
  TemplateContent: string | undefined;

  /**
   * @public
   * <p>The URL that the recipient of the verification email is sent to if his or her address
   *             is successfully verified.</p>
   */
  SuccessRedirectionURL: string | undefined;

  /**
   * @public
   * <p>The URL that the recipient of the verification email is sent to if his or her address
   *             is not successfully verified.</p>
   */
  FailureRedirectionURL: string | undefined;
}

/**
 * @public
 * <p>If the action is successful, the service sends back an HTTP 200 response with an empty
 *             HTTP body.</p>
 */
export interface UpdateCustomVerificationEmailTemplateResponse {}

/**
 * @public
 * <p>Represents a request to update a sending authorization policy for an identity. Sending
 *             authorization is an Amazon SES feature that enables you to authorize other senders to use
 *             your identities. For information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization-identity-owner-tasks-management.html">Amazon SES Developer Guide</a>.</p>
 */
export interface UpdateEmailIdentityPolicyRequest {
  /**
   * @public
   * <p>The email identity.</p>
   */
  EmailIdentity: string | undefined;

  /**
   * @public
   * <p>The name of the policy.</p>
   *          <p>The policy name cannot exceed 64 characters and can only include alphanumeric
   *             characters, dashes, and underscores.</p>
   */
  PolicyName: string | undefined;

  /**
   * @public
   * <p>The text of the policy in JSON format. The policy cannot exceed 4 KB.</p>
   *          <p> For information about the syntax of sending authorization policies, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization-policies.html">Amazon SES Developer
   *                 Guide</a>.</p>
   */
  Policy: string | undefined;
}

/**
 * @public
 * <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 */
export interface UpdateEmailIdentityPolicyResponse {}

/**
 * @public
 * <p>Represents a request to update an email template. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES
 *                 Developer Guide</a>.</p>
 */
export interface UpdateEmailTemplateRequest {
  /**
   * @public
   * <p>The name of the template.</p>
   */
  TemplateName: string | undefined;

  /**
   * @public
   * <p>The content of the email template, composed of a subject line, an HTML part, and a
   *             text-only part.</p>
   */
  TemplateContent: EmailTemplateContent | undefined;
}

/**
 * @public
 * <p>If the action is successful, the service sends back an HTTP 200 response with an empty
 *             HTTP body.</p>
 */
export interface UpdateEmailTemplateResponse {}
