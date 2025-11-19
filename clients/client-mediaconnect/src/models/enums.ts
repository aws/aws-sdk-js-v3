// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const Protocol = {
  cdi: "cdi",
  fujitsu_qos: "fujitsu-qos",
  ndi_speed_hq: "ndi-speed-hq",
  rist: "rist",
  rtp: "rtp",
  rtp_fec: "rtp-fec",
  srt_caller: "srt-caller",
  srt_listener: "srt-listener",
  st2110_jpegxs: "st2110-jpegxs",
  udp: "udp",
  zixi_pull: "zixi-pull",
  zixi_push: "zixi-push",
} as const;
/**
 * @public
 */
export type Protocol = (typeof Protocol)[keyof typeof Protocol];

/**
 * @public
 * @enum
 */
export const Colorimetry = {
  BT2020: "BT2020",
  BT2100: "BT2100",
  BT601: "BT601",
  BT709: "BT709",
  ST2065_1: "ST2065-1",
  ST2065_3: "ST2065-3",
  XYZ: "XYZ",
} as const;
/**
 * @public
 */
export type Colorimetry = (typeof Colorimetry)[keyof typeof Colorimetry];

/**
 * @public
 * @enum
 */
export const Range = {
  FULL: "FULL",
  FULLPROTECT: "FULLPROTECT",
  NARROW: "NARROW",
} as const;
/**
 * @public
 */
export type Range = (typeof Range)[keyof typeof Range];

/**
 * @public
 * @enum
 */
export const ScanMode = {
  interlace: "interlace",
  progressive: "progressive",
  progressive_segmented_frame: "progressive-segmented-frame",
} as const;
/**
 * @public
 */
export type ScanMode = (typeof ScanMode)[keyof typeof ScanMode];

/**
 * @public
 * @enum
 */
export const Tcs = {
  BT2100LINHLG: "BT2100LINHLG",
  BT2100LINPQ: "BT2100LINPQ",
  DENSITY: "DENSITY",
  HLG: "HLG",
  LINEAR: "LINEAR",
  PQ: "PQ",
  SDR: "SDR",
  ST2065_1: "ST2065-1",
  ST428_1: "ST428-1",
} as const;
/**
 * @public
 */
export type Tcs = (typeof Tcs)[keyof typeof Tcs];

/**
 * @public
 * @enum
 */
export const MediaStreamType = {
  ancillary_data: "ancillary-data",
  audio: "audio",
  video: "video",
} as const;
/**
 * @public
 */
export type MediaStreamType = (typeof MediaStreamType)[keyof typeof MediaStreamType];

/**
 * @public
 * @enum
 */
export const Algorithm = {
  aes128: "aes128",
  aes192: "aes192",
  aes256: "aes256",
} as const;
/**
 * @public
 */
export type Algorithm = (typeof Algorithm)[keyof typeof Algorithm];

/**
 * @public
 * @enum
 */
export const KeyType = {
  speke: "speke",
  srt_password: "srt-password",
  static_key: "static-key",
} as const;
/**
 * @public
 */
export type KeyType = (typeof KeyType)[keyof typeof KeyType];

/**
 * @public
 * @enum
 */
export const EncodingName = {
  jxsv: "jxsv",
  pcm: "pcm",
  raw: "raw",
  smpte291: "smpte291",
} as const;
/**
 * @public
 */
export type EncodingName = (typeof EncodingName)[keyof typeof EncodingName];

/**
 * @public
 * @enum
 */
export const EncoderProfile = {
  high: "high",
  main: "main",
} as const;
/**
 * @public
 */
export type EncoderProfile = (typeof EncoderProfile)[keyof typeof EncoderProfile];

/**
 * @public
 * @enum
 */
export const OutputStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type OutputStatus = (typeof OutputStatus)[keyof typeof OutputStatus];

/**
 * @public
 * @enum
 */
export const State = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type State = (typeof State)[keyof typeof State];

/**
 * @public
 * @enum
 */
export const FlowTransitEncryptionKeyType = {
  AUTOMATIC: "AUTOMATIC",
  SECRETS_MANAGER: "SECRETS_MANAGER",
} as const;
/**
 * @public
 */
export type FlowTransitEncryptionKeyType =
  (typeof FlowTransitEncryptionKeyType)[keyof typeof FlowTransitEncryptionKeyType];

/**
 * @public
 * @enum
 */
