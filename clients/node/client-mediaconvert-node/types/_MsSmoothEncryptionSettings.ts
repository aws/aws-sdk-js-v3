import {
  _SpekeKeyProvider,
  _UnmarshalledSpekeKeyProvider
} from "./_SpekeKeyProvider";

/**
 * If you are using DRM, set DRM System (MsSmoothEncryptionSettings) to specify the value SpekeKeyProvider.
 */
export interface _MsSmoothEncryptionSettings {
  /**
   * Settings for use with a SPEKE key provider
   */
  SpekeKeyProvider?: _SpekeKeyProvider;
}

export interface _UnmarshalledMsSmoothEncryptionSettings
  extends _MsSmoothEncryptionSettings {
  /**
   * Settings for use with a SPEKE key provider
   */
  SpekeKeyProvider?: _UnmarshalledSpekeKeyProvider;
}
