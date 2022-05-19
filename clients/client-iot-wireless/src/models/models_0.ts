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

export namespace SessionKeysAbpV1_0_x {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SessionKeysAbpV1_0_x): any => ({
    ...obj,
  });
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

export namespace AbpV1_0_x {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AbpV1_0_x): any => ({
    ...obj,
  });
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

export namespace SessionKeysAbpV1_1 {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SessionKeysAbpV1_1): any => ({
    ...obj,
  });
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

export namespace AbpV1_1 {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AbpV1_1): any => ({
    ...obj,
  });
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

export namespace SidewalkAccountInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SidewalkAccountInfo): any => ({
    ...obj,
    ...(obj.AppServerPrivateKey && { AppServerPrivateKey: SENSITIVE_STRING }),
  });
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

export namespace Tag {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj,
  });
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

export namespace AssociateAwsAccountWithPartnerAccountRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateAwsAccountWithPartnerAccountRequest): any => ({
    ...obj,
    ...(obj.Sidewalk && { Sidewalk: SidewalkAccountInfo.filterSensitiveLog(obj.Sidewalk) }),
  });
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

export namespace AssociateAwsAccountWithPartnerAccountResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateAwsAccountWithPartnerAccountResponse): any => ({
    ...obj,
    ...(obj.Sidewalk && { Sidewalk: SidewalkAccountInfo.filterSensitiveLog(obj.Sidewalk) }),
  });
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

export namespace AssociateMulticastGroupWithFuotaTaskRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateMulticastGroupWithFuotaTaskRequest): any => ({
    ...obj,
  });
}

export interface AssociateMulticastGroupWithFuotaTaskResponse {}

export namespace AssociateMulticastGroupWithFuotaTaskResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateMulticastGroupWithFuotaTaskResponse): any => ({
    ...obj,
  });
}

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

export namespace AssociateWirelessDeviceWithFuotaTaskRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateWirelessDeviceWithFuotaTaskRequest): any => ({
    ...obj,
  });
}

export interface AssociateWirelessDeviceWithFuotaTaskResponse {}

export namespace AssociateWirelessDeviceWithFuotaTaskResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateWirelessDeviceWithFuotaTaskResponse): any => ({
    ...obj,
  });
}

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

export namespace AssociateWirelessDeviceWithMulticastGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateWirelessDeviceWithMulticastGroupRequest): any => ({
    ...obj,
  });
}

export interface AssociateWirelessDeviceWithMulticastGroupResponse {}

export namespace AssociateWirelessDeviceWithMulticastGroupResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateWirelessDeviceWithMulticastGroupResponse): any => ({
    ...obj,
  });
}

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

export namespace AssociateWirelessDeviceWithThingRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateWirelessDeviceWithThingRequest): any => ({
    ...obj,
  });
}

export interface AssociateWirelessDeviceWithThingResponse {}

export namespace AssociateWirelessDeviceWithThingResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateWirelessDeviceWithThingResponse): any => ({
    ...obj,
  });
}

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

export namespace AssociateWirelessGatewayWithCertificateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateWirelessGatewayWithCertificateRequest): any => ({
    ...obj,
  });
}

export interface AssociateWirelessGatewayWithCertificateResponse {
  /**
   * <p>The ID of the certificate associated with the wireless gateway.</p>
   */
  IotCertificateId?: string;
}

export namespace AssociateWirelessGatewayWithCertificateResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateWirelessGatewayWithCertificateResponse): any => ({
    ...obj,
  });
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

export namespace AssociateWirelessGatewayWithThingRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateWirelessGatewayWithThingRequest): any => ({
    ...obj,
  });
}

export interface AssociateWirelessGatewayWithThingResponse {}

export namespace AssociateWirelessGatewayWithThingResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateWirelessGatewayWithThingResponse): any => ({
    ...obj,
  });
}

export enum BatteryLevel {
  CRITICAL = "critical",
  LOW = "low",
  NORMAL = "normal",
}

export interface CancelMulticastGroupSessionRequest {
  /**
   * <p>The ID of the multicast group.</p>
   */
  Id: string | undefined;
}

export namespace CancelMulticastGroupSessionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelMulticastGroupSessionRequest): any => ({
    ...obj,
  });
}

export interface CancelMulticastGroupSessionResponse {}

export namespace CancelMulticastGroupSessionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelMulticastGroupSessionResponse): any => ({
    ...obj,
  });
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

export namespace CertificateList {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CertificateList): any => ({
    ...obj,
  });
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
   * <p>Enum to denote whether the gateway eui connection status event topic is enabled or disabled.</p>
   */
  GatewayEuiEventTopic?: EventNotificationTopicStatus | string;
}

export namespace LoRaWANConnectionStatusEventNotificationConfigurations {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LoRaWANConnectionStatusEventNotificationConfigurations): any => ({
    ...obj,
  });
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
   * <p>Enum to denote whether the wireless gateway id connection status event topic is enabled or disabled
   *             .</p>
   */
  WirelessGatewayIdEventTopic?: EventNotificationTopicStatus | string;
}

export namespace ConnectionStatusEventConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConnectionStatusEventConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Object for LoRaWAN connection status resource type event configuration.</p>
 */
export interface LoRaWANConnectionStatusResourceTypeEventConfiguration {
  /**
   * <p>Enum to denote whether the wireless gateway connection status event topic is enabled or disabled.</p>
   */
  WirelessGatewayEventTopic?: EventNotificationTopicStatus | string;
}

export namespace LoRaWANConnectionStatusResourceTypeEventConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LoRaWANConnectionStatusResourceTypeEventConfiguration): any => ({
    ...obj,
  });
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

export namespace ConnectionStatusResourceTypeEventConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConnectionStatusResourceTypeEventConfiguration): any => ({
    ...obj,
  });
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

export namespace CreateDestinationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDestinationRequest): any => ({
    ...obj,
  });
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

export namespace CreateDestinationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDestinationResponse): any => ({
    ...obj,
  });
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

export namespace LoRaWANDeviceProfile {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LoRaWANDeviceProfile): any => ({
    ...obj,
  });
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

export namespace CreateDeviceProfileRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDeviceProfileRequest): any => ({
    ...obj,
  });
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

export namespace CreateDeviceProfileResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDeviceProfileResponse): any => ({
    ...obj,
  });
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

export namespace LoRaWANFuotaTask {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LoRaWANFuotaTask): any => ({
    ...obj,
  });
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

export namespace CreateFuotaTaskRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateFuotaTaskRequest): any => ({
    ...obj,
  });
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

export namespace CreateFuotaTaskResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateFuotaTaskResponse): any => ({
    ...obj,
  });
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

export namespace LoRaWANMulticast {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LoRaWANMulticast): any => ({
    ...obj,
  });
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

export namespace CreateMulticastGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateMulticastGroupRequest): any => ({
    ...obj,
  });
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

export namespace CreateMulticastGroupResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateMulticastGroupResponse): any => ({
    ...obj,
  });
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
   * <p>FrameInfo of your wireless device resources for the trace content. Use FrameInfo to debug
   *             the communication between your LoRaWAN end devices and the network server.</p>
   */
  WirelessDeviceFrameInfo?: WirelessDeviceFrameInfo | string;

  /**
   * <p>The log level for a log message. The log levels can be disabled, or set to <code>ERROR</code> to display
   *             less verbose logs containing only error information, or to <code>INFO</code> for more detailed logs.</p>
   */
  LogLevel?: LogLevel | string;
}

