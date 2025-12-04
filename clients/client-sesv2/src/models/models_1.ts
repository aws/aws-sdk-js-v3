// smithy-typescript generated code
import { ReputationEntityType, SendingStatus } from "./enums";

import { type EmailTemplateContent, type EventDestinationDefinition, Tag, Topic, TopicPreference } from "./models_0";

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
  MessageId?: string | undefined;
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
  TopicPreferences?: TopicPreference[] | undefined;

  /**
   * <p>A boolean value status noting if the contact is unsubscribed from all contact list
   *             topics.</p>
   * @public
   */
  UnsubscribeAll?: boolean | undefined;

  /**
   * <p>The attribute data attached to a contact.</p>
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
   * <p>The name of the contact list.</p>
   * @public
   */
  ContactListName: string | undefined;

  /**
   * <p>An interest group, theme, or label within a list. A contact list can have multiple
   *             topics.</p>
   * @public
   */
  Topics?: Topic[] | undefined;

  /**
   * <p>A description of what the contact list is about.</p>
   * @public
   */
  Description?: string | undefined;
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

/**
 * <p>Represents a request to update the customer-managed sending status for a reputation entity.</p>
 * @public
 */
export interface UpdateReputationEntityCustomerManagedStatusRequest {
  /**
   * <p>The type of reputation entity. Currently, only <code>RESOURCE</code> type entities are supported.</p>
   * @public
   */
  ReputationEntityType: ReputationEntityType | undefined;

  /**
   * <p>The unique identifier for the reputation entity. For resource-type entities,
   *             this is the Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  ReputationEntityReference: string | undefined;

  /**
   * <p>The new customer-managed sending status for the reputation entity. This can be one of the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ENABLED</code> – Allow sending for this entity.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DISABLED</code> – Prevent sending for this entity.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>REINSTATED</code> – Allow sending even if there are active reputation findings.</p>
   *             </li>
   *          </ul>
   * @public
   */
  SendingStatus: SendingStatus | undefined;
}

/**
 * <p>If the action is successful, the service sends back an HTTP 200 response with an empty HTTP body.</p>
 * @public
 */
export interface UpdateReputationEntityCustomerManagedStatusResponse {}

/**
 * <p>Represents a request to update the reputation management policy for a reputation entity.</p>
 * @public
 */
export interface UpdateReputationEntityPolicyRequest {
  /**
   * <p>The type of reputation entity. Currently, only <code>RESOURCE</code> type entities are supported.</p>
   * @public
   */
  ReputationEntityType: ReputationEntityType | undefined;

  /**
   * <p>The unique identifier for the reputation entity. For resource-type entities,
   *             this is the Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  ReputationEntityReference: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the reputation management policy to apply
   *             to this entity. This is an Amazon Web Services Amazon SES-managed policy.</p>
   * @public
   */
  ReputationEntityPolicy: string | undefined;
}

/**
 * <p>If the action is successful, the service sends back an HTTP 200 response with an empty HTTP body.</p>
 * @public
 */
export interface UpdateReputationEntityPolicyResponse {}
