// smithy-typescript generated code
import {
  ArchiveGroupSettings,
  ArchiveOutputSettings,
  FecOutputSettings,
  FixedModeScheduleActionStartSettings,
  FollowModeScheduleActionStartSettings,
  FrameCaptureGroupSettings,
  FrameCaptureOutputSettings,
  FrameCaptureSettings,
  H264Settings,
  H265Settings,
  Hdr10Settings,
  HlsGroupSettings,
  HlsId3SegmentTaggingScheduleActionSettings,
  HlsInputSettings,
  HlsOutputSettings,
  HlsTimedMetadataScheduleActionSettings,
  HtmlMotionGraphicsSettings,
  ImmediateModeScheduleActionStartSettings,
  InputClippingSettings,
  InputLocation,
  M2tsSettings,
  OutputLocationRef,
  PipelinePauseStateSettings,
  RtmpAdMarkers,
  Scte35Descriptor,
  TemporalFilterSettings,
} from "./models_0";

export enum AudioNormalizationAlgorithm {
  ITU_1770_1 = "ITU_1770_1",
  ITU_1770_2 = "ITU_1770_2",
}

export enum AudioNormalizationAlgorithmControl {
  CORRECT_AUDIO = "CORRECT_AUDIO",
}

export enum AudioType {
  CLEAN_EFFECTS = "CLEAN_EFFECTS",
  HEARING_IMPAIRED = "HEARING_IMPAIRED",
  UNDEFINED = "UNDEFINED",
  VISUAL_IMPAIRED_COMMENTARY = "VISUAL_IMPAIRED_COMMENTARY",
}

export enum AudioDescriptionAudioTypeControl {
  FOLLOW_INPUT = "FOLLOW_INPUT",
  USE_CONFIGURED = "USE_CONFIGURED",
}

export enum NielsenWatermarksCbetStepaside {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

/**
 * Nielsen CBET
 */
export interface NielsenCBET {
  /**
   * Enter the CBET check digits to use in the watermark.
   */
  CbetCheckDigitString: string | undefined;

  /**
   * Determines the method of CBET insertion mode when prior encoding is detected on the same layer.
   */
  CbetStepaside: NielsenWatermarksCbetStepaside | string | undefined;

  /**
   * Enter the CBET Source ID (CSID) to use in the watermark
   */
  Csid: string | undefined;
}

export namespace NielsenCBET {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NielsenCBET): any => ({
    ...obj,
  });
}

export enum NielsenWatermarksDistributionTypes {
  FINAL_DISTRIBUTOR = "FINAL_DISTRIBUTOR",
  PROGRAM_CONTENT = "PROGRAM_CONTENT",
}

/**
 * Nielsen Naes Ii Nw
 */
export interface NielsenNaesIiNw {
  /**
   * Enter the check digit string for the watermark
   */
  CheckDigitString: string | undefined;

  /**
   * Enter the Nielsen Source ID (SID) to include in the watermark
   */
  Sid: number | undefined;
}

export namespace NielsenNaesIiNw {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NielsenNaesIiNw): any => ({
    ...obj,
  });
}

export enum AacCodingMode {
  AD_RECEIVER_MIX = "AD_RECEIVER_MIX",
  CODING_MODE_1_0 = "CODING_MODE_1_0",
  CODING_MODE_1_1 = "CODING_MODE_1_1",
  CODING_MODE_2_0 = "CODING_MODE_2_0",
  CODING_MODE_5_1 = "CODING_MODE_5_1",
}

export enum AacInputType {
  BROADCASTER_MIXED_AD = "BROADCASTER_MIXED_AD",
  NORMAL = "NORMAL",
}

export enum AacProfile {
  HEV1 = "HEV1",
  HEV2 = "HEV2",
  LC = "LC",
}

export enum AacRateControlMode {
  CBR = "CBR",
  VBR = "VBR",
}

export enum AacRawFormat {
  LATM_LOAS = "LATM_LOAS",
  NONE = "NONE",
}

export enum AacSpec {
  MPEG2 = "MPEG2",
  MPEG4 = "MPEG4",
}

export enum AacVbrQuality {
  HIGH = "HIGH",
  LOW = "LOW",
  MEDIUM_HIGH = "MEDIUM_HIGH",
  MEDIUM_LOW = "MEDIUM_LOW",
}

export enum Ac3BitstreamMode {
  COMMENTARY = "COMMENTARY",
  COMPLETE_MAIN = "COMPLETE_MAIN",
  DIALOGUE = "DIALOGUE",
  EMERGENCY = "EMERGENCY",
  HEARING_IMPAIRED = "HEARING_IMPAIRED",
  MUSIC_AND_EFFECTS = "MUSIC_AND_EFFECTS",
  VISUALLY_IMPAIRED = "VISUALLY_IMPAIRED",
  VOICE_OVER = "VOICE_OVER",
}

export enum Ac3CodingMode {
  CODING_MODE_1_0 = "CODING_MODE_1_0",
  CODING_MODE_1_1 = "CODING_MODE_1_1",
  CODING_MODE_2_0 = "CODING_MODE_2_0",
  CODING_MODE_3_2_LFE = "CODING_MODE_3_2_LFE",
}

export enum Ac3DrcProfile {
  FILM_STANDARD = "FILM_STANDARD",
  NONE = "NONE",
}

export enum Ac3LfeFilter {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum Ac3MetadataControl {
  FOLLOW_INPUT = "FOLLOW_INPUT",
  USE_CONFIGURED = "USE_CONFIGURED",
}

export enum Eac3AttenuationControl {
  ATTENUATE_3_DB = "ATTENUATE_3_DB",
  NONE = "NONE",
}

export enum Eac3BitstreamMode {
  COMMENTARY = "COMMENTARY",
  COMPLETE_MAIN = "COMPLETE_MAIN",
  EMERGENCY = "EMERGENCY",
  HEARING_IMPAIRED = "HEARING_IMPAIRED",
  VISUALLY_IMPAIRED = "VISUALLY_IMPAIRED",
}

export enum Eac3CodingMode {
  CODING_MODE_1_0 = "CODING_MODE_1_0",
  CODING_MODE_2_0 = "CODING_MODE_2_0",
  CODING_MODE_3_2 = "CODING_MODE_3_2",
}

export enum Eac3DcFilter {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum Eac3DrcLine {
  FILM_LIGHT = "FILM_LIGHT",
  FILM_STANDARD = "FILM_STANDARD",
  MUSIC_LIGHT = "MUSIC_LIGHT",
  MUSIC_STANDARD = "MUSIC_STANDARD",
  NONE = "NONE",
  SPEECH = "SPEECH",
}

export enum Eac3DrcRf {
  FILM_LIGHT = "FILM_LIGHT",
  FILM_STANDARD = "FILM_STANDARD",
  MUSIC_LIGHT = "MUSIC_LIGHT",
  MUSIC_STANDARD = "MUSIC_STANDARD",
  NONE = "NONE",
  SPEECH = "SPEECH",
}

export enum Eac3LfeControl {
  LFE = "LFE",
  NO_LFE = "NO_LFE",
}

export enum Eac3LfeFilter {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum Eac3MetadataControl {
  FOLLOW_INPUT = "FOLLOW_INPUT",
  USE_CONFIGURED = "USE_CONFIGURED",
}

export enum Eac3PassthroughControl {
  NO_PASSTHROUGH = "NO_PASSTHROUGH",
  WHEN_POSSIBLE = "WHEN_POSSIBLE",
}

export enum Eac3PhaseControl {
  NO_SHIFT = "NO_SHIFT",
  SHIFT_90_DEGREES = "SHIFT_90_DEGREES",
}

export enum Eac3StereoDownmix {
  DPL2 = "DPL2",
  LO_RO = "LO_RO",
  LT_RT = "LT_RT",
  NOT_INDICATED = "NOT_INDICATED",
}

export enum Eac3SurroundExMode {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
  NOT_INDICATED = "NOT_INDICATED",
}

export enum Eac3SurroundMode {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
  NOT_INDICATED = "NOT_INDICATED",
}

export enum Mp2CodingMode {
  CODING_MODE_1_0 = "CODING_MODE_1_0",
  CODING_MODE_2_0 = "CODING_MODE_2_0",
}

export enum WavCodingMode {
  CODING_MODE_1_0 = "CODING_MODE_1_0",
  CODING_MODE_2_0 = "CODING_MODE_2_0",
  CODING_MODE_4_0 = "CODING_MODE_4_0",
  CODING_MODE_8_0 = "CODING_MODE_8_0",
}

export enum AudioDescriptionLanguageCodeControl {
  FOLLOW_INPUT = "FOLLOW_INPUT",
  USE_CONFIGURED = "USE_CONFIGURED",
}

export enum AudioLanguageSelectionPolicy {
  LOOSE = "LOOSE",
  STRICT = "STRICT",
}

export enum BurnInAlignment {
  CENTERED = "CENTERED",
  LEFT = "LEFT",
  SMART = "SMART",
}

export enum BurnInBackgroundColor {
  BLACK = "BLACK",
  NONE = "NONE",
  WHITE = "WHITE",
}

export enum BurnInFontColor {
  BLACK = "BLACK",
  BLUE = "BLUE",
  GREEN = "GREEN",
  RED = "RED",
  WHITE = "WHITE",
  YELLOW = "YELLOW",
}

export enum BurnInOutlineColor {
  BLACK = "BLACK",
  BLUE = "BLUE",
  GREEN = "GREEN",
  RED = "RED",
  WHITE = "WHITE",
  YELLOW = "YELLOW",
}

export enum BurnInShadowColor {
  BLACK = "BLACK",
  NONE = "NONE",
  WHITE = "WHITE",
}

export enum BurnInTeletextGridControl {
  FIXED = "FIXED",
  SCALED = "SCALED",
}

export enum DvbSubDestinationAlignment {
  CENTERED = "CENTERED",
  LEFT = "LEFT",
  SMART = "SMART",
}

export enum DvbSubDestinationBackgroundColor {
  BLACK = "BLACK",
  NONE = "NONE",
  WHITE = "WHITE",
}

export enum DvbSubDestinationFontColor {
  BLACK = "BLACK",
  BLUE = "BLUE",
  GREEN = "GREEN",
  RED = "RED",
  WHITE = "WHITE",
  YELLOW = "YELLOW",
}

export enum DvbSubDestinationOutlineColor {
  BLACK = "BLACK",
  BLUE = "BLUE",
  GREEN = "GREEN",
  RED = "RED",
  WHITE = "WHITE",
  YELLOW = "YELLOW",
}

export enum DvbSubDestinationShadowColor {
  BLACK = "BLACK",
  NONE = "NONE",
  WHITE = "WHITE",
}

export enum DvbSubDestinationTeletextGridControl {
  FIXED = "FIXED",
  SCALED = "SCALED",
}

export enum EbuTtDFillLineGapControl {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum EbuTtDDestinationStyleControl {
  EXCLUDE = "EXCLUDE",
  INCLUDE = "INCLUDE",
}

export enum TtmlDestinationStyleControl {
  PASSTHROUGH = "PASSTHROUGH",
  USE_CONFIGURED = "USE_CONFIGURED",
}

export enum WebvttDestinationStyleControl {
  NO_STYLE_DATA = "NO_STYLE_DATA",
  PASSTHROUGH = "PASSTHROUGH",
}

export enum DvbSubOcrLanguage {
  DEU = "DEU",
  ENG = "ENG",
  FRA = "FRA",
  NLD = "NLD",
  POR = "POR",
  SPA = "SPA",
}

export enum EmbeddedConvert608To708 {
  DISABLED = "DISABLED",
  UPCONVERT = "UPCONVERT",
}

export enum EmbeddedScte20Detection {
  AUTO = "AUTO",
  OFF = "OFF",
}

export enum Scte20Convert608To708 {
  DISABLED = "DISABLED",
  UPCONVERT = "UPCONVERT",
}

export enum Scte27OcrLanguage {
  DEU = "DEU",
  ENG = "ENG",
  FRA = "FRA",
  NLD = "NLD",
  POR = "POR",
  SPA = "SPA",
}

export enum CdiInputResolution {
  FHD = "FHD",
  HD = "HD",
  SD = "SD",
  UHD = "UHD",
}

export enum ChannelClass {
  SINGLE_PIPELINE = "SINGLE_PIPELINE",
  STANDARD = "STANDARD",
}

/**
 * Multiplex Program Input Destination Settings for outputting a Channel to a Multiplex
 */
export interface MultiplexProgramChannelDestinationSettings {
  /**
   * The ID of the Multiplex that the encoder is providing output to. You do not need to specify the individual inputs to the Multiplex; MediaLive will handle the connection of the two MediaLive pipelines to the two Multiplex instances.
   * The Multiplex must be in the same region as the Channel.
   */
  MultiplexId?: string;

