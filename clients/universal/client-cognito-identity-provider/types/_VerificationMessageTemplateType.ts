/**
 * <p>The template for verification messages.</p>
 */
export interface _VerificationMessageTemplateType {
  /**
   * <p>The SMS message template.</p>
   */
  SmsMessage?: string;

  /**
   * <p>The email message template.</p>
   */
  EmailMessage?: string;

  /**
   * <p>The subject line for the email message template.</p>
   */
  EmailSubject?: string;

  /**
   * <p>The email message template for sending a confirmation link to the user.</p>
   */
  EmailMessageByLink?: string;

  /**
   * <p>The subject line for the email message template for sending a confirmation link to the user.</p>
   */
  EmailSubjectByLink?: string;

  /**
   * <p>The default email option.</p>
   */
  DefaultEmailOption?: "CONFIRM_WITH_LINK" | "CONFIRM_WITH_CODE" | string;
}

export type _UnmarshalledVerificationMessageTemplateType = _VerificationMessageTemplateType;
