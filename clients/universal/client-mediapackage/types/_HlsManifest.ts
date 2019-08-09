/**
 * A HTTP Live Streaming (HLS) manifest configuration.
 */
export interface _HlsManifest {
  /**
   * This setting controls how ad markers are included in the packaged OriginEndpoint.
   * "NONE" will omit all SCTE-35 ad markers from the output.
   * "PASSTHROUGH" causes the manifest to contain a copy of the SCTE-35 ad
   * markers (comments) taken directly from the input HTTP Live Streaming (HLS) manifest.
   * "SCTE35_ENHANCED" generates ad markers and blackout tags based on SCTE-35
   * messages in the input source.
   *
   */
  AdMarkers?: "NONE" | "SCTE35_ENHANCED" | "PASSTHROUGH" | string;

  /**
   * The ID of the manifest. The ID must be unique within the OriginEndpoint and it cannot be changed after it is created.
   */
  Id: string;

  /**
   * When enabled, an I-Frame only stream will be included in the output.
   */
  IncludeIframeOnlyStream?: boolean;

  /**
   * An optional short string appended to the end of the OriginEndpoint URL. If not specified, defaults to the manifestName for the OriginEndpoint.
   */
  ManifestName?: string;

  /**
   * The HTTP Live Streaming (HLS) playlist type.
   * When either "EVENT" or "VOD" is specified, a corresponding EXT-X-PLAYLIST-TYPE
   * entry will be included in the media playlist.
   *
   */
  PlaylistType?: "NONE" | "EVENT" | "VOD" | string;

  /**
   * Time window (in seconds) contained in each parent manifest.
   */
  PlaylistWindowSeconds?: number;

  /**
   * The interval (in seconds) between each EXT-X-PROGRAM-DATE-TIME tag
   * inserted into manifests. Additionally, when an interval is specified
   * ID3Timed Metadata messages will be generated every 5 seconds using the
   * ingest time of the content.
   * If the interval is not specified, or set to 0, then
   * no EXT-X-PROGRAM-DATE-TIME tags will be inserted into manifests and no
   * ID3Timed Metadata messages will be generated. Note that irrespective
   * of this parameter, if any ID3 Timed Metadata is found in HTTP Live Streaming (HLS) input,
   * it will be passed through to HLS output.
   *
   */
  ProgramDateTimeIntervalSeconds?: number;

  /**
   * The URL of the packaged OriginEndpoint for consumption.
   */
  Url?: string;
}

export type _UnmarshalledHlsManifest = _HlsManifest;
