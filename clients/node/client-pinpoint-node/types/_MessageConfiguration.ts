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
 * <p>Specifies the message configuration settings for a campaign.</p>
 */
export interface _MessageConfiguration {
  /**
   * <p>The message that the campaign sends through the ADM (Amazon Device Messaging) channel. This message overrides the default message.</p>
   */
  ADMMessage?: _Message;

  /**
   * <p>The message that the campaign sends through the APNs (Apple Push Notification service) channel. This message overrides the default message.</p>
   */
  APNSMessage?: _Message;

  /**
   * <p>The message that the campaign sends through the Baidu (Baidu Cloud Push) channel. This message overrides the default message.</p>
   */
  BaiduMessage?: _Message;

  /**
   * <p>The default message that the campaign sends through all the channels that are configured for the campaign.</p>
   */
  DefaultMessage?: _Message;

  /**
   * <p>The message that the campaign sends through the email channel.</p>
   */
  EmailMessage?: _CampaignEmailMessage;

  /**
   * <p>The message that the campaign sends through the GCM channel, which enables Amazon Pinpoint to send push notifications through the Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), service. This message overrides the default message.</p>
   */
  GCMMessage?: _Message;

  /**
   * <p>The message that the campaign sends through the SMS channel.</p>
   */
  SMSMessage?: _CampaignSmsMessage;
}

export interface _UnmarshalledMessageConfiguration
  extends _MessageConfiguration {
  /**
   * <p>The message that the campaign sends through the ADM (Amazon Device Messaging) channel. This message overrides the default message.</p>
   */
  ADMMessage?: _UnmarshalledMessage;

  /**
   * <p>The message that the campaign sends through the APNs (Apple Push Notification service) channel. This message overrides the default message.</p>
   */
  APNSMessage?: _UnmarshalledMessage;

  /**
   * <p>The message that the campaign sends through the Baidu (Baidu Cloud Push) channel. This message overrides the default message.</p>
   */
  BaiduMessage?: _UnmarshalledMessage;

  /**
   * <p>The default message that the campaign sends through all the channels that are configured for the campaign.</p>
   */
  DefaultMessage?: _UnmarshalledMessage;

  /**
   * <p>The message that the campaign sends through the email channel.</p>
   */
  EmailMessage?: _UnmarshalledCampaignEmailMessage;

  /**
   * <p>The message that the campaign sends through the GCM channel, which enables Amazon Pinpoint to send push notifications through the Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), service. This message overrides the default message.</p>
   */
  GCMMessage?: _UnmarshalledMessage;

  /**
   * <p>The message that the campaign sends through the SMS channel.</p>
   */
  SMSMessage?: _UnmarshalledCampaignSmsMessage;
}
