// smithy-typescript generated code
import type {
  AddressType,
  AssetState,
  AssetType,
  AWSServiceName,
  BlockingResourceType,
  CapacityTaskFailureType,
  CapacityTaskStatus,
  CatalogItemClass,
  CatalogItemStatus,
  ComputeAssetState,
  CurrencyCode,
  DecommissionRequestStatus,
  FiberOpticCableType,
  FormFactor,
  LineItemStatus,
  MaximumSupportedWeightLbs,
  OpticalStandard,
  OrderingRequirementStatus,
  OrderingRequirementType,
  OrderStatus,
  OrderType,
  OutpostGeneration,
  PaymentOption,
  PaymentTerm,
  PowerConnector,
  PowerDrawKva,
  PowerFeedDrop,
  PowerPhase,
  PricingResult,
  QuoteCapacityType,
  QuoteConstraintType,
  QuotePricingType,
  QuoteRackUseType,
  QuoteSpecificationType,
  QuoteStatus,
  RackUnitHeight,
  ShipmentCarrier,
  SubscriptionStatus,
  SubscriptionType,
  SupportedHardwareType,
  SupportedStorageEnum,
  TaskActionOnBlockingInstances,
  UplinkCount,
  UplinkGbps,
} from "./enums";

/**
 * <p> Information about an address. </p>
 * @public
 */
export interface Address {
  /**
   * <p>The name of the contact.</p>
   * @public
   */
  ContactName: string | undefined;

  /**
   * <p>The phone number of the contact.</p>
   * @public
   */
  ContactPhoneNumber: string | undefined;

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
   *             <li>
   *                <p>INSTALLING - The asset is being installed and can't yet provide capacity for new compute
   *           resources.</p>
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
   * <p> The ID of the asset. An Outpost asset can be a single server within an Outposts rack or
   *       an Outposts server configuration.</p>
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
   * <p>The ID of the asset. An Outpost asset can be a single server within an Outposts rack or an
   *       Outposts server configuration.</p>
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
 * <p>A capacity requirement for a quote. Specifies the type of capacity, the unit, and the
 *       quantity.</p>
 * @public
 */
export interface QuoteCapacity {
  /**
   * <p>The type of capacity. Valid values are <code>EC2</code>, <code>EBS</code>, and
   *       <code>S3</code>.</p>
   * @public
   */
  QuoteCapacityType?: QuoteCapacityType | undefined;

  /**
   * <p>The unit of measurement for the capacity. For Amazon EC2, this is the instance type (for
   *       example, <code>c5.24xlarge</code>). For Amazon EBS and Amazon S3, this is the storage unit (for
   *       example, <code>TiB</code> for tebibytes).</p>
   * @public
   */
  Unit?: string | undefined;

  /**
   * <p>The quantity of the specified capacity unit. For Amazon EC2, this is the number of
   *       additional instances to add to the Outpost. For Amazon EBS and Amazon S3, this is the total
   *       desired end-state capacity of the Outpost.</p>
   * @public
   */
  Quantity?: number | undefined;
}

/**
 * <p>A summary of the capacity changes for a quote option.</p>
 * @public
 */
export interface CapacitySummary {
  /**
   * <p>The existing capacities on the Outpost before the quote is fulfilled.</p>
   * @public
   */
  ExistingCapacities?: QuoteCapacity[] | undefined;

  /**
   * <p>The final capacities on the Outpost after the quote is fulfilled.</p>
   * @public
   */
  FinalCapacities?: QuoteCapacity[] | undefined;

