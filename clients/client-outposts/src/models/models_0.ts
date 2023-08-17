// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { OutpostsServiceException as __BaseException } from "./OutpostsServiceException";

/**
 * @public
 * <p>You do not have permission to perform this operation.</p>
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
 * @public
 * <p>
 *       Information about an address.
 *     </p>
 */
export interface Address {
  /**
   * @public
   * <p>The name of the contact.</p>
   */
  ContactName?: string;

  /**
   * @public
   * <p>The phone number of the contact.</p>
   */
  ContactPhoneNumber?: string;

  /**
   * @public
   * <p>The first line of the address.</p>
   */
  AddressLine1: string | undefined;

  /**
   * @public
   * <p>The second line of the address.</p>
   */
  AddressLine2?: string;

  /**
   * @public
   * <p>The third line of the address.</p>
   */
  AddressLine3?: string;

  /**
   * @public
   * <p>The city for the address.</p>
   */
  City: string | undefined;

  /**
   * @public
   * <p>The state for the address.</p>
   */
  StateOrRegion: string | undefined;

  /**
   * @public
   * <p>The district or county for the address.</p>
   */
  DistrictOrCounty?: string;

  /**
   * @public
   * <p>The postal code for the address.</p>
   */
  PostalCode: string | undefined;

  /**
   * @public
   * <p>The ISO-3166 two-letter country code for the address.</p>
   */
  CountryCode: string | undefined;

  /**
   * @public
   * <p>The municipality for the address.</p>
   */
  Municipality?: string;
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
 * @public
 * <p>
 *       Information about the position of the asset in a rack.
 *     </p>
 */
export interface AssetLocation {
  /**
   * @public
   * <p>
   *       The position of an asset in a rack measured in rack units.
   *     </p>
   */
  RackElevation?: number;
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
 * @public
 * <p>
 *       Information about compute hardware assets.
 *     </p>
 */
export interface ComputeAttributes {
  /**
   * @public
   * <p>
   *       The host ID of the Dedicated Host on the asset.
   *     </p>
   */
  HostId?: string;

  /**
   * @public
   * <p>The state.</p>
   *          <ul>
   *             <li>
   *                <p>ACTIVE - The asset is available and can provide capacity for new compute resources.</p>
   *             </li>
   *             <li>
   *                <p>ISOLATED - The asset is undergoing maintenance and can't provide capacity for new compute resources.
   *             Existing compute resources on the asset are not affected.</p>
   *             </li>
   *             <li>
   *                <p>RETIRING - The underlying hardware for the asset is degraded. Capacity for new compute resources is reduced.
   *             Amazon Web Services sends notifications for resources that must be stopped before the asset can be replaced.</p>
   *             </li>
   *          </ul>
   */
  State?: ComputeAssetState | string;
}

/**
 * @public
 * <p>
 *       Information about hardware assets.
 *     </p>
 */
export interface AssetInfo {
  /**
   * @public
   * <p>
   *       The ID of the asset.
   *     </p>
   */
  AssetId?: string;

  /**
   * @public
   * <p>
   *       The rack ID of the asset.
   *     </p>
   */
  RackId?: string;

  /**
   * @public
   * <p>
   *       The type of the asset.
   *     </p>
   */
  AssetType?: AssetType | string;

  /**
   * @public
   * <p>
   *       Information about compute hardware assets.
   *     </p>
   */
  ComputeAttributes?: ComputeAttributes;

  /**
   * @public
   * <p>
   *       The position of an asset in a rack.
   *     </p>
   */
  AssetLocation?: AssetLocation;
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
 * @public
 */
export interface CancelOrderInput {
  /**
   * @public
   * <p>
   *       The ID of the order.
   *     </p>
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
export const ResourceType = {
  ORDER: "ORDER",
  OUTPOST: "OUTPOST",
} as const;

/**
 * @public
 */
export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType];

/**
 * @public
 * <p>Updating or deleting this resource can cause an inconsistent state.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @public
   * <p>The ID of the resource causing the conflict.</p>
   */
  ResourceId?: string;

