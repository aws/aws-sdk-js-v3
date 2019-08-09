import {
  _NotifyEmailType,
  _UnmarshalledNotifyEmailType
} from "./_NotifyEmailType";

/**
 * <p>The notify configuration type.</p>
 */
export interface _NotifyConfigurationType {
  /**
   * <p>The email address that is sending the email. It must be either individually verified with Amazon SES, or from a domain that has been verified with Amazon SES.</p>
   */
  From?: string;

  /**
   * <p>The destination to which the receiver of an email should reply to.</p>
   */
  ReplyTo?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the identity that is associated with the sending authorization policy. It permits Amazon Cognito to send for the email address specified in the <code>From</code> parameter.</p>
   */
  SourceArn: string;

  /**
   * <p>Email template used when a detected risk event is blocked.</p>
   */
  BlockEmail?: _NotifyEmailType;

  /**
   * <p>The email template used when a detected risk event is allowed.</p>
   */
  NoActionEmail?: _NotifyEmailType;

  /**
   * <p>The MFA email template used when MFA is challenged as part of a detected risk.</p>
   */
  MfaEmail?: _NotifyEmailType;
}

export interface _UnmarshalledNotifyConfigurationType
  extends _NotifyConfigurationType {
  /**
   * <p>Email template used when a detected risk event is blocked.</p>
   */
  BlockEmail?: _UnmarshalledNotifyEmailType;

  /**
   * <p>The email template used when a detected risk event is allowed.</p>
   */
  NoActionEmail?: _UnmarshalledNotifyEmailType;

  /**
   * <p>The MFA email template used when MFA is challenged as part of a detected risk.</p>
   */
  MfaEmail?: _UnmarshalledNotifyEmailType;
}
