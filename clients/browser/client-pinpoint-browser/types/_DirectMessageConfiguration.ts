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

/**
 * Message definitions for the default message and any messages that are tailored for specific channels.
 */
export interface _DirectMessageConfiguration {
  /**
   * The message to ADM channels. Overrides the default push notification message.
   */
  ADMMessage?: _ADMMessage;

  /**
   * The message to APNS channels. Overrides the default push notification message.
   */
  APNSMessage?: _APNSMessage;

  /**
   * The message to Baidu GCM channels. Overrides the default push notification message.
   */
  BaiduMessage?: _BaiduMessage;

  /**
   * The default message for all channels.
   */
  DefaultMessage?: _DefaultMessage;

  /**
   * The default push notification message for all push channels.
   */
  DefaultPushNotificationMessage?: _DefaultPushNotificationMessage;

  /**
   * The message to Email channels. Overrides the default message.
   */
  EmailMessage?: _EmailMessage;

  /**
   * The message to GCM channels. Overrides the default push notification message.
   */
  GCMMessage?: _GCMMessage;

  /**
   * The message to SMS channels. Overrides the default message.
   */
  SMSMessage?: _SMSMessage;
}

export interface _UnmarshalledDirectMessageConfiguration
  extends _DirectMessageConfiguration {
  /**
   * The message to ADM channels. Overrides the default push notification message.
   */
  ADMMessage?: _UnmarshalledADMMessage;

  /**
   * The message to APNS channels. Overrides the default push notification message.
   */
  APNSMessage?: _UnmarshalledAPNSMessage;

  /**
   * The message to Baidu GCM channels. Overrides the default push notification message.
   */
  BaiduMessage?: _UnmarshalledBaiduMessage;

  /**
   * The default message for all channels.
   */
  DefaultMessage?: _UnmarshalledDefaultMessage;

  /**
   * The default push notification message for all push channels.
   */
  DefaultPushNotificationMessage?: _UnmarshalledDefaultPushNotificationMessage;

  /**
   * The message to Email channels. Overrides the default message.
   */
  EmailMessage?: _UnmarshalledEmailMessage;

  /**
   * The message to GCM channels. Overrides the default push notification message.
   */
  GCMMessage?: _UnmarshalledGCMMessage;

  /**
   * The message to SMS channels. Overrides the default message.
   */
  SMSMessage?: _UnmarshalledSMSMessage;
}