  /**
   * The program name of the Multiplex program that the encoder is providing output to.
   */
  ProgramName?: string;
}

export namespace MultiplexProgramChannelDestinationSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MultiplexProgramChannelDestinationSettings): any => ({
    ...obj,
  });
}

export enum InputPreference {
  EQUAL_INPUT_PREFERENCE = "EQUAL_INPUT_PREFERENCE",
  PRIMARY_INPUT_PREFERRED = "PRIMARY_INPUT_PREFERRED",
}

export enum InputDeblockFilter {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum InputDenoiseFilter {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum InputFilter {
  AUTO = "AUTO",
  DISABLED = "DISABLED",
  FORCED = "FORCED",
}

export enum HlsScte35SourceType {
  MANIFEST = "MANIFEST",
  SEGMENTS = "SEGMENTS",
}

export enum NetworkInputServerValidation {
  CHECK_CRYPTOGRAPHY_AND_VALIDATE_NAME = "CHECK_CRYPTOGRAPHY_AND_VALIDATE_NAME",
  CHECK_CRYPTOGRAPHY_ONLY = "CHECK_CRYPTOGRAPHY_ONLY",
}

/**
 * Network source to transcode. Must be accessible to the Elemental Live node that is running the live event through a network connection.
 */
export interface NetworkInputSettings {
  /**
   * Specifies HLS input settings when the uri is for a HLS manifest.
   */
  HlsInputSettings?: HlsInputSettings;

  /**
   * Check HTTPS server certificates. When set to checkCryptographyOnly, cryptography in the certificate will be checked, but not the server's name. Certain subdomains (notably S3 buckets that use dots in the bucket name) do not strictly match the corresponding certificate's wildcard pattern and would otherwise cause the event to error. This setting is ignored for protocols that do not use https.
   */
  ServerValidation?: NetworkInputServerValidation | string;
}

export namespace NetworkInputSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NetworkInputSettings): any => ({
    ...obj,
  });
}

export enum Smpte2038DataPreference {
  IGNORE = "IGNORE",
  PREFER = "PREFER",
}

export enum InputSourceEndBehavior {
  CONTINUE = "CONTINUE",
  LOOP = "LOOP",
}

export enum VideoSelectorColorSpace {
  FOLLOW = "FOLLOW",
  HDR10 = "HDR10",
  HLG_2020 = "HLG_2020",
  REC_601 = "REC_601",
  REC_709 = "REC_709",
}

/**
 * Video Selector Color Space Settings
 */
export interface VideoSelectorColorSpaceSettings {
  /**
   * Hdr10 Settings
   */
  Hdr10Settings?: Hdr10Settings;
}

export namespace VideoSelectorColorSpaceSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VideoSelectorColorSpaceSettings): any => ({
    ...obj,
  });
}

export enum VideoSelectorColorSpaceUsage {
  FALLBACK = "FALLBACK",
  FORCE = "FORCE",
}

/**
 * Video Selector Pid
 */
export interface VideoSelectorPid {
  /**
   * Selects a specific PID from within a video source.
   */
  Pid?: number;
}

export namespace VideoSelectorPid {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VideoSelectorPid): any => ({
    ...obj,
  });
}

/**
 * Video Selector Program Id
 */
export interface VideoSelectorProgramId {
  /**
   * Selects a specific program from within a multi-program transport stream. If the program doesn't exist, the first program within the transport stream will be selected by default.
   */
  ProgramId?: number;
}

export namespace VideoSelectorProgramId {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VideoSelectorProgramId): any => ({
    ...obj,
  });
}

/**
 * Video Selector Settings
 */
export interface VideoSelectorSettings {
  /**
   * Video Selector Pid
   */
  VideoSelectorPid?: VideoSelectorPid;

  /**
   * Video Selector Program Id
   */
  VideoSelectorProgramId?: VideoSelectorProgramId;
}

export namespace VideoSelectorSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VideoSelectorSettings): any => ({
    ...obj,
  });
}

/**
 * Specifies a particular video stream within an input source. An input may have only a single video selector.
 */
export interface VideoSelector {
  /**
   * Specifies the color space of an input. This setting works in tandem with colorSpaceUsage and a video description's colorSpaceSettingsChoice to determine if any conversion will be performed.
   */
  ColorSpace?: VideoSelectorColorSpace | string;

  /**
   * Color space settings
   */
  ColorSpaceSettings?: VideoSelectorColorSpaceSettings;

  /**
   * Applies only if colorSpace is a value other than follow. This field controls how the value in the colorSpace field will be used. fallback means that when the input does include color space data, that data will be used, but when the input has no color space data, the value in colorSpace will be used. Choose fallback if your input is sometimes missing color space data, but when it does have color space data, that data is correct. force means to always use the value in colorSpace. Choose force if your input usually has no color space data or might have unreliable color space data.
   */
  ColorSpaceUsage?: VideoSelectorColorSpaceUsage | string;

  /**
   * The video selector settings.
   */
  SelectorSettings?: VideoSelectorSettings;
}

export namespace VideoSelector {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VideoSelector): any => ({
    ...obj,
  });
}

export enum InputCodec {
  AVC = "AVC",
  HEVC = "HEVC",
  MPEG2 = "MPEG2",
}

export enum InputMaximumBitrate {
  MAX_10_MBPS = "MAX_10_MBPS",
  MAX_20_MBPS = "MAX_20_MBPS",
  MAX_50_MBPS = "MAX_50_MBPS",
}

export enum InputResolution {
  HD = "HD",
  SD = "SD",
  UHD = "UHD",
}

