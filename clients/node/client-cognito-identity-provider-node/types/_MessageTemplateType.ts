/**
 * <p>The message template structure.</p>
 */
export interface _MessageTemplateType {
  /**
   * <p>The message template for SMS messages.</p>
   */
  SMSMessage?: string;

  /**
   * <p>The message template for email messages.</p>
   */
  EmailMessage?: string;

  /**
   * <p>The subject line for email messages.</p>
   */
  EmailSubject?: string;
}

export type _UnmarshalledMessageTemplateType = _MessageTemplateType;
