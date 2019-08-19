import {
  _SpekeKeyProvider,
  _UnmarshalledSpekeKeyProvider
} from "./_SpekeKeyProvider";

/**
 * An HTTP Live Streaming (HLS) encryption configuration.
 */
export interface _HlsEncryption {
  /**
   * A constant initialization vector for encryption (optional).
   * When not specified the initialization vector will be periodically rotated.
   *
   */
  ConstantInitializationVector?: string;

  /**
   * The encryption method to use.
   */
  EncryptionMethod?: "AES_128" | "SAMPLE_AES" | string;

  /**
   * Interval (in seconds) between each encryption key rotation.
   */
  KeyRotationIntervalSeconds?: number;

  /**
   * When enabled, the EXT-X-KEY tag will be repeated in output manifests.
   */
  RepeatExtXKey?: boolean;

  /**
   * A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys.
   */
  SpekeKeyProvider: _SpekeKeyProvider;
}

export interface _UnmarshalledHlsEncryption extends _HlsEncryption {
  /**
   * A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys.
   */
  SpekeKeyProvider: _UnmarshalledSpekeKeyProvider;
}
