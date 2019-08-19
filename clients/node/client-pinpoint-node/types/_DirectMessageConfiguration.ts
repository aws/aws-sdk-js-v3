import { _ADMMessage, _UnmarshalledADMMessage } from "./_ADMMessage";
import { _APNSMessage, _UnmarshalledAPNSMessage } from "./_APNSMessage";
import { _BaiduMessage, _UnmarshalledBaiduMessage } from "./_BaiduMessage";
import {
  _DefaultMessage,
  _UnmarshalledDefaultMessage
} from "./_DefaultMessage";
import {
  _DefaultPushNotificationMessage,
  _UnmarshalledDefaultPushNotificationMessage
} from "./_DefaultPushNotificationMessage";
import { _EmailMessage, _UnmarshalledEmailMessage } from "./_EmailMessage";
import { _GCMMessage, _UnmarshalledGCMMessage } from "./_GCMMessage";
import { _SMSMessage, _UnmarshalledSMSMessage } from "./_SMSMessage";
import { _VoiceMessage, _UnmarshalledVoiceMessage } from "./_VoiceMessage";

/**
 * <p>Specifies the settings and content for the default message and any default messages that you tailored for specific channels.</p>
 */
export interface _DirectMessageConfiguration {
  /**
   * <p>The default push notification message for the ADM (Amazon Device Messaging) channel. This message overrides the default push notification message (DefaultPushNotificationMessage).</p>
   */
  ADMMessage?: _ADMMessage;

  /**
   * <p>The default push notification message for the APNs (Apple Push Notification service) channel. This message overrides the default push notification message (DefaultPushNotificationMessage).</p>
   */
  APNSMessage?: _APNSMessage;

  /**
   * <p>The default push notification message for the Baidu (Baidu Cloud Push) channel. This message overrides the default push notification message (DefaultPushNotificationMessage).</p>
   */
  BaiduMessage?: _BaiduMessage;

  /**
   * <p>The default message body for all channels.</p>
   */
  DefaultMessage?: _DefaultMessage;

  /**
   * <p>The default push notification message for all push channels.</p>
   */
  DefaultPushNotificationMessage?: _DefaultPushNotificationMessage;

  /**
   * <p>The default message for the email channel. This message overrides the default message (DefaultMessage).</p>
   */
  EmailMessage?: _EmailMessage;

  /**
   * <p>The default push notification message for the GCM channel, which is used to send notifications through the Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), service. This message overrides the default push notification message (DefaultPushNotificationMessage).</p>
   */
  GCMMessage?: _GCMMessage;

  /**
   * <p>The default message for the SMS channel. This message overrides the default message (DefaultMessage).</p>
   */
  SMSMessage?: _SMSMessage;

  /**
   * <p>The default message for the voice channel. This message overrides the default message (DefaultMessage).</p>
   */
  VoiceMessage?: _VoiceMessage;
}

export interface _UnmarshalledDirectMessageConfiguration
  extends _DirectMessageConfiguration {
  /**
   * <p>The default push notification message for the ADM (Amazon Device Messaging) channel. This message overrides the default push notification message (DefaultPushNotificationMessage).</p>
   */
  ADMMessage?: _UnmarshalledADMMessage;

  /**
   * <p>The default push notification message for the APNs (Apple Push Notification service) channel. This message overrides the default push notification message (DefaultPushNotificationMessage).</p>
   */
  APNSMessage?: _UnmarshalledAPNSMessage;

  /**
   * <p>The default push notification message for the Baidu (Baidu Cloud Push) channel. This message overrides the default push notification message (DefaultPushNotificationMessage).</p>
   */
  BaiduMessage?: _UnmarshalledBaiduMessage;

  /**
   * <p>The default message body for all channels.</p>
   */
  DefaultMessage?: _UnmarshalledDefaultMessage;

  /**
   * <p>The default push notification message for all push channels.</p>
   */
  DefaultPushNotificationMessage?: _UnmarshalledDefaultPushNotificationMessage;

  /**
   * <p>The default message for the email channel. This message overrides the default message (DefaultMessage).</p>
   */
  EmailMessage?: _UnmarshalledEmailMessage;

  /**
   * <p>The default push notification message for the GCM channel, which is used to send notifications through the Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), service. This message overrides the default push notification message (DefaultPushNotificationMessage).</p>
   */
  GCMMessage?: _UnmarshalledGCMMessage;

  /**
   * <p>The default message for the SMS channel. This message overrides the default message (DefaultMessage).</p>
   */
  SMSMessage?: _UnmarshalledSMSMessage;

  /**
   * <p>The default message for the voice channel. This message overrides the default message (DefaultMessage).</p>
   */
  VoiceMessage?: _UnmarshalledVoiceMessage;
}