  /**
   * <p>The change in capacity between the existing and final state.</p>
   * @public
   */
  CapacityChange?: QuoteCapacity[] | undefined;
}

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
   * <p>The ID of the asset. An Outpost asset can be a single server within an Outposts rack or an
   *       Outposts server configuration.</p>
   * @public
   */
  AssetId?: string | undefined;

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
  LineItems?: LineItemRequest[] | undefined;

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
   * <p> The ID of the asset. An Outpost asset can be a single server within an Outposts rack or
   *       an Outposts server configuration.</p>
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
 * <p>A physical constraint for a quote.</p>
 * @public
 */
export interface QuoteConstraint {
  /**
   * <p>The type of constraint. Valid values are <code>RACK_MAXIMUM</code>,
   *       <code>RACK_MAX_POWER_KVA</code>, and <code>RACK_MAX_WEIGHT_LBS</code>.</p>
   * @public
   */
  QuoteConstraintType?: QuoteConstraintType | undefined;

  /**
   * <p>The value of the constraint.</p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * @public
 */
export interface CreateQuoteInput {
  /**
   * <p>The ID or ARN of the Outpost to associate with the quote. If not specified, the quote is
   *       created without an Outpost association.</p>
   * @public
   */
  OutpostIdentifier?: string | undefined;

  /**
   * <p>The country code for the Outpost site location.</p>
   * @public
   */
  CountryCode: string | undefined;

  /**
   * <p>The capacity requirements for the quote. Each entry specifies a capacity type (such as
   *       Amazon EC2), the unit, and the quantity. For Amazon EC2, the quantity is the number of additional
   *       instances to add to the Outpost. For Amazon EBS and Amazon S3, the quantity is the total desired
   *       end-state capacity of the Outpost.</p>
   * @public
   */
  RequestedCapacities: QuoteCapacity[] | undefined;

  /**
   * <p>The physical constraints for the quote, such as maximum number of racks, maximum power
   *       draw per rack, or maximum weight per rack.</p>
   * @public
   */
  RequestedConstraints?: QuoteConstraint[] | undefined;

  /**
   * <p>The payment options to include in the quote pricing. If not specified, all available
   *       payment options are returned.</p>
   * @public
   */
  RequestedPaymentOptions?: PaymentOption[] | undefined;

  /**
   * <p>The payment terms to include in the quote pricing. If not specified, all available
   *       payment terms are returned.</p>
   * @public
   */
  RequestedPaymentTerms?: PaymentTerm[] | undefined;

  /**
   * <p>A description for the quote.</p>
   * @public
   */
  Description?: string | undefined;
}

/**
 * <p>A requirement that must be met before an order can be submitted for a quote.</p>
 * @public
 */
export interface OrderingRequirement {
  /**
   * <p>A message about the ordering requirement.</p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>The type of ordering requirement. Indicates which check failed or passed.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>OUTPOST_ACTIVE_CHECK_ERROR</code> - The Outpost must be in
   *           an active state.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MAXIMUM_ALLOWED_ORDERS_CHECK_ERROR</code> - The maximum
   *           number of allowed orders has been reached.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>VALID_ZIP_CODE_CHECK_ERROR</code> - The site address must
   *           have a valid zip code.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RACK_PHYSICAL_PROPERTIES_CHECK_ERROR</code> - The rack
   *           physical properties do not meet requirements.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OPERATING_ADDRESS_EXISTENCE_CHECK_ERROR</code> - The site
   *           must have an operating address.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SHIPPING_ADDRESS_EXISTENCE_CHECK_ERROR</code> - The site
   *           must have a shipping address.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>COUNTRY_CODE_MISMATCH_CHECK_ERROR</code> - The country
   *           code on the quote does not match the Outpost site country.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OUTPOST_GENERATION_MISMATCH_ERROR</code> - The Outpost generation
   *           does not match the requested configuration.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OUTPOST_ID_MISSING_ON_QUOTE_ERROR</code> - The quote must
   *           be associated with an Outpost before submitting an order.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ENTERPRISE_SUPPORT_ERROR</code> - Enterprise Support is
   *           required.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SHIPPING_ADDRESS_MISSING_CONTACT_NAME_ERROR</code> - The
   *           shipping address must have a contact name.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SHIPPING_ADDRESS_MISSING_CONTACT_NUMBER_ERROR</code> - The
   *           shipping address must have a contact phone number.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SHIPPING_ADDRESS_MISSING_CONTACT_INFO_ERROR</code> - The
   *           shipping address must have contact information.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OUTPOST_STATE_CHANGED_ERROR</code> - The Outpost state has
   *           changed since the quote was created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OUTPOST_NOT_FOUND_ERROR</code> - The Outpost associated
   *           with the quote was not found.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OUTPOST_RENEWAL_REQUIRED_ERROR</code> - The Outpost
   *           requires a renewal before a new order can be submitted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UNSUPPORTED</code> - The requirement type is not
   *           recognized.</p>
   *             </li>
   *          </ul>
   * @public
   */
  OrderingRequirementType?: OrderingRequirementType | undefined;

