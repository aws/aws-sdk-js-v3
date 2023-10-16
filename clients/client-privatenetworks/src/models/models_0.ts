// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { PrivateNetworksServiceException as __BaseException } from "./PrivateNetworksServiceException";

/**
 * @public
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

/**
 * @public
 */
export interface AcknowledgeOrderReceiptRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the order.</p>
   */
  orderArn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const AcknowledgmentStatus = {
  ACKNOWLEDGED: "ACKNOWLEDGED",
  ACKNOWLEDGING: "ACKNOWLEDGING",
  UNACKNOWLEDGED: "UNACKNOWLEDGED",
} as const;

/**
 * @public
 */
export type AcknowledgmentStatus = (typeof AcknowledgmentStatus)[keyof typeof AcknowledgmentStatus];

/**
 * @public
 * @enum
 */
export const CommitmentLength = {
  ONE_YEAR: "ONE_YEAR",
  SIXTY_DAYS: "SIXTY_DAYS",
  THREE_YEARS: "THREE_YEARS",
} as const;

/**
 * @public
 */
export type CommitmentLength = (typeof CommitmentLength)[keyof typeof CommitmentLength];

/**
 * @public
 * <p>Determines the duration and renewal status of the commitment period for a radio
 *             unit.</p>
 *          <p>For pricing, see <a href="http://aws.amazon.com/private5g/pricing">Amazon Web Services Private 5G
 *                 Pricing</a>.</p>
 */
export interface CommitmentConfiguration {
  /**
   * @public
   * <p>The duration of the commitment period for the radio unit. You can choose a 60-day, 1-year, or 3-year
   *             period.</p>
   */
  commitmentLength: CommitmentLength | undefined;

  /**
   * @public
   * <p>Determines whether the commitment period for a radio unit is set to automatically
   *             renew for an additional 1 year after your current commitment period expires.</p>
   *          <p>Set to <code>True</code>, if you want your commitment period to automatically renew.
   *             Set to <code>False</code> if you do not want your commitment to automatically renew.</p>
   *          <p>You can do the following:</p>
   *          <ul>
   *             <li>
   *                <p>Set a 1-year commitment to automatically renew for an additional 1 year. The
   *                     hourly rate for the additional year will continue to be the same as your
   *                     existing 1-year rate.</p>
   *             </li>
   *             <li>
   *                <p>Set a 3-year commitment to automatically renew for an additional 1 year. The
   *                     hourly rate for the additional year will continue to be the same as your
   *                     existing 3-year rate.</p>
   *             </li>
   *             <li>
   *                <p>Turn off a previously-enabled automatic renewal on a 1-year or 3-year
   *                     commitment.</p>
   *             </li>
   *          </ul>
   *          <p>You cannot use the automatic-renewal option for a 60-day
   *             commitment.</p>
   */
  automaticRenewal: boolean | undefined;
}

/**
 * @public
 * @enum
 */
export const NetworkResourceDefinitionType = {
  DEVICE_IDENTIFIER: "DEVICE_IDENTIFIER",
  RADIO_UNIT: "RADIO_UNIT",
} as const;

/**
 * @public
 */
export type NetworkResourceDefinitionType =
  (typeof NetworkResourceDefinitionType)[keyof typeof NetworkResourceDefinitionType];

/**
 * @public
 * <p>Details of the network resources in the order.</p>
 */
export interface OrderedResourceDefinition {
  /**
   * @public
   * <p>The type of network resource in the order.</p>
   */
  type: NetworkResourceDefinitionType | undefined;

  /**
   * @public
   * <p>The number of network resources in the order.</p>
   */
  count: number | undefined;

  /**
   * @public
   * <p>The duration and renewal status of the commitment period for each radio unit in the
   *             order. Does not show details if the resource type is DEVICE_IDENTIFIER.</p>
   */
  commitmentConfiguration?: CommitmentConfiguration;
}

/**
 * @public
 * <p>Information about an address.</p>
 */
export interface Address {
  /**
   * @public
   * <p>The city for this address.</p>
   */
  city: string | undefined;

  /**
   * @public
   * <p>The company name for this address.</p>
   */
  company?: string;

  /**
   * @public
   * <p>The country for this address.</p>
   */
  country: string | undefined;

  /**
   * @public
   * <p>The recipient's name for this address.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The recipient's phone number.</p>
   */
  phoneNumber?: string;

  /**
   * @public
   * <p>The postal code for this address.</p>
   */
  postalCode: string | undefined;

  /**
   * @public
   * <p>The state or province for this address.</p>
   */
  stateOrProvince: string | undefined;

  /**
   * @public
   * <p>The first line of the street address.</p>
   */
  street1: string | undefined;

  /**
   * @public
   * <p>The second line of the street address.</p>
   */
  street2?: string;

  /**
   * @public
   * <p>The third line of the street address.</p>
   */
  street3?: string;

  /**
   * @public
   * <p>The recipient's email address.</p>
   */
  emailAddress?: string;
}

