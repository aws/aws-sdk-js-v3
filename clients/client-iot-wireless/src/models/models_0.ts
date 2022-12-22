// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@aws-sdk/smithy-client";

import { IoTWirelessServiceException as __BaseException } from "./IoTWirelessServiceException";

/**
 * <p>Session keys for ABP v1.1</p>
 */
export interface SessionKeysAbpV1_0_x {
  /**
   * <p>The NwkSKey value.</p>
   */
  NwkSKey?: string;

  /**
   * <p>The AppSKey value.</p>
   */
  AppSKey?: string;
}

/**
 * <p>ABP device object for LoRaWAN specification v1.0.x</p>
 */
export interface AbpV1_0_x {
  /**
   * <p>The DevAddr value.</p>
   */
  DevAddr?: string;

  /**
   * <p>Session keys for ABP v1.0.x</p>
   */
  SessionKeys?: SessionKeysAbpV1_0_x;

  /**
   * <p>The FCnt init value.</p>
   */
  FCntStart?: number;
}

/**
 * <p>Session keys for ABP v1.1</p>
 */
export interface SessionKeysAbpV1_1 {
  /**
   * <p>The FNwkSIntKey value.</p>
   */
  FNwkSIntKey?: string;

  /**
   * <p>The SNwkSIntKey value.</p>
   */
  SNwkSIntKey?: string;

  /**
   * <p>The NwkSEncKey value.</p>
   */
  NwkSEncKey?: string;

  /**
   * <p>The AppSKey value.</p>
   */
  AppSKey?: string;
}

/**
 * <p>ABP device object for LoRaWAN specification v1.1</p>
 */
export interface AbpV1_1 {
  /**
   * <p>The DevAddr value.</p>
   */
  DevAddr?: string;

  /**
   * <p>Session keys for ABP v1.1</p>
   */
  SessionKeys?: SessionKeysAbpV1_1;

  /**
   * <p>The FCnt init value.</p>
   */
  FCntStart?: number;
}

/**
 * <p>User does not have permission to perform this action.</p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The accuracy of the estimated position in meters. An empty value indicates that no position data is available.
 *             A value of ‘0.0’ value indicates that position data is available. This data corresponds to the position information
 *             that you specified instead of the position computed by solver.</p>
 */
export interface Accuracy {
  /**
   * <p>The horizontal accuracy of the estimated position, which is the difference between the estimated
   *             location and the actual device location.</p>
   */
  HorizontalAccuracy?: number;

  /**
   * <p>The vertical accuracy of the estimated position, which is the difference between the estimated
   *             altitude and actual device latitude in meters.</p>
   */
  VerticalAccuracy?: number;
}

export enum ApplicationConfigType {
  SemtechGeoLocation = "SemtechGeolocation",
}

/**
 * <p>LoRaWAN application configuration, which can be used to perform geolocation.</p>
 */
export interface ApplicationConfig {
  /**
   * <p>The Fport value.</p>
   */
  FPort?: number;

  /**
   * <p>Application type, which can be specified to obtain real-time position information of your LoRaWAN device.</p>
   */
  Type?: ApplicationConfigType | string;

  /**
   * <p>The name of the position data destination that describes the AWS IoT rule that processes the device's position data
   *          for use by AWS IoT Core for LoRaWAN.</p>
   */
  DestinationName?: string;
}

/**
 * <p>Information about a Sidewalk account.</p>
 */
export interface SidewalkAccountInfo {
  /**
   * <p>The Sidewalk Amazon ID.</p>
   */
  AmazonId?: string;

  /**
   * <p>The Sidewalk application server private key.</p>
   */
  AppServerPrivateKey?: string;
}

/**
 * <p>A simple label consisting of a customer-defined key-value pair</p>
 */
export interface Tag {
  /**
   * <p>The tag's key value.</p>
   */
  Key: string | undefined;

  /**
   * <p>The tag's value.</p>
   */
  Value: string | undefined;
}

export interface AssociateAwsAccountWithPartnerAccountRequest {
  /**
   * <p>The Sidewalk account credentials.</p>
   */
  Sidewalk: SidewalkAccountInfo | undefined;

  /**
   * <p>Each resource must have a unique client request token. If you try to create a new resource with the same token as a resource that already exists, an exception occurs. If you omit this value, AWS SDKs will automatically generate a unique client request. </p>
   */
  ClientRequestToken?: string;

  /**
   * <p>The tags to attach to the specified resource. Tags are metadata that you can use to manage a resource.</p>
   */
  Tags?: Tag[];
}

export interface AssociateAwsAccountWithPartnerAccountResponse {
  /**
   * <p>The Sidewalk account credentials.</p>
   */
  Sidewalk?: SidewalkAccountInfo;

  /**
   * <p>The Amazon Resource Name of the resource.</p>
   */
  Arn?: string;
}

/**
 * <p>Adding, updating, or deleting the resource can cause an inconsistent state.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * <p>Id of the resource in the conflicting operation.</p>
   */
  ResourceId?: string;

  /**
   * <p>Type of the resource in the conflicting operation.</p>
   */
  ResourceType?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
    this.Message = opts.Message;
    this.ResourceId = opts.ResourceId;
    this.ResourceType = opts.ResourceType;
  }
}

/**
 * <p>An unexpected error occurred while processing a request.</p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Resource does not exist.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * <p>Id of the not found resource.</p>
   */
  ResourceId?: string;

  /**
   * <p>Type of the font found resource.</p>
   */
  ResourceType?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    this.Message = opts.Message;
    this.ResourceId = opts.ResourceId;
    this.ResourceType = opts.ResourceType;
  }
}

/**
 * <p>The request was denied because it exceeded the allowed API request rate.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The input did not meet the specified constraints.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
    this.Message = opts.Message;
  }
}

export interface AssociateMulticastGroupWithFuotaTaskRequest {
  /**
   * <p>The ID of a FUOTA task.</p>
   */
  Id: string | undefined;

  /**
   * <p>The ID of the multicast group.</p>
   */
  MulticastGroupId: string | undefined;
}

export interface AssociateMulticastGroupWithFuotaTaskResponse {}

export interface AssociateWirelessDeviceWithFuotaTaskRequest {
  /**
   * <p>The ID of a FUOTA task.</p>
   */
  Id: string | undefined;

  /**
   * <p>The ID of the wireless device.</p>
   */
  WirelessDeviceId: string | undefined;
}

export interface AssociateWirelessDeviceWithFuotaTaskResponse {}

export interface AssociateWirelessDeviceWithMulticastGroupRequest {
  /**
   * <p>The ID of the multicast group.</p>
   */
  Id: string | undefined;

  /**
   * <p>The ID of the wireless device.</p>
   */
  WirelessDeviceId: string | undefined;
}

export interface AssociateWirelessDeviceWithMulticastGroupResponse {}

export interface AssociateWirelessDeviceWithThingRequest {
  /**
   * <p>The ID of the resource to update.</p>
   */
  Id: string | undefined;

  /**
   * <p>The ARN of the thing to associate with the wireless device.</p>
   */
  ThingArn: string | undefined;
}

export interface AssociateWirelessDeviceWithThingResponse {}

export interface AssociateWirelessGatewayWithCertificateRequest {
  /**
   * <p>The ID of the resource to update.</p>
   */
  Id: string | undefined;

  /**
   * <p>The ID of the certificate to associate with the wireless gateway.</p>
   */
  IotCertificateId: string | undefined;
}

export interface AssociateWirelessGatewayWithCertificateResponse {
  /**
   * <p>The ID of the certificate associated with the wireless gateway.</p>
   */
  IotCertificateId?: string;
}

export interface AssociateWirelessGatewayWithThingRequest {
  /**
   * <p>The ID of the resource to update.</p>
   */
  Id: string | undefined;

  /**
   * <p>The ARN of the thing to associate with the wireless gateway.</p>
   */
  ThingArn: string | undefined;
}

export interface AssociateWirelessGatewayWithThingResponse {}

export enum BatteryLevel {
  CRITICAL = "critical",
  LOW = "low",
  NORMAL = "normal",
}

/**
 * <p>Beaconing parameters for configuring the wireless gateways.</p>
 */
export interface Beaconing {
  /**
   * <p>The data rate for gateways that are sending the beacons.</p>
   */
  DataRate?: number;

  /**
   * <p>The frequency list for the gateways to send the beacons.</p>
   */
  Frequencies?: number[];
}

export interface CancelMulticastGroupSessionRequest {
  /**
   * <p>The ID of the multicast group.</p>
   */
  Id: string | undefined;
}

export interface CancelMulticastGroupSessionResponse {}

/**
 * <p>CDMA local ID information, which corresponds to the local identification parameters of a CDMA cell.</p>
 */
export interface CdmaLocalId {
  /**
   * <p>Pseudo-noise offset, which is a characteristic of the signal from a cell on a radio tower.</p>
   */
  PnOffset: number | undefined;

  /**
   * <p>CDMA channel information.</p>
   */
  CdmaChannel: number | undefined;
}

/**
 * <p>CDMA object for network measurement reports.</p>
 */
export interface CdmaNmrObj {
  /**
   * <p>Pseudo-noise offset, which is a characteristic of the signal from a cell on a radio tower.</p>
   */
  PnOffset: number | undefined;

  /**
   * <p>CDMA channel information.</p>
   */
  CdmaChannel: number | undefined;

  /**
   * <p>Transmit power level of the pilot signal, measured in dBm (decibel-milliwatts).</p>
   */
  PilotPower?: number;

  /**
   * <p>CDMA base station ID (BSID).</p>
   */
  BaseStationId?: number;
}

/**
 * <p>CDMA (Code-division multiple access) object.</p>
 */
export interface CdmaObj {
  /**
   * <p>CDMA system ID (SID).</p>
   */
  SystemId: number | undefined;

  /**
   * <p>CDMA network ID (NID).</p>
   */
  NetworkId: number | undefined;

  /**
   * <p>CDMA base station ID (BSID).</p>
   */
  BaseStationId: number | undefined;

  /**
   * <p>CDMA registration zone (RZ).</p>
   */
  RegistrationZone?: number;

  /**
   * <p>CDMA local identification (local ID) parameters.</p>
   */
  CdmaLocalId?: CdmaLocalId;

  /**
   * <p>Transmit power level of the pilot signal, measured in dBm (decibel-milliwatts).</p>
   */
  PilotPower?: number;

  /**
   * <p>CDMA base station latitude in degrees.</p>
   */
  BaseLat?: number;

  /**
   * <p>CDMA base station longtitude in degrees.</p>
   */
  BaseLng?: number;

  /**
   * <p>CDMA network measurement reports.</p>
   */
  CdmaNmr?: CdmaNmrObj[];
}

/**
 * <p>GSM local ID information, which corresponds to the local identification parameters of a GSM cell.</p>
 */
export interface GsmLocalId {
  /**
   * <p>GSM base station identity code (BSIC).</p>
   */
  Bsic: number | undefined;

  /**
   * <p>GSM broadcast control channel.</p>
   */
  Bcch: number | undefined;
}

/**
 * <p>Global identity information.</p>
 */
export interface GlobalIdentity {
  /**
   * <p>Location area code of the global identity.</p>
   */
  Lac: number | undefined;

  /**
   * <p>GERAN (GSM EDGE Radio Access Network) cell global identifier.</p>
   */
  GeranCid: number | undefined;
}

/**
 * <p>GSM object for network measurement reports.</p>
 */
export interface GsmNmrObj {
  /**
   * <p>GSM base station identity code (BSIC).</p>
   */
  Bsic: number | undefined;

  /**
   * <p>GSM broadcast control channel.</p>
   */
  Bcch: number | undefined;

  /**
   * <p>Rx level, which is the received signal power, measured in dBm (decibel-milliwatts).</p>
   */
  RxLevel?: number;

  /**
   * <p>Global identity information of the GSM object.</p>
   */
  GlobalIdentity?: GlobalIdentity;
}

/**
 * <p>GSM object.</p>
 */
export interface GsmObj {
  /**
   * <p>Mobile Country Code.</p>
   */
  Mcc: number | undefined;

  /**
   * <p>Mobile Network Code.</p>
   */
  Mnc: number | undefined;

  /**
   * <p>Location area code.</p>
   */
  Lac: number | undefined;

  /**
   * <p>GERAN (GSM EDGE Radio Access Network) Cell Global Identifier.</p>
   */
  GeranCid: number | undefined;

  /**
   * <p>GSM local identification (local ID) information.</p>
   */
  GsmLocalId?: GsmLocalId;

  /**
   * <p>Timing advance value, which corresponds to the length of time a signal takes to reach the
   *          base station from a mobile phone.</p>
   */
  GsmTimingAdvance?: number;

  /**
   * <p>Rx level, which is the received signal power, measured in dBm (decibel-milliwatts).</p>
   */
  RxLevel?: number;

  /**
   * <p>GSM object for network measurement reports.</p>
   */
  GsmNmr?: GsmNmrObj[];
}

/**
 * <p>LTE local identification (local ID) information.</p>
 */
export interface LteLocalId {
  /**
   * <p>Physical cell ID.</p>
   */
  Pci: number | undefined;

  /**
   * <p>Evolved universal terrestrial radio access (E-UTRA) absolute radio frequency channel number (FCN).</p>
   */
  Earfcn: number | undefined;
}

/**
 * <p>LTE object for network measurement reports.</p>
 */
export interface LteNmrObj {
  /**
   * <p>Physical cell ID.</p>
   */
  Pci: number | undefined;

  /**
   * <p>E-UTRA (Evolved universal terrestrial Radio Access) absolute radio frequency channel Number (EARFCN).</p>
   */
  Earfcn: number | undefined;

  /**
   * <p>E-UTRAN (Evolved Universal Terrestrial Radio Access Network) cell global identifier (EUTRANCID).</p>
   */
  EutranCid: number | undefined;

  /**
   * <p>Signal power of the reference signal received, measured in dBm (decibel-milliwatts).</p>
   */
  Rsrp?: number;

  /**
   * <p>Signal quality of the reference Signal received, measured in decibels (dB).</p>
   */
  Rsrq?: number;
}

/**
 * <p>LTE object.</p>
 */
export interface LteObj {
  /**
   * <p>Mobile Country Code.</p>
   */
  Mcc: number | undefined;

  /**
   * <p>Mobile Network Code.</p>
   */
  Mnc: number | undefined;

  /**
   * <p>E-UTRAN (Evolved Universal Terrestrial Radio Access Network) Cell Global Identifier.</p>
   */
  EutranCid: number | undefined;

  /**
   * <p>LTE tracking area code.</p>
   */
  Tac?: number;

  /**
   * <p>LTE local identification (local ID) information.</p>
   */
  LteLocalId?: LteLocalId;

  /**
   * <p>LTE timing advance.</p>
   */
  LteTimingAdvance?: number;

  /**
   * <p>Signal power of the reference signal received, measured in dBm (decibel-milliwatts).</p>
   */
  Rsrp?: number;

  /**
   * <p>Signal quality of the reference Signal received, measured in decibels (dB).</p>
   */
  Rsrq?: number;

  /**
   * <p>Parameter that determines whether the LTE object is capable of supporting NR (new radio).</p>
   */
  NrCapable?: boolean;

  /**
   * <p>LTE object for network measurement reports.</p>
   */
  LteNmr?: LteNmrObj[];
}

/**
 * <p>TD-SCDMA local identification (local Id) information.</p>
 */
export interface TdscdmaLocalId {
  /**
   * <p>TD-SCDMA UTRA (Universal Terrestrial Radio Access Network) absolute RF channel number (UARFCN).</p>
   */
  Uarfcn: number | undefined;

  /**
   * <p>Cell parameters for TD-SCDMA.</p>
   */
  CellParams: number | undefined;
}

/**
 * <p>TD-SCDMA object for network measurement reports.</p>
 */
export interface TdscdmaNmrObj {
  /**
   * <p>TD-SCDMA UTRA (Universal Terrestrial Radio Access Network) absolute RF channel number.</p>
   */
  Uarfcn: number | undefined;

  /**
   * <p>Cell parameters for TD-SCDMA network measurement reports object.</p>
   */
  CellParams: number | undefined;

  /**
   * <p>UTRAN (UMTS Terrestrial Radio Access Network) cell global identifier.</p>
   */
  UtranCid?: number;

  /**
   * <p>Code power of the received signal, measured in decibel-milliwatts (dBm).</p>
   */
  Rscp?: number;

  /**
   * <p>Path loss, or path attenuation, is the reduction in power density of an electromagnetic wave as it
   *          propagates through space.</p>
   */
  PathLoss?: number;
}

/**
 * <p>TD-SCDMA object.</p>
 */
export interface TdscdmaObj {
  /**
   * <p>Mobile Country Code.</p>
   */
  Mcc: number | undefined;

  /**
   * <p>Mobile Network Code.</p>
   */
  Mnc: number | undefined;

  /**
   * <p>Location Area Code.</p>
   */
  Lac?: number;

  /**
   * <p>UTRAN (UMTS Terrestrial Radio Access Network) Cell Global Identifier.</p>
   */
  UtranCid: number | undefined;

  /**
   * <p>TD-SCDMA local identification (local ID) information.</p>
   */
  TdscdmaLocalId?: TdscdmaLocalId;

  /**
   * <p>TD-SCDMA Timing advance.</p>
   */
  TdscdmaTimingAdvance?: number;

  /**
   * <p>Signal power of the received signal (Received Signal Code Power), measured in decibel-milliwatts (dBm).</p>
   */
  Rscp?: number;

  /**
   * <p>Path loss, or path attenuation, is the reduction in power density of an electromagnetic wave as it
   *          propagates through space.</p>
   */
  PathLoss?: number;

