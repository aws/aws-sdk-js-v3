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
  PrivateConnectivityStatus,
  QuoteCapacityType,
  QuoteConstraintType,
  QuotePricingType,
  QuoteRackUseType,
  QuoteSpecificationType,
  QuoteStatus,
  RackScalingType,
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
 * Information about an address.
 *
 * @public
 */
export interface Address {
  /**
   * The name of the contact.
   *
   * @public
   */
  ContactName: string | undefined;

  /**
   * The phone number of the contact, including the country code (for example, `+12065550100`).
   *
   * @public
   */
  ContactPhoneNumber: string | undefined;

  /**
   * The first line of the address.
   *
   * @public
   */
  AddressLine1: string | undefined;

  /**
   * The second line of the address.
   *
   * @public
   */
  AddressLine2?: string | undefined;

  /**
   * The third line of the address.
   *
   * @public
   */
  AddressLine3?: string | undefined;

  /**
   * The city for the address.
   *
   * @public
   */
  City: string | undefined;

  /**
   * The state for the address.
   *
   * @public
   */
  StateOrRegion: string | undefined;

  /**
   * The district or county for the address.
   *
   * @public
   */
  DistrictOrCounty?: string | undefined;

  /**
   * The postal code for the address.
   *
   * @public
   */
  PostalCode: string | undefined;

  /**
   * The ISO-3166 two-letter country code for the address.
   *
   * @public
   */
  CountryCode: string | undefined;

  /**
   * The municipality for the address.
   *
   * @public
   */
  Municipality?: string | undefined;
}

/**
 * Information about the position of the asset in a rack.
 *
 * @public
 */
export interface AssetLocation {
  /**
   * The position of an asset in a rack measured in rack units.
   *
   * @public
   */
  RackElevation?: number | undefined;
}

/**
 * The capacity for each instance type.
 *
 * @public
 */
export interface AssetInstanceTypeCapacity {
  /**
   * The type of instance.
   *
   * @public
   */
  InstanceType: string | undefined;

  /**
   * The number of each instance type.
   *
   * @public
   */
  Count: number | undefined;
}

/**
 * Information about compute hardware assets.
 *
 * @public
 */
export interface ComputeAttributes {
  /**
   * The host ID of the Dedicated Host on the asset.
   *
   * @public
   */
  HostId?: string | undefined;

  /**
   * The state.
   *
   * - ACTIVE - The asset is available and can provide capacity for new compute resources.
   * - ISOLATED - The asset is undergoing maintenance and can't provide capacity for new compute resources. Existing compute resources on the asset are not affected.
   * - RETIRING - The underlying hardware for the asset is degraded. Capacity for new compute resources is reduced. Amazon Web Services sends notifications for resources that must be stopped before the asset can be replaced.
   * - INSTALLING - The asset is being installed and can't yet provide capacity for new compute resources.
   *
   * @public
   */
  State?: ComputeAssetState | undefined;

  /**
   * A list of the names of instance families that are currently associated with a given asset.
   *
   * @public
   */
  InstanceFamilies?: string[] | undefined;

  /**
   * The instance type capacities configured for this asset. This can be changed through a capacity task.
   *
   * @public
   */
  InstanceTypeCapacities?: AssetInstanceTypeCapacity[] | undefined;

  /**
   * The maximum number of vCPUs possible for the specified asset.
   *
   * @public
   */
  MaxVcpus?: number | undefined;
}

/**
 * Information about hardware assets.
 *
 * @public
 */
export interface AssetInfo {
  /**
   * The ID of the asset. An Outpost asset can be a single server within an Outposts rack or an Outposts server configuration.
   *
   * @public
   */
  AssetId?: string | undefined;

  /**
   * The rack ID of the asset.
   *
   * @public
   */
  RackId?: string | undefined;

  /**
   * The type of the asset.
   *
   * @public
   */
  AssetType?: AssetType | undefined;

  /**
   * Information about compute hardware assets.
   *
   * @public
   */
  ComputeAttributes?: ComputeAttributes | undefined;

  /**
   * The position of an asset in a rack.
   *
   * @public
   */
  AssetLocation?: AssetLocation | undefined;
}

/**
 * An Amazon EC2 instance.
 *
 * @public
 */
export interface AssetInstance {
  /**
   * The ID of the instance.
   *
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * The type of instance.
   *
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * The ID of the asset. An Outpost asset can be a single server within an Outposts rack or an Outposts server configuration.
   *
   * @public
   */
  AssetId?: string | undefined;

  /**
   * The ID of the Amazon Web Services account.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The Amazon Web Services service name of the instance.
   *
   * @public
   */
  AwsServiceName?: AWSServiceName | undefined;
}

/**
 * A running Amazon EC2 instance that can be stopped to free up capacity needed to run the capacity task.
 *
 * @public
 */
export interface BlockingInstance {
  /**
   * The ID of the blocking instance.
   *
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * The ID of the Amazon Web Services account.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The Amazon Web Services service name that owns the specified blocking instance.
   *
   * @public
   */
  AwsServiceName?: AWSServiceName | undefined;
}

/**
 * @public
 */
export interface CancelCapacityTaskInput {
  /**
   * ID of the capacity task that you want to cancel.
   *
   * @public
   */
  CapacityTaskId: string | undefined;

  /**
   * ID or ARN of the Outpost associated with the capacity task that you want to cancel.
   *
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
   * The ID of the order.
   *
   * @public
   */
  OrderId: string | undefined;
}

/**
 * @public
 */
export interface CancelOrderOutput {}

/**
 * A capacity requirement for a quote. Specifies the type of capacity, the unit, and the quantity.
 *
 * @public
 */
export interface QuoteCapacity {
  /**
   * The type of capacity. Valid values are `EC2`, `EBS`, and `S3`.
   *
   * @public
   */
  QuoteCapacityType?: QuoteCapacityType | undefined;

  /**
   * The unit of measurement for the capacity. For Amazon EC2, this is the instance type (for example, `c5.24xlarge`). For Amazon EBS and Amazon S3, this is the storage unit (for example, `TiB` for tebibytes).
   *
   * @public
   */
  Unit?: string | undefined;

  /**
   * The quantity of the specified capacity unit. For Amazon EC2, this is the number of additional instances to add to the Outpost. For Amazon EBS and Amazon S3, this is the total desired end-state capacity of the Outpost.
   *
   * @public
   */
  Quantity?: number | undefined;
}

/**
 * A summary of the capacity changes for a quote option.
 *
 * @public
 */
export interface CapacitySummary {
  /**
   * The existing capacities on the Outpost before the quote is fulfilled.
   *
   * @public
   */
  ExistingCapacities?: QuoteCapacity[] | undefined;

  /**
   * The final capacities on the Outpost after the quote is fulfilled.
   *
   * @public
   */
  FinalCapacities?: QuoteCapacity[] | undefined;

  /**
   * The change in capacity between the existing and final state.
   *
   * @public
   */
  CapacityChange?: QuoteCapacity[] | undefined;
}

/**
 * The capacity tasks that failed.
 *
 * @public
 */
export interface CapacityTaskFailure {
  /**
   * The reason that the specified capacity task failed.
   *
   * @public
   */
  Reason: string | undefined;

  /**
   * The type of failure.
   *
   * @public
   */
  Type?: CapacityTaskFailureType | undefined;
}

/**
 * The summary of the capacity task.
 *
 * @public
 */
export interface CapacityTaskSummary {
  /**
   * The ID of the specified capacity task.
   *
   * @public
   */
  CapacityTaskId?: string | undefined;

  /**
   * The ID of the Outpost associated with the specified capacity task.
   *
   * @public
   */
  OutpostId?: string | undefined;

  /**
   * The ID of the Amazon Web Services Outposts order of the host associated with the capacity task.
   *
   * @public
   */
  OrderId?: string | undefined;

  /**
   * The ID of the asset. An Outpost asset can be a single server within an Outposts rack or an Outposts server configuration.
   *
   * @public
   */
  AssetId?: string | undefined;

  /**
   * The status of the capacity task.
   *
   * @public
   */
  CapacityTaskStatus?: CapacityTaskStatus | undefined;

  /**
   * The date that the specified capacity task was created.
   *
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * The date that the specified capacity task successfully ran.
   *
   * @public
   */
  CompletionDate?: Date | undefined;

  /**
   * The date that the specified capacity was last modified.
   *
   * @public
   */
  LastModifiedDate?: Date | undefined;
}

/**
 * Information about EC2 capacity.
 *
 * @public
 */
export interface EC2Capacity {
  /**
   * The family of the EC2 capacity.
   *
   * @public
   */
  Family?: string | undefined;

  /**
   * The maximum size of the EC2 capacity.
   *
   * @public
   */
  MaxSize?: string | undefined;

  /**
   * The quantity of the EC2 capacity.
   *
   * @public
   */
  Quantity?: string | undefined;
}

/**
 * Information about a catalog item.
 *
 * @public
 */
export interface CatalogItem {
  /**
   * The ID of the catalog item.
   *
   * @public
   */
  CatalogItemId?: string | undefined;

  /**
   * The status of a catalog item.
   *
   * @public
   */
  ItemStatus?: CatalogItemStatus | undefined;