export namespace TraceContent {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TraceContent): any => ({
    ...obj,
  });
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

export namespace CreateNetworkAnalyzerConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateNetworkAnalyzerConfigurationRequest): any => ({
    ...obj,
  });
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

export namespace CreateNetworkAnalyzerConfigurationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateNetworkAnalyzerConfigurationResponse): any => ({
    ...obj,
  });
}

/**
 * <p>LoRaWANServiceProfile object.</p>
 */
export interface LoRaWANServiceProfile {
  /**
   * <p>The AddGWMetaData value.</p>
   */
  AddGwMetadata?: boolean;
}

export namespace LoRaWANServiceProfile {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LoRaWANServiceProfile): any => ({
    ...obj,
  });
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

export namespace CreateServiceProfileRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateServiceProfileRequest): any => ({
    ...obj,
  });
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

export namespace CreateServiceProfileResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateServiceProfileResponse): any => ({
    ...obj,
  });
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
}

export namespace FPorts {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FPorts): any => ({
    ...obj,
  });
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

export namespace OtaaV1_0_x {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OtaaV1_0_x): any => ({
    ...obj,
  });
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

export namespace OtaaV1_1 {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OtaaV1_1): any => ({
    ...obj,
  });
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

export namespace LoRaWANDevice {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LoRaWANDevice): any => ({
    ...obj,
  });
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
}

export namespace CreateWirelessDeviceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateWirelessDeviceRequest): any => ({
    ...obj,
  });
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

export namespace CreateWirelessDeviceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateWirelessDeviceResponse): any => ({
    ...obj,
  });
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
}

export namespace LoRaWANGateway {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LoRaWANGateway): any => ({
    ...obj,
  });
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

export namespace CreateWirelessGatewayRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateWirelessGatewayRequest): any => ({
    ...obj,
  });
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

export namespace CreateWirelessGatewayResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateWirelessGatewayResponse): any => ({
    ...obj,
  });
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

export namespace CreateWirelessGatewayTaskRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateWirelessGatewayTaskRequest): any => ({
    ...obj,
  });
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

export namespace CreateWirelessGatewayTaskResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateWirelessGatewayTaskResponse): any => ({
    ...obj,
  });
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

export namespace LoRaWANGatewayVersion {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LoRaWANGatewayVersion): any => ({
    ...obj,
  });
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

export namespace LoRaWANUpdateGatewayTaskCreate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LoRaWANUpdateGatewayTaskCreate): any => ({
    ...obj,
  });
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

export namespace UpdateWirelessGatewayTaskCreate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateWirelessGatewayTaskCreate): any => ({
    ...obj,
  });
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

export namespace CreateWirelessGatewayTaskDefinitionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateWirelessGatewayTaskDefinitionRequest): any => ({
    ...obj,
  });
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

export namespace CreateWirelessGatewayTaskDefinitionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateWirelessGatewayTaskDefinitionResponse): any => ({
    ...obj,
  });
}

export interface DeleteDestinationRequest {
  /**
   * <p>The name of the resource to delete.</p>
   */
  Name: string | undefined;
}

export namespace DeleteDestinationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDestinationRequest): any => ({
    ...obj,
  });
}

export interface DeleteDestinationResponse {}

export namespace DeleteDestinationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDestinationResponse): any => ({
    ...obj,
  });
}

export interface DeleteDeviceProfileRequest {
  /**
   * <p>The ID of the resource to delete.</p>
   */
  Id: string | undefined;
}

export namespace DeleteDeviceProfileRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDeviceProfileRequest): any => ({
    ...obj,
  });
}

export interface DeleteDeviceProfileResponse {}

export namespace DeleteDeviceProfileResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDeviceProfileResponse): any => ({
    ...obj,
  });
}

export interface DeleteFuotaTaskRequest {
  /**
   * <p>The ID of a FUOTA task.</p>
   */
  Id: string | undefined;
}

export namespace DeleteFuotaTaskRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteFuotaTaskRequest): any => ({
    ...obj,
  });
}

export interface DeleteFuotaTaskResponse {}

export namespace DeleteFuotaTaskResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteFuotaTaskResponse): any => ({
    ...obj,
  });
}

export interface DeleteMulticastGroupRequest {
  /**
   * <p>The ID of the multicast group.</p>
   */
  Id: string | undefined;
}

export namespace DeleteMulticastGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteMulticastGroupRequest): any => ({
    ...obj,
  });
}

export interface DeleteMulticastGroupResponse {}

export namespace DeleteMulticastGroupResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteMulticastGroupResponse): any => ({
    ...obj,
  });
}

export interface DeleteNetworkAnalyzerConfigurationRequest {
  /**
   * <p>Name of the network analyzer configuration.</p>
   */
  ConfigurationName: string | undefined;
}

export namespace DeleteNetworkAnalyzerConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteNetworkAnalyzerConfigurationRequest): any => ({
    ...obj,
  });
}

export interface DeleteNetworkAnalyzerConfigurationResponse {}

export namespace DeleteNetworkAnalyzerConfigurationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteNetworkAnalyzerConfigurationResponse): any => ({
    ...obj,
  });
}

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

export namespace DeleteQueuedMessagesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteQueuedMessagesRequest): any => ({
    ...obj,
  });
}

export interface DeleteQueuedMessagesResponse {}

export namespace DeleteQueuedMessagesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteQueuedMessagesResponse): any => ({
    ...obj,
  });
}

export interface DeleteServiceProfileRequest {
  /**
   * <p>The ID of the resource to delete.</p>
   */
  Id: string | undefined;
}

export namespace DeleteServiceProfileRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteServiceProfileRequest): any => ({
    ...obj,
  });
}

export interface DeleteServiceProfileResponse {}

export namespace DeleteServiceProfileResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteServiceProfileResponse): any => ({
    ...obj,
  });
}

export interface DeleteWirelessDeviceRequest {
  /**
   * <p>The ID of the resource to delete.</p>
   */
  Id: string | undefined;
}

export namespace DeleteWirelessDeviceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteWirelessDeviceRequest): any => ({
    ...obj,
  });
}

export interface DeleteWirelessDeviceResponse {}

export namespace DeleteWirelessDeviceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteWirelessDeviceResponse): any => ({
    ...obj,
  });
}

export interface DeleteWirelessGatewayRequest {
  /**
   * <p>The ID of the resource to delete.</p>
   */
  Id: string | undefined;
}

export namespace DeleteWirelessGatewayRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteWirelessGatewayRequest): any => ({
    ...obj,
  });
}

export interface DeleteWirelessGatewayResponse {}

export namespace DeleteWirelessGatewayResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteWirelessGatewayResponse): any => ({
    ...obj,
  });
}

export interface DeleteWirelessGatewayTaskRequest {
  /**
   * <p>The ID of the resource to delete.</p>
   */
  Id: string | undefined;
}

export namespace DeleteWirelessGatewayTaskRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteWirelessGatewayTaskRequest): any => ({
    ...obj,
  });
}

export interface DeleteWirelessGatewayTaskResponse {}

export namespace DeleteWirelessGatewayTaskResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteWirelessGatewayTaskResponse): any => ({
    ...obj,
  });
}

export interface DeleteWirelessGatewayTaskDefinitionRequest {
  /**
   * <p>The ID of the resource to delete.</p>
   */
  Id: string | undefined;
}

export namespace DeleteWirelessGatewayTaskDefinitionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteWirelessGatewayTaskDefinitionRequest): any => ({
    ...obj,
  });
}

