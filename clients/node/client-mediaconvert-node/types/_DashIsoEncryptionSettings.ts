import {
  _SpekeKeyProvider,
  _UnmarshalledSpekeKeyProvider
} from "./_SpekeKeyProvider";

/**
 * Specifies DRM settings for DASH outputs.
 */
export interface _DashIsoEncryptionSettings {
  /**
   * This setting can improve the compatibility of your output with video players on obsolete devices. It applies only to DASH H.264 outputs with DRM encryption. Choose Unencrypted SEI (UNENCRYPTED_SEI) only to correct problems with playback on older devices. Otherwise, keep the default setting CENC v1 (CENC_V1). If you choose Unencrypted SEI, for that output, the service will exclude the access unit delimiter and will leave the SEI NAL units unencrypted.
   */
  PlaybackDeviceCompatibility?: "CENC_V1" | "UNENCRYPTED_SEI" | string;

  /**
   * Settings for use with a SPEKE key provider
   */
  SpekeKeyProvider?: _SpekeKeyProvider;
}

export interface _UnmarshalledDashIsoEncryptionSettings
  extends _DashIsoEncryptionSettings {
  /**
   * Settings for use with a SPEKE key provider
   */
  SpekeKeyProvider?: _UnmarshalledSpekeKeyProvider;
}