export enum LogLevel {
  DEBUG = "DEBUG",
  DISABLED = "DISABLED",
  ERROR = "ERROR",
  INFO = "INFO",
  WARNING = "WARNING",
}

export enum MaintenanceDay {
  FRIDAY = "FRIDAY",
  MONDAY = "MONDAY",
  SATURDAY = "SATURDAY",
  SUNDAY = "SUNDAY",
  THURSDAY = "THURSDAY",
  TUESDAY = "TUESDAY",
  WEDNESDAY = "WEDNESDAY",
}

export enum ChannelState {
  CREATE_FAILED = "CREATE_FAILED",
  CREATING = "CREATING",
  DELETED = "DELETED",
  DELETING = "DELETING",
  IDLE = "IDLE",
  RECOVERING = "RECOVERING",
  RUNNING = "RUNNING",
  STARTING = "STARTING",
  STOPPING = "STOPPING",
  UPDATE_FAILED = "UPDATE_FAILED",
  UPDATING = "UPDATING",
}

/**
 * The properties for a VPC type input destination.
 */
export interface InputDestinationVpc {
  /**
   * The availability zone of the Input destination.
   */
  AvailabilityZone?: string;

  /**
   * The network interface ID of the Input destination in the VPC.
   */
  NetworkInterfaceId?: string;
}

export namespace InputDestinationVpc {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InputDestinationVpc): any => ({
    ...obj,
  });
}

export enum InputClass {
  SINGLE_PIPELINE = "SINGLE_PIPELINE",
  STANDARD = "STANDARD",
}

export enum InputSourceType {
  DYNAMIC = "DYNAMIC",
  STATIC = "STATIC",
}

export enum InputState {
  ATTACHED = "ATTACHED",
  CREATING = "CREATING",
  DELETED = "DELETED",
  DELETING = "DELETING",
  DETACHED = "DETACHED",
}

export enum InputType {
  AWS_CDI = "AWS_CDI",
  INPUT_DEVICE = "INPUT_DEVICE",
  MEDIACONNECT = "MEDIACONNECT",
  MP4_FILE = "MP4_FILE",
  RTMP_PULL = "RTMP_PULL",
  RTMP_PUSH = "RTMP_PUSH",
  RTP_PUSH = "RTP_PUSH",
  TS_FILE = "TS_FILE",
  UDP_PUSH = "UDP_PUSH",
  URL_PULL = "URL_PULL",
}

export enum InputDeviceConnectionState {
  CONNECTED = "CONNECTED",
  DISCONNECTED = "DISCONNECTED",
}

export enum DeviceSettingsSyncState {
  SYNCED = "SYNCED",
  SYNCING = "SYNCING",
}

export enum DeviceUpdateStatus {
  NOT_UP_TO_DATE = "NOT_UP_TO_DATE",
  UP_TO_DATE = "UP_TO_DATE",
}

export enum InputDeviceActiveInput {
  HDMI = "HDMI",
  SDI = "SDI",
}

export enum InputDeviceConfiguredInput {
  AUTO = "AUTO",
  HDMI = "HDMI",
  SDI = "SDI",
}

export enum InputDeviceState {
  IDLE = "IDLE",
  STREAMING = "STREAMING",
}

export enum InputDeviceScanType {
  INTERLACED = "INTERLACED",
  PROGRESSIVE = "PROGRESSIVE",
}

export enum InputDeviceIpScheme {
  DHCP = "DHCP",
  STATIC = "STATIC",
}

export enum InputDeviceType {
  HD = "HD",
}

export enum InputSecurityGroupState {
  DELETED = "DELETED",
  IDLE = "IDLE",
  IN_USE = "IN_USE",
  UPDATING = "UPDATING",
}

/**
 * Multiplex MediaConnect output destination settings.
 */
export interface MultiplexMediaConnectOutputDestinationSettings {
  /**
   * The MediaConnect entitlement ARN available as a Flow source.
   */
  EntitlementArn?: string;
}

export namespace MultiplexMediaConnectOutputDestinationSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MultiplexMediaConnectOutputDestinationSettings): any => ({
    ...obj,
  });
}

/**
 * Contains summary configuration for a Multiplex event.
 */
export interface MultiplexSettingsSummary {
  /**
   * Transport stream bit rate.
   */
  TransportStreamBitrate?: number;
}

export namespace MultiplexSettingsSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MultiplexSettingsSummary): any => ({
    ...obj,
  });
}

export enum MultiplexState {
  CREATE_FAILED = "CREATE_FAILED",
  CREATING = "CREATING",
  DELETED = "DELETED",
  DELETING = "DELETING",
  IDLE = "IDLE",
  RECOVERING = "RECOVERING",
  RUNNING = "RUNNING",
  STARTING = "STARTING",
  STOPPING = "STOPPING",
}

export enum OfferingDurationUnits {
  MONTHS = "MONTHS",
}

export enum OfferingType {
  NO_UPFRONT = "NO_UPFRONT",
}

export enum ReservationCodec {
  AUDIO = "AUDIO",
  AVC = "AVC",
  HEVC = "HEVC",
  LINK = "LINK",
  MPEG2 = "MPEG2",
}

export enum ReservationMaximumBitrate {
  MAX_10_MBPS = "MAX_10_MBPS",
  MAX_20_MBPS = "MAX_20_MBPS",
  MAX_50_MBPS = "MAX_50_MBPS",
}

export enum ReservationMaximumFramerate {
  MAX_30_FPS = "MAX_30_FPS",
  MAX_60_FPS = "MAX_60_FPS",
}

export enum ReservationResolution {
  FHD = "FHD",
  HD = "HD",
  SD = "SD",
  UHD = "UHD",
}

export enum ReservationResourceType {
  CHANNEL = "CHANNEL",
  INPUT = "INPUT",
  MULTIPLEX = "MULTIPLEX",
  OUTPUT = "OUTPUT",
}

export enum ReservationSpecialFeature {
  ADVANCED_AUDIO = "ADVANCED_AUDIO",
  AUDIO_NORMALIZATION = "AUDIO_NORMALIZATION",
  MGHD = "MGHD",
  MGUHD = "MGUHD",
}

export enum ReservationVideoQuality {
  ENHANCED = "ENHANCED",
  PREMIUM = "PREMIUM",
  STANDARD = "STANDARD",
}

export enum M2tsAbsentInputAudioBehavior {
  DROP = "DROP",
  ENCODE_SILENCE = "ENCODE_SILENCE",
}

export enum M2tsArib {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum M2tsAribCaptionsPidControl {
  AUTO = "AUTO",
  USE_CONFIGURED = "USE_CONFIGURED",
}

export enum M2tsAudioBufferModel {
  ATSC = "ATSC",
  DVB = "DVB",
}

export enum M2tsAudioStreamType {
  ATSC = "ATSC",
  DVB = "DVB",
}

export enum M2tsBufferModel {
  MULTIPLEX = "MULTIPLEX",
  NONE = "NONE",
}

export enum M2tsCcDescriptor {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum DvbSdtOutputSdt {
  SDT_FOLLOW = "SDT_FOLLOW",
  SDT_FOLLOW_IF_PRESENT = "SDT_FOLLOW_IF_PRESENT",
  SDT_MANUAL = "SDT_MANUAL",
  SDT_NONE = "SDT_NONE",
}

export enum M2tsEbifControl {
  NONE = "NONE",
  PASSTHROUGH = "PASSTHROUGH",
}

export enum M2tsAudioInterval {
  VIDEO_AND_FIXED_INTERVALS = "VIDEO_AND_FIXED_INTERVALS",
  VIDEO_INTERVAL = "VIDEO_INTERVAL",
}

export enum M2tsEbpPlacement {
  VIDEO_AND_AUDIO_PIDS = "VIDEO_AND_AUDIO_PIDS",
  VIDEO_PID = "VIDEO_PID",
}

export enum M2tsEsRateInPes {
  EXCLUDE = "EXCLUDE",
  INCLUDE = "INCLUDE",
}

export enum M2tsKlv {
  NONE = "NONE",
  PASSTHROUGH = "PASSTHROUGH",
}

export enum M2tsNielsenId3Behavior {
  NO_PASSTHROUGH = "NO_PASSTHROUGH",
  PASSTHROUGH = "PASSTHROUGH",
}

export enum M2tsPcrControl {
  CONFIGURED_PCR_PERIOD = "CONFIGURED_PCR_PERIOD",
  PCR_EVERY_PES_PACKET = "PCR_EVERY_PES_PACKET",
}

export enum M2tsRateMode {
  CBR = "CBR",
  VBR = "VBR",
}

export enum M2tsScte35Control {
  NONE = "NONE",
  PASSTHROUGH = "PASSTHROUGH",
}

export enum M2tsSegmentationMarkers {
  EBP = "EBP",
  EBP_LEGACY = "EBP_LEGACY",
  NONE = "NONE",
  PSI_SEGSTART = "PSI_SEGSTART",
  RAI_ADAPT = "RAI_ADAPT",
  RAI_SEGSTART = "RAI_SEGSTART",
}

export enum M2tsSegmentationStyle {
  MAINTAIN_CADENCE = "MAINTAIN_CADENCE",
  RESET_CADENCE = "RESET_CADENCE",
}

export enum M2tsTimedMetadataBehavior {
  NO_PASSTHROUGH = "NO_PASSTHROUGH",
  PASSTHROUGH = "PASSTHROUGH",
}

export enum HlsH265PackagingType {
  HEV1 = "HEV1",
  HVC1 = "HVC1",
}

export enum AudioOnlyHlsTrackType {
  ALTERNATE_AUDIO_AUTO_SELECT = "ALTERNATE_AUDIO_AUTO_SELECT",
  ALTERNATE_AUDIO_AUTO_SELECT_DEFAULT = "ALTERNATE_AUDIO_AUTO_SELECT_DEFAULT",
  ALTERNATE_AUDIO_NOT_AUTO_SELECT = "ALTERNATE_AUDIO_NOT_AUTO_SELECT",
  AUDIO_ONLY_VARIANT_STREAM = "AUDIO_ONLY_VARIANT_STREAM",
}

export enum AudioOnlyHlsSegmentType {
  AAC = "AAC",
  FMP4 = "FMP4",
}

export enum Fmp4NielsenId3Behavior {
  NO_PASSTHROUGH = "NO_PASSTHROUGH",
  PASSTHROUGH = "PASSTHROUGH",
}

export enum Fmp4TimedMetadataBehavior {
  NO_PASSTHROUGH = "NO_PASSTHROUGH",
  PASSTHROUGH = "PASSTHROUGH",
}

export enum M3u8NielsenId3Behavior {
  NO_PASSTHROUGH = "NO_PASSTHROUGH",
  PASSTHROUGH = "PASSTHROUGH",
}

export enum M3u8PcrControl {
  CONFIGURED_PCR_PERIOD = "CONFIGURED_PCR_PERIOD",
  PCR_EVERY_PES_PACKET = "PCR_EVERY_PES_PACKET",
}

export enum M3u8Scte35Behavior {
  NO_PASSTHROUGH = "NO_PASSTHROUGH",
  PASSTHROUGH = "PASSTHROUGH",
}

export enum M3u8TimedMetadataBehavior {
  NO_PASSTHROUGH = "NO_PASSTHROUGH",
  PASSTHROUGH = "PASSTHROUGH",
}

/**
 * Settings information for the .m3u8 container
 */
export interface M3u8Settings {
  /**
   * The number of audio frames to insert for each PES packet.
   */
  AudioFramesPerPes?: number;