  /**
   * <p>TD-SCDMA object for network measurement reports.</p>
   */
  TdscdmaNmr?: TdscdmaNmrObj[];
}

/**
 * <p>WCDMA local identification (local ID) information.</p>
 */
export interface WcdmaLocalId {
  /**
   * <p>WCDMA UTRA Absolute RF Channel Number downlink.</p>
   */
  Uarfcndl: number | undefined;

  /**
   * <p>Primary Scrambling Code.</p>
   */
  Psc: number | undefined;
}

/**
 * <p>Network Measurement Reports.</p>
 */
export interface WcdmaNmrObj {
  /**
   * <p>WCDMA UTRA Absolute RF Channel Number downlink.</p>
   */
  Uarfcndl: number | undefined;

  /**
   * <p>Primary Scrambling Code.</p>
   */
  Psc: number | undefined;

  /**
   * <p>UTRAN (UMTS Terrestrial Radio Access Network) Cell Global Identifier.</p>
   */
  UtranCid: number | undefined;

  /**
   * <p>Received Signal Code Power (signal power) (dBm)</p>
   */
  Rscp?: number;

  /**
   * <p>Path loss, or path attenuation, is the reduction in power density of an electromagnetic wave as
   *          it propagates through space.</p>
   */
  PathLoss?: number;
}

/**
 * <p>WCDMA.</p>
 */
export interface WcdmaObj {
  /**
   * <p>Mobile Country Code.</p>
   */
  Mcc: number | undefined;

  /**
   * <p>Mobile Network Code.</p>
   */
  Mnc: number | undefined;

  /**
   * <p>Location Area Code.</p>
   */
  Lac?: number;

  /**
   * <p>UTRAN (UMTS Terrestrial Radio Access Network) Cell Global Identifier.</p>
   */
  UtranCid: number | undefined;

  /**
   * <p>WCDMA local ID information.</p>
   */
  WcdmaLocalId?: WcdmaLocalId;

  /**
   * <p>Received Signal Code Power (signal power) (dBm).</p>
   */
  Rscp?: number;

  /**
   * <p>Path loss, or path attenuation, is the reduction in power density of an electromagnetic wave as
   *          it propagates through space.</p>
   */
  PathLoss?: number;

  /**
   * <p>WCDMA object for network measurement reports.</p>
   */
  WcdmaNmr?: WcdmaNmrObj[];
}

/**
 * <p>The cell towers that were used to perform the measurements.</p>
 */
export interface CellTowers {
  /**
   * <p>GSM object information.</p>
   */
  Gsm?: GsmObj[];

  /**
   * <p>WCDMA object information.</p>
   */
  Wcdma?: WcdmaObj[];

  /**
   * <p>TD-SCDMA object information.</p>
   */
  Tdscdma?: TdscdmaObj[];

  /**
   * <p>LTE object information.</p>
   */
  Lte?: LteObj[];

  /**
   * <p>CDMA object information.</p>
   */
  Cdma?: CdmaObj[];
}

export enum SigningAlg {
  Ed25519 = "Ed25519",
  P256r1 = "P256r1",
}

/**
 * <p>List of sidewalk certificates.</p>
 */
export interface CertificateList {
  /**
   * <p>The certificate chain algorithm provided by sidewalk.</p>
   */
  SigningAlg: SigningAlg | string | undefined;

  /**
   * <p>The value of the chosen sidewalk certificate.</p>
   */
  Value: string | undefined;
}

export enum ConnectionStatus {
  CONNECTED = "Connected",
  DISCONNECTED = "Disconnected",
}

export enum EventNotificationTopicStatus {
  Disabled = "Disabled",
  Enabled = "Enabled",
}

/**
 * <p>Object for LoRaWAN connection status resource type event configuration.</p>
 */
export interface LoRaWANConnectionStatusEventNotificationConfigurations {
  /**
   * <p>Denotes whether the gateway EUI connection status event topic is enabled or disabled.</p>
   */
  GatewayEuiEventTopic?: EventNotificationTopicStatus | string;
}

/**
 * <p>Connection status event configuration object for enabling or disabling topic.</p>
 */
export interface ConnectionStatusEventConfiguration {
  /**
   * <p>Connection status event configuration object for enabling or disabling LoRaWAN related event topics.</p>
   */
  LoRaWAN?: LoRaWANConnectionStatusEventNotificationConfigurations;

  /**
   * <p>Denotes whether the wireless gateway ID connection status event topic is enabled or disabled.</p>
   */
  WirelessGatewayIdEventTopic?: EventNotificationTopicStatus | string;
}

/**
 * <p>Object for LoRaWAN connection status resource type event configuration.</p>
 */
export interface LoRaWANConnectionStatusResourceTypeEventConfiguration {
  /**
   * <p>Denotes whether the wireless gateway connection status event topic is enabled or disabled.</p>
   */
  WirelessGatewayEventTopic?: EventNotificationTopicStatus | string;
}

/**
 * <p>Connection status resource type event configuration object for enabling or disabling topic.</p>
 */
export interface ConnectionStatusResourceTypeEventConfiguration {
  /**
   * <p>Connection status resource type event configuration object for enabling or disabling LoRaWAN related
   *             event topics.</p>
   */
  LoRaWAN?: LoRaWANConnectionStatusResourceTypeEventConfiguration;
}

export enum ExpressionType {
  MqttTopic = "MqttTopic",
  RuleName = "RuleName",
}

export interface CreateDestinationRequest {
  /**
   * <p>The name of the new resource.</p>
   */
  Name: string | undefined;

  /**
   * <p>The type of value in <code>Expression</code>.</p>
   */
  ExpressionType: ExpressionType | string | undefined;

  /**
   * <p>The rule name or topic rule to send messages to.</p>
   */
  Expression: string | undefined;

  /**
   * <p>The description of the new resource.</p>
   */
  Description?: string;

  /**
   * <p>The ARN of the IAM Role that authorizes the destination.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>The tags to attach to the new destination. Tags are metadata that you can use to manage a resource.</p>
   */
  Tags?: Tag[];

  /**
   * <p>Each resource must have a unique client request token. If you try to create a new resource with the same token as a resource that already exists, an exception occurs. If you omit this value, AWS SDKs will automatically generate a unique client request. </p>
   */
  ClientRequestToken?: string;
}

export interface CreateDestinationResponse {
  /**
   * <p>The Amazon Resource Name of the new resource.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the new resource.</p>
   */
  Name?: string;
}

/**
 * <p>LoRaWANDeviceProfile object.</p>
 */
export interface LoRaWANDeviceProfile {
  /**
   * <p>The SupportsClassB value.</p>
   */
  SupportsClassB?: boolean;

  /**
   * <p>The ClassBTimeout value.</p>
   */
  ClassBTimeout?: number;

  /**
   * <p>The PingSlotPeriod value.</p>
   */
  PingSlotPeriod?: number;

  /**
   * <p>The PingSlotDR value.</p>
   */
  PingSlotDr?: number;

  /**
   * <p>The PingSlotFreq value.</p>
   */
  PingSlotFreq?: number;

  /**
   * <p>The SupportsClassC value.</p>
   */
  SupportsClassC?: boolean;

  /**
   * <p>The ClassCTimeout value.</p>
   */
  ClassCTimeout?: number;

  /**
   * <p>The MAC version (such as OTAA 1.1 or OTAA 1.0.3) to use with this device profile.</p>
   */
  MacVersion?: string;

  /**
   * <p>The version of regional parameters.</p>
   */
  RegParamsRevision?: string;

  /**
   * <p>The RXDelay1 value.</p>
   */
  RxDelay1?: number;

  /**
   * <p>The RXDROffset1 value.</p>
   */
  RxDrOffset1?: number;

  /**
   * <p>The RXDataRate2 value.</p>
   */
  RxDataRate2?: number;

  /**
   * <p>The RXFreq2 value.</p>
   */
  RxFreq2?: number;

  /**
   * <p>The list of values that make up the FactoryPresetFreqs value.</p>
   */
  FactoryPresetFreqsList?: number[];

  /**
   * <p>The MaxEIRP value.</p>
   */
  MaxEirp?: number;

  /**
   * <p>The MaxDutyCycle value.</p>
   */
  MaxDutyCycle?: number;

  /**
   * <p>The frequency band (RFRegion) value.</p>
   */
  RfRegion?: string;

  /**
   * <p>The SupportsJoin value.</p>
   */
  SupportsJoin?: boolean;

  /**
   * <p>The Supports32BitFCnt value.</p>
   */
  Supports32BitFCnt?: boolean;
}

export interface CreateDeviceProfileRequest {
  /**
   * <p>The name of the new resource.</p>
   */
  Name?: string;

  /**
   * <p>The device profile information to use to create the device profile.</p>
   */
  LoRaWAN?: LoRaWANDeviceProfile;

  /**
   * <p>The tags to attach to the new device profile. Tags are metadata that you can use to manage a resource.</p>
   */
  Tags?: Tag[];

  /**
   * <p>Each resource must have a unique client request token. If you try to create a new resource with the same token as a resource that already exists, an exception occurs. If you omit this value, AWS SDKs will automatically generate a unique client request. </p>
   */
  ClientRequestToken?: string;
}

export interface CreateDeviceProfileResponse {
  /**
   * <p>The Amazon Resource Name of the new resource.</p>
   */
  Arn?: string;

  /**
   * <p>The ID of the new device profile.</p>
   */
  Id?: string;
}

export enum SupportedRfRegion {
  AS923_1 = "AS923-1",
  AU915 = "AU915",
  EU868 = "EU868",
  US915 = "US915",
}

/**
 * <p>The LoRaWAN information used with a FUOTA task.</p>
 */
export interface LoRaWANFuotaTask {
  /**
   * <p>Supported RfRegions</p>
   */
  RfRegion?: SupportedRfRegion | string;
}

export interface CreateFuotaTaskRequest {
  /**
   * <p>The name of a FUOTA task.</p>
   */
  Name?: string;

  /**
   * <p>The description of the new resource.</p>
   */
  Description?: string;

  /**
   * <p>Each resource must have a unique client request token. If you try to create a new resource with the same token as a resource that already exists, an exception occurs. If you omit this value, AWS SDKs will automatically generate a unique client request.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>The LoRaWAN information used with a FUOTA task.</p>
   */
  LoRaWAN?: LoRaWANFuotaTask;

  /**
   * <p>The S3 URI points to a firmware update image that is to be used with a FUOTA task.</p>
   */
  FirmwareUpdateImage: string | undefined;

  /**
   * <p>The firmware update role that is to be used with a FUOTA task.</p>
   */
  FirmwareUpdateRole: string | undefined;

  /**
   * <p>The tag to attach to the specified resource. Tags are metadata that you can use to manage a resource.</p>
   */
  Tags?: Tag[];
}

export interface CreateFuotaTaskResponse {
  /**
   * <p>The arn of a FUOTA task.</p>
   */
  Arn?: string;

  /**
   * <p>The ID of a FUOTA task.</p>
   */
  Id?: string;
}

export enum DlClass {
  ClassB = "ClassB",
  ClassC = "ClassC",
}

/**
 * <p>The LoRaWAN information that is to be used with the multicast group.</p>
 */
export interface LoRaWANMulticast {
  /**
   * <p>Supported RfRegions</p>
   */
  RfRegion?: SupportedRfRegion | string;

  /**
   * <p>DlClass for LoRaWAM, valid values are ClassB and ClassC.</p>
   */
  DlClass?: DlClass | string;
}

export interface CreateMulticastGroupRequest {
  /**
   * <p>The name of the multicast group.</p>
   */
  Name?: string;

  /**
   * <p>The description of the multicast group.</p>
   */
  Description?: string;

  /**
   * <p>Each resource must have a unique client request token. If you try to create a new resource with the
   *             same token as a resource that already exists, an exception occurs. If you omit this value,
   *             AWS SDKs will automatically generate a unique client request. </p>
   */
  ClientRequestToken?: string;

  /**
   * <p>The LoRaWAN information that is to be used with the multicast group.</p>
   */
  LoRaWAN: LoRaWANMulticast | undefined;

  /**
   * <p>The tag to attach to the specified resource. Tags are metadata that you can use to manage a resource.</p>
   */
  Tags?: Tag[];
}

export interface CreateMulticastGroupResponse {
  /**
   * <p>The arn of the multicast group.</p>
   */
  Arn?: string;

  /**
   * <p>The ID of the multicast group.</p>
   */
  Id?: string;
}

export enum LogLevel {
  DISABLED = "DISABLED",
  ERROR = "ERROR",
  INFO = "INFO",
}

export enum WirelessDeviceFrameInfo {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

/**
 * <p>Trace content for your wireless gateway and wireless device resources.</p>
 */
export interface TraceContent {
  /**
   * <p>
   *             <code>FrameInfo</code> of your wireless device resources for the trace content. Use FrameInfo to debug
   *             the communication between your LoRaWAN end devices and the network server.</p>
   */
  WirelessDeviceFrameInfo?: WirelessDeviceFrameInfo | string;

  /**
   * <p>The log level for a log message. The log levels can be disabled, or set to <code>ERROR</code> to display
   *             less verbose logs containing only error information, or to <code>INFO</code> for more detailed logs.</p>
   */
  LogLevel?: LogLevel | string;
}

export interface CreateNetworkAnalyzerConfigurationRequest {
  /**
   * <p>Name of the network analyzer configuration.</p>
   */
  Name: string | undefined;

  /**
   * <p>Trace content for your wireless gateway and wireless device resources.</p>
   */
  TraceContent?: TraceContent;

  /**
   * <p>Wireless device resources to add to the network analyzer configuration. Provide the <code>WirelessDeviceId</code> of the resource to add in the input array.</p>
   */
  WirelessDevices?: string[];

  /**
   * <p>Wireless gateway resources to add to the network analyzer configuration. Provide the <code>WirelessGatewayId</code> of the resource to add in the input array.</p>
   */
  WirelessGateways?: string[];

  /**
   * <p>The description of the new resource.</p>
   */
  Description?: string;

  /**
   * <p>The tag to attach to the specified resource. Tags are metadata that you can use to manage a resource.</p>
   */
  Tags?: Tag[];

  /**
   * <p>Each resource must have a unique client request token. If you try to create a new resource with the same token as a resource that already exists, an exception occurs. If you omit this value, AWS SDKs will automatically generate a unique client request.</p>
   */
  ClientRequestToken?: string;
}

export interface CreateNetworkAnalyzerConfigurationResponse {
  /**
   * <p>The Amazon Resource Name of the new resource.</p>
   */
  Arn?: string;

  /**
   * <p>Name of the network analyzer configuration.</p>
   */
  Name?: string;
}

/**
 * <p>LoRaWANServiceProfile object.</p>
 */
export interface LoRaWANServiceProfile {
  /**
   * <p>The AddGWMetaData value.</p>
   */
  AddGwMetadata?: boolean;

  /**
   * <p>The DrMin value.</p>
   */
  DrMin?: number;

  /**
   * <p>The DrMax value.</p>
   */
  DrMax?: number;
}

export interface CreateServiceProfileRequest {
  /**
   * <p>The name of the new resource.</p>
   */
  Name?: string;

  /**
   * <p>The service profile information to use to create the service profile.</p>
   */
  LoRaWAN?: LoRaWANServiceProfile;

  /**
   * <p>The tags to attach to the new service profile. Tags are metadata that you can use to manage a resource.</p>
   */
  Tags?: Tag[];

  /**
   * <p>Each resource must have a unique client request token. If you try to create a new resource with the same token as a resource that already exists, an exception occurs. If you omit this value, AWS SDKs will automatically generate a unique client request. </p>
   */
  ClientRequestToken?: string;
}

export interface CreateServiceProfileResponse {
  /**
   * <p>The Amazon Resource Name of the new resource.</p>
   */
  Arn?: string;

  /**
   * <p>The ID of the new service profile.</p>
   */
  Id?: string;
}

/**
 * <p>The FPorts for the position information.</p>
 */
export interface Positioning {
  /**
   * <p>The Fport value.</p>
   */
  ClockSync?: number;

  /**
   * <p>The Fport value.</p>
   */
  Stream?: number;

  /**
   * <p>The Fport value.</p>
   */
  Gnss?: number;
}

/**
 * <p>List of FPort assigned for different LoRaWAN application packages to use</p>
 */
export interface FPorts {
  /**
   * <p>The Fport value.</p>
   */
  Fuota?: number;

  /**
   * <p>The Fport value.</p>
   */
  Multicast?: number;

  /**
   * <p>The Fport value.</p>
   */
  ClockSync?: number;

  /**
   * <p>FPort values for the GNSS, stream, and ClockSync functions of the positioning information.</p>
   */
  Positioning?: Positioning;

  /**
   * <p>Optional LoRaWAN application information, which can be used for geolocation.</p>
   */
  Applications?: ApplicationConfig[];
}

/**
 * <p>OTAA device object for v1.0.x</p>
 */
export interface OtaaV1_0_x {
  /**
   * <p>The AppKey value.</p>
   */
  AppKey?: string;

  /**
   * <p>The AppEUI value.</p>
   */
  AppEui?: string;

  /**
   * <p>The GenAppKey value.</p>
   */
  GenAppKey?: string;
}

/**
 * <p>OTAA device object for v1.1</p>
 */
export interface OtaaV1_1 {
  /**
   * <p>The AppKey value.</p>
   */
  AppKey?: string;

  /**
   * <p>The NwkKey value.</p>
   */
  NwkKey?: string;

  /**
   * <p>The JoinEUI value.</p>
   */
  JoinEui?: string;
}

/**
 * <p>LoRaWAN object for create functions.</p>
 */
export interface LoRaWANDevice {
  /**
   * <p>The DevEUI value.</p>
   */
  DevEui?: string;

