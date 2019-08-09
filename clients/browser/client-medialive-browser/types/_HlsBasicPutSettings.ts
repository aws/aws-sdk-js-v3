/**
 * Hls Basic Put Settings
 */
export interface _HlsBasicPutSettings {
  /**
   * Number of seconds to wait before retrying connection to the CDN if the connection is lost.
   */
  ConnectionRetryInterval?: number;

  /**
   * Size in seconds of file cache for streaming outputs.
   */
  FilecacheDuration?: number;

  /**
   * Number of retry attempts that will be made before the Live Event is put into an error state.
   */
  NumRetries?: number;

  /**
   * If a streaming output fails, number of seconds to wait until a restart is initiated. A value of 0 means never restart.
   */
  RestartDelay?: number;
}

export type _UnmarshalledHlsBasicPutSettings = _HlsBasicPutSettings;
