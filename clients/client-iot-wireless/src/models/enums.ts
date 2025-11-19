// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const AggregationPeriod = {
  OneDay: "OneDay",
  OneHour: "OneHour",
  OneWeek: "OneWeek",
} as const;
/**
 * @public
 */
export type AggregationPeriod = (typeof AggregationPeriod)[keyof typeof AggregationPeriod];

/**
 * @public
 * @enum
 */
export const ApplicationConfigType = {
  SemtechGeoLocation: "SemtechGeolocation",
} as const;
/**
 * @public
 */
export type ApplicationConfigType = (typeof ApplicationConfigType)[keyof typeof ApplicationConfigType];

/**
 * @public
 * @enum
 */
export const BatteryLevel = {
  CRITICAL: "critical",
  LOW: "low",
  NORMAL: "normal",
} as const;
/**
 * @public
 */
export type BatteryLevel = (typeof BatteryLevel)[keyof typeof BatteryLevel];

/**
 * @public
 * @enum
 */
export const SigningAlg = {
  Ed25519: "Ed25519",
  P256r1: "P256r1",
} as const;
/**
 * @public
 */
export type SigningAlg = (typeof SigningAlg)[keyof typeof SigningAlg];

/**
 * @public
 * @enum
 */
export const ConnectionStatus = {
  CONNECTED: "Connected",
  DISCONNECTED: "Disconnected",
} as const;
/**
 * @public
 */
export type ConnectionStatus = (typeof ConnectionStatus)[keyof typeof ConnectionStatus];

/**
 * @public
 * @enum
 */
export const EventNotificationTopicStatus = {
  Disabled: "Disabled",
  Enabled: "Enabled",
} as const;
/**
 * @public
 */
export type EventNotificationTopicStatus =
  (typeof EventNotificationTopicStatus)[keyof typeof EventNotificationTopicStatus];

/**
 * @public
 * @enum
 */
export const ExpressionType = {
  MqttTopic: "MqttTopic",
  RuleName: "RuleName",
} as const;
/**
 * @public
 */
export type ExpressionType = (typeof ExpressionType)[keyof typeof ExpressionType];

/**
 * @public
 * @enum
 */
export const SupportedRfRegion = {
  AS923_1: "AS923-1",
  AS923_2: "AS923-2",
  AS923_3: "AS923-3",
  AS923_4: "AS923-4",
  AU915: "AU915",
  CN470: "CN470",
  CN779: "CN779",
  EU433: "EU433",
  EU868: "EU868",
  IN865: "IN865",
  KR920: "KR920",
  RU864: "RU864",
  US915: "US915",
} as const;
/**
 * @public
 */
export type SupportedRfRegion = (typeof SupportedRfRegion)[keyof typeof SupportedRfRegion];

/**
 * @public
 * @enum
 */
export const DlClass = {
  ClassB: "ClassB",
  ClassC: "ClassC",
} as const;
/**
 * @public
 */
export type DlClass = (typeof DlClass)[keyof typeof DlClass];

/**
 * @public
 * @enum
 */
export const LogLevel = {
  DISABLED: "DISABLED",
  ERROR: "ERROR",
  INFO: "INFO",
} as const;
/**
 * @public
 */
export type LogLevel = (typeof LogLevel)[keyof typeof LogLevel];

/**
 * @public
 * @enum
 */
export const MulticastFrameInfo = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type MulticastFrameInfo = (typeof MulticastFrameInfo)[keyof typeof MulticastFrameInfo];

/**
 * @public
 * @enum
 */
export const WirelessDeviceFrameInfo = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type WirelessDeviceFrameInfo = (typeof WirelessDeviceFrameInfo)[keyof typeof WirelessDeviceFrameInfo];

/**
 * @public
 * @enum
 */
export const PositioningConfigStatus = {
  Disabled: "Disabled",
  Enabled: "Enabled",
} as const;
/**
 * @public
 */
export type PositioningConfigStatus = (typeof PositioningConfigStatus)[keyof typeof PositioningConfigStatus];

/**
 * @public
 * @enum
 */
export const WirelessDeviceType = {
  LoRaWAN: "LoRaWAN",
  Sidewalk: "Sidewalk",
} as const;
/**
 * @public
 */
export type WirelessDeviceType = (typeof WirelessDeviceType)[keyof typeof WirelessDeviceType];

/**
 * @public
 * @enum
 */
export const WirelessGatewayTaskStatus = {
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  FIRST_RETRY: "FIRST_RETRY",
  IN_PROGRESS: "IN_PROGRESS",
  PENDING: "PENDING",
  SECOND_RETRY: "SECOND_RETRY",
} as const;
/**
 * @public
 */