  /**
   * <p>The ID of the device profile for the new wireless device.</p>
   */
  DeviceProfileId?: string;

  /**
   * <p>The ID of the service profile.</p>
   */
  ServiceProfileId?: string;

  /**
   * <p>OTAA device object for v1.1 for create APIs</p>
   */
  OtaaV1_1?: OtaaV1_1;

  /**
   * <p>OTAA device object for create APIs for v1.0.x</p>
   */
  OtaaV1_0_x?: OtaaV1_0_x;

  /**
   * <p>ABP device object for create APIs for v1.1</p>
   */
  AbpV1_1?: AbpV1_1;

  /**
   * <p>LoRaWAN object for create APIs</p>
   */
  AbpV1_0_x?: AbpV1_0_x;

  /**
   * <p>List of FPort assigned for different LoRaWAN application packages to use</p>
   */
  FPorts?: FPorts;
}

export enum PositioningConfigStatus {
  Disabled = "Disabled",
  Enabled = "Enabled",
}

export enum WirelessDeviceType {
  LoRaWAN = "LoRaWAN",
  Sidewalk = "Sidewalk",
}

export interface CreateWirelessDeviceRequest {
  /**
   * <p>The wireless device type.</p>
   */
  Type: WirelessDeviceType | string | undefined;

  /**
   * <p>The name of the new resource.</p>
   */
  Name?: string;

  /**
   * <p>The description of the new resource.</p>
   */
  Description?: string;

  /**
   * <p>The name of the destination to assign to the new wireless device.</p>
   */
  DestinationName: string | undefined;

  /**
   * <p>Each resource must have a unique client request token. If you try to create a new resource with the same token as a resource that already exists, an exception occurs. If you omit this value, AWS SDKs will automatically generate a unique client request. </p>
   */
  ClientRequestToken?: string;

  /**
   * <p>The device configuration information to use to create the wireless device.</p>
   */
  LoRaWAN?: LoRaWANDevice;

  /**
   * <p>The tags to attach to the new wireless device. Tags are metadata that you can use to manage a resource.</p>
   */
  Tags?: Tag[];

  /**
   * <p>FPort values for the GNSS, stream, and ClockSync functions of the positioning information.</p>
   */
  Positioning?: PositioningConfigStatus | string;
}

export interface CreateWirelessDeviceResponse {
  /**
   * <p>The Amazon Resource Name of the new resource.</p>
   */
  Arn?: string;

  /**
   * <p>The ID of the new wireless device.</p>
   */
  Id?: string;
}

/**
 * <p>LoRaWANGateway object.</p>
 */
export interface LoRaWANGateway {
  /**
   * <p>The gateway's EUI value.</p>
   */
  GatewayEui?: string;

  /**
   * <p>The frequency band (RFRegion) value.</p>
   */
  RfRegion?: string;

  /**
   * <p>A list of JoinEuiRange used by LoRa gateways to filter LoRa frames.</p>
   */
  JoinEuiFilters?: string[][];

  /**
   * <p>A list of NetId values that are used by LoRa gateways to filter the uplink frames.</p>
   */
  NetIdFilters?: string[];

  /**
   * <p>A list of integer indicating which sub bands are supported by LoRa gateway.</p>
   */
  SubBands?: number[];

  /**
   * <p>Beaconing object information, which consists of the data rate and frequency parameters.</p>
   */
  Beaconing?: Beaconing;
}

export interface CreateWirelessGatewayRequest {
  /**
   * <p>The name of the new resource.</p>
   */
  Name?: string;

  /**
   * <p>The description of the new resource.</p>
   */
  Description?: string;

  /**
   * <p>The gateway configuration information to use to create the wireless gateway.</p>
   */
  LoRaWAN: LoRaWANGateway | undefined;

  /**
   * <p>The tags to attach to the new wireless gateway. Tags are metadata that you can use to manage a resource.</p>
   */
  Tags?: Tag[];

  /**
   * <p>Each resource must have a unique client request token. If you try to create a new resource with the same token as a resource that already exists, an exception occurs. If you omit this value, AWS SDKs will automatically generate a unique client request. </p>
   */
  ClientRequestToken?: string;
}

export interface CreateWirelessGatewayResponse {
  /**
   * <p>The Amazon Resource Name of the new resource.</p>
   */
  Arn?: string;

  /**
   * <p>The ID of the new wireless gateway.</p>
   */
  Id?: string;
}

export interface CreateWirelessGatewayTaskRequest {
  /**
   * <p>The ID of the resource to update.</p>
   */
  Id: string | undefined;

  /**
   * <p>The ID of the WirelessGatewayTaskDefinition.</p>
   */
  WirelessGatewayTaskDefinitionId: string | undefined;
}

export enum WirelessGatewayTaskStatus {
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
  FIRST_RETRY = "FIRST_RETRY",
  IN_PROGRESS = "IN_PROGRESS",
  PENDING = "PENDING",
  SECOND_RETRY = "SECOND_RETRY",
}

export interface CreateWirelessGatewayTaskResponse {
  /**
   * <p>The ID of the WirelessGatewayTaskDefinition.</p>
   */
  WirelessGatewayTaskDefinitionId?: string;

  /**
   * <p>The status of the request.</p>
   */
  Status?: WirelessGatewayTaskStatus | string;
}

/**
 * <p>LoRaWANGatewayVersion object.</p>
 */
export interface LoRaWANGatewayVersion {
  /**
   * <p>The version of the wireless gateway firmware.</p>
   */
  PackageVersion?: string;

  /**
   * <p>The model number of the wireless gateway.</p>
   */
  Model?: string;

  /**
   * <p>The basic station version of the wireless gateway.</p>
   */
  Station?: string;
}

/**
 * <p>LoRaWANUpdateGatewayTaskCreate object.</p>
 */
export interface LoRaWANUpdateGatewayTaskCreate {
  /**
   * <p>The signature used to verify the update firmware.</p>
   */
  UpdateSignature?: string;

  /**
   * <p>The CRC of the signature private key to check.</p>
   */
  SigKeyCrc?: number;

  /**
   * <p>The version of the gateways that should receive the update.</p>
   */
  CurrentVersion?: LoRaWANGatewayVersion;

  /**
   * <p>The firmware version to update the gateway to.</p>
   */
  UpdateVersion?: LoRaWANGatewayVersion;
}

/**
 * <p>UpdateWirelessGatewayTaskCreate object.</p>
 */
export interface UpdateWirelessGatewayTaskCreate {
  /**
   * <p>The link to the S3 bucket.</p>
   */
  UpdateDataSource?: string;

  /**
   * <p>The IAM role used to read data from the S3 bucket.</p>
   */
  UpdateDataRole?: string;

  /**
   * <p>The properties that relate to the LoRaWAN wireless gateway.</p>
   */
  LoRaWAN?: LoRaWANUpdateGatewayTaskCreate;
}

export interface CreateWirelessGatewayTaskDefinitionRequest {
  /**
   * <p>Whether to automatically create tasks using this task definition for all gateways with the specified current version. If <code>false</code>, the task must me created by calling <code>CreateWirelessGatewayTask</code>.</p>
   */
  AutoCreateTasks: boolean | undefined;

  /**
   * <p>The name of the new resource.</p>
   */
  Name?: string;

  /**
   * <p>Information about the gateways to update.</p>
   */
  Update?: UpdateWirelessGatewayTaskCreate;

  /**
   * <p>Each resource must have a unique client request token. If you try to create a new resource with the same token as a resource that already exists, an exception occurs. If you omit this value, AWS SDKs will automatically generate a unique client request. </p>
   */
  ClientRequestToken?: string;

  /**
   * <p>The tags to attach to the specified resource. Tags are metadata that you can use to manage a resource.</p>
   */
  Tags?: Tag[];
}

export interface CreateWirelessGatewayTaskDefinitionResponse {
  /**
   * <p>The ID of the new wireless gateway task definition.</p>
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name of the resource.</p>
   */
  Arn?: string;
}

export interface DeleteDestinationRequest {
  /**
   * <p>The name of the resource to delete.</p>
   */
  Name: string | undefined;
}

export interface DeleteDestinationResponse {}

export interface DeleteDeviceProfileRequest {
  /**
   * <p>The ID of the resource to delete.</p>
   */
  Id: string | undefined;
}

export interface DeleteDeviceProfileResponse {}

export interface DeleteFuotaTaskRequest {
  /**
   * <p>The ID of a FUOTA task.</p>
   */
  Id: string | undefined;
}

export interface DeleteFuotaTaskResponse {}

export interface DeleteMulticastGroupRequest {
  /**
   * <p>The ID of the multicast group.</p>
   */
  Id: string | undefined;
}

export interface DeleteMulticastGroupResponse {}

export interface DeleteNetworkAnalyzerConfigurationRequest {
  /**
   * <p>Name of the network analyzer configuration.</p>
   */
  ConfigurationName: string | undefined;
}

export interface DeleteNetworkAnalyzerConfigurationResponse {}

export interface DeleteQueuedMessagesRequest {
  /**
   * <p>The ID of a given wireless device for which downlink messages will be deleted.</p>
   */
  Id: string | undefined;

  /**
   * <p>If message ID is <code>"*"</code>, it cleares the entire downlink queue for a given
   *             device, specified by the wireless device ID. Otherwise, the downlink message with the
   *             specified message ID will be deleted.</p>
   */
  MessageId: string | undefined;

  /**
   * <p>The wireless device type, which can be either Sidewalk or LoRaWAN.</p>
   */
  WirelessDeviceType?: WirelessDeviceType | string;
}

export interface DeleteQueuedMessagesResponse {}

export interface DeleteServiceProfileRequest {
  /**
   * <p>The ID of the resource to delete.</p>
   */
  Id: string | undefined;
}

export interface DeleteServiceProfileResponse {}

export interface DeleteWirelessDeviceRequest {
  /**
   * <p>The ID of the resource to delete.</p>
   */
  Id: string | undefined;
}

export interface DeleteWirelessDeviceResponse {}

export interface DeleteWirelessGatewayRequest {
  /**
   * <p>The ID of the resource to delete.</p>
   */
  Id: string | undefined;
}

export interface DeleteWirelessGatewayResponse {}

export interface DeleteWirelessGatewayTaskRequest {
  /**
   * <p>The ID of the resource to delete.</p>
   */
  Id: string | undefined;
}

export interface DeleteWirelessGatewayTaskResponse {}

export interface DeleteWirelessGatewayTaskDefinitionRequest {
  /**
   * <p>The ID of the resource to delete.</p>
   */
  Id: string | undefined;
}

export interface DeleteWirelessGatewayTaskDefinitionResponse {}

/**
 * <p>Describes a destination.</p>
 */
export interface Destinations {
  /**
   * <p>The Amazon Resource Name of the resource.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the resource.</p>
   */
  Name?: string;

  /**
   * <p>The type of value in <code>Expression</code>.</p>
   */
  ExpressionType?: ExpressionType | string;

  /**
   * <p>The rule name or topic rule to send messages to.</p>
   */
  Expression?: string;

  /**
   * <p>The description of the resource.</p>
   */
  Description?: string;

  /**
   * <p>The ARN of the IAM Role that authorizes the destination.</p>
   */
  RoleArn?: string;
}

/**
 * <p>Describes a device profile.</p>
 */
export interface DeviceProfile {
  /**
   * <p>The Amazon Resource Name of the resource.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the resource.</p>
   */
  Name?: string;

  /**
   * <p>The ID of the device profile.</p>
   */
  Id?: string;
}

/**
 * <p>
 *             <code>SidewalkEventNotificationConfigurations</code>  object, which is the event configuration
 *             object for Sidewalk-related event topics.</p>
 */
export interface SidewalkEventNotificationConfigurations {
  /**
   * <p>Denotes whether the Amazon ID event topic is enabled or disabled.</p>
   */
  AmazonIdEventTopic?: EventNotificationTopicStatus | string;
}

/**
 * <p>Device registration state event configuration object for enabling and disabling relevant topics.</p>
 */
export interface DeviceRegistrationStateEventConfiguration {
  /**
   * <p>Device registration state event configuration object for enabling or disabling Sidewalk related event
   *             topics.</p>
   */
  Sidewalk?: SidewalkEventNotificationConfigurations;

  /**
   * <p>Denotes whether the wireless device ID device registration state event topic is enabled or disabled.</p>
   */
  WirelessDeviceIdEventTopic?: EventNotificationTopicStatus | string;
}

/**
 * <p>Sidewalk resource type event configuration object for enabling or disabling topic.</p>
 */
export interface SidewalkResourceTypeEventConfiguration {
  /**
   * <p>Denotes whether the wireless device join event topic is enabled or disabled.</p>
   */
  WirelessDeviceEventTopic?: EventNotificationTopicStatus | string;
}

/**
 * <p>Device registration state resource type event configuration object for enabling or disabling topic.</p>
 */
export interface DeviceRegistrationStateResourceTypeEventConfiguration {
  /**
   * <p>Device registration resource type state event configuration object for enabling or disabling Sidewalk
   *             related event topics.</p>
   */
  Sidewalk?: SidewalkResourceTypeEventConfiguration;
}

export enum DeviceState {
  PROVISIONED = "Provisioned",
  REGISTEREDNOTSEEN = "RegisteredNotSeen",
  REGISTEREDREACHABLE = "RegisteredReachable",
  REGISTEREDUNREACHABLE = "RegisteredUnreachable",
}

export enum PartnerType {
  Sidewalk = "Sidewalk",
}

export interface DisassociateAwsAccountFromPartnerAccountRequest {
  /**
   * <p>The partner account ID to disassociate from the AWS account.</p>
   */
  PartnerAccountId: string | undefined;

  /**
   * <p>The partner type.</p>
   */
  PartnerType: PartnerType | string | undefined;
}

export interface DisassociateAwsAccountFromPartnerAccountResponse {}

export interface DisassociateMulticastGroupFromFuotaTaskRequest {
  /**
   * <p>The ID of a FUOTA task.</p>
   */
  Id: string | undefined;

  /**
   * <p>The ID of the multicast group.</p>
   */
  MulticastGroupId: string | undefined;
}

export interface DisassociateMulticastGroupFromFuotaTaskResponse {}

export interface DisassociateWirelessDeviceFromFuotaTaskRequest {
  /**
   * <p>The ID of a FUOTA task.</p>
   */
  Id: string | undefined;

  /**
   * <p>The ID of the wireless device.</p>
   */
  WirelessDeviceId: string | undefined;
}

export interface DisassociateWirelessDeviceFromFuotaTaskResponse {}

export interface DisassociateWirelessDeviceFromMulticastGroupRequest {
  /**
   * <p>The ID of the multicast group.</p>
   */
  Id: string | undefined;

  /**
   * <p>The ID of the wireless device.</p>
   */
  WirelessDeviceId: string | undefined;
}

export interface DisassociateWirelessDeviceFromMulticastGroupResponse {}

export interface DisassociateWirelessDeviceFromThingRequest {
  /**
   * <p>The ID of the resource to update.</p>
   */
  Id: string | undefined;
}

export interface DisassociateWirelessDeviceFromThingResponse {}

export interface DisassociateWirelessGatewayFromCertificateRequest {
  /**
   * <p>The ID of the resource to update.</p>
   */
  Id: string | undefined;
}

export interface DisassociateWirelessGatewayFromCertificateResponse {}

export interface DisassociateWirelessGatewayFromThingRequest {
  /**
   * <p>The ID of the resource to update.</p>
   */
  Id: string | undefined;
}

export interface DisassociateWirelessGatewayFromThingResponse {}

export enum DownlinkMode {
  CONCURRENT = "CONCURRENT",
  SEQUENTIAL = "SEQUENTIAL",
  USING_UPLINK_GATEWAY = "USING_UPLINK_GATEWAY",
}

/**
 * <p>Gateway list item object that specifies the frequency and list of gateways for which the downlink message
 *             should be sent.</p>
 */
export interface GatewayListItem {
  /**
   * <p>The ID of the wireless gateways that you want to add to the list of gateways when sending
   *             downlink messages.</p>
   */
  GatewayId: string | undefined;

  /**
   * <p>The frequency to use for the gateways when sending a downlink message to the wireless device.</p>
   */
  DownlinkFrequency: number | undefined;
}

/**
 * <p>Specify the list of gateways to which you want to send downlink data traffic when the wireless
 *             device is running in class B or class C mode.</p>
 */
export interface ParticipatingGateways {
  /**
   * <p>Indicates whether to send the downlink message in sequential mode or concurrent mode, or to use
   *             only the chosen gateways from the previous uplink message transmission.</p>
   */
  DownlinkMode: DownlinkMode | string | undefined;

  /**
   * <p>The list of gateways that you want to use for sending the downlink data traffic.</p>
   */
  GatewayList: GatewayListItem[] | undefined;

  /**
   * <p>The duration of time for which AWS IoT Core for LoRaWAN will wait before transmitting the
   *             payload to the next gateway.</p>
   */
  TransmissionInterval: number | undefined;
}

/**
 * <p>LoRaWAN router info.</p>
 */
export interface LoRaWANSendDataToDevice {
  /**
   * <p>The Fport value.</p>
   */
  FPort?: number;

  /**
   * <p>Choose the gateways that you want to use for the downlink data traffic when the wireless device
   *             is running in class B or class C mode.</p>
   */
  ParticipatingGateways?: ParticipatingGateways;
}

/**
 * <p>The message in the downlink queue.</p>
 */
export interface DownlinkQueueMessage {
  /**
   * <p> The message ID assigned by IoT Wireless to each downlink message, which helps identify the
   *         message.</p>
   */
  MessageId?: string;

