/**
 * <p>Specifies the content and "From" address for an email message that's sent to recipients of a campaign.</p>
 */
export interface _CampaignEmailMessage {
  /**
   * <p>The body of the email for recipients whose email clients don't support HTML content.</p>
   */
  Body?: string;

  /**
   * <p>The verified email address to send the email from. The default address is the FromAddress specified for the email channel for the application.</p>
   */
  FromAddress?: string;

  /**
   * <p>The body of the email, in HTML format, for recipients whose email clients support HTML content.</p>
   */
  HtmlBody?: string;

  /**
   * <p>The subject line, or title, of the email.</p>
   */
  Title: string;
}

export type _UnmarshalledCampaignEmailMessage = _CampaignEmailMessage;
