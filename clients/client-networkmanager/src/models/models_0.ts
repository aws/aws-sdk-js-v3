import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer, SmithyException as __SmithyException } from "@aws-sdk/types";

/**
 * <p>You do not have sufficient access to perform this action.</p>
 */
export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  Message: string | undefined;
}

export namespace AccessDeniedException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AccessDeniedException): any => ({
    ...obj,
  });
}

export interface AssociateCustomerGatewayRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the customer gateway.</p>
   */
  CustomerGatewayArn: string | undefined;

  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The ID of the device.</p>
   */
  DeviceId: string | undefined;

  /**
   * <p>The ID of the link.</p>
   */
  LinkId?: string;
}

export namespace AssociateCustomerGatewayRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateCustomerGatewayRequest): any => ({
    ...obj,
  });
}

export enum CustomerGatewayAssociationState {
  available = "AVAILABLE",
  deleted = "DELETED",
  deleting = "DELETING",
  pending = "PENDING",
}

/**
 * <p>Describes the association between a customer gateway, a device, and a link.</p>
 */
export interface CustomerGatewayAssociation {
  /**
   * <p>The Amazon Resource Name (ARN) of the customer gateway.</p>
   */
  CustomerGatewayArn?: string;

  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId?: string;

  /**
   * <p>The ID of the device.</p>
   */
  DeviceId?: string;

  /**
   * <p>The ID of the link.</p>
   */
  LinkId?: string;

  /**
   * <p>The association state.</p>
   */
  State?: CustomerGatewayAssociationState | string;
}

export namespace CustomerGatewayAssociation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CustomerGatewayAssociation): any => ({
    ...obj,
  });
}

export interface AssociateCustomerGatewayResponse {
  /**
   * <p>The customer gateway association.</p>
   */
  CustomerGatewayAssociation?: CustomerGatewayAssociation;
}

export namespace AssociateCustomerGatewayResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateCustomerGatewayResponse): any => ({
    ...obj,
  });
}

/**
 * <p>There was a conflict processing the request. Updating or deleting the resource can
 *             cause an inconsistent state.</p>
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
  name: "ConflictException";
  $fault: "client";
  Message: string | undefined;
  /**
   * <p>The ID of the resource.</p>
   */
  ResourceId: string | undefined;

  /**
   * <p>The resource type.</p>
   */
  ResourceType: string | undefined;
}

export namespace ConflictException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConflictException): any => ({
    ...obj,
  });
}

/**
 * <p>The request has failed due to an internal error.</p>
 */
export interface InternalServerException extends __SmithyException, $MetadataBearer {
  name: "InternalServerException";
  $fault: "server";
  Message: string | undefined;
  /**
   * <p>Indicates when to retry the request.</p>
   */
  RetryAfterSeconds?: number;
}

export namespace InternalServerException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InternalServerException): any => ({
    ...obj,
  });
}

/**
 * <p>The specified resource could not be found.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  Message: string | undefined;
  /**
   * <p>The ID of the resource.</p>
   */
  ResourceId: string | undefined;

  /**
   * <p>The resource type.</p>
   */
  ResourceType: string | undefined;

  Context?: { [key: string]: string };
}

export namespace ResourceNotFoundException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p>A service limit was exceeded.</p>
 */
export interface ServiceQuotaExceededException extends __SmithyException, $MetadataBearer {
  name: "ServiceQuotaExceededException";
  $fault: "client";
  /**
   * <p>The error message.</p>
   */
  Message: string | undefined;

  /**
   * <p>The ID of the resource.</p>
   */
  ResourceId?: string;

  /**
   * <p>The resource type.</p>
   */
  ResourceType?: string;

  /**
   * <p>The limit code.</p>
   */
  LimitCode: string | undefined;

  /**
   * <p>The service code.</p>
   */
  ServiceCode: string | undefined;
}

export namespace ServiceQuotaExceededException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServiceQuotaExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>The request was denied due to request throttling.</p>
 */
export interface ThrottlingException extends __SmithyException, $MetadataBearer {
  name: "ThrottlingException";
  $fault: "client";
  Message: string | undefined;
  /**
   * <p>Indicates when to retry the request.</p>
   */
  RetryAfterSeconds?: number;
}

export namespace ThrottlingException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ThrottlingException): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a validation exception for a field.</p>
 */
export interface ValidationExceptionField {
  /**
   * <p>The name of the field.</p>
   */
  Name: string | undefined;

  /**
   * <p>The message for the field.</p>
   */
  Message: string | undefined;
}

export namespace ValidationExceptionField {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ValidationExceptionField): any => ({
    ...obj,
  });
}

export enum ValidationExceptionReason {
  CANNOT_PARSE = "CannotParse",
  FIELD_VALIDATION_FAILED = "FieldValidationFailed",
  OTHER = "Other",
  UNKNOWN_OPERATION = "UnknownOperation",
}

/**
 * <p>The input fails to satisfy the constraints.</p>
 */
export interface ValidationException extends __SmithyException, $MetadataBearer {
  name: "ValidationException";
  $fault: "client";
  Message: string | undefined;
  /**
   * <p>The reason for the error.</p>
   */
  Reason?: ValidationExceptionReason | string;

  /**
   * <p>The fields that caused the error, if applicable.</p>
   */
  Fields?: ValidationExceptionField[];
}

export namespace ValidationException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ValidationException): any => ({
    ...obj,
  });
}

export interface AssociateLinkRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The ID of the device.</p>
   */
  DeviceId: string | undefined;

  /**
   * <p>The ID of the link.</p>
   */
  LinkId: string | undefined;
}

export namespace AssociateLinkRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateLinkRequest): any => ({
    ...obj,
  });
}

export enum LinkAssociationState {
  available = "AVAILABLE",
  deleted = "DELETED",
  deleting = "DELETING",
  pending = "PENDING",
}

/**
 * <p>Describes the association between a device and a link.</p>
 */
export interface LinkAssociation {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId?: string;

  /**
   * <p>The device ID for the link association.</p>
   */
  DeviceId?: string;

  /**
   * <p>The ID of the link.</p>
   */
  LinkId?: string;

  /**
   * <p>The state of the association.</p>
   */
  LinkAssociationState?: LinkAssociationState | string;
}

export namespace LinkAssociation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LinkAssociation): any => ({
    ...obj,
  });
}

export interface AssociateLinkResponse {
  /**
   * <p>The link association.</p>
   */
  LinkAssociation?: LinkAssociation;
}

export namespace AssociateLinkResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateLinkResponse): any => ({
    ...obj,
  });
}

export interface AssociateTransitGatewayConnectPeerRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Connect peer.</p>
   */
  TransitGatewayConnectPeerArn: string | undefined;

  /**
   * <p>The ID of the device.</p>
   */
  DeviceId: string | undefined;

  /**
   * <p>The ID of the link.</p>
   */
  LinkId?: string;
}

export namespace AssociateTransitGatewayConnectPeerRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateTransitGatewayConnectPeerRequest): any => ({
    ...obj,
  });
}

export enum TransitGatewayConnectPeerAssociationState {
  available = "AVAILABLE",
  deleted = "DELETED",
  deleting = "DELETING",
  pending = "PENDING",
}

/**
 * <p>Describes a transit gateway Connect peer association.</p>
 */
export interface TransitGatewayConnectPeerAssociation {
  /**
   * <p>The Amazon Resource Name (ARN) of the transit gateway Connect peer.</p>
   */
  TransitGatewayConnectPeerArn?: string;

  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId?: string;

  /**
   * <p>The ID of the device.</p>
   */
  DeviceId?: string;

  /**
   * <p>The ID of the link.</p>
   */
  LinkId?: string;