  /**
   * <p>The transmit mode to use for sending data to the wireless device. This can be <code>0</code> for UM (unacknowledge mode)
   *             or <code>1</code> for AM (acknowledge mode).</p>
   */
  TransmitMode?: number;

  /**
   * <p>The time at which Iot Wireless received the downlink message.</p>
   */
  ReceivedAt?: string;

  /**
   * <p>LoRaWAN router info.</p>
   */
  LoRaWAN?: LoRaWANSendDataToDevice;
}

export enum Event {
  ACK = "ack",
  DISCOVERED = "discovered",
  LOST = "lost",
  NACK = "nack",
  PASSTHROUGH = "passthrough",
}

/**
 * <p>Object for LoRaWAN join resource type event configuration.</p>
 */
export interface LoRaWANJoinEventNotificationConfigurations {
  /**
   * <p>Denotes whether the Dev EUI join event topic is enabled or disabled.</p>
   */
  DevEuiEventTopic?: EventNotificationTopicStatus | string;
}

/**
 * <p>Join event configuration object for enabling or disabling topic.</p>
 */
export interface JoinEventConfiguration {
  /**
   * <p>Join event configuration object for enabling or disabling LoRaWAN related event topics.</p>
   */
  LoRaWAN?: LoRaWANJoinEventNotificationConfigurations;

  /**
   * <p>Denotes whether the wireless device ID join event topic is enabled or disabled.</p>
   */
  WirelessDeviceIdEventTopic?: EventNotificationTopicStatus | string;
}

/**
 * <p>Message delivery status event configuration object for enabling and disabling relevant
 *             topics.</p>
 */
export interface MessageDeliveryStatusEventConfiguration {
  /**
   * <p>
   *             <code>SidewalkEventNotificationConfigurations</code>  object, which is the event configuration
   *             object for Sidewalk-related event topics.</p>
   */
  Sidewalk?: SidewalkEventNotificationConfigurations;

  /**
   * <p>Denotes whether the wireless device ID message delivery status event topic is enabled
   *             or disabled.</p>
   */
  WirelessDeviceIdEventTopic?: EventNotificationTopicStatus | string;
}

/**
 * <p>Proximity event configuration object for enabling and disabling relevant topics.</p>
 */
export interface ProximityEventConfiguration {
  /**
   * <p>Proximity event configuration object for enabling or disabling Sidewalk related event topics.</p>
   */
  Sidewalk?: SidewalkEventNotificationConfigurations;

  /**
   * <p>Denotes whether the wireless device ID proximity event topic is enabled or disabled.</p>
   */
  WirelessDeviceIdEventTopic?: EventNotificationTopicStatus | string;
}

/**
 * <p>Object of all event configurations and the status of the event topics.</p>
 */
export interface EventNotificationItemConfigurations {
  /**
   * <p>Device registration state event configuration for an event configuration item.</p>
   */
  DeviceRegistrationState?: DeviceRegistrationStateEventConfiguration;

  /**
   * <p>Proximity event configuration for an event configuration item.</p>
   */
  Proximity?: ProximityEventConfiguration;

  /**
   * <p>Join event configuration for an event configuration item.</p>
   */
  Join?: JoinEventConfiguration;

  /**
   * <p>Connection status event configuration for an event configuration item.</p>
   */
  ConnectionStatus?: ConnectionStatusEventConfiguration;

  /**
   * <p>Message delivery status event configuration for an event configuration item.</p>
   */
  MessageDeliveryStatus?: MessageDeliveryStatusEventConfiguration;
}

export enum IdentifierType {
  DevEui = "DevEui",
  GatewayEui = "GatewayEui",
  PartnerAccountId = "PartnerAccountId",
  WirelessDeviceId = "WirelessDeviceId",
  WirelessGatewayId = "WirelessGatewayId",
}

export enum EventNotificationPartnerType {
  Sidewalk = "Sidewalk",
}

/**
 * <p>Event configuration object for a single resource.</p>
 */
export interface EventConfigurationItem {
  /**
   * <p>Resource identifier opted in for event messaging.</p>
   */
  Identifier?: string;

  /**
   * <p>Identifier type of the particular resource identifier for event configuration.</p>
   */
  IdentifierType?: IdentifierType | string;

  /**
   * <p>Partner type of the resource if the identifier type is PartnerAccountId.</p>
   */
  PartnerType?: EventNotificationPartnerType | string;

  /**
   * <p>Object of all event configurations and the status of the event topics.</p>
   */
  Events?: EventNotificationItemConfigurations;
}

export enum EventNotificationResourceType {
  SidewalkAccount = "SidewalkAccount",
  WirelessDevice = "WirelessDevice",
  WirelessGateway = "WirelessGateway",
}

export enum FuotaDeviceStatus {
  FragAlgo_unsupported = "FragAlgo_unsupported",
  FragIndex_unsupported = "FragIndex_unsupported",
  Initial = "Initial",
  MICError = "MICError",
  MemoryError = "MemoryError",
  MissingFrag = "MissingFrag",
  Not_enough_memory = "Not_enough_memory",
  Package_Not_Supported = "Package_Not_Supported",
  SessionCnt_replay = "SessionCnt_replay",
  Successful = "Successful",
  Wrong_descriptor = "Wrong_descriptor",
}

/**
 * <p>A FUOTA task.</p>
 */
export interface FuotaTask {
  /**
   * <p>The ID of a FUOTA task.</p>
   */
  Id?: string;

  /**
   * <p>The arn of a FUOTA task.</p>
   */
  Arn?: string;

  /**
   * <p>The name of a FUOTA task.</p>
   */
  Name?: string;
}

export enum FuotaTaskStatus {
  Delete_Waiting = "Delete_Waiting",
  FuotaDone = "FuotaDone",
  FuotaSession_Waiting = "FuotaSession_Waiting",
  In_FuotaSession = "In_FuotaSession",
  Pending = "Pending",
}

export interface GetDestinationRequest {
  /**
   * <p>The name of the resource to get.</p>
   */
  Name: string | undefined;
}

export interface GetDestinationResponse {
  /**
   * <p>The Amazon Resource Name of the resource.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the resource.</p>
   */
  Name?: string;

  /**
   * <p>The rule name or topic rule to send messages to.</p>
   */
  Expression?: string;

  /**
   * <p>The type of value in <code>Expression</code>.</p>
   */
  ExpressionType?: ExpressionType | string;

  /**
   * <p>The description of the resource.</p>
   */
  Description?: string;

  /**
   * <p>The ARN of the IAM Role that authorizes the destination.</p>
   */
  RoleArn?: string;
}

export interface GetDeviceProfileRequest {
  /**
   * <p>The ID of the resource to get.</p>
   */
  Id: string | undefined;
}

export interface GetDeviceProfileResponse {
  /**
   * <p>The Amazon Resource Name of the resource.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the resource.</p>
   */
  Name?: string;

  /**
   * <p>The ID of the device profile.</p>
   */
  Id?: string;

  /**
   * <p>Information about the device profile.</p>
   */
  LoRaWAN?: LoRaWANDeviceProfile;
}

export interface GetEventConfigurationByResourceTypesRequest {}

/**
 * <p>Object for LoRaWAN join resource type event configuration.</p>
 */
export interface LoRaWANJoinResourceTypeEventConfiguration {
  /**
   * <p>Denotes whether the wireless device join event topic is enabled or disabled.</p>
   */
  WirelessDeviceEventTopic?: EventNotificationTopicStatus | string;
}

/**
 * <p>Join resource type event configuration object for enabling or disabling topic.</p>
 */
export interface JoinResourceTypeEventConfiguration {
  /**
   * <p>Join resource type event configuration object for enabling or disabling LoRaWAN related
   *             event topics.</p>
   */
  LoRaWAN?: LoRaWANJoinResourceTypeEventConfiguration;
}

/**
 * <p>Message delivery status resource type event configuration object for enabling or disabling
 *             relevant topic.</p>
 */
export interface MessageDeliveryStatusResourceTypeEventConfiguration {
  /**
   * <p>Sidewalk resource type event configuration object for enabling or disabling topic.</p>
   */
  Sidewalk?: SidewalkResourceTypeEventConfiguration;
}

/**
 * <p>Proximity resource type event configuration object for enabling or disabling topic.</p>
 */
export interface ProximityResourceTypeEventConfiguration {
  /**
   * <p>Proximity resource type event configuration object for enabling and disabling wireless device topic.</p>
   */
  Sidewalk?: SidewalkResourceTypeEventConfiguration;
}

export interface GetEventConfigurationByResourceTypesResponse {
  /**
   * <p>Resource type event configuration for the device registration state event.</p>
   */
  DeviceRegistrationState?: DeviceRegistrationStateResourceTypeEventConfiguration;

  /**
   * <p>Resource type event configuration for the proximity event.</p>
   */
  Proximity?: ProximityResourceTypeEventConfiguration;

  /**
   * <p>Resource type event configuration for the join event.</p>
   */
  Join?: JoinResourceTypeEventConfiguration;

  /**
   * <p>Resource type event configuration for the connection status event.</p>
   */
  ConnectionStatus?: ConnectionStatusResourceTypeEventConfiguration;

  /**
   * <p>Resource type event configuration object for the message delivery status event.</p>
   */
  MessageDeliveryStatus?: MessageDeliveryStatusResourceTypeEventConfiguration;
}

export interface GetFuotaTaskRequest {
  /**
   * <p>The ID of a FUOTA task.</p>
   */
  Id: string | undefined;
}

/**
 * <p>The LoRaWAN information returned from getting a FUOTA task.</p>
 */
export interface LoRaWANFuotaTaskGetInfo {
  /**
   * <p>The frequency band (RFRegion) value.</p>
   */
  RfRegion?: string;

  /**
   * <p>Start time of a FUOTA task.</p>
   */
  StartTime?: Date;
}

export interface GetFuotaTaskResponse {
  /**
   * <p>The arn of a FUOTA task.</p>
   */
  Arn?: string;

  /**
   * <p>The ID of a FUOTA task.</p>
   */
  Id?: string;

  /**
   * <p>The status of a FUOTA task.</p>
   */
  Status?: FuotaTaskStatus | string;

  /**
   * <p>The name of a FUOTA task.</p>
   */
  Name?: string;

  /**
   * <p>The description of the new resource.</p>
   */
  Description?: string;

  /**
   * <p>The LoRaWAN information returned from getting a FUOTA task.</p>
   */
  LoRaWAN?: LoRaWANFuotaTaskGetInfo;

  /**
   * <p>The S3 URI points to a firmware update image that is to be used with a FUOTA task.</p>
   */
  FirmwareUpdateImage?: string;

  /**
   * <p>The firmware update role that is to be used with a FUOTA task.</p>
   */
  FirmwareUpdateRole?: string;

  /**
   * <p>Created at timestamp for the resource.</p>
   */
  CreatedAt?: Date;
}

export interface GetLogLevelsByResourceTypesRequest {}

export enum WirelessDeviceEvent {
  Downlink_Data = "Downlink_Data",
  Join = "Join",
  Registration = "Registration",
  Rejoin = "Rejoin",
  Uplink_Data = "Uplink_Data",
}

/**
 * <p>The log options for a wireless device event and can be used to set log levels for a specific wireless device event.</p>
 *          <p>For a LoRaWAN device, possible events for a log messsage are: <code>Join</code>, <code>Rejoin</code>,
 *              <code>Downlink_Data</code>, and <code>Uplink_Data</code>. For a Sidewalk device, possible events for a log message are
 *              <code>Registration</code>, <code>Downlink_Data</code>, and <code>Uplink_Data</code>.</p>
 */
export interface WirelessDeviceEventLogOption {
  /**
   * <p>The event for a log message, if the log message is tied to a wireless device.</p>
   */
  Event: WirelessDeviceEvent | string | undefined;

  /**
   * <p>The log level for a log message. The log levels can be disabled, or set to <code>ERROR</code> to display
   *             less verbose logs containing only error information, or to <code>INFO</code> for more detailed logs.</p>
   */
  LogLevel: LogLevel | string | undefined;
}

/**
 * <p>The log options for wireless devices and can be used to set log levels for a specific type of wireless device.</p>
 */
export interface WirelessDeviceLogOption {
  /**
   * <p>The wireless device type.</p>
   */
  Type: WirelessDeviceType | string | undefined;

  /**
   * <p>The log level for a log message. The log levels can be disabled, or set to <code>ERROR</code> to display
   *             less verbose logs containing only error information, or to <code>INFO</code> for more detailed logs.</p>
   */
  LogLevel: LogLevel | string | undefined;

  /**
   * <p>The list of wireless device event log options.</p>
   */
  Events?: WirelessDeviceEventLogOption[];
}

export enum WirelessGatewayEvent {
  CUPS_Request = "CUPS_Request",
  Certificate = "Certificate",
}

/**
 * <p>The log options for a wireless gateway event and can be used to set log levels for a specific wireless gateway event.</p>
 *          <p>For a LoRaWAN gateway, possible events for a log message are <code>CUPS_Request</code> and <code>Certificate</code>.</p>
 */
export interface WirelessGatewayEventLogOption {
  /**
   * <p>The event for a log message, if the log message is tied to a wireless gateway.</p>
   */
  Event: WirelessGatewayEvent | string | undefined;

  /**
   * <p>The log level for a log message. The log levels can be disabled, or set to <code>ERROR</code> to display
   *             less verbose logs containing only error information, or to <code>INFO</code> for more detailed logs.</p>
   */
  LogLevel: LogLevel | string | undefined;
}

export enum WirelessGatewayType {
  LoRaWAN = "LoRaWAN",
}

/**
 * <p>The log options for wireless gateways and can be used to set log levels for a specific type of wireless gateway.</p>
 */
export interface WirelessGatewayLogOption {
  /**
   * <p>The wireless gateway type.</p>
   */
  Type: WirelessGatewayType | string | undefined;

  /**
   * <p>The log level for a log message. The log levels can be disabled, or set to <code>ERROR</code> to display
   *             less verbose logs containing only error information, or to <code>INFO</code> for more detailed logs.</p>
   */
  LogLevel: LogLevel | string | undefined;

  /**
   * <p>The list of wireless gateway event log options.</p>
   */
  Events?: WirelessGatewayEventLogOption[];
}

export interface GetLogLevelsByResourceTypesResponse {
  /**
   * <p>The log level for a log message. The log levels can be disabled, or set to <code>ERROR</code> to display
   *             less verbose logs containing only error information, or to <code>INFO</code> for more detailed logs.</p>
   */
  DefaultLogLevel?: LogLevel | string;

  /**
   * <p>The list of wireless gateway log options.</p>
   */
  WirelessGatewayLogOptions?: WirelessGatewayLogOption[];

  /**
   * <p>The list of wireless device log options.</p>
   */
  WirelessDeviceLogOptions?: WirelessDeviceLogOption[];
}

export interface GetMulticastGroupRequest {
  /**
   * <p>The ID of the multicast group.</p>
   */
  Id: string | undefined;
}

/**
 * <p>The LoRaWAN information that is to be returned from getting multicast group information.</p>
 */
export interface LoRaWANMulticastGet {
  /**
   * <p>Supported RfRegions</p>
   */
  RfRegion?: SupportedRfRegion | string;

  /**
   * <p>DlClass for LoRaWAM, valid values are ClassB and ClassC.</p>
   */
  DlClass?: DlClass | string;

  /**
   * <p>Number of devices that are requested to be associated with the multicast group.</p>
   */
  NumberOfDevicesRequested?: number;

  /**
   * <p>Number of devices that are associated to the multicast group.</p>
   */
  NumberOfDevicesInGroup?: number;
}

export interface GetMulticastGroupResponse {
  /**
   * <p>The arn of the multicast group.</p>
   */
  Arn?: string;

  /**
   * <p>The ID of the multicast group.</p>
   */
  Id?: string;

  /**
   * <p>The name of the multicast group.</p>
   */
  Name?: string;

  /**
   * <p>The description of the new resource.</p>
   */
  Description?: string;

  /**
   * <p>The status of the multicast group.</p>
   */
  Status?: string;

  /**
   * <p>The LoRaWAN information that is to be returned from getting multicast group information.</p>
   */
  LoRaWAN?: LoRaWANMulticastGet;

  /**
   * <p>Created at timestamp for the resource.</p>
   */
  CreatedAt?: Date;
}

export interface GetMulticastGroupSessionRequest {
  /**
   * <p>The ID of the multicast group.</p>
   */
  Id: string | undefined;
}

/**
 * <p>The LoRaWAN information used with the multicast session.</p>
 */
export interface LoRaWANMulticastSession {
  /**
   * <p>Downlink data rate.</p>
   */
  DlDr?: number;

  /**
   * <p>Downlink frequency.</p>
   */
  DlFreq?: number;

  /**
   * <p>Timestamp of when the multicast group session is to start.</p>
   */
  SessionStartTime?: Date;

  /**
   * <p>How long before a multicast group session is to timeout.</p>
   */
  SessionTimeout?: number;
}

export interface GetMulticastGroupSessionResponse {
  /**
   * <p>The LoRaWAN information used with the multicast session.</p>
   */
  LoRaWAN?: LoRaWANMulticastSession;
}

export interface GetNetworkAnalyzerConfigurationRequest {
  /**
   * <p>Name of the network analyzer configuration.</p>
   */
  ConfigurationName: string | undefined;
}

export interface GetNetworkAnalyzerConfigurationResponse {
  /**
   * <p>Trace content for your wireless gateway and wireless device resources.</p>
   */
  TraceContent?: TraceContent;

  /**
   * <p>List of wireless gateway resources that have been added to the network analyzer configuration.</p>
   */
  WirelessDevices?: string[];