  /**
   * <p>The status of the ordering requirement. Valid values are <code>PASS</code>,
   *       <code>FAIL</code>, and <code>EXEMPT</code>.</p>
   * @public
   */
  Status?: OrderingRequirementStatus | undefined;
}

/**
 * <p>The pricing details for a subscription.</p>
 * @public
 */
export interface SubscriptionPricingDetails {
  /**
   * <p>The payment option.</p>
   * @public
   */
  PaymentOption?: PaymentOption | undefined;

  /**
   * <p>The payment term.</p>
   * @public
   */
  PaymentTerm?: PaymentTerm | undefined;

  /**
   * <p>The upfront price.</p>
   * @public
   */
  UpfrontPrice?: number | undefined;

  /**
   * <p>The monthly recurring price.</p>
   * @public
   */
  MonthlyRecurringPrice?: number | undefined;

  /**
   * <p>The currency of the price. Currently only <code>USD</code> is supported.</p>
   * @public
   */
  Currency?: CurrencyCode | undefined;
}

/**
 * <p>A pricing option for the specified Outpost.</p>
 * @public
 */
export interface PricingOption {
  /**
   * <p>The type of pricing model.</p>
   * @public
   */
  PricingType?: QuotePricingType | undefined;

  /**
   * <p>The subscription pricing details for this pricing option.</p>
   * @public
   */
  SubscriptionPricingDetails?: SubscriptionPricingDetails | undefined;
}

/**
 * <p>The physical specification details for a rack in a quote option.</p>
 * @public
 */
export interface RackSpecificationDetails {
  /**
   * <p>The ID of the rack.</p>
   * @public
   */
  RackId?: string | undefined;

  /**
   * <p>The use of the rack. Valid values are <code>COMPUTE</code> and
   *       <code>NETWORKING</code>.</p>
   * @public
   */
  RackUse?: QuoteRackUseType | undefined;

  /**
   * <p>The maximum power draw of the rack in kVA.</p>
   * @public
   */
  RackPowerDrawKva?: number | undefined;

  /**
   * <p>The weight of the rack in pounds.</p>
   * @public
   */
  RackWeightLbs?: number | undefined;

  /**
   * <p>The height of the rack in inches.</p>
   * @public
   */
  RackHeightInches?: number | undefined;

  /**
   * <p>The width of the rack in inches.</p>
   * @public
   */
  RackWidthInches?: number | undefined;

  /**
   * <p>The depth of the rack in inches.</p>
   * @public
   */
  RackDepthInches?: number | undefined;

  /**
   * <p>The rack unit height.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>HEIGHT_42U</code> - 42 rack units.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>HEIGHT_2U</code> - 2 rack units.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>HEIGHT_1U</code> - 1 rack unit.</p>
   *             </li>
   *          </ul>
   * @public
   */
  RackUnitHeight?: RackUnitHeight | undefined;

  /**
   * <p>The Amazon EC2 capacities for the rack.</p>
   * @public
   */
  EC2Capacities?: EC2Capacity[] | undefined;
}

/**
 * <p>The physical specification details for a server in a quote option.</p>
 * @public
 */
export interface ServerSpecificationDetails {
  /**
   * <p>The maximum power draw of the server in kVA.</p>
   * @public
   */
  ServerPowerDrawKva?: number | undefined;