export type WirelessGatewayTaskStatus = (typeof WirelessGatewayTaskStatus)[keyof typeof WirelessGatewayTaskStatus];

/**
 * @public
 * @enum
 */
export const DeviceProfileType = {
  LoRaWAN: "LoRaWAN",
  Sidewalk: "Sidewalk",
} as const;
/**
 * @public
 */
export type DeviceProfileType = (typeof DeviceProfileType)[keyof typeof DeviceProfileType];

/**
 * @public
 * @enum
 */
export const DeviceState = {
  PROVISIONED: "Provisioned",
  REGISTEREDNOTSEEN: "RegisteredNotSeen",
  REGISTEREDREACHABLE: "RegisteredReachable",
  REGISTEREDUNREACHABLE: "RegisteredUnreachable",
} as const;
/**
 * @public
 */
export type DeviceState = (typeof DeviceState)[keyof typeof DeviceState];

/**
 * @public
 * @enum
 */
export const DimensionName = {
  DeviceId: "DeviceId",
  GatewayId: "GatewayId",
} as const;
/**
 * @public
 */
export type DimensionName = (typeof DimensionName)[keyof typeof DimensionName];

/**
 * @public
 * @enum
 */
export const PartnerType = {
  Sidewalk: "Sidewalk",
} as const;
/**
 * @public
 */
export type PartnerType = (typeof PartnerType)[keyof typeof PartnerType];

/**
 * @public
 * @enum
 */
export const DownlinkMode = {
  CONCURRENT: "CONCURRENT",
  SEQUENTIAL: "SEQUENTIAL",
  USING_UPLINK_GATEWAY: "USING_UPLINK_GATEWAY",
} as const;
/**
 * @public
 */
export type DownlinkMode = (typeof DownlinkMode)[keyof typeof DownlinkMode];

/**
 * @public
 * @enum
 */
export const Event = {
  ACK: "ack",
  DISCOVERED: "discovered",
  LOST: "lost",
  NACK: "nack",
  PASSTHROUGH: "passthrough",
} as const;
/**
 * @public
 */
export type Event = (typeof Event)[keyof typeof Event];

/**
 * @public
 * @enum
 */
export const IdentifierType = {
  DevEui: "DevEui",
  GatewayEui: "GatewayEui",
  PartnerAccountId: "PartnerAccountId",
  WirelessDeviceId: "WirelessDeviceId",
  WirelessGatewayId: "WirelessGatewayId",
} as const;
/**
 * @public
 */
export type IdentifierType = (typeof IdentifierType)[keyof typeof IdentifierType];

/**
 * @public
 * @enum
 */
export const EventNotificationPartnerType = {
  Sidewalk: "Sidewalk",
} as const;
/**
 * @public
 */
export type EventNotificationPartnerType =
  (typeof EventNotificationPartnerType)[keyof typeof EventNotificationPartnerType];

/**
 * @public
 * @enum
 */
export const EventNotificationResourceType = {
  SidewalkAccount: "SidewalkAccount",
  WirelessDevice: "WirelessDevice",
  WirelessGateway: "WirelessGateway",
} as const;
/**
 * @public
 */
export type EventNotificationResourceType =
  (typeof EventNotificationResourceType)[keyof typeof EventNotificationResourceType];

/**
 * @public
 * @enum
 */
export const FuotaDeviceStatus = {
  Device_exist_in_conflict_fuota_task: "Device_exist_in_conflict_fuota_task",
  FragAlgo_unsupported: "FragAlgo_unsupported",
  FragIndex_unsupported: "FragIndex_unsupported",
  Initial: "Initial",
  MICError: "MICError",
  MemoryError: "MemoryError",
  MissingFrag: "MissingFrag",
  Not_enough_memory: "Not_enough_memory",
  Package_Not_Supported: "Package_Not_Supported",
  SessionCnt_replay: "SessionCnt_replay",
  Successful: "Successful",
  Wrong_descriptor: "Wrong_descriptor",
} as const;
/**
 * @public
 */
export type FuotaDeviceStatus = (typeof FuotaDeviceStatus)[keyof typeof FuotaDeviceStatus];

/**
 * @public
 * @enum
 */
export const FuotaTaskEvent = {
  Fuota: "Fuota",
} as const;
/**
 * @public
 */
export type FuotaTaskEvent = (typeof FuotaTaskEvent)[keyof typeof FuotaTaskEvent];

/**
 * @public
 * @enum
 */
export const FuotaTaskType = {
  LoRaWAN: "LoRaWAN",
} as const;
/**
 * @public
 */
export type FuotaTaskType = (typeof FuotaTaskType)[keyof typeof FuotaTaskType];

/**
 * @public
 * @enum
 */