  /**
   * <p>The state of the association.</p>
   */
  State?: TransitGatewayConnectPeerAssociationState | string;
}

export namespace TransitGatewayConnectPeerAssociation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TransitGatewayConnectPeerAssociation): any => ({
    ...obj,
  });
}

export interface AssociateTransitGatewayConnectPeerResponse {
  /**
   * <p>The transit gateway Connect peer association.</p>
   */
  TransitGatewayConnectPeerAssociation?: TransitGatewayConnectPeerAssociation;
}

export namespace AssociateTransitGatewayConnectPeerResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateTransitGatewayConnectPeerResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies a location in Amazon Web Services.</p>
 */
export interface AWSLocation {
  /**
   * <p>The Zone that the device is located in. Specify the ID of an Availability Zone, Local
   *             Zone, Wavelength Zone, or an Outpost.</p>
   */
  Zone?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the subnet that the device is located in.</p>
   */
  SubnetArn?: string;
}

export namespace AWSLocation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AWSLocation): any => ({
    ...obj,
  });
}

/**
 * <p>Describes bandwidth information.</p>
 */
export interface Bandwidth {
  /**
   * <p>Upload speed in Mbps.</p>
   */
  UploadSpeed?: number;

  /**
   * <p>Download speed in Mbps.</p>
   */
  DownloadSpeed?: number;
}

export namespace Bandwidth {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Bandwidth): any => ({
    ...obj,
  });
}

export enum ConnectionState {
  available = "AVAILABLE",
  deleting = "DELETING",
  pending = "PENDING",
  updating = "UPDATING",
}

/**
 * <p>Describes a tag.</p>
 */
export interface Tag {
  /**
   * <p>The tag key.</p>
   *         <p>Constraints: Maximum length of 128 characters.</p>
   */
  Key?: string;

  /**
   * <p>The tag value.</p>
   *         <p>Constraints: Maximum length of 256 characters.</p>
   */
  Value?: string;
}

export namespace Tag {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a connection.</p>
 */
export interface Connection {
  /**
   * <p>The ID of the connection.</p>
   */
  ConnectionId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the connection.</p>
   */
  ConnectionArn?: string;

  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId?: string;

  /**
   * <p>The ID of the first device in the connection.</p>
   */
  DeviceId?: string;

  /**
   * <p>The ID of the second device in the connection.</p>
   */
  ConnectedDeviceId?: string;

  /**
   * <p>The ID of the link for the first device in the connection.</p>
   */
  LinkId?: string;

  /**
   * <p>The ID of the link for the second device in the connection.</p>
   */
  ConnectedLinkId?: string;

  /**
   * <p>The description of the connection.</p>
   */
  Description?: string;

  /**
   * <p>The date and time that the connection was created.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>The state of the connection.</p>
   */
  State?: ConnectionState | string;

  /**
   * <p>The tags for the connection.</p>
   */
  Tags?: Tag[];
}

export namespace Connection {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Connection): any => ({
    ...obj,
  });
}

export enum ConnectionStatus {
  DOWN = "DOWN",
  UP = "UP",
}

export enum ConnectionType {
  BGP = "BGP",
  IPSEC = "IPSEC",
}

/**
 * <p>Describes connection health.</p>
 */
export interface ConnectionHealth {
  /**
   * <p>The connection type.</p>
   */
  Type?: ConnectionType | string;

  /**
   * <p>The connection status.</p>
   */
  Status?: ConnectionStatus | string;

  /**
   * <p>The time the status was last updated.</p>
   */
  Timestamp?: Date;
}

export namespace ConnectionHealth {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConnectionHealth): any => ({
    ...obj,
  });
}

export interface CreateConnectionRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The ID of the first device in the connection.</p>
   */
  DeviceId: string | undefined;

  /**
   * <p>The ID of the second device in the connection.</p>
   */
  ConnectedDeviceId: string | undefined;

  /**
   * <p>The ID of the link for the first device.</p>
   */
  LinkId?: string;

  /**
   * <p>The ID of the link for the second device.</p>
   */
  ConnectedLinkId?: string;

  /**
   * <p>A description of the connection.</p>
   *         <p>Length Constraints: Maximum length of 256 characters.</p>
   */
  Description?: string;

  /**
   * <p>The tags to apply to the resource during creation.</p>
   */
  Tags?: Tag[];
}

export namespace CreateConnectionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateConnectionRequest): any => ({
    ...obj,
  });
}

export interface CreateConnectionResponse {
  /**
   * <p>Information about the connection.</p>
   */
  Connection?: Connection;
}

export namespace CreateConnectionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateConnectionResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a location.</p>
 */
export interface Location {
  /**
   * <p>The physical address.</p>
   */
  Address?: string;

  /**
   * <p>The latitude.</p>
   */
  Latitude?: string;

  /**
   * <p>The longitude.</p>
   */
  Longitude?: string;
}

export namespace Location {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Location): any => ({
    ...obj,
  });
}

export interface CreateDeviceRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The Amazon Web Services location of the device, if applicable. For an on-premises device, you can omit this parameter.</p>
   */
  AWSLocation?: AWSLocation;

  /**
   * <p>A description of the device.</p>
   *         <p>Constraints: Maximum length of 256 characters.</p>
   */
  Description?: string;

  /**
   * <p>The type of the device.</p>
   */
  Type?: string;

  /**
   * <p>The vendor of the device.</p>
   *         <p>Constraints: Maximum length of 128 characters.</p>
   */
  Vendor?: string;

  /**
   * <p>The model of the device.</p>
   *         <p>Constraints: Maximum length of 128 characters.</p>
   */
  Model?: string;

  /**
   * <p>The serial number of the device.</p>
   *         <p>Constraints: Maximum length of 128 characters.</p>
   */
  SerialNumber?: string;

  /**
   * <p>The location of the device.</p>
   */
  Location?: Location;

  /**
   * <p>The ID of the site.</p>
   */
  SiteId?: string;

  /**
   * <p>The tags to apply to the resource during creation.</p>
   */
  Tags?: Tag[];
}

export namespace CreateDeviceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDeviceRequest): any => ({
    ...obj,
    ...(obj.Location && { Location: SENSITIVE_STRING }),
  });
}

export enum DeviceState {
  available = "AVAILABLE",
  deleting = "DELETING",
  pending = "PENDING",
  updating = "UPDATING",
}

/**
 * <p>Describes a device.</p>
 */
export interface Device {
  /**
   * <p>The ID of the device.</p>
   */
  DeviceId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the device.</p>
   */
  DeviceArn?: string;

  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId?: string;

  /**
   * <p>The Amazon Web Services location of the device.</p>
   */
  AWSLocation?: AWSLocation;

  /**
   * <p>The description of the device.</p>
   */
  Description?: string;

  /**
   * <p>The device type.</p>
   */
  Type?: string;

  /**
   * <p>The device vendor.</p>
   */
  Vendor?: string;

  /**
   * <p>The device model.</p>
   */
  Model?: string;

  /**
   * <p>The device serial number.</p>
   */
  SerialNumber?: string;

  /**
   * <p>The site location.</p>
   */
  Location?: Location;

  /**
   * <p>The site ID.</p>
   */
  SiteId?: string;

  /**
   * <p>The date and time that the site was created.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>The device state.</p>
   */
  State?: DeviceState | string;

  /**
   * <p>The tags for the device.</p>
   */
  Tags?: Tag[];
}

export namespace Device {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Device): any => ({
    ...obj,
    ...(obj.Location && { Location: SENSITIVE_STRING }),
  });
}

export interface CreateDeviceResponse {
  /**
   * <p>Information about the device.</p>
   */
  Device?: Device;
}

