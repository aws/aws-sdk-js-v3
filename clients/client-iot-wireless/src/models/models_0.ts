// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { IoTWirelessServiceException as __BaseException } from "./IoTWirelessServiceException";

/**
 * <p>Session keys for ABP v1.1</p>
 * @public
 */
export interface SessionKeysAbpV1_0_x {
  /**
   * <p>The NwkSKey value.</p>
   * @public
   */
  NwkSKey?: string;

  /**
   * <p>The AppSKey value.</p>
   * @public
   */
  AppSKey?: string;
}

/**
 * <p>ABP device object for LoRaWAN specification v1.0.x</p>
 * @public
 */
export interface AbpV1_0_x {
  /**
   * <p>The DevAddr value.</p>
   * @public
   */
  DevAddr?: string;

  /**
   * <p>Session keys for ABP v1.0.x</p>
   * @public
   */
  SessionKeys?: SessionKeysAbpV1_0_x;

  /**
   * <p>The FCnt init value.</p>
   * @public
   */
  FCntStart?: number;
}

/**
 * <p>Session keys for ABP v1.1</p>
 * @public
 */
export interface SessionKeysAbpV1_1 {
  /**
   * <p>The FNwkSIntKey value.</p>
   * @public
   */
  FNwkSIntKey?: string;

  /**
   * <p>The SNwkSIntKey value.</p>
   * @public
   */
  SNwkSIntKey?: string;

  /**
   * <p>The NwkSEncKey value.</p>
   * @public
   */
  NwkSEncKey?: string;

  /**
   * <p>The AppSKey value.</p>
   * @public
   */
  AppSKey?: string;
}

/**
 * <p>ABP device object for LoRaWAN specification v1.1</p>
 * @public
 */
export interface AbpV1_1 {
  /**
   * <p>The DevAddr value.</p>
   * @public
   */
  DevAddr?: string;

  /**
   * <p>Session keys for ABP v1.1</p>
   * @public
   */
  SessionKeys?: SessionKeysAbpV1_1;

  /**
   * <p>The FCnt init value.</p>
   * @public
   */
  FCntStart?: number;
}

/**
 * <p>User does not have permission to perform this action.</p>
 * @public
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
 * <p>The accuracy of the estimated position in meters. An empty value indicates that no
 *             position data is available. A value of ‘0.0’ value indicates that position data is
 *             available. This data corresponds to the position information that you specified instead
 *             of the position computed by solver.</p>
 * @public
 */
export interface Accuracy {
  /**
   * <p>The horizontal accuracy of the estimated position, which is the difference between the
   *             estimated location and the actual device location.</p>
   * @public
   */
  HorizontalAccuracy?: number;

  /**
   * <p>The vertical accuracy of the estimated position, which is the difference between the
   *             estimated altitude and actual device latitude in meters.</p>
   * @public
   */
  VerticalAccuracy?: number;
}

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
 * <p>LoRaWAN application configuration, which can be used to perform geolocation.</p>
 * @public
 */
export interface ApplicationConfig {
  /**
   * <p>The Fport value.</p>
   * @public
   */
  FPort?: number;

  /**
   * <p>Application type, which can be specified to obtain real-time position information of
   *             your LoRaWAN device.</p>
   * @public
   */
  Type?: ApplicationConfigType;

  /**
   * <p>The name of the position data destination that describes the AWS IoT rule that
   *             processes the device's position data for use by AWS IoT Core for LoRaWAN.</p>
   * @public
   */
  DestinationName?: string;
}

/**
 * <p>Information about a Sidewalk account.</p>
 * @public
 */
export interface SidewalkAccountInfo {
  /**
   * <p>The Sidewalk Amazon ID.</p>
   * @public
   */
  AmazonId?: string;

  /**
   * <p>The Sidewalk application server private key.</p>
   * @public
   */
  AppServerPrivateKey?: string;
}

/**
 * <p>A simple label consisting of a customer-defined key-value pair</p>
 * @public
 */
export interface Tag {
  /**
   * <p>The tag's key value.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>The tag's value.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface AssociateAwsAccountWithPartnerAccountRequest {
  /**
   * <p>The Sidewalk account credentials.</p>
   * @public
   */
  Sidewalk: SidewalkAccountInfo | undefined;

  /**
   * <p>Each resource must have a unique client request token. The client token is used to implement
   *             idempotency. It ensures that the request completes no more than one time. If you retry a request
   *             with the same token and the same parameters, the request will complete successfully. However, if
   *             you try to create a new resource using the same token but different parameters, an HTTP 409
   *             conflict occurs. If you omit this value, AWS SDKs will automatically generate a unique client request.
   *             For more information about idempotency, see <a href="https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html">Ensuring idempotency in Amazon EC2 API requests</a>.</p>
   * @public
   */
  ClientRequestToken?: string;

  /**
   * <p>The tags to attach to the specified resource. Tags are metadata that you can use to
   *             manage a resource.</p>
   * @public
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface AssociateAwsAccountWithPartnerAccountResponse {
  /**
   * <p>The Sidewalk account credentials.</p>
   * @public
   */
  Sidewalk?: SidewalkAccountInfo;

  /**
   * <p>The Amazon Resource Name of the resource.</p>
   * @public
   */
  Arn?: string;
}

/**
 * <p>Adding, updating, or deleting the resource can cause an inconsistent state.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * <p>Id of the resource in the conflicting operation.</p>
   * @public
   */
  ResourceId?: string;

  /**
   * <p>Type of the resource in the conflicting operation.</p>
   * @public
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
 * @public
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
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * <p>Id of the not found resource.</p>
   * @public
   */
  ResourceId?: string;

  /**
   * <p>Type of the font found resource.</p>
   * @public
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
 * @public
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
 * @public
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

/**
 * @public
 */
export interface AssociateMulticastGroupWithFuotaTaskRequest {
  /**
   * <p>The ID of a FUOTA task.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The ID of the multicast group.</p>
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
   * <p>The ID of a FUOTA task.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The ID of the wireless device.</p>
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
   * <p>The ID of the multicast group.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The ID of the wireless device.</p>
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
   * <p>The ID of the resource to update.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The ARN of the thing to associate with the wireless device.</p>
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
   * <p>The ID of the resource to update.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The ID of the certificate to associate with the wireless gateway.</p>
   * @public
   */
  IotCertificateId: string | undefined;
}

/**
 * @public
 */
export interface AssociateWirelessGatewayWithCertificateResponse {
  /**
   * <p>The ID of the certificate associated with the wireless gateway.</p>
   * @public
   */
  IotCertificateId?: string;
}

/**
 * @public
 */
export interface AssociateWirelessGatewayWithThingRequest {
  /**
   * <p>The ID of the resource to update.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The ARN of the thing to associate with the wireless gateway.</p>
   * @public
   */
  ThingArn: string | undefined;
}

/**
 * @public
 */
export interface AssociateWirelessGatewayWithThingResponse {}

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
 * <p>Beaconing parameters for configuring the wireless gateways.</p>
 * @public
 */
export interface Beaconing {
  /**
   * <p>The data rate for gateways that are sending the beacons.</p>
   * @public
   */
  DataRate?: number;

  /**
   * <p>The frequency list for the gateways to send the beacons.</p>
   * @public
   */
  Frequencies?: number[];
}

/**
 * @public
 */
export interface CancelMulticastGroupSessionRequest {
  /**
   * <p>The ID of the multicast group.</p>
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface CancelMulticastGroupSessionResponse {}

/**
 * <p>CDMA local ID information, which corresponds to the local identification parameters of
 *             a CDMA cell.</p>
 * @public
 */
export interface CdmaLocalId {
  /**
   * <p>Pseudo-noise offset, which is a characteristic of the signal from a cell on a radio
   *             tower.</p>
   * @public
   */
  PnOffset: number | undefined;

  /**
   * <p>CDMA channel information.</p>
   * @public
   */
  CdmaChannel: number | undefined;
}

/**
 * <p>CDMA object for network measurement reports.</p>
 * @public
 */
export interface CdmaNmrObj {
  /**
   * <p>Pseudo-noise offset, which is a characteristic of the signal from a cell on a radio
   *             tower.</p>
   * @public
   */
  PnOffset: number | undefined;

  /**
   * <p>CDMA channel information.</p>
   * @public
   */
  CdmaChannel: number | undefined;

  /**
   * <p>Transmit power level of the pilot signal, measured in dBm (decibel-milliwatts).</p>
   * @public
   */
  PilotPower?: number;

  /**
   * <p>CDMA base station ID (BSID).</p>
   * @public
   */
  BaseStationId?: number;
}

/**
 * <p>CDMA (Code-division multiple access) object.</p>
 * @public
 */
export interface CdmaObj {
  /**
   * <p>CDMA system ID (SID).</p>
   * @public
   */
  SystemId: number | undefined;

  /**
   * <p>CDMA network ID (NID).</p>
   * @public
   */
  NetworkId: number | undefined;

  /**
   * <p>CDMA base station ID (BSID).</p>
   * @public
   */
  BaseStationId: number | undefined;

  /**
   * <p>CDMA registration zone (RZ).</p>
   * @public
   */
  RegistrationZone?: number;

  /**
   * <p>CDMA local identification (local ID) parameters.</p>
   * @public
   */
  CdmaLocalId?: CdmaLocalId;

  /**
   * <p>Transmit power level of the pilot signal, measured in dBm (decibel-milliwatts).</p>
   * @public
   */
  PilotPower?: number;

  /**
   * <p>CDMA base station latitude in degrees.</p>
   * @public
   */
  BaseLat?: number;

  /**
   * <p>CDMA base station longitude in degrees.</p>
   * @public
   */
  BaseLng?: number;

  /**
   * <p>CDMA network measurement reports.</p>
   * @public
   */
  CdmaNmr?: CdmaNmrObj[];
}

/**
 * <p>GSM local ID information, which corresponds to the local identification parameters of
 *             a GSM cell.</p>
 * @public
 */
export interface GsmLocalId {
  /**
   * <p>GSM base station identity code (BSIC).</p>
   * @public
   */
  Bsic: number | undefined;

  /**
   * <p>GSM broadcast control channel.</p>
   * @public
   */
  Bcch: number | undefined;
}

/**
 * <p>Global identity information.</p>
 * @public
 */
export interface GlobalIdentity {
  /**
   * <p>Location area code of the global identity.</p>
   * @public
   */
  Lac: number | undefined;

  /**
   * <p>GERAN (GSM EDGE Radio Access Network) cell global identifier.</p>
   * @public
   */
  GeranCid: number | undefined;
}

/**
 * <p>GSM object for network measurement reports.</p>
 * @public
 */
export interface GsmNmrObj {
  /**
   * <p>GSM base station identity code (BSIC).</p>
   * @public
   */
  Bsic: number | undefined;

  /**
   * <p>GSM broadcast control channel.</p>
   * @public
   */
  Bcch: number | undefined;

  /**
   * <p>Rx level, which is the received signal power, measured in dBm
   *             (decibel-milliwatts).</p>
   * @public
   */
  RxLevel?: number;

  /**
   * <p>Global identity information of the GSM object.</p>
   * @public
   */
  GlobalIdentity?: GlobalIdentity;
}

/**
 * <p>GSM object.</p>
 * @public
 */
export interface GsmObj {
  /**
   * <p>Mobile Country Code.</p>
   * @public
   */
  Mcc: number | undefined;

  /**
   * <p>Mobile Network Code.</p>
   * @public
   */
  Mnc: number | undefined;

  /**
   * <p>Location area code.</p>
   * @public
   */
  Lac: number | undefined;

  /**
   * <p>GERAN (GSM EDGE Radio Access Network) Cell Global Identifier.</p>
   * @public
   */
  GeranCid: number | undefined;

  /**
   * <p>GSM local identification (local ID) information.</p>
   * @public
   */
  GsmLocalId?: GsmLocalId;

  /**
   * <p>Timing advance value, which corresponds to the length of time a signal takes to reach
   *             the base station from a mobile phone.</p>
   * @public
   */
  GsmTimingAdvance?: number;

  /**
   * <p>Rx level, which is the received signal power, measured in dBm
   *             (decibel-milliwatts).</p>
   * @public
   */
  RxLevel?: number;

  /**
   * <p>GSM object for network measurement reports.</p>
   * @public
   */
  GsmNmr?: GsmNmrObj[];
}

/**
 * <p>LTE local identification (local ID) information.</p>
 * @public
 */
export interface LteLocalId {
  /**
   * <p>Physical cell ID.</p>
   * @public
   */
  Pci: number | undefined;

  /**
   * <p>Evolved universal terrestrial radio access (E-UTRA) absolute radio frequency channel
   *             number (FCN).</p>
   * @public
   */
  Earfcn: number | undefined;
}

/**
 * <p>LTE object for network measurement reports.</p>
 * @public
 */
export interface LteNmrObj {
  /**
   * <p>Physical cell ID.</p>
   * @public
   */
  Pci: number | undefined;

  /**
   * <p>E-UTRA (Evolved universal terrestrial Radio Access) absolute radio frequency channel
   *             Number (EARFCN).</p>
   * @public
   */
  Earfcn: number | undefined;

  /**
   * <p>E-UTRAN (Evolved Universal Terrestrial Radio Access Network) cell global identifier
   *             (EUTRANCID).</p>
   * @public
   */
  EutranCid: number | undefined;

  /**
   * <p>Signal power of the reference signal received, measured in dBm
   *             (decibel-milliwatts).</p>
   * @public
   */
  Rsrp?: number;

  /**
   * <p>Signal quality of the reference Signal received, measured in decibels (dB).</p>
   * @public
   */
  Rsrq?: number;
}

/**
 * <p>LTE object.</p>
 * @public
 */
export interface LteObj {
  /**
   * <p>Mobile Country Code.</p>
   * @public
   */
  Mcc: number | undefined;

  /**
   * <p>Mobile Network Code.</p>
   * @public
   */
  Mnc: number | undefined;

  /**
   * <p>E-UTRAN (Evolved Universal Terrestrial Radio Access Network) Cell Global
   *             Identifier.</p>
   * @public
   */
  EutranCid: number | undefined;

  /**
   * <p>LTE tracking area code.</p>
   * @public
   */
  Tac?: number;

  /**
   * <p>LTE local identification (local ID) information.</p>
   * @public
   */
  LteLocalId?: LteLocalId;

  /**
   * <p>LTE timing advance.</p>
   * @public
   */
  LteTimingAdvance?: number;

  /**
   * <p>Signal power of the reference signal received, measured in dBm
   *             (decibel-milliwatts).</p>
   * @public
   */
  Rsrp?: number;

  /**
   * <p>Signal quality of the reference Signal received, measured in decibels (dB).</p>
   * @public
   */
  Rsrq?: number;

  /**
   * <p>Parameter that determines whether the LTE object is capable of supporting NR (new
   *             radio).</p>
   * @public
   */
  NrCapable?: boolean;

