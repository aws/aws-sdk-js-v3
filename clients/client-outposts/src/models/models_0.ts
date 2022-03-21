import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

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

export namespace Address {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Address): any => ({
    ...obj,
  });
}

export enum AddressType {
  OPERATING_ADDRESS = "OPERATING_ADDRESS",
  SHIPPING_ADDRESS = "SHIPPING_ADDRESS",
}

export interface CancelOrderInput {
  /**
   * <p>
   *       The ID of the order to cancel.
   *     </p>
   */
  OrderId: string | undefined;
}

export namespace CancelOrderInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelOrderInput): any => ({
    ...obj,
  });
}

export interface CancelOrderOutput {}

export namespace CancelOrderOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelOrderOutput): any => ({
    ...obj,
  });
}

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

export namespace EC2Capacity {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EC2Capacity): any => ({
    ...obj,
  });
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

export namespace CatalogItem {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CatalogItem): any => ({
    ...obj,
  });
}

export enum CatalogItemClass {
  RACK = "RACK",
  SERVER = "SERVER",
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

export namespace LineItemRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LineItemRequest): any => ({
    ...obj,
  });
}

export enum PaymentOption {
  ALL_UPFRONT = "ALL_UPFRONT",
  NO_UPFRONT = "NO_UPFRONT",
  PARTIAL_UPFRONT = "PARTIAL_UPFRONT",
}

export enum PaymentTerm {
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
   * <p>The payment option for the order.</p>
   */
  PaymentOption: PaymentOption | string | undefined;

  /**
   * <p>The payment terms for the order.</p>
   */
  PaymentTerm?: PaymentTerm | string;
}

export namespace CreateOrderInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateOrderInput): any => ({
    ...obj,
  });
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
}

export namespace LineItem {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LineItem): any => ({
    ...obj,
  });
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
   *           details, see the <code>LineItem</code> status.</p>
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
   *
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
}

export namespace Order {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Order): any => ({
    ...obj,
  });
}

export interface CreateOrderOutput {
  /**
   * <p>Information about this order.</p>
   */
  Order?: Order;
}

export namespace CreateOrderOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateOrderOutput): any => ({
    ...obj,
  });
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
  Tags?: { [key: string]: string };

  /**
   * <p>
   *       The type of hardware for this Outpost.
   *     </p>
   */
  SupportedHardwareType?: SupportedHardwareType | string;
}

export namespace CreateOutpostInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateOutpostInput): any => ({
    ...obj,
  });
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
   * <p>
   *       The ID of the site.
   *     </p>
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
  Tags?: { [key: string]: string };

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

export namespace Outpost {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Outpost): any => ({
    ...obj,
  });
}

export interface CreateOutpostOutput {
  /**
   * <p>Information about an Outpost.</p>
   */
  Outpost?: Outpost;
}

export namespace CreateOutpostOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateOutpostOutput): any => ({
    ...obj,
  });
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

export namespace RackPhysicalProperties {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RackPhysicalProperties): any => ({
    ...obj,
  });
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
  Tags?: { [key: string]: string };

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

export namespace CreateSiteInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateSiteInput): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a site.</p>
 */
export interface Site {
  /**
   * <p>
   *       The ID of the site.
   *     </p>
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
  Tags?: { [key: string]: string };

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

export namespace Site {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Site): any => ({
    ...obj,
  });
}

export interface CreateSiteOutput {
  /**
   * <p>Information about a site.</p>
   */
  Site?: Site;
}

export namespace CreateSiteOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateSiteOutput): any => ({
    ...obj,
  });
}

export interface DeleteOutpostInput {
  /**
   * <p>
   *       The ID or the Amazon Resource Name (ARN) of the Outpost.
   *     </p>
   */
  OutpostId: string | undefined;
}

export namespace DeleteOutpostInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteOutpostInput): any => ({
    ...obj,
  });
}

export interface DeleteOutpostOutput {}

export namespace DeleteOutpostOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteOutpostOutput): any => ({
    ...obj,
  });
}

export interface DeleteSiteInput {
  /**
   * <p>
   *       The ID or the Amazon Resource Name (ARN) of the site.
   *     </p>
   */
  SiteId: string | undefined;
}

export namespace DeleteSiteInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteSiteInput): any => ({
    ...obj,
  });
}

export interface DeleteSiteOutput {}

export namespace DeleteSiteOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteSiteOutput): any => ({
    ...obj,
  });
}

export interface GetCatalogItemInput {
  /**
   * <p>The ID of the catalog item.</p>
   */
  CatalogItemId: string | undefined;
}

export namespace GetCatalogItemInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetCatalogItemInput): any => ({
    ...obj,
  });
}

export interface GetCatalogItemOutput {
  /**
   * <p>Information about this catalog item.</p>
   */
  CatalogItem?: CatalogItem;
}

export namespace GetCatalogItemOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetCatalogItemOutput): any => ({
    ...obj,
  });
}