export namespace CreateDeviceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDeviceResponse): any => ({
    ...obj,
    ...(obj.Device && { Device: Device.filterSensitiveLog(obj.Device) }),
  });
}

export interface CreateGlobalNetworkRequest {
  /**
   * <p>A description of the global network.</p>
   *         <p>Constraints: Maximum length of 256 characters.</p>
   */
  Description?: string;

  /**
   * <p>The tags to apply to the resource during creation.</p>
   */
  Tags?: Tag[];
}

export namespace CreateGlobalNetworkRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateGlobalNetworkRequest): any => ({
    ...obj,
  });
}

export enum GlobalNetworkState {
  available = "AVAILABLE",
  deleting = "DELETING",
  pending = "PENDING",
  updating = "UPDATING",
}

/**
 * <p>Describes a global network.</p>
 */
export interface GlobalNetwork {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the global network.</p>
   */
  GlobalNetworkArn?: string;

  /**
   * <p>The description of the global network.</p>
   */
  Description?: string;

  /**
   * <p>The date and time that the global network was created.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>The state of the global network.</p>
   */
  State?: GlobalNetworkState | string;

  /**
   * <p>The tags for the global network.</p>
   */
  Tags?: Tag[];
}

export namespace GlobalNetwork {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GlobalNetwork): any => ({
    ...obj,
  });
}

export interface CreateGlobalNetworkResponse {
  /**
   * <p>Information about the global network object.</p>
   */
  GlobalNetwork?: GlobalNetwork;
}

export namespace CreateGlobalNetworkResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateGlobalNetworkResponse): any => ({
    ...obj,
  });
}

export interface CreateLinkRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>A description of the link.</p>
   *         <p>Constraints: Maximum length of 256 characters.</p>
   */
  Description?: string;

  /**
   * <p>The type of the link.</p>
   *         <p>Constraints: Maximum length of 128 characters. Cannot include the following characters: | \ ^</p>
   */
  Type?: string;

  /**
   * <p> The upload speed and download speed in Mbps. </p>
   */
  Bandwidth: Bandwidth | undefined;

  /**
   * <p>The provider of the link.</p>
   *         <p>Constraints: Maximum length of 128 characters. Cannot include the following characters: | \ ^</p>
   */
  Provider?: string;

  /**
   * <p>The ID of the site.</p>
   */
  SiteId: string | undefined;

  /**
   * <p>The tags to apply to the resource during creation.</p>
   */
  Tags?: Tag[];
}

export namespace CreateLinkRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateLinkRequest): any => ({
    ...obj,
  });
}

export enum LinkState {
  available = "AVAILABLE",
  deleting = "DELETING",
  pending = "PENDING",
  updating = "UPDATING",
}

/**
 * <p>Describes a link.</p>
 */
export interface Link {
  /**
   * <p>The ID of the link.</p>
   */
  LinkId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the link.</p>
   */
  LinkArn?: string;

  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId?: string;

  /**
   * <p>The ID of the site.</p>
   */
  SiteId?: string;

  /**
   * <p>The description of the link.</p>
   */
  Description?: string;

  /**
   * <p>The type of the link.</p>
   */
  Type?: string;

  /**
   * <p>The bandwidth for the link.</p>
   */
  Bandwidth?: Bandwidth;

  /**
   * <p>The provider of the link.</p>
   */
  Provider?: string;

  /**
   * <p>The date and time that the link was created.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>The state of the link.</p>
   */
  State?: LinkState | string;

  /**
   * <p>The tags for the link.</p>
   */
  Tags?: Tag[];
}

export namespace Link {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Link): any => ({
    ...obj,
  });
}

export interface CreateLinkResponse {
  /**
   * <p>Information about the link.</p>
   */
  Link?: Link;
}

export namespace CreateLinkResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateLinkResponse): any => ({
    ...obj,
  });
}

export interface CreateSiteRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>A description of your site.</p>
   *         <p>Constraints: Maximum length of 256 characters.</p>
   */
  Description?: string;

  /**
   * <p>The site location. This information is used for visualization in the Network Manager console. If you specify the address, the latitude and longitude are automatically calculated.</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>Address</code>: The physical address of the site.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Latitude</code>: The latitude of the site. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Longitude</code>: The longitude of the site.</p>
   *             </li>
   *          </ul>
   */
  Location?: Location;

  /**
   * <p>The tags to apply to the resource during creation.</p>
   */
  Tags?: Tag[];
}

export namespace CreateSiteRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateSiteRequest): any => ({
    ...obj,
    ...(obj.Location && { Location: SENSITIVE_STRING }),
  });
}

export enum SiteState {
  available = "AVAILABLE",
  deleting = "DELETING",
  pending = "PENDING",
  updating = "UPDATING",
}

/**
 * <p>Describes a site.</p>
 */
export interface Site {
  /**
   * <p>The ID of the site.</p>
   */
  SiteId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the site.</p>
   */
  SiteArn?: string;

  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId?: string;

  /**
   * <p>The description of the site.</p>
   */
  Description?: string;

  /**
   * <p>The location of the site.</p>
   */
  Location?: Location;

  /**
   * <p>The date and time that the site was created.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>The state of the site.</p>
   */
  State?: SiteState | string;

  /**
   * <p>The tags for the site.</p>
   */
  Tags?: Tag[];
}

export namespace Site {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Site): any => ({
    ...obj,
    ...(obj.Location && { Location: SENSITIVE_STRING }),
  });
}

export interface CreateSiteResponse {
  /**
   * <p>Information about the site.</p>
   */
  Site?: Site;
}

export namespace CreateSiteResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateSiteResponse): any => ({
    ...obj,
    ...(obj.Site && { Site: Site.filterSensitiveLog(obj.Site) }),
  });
}

export interface DeleteConnectionRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The ID of the connection.</p>
   */
  ConnectionId: string | undefined;
}

export namespace DeleteConnectionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteConnectionRequest): any => ({
    ...obj,
  });
}

export interface DeleteConnectionResponse {
  /**
   * <p>Information about the connection.</p>
   */
  Connection?: Connection;
}

export namespace DeleteConnectionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteConnectionResponse): any => ({
    ...obj,
  });
}

export interface DeleteDeviceRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The ID of the device.</p>
   */
  DeviceId: string | undefined;
}

export namespace DeleteDeviceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDeviceRequest): any => ({
    ...obj,
  });
}

export interface DeleteDeviceResponse {
  /**
   * <p>Information about the device.</p>
   */
  Device?: Device;
}

export namespace DeleteDeviceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDeviceResponse): any => ({
    ...obj,
    ...(obj.Device && { Device: Device.filterSensitiveLog(obj.Device) }),
  });
}

export interface DeleteGlobalNetworkRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;
}

export namespace DeleteGlobalNetworkRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteGlobalNetworkRequest): any => ({
    ...obj,
  });
}

export interface DeleteGlobalNetworkResponse {
  /**
   * <p>Information about the global network.</p>
   */
  GlobalNetwork?: GlobalNetwork;
}

export namespace DeleteGlobalNetworkResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteGlobalNetworkResponse): any => ({
    ...obj,
  });
}

export interface DeleteLinkRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The ID of the link.</p>
   */
  LinkId: string | undefined;
}

export namespace DeleteLinkRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteLinkRequest): any => ({
    ...obj,
  });
}

export interface DeleteLinkResponse {
  /**
   * <p>Information about the link.</p>
   */
  Link?: Link;
}

export namespace DeleteLinkResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteLinkResponse): any => ({
    ...obj,
  });
}

export interface DeleteSiteRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The ID of the site.</p>
   */
  SiteId: string | undefined;
}

export namespace DeleteSiteRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteSiteRequest): any => ({
    ...obj,
  });
}