export const EntitlementStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type EntitlementStatus = (typeof EntitlementStatus)[keyof typeof EntitlementStatus];

/**
 * @public
 * @enum
 */
export const BridgeState = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETED: "DELETED",
  DELETING: "DELETING",
  DEPLOYING: "DEPLOYING",
  STANDBY: "STANDBY",
  STARTING: "STARTING",
  START_FAILED: "START_FAILED",
  START_PENDING: "START_PENDING",
  STOPPING: "STOPPING",
  STOP_FAILED: "STOP_FAILED",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type BridgeState = (typeof BridgeState)[keyof typeof BridgeState];

/**
 * @public
 * @enum
 */
export const MaintenanceDay = {
  Friday: "Friday",
  Monday: "Monday",
  Saturday: "Saturday",
  Sunday: "Sunday",
  Thursday: "Thursday",
  Tuesday: "Tuesday",
  Wednesday: "Wednesday",
} as const;
/**
 * @public
 */
export type MaintenanceDay = (typeof MaintenanceDay)[keyof typeof MaintenanceDay];

/**
 * @public
 * @enum
 */
export const SourceType = {
  ENTITLED: "ENTITLED",
  OWNED: "OWNED",
} as const;
/**
 * @public
 */
export type SourceType = (typeof SourceType)[keyof typeof SourceType];

/**
 * @public
 * @enum
 */
export const Status = {
  ACTIVE: "ACTIVE",
  DELETING: "DELETING",
  ERROR: "ERROR",
  STANDBY: "STANDBY",
  STARTING: "STARTING",
  STOPPING: "STOPPING",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type Status = (typeof Status)[keyof typeof Status];

/**
 * @public
 * @enum
 */
export const GatewayState = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETED: "DELETED",
  DELETING: "DELETING",
  ERROR: "ERROR",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type GatewayState = (typeof GatewayState)[keyof typeof GatewayState];

/**
 * @public
 * @enum
 */
export const InstanceState = {
  ACTIVE: "ACTIVE",
  DEREGISTERED: "DEREGISTERED",
  DEREGISTERING: "DEREGISTERING",
  DEREGISTRATION_ERROR: "DEREGISTRATION_ERROR",
  REGISTERING: "REGISTERING",
  REGISTRATION_ERROR: "REGISTRATION_ERROR",
} as const;
/**
 * @public
 */
export type InstanceState = (typeof InstanceState)[keyof typeof InstanceState];

/**
 * @public
 * @enum
 */
export const DurationUnits = {
  MONTHS: "MONTHS",
} as const;
/**
 * @public
 */
export type DurationUnits = (typeof DurationUnits)[keyof typeof DurationUnits];

/**
 * @public
 * @enum
 */
export const PriceUnits = {
  HOURLY: "HOURLY",
} as const;
/**
 * @public
 */
export type PriceUnits = (typeof PriceUnits)[keyof typeof PriceUnits];

/**
 * @public
 * @enum
 */
export const ResourceType = {
  Mbps_Outbound_Bandwidth: "Mbps_Outbound_Bandwidth",
} as const;
/**
 * @public
 */
export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType];

/**
 * @public
 * @enum
 */
export const ReservationState = {
  ACTIVE: "ACTIVE",
  CANCELED: "CANCELED",
  EXPIRED: "EXPIRED",
  PROCESSING: "PROCESSING",
} as const;
/**
 * @public
 */
export type ReservationState = (typeof ReservationState)[keyof typeof ReservationState];

/**
 * @public
 * @enum
 */
export const NetworkInterfaceType = {
  efa: "efa",
  ena: "ena",
} as const;
/**
 * @public
 */
export type NetworkInterfaceType = (typeof NetworkInterfaceType)[keyof typeof NetworkInterfaceType];

/**
 * @public
 * @enum
 */
export const ForwardErrorCorrectionState = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type ForwardErrorCorrectionState =
  (typeof ForwardErrorCorrectionState)[keyof typeof ForwardErrorCorrectionState];

/**
 * @public
 * @enum
 */
export const FailoverInputSourcePriorityMode = {
  NO_PRIORITY: "NO_PRIORITY",
  PRIMARY_SECONDARY: "PRIMARY_SECONDARY",
} as const;
/**
 * @public
 */
export type FailoverInputSourcePriorityMode =
  (typeof FailoverInputSourcePriorityMode)[keyof typeof FailoverInputSourcePriorityMode];

