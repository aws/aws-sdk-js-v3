import {
  _StaticKeyProvider,
  _UnmarshalledStaticKeyProvider
} from "./_StaticKeyProvider";

/**
 * Settings for CMAF encryption
 */
export interface _CmafEncryptionSettings {
  /**
   * This is a 128-bit, 16-byte hex value represented by a 32-character text string. If this parameter is not set then the Initialization Vector will follow the segment number by default.
   */
  ConstantInitializationVector?: string;

  /**
   * Encrypts the segments with the given encryption scheme. Leave blank to disable. Selecting 'Disabled' in the web interface also disables encryption.
   */
  EncryptionMethod?: "SAMPLE_AES" | string;

  /**
   * The Initialization Vector is a 128-bit number used in conjunction with the key for encrypting blocks. If set to INCLUDE, Initialization Vector is listed in the manifest. Otherwise Initialization Vector is not in the manifest.
   */
  InitializationVectorInManifest?: "INCLUDE" | "EXCLUDE" | string;

  /**
   * Use these settings to set up encryption with a static key provider.
   */
  StaticKeyProvider?: _StaticKeyProvider;

  /**
   * Indicates which type of key provider is used for encryption.
   */
  Type?: "STATIC_KEY" | string;
}

export interface _UnmarshalledCmafEncryptionSettings
  extends _CmafEncryptionSettings {
  /**
   * Use these settings to set up encryption with a static key provider.
   */
  StaticKeyProvider?: _UnmarshalledStaticKeyProvider;
}