  /**
   * <p>LTE object for network measurement reports.</p>
   * @public
   */
  LteNmr?: LteNmrObj[];
}

/**
 * <p>TD-SCDMA local identification (local Id) information.</p>
 * @public
 */
export interface TdscdmaLocalId {
  /**
   * <p>TD-SCDMA UTRA (Universal Terrestrial Radio Access Network) absolute RF channel number
   *             (UARFCN).</p>
   * @public
   */
  Uarfcn: number | undefined;

  /**
   * <p>Cell parameters for TD-SCDMA.</p>
   * @public
   */
  CellParams: number | undefined;
}

/**
 * <p>TD-SCDMA object for network measurement reports.</p>
 * @public
 */
export interface TdscdmaNmrObj {
  /**
   * <p>TD-SCDMA UTRA (Universal Terrestrial Radio Access Network) absolute RF channel
   *             number.</p>
   * @public
   */
  Uarfcn: number | undefined;

  /**
   * <p>Cell parameters for TD-SCDMA network measurement reports object.</p>
   * @public
   */
  CellParams: number | undefined;

  /**
   * <p>UTRAN (UMTS Terrestrial Radio Access Network) cell global identifier.</p>
   * @public
   */
  UtranCid?: number;

  /**
   * <p>Code power of the received signal, measured in decibel-milliwatts (dBm).</p>
   * @public
   */
  Rscp?: number;

  /**
   * <p>Path loss, or path attenuation, is the reduction in power density of an
   *             electromagnetic wave as it propagates through space.</p>
   * @public
   */
  PathLoss?: number;
}

/**
 * <p>TD-SCDMA object.</p>
 * @public
 */
export interface TdscdmaObj {
  /**
   * <p>Mobile Country Code.</p>
   * @public
   */
  Mcc: number | undefined;

  /**
   * <p>Mobile Network Code.</p>
   * @public
   */
  Mnc: number | undefined;

  /**
   * <p>Location Area Code.</p>
   * @public
   */
  Lac?: number;

  /**
   * <p>UTRAN (UMTS Terrestrial Radio Access Network) Cell Global Identifier.</p>
   * @public
   */
  UtranCid: number | undefined;

  /**
   * <p>TD-SCDMA local identification (local ID) information.</p>
   * @public
   */
  TdscdmaLocalId?: TdscdmaLocalId;

  /**
   * <p>TD-SCDMA Timing advance.</p>
   * @public
   */
  TdscdmaTimingAdvance?: number;

  /**
   * <p>Signal power of the received signal (Received Signal Code Power), measured in
   *             decibel-milliwatts (dBm).</p>
   * @public
   */
  Rscp?: number;

  /**
   * <p>Path loss, or path attenuation, is the reduction in power density of an
   *             electromagnetic wave as it propagates through space.</p>
   * @public
   */
  PathLoss?: number;

  /**
   * <p>TD-SCDMA object for network measurement reports.</p>
   * @public
   */
  TdscdmaNmr?: TdscdmaNmrObj[];
}

/**
 * <p>WCDMA local identification (local ID) information.</p>
 * @public
 */
export interface WcdmaLocalId {
  /**
   * <p>WCDMA UTRA Absolute RF Channel Number downlink.</p>
   * @public
   */
  Uarfcndl: number | undefined;

  /**
   * <p>Primary Scrambling Code.</p>
   * @public
   */
  Psc: number | undefined;
}

/**
 * <p>Network Measurement Reports.</p>
 * @public
 */
export interface WcdmaNmrObj {
  /**
   * <p>WCDMA UTRA Absolute RF Channel Number downlink.</p>
   * @public
   */
  Uarfcndl: number | undefined;

  /**
   * <p>Primary Scrambling Code.</p>
   * @public
   */
  Psc: number | undefined;

  /**
   * <p>UTRAN (UMTS Terrestrial Radio Access Network) Cell Global Identifier.</p>
   * @public
   */
  UtranCid: number | undefined;

  /**
   * <p>Received Signal Code Power (signal power) (dBm)</p>
   * @public
   */
  Rscp?: number;

  /**
   * <p>Path loss, or path attenuation, is the reduction in power density of an
   *             electromagnetic wave as it propagates through space.</p>
   * @public
   */
  PathLoss?: number;
}

/**
 * <p>WCDMA.</p>
 * @public
 */
export interface WcdmaObj {
  /**
   * <p>Mobile Country Code.</p>
   * @public
   */
  Mcc: number | undefined;

  /**
   * <p>Mobile Network Code.</p>
   * @public
   */
  Mnc: number | undefined;

  /**
   * <p>Location Area Code.</p>
   * @public
   */
  Lac?: number;

  /**
   * <p>UTRAN (UMTS Terrestrial Radio Access Network) Cell Global Identifier.</p>
   * @public
   */
  UtranCid: number | undefined;

  /**
   * <p>WCDMA local ID information.</p>
   * @public
   */
  WcdmaLocalId?: WcdmaLocalId;

  /**
   * <p>Received Signal Code Power (signal power) (dBm).</p>
   * @public
   */
  Rscp?: number;

  /**
   * <p>Path loss, or path attenuation, is the reduction in power density of an
   *             electromagnetic wave as it propagates through space.</p>
   * @public
   */
  PathLoss?: number;

  /**
   * <p>WCDMA object for network measurement reports.</p>
   * @public
   */
  WcdmaNmr?: WcdmaNmrObj[];
}

/**
 * <p>The cell towers that were used to perform the measurements.</p>
 * @public
 */
export interface CellTowers {
  /**
   * <p>GSM object information.</p>
   * @public
   */
  Gsm?: GsmObj[];

  /**
   * <p>WCDMA object information.</p>
   * @public
   */
  Wcdma?: WcdmaObj[];

  /**
   * <p>TD-SCDMA object information.</p>
   * @public
   */
  Tdscdma?: TdscdmaObj[];

  /**
   * <p>LTE object information.</p>
   * @public
   */
  Lte?: LteObj[];

  /**
   * <p>CDMA object information.</p>
   * @public
   */
  Cdma?: CdmaObj[];
}

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
 * <p>List of sidewalk certificates.</p>
 * @public
 */
export interface CertificateList {
  /**
   * <p>The certificate chain algorithm provided by sidewalk.</p>
   * @public
   */
  SigningAlg: SigningAlg | undefined;

  /**
   * <p>The value of the chosen sidewalk certificate.</p>
   * @public
   */
  Value: string | undefined;
}

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
 * <p>Object for LoRaWAN connection status resource type event configuration.</p>
 * @public
 */
export interface LoRaWANConnectionStatusEventNotificationConfigurations {
  /**
   * <p>Denotes whether the gateway EUI connection status event topic is enabled or
   *             disabled.</p>
   * @public
   */
  GatewayEuiEventTopic?: EventNotificationTopicStatus;
}

/**
 * <p>Connection status event configuration object for enabling or disabling topic.</p>
 * @public
 */
export interface ConnectionStatusEventConfiguration {
  /**
   * <p>Connection status event configuration object for enabling or disabling LoRaWAN related
   *             event topics.</p>
   * @public
   */
  LoRaWAN?: LoRaWANConnectionStatusEventNotificationConfigurations;

  /**
   * <p>Denotes whether the wireless gateway ID connection status event topic is enabled or
   *             disabled.</p>
   * @public
   */
  WirelessGatewayIdEventTopic?: EventNotificationTopicStatus;
}

/**
 * <p>Object for LoRaWAN connection status resource type event configuration.</p>
 * @public
 */
export interface LoRaWANConnectionStatusResourceTypeEventConfiguration {
  /**
   * <p>Denotes whether the wireless gateway connection status event topic is enabled or
   *             disabled.</p>
   * @public
   */
  WirelessGatewayEventTopic?: EventNotificationTopicStatus;
}

/**
 * <p>Connection status resource type event configuration object for enabling or disabling
 *             topic.</p>
 * @public
 */
export interface ConnectionStatusResourceTypeEventConfiguration {
  /**
   * <p>Connection status resource type event configuration object for enabling or disabling
   *             LoRaWAN related event topics.</p>
   * @public
   */
  LoRaWAN?: LoRaWANConnectionStatusResourceTypeEventConfiguration;
}

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
 */
export interface CreateDestinationRequest {
  /**
   * <p>The name of the new resource.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The type of value in <code>Expression</code>.</p>
   * @public
   */
  ExpressionType: ExpressionType | undefined;

  /**
   * <p>The rule name or topic rule to send messages to.</p>
   * @public
   */
  Expression: string | undefined;

  /**
   * <p>The description of the new resource.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The ARN of the IAM Role that authorizes the destination.</p>
   * @public
   */
  RoleArn: string | undefined;

  /**
   * <p>The tags to attach to the new destination. Tags are metadata that you can use to
   *             manage a resource.</p>
   * @public
   */
  Tags?: Tag[];

  /**
   * <p>Each resource must have a unique client request token. The client token is used to implement
   *             idempotency. It ensures that the request completes no more than one time. If you retry a request
   *             with the same token and the same parameters, the request will complete successfully. However, if
   *             you try to create a new resource using the same token but different parameters, an HTTP 409
   *             conflict occurs. If you omit this value, AWS SDKs will automatically generate a unique client request.
   *             For more information about idempotency, see <a href="https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html">Ensuring idempotency in Amazon EC2 API requests</a>.</p>
   * @public
   */
  ClientRequestToken?: string;
}

/**
 * @public
 */
export interface CreateDestinationResponse {
  /**
   * <p>The Amazon Resource Name of the new resource.</p>
   * @public
   */
  Arn?: string;

  /**
   * <p>The name of the new resource.</p>
   * @public
   */
  Name?: string;
}

/**
 * <p>LoRaWANDeviceProfile object.</p>
 * @public
 */
export interface LoRaWANDeviceProfile {
  /**
   * <p>The SupportsClassB value.</p>
   * @public
   */
  SupportsClassB?: boolean;

  /**
   * <p>The ClassBTimeout value.</p>
   * @public
   */
  ClassBTimeout?: number;

  /**
   * <p>The PingSlotPeriod value.</p>
   * @public
   */
  PingSlotPeriod?: number;

  /**
   * <p>The PingSlotDR value.</p>
   * @public
   */
  PingSlotDr?: number;

  /**
   * <p>The PingSlotFreq value.</p>
   * @public
   */
  PingSlotFreq?: number;

  /**
   * <p>The SupportsClassC value.</p>
   * @public
   */
  SupportsClassC?: boolean;

  /**
   * <p>The ClassCTimeout value.</p>
   * @public
   */
  ClassCTimeout?: number;

  /**
   * <p>The MAC version (such as OTAA 1.1 or OTAA 1.0.3) to use with this device
   *             profile.</p>
   * @public
   */
  MacVersion?: string;

  /**
   * <p>The version of regional parameters.</p>
   * @public
   */
  RegParamsRevision?: string;

  /**
   * <p>The RXDelay1 value.</p>
   * @public
   */
  RxDelay1?: number;

  /**
   * <p>The RXDROffset1 value.</p>
   * @public
   */
  RxDrOffset1?: number;

  /**
   * <p>The RXDataRate2 value.</p>
   * @public
   */
  RxDataRate2?: number;

  /**
   * <p>The RXFreq2 value.</p>
   * @public
   */
  RxFreq2?: number;

  /**
   * <p>The list of values that make up the FactoryPresetFreqs value.</p>
   * @public
   */
  FactoryPresetFreqsList?: number[];

  /**
   * <p>The MaxEIRP value.</p>
   * @public
   */
  MaxEirp?: number;

  /**
   * <p>The MaxDutyCycle value. It ranges from 0 to 15.</p>
   * @public
   */
  MaxDutyCycle?: number;

  /**
   * <p>The frequency band (RFRegion) value.</p>
   * @public
   */
  RfRegion?: string;

  /**
   * <p>The SupportsJoin value.</p>
   * @public
   */
  SupportsJoin?: boolean;

  /**
   * <p>The Supports32BitFCnt value.</p>
   * @public
   */
  Supports32BitFCnt?: boolean;
}

/**
 * <p>Sidewalk object for creating a device profile.</p>
 * @public
 */
export interface SidewalkCreateDeviceProfile {}

/**
 * @public
 */
export interface CreateDeviceProfileRequest {
  /**
   * <p>The name of the new resource.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The device profile information to use to create the device profile.</p>
   * @public
   */
  LoRaWAN?: LoRaWANDeviceProfile;

  /**
   * <p>The tags to attach to the new device profile. Tags are metadata that you can use to
   *             manage a resource.</p>
   * @public
   */
  Tags?: Tag[];

  /**
   * <p>Each resource must have a unique client request token. The client token is used to implement
   *             idempotency. It ensures that the request completes no more than one time. If you retry a request
   *             with the same token and the same parameters, the request will complete successfully. However, if
   *             you try to create a new resource using the same token but different parameters, an HTTP 409
   *             conflict occurs. If you omit this value, AWS SDKs will automatically generate a unique client request.
   *             For more information about idempotency, see <a href="https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html">Ensuring idempotency in Amazon EC2 API requests</a>.</p>
   * @public
   */
  ClientRequestToken?: string;

  /**
   * <p>The Sidewalk-related information for creating the Sidewalk device profile.</p>
   * @public
   */
  Sidewalk?: SidewalkCreateDeviceProfile;
}

/**
 * @public
 */
export interface CreateDeviceProfileResponse {
  /**
   * <p>The Amazon Resource Name of the new resource.</p>
   * @public
   */
  Arn?: string;

  /**
   * <p>The ID of the new device profile.</p>
   * @public
   */
  Id?: string;
}

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
 * <p>The LoRaWAN information used with a FUOTA task.</p>
 * @public
 */
export interface LoRaWANFuotaTask {
  /**
   * <p>Supported RfRegions</p>
   * @public
   */
  RfRegion?: SupportedRfRegion;
}

/**
 * @public
 */
export interface CreateFuotaTaskRequest {
  /**
   * <p>The name of a FUOTA task.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The description of the new resource.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>Each resource must have a unique client request token. The client token is used to implement
   *             idempotency. It ensures that the request completes no more than one time. If you retry a request
   *             with the same token and the same parameters, the request will complete successfully. However, if
   *             you try to create a new resource using the same token but different parameters, an HTTP 409
   *             conflict occurs. If you omit this value, AWS SDKs will automatically generate a unique client request.
   *             For more information about idempotency, see <a href="https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html">Ensuring idempotency in Amazon EC2 API requests</a>.</p>
   * @public
   */
  ClientRequestToken?: string;

  /**
   * <p>The LoRaWAN information used with a FUOTA task.</p>
   * @public
   */
  LoRaWAN?: LoRaWANFuotaTask;

  /**
   * <p>The S3 URI points to a firmware update image that is to be used with a FUOTA
   *             task.</p>
   * @public
   */
  FirmwareUpdateImage: string | undefined;