  /**
   * @public
   * <p>The type of the resource causing the conflict.</p>
   */
  ResourceType?: ResourceType | string;
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
 * @public
 * <p>An internal error has occurred.</p>
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
 * @public
 * <p>The specified request is not valid.</p>
 */
export class NotFoundException extends __BaseException {
  readonly name: "NotFoundException" = "NotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
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
 * @public
 * <p>A parameter is not valid.</p>
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
 * <p> Information about EC2 capacity. </p>
 */
export interface EC2Capacity {
  /**
   * @public
   * <p>
   *       The family of the EC2 capacity.
   *     </p>
   */
  Family?: string;

  /**
   * @public
   * <p>
   *       The maximum size of the EC2 capacity.
   *     </p>
   */
  MaxSize?: string;

  /**
   * @public
   * <p>
   *       The quantity of the EC2 capacity.
   *     </p>
   */
  Quantity?: string;
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
 * @public
 * <p> Information about a catalog item. </p>
 */
export interface CatalogItem {
  /**
   * @public
   * <p>
   *       The ID of the catalog item.
   *     </p>
   */
  CatalogItemId?: string;

  /**
   * @public
   * <p>
   *       The status of a catalog item.
   *     </p>
   */
  ItemStatus?: CatalogItemStatus | string;

  /**
   * @public
   * <p>
   *       Information about the EC2 capacity of an item.
   *     </p>
   */
  EC2Capacities?: EC2Capacity[];

  /**
   * @public
   * <p>
   *       Information about the power draw of an item.
   *     </p>
   */
  PowerKva?: number;

  /**
   * @public
   * <p> The weight of the item in pounds. </p>
   */
  WeightLbs?: number;

  /**
   * @public
   * <p>
   *       The uplink speed this catalog item requires for the
   *       connection to the Region.
   *     </p>
   */
  SupportedUplinkGbps?: number[];

  /**
   * @public
   * <p>
   *       The supported storage options for the catalog item.
   *     </p>
   */
  SupportedStorage?: (SupportedStorageEnum | string)[];
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
 * @public
 * <p>
 *     Information about a connection.
 *     </p>
 */
export interface ConnectionDetails {
  /**
   * @public
   * <p>
   *       The public key of the client.
   *     </p>
   */
  ClientPublicKey?: string;

  /**
   * @public
   * <p>
   *       The public key of the server.
   *     </p>
   */
  ServerPublicKey?: string;

  /**
   * @public
   * <p>
   *       The endpoint for the server.
   *     </p>
   */
  ServerEndpoint?: string;

  /**
   * @public
   * <p>
   *       The client tunnel address.
   *     </p>
   */
  ClientTunnelAddress?: string;

  /**
   * @public
   * <p>
   *       The server tunnel address.
   *     </p>
   */
  ServerTunnelAddress?: string;

  /**
   * @public
   * <p>
   *       The allowed IP addresses.
   *     </p>
   */
  AllowedIps?: string[];
}

/**
 * @public
 * <p>Information about a line item request.</p>
 */
export interface LineItemRequest {
  /**
   * @public
   * <p>The ID of the catalog item.</p>
   */
  CatalogItemId?: string;

  /**
   * @public
   * <p>The quantity of a line item request.</p>
   */
  Quantity?: number;
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
   * @public
   * <p>
   *       The ID or the Amazon Resource Name (ARN) of the Outpost.
   *     </p>
   */
  OutpostIdentifier: string | undefined;

  /**
   * @public
   * <p>The line items that make up the order.</p>
   */
  LineItems: LineItemRequest[] | undefined;

  /**
   * @public
   * <p>The payment option.</p>
   */
  PaymentOption: PaymentOption | string | undefined;

  /**
   * @public
   * <p>The payment terms.</p>
   */
  PaymentTerm?: PaymentTerm | string;
}

/**
 * @public
 * <p>
 *       Information about a line item asset.
 *     </p>
 */
export interface LineItemAssetInformation {
  /**
   * @public
   * <p>
   *       The ID of the asset.
   *     </p>
   */
  AssetId?: string;