export interface DeleteSiteResponse {
  /**
   * <p>Information about the site.</p>
   */
  Site?: Site;
}

export namespace DeleteSiteResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteSiteResponse): any => ({
    ...obj,
    ...(obj.Site && { Site: Site.filterSensitiveLog(obj.Site) }),
  });
}

export interface DeregisterTransitGatewayRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the transit gateway.</p>
   */
  TransitGatewayArn: string | undefined;
}

export namespace DeregisterTransitGatewayRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeregisterTransitGatewayRequest): any => ({
    ...obj,
  });
}

export enum TransitGatewayRegistrationState {
  available = "AVAILABLE",
  deleted = "DELETED",
  deleting = "DELETING",
  failed = "FAILED",
  pending = "PENDING",
}

/**
 * <p>Describes the status of a transit gateway registration.</p>
 */
export interface TransitGatewayRegistrationStateReason {
  /**
   * <p>The code for the state reason.</p>
   */
  Code?: TransitGatewayRegistrationState | string;

  /**
   * <p>The message for the state reason.</p>
   */
  Message?: string;
}

export namespace TransitGatewayRegistrationStateReason {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TransitGatewayRegistrationStateReason): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the registration of a transit gateway to a global network.</p>
 */
export interface TransitGatewayRegistration {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the transit gateway.</p>
   */
  TransitGatewayArn?: string;

  /**
   * <p>The state of the transit gateway registration.</p>
   */
  State?: TransitGatewayRegistrationStateReason;
}

export namespace TransitGatewayRegistration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TransitGatewayRegistration): any => ({
    ...obj,
  });
}

export interface DeregisterTransitGatewayResponse {
  /**
   * <p>The transit gateway registration information.</p>
   */
  TransitGatewayRegistration?: TransitGatewayRegistration;
}

export namespace DeregisterTransitGatewayResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeregisterTransitGatewayResponse): any => ({
    ...obj,
  });
}

export interface DescribeGlobalNetworksRequest {
  /**
   * <p>The IDs of one or more global networks. The maximum is 10.</p>
   */
  GlobalNetworkIds?: string[];

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export namespace DescribeGlobalNetworksRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeGlobalNetworksRequest): any => ({
    ...obj,
  });
}

export interface DescribeGlobalNetworksResponse {
  /**
   * <p>Information about the global networks.</p>
   */
  GlobalNetworks?: GlobalNetwork[];

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export namespace DescribeGlobalNetworksResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeGlobalNetworksResponse): any => ({
    ...obj,
  });
}

export interface DisassociateCustomerGatewayRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the customer gateway.</p>
   */
  CustomerGatewayArn: string | undefined;
}

export namespace DisassociateCustomerGatewayRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateCustomerGatewayRequest): any => ({
    ...obj,
  });
}

export interface DisassociateCustomerGatewayResponse {
  /**
   * <p>Information about the customer gateway association.</p>
   */
  CustomerGatewayAssociation?: CustomerGatewayAssociation;
}

export namespace DisassociateCustomerGatewayResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateCustomerGatewayResponse): any => ({
    ...obj,
  });
}

export interface DisassociateLinkRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The ID of the device.</p>
   */
  DeviceId: string | undefined;

  /**
   * <p>The ID of the link.</p>
   */
  LinkId: string | undefined;
}

export namespace DisassociateLinkRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateLinkRequest): any => ({
    ...obj,
  });
}

export interface DisassociateLinkResponse {
  /**
   * <p>Information about the link association.</p>
   */
  LinkAssociation?: LinkAssociation;
}

export namespace DisassociateLinkResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateLinkResponse): any => ({
    ...obj,
  });
}

export interface DisassociateTransitGatewayConnectPeerRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the transit gateway Connect peer.</p>
   */
  TransitGatewayConnectPeerArn: string | undefined;
}

export namespace DisassociateTransitGatewayConnectPeerRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateTransitGatewayConnectPeerRequest): any => ({
    ...obj,
  });
}

export interface DisassociateTransitGatewayConnectPeerResponse {
  /**
   * <p>The transit gateway Connect peer association.</p>
   */
  TransitGatewayConnectPeerAssociation?: TransitGatewayConnectPeerAssociation;
}

export namespace DisassociateTransitGatewayConnectPeerResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateTransitGatewayConnectPeerResponse): any => ({
    ...obj,
  });
}

export interface GetConnectionsRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>One or more connection IDs.</p>
   */
  ConnectionIds?: string[];

  /**
   * <p>The ID of the device.</p>
   */
  DeviceId?: string;

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export namespace GetConnectionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetConnectionsRequest): any => ({
    ...obj,
  });
}

export interface GetConnectionsResponse {
  /**
   * <p>Information about the connections.</p>
   */
  Connections?: Connection[];

  /**
   * <p>The token to use for the next page of results.</p>
   */
  NextToken?: string;
}

export namespace GetConnectionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetConnectionsResponse): any => ({
    ...obj,
  });
}

export interface GetCustomerGatewayAssociationsRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>One or more customer gateway Amazon Resource Names (ARNs). The maximum is 10.</p>
   */
  CustomerGatewayArns?: string[];

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export namespace GetCustomerGatewayAssociationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetCustomerGatewayAssociationsRequest): any => ({
    ...obj,
  });
}

export interface GetCustomerGatewayAssociationsResponse {
  /**
   * <p>The customer gateway associations.</p>
   */
  CustomerGatewayAssociations?: CustomerGatewayAssociation[];

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export namespace GetCustomerGatewayAssociationsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetCustomerGatewayAssociationsResponse): any => ({
    ...obj,
  });
}

export interface GetDevicesRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>One or more device IDs. The maximum is 10.</p>
   */
  DeviceIds?: string[];

  /**
   * <p>The ID of the site.</p>
   */
  SiteId?: string;

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export namespace GetDevicesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDevicesRequest): any => ({
    ...obj,
  });
}

export interface GetDevicesResponse {
  /**
   * <p>The devices.</p>
   */
  Devices?: Device[];

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export namespace GetDevicesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDevicesResponse): any => ({
    ...obj,
    ...(obj.Devices && { Devices: obj.Devices.map((item) => Device.filterSensitiveLog(item)) }),
  });
}

export interface GetLinkAssociationsRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The ID of the device.</p>
   */
  DeviceId?: string;

  /**
   * <p>The ID of the link.</p>
   */
  LinkId?: string;

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export namespace GetLinkAssociationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetLinkAssociationsRequest): any => ({
    ...obj,
  });
}

export interface GetLinkAssociationsResponse {
  /**
   * <p>The link associations.</p>
   */
  LinkAssociations?: LinkAssociation[];

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export namespace GetLinkAssociationsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetLinkAssociationsResponse): any => ({
    ...obj,
  });
}

export interface GetLinksRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>One or more link IDs. The maximum is 10.</p>
   */
  LinkIds?: string[];

  /**
   * <p>The ID of the site.</p>
   */
  SiteId?: string;

  /**
   * <p>The link type.</p>
   */
  Type?: string;

  /**
   * <p>The link provider.</p>
   */
  Provider?: string;

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export namespace GetLinksRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetLinksRequest): any => ({
    ...obj,
  });
}

export interface GetLinksResponse {
  /**
   * <p>The links.</p>
   */
  Links?: Link[];

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export namespace GetLinksResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetLinksResponse): any => ({
    ...obj,
  });
}

export interface GetNetworkResourceCountsRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The resource type.</p>
   *          <p>The following are the supported resource types for Direct Connect:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>dxcon</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>dx-gateway</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>dx-vif</code>
   *                </p>
   *             </li>
   *          </ul>
   *
   *         <p>The following are the supported resource types for Network Manager:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>connection</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>device</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>link</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>site</code>
   *                </p>
   *             </li>
   *          </ul>
   *
   *         <p>The following are the supported resource types for Amazon VPC:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>customer-gateway</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>transit-gateway</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>transit-gateway-attachment</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>transit-gateway-connect-peer</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>transit-gateway-route-table</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>vpn-connection</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  ResourceType?: string;

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export namespace GetNetworkResourceCountsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetNetworkResourceCountsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a resource count.</p>
 */
export interface NetworkResourceCount {
  /**
   * <p>The resource type.</p>
   */
  ResourceType?: string;

  /**
   * <p>The resource count.</p>
   */
  Count?: number;
}

export namespace NetworkResourceCount {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NetworkResourceCount): any => ({
    ...obj,
  });
}

export interface GetNetworkResourceCountsResponse {
  /**
   * <p>The count of resources.</p>
   */
  NetworkResourceCounts?: NetworkResourceCount[];

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export namespace GetNetworkResourceCountsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetNetworkResourceCountsResponse): any => ({
    ...obj,
  });
}

export interface GetNetworkResourceRelationshipsRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The ARN of the registered gateway.</p>
   */
  RegisteredGatewayArn?: string;

  /**
   * <p>The Amazon Web Services Region.</p>
   */
  AwsRegion?: string;

  /**
   * <p>The Amazon Web Services account ID.</p>
   */
  AccountId?: string;

  /**
   * <p>The resource type.</p>
   *         <p>The following are the supported resource types for Direct Connect:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>dxcon</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>dx-gateway</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>dx-vif</code>
   *                </p>
   *             </li>
   *          </ul>
   *
   *         <p>The following are the supported resource types for Network Manager:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>connection</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>device</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>link</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>site</code>
   *                </p>
   *             </li>
   *          </ul>
   *
   *         <p>The following are the supported resource types for Amazon VPC:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>customer-gateway</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>transit-gateway</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>transit-gateway-attachment</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>transit-gateway-connect-peer</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>transit-gateway-route-table</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>vpn-connection</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  ResourceType?: string;

  /**
   * <p>The ARN of the gateway.</p>
   */
  ResourceArn?: string;

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export namespace GetNetworkResourceRelationshipsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetNetworkResourceRelationshipsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a resource relationship.</p>
 */
export interface Relationship {
  /**
   * <p>The ARN of the resource.</p>
   */
  From?: string;

  /**
   * <p>The ARN of the resource.</p>
   */
  To?: string;
}

export namespace Relationship {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Relationship): any => ({
    ...obj,
  });
}

export interface GetNetworkResourceRelationshipsResponse {
  /**
   * <p>The resource relationships.</p>
   */
  Relationships?: Relationship[];

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export namespace GetNetworkResourceRelationshipsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetNetworkResourceRelationshipsResponse): any => ({
    ...obj,
  });
}

export interface GetNetworkResourcesRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The ARN of the gateway.</p>
   */
  RegisteredGatewayArn?: string;

  /**
   * <p>The Amazon Web Services Region.</p>
   */
  AwsRegion?: string;

  /**
   * <p>The Amazon Web Services account ID.</p>
   */
  AccountId?: string;

  /**
   * <p>The resource type.</p>
   *          <p>The following are the supported resource types for Direct Connect:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>dxcon</code> - The definition model is
   *                     <a href="https://docs.aws.amazon.com/directconnect/latest/APIReference/API_Connection.html">Connection</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>dx-gateway</code> - The definition model is
   *                     <a href="https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DirectConnectGateway.html">DirectConnectGateway</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>dx-vif</code> - The definition model is
   *                     <a href="https://docs.aws.amazon.com/directconnect/latest/APIReference/API_VirtualInterface.html">VirtualInterface</a>.</p>
   *             </li>
   *          </ul>
   *
   *          <p>The following are the supported resource types for Network Manager:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>connection</code> - The definition model is
   *                     <a href="https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_Connection.html">Connection</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>device</code> - The definition model is
   *                     <a href="https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_Device.html">Device</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>link</code> - The definition model is
   *                     <a href="https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_Link.html">Link</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>site</code> - The definition model is
   *                     <a href="https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_Site.html">Site</a>.</p>
   *             </li>
   *          </ul>
   *
   *          <p>The following are the supported resource types for Amazon VPC:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>customer-gateway</code> - The definition model is
   *                     <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CustomerGateway.html">CustomerGateway</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>transit-gateway</code> - The definition model is
   *                     <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_TransitGateway.html">TransitGateway</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>transit-gateway-attachment</code> - The definition model is
   *                     <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_TransitGatewayAttachment.html">TransitGatewayAttachment</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>transit-gateway-connect-peer</code> - The definition model is
   *                     <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_TransitGatewayConnectPeer.html">TransitGatewayConnectPeer</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>transit-gateway-route-table</code> - The definition model is
   *                     <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_TransitGatewayRouteTable.html">TransitGatewayRouteTable</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>vpn-connection</code> - The definition model is
   *                     <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_VpnConnection.html">VpnConnection</a>.</p>
   *             </li>
   *          </ul>
   */
  ResourceType?: string;

  /**
   * <p>The ARN of the resource.</p>
   */
  ResourceArn?: string;

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export namespace GetNetworkResourcesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetNetworkResourcesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a network resource.</p>
 */
export interface NetworkResource {
  /**
   * <p>The ARN of the gateway.</p>
   */
  RegisteredGatewayArn?: string;

  /**
   * <p>The Amazon Web Services Region.</p>
   */
  AwsRegion?: string;

  /**
   * <p>The Amazon Web Services account ID.</p>
   */
  AccountId?: string;

  /**
   * <p>The resource type.</p>
   *          <p>The following are the supported resource types for Direct Connect:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>dxcon</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>dx-gateway</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>dx-vif</code>
   *                </p>
   *             </li>
   *          </ul>
   *
   *         <p>The following are the supported resource types for Network Manager:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>connection</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>device</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>link</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>site</code>
   *                </p>
   *             </li>
   *          </ul>
   *
   *         <p>The following are the supported resource types for Amazon VPC:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>customer-gateway</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>transit-gateway</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>transit-gateway-attachment</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>transit-gateway-connect-peer</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>transit-gateway-route-table</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>vpn-connection</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  ResourceType?: string;

  /**
   * <p>The ID of the resource.</p>
   */
  ResourceId?: string;

  /**
   * <p>The ARN of the resource.</p>
   */
  ResourceArn?: string;

  /**
   * <p>Information about the resource, in JSON format. Network Manager gets this information by describing the resource using its Describe API call.</p>
   */
  Definition?: string;

  /**
   * <p>The time that the resource definition was retrieved.</p>
   */
  DefinitionTimestamp?: Date;

  /**
   * <p>The tags.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The resource metadata.</p>
   */
  Metadata?: { [key: string]: string };
}

export namespace NetworkResource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NetworkResource): any => ({
    ...obj,
  });
}

export interface GetNetworkResourcesResponse {
  /**
   * <p>The network resources.</p>
   */
  NetworkResources?: NetworkResource[];

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export namespace GetNetworkResourcesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetNetworkResourcesResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a route table.</p>
 */
export interface RouteTableIdentifier {
  /**
   * <p>The ARN of the transit gateway route table.</p>
   */
  TransitGatewayRouteTableArn?: string;
}

export namespace RouteTableIdentifier {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RouteTableIdentifier): any => ({
    ...obj,
  });
}

export enum RouteState {
  ACTIVE = "ACTIVE",
  BLACKHOLE = "BLACKHOLE",
}

export enum RouteType {
  PROPAGATED = "PROPAGATED",
  STATIC = "STATIC",
}

