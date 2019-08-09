import {
  _SpekeKeyProvider,
  _UnmarshalledSpekeKeyProvider
} from "./_SpekeKeyProvider";

/**
 * A CMAF encryption configuration.
 */
export interface _CmafEncryption {
  /**
   * A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys.
   */
  SpekeKeyProvider: _SpekeKeyProvider;
}

export interface _UnmarshalledCmafEncryption extends _CmafEncryption {
  /**
   * A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys.
   */
  SpekeKeyProvider: _UnmarshalledSpekeKeyProvider;
}