  /**
   * <p>The weight of the server in pounds.</p>
   * @public
   */
  ServerWeightLbs?: number | undefined;

  /**
   * <p>The height of the server in inches.</p>
   * @public
   */
  ServerHeightInches?: number | undefined;

  /**
   * <p>The width of the server in inches.</p>
   * @public
   */
  ServerWidthInches?: number | undefined;

  /**
   * <p>The depth of the server in inches.</p>
   * @public
   */
  ServerDepthInches?: number | undefined;

  /**
   * <p>The rack unit height of the server.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>HEIGHT_2U</code> - 2 rack units.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>HEIGHT_1U</code> - 1 rack unit.</p>
   *             </li>
   *          </ul>
   * @public
   */
  RackUnitHeight?: RackUnitHeight | undefined;

  /**
   * <p>The Amazon EC2 capacities for the server.</p>
   * @public
   */
  EC2Capacities?: EC2Capacity[] | undefined;
}

/**
 * <p>A physical specification for a quote option. Describes the rack or server configuration
 *       that would be deployed.</p>
 * @public
 */
export interface QuoteSpecification {
  /**
   * <p>The type of specification. Valid values are <code>NEW_RACK</code>,
   *       <code>UPDATED_RACK</code>, <code>EXISTING_RACK</code>, and <code>SERVER</code>.</p>
   * @public
   */
  QuoteSpecificationType?: QuoteSpecificationType | undefined;

  /**
   * <p>The existing rack specification details, if the specification type is
   *       <code>UPDATED_RACK</code> or <code>EXISTING_RACK</code>.</p>
   * @public
   */
  ExistingRackSpecificationDetails?: RackSpecificationDetails | undefined;

  /**
   * <p>The final rack specification details after the quote is fulfilled.</p>
   * @public
   */
  FinalRackSpecificationDetails?: RackSpecificationDetails | undefined;

  /**
   * <p>The server specification details, if the specification type is
   *       <code>SERVER</code>.</p>
   * @public
   */
  ServerSpecificationDetails?: ServerSpecificationDetails | undefined;
}

/**
 * <p>A configuration and pricing option for a quote. Each option includes the capacity
 *       breakdown, physical specifications for the racks or servers, and pricing details.</p>
 * @public
 */
export interface QuoteOption {
  /**
   * <p>The ID of the quote option.</p>
   * @public
   */
  QuoteOptionIdentifier?: string | undefined;

  /**
   * <p>The capacities included in this quote option.</p>
   * @public
   */
  Capacities?: QuoteCapacity[] | undefined;

  /**
   * <p>A summary of the existing, final, and changed capacity for this quote option.</p>
   * @public
   */
  CapacitySummary?: CapacitySummary | undefined;

  /**
   * <p>The physical specifications for the racks or servers in this quote option.</p>
   * @public
   */
  Specifications?: QuoteSpecification[] | undefined;

  /**
   * <p>The pricing options for this quote option.</p>
   * @public
   */
  PricingOptions?: PricingOption[] | undefined;
}

/**
 * <p>Information about a quote for an Outpost. A quote provides pricing and configuration
 *       options based on the requested capacity.</p>
 * @public
 */
export interface Quote {
  /**
   * <p>The ID of the quote.</p>
   * @public
   */
  QuoteId?: string | undefined;

  /**
   * <p>The ID of the account that owns the quote.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The status of the quote.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CREATED</code> - The quote has been created and is
   *           available for review.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ORDER_SUBMITTED</code> - An order has been submitted for
   *           the quote.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>EXPIRED</code> - The quote has expired and can no longer
   *           be used to submit an order.</p>
   *             </li>
   *          </ul>
   * @public
   */
  QuoteStatus?: QuoteStatus | undefined;

