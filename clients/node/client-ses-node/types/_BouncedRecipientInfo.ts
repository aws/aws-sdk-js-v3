import {
  _RecipientDsnFields,
  _UnmarshalledRecipientDsnFields
} from "./_RecipientDsnFields";

/**
 * <p>Recipient-related information to include in the Delivery Status Notification (DSN) when an email that Amazon SES receives on your behalf bounces.</p> <p>For information about receiving email through Amazon SES, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email.html">Amazon SES Developer Guide</a>.</p>
 */
export interface _BouncedRecipientInfo {
  /**
   * <p>The email address of the recipient of the bounced email.</p>
   */
  Recipient: string;

  /**
   * <p>This parameter is used only for sending authorization. It is the ARN of the identity that is associated with the sending authorization policy that permits you to receive email for the recipient of the bounced email. For more information about sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p>
   */
  RecipientArn?: string;

  /**
   * <p>The reason for the bounce. You must provide either this parameter or <code>RecipientDsnFields</code>.</p>
   */
  BounceType?:
    | "DoesNotExist"
    | "MessageTooLarge"
    | "ExceededQuota"
    | "ContentRejected"
    | "Undefined"
    | "TemporaryFailure"
    | string;

  /**
   * <p>Recipient-related DSN fields, most of which would normally be filled in automatically when provided with a <code>BounceType</code>. You must provide either this parameter or <code>BounceType</code>.</p>
   */
  RecipientDsnFields?: _RecipientDsnFields;
}

export interface _UnmarshalledBouncedRecipientInfo
  extends _BouncedRecipientInfo {
  /**
   * <p>Recipient-related DSN fields, most of which would normally be filled in automatically when provided with a <code>BounceType</code>. You must provide either this parameter or <code>BounceType</code>.</p>
   */
  RecipientDsnFields?: _UnmarshalledRecipientDsnFields;
}