  /**
   * Information about the EC2 capacity of an item.
   *
   * @public
   */
  EC2Capacities?: EC2Capacity[] | undefined;

  /**
   * Information about the power draw of an item.
   *
   * @public
   */
  PowerKva?: number | undefined;

  /**
   * The weight of the item in pounds.
   *
   * @public
   */
  WeightLbs?: number | undefined;

  /**
   * The uplink speed this catalog item requires for the connection to the Region.
   *
   * @public
   */
  SupportedUplinkGbps?: number[] | undefined;

  /**
   * The supported storage options for the catalog item.
   *
   * @public
   */
  SupportedStorage?: SupportedStorageEnum[] | undefined;

  /**
   * The rack scaling type supported by the catalog item. Valid values are `SINGLE_RACK` and `MULTI_RACK`.
   *
   * @public
   */
  RackScalingType?: RackScalingType | undefined;
}

/**
 * Information about a connection.
 *
 * @public
 */
export interface ConnectionDetails {
  /**
   * The public key of the client.
   *
   * @public
   */
  ClientPublicKey?: string | undefined;

  /**
   * The public key of the server.
   *
   * @public
   */
  ServerPublicKey?: string | undefined;

  /**
   * The endpoint for the server.
   *
   * @public
   */
  ServerEndpoint?: string | undefined;

  /**
   * The client tunnel address.
   *
   * @public
   */
  ClientTunnelAddress?: string | undefined;

  /**
   * The server tunnel address.
   *
   * @public
   */
  ServerTunnelAddress?: string | undefined;

  /**
   * The allowed IP addresses.
   *
   * @public
   */
  AllowedIps?: string[] | undefined;
}

/**
 * Information about a line item request.
 *
 * @public
 */
export interface LineItemRequest {
  /**
   * The ID of the catalog item.
   *
   * @public
   */
  CatalogItemId?: string | undefined;

  /**
   * The quantity of a line item request.
   *
   * @public
   */
  Quantity?: number | undefined;
}

/**
 * @public
 */
export interface CreateOrderInput {
  /**
   * The ID or the Amazon Resource Name (ARN) of the Outpost.
   *
   * @public
   */
  OutpostIdentifier: string | undefined;

  /**
   * The ID of the quote to use for the order.
   *
   * @public
   */
  QuoteIdentifier?: string | undefined;

  /**
   * The ID of the quote option to use for the order.
   *
   * @public
   */
  QuoteOptionIdentifier?: string | undefined;

  /**
   * The line items that make up the order.
   *
   * @public
   */
  LineItems?: LineItemRequest[] | undefined;

  /**
   * The payment option.
   *
   * @public
   */
  PaymentOption: PaymentOption | undefined;

  /**
   * The payment terms.
   *
   * @public
   */
  PaymentTerm?: PaymentTerm | undefined;
}

/**
 * Information about a line item asset.
 *
 * @public
 */
export interface LineItemAssetInformation {
  /**
   * The ID of the asset. An Outpost asset can be a single server within an Outposts rack or an Outposts server configuration.
   *
   * @public
   */
  AssetId?: string | undefined;

  /**
   * The MAC addresses of the asset.
   *
   * @public
   */
  MacAddressList?: string[] | undefined;
}

/**
 * Information about a line item shipment.
 *
 * @public
 */
export interface ShipmentInformation {
  /**
   * The tracking number of the shipment.
   *
   * @public
   */
  ShipmentTrackingNumber?: string | undefined;

  /**
   * The carrier of the shipment.
   *
   * @public
   */
  ShipmentCarrier?: ShipmentCarrier | undefined;
}

/**
 * Information about a line item.
 *
 * @public
 */
export interface LineItem {
  /**
   * The ID of the catalog item.
   *
   * @public
   */
  CatalogItemId?: string | undefined;

  /**
   * The ID of the line item.
   *
   * @public
   */
  LineItemId?: string | undefined;

  /**
   * The quantity of the line item.
   *
   * @public
   */
  Quantity?: number | undefined;

  /**
   * The status of the line item.
   *
   * @public
   */
  Status?: LineItemStatus | undefined;

  /**
   * Information about a line item shipment.
   *
   * @public
   */
  ShipmentInformation?: ShipmentInformation | undefined;

  /**
   * Information about assets.
   *
   * @public
   */
  AssetInformationList?: LineItemAssetInformation[] | undefined;

  /**
   * The ID of the previous line item.
   *
   * @public
   */
  PreviousLineItemId?: string | undefined;

  /**
   * The ID of the previous order.
   *
   * @public
   */
  PreviousOrderId?: string | undefined;
}

/**
 * Information about an order.
 *
 * @public
 */
export interface Order {
  /**
   * The ID of the Outpost in the order.
   *
   * @public
   */
  OutpostId?: string | undefined;

  /**
   * The ID of the quote associated with the order.
   *
   * @public
   */
  QuoteIdentifier?: string | undefined;

  /**
   * The ID of the quote option associated with the order.
   *
   * @public
   */
  QuoteOptionIdentifier?: string | undefined;

  /**
   * The ID of the order.
   *
   * @public
   */
  OrderId?: string | undefined;

  /**
   * The status of the order.
   *
   * - `PREPARING` - Order is received and being prepared.
   * - `IN_PROGRESS` - Order is either being built or shipped. To get more details, see the line item status.
   * - `DELIVERED` - Order was delivered to the Outpost site.
   * - `COMPLETED` - Order is complete.
   * - `CANCELLED` - Order is cancelled.
   * - `ERROR` - Customer should contact support.
   *
   * > **Note:** The following status are deprecated: `RECEIVED`, `PENDING`, `PROCESSING`, `INSTALLING`, and `FULFILLED`.
   *
   * @public
   */
  Status?: OrderStatus | undefined;

  /**
   * The line items for the order
   *
   * @public
   */
  LineItems?: LineItem[] | undefined;

  /**
   * The payment option for the order.
   *
   * @public
   */
  PaymentOption?: PaymentOption | undefined;

  /**
   * The submission date for the order.
   *
   * @public
   */
  OrderSubmissionDate?: Date | undefined;

  /**
   * The fulfillment date of the order.
   *
   * @public
   */
  OrderFulfilledDate?: Date | undefined;

  /**
   * The payment term.
   *
   * @public
   */
  PaymentTerm?: PaymentTerm | undefined;

  /**
   * The type of order.
   *
   * @public
   */
  OrderType?: OrderType | undefined;
}

/**
 * @public
 */
export interface CreateOrderOutput {
  /**
   * Information about this order.
   *
   * @public
   */
  Order?: Order | undefined;
}

/**
 * @public
 */
export interface CreateOutpostInput {
  /**
   * The name of the Outpost.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The description of the Outpost.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The ID or the Amazon Resource Name (ARN) of the site.
   *
   * @public
   */
  SiteId: string | undefined;

  /**
   * The Availability Zone.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * The ID of the Availability Zone.
   *
   * @public
   */
  AvailabilityZoneId?: string | undefined;

  /**
   * The tags to apply to the Outpost.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The type of hardware for this Outpost.
   *
   * @public
   */
  SupportedHardwareType?: SupportedHardwareType | undefined;
}

/**
 * Information about an Outpost.
 *
 * @public
 */
export interface Outpost {
  /**
   * The ID of the Outpost.
   *
   * @public
   */
  OutpostId?: string | undefined;

  /**
   * The Amazon Web Services account ID of the Outpost owner.
   *
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Outpost.
   *
   * @public
   */
  OutpostArn?: string | undefined;

  /**
   * The ID of the site.
   *
   * @public
   */
  SiteId?: string | undefined;

  /**
   * The name of the Outpost.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The description of the Outpost.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The life cycle status.
   *
   * @public
   */
  LifeCycleStatus?: string | undefined;

  /**
   * The Availability Zone.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * The ID of the Availability Zone.
   *
   * @public
   */
  AvailabilityZoneId?: string | undefined;

  /**
   * The Outpost tags.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The Amazon Resource Name (ARN) of the site.
   *
   * @public
   */
  SiteArn?: string | undefined;

  /**
   * The hardware type.
   *
   * @public
   */
  SupportedHardwareType?: SupportedHardwareType | undefined;

  /**
   * The Outpost generation. Valid values are `GENERATION_1` for first-generation rack deployments and `GENERATION_2` for second-generation rack deployments.
   *
   * @public
   */
  Generation?: OutpostGeneration | undefined;

  /**
   * The rack scaling type. Valid values are `SINGLE_RACK` for single-rack Outposts and `MULTI_RACK` for multi-rack Outposts that can expand across multiple racks.
   *
   * @public
   */
  RackScalingType?: RackScalingType | undefined;
}

/**
 * @public
 */
export interface CreateOutpostOutput {
  /**
   * Information about an Outpost.
   *
   * @public
   */
  Outpost?: Outpost | undefined;
}

/**
 * Information about a VPC used for private connectivity, including its subnets and an associated VPC endpoint.
 *
 * @public
 */
export interface VpcInformation {
  /**
   * The ID of the VPC used for private connectivity.
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * The IDs of the subnets associated with the VPC endpoint. Currently, only one subnet is supported.
   *
   * @public
   */
  SubnetIds?: string[] | undefined;

