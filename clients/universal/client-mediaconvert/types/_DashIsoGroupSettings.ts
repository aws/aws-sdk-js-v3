import {
  _DestinationSettings,
  _UnmarshalledDestinationSettings
} from "./_DestinationSettings";
import {
  _DashIsoEncryptionSettings,
  _UnmarshalledDashIsoEncryptionSettings
} from "./_DashIsoEncryptionSettings";

/**
 * Required when you set (Type) under (OutputGroups)>(OutputGroupSettings) to DASH_ISO_GROUP_SETTINGS.
 */
export interface _DashIsoGroupSettings {
  /**
   * A partial URI prefix that will be put in the manifest (.mpd) file at the top level BaseURL element. Can be used if streams are delivered from a different URL than the manifest file.
   */
  BaseUrl?: string;

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
  Encryption?: _DashIsoEncryptionSettings;

  /**
   * Length of fragments to generate (in seconds). Fragment length must be compatible with GOP size and Framerate. Note that fragments will end on the next keyframe after this number of seconds, so actual fragment length may be longer. When Emit Single File is checked, the fragmentation is internal to a single output file and it does not cause the creation of many output files as in other output types.
   */
  FragmentLength?: number;

  /**
   * Supports HbbTV specification as indicated
   */
  HbbtvCompliance?: "HBBTV_1_5" | "NONE" | string;

  /**
   * Minimum time of initially buffered media that is needed to ensure smooth playout.
   */
  MinBufferTime?: number;

  /**
   * When set to SINGLE_FILE, a single output file is generated, which is internally segmented using the Fragment Length and Segment Length. When set to SEGMENTED_FILES, separate segment files will be created.
   */
  SegmentControl?: "SINGLE_FILE" | "SEGMENTED_FILES" | string;

  /**
   * Length of mpd segments to create (in seconds). Note that segments will end on the next keyframe after this number of seconds, so actual segment length may be longer. When Emit Single File is checked, the segmentation is internal to a single output file and it does not cause the creation of many output files as in other output types.
   */
  SegmentLength?: number;

  /**
   * When you enable Precise segment duration in manifests (writeSegmentTimelineInRepresentation), your DASH manifest shows precise segment durations. The segment duration information appears inside the SegmentTimeline element, inside SegmentTemplate at the Representation level. When this feature isn't enabled, the segment durations in your DASH manifest are approximate. The segment duration information appears in the duration attribute of the SegmentTemplate element.
   */
  WriteSegmentTimelineInRepresentation?: "ENABLED" | "DISABLED" | string;
}

export interface _UnmarshalledDashIsoGroupSettings
  extends _DashIsoGroupSettings {
  /**
   * Settings associated with the destination. Will vary based on the type of destination
   */
  DestinationSettings?: _UnmarshalledDestinationSettings;

  /**
   * DRM settings.
   */
  Encryption?: _UnmarshalledDashIsoEncryptionSettings;
}
