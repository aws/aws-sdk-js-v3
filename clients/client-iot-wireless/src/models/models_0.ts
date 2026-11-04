// smithy-typescript generated code
import type {
  AggregationPeriod,
  ApplicationConfigType,
  BatteryLevel,
  ConnectionStatus,
  DeviceProfileType,
  DeviceState,
  DimensionName,
  DlClass,
  DownlinkMode,
  Event,
  EventNotificationPartnerType,
  EventNotificationResourceType,
  EventNotificationTopicStatus,
  ExpressionType,
  FuotaDeviceStatus,
  FuotaTaskEvent,
  FuotaTaskStatus,
  FuotaTaskType,
  IdentifierType,
  ImportTaskStatus,
  LogLevel,
  MetricName,
  MetricQueryStatus,
  MulticastFrameInfo,
  OnboardStatus,
  PartnerType,
  PositionConfigurationFec,
  PositionConfigurationStatus,
  PositioningConfigStatus,
  PositionResourceType,
  PositionSolverProvider,
  PositionSolverType,
  SigningAlg,
  SummaryMetricConfigurationStatus,
  SupportedRfRegion,
  WirelessDeviceEvent,
  WirelessDeviceFrameInfo,
  WirelessDeviceIdType,
  WirelessDeviceSidewalkStatus,
  WirelessDeviceType,
  WirelessGatewayEvent,
  WirelessGatewayIdType,
  WirelessGatewayServiceType,
  WirelessGatewayTaskDefinitionType,
  WirelessGatewayTaskStatus,
  WirelessGatewayType,
} from "./enums";

/**
 * Session keys for ABP v1.1
 *
 * @public
 */
export interface SessionKeysAbpV1_0_x {
  /**
   * The NwkSKey value.
   *
   * @public
   */
  NwkSKey?: string | undefined;

  /**
   * The AppSKey value.
   *
   * @public
   */
  AppSKey?: string | undefined;
}

/**
 * ABP device object for LoRaWAN specification v1.0.x
 *
 * @public
 */
export interface AbpV1_0_x {
  /**
   * The DevAddr value.
   *
   * @public
   */
  DevAddr?: string | undefined;

  /**
   * Session keys for ABP v1.0.x
   *
   * @public
   */
  SessionKeys?: SessionKeysAbpV1_0_x | undefined;

  /**
   * The FCnt init value.
   *
   * @public
   */
  FCntStart?: number | undefined;
}

/**
 * Session keys for ABP v1.1
 *
 * @public
 */
export interface SessionKeysAbpV1_1 {
  /**
   * The FNwkSIntKey value.
   *
   * @public
   */
  FNwkSIntKey?: string | undefined;

  /**
   * The SNwkSIntKey value.
   *
   * @public
   */
  SNwkSIntKey?: string | undefined;

  /**
   * The NwkSEncKey value.
   *
   * @public
   */
  NwkSEncKey?: string | undefined;

  /**
   * The AppSKey value.
   *
   * @public
   */
  AppSKey?: string | undefined;
}

/**
 * ABP device object for LoRaWAN specification v1.1
 *
 * @public
 */
export interface AbpV1_1 {
  /**
   * The DevAddr value.
   *
   * @public
   */
  DevAddr?: string | undefined;

  /**
   * Session keys for ABP v1.1
   *
   * @public
   */
  SessionKeys?: SessionKeysAbpV1_1 | undefined;

  /**
   * The FCnt init value.
   *
   * @public
   */
  FCntStart?: number | undefined;
}

/**
 * The accuracy of the estimated position in meters. An empty value indicates that no position data is available. A value of ‘0.0’ value indicates that position data is available. This data corresponds to the position information that you specified instead of the position computed by solver.
 *
 * @public
 */
export interface Accuracy {
  /**
   * The horizontal accuracy of the estimated position, which is the difference between the estimated location and the actual device location.
   *
   * @public
   */
  HorizontalAccuracy?: number | undefined;

  /**
   * The vertical accuracy of the estimated position, which is the difference between the estimated altitude and actual device latitude in meters.
   *
   * @public
   */
  VerticalAccuracy?: number | undefined;
}

/**
 * Configuration for WiFi and cellular location payloads. Contains the confidence level that determines the size of the uncertainty radius in the position estimate.
 *
 * @public
 */
export interface WiFiCellular {
  /**
   * The confidence level for WiFi and cellular position estimates, expressed as a percentage. This value determines the size of the confidence area or uncertainty radius for the estimated position. A higher confidence level produces a larger uncertainty radius, while a lower confidence level produces a smaller, more precise radius.
   *
   * Valid range: 50 to 99 inclusive. If not specified, the default value of 68 is used, which corresponds to approximately one standard deviation of the normal distribution.
   *
   * @public
   */
  ConfidencePercent?: number | undefined;
}

/**
 * Optional configuration for customizing position estimates, including parameters that affect the accuracy and uncertainty of WiFi and cellular-based location estimates.
 *
 * @public
 */
export interface AdvancedConfiguration {
  /**
   * Configuration for WiFi and cellular-based location estimate payloads resolved by HERE's solvers.
   *
   * @public
   */
  WiFiCellular?: WiFiCellular | undefined;
}

/**
 * LoRaWAN application configuration, which can be used to perform geolocation.
 *
 * @public
 */
export interface ApplicationConfig {
  /**
   * The Fport value.
   *
   * @public
   */
  FPort?: number | undefined;

  /**
   * Application type, which can be specified to obtain real-time position information of your LoRaWAN device.
   *
   * @public
   */
  Type?: ApplicationConfigType | undefined;

  /**
   * The name of the position data destination that describes the AWS IoT rule that processes the device's position data for use by AWS IoT Core for LoRaWAN.
   *
   * @public
   */
  DestinationName?: string | undefined;
}

/**
 * Information about a Sidewalk account.
 *
 * @public
 */
export interface SidewalkAccountInfo {
  /**
   * The Sidewalk Amazon ID.
   *
   * @public
   */
  AmazonId?: string | undefined;

  /**
   * The Sidewalk application server private key.
   *
   * @public
   */
  AppServerPrivateKey?: string | undefined;
}

/**
 * A simple label consisting of a customer-defined key-value pair
 *
 * @public
 */
export interface Tag {
  /**
   * The tag's key value.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The tag's value.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface AssociateAwsAccountWithPartnerAccountRequest {
  /**
   * The Sidewalk account credentials.
   *
   * @public
   */
  Sidewalk: SidewalkAccountInfo | undefined;

  /**
   * Each resource must have a unique client request token. The client token is used to implement idempotency. It ensures that the request completes no more than one time. If you retry a request with the same token and the same parameters, the request will complete successfully. However, if you try to create a new resource using the same token but different parameters, an HTTP 409 conflict occurs. If you omit this value, AWS SDKs will automatically generate a unique client request. For more information about idempotency, see [Ensuring idempotency in Amazon EC2 API requests](https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html).
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * The tags to attach to the specified resource. Tags are metadata that you can use to manage a resource.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface AssociateAwsAccountWithPartnerAccountResponse {
  /**
   * The Sidewalk account credentials.
   *
   * @public
   */
  Sidewalk?: SidewalkAccountInfo | undefined;

  /**
   * The Amazon Resource Name of the resource.
   *
   * @public
   */
  Arn?: string | undefined;
}

/**
 * @public
 */
export interface AssociateMulticastGroupWithFuotaTaskRequest {
  /**
   * The ID of a FUOTA task.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The ID of the multicast group.
   *
   * @public
   */
  MulticastGroupId: string | undefined;
}

/**
 * @public
 */
export interface AssociateMulticastGroupWithFuotaTaskResponse {}

/**
 * @public
 */
export interface AssociateWirelessDeviceWithFuotaTaskRequest {
  /**
   * The ID of a FUOTA task.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The ID of the wireless device.
   *
   * @public
   */
  WirelessDeviceId: string | undefined;
}

/**
 * @public
 */
export interface AssociateWirelessDeviceWithFuotaTaskResponse {}

/**
 * @public
 */
export interface AssociateWirelessDeviceWithMulticastGroupRequest {
  /**
   * The ID of the multicast group.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The ID of the wireless device.
   *
   * @public
   */
  WirelessDeviceId: string | undefined;
}

/**
 * @public
 */
export interface AssociateWirelessDeviceWithMulticastGroupResponse {}

/**
 * @public
 */
export interface AssociateWirelessDeviceWithThingRequest {
  /**
   * The ID of the resource to update.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The ARN of the thing to associate with the wireless device.
   *
   * @public
   */
  ThingArn: string | undefined;
}

/**
 * @public
 */
export interface AssociateWirelessDeviceWithThingResponse {}

/**
 * @public
 */
export interface AssociateWirelessGatewayWithCertificateRequest {
  /**
   * The ID of the resource to update.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The ID of the certificate to associate with the wireless gateway.
   *
   * @public
   */
  IotCertificateId: string | undefined;
}

/**
 * @public
 */
export interface AssociateWirelessGatewayWithCertificateResponse {
  /**
   * The ID of the certificate associated with the wireless gateway.
   *
   * @public
   */
  IotCertificateId?: string | undefined;
}

/**
 * @public
 */
export interface AssociateWirelessGatewayWithThingRequest {
  /**
   * The ID of the resource to update.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The ARN of the thing to associate with the wireless gateway.
   *
   * @public
   */
  ThingArn: string | undefined;
}

/**
 * @public
 */
export interface AssociateWirelessGatewayWithThingResponse {}

/**
 * Beaconing parameters for configuring the wireless gateways.
 *
 * @public
 */
export interface Beaconing {
  /**
   * The data rate for gateways that are sending the beacons.
   *
   * @public
   */
  DataRate?: number | undefined;

  /**
   * The frequency list for the gateways to send the beacons.
   *
   * @public
   */
  Frequencies?: number[] | undefined;
}

/**
 * @public
 */
export interface CancelMulticastGroupSessionRequest {
  /**
   * The ID of the multicast group.
   *
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface CancelMulticastGroupSessionResponse {}

/**
 * CDMA local ID information, which corresponds to the local identification parameters of a CDMA cell.
 *
 * @public
 */
export interface CdmaLocalId {
  /**
   * Pseudo-noise offset, which is a characteristic of the signal from a cell on a radio tower.
   *
   * @public
   */
  PnOffset: number | undefined;

  /**
   * CDMA channel information.
   *
   * @public
   */
  CdmaChannel: number | undefined;
}

/**
 * CDMA object for network measurement reports.
 *
 * @public
 */
export interface CdmaNmrObj {
  /**
   * Pseudo-noise offset, which is a characteristic of the signal from a cell on a radio tower.
   *
   * @public
   */
  PnOffset: number | undefined;

  /**
   * CDMA channel information.
   *
   * @public
   */
  CdmaChannel: number | undefined;

  /**
   * Transmit power level of the pilot signal, measured in dBm (decibel-milliwatts).
   *
   * @public
   */
  PilotPower?: number | undefined;

  /**
   * CDMA base station ID (BSID).
   *
   * @public
   */
  BaseStationId?: number | undefined;
}

/**
 * CDMA (Code-division multiple access) object.
 *
 * @public
 */
export interface CdmaObj {
  /**
   * CDMA system ID (SID).
   *
   * @public
   */
  SystemId: number | undefined;

  /**
   * CDMA network ID (NID).
   *
   * @public
   */
  NetworkId: number | undefined;

  /**
   * CDMA base station ID (BSID).
   *
   * @public
   */
  BaseStationId: number | undefined;

  /**
   * CDMA registration zone (RZ).
   *
   * @public
   */
  RegistrationZone?: number | undefined;

  /**
   * CDMA local identification (local ID) parameters.
   *
   * @public
   */
  CdmaLocalId?: CdmaLocalId | undefined;

  /**
   * Transmit power level of the pilot signal, measured in dBm (decibel-milliwatts).
   *
   * @public
   */
  PilotPower?: number | undefined;

  /**
   * CDMA base station latitude in degrees.
   *
   * @public
   */
  BaseLat?: number | undefined;

  /**
   * CDMA base station longitude in degrees.
   *
   * @public
   */
  BaseLng?: number | undefined;

  /**
   * CDMA network measurement reports.
   *
   * @public
   */
  CdmaNmr?: CdmaNmrObj[] | undefined;
}

/**
 * GSM local ID information, which corresponds to the local identification parameters of a GSM cell.
 *
 * @public
 */
export interface GsmLocalId {
  /**
   * GSM base station identity code (BSIC).
   *
   * @public
   */
  Bsic: number | undefined;

  /**
   * GSM broadcast control channel.
   *
   * @public
   */
  Bcch: number | undefined;
}

/**
 * Global identity information.
 *
 * @public
 */
export interface GlobalIdentity {
  /**
   * Location area code of the global identity.
   *
   * @public
   */
  Lac: number | undefined;

  /**
   * GERAN (GSM EDGE Radio Access Network) cell global identifier.
   *
   * @public
   */
  GeranCid: number | undefined;
}

/**
 * GSM object for network measurement reports.
 *
 * @public
 */
export interface GsmNmrObj {
  /**
   * GSM base station identity code (BSIC).
   *
   * @public
   */
  Bsic: number | undefined;

  /**
   * GSM broadcast control channel.
   *
   * @public
   */
  Bcch: number | undefined;

  /**
   * Rx level, which is the received signal power, measured in dBm (decibel-milliwatts).
   *
   * @public
   */
  RxLevel?: number | undefined;

  /**
   * Global identity information of the GSM object.
   *
   * @public
   */
  GlobalIdentity?: GlobalIdentity | undefined;
}

/**
 * GSM object.
 *
 * @public
 */
export interface GsmObj {
  /**
   * Mobile Country Code.
   *
   * @public
   */
  Mcc: number | undefined;

  /**
   * Mobile Network Code.
   *
   * @public
   */
  Mnc: number | undefined;

  /**
   * Location area code.
   *
   * @public
   */
  Lac: number | undefined;

  /**
   * GERAN (GSM EDGE Radio Access Network) Cell Global Identifier.
   *
   * @public
   */
  GeranCid: number | undefined;

  /**
   * GSM local identification (local ID) information.
   *
   * @public
   */
  GsmLocalId?: GsmLocalId | undefined;

  /**
   * Timing advance value, which corresponds to the length of time a signal takes to reach the base station from a mobile phone.
   *
   * @public
   */
  GsmTimingAdvance?: number | undefined;

  /**
   * Rx level, which is the received signal power, measured in dBm (decibel-milliwatts).
   *
   * @public
   */
  RxLevel?: number | undefined;

  /**
   * GSM object for network measurement reports.
   *
   * @public
   */
  GsmNmr?: GsmNmrObj[] | undefined;
}

/**
 * LTE local identification (local ID) information.
 *
 * @public
 */
export interface LteLocalId {
  /**
   * Physical cell ID.
   *
   * @public
   */
  Pci: number | undefined;

  /**
   * Evolved universal terrestrial radio access (E-UTRA) absolute radio frequency channel number (FCN).
   *
   * @public
   */
  Earfcn: number | undefined;
}

/**
 * LTE object for network measurement reports.
 *
 * @public
 */
export interface LteNmrObj {
  /**
   * Physical cell ID.
   *
   * @public
   */
  Pci: number | undefined;

  /**
   * E-UTRA (Evolved universal terrestrial Radio Access) absolute radio frequency channel Number (EARFCN).
   *
   * @public
   */
  Earfcn: number | undefined;

  /**
   * E-UTRAN (Evolved Universal Terrestrial Radio Access Network) cell global identifier (EUTRANCID).
   *
   * @public
   */
  EutranCid?: number | undefined;

  /**
   * Signal power of the reference signal received, measured in dBm (decibel-milliwatts).
   *
   * @public
   */
  Rsrp?: number | undefined;

  /**
   * Signal quality of the reference Signal received, measured in decibels (dB).
   *
   * @public
   */
  Rsrq?: number | undefined;
}

/**
 * LTE object.
 *
 * @public
 */
export interface LteObj {
  /**
   * Mobile Country Code.
   *
   * @public
   */
  Mcc: number | undefined;

  /**
   * Mobile Network Code.
   *
   * @public
   */
  Mnc: number | undefined;

  /**
   * E-UTRAN (Evolved Universal Terrestrial Radio Access Network) Cell Global Identifier.
   *
   * @public
   */
  EutranCid: number | undefined;

  /**
   * LTE tracking area code.
   *
   * @public
   */
  Tac?: number | undefined;

  /**
   * LTE local identification (local ID) information.
   *
   * @public
   */
  LteLocalId?: LteLocalId | undefined;

  /**
   * LTE timing advance.
   *
   * @public
   */
  LteTimingAdvance?: number | undefined;

  /**
   * Signal power of the reference signal received, measured in dBm (decibel-milliwatts).
   *
   * @public
   */
  Rsrp?: number | undefined;

  /**
   * Signal quality of the reference Signal received, measured in decibels (dB).
   *
   * @public
   */
  Rsrq?: number | undefined;

  /**
   * Parameter that determines whether the LTE object is capable of supporting NR (new radio).
   *
   * @public
   */
  NrCapable?: boolean | undefined;

  /**
   * LTE object for network measurement reports.
   *
   * @public
   */
  LteNmr?: LteNmrObj[] | undefined;
}

/**
 * TD-SCDMA local identification (local Id) information.
 *
 * @public
 */
export interface TdscdmaLocalId {
  /**
   * TD-SCDMA UTRA (Universal Terrestrial Radio Access Network) absolute RF channel number (UARFCN).
   *
   * @public
   */
  Uarfcn: number | undefined;