export interface DeleteWirelessGatewayTaskDefinitionResponse {}

export namespace DeleteWirelessGatewayTaskDefinitionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteWirelessGatewayTaskDefinitionResponse): any => ({
    ...obj,
  });
}

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

export namespace Destinations {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Destinations): any => ({
    ...obj,
  });
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

export namespace DeviceProfile {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeviceProfile): any => ({
    ...obj,
  });
}

/**
 * <p> SidewalkEventNotificationConfigurations object
 *             Event configuration object for Sidewalk related event topics.</p>
 */
export interface SidewalkEventNotificationConfigurations {
  /**
   * <p>Enum to denote whether amazon id event topic is enabled or disabled.</p>
   */
  AmazonIdEventTopic?: EventNotificationTopicStatus | string;
}

export namespace SidewalkEventNotificationConfigurations {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SidewalkEventNotificationConfigurations): any => ({
    ...obj,
  });
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
   * <p>Enum to denote whether the wireless device id device registration state event topic is enabled or disabled.</p>
   */
  WirelessDeviceIdEventTopic?: EventNotificationTopicStatus | string;
}

export namespace DeviceRegistrationStateEventConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeviceRegistrationStateEventConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Sidewalk resource type event configuration object for enabling or disabling topic.</p>
 */
export interface SidewalkResourceTypeEventConfiguration {
  /**
   * <p>Enum to denote whether the wireless device join event topic is enabled or disabled.</p>
   */
  WirelessDeviceEventTopic?: EventNotificationTopicStatus | string;
}

export namespace SidewalkResourceTypeEventConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SidewalkResourceTypeEventConfiguration): any => ({
    ...obj,
  });
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

export namespace DeviceRegistrationStateResourceTypeEventConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeviceRegistrationStateResourceTypeEventConfiguration): any => ({
    ...obj,
  });
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

export namespace DisassociateAwsAccountFromPartnerAccountRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateAwsAccountFromPartnerAccountRequest): any => ({
    ...obj,
  });
}

export interface DisassociateAwsAccountFromPartnerAccountResponse {}

export namespace DisassociateAwsAccountFromPartnerAccountResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateAwsAccountFromPartnerAccountResponse): any => ({
    ...obj,
  });
}

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

export namespace DisassociateMulticastGroupFromFuotaTaskRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateMulticastGroupFromFuotaTaskRequest): any => ({
    ...obj,
  });
}

export interface DisassociateMulticastGroupFromFuotaTaskResponse {}

export namespace DisassociateMulticastGroupFromFuotaTaskResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateMulticastGroupFromFuotaTaskResponse): any => ({
    ...obj,
  });
}

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

export namespace DisassociateWirelessDeviceFromFuotaTaskRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateWirelessDeviceFromFuotaTaskRequest): any => ({
    ...obj,
  });
}

export interface DisassociateWirelessDeviceFromFuotaTaskResponse {}

export namespace DisassociateWirelessDeviceFromFuotaTaskResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateWirelessDeviceFromFuotaTaskResponse): any => ({
    ...obj,
  });
}

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

export namespace DisassociateWirelessDeviceFromMulticastGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateWirelessDeviceFromMulticastGroupRequest): any => ({
    ...obj,
  });
}

export interface DisassociateWirelessDeviceFromMulticastGroupResponse {}

export namespace DisassociateWirelessDeviceFromMulticastGroupResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateWirelessDeviceFromMulticastGroupResponse): any => ({
    ...obj,
  });
}

export interface DisassociateWirelessDeviceFromThingRequest {
  /**
   * <p>The ID of the resource to update.</p>
   */
  Id: string | undefined;
}

export namespace DisassociateWirelessDeviceFromThingRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateWirelessDeviceFromThingRequest): any => ({
    ...obj,
  });
}

export interface DisassociateWirelessDeviceFromThingResponse {}

export namespace DisassociateWirelessDeviceFromThingResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateWirelessDeviceFromThingResponse): any => ({
    ...obj,
  });
}

export interface DisassociateWirelessGatewayFromCertificateRequest {
  /**
   * <p>The ID of the resource to update.</p>
   */
  Id: string | undefined;
}

export namespace DisassociateWirelessGatewayFromCertificateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateWirelessGatewayFromCertificateRequest): any => ({
    ...obj,
  });
}

export interface DisassociateWirelessGatewayFromCertificateResponse {}

export namespace DisassociateWirelessGatewayFromCertificateResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateWirelessGatewayFromCertificateResponse): any => ({
    ...obj,
  });
}

export interface DisassociateWirelessGatewayFromThingRequest {
  /**
   * <p>The ID of the resource to update.</p>
   */
  Id: string | undefined;
}

export namespace DisassociateWirelessGatewayFromThingRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateWirelessGatewayFromThingRequest): any => ({
    ...obj,
  });
}

export interface DisassociateWirelessGatewayFromThingResponse {}

export namespace DisassociateWirelessGatewayFromThingResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateWirelessGatewayFromThingResponse): any => ({
    ...obj,
  });
}

/**
 * <p>LoRaWAN router info.</p>
 */
export interface LoRaWANSendDataToDevice {
  /**
   * <p>The Fport value.</p>
   */
  FPort?: number;
}

export namespace LoRaWANSendDataToDevice {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LoRaWANSendDataToDevice): any => ({
    ...obj,
  });
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

export namespace DownlinkQueueMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DownlinkQueueMessage): any => ({
    ...obj,
  });
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
   * <p>Enum to denote whether the dev eui join event topic is enabled or disabled.</p>
   */
  DevEuiEventTopic?: EventNotificationTopicStatus | string;
}

export namespace LoRaWANJoinEventNotificationConfigurations {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LoRaWANJoinEventNotificationConfigurations): any => ({
    ...obj,
  });
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
   * <p>Enum to denote whether the wireless device id join event topic is enabled or disabled.</p>
   */
  WirelessDeviceIdEventTopic?: EventNotificationTopicStatus | string;
}

export namespace JoinEventConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: JoinEventConfiguration): any => ({
    ...obj,
  });
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
   * <p>Enum to denote whether the wireless device id proximity event topic is enabled or disabled.</p>
   */
  WirelessDeviceIdEventTopic?: EventNotificationTopicStatus | string;
}

export namespace ProximityEventConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ProximityEventConfiguration): any => ({
    ...obj,
  });
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
}

export namespace EventNotificationItemConfigurations {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EventNotificationItemConfigurations): any => ({
    ...obj,
  });
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

export namespace EventConfigurationItem {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EventConfigurationItem): any => ({
    ...obj,
  });
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

export namespace FuotaTask {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FuotaTask): any => ({
    ...obj,
  });
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

export namespace GetDestinationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDestinationRequest): any => ({
    ...obj,
  });
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

export namespace GetDestinationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDestinationResponse): any => ({
    ...obj,
  });
}

export interface GetDeviceProfileRequest {
  /**
   * <p>The ID of the resource to get.</p>
   */
  Id: string | undefined;
}

export namespace GetDeviceProfileRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDeviceProfileRequest): any => ({
    ...obj,
  });
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

export namespace GetDeviceProfileResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDeviceProfileResponse): any => ({
    ...obj,
  });
}

export interface GetEventConfigurationByResourceTypesRequest {}

export namespace GetEventConfigurationByResourceTypesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetEventConfigurationByResourceTypesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Object for LoRaWAN join resource type event configuration.</p>
 */