  /**
   * <p>List of wireless gateway resources that have been added to the network analyzer configuration.</p>
   */
  WirelessGateways?: string[];

  /**
   * <p>The description of the new resource.</p>
   */
  Description?: string;

  /**
   * <p>The Amazon Resource Name of the new resource.</p>
   */
  Arn?: string;

  /**
   * <p>Name of the network analyzer configuration.</p>
   */
  Name?: string;
}

export interface GetPartnerAccountRequest {
  /**
   * <p>The partner account ID to disassociate from the AWS account.</p>
   */
  PartnerAccountId: string | undefined;

  /**
   * <p>The partner type.</p>
   */
  PartnerType: PartnerType | string | undefined;
}

/**
 * <p>Information about a Sidewalk account.</p>
 */
export interface SidewalkAccountInfoWithFingerprint {
  /**
   * <p>The Sidewalk Amazon ID.</p>
   */
  AmazonId?: string;

  /**
   * <p>The fingerprint of the Sidewalk application server private key.</p>
   */
  Fingerprint?: string;

  /**
   * <p>The Amazon Resource Name of the resource.</p>
   */
  Arn?: string;
}

export interface GetPartnerAccountResponse {
  /**
   * <p>The Sidewalk account credentials.</p>
   */
  Sidewalk?: SidewalkAccountInfoWithFingerprint;

  /**
   * <p>Whether the partner account is linked to the AWS account.</p>
   */
  AccountLinked?: boolean;
}

export enum PositionResourceType {
  WirelessDevice = "WirelessDevice",
  WirelessGateway = "WirelessGateway",
}

export interface GetPositionRequest {
  /**
   * <p>Resource identifier used to retrieve the position information.</p>
   */
  ResourceIdentifier: string | undefined;

  /**
   * <p>Resource type of the resource for which position information is retrieved.</p>
   */
  ResourceType: PositionResourceType | string | undefined;
}

export enum PositionSolverProvider {
  SEMTECH = "Semtech",
}

export enum PositionSolverType {
  GNSS = "GNSS",
}

export interface GetPositionResponse {
  /**
   * <p>The position information of the resource.</p>
   */
  Position?: number[];

  /**
   * <p>The accuracy of the estimated position in meters. An empty value indicates that no position data is available.
   *             A value of ‘0.0’ value indicates that position data is available. This data corresponds to the position information
   *             that you specified instead of the position computed by solver.</p>
   */
  Accuracy?: Accuracy;

  /**
   * <p>The type of solver used to identify the position of the resource.</p>
   */
  SolverType?: PositionSolverType | string;

  /**
   * <p>The vendor of the positioning solver.</p>
   */
  SolverProvider?: PositionSolverProvider | string;

  /**
   * <p>The version of the positioning solver.</p>
   */
  SolverVersion?: string;

  /**
   * <p>The timestamp at which the device's position was determined.</p>
   */
  Timestamp?: string;
}

export interface GetPositionConfigurationRequest {
  /**
   * <p>Resource identifier used in a position configuration.</p>
   */
  ResourceIdentifier: string | undefined;

  /**
   * <p>Resource type of the resource for which position configuration is retrieved.</p>
   */
  ResourceType: PositionResourceType | string | undefined;
}

export enum PositionConfigurationFec {
  NONE = "NONE",
  ROSE = "ROSE",
}

export enum PositionConfigurationStatus {
  Disabled = "Disabled",
  Enabled = "Enabled",
}

/**
 * <p>Details of the Semtech GNSS solver object.</p>
 */
export interface SemtechGnssDetail {
  /**
   * <p>The vendor of the solver object.</p>
   */
  Provider?: PositionSolverProvider | string;

  /**
   * <p>The type of positioning solver used.</p>
   */
  Type?: PositionSolverType | string;

  /**
   * <p>The status indicating whether the solver is enabled.</p>
   */
  Status?: PositionConfigurationStatus | string;

  /**
   * <p>Whether forward error correction is enabled.</p>
   */
  Fec?: PositionConfigurationFec | string;
}

/**
 * <p>The wrapper for position solver details.</p>
 */
export interface PositionSolverDetails {
  /**
   * <p>The Semtech GNSS solver object details.</p>
   */
  SemtechGnss?: SemtechGnssDetail;
}

export interface GetPositionConfigurationResponse {
  /**
   * <p>The wrapper for the solver configuration details object.</p>
   */
  Solvers?: PositionSolverDetails;

  /**
   * <p>The position data destination that describes the AWS IoT rule that processes the device's position data for use by
   *             AWS IoT Core for LoRaWAN.</p>
   */
  Destination?: string;
}

/**
 * <p>Global navigation satellite system (GNSS) object used for positioning.</p>
 */
export interface Gnss {
  /**
   * <p>Payload that contains the GNSS scan result, or NAV message, in hexadecimal notation.</p>
   */
  Payload: string | undefined;

  /**
   * <p>Optional parameter that gives an estimate of the time when the GNSS scan information is
   *           taken, in seconds GPS time (GPST). If capture time is not specified, the local server time is used.</p>
   */
  CaptureTime?: number;

  /**
   * <p>Optional value that gives the capture time estimate accuracy, in seconds. If capture time
   *           accuracy is not specified, default value of 300 is used.</p>
   */
  CaptureTimeAccuracy?: number;

  /**
   * <p>Optional assistance position information, specified using latitude and longitude values in degrees.
   *           The co-ordinates are inside the WGS84 reference frame.</p>
   */
  AssistPosition?: number[];

  /**
   * <p>Optional assistance altitude, which is the altitude of the device at capture time, specified in meters above
   *           the WGS84 reference ellipsoid.</p>
   */
  AssistAltitude?: number;

  /**
   * <p>Optional parameter that forces 2D solve, which modifies the positioning algorithm to a 2D solution
   *           problem. When this parameter is specified, the assistance altitude should have an accuracy of at least 10 meters.</p>
   */
  Use2DSolver?: boolean;
}

/**
 * <p>IP address used for resolving device location.</p>
 */
export interface Ip {
  /**
   * <p>IP address information.</p>
   */
  IpAddress: string | undefined;
}

/**
 * <p>Wi-Fi access point.</p>
 */
export interface WiFiAccessPoint {
  /**
   * <p>Wi-Fi MAC Address.</p>
   */
  MacAddress: string | undefined;

  /**
   * <p>Recived signal strength of the WLAN measurement data.</p>
   */
  Rss: number | undefined;
}

export interface GetPositionEstimateRequest {
  /**
   * <p>Retrieves an estimated device position by resolving WLAN measurement data. The position is
   *         resolved using HERE's Wi-Fi based solver.</p>
   */
  WiFiAccessPoints?: WiFiAccessPoint[];

  /**
   * <p>Retrieves an estimated device position by resolving measurement data from cellular radio towers. The
   *            position is resolved using HERE's cellular-based solver.</p>
   */
  CellTowers?: CellTowers;

  /**
   * <p>Retrieves an estimated device position by resolving the IP address information from the device. The
   *            position is resolved using MaxMind's IP-based solver.</p>
   */
  Ip?: Ip;

  /**
   * <p>Retrieves an estimated device position by resolving the global navigation satellite system (GNSS)
   *            scan data. The position is resolved using the GNSS solver powered by LoRa Cloud.</p>
   */
  Gnss?: Gnss;

  /**
   * <p>Optional information that specifies the time when the position information will be resolved. It
   *         uses the UNIX timestamp format. If not specified, the time at which the request was received will be used.</p>
   */
  Timestamp?: Date;
}

export interface GetPositionEstimateResponse {
  /**
   * <p>The position information of the resource, displayed as a JSON payload. The payload uses the GeoJSON format,
   *           which a format that's used to encode geographic data structures. For more information, see <a href="https://geojson.org/">GeoJSON</a>.</p>
   */
  GeoJsonPayload?: Uint8Array;
}

export interface GetResourceEventConfigurationRequest {
  /**
   * <p>Resource identifier to opt in for event messaging.</p>
   */
  Identifier: string | undefined;

  /**
   * <p>Identifier type of the particular resource identifier for event configuration.</p>
   */
  IdentifierType: IdentifierType | string | undefined;

  /**
   * <p>Partner type of the resource if the identifier type is <code>PartnerAccountId</code>.</p>
   */
  PartnerType?: EventNotificationPartnerType | string;
}

export interface GetResourceEventConfigurationResponse {
  /**
   * <p>Event configuration for the device registration state event.</p>
   */
  DeviceRegistrationState?: DeviceRegistrationStateEventConfiguration;

  /**
   * <p>Event configuration for the proximity event.</p>
   */
  Proximity?: ProximityEventConfiguration;

  /**
   * <p>Event configuration for the join event.</p>
   */
  Join?: JoinEventConfiguration;

  /**
   * <p>Event configuration for the connection status event.</p>
   */
  ConnectionStatus?: ConnectionStatusEventConfiguration;

  /**
   * <p>Event configuration for the message delivery status event.</p>
   */
  MessageDeliveryStatus?: MessageDeliveryStatusEventConfiguration;
}

export interface GetResourceLogLevelRequest {
  /**
   * <p>The identifier of the resource. For a Wireless Device, it is the wireless device ID. For a wireless gateway,
   *             it is the wireless gateway ID.</p>
   */
  ResourceIdentifier: string | undefined;

  /**
   * <p>The type of the resource, which can be <code>WirelessDevice</code> or <code>WirelessGateway</code>.</p>
   */
  ResourceType: string | undefined;
}

export interface GetResourceLogLevelResponse {
  /**
   * <p>The log level for a log message. The log levels can be disabled, or set to <code>ERROR</code> to display
   *             less verbose logs containing only error information, or to <code>INFO</code> for more detailed logs.</p>
   */
  LogLevel?: LogLevel | string;
}

export interface GetResourcePositionRequest {
  /**
   * <p>The identifier of the resource for which position information is retrieved. It can be the wireless
   *         device ID or the wireless gateway ID depending on the resource type.</p>
   */
  ResourceIdentifier: string | undefined;

  /**
   * <p>The type of resource for which position information is retrieved, which can be a wireless device or a
   *           wireless gateway.</p>
   */
  ResourceType: PositionResourceType | string | undefined;
}

export interface GetResourcePositionResponse {
  /**
   * <p>The position information of the resource, displayed as a JSON payload. The payload uses the GeoJSON format,
   *            which a format that's used to encode geographic data structures. For more information, see <a href="https://geojson.org/">GeoJSON</a>.</p>
   */
  GeoJsonPayload?: Uint8Array;
}

export enum WirelessGatewayServiceType {
  CUPS = "CUPS",
  LNS = "LNS",
}

export interface GetServiceEndpointRequest {
  /**
   * <p>The service type for which to get endpoint information about. Can be <code>CUPS</code> for the
   *             Configuration and Update Server endpoint, or <code>LNS</code> for the LoRaWAN Network Server endpoint or
   *             <code>CLAIM</code> for the global endpoint.</p>
   */
  ServiceType?: WirelessGatewayServiceType | string;
}

export interface GetServiceEndpointResponse {
  /**
   * <p>The endpoint's service type.</p>
   */
  ServiceType?: WirelessGatewayServiceType | string;

  /**
   * <p>The service endpoint value.</p>
   */
  ServiceEndpoint?: string;

  /**
   * <p>The Root CA of the server trust certificate.</p>
   */
  ServerTrust?: string;
}

export interface GetServiceProfileRequest {
  /**
   * <p>The ID of the resource to get.</p>
   */
  Id: string | undefined;
}

/**
 * <p>LoRaWANGetServiceProfileInfo object.</p>
 */
export interface LoRaWANGetServiceProfileInfo {
  /**
   * <p>The ULRate value.</p>
   */
  UlRate?: number;

  /**
   * <p>The ULBucketSize value.</p>
   */
  UlBucketSize?: number;

  /**
   * <p>The ULRatePolicy value.</p>
   */
  UlRatePolicy?: string;

  /**
   * <p>The DLRate value.</p>
   */
  DlRate?: number;

  /**
   * <p>The DLBucketSize value.</p>
   */
  DlBucketSize?: number;

  /**
   * <p>The DLRatePolicy value.</p>
   */
  DlRatePolicy?: string;

  /**
   * <p>The AddGWMetaData value.</p>
   */
  AddGwMetadata?: boolean;

  /**
   * <p>The DevStatusReqFreq value.</p>
   */
  DevStatusReqFreq?: number;

  /**
   * <p>The ReportDevStatusBattery value.</p>
   */
  ReportDevStatusBattery?: boolean;

  /**
   * <p>The ReportDevStatusMargin value.</p>
   */
  ReportDevStatusMargin?: boolean;

  /**
   * <p>The DRMin value.</p>
   */
  DrMin?: number;

  /**
   * <p>The DRMax value.</p>
   */
  DrMax?: number;

  /**
   * <p>The ChannelMask value.</p>
   */
  ChannelMask?: string;

  /**
   * <p>The PRAllowed value that describes whether passive roaming is allowed.</p>
   */
  PrAllowed?: boolean;

  /**
   * <p>The HRAllowed value that describes whether handover roaming is allowed.</p>
   */
  HrAllowed?: boolean;

  /**
   * <p>The RAAllowed value that describes whether roaming activation is allowed.</p>
   */
  RaAllowed?: boolean;

  /**
   * <p>The NwkGeoLoc value.</p>
   */
  NwkGeoLoc?: boolean;

  /**
   * <p>The TargetPER value.</p>
   */
  TargetPer?: number;

  /**
   * <p>The MinGwDiversity value.</p>
   */
  MinGwDiversity?: number;
}

export interface GetServiceProfileResponse {
  /**
   * <p>The Amazon Resource Name of the resource.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the resource.</p>
   */
  Name?: string;

  /**
   * <p>The ID of the service profile.</p>
   */
  Id?: string;

  /**
   * <p>Information about the service profile.</p>
   */
  LoRaWAN?: LoRaWANGetServiceProfileInfo;
}

export enum WirelessDeviceIdType {
  DevEui = "DevEui",
  SidewalkManufacturingSn = "SidewalkManufacturingSn",
  ThingName = "ThingName",
  WirelessDeviceId = "WirelessDeviceId",
}

export interface GetWirelessDeviceRequest {
  /**
   * <p>The identifier of the wireless device to get.</p>
   */
  Identifier: string | undefined;

  /**
   * <p>The type of identifier used in <code>identifier</code>.</p>
   */
  IdentifierType: WirelessDeviceIdType | string | undefined;
}

/**
 * <p>Sidewalk device object.</p>
 */
export interface SidewalkDevice {
  /**
   * <p>The Sidewalk Amazon ID.</p>
   */
  AmazonId?: string;

  /**
   * <p>The sidewalk device identification.</p>
   */
  SidewalkId?: string;

  /**
   * <p>The Sidewalk manufacturing series number.</p>
   */
  SidewalkManufacturingSn?: string;

  /**
   * <p>The sidewalk device certificates for Ed25519 and P256r1.</p>
   */
  DeviceCertificates?: CertificateList[];
}

export interface GetWirelessDeviceResponse {
  /**
   * <p>The wireless device type.</p>
   */
  Type?: WirelessDeviceType | string;

  /**
   * <p>The name of the resource.</p>
   */
  Name?: string;

  /**
   * <p>The description of the resource.</p>
   */
  Description?: string;

  /**
   * <p>The name of the destination to which the device is assigned.</p>
   */
  DestinationName?: string;

  /**
   * <p>The ID of the wireless device.</p>
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name of the resource.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the thing associated with the wireless device. The value is empty if a thing isn't associated with the device.</p>
   */
  ThingName?: string;

  /**
   * <p>The ARN of the thing associated with the wireless device.</p>
   */
  ThingArn?: string;

  /**
   * <p>Information about the wireless device.</p>
   */
  LoRaWAN?: LoRaWANDevice;

  /**
   * <p>Sidewalk device object.</p>
   */
  Sidewalk?: SidewalkDevice;

  /**
   * <p>FPort values for the GNSS, stream, and ClockSync functions of the positioning information.</p>
   */
  Positioning?: PositioningConfigStatus | string;
}

export interface GetWirelessDeviceStatisticsRequest {
  /**
   * <p>The ID of the wireless device for which to get the data.</p>
   */
  WirelessDeviceId: string | undefined;
}

/**
 * <p>LoRaWAN gateway metatdata.</p>
 */
export interface LoRaWANGatewayMetadata {
  /**
   * <p>The gateway's EUI value.</p>
   */
  GatewayEui?: string;

  /**
   * <p>The SNR value.</p>
   */
  Snr?: number;

  /**
   * <p>The RSSI value.</p>
   */
  Rssi?: number;
}

/**
 * <p>LoRaWAN device metatdata.</p>
 */
export interface LoRaWANDeviceMetadata {
  /**
   * <p>The DevEUI value.</p>
   */
  DevEui?: string;

  /**
   * <p>The FPort value.</p>
   */
  FPort?: number;

  /**
   * <p>The DataRate value.</p>
   */
  DataRate?: number;

  /**
   * <p>The device's channel frequency in Hz.</p>
   */
  Frequency?: number;

  /**
   * <p>The date and time of the metadata.</p>
   */
  Timestamp?: string;

  /**
   * <p>Information about the gateways accessed by the device.</p>
   */
  Gateways?: LoRaWANGatewayMetadata[];
}

/**
 * <p>MetaData for Sidewalk device.</p>
 */
export interface SidewalkDeviceMetadata {
  /**
   * <p>The RSSI value.</p>
   */
  Rssi?: number;

  /**
   * <p>Sidewalk device battery level.</p>
   */
  BatteryLevel?: BatteryLevel | string;

  /**
   * <p>Sidewalk device status notification.</p>
   */
  Event?: Event | string;

