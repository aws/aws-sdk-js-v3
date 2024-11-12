// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { PrivateNetworksServiceException as __BaseException } from "./PrivateNetworksServiceException";

/**
 * <p>You do not have permission to perform this operation.</p>
 * @public
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
   * <p>The Amazon Resource Name (ARN) of the order.</p>
   * @public
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
 * <p>Determines the duration and renewal status of the commitment period for a radio
 *             unit.</p>
 *          <p>For pricing, see <a href="http://aws.amazon.com/private5g/pricing">Amazon Web Services Private 5G
 *                 Pricing</a>.</p>
 * @public
 */
export interface CommitmentConfiguration {
  /**
   * <p>The duration of the commitment period for the radio unit. You can choose a 60-day, 1-year, or 3-year
   *             period.</p>
   * @public
   */
  commitmentLength: CommitmentLength | undefined;

  /**
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
   * @public
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
 * <p>Details of the network resources in the order.</p>
 * @public
 */
export interface OrderedResourceDefinition {
  /**
   * <p>The type of network resource in the order.</p>
   * @public
   */
  type: NetworkResourceDefinitionType | undefined;

  /**
   * <p>The number of network resources in the order.</p>
   * @public
   */
  count: number | undefined;

  /**
   * <p>The duration and renewal status of the commitment period for each radio unit in the
   *             order. Does not show details if the resource type is DEVICE_IDENTIFIER.</p>
   * @public
   */
  commitmentConfiguration?: CommitmentConfiguration | undefined;
}

/**
 * <p>Information about an address.</p>
 * @public
 */
export interface Address {
  /**
   * <p>The city for this address.</p>
   * @public
   */
  city: string | undefined;

  /**
   * <p>The company name for this address.</p>
   * @public
   */
  company?: string | undefined;

  /**
   * <p>The country for this address.</p>
   * @public
   */
  country: string | undefined;

  /**
   * <p>The recipient's name for this address.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The recipient's phone number.</p>
   * @public
   */
  phoneNumber?: string | undefined;

  /**
   * <p>The postal code for this address.</p>
   * @public
   */
  postalCode: string | undefined;

  /**
   * <p>The state or province for this address.</p>
   * @public
   */
  stateOrProvince: string | undefined;

  /**
   * <p>The first line of the street address.</p>
   * @public
   */
  street1: string | undefined;

  /**
   * <p>The second line of the street address.</p>
   * @public
   */
  street2?: string | undefined;

  /**
   * <p>The third line of the street address.</p>
   * @public
   */
  street3?: string | undefined;

  /**
   * <p>The recipient's email address.</p>
   * @public
   */
  emailAddress?: string | undefined;
}

/**
 * <p>Information about tracking a shipment.</p>
 * @public
 */
export interface TrackingInformation {
  /**
   * <p>The tracking number of the shipment.</p>
   * @public
   */
  trackingNumber?: string | undefined;
}

/**
 * <p>Information about an order.</p>
 * @public
 */
export interface Order {
  /**
   * <p>The Amazon Resource Name (ARN) of the order.</p>
   * @public
   */
  orderArn?: string | undefined;

  /**
   * <p>The shipping address of the order.</p>
   * @public
   */
  shippingAddress?: Address | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the network associated with this order.</p>
   * @public
   */
  networkArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the network site associated with this order.</p>
   * @public
   */
  networkSiteArn?: string | undefined;

  /**
   * <p>The tracking information of the order.</p>
   * @public
   */
  trackingInformation?: TrackingInformation[] | undefined;

  /**
   * <p>The acknowledgement status of the order.</p>
   * @public
   */
  acknowledgmentStatus?: AcknowledgmentStatus | undefined;

  /**
   * <p>The creation time of the order.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>A list of the network resources placed in the order.</p>
   * @public
   */
  orderedResources?: OrderedResourceDefinition[] | undefined;
}

/**
 * @public
 */
export interface AcknowledgeOrderReceiptResponse {
  /**
   * <p>Information about the order.</p>
   * @public
   */
  order: Order | undefined;
}

/**
 * <p>Information about an internal error.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  $retryable = {};
  /**
   * Advice to clients on when the call can be safely retried.
   * @public
   */
  retryAfterSeconds?: number | undefined;

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
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * Identifier of the affected resource.
   * @public
   */
  resourceId: string | undefined;

