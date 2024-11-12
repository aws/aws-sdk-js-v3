// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { OutpostsServiceException as __BaseException } from "./OutpostsServiceException";

/**
 * <p>You do not have permission to perform this operation.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
 * <p> Information about an address. </p>
 * @public
 */
export interface Address {
  /**
   * <p>The name of the contact.</p>
   * @public
   */
  ContactName?: string | undefined;

  /**
   * <p>The phone number of the contact.</p>
   * @public
   */
  ContactPhoneNumber?: string | undefined;

  /**
   * <p>The first line of the address.</p>
   * @public
   */
  AddressLine1: string | undefined;

  /**
   * <p>The second line of the address.</p>
   * @public
   */
  AddressLine2?: string | undefined;

  /**
   * <p>The third line of the address.</p>
   * @public
   */
  AddressLine3?: string | undefined;

  /**
   * <p>The city for the address.</p>
   * @public
   */
  City: string | undefined;

  /**
   * <p>The state for the address.</p>
   * @public
   */
  StateOrRegion: string | undefined;

  /**
   * <p>The district or county for the address.</p>
   * @public
   */
  DistrictOrCounty?: string | undefined;

  /**
   * <p>The postal code for the address.</p>
   * @public
   */
  PostalCode: string | undefined;

  /**
   * <p>The ISO-3166 two-letter country code for the address.</p>
   * @public
   */
  CountryCode: string | undefined;

  /**
   * <p>The municipality for the address.</p>
   * @public
   */
  Municipality?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const AddressType = {
  OPERATING_ADDRESS: "OPERATING_ADDRESS",
  SHIPPING_ADDRESS: "SHIPPING_ADDRESS",
} as const;

/**
 * @public
 */
export type AddressType = (typeof AddressType)[keyof typeof AddressType];

/**
 * <p> Information about the position of the asset in a rack. </p>
 * @public
 */
export interface AssetLocation {
  /**
   * <p> The position of an asset in a rack measured in rack units. </p>
   * @public
   */
  RackElevation?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const AssetType = {
  COMPUTE: "COMPUTE",
} as const;

/**
 * @public
 */
export type AssetType = (typeof AssetType)[keyof typeof AssetType];

/**
 * <p>The capacity for each instance type.</p>
 * @public
 */
export interface AssetInstanceTypeCapacity {
  /**
   * <p>The type of instance.</p>
   * @public
   */
  InstanceType: string | undefined;

  /**
   * <p>The number of each instance type.</p>
   * @public
   */
  Count: number | undefined;
}

/**
 * @public
 * @enum
 */
export const ComputeAssetState = {
  ACTIVE: "ACTIVE",
  ISOLATED: "ISOLATED",
  RETIRING: "RETIRING",
} as const;

/**
 * @public
 */
export type ComputeAssetState = (typeof ComputeAssetState)[keyof typeof ComputeAssetState];

/**
 * <p> Information about compute hardware assets. </p>
 * @public
 */
export interface ComputeAttributes {
  /**
   * <p> The host ID of the Dedicated Host on the asset. </p>
   * @public
   */
  HostId?: string | undefined;

  /**
   * <p>The state.</p>
   *          <ul>
   *             <li>
   *                <p>ACTIVE - The asset is available and can provide capacity for new compute
   *           resources.</p>
   *             </li>
   *             <li>
   *                <p>ISOLATED - The asset is undergoing maintenance and can't provide capacity for new
   *           compute resources. Existing compute resources on the asset are not affected.</p>
   *             </li>
   *             <li>
   *                <p>RETIRING - The underlying hardware for the asset is degraded. Capacity for new compute
   *           resources is reduced. Amazon Web Services sends notifications for resources that must be stopped before
   *           the asset can be replaced.</p>
   *             </li>
   *          </ul>
   * @public
   */
  State?: ComputeAssetState | undefined;

  /**
   * <p>A list of the names of instance families that are currently associated with a given
   *       asset.</p>
   * @public
   */
  InstanceFamilies?: string[] | undefined;

  /**
   * <p>The instance type capacities configured for this asset. This can be changed through a
   *       capacity task.</p>
   * @public
   */
  InstanceTypeCapacities?: AssetInstanceTypeCapacity[] | undefined;

  /**
   * <p>The maximum number of vCPUs possible for the specified asset.</p>
   * @public
   */
  MaxVcpus?: number | undefined;
}

/**
 * <p> Information about hardware assets. </p>
 * @public
 */
export interface AssetInfo {
  /**
   * <p> The ID of the asset. </p>
   * @public
   */
  AssetId?: string | undefined;

  /**
   * <p> The rack ID of the asset. </p>
   * @public
   */
  RackId?: string | undefined;

  /**
   * <p> The type of the asset. </p>
   * @public
   */
  AssetType?: AssetType | undefined;

  /**
   * <p> Information about compute hardware assets. </p>
   * @public
   */
  ComputeAttributes?: ComputeAttributes | undefined;

  /**
   * <p> The position of an asset in a rack. </p>
   * @public
   */
  AssetLocation?: AssetLocation | undefined;
}

/**
 * @public
 * @enum
 */
export const AWSServiceName = {
  AWS: "AWS",
  EC2: "EC2",
  ELASTICACHE: "ELASTICACHE",
  ELB: "ELB",
  RDS: "RDS",
  ROUTE53: "ROUTE53",
} as const;

/**
 * @public
 */
export type AWSServiceName = (typeof AWSServiceName)[keyof typeof AWSServiceName];

/**
 * <p>An Amazon EC2 instance.</p>
 * @public
 */
export interface AssetInstance {
  /**
   * <p>The ID of the instance.</p>
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * <p>The type of instance.</p>
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * <p>The ID of the asset.</p>
   * @public
   */
  AssetId?: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services account.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The Amazon Web Services service name of the instance.</p>
   * @public
   */
  AwsServiceName?: AWSServiceName | undefined;
}

/**
 * @public
 * @enum
 */
export const AssetState = {
  ACTIVE: "ACTIVE",
  ISOLATED: "ISOLATED",
  RETIRING: "RETIRING",
} as const;

/**
 * @public
 */
export type AssetState = (typeof AssetState)[keyof typeof AssetState];

/**
 * <p>A running Amazon EC2 instance that can be stopped to free up capacity needed to run the
 *       capacity task.</p>
 * @public
 */
export interface BlockingInstance {
  /**
   * <p>The ID of the blocking instance.</p>
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services account.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The Amazon Web Services service name that owns the specified blocking instance.</p>
   * @public
   */
  AwsServiceName?: AWSServiceName | undefined;
}

/**
 * @public
 */
export interface CancelCapacityTaskInput {
  /**
   * <p>ID of the capacity task that you want to cancel.</p>
   * @public
   */
  CapacityTaskId: string | undefined;