  /**
   * @public
   * <p>
   *       The MAC addresses of the asset.
   *     </p>
   */
  MacAddressList?: string[];
}

/**
 * @public
 * @enum
 */
export const ShipmentCarrier = {
  DBS: "DBS",
  DHL: "DHL",
  FEDEX: "FEDEX",
  UPS: "UPS",
} as const;

/**
 * @public
 */
export type ShipmentCarrier = (typeof ShipmentCarrier)[keyof typeof ShipmentCarrier];

/**
 * @public
 * <p>
 *       Information about a line item shipment.
 *     </p>
 */
export interface ShipmentInformation {
  /**
   * @public
   * <p>
   *       The tracking number of the shipment.
   *     </p>
   */
  ShipmentTrackingNumber?: string;

  /**
   * @public
   * <p>
   *       The carrier of the shipment.
   *     </p>
   */
  ShipmentCarrier?: ShipmentCarrier | string;
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
 * @public
 * <p>Information about a line item.</p>
 */
export interface LineItem {
  /**
   * @public
   * <p>
   *       The ID of the catalog item.
   *     </p>
   */
  CatalogItemId?: string;

  /**
   * @public
   * <p>The ID of the line item.</p>
   */
  LineItemId?: string;

  /**
   * @public
   * <p>The quantity of the line item.</p>
   */
  Quantity?: number;

  /**
   * @public
   * <p>The status of the line item.</p>
   */
  Status?: LineItemStatus | string;

  /**
   * @public
   * <p>
   *       Information about a line item shipment.
   *     </p>
   */
  ShipmentInformation?: ShipmentInformation;

  /**
   * @public
   * <p>
   *       Information about assets.
   *     </p>
   */
  AssetInformationList?: LineItemAssetInformation[];

  /**
   * @public
   * <p>The ID of the previous line item.</p>
   */
  PreviousLineItemId?: string;

  /**
   * @public
   * <p>The ID of the previous order item.</p>
   */
  PreviousOrderId?: string;
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
 * @public
 * <p>Information about an order.</p>
 */
export interface Order {
  /**
   * @public
   * <p>
   *       The ID of the Outpost in the order.
   *     </p>
   */
  OutpostId?: string;

  /**
   * @public
   * <p>The ID of the order.</p>
   */
  OrderId?: string;

  /**
   * @public
   * <p>The status of the order.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PREPARING</code> - Order is received and being prepared.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IN_PROGRESS</code> - Order is either being built, shipped, or installed. To get more
   *           details, see the line item status.</p>
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
   */
  Status?: OrderStatus | string;

  /**
   * @public
   * <p>The line items for the order</p>
   */
  LineItems?: LineItem[];

  /**
   * @public
   * <p>The payment option for the order.</p>
   */
  PaymentOption?: PaymentOption | string;

  /**
   * @public
   * <p>The submission date for the order.</p>
   */
  OrderSubmissionDate?: Date;

  /**
   * @public
   * <p>The fulfillment date of the order.</p>
   */
  OrderFulfilledDate?: Date;

  /**
   * @public
   * <p>The payment term.</p>
   */
  PaymentTerm?: PaymentTerm | string;

  /**
   * @public
   * <p>Type of order.</p>
   */
  OrderType?: OrderType | string;
}

/**
 * @public
 */
export interface CreateOrderOutput {
  /**
   * @public
   * <p>Information about this order.</p>
   */
  Order?: Order;
}

/**
 * @public
 * <p>You have exceeded a service quota.</p>
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  Message?: string;
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
   * @public
   * <p>The name of the Outpost.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The description of the Outpost.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>
   *       The ID or the Amazon Resource Name (ARN) of the site.
   *     </p>
   */
  SiteId: string | undefined;

  /**
   * @public
   * <p>The Availability Zone.</p>
   */
  AvailabilityZone?: string;

  /**
   * @public
   * <p>The ID of the Availability Zone.</p>
   */
  AvailabilityZoneId?: string;