export interface GetNetworkRoutesRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The ID of the route table.</p>
   */
  RouteTableIdentifier: RouteTableIdentifier | undefined;

  /**
   * <p>An exact CIDR block.</p>
   */
  ExactCidrMatches?: string[];

  /**
   * <p>The most specific route that matches the traffic (longest prefix match).</p>
   */
  LongestPrefixMatches?: string[];

  /**
   * <p>The routes with a subnet that match the specified CIDR filter.</p>
   */
  SubnetOfMatches?: string[];

  /**
   * <p>The routes with a CIDR that encompasses the CIDR filter. Example: If you specify 10.0.1.0/30, then the result returns 10.0.1.0/29.</p>
   */
  SupernetOfMatches?: string[];

  /**
   * <p>The IDs of the prefix lists.</p>
   */
  PrefixListIds?: string[];

  /**
   * <p>The route states.</p>
   */
  States?: (RouteState | string)[];

  /**
   * <p>The route types.</p>
   */
  Types?: (RouteType | string)[];

  /**
   * <p>Filter by route table destination. Possible Values: TRANSIT_GATEWAY_ATTACHMENT_ID, RESOURCE_ID, or RESOURCE_TYPE.</p>
   */
  DestinationFilters?: { [key: string]: string[] };
}

export namespace GetNetworkRoutesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetNetworkRoutesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the destination of a network route.</p>
 */
export interface NetworkRouteDestination {
  /**
   * <p>The ID of the transit gateway attachment.</p>
   */
  TransitGatewayAttachmentId?: string;

  /**
   * <p>The resource type.</p>
   */
  ResourceType?: string;

  /**
   * <p>The ID of the resource.</p>
   */
  ResourceId?: string;
}

export namespace NetworkRouteDestination {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NetworkRouteDestination): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a network route.</p>
 */
export interface NetworkRoute {
  /**
   * <p>A unique identifier for the route, such as a CIDR block.</p>
   */
  DestinationCidrBlock?: string;

  /**
   * <p>The destinations.</p>
   */
  Destinations?: NetworkRouteDestination[];

  /**
   * <p>The ID of the prefix list.</p>
   */
  PrefixListId?: string;

  /**
   * <p>The route state. The possible values are <code>active</code> and <code>blackhole</code>.</p>
   */
  State?: RouteState | string;

  /**
   * <p>The route type. The possible values are <code>propagated</code> and <code>static</code>.</p>
   */
  Type?: RouteType | string;
}

export namespace NetworkRoute {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NetworkRoute): any => ({
    ...obj,
  });
}

export enum RouteTableType {
  TRANSIT_GATEWAY_ROUTE_TABLE = "TRANSIT_GATEWAY_ROUTE_TABLE",
}

export interface GetNetworkRoutesResponse {
  /**
   * <p>The ARN of the route table.</p>
   */
  RouteTableArn?: string;

  /**
   * <p>The route table type.</p>
   */
  RouteTableType?: RouteTableType | string;

  /**
   * <p>The route table creation time.</p>
   */
  RouteTableTimestamp?: Date;

  /**
   * <p>The network routes.</p>
   */
  NetworkRoutes?: NetworkRoute[];
}

export namespace GetNetworkRoutesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetNetworkRoutesResponse): any => ({
    ...obj,
  });
}

export interface GetNetworkTelemetryRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The ARN of the gateway.</p>
   */
  RegisteredGatewayArn?: string;

  /**
   * <p>The Amazon Web Services Region.</p>
   */
  AwsRegion?: string;

  /**
   * <p>The Amazon Web Services account ID.</p>
   */
  AccountId?: string;

  /**
   * <p>The resource type.</p>
   *         <p>The following are the supported resource types for Direct Connect:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>dxcon</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>dx-gateway</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>dx-vif</code>
   *                </p>
   *             </li>
   *          </ul>
   *
   *         <p>The following are the supported resource types for Network Manager:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>connection</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>device</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>link</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>site</code>
   *                </p>
   *             </li>
   *          </ul>
   *
   *         <p>The following are the supported resource types for Amazon VPC:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>customer-gateway</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>transit-gateway</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>transit-gateway-attachment</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>transit-gateway-connect-peer</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>transit-gateway-route-table</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>vpn-connection</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  ResourceType?: string;

  /**
   * <p>The ARN of the resource.</p>
   */
  ResourceArn?: string;

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export namespace GetNetworkTelemetryRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetNetworkTelemetryRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the telemetry information for a resource.</p>
 */
export interface NetworkTelemetry {
  /**
   * <p>The ARN of the gateway.</p>
   */
  RegisteredGatewayArn?: string;

  /**
   * <p>The Amazon Web Services Region.</p>
   */
  AwsRegion?: string;

  /**
   * <p>The Amazon Web Services account ID.</p>
   */
  AccountId?: string;

  /**
   * <p>The resource type.</p>
   */
  ResourceType?: string;

  /**
   * <p>The ID of the resource.</p>
   */
  ResourceId?: string;

  /**
   * <p>The ARN of the resource.</p>
   */
  ResourceArn?: string;

  /**
   * <p>The address.</p>
   */
  Address?: string;

  /**
   * <p>The connection health.</p>
   */
  Health?: ConnectionHealth;
}

export namespace NetworkTelemetry {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NetworkTelemetry): any => ({
    ...obj,
  });
}

export interface GetNetworkTelemetryResponse {
  /**
   * <p>The network telemetry.</p>
   */
  NetworkTelemetry?: NetworkTelemetry[];

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export namespace GetNetworkTelemetryResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetNetworkTelemetryResponse): any => ({
    ...obj,
  });
}

export interface GetRouteAnalysisRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The ID of the route analysis.</p>
   */
  RouteAnalysisId: string | undefined;
}

export namespace GetRouteAnalysisRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetRouteAnalysisRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a source or a destination.</p>
 */
export interface RouteAnalysisEndpointOptions {
  /**
   * <p>The ARN of the transit gateway attachment.</p>
   */
  TransitGatewayAttachmentArn?: string;

  /**
   * <p>The ARN of the transit gateway.</p>
   */
  TransitGatewayArn?: string;

  /**
   * <p>The IP address.</p>
   */
  IpAddress?: string;
}

export namespace RouteAnalysisEndpointOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RouteAnalysisEndpointOptions): any => ({
    ...obj,
  });
}

export enum RouteAnalysisCompletionReasonCode {
  BLACKHOLE_ROUTE_FOR_DESTINATION_FOUND = "BLACKHOLE_ROUTE_FOR_DESTINATION_FOUND",
  CYCLIC_PATH_DETECTED = "CYCLIC_PATH_DETECTED",
  INACTIVE_ROUTE_FOR_DESTINATION_FOUND = "INACTIVE_ROUTE_FOR_DESTINATION_FOUND",
  MAX_HOPS_EXCEEDED = "MAX_HOPS_EXCEEDED",
  NO_DESTINATION_ARN_PROVIDED = "NO_DESTINATION_ARN_PROVIDED",
  POSSIBLE_MIDDLEBOX = "POSSIBLE_MIDDLEBOX",
  ROUTE_NOT_FOUND = "ROUTE_NOT_FOUND",
  TRANSIT_GATEWAY_ATTACHMENT = "TRANSIT_GATEWAY_ATTACHMENT_ATTACH_ARN_NO_MATCH",
  TRANSIT_GATEWAY_ATTACHMENT_NOT_FOUND = "TRANSIT_GATEWAY_ATTACHMENT_NOT_FOUND",
  TRANSIT_GATEWAY_ATTACHMENT_NOT_IN_TRANSIT_GATEWAY = "TRANSIT_GATEWAY_ATTACHMENT_NOT_IN_TRANSIT_GATEWAY",
  TRANSIT_GATEWAY_ATTACHMENT_STABLE_ROUTE_TABLE_NOT_FOUND = "TRANSIT_GATEWAY_ATTACHMENT_STABLE_ROUTE_TABLE_NOT_FOUND",
}