  /**
   * Cell parameters for TD-SCDMA.
   *
   * @public
   */
  CellParams: number | undefined;
}

/**
 * TD-SCDMA object for network measurement reports.
 *
 * @public
 */
export interface TdscdmaNmrObj {
  /**
   * TD-SCDMA UTRA (Universal Terrestrial Radio Access Network) absolute RF channel number.
   *
   * @public
   */
  Uarfcn: number | undefined;

  /**
   * Cell parameters for TD-SCDMA network measurement reports object.
   *
   * @public
   */
  CellParams: number | undefined;

  /**
   * UTRAN (UMTS Terrestrial Radio Access Network) cell global identifier.
   *
   * @public
   */
  UtranCid?: number | undefined;

  /**
   * Code power of the received signal, measured in decibel-milliwatts (dBm).
   *
   * @public
   */
  Rscp?: number | undefined;

  /**
   * Path loss, or path attenuation, is the reduction in power density of an electromagnetic wave as it propagates through space.
   *
   * @public
   */
  PathLoss?: number | undefined;
}

/**
 * TD-SCDMA object.
 *
 * @public
 */
export interface TdscdmaObj {
  /**
   * Mobile Country Code.
   *
   * @public
   */
  Mcc: number | undefined;

  /**
   * Mobile Network Code.
   *
   * @public
   */
  Mnc: number | undefined;

  /**
   * Location Area Code.
   *
   * @public
   */
  Lac?: number | undefined;

  /**
   * UTRAN (UMTS Terrestrial Radio Access Network) Cell Global Identifier.
   *
   * @public
   */
  UtranCid: number | undefined;

  /**
   * TD-SCDMA local identification (local ID) information.
   *
   * @public
   */
  TdscdmaLocalId?: TdscdmaLocalId | undefined;

  /**
   * TD-SCDMA Timing advance.
   *
   * @public
   */
  TdscdmaTimingAdvance?: number | undefined;

  /**
   * Signal power of the received signal (Received Signal Code Power), measured in decibel-milliwatts (dBm).
   *
   * @public
   */
  Rscp?: number | undefined;

  /**
   * Path loss, or path attenuation, is the reduction in power density of an electromagnetic wave as it propagates through space.
   *
   * @public
   */
  PathLoss?: number | undefined;

  /**
   * TD-SCDMA object for network measurement reports.
   *
   * @public
   */
  TdscdmaNmr?: TdscdmaNmrObj[] | undefined;
}

/**
 * WCDMA local identification (local ID) information.
 *
 * @public
 */
export interface WcdmaLocalId {
  /**
   * WCDMA UTRA Absolute RF Channel Number downlink.
   *
   * @public
   */
  Uarfcndl: number | undefined;

  /**
   * Primary Scrambling Code.
   *
   * @public
   */
  Psc: number | undefined;
}

/**
 * Network Measurement Reports.
 *
 * @public
 */
export interface WcdmaNmrObj {
  /**
   * WCDMA UTRA Absolute RF Channel Number downlink.
   *
   * @public
   */
  Uarfcndl: number | undefined;

  /**
   * Primary Scrambling Code.
   *
   * @public
   */
  Psc: number | undefined;

  /**
   * UTRAN (UMTS Terrestrial Radio Access Network) Cell Global Identifier.
   *
   * @public
   */
  UtranCid: number | undefined;

  /**
   * Received Signal Code Power (signal power) (dBm)
   *
   * @public
   */
  Rscp?: number | undefined;

  /**
   * Path loss, or path attenuation, is the reduction in power density of an electromagnetic wave as it propagates through space.
   *
   * @public
   */
  PathLoss?: number | undefined;
}

/**
 * WCDMA.
 *
 * @public
 */
export interface WcdmaObj {
  /**
   * Mobile Country Code.
   *
   * @public
   */
  Mcc: number | undefined;

  /**
   * Mobile Network Code.
   *
   * @public
   */
  Mnc: number | undefined;

  /**
   * Location Area Code.
   *
   * @public
   */
  Lac?: number | undefined;

  /**
   * UTRAN (UMTS Terrestrial Radio Access Network) Cell Global Identifier.
   *
   * @public
   */
  UtranCid: number | undefined;

  /**
   * WCDMA local ID information.
   *
   * @public
   */
  WcdmaLocalId?: WcdmaLocalId | undefined;

  /**
   * Received Signal Code Power (signal power) (dBm).
   *
   * @public
   */
  Rscp?: number | undefined;

  /**
   * Path loss, or path attenuation, is the reduction in power density of an electromagnetic wave as it propagates through space.
   *
   * @public
   */
  PathLoss?: number | undefined;

  /**
   * WCDMA object for network measurement reports.
   *
   * @public
   */
  WcdmaNmr?: WcdmaNmrObj[] | undefined;
}

/**
 * The cell towers that were used to perform the measurements.
 *
 * @public
 */
export interface CellTowers {
  /**
   * GSM object information.
   *
   * @public
   */
  Gsm?: GsmObj[] | undefined;

  /**
   * WCDMA object information.
   *
   * @public
   */
  Wcdma?: WcdmaObj[] | undefined;

  /**
   * TD-SCDMA object information.
   *
   * @public
   */
  Tdscdma?: TdscdmaObj[] | undefined;

  /**
   * LTE object information.
   *
   * @public
   */
  Lte?: LteObj[] | undefined;

  /**
   * CDMA object information.
   *
   * @public
   */
  Cdma?: CdmaObj[] | undefined;
}

/**
 * List of sidewalk certificates.
 *
 * @public
 */
export interface CertificateList {
  /**
   * The certificate chain algorithm provided by sidewalk.
   *
   * @public
   */
  SigningAlg: SigningAlg | undefined;

  /**
   * The value of the chosen sidewalk certificate.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * Object for LoRaWAN connection status resource type event configuration.
 *
 * @public
 */
export interface LoRaWANConnectionStatusEventNotificationConfigurations {
  /**
   * Denotes whether the gateway EUI connection status event topic is enabled or disabled.
   *
   * @public
   */
  GatewayEuiEventTopic?: EventNotificationTopicStatus | undefined;
}

/**
 * Connection status event configuration object for enabling or disabling topic.
 *
 * @public
 */
export interface ConnectionStatusEventConfiguration {
  /**
   * Connection status event configuration object for enabling or disabling LoRaWAN related event topics.
   *
   * @public
   */
  LoRaWAN?: LoRaWANConnectionStatusEventNotificationConfigurations | undefined;

