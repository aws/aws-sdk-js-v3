/**
 * <p>Specifies the content and settings for an SMS message that's sent to recipients of a campaign.</p>
 */
export interface _CampaignSmsMessage {
  /**
   * <p>The body of the SMS message.</p>
   */
  Body?: string;

  /**
   * <p>The type of SMS message. Valid values are: TRANSACTIONAL, the message is critical or time-sensitive, such as a one-time password that supports a customer transaction; and, PROMOTIONAL, the message isn't critical or time-sensitive, such as a marketing message.</p>
   */
  MessageType?: "TRANSACTIONAL" | "PROMOTIONAL" | string;

  /**
   * <p>The sender ID to display on recipients' devices when they receive the SMS message.</p>
   */
  SenderId?: string;
}

export type _UnmarshalledCampaignSmsMessage = _CampaignSmsMessage;