  /**
   * Type of the affected resource.
   * @public
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
 * @public
 */
export interface ValidationExceptionField {
  /**
   * <p>The field name that failed validation.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The message about the validation failure.</p>
   * @public
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
 * <p>The request failed validation.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * Reason the request failed validation.
   * @public
   */
  reason: ValidationExceptionReason | undefined;

  /**
   * The list of fields that caused the error, if applicable.
   * @public
   */
  fieldList?: ValidationExceptionField[] | undefined;

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
   * <p>The Amazon Resource Name (ARN) of the device identifier.</p>
   * @public
   */
  deviceIdentifierArn: string | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Run_Instance_Idempotency.html">How to ensure
   *                 idempotency</a>.</p>
   * @public
   */
  clientToken?: string | undefined;
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
 * <p>Information about a subscriber of a device that can use a network.</p>
 * @public
 */
export interface DeviceIdentifier {
  /**
   * <p>The Amazon Resource Name (ARN) of the device identifier.</p>
   * @public
   */
  deviceIdentifierArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the traffic group to which the device identifier
   *             belongs.</p>
   * @public
   */
  trafficGroupArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the network on which the device identifier
   *             appears.</p>
   * @public
   */
  networkArn?: string | undefined;

  /**
   * <p>The International Mobile Subscriber Identity of the device identifier.</p>
   * @public
   */
  imsi?: string | undefined;

  /**
   * <p>The Integrated Circuit Card Identifier of the device identifier.</p>
   * @public
   */
  iccid?: string | undefined;

  /**
   * <p>The vendor of the device identifier.</p>
   * @public
   */
  vendor?: string | undefined;

  /**
   * <p>The status of the device identifier.</p>
   * @public
   */
  status?: DeviceIdentifierStatus | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the order used to purchase the device
   *             identifier.</p>
   * @public
   */
  orderArn?: string | undefined;

  /**
   * <p>The creation time of this device identifier.</p>
   * @public
   */
  createdAt?: Date | undefined;
}

/**
 * @public
 */
export interface ActivateDeviceIdentifierResponse {
  /**
   * <p>Information about the device identifier.</p>
   * @public
   */
  deviceIdentifier: DeviceIdentifier | undefined;

  /**
   * <p> The tags on the device identifier. </p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ActivateNetworkSiteRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the network site.</p>
   * @public
   */
  networkSiteArn: string | undefined;

  /**
   * <p>The shipping address of the network site.</p>
   * @public
   */
  shippingAddress: Address | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Run_Instance_Idempotency.html">How to ensure
   *                 idempotency</a>.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
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
   * @public
   */
  commitmentConfiguration?: CommitmentConfiguration | undefined;
}

/**
 * <p>Information about a name/value pair.</p>
 * @public
 */
export interface NameValuePair {
  /**
   * <p>The name of the pair.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The value of the pair.</p>
   * @public
   */
  value?: string | undefined;
}

/**
 * <p>Information about a network resource definition.</p>
 * @public
 */
export interface NetworkResourceDefinition {
  /**
   * <p>The type in the network resource definition.</p>
   * @public
   */
  type: NetworkResourceDefinitionType | undefined;

  /**
   * <p>The options in the network resource definition.</p>
   * @public
   */
  options?: NameValuePair[] | undefined;

  /**
   * <p>The count in the network resource definition.</p>
   * @public
   */
  count: number | undefined;
}

/**
 * <p>Information about a site plan.</p>
 * @public
 */
export interface SitePlan {
  /**
   * <p>The resource definitions of the plan.</p>
   * @public
   */
  resourceDefinitions?: NetworkResourceDefinition[] | undefined;

