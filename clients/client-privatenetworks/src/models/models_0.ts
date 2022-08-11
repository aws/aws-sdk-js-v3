// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@aws-sdk/smithy-client";

import { PrivateNetworksServiceException as __BaseException } from "./PrivateNetworksServiceException";

/**
 * <p>You do not have permission to perform this operation.</p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
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
  }
}

export interface AcknowledgeOrderReceiptRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the order.</p>
   */
  orderArn: string | undefined;
}

export enum AcknowledgmentStatus {
  ACKNOWLEDGED = "ACKNOWLEDGED",
  ACKNOWLEDGING = "ACKNOWLEDGING",
  UNACKNOWLEDGED = "UNACKNOWLEDGED",
}

/**
 * <p>Information about an address.</p>
 */
export interface Address {
  /**
   * <p>The city for this address.</p>
   */
  city: string | undefined;

  /**
   * <p>The company name for this address.</p>
   */
  company?: string;

  /**
   * <p>The country for this address.</p>
   */
  country: string | undefined;

  /**
   * <p>The recipient's name for this address.</p>
   */
  name: string | undefined;

  /**
   * <p>The phone number for this address.</p>
   */
  phoneNumber?: string;

  /**
   * <p>The postal code for this address.</p>
   */
  postalCode: string | undefined;

  /**
   * <p>The state or province for this address.</p>
   */
  stateOrProvince: string | undefined;

  /**
   * <p>The first line of the street address.</p>
   */
  street1: string | undefined;

  /**
   * <p>The second line of the street address.</p>
   */
  street2?: string;

  /**
   * <p>The third line of the street address.</p>
   */
  street3?: string;
}

/**
 * <p>Information about tracking a shipment.</p>
 */
export interface TrackingInformation {
  /**
   * <p>The tracking number of the shipment.</p>
   */
  trackingNumber?: string;
}

/**
 * <p>Information about an order.</p>
 */
export interface Order {
  /**
   * <p>The Amazon Resource Name (ARN) of the order.</p>
   */
  orderArn?: string;

  /**
   * <p>The shipping address of the order.</p>
   */
  shippingAddress?: Address;

  /**
   * <p>The Amazon Resource Name (ARN) of the network associated with this order.</p>
   */
  networkArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the network site associated with this order.</p>
   */
  networkSiteArn?: string;

  /**
   * <p>The tracking information of the order.</p>
   */
  trackingInformation?: TrackingInformation[];

  /**
   * <p>The acknowledgement status of the order.</p>
   */
  acknowledgmentStatus?: AcknowledgmentStatus | string;

  /**
   * <p>The creation time of the order.</p>
   */
  createdAt?: Date;
}

export interface AcknowledgeOrderReceiptResponse {
  /**
   * <p>Information about the order.</p>
   */
  order: Order | undefined;
}

/**
 * <p>Information about an internal error.</p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  $retryable = {};
  /**
   * Advice to clients on when the call can be safely retried.
   */
  retryAfterSeconds?: number;

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
    this.retryAfterSeconds = opts.retryAfterSeconds;
  }
}

/**
 * <p>The resource was not found.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * Identifier of the affected resource.
   */
  resourceId: string | undefined;

  /**
   * Type of the affected resource.
   */
  resourceType: string | undefined;

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
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
  }
}

/**
 * <p>Information about a field that failed validation.</p>
 */
export interface ValidationExceptionField {
  /**
   * <p>The field name that failed validation.</p>
   */
  name: string | undefined;

  /**
   * <p>The message about the validation failure.</p>
   */
  message: string | undefined;
}

export enum ValidationExceptionReason {
  CANNOT_ASSUME_ROLE = "CANNOT_ASSUME_ROLE",
  CANNOT_PARSE = "CANNOT_PARSE",
  FIELD_VALIDATION_FAILED = "FIELD_VALIDATION_FAILED",
  OTHER = "OTHER",
  UNKNOWN_OPERATION = "UNKNOWN_OPERATION",
}

/**
 * <p>The request failed validation.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * Reason the request failed validation.
   */
  reason: ValidationExceptionReason | string | undefined;

  /**
   * The list of fields that caused the error, if applicable.
   */
  fieldList?: ValidationExceptionField[];

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
    this.reason = opts.reason;
    this.fieldList = opts.fieldList;
  }
}

export interface ActivateDeviceIdentifierRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the device identifier.</p>
   */
  deviceIdentifierArn: string | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Run_Instance_Idempotency.html">How to ensure
   *                 idempotency</a>.</p>
   */
  clientToken?: string;
}