  /**
   * Denotes whether the wireless gateway ID connection status event topic is enabled or disabled.
   *
   * @public
   */
  WirelessGatewayIdEventTopic?: EventNotificationTopicStatus | undefined;
}

/**
 * Object for LoRaWAN connection status resource type event configuration.
 *
 * @public
 */
export interface LoRaWANConnectionStatusResourceTypeEventConfiguration {
  /**
   * Denotes whether the wireless gateway connection status event topic is enabled or disabled.
   *
   * @public
   */
  WirelessGatewayEventTopic?: EventNotificationTopicStatus | undefined;
}

/**
 * Connection status resource type event configuration object for enabling or disabling topic.
 *
 * @public
 */
export interface ConnectionStatusResourceTypeEventConfiguration {
  /**
   * Connection status resource type event configuration object for enabling or disabling LoRaWAN related event topics.
   *
   * @public
   */
  LoRaWAN?: LoRaWANConnectionStatusResourceTypeEventConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateDestinationRequest {
  /**
   * The name of the new resource.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The type of value in `Expression`.
   *
   * @public
   */
  ExpressionType: ExpressionType | undefined;

  /**
   * The rule name or topic rule to send messages to.
   *
   * @public
   */
  Expression: string | undefined;

  /**
   * The description of the new resource.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The ARN of the IAM Role that authorizes the destination.
   *
   * @public
   */
  RoleArn: string | undefined;

  /**
   * The tags to attach to the new destination. Tags are metadata that you can use to manage a resource.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Each resource must have a unique client request token. The client token is used to implement idempotency. It ensures that the request completes no more than one time. If you retry a request with the same token and the same parameters, the request will complete successfully. However, if you try to create a new resource using the same token but different parameters, an HTTP 409 conflict occurs. If you omit this value, AWS SDKs will automatically generate a unique client request. For more information about idempotency, see [Ensuring idempotency in Amazon EC2 API requests](https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html).
   *
   * @public
   */
  ClientRequestToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateDestinationResponse {
  /**
   * The Amazon Resource Name of the new resource.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The name of the new resource.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * LoRaWANDeviceProfile object.
 *
 * @public
 */
export interface LoRaWANDeviceProfile {
  /**
   * The SupportsClassB value.
   *
   * @public
   */
  SupportsClassB?: boolean | undefined;

  /**
   * The ClassBTimeout value.
   *
   * @public
   */
  ClassBTimeout?: number | undefined;

  /**
   * The PingSlotPeriod value.
   *
   * @public
   */
  PingSlotPeriod?: number | undefined;

  /**
   * The PingSlotDR value.
   *
   * @public
   */
  PingSlotDr?: number | undefined;

  /**
   * The PingSlotFreq value.
   *
   * @public
   */
  PingSlotFreq?: number | undefined;

  /**
   * The SupportsClassC value.
   *
   * @public
   */
  SupportsClassC?: boolean | undefined;

  /**
   * The ClassCTimeout value.
   *
   * @public
   */
  ClassCTimeout?: number | undefined;

  /**
   * The MAC version (such as OTAA 1.1 or OTAA 1.0.3) to use with this device profile.
   *
   * @public
   */
  MacVersion?: string | undefined;

  /**
   * The version of regional parameters.
   *
   * @public
   */
  RegParamsRevision?: string | undefined;

  /**
   * The RXDelay1 value.
   *
   * @public
   */
  RxDelay1?: number | undefined;

  /**
   * The RXDROffset1 value.
   *
   * @public
   */
  RxDrOffset1?: number | undefined;

  /**
   * The RXDataRate2 value.
   *
   * @public
   */
  RxDataRate2?: number | undefined;

  /**
   * The RXFreq2 value.
   *
   * @public
   */
  RxFreq2?: number | undefined;

  /**
   * The list of values that make up the FactoryPresetFreqs value.
   *
   * @public
   */
  FactoryPresetFreqsList?: number[] | undefined;

  /**
   * The MaxEIRP value.
   *
   * @public
   */
  MaxEirp?: number | undefined;

  /**
   * The MaxDutyCycle value. It ranges from 0 to 15.
   *
   * @public
   */
  MaxDutyCycle?: number | undefined;

  /**
   * The frequency band (RFRegion) value.
   *
   * @public
   */
  RfRegion?: string | undefined;

  /**
   * The SupportsJoin value.
   *
   * @public
   */
  SupportsJoin?: boolean | undefined;

  /**
   * The Supports32BitFCnt value.
   *
   * @public
   */
  Supports32BitFCnt?: boolean | undefined;
}

/**
 * Sidewalk object for creating a device profile.
 *
 * @public
 */
export interface SidewalkCreateDeviceProfile {}

/**
 * @public
 */
export interface CreateDeviceProfileRequest {
  /**
   * The name of the new resource.
   *
   * > **Note:** The following special characters aren't accepted: `<>^#~$`
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The device profile information to use to create the device profile.
   *
   * @public
   */
  LoRaWAN?: LoRaWANDeviceProfile | undefined;

  /**
   * The tags to attach to the new device profile. Tags are metadata that you can use to manage a resource.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Each resource must have a unique client request token. The client token is used to implement idempotency. It ensures that the request completes no more than one time. If you retry a request with the same token and the same parameters, the request will complete successfully. However, if you try to create a new resource using the same token but different parameters, an HTTP 409 conflict occurs. If you omit this value, AWS SDKs will automatically generate a unique client request. For more information about idempotency, see [Ensuring idempotency in Amazon EC2 API requests](https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html).
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * The Sidewalk-related information for creating the Sidewalk device profile.
   *
   * @public
   */
  Sidewalk?: SidewalkCreateDeviceProfile | undefined;
}

/**
 * @public
 */
export interface CreateDeviceProfileResponse {
  /**
   * The Amazon Resource Name of the new resource.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The ID of the new device profile.
   *
   * @public
   */
  Id?: string | undefined;
}

/**
 * The LoRaWAN information used with a FUOTA task.
 *
 * @public
 */
export interface LoRaWANFuotaTask {
  /**
   * Supported RfRegions
   *
   * @public
   */
  RfRegion?: SupportedRfRegion | undefined;
}

/**
 * @public
 */
export interface CreateFuotaTaskRequest {
  /**
   * The name of a FUOTA task.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The description of the new resource.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Each resource must have a unique client request token. The client token is used to implement idempotency. It ensures that the request completes no more than one time. If you retry a request with the same token and the same parameters, the request will complete successfully. However, if you try to create a new resource using the same token but different parameters, an HTTP 409 conflict occurs. If you omit this value, AWS SDKs will automatically generate a unique client request. For more information about idempotency, see [Ensuring idempotency in Amazon EC2 API requests](https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html).
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * The LoRaWAN information used with a FUOTA task.
   *
   * @public
   */
  LoRaWAN?: LoRaWANFuotaTask | undefined;

  /**
   * The S3 URI points to a firmware update image that is to be used with a FUOTA task.
   *
   * @public
   */
  FirmwareUpdateImage: string | undefined;

  /**
   * The firmware update role that is to be used with a FUOTA task.
   *
   * @public
   */
  FirmwareUpdateRole: string | undefined;

  /**
   * The tag to attach to the specified resource. Tags are metadata that you can use to manage a resource.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The percentage of the added fragments that are redundant. For example, if the size of the firmware image file is 100 bytes and the fragment size is 10 bytes, with `RedundancyPercent` set to 50(%), the final number of encoded fragments is (100 / 10) + (100 / 10 * 50%) = 15.
   *
   * @public
   */
  RedundancyPercent?: number | undefined;

  /**
   * The size of each fragment in bytes. This parameter is supported only for FUOTA tasks with multicast groups.
   *
   * @public
   */
  FragmentSizeBytes?: number | undefined;

  /**
   * The interval for sending fragments in milliseconds, rounded to the nearest second.
   *
   * > **Note:** This interval only determines the timing for when the Cloud sends down the fragments to yor device. There can be a delay for when your device will receive these fragments. This delay depends on the device's class and the communication delay with the cloud.
   *
   * @public
   */
  FragmentIntervalMS?: number | undefined;

  /**
   * The descriptor is the metadata about the file that is transferred to the device using FUOTA, such as the software version. It is a binary field encoded in base64.
   *
   * @public
   */
  Descriptor?: string | undefined;
}

/**
 * @public
 */
export interface CreateFuotaTaskResponse {
  /**
   * The arn of a FUOTA task.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The ID of a FUOTA task.
   *
   * @public
   */
  Id?: string | undefined;
}

/**
 * The default session parameters for the multicast group.
 *
 * @public
 */
export interface DefaultSessionParametersMulticast {
  /**
   * Downlink data rate.
   *
   * @public
   */
  DlDr?: number | undefined;

  /**
   * Downlink frequency.
   *
   * @public
   */
  DlFreq?: number | undefined;
}

/**
 * Specify the list of gateways to which you want to send the multicast downlink messages. The multicast message will be sent to each gateway in the list, with the transmission interval as the time interval between each message.
 *
 * @public
 */
export interface ParticipatingGatewaysMulticast {
  /**
   * The list of gateways that you want to use for sending the multicast downlink message. Each downlink message will be sent to all the gateways in the list in the order that you provided. If the gateway list is empty, then AWS IoT Core for LoRaWAN chooses the gateways that were most recently used by the devices to send an uplink message.
   *
   * @public
   */
  GatewayList?: string[] | undefined;

  /**
   * The duration of time in milliseconds for which AWS IoT Core for LoRaWAN will wait before transmitting the multicast payload to the next gateway in the list.
   *
   * @public
   */
  TransmissionInterval?: number | undefined;
}

/**
 * The LoRaWAN information that is to be used with the multicast group.
 *
 * @public
 */
export interface LoRaWANMulticast {
  /**
   * Supported RfRegions
   *
   * @public
   */
  RfRegion?: SupportedRfRegion | undefined;

  /**
   * DlClass for LoRaWAM, valid values are ClassB and ClassC.
   *
   * @public
   */
  DlClass?: DlClass | undefined;

  /**
   * Specify the list of gateways to which you want to send the multicast downlink messages. The multicast message will be sent to each gateway in the list, with the transmission interval as the time interval between each message.
   *
   * @public
   */
  ParticipatingGateways?: ParticipatingGatewaysMulticast | undefined;

  /**
   * The default session parameters for the multicast group.
   *
   * @public
   */
  DefaultSessionParameters?: DefaultSessionParametersMulticast | undefined;
}

/**
 * @public
 */
export interface CreateMulticastGroupRequest {
  /**
   * The name of the multicast group.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The description of the multicast group.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Each resource must have a unique client request token. The client token is used to implement idempotency. It ensures that the request completes no more than one time. If you retry a request with the same token and the same parameters, the request will complete successfully. However, if you try to create a new resource using the same token but different parameters, an HTTP 409 conflict occurs. If you omit this value, AWS SDKs will automatically generate a unique client request. For more information about idempotency, see [Ensuring idempotency in Amazon EC2 API requests](https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html).
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * The LoRaWAN information that is to be used with the multicast group.
   *
   * @public
   */
  LoRaWAN: LoRaWANMulticast | undefined;

  /**
   * The tag to attach to the specified resource. Tags are metadata that you can use to manage a resource.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateMulticastGroupResponse {
  /**
   * The arn of the multicast group.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The ID of the multicast group.
   *
   * @public
   */
  Id?: string | undefined;
}

/**
 * Trace content for your wireless devices, gateways, and multicast groups.
 *
 * @public
 */
export interface TraceContent {
  /**
   * `FrameInfo` of your wireless device resources for the trace content. Use FrameInfo to debug the communication between your LoRaWAN end devices and the network server.
   *
   * @public
   */
  WirelessDeviceFrameInfo?: WirelessDeviceFrameInfo | undefined;

  /**
   * The log level for a log message. The log levels can be disabled, or set to `ERROR` to display less verbose logs containing only error information, or to `INFO` for more detailed logs.
   *
   * @public
   */
  LogLevel?: LogLevel | undefined;

  /**
   * `FrameInfo` of your multicast group resources for the trace content. Use FrameInfo to debug the multicast communication between your multicast groups and the network server.
   *
   * @public
   */
  MulticastFrameInfo?: MulticastFrameInfo | undefined;
}

/**
 * @public
 */
export interface CreateNetworkAnalyzerConfigurationRequest {
  /**
   * Name of the network analyzer configuration.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Trace content for your wireless devices, gateways, and multicast groups.
   *
   * @public
   */
  TraceContent?: TraceContent | undefined;

  /**
   * Wireless device resources to add to the network analyzer configuration. Provide the `WirelessDeviceId` of the resource to add in the input array.
   *
   * @public
   */
  WirelessDevices?: string[] | undefined;

  /**
   * Wireless gateway resources to add to the network analyzer configuration. Provide the `WirelessGatewayId` of the resource to add in the input array.
   *
   * @public
   */
  WirelessGateways?: string[] | undefined;

  /**
   * The description of the new resource.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The tag to attach to the specified resource. Tags are metadata that you can use to manage a resource.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Each resource must have a unique client request token. The client token is used to implement idempotency. It ensures that the request completes no more than one time. If you retry a request with the same token and the same parameters, the request will complete successfully. However, if you try to create a new resource using the same token but different parameters, an HTTP 409 conflict occurs. If you omit this value, AWS SDKs will automatically generate a unique client request. For more information about idempotency, see [Ensuring idempotency in Amazon EC2 API requests](https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html).
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * Multicast Group resources to add to the network analyzer configruation. Provide the `MulticastGroupId` of the resource to add in the input array.
   *
   * @public
   */
  MulticastGroups?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateNetworkAnalyzerConfigurationResponse {
  /**
   * The Amazon Resource Name of the new resource.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * Name of the network analyzer configuration.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * LoRaWANServiceProfile object.
 *
 * @public
 */
export interface LoRaWANServiceProfile {
  /**
   * The AddGWMetaData value.
   *
   * @public
   */
  AddGwMetadata?: boolean | undefined;

  /**
   * The DrMin value.
   *
   * @public
   */
  DrMin?: number | undefined;

  /**
   * The DrMax value.
   *
   * @public
   */
  DrMax?: number | undefined;

  /**
   * The PRAllowed value that describes whether passive roaming is allowed.
   *
   * @public
   */
  PrAllowed?: boolean | undefined;

  /**
   * The RAAllowed value that describes whether roaming activation is allowed.
   *
   * @public
   */
  RaAllowed?: boolean | undefined;

  /**
   * The Transmit Power Index minimum.
   *
   * Default: `0`
   *
   * @public
   */
  TxPowerIndexMin?: number | undefined;

  /**
   * The Transmit Power Index maximum.
   *
   * Default: `15`
   *
   * @public
   */
  TxPowerIndexMax?: number | undefined;

  /**
   * The minimum number of transmissions.
   *
   * Default: `0`
   *
   * @public
   */
  NbTransMin?: number | undefined;

  /**
   * The maximum number of transmissions.
   *
   * Default: `3`
   *
   * @public
   */
  NbTransMax?: number | undefined;
}

/**
 * @public
 */
export interface CreateServiceProfileRequest {
  /**
   * The name of the new resource.
   *
   * > **Note:** The following special characters aren't accepted: `<>^#~$`
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The service profile information to use to create the service profile.
   *
   * @public
   */
  LoRaWAN?: LoRaWANServiceProfile | undefined;

  /**
   * The tags to attach to the new service profile. Tags are metadata that you can use to manage a resource.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Each resource must have a unique client request token. The client token is used to implement idempotency. It ensures that the request completes no more than one time. If you retry a request with the same token and the same parameters, the request will complete successfully. However, if you try to create a new resource using the same token but different parameters, an HTTP 409 conflict occurs. If you omit this value, AWS SDKs will automatically generate a unique client request. For more information about idempotency, see [Ensuring idempotency in Amazon EC2 API requests](https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html).
   *
   * @public
   */
  ClientRequestToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateServiceProfileResponse {
  /**
   * The Amazon Resource Name of the new resource.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The ID of the new service profile.
   *
   * @public
   */
  Id?: string | undefined;
}

/**
 * The FPorts for the position information.
 *
 * @public
 */
export interface Positioning {
  /**
   * The Fport value.
   *
   * @public
   */
  ClockSync?: number | undefined;

  /**
   * The Fport value.
   *
   * @public
   */
  Stream?: number | undefined;

  /**
   * The Fport value.
   *
   * @public
   */
  Gnss?: number | undefined;
}

/**
 * List of FPort assigned for different LoRaWAN application packages to use
 *
 * @public
 */
export interface FPorts {
  /**
   * The Fport value.
   *
   * @public
   */
  Fuota?: number | undefined;

  /**
   * The Fport value.
   *
   * @public
   */
  Multicast?: number | undefined;

  /**
   * The Fport value.
   *
   * @public
   */
  ClockSync?: number | undefined;

  /**
   * FPort values for the GNSS, stream, and ClockSync functions of the positioning information.
   *
   * @public
   */
  Positioning?: Positioning | undefined;

  /**
   * Optional LoRaWAN application information, which can be used for geolocation.
   *
   * @public
   */
  Applications?: ApplicationConfig[] | undefined;
}

/**
 * OTAA device object for v1.0.x
 *
 * @public
 */
export interface OtaaV1_0_x {
  /**
   * The AppKey value.
   *
   * @public
   */
  AppKey?: string | undefined;

  /**
   * The AppEUI value. You specify this value when using LoRaWAN versions v1.0.2 or v1.0.3.
   *
   * @public
   */
  AppEui?: string | undefined;

  /**
   * The JoinEUI value. You specify this value instead of the AppEUI when using LoRaWAN version v1.0.4.
   *
   * @public
   */
  JoinEui?: string | undefined;

  /**
   * The GenAppKey value.
   *
   * @public
   */
  GenAppKey?: string | undefined;
}

/**
 * OTAA device object for v1.1
 *
 * @public
 */
export interface OtaaV1_1 {
  /**
   * The AppKey value.
   *
   * @public
   */
  AppKey?: string | undefined;

  /**
   * The NwkKey value.
   *
   * @public
   */
  NwkKey?: string | undefined;

  /**
   * The JoinEUI value.
   *
   * @public
   */
  JoinEui?: string | undefined;
}

/**
 * LoRaWAN object for create functions.
 *
 * @public
 */
export interface LoRaWANDevice {
  /**
   * The DevEUI value.
   *
   * @public
   */
  DevEui?: string | undefined;

  /**
   * The ID of the device profile for the new wireless device.
   *
   * @public
   */
  DeviceProfileId?: string | undefined;

  /**
   * The ID of the service profile.
   *
   * @public
   */
  ServiceProfileId?: string | undefined;

  /**
   * OTAA device object for v1.1 for create APIs
   *
   * @public
   */
  OtaaV1_1?: OtaaV1_1 | undefined;

  /**
   * OTAA device object for create APIs for v1.0.x
   *
   * @public
   */
  OtaaV1_0_x?: OtaaV1_0_x | undefined;

  /**
   * ABP device object for create APIs for v1.1
   *
   * @public
   */
  AbpV1_1?: AbpV1_1 | undefined;

  /**
   * LoRaWAN object for create APIs
   *
   * @public
   */
  AbpV1_0_x?: AbpV1_0_x | undefined;

  /**
   * List of FPort assigned for different LoRaWAN application packages to use
   *
   * @public
   */
  FPorts?: FPorts | undefined;
}

/**
 * The Positioning object of the Sidewalk device.
 *
 * @public
 */
export interface SidewalkPositioning {
  /**
   * The location destination name of the Sidewalk device.
   *
   * @public
   */
  DestinationName?: string | undefined;
}

/**
 * Sidewalk object for creating a wireless device.
 *
 * @public
 */
export interface SidewalkCreateWirelessDevice {
  /**
   * The ID of the Sidewalk device profile.
   *
   * @public
   */
  DeviceProfileId?: string | undefined;

  /**
   * The Positioning object of the Sidewalk device.
   *
   * @public
   */
  Positioning?: SidewalkPositioning | undefined;

  /**
   * The Sidewalk manufacturing serial number.
   *
   * @public
   */
  SidewalkManufacturingSn?: string | undefined;
}

/**
 * @public
 */
export interface CreateWirelessDeviceRequest {
  /**
   * The wireless device type.
   *
   * @public
   */
  Type: WirelessDeviceType | undefined;

  /**
   * The name of the new resource.
   *
   * > **Note:** The following special characters aren't accepted: `<>^#~$`
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The description of the new resource.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The name of the destination to assign to the new wireless device.
   *
   * @public
   */
  DestinationName: string | undefined;

  /**
   * Each resource must have a unique client request token. The client token is used to implement idempotency. It ensures that the request completes no more than one time. If you retry a request with the same token and the same parameters, the request will complete successfully. However, if you try to create a new resource using the same token but different parameters, an HTTP 409 conflict occurs. If you omit this value, AWS SDKs will automatically generate a unique client request. For more information about idempotency, see [Ensuring idempotency in Amazon EC2 API requests](https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html).
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * The device configuration information to use to create the wireless device.
   *
   * @public
   */
  LoRaWAN?: LoRaWANDevice | undefined;

  /**
   * The tags to attach to the new wireless device. Tags are metadata that you can use to manage a resource.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The integration status of the Device Location feature for LoRaWAN and Sidewalk devices.
   *
   * @public
   */
  Positioning?: PositioningConfigStatus | undefined;

  /**
   * The device configuration information to use to create the Sidewalk device.
   *
   * @public
   */
  Sidewalk?: SidewalkCreateWirelessDevice | undefined;
}

/**
 * @public
 */
export interface CreateWirelessDeviceResponse {
  /**
   * The Amazon Resource Name of the new resource.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The ID of the new wireless device.
   *
   * @public
   */
  Id?: string | undefined;
}

/**
 * LoRaWANGateway object.
 *
 * @public
 */
export interface LoRaWANGateway {
  /**
   * The gateway's EUI value.
   *
   * @public
   */
  GatewayEui?: string | undefined;

  /**
   * The frequency band (RFRegion) value.
   *
   * @public
   */
  RfRegion?: string | undefined;

  /**
   * A list of JoinEuiRange used by LoRa gateways to filter LoRa frames.
   *
   * @public
   */
  JoinEuiFilters?: string[][] | undefined;

  /**
   * A list of NetId values that are used by LoRa gateways to filter the uplink frames.
   *
   * @public
   */
  NetIdFilters?: string[] | undefined;

  /**
   * A list of integer indicating which sub bands are supported by LoRa gateway.
   *
   * @public
   */
  SubBands?: number[] | undefined;

  /**
   * Beaconing object information, which consists of the data rate and frequency parameters.
   *
   * @public
   */
  Beaconing?: Beaconing | undefined;

  /**
   * The MaxEIRP value.
   *
   * @public
   */
  MaxEirp?: number | undefined;
}

/**
 * @public
 */
export interface CreateWirelessGatewayRequest {
  /**
   * The name of the new resource.
   *
   * > **Note:** The following special characters aren't accepted: `<>^#~$`
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The description of the new resource.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The gateway configuration information to use to create the wireless gateway.
   *
   * @public
   */
  LoRaWAN: LoRaWANGateway | undefined;

  /**
   * The tags to attach to the new wireless gateway. Tags are metadata that you can use to manage a resource.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Each resource must have a unique client request token. The client token is used to implement idempotency. It ensures that the request completes no more than one time. If you retry a request with the same token and the same parameters, the request will complete successfully. However, if you try to create a new resource using the same token but different parameters, an HTTP 409 conflict occurs. If you omit this value, AWS SDKs will automatically generate a unique client request. For more information about idempotency, see [Ensuring idempotency in Amazon EC2 API requests](https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html).
   *
   * @public
   */
  ClientRequestToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateWirelessGatewayResponse {
  /**
   * The Amazon Resource Name of the new resource.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The ID of the new wireless gateway.
   *
   * @public
   */
  Id?: string | undefined;
}

/**
 * @public
 */
export interface CreateWirelessGatewayTaskRequest {
  /**
   * The ID of the resource to update.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The ID of the WirelessGatewayTaskDefinition.
   *
   * @public
   */
  WirelessGatewayTaskDefinitionId: string | undefined;
}

/**
 * @public
 */
export interface CreateWirelessGatewayTaskResponse {
  /**
   * The ID of the WirelessGatewayTaskDefinition.
   *
   * @public
   */
  WirelessGatewayTaskDefinitionId?: string | undefined;

  /**
   * The status of the request.
   *
   * @public
   */
  Status?: WirelessGatewayTaskStatus | undefined;
}

/**
 * LoRaWANGatewayVersion object.
 *
 * @public
 */
export interface LoRaWANGatewayVersion {
  /**
   * The version of the wireless gateway firmware.
   *
   * @public
   */
  PackageVersion?: string | undefined;

  /**
   * The model number of the wireless gateway.
   *
   * @public
   */
  Model?: string | undefined;

  /**
   * The basic station version of the wireless gateway.
   *
   * @public
   */
  Station?: string | undefined;
}

/**
 * LoRaWANUpdateGatewayTaskCreate object.
 *
 * @public
 */
export interface LoRaWANUpdateGatewayTaskCreate {
  /**
   * The signature used to verify the update firmware.
   *
   * @public
   */
  UpdateSignature?: string | undefined;

  /**
   * The CRC of the signature private key to check.
   *
   * @public
   */
  SigKeyCrc?: number | undefined;

  /**
   * The version of the gateways that should receive the update.
   *
   * @public
   */
  CurrentVersion?: LoRaWANGatewayVersion | undefined;

  /**
   * The firmware version to update the gateway to.
   *
   * @public
   */
  UpdateVersion?: LoRaWANGatewayVersion | undefined;
}

/**
 * UpdateWirelessGatewayTaskCreate object.
 *
 * @public
 */
export interface UpdateWirelessGatewayTaskCreate {
  /**
   * The link to the S3 bucket.
   *
   * @public
   */
  UpdateDataSource?: string | undefined;

  /**
   * The IAM role used to read data from the S3 bucket.
   *
   * @public
   */
  UpdateDataRole?: string | undefined;

  /**
   * The properties that relate to the LoRaWAN wireless gateway.
   *
   * @public
   */
  LoRaWAN?: LoRaWANUpdateGatewayTaskCreate | undefined;
}

/**
 * @public
 */
export interface CreateWirelessGatewayTaskDefinitionRequest {
  /**
   * Whether to automatically create tasks using this task definition for all gateways with the specified current version. If `false`, the task must me created by calling `CreateWirelessGatewayTask`.
   *
   * @public
   */
  AutoCreateTasks: boolean | undefined;

  /**
   * The name of the new resource.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Information about the gateways to update.
   *
   * @public
   */
  Update?: UpdateWirelessGatewayTaskCreate | undefined;

  /**
   * Each resource must have a unique client request token. The client token is used to implement idempotency. It ensures that the request completes no more than one time. If you retry a request with the same token and the same parameters, the request will complete successfully. However, if you try to create a new resource using the same token but different parameters, an HTTP 409 conflict occurs. If you omit this value, AWS SDKs will automatically generate a unique client request. For more information about idempotency, see [Ensuring idempotency in Amazon EC2 API requests](https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html).
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * The tags to attach to the specified resource. Tags are metadata that you can use to manage a resource.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateWirelessGatewayTaskDefinitionResponse {
  /**
   * The ID of the new wireless gateway task definition.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The Amazon Resource Name of the resource.
   *
   * @public
   */
  Arn?: string | undefined;
}

/**
 * The device attestation key (DAK) information.
 *
 * @public
 */
export interface DakCertificateMetadata {
  /**
   * The certificate ID for the DAK.
   *
   * @public
   */
  CertificateId: string | undefined;

  /**
   * The maximum number of signatures that the DAK can sign. A value of `-1` indicates that there's no device limit.
   *
   * @public
   */
  MaxAllowedSignature?: number | undefined;

  /**
   * Whether factory support has been enabled.
   *
   * @public
   */
  FactorySupport?: boolean | undefined;

  /**
   * The advertised product ID (APID) that's used for pre-production and production applications.
   *
   * @public
   */
  ApId?: string | undefined;

  /**
   * The device type ID that's used for prototyping applications.
   *
   * @public
   */
  DeviceTypeId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteDestinationRequest {
  /**
   * The name of the resource to delete.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteDestinationResponse {}

/**
 * @public
 */
export interface DeleteDeviceProfileRequest {
  /**
   * The ID of the resource to delete.
   *
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface DeleteDeviceProfileResponse {}

/**
 * @public
 */
export interface DeleteFuotaTaskRequest {
  /**
   * The ID of a FUOTA task.
   *
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface DeleteFuotaTaskResponse {}

/**
 * @public
 */
export interface DeleteMulticastGroupRequest {
  /**
   * The ID of the multicast group.
   *
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface DeleteMulticastGroupResponse {}

/**
 * @public
 */
export interface DeleteNetworkAnalyzerConfigurationRequest {
  /**
   * Name of the network analyzer configuration.
   *
   * @public
   */
  ConfigurationName: string | undefined;
}

/**
 * @public
 */
export interface DeleteNetworkAnalyzerConfigurationResponse {}

/**
 * @public
 */
export interface DeleteQueuedMessagesRequest {
  /**
   * The ID of a given wireless device for which downlink messages will be deleted.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * If message ID is `"*"`, it cleares the entire downlink queue for a given device, specified by the wireless device ID. Otherwise, the downlink message with the specified message ID will be deleted.
   *
   * @public
   */
  MessageId: string | undefined;

  /**
   * The wireless device type, which can be either Sidewalk or LoRaWAN.
   *
   * @public
   */
  WirelessDeviceType?: WirelessDeviceType | undefined;
}

/**
 * @public
 */
export interface DeleteQueuedMessagesResponse {}

/**
 * @public
 */
export interface DeleteServiceProfileRequest {
  /**
   * The ID of the resource to delete.
   *
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface DeleteServiceProfileResponse {}

/**
 * @public
 */
export interface DeleteWirelessDeviceRequest {
  /**
   * The ID of the resource to delete.
   *
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface DeleteWirelessDeviceResponse {}

/**
 * @public
 */
export interface DeleteWirelessDeviceImportTaskRequest {
  /**
   * The unique identifier of the import task to be deleted.
   *
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface DeleteWirelessDeviceImportTaskResponse {}

/**
 * @public
 */
export interface DeleteWirelessGatewayRequest {
  /**
   * The ID of the resource to delete.
   *
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface DeleteWirelessGatewayResponse {}

/**
 * @public
 */
export interface DeleteWirelessGatewayTaskRequest {
  /**
   * The ID of the resource to delete.
   *
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface DeleteWirelessGatewayTaskResponse {}

/**
 * @public
 */
export interface DeleteWirelessGatewayTaskDefinitionRequest {
  /**
   * The ID of the resource to delete.
   *
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface DeleteWirelessGatewayTaskDefinitionResponse {}

/**
 * @public
 */
export interface DeregisterWirelessDeviceRequest {
  /**
   * The identifier of the wireless device to deregister from AWS IoT Wireless.
   *
   * @public
   */
  Identifier: string | undefined;

  /**
   * The type of wireless device to deregister from AWS IoT Wireless, which can be `LoRaWAN` or `Sidewalk`.
   *
   * @public
   */
  WirelessDeviceType?: WirelessDeviceType | undefined;
}

/**
 * @public
 */
export interface DeregisterWirelessDeviceResponse {}

/**
 * Describes a destination.
 *
 * @public
 */
export interface Destinations {
  /**
   * The Amazon Resource Name of the resource.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The name of the resource.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The type of value in `Expression`.
   *
   * @public
   */
  ExpressionType?: ExpressionType | undefined;

  /**
   * The rule name or topic rule to send messages to.
   *
   * @public
   */
  Expression?: string | undefined;

  /**
   * The description of the resource.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The ARN of the IAM Role that authorizes the destination.
   *
   * @public
   */
  RoleArn?: string | undefined;
}

/**
 * Describes a device profile.
 *
 * @public
 */
export interface DeviceProfile {
  /**
   * The Amazon Resource Name of the resource.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The name of the resource.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The ID of the device profile.
   *
   * @public
   */
  Id?: string | undefined;
}

/**
 * `SidewalkEventNotificationConfigurations` object, which is the event configuration object for Sidewalk-related event topics.
 *
 * @public
 */
export interface SidewalkEventNotificationConfigurations {
  /**
   * Denotes whether the Amazon ID event topic is enabled or disabled.
   *
   * @public
   */
  AmazonIdEventTopic?: EventNotificationTopicStatus | undefined;
}

/**
 * Device registration state event configuration object for enabling and disabling relevant topics.
 *
 * @public
 */
export interface DeviceRegistrationStateEventConfiguration {
  /**
   * Device registration state event configuration object for enabling or disabling Sidewalk related event topics.
   *
   * @public
   */
  Sidewalk?: SidewalkEventNotificationConfigurations | undefined;

  /**
   * Denotes whether the wireless device ID device registration state event topic is enabled or disabled.
   *
   * @public
   */
  WirelessDeviceIdEventTopic?: EventNotificationTopicStatus | undefined;
}

/**
 * Sidewalk resource type event configuration object for enabling or disabling topic.
 *
 * @public
 */
export interface SidewalkResourceTypeEventConfiguration {
  /**
   * Denotes whether the wireless device join event topic is enabled or disabled.
   *
   * @public
   */
  WirelessDeviceEventTopic?: EventNotificationTopicStatus | undefined;
}

/**
 * Device registration state resource type event configuration object for enabling or disabling topic.
 *
 * @public
 */
export interface DeviceRegistrationStateResourceTypeEventConfiguration {
  /**
   * Device registration resource type state event configuration object for enabling or disabling Sidewalk related event topics.
   *
   * @public
   */
  Sidewalk?: SidewalkResourceTypeEventConfiguration | undefined;
}

/**
 * The required list of dimensions for the metric.
 *
 * @public
 */
export interface Dimension {
  /**
   * The name of the dimension.
   *
   * @public
   */
  name?: DimensionName | undefined;

  /**
   * The dimension's value.
   *
   * @public
   */
  value?: string | undefined;
}

/**
 * @public
 */
export interface DisassociateAwsAccountFromPartnerAccountRequest {
  /**
   * The partner account ID to disassociate from the AWS account.
   *
   * @public
   */
  PartnerAccountId: string | undefined;

  /**
   * The partner type.
   *
   * @public
   */
  PartnerType: PartnerType | undefined;
}

/**
 * @public
 */
export interface DisassociateAwsAccountFromPartnerAccountResponse {}

/**
 * @public
 */
export interface DisassociateMulticastGroupFromFuotaTaskRequest {
  /**
   * The ID of a FUOTA task.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The ID of the multicast group.
   *
   * @public
   */
  MulticastGroupId: string | undefined;
}

/**
 * @public
 */
export interface DisassociateMulticastGroupFromFuotaTaskResponse {}

/**
 * @public
 */
export interface DisassociateWirelessDeviceFromFuotaTaskRequest {
  /**
   * The ID of a FUOTA task.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The ID of the wireless device.
   *
   * @public
   */
  WirelessDeviceId: string | undefined;
}

/**
 * @public
 */
export interface DisassociateWirelessDeviceFromFuotaTaskResponse {}

/**
 * @public
 */
export interface DisassociateWirelessDeviceFromMulticastGroupRequest {
  /**
   * The ID of the multicast group.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The ID of the wireless device.
   *
   * @public
   */
  WirelessDeviceId: string | undefined;
}

/**
 * @public
 */
export interface DisassociateWirelessDeviceFromMulticastGroupResponse {}

/**
 * @public
 */
export interface DisassociateWirelessDeviceFromThingRequest {
  /**
   * The ID of the resource to update.
   *
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface DisassociateWirelessDeviceFromThingResponse {}

/**
 * @public
 */
export interface DisassociateWirelessGatewayFromCertificateRequest {
  /**
   * The ID of the resource to update.
   *
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface DisassociateWirelessGatewayFromCertificateResponse {}

/**
 * @public
 */
export interface DisassociateWirelessGatewayFromThingRequest {
  /**
   * The ID of the resource to update.
   *
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface DisassociateWirelessGatewayFromThingResponse {}

/**
 * Gateway list item object that specifies the frequency and list of gateways for which the downlink message should be sent.
 *
 * @public
 */
export interface GatewayListItem {
  /**
   * The ID of the wireless gateways that you want to add to the list of gateways when sending downlink messages.
   *
   * @public
   */
  GatewayId: string | undefined;

  /**
   * The frequency to use for the gateways when sending a downlink message to the wireless device.
   *
   * @public
   */
  DownlinkFrequency: number | undefined;
}

/**
 * Specify the list of gateways to which you want to send downlink data traffic when the wireless device is running in class B or class C mode.
 *
 * @public
 */
export interface ParticipatingGateways {
  /**
   * Indicates whether to send the downlink message in sequential mode or concurrent mode, or to use only the chosen gateways from the previous uplink message transmission.
   *
   * @public
   */
  DownlinkMode: DownlinkMode | undefined;

  /**
   * The list of gateways that you want to use for sending the downlink data traffic.
   *
   * @public
   */
  GatewayList: GatewayListItem[] | undefined;

  /**
   * The duration of time for which AWS IoT Core for LoRaWAN will wait before transmitting the payload to the next gateway.
   *
   * @public
   */
  TransmissionInterval: number | undefined;
}

/**
 * LoRaWAN router info.
 *
 * @public
 */
export interface LoRaWANSendDataToDevice {
  /**
   * The Fport value.
   *
   * @public
   */
  FPort?: number | undefined;

  /**
   * Choose the gateways that you want to use for the downlink data traffic when the wireless device is running in class B or class C mode.
   *
   * @public
   */
  ParticipatingGateways?: ParticipatingGateways | undefined;
}

/**
 * The message in the downlink queue.
 *
 * @public
 */
export interface DownlinkQueueMessage {
  /**
   * The message ID assigned by IoT Wireless to each downlink message, which helps identify the message.
   *
   * @public
   */
  MessageId?: string | undefined;

  /**
   * The transmit mode to use for sending data to the wireless device. This can be `0` for UM (unacknowledge mode) or `1` for AM (acknowledge mode).
   *
   * @public
   */
  TransmitMode?: number | undefined;

  /**
   * The time at which Iot Wireless received the downlink message.
   *
   * @public
   */
  ReceivedAt?: string | undefined;

  /**
   * LoRaWAN router info.
   *
   * @public
   */
  LoRaWAN?: LoRaWANSendDataToDevice | undefined;
}

/**
 * Object for LoRaWAN join resource type event configuration.
 *
 * @public
 */
export interface LoRaWANJoinEventNotificationConfigurations {
  /**
   * Denotes whether the Dev EUI join event topic is enabled or disabled.
   *
   * @public
   */
  DevEuiEventTopic?: EventNotificationTopicStatus | undefined;
}

/**
 * Join event configuration object for enabling or disabling topic.
 *
 * @public
 */
export interface JoinEventConfiguration {
  /**
   * Join event configuration object for enabling or disabling LoRaWAN related event topics.
   *
   * @public
   */
  LoRaWAN?: LoRaWANJoinEventNotificationConfigurations | undefined;

  /**
   * Denotes whether the wireless device ID join event topic is enabled or disabled.
   *
   * @public
   */
  WirelessDeviceIdEventTopic?: EventNotificationTopicStatus | undefined;
}

/**
 * Message delivery status event configuration object for enabling and disabling relevant topics.
 *
 * @public
 */
export interface MessageDeliveryStatusEventConfiguration {
  /**
   * `SidewalkEventNotificationConfigurations` object, which is the event configuration object for Sidewalk-related event topics.
   *
   * @public
   */
  Sidewalk?: SidewalkEventNotificationConfigurations | undefined;

  /**
   * Denotes whether the wireless device ID message delivery status event topic is enabled or disabled.
   *
   * @public
   */
  WirelessDeviceIdEventTopic?: EventNotificationTopicStatus | undefined;
}

/**
 * Proximity event configuration object for enabling and disabling relevant topics.
 *
 * @public
 */
export interface ProximityEventConfiguration {
  /**
   * Proximity event configuration object for enabling or disabling Sidewalk related event topics.
   *
   * @public
   */
  Sidewalk?: SidewalkEventNotificationConfigurations | undefined;

  /**
   * Denotes whether the wireless device ID proximity event topic is enabled or disabled.
   *
   * @public
   */
  WirelessDeviceIdEventTopic?: EventNotificationTopicStatus | undefined;
}

/**
 * Object of all event configurations and the status of the event topics.
 *
 * @public
 */
export interface EventNotificationItemConfigurations {
  /**
   * Device registration state event configuration for an event configuration item.
   *
   * @public
   */
  DeviceRegistrationState?: DeviceRegistrationStateEventConfiguration | undefined;

  /**
   * Proximity event configuration for an event configuration item.
   *
   * @public
   */
  Proximity?: ProximityEventConfiguration | undefined;

  /**
   * Join event configuration for an event configuration item.
   *
   * @public
   */
  Join?: JoinEventConfiguration | undefined;

  /**
   * Connection status event configuration for an event configuration item.
   *
   * @public
   */
  ConnectionStatus?: ConnectionStatusEventConfiguration | undefined;

  /**
   * Message delivery status event configuration for an event configuration item.
   *
   * @public
   */
  MessageDeliveryStatus?: MessageDeliveryStatusEventConfiguration | undefined;
}

/**
 * Event configuration object for a single resource.
 *
 * @public
 */
export interface EventConfigurationItem {
  /**
   * Resource identifier opted in for event messaging.
   *
   * @public
   */
  Identifier?: string | undefined;

  /**
   * Identifier type of the particular resource identifier for event configuration.
   *
   * @public
   */
  IdentifierType?: IdentifierType | undefined;

  /**
   * Partner type of the resource if the identifier type is PartnerAccountId.
   *
   * @public
   */
  PartnerType?: EventNotificationPartnerType | undefined;

  /**
   * Object of all event configurations and the status of the event topics.
   *
   * @public
   */
  Events?: EventNotificationItemConfigurations | undefined;
}

/**
 * A FUOTA task.
 *
 * @public
 */
export interface FuotaTask {
  /**
   * The ID of a FUOTA task.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The arn of a FUOTA task.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The name of a FUOTA task.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * The log options for a FUOTA task event and can be used to set log levels for a specific FUOTA task event.
 *
 * For a LoRaWAN FUOTA task, the only possible event for a log message is `Fuota`.
 *
 * @public
 */
export interface FuotaTaskEventLogOption {
  /**
   * The event for a log message, if the log message is tied to a FUOTA task.
   *
   * @public
   */
  Event: FuotaTaskEvent | undefined;

  /**
   * The log level for a log message. The log levels can be disabled, or set to `ERROR` to display less verbose logs containing only error information, or to `INFO` for more detailed logs.
   *
   * @public
   */
  LogLevel: LogLevel | undefined;
}

/**
 * The log options for FUOTA tasks and can be used to set log levels for a specific type of FUOTA task.
 *
 * @public
 */
export interface FuotaTaskLogOption {
  /**
   * The FUOTA task type.
   *
   * @public
   */
  Type: FuotaTaskType | undefined;

  /**
   * The log level for a log message. The log levels can be disabled, or set to `ERROR` to display less verbose logs containing only error information, or to `INFO` for more detailed logs.
   *
   * @public
   */
  LogLevel: LogLevel | undefined;

  /**
   * The list of FUOTA task event log options.
   *
   * @public
   */
  Events?: FuotaTaskEventLogOption[] | undefined;
}

/**
 * @public
 */
export interface GetDestinationRequest {
  /**
   * The name of the resource to get.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface GetDestinationResponse {
  /**
   * The Amazon Resource Name of the resource.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The name of the resource.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The rule name or topic rule to send messages to.
   *
   * @public
   */
  Expression?: string | undefined;

  /**
   * The type of value in `Expression`.
   *
   * @public
   */
  ExpressionType?: ExpressionType | undefined;

  /**
   * The description of the resource.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The ARN of the IAM Role that authorizes the destination.
   *
   * @public
   */
  RoleArn?: string | undefined;
}

/**
 * @public
 */
export interface GetDeviceProfileRequest {
  /**
   * The ID of the resource to get.
   *
   * @public
   */
  Id: string | undefined;
}

/**
 * Gets information about a Sidewalk device profile.
 *
 * @public
 */
export interface SidewalkGetDeviceProfile {
  /**
   * The Sidewalk application server public key.
   *
   * @public
   */
  ApplicationServerPublicKey?: string | undefined;

  /**
   * Gets information about the certification status of a Sidewalk device profile.
   *
   * @public
   */
  QualificationStatus?: boolean | undefined;

  /**
   * The DAK certificate information of the Sidewalk device profile.
   *
   * @public
   */
  DakCertificateMetadata?: DakCertificateMetadata[] | undefined;
}

/**
 * @public
 */
export interface GetDeviceProfileResponse {
  /**
   * The Amazon Resource Name of the resource.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The name of the resource.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The ID of the device profile.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * Information about the device profile.
   *
   * @public
   */
  LoRaWAN?: LoRaWANDeviceProfile | undefined;

  /**
   * Information about the Sidewalk parameters in the device profile.
   *
   * @public
   */
  Sidewalk?: SidewalkGetDeviceProfile | undefined;
}

/**
 * @public
 */
export interface GetEventConfigurationByResourceTypesRequest {}

/**
 * Object for LoRaWAN join resource type event configuration.
 *
 * @public
 */
export interface LoRaWANJoinResourceTypeEventConfiguration {
  /**
   * Denotes whether the wireless device join event topic is enabled or disabled.
   *
   * @public
   */
  WirelessDeviceEventTopic?: EventNotificationTopicStatus | undefined;
}

/**
 * Join resource type event configuration object for enabling or disabling topic.
 *
 * @public
 */
export interface JoinResourceTypeEventConfiguration {
  /**
   * Join resource type event configuration object for enabling or disabling LoRaWAN related event topics.
   *
   * @public
   */
  LoRaWAN?: LoRaWANJoinResourceTypeEventConfiguration | undefined;
}

/**
 * Message delivery status resource type event configuration object for enabling or disabling relevant topic.
 *
 * @public
 */
export interface MessageDeliveryStatusResourceTypeEventConfiguration {
  /**
   * Sidewalk resource type event configuration object for enabling or disabling topic.
   *
   * @public
   */
  Sidewalk?: SidewalkResourceTypeEventConfiguration | undefined;
}

/**
 * Proximity resource type event configuration object for enabling or disabling topic.
 *
 * @public
 */
export interface ProximityResourceTypeEventConfiguration {
  /**
   * Proximity resource type event configuration object for enabling and disabling wireless device topic.
   *
   * @public
   */
  Sidewalk?: SidewalkResourceTypeEventConfiguration | undefined;
}

/**
 * @public
 */
export interface GetEventConfigurationByResourceTypesResponse {
  /**
   * Resource type event configuration for the device registration state event.
   *
   * @public
   */
  DeviceRegistrationState?: DeviceRegistrationStateResourceTypeEventConfiguration | undefined;

  /**
   * Resource type event configuration for the proximity event.
   *
   * @public
   */
  Proximity?: ProximityResourceTypeEventConfiguration | undefined;

  /**
   * Resource type event configuration for the join event.
   *
   * @public
   */
  Join?: JoinResourceTypeEventConfiguration | undefined;

  /**
   * Resource type event configuration for the connection status event.
   *
   * @public
   */
  ConnectionStatus?: ConnectionStatusResourceTypeEventConfiguration | undefined;

  /**
   * Resource type event configuration object for the message delivery status event.
   *
   * @public
   */
  MessageDeliveryStatus?: MessageDeliveryStatusResourceTypeEventConfiguration | undefined;
}

/**
 * @public
 */
export interface GetFuotaTaskRequest {
  /**
   * The ID of a FUOTA task.
   *
   * @public
   */
  Id: string | undefined;
}

/**
 * The LoRaWAN information returned from getting a FUOTA task.
 *
 * @public
 */
export interface LoRaWANFuotaTaskGetInfo {
  /**
   * The frequency band (RFRegion) value.
   *
   * @public
   */
  RfRegion?: string | undefined;

  /**
   * Start time of a FUOTA task.
   *
   * @public
   */
  StartTime?: Date | undefined;
}

/**
 * @public
 */
export interface GetFuotaTaskResponse {
  /**
   * The arn of a FUOTA task.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The ID of a FUOTA task.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The status of a FUOTA task.
   *
   * @public
   */
  Status?: FuotaTaskStatus | undefined;

  /**
   * The name of a FUOTA task.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The description of the new resource.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The LoRaWAN information returned from getting a FUOTA task.
   *
   * @public
   */
  LoRaWAN?: LoRaWANFuotaTaskGetInfo | undefined;

  /**
   * The S3 URI points to a firmware update image that is to be used with a FUOTA task.
   *
   * @public
   */
  FirmwareUpdateImage?: string | undefined;

  /**
   * The firmware update role that is to be used with a FUOTA task.
   *
   * @public
   */
  FirmwareUpdateRole?: string | undefined;

  /**
   * Created at timestamp for the resource.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The percentage of the added fragments that are redundant. For example, if the size of the firmware image file is 100 bytes and the fragment size is 10 bytes, with `RedundancyPercent` set to 50(%), the final number of encoded fragments is (100 / 10) + (100 / 10 * 50%) = 15.
   *
   * @public
   */
  RedundancyPercent?: number | undefined;

  /**
   * The size of each fragment in bytes. This parameter is supported only for FUOTA tasks with multicast groups.
   *
   * @public
   */
  FragmentSizeBytes?: number | undefined;

  /**
   * The interval for sending fragments in milliseconds, rounded to the nearest second.
   *
   * > **Note:** This interval only determines the timing for when the Cloud sends down the fragments to yor device. There can be a delay for when your device will receive these fragments. This delay depends on the device's class and the communication delay with the cloud.
   *
   * @public
   */
  FragmentIntervalMS?: number | undefined;

  /**
   * The descriptor is the metadata about the file that is transferred to the device using FUOTA, such as the software version. It is a binary field encoded in base64.
   *
   * @public
   */
  Descriptor?: string | undefined;
}

/**
 * @public
 */
export interface GetLogLevelsByResourceTypesRequest {}

/**
 * The log options for a wireless device event and can be used to set log levels for a specific wireless device event.
 *
 * For a LoRaWAN device, possible events for a log messsage are: `Join`, `Rejoin`, `Downlink_Data`, and `Uplink_Data`. For a Sidewalk device, possible events for a log message are `Registration`, `Downlink_Data`, and `Uplink_Data`.
 *
 * @public
 */
export interface WirelessDeviceEventLogOption {
  /**
   * The event for a log message, if the log message is tied to a wireless device.
   *
   * @public
   */
  Event: WirelessDeviceEvent | undefined;

  /**
   * The log level for a log message. The log levels can be disabled, or set to `ERROR` to display less verbose logs containing only error information, or to `INFO` for more detailed logs.
   *
   * @public
   */
  LogLevel: LogLevel | undefined;
}

/**
 * The log options for wireless devices and can be used to set log levels for a specific type of wireless device.
 *
 * @public
 */
export interface WirelessDeviceLogOption {
  /**
   * The wireless device type.
   *
   * @public
   */
  Type: WirelessDeviceType | undefined;

  /**
   * The log level for a log message. The log levels can be disabled, or set to `ERROR` to display less verbose logs containing only error information, or to `INFO` for more detailed logs.
   *
   * @public
   */
  LogLevel: LogLevel | undefined;

  /**
   * The list of wireless device event log options.
   *
   * @public
   */
  Events?: WirelessDeviceEventLogOption[] | undefined;
}

/**
 * The log options for a wireless gateway event and can be used to set log levels for a specific wireless gateway event.
 *
 * For a LoRaWAN gateway, possible events for a log message are `CUPS_Request` and `Certificate`.
 *
 * @public
 */
export interface WirelessGatewayEventLogOption {
  /**
   * The event for a log message, if the log message is tied to a wireless gateway.
   *
   * @public
   */
  Event: WirelessGatewayEvent | undefined;

  /**
   * The log level for a log message. The log levels can be disabled, or set to `ERROR` to display less verbose logs containing only error information, or to `INFO` for more detailed logs.
   *
   * @public
   */
  LogLevel: LogLevel | undefined;
}

/**
 * The log options for wireless gateways and can be used to set log levels for a specific type of wireless gateway.
 *
 * @public
 */
export interface WirelessGatewayLogOption {
  /**
   * The wireless gateway type.
   *
   * @public
   */
  Type: WirelessGatewayType | undefined;

  /**
   * The log level for a log message. The log levels can be disabled, or set to `ERROR` to display less verbose logs containing only error information, or to `INFO` for more detailed logs.
   *
   * @public
   */
  LogLevel: LogLevel | undefined;

  /**
   * The list of wireless gateway event log options.
   *
   * @public
   */
  Events?: WirelessGatewayEventLogOption[] | undefined;
}

/**
 * @public
 */
export interface GetLogLevelsByResourceTypesResponse {
  /**
   * The log level for a log message. The log levels can be disabled, or set to `ERROR` to display less verbose logs containing only error information, or to `INFO` for more detailed logs.
   *
   * @public
   */
  DefaultLogLevel?: LogLevel | undefined;

  /**
   * The list of wireless gateway log options.
   *
   * @public
   */
  WirelessGatewayLogOptions?: WirelessGatewayLogOption[] | undefined;

  /**
   * The list of wireless device log options.
   *
   * @public
   */
  WirelessDeviceLogOptions?: WirelessDeviceLogOption[] | undefined;

  /**
   * The list of FUOTA task log options.
   *
   * @public
   */
  FuotaTaskLogOptions?: FuotaTaskLogOption[] | undefined;
}

/**
 * @public
 */
export interface GetMetricConfigurationRequest {}

/**
 * The configuration of summary metrics.
 *
 * @public
 */
export interface SummaryMetricConfiguration {
  /**
   * The status of the configuration of summary metrics.
   *
   * @public
   */
  Status?: SummaryMetricConfigurationStatus | undefined;
}

/**
 * @public
 */
export interface GetMetricConfigurationResponse {
  /**
   * The configuration status of the AWS account for summary metric aggregation.
   *
   * @public
   */
  SummaryMetric?: SummaryMetricConfiguration | undefined;
}

/**
 * The summary metric query object.
 *
 * @public
 */
export interface SummaryMetricQuery {
  /**
   * The id of the summary metric query.
   *
   * @public
   */
  QueryId?: string | undefined;

  /**
   * The name of the metric.
   *
   * @public
   */
  MetricName?: MetricName | undefined;

  /**
   * The dimensions of the summary metric.
   *
   * @public
   */
  Dimensions?: Dimension[] | undefined;

  /**
   * The aggregation period of the summary metric.
   *
   * @public
   */
  AggregationPeriod?: AggregationPeriod | undefined;

  /**
   * The start timestamp for the summary metric query.
   *
   * @public
   */
  StartTimestamp?: Date | undefined;

  /**
   * The end timestamp for the summary metric query.
   *
   * @public
   */
  EndTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface GetMetricsRequest {
  /**
   * The list of queries to retrieve the summary metrics.
   *
   * @public
   */
  SummaryMetricQueries?: SummaryMetricQuery[] | undefined;
}

/**
 * The aggregated values of the metric.
 *
 * @public
 */
export interface MetricQueryValue {
  /**
   * The minimum of the values of all data points collected during the aggregation period.
   *
   * @public
   */
  Min?: number | undefined;

  /**
   * The maximum of the values of all the data points collected during the aggregation period.
   *
   * @public
   */
  Max?: number | undefined;

  /**
   * The sum of the values of all data points collected during the aggregation period.
   *
   * @public
   */
  Sum?: number | undefined;

  /**
   * The average of the values of all data points collected during the aggregation period.
   *
   * @public
   */
  Avg?: number | undefined;

  /**
   * The standard deviation of the values of all data points collected during the aggregation period.
   *
   * @public
   */
  Std?: number | undefined;

  /**
   * The 90th percentile of the values of all data points collected during the aggregation period.
   *
   * @public
   */
  P90?: number | undefined;
}

/**
 * The result of the summary metrics aggregation operation.
 *
 * @public
 */
export interface SummaryMetricQueryResult {
  /**
   * The ID of the summary metric results query operation.
   *
   * @public
   */
  QueryId?: string | undefined;

  /**
   * The status of the summary metric query result.
   *
   * @public
   */
  QueryStatus?: MetricQueryStatus | undefined;

  /**
   * The error message for the summary metric query result.
   *
   * @public
   */
  Error?: string | undefined;

  /**
   * The name of the summary metric query result.
   *
   * @public
   */
  MetricName?: MetricName | undefined;

  /**
   * The dimensions of the metric.
   *
   * @public
   */
  Dimensions?: Dimension[] | undefined;

  /**
   * The aggregation period of the metric.
   *
   * @public
   */
  AggregationPeriod?: AggregationPeriod | undefined;

  /**
   * The start timestamp for the summary metric query.
   *
   * @public
   */
  StartTimestamp?: Date | undefined;

  /**
   * The end timestamp for the summary metric query.
   *
   * @public
   */
  EndTimestamp?: Date | undefined;

  /**
   * The timestamp of each aggregation result.
   *
   * @public
   */
  Timestamps?: Date[] | undefined;

  /**
   * The list of aggregated summary metric query results.
   *
   * @public
   */
  Values?: MetricQueryValue[] | undefined;

  /**
   * The units of measurement to be used for interpreting the aggregation result.
   *
   * @public
   */
  Unit?: string | undefined;
}

/**
 * @public
 */
export interface GetMetricsResponse {
  /**
   * The list of summary metrics that were retrieved.
   *
   * @public
   */
  SummaryMetricQueryResults?: SummaryMetricQueryResult[] | undefined;
}

/**
 * @public
 */
export interface GetMulticastGroupRequest {
  /**
   * The ID of the multicast group.
   *
   * @public
   */
  Id: string | undefined;
}

/**
 * The LoRaWAN information that is to be returned from getting multicast group information.
 *
 * @public
 */
export interface LoRaWANMulticastGet {
  /**
   * Supported RfRegions
   *
   * @public
   */
  RfRegion?: SupportedRfRegion | undefined;

  /**
   * DlClass for LoRaWAM, valid values are ClassB and ClassC.
   *
   * @public
   */
  DlClass?: DlClass | undefined;

  /**
   * Number of devices that are requested to be associated with the multicast group.
   *
   * @public
   */
  NumberOfDevicesRequested?: number | undefined;

  /**
   * Number of devices that are associated to the multicast group.
   *
   * @public
   */
  NumberOfDevicesInGroup?: number | undefined;

  /**
   * Specify the list of gateways to which you want to send the multicast downlink messages. The multicast message will be sent to each gateway in the list, with the transmission interval as the time interval between each message.
   *
   * @public
   */
  ParticipatingGateways?: ParticipatingGatewaysMulticast | undefined;

  /**
   * The default session parameters for the multicast group.
   *
   * @public
   */
  DefaultSessionParameters?: DefaultSessionParametersMulticast | undefined;
}

/**
 * @public
 */
export interface GetMulticastGroupResponse {
  /**
   * The arn of the multicast group.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The ID of the multicast group.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The name of the multicast group.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The description of the new resource.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The status of the multicast group.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * The LoRaWAN information that is to be returned from getting multicast group information.
   *
   * @public
   */
  LoRaWAN?: LoRaWANMulticastGet | undefined;

  /**
   * Created at timestamp for the resource.
   *
   * @public
   */
  CreatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetMulticastGroupSessionRequest {
  /**
   * The ID of the multicast group.
   *
   * @public
   */
  Id: string | undefined;
}

/**
 * The LoRaWAN information used with the multicast session.
 *
 * @public
 */
export interface LoRaWANMulticastSession {
  /**
   * Downlink data rate.
   *
   * @public
   */
  DlDr?: number | undefined;

  /**
   * Downlink frequency.
   *
   * @public
   */
  DlFreq?: number | undefined;

  /**
   * Timestamp of when the multicast group session is to start.
   *
   * @public
   */
  SessionStartTime?: Date | undefined;

  /**
   * How long before a multicast group session is to timeout.
   *
   * > **Note:** We recommend that you provide a timeout value that is a power-of-two (such as 64, 128, 256). If a non-power-of-two value is provided, it will automatically be rounded up to the next supported power-of-two within the allowed range.
   *
   * @public
   */
  SessionTimeout?: number | undefined;

  /**
   * The PingSlotPeriod value.
   *
   * @public
   */
  PingSlotPeriod?: number | undefined;
}

/**
 * @public
 */
export interface GetMulticastGroupSessionResponse {
  /**
   * The LoRaWAN information used with the multicast session.
   *
   * @public
   */
  LoRaWAN?: LoRaWANMulticastSession | undefined;
}

/**
 * @public
 */
export interface GetNetworkAnalyzerConfigurationRequest {
  /**
   * Name of the network analyzer configuration.
   *
   * @public
   */
  ConfigurationName: string | undefined;
}

/**
 * @public
 */
export interface GetNetworkAnalyzerConfigurationResponse {
  /**
   * Trace content for your wireless devices, gateways, and multicast groups.
   *
   * @public
   */
  TraceContent?: TraceContent | undefined;

  /**
   * List of wireless device resources that have been added to the network analyzer configuration.
   *
   * @public
   */
  WirelessDevices?: string[] | undefined;

  /**
   * List of wireless gateway resources that have been added to the network analyzer configuration.
   *
   * @public
   */
  WirelessGateways?: string[] | undefined;

  /**
   * The description of the new resource.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The Amazon Resource Name of the new resource.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * Name of the network analyzer configuration.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * List of multicast group resources that have been added to the network analyzer configuration.
   *
   * @public
   */
  MulticastGroups?: string[] | undefined;
}

/**
 * @public
 */
export interface GetPartnerAccountRequest {
  /**
   * The partner account ID to disassociate from the AWS account.
   *
   * @public
   */
  PartnerAccountId: string | undefined;

  /**
   * The partner type.
   *
   * @public
   */
  PartnerType: PartnerType | undefined;
}

/**
 * Information about a Sidewalk account.
 *
 * @public
 */
export interface SidewalkAccountInfoWithFingerprint {
  /**
   * The Sidewalk Amazon ID.
   *
   * @public
   */
  AmazonId?: string | undefined;

  /**
   * The fingerprint of the Sidewalk application server private key.
   *
   * @public
   */
  Fingerprint?: string | undefined;

  /**
   * The Amazon Resource Name of the resource.
   *
   * @public
   */
  Arn?: string | undefined;
}

/**
 * @public
 */
export interface GetPartnerAccountResponse {
  /**
   * The Sidewalk account credentials.
   *
   * @public
   */
  Sidewalk?: SidewalkAccountInfoWithFingerprint | undefined;

  /**
   * Whether the partner account is linked to the AWS account.
   *
   * @public
   */
  AccountLinked?: boolean | undefined;
}

/**
 * @deprecated This operation is no longer supported.
 * @public
 */
export interface GetPositionRequest {
  /**
   * Resource identifier used to retrieve the position information.
   *
   * @public
   */
  ResourceIdentifier: string | undefined;

  /**
   * Resource type of the resource for which position information is retrieved.
   *
   * @public
   */
  ResourceType: PositionResourceType | undefined;
}

/**
 * @deprecated This operation is no longer supported.
 * @public
 */
export interface GetPositionResponse {
  /**
   * The position information of the resource.
   *
   * @public
   */
  Position?: number[] | undefined;

  /**
   * The accuracy of the estimated position in meters. An empty value indicates that no position data is available. A value of ‘0.0’ value indicates that position data is available. This data corresponds to the position information that you specified instead of the position computed by solver.
   *
   * @public
   */
  Accuracy?: Accuracy | undefined;

  /**
   * The type of solver used to identify the position of the resource.
   *
   * @public
   */
  SolverType?: PositionSolverType | undefined;

  /**
   * The vendor of the positioning solver.
   *
   * @public
   */
  SolverProvider?: PositionSolverProvider | undefined;

  /**
   * The version of the positioning solver.
   *
   * @public
   */
  SolverVersion?: string | undefined;

  /**
   * The timestamp at which the device's position was determined.
   *
   * @public
   */
  Timestamp?: string | undefined;
}

/**
 * @deprecated This operation is no longer supported.
 * @public
 */
export interface GetPositionConfigurationRequest {
  /**
   * Resource identifier used in a position configuration.
   *
   * @public
   */
  ResourceIdentifier: string | undefined;

  /**
   * Resource type of the resource for which position configuration is retrieved.
   *
   * @public
   */
  ResourceType: PositionResourceType | undefined;
}

/**
 * Details of the Semtech GNSS solver object.
 *
 * @public
 */
export interface SemtechGnssDetail {
  /**
   * The vendor of the solver object.
   *
   * @public
   */
  Provider?: PositionSolverProvider | undefined;

  /**
   * The type of positioning solver used.
   *
   * @public
   */
  Type?: PositionSolverType | undefined;

  /**
   * The status indicating whether the solver is enabled.
   *
   * @public
   */
  Status?: PositionConfigurationStatus | undefined;

  /**
   * Whether forward error correction is enabled.
   *
   * @public
   */
  Fec?: PositionConfigurationFec | undefined;
}

/**
 * The wrapper for position solver details.
 *
 * @public
 */
export interface PositionSolverDetails {
  /**
   * The Semtech GNSS solver object details.
   *
   * @public
   */
  SemtechGnss?: SemtechGnssDetail | undefined;
}

/**
 * @deprecated This operation is no longer supported.
 * @public
 */
export interface GetPositionConfigurationResponse {
  /**
   * The wrapper for the solver configuration details object.
   *
   * @public
   */
  Solvers?: PositionSolverDetails | undefined;

  /**
   * The position data destination that describes the AWS IoT rule that processes the device's position data for use by AWS IoT Core for LoRaWAN.
   *
   * @public
   */
  Destination?: string | undefined;
}

/**
 * Global navigation satellite system (GNSS) object used for positioning.
 *
 * @public
 */
export interface Gnss {
  /**
   * Payload that contains the GNSS scan result, or NAV message, in hexadecimal notation.
   *
   * @public
   */
  Payload: string | undefined;

  /**
   * Optional parameter that gives an estimate of the time when the GNSS scan information is taken, in seconds GPS time (GPST). If capture time is not specified, the local server time is used.
   *
   * @public
   */
  CaptureTime?: number | undefined;

  /**
   * Optional value that gives the capture time estimate accuracy, in seconds. If capture time accuracy is not specified, default value of 300 is used.
   *
   * @public
   */
  CaptureTimeAccuracy?: number | undefined;

  /**
   * Optional assistance position information, specified using latitude and longitude values in degrees. The coordinates are inside the WGS84 reference frame.
   *
   * @public
   */
  AssistPosition?: number[] | undefined;

  /**
   * Optional assistance altitude, which is the altitude of the device at capture time, specified in meters above the WGS84 reference ellipsoid.
   *
   * @public
   */
  AssistAltitude?: number | undefined;

  /**
   * Optional parameter that forces 2D solve, which modifies the positioning algorithm to a 2D solution problem. When this parameter is specified, the assistance altitude should have an accuracy of at least 10 meters.
   *
   * @public
   */
  Use2DSolver?: boolean | undefined;
}

/**
 * A single GNSS scan capture containing the scan payload and optional capture time.
 *
 * @public
 */
export interface GnssCapture {
  /**
   * Payload that contains the GNSS scan result, or NAV message, in hexadecimal notation.
   *
   * @public
   */
  Payload: string | undefined;

  /**
   * Optional parameter that gives an estimate of the time when the GNSS scan information is taken, in seconds GPS time (GPST). If capture time is not specified, the local server time is used.
   *
   * @public
   */
  CaptureTime?: number | undefined;
}

/**
 * Global navigation satellite system (GNSS) multi-frame object used for positioning. Contains multiple GNSS scan captures that are combined by the solver.
 *
 * @public
 */
export interface GnssMultiFrame {
  /**
   * List of GNSS scan captures. Each capture contains a payload from a single GNSS scan. The number of captures must be 2, 4, 8, 16, or 32.
   *
   * @public
   */
  Captures: GnssCapture[] | undefined;

  /**
   * Optional value that gives the capture time estimate accuracy, in seconds. If capture time accuracy is not specified, default value of 300 is used.
   *
   * @public
   */
  CaptureTimeAccuracy?: number | undefined;

  /**
   * Optional assistance position information, specified using latitude and longitude values in degrees. The coordinates are inside the WGS84 reference frame.
   *
   * @public
   */
  AssistPosition?: number[] | undefined;

  /**
   * Optional assistance altitude, which is the altitude of the device at capture time, specified in meters above the WGS84 reference ellipsoid. This parameter is required when Use2DSolver is enabled.
   *
   * @public
   */
  AssistAltitude?: number | undefined;

  /**
   * Optional parameter that forces 2D solve, which modifies the positioning algorithm to a 2D solution problem. When this parameter is specified, the assistance altitude should have an accuracy of at least 10 meters.
   *
   * @public
   */
  Use2DSolver?: boolean | undefined;
}

/**
 * IP address used for resolving device location.
 *
 * @public
 */
export interface Ip {
  /**
   * IP address information.
   *
   * @public
   */
  IpAddress: string | undefined;
}

/**
 * Wi-Fi access point.
 *
 * @public
 */
export interface WiFiAccessPoint {
  /**
   * Wi-Fi MAC Address.
   *
   * @public
   */
  MacAddress: string | undefined;

  /**
   * Received signal strength (dBm) of the WLAN measurement data.
   *
   * @public
   */
  Rss: number | undefined;
}

/**
 * @public
 */
export interface GetPositionEstimateRequest {
  /**
   * Retrieves an estimated device position by resolving WLAN measurement data. The position is resolved using HERE's Wi-Fi based solver.
   *
   * @public
   */
  WiFiAccessPoints?: WiFiAccessPoint[] | undefined;

  /**
   * Retrieves an estimated device position by resolving measurement data from cellular radio towers. The position is resolved using HERE's cellular-based solver.
   *
   * @public
   */
  CellTowers?: CellTowers | undefined;

  /**
   * Retrieves an estimated device position by resolving the IP address information from the device. The position is resolved using MaxMind's IP-based solver.
   *
   * @public
   */
  Ip?: Ip | undefined;

  /**
   * Retrieves an estimated device position by resolving the global navigation satellite system (GNSS) scan data. The position is resolved using the GNSS solver powered by LoRa Cloud. This field is mutually exclusive with the GnssMultiFrame field.
   *
   * @public
   */
  Gnss?: Gnss | undefined;

  /**
   * Retrieves an estimated device position by resolving multiple global navigation satellite system (GNSS) scan captures. The position is resolved using the multi-frame GNSS solver powered by LoRa Cloud. This field is mutually exclusive with the Gnss field.
   *
   * @public
   */
  GnssMultiFrame?: GnssMultiFrame | undefined;

  /**
   * Optional information that specifies the time when the position information will be resolved. It uses the Unix timestamp format. If not specified, the time at which the request was received will be used.
   *
   * @public
   */
  Timestamp?: Date | undefined;

  /**
   * Optional configuration for customizing position measurement data.
   *
   * @public
   */
  AdvancedConfiguration?: AdvancedConfiguration | undefined;
}

/**
 * @public
 */
export interface GetPositionEstimateResponse {
  /**
   * The position information of the resource, displayed as a JSON payload. The payload is of type blob and uses the [GeoJSON](https://geojson.org/) format, which a format that's used to encode geographic data structures. A sample payload contains the timestamp information, the WGS84 coordinates of the location, and the accuracy and confidence level. For more information and examples, see [Resolve device location (console)](https://docs.aws.amazon.com/iot/latest/developerguide/location-resolve-console.html).
   *
   * @public
   */
  GeoJsonPayload?: Uint8Array | undefined;
}

/**
 * @public
 */
export interface GetResourceEventConfigurationRequest {
  /**
   * Resource identifier to opt in for event messaging.
   *
   * @public
   */
  Identifier: string | undefined;

  /**
   * Identifier type of the particular resource identifier for event configuration.
   *
   * @public
   */
  IdentifierType: IdentifierType | undefined;

  /**
   * Partner type of the resource if the identifier type is `PartnerAccountId`.
   *
   * @public
   */
  PartnerType?: EventNotificationPartnerType | undefined;
}

/**
 * @public
 */
export interface GetResourceEventConfigurationResponse {
  /**
   * Event configuration for the device registration state event.
   *
   * @public
   */
  DeviceRegistrationState?: DeviceRegistrationStateEventConfiguration | undefined;

  /**
   * Event configuration for the proximity event.
   *
   * @public
   */
  Proximity?: ProximityEventConfiguration | undefined;

  /**
   * Event configuration for the join event.
   *
   * @public
   */
  Join?: JoinEventConfiguration | undefined;

  /**
   * Event configuration for the connection status event.
   *
   * @public
   */
  ConnectionStatus?: ConnectionStatusEventConfiguration | undefined;

  /**
   * Event configuration for the message delivery status event.
   *
   * @public
   */
  MessageDeliveryStatus?: MessageDeliveryStatusEventConfiguration | undefined;
}

/**
 * @public
 */
export interface GetResourceLogLevelRequest {
  /**
   * The unique identifier of the resource, which can be the wireless gateway ID, the wireless device ID, or the FUOTA task ID.
   *
   * @public
   */
  ResourceIdentifier: string | undefined;

  /**
   * The type of resource, which can be `WirelessDevice`, `WirelessGateway`, or `FuotaTask`.
   *
   * @public
   */
  ResourceType: string | undefined;
}

/**
 * @public
 */
export interface GetResourceLogLevelResponse {
  /**
   * The log level for a log message. The log levels can be disabled, or set to `ERROR` to display less verbose logs containing only error information, or to `INFO` for more detailed logs.
   *
   * @public
   */
  LogLevel?: LogLevel | undefined;
}

/**
 * @public
 */
export interface GetResourcePositionRequest {
  /**
   * The identifier of the resource for which position information is retrieved. It can be the wireless device ID or the wireless gateway ID, depending on the resource type.
   *
   * @public
   */
  ResourceIdentifier: string | undefined;

  /**
   * The type of resource for which position information is retrieved, which can be a wireless device or a wireless gateway.
   *
   * @public
   */
  ResourceType: PositionResourceType | undefined;
}

/**
 * @public
 */
export interface GetResourcePositionResponse {
  /**
   * The position information of the resource, displayed as a JSON payload. The payload uses the GeoJSON format, which a format that's used to encode geographic data structures. For more information, see [GeoJSON](https://geojson.org/).
   *
   * @public
   */
  GeoJsonPayload?: Uint8Array | undefined;
}

/**
 * @public
 */
export interface GetServiceEndpointRequest {
  /**
   * The service type for which to get endpoint information about. Can be `CUPS` for the Configuration and Update Server endpoint, or `LNS` for the LoRaWAN Network Server endpoint.
   *
   * @public
   */
  ServiceType?: WirelessGatewayServiceType | undefined;
}

/**
 * @public
 */
export interface GetServiceEndpointResponse {
  /**
   * The endpoint's service type.
   *
   * @public
   */
  ServiceType?: WirelessGatewayServiceType | undefined;

  /**
   * The service endpoint value.
   *
   * @public
   */
  ServiceEndpoint?: string | undefined;

  /**
   * The Root CA of the server trust certificate.
   *
   * @public
   */
  ServerTrust?: string | undefined;
}

/**
 * @public
 */
export interface GetServiceProfileRequest {
  /**
   * The ID of the resource to get.
   *
   * @public
   */
  Id: string | undefined;
}

/**
 * LoRaWANGetServiceProfileInfo object.
 *
 * @public
 */
export interface LoRaWANGetServiceProfileInfo {
  /**
   * The ULRate value.
   *
   * @public
   */
  UlRate?: number | undefined;

  /**
   * The ULBucketSize value.
   *
   * @public
   */
  UlBucketSize?: number | undefined;

  /**
   * The ULRatePolicy value.
   *
   * @public
   */
  UlRatePolicy?: string | undefined;

  /**
   * The DLRate value.
   *
   * @public
   */
  DlRate?: number | undefined;

  /**
   * The DLBucketSize value.
   *
   * @public
   */
  DlBucketSize?: number | undefined;

  /**
   * The DLRatePolicy value.
   *
   * @public
   */
  DlRatePolicy?: string | undefined;

  /**
   * The AddGWMetaData value.
   *
   * @public
   */
  AddGwMetadata?: boolean | undefined;

  /**
   * The DevStatusReqFreq value.
   *
   * @public
   */
  DevStatusReqFreq?: number | undefined;

  /**
   * The ReportDevStatusBattery value.
   *
   * @public
   */
  ReportDevStatusBattery?: boolean | undefined;

  /**
   * The ReportDevStatusMargin value.
   *
   * @public
   */
  ReportDevStatusMargin?: boolean | undefined;

  /**
   * The DRMin value.
   *
   * @public
   */
  DrMin?: number | undefined;

  /**
   * The DRMax value.
   *
   * @public
   */
  DrMax?: number | undefined;

  /**
   * The ChannelMask value.
   *
   * @public
   */
  ChannelMask?: string | undefined;

  /**
   * The PRAllowed value that describes whether passive roaming is allowed.
   *
   * @public
   */
  PrAllowed?: boolean | undefined;

  /**
   * The HRAllowed value that describes whether handover roaming is allowed.
   *
   * @public
   */
  HrAllowed?: boolean | undefined;

  /**
   * The RAAllowed value that describes whether roaming activation is allowed.
   *
   * @public
   */
  RaAllowed?: boolean | undefined;

  /**
   * The NwkGeoLoc value.
   *
   * @public
   */
  NwkGeoLoc?: boolean | undefined;

  /**
   * The TargetPER value.
   *
   * @public
   */
  TargetPer?: number | undefined;

  /**
   * The MinGwDiversity value.
   *
   * @public
   */
  MinGwDiversity?: number | undefined;

  /**
   * The Transmit Power Index minimum value.
   *
   * Default: `0`
   *
   * @public
   */
  TxPowerIndexMin?: number | undefined;

  /**
   * The Transmit Power Index maximum value.
   *
   * Default: `15`
   *
   * @public
   */
  TxPowerIndexMax?: number | undefined;

  /**
   * The minimum number of transmissions.
   *
   * Default: `0`
   *
   * @public
   */
  NbTransMin?: number | undefined;

  /**
   * The maximum number of transmissions.
   *
   * Default: `3`
   *
   * @public
   */
  NbTransMax?: number | undefined;
}

/**
 * @public
 */
export interface GetServiceProfileResponse {
  /**
   * The Amazon Resource Name of the resource.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The name of the resource.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The ID of the service profile.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * Information about the service profile.
   *
   * @public
   */
  LoRaWAN?: LoRaWANGetServiceProfileInfo | undefined;
}

/**
 * @public
 */
export interface GetWirelessDeviceRequest {
  /**
   * The identifier of the wireless device to get.
   *
   * @public
   */
  Identifier: string | undefined;

  /**
   * The type of identifier used in `identifier`.
   *
   * @public
   */
  IdentifierType: WirelessDeviceIdType | undefined;
}

/**
 * Sidewalk device object.
 *
 * @public
 */
export interface SidewalkDevice {
  /**
   * The Sidewalk Amazon ID.
   *
   * @public
   */
  AmazonId?: string | undefined;

  /**
   * The sidewalk device identification.
   *
   * @public
   */
  SidewalkId?: string | undefined;

  /**
   * The Sidewalk manufacturing series number.
   *
   * @public
   */
  SidewalkManufacturingSn?: string | undefined;

  /**
   * The sidewalk device certificates for Ed25519 and P256r1.
   *
   * @public
   */
  DeviceCertificates?: CertificateList[] | undefined;

  /**
   * The Sidewalk device private keys that will be used for onboarding the device.
   *
   * @public
   */
  PrivateKeys?: CertificateList[] | undefined;

  /**
   * The ID of the Sidewalk device profile.
   *
   * @public
   */
  DeviceProfileId?: string | undefined;

  /**
   * The ID of the Sidewalk device profile.
   *
   * @public
   */
  CertificateId?: string | undefined;

  /**
   * The Sidewalk device status, such as provisioned or registered.
   *
   * @public
   */
  Status?: WirelessDeviceSidewalkStatus | undefined;

  /**
   * The Positioning object of the Sidewalk device.
   *
   * @public
   */
  Positioning?: SidewalkPositioning | undefined;
}

/**
 * @public
 */
export interface GetWirelessDeviceResponse {
  /**
   * The wireless device type.
   *
   * @public
   */
  Type?: WirelessDeviceType | undefined;

  /**
   * The name of the resource.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The description of the resource.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The name of the destination to which the device is assigned.
   *
   * @public
   */
  DestinationName?: string | undefined;

  /**
   * The ID of the wireless device.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The Amazon Resource Name of the resource.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The name of the thing associated with the wireless device. The value is empty if a thing isn't associated with the device.
   *
   * @public
   */
  ThingName?: string | undefined;

  /**
   * The ARN of the thing associated with the wireless device.
   *
   * @public
   */
  ThingArn?: string | undefined;

  /**
   * Information about the wireless device.
   *
   * @public
   */
  LoRaWAN?: LoRaWANDevice | undefined;

  /**
   * Sidewalk device object.
   *
   * @public
   */
  Sidewalk?: SidewalkDevice | undefined;

  /**
   * The integration status of the Device Location feature for LoRaWAN and Sidewalk devices.
   *
   * @public
   */
  Positioning?: PositioningConfigStatus | undefined;
}

/**
 * @public
 */
export interface GetWirelessDeviceImportTaskRequest {
  /**
   * The identifier of the import task for which information is requested.
   *
   * @public
   */
  Id: string | undefined;
}

/**
 * Sidewalk-related information for devices in an import task that are being onboarded.
 *
 * @public
 */
export interface SidewalkGetStartImportInfo {
  /**
   * List of Sidewalk devices that are added to the import task.
   *
   * @public
   */
  DeviceCreationFileList?: string[] | undefined;

  /**
   * The IAM role that allows AWS IoT Wireless to access the CSV file in the S3 bucket.
   *
   * @public
   */
  Role?: string | undefined;

  /**
   * The Positioning object of the Sidewalk device.
   *
   * @public
   */
  Positioning?: SidewalkPositioning | undefined;
}

/**
 * @public
 */
export interface GetWirelessDeviceImportTaskResponse {
  /**
   * The identifier of the import task for which information is retrieved.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The ARN (Amazon Resource Name) of the import task.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The name of the destination that's assigned to the wireless devices in the import task.
   *
   * @public
   */
  DestinationName?: string | undefined;

  /**
   * The integration status of the Device Location feature for LoRaWAN and Sidewalk devices.
   *
   * @public
   */
  Positioning?: PositioningConfigStatus | undefined;

  /**
   * The Sidewalk-related information about an import task.
   *
   * @public
   */
  Sidewalk?: SidewalkGetStartImportInfo | undefined;

  /**
   * The time at which the import task was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The import task status.
   *
   * @public
   */
  Status?: ImportTaskStatus | undefined;

  /**
   * The reason for the provided status information, such as a validation error that causes the import task to fail.
   *
   * @public
   */
  StatusReason?: string | undefined;

  /**
   * The number of devices in the import task that are waiting for the control log to start processing.
   *
   * @public
   */
  InitializedImportedDeviceCount?: number | undefined;

  /**
   * The number of devices in the import task that are waiting in the import task queue to be onboarded.
   *
   * @public
   */
  PendingImportedDeviceCount?: number | undefined;

  /**
   * The number of devices in the import task that have been onboarded to the import task.
   *
   * @public
   */
  OnboardedImportedDeviceCount?: number | undefined;

  /**
   * The number of devices in the import task that failed to onboard to the import task.
   *
   * @public
   */
  FailedImportedDeviceCount?: number | undefined;
}

/**
 * @public
 */
export interface GetWirelessDeviceStatisticsRequest {
  /**
   * The ID of the wireless device for which to get the data.
   *
   * @public
   */
  WirelessDeviceId: string | undefined;
}

/**
 * LoRaWAN gateway metatdata.
 *
 * @public
 */
export interface LoRaWANGatewayMetadata {
  /**
   * The gateway's EUI value.
   *
   * @public
   */
  GatewayEui?: string | undefined;

  /**
   * The SNR value.
   *
   * @public
   */
  Snr?: number | undefined;

  /**
   * The RSSI value.
   *
   * @public
   */
  Rssi?: number | undefined;
}

/**
 * LoRaWAN public gateway metadata.
 *
 * @public
 */
export interface LoRaWANPublicGatewayMetadata {
  /**
   * The ID of the LoRaWAN public network provider.
   *
   * @public
   */
  ProviderNetId?: string | undefined;

  /**
   * The ID of the gateways that are operated by the network provider.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The RSSI (received signal strength indicator) value.
   *
   * @public
   */
  Rssi?: number | undefined;

  /**
   * The SNR (signal to noise ratio) value.
   *
   * @public
   */
  Snr?: number | undefined;

  /**
   * The frequency band (RFRegion) value.
   *
   * @public
   */
  RfRegion?: string | undefined;

  /**
   * Boolean that indicates whether downlink is allowed using the network.
   *
   * @public
   */
  DlAllowed?: boolean | undefined;
}

/**
 * LoRaWAN device metatdata.
 *
 * @public
 */
export interface LoRaWANDeviceMetadata {
  /**
   * The DevEUI value.
   *
   * @public
   */
  DevEui?: string | undefined;

  /**
   * The FPort value.
   *
   * @public
   */
  FPort?: number | undefined;

  /**
   * The DataRate value.
   *
   * @public
   */
  DataRate?: number | undefined;

  /**
   * The device's channel frequency in Hz.
   *
   * @public
   */
  Frequency?: number | undefined;

  /**
   * The date and time of the metadata.
   *
   * @public
   */
  Timestamp?: string | undefined;

  /**
   * Information about the gateways accessed by the device.
   *
   * @public
   */
  Gateways?: LoRaWANGatewayMetadata[] | undefined;

  /**
   * Information about the LoRaWAN public network accessed by the device.
   *
   * @public
   */
  PublicGateways?: LoRaWANPublicGatewayMetadata[] | undefined;
}

/**
 * MetaData for Sidewalk device.
 *
 * @public
 */
export interface SidewalkDeviceMetadata {
  /**
   * The RSSI value.
   *
   * @public
   */
  Rssi?: number | undefined;

  /**
   * Sidewalk device battery level.
   *
   * @public
   */
  BatteryLevel?: BatteryLevel | undefined;

  /**
   * Sidewalk device status notification.
   *
   * @public
   */
  Event?: Event | undefined;

  /**
   * Device state defines the device status of sidewalk device.
   *
   * @public
   */
  DeviceState?: DeviceState | undefined;
}

/**
 * @public
 */
export interface GetWirelessDeviceStatisticsResponse {
  /**
   * The ID of the wireless device.
   *
   * @public
   */
  WirelessDeviceId?: string | undefined;

  /**
   * The date and time when the most recent uplink was received.
   *
   * > **Note:** This value is only valid for 3 months.
   *
   * @public
   */
  LastUplinkReceivedAt?: string | undefined;

  /**
   * Information about the wireless device's operations.
   *
   * @public
   */
  LoRaWAN?: LoRaWANDeviceMetadata | undefined;

  /**
   * MetaData for Sidewalk device.
   *
   * @public
   */
  Sidewalk?: SidewalkDeviceMetadata | undefined;
}

/**
 * @public
 */
export interface GetWirelessGatewayRequest {
  /**
   * The identifier of the wireless gateway to get.
   *
   * @public
   */
  Identifier: string | undefined;

  /**
   * The type of identifier used in `identifier`.
   *
   * @public
   */
  IdentifierType: WirelessGatewayIdType | undefined;
}

/**
 * @public
 */
export interface GetWirelessGatewayResponse {
  /**
   * The name of the resource.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The ID of the wireless gateway.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The description of the resource.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Information about the wireless gateway.
   *
   * @public
   */
  LoRaWAN?: LoRaWANGateway | undefined;

  /**
   * The Amazon Resource Name of the resource.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The name of the thing associated with the wireless gateway. The value is empty if a thing isn't associated with the gateway.
   *
   * @public
   */
  ThingName?: string | undefined;

  /**
   * The ARN of the thing associated with the wireless gateway.
   *
   * @public
   */
  ThingArn?: string | undefined;
}

/**
 * @public
 */
export interface GetWirelessGatewayCertificateRequest {
  /**
   * The ID of the resource to get.
   *
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface GetWirelessGatewayCertificateResponse {
  /**
   * The ID of the certificate associated with the wireless gateway.
   *
   * @public
   */
  IotCertificateId?: string | undefined;

  /**
   * The ID of the certificate that is associated with the wireless gateway and used for the LoRaWANNetworkServer endpoint.
   *
   * @public
   */
  LoRaWANNetworkServerCertificateId?: string | undefined;
}

/**
 * @public
 */
export interface GetWirelessGatewayFirmwareInformationRequest {
  /**
   * The ID of the resource to get.
   *
   * @public
   */
  Id: string | undefined;
}

/**
 * LoRaWANGatewayCurrentVersion object.
 *
 * @public
 */
export interface LoRaWANGatewayCurrentVersion {
  /**
   * The version of the gateways that should receive the update.
   *
   * @public
   */
  CurrentVersion?: LoRaWANGatewayVersion | undefined;
}

/**
 * @public
 */
export interface GetWirelessGatewayFirmwareInformationResponse {
  /**
   * Information about the wireless gateway's firmware.
   *
   * @public
   */
  LoRaWAN?: LoRaWANGatewayCurrentVersion | undefined;
}

/**
 * @public
 */
export interface GetWirelessGatewayStatisticsRequest {
  /**
   * The ID of the wireless gateway for which to get the data.
   *
   * @public
   */
  WirelessGatewayId: string | undefined;
}

/**
 * @public
 */
export interface GetWirelessGatewayStatisticsResponse {
  /**
   * The ID of the wireless gateway.
   *
   * @public
   */
  WirelessGatewayId?: string | undefined;

  /**
   * The date and time when the most recent uplink was received.
   *
   * > **Note:** This value is only valid for 3 months.
   *
   * @public
   */
  LastUplinkReceivedAt?: string | undefined;

  /**
   * The connection status of the wireless gateway.
   *
   * @public
   */
  ConnectionStatus?: ConnectionStatus | undefined;
}

/**
 * @public
 */
export interface GetWirelessGatewayTaskRequest {
  /**
   * The ID of the resource to get.
   *
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface GetWirelessGatewayTaskResponse {
  /**
   * The ID of the wireless gateway.
   *
   * @public
   */
  WirelessGatewayId?: string | undefined;

  /**
   * The ID of the WirelessGatewayTask.
   *
   * @public
   */
  WirelessGatewayTaskDefinitionId?: string | undefined;

  /**
   * The date and time when the most recent uplink was received.
   *
   * > **Note:** This value is only valid for 3 months.
   *
   * @public
   */
  LastUplinkReceivedAt?: string | undefined;

  /**
   * The date and time when the task was created.
   *
   * @public
   */
  TaskCreatedAt?: string | undefined;

  /**
   * The status of the request.
   *
   * @public
   */
  Status?: WirelessGatewayTaskStatus | undefined;
}

/**
 * @public
 */
export interface GetWirelessGatewayTaskDefinitionRequest {
  /**
   * The ID of the resource to get.
   *
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface GetWirelessGatewayTaskDefinitionResponse {
  /**
   * Whether to automatically create tasks using this task definition for all gateways with the specified current version. If `false`, the task must me created by calling `CreateWirelessGatewayTask`.
   *
   * @public
   */
  AutoCreateTasks?: boolean | undefined;

  /**
   * The name of the resource.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Information about the gateways to update.
   *
   * @public
   */
  Update?: UpdateWirelessGatewayTaskCreate | undefined;

  /**
   * The Amazon Resource Name of the resource.
   *
   * @public
   */
  Arn?: string | undefined;
}

/**
 * Information about a Sidewalk device that has been added to an import task.
 *
 * @public
 */
export interface ImportedSidewalkDevice {
  /**
   * The Sidewalk manufacturing serial number (SMSN) of the Sidewalk device.
   *
   * @public
   */
  SidewalkManufacturingSn?: string | undefined;

  /**
   * The onboarding status of the Sidewalk device in the import task.
   *
   * @public
   */
  OnboardingStatus?: OnboardStatus | undefined;

  /**
   * The reason for the onboarding status information for the Sidewalk device.
   *
   * @public
   */
  OnboardingStatusReason?: string | undefined;

  /**
   * The time at which the status information was last updated.
   *
   * @public
   */
  LastUpdateTime?: Date | undefined;
}

/**
 * Information about a wireless device that has been added to an import task.
 *
 * @public
 */
export interface ImportedWirelessDevice {
  /**
   * The Sidewalk-related information about a device that has been added to an import task.
   *
   * @public
   */
  Sidewalk?: ImportedSidewalkDevice | undefined;
}

/**
 * @public
 */
export interface ListDestinationsRequest {
  /**
   * The maximum number of results to return in this operation.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * To retrieve the next set of results, the `nextToken` value from a previous response; otherwise **null** to receive the first set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDestinationsResponse {
  /**
   * The token to use to get the next set of results, or **null** if there are no additional results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The list of destinations.
   *
   * @public
   */
  DestinationList?: Destinations[] | undefined;
}

/**
 * @public
 */
export interface ListDeviceProfilesRequest {
  /**
   * To retrieve the next set of results, the `nextToken` value from a previous response; otherwise **null** to receive the first set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return in this operation.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A filter to list only device profiles that use this type, which can be `LoRaWAN` or `Sidewalk`.
   *
   * @public
   */
  DeviceProfileType?: DeviceProfileType | undefined;
}

/**
 * @public
 */
export interface ListDeviceProfilesResponse {
  /**
   * The token to use to get the next set of results, or **null** if there are no additional results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The list of device profiles.
   *
   * @public
   */
  DeviceProfileList?: DeviceProfile[] | undefined;
}

/**
 * @public
 */
export interface ListDevicesForWirelessDeviceImportTaskRequest {
  /**
   * The identifier of the import task for which wireless devices are listed.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The maximum number of results to return in this operation.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * To retrieve the next set of results, the `nextToken` value from a previous response; otherwise `null` to receive the first set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The status of the devices in the import task.
   *
   * @public
   */
  Status?: OnboardStatus | undefined;
}

/**
 * The Sidewalk-related object containing positioning information used to configure Sidewalk devices during import.
 *
 * @public
 */
export interface SidewalkListDevicesForImportInfo {
  /**
   * The Positioning object of the Sidewalk device.
   *
   * @public
   */
  Positioning?: SidewalkPositioning | undefined;
}

/**
 * @public
 */
export interface ListDevicesForWirelessDeviceImportTaskResponse {
  /**
   * The token to use to get the next set of results, or `null` if there are no additional results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The name of the Sidewalk destination that describes the IoT rule to route messages received from devices in an import task that are onboarded to AWS IoT Wireless.
   *
   * @public
   */
  DestinationName?: string | undefined;

  /**
   * The integration status of the Device Location feature for Sidewalk devices.
   *
   * @public
   */
  Positioning?: PositioningConfigStatus | undefined;

  /**
   * The Sidewalk object containing Sidewalk-related device information.
   *
   * @public
   */
  Sidewalk?: SidewalkListDevicesForImportInfo | undefined;

  /**
   * List of wireless devices in an import task and their onboarding status.
   *
   * @public
   */
  ImportedWirelessDeviceList?: ImportedWirelessDevice[] | undefined;
}

/**
 * @public
 */
export interface ListEventConfigurationsRequest {
  /**
   * Resource type to filter event configurations.
   *
   * @public
   */
  ResourceType: EventNotificationResourceType | undefined;

  /**
   * The maximum number of results to return in this operation.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * To retrieve the next set of results, the `nextToken` value from a previous response; otherwise **null** to receive the first set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListEventConfigurationsResponse {
  /**
   * To retrieve the next set of results, the `nextToken` value from a previous response; otherwise **null** to receive the first set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Event configurations of all events for a single resource.
   *
   * @public
   */
  EventConfigurationsList?: EventConfigurationItem[] | undefined;
}

/**
 * @public
 */
export interface ListFuotaTasksRequest {
  /**
   * To retrieve the next set of results, the `nextToken` value from a previous response; otherwise **null** to receive the first set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return in this operation.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListFuotaTasksResponse {
  /**
   * To retrieve the next set of results, the `nextToken` value from a previous response; otherwise **null** to receive the first set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Lists the FUOTA tasks registered to your AWS account.
   *
   * @public
   */
  FuotaTaskList?: FuotaTask[] | undefined;
}

/**
 * @public
 */
export interface ListMulticastGroupsRequest {
  /**
   * To retrieve the next set of results, the `nextToken` value from a previous response; otherwise **null** to receive the first set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return in this operation.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * A multicast group.
 *
 * @public
 */
export interface MulticastGroup {
  /**
   * The ID of the multicast group.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The arn of the multicast group.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The name of the multicast group.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * @public
 */
export interface ListMulticastGroupsResponse {
  /**
   * To retrieve the next set of results, the `nextToken` value from a previous response; otherwise **null** to receive the first set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * List of multicast groups.
   *
   * @public
   */
  MulticastGroupList?: MulticastGroup[] | undefined;
}

/**
 * @public
 */
export interface ListMulticastGroupsByFuotaTaskRequest {
  /**
   * The ID of a FUOTA task.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * To retrieve the next set of results, the `nextToken` value from a previous response; otherwise **null** to receive the first set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return in this operation.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * A multicast group that is associated with a FUOTA task.
 *
 * @public
 */
export interface MulticastGroupByFuotaTask {
  /**
   * The ID of the multicast group.
   *
   * @public
   */
  Id?: string | undefined;
}

/**
 * @public
 */
export interface ListMulticastGroupsByFuotaTaskResponse {
  /**
   * To retrieve the next set of results, the `nextToken` value from a previous response; otherwise **null** to receive the first set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * List of multicast groups associated with a FUOTA task.
   *
   * @public
   */
  MulticastGroupList?: MulticastGroupByFuotaTask[] | undefined;
}

/**
 * @public
 */
export interface ListNetworkAnalyzerConfigurationsRequest {
  /**
   * The maximum number of results to return in this operation.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * To retrieve the next set of results, the `nextToken` value from a previous response; otherwise **null** to receive the first set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Network analyzer configurations.
 *
 * @public
 */
export interface NetworkAnalyzerConfigurations {
  /**
   * The Amazon Resource Name of the new resource.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * Name of the network analyzer configuration.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * @public
 */
export interface ListNetworkAnalyzerConfigurationsResponse {
  /**
   * The token to use to get the next set of results, or **null** if there are no additional results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The list of network analyzer configurations.
   *
   * @public
   */
  NetworkAnalyzerConfigurationList?: NetworkAnalyzerConfigurations[] | undefined;
}

/**
 * @public
 */
export interface ListPartnerAccountsRequest {
  /**
   * To retrieve the next set of results, the `nextToken` value from a previous response; otherwise **null** to receive the first set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return in this operation.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListPartnerAccountsResponse {
  /**
   * The token to use to get the next set of results, or **null** if there are no additional results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The Sidewalk account credentials.
   *
   * @public
   */
  Sidewalk?: SidewalkAccountInfoWithFingerprint[] | undefined;
}

/**
 * @deprecated This operation is no longer supported.
 * @public
 */
export interface ListPositionConfigurationsRequest {
  /**
   * Resource type for which position configurations are listed.
   *
   * @public
   */
  ResourceType?: PositionResourceType | undefined;

  /**
   * The maximum number of results to return in this operation.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * To retrieve the next set of results, the `nextToken` value from a previous response; otherwise **null** to receive the first set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * The wrapper for a position configuration.
 *
 * @public
 */
export interface PositionConfigurationItem {
  /**
   * Resource identifier for the position configuration.
   *
   * @public
   */
  ResourceIdentifier?: string | undefined;

  /**
   * Resource type of the resource for the position configuration.
   *
   * @public
   */
  ResourceType?: PositionResourceType | undefined;

  /**
   * The details of the positioning solver object used to compute the location.
   *
   * @public
   */
  Solvers?: PositionSolverDetails | undefined;

  /**
   * The position data destination that describes the AWS IoT rule that processes the device's position data for use by AWS IoT Core for LoRaWAN.
   *
   * @public
   */
  Destination?: string | undefined;
}

/**
 * @deprecated This operation is no longer supported.
 * @public
 */
export interface ListPositionConfigurationsResponse {
  /**
   * A list of position configurations.
   *
   * @public
   */
  PositionConfigurationList?: PositionConfigurationItem[] | undefined;

  /**
   * The token to use to get the next set of results, or **null** if there are no additional results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListQueuedMessagesRequest {
  /**
   * The ID of a given wireless device which the downlink message packets are being sent.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * To retrieve the next set of results, the `nextToken` value from a previous response; otherwise **null** to receive the first set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return in this operation.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The wireless device type, whic can be either Sidewalk or LoRaWAN.
   *
   * @public
   */
  WirelessDeviceType?: WirelessDeviceType | undefined;
}

/**
 * @public
 */
export interface ListQueuedMessagesResponse {
  /**
   * To retrieve the next set of results, the `nextToken` value from a previous response; otherwise **null** to receive the first set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The messages in the downlink queue.
   *
   * @public
   */
  DownlinkQueueMessagesList?: DownlinkQueueMessage[] | undefined;
}

/**
 * @public
 */
export interface ListServiceProfilesRequest {
  /**
   * To retrieve the next set of results, the `nextToken` value from a previous response; otherwise **null** to receive the first set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return in this operation.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Information about a service profile.
 *
 * @public
 */
export interface ServiceProfile {
  /**
   * The Amazon Resource Name of the resource.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The name of the resource.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The ID of the service profile.
   *
   * @public
   */
  Id?: string | undefined;
}

/**
 * @public
 */
export interface ListServiceProfilesResponse {
  /**
   * The token to use to get the next set of results, or **null** if there are no additional results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The list of service profiles.
   *
   * @public
   */
  ServiceProfileList?: ServiceProfile[] | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The ARN of the resource for which you want to list tags.
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * The tags to attach to the specified resource. Tags are metadata that you can use to manage a resource.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface ListWirelessDeviceImportTasksRequest {
  /**
   * The maximum number of results to return in this operation.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * To retrieve the next set of results, the `nextToken` value from a previous response; otherwise `null` to receive the first set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Information about an import task for wireless devices.
 *
 * @public
 */
export interface WirelessDeviceImportTask {
  /**
   * The ID of the wireless device import task.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The ARN (Amazon Resource Name) of the wireless device import task.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The name of the Sidewalk destination that that describes the IoT rule to route messages from the device in the import task that will be onboarded to AWS IoT Wireless
   *
   * @public
   */
  DestinationName?: string | undefined;

  /**
   * The integration status of the Device Location feature for Sidewalk devices.
   *
   * @public
   */
  Positioning?: PositioningConfigStatus | undefined;

  /**
   * The Sidewalk-related information of the wireless device import task.
   *
   * @public
   */
  Sidewalk?: SidewalkGetStartImportInfo | undefined;

  /**
   * The time at which the import task was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The status information of the wireless device import task.
   *
   * @public
   */
  Status?: ImportTaskStatus | undefined;

  /**
   * The reason that provides additional information about the import task status.
   *
   * @public
   */
  StatusReason?: string | undefined;

  /**
   * The summary information of count of wireless devices that are waiting for the control log to be added to an import task.
   *
   * @public
   */
  InitializedImportedDeviceCount?: number | undefined;

  /**
   * The summary information of count of wireless devices in an import task that are waiting in the queue to be onboarded.
   *
   * @public
   */
  PendingImportedDeviceCount?: number | undefined;

  /**
   * The summary information of count of wireless devices in an import task that have been onboarded to the import task.
   *
   * @public
   */
  OnboardedImportedDeviceCount?: number | undefined;

  /**
   * The summary information of count of wireless devices in an import task that failed to onboarded to the import task.
   *
   * @public
   */
  FailedImportedDeviceCount?: number | undefined;
}

/**
 * @public
 */
export interface ListWirelessDeviceImportTasksResponse {
  /**
   * The token to use to get the next set of results, or `null` if there are no additional results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * List of import tasks and summary information of onboarding status of devices in each import task.
   *
   * @public
   */
  WirelessDeviceImportTaskList?: WirelessDeviceImportTask[] | undefined;
}

/**
 * @public
 */
export interface ListWirelessDevicesRequest {
  /**
   * The maximum number of results to return in this operation.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * To retrieve the next set of results, the `nextToken` value from a previous response; otherwise **null** to receive the first set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A filter to list only the wireless devices that use as uplink destination.
   *
   * @public
   */
  DestinationName?: string | undefined;

  /**
   * A filter to list only the wireless devices that use this device profile.
   *
   * @public
   */
  DeviceProfileId?: string | undefined;

  /**
   * A filter to list only the wireless devices that use this service profile.
   *
   * @public
   */
  ServiceProfileId?: string | undefined;

  /**
   * A filter to list only the wireless devices that use this wireless device type.
   *
   * @public
   */
  WirelessDeviceType?: WirelessDeviceType | undefined;

  /**
   * The ID of a FUOTA task.
   *
   * @public
   */
  FuotaTaskId?: string | undefined;

  /**
   * The ID of the multicast group.
   *
   * @public
   */
  MulticastGroupId?: string | undefined;
}

/**
 * LoRaWAN object for list functions.
 *
 * @public
 */
export interface LoRaWANListDevice {
  /**
   * The DevEUI value.
   *
   * @public
   */
  DevEui?: string | undefined;
}

/**
 * Sidewalk object used by list functions.
 *
 * @public
 */
export interface SidewalkListDevice {
  /**
   * The Sidewalk Amazon ID.
   *
   * @public
   */
  AmazonId?: string | undefined;

  /**
   * The sidewalk device identification.
   *
   * @public
   */
  SidewalkId?: string | undefined;

  /**
   * The Sidewalk manufacturing series number.
   *
   * @public
   */
  SidewalkManufacturingSn?: string | undefined;

  /**
   * The sidewalk device certificates for Ed25519 and P256r1.
   *
   * @public
   */
  DeviceCertificates?: CertificateList[] | undefined;

  /**
   * Sidewalk object used by list functions.
   *
   * @public
   */
  DeviceProfileId?: string | undefined;

  /**
   * The status of the Sidewalk devices, such as provisioned or registered.
   *
   * @public
   */
  Status?: WirelessDeviceSidewalkStatus | undefined;

  /**
   * The Positioning object of the Sidewalk device.
   *
   * @public
   */
  Positioning?: SidewalkPositioning | undefined;
}

/**
 * Information about a wireless device's operation.
 *
 * @public
 */
export interface WirelessDeviceStatistics {
  /**
   * The Amazon Resource Name of the resource.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The ID of the wireless device reporting the data.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The wireless device type.
   *
   * @public
   */
  Type?: WirelessDeviceType | undefined;

  /**
   * The name of the resource.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The name of the destination to which the device is assigned.
   *
   * @public
   */
  DestinationName?: string | undefined;

  /**
   * The date and time when the most recent uplink was received.
   *
   * > **Note:** Theis value is only valid for 3 months.
   *
   * @public
   */
  LastUplinkReceivedAt?: string | undefined;

  /**
   * LoRaWAN device info.
   *
   * @public
   */
  LoRaWAN?: LoRaWANListDevice | undefined;

  /**
   * The Sidewalk account credentials.
   *
   * @public
   */
  Sidewalk?: SidewalkListDevice | undefined;

  /**
   * The status of a wireless device in a FUOTA task.
   *
   * @public
   */
  FuotaDeviceStatus?: FuotaDeviceStatus | undefined;

  /**
   * The status of the wireless device in the multicast group.
   *
   * @public
   */
  MulticastDeviceStatus?: string | undefined;

  /**
   * Id of the multicast group.
   *
   * @public
   */
  McGroupId?: number | undefined;

  /**
   * The integration status of the Device Location feature for LoRaWAN and Amazon Sidewalk enabled devices.
   *
   * @public
   */
  Positioning?: PositioningConfigStatus | undefined;
}

/**
 * @public
 */
export interface ListWirelessDevicesResponse {
  /**
   * The token to use to get the next set of results, or **null** if there are no additional results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The ID of the wireless device.
   *
   * @public
   */
  WirelessDeviceList?: WirelessDeviceStatistics[] | undefined;
}

/**
 * @public
 */
export interface ListWirelessGatewaysRequest {
  /**
   * To retrieve the next set of results, the `nextToken` value from a previous response; otherwise **null** to receive the first set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return in this operation.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Information about a wireless gateway's operation.
 *
 * @public
 */
export interface WirelessGatewayStatistics {
  /**
   * The Amazon Resource Name of the resource.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The ID of the wireless gateway reporting the data.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The name of the resource.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The description of the resource.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * LoRaWAN gateway info.
   *
   * @public
   */
  LoRaWAN?: LoRaWANGateway | undefined;

  /**
   * The date and time when the most recent uplink was received.
   *
   * > **Note:** This value is only valid for 3 months.
   *
   * @public
   */
  LastUplinkReceivedAt?: string | undefined;
}

/**
 * @public
 */
export interface ListWirelessGatewaysResponse {
  /**
   * The token to use to get the next set of results, or **null** if there are no additional results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The ID of the wireless gateway.
   *
   * @public
   */
  WirelessGatewayList?: WirelessGatewayStatistics[] | undefined;
}

/**
 * @public
 */
export interface ListWirelessGatewayTaskDefinitionsRequest {
  /**
   * The maximum number of results to return in this operation.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * To retrieve the next set of results, the `nextToken` value from a previous response; otherwise **null** to receive the first set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A filter to list only the wireless gateway task definitions that use this task definition type.
   *
   * @public
   */
  TaskDefinitionType?: WirelessGatewayTaskDefinitionType | undefined;
}

/**
 * LoRaWANUpdateGatewayTaskEntry object.
 *
 * @public
 */
export interface LoRaWANUpdateGatewayTaskEntry {
  /**
   * The version of the gateways that should receive the update.
   *
   * @public
   */
  CurrentVersion?: LoRaWANGatewayVersion | undefined;

  /**
   * The firmware version to update the gateway to.
   *
   * @public
   */
  UpdateVersion?: LoRaWANGatewayVersion | undefined;
}

/**
 * UpdateWirelessGatewayTaskEntry object.
 *
 * @public
 */
export interface UpdateWirelessGatewayTaskEntry {
  /**
   * The ID of the new wireless gateway task entry.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The properties that relate to the LoRaWAN wireless gateway.
   *
   * @public
   */
  LoRaWAN?: LoRaWANUpdateGatewayTaskEntry | undefined;

  /**
   * The Amazon Resource Name of the resource.
   *
   * @public
   */
  Arn?: string | undefined;
}

/**
 * @public
 */
export interface ListWirelessGatewayTaskDefinitionsResponse {
  /**
   * The token to use to get the next set of results, or **null** if there are no additional results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The list of task definitions.
   *
   * @public
   */
  TaskDefinitions?: UpdateWirelessGatewayTaskEntry[] | undefined;
}

/**
 * Information about the Semtech GNSS solver configuration.
 *
 * @public
 */
export interface SemtechGnssConfiguration {
  /**
   * The status indicating whether the solver is enabled.
   *
   * @public
   */
  Status: PositionConfigurationStatus | undefined;

  /**
   * Whether forward error correction is enabled.
   *
   * @public
   */
  Fec: PositionConfigurationFec | undefined;
}

/**
 * The wrapper for position solver configurations.
 *
 * @public
 */
export interface PositionSolverConfigurations {
  /**
   * The Semtech GNSS solver configuration object.
   *
   * @public
   */
  SemtechGnss?: SemtechGnssConfiguration | undefined;
}

/**
 * @deprecated This operation is no longer supported.
 * @public
 */
export interface PutPositionConfigurationRequest {
  /**
   * Resource identifier used to update the position configuration.
   *
   * @public
   */
  ResourceIdentifier: string | undefined;

  /**
   * Resource type of the resource for which you want to update the position configuration.
   *
   * @public
   */
  ResourceType: PositionResourceType | undefined;

  /**
   * The positioning solvers used to update the position configuration of the resource.
   *
   * @public
   */
  Solvers?: PositionSolverConfigurations | undefined;

  /**
   * The position data destination that describes the AWS IoT rule that processes the device's position data for use by AWS IoT Core for LoRaWAN.
   *
   * @public
   */
  Destination?: string | undefined;
}

/**
 * @deprecated This operation is no longer supported.
 * @public
 */
export interface PutPositionConfigurationResponse {}

/**
 * @public
 */
export interface PutResourceLogLevelRequest {
  /**
   * The unique identifier of the resource, which can be the wireless gateway ID, the wireless device ID, or the FUOTA task ID.
   *
   * @public
   */
  ResourceIdentifier: string | undefined;

  /**
   * The type of resource, which can be `WirelessDevice`, `WirelessGateway`, or `FuotaTask`.
   *
   * @public
   */
  ResourceType: string | undefined;

  /**
   * The log level for a log message. The log levels can be disabled, or set to `ERROR` to display less verbose logs containing only error information, or to `INFO` for more detailed logs.
   *
   * @public
   */
  LogLevel: LogLevel | undefined;
}

/**
 * @public
 */
export interface PutResourceLogLevelResponse {}

/**
 * @public
 */
export interface ResetAllResourceLogLevelsRequest {}

/**
 * @public
 */
export interface ResetAllResourceLogLevelsResponse {}

/**
 * @public
 */
export interface ResetResourceLogLevelRequest {
  /**
   * The unique identifier of the resource, which can be the wireless gateway ID, the wireless device ID, or the FUOTA task ID.
   *
   * @public
   */
  ResourceIdentifier: string | undefined;

  /**
   * The type of resource, which can be `WirelessDevice`, `WirelessGateway`, or `FuotaTask`.
   *
   * @public
   */
  ResourceType: string | undefined;
}

/**
 * @public
 */
export interface ResetResourceLogLevelResponse {}

/**
 * The metadata information of the LoRaWAN multicast group.
 *
 * @public
 */
export interface LoRaWANMulticastMetadata {
  /**
   * The Fport value.
   *
   * @public
   */
  FPort?: number | undefined;
}

/**
 * Wireless metadata that is to be sent to multicast group.
 *
 * @public
 */
export interface MulticastWirelessMetadata {
  /**
   * The metadata information of the LoRaWAN multicast group.
   *
   * @public
   */
  LoRaWAN?: LoRaWANMulticastMetadata | undefined;
}

/**
 * @public
 */
export interface SendDataToMulticastGroupRequest {
  /**
   * The ID of the multicast group.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The binary to be sent to the end device, encoded in base64.
   *
   * @public
   */
  PayloadData: string | undefined;

  /**
   * Wireless metadata that is to be sent to multicast group.
   *
   * @public
   */
  WirelessMetadata: MulticastWirelessMetadata | undefined;
}

/**
 * @public
 */
export interface SendDataToMulticastGroupResponse {
  /**
   * ID of a multicast group message.
   *
   * @public
   */
  MessageId?: string | undefined;
}