/**
 * @public
 * <p>Information about tracking a shipment.</p>
 */
export interface TrackingInformation {
  /**
   * @public
   * <p>The tracking number of the shipment.</p>
   */
  trackingNumber?: string;
}

/**
 * @public
 * <p>Information about an order.</p>
 */
export interface Order {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the order.</p>
   */
  orderArn?: string;

  /**
   * @public
   * <p>The shipping address of the order.</p>
   */
  shippingAddress?: Address;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the network associated with this order.</p>
   */
  networkArn?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the network site associated with this order.</p>
   */
  networkSiteArn?: string;

  /**
   * @public
   * <p>The tracking information of the order.</p>
   */
  trackingInformation?: TrackingInformation[];

  /**
   * @public
   * <p>The acknowledgement status of the order.</p>
   */
  acknowledgmentStatus?: AcknowledgmentStatus;

  /**
   * @public
   * <p>The creation time of the order.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>A list of the network resources placed in the order.</p>
   */
  orderedResources?: OrderedResourceDefinition[];
}

/**
 * @public
 */
export interface AcknowledgeOrderReceiptResponse {
  /**
   * @public
   * <p>Information about the order.</p>
   */
  order: Order | undefined;
}

/**
 * @public
 * <p>Information about an internal error.</p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  $retryable = {};
  /**
   * @public
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
 * @public
 * <p>The resource was not found.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * Identifier of the affected resource.
   */
  resourceId: string | undefined;

  /**
   * @public
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
 * @public
 * <p>Information about a field that failed validation.</p>
 */
export interface ValidationExceptionField {
  /**
   * @public
   * <p>The field name that failed validation.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The message about the validation failure.</p>
   */
  message: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  CANNOT_ASSUME_ROLE: "CANNOT_ASSUME_ROLE",
  CANNOT_PARSE: "CANNOT_PARSE",
  FIELD_VALIDATION_FAILED: "FIELD_VALIDATION_FAILED",
  OTHER: "OTHER",
  UNKNOWN_OPERATION: "UNKNOWN_OPERATION",
} as const;

/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * @public
 * <p>The request failed validation.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * Reason the request failed validation.
   */
  reason: ValidationExceptionReason | undefined;

  /**
   * @public
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

/**
 * @public
 */
export interface ActivateDeviceIdentifierRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the device identifier.</p>
   */
  deviceIdentifierArn: string | undefined;

  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Run_Instance_Idempotency.html">How to ensure
   *                 idempotency</a>.</p>
   */
  clientToken?: string;
}

/**
 * @public
 * @enum
 */
export const DeviceIdentifierStatus = {
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
} as const;

/**
 * @public
 */
export type DeviceIdentifierStatus = (typeof DeviceIdentifierStatus)[keyof typeof DeviceIdentifierStatus];

/**
 * @public
 * <p>Information about a subscriber of a device that can use a network.</p>
 */
export interface DeviceIdentifier {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the device identifier.</p>
   */
  deviceIdentifierArn?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the traffic group to which the device identifier
   *             belongs.</p>
   */
  trafficGroupArn?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the network on which the device identifier
   *             appears.</p>
   */
  networkArn?: string;

  /**
   * @public
   * <p>The International Mobile Subscriber Identity of the device identifier.</p>
   */
  imsi?: string;

  /**
   * @public
   * <p>The Integrated Circuit Card Identifier of the device identifier.</p>
   */
  iccid?: string;

  /**
   * @public
   * <p>The vendor of the device identifier.</p>
   */
  vendor?: string;

  /**
   * @public
   * <p>The status of the device identifier.</p>
   */
  status?: DeviceIdentifierStatus;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the order used to purchase the device
   *             identifier.</p>
   */
  orderArn?: string;

  /**
   * @public
   * <p>The creation time of this device identifier.</p>
   */
  createdAt?: Date;
}

/**
 * @public
 */
export interface ActivateDeviceIdentifierResponse {
  /**
   * @public
   * <p>Information about the device identifier.</p>
   */
  deviceIdentifier: DeviceIdentifier | undefined;

  /**
   * @public
   * <p> The tags on the device identifier. </p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ActivateNetworkSiteRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the network site.</p>
   */
  networkSiteArn: string | undefined;

  /**
   * @public
   * <p>The shipping address of the network site.</p>
   */
  shippingAddress: Address | undefined;

  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Run_Instance_Idempotency.html">How to ensure
   *                 idempotency</a>.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>Determines the duration and renewal status of the commitment period for all pending radio
   *             units.</p>
   *          <p>If you include <code>commitmentConfiguration</code> in the
   *                 <code>ActivateNetworkSiteRequest</code> action, you must specify the
   *             following:</p>
   *          <ul>
   *             <li>
   *                <p>The commitment period for the radio unit. You can choose a 60-day, 1-year, or
   *                     3-year period.</p>
   *             </li>
   *             <li>
   *                <p>Whether you want your commitment period to automatically renew for one more
   *                     year after your current commitment period expires.</p>
   *             </li>
   *          </ul>
   *          <p>For pricing, see <a href="http://aws.amazon.com/private5g/pricing">Amazon Web Services Private 5G
   *                 Pricing</a>.</p>
   *          <p>If you do not include <code>commitmentConfiguration</code> in the
   *                 <code>ActivateNetworkSiteRequest</code> action, the commitment period is set to
   *             60-days.</p>
   */
  commitmentConfiguration?: CommitmentConfiguration;
}