  /**
   * <p>The firmware update role that is to be used with a FUOTA task.</p>
   * @public
   */
  FirmwareUpdateRole: string | undefined;

  /**
   * <p>The tag to attach to the specified resource. Tags are metadata that you can use to
   *             manage a resource.</p>
   * @public
   */
  Tags?: Tag[];

  /**
   * <p>The percentage of the added fragments that are redundant. For example, if the size of
   *             the firmware image file is 100 bytes and the fragment size is 10 bytes, with
   *                 <code>RedundancyPercent</code> set to 50(%), the final number of encoded fragments
   *             is (100 / 10) + (100 / 10 * 50%) = 15.</p>
   * @public
   */
  RedundancyPercent?: number;

  /**
   * <p>The size of each fragment in bytes. This parameter is supported only for FUOTA tasks
   *             with multicast groups.</p>
   * @public
   */
  FragmentSizeBytes?: number;

  /**
   * <p>The interval for sending fragments in milliseconds, rounded to the nearest
   *             second.</p>
   *          <note>
   *             <p>This interval only determines the timing for when the Cloud sends down the
   *                 fragments to yor device. There can be a delay for when your device will receive
   *                 these fragments. This delay depends on the device's class and the communication
   *                 delay with the cloud.</p>
   *          </note>
   * @public
   */
  FragmentIntervalMS?: number;
}

/**
 * @public
 */
export interface CreateFuotaTaskResponse {
  /**
   * <p>The arn of a FUOTA task.</p>
   * @public
   */
  Arn?: string;

  /**
   * <p>The ID of a FUOTA task.</p>
   * @public
   */
  Id?: string;
}

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
 * <p>The LoRaWAN information that is to be used with the multicast group.</p>
 * @public
 */
export interface LoRaWANMulticast {
  /**
   * <p>Supported RfRegions</p>
   * @public
   */
  RfRegion?: SupportedRfRegion;

  /**
   * <p>DlClass for LoRaWAM, valid values are ClassB and ClassC.</p>
   * @public
   */
  DlClass?: DlClass;
}

/**
 * @public
 */
export interface CreateMulticastGroupRequest {
  /**
   * <p>The name of the multicast group.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The description of the multicast group.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>Each resource must have a unique client request token. The client token is used to implement
   *             idempotency. It ensures that the request completes no more than one time. If you retry a request
   *             with the same token and the same parameters, the request will complete successfully. However, if
   *             you try to create a new resource using the same token but different parameters, an HTTP 409
   *             conflict occurs. If you omit this value, AWS SDKs will automatically generate a unique client request.
   *             For more information about idempotency, see <a href="https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html">Ensuring idempotency in Amazon EC2 API requests</a>.</p>
   * @public
   */
  ClientRequestToken?: string;

  /**
   * <p>The LoRaWAN information that is to be used with the multicast group.</p>
   * @public
   */
  LoRaWAN: LoRaWANMulticast | undefined;

  /**
   * <p>The tag to attach to the specified resource. Tags are metadata that you can use to
   *             manage a resource.</p>
   * @public
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateMulticastGroupResponse {
  /**
   * <p>The arn of the multicast group.</p>
   * @public
   */
  Arn?: string;

  /**
   * <p>The ID of the multicast group.</p>
   * @public
   */
  Id?: string;
}

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
 * <p>Trace content for your wireless devices, gateways, and multicast groups.</p>
 * @public
 */
export interface TraceContent {
  /**
   * <p>
   *             <code>FrameInfo</code> of your wireless device resources for the trace content. Use
   *             FrameInfo to debug the communication between your LoRaWAN end devices and the network
   *             server.</p>
   * @public
   */
  WirelessDeviceFrameInfo?: WirelessDeviceFrameInfo;

  /**
   * <p>The log level for a log message. The log levels can be disabled, or set to
   *                 <code>ERROR</code> to display less verbose logs containing only error information,
   *             or to <code>INFO</code> for more detailed logs.</p>
   * @public
   */
  LogLevel?: LogLevel;

  /**
   * <p>
   *             <code>FrameInfo</code> of your multicast group resources for the trace content. Use
   *             FrameInfo to debug the multicast communication between your multicast groups and the
   *             network server.</p>
   * @public
   */
  MulticastFrameInfo?: MulticastFrameInfo;
}

/**
 * @public
 */
export interface CreateNetworkAnalyzerConfigurationRequest {
  /**
   * <p>Name of the network analyzer configuration.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>Trace content for your wireless devices, gateways, and multicast groups.</p>
   * @public
   */
  TraceContent?: TraceContent;

  /**
   * <p>Wireless device resources to add to the network analyzer configuration. Provide the
   *                 <code>WirelessDeviceId</code> of the resource to add in the input array.</p>
   * @public
   */
  WirelessDevices?: string[];

  /**
   * <p>Wireless gateway resources to add to the network analyzer configuration. Provide the
   *                 <code>WirelessGatewayId</code> of the resource to add in the input array.</p>
   * @public
   */
  WirelessGateways?: string[];

  /**
   * <p>The description of the new resource.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The tag to attach to the specified resource. Tags are metadata that you can use to
   *             manage a resource.</p>
   * @public
   */
  Tags?: Tag[];

  /**
   * <p>Each resource must have a unique client request token. The client token is used to implement
   *             idempotency. It ensures that the request completes no more than one time. If you retry a request
   *             with the same token and the same parameters, the request will complete successfully. However, if
   *             you try to create a new resource using the same token but different parameters, an HTTP 409
   *             conflict occurs. If you omit this value, AWS SDKs will automatically generate a unique client request.
   *             For more information about idempotency, see <a href="https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html">Ensuring idempotency in Amazon EC2 API requests</a>.</p>
   * @public
   */
  ClientRequestToken?: string;

  /**
   * <p>Multicast Group resources to add to the network analyzer configruation. Provide the
   *                 <code>MulticastGroupId</code> of the resource to add in the input array.</p>
   * @public
   */
  MulticastGroups?: string[];
}

/**
 * @public
 */
export interface CreateNetworkAnalyzerConfigurationResponse {
  /**
   * <p>The Amazon Resource Name of the new resource.</p>
   * @public
   */
  Arn?: string;

  /**
   * <p>Name of the network analyzer configuration.</p>
   * @public
   */
  Name?: string;
}

/**
 * <p>LoRaWANServiceProfile object.</p>
 * @public
 */
export interface LoRaWANServiceProfile {
  /**
   * <p>The AddGWMetaData value.</p>
   * @public
   */
  AddGwMetadata?: boolean;

  /**
   * <p>The DrMin value.</p>
   * @public
   */
  DrMin?: number;

  /**
   * <p>The DrMax value.</p>
   * @public
   */
  DrMax?: number;

  /**
   * <p>The PRAllowed value that describes whether passive roaming is allowed.</p>
   * @public
   */
  PrAllowed?: boolean;

  /**
   * <p>The RAAllowed value that describes whether roaming activation is allowed.</p>
   * @public
   */
  RaAllowed?: boolean;
}

/**
 * @public
 */
export interface CreateServiceProfileRequest {
  /**
   * <p>The name of the new resource.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The service profile information to use to create the service profile.</p>
   * @public
   */
  LoRaWAN?: LoRaWANServiceProfile;

  /**
   * <p>The tags to attach to the new service profile. Tags are metadata that you can use to
   *             manage a resource.</p>
   * @public
   */
  Tags?: Tag[];

  /**
   * <p>Each resource must have a unique client request token. The client token is used to implement
   *             idempotency. It ensures that the request completes no more than one time. If you retry a request
   *             with the same token and the same parameters, the request will complete successfully. However, if
   *             you try to create a new resource using the same token but different parameters, an HTTP 409
   *             conflict occurs. If you omit this value, AWS SDKs will automatically generate a unique client request.
   *             For more information about idempotency, see <a href="https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html">Ensuring idempotency in Amazon EC2 API requests</a>.</p>
   * @public
   */
  ClientRequestToken?: string;
}

/**
 * @public
 */
export interface CreateServiceProfileResponse {
  /**
   * <p>The Amazon Resource Name of the new resource.</p>
   * @public
   */
  Arn?: string;

  /**
   * <p>The ID of the new service profile.</p>
   * @public
   */
  Id?: string;
}

/**
 * <p>The FPorts for the position information.</p>
 * @public
 */
export interface Positioning {
  /**
   * <p>The Fport value.</p>
   * @public
   */
  ClockSync?: number;

  /**
   * <p>The Fport value.</p>
   * @public
   */
  Stream?: number;

  /**
   * <p>The Fport value.</p>
   * @public
   */
  Gnss?: number;
}

/**
 * <p>List of FPort assigned for different LoRaWAN application packages to use</p>
 * @public
 */
export interface FPorts {
  /**
   * <p>The Fport value.</p>
   * @public
   */
  Fuota?: number;

  /**
   * <p>The Fport value.</p>
   * @public
   */
  Multicast?: number;

  /**
   * <p>The Fport value.</p>
   * @public
   */
  ClockSync?: number;

  /**
   * <p>FPort values for the GNSS, stream, and ClockSync functions of the positioning
   *             information.</p>
   * @public
   */
  Positioning?: Positioning;

  /**
   * <p>Optional LoRaWAN application information, which can be used for geolocation.</p>
   * @public
   */
  Applications?: ApplicationConfig[];
}

/**
 * <p>OTAA device object for v1.0.x</p>
 * @public
 */
export interface OtaaV1_0_x {
  /**
   * <p>The AppKey value.</p>
   * @public
   */
  AppKey?: string;

  /**
   * <p>The AppEUI value. You specify this value when using LoRaWAN versions v1.0.2 or
   *             v1.0.3.</p>
   * @public
   */
  AppEui?: string;

  /**
   * <p>The JoinEUI value. You specify this value instead of the AppEUI when using LoRaWAN
   *             version v1.0.4.</p>
   * @public
   */
  JoinEui?: string;

  /**
   * <p>The GenAppKey value.</p>
   * @public
   */
  GenAppKey?: string;
}

/**
 * <p>OTAA device object for v1.1</p>
 * @public
 */
export interface OtaaV1_1 {
  /**
   * <p>The AppKey value.</p>
   * @public
   */
  AppKey?: string;

  /**
   * <p>The NwkKey value.</p>
   * @public
   */
  NwkKey?: string;

  /**
   * <p>The JoinEUI value.</p>
   * @public
   */
  JoinEui?: string;
}

/**
 * <p>LoRaWAN object for create functions.</p>
 * @public
 */
export interface LoRaWANDevice {
  /**
   * <p>The DevEUI value.</p>
   * @public
   */
  DevEui?: string;

  /**
   * <p>The ID of the device profile for the new wireless device.</p>
   * @public
   */
  DeviceProfileId?: string;

  /**
   * <p>The ID of the service profile.</p>
   * @public
   */
  ServiceProfileId?: string;

  /**
   * <p>OTAA device object for v1.1 for create APIs</p>
   * @public
   */
  OtaaV1_1?: OtaaV1_1;

  /**
   * <p>OTAA device object for create APIs for v1.0.x</p>
   * @public
   */
  OtaaV1_0_x?: OtaaV1_0_x;

  /**
   * <p>ABP device object for create APIs for v1.1</p>
   * @public
   */
  AbpV1_1?: AbpV1_1;

  /**
   * <p>LoRaWAN object for create APIs</p>
   * @public
   */
  AbpV1_0_x?: AbpV1_0_x;

  /**
   * <p>List of FPort assigned for different LoRaWAN application packages to use</p>
   * @public
   */
  FPorts?: FPorts;
}

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
 * <p>Sidewalk object for creating a wireless device.</p>
 * @public
 */
export interface SidewalkCreateWirelessDevice {
  /**
   * <p>The ID of the Sidewalk device profile.</p>
   * @public
   */
  DeviceProfileId?: string;
}

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
 */
export interface CreateWirelessDeviceRequest {
  /**
   * <p>The wireless device type.</p>
   * @public
   */
  Type: WirelessDeviceType | undefined;

  /**
   * <p>The name of the new resource.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The description of the new resource.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The name of the destination to assign to the new wireless device.</p>
   * @public
   */
  DestinationName: string | undefined;

  /**
   * <p>Each resource must have a unique client request token. The client token is used to implement
   *             idempotency. It ensures that the request completes no more than one time. If you retry a request
   *             with the same token and the same parameters, the request will complete successfully. However, if
   *             you try to create a new resource using the same token but different parameters, an HTTP 409
   *             conflict occurs. If you omit this value, AWS SDKs will automatically generate a unique client request.
   *             For more information about idempotency, see <a href="https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html">Ensuring idempotency in Amazon EC2 API requests</a>.</p>
   * @public
   */
  ClientRequestToken?: string;

  /**
   * <p>The device configuration information to use to create the wireless device.</p>
   * @public
   */
  LoRaWAN?: LoRaWANDevice;

  /**
   * <p>The tags to attach to the new wireless device. Tags are metadata that you can use to
   *             manage a resource.</p>
   * @public
   */
  Tags?: Tag[];

  /**
   * <p>FPort values for the GNSS, stream, and ClockSync functions of the positioning
   *             information.</p>
   * @public
   */
  Positioning?: PositioningConfigStatus;

  /**
   * <p>The device configuration information to use to create the Sidewalk device.</p>
   * @public
   */
  Sidewalk?: SidewalkCreateWirelessDevice;
}

/**
 * @public
 */
export interface CreateWirelessDeviceResponse {
  /**
   * <p>The Amazon Resource Name of the new resource.</p>
   * @public
   */
  Arn?: string;

  /**
   * <p>The ID of the new wireless device.</p>
   * @public
   */
  Id?: string;
}

/**
 * <p>LoRaWANGateway object.</p>
 * @public
 */
export interface LoRaWANGateway {
  /**
   * <p>The gateway's EUI value.</p>
   * @public
   */
  GatewayEui?: string;

  /**
   * <p>The frequency band (RFRegion) value.</p>
   * @public
   */
  RfRegion?: string;

  /**
   * <p>A list of JoinEuiRange used by LoRa gateways to filter LoRa frames.</p>
   * @public
   */
  JoinEuiFilters?: string[][];

  /**
   * <p>A list of NetId values that are used by LoRa gateways to filter the uplink
   *             frames.</p>
   * @public
   */
  NetIdFilters?: string[];

  /**
   * <p>A list of integer indicating which sub bands are supported by LoRa gateway.</p>
   * @public
   */
  SubBands?: number[];

  /**
   * <p>Beaconing object information, which consists of the data rate and frequency
   *             parameters.</p>
   * @public
   */
  Beaconing?: Beaconing;