export enum DeviceIdentifierStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}

/**
 * <p>Information about a subscriber of a device that can use a network.</p>
 */
export interface DeviceIdentifier {
  /**
   * <p>The Amazon Resource Name (ARN) of the device identifier.</p>
   */
  deviceIdentifierArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the traffic group to which the device identifier belongs.</p>
   */
  trafficGroupArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the network on which the device identifier appears.</p>
   */
  networkArn?: string;

  /**
   * <p>The International Mobile Subscriber Identity of the device identifier.</p>
   */
  imsi?: string;

  /**
   * <p>The Integrated Circuit Card Identifier of the device identifier.</p>
   */
  iccid?: string;

  /**
   * <p>The vendor of the device identifier.</p>
   */
  vendor?: string;

  /**
   * <p>The status of the device identifier.</p>
   */
  status?: DeviceIdentifierStatus | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the order used to purchase the device identifier.</p>
   */
  orderArn?: string;

  /**
   * <p>The creation time of this device identifier.</p>
   */
  createdAt?: Date;
}

export interface ActivateDeviceIdentifierResponse {
  /**
   * <p>Information about the device identifier.</p>
   */
  deviceIdentifier: DeviceIdentifier | undefined;

  /**
   * <p>
   *            The tags on the device identifier.
   *         </p>
   */
  tags?: Record<string, string>;
}

export interface ActivateNetworkSiteRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the network site.</p>
   */
  networkSiteArn: string | undefined;

  /**
   * <p>The shipping address of the network site.</p>
   */
  shippingAddress: Address | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Run_Instance_Idempotency.html">How to ensure
   *                 idempotency</a>.</p>
   */
  clientToken?: string;
}

/**
 * <p>Information about a name/value pair.</p>
 */
export interface NameValuePair {
  /**
   * <p>The name of the pair.</p>
   */
  name: string | undefined;

  /**
   * <p>The value of the pair.</p>
   */
  value?: string;
}

export enum NetworkResourceDefinitionType {
  DEVICE_IDENTIFIER = "DEVICE_IDENTIFIER",
  RADIO_UNIT = "RADIO_UNIT",
}

/**
 * <p>Information about a network resource definition.</p>
 */
export interface NetworkResourceDefinition {
  /**
   * <p>The type in the network resource definition.</p>
   */
  type: NetworkResourceDefinitionType | string | undefined;

  /**
   * <p>The options in the network resource definition.</p>
   */
  options?: NameValuePair[];

  /**
   * <p>The count in the network resource definition.</p>
   */
  count: number | undefined;
}

/**
 * <p>Information about a site plan.</p>
 */
export interface SitePlan {
  /**
   * <p>The resource definitions of the plan.</p>
   */
  resourceDefinitions?: NetworkResourceDefinition[];

  /**
   * <p>The options of the plan.</p>
   */
  options?: NameValuePair[];
}

export enum NetworkSiteStatus {
  AVAILABLE = "AVAILABLE",
  CREATED = "CREATED",
  DELETED = "DELETED",
  DEPROVISIONING = "DEPROVISIONING",
  PROVISIONING = "PROVISIONING",
}

/**
 * <p>Information about a network site.</p>
 */
export interface NetworkSite {
  /**
   * <p>The Amazon Resource Name (ARN) of the network site.</p>
   */
  networkSiteArn: string | undefined;

  /**
   * <p>The name of the network site.</p>
   */
  networkSiteName: string | undefined;

  /**
   * <p>The description of the network site.</p>
   */
  description?: string;

  /**
   * <p>The status of the network site.</p>
   */
  status: NetworkSiteStatus | string | undefined;

  /**
   * <p>The status reason of the network site.</p>
   */
  statusReason?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the network to which the network site belongs.</p>
   */
  networkArn: string | undefined;

  /**
   * <p>The pending plan of the network site.</p>
   */
  pendingPlan?: SitePlan;

  /**
   * <p>The current plan of the network site.</p>
   */
  currentPlan?: SitePlan;

  /**
   * <p>The creation time of the network site.</p>
   */
  createdAt?: Date;

  /**
   * <p>
   *             The parent Availability Zone for the network site.
   *         </p>
   */
  availabilityZone?: string;

  /**
   * <p>
   *             The parent Availability Zone ID for the network site.
   *         </p>
   */
  availabilityZoneId?: string;
}