/**
 * @public
 * <p>Information about a name/value pair.</p>
 */
export interface NameValuePair {
  /**
   * @public
   * <p>The name of the pair.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The value of the pair.</p>
   */
  value?: string;
}

/**
 * @public
 * <p>Information about a network resource definition.</p>
 */
export interface NetworkResourceDefinition {
  /**
   * @public
   * <p>The type in the network resource definition.</p>
   */
  type: NetworkResourceDefinitionType | undefined;

  /**
   * @public
   * <p>The options in the network resource definition.</p>
   */
  options?: NameValuePair[];

  /**
   * @public
   * <p>The count in the network resource definition.</p>
   */
  count: number | undefined;
}

/**
 * @public
 * <p>Information about a site plan.</p>
 */
export interface SitePlan {
  /**
   * @public
   * <p>The resource definitions of the plan.</p>
   */
  resourceDefinitions?: NetworkResourceDefinition[];

  /**
   * @public
   * <p>The options of the plan.</p>
   */
  options?: NameValuePair[];
}

/**
 * @public
 * @enum
 */
export const NetworkSiteStatus = {
  AVAILABLE: "AVAILABLE",
  CREATED: "CREATED",
  DELETED: "DELETED",
  DEPROVISIONING: "DEPROVISIONING",
  PROVISIONING: "PROVISIONING",
} as const;

/**
 * @public
 */
export type NetworkSiteStatus = (typeof NetworkSiteStatus)[keyof typeof NetworkSiteStatus];

/**
 * @public
 * <p>Information about a network site.</p>
 */
export interface NetworkSite {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the network site.</p>
   */
  networkSiteArn: string | undefined;

  /**
   * @public
   * <p>The name of the network site.</p>
   */
  networkSiteName: string | undefined;

  /**
   * @public
   * <p>The description of the network site.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The status of the network site.</p>
   */
  status: NetworkSiteStatus | undefined;

  /**
   * @public
   * <p>The status reason of the network site.</p>
   */
  statusReason?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the network to which the network site
   *             belongs.</p>
   */
  networkArn: string | undefined;

  /**
   * @public
   * <p>The pending plan of the network site.</p>
   */
  pendingPlan?: SitePlan;

  /**
   * @public
   * <p>The current plan of the network site.</p>
   */
  currentPlan?: SitePlan;

  /**
   * @public
   * <p>The creation time of the network site.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p> The parent Availability Zone for the network site. </p>
   */
  availabilityZone?: string;

  /**
   * @public
   * <p> The parent Availability Zone ID for the network site. </p>
   */
  availabilityZoneId?: string;
}

/**
 * @public
 */
export interface ActivateNetworkSiteResponse {
  /**
   * @public
   * <p>Information about the network site.</p>
   */
  networkSite?: NetworkSite;
}

/**
 * @public
 * <p>Shows the duration, the date and time that the contract started and ends, and the
 *             renewal status of the commitment period for the radio unit.</p>
 */
export interface CommitmentInformation {
  /**
   * @public
   * <p>The duration and renewal status of the commitment period for the radio unit.</p>
   */
  commitmentConfiguration: CommitmentConfiguration | undefined;

  /**
   * @public
   * <p>The date and time that the commitment period started.</p>
   */
  startAt?: Date;

  /**
   * @public
   * <p>The date and time that the commitment period ends. If you do not cancel or renew the
   *             commitment before the expiration date, you will be billed at the 60-day-commitment
   *             rate.</p>
   */
  expiresOn?: Date;
}

/**
 * @public
 * @enum
 */
export const ElevationReference = {
  AGL: "AGL",
  AMSL: "AMSL",
} as const;

/**
 * @public
 */
export type ElevationReference = (typeof ElevationReference)[keyof typeof ElevationReference];

/**
 * @public
 * @enum
 */
export const ElevationUnit = {
  /**
   * Feet.
   */
  FEET: "FEET",
} as const;

/**
 * @public
 */
export type ElevationUnit = (typeof ElevationUnit)[keyof typeof ElevationUnit];

/**
 * @public
 * <p>Information about a position.</p>
 */
export interface Position {
  /**
   * @public
   * <p>The latitude of the position.</p>
   */
  latitude?: number;

  /**
   * @public
   * <p>The longitude of the position.</p>
   */
  longitude?: number;

  /**
   * @public
   * <p>The elevation of the equipment at this position.</p>
   */
  elevation?: number;

