// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { OutpostsServiceException as __BaseException } from "./OutpostsServiceException";

/**
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
 * <p>
 *       Information about an address.
 *     </p>
 */
export interface Address {
  /**
   * <p>The name of the contact.</p>
   */
  ContactName?: string;

  /**
   * <p>The phone number of the contact.</p>
   */
  ContactPhoneNumber?: string;

  /**
   * <p>The first line of the address.</p>
   */
  AddressLine1: string | undefined;

  /**
   * <p>The second line of the address.</p>
   */
  AddressLine2?: string;

  /**
   * <p>The third line of the address.</p>
   */
  AddressLine3?: string;

  /**
   * <p>The city for the address.</p>
   */
  City: string | undefined;

  /**
   * <p>The state for the address.</p>
   */
  StateOrRegion: string | undefined;

  /**
   * <p>The district or county for the address.</p>
   */
  DistrictOrCounty?: string;

  /**
   * <p>The postal code for the address.</p>
   */
  PostalCode: string | undefined;

  /**
   * <p>The ISO-3166 two-letter country code for the address.</p>
   */
  CountryCode: string | undefined;

  /**
   * <p>The municipality for the address.</p>
   */
  Municipality?: string;
}

export enum AddressType {
  OPERATING_ADDRESS = "OPERATING_ADDRESS",
  SHIPPING_ADDRESS = "SHIPPING_ADDRESS",
}

/**
 * <p>
 *       Information about the position of the asset in a rack.
 *     </p>
 */
export interface AssetLocation {
  /**
   * <p>
   *       The position of an asset in a rack measured in rack units.
   *     </p>
   */
  RackElevation?: number;
}

export enum AssetType {
  COMPUTE = "COMPUTE",
}

export enum ComputeAssetState {
  ACTIVE = "ACTIVE",
  ISOLATED = "ISOLATED",
  RETIRING = "RETIRING",
}

/**
 * <p>
 *       Information about compute hardware assets.
 *     </p>
 */
export interface ComputeAttributes {
  /**
   * <p>
   *       The host ID of the Dedicated Host on the asset.
   *     </p>
   */
  HostId?: string;

  /**
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
 * <p>
 *       Information about hardware assets.
 *     </p>
 */
export interface AssetInfo {
  /**
   * <p>
   *       The ID of the asset.
   *     </p>
   */
  AssetId?: string;

  /**
   * <p>
   *       The rack ID of the asset.
   *     </p>
   */
  RackId?: string;

  /**
   * <p>
   *       The type of the asset.
   *     </p>
   */
  AssetType?: AssetType | string;

  /**
   * <p>
   *       Information about compute hardware assets.
   *     </p>
   */
  ComputeAttributes?: ComputeAttributes;

  /**
   * <p>
   *       The position of an asset in a rack.
   *     </p>
   */
  AssetLocation?: AssetLocation;
}

export enum AssetState {
  ACTIVE = "ACTIVE",
  RETIRING = "RETIRING",
}

export interface CancelOrderInput {
  /**
   * <p>
   *       The ID of the order.
   *     </p>
   */
  OrderId: string | undefined;
}

export interface CancelOrderOutput {}

export enum ResourceType {
  ORDER = "ORDER",
  OUTPOST = "OUTPOST",
}

/**
 * <p>Updating or deleting this resource can cause an inconsistent state.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * <p>The ID of the resource causing the conflict.</p>
   */
  ResourceId?: string;

  /**
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
 * <p> Information about EC2 capacity. </p>
 */
export interface EC2Capacity {
  /**
   * <p>
   *       The family of the EC2 capacity.
   *     </p>
   */
  Family?: string;

  /**
   * <p>
   *       The maximum size of the EC2 capacity.
   *     </p>
   */
  MaxSize?: string;

  /**
   * <p>
   *       The quantity of the EC2 capacity.
   *     </p>
   */
  Quantity?: string;
}

export enum CatalogItemStatus {
  AVAILABLE = "AVAILABLE",
  DISCONTINUED = "DISCONTINUED",
}

export enum SupportedStorageEnum {
  EBS = "EBS",
  S3 = "S3",
}

/**
 * <p> Information about a catalog item. </p>
 */
export interface CatalogItem {
  /**
   * <p>
   *       The ID of the catalog item.
   *     </p>
   */
  CatalogItemId?: string;

  /**
   * <p>
   *       The status of a catalog item.
   *     </p>
   */
  ItemStatus?: CatalogItemStatus | string;

  /**
   * <p>
   *       Information about the EC2 capacity of an item.
   *     </p>
   */
  EC2Capacities?: EC2Capacity[];

  /**
   * <p>
   *       Information about the power draw of an item.
   *     </p>
   */
  PowerKva?: number;

  /**
   * <p> The weight of the item in pounds. </p>
   */
  WeightLbs?: number;

