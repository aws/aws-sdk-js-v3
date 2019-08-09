import {
  _StaticKeySettings,
  _UnmarshalledStaticKeySettings
} from "./_StaticKeySettings";

/**
 * Key Provider Settings
 */
export interface _KeyProviderSettings {
  /**
   * Static Key Settings
   */
  StaticKeySettings?: _StaticKeySettings;
}

export interface _UnmarshalledKeyProviderSettings extends _KeyProviderSettings {
  /**
   * Static Key Settings
   */
  StaticKeySettings?: _UnmarshalledStaticKeySettings;
}