  /**
   * <p>A message about the status of the quote.</p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>The ARN of the Outpost associated with the quote.</p>
   * @public
   */
  OutpostArn?: string | undefined;

  /**
   * <p>The country code for the Outpost site location.</p>
   * @public
   */
  CountryCode?: string | undefined;

  /**
   * <p>The capacity requirements specified in the quote request.</p>
   * @public
   */
  RequestedCapacities?: QuoteCapacity[] | undefined;

  /**
   * <p>The physical constraints specified in the quote request.</p>
   * @public
   */
  RequestedConstraints?: QuoteConstraint[] | undefined;

  /**
   * <p>The payment options specified in the quote request.</p>
   * @public
   */
  RequestedPaymentOptions?: PaymentOption[] | undefined;

  /**
   * <p>The payment terms specified in the quote request.</p>
   * @public
   */
  RequestedPaymentTerms?: PaymentTerm[] | undefined;

  /**
   * <p>The configuration and pricing options for the quote. Each option includes capacity
   *       details, physical specifications, and pricing information.</p>
   * @public
   */
  QuoteOptions?: QuoteOption[] | undefined;

  /**
   * <p>The requirements that must be met before an order can be submitted for the quote.</p>
   * @public
   */
  OrderingRequirements?: OrderingRequirement[] | undefined;

  /**
   * <p>The ID of the order submitted for the quote.</p>
   * @public
   */
  SubmittedOrderId?: string | undefined;

  /**
   * <p>The date the quote was created.</p>
   * @public
   */
  CreatedDate?: Date | undefined;

  /**
   * <p>The date the quote expires.</p>
   * @public
   */
  ExpirationDate?: Date | undefined;

  /**
   * <p>The description of the quote.</p>
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface CreateQuoteOutput {
  /**
   * <p>Information about the quote.</p>
   * @public
   */
  Quote?: Quote | undefined;
}

/**
 * @public
 */
export interface CreateRenewalInput {
  /**
   * <p>The payment option.</p>
   * @public
   */
  PaymentOption: PaymentOption | undefined;

  /**
   * <p>The payment term.</p>
   * @public
   */
  PaymentTerm: PaymentTerm | undefined;

  /**
   * <p>The ID or ARN of the Outpost.</p>
   * @public
   */
  OutpostIdentifier: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *       request.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateRenewalOutput {
  /**
   * <p>The payment option.</p>
   * @public
   */
  PaymentOption?: PaymentOption | undefined;

  /**
   * <p>The payment term.</p>
   * @public
   */
  PaymentTerm?: PaymentTerm | undefined;

  /**
   * <p>The ID of the Outpost.</p>
   * @public
   */
  OutpostId?: string | undefined;

  /**
   * <p>The upfront price of the renewal.</p>
   * @public
   */
  UpfrontPrice?: number | undefined;

  /**
   * <p>The monthly recurring price of the renewal.</p>
   * @public
   */
  MonthlyRecurringPrice?: number | undefined;

  /**
   * <p>The currency of the renewal price.</p>
   * @public
   */
  Currency?: CurrencyCode | undefined;
}

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
export interface DeleteQuoteInput {
  /**
   * <p>The ID or ARN of the quote.</p>
   * @public
   */
  QuoteIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteQuoteOutput {}

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
 * <p>A supported form factor and Outpost generation configuration for an instance type.</p>
 * @public
 */
export interface FormFactorConfig {
  /**
   * <p>The form factor. Valid values are <code>RACK</code> for rack-based Outposts and
   *       <code>SERVER</code> for server-based Outposts.</p>
   * @public
   */
  FormFactor?: FormFactor | undefined;