  /**
   * Packet Identifier (PID) of the elementary audio stream(s) in the transport stream. Multiple values are accepted, and can be entered in ranges and/or by comma separation. Can be entered as decimal or hexadecimal values.
   */
  AudioPids?: string;

  /**
   * This parameter is unused and deprecated.
   */
  EcmPid?: string;

  /**
   * If set to passthrough, Nielsen inaudible tones for media tracking will be detected in the input audio and an equivalent ID3 tag will be inserted in the output.
   */
  NielsenId3Behavior?: M3u8NielsenId3Behavior | string;

  /**
   * The number of milliseconds between instances of this table in the output transport stream. A value of \"0\" writes out the PMT once per segment file.
   */
  PatInterval?: number;

  /**
   * When set to pcrEveryPesPacket, a Program Clock Reference value is inserted for every Packetized Elementary Stream (PES) header. This parameter is effective only when the PCR PID is the same as the video or audio elementary stream.
   */
  PcrControl?: M3u8PcrControl | string;

  /**
   * Maximum time in milliseconds between Program Clock References (PCRs) inserted into the transport stream.
   */
  PcrPeriod?: number;

  /**
   * Packet Identifier (PID) of the Program Clock Reference (PCR) in the transport stream. When no value is given, the encoder will assign the same value as the Video PID. Can be entered as a decimal or hexadecimal value.
   */
  PcrPid?: string;

  /**
   * The number of milliseconds between instances of this table in the output transport stream. A value of \"0\" writes out the PMT once per segment file.
   */
  PmtInterval?: number;

  /**
   * Packet Identifier (PID) for the Program Map Table (PMT) in the transport stream. Can be entered as a decimal or hexadecimal value.
   */
  PmtPid?: string;

  /**
   * The value of the program number field in the Program Map Table.
   */
  ProgramNum?: number;

  /**
   * If set to passthrough, passes any SCTE-35 signals from the input source to this output.
   */
  Scte35Behavior?: M3u8Scte35Behavior | string;

  /**
   * Packet Identifier (PID) of the SCTE-35 stream in the transport stream. Can be entered as a decimal or hexadecimal value.
   */
  Scte35Pid?: string;

  /**
   * When set to passthrough, timed metadata is passed through from input to output.
   */
  TimedMetadataBehavior?: M3u8TimedMetadataBehavior | string;

  /**
   * Packet Identifier (PID) of the timed metadata stream in the transport stream. Can be entered as a decimal or hexadecimal value.  Valid values are 32 (or 0x20)..8182 (or 0x1ff6).
   */
  TimedMetadataPid?: string;

  /**
   * The value of the transport stream ID field in the Program Map Table.
   */
  TransportStreamId?: number;

  /**
   * Packet Identifier (PID) of the elementary video stream in the transport stream. Can be entered as a decimal or hexadecimal value.
   */
  VideoPid?: string;
}

export namespace M3u8Settings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: M3u8Settings): any => ({
    ...obj,
  });
}

/**
 * Media Package Output Settings
 */
export interface MediaPackageOutputSettings {}

export namespace MediaPackageOutputSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MediaPackageOutputSettings): any => ({
    ...obj,
  });
}

export enum MsSmoothH265PackagingType {
  HEV1 = "HEV1",
  HVC1 = "HVC1",
}

/**
 * Ms Smooth Output Settings
 */
export interface MsSmoothOutputSettings {
  /**
   * Only applicable when this output is referencing an H.265 video description.
   * Specifies whether MP4 segments should be packaged as HEV1 or HVC1.
   */
  H265PackagingType?: MsSmoothH265PackagingType | string;

  /**
   * String concatenated to the end of the destination filename.  Required for multiple outputs of the same type.
   */
  NameModifier?: string;
}

export namespace MsSmoothOutputSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MsSmoothOutputSettings): any => ({
    ...obj,
  });
}

/**
 * Multiplex Output Settings
 */
export interface MultiplexOutputSettings {
  /**
   * Destination is a Multiplex.
   */
  Destination: OutputLocationRef | undefined;
}

export namespace MultiplexOutputSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MultiplexOutputSettings): any => ({
    ...obj,
  });
}

export enum RtmpOutputCertificateMode {
  SELF_SIGNED = "SELF_SIGNED",
  VERIFY_AUTHENTICITY = "VERIFY_AUTHENTICITY",
}

/**
 * Rtmp Output Settings
 */
export interface RtmpOutputSettings {
  /**
   * If set to verifyAuthenticity, verify the tls certificate chain to a trusted Certificate Authority (CA).  This will cause rtmps outputs with self-signed certificates to fail.
   */
  CertificateMode?: RtmpOutputCertificateMode | string;

  /**
   * Number of seconds to wait before retrying a connection to the Flash Media server if the connection is lost.
   */
  ConnectionRetryInterval?: number;

  /**
   * The RTMP endpoint excluding the stream name (eg. rtmp://host/appname). For connection to Akamai, a username and password must be supplied. URI fields accept format identifiers.
   */
  Destination: OutputLocationRef | undefined;

  /**
   * Number of retry attempts.
   */
  NumRetries?: number;
}

export namespace RtmpOutputSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RtmpOutputSettings): any => ({
    ...obj,
  });
}

/**
 * Udp Container Settings
 */
export interface UdpContainerSettings {
  /**
   * M2ts Settings
   */
  M2tsSettings?: M2tsSettings;
}

export namespace UdpContainerSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UdpContainerSettings): any => ({
    ...obj,
  });
}

export enum FecOutputIncludeFec {
  COLUMN = "COLUMN",
  COLUMN_AND_ROW = "COLUMN_AND_ROW",
}

/**
 * Udp Output Settings
 */
export interface UdpOutputSettings {
  /**
   * UDP output buffering in milliseconds. Larger values increase latency through the transcoder but simultaneously assist the transcoder in maintaining a constant, low-jitter UDP/RTP output while accommodating clock recovery, input switching, input disruptions, picture reordering, etc.
   */
  BufferMsec?: number;

  /**
   * Udp Container Settings
   */
  ContainerSettings: UdpContainerSettings | undefined;

  /**
   * Destination address and port number for RTP or UDP packets. Can be unicast or multicast RTP or UDP (eg. rtp://239.10.10.10:5001 or udp://10.100.100.100:5002).
   */
  Destination: OutputLocationRef | undefined;

  /**
   * Settings for enabling and adjusting Forward Error Correction on UDP outputs.
   */
  FecOutputSettings?: FecOutputSettings;
}

export namespace UdpOutputSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UdpOutputSettings): any => ({
    ...obj,
  });
}

/**
 * Output Settings
 */
export interface OutputSettings {
  /**
   * Archive Output Settings
   */
  ArchiveOutputSettings?: ArchiveOutputSettings;