  /**
   * @public
   * <p>The units used to measure the elevation of the position.</p>
   */
  elevationUnit?: ElevationUnit;

  /**
   * @public
   * <p>The reference point from which elevation is reported.</p>
   */
  elevationReference?: ElevationReference;
}

/**
 * @public
 */
export interface ConfigureAccessPointRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the network resource.</p>
   */
  accessPointArn: string | undefined;

  /**
   * @public
   * <p>The position of the network resource.</p>
   */
  position?: Position;

  /**
   * @public
   * <p>The CPI user name of the CPI user who is certifying the coordinates of the radio
   *             unit.</p>
   */
  cpiUsername?: string;

  /**
   * @public
   * <p>The CPI user ID of the CPI user who is certifying the coordinates of the network
   *             resource. </p>
   */
  cpiUserId?: string;

  /**
   * @public
   * <p>The CPI password associated with the CPI certificate in
   *             <code>cpiSecretKey</code>.</p>
   */
  cpiUserPassword?: string;

  /**
   * @public
   * <p>A Base64 encoded string of the CPI certificate associated with the CPI user who is
   *             certifying the coordinates of the network resource. </p>
   */
  cpiSecretKey?: string;
}

/**
 * @public
 * @enum
 */
export const HealthStatus = {
  HEALTHY: "HEALTHY",
  INITIAL: "INITIAL",
  UNHEALTHY: "UNHEALTHY",
} as const;

/**
 * @public
 */
export type HealthStatus = (typeof HealthStatus)[keyof typeof HealthStatus];

/**
 * @public
 * <p>Information about a request to return a network resource.</p>
 */
export interface ReturnInformation {
  /**
   * @public
   * <p>The shipping address.</p>
   */
  shippingAddress?: Address;

  /**
   * @public
   * <p>The reason for the return. If the return request did not include a reason for the
   *             return, this value is null.</p>
   */
  returnReason?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the replacement order.</p>
   */
  replacementOrderArn?: string;

  /**
   * @public
   * <p>The URL of the shipping label. The shipping label is available for download only if
   *             the status of the network resource is <code>PENDING_RETURN</code>. For more information,
   *             see <a href="https://docs.aws.amazon.com/private-networks/latest/userguide/radio-units.html#return-radio-unit">Return a
   *                 radio unit</a>.</p>
   */
  shippingLabel?: string;
}

/**
 * @public
 * @enum
 */
export const NetworkResourceStatus = {
  AVAILABLE: "AVAILABLE",
  CREATING_SHIPPING_LABEL: "CREATING_SHIPPING_LABEL",
  DELETED: "DELETED",
  DELETING: "DELETING",
  PENDING: "PENDING",
  PENDING_RETURN: "PENDING_RETURN",
  PROVISIONED: "PROVISIONED",
  PROVISIONING: "PROVISIONING",
  SHIPPED: "SHIPPED",
} as const;

/**
 * @public
 */
export type NetworkResourceStatus = (typeof NetworkResourceStatus)[keyof typeof NetworkResourceStatus];

/**
 * @public
 * @enum
 */
export const NetworkResourceType = {
  RADIO_UNIT: "RADIO_UNIT",
} as const;

/**
 * @public
 */
export type NetworkResourceType = (typeof NetworkResourceType)[keyof typeof NetworkResourceType];

/**
 * @public
 * <p>Information about a network resource.</p>
 */
export interface NetworkResource {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the network resource.</p>
   */
  networkResourceArn?: string;

  /**
   * @public
   * <p>The description of the network resource.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The type of the network resource.</p>
   */
  type?: NetworkResourceType;

  /**
   * @public
   * <p>The status of the network resource.</p>
   */
  status?: NetworkResourceStatus;

  /**
   * @public
   * <p>The status reason of the network resource.</p>
   */
  statusReason?: string;

  /**
   * @public
   * <p>The vendor of the network resource.</p>
   */
  vendor?: string;

  /**
   * @public
   * <p>The model of the network resource.</p>
   */
  model?: string;

  /**
   * @public
   * <p>The serial number of the network resource.</p>
   */
  serialNumber?: string;

  /**
   * @public
   * <p>The health of the network resource.</p>
   */
  health?: HealthStatus;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the network on which this network resource
   *             appears.</p>
   */
  networkArn?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the network site on which this network resource
   *             appears.</p>
   */
  networkSiteArn?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the order used to purchase this network
   *             resource.</p>
   */
  orderArn?: string;

  /**
   * @public
   * <p>The attributes of the network resource.</p>
   */
  attributes?: NameValuePair[];

  /**
   * @public
   * <p>The position of the network resource.</p>
   */
  position?: Position;

  /**
   * @public
   * <p>The creation time of the network resource.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>Information about a request to return the network resource.</p>
   */
  returnInformation?: ReturnInformation;

  /**
   * @public
   * <p>Information about the commitment period for the radio unit. Shows the duration, the
   *             date and time that the contract started and ends, and the renewal status of the
   *             commitment period.</p>
   */
  commitmentInformation?: CommitmentInformation;
}