  /**
   * <p>Device state defines the device status of sidewalk device.</p>
   */
  DeviceState?: DeviceState | string;
}

export interface GetWirelessDeviceStatisticsResponse {
  /**
   * <p>The ID of the wireless device.</p>
   */
  WirelessDeviceId?: string;

  /**
   * <p>The date and time when the most recent uplink was received.</p>
   */
  LastUplinkReceivedAt?: string;

  /**
   * <p>Information about the wireless device's operations.</p>
   */
  LoRaWAN?: LoRaWANDeviceMetadata;

  /**
   * <p>MetaData for Sidewalk device.</p>
   */
  Sidewalk?: SidewalkDeviceMetadata;
}

export enum WirelessGatewayIdType {
  GatewayEui = "GatewayEui",
  ThingName = "ThingName",
  WirelessGatewayId = "WirelessGatewayId",
}

export interface GetWirelessGatewayRequest {
  /**
   * <p>The identifier of the wireless gateway to get.</p>
   */
  Identifier: string | undefined;

  /**
   * <p>The type of identifier used in <code>identifier</code>.</p>
   */
  IdentifierType: WirelessGatewayIdType | string | undefined;
}

export interface GetWirelessGatewayResponse {
  /**
   * <p>The name of the resource.</p>
   */
  Name?: string;

  /**
   * <p>The ID of the wireless gateway.</p>
   */
  Id?: string;

  /**
   * <p>The description of the resource.</p>
   */
  Description?: string;

  /**
   * <p>Information about the wireless gateway.</p>
   */
  LoRaWAN?: LoRaWANGateway;

  /**
   * <p>The Amazon Resource Name of the resource.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the thing associated with the wireless gateway. The value is empty if a thing isn't associated with the gateway.</p>
   */
  ThingName?: string;

  /**
   * <p>The ARN of the thing associated with the wireless gateway.</p>
   */
  ThingArn?: string;
}

export interface GetWirelessGatewayCertificateRequest {
  /**
   * <p>The ID of the resource to get.</p>
   */
  Id: string | undefined;
}

export interface GetWirelessGatewayCertificateResponse {
  /**
   * <p>The ID of the certificate associated with the wireless gateway.</p>
   */
  IotCertificateId?: string;

  /**
   * <p>The ID of the certificate that is associated with the wireless gateway and used for the LoRaWANNetworkServer endpoint.</p>
   */
  LoRaWANNetworkServerCertificateId?: string;
}

export interface GetWirelessGatewayFirmwareInformationRequest {
  /**
   * <p>The ID of the resource to get.</p>
   */
  Id: string | undefined;
}

/**
 * <p>LoRaWANGatewayCurrentVersion object.</p>
 */
export interface LoRaWANGatewayCurrentVersion {
  /**
   * <p>The version of the gateways that should receive the update.</p>
   */
  CurrentVersion?: LoRaWANGatewayVersion;
}

export interface GetWirelessGatewayFirmwareInformationResponse {
  /**
   * <p>Information about the wireless gateway's firmware.</p>
   */
  LoRaWAN?: LoRaWANGatewayCurrentVersion;
}

export interface GetWirelessGatewayStatisticsRequest {
  /**
   * <p>The ID of the wireless gateway for which to get the data.</p>
   */
  WirelessGatewayId: string | undefined;
}

export interface GetWirelessGatewayStatisticsResponse {
  /**
   * <p>The ID of the wireless gateway.</p>
   */
  WirelessGatewayId?: string;

  /**
   * <p>The date and time when the most recent uplink was received.</p>
   */
  LastUplinkReceivedAt?: string;

  /**
   * <p>The connection status of the wireless gateway.</p>
   */
  ConnectionStatus?: ConnectionStatus | string;
}

export interface GetWirelessGatewayTaskRequest {
  /**
   * <p>The ID of the resource to get.</p>
   */
  Id: string | undefined;
}

export interface GetWirelessGatewayTaskResponse {
  /**
   * <p>The ID of the wireless gateway.</p>
   */
  WirelessGatewayId?: string;

  /**
   * <p>The ID of the WirelessGatewayTask.</p>
   */
  WirelessGatewayTaskDefinitionId?: string;

  /**
   * <p>The date and time when the most recent uplink was received.</p>
   */
  LastUplinkReceivedAt?: string;

  /**
   * <p>The date and time when the task was created.</p>
   */
  TaskCreatedAt?: string;

  /**
   * <p>The status of the request.</p>
   */
  Status?: WirelessGatewayTaskStatus | string;
}

export interface GetWirelessGatewayTaskDefinitionRequest {
  /**
   * <p>The ID of the resource to get.</p>
   */
  Id: string | undefined;
}

export interface GetWirelessGatewayTaskDefinitionResponse {
  /**
   * <p>Whether to automatically create tasks using this task definition for all gateways with the specified current version. If <code>false</code>, the task must me created by calling <code>CreateWirelessGatewayTask</code>.</p>
   */
  AutoCreateTasks?: boolean;

  /**
   * <p>The name of the resource.</p>
   */
  Name?: string;

  /**
   * <p>Information about the gateways to update.</p>
   */
  Update?: UpdateWirelessGatewayTaskCreate;

  /**
   * <p>The Amazon Resource Name of the resource.</p>
   */
  Arn?: string;
}

export interface ListDestinationsRequest {
  /**
   * <p>The maximum number of results to return in this operation.</p>
   */
  MaxResults?: number;

  /**
   * <p>To retrieve the next set of results, the <code>nextToken</code> value from a previous response; otherwise <b>null</b> to receive the first set of results.</p>
   */
  NextToken?: string;
}

export interface ListDestinationsResponse {
  /**
   * <p>The token to use to get the next set of results, or <b>null</b> if there are no additional results.</p>
   */
  NextToken?: string;

  /**
   * <p>The list of destinations.</p>
   */
  DestinationList?: Destinations[];
}

export interface ListDeviceProfilesRequest {
  /**
   * <p>To retrieve the next set of results, the <code>nextToken</code> value from a previous response; otherwise <b>null</b> to receive the first set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in this operation.</p>
   */
  MaxResults?: number;
}

export interface ListDeviceProfilesResponse {
  /**
   * <p>The token to use to get the next set of results, or <b>null</b> if there are no additional results.</p>
   */
  NextToken?: string;

  /**
   * <p>The list of device profiles.</p>
   */
  DeviceProfileList?: DeviceProfile[];
}

export interface ListEventConfigurationsRequest {
  /**
   * <p>Resource type to filter event configurations.</p>
   */
  ResourceType: EventNotificationResourceType | string | undefined;

  /**
   * <p>The maximum number of results to return in this operation.</p>
   */
  MaxResults?: number;

  /**
   * <p>To retrieve the next set of results, the <code>nextToken</code> value from a previous response;
   *             otherwise <b>null</b> to receive the first set of results.</p>
   */
  NextToken?: string;
}

export interface ListEventConfigurationsResponse {
  /**
   * <p>To retrieve the next set of results, the <code>nextToken</code> value from a previous response;
   *             otherwise <b>null</b> to receive the first set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Event configurations of all events for a single resource.</p>
   */
  EventConfigurationsList?: EventConfigurationItem[];
}

export interface ListFuotaTasksRequest {
  /**
   * <p>To retrieve the next set of results, the <code>nextToken</code> value from a previous response; otherwise <b>null</b> to receive the first set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in this operation.</p>
   */
  MaxResults?: number;
}

export interface ListFuotaTasksResponse {
  /**
   * <p>To retrieve the next set of results, the <code>nextToken</code> value from a previous response; otherwise <b>null</b> to receive the first set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Lists the FUOTA tasks registered to your AWS account.</p>
   */
  FuotaTaskList?: FuotaTask[];
}

export interface ListMulticastGroupsRequest {
  /**
   * <p>To retrieve the next set of results, the <code>nextToken</code> value from a previous response; otherwise <b>null</b> to receive the first set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in this operation.</p>
   */
  MaxResults?: number;
}

/**
 * <p>A multicast group.</p>
 */
export interface MulticastGroup {
  /**
   * <p>The ID of the multicast group.</p>
   */
  Id?: string;

  /**
   * <p>The arn of the multicast group.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the multicast group.</p>
   */
  Name?: string;
}

export interface ListMulticastGroupsResponse {
  /**
   * <p>To retrieve the next set of results, the <code>nextToken</code> value from a previous response; otherwise <b>null</b> to receive the first set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>List of multicast groups.</p>
   */
  MulticastGroupList?: MulticastGroup[];
}

export interface ListMulticastGroupsByFuotaTaskRequest {
  /**
   * <p>The ID of a FUOTA task.</p>
   */
  Id: string | undefined;

  /**
   * <p>To retrieve the next set of results, the <code>nextToken</code> value from a previous response; otherwise <b>null</b> to receive the first set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in this operation.</p>
   */
  MaxResults?: number;
}

/**
 * <p>A multicast group that is associated with a FUOTA task.</p>
 */
export interface MulticastGroupByFuotaTask {
  /**
   * <p>The ID of the multicast group.</p>
   */
  Id?: string;
}

export interface ListMulticastGroupsByFuotaTaskResponse {
  /**
   * <p>To retrieve the next set of results, the <code>nextToken</code> value from a previous response; otherwise <b>null</b> to receive the first set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>List of multicast groups associated with a FUOTA task.</p>
   */
  MulticastGroupList?: MulticastGroupByFuotaTask[];
}

export interface ListNetworkAnalyzerConfigurationsRequest {
  /**
   * <p>The maximum number of results to return in this operation.</p>
   */
  MaxResults?: number;

  /**
   * <p>To retrieve the next set of results, the <code>nextToken</code> value from a previous response; otherwise <b>null</b> to receive the first set of results.</p>
   */
  NextToken?: string;
}

/**
 * <p>Network analyzer configurations.</p>
 */
export interface NetworkAnalyzerConfigurations {
  /**
   * <p>The Amazon Resource Name of the new resource.</p>
   */
  Arn?: string;

  /**
   * <p>Name of the network analyzer configuration.</p>
   */
  Name?: string;
}

export interface ListNetworkAnalyzerConfigurationsResponse {
  /**
   * <p>The token to use to get the next set of results, or <b>null</b> if there are no additional results.</p>
   */
  NextToken?: string;

  /**
   * <p>The list of network analyzer configurations.</p>
   */
  NetworkAnalyzerConfigurationList?: NetworkAnalyzerConfigurations[];
}

export interface ListPartnerAccountsRequest {
  /**
   * <p>To retrieve the next set of results, the <code>nextToken</code> value from a previous response; otherwise <b>null</b> to receive the first set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in this operation.</p>
   */
  MaxResults?: number;
}

export interface ListPartnerAccountsResponse {
  /**
   * <p>The token to use to get the next set of results, or <b>null</b> if there are no additional results.</p>
   */
  NextToken?: string;

  /**
   * <p>The Sidewalk account credentials.</p>
   */
  Sidewalk?: SidewalkAccountInfoWithFingerprint[];
}

export interface ListPositionConfigurationsRequest {
  /**
   * <p>Resource type for which position configurations are listed.</p>
   */
  ResourceType?: PositionResourceType | string;

  /**
   * <p>The maximum number of results to return in this operation.</p>
   */
  MaxResults?: number;

  /**
   * <p>To retrieve the next set of results, the <code>nextToken</code> value from a previous response; otherwise <b>null</b>
   *             to receive the first set of results.</p>
   */
  NextToken?: string;
}

/**
 * <p>The wrapper for a position configuration.</p>
 */
export interface PositionConfigurationItem {
  /**
   * <p>Resource identifier for the position configuration.</p>
   */
  ResourceIdentifier?: string;

  /**
   * <p>Resource type of the resource for the position configuration.</p>
   */
  ResourceType?: PositionResourceType | string;

  /**
   * <p>The details of the positioning solver object used to compute the location.</p>
   */
  Solvers?: PositionSolverDetails;

  /**
   * <p>The position data destination that describes the AWS IoT rule that processes the device's position
   *             data for use by AWS IoT Core for LoRaWAN.</p>
   */
  Destination?: string;
}

export interface ListPositionConfigurationsResponse {
  /**
   * <p>A list of position configurations.</p>
   */
  PositionConfigurationList?: PositionConfigurationItem[];

  /**
   * <p>The token to use to get the next set of results, or <b>null</b> if there are no additional results.</p>
   */
  NextToken?: string;
}

export interface ListQueuedMessagesRequest {
  /**
   * <p>The ID of a given wireless device which the downlink message packets are being sent.</p>
   */
  Id: string | undefined;

  /**
   * <p>To retrieve the next set of results, the <code>nextToken</code> value from a previous response; otherwise
   *             <b>null</b> to receive the first set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in this operation.</p>
   */
  MaxResults?: number;

  /**
   * <p>The wireless device type, whic can be either Sidewalk or LoRaWAN.</p>
   */
  WirelessDeviceType?: WirelessDeviceType | string;
}

export interface ListQueuedMessagesResponse {
  /**
   * <p>To retrieve the next set of results, the <code>nextToken</code> value from a previous response;
   *             otherwise <b>null</b> to receive the first set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The messages in the downlink queue.</p>
   */
  DownlinkQueueMessagesList?: DownlinkQueueMessage[];
}

export interface ListServiceProfilesRequest {
  /**
   * <p>To retrieve the next set of results, the <code>nextToken</code> value from a previous response; otherwise <b>null</b> to receive the first set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in this operation.</p>
   */
  MaxResults?: number;
}

/**
 * <p>Information about a service profile.</p>
 */
export interface ServiceProfile {
  /**
   * <p>The Amazon Resource Name of the resource.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the resource.</p>
   */
  Name?: string;

  /**
   * <p>The ID of the service profile.</p>
   */
  Id?: string;
}

export interface ListServiceProfilesResponse {
  /**
   * <p>The token to use to get the next set of results, or <b>null</b> if there are no additional results.</p>
   */
  NextToken?: string;

  /**
   * <p>The list of service profiles.</p>
   */
  ServiceProfileList?: ServiceProfile[];
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The ARN of the resource for which you want to list tags.</p>
   */
  ResourceArn: string | undefined;
}

export interface ListTagsForResourceResponse {
  /**
   * <p>The tags to attach to the specified resource. Tags are metadata that you can use to manage a resource.</p>
   */
  Tags?: Tag[];
}

export interface ListWirelessDevicesRequest {
  /**
   * <p>The maximum number of results to return in this operation.</p>
   */
  MaxResults?: number;

  /**
   * <p>To retrieve the next set of results, the <code>nextToken</code> value from a previous response; otherwise <b>null</b> to receive the first set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>A filter to list only the wireless devices that use this destination.</p>
   */
  DestinationName?: string;

  /**
   * <p>A filter to list only the wireless devices that use this device profile.</p>
   */
  DeviceProfileId?: string;

  /**
   * <p>A filter to list only the wireless devices that use this service profile.</p>
   */
  ServiceProfileId?: string;

  /**
   * <p>A filter to list only the wireless devices that use this wireless device type.</p>
   */
  WirelessDeviceType?: WirelessDeviceType | string;

  /**
   * <p>The ID of a FUOTA task.</p>
   */
  FuotaTaskId?: string;

  /**
   * <p>The ID of the multicast group.</p>
   */
  MulticastGroupId?: string;
}

/**
 * <p>LoRaWAN object for list functions.</p>
 */
export interface LoRaWANListDevice {
  /**
   * <p>The DevEUI value.</p>
   */
  DevEui?: string;
}

/**
 * <p>Sidewalk object used by list functions.</p>
 */
export interface SidewalkListDevice {
  /**
   * <p>The Sidewalk Amazon ID.</p>
   */
  AmazonId?: string;

  /**
   * <p>The sidewalk device identification.</p>
   */
  SidewalkId?: string;

  /**
   * <p>The Sidewalk manufacturing series number.</p>
   */
  SidewalkManufacturingSn?: string;

  /**
   * <p>The sidewalk device certificates for Ed25519 and P256r1.</p>
   */
  DeviceCertificates?: CertificateList[];
}

/**
 * <p>Information about a wireless device's operation.</p>
 */
export interface WirelessDeviceStatistics {
  /**
   * <p>The Amazon Resource Name of the resource.</p>
   */
  Arn?: string;

  /**
   * <p>The ID of the wireless device reporting the data.</p>
   */
  Id?: string;

  /**
   * <p>The wireless device type.</p>
   */
  Type?: WirelessDeviceType | string;

  /**
   * <p>The name of the resource.</p>
   */
  Name?: string;

  /**
   * <p>The name of the destination to which the device is assigned.</p>
   */
  DestinationName?: string;

  /**
   * <p>The date and time when the most recent uplink was received.</p>
   */
  LastUplinkReceivedAt?: string;

  /**
   * <p>LoRaWAN device info.</p>
   */
  LoRaWAN?: LoRaWANListDevice;

  /**
   * <p>The Sidewalk account credentials.</p>
   */
  Sidewalk?: SidewalkListDevice;

  /**
   * <p>The status of a wireless device in a FUOTA task.</p>
   */
  FuotaDeviceStatus?: FuotaDeviceStatus | string;

  /**
   * <p>The status of the wireless device in the multicast group.</p>
   */
  MulticastDeviceStatus?: string;

  /**
   * <p>Id of the multicast group.</p>
   */
  McGroupId?: number;
}

export interface ListWirelessDevicesResponse {
  /**
   * <p>The token to use to get the next set of results, or <b>null</b> if there are no additional results.</p>
   */
  NextToken?: string;