  /**
   * <p>ID or ARN of the Outpost associated with the capacity task that you want to cancel.</p>
   * @public
   */
  OutpostIdentifier: string | undefined;
}

/**
 * @public
 */
export interface CancelCapacityTaskOutput {}

/**
 * @public
 * @enum
 */
export const ResourceType = {
  ORDER: "ORDER",
  OUTPOST: "OUTPOST",
} as const;

/**
 * @public
 */
export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType];

/**
 * <p>Updating or deleting this resource can cause an inconsistent state.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * <p>The ID of the resource causing the conflict.</p>
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * <p>The type of the resource causing the conflict.</p>
   * @public
   */
  ResourceType?: ResourceType | undefined;
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
 * <p>An internal error has occurred.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  Message?: string | undefined;
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
 * <p>The specified request is not valid.</p>
 * @public
 */
export class NotFoundException extends __BaseException {
  readonly name: "NotFoundException" = "NotFoundException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NotFoundException, __BaseException>) {
    super({
      name: "NotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>A parameter is not valid.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
export interface CancelOrderInput {
  /**
   * <p> The ID of the order. </p>
   * @public
   */
  OrderId: string | undefined;
}

/**
 * @public
 */
export interface CancelOrderOutput {}

/**
 * @public
 * @enum
 */
export const CapacityTaskFailureType = {
  BLOCKING_INSTANCES_NOT_EVACUATED: "BLOCKING_INSTANCES_NOT_EVACUATED",
  INTERNAL_SERVER_ERROR: "INTERNAL_SERVER_ERROR",
  RESOURCE_NOT_FOUND: "RESOURCE_NOT_FOUND",
  UNEXPECTED_ASSET_STATE: "UNEXPECTED_ASSET_STATE",
  UNSUPPORTED_CAPACITY_CONFIGURATION: "UNSUPPORTED_CAPACITY_CONFIGURATION",
} as const;

/**
 * @public
 */
export type CapacityTaskFailureType = (typeof CapacityTaskFailureType)[keyof typeof CapacityTaskFailureType];

/**
 * <p>The capacity tasks that failed.</p>
 * @public
 */
export interface CapacityTaskFailure {
  /**
   * <p>The reason that the specified capacity task failed.</p>
   * @public
   */
  Reason: string | undefined;

  /**
   * <p>The type of failure.</p>
   * @public
   */
  Type?: CapacityTaskFailureType | undefined;
}

/**
 * @public
 * @enum
 */
export const CapacityTaskStatus = {
  CANCELLATION_IN_PROGRESS: "CANCELLATION_IN_PROGRESS",
  CANCELLED: "CANCELLED",
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  REQUESTED: "REQUESTED",
  WAITING_FOR_EVACUATION: "WAITING_FOR_EVACUATION",
} as const;

/**
 * @public
 */
export type CapacityTaskStatus = (typeof CapacityTaskStatus)[keyof typeof CapacityTaskStatus];

/**
 * <p>The summary of the capacity task.</p>
 * @public
 */
export interface CapacityTaskSummary {
  /**
   * <p>The ID of the specified capacity task.</p>
   * @public
   */
  CapacityTaskId?: string | undefined;

  /**
   * <p>The ID of the Outpost associated with the specified capacity task.</p>
   * @public
   */
  OutpostId?: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services Outposts order of the host associated with the capacity task.</p>
   * @public
   */
  OrderId?: string | undefined;

  /**
   * <p>The status of the capacity task.</p>
   * @public
   */
  CapacityTaskStatus?: CapacityTaskStatus | undefined;

  /**
   * <p>The date that the specified capacity task was created.</p>
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * <p>The date that the specified capacity task successfully ran.</p>
   * @public
   */
  CompletionDate?: Date | undefined;

  /**
   * <p>The date that the specified capacity was last modified.</p>
   * @public
   */
  LastModifiedDate?: Date | undefined;
}

/**
 * <p> Information about EC2 capacity. </p>
 * @public
 */
export interface EC2Capacity {
  /**
   * <p> The family of the EC2 capacity. </p>
   * @public
   */
  Family?: string | undefined;

  /**
   * <p> The maximum size of the EC2 capacity. </p>
   * @public
   */
  MaxSize?: string | undefined;

  /**
   * <p> The quantity of the EC2 capacity. </p>
   * @public
   */
  Quantity?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const CatalogItemStatus = {
  AVAILABLE: "AVAILABLE",
  DISCONTINUED: "DISCONTINUED",
} as const;

/**
 * @public
 */
export type CatalogItemStatus = (typeof CatalogItemStatus)[keyof typeof CatalogItemStatus];

/**
 * @public
 * @enum
 */
export const SupportedStorageEnum = {
  EBS: "EBS",
  S3: "S3",
} as const;

/**
 * @public
 */
export type SupportedStorageEnum = (typeof SupportedStorageEnum)[keyof typeof SupportedStorageEnum];

/**
 * <p> Information about a catalog item. </p>
 * @public
 */
export interface CatalogItem {
  /**
   * <p> The ID of the catalog item. </p>
   * @public
   */
  CatalogItemId?: string | undefined;

  /**
   * <p> The status of a catalog item. </p>
   * @public
   */
  ItemStatus?: CatalogItemStatus | undefined;

  /**
   * <p> Information about the EC2 capacity of an item. </p>
   * @public
   */
  EC2Capacities?: EC2Capacity[] | undefined;

  /**
   * <p> Information about the power draw of an item. </p>
   * @public
   */
  PowerKva?: number | undefined;

  /**
   * <p> The weight of the item in pounds. </p>
   * @public
   */
  WeightLbs?: number | undefined;

  /**
   * <p> The uplink speed this catalog item requires for the connection to the Region. </p>
   * @public
   */
  SupportedUplinkGbps?: number[] | undefined;

  /**
   * <p> The supported storage options for the catalog item. </p>
   * @public
   */
  SupportedStorage?: SupportedStorageEnum[] | undefined;
}

/**
 * @public
 * @enum
 */
export const CatalogItemClass = {
  RACK: "RACK",
  SERVER: "SERVER",
} as const;

/**
 * @public
 */
export type CatalogItemClass = (typeof CatalogItemClass)[keyof typeof CatalogItemClass];

/**
 * <p> Information about a connection. </p>
 * @public
 */
export interface ConnectionDetails {
  /**
   * <p> The public key of the client. </p>
   * @public
   */
  ClientPublicKey?: string | undefined;

  /**
   * <p> The public key of the server. </p>
   * @public
   */
  ServerPublicKey?: string | undefined;

  /**
   * <p> The endpoint for the server. </p>
   * @public
   */
  ServerEndpoint?: string | undefined;

  /**
   * <p> The client tunnel address. </p>
   * @public
   */
  ClientTunnelAddress?: string | undefined;

  /**
   * <p> The server tunnel address. </p>
   * @public
   */
  ServerTunnelAddress?: string | undefined;

  /**
   * <p> The allowed IP addresses. </p>
   * @public
   */
  AllowedIps?: string[] | undefined;
}

/**
 * <p>Information about a line item request.</p>
 * @public
 */
export interface LineItemRequest {
  /**
   * <p>The ID of the catalog item.</p>
   * @public
   */
  CatalogItemId?: string | undefined;

  /**
   * <p>The quantity of a line item request.</p>
   * @public
   */
  Quantity?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const PaymentOption = {
  ALL_UPFRONT: "ALL_UPFRONT",
  NO_UPFRONT: "NO_UPFRONT",
  PARTIAL_UPFRONT: "PARTIAL_UPFRONT",
} as const;

/**
 * @public
 */
export type PaymentOption = (typeof PaymentOption)[keyof typeof PaymentOption];

/**
 * @public
 * @enum
 */
export const PaymentTerm = {
  ONE_YEAR: "ONE_YEAR",
  THREE_YEARS: "THREE_YEARS",
} as const;

/**
 * @public
 */
export type PaymentTerm = (typeof PaymentTerm)[keyof typeof PaymentTerm];

/**
 * @public
 */
export interface CreateOrderInput {
  /**
   * <p> The ID or the Amazon Resource Name (ARN) of the Outpost. </p>
   * @public
   */
  OutpostIdentifier: string | undefined;

  /**
   * <p>The line items that make up the order.</p>
   * @public
   */
  LineItems: LineItemRequest[] | undefined;

  /**
   * <p>The payment option.</p>
   * @public
   */
  PaymentOption: PaymentOption | undefined;

  /**
   * <p>The payment terms.</p>
   * @public
   */
  PaymentTerm?: PaymentTerm | undefined;
}

/**
 * <p> Information about a line item asset. </p>
 * @public
 */
export interface LineItemAssetInformation {
  /**
   * <p> The ID of the asset. </p>
   * @public
   */
  AssetId?: string | undefined;

  /**
   * <p> The MAC addresses of the asset. </p>
   * @public
   */
  MacAddressList?: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const ShipmentCarrier = {
  DBS: "DBS",
  DHL: "DHL",
  EXPEDITORS: "EXPEDITORS",
  FEDEX: "FEDEX",
  UPS: "UPS",
} as const;

/**
 * @public
 */
export type ShipmentCarrier = (typeof ShipmentCarrier)[keyof typeof ShipmentCarrier];

/**
 * <p> Information about a line item shipment. </p>
 * @public
 */
export interface ShipmentInformation {
  /**
   * <p> The tracking number of the shipment. </p>
   * @public
   */
  ShipmentTrackingNumber?: string | undefined;

  /**
   * <p> The carrier of the shipment. </p>
   * @public
   */
  ShipmentCarrier?: ShipmentCarrier | undefined;
}

/**
 * @public
 * @enum
 */
export const LineItemStatus = {
  BUILDING: "BUILDING",
  CANCELLED: "CANCELLED",
  DELIVERED: "DELIVERED",
  ERROR: "ERROR",
  INSTALLED: "INSTALLED",
  INSTALLING: "INSTALLING",
  PREPARING: "PREPARING",
  REPLACED: "REPLACED",
  SHIPPED: "SHIPPED",
} as const;

/**
 * @public
 */
export type LineItemStatus = (typeof LineItemStatus)[keyof typeof LineItemStatus];

/**
 * <p>Information about a line item.</p>
 * @public
 */
export interface LineItem {
  /**
   * <p> The ID of the catalog item.</p>
   * @public
   */
  CatalogItemId?: string | undefined;

  /**
   * <p>The ID of the line item.</p>
   * @public
   */
  LineItemId?: string | undefined;

  /**
   * <p>The quantity of the line item.</p>
   * @public
   */
  Quantity?: number | undefined;

  /**
   * <p>The status of the line item.</p>
   * @public
   */
  Status?: LineItemStatus | undefined;

  /**
   * <p> Information about a line item shipment. </p>
   * @public
   */
  ShipmentInformation?: ShipmentInformation | undefined;

  /**
   * <p> Information about assets. </p>
   * @public
   */
  AssetInformationList?: LineItemAssetInformation[] | undefined;

  /**
   * <p>The ID of the previous line item.</p>
   * @public
   */
  PreviousLineItemId?: string | undefined;

  /**
   * <p>The ID of the previous order.</p>
   * @public
   */
  PreviousOrderId?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const OrderType = {
  OUTPOST: "OUTPOST",
  REPLACEMENT: "REPLACEMENT",
} as const;

/**
 * @public
 */
export type OrderType = (typeof OrderType)[keyof typeof OrderType];

/**
 * @public
 * @enum
 */
export const OrderStatus = {
  CANCELLED: "CANCELLED",
  COMPLETED: "COMPLETED",
  DELIVERED: "DELIVERED",
  ERROR: "ERROR",
  FULFILLED: "FULFILLED",
  INSTALLING: "INSTALLING",
  IN_PROGRESS: "IN_PROGRESS",
  PENDING: "PENDING",
  PREPARING: "PREPARING",
  PROCESSING: "PROCESSING",
  RECEIVED: "RECEIVED",
} as const;

/**
 * @public
 */
export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus];

/**
 * <p>Information about an order.</p>
 * @public
 */
export interface Order {
  /**
   * <p> The ID of the Outpost in the order. </p>
   * @public
   */
  OutpostId?: string | undefined;

  /**
   * <p>The ID of the order.</p>
   * @public
   */
  OrderId?: string | undefined;

  /**
   * <p>The status of the order.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PREPARING</code> - Order is received and being prepared.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IN_PROGRESS</code> - Order is either being built or shipped. To get more
   *           details, see the line item status.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELIVERED</code> - Order was delivered to the Outpost site.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>COMPLETED</code> - Order is complete.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CANCELLED</code> - Order is cancelled.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ERROR</code> - Customer should contact support.</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>The following status are deprecated: <code>RECEIVED</code>, <code>PENDING</code>,
   *           <code>PROCESSING</code>, <code>INSTALLING</code>, and <code>FULFILLED</code>. </p>
   *          </note>
   * @public
   */
  Status?: OrderStatus | undefined;

  /**
   * <p>The line items for the order</p>
   * @public
   */
  LineItems?: LineItem[] | undefined;

  /**
   * <p>The payment option for the order.</p>
   * @public
   */
  PaymentOption?: PaymentOption | undefined;

  /**
   * <p>The submission date for the order.</p>
   * @public
   */
  OrderSubmissionDate?: Date | undefined;

  /**
   * <p>The fulfillment date of the order.</p>
   * @public
   */
  OrderFulfilledDate?: Date | undefined;

  /**
   * <p>The payment term.</p>
   * @public
   */
  PaymentTerm?: PaymentTerm | undefined;

  /**
   * <p>The type of order.</p>
   * @public
   */
  OrderType?: OrderType | undefined;
}

/**
 * @public
 */
export interface CreateOrderOutput {
  /**
   * <p>Information about this order.</p>
   * @public
   */
  Order?: Order | undefined;
}

/**
 * <p>You have exceeded a service quota.</p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceQuotaExceededException, __BaseException>) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * @enum
 */
export const SupportedHardwareType = {
  RACK: "RACK",
  SERVER: "SERVER",
} as const;

/**
 * @public
 */
export type SupportedHardwareType = (typeof SupportedHardwareType)[keyof typeof SupportedHardwareType];

/**
 * @public
 */
export interface CreateOutpostInput {
  /**
   * <p>The name of the Outpost.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The description of the Outpost.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p> The ID or the Amazon Resource Name (ARN) of the site. </p>
   * @public
   */
  SiteId: string | undefined;

  /**
   * <p>The Availability Zone.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>The ID of the Availability Zone.</p>
   * @public
   */
  AvailabilityZoneId?: string | undefined;

  /**
   * <p>The tags to apply to the Outpost.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p> The type of hardware for this Outpost. </p>
   * @public
   */
  SupportedHardwareType?: SupportedHardwareType | undefined;
}

/**
 * <p>Information about an Outpost.</p>
 * @public
 */
export interface Outpost {
  /**
   * <p> The ID of the Outpost. </p>
   * @public
   */
  OutpostId?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID of the Outpost owner.</p>
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Outpost.</p>
   * @public
   */
  OutpostArn?: string | undefined;

  /**
   * <p>The ID of the site.</p>
   * @public
   */
  SiteId?: string | undefined;

  /**
   * <p>The name of the Outpost.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The description of the Outpost.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The life cycle status.</p>
   * @public
   */
  LifeCycleStatus?: string | undefined;

  /**
   * <p>The Availability Zone.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>The ID of the Availability Zone.</p>
   * @public
   */
  AvailabilityZoneId?: string | undefined;

  /**
   * <p>The Outpost tags.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the site.</p>
   * @public
   */
  SiteArn?: string | undefined;

  /**
   * <p> The hardware type. </p>
   * @public
   */
  SupportedHardwareType?: SupportedHardwareType | undefined;
}

/**
 * @public
 */
export interface CreateOutpostOutput {
  /**
   * <p>Information about an Outpost.</p>
   * @public
   */
  Outpost?: Outpost | undefined;
}

/**
 * @public
 * @enum
 */
export const FiberOpticCableType = {
  MULTI_MODE: "MULTI_MODE",
  SINGLE_MODE: "SINGLE_MODE",
} as const;

/**
 * @public
 */
export type FiberOpticCableType = (typeof FiberOpticCableType)[keyof typeof FiberOpticCableType];

/**
 * @public
 * @enum
 */
export const MaximumSupportedWeightLbs = {
  MAX_1400_LBS: "MAX_1400_LBS",
  MAX_1600_LBS: "MAX_1600_LBS",
  MAX_1800_LBS: "MAX_1800_LBS",
  MAX_2000_LBS: "MAX_2000_LBS",
  NO_LIMIT: "NO_LIMIT",
} as const;

/**
 * @public
 */
export type MaximumSupportedWeightLbs = (typeof MaximumSupportedWeightLbs)[keyof typeof MaximumSupportedWeightLbs];

/**
 * @public
 * @enum
 */
export const OpticalStandard = {
  OPTIC_1000BASE_LX: "OPTIC_1000BASE_LX",
  OPTIC_1000BASE_SX: "OPTIC_1000BASE_SX",
  OPTIC_100GBASE_CWDM4: "OPTIC_100GBASE_CWDM4",
  OPTIC_100GBASE_LR4: "OPTIC_100GBASE_LR4",
  OPTIC_100GBASE_SR4: "OPTIC_100GBASE_SR4",
  OPTIC_100G_PSM4_MSA: "OPTIC_100G_PSM4_MSA",
  OPTIC_10GBASE_IR: "OPTIC_10GBASE_IR",
  OPTIC_10GBASE_LR: "OPTIC_10GBASE_LR",
  OPTIC_10GBASE_SR: "OPTIC_10GBASE_SR",
  OPTIC_40GBASE_ESR: "OPTIC_40GBASE_ESR",
  OPTIC_40GBASE_IR4_LR4L: "OPTIC_40GBASE_IR4_LR4L",
  OPTIC_40GBASE_LR4: "OPTIC_40GBASE_LR4",
  OPTIC_40GBASE_SR: "OPTIC_40GBASE_SR",
} as const;

/**
 * @public
 */
export type OpticalStandard = (typeof OpticalStandard)[keyof typeof OpticalStandard];

/**
 * @public
 * @enum
 */
export const PowerConnector = {
  AH530P7W: "AH530P7W",
  AH532P6W: "AH532P6W",
  IEC309: "IEC309",
  L6_30P: "L6_30P",
} as const;

/**
 * @public
 */
export type PowerConnector = (typeof PowerConnector)[keyof typeof PowerConnector];

/**
 * @public
 * @enum
 */
export const PowerDrawKva = {
  POWER_10_KVA: "POWER_10_KVA",
  POWER_15_KVA: "POWER_15_KVA",
  POWER_30_KVA: "POWER_30_KVA",
  POWER_5_KVA: "POWER_5_KVA",
} as const;

/**
 * @public
 */
export type PowerDrawKva = (typeof PowerDrawKva)[keyof typeof PowerDrawKva];

/**
 * @public
 * @enum
 */
export const PowerFeedDrop = {
  ABOVE_RACK: "ABOVE_RACK",
  BELOW_RACK: "BELOW_RACK",
} as const;

/**
 * @public
 */
export type PowerFeedDrop = (typeof PowerFeedDrop)[keyof typeof PowerFeedDrop];

/**
 * @public
 * @enum
 */
export const PowerPhase = {
  SINGLE_PHASE: "SINGLE_PHASE",
  THREE_PHASE: "THREE_PHASE",
} as const;

/**
 * @public
 */
export type PowerPhase = (typeof PowerPhase)[keyof typeof PowerPhase];

/**
 * @public
 * @enum
 */
export const UplinkCount = {
  UPLINK_COUNT_1: "UPLINK_COUNT_1",
  UPLINK_COUNT_12: "UPLINK_COUNT_12",
  UPLINK_COUNT_16: "UPLINK_COUNT_16",
  UPLINK_COUNT_2: "UPLINK_COUNT_2",
  UPLINK_COUNT_3: "UPLINK_COUNT_3",
  UPLINK_COUNT_4: "UPLINK_COUNT_4",
  UPLINK_COUNT_5: "UPLINK_COUNT_5",
  UPLINK_COUNT_6: "UPLINK_COUNT_6",
  UPLINK_COUNT_7: "UPLINK_COUNT_7",
  UPLINK_COUNT_8: "UPLINK_COUNT_8",
} as const;

/**
 * @public
 */
export type UplinkCount = (typeof UplinkCount)[keyof typeof UplinkCount];

/**
 * @public
 * @enum
 */
export const UplinkGbps = {
  UPLINK_100G: "UPLINK_100G",
  UPLINK_10G: "UPLINK_10G",
  UPLINK_1G: "UPLINK_1G",
  UPLINK_40G: "UPLINK_40G",
} as const;

/**
 * @public
 */
export type UplinkGbps = (typeof UplinkGbps)[keyof typeof UplinkGbps];

/**
 * <p> Information about the physical and logistical details for racks at sites.
 *       For more information
 *       about hardware requirements for racks, see <a href="https://docs.aws.amazon.com/outposts/latest/userguide/outposts-requirements.html#checklist">Network
 *         readiness checklist</a> in the Amazon Web Services Outposts User Guide.
 *         </p>
 * @public
 */
export interface RackPhysicalProperties {
  /**
   * <p>The power draw available at the hardware placement position for the rack. </p>
   * @public
   */
  PowerDrawKva?: PowerDrawKva | undefined;

  /**
   * <p>The power option that you can provide for hardware.</p>
   * @public
   */
  PowerPhase?: PowerPhase | undefined;

  /**
   * <p>The power connector for the hardware. </p>
   * @public
   */
  PowerConnector?: PowerConnector | undefined;

  /**
   * <p>The position of the power feed.</p>
   * @public
   */
  PowerFeedDrop?: PowerFeedDrop | undefined;

  /**
   * <p>The uplink speed the rack supports for the connection to the Region. </p>
   * @public
   */
  UplinkGbps?: UplinkGbps | undefined;

  /**
   * <p>The number of uplinks each Outpost network device.</p>
   * @public
   */
  UplinkCount?: UplinkCount | undefined;

  /**
   * <p>The type of fiber used to attach the Outpost to the network. </p>
   * @public
   */
  FiberOpticCableType?: FiberOpticCableType | undefined;

  /**
   * <p>The type of optical standard used to attach the Outpost to the network. This field is
   *       dependent on uplink speed, fiber type, and distance to the upstream device.
   *       For more information
   *       about networking requirements for racks, see <a href="https://docs.aws.amazon.com/outposts/latest/userguide/outposts-requirements.html#facility-networking">Network</a>
   *         in the Amazon Web Services Outposts User Guide.
   *         </p>
   * @public
   */
  OpticalStandard?: OpticalStandard | undefined;

  /**
   * <p>The maximum rack weight that this site can support. <code>NO_LIMIT</code> is over 2000 lbs
   *       (907 kg). </p>
   * @public
   */
  MaximumSupportedWeightLbs?: MaximumSupportedWeightLbs | undefined;
}

/**
 * @public
 */
export interface CreateSiteInput {
  /**
   * <p>The name of the site.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The description of the site.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Additional information that you provide about site access requirements, electrician
   *       scheduling, personal protective equipment, or regulation of equipment materials that could
   *       affect your installation process. </p>
   * @public
   */
  Notes?: string | undefined;

  /**
   * <p> The tags to apply to a site. </p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p> The location to install and power on the hardware. This address might be different from
   *       the shipping address. </p>
   * @public
   */
  OperatingAddress?: Address | undefined;

  /**
   * <p> The location to ship the hardware. This address might be different from the operating
   *       address. </p>
   * @public
   */
  ShippingAddress?: Address | undefined;

  /**
   * <p> Information about the physical and logistical details for the rack at this site.
   *       For more information
   *       about hardware requirements for racks, see <a href="https://docs.aws.amazon.com/outposts/latest/userguide/outposts-requirements.html#checklist">Network
   *         readiness checklist</a> in the Amazon Web Services Outposts User Guide.
   *         </p>
   * @public
   */
  RackPhysicalProperties?: RackPhysicalProperties | undefined;
}

/**
 * <p>Information about a site.</p>
 * @public
 */
export interface Site {
  /**
   * <p>The ID of the site.</p>
   * @public
   */
  SiteId?: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services account.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The name of the site.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The description of the site.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The site tags.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the site.</p>
   * @public
   */
  SiteArn?: string | undefined;

  /**
   * <p> Notes about a site. </p>
   * @public
   */
  Notes?: string | undefined;

  /**
   * <p> The ISO-3166 two-letter country code where the hardware is installed and powered on.
   *     </p>
   * @public
   */
  OperatingAddressCountryCode?: string | undefined;

  /**
   * <p> State or region where the hardware is installed and powered on. </p>
   * @public
   */
  OperatingAddressStateOrRegion?: string | undefined;

  /**
   * <p> City where the hardware is installed and powered on. </p>
   * @public
   */
  OperatingAddressCity?: string | undefined;

  /**
   * <p> Information about the physical and logistical details for a rack at the site. </p>
   * @public
   */
  RackPhysicalProperties?: RackPhysicalProperties | undefined;
}

/**
 * @public
 */
export interface CreateSiteOutput {
  /**
   * <p>Information about a site.</p>
   * @public
   */
  Site?: Site | undefined;
}

/**
 * @public
 */
export interface DeleteOutpostInput {
  /**
   * <p> The ID or ARN of the Outpost. </p>
   * @public
   */
  OutpostId: string | undefined;
}

/**
 * @public
 */
export interface DeleteOutpostOutput {}

/**
 * @public
 */
export interface DeleteSiteInput {
  /**
   * <p> The ID or the Amazon Resource Name (ARN) of the site. </p>
   * @public
   */
  SiteId: string | undefined;
}

/**
 * @public
 */
export interface DeleteSiteOutput {}

/**
 * @public
 */
export interface GetCapacityTaskInput {
  /**
   * <p>ID of the capacity task.</p>
   * @public
   */
  CapacityTaskId: string | undefined;

  /**
   * <p>ID or ARN of the Outpost associated with the specified capacity task.</p>
   * @public
   */
  OutpostIdentifier: string | undefined;
}

/**
 * <p>User-specified instances that must not be stopped. These instances will not appear in the
 *       list of instances that Amazon Web Services recommends to stop in order to free up capacity.</p>
 * @public
 */
export interface InstancesToExclude {
  /**
   * <p>List of user-specified instances that must not be stopped.</p>
   * @public
   */
  Instances?: string[] | undefined;

  /**
   * <p>IDs of the accounts that own each instance that must not be stopped.</p>
   * @public
   */
  AccountIds?: string[] | undefined;

  /**
   * <p>Names of the services that own each instance that must not be stopped in order to free up
   *       the capacity needed to run the capacity task.</p>
   * @public
   */
  Services?: AWSServiceName[] | undefined;
}

/**
 * <p>The instance type that you specify determines the combination of CPU, memory, storage, and
 *       networking capacity.</p>
 * @public
 */
export interface InstanceTypeCapacity {
  /**
   * <p>The instance type of the hosts.</p>
   * @public
   */
  InstanceType: string | undefined;

  /**
   * <p>The number of instances for the specified instance type.</p>
   * @public
   */
  Count: number | undefined;
}

/**
 * @public
 * @enum
 */
export const TaskActionOnBlockingInstances = {
  FAIL_TASK: "FAIL_TASK",
  WAIT_FOR_EVACUATION: "WAIT_FOR_EVACUATION",
} as const;

/**
 * @public
 */
export type TaskActionOnBlockingInstances =
  (typeof TaskActionOnBlockingInstances)[keyof typeof TaskActionOnBlockingInstances];

/**
 * @public
 */
export interface GetCapacityTaskOutput {
  /**
   * <p>ID of the capacity task.</p>
   * @public
   */
  CapacityTaskId?: string | undefined;

  /**
   * <p>ID of the Outpost associated with the specified capacity task.</p>
   * @public
   */
  OutpostId?: string | undefined;

  /**
   * <p>ID of the Amazon Web Services Outposts order associated with the specified capacity task.</p>
   * @public
   */
  OrderId?: string | undefined;

  /**
   * <p>List of instance pools requested in the capacity task.</p>
   * @public
   */
  RequestedInstancePools?: InstanceTypeCapacity[] | undefined;

  /**
   * <p>Instances that the user specified they cannot stop in order to free up the capacity needed
   *       to run the capacity task.</p>
   * @public
   */
  InstancesToExclude?: InstancesToExclude | undefined;

  /**
   * <p>Performs a dry run to determine if you are above or below instance capacity.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>Status of the capacity task.</p>
   *          <p>A capacity task can have one of the following statuses:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>REQUESTED</code> - The capacity task was created and is awaiting the next step
   *           by Amazon Web Services Outposts.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IN_PROGRESS</code> - The capacity task is running and cannot be
   *           cancelled.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>WAITING_FOR_EVACUATION</code> - The capacity task requires capacity to run. You
   *           must stop the recommended EC2 running instances to free up capacity for the task to
   *           run.</p>
   *             </li>
   *          </ul>
   * @public
   */
  CapacityTaskStatus?: CapacityTaskStatus | undefined;

  /**
   * <p>Reason why the capacity task failed.</p>
   * @public
   */
  Failed?: CapacityTaskFailure | undefined;

  /**
   * <p>The date the capacity task was created.</p>
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * <p>The date the capacity task ran successfully.</p>
   * @public
   */
  CompletionDate?: Date | undefined;

  /**
   * <p>The date the capacity task was last modified.</p>
   * @public
   */
  LastModifiedDate?: Date | undefined;

  /**
   * <p>User-specified option in case an instance is blocking the capacity task from running.
   *       Shows one of the following options:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>WAIT_FOR_EVACUATION</code> - Checks every 10 minutes over 48 hours to determine
   *           if instances have stopped and capacity is available to complete the task.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAIL_TASK</code> - The capacity task fails.</p>
   *             </li>
   *          </ul>
   * @public
   */
  TaskActionOnBlockingInstances?: TaskActionOnBlockingInstances | undefined;
}

/**
 * @public
 */
export interface GetCatalogItemInput {
  /**
   * <p>The ID of the catalog item.</p>
   * @public
   */
  CatalogItemId: string | undefined;
}

/**
 * @public
 */
export interface GetCatalogItemOutput {
  /**
   * <p>Information about this catalog item.</p>
   * @public
   */
  CatalogItem?: CatalogItem | undefined;
}

/**
 * @public
 */
export interface GetConnectionRequest {
  /**
   * <p> The ID of the connection. </p>
   * @public
   */
  ConnectionId: string | undefined;
}

/**
 * @public
 */
export interface GetConnectionResponse {
  /**
   * <p> The ID of the connection. </p>
   * @public
   */
  ConnectionId?: string | undefined;

  /**
   * <p> Information about the connection. </p>
   * @public
   */
  ConnectionDetails?: ConnectionDetails | undefined;
}

/**
 * @public
 */
export interface GetOrderInput {
  /**
   * <p>The ID of the order.</p>
   * @public
   */
  OrderId: string | undefined;
}

/**
 * @public
 */
export interface GetOrderOutput {
  /**
   * <p>Information about an order.</p>
   * @public
   */
  Order?: Order | undefined;
}

/**
 * @public
 */
export interface GetOutpostInput {
  /**
   * <p> The ID or ARN of the Outpost. </p>
   * @public
   */
  OutpostId: string | undefined;
}

/**
 * @public
 */
export interface GetOutpostOutput {
  /**
   * <p>Information about an Outpost.</p>
   * @public
   */
  Outpost?: Outpost | undefined;
}

/**
 * @public
 */
export interface GetOutpostInstanceTypesInput {
  /**
   * <p> The ID or ARN of the Outpost. </p>
   * @public
   */
  OutpostId: string | undefined;

  /**
   * <p>The pagination token.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum page size.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Information about an instance type.</p>
 * @public
 */
export interface InstanceTypeItem {
  /**
   * <p>The instance type.</p>
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * <p>The number of default VCPUs in an instance type.</p>
   * @public
   */
  VCPUs?: number | undefined;
}

/**
 * @public
 */
export interface GetOutpostInstanceTypesOutput {
  /**
   * <p>Information about the instance types.</p>
   * @public
   */
  InstanceTypes?: InstanceTypeItem[] | undefined;

  /**
   * <p>The pagination token.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p> The ID of the Outpost. </p>
   * @public
   */
  OutpostId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Outpost.</p>
   * @public
   */
  OutpostArn?: string | undefined;
}

/**
 * @public
 */
export interface GetOutpostSupportedInstanceTypesInput {
  /**
   * <p>The ID or ARN of the Outpost.</p>
   * @public
   */
  OutpostIdentifier: string | undefined;

  /**
   * <p>The ID for the Amazon Web Services Outposts order.</p>
   * @public
   */
  OrderId?: string | undefined;

  /**
   * <p>The maximum page size.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The pagination token.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetOutpostSupportedInstanceTypesOutput {
  /**
   * <p>Information about the instance types.</p>
   * @public
   */
  InstanceTypes?: InstanceTypeItem[] | undefined;

  /**
   * <p>The pagination token.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetSiteInput {
  /**
   * <p> The ID or the Amazon Resource Name (ARN) of the site. </p>
   * @public
   */
  SiteId: string | undefined;
}

/**
 * @public
 */
export interface GetSiteOutput {
  /**
   * <p>Information about a site.</p>
   * @public
   */
  Site?: Site | undefined;
}

/**
 * @public
 */
export interface GetSiteAddressInput {
  /**
   * <p> The ID or the Amazon Resource Name (ARN) of the site. </p>
   * @public
   */
  SiteId: string | undefined;

  /**
   * <p>The type of the address you request. </p>
   * @public
   */
  AddressType: AddressType | undefined;
}

/**
 * @public
 */
export interface GetSiteAddressOutput {
  /**
   * <p>The ID of the site.</p>
   * @public
   */
  SiteId?: string | undefined;

  /**
   * <p>The type of the address you receive. </p>
   * @public
   */
  AddressType?: AddressType | undefined;

  /**
   * <p> Information about the address. </p>
   * @public
   */
  Address?: Address | undefined;
}

/**
 * @public
 */
export interface ListAssetInstancesInput {
  /**
   * <p>The ID of the Outpost.</p>
   * @public
   */
  OutpostIdentifier: string | undefined;

  /**
   * <p>Filters the results by asset ID.</p>
   * @public
   */
  AssetIdFilter?: string[] | undefined;

  /**
   * <p>Filters the results by instance ID.</p>
   * @public
   */
  InstanceTypeFilter?: string[] | undefined;

  /**
   * <p>Filters the results by account ID.</p>
   * @public
   */
  AccountIdFilter?: string[] | undefined;

  /**
   * <p>Filters the results by Amazon Web Services service.</p>
   * @public
   */
  AwsServiceFilter?: AWSServiceName[] | undefined;

  /**
   * <p>The maximum page size.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The pagination token.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAssetInstancesOutput {
  /**
   * <p>List of instances owned by all accounts on the Outpost. Does not include Amazon EBS or Amazon S3
   *       instances.</p>
   * @public
   */
  AssetInstances?: AssetInstance[] | undefined;

  /**
   * <p>The pagination token.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAssetsInput {
  /**
   * <p> The ID or the Amazon Resource Name (ARN) of the Outpost. </p>
   * @public
   */
  OutpostIdentifier: string | undefined;

  /**
   * <p>Filters the results by the host ID of a Dedicated Host.</p>
   * @public
   */
  HostIdFilter?: string[] | undefined;

  /**
   * <p>The maximum page size.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The pagination token.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Filters the results by state.</p>
   * @public
   */
  StatusFilter?: AssetState[] | undefined;
}

/**
 * @public
 */
export interface ListAssetsOutput {
  /**
   * <p>Information about the hardware assets.</p>
   * @public
   */
  Assets?: AssetInfo[] | undefined;

  /**
   * <p>The pagination token.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListBlockingInstancesForCapacityTaskInput {
  /**
   * <p>The ID or ARN of the Outpost associated with the specified capacity task.</p>
   * @public
   */
  OutpostIdentifier: string | undefined;

  /**
   * <p>The ID of the capacity task.</p>
   * @public
   */
  CapacityTaskId: string | undefined;

  /**
   * <p>The maximum page size.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The pagination token.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListBlockingInstancesForCapacityTaskOutput {
  /**
   * <p>A list of all running Amazon EC2 instances on the Outpost. Stopping one or more of these
   *       instances can free up the capacity needed to run the capacity task.</p>
   * @public
   */
  BlockingInstances?: BlockingInstance[] | undefined;

  /**
   * <p>The pagination token.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCapacityTasksInput {
  /**
   * <p>Filters the results by an Outpost ID or an Outpost ARN.</p>
   * @public
   */
  OutpostIdentifierFilter?: string | undefined;

  /**
   * <p>The maximum page size.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The pagination token.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A list of statuses. For example, <code>REQUESTED</code> or
   *         <code>WAITING_FOR_EVACUATION</code>.</p>
   * @public
   */
  CapacityTaskStatusFilter?: CapacityTaskStatus[] | undefined;
}

/**
 * @public
 */
export interface ListCapacityTasksOutput {
  /**
   * <p>Lists all the capacity tasks.</p>
   * @public
   */
  CapacityTasks?: CapacityTaskSummary[] | undefined;

  /**
   * <p>The pagination token.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCatalogItemsInput {
  /**
   * <p>The pagination token.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum page size.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Filters the results by item class.</p>
   * @public
   */
  ItemClassFilter?: CatalogItemClass[] | undefined;

  /**
   * <p>Filters the results by storage option.</p>
   * @public
   */
  SupportedStorageFilter?: SupportedStorageEnum[] | undefined;

  /**
   * <p>Filters the results by EC2 family (for example, M5).</p>
   * @public
   */
  EC2FamilyFilter?: string[] | undefined;
}

/**
 * @public
 */
export interface ListCatalogItemsOutput {
  /**
   * <p>Information about the catalog items.</p>
   * @public
   */
  CatalogItems?: CatalogItem[] | undefined;

  /**
   * <p>The pagination token.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListOrdersInput {
  /**
   * <p> The ID or the Amazon Resource Name (ARN) of the Outpost. </p>
   * @public
   */
  OutpostIdentifierFilter?: string | undefined;

  /**
   * <p>The pagination token.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum page size.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p> A summary of line items in your order. </p>
 * @public
 */
export interface OrderSummary {
  /**
   * <p> The ID of the Outpost. </p>
   * @public
   */
  OutpostId?: string | undefined;

  /**
   * <p> The ID of the order. </p>
   * @public
   */
  OrderId?: string | undefined;

  /**
   * <p>The type of order.</p>
   * @public
   */
  OrderType?: OrderType | undefined;

  /**
   * <p>The status of the order.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PREPARING</code> - Order is received and is being prepared.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IN_PROGRESS</code> - Order is either being built, shipped, or installed. For
   *           more information, see the <code>LineItem</code> status.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>COMPLETED</code> - Order is complete.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CANCELLED</code> - Order is cancelled.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ERROR</code> - Customer should contact support.</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>The following statuses are deprecated: <code>RECEIVED</code>, <code>PENDING</code>,
   *           <code>PROCESSING</code>, <code>INSTALLING</code>, and <code>FULFILLED</code>. </p>
   *          </note>
   * @public
   */
  Status?: OrderStatus | undefined;

  /**
   * <p> The status of all line items in the order. </p>
   * @public
   */
  LineItemCountsByStatus?: Partial<Record<LineItemStatus, number>> | undefined;

  /**
   * <p> The submission date for the order. </p>
   * @public
   */
  OrderSubmissionDate?: Date | undefined;

  /**
   * <p> The fulfilment date for the order. </p>
   * @public
   */
  OrderFulfilledDate?: Date | undefined;
}

/**
 * @public
 */
export interface ListOrdersOutput {
  /**
   * <p> Information about the orders. </p>
   * @public
   */
  Orders?: OrderSummary[] | undefined;

  /**
   * <p>The pagination token.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListOutpostsInput {
  /**
   * <p>The pagination token.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum page size.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Filters the results by the lifecycle status.</p>
   * @public
   */
  LifeCycleStatusFilter?: string[] | undefined;

  /**
   * <p>Filters the results by Availability Zone (for example, <code>us-east-1a</code>).</p>
   * @public
   */
  AvailabilityZoneFilter?: string[] | undefined;

  /**
   * <p>Filters the results by AZ ID (for example, <code>use1-az1</code>).</p>
   * @public
   */
  AvailabilityZoneIdFilter?: string[] | undefined;
}

/**
 * @public
 */
export interface ListOutpostsOutput {
  /**
   * <p>Information about the Outposts.</p>
   * @public
   */
  Outposts?: Outpost[] | undefined;

  /**
   * <p>The pagination token.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSitesInput {
  /**
   * <p>The pagination token.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum page size.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Filters the results by country code.</p>
   * @public
   */
  OperatingAddressCountryCodeFilter?: string[] | undefined;

  /**
   * <p>Filters the results by state or region.</p>
   * @public
   */
  OperatingAddressStateOrRegionFilter?: string[] | undefined;

  /**
   * <p>Filters the results by city.</p>
   * @public
   */
  OperatingAddressCityFilter?: string[] | undefined;
}

/**
 * @public
 */
export interface ListSitesOutput {
  /**
   * <p>Information about the sites.</p>
   * @public
   */
  Sites?: Site[] | undefined;

  /**
   * <p>The pagination token.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The resource tags.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface StartCapacityTaskInput {
  /**
   * <p>The ID or ARN of the Outposts associated with the specified capacity task.</p>
   * @public
   */
  OutpostIdentifier: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services Outposts order associated with the specified capacity task.</p>
   * @public
   */
  OrderId?: string | undefined;

  /**
   * <p>The instance pools specified in the capacity task.</p>
   * @public
   */
  InstancePools: InstanceTypeCapacity[] | undefined;

  /**
   * <p>List of user-specified running instances that must not be stopped in order to free up the
   *       capacity needed to run the capacity task.</p>
   * @public
   */
  InstancesToExclude?: InstancesToExclude | undefined;

  /**
   * <p>You can request a dry run to determine if the instance type and instance size changes is
   *       above or below available instance capacity. Requesting a dry run does not make any changes to
   *       your plan.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>Specify one of the following options in case an instance is blocking the capacity task
   *       from running.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>WAIT_FOR_EVACUATION</code> - Checks every 10 minutes over 48 hours to determine
   *           if instances have stopped and capacity is available to complete the task.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAIL_TASK</code> - The capacity task fails.</p>
   *             </li>
   *          </ul>
   * @public
   */
  TaskActionOnBlockingInstances?: TaskActionOnBlockingInstances | undefined;
}

/**
 * @public
 */
export interface StartCapacityTaskOutput {
  /**
   * <p>ID of the capacity task that you want to start.</p>
   * @public
   */
  CapacityTaskId?: string | undefined;

  /**
   * <p>ID of the Outpost associated with the capacity task.</p>
   * @public
   */
  OutpostId?: string | undefined;

  /**
   * <p>ID of the Amazon Web Services Outposts order of the host associated with the capacity task.</p>
   * @public
   */
  OrderId?: string | undefined;

  /**
   * <p>List of the instance pools requested in the specified capacity task.</p>
   * @public
   */
  RequestedInstancePools?: InstanceTypeCapacity[] | undefined;

  /**
   * <p>User-specified instances that must not be stopped in order to free up the capacity needed
   *       to run the capacity task.</p>
   * @public
   */
  InstancesToExclude?: InstancesToExclude | undefined;

  /**
   * <p>Results of the dry run showing if the specified capacity task is above or below the
   *       available instance capacity.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>Status of the specified capacity task.</p>
   * @public
   */
  CapacityTaskStatus?: CapacityTaskStatus | undefined;

  /**
   * <p>Reason that the specified capacity task failed.</p>
   * @public
   */
  Failed?: CapacityTaskFailure | undefined;

  /**
   * <p>Date that the specified capacity task was created.</p>
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * <p>Date that the specified capacity task ran successfully.</p>
   * @public
   */
  CompletionDate?: Date | undefined;

  /**
   * <p>Date that the specified capacity task was last modified.</p>
   * @public
   */
  LastModifiedDate?: Date | undefined;

  /**
   * <p>User-specified option in case an instance is blocking the capacity task from
   *       running.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>WAIT_FOR_EVACUATION</code> - Checks every 10 minutes over 48 hours to determine
   *           if instances have stopped and capacity is available to complete the task.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAIL_TASK</code> - The capacity task fails.</p>
   *             </li>
   *          </ul>
   * @public
   */
  TaskActionOnBlockingInstances?: TaskActionOnBlockingInstances | undefined;
}

/**
 * @public
 */
export interface StartConnectionRequest {
  /**
   * <p> The serial number of the dongle. </p>
   * @public
   */
  DeviceSerialNumber?: string | undefined;

  /**
   * <p> The ID of the Outpost server. </p>
   * @public
   */
  AssetId: string | undefined;

  /**
   * <p> The public key of the client. </p>
   * @public
   */
  ClientPublicKey: string | undefined;

  /**
   * <p> The device index of the network interface on the Outpost server. </p>
   * @public
   */
  NetworkInterfaceDeviceIndex: number | undefined;
}

/**
 * @public
 */
export interface StartConnectionResponse {
  /**
   * <p> The ID of the connection. </p>
   * @public
   */
  ConnectionId?: string | undefined;

  /**
   * <p> The underlay IP address. </p>
   * @public
   */
  UnderlayIpAddress?: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tags to add to the resource.</p>
   * @public
   */
  Tags: Record<string, string> | undefined;
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
  ResourceArn: string | undefined;

  /**
   * <p>The tag keys.</p>
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdateOutpostInput {
  /**
   * <p> The ID or ARN of the Outpost. </p>
   * @public
   */
  OutpostId: string | undefined;

  /**
   * <p>The name of the Outpost.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The description of the Outpost.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p> The type of hardware for this Outpost. </p>
   * @public
   */
  SupportedHardwareType?: SupportedHardwareType | undefined;
}

/**
 * @public
 */
export interface UpdateOutpostOutput {
  /**
   * <p>Information about an Outpost.</p>
   * @public
   */
  Outpost?: Outpost | undefined;
}

/**
 * @public
 */
export interface UpdateSiteInput {
  /**
   * <p> The ID or the Amazon Resource Name (ARN) of the site. </p>
   * @public
   */
  SiteId: string | undefined;

  /**
   * <p>The name of the site.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The description of the site.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Notes about a site.</p>
   * @public
   */
  Notes?: string | undefined;
}

/**
 * @public
 */
export interface UpdateSiteOutput {
  /**
   * <p>Information about a site.</p>
   * @public
   */
  Site?: Site | undefined;
}

/**
 * @public
 */
export interface UpdateSiteAddressInput {
  /**
   * <p> The ID or the Amazon Resource Name (ARN) of the site. </p>
   * @public
   */
  SiteId: string | undefined;

  /**
   * <p> The type of the address. </p>
   * @public
   */
  AddressType: AddressType | undefined;

  /**
   * <p> The address for the site. </p>
   * @public
   */
  Address: Address | undefined;
}

/**
 * @public
 */
export interface UpdateSiteAddressOutput {
  /**
   * <p> The type of the address. </p>
   * @public
   */
  AddressType?: AddressType | undefined;

  /**
   * <p> Information about an address. </p>
   * @public
   */
  Address?: Address | undefined;
}

/**
 * @public
 */
export interface UpdateSiteRackPhysicalPropertiesInput {
  /**
   * <p> The ID or the Amazon Resource Name (ARN) of the site. </p>
   * @public
   */
  SiteId: string | undefined;

  /**
   * <p>The power draw, in kVA, available at the hardware placement position for the rack.</p>
   * @public
   */
  PowerDrawKva?: PowerDrawKva | undefined;

  /**
   * <p>The power option that you can provide for hardware. </p>
   *          <ul>
   *             <li>
   *                <p>Single-phase AC feed: 200 V to 277 V, 50 Hz or 60 Hz</p>
   *             </li>
   *             <li>
   *                <p>Three-phase AC feed: 346 V to 480 V, 50 Hz or 60 Hz</p>
   *             </li>
   *          </ul>
   * @public
   */
  PowerPhase?: PowerPhase | undefined;

  /**
   * <p>The power connector that Amazon Web Services should plan to provide for connections to the hardware.
   *       Note the correlation between <code>PowerPhase</code> and <code>PowerConnector</code>. </p>
   *          <ul>
   *             <li>
   *                <p>Single-phase AC feed</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <b>L6-30P</b> – (common in US); 30A; single phase</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <b>IEC309 (blue)</b> – P+N+E, 6hr; 32 A; single
   *               phase</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>Three-phase AC feed</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <b>AH530P7W (red)</b> – 3P+N+E, 7hr; 30A; three
   *               phase</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <b>AH532P6W (red)</b> – 3P+N+E, 6hr; 32A; three
   *               phase</p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   * @public
   */
  PowerConnector?: PowerConnector | undefined;

  /**
   * <p>Indicates whether the power feed comes above or below the rack. </p>
   * @public
   */
  PowerFeedDrop?: PowerFeedDrop | undefined;

  /**
   * <p>The uplink speed the rack should support for the connection to the Region. </p>
   * @public
   */
  UplinkGbps?: UplinkGbps | undefined;

  /**
   * <p>Racks come with two Outpost network devices. Depending on the supported uplink speed at
   *       the site, the Outpost network devices provide a variable number of uplinks. Specify the number
   *       of uplinks for each Outpost network device that you intend to use to connect the rack to your
   *       network. Note the correlation between <code>UplinkGbps</code> and <code>UplinkCount</code>. </p>
   *          <ul>
   *             <li>
   *                <p>1Gbps - Uplinks available: 1, 2, 4, 6, 8</p>
   *             </li>
   *             <li>
   *                <p>10Gbps - Uplinks available: 1, 2, 4, 8, 12, 16</p>
   *             </li>
   *             <li>
   *                <p>40 and 100 Gbps- Uplinks available: 1, 2, 4</p>
   *             </li>
   *          </ul>
   * @public
   */
  UplinkCount?: UplinkCount | undefined;

  /**
   * <p>The type of fiber that you will use to attach the Outpost to your network. </p>
   * @public
   */
  FiberOpticCableType?: FiberOpticCableType | undefined;

  /**
   * <p>The type of optical standard that you will use to attach the Outpost to your network. This
   *       field is dependent on uplink speed, fiber type, and distance to the upstream device.
   *       For more information
   *       about networking requirements for racks, see <a href="https://docs.aws.amazon.com/outposts/latest/userguide/outposts-requirements.html#facility-networking">Network</a>
   *         in the Amazon Web Services Outposts User Guide.
   *         </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>OPTIC_10GBASE_SR</code>: 10GBASE-SR</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OPTIC_10GBASE_IR</code>: 10GBASE-IR</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OPTIC_10GBASE_LR</code>: 10GBASE-LR</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OPTIC_40GBASE_SR</code>: 40GBASE-SR</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OPTIC_40GBASE_ESR</code>: 40GBASE-ESR</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OPTIC_40GBASE_IR4_LR4L</code>: 40GBASE-IR (LR4L)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OPTIC_40GBASE_LR4</code>: 40GBASE-LR4</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OPTIC_100GBASE_SR4</code>: 100GBASE-SR4</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OPTIC_100GBASE_CWDM4</code>: 100GBASE-CWDM4</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OPTIC_100GBASE_LR4</code>: 100GBASE-LR4</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OPTIC_100G_PSM4_MSA</code>: 100G PSM4 MSA</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OPTIC_1000BASE_LX</code>: 1000Base-LX</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OPTIC_1000BASE_SX</code> : 1000Base-SX</p>
   *             </li>
   *          </ul>
   * @public
   */
  OpticalStandard?: OpticalStandard | undefined;

  /**
   * <p>The maximum rack weight that this site can support. <code>NO_LIMIT</code> is over 2000lbs.
   *     </p>
   * @public
   */
  MaximumSupportedWeightLbs?: MaximumSupportedWeightLbs | undefined;
}

/**
 * @public
 */
export interface UpdateSiteRackPhysicalPropertiesOutput {
  /**
   * <p>Information about a site.</p>
   * @public
   */
  Site?: Site | undefined;
}