/**
 * @public
 */
export interface ConfigureAccessPointResponse {
  /**
   * @public
   * <p>Information about the network resource.</p>
   */
  accessPoint: NetworkResource | undefined;
}

/**
 * @public
 */
export interface CreateNetworkRequest {
  /**
   * @public
   * <p>The name of the network. You can't change the name after you create the
   *             network.</p>
   */
  networkName: string | undefined;

  /**
   * @public
   * <p>The description of the network.</p>
   */
  description?: string;

  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Run_Instance_Idempotency.html">How to ensure
   *                 idempotency</a>.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p> The tags to apply to the network. </p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 * @enum
 */
export const NetworkStatus = {
  AVAILABLE: "AVAILABLE",
  CREATED: "CREATED",
  DELETED: "DELETED",
  DEPROVISIONING: "DEPROVISIONING",
  PROVISIONING: "PROVISIONING",
} as const;

/**
 * @public
 */
export type NetworkStatus = (typeof NetworkStatus)[keyof typeof NetworkStatus];

/**
 * @public
 * <p>Information about a network.</p>
 */
export interface Network {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the network.</p>
   */
  networkArn: string | undefined;

  /**
   * @public
   * <p>The name of the network.</p>
   */
  networkName: string | undefined;

  /**
   * @public
   * <p>The description of the network.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The status of the network.</p>
   */
  status: NetworkStatus | undefined;

  /**
   * @public
   * <p>The status reason of the network.</p>
   */
  statusReason?: string;

  /**
   * @public
   * <p>The creation time of the network.</p>
   */
  createdAt?: Date;
}

/**
 * @public
 */
export interface CreateNetworkResponse {
  /**
   * @public
   * <p>Information about the network.</p>
   */
  network: Network | undefined;

  /**
   * @public
   * <p> The network tags. </p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
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

/**
 * @public
 */
export interface CreateNetworkSiteRequest {
  /**
   * @public
   * <p>The name of the site. You can't change the name after you create the site.</p>
   */
  networkSiteName: string | undefined;

  /**
   * @public
   * <p>The description of the site.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the network.</p>
   */
  networkArn: string | undefined;

  /**
   * @public
   * <p>Information about the pending plan for this site.</p>
   */
  pendingPlan?: SitePlan;

  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Run_Instance_Idempotency.html">How to ensure
   *                 idempotency</a>.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>The Availability Zone that is the parent of this site. You can't change the
   *             Availability Zone after you create the site.</p>
   */
  availabilityZone?: string;

  /**
   * @public
   * <p>The ID of the Availability Zone that is the parent of this site. You can't change the
   *             Availability Zone after you create the site.</p>
   */
  availabilityZoneId?: string;

  /**
   * @public
   * <p> The tags to apply to the network site. </p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateNetworkSiteResponse {
  /**
   * @public
   * <p>Information about the network site.</p>
   */
  networkSite?: NetworkSite;

  /**
   * @public
   * <p> The network site tags. </p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface DeactivateDeviceIdentifierRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the device identifier.</p>
   */
  deviceIdentifierArn: string | undefined;

  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Run_Instance_Idempotency.html">How to ensure
   *                 idempotency</a>.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface DeactivateDeviceIdentifierResponse {
  /**
   * @public
   * <p>Information about the device identifier.</p>
   */
  deviceIdentifier: DeviceIdentifier | undefined;
}

/**
 * @public
 */
export interface DeleteNetworkRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the network.</p>
   */
  networkArn: string | undefined;

  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Run_Instance_Idempotency.html">How to ensure
   *                 idempotency</a>.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface DeleteNetworkResponse {
  /**
   * @public
   * <p>Information about the network.</p>
   */
  network: Network | undefined;
}

/**
 * @public
 */
export interface DeleteNetworkSiteRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the network site.</p>
   */
  networkSiteArn: string | undefined;

  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Run_Instance_Idempotency.html">How to ensure
   *                 idempotency</a>.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface DeleteNetworkSiteResponse {
  /**
   * @public
   * <p>Information about the network site.</p>
   */
  networkSite?: NetworkSite;
}

/**
 * @public
 * @enum
 */
export const DeviceIdentifierFilterKeys = {
  ORDER: "ORDER",
  STATUS: "STATUS",
  TRAFFIC_GROUP: "TRAFFIC_GROUP",
} as const;

/**
 * @public
 */
export type DeviceIdentifierFilterKeys = (typeof DeviceIdentifierFilterKeys)[keyof typeof DeviceIdentifierFilterKeys];

/**
 * @public
 */
export interface GetDeviceIdentifierRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the device identifier.</p>
   */
  deviceIdentifierArn: string | undefined;
}

/**
 * @public
 */
export interface GetDeviceIdentifierResponse {
  /**
   * @public
   * <p>Information about the device identifier.</p>
   */
  deviceIdentifier?: DeviceIdentifier;