  /**
   * Frame Capture Output Settings
   */
  FrameCaptureOutputSettings?: FrameCaptureOutputSettings;

  /**
   * Hls Output Settings
   */
  HlsOutputSettings?: HlsOutputSettings;

  /**
   * Media Package Output Settings
   */
  MediaPackageOutputSettings?: MediaPackageOutputSettings;

  /**
   * Ms Smooth Output Settings
   */
  MsSmoothOutputSettings?: MsSmoothOutputSettings;

  /**
   * Multiplex Output Settings
   */
  MultiplexOutputSettings?: MultiplexOutputSettings;

  /**
   * Rtmp Output Settings
   */
  RtmpOutputSettings?: RtmpOutputSettings;

  /**
   * Udp Output Settings
   */
  UdpOutputSettings?: UdpOutputSettings;
}

export namespace OutputSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OutputSettings): any => ({
    ...obj,
  });
}

export enum S3CannedAcl {
  AUTHENTICATED_READ = "AUTHENTICATED_READ",
  BUCKET_OWNER_FULL_CONTROL = "BUCKET_OWNER_FULL_CONTROL",
  BUCKET_OWNER_READ = "BUCKET_OWNER_READ",
  PUBLIC_READ = "PUBLIC_READ",
}

export enum HlsCaptionLanguageSetting {
  INSERT = "INSERT",
  NONE = "NONE",
  OMIT = "OMIT",
}

export enum HlsClientCache {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum HlsCodecSpecification {
  RFC_4281 = "RFC_4281",
  RFC_6381 = "RFC_6381",
}

export enum HlsDirectoryStructure {
  SINGLE_DIRECTORY = "SINGLE_DIRECTORY",
  SUBDIRECTORY_PER_STREAM = "SUBDIRECTORY_PER_STREAM",
}

export enum HlsDiscontinuityTags {
  INSERT = "INSERT",
  NEVER_INSERT = "NEVER_INSERT",
}

export enum HlsEncryptionType {
  AES128 = "AES128",
  SAMPLE_AES = "SAMPLE_AES",
}

export enum HlsAkamaiHttpTransferMode {
  CHUNKED = "CHUNKED",
  NON_CHUNKED = "NON_CHUNKED",
}

export enum HlsMediaStoreStorageClass {
  TEMPORAL = "TEMPORAL",
}

export enum HlsWebdavHttpTransferMode {
  CHUNKED = "CHUNKED",
  NON_CHUNKED = "NON_CHUNKED",
}

export enum HlsId3SegmentTaggingState {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum IFrameOnlyPlaylistType {
  DISABLED = "DISABLED",
  STANDARD = "STANDARD",
}

export enum HlsIncompleteSegmentBehavior {
  AUTO = "AUTO",
  SUPPRESS = "SUPPRESS",
}

export enum InputLossActionForHlsOut {
  EMIT_OUTPUT = "EMIT_OUTPUT",
  PAUSE_OUTPUT = "PAUSE_OUTPUT",
}

export enum HlsIvInManifest {
  EXCLUDE = "EXCLUDE",
  INCLUDE = "INCLUDE",
}

export enum HlsIvSource {
  EXPLICIT = "EXPLICIT",
  FOLLOWS_SEGMENT_NUMBER = "FOLLOWS_SEGMENT_NUMBER",
}

/**
 * Static Key Settings
 */
export interface StaticKeySettings {
  /**
   * The URL of the license server used for protecting content.
   */
  KeyProviderServer?: InputLocation;

  /**
   * Static key value as a 32 character hexadecimal string.
   */
  StaticKeyValue: string | undefined;
}

export namespace StaticKeySettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StaticKeySettings): any => ({
    ...obj,
  });
}

export enum HlsManifestCompression {
  GZIP = "GZIP",
  NONE = "NONE",
}

export enum HlsManifestDurationFormat {
  FLOATING_POINT = "FLOATING_POINT",
  INTEGER = "INTEGER",
}

export enum HlsMode {
  LIVE = "LIVE",
  VOD = "VOD",
}

export enum HlsOutputSelection {
  MANIFESTS_AND_SEGMENTS = "MANIFESTS_AND_SEGMENTS",
  SEGMENTS_ONLY = "SEGMENTS_ONLY",
  VARIANT_MANIFESTS_AND_SEGMENTS = "VARIANT_MANIFESTS_AND_SEGMENTS",
}

export enum HlsProgramDateTime {
  EXCLUDE = "EXCLUDE",
  INCLUDE = "INCLUDE",
}

export enum HlsProgramDateTimeClock {
  INITIALIZE_FROM_OUTPUT_TIMECODE = "INITIALIZE_FROM_OUTPUT_TIMECODE",
  SYSTEM_CLOCK = "SYSTEM_CLOCK",
}

export enum HlsRedundantManifest {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum HlsSegmentationMode {
  USE_INPUT_SEGMENTATION = "USE_INPUT_SEGMENTATION",
  USE_SEGMENT_DURATION = "USE_SEGMENT_DURATION",
}

export enum HlsStreamInfResolution {
  EXCLUDE = "EXCLUDE",
  INCLUDE = "INCLUDE",
}

export enum HlsTimedMetadataId3Frame {
  NONE = "NONE",
  PRIV = "PRIV",
  TDRL = "TDRL",
}

export enum HlsTsFileMode {
  SEGMENTED_FILES = "SEGMENTED_FILES",
  SINGLE_FILE = "SINGLE_FILE",
}

/**
 * Media Package Group Settings
 */
export interface MediaPackageGroupSettings {
  /**
   * MediaPackage channel destination.
   */
  Destination: OutputLocationRef | undefined;
}

export namespace MediaPackageGroupSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MediaPackageGroupSettings): any => ({
    ...obj,
  });
}

export enum SmoothGroupAudioOnlyTimecodeControl {
  PASSTHROUGH = "PASSTHROUGH",
  USE_CONFIGURED_CLOCK = "USE_CONFIGURED_CLOCK",
}

export enum SmoothGroupCertificateMode {
  SELF_SIGNED = "SELF_SIGNED",
  VERIFY_AUTHENTICITY = "VERIFY_AUTHENTICITY",
}

export enum SmoothGroupEventIdMode {
  NO_EVENT_ID = "NO_EVENT_ID",
  USE_CONFIGURED = "USE_CONFIGURED",
  USE_TIMESTAMP = "USE_TIMESTAMP",
}

export enum SmoothGroupEventStopBehavior {
  NONE = "NONE",
  SEND_EOS = "SEND_EOS",
}

export enum InputLossActionForMsSmoothOut {
  EMIT_OUTPUT = "EMIT_OUTPUT",
  PAUSE_OUTPUT = "PAUSE_OUTPUT",
}

export enum SmoothGroupSegmentationMode {
  USE_INPUT_SEGMENTATION = "USE_INPUT_SEGMENTATION",
  USE_SEGMENT_DURATION = "USE_SEGMENT_DURATION",
}

export enum SmoothGroupSparseTrackType {
  NONE = "NONE",
  SCTE_35 = "SCTE_35",
  SCTE_35_WITHOUT_SEGMENTATION = "SCTE_35_WITHOUT_SEGMENTATION",
}

export enum SmoothGroupStreamManifestBehavior {
  DO_NOT_SEND = "DO_NOT_SEND",
  SEND = "SEND",
}

export enum SmoothGroupTimestampOffsetMode {
  USE_CONFIGURED_OFFSET = "USE_CONFIGURED_OFFSET",
  USE_EVENT_START_DATE = "USE_EVENT_START_DATE",
}

/**
 * Ms Smooth Group Settings
 */
export interface MsSmoothGroupSettings {
  /**
   * The ID to include in each message in the sparse track. Ignored if sparseTrackType is NONE.
   */
  AcquisitionPointId?: string;

  /**
   * If set to passthrough for an audio-only MS Smooth output, the fragment absolute time will be set to the current timecode. This option does not write timecodes to the audio elementary stream.
   */
  AudioOnlyTimecodeControl?: SmoothGroupAudioOnlyTimecodeControl | string;

  /**
   * If set to verifyAuthenticity, verify the https certificate chain to a trusted Certificate Authority (CA).  This will cause https outputs to self-signed certificates to fail.
   */
  CertificateMode?: SmoothGroupCertificateMode | string;

  /**
   * Number of seconds to wait before retrying connection to the IIS server if the connection is lost. Content will be cached during this time and the cache will be be delivered to the IIS server once the connection is re-established.
   */
  ConnectionRetryInterval?: number;

  /**
   * Smooth Streaming publish point on an IIS server. Elemental Live acts as a "Push" encoder to IIS.
   */
  Destination: OutputLocationRef | undefined;

  /**
   * MS Smooth event ID to be sent to the IIS server.
   *
   * Should only be specified if eventIdMode is set to useConfigured.
   */
  EventId?: string;

  /**
   * Specifies whether or not to send an event ID to the IIS server. If no event ID is sent and the same Live Event is used without changing the publishing point, clients might see cached video from the previous run.
   *
   * Options:
   * - "useConfigured" - use the value provided in eventId
   * - "useTimestamp" - generate and send an event ID based on the current timestamp
   * - "noEventId" - do not send an event ID to the IIS server.
   */
  EventIdMode?: SmoothGroupEventIdMode | string;