export interface ActivateNetworkSiteResponse {
  /**
   * <p>Information about the network site.</p>
   */
  networkSite?: NetworkSite;
}

export enum ElevationReference {
  AGL = "AGL",
  AMSL = "AMSL",
}

export enum ElevationUnit {
  /**
   * Feet.
   */
  FEET = "FEET",
}

/**
 * <p>Information about a position.</p>
 */
export interface Position {
  /**
   * <p>The latitude of the position.</p>
   */
  latitude?: number;

  /**
   * <p>The longitude of the position.</p>
   */
  longitude?: number;

  /**
   * <p>The elevation of the equipment at this position.</p>
   */
  elevation?: number;

  /**
   * <p>The units used to measure the elevation of the position.</p>
   */
  elevationUnit?: ElevationUnit | string;

  /**
   * <p>The reference point from which elevation is reported.</p>
   */
  elevationReference?: ElevationReference | string;
}

export interface ConfigureAccessPointRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the network resource.</p>
   */
  accessPointArn: string | undefined;

  /**
   * <p>The position of the network resource.</p>
   */
  position?: Position;

  /**
   * <p>The CPI user name of the CPI user who is certifying the coordinates of the radio
   *             unit.</p>
   */
  cpiUsername?: string;

  /**
   * <p>The CPI user ID of the CPI user who is certifying the coordinates of the network resource. </p>
   */
  cpiUserId?: string;

  /**
   * <p>The CPI password associated with the CPI certificate in
   *             <code>cpiSecretKey</code>.</p>
   */
  cpiUserPassword?: string;

  /**
   * <p>A Base64 encoded string of the CPI certificate associated with the CPI user who is
   *             certifying the coordinates of the network resource. </p>
   */
  cpiSecretKey?: string;
}

export enum HealthStatus {
  HEALTHY = "HEALTHY",
  INITIAL = "INITIAL",
  UNHEALTHY = "UNHEALTHY",
}

export enum NetworkResourceStatus {
  AVAILABLE = "AVAILABLE",
  DELETED = "DELETED",
  DELETING = "DELETING",
  PENDING = "PENDING",
  PENDING_RETURN = "PENDING_RETURN",
  PROVISIONED = "PROVISIONED",
  PROVISIONING = "PROVISIONING",
  SHIPPED = "SHIPPED",
}

export enum NetworkResourceType {
  RADIO_UNIT = "RADIO_UNIT",
}

/**
 * <p>Information about a network resource.</p>
 */
export interface NetworkResource {
  /**
   * <p>The Amazon Resource Name (ARN) of the network resource.</p>
   */
  networkResourceArn?: string;

  /**
   * <p>The description of the network resource.</p>
   */
  description?: string;

  /**
   * <p>The type of the network resource.</p>
   */
  type?: NetworkResourceType | string;

  /**
   * <p>The status of the network resource.</p>
   */
  status?: NetworkResourceStatus | string;

  /**
   * <p>The status reason of the network resource.</p>
   */
  statusReason?: string;

  /**
   * <p>The vendor of the network resource.</p>
   */
  vendor?: string;

  /**
   * <p>The model of the network resource.</p>
   */
  model?: string;

  /**
   * <p>The serial number of the network resource.</p>
   */
  serialNumber?: string;

  /**
   * <p>The health of the network resource.</p>
   */
  health?: HealthStatus | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the network on which this network resource appears.</p>
   */
  networkArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the network site on which this network resource
   *             appears.</p>
   */
  networkSiteArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the order used to purchase this network resource.</p>
   */
  orderArn?: string;

  /**
   * <p>The attributes of the network resource.</p>
   */
  attributes?: NameValuePair[];

  /**
   * <p>The position of the network resource.</p>
   */
  position?: Position;

  /**
   * <p>The creation time of the network resource.</p>
   */
  createdAt?: Date;
}

export interface ConfigureAccessPointResponse {
  /**
   * <p>Information about the network resource.</p>
   */
  accessPoint: NetworkResource | undefined;
}

export interface CreateNetworkRequest {
  /**
   * <p>The name of the network. You can't change the name after you create the network.</p>
   */
  networkName: string | undefined;

  /**
   * <p>The description of the network.</p>
   */
  description?: string;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Run_Instance_Idempotency.html">How to ensure
   *                 idempotency</a>.</p>
   */
  clientToken?: string;

  /**
   * <p>
   *           The tags to apply to the network.
   *         </p>
   */
  tags?: Record<string, string>;
}

