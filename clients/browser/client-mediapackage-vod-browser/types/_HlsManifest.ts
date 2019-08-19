import {
  _StreamSelection,
  _UnmarshalledStreamSelection
} from "./_StreamSelection";

/**
 * An HTTP Live Streaming (HLS) manifest configuration.
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
   * When enabled, an I-Frame only stream will be included in the output.
   */
  IncludeIframeOnlyStream?: boolean;

  /**
   * An optional string to include in the name of the manifest.
   */
  ManifestName?: string;

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
   * When enabled, the EXT-X-KEY tag will be repeated in output manifests.
   */
  RepeatExtXKey?: boolean;

  /**
   * A StreamSelection configuration.
   */
  StreamSelection?: _StreamSelection;
}

export interface _UnmarshalledHlsManifest extends _HlsManifest {
  /**
   * A StreamSelection configuration.
   */
  StreamSelection?: _UnmarshalledStreamSelection;
}