  /**
   * <p>The MaxEIRP value.</p>
   * @public
   */
  MaxEirp?: number;
}

/**
 * @public
 */
export interface CreateWirelessGatewayRequest {
  /**
   * <p>The name of the new resource.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The description of the new resource.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The gateway configuration information to use to create the wireless gateway.</p>
   * @public
   */
  LoRaWAN: LoRaWANGateway | undefined;

  /**
   * <p>The tags to attach to the new wireless gateway. Tags are metadata that you can use to
   *             manage a resource.</p>
   * @public
   */
  Tags?: Tag[];

  /**
   * <p>Each resource must have a unique client request token. The client token is used to implement
   *             idempotency. It ensures that the request completes no more than one time. If you retry a request
   *             with the same token and the same parameters, the request will complete successfully. However, if
   *             you try to create a new resource using the same token but different parameters, an HTTP 409
   *             conflict occurs. If you omit this value, AWS SDKs will automatically generate a unique client request.
   *             For more information about idempotency, see <a href="https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html">Ensuring idempotency in Amazon EC2 API requests</a>.</p>
   * @public
   */
  ClientRequestToken?: string;
}

/**
 * @public
 */
export interface CreateWirelessGatewayResponse {
  /**
   * <p>The Amazon Resource Name of the new resource.</p>
   * @public
   */
  Arn?: string;

  /**
   * <p>The ID of the new wireless gateway.</p>
   * @public
   */
  Id?: string;
}

/**
 * @public
 */
export interface CreateWirelessGatewayTaskRequest {
  /**
   * <p>The ID of the resource to update.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The ID of the WirelessGatewayTaskDefinition.</p>
   * @public
   */
  WirelessGatewayTaskDefinitionId: string | undefined;
}

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
 */
export interface CreateWirelessGatewayTaskResponse {
  /**
   * <p>The ID of the WirelessGatewayTaskDefinition.</p>
   * @public
   */
  WirelessGatewayTaskDefinitionId?: string;

  /**
   * <p>The status of the request.</p>
   * @public
   */
  Status?: WirelessGatewayTaskStatus;
}

/**
 * <p>LoRaWANGatewayVersion object.</p>
 * @public
 */
export interface LoRaWANGatewayVersion {
  /**
   * <p>The version of the wireless gateway firmware.</p>
   * @public
   */
  PackageVersion?: string;

  /**
   * <p>The model number of the wireless gateway.</p>
   * @public
   */
  Model?: string;

  /**
   * <p>The basic station version of the wireless gateway.</p>
   * @public
   */
  Station?: string;
}

/**
 * <p>LoRaWANUpdateGatewayTaskCreate object.</p>
 * @public
 */
export interface LoRaWANUpdateGatewayTaskCreate {
  /**
   * <p>The signature used to verify the update firmware.</p>
   * @public
   */
  UpdateSignature?: string;

  /**
   * <p>The CRC of the signature private key to check.</p>
   * @public
   */
  SigKeyCrc?: number;

  /**
   * <p>The version of the gateways that should receive the update.</p>
   * @public
   */
  CurrentVersion?: LoRaWANGatewayVersion;

  /**
   * <p>The firmware version to update the gateway to.</p>
   * @public
   */
  UpdateVersion?: LoRaWANGatewayVersion;
}

/**
 * <p>UpdateWirelessGatewayTaskCreate object.</p>
 * @public
 */
export interface UpdateWirelessGatewayTaskCreate {
  /**
   * <p>The link to the S3 bucket.</p>
   * @public
   */
  UpdateDataSource?: string;

  /**
   * <p>The IAM role used to read data from the S3 bucket.</p>
   * @public
   */
  UpdateDataRole?: string;

  /**
   * <p>The properties that relate to the LoRaWAN wireless gateway.</p>
   * @public
   */
  LoRaWAN?: LoRaWANUpdateGatewayTaskCreate;
}

/**
 * @public
 */
export interface CreateWirelessGatewayTaskDefinitionRequest {
  /**
   * <p>Whether to automatically create tasks using this task definition for all gateways with
   *             the specified current version. If <code>false</code>, the task must me created by
   *             calling <code>CreateWirelessGatewayTask</code>.</p>
   * @public
   */
  AutoCreateTasks: boolean | undefined;

  /**
   * <p>The name of the new resource.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>Information about the gateways to update.</p>
   * @public
   */
  Update?: UpdateWirelessGatewayTaskCreate;

  /**
   * <p>Each resource must have a unique client request token. The client token is used to implement
   *             idempotency. It ensures that the request completes no more than one time. If you retry a request
   *             with the same token and the same parameters, the request will complete successfully. However, if
   *             you try to create a new resource using the same token but different parameters, an HTTP 409
   *             conflict occurs. If you omit this value, AWS SDKs will automatically generate a unique client request.
   *             For more information about idempotency, see <a href="https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html">Ensuring idempotency in Amazon EC2 API requests</a>.</p>
   * @public
   */
  ClientRequestToken?: string;

  /**
   * <p>The tags to attach to the specified resource. Tags are metadata that you can use to
   *             manage a resource.</p>
   * @public
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateWirelessGatewayTaskDefinitionResponse {
  /**
   * <p>The ID of the new wireless gateway task definition.</p>
   * @public
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name of the resource.</p>
   * @public
   */
  Arn?: string;
}

/**
 * <p>The device attestation key (DAK) information.</p>
 * @public
 */
export interface DakCertificateMetadata {
  /**
   * <p>The certificate ID for the DAK.</p>
   * @public
   */
  CertificateId: string | undefined;

  /**
   * <p>The maximum number of signatures that the DAK can sign. A value of <code>-1</code>
   *             indicates that there's no device limit.</p>
   * @public
   */
  MaxAllowedSignature?: number;

  /**
   * <p>Whether factory support has been enabled.</p>
   * @public
   */
  FactorySupport?: boolean;

  /**
   * <p>The advertised product ID (APID) that's used for pre-production and production
   *             applications.</p>
   * @public
   */
  ApId?: string;

  /**
   * <p>The device type ID that's used for prototyping applications.</p>
   * @public
   */
  DeviceTypeId?: string;
}

/**
 * @public
 */
export interface DeleteDestinationRequest {
  /**
   * <p>The name of the resource to delete.</p>
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
   * <p>The ID of the resource to delete.</p>
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
   * <p>The ID of a FUOTA task.</p>
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
   * <p>The ID of the multicast group.</p>
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
   * <p>Name of the network analyzer configuration.</p>
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
   * <p>The ID of a given wireless device for which downlink messages will be deleted.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>If message ID is <code>"*"</code>, it cleares the entire downlink queue for a given
   *             device, specified by the wireless device ID. Otherwise, the downlink message with the
   *             specified message ID will be deleted.</p>
   * @public
   */
  MessageId: string | undefined;

  /**
   * <p>The wireless device type, which can be either Sidewalk or LoRaWAN.</p>
   * @public
   */
  WirelessDeviceType?: WirelessDeviceType;
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
   * <p>The ID of the resource to delete.</p>
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
   * <p>The ID of the resource to delete.</p>
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
   * <p>The unique identifier of the import task to be deleted.</p>
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
   * <p>The ID of the resource to delete.</p>
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
   * <p>The ID of the resource to delete.</p>
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
   * <p>The ID of the resource to delete.</p>
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
   * <p>The identifier of the wireless device to deregister from AWS IoT Wireless.</p>
   * @public
   */
  Identifier: string | undefined;

  /**
   * <p>The type of wireless device to deregister from AWS IoT Wireless, which can be
   *                 <code>LoRaWAN</code> or <code>Sidewalk</code>.</p>
   * @public
   */
  WirelessDeviceType?: WirelessDeviceType;
}

/**
 * @public
 */
export interface DeregisterWirelessDeviceResponse {}

/**
 * <p>Describes a destination.</p>
 * @public
 */
export interface Destinations {
  /**
   * <p>The Amazon Resource Name of the resource.</p>
   * @public
   */
  Arn?: string;

  /**
   * <p>The name of the resource.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The type of value in <code>Expression</code>.</p>
   * @public
   */
  ExpressionType?: ExpressionType;

  /**
   * <p>The rule name or topic rule to send messages to.</p>
   * @public
   */
  Expression?: string;

  /**
   * <p>The description of the resource.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The ARN of the IAM Role that authorizes the destination.</p>
   * @public
   */
  RoleArn?: string;
}

/**
 * <p>Describes a device profile.</p>
 * @public
 */
export interface DeviceProfile {
  /**
   * <p>The Amazon Resource Name of the resource.</p>
   * @public
   */
  Arn?: string;

  /**
   * <p>The name of the resource.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The ID of the device profile.</p>
   * @public
   */
  Id?: string;
}

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
 * <p>
 *             <code>SidewalkEventNotificationConfigurations</code> object, which is the event
 *             configuration object for Sidewalk-related event topics.</p>
 * @public
 */
export interface SidewalkEventNotificationConfigurations {
  /**
   * <p>Denotes whether the Amazon ID event topic is enabled or disabled.</p>
   * @public
   */
  AmazonIdEventTopic?: EventNotificationTopicStatus;
}

/**
 * <p>Device registration state event configuration object for enabling and disabling
 *             relevant topics.</p>
 * @public
 */
export interface DeviceRegistrationStateEventConfiguration {
  /**
   * <p>Device registration state event configuration object for enabling or disabling
   *             Sidewalk related event topics.</p>
   * @public
   */
  Sidewalk?: SidewalkEventNotificationConfigurations;

  /**
   * <p>Denotes whether the wireless device ID device registration state event topic is
   *             enabled or disabled.</p>
   * @public
   */
  WirelessDeviceIdEventTopic?: EventNotificationTopicStatus;
}

/**
 * <p>Sidewalk resource type event configuration object for enabling or disabling
 *             topic.</p>
 * @public
 */
export interface SidewalkResourceTypeEventConfiguration {
  /**
   * <p>Denotes whether the wireless device join event topic is enabled or disabled.</p>
   * @public
   */
  WirelessDeviceEventTopic?: EventNotificationTopicStatus;
}

/**
 * <p>Device registration state resource type event configuration object for enabling or
 *             disabling topic.</p>
 * @public
 */
export interface DeviceRegistrationStateResourceTypeEventConfiguration {
  /**
   * <p>Device registration resource type state event configuration object for enabling or
   *             disabling Sidewalk related event topics.</p>
   * @public
   */
  Sidewalk?: SidewalkResourceTypeEventConfiguration;
}

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
 * <p>The required list of dimensions for the metric.</p>
 * @public
 */
export interface Dimension {
  /**
   * <p>The name of the dimension.</p>
   * @public
   */
  name?: DimensionName;

  /**
   * <p>The dimension's value.</p>
   * @public
   */
  value?: string;
}

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
 */
export interface DisassociateAwsAccountFromPartnerAccountRequest {
  /**
   * <p>The partner account ID to disassociate from the AWS account.</p>
   * @public
   */
  PartnerAccountId: string | undefined;

  /**
   * <p>The partner type.</p>
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
   * <p>The ID of a FUOTA task.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The ID of the multicast group.</p>
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
   * <p>The ID of a FUOTA task.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The ID of the wireless device.</p>
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
   * <p>The ID of the multicast group.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The ID of the wireless device.</p>
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
   * <p>The ID of the resource to update.</p>
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
   * <p>The ID of the resource to update.</p>
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
   * <p>The ID of the resource to update.</p>
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface DisassociateWirelessGatewayFromThingResponse {}

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
 * <p>Gateway list item object that specifies the frequency and list of gateways for which
 *             the downlink message should be sent.</p>
 * @public
 */
export interface GatewayListItem {
  /**
   * <p>The ID of the wireless gateways that you want to add to the list of gateways when
   *             sending downlink messages.</p>
   * @public
   */
  GatewayId: string | undefined;

  /**
   * <p>The frequency to use for the gateways when sending a downlink message to the wireless
   *             device.</p>
   * @public
   */
  DownlinkFrequency: number | undefined;
}

/**
 * <p>Specify the list of gateways to which you want to send downlink data traffic when the
 *             wireless device is running in class B or class C mode.</p>
 * @public
 */
export interface ParticipatingGateways {
  /**
   * <p>Indicates whether to send the downlink message in sequential mode or concurrent mode,
   *             or to use only the chosen gateways from the previous uplink message transmission.</p>
   * @public
   */
  DownlinkMode: DownlinkMode | undefined;

  /**
   * <p>The list of gateways that you want to use for sending the downlink data
   *             traffic.</p>
   * @public
   */
  GatewayList: GatewayListItem[] | undefined;

  /**
   * <p>The duration of time for which AWS IoT Core for LoRaWAN will wait before transmitting
   *             the payload to the next gateway.</p>
   * @public
   */
  TransmissionInterval: number | undefined;
}

/**
 * <p>LoRaWAN router info.</p>
 * @public
 */
export interface LoRaWANSendDataToDevice {
  /**
   * <p>The Fport value.</p>
   * @public
   */
  FPort?: number;

  /**
   * <p>Choose the gateways that you want to use for the downlink data traffic when the
   *             wireless device is running in class B or class C mode.</p>
   * @public
   */
  ParticipatingGateways?: ParticipatingGateways;
}

/**
 * <p>The message in the downlink queue.</p>
 * @public
 */
export interface DownlinkQueueMessage {
  /**
   * <p> The message ID assigned by IoT Wireless to each downlink message, which helps
   *             identify the message.</p>
   * @public
   */
  MessageId?: string;

  /**
   * <p>The transmit mode to use for sending data to the wireless device. This can be
   *                 <code>0</code> for UM (unacknowledge mode) or <code>1</code> for AM (acknowledge
   *             mode).</p>
   * @public
   */
  TransmitMode?: number;

  /**
   * <p>The time at which Iot Wireless received the downlink message.</p>
   * @public
   */
  ReceivedAt?: string;

  /**
   * <p>LoRaWAN router info.</p>
   * @public
   */
  LoRaWAN?: LoRaWANSendDataToDevice;
}

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
 * <p>Object for LoRaWAN join resource type event configuration.</p>
 * @public
 */
export interface LoRaWANJoinEventNotificationConfigurations {
  /**
   * <p>Denotes whether the Dev EUI join event topic is enabled or disabled.</p>
   * @public
   */
  DevEuiEventTopic?: EventNotificationTopicStatus;
}

/**
 * <p>Join event configuration object for enabling or disabling topic.</p>
 * @public
 */
export interface JoinEventConfiguration {
  /**
   * <p>Join event configuration object for enabling or disabling LoRaWAN related event
   *             topics.</p>
   * @public
   */
  LoRaWAN?: LoRaWANJoinEventNotificationConfigurations;

  /**
   * <p>Denotes whether the wireless device ID join event topic is enabled or disabled.</p>
   * @public
   */
  WirelessDeviceIdEventTopic?: EventNotificationTopicStatus;
}

/**
 * <p>Message delivery status event configuration object for enabling and disabling relevant
 *             topics.</p>
 * @public
 */
export interface MessageDeliveryStatusEventConfiguration {
  /**
   * <p>
   *             <code>SidewalkEventNotificationConfigurations</code> object, which is the event
   *             configuration object for Sidewalk-related event topics.</p>
   * @public
   */
  Sidewalk?: SidewalkEventNotificationConfigurations;

