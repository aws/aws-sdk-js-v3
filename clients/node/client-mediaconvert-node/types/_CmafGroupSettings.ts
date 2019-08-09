import {
  _DestinationSettings,
  _UnmarshalledDestinationSettings
} from "./_DestinationSettings";
import {
  _CmafEncryptionSettings,
  _UnmarshalledCmafEncryptionSettings
} from "./_CmafEncryptionSettings";

/**
 * Required when you set (Type) under (OutputGroups)>(OutputGroupSettings) to CMAF_GROUP_SETTINGS. Each output in a CMAF Output Group may only contain a single video, audio, or caption output.
 */
export interface _CmafGroupSettings {
  /**
   * A partial URI prefix that will be put in the manifest file at the top level BaseURL element. Can be used if streams are delivered from a different URL than the manifest file.
   */
  BaseUrl?: string;

  /**
   * When set to ENABLED, sets #EXT-X-ALLOW-CACHE:no tag, which prevents client from saving media segments for later replay.
   */
  ClientCache?: "DISABLED" | "ENABLED" | string;

  /**
   * Specification to use (RFC-6381 or the default RFC-4281) during m3u8 playlist generation.
   */
  CodecSpecification?: "RFC_6381" | "RFC_4281" | string;

  /**
   * Use Destination (Destination) to specify the S3 output location and the output filename base. Destination accepts format identifiers. If you do not specify the base filename in the URI, the service will use the filename of the input file. If your job has multiple inputs, the service uses the filename of the first input file.
   */
  Destination?: string;

  /**
   * Settings associated with the destination. Will vary based on the type of destination
   */
  DestinationSettings?: _DestinationSettings;

  /**
   * DRM settings.
   */
  Encryption?: _CmafEncryptionSettings;

  /**
   * Length of fragments to generate (in seconds). Fragment length must be compatible with GOP size and Framerate. Note that fragments will end on the next keyframe after this number of seconds, so actual fragment length may be longer. When Emit Single File is checked, the fragmentation is internal to a single output file and it does not cause the creation of many output files as in other output types.
   */
  FragmentLength?: number;

  /**
   * When set to GZIP, compresses HLS playlist.
   */
  ManifestCompression?: "GZIP" | "NONE" | string;

  /**
   * Indicates whether the output manifest should use floating point values for segment duration.
   */
  ManifestDurationFormat?: "FLOATING_POINT" | "INTEGER" | string;

  /**
   * Minimum time of initially buffered media that is needed to ensure smooth playout.
   */
  MinBufferTime?: number;

  /**
   * Keep this setting at the default value of 0, unless you are troubleshooting a problem with how devices play back the end of your video asset. If you know that player devices are hanging on the final segment of your video because the length of your final segment is too short, use this setting to specify a minimum final segment length, in seconds. Choose a value that is greater than or equal to 1 and less than your segment length. When you specify a value for this setting, the encoder will combine any final segment that is shorter than the length that you specify with the previous segment. For example, your segment length is 3 seconds and your final segment is .5 seconds without a minimum final segment length; when you set the minimum final segment length to 1, your final segment is 3.5 seconds.
   */
  MinFinalSegmentLength?: number;

  /**
   * When set to SINGLE_FILE, a single output file is generated, which is internally segmented using the Fragment Length and Segment Length. When set to SEGMENTED_FILES, separate segment files will be created.
   */
  SegmentControl?: "SINGLE_FILE" | "SEGMENTED_FILES" | string;

  /**
   * Use this setting to specify the length, in seconds, of each individual CMAF segment. This value applies to the whole package; that is, to every output in the output group. Note that segments end on the first keyframe after this number of seconds, so the actual segment length might be slightly longer. If you set Segment control (CmafSegmentControl) to single file, the service puts the content of each output in a single file that has metadata that marks these segments. If you set it to segmented files, the service creates multiple files for each output, each with the content of one segment.
   */
  SegmentLength?: number;

  /**
   * Include or exclude RESOLUTION attribute for video in EXT-X-STREAM-INF tag of variant manifest.
   */
  StreamInfResolution?: "INCLUDE" | "EXCLUDE" | string;

  /**
   * When set to ENABLED, a DASH MPD manifest will be generated for this output.
   */
  WriteDashManifest?: "DISABLED" | "ENABLED" | string;

  /**
   * When set to ENABLED, an Apple HLS manifest will be generated for this output.
   */
  WriteHlsManifest?: "DISABLED" | "ENABLED" | string;
}

export interface _UnmarshalledCmafGroupSettings extends _CmafGroupSettings {
  /**
   * Settings associated with the destination. Will vary based on the type of destination
   */
  DestinationSettings?: _UnmarshalledDestinationSettings;

  /**
   * DRM settings.
   */
  Encryption?: _UnmarshalledCmafEncryptionSettings;
}
