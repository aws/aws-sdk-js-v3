import {
  _HlsCaptionLanguageMapping,
  _UnmarshalledHlsCaptionLanguageMapping
} from "./_HlsCaptionLanguageMapping";
import {
  _DestinationSettings,
  _UnmarshalledDestinationSettings
} from "./_DestinationSettings";
import {
  _HlsEncryptionSettings,
  _UnmarshalledHlsEncryptionSettings
} from "./_HlsEncryptionSettings";

/**
 * Required when you set (Type) under (OutputGroups)>(OutputGroupSettings) to HLS_GROUP_SETTINGS.
 */
export interface _HlsGroupSettings {
  /**
   * Choose one or more ad marker types to decorate your Apple HLS manifest. This setting does not determine whether SCTE-35 markers appear in the outputs themselves.
   */
  AdMarkers?:
    | Array<"ELEMENTAL" | "ELEMENTAL_SCTE35" | string>
    | Iterable<"ELEMENTAL" | "ELEMENTAL_SCTE35" | string>;

  /**
   * A partial URI prefix that will be prepended to each output in the media .m3u8 file. Can be used if base manifest is delivered from a different URL than the main .m3u8 file.
   */
  BaseUrl?: string;

  /**
   * Language to be used on Caption outputs
   */
  CaptionLanguageMappings?:
    | Array<_HlsCaptionLanguageMapping>
    | Iterable<_HlsCaptionLanguageMapping>;

  /**
   * Applies only to 608 Embedded output captions. Insert: Include CLOSED-CAPTIONS lines in the manifest. Specify at least one language in the CC1 Language Code field. One CLOSED-CAPTION line is added for each Language Code you specify. Make sure to specify the languages in the order in which they appear in the original source (if the source is embedded format) or the order of the caption selectors (if the source is other than embedded). Otherwise, languages in the manifest will not match up properly with the output captions. None: Include CLOSED-CAPTIONS=NONE line in the manifest. Omit: Omit any CLOSED-CAPTIONS line from the manifest.
   */
  CaptionLanguageSetting?: "INSERT" | "OMIT" | "NONE" | string;

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
   * Indicates whether segments should be placed in subdirectories.
   */
  DirectoryStructure?: "SINGLE_DIRECTORY" | "SUBDIRECTORY_PER_STREAM" | string;

  /**
   * DRM settings.
   */
  Encryption?: _HlsEncryptionSettings;

  /**
   * When set to GZIP, compresses HLS playlist.
   */
  ManifestCompression?: "GZIP" | "NONE" | string;

  /**
   * Indicates whether the output manifest should use floating point values for segment duration.
   */
  ManifestDurationFormat?: "FLOATING_POINT" | "INTEGER" | string;

  /**
   * Keep this setting at the default value of 0, unless you are troubleshooting a problem with how devices play back the end of your video asset. If you know that player devices are hanging on the final segment of your video because the length of your final segment is too short, use this setting to specify a minimum final segment length, in seconds. Choose a value that is greater than or equal to 1 and less than your segment length. When you specify a value for this setting, the encoder will combine any final segment that is shorter than the length that you specify with the previous segment. For example, your segment length is 3 seconds and your final segment is .5 seconds without a minimum final segment length; when you set the minimum final segment length to 1, your final segment is 3.5 seconds.
   */
  MinFinalSegmentLength?: number;

  /**
   * When set, Minimum Segment Size is enforced by looking ahead and back within the specified range for a nearby avail and extending the segment size if needed.
   */
  MinSegmentLength?: number;

  /**
   * Indicates whether the .m3u8 manifest file should be generated for this HLS output group.
   */
  OutputSelection?: "MANIFESTS_AND_SEGMENTS" | "SEGMENTS_ONLY" | string;

  /**
   * Includes or excludes EXT-X-PROGRAM-DATE-TIME tag in .m3u8 manifest files. The value is calculated as follows: either the program date and time are initialized using the input timecode source, or the time is initialized using the input timecode source and the date is initialized using the timestamp_offset.
   */
  ProgramDateTime?: "INCLUDE" | "EXCLUDE" | string;

  /**
   * Period of insertion of EXT-X-PROGRAM-DATE-TIME entry, in seconds.
   */
  ProgramDateTimePeriod?: number;

  /**
   * When set to SINGLE_FILE, emits program as a single media resource (.ts) file, uses #EXT-X-BYTERANGE tags to index segment for playback.
   */
  SegmentControl?: "SINGLE_FILE" | "SEGMENTED_FILES" | string;

  /**
   * Length of MPEG-2 Transport Stream segments to create (in seconds). Note that segments will end on the next keyframe after this number of seconds, so actual segment length may be longer.
   */
  SegmentLength?: number;

  /**
   * Number of segments to write to a subdirectory before starting a new one. directoryStructure must be SINGLE_DIRECTORY for this setting to have an effect.
   */
  SegmentsPerSubdirectory?: number;

  /**
   * Include or exclude RESOLUTION attribute for video in EXT-X-STREAM-INF tag of variant manifest.
   */
  StreamInfResolution?: "INCLUDE" | "EXCLUDE" | string;

  /**
   * Indicates ID3 frame that has the timecode.
   */
  TimedMetadataId3Frame?: "NONE" | "PRIV" | "TDRL" | string;

  /**
   * Timed Metadata interval in seconds.
   */
  TimedMetadataId3Period?: number;

  /**
   * Provides an extra millisecond delta offset to fine tune the timestamps.
   */
  TimestampDeltaMilliseconds?: number;
}

export interface _UnmarshalledHlsGroupSettings extends _HlsGroupSettings {
  /**
   * Choose one or more ad marker types to decorate your Apple HLS manifest. This setting does not determine whether SCTE-35 markers appear in the outputs themselves.
   */
  AdMarkers?: Array<"ELEMENTAL" | "ELEMENTAL_SCTE35" | string>;

  /**
   * Language to be used on Caption outputs
   */
  CaptionLanguageMappings?: Array<_UnmarshalledHlsCaptionLanguageMapping>;

  /**
   * Settings associated with the destination. Will vary based on the type of destination
   */
  DestinationSettings?: _UnmarshalledDestinationSettings;

  /**
   * DRM settings.
   */
  Encryption?: _UnmarshalledHlsEncryptionSettings;
}