  /**
   * @public
   * <p> The device identifier tags. </p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface GetNetworkRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the network.</p>
   */
  networkArn: string | undefined;
}

/**
 * @public
 */
export interface GetNetworkResponse {
  /**
   * @public
   * <p>Information about the network.</p>
   */
  network: Network | undefined;

  /**
   * @public
   * <p> The network tags. </p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface GetNetworkResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the network resource.</p>
   */
  networkResourceArn: string | undefined;
}

/**
 * @public
 */
export interface GetNetworkResourceResponse {
  /**
   * @public
   * <p>Information about the network resource.</p>
   */
  networkResource: NetworkResource | undefined;

  /**
   * @public
   * <p> The network resource tags. </p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface GetNetworkSiteRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the network site.</p>
   */
  networkSiteArn: string | undefined;
}

/**
 * @public
 */
export interface GetNetworkSiteResponse {
  /**
   * @public
   * <p>Information about the network site.</p>
   */
  networkSite?: NetworkSite;

  /**
   * @public
   * <p> The network site tags. </p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface GetOrderRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the order.</p>
   */
  orderArn: string | undefined;
}

/**
 * @public
 */
export interface GetOrderResponse {
  /**
   * @public
   * <p>Information about the order.</p>
   */
  order: Order | undefined;