export interface LoRaWANJoinResourceTypeEventConfiguration {
  /**
   * <p>Enum to denote whether the wireless device join event topic is enabled or disabled.</p>
   */
  WirelessDeviceEventTopic?: EventNotificationTopicStatus | string;
}

export namespace LoRaWANJoinResourceTypeEventConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LoRaWANJoinResourceTypeEventConfiguration): any => ({
    ...obj,
  });
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

export namespace JoinResourceTypeEventConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: JoinResourceTypeEventConfiguration): any => ({
    ...obj,
  });
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

export namespace ProximityResourceTypeEventConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ProximityResourceTypeEventConfiguration): any => ({
    ...obj,
  });
}

export interface GetEventConfigurationByResourceTypesResponse {
  /**
   * <p>Resource type event configuration for the device registration state event</p>
   */
  DeviceRegistrationState?: DeviceRegistrationStateResourceTypeEventConfiguration;

  /**
   * <p>Resource type event configuration for the proximity event</p>
   */
  Proximity?: ProximityResourceTypeEventConfiguration;

  /**
   * <p>Resource type event configuration for the join event</p>
   */
  Join?: JoinResourceTypeEventConfiguration;

  /**
   * <p>Resource type event configuration for the connection status event</p>
   */
  ConnectionStatus?: ConnectionStatusResourceTypeEventConfiguration;
}

export namespace GetEventConfigurationByResourceTypesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetEventConfigurationByResourceTypesResponse): any => ({
    ...obj,
  });
}

export interface GetFuotaTaskRequest {
  /**
   * <p>The ID of a FUOTA task.</p>
   */
  Id: string | undefined;
}

export namespace GetFuotaTaskRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetFuotaTaskRequest): any => ({
    ...obj,
  });
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

export namespace LoRaWANFuotaTaskGetInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LoRaWANFuotaTaskGetInfo): any => ({
    ...obj,
  });
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

export namespace GetFuotaTaskResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetFuotaTaskResponse): any => ({
    ...obj,
  });
}

export interface GetLogLevelsByResourceTypesRequest {}

export namespace GetLogLevelsByResourceTypesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetLogLevelsByResourceTypesRequest): any => ({
    ...obj,
  });
}

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

export namespace WirelessDeviceEventLogOption {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: WirelessDeviceEventLogOption): any => ({
    ...obj,
  });
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

export namespace WirelessDeviceLogOption {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: WirelessDeviceLogOption): any => ({
    ...obj,
  });
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

export namespace WirelessGatewayEventLogOption {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: WirelessGatewayEventLogOption): any => ({
    ...obj,
  });
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

export namespace WirelessGatewayLogOption {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: WirelessGatewayLogOption): any => ({
    ...obj,
  });
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

export namespace GetLogLevelsByResourceTypesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetLogLevelsByResourceTypesResponse): any => ({
    ...obj,
  });
}

export interface GetMulticastGroupRequest {
  /**
   * <p>The ID of the multicast group.</p>
   */
  Id: string | undefined;
}

export namespace GetMulticastGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetMulticastGroupRequest): any => ({
    ...obj,
  });
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

export namespace LoRaWANMulticastGet {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LoRaWANMulticastGet): any => ({
    ...obj,
  });
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

export namespace GetMulticastGroupResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetMulticastGroupResponse): any => ({
    ...obj,
  });
}

export interface GetMulticastGroupSessionRequest {
  /**
   * <p>The ID of the multicast group.</p>
   */
  Id: string | undefined;
}

export namespace GetMulticastGroupSessionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetMulticastGroupSessionRequest): any => ({
    ...obj,
  });
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

export namespace LoRaWANMulticastSession {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LoRaWANMulticastSession): any => ({
    ...obj,
  });
}

export interface GetMulticastGroupSessionResponse {
  /**
   * <p>The LoRaWAN information used with the multicast session.</p>
   */
  LoRaWAN?: LoRaWANMulticastSession;
}

export namespace GetMulticastGroupSessionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetMulticastGroupSessionResponse): any => ({
    ...obj,
  });
}

export interface GetNetworkAnalyzerConfigurationRequest {
  /**
   * <p>Name of the network analyzer configuration.</p>
   */
  ConfigurationName: string | undefined;
}

export namespace GetNetworkAnalyzerConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetNetworkAnalyzerConfigurationRequest): any => ({
    ...obj,
  });
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

export namespace GetNetworkAnalyzerConfigurationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetNetworkAnalyzerConfigurationResponse): any => ({
    ...obj,
  });
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

export namespace GetPartnerAccountRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetPartnerAccountRequest): any => ({
    ...obj,
  });
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

export namespace SidewalkAccountInfoWithFingerprint {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SidewalkAccountInfoWithFingerprint): any => ({
    ...obj,
    ...(obj.Fingerprint && { Fingerprint: SENSITIVE_STRING }),
  });
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

export namespace GetPartnerAccountResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetPartnerAccountResponse): any => ({
    ...obj,
    ...(obj.Sidewalk && { Sidewalk: SidewalkAccountInfoWithFingerprint.filterSensitiveLog(obj.Sidewalk) }),
  });
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
   * <p>Partner type of the resource if the identifier type is PartnerAccountId.</p>
   */
  PartnerType?: EventNotificationPartnerType | string;
}

export namespace GetResourceEventConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetResourceEventConfigurationRequest): any => ({
    ...obj,
  });
}

export interface GetResourceEventConfigurationResponse {
  /**
   * <p>Event configuration for the device registration state event</p>
   */
  DeviceRegistrationState?: DeviceRegistrationStateEventConfiguration;

  /**
   * <p>Event configuration for the Proximity event</p>
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
}

export namespace GetResourceEventConfigurationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetResourceEventConfigurationResponse): any => ({
    ...obj,
  });
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

export namespace GetResourceLogLevelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetResourceLogLevelRequest): any => ({
    ...obj,
  });
}

export interface GetResourceLogLevelResponse {
  /**
   * <p>The log level for a log message. The log levels can be disabled, or set to <code>ERROR</code> to display
   *             less verbose logs containing only error information, or to <code>INFO</code> for more detailed logs.</p>
   */
  LogLevel?: LogLevel | string;
}

export namespace GetResourceLogLevelResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetResourceLogLevelResponse): any => ({
    ...obj,
  });
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

export namespace GetServiceEndpointRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetServiceEndpointRequest): any => ({
    ...obj,
  });
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

export namespace GetServiceEndpointResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetServiceEndpointResponse): any => ({
    ...obj,
  });
}

export interface GetServiceProfileRequest {
  /**
   * <p>The ID of the resource to get.</p>
   */
  Id: string | undefined;
}

export namespace GetServiceProfileRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetServiceProfileRequest): any => ({
    ...obj,
  });
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

export namespace LoRaWANGetServiceProfileInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LoRaWANGetServiceProfileInfo): any => ({
    ...obj,
  });
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

export namespace GetServiceProfileResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetServiceProfileResponse): any => ({
    ...obj,
  });
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

export namespace GetWirelessDeviceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetWirelessDeviceRequest): any => ({
    ...obj,
  });
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

export namespace SidewalkDevice {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SidewalkDevice): any => ({
    ...obj,
  });
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
}

export namespace GetWirelessDeviceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetWirelessDeviceResponse): any => ({
    ...obj,
  });
}

export interface GetWirelessDeviceStatisticsRequest {
  /**
   * <p>The ID of the wireless device for which to get the data.</p>
   */
  WirelessDeviceId: string | undefined;
}

export namespace GetWirelessDeviceStatisticsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetWirelessDeviceStatisticsRequest): any => ({
    ...obj,
  });
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

export namespace LoRaWANGatewayMetadata {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LoRaWANGatewayMetadata): any => ({
    ...obj,
  });
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

export namespace LoRaWANDeviceMetadata {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LoRaWANDeviceMetadata): any => ({
    ...obj,
  });
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

export namespace SidewalkDeviceMetadata {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SidewalkDeviceMetadata): any => ({
    ...obj,
  });
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

export namespace GetWirelessDeviceStatisticsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetWirelessDeviceStatisticsResponse): any => ({
    ...obj,
  });
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

export namespace GetWirelessGatewayRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetWirelessGatewayRequest): any => ({
    ...obj,
  });
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

export namespace GetWirelessGatewayResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetWirelessGatewayResponse): any => ({
    ...obj,
  });
}

export interface GetWirelessGatewayCertificateRequest {
  /**
   * <p>The ID of the resource to get.</p>
   */
  Id: string | undefined;
}

export namespace GetWirelessGatewayCertificateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetWirelessGatewayCertificateRequest): any => ({
    ...obj,
  });
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

export namespace GetWirelessGatewayCertificateResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetWirelessGatewayCertificateResponse): any => ({
    ...obj,
  });
}

export interface GetWirelessGatewayFirmwareInformationRequest {
  /**
   * <p>The ID of the resource to get.</p>
   */
  Id: string | undefined;
}

export namespace GetWirelessGatewayFirmwareInformationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetWirelessGatewayFirmwareInformationRequest): any => ({
    ...obj,
  });
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

export namespace LoRaWANGatewayCurrentVersion {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LoRaWANGatewayCurrentVersion): any => ({
    ...obj,
  });
}

export interface GetWirelessGatewayFirmwareInformationResponse {
  /**
   * <p>Information about the wireless gateway's firmware.</p>
   */
  LoRaWAN?: LoRaWANGatewayCurrentVersion;
}

export namespace GetWirelessGatewayFirmwareInformationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetWirelessGatewayFirmwareInformationResponse): any => ({
    ...obj,
  });
}

export interface GetWirelessGatewayStatisticsRequest {
  /**
   * <p>The ID of the wireless gateway for which to get the data.</p>
   */
  WirelessGatewayId: string | undefined;
}

export namespace GetWirelessGatewayStatisticsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetWirelessGatewayStatisticsRequest): any => ({
    ...obj,
  });
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

export namespace GetWirelessGatewayStatisticsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetWirelessGatewayStatisticsResponse): any => ({
    ...obj,
  });
}

export interface GetWirelessGatewayTaskRequest {
  /**
   * <p>The ID of the resource to get.</p>
   */
  Id: string | undefined;
}

export namespace GetWirelessGatewayTaskRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetWirelessGatewayTaskRequest): any => ({
    ...obj,
  });
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

export namespace GetWirelessGatewayTaskResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetWirelessGatewayTaskResponse): any => ({
    ...obj,
  });
}

export interface GetWirelessGatewayTaskDefinitionRequest {
  /**
   * <p>The ID of the resource to get.</p>
   */
  Id: string | undefined;
}

export namespace GetWirelessGatewayTaskDefinitionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetWirelessGatewayTaskDefinitionRequest): any => ({
    ...obj,
  });
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

export namespace GetWirelessGatewayTaskDefinitionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetWirelessGatewayTaskDefinitionResponse): any => ({
    ...obj,
  });
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

export namespace ListDestinationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDestinationsRequest): any => ({
    ...obj,
  });
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

export namespace ListDestinationsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDestinationsResponse): any => ({
    ...obj,
  });
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

export namespace ListDeviceProfilesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDeviceProfilesRequest): any => ({
    ...obj,
  });
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

export namespace ListDeviceProfilesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDeviceProfilesResponse): any => ({
    ...obj,
  });
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

export namespace ListEventConfigurationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListEventConfigurationsRequest): any => ({
    ...obj,
  });
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

export namespace ListEventConfigurationsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListEventConfigurationsResponse): any => ({
    ...obj,
  });
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

export namespace ListFuotaTasksRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListFuotaTasksRequest): any => ({
    ...obj,
  });
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

export namespace ListFuotaTasksResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListFuotaTasksResponse): any => ({
    ...obj,
  });
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

export namespace ListMulticastGroupsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListMulticastGroupsRequest): any => ({
    ...obj,
  });
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

export namespace MulticastGroup {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MulticastGroup): any => ({
    ...obj,
  });
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

export namespace ListMulticastGroupsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListMulticastGroupsResponse): any => ({
    ...obj,
  });
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

export namespace ListMulticastGroupsByFuotaTaskRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListMulticastGroupsByFuotaTaskRequest): any => ({
    ...obj,
  });
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

export namespace MulticastGroupByFuotaTask {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MulticastGroupByFuotaTask): any => ({
    ...obj,
  });
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

export namespace ListMulticastGroupsByFuotaTaskResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListMulticastGroupsByFuotaTaskResponse): any => ({
    ...obj,
  });
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

export namespace ListNetworkAnalyzerConfigurationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListNetworkAnalyzerConfigurationsRequest): any => ({
    ...obj,
  });
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

export namespace NetworkAnalyzerConfigurations {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NetworkAnalyzerConfigurations): any => ({
    ...obj,
  });
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

export namespace ListNetworkAnalyzerConfigurationsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListNetworkAnalyzerConfigurationsResponse): any => ({
    ...obj,
  });
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

export namespace ListPartnerAccountsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListPartnerAccountsRequest): any => ({
    ...obj,
  });
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

export namespace ListPartnerAccountsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListPartnerAccountsResponse): any => ({
    ...obj,
    ...(obj.Sidewalk && {
      Sidewalk: obj.Sidewalk.map((item) => SidewalkAccountInfoWithFingerprint.filterSensitiveLog(item)),
    }),
  });
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

export namespace ListQueuedMessagesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListQueuedMessagesRequest): any => ({
    ...obj,
  });
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

export namespace ListQueuedMessagesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListQueuedMessagesResponse): any => ({
    ...obj,
  });
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

export namespace ListServiceProfilesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListServiceProfilesRequest): any => ({
    ...obj,
  });
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

export namespace ServiceProfile {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServiceProfile): any => ({
    ...obj,
  });
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

export namespace ListServiceProfilesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListServiceProfilesResponse): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The ARN of the resource for which you want to list tags.</p>
   */
  ResourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceResponse {
  /**
   * <p>The tags to attach to the specified resource. Tags are metadata that you can use to manage a resource.</p>
   */
  Tags?: Tag[];
}

export namespace ListTagsForResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
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

export namespace ListWirelessDevicesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListWirelessDevicesRequest): any => ({
    ...obj,
  });
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

export namespace LoRaWANListDevice {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LoRaWANListDevice): any => ({
    ...obj,
  });
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

export namespace SidewalkListDevice {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SidewalkListDevice): any => ({
    ...obj,
  });
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

export namespace WirelessDeviceStatistics {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: WirelessDeviceStatistics): any => ({
    ...obj,
  });
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

export namespace ListWirelessDevicesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListWirelessDevicesResponse): any => ({
    ...obj,
  });
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

export namespace ListWirelessGatewaysRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListWirelessGatewaysRequest): any => ({
    ...obj,
  });
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