export enum RouteAnalysisCompletionResultCode {
  CONNECTED = "CONNECTED",
  NOT_CONNECTED = "NOT_CONNECTED",
}

/**
 * <p>Describes the status of an analysis at completion.</p>
 */
export interface RouteAnalysisCompletion {
  /**
   * <p>The result of the analysis. If the status is <code>NOT_CONNECTED</code>, check the
   *             reason code.</p>
   */
  ResultCode?: RouteAnalysisCompletionResultCode | string;

  /**
   * <p>The reason code. Available only if a connection is not found.</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>BLACKHOLE_ROUTE_FOR_DESTINATION_FOUND</code> - Found a black hole route with the destination CIDR block.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CYCLIC_PATH_DETECTED</code> - Found the same resource multiple times while traversing the path.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INACTIVE_ROUTE_FOR_DESTINATION_FOUND</code> - Found an inactive route with the destination CIDR block.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MAX_HOPS_EXCEEDED</code> - Analysis exceeded 64 hops without finding the destination.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ROUTE_NOT_FOUND</code> - Cannot find a route table with the destination CIDR block.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TGW_ATTACH_ARN_NO_MATCH</code> - Found an attachment, but not with the correct destination ARN.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TGW_ATTACH_NOT_FOUND</code> - Cannot find an attachment.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TGW_ATTACH_NOT_IN_TGW</code> - Found an attachment, but not to the correct transit gateway.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TGW_ATTACH_STABLE_ROUTE_TABLE_NOT_FOUND</code> - The state of the route table association is not associated.</p>
   *             </li>
   *          </ul>
   */
  ReasonCode?: RouteAnalysisCompletionReasonCode | string;

  /**
   * <p>Additional information about the path. Available only if a connection is not found.</p>
   */
  ReasonContext?: { [key: string]: string };
}

export namespace RouteAnalysisCompletion {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RouteAnalysisCompletion): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a network resource.</p>
 */
export interface NetworkResourceSummary {
  /**
   * <p>The ARN of the gateway.</p>
   */
  RegisteredGatewayArn?: string;

  /**
   * <p>The ARN of the resource.</p>
   */
  ResourceArn?: string;

  /**
   * <p>The resource type.</p>
   */
  ResourceType?: string;

  /**
   * <p>Information about the resource, in JSON format. Network Manager gets this information by describing the resource using its Describe API call.</p>
   */
  Definition?: string;

  /**
   * <p>The value for the Name tag.</p>
   */
  NameTag?: string;

  /**
   * <p>Indicates whether this is a middlebox appliance.</p>
   */
  IsMiddlebox?: boolean;
}

export namespace NetworkResourceSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NetworkResourceSummary): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a path component.</p>
 */
export interface PathComponent {
  /**
   * <p>The sequence number in the path. The destination is 0.</p>
   */
  Sequence?: number;

  /**
   * <p>The resource.</p>
   */
  Resource?: NetworkResourceSummary;

  /**
   * <p>The destination CIDR block in the route table.</p>
   */
  DestinationCidrBlock?: string;
}

export namespace PathComponent {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PathComponent): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a route analysis path.</p>
 */
export interface RouteAnalysisPath {
  /**
   * <p>The status of the analysis at completion.</p>
   */
  CompletionStatus?: RouteAnalysisCompletion;

  /**
   * <p>The route analysis path.</p>
   */
  Path?: PathComponent[];
}

export namespace RouteAnalysisPath {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RouteAnalysisPath): any => ({
    ...obj,
  });
}

export enum RouteAnalysisStatus {
  completed = "COMPLETED",
  failed = "FAILED",
  running = "RUNNING",
}

/**
 * <p>Describes a route analysis.</p>
 */
export interface RouteAnalysis {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId?: string;

  /**
   * <p>The ID of the AWS account that created the route analysis.</p>
   */
  OwnerAccountId?: string;

  /**
   * <p>The ID of the route analysis.</p>
   */
  RouteAnalysisId?: string;

  /**
   * <p>The time that the analysis started.</p>
   */
  StartTimestamp?: Date;

  /**
   * <p>The status of the route analysis.</p>
   */
  Status?: RouteAnalysisStatus | string;

  /**
   * <p>The source.</p>
   */
  Source?: RouteAnalysisEndpointOptions;

  /**
   * <p>The destination.</p>
   */
  Destination?: RouteAnalysisEndpointOptions;

  /**
   * <p>Indicates whether to analyze the return path. The return path is not analyzed if the forward path
   *             analysis does not succeed.</p>
   */
  IncludeReturnPath?: boolean;

  /**
   * <p>Indicates whether to include the location of middlebox appliances in the route analysis.</p>
   */
  UseMiddleboxes?: boolean;

  /**
   * <p>The forward path.</p>
   */
  ForwardPath?: RouteAnalysisPath;

  /**
   * <p>The return path.</p>
   */
  ReturnPath?: RouteAnalysisPath;
}

export namespace RouteAnalysis {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RouteAnalysis): any => ({
    ...obj,
  });
}

export interface GetRouteAnalysisResponse {
  /**
   * <p>The route analysis.</p>
   */
  RouteAnalysis?: RouteAnalysis;
}

export namespace GetRouteAnalysisResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetRouteAnalysisResponse): any => ({
    ...obj,
  });
}

export interface GetSitesRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>One or more site IDs. The maximum is 10.</p>
   */
  SiteIds?: string[];

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export namespace GetSitesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSitesRequest): any => ({
    ...obj,
  });
}

export interface GetSitesResponse {
  /**
   * <p>The sites.</p>
   */
  Sites?: Site[];

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export namespace GetSitesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSitesResponse): any => ({
    ...obj,
    ...(obj.Sites && { Sites: obj.Sites.map((item) => Site.filterSensitiveLog(item)) }),
  });
}

export interface GetTransitGatewayConnectPeerAssociationsRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>One or more transit gateway Connect peer Amazon Resource Names (ARNs).</p>
   */
  TransitGatewayConnectPeerArns?: string[];

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export namespace GetTransitGatewayConnectPeerAssociationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetTransitGatewayConnectPeerAssociationsRequest): any => ({
    ...obj,
  });
}

export interface GetTransitGatewayConnectPeerAssociationsResponse {
  /**
   * <p>Information about the transit gateway Connect peer associations.</p>
   */
  TransitGatewayConnectPeerAssociations?: TransitGatewayConnectPeerAssociation[];

  /**
   * <p>The token to use for the next page of results.</p>
   */
  NextToken?: string;
}

export namespace GetTransitGatewayConnectPeerAssociationsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetTransitGatewayConnectPeerAssociationsResponse): any => ({
    ...obj,
  });
}

export interface GetTransitGatewayRegistrationsRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The Amazon Resource Names (ARNs) of one or more transit gateways. The maximum is
   *             10.</p>
   */
  TransitGatewayArns?: string[];

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export namespace GetTransitGatewayRegistrationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetTransitGatewayRegistrationsRequest): any => ({
    ...obj,
  });
}

export interface GetTransitGatewayRegistrationsResponse {
  /**
   * <p>The transit gateway registrations.</p>
   */
  TransitGatewayRegistrations?: TransitGatewayRegistration[];

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export namespace GetTransitGatewayRegistrationsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetTransitGatewayRegistrationsResponse): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
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
   * <p>The list of tags.</p>
   */
  TagList?: Tag[];
}

export namespace ListTagsForResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
}