  /**
   * <p>
   *       The uplink speed this catalog item requires for the
   *       connection to the Region.
   *     </p>
   */
  SupportedUplinkGbps?: number[];

  /**
   * <p>
   *       The supported storage options for the catalog item.
   *     </p>
   */
  SupportedStorage?: (SupportedStorageEnum | string)[];
}

export enum CatalogItemClass {
  RACK = "RACK",
  SERVER = "SERVER",
}

/**
 * <p>
 *     Information about a connection.
 *     </p>
 */
export interface ConnectionDetails {
  /**
   * <p>
   *       The public key of the client.
   *     </p>
   */
  ClientPublicKey?: string;

  /**
   * <p>
   *       The public key of the server.
   *     </p>
   */
  ServerPublicKey?: string;

  /**
   * <p>
   *       The endpoint for the server.
   *     </p>
   */
  ServerEndpoint?: string;

  /**
   * <p>
   *       The client tunnel address.
   *     </p>
   */
  ClientTunnelAddress?: string;

  /**
   * <p>
   *       The server tunnel address.
   *     </p>
   */
  ServerTunnelAddress?: string;

  /**
   * <p>
   *       The allowed IP addresses.
   *     </p>
   */
  AllowedIps?: string[];
}

/**
 * <p>Information about a line item request.</p>
 */
export interface LineItemRequest {
  /**
   * <p>The ID of the catalog item.</p>
   */
  CatalogItemId?: string;

  /**
   * <p>The quantity of a line item request.</p>
   */
  Quantity?: number;
}

export enum PaymentOption {
  ALL_UPFRONT = "ALL_UPFRONT",
  NO_UPFRONT = "NO_UPFRONT",
  PARTIAL_UPFRONT = "PARTIAL_UPFRONT",
}

export enum PaymentTerm {
  ONE_YEAR = "ONE_YEAR",
  THREE_YEARS = "THREE_YEARS",
}

export interface CreateOrderInput {
  /**
   * <p>
   *       The ID or the Amazon Resource Name (ARN) of the Outpost.
   *     </p>
   */
  OutpostIdentifier: string | undefined;

  /**
   * <p>The line items that make up the order.</p>
   */
  LineItems: LineItemRequest[] | undefined;

  /**
   * <p>The payment option.</p>
   */
  PaymentOption: PaymentOption | string | undefined;

  /**
   * <p>The payment terms.</p>
   */
  PaymentTerm?: PaymentTerm | string;
}

/**
 * <p>
 *       Information about a line item asset.
 *     </p>
 */
export interface LineItemAssetInformation {
  /**
   * <p>
   *       The ID of the asset.
   *     </p>
   */
  AssetId?: string;

  /**
   * <p>
   *       The MAC addresses of the asset.
   *     </p>
   */
  MacAddressList?: string[];
}

export enum ShipmentCarrier {
  DBS = "DBS",
  DHL = "DHL",
  FEDEX = "FEDEX",
  UPS = "UPS",
}

/**
 * <p>
 *       Information about a line item shipment.
 *     </p>
 */
export interface ShipmentInformation {
  /**
   * <p>
   *       The tracking number of the shipment.
   *     </p>
   */
  ShipmentTrackingNumber?: string;

  /**
   * <p>
   *       The carrier of the shipment.
   *     </p>
   */
  ShipmentCarrier?: ShipmentCarrier | string;
}

export enum LineItemStatus {
  BUILDING = "BUILDING",
  CANCELLED = "CANCELLED",
  DELIVERED = "DELIVERED",
  ERROR = "ERROR",
  INSTALLED = "INSTALLED",
  INSTALLING = "INSTALLING",
  PREPARING = "PREPARING",
  SHIPPED = "SHIPPED",
}

/**
 * <p>Information about a line item.</p>
 */
export interface LineItem {
  /**
   * <p>
   *       The ID of the catalog item.
   *     </p>
   */
  CatalogItemId?: string;

  /**
   * <p>The ID of the line item.</p>
   */
  LineItemId?: string;

  /**
   * <p>The quantity of the line item.</p>
   */
  Quantity?: number;

  /**
   * <p>The status of the line item.</p>
   */
  Status?: LineItemStatus | string;

  /**
   * <p>
   *       Information about a line item shipment.
   *     </p>
   */
  ShipmentInformation?: ShipmentInformation;

  /**
   * <p>
   *       Information about assets.
   *     </p>
   */
  AssetInformationList?: LineItemAssetInformation[];
}

export enum OrderStatus {
  CANCELLED = "CANCELLED",
  COMPLETED = "COMPLETED",
  ERROR = "ERROR",
  FULFILLED = "FULFILLED",
  INSTALLING = "INSTALLING",
  IN_PROGRESS = "IN_PROGRESS",
  PENDING = "PENDING",
  PREPARING = "PREPARING",
  PROCESSING = "PROCESSING",
  RECEIVED = "RECEIVED",
}

/**
 * <p>Information about an order.</p>
 */
export interface Order {
  /**
   * <p>
   *       The ID of the Outpost in the order.
   *     </p>
   */
  OutpostId?: string;