  /**
   * When set to sendEos, send EOS signal to IIS server when stopping the event
   */
  EventStopBehavior?: SmoothGroupEventStopBehavior | string;

  /**
   * Size in seconds of file cache for streaming outputs.
   */
  FilecacheDuration?: number;

  /**
   * Length of mp4 fragments to generate (in seconds). Fragment length must be compatible with GOP size and framerate.
   */
  FragmentLength?: number;

  /**
   * Parameter that control output group behavior on input loss.
   */
  InputLossAction?: InputLossActionForMsSmoothOut | string;

  /**
   * Number of retry attempts.
   */
  NumRetries?: number;

  /**
   * Number of seconds before initiating a restart due to output failure, due to exhausting the numRetries on one segment, or exceeding filecacheDuration.
   */
  RestartDelay?: number;

  /**
   * useInputSegmentation has been deprecated. The configured segment size is always used.
   */
  SegmentationMode?: SmoothGroupSegmentationMode | string;

  /**
   * Number of milliseconds to delay the output from the second pipeline.
   */
  SendDelayMs?: number;

  /**
   * Identifies the type of data to place in the sparse track:
   * - SCTE35: Insert SCTE-35 messages from the source content. With each message, insert an IDR frame to start a new segment.
   * - SCTE35_WITHOUT_SEGMENTATION: Insert SCTE-35 messages from the source content. With each message, insert an IDR frame but don't start a new segment.
   * - NONE: Don't generate a sparse track for any outputs in this output group.
   */
  SparseTrackType?: SmoothGroupSparseTrackType | string;

  /**
   * When set to send, send stream manifest so publishing point doesn't start until all streams start.
   */
  StreamManifestBehavior?: SmoothGroupStreamManifestBehavior | string;

  /**
   * Timestamp offset for the event.  Only used if timestampOffsetMode is set to useConfiguredOffset.
   */
  TimestampOffset?: string;

  /**
   * Type of timestamp date offset to use.
   * - useEventStartDate: Use the date the event was started as the offset
   * - useConfiguredOffset: Use an explicitly configured date as the offset
   */
  TimestampOffsetMode?: SmoothGroupTimestampOffsetMode | string;
}

export namespace MsSmoothGroupSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MsSmoothGroupSettings): any => ({
    ...obj,
  });
}

/**
 * Multiplex Group Settings
 */
export interface MultiplexGroupSettings {}

export namespace MultiplexGroupSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MultiplexGroupSettings): any => ({
    ...obj,
  });
}

export enum AuthenticationScheme {
  AKAMAI = "AKAMAI",
  COMMON = "COMMON",
}

export enum RtmpCacheFullBehavior {
  DISCONNECT_IMMEDIATELY = "DISCONNECT_IMMEDIATELY",
  WAIT_FOR_SERVER = "WAIT_FOR_SERVER",
}

export enum RtmpCaptionData {
  ALL = "ALL",
  FIELD1_608 = "FIELD1_608",
  FIELD1_AND_FIELD2_608 = "FIELD1_AND_FIELD2_608",
}

export enum InputLossActionForRtmpOut {
  EMIT_OUTPUT = "EMIT_OUTPUT",
  PAUSE_OUTPUT = "PAUSE_OUTPUT",
}

/**
 * Rtmp Group Settings
 */
export interface RtmpGroupSettings {
  /**
   * Choose the ad marker type for this output group. MediaLive will create a message based on the content of each SCTE-35 message, format it for that marker type, and insert it in the datastream.
   */
  AdMarkers?: (RtmpAdMarkers | string)[];

  /**
   * Authentication scheme to use when connecting with CDN
   */
  AuthenticationScheme?: AuthenticationScheme | string;

  /**
   * Controls behavior when content cache fills up. If remote origin server stalls the RTMP connection and does not accept content fast enough the 'Media Cache' will fill up. When the cache reaches the duration specified by cacheLength the cache will stop accepting new content. If set to disconnectImmediately, the RTMP output will force a disconnect. Clear the media cache, and reconnect after restartDelay seconds. If set to waitForServer, the RTMP output will wait up to 5 minutes to allow the origin server to begin accepting data again.
   */
  CacheFullBehavior?: RtmpCacheFullBehavior | string;

  /**
   * Cache length, in seconds, is used to calculate buffer size.
   */
  CacheLength?: number;

  /**
   * Controls the types of data that passes to onCaptionInfo outputs.  If set to 'all' then 608 and 708 carried DTVCC data will be passed.  If set to 'field1AndField2608' then DTVCC data will be stripped out, but 608 data from both fields will be passed. If set to 'field1608' then only the data carried in 608 from field 1 video will be passed.
   */
  CaptionData?: RtmpCaptionData | string;

  /**
   * Controls the behavior of this RTMP group if input becomes unavailable.
   *
   * - emitOutput: Emit a slate until input returns.
   * - pauseOutput: Stop transmitting data until input returns. This does not close the underlying RTMP connection.
   */
  InputLossAction?: InputLossActionForRtmpOut | string;

  /**
   * If a streaming output fails, number of seconds to wait until a restart is initiated. A value of 0 means never restart.
   */
  RestartDelay?: number;
}

export namespace RtmpGroupSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RtmpGroupSettings): any => ({
    ...obj,
  });
}

export enum InputLossActionForUdpOut {
  DROP_PROGRAM = "DROP_PROGRAM",
  DROP_TS = "DROP_TS",
  EMIT_PROGRAM = "EMIT_PROGRAM",
}

export enum UdpTimedMetadataId3Frame {
  NONE = "NONE",
  PRIV = "PRIV",
  TDRL = "TDRL",
}

/**
 * Udp Group Settings
 */
export interface UdpGroupSettings {
  /**
   * Specifies behavior of last resort when input video is lost, and no more backup inputs are available. When dropTs is selected the entire transport stream will stop being emitted.  When dropProgram is selected the program can be dropped from the transport stream (and replaced with null packets to meet the TS bitrate requirement).  Or, when emitProgram is chosen the transport stream will continue to be produced normally with repeat frames, black frames, or slate frames substituted for the absent input video.
   */
  InputLossAction?: InputLossActionForUdpOut | string;

  /**
   * Indicates ID3 frame that has the timecode.
   */
  TimedMetadataId3Frame?: UdpTimedMetadataId3Frame | string;

  /**
   * Timed Metadata interval in seconds.
   */
  TimedMetadataId3Period?: number;
}

export namespace UdpGroupSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UdpGroupSettings): any => ({
    ...obj,
  });
}

/**
 * Output Group Settings
 */
export interface OutputGroupSettings {
  /**
   * Archive Group Settings
   */
  ArchiveGroupSettings?: ArchiveGroupSettings;

  /**
   * Frame Capture Group Settings
   */
  FrameCaptureGroupSettings?: FrameCaptureGroupSettings;

  /**
   * Hls Group Settings
   */
  HlsGroupSettings?: HlsGroupSettings;

  /**
   * Media Package Group Settings
   */
  MediaPackageGroupSettings?: MediaPackageGroupSettings;

  /**
   * Ms Smooth Group Settings
   */
  MsSmoothGroupSettings?: MsSmoothGroupSettings;

  /**
   * Multiplex Group Settings
   */
  MultiplexGroupSettings?: MultiplexGroupSettings;

  /**
   * Rtmp Group Settings
   */
  RtmpGroupSettings?: RtmpGroupSettings;

  /**
   * Udp Group Settings
   */
  UdpGroupSettings?: UdpGroupSettings;
}

export namespace OutputGroupSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OutputGroupSettings): any => ({
    ...obj,
  });
}

export enum PipelineId {
  PIPELINE_0 = "PIPELINE_0",
  PIPELINE_1 = "PIPELINE_1",
}

export enum ReservationState {
  ACTIVE = "ACTIVE",
  CANCELED = "CANCELED",
  DELETED = "DELETED",
  EXPIRED = "EXPIRED",
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
  /**
   * @internal
   */
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
   * If you specify a StopTimecode in an input (in order to clip the file), you can specify if you want the clip to exclude (the default) or include the frame specified by the timecode.
   */
  LastFrameClippingBehavior?: LastFrameClippingBehavior | string;

  /**
   * The timecode for the frame where you want to stop the clip. Optional; if not specified, the clip continues to the end of the file. Enter the timecode as HH:MM:SS:FF or HH:MM:SS;FF.
   */
  Timecode?: string;
}

export namespace StopTimecode {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopTimecode): any => ({
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InputPrepareScheduleActionSettings): any => ({
    ...obj,
  });
}

/**
 * Settings for the "switch input" action: to switch from ingesting one input to ingesting another input.
 */
export interface InputSwitchScheduleActionSettings {
  /**
   * The name of the input attachment (not the name of the input!) to switch to. The name is specified in the channel configuration.
   */
  InputAttachmentNameReference: string | undefined;

  /**
   * Settings to let you create a clip of the file input, in order to set up the input to ingest only a portion of the file.
   */
  InputClippingSettings?: InputClippingSettings;