export namespace WirelessGatewayStatistics {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: WirelessGatewayStatistics): any => ({
    ...obj,
  });
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

export namespace ListWirelessGatewaysResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListWirelessGatewaysResponse): any => ({
    ...obj,
  });
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

export namespace ListWirelessGatewayTaskDefinitionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListWirelessGatewayTaskDefinitionsRequest): any => ({
    ...obj,
  });
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

export namespace LoRaWANUpdateGatewayTaskEntry {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LoRaWANUpdateGatewayTaskEntry): any => ({
    ...obj,
  });
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

export namespace UpdateWirelessGatewayTaskEntry {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateWirelessGatewayTaskEntry): any => ({
    ...obj,
  });
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

export namespace ListWirelessGatewayTaskDefinitionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListWirelessGatewayTaskDefinitionsResponse): any => ({
    ...obj,
  });
}

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

export namespace PutResourceLogLevelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutResourceLogLevelRequest): any => ({
    ...obj,
  });
}

export interface PutResourceLogLevelResponse {}

export namespace PutResourceLogLevelResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutResourceLogLevelResponse): any => ({
    ...obj,
  });
}

export interface ResetAllResourceLogLevelsRequest {}

export namespace ResetAllResourceLogLevelsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResetAllResourceLogLevelsRequest): any => ({
    ...obj,
  });
}

export interface ResetAllResourceLogLevelsResponse {}

export namespace ResetAllResourceLogLevelsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResetAllResourceLogLevelsResponse): any => ({
    ...obj,
  });
}

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

export namespace ResetResourceLogLevelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResetResourceLogLevelRequest): any => ({
    ...obj,
  });
}

export interface ResetResourceLogLevelResponse {}

export namespace ResetResourceLogLevelResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResetResourceLogLevelResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The metadata information of the LoRaWAN multicast group.</p>
 */
export interface LoRaWANMulticastMetadata {
  /**
   * <p>The Fport value.</p>
   */
  FPort?: number;
}

export namespace LoRaWANMulticastMetadata {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LoRaWANMulticastMetadata): any => ({
    ...obj,
  });
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

export namespace MulticastWirelessMetadata {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MulticastWirelessMetadata): any => ({
    ...obj,
  });
}

export interface SendDataToMulticastGroupRequest {
  /**
   * <p>The ID of the multicast group.</p>
   */
  Id: string | undefined;

  /**
   * <p>The binary to be sent to the end device, encoded in base64.</p>
   */
  PayloadData: string | undefined;

  /**
   * <p>Wireless metadata that is to be sent to multicast group.</p>
   */
  WirelessMetadata: MulticastWirelessMetadata | undefined;
}

export namespace SendDataToMulticastGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SendDataToMulticastGroupRequest): any => ({
    ...obj,
  });
}

export interface SendDataToMulticastGroupResponse {
  /**
   * <p>ID of a multicast group message.</p>
   */
  MessageId?: string;
}

export namespace SendDataToMulticastGroupResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SendDataToMulticastGroupResponse): any => ({
    ...obj,
  });
}

export enum MessageType {
  CUSTOM_COMMAND_ID_GET = "CUSTOM_COMMAND_ID_GET",
  CUSTOM_COMMAND_ID_NOTIFY = "CUSTOM_COMMAND_ID_NOTIFY",
  CUSTOM_COMMAND_ID_RESP = "CUSTOM_COMMAND_ID_RESP",
  CUSTOM_COMMAND_ID_SET = "CUSTOM_COMMAND_ID_SET",
}

/**
 * <p>Information about a Sidewalk router.</p>
 */
export interface SidewalkSendDataToDevice {
  /**
   * <p>The sequence number.</p>
   */
  Seq?: number;

  /**
   * <p>Sidewalk device message type. Default value is <code>CUSTOM_COMMAND_ID_NOTIFY</code>.</p>
   */
  MessageType?: MessageType | string;
}

export namespace SidewalkSendDataToDevice {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SidewalkSendDataToDevice): any => ({
    ...obj,
  });
}

/**
 * <p>WirelessMetadata object.</p>
 */
export interface WirelessMetadata {
  /**
   * <p>LoRaWAN device info.</p>
   */
  LoRaWAN?: LoRaWANSendDataToDevice;

  /**
   * <p>The Sidewalk account credentials.</p>
   */
  Sidewalk?: SidewalkSendDataToDevice;
}

export namespace WirelessMetadata {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: WirelessMetadata): any => ({
    ...obj,
  });
}

export interface SendDataToWirelessDeviceRequest {
  /**
   * <p>The ID of the wireless device to receive the data.</p>
   */
  Id: string | undefined;

  /**
   * <p>The transmit mode to use to send data to the wireless device. Can be: <code>0</code> for UM (unacknowledge mode) or <code>1</code> for AM (acknowledge mode).</p>
   */
  TransmitMode: number | undefined;

  /**
   * <p>The binary to be sent to the end device, encoded in base64.</p>
   */
  PayloadData: string | undefined;

  /**
   * <p>Metadata about the message request.</p>
   */
  WirelessMetadata?: WirelessMetadata;
}

export namespace SendDataToWirelessDeviceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SendDataToWirelessDeviceRequest): any => ({
    ...obj,
  });
}

export interface SendDataToWirelessDeviceResponse {
  /**
   * <p>The ID of the message sent to the wireless device.</p>
   */
  MessageId?: string;
}

export namespace SendDataToWirelessDeviceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SendDataToWirelessDeviceResponse): any => ({
    ...obj,
  });
}

export interface StartBulkAssociateWirelessDeviceWithMulticastGroupRequest {
  /**
   * <p>The ID of the multicast group.</p>
   */
  Id: string | undefined;

  /**
   * <p>Query string used to search for wireless devices as part of the bulk associate and disassociate process.</p>
   */
  QueryString?: string;

  /**
   * <p>The tag to attach to the specified resource. Tags are metadata that you can use to manage a resource.</p>
   */
  Tags?: Tag[];
}

export namespace StartBulkAssociateWirelessDeviceWithMulticastGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartBulkAssociateWirelessDeviceWithMulticastGroupRequest): any => ({
    ...obj,
  });
}

export interface StartBulkAssociateWirelessDeviceWithMulticastGroupResponse {}

export namespace StartBulkAssociateWirelessDeviceWithMulticastGroupResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartBulkAssociateWirelessDeviceWithMulticastGroupResponse): any => ({
    ...obj,
  });
}

export interface StartBulkDisassociateWirelessDeviceFromMulticastGroupRequest {
  /**
   * <p>The ID of the multicast group.</p>
   */
  Id: string | undefined;

  /**
   * <p>Query string used to search for wireless devices as part of the bulk associate and disassociate process.</p>
   */
  QueryString?: string;

  /**
   * <p>The tag to attach to the specified resource. Tags are metadata that you can use to manage a resource.</p>
   */
  Tags?: Tag[];
}

export namespace StartBulkDisassociateWirelessDeviceFromMulticastGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartBulkDisassociateWirelessDeviceFromMulticastGroupRequest): any => ({
    ...obj,
  });
}

export interface StartBulkDisassociateWirelessDeviceFromMulticastGroupResponse {}

export namespace StartBulkDisassociateWirelessDeviceFromMulticastGroupResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartBulkDisassociateWirelessDeviceFromMulticastGroupResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The LoRaWAN information used to start a FUOTA task.</p>
 */
export interface LoRaWANStartFuotaTask {
  /**
   * <p>Start time of a FUOTA task.</p>
   */
  StartTime?: Date;
}