  /**
   * <p>The ID of the order.</p>
   */
  OrderId?: string;

  /**
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
   * <p>The line items for the order</p>
   */
  LineItems?: LineItem[];

  /**
   * <p>The payment option for the order.</p>
   */
  PaymentOption?: PaymentOption | string;

  /**
   * <p>The submission date for the order.</p>
   */
  OrderSubmissionDate?: Date;

  /**
   * <p>The fulfillment date of the order.</p>
   */
  OrderFulfilledDate?: Date;

  /**
   * <p>The payment term.</p>
   */
  PaymentTerm?: PaymentTerm | string;
}

export interface CreateOrderOutput {
  /**
   * <p>Information about this order.</p>
   */
  Order?: Order;
}

/**
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

export enum SupportedHardwareType {
  RACK = "RACK",
  SERVER = "SERVER",
}

export interface CreateOutpostInput {
  /**
   * <p>The name of the Outpost.</p>
   */
  Name: string | undefined;

  /**
   * <p>The description of the Outpost.</p>
   */
  Description?: string;

  /**
   * <p>
   *       The ID or the Amazon Resource Name (ARN) of the site.
   *     </p>
   */
  SiteId: string | undefined;

  /**
   * <p>The Availability Zone.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The ID of the Availability Zone.</p>
   */
  AvailabilityZoneId?: string;

  /**
   * <p>The tags to apply to the Outpost.</p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>
   *       The type of hardware for this Outpost.
   *     </p>
   */
  SupportedHardwareType?: SupportedHardwareType | string;
}

/**
 * <p>Information about an Outpost.</p>
 */
export interface Outpost {
  /**
   * <p>
   *       The ID of the Outpost.
   *     </p>
   */
  OutpostId?: string;

  /**
   * <p>The Amazon Web Services account ID of the Outpost owner.</p>
   */
  OwnerId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Outpost.</p>
   */
  OutpostArn?: string;

  /**
   * <p>The ID of the site.</p>
   */
  SiteId?: string;

  /**
   * <p>The name of the Outpost.</p>
   */
  Name?: string;

  /**
   * <p>The description of the Outpost.</p>
   */
  Description?: string;

  /**
   * <p>The life cycle status.</p>
   */
  LifeCycleStatus?: string;

  /**
   * <p>The Availability Zone.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The ID of the Availability Zone.</p>
   */
  AvailabilityZoneId?: string;

  /**
   * <p>The Outpost tags.</p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>The Amazon Resource Name (ARN) of the site.</p>
   */
  SiteArn?: string;

  /**
   * <p>
   *       The hardware type.
   *     </p>
   */
  SupportedHardwareType?: SupportedHardwareType | string;
}

export interface CreateOutpostOutput {
  /**
   * <p>Information about an Outpost.</p>
   */
  Outpost?: Outpost;
}

export enum FiberOpticCableType {
  MULTI_MODE = "MULTI_MODE",
  SINGLE_MODE = "SINGLE_MODE",
}

export enum MaximumSupportedWeightLbs {
  MAX_1400_LBS = "MAX_1400_LBS",
  MAX_1600_LBS = "MAX_1600_LBS",
  MAX_1800_LBS = "MAX_1800_LBS",
  MAX_2000_LBS = "MAX_2000_LBS",
  NO_LIMIT = "NO_LIMIT",
}

export enum OpticalStandard {
  OPTIC_1000BASE_LX = "OPTIC_1000BASE_LX",
  OPTIC_1000BASE_SX = "OPTIC_1000BASE_SX",
  OPTIC_100GBASE_CWDM4 = "OPTIC_100GBASE_CWDM4",
  OPTIC_100GBASE_LR4 = "OPTIC_100GBASE_LR4",
  OPTIC_100GBASE_SR4 = "OPTIC_100GBASE_SR4",
  OPTIC_100G_PSM4_MSA = "OPTIC_100G_PSM4_MSA",
  OPTIC_10GBASE_IR = "OPTIC_10GBASE_IR",
  OPTIC_10GBASE_LR = "OPTIC_10GBASE_LR",
  OPTIC_10GBASE_SR = "OPTIC_10GBASE_SR",
  OPTIC_40GBASE_ESR = "OPTIC_40GBASE_ESR",
  OPTIC_40GBASE_IR4_LR4L = "OPTIC_40GBASE_IR4_LR4L",
  OPTIC_40GBASE_LR4 = "OPTIC_40GBASE_LR4",
  OPTIC_40GBASE_SR = "OPTIC_40GBASE_SR",
}