export const FuotaTaskStatus = {
  Delete_Waiting: "Delete_Waiting",
  FuotaDone: "FuotaDone",
  FuotaSession_Waiting: "FuotaSession_Waiting",
  In_FuotaSession: "In_FuotaSession",
  Pending: "Pending",
} as const;
/**
 * @public
 */
export type FuotaTaskStatus = (typeof FuotaTaskStatus)[keyof typeof FuotaTaskStatus];

/**
 * @public
 * @enum
 */
export const WirelessDeviceEvent = {
  Downlink_Data: "Downlink_Data",
  Join: "Join",
  Registration: "Registration",
  Rejoin: "Rejoin",
  Uplink_Data: "Uplink_Data",
} as const;
/**
 * @public
 */
export type WirelessDeviceEvent = (typeof WirelessDeviceEvent)[keyof typeof WirelessDeviceEvent];

/**
 * @public
 * @enum
 */
export const WirelessGatewayEvent = {
  CUPS_Request: "CUPS_Request",
  Certificate: "Certificate",
} as const;
/**
 * @public
 */
export type WirelessGatewayEvent = (typeof WirelessGatewayEvent)[keyof typeof WirelessGatewayEvent];

/**
 * @public
 * @enum
 */
export const WirelessGatewayType = {
  LoRaWAN: "LoRaWAN",
} as const;
/**
 * @public
 */
export type WirelessGatewayType = (typeof WirelessGatewayType)[keyof typeof WirelessGatewayType];

/**
 * @public
 * @enum
 */
export const SummaryMetricConfigurationStatus = {
  Disabled: "Disabled",
  Enabled: "Enabled",
} as const;
/**
 * @public
 */
export type SummaryMetricConfigurationStatus =
  (typeof SummaryMetricConfigurationStatus)[keyof typeof SummaryMetricConfigurationStatus];

/**
 * @public
 * @enum
 */
export const MetricName = {
  AwsAccountActiveDeviceCount: "AwsAccountActiveDeviceCount",
  AwsAccountActiveGatewayCount: "AwsAccountActiveGatewayCount",
  AwsAccountDeviceCount: "AwsAccountDeviceCount",
  AwsAccountDownlinkCount: "AwsAccountDownlinkCount",
  AwsAccountGatewayCount: "AwsAccountGatewayCount",
  AwsAccountJoinAcceptCount: "AwsAccountJoinAcceptCount",
  AwsAccountJoinRequestCount: "AwsAccountJoinRequestCount",
  AwsAccountRoamingDownlinkCount: "AwsAccountRoamingDownlinkCount",
  AwsAccountRoamingUplinkCount: "AwsAccountRoamingUplinkCount",
  AwsAccountUplinkCount: "AwsAccountUplinkCount",
  AwsAccountUplinkLostCount: "AwsAccountUplinkLostCount",
  AwsAccountUplinkLostRate: "AwsAccountUplinkLostRate",
  DeviceDownlinkCount: "DeviceDownlinkCount",
  DeviceJoinAcceptCount: "DeviceJoinAcceptCount",
  DeviceJoinRequestCount: "DeviceJoinRequestCount",
  DeviceRSSI: "DeviceRSSI",
  DeviceRoamingDownlinkCount: "DeviceRoamingDownlinkCount",
  DeviceRoamingRSSI: "DeviceRoamingRSSI",
  DeviceRoamingSNR: "DeviceRoamingSNR",
  DeviceRoamingUplinkCount: "DeviceRoamingUplinkCount",
  DeviceSNR: "DeviceSNR",
  DeviceUplinkCount: "DeviceUplinkCount",
  DeviceUplinkLostCount: "DeviceUplinkLostCount",
  DeviceUplinkLostRate: "DeviceUplinkLostRate",
  GatewayDownTime: "GatewayDownTime",
  GatewayDownlinkCount: "GatewayDownlinkCount",
  GatewayJoinAcceptCount: "GatewayJoinAcceptCount",
  GatewayJoinRequestCount: "GatewayJoinRequestCount",
  GatewayRSSI: "GatewayRSSI",
  GatewaySNR: "GatewaySNR",
  GatewayUpTime: "GatewayUpTime",
  GatewayUplinkCount: "GatewayUplinkCount",
} as const;
/**
 * @public
 */
export type MetricName = (typeof MetricName)[keyof typeof MetricName];

/**
 * @public
 * @enum
 */
export const MetricQueryStatus = {
  Failed: "Failed",
  Succeeded: "Succeeded",
} as const;
/**
 * @public
 */
export type MetricQueryStatus = (typeof MetricQueryStatus)[keyof typeof MetricQueryStatus];

/**
 * @public
 * @enum
 */
export const PositionResourceType = {
  WirelessDevice: "WirelessDevice",
  WirelessGateway: "WirelessGateway",
} as const;
/**
 * @public
 */
