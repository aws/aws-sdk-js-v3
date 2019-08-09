import {
  _DashEncryption,
  _UnmarshalledDashEncryption
} from "./_DashEncryption";
import {
  _StreamSelection,
  _UnmarshalledStreamSelection
} from "./_StreamSelection";

/**
 * A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration.
 */
export interface _DashPackage {
  /**
   * A list of SCTE-35 message types that are treated as ad markers in the output.  If empty, no
   * ad markers are output.  Specify multiple items to create ad markers for all of the included
   * message types.
   *
   */
  AdTriggers?:
    | Array<
        | "SPLICE_INSERT"
        | "BREAK"
        | "PROVIDER_ADVERTISEMENT"
        | "DISTRIBUTOR_ADVERTISEMENT"
        | "PROVIDER_PLACEMENT_OPPORTUNITY"
        | "DISTRIBUTOR_PLACEMENT_OPPORTUNITY"
        | "PROVIDER_OVERLAY_PLACEMENT_OPPORTUNITY"
        | "DISTRIBUTOR_OVERLAY_PLACEMENT_OPPORTUNITY"
        | string
      >
    | Iterable<
        | "SPLICE_INSERT"
        | "BREAK"
        | "PROVIDER_ADVERTISEMENT"
        | "DISTRIBUTOR_ADVERTISEMENT"
        | "PROVIDER_PLACEMENT_OPPORTUNITY"
        | "DISTRIBUTOR_PLACEMENT_OPPORTUNITY"
        | "PROVIDER_OVERLAY_PLACEMENT_OPPORTUNITY"
        | "DISTRIBUTOR_OVERLAY_PLACEMENT_OPPORTUNITY"
        | string
      >;

  /**
   * This setting allows the delivery restriction flags on SCTE-35 segmentation descriptors to
   * determine whether a message signals an ad.  Choosing "NONE" means no SCTE-35 messages become
   * ads.  Choosing "RESTRICTED" means SCTE-35 messages of the types specified in AdTriggers that
   * contain delivery restrictions will be treated as ads.  Choosing "UNRESTRICTED" means SCTE-35
   * messages of the types specified in AdTriggers that do not contain delivery restrictions will
   * be treated as ads.  Choosing "BOTH" means all SCTE-35 messages of the types specified in
   * AdTriggers will be treated as ads.  Note that Splice Insert messages do not have these flags
   * and are always treated as ads if specified in AdTriggers.
   *
   */
  AdsOnDeliveryRestrictions?:
    | "NONE"
    | "RESTRICTED"
    | "UNRESTRICTED"
    | "BOTH"
    | string;

  /**
   * A Dynamic Adaptive Streaming over HTTP (DASH) encryption configuration.
   */
  Encryption?: _DashEncryption;

  /**
   * Determines the position of some tags in the Media Presentation Description (MPD).  When set to FULL, elements like SegmentTemplate and ContentProtection are included in each Representation.  When set to COMPACT, duplicate elements are combined and presented at the AdaptationSet level.
   */
  ManifestLayout?: "FULL" | "COMPACT" | string;

  /**
   * Time window (in seconds) contained in each manifest.
   */
  ManifestWindowSeconds?: number;

  /**
   * Minimum duration (in seconds) that a player will buffer media before starting the presentation.
   */
  MinBufferTimeSeconds?: number;

  /**
   * Minimum duration (in seconds) between potential changes to the Dynamic Adaptive Streaming over HTTP (DASH) Media Presentation Description (MPD).
   */
  MinUpdatePeriodSeconds?: number;

  /**
   * A list of triggers that controls when the outgoing Dynamic Adaptive Streaming over HTTP (DASH)
   * Media Presentation Description (MPD) will be partitioned into multiple periods. If empty, the content will not
   * be partitioned into more than one period. If the list contains "ADS", new periods will be created where
   * the Channel source contains SCTE-35 ad markers.
   *
   */
  PeriodTriggers?: Array<"ADS" | string> | Iterable<"ADS" | string>;

  /**
   * The Dynamic Adaptive Streaming over HTTP (DASH) profile type.  When set to "HBBTV_1_5", HbbTV 1.5 compliant output is enabled.
   */
  Profile?: "NONE" | "HBBTV_1_5" | string;

  /**
   * Duration (in seconds) of each segment. Actual segments will be
   * rounded to the nearest multiple of the source segment duration.
   *
   */
  SegmentDurationSeconds?: number;

  /**
   * Determines the type of SegmentTemplate included in the Media Presentation Description (MPD).  When set to NUMBER_WITH_TIMELINE, a full timeline is presented in each SegmentTemplate, with $Number$ media URLs.  When set to TIME_WITH_TIMELINE, a full timeline is presented in each SegmentTemplate, with $Time$ media URLs. When set to NUMBER_WITH_DURATION, only a duration is included in each SegmentTemplate, with $Number$ media URLs.
   */
  SegmentTemplateFormat?:
    | "NUMBER_WITH_TIMELINE"
    | "TIME_WITH_TIMELINE"
    | "NUMBER_WITH_DURATION"
    | string;

  /**
   * A StreamSelection configuration.
   */
  StreamSelection?: _StreamSelection;

  /**
   * Duration (in seconds) to delay live content before presentation.
   */
  SuggestedPresentationDelaySeconds?: number;
}

export interface _UnmarshalledDashPackage extends _DashPackage {
  /**
   * A list of SCTE-35 message types that are treated as ad markers in the output.  If empty, no
   * ad markers are output.  Specify multiple items to create ad markers for all of the included
   * message types.
   *
   */
  AdTriggers?: Array<
    | "SPLICE_INSERT"
    | "BREAK"
    | "PROVIDER_ADVERTISEMENT"
    | "DISTRIBUTOR_ADVERTISEMENT"
    | "PROVIDER_PLACEMENT_OPPORTUNITY"
    | "DISTRIBUTOR_PLACEMENT_OPPORTUNITY"
    | "PROVIDER_OVERLAY_PLACEMENT_OPPORTUNITY"
    | "DISTRIBUTOR_OVERLAY_PLACEMENT_OPPORTUNITY"
    | string
  >;

  /**
   * A Dynamic Adaptive Streaming over HTTP (DASH) encryption configuration.
   */
  Encryption?: _UnmarshalledDashEncryption;

  /**
   * A list of triggers that controls when the outgoing Dynamic Adaptive Streaming over HTTP (DASH)
   * Media Presentation Description (MPD) will be partitioned into multiple periods. If empty, the content will not
   * be partitioned into more than one period. If the list contains "ADS", new periods will be created where
   * the Channel source contains SCTE-35 ad markers.
   *
   */
  PeriodTriggers?: Array<"ADS" | string>;

  /**
   * A StreamSelection configuration.
   */
  StreamSelection?: _UnmarshalledStreamSelection;
}