export enum PowerConnector {
  AH530P7W = "AH530P7W",
  AH532P6W = "AH532P6W",
  IEC309 = "IEC309",
  L6_30P = "L6_30P",
}

export enum PowerDrawKva {
  POWER_10_KVA = "POWER_10_KVA",
  POWER_15_KVA = "POWER_15_KVA",
  POWER_30_KVA = "POWER_30_KVA",
  POWER_5_KVA = "POWER_5_KVA",
}

export enum PowerFeedDrop {
  ABOVE_RACK = "ABOVE_RACK",
  BELOW_RACK = "BELOW_RACK",
}

export enum PowerPhase {
  SINGLE_PHASE = "SINGLE_PHASE",
  THREE_PHASE = "THREE_PHASE",
}

export enum UplinkCount {
  UPLINK_COUNT_1 = "UPLINK_COUNT_1",
  UPLINK_COUNT_12 = "UPLINK_COUNT_12",
  UPLINK_COUNT_16 = "UPLINK_COUNT_16",
  UPLINK_COUNT_2 = "UPLINK_COUNT_2",
  UPLINK_COUNT_3 = "UPLINK_COUNT_3",
  UPLINK_COUNT_4 = "UPLINK_COUNT_4",
  UPLINK_COUNT_5 = "UPLINK_COUNT_5",
  UPLINK_COUNT_6 = "UPLINK_COUNT_6",
  UPLINK_COUNT_7 = "UPLINK_COUNT_7",
  UPLINK_COUNT_8 = "UPLINK_COUNT_8",
}

export enum UplinkGbps {
  UPLINK_100G = "UPLINK_100G",
  UPLINK_10G = "UPLINK_10G",
  UPLINK_1G = "UPLINK_1G",
  UPLINK_40G = "UPLINK_40G",
}

/**
 * <p> Information about the physical and logistical details for racks at sites.
 *       For more information
 *       about hardware requirements for racks, see <a href="https://docs.aws.amazon.com/outposts/latest/userguide/outposts-requirements.html#checklist">Network
 *         readiness checklist</a> in the Amazon Web Services Outposts User Guide.
 *         </p>
 */
export interface RackPhysicalProperties {
  /**
   * <p>The power draw available at the hardware placement position for the rack. </p>
   */
  PowerDrawKva?: PowerDrawKva | string;

  /**
   * <p>The power option that you can provide for hardware.</p>
   */
  PowerPhase?: PowerPhase | string;

  /**
   * <p>The power connector for the hardware. </p>
   */
  PowerConnector?: PowerConnector | string;

  /**
   * <p>The position of the power feed.</p>
   */
  PowerFeedDrop?: PowerFeedDrop | string;

  /**
   * <p>The uplink speed the rack supports for the connection to the Region. </p>
   */
  UplinkGbps?: UplinkGbps | string;

  /**
   * <p>The number of uplinks each Outpost network device.</p>
   */
  UplinkCount?: UplinkCount | string;

  /**
   * <p>The type of fiber used to attach the Outpost to the network. </p>
   */
  FiberOpticCableType?: FiberOpticCableType | string;

  /**
   * <p>The type of optical standard used to attach the Outpost to the network. This field is
   *       dependent on uplink speed, fiber type, and distance to the upstream device. For more information
   *       about networking requirements for racks, see <a href="https://docs.aws.amazon.com/outposts/latest/userguide/outposts-requirements.html#facility-networking">Network</a>
   *         in the Amazon Web Services Outposts User Guide.
   *         </p>
   */
  OpticalStandard?: OpticalStandard | string;

  /**
   * <p>The maximum rack weight that this site can support. <code>NO_LIMIT</code> is over 2000 lbs
   *       (907 kg). </p>
   */
  MaximumSupportedWeightLbs?: MaximumSupportedWeightLbs | string;
}

export interface CreateSiteInput {
  /**
   * <p>The name of the site.</p>
   */
  Name: string | undefined;

  /**
   * <p>The description of the site.</p>
   */
  Description?: string;

  /**
   * <p>Additional information that you provide about site access requirements, electrician
   *       scheduling, personal protective equipment, or regulation of equipment materials that could
   *       affect your installation process. </p>
   */
  Notes?: string;

  /**
   * <p>
   *       The tags to apply to a site.
   *     </p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>
   *       The location to install and power on the hardware. This address might be
   *       different from the shipping address.
   *     </p>
   */
  OperatingAddress?: Address;

  /**
   * <p>
   *       The location to ship the hardware. This address might be different
   *       from the operating address.
   *     </p>
   */
  ShippingAddress?: Address;

