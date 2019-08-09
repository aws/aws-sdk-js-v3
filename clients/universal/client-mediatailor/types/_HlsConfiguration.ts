/**
 * <p>The configuration for HLS content. </p>
 */
export interface _HlsConfiguration {
  /**
   * <p>The URL that is used to initiate a playback session for devices that support Apple HLS. The session uses server-side reporting.</p>
   */
  ManifestEndpointPrefix?: string;
}

export type _UnmarshalledHlsConfiguration = _HlsConfiguration;