  /**
   * <p>The options of the plan.</p>
   * @public
   */
  options?: NameValuePair[] | undefined;
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
 * <p>Information about a network site.</p>
 * @public
 */
export interface NetworkSite {
  /**
   * <p>The Amazon Resource Name (ARN) of the network site.</p>
   * @public
   */
  networkSiteArn: string | undefined;

  /**
   * <p>The name of the network site.</p>
   * @public
   */
  networkSiteName: string | undefined;

  /**
   * <p>The description of the network site.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The status of the network site.</p>
   * @public
   */
  status: NetworkSiteStatus | undefined;

  /**
   * <p>The status reason of the network site.</p>
   * @public
   */
  statusReason?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the network to which the network site
   *             belongs.</p>
   * @public
   */
  networkArn: string | undefined;

  /**
   * <p>The pending plan of the network site.</p>
   * @public
   */
  pendingPlan?: SitePlan | undefined;

  /**
   * <p>The current plan of the network site.</p>
   * @public
   */
  currentPlan?: SitePlan | undefined;

  /**
   * <p>The creation time of the network site.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p> The parent Availability Zone for the network site. </p>
   * @public
   */
  availabilityZone?: string | undefined;

  /**
   * <p> The parent Availability Zone ID for the network site. </p>
   * @public
   */
  availabilityZoneId?: string | undefined;
}

/**
 * @public
 */
export interface ActivateNetworkSiteResponse {
  /**
   * <p>Information about the network site.</p>
   * @public
   */
  networkSite?: NetworkSite | undefined;
}

/**
 * <p>Shows the duration, the date and time that the contract started and ends, and the
 *             renewal status of the commitment period for the radio unit.</p>
 * @public
 */
export interface CommitmentInformation {
  /**
   * <p>The duration and renewal status of the commitment period for the radio unit.</p>
   * @public
   */
  commitmentConfiguration: CommitmentConfiguration | undefined;

  /**
   * <p>The date and time that the commitment period started.</p>
   * @public
   */
  startAt?: Date | undefined;

  /**
   * <p>The date and time that the commitment period ends. If you do not cancel or renew the
   *             commitment before the expiration date, you will be billed at the 60-day-commitment
   *             rate.</p>
   * @public
   */
  expiresOn?: Date | undefined;
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
 * <p>Information about a position.</p>
 * @public
 */
export interface Position {
  /**
   * <p>The latitude of the position.</p>
   * @public
   */
  latitude?: number | undefined;

  /**
   * <p>The longitude of the position.</p>
   * @public
   */
  longitude?: number | undefined;

  /**
   * <p>The elevation of the equipment at this position.</p>
   * @public
   */
  elevation?: number | undefined;

  /**
   * <p>The units used to measure the elevation of the position.</p>
   * @public
   */
  elevationUnit?: ElevationUnit | undefined;

  /**
   * <p>The reference point from which elevation is reported.</p>
   * @public
   */
  elevationReference?: ElevationReference | undefined;
}

/**
 * @public
 */
export interface ConfigureAccessPointRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the network resource.</p>
   * @public
   */
  accessPointArn: string | undefined;

  /**
   * <p>The position of the network resource.</p>
   * @public
   */
  position?: Position | undefined;

  /**
   * <p>The CPI user name of the CPI user who is certifying the coordinates of the radio
   *             unit.</p>
   * @public
   */
  cpiUsername?: string | undefined;

  /**
   * <p>The CPI user ID of the CPI user who is certifying the coordinates of the network
   *             resource. </p>
   * @public
   */
  cpiUserId?: string | undefined;

  /**
   * <p>The CPI password associated with the CPI certificate in
   *             <code>cpiSecretKey</code>.</p>
   * @public
   */
  cpiUserPassword?: string | undefined;

  /**
   * <p>A Base64 encoded string of the CPI certificate associated with the CPI user who is
   *             certifying the coordinates of the network resource. </p>
   * @public
   */
  cpiSecretKey?: string | undefined;
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
 * <p>Information about a request to return a network resource.</p>
 * @public
 */
export interface ReturnInformation {
  /**
   * <p>The shipping address.</p>
   * @public
   */
  shippingAddress?: Address | undefined;

