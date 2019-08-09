import { _InputLocation, _UnmarshalledInputLocation } from "./_InputLocation";

/**
 * Static Key Settings
 */
export interface _StaticKeySettings {
  /**
   * The URL of the license server used for protecting content.
   */
  KeyProviderServer?: _InputLocation;

  /**
   * Static key value as a 32 character hexadecimal string.
   */
  StaticKeyValue: string;
}

export interface _UnmarshalledStaticKeySettings extends _StaticKeySettings {
  /**
   * The URL of the license server used for protecting content.
   */
  KeyProviderServer?: _UnmarshalledInputLocation;
}