export namespace LoRaWANStartFuotaTask {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LoRaWANStartFuotaTask): any => ({
    ...obj,
  });
}

export interface StartFuotaTaskRequest {
  /**
   * <p>The ID of a FUOTA task.</p>
   */
  Id: string | undefined;

  /**
   * <p>The LoRaWAN information used to start a FUOTA task.</p>
   */
  LoRaWAN?: LoRaWANStartFuotaTask;
}

export namespace StartFuotaTaskRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartFuotaTaskRequest): any => ({
    ...obj,
  });
}

export interface StartFuotaTaskResponse {}

export namespace StartFuotaTaskResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartFuotaTaskResponse): any => ({
    ...obj,
  });
}

export interface StartMulticastGroupSessionRequest {
  /**
   * <p>The ID of the multicast group.</p>
   */
  Id: string | undefined;

  /**
   * <p>The LoRaWAN information used with the multicast session.</p>
   */
  LoRaWAN: LoRaWANMulticastSession | undefined;
}

export namespace StartMulticastGroupSessionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartMulticastGroupSessionRequest): any => ({
    ...obj,
  });
}

export interface StartMulticastGroupSessionResponse {}

export namespace StartMulticastGroupSessionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartMulticastGroupSessionResponse): any => ({
    ...obj,
  });
}

export interface TagResourceRequest {
  /**
   * <p>The ARN of the resource to add tags to.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>Adds to or modifies the tags of the given resource. Tags are metadata that you can use to manage a resource.</p>
   */
  Tags: Tag[] | undefined;
}

export namespace TagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

export interface TagResourceResponse {}

export namespace TagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The request was denied because the resource can't have any more tags.</p>
 */
export class TooManyTagsException extends __BaseException {
  readonly name: "TooManyTagsException" = "TooManyTagsException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * <p>Name of the resource that exceeds maximum number of tags allowed.</p>
   */
  ResourceName?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyTagsException, __BaseException>) {
    super({
      name: "TooManyTagsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyTagsException.prototype);
    this.Message = opts.Message;
    this.ResourceName = opts.ResourceName;
  }
}

export interface TestWirelessDeviceRequest {
  /**
   * <p>The ID of the wireless device to test.</p>
   */
  Id: string | undefined;
}

export namespace TestWirelessDeviceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TestWirelessDeviceRequest): any => ({
    ...obj,
  });
}

export interface TestWirelessDeviceResponse {
  /**
   * <p>The result returned by the test.</p>
   */
  Result?: string;
}

export namespace TestWirelessDeviceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TestWirelessDeviceResponse): any => ({
    ...obj,
  });
}

export interface UntagResourceRequest {
  /**
   * <p>The ARN of the resource to remove tags from.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>A list of the keys of the tags to remove from the resource.</p>
   */
  TagKeys: string[] | undefined;
}

export namespace UntagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

export interface UntagResourceResponse {}

export namespace UntagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj,
  });
}

export interface UpdateDestinationRequest {
  /**
   * <p>The new name of the resource.</p>
   */
  Name: string | undefined;

  /**
   * <p>The type of value in <code>Expression</code>.</p>
   */
  ExpressionType?: ExpressionType | string;

  /**
   * <p>The new rule name or topic rule to send messages to.</p>
   */
  Expression?: string;

  /**
   * <p>A new description of the resource.</p>
   */
  Description?: string;

  /**
   * <p>The ARN of the IAM Role that authorizes the destination.</p>
   */
  RoleArn?: string;
}

export namespace UpdateDestinationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateDestinationRequest): any => ({
    ...obj,
  });
}

export interface UpdateDestinationResponse {}

export namespace UpdateDestinationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateDestinationResponse): any => ({
    ...obj,
  });
}

export interface UpdateEventConfigurationByResourceTypesRequest {
  /**
   * <p>Device registration state resource type event configuration object for enabling and disabling wireless
   *             gateway topic.</p>
   */
  DeviceRegistrationState?: DeviceRegistrationStateResourceTypeEventConfiguration;

  /**
   * <p>Proximity resource type event configuration object for enabling and disabling wireless gateway topic.</p>
   */
  Proximity?: ProximityResourceTypeEventConfiguration;

  /**
   * <p>Join resource type event configuration object for enabling and disabling wireless device topic.</p>
   */
  Join?: JoinResourceTypeEventConfiguration;

  /**
   * <p>Connection status resource type event configuration object for enabling and disabling wireless gateway topic.</p>
   */
  ConnectionStatus?: ConnectionStatusResourceTypeEventConfiguration;
}

export namespace UpdateEventConfigurationByResourceTypesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateEventConfigurationByResourceTypesRequest): any => ({
    ...obj,
  });
}

export interface UpdateEventConfigurationByResourceTypesResponse {}

export namespace UpdateEventConfigurationByResourceTypesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateEventConfigurationByResourceTypesResponse): any => ({
    ...obj,
  });
}

export interface UpdateFuotaTaskRequest {
  /**
   * <p>The ID of a FUOTA task.</p>
   */
  Id: string | undefined;

  /**
   * <p>The name of a FUOTA task.</p>
   */
  Name?: string;

  /**
   * <p>The description of the new resource.</p>
   */
  Description?: string;

  /**
   * <p>The LoRaWAN information used with a FUOTA task.</p>
   */
  LoRaWAN?: LoRaWANFuotaTask;

  /**
   * <p>The S3 URI points to a firmware update image that is to be used with a FUOTA task.</p>
   */
  FirmwareUpdateImage?: string;

  /**
   * <p>The firmware update role that is to be used with a FUOTA task.</p>
   */
  FirmwareUpdateRole?: string;
}

export namespace UpdateFuotaTaskRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateFuotaTaskRequest): any => ({
    ...obj,
  });
}

export interface UpdateFuotaTaskResponse {}

export namespace UpdateFuotaTaskResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateFuotaTaskResponse): any => ({
    ...obj,
  });
}

export interface UpdateLogLevelsByResourceTypesRequest {
  /**
   * <p>The log level for a log message. The log levels can be disabled, or set to <code>ERROR</code> to display
   *             less verbose logs containing only error information, or to <code>INFO</code> for more detailed logs.</p>
   */
  DefaultLogLevel?: LogLevel | string;

  /**
   * <p>The list of wireless device log options.</p>
   */
  WirelessDeviceLogOptions?: WirelessDeviceLogOption[];

  /**
   * <p>The list of wireless gateway log options.</p>
   */
  WirelessGatewayLogOptions?: WirelessGatewayLogOption[];
}

export namespace UpdateLogLevelsByResourceTypesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateLogLevelsByResourceTypesRequest): any => ({
    ...obj,
  });
}

export interface UpdateLogLevelsByResourceTypesResponse {}

export namespace UpdateLogLevelsByResourceTypesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateLogLevelsByResourceTypesResponse): any => ({
    ...obj,
  });
}

export interface UpdateMulticastGroupRequest {
  /**
   * <p>The ID of the multicast group.</p>
   */
  Id: string | undefined;

  /**
   * <p>The name of the multicast group.</p>
   */
  Name?: string;

  /**
   * <p>The description of the new resource.</p>
   */
  Description?: string;

  /**
   * <p>The LoRaWAN information that is to be used with the multicast group.</p>
   */
  LoRaWAN?: LoRaWANMulticast;
}

export namespace UpdateMulticastGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateMulticastGroupRequest): any => ({
    ...obj,
  });
}