  /**
   * @public
   * <p> The order tags. </p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ListDeviceIdentifiersRequest {
  /**
   * @public
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ORDER</code> - The Amazon Resource Name (ARN) of the order.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>STATUS</code> - The status (<code>ACTIVE</code> |
   *                     <code>INACTIVE</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TRAFFIC_GROUP</code> - The Amazon Resource Name (ARN) of the traffic
   *                     group.</p>
   *             </li>
   *          </ul>
   *          <p>Filter values are case sensitive. If you specify multiple
   *          values for a filter, the values are joined with an <code>OR</code>, and the request returns
   *          all results that match any of the specified values.</p>
   */
  filters?: Record<DeviceIdentifierFilterKeys, string[]>;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the network.</p>
   */
  networkArn: string | undefined;

  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  startToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return.</p>
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListDeviceIdentifiersResponse {
  /**
   * @public
   * <p>Information about the device identifiers.</p>
   */
  deviceIdentifiers?: DeviceIdentifier[];

  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * @enum
 */
export const NetworkResourceFilterKeys = {
  ORDER: "ORDER",
  STATUS: "STATUS",
} as const;

/**
 * @public
 */
export type NetworkResourceFilterKeys = (typeof NetworkResourceFilterKeys)[keyof typeof NetworkResourceFilterKeys];

/**
 * @public
 */
export interface ListNetworkResourcesRequest {
  /**
   * @public
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ORDER</code> - The Amazon Resource Name (ARN) of the order.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>STATUS</code> - The status (<code>AVAILABLE</code> |
   *                         <code>DELETED</code> | <code>DELETING</code> | <code>PENDING</code> |
   *                         <code>PENDING_RETURN</code> | <code>PROVISIONING</code> |
   *                         <code>SHIPPED</code>).</p>
   *             </li>
   *          </ul>
   *          <p>Filter values are case sensitive. If you specify multiple
   *          values for a filter, the values are joined with an <code>OR</code>, and the request returns
   *          all results that match any of the specified values.</p>
   */
  filters?: Record<NetworkResourceFilterKeys, string[]>;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the network.</p>
   */
  networkArn: string | undefined;

  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  startToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return.</p>
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListNetworkResourcesResponse {
  /**
   * @public
   * <p>Information about network resources.</p>
   */
  networkResources?: NetworkResource[];

  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * @enum
 */
export const NetworkFilterKeys = {
  STATUS: "STATUS",
} as const;

/**
 * @public
 */
export type NetworkFilterKeys = (typeof NetworkFilterKeys)[keyof typeof NetworkFilterKeys];

/**
 * @public
 */
export interface ListNetworksRequest {
  /**
   * @public
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>STATUS</code> - The status (<code>AVAILABLE</code> |
   *                         <code>CREATED</code> | <code>DELETED</code> | <code>DEPROVISIONING</code> |
   *                         <code>PROVISIONING</code>).</p>
   *             </li>
   *          </ul>
   *          <p>Filter values are case sensitive. If you specify multiple
   *          values for a filter, the values are joined with an <code>OR</code>, and the request returns
   *          all results that match any of the specified values.</p>
   */
  filters?: Record<NetworkFilterKeys, string[]>;

  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  startToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return.</p>
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListNetworksResponse {
  /**
   * @public
   * <p>The networks.</p>
   */
  networks?: Network[];

  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * @enum
 */
export const NetworkSiteFilterKeys = {
  STATUS: "STATUS",
} as const;

/**
 * @public
 */
export type NetworkSiteFilterKeys = (typeof NetworkSiteFilterKeys)[keyof typeof NetworkSiteFilterKeys];

/**
 * @public
 */
export interface ListNetworkSitesRequest {
  /**
   * @public
   * <p>The filters. Add filters to your request to return a more specific list of results.
   *             Use filters to match the status of the network sites.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>STATUS</code> - The status (<code>AVAILABLE</code> |
   *                         <code>CREATED</code> | <code>DELETED</code> | <code>DEPROVISIONING</code> |
   *                         <code>PROVISIONING</code>).</p>
   *             </li>
   *          </ul>
   *          <p>Filter values are case sensitive. If you specify multiple
   *          values for a filter, the values are joined with an <code>OR</code>, and the request returns
   *          all results that match any of the specified values.</p>
   */
  filters?: Record<NetworkSiteFilterKeys, string[]>;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the network.</p>
   */
  networkArn: string | undefined;

  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  startToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return.</p>
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListNetworkSitesResponse {
  /**
   * @public
   * <p>Information about the network sites.</p>
   */
  networkSites?: NetworkSite[];

  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * @enum
 */
export const OrderFilterKeys = {
  NETWORK_SITE: "NETWORK_SITE",
  STATUS: "STATUS",
} as const;

/**
 * @public
 */
export type OrderFilterKeys = (typeof OrderFilterKeys)[keyof typeof OrderFilterKeys];

/**
 * @public
 */
export interface ListOrdersRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the network.</p>
   */
  networkArn: string | undefined;

  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  startToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>NETWORK_SITE</code> - The Amazon Resource Name (ARN) of the network
   *                     site.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>STATUS</code> - The status (<code>ACKNOWLEDGING</code> |
   *                         <code>ACKNOWLEDGED</code> | <code>UNACKNOWLEDGED</code>).</p>
   *             </li>
   *          </ul>
   *          <p>Filter values are case sensitive. If you specify multiple
   *          values for a filter, the values are joined with an <code>OR</code>, and the request returns
   *          all results that match any of the specified values.</p>
   */
  filters?: Record<OrderFilterKeys, string[]>;
}

/**
 * @public
 */
export interface ListOrdersResponse {
  /**
   * @public
   * <p>Information about the orders.</p>
   */
  orders?: Order[];

  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * <p>The resource tags.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 * <p> The request was denied due to request throttling. </p>
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

/**
 * @public
 */
export interface PingResponse {
  /**
   * @public
   * <p>Information about the health of the service.</p>
   */
  status?: string;
}

/**
 * @public
 * @enum
 */
export const UpdateType = {
  COMMITMENT: "COMMITMENT",
  REPLACE: "REPLACE",
  RETURN: "RETURN",
} as const;

/**
 * @public
 */
export type UpdateType = (typeof UpdateType)[keyof typeof UpdateType];

/**
 * @public
 */
export interface StartNetworkResourceUpdateRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the network resource.</p>
   */
  networkResourceArn: string | undefined;

  /**
   * @public
   * <p>The update type.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>REPLACE</code> - Submits a request to replace a defective radio unit. We
   *                     provide a shipping label that you can use for the return process and we ship a
   *                     replacement radio unit to you.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RETURN</code> - Submits a request to return a radio unit that you no
   *                     longer need. We provide a shipping label that you can use for the return
   *                     process.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>COMMITMENT</code> - Submits a request to change or renew the commitment
   *                     period. If you choose this value, then you must set <a href="https://docs.aws.amazon.com/private-networks/latest/APIReference/API_StartNetworkResourceUpdate.html#privatenetworks-StartNetworkResourceUpdate-request-commitmentConfiguration">
   *                      <code>commitmentConfiguration</code>
   *                   </a>.</p>
   *             </li>
   *          </ul>
   */
  updateType: UpdateType | undefined;

  /**
   * @public
   * <p>The shipping address. If you don't provide a shipping address when replacing or
   *             returning a network resource, we use the address from the original order for the network
   *             resource.</p>
   */
  shippingAddress?: Address;

  /**
   * @public
   * <p>The reason for the return. Providing a reason for a return is optional.</p>
   */
  returnReason?: string;

  /**
   * @public
   * <p>Use this action to extend and automatically renew the commitment period for the radio
   *             unit. You can do the following:</p>
   *          <ul>
   *             <li>
   *                <p>Change a 60-day commitment to a 1-year or 3-year commitment. The change is
   *                     immediate and the hourly rate decreases to the rate for the new commitment
   *                     period.</p>
   *             </li>
   *             <li>
   *                <p>Change a 1-year commitment to a 3-year commitment. The change is immediate and
   *                     the hourly rate decreases to the rate for the 3-year commitment period.</p>
   *             </li>
   *             <li>
   *                <p>Set a 1-year commitment to automatically renew for an additional 1 year. The
   *                     hourly rate for the additional year will continue to be the same as your
   *                     existing 1-year rate.</p>
   *             </li>
   *             <li>
   *                <p>Set a 3-year commitment to automatically renew for an additional 1 year. The
   *                     hourly rate for the additional year will continue to be the same as your
   *                     existing 3-year rate.</p>
   *             </li>
   *             <li>
   *                <p>Turn off a previously-enabled automatic renewal on a 1-year or 3-year
   *                     commitment. You cannot use the automatic-renewal option for a 60-day
   *                     commitment.</p>
   *             </li>
   *          </ul>
   *          <p>For pricing, see <a href="http://aws.amazon.com/private5g/pricing">Amazon Web Services Private 5G
   *                 Pricing</a>.</p>
   */
  commitmentConfiguration?: CommitmentConfiguration;
}

/**
 * @public
 */
export interface StartNetworkResourceUpdateResponse {
  /**
   * @public
   * <p>The network resource.</p>
   */
  networkResource?: NetworkResource;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * @public
   * <p> The Amazon Resource Name (ARN) of the resource. </p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>The tags to add to the resource.</p>
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>The tag keys.</p>
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdateNetworkSiteRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the network site.</p>
   */
  networkSiteArn: string | undefined;

  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Run_Instance_Idempotency.html">How to ensure
   *                 idempotency</a>.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>The description.</p>
   */
  description?: string;
}

/**
 * @public
 */
export interface UpdateNetworkSiteResponse {
  /**
   * @public
   * <p>Information about the network site.</p>
   */
  networkSite?: NetworkSite;

  /**
   * @public
   * <p> The network site tags. </p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface UpdateNetworkSitePlanRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the network site.</p>
   */
  networkSiteArn: string | undefined;

  /**
   * @public
   * <p>The pending plan.</p>
   */
  pendingPlan: SitePlan | undefined;

  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Run_Instance_Idempotency.html">How to ensure
   *                 idempotency</a>.</p>
   */
  clientToken?: string;
}

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
  ...(obj.emailAddress && { emailAddress: SENSITIVE_STRING }),
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
export const ReturnInformationFilterSensitiveLog = (obj: ReturnInformation): any => ({
  ...obj,
  ...(obj.shippingAddress && { shippingAddress: AddressFilterSensitiveLog(obj.shippingAddress) }),
});

/**
 * @internal
 */
export const NetworkResourceFilterSensitiveLog = (obj: NetworkResource): any => ({
  ...obj,
  ...(obj.returnInformation && { returnInformation: ReturnInformationFilterSensitiveLog(obj.returnInformation) }),
});

/**
 * @internal
 */
export const ConfigureAccessPointResponseFilterSensitiveLog = (obj: ConfigureAccessPointResponse): any => ({
  ...obj,
  ...(obj.accessPoint && { accessPoint: NetworkResourceFilterSensitiveLog(obj.accessPoint) }),
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
export const DeactivateDeviceIdentifierResponseFilterSensitiveLog = (obj: DeactivateDeviceIdentifierResponse): any => ({
  ...obj,
  ...(obj.deviceIdentifier && { deviceIdentifier: DeviceIdentifierFilterSensitiveLog(obj.deviceIdentifier) }),
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
export const GetNetworkResponseFilterSensitiveLog = (obj: GetNetworkResponse): any => ({
  ...obj,
  ...(obj.tags && { tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetNetworkResourceResponseFilterSensitiveLog = (obj: GetNetworkResourceResponse): any => ({
  ...obj,
  ...(obj.networkResource && { networkResource: NetworkResourceFilterSensitiveLog(obj.networkResource) }),
  ...(obj.tags && { tags: SENSITIVE_STRING }),
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
export const GetOrderResponseFilterSensitiveLog = (obj: GetOrderResponse): any => ({
  ...obj,
  ...(obj.order && { order: OrderFilterSensitiveLog(obj.order) }),
  ...(obj.tags && { tags: SENSITIVE_STRING }),
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
export const ListNetworkResourcesResponseFilterSensitiveLog = (obj: ListNetworkResourcesResponse): any => ({
  ...obj,
  ...(obj.networkResources && {
    networkResources: obj.networkResources.map((item) => NetworkResourceFilterSensitiveLog(item)),
  }),
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
export const ListTagsForResourceResponseFilterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
  ...obj,
  ...(obj.tags && { tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const StartNetworkResourceUpdateRequestFilterSensitiveLog = (obj: StartNetworkResourceUpdateRequest): any => ({
  ...obj,
  ...(obj.shippingAddress && { shippingAddress: AddressFilterSensitiveLog(obj.shippingAddress) }),
});

/**
 * @internal
 */
export const StartNetworkResourceUpdateResponseFilterSensitiveLog = (obj: StartNetworkResourceUpdateResponse): any => ({
  ...obj,
  ...(obj.networkResource && { networkResource: NetworkResourceFilterSensitiveLog(obj.networkResource) }),
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
export const UntagResourceRequestFilterSensitiveLog = (obj: UntagResourceRequest): any => ({
  ...obj,
  ...(obj.tagKeys && { tagKeys: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateNetworkSiteResponseFilterSensitiveLog = (obj: UpdateNetworkSiteResponse): any => ({
  ...obj,
  ...(obj.tags && { tags: SENSITIVE_STRING }),
});
