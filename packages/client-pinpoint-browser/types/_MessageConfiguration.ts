import { _Message, _UnmarshalledMessage } from "./_Message";
import {
  _CampaignEmailMessage,
  _UnmarshalledCampaignEmailMessage
} from "./_CampaignEmailMessage";
import {
  _CampaignSmsMessage,
  _UnmarshalledCampaignSmsMessage
} from "./_CampaignSmsMessage";

/**
 * Message configuration for a campaign.
 */
export interface _MessageConfiguration {
  /**
   * The message that the campaign delivers to ADM channels. Overrides the default message.
   */
  ADMMessage?: _Message;

  /**
   * The message that the campaign delivers to APNS channels. Overrides the default message.
   */
  APNSMessage?: _Message;

  /**
   * The message that the campaign delivers to Baidu channels. Overrides the default message.
   */
  BaiduMessage?: _Message;

  /**
   * The default message for all channels.
   */
  DefaultMessage?: _Message;

  /**
   * The email message configuration.
   */
  EmailMessage?: _CampaignEmailMessage;

  /**
   * The message that the campaign delivers to GCM channels. Overrides the default message.
   */
  GCMMessage?: _Message;

  /**
   * The SMS message configuration.
   */
  SMSMessage?: _CampaignSmsMessage;
}

export interface _UnmarshalledMessageConfiguration
  extends _MessageConfiguration {
  /**
   * The message that the campaign delivers to ADM channels. Overrides the default message.
   */
  ADMMessage?: _UnmarshalledMessage;

  /**
   * The message that the campaign delivers to APNS channels. Overrides the default message.
   */
  APNSMessage?: _UnmarshalledMessage;

  /**
   * The message that the campaign delivers to Baidu channels. Overrides the default message.
   */
  BaiduMessage?: _UnmarshalledMessage;

  /**
   * The default message for all channels.
   */
  DefaultMessage?: _UnmarshalledMessage;

  /**
   * The email message configuration.
   */
  EmailMessage?: _UnmarshalledCampaignEmailMessage;

  /**
   * The message that the campaign delivers to GCM channels. Overrides the default message.
   */
  GCMMessage?: _UnmarshalledMessage;

  /**
   * The SMS message configuration.
   */
  SMSMessage?: _UnmarshalledCampaignSmsMessage;
}