  /**
   * <p>Denotes whether the wireless device ID message delivery status event topic is enabled
   *             or disabled.</p>
   * @public
   */
  WirelessDeviceIdEventTopic?: EventNotificationTopicStatus;
}

/**
 * <p>Proximity event configuration object for enabling and disabling relevant
 *             topics.</p>
 * @public
 */
export interface ProximityEventConfiguration {
  /**
   * <p>Proximity event configuration object for enabling or disabling Sidewalk related event
   *             topics.</p>
   * @public
   */
  Sidewalk?: SidewalkEventNotificationConfigurations;

  /**
   * <p>Denotes whether the wireless device ID proximity event topic is enabled or
   *             disabled.</p>
   * @public
   */
  WirelessDeviceIdEventTopic?: EventNotificationTopicStatus;
}

/**
 * <p>Object of all event configurations and the status of the event topics.</p>
 * @public
 */
export interface EventNotificationItemConfigurations {
  /**
   * <p>Device registration state event configuration for an event configuration item.</p>
   * @public
   */
  DeviceRegistrationState?: DeviceRegistrationStateEventConfiguration;

  /**
   * <p>Proximity event configuration for an event configuration item.</p>
   * @public
   */
  Proximity?: ProximityEventConfiguration;

  /**
   * <p>Join event configuration for an event configuration item.</p>
   * @public
   */
  Join?: JoinEventConfiguration;

  /**
   * <p>Connection status event configuration for an event configuration item.</p>
   * @public
   */
  ConnectionStatus?: ConnectionStatusEventConfiguration;

  /**
   * <p>Message delivery status event configuration for an event configuration item.</p>
   * @public
   */
  MessageDeliveryStatus?: MessageDeliveryStatusEventConfiguration;
}

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
 * <p>Event configuration object for a single resource.</p>
 * @public
 */
export interface EventConfigurationItem {
  /**
   * <p>Resource identifier opted in for event messaging.</p>
   * @public
   */
  Identifier?: string;

  /**
   * <p>Identifier type of the particular resource identifier for event configuration.</p>
   * @public
   */
  IdentifierType?: IdentifierType;

  /**
   * <p>Partner type of the resource if the identifier type is PartnerAccountId.</p>
   * @public
   */
  PartnerType?: EventNotificationPartnerType;

  /**
   * <p>Object of all event configurations and the status of the event topics.</p>
   * @public
   */
  Events?: EventNotificationItemConfigurations;
}

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
 * <p>A FUOTA task.</p>
 * @public
 */
export interface FuotaTask {
  /**
   * <p>The ID of a FUOTA task.</p>
   * @public
   */
  Id?: string;

  /**
   * <p>The arn of a FUOTA task.</p>
   * @public
   */
  Arn?: string;

  /**
   * <p>The name of a FUOTA task.</p>
   * @public
   */
  Name?: string;
}

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
 */
export interface GetDestinationRequest {
  /**
   * <p>The name of the resource to get.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface GetDestinationResponse {
  /**
   * <p>The Amazon Resource Name of the resource.</p>
   * @public
   */
  Arn?: string;

  /**
   * <p>The name of the resource.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The rule name or topic rule to send messages to.</p>
   * @public
   */
  Expression?: string;

  /**
   * <p>The type of value in <code>Expression</code>.</p>
   * @public
   */
  ExpressionType?: ExpressionType;

  /**
   * <p>The description of the resource.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The ARN of the IAM Role that authorizes the destination.</p>
   * @public
   */
  RoleArn?: string;
}

/**
 * @public
 */
export interface GetDeviceProfileRequest {
  /**
   * <p>The ID of the resource to get.</p>
   * @public
   */
  Id: string | undefined;
}

/**
 * <p>Gets information about a Sidewalk device profile.</p>
 * @public
 */
export interface SidewalkGetDeviceProfile {
  /**
   * <p>The Sidewalk application server public key.</p>
   * @public
   */
  ApplicationServerPublicKey?: string;

  /**
   * <p>Gets information about the certification status of a Sidewalk device profile.</p>
   * @public
   */
  QualificationStatus?: boolean;

  /**
   * <p>The DAK certificate information of the Sidewalk device profile.</p>
   * @public
   */
  DakCertificateMetadata?: DakCertificateMetadata[];
}

/**
 * @public
 */
export interface GetDeviceProfileResponse {
  /**
   * <p>The Amazon Resource Name of the resource.</p>
   * @public
   */
  Arn?: string;

  /**
   * <p>The name of the resource.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The ID of the device profile.</p>
   * @public
   */
  Id?: string;

  /**
   * <p>Information about the device profile.</p>
   * @public
   */
  LoRaWAN?: LoRaWANDeviceProfile;

  /**
   * <p>Information about the Sidewalk parameters in the device profile.</p>
   * @public
   */
  Sidewalk?: SidewalkGetDeviceProfile;
}

/**
 * @public
 */
export interface GetEventConfigurationByResourceTypesRequest {}

/**
 * <p>Object for LoRaWAN join resource type event configuration.</p>
 * @public
 */
export interface LoRaWANJoinResourceTypeEventConfiguration {
  /**
   * <p>Denotes whether the wireless device join event topic is enabled or disabled.</p>
   * @public
   */
  WirelessDeviceEventTopic?: EventNotificationTopicStatus;
}

/**
 * <p>Join resource type event configuration object for enabling or disabling topic.</p>
 * @public
 */
export interface JoinResourceTypeEventConfiguration {
  /**
   * <p>Join resource type event configuration object for enabling or disabling LoRaWAN
   *             related event topics.</p>
   * @public
   */
  LoRaWAN?: LoRaWANJoinResourceTypeEventConfiguration;
}

/**
 * <p>Message delivery status resource type event configuration object for enabling or
 *             disabling relevant topic.</p>
 * @public
 */
export interface MessageDeliveryStatusResourceTypeEventConfiguration {
  /**
   * <p>Sidewalk resource type event configuration object for enabling or disabling
   *             topic.</p>
   * @public
   */
  Sidewalk?: SidewalkResourceTypeEventConfiguration;
}

/**
 * <p>Proximity resource type event configuration object for enabling or disabling
 *             topic.</p>
 * @public
 */
export interface ProximityResourceTypeEventConfiguration {
  /**
   * <p>Proximity resource type event configuration object for enabling and disabling wireless
   *             device topic.</p>
   * @public
   */
  Sidewalk?: SidewalkResourceTypeEventConfiguration;
}

/**
 * @public
 */
export interface GetEventConfigurationByResourceTypesResponse {
  /**
   * <p>Resource type event configuration for the device registration state event.</p>
   * @public
   */
  DeviceRegistrationState?: DeviceRegistrationStateResourceTypeEventConfiguration;

  /**
   * <p>Resource type event configuration for the proximity event.</p>
   * @public
   */
  Proximity?: ProximityResourceTypeEventConfiguration;

  /**
   * <p>Resource type event configuration for the join event.</p>
   * @public
   */
  Join?: JoinResourceTypeEventConfiguration;

  /**
   * <p>Resource type event configuration for the connection status event.</p>
   * @public
   */
  ConnectionStatus?: ConnectionStatusResourceTypeEventConfiguration;

  /**
   * <p>Resource type event configuration object for the message delivery status event.</p>
   * @public
   */
  MessageDeliveryStatus?: MessageDeliveryStatusResourceTypeEventConfiguration;
}

/**
 * @public
 */
export interface GetFuotaTaskRequest {
  /**
   * <p>The ID of a FUOTA task.</p>
   * @public
   */
  Id: string | undefined;
}

/**
 * <p>The LoRaWAN information returned from getting a FUOTA task.</p>
 * @public
 */
export interface LoRaWANFuotaTaskGetInfo {
  /**
   * <p>The frequency band (RFRegion) value.</p>
   * @public
   */
  RfRegion?: string;

  /**
   * <p>Start time of a FUOTA task.</p>
   * @public
   */
  StartTime?: Date;
}

/**
 * @public
 */
export interface GetFuotaTaskResponse {
  /**
   * <p>The arn of a FUOTA task.</p>
   * @public
   */
  Arn?: string;

  /**
   * <p>The ID of a FUOTA task.</p>
   * @public
   */
  Id?: string;

  /**
   * <p>The status of a FUOTA task.</p>
   * @public
   */
  Status?: FuotaTaskStatus;

  /**
   * <p>The name of a FUOTA task.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The description of the new resource.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The LoRaWAN information returned from getting a FUOTA task.</p>
   * @public
   */
  LoRaWAN?: LoRaWANFuotaTaskGetInfo;

  /**
   * <p>The S3 URI points to a firmware update image that is to be used with a FUOTA
   *             task.</p>
   * @public
   */
  FirmwareUpdateImage?: string;

  /**
   * <p>The firmware update role that is to be used with a FUOTA task.</p>
   * @public
   */
  FirmwareUpdateRole?: string;

  /**
   * <p>Created at timestamp for the resource.</p>
   * @public
   */
  CreatedAt?: Date;

  /**
   * <p>The percentage of the added fragments that are redundant. For example, if the size of
   *             the firmware image file is 100 bytes and the fragment size is 10 bytes, with
   *                 <code>RedundancyPercent</code> set to 50(%), the final number of encoded fragments
   *             is (100 / 10) + (100 / 10 * 50%) = 15.</p>
   * @public
   */
  RedundancyPercent?: number;

  /**
   * <p>The size of each fragment in bytes. This parameter is supported only for FUOTA tasks
   *             with multicast groups.</p>
   * @public
   */
  FragmentSizeBytes?: number;

  /**
   * <p>The interval for sending fragments in milliseconds, rounded to the nearest
   *             second.</p>
   *          <note>
   *             <p>This interval only determines the timing for when the Cloud sends down the
   *                 fragments to yor device. There can be a delay for when your device will receive
   *                 these fragments. This delay depends on the device's class and the communication
   *                 delay with the cloud.</p>
   *          </note>
   * @public
   */
  FragmentIntervalMS?: number;
}

/**
 * @public
 */
export interface GetLogLevelsByResourceTypesRequest {}

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
 * <p>The log options for a wireless device event and can be used to set log levels for a
 *             specific wireless device event.</p>
 *          <p>For a LoRaWAN device, possible events for a log messsage are: <code>Join</code>,
 *                 <code>Rejoin</code>, <code>Downlink_Data</code>, and <code>Uplink_Data</code>. For a
 *             Sidewalk device, possible events for a log message are <code>Registration</code>,
 *                 <code>Downlink_Data</code>, and <code>Uplink_Data</code>.</p>
 * @public
 */
export interface WirelessDeviceEventLogOption {
  /**
   * <p>The event for a log message, if the log message is tied to a wireless device.</p>
   * @public
   */
  Event: WirelessDeviceEvent | undefined;

  /**
   * <p>The log level for a log message. The log levels can be disabled, or set to
   *                 <code>ERROR</code> to display less verbose logs containing only error information,
   *             or to <code>INFO</code> for more detailed logs.</p>
   * @public
   */
  LogLevel: LogLevel | undefined;
}

/**
 * <p>The log options for wireless devices and can be used to set log levels for a specific
 *             type of wireless device.</p>
 * @public
 */
export interface WirelessDeviceLogOption {
  /**
   * <p>The wireless device type.</p>
   * @public
   */
  Type: WirelessDeviceType | undefined;

  /**
   * <p>The log level for a log message. The log levels can be disabled, or set to
   *                 <code>ERROR</code> to display less verbose logs containing only error information,
   *             or to <code>INFO</code> for more detailed logs.</p>
   * @public
   */
  LogLevel: LogLevel | undefined;

  /**
   * <p>The list of wireless device event log options.</p>
   * @public
   */
  Events?: WirelessDeviceEventLogOption[];
}

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
 * <p>The log options for a wireless gateway event and can be used to set log levels for a
 *             specific wireless gateway event.</p>
 *          <p>For a LoRaWAN gateway, possible events for a log message are <code>CUPS_Request</code>
 *             and <code>Certificate</code>.</p>
 * @public
 */
export interface WirelessGatewayEventLogOption {
  /**
   * <p>The event for a log message, if the log message is tied to a wireless gateway.</p>
   * @public
   */
  Event: WirelessGatewayEvent | undefined;

  /**
   * <p>The log level for a log message. The log levels can be disabled, or set to
   *                 <code>ERROR</code> to display less verbose logs containing only error information,
   *             or to <code>INFO</code> for more detailed logs.</p>
   * @public
   */
  LogLevel: LogLevel | undefined;
}

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
 * <p>The log options for wireless gateways and can be used to set log levels for a specific
 *             type of wireless gateway.</p>
 * @public
 */
export interface WirelessGatewayLogOption {
  /**
   * <p>The wireless gateway type.</p>
   * @public
   */
  Type: WirelessGatewayType | undefined;

  /**
   * <p>The log level for a log message. The log levels can be disabled, or set to
   *                 <code>ERROR</code> to display less verbose logs containing only error information,
   *             or to <code>INFO</code> for more detailed logs.</p>
   * @public
   */
  LogLevel: LogLevel | undefined;

  /**
   * <p>The list of wireless gateway event log options.</p>
   * @public
   */
  Events?: WirelessGatewayEventLogOption[];
}

/**
 * @public
 */
export interface GetLogLevelsByResourceTypesResponse {
  /**
   * <p>The log level for a log message. The log levels can be disabled, or set to
   *                 <code>ERROR</code> to display less verbose logs containing only error information,
   *             or to <code>INFO</code> for more detailed logs.</p>
   * @public
   */
  DefaultLogLevel?: LogLevel;

  /**
   * <p>The list of wireless gateway log options.</p>
   * @public
   */
  WirelessGatewayLogOptions?: WirelessGatewayLogOption[];

  /**
   * <p>The list of wireless device log options.</p>
   * @public
   */
  WirelessDeviceLogOptions?: WirelessDeviceLogOption[];
}

/**
 * @public
 */
export interface GetMetricConfigurationRequest {}

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
 * <p>The configuration of summary metrics.</p>
 * @public
 */
export interface SummaryMetricConfiguration {
  /**
   * <p>The status of the configuration of summary metrics.</p>
   * @public
   */
  Status?: SummaryMetricConfigurationStatus;
}

/**
 * @public
 */
export interface GetMetricConfigurationResponse {
  /**
   * <p>The configuration status of the AWS account for summary metric aggregation.</p>
   * @public
   */
  SummaryMetric?: SummaryMetricConfiguration;
}

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
 * <p>The summary metric query object.</p>
 * @public
 */
export interface SummaryMetricQuery {
  /**
   * <p>The id of the summary metric query.</p>
   * @public
   */
  QueryId?: string;