  /**
   * @public
   * <p>The tags to apply to the Outpost.</p>
   */
  Tags?: Record<string, string>;

  /**
   * @public
   * <p>
   *       The type of hardware for this Outpost.
   *     </p>
   */
  SupportedHardwareType?: SupportedHardwareType | string;
}

/**
 * @public
 * <p>Information about an Outpost.</p>
 */
export interface Outpost {
  /**
   * @public
   * <p>
   *       The ID of the Outpost.
   *     </p>
   */
  OutpostId?: string;

  /**
   * @public
   * <p>The Amazon Web Services account ID of the Outpost owner.</p>
   */
  OwnerId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Outpost.</p>
   */
  OutpostArn?: string;

  /**
   * @public
   * <p>The ID of the site.</p>
   */
  SiteId?: string;

  /**
   * @public
   * <p>The name of the Outpost.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The description of the Outpost.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The life cycle status.</p>
   */
  LifeCycleStatus?: string;

  /**
   * @public
   * <p>The Availability Zone.</p>
   */
  AvailabilityZone?: string;

  /**
   * @public
   * <p>The ID of the Availability Zone.</p>
   */
  AvailabilityZoneId?: string;

  /**
   * @public
   * <p>The Outpost tags.</p>
   */
  Tags?: Record<string, string>;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the site.</p>
   */
  SiteArn?: string;

  /**
   * @public
   * <p>
   *       The hardware type.
   *     </p>
   */
  SupportedHardwareType?: SupportedHardwareType | string;
}

/**
 * @public
 */
export interface CreateOutpostOutput {
  /**
   * @public
   * <p>Information about an Outpost.</p>
   */
  Outpost?: Outpost;
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
 * @public
 * <p> Information about the physical and logistical details for racks at sites.
 *       For more information
 *       about hardware requirements for racks, see <a href="https://docs.aws.amazon.com/outposts/latest/userguide/outposts-requirements.html#checklist">Network
 *         readiness checklist</a> in the Amazon Web Services Outposts User Guide.
 *         </p>
 */
export interface RackPhysicalProperties {
  /**
   * @public
   * <p>The power draw available at the hardware placement position for the rack. </p>
   */
  PowerDrawKva?: PowerDrawKva | string;

  /**
   * @public
   * <p>The power option that you can provide for hardware.</p>
   */
  PowerPhase?: PowerPhase | string;

  /**
   * @public
   * <p>The power connector for the hardware. </p>
   */
  PowerConnector?: PowerConnector | string;

  /**
   * @public
   * <p>The position of the power feed.</p>
   */
  PowerFeedDrop?: PowerFeedDrop | string;

  /**
   * @public
   * <p>The uplink speed the rack supports for the connection to the Region. </p>
   */
  UplinkGbps?: UplinkGbps | string;

  /**
   * @public
   * <p>The number of uplinks each Outpost network device.</p>
   */
  UplinkCount?: UplinkCount | string;

  /**
   * @public
   * <p>The type of fiber used to attach the Outpost to the network. </p>
   */
  FiberOpticCableType?: FiberOpticCableType | string;

  /**
   * @public
   * <p>The type of optical standard used to attach the Outpost to the network. This field is
   *       dependent on uplink speed, fiber type, and distance to the upstream device. For more information
   *       about networking requirements for racks, see <a href="https://docs.aws.amazon.com/outposts/latest/userguide/outposts-requirements.html#facility-networking">Network</a>
   *         in the Amazon Web Services Outposts User Guide.
   *         </p>
   */
  OpticalStandard?: OpticalStandard | string;

  /**
   * @public
   * <p>The maximum rack weight that this site can support. <code>NO_LIMIT</code> is over 2000 lbs
   *       (907 kg). </p>
   */
  MaximumSupportedWeightLbs?: MaximumSupportedWeightLbs | string;
}

/**
 * @public
 */
export interface CreateSiteInput {
  /**
   * @public
   * <p>The name of the site.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The description of the site.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Additional information that you provide about site access requirements, electrician
   *       scheduling, personal protective equipment, or regulation of equipment materials that could
   *       affect your installation process. </p>
   */
  Notes?: string;