  /**
   * The value for the variable portion of the URL for the dynamic input, for this instance of the input. Each time you use the same dynamic input in an input switch action, you can provide a different value, in order to connect the input to a different content source.
   */
  UrlPath?: string[];
}

export namespace InputSwitchScheduleActionSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InputSwitchScheduleActionSettings): any => ({
    ...obj,
  });
}

/**
 * Settings to specify the rendering of motion graphics into the video stream.
 */
export interface MotionGraphicsActivateScheduleActionSettings {
  /**
   * Duration (in milliseconds) that motion graphics should render on to the video stream. Leaving out this property or setting to 0 will result in rendering continuing until a deactivate action is processed.
   */
  Duration?: number;

  /**
   * Key used to extract the password from EC2 Parameter store
   */
  PasswordParam?: string;

  /**
   * URI of the HTML5 content to be rendered into the live stream.
   */
  Url?: string;

  /**
   * Documentation update needed
   */
  Username?: string;
}

export namespace MotionGraphicsActivateScheduleActionSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MotionGraphicsActivateScheduleActionSettings): any => ({
    ...obj,
  });
}

/**
 * Settings to specify the ending of rendering motion graphics into the video stream.
 */
export interface MotionGraphicsDeactivateScheduleActionSettings {}

export namespace MotionGraphicsDeactivateScheduleActionSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MotionGraphicsDeactivateScheduleActionSettings): any => ({
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Scte35ReturnToNetworkScheduleActionSettings): any => ({
    ...obj,
  });
}

/**
 * Settings for a SCTE-35 splice_insert message.
 */
export interface Scte35SpliceInsertScheduleActionSettings {
  /**
   * Optional, the duration for the splice_insert, in 90 KHz ticks. To convert seconds to ticks, multiple the seconds by 90,000. If you enter a duration, there is an expectation that the downstream system can read the duration and cue in at that time. If you do not enter a duration, the splice_insert will continue indefinitely and there is an expectation that you will enter a return_to_network to end the splice_insert at the appropriate time.
   */
  Duration?: number;

  /**
   * The splice_event_id for the SCTE-35 splice_insert, as defined in SCTE-35.
   */
  SpliceEventId: number | undefined;
}

export namespace Scte35SpliceInsertScheduleActionSettings {
  /**
   * @internal
   */
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
   * Corresponds to SCTE-35 device_restrictions parameter.
   */
  DeviceRestrictions: Scte35DeviceRestrictions | string | undefined;

  /**
   * Corresponds to SCTE-35 no_regional_blackout_flag parameter.
   */
  NoRegionalBlackoutFlag: Scte35NoRegionalBlackoutFlag | string | undefined;

  /**
   * Corresponds to SCTE-35 web_delivery_allowed_flag parameter.
   */
  WebDeliveryAllowedFlag: Scte35WebDeliveryAllowedFlag | string | undefined;
}

export namespace Scte35DeliveryRestrictions {
  /**
   * @internal
   */
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
   * Holds the four SCTE-35 delivery restriction parameters.
   */
  DeliveryRestrictions?: Scte35DeliveryRestrictions;

  /**
   * Corresponds to SCTE-35 segment_num. A value that is valid for the specified segmentation_type_id.
   */
  SegmentNum?: number;

  /**
   * Corresponds to SCTE-35 segmentation_event_cancel_indicator.
   */
  SegmentationCancelIndicator: Scte35SegmentationCancelIndicator | string | undefined;

  /**
   * Corresponds to SCTE-35 segmentation_duration. Optional. The duration for the time_signal, in 90 KHz ticks. To convert seconds to ticks, multiple the seconds by 90,000. Enter time in 90 KHz clock ticks. If you do not enter a duration, the time_signal will continue until you insert a cancellation message.
   */
  SegmentationDuration?: number;

  /**
   * Corresponds to SCTE-35 segmentation_event_id.
   */
  SegmentationEventId: number | undefined;

  /**
   * Corresponds to SCTE-35 segmentation_type_id. One of the segmentation_type_id values listed in the SCTE-35 specification. On the console, enter the ID in decimal (for example, "52"). In the CLI, API, or an SDK, enter the ID in hex (for example, "0x34") or decimal (for example, "52").
   */
  SegmentationTypeId?: number;

  /**
   * Corresponds to SCTE-35 segmentation_upid. Enter a string containing the hexadecimal representation of the characters that make up the SCTE-35 segmentation_upid value. Must contain an even number of hex characters. Do not include spaces between each hex pair. For example, the ASCII "ADS Information" becomes hex "41445320496e666f726d6174696f6e.
   */
  SegmentationUpid?: string;

  /**
   * Corresponds to SCTE-35 segmentation_upid_type. On the console, enter one of the types listed in the SCTE-35 specification, converted to a decimal. For example, "0x0C" hex from the specification is "12" in decimal. In the CLI, API, or an SDK, enter one of the types listed in the SCTE-35 specification, in either hex (for example, "0x0C" ) or in decimal (for example, "12").
   */
  SegmentationUpidType?: number;

  /**
   * Corresponds to SCTE-35 segments_expected. A value that is valid for the specified segmentation_type_id.
   */
  SegmentsExpected?: number;

  /**
   * Corresponds to SCTE-35 sub_segment_num. A value that is valid for the specified segmentation_type_id.
   */
  SubSegmentNum?: number;

  /**
   * Corresponds to SCTE-35 sub_segments_expected. A value that is valid for the specified segmentation_type_id.
   */
  SubSegmentsExpected?: number;
}

export namespace Scte35SegmentationDescriptor {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Scte35DescriptorSettings): any => ({
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
  /**
   * @internal
   */
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
   * The time in milliseconds for the image to fade in. The fade-in starts at the start time of the overlay. Default is 0 (no fade-in).
   */
  FadeIn?: number;

  /**
   * Applies only if a duration is specified. The time in milliseconds for the image to fade out. The fade-out starts when the duration time is hit, so it effectively extends the duration. Default is 0 (no fade-out).
   */
  FadeOut?: number;

  /**
   * The height of the image when inserted into the video, in pixels. The overlay will be scaled up or down to the specified height. Leave blank to use the native height of the overlay.
   */
  Height?: number;

  /**
   * The location and filename of the image file to overlay on the video. The file must be a 32-bit BMP, PNG, or TGA file, and must not be larger (in pixels) than the input video.
   */
  Image: InputLocation | undefined;

  /**
   * Placement of the left edge of the overlay relative to the left edge of the video frame, in pixels. 0 (the default) is the left edge of the frame. If the placement causes the overlay to extend beyond the right edge of the underlying video, then the overlay is cropped on the right.
   */
  ImageX?: number;

  /**
   * Placement of the top edge of the overlay relative to the top edge of the video frame, in pixels. 0 (the default) is the top edge of the frame. If the placement causes the overlay to extend beyond the bottom edge of the underlying video, then the overlay is cropped on the bottom.
   */
  ImageY?: number;

  /**
   * The number of the layer, 0 to 7. There are 8 layers that can be overlaid on the video, each layer with a different image. The layers are in Z order, which means that overlays with higher values of layer are inserted on top of overlays with lower values of layer. Default is 0.
   */
  Layer?: number;

  /**
   * Opacity of image where 0 is transparent and 100 is fully opaque. Default is 100.
   */
  Opacity?: number;

  /**
   * The width of the image when inserted into the video, in pixels. The overlay will be scaled up or down to the specified width. Leave blank to use the native width of the overlay.
   */
  Width?: number;
}

export namespace StaticImageActivateScheduleActionSettings {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StaticImageDeactivateScheduleActionSettings): any => ({
    ...obj,
  });
}

/**
 * Holds the settings for a single schedule action.
 */
export interface ScheduleActionSettings {
  /**
   * Action to insert HLS ID3 segment tagging
   */
  HlsId3SegmentTaggingSettings?: HlsId3SegmentTaggingScheduleActionSettings;

  /**
   * Action to insert HLS metadata
   */
  HlsTimedMetadataSettings?: HlsTimedMetadataScheduleActionSettings;

  /**
   * Action to prepare an input for a future immediate input switch
   */
  InputPrepareSettings?: InputPrepareScheduleActionSettings;

  /**
   * Action to switch the input
   */
  InputSwitchSettings?: InputSwitchScheduleActionSettings;

  /**
   * Action to activate a motion graphics image overlay
   */
  MotionGraphicsImageActivateSettings?: MotionGraphicsActivateScheduleActionSettings;

  /**
   * Action to deactivate a motion graphics image overlay
   */
  MotionGraphicsImageDeactivateSettings?: MotionGraphicsDeactivateScheduleActionSettings;

  /**
   * Action to pause or unpause one or both channel pipelines
   */
  PauseStateSettings?: PauseStateScheduleActionSettings;

  /**
   * Action to insert SCTE-35 return_to_network message
   */
  Scte35ReturnToNetworkSettings?: Scte35ReturnToNetworkScheduleActionSettings;

  /**
   * Action to insert SCTE-35 splice_insert message
   */
  Scte35SpliceInsertSettings?: Scte35SpliceInsertScheduleActionSettings;

  /**
   * Action to insert SCTE-35 time_signal message
   */
  Scte35TimeSignalSettings?: Scte35TimeSignalScheduleActionSettings;