  /**
   * The ID of the interface VPC endpoint for the Amazon Web Services Outposts service. When specified, the endpoint must be in the `available` state and the specified subnets must be associated with it.
   *
   * @public
   */
  VpcEndpointId?: string | undefined;
}

/**
 * @public
 */
export interface CreatePrivateConnectivityConfigInput {
  /**
   * The ID or ARN of the Outpost.
   *
   * @public
   */
  OutpostId: string | undefined;

  /**
   * Information about the VPC used for private connectivity, including the VPC, its subnets, and an associated VPC endpoint. You can specify at most one entry.
   *
   * @public
   */
  VpcInformationList: VpcInformation[] | undefined;
}

/**
 * Information about the private connectivity configuration for an Outpost.
 *
 * @public
 */
export interface PrivateConnectivityConfig {
  /**
   * The Amazon Resource Name (ARN) of the service-linked role that Amazon Web Services Outposts creates and uses to provision and attach the network interfaces for private connectivity in your VPC. The role's permissions are scoped to the specific Outpost and VPC.
   *
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * The status of private connectivity for the Outpost. Valid values are `ENABLED` and `DISABLED`.
   *
   * @public
   */
  PrivateConnectivityStatus?: PrivateConnectivityStatus | undefined;

  /**
   * Information about the VPC used for private connectivity.
   *
   * @public
   */
  VpcInformationList?: VpcInformation[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the provisioning role in your account that Amazon Web Services Outposts uses to establish the service link connection during Outpost installation. This field is present only when VPC endpoint-based provisioning is configured.
   *
   * @public
   */
  ProvisioningRoleArn?: string | undefined;
}

/**
 * @public
 */
export interface CreatePrivateConnectivityConfigOutput {
  /**
   * The private connectivity configuration for the Outpost.
   *
   * @public
   */
  PrivateConnectivityConfig?: PrivateConnectivityConfig | undefined;

  /**
   * The ID of the Outpost.
   *
   * @public
   */
  OutpostId?: string | undefined;
}

/**
 * A physical constraint for a quote.
 *
 * @public
 */
export interface QuoteConstraint {
  /**
   * The type of constraint. Valid values are `RACK_MAXIMUM`, `RACK_MAX_POWER_KVA`, `RACK_MAX_WEIGHT_LBS`, and `RACK_SPACE_CONSTRAINED`.
   *
   * @public
   */
  QuoteConstraintType?: QuoteConstraintType | undefined;

  /**
   * The value of the constraint.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * @public
 */
export interface CreateQuoteInput {
  /**
   * The ID or ARN of the Outpost to associate with the quote. If not specified, the quote is created without an Outpost association.
   *
   * @public
   */
  OutpostIdentifier?: string | undefined;

  /**
   * The country code for the Outpost site location.
   *
   * @public
   */
  CountryCode: string | undefined;

  /**
   * The capacity requirements for the quote. Each entry specifies a capacity type (such as Amazon EC2), the unit, and the quantity. For Amazon EC2, the quantity is the number of additional instances to add to the Outpost. For Amazon EBS and Amazon S3, the quantity is the total desired end-state capacity of the Outpost.
   *
   * @public
   */
  RequestedCapacities: QuoteCapacity[] | undefined;

  /**
   * The physical constraints for the quote, such as maximum number of racks, maximum power draw per rack, or maximum weight per rack.
   *
   * @public
   */
  RequestedConstraints?: QuoteConstraint[] | undefined;

  /**
   * The payment options to include in the quote pricing. If not specified, all available payment options are returned.
   *
   * @public
   */
  RequestedPaymentOptions?: PaymentOption[] | undefined;

  /**
   * The payment terms to include in the quote pricing. If not specified, all available payment terms are returned.
   *
   * @public
   */
  RequestedPaymentTerms?: PaymentTerm[] | undefined;

  /**
   * A description for the quote.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * A requirement that must be met before an order can be submitted for a quote.
 *
 * @public
 */
export interface OrderingRequirement {
  /**
   * A message about the ordering requirement.
   *
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * The type of ordering requirement. Indicates which check failed or passed.
   *
   * - `OUTPOST_ACTIVE_CHECK_ERROR` - The Outpost must be in an active state.
   * - `MAXIMUM_ALLOWED_ORDERS_CHECK_ERROR` - The maximum number of allowed orders has been reached.
   * - `VALID_ZIP_CODE_CHECK_ERROR` - The site address must have a valid zip code.
   * - `RACK_PHYSICAL_PROPERTIES_CHECK_ERROR` - The rack physical properties do not meet requirements.
   * - `OPERATING_ADDRESS_EXISTENCE_CHECK_ERROR` - The site must have an operating address.
   * - `SHIPPING_ADDRESS_EXISTENCE_CHECK_ERROR` - The site must have a shipping address.
   * - `COUNTRY_CODE_MISMATCH_CHECK_ERROR` - The country code on the quote does not match the Outpost site country.
   * - `OUTPOST_GENERATION_MISMATCH_ERROR` - The Outpost generation does not match the requested configuration.
   * - `OUTPOST_ID_MISSING_ON_QUOTE_ERROR` - The quote must be associated with an Outpost before submitting an order.
   * - `ENTERPRISE_SUPPORT_ERROR` - Enterprise Support is required.
   * - `SHIPPING_ADDRESS_MISSING_CONTACT_NAME_ERROR` - The shipping address must have a contact name.
   * - `SHIPPING_ADDRESS_MISSING_CONTACT_NUMBER_ERROR` - The shipping address must have a contact phone number.
   * - `SHIPPING_ADDRESS_MISSING_CONTACT_INFO_ERROR` - The shipping address must have contact information.
   * - `OUTPOST_STATE_CHANGED_ERROR` - The Outpost state has changed since the quote was created.
   * - `OUTPOST_NOT_FOUND_ERROR` - The Outpost associated with the quote was not found.
   * - `OUTPOST_RENEWAL_REQUIRED_ERROR` - The Outpost requires a renewal before a new order can be submitted.
   * - `UNSUPPORTED` - The requirement type is not recognized.
   *
   * @public
   */
  OrderingRequirementType?: OrderingRequirementType | undefined;

  /**
   * The status of the ordering requirement. Valid values are `PASS`, `FAIL`, and `EXEMPT`.
   *
   * @public
   */
  Status?: OrderingRequirementStatus | undefined;
}

/**
 * The pricing details for a subscription.
 *
 * @public
 */
export interface SubscriptionPricingDetails {
  /**
   * The payment option.
   *
   * @public
   */
  PaymentOption?: PaymentOption | undefined;

  /**
   * The payment term.
   *
   * @public
   */
  PaymentTerm?: PaymentTerm | undefined;

  /**
   * The upfront price.
   *
   * @public
   */
  UpfrontPrice?: number | undefined;

  /**
   * The monthly recurring price.
   *
   * @public
   */
  MonthlyRecurringPrice?: number | undefined;

  /**
   * The currency of the price. Currently only `USD` is supported.
   *
   * @public
   */
  Currency?: CurrencyCode | undefined;
}

/**
 * A pricing option for the specified Outpost.
 *
 * @public
 */
export interface PricingOption {
  /**
   * The type of pricing model.
   *
   * @public
   */
  PricingType?: QuotePricingType | undefined;

  /**
   * The subscription pricing details for this pricing option.
   *
   * @public
   */
  SubscriptionPricingDetails?: SubscriptionPricingDetails | undefined;
}

/**
 * The physical specification details for a rack in a quote option.
 *
 * @public
 */
export interface RackSpecificationDetails {
  /**
   * The ID of the rack.
   *
   * @public
   */
  RackId?: string | undefined;

  /**
   * The use of the rack. Valid values are `COMPUTE` and `NETWORKING`.
   *
   * @public
   */
  RackUse?: QuoteRackUseType | undefined;

  /**
   * The maximum power draw of the rack in kVA.
   *
   * @public
   */
  RackPowerDrawKva?: number | undefined;

  /**
   * The weight of the rack in pounds.
   *
   * @public
   */
  RackWeightLbs?: number | undefined;

  /**
   * The height of the rack in inches.
   *
   * @public
   */
  RackHeightInches?: number | undefined;

  /**
   * The width of the rack in inches.
   *
   * @public
   */
  RackWidthInches?: number | undefined;

  /**
   * The depth of the rack in inches.
   *
   * @public
   */
  RackDepthInches?: number | undefined;

  /**
   * The rack unit height.
   *
   * - `HEIGHT_42U` - 42 rack units.
   * - `HEIGHT_2U` - 2 rack units.
   * - `HEIGHT_1U` - 1 rack unit.
   *
   * @public
   */
  RackUnitHeight?: RackUnitHeight | undefined;

  /**
   * The Amazon EC2 capacities for the rack.
   *
   * @public
   */
  EC2Capacities?: EC2Capacity[] | undefined;
}

/**
 * The physical specification details for a server in a quote option.
 *
 * @public
 */
export interface ServerSpecificationDetails {
  /**
   * The maximum power draw of the server in kVA.
   *
   * @public
   */
  ServerPowerDrawKva?: number | undefined;

  /**
   * The weight of the server in pounds.
   *
   * @public
   */
  ServerWeightLbs?: number | undefined;

  /**
   * The height of the server in inches.
   *
   * @public
   */
  ServerHeightInches?: number | undefined;