export enum NetworkStatus {
  AVAILABLE = "AVAILABLE",
  CREATED = "CREATED",
  DELETED = "DELETED",
  DEPROVISIONING = "DEPROVISIONING",
  PROVISIONING = "PROVISIONING",
}

/**
 * <p>Information about a network.</p>
 */
export interface Network {
  /**
   * <p>The Amazon Resource Name (ARN) of the network.</p>
   */
  networkArn: string | undefined;

  /**
   * <p>The name of the network.</p>
   */
  networkName: string | undefined;

  /**
   * <p>The description of the network.</p>
   */
  description?: string;

  /**
   * <p>The status of the network.</p>
   */
  status: NetworkStatus | string | undefined;

  /**
   * <p>The status reason of the network.</p>
   */
  statusReason?: string;

  /**
   * <p>The creation time of the network.</p>
   */
  createdAt?: Date;
}

export interface CreateNetworkResponse {
  /**
   * <p>Information about the network.</p>
   */
  network: Network | undefined;

  /**
   * <p>
   *          The network tags.
   *         </p>
   */
  tags?: Record<string, string>;
}

/**
 * <p>The limit was exceeded.</p>
 */
export class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException" = "LimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LimitExceededException, __BaseException>) {
    super({
      name: "LimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LimitExceededException.prototype);
  }
}

export interface CreateNetworkSiteRequest {
  /**
   * <p>The name of the site. You can't change the name after you create the site.</p>
   */
  networkSiteName: string | undefined;

  /**
   * <p>The description of the site.</p>
   */
  description?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the network.</p>
   */
  networkArn: string | undefined;

  /**
   * <p>Information about the pending plan for this site.</p>
   */
  pendingPlan?: SitePlan;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Run_Instance_Idempotency.html">How to ensure
   *                 idempotency</a>.</p>
   */
  clientToken?: string;

  /**
   * <p>The Availability Zone that is the parent of this site. You can't change the Availability Zone
   *         after you create the site.</p>
   */
  availabilityZone?: string;

  /**
   * <p>The ID of the Availability Zone that is the parent of this site. You can't change the Availability Zone
   *             after you create the site.</p>
   */
  availabilityZoneId?: string;

  /**
   * <p>
   *             The tags to apply to the network site.
   *         </p>
   */
  tags?: Record<string, string>;
}

export interface CreateNetworkSiteResponse {
  /**
   * <p>Information about the network site.</p>
   */
  networkSite?: NetworkSite;

  /**
   * <p>
   *             The network site tags.
   *         </p>
   */
  tags?: Record<string, string>;
}

export interface DeactivateDeviceIdentifierRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the device identifier.</p>
   */
  deviceIdentifierArn: string | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Run_Instance_Idempotency.html">How to ensure
   *                 idempotency</a>.</p>
   */
  clientToken?: string;
}

export interface DeactivateDeviceIdentifierResponse {
  /**
   * <p>Information about the device identifier.</p>
   */
  deviceIdentifier: DeviceIdentifier | undefined;
}

export interface DeleteNetworkRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the network.</p>
   */
  networkArn: string | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Run_Instance_Idempotency.html">How to ensure
   *                 idempotency</a>.</p>
   */
  clientToken?: string;
}

export interface DeleteNetworkResponse {
  /**
   * <p>Information about the network.</p>
   */
  network: Network | undefined;
}

export interface DeleteNetworkSiteRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the network site.</p>
   */
  networkSiteArn: string | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Run_Instance_Idempotency.html">How to ensure
   *                 idempotency</a>.</p>
   */
  clientToken?: string;
}

export interface DeleteNetworkSiteResponse {
  /**
   * <p>Information about the network site.</p>
   */
  networkSite?: NetworkSite;
}

export enum DeviceIdentifierFilterKeys {
  ORDER = "ORDER",
  STATUS = "STATUS",
  TRAFFIC_GROUP = "TRAFFIC_GROUP",
}

export interface GetDeviceIdentifierRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the device identifier.</p>
   */
  deviceIdentifierArn: string | undefined;
}

export interface GetDeviceIdentifierResponse {
  /**
   * <p>Information about the device identifier.</p>
   */
  deviceIdentifier?: DeviceIdentifier;

  /**
   * <p>
   *             The device identifier tags.
   *         </p>
   */
  tags?: Record<string, string>;
}

export interface GetNetworkRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the network.</p>
   */
  networkArn: string | undefined;
}