/**
 * @public
 * @enum
 */
export const RouterInputProtocol = {
  RIST: "RIST",
  RTP: "RTP",
  SRT_CALLER: "SRT_CALLER",
  SRT_LISTENER: "SRT_LISTENER",
} as const;
/**
 * @public
 */
export type RouterInputProtocol = (typeof RouterInputProtocol)[keyof typeof RouterInputProtocol];

/**
 * @public
 * @enum
 */
export const RouterInputType = {
  FAILOVER: "FAILOVER",
  MEDIACONNECT_FLOW: "MEDIACONNECT_FLOW",
  MERGE: "MERGE",
  STANDARD: "STANDARD",
} as const;
/**
 * @public
 */
export type RouterInputType = (typeof RouterInputType)[keyof typeof RouterInputType];

/**
 * @public
 * @enum
 */
export const Day = {
  FRIDAY: "FRIDAY",
  MONDAY: "MONDAY",
  SATURDAY: "SATURDAY",
  SUNDAY: "SUNDAY",
  THURSDAY: "THURSDAY",
  TUESDAY: "TUESDAY",
  WEDNESDAY: "WEDNESDAY",
} as const;
/**
 * @public
 */
export type Day = (typeof Day)[keyof typeof Day];

/**
 * @public
 * @enum
 */
export const MaintenanceScheduleType = {
  WINDOW: "WINDOW",
} as const;
/**
 * @public
 */
export type MaintenanceScheduleType = (typeof MaintenanceScheduleType)[keyof typeof MaintenanceScheduleType];

/**
 * @public
 * @enum
 */
export const MaintenanceType = {
  DEFAULT: "DEFAULT",
  PREFERRED_DAY_TIME: "PREFERRED_DAY_TIME",
} as const;
/**
 * @public
 */
export type MaintenanceType = (typeof MaintenanceType)[keyof typeof MaintenanceType];

/**
 * @public
 * @enum
 */
export const RoutingScope = {
  GLOBAL: "GLOBAL",
  REGIONAL: "REGIONAL",
} as const;
/**
 * @public
 */
export type RoutingScope = (typeof RoutingScope)[keyof typeof RoutingScope];

/**
 * @public
 * @enum
 */
export const RouterInputState = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETING: "DELETING",
  ERROR: "ERROR",
  MIGRATING: "MIGRATING",
  RECOVERING: "RECOVERING",
  STANDBY: "STANDBY",
  STARTING: "STARTING",
  STOPPING: "STOPPING",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type RouterInputState = (typeof RouterInputState)[keyof typeof RouterInputState];

/**
 * @public
 * @enum
 */
export const RouterInputTier = {
  INPUT_100: "INPUT_100",
  INPUT_20: "INPUT_20",
  INPUT_50: "INPUT_50",
} as const;
/**
 * @public
 */
export type RouterInputTier = (typeof RouterInputTier)[keyof typeof RouterInputTier];

/**
 * @public
 * @enum
 */
export const RouterInputTransitEncryptionKeyType = {
  AUTOMATIC: "AUTOMATIC",
  SECRETS_MANAGER: "SECRETS_MANAGER",
} as const;
/**
 * @public
 */
export type RouterInputTransitEncryptionKeyType =
  (typeof RouterInputTransitEncryptionKeyType)[keyof typeof RouterInputTransitEncryptionKeyType];

/**
 * @public
 * @enum
 */
export const RouterNetworkInterfaceType = {
  PUBLIC: "PUBLIC",
  VPC: "VPC",
} as const;
/**
 * @public
 */
export type RouterNetworkInterfaceType = (typeof RouterNetworkInterfaceType)[keyof typeof RouterNetworkInterfaceType];

/**
 * @public
 * @enum
 */
export const RouterNetworkInterfaceState = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETING: "DELETING",
  ERROR: "ERROR",
  RECOVERING: "RECOVERING",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type RouterNetworkInterfaceState =
  (typeof RouterNetworkInterfaceState)[keyof typeof RouterNetworkInterfaceState];

/**
 * @public
 * @enum
 */
export const MediaLiveTransitEncryptionKeyType = {
  AUTOMATIC: "AUTOMATIC",
  SECRETS_MANAGER: "SECRETS_MANAGER",
} as const;
/**
 * @public
 */
export type MediaLiveTransitEncryptionKeyType =
  (typeof MediaLiveTransitEncryptionKeyType)[keyof typeof MediaLiveTransitEncryptionKeyType];