  /**
   * <p> Information about the physical and logistical details for the rack at this site.
   *       For more information
   *       about hardware requirements for racks, see <a href="https://docs.aws.amazon.com/outposts/latest/userguide/outposts-requirements.html#checklist">Network
   *         readiness checklist</a> in the Amazon Web Services Outposts User Guide.
   *         </p>
   */
  RackPhysicalProperties?: RackPhysicalProperties;
}

/**
 * <p>Information about a site.</p>
 */
export interface Site {
  /**
   * <p>The ID of the site.</p>
   */
  SiteId?: string;

  /**
   * <p>The ID of the Amazon Web Services account.</p>
   */
  AccountId?: string;

  /**
   * <p>The name of the site.</p>
   */
  Name?: string;

  /**
   * <p>The description of the site.</p>
   */
  Description?: string;

  /**
   * <p>The site tags.</p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>The Amazon Resource Name (ARN) of the site.</p>
   */
  SiteArn?: string;

  /**
   * <p>
   *       Notes about a site.
   *     </p>
   */
  Notes?: string;

  /**
   * <p>
   *       The ISO-3166 two-letter country code where the hardware is installed and powered on.
   *     </p>
   */
  OperatingAddressCountryCode?: string;

  /**
   * <p> State or region where the hardware is installed and powered on. </p>
   */
  OperatingAddressStateOrRegion?: string;

  /**
   * <p>
   *       City where the hardware is installed and powered on.
   *     </p>
   */
  OperatingAddressCity?: string;

  /**
   * <p>
   *       Information about the physical and logistical details for a rack at the site.
   *     </p>
   */
  RackPhysicalProperties?: RackPhysicalProperties;
}

export interface CreateSiteOutput {
  /**
   * <p>Information about a site.</p>
   */
  Site?: Site;
}

export interface DeleteOutpostInput {
  /**
   * <p>
   *       The ID or the Amazon Resource Name (ARN) of the Outpost.
   *     </p>
   */
  OutpostId: string | undefined;
}

export interface DeleteOutpostOutput {}

export interface DeleteSiteInput {
  /**
   * <p>
   *       The ID or the Amazon Resource Name (ARN) of the site.
   *     </p>
   */
  SiteId: string | undefined;
}

export interface DeleteSiteOutput {}

export interface GetCatalogItemInput {
  /**
   * <p>The ID of the catalog item.</p>
   */
  CatalogItemId: string | undefined;
}

export interface GetCatalogItemOutput {
  /**
   * <p>Information about this catalog item.</p>
   */
  CatalogItem?: CatalogItem;
}

export interface GetConnectionRequest {
  /**
   * <p>
   *       The ID of the connection.
   *     </p>
   */
  ConnectionId: string | undefined;
}

export interface GetConnectionResponse {
  /**
   * <p>
   *       The ID of the connection.
   *     </p>
   */
  ConnectionId?: string;

  /**
   * <p>
   *      Information about the connection.
   *     </p>
   */
  ConnectionDetails?: ConnectionDetails;
}

export interface GetOrderInput {
  /**
   * <p>The ID of the order.</p>
   */
  OrderId: string | undefined;
}

export interface GetOrderOutput {
  /**
   * <p>Information about an order.</p>
   */
  Order?: Order;
}

export interface GetOutpostInput {
  /**
   * <p>
   *       The ID or the Amazon Resource Name (ARN) of the Outpost.
   *     </p>
   */
  OutpostId: string | undefined;
}

export interface GetOutpostOutput {
  /**
   * <p>Information about an Outpost.</p>
   */
  Outpost?: Outpost;
}

export interface GetOutpostInstanceTypesInput {
  /**
   * <p>
   *       The ID or the Amazon Resource Name (ARN) of the Outpost.
   *     </p>
   */
  OutpostId: string | undefined;

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum page size.</p>
   */
  MaxResults?: number;
}

/**
 * <p>Information about an instance type.</p>
 */
export interface InstanceTypeItem {
  /**
   * <p>The instance type.</p>
   */
  InstanceType?: string;
}

export interface GetOutpostInstanceTypesOutput {
  /**
   * <p>Information about the instance types.</p>
   */
  InstanceTypes?: InstanceTypeItem[];

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>
   *       The ID of the Outpost.
   *     </p>
   */
  OutpostId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Outpost.</p>
   */
  OutpostArn?: string;
}

export interface GetSiteInput {
  /**
   * <p>
   *       The ID or the Amazon Resource Name (ARN) of the site.
   *     </p>
   */
  SiteId: string | undefined;
}

export interface GetSiteOutput {
  /**
   * <p>Information about a site.</p>
   */
  Site?: Site;
}

export interface GetSiteAddressInput {
  /**
   * <p>
   *       The ID or the Amazon Resource Name (ARN) of the site.
   *     </p>
   */
  SiteId: string | undefined;

