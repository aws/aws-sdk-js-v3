import {
  AudioDescription,
  BatchFailedResultModel,
  BatchSuccessfulResultModel,
  CaptionDescription,
  CdiInputSpecification,
  ChannelClass,
  ChannelEgressEndpoint,
  ChannelState,
  ChannelSummary,
  DeviceSettingsSyncState,
  Input,
  InputAttachment,
  InputClass,
  InputDestination,
  InputDestinationRequest,
  InputDeviceConfiguredInput,
  InputDeviceConnectionState,
  InputDeviceHdSettings,
  InputDeviceNetworkSettings,
  InputDeviceRequest,
  InputDeviceSettings,
  InputDeviceSummary,
  InputDeviceType,
  InputLocation,
  InputSecurityGroup,
  InputSecurityGroupState,
  InputSource,
  InputSourceRequest,
  InputSourceType,
  InputSpecification,
  InputState,
  InputType,
  InputWhitelistRule,
  InputWhitelistRuleCidr,
  LogLevel,
  MediaConnectFlow,
  MediaConnectFlowRequest,
  MultiplexOutputDestination,
  MultiplexProgramPipelineDetail,
  MultiplexProgramSummary,
  MultiplexState,
  MultiplexSummary,
  Offering,
  OfferingDurationUnits,
  OfferingType,
  OutputDestination,
  OutputGroup,
  PipelineDetail,
  PipelinePauseStateSettings,
  Reservation,
  ReservationResourceSpecification,
  ReservationState,
} from "./models_0";
import { SENSITIVE_STRING, SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";
import { Readable } from "stream";

/**
 * Settings for the action to insert a user-defined ID3 tag in each HLS segment
 */
export interface HlsId3SegmentTaggingScheduleActionSettings {
  /**
   * ID3 tag to insert into each segment. Supports special keyword identifiers to substitute in segment-related values.\nSupported keyword identifiers: https://docs.aws.amazon.com/medialive/latest/ug/variable-data-identifiers.html
   */
  Tag: string | undefined;
}

export namespace HlsId3SegmentTaggingScheduleActionSettings {
  export const filterSensitiveLog = (obj: HlsId3SegmentTaggingScheduleActionSettings): any => ({
    ...obj,
  });
}

/**
 * Settings for the action to emit HLS metadata
 */
export interface HlsTimedMetadataScheduleActionSettings {
  /**
   * Base64 string formatted according to the ID3 specification: http://id3.org/id3v2.4.0-structure
   */
  Id3: string | undefined;
}

export namespace HlsTimedMetadataScheduleActionSettings {
  export const filterSensitiveLog = (obj: HlsTimedMetadataScheduleActionSettings): any => ({
    ...obj,
  });
}

export enum InputTimecodeSource {
  EMBEDDED = "EMBEDDED",
  ZEROBASED = "ZEROBASED",
}

/**
 * Settings to identify the start of the clip.
 */
export interface StartTimecode {
  /**
   * The timecode for the frame where you want to start the clip. Optional; if not specified, the clip starts at first frame in the file. Enter the timecode as HH:MM:SS:FF or HH:MM:SS;FF.
   */
  Timecode?: string;
}

export namespace StartTimecode {
  export const filterSensitiveLog = (obj: StartTimecode): any => ({
    ...obj,
  });
}

export enum LastFrameClippingBehavior {
  EXCLUDE_LAST_FRAME = "EXCLUDE_LAST_FRAME",
  INCLUDE_LAST_FRAME = "INCLUDE_LAST_FRAME",
}

/**
 * Settings to identify the end of the clip.
 */
export interface StopTimecode {
  /**
   * The timecode for the frame where you want to stop the clip. Optional; if not specified, the clip continues to the end of the file. Enter the timecode as HH:MM:SS:FF or HH:MM:SS;FF.
   */
  Timecode?: string;

  /**
   * If you specify a StopTimecode in an input (in order to clip the file), you can specify if you want the clip to exclude (the default) or include the frame specified by the timecode.
   */
  LastFrameClippingBehavior?: LastFrameClippingBehavior | string;
}

export namespace StopTimecode {
  export const filterSensitiveLog = (obj: StopTimecode): any => ({
    ...obj,
  });
}

/**
 * Settings to let you create a clip of the file input, in order to set up the input to ingest only a portion of the file.
 */
export interface InputClippingSettings {
  /**
   * Settings to identify the end of the clip.
   */
  StopTimecode?: StopTimecode;

  /**
   * The source of the timecodes in the source being clipped.
   */
  InputTimecodeSource: InputTimecodeSource | string | undefined;

  /**
   * Settings to identify the start of the clip.
   */
  StartTimecode?: StartTimecode;
}

export namespace InputClippingSettings {
  export const filterSensitiveLog = (obj: InputClippingSettings): any => ({
    ...obj,
  });
}

/**
 * Action to prepare an input for a future immediate input switch.
 */
export interface InputPrepareScheduleActionSettings {
  /**
   * The name of the input attachment that should be prepared by this action. If no name is provided, the action will stop the most recent prepare (if any) when activated.
   */
  InputAttachmentNameReference?: string;

  /**
   * Settings to let you create a clip of the file input, in order to set up the input to ingest only a portion of the file.
   */
  InputClippingSettings?: InputClippingSettings;

  /**
   * The value for the variable portion of the URL for the dynamic input, for this instance of the input. Each time you use the same dynamic input in an input switch action, you can provide a different value, in order to connect the input to a different content source.
   */
  UrlPath?: string[];
}

export namespace InputPrepareScheduleActionSettings {
  export const filterSensitiveLog = (obj: InputPrepareScheduleActionSettings): any => ({
    ...obj,
  });
}

/**
 * Settings for the "switch input" action: to switch from ingesting one input to ingesting another input.
 */
export interface InputSwitchScheduleActionSettings {
  /**
   * Settings to let you create a clip of the file input, in order to set up the input to ingest only a portion of the file.
   */
  InputClippingSettings?: InputClippingSettings;

  /**
   * The name of the input attachment (not the name of the input!) to switch to. The name is specified in the channel configuration.
   */
  InputAttachmentNameReference: string | undefined;

  /**
   * The value for the variable portion of the URL for the dynamic input, for this instance of the input. Each time you use the same dynamic input in an input switch action, you can provide a different value, in order to connect the input to a different content source.
   */
  UrlPath?: string[];
}

export namespace InputSwitchScheduleActionSettings {
  export const filterSensitiveLog = (obj: InputSwitchScheduleActionSettings): any => ({
    ...obj,
  });
}

/**
 * Settings for the action to set pause state of a channel.
 */
export interface PauseStateScheduleActionSettings {
  /**
   * Placeholder documentation for __listOfPipelinePauseStateSettings
   */
  Pipelines?: PipelinePauseStateSettings[];
}

export namespace PauseStateScheduleActionSettings {
  export const filterSensitiveLog = (obj: PauseStateScheduleActionSettings): any => ({
    ...obj,
  });
}

/**
 * Settings for a SCTE-35 return_to_network message.
 */
export interface Scte35ReturnToNetworkScheduleActionSettings {
  /**
   * The splice_event_id for the SCTE-35 splice_insert, as defined in SCTE-35.
   */
  SpliceEventId: number | undefined;
}

export namespace Scte35ReturnToNetworkScheduleActionSettings {
  export const filterSensitiveLog = (obj: Scte35ReturnToNetworkScheduleActionSettings): any => ({
    ...obj,
  });
}

/**
 * Settings for a SCTE-35 splice_insert message.
 */
export interface Scte35SpliceInsertScheduleActionSettings {
  /**
   * The splice_event_id for the SCTE-35 splice_insert, as defined in SCTE-35.
   */
  SpliceEventId: number | undefined;

  /**
   * Optional, the duration for the splice_insert, in 90 KHz ticks. To convert seconds to ticks, multiple the seconds by 90,000. If you enter a duration, there is an expectation that the downstream system can read the duration and cue in at that time. If you do not enter a duration, the splice_insert will continue indefinitely and there is an expectation that you will enter a return_to_network to end the splice_insert at the appropriate time.
   */
  Duration?: number;
}

export namespace Scte35SpliceInsertScheduleActionSettings {
  export const filterSensitiveLog = (obj: Scte35SpliceInsertScheduleActionSettings): any => ({
    ...obj,
  });
}

export enum Scte35ArchiveAllowedFlag {
  ARCHIVE_ALLOWED = "ARCHIVE_ALLOWED",
  ARCHIVE_NOT_ALLOWED = "ARCHIVE_NOT_ALLOWED",
}

export enum Scte35DeviceRestrictions {
  NONE = "NONE",
  RESTRICT_GROUP0 = "RESTRICT_GROUP0",
  RESTRICT_GROUP1 = "RESTRICT_GROUP1",
  RESTRICT_GROUP2 = "RESTRICT_GROUP2",
}

export enum Scte35NoRegionalBlackoutFlag {
  NO_REGIONAL_BLACKOUT = "NO_REGIONAL_BLACKOUT",
  REGIONAL_BLACKOUT = "REGIONAL_BLACKOUT",
}

export enum Scte35WebDeliveryAllowedFlag {
  WEB_DELIVERY_ALLOWED = "WEB_DELIVERY_ALLOWED",
  WEB_DELIVERY_NOT_ALLOWED = "WEB_DELIVERY_NOT_ALLOWED",
}

/**
 * Corresponds to SCTE-35 delivery_not_restricted_flag parameter. To declare delivery restrictions, include this element and its four "restriction" flags. To declare that there are no restrictions, omit this element.
 */
export interface Scte35DeliveryRestrictions {
  /**
   * Corresponds to SCTE-35 archive_allowed_flag.
   */
  ArchiveAllowedFlag: Scte35ArchiveAllowedFlag | string | undefined;

  /**
   * Corresponds to SCTE-35 no_regional_blackout_flag parameter.
   */
  NoRegionalBlackoutFlag: Scte35NoRegionalBlackoutFlag | string | undefined;

  /**
   * Corresponds to SCTE-35 web_delivery_allowed_flag parameter.
   */
  WebDeliveryAllowedFlag: Scte35WebDeliveryAllowedFlag | string | undefined;

  /**
   * Corresponds to SCTE-35 device_restrictions parameter.
   */
  DeviceRestrictions: Scte35DeviceRestrictions | string | undefined;
}

export namespace Scte35DeliveryRestrictions {
  export const filterSensitiveLog = (obj: Scte35DeliveryRestrictions): any => ({
    ...obj,
  });
}

export enum Scte35SegmentationCancelIndicator {
  SEGMENTATION_EVENT_CANCELED = "SEGMENTATION_EVENT_CANCELED",
  SEGMENTATION_EVENT_NOT_CANCELED = "SEGMENTATION_EVENT_NOT_CANCELED",
}

/**
 * Corresponds to SCTE-35 segmentation_descriptor.
 */
export interface Scte35SegmentationDescriptor {
  /**
   * Corresponds to SCTE-35 segmentation_upid_type. On the console, enter one of the types listed in the SCTE-35 specification, converted to a decimal. For example, "0x0C" hex from the specification is "12" in decimal. In the CLI, API, or an SDK, enter one of the types listed in the SCTE-35 specification, in either hex (for example, "0x0C" ) or in decimal (for example, "12").
   */
  SegmentationUpidType?: number;

  /**
   * Holds the four SCTE-35 delivery restriction parameters.
   */
  DeliveryRestrictions?: Scte35DeliveryRestrictions;

  /**
   * Corresponds to SCTE-35 segmentation_event_cancel_indicator.
   */
  SegmentationCancelIndicator: Scte35SegmentationCancelIndicator | string | undefined;

  /**
   * Corresponds to SCTE-35 sub_segment_num. A value that is valid for the specified segmentation_type_id.
   */
  SubSegmentNum?: number;

  /**
   * Corresponds to SCTE-35 segmentation_type_id. One of the segmentation_type_id values listed in the SCTE-35 specification. On the console, enter the ID in decimal (for example, "52"). In the CLI, API, or an SDK, enter the ID in hex (for example, "0x34") or decimal (for example, "52").
   */
  SegmentationTypeId?: number;

  /**
   * Corresponds to SCTE-35 sub_segments_expected. A value that is valid for the specified segmentation_type_id.
   */
  SubSegmentsExpected?: number;

  /**
   * Corresponds to SCTE-35 segmentation_duration. Optional. The duration for the time_signal, in 90 KHz ticks. To convert seconds to ticks, multiple the seconds by 90,000. Enter time in 90 KHz clock ticks. If you do not enter a duration, the time_signal will continue until you insert a cancellation message.
   */
  SegmentationDuration?: number;

  /**
   * Corresponds to SCTE-35 segments_expected. A value that is valid for the specified segmentation_type_id.
   */
  SegmentsExpected?: number;

  /**
   * Corresponds to SCTE-35 segmentation_event_id.
   */
  SegmentationEventId: number | undefined;

  /**
   * Corresponds to SCTE-35 segmentation_upid. Enter a string containing the hexadecimal representation of the characters that make up the SCTE-35 segmentation_upid value. Must contain an even number of hex characters. Do not include spaces between each hex pair. For example, the ASCII "ADS Information" becomes hex "41445320496e666f726d6174696f6e.
   */
  SegmentationUpid?: string;

  /**
   * Corresponds to SCTE-35 segment_num. A value that is valid for the specified segmentation_type_id.
   */
  SegmentNum?: number;
}

export namespace Scte35SegmentationDescriptor {
  export const filterSensitiveLog = (obj: Scte35SegmentationDescriptor): any => ({
    ...obj,
  });
}

/**
 * SCTE-35 Descriptor settings.
 */
export interface Scte35DescriptorSettings {
  /**
   * SCTE-35 Segmentation Descriptor.
   */
  SegmentationDescriptorScte35DescriptorSettings: Scte35SegmentationDescriptor | undefined;
}

export namespace Scte35DescriptorSettings {
  export const filterSensitiveLog = (obj: Scte35DescriptorSettings): any => ({
    ...obj,
  });
}

/**
 * Holds one set of SCTE-35 Descriptor Settings.
 */
export interface Scte35Descriptor {
  /**
   * SCTE-35 Descriptor Settings.
   */
  Scte35DescriptorSettings: Scte35DescriptorSettings | undefined;
}

export namespace Scte35Descriptor {
  export const filterSensitiveLog = (obj: Scte35Descriptor): any => ({
    ...obj,
  });
}

/**
 * Settings for a SCTE-35 time_signal.
 */
export interface Scte35TimeSignalScheduleActionSettings {
  /**
   * The list of SCTE-35 descriptors accompanying the SCTE-35 time_signal.
   */
  Scte35Descriptors: Scte35Descriptor[] | undefined;
}

export namespace Scte35TimeSignalScheduleActionSettings {
  export const filterSensitiveLog = (obj: Scte35TimeSignalScheduleActionSettings): any => ({
    ...obj,
  });
}

/**
 * Settings for the action to activate a static image.
 */
export interface StaticImageActivateScheduleActionSettings {
  /**
   * The duration in milliseconds for the image to remain on the video. If omitted or set to 0 the duration is unlimited and the image will remain until it is explicitly deactivated.
   */
  Duration?: number;

  /**
   * The number of the layer, 0 to 7. There are 8 layers that can be overlaid on the video, each layer with a different image. The layers are in Z order, which means that overlays with higher values of layer are inserted on top of overlays with lower values of layer. Default is 0.
   */
  Layer?: number;

  /**
   * The time in milliseconds for the image to fade in. The fade-in starts at the start time of the overlay. Default is 0 (no fade-in).
   */
  FadeIn?: number;

  /**
   * Applies only if a duration is specified. The time in milliseconds for the image to fade out. The fade-out starts when the duration time is hit, so it effectively extends the duration. Default is 0 (no fade-out).
   */
  FadeOut?: number;

  /**
   * Opacity of image where 0 is transparent and 100 is fully opaque. Default is 100.
   */
  Opacity?: number;

  /**
   * Placement of the left edge of the overlay relative to the left edge of the video frame, in pixels. 0 (the default) is the left edge of the frame. If the placement causes the overlay to extend beyond the right edge of the underlying video, then the overlay is cropped on the right.
   */
  ImageX?: number;

  /**
   * Placement of the top edge of the overlay relative to the top edge of the video frame, in pixels. 0 (the default) is the top edge of the frame. If the placement causes the overlay to extend beyond the bottom edge of the underlying video, then the overlay is cropped on the bottom.
   */
  ImageY?: number;

  /**
   * The width of the image when inserted into the video, in pixels. The overlay will be scaled up or down to the specified width. Leave blank to use the native width of the overlay.
   */
  Width?: number;

  /**
   * The height of the image when inserted into the video, in pixels. The overlay will be scaled up or down to the specified height. Leave blank to use the native height of the overlay.
   */
  Height?: number;

  /**
   * The location and filename of the image file to overlay on the video. The file must be a 32-bit BMP, PNG, or TGA file, and must not be larger (in pixels) than the input video.
   */
  Image: InputLocation | undefined;
}

export namespace StaticImageActivateScheduleActionSettings {
  export const filterSensitiveLog = (obj: StaticImageActivateScheduleActionSettings): any => ({
    ...obj,
  });
}

/**
 * Settings for the action to deactivate the image in a specific layer.
 */
export interface StaticImageDeactivateScheduleActionSettings {
  /**
   * The time in milliseconds for the image to fade out. Default is 0 (no fade-out).
   */
  FadeOut?: number;

  /**
   * The image overlay layer to deactivate, 0 to 7. Default is 0.
   */
  Layer?: number;
}

export namespace StaticImageDeactivateScheduleActionSettings {
  export const filterSensitiveLog = (obj: StaticImageDeactivateScheduleActionSettings): any => ({
    ...obj,
  });
}

/**
 * Holds the settings for a single schedule action.
 */
export interface ScheduleActionSettings {
  /**
   * Action to switch the input
   */
  InputSwitchSettings?: InputSwitchScheduleActionSettings;

  /**
   * Action to insert SCTE-35 splice_insert message
   */
  Scte35SpliceInsertSettings?: Scte35SpliceInsertScheduleActionSettings;

  /**
   * Action to activate a static image overlay
   */
  StaticImageActivateSettings?: StaticImageActivateScheduleActionSettings;

  /**
   * Action to insert HLS ID3 segment tagging
   */
  HlsId3SegmentTaggingSettings?: HlsId3SegmentTaggingScheduleActionSettings;

  /**
   * Action to deactivate a static image overlay
   */
  StaticImageDeactivateSettings?: StaticImageDeactivateScheduleActionSettings;

  /**
   * Action to prepare an input for a future immediate input switch
   */
  InputPrepareSettings?: InputPrepareScheduleActionSettings;

  /**
   * Action to insert SCTE-35 time_signal message
   */
  Scte35TimeSignalSettings?: Scte35TimeSignalScheduleActionSettings;

  /**
   * Action to insert SCTE-35 return_to_network message
   */
  Scte35ReturnToNetworkSettings?: Scte35ReturnToNetworkScheduleActionSettings;

  /**
   * Action to pause or unpause one or both channel pipelines
   */
  PauseStateSettings?: PauseStateScheduleActionSettings;

  /**
   * Action to insert HLS metadata
   */
  HlsTimedMetadataSettings?: HlsTimedMetadataScheduleActionSettings;
}

export namespace ScheduleActionSettings {
  export const filterSensitiveLog = (obj: ScheduleActionSettings): any => ({
    ...obj,
  });
}

/**
 * Start time for the action.
 */
export interface FixedModeScheduleActionStartSettings {
  /**
   * Start time for the action to start in the channel. (Not the time for the action to be added to the schedule: actions are always added to the schedule immediately.) UTC format: yyyy-mm-ddThh:mm:ss.nnnZ. All the letters are digits (for example, mm might be 01) except for the two constants "T" for time and "Z" for "UTC format".
   */
  Time: string | undefined;
}

export namespace FixedModeScheduleActionStartSettings {
  export const filterSensitiveLog = (obj: FixedModeScheduleActionStartSettings): any => ({
    ...obj,
  });
}

export enum FollowPoint {
  END = "END",
  START = "START",
}

/**
 * Settings to specify if an action follows another.
 */
export interface FollowModeScheduleActionStartSettings {
  /**
   * Identifies whether this action starts relative to the start or relative to the end of the reference action.
   */
  FollowPoint: FollowPoint | string | undefined;

  /**
   * The action name of another action that this one refers to.
   */
  ReferenceActionName: string | undefined;
}

export namespace FollowModeScheduleActionStartSettings {
  export const filterSensitiveLog = (obj: FollowModeScheduleActionStartSettings): any => ({
    ...obj,
  });
}

/**
 * Settings to configure an action so that it occurs as soon as possible.
 */
export interface ImmediateModeScheduleActionStartSettings {}

export namespace ImmediateModeScheduleActionStartSettings {
  export const filterSensitiveLog = (obj: ImmediateModeScheduleActionStartSettings): any => ({
    ...obj,
  });
}

/**
 * Settings to specify when an action should occur. Only one of the options must be selected.
 */
export interface ScheduleActionStartSettings {
  /**
   * Option for specifying the start time for an action.
   */
  FixedModeScheduleActionStartSettings?: FixedModeScheduleActionStartSettings;

  /**
   * Option for specifying an action that should be applied immediately.
   */
  ImmediateModeScheduleActionStartSettings?: ImmediateModeScheduleActionStartSettings;

  /**
   * Option for specifying an action as relative to another action.
   */
  FollowModeScheduleActionStartSettings?: FollowModeScheduleActionStartSettings;
}

export namespace ScheduleActionStartSettings {
  export const filterSensitiveLog = (obj: ScheduleActionStartSettings): any => ({
    ...obj,
  });
}

/**
 * Contains information on a single schedule action.
 */
export interface ScheduleAction {
  /**
   * Settings for this schedule action.
   */
  ScheduleActionSettings: ScheduleActionSettings | undefined;

  /**
   * The name of the action, must be unique within the schedule. This name provides the main reference to an action once it is added to the schedule. A name is unique if it is no longer in the schedule. The schedule is automatically cleaned up to remove actions with a start time of more than 1 hour ago (approximately) so at that point a name can be reused.
   */
  ActionName: string | undefined;

  /**
   * The time for the action to start in the channel.
   */
  ScheduleActionStartSettings: ScheduleActionStartSettings | undefined;
}

export namespace ScheduleAction {
  export const filterSensitiveLog = (obj: ScheduleAction): any => ({
    ...obj,
  });
}

export enum InputDeviceTransferType {
  INCOMING = "INCOMING",
  OUTGOING = "OUTGOING",
}

/**
 * Details about the input device that is being transferred.
 */
export interface TransferringInputDeviceSummary {
  /**
   * The optional message that the sender has attached to the transfer.
   */
  Message?: string;

  /**
   * The type (direction) of the input device transfer.
   */
  TransferType?: InputDeviceTransferType | string;

  /**
   * The AWS account ID for the recipient of the input device transfer.
   */
  TargetCustomerId?: string;

  /**
   * The unique ID of the input device.
   */
  Id?: string;
}

export namespace TransferringInputDeviceSummary {
  export const filterSensitiveLog = (obj: TransferringInputDeviceSummary): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for ValidationError
 */
export interface ValidationError {
  /**
   * Path to the source of the error.
   */
  ElementPath?: string;

  /**
   * The error message.
   */
  ErrorMessage?: string;
}

export namespace ValidationError {
  export const filterSensitiveLog = (obj: ValidationError): any => ({
    ...obj,
  });
}

export enum FrameCaptureIntervalUnit {
  MILLISECONDS = "MILLISECONDS",
  SECONDS = "SECONDS",
}

/**
 * Frame Capture Settings
 */
export interface FrameCaptureSettings {
  /**
   * The frequency at which to capture frames for inclusion in the output. May be specified in either seconds or milliseconds, as specified by captureIntervalUnits.
   */
  CaptureInterval: number | undefined;

  /**
   * Unit for the frame capture interval.
   */
  CaptureIntervalUnits?: FrameCaptureIntervalUnit | string;
}

export namespace FrameCaptureSettings {
  export const filterSensitiveLog = (obj: FrameCaptureSettings): any => ({
    ...obj,
  });
}

export enum H264AdaptiveQuantization {
  HIGH = "HIGH",
  HIGHER = "HIGHER",
  LOW = "LOW",
  MAX = "MAX",
  MEDIUM = "MEDIUM",
  OFF = "OFF",
}

export enum AfdSignaling {
  AUTO = "AUTO",
  FIXED = "FIXED",
  NONE = "NONE",
}

export enum H264ColorMetadata {
  IGNORE = "IGNORE",
  INSERT = "INSERT",
}

/**
 * Passthrough applies no color space conversion to the output
 */
export interface ColorSpacePassthroughSettings {}

export namespace ColorSpacePassthroughSettings {
  export const filterSensitiveLog = (obj: ColorSpacePassthroughSettings): any => ({
    ...obj,
  });
}

/**
 * Rec601 Settings
 */
export interface Rec601Settings {}

export namespace Rec601Settings {
  export const filterSensitiveLog = (obj: Rec601Settings): any => ({
    ...obj,
  });
}

/**
 * Rec709 Settings
 */
export interface Rec709Settings {}

export namespace Rec709Settings {
  export const filterSensitiveLog = (obj: Rec709Settings): any => ({
    ...obj,
  });
}

/**
 * H264 Color Space Settings
 */
export interface H264ColorSpaceSettings {
  /**
   * Rec601 Settings
   */
  Rec601Settings?: Rec601Settings;

  /**
   * Rec709 Settings
   */
  Rec709Settings?: Rec709Settings;

  /**
   * Passthrough applies no color space conversion to the output
   */
  ColorSpacePassthroughSettings?: ColorSpacePassthroughSettings;
}

export namespace H264ColorSpaceSettings {
  export const filterSensitiveLog = (obj: H264ColorSpaceSettings): any => ({
    ...obj,
  });
}

export enum H264EntropyEncoding {
  CABAC = "CABAC",
  CAVLC = "CAVLC",
}

export enum TemporalFilterPostFilterSharpening {
  AUTO = "AUTO",
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum TemporalFilterStrength {
  AUTO = "AUTO",
  STRENGTH_1 = "STRENGTH_1",
  STRENGTH_10 = "STRENGTH_10",
  STRENGTH_11 = "STRENGTH_11",
  STRENGTH_12 = "STRENGTH_12",
  STRENGTH_13 = "STRENGTH_13",
  STRENGTH_14 = "STRENGTH_14",
  STRENGTH_15 = "STRENGTH_15",
  STRENGTH_16 = "STRENGTH_16",
  STRENGTH_2 = "STRENGTH_2",
  STRENGTH_3 = "STRENGTH_3",
  STRENGTH_4 = "STRENGTH_4",
  STRENGTH_5 = "STRENGTH_5",
  STRENGTH_6 = "STRENGTH_6",
  STRENGTH_7 = "STRENGTH_7",
  STRENGTH_8 = "STRENGTH_8",
  STRENGTH_9 = "STRENGTH_9",
}

/**
 * Temporal Filter Settings
 */
export interface TemporalFilterSettings {
  /**
   * Choose a filter strength. We recommend a strength of 1 or 2. A higher strength might take out good information, resulting in an image that is overly soft.
   */
  Strength?: TemporalFilterStrength | string;

  /**
   * If you enable this filter, the results are the following:
   * - If the source content is noisy (it contains excessive digital artifacts), the filter cleans up the source.
   * - If the source content is already clean, the filter tends to decrease the bitrate, especially when the rate control mode is QVBR.
   */
  PostFilterSharpening?: TemporalFilterPostFilterSharpening | string;
}

export namespace TemporalFilterSettings {
  export const filterSensitiveLog = (obj: TemporalFilterSettings): any => ({
    ...obj,
  });
}

/**
 * H264 Filter Settings
 */
export interface H264FilterSettings {
  /**
   * Temporal Filter Settings
   */
  TemporalFilterSettings?: TemporalFilterSettings;
}

export namespace H264FilterSettings {
  export const filterSensitiveLog = (obj: H264FilterSettings): any => ({
    ...obj,
  });
}

export enum FixedAfd {
  AFD_0000 = "AFD_0000",
  AFD_0010 = "AFD_0010",
  AFD_0011 = "AFD_0011",
  AFD_0100 = "AFD_0100",
  AFD_1000 = "AFD_1000",
  AFD_1001 = "AFD_1001",
  AFD_1010 = "AFD_1010",
  AFD_1011 = "AFD_1011",
  AFD_1101 = "AFD_1101",
  AFD_1110 = "AFD_1110",
  AFD_1111 = "AFD_1111",
}

export enum H264FlickerAq {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum H264ForceFieldPictures {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum H264FramerateControl {
  INITIALIZE_FROM_SOURCE = "INITIALIZE_FROM_SOURCE",
  SPECIFIED = "SPECIFIED",
}

export enum H264GopBReference {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum H264GopSizeUnits {
  FRAMES = "FRAMES",
  SECONDS = "SECONDS",
}

export enum H264Level {
  H264_LEVEL_1 = "H264_LEVEL_1",
  H264_LEVEL_1_1 = "H264_LEVEL_1_1",
  H264_LEVEL_1_2 = "H264_LEVEL_1_2",
  H264_LEVEL_1_3 = "H264_LEVEL_1_3",
  H264_LEVEL_2 = "H264_LEVEL_2",
  H264_LEVEL_2_1 = "H264_LEVEL_2_1",
  H264_LEVEL_2_2 = "H264_LEVEL_2_2",
  H264_LEVEL_3 = "H264_LEVEL_3",
  H264_LEVEL_3_1 = "H264_LEVEL_3_1",
  H264_LEVEL_3_2 = "H264_LEVEL_3_2",
  H264_LEVEL_4 = "H264_LEVEL_4",
  H264_LEVEL_4_1 = "H264_LEVEL_4_1",
  H264_LEVEL_4_2 = "H264_LEVEL_4_2",
  H264_LEVEL_5 = "H264_LEVEL_5",
  H264_LEVEL_5_1 = "H264_LEVEL_5_1",
  H264_LEVEL_5_2 = "H264_LEVEL_5_2",
  H264_LEVEL_AUTO = "H264_LEVEL_AUTO",
}

export enum H264LookAheadRateControl {
  HIGH = "HIGH",
  LOW = "LOW",
  MEDIUM = "MEDIUM",
}

export enum H264ParControl {
  INITIALIZE_FROM_SOURCE = "INITIALIZE_FROM_SOURCE",
  SPECIFIED = "SPECIFIED",
}

export enum H264Profile {
  BASELINE = "BASELINE",
  HIGH = "HIGH",
  HIGH_10BIT = "HIGH_10BIT",
  HIGH_422 = "HIGH_422",
  HIGH_422_10BIT = "HIGH_422_10BIT",
  MAIN = "MAIN",
}

export enum H264QualityLevel {
  ENHANCED_QUALITY = "ENHANCED_QUALITY",
  STANDARD_QUALITY = "STANDARD_QUALITY",
}

export enum H264RateControlMode {
  CBR = "CBR",
  MULTIPLEX = "MULTIPLEX",
  QVBR = "QVBR",
  VBR = "VBR",
}

export enum H264ScanType {
  INTERLACED = "INTERLACED",
  PROGRESSIVE = "PROGRESSIVE",
}

export enum H264SceneChangeDetect {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum H264SpatialAq {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum H264SubGopLength {
  DYNAMIC = "DYNAMIC",
  FIXED = "FIXED",
}

export enum H264Syntax {
  DEFAULT = "DEFAULT",
  RP2027 = "RP2027",
}

export enum H264TemporalAq {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum H264TimecodeInsertionBehavior {
  DISABLED = "DISABLED",
  PIC_TIMING_SEI = "PIC_TIMING_SEI",
}

/**
 * H264 Settings
 */
export interface H264Settings {
  /**
   * H.264 Profile.
   */
  Profile?: H264Profile | string;

  /**
   * If set to enabled, adjust quantization within each frame to reduce flicker or 'pop' on I-frames.
   */
  FlickerAq?: H264FlickerAq | string;

  /**
   * Controls the target quality for the video encode. Applies only when the rate control mode is QVBR. Set values for the QVBR quality level field and Max bitrate field that suit your most important viewing devices. Recommended values are:
   * - Primary screen: Quality level: 8 to 10. Max bitrate: 4M
   * - PC or tablet: Quality level: 7. Max bitrate: 1.5M to 3M
   * - Smartphone: Quality level: 6. Max bitrate: 1M to 1.5M
   */
  QvbrQualityLevel?: number;

  /**
   * Amount of lookahead. A value of low can decrease latency and memory usage, while high can produce better quality for certain content.
   */
  LookAheadRateControl?: H264LookAheadRateControl | string;

  /**
   * This field indicates how the output video frame rate is specified.  If "specified" is selected then the output video frame rate is determined by framerateNumerator and framerateDenominator, else if "initializeFromSource" is selected then the output video frame rate will be set equal to the input video frame rate of the first input.
   */
  FramerateControl?: H264FramerateControl | string;

  /**
   * Framerate denominator.
   */
  FramerateDenominator?: number;

  /**
   * Produces a bitstream compliant with SMPTE RP-2027.
   */
  Syntax?: H264Syntax | string;

  /**
   * Number of slices per picture. Must be less than or equal to the number of macroblock rows for progressive pictures, and less than or equal to half the number of macroblock rows for interlaced pictures.
   * This field is optional; when no value is specified the encoder will choose the number of slices based on encode resolution.
   */
  Slices?: number;

  /**
   * Adaptive quantization. Allows intra-frame quantizers to vary to improve visual quality.
   */
  AdaptiveQuantization?: H264AdaptiveQuantization | string;

  /**
   * H.264 Level.
   */
  Level?: H264Level | string;

  /**
   * Number of reference frames to use. The encoder may use more than requested if using B-frames and/or interlaced encoding.
   */
  NumRefFrames?: number;

  /**
   * If set to enabled, adjust quantization within each frame based on temporal variation of content complexity.
   */
  TemporalAq?: H264TemporalAq | string;

  /**
   * Leave as STANDARD_QUALITY or choose a different value (which might result in additional costs to run the channel).
   * - ENHANCED_QUALITY: Produces a slightly better video quality without an increase in the bitrate. Has an effect only when the Rate control mode is QVBR or CBR. If this channel is in a MediaLive multiplex, the value must be ENHANCED_QUALITY.
   * - STANDARD_QUALITY: Valid for any Rate control mode.
   */
  QualityLevel?: H264QualityLevel | string;

  /**
   * This setting applies only when scan type is "interlaced." It controls whether coding is performed on a field basis or on a frame basis. (When the video is progressive, the coding is always performed on a frame basis.)
   * enabled: Force MediaLive to code on a field basis, so that odd and even sets of fields are coded separately.
   * disabled: Code the two sets of fields separately (on a field basis) or together (on a frame basis using PAFF), depending on what is most appropriate for the content.
   */
  ForceFieldPictures?: H264ForceFieldPictures | string;

  /**
   * GOP size (keyframe interval) in units of either frames or seconds per gopSizeUnits.
   * If gopSizeUnits is frames, gopSize must be an integer and must be greater than or equal to 1.
   * If gopSizeUnits is seconds, gopSize must be greater than 0, but need not be an integer.
   */
  GopSize?: number;

  /**
   * Indicates that AFD values will be written into the output stream.  If afdSignaling is "auto", the system will try to preserve the input AFD value (in cases where multiple AFD values are valid). If set to "fixed", the AFD value will be the value configured in the fixedAfd parameter.
   */
  AfdSignaling?: AfdSignaling | string;

  /**
   * Pixel Aspect Ratio denominator.
   */
  ParDenominator?: number;

  /**
   * Entropy encoding mode.  Use cabac (must be in Main or High profile) or cavlc.
   */
  EntropyEncoding?: H264EntropyEncoding | string;

  /**
   * If set to enabled, adjust quantization within each frame based on spatial variation of content complexity.
   */
  SpatialAq?: H264SpatialAq | string;

  /**
   * Softness. Selects quantizer matrix, larger values reduce high-frequency content in the encoded image.
   */
  Softness?: number;

  /**
   * Color Space settings
   */
  ColorSpaceSettings?: H264ColorSpaceSettings;

  /**
   * Percentage of the buffer that should initially be filled (HRD buffer model).
   */
  BufFillPct?: number;

  /**
   * Number of B-frames between reference frames.
   */
  GopNumBFrames?: number;

  /**
   * Only meaningful if sceneChangeDetect is set to enabled.  Defaults to 5 if multiplex rate control is used.  Enforces separation between repeated (cadence) I-frames and I-frames inserted by Scene Change Detection. If a scene change I-frame is within I-interval frames of a cadence I-frame, the GOP is shrunk and/or stretched to the scene change I-frame. GOP stretch requires enabling lookahead as well as setting I-interval. The normal cadence resumes for the next GOP. Note: Maximum GOP stretch = GOP size + Min-I-interval - 1
   */
  MinIInterval?: number;

  /**
   * Optional filters that you can apply to an encode.
   */
  FilterSettings?: H264FilterSettings;

  /**
   * If set to fixed, use gopNumBFrames B-frames per sub-GOP. If set to dynamic, optimize the number of B-frames used for each sub-GOP to improve visual quality.
   */
  SubgopLength?: H264SubGopLength | string;

  /**
   * Rate control mode.
   *
   * QVBR: Quality will match the specified quality level except when it is constrained by the
   * maximum bitrate.  Recommended if you or your viewers pay for bandwidth.
   *
   * VBR: Quality and bitrate vary, depending on the video complexity. Recommended instead of QVBR
   * if you want to maintain a specific average bitrate over the duration of the channel.
   *
   * CBR: Quality varies, depending on the video complexity. Recommended only if you distribute
   * your assets to devices that cannot handle variable bitrates.
   *
   * Multiplex: This rate control mode is only supported (and is required) when the video is being
   * delivered to a MediaLive Multiplex in which case the rate control configuration is controlled
   * by the properties within the Multiplex Program.
   */
  RateControlMode?: H264RateControlMode | string;

  /**
   * Pixel Aspect Ratio numerator.
   */
  ParNumerator?: number;

  /**
   * Sets the scan type of the output to progressive or top-field-first interlaced.
   */
  ScanType?: H264ScanType | string;

  /**
   * Scene change detection.
   *
   * - On: inserts I-frames when scene change is detected.
   * - Off: does not force an I-frame when scene change is detected.
   */
  SceneChangeDetect?: H264SceneChangeDetect | string;

  /**
   * Includes colorspace metadata in the output.
   */
  ColorMetadata?: H264ColorMetadata | string;

  /**
   * Frequency of closed GOPs. In streaming applications, it is recommended that this be set to 1 so a decoder joining mid-stream will receive an IDR frame as quickly as possible. Setting this value to 0 will break output segmenting.
   */
  GopClosedCadence?: number;

  /**
   * Average bitrate in bits/second. Required when the rate control mode is VBR or CBR. Not used for QVBR. In an MS Smooth output group, each output must have a unique value when its bitrate is rounded down to the nearest multiple of 1000.
   */
  Bitrate?: number;

  /**
   * Determines how timecodes should be inserted into the video elementary stream.
   * - 'disabled': Do not include timecodes
   * - 'picTimingSei': Pass through picture timing SEI messages from the source specified in Timecode Config
   */
  TimecodeInsertion?: H264TimecodeInsertionBehavior | string;

  /**
   * Size of buffer (HRD buffer model) in bits.
   */
  BufSize?: number;

  /**
   * For QVBR: See the tooltip for Quality level
   *
   * For VBR: Set the maximum bitrate in order to accommodate expected spikes in the complexity of the video.
   */
  MaxBitrate?: number;

  /**
   * Indicates if the gopSize is specified in frames or seconds. If seconds the system will convert the gopSize into a frame count at run time.
   */
  GopSizeUnits?: H264GopSizeUnits | string;

  /**
   * Documentation update needed
   */
  GopBReference?: H264GopBReference | string;

  /**
   * Four bit AFD value to write on all frames of video in the output stream. Only valid when afdSignaling is set to 'Fixed'.
   */
  FixedAfd?: FixedAfd | string;

  /**
   * Framerate numerator - framerate is a fraction, e.g. 24000 / 1001 = 23.976 fps.
   */
  FramerateNumerator?: number;

  /**
   * This field indicates how the output pixel aspect ratio is specified.  If "specified" is selected then the output video pixel aspect ratio is determined by parNumerator and parDenominator, else if "initializeFromSource" is selected then the output pixsel aspect ratio will be set equal to the input video pixel aspect ratio of the first input.
   */
  ParControl?: H264ParControl | string;
}

export namespace H264Settings {
  export const filterSensitiveLog = (obj: H264Settings): any => ({
    ...obj,
  });
}

export enum H265AdaptiveQuantization {
  HIGH = "HIGH",
  HIGHER = "HIGHER",
  LOW = "LOW",
  MAX = "MAX",
  MEDIUM = "MEDIUM",
  OFF = "OFF",
}

export enum H265AlternativeTransferFunction {
  INSERT = "INSERT",
  OMIT = "OMIT",
}

export enum H265ColorMetadata {
  IGNORE = "IGNORE",
  INSERT = "INSERT",
}

/**
 * Hdr10 Settings
 */
export interface Hdr10Settings {
  /**
   * Maximum Frame Average Light Level
   * An integer metadata value defining the maximum average light level, in nits,
   * for any single frame within an encoded HDR video stream or file.
   */
  MaxFall?: number;

  /**
   * Maximum Content Light Level
   * An integer metadata value defining the maximum light level, in nits,
   * of any single pixel within an encoded HDR video stream or file.
   */
  MaxCll?: number;
}

export namespace Hdr10Settings {
  export const filterSensitiveLog = (obj: Hdr10Settings): any => ({
    ...obj,
  });
}

/**
 * H265 Color Space Settings
 */
export interface H265ColorSpaceSettings {
  /**
   * Rec709 Settings
   */
  Rec709Settings?: Rec709Settings;

  /**
   * Rec601 Settings
   */
  Rec601Settings?: Rec601Settings;

  /**
   * Hdr10 Settings
   */
  Hdr10Settings?: Hdr10Settings;

  /**
   * Passthrough applies no color space conversion to the output
   */
  ColorSpacePassthroughSettings?: ColorSpacePassthroughSettings;
}

export namespace H265ColorSpaceSettings {
  export const filterSensitiveLog = (obj: H265ColorSpaceSettings): any => ({
    ...obj,
  });
}

/**
 * H265 Filter Settings
 */
export interface H265FilterSettings {
  /**
   * Temporal Filter Settings
   */
  TemporalFilterSettings?: TemporalFilterSettings;
}

export namespace H265FilterSettings {
  export const filterSensitiveLog = (obj: H265FilterSettings): any => ({
    ...obj,
  });
}

export enum H265FlickerAq {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum H265GopSizeUnits {
  FRAMES = "FRAMES",
  SECONDS = "SECONDS",
}

export enum H265Level {
  H265_LEVEL_1 = "H265_LEVEL_1",
  H265_LEVEL_2 = "H265_LEVEL_2",
  H265_LEVEL_2_1 = "H265_LEVEL_2_1",
  H265_LEVEL_3 = "H265_LEVEL_3",
  H265_LEVEL_3_1 = "H265_LEVEL_3_1",
  H265_LEVEL_4 = "H265_LEVEL_4",
  H265_LEVEL_4_1 = "H265_LEVEL_4_1",
  H265_LEVEL_5 = "H265_LEVEL_5",
  H265_LEVEL_5_1 = "H265_LEVEL_5_1",
  H265_LEVEL_5_2 = "H265_LEVEL_5_2",
  H265_LEVEL_6 = "H265_LEVEL_6",
  H265_LEVEL_6_1 = "H265_LEVEL_6_1",
  H265_LEVEL_6_2 = "H265_LEVEL_6_2",
  H265_LEVEL_AUTO = "H265_LEVEL_AUTO",
}

export enum H265LookAheadRateControl {
  HIGH = "HIGH",
  LOW = "LOW",
  MEDIUM = "MEDIUM",
}

export enum H265Profile {
  MAIN = "MAIN",
  MAIN_10BIT = "MAIN_10BIT",
}

export enum H265RateControlMode {
  CBR = "CBR",
  MULTIPLEX = "MULTIPLEX",
  QVBR = "QVBR",
}

export enum H265ScanType {
  INTERLACED = "INTERLACED",
  PROGRESSIVE = "PROGRESSIVE",
}

export enum H265SceneChangeDetect {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum H265Tier {
  HIGH = "HIGH",
  MAIN = "MAIN",
}

export enum H265TimecodeInsertionBehavior {
  DISABLED = "DISABLED",
  PIC_TIMING_SEI = "PIC_TIMING_SEI",
}

/**
 * H265 Settings
 */
export interface H265Settings {
  /**
   * Controls the target quality for the video encode. Applies only when the rate control mode is QVBR. Set values for the QVBR quality level field and Max bitrate field that suit your most important viewing devices. Recommended values are:
   * - Primary screen: Quality level: 8 to 10. Max bitrate: 4M
   * - PC or tablet: Quality level: 7. Max bitrate: 1.5M to 3M
   * - Smartphone: Quality level: 6. Max bitrate: 1M to 1.5M
   */
  QvbrQualityLevel?: number;

  /**
   * Amount of lookahead. A value of low can decrease latency and memory usage, while high can produce better quality for certain content.
   */
  LookAheadRateControl?: H265LookAheadRateControl | string;

  /**
   * If set to enabled, adjust quantization within each frame to reduce flicker or 'pop' on I-frames.
   */
  FlickerAq?: H265FlickerAq | string;

  /**
   * GOP size (keyframe interval) in units of either frames or seconds per gopSizeUnits.
   * If gopSizeUnits is frames, gopSize must be an integer and must be greater than or equal to 1.
   * If gopSizeUnits is seconds, gopSize must be greater than 0, but need not be an integer.
   */
  GopSize?: number;

  /**
   * H.265 Level.
   */
  Level?: H265Level | string;

  /**
   * Number of slices per picture. Must be less than or equal to the number of macroblock rows for progressive pictures, and less than or equal to half the number of macroblock rows for interlaced pictures.
   * This field is optional; when no value is specified the encoder will choose the number of slices based on encode resolution.
   */
  Slices?: number;

  /**
   * Size of buffer (HRD buffer model) in bits.
   */
  BufSize?: number;

  /**
   * Determines how timecodes should be inserted into the video elementary stream.
   * - 'disabled': Do not include timecodes
   * - 'picTimingSei': Pass through picture timing SEI messages from the source specified in Timecode Config
   */
  TimecodeInsertion?: H265TimecodeInsertionBehavior | string;

  /**
   * Framerate numerator - framerate is a fraction, e.g. 24000 / 1001 = 23.976 fps.
   */
  FramerateNumerator: number | undefined;

  /**
   * Average bitrate in bits/second. Required when the rate control mode is VBR or CBR. Not used for QVBR. In an MS Smooth output group, each output must have a unique value when its bitrate is rounded down to the nearest multiple of 1000.
   */
  Bitrate?: number;

  /**
   * Rate control mode.
   *
   * QVBR: Quality will match the specified quality level except when it is constrained by the
   * maximum bitrate.  Recommended if you or your viewers pay for bandwidth.
   *
   * CBR: Quality varies, depending on the video complexity. Recommended only if you distribute
   * your assets to devices that cannot handle variable bitrates.
   *
   * Multiplex: This rate control mode is only supported (and is required) when the video is being
   * delivered to a MediaLive Multiplex in which case the rate control configuration is controlled
   * by the properties within the Multiplex Program.
   */
  RateControlMode?: H265RateControlMode | string;

  /**
   * Frequency of closed GOPs. In streaming applications, it is recommended that this be set to 1 so a decoder joining mid-stream will receive an IDR frame as quickly as possible. Setting this value to 0 will break output segmenting.
   */
  GopClosedCadence?: number;

  /**
   * Pixel Aspect Ratio numerator.
   */
  ParNumerator?: number;

  /**
   * Sets the scan type of the output to progressive or top-field-first interlaced.
   */
  ScanType?: H265ScanType | string;

  /**
   * Four bit AFD value to write on all frames of video in the output stream. Only valid when afdSignaling is set to 'Fixed'.
   */
  FixedAfd?: FixedAfd | string;

  /**
   * Includes colorspace metadata in the output.
   */
  ColorMetadata?: H265ColorMetadata | string;

  /**
   * H.265 Tier.
   */
  Tier?: H265Tier | string;

  /**
   * Indicates if the gopSize is specified in frames or seconds. If seconds the system will convert the gopSize into a frame count at run time.
   */
  GopSizeUnits?: H265GopSizeUnits | string;

  /**
   * For QVBR: See the tooltip for Quality level
   */
  MaxBitrate?: number;

  /**
   * Whether or not EML should insert an Alternative Transfer Function SEI message to support backwards compatibility with non-HDR decoders and displays.
   */
  AlternativeTransferFunction?: H265AlternativeTransferFunction | string;

  /**
   * Optional filters that you can apply to an encode.
   */
  FilterSettings?: H265FilterSettings;

  /**
   * Pixel Aspect Ratio denominator.
   */
  ParDenominator?: number;

  /**
   * Only meaningful if sceneChangeDetect is set to enabled.  Defaults to 5 if multiplex rate control is used.  Enforces separation between repeated (cadence) I-frames and I-frames inserted by Scene Change Detection. If a scene change I-frame is within I-interval frames of a cadence I-frame, the GOP is shrunk and/or stretched to the scene change I-frame. GOP stretch requires enabling lookahead as well as setting I-interval. The normal cadence resumes for the next GOP. Note: Maximum GOP stretch = GOP size + Min-I-interval - 1
   */
  MinIInterval?: number;

  /**
   * Scene change detection.
   */
  SceneChangeDetect?: H265SceneChangeDetect | string;

  /**
   * Color Space settings
   */
  ColorSpaceSettings?: H265ColorSpaceSettings;

  /**
   * Framerate denominator.
   */
  FramerateDenominator: number | undefined;

  /**
   * Adaptive quantization. Allows intra-frame quantizers to vary to improve visual quality.
   */
  AdaptiveQuantization?: H265AdaptiveQuantization | string;

  /**
   * Indicates that AFD values will be written into the output stream.  If afdSignaling is "auto", the system will try to preserve the input AFD value (in cases where multiple AFD values are valid). If set to "fixed", the AFD value will be the value configured in the fixedAfd parameter.
   */
  AfdSignaling?: AfdSignaling | string;

  /**
   * H.265 Profile.
   */
  Profile?: H265Profile | string;
}

export namespace H265Settings {
  export const filterSensitiveLog = (obj: H265Settings): any => ({
    ...obj,
  });
}

export enum Mpeg2AdaptiveQuantization {
  AUTO = "AUTO",
  HIGH = "HIGH",
  LOW = "LOW",
  MEDIUM = "MEDIUM",
  OFF = "OFF",
}

export enum Mpeg2ColorMetadata {
  IGNORE = "IGNORE",
  INSERT = "INSERT",
}

export enum Mpeg2ColorSpace {
  AUTO = "AUTO",
  PASSTHROUGH = "PASSTHROUGH",
}

export enum Mpeg2DisplayRatio {
  DISPLAYRATIO16X9 = "DISPLAYRATIO16X9",
  DISPLAYRATIO4X3 = "DISPLAYRATIO4X3",
}

/**
 * Mpeg2 Filter Settings
 */
export interface Mpeg2FilterSettings {
  /**
   * Temporal Filter Settings
   */
  TemporalFilterSettings?: TemporalFilterSettings;
}

export namespace Mpeg2FilterSettings {
  export const filterSensitiveLog = (obj: Mpeg2FilterSettings): any => ({
    ...obj,
  });
}

export enum Mpeg2GopSizeUnits {
  FRAMES = "FRAMES",
  SECONDS = "SECONDS",
}

export enum Mpeg2ScanType {
  INTERLACED = "INTERLACED",
  PROGRESSIVE = "PROGRESSIVE",
}

export enum Mpeg2SubGopLength {
  DYNAMIC = "DYNAMIC",
  FIXED = "FIXED",
}

export enum Mpeg2TimecodeInsertionBehavior {
  DISABLED = "DISABLED",
  GOP_TIMECODE = "GOP_TIMECODE",
}

/**
 * Mpeg2 Settings
 */
export interface Mpeg2Settings {
  /**
   * Determines how MediaLive inserts timecodes in the output video. For detailed information about setting up the input and the output for a timecode, see the section on \"MediaLive Features - Timecode configuration\" in the MediaLive User Guide.
   * DISABLED: do not include timecodes.
   * GOP_TIMECODE: Include timecode metadata in the GOP header.
   */
  TimecodeInsertion?: Mpeg2TimecodeInsertionBehavior | string;

  /**
   * Specifies whether to include the color space metadata. The metadata describes the color space that applies to the video (the colorSpace field). We recommend that you insert the metadata.
   */
  ColorMetadata?: Mpeg2ColorMetadata | string;

  /**
   * MPEG2: default is open GOP.
   */
  GopClosedCadence?: number;

  /**
   * Set the scan type of the output to PROGRESSIVE or INTERLACED (top field first).
   */
  ScanType?: Mpeg2ScanType | string;

  /**
   * description": "The framerate denominator. For example, 1001. The framerate is the numerator divided by the denominator. For example, 24000 / 1001 = 23.976 FPS.
   */
  FramerateDenominator: number | undefined;

  /**
   * Choose Off to disable adaptive quantization. Or choose another value to enable the quantizer and set its strength. The strengths are: Auto, Off, Low, Medium, High. When you enable this field, MediaLive allows intra-frame quantizers to vary, which might improve visual quality.
   */
  AdaptiveQuantization?: Mpeg2AdaptiveQuantization | string;

  /**
   * Sets the pixel aspect ratio for the encode.
   */
  DisplayAspectRatio?: Mpeg2DisplayRatio | string;

  /**
   * The framerate numerator. For example, 24000. The framerate is the numerator divided by the denominator. For example, 24000 / 1001 = 23.976 FPS.
   */
  FramerateNumerator: number | undefined;

  /**
   * Indicates the AFD values that MediaLive will write into the video encode. If you do not know what AFD signaling is, or if your downstream system has not given you guidance, choose AUTO.
   * AUTO: MediaLive will try to preserve the input AFD value (in cases where multiple AFD values are valid).
   * FIXED: MediaLive will use the value you specify in fixedAFD.
   */
  AfdSignaling?: AfdSignaling | string;

  /**
   * Complete this field only when afdSignaling is set to FIXED. Enter the AFD value (4 bits) to write on all frames of the video encode.
   */
  FixedAfd?: FixedAfd | string;

  /**
   * Choose the type of color space conversion to apply to the output. For detailed information on setting up both the input and the output to obtain the desired color space in the output, see the section on \"MediaLive Features - Video - color space\" in the MediaLive User Guide.
   * PASSTHROUGH: Keep the color space of the input content - do not convert it.
   * AUTO:Convert all content that is SD to rec 601, and convert all content that is HD to rec 709.
   */
  ColorSpace?: Mpeg2ColorSpace | string;

  /**
   * Relates to the GOP structure. If you do not know what GOP is, use the default.
   * FIXED: Set the number of B-frames in each sub-GOP to the value in gopNumBFrames.
   * DYNAMIC: Let MediaLive optimize the number of B-frames in each sub-GOP, to improve visual quality.
   */
  SubgopLength?: Mpeg2SubGopLength | string;

  /**
   * Relates to the GOP structure. Specifies whether the gopSize is specified in frames or seconds. If you do not plan to change the default gopSize, leave the default. If you specify SECONDS, MediaLive will internally convert the gop size to a frame count.
   */
  GopSizeUnits?: Mpeg2GopSizeUnits | string;

  /**
   * Optionally specify a noise reduction filter, which can improve quality of compressed content. If you do not choose a filter, no filter will be applied.
   * TEMPORAL: This filter is useful for both source content that is noisy (when it has excessive digital artifacts) and source content that is clean.
   * When the content is noisy, the filter cleans up the source content before the encoding phase, with these two effects: First, it improves the output video quality because the content has been cleaned up. Secondly, it decreases the bandwidth because MediaLive does not waste bits on encoding noise.
   * When the content is reasonably clean, the filter tends to decrease the bitrate.
   */
  FilterSettings?: Mpeg2FilterSettings;

  /**
   * Relates to the GOP structure. The number of B-frames between reference frames. If you do not know what a B-frame is, use the default.
   */
  GopNumBFrames?: number;

  /**
   * Relates to the GOP structure. The GOP size (keyframe interval) in the units specified in gopSizeUnits. If you do not know what GOP is, use the default.
   * If gopSizeUnits is frames, then the gopSize must be an integer and must be greater than or equal to 1.
   * If gopSizeUnits is seconds, the gopSize must be greater than 0, but does not need to be an integer.
   */
  GopSize?: number;
}

export namespace Mpeg2Settings {
  export const filterSensitiveLog = (obj: Mpeg2Settings): any => ({
    ...obj,
  });
}

/**
 * Video Codec Settings
 */
export interface VideoCodecSettings {
  /**
   * Frame Capture Settings
   */
  FrameCaptureSettings?: FrameCaptureSettings;

  /**
   * H265 Settings
   */
  H265Settings?: H265Settings;

  /**
   * Mpeg2 Settings
   */
  Mpeg2Settings?: Mpeg2Settings;

  /**
   * H264 Settings
   */
  H264Settings?: H264Settings;
}

export namespace VideoCodecSettings {
  export const filterSensitiveLog = (obj: VideoCodecSettings): any => ({
    ...obj,
  });
}

export enum VideoDescriptionRespondToAfd {
  NONE = "NONE",
  PASSTHROUGH = "PASSTHROUGH",
  RESPOND = "RESPOND",
}

export enum VideoDescriptionScalingBehavior {
  DEFAULT = "DEFAULT",
  STRETCH_TO_OUTPUT = "STRETCH_TO_OUTPUT",
}

/**
 * Video settings for this stream.
 */
export interface VideoDescription {
  /**
   * The name of this VideoDescription. Outputs will use this name to uniquely identify this Description.  Description names should be unique within this Live Event.
   */
  Name: string | undefined;

  /**
   * Changes the strength of the anti-alias filter used for scaling. 0 is the softest setting, 100 is the sharpest. A setting of 50 is recommended for most content.
   */
  Sharpness?: number;

  /**
   * Indicates how MediaLive will respond to the AFD values that might be in the input video. If you do not know what AFD signaling is, or if your downstream system has not given you guidance, choose PASSTHROUGH.
   * RESPOND: MediaLive clips the input video using a formula that uses the AFD values (configured in afdSignaling ), the input display aspect ratio, and the output display aspect ratio. MediaLive also includes the AFD values in the output, unless the codec for this encode is FRAME_CAPTURE.
   * PASSTHROUGH: MediaLive ignores the AFD values and does not clip the video. But MediaLive does include the values in the output.
   * NONE: MediaLive does not clip the input video and does not include the AFD values in the output
   */
  RespondToAfd?: VideoDescriptionRespondToAfd | string;

  /**
   * Video codec settings.
   */
  CodecSettings?: VideoCodecSettings;

  /**
   * STRETCH_TO_OUTPUT configures the output position to stretch the video to the specified output resolution (height and width). This option will override any position value. DEFAULT may insert black boxes (pillar boxes or letter boxes) around the video to provide the specified output resolution.
   */
  ScalingBehavior?: VideoDescriptionScalingBehavior | string;

  /**
   * Output video height, in pixels. Must be an even number. For most codecs, you can leave this field and width blank in order to use the height and width (resolution) from the source. Note, however, that leaving blank is not recommended. For the Frame Capture codec, height and width are required.
   */
  Height?: number;

  /**
   * Output video width, in pixels. Must be an even number. For most codecs, you can leave this field and height blank in order to use the height and width (resolution) from the source. Note, however, that leaving blank is not recommended. For the Frame Capture codec, height and width are required.
   */
  Width?: number;
}

export namespace VideoDescription {
  export const filterSensitiveLog = (obj: VideoDescription): any => ({
    ...obj,
  });
}

export enum AcceptHeader {
  image_jpeg = "image/jpeg",
}

/**
 * Placeholder documentation for AcceptInputDeviceTransferRequest
 */
export interface AcceptInputDeviceTransferRequest {
  /**
   * The unique ID of the input device to accept. For example, hd-123456789abcdef.
   */
  InputDeviceId: string | undefined;
}

export namespace AcceptInputDeviceTransferRequest {
  export const filterSensitiveLog = (obj: AcceptInputDeviceTransferRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for AcceptInputDeviceTransferResponse
 */
export interface AcceptInputDeviceTransferResponse {}

export namespace AcceptInputDeviceTransferResponse {
  export const filterSensitiveLog = (obj: AcceptInputDeviceTransferResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for BadGatewayException
 */
export interface BadGatewayException extends __SmithyException, $MetadataBearer {
  name: "BadGatewayException";
  $fault: "server";
  /**
   * Placeholder documentation for __string
   */
  Message?: string;
}

export namespace BadGatewayException {
  export const filterSensitiveLog = (obj: BadGatewayException): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for BadRequestException
 */
export interface BadRequestException extends __SmithyException, $MetadataBearer {
  name: "BadRequestException";
  $fault: "client";
  /**
   * Placeholder documentation for __string
   */
  Message?: string;
}

export namespace BadRequestException {
  export const filterSensitiveLog = (obj: BadRequestException): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for ConflictException
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
  name: "ConflictException";
  $fault: "client";
  /**
   * Placeholder documentation for __string
   */
  Message?: string;
}

export namespace ConflictException {
  export const filterSensitiveLog = (obj: ConflictException): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for ForbiddenException
 */
export interface ForbiddenException extends __SmithyException, $MetadataBearer {
  name: "ForbiddenException";
  $fault: "client";
  /**
   * Placeholder documentation for __string
   */
  Message?: string;
}

export namespace ForbiddenException {
  export const filterSensitiveLog = (obj: ForbiddenException): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for GatewayTimeoutException
 */
export interface GatewayTimeoutException extends __SmithyException, $MetadataBearer {
  name: "GatewayTimeoutException";
  $fault: "server";
  /**
   * Placeholder documentation for __string
   */
  Message?: string;
}

export namespace GatewayTimeoutException {
  export const filterSensitiveLog = (obj: GatewayTimeoutException): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for InternalServerErrorException
 */
export interface InternalServerErrorException extends __SmithyException, $MetadataBearer {
  name: "InternalServerErrorException";
  $fault: "server";
  /**
   * Placeholder documentation for __string
   */
  Message?: string;
}

export namespace InternalServerErrorException {
  export const filterSensitiveLog = (obj: InternalServerErrorException): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for NotFoundException
 */
export interface NotFoundException extends __SmithyException, $MetadataBearer {
  name: "NotFoundException";
  $fault: "client";
  /**
   * Placeholder documentation for __string
   */
  Message?: string;
}

export namespace NotFoundException {
  export const filterSensitiveLog = (obj: NotFoundException): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for TooManyRequestsException
 */
export interface TooManyRequestsException extends __SmithyException, $MetadataBearer {
  name: "TooManyRequestsException";
  $fault: "client";
  /**
   * Placeholder documentation for __string
   */
  Message?: string;
}

export namespace TooManyRequestsException {
  export const filterSensitiveLog = (obj: TooManyRequestsException): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for UnprocessableEntityException
 */
export interface UnprocessableEntityException extends __SmithyException, $MetadataBearer {
  name: "UnprocessableEntityException";
  $fault: "client";
  /**
   * A collection of validation error responses.
   */
  ValidationErrors?: ValidationError[];

  /**
   * The error message.
   */
  Message?: string;
}

export namespace UnprocessableEntityException {
  export const filterSensitiveLog = (obj: UnprocessableEntityException): any => ({
    ...obj,
  });
}

export enum AvailBlankingState {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

/**
 * Avail Blanking
 */
export interface AvailBlanking {
  /**
   * When set to enabled, causes video, audio and captions to be blanked when insertion metadata is added.
   */
  State?: AvailBlankingState | string;

  /**
   * Blanking image to be used. Leave empty for solid black. Only bmp and png images are supported.
   */
  AvailBlankingImage?: InputLocation;
}

export namespace AvailBlanking {
  export const filterSensitiveLog = (obj: AvailBlanking): any => ({
    ...obj,
  });
}

export enum Scte35SpliceInsertNoRegionalBlackoutBehavior {
  FOLLOW = "FOLLOW",
  IGNORE = "IGNORE",
}

export enum Scte35SpliceInsertWebDeliveryAllowedBehavior {
  FOLLOW = "FOLLOW",
  IGNORE = "IGNORE",
}

/**
 * Scte35 Splice Insert
 */
export interface Scte35SpliceInsert {
  /**
   * When specified, this offset (in milliseconds) is added to the input Ad Avail PTS time. This only applies to embedded SCTE 104/35 messages and does not apply to OOB messages.
   */
  AdAvailOffset?: number;

  /**
   * When set to ignore, Segment Descriptors with noRegionalBlackoutFlag set to 0 will no longer trigger blackouts or Ad Avail slates
   */
  NoRegionalBlackoutFlag?: Scte35SpliceInsertNoRegionalBlackoutBehavior | string;

  /**
   * When set to ignore, Segment Descriptors with webDeliveryAllowedFlag set to 0 will no longer trigger blackouts or Ad Avail slates
   */
  WebDeliveryAllowedFlag?: Scte35SpliceInsertWebDeliveryAllowedBehavior | string;
}

export namespace Scte35SpliceInsert {
  export const filterSensitiveLog = (obj: Scte35SpliceInsert): any => ({
    ...obj,
  });
}

export enum Scte35AposNoRegionalBlackoutBehavior {
  FOLLOW = "FOLLOW",
  IGNORE = "IGNORE",
}

export enum Scte35AposWebDeliveryAllowedBehavior {
  FOLLOW = "FOLLOW",
  IGNORE = "IGNORE",
}

/**
 * Scte35 Time Signal Apos
 */
export interface Scte35TimeSignalApos {
  /**
   * When set to ignore, Segment Descriptors with webDeliveryAllowedFlag set to 0 will no longer trigger blackouts or Ad Avail slates
   */
  WebDeliveryAllowedFlag?: Scte35AposWebDeliveryAllowedBehavior | string;

  /**
   * When set to ignore, Segment Descriptors with noRegionalBlackoutFlag set to 0 will no longer trigger blackouts or Ad Avail slates
   */
  NoRegionalBlackoutFlag?: Scte35AposNoRegionalBlackoutBehavior | string;

  /**
   * When specified, this offset (in milliseconds) is added to the input Ad Avail PTS time. This only applies to embedded SCTE 104/35 messages and does not apply to OOB messages.
   */
  AdAvailOffset?: number;
}

export namespace Scte35TimeSignalApos {
  export const filterSensitiveLog = (obj: Scte35TimeSignalApos): any => ({
    ...obj,
  });
}

/**
 * Avail Settings
 */
export interface AvailSettings {
  /**
   * Scte35 Splice Insert
   */
  Scte35SpliceInsert?: Scte35SpliceInsert;

  /**
   * Scte35 Time Signal Apos
   */
  Scte35TimeSignalApos?: Scte35TimeSignalApos;
}

export namespace AvailSettings {
  export const filterSensitiveLog = (obj: AvailSettings): any => ({
    ...obj,
  });
}

/**
 * Avail Configuration
 */
export interface AvailConfiguration {
  /**
   * Ad avail settings.
   */
  AvailSettings?: AvailSettings;
}

export namespace AvailConfiguration {
  export const filterSensitiveLog = (obj: AvailConfiguration): any => ({
    ...obj,
  });
}

/**
 * A request to delete resources
 */
export interface BatchDeleteRequest {
  /**
   * List of multiplex IDs
   */
  MultiplexIds?: string[];

  /**
   * List of input IDs
   */
  InputIds?: string[];

  /**
   * List of channel IDs
   */
  ChannelIds?: string[];

  /**
   * List of input security group IDs
   */
  InputSecurityGroupIds?: string[];
}

export namespace BatchDeleteRequest {
  export const filterSensitiveLog = (obj: BatchDeleteRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for BatchDeleteResponse
 */
export interface BatchDeleteResponse {
  /**
   * List of successful operations
   */
  Successful?: BatchSuccessfulResultModel[];

  /**
   * List of failed operations
   */
  Failed?: BatchFailedResultModel[];
}

export namespace BatchDeleteResponse {
  export const filterSensitiveLog = (obj: BatchDeleteResponse): any => ({
    ...obj,
  });
}

/**
 * A list of schedule actions to create (in a request) or that have been created (in a response).
 */
export interface BatchScheduleActionCreateRequest {
  /**
   * A list of schedule actions to create.
   */
  ScheduleActions: ScheduleAction[] | undefined;
}

export namespace BatchScheduleActionCreateRequest {
  export const filterSensitiveLog = (obj: BatchScheduleActionCreateRequest): any => ({
    ...obj,
  });
}

/**
 * List of actions that have been created in the schedule.
 */
export interface BatchScheduleActionCreateResult {
  /**
   * List of actions that have been created in the schedule.
   */
  ScheduleActions: ScheduleAction[] | undefined;
}

export namespace BatchScheduleActionCreateResult {
  export const filterSensitiveLog = (obj: BatchScheduleActionCreateResult): any => ({
    ...obj,
  });
}

/**
 * A list of schedule actions to delete.
 */
export interface BatchScheduleActionDeleteRequest {
  /**
   * A list of schedule actions to delete.
   */
  ActionNames: string[] | undefined;
}

export namespace BatchScheduleActionDeleteRequest {
  export const filterSensitiveLog = (obj: BatchScheduleActionDeleteRequest): any => ({
    ...obj,
  });
}

/**
 * List of actions that have been deleted from the schedule.
 */
export interface BatchScheduleActionDeleteResult {
  /**
   * List of actions that have been deleted from the schedule.
   */
  ScheduleActions: ScheduleAction[] | undefined;
}

export namespace BatchScheduleActionDeleteResult {
  export const filterSensitiveLog = (obj: BatchScheduleActionDeleteResult): any => ({
    ...obj,
  });
}

/**
 * A request to start resources
 */
export interface BatchStartRequest {
  /**
   * List of channel IDs
   */
  ChannelIds?: string[];

  /**
   * List of multiplex IDs
   */
  MultiplexIds?: string[];
}

export namespace BatchStartRequest {
  export const filterSensitiveLog = (obj: BatchStartRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for BatchStartResponse
 */
export interface BatchStartResponse {
  /**
   * List of successful operations
   */
  Successful?: BatchSuccessfulResultModel[];

  /**
   * List of failed operations
   */
  Failed?: BatchFailedResultModel[];
}

export namespace BatchStartResponse {
  export const filterSensitiveLog = (obj: BatchStartResponse): any => ({
    ...obj,
  });
}

/**
 * A request to stop resources
 */
export interface BatchStopRequest {
  /**
   * List of multiplex IDs
   */
  MultiplexIds?: string[];

  /**
   * List of channel IDs
   */
  ChannelIds?: string[];
}

export namespace BatchStopRequest {
  export const filterSensitiveLog = (obj: BatchStopRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for BatchStopResponse
 */
export interface BatchStopResponse {
  /**
   * List of successful operations
   */
  Successful?: BatchSuccessfulResultModel[];

  /**
   * List of failed operations
   */
  Failed?: BatchFailedResultModel[];
}

export namespace BatchStopResponse {
  export const filterSensitiveLog = (obj: BatchStopResponse): any => ({
    ...obj,
  });
}

/**
 * List of actions to create and list of actions to delete.
 */
export interface BatchUpdateScheduleRequest {
  /**
   * Schedule actions to delete from the schedule.
   */
  Deletes?: BatchScheduleActionDeleteRequest;

  /**
   * Id of the channel whose schedule is being updated.
   */
  ChannelId: string | undefined;

  /**
   * Schedule actions to create in the schedule.
   */
  Creates?: BatchScheduleActionCreateRequest;
}

export namespace BatchUpdateScheduleRequest {
  export const filterSensitiveLog = (obj: BatchUpdateScheduleRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for BatchUpdateScheduleResponse
 */
export interface BatchUpdateScheduleResponse {
  /**
   * Schedule actions deleted from the schedule.
   */
  Deletes?: BatchScheduleActionDeleteResult;

  /**
   * Schedule actions created in the schedule.
   */
  Creates?: BatchScheduleActionCreateResult;
}

export namespace BatchUpdateScheduleResponse {
  export const filterSensitiveLog = (obj: BatchUpdateScheduleResponse): any => ({
    ...obj,
  });
}

export enum BlackoutSlateNetworkEndBlackout {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum BlackoutSlateState {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

/**
 * Blackout Slate
 */
export interface BlackoutSlate {
  /**
   * Setting to enabled causes the encoder to blackout the video, audio, and captions, and raise the "Network Blackout Image" slate when an SCTE104/35 Network End Segmentation Descriptor is encountered. The blackout will be lifted when the Network Start Segmentation Descriptor is encountered. The Network End and Network Start descriptors must contain a network ID that matches the value entered in "Network ID".
   */
  NetworkEndBlackout?: BlackoutSlateNetworkEndBlackout | string;

  /**
   * When set to enabled, causes video, audio and captions to be blanked when indicated by program metadata.
   */
  State?: BlackoutSlateState | string;

  /**
   * Path to local file to use as Network End Blackout image. Image will be scaled to fill the entire output raster.
   */
  NetworkEndBlackoutImage?: InputLocation;

  /**
   * Provides Network ID that matches EIDR ID format (e.g., "10.XXXX/XXXX-XXXX-XXXX-XXXX-XXXX-C").
   */
  NetworkId?: string;

  /**
   * Blackout slate image to be used. Leave empty for solid black. Only bmp and png images are supported.
   */
  BlackoutSlateImage?: InputLocation;
}

export namespace BlackoutSlate {
  export const filterSensitiveLog = (obj: BlackoutSlate): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for CancelInputDeviceTransferRequest
 */
export interface CancelInputDeviceTransferRequest {
  /**
   * The unique ID of the input device to cancel. For example, hd-123456789abcdef.
   */
  InputDeviceId: string | undefined;
}

export namespace CancelInputDeviceTransferRequest {
  export const filterSensitiveLog = (obj: CancelInputDeviceTransferRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for CancelInputDeviceTransferResponse
 */
export interface CancelInputDeviceTransferResponse {}

export namespace CancelInputDeviceTransferResponse {
  export const filterSensitiveLog = (obj: CancelInputDeviceTransferResponse): any => ({
    ...obj,
  });
}

export enum FeatureActivationsInputPrepareScheduleActions {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

/**
 * Feature Activations
 */
export interface FeatureActivations {
  /**
   * Enables the Input Prepare feature. You can create Input Prepare actions in the schedule only if this feature is enabled.
   * If you disable the feature on an existing schedule, make sure that you first delete all input prepare actions from the schedule.
   */
  InputPrepareScheduleActions?: FeatureActivationsInputPrepareScheduleActions | string;
}

export namespace FeatureActivations {
  export const filterSensitiveLog = (obj: FeatureActivations): any => ({
    ...obj,
  });
}

export enum GlobalConfigurationInputEndAction {
  NONE = "NONE",
  SWITCH_AND_LOOP_INPUTS = "SWITCH_AND_LOOP_INPUTS",
}

export enum InputLossImageType {
  COLOR = "COLOR",
  SLATE = "SLATE",
}

/**
 * Input Loss Behavior
 */
export interface InputLossBehavior {
  /**
   * When input loss image type is "slate" these fields specify the parameters for accessing the slate.
   */
  InputLossImageSlate?: InputLocation;

  /**
   * Indicates whether to substitute a solid color or a slate into the output after input loss exceeds blackFrameMsec.
   */
  InputLossImageType?: InputLossImageType | string;

  /**
   * Documentation update needed
   */
  BlackFrameMsec?: number;

  /**
   * When input loss image type is "color" this field specifies the color to use. Value: 6 hex characters representing the values of RGB.
   */
  InputLossImageColor?: string;

  /**
   * Documentation update needed
   */
  RepeatFrameMsec?: number;
}

export namespace InputLossBehavior {
  export const filterSensitiveLog = (obj: InputLossBehavior): any => ({
    ...obj,
  });
}

export enum GlobalConfigurationOutputLockingMode {
  EPOCH_LOCKING = "EPOCH_LOCKING",
  PIPELINE_LOCKING = "PIPELINE_LOCKING",
}

export enum GlobalConfigurationOutputTimingSource {
  INPUT_CLOCK = "INPUT_CLOCK",
  SYSTEM_CLOCK = "SYSTEM_CLOCK",
}

export enum GlobalConfigurationLowFramerateInputs {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

/**
 * Global Configuration
 */
export interface GlobalConfiguration {
  /**
   * Indicates the action to take when the current input completes (e.g. end-of-file). When switchAndLoopInputs is configured the encoder will restart at the beginning of the first input.  When "none" is configured the encoder will transcode either black, a solid color, or a user specified slate images per the "Input Loss Behavior" configuration until the next input switch occurs (which is controlled through the Channel Schedule API).
   */
  InputEndAction?: GlobalConfigurationInputEndAction | string;

  /**
   * Adjusts video input buffer for streams with very low video framerates. This is commonly set to enabled for music channels with less than one video frame per second.
   */
  SupportLowFramerateInputs?: GlobalConfigurationLowFramerateInputs | string;

  /**
   * Value to set the initial audio gain for the Live Event.
   */
  InitialAudioGain?: number;

  /**
   * Indicates whether the rate of frames emitted by the Live encoder should be paced by its system clock (which optionally may be locked to another source via NTP) or should be locked to the clock of the source that is providing the input stream.
   */
  OutputTimingSource?: GlobalConfigurationOutputTimingSource | string;

  /**
   * Indicates how MediaLive pipelines are synchronized.
   *
   * PIPELINE_LOCKING - MediaLive will attempt to synchronize the output of each pipeline to the other.
   * EPOCH_LOCKING - MediaLive will attempt to synchronize the output of each pipeline to the Unix epoch.
   */
  OutputLockingMode?: GlobalConfigurationOutputLockingMode | string;

  /**
   * Settings for system actions when input is lost.
   */
  InputLossBehavior?: InputLossBehavior;
}

export namespace GlobalConfiguration {
  export const filterSensitiveLog = (obj: GlobalConfiguration): any => ({
    ...obj,
  });
}

export enum NielsenPcmToId3TaggingState {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

/**
 * Nielsen Configuration
 */
export interface NielsenConfiguration {
  /**
   * Enter the Distributor ID assigned to your organization by Nielsen.
   */
  DistributorId?: string;

  /**
   * Enables Nielsen PCM to ID3 tagging
   */
  NielsenPcmToId3Tagging?: NielsenPcmToId3TaggingState | string;
}

export namespace NielsenConfiguration {
  export const filterSensitiveLog = (obj: NielsenConfiguration): any => ({
    ...obj,
  });
}

export enum TimecodeConfigSource {
  EMBEDDED = "EMBEDDED",
  SYSTEMCLOCK = "SYSTEMCLOCK",
  ZEROBASED = "ZEROBASED",
}

/**
 * Timecode Config
 */
export interface TimecodeConfig {
  /**
   * Threshold in frames beyond which output timecode is resynchronized to the input timecode. Discrepancies below this threshold are permitted to avoid unnecessary discontinuities in the output timecode. No timecode sync when this is not specified.
   */
  SyncThreshold?: number;

  /**
   * Identifies the source for the timecode that will be associated with the events outputs.
   * -Embedded (embedded): Initialize the output timecode with timecode from the the source.  If no embedded timecode is detected in the source, the system falls back to using "Start at 0" (zerobased).
   * -System Clock (systemclock): Use the UTC time.
   * -Start at 0 (zerobased): The time of the first frame of the event will be 00:00:00:00.
   */
  Source: TimecodeConfigSource | string | undefined;
}

export namespace TimecodeConfig {
  export const filterSensitiveLog = (obj: TimecodeConfig): any => ({
    ...obj,
  });
}

/**
 * Encoder Settings
 */
export interface EncoderSettings {
  /**
   * Settings for ad avail blanking.
   */
  AvailBlanking?: AvailBlanking;

  /**
   * Nielsen configuration settings.
   */
  NielsenConfiguration?: NielsenConfiguration;

  /**
   * Event-wide configuration settings for ad avail insertion.
   */
  AvailConfiguration?: AvailConfiguration;

  /**
   * Placeholder documentation for __listOfAudioDescription
   */
  AudioDescriptions: AudioDescription[] | undefined;

  /**
   * Feature Activations
   */
  FeatureActivations?: FeatureActivations;

  /**
   * Placeholder documentation for __listOfVideoDescription
   */
  VideoDescriptions: VideoDescription[] | undefined;

  /**
   * Configuration settings that apply to the event as a whole.
   */
  GlobalConfiguration?: GlobalConfiguration;

  /**
   * Settings for blackout slate.
   */
  BlackoutSlate?: BlackoutSlate;

  /**
   * Placeholder documentation for __listOfOutputGroup
   */
  OutputGroups: OutputGroup[] | undefined;

  /**
   * Contains settings used to acquire and adjust timecode information from inputs.
   */
  TimecodeConfig: TimecodeConfig | undefined;

  /**
   * Settings for caption decriptions
   */
  CaptionDescriptions?: CaptionDescription[];
}

export namespace EncoderSettings {
  export const filterSensitiveLog = (obj: EncoderSettings): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for Channel
 */
export interface Channel {
  /**
   * The unique id of the channel.
   */
  Id?: string;

  /**
   * The unique arn of the channel.
   */
  Arn?: string;

  /**
   * A list of destinations of the channel. For UDP outputs, there is one
   * destination per output. For other types (HLS, for example), there is
   * one destination per packager.
   */
  Destinations?: OutputDestination[];

  /**
   * The Amazon Resource Name (ARN) of the role assumed when running the Channel.
   */
  RoleArn?: string;

  /**
   * Specification of network and file inputs for this channel
   */
  InputSpecification?: InputSpecification;

  /**
   * Runtime details for the pipelines of a running channel.
   */
  PipelineDetails?: PipelineDetail[];

  /**
   * The number of currently healthy pipelines.
   */
  PipelinesRunningCount?: number;

  /**
   * Specification of CDI inputs for this channel
   */
  CdiInputSpecification?: CdiInputSpecification;

  /**
   * Placeholder documentation for ChannelState
   */
  State?: ChannelState | string;

  /**
   * The class for this channel. STANDARD for a channel with two pipelines or SINGLE_PIPELINE for a channel with one pipeline.
   */
  ChannelClass?: ChannelClass | string;

  /**
   * The log level being written to CloudWatch Logs.
   */
  LogLevel?: LogLevel | string;

  /**
   * The endpoints where outgoing connections initiate from
   */
  EgressEndpoints?: ChannelEgressEndpoint[];

  /**
   * A collection of key-value pairs.
   */
  Tags?: { [key: string]: string };

  /**
   * The name of the channel. (user-mutable)
   */
  Name?: string;

  /**
   * List of input attachments for channel.
   */
  InputAttachments?: InputAttachment[];

  /**
   * Encoder Settings
   */
  EncoderSettings?: EncoderSettings;
}

export namespace Channel {
  export const filterSensitiveLog = (obj: Channel): any => ({
    ...obj,
  });
}

export enum ContentType {
  image_jpeg = "image/jpeg",
}

/**
 * A request to create a channel
 */
export interface CreateChannelRequest {
  /**
   * A collection of key-value pairs.
   */
  Tags?: { [key: string]: string };

  /**
   * Specification of network and file inputs for this channel
   */
  InputSpecification?: InputSpecification;

  /**
   * Name of channel.
   */
  Name?: string;

  /**
   * Specification of CDI inputs for this channel
   */
  CdiInputSpecification?: CdiInputSpecification;

  /**
   * An optional Amazon Resource Name (ARN) of the role to assume when running the Channel.
   */
  RoleArn?: string;

  /**
   * The class for this channel. STANDARD for a channel with two pipelines or SINGLE_PIPELINE for a channel with one pipeline.
   */
  ChannelClass?: ChannelClass | string;

  /**
   * List of input attachments for channel.
   */
  InputAttachments?: InputAttachment[];

  /**
   * Deprecated field that's only usable by whitelisted customers.
   */
  Reserved?: string;

  /**
   * The log level to write to CloudWatch Logs.
   */
  LogLevel?: LogLevel | string;

  /**
   * Unique request ID to be specified. This is needed to prevent retries from
   * creating multiple resources.
   */
  RequestId?: string;

  /**
   * Placeholder documentation for __listOfOutputDestination
   */
  Destinations?: OutputDestination[];

  /**
   * Encoder Settings
   */
  EncoderSettings?: EncoderSettings;
}

export namespace CreateChannelRequest {
  export const filterSensitiveLog = (obj: CreateChannelRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for CreateChannelResponse
 */
export interface CreateChannelResponse {
  /**
   * Placeholder documentation for Channel
   */
  Channel?: Channel;
}

export namespace CreateChannelResponse {
  export const filterSensitiveLog = (obj: CreateChannelResponse): any => ({
    ...obj,
  });
}

/**
 * Settings for a private VPC Input.
 * When this property is specified, the input destination addresses will be created in a VPC rather than with public Internet addresses.
 * This property requires setting the roleArn property on Input creation.
 * Not compatible with the inputSecurityGroups property.
 */
export interface InputVpcRequest {
  /**
   * A list of 2 VPC subnet IDs from the same VPC.
   * Subnet IDs must be mapped to two unique availability zones (AZ).
   */
  SubnetIds: string[] | undefined;

  /**
   * A list of up to 5 EC2 VPC security group IDs to attach to the Input VPC network interfaces.
   * Requires subnetIds. If none are specified then the VPC default security group will be used.
   */
  SecurityGroupIds?: string[];
}

export namespace InputVpcRequest {
  export const filterSensitiveLog = (obj: InputVpcRequest): any => ({
    ...obj,
  });
}

/**
 * The name of the input
 */
export interface CreateInputRequest {
  /**
   * The Amazon Resource Name (ARN) of the role this input assumes during and after creation.
   */
  RoleArn?: string;

  /**
   * A collection of key-value pairs.
   */
  Tags?: { [key: string]: string };

  /**
   * A list of security groups referenced by IDs to attach to the input.
   */
  InputSecurityGroups?: string[];

  /**
   * Destination settings for PUSH type inputs.
   */
  Destinations?: InputDestinationRequest[];

  /**
   * A list of the MediaConnect Flows that you want to use in this input. You can specify as few as one
   * Flow and presently, as many as two. The only requirement is when you have more than one is that each Flow is in a
   * separate Availability Zone as this ensures your EML input is redundant to AZ issues.
   */
  MediaConnectFlows?: MediaConnectFlowRequest[];

  /**
   * Settings for the devices.
   */
  InputDevices?: InputDeviceSettings[];

  /**
   * Placeholder documentation for InputType
   */
  Type?: InputType | string;

  /**
   * Name of the input.
   */
  Name?: string;

  /**
   * The source URLs for a PULL-type input. Every PULL type input needs
   * exactly two source URLs for redundancy.
   * Only specify sources for PULL type Inputs. Leave Destinations empty.
   */
  Sources?: InputSourceRequest[];

  /**
   * Unique identifier of the request to ensure the request is handled
   * exactly once in case of retries.
   */
  RequestId?: string;

  /**
   * Settings for a private VPC Input.
   * When this property is specified, the input destination addresses will be created in a VPC rather than with public Internet addresses.
   * This property requires setting the roleArn property on Input creation.
   * Not compatible with the inputSecurityGroups property.
   */
  Vpc?: InputVpcRequest;
}

export namespace CreateInputRequest {
  export const filterSensitiveLog = (obj: CreateInputRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for CreateInputResponse
 */
export interface CreateInputResponse {
  /**
   * Placeholder documentation for Input
   */
  Input?: Input;
}

export namespace CreateInputResponse {
  export const filterSensitiveLog = (obj: CreateInputResponse): any => ({
    ...obj,
  });
}

/**
 * The IPv4 CIDRs to whitelist for this Input Security Group
 */
export interface CreateInputSecurityGroupRequest {
  /**
   * List of IPv4 CIDR addresses to whitelist
   */
  WhitelistRules?: InputWhitelistRuleCidr[];

  /**
   * A collection of key-value pairs.
   */
  Tags?: { [key: string]: string };
}

export namespace CreateInputSecurityGroupRequest {
  export const filterSensitiveLog = (obj: CreateInputSecurityGroupRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for CreateInputSecurityGroupResponse
 */
export interface CreateInputSecurityGroupResponse {
  /**
   * An Input Security Group
   */
  SecurityGroup?: InputSecurityGroup;
}

export namespace CreateInputSecurityGroupResponse {
  export const filterSensitiveLog = (obj: CreateInputSecurityGroupResponse): any => ({
    ...obj,
  });
}

/**
 * Contains configuration for a Multiplex event
 */
export interface MultiplexSettings {
  /**
   * Transport stream ID.
   */
  TransportStreamId: number | undefined;

  /**
   * Transport stream reserved bit rate.
   */
  TransportStreamReservedBitrate?: number;

  /**
   * Transport stream bit rate.
   */
  TransportStreamBitrate: number | undefined;

  /**
   * Maximum video buffer delay in milliseconds.
   */
  MaximumVideoBufferDelayMilliseconds?: number;
}

export namespace MultiplexSettings {
  export const filterSensitiveLog = (obj: MultiplexSettings): any => ({
    ...obj,
  });
}

/**
 * A request to create a multiplex.
 */
export interface CreateMultiplexRequest {
  /**
   * A collection of key-value pairs.
   */
  Tags?: { [key: string]: string };

  /**
   * A list of availability zones for the multiplex. You must specify exactly two.
   */
  AvailabilityZones: string[] | undefined;

  /**
   * Configuration for a multiplex event.
   */
  MultiplexSettings: MultiplexSettings | undefined;

  /**
   * Unique request ID. This prevents retries from creating multiple
   * resources.
   */
  RequestId?: string;

  /**
   * Name of multiplex.
   */
  Name: string | undefined;
}

export namespace CreateMultiplexRequest {
  export const filterSensitiveLog = (obj: CreateMultiplexRequest): any => ({
    ...obj,
  });
}

/**
 * The multiplex object.
 */
export interface Multiplex {
  /**
   * A collection of key-value pairs.
   */
  Tags?: { [key: string]: string };

  /**
   * The name of the multiplex.
   */
  Name?: string;

  /**
   * The number of currently healthy pipelines.
   */
  PipelinesRunningCount?: number;

  /**
   * The unique arn of the multiplex.
   */
  Arn?: string;

  /**
   * The number of programs in the multiplex.
   */
  ProgramCount?: number;

  /**
   * The unique id of the multiplex.
   */
  Id?: string;

  /**
   * The current state of the multiplex.
   */
  State?: MultiplexState | string;

  /**
   * Configuration for a multiplex event.
   */
  MultiplexSettings?: MultiplexSettings;

  /**
   * A list of the multiplex output destinations.
   */
  Destinations?: MultiplexOutputDestination[];

  /**
   * A list of availability zones for the multiplex.
   */
  AvailabilityZones?: string[];
}

export namespace Multiplex {
  export const filterSensitiveLog = (obj: Multiplex): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for CreateMultiplexResponse
 */
export interface CreateMultiplexResponse {
  /**
   * The newly created multiplex.
   */
  Multiplex?: Multiplex;
}

export namespace CreateMultiplexResponse {
  export const filterSensitiveLog = (obj: CreateMultiplexResponse): any => ({
    ...obj,
  });
}

export enum PreferredChannelPipeline {
  CURRENTLY_ACTIVE = "CURRENTLY_ACTIVE",
  PIPELINE_0 = "PIPELINE_0",
  PIPELINE_1 = "PIPELINE_1",
}

/**
 * Transport stream service descriptor configuration for the Multiplex program.
 */
export interface MultiplexProgramServiceDescriptor {
  /**
   * Name of the service.
   */
  ServiceName: string | undefined;

  /**
   * Name of the provider.
   */
  ProviderName: string | undefined;
}

export namespace MultiplexProgramServiceDescriptor {
  export const filterSensitiveLog = (obj: MultiplexProgramServiceDescriptor): any => ({
    ...obj,
  });
}

/**
 * Statmux rate control settings
 */
export interface MultiplexStatmuxVideoSettings {
  /**
   * The purpose of the priority is to use a combination of the\nmultiplex rate control algorithm and the QVBR capability of the\nencoder to prioritize the video quality of some channels in a\nmultiplex over others.  Channels that have a higher priority will\nget higher video quality at the expense of the video quality of\nother channels in the multiplex with lower priority.
   */
  Priority?: number;

  /**
   * Maximum statmux bitrate.
   */
  MaximumBitrate?: number;

  /**
   * Minimum statmux bitrate.
   */
  MinimumBitrate?: number;
}

export namespace MultiplexStatmuxVideoSettings {
  export const filterSensitiveLog = (obj: MultiplexStatmuxVideoSettings): any => ({
    ...obj,
  });
}

/**
 * The video configuration for each program in a multiplex.
 */
export interface MultiplexVideoSettings {
  /**
   * Statmux rate control settings.
   * When this field is defined, ConstantBitrate must be undefined.
   */
  StatmuxSettings?: MultiplexStatmuxVideoSettings;

  /**
   * The constant bitrate configuration for the video encode.
   * When this field is defined, StatmuxSettings must be undefined.
   */
  ConstantBitrate?: number;
}

export namespace MultiplexVideoSettings {
  export const filterSensitiveLog = (obj: MultiplexVideoSettings): any => ({
    ...obj,
  });
}

/**
 * Multiplex Program settings configuration.
 */
export interface MultiplexProgramSettings {
  /**
   * Program video settings configuration.
   */
  VideoSettings?: MultiplexVideoSettings;

  /**
   * Transport stream service descriptor configuration for the Multiplex program.
   */
  ServiceDescriptor?: MultiplexProgramServiceDescriptor;

  /**
   * Indicates which pipeline is preferred by the multiplex for program ingest.
   */
  PreferredChannelPipeline?: PreferredChannelPipeline | string;

  /**
   * Unique program number.
   */
  ProgramNumber: number | undefined;
}

export namespace MultiplexProgramSettings {
  export const filterSensitiveLog = (obj: MultiplexProgramSettings): any => ({
    ...obj,
  });
}

/**
 * A request to create a program in a multiplex.
 */
export interface CreateMultiplexProgramRequest {
  /**
   * The settings for this multiplex program.
   */
  MultiplexProgramSettings: MultiplexProgramSettings | undefined;

  /**
   * Name of multiplex program.
   */
  ProgramName: string | undefined;

  /**
   * Unique request ID. This prevents retries from creating multiple
   * resources.
   */
  RequestId?: string;

  /**
   * ID of the multiplex where the program is to be created.
   */
  MultiplexId: string | undefined;
}

export namespace CreateMultiplexProgramRequest {
  export const filterSensitiveLog = (obj: CreateMultiplexProgramRequest): any => ({
    ...obj,
  });
}

/**
 * Packet identifiers map for a given Multiplex program.
 */
export interface MultiplexProgramPacketIdentifiersMap {
  /**
   * Placeholder documentation for __integer
   */
  PcrPid?: number;

  /**
   * Placeholder documentation for __integer
   */
  EtvPlatformPid?: number;

  /**
   * Placeholder documentation for __listOf__integer
   */
  DvbSubPids?: number[];

  /**
   * Placeholder documentation for __listOf__integer
   */
  Scte27Pids?: number[];

  /**
   * Placeholder documentation for __listOf__integer
   */
  KlvDataPids?: number[];

  /**
   * Placeholder documentation for __integer
   */
  VideoPid?: number;

  /**
   * Placeholder documentation for __integer
   */
  DvbTeletextPid?: number;

  /**
   * Placeholder documentation for __integer
   */
  PmtPid?: number;

  /**
   * Placeholder documentation for __integer
   */
  Scte35Pid?: number;

  /**
   * Placeholder documentation for __integer
   */
  EtvSignalPid?: number;

  /**
   * Placeholder documentation for __integer
   */
  PrivateMetadataPid?: number;

  /**
   * Placeholder documentation for __listOf__integer
   */
  AudioPids?: number[];

  /**
   * Placeholder documentation for __integer
   */
  TimedMetadataPid?: number;
}

export namespace MultiplexProgramPacketIdentifiersMap {
  export const filterSensitiveLog = (obj: MultiplexProgramPacketIdentifiersMap): any => ({
    ...obj,
  });
}

/**
 * The multiplex program object.
 */
export interface MultiplexProgram {
  /**
   * The packet identifier map for this multiplex program.
   */
  PacketIdentifiersMap?: MultiplexProgramPacketIdentifiersMap;

  /**
   * The name of the multiplex program.
   */
  ProgramName?: string;

  /**
   * The settings for this multiplex program.
   */
  MultiplexProgramSettings?: MultiplexProgramSettings;

  /**
   * The MediaLive channel associated with the program.
   */
  ChannelId?: string;

  /**
   * Contains information about the current sources for the specified program in the specified multiplex. Keep in mind that each multiplex pipeline connects to both pipelines in a given source channel (the channel identified by the program). But only one of those channel pipelines is ever active at one time.
   */
  PipelineDetails?: MultiplexProgramPipelineDetail[];
}

export namespace MultiplexProgram {
  export const filterSensitiveLog = (obj: MultiplexProgram): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for CreateMultiplexProgramResponse
 */
export interface CreateMultiplexProgramResponse {
  /**
   * The newly created multiplex program.
   */
  MultiplexProgram?: MultiplexProgram;
}

export namespace CreateMultiplexProgramResponse {
  export const filterSensitiveLog = (obj: CreateMultiplexProgramResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for CreateTagsRequest
 */
export interface CreateTagsRequest {
  /**
   * Placeholder documentation for Tags
   */
  Tags?: { [key: string]: string };

  /**
   * Placeholder documentation for __string
   */
  ResourceArn: string | undefined;
}

export namespace CreateTagsRequest {
  export const filterSensitiveLog = (obj: CreateTagsRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DeleteChannelRequest
 */
export interface DeleteChannelRequest {
  /**
   * Unique ID of the channel.
   */
  ChannelId: string | undefined;
}

export namespace DeleteChannelRequest {
  export const filterSensitiveLog = (obj: DeleteChannelRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DeleteChannelResponse
 */
export interface DeleteChannelResponse {
  /**
   * Encoder Settings
   */
  EncoderSettings?: EncoderSettings;

  /**
   * The log level being written to CloudWatch Logs.
   */
  LogLevel?: LogLevel | string;

  /**
   * The unique id of the channel.
   */
  Id?: string;

  /**
   * The Amazon Resource Name (ARN) of the role assumed when running the Channel.
   */
  RoleArn?: string;

  /**
   * Specification of network and file inputs for this channel
   */
  InputSpecification?: InputSpecification;

  /**
   * A list of destinations of the channel. For UDP outputs, there is one
   * destination per output. For other types (HLS, for example), there is
   * one destination per packager.
   */
  Destinations?: OutputDestination[];

  /**
   * The number of currently healthy pipelines.
   */
  PipelinesRunningCount?: number;

  /**
   * Runtime details for the pipelines of a running channel.
   */
  PipelineDetails?: PipelineDetail[];

  /**
   * The name of the channel. (user-mutable)
   */
  Name?: string;

  /**
   * Placeholder documentation for ChannelState
   */
  State?: ChannelState | string;

  /**
   * List of input attachments for channel.
   */
  InputAttachments?: InputAttachment[];

  /**
   * Specification of CDI inputs for this channel
   */
  CdiInputSpecification?: CdiInputSpecification;

  /**
   * The unique arn of the channel.
   */
  Arn?: string;

  /**
   * The class for this channel. STANDARD for a channel with two pipelines or SINGLE_PIPELINE for a channel with one pipeline.
   */
  ChannelClass?: ChannelClass | string;

  /**
   * A collection of key-value pairs.
   */
  Tags?: { [key: string]: string };

  /**
   * The endpoints where outgoing connections initiate from
   */
  EgressEndpoints?: ChannelEgressEndpoint[];
}

export namespace DeleteChannelResponse {
  export const filterSensitiveLog = (obj: DeleteChannelResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DeleteInputRequest
 */
export interface DeleteInputRequest {
  /**
   * Unique ID of the input
   */
  InputId: string | undefined;
}

export namespace DeleteInputRequest {
  export const filterSensitiveLog = (obj: DeleteInputRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DeleteInputResponse
 */
export interface DeleteInputResponse {}

export namespace DeleteInputResponse {
  export const filterSensitiveLog = (obj: DeleteInputResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DeleteInputSecurityGroupRequest
 */
export interface DeleteInputSecurityGroupRequest {
  /**
   * The Input Security Group to delete
   */
  InputSecurityGroupId: string | undefined;
}

export namespace DeleteInputSecurityGroupRequest {
  export const filterSensitiveLog = (obj: DeleteInputSecurityGroupRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DeleteInputSecurityGroupResponse
 */
export interface DeleteInputSecurityGroupResponse {}

export namespace DeleteInputSecurityGroupResponse {
  export const filterSensitiveLog = (obj: DeleteInputSecurityGroupResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DeleteMultiplexRequest
 */
export interface DeleteMultiplexRequest {
  /**
   * The ID of the multiplex.
   */
  MultiplexId: string | undefined;
}

export namespace DeleteMultiplexRequest {
  export const filterSensitiveLog = (obj: DeleteMultiplexRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DeleteMultiplexResponse
 */
export interface DeleteMultiplexResponse {
  /**
   * A collection of key-value pairs.
   */
  Tags?: { [key: string]: string };

  /**
   * Configuration for a multiplex event.
   */
  MultiplexSettings?: MultiplexSettings;

  /**
   * A list of availability zones for the multiplex.
   */
  AvailabilityZones?: string[];

  /**
   * A list of the multiplex output destinations.
   */
  Destinations?: MultiplexOutputDestination[];

  /**
   * The name of the multiplex.
   */
  Name?: string;

  /**
   * The current state of the multiplex.
   */
  State?: MultiplexState | string;

  /**
   * The unique id of the multiplex.
   */
  Id?: string;

  /**
   * The number of currently healthy pipelines.
   */
  PipelinesRunningCount?: number;

  /**
   * The unique arn of the multiplex.
   */
  Arn?: string;

  /**
   * The number of programs in the multiplex.
   */
  ProgramCount?: number;
}

export namespace DeleteMultiplexResponse {
  export const filterSensitiveLog = (obj: DeleteMultiplexResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DeleteMultiplexProgramRequest
 */
export interface DeleteMultiplexProgramRequest {
  /**
   * The ID of the multiplex that the program belongs to.
   */
  MultiplexId: string | undefined;

  /**
   * The multiplex program name.
   */
  ProgramName: string | undefined;
}

export namespace DeleteMultiplexProgramRequest {
  export const filterSensitiveLog = (obj: DeleteMultiplexProgramRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DeleteMultiplexProgramResponse
 */
export interface DeleteMultiplexProgramResponse {
  /**
   * The packet identifier map for this multiplex program.
   */
  PacketIdentifiersMap?: MultiplexProgramPacketIdentifiersMap;

  /**
   * Contains information about the current sources for the specified program in the specified multiplex. Keep in mind that each multiplex pipeline connects to both pipelines in a given source channel (the channel identified by the program). But only one of those channel pipelines is ever active at one time.
   */
  PipelineDetails?: MultiplexProgramPipelineDetail[];

  /**
   * The name of the multiplex program.
   */
  ProgramName?: string;

  /**
   * The settings for this multiplex program.
   */
  MultiplexProgramSettings?: MultiplexProgramSettings;

  /**
   * The MediaLive channel associated with the program.
   */
  ChannelId?: string;
}

export namespace DeleteMultiplexProgramResponse {
  export const filterSensitiveLog = (obj: DeleteMultiplexProgramResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DeleteReservationRequest
 */
export interface DeleteReservationRequest {
  /**
   * Unique reservation ID, e.g. '1234567'
   */
  ReservationId: string | undefined;
}

export namespace DeleteReservationRequest {
  export const filterSensitiveLog = (obj: DeleteReservationRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DeleteReservationResponse
 */
export interface DeleteReservationResponse {
  /**
   * Recurring usage charge for each reserved resource, e.g. '157.0'
   */
  UsagePrice?: number;

  /**
   * Unique offering ID, e.g. '87654321'
   */
  OfferingId?: string;

  /**
   * Reservation UTC end date and time in ISO-8601 format, e.g. '2019-03-01T00:00:00'
   */
  End?: string;

  /**
   * Unique reservation ARN, e.g. 'arn:aws:medialive:us-west-2:123456789012:reservation:1234567'
   */
  Arn?: string;

  /**
   * Resource configuration details
   */
  ResourceSpecification?: ReservationResourceSpecification;

  /**
   * User specified reservation name
   */
  Name?: string;

  /**
   * Unique reservation ID, e.g. '1234567'
   */
  ReservationId?: string;

  /**
   * Lease duration, e.g. '12'
   */
  Duration?: number;

  /**
   * Number of reserved resources
   */
  Count?: number;

  /**
   * Current state of reservation, e.g. 'ACTIVE'
   */
  State?: ReservationState | string;

  /**
   * Offering description, e.g. 'HD AVC output at 10-20 Mbps, 30 fps, and standard VQ in US West (Oregon)'
   */
  OfferingDescription?: string;

  /**
   * Offering type, e.g. 'NO_UPFRONT'
   */
  OfferingType?: OfferingType | string;

  /**
   * Currency code for usagePrice and fixedPrice in ISO-4217 format, e.g. 'USD'
   */
  CurrencyCode?: string;

  /**
   * One-time charge for each reserved resource, e.g. '0.0' for a NO_UPFRONT offering
   */
  FixedPrice?: number;

  /**
   * A collection of key-value pairs
   */
  Tags?: { [key: string]: string };

  /**
   * Units for duration, e.g. 'MONTHS'
   */
  DurationUnits?: OfferingDurationUnits | string;

  /**
   * AWS region, e.g. 'us-west-2'
   */
  Region?: string;

  /**
   * Reservation UTC start date and time in ISO-8601 format, e.g. '2018-03-01T00:00:00'
   */
  Start?: string;
}

export namespace DeleteReservationResponse {
  export const filterSensitiveLog = (obj: DeleteReservationResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DeleteScheduleRequest
 */
export interface DeleteScheduleRequest {
  /**
   * Id of the channel whose schedule is being deleted.
   */
  ChannelId: string | undefined;
}

export namespace DeleteScheduleRequest {
  export const filterSensitiveLog = (obj: DeleteScheduleRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DeleteScheduleResponse
 */
export interface DeleteScheduleResponse {}

export namespace DeleteScheduleResponse {
  export const filterSensitiveLog = (obj: DeleteScheduleResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DeleteTagsRequest
 */
export interface DeleteTagsRequest {
  /**
   * Placeholder documentation for __string
   */
  ResourceArn: string | undefined;

  /**
   * An array of tag keys to delete
   */
  TagKeys: string[] | undefined;
}

export namespace DeleteTagsRequest {
  export const filterSensitiveLog = (obj: DeleteTagsRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DescribeChannelRequest
 */
export interface DescribeChannelRequest {
  /**
   * channel ID
   */
  ChannelId: string | undefined;
}

export namespace DescribeChannelRequest {
  export const filterSensitiveLog = (obj: DescribeChannelRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DescribeChannelResponse
 */
export interface DescribeChannelResponse {
  /**
   * The unique id of the channel.
   */
  Id?: string;

  /**
   * A list of destinations of the channel. For UDP outputs, there is one
   * destination per output. For other types (HLS, for example), there is
   * one destination per packager.
   */
  Destinations?: OutputDestination[];

  /**
   * Encoder Settings
   */
  EncoderSettings?: EncoderSettings;

  /**
   * Specification of network and file inputs for this channel
   */
  InputSpecification?: InputSpecification;

  /**
   * List of input attachments for channel.
   */
  InputAttachments?: InputAttachment[];

  /**
   * The Amazon Resource Name (ARN) of the role assumed when running the Channel.
   */
  RoleArn?: string;

  /**
   * The name of the channel. (user-mutable)
   */
  Name?: string;

  /**
   * The log level being written to CloudWatch Logs.
   */
  LogLevel?: LogLevel | string;

  /**
   * Placeholder documentation for ChannelState
   */
  State?: ChannelState | string;

  /**
   * Specification of CDI inputs for this channel
   */
  CdiInputSpecification?: CdiInputSpecification;

  /**
   * A collection of key-value pairs.
   */
  Tags?: { [key: string]: string };

  /**
   * The endpoints where outgoing connections initiate from
   */
  EgressEndpoints?: ChannelEgressEndpoint[];

  /**
   * The number of currently healthy pipelines.
   */
  PipelinesRunningCount?: number;

  /**
   * Runtime details for the pipelines of a running channel.
   */
  PipelineDetails?: PipelineDetail[];

  /**
   * The class for this channel. STANDARD for a channel with two pipelines or SINGLE_PIPELINE for a channel with one pipeline.
   */
  ChannelClass?: ChannelClass | string;

  /**
   * The unique arn of the channel.
   */
  Arn?: string;
}

export namespace DescribeChannelResponse {
  export const filterSensitiveLog = (obj: DescribeChannelResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DescribeInputRequest
 */
export interface DescribeInputRequest {
  /**
   * Unique ID of the input
   */
  InputId: string | undefined;
}

export namespace DescribeInputRequest {
  export const filterSensitiveLog = (obj: DescribeInputRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DescribeInputResponse
 */
export interface DescribeInputResponse {
  /**
   * A collection of key-value pairs.
   */
  Tags?: { [key: string]: string };

  /**
   * Placeholder documentation for InputType
   */
  Type?: InputType | string;

  /**
   * A list of IDs for all the Input Security Groups attached to the input.
   */
  SecurityGroups?: string[];

  /**
   * A list of the sources of the input (PULL-type).
   */
  Sources?: InputSource[];

  /**
   * The Amazon Resource Name (ARN) of the role this input assumes during and after creation.
   */
  RoleArn?: string;

  /**
   * The Unique ARN of the input (generated, immutable).
   */
  Arn?: string;

  /**
   * Settings for the input devices.
   */
  InputDevices?: InputDeviceSettings[];

  /**
   * The user-assigned name (This is a mutable value).
   */
  Name?: string;

  /**
   * Placeholder documentation for InputState
   */
  State?: InputState | string;

  /**
   * A list of channel IDs that that input is attached to (currently an input can only be attached to one channel).
   */
  AttachedChannels?: string[];

  /**
   * A list of the destinations of the input (PUSH-type).
   */
  Destinations?: InputDestination[];

  /**
   * The generated ID of the input (unique for user account, immutable).
   */
  Id?: string;

  /**
   * A list of MediaConnect Flows for this input.
   */
  MediaConnectFlows?: MediaConnectFlow[];

  /**
   * Certain pull input sources can be dynamic, meaning that they can have their URL's dynamically changes
   * during input switch actions. Presently, this functionality only works with MP4_FILE inputs.
   */
  InputSourceType?: InputSourceType | string;

  /**
   * STANDARD - MediaLive expects two sources to be connected to this input. If the channel is also STANDARD, both sources will be ingested. If the channel is SINGLE_PIPELINE, only the first source will be ingested; the second source will always be ignored, even if the first source fails.
   * SINGLE_PIPELINE - You can connect only one source to this input. If the ChannelClass is also  SINGLE_PIPELINE, this value is valid. If the ChannelClass is STANDARD, this value is not valid because the channel requires two sources in the input.
   */
  InputClass?: InputClass | string;
}

export namespace DescribeInputResponse {
  export const filterSensitiveLog = (obj: DescribeInputResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DescribeInputDeviceRequest
 */
export interface DescribeInputDeviceRequest {
  /**
   * The unique ID of this input device. For example, hd-123456789abcdef.
   */
  InputDeviceId: string | undefined;
}

export namespace DescribeInputDeviceRequest {
  export const filterSensitiveLog = (obj: DescribeInputDeviceRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DescribeInputDeviceResponse
 */
export interface DescribeInputDeviceResponse {
  /**
   * The network MAC address of the input device.
   */
  MacAddress?: string;

  /**
   * Settings that describe an input device that is type HD.
   */
  HdDeviceSettings?: InputDeviceHdSettings;

  /**
   * A name that you specify for the input device.
   */
  Name?: string;

  /**
   * The unique ARN of the input device.
   */
  Arn?: string;

  /**
   * The unique ID of the input device.
   */
  Id?: string;

  /**
   * The state of the connection between the input device and AWS.
   */
  ConnectionState?: InputDeviceConnectionState | string;

  /**
   * The type of the input device.
   */
  Type?: InputDeviceType | string;

  /**
   * The unique serial number of the input device.
   */
  SerialNumber?: string;

  /**
   * The network settings for the input device.
   */
  NetworkSettings?: InputDeviceNetworkSettings;

  /**
   * The status of the action to synchronize the device configuration. If you change the configuration of the input device (for example, the maximum bitrate), MediaLive sends the new data to the device. The device might not update itself immediately. SYNCED means the device has updated its configuration. SYNCING means that it has not updated its configuration.
   */
  DeviceSettingsSyncState?: DeviceSettingsSyncState | string;
}

export namespace DescribeInputDeviceResponse {
  export const filterSensitiveLog = (obj: DescribeInputDeviceResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DescribeInputDeviceThumbnailRequest
 */
export interface DescribeInputDeviceThumbnailRequest {
  /**
   * The HTTP Accept header. Indicates the requested type for the thumbnail.
   */
  Accept: AcceptHeader | string | undefined;

  /**
   * The unique ID of this input device. For example, hd-123456789abcdef.
   */
  InputDeviceId: string | undefined;
}

export namespace DescribeInputDeviceThumbnailRequest {
  export const filterSensitiveLog = (obj: DescribeInputDeviceThumbnailRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DescribeInputDeviceThumbnailResponse
 */
export interface DescribeInputDeviceThumbnailResponse {
  /**
   * The unique, cacheable version of this thumbnail.
   */
  ETag?: string;

  /**
   * Specifies the media type of the thumbnail.
   */
  ContentType?: ContentType | string;

  /**
   * The date and time the thumbnail was last updated at the device.
   */
  LastModified?: Date;

  /**
   * The binary data for the thumbnail that the Link device has most recently sent to MediaLive.
   */
  Body?: Readable | ReadableStream | Blob;

  /**
   * The length of the content.
   */
  ContentLength?: number;
}

export namespace DescribeInputDeviceThumbnailResponse {
  export const filterSensitiveLog = (obj: DescribeInputDeviceThumbnailResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DescribeInputSecurityGroupRequest
 */
export interface DescribeInputSecurityGroupRequest {
  /**
   * The id of the Input Security Group to describe
   */
  InputSecurityGroupId: string | undefined;
}

export namespace DescribeInputSecurityGroupRequest {
  export const filterSensitiveLog = (obj: DescribeInputSecurityGroupRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DescribeInputSecurityGroupResponse
 */
export interface DescribeInputSecurityGroupResponse {
  /**
   * The current state of the Input Security Group.
   */
  State?: InputSecurityGroupState | string;

  /**
   * The Id of the Input Security Group
   */
  Id?: string;

  /**
   * Whitelist rules and their sync status
   */
  WhitelistRules?: InputWhitelistRule[];

  /**
   * A collection of key-value pairs.
   */
  Tags?: { [key: string]: string };

  /**
   * The list of inputs currently using this Input Security Group.
   */
  Inputs?: string[];

  /**
   * Unique ARN of Input Security Group
   */
  Arn?: string;
}

export namespace DescribeInputSecurityGroupResponse {
  export const filterSensitiveLog = (obj: DescribeInputSecurityGroupResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DescribeMultiplexRequest
 */
export interface DescribeMultiplexRequest {
  /**
   * The ID of the multiplex.
   */
  MultiplexId: string | undefined;
}

export namespace DescribeMultiplexRequest {
  export const filterSensitiveLog = (obj: DescribeMultiplexRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DescribeMultiplexResponse
 */
export interface DescribeMultiplexResponse {
  /**
   * Configuration for a multiplex event.
   */
  MultiplexSettings?: MultiplexSettings;

  /**
   * The unique id of the multiplex.
   */
  Id?: string;

  /**
   * The current state of the multiplex.
   */
  State?: MultiplexState | string;

  /**
   * A list of availability zones for the multiplex.
   */
  AvailabilityZones?: string[];

  /**
   * The name of the multiplex.
   */
  Name?: string;

  /**
   * The number of currently healthy pipelines.
   */
  PipelinesRunningCount?: number;

  /**
   * A list of the multiplex output destinations.
   */
  Destinations?: MultiplexOutputDestination[];

  /**
   * A collection of key-value pairs.
   */
  Tags?: { [key: string]: string };

  /**
   * The number of programs in the multiplex.
   */
  ProgramCount?: number;

  /**
   * The unique arn of the multiplex.
   */
  Arn?: string;
}

export namespace DescribeMultiplexResponse {
  export const filterSensitiveLog = (obj: DescribeMultiplexResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DescribeMultiplexProgramRequest
 */
export interface DescribeMultiplexProgramRequest {
  /**
   * The ID of the multiplex that the program belongs to.
   */
  MultiplexId: string | undefined;

  /**
   * The name of the program.
   */
  ProgramName: string | undefined;
}

export namespace DescribeMultiplexProgramRequest {
  export const filterSensitiveLog = (obj: DescribeMultiplexProgramRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DescribeMultiplexProgramResponse
 */
export interface DescribeMultiplexProgramResponse {
  /**
   * The MediaLive channel associated with the program.
   */
  ChannelId?: string;

  /**
   * The name of the multiplex program.
   */
  ProgramName?: string;

  /**
   * The settings for this multiplex program.
   */
  MultiplexProgramSettings?: MultiplexProgramSettings;

  /**
   * Contains information about the current sources for the specified program in the specified multiplex. Keep in mind that each multiplex pipeline connects to both pipelines in a given source channel (the channel identified by the program). But only one of those channel pipelines is ever active at one time.
   */
  PipelineDetails?: MultiplexProgramPipelineDetail[];

  /**
   * The packet identifier map for this multiplex program.
   */
  PacketIdentifiersMap?: MultiplexProgramPacketIdentifiersMap;
}

export namespace DescribeMultiplexProgramResponse {
  export const filterSensitiveLog = (obj: DescribeMultiplexProgramResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DescribeOfferingRequest
 */
export interface DescribeOfferingRequest {
  /**
   * Unique offering ID, e.g. '87654321'
   */
  OfferingId: string | undefined;
}

export namespace DescribeOfferingRequest {
  export const filterSensitiveLog = (obj: DescribeOfferingRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DescribeOfferingResponse
 */
export interface DescribeOfferingResponse {
  /**
   * Unique offering ID, e.g. '87654321'
   */
  OfferingId?: string;

  /**
   * Offering description, e.g. 'HD AVC output at 10-20 Mbps, 30 fps, and standard VQ in US West (Oregon)'
   */
  OfferingDescription?: string;

  /**
   * Currency code for usagePrice and fixedPrice in ISO-4217 format, e.g. 'USD'
   */
  CurrencyCode?: string;

  /**
   * One-time charge for each reserved resource, e.g. '0.0' for a NO_UPFRONT offering
   */
  FixedPrice?: number;

  /**
   * Units for duration, e.g. 'MONTHS'
   */
  DurationUnits?: OfferingDurationUnits | string;

  /**
   * Unique offering ARN, e.g. 'arn:aws:medialive:us-west-2:123456789012:offering:87654321'
   */
  Arn?: string;

  /**
   * AWS region, e.g. 'us-west-2'
   */
  Region?: string;

  /**
   * Resource configuration details
   */
  ResourceSpecification?: ReservationResourceSpecification;

  /**
   * Offering type, e.g. 'NO_UPFRONT'
   */
  OfferingType?: OfferingType | string;

  /**
   * Lease duration, e.g. '12'
   */
  Duration?: number;

  /**
   * Recurring usage charge for each reserved resource, e.g. '157.0'
   */
  UsagePrice?: number;
}

export namespace DescribeOfferingResponse {
  export const filterSensitiveLog = (obj: DescribeOfferingResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DescribeReservationRequest
 */
export interface DescribeReservationRequest {
  /**
   * Unique reservation ID, e.g. '1234567'
   */
  ReservationId: string | undefined;
}

export namespace DescribeReservationRequest {
  export const filterSensitiveLog = (obj: DescribeReservationRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DescribeReservationResponse
 */
export interface DescribeReservationResponse {
  /**
   * AWS region, e.g. 'us-west-2'
   */
  Region?: string;

  /**
   * User specified reservation name
   */
  Name?: string;

  /**
   * Current state of reservation, e.g. 'ACTIVE'
   */
  State?: ReservationState | string;

  /**
   * Number of reserved resources
   */
  Count?: number;

  /**
   * Currency code for usagePrice and fixedPrice in ISO-4217 format, e.g. 'USD'
   */
  CurrencyCode?: string;

  /**
   * Offering type, e.g. 'NO_UPFRONT'
   */
  OfferingType?: OfferingType | string;

  /**
   * Recurring usage charge for each reserved resource, e.g. '157.0'
   */
  UsagePrice?: number;

  /**
   * Units for duration, e.g. 'MONTHS'
   */
  DurationUnits?: OfferingDurationUnits | string;

  /**
   * Resource configuration details
   */
  ResourceSpecification?: ReservationResourceSpecification;

  /**
   * Lease duration, e.g. '12'
   */
  Duration?: number;

  /**
   * Unique reservation ID, e.g. '1234567'
   */
  ReservationId?: string;

  /**
   * Reservation UTC start date and time in ISO-8601 format, e.g. '2018-03-01T00:00:00'
   */
  Start?: string;

  /**
   * Offering description, e.g. 'HD AVC output at 10-20 Mbps, 30 fps, and standard VQ in US West (Oregon)'
   */
  OfferingDescription?: string;

  /**
   * A collection of key-value pairs
   */
  Tags?: { [key: string]: string };

  /**
   * One-time charge for each reserved resource, e.g. '0.0' for a NO_UPFRONT offering
   */
  FixedPrice?: number;

  /**
   * Reservation UTC end date and time in ISO-8601 format, e.g. '2019-03-01T00:00:00'
   */
  End?: string;

  /**
   * Unique offering ID, e.g. '87654321'
   */
  OfferingId?: string;

  /**
   * Unique reservation ARN, e.g. 'arn:aws:medialive:us-west-2:123456789012:reservation:1234567'
   */
  Arn?: string;
}

export namespace DescribeReservationResponse {
  export const filterSensitiveLog = (obj: DescribeReservationResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DescribeScheduleRequest
 */
export interface DescribeScheduleRequest {
  /**
   * Placeholder documentation for MaxResults
   */
  MaxResults?: number;

  /**
   * Placeholder documentation for __string
   */
  NextToken?: string;

  /**
   * Id of the channel whose schedule is being updated.
   */
  ChannelId: string | undefined;
}

export namespace DescribeScheduleRequest {
  export const filterSensitiveLog = (obj: DescribeScheduleRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DescribeScheduleResponse
 */
export interface DescribeScheduleResponse {
  /**
   * The next token; for use in pagination.
   */
  NextToken?: string;

  /**
   * The list of actions in the schedule.
   */
  ScheduleActions?: ScheduleAction[];
}

export namespace DescribeScheduleResponse {
  export const filterSensitiveLog = (obj: DescribeScheduleResponse): any => ({
    ...obj,
  });
}

/**
 * Configurable settings for the input device.
 */
export interface InputDeviceConfigurableSettings {
  /**
   * The maximum bitrate in bits per second. Set a value here to throttle the bitrate of the source video.
   */
  MaxBitrate?: number;

  /**
   * The input source that you want to use. If the device has a source connected to only one of its input ports, or if you don't care which source the device sends, specify Auto. If the device has sources connected to both its input ports, and you want to use a specific source, specify the source.
   */
  ConfiguredInput?: InputDeviceConfiguredInput | string;
}

export namespace InputDeviceConfigurableSettings {
  export const filterSensitiveLog = (obj: InputDeviceConfigurableSettings): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for ListChannelsRequest
 */
export interface ListChannelsRequest {
  /**
   * Placeholder documentation for MaxResults
   */
  MaxResults?: number;

  /**
   * Placeholder documentation for __string
   */
  NextToken?: string;
}

export namespace ListChannelsRequest {
  export const filterSensitiveLog = (obj: ListChannelsRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for ListChannelsResponse
 */
export interface ListChannelsResponse {
  /**
   * Placeholder documentation for __string
   */
  NextToken?: string;

  /**
   * Placeholder documentation for __listOfChannelSummary
   */
  Channels?: ChannelSummary[];
}

export namespace ListChannelsResponse {
  export const filterSensitiveLog = (obj: ListChannelsResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for ListInputDevicesRequest
 */
export interface ListInputDevicesRequest {
  /**
   * Placeholder documentation for MaxResults
   */
  MaxResults?: number;

  /**
   * Placeholder documentation for __string
   */
  NextToken?: string;
}

export namespace ListInputDevicesRequest {
  export const filterSensitiveLog = (obj: ListInputDevicesRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for ListInputDevicesResponse
 */
export interface ListInputDevicesResponse {
  /**
   * The list of input devices.
   */
  InputDevices?: InputDeviceSummary[];

  /**
   * A token to get additional list results.
   */
  NextToken?: string;
}

export namespace ListInputDevicesResponse {
  export const filterSensitiveLog = (obj: ListInputDevicesResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for ListInputDeviceTransfersRequest
 */
export interface ListInputDeviceTransfersRequest {
  /**
   * Placeholder documentation for __string
   */
  NextToken?: string;

  /**
   * Placeholder documentation for __string
   */
  TransferType: string | undefined;

  /**
   * Placeholder documentation for MaxResults
   */
  MaxResults?: number;
}

export namespace ListInputDeviceTransfersRequest {
  export const filterSensitiveLog = (obj: ListInputDeviceTransfersRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for ListInputDeviceTransfersResponse
 */
export interface ListInputDeviceTransfersResponse {
  /**
   * The list of devices that you are transferring or are being transferred to you.
   */
  InputDeviceTransfers?: TransferringInputDeviceSummary[];

  /**
   * A token to get additional list results.
   */
  NextToken?: string;
}

export namespace ListInputDeviceTransfersResponse {
  export const filterSensitiveLog = (obj: ListInputDeviceTransfersResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for ListInputsRequest
 */
export interface ListInputsRequest {
  /**
   * Placeholder documentation for __string
   */
  NextToken?: string;

  /**
   * Placeholder documentation for MaxResults
   */
  MaxResults?: number;
}

export namespace ListInputsRequest {
  export const filterSensitiveLog = (obj: ListInputsRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for ListInputsResponse
 */
export interface ListInputsResponse {
  /**
   * Placeholder documentation for __listOfInput
   */
  Inputs?: Input[];

  /**
   * Placeholder documentation for __string
   */
  NextToken?: string;
}

export namespace ListInputsResponse {
  export const filterSensitiveLog = (obj: ListInputsResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for ListInputSecurityGroupsRequest
 */
export interface ListInputSecurityGroupsRequest {
  /**
   * Placeholder documentation for __string
   */
  NextToken?: string;

  /**
   * Placeholder documentation for MaxResults
   */
  MaxResults?: number;
}

export namespace ListInputSecurityGroupsRequest {
  export const filterSensitiveLog = (obj: ListInputSecurityGroupsRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for ListInputSecurityGroupsResponse
 */
export interface ListInputSecurityGroupsResponse {
  /**
   * Placeholder documentation for __string
   */
  NextToken?: string;

  /**
   * List of input security groups
   */
  InputSecurityGroups?: InputSecurityGroup[];
}

export namespace ListInputSecurityGroupsResponse {
  export const filterSensitiveLog = (obj: ListInputSecurityGroupsResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for ListMultiplexesRequest
 */
export interface ListMultiplexesRequest {
  /**
   * The maximum number of items to return.
   */
  MaxResults?: number;

  /**
   * The token to retrieve the next page of results.
   */
  NextToken?: string;
}

export namespace ListMultiplexesRequest {
  export const filterSensitiveLog = (obj: ListMultiplexesRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for ListMultiplexesResponse
 */
export interface ListMultiplexesResponse {
  /**
   * Token for the next ListMultiplexes request.
   */
  NextToken?: string;

  /**
   * List of multiplexes.
   */
  Multiplexes?: MultiplexSummary[];
}

export namespace ListMultiplexesResponse {
  export const filterSensitiveLog = (obj: ListMultiplexesResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for ListMultiplexProgramsRequest
 */
export interface ListMultiplexProgramsRequest {
  /**
   * The token to retrieve the next page of results.
   */
  NextToken?: string;

  /**
   * The ID of the multiplex that the programs belong to.
   */
  MultiplexId: string | undefined;

  /**
   * The maximum number of items to return.
   */
  MaxResults?: number;
}

export namespace ListMultiplexProgramsRequest {
  export const filterSensitiveLog = (obj: ListMultiplexProgramsRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for ListMultiplexProgramsResponse
 */
export interface ListMultiplexProgramsResponse {
  /**
   * List of multiplex programs.
   */
  MultiplexPrograms?: MultiplexProgramSummary[];

  /**
   * Token for the next ListMultiplexProgram request.
   */
  NextToken?: string;
}

export namespace ListMultiplexProgramsResponse {
  export const filterSensitiveLog = (obj: ListMultiplexProgramsResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for ListOfferingsRequest
 */
export interface ListOfferingsRequest {
  /**
   * Filter by channel class, 'STANDARD' or 'SINGLE_PIPELINE'
   */
  ChannelClass?: string;

  /**
   * Filter by framerate, 'MAX_30_FPS' or 'MAX_60_FPS'
   */
  MaximumFramerate?: string;

  /**
   * Filter by offering duration, e.g. '12'
   */
  Duration?: string;

  /**
   * Filter by resolution, 'SD', 'HD', 'FHD', or 'UHD'
   */
  Resolution?: string;

  /**
   * Filter by special feature, 'ADVANCED_AUDIO' or 'AUDIO_NORMALIZATION'
   */
  SpecialFeature?: string;

  /**
   * Filter by bitrate, 'MAX_10_MBPS', 'MAX_20_MBPS', or 'MAX_50_MBPS'
   */
  MaximumBitrate?: string;

  /**
   * Filter to offerings that match the configuration of an existing channel, e.g. '2345678' (a channel ID)
   */
  ChannelConfiguration?: string;

  /**
   * Placeholder documentation for __string
   */
  NextToken?: string;

  /**
   * Placeholder documentation for MaxResults
   */
  MaxResults?: number;

  /**
   * Filter by codec, 'AVC', 'HEVC', 'MPEG2', 'AUDIO', or 'LINK'
   */
  Codec?: string;

  /**
   * Filter by video quality, 'STANDARD', 'ENHANCED', or 'PREMIUM'
   */
  VideoQuality?: string;

  /**
   * Filter by resource type, 'INPUT', 'OUTPUT', 'MULTIPLEX', or 'CHANNEL'
   */
  ResourceType?: string;
}

export namespace ListOfferingsRequest {
  export const filterSensitiveLog = (obj: ListOfferingsRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for ListOfferingsResponse
 */
export interface ListOfferingsResponse {
  /**
   * List of offerings
   */
  Offerings?: Offering[];

  /**
   * Token to retrieve the next page of results
   */
  NextToken?: string;
}

export namespace ListOfferingsResponse {
  export const filterSensitiveLog = (obj: ListOfferingsResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for ListReservationsRequest
 */
export interface ListReservationsRequest {
  /**
   * Filter by resource type, 'INPUT', 'OUTPUT', 'MULTIPLEX', or 'CHANNEL'
   */
  ResourceType?: string;

  /**
   * Filter by codec, 'AVC', 'HEVC', 'MPEG2', 'AUDIO', or 'LINK'
   */
  Codec?: string;

  /**
   * Filter by bitrate, 'MAX_10_MBPS', 'MAX_20_MBPS', or 'MAX_50_MBPS'
   */
  MaximumBitrate?: string;

  /**
   * Filter by special feature, 'ADVANCED_AUDIO' or 'AUDIO_NORMALIZATION'
   */
  SpecialFeature?: string;

  /**
   * Placeholder documentation for __string
   */
  NextToken?: string;

  /**
   * Placeholder documentation for MaxResults
   */
  MaxResults?: number;

  /**
   * Filter by video quality, 'STANDARD', 'ENHANCED', or 'PREMIUM'
   */
  VideoQuality?: string;

  /**
   * Filter by channel class, 'STANDARD' or 'SINGLE_PIPELINE'
   */
  ChannelClass?: string;

  /**
   * Filter by resolution, 'SD', 'HD', 'FHD', or 'UHD'
   */
  Resolution?: string;

  /**
   * Filter by framerate, 'MAX_30_FPS' or 'MAX_60_FPS'
   */
  MaximumFramerate?: string;
}

export namespace ListReservationsRequest {
  export const filterSensitiveLog = (obj: ListReservationsRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for ListReservationsResponse
 */
export interface ListReservationsResponse {
  /**
   * List of reservations
   */
  Reservations?: Reservation[];

  /**
   * Token to retrieve the next page of results
   */
  NextToken?: string;
}

export namespace ListReservationsResponse {
  export const filterSensitiveLog = (obj: ListReservationsResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for ListTagsForResourceRequest
 */
export interface ListTagsForResourceRequest {
  /**
   * Placeholder documentation for __string
   */
  ResourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for ListTagsForResourceResponse
 */
export interface ListTagsForResourceResponse {
  /**
   * Placeholder documentation for Tags
   */
  Tags?: { [key: string]: string };
}

export namespace ListTagsForResourceResponse {
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for PurchaseOfferingRequest
 */
export interface PurchaseOfferingRequest {
  /**
   * Number of resources
   */
  Count: number | undefined;

  /**
   * A collection of key-value pairs
   */
  Tags?: { [key: string]: string };

  /**
   * Offering to purchase, e.g. '87654321'
   */
  OfferingId: string | undefined;

  /**
   * Name for the new reservation
   */
  Name?: string;

  /**
   * Unique request ID to be specified. This is needed to prevent retries from creating multiple resources.
   */
  RequestId?: string;

  /**
   * Requested reservation start time (UTC) in ISO-8601 format. The specified time must be between the first day of the current month and one year from now. If no value is given, the default is now.
   */
  Start?: string;
}

export namespace PurchaseOfferingRequest {
  export const filterSensitiveLog = (obj: PurchaseOfferingRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for PurchaseOfferingResponse
 */
export interface PurchaseOfferingResponse {
  /**
   * Reserved resources available to use
   */
  Reservation?: Reservation;
}

export namespace PurchaseOfferingResponse {
  export const filterSensitiveLog = (obj: PurchaseOfferingResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for RejectInputDeviceTransferRequest
 */
export interface RejectInputDeviceTransferRequest {
  /**
   * The unique ID of the input device to reject. For example, hd-123456789abcdef.
   */
  InputDeviceId: string | undefined;
}

export namespace RejectInputDeviceTransferRequest {
  export const filterSensitiveLog = (obj: RejectInputDeviceTransferRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for RejectInputDeviceTransferResponse
 */
export interface RejectInputDeviceTransferResponse {}

export namespace RejectInputDeviceTransferResponse {
  export const filterSensitiveLog = (obj: RejectInputDeviceTransferResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for StartChannelRequest
 */
export interface StartChannelRequest {
  /**
   * A request to start a channel
   */
  ChannelId: string | undefined;
}

export namespace StartChannelRequest {
  export const filterSensitiveLog = (obj: StartChannelRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for StartChannelResponse
 */
export interface StartChannelResponse {
  /**
   * Encoder Settings
   */
  EncoderSettings?: EncoderSettings;

  /**
   * The unique arn of the channel.
   */
  Arn?: string;

  /**
   * The unique id of the channel.
   */
  Id?: string;

  /**
   * The class for this channel. STANDARD for a channel with two pipelines or SINGLE_PIPELINE for a channel with one pipeline.
   */
  ChannelClass?: ChannelClass | string;

  /**
   * A collection of key-value pairs.
   */
  Tags?: { [key: string]: string };

  /**
   * The endpoints where outgoing connections initiate from
   */
  EgressEndpoints?: ChannelEgressEndpoint[];

  /**
   * The number of currently healthy pipelines.
   */
  PipelinesRunningCount?: number;

  /**
   * Runtime details for the pipelines of a running channel.
   */
  PipelineDetails?: PipelineDetail[];

  /**
   * Specification of CDI inputs for this channel
   */
  CdiInputSpecification?: CdiInputSpecification;

  /**
   * Placeholder documentation for ChannelState
   */
  State?: ChannelState | string;

  /**
   * The Amazon Resource Name (ARN) of the role assumed when running the Channel.
   */
  RoleArn?: string;

  /**
   * List of input attachments for channel.
   */
  InputAttachments?: InputAttachment[];

  /**
   * The log level being written to CloudWatch Logs.
   */
  LogLevel?: LogLevel | string;

  /**
   * Specification of network and file inputs for this channel
   */
  InputSpecification?: InputSpecification;

  /**
   * A list of destinations of the channel. For UDP outputs, there is one
   * destination per output. For other types (HLS, for example), there is
   * one destination per packager.
   */
  Destinations?: OutputDestination[];

  /**
   * The name of the channel. (user-mutable)
   */
  Name?: string;
}

export namespace StartChannelResponse {
  export const filterSensitiveLog = (obj: StartChannelResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for StartMultiplexRequest
 */
export interface StartMultiplexRequest {
  /**
   * The ID of the multiplex.
   */
  MultiplexId: string | undefined;
}

export namespace StartMultiplexRequest {
  export const filterSensitiveLog = (obj: StartMultiplexRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for StartMultiplexResponse
 */
export interface StartMultiplexResponse {
  /**
   * The current state of the multiplex.
   */
  State?: MultiplexState | string;

  /**
   * The unique id of the multiplex.
   */
  Id?: string;

  /**
   * The number of programs in the multiplex.
   */
  ProgramCount?: number;

  /**
   * The unique arn of the multiplex.
   */
  Arn?: string;

  /**
   * The number of currently healthy pipelines.
   */
  PipelinesRunningCount?: number;

  /**
   * Configuration for a multiplex event.
   */
  MultiplexSettings?: MultiplexSettings;

  /**
   * A list of availability zones for the multiplex.
   */
  AvailabilityZones?: string[];

  /**
   * A collection of key-value pairs.
   */
  Tags?: { [key: string]: string };

  /**
   * The name of the multiplex.
   */
  Name?: string;

  /**
   * A list of the multiplex output destinations.
   */
  Destinations?: MultiplexOutputDestination[];
}

export namespace StartMultiplexResponse {
  export const filterSensitiveLog = (obj: StartMultiplexResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for StopChannelRequest
 */
export interface StopChannelRequest {
  /**
   * A request to stop a running channel
   */
  ChannelId: string | undefined;
}

export namespace StopChannelRequest {
  export const filterSensitiveLog = (obj: StopChannelRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for StopChannelResponse
 */
export interface StopChannelResponse {
  /**
   * The class for this channel. STANDARD for a channel with two pipelines or SINGLE_PIPELINE for a channel with one pipeline.
   */
  ChannelClass?: ChannelClass | string;

  /**
   * The endpoints where outgoing connections initiate from
   */
  EgressEndpoints?: ChannelEgressEndpoint[];

  /**
   * A collection of key-value pairs.
   */
  Tags?: { [key: string]: string };

  /**
   * The log level being written to CloudWatch Logs.
   */
  LogLevel?: LogLevel | string;

  /**
   * Encoder Settings
   */
  EncoderSettings?: EncoderSettings;

  /**
   * List of input attachments for channel.
   */
  InputAttachments?: InputAttachment[];

  /**
   * The Amazon Resource Name (ARN) of the role assumed when running the Channel.
   */
  RoleArn?: string;

  /**
   * Specification of network and file inputs for this channel
   */
  InputSpecification?: InputSpecification;

  /**
   * The unique id of the channel.
   */
  Id?: string;

  /**
   * Runtime details for the pipelines of a running channel.
   */
  PipelineDetails?: PipelineDetail[];

  /**
   * The unique arn of the channel.
   */
  Arn?: string;

  /**
   * The name of the channel. (user-mutable)
   */
  Name?: string;

  /**
   * Specification of CDI inputs for this channel
   */
  CdiInputSpecification?: CdiInputSpecification;

  /**
   * The number of currently healthy pipelines.
   */
  PipelinesRunningCount?: number;

  /**
   * A list of destinations of the channel. For UDP outputs, there is one
   * destination per output. For other types (HLS, for example), there is
   * one destination per packager.
   */
  Destinations?: OutputDestination[];

  /**
   * Placeholder documentation for ChannelState
   */
  State?: ChannelState | string;
}

export namespace StopChannelResponse {
  export const filterSensitiveLog = (obj: StopChannelResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for StopMultiplexRequest
 */
export interface StopMultiplexRequest {
  /**
   * The ID of the multiplex.
   */
  MultiplexId: string | undefined;
}

export namespace StopMultiplexRequest {
  export const filterSensitiveLog = (obj: StopMultiplexRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for StopMultiplexResponse
 */
export interface StopMultiplexResponse {
  /**
   * The number of currently healthy pipelines.
   */
  PipelinesRunningCount?: number;

  /**
   * A list of the multiplex output destinations.
   */
  Destinations?: MultiplexOutputDestination[];

  /**
   * The number of programs in the multiplex.
   */
  ProgramCount?: number;

  /**
   * A collection of key-value pairs.
   */
  Tags?: { [key: string]: string };

  /**
   * The name of the multiplex.
   */
  Name?: string;

  /**
   * Configuration for a multiplex event.
   */
  MultiplexSettings?: MultiplexSettings;

  /**
   * The unique arn of the multiplex.
   */
  Arn?: string;

  /**
   * The unique id of the multiplex.
   */
  Id?: string;

  /**
   * The current state of the multiplex.
   */
  State?: MultiplexState | string;

  /**
   * A list of availability zones for the multiplex.
   */
  AvailabilityZones?: string[];
}

export namespace StopMultiplexResponse {
  export const filterSensitiveLog = (obj: StopMultiplexResponse): any => ({
    ...obj,
  });
}

/**
 * A request to transfer an input device.
 */
export interface TransferInputDeviceRequest {
  /**
   * An optional message for the recipient. Maximum 280 characters.
   */
  TransferMessage?: string;

  /**
   * The unique ID of this input device. For example, hd-123456789abcdef.
   */
  InputDeviceId: string | undefined;

  /**
   * The AWS account ID (12 digits) for the recipient of the device transfer.
   */
  TargetCustomerId?: string;
}

export namespace TransferInputDeviceRequest {
  export const filterSensitiveLog = (obj: TransferInputDeviceRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for TransferInputDeviceResponse
 */
export interface TransferInputDeviceResponse {}

export namespace TransferInputDeviceResponse {
  export const filterSensitiveLog = (obj: TransferInputDeviceResponse): any => ({
    ...obj,
  });
}

/**
 * A request to update a channel.
 */
export interface UpdateChannelRequest {
  /**
   * The encoder settings for this channel.
   */
  EncoderSettings?: EncoderSettings;

  /**
   * Specification of CDI inputs for this channel
   */
  CdiInputSpecification?: CdiInputSpecification;

  /**
   * A list of output destinations for this channel.
   */
  Destinations?: OutputDestination[];

  /**
   * The log level to write to CloudWatch Logs.
   */
  LogLevel?: LogLevel | string;

  /**
   * Specification of network and file inputs for this channel
   */
  InputSpecification?: InputSpecification;

  /**
   * channel ID
   */
  ChannelId: string | undefined;

  /**
   * An optional Amazon Resource Name (ARN) of the role to assume when running the Channel. If you do not specify this on an update call but the role was previously set that role will be removed.
   */
  RoleArn?: string;

  /**
   * The name of the channel.
   */
  Name?: string;

  /**
   * Placeholder documentation for __listOfInputAttachment
   */
  InputAttachments?: InputAttachment[];
}

export namespace UpdateChannelRequest {
  export const filterSensitiveLog = (obj: UpdateChannelRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for UpdateChannelResponse
 */
export interface UpdateChannelResponse {
  /**
   * Placeholder documentation for Channel
   */
  Channel?: Channel;
}

export namespace UpdateChannelResponse {
  export const filterSensitiveLog = (obj: UpdateChannelResponse): any => ({
    ...obj,
  });
}

/**
 * Channel class that the channel should be updated to.
 */
export interface UpdateChannelClassRequest {
  /**
   * Channel Id of the channel whose class should be updated.
   */
  ChannelId: string | undefined;

  /**
   * A list of output destinations for this channel.
   */
  Destinations?: OutputDestination[];

  /**
   * The channel class that you wish to update this channel to use.
   */
  ChannelClass: ChannelClass | string | undefined;
}

export namespace UpdateChannelClassRequest {
  export const filterSensitiveLog = (obj: UpdateChannelClassRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for UpdateChannelClassResponse
 */
export interface UpdateChannelClassResponse {
  /**
   * Placeholder documentation for Channel
   */
  Channel?: Channel;
}

export namespace UpdateChannelClassResponse {
  export const filterSensitiveLog = (obj: UpdateChannelClassResponse): any => ({
    ...obj,
  });
}

/**
 * A request to update an input.
 */
export interface UpdateInputRequest {
  /**
   * The source URLs for a PULL-type input. Every PULL type input needs
   * exactly two source URLs for redundancy.
   * Only specify sources for PULL type Inputs. Leave Destinations empty.
   */
  Sources?: InputSourceRequest[];

  /**
   * The Amazon Resource Name (ARN) of the role this input assumes during and after creation.
   */
  RoleArn?: string;

  /**
   * Settings for the devices.
   */
  InputDevices?: InputDeviceRequest[];

  /**
   * Destination settings for PUSH type inputs.
   */
  Destinations?: InputDestinationRequest[];

  /**
   * Unique ID of the input.
   */
  InputId: string | undefined;

  /**
   * A list of the MediaConnect Flow ARNs that you want to use as the source of the input. You can specify as few as one
   * Flow and presently, as many as two. The only requirement is when you have more than one is that each Flow is in a
   * separate Availability Zone as this ensures your EML input is redundant to AZ issues.
   */
  MediaConnectFlows?: MediaConnectFlowRequest[];

  /**
   * A list of security groups referenced by IDs to attach to the input.
   */
  InputSecurityGroups?: string[];

  /**
   * Name of the input.
   */
  Name?: string;
}

export namespace UpdateInputRequest {
  export const filterSensitiveLog = (obj: UpdateInputRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for UpdateInputResponse
 */
export interface UpdateInputResponse {
  /**
   * Placeholder documentation for Input
   */
  Input?: Input;
}

export namespace UpdateInputResponse {
  export const filterSensitiveLog = (obj: UpdateInputResponse): any => ({
    ...obj,
  });
}

/**
 * A request to update an input device.
 */
export interface UpdateInputDeviceRequest {
  /**
   * The unique ID of the input device. For example, hd-123456789abcdef.
   */
  InputDeviceId: string | undefined;

  /**
   * The settings that you want to apply to the input device.
   */
  HdDeviceSettings?: InputDeviceConfigurableSettings;

  /**
   * The name that you assigned to this input device (not the unique ID).
   */
  Name?: string;
}

export namespace UpdateInputDeviceRequest {
  export const filterSensitiveLog = (obj: UpdateInputDeviceRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for UpdateInputDeviceResponse
 */
export interface UpdateInputDeviceResponse {
  /**
   * The state of the connection between the input device and AWS.
   */
  ConnectionState?: InputDeviceConnectionState | string;

  /**
   * The status of the action to synchronize the device configuration. If you change the configuration of the input device (for example, the maximum bitrate), MediaLive sends the new data to the device. The device might not update itself immediately. SYNCED means the device has updated its configuration. SYNCING means that it has not updated its configuration.
   */
  DeviceSettingsSyncState?: DeviceSettingsSyncState | string;

  /**
   * The unique ID of the input device.
   */
  Id?: string;

  /**
   * The network settings for the input device.
   */
  NetworkSettings?: InputDeviceNetworkSettings;

  /**
   * The unique serial number of the input device.
   */
  SerialNumber?: string;

  /**
   * The type of the input device.
   */
  Type?: InputDeviceType | string;

  /**
   * A name that you specify for the input device.
   */
  Name?: string;

  /**
   * The unique ARN of the input device.
   */
  Arn?: string;

  /**
   * The network MAC address of the input device.
   */
  MacAddress?: string;

  /**
   * Settings that describe an input device that is type HD.
   */
  HdDeviceSettings?: InputDeviceHdSettings;
}

export namespace UpdateInputDeviceResponse {
  export const filterSensitiveLog = (obj: UpdateInputDeviceResponse): any => ({
    ...obj,
  });
}

/**
 * The request to update some combination of the Input Security Group name and the IPv4 CIDRs the Input Security Group should allow.
 */
export interface UpdateInputSecurityGroupRequest {
  /**
   * The id of the Input Security Group to update.
   */
  InputSecurityGroupId: string | undefined;

  /**
   * List of IPv4 CIDR addresses to whitelist
   */
  WhitelistRules?: InputWhitelistRuleCidr[];

  /**
   * A collection of key-value pairs.
   */
  Tags?: { [key: string]: string };
}

export namespace UpdateInputSecurityGroupRequest {
  export const filterSensitiveLog = (obj: UpdateInputSecurityGroupRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for UpdateInputSecurityGroupResponse
 */
export interface UpdateInputSecurityGroupResponse {
  /**
   * An Input Security Group
   */
  SecurityGroup?: InputSecurityGroup;
}

export namespace UpdateInputSecurityGroupResponse {
  export const filterSensitiveLog = (obj: UpdateInputSecurityGroupResponse): any => ({
    ...obj,
  });
}

/**
 * A request to update a multiplex.
 */
export interface UpdateMultiplexRequest {
  /**
   * The new settings for a multiplex.
   */
  MultiplexSettings?: MultiplexSettings;

  /**
   * ID of the multiplex to update.
   */
  MultiplexId: string | undefined;

  /**
   * Name of the multiplex.
   */
  Name?: string;
}

export namespace UpdateMultiplexRequest {
  export const filterSensitiveLog = (obj: UpdateMultiplexRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for UpdateMultiplexResponse
 */
export interface UpdateMultiplexResponse {
  /**
   * The updated multiplex.
   */
  Multiplex?: Multiplex;
}

export namespace UpdateMultiplexResponse {
  export const filterSensitiveLog = (obj: UpdateMultiplexResponse): any => ({
    ...obj,
  });
}

/**
 * A request to update a program in a multiplex.
 */
export interface UpdateMultiplexProgramRequest {
  /**
   * The ID of the multiplex of the program to update.
   */
  MultiplexId: string | undefined;

  /**
   * The new settings for a multiplex program.
   */
  MultiplexProgramSettings?: MultiplexProgramSettings;

  /**
   * The name of the program to update.
   */
  ProgramName: string | undefined;
}

export namespace UpdateMultiplexProgramRequest {
  export const filterSensitiveLog = (obj: UpdateMultiplexProgramRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for UpdateMultiplexProgramResponse
 */
export interface UpdateMultiplexProgramResponse {
  /**
   * The updated multiplex program.
   */
  MultiplexProgram?: MultiplexProgram;
}

export namespace UpdateMultiplexProgramResponse {
  export const filterSensitiveLog = (obj: UpdateMultiplexProgramResponse): any => ({
    ...obj,
  });
}

/**
 * Request to update a reservation
 */
export interface UpdateReservationRequest {
  /**
   * Unique reservation ID, e.g. '1234567'
   */
  ReservationId: string | undefined;

  /**
   * Name of the reservation
   */
  Name?: string;
}

export namespace UpdateReservationRequest {
  export const filterSensitiveLog = (obj: UpdateReservationRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for UpdateReservationResponse
 */
export interface UpdateReservationResponse {
  /**
   * Reserved resources available to use
   */
  Reservation?: Reservation;
}

export namespace UpdateReservationResponse {
  export const filterSensitiveLog = (obj: UpdateReservationResponse): any => ({
    ...obj,
  });
}