  /**
   * <p>The reason for the return. If the return request did not include a reason for the
   *             return, this value is null.</p>
   * @public
   */
  returnReason?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the replacement order.</p>
   * @public
   */
  replacementOrderArn?: string | undefined;

  /**
   * <p>The URL of the shipping label. The shipping label is available for download only if
   *             the status of the network resource is <code>PENDING_RETURN</code>. For more information,
   *             see <a href="https://docs.aws.amazon.com/private-networks/latest/userguide/radio-units.html#return-radio-unit">Return a
   *                 radio unit</a>.</p>
   * @public
   */
  shippingLabel?: string | undefined;
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
 * <p>Information about a network resource.</p>
 * @public
 */
export interface NetworkResource {
  /**
   * <p>The Amazon Resource Name (ARN) of the network resource.</p>
   * @public
   */
  networkResourceArn?: string | undefined;

  /**
   * <p>The description of the network resource.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The type of the network resource.</p>
   * @public
   */
  type?: NetworkResourceType | undefined;

  /**
   * <p>The status of the network resource.</p>
   * @public
   */
  status?: NetworkResourceStatus | undefined;

  /**
   * <p>The status reason of the network resource.</p>
   * @public
   */
  statusReason?: string | undefined;

  /**
   * <p>The vendor of the network resource.</p>
   * @public
   */
  vendor?: string | undefined;

  /**
   * <p>The model of the network resource.</p>
   * @public
   */
  model?: string | undefined;

  /**
   * <p>The serial number of the network resource.</p>
   * @public
   */
  serialNumber?: string | undefined;

  /**
   * <p>The health of the network resource.</p>
   * @public
   */
  health?: HealthStatus | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the network on which this network resource
   *             appears.</p>
   * @public
   */
  networkArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the network site on which this network resource
   *             appears.</p>
   * @public
   */
  networkSiteArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the order used to purchase this network
   *             resource.</p>
   * @public
   */
  orderArn?: string | undefined;

  /**
   * <p>The attributes of the network resource.</p>
   * @public
   */
  attributes?: NameValuePair[] | undefined;

  /**
   * <p>The position of the network resource.</p>
   * @public
   */
  position?: Position | undefined;

  /**
   * <p>The creation time of the network resource.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>Information about a request to return the network resource.</p>
   * @public
   */
  returnInformation?: ReturnInformation | undefined;

  /**
   * <p>Information about the commitment period for the radio unit. Shows the duration, the
   *             date and time that the contract started and ends, and the renewal status of the
   *             commitment period.</p>
   * @public
   */
  commitmentInformation?: CommitmentInformation | undefined;
}

/**
 * @public
 */
export interface ConfigureAccessPointResponse {
  /**
   * <p>Information about the network resource.</p>
   * @public
   */
  accessPoint: NetworkResource | undefined;
}

/**
 * @public
 */
export interface CreateNetworkRequest {
  /**
   * <p>The name of the network. You can't change the name after you create the
   *             network.</p>
   * @public
   */
  networkName: string | undefined;

  /**
   * <p>The description of the network.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Run_Instance_Idempotency.html">How to ensure
   *                 idempotency</a>.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p> The tags to apply to the network. </p>
   * @public
   */
  tags?: Record<string, string> | undefined;
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
 * <p>Information about a network.</p>
 * @public
 */
export interface Network {
  /**
   * <p>The Amazon Resource Name (ARN) of the network.</p>
   * @public
   */
  networkArn: string | undefined;

  /**
   * <p>The name of the network.</p>
   * @public
   */
  networkName: string | undefined;

  /**
   * <p>The description of the network.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The status of the network.</p>
   * @public
   */
  status: NetworkStatus | undefined;

  /**
   * <p>The status reason of the network.</p>
   * @public
   */
  statusReason?: string | undefined;