export interface UpdateMulticastGroupResponse {}

export namespace UpdateMulticastGroupResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateMulticastGroupResponse): any => ({
    ...obj,
  });
}

export interface UpdateNetworkAnalyzerConfigurationRequest {
  /**
   * <p>Name of the network analyzer configuration.</p>
   */
  ConfigurationName: string | undefined;

  /**
   * <p>Trace content for your wireless gateway and wireless device resources.</p>
   */
  TraceContent?: TraceContent;

  /**
   * <p>Wireless device resources to add to the network analyzer configuration. Provide the
   *             <code>WirelessDeviceId</code> of the resource to add in the input array.</p>
   */
  WirelessDevicesToAdd?: string[];

  /**
   * <p>Wireless device resources to remove from the network analyzer configuration. Provide the
   *             <code>WirelessDeviceId</code> of the resources to remove in the input array.</p>
   */
  WirelessDevicesToRemove?: string[];

  /**
   * <p>Wireless gateway resources to add to the network analyzer configuration. Provide the
   *             <code>WirelessGatewayId</code> of the resource to add in the input array.</p>
   */
  WirelessGatewaysToAdd?: string[];

  /**
   * <p>Wireless gateway resources to remove from the network analyzer configuration. Provide the
   *             <code>WirelessGatewayId</code> of the resources to remove in the input array.</p>
   */
  WirelessGatewaysToRemove?: string[];

  /**
   * <p>The description of the new resource.</p>
   */
  Description?: string;
}

export namespace UpdateNetworkAnalyzerConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateNetworkAnalyzerConfigurationRequest): any => ({
    ...obj,
  });
}

export interface UpdateNetworkAnalyzerConfigurationResponse {}

export namespace UpdateNetworkAnalyzerConfigurationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateNetworkAnalyzerConfigurationResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Sidewalk update.</p>
 */
export interface SidewalkUpdateAccount {
  /**
   * <p>The new Sidewalk application server private key.</p>
   */
  AppServerPrivateKey?: string;
}

export namespace SidewalkUpdateAccount {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SidewalkUpdateAccount): any => ({
    ...obj,
    ...(obj.AppServerPrivateKey && { AppServerPrivateKey: SENSITIVE_STRING }),
  });
}

export interface UpdatePartnerAccountRequest {
  /**
   * <p>The Sidewalk account credentials.</p>
   */
  Sidewalk: SidewalkUpdateAccount | undefined;

  /**
   * <p>The ID of the partner account to update.</p>
   */
  PartnerAccountId: string | undefined;

  /**
   * <p>The partner type.</p>
   */
  PartnerType: PartnerType | string | undefined;
}

export namespace UpdatePartnerAccountRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdatePartnerAccountRequest): any => ({
    ...obj,
    ...(obj.Sidewalk && { Sidewalk: SidewalkUpdateAccount.filterSensitiveLog(obj.Sidewalk) }),
  });
}

export interface UpdatePartnerAccountResponse {}

export namespace UpdatePartnerAccountResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdatePartnerAccountResponse): any => ({
    ...obj,
  });
}

export interface UpdateResourceEventConfigurationRequest {
  /**
   * <p>Resource identifier to opt in for event messaging.</p>
   */
  Identifier: string | undefined;

  /**
   * <p>Identifier type of the particular resource identifier for event configuration.</p>
   */
  IdentifierType: IdentifierType | string | undefined;

  /**
   * <p>Partner type of the resource if the identifier type is PartnerAccountId</p>
   */
  PartnerType?: EventNotificationPartnerType | string;

  /**
   * <p>Event configuration for the device registration state event</p>
   */
  DeviceRegistrationState?: DeviceRegistrationStateEventConfiguration;

  /**
   * <p>Event configuration for the Proximity event</p>
   */
  Proximity?: ProximityEventConfiguration;

  /**
   * <p>Event configuration for the join event</p>
   */
  Join?: JoinEventConfiguration;

  /**
   * <p>Event configuration for the connection status event</p>
   */
  ConnectionStatus?: ConnectionStatusEventConfiguration;
}

export namespace UpdateResourceEventConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateResourceEventConfigurationRequest): any => ({
    ...obj,
  });
}

export interface UpdateResourceEventConfigurationResponse {}

export namespace UpdateResourceEventConfigurationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateResourceEventConfigurationResponse): any => ({
    ...obj,
  });
}

/**
 * <p>ABP device object for LoRaWAN specification v1.0.x</p>
 */
export interface UpdateAbpV1_0_x {
  /**
   * <p>The FCnt init value.</p>
   */
  FCntStart?: number;
}

export namespace UpdateAbpV1_0_x {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateAbpV1_0_x): any => ({
    ...obj,
  });
}

/**
 * <p>ABP device object for LoRaWAN specification v1.1</p>
 */
export interface UpdateAbpV1_1 {
  /**
   * <p>The FCnt init value.</p>
   */
  FCntStart?: number;
}

export namespace UpdateAbpV1_1 {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateAbpV1_1): any => ({
    ...obj,
  });
}

/**
 * <p>LoRaWAN object for update functions.</p>
 */
export interface LoRaWANUpdateDevice {
  /**
   * <p>The ID of the device profile for the wireless device.</p>
   */
  DeviceProfileId?: string;

  /**
   * <p>The ID of the service profile.</p>
   */
  ServiceProfileId?: string;

  /**
   * <p>ABP device object for update APIs for v1.1</p>
   */
  AbpV1_1?: UpdateAbpV1_1;

  /**
   * <p>ABP device object for update APIs for v1.0.x</p>
   */
  AbpV1_0_x?: UpdateAbpV1_0_x;
}

export namespace LoRaWANUpdateDevice {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LoRaWANUpdateDevice): any => ({
    ...obj,
  });
}

export interface UpdateWirelessDeviceRequest {
  /**
   * <p>The ID of the resource to update.</p>
   */
  Id: string | undefined;

  /**
   * <p>The name of the new destination for the device.</p>
   */
  DestinationName?: string;

  /**
   * <p>The new name of the resource.</p>
   */
  Name?: string;

  /**
   * <p>A new description of the resource.</p>
   */
  Description?: string;

  /**
   * <p>The updated wireless device's configuration.</p>
   */
  LoRaWAN?: LoRaWANUpdateDevice;
}

export namespace UpdateWirelessDeviceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateWirelessDeviceRequest): any => ({
    ...obj,
  });
}

export interface UpdateWirelessDeviceResponse {}

export namespace UpdateWirelessDeviceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateWirelessDeviceResponse): any => ({
    ...obj,
  });
}

export interface UpdateWirelessGatewayRequest {
  /**
   * <p>The ID of the resource to update.</p>
   */
  Id: string | undefined;

  /**
   * <p>The new name of the resource.</p>
   */
  Name?: string;

  /**
   * <p>A new description of the resource.</p>
   */
  Description?: string;

  /**
   * <p>A list of JoinEuiRange used by LoRa gateways to filter LoRa frames.</p>
   */
  JoinEuiFilters?: string[][];

  /**
   * <p>A list of NetId values that are used by LoRa gateways to filter the uplink frames.</p>
   */
  NetIdFilters?: string[];
}

export namespace UpdateWirelessGatewayRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateWirelessGatewayRequest): any => ({
    ...obj,
  });
}

export interface UpdateWirelessGatewayResponse {}

export namespace UpdateWirelessGatewayResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateWirelessGatewayResponse): any => ({
    ...obj,
  });
}
