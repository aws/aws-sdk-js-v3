import { SENSITIVE_STRING, SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

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
}

export namespace AbpV1_0_x {
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
}

export namespace AbpV1_1 {
  export const filterSensitiveLog = (obj: AbpV1_1): any => ({
    ...obj,
  });
}

/**
 * <p>User does not have permission to perform this action.</p>
 */
export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  Message?: string;
}

export namespace AccessDeniedException {
  export const filterSensitiveLog = (obj: AccessDeniedException): any => ({
    ...obj,
  });
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
  export const filterSensitiveLog = (obj: AssociateAwsAccountWithPartnerAccountResponse): any => ({
    ...obj,
    ...(obj.Sidewalk && { Sidewalk: SidewalkAccountInfo.filterSensitiveLog(obj.Sidewalk) }),
  });
}

/**
 * <p>Adding, updating, or deleting the resource can cause an inconsistent state.</p>
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
  name: "ConflictException";
  $fault: "client";
  Message?: string;
  ResourceId?: string;
  ResourceType?: string;
}

export namespace ConflictException {
  export const filterSensitiveLog = (obj: ConflictException): any => ({
    ...obj,
  });
}

/**
 * <p>An unexpected error occurred while processing a request.</p>
 */
export interface InternalServerException extends __SmithyException, $MetadataBearer {
  name: "InternalServerException";
  $fault: "server";
  Message?: string;
}

export namespace InternalServerException {
  export const filterSensitiveLog = (obj: InternalServerException): any => ({
    ...obj,
  });
}

/**
 * <p>Resource does not exist.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  Message?: string;
  ResourceId?: string;
  ResourceType?: string;
}

export namespace ResourceNotFoundException {
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p>The request was denied because it exceeded the allowed API request rate.</p>
 */
export interface ThrottlingException extends __SmithyException, $MetadataBearer {
  name: "ThrottlingException";
  $fault: "client";
  Message?: string;
}

export namespace ThrottlingException {
  export const filterSensitiveLog = (obj: ThrottlingException): any => ({
    ...obj,
  });
}

/**
 * <p>The input did not meet the specified constraints.</p>
 */
export interface ValidationException extends __SmithyException, $MetadataBearer {
  name: "ValidationException";
  $fault: "client";
  Message?: string;
}