  /**
   * @public
   * <p>
   *       The tags to apply to a site.
   *     </p>
   */
  Tags?: Record<string, string>;

  /**
   * @public
   * <p>
   *       The location to install and power on the hardware. This address might be
   *       different from the shipping address.
   *     </p>
   */
  OperatingAddress?: Address;

  /**
   * @public
   * <p>
   *       The location to ship the hardware. This address might be different
   *       from the operating address.
   *     </p>
   */
  ShippingAddress?: Address;

  /**
   * @public
   * <p> Information about the physical and logistical details for the rack at this site.
   *       For more information
   *       about hardware requirements for racks, see <a href="https://docs.aws.amazon.com/outposts/latest/userguide/outposts-requirements.html#checklist">Network
   *         readiness checklist</a> in the Amazon Web Services Outposts User Guide.
   *         </p>
   */
  RackPhysicalProperties?: RackPhysicalProperties;
}

/**
 * @public
 * <p>Information about a site.</p>
 */
export interface Site {
  /**
   * @public
   * <p>The ID of the site.</p>
   */
  SiteId?: string;

  /**
   * @public
   * <p>The ID of the Amazon Web Services account.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>The name of the site.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The description of the site.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The site tags.</p>
   */
  Tags?: Record<string, string>;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the site.</p>
   */
  SiteArn?: string;

  /**
   * @public
   * <p>
   *       Notes about a site.
   *     </p>
   */
  Notes?: string;

  /**
   * @public
   * <p>
   *       The ISO-3166 two-letter country code where the hardware is installed and powered on.
   *     </p>
   */
  OperatingAddressCountryCode?: string;

  /**
   * @public
   * <p> State or region where the hardware is installed and powered on. </p>
   */
  OperatingAddressStateOrRegion?: string;

  /**
   * @public
   * <p>
   *       City where the hardware is installed and powered on.
   *     </p>
   */
  OperatingAddressCity?: string;

  /**
   * @public
   * <p>
   *       Information about the physical and logistical details for a rack at the site.
   *     </p>
   */
  RackPhysicalProperties?: RackPhysicalProperties;
}

/**
 * @public
 */
export interface CreateSiteOutput {
  /**
   * @public
   * <p>Information about a site.</p>
   */
  Site?: Site;
}

/**
 * @public
 */
export interface DeleteOutpostInput {
  /**
   * @public
   * <p>
   *       The ID or the Amazon Resource Name (ARN) of the Outpost.
   *     </p>
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
   * @public
   * <p>
   *       The ID or the Amazon Resource Name (ARN) of the site.
   *     </p>
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
export interface GetCatalogItemInput {
  /**
   * @public
   * <p>The ID of the catalog item.</p>
   */
  CatalogItemId: string | undefined;
}

/**
 * @public
 */
export interface GetCatalogItemOutput {
  /**
   * @public
   * <p>Information about this catalog item.</p>
   */
  CatalogItem?: CatalogItem;
}

/**
 * @public
 */
export interface GetConnectionRequest {
  /**
   * @public
   * <p>
   *       The ID of the connection.
   *     </p>
   */
  ConnectionId: string | undefined;
}

/**
 * @public
 */
export interface GetConnectionResponse {
  /**
   * @public
   * <p>
   *       The ID of the connection.
   *     </p>
   */
  ConnectionId?: string;

  /**
   * @public
   * <p>
   *      Information about the connection.
   *     </p>
   */
  ConnectionDetails?: ConnectionDetails;
}

/**
 * @public
 */
export interface GetOrderInput {
  /**
   * @public
   * <p>The ID of the order.</p>
   */
  OrderId: string | undefined;
}

/**
 * @public
 */
export interface GetOrderOutput {
  /**
   * @public
   * <p>Information about an order.</p>
   */
  Order?: Order;
}

/**
 * @public
 */
export interface GetOutpostInput {
  /**
   * @public
   * <p>
   *       The ID or the Amazon Resource Name (ARN) of the Outpost.
   *     </p>
   */
  OutpostId: string | undefined;
}

/**
 * @public
 */
export interface GetOutpostOutput {
  /**
   * @public
   * <p>Information about an Outpost.</p>
   */
  Outpost?: Outpost;
}

/**
 * @public
 */
export interface GetOutpostInstanceTypesInput {
  /**
   * @public
   * <p>
   *       The ID or the Amazon Resource Name (ARN) of the Outpost.
   *     </p>
   */
  OutpostId: string | undefined;