  /**
   * <p>The name of the metric.</p>
   * @public
   */
  MetricName?: MetricName;

  /**
   * <p>The dimensions of the summary metric.</p>
   * @public
   */
  Dimensions?: Dimension[];

  /**
   * <p>The aggregation period of the summary metric.</p>
   * @public
   */
  AggregationPeriod?: AggregationPeriod;

  /**
   * <p>The start timestamp for the summary metric query.</p>
   * @public
   */
  StartTimestamp?: Date;

  /**
   * <p>The end timestamp for the summary metric query.</p>
   * @public
   */
  EndTimestamp?: Date;
}

/**
 * @public
 */
export interface GetMetricsRequest {
  /**
   * <p>The list of queries to retrieve the summary metrics.</p>
   * @public
   */
  SummaryMetricQueries?: SummaryMetricQuery[];
}

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
 * <p>The aggregated values of the metric.</p>
 * @public
 */
export interface MetricQueryValue {
  /**
   * <p>The minimum of the values of all data points collected during the aggregation
   *             period.</p>
   * @public
   */
  Min?: number;

  /**
   * <p>The maximum of the values of all the data points collected during the aggregation
   *             period.</p>
   * @public
   */
  Max?: number;

  /**
   * <p>The sum of the values of all data points collected during the aggregation
   *             period.</p>
   * @public
   */
  Sum?: number;

  /**
   * <p>The average of the values of all data points collected during the aggregation
   *             period.</p>
   * @public
   */
  Avg?: number;

  /**
   * <p>The standard deviation of the values of all data points collected during the
   *             aggregation period.</p>
   * @public
   */
  Std?: number;

  /**
   * <p>The 90th percentile of the values of all data points collected during the aggregation
   *             period.</p>
   * @public
   */
  P90?: number;
}

/**
 * <p>The result of the summary metrics aggregation operation.</p>
 * @public
 */
export interface SummaryMetricQueryResult {
  /**
   * <p>The ID of the summary metric results query operation.</p>
   * @public
   */
  QueryId?: string;

  /**
   * <p>The status of the summary metric query result.</p>
   * @public
   */
  QueryStatus?: MetricQueryStatus;

  /**
   * <p>The error message for the summary metric query result.</p>
   * @public
   */
  Error?: string;

  /**
   * <p>The name of the summary metric query result.</p>
   * @public
   */
  MetricName?: MetricName;

  /**
   * <p>The dimensions of the metric.</p>
   * @public
   */
  Dimensions?: Dimension[];

  /**
   * <p>The aggregation period of the metric.</p>
   * @public
   */
  AggregationPeriod?: AggregationPeriod;

  /**
   * <p>The start timestamp for the summary metric query.</p>
   * @public
   */
  StartTimestamp?: Date;

  /**
   * <p>The end timestamp for the summary metric query.</p>
   * @public
   */
  EndTimestamp?: Date;

  /**
   * <p>The timestamp of each aggregation result.</p>
   * @public
   */
  Timestamps?: Date[];

  /**
   * <p>The list of aggregated summary metric query results.</p>
   * @public
   */
  Values?: MetricQueryValue[];

  /**
   * <p>The units of measurement to be used for interpreting the aggregation result.</p>
   * @public
   */
  Unit?: string;
}

/**
 * @public
 */
export interface GetMetricsResponse {
  /**
   * <p>The list of summary metrics that were retrieved.</p>
   * @public
   */
  SummaryMetricQueryResults?: SummaryMetricQueryResult[];
}

/**
 * @public
 */
export interface GetMulticastGroupRequest {
  /**
   * <p>The ID of the multicast group.</p>
   * @public
   */
  Id: string | undefined;
}

/**
 * <p>The LoRaWAN information that is to be returned from getting multicast group
 *             information.</p>
 * @public
 */
export interface LoRaWANMulticastGet {
  /**
   * <p>Supported RfRegions</p>
   * @public
   */
  RfRegion?: SupportedRfRegion;

  /**
   * <p>DlClass for LoRaWAM, valid values are ClassB and ClassC.</p>
   * @public
   */
  DlClass?: DlClass;

  /**
   * <p>Number of devices that are requested to be associated with the multicast group.</p>
   * @public
   */
  NumberOfDevicesRequested?: number;

  /**
   * <p>Number of devices that are associated to the multicast group.</p>
   * @public
   */
  NumberOfDevicesInGroup?: number;
}

/**
 * @public
 */
export interface GetMulticastGroupResponse {
  /**
   * <p>The arn of the multicast group.</p>
   * @public
   */
  Arn?: string;

  /**
   * <p>The ID of the multicast group.</p>
   * @public
   */
  Id?: string;

  /**
   * <p>The name of the multicast group.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The description of the new resource.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The status of the multicast group.</p>
   * @public
   */
  Status?: string;

  /**
   * <p>The LoRaWAN information that is to be returned from getting multicast group
   *             information.</p>
   * @public
   */
  LoRaWAN?: LoRaWANMulticastGet;

  /**
   * <p>Created at timestamp for the resource.</p>
   * @public
   */
  CreatedAt?: Date;
}

/**
 * @public
 */
export interface GetMulticastGroupSessionRequest {
  /**
   * <p>The ID of the multicast group.</p>
   * @public
   */
  Id: string | undefined;
}

/**
 * <p>The LoRaWAN information used with the multicast session.</p>
 * @public
 */
export interface LoRaWANMulticastSession {
  /**
   * <p>Downlink data rate.</p>
   * @public
   */
  DlDr?: number;

  /**
   * <p>Downlink frequency.</p>
   * @public
   */
  DlFreq?: number;

  /**
   * <p>Timestamp of when the multicast group session is to start.</p>
   * @public
   */
  SessionStartTime?: Date;

  /**
   * <p>How long before a multicast group session is to timeout.</p>
   * @public
   */
  SessionTimeout?: number;

  /**
   * <p>The PingSlotPeriod value.</p>
   * @public
   */
  PingSlotPeriod?: number;
}

/**
 * @public
 */
export interface GetMulticastGroupSessionResponse {
  /**
   * <p>The LoRaWAN information used with the multicast session.</p>
   * @public
   */
  LoRaWAN?: LoRaWANMulticastSession;
}

/**
 * @public
 */
export interface GetNetworkAnalyzerConfigurationRequest {
  /**
   * <p>Name of the network analyzer configuration.</p>
   * @public
   */
  ConfigurationName: string | undefined;
}

/**
 * @public
 */
export interface GetNetworkAnalyzerConfigurationResponse {
  /**
   * <p>Trace content for your wireless devices, gateways, and multicast groups.</p>
   * @public
   */
  TraceContent?: TraceContent;

  /**
   * <p>List of wireless device resources that have been added to the network analyzer
   *             configuration.</p>
   * @public
   */
  WirelessDevices?: string[];

  /**
   * <p>List of wireless gateway resources that have been added to the network analyzer
   *             configuration.</p>
   * @public
   */
  WirelessGateways?: string[];

  /**
   * <p>The description of the new resource.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The Amazon Resource Name of the new resource.</p>
   * @public
   */
  Arn?: string;

  /**
   * <p>Name of the network analyzer configuration.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>List of multicast group resources that have been added to the network analyzer
   *             configuration.</p>
   * @public
   */
  MulticastGroups?: string[];
}

/**
 * @public
 */
export interface GetPartnerAccountRequest {
  /**
   * <p>The partner account ID to disassociate from the AWS account.</p>
   * @public
   */
  PartnerAccountId: string | undefined;

  /**
   * <p>The partner type.</p>
   * @public
   */
  PartnerType: PartnerType | undefined;
}

/**
 * <p>Information about a Sidewalk account.</p>
 * @public
 */
export interface SidewalkAccountInfoWithFingerprint {
  /**
   * <p>The Sidewalk Amazon ID.</p>
   * @public
   */
  AmazonId?: string;

  /**
   * <p>The fingerprint of the Sidewalk application server private key.</p>
   * @public
   */
  Fingerprint?: string;

  /**
   * <p>The Amazon Resource Name of the resource.</p>
   * @public
   */
  Arn?: string;
}

/**
 * @public
 */
export interface GetPartnerAccountResponse {
  /**
   * <p>The Sidewalk account credentials.</p>
   * @public
   */
  Sidewalk?: SidewalkAccountInfoWithFingerprint;

  /**
   * <p>Whether the partner account is linked to the AWS account.</p>
   * @public
   */
  AccountLinked?: boolean;
}

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
 */
export interface GetPositionRequest {
  /**
   * <p>Resource identifier used to retrieve the position information.</p>
   * @public
   */
  ResourceIdentifier: string | undefined;

  /**
   * <p>Resource type of the resource for which position information is retrieved.</p>
   * @public
   */
  ResourceType: PositionResourceType | undefined;
}

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
 */
export interface GetPositionResponse {
  /**
   * <p>The position information of the resource.</p>
   * @public
   */
  Position?: number[];

  /**
   * <p>The accuracy of the estimated position in meters. An empty value indicates that no
   *             position data is available. A value of ‘0.0’ value indicates that position data is
   *             available. This data corresponds to the position information that you specified instead
   *             of the position computed by solver.</p>
   * @public
   */
  Accuracy?: Accuracy;

  /**
   * <p>The type of solver used to identify the position of the resource.</p>
   * @public
   */
  SolverType?: PositionSolverType;

  /**
   * <p>The vendor of the positioning solver.</p>
   * @public
   */
  SolverProvider?: PositionSolverProvider;

  /**
   * <p>The version of the positioning solver.</p>
   * @public
   */
  SolverVersion?: string;

  /**
   * <p>The timestamp at which the device's position was determined.</p>
   * @public
   */
  Timestamp?: string;
}

/**
 * @public
 */
export interface GetPositionConfigurationRequest {
  /**
   * <p>Resource identifier used in a position configuration.</p>
   * @public
   */
  ResourceIdentifier: string | undefined;

  /**
   * <p>Resource type of the resource for which position configuration is retrieved.</p>
   * @public
   */
  ResourceType: PositionResourceType | undefined;
}

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
 * <p>Details of the Semtech GNSS solver object.</p>
 * @public
 */
export interface SemtechGnssDetail {
  /**
   * <p>The vendor of the solver object.</p>
   * @public
   */
  Provider?: PositionSolverProvider;

  /**
   * <p>The type of positioning solver used.</p>
   * @public
   */
  Type?: PositionSolverType;

  /**
   * <p>The status indicating whether the solver is enabled.</p>
   * @public
   */
  Status?: PositionConfigurationStatus;

  /**
   * <p>Whether forward error correction is enabled.</p>
   * @public
   */
  Fec?: PositionConfigurationFec;
}

/**
 * <p>The wrapper for position solver details.</p>
 * @public
 */
export interface PositionSolverDetails {
  /**
   * <p>The Semtech GNSS solver object details.</p>
   * @public
   */
  SemtechGnss?: SemtechGnssDetail;
}

/**
 * @public
 */
export interface GetPositionConfigurationResponse {
  /**
   * <p>The wrapper for the solver configuration details object.</p>
   * @public
   */
  Solvers?: PositionSolverDetails;

  /**
   * <p>The position data destination that describes the AWS IoT rule that processes the
   *             device's position data for use by AWS IoT Core for LoRaWAN.</p>
   * @public
   */
  Destination?: string;
}

/**
 * <p>Global navigation satellite system (GNSS) object used for positioning.</p>
 * @public
 */
export interface Gnss {
  /**
   * <p>Payload that contains the GNSS scan result, or NAV message, in hexadecimal
   *             notation.</p>
   * @public
   */
  Payload: string | undefined;

  /**
   * <p>Optional parameter that gives an estimate of the time when the GNSS scan information
   *             is taken, in seconds GPS time (GPST). If capture time is not specified, the local server
   *             time is used.</p>
   * @public
   */
  CaptureTime?: number;

  /**
   * <p>Optional value that gives the capture time estimate accuracy, in seconds. If capture
   *             time accuracy is not specified, default value of 300 is used.</p>
   * @public
   */
  CaptureTimeAccuracy?: number;

  /**
   * <p>Optional assistance position information, specified using latitude and longitude
   *             values in degrees. The coordinates are inside the WGS84 reference frame.</p>
   * @public
   */
  AssistPosition?: number[];

  /**
   * <p>Optional assistance altitude, which is the altitude of the device at capture time,
   *             specified in meters above the WGS84 reference ellipsoid.</p>
   * @public
   */
  AssistAltitude?: number;

  /**
   * <p>Optional parameter that forces 2D solve, which modifies the positioning algorithm to a
   *             2D solution problem. When this parameter is specified, the assistance altitude should
   *             have an accuracy of at least 10 meters.</p>
   * @public
   */
  Use2DSolver?: boolean;
}

/**
 * <p>IP address used for resolving device location.</p>
 * @public
 */
export interface Ip {
  /**
   * <p>IP address information.</p>
   * @public
   */
  IpAddress: string | undefined;
}

/**
 * <p>Wi-Fi access point.</p>
 * @public
 */
export interface WiFiAccessPoint {
  /**
   * <p>Wi-Fi MAC Address.</p>
   * @public
   */
  MacAddress: string | undefined;

  /**
   * <p>Received signal strength (dBm) of the WLAN measurement data.</p>
   * @public
   */
  Rss: number | undefined;
}

/**
 * @public
 */
export interface GetPositionEstimateRequest {
  /**
   * <p>Retrieves an estimated device position by resolving WLAN measurement data. The
   *             position is resolved using HERE's Wi-Fi based solver.</p>
   * @public
   */
  WiFiAccessPoints?: WiFiAccessPoint[];

  /**
   * <p>Retrieves an estimated device position by resolving measurement data from cellular
   *             radio towers. The position is resolved using HERE's cellular-based solver.</p>
   * @public
   */
  CellTowers?: CellTowers;

  /**
   * <p>Retrieves an estimated device position by resolving the IP address information from
   *             the device. The position is resolved using MaxMind's IP-based solver.</p>
   * @public
   */
  Ip?: Ip;

  /**
   * <p>Retrieves an estimated device position by resolving the global navigation satellite
   *             system (GNSS) scan data. The position is resolved using the GNSS solver powered by LoRa
   *             Cloud.</p>
   * @public
   */
  Gnss?: Gnss;

  /**
   * <p>Optional information that specifies the time when the position information will be
   *             resolved. It uses the Unix timestamp format. If not specified, the time at which the
   *             request was received will be used.</p>
   * @public
   */
  Timestamp?: Date;
}

/**
 * @public
 */
export interface GetPositionEstimateResponse {
  /**
   * <p>The position information of the resource, displayed as a JSON payload. The payload is
   *             of type blob and uses the <a href="https://geojson.org/">GeoJSON</a> format,
   *             which a format that's used to encode geographic data structures. A sample payload
   *             contains the timestamp information, the WGS84 coordinates of the location, and the
   *             accuracy and confidence level. For more information and examples, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/location-resolve-console.html">Resolve device location (console)</a>.</p>
   * @public
   */
  GeoJsonPayload?: Uint8Array;
}

/**
 * @public
 */
export interface GetResourceEventConfigurationRequest {
  /**
   * <p>Resource identifier to opt in for event messaging.</p>
   * @public
   */
  Identifier: string | undefined;