  /**
   * The width of the server in inches.
   *
   * @public
   */
  ServerWidthInches?: number | undefined;

  /**
   * The depth of the server in inches.
   *
   * @public
   */
  ServerDepthInches?: number | undefined;

  /**
   * The rack unit height of the server.
   *
   * - `HEIGHT_2U` - 2 rack units.
   * - `HEIGHT_1U` - 1 rack unit.
   *
   * @public
   */
  RackUnitHeight?: RackUnitHeight | undefined;

  /**
   * The Amazon EC2 capacities for the server.
   *
   * @public
   */
  EC2Capacities?: EC2Capacity[] | undefined;
}

/**
 * A physical specification for a quote option. Describes the rack or server configuration that would be deployed.
 *
 * @public
 */
export interface QuoteSpecification {
  /**
   * The type of specification. Valid values are `NEW_RACK`, `UPDATED_RACK`, `EXISTING_RACK`, and `SERVER`.
   *
   * @public
   */
  QuoteSpecificationType?: QuoteSpecificationType | undefined;

  /**
   * The existing rack specification details, if the specification type is `UPDATED_RACK` or `EXISTING_RACK`.
   *
   * @public
   */
  ExistingRackSpecificationDetails?: RackSpecificationDetails | undefined;

  /**
   * The final rack specification details after the quote is fulfilled.
   *
   * @public
   */
  FinalRackSpecificationDetails?: RackSpecificationDetails | undefined;

  /**
   * The server specification details, if the specification type is `SERVER`.
   *
   * @public
   */
  ServerSpecificationDetails?: ServerSpecificationDetails | undefined;
}

/**
 * A configuration and pricing option for a quote. Each option includes the capacity breakdown, physical specifications for the racks or servers, and pricing details.
 *
 * @public
 */
export interface QuoteOption {
  /**
   * The ID of the quote option.
   *
   * @public
   */
  QuoteOptionIdentifier?: string | undefined;

  /**
   * The capacities included in this quote option.
   *
   * @public
   */
  Capacities?: QuoteCapacity[] | undefined;

  /**
   * A summary of the existing, final, and changed capacity for this quote option.
   *
   * @public
   */
  CapacitySummary?: CapacitySummary | undefined;

  /**
   * The physical specifications for the racks or servers in this quote option.
   *
   * @public
   */
  Specifications?: QuoteSpecification[] | undefined;

  /**
   * The pricing options for this quote option.
   *
   * @public
   */
  PricingOptions?: PricingOption[] | undefined;
}

/**
 * Information about a quote for an Outpost. A quote provides pricing and configuration options based on the requested capacity.
 *
 * @public
 */
export interface Quote {
  /**
   * The ID of the quote.
   *
   * @public
   */
  QuoteId?: string | undefined;

  /**
   * The ID of the account that owns the quote.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The status of the quote.
   *
   * - `CREATED` - The quote has been created and is available for review.
   * - `ORDER_SUBMITTED` - An order has been submitted for the quote.
   * - `EXPIRED` - The quote has expired and can no longer be used to submit an order.
   *
   * @public
   */
  QuoteStatus?: QuoteStatus | undefined;

  /**
   * A message about the status of the quote.
   *
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * The ARN of the Outpost associated with the quote.
   *
   * @public
   */
  OutpostArn?: string | undefined;

  /**
   * The country code for the Outpost site location.
   *
   * @public
   */
  CountryCode?: string | undefined;

  /**
   * The capacity requirements specified in the quote request.
   *
   * @public
   */
  RequestedCapacities?: QuoteCapacity[] | undefined;

  /**
   * The physical constraints specified in the quote request.
   *
   * @public
   */
  RequestedConstraints?: QuoteConstraint[] | undefined;

  /**
   * The payment options specified in the quote request.
   *
   * @public
   */
  RequestedPaymentOptions?: PaymentOption[] | undefined;

  /**
   * The payment terms specified in the quote request.
   *
   * @public
   */
  RequestedPaymentTerms?: PaymentTerm[] | undefined;

  /**
   * The configuration and pricing options for the quote. Each option includes capacity details, physical specifications, and pricing information.
   *
   * @public
   */
  QuoteOptions?: QuoteOption[] | undefined;

  /**
   * The requirements that must be met before an order can be submitted for the quote.
   *
   * @public
   */
  OrderingRequirements?: OrderingRequirement[] | undefined;

  /**
   * The ID of the order submitted for the quote.
   *
   * @public
   */
  SubmittedOrderId?: string | undefined;

  /**
   * The date the quote was created.
   *
   * @public
   */
  CreatedDate?: Date | undefined;

  /**
   * The date the quote expires.
   *
   * @public
   */
  ExpirationDate?: Date | undefined;

  /**
   * The description of the quote.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface CreateQuoteOutput {
  /**
   * Information about the quote.
   *
   * @public
   */
  Quote?: Quote | undefined;
}

/**
 * @public
 */
export interface CreateRenewalInput {
  /**
   * The payment option.
   *
   * @public
   */
  PaymentOption: PaymentOption | undefined;

  /**
   * The payment term.
   *
   * @public
   */
  PaymentTerm: PaymentTerm | undefined;

  /**
   * The ID or ARN of the Outpost.
   *
   * @public
   */
  OutpostIdentifier: string | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateRenewalOutput {
  /**
   * The payment option.
   *
   * @public
   */
  PaymentOption?: PaymentOption | undefined;

  /**
   * The payment term.
   *
   * @public
   */
  PaymentTerm?: PaymentTerm | undefined;

  /**
   * The ID of the Outpost.
   *
   * @public
   */
  OutpostId?: string | undefined;

  /**
   * The upfront price of the renewal.
   *
   * @public
   */
  UpfrontPrice?: number | undefined;

  /**
   * The monthly recurring price of the renewal.
   *
   * @public
   */
  MonthlyRecurringPrice?: number | undefined;

  /**
   * The currency of the renewal price.
   *
   * @public
   */
  Currency?: CurrencyCode | undefined;
}

/**
 * Information about the physical and logistical details for racks at sites. For more information about hardware requirements for racks, see [Network readiness checklist](https://docs.aws.amazon.com/outposts/latest/userguide/outposts-requirements.html#checklist) in the Amazon Web Services Outposts User Guide.
 *
 * @public
 */
export interface RackPhysicalProperties {
  /**
   * The power draw available at the hardware placement position for the rack.
   *
   * @public
   */
  PowerDrawKva?: PowerDrawKva | undefined;

  /**
   * The power option that you can provide for hardware.
   *
   * @public
   */
  PowerPhase?: PowerPhase | undefined;

  /**
   * The power connector for the hardware.
   *
   * @public
   */
  PowerConnector?: PowerConnector | undefined;

  /**
   * The position of the power feed.
   *
   * @public
   */
  PowerFeedDrop?: PowerFeedDrop | undefined;

  /**
   * The uplink speed the rack supports for the connection to the Region.
   *
   * @public
   */
  UplinkGbps?: UplinkGbps | undefined;

  /**
   * The number of uplinks each Outpost network device.
   *
   * @public
   */
  UplinkCount?: UplinkCount | undefined;

  /**
   * The type of fiber used to attach the Outpost to the network.
   *
   * @public
   */
  FiberOpticCableType?: FiberOpticCableType | undefined;

  /**
   * The type of optical standard used to attach the Outpost to the network. This field is dependent on uplink speed, fiber type, and distance to the upstream device. For more information about networking requirements for racks, see [Network](https://docs.aws.amazon.com/outposts/latest/userguide/outposts-requirements.html#facility-networking) in the Amazon Web Services Outposts User Guide.
   *
   * @public
   */
  OpticalStandard?: OpticalStandard | undefined;

  /**
   * The maximum rack weight that this site can support. `NO_LIMIT` is over 2000 lbs (907 kg).
   *
   * @public
   */
  MaximumSupportedWeightLbs?: MaximumSupportedWeightLbs | undefined;
}

/**
 * @public
 */
export interface CreateSiteInput {
  /**
   * The name of the site.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The description of the site.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Additional information that you provide about site access requirements, electrician scheduling, personal protective equipment, or regulation of equipment materials that could affect your installation process.
   *
   * @public
   */
  Notes?: string | undefined;

  /**
   * The tags to apply to a site.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The location to install and power on the hardware. This address might be different from the shipping address.
   *
   * @public
   */
  OperatingAddress?: Address | undefined;

  /**
   * The location to ship the hardware. This address might be different from the operating address.
   *
   * @public
   */
  ShippingAddress?: Address | undefined;

  /**
   * Information about the physical and logistical details for the rack at this site. For more information about hardware requirements for racks, see [Network readiness checklist](https://docs.aws.amazon.com/outposts/latest/userguide/outposts-requirements.html#checklist) in the Amazon Web Services Outposts User Guide.
   *
   * @public
   */
  RackPhysicalProperties?: RackPhysicalProperties | undefined;
}

/**
 * Information about a site.
 *
 * @public
 */
export interface Site {
  /**
   * The ID of the site.
   *
   * @public
   */
  SiteId?: string | undefined;

  /**
   * The ID of the Amazon Web Services account.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The name of the site.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The description of the site.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The site tags.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The Amazon Resource Name (ARN) of the site.
   *
   * @public
   */
  SiteArn?: string | undefined;

