import {
  _SpekeKeyProvider,
  _UnmarshalledSpekeKeyProvider
} from "./_SpekeKeyProvider";

/**
 * A Dynamic Adaptive Streaming over HTTP (DASH) encryption configuration.
 */
export interface _DashEncryption {
  /**
   * Time (in seconds) between each encryption key rotation.
   */
  KeyRotationIntervalSeconds?: number;

  /**
   * A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys.
   */
  SpekeKeyProvider: _SpekeKeyProvider;
}

export interface _UnmarshalledDashEncryption extends _DashEncryption {
  /**
   * A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys.
   */
  SpekeKeyProvider: _UnmarshalledSpekeKeyProvider;
}