  /**
   * <p>The type of the address you request. </p>
   */
  AddressType: AddressType | string | undefined;
}

export interface GetSiteAddressOutput {
  /**
   * <p>The ID of the site.</p>
   */
  SiteId?: string;

  /**
   * <p>The type of the address you receive. </p>
   */
  AddressType?: AddressType | string;

  /**
   * <p>
   *       Information about the address.
   *     </p>
   */
  Address?: Address;
}

export interface ListAssetsInput {
  /**
   * <p>
   *       The ID or the Amazon Resource Name (ARN) of the Outpost.
   *     </p>
   */
  OutpostIdentifier: string | undefined;

  /**
   * <p>Filters the results by the host ID of a Dedicated Host.</p>
   */
  HostIdFilter?: string[];

  /**
   * <p>The maximum page size.</p>
   */
  MaxResults?: number;

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>Filters the results by state.</p>
   */
  StatusFilter?: (AssetState | string)[];
}

export interface ListAssetsOutput {
  /**
   * <p>Information about the hardware assets.</p>
   */
  Assets?: AssetInfo[];

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}

export interface ListCatalogItemsInput {
  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum page size.</p>
   */
  MaxResults?: number;

  /**
   * <p>Filters the results by item class.</p>
   */
  ItemClassFilter?: (CatalogItemClass | string)[];

  /**
   * <p>Filters the results by storage option.</p>
   */
  SupportedStorageFilter?: (SupportedStorageEnum | string)[];

  /**
   * <p>Filters the results by EC2 family (for example, M5).</p>
   */
  EC2FamilyFilter?: string[];
}

export interface ListCatalogItemsOutput {
  /**
   * <p>Information about the catalog items.</p>
   */
  CatalogItems?: CatalogItem[];

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}

export interface ListOrdersInput {
  /**
   * <p>
   *       The ID or the Amazon Resource Name (ARN) of the Outpost.
   *     </p>
   */
  OutpostIdentifierFilter?: string;

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum page size.</p>
   */
  MaxResults?: number;
}

export enum OrderType {
  OUTPOST = "OUTPOST",
  REPLACEMENT = "REPLACEMENT",
}

/**
 * <p>
 *       A summary of line items in your order.
 *     </p>
 */
export interface OrderSummary {
  /**
   * <p>
   *       The ID of the Outpost.
   *     </p>
   */
  OutpostId?: string;

  /**
   * <p>
   *       The ID of the order.
   *     </p>
   */
  OrderId?: string;

  /**
   * <p>
   *       The type of order.
   *     </p>
   */
  OrderType?: OrderType | string;

  /**
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
   * <p>
   *       The status of all line items in the order.
   *     </p>
   */
  LineItemCountsByStatus?: Record<string, number>;

  /**
   * <p>
   *       The submission date for the order.
   *     </p>
   */
  OrderSubmissionDate?: Date;

  /**
   * <p>
   *       The fulfilment date for the order.
   *     </p>
   */
  OrderFulfilledDate?: Date;
}

export interface ListOrdersOutput {
  /**
   * <p>
   *       Information about the orders.
   *     </p>
   */
  Orders?: OrderSummary[];

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}

export interface ListOutpostsInput {
  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum page size.</p>
   */
  MaxResults?: number;

  /**
   * <p>Filters the results by the lifecycle status.</p>
   */
  LifeCycleStatusFilter?: string[];

  /**
   * <p>Filters the results by Availability Zone (for example, <code>us-east-1a</code>).</p>
   */
  AvailabilityZoneFilter?: string[];

  /**
   * <p>Filters the results by AZ ID (for example, <code>use1-az1</code>).</p>
   */
  AvailabilityZoneIdFilter?: string[];
}

export interface ListOutpostsOutput {
  /**
   * <p>Information about the Outposts.</p>
   */
  Outposts?: Outpost[];

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}

export interface ListSitesInput {
  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum page size.</p>
   */
  MaxResults?: number;

  /**
   * <p>Filters the results by country code.</p>
   */
  OperatingAddressCountryCodeFilter?: string[];

  /**
   * <p>Filters the results by state or region.</p>
   */
  OperatingAddressStateOrRegionFilter?: string[];

  /**
   * <p>Filters the results by city.</p>
   */
  OperatingAddressCityFilter?: string[];
}

export interface ListSitesOutput {
  /**
   * <p>Information about the sites.</p>
   */
  Sites?: Site[];

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  ResourceArn: string | undefined;
}

export interface ListTagsForResourceResponse {
  /**
   * <p>The resource tags.</p>
   */
  Tags?: Record<string, string>;
}

export interface StartConnectionRequest {
  /**
   * <p>
   *       The serial number of the dongle.
   *     </p>
   */
  DeviceSerialNumber: string | undefined;