  /**
   * @public
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum page size.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Information about an instance type.</p>
 */
export interface InstanceTypeItem {
  /**
   * @public
   * <p>The instance type.</p>
   */
  InstanceType?: string;
}

/**
 * @public
 */
export interface GetOutpostInstanceTypesOutput {
  /**
   * @public
   * <p>Information about the instance types.</p>
   */
  InstanceTypes?: InstanceTypeItem[];

  /**
   * @public
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>
   *       The ID of the Outpost.
   *     </p>
   */
  OutpostId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Outpost.</p>
   */
  OutpostArn?: string;
}

/**
 * @public
 */
export interface GetSiteInput {
  /**
   * @public
   * <p>
   *       The ID or the Amazon Resource Name (ARN) of the site.
   *     </p>
   */
  SiteId: string | undefined;
}

/**
 * @public
 */
export interface GetSiteOutput {
  /**
   * @public
   * <p>Information about a site.</p>
   */
  Site?: Site;
}

/**
 * @public
 */
export interface GetSiteAddressInput {
  /**
   * @public
   * <p>
   *       The ID or the Amazon Resource Name (ARN) of the site.
   *     </p>
   */
  SiteId: string | undefined;

  /**
   * @public
   * <p>The type of the address you request. </p>
   */
  AddressType: AddressType | string | undefined;
}

/**
 * @public
 */
export interface GetSiteAddressOutput {
  /**
   * @public
   * <p>The ID of the site.</p>
   */
  SiteId?: string;

  /**
   * @public
   * <p>The type of the address you receive. </p>
   */
  AddressType?: AddressType | string;

  /**
   * @public
   * <p>
   *       Information about the address.
   *     </p>
   */
  Address?: Address;
}

/**
 * @public
 */
export interface ListAssetsInput {
  /**
   * @public
   * <p>
   *       The ID or the Amazon Resource Name (ARN) of the Outpost.
   *     </p>
   */
  OutpostIdentifier: string | undefined;

  /**
   * @public
   * <p>Filters the results by the host ID of a Dedicated Host.</p>
   */
  HostIdFilter?: string[];

  /**
   * @public
   * <p>The maximum page size.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Filters the results by state.</p>
   */
  StatusFilter?: (AssetState | string)[];
}

/**
 * @public
 */
export interface ListAssetsOutput {
  /**
   * @public
   * <p>Information about the hardware assets.</p>
   */
  Assets?: AssetInfo[];

  /**
   * @public
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListCatalogItemsInput {
  /**
   * @public
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum page size.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Filters the results by item class.</p>
   */
  ItemClassFilter?: (CatalogItemClass | string)[];

  /**
   * @public
   * <p>Filters the results by storage option.</p>
   */
  SupportedStorageFilter?: (SupportedStorageEnum | string)[];

  /**
   * @public
   * <p>Filters the results by EC2 family (for example, M5).</p>
   */
  EC2FamilyFilter?: string[];
}

/**
 * @public
 */
export interface ListCatalogItemsOutput {
  /**
   * @public
   * <p>Information about the catalog items.</p>
   */
  CatalogItems?: CatalogItem[];

  /**
   * @public
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListOrdersInput {
  /**
   * @public
   * <p>
   *       The ID or the Amazon Resource Name (ARN) of the Outpost.
   *     </p>
   */
  OutpostIdentifierFilter?: string;

  /**
   * @public
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum page size.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>
 *       A summary of line items in your order.
 *     </p>
 */
export interface OrderSummary {
  /**
   * @public
   * <p>
   *       The ID of the Outpost.
   *     </p>
   */
  OutpostId?: string;