  /**
   * Notes about a site.
   *
   * @public
   */
  Notes?: string | undefined;

  /**
   * The ISO-3166 two-letter country code where the hardware is installed and powered on.
   *
   * @public
   */
  OperatingAddressCountryCode?: string | undefined;

  /**
   * State or region where the hardware is installed and powered on.
   *
   * @public
   */
  OperatingAddressStateOrRegion?: string | undefined;

  /**
   * City where the hardware is installed and powered on.
   *
   * @public
   */
  OperatingAddressCity?: string | undefined;

  /**
   * Information about the physical and logistical details for a rack at the site.
   *
   * @public
   */
  RackPhysicalProperties?: RackPhysicalProperties | undefined;
}

/**
 * @public
 */
export interface CreateSiteOutput {
  /**
   * Information about a site.
   *
   * @public
   */
  Site?: Site | undefined;
}

/**
 * @public
 */
export interface DeleteOutpostInput {
  /**
   * The ID or ARN of the Outpost.
   *
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
   * The ID of the quote.
   *
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
   * The ID or the Amazon Resource Name (ARN) of the site.
   *
   * @public
   */
  SiteId: string | undefined;
}

/**
 * @public
 */
export interface DeleteSiteOutput {}

/**
 * A supported form factor and Outpost generation configuration for an instance type.
 *
 * @public
 */
export interface FormFactorConfig {
  /**
   * The form factor. Valid values are `RACK` for rack-based Outposts and `SERVER` for server-based Outposts.
   *
   * @public
   */
  FormFactor?: FormFactor | undefined;

  /**
   * The Outpost generation. Valid values are `GENERATION_1` for first-generation rack deployments and `GENERATION_2` for second-generation rack deployments. This value is not set for server form factors.
   *
   * @public
   */
  OutpostGeneration?: OutpostGeneration | undefined;
}

/**
 * Information about an instance type that can be ordered for an Outpost, including hardware specifications and supported form factors.
 *
 * @public
 */
export interface DetailedInstanceTypeItem {
  /**
   * The instance type.
   *
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * The number of default VCPUs in the instance type.
   *
   * @public
   */
  VCPUs?: number | undefined;

  /**
   * The memory size of the instance type, in MiB.
   *
   * @public
   */
  MemoryInMib?: number | undefined;

  /**
   * The network performance of the instance type.
   *
   * @public
   */
  NetworkPerformance?: string | undefined;

  /**
   * The supported form factor and Outpost generation configurations for the instance type.
   *
   * @public
   */
  FormFactorConfigs?: FormFactorConfig[] | undefined;
}

/**
 * @public
 */
export interface GetCapacityTaskInput {
  /**
   * ID of the capacity task.
   *
   * @public
   */
  CapacityTaskId: string | undefined;

  /**
   * ID or ARN of the Outpost associated with the specified capacity task.
   *
   * @public
   */
  OutpostIdentifier: string | undefined;
}

/**
 * User-specified instances that must not be stopped. These instances will not appear in the list of instances that Amazon Web Services recommends to stop in order to free up capacity.
 *
 * @public
 */
export interface InstancesToExclude {
  /**
   * List of user-specified instances that must not be stopped.
   *
   * @public
   */
  Instances?: string[] | undefined;

  /**
   * IDs of the accounts that own each instance that must not be stopped.
   *
   * @public
   */
  AccountIds?: string[] | undefined;

  /**
   * Names of the services that own each instance that must not be stopped in order to free up the capacity needed to run the capacity task.
   *
   * @public
   */
  Services?: AWSServiceName[] | undefined;
}

/**
 * The instance type that you specify determines the combination of CPU, memory, storage, and networking capacity.
 *
 * @public
 */
export interface InstanceTypeCapacity {
  /**
   * The instance type of the hosts.
   *
   * @public
   */
  InstanceType: string | undefined;

  /**
   * The number of instances for the specified instance type.
   *
   * @public
   */
  Count: number | undefined;
}

/**
 * @public
 */
export interface GetCapacityTaskOutput {
  /**
   * ID of the capacity task.
   *
   * @public
   */
  CapacityTaskId?: string | undefined;

  /**
   * ID of the Outpost associated with the specified capacity task.
   *
   * @public
   */
  OutpostId?: string | undefined;

  /**
   * ID of the Amazon Web Services Outposts order associated with the specified capacity task.
   *
   * @public
   */
  OrderId?: string | undefined;

  /**
   * The ID of the Outpost asset. An Outpost asset can be a single server within an Outposts rack or an Outposts server configuration.
   *
   * @public
   */
  AssetId?: string | undefined;

  /**
   * List of instance pools requested in the capacity task.
   *
   * @public
   */
  RequestedInstancePools?: InstanceTypeCapacity[] | undefined;

  /**
   * Instances that the user specified they cannot stop in order to free up the capacity needed to run the capacity task.
   *
   * @public
   */
  InstancesToExclude?: InstancesToExclude | undefined;

  /**
   * Performs a dry run to determine if you are above or below instance capacity.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * Status of the capacity task.
   *
   * A capacity task can have one of the following statuses:
   *
   * - `REQUESTED` - The capacity task was created and is awaiting the next step by Amazon Web Services Outposts.
   * - `IN_PROGRESS` - The capacity task is running and cannot be cancelled.
   * - `FAILED` - The capacity task could not be completed.
   * - `COMPLETED` - The capacity task has completed successfully.
   * - `WAITING_FOR_EVACUATION` - The capacity task requires capacity to run. You must stop the recommended EC2 running instances to free up capacity for the task to run.
   * - `CANCELLATION_IN_PROGRESS` - The capacity task has been cancelled and is in the process of cleaning up resources.
   * - `CANCELLED` - The capacity task is cancelled.
   *
   * @public
   */
  CapacityTaskStatus?: CapacityTaskStatus | undefined;

  /**
   * Reason why the capacity task failed.
   *
   * @public
   */
  Failed?: CapacityTaskFailure | undefined;

  /**
   * The date the capacity task was created.
   *
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * The date the capacity task ran successfully.
   *
   * @public
   */
  CompletionDate?: Date | undefined;

  /**
   * The date the capacity task was last modified.
   *
   * @public
   */
  LastModifiedDate?: Date | undefined;

  /**
   * User-specified option in case an instance is blocking the capacity task from running. Shows one of the following options:
   *
   * - `WAIT_FOR_EVACUATION` - Checks every 10 minutes over 48 hours to determine if instances have stopped and capacity is available to complete the task.
   * - `FAIL_TASK` - The capacity task fails.
   *
   * @public
   */
  TaskActionOnBlockingInstances?: TaskActionOnBlockingInstances | undefined;
}

/**
 * @public
 */
export interface GetCatalogItemInput {
  /**
   * The ID of the catalog item.
   *
   * @public
   */
  CatalogItemId: string | undefined;
}

/**
 * @public
 */
export interface GetCatalogItemOutput {
  /**
   * Information about this catalog item.
   *
   * @public
   */
  CatalogItem?: CatalogItem | undefined;
}

/**
 * @public
 */
export interface GetConnectionRequest {
  /**
   * The ID of the connection.
   *
   * @public
   */
  ConnectionId: string | undefined;
}

/**
 * @public
 */
export interface GetConnectionResponse {
  /**
   * The ID of the connection.
   *
   * @public
   */
  ConnectionId?: string | undefined;

  /**
   * Information about the connection.
   *
   * @public
   */
  ConnectionDetails?: ConnectionDetails | undefined;
}

/**
 * @public
 */
export interface GetOrderInput {
  /**
   * The ID of the order.
   *
   * @public
   */
  OrderId: string | undefined;
}

/**
 * @public
 */
export interface GetOrderOutput {
  /**
   * Information about an order.
   *
   * @public
   */
  Order?: Order | undefined;
}

/**
 * @public
 */
export interface GetOutpostInput {
  /**
   * The ID or ARN of the Outpost.
   *
   * @public
   */
  OutpostId: string | undefined;
}

/**
 * @public
 */
export interface GetOutpostOutput {
  /**
   * Information about an Outpost.
   *
   * @public
   */
  Outpost?: Outpost | undefined;
}

/**
 * @public
 */
export interface GetOutpostBillingInformationInput {
  /**
   * The pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum page size.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The ID or ARN of the Outpost.
   *
   * @public
   */
  OutpostIdentifier: string | undefined;
}

/**
 * Provides information about your Amazon Web Services Outposts subscriptions.
 *
 * @public
 */
export interface Subscription {
  /**
   * The ID of the subscription that appears on the Amazon Web Services Billing Center console.
   *
   * @public
   */
  SubscriptionId?: string | undefined;

  /**
   * The type of subscription which can be one of the following:
   *
   * - **ORIGINAL** - The first order on the Amazon Web Services Outposts.
   * - **RENEWAL** - Renewal requests, both month to month and longer term.
   * - **CAPACITY_INCREASE** - Capacity scaling orders.
   *
   * @public
   */
  SubscriptionType?: SubscriptionType | undefined;