export interface GetNetworkResponse {
  /**
   * <p>Information about the network.</p>
   */
  network: Network | undefined;

  /**
   * <p>
   *             The network tags.
   *         </p>
   */
  tags?: Record<string, string>;
}

export interface GetNetworkResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the network resource.</p>
   */
  networkResourceArn: string | undefined;
}

export interface GetNetworkResourceResponse {
  /**
   * <p>Information about the network resource.</p>
   */
  networkResource: NetworkResource | undefined;

  /**
   * <p>
   *             The network resource tags.
   *         </p>
   */
  tags?: Record<string, string>;
}

export interface GetNetworkSiteRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the network site.</p>
   */
  networkSiteArn: string | undefined;
}

export interface GetNetworkSiteResponse {
  /**
   * <p>Information about the network site.</p>
   */
  networkSite?: NetworkSite;

  /**
   * <p>
   *             The network site tags.
   *         </p>
   */
  tags?: Record<string, string>;
}

export interface GetOrderRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the order.</p>
   */
  orderArn: string | undefined;
}

export interface GetOrderResponse {
  /**
   * <p>Information about the order.</p>
   */
  order: Order | undefined;

  /**
   * <p>
   *             The order tags.
   *         </p>
   */
  tags?: Record<string, string>;
}

export interface ListDeviceIdentifiersRequest {
  /**
   * <p>The filters.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>ORDER</code> - The Amazon Resource Name (ARN) of the order.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>STATUS</code> - The status (<code>ACTIVE</code> | <code>INACTIVE</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>TRAFFIC_GROUP</code> - The Amazon Resource Name (ARN) of the traffic group.</p>
   *             </li>
   *          </ul>
   *         <p>Filter values are case sensitive. If you specify multiple
   *          values for a filter, the values are joined with an <code>OR</code>, and the request returns
   *          all results that match any of the specified values.</p>
   */
  filters?: Record<string, string[]>;

  /**
   * <p>The Amazon Resource Name (ARN) of the network.</p>
   */
  networkArn: string | undefined;

  /**
   * <p>The token for the next page of results.</p>
   */
  startToken?: string;

  /**
   * <p>The maximum number of results to return.</p>
   */
  maxResults?: number;
}

export interface ListDeviceIdentifiersResponse {
  /**
   * <p>Information about the device identifiers.</p>
   */
  deviceIdentifiers?: DeviceIdentifier[];

  /**
   * <p>The token for the next page of results.</p>
   */
  nextToken?: string;
}

export enum NetworkResourceFilterKeys {
  ORDER = "ORDER",
  STATUS = "STATUS",
}

export interface ListNetworkResourcesRequest {
  /**
   * <p>The filters.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>ORDER</code> - The Amazon Resource Name (ARN) of the order.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>STATUS</code> - The status (<code>AVAILABLE</code> | <code>DELETED</code>
   *                     | <code>DELETING</code> | <code>PENDING</code> | <code>PENDING_RETURN</code>
   *                     | <code>PROVISIONING</code> | <code>SHIPPED</code>).</p>
   *             </li>
   *          </ul>
   *         <p>Filter values are case sensitive. If you specify multiple
   *          values for a filter, the values are joined with an <code>OR</code>, and the request returns
   *          all results that match any of the specified values.</p>
   */
  filters?: Record<string, string[]>;

  /**
   * <p>The Amazon Resource Name (ARN) of the network.</p>
   */
  networkArn: string | undefined;

  /**
   * <p>The token for the next page of results.</p>
   */
  startToken?: string;

  /**
   * <p>The maximum number of results to return.</p>
   */
  maxResults?: number;
}

export interface ListNetworkResourcesResponse {
  /**
   * <p>Information about network resources.</p>
   */
  networkResources?: NetworkResource[];

  /**
   * <p>The token for the next page of results.</p>
   */
  nextToken?: string;
}

export enum NetworkFilterKeys {
  STATUS = "STATUS",
}

export interface ListNetworksRequest {
  /**
   * <p>The filters.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>STATUS</code> - The status (<code>AVAILABLE</code> | <code>CREATED</code>
   *                     | <code>DELETED</code> | <code>DEPROVISIONING</code> | <code>PROVISIONING</code>).</p>
   *             </li>
   *          </ul>
   *         <p>Filter values are case sensitive. If you specify multiple
   *          values for a filter, the values are joined with an <code>OR</code>, and the request returns
   *          all results that match any of the specified values.</p>
   */
  filters?: Record<string, string[]>;