export namespace ValidationException {
  export const filterSensitiveLog = (obj: ValidationException): any => ({
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
  export const filterSensitiveLog = (obj: AssociateWirelessDeviceWithThingRequest): any => ({
    ...obj,
  });
}

export interface AssociateWirelessDeviceWithThingResponse {}

export namespace AssociateWirelessDeviceWithThingResponse {
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
  export const filterSensitiveLog = (obj: AssociateWirelessGatewayWithThingRequest): any => ({
    ...obj,
  });
}

export interface AssociateWirelessGatewayWithThingResponse {}

export namespace AssociateWirelessGatewayWithThingResponse {
  export const filterSensitiveLog = (obj: AssociateWirelessGatewayWithThingResponse): any => ({
    ...obj,
  });
}

export enum BatteryLevel {
  CRITICAL = "critical",
  LOW = "low",
  NORMAL = "normal",
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
  export const filterSensitiveLog = (obj: CertificateList): any => ({
    ...obj,
  });
}

export enum ConnectionStatus {
  CONNECTED = "Connected",
  DISCONNECTED = "Disconnected",
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
  export const filterSensitiveLog = (obj: CreateDeviceProfileResponse): any => ({
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
  export const filterSensitiveLog = (obj: CreateServiceProfileResponse): any => ({
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
}

export namespace OtaaV1_0_x {
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
}

export namespace LoRaWANDevice {
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
}

export namespace LoRaWANGateway {
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
  export const filterSensitiveLog = (obj: DeleteDestinationRequest): any => ({
    ...obj,
  });
}

export interface DeleteDestinationResponse {}

export namespace DeleteDestinationResponse {
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
  export const filterSensitiveLog = (obj: DeleteDeviceProfileRequest): any => ({
    ...obj,
  });
}

export interface DeleteDeviceProfileResponse {}

export namespace DeleteDeviceProfileResponse {
  export const filterSensitiveLog = (obj: DeleteDeviceProfileResponse): any => ({
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
  export const filterSensitiveLog = (obj: DeleteServiceProfileRequest): any => ({
    ...obj,
  });
}

export interface DeleteServiceProfileResponse {}

export namespace DeleteServiceProfileResponse {
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
  export const filterSensitiveLog = (obj: DeleteWirelessDeviceRequest): any => ({
    ...obj,
  });
}

export interface DeleteWirelessDeviceResponse {}

export namespace DeleteWirelessDeviceResponse {
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
  export const filterSensitiveLog = (obj: DeleteWirelessGatewayRequest): any => ({
    ...obj,
  });
}

export interface DeleteWirelessGatewayResponse {}

export namespace DeleteWirelessGatewayResponse {
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
  export const filterSensitiveLog = (obj: DeleteWirelessGatewayTaskRequest): any => ({
    ...obj,
  });
}

export interface DeleteWirelessGatewayTaskResponse {}

export namespace DeleteWirelessGatewayTaskResponse {
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
  export const filterSensitiveLog = (obj: DeleteWirelessGatewayTaskDefinitionRequest): any => ({
    ...obj,
  });
}

export interface DeleteWirelessGatewayTaskDefinitionResponse {}

export namespace DeleteWirelessGatewayTaskDefinitionResponse {
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
  export const filterSensitiveLog = (obj: DeviceProfile): any => ({
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
  export const filterSensitiveLog = (obj: DisassociateAwsAccountFromPartnerAccountRequest): any => ({
    ...obj,
  });
}

export interface DisassociateAwsAccountFromPartnerAccountResponse {}

export namespace DisassociateAwsAccountFromPartnerAccountResponse {
  export const filterSensitiveLog = (obj: DisassociateAwsAccountFromPartnerAccountResponse): any => ({
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
  export const filterSensitiveLog = (obj: DisassociateWirelessDeviceFromThingRequest): any => ({
    ...obj,
  });
}

export interface DisassociateWirelessDeviceFromThingResponse {}

export namespace DisassociateWirelessDeviceFromThingResponse {
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
  export const filterSensitiveLog = (obj: DisassociateWirelessGatewayFromCertificateRequest): any => ({
    ...obj,
  });
}

export interface DisassociateWirelessGatewayFromCertificateResponse {}

export namespace DisassociateWirelessGatewayFromCertificateResponse {
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
  export const filterSensitiveLog = (obj: DisassociateWirelessGatewayFromThingRequest): any => ({
    ...obj,
  });
}

export interface DisassociateWirelessGatewayFromThingResponse {}

export namespace DisassociateWirelessGatewayFromThingResponse {
  export const filterSensitiveLog = (obj: DisassociateWirelessGatewayFromThingResponse): any => ({
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

export interface GetDestinationRequest {
  /**
   * <p>The name of the resource to get.</p>
   */
  Name: string | undefined;
}

export namespace GetDestinationRequest {
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
  export const filterSensitiveLog = (obj: GetDeviceProfileResponse): any => ({
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
  export const filterSensitiveLog = (obj: GetPartnerAccountResponse): any => ({
    ...obj,
    ...(obj.Sidewalk && { Sidewalk: SidewalkAccountInfoWithFingerprint.filterSensitiveLog(obj.Sidewalk) }),
  });
}

export enum WirelessGatewayServiceType {
  CUPS = "CUPS",
  LNS = "LNS",
}

export interface GetServiceEndpointRequest {
  /**
   * <p>The service type for which to get endpoint information about. Can be <code>CUPS</code> for the Configuration and Update Server endpoint, or <code>LNS</code> for the LoRaWAN Network Server endpoint.</p>
   */
  ServiceType?: WirelessGatewayServiceType | string;
}

export namespace GetServiceEndpointRequest {
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
  export const filterSensitiveLog = (obj: GetServiceProfileResponse): any => ({
    ...obj,
  });
}

export enum WirelessDeviceIdType {
  DevEui = "DevEui",
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
  export const filterSensitiveLog = (obj: GetWirelessDeviceRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Sidewalk device object.</p>
 */
export interface SidewalkDevice {
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
  export const filterSensitiveLog = (obj: ListDeviceProfilesResponse): any => ({
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
  export const filterSensitiveLog = (obj: ListPartnerAccountsResponse): any => ({
    ...obj,
    ...(obj.Sidewalk && {
      Sidewalk: obj.Sidewalk.map((item) => SidewalkAccountInfoWithFingerprint.filterSensitiveLog(item)),
    }),
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
}

export namespace ListWirelessDevicesRequest {
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
}

export namespace WirelessDeviceStatistics {
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
  export const filterSensitiveLog = (obj: ListWirelessGatewayTaskDefinitionsResponse): any => ({
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
  export const filterSensitiveLog = (obj: LoRaWANSendDataToDevice): any => ({
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
   * <p>Sidewalk device message type.</p>
   */
  MessageType?: MessageType | string;
}

export namespace SidewalkSendDataToDevice {
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
   * <p>The message payload to send.</p>
   */
  PayloadData: string | undefined;

  /**
   * <p>Metadata about the message request.</p>
   */
  WirelessMetadata?: WirelessMetadata;
}

export namespace SendDataToWirelessDeviceRequest {
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
  export const filterSensitiveLog = (obj: SendDataToWirelessDeviceResponse): any => ({
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
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

export interface TagResourceResponse {}

export namespace TagResourceResponse {
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The request was denied because the resource can't have any more tags.</p>
 */
export interface TooManyTagsException extends __SmithyException, $MetadataBearer {
  name: "TooManyTagsException";
  $fault: "client";
  Message?: string;
  ResourceName?: string;
}

export namespace TooManyTagsException {
  export const filterSensitiveLog = (obj: TooManyTagsException): any => ({
    ...obj,
  });
}

export interface TestWirelessDeviceRequest {
  /**
   * <p>The ID of the wireless device to test.</p>
   */
  Id: string | undefined;
}

export namespace TestWirelessDeviceRequest {
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
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

export interface UntagResourceResponse {}

export namespace UntagResourceResponse {
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
  export const filterSensitiveLog = (obj: UpdateDestinationRequest): any => ({
    ...obj,
  });
}

export interface UpdateDestinationResponse {}

export namespace UpdateDestinationResponse {
  export const filterSensitiveLog = (obj: UpdateDestinationResponse): any => ({
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
  export const filterSensitiveLog = (obj: UpdatePartnerAccountRequest): any => ({
    ...obj,
    ...(obj.Sidewalk && { Sidewalk: SidewalkUpdateAccount.filterSensitiveLog(obj.Sidewalk) }),
  });
}

export interface UpdatePartnerAccountResponse {}

export namespace UpdatePartnerAccountResponse {
  export const filterSensitiveLog = (obj: UpdatePartnerAccountResponse): any => ({
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
}

export namespace LoRaWANUpdateDevice {
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
  export const filterSensitiveLog = (obj: UpdateWirelessDeviceRequest): any => ({
    ...obj,
  });
}

export interface UpdateWirelessDeviceResponse {}

export namespace UpdateWirelessDeviceResponse {
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
}

export namespace UpdateWirelessGatewayRequest {
  export const filterSensitiveLog = (obj: UpdateWirelessGatewayRequest): any => ({
    ...obj,
  });
}

export interface UpdateWirelessGatewayResponse {}

export namespace UpdateWirelessGatewayResponse {
  export const filterSensitiveLog = (obj: UpdateWirelessGatewayResponse): any => ({
    ...obj,
  });
}