export type PositionResourceType = (typeof PositionResourceType)[keyof typeof PositionResourceType];

/**
 * @public
 * @enum
 */
export const PositionSolverProvider = {
  SEMTECH: "Semtech",
} as const;
/**
 * @public
 */
export type PositionSolverProvider = (typeof PositionSolverProvider)[keyof typeof PositionSolverProvider];

/**
 * @public
 * @enum
 */
export const PositionSolverType = {
  GNSS: "GNSS",
} as const;
/**
 * @public
 */
export type PositionSolverType = (typeof PositionSolverType)[keyof typeof PositionSolverType];

/**
 * @public
 * @enum
 */
export const PositionConfigurationFec = {
  NONE: "NONE",
  ROSE: "ROSE",
} as const;
/**
 * @public
 */
export type PositionConfigurationFec = (typeof PositionConfigurationFec)[keyof typeof PositionConfigurationFec];

/**
 * @public
 * @enum
 */
export const PositionConfigurationStatus = {
  Disabled: "Disabled",
  Enabled: "Enabled",
} as const;
/**
 * @public
 */
export type PositionConfigurationStatus =
  (typeof PositionConfigurationStatus)[keyof typeof PositionConfigurationStatus];

/**
 * @public
 * @enum
 */
export const WirelessGatewayServiceType = {
  CUPS: "CUPS",
  LNS: "LNS",
} as const;
/**
 * @public
 */
export type WirelessGatewayServiceType = (typeof WirelessGatewayServiceType)[keyof typeof WirelessGatewayServiceType];

/**
 * @public
 * @enum
 */
export const WirelessDeviceIdType = {
  DevEui: "DevEui",
  SidewalkManufacturingSn: "SidewalkManufacturingSn",
  ThingName: "ThingName",
  WirelessDeviceId: "WirelessDeviceId",
} as const;
/**
 * @public
 */
export type WirelessDeviceIdType = (typeof WirelessDeviceIdType)[keyof typeof WirelessDeviceIdType];

/**
 * @public
 * @enum
 */
export const WirelessDeviceSidewalkStatus = {
  ACTIVATED: "ACTIVATED",
  PROVISIONED: "PROVISIONED",
  REGISTERED: "REGISTERED",
  UNKNOWN: "UNKNOWN",
} as const;
/**
 * @public
 */
export type WirelessDeviceSidewalkStatus =
  (typeof WirelessDeviceSidewalkStatus)[keyof typeof WirelessDeviceSidewalkStatus];

/**
 * @public
 * @enum
 */
export const ImportTaskStatus = {
  COMPLETE: "COMPLETE",
  DELETING: "DELETING",
  FAILED: "FAILED",
  INITIALIZED: "INITIALIZED",
  INITIALIZING: "INITIALIZING",
  PENDING: "PENDING",
} as const;
/**
 * @public
 */
export type ImportTaskStatus = (typeof ImportTaskStatus)[keyof typeof ImportTaskStatus];

/**
 * @public
 * @enum
 */
export const WirelessGatewayIdType = {
  GatewayEui: "GatewayEui",
  ThingName: "ThingName",
  WirelessGatewayId: "WirelessGatewayId",
} as const;
/**
 * @public
 */
export type WirelessGatewayIdType = (typeof WirelessGatewayIdType)[keyof typeof WirelessGatewayIdType];

/**
 * @public
 * @enum
 */
export const OnboardStatus = {
  FAILED: "FAILED",
  INITIALIZED: "INITIALIZED",
  ONBOARDED: "ONBOARDED",
  PENDING: "PENDING",
} as const;
/**
 * @public
 */
export type OnboardStatus = (typeof OnboardStatus)[keyof typeof OnboardStatus];

/**
 * @public
 * @enum
 */
export const WirelessGatewayTaskDefinitionType = {
  UPDATE: "UPDATE",
} as const;
/**
 * @public
 */
export type WirelessGatewayTaskDefinitionType =
  (typeof WirelessGatewayTaskDefinitionType)[keyof typeof WirelessGatewayTaskDefinitionType];

/**
 * @public
 * @enum
 */
export const MessageType = {
  CUSTOM_COMMAND_ID_GET: "CUSTOM_COMMAND_ID_GET",
  CUSTOM_COMMAND_ID_NOTIFY: "CUSTOM_COMMAND_ID_NOTIFY",
  CUSTOM_COMMAND_ID_RESP: "CUSTOM_COMMAND_ID_RESP",
  CUSTOM_COMMAND_ID_SET: "CUSTOM_COMMAND_ID_SET",
} as const;
/**
 * @public
 */
export type MessageType = (typeof MessageType)[keyof typeof MessageType];