export interface GetOrderInput {
  /**
   * <p>The ID of the order.</p>
   */
  OrderId: string | undefined;
}

export namespace GetOrderInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetOrderInput): any => ({
    ...obj,
  });
}

export interface GetOrderOutput {
  /**
   * <p>Information about an order.</p>
   */
  Order?: Order;
}

export namespace GetOrderOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetOrderOutput): any => ({
    ...obj,
  });
}

export interface GetOutpostInput {
  /**
   * <p>
   *       The ID or the Amazon Resource Name (ARN) of the Outpost.
   *     </p>
   */
  OutpostId: string | undefined;
}

export namespace GetOutpostInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetOutpostInput): any => ({
    ...obj,
  });
}

export interface GetOutpostOutput {
  /**
   * <p>Information about an Outpost.</p>
   */
  Outpost?: Outpost;
}

export namespace GetOutpostOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetOutpostOutput): any => ({
    ...obj,
  });
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

export namespace GetOutpostInstanceTypesInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetOutpostInstanceTypesInput): any => ({
    ...obj,
  });
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

export namespace InstanceTypeItem {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InstanceTypeItem): any => ({
    ...obj,
  });
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

export namespace GetOutpostInstanceTypesOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetOutpostInstanceTypesOutput): any => ({
    ...obj,
  });
}

export interface GetSiteInput {
  /**
   * <p>
   *       The ID or the Amazon Resource Name (ARN) of the site.
   *     </p>
   */
  SiteId: string | undefined;
}

export namespace GetSiteInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSiteInput): any => ({
    ...obj,
  });
}

export interface GetSiteOutput {
  /**
   * <p>Information about a site.</p>
   */
  Site?: Site;
}

export namespace GetSiteOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSiteOutput): any => ({
    ...obj,
  });
}

export interface GetSiteAddressInput {
  /**
   * <p>
   *       The ID or the Amazon Resource Name (ARN) of the site.
   *     </p>
   */
  SiteId: string | undefined;

  /**
   * <p> The type of the address you request. </p>
   */
  AddressType: AddressType | string | undefined;
}

export namespace GetSiteAddressInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSiteAddressInput): any => ({
    ...obj,
  });
}

export interface GetSiteAddressOutput {
  /**
   * <p>
   *       The ID of the site.
   *     </p>
   */
  SiteId?: string;

  /**
   * <p> The type of the address you receive. </p>
   */
  AddressType?: AddressType | string;

  /**
   * <p>
   *       Information about the address.
   *     </p>
   */
  Address?: Address;
}

export namespace GetSiteAddressOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSiteAddressOutput): any => ({
    ...obj,
  });
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
   * <p>
   *       A filter for the class of items in the catalog.
   *     </p>
   *          <p>Filter values are case sensitive. If you specify multiple
   *          values for a filter, the values are joined with an <code>OR</code>, and the request returns
   *          all results that match any of the specified values.</p>
   */
  ItemClassFilter?: (CatalogItemClass | string)[];

  /**
   * <p>
   *       A filter for the storage options of items in the catalog.
   *     </p>
   *          <p>Filter values are case sensitive. If you specify multiple
   *          values for a filter, the values are joined with an <code>OR</code>, and the request returns
   *          all results that match any of the specified values.</p>
   */
  SupportedStorageFilter?: (SupportedStorageEnum | string)[];

  /**
   * <p>
   *       A filter for EC2 family options for items in the catalog.
   *     </p>
   *          <p>Filter values are case sensitive. If you specify multiple
   *          values for a filter, the values are joined with an <code>OR</code>, and the request returns
   *          all results that match any of the specified values.</p>
   */
  EC2FamilyFilter?: string[];
}

export namespace ListCatalogItemsInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListCatalogItemsInput): any => ({
    ...obj,
  });
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

export namespace ListCatalogItemsOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListCatalogItemsOutput): any => ({
    ...obj,
  });
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

export namespace ListOrdersInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListOrdersInput): any => ({
    ...obj,
  });
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
   *
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
  LineItemCountsByStatus?: { [key: string]: number };

  /**
   * <p>
   *       Submission date for the order.
   *     </p>
   */
  OrderSubmissionDate?: Date;

  /**
   * <p>
   *       Fulfilment date for the order.
   *     </p>
   */
  OrderFulfilledDate?: Date;
}

export namespace OrderSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OrderSummary): any => ({
    ...obj,
  });
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