  /**
   * <p>The Outpost generation. Valid values are <code>GENERATION_1</code> for first-generation
   *       rack deployments and <code>GENERATION_2</code> for second-generation rack deployments. This
   *       value is not set for server form factors.</p>
   * @public
   */
  OutpostGeneration?: OutpostGeneration | undefined;
}

/**
 * <p>Information about an instance type that can be ordered for an Outpost, including
 *       hardware specifications and supported form factors.</p>
 * @public
 */
export interface DetailedInstanceTypeItem {
  /**
   * <p>The instance type.</p>
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * <p>The number of default VCPUs in the instance type.</p>
   * @public
   */
  VCPUs?: number | undefined;

  /**
   * <p>The memory size of the instance type, in MiB.</p>
   * @public
   */
  MemoryInMib?: number | undefined;

  /**
   * <p>The network performance of the instance type.</p>
   * @public
   */
  NetworkPerformance?: string | undefined;

  /**
   * <p>The supported form factor and Outpost generation configurations for the instance
   *       type.</p>
   * @public
   */
  FormFactorConfigs?: FormFactorConfig[] | undefined;
}

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
   * <p>The ID of the Outpost asset. An Outpost asset can be a single server within an Outposts
   *       rack or an Outposts server configuration.</p>
   * @public
   */
  AssetId?: string | undefined;

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
   *                   <code>FAILED</code> - The capacity task could not be completed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>COMPLETED</code> - The capacity task has completed successfully.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>WAITING_FOR_EVACUATION</code> - The capacity task requires capacity to run. You
   *           must stop the recommended EC2 running instances to free up capacity for the task to
   *           run.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CANCELLATION_IN_PROGRESS</code> - The capacity task has been cancelled and is in
   *           the process of cleaning up resources.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CANCELLED</code> - The capacity task is cancelled.</p>
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
   * <p>The ID or ARN of the Outpost.</p>
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
export interface GetOutpostBillingInformationInput {
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
   * <p>The ID or ARN of the Outpost.</p>
   * @public
   */
  OutpostIdentifier: string | undefined;
}

/**
 * <p>Provides information about your Amazon Web Services Outposts subscriptions.</p>
 * @public
 */
export interface Subscription {
  /**
   * <p>The ID of the subscription that appears on the Amazon Web Services Billing Center console.</p>
   * @public
   */
  SubscriptionId?: string | undefined;

  /**
   * <p>The type of subscription which can be one of the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>ORIGINAL</b> - The first order on the Amazon Web Services Outposts.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>RENEWAL</b> - Renewal requests, both month to month and
   *           longer term.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>CAPACITY_INCREASE</b> - Capacity scaling orders.</p>
   *             </li>
   *          </ul>
   * @public
   */
  SubscriptionType?: SubscriptionType | undefined;

  /**
   * <p>The status of subscription which can be one of the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>INACTIVE</b> - Subscription requests that are
   *           inactive.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>ACTIVE</b> - Subscription requests that are in progress
   *           and have an end date in the future.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>PENDING</b> - Subscription has been created but billing
   *           has not yet commenced because the subscription begin date has not been reached.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>CANCELLED</b> - Subscription requests that are
   *           cancelled.</p>
   *             </li>
   *          </ul>
   * @public
   */
  SubscriptionStatus?: SubscriptionStatus | undefined;

  /**
   * <p>The order ID for your subscription.</p>
   * @public
   */
  OrderIds?: string[] | undefined;

  /**
   * <p>The date your subscription starts.</p>
   * @public
   */
  BeginDate?: Date | undefined;

  /**
   * <p>The date your subscription ends.</p>
   * @public
   */
  EndDate?: Date | undefined;

  /**
   * <p>The currency of the subscription price. Currently only <code>USD</code> is
   *       supported.</p>
   * @public
   */
  Currency?: CurrencyCode | undefined;

  /**
   * <p>The amount you are billed each month in the subscription period.</p>
   * @public
   */
  MonthlyRecurringPrice?: number | undefined;