export interface RegisterTransitGatewayRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the transit gateway.</p>
   */
  TransitGatewayArn: string | undefined;
}

export namespace RegisterTransitGatewayRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RegisterTransitGatewayRequest): any => ({
    ...obj,
  });
}

export interface RegisterTransitGatewayResponse {
  /**
   * <p>Information about the transit gateway registration.</p>
   */
  TransitGatewayRegistration?: TransitGatewayRegistration;
}

export namespace RegisterTransitGatewayResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RegisterTransitGatewayResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a source or a destination.</p>
 */
export interface RouteAnalysisEndpointOptionsSpecification {
  /**
   * <p>The ARN of the transit gateway attachment.</p>
   */
  TransitGatewayAttachmentArn?: string;

  /**
   * <p>The IP address.</p>
   */
  IpAddress?: string;
}

export namespace RouteAnalysisEndpointOptionsSpecification {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RouteAnalysisEndpointOptionsSpecification): any => ({
    ...obj,
  });
}

export interface StartRouteAnalysisRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The source from which traffic originates.</p>
   */
  Source: RouteAnalysisEndpointOptionsSpecification | undefined;

  /**
   * <p>The destination.</p>
   */
  Destination: RouteAnalysisEndpointOptionsSpecification | undefined;

  /**
   * <p>Indicates whether to analyze the return path. The default is <code>false</code>.</p>
   */
  IncludeReturnPath?: boolean;

  /**
   * <p>Indicates whether to include the location of middlebox appliances in the route analysis.
   *             The default is <code>false</code>.</p>
   */
  UseMiddleboxes?: boolean;
}

export namespace StartRouteAnalysisRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartRouteAnalysisRequest): any => ({
    ...obj,
  });
}

export interface StartRouteAnalysisResponse {
  /**
   * <p>The route analysis.</p>
   */
  RouteAnalysis?: RouteAnalysis;
}

export namespace StartRouteAnalysisResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartRouteAnalysisResponse): any => ({
    ...obj,
  });
}

export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tags to apply to the specified resource.</p>
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

export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tag keys to remove from the specified resource.</p>
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

export interface UpdateConnectionRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The ID of the connection.</p>
   */
  ConnectionId: string | undefined;

  /**
   * <p>The ID of the link for the first device in the connection.</p>
   */
  LinkId?: string;

  /**
   * <p>The ID of the link for the second device in the connection.</p>
   */
  ConnectedLinkId?: string;

  /**
   * <p>A description of the connection.</p>
   *         <p>Length Constraints: Maximum length of 256 characters.</p>
   */
  Description?: string;
}

export namespace UpdateConnectionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateConnectionRequest): any => ({
    ...obj,
  });
}

export interface UpdateConnectionResponse {
  /**
   * <p>Information about the connection.</p>
   */
  Connection?: Connection;
}

export namespace UpdateConnectionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateConnectionResponse): any => ({
    ...obj,
  });
}

export interface UpdateDeviceRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The ID of the device.</p>
   */
  DeviceId: string | undefined;

  /**
   * <p>The Amazon Web Services location of the device, if applicable. For an on-premises device, you can omit this parameter.</p>
   */
  AWSLocation?: AWSLocation;

  /**
   * <p>A description of the device.</p>
   *         <p>Constraints: Maximum length of 256 characters.</p>
   */
  Description?: string;

  /**
   * <p>The type of the device.</p>
   */
  Type?: string;

  /**
   * <p>The vendor of the device.</p>
   *         <p>Constraints: Maximum length of 128 characters.</p>
   */
  Vendor?: string;

  /**
   * <p>The model of the device.</p>
   *         <p>Constraints: Maximum length of 128 characters.</p>
   */
  Model?: string;

  /**
   * <p>The serial number of the device.</p>
   *         <p>Constraints: Maximum length of 128 characters.</p>
   */
  SerialNumber?: string;

  /**
   * <p>Describes a location.</p>
   */
  Location?: Location;

  /**
   * <p>The ID of the site.</p>
   */
  SiteId?: string;
}

export namespace UpdateDeviceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateDeviceRequest): any => ({
    ...obj,
    ...(obj.Location && { Location: SENSITIVE_STRING }),
  });
}

export interface UpdateDeviceResponse {
  /**
   * <p>Information about the device.</p>
   */
  Device?: Device;
}

export namespace UpdateDeviceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateDeviceResponse): any => ({
    ...obj,
    ...(obj.Device && { Device: Device.filterSensitiveLog(obj.Device) }),
  });
}

export interface UpdateGlobalNetworkRequest {
  /**
   * <p>The ID of your global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>A description of the global network.</p>
   *         <p>Constraints: Maximum length of 256 characters.</p>
   */
  Description?: string;
}

export namespace UpdateGlobalNetworkRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateGlobalNetworkRequest): any => ({
    ...obj,
  });
}

export interface UpdateGlobalNetworkResponse {
  /**
   * <p>Information about the global network object.</p>
   */
  GlobalNetwork?: GlobalNetwork;
}

export namespace UpdateGlobalNetworkResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateGlobalNetworkResponse): any => ({
    ...obj,
  });
}

export interface UpdateLinkRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The ID of the link.</p>
   */
  LinkId: string | undefined;

  /**
   * <p>A description of the link.</p>
   *         <p>Constraints: Maximum length of 256 characters.</p>
   */
  Description?: string;

  /**
   * <p>The type of the link.</p>
   *         <p>Constraints: Maximum length of 128 characters.</p>
   */
  Type?: string;

  /**
   * <p>The upload and download speed in Mbps. </p>
   */
  Bandwidth?: Bandwidth;

  /**
   * <p>The provider of the link.</p>
   *         <p>Constraints: Maximum length of 128 characters.</p>
   */
  Provider?: string;
}

export namespace UpdateLinkRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateLinkRequest): any => ({
    ...obj,
  });
}

export interface UpdateLinkResponse {
  /**
   * <p>Information about the link.</p>
   */
  Link?: Link;
}

export namespace UpdateLinkResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateLinkResponse): any => ({
    ...obj,
  });
}

export interface UpdateNetworkResourceMetadataRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The ARN of the resource.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The resource metadata.</p>
   */
  Metadata: { [key: string]: string } | undefined;
}

export namespace UpdateNetworkResourceMetadataRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateNetworkResourceMetadataRequest): any => ({
    ...obj,
  });
}

export interface UpdateNetworkResourceMetadataResponse {
  /**
   * <p>The ARN of the resource.</p>
   */
  ResourceArn?: string;

  /**
   * <p>The updated resource metadata.</p>
   */
  Metadata?: { [key: string]: string };
}

export namespace UpdateNetworkResourceMetadataResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateNetworkResourceMetadataResponse): any => ({
    ...obj,
  });
}

export interface UpdateSiteRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The ID of your site.</p>
   */
  SiteId: string | undefined;

  /**
   * <p>A description of your site.</p>
   *         <p>Constraints: Maximum length of 256 characters.</p>
   */
  Description?: string;

  /**
   * <p>The site location:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>Address</code>: The physical address of the site.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Latitude</code>: The latitude of the site. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Longitude</code>: The longitude of the site.</p>
   *             </li>
   *          </ul>
   */
  Location?: Location;
}

export namespace UpdateSiteRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateSiteRequest): any => ({
    ...obj,
    ...(obj.Location && { Location: SENSITIVE_STRING }),
  });
}

export interface UpdateSiteResponse {
  /**
   * <p>Information about the site.</p>
   */
  Site?: Site;
}

export namespace UpdateSiteResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateSiteResponse): any => ({
    ...obj,
    ...(obj.Site && { Site: Site.filterSensitiveLog(obj.Site) }),
  });
}
