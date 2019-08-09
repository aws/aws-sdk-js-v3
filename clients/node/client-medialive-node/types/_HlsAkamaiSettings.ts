/**
 * Hls Akamai Settings
 */
export interface _HlsAkamaiSettings {
  /**
   * Number of seconds to wait before retrying connection to the CDN if the connection is lost.
   */
  ConnectionRetryInterval?: number;

  /**
   * Size in seconds of file cache for streaming outputs.
   */
  FilecacheDuration?: number;

  /**
   * Specify whether or not to use chunked transfer encoding to Akamai. User should contact Akamai to enable this feature.
   */
  HttpTransferMode?: "CHUNKED" | "NON_CHUNKED" | string;

  /**
   * Number of retry attempts that will be made before the Live Event is put into an error state.
   */
  NumRetries?: number;

  /**
   * If a streaming output fails, number of seconds to wait until a restart is initiated. A value of 0 means never restart.
   */
  RestartDelay?: number;

  /**
   * Salt for authenticated Akamai.
   */
  Salt?: string;

  /**
   * Token parameter for authenticated akamai. If not specified, _gda_ is used.
   */
  Token?: string;
}

export type _UnmarshalledHlsAkamaiSettings = _HlsAkamaiSettings;
