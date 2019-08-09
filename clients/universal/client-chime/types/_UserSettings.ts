import {
  _TelephonySettings,
  _UnmarshalledTelephonySettings
} from "./_TelephonySettings";

/**
 * <p>Settings associated with an Amazon Chime user, including inbound and outbound calling and text messaging.</p>
 */
export interface _UserSettings {
  /**
   * <p>The telephony settings associated with the user.</p>
   */
  Telephony: _TelephonySettings;
}

export interface _UnmarshalledUserSettings extends _UserSettings {
  /**
   * <p>The telephony settings associated with the user.</p>
   */
  Telephony: _UnmarshalledTelephonySettings;
}