  /**
   * @public
   * <p>
   *       The ID of the order.
   *     </p>
   */
  OrderId?: string;

  /**
   * @public
   * <p>
   *       The type of order.
   *     </p>
   */
  OrderType?: OrderType | string;

  /**
   * @public
   * <p>The status of the order.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PREPARING</code> - Order is received and is being prepared.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IN_PROGRESS</code> - Order is either being built, shipped, or installed. For more
   *           information, see the <code>LineItem</code> status.</p>
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
   */
  Status?: OrderStatus | string;

  /**
   * @public
   * <p>
   *       The status of all line items in the order.
   *     </p>
   */
  LineItemCountsByStatus?: Record<string, number>;

  /**
   * @public
   * <p>
   *       The submission date for the order.
   *     </p>
   */
  OrderSubmissionDate?: Date;

  /**
   * @public
   * <p>
   *       The fulfilment date for the order.
   *     </p>
   */
  OrderFulfilledDate?: Date;
}

/**
 * @public
 */
export interface ListOrdersOutput {
  /**
   * @public
   * <p>
   *       Information about the orders.
   *     </p>
   */
  Orders?: OrderSummary[];

  /**
   * @public
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListOutpostsInput {
  /**
   * @public
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum page size.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Filters the results by the lifecycle status.</p>
   */
  LifeCycleStatusFilter?: string[];

  /**
   * @public
   * <p>Filters the results by Availability Zone (for example, <code>us-east-1a</code>).</p>
   */
  AvailabilityZoneFilter?: string[];

  /**
   * @public
   * <p>Filters the results by AZ ID (for example, <code>use1-az1</code>).</p>
   */
  AvailabilityZoneIdFilter?: string[];
}

/**
 * @public
 */
export interface ListOutpostsOutput {
  /**
   * @public
   * <p>Information about the Outposts.</p>
   */
  Outposts?: Outpost[];

  /**
   * @public
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListSitesInput {
  /**
   * @public
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum page size.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Filters the results by country code.</p>
   */
  OperatingAddressCountryCodeFilter?: string[];

  /**
   * @public
   * <p>Filters the results by state or region.</p>
   */
  OperatingAddressStateOrRegionFilter?: string[];

  /**
   * @public
   * <p>Filters the results by city.</p>
   */
  OperatingAddressCityFilter?: string[];
}

/**
 * @public
 */
export interface ListSitesOutput {
  /**
   * @public
   * <p>Information about the sites.</p>
   */
  Sites?: Site[];

  /**
   * @public
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * <p>The resource tags.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface StartConnectionRequest {
  /**
   * @public
   * <p>
   *       The serial number of the dongle.
   *     </p>
   */
  DeviceSerialNumber: string | undefined;

  /**
   * @public
   * <p>
   *       The ID of the Outpost server.
   *     </p>
   */
  AssetId: string | undefined;

  /**
   * @public
   * <p>
   *       The public key of the client.
   *     </p>
   */
  ClientPublicKey: string | undefined;

  /**
   * @public
   * <p>
   *       The device index of the network interface on the Outpost server.
   *     </p>
   */
  NetworkInterfaceDeviceIndex: number | undefined;
}

/**
 * @public
 */
export interface StartConnectionResponse {
  /**
   * @public
   * <p>
   *       The ID of the connection.
   *     </p>
   */
  ConnectionId?: string;

  /**
   * @public
   * <p>
   *       The underlay IP address.
   *     </p>
   */
  UnderlayIpAddress?: string;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>The tags to add to the resource.</p>
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
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>The tag keys.</p>
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
   * @public
   * <p>
   *       The ID or the Amazon Resource Name (ARN) of the Outpost.
   *     </p>
   */
  OutpostId: string | undefined;

