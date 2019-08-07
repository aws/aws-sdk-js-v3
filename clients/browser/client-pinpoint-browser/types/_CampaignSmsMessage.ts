/**
 * SMS message configuration.
 */
export interface _CampaignSmsMessage {
  /**
   * The SMS text body.
   */
  Body?: string;

  /**
   * Is this is a transactional SMS message, otherwise a promotional message.
   */
  MessageType?: "TRANSACTIONAL" | "PROMOTIONAL" | string;

  /**
   * Sender ID of sent message.
   */
  SenderId?: string;
}

export type _UnmarshalledCampaignSmsMessage = _CampaignSmsMessage;