  /**
   * <p>The ID of the wireless device.</p>
   */
  WirelessDeviceList?: WirelessDeviceStatistics[];
}

export interface ListWirelessGatewaysRequest {
  /**
   * <p>To retrieve the next set of results, the <code>nextToken</code> value from a previous response; otherwise <b>null</b> to receive the first set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in this operation.</p>
   */
  MaxResults?: number;
}

/**
 * <p>Information about a wireless gateway's operation.</p>
 */
export interface WirelessGatewayStatistics {
  /**
   * <p>The Amazon Resource Name of the resource.</p>
   */
  Arn?: string;

  /**
   * <p>The ID of the wireless gateway reporting the data.</p>
   */
  Id?: string;

  /**
   * <p>The name of the resource.</p>
   */
  Name?: string;

  /**
   * <p>The description of the resource.</p>
   */
  Description?: string;

  /**
   * <p>LoRaWAN gateway info.</p>
   */
  LoRaWAN?: LoRaWANGateway;

  /**
   * <p>The date and time when the most recent uplink was received.</p>
   */
  LastUplinkReceivedAt?: string;
}

export interface ListWirelessGatewaysResponse {
  /**
   * <p>The token to use to get the next set of results, or <b>null</b> if there are no additional results.</p>
   */
  NextToken?: string;

  /**
   * <p>The ID of the wireless gateway.</p>
   */
  WirelessGatewayList?: WirelessGatewayStatistics[];
}

export enum WirelessGatewayTaskDefinitionType {
  UPDATE = "UPDATE",
}

export interface ListWirelessGatewayTaskDefinitionsRequest {
  /**
   * <p>The maximum number of results to return in this operation.</p>
   */
  MaxResults?: number;

  /**
   * <p>To retrieve the next set of results, the <code>nextToken</code> value from a previous response; otherwise <b>null</b> to receive the first set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>A filter to list only the wireless gateway task definitions that use this task definition type.</p>
   */
  TaskDefinitionType?: WirelessGatewayTaskDefinitionType | string;
}

/**
 * <p>LoRaWANUpdateGatewayTaskEntry object.</p>
 */
export interface LoRaWANUpdateGatewayTaskEntry {
  /**
   * <p>The version of the gateways that should receive the update.</p>
   */
  CurrentVersion?: LoRaWANGatewayVersion;

  /**
   * <p>The firmware version to update the gateway to.</p>
   */
  UpdateVersion?: LoRaWANGatewayVersion;
}

/**
 * <p>UpdateWirelessGatewayTaskEntry object.</p>
 */
export interface UpdateWirelessGatewayTaskEntry {
  /**
   * <p>The ID of the new wireless gateway task entry.</p>
   */
  Id?: string;

  /**
   * <p>The properties that relate to the LoRaWAN wireless gateway.</p>
   */
  LoRaWAN?: LoRaWANUpdateGatewayTaskEntry;

  /**
   * <p>The Amazon Resource Name of the resource.</p>
   */
  Arn?: string;
}

export interface ListWirelessGatewayTaskDefinitionsResponse {
  /**
   * <p>The token to use to get the next set of results, or <b>null</b> if there are no additional results.</p>
   */
  NextToken?: string;

  /**
   * <p>The list of task definitions.</p>
   */
  TaskDefinitions?: UpdateWirelessGatewayTaskEntry[];
}

/**
 * <p>Information about the Semtech GNSS solver configuration.</p>
 */
export interface SemtechGnssConfiguration {
  /**
   * <p>The status indicating whether the solver is enabled.</p>
   */
  Status: PositionConfigurationStatus | string | undefined;

  /**
   * <p>Whether forward error correction is enabled.</p>
   */
  Fec: PositionConfigurationFec | string | undefined;
}

/**
 * <p>The wrapper for position solver configurations.</p>
 */
export interface PositionSolverConfigurations {
  /**
   * <p>The Semtech GNSS solver configuration object.</p>
   */
  SemtechGnss?: SemtechGnssConfiguration;
}

export interface PutPositionConfigurationRequest {
  /**
   * <p>Resource identifier used to update the position configuration.</p>
   */
  ResourceIdentifier: string | undefined;

  /**
   * <p>Resource type of the resource for which you want to update the position configuration.</p>
   */
  ResourceType: PositionResourceType | string | undefined;

  /**
   * <p>The positioning solvers used to update the position configuration of the resource.</p>
   */
  Solvers?: PositionSolverConfigurations;

  /**
   * <p>The position data destination that describes the AWS IoT rule that processes the device's position
   *             data for use by AWS IoT Core for LoRaWAN.</p>
   */
  Destination?: string;
}

export interface PutPositionConfigurationResponse {}

export interface PutResourceLogLevelRequest {
  /**
   * <p>The identifier of the resource. For a Wireless Device, it is the wireless device ID. For a wireless gateway,
   *             it is the wireless gateway ID.</p>
   */
  ResourceIdentifier: string | undefined;

  /**
   * <p>The type of the resource, which can be <code>WirelessDevice</code> or <code>WirelessGateway</code>.</p>
   */
  ResourceType: string | undefined;

  /**
   * <p>The log level for a log message. The log levels can be disabled, or set to <code>ERROR</code> to display
   *             less verbose logs containing only error information, or to <code>INFO</code> for more detailed logs.</p>
   */
  LogLevel: LogLevel | string | undefined;
}

export interface PutResourceLogLevelResponse {}

export interface ResetAllResourceLogLevelsRequest {}

export interface ResetAllResourceLogLevelsResponse {}

export interface ResetResourceLogLevelRequest {
  /**
   * <p>The identifier of the resource. For a Wireless Device, it is the wireless device ID. For a wireless gateway,
   *             it is the wireless gateway ID.</p>
   */
  ResourceIdentifier: string | undefined;