  /**
   * @public
   * <p>The name of the Outpost.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The description of the Outpost.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>
   *       The type of hardware for this Outpost.
   *     </p>
   */
  SupportedHardwareType?: SupportedHardwareType | string;
}

/**
 * @public
 */
export interface UpdateOutpostOutput {
  /**
   * @public
   * <p>Information about an Outpost.</p>
   */
  Outpost?: Outpost;
}

/**
 * @public
 */
export interface UpdateSiteInput {
  /**
   * @public
   * <p>
   *       The ID or the Amazon Resource Name (ARN) of the site.
   *     </p>
   */
  SiteId: string | undefined;

  /**
   * @public
   * <p>The name of the site.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The description of the site.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Notes about a site.</p>
   */
  Notes?: string;
}

/**
 * @public
 */
export interface UpdateSiteOutput {
  /**
   * @public
   * <p>Information about a site.</p>
   */
  Site?: Site;
}

/**
 * @public
 */
export interface UpdateSiteAddressInput {
  /**
   * @public
   * <p>
   *       The ID or the Amazon Resource Name (ARN) of the site.
   *     </p>
   */
  SiteId: string | undefined;

  /**
   * @public
   * <p>
   *       The type of the address.
   *     </p>
   */
  AddressType: AddressType | string | undefined;

  /**
   * @public
   * <p>
   *       The address for the site.
   *     </p>
   */
  Address: Address | undefined;
}

/**
 * @public
 */
export interface UpdateSiteAddressOutput {
  /**
   * @public
   * <p>
   *       The type of the address.
   *     </p>
   */
  AddressType?: AddressType | string;

  /**
   * @public
   * <p>
   *       Information about an address.
   *     </p>
   */
  Address?: Address;
}

/**
 * @public
 */
export interface UpdateSiteRackPhysicalPropertiesInput {
  /**
   * @public
   * <p>
   *       The ID or the Amazon Resource Name (ARN) of the site.
   *     </p>
   */
  SiteId: string | undefined;

  /**
   * @public
   * <p>The power draw, in kVA, available at the hardware placement position for the
   *       rack.</p>
   */
  PowerDrawKva?: PowerDrawKva | string;

  /**
   * @public
   * <p>The power option that you can provide for hardware. </p>
   *          <ul>
   *             <li>
   *                <p>Single-phase AC feed: 200 V to 277 V, 50 Hz or 60 Hz</p>
   *             </li>
   *             <li>
   *                <p>Three-phase AC feed: 346 V to 480 V, 50 Hz or 60 Hz</p>
   *             </li>
   *          </ul>
   */
  PowerPhase?: PowerPhase | string;

  /**
   * @public
   * <p>The power connector that Amazon Web Services should plan to provide for connections to the
   *       hardware. Note the correlation between <code>PowerPhase</code> and
   *       <code>PowerConnector</code>. </p>
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
   */
  PowerConnector?: PowerConnector | string;

  /**
   * @public
   * <p>Indicates whether the power feed comes above or below the rack. </p>
   */
  PowerFeedDrop?: PowerFeedDrop | string;

  /**
   * @public
   * <p>The uplink speed the rack should support for the connection to the Region.
   *     </p>
   */
  UplinkGbps?: UplinkGbps | string;

  /**
   * @public
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
   */
  UplinkCount?: UplinkCount | string;

  /**
   * @public
   * <p>The type of fiber that you will use to attach the Outpost to your network.
   *     </p>
   */
  FiberOpticCableType?: FiberOpticCableType | string;

  /**
   * @public
   * <p>The type of optical standard that you will use to attach the Outpost to your
   *       network. This field is dependent on uplink speed, fiber type, and distance to the upstream
   *       device. For more information
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
   */
  OpticalStandard?: OpticalStandard | string;

  /**
   * @public
   * <p>The maximum rack weight that this site can support. <code>NO_LIMIT</code> is over
   *       2000lbs. </p>
   */
  MaximumSupportedWeightLbs?: MaximumSupportedWeightLbs | string;
}

/**
 * @public
 */
export interface UpdateSiteRackPhysicalPropertiesOutput {
  /**
   * @public
   * <p>Information about a site.</p>
   */
  Site?: Site;
}