  /**
   * The status of subscription which can be one of the following:
   *
   * - **INACTIVE** - Subscription requests that are inactive.
   * - **ACTIVE** - Subscription requests that are in progress and have an end date in the future.
   * - **PENDING** - Subscription has been created but billing has not yet commenced because the subscription begin date has not been reached.
   * - **CANCELLED** - Subscription requests that are cancelled.
   *
   * @public
   */
  SubscriptionStatus?: SubscriptionStatus | undefined;

  /**
   * The order ID for your subscription.
   *
   * @public
   */
  OrderIds?: string[] | undefined;

  /**
   * The date your subscription starts.
   *
   * @public
   */
  BeginDate?: Date | undefined;

  /**
   * The date your subscription ends.
   *
   * @public
   */
  EndDate?: Date | undefined;

  /**
   * The currency of the subscription price. Currently only `USD` is supported.
   *
   * @public
   */
  Currency?: CurrencyCode | undefined;

  /**
   * The amount you are billed each month in the subscription period.
   *
   * @public
   */
  MonthlyRecurringPrice?: number | undefined;

  /**
   * The amount billed when the subscription is created. This is a one-time charge.
   *
   * @public
   */
  UpfrontPrice?: number | undefined;
}

/**
 * @public
 */
export interface GetOutpostBillingInformationOutput {
  /**
   * The pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The subscription details for the specified Outpost.
   *
   * @public
   */
  Subscriptions?: Subscription[] | undefined;

  /**
   * The date the current contract term ends for the specified Outpost. You must start the renewal or decommission process at least 5 business days before the current term for your Amazon Web Services Outposts ends. Failing to complete these steps at least 5 business days before the current term ends might result in unanticipated charges.
   *
   * @public
   */
  ContractEndDate?: string | undefined;

  /**
   * The payment term.
   *
   * @public
   */
  PaymentTerm?: PaymentTerm | undefined;

  /**
   * The payment option.
   *
   * @public
   */
  PaymentOption?: PaymentOption | undefined;
}

/**
 * @public
 */
export interface GetOutpostInstanceTypesInput {
  /**
   * The ID or ARN of the Outpost.
   *
   * @public
   */
  OutpostId: string | undefined;

  /**
   * The pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum page size.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Information about an instance type.
 *
 * @public
 */
export interface InstanceTypeItem {
  /**
   * The instance type.
   *
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * The number of default VCPUs in an instance type.
   *
   * @public
   */
  VCPUs?: number | undefined;
}

/**
 * @public
 */
export interface GetOutpostInstanceTypesOutput {
  /**
   * Information about the instance types.
   *
   * @public
   */
  InstanceTypes?: InstanceTypeItem[] | undefined;

  /**
   * The pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The ID of the Outpost.
   *
   * @public
   */
  OutpostId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Outpost.
   *
   * @public
   */
  OutpostArn?: string | undefined;
}

/**
 * @public
 */
export interface GetOutpostSupportedInstanceTypesInput {
  /**
   * The ID or ARN of the Outpost.
   *
   * @public
   */
  OutpostIdentifier: string | undefined;

  /**
   * The ID for the Amazon Web Services Outposts order.
   *
   * @public
   */
  OrderId?: string | undefined;

  /**
   * The ID of the Outpost asset. An Outpost asset can be a single server within an Outposts rack or an Outposts server configuration.
   *
   * @public
   */
  AssetId?: string | undefined;

  /**
   * The maximum page size.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetOutpostSupportedInstanceTypesOutput {
  /**
   * Information about the instance types.
   *
   * @public
   */
  InstanceTypes?: InstanceTypeItem[] | undefined;

  /**
   * The pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetPrivateConnectivityConfigInput {
  /**
   * The ID or ARN of the Outpost.
   *
   * @public
   */
  OutpostId: string | undefined;
}

/**
 * @public
 */
export interface GetPrivateConnectivityConfigOutput {
  /**
   * The private connectivity configuration for the Outpost.
   *
   * @public
   */
  PrivateConnectivityConfig?: PrivateConnectivityConfig | undefined;
}

/**
 * @public
 */
export interface GetQuoteInput {
  /**
   * The ID of the quote.
   *
   * @public
   */
  QuoteIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetQuoteOutput {
  /**
   * Information about the quote.
   *
   * @public
   */
  Quote?: Quote | undefined;
}

/**
 * @public
 */
export interface GetRenewalPricingInput {
  /**
   * The ID or ARN of the Outpost.
   *
   * @public
   */
  OutpostIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetRenewalPricingOutput {
  /**
   * The result of the pricing request.
   *
   * @public
   */
  PricingResult?: PricingResult | undefined;

  /**
   * The pricing options for the specified Outpost.
   *
   * @public
   */
  PricingOptions?: PricingOption[] | undefined;
}

/**
 * @public
 */
export interface GetSiteInput {
  /**
   * The ID or the Amazon Resource Name (ARN) of the site.
   *
   * @public
   */
  SiteId: string | undefined;
}

/**
 * @public
 */
export interface GetSiteOutput {
  /**
   * Information about a site.
   *
   * @public
   */
  Site?: Site | undefined;
}

/**
 * @public
 */
export interface GetSiteAddressInput {
  /**
   * The ID or the Amazon Resource Name (ARN) of the site.
   *
   * @public
   */
  SiteId: string | undefined;

  /**
   * The type of the address you request.
   *
   * @public
   */
  AddressType: AddressType | undefined;
}

/**
 * @public
 */
export interface GetSiteAddressOutput {
  /**
   * The ID of the site.
   *
   * @public
   */
  SiteId?: string | undefined;

  /**
   * The type of the address you receive.
   *
   * @public
   */
  AddressType?: AddressType | undefined;

  /**
   * Information about the address.
   *
   * @public
   */
  Address?: Address | undefined;
}

/**
 * @public
 */
export interface ListAssetInstancesInput {
  /**
   * The ID of the Outpost.
   *
   * @public
   */
  OutpostIdentifier: string | undefined;

  /**
   * Filters the results by asset ID.
   *
   * @public
   */
  AssetIdFilter?: string[] | undefined;

  /**
   * Filters the results by instance ID.
   *
   * @public
   */
  InstanceTypeFilter?: string[] | undefined;

  /**
   * Filters the results by account ID.
   *
   * @public
   */
  AccountIdFilter?: string[] | undefined;

  /**
   * Filters the results by Amazon Web Services service.
   *
   * @public
   */
  AwsServiceFilter?: AWSServiceName[] | undefined;

  /**
   * The maximum page size.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAssetInstancesOutput {
  /**
   * List of instances owned by all accounts on the Outpost. Does not include Amazon EBS or Amazon S3 instances.
   *
   * @public
   */
  AssetInstances?: AssetInstance[] | undefined;

  /**
   * The pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAssetsInput {
  /**
   * The ID or the Amazon Resource Name (ARN) of the Outpost.
   *
   * @public
   */
  OutpostIdentifier: string | undefined;

  /**
   * Filters the results by the host ID of a Dedicated Host.
   *
   * @public
   */
  HostIdFilter?: string[] | undefined;

  /**
   * The maximum page size.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Filters the results by state.
   *
   * @public
   */
  StatusFilter?: AssetState[] | undefined;

  /**
   * Filters the results by asset type.
   *
   * - COMPUTE - Server asset used for customer compute
   * - STORAGE - Server asset used by storage services
   * - POWERSHELF - Powershelf assets
   * - SWITCH - Switch assets
   * - NETWORKING - Asset managed by Amazon Web Services for networking purposes
   *
   * @public
   */
  AssetTypeFilter?: AssetType[] | undefined;
}

/**
 * @public
 */
export interface ListAssetsOutput {
  /**
   * Information about the hardware assets.
   *
   * @public
   */
  Assets?: AssetInfo[] | undefined;

  /**
   * The pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListBlockingInstancesForCapacityTaskInput {
  /**
   * The ID or ARN of the Outpost associated with the specified capacity task.
   *
   * @public
   */
  OutpostIdentifier: string | undefined;

  /**
   * The ID of the capacity task.
   *
   * @public
   */
  CapacityTaskId: string | undefined;

  /**
   * The maximum page size.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListBlockingInstancesForCapacityTaskOutput {
  /**
   * A list of all running Amazon EC2 instances on the Outpost. Stopping one or more of these instances can free up the capacity needed to run the capacity task.
   *
   * @public
   */
  BlockingInstances?: BlockingInstance[] | undefined;

  /**
   * The pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCapacityTasksInput {
  /**
   * Filters the results by an Outpost ID or an Outpost ARN.
   *
   * @public
   */
  OutpostIdentifierFilter?: string | undefined;

  /**
   * The maximum page size.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A list of statuses. For example, `REQUESTED` or `WAITING_FOR_EVACUATION`.
   *
   * @public
   */
  CapacityTaskStatusFilter?: CapacityTaskStatus[] | undefined;
}

/**
 * @public
 */
export interface ListCapacityTasksOutput {
  /**
   * Lists all the capacity tasks.
   *
   * @public
   */
  CapacityTasks?: CapacityTaskSummary[] | undefined;

  /**
   * The pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCatalogItemsInput {
  /**
   * The pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum page size.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Filters the results by item class.
   *
   * @public
   */
  ItemClassFilter?: CatalogItemClass[] | undefined;

  /**
   * Filters the results by storage option.
   *
   * @public
   */
  SupportedStorageFilter?: SupportedStorageEnum[] | undefined;

