/**
 * <p>Set of options which defines notification preferences of given action.</p>
 */
export interface _NotificationOptions {
  /**
   * <p>Boolean value to indicate an email notification should be sent to the receipients.</p>
   */
  SendEmail?: boolean;

  /**
   * <p>Text value to be included in the email body.</p>
   */
  EmailMessage?: string;
}

export type _UnmarshalledNotificationOptions = _NotificationOptions;