  /**
   * <p>Identifier type of the particular resource identifier for event configuration.</p>
   * @public
   */
  IdentifierType: IdentifierType | undefined;

  /**
   * <p>Partner type of the resource if the identifier type is
   *             <code>PartnerAccountId</code>.</p>
   * @public
   */
  PartnerType?: EventNotificationPartnerType;
}

/**
 * @public
 */
export interface GetResourceEventConfigurationResponse {
  /**
   * <p>Event configuration for the device registration state event.</p>
   * @public
   */
  DeviceRegistrationState?: DeviceRegistrationStateEventConfiguration;

  /**
   * <p>Event configuration for the proximity event.</p>
   * @public
   */
  Proximity?: ProximityEventConfiguration;

  /**
   * <p>Event configuration for the join event.</p>
   * @public
   */
  Join?: JoinEventConfiguration;

  /**
   * <p>Event configuration for the connection status event.</p>
   * @public
   */
  ConnectionStatus?: ConnectionStatusEventConfiguration;

  /**
   * <p>Event configuration for the message delivery status event.</p>
   * @public
   */
  MessageDeliveryStatus?: MessageDeliveryStatusEventConfiguration;
}

/**
 * @public
 */
export interface GetResourceLogLevelRequest {
  /**
   * <p>The identifier of the resource. For a Wireless Device, it is the wireless device ID.
   *             For a wireless gateway, it is the wireless gateway ID.</p>
   * @public
   */
  ResourceIdentifier: string | undefined;

  /**
   * <p>The type of the resource, which can be <code>WirelessDevice</code> or
   *                 <code>WirelessGateway</code>.</p>
   * @public
   */
  ResourceType: string | undefined;
}

/**
 * @public
 */
export interface GetResourceLogLevelResponse {
  /**
   * <p>The log level for a log message. The log levels can be disabled, or set to
   *                 <code>ERROR</code> to display less verbose logs containing only error information,
   *             or to <code>INFO</code> for more detailed logs.</p>
   * @public
   */
  LogLevel?: LogLevel;
}

/**
 * @public
 */
export interface GetResourcePositionRequest {
  /**
   * <p>The identifier of the resource for which position information is retrieved. It can be
   *             the wireless device ID or the wireless gateway ID, depending on the resource
   *             type.</p>
   * @public
   */
  ResourceIdentifier: string | undefined;

  /**
   * <p>The type of resource for which position information is retrieved, which can be a
   *             wireless device or a wireless gateway.</p>
   * @public
   */
  ResourceType: PositionResourceType | undefined;
}

/**
 * @public
 */
export interface GetResourcePositionResponse {
  /**
   * <p>The position information of the resource, displayed as a JSON payload. The payload
   *             uses the GeoJSON format, which a format that's used to encode geographic data
   *             structures. For more information, see <a href="https://geojson.org/">GeoJSON</a>.</p>
   * @public
   */
  GeoJsonPayload?: Uint8Array;
}

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
 */
export interface GetServiceEndpointRequest {
  /**
   * <p>The service type for which to get endpoint information about. Can be <code>CUPS</code>
   *             for the Configuration and Update Server endpoint, or <code>LNS</code> for the LoRaWAN
   *             Network Server endpoint or <code>CLAIM</code> for the global endpoint.</p>
   * @public
   */
  ServiceType?: WirelessGatewayServiceType;
}

/**
 * @public
 */
export interface GetServiceEndpointResponse {
  /**
   * <p>The endpoint's service type.</p>
   * @public
   */
  ServiceType?: WirelessGatewayServiceType;

  /**
   * <p>The service endpoint value.</p>
   * @public
   */
  ServiceEndpoint?: string;

  /**
   * <p>The Root CA of the server trust certificate.</p>
   * @public
   */
  ServerTrust?: string;
}

/**
 * @public
 */
export interface GetServiceProfileRequest {
  /**
   * <p>The ID of the resource to get.</p>
   * @public
   */
  Id: string | undefined;
}

/**
 * <p>LoRaWANGetServiceProfileInfo object.</p>
 * @public
 */
export interface LoRaWANGetServiceProfileInfo {
  /**
   * <p>The ULRate value.</p>
   * @public
   */
  UlRate?: number;

  /**
   * <p>The ULBucketSize value.</p>
   * @public
   */
  UlBucketSize?: number;

  /**
   * <p>The ULRatePolicy value.</p>
   * @public
   */
  UlRatePolicy?: string;

  /**
   * <p>The DLRate value.</p>
   * @public
   */
  DlRate?: number;

  /**
   * <p>The DLBucketSize value.</p>
   * @public
   */
  DlBucketSize?: number;

  /**
   * <p>The DLRatePolicy value.</p>
   * @public
   */
  DlRatePolicy?: string;

  /**
   * <p>The AddGWMetaData value.</p>
   * @public
   */
  AddGwMetadata?: boolean;

  /**
   * <p>The DevStatusReqFreq value.</p>
   * @public
   */
  DevStatusReqFreq?: number;

  /**
   * <p>The ReportDevStatusBattery value.</p>
   * @public
   */
  ReportDevStatusBattery?: boolean;

  /**
   * <p>The ReportDevStatusMargin value.</p>
   * @public
   */
  ReportDevStatusMargin?: boolean;

  /**
   * <p>The DRMin value.</p>
   * @public
   */
  DrMin?: number;

  /**
   * <p>The DRMax value.</p>
   * @public
   */
  DrMax?: number;

  /**
   * <p>The ChannelMask value.</p>
   * @public
   */
  ChannelMask?: string;

  /**
   * <p>The PRAllowed value that describes whether passive roaming is allowed.</p>
   * @public
   */
  PrAllowed?: boolean;

  /**
   * <p>The HRAllowed value that describes whether handover roaming is allowed.</p>
   * @public
   */
  HrAllowed?: boolean;

  /**
   * <p>The RAAllowed value that describes whether roaming activation is allowed.</p>
   * @public
   */
  RaAllowed?: boolean;

  /**
   * <p>The NwkGeoLoc value.</p>
   * @public
   */
  NwkGeoLoc?: boolean;

  /**
   * <p>The TargetPER value.</p>
   * @public
   */
  TargetPer?: number;

  /**
   * <p>The MinGwDiversity value.</p>
   * @public
   */
  MinGwDiversity?: number;
}

/**
 * @public
 */
export interface GetServiceProfileResponse {
  /**
   * <p>The Amazon Resource Name of the resource.</p>
   * @public
   */
  Arn?: string;

  /**
   * <p>The name of the resource.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The ID of the service profile.</p>
   * @public
   */
  Id?: string;

  /**
   * <p>Information about the service profile.</p>
   * @public
   */
  LoRaWAN?: LoRaWANGetServiceProfileInfo;
}

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
 */
export interface GetWirelessDeviceRequest {
  /**
   * <p>The identifier of the wireless device to get.</p>
   * @public
   */
  Identifier: string | undefined;

  /**
   * <p>The type of identifier used in <code>identifier</code>.</p>
   * @public
   */
  IdentifierType: WirelessDeviceIdType | undefined;
}

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
 * <p>Sidewalk device object.</p>
 * @public
 */
export interface SidewalkDevice {
  /**
   * <p>The Sidewalk Amazon ID.</p>
   * @public
   */
  AmazonId?: string;

  /**
   * <p>The sidewalk device identification.</p>
   * @public
   */
  SidewalkId?: string;

  /**
   * <p>The Sidewalk manufacturing series number.</p>
   * @public
   */
  SidewalkManufacturingSn?: string;

  /**
   * <p>The sidewalk device certificates for Ed25519 and P256r1.</p>
   * @public
   */
  DeviceCertificates?: CertificateList[];

  /**
   * <p>The Sidewalk device private keys that will be used for onboarding the device.</p>
   * @public
   */
  PrivateKeys?: CertificateList[];

  /**
   * <p>The ID of the Sidewalk device profile.</p>
   * @public
   */
  DeviceProfileId?: string;

  /**
   * <p>The ID of the Sidewalk device profile.</p>
   * @public
   */
  CertificateId?: string;

  /**
   * <p>The Sidewalk device status, such as provisioned or registered.</p>
   * @public
   */
  Status?: WirelessDeviceSidewalkStatus;
}

/**
 * @public
 */
export interface GetWirelessDeviceResponse {
  /**
   * <p>The wireless device type.</p>
   * @public
   */
  Type?: WirelessDeviceType;

  /**
   * <p>The name of the resource.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The description of the resource.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The name of the destination to which the device is assigned.</p>
   * @public
   */
  DestinationName?: string;

  /**
   * <p>The ID of the wireless device.</p>
   * @public
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name of the resource.</p>
   * @public
   */
  Arn?: string;

  /**
   * <p>The name of the thing associated with the wireless device. The value is empty if a
   *             thing isn't associated with the device.</p>
   * @public
   */
  ThingName?: string;

  /**
   * <p>The ARN of the thing associated with the wireless device.</p>
   * @public
   */
  ThingArn?: string;

  /**
   * <p>Information about the wireless device.</p>
   * @public
   */
  LoRaWAN?: LoRaWANDevice;

  /**
   * <p>Sidewalk device object.</p>
   * @public
   */
  Sidewalk?: SidewalkDevice;

  /**
   * <p>FPort values for the GNSS, stream, and ClockSync functions of the positioning
   *             information.</p>
   * @public
   */
  Positioning?: PositioningConfigStatus;
}

/**
 * @public
 */
export interface GetWirelessDeviceImportTaskRequest {
  /**
   * <p>The identifier of the import task for which information is requested.</p>
   * @public
   */
  Id: string | undefined;
}

/**
 * <p>Sidewalk-related information for devices in an import task that are being
 *             onboarded.</p>
 * @public
 */
export interface SidewalkGetStartImportInfo {
  /**
   * <p>List of Sidewalk devices that are added to the import task.</p>
   * @public
   */
  DeviceCreationFileList?: string[];

  /**
   * <p>The IAM role that allows AWS IoT Wireless to access the CSV file in the S3
   *             bucket.</p>
   * @public
   */
  Role?: string;
}

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
 */
export interface GetWirelessDeviceImportTaskResponse {
  /**
   * <p>The identifier of the import task for which information is retrieved.</p>
   * @public
   */
  Id?: string;

  /**
   * <p>The ARN (Amazon Resource Name) of the import task.</p>
   * @public
   */
  Arn?: string;

  /**
   * <p>The name of the destination that's assigned to the wireless devices in the import
   *             task.</p>
   * @public
   */
  DestinationName?: string;

  /**
   * <p>The Sidewalk-related information about an import task.</p>
   * @public
   */
  Sidewalk?: SidewalkGetStartImportInfo;

  /**
   * <p>The time at which the import task was created.</p>
   * @public
   */
  CreationTime?: Date;

  /**
   * <p>The import task status.</p>
   * @public
   */
  Status?: ImportTaskStatus;

  /**
   * <p>The reason for the provided status information, such as a validation error that causes
   *             the import task to fail.</p>
   * @public
   */
  StatusReason?: string;

  /**
   * <p>The number of devices in the import task that are waiting for the control log to start
   *             processing.</p>
   * @public
   */
  InitializedImportedDeviceCount?: number;

  /**
   * <p>The number of devices in the import task that are waiting in the import task queue to
   *             be onboarded.</p>
   * @public
   */
  PendingImportedDeviceCount?: number;

  /**
   * <p>The number of devices in the import task that have been onboarded to the import
   *             task.</p>
   * @public
   */
  OnboardedImportedDeviceCount?: number;

  /**
   * <p>The number of devices in the import task that failed to onboard to the import
   *             task.</p>
   * @public
   */
  FailedImportedDeviceCount?: number;
}

/**
 * @public
 */
export interface GetWirelessDeviceStatisticsRequest {
  /**
   * <p>The ID of the wireless device for which to get the data.</p>
   * @public
   */
  WirelessDeviceId: string | undefined;
}

/**
 * <p>LoRaWAN gateway metatdata.</p>
 * @public
 */
export interface LoRaWANGatewayMetadata {
  /**
   * <p>The gateway's EUI value.</p>
   * @public
   */
  GatewayEui?: string;

  /**
   * <p>The SNR value.</p>
   * @public
   */
  Snr?: number;

  /**
   * <p>The RSSI value.</p>
   * @public
   */
  Rssi?: number;
}

/**
 * <p>LoRaWAN public gateway metadata.</p>
 * @public
 */
export interface LoRaWANPublicGatewayMetadata {
  /**
   * <p>The ID of the LoRaWAN public network provider.</p>
   * @public
   */
  ProviderNetId?: string;

  /**
   * <p>The ID of the gateways that are operated by the network provider.</p>
   * @public
   */
  Id?: string;

  /**
   * <p>The RSSI (received signal strength indicator) value.</p>
   * @public
   */
  Rssi?: number;

  /**
   * <p>The SNR (signal to noise ratio) value.</p>
   * @public
   */
  Snr?: number;

  /**
   * <p>The frequency band (RFRegion) value.</p>
   * @public
   */
  RfRegion?: string;

  /**
   * <p>Boolean that indicates whether downlink is allowed using the network.</p>
   * @public
   */
  DlAllowed?: boolean;
}

/**
 * <p>LoRaWAN device metatdata.</p>
 * @public
 */
export interface LoRaWANDeviceMetadata {
  /**
   * <p>The DevEUI value.</p>
   * @public
   */
  DevEui?: string;

  /**
   * <p>The FPort value.</p>
   * @public
   */
  FPort?: number;

  /**
   * <p>The DataRate value.</p>
   * @public
   */
  DataRate?: number;

  /**
   * <p>The device's channel frequency in Hz.</p>
   * @public
   */
  Frequency?: number;

  /**
   * <p>The date and time of the metadata.</p>
   * @public
   */
  Timestamp?: string;

  /**
   * <p>Information about the gateways accessed by the device.</p>
   * @public
   */
  Gateways?: LoRaWANGatewayMetadata[];

  /**
   * <p>Information about the LoRaWAN public network accessed by the device.</p>
   * @public
   */
  PublicGateways?: LoRaWANPublicGatewayMetadata[];
}

/**
 * <p>MetaData for Sidewalk device.</p>
 * @public
 */
export interface SidewalkDeviceMetadata {
  /**
   * <p>The RSSI value.</p>
   * @public
   */
  Rssi?: number;