  /**
   * Filters the results by EC2 family (for example, M5).
   *
   * @public
   */
  EC2FamilyFilter?: string[] | undefined;
}

/**
 * @public
 */
export interface ListCatalogItemsOutput {
  /**
   * Information about the catalog items.
   *
   * @public
   */
  CatalogItems?: CatalogItem[] | undefined;

  /**
   * The pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListOrderableInstanceTypesInput {
  /**
   * Filters the results by Outpost generation. Specify `GENERATION_1` for first-generation rack deployments or `GENERATION_2` for second-generation rack deployments.
   *
   * @public
   */
  OutpostGenerationFilter?: OutpostGeneration | undefined;

  /**
   * The maximum page size.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListOrderableInstanceTypesOutput {
  /**
   * Information about the instance types that can be ordered for the Outpost.
   *
   * @public
   */
  InstanceTypes?: DetailedInstanceTypeItem[] | undefined;

  /**
   * The pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListOrdersInput {
  /**
   * The ID or the Amazon Resource Name (ARN) of the Outpost.
   *
   * @public
   */
  OutpostIdentifierFilter?: string | undefined;

  /**
   * The pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum page size.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * A summary of line items in your order.
 *
 * @public
 */
export interface OrderSummary {
  /**
   * The ID of the Outpost.
   *
   * @public
   */
  OutpostId?: string | undefined;

  /**
   * The ID of the order.
   *
   * @public
   */
  OrderId?: string | undefined;

  /**
   * The type of order.
   *
   * @public
   */
  OrderType?: OrderType | undefined;

  /**
   * The status of the order.
   *
   * - `PREPARING` - Order is received and is being prepared.
   * - `IN_PROGRESS` - Order is either being built, shipped, or installed. For more information, see the `LineItem` status.
   * - `COMPLETED` - Order is complete.
   * - `CANCELLED` - Order is cancelled.
   * - `ERROR` - Customer should contact support.
   *
   * > **Note:** The following statuses are deprecated: `RECEIVED`, `PENDING`, `PROCESSING`, `INSTALLING`, and `FULFILLED`.
   *
   * @public
   */
  Status?: OrderStatus | undefined;

  /**
   * The status of all line items in the order.
   *
   * @public
   */
  LineItemCountsByStatus?: Partial<Record<LineItemStatus, number>> | undefined;

  /**
   * The submission date for the order.
   *
   * @public
   */
  OrderSubmissionDate?: Date | undefined;

  /**
   * The fulfilment date for the order.
   *
   * @public
   */
  OrderFulfilledDate?: Date | undefined;
}

/**
 * @public
 */
export interface ListOrdersOutput {
  /**
   * Information about the orders.
   *
   * @public
   */
  Orders?: OrderSummary[] | undefined;

  /**
   * The pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListOutpostsInput {
  /**
   * The pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum page size.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Filters the results by the lifecycle status.
   *
   * @public
   */
  LifeCycleStatusFilter?: string[] | undefined;

  /**
   * Filters the results by Availability Zone (for example, `us-east-1a`).
   *
   * @public
   */
  AvailabilityZoneFilter?: string[] | undefined;

  /**
   * Filters the results by AZ ID (for example, `use1-az1`).
   *
   * @public
   */
  AvailabilityZoneIdFilter?: string[] | undefined;
}

/**
 * @public
 */
export interface ListOutpostsOutput {
  /**
   * Information about the Outposts.
   *
   * @public
   */
  Outposts?: Outpost[] | undefined;

  /**
   * The pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListQuotesInput {
  /**
   * The pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum page size.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Summary information about a quote.
 *
 * @public
 */
export interface QuoteSummary {
  /**
   * The ID of the quote.
   *
   * @public
   */
  QuoteId?: string | undefined;

  /**
   * The ID of the account that owns the quote.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The status of the quote.
   *
   * @public
   */
  QuoteStatus?: QuoteStatus | undefined;

  /**
   * A message about the status of the quote.
   *
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * The ARN of the Outpost associated with the quote.
   *
   * @public
   */
  OutpostArn?: string | undefined;

  /**
   * The country code for the Outpost site location.
   *
   * @public
   */
  CountryCode?: string | undefined;

  /**
   * The capacity requirements specified in the quote request.
   *
   * @public
   */
  RequestedCapacities?: QuoteCapacity[] | undefined;

  /**
   * The physical constraints specified in the quote request.
   *
   * @public
   */
  RequestedConstraints?: QuoteConstraint[] | undefined;

  /**
   * The payment options specified in the quote request.
   *
   * @public
   */
  RequestedPaymentOptions?: PaymentOption[] | undefined;

  /**
   * The payment terms specified in the quote request.
   *
   * @public
   */
  RequestedPaymentTerms?: PaymentTerm[] | undefined;

  /**
   * The configuration and pricing options for the quote.
   *
   * @public
   */
  QuoteOptions?: QuoteOption[] | undefined;

  /**
   * The ID of the order submitted for the quote.
   *
   * @public
   */
  SubmittedOrderId?: string | undefined;

  /**
   * The date the quote was created.
   *
   * @public
   */
  CreatedDate?: Date | undefined;

  /**
   * The date the quote expires.
   *
   * @public
   */
  ExpirationDate?: Date | undefined;

  /**
   * The description of the quote.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface ListQuotesOutput {
  /**
   * Information about the quotes.
   *
   * @public
   */
  Quotes?: QuoteSummary[] | undefined;

  /**
   * The pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSitesInput {
  /**
   * The pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum page size.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Filters the results by country code.
   *
   * @public
   */
  OperatingAddressCountryCodeFilter?: string[] | undefined;

  /**
   * Filters the results by state or region.
   *
   * @public
   */
  OperatingAddressStateOrRegionFilter?: string[] | undefined;

  /**
   * Filters the results by city.
   *
   * @public
   */
  OperatingAddressCityFilter?: string[] | undefined;
}

/**
 * @public
 */
export interface ListSitesOutput {
  /**
   * Information about the sites.
   *
   * @public
   */
  Sites?: Site[] | undefined;

  /**
   * The pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * The resource tags.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface StartCapacityTaskInput {
  /**
   * The ID or ARN of the Outposts associated with the specified capacity task.
   *
   * @public
   */
  OutpostIdentifier: string | undefined;

  /**
   * The ID of the Amazon Web Services Outposts order associated with the specified capacity task.
   *
   * @public
   */
  OrderId?: string | undefined;

  /**
   * The ID of the Outpost asset. An Outpost asset can be a single server within an Outposts rack or an Outposts server configuration.
   *
   * @public
   */
  AssetId?: string | undefined;

  /**
   * The instance pools specified in the capacity task.
   *
   * @public
   */
  InstancePools: InstanceTypeCapacity[] | undefined;

  /**
   * List of user-specified running instances that must not be stopped in order to free up the capacity needed to run the capacity task.
   *
   * @public
   */
  InstancesToExclude?: InstancesToExclude | undefined;

  /**
   * You can request a dry run to determine if the instance type and instance size changes is above or below available instance capacity. Requesting a dry run does not make any changes to your plan.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * Specify one of the following options in case an instance is blocking the capacity task from running.
   *
   * - `WAIT_FOR_EVACUATION` - Checks every 10 minutes over 48 hours to determine if instances have stopped and capacity is available to complete the task.
   * - `FAIL_TASK` - The capacity task fails.
   *
   * @public
   */
  TaskActionOnBlockingInstances?: TaskActionOnBlockingInstances | undefined;
}

/**
 * @public
 */
export interface StartCapacityTaskOutput {
  /**
   * ID of the capacity task that you want to start.
   *
   * @public
   */
  CapacityTaskId?: string | undefined;

  /**
   * ID of the Outpost associated with the capacity task.
   *
   * @public
   */
  OutpostId?: string | undefined;

  /**
   * ID of the Amazon Web Services Outposts order of the host associated with the capacity task.
   *
   * @public
   */
  OrderId?: string | undefined;

  /**
   * The ID of the asset. An Outpost asset can be a single server within an Outposts rack or an Outposts server configuration.
   *
   * @public
   */
  AssetId?: string | undefined;

  /**
   * List of the instance pools requested in the specified capacity task.
   *
   * @public
   */
  RequestedInstancePools?: InstanceTypeCapacity[] | undefined;

  /**
   * User-specified instances that must not be stopped in order to free up the capacity needed to run the capacity task.
   *
   * @public
   */
  InstancesToExclude?: InstancesToExclude | undefined;

  /**
   * Results of the dry run showing if the specified capacity task is above or below the available instance capacity.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * Status of the specified capacity task.
   *
   * @public
   */
  CapacityTaskStatus?: CapacityTaskStatus | undefined;

  /**
   * Reason that the specified capacity task failed.
   *
   * @public
   */
  Failed?: CapacityTaskFailure | undefined;

  /**
   * Date that the specified capacity task was created.
   *
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * Date that the specified capacity task ran successfully.
   *
   * @public
   */
  CompletionDate?: Date | undefined;

  /**
   * Date that the specified capacity task was last modified.
   *
   * @public
   */
  LastModifiedDate?: Date | undefined;