/**
 * @public
 * @enum
 */
export const MediaLiveInputPipelineId = {
  PIPELINE_0: "PIPELINE_0",
  PIPELINE_1: "PIPELINE_1",
} as const;
/**
 * @public
 */
export type MediaLiveInputPipelineId = (typeof MediaLiveInputPipelineId)[keyof typeof MediaLiveInputPipelineId];

/**
 * @public
 * @enum
 */
export const RouterOutputProtocol = {
  RIST: "RIST",
  RTP: "RTP",
  SRT_CALLER: "SRT_CALLER",
  SRT_LISTENER: "SRT_LISTENER",
} as const;
/**
 * @public
 */
export type RouterOutputProtocol = (typeof RouterOutputProtocol)[keyof typeof RouterOutputProtocol];

/**
 * @public
 * @enum
 */
export const RouterOutputType = {
  MEDIACONNECT_FLOW: "MEDIACONNECT_FLOW",
  MEDIALIVE_INPUT: "MEDIALIVE_INPUT",
  STANDARD: "STANDARD",
} as const;
/**
 * @public
 */
export type RouterOutputType = (typeof RouterOutputType)[keyof typeof RouterOutputType];

/**
 * @public
 * @enum
 */
export const RouterOutputRoutedState = {
  ROUTED: "ROUTED",
  ROUTING: "ROUTING",
  UNROUTED: "UNROUTED",
} as const;
/**
 * @public
 */
export type RouterOutputRoutedState = (typeof RouterOutputRoutedState)[keyof typeof RouterOutputRoutedState];

/**
 * @public
 * @enum
 */
export const RouterOutputState = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETING: "DELETING",
  ERROR: "ERROR",
  MIGRATING: "MIGRATING",
  RECOVERING: "RECOVERING",
  STANDBY: "STANDBY",
  STARTING: "STARTING",
  STOPPING: "STOPPING",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type RouterOutputState = (typeof RouterOutputState)[keyof typeof RouterOutputState];

/**
 * @public
 * @enum
 */
export const RouterOutputTier = {
  OUTPUT_100: "OUTPUT_100",
  OUTPUT_20: "OUTPUT_20",
  OUTPUT_50: "OUTPUT_50",
} as const;
/**
 * @public
 */
export type RouterOutputTier = (typeof RouterOutputTier)[keyof typeof RouterOutputTier];

/**
 * @public
 * @enum
 */
export const FailoverMode = {
  FAILOVER: "FAILOVER",
  MERGE: "MERGE",
} as const;
/**
 * @public
 */
export type FailoverMode = (typeof FailoverMode)[keyof typeof FailoverMode];

/**
 * @public
 * @enum
 */
export const BridgePlacement = {
  AVAILABLE: "AVAILABLE",
  LOCKED: "LOCKED",
} as const;
/**
 * @public
 */
export type BridgePlacement = (typeof BridgePlacement)[keyof typeof BridgePlacement];

/**
 * @public
 * @enum
 */
export const DesiredState = {
  ACTIVE: "ACTIVE",
  DELETED: "DELETED",
  STANDBY: "STANDBY",
} as const;
/**
 * @public
 */
export type DesiredState = (typeof DesiredState)[keyof typeof DesiredState];

/**
 * @public
 * @enum
 */
export const ConnectionStatus = {
  CONNECTED: "CONNECTED",
  DISCONNECTED: "DISCONNECTED",
} as const;
/**
 * @public
 */
export type ConnectionStatus = (typeof ConnectionStatus)[keyof typeof ConnectionStatus];

/**
 * @public
 * @enum
 */
export const ContentQualityAnalysisState = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type ContentQualityAnalysisState =
  (typeof ContentQualityAnalysisState)[keyof typeof ContentQualityAnalysisState];

/**
 * @public
 * @enum
 */
export const FlowSize = {
  LARGE: "LARGE",
  MEDIUM: "MEDIUM",
} as const;
/**
 * @public
 */
export type FlowSize = (typeof FlowSize)[keyof typeof FlowSize];

/**
 * @public
 * @enum
 */
export const NdiState = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type NdiState = (typeof NdiState)[keyof typeof NdiState];

/**
 * @public
 * @enum
 */
export const ThumbnailState = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type ThumbnailState = (typeof ThumbnailState)[keyof typeof ThumbnailState];