  /**
   * <p>
   *       The ID of the Outpost server.
   *     </p>
   */
  AssetId: string | undefined;

  /**
   * <p>
   *       The public key of the client.
   *     </p>
   */
  ClientPublicKey: string | undefined;

  /**
   * <p>
   *       The device index of the network interface on the Outpost server.
   *     </p>
   */
  NetworkInterfaceDeviceIndex: number | undefined;
}

export interface StartConnectionResponse {
  /**
   * <p>
   *       The ID of the connection.
   *     </p>
   */
  ConnectionId?: string;

  /**
   * <p>
   *       The underlay IP address.
   *     </p>
   */
  UnderlayIpAddress?: string;
}

export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tags to add to the resource.</p>
   */
  Tags: Record<string, string> | undefined;
}

export interface TagResourceResponse {}

export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tag keys.</p>
   */
  TagKeys: string[] | undefined;
}

export interface UntagResourceResponse {}

export interface UpdateOutpostInput {
  /**
   * <p>
   *       The ID or the Amazon Resource Name (ARN) of the Outpost.
   *     </p>
   */
  OutpostId: string | undefined;

  /**
   * <p>The name of the Outpost.</p>
   */
  Name?: string;

  /**
   * <p>The description of the Outpost.</p>
   */
  Description?: string;

  /**
   * <p>
   *       The type of hardware for this Outpost.
   *     </p>
   */
  SupportedHardwareType?: SupportedHardwareType | string;
}

export interface UpdateOutpostOutput {
  /**
   * <p>Information about an Outpost.</p>
   */
  Outpost?: Outpost;
}

export interface UpdateSiteInput {
  /**
   * <p>
   *       The ID or the Amazon Resource Name (ARN) of the site.
   *     </p>
   */
  SiteId: string | undefined;

  /**
   * <p>The name of the site.</p>
   */
  Name?: string;

  /**
   * <p>The description of the site.</p>
   */
  Description?: string;

  /**
   * <p>Notes about a site.</p>
   */
  Notes?: string;
}

export interface UpdateSiteOutput {
  /**
   * <p>Information about a site.</p>
   */
  Site?: Site;
}

export interface UpdateSiteAddressInput {
  /**
   * <p>
   *       The ID or the Amazon Resource Name (ARN) of the site.
   *     </p>
   */
  SiteId: string | undefined;

  /**
   * <p>
   *       The type of the address.
   *     </p>
   */
  AddressType: AddressType | string | undefined;

  /**
   * <p>
   *       The address for the site.
   *     </p>
   */
  Address: Address | undefined;
}

export interface UpdateSiteAddressOutput {
  /**
   * <p>
   *       The type of the address.
   *     </p>
   */
  AddressType?: AddressType | string;

  /**
   * <p>
   *       Information about an address.
   *     </p>
   */
  Address?: Address;
}

export interface UpdateSiteRackPhysicalPropertiesInput {
  /**
   * <p>
   *       The ID or the Amazon Resource Name (ARN) of the site.
   *     </p>
   */
  SiteId: string | undefined;

  /**
   * <p>The power draw, in kVA, available at the hardware placement position for the
   *       rack.</p>
   */
  PowerDrawKva?: PowerDrawKva | string;

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
   */
  PowerPhase?: PowerPhase | string;

  /**
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
   * <p>Indicates whether the power feed comes above or below the rack. </p>
   */
  PowerFeedDrop?: PowerFeedDrop | string;

  /**
   * <p>The uplink speed the rack should support for the connection to the Region.
   *     </p>
   */
  UplinkGbps?: UplinkGbps | string;

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
   */
  UplinkCount?: UplinkCount | string;

  /**
   * <p>The type of fiber that you will use to attach the Outpost to your network.
   *     </p>
   */
  FiberOpticCableType?: FiberOpticCableType | string;

  /**
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
   * <p>The maximum rack weight that this site can support. <code>NO_LIMIT</code> is over
   *       2000lbs. </p>
   */
  MaximumSupportedWeightLbs?: MaximumSupportedWeightLbs | string;
}

export interface UpdateSiteRackPhysicalPropertiesOutput {
  /**
   * <p>Information about a site.</p>
   */
  Site?: Site;
}

/**
 * @internal
 */