  /**
   * <p>Sidewalk device battery level.</p>
   * @public
   */
  BatteryLevel?: BatteryLevel;

  /**
   * <p>Sidewalk device status notification.</p>
   * @public
   */
  Event?: Event;

  /**
   * <p>Device state defines the device status of sidewalk device.</p>
   * @public
   */
  DeviceState?: DeviceState;
}

/**
 * @public
 */
export interface GetWirelessDeviceStatisticsResponse {
  /**
   * <p>The ID of the wireless device.</p>
   * @public
   */
  WirelessDeviceId?: string;

  /**
   * <p>The date and time when the most recent uplink was received.</p>
   *          <note>
   *             <p>This value is only valid for 3 months.</p>
   *          </note>
   * @public
   */
  LastUplinkReceivedAt?: string;

  /**
   * <p>Information about the wireless device's operations.</p>
   * @public
   */
  LoRaWAN?: LoRaWANDeviceMetadata;

  /**
   * <p>MetaData for Sidewalk device.</p>
   * @public
   */
  Sidewalk?: SidewalkDeviceMetadata;
}

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
 */
export interface GetWirelessGatewayRequest {
  /**
   * <p>The identifier of the wireless gateway to get.</p>
   * @public
   */
  Identifier: string | undefined;

  /**
   * <p>The type of identifier used in <code>identifier</code>.</p>
   * @public
   */
  IdentifierType: WirelessGatewayIdType | undefined;
}

/**
 * @public
 */
export interface GetWirelessGatewayResponse {
  /**
   * <p>The name of the resource.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The ID of the wireless gateway.</p>
   * @public
   */
  Id?: string;

  /**
   * <p>The description of the resource.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>Information about the wireless gateway.</p>
   * @public
   */
  LoRaWAN?: LoRaWANGateway;

  /**
   * <p>The Amazon Resource Name of the resource.</p>
   * @public
   */
  Arn?: string;

  /**
   * <p>The name of the thing associated with the wireless gateway. The value is empty if a
   *             thing isn't associated with the gateway.</p>
   * @public
   */
  ThingName?: string;

  /**
   * <p>The ARN of the thing associated with the wireless gateway.</p>
   * @public
   */
  ThingArn?: string;
}

/**
 * @public
 */
export interface GetWirelessGatewayCertificateRequest {
  /**
   * <p>The ID of the resource to get.</p>
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface GetWirelessGatewayCertificateResponse {
  /**
   * <p>The ID of the certificate associated with the wireless gateway.</p>
   * @public
   */
  IotCertificateId?: string;

  /**
   * <p>The ID of the certificate that is associated with the wireless gateway and used for
   *             the LoRaWANNetworkServer endpoint.</p>
   * @public
   */
  LoRaWANNetworkServerCertificateId?: string;
}

/**
 * @public
 */
export interface GetWirelessGatewayFirmwareInformationRequest {
  /**
   * <p>The ID of the resource to get.</p>
   * @public
   */
  Id: string | undefined;
}

/**
 * <p>LoRaWANGatewayCurrentVersion object.</p>
 * @public
 */
export interface LoRaWANGatewayCurrentVersion {
  /**
   * <p>The version of the gateways that should receive the update.</p>
   * @public
   */
  CurrentVersion?: LoRaWANGatewayVersion;
}

/**
 * @public
 */
export interface GetWirelessGatewayFirmwareInformationResponse {
  /**
   * <p>Information about the wireless gateway's firmware.</p>
   * @public
   */
  LoRaWAN?: LoRaWANGatewayCurrentVersion;
}

/**
 * @public
 */
export interface GetWirelessGatewayStatisticsRequest {
  /**
   * <p>The ID of the wireless gateway for which to get the data.</p>
   * @public
   */
  WirelessGatewayId: string | undefined;
}

/**
 * @public
 */
export interface GetWirelessGatewayStatisticsResponse {
  /**
   * <p>The ID of the wireless gateway.</p>
   * @public
   */
  WirelessGatewayId?: string;

  /**
   * <p>The date and time when the most recent uplink was received.</p>
   *          <note>
   *             <p>This value is only valid for 3 months.</p>
   *          </note>
   * @public
   */
  LastUplinkReceivedAt?: string;

  /**
   * <p>The connection status of the wireless gateway.</p>
   * @public
   */
  ConnectionStatus?: ConnectionStatus;
}

/**
 * @public
 */
export interface GetWirelessGatewayTaskRequest {
  /**
   * <p>The ID of the resource to get.</p>
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface GetWirelessGatewayTaskResponse {
  /**
   * <p>The ID of the wireless gateway.</p>
   * @public
   */
  WirelessGatewayId?: string;

  /**
   * <p>The ID of the WirelessGatewayTask.</p>
   * @public
   */
  WirelessGatewayTaskDefinitionId?: string;

  /**
   * <p>The date and time when the most recent uplink was received.</p>
   *          <note>
   *             <p>This value is only valid for 3 months.</p>
   *          </note>
   * @public
   */
  LastUplinkReceivedAt?: string;

  /**
   * <p>The date and time when the task was created.</p>
   * @public
   */
  TaskCreatedAt?: string;

  /**
   * <p>The status of the request.</p>
   * @public
   */
  Status?: WirelessGatewayTaskStatus;
}

/**
 * @public
 */
export interface GetWirelessGatewayTaskDefinitionRequest {
  /**
   * <p>The ID of the resource to get.</p>
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface GetWirelessGatewayTaskDefinitionResponse {
  /**
   * <p>Whether to automatically create tasks using this task definition for all gateways with
   *             the specified current version. If <code>false</code>, the task must me created by
   *             calling <code>CreateWirelessGatewayTask</code>.</p>
   * @public
   */
  AutoCreateTasks?: boolean;

  /**
   * <p>The name of the resource.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>Information about the gateways to update.</p>
   * @public
   */
  Update?: UpdateWirelessGatewayTaskCreate;

  /**
   * <p>The Amazon Resource Name of the resource.</p>
   * @public
   */
  Arn?: string;
}

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
 * <p>Information about a Sidewalk device that has been added to an import task.</p>
 * @public
 */
export interface ImportedSidewalkDevice {
  /**
   * <p>The Sidewalk manufacturing serial number (SMSN) of the Sidewalk device.</p>
   * @public
   */
  SidewalkManufacturingSn?: string;

  /**
   * <p>The onboarding status of the Sidewalk device in the import task.</p>
   * @public
   */
  OnboardingStatus?: OnboardStatus;

  /**
   * <p>The reason for the onboarding status information for the Sidewalk device.</p>
   * @public
   */
  OnboardingStatusReason?: string;

  /**
   * <p>The time at which the status information was last updated.</p>
   * @public
   */
  LastUpdateTime?: Date;
}

/**
 * <p>Information about a wireless device that has been added to an import task.</p>
 * @public
 */
export interface ImportedWirelessDevice {
  /**
   * <p>The Sidewalk-related information about a device that has been added to an import
   *             task.</p>
   * @public
   */
  Sidewalk?: ImportedSidewalkDevice;
}

/**
 * @public
 */
export interface ListDestinationsRequest {
  /**
   * <p>The maximum number of results to return in this operation.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>To retrieve the next set of results, the <code>nextToken</code> value from a previous
   *             response; otherwise <b>null</b> to receive the first set of
   *             results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListDestinationsResponse {
  /**
   * <p>The token to use to get the next set of results, or <b>null</b> if there are no additional results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The list of destinations.</p>
   * @public
   */
  DestinationList?: Destinations[];
}

/**
 * @public
 */
export interface ListDeviceProfilesRequest {
  /**
   * <p>To retrieve the next set of results, the <code>nextToken</code> value from a previous
   *             response; otherwise <b>null</b> to receive the first set of
   *             results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in this operation.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>A filter to list only device profiles that use this type, which can be
   *                 <code>LoRaWAN</code> or <code>Sidewalk</code>.</p>
   * @public
   */
  DeviceProfileType?: DeviceProfileType;
}

/**
 * @public
 */
export interface ListDeviceProfilesResponse {
  /**
   * <p>The token to use to get the next set of results, or <b>null</b> if there are no additional results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The list of device profiles.</p>
   * @public
   */
  DeviceProfileList?: DeviceProfile[];
}

/**
 * @public
 */
export interface ListDevicesForWirelessDeviceImportTaskRequest {
  /**
   * <p>The identifier of the import task for which wireless devices are listed.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The maximum number of results to return in this operation.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>To retrieve the next set of results, the <code>nextToken</code> value from a previous
   *             response; otherwise <code>null</code> to receive the first set of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The status of the devices in the import task.</p>
   * @public
   */
  Status?: OnboardStatus;
}

/**
 * @public
 */
export interface ListDevicesForWirelessDeviceImportTaskResponse {
  /**
   * <p>The token to use to get the next set of results, or <code>null</code> if there are no
   *             additional results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The name of the Sidewalk destination that describes the IoT rule to route messages
   *             received from devices in an import task that are onboarded to AWS IoT Wireless.</p>
   * @public
   */
  DestinationName?: string;

  /**
   * <p>List of wireless devices in an import task and their onboarding status.</p>
   * @public
   */
  ImportedWirelessDeviceList?: ImportedWirelessDevice[];
}

/**
 * @public
 */
export interface ListEventConfigurationsRequest {
  /**
   * <p>Resource type to filter event configurations.</p>
   * @public
   */
  ResourceType: EventNotificationResourceType | undefined;

  /**
   * <p>The maximum number of results to return in this operation.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>To retrieve the next set of results, the <code>nextToken</code> value from a previous
   *             response; otherwise <b>null</b> to receive the first set of
   *             results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListEventConfigurationsResponse {
  /**
   * <p>To retrieve the next set of results, the <code>nextToken</code> value from a previous
   *             response; otherwise <b>null</b> to receive the first set of
   *             results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>Event configurations of all events for a single resource.</p>
   * @public
   */
  EventConfigurationsList?: EventConfigurationItem[];
}

/**
 * @public
 */
export interface ListFuotaTasksRequest {
  /**
   * <p>To retrieve the next set of results, the <code>nextToken</code> value from a previous
   *             response; otherwise <b>null</b> to receive the first set of
   *             results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in this operation.</p>
   * @public
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListFuotaTasksResponse {
  /**
   * <p>To retrieve the next set of results, the <code>nextToken</code> value from a previous
   *             response; otherwise <b>null</b> to receive the first set of
   *             results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>Lists the FUOTA tasks registered to your AWS account.</p>
   * @public
   */
  FuotaTaskList?: FuotaTask[];
}

/**
 * @public
 */
export interface ListMulticastGroupsRequest {
  /**
   * <p>To retrieve the next set of results, the <code>nextToken</code> value from a previous
   *             response; otherwise <b>null</b> to receive the first set of
   *             results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in this operation.</p>
   * @public
   */
  MaxResults?: number;
}

/**
 * <p>A multicast group.</p>
 * @public
 */
export interface MulticastGroup {
  /**
   * <p>The ID of the multicast group.</p>
   * @public
   */
  Id?: string;

  /**
   * <p>The arn of the multicast group.</p>
   * @public
   */
  Arn?: string;

  /**
   * <p>The name of the multicast group.</p>
   * @public
   */
  Name?: string;
}

/**
 * @public
 */
export interface ListMulticastGroupsResponse {
  /**
   * <p>To retrieve the next set of results, the <code>nextToken</code> value from a previous
   *             response; otherwise <b>null</b> to receive the first set of
   *             results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>List of multicast groups.</p>
   * @public
   */
  MulticastGroupList?: MulticastGroup[];
}

/**
 * @public
 */
export interface ListMulticastGroupsByFuotaTaskRequest {
  /**
   * <p>The ID of a FUOTA task.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>To retrieve the next set of results, the <code>nextToken</code> value from a previous
   *             response; otherwise <b>null</b> to receive the first set of
   *             results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in this operation.</p>
   * @public
   */
  MaxResults?: number;
}

/**
 * <p>A multicast group that is associated with a FUOTA task.</p>
 * @public
 */
export interface MulticastGroupByFuotaTask {
  /**
   * <p>The ID of the multicast group.</p>
   * @public
   */
  Id?: string;
}

/**
 * @public
 */
export interface ListMulticastGroupsByFuotaTaskResponse {
  /**
   * <p>To retrieve the next set of results, the <code>nextToken</code> value from a previous
   *             response; otherwise <b>null</b> to receive the first set of
   *             results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>List of multicast groups associated with a FUOTA task.</p>
   * @public
   */
  MulticastGroupList?: MulticastGroupByFuotaTask[];
}

/**
 * @public
 */
export interface ListNetworkAnalyzerConfigurationsRequest {
  /**
   * <p>The maximum number of results to return in this operation.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>To retrieve the next set of results, the <code>nextToken</code> value from a previous
   *             response; otherwise <b>null</b> to receive the first set of
   *             results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * <p>Network analyzer configurations.</p>
 * @public
 */
export interface NetworkAnalyzerConfigurations {
  /**
   * <p>The Amazon Resource Name of the new resource.</p>
   * @public
   */
  Arn?: string;

  /**
   * <p>Name of the network analyzer configuration.</p>
   * @public
   */
  Name?: string;
}

/**
 * @public
 */
export interface ListNetworkAnalyzerConfigurationsResponse {
  /**
   * <p>The token to use to get the next set of results, or <b>null</b> if there are no additional results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The list of network analyzer configurations.</p>
   * @public
   */
  NetworkAnalyzerConfigurationList?: NetworkAnalyzerConfigurations[];
}

/**
 * @public
 */
export interface ListPartnerAccountsRequest {
  /**
   * <p>To retrieve the next set of results, the <code>nextToken</code> value from a previous
   *             response; otherwise <b>null</b> to receive the first set of
   *             results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in this operation.</p>
   * @public
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListPartnerAccountsResponse {
  /**
   * <p>The token to use to get the next set of results, or <b>null</b> if there are no additional results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The Sidewalk account credentials.</p>
   * @public
   */
  Sidewalk?: SidewalkAccountInfoWithFingerprint[];
}

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
export const SidewalkGetDeviceProfileFilterSensitiveLog = (obj: SidewalkGetDeviceProfile): any => ({
  ...obj,
  ...(obj.ApplicationServerPublicKey && { ApplicationServerPublicKey: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetDeviceProfileResponseFilterSensitiveLog = (obj: GetDeviceProfileResponse): any => ({
  ...obj,
  ...(obj.Sidewalk && { Sidewalk: SidewalkGetDeviceProfileFilterSensitiveLog(obj.Sidewalk) }),
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
export const ListPartnerAccountsResponseFilterSensitiveLog = (obj: ListPartnerAccountsResponse): any => ({
  ...obj,
  ...(obj.Sidewalk && {
    Sidewalk: obj.Sidewalk.map((item) => SidewalkAccountInfoWithFingerprintFilterSensitiveLog(item)),
  }),
});