  /**
   * User-specified option in case an instance is blocking the capacity task from running.
   *
   * - `WAIT_FOR_EVACUATION` - Checks every 10 minutes over 48 hours to determine if instances have stopped and capacity is available to complete the task.
   * - `FAIL_TASK` - The capacity task fails.
   *
   * @public
   */
  TaskActionOnBlockingInstances?: TaskActionOnBlockingInstances | undefined;
}

/**
 * @public
 */
export interface StartConnectionRequest {
  /**
   * The serial number of the dongle.
   *
   * @public
   */
  DeviceSerialNumber?: string | undefined;

  /**
   * The ID of the Outpost server.
   *
   * @public
   */
  AssetId: string | undefined;

  /**
   * The public key of the client.
   *
   * @public
   */
  ClientPublicKey: string | undefined;

  /**
   * The device index of the network interface on the Outpost server.
   *
   * @public
   */
  NetworkInterfaceDeviceIndex: number | undefined;
}

/**
 * @public
 */
export interface StartConnectionResponse {
  /**
   * The ID of the connection.
   *
   * @public
   */
  ConnectionId?: string | undefined;

  /**
   * The underlay IP address.
   *
   * @public
   */
  UnderlayIpAddress?: string | undefined;
}

/**
 * @public
 */
export interface StartOutpostDecommissionInput {
  /**
   * The ID or ARN of the Outpost that you want to decommission.
   *
   * @public
   */
  OutpostIdentifier: string | undefined;

  /**
   * Validates the request without starting the decommission process.
   *
   * @public
   */
  ValidateOnly?: boolean | undefined;
}

/**
 * @public
 */
export interface StartOutpostDecommissionOutput {
  /**
   * The status of the decommission request.
   *
   * @public
   */
  Status?: DecommissionRequestStatus | undefined;

  /**
   * The resources still associated with the Outpost that you are decommissioning.
   *
   * @public
   */
  BlockingResourceTypes?: BlockingResourceType[] | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The tags to add to the resource.
   *
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
   * The Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The tag keys.
   *
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
   * The ID or ARN of the Outpost.
   *
   * @public
   */
  OutpostId: string | undefined;

  /**
   * The name of the Outpost.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The description of the Outpost.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The type of hardware for this Outpost.
   *
   * @public
   */
  SupportedHardwareType?: SupportedHardwareType | undefined;
}

/**
 * @public
 */
export interface UpdateOutpostOutput {
  /**
   * Information about an Outpost.
   *
   * @public
   */
  Outpost?: Outpost | undefined;
}

/**
 * @public
 */
export interface UpdateQuoteInput {
  /**
   * The ID of the quote.
   *
   * @public
   */
  QuoteIdentifier: string | undefined;

  /**
   * The ID or ARN of the Outpost to associate with the quote. Specify an empty string to remove the Outpost association.
   *
   * @public
   */
  OutpostIdentifier?: string | undefined;

  /**
   * The country code for the Outpost site location.
   *
   * @public
   */
  CountryCode?: string | undefined;

  /**
   * The updated capacity requirements for the quote.
   *
   * @public
   */
  RequestedCapacities?: QuoteCapacity[] | undefined;

  /**
   * The updated physical constraints for the quote.
   *
   * @public
   */
  RequestedConstraints?: QuoteConstraint[] | undefined;

  /**
   * The updated payment options to include in the quote pricing.
   *
   * @public
   */
  RequestedPaymentOptions?: PaymentOption[] | undefined;

  /**
   * The updated payment terms to include in the quote pricing.
   *
   * @public
   */
  RequestedPaymentTerms?: PaymentTerm[] | undefined;

  /**
   * A description for the quote.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface UpdateQuoteOutput {
  /**
   * Information about the updated quote.
   *
   * @public
   */
  Quote?: Quote | undefined;
}

/**
 * @public
 */
export interface UpdateSiteInput {
  /**
   * The ID or the Amazon Resource Name (ARN) of the site.
   *
   * @public
   */
  SiteId: string | undefined;

  /**
   * The name of the site.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The description of the site.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Notes about a site.
   *
   * @public
   */
  Notes?: string | undefined;
}

/**
 * @public
 */
export interface UpdateSiteOutput {
  /**
   * Information about a site.
   *
   * @public
   */
  Site?: Site | undefined;
}

/**
 * @public
 */
export interface UpdateSiteAddressInput {
  /**
   * The ID or the Amazon Resource Name (ARN) of the site.
   *
   * @public
   */
  SiteId: string | undefined;

  /**
   * The type of the address.
   *
   * @public
   */
  AddressType: AddressType | undefined;

  /**
   * The address for the site.
   *
   * @public
   */
  Address: Address | undefined;
}

/**
 * @public
 */
export interface UpdateSiteAddressOutput {
  /**
   * The type of the address.
   *
   * @public
   */
  AddressType?: AddressType | undefined;

  /**
   * Information about an address.
   *
   * @public
   */
  Address?: Address | undefined;
}

/**
 * @public
 */
export interface UpdateSiteRackPhysicalPropertiesInput {
  /**
   * The ID or the Amazon Resource Name (ARN) of the site.
   *
   * @public
   */
  SiteId: string | undefined;

  /**
   * The power draw, in kVA, available at the hardware placement position for the rack.
   *
   * @public
   */
  PowerDrawKva?: PowerDrawKva | undefined;

  /**
   * The power option that you can provide for hardware.
   *
   * - Single-phase AC feed: 200 V to 277 V, 50 Hz or 60 Hz
   * - Three-phase AC feed: 346 V to 480 V, 50 Hz or 60 Hz
   *
   * @public
   */
  PowerPhase?: PowerPhase | undefined;

  /**
   * The power connector that Amazon Web Services should plan to provide for connections to the hardware. Note the correlation between `PowerPhase` and `PowerConnector`.
   *
   * - Single-phase AC feed
   *
   *   - **L6-30P** – (common in US); 30A; single phase
   *   - **IEC309 (blue)** – P+N+E, 6hr; 32 A; single phase
   * - Three-phase AC feed
   *
   *   - **AH530P7W (red)** – 3P+N+E, 7hr; 30A; three phase
   *   - **AH532P6W (red)** – 3P+N+E, 6hr; 32A; three phase
   *   - **CS8365C** – (common in US); 3P+E, 50A; three phase
   *
   * @public
   */
  PowerConnector?: PowerConnector | undefined;

  /**
   * Indicates whether the power feed comes above or below the rack.
   *
   * @public
   */
  PowerFeedDrop?: PowerFeedDrop | undefined;

  /**
   * The uplink speed the rack should support for the connection to the Region.
   *
   * @public
   */
  UplinkGbps?: UplinkGbps | undefined;

  /**
   * Racks come with two Outpost network devices. Depending on the supported uplink speed at the site, the Outpost network devices provide a variable number of uplinks. Specify the number of uplinks for each Outpost network device that you intend to use to connect the rack to your network. Note the correlation between `UplinkGbps` and `UplinkCount`.
   *
   * - 1Gbps - Uplinks available: 1, 2, 4, 6, 8
   * - 10Gbps - Uplinks available: 1, 2, 4, 8, 12, 16
   * - 40 and 100 Gbps- Uplinks available: 1, 2, 4
   *
   * @public
   */
  UplinkCount?: UplinkCount | undefined;

  /**
   * The type of fiber that you will use to attach the Outpost to your network.
   *
   * @public
   */
  FiberOpticCableType?: FiberOpticCableType | undefined;

  /**
   * The type of optical standard that you will use to attach the Outpost to your network. This field is dependent on uplink speed, fiber type, and distance to the upstream device. For more information about networking requirements for racks, see [Network](https://docs.aws.amazon.com/outposts/latest/userguide/outposts-requirements.html#facility-networking) in the Amazon Web Services Outposts User Guide.
   *
   * - `OPTIC_10GBASE_SR`: 10GBASE-SR
   * - `OPTIC_10GBASE_IR`: 10GBASE-IR
   * - `OPTIC_10GBASE_LR`: 10GBASE-LR
   * - `OPTIC_40GBASE_SR`: 40GBASE-SR
   * - `OPTIC_40GBASE_ESR`: 40GBASE-ESR
   * - `OPTIC_40GBASE_IR4_LR4L`: 40GBASE-IR (LR4L)
   * - `OPTIC_40GBASE_LR4`: 40GBASE-LR4
   * - `OPTIC_100GBASE_SR4`: 100GBASE-SR4
   * - `OPTIC_100GBASE_CWDM4`: 100GBASE-CWDM4
   * - `OPTIC_100GBASE_LR4`: 100GBASE-LR4
   * - `OPTIC_100G_PSM4_MSA`: 100G PSM4 MSA
   * - `OPTIC_1000BASE_LX`: 1000Base-LX
   * - `OPTIC_1000BASE_SX` : 1000Base-SX
   *
   * @public
   */
  OpticalStandard?: OpticalStandard | undefined;

  /**
   * The maximum rack weight that this site can support. `NO_LIMIT` is over 2000lbs.
   *
   * @public
   */
  MaximumSupportedWeightLbs?: MaximumSupportedWeightLbs | undefined;
}

/**
 * @public
 */
export interface UpdateSiteRackPhysicalPropertiesOutput {
  /**
   * Information about a site.
   *
   * @public
   */
  Site?: Site | undefined;
}