  /**
   * Action to activate a static image overlay
   */
  StaticImageActivateSettings?: StaticImageActivateScheduleActionSettings;

  /**
   * Action to deactivate a static image overlay
   */
  StaticImageDeactivateSettings?: StaticImageDeactivateScheduleActionSettings;
}

export namespace ScheduleActionSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ScheduleActionSettings): any => ({
    ...obj,
  });
}

export enum FollowPoint {
  END = "END",
  START = "START",
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
   * Option for specifying an action as relative to another action.
   */
  FollowModeScheduleActionStartSettings?: FollowModeScheduleActionStartSettings;

  /**
   * Option for specifying an action that should be applied immediately.
   */
  ImmediateModeScheduleActionStartSettings?: ImmediateModeScheduleActionStartSettings;
}

export namespace ScheduleActionStartSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ScheduleActionStartSettings): any => ({
    ...obj,
  });
}

export enum InputDeviceTransferType {
  INCOMING = "INCOMING",
  OUTGOING = "OUTGOING",
}

export enum FrameCaptureIntervalUnit {
  MILLISECONDS = "MILLISECONDS",
  SECONDS = "SECONDS",
}

export enum H264AdaptiveQuantization {
  AUTO = "AUTO",
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

export enum H265AdaptiveQuantization {
  AUTO = "AUTO",
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
  /**
   * @internal
   */
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
   * Choose Off to disable adaptive quantization. Or choose another value to enable the quantizer and set its strength. The strengths are: Auto, Off, Low, Medium, High. When you enable this field, MediaLive allows intra-frame quantizers to vary, which might improve visual quality.
   */
  AdaptiveQuantization?: Mpeg2AdaptiveQuantization | string;

  /**
   * Indicates the AFD values that MediaLive will write into the video encode. If you do not know what AFD signaling is, or if your downstream system has not given you guidance, choose AUTO.
   * AUTO: MediaLive will try to preserve the input AFD value (in cases where multiple AFD values are valid).
   * FIXED: MediaLive will use the value you specify in fixedAFD.
   */
  AfdSignaling?: AfdSignaling | string;

  /**
   * Specifies whether to include the color space metadata. The metadata describes the color space that applies to the video (the colorSpace field). We recommend that you insert the metadata.
   */
  ColorMetadata?: Mpeg2ColorMetadata | string;

  /**
   * Choose the type of color space conversion to apply to the output. For detailed information on setting up both the input and the output to obtain the desired color space in the output, see the section on \"MediaLive Features - Video - color space\" in the MediaLive User Guide.
   * PASSTHROUGH: Keep the color space of the input content - do not convert it.
   * AUTO:Convert all content that is SD to rec 601, and convert all content that is HD to rec 709.
   */
  ColorSpace?: Mpeg2ColorSpace | string;

  /**
   * Sets the pixel aspect ratio for the encode.
   */
  DisplayAspectRatio?: Mpeg2DisplayRatio | string;

  /**
   * Optionally specify a noise reduction filter, which can improve quality of compressed content. If you do not choose a filter, no filter will be applied.
   * TEMPORAL: This filter is useful for both source content that is noisy (when it has excessive digital artifacts) and source content that is clean.
   * When the content is noisy, the filter cleans up the source content before the encoding phase, with these two effects: First, it improves the output video quality because the content has been cleaned up. Secondly, it decreases the bandwidth because MediaLive does not waste bits on encoding noise.
   * When the content is reasonably clean, the filter tends to decrease the bitrate.
   */
  FilterSettings?: Mpeg2FilterSettings;

  /**
   * Complete this field only when afdSignaling is set to FIXED. Enter the AFD value (4 bits) to write on all frames of the video encode.
   */
  FixedAfd?: FixedAfd | string;

  /**
   * description": "The framerate denominator. For example, 1001. The framerate is the numerator divided by the denominator. For example, 24000 / 1001 = 23.976 FPS.
   */
  FramerateDenominator: number | undefined;

  /**
   * The framerate numerator. For example, 24000. The framerate is the numerator divided by the denominator. For example, 24000 / 1001 = 23.976 FPS.
   */
  FramerateNumerator: number | undefined;

  /**
   * MPEG2: default is open GOP.
   */
  GopClosedCadence?: number;

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

  /**
   * Relates to the GOP structure. Specifies whether the gopSize is specified in frames or seconds. If you do not plan to change the default gopSize, leave the default. If you specify SECONDS, MediaLive will internally convert the gop size to a frame count.
   */
  GopSizeUnits?: Mpeg2GopSizeUnits | string;

  /**
   * Set the scan type of the output to PROGRESSIVE or INTERLACED (top field first).
   */
  ScanType?: Mpeg2ScanType | string;

  /**
   * Relates to the GOP structure. If you do not know what GOP is, use the default.
   * FIXED: Set the number of B-frames in each sub-GOP to the value in gopNumBFrames.
   * DYNAMIC: Let MediaLive optimize the number of B-frames in each sub-GOP, to improve visual quality.
   */
  SubgopLength?: Mpeg2SubGopLength | string;

  /**
   * Determines how MediaLive inserts timecodes in the output video. For detailed information about setting up the input and the output for a timecode, see the section on \"MediaLive Features - Timecode configuration\" in the MediaLive User Guide.
   * DISABLED: do not include timecodes.
   * GOP_TIMECODE: Include timecode metadata in the GOP header.
   */
  TimecodeInsertion?: Mpeg2TimecodeInsertionBehavior | string;
}

export namespace Mpeg2Settings {
  /**
   * @internal
   */
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
   * H264 Settings
   */
  H264Settings?: H264Settings;

  /**
   * H265 Settings
   */
  H265Settings?: H265Settings;

  /**
   * Mpeg2 Settings
   */
  Mpeg2Settings?: Mpeg2Settings;
}

export namespace VideoCodecSettings {
  /**
   * @internal
   */
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

export enum AcceptHeader {
  image_jpeg = "image/jpeg",
}

export enum AvailBlankingState {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum Scte35SpliceInsertNoRegionalBlackoutBehavior {
  FOLLOW = "FOLLOW",
  IGNORE = "IGNORE",
}

export enum Scte35SpliceInsertWebDeliveryAllowedBehavior {
  FOLLOW = "FOLLOW",
  IGNORE = "IGNORE",
}

export enum Scte35AposNoRegionalBlackoutBehavior {
  FOLLOW = "FOLLOW",
  IGNORE = "IGNORE",
}

export enum Scte35AposWebDeliveryAllowedBehavior {
  FOLLOW = "FOLLOW",
  IGNORE = "IGNORE",
}

export enum BlackoutSlateNetworkEndBlackout {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum BlackoutSlateState {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum FeatureActivationsInputPrepareScheduleActions {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum GlobalConfigurationInputEndAction {
  NONE = "NONE",
  SWITCH_AND_LOOP_INPUTS = "SWITCH_AND_LOOP_INPUTS",
}

export enum InputLossImageType {
  COLOR = "COLOR",
  SLATE = "SLATE",
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

export enum MotionGraphicsInsertion {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

/**
 * Motion Graphics Settings
 */
export interface MotionGraphicsSettings {
  /**
   * Html Motion Graphics Settings
   */
  HtmlMotionGraphicsSettings?: HtmlMotionGraphicsSettings;
}

export namespace MotionGraphicsSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MotionGraphicsSettings): any => ({
    ...obj,
  });
}

export enum NielsenPcmToId3TaggingState {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

/**
 * Transport stream service descriptor configuration for the Multiplex program.
 */
export interface MultiplexProgramServiceDescriptor {
  /**
   * Name of the provider.
   */
  ProviderName: string | undefined;

  /**
   * Name of the service.
   */
  ServiceName: string | undefined;
}

export namespace MultiplexProgramServiceDescriptor {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MultiplexProgramServiceDescriptor): any => ({
    ...obj,
  });
}

/**
 * Statmux rate control settings
 */
export interface MultiplexStatmuxVideoSettings {
  /**
   * Maximum statmux bitrate.
   */
  MaximumBitrate?: number;

  /**
   * Minimum statmux bitrate.
   */
  MinimumBitrate?: number;

  /**
   * The purpose of the priority is to use a combination of the\nmultiplex rate control algorithm and the QVBR capability of the\nencoder to prioritize the video quality of some channels in a\nmultiplex over others.  Channels that have a higher priority will\nget higher video quality at the expense of the video quality of\nother channels in the multiplex with lower priority.
   */
  Priority?: number;
}

export namespace MultiplexStatmuxVideoSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MultiplexStatmuxVideoSettings): any => ({
    ...obj,
  });
}

/**
 * The video configuration for each program in a multiplex.
 */
export interface MultiplexVideoSettings {
  /**
   * The constant bitrate configuration for the video encode.
   * When this field is defined, StatmuxSettings must be undefined.
   */
  ConstantBitrate?: number;

  /**
   * Statmux rate control settings.
   * When this field is defined, ConstantBitrate must be undefined.
   */
  StatmuxSettings?: MultiplexStatmuxVideoSettings;
}

export namespace MultiplexVideoSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MultiplexVideoSettings): any => ({
    ...obj,
  });
}