  /**
   * <p>The amount billed when the subscription is created. This is a one-time charge.</p>
   * @public
   */
  UpfrontPrice?: number | undefined;
}

/**
 * @public
 */
export interface GetOutpostBillingInformationOutput {
  /**
   * <p>The pagination token.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The subscription details for the specified Outpost.</p>
   * @public
   */
  Subscriptions?: Subscription[] | undefined;

  /**
   * <p>The date the current contract term ends for the specified Outpost. You must start the
   *       renewal or decommission process at least 5 business days before the current term for your
   *       Amazon Web Services Outposts ends. Failing to complete these steps at least 5 business days before the current term
   *       ends might result in unanticipated charges.</p>
   * @public
   */
  ContractEndDate?: string | undefined;

  /**
   * <p>The payment term.</p>
   * @public
   */
  PaymentTerm?: PaymentTerm | undefined;

  /**
   * <p>The payment option.</p>
   * @public
   */
  PaymentOption?: PaymentOption | undefined;
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
   * <p>The ID of the Outpost asset. An Outpost asset can be a single server within an Outposts
   *       rack or an Outposts server configuration.</p>
   * @public
   */
  AssetId?: string | undefined;

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
export interface GetQuoteInput {
  /**
   * <p>The ID or ARN of the quote.</p>
   * @public
   */
  QuoteIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetQuoteOutput {
  /**
   * <p>Information about the quote.</p>
   * @public
   */
  Quote?: Quote | undefined;
}

/**
 * @public
 */
export interface GetRenewalPricingInput {
  /**
   * <p>The ID or ARN of the Outpost.</p>
   * @public
   */
  OutpostIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetRenewalPricingOutput {
  /**
   * <p>The result of the pricing request.</p>
   * @public
   */
  PricingResult?: PricingResult | undefined;

  /**
   * <p>The pricing options for the specified Outpost.</p>
   * @public
   */
  PricingOptions?: PricingOption[] | undefined;
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

  /**
   * <p>Filters the results by asset type.</p>
   *          <ul>
   *             <li>
   *                <p>COMPUTE - Server asset used for customer compute </p>
   *             </li>
   *             <li>
   *                <p>STORAGE - Server asset used by storage services </p>
   *             </li>
   *             <li>
   *                <p>POWERSHELF - Powershelf assets </p>
   *             </li>
   *             <li>
   *                <p>SWITCH - Switch assets </p>
   *             </li>
   *             <li>
   *                <p>NETWORKING - Asset managed by Amazon Web Services for networking purposes </p>
   *             </li>
   *          </ul>
   * @public
   */
  AssetTypeFilter?: AssetType[] | undefined;
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
export interface ListOrderableInstanceTypesInput {
  /**
   * <p>Filters the results by Outpost generation. Specify <code>GENERATION_1</code> for
   *       first-generation rack deployments or <code>GENERATION_2</code> for second-generation rack
   *       deployments.</p>
   * @public
   */
  OutpostGenerationFilter?: OutpostGeneration | undefined;

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
export interface ListOrderableInstanceTypesOutput {
  /**
   * <p>Information about the instance types that can be ordered for the Outpost.</p>
   * @public
   */
  InstanceTypes?: DetailedInstanceTypeItem[] | undefined;

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
export interface ListQuotesInput {
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
 * <p>Summary information about a quote.</p>
 * @public
 */
export interface QuoteSummary {
  /**
   * <p>The ID of the quote.</p>
   * @public
   */
  QuoteId?: string | undefined;

  /**
   * <p>The ID of the account that owns the quote.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The status of the quote.</p>
   * @public
   */
  QuoteStatus?: QuoteStatus | undefined;

  /**
   * <p>A message about the status of the quote.</p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>The ARN of the Outpost associated with the quote.</p>
   * @public
   */
  OutpostArn?: string | undefined;

  /**
   * <p>The country code for the Outpost site location.</p>
   * @public
   */
  CountryCode?: string | undefined;

  /**
   * <p>The capacity requirements specified in the quote request.</p>
   * @public
   */
  RequestedCapacities?: QuoteCapacity[] | undefined;

  /**
   * <p>The physical constraints specified in the quote request.</p>
   * @public
   */
  RequestedConstraints?: QuoteConstraint[] | undefined;

  /**
   * <p>The payment options specified in the quote request.</p>
   * @public
   */
  RequestedPaymentOptions?: PaymentOption[] | undefined;

  /**
   * <p>The payment terms specified in the quote request.</p>
   * @public
   */
  RequestedPaymentTerms?: PaymentTerm[] | undefined;

  /**
   * <p>The configuration and pricing options for the quote.</p>
   * @public
   */
  QuoteOptions?: QuoteOption[] | undefined;

  /**
   * <p>The ID of the order submitted for the quote.</p>
   * @public
   */
  SubmittedOrderId?: string | undefined;

  /**
   * <p>The date the quote was created.</p>
   * @public
   */
  CreatedDate?: Date | undefined;

  /**
   * <p>The date the quote expires.</p>
   * @public
   */
  ExpirationDate?: Date | undefined;

  /**
   * <p>The description of the quote.</p>
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface ListQuotesOutput {
  /**
   * <p>Information about the quotes.</p>
   * @public
   */
  Quotes?: QuoteSummary[] | undefined;

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
   * <p>The ID of the Outpost asset. An Outpost asset can be a single server within an Outposts
   *       rack or an Outposts server configuration.</p>
   * @public
   */
  AssetId?: string | undefined;

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
   * <p>The ID of the asset. An Outpost asset can be a single server within an Outposts rack or an
   *       Outposts server configuration.</p>
   * @public
   */
  AssetId?: string | undefined;

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
   * <p> The ID of the Outpost server.</p>
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
export interface StartOutpostDecommissionInput {
  /**
   * <p>The ID or ARN of the Outpost that you want to decommission.</p>
   * @public
   */
  OutpostIdentifier: string | undefined;

  /**
   * <p>Validates the request without starting the decommission process.</p>
   * @public
   */
  ValidateOnly?: boolean | undefined;
}

/**
 * @public
 */
export interface StartOutpostDecommissionOutput {
  /**
   * <p>The status of the decommission request.</p>
   * @public
   */
  Status?: DecommissionRequestStatus | undefined;

  /**
   * <p>The resources still associated with the Outpost that you are decommissioning.</p>
   * @public
   */
  BlockingResourceTypes?: BlockingResourceType[] | undefined;
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
export interface UpdateQuoteInput {
  /**
   * <p>The ID or ARN of the quote.</p>
   * @public
   */
  QuoteIdentifier: string | undefined;

  /**
   * <p>The ID or ARN of the Outpost to associate with the quote. Specify an empty string to
   *       remove the Outpost association.</p>
   * @public
   */
  OutpostIdentifier?: string | undefined;

  /**
   * <p>The country code for the Outpost site location.</p>
   * @public
   */
  CountryCode?: string | undefined;

  /**
   * <p>The updated capacity requirements for the quote.</p>
   * @public
   */
  RequestedCapacities?: QuoteCapacity[] | undefined;

  /**
   * <p>The updated physical constraints for the quote.</p>
   * @public
   */
  RequestedConstraints?: QuoteConstraint[] | undefined;

  /**
   * <p>The updated payment options to include in the quote pricing.</p>
   * @public
   */
  RequestedPaymentOptions?: PaymentOption[] | undefined;

  /**
   * <p>The updated payment terms to include in the quote pricing.</p>
   * @public
   */
  RequestedPaymentTerms?: PaymentTerm[] | undefined;

  /**
   * <p>A description for the quote.</p>
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface UpdateQuoteOutput {
  /**
   * <p>Information about the updated quote.</p>
   * @public
   */
  Quote?: Quote | undefined;
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
   *                   <li>
   *                      <p>
   *                         <b>CS8365C</b> – (common in US); 3P+E, 50A; three
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