  /**
   * <p>The token for the next page of results.</p>
   */
  startToken?: string;

  /**
   * <p>The maximum number of results to return.</p>
   */
  maxResults?: number;
}

export interface ListNetworksResponse {
  /**
   * <p>The networks.</p>
   */
  networks?: Network[];

  /**
   * <p>The token for the next page of results.</p>
   */
  nextToken?: string;
}

export enum NetworkSiteFilterKeys {
  STATUS = "STATUS",
}

export interface ListNetworkSitesRequest {
  /**
   * <p>The filters. Add filters to your request to return a more
   *             specific list of results. Use filters to match the status of the network sites.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>STATUS</code> - The status (<code>AVAILABLE</code> | <code>CREATED</code>
   *                     | <code>DELETED</code> | <code>DEPROVISIONING</code> | <code>PROVISIONING</code>).</p>
   *             </li>
   *          </ul>
   *         <p>Filter values are case sensitive. If you specify multiple
   *          values for a filter, the values are joined with an <code>OR</code>, and the request returns
   *          all results that match any of the specified values.</p>
   */
  filters?: Record<string, string[]>;

  /**
   * <p>The Amazon Resource Name (ARN) of the network.</p>
   */
  networkArn: string | undefined;

  /**
   * <p>The token for the next page of results.</p>
   */
  startToken?: string;

  /**
   * <p>The maximum number of results to return.</p>
   */
  maxResults?: number;
}

export interface ListNetworkSitesResponse {
  /**
   * <p>Information about the network sites.</p>
   */
  networkSites?: NetworkSite[];

  /**
   * <p>The token for the next page of results.</p>
   */
  nextToken?: string;
}

export enum OrderFilterKeys {
  NETWORK_SITE = "NETWORK_SITE",
  STATUS = "STATUS",
}

export interface ListOrdersRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the network.</p>
   */
  networkArn: string | undefined;

  /**
   * <p>The token for the next page of results.</p>
   */
  startToken?: string;

  /**
   * <p>The maximum number of results to return.</p>
   */
  maxResults?: number;

  /**
   * <p>The filters.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>NETWORK_SITE</code> - The Amazon Resource Name (ARN) of the network site.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>STATUS</code> - The status (<code>ACKNOWLEDGING</code> | <code>ACKNOWLEDGED</code>
   *                     | <code>UNACKNOWLEDGED</code>).</p>
   *             </li>
   *          </ul>
   *         <p>Filter values are case sensitive. If you specify multiple
   *          values for a filter, the values are joined with an <code>OR</code>, and the request returns
   *          all results that match any of the specified values.</p>
   */
  filters?: Record<string, string[]>;
}

export interface ListOrdersResponse {
  /**
   * <p>Information about the orders.</p>
   */
  orders?: Order[];

  /**
   * <p>The token for the next page of results.</p>
   */
  nextToken?: string;
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  resourceArn: string | undefined;
}

export interface ListTagsForResourceResponse {
  /**
   * <p>The resource tags.</p>
   */
  tags?: Record<string, string>;
}

/**
 * <p>
 *             The request was denied due to request throttling.
 *         </p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  $retryable = {
    throttling: true,
  };
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
  }
}

export interface PingResponse {
  /**
   * <p>Information about the health of the service.</p>
   */
  status?: string;
}

export interface TagResourceRequest {
  /**
   * <p>
   *             The Amazon Resource Name (ARN) of the resource.
   *         </p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The tags to add to the resource.</p>
   */
  tags: Record<string, string> | undefined;
}

export interface TagResourceResponse {}

export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The tag keys.</p>
   */
  tagKeys: string[] | undefined;
}

export interface UntagResourceResponse {}

export interface UpdateNetworkSiteRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the network site.</p>
   */
  networkSiteArn: string | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Run_Instance_Idempotency.html">How to ensure
   *                 idempotency</a>.</p>
   */
  clientToken?: string;

  /**
   * <p>The description.</p>
   */
  description?: string;
}

export interface UpdateNetworkSiteResponse {
  /**
   * <p>Information about the network site.</p>
   */
  networkSite?: NetworkSite;

  /**
   * <p>
   *             The network site tags.
   *         </p>
   */
  tags?: Record<string, string>;
}

export interface UpdateNetworkSitePlanRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the network site.</p>
   */
  networkSiteArn: string | undefined;

  /**
   * <p>The pending plan.</p>
   */
  pendingPlan: SitePlan | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Run_Instance_Idempotency.html">How to ensure
   *                 idempotency</a>.</p>
   */
  clientToken?: string;
}