export const AddressFilterSensitiveLog = (obj: Address): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssetLocationFilterSensitiveLog = (obj: AssetLocation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ComputeAttributesFilterSensitiveLog = (obj: ComputeAttributes): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssetInfoFilterSensitiveLog = (obj: AssetInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CancelOrderInputFilterSensitiveLog = (obj: CancelOrderInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CancelOrderOutputFilterSensitiveLog = (obj: CancelOrderOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EC2CapacityFilterSensitiveLog = (obj: EC2Capacity): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CatalogItemFilterSensitiveLog = (obj: CatalogItem): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConnectionDetailsFilterSensitiveLog = (obj: ConnectionDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LineItemRequestFilterSensitiveLog = (obj: LineItemRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateOrderInputFilterSensitiveLog = (obj: CreateOrderInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LineItemAssetInformationFilterSensitiveLog = (obj: LineItemAssetInformation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ShipmentInformationFilterSensitiveLog = (obj: ShipmentInformation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LineItemFilterSensitiveLog = (obj: LineItem): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OrderFilterSensitiveLog = (obj: Order): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateOrderOutputFilterSensitiveLog = (obj: CreateOrderOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateOutpostInputFilterSensitiveLog = (obj: CreateOutpostInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OutpostFilterSensitiveLog = (obj: Outpost): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateOutpostOutputFilterSensitiveLog = (obj: CreateOutpostOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RackPhysicalPropertiesFilterSensitiveLog = (obj: RackPhysicalProperties): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateSiteInputFilterSensitiveLog = (obj: CreateSiteInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SiteFilterSensitiveLog = (obj: Site): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateSiteOutputFilterSensitiveLog = (obj: CreateSiteOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteOutpostInputFilterSensitiveLog = (obj: DeleteOutpostInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteOutpostOutputFilterSensitiveLog = (obj: DeleteOutpostOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteSiteInputFilterSensitiveLog = (obj: DeleteSiteInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteSiteOutputFilterSensitiveLog = (obj: DeleteSiteOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetCatalogItemInputFilterSensitiveLog = (obj: GetCatalogItemInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetCatalogItemOutputFilterSensitiveLog = (obj: GetCatalogItemOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetConnectionRequestFilterSensitiveLog = (obj: GetConnectionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetConnectionResponseFilterSensitiveLog = (obj: GetConnectionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetOrderInputFilterSensitiveLog = (obj: GetOrderInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetOrderOutputFilterSensitiveLog = (obj: GetOrderOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetOutpostInputFilterSensitiveLog = (obj: GetOutpostInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetOutpostOutputFilterSensitiveLog = (obj: GetOutpostOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetOutpostInstanceTypesInputFilterSensitiveLog = (obj: GetOutpostInstanceTypesInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InstanceTypeItemFilterSensitiveLog = (obj: InstanceTypeItem): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetOutpostInstanceTypesOutputFilterSensitiveLog = (obj: GetOutpostInstanceTypesOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetSiteInputFilterSensitiveLog = (obj: GetSiteInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetSiteOutputFilterSensitiveLog = (obj: GetSiteOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetSiteAddressInputFilterSensitiveLog = (obj: GetSiteAddressInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetSiteAddressOutputFilterSensitiveLog = (obj: GetSiteAddressOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAssetsInputFilterSensitiveLog = (obj: ListAssetsInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAssetsOutputFilterSensitiveLog = (obj: ListAssetsOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListCatalogItemsInputFilterSensitiveLog = (obj: ListCatalogItemsInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListCatalogItemsOutputFilterSensitiveLog = (obj: ListCatalogItemsOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListOrdersInputFilterSensitiveLog = (obj: ListOrdersInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OrderSummaryFilterSensitiveLog = (obj: OrderSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListOrdersOutputFilterSensitiveLog = (obj: ListOrdersOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListOutpostsInputFilterSensitiveLog = (obj: ListOutpostsInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListOutpostsOutputFilterSensitiveLog = (obj: ListOutpostsOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListSitesInputFilterSensitiveLog = (obj: ListSitesInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListSitesOutputFilterSensitiveLog = (obj: ListSitesOutput): any => ({
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
export const StartConnectionRequestFilterSensitiveLog = (obj: StartConnectionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartConnectionResponseFilterSensitiveLog = (obj: StartConnectionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceRequestFilterSensitiveLog = (obj: TagResourceRequest): any => ({
  ...obj,
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
export const UpdateOutpostInputFilterSensitiveLog = (obj: UpdateOutpostInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateOutpostOutputFilterSensitiveLog = (obj: UpdateOutpostOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateSiteInputFilterSensitiveLog = (obj: UpdateSiteInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateSiteOutputFilterSensitiveLog = (obj: UpdateSiteOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateSiteAddressInputFilterSensitiveLog = (obj: UpdateSiteAddressInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateSiteAddressOutputFilterSensitiveLog = (obj: UpdateSiteAddressOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateSiteRackPhysicalPropertiesInputFilterSensitiveLog = (
  obj: UpdateSiteRackPhysicalPropertiesInput
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateSiteRackPhysicalPropertiesOutputFilterSensitiveLog = (
  obj: UpdateSiteRackPhysicalPropertiesOutput
): any => ({
  ...obj,
});