export namespace ListOrdersOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListOrdersOutput): any => ({
    ...obj,
  });
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
   * <p>
   *       A filter for the lifecycle status of the Outpost.
   *     </p>
   *          <p>Filter values are case sensitive. If you specify multiple
   *          values for a filter, the values are joined with an <code>OR</code>, and the request returns
   *          all results that match any of the specified values.</p>
   */
  LifeCycleStatusFilter?: string[];

  /**
   * <p> A filter for the Availability Zone (<code>us-east-1a</code>) of the Outpost. </p>
   *
   *          <p>Filter values are case sensitive. If you specify multiple
   *          values for a filter, the values are joined with an <code>OR</code>, and the request returns
   *          all results that match any of the specified values.</p>
   */
  AvailabilityZoneFilter?: string[];

  /**
   * <p>
   *       A filter for the AZ IDs (<code>use1-az1</code>) of the Outpost.
   *     </p>
   *
   *          <p>Filter values are case sensitive. If you specify multiple
   *          values for a filter, the values are joined with an <code>OR</code>, and the request returns
   *          all results that match any of the specified values.</p>
   */
  AvailabilityZoneIdFilter?: string[];
}

export namespace ListOutpostsInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListOutpostsInput): any => ({
    ...obj,
  });
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

export namespace ListOutpostsOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListOutpostsOutput): any => ({
    ...obj,
  });
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
   * <p> A filter for the country code of the Outpost site. </p>
   *          <p>Filter values are case sensitive. If you specify multiple
   *          values for a filter, the values are joined with an <code>OR</code>, and the request returns
   *          all results that match any of the specified values.</p>
   */
  OperatingAddressCountryCodeFilter?: string[];

  /**
   * <p> A filter for the state/region of the Outpost site. </p>
   *          <p>Filter values are case sensitive. If you specify multiple
   *          values for a filter, the values are joined with an <code>OR</code>, and the request returns
   *          all results that match any of the specified values.</p>
   */
  OperatingAddressStateOrRegionFilter?: string[];

  /**
   * <p>
   *       A filter for the city of the Outpost site.
   *     </p>
   *          <p>Filter values are case sensitive. If you specify multiple
   *          values for a filter, the values are joined with an <code>OR</code>, and the request returns
   *          all results that match any of the specified values.</p>
   */
  OperatingAddressCityFilter?: string[];
}

export namespace ListSitesInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListSitesInput): any => ({
    ...obj,
  });
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

export namespace ListSitesOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListSitesOutput): any => ({
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
   * <p>The resource tags.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace ListTagsForResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
}

export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tags to add to the resource.</p>
   */
  Tags: { [key: string]: string } | undefined;
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
   * <p>The tag keys.</p>
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

export namespace UpdateOutpostInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateOutpostInput): any => ({
    ...obj,
  });
}

export interface UpdateOutpostOutput {
  /**
   * <p>Information about an Outpost.</p>
   */
  Outpost?: Outpost;
}

export namespace UpdateOutpostOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateOutpostOutput): any => ({
    ...obj,
  });
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
   * <p>
   *       Notes about a site.
   *     </p>
   */
  Notes?: string;
}

export namespace UpdateSiteInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateSiteInput): any => ({
    ...obj,
  });
}

export interface UpdateSiteOutput {
  /**
   * <p>Information about a site.</p>
   */
  Site?: Site;
}

export namespace UpdateSiteOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateSiteOutput): any => ({
    ...obj,
  });
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

export namespace UpdateSiteAddressInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateSiteAddressInput): any => ({
    ...obj,
  });
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

export namespace UpdateSiteAddressOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateSiteAddressOutput): any => ({
    ...obj,
  });
}

export interface UpdateSiteRackPhysicalPropertiesInput {
  /**
   * <p>
   *       The ID or the Amazon Resource Name (ARN) of the site.
   *     </p>
   */
  SiteId: string | undefined;

  /**
   * <p>Specify in kVA the power draw available at the hardware placement position for the
   *       rack.</p>
   */
  PowerDrawKva?: PowerDrawKva | string;

  /**
   * <p> Specify the power option that you can provide for hardware. </p>
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
   * <p> Specify the power connector that Amazon Web Services should plan to provide for connections to the
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
   * <p> Specify whether the power feed comes above or below the rack. </p>
   */
  PowerFeedDrop?: PowerFeedDrop | string;

  /**
   * <p> Specify the uplink speed the rack should support for the connection to the Region.
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
   * <p> Specify the type of fiber that you will use to attach the Outpost to your network.
   *     </p>
   */
  FiberOpticCableType?: FiberOpticCableType | string;

  /**
   * <p>Specify the type of optical standard that you will use to attach the Outpost to your
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
   * <p> Specify the maximum rack weight that this site can support. <code>NO_LIMIT</code> is over
   *       2000lbs. </p>
   */
  MaximumSupportedWeightLbs?: MaximumSupportedWeightLbs | string;
}

export namespace UpdateSiteRackPhysicalPropertiesInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateSiteRackPhysicalPropertiesInput): any => ({
    ...obj,
  });
}

export interface UpdateSiteRackPhysicalPropertiesOutput {
  /**
   * <p>Information about a site.</p>
   */
  Site?: Site;
}

export namespace UpdateSiteRackPhysicalPropertiesOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateSiteRackPhysicalPropertiesOutput): any => ({
    ...obj,
  });
}