/**
 * @internal
 */
export const AcknowledgeOrderReceiptRequestFilterSensitiveLog = (obj: AcknowledgeOrderReceiptRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AddressFilterSensitiveLog = (obj: Address): any => ({
  ...obj,
  ...(obj.city && { city: SENSITIVE_STRING }),
  ...(obj.company && { company: SENSITIVE_STRING }),
  ...(obj.country && { country: SENSITIVE_STRING }),
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.phoneNumber && { phoneNumber: SENSITIVE_STRING }),
  ...(obj.postalCode && { postalCode: SENSITIVE_STRING }),
  ...(obj.stateOrProvince && { stateOrProvince: SENSITIVE_STRING }),
  ...(obj.street1 && { street1: SENSITIVE_STRING }),
  ...(obj.street2 && { street2: SENSITIVE_STRING }),
  ...(obj.street3 && { street3: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const TrackingInformationFilterSensitiveLog = (obj: TrackingInformation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OrderFilterSensitiveLog = (obj: Order): any => ({
  ...obj,
  ...(obj.shippingAddress && { shippingAddress: AddressFilterSensitiveLog(obj.shippingAddress) }),
});

/**
 * @internal
 */
export const AcknowledgeOrderReceiptResponseFilterSensitiveLog = (obj: AcknowledgeOrderReceiptResponse): any => ({
  ...obj,
  ...(obj.order && { order: OrderFilterSensitiveLog(obj.order) }),
});

/**
 * @internal
 */
export const ValidationExceptionFieldFilterSensitiveLog = (obj: ValidationExceptionField): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ActivateDeviceIdentifierRequestFilterSensitiveLog = (obj: ActivateDeviceIdentifierRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeviceIdentifierFilterSensitiveLog = (obj: DeviceIdentifier): any => ({
  ...obj,
  ...(obj.imsi && { imsi: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ActivateDeviceIdentifierResponseFilterSensitiveLog = (obj: ActivateDeviceIdentifierResponse): any => ({
  ...obj,
  ...(obj.deviceIdentifier && { deviceIdentifier: DeviceIdentifierFilterSensitiveLog(obj.deviceIdentifier) }),
  ...(obj.tags && { tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ActivateNetworkSiteRequestFilterSensitiveLog = (obj: ActivateNetworkSiteRequest): any => ({
  ...obj,
  ...(obj.shippingAddress && { shippingAddress: AddressFilterSensitiveLog(obj.shippingAddress) }),
});

/**
 * @internal
 */
export const NameValuePairFilterSensitiveLog = (obj: NameValuePair): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NetworkResourceDefinitionFilterSensitiveLog = (obj: NetworkResourceDefinition): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SitePlanFilterSensitiveLog = (obj: SitePlan): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NetworkSiteFilterSensitiveLog = (obj: NetworkSite): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ActivateNetworkSiteResponseFilterSensitiveLog = (obj: ActivateNetworkSiteResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PositionFilterSensitiveLog = (obj: Position): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConfigureAccessPointRequestFilterSensitiveLog = (obj: ConfigureAccessPointRequest): any => ({
  ...obj,
  ...(obj.cpiUsername && { cpiUsername: SENSITIVE_STRING }),
  ...(obj.cpiUserId && { cpiUserId: SENSITIVE_STRING }),
  ...(obj.cpiUserPassword && { cpiUserPassword: SENSITIVE_STRING }),
  ...(obj.cpiSecretKey && { cpiSecretKey: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const NetworkResourceFilterSensitiveLog = (obj: NetworkResource): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConfigureAccessPointResponseFilterSensitiveLog = (obj: ConfigureAccessPointResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateNetworkRequestFilterSensitiveLog = (obj: CreateNetworkRequest): any => ({
  ...obj,
  ...(obj.tags && { tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const NetworkFilterSensitiveLog = (obj: Network): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateNetworkResponseFilterSensitiveLog = (obj: CreateNetworkResponse): any => ({
  ...obj,
  ...(obj.tags && { tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateNetworkSiteRequestFilterSensitiveLog = (obj: CreateNetworkSiteRequest): any => ({
  ...obj,
  ...(obj.tags && { tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateNetworkSiteResponseFilterSensitiveLog = (obj: CreateNetworkSiteResponse): any => ({
  ...obj,
  ...(obj.tags && { tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DeactivateDeviceIdentifierRequestFilterSensitiveLog = (obj: DeactivateDeviceIdentifierRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeactivateDeviceIdentifierResponseFilterSensitiveLog = (obj: DeactivateDeviceIdentifierResponse): any => ({
  ...obj,
  ...(obj.deviceIdentifier && { deviceIdentifier: DeviceIdentifierFilterSensitiveLog(obj.deviceIdentifier) }),
});

/**
 * @internal
 */
export const DeleteNetworkRequestFilterSensitiveLog = (obj: DeleteNetworkRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteNetworkResponseFilterSensitiveLog = (obj: DeleteNetworkResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteNetworkSiteRequestFilterSensitiveLog = (obj: DeleteNetworkSiteRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteNetworkSiteResponseFilterSensitiveLog = (obj: DeleteNetworkSiteResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetDeviceIdentifierRequestFilterSensitiveLog = (obj: GetDeviceIdentifierRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetDeviceIdentifierResponseFilterSensitiveLog = (obj: GetDeviceIdentifierResponse): any => ({
  ...obj,
  ...(obj.deviceIdentifier && { deviceIdentifier: DeviceIdentifierFilterSensitiveLog(obj.deviceIdentifier) }),
  ...(obj.tags && { tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetNetworkRequestFilterSensitiveLog = (obj: GetNetworkRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetNetworkResponseFilterSensitiveLog = (obj: GetNetworkResponse): any => ({
  ...obj,
  ...(obj.tags && { tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetNetworkResourceRequestFilterSensitiveLog = (obj: GetNetworkResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetNetworkResourceResponseFilterSensitiveLog = (obj: GetNetworkResourceResponse): any => ({
  ...obj,
  ...(obj.tags && { tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetNetworkSiteRequestFilterSensitiveLog = (obj: GetNetworkSiteRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetNetworkSiteResponseFilterSensitiveLog = (obj: GetNetworkSiteResponse): any => ({
  ...obj,
  ...(obj.tags && { tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetOrderRequestFilterSensitiveLog = (obj: GetOrderRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetOrderResponseFilterSensitiveLog = (obj: GetOrderResponse): any => ({
  ...obj,
  ...(obj.order && { order: OrderFilterSensitiveLog(obj.order) }),
  ...(obj.tags && { tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListDeviceIdentifiersRequestFilterSensitiveLog = (obj: ListDeviceIdentifiersRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDeviceIdentifiersResponseFilterSensitiveLog = (obj: ListDeviceIdentifiersResponse): any => ({
  ...obj,
  ...(obj.deviceIdentifiers && {
    deviceIdentifiers: obj.deviceIdentifiers.map((item) => DeviceIdentifierFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const ListNetworkResourcesRequestFilterSensitiveLog = (obj: ListNetworkResourcesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListNetworkResourcesResponseFilterSensitiveLog = (obj: ListNetworkResourcesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListNetworksRequestFilterSensitiveLog = (obj: ListNetworksRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListNetworksResponseFilterSensitiveLog = (obj: ListNetworksResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListNetworkSitesRequestFilterSensitiveLog = (obj: ListNetworkSitesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListNetworkSitesResponseFilterSensitiveLog = (obj: ListNetworkSitesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListOrdersRequestFilterSensitiveLog = (obj: ListOrdersRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListOrdersResponseFilterSensitiveLog = (obj: ListOrdersResponse): any => ({
  ...obj,
  ...(obj.orders && { orders: obj.orders.map((item) => OrderFilterSensitiveLog(item)) }),
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
  ...(obj.tags && { tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const PingResponseFilterSensitiveLog = (obj: PingResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceRequestFilterSensitiveLog = (obj: TagResourceRequest): any => ({
  ...obj,
  ...(obj.tags && { tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const TagResourceResponseFilterSensitiveLog = (obj: TagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceRequestFilterSensitiveLog = (obj: UntagResourceRequest): any => ({
  ...obj,
  ...(obj.tagKeys && { tagKeys: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UntagResourceResponseFilterSensitiveLog = (obj: UntagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateNetworkSiteRequestFilterSensitiveLog = (obj: UpdateNetworkSiteRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateNetworkSiteResponseFilterSensitiveLog = (obj: UpdateNetworkSiteResponse): any => ({
  ...obj,
  ...(obj.tags && { tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateNetworkSitePlanRequestFilterSensitiveLog = (obj: UpdateNetworkSitePlanRequest): any => ({
  ...obj,
});