  /**
   * <p>The type of the resource, which can be <code>WirelessDevice</code> or <code>WirelessGateway</code>.</p>
   */
  ResourceType: string | undefined;
}

export interface ResetResourceLogLevelResponse {}

/**
 * <p>The metadata information of the LoRaWAN multicast group.</p>
 */
export interface LoRaWANMulticastMetadata {
  /**
   * <p>The Fport value.</p>
   */
  FPort?: number;
}

/**
 * <p>Wireless metadata that is to be sent to multicast group.</p>
 */
export interface MulticastWirelessMetadata {
  /**
   * <p>The metadata information of the LoRaWAN multicast group.</p>
   */
  LoRaWAN?: LoRaWANMulticastMetadata;
}

/**
 * @internal
 */
export const SessionKeysAbpV1_0_xFilterSensitiveLog = (obj: SessionKeysAbpV1_0_x): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AbpV1_0_xFilterSensitiveLog = (obj: AbpV1_0_x): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SessionKeysAbpV1_1FilterSensitiveLog = (obj: SessionKeysAbpV1_1): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AbpV1_1FilterSensitiveLog = (obj: AbpV1_1): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AccuracyFilterSensitiveLog = (obj: Accuracy): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ApplicationConfigFilterSensitiveLog = (obj: ApplicationConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SidewalkAccountInfoFilterSensitiveLog = (obj: SidewalkAccountInfo): any => ({
  ...obj,
  ...(obj.AppServerPrivateKey && { AppServerPrivateKey: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const TagFilterSensitiveLog = (obj: Tag): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateAwsAccountWithPartnerAccountRequestFilterSensitiveLog = (
  obj: AssociateAwsAccountWithPartnerAccountRequest
): any => ({
  ...obj,
  ...(obj.Sidewalk && { Sidewalk: SidewalkAccountInfoFilterSensitiveLog(obj.Sidewalk) }),
});

/**
 * @internal
 */
export const AssociateAwsAccountWithPartnerAccountResponseFilterSensitiveLog = (
  obj: AssociateAwsAccountWithPartnerAccountResponse
): any => ({
  ...obj,
  ...(obj.Sidewalk && { Sidewalk: SidewalkAccountInfoFilterSensitiveLog(obj.Sidewalk) }),
});

/**
 * @internal
 */
export const AssociateMulticastGroupWithFuotaTaskRequestFilterSensitiveLog = (
  obj: AssociateMulticastGroupWithFuotaTaskRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateMulticastGroupWithFuotaTaskResponseFilterSensitiveLog = (
  obj: AssociateMulticastGroupWithFuotaTaskResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateWirelessDeviceWithFuotaTaskRequestFilterSensitiveLog = (
  obj: AssociateWirelessDeviceWithFuotaTaskRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateWirelessDeviceWithFuotaTaskResponseFilterSensitiveLog = (
  obj: AssociateWirelessDeviceWithFuotaTaskResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateWirelessDeviceWithMulticastGroupRequestFilterSensitiveLog = (
  obj: AssociateWirelessDeviceWithMulticastGroupRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateWirelessDeviceWithMulticastGroupResponseFilterSensitiveLog = (
  obj: AssociateWirelessDeviceWithMulticastGroupResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateWirelessDeviceWithThingRequestFilterSensitiveLog = (
  obj: AssociateWirelessDeviceWithThingRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateWirelessDeviceWithThingResponseFilterSensitiveLog = (
  obj: AssociateWirelessDeviceWithThingResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateWirelessGatewayWithCertificateRequestFilterSensitiveLog = (
  obj: AssociateWirelessGatewayWithCertificateRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateWirelessGatewayWithCertificateResponseFilterSensitiveLog = (
  obj: AssociateWirelessGatewayWithCertificateResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateWirelessGatewayWithThingRequestFilterSensitiveLog = (
  obj: AssociateWirelessGatewayWithThingRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateWirelessGatewayWithThingResponseFilterSensitiveLog = (
  obj: AssociateWirelessGatewayWithThingResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BeaconingFilterSensitiveLog = (obj: Beaconing): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CancelMulticastGroupSessionRequestFilterSensitiveLog = (obj: CancelMulticastGroupSessionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CancelMulticastGroupSessionResponseFilterSensitiveLog = (
  obj: CancelMulticastGroupSessionResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CdmaLocalIdFilterSensitiveLog = (obj: CdmaLocalId): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CdmaNmrObjFilterSensitiveLog = (obj: CdmaNmrObj): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CdmaObjFilterSensitiveLog = (obj: CdmaObj): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GsmLocalIdFilterSensitiveLog = (obj: GsmLocalId): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GlobalIdentityFilterSensitiveLog = (obj: GlobalIdentity): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GsmNmrObjFilterSensitiveLog = (obj: GsmNmrObj): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GsmObjFilterSensitiveLog = (obj: GsmObj): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LteLocalIdFilterSensitiveLog = (obj: LteLocalId): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LteNmrObjFilterSensitiveLog = (obj: LteNmrObj): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LteObjFilterSensitiveLog = (obj: LteObj): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TdscdmaLocalIdFilterSensitiveLog = (obj: TdscdmaLocalId): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TdscdmaNmrObjFilterSensitiveLog = (obj: TdscdmaNmrObj): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TdscdmaObjFilterSensitiveLog = (obj: TdscdmaObj): any => ({
  ...obj,
});

/**
 * @internal
 */
export const WcdmaLocalIdFilterSensitiveLog = (obj: WcdmaLocalId): any => ({
  ...obj,
});

/**
 * @internal
 */
export const WcdmaNmrObjFilterSensitiveLog = (obj: WcdmaNmrObj): any => ({
  ...obj,
});

/**
 * @internal
 */
export const WcdmaObjFilterSensitiveLog = (obj: WcdmaObj): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CellTowersFilterSensitiveLog = (obj: CellTowers): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CertificateListFilterSensitiveLog = (obj: CertificateList): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LoRaWANConnectionStatusEventNotificationConfigurationsFilterSensitiveLog = (
  obj: LoRaWANConnectionStatusEventNotificationConfigurations
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConnectionStatusEventConfigurationFilterSensitiveLog = (obj: ConnectionStatusEventConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LoRaWANConnectionStatusResourceTypeEventConfigurationFilterSensitiveLog = (
  obj: LoRaWANConnectionStatusResourceTypeEventConfiguration
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConnectionStatusResourceTypeEventConfigurationFilterSensitiveLog = (
  obj: ConnectionStatusResourceTypeEventConfiguration
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateDestinationRequestFilterSensitiveLog = (obj: CreateDestinationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateDestinationResponseFilterSensitiveLog = (obj: CreateDestinationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LoRaWANDeviceProfileFilterSensitiveLog = (obj: LoRaWANDeviceProfile): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateDeviceProfileRequestFilterSensitiveLog = (obj: CreateDeviceProfileRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateDeviceProfileResponseFilterSensitiveLog = (obj: CreateDeviceProfileResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LoRaWANFuotaTaskFilterSensitiveLog = (obj: LoRaWANFuotaTask): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateFuotaTaskRequestFilterSensitiveLog = (obj: CreateFuotaTaskRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateFuotaTaskResponseFilterSensitiveLog = (obj: CreateFuotaTaskResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LoRaWANMulticastFilterSensitiveLog = (obj: LoRaWANMulticast): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateMulticastGroupRequestFilterSensitiveLog = (obj: CreateMulticastGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateMulticastGroupResponseFilterSensitiveLog = (obj: CreateMulticastGroupResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TraceContentFilterSensitiveLog = (obj: TraceContent): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateNetworkAnalyzerConfigurationRequestFilterSensitiveLog = (
  obj: CreateNetworkAnalyzerConfigurationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateNetworkAnalyzerConfigurationResponseFilterSensitiveLog = (
  obj: CreateNetworkAnalyzerConfigurationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LoRaWANServiceProfileFilterSensitiveLog = (obj: LoRaWANServiceProfile): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateServiceProfileRequestFilterSensitiveLog = (obj: CreateServiceProfileRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateServiceProfileResponseFilterSensitiveLog = (obj: CreateServiceProfileResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PositioningFilterSensitiveLog = (obj: Positioning): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FPortsFilterSensitiveLog = (obj: FPorts): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OtaaV1_0_xFilterSensitiveLog = (obj: OtaaV1_0_x): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OtaaV1_1FilterSensitiveLog = (obj: OtaaV1_1): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LoRaWANDeviceFilterSensitiveLog = (obj: LoRaWANDevice): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateWirelessDeviceRequestFilterSensitiveLog = (obj: CreateWirelessDeviceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateWirelessDeviceResponseFilterSensitiveLog = (obj: CreateWirelessDeviceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LoRaWANGatewayFilterSensitiveLog = (obj: LoRaWANGateway): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateWirelessGatewayRequestFilterSensitiveLog = (obj: CreateWirelessGatewayRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateWirelessGatewayResponseFilterSensitiveLog = (obj: CreateWirelessGatewayResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateWirelessGatewayTaskRequestFilterSensitiveLog = (obj: CreateWirelessGatewayTaskRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateWirelessGatewayTaskResponseFilterSensitiveLog = (obj: CreateWirelessGatewayTaskResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LoRaWANGatewayVersionFilterSensitiveLog = (obj: LoRaWANGatewayVersion): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LoRaWANUpdateGatewayTaskCreateFilterSensitiveLog = (obj: LoRaWANUpdateGatewayTaskCreate): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateWirelessGatewayTaskCreateFilterSensitiveLog = (obj: UpdateWirelessGatewayTaskCreate): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateWirelessGatewayTaskDefinitionRequestFilterSensitiveLog = (
  obj: CreateWirelessGatewayTaskDefinitionRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateWirelessGatewayTaskDefinitionResponseFilterSensitiveLog = (
  obj: CreateWirelessGatewayTaskDefinitionResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteDestinationRequestFilterSensitiveLog = (obj: DeleteDestinationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteDestinationResponseFilterSensitiveLog = (obj: DeleteDestinationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteDeviceProfileRequestFilterSensitiveLog = (obj: DeleteDeviceProfileRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteDeviceProfileResponseFilterSensitiveLog = (obj: DeleteDeviceProfileResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteFuotaTaskRequestFilterSensitiveLog = (obj: DeleteFuotaTaskRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteFuotaTaskResponseFilterSensitiveLog = (obj: DeleteFuotaTaskResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteMulticastGroupRequestFilterSensitiveLog = (obj: DeleteMulticastGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteMulticastGroupResponseFilterSensitiveLog = (obj: DeleteMulticastGroupResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteNetworkAnalyzerConfigurationRequestFilterSensitiveLog = (
  obj: DeleteNetworkAnalyzerConfigurationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteNetworkAnalyzerConfigurationResponseFilterSensitiveLog = (
  obj: DeleteNetworkAnalyzerConfigurationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteQueuedMessagesRequestFilterSensitiveLog = (obj: DeleteQueuedMessagesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteQueuedMessagesResponseFilterSensitiveLog = (obj: DeleteQueuedMessagesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteServiceProfileRequestFilterSensitiveLog = (obj: DeleteServiceProfileRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteServiceProfileResponseFilterSensitiveLog = (obj: DeleteServiceProfileResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteWirelessDeviceRequestFilterSensitiveLog = (obj: DeleteWirelessDeviceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteWirelessDeviceResponseFilterSensitiveLog = (obj: DeleteWirelessDeviceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteWirelessGatewayRequestFilterSensitiveLog = (obj: DeleteWirelessGatewayRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteWirelessGatewayResponseFilterSensitiveLog = (obj: DeleteWirelessGatewayResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteWirelessGatewayTaskRequestFilterSensitiveLog = (obj: DeleteWirelessGatewayTaskRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteWirelessGatewayTaskResponseFilterSensitiveLog = (obj: DeleteWirelessGatewayTaskResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteWirelessGatewayTaskDefinitionRequestFilterSensitiveLog = (
  obj: DeleteWirelessGatewayTaskDefinitionRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteWirelessGatewayTaskDefinitionResponseFilterSensitiveLog = (
  obj: DeleteWirelessGatewayTaskDefinitionResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DestinationsFilterSensitiveLog = (obj: Destinations): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeviceProfileFilterSensitiveLog = (obj: DeviceProfile): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SidewalkEventNotificationConfigurationsFilterSensitiveLog = (
  obj: SidewalkEventNotificationConfigurations
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeviceRegistrationStateEventConfigurationFilterSensitiveLog = (
  obj: DeviceRegistrationStateEventConfiguration
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SidewalkResourceTypeEventConfigurationFilterSensitiveLog = (
  obj: SidewalkResourceTypeEventConfiguration
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeviceRegistrationStateResourceTypeEventConfigurationFilterSensitiveLog = (
  obj: DeviceRegistrationStateResourceTypeEventConfiguration
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateAwsAccountFromPartnerAccountRequestFilterSensitiveLog = (
  obj: DisassociateAwsAccountFromPartnerAccountRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateAwsAccountFromPartnerAccountResponseFilterSensitiveLog = (
  obj: DisassociateAwsAccountFromPartnerAccountResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateMulticastGroupFromFuotaTaskRequestFilterSensitiveLog = (
  obj: DisassociateMulticastGroupFromFuotaTaskRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateMulticastGroupFromFuotaTaskResponseFilterSensitiveLog = (
  obj: DisassociateMulticastGroupFromFuotaTaskResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateWirelessDeviceFromFuotaTaskRequestFilterSensitiveLog = (
  obj: DisassociateWirelessDeviceFromFuotaTaskRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateWirelessDeviceFromFuotaTaskResponseFilterSensitiveLog = (
  obj: DisassociateWirelessDeviceFromFuotaTaskResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateWirelessDeviceFromMulticastGroupRequestFilterSensitiveLog = (
  obj: DisassociateWirelessDeviceFromMulticastGroupRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateWirelessDeviceFromMulticastGroupResponseFilterSensitiveLog = (
  obj: DisassociateWirelessDeviceFromMulticastGroupResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateWirelessDeviceFromThingRequestFilterSensitiveLog = (
  obj: DisassociateWirelessDeviceFromThingRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateWirelessDeviceFromThingResponseFilterSensitiveLog = (
  obj: DisassociateWirelessDeviceFromThingResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateWirelessGatewayFromCertificateRequestFilterSensitiveLog = (
  obj: DisassociateWirelessGatewayFromCertificateRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateWirelessGatewayFromCertificateResponseFilterSensitiveLog = (
  obj: DisassociateWirelessGatewayFromCertificateResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateWirelessGatewayFromThingRequestFilterSensitiveLog = (
  obj: DisassociateWirelessGatewayFromThingRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateWirelessGatewayFromThingResponseFilterSensitiveLog = (
  obj: DisassociateWirelessGatewayFromThingResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GatewayListItemFilterSensitiveLog = (obj: GatewayListItem): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ParticipatingGatewaysFilterSensitiveLog = (obj: ParticipatingGateways): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LoRaWANSendDataToDeviceFilterSensitiveLog = (obj: LoRaWANSendDataToDevice): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DownlinkQueueMessageFilterSensitiveLog = (obj: DownlinkQueueMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LoRaWANJoinEventNotificationConfigurationsFilterSensitiveLog = (
  obj: LoRaWANJoinEventNotificationConfigurations
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const JoinEventConfigurationFilterSensitiveLog = (obj: JoinEventConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MessageDeliveryStatusEventConfigurationFilterSensitiveLog = (
  obj: MessageDeliveryStatusEventConfiguration
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ProximityEventConfigurationFilterSensitiveLog = (obj: ProximityEventConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EventNotificationItemConfigurationsFilterSensitiveLog = (
  obj: EventNotificationItemConfigurations
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EventConfigurationItemFilterSensitiveLog = (obj: EventConfigurationItem): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FuotaTaskFilterSensitiveLog = (obj: FuotaTask): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetDestinationRequestFilterSensitiveLog = (obj: GetDestinationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetDestinationResponseFilterSensitiveLog = (obj: GetDestinationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetDeviceProfileRequestFilterSensitiveLog = (obj: GetDeviceProfileRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetDeviceProfileResponseFilterSensitiveLog = (obj: GetDeviceProfileResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetEventConfigurationByResourceTypesRequestFilterSensitiveLog = (
  obj: GetEventConfigurationByResourceTypesRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LoRaWANJoinResourceTypeEventConfigurationFilterSensitiveLog = (
  obj: LoRaWANJoinResourceTypeEventConfiguration
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const JoinResourceTypeEventConfigurationFilterSensitiveLog = (obj: JoinResourceTypeEventConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MessageDeliveryStatusResourceTypeEventConfigurationFilterSensitiveLog = (
  obj: MessageDeliveryStatusResourceTypeEventConfiguration
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ProximityResourceTypeEventConfigurationFilterSensitiveLog = (
  obj: ProximityResourceTypeEventConfiguration
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetEventConfigurationByResourceTypesResponseFilterSensitiveLog = (
  obj: GetEventConfigurationByResourceTypesResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetFuotaTaskRequestFilterSensitiveLog = (obj: GetFuotaTaskRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LoRaWANFuotaTaskGetInfoFilterSensitiveLog = (obj: LoRaWANFuotaTaskGetInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetFuotaTaskResponseFilterSensitiveLog = (obj: GetFuotaTaskResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetLogLevelsByResourceTypesRequestFilterSensitiveLog = (obj: GetLogLevelsByResourceTypesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const WirelessDeviceEventLogOptionFilterSensitiveLog = (obj: WirelessDeviceEventLogOption): any => ({
  ...obj,
});

/**
 * @internal
 */
export const WirelessDeviceLogOptionFilterSensitiveLog = (obj: WirelessDeviceLogOption): any => ({
  ...obj,
});

/**
 * @internal
 */
export const WirelessGatewayEventLogOptionFilterSensitiveLog = (obj: WirelessGatewayEventLogOption): any => ({
  ...obj,
});

/**
 * @internal
 */
export const WirelessGatewayLogOptionFilterSensitiveLog = (obj: WirelessGatewayLogOption): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetLogLevelsByResourceTypesResponseFilterSensitiveLog = (
  obj: GetLogLevelsByResourceTypesResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetMulticastGroupRequestFilterSensitiveLog = (obj: GetMulticastGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LoRaWANMulticastGetFilterSensitiveLog = (obj: LoRaWANMulticastGet): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetMulticastGroupResponseFilterSensitiveLog = (obj: GetMulticastGroupResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetMulticastGroupSessionRequestFilterSensitiveLog = (obj: GetMulticastGroupSessionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LoRaWANMulticastSessionFilterSensitiveLog = (obj: LoRaWANMulticastSession): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetMulticastGroupSessionResponseFilterSensitiveLog = (obj: GetMulticastGroupSessionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetNetworkAnalyzerConfigurationRequestFilterSensitiveLog = (
  obj: GetNetworkAnalyzerConfigurationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetNetworkAnalyzerConfigurationResponseFilterSensitiveLog = (
  obj: GetNetworkAnalyzerConfigurationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetPartnerAccountRequestFilterSensitiveLog = (obj: GetPartnerAccountRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SidewalkAccountInfoWithFingerprintFilterSensitiveLog = (obj: SidewalkAccountInfoWithFingerprint): any => ({
  ...obj,
  ...(obj.Fingerprint && { Fingerprint: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetPartnerAccountResponseFilterSensitiveLog = (obj: GetPartnerAccountResponse): any => ({
  ...obj,
  ...(obj.Sidewalk && { Sidewalk: SidewalkAccountInfoWithFingerprintFilterSensitiveLog(obj.Sidewalk) }),
});

/**
 * @internal
 */
export const GetPositionRequestFilterSensitiveLog = (obj: GetPositionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetPositionResponseFilterSensitiveLog = (obj: GetPositionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetPositionConfigurationRequestFilterSensitiveLog = (obj: GetPositionConfigurationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SemtechGnssDetailFilterSensitiveLog = (obj: SemtechGnssDetail): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PositionSolverDetailsFilterSensitiveLog = (obj: PositionSolverDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetPositionConfigurationResponseFilterSensitiveLog = (obj: GetPositionConfigurationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GnssFilterSensitiveLog = (obj: Gnss): any => ({
  ...obj,
});

/**
 * @internal
 */
export const IpFilterSensitiveLog = (obj: Ip): any => ({
  ...obj,
});

/**
 * @internal
 */
export const WiFiAccessPointFilterSensitiveLog = (obj: WiFiAccessPoint): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetPositionEstimateRequestFilterSensitiveLog = (obj: GetPositionEstimateRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetPositionEstimateResponseFilterSensitiveLog = (obj: GetPositionEstimateResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetResourceEventConfigurationRequestFilterSensitiveLog = (
  obj: GetResourceEventConfigurationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetResourceEventConfigurationResponseFilterSensitiveLog = (
  obj: GetResourceEventConfigurationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetResourceLogLevelRequestFilterSensitiveLog = (obj: GetResourceLogLevelRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetResourceLogLevelResponseFilterSensitiveLog = (obj: GetResourceLogLevelResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetResourcePositionRequestFilterSensitiveLog = (obj: GetResourcePositionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetResourcePositionResponseFilterSensitiveLog = (obj: GetResourcePositionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetServiceEndpointRequestFilterSensitiveLog = (obj: GetServiceEndpointRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetServiceEndpointResponseFilterSensitiveLog = (obj: GetServiceEndpointResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetServiceProfileRequestFilterSensitiveLog = (obj: GetServiceProfileRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LoRaWANGetServiceProfileInfoFilterSensitiveLog = (obj: LoRaWANGetServiceProfileInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetServiceProfileResponseFilterSensitiveLog = (obj: GetServiceProfileResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetWirelessDeviceRequestFilterSensitiveLog = (obj: GetWirelessDeviceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SidewalkDeviceFilterSensitiveLog = (obj: SidewalkDevice): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetWirelessDeviceResponseFilterSensitiveLog = (obj: GetWirelessDeviceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetWirelessDeviceStatisticsRequestFilterSensitiveLog = (obj: GetWirelessDeviceStatisticsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LoRaWANGatewayMetadataFilterSensitiveLog = (obj: LoRaWANGatewayMetadata): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LoRaWANDeviceMetadataFilterSensitiveLog = (obj: LoRaWANDeviceMetadata): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SidewalkDeviceMetadataFilterSensitiveLog = (obj: SidewalkDeviceMetadata): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetWirelessDeviceStatisticsResponseFilterSensitiveLog = (
  obj: GetWirelessDeviceStatisticsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetWirelessGatewayRequestFilterSensitiveLog = (obj: GetWirelessGatewayRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetWirelessGatewayResponseFilterSensitiveLog = (obj: GetWirelessGatewayResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetWirelessGatewayCertificateRequestFilterSensitiveLog = (
  obj: GetWirelessGatewayCertificateRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetWirelessGatewayCertificateResponseFilterSensitiveLog = (
  obj: GetWirelessGatewayCertificateResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetWirelessGatewayFirmwareInformationRequestFilterSensitiveLog = (
  obj: GetWirelessGatewayFirmwareInformationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LoRaWANGatewayCurrentVersionFilterSensitiveLog = (obj: LoRaWANGatewayCurrentVersion): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetWirelessGatewayFirmwareInformationResponseFilterSensitiveLog = (
  obj: GetWirelessGatewayFirmwareInformationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetWirelessGatewayStatisticsRequestFilterSensitiveLog = (
  obj: GetWirelessGatewayStatisticsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetWirelessGatewayStatisticsResponseFilterSensitiveLog = (
  obj: GetWirelessGatewayStatisticsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetWirelessGatewayTaskRequestFilterSensitiveLog = (obj: GetWirelessGatewayTaskRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetWirelessGatewayTaskResponseFilterSensitiveLog = (obj: GetWirelessGatewayTaskResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetWirelessGatewayTaskDefinitionRequestFilterSensitiveLog = (
  obj: GetWirelessGatewayTaskDefinitionRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetWirelessGatewayTaskDefinitionResponseFilterSensitiveLog = (
  obj: GetWirelessGatewayTaskDefinitionResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDestinationsRequestFilterSensitiveLog = (obj: ListDestinationsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDestinationsResponseFilterSensitiveLog = (obj: ListDestinationsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDeviceProfilesRequestFilterSensitiveLog = (obj: ListDeviceProfilesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDeviceProfilesResponseFilterSensitiveLog = (obj: ListDeviceProfilesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListEventConfigurationsRequestFilterSensitiveLog = (obj: ListEventConfigurationsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListEventConfigurationsResponseFilterSensitiveLog = (obj: ListEventConfigurationsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListFuotaTasksRequestFilterSensitiveLog = (obj: ListFuotaTasksRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListFuotaTasksResponseFilterSensitiveLog = (obj: ListFuotaTasksResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListMulticastGroupsRequestFilterSensitiveLog = (obj: ListMulticastGroupsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MulticastGroupFilterSensitiveLog = (obj: MulticastGroup): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListMulticastGroupsResponseFilterSensitiveLog = (obj: ListMulticastGroupsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListMulticastGroupsByFuotaTaskRequestFilterSensitiveLog = (
  obj: ListMulticastGroupsByFuotaTaskRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MulticastGroupByFuotaTaskFilterSensitiveLog = (obj: MulticastGroupByFuotaTask): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListMulticastGroupsByFuotaTaskResponseFilterSensitiveLog = (
  obj: ListMulticastGroupsByFuotaTaskResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListNetworkAnalyzerConfigurationsRequestFilterSensitiveLog = (
  obj: ListNetworkAnalyzerConfigurationsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NetworkAnalyzerConfigurationsFilterSensitiveLog = (obj: NetworkAnalyzerConfigurations): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListNetworkAnalyzerConfigurationsResponseFilterSensitiveLog = (
  obj: ListNetworkAnalyzerConfigurationsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListPartnerAccountsRequestFilterSensitiveLog = (obj: ListPartnerAccountsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListPartnerAccountsResponseFilterSensitiveLog = (obj: ListPartnerAccountsResponse): any => ({
  ...obj,
  ...(obj.Sidewalk && {
    Sidewalk: obj.Sidewalk.map((item) => SidewalkAccountInfoWithFingerprintFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const ListPositionConfigurationsRequestFilterSensitiveLog = (obj: ListPositionConfigurationsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PositionConfigurationItemFilterSensitiveLog = (obj: PositionConfigurationItem): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListPositionConfigurationsResponseFilterSensitiveLog = (obj: ListPositionConfigurationsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListQueuedMessagesRequestFilterSensitiveLog = (obj: ListQueuedMessagesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListQueuedMessagesResponseFilterSensitiveLog = (obj: ListQueuedMessagesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListServiceProfilesRequestFilterSensitiveLog = (obj: ListServiceProfilesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ServiceProfileFilterSensitiveLog = (obj: ServiceProfile): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListServiceProfilesResponseFilterSensitiveLog = (obj: ListServiceProfilesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceRequestFilterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceResponseFilterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListWirelessDevicesRequestFilterSensitiveLog = (obj: ListWirelessDevicesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LoRaWANListDeviceFilterSensitiveLog = (obj: LoRaWANListDevice): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SidewalkListDeviceFilterSensitiveLog = (obj: SidewalkListDevice): any => ({
  ...obj,
});

/**
 * @internal
 */
export const WirelessDeviceStatisticsFilterSensitiveLog = (obj: WirelessDeviceStatistics): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListWirelessDevicesResponseFilterSensitiveLog = (obj: ListWirelessDevicesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListWirelessGatewaysRequestFilterSensitiveLog = (obj: ListWirelessGatewaysRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const WirelessGatewayStatisticsFilterSensitiveLog = (obj: WirelessGatewayStatistics): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListWirelessGatewaysResponseFilterSensitiveLog = (obj: ListWirelessGatewaysResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListWirelessGatewayTaskDefinitionsRequestFilterSensitiveLog = (
  obj: ListWirelessGatewayTaskDefinitionsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LoRaWANUpdateGatewayTaskEntryFilterSensitiveLog = (obj: LoRaWANUpdateGatewayTaskEntry): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateWirelessGatewayTaskEntryFilterSensitiveLog = (obj: UpdateWirelessGatewayTaskEntry): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListWirelessGatewayTaskDefinitionsResponseFilterSensitiveLog = (
  obj: ListWirelessGatewayTaskDefinitionsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SemtechGnssConfigurationFilterSensitiveLog = (obj: SemtechGnssConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PositionSolverConfigurationsFilterSensitiveLog = (obj: PositionSolverConfigurations): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutPositionConfigurationRequestFilterSensitiveLog = (obj: PutPositionConfigurationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutPositionConfigurationResponseFilterSensitiveLog = (obj: PutPositionConfigurationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutResourceLogLevelRequestFilterSensitiveLog = (obj: PutResourceLogLevelRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutResourceLogLevelResponseFilterSensitiveLog = (obj: PutResourceLogLevelResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResetAllResourceLogLevelsRequestFilterSensitiveLog = (obj: ResetAllResourceLogLevelsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResetAllResourceLogLevelsResponseFilterSensitiveLog = (obj: ResetAllResourceLogLevelsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResetResourceLogLevelRequestFilterSensitiveLog = (obj: ResetResourceLogLevelRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResetResourceLogLevelResponseFilterSensitiveLog = (obj: ResetResourceLogLevelResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LoRaWANMulticastMetadataFilterSensitiveLog = (obj: LoRaWANMulticastMetadata): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MulticastWirelessMetadataFilterSensitiveLog = (obj: MulticastWirelessMetadata): any => ({
  ...obj,
});