  /**
   * <p>The creation time of the network.</p>
   * @public
   */
  createdAt?: Date | undefined;
}

/**
 * @public
 */
export interface CreateNetworkResponse {
  /**
   * <p>Information about the network.</p>
   * @public
   */
  network: Network | undefined;

  /**
   * <p> The network tags. </p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>The limit was exceeded.</p>
 * @public
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
   * <p>The name of the site. You can't change the name after you create the site.</p>
   * @public
   */
  networkSiteName: string | undefined;

  /**
   * <p>The description of the site.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the network.</p>
   * @public
   */
  networkArn: string | undefined;

  /**
   * <p>Information about the pending plan for this site.</p>
   * @public
   */
  pendingPlan?: SitePlan | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Run_Instance_Idempotency.html">How to ensure
   *                 idempotency</a>.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The Availability Zone that is the parent of this site. You can't change the
   *             Availability Zone after you create the site.</p>
   * @public
   */
  availabilityZone?: string | undefined;

  /**
   * <p>The ID of the Availability Zone that is the parent of this site. You can't change the
   *             Availability Zone after you create the site.</p>
   * @public
   */
  availabilityZoneId?: string | undefined;

  /**
   * <p> The tags to apply to the network site. </p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateNetworkSiteResponse {
  /**
   * <p>Information about the network site.</p>
   * @public
   */
  networkSite?: NetworkSite | undefined;

  /**
   * <p> The network site tags. </p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface DeactivateDeviceIdentifierRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the device identifier.</p>
   * @public
   */
  deviceIdentifierArn: string | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Run_Instance_Idempotency.html">How to ensure
   *                 idempotency</a>.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface DeactivateDeviceIdentifierResponse {
  /**
   * <p>Information about the device identifier.</p>
   * @public
   */
  deviceIdentifier: DeviceIdentifier | undefined;
}

/**
 * @public
 */
export interface DeleteNetworkRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the network.</p>
   * @public
   */
  networkArn: string | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Run_Instance_Idempotency.html">How to ensure
   *                 idempotency</a>.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteNetworkResponse {
  /**
   * <p>Information about the network.</p>
   * @public
   */
  network: Network | undefined;
}

/**
 * @public
 */
export interface DeleteNetworkSiteRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the network site.</p>
   * @public
   */
  networkSiteArn: string | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Run_Instance_Idempotency.html">How to ensure
   *                 idempotency</a>.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteNetworkSiteResponse {
  /**
   * <p>Information about the network site.</p>
   * @public
   */
  networkSite?: NetworkSite | undefined;
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
   * <p>The Amazon Resource Name (ARN) of the device identifier.</p>
   * @public
   */
  deviceIdentifierArn: string | undefined;
}

/**
 * @public
 */
export interface GetDeviceIdentifierResponse {
  /**
   * <p>Information about the device identifier.</p>
   * @public
   */
  deviceIdentifier?: DeviceIdentifier | undefined;

  /**
   * <p> The device identifier tags. </p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetNetworkRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the network.</p>
   * @public
   */
  networkArn: string | undefined;
}

/**
 * @public
 */
export interface GetNetworkResponse {
  /**
   * <p>Information about the network.</p>
   * @public
   */
  network: Network | undefined;

  /**
   * <p> The network tags. </p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetNetworkResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the network resource.</p>
   * @public
   */
  networkResourceArn: string | undefined;
}

/**
 * @public
 */
export interface GetNetworkResourceResponse {
  /**
   * <p>Information about the network resource.</p>
   * @public
   */
  networkResource: NetworkResource | undefined;

  /**
   * <p> The network resource tags. </p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetNetworkSiteRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the network site.</p>
   * @public
   */
  networkSiteArn: string | undefined;
}

/**
 * @public
 */
export interface GetNetworkSiteResponse {
  /**
   * <p>Information about the network site.</p>
   * @public
   */
  networkSite?: NetworkSite | undefined;

  /**
   * <p> The network site tags. </p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetOrderRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the order.</p>
   * @public
   */
  orderArn: string | undefined;
}

/**
 * @public
 */
export interface GetOrderResponse {
  /**
   * <p>Information about the order.</p>
   * @public
   */
  order: Order | undefined;

