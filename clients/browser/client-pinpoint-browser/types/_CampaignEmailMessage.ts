/**
 * The email message configuration.
 */
export interface _CampaignEmailMessage {
  /**
   * The email text body.
   */
  Body?: string;

  /**
   * The email address used to send the email from. Defaults to use FromAddress specified in the Email Channel.
   */
  FromAddress?: string;

  /**
   * The email html body.
   */
  HtmlBody?: string;

  /**
   * The email title (Or subject).
   */
  Title?: string;
}

export type _UnmarshalledCampaignEmailMessage = _CampaignEmailMessage;
