import {
  _HlsInputSettings,
  _UnmarshalledHlsInputSettings
} from "./_HlsInputSettings";

/**
 * Network source to transcode. Must be accessible to the Elemental Live node that is running the live event through a network connection.
 */
export interface _NetworkInputSettings {
  /**
   * Specifies HLS input settings when the uri is for a HLS manifest.
   */
  HlsInputSettings?: _HlsInputSettings;

  /**
   * Check HTTPS server certificates. When set to checkCryptographyOnly, cryptography in the certificate will be checked, but not the server's name. Certain subdomains (notably S3 buckets that use dots in the bucket name) do not strictly match the corresponding certificate's wildcard pattern and would otherwise cause the event to error. This setting is ignored for protocols that do not use https.
   */
  ServerValidation?:
    | "CHECK_CRYPTOGRAPHY_AND_VALIDATE_NAME"
    | "CHECK_CRYPTOGRAPHY_ONLY"
    | string;
}

export interface _UnmarshalledNetworkInputSettings
  extends _NetworkInputSettings {
  /**
   * Specifies HLS input settings when the uri is for a HLS manifest.
   */
  HlsInputSettings?: _UnmarshalledHlsInputSettings;
}