  /**
   * <p> The order tags. </p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListDeviceIdentifiersRequest {
  /**
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
   * @public
   */
  filters?: Partial<Record<DeviceIdentifierFilterKeys, string[]>> | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the network.</p>
   * @public
   */
  networkArn: string | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  startToken?: string | undefined;

  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListDeviceIdentifiersResponse {
  /**
   * <p>Information about the device identifiers.</p>
   * @public
   */
  deviceIdentifiers?: DeviceIdentifier[] | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
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
   * @public
   */
  filters?: Partial<Record<NetworkResourceFilterKeys, string[]>> | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the network.</p>
   * @public
   */
  networkArn: string | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  startToken?: string | undefined;

  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListNetworkResourcesResponse {
  /**
   * <p>Information about network resources.</p>
   * @public
   */
  networkResources?: NetworkResource[] | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
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
   * @public
   */
  filters?: Partial<Record<NetworkFilterKeys, string[]>> | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  startToken?: string | undefined;

  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListNetworksResponse {
  /**
   * <p>The networks.</p>
   * @public
   */
  networks?: Network[] | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
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
   * @public
   */
  filters?: Partial<Record<NetworkSiteFilterKeys, string[]>> | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the network.</p>
   * @public
   */
  networkArn: string | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  startToken?: string | undefined;

  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListNetworkSitesResponse {
  /**
   * <p>Information about the network sites.</p>
   * @public
   */
  networkSites?: NetworkSite[] | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
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
   * <p>The Amazon Resource Name (ARN) of the network.</p>
   * @public
   */
  networkArn: string | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  startToken?: string | undefined;

  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
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
   * @public
   */
  filters?: Partial<Record<OrderFilterKeys, string[]>> | undefined;
}

/**
 * @public
 */
export interface ListOrdersResponse {
  /**
   * <p>Information about the orders.</p>
   * @public
   */
  orders?: Order[] | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The resource tags.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p> The request was denied due to request throttling. </p>
 * @public
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
   * <p>Information about the health of the service.</p>
   * @public
   */
  status?: string | undefined;
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
   * <p>The Amazon Resource Name (ARN) of the network resource.</p>
   * @public
   */
  networkResourceArn: string | undefined;

  /**
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
   * @public
   */
  updateType: UpdateType | undefined;

  /**
   * <p>The shipping address. If you don't provide a shipping address when replacing or
   *             returning a network resource, we use the address from the original order for the network
   *             resource.</p>
   * @public
   */
  shippingAddress?: Address | undefined;

  /**
   * <p>The reason for the return. Providing a reason for a return is optional.</p>
   * @public
   */
  returnReason?: string | undefined;

  /**
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
   * @public
   */
  commitmentConfiguration?: CommitmentConfiguration | undefined;
}

/**
 * @public
 */
export interface StartNetworkResourceUpdateResponse {
  /**
   * <p>The network resource.</p>
   * @public
   */
  networkResource?: NetworkResource | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p> The Amazon Resource Name (ARN) of the resource. </p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The tags to add to the resource.</p>
   * @public
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
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The tag keys.</p>
   * @public
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
   * <p>The Amazon Resource Name (ARN) of the network site.</p>
   * @public
   */
  networkSiteArn: string | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Run_Instance_Idempotency.html">How to ensure
   *                 idempotency</a>.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The description.</p>
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface UpdateNetworkSiteResponse {
  /**
   * <p>Information about the network site.</p>
   * @public
   */
  networkSite?: NetworkSite | undefined;

  /**
   * <p> The network site tags. </p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UpdateNetworkSitePlanRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the network site.</p>
   * @public
   */
  networkSiteArn: string | undefined;

  /**
   * <p>The pending plan.</p>
   * @public
   */
  pendingPlan: SitePlan | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Run_Instance_Idempotency.html">How to ensure
   *                 idempotency</a>.</p>
   * @public
   */
  clientToken?: string | undefined;
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
