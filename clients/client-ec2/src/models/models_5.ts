// smithy-typescript generated code
import type {
  _InstanceType,
  ActivityStatus,
  AllocationStrategy,
  AllowedImagesSettingsDisabledState,
  AttachmentStatus,
  BatchState,
  CapacityManagerStatus,
  CurrencyCodeValues,
  DnsNameState,
  EventType,
  ExcessCapacityTerminationPolicy,
  FastLaunchResourceType,
  FastLaunchStateCode,
  FastSnapshotRestoreStateCode,
  FleetType,
  ImageBlockPublicAccessDisabledState,
  InitializationType,
  InstanceInterruptionBehavior,
  InternetGatewayBlockMode,
  IpAddressType,
  ManagedBy,
  MetricType,
  OfferingClassType,
  OfferingTypeValues,
  OnDemandAllocationStrategy,
  PayerResponsibility,
  PermissionGroup,
  ReplacementStrategy,
  ResourceType,
  RIProductDescription,
  RouteServerPropagationState,
  Scope,
  SecondaryInterfaceStatus,
  SecondaryInterfaceType,
  SecondaryNetworkType,
  SecurityGroupVpcAssociationState,
  ServiceConnectivityType,
  ServiceLinkVirtualInterfaceConfigurationState,
  SnapshotAttributeName,
  SnapshotBlockPublicAccessState,
  SnapshotState,
  SpotInstanceState,
  SpotInstanceType,
  State,
  StatisticType,
  StorageTier,
  TargetCapacityUnitType,
  Tenancy,
  TieringOperationStatus,
  TransitGatewayAssociationState,
  TransitGatewayAttachmentNatGatewaySupportState,
  TransitGatewayAttachmentResourceType,
  TransitGatewayAttachmentState,
  TransitGatewayPropagationState,
  VerifiedAccessLogDeliveryStatusCode,
  VolumeAttributeName,
  VolumeModificationState,
  VolumeStatusInfoStatus,
  VolumeStatusName,
  VolumeType,
  VpcAttributeName,
  VpcBlockPublicAccessExclusionsAllowed,
  VpcBlockPublicAccessState,
} from "./enums";
import type {
  ActiveInstance,
  AddressTransfer,
  AllowedPrincipal,
  AsnAssociation,
  AssociationStatus,
  CustomTagKeyValueRequestPair,
  IamInstanceProfileAssociation,
  IamInstanceProfileSpecification,
  InstanceEventWindow,
  IpamResourceDiscoveryAssociation,
  IpPermission,
  NatGatewayAddress,
  OperatorResponse,
  RouteServerAssociation,
  SecurityGroupRule,
  SubnetIpv6CidrBlockAssociation,
  SuccessfulAssociationResponseObject,
  Tag,
  TagSpecification,
  TransitGatewayMulticastDomainAssociations,
  TransitGatewayPeeringAttachment,
  TransitGatewayVpcAttachment,
  TrunkInterfaceAssociation,
  UnsuccessfulAssociationResponseObject,
  UserIdGroupPair,
  VerifiedAccessInstance,
  VerifiedAccessTrustProvider,
  Volume,
  VpcPeeringConnection,
} from "./models_0";
import type {
  BlockDeviceMapping,
  ConnectionTrackingSpecificationRequest,
  EnaSrdSpecificationRequest,
  FleetLaunchTemplateSpecification,
  InstanceIpv6Address,
  InstanceRequirements,
  Ipv4PrefixSpecificationRequest,
  Ipv6PrefixSpecificationRequest,
  PrivateIpAddressSpecification,
  Subnet,
  Vpc,
  VpcEncryptionControl,
} from "./models_1";
import type {
  ConnectionNotification,
  DnsEntry,
  GroupIdentifier,
  PayerResponsibilityEntry,
  RouteServer,
  RouteServerEndpoint,
  RouteServerPeer,
  RouteTable,
  SecondaryNetwork,
  SecondarySubnet,
  ServiceConfiguration,
  ServiceTypeDetail,
  Snapshot,
  SpotDatafeedSubscription,
  SpotInstanceStateFault,
  TrafficMirrorFilter,
  TrafficMirrorFilterRule,
  TrafficMirrorSession,
  TrafficMirrorTarget,
  TransitGateway,
  TransitGatewayConnect,
  TransitGatewayConnectPeer,
  TransitGatewayMeteringPolicy,
  TransitGatewayMulticastDomain,
  TransitGatewayPolicyTable,
  TransitGatewayRouteTable,
  TransitGatewayRouteTableAnnouncement,
  VerifiedAccessEndpoint,
  VerifiedAccessGroup,
  VpcBlockPublicAccessExclusion,
  VpcEndpoint,
  VpnConcentrator,
  VpnConnection,
  VpnGateway,
} from "./models_2";
import type {
  EventInformation,
  FastLaunchLaunchTemplateSpecificationResponse,
  FastLaunchSnapshotConfigurationResponse,
  Filter,
} from "./models_3";
import type {
  AttributeBooleanValue,
  ProductCode,
  RecurringCharge,
  RegisteredInstance,
  ReservedInstancesId,
  ReservedInstancesModificationResult,
} from "./models_4";

/**
 * Describes a Reserved Instance modification.
 *
 * @public
 */
export interface ReservedInstancesModification {
  /**
   * A unique, case-sensitive key supplied by the client to ensure that the request is idempotent. For more information, see [Ensuring Idempotency](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html).
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The time when the modification request was created.
   *
   * @public
   */
  CreateDate?: Date | undefined;

  /**
   * The time for the modification to become effective.
   *
   * @public
   */
  EffectiveDate?: Date | undefined;

  /**
   * Contains target configurations along with their corresponding new Reserved Instance IDs.
   *
   * @public
   */
  ModificationResults?: ReservedInstancesModificationResult[] | undefined;

  /**
   * The IDs of one or more Reserved Instances.
   *
   * @public
   */
  ReservedInstancesIds?: ReservedInstancesId[] | undefined;

  /**
   * A unique ID for the Reserved Instance modification.
   *
   * @public
   */
  ReservedInstancesModificationId?: string | undefined;

  /**
   * The status of the Reserved Instances modification request.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * The reason for the status.
   *
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * The time when the modification request was last updated.
   *
   * @public
   */
  UpdateDate?: Date | undefined;
}

/**
 * Contains the output of DescribeReservedInstancesModifications.
 *
 * @public
 */
export interface DescribeReservedInstancesModificationsResult {
  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The Reserved Instance modification information.
   *
   * @public
   */
  ReservedInstancesModifications?: ReservedInstancesModification[] | undefined;
}

/**
 * Contains the parameters for DescribeReservedInstancesOfferings.
 *
 * @public
 */
export interface DescribeReservedInstancesOfferingsRequest {
  /**
   * The Availability Zone in which the Reserved Instance can be used.
   *
   * Either `AvailabilityZone` or `AvailabilityZoneId` can be specified, but not both.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * Include Reserved Instance Marketplace offerings in the response.
   *
   * @public
   */
  IncludeMarketplace?: boolean | undefined;

  /**
   * The instance type that the reservation will cover (for example, `m1.small`). For more information, see [Amazon EC2 instance types](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  InstanceType?: _InstanceType | undefined;

  /**
   * The maximum duration (in seconds) to filter when searching for offerings.
   *
   * Default: 94608000 (3 years)
   *
   * @public
   */
  MaxDuration?: number | undefined;

  /**
   * The maximum number of instances to filter when searching for offerings.
   *
   * Default: 20
   *
   * @public
   */
  MaxInstanceCount?: number | undefined;

  /**
   * The minimum duration (in seconds) to filter when searching for offerings.
   *
   * Default: 2592000 (1 month)
   *
   * @public
   */
  MinDuration?: number | undefined;

  /**
   * The offering class of the Reserved Instance. Can be `standard` or `convertible`.
   *
   * @public
   */
  OfferingClass?: OfferingClassType | undefined;

  /**
   * The Reserved Instance product platform description. Instances that include `(Amazon VPC)` in the description are for use with Amazon VPC.
   *
   * @public
   */
  ProductDescription?: RIProductDescription | undefined;

  /**
   * One or more Reserved Instances offering IDs.
   *
   * @public
   */
  ReservedInstancesOfferingIds?: string[] | undefined;

  /**
   * The ID of the Availability Zone.
   *
   * Either `AvailabilityZone` or `AvailabilityZoneId` can be specified, but not both.
   *
   * @public
   */
  AvailabilityZoneId?: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * One or more filters.
   *
   * - `availability-zone` - The Availability Zone where the Reserved Instance can be used.
   * - `availability-zone-id` - The ID of the Availability Zone where the Reserved Instance can be used.
   * - `duration` - The duration of the Reserved Instance (for example, one year or three years), in seconds (`31536000` | `94608000`).
   * - `fixed-price` - The purchase price of the Reserved Instance (for example, 9800.0).
   * - `instance-type` - The instance type that is covered by the reservation.
   * - `marketplace` - Set to `true` to show only Reserved Instance Marketplace offerings. When this filter is not used, which is the default behavior, all offerings from both Amazon Web Services and the Reserved Instance Marketplace are listed.
   * - `product-description` - The Reserved Instance product platform description (`Linux/UNIX` | `Linux with SQL Server Standard` | `Linux with SQL Server Web` | `Linux with SQL Server Enterprise` | `SUSE Linux` | `Red Hat Enterprise Linux` | `Red Hat Enterprise Linux with HA` | `Windows` | `Windows with SQL Server Standard` | `Windows with SQL Server Web` | `Windows with SQL Server Enterprise`).
   * - `reserved-instances-offering-id` - The Reserved Instances offering ID.
   * - `scope` - The scope of the Reserved Instance (`Availability Zone` or `Region`).
   * - `usage-price` - The usage price of the Reserved Instance, per hour (for example, 0.84).
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The tenancy of the instances covered by the reservation. A Reserved Instance with a tenancy of `dedicated` is applied to instances that run in a VPC on single-tenant hardware (i.e., Dedicated Instances).
   *
   * **Important:** The `host` value cannot be used with this parameter. Use the `default` or `dedicated` values only.
   *
   * Default: `default`
   *
   * @public
   */
  InstanceTenancy?: Tenancy | undefined;

  /**
   * The Reserved Instance offering type. If you are using tools that predate the 2011-11-01 API version, you only have access to the `Medium Utilization` Reserved Instance offering type.
   *
   * @public
   */
  OfferingType?: OfferingTypeValues | undefined;

  /**
   * The token to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return for the request in a single page. The remaining results of the initial request can be seen by sending another request with the returned `NextToken` value. The maximum is 100.
   *
   * Default: 100
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Describes a Reserved Instance offering.
 *
 * @public
 */
export interface PricingDetail {
  /**
   * The number of reservations available for the price.
   *
   * @public
   */
  Count?: number | undefined;

  /**
   * The price per instance.
   *
   * @public
   */
  Price?: number | undefined;
}

/**
 * Describes a Reserved Instance offering.
 *
 * @public
 */
export interface ReservedInstancesOffering {
  /**
   * The currency of the Reserved Instance offering you are purchasing. It's specified using ISO 4217 standard currency codes. At this time, the only supported currency is `USD`.
   *
   * @public
   */
  CurrencyCode?: CurrencyCodeValues | undefined;

  /**
   * The tenancy of the instance.
   *
   * @public
   */
  InstanceTenancy?: Tenancy | undefined;

  /**
   * Indicates whether the offering is available through the Reserved Instance Marketplace (resale) or Amazon Web Services. If it's a Reserved Instance Marketplace offering, this is `true`.
   *
   * @public
   */
  Marketplace?: boolean | undefined;

  /**
   * If `convertible` it can be exchanged for Reserved Instances of the same or higher monetary value, with different configurations. If `standard`, it is not possible to perform an exchange.
   *
   * @public
   */
  OfferingClass?: OfferingClassType | undefined;

  /**
   * The Reserved Instance offering type.
   *
   * @public
   */
  OfferingType?: OfferingTypeValues | undefined;

  /**
   * The pricing details of the Reserved Instance offering.
   *
   * @public
   */
  PricingDetails?: PricingDetail[] | undefined;

  /**
   * The recurring charge tag assigned to the resource.
   *
   * @public
   */
  RecurringCharges?: RecurringCharge[] | undefined;

  /**
   * Whether the Reserved Instance is applied to instances in a Region or an Availability Zone.
   *
   * @public
   */
  Scope?: Scope | undefined;

  /**
   * The ID of the Availability Zone.
   *
   * @public
   */
  AvailabilityZoneId?: string | undefined;

  /**
   * The ID of the Reserved Instance offering. This is the offering ID used in GetReservedInstancesExchangeQuote to confirm that an exchange can be made.
   *
   * @public
   */
  ReservedInstancesOfferingId?: string | undefined;

  /**
   * The instance type on which the Reserved Instance can be used.
   *
   * @public
   */
  InstanceType?: _InstanceType | undefined;

  /**
   * The Availability Zone in which the Reserved Instance can be used.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * The duration of the Reserved Instance, in seconds.
   *
   * @public
   */
  Duration?: number | undefined;

  /**
   * The usage price of the Reserved Instance, per hour.
   *
   * @public
   */
  UsagePrice?: number | undefined;

  /**
   * The purchase price of the Reserved Instance.
   *
   * @public
   */
  FixedPrice?: number | undefined;

  /**
   * The Reserved Instance product platform description.
   *
   * @public
   */
  ProductDescription?: RIProductDescription | undefined;
}

/**
 * Contains the output of DescribeReservedInstancesOfferings.
 *
 * @public
 */
export interface DescribeReservedInstancesOfferingsResult {
  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A list of Reserved Instances offerings.
   *
   * @public
   */
  ReservedInstancesOfferings?: ReservedInstancesOffering[] | undefined;
}

/**
 * @public
 */
export interface DescribeRouteServerEndpointsRequest {
  /**
   * The IDs of the route server endpoints to describe.
   *
   * @public
   */
  RouteServerEndpointIds?: string[] | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return with a single call.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * One or more filters to apply to the describe request.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeRouteServerEndpointsResult {
  /**
   * Information about the described route server endpoints.
   *
   * @public
   */
  RouteServerEndpoints?: RouteServerEndpoint[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeRouteServerPeersRequest {
  /**
   * The IDs of the route server peers to describe.
   *
   * @public
   */
  RouteServerPeerIds?: string[] | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return with a single call.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * One or more filters to apply to the describe request.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeRouteServerPeersResult {
  /**
   * Information about the described route server peers.
   *
   * @public
   */
  RouteServerPeers?: RouteServerPeer[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeRouteServersRequest {
  /**
   * The IDs of the route servers to describe.
   *
   * @public
   */
  RouteServerIds?: string[] | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return with a single call.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * One or more filters to apply to the describe request.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeRouteServersResult {
  /**
   * Information about the described route servers.
   *
   * @public
   */
  RouteServers?: RouteServer[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeRouteTablesRequest {
  /**
   * The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see [Pagination](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination).
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The IDs of the route tables.
   *
   * @public
   */
  RouteTableIds?: string[] | undefined;

  /**
   * The filters.
   *
   * - `association.gateway-id` - The ID of the gateway involved in the association.
   * - `association.route-table-association-id` - The ID of an association ID for the route table.
   * - `association.route-table-id` - The ID of the route table involved in the association.
   * - `association.subnet-id` - The ID of the subnet involved in the association.
   * - `association.main` - Indicates whether the route table is the main route table for the VPC (`true` | `false`). Route tables that do not have an association ID are not returned in the response.
   * - `owner-id` - The ID of the Amazon Web Services account that owns the route table.
   * - `route-table-id` - The ID of the route table.
   * - `route.destination-cidr-block` - The IPv4 CIDR range specified in a route in the table.
   * - `route.destination-ipv6-cidr-block` - The IPv6 CIDR range specified in a route in the route table.
   * - `route.destination-prefix-list-id` - The ID (prefix) of the Amazon Web Services service specified in a route in the table.
   * - `route.egress-only-internet-gateway-id` - The ID of an egress-only Internet gateway specified in a route in the route table.
   * - `route.gateway-id` - The ID of a gateway specified in a route in the table.
   * - `route.instance-id` - The ID of an instance specified in a route in the table.
   * - `route.nat-gateway-id` - The ID of a NAT gateway.
   * - `route.transit-gateway-id` - The ID of a transit gateway.
   * - `route.origin` - Describes how the route was created. `CreateRouteTable` indicates that the route was automatically created when the route table was created; `CreateRoute` indicates that the route was manually added to the route table; `EnableVgwRoutePropagation` indicates that the route was propagated by route propagation.
   * - `route.state` - The state of a route in the route table (`active` | `blackhole`). The blackhole state indicates that the route's target isn't available (for example, the specified gateway isn't attached to the VPC, the specified NAT instance has been terminated, and so on).
   * - `route.vpc-peering-connection-id` - The ID of a VPC peering connection specified in a route in the table.
   * - `tag` - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key `Owner` and the value `TeamA`, specify `tag:Owner` for the filter name and `TeamA` for the filter value.
   * - `tag-key` - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.
   * - `vpc-id` - The ID of the VPC for the route table.
   *
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * Contains the output of DescribeRouteTables.
 *
 * @public
 */
export interface DescribeRouteTablesResult {
  /**
   * Information about the route tables.
   *
   * @public
   */
  RouteTables?: RouteTable[] | undefined;

  /**
   * The token to include in another request to get the next page of items. This value is `null` when there are no more items to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Describes the time period for a Scheduled Instance to start its first schedule. The time period must span less than one day.
 *
 * @public
 */
export interface SlotDateTimeRangeRequest {
  /**
   * The earliest date and time, in UTC, for the Scheduled Instance to start.
   *
   * @public
   */
  EarliestTime: Date | undefined;

  /**
   * The latest date and time, in UTC, for the Scheduled Instance to start. This value must be later than or equal to the earliest date and at most three months in the future.
   *
   * @public
   */
  LatestTime: Date | undefined;
}

/**
 * Describes the recurring schedule for a Scheduled Instance.
 *
 * @public
 */
export interface ScheduledInstanceRecurrenceRequest {
  /**
   * The frequency (`Daily`, `Weekly`, or `Monthly`).
   *
   * @public
   */
  Frequency?: string | undefined;

  /**
   * The interval quantity. The interval unit depends on the value of `Frequency`. For example, every 2 weeks or every 2 months.
   *
   * @public
   */
  Interval?: number | undefined;

  /**
   * The days. For a monthly schedule, this is one or more days of the month (1-31). For a weekly schedule, this is one or more days of the week (1-7, where 1 is Sunday). You can't specify this value with a daily schedule. If the occurrence is relative to the end of the month, you can specify only a single day.
   *
   * @public
   */
  OccurrenceDays?: number[] | undefined;

  /**
   * Indicates whether the occurrence is relative to the end of the specified week or month. You can't specify this value with a daily schedule.
   *
   * @public
   */
  OccurrenceRelativeToEnd?: boolean | undefined;

  /**
   * The unit for `OccurrenceDays` (`DayOfWeek` or `DayOfMonth`). This value is required for a monthly schedule. You can't specify `DayOfWeek` with a weekly schedule. You can't specify this value with a daily schedule.
   *
   * @public
   */
  OccurrenceUnit?: string | undefined;
}

/**
 * Contains the parameters for DescribeScheduledInstanceAvailability.
 *
 * @public
 */
export interface DescribeScheduledInstanceAvailabilityRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The filters.
   *
   * - `availability-zone` - The Availability Zone (for example, `us-west-2a`).
   * - `instance-type` - The instance type (for example, `c4.large`).
   * - `platform` - The platform (`Linux/UNIX` or `Windows`).
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The time period for the first schedule to start.
   *
   * @public
   */
  FirstSlotStartTimeRange: SlotDateTimeRangeRequest | undefined;

  /**
   * The maximum number of results to return in a single call. This value can be between 5 and 300. The default value is 300. To retrieve the remaining results, make another call with the returned `NextToken` value.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The maximum available duration, in hours. This value must be greater than `MinSlotDurationInHours` and less than 1,720.
   *
   * @public
   */
  MaxSlotDurationInHours?: number | undefined;

  /**
   * The minimum available duration, in hours. The minimum required duration is 1,200 hours per year. For example, the minimum daily schedule is 4 hours, the minimum weekly schedule is 24 hours, and the minimum monthly schedule is 100 hours.
   *
   * @public
   */
  MinSlotDurationInHours?: number | undefined;

  /**
   * The token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The schedule recurrence.
   *
   * @public
   */
  Recurrence: ScheduledInstanceRecurrenceRequest | undefined;
}

/**
 * Describes the recurring schedule for a Scheduled Instance.
 *
 * @public
 */
export interface ScheduledInstanceRecurrence {
  /**
   * The frequency (`Daily`, `Weekly`, or `Monthly`).
   *
   * @public
   */
  Frequency?: string | undefined;

  /**
   * The interval quantity. The interval unit depends on the value of `frequency`. For example, every 2 weeks or every 2 months.
   *
   * @public
   */
  Interval?: number | undefined;

  /**
   * The days. For a monthly schedule, this is one or more days of the month (1-31). For a weekly schedule, this is one or more days of the week (1-7, where 1 is Sunday).
   *
   * @public
   */
  OccurrenceDaySet?: number[] | undefined;

  /**
   * Indicates whether the occurrence is relative to the end of the specified week or month.
   *
   * @public
   */
  OccurrenceRelativeToEnd?: boolean | undefined;

  /**
   * The unit for `occurrenceDaySet` (`DayOfWeek` or `DayOfMonth`).
   *
   * @public
   */
  OccurrenceUnit?: string | undefined;
}

/**
 * Describes a schedule that is available for your Scheduled Instances.
 *
 * @public
 */
export interface ScheduledInstanceAvailability {
  /**
   * The Availability Zone.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * The number of available instances.
   *
   * @public
   */
  AvailableInstanceCount?: number | undefined;

  /**
   * The time period for the first schedule to start.
   *
   * @public
   */
  FirstSlotStartTime?: Date | undefined;

  /**
   * The hourly price for a single instance.
   *
   * @public
   */
  HourlyPrice?: string | undefined;

  /**
   * The instance type. You can specify one of the C3, C4, M4, or R3 instance types.
   *
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * The maximum term. The only possible value is 365 days.
   *
   * @public
   */
  MaxTermDurationInDays?: number | undefined;

  /**
   * The minimum term. The only possible value is 365 days.
   *
   * @public
   */
  MinTermDurationInDays?: number | undefined;

  /**
   * The network platform.
   *
   * @public
   */
  NetworkPlatform?: string | undefined;

  /**
   * The platform (`Linux/UNIX` or `Windows`).
   *
   * @public
   */
  Platform?: string | undefined;

  /**
   * The purchase token. This token expires in two hours.
   *
   * @public
   */
  PurchaseToken?: string | undefined;

  /**
   * The schedule recurrence.
   *
   * @public
   */
  Recurrence?: ScheduledInstanceRecurrence | undefined;

  /**
   * The number of hours in the schedule.
   *
   * @public
   */
  SlotDurationInHours?: number | undefined;

  /**
   * The total number of hours for a single instance for the entire term.
   *
   * @public
   */
  TotalScheduledInstanceHours?: number | undefined;
}

/**
 * Contains the output of DescribeScheduledInstanceAvailability.
 *
 * @public
 */
export interface DescribeScheduledInstanceAvailabilityResult {
  /**
   * The token required to retrieve the next set of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Information about the available Scheduled Instances.
   *
   * @public
   */
  ScheduledInstanceAvailabilitySet?: ScheduledInstanceAvailability[] | undefined;
}

/**
 * Describes the time period for a Scheduled Instance to start its first schedule.
 *
 * @public
 */
export interface SlotStartTimeRangeRequest {
  /**
   * The earliest date and time, in UTC, for the Scheduled Instance to start.
   *
   * @public
   */
  EarliestTime?: Date | undefined;

  /**
   * The latest date and time, in UTC, for the Scheduled Instance to start.
   *
   * @public
   */
  LatestTime?: Date | undefined;
}

/**
 * Contains the parameters for DescribeScheduledInstances.
 *
 * @public
 */
export interface DescribeScheduledInstancesRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The filters.
   *
   * - `availability-zone` - The Availability Zone (for example, `us-west-2a`).
   * - `instance-type` - The instance type (for example, `c4.large`).
   * - `platform` - The platform (`Linux/UNIX` or `Windows`).
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of results to return in a single call. This value can be between 5 and 300. The default value is 100. To retrieve the remaining results, make another call with the returned `NextToken` value.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The Scheduled Instance IDs.
   *
   * @public
   */
  ScheduledInstanceIds?: string[] | undefined;

  /**
   * The time period for the first schedule to start.
   *
   * @public
   */
  SlotStartTimeRange?: SlotStartTimeRangeRequest | undefined;
}

/**
 * Describes a Scheduled Instance.
 *
 * @public
 */
export interface ScheduledInstance {
  /**
   * The Availability Zone.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * The date when the Scheduled Instance was purchased.
   *
   * @public
   */
  CreateDate?: Date | undefined;

  /**
   * The hourly price for a single instance.
   *
   * @public
   */
  HourlyPrice?: string | undefined;

  /**
   * The number of instances.
   *
   * @public
   */
  InstanceCount?: number | undefined;

  /**
   * The instance type.
   *
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * The network platform.
   *
   * @public
   */
  NetworkPlatform?: string | undefined;

  /**
   * The time for the next schedule to start.
   *
   * @public
   */
  NextSlotStartTime?: Date | undefined;

  /**
   * The platform (`Linux/UNIX` or `Windows`).
   *
   * @public
   */
  Platform?: string | undefined;

  /**
   * The time that the previous schedule ended or will end.
   *
   * @public
   */
  PreviousSlotEndTime?: Date | undefined;

  /**
   * The schedule recurrence.
   *
   * @public
   */
  Recurrence?: ScheduledInstanceRecurrence | undefined;

  /**
   * The Scheduled Instance ID.
   *
   * @public
   */
  ScheduledInstanceId?: string | undefined;

  /**
   * The number of hours in the schedule.
   *
   * @public
   */
  SlotDurationInHours?: number | undefined;

  /**
   * The end date for the Scheduled Instance.
   *
   * @public
   */
  TermEndDate?: Date | undefined;

  /**
   * The start date for the Scheduled Instance.
   *
   * @public
   */
  TermStartDate?: Date | undefined;

  /**
   * The total number of hours for a single instance for the entire term.
   *
   * @public
   */
  TotalScheduledInstanceHours?: number | undefined;
}

/**
 * Contains the output of DescribeScheduledInstances.
 *
 * @public
 */
export interface DescribeScheduledInstancesResult {
  /**
   * The token required to retrieve the next set of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Information about the Scheduled Instances.
   *
   * @public
   */
  ScheduledInstanceSet?: ScheduledInstance[] | undefined;
}

/**
 * @public
 */
export interface DescribeSecondaryInterfacesRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The filters.
   *
   * - `attachment.attachment-id` - The ID of the secondary interface attachment.
   * - `attachment.instance-id` - The ID of the instance to which the secondary interface is attached.
   * - `attachment.instance-owner-id` - The ID of the Amazon Web Services account that owns the instance to which the secondary interface is attached.
   * - `attachment.status` - The attachment status (`attaching` | `attached` | `detaching` | `detached`).
   * - `private-ipv4-addresses.private-ip-address` - The private IPv4 address associated with the secondary interface.
   * - `owner-id` - The ID of the Amazon Web Services account that owns the secondary interface.
   * - `secondary-interface-arn` - The ARN of the secondary interface.
   * - `secondary-interface-id` - The ID of the secondary interface.
   * - `secondary-interface-type` - The type of secondary interface (`secondary`).
   * - `secondary-network-id` - The ID of the secondary network.
   * - `secondary-network-type` - The type of the secondary network (`rdma`).
   * - `secondary-subnet-id` - The ID of the secondary subnet.
   * - `status` - The status of the secondary interface (`available` | `in-use`).
   * - `tag`:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key `Owner` and the value `TeamA`, specify `tag:Owner` for the filter name and `TeamA` for the filter value.
   * - `tag-key` - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned `nextToken` value.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The IDs of the secondary interfaces.
   *
   * @public
   */
  SecondaryInterfaceIds?: string[] | undefined;
}

/**
 * Describes the attachment of a secondary interface to an instance.
 *
 * @public
 */
export interface SecondaryInterfaceAttachment {
  /**
   * The ID of the attachment.
   *
   * @public
   */
  AttachmentId?: string | undefined;

  /**
   * The timestamp when the attachment was created.
   *
   * @public
   */
  AttachTime?: Date | undefined;

  /**
   * Indicates whether the secondary interface is deleted when the instance is terminated.
   *
   * The only supported value for this field is `true`.
   *
   * @public
   */
  DeleteOnTermination?: boolean | undefined;

  /**
   * The device index of the secondary interface.
   *
   * @public
   */
  DeviceIndex?: number | undefined;

  /**
   * The ID of the instance to which the secondary interface is attached.
   *
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * The Amazon Web Services account ID of the owner of the instance.
   *
   * @public
   */
  InstanceOwnerId?: string | undefined;

  /**
   * The index of the network card.
   *
   * @public
   */
  NetworkCardIndex?: number | undefined;

  /**
   * The attachment state.
   *
   * @public
   */
  Status?: AttachmentStatus | undefined;
}

/**
 * Describes a private IPv4 address for a secondary interface.
 *
 * @public
 */
export interface SecondaryInterfaceIpv4Address {
  /**
   * The private IPv4 address.
   *
   * @public
   */
  PrivateIpAddress?: string | undefined;
}

/**
 * Describes a secondary interface.
 *
 * @public
 */
export interface SecondaryInterface {
  /**
   * The Availability Zone of the secondary interface.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * The ID of the Availability Zone of the secondary interface.
   *
   * @public
   */
  AvailabilityZoneId?: string | undefined;

  /**
   * The attachment information for the secondary interface.
   *
   * @public
   */
  Attachment?: SecondaryInterfaceAttachment | undefined;

  /**
   * The MAC address of the secondary interface.
   *
   * @public
   */
  MacAddress?: string | undefined;

  /**
   * The ID of the Amazon Web Services account that owns the secondary interface.
   *
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * The private IPv4 addresses associated with the secondary interface.
   *
   * @public
   */
  PrivateIpv4Addresses?: SecondaryInterfaceIpv4Address[] | undefined;

  /**
   * The ID of the secondary interface.
   *
   * @public
   */
  SecondaryInterfaceId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the secondary interface.
   *
   * @public
   */
  SecondaryInterfaceArn?: string | undefined;

  /**
   * The type of secondary interface.
   *
   * @public
   */
  SecondaryInterfaceType?: SecondaryInterfaceType | undefined;

  /**
   * The ID of the secondary subnet.
   *
   * @public
   */
  SecondarySubnetId?: string | undefined;

  /**
   * The ID of the secondary network.
   *
   * @public
   */
  SecondaryNetworkId?: string | undefined;

  /**
   * The type of the secondary network.
   *
   * @public
   */
  SecondaryNetworkType?: SecondaryNetworkType | undefined;

  /**
   * Indicates whether source/destination checking is enabled.
   *
   * @public
   */
  SourceDestCheck?: boolean | undefined;

  /**
   * The status of the secondary interface.
   *
   * @public
   */
  Status?: SecondaryInterfaceStatus | undefined;

  /**
   * The tags assigned to the secondary interface.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface DescribeSecondaryInterfacesResult {
  /**
   * Information about the secondary interfaces.
   *
   * @public
   */
  SecondaryInterfaces?: SecondaryInterface[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeSecondaryNetworksRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The filters. The following are the possible values:
   *
   * - `ipv4-cidr-block-association.association-id` - The association ID for an IPv4 CIDR block associated with the secondary network.
   * - `ipv4-cidr-block-association.cidr-block` - An IPv4 CIDR block associated with the secondary network.
   * - `ipv4-cidr-block-association.state` - The state of an IPv4 CIDR block associated with the secondary network.
   * - `owner-id` - The ID of the Amazon Web Services account that owns the secondary network.
   * - `secondary-network-id` - The ID of the secondary network.
   * - `secondary-network-arn` - The ARN of the secondary network.
   * - `state` - The state of the secondary network (`create-in-progress` | `create-complete` | `create-failed` | `delete-in-progress` | `delete-complete` | `delete-failed`).
   * - `tag`:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key `Owner` and the value `TeamA`, specify `tag:Owner` for the filter name and `TeamA` for the filter value.
   * - `tag-key` - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.
   * - `type` - The type of the secondary network (`rdma`).
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned `nextToken` value.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The IDs of the secondary networks.
   *
   * @public
   */
  SecondaryNetworkIds?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeSecondaryNetworksResult {
  /**
   * Information about the secondary networks.
   *
   * @public
   */
  SecondaryNetworks?: SecondaryNetwork[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeSecondarySubnetsRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The filters.
   *
   * - `ipv4-cidr-block-association.association-id` - The association ID for an IPv4 CIDR block associated with the secondary subnet.
   * - `ipv4-cidr-block-association.cidr-block` - An IPv4 CIDR block associated with the secondary subnet.
   * - `ipv4-cidr-block-association.state` - The state of an IPv4 CIDR block associated with the secondary subnet.
   * - `owner-id` - The ID of the Amazon Web Services account that owns the secondary subnet.
   * - `secondary-network-id` - The ID of the secondary network.
   * - `secondary-network-type` - The type of the secondary network (`rdma`).
   * - `secondary-subnet-id` - The ID of the secondary subnet.
   * - `secondary-subnet-arn` - The ARN of the secondary subnet.
   * - `state` - The state of the secondary subnet (`create-in-progress` | `create-complete` | `create-failed` | `delete-in-progress` | `delete-complete` | `delete-failed`).
   * - `tag`:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key `Owner` and the value `TeamA`, specify `tag:Owner` for the filter name and `TeamA` for the filter value.
   * - `tag-key` - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned `nextToken` value.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The IDs of the secondary subnets.
   *
   * @public
   */
  SecondarySubnetIds?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeSecondarySubnetsResult {
  /**
   * Information about the secondary subnets.
   *
   * @public
   */
  SecondarySubnets?: SecondarySubnet[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeSecurityGroupReferencesRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The IDs of the security groups in your account.
   *
   * @public
   */
  GroupId: string[] | undefined;
}

/**
 * Describes a VPC with a security group that references your security group.
 *
 * @public
 */
export interface SecurityGroupReference {
  /**
   * The ID of your security group.
   *
   * @public
   */
  GroupId?: string | undefined;

  /**
   * The ID of the VPC with the referencing security group.
   *
   * @public
   */
  ReferencingVpcId?: string | undefined;

  /**
   * The ID of the VPC peering connection (if applicable). For more information about security group referencing for peering connections, see [Update your security groups to reference peer security groups](https://docs.aws.amazon.com/vpc/latest/peering/vpc-peering-security-groups.html) in the *VPC Peering Guide*.
   *
   * @public
   */
  VpcPeeringConnectionId?: string | undefined;

  /**
   * The ID of the transit gateway (if applicable).
   *
   * @public
   */
  TransitGatewayId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeSecurityGroupReferencesResult {
  /**
   * Information about the VPCs with the referencing security groups.
   *
   * @public
   */
  SecurityGroupReferenceSet?: SecurityGroupReference[] | undefined;
}

/**
 * @public
 */
export interface DescribeSecurityGroupRulesRequest {
  /**
   * One or more filters.
   *
   * - `group-id` - The ID of the security group.
   * - `security-group-rule-id` - The ID of the security group rule.
   * - `tag`:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key `Owner` and the value `TeamA`, specify `tag:Owner` for the filter name and `TeamA` for the filter value.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The IDs of the security group rules.
   *
   * @public
   */
  SecurityGroupRuleIds?: string[] | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. This value can be between 5 and 1000. If this parameter is not specified, then all items are returned. For more information, see [Pagination](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination).
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface DescribeSecurityGroupRulesResult {
  /**
   * Information about security group rules.
   *
   * @public
   */
  SecurityGroupRules?: SecurityGroupRule[] | undefined;

  /**
   * The token to include in another request to get the next page of items. This value is `null` when there are no more items to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeSecurityGroupsRequest {
  /**
   * The IDs of the security groups. Required for security groups in a nondefault VPC.
   *
   * Default: Describes all of your security groups.
   *
   * @public
   */
  GroupIds?: string[] | undefined;

  /**
   * [Default VPC] The names of the security groups. You can specify either the security group name or the security group ID.
   *
   * Default: Describes all of your security groups.
   *
   * @public
   */
  GroupNames?: string[] | undefined;

  /**
   * The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. This value can be between 5 and 1000. If this parameter is not specified, then all items are returned. For more information, see [Pagination](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination).
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The filters. If using multiple filters for rules, the results include security groups for which any combination of rules - not necessarily a single rule - match all filters.
   *
   * - `description` - The description of the security group.
   * - `egress.ip-permission.cidr` - An IPv4 CIDR block for an outbound security group rule.
   * - `egress.ip-permission.from-port` - For an outbound rule, the start of port range for the TCP and UDP protocols, or an ICMP type number.
   * - `egress.ip-permission.group-id` - The ID of a security group that has been referenced in an outbound security group rule.
   * - `egress.ip-permission.group-name` - The name of a security group that is referenced in an outbound security group rule.
   * - `egress.ip-permission.ipv6-cidr` - An IPv6 CIDR block for an outbound security group rule.
   * - `egress.ip-permission.prefix-list-id` - The ID of a prefix list to which a security group rule allows outbound access.
   * - `egress.ip-permission.protocol` - The IP protocol for an outbound security group rule (`tcp` | `udp` | `icmp`, a protocol number, or -1 for all protocols).
   * - `egress.ip-permission.to-port` - For an outbound rule, the end of port range for the TCP and UDP protocols, or an ICMP code.
   * - `egress.ip-permission.user-id` - The ID of an Amazon Web Services account that has been referenced in an outbound security group rule.
   * - `group-id` - The ID of the security group.
   * - `group-name` - The name of the security group.
   * - `ip-permission.cidr` - An IPv4 CIDR block for an inbound security group rule.
   * - `ip-permission.from-port` - For an inbound rule, the start of port range for the TCP and UDP protocols, or an ICMP type number.
   * - `ip-permission.group-id` - The ID of a security group that has been referenced in an inbound security group rule.
   * - `ip-permission.group-name` - The name of a security group that is referenced in an inbound security group rule.
   * - `ip-permission.ipv6-cidr` - An IPv6 CIDR block for an inbound security group rule.
   * - `ip-permission.prefix-list-id` - The ID of a prefix list from which a security group rule allows inbound access.
   * - `ip-permission.protocol` - The IP protocol for an inbound security group rule (`tcp` | `udp` | `icmp`, a protocol number, or -1 for all protocols).
   * - `ip-permission.to-port` - For an inbound rule, the end of port range for the TCP and UDP protocols, or an ICMP code.
   * - `ip-permission.user-id` - The ID of an Amazon Web Services account that has been referenced in an inbound security group rule.
   * - `owner-id` - The Amazon Web Services account ID of the owner of the security group.
   * - `tag`:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key `Owner` and the value `TeamA`, specify `tag:Owner` for the filter name and `TeamA` for the filter value.
   * - `tag-key` - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.
   * - `vpc-id` - The ID of the VPC specified when the security group was created.
   *
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * Describes a security group.
 *
 * @public
 */
export interface SecurityGroup {
  /**
   * The ID of the security group.
   *
   * @public
   */
  GroupId?: string | undefined;

  /**
   * The outbound rules associated with the security group.
   *
   * @public
   */
  IpPermissionsEgress?: IpPermission[] | undefined;

  /**
   * Any tags assigned to the security group.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The ID of the VPC for the security group.
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * The ARN of the security group.
   *
   * @public
   */
  SecurityGroupArn?: string | undefined;

  /**
   * The Amazon Web Services account ID of the owner of the security group.
   *
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * The name of the security group.
   *
   * @public
   */
  GroupName?: string | undefined;

  /**
   * A description of the security group.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The inbound rules associated with the security group.
   *
   * @public
   */
  IpPermissions?: IpPermission[] | undefined;
}

/**
 * @public
 */
export interface DescribeSecurityGroupsResult {
  /**
   * The token to include in another request to get the next page of items. This value is `null` when there are no more items to return.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Information about the security groups.
   *
   * @public
   */
  SecurityGroups?: SecurityGroup[] | undefined;
}

/**
 * @public
 */
export interface DescribeSecurityGroupVpcAssociationsRequest {
  /**
   * Security group VPC association filters.
   *
   * - `group-id`: The security group ID.
   * - `group-owner-id`: The group owner ID.
   * - `state`: The state of the association.
   * - `vpc-id`: The ID of the associated VPC.
   * - `vpc-owner-id`: The account ID of the VPC owner.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see [Pagination](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination).
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * A security group association with a VPC that you made with [AssociateSecurityGroupVpc](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AssociateSecurityGroupVpc.html).
 *
 * @public
 */
export interface SecurityGroupVpcAssociation {
  /**
   * The association's security group ID.
   *
   * @public
   */
  GroupId?: string | undefined;

  /**
   * The association's VPC ID.
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * The Amazon Web Services account ID of the owner of the VPC.
   *
   * @public
   */
  VpcOwnerId?: string | undefined;

  /**
   * The association's state.
   *
   * @public
   */
  State?: SecurityGroupVpcAssociationState | undefined;

  /**
   * The association's state reason.
   *
   * @public
   */
  StateReason?: string | undefined;

  /**
   * The Amazon Web Services account ID of the owner of the security group.
   *
   * @public
   */
  GroupOwnerId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeSecurityGroupVpcAssociationsResult {
  /**
   * The security group VPC associations.
   *
   * @public
   */
  SecurityGroupVpcAssociations?: SecurityGroupVpcAssociation[] | undefined;

  /**
   * The token to include in another request to get the next page of items. This value is `null` when there are no more items to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeServiceLinkVirtualInterfacesRequest {
  /**
   * The IDs of the service link virtual interfaces.
   *
   * @public
   */
  ServiceLinkVirtualInterfaceIds?: string[] | undefined;

  /**
   * The filters to use for narrowing down the request. The following filters are supported:
   *
   * - `outpost-lag-id` - The ID of the Outpost LAG.
   * - `outpost-arn` - The Outpost ARN.
   * - `owner-id` - The ID of the Amazon Web Services account that owns the service link virtual interface.
   * - `state` - The state of the Outpost LAG.
   * - `vlan` - The ID of the address pool.
   * - `service-link-virtual-interface-id` - The ID of the service link virtual interface.
   * - `local-gateway-virtual-interface-id` - The ID of the local gateway virtual interface.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned `nextToken` value.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * Describes the service link virtual interfaces that establish connectivity between Amazon Web Services Outpost and on-premises networks.
 *
 * @public
 */
export interface ServiceLinkVirtualInterface {
  /**
   * The ID of the service link virtual interface.
   *
   * @public
   */
  ServiceLinkVirtualInterfaceId?: string | undefined;

  /**
   * The Amazon Resource Number (ARN) for the service link virtual interface.
   *
   * @public
   */
  ServiceLinkVirtualInterfaceArn?: string | undefined;

  /**
   * The Outpost ID for the service link virtual interface.
   *
   * @public
   */
  OutpostId?: string | undefined;

  /**
   * The Outpost Amazon Resource Number (ARN) for the service link virtual interface.
   *
   * @public
   */
  OutpostArn?: string | undefined;

  /**
   * The ID of the Amazon Web Services account that owns the service link virtual interface..
   *
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * The IPv4 address assigned to the local gateway virtual interface on the Outpost side.
   *
   * @public
   */
  LocalAddress?: string | undefined;

  /**
   * The IPv4 peer address for the service link virtual interface.
   *
   * @public
   */
  PeerAddress?: string | undefined;

  /**
   * The ASN for the Border Gateway Protocol (BGP) associated with the service link virtual interface.
   *
   * @public
   */
  PeerBgpAsn?: number | undefined;

  /**
   * The virtual local area network for the service link virtual interface.
   *
   * @public
   */
  Vlan?: number | undefined;

  /**
   * The link aggregation group (LAG) ID for the service link virtual interface.
   *
   * @public
   */
  OutpostLagId?: string | undefined;

  /**
   * The tags associated with the service link virtual interface.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The current state of the service link virtual interface.
   *
   * @public
   */
  ConfigurationState?: ServiceLinkVirtualInterfaceConfigurationState | undefined;
}

/**
 * @public
 */
export interface DescribeServiceLinkVirtualInterfacesResult {
  /**
   * Describes the service link virtual interfaces.
   *
   * @public
   */
  ServiceLinkVirtualInterfaces?: ServiceLinkVirtualInterface[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeSnapshotAttributeRequest {
  /**
   * The snapshot attribute you would like to view.
   *
   * @public
   */
  Attribute: SnapshotAttributeName | undefined;

  /**
   * The ID of the EBS snapshot.
   *
   * @public
   */
  SnapshotId: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * Describes the user or group to be added or removed from the list of create volume permissions for a volume.
 *
 * @public
 */
export interface CreateVolumePermission {
  /**
   * The ID of the Amazon Web Services account to be added or removed.
   *
   * @public
   */
  UserId?: string | undefined;

  /**
   * The group to be added or removed. The possible value is `all`.
   *
   * @public
   */
  Group?: PermissionGroup | undefined;
}

/**
 * @public
 */
export interface DescribeSnapshotAttributeResult {
  /**
   * The product codes.
   *
   * @public
   */
  ProductCodes?: ProductCode[] | undefined;

  /**
   * The ID of the EBS snapshot.
   *
   * @public
   */
  SnapshotId?: string | undefined;

  /**
   * The users and groups that have the permissions for creating volumes from the snapshot.
   *
   * @public
   */
  CreateVolumePermissions?: CreateVolumePermission[] | undefined;
}

/**
 * @public
 */
export interface DescribeSnapshotsRequest {
  /**
   * The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see [Pagination](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination).
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Scopes the results to snapshots with the specified owners. You can specify a combination of Amazon Web Services account IDs, `self`, and `amazon`.
   *
   * @public
   */
  OwnerIds?: string[] | undefined;

  /**
   * The IDs of the Amazon Web Services accounts that can create volumes from the snapshot.
   *
   * @public
   */
  RestorableByUserIds?: string[] | undefined;

  /**
   * The snapshot IDs.
   *
   * Default: Describes the snapshots for which you have create volume permissions.
   *
   * @public
   */
  SnapshotIds?: string[] | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The filters.
   *
   * - `description` - A description of the snapshot.
   * - `encrypted` - Indicates whether the snapshot is encrypted (`true` | `false`)
   * - `owner-alias` - The owner alias, from an Amazon-maintained list (`amazon`). This is not the user-configured Amazon Web Services account alias set using the IAM console. We recommend that you use the related parameter instead of this filter.
   * - `owner-id` - The Amazon Web Services account ID of the owner. We recommend that you use the related parameter instead of this filter.
   * - `progress` - The progress of the snapshot, as a percentage (for example, 80%).
   * - `snapshot-id` - The snapshot ID.
   * - `start-time` - The time stamp when the snapshot was initiated.
   * - `status` - The status of the snapshot (`pending` | `completed` | `error`).
   * - `storage-tier` - The storage tier of the snapshot (`archive` | `standard`).
   * - `transfer-type` - The type of operation used to create the snapshot (`time-based` | `standard`).
   * - `tag`:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key `Owner` and the value `TeamA`, specify `tag:Owner` for the filter name and `TeamA` for the filter value.
   * - `tag-key` - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.
   * - `volume-id` - The ID of the volume the snapshot is for.
   * - `volume-size` - The size of the volume, in GiB.
   *
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * @public
 */
export interface DescribeSnapshotsResult {
  /**
   * The token to include in another request to get the next page of items. This value is `null` when there are no more items to return.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Information about the snapshots.
   *
   * @public
   */
  Snapshots?: Snapshot[] | undefined;
}

/**
 * @public
 */
export interface DescribeSnapshotTierStatusRequest {
  /**
   * The filters.
   *
   * - `snapshot-id` - The snapshot ID.
   * - `volume-id` - The ID of the volume the snapshot is for.
   * - `last-tiering-operation` - The state of the last archive or restore action. (`archival-in-progress` | `archival-completed` | `archival-failed` | `permanent-restore-in-progress` | `permanent-restore-completed` | `permanent-restore-failed` | `temporary-restore-in-progress` | `temporary-restore-completed` | `temporary-restore-failed`)
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see [Pagination](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination).
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Provides information about a snapshot's storage tier.
 *
 * @public
 */
export interface SnapshotTierStatus {
  /**
   * The ID of the snapshot.
   *
   * @public
   */
  SnapshotId?: string | undefined;

  /**
   * The ID of the volume from which the snapshot was created.
   *
   * @public
   */
  VolumeId?: string | undefined;

  /**
   * The state of the snapshot.
   *
   * @public
   */
  Status?: SnapshotState | undefined;

  /**
   * The ID of the Amazon Web Services account that owns the snapshot.
   *
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * The tags that are assigned to the snapshot.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The storage tier in which the snapshot is stored. `standard` indicates that the snapshot is stored in the standard snapshot storage tier and that it is ready for use. `archive` indicates that the snapshot is currently archived and that it must be restored before it can be used.
   *
   * @public
   */
  StorageTier?: StorageTier | undefined;

  /**
   * The date and time when the last archive or restore process was started.
   *
   * @public
   */
  LastTieringStartTime?: Date | undefined;

  /**
   * The progress of the last archive or restore process, as a percentage.
   *
   * @public
   */
  LastTieringProgress?: number | undefined;

  /**
   * The status of the last archive or restore process.
   *
   * @public
   */
  LastTieringOperationStatus?: TieringOperationStatus | undefined;

  /**
   * A message describing the status of the last archive or restore process.
   *
   * @public
   */
  LastTieringOperationStatusDetail?: string | undefined;

  /**
   * The date and time when the last archive process was completed.
   *
   * @public
   */
  ArchivalCompleteTime?: Date | undefined;

  /**
   * Only for archived snapshots that are temporarily restored. Indicates the date and time when a temporarily restored snapshot will be automatically re-archived.
   *
   * @public
   */
  RestoreExpiryTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeSnapshotTierStatusResult {
  /**
   * Information about the snapshot's storage tier.
   *
   * @public
   */
  SnapshotTierStatuses?: SnapshotTierStatus[] | undefined;

  /**
   * The token to include in another request to get the next page of items. This value is `null` when there are no more items to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Contains the parameters for DescribeSpotDatafeedSubscription.
 *
 * @public
 */
export interface DescribeSpotDatafeedSubscriptionRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * Contains the output of DescribeSpotDatafeedSubscription.
 *
 * @public
 */
export interface DescribeSpotDatafeedSubscriptionResult {
  /**
   * The Spot Instance data feed subscription.
   *
   * @public
   */
  SpotDatafeedSubscription?: SpotDatafeedSubscription | undefined;
}

/**
 * Contains the parameters for DescribeSpotFleetInstances.
 *
 * @public
 */
export interface DescribeSpotFleetInstancesRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the Spot Fleet request.
   *
   * @public
   */
  SpotFleetRequestId: string | undefined;

  /**
   * The token to include in another request to get the next page of items. This value is `null` when there are no more items to return.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see [Pagination](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination).
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Contains the output of DescribeSpotFleetInstances.
 *
 * @public
 */
export interface DescribeSpotFleetInstancesResponse {
  /**
   * The running instances. This list is refreshed periodically and might be out of date.
   *
   * @public
   */
  ActiveInstances?: ActiveInstance[] | undefined;

  /**
   * The token to include in another request to get the next page of items. This value is `null` when there are no more items to return.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The ID of the Spot Fleet request.
   *
   * @public
   */
  SpotFleetRequestId?: string | undefined;
}

/**
 * Contains the parameters for DescribeSpotFleetRequestHistory.
 *
 * @public
 */
export interface DescribeSpotFleetRequestHistoryRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the Spot Fleet request.
   *
   * @public
   */
  SpotFleetRequestId: string | undefined;

  /**
   * The type of events to describe. By default, all events are described.
   *
   * @public
   */
  EventType?: EventType | undefined;

  /**
   * The starting date and time for the events, in UTC format (for example, *YYYY*-*MM*-*DD*T*HH*:*MM*:*SS*Z).
   *
   * @public
   */
  StartTime: Date | undefined;

  /**
   * The token to include in another request to get the next page of items. This value is `null` when there are no more items to return.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see [Pagination](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination).
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Describes an event in the history of the Spot Fleet request.
 *
 * @public
 */
export interface HistoryRecord {
  /**
   * Information about the event.
   *
   * @public
   */
  EventInformation?: EventInformation | undefined;

  /**
   * The event type.
   *
   * - `error` - An error with the Spot Fleet request.
   * - `fleetRequestChange` - A change in the status or configuration of the Spot Fleet request.
   * - `instanceChange` - An instance was launched or terminated.
   * - `Information` - An informational event.
   *
   * @public
   */
  EventType?: EventType | undefined;

  /**
   * The date and time of the event, in UTC format (for example, *YYYY*-*MM*-*DD*T*HH*:*MM*:*SS*Z).
   *
   * @public
   */
  Timestamp?: Date | undefined;
}

/**
 * Contains the output of DescribeSpotFleetRequestHistory.
 *
 * @public
 */
export interface DescribeSpotFleetRequestHistoryResponse {
  /**
   * Information about the events in the history of the Spot Fleet request.
   *
   * @public
   */
  HistoryRecords?: HistoryRecord[] | undefined;

  /**
   * The last date and time for the events, in UTC format (for example, *YYYY*-*MM*-*DD*T*HH*:*MM*:*SS*Z). All records up to this time were retrieved.
   *
   * If `nextToken` indicates that there are more items, this value is not present.
   *
   * @public
   */
  LastEvaluatedTime?: Date | undefined;

  /**
   * The token to include in another request to get the next page of items. This value is `null` when there are no more items to return.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The ID of the Spot Fleet request.
   *
   * @public
   */
  SpotFleetRequestId?: string | undefined;

  /**
   * The starting date and time for the events, in UTC format (for example, *YYYY*-*MM*-*DD*T*HH*:*MM*:*SS*Z).
   *
   * @public
   */
  StartTime?: Date | undefined;
}

/**
 * Contains the parameters for DescribeSpotFleetRequests.
 *
 * @public
 */
export interface DescribeSpotFleetRequestsRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The IDs of the Spot Fleet requests.
   *
   * @public
   */
  SpotFleetRequestIds?: string[] | undefined;

  /**
   * The token to include in another request to get the next page of items. This value is `null` when there are no more items to return.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see [Pagination](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination).
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Describes whether monitoring is enabled.
 *
 * @public
 */
export interface SpotFleetMonitoring {
  /**
   * Enables monitoring for the instance.
   *
   * Default: `false`
   *
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * Describes a network interface.
 *
 * @public
 */
export interface InstanceNetworkInterfaceSpecification {
  /**
   * Indicates whether to assign a public IPv4 address to an instance you launch in a VPC. The public IP address can only be assigned to a network interface for eth0, and can only be assigned to a new network interface, not an existing one. You cannot specify more than one network interface in the request. If launching into a default subnet, the default value is `true`.
   *
   * Amazon Web Services charges for all public IPv4 addresses, including public IPv4 addresses associated with running instances and Elastic IP addresses. For more information, see the *Public IPv4 Address* tab on the [Amazon VPC pricing page](http://aws.amazon.com/vpc/pricing/).
   *
   * @public
   */
  AssociatePublicIpAddress?: boolean | undefined;

  /**
   * If set to `true`, the interface is deleted when the instance is terminated. You can specify `true` only if creating a new network interface when launching an instance.
   *
   * @public
   */
  DeleteOnTermination?: boolean | undefined;

  /**
   * The description of the network interface. Applies only if creating a network interface when launching an instance.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The position of the network interface in the attachment order. A primary network interface has a device index of 0.
   *
   * If you specify a network interface when launching an instance, you must specify the device index.
   *
   * @public
   */
  DeviceIndex?: number | undefined;

  /**
   * The IDs of the security groups for the network interface. Applies only if creating a network interface when launching an instance.
   *
   * @public
   */
  Groups?: string[] | undefined;

  /**
   * A number of IPv6 addresses to assign to the network interface. Amazon EC2 chooses the IPv6 addresses from the range of the subnet. You cannot specify this option and the option to assign specific IPv6 addresses in the same request. You can specify this option if you've specified a minimum number of instances to launch.
   *
   * @public
   */
  Ipv6AddressCount?: number | undefined;

  /**
   * The IPv6 addresses to assign to the network interface. You cannot specify this option and the option to assign a number of IPv6 addresses in the same request. You cannot specify this option if you've specified a minimum number of instances to launch.
   *
   * @public
   */
  Ipv6Addresses?: InstanceIpv6Address[] | undefined;

  /**
   * The ID of the network interface.
   *
   * If you are creating a Spot Fleet, omit this parameter because you can’t specify a network interface ID in a launch specification.
   *
   * @public
   */
  NetworkInterfaceId?: string | undefined;

  /**
   * The private IPv4 address of the network interface. Applies only if creating a network interface when launching an instance. You cannot specify this option if you're launching more than one instance in a [RunInstances](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RunInstances.html) request.
   *
   * @public
   */
  PrivateIpAddress?: string | undefined;

  /**
   * The private IPv4 addresses to assign to the network interface. Only one private IPv4 address can be designated as primary. You cannot specify this option if you're launching more than one instance in a [RunInstances](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RunInstances.html) request.
   *
   * @public
   */
  PrivateIpAddresses?: PrivateIpAddressSpecification[] | undefined;

  /**
   * The number of secondary private IPv4 addresses. You can’t specify this parameter and also specify a secondary private IP address using the `PrivateIpAddress` parameter.
   *
   * @public
   */
  SecondaryPrivateIpAddressCount?: number | undefined;

  /**
   * The ID of the subnet associated with the network interface. Applies only if creating a network interface when launching an instance.
   *
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * Indicates whether to assign a carrier IP address to the network interface.
   *
   * You can only assign a carrier IP address to a network interface that is in a subnet in a Wavelength Zone. For more information about carrier IP addresses, see [Carrier IP address](https://docs.aws.amazon.com/wavelength/latest/developerguide/how-wavelengths-work.html#provider-owned-ip) in the *Amazon Web Services Wavelength Developer Guide*.
   *
   * @public
   */
  AssociateCarrierIpAddress?: boolean | undefined;

  /**
   * The type of network interface.
   *
   * If you specify `efa-only`, do not assign any IP addresses to the network interface. EFA-only network interfaces do not support IP addresses.
   *
   * Valid values: `interface` | `efa` | `efa-only`
   *
   * @public
   */
  InterfaceType?: string | undefined;

  /**
   * The index of the network card. Some instance types support multiple network cards. The primary network interface must be assigned to network card index 0. The default is network card index 0.
   *
   * If you are using [RequestSpotInstances](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RequestSpotInstances.html) to create Spot Instances, omit this parameter because you can’t specify the network card index when using this API. To specify the network card index, use [RunInstances](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RunInstances.html).
   *
   * @public
   */
  NetworkCardIndex?: number | undefined;

  /**
   * The IPv4 delegated prefixes to be assigned to the network interface. You cannot use this option if you use the `Ipv4PrefixCount` option.
   *
   * @public
   */
  Ipv4Prefixes?: Ipv4PrefixSpecificationRequest[] | undefined;

  /**
   * The number of IPv4 delegated prefixes to be automatically assigned to the network interface. You cannot use this option if you use the `Ipv4Prefix` option.
   *
   * @public
   */
  Ipv4PrefixCount?: number | undefined;

  /**
   * The IPv6 delegated prefixes to be assigned to the network interface. You cannot use this option if you use the `Ipv6PrefixCount` option.
   *
   * @public
   */
  Ipv6Prefixes?: Ipv6PrefixSpecificationRequest[] | undefined;

  /**
   * The number of IPv6 delegated prefixes to be automatically assigned to the network interface. You cannot use this option if you use the `Ipv6Prefix` option.
   *
   * @public
   */
  Ipv6PrefixCount?: number | undefined;

  /**
   * The primary IPv6 address of the network interface. When you enable an IPv6 GUA address to be a primary IPv6, the first IPv6 GUA will be made the primary IPv6 address until the instance is terminated or the network interface is detached. For more information about primary IPv6 addresses, see [RunInstances](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RunInstances.html).
   *
   * @public
   */
  PrimaryIpv6?: boolean | undefined;

  /**
   * Specifies the ENA Express settings for the network interface that's attached to the instance.
   *
   * @public
   */
  EnaSrdSpecification?: EnaSrdSpecificationRequest | undefined;

  /**
   * A security group connection tracking specification that enables you to set the timeout for connection tracking on an Elastic network interface. For more information, see [Connection tracking timeouts](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/security-group-connection-tracking.html#connection-tracking-timeouts) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  ConnectionTrackingSpecification?: ConnectionTrackingSpecificationRequest | undefined;

  /**
   * The number of ENA queues to be created with the instance.
   *
   * @public
   */
  EnaQueueCount?: number | undefined;
}

/**
 * Describes Spot Instance placement.
 *
 * @public
 */
export interface SpotPlacement {
  /**
   * The Availability Zone. For example, `us-east-2a`.
   *
   * [Spot Fleet only] To specify multiple Availability Zones, separate them using commas; for example, "`us-east-2a`, `us-east-2b`".
   *
   * Either `AvailabilityZone` or `AvailabilityZoneId` must be specified in the request, but not both.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * The name of the placement group.
   *
   * @public
   */
  GroupName?: string | undefined;

  /**
   * The tenancy of the instance (if the instance is running in a VPC). An instance with a tenancy of `dedicated` runs on single-tenant hardware. The `host` tenancy is not supported for Spot Instances.
   *
   * @public
   */
  Tenancy?: Tenancy | undefined;

  /**
   * The ID of the Availability Zone. For example, `use2-az1`.
   *
   * [Spot Fleet only] To specify multiple Availability Zones, separate them using commas; for example, "`use2-az1`, `use2-bz1`".
   *
   * Either `AvailabilityZone` or `AvailabilityZoneId` must be specified in the request, but not both.
   *
   * @public
   */
  AvailabilityZoneId?: string | undefined;
}

/**
 * The tags for a Spot Fleet resource.
 *
 * @public
 */
export interface SpotFleetTagSpecification {
  /**
   * The type of resource. Currently, the only resource type that is supported is `instance`. To tag the Spot Fleet request on creation, use the `TagSpecifications` parameter in `SpotFleetRequestConfigData`.
   *
   * @public
   */
  ResourceType?: ResourceType | undefined;

  /**
   * The tags.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * Describes the launch specification for one or more Spot Instances. If you include On-Demand capacity in your fleet request or want to specify an EFA network device, you can't use `SpotFleetLaunchSpecification`; you must use [LaunchTemplateConfig](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_LaunchTemplateConfig.html).
 *
 * @public
 */
export interface SpotFleetLaunchSpecification {
  /**
   * Deprecated.
   *
   * @public
   */
  AddressingType?: string | undefined;

  /**
   * One or more block devices that are mapped to the Spot Instances. You can't specify both a snapshot ID and an encryption value. This is because only blank volumes can be encrypted on creation. If a snapshot is the basis for a volume, it is not blank and its encryption status is used for the volume encryption status.
   *
   * @public
   */
  BlockDeviceMappings?: BlockDeviceMapping[] | undefined;

  /**
   * Indicates whether the instances are optimized for EBS I/O. This optimization provides dedicated throughput to Amazon EBS and an optimized configuration stack to provide optimal EBS I/O performance. This optimization isn't available with all instance types. Additional usage charges apply when using an EBS Optimized instance.
   *
   * Default: `false`
   *
   * @public
   */
  EbsOptimized?: boolean | undefined;

  /**
   * The IAM instance profile.
   *
   * @public
   */
  IamInstanceProfile?: IamInstanceProfileSpecification | undefined;

  /**
   * The ID of the AMI.
   *
   * @public
   */
  ImageId?: string | undefined;

  /**
   * The instance type.
   *
   * @public
   */
  InstanceType?: _InstanceType | undefined;

  /**
   * The ID of the kernel.
   *
   * @public
   */
  KernelId?: string | undefined;

  /**
   * The name of the key pair.
   *
   * @public
   */
  KeyName?: string | undefined;

  /**
   * Enable or disable monitoring for the instances.
   *
   * @public
   */
  Monitoring?: SpotFleetMonitoring | undefined;

  /**
   * The network interfaces.
   *
   * > **Note:** `SpotFleetLaunchSpecification` does not support Elastic Fabric Adapter (EFA). You must use [LaunchTemplateConfig](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_LaunchTemplateConfig.html) instead.
   *
   * @public
   */
  NetworkInterfaces?: InstanceNetworkInterfaceSpecification[] | undefined;

  /**
   * The placement information.
   *
   * @public
   */
  Placement?: SpotPlacement | undefined;

  /**
   * The ID of the RAM disk. Some kernels require additional drivers at launch. Check the kernel requirements for information about whether you need to specify a RAM disk. To find kernel requirements, refer to the Amazon Web Services Resource Center and search for the kernel ID.
   *
   * @public
   */
  RamdiskId?: string | undefined;

  /**
   * The maximum price per unit hour that you are willing to pay for a Spot Instance. We do not recommend using this parameter because it can lead to increased interruptions. If you do not specify this parameter, you will pay the current Spot price.
   *
   * > **Important:** If you specify a maximum price, your instances will be interrupted more frequently than if you do not specify this parameter.
   *
   * @public
   */
  SpotPrice?: string | undefined;

  /**
   * The IDs of the subnets in which to launch the instances. To specify multiple subnets, separate them using commas; for example, "subnet-1234abcdeexample1, subnet-0987cdef6example2".
   *
   * If you specify a network interface, you must specify any subnets as part of the network interface instead of using this parameter.
   *
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * The base64-encoded user data that instances use when starting up. User data is limited to 16 KB.
   *
   * @public
   */
  UserData?: string | undefined;

  /**
   * The number of units provided by the specified instance type. These are the same units that you chose to set the target capacity in terms of instances, or a performance characteristic such as vCPUs, memory, or I/O.
   *
   * If the target capacity divided by this value is not a whole number, Amazon EC2 rounds the number of instances to the next whole number. If this value is not specified, the default is 1.
   *
   * > **Note:** When specifying weights, the price used in the `lowestPrice` and `priceCapacityOptimized` allocation strategies is per *unit* hour (where the instance price is divided by the specified weight). However, if all the specified weights are above the requested `TargetCapacity`, resulting in only 1 instance being launched, the price used is per *instance* hour.
   *
   * @public
   */
  WeightedCapacity?: number | undefined;

  /**
   * The tags to apply during creation.
   *
   * @public
   */
  TagSpecifications?: SpotFleetTagSpecification[] | undefined;

  /**
   * The attributes for the instance types. When you specify instance attributes, Amazon EC2 will identify instance types with those attributes.
   *
   * > **Note:** If you specify `InstanceRequirements`, you can't specify `InstanceType`.
   *
   * @public
   */
  InstanceRequirements?: InstanceRequirements | undefined;

  /**
   * The security groups.
   *
   * If you specify a network interface, you must specify any security groups as part of the network interface instead of using this parameter.
   *
   * @public
   */
  SecurityGroups?: GroupIdentifier[] | undefined;
}

/**
 * Describes overrides for a launch template.
 *
 * @public
 */
export interface LaunchTemplateOverrides {
  /**
   * The instance type.
   *
   * @public
   */
  InstanceType?: _InstanceType | undefined;

  /**
   * The maximum price per unit hour that you are willing to pay for a Spot Instance. We do not recommend using this parameter because it can lead to increased interruptions. If you do not specify this parameter, you will pay the current Spot price.
   *
   * > **Important:** If you specify a maximum price, your instances will be interrupted more frequently than if you do not specify this parameter.
   *
   * @public
   */
  SpotPrice?: string | undefined;

  /**
   * The ID of the subnet in which to launch the instances.
   *
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * The Availability Zone in which to launch the instances. For example, `us-east-2a`.
   *
   * Either `AvailabilityZone` or `AvailabilityZoneId` must be specified in the request, but not both.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * The number of units provided by the specified instance type. These are the same units that you chose to set the target capacity in terms of instances, or a performance characteristic such as vCPUs, memory, or I/O.
   *
   * If the target capacity divided by this value is not a whole number, Amazon EC2 rounds the number of instances to the next whole number. If this value is not specified, the default is 1.
   *
   * > **Note:** When specifying weights, the price used in the `lowestPrice` and `priceCapacityOptimized` allocation strategies is per *unit* hour (where the instance price is divided by the specified weight). However, if all the specified weights are above the requested `TargetCapacity`, resulting in only 1 instance being launched, the price used is per *instance* hour.
   *
   * @public
   */
  WeightedCapacity?: number | undefined;

  /**
   * The priority for the launch template override. The highest priority is launched first.
   *
   * If `OnDemandAllocationStrategy` is set to `prioritized`, Spot Fleet uses priority to determine which launch template override to use first in fulfilling On-Demand capacity.
   *
   * If the Spot `AllocationStrategy` is set to `capacityOptimizedPrioritized`, Spot Fleet uses priority on a best-effort basis to determine which launch template override to use in fulfilling Spot capacity, but optimizes for capacity first.
   *
   * Valid values are whole numbers starting at `0`. The lower the number, the higher the priority. If no number is set, the launch template override has the lowest priority. You can set the same priority for different launch template overrides.
   *
   * @public
   */
  Priority?: number | undefined;

  /**
   * The instance requirements. When you specify instance requirements, Amazon EC2 will identify instance types with the provided requirements, and then use your On-Demand and Spot allocation strategies to launch instances from these instance types, in the same way as when you specify a list of instance types.
   *
   * > **Note:** If you specify `InstanceRequirements`, you can't specify `InstanceType`.
   *
   * @public
   */
  InstanceRequirements?: InstanceRequirements | undefined;

  /**
   * The ID of the Availability Zone in which to launch the instances. For example, `use2-az1`.
   *
   * Either `AvailabilityZone` or `AvailabilityZoneId` must be specified in the request, but not both.
   *
   * @public
   */
  AvailabilityZoneId?: string | undefined;
}

/**
 * Describes a launch template and overrides.
 *
 * @public
 */
export interface LaunchTemplateConfig {
  /**
   * The launch template to use. Make sure that the launch template does not contain the `NetworkInterfaceId` parameter because you can't specify a network interface ID in a Spot Fleet.
   *
   * @public
   */
  LaunchTemplateSpecification?: FleetLaunchTemplateSpecification | undefined;

  /**
   * Any parameters that you specify override the same parameters in the launch template.
   *
   * @public
   */
  Overrides?: LaunchTemplateOverrides[] | undefined;
}

/**
 * Describes a Classic Load Balancer.
 *
 * @public
 */
export interface ClassicLoadBalancer {
  /**
   * The name of the load balancer.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * Describes the Classic Load Balancers to attach to a Spot Fleet. Spot Fleet registers the running Spot Instances with these Classic Load Balancers.
 *
 * @public
 */
export interface ClassicLoadBalancersConfig {
  /**
   * One or more Classic Load Balancers.
   *
   * @public
   */
  ClassicLoadBalancers?: ClassicLoadBalancer[] | undefined;
}

/**
 * Describes a load balancer target group.
 *
 * @public
 */
export interface TargetGroup {
  /**
   * The Amazon Resource Name (ARN) of the target group.
   *
   * @public
   */
  Arn?: string | undefined;
}

/**
 * Describes the target groups to attach to a Spot Fleet. Spot Fleet registers the running Spot Instances with these target groups.
 *
 * @public
 */
export interface TargetGroupsConfig {
  /**
   * One or more target groups.
   *
   * @public
   */
  TargetGroups?: TargetGroup[] | undefined;
}

/**
 * Describes the Classic Load Balancers and target groups to attach to a Spot Fleet request.
 *
 * @public
 */
export interface LoadBalancersConfig {
  /**
   * The Classic Load Balancers.
   *
   * @public
   */
  ClassicLoadBalancersConfig?: ClassicLoadBalancersConfig | undefined;

  /**
   * The target groups.
   *
   * @public
   */
  TargetGroupsConfig?: TargetGroupsConfig | undefined;
}

/**
 * The Spot Instance replacement strategy to use when Amazon EC2 emits a signal that your Spot Instance is at an elevated risk of being interrupted. For more information, see [Capacity rebalancing](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-fleet-capacity-rebalance.html) in the *Amazon EC2 User Guide*.
 *
 * @public
 */
export interface SpotCapacityRebalance {
  /**
   * The replacement strategy to use. Only available for fleets of type `maintain`.
   *
   * `launch` - Spot Fleet launches a new replacement Spot Instance when a rebalance notification is emitted for an existing Spot Instance in the fleet. Spot Fleet does not terminate the instances that receive a rebalance notification. You can terminate the old instances, or you can leave them running. You are charged for all instances while they are running.
   *
   * `launch-before-terminate` - Spot Fleet launches a new replacement Spot Instance when a rebalance notification is emitted for an existing Spot Instance in the fleet, and then, after a delay that you specify (in `TerminationDelay`), terminates the instances that received a rebalance notification.
   *
   * @public
   */
  ReplacementStrategy?: ReplacementStrategy | undefined;

  /**
   * The amount of time (in seconds) that Amazon EC2 waits before terminating the old Spot Instance after launching a new replacement Spot Instance.
   *
   * Required when `ReplacementStrategy` is set to `launch-before-terminate`.
   *
   * Not valid when `ReplacementStrategy` is set to `launch`.
   *
   * Valid values: Minimum value of `120` seconds. Maximum value of `7200` seconds.
   *
   * @public
   */
  TerminationDelay?: number | undefined;
}

/**
 * The strategies for managing your Spot Instances that are at an elevated risk of being interrupted.
 *
 * @public
 */
export interface SpotMaintenanceStrategies {
  /**
   * The Spot Instance replacement strategy to use when Amazon EC2 emits a signal that your Spot Instance is at an elevated risk of being interrupted. For more information, see [Capacity rebalancing](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-fleet-capacity-rebalance.html) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  CapacityRebalance?: SpotCapacityRebalance | undefined;
}

/**
 * Describes the configuration of a Spot Fleet request.
 *
 * @public
 */
export interface SpotFleetRequestConfigData {
  /**
   * The strategy that determines how to allocate the target Spot Instance capacity across the Spot Instance pools specified by the Spot Fleet launch configuration. For more information, see [Allocation strategies for Spot Instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-fleet-allocation-strategy.html) in the *Amazon EC2 User Guide*.
   *
   * - **priceCapacityOptimized (recommended)**
   *
   *   Spot Fleet identifies the pools with the highest capacity availability for the number of instances that are launching. This means that we will request Spot Instances from the pools that we believe have the lowest chance of interruption in the near term. Spot Fleet then requests Spot Instances from the lowest priced of these pools.
   *
   * - **capacityOptimized**
   *
   *   Spot Fleet identifies the pools with the highest capacity availability for the number of instances that are launching. This means that we will request Spot Instances from the pools that we believe have the lowest chance of interruption in the near term. To give certain instance types a higher chance of launching first, use `capacityOptimizedPrioritized`. Set a priority for each instance type by using the `Priority` parameter for `LaunchTemplateOverrides`. You can assign the same priority to different `LaunchTemplateOverrides`. EC2 implements the priorities on a best-effort basis, but optimizes for capacity first. `capacityOptimizedPrioritized` is supported only if your Spot Fleet uses a launch template. Note that if the `OnDemandAllocationStrategy` is set to `prioritized`, the same priority is applied when fulfilling On-Demand capacity.
   *
   * - **diversified**
   *
   *   Spot Fleet requests instances from all of the Spot Instance pools that you specify.
   *
   * - **lowestPrice (not recommended)**
   *
   *   > **Important:** We don't recommend the `lowestPrice` allocation strategy because it has the highest risk of interruption for your Spot Instances.
   *
   *   Spot Fleet requests instances from the lowest priced Spot Instance pool that has available capacity. If the lowest priced pool doesn't have available capacity, the Spot Instances come from the next lowest priced pool that has available capacity. If a pool runs out of capacity before fulfilling your desired capacity, Spot Fleet will continue to fulfill your request by drawing from the next lowest priced pool. To ensure that your desired capacity is met, you might receive Spot Instances from several pools. Because this strategy only considers instance price and not capacity availability, it might lead to high interruption rates.
   *
   * Default: `lowestPrice`
   *
   * @public
   */
  AllocationStrategy?: AllocationStrategy | undefined;

  /**
   * The order of the launch template overrides to use in fulfilling On-Demand capacity. If you specify `lowestPrice`, Spot Fleet uses price to determine the order, launching the lowest price first. If you specify `prioritized`, Spot Fleet uses the priority that you assign to each Spot Fleet launch template override, launching the highest priority first. If you do not specify a value, Spot Fleet defaults to `lowestPrice`.
   *
   * @public
   */
  OnDemandAllocationStrategy?: OnDemandAllocationStrategy | undefined;

  /**
   * The strategies for managing your Spot Instances that are at an elevated risk of being interrupted.
   *
   * @public
   */
  SpotMaintenanceStrategies?: SpotMaintenanceStrategies | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of your listings. This helps to avoid duplicate listings. For more information, see [Ensuring Idempotency](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html).
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * Indicates whether running instances should be terminated if you decrease the target capacity of the Spot Fleet request below the current size of the Spot Fleet.
   *
   * Supported only for fleets of type `maintain`.
   *
   * @public
   */
  ExcessCapacityTerminationPolicy?: ExcessCapacityTerminationPolicy | undefined;

  /**
   * The number of units fulfilled by this request compared to the set target capacity. You cannot set this value.
   *
   * @public
   */
  FulfilledCapacity?: number | undefined;

  /**
   * The number of On-Demand units fulfilled by this request compared to the set target On-Demand capacity.
   *
   * @public
   */
  OnDemandFulfilledCapacity?: number | undefined;

  /**
   * The Amazon Resource Name (ARN) of an Identity and Access Management (IAM) role that grants the Spot Fleet the permission to request, launch, terminate, and tag instances on your behalf. For more information, see [Spot Fleet prerequisites](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-fleet-requests.html#spot-fleet-prerequisites) in the *Amazon EC2 User Guide*. Spot Fleet can terminate Spot Instances on your behalf when you cancel its Spot Fleet request using [CancelSpotFleetRequests](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CancelSpotFleetRequests) or when the Spot Fleet request expires, if you set `TerminateInstancesWithExpiration`.
   *
   * @public
   */
  IamFleetRole: string | undefined;

  /**
   * The launch specifications for the Spot Fleet request. If you specify `LaunchSpecifications`, you can't specify `LaunchTemplateConfigs`. If you include On-Demand capacity in your request, you must use `LaunchTemplateConfigs`.
   *
   * > **Note:** If an AMI specified in a launch specification is deregistered or disabled, no new instances can be launched from the AMI. For fleets of type `maintain`, the target capacity will not be maintained.
   *
   * @public
   */
  LaunchSpecifications?: SpotFleetLaunchSpecification[] | undefined;

  /**
   * The launch template and overrides. If you specify `LaunchTemplateConfigs`, you can't specify `LaunchSpecifications`. If you include On-Demand capacity in your request, you must use `LaunchTemplateConfigs`.
   *
   * @public
   */
  LaunchTemplateConfigs?: LaunchTemplateConfig[] | undefined;

  /**
   * The maximum price per unit hour that you are willing to pay for a Spot Instance. We do not recommend using this parameter because it can lead to increased interruptions. If you do not specify this parameter, you will pay the current Spot price.
   *
   * > **Important:** If you specify a maximum price, your instances will be interrupted more frequently than if you do not specify this parameter.
   *
   * @public
   */
  SpotPrice?: string | undefined;

  /**
   * The number of units to request for the Spot Fleet. You can choose to set the target capacity in terms of instances or a performance characteristic that is important to your application workload, such as vCPUs, memory, or I/O. If the request type is `maintain`, you can specify a target capacity of 0 and add capacity later.
   *
   * @public
   */
  TargetCapacity: number | undefined;

  /**
   * The number of On-Demand units to request. You can choose to set the target capacity in terms of instances or a performance characteristic that is important to your application workload, such as vCPUs, memory, or I/O. If the request type is `maintain`, you can specify a target capacity of 0 and add capacity later.
   *
   * @public
   */
  OnDemandTargetCapacity?: number | undefined;

  /**
   * The maximum amount per hour for On-Demand Instances that you're willing to pay. You can use the `onDemandMaxTotalPrice` parameter, the `spotMaxTotalPrice` parameter, or both parameters to ensure that your fleet cost does not exceed your budget. If you set a maximum price per hour for the On-Demand Instances and Spot Instances in your request, Spot Fleet will launch instances until it reaches the maximum amount you're willing to pay. When the maximum amount you're willing to pay is reached, the fleet stops launching instances even if it hasn’t met the target capacity.
   *
   * > **Note:** If your fleet includes T instances that are configured as `unlimited`, and if their average CPU usage exceeds the baseline utilization, you will incur a charge for surplus credits. The `onDemandMaxTotalPrice` does not account for surplus credits, and, if you use surplus credits, your final cost might be higher than what you specified for `onDemandMaxTotalPrice`. For more information, see [Surplus credits can incur charges](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-performance-instances-unlimited-mode-concepts.html#unlimited-mode-surplus-credits) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  OnDemandMaxTotalPrice?: string | undefined;

  /**
   * The maximum amount per hour for Spot Instances that you're willing to pay. You can use the `spotMaxTotalPrice` parameter, the `onDemandMaxTotalPrice` parameter, or both parameters to ensure that your fleet cost does not exceed your budget. If you set a maximum price per hour for the On-Demand Instances and Spot Instances in your request, Spot Fleet will launch instances until it reaches the maximum amount you're willing to pay. When the maximum amount you're willing to pay is reached, the fleet stops launching instances even if it hasn’t met the target capacity.
   *
   * > **Note:** If your fleet includes T instances that are configured as `unlimited`, and if their average CPU usage exceeds the baseline utilization, you will incur a charge for surplus credits. The `spotMaxTotalPrice` does not account for surplus credits, and, if you use surplus credits, your final cost might be higher than what you specified for `spotMaxTotalPrice`. For more information, see [Surplus credits can incur charges](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-performance-instances-unlimited-mode-concepts.html#unlimited-mode-surplus-credits) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  SpotMaxTotalPrice?: string | undefined;

  /**
   * Indicates whether running Spot Instances are terminated when the Spot Fleet request expires.
   *
   * @public
   */
  TerminateInstancesWithExpiration?: boolean | undefined;

  /**
   * The type of request. Indicates whether the Spot Fleet only requests the target capacity or also attempts to maintain it. When this value is `request`, the Spot Fleet only places the required requests. It does not attempt to replenish Spot Instances if capacity is diminished, nor does it submit requests in alternative Spot pools if capacity is not available. When this value is `maintain`, the Spot Fleet maintains the target capacity. The Spot Fleet places the required requests to meet capacity and automatically replenishes any interrupted instances. Default: `maintain`. `instant` is listed but is not used by Spot Fleet.
   *
   * @public
   */
  Type?: FleetType | undefined;

  /**
   * The start date and time of the request, in UTC format (*YYYY*-*MM*-*DD*T*HH*:*MM*:*SS*Z). By default, Amazon EC2 starts fulfilling the request immediately.
   *
   * @public
   */
  ValidFrom?: Date | undefined;

  /**
   * The end date and time of the request, in UTC format (*YYYY*-*MM*-*DD*T*HH*:*MM*:*SS*Z). After the end date and time, no new Spot Instance requests are placed or able to fulfill the request. If no value is specified, the Spot Fleet request remains until you cancel it.
   *
   * @public
   */
  ValidUntil?: Date | undefined;

  /**
   * Indicates whether Spot Fleet should replace unhealthy instances.
   *
   * @public
   */
  ReplaceUnhealthyInstances?: boolean | undefined;

  /**
   * The behavior when a Spot Instance is interrupted. The default is `terminate`.
   *
   * @public
   */
  InstanceInterruptionBehavior?: InstanceInterruptionBehavior | undefined;

  /**
   * One or more Classic Load Balancers and target groups to attach to the Spot Fleet request. Spot Fleet registers the running Spot Instances with the specified Classic Load Balancers and target groups.
   *
   * With Network Load Balancers, Spot Fleet cannot register instances that have the following instance types: C1, CC1, CC2, CG1, CG2, CR1, CS1, G1, G2, HI1, HS1, M1, M2, M3, and T1.
   *
   * @public
   */
  LoadBalancersConfig?: LoadBalancersConfig | undefined;

  /**
   * The number of Spot pools across which to allocate your target Spot capacity. Valid only when Spot **AllocationStrategy** is set to `lowest-price`. Spot Fleet selects the cheapest Spot pools and evenly allocates your target Spot capacity across the number of Spot pools that you specify.
   *
   * Note that Spot Fleet attempts to draw Spot Instances from the number of pools that you specify on a best effort basis. If a pool runs out of Spot capacity before fulfilling your target capacity, Spot Fleet will continue to fulfill your request by drawing from the next cheapest pool. To ensure that your target capacity is met, you might receive Spot Instances from more than the number of pools that you specified. Similarly, if most of the pools have no Spot capacity, you might receive your full target capacity from fewer than the number of pools that you specified.
   *
   * @public
   */
  InstancePoolsToUseCount?: number | undefined;

  /**
   * Reserved.
   *
   * @public
   */
  Context?: string | undefined;

  /**
   * The unit for the target capacity. You can specify this parameter only when using attribute-based instance type selection.
   *
   * Default: `units` (the number of instances)
   *
   * @public
   */
  TargetCapacityUnitType?: TargetCapacityUnitType | undefined;

  /**
   * The key-value pair for tagging the Spot Fleet request on creation. The value for `ResourceType` must be `spot-fleet-request`, otherwise the Spot Fleet request fails. To tag instances at launch, specify the tags in the [launch template](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html#create-launch-template) (valid only if you use `LaunchTemplateConfigs`) or in the `SpotFleetTagSpecification` (valid only if you use `LaunchSpecifications`). For information about tagging after launch, see [Tag your resources](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html#tag-resources).
   *
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;
}

/**
 * Describes a Spot Fleet request.
 *
 * @public
 */
export interface SpotFleetRequestConfig {
  /**
   * The progress of the Spot Fleet request. If there is an error, the status is `error`. After all requests are placed, the status is `pending_fulfillment`. If the size of the fleet is equal to or greater than its target capacity, the status is `fulfilled`. If the size of the fleet is decreased, the status is `pending_termination` while Spot Instances are terminating.
   *
   * @public
   */
  ActivityStatus?: ActivityStatus | undefined;

  /**
   * The creation date and time of the request.
   *
   * @public
   */
  CreateTime?: Date | undefined;

  /**
   * The configuration of the Spot Fleet request.
   *
   * @public
   */
  SpotFleetRequestConfig?: SpotFleetRequestConfigData | undefined;

  /**
   * The ID of the Spot Fleet request.
   *
   * @public
   */
  SpotFleetRequestId?: string | undefined;

  /**
   * The state of the Spot Fleet request.
   *
   * @public
   */
  SpotFleetRequestState?: BatchState | undefined;

  /**
   * The tags for a Spot Fleet resource.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * Contains the output of DescribeSpotFleetRequests.
 *
 * @public
 */
export interface DescribeSpotFleetRequestsResponse {
  /**
   * The token to include in another request to get the next page of items. This value is `null` when there are no more items to return.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Information about the configuration of your Spot Fleet.
   *
   * @public
   */
  SpotFleetRequestConfigs?: SpotFleetRequestConfig[] | undefined;
}

/**
 * Contains the parameters for DescribeSpotInstanceRequests.
 *
 * @public
 */
export interface DescribeSpotInstanceRequestsRequest {
  /**
   * The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see [Pagination](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination).
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The IDs of the Spot Instance requests.
   *
   * @public
   */
  SpotInstanceRequestIds?: string[] | undefined;

  /**
   * The filters.
   *
   * - `availability-zone-group` - The Availability Zone group.
   * - `create-time` - The time stamp when the Spot Instance request was created.
   * - `fault-code` - The fault code related to the request.
   * - `fault-message` - The fault message related to the request.
   * - `instance-id` - The ID of the instance that fulfilled the request.
   * - `launch-group` - The Spot Instance launch group.
   * - `launch.block-device-mapping.delete-on-termination` - Indicates whether the EBS volume is deleted on instance termination.
   * - `launch.block-device-mapping.device-name` - The device name for the volume in the block device mapping (for example, `/dev/sdh` or `xvdh`).
   * - `launch.block-device-mapping.snapshot-id` - The ID of the snapshot for the EBS volume.
   * - `launch.block-device-mapping.volume-size` - The size of the EBS volume, in GiB.
   * - `launch.block-device-mapping.volume-type` - The type of EBS volume: `gp2` or `gp3` for General Purpose SSD, `io1` or `io2` for Provisioned IOPS SSD, `st1` for Throughput Optimized HDD, `sc1` for Cold HDD, or `standard` for Magnetic.
   * - `launch.group-id` - The ID of the security group for the instance.
   * - `launch.group-name` - The name of the security group for the instance.
   * - `launch.image-id` - The ID of the AMI.
   * - `launch.instance-type` - The type of instance (for example, `m3.medium`).
   * - `launch.kernel-id` - The kernel ID.
   * - `launch.key-name` - The name of the key pair the instance launched with.
   * - `launch.monitoring-enabled` - Whether detailed monitoring is enabled for the Spot Instance.
   * - `launch.ramdisk-id` - The RAM disk ID.
   * - `launched-availability-zone` - The Availability Zone in which the request is launched.
   * - `launched-availability-zone-id` - The ID of the Availability Zone in which the request is launched.
   * - `network-interface.addresses.primary` - Indicates whether the IP address is the primary private IP address.
   * - `network-interface.delete-on-termination` - Indicates whether the network interface is deleted when the instance is terminated.
   * - `network-interface.description` - A description of the network interface.
   * - `network-interface.device-index` - The index of the device for the network interface attachment on the instance.
   * - `network-interface.group-id` - The ID of the security group associated with the network interface.
   * - `network-interface.network-interface-id` - The ID of the network interface.
   * - `network-interface.private-ip-address` - The primary private IP address of the network interface.
   * - `network-interface.subnet-id` - The ID of the subnet for the instance.
   * - `product-description` - The product description associated with the instance (`Linux/UNIX` | `Windows`).
   * - `spot-instance-request-id` - The Spot Instance request ID.
   * - `spot-price` - The maximum hourly price for any Spot Instance launched to fulfill the request.
   * - `state` - The state of the Spot Instance request (`open` | `active` | `closed` | `cancelled` | `failed`). Spot request status information can help you track your Amazon EC2 Spot Instance requests. For more information, see [Spot request status](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-request-status.html) in the *Amazon EC2 User Guide*.
   * - `status-code` - The short code describing the most recent evaluation of your Spot Instance request.
   * - `status-message` - The message explaining the status of the Spot Instance request.
   * - `tag:<key>` - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key `Owner` and the value `TeamA`, specify `tag:Owner` for the filter name and `TeamA` for the filter value.
   * - `tag-key` - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.
   * - `type` - The type of Spot Instance request (`one-time` | `persistent`).
   * - `valid-from` - The start date of the request.
   * - `valid-until` - The end date of the request.
   *
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * Describes the monitoring of an instance.
 *
 * @public
 */
export interface RunInstancesMonitoringEnabled {
  /**
   * Indicates whether detailed monitoring is enabled. Otherwise, basic monitoring is enabled.
   *
   * @public
   */
  Enabled: boolean | undefined;
}

/**
 * Describes the launch specification for an instance.
 *
 * @public
 */
export interface LaunchSpecification {
  /**
   * The base64-encoded user data that instances use when starting up. User data is limited to 16 KB.
   *
   * @public
   */
  UserData?: string | undefined;

  /**
   * Deprecated.
   *
   * @public
   */
  AddressingType?: string | undefined;

  /**
   * The block device mapping entries.
   *
   * @public
   */
  BlockDeviceMappings?: BlockDeviceMapping[] | undefined;

  /**
   * Indicates whether the instance is optimized for EBS I/O. This optimization provides dedicated throughput to Amazon EBS and an optimized configuration stack to provide optimal EBS I/O performance. This optimization isn't available with all instance types. Additional usage charges apply when using an EBS Optimized instance.
   *
   * Default: `false`
   *
   * @public
   */
  EbsOptimized?: boolean | undefined;

  /**
   * The IAM instance profile.
   *
   * @public
   */
  IamInstanceProfile?: IamInstanceProfileSpecification | undefined;

  /**
   * The ID of the AMI.
   *
   * @public
   */
  ImageId?: string | undefined;

  /**
   * The instance type. Only one instance type can be specified.
   *
   * @public
   */
  InstanceType?: _InstanceType | undefined;

  /**
   * The ID of the kernel.
   *
   * @public
   */
  KernelId?: string | undefined;

  /**
   * The name of the key pair.
   *
   * @public
   */
  KeyName?: string | undefined;

  /**
   * The network interfaces. If you specify a network interface, you must specify subnet IDs and security group IDs using the network interface.
   *
   * @public
   */
  NetworkInterfaces?: InstanceNetworkInterfaceSpecification[] | undefined;

  /**
   * The placement information for the instance.
   *
   * @public
   */
  Placement?: SpotPlacement | undefined;

  /**
   * The ID of the RAM disk.
   *
   * @public
   */
  RamdiskId?: string | undefined;

  /**
   * The ID of the subnet in which to launch the instance.
   *
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * The IDs of the security groups.
   *
   * @public
   */
  SecurityGroups?: GroupIdentifier[] | undefined;

  /**
   * Describes the monitoring of an instance.
   *
   * @public
   */
  Monitoring?: RunInstancesMonitoringEnabled | undefined;
}

/**
 * Describes the status of a Spot Instance request.
 *
 * @public
 */
export interface SpotInstanceStatus {
  /**
   * The status code. For a list of status codes, see [Spot request status codes](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-request-status.html#spot-instance-request-status-understand) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  Code?: string | undefined;

  /**
   * The description for the status code.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The date and time of the most recent status update, in UTC format (for example, *YYYY*-*MM*-*DD*T*HH*:*MM*:*SS*Z).
   *
   * @public
   */
  UpdateTime?: Date | undefined;
}

/**
 * Describes a Spot Instance request.
 *
 * @public
 */
export interface SpotInstanceRequest {
  /**
   * Deprecated.
   *
   * @public
   */
  ActualBlockHourlyPrice?: string | undefined;

  /**
   * The Availability Zone group. If you specify the same Availability Zone group for all Spot Instance requests, all Spot Instances are launched in the same Availability Zone.
   *
   * @public
   */
  AvailabilityZoneGroup?: string | undefined;

  /**
   * Deprecated.
   *
   * @public
   */
  BlockDurationMinutes?: number | undefined;

  /**
   * The date and time when the Spot Instance request was created, in UTC format (for example, *YYYY*-*MM*-*DD*T*HH*:*MM*:*SS*Z).
   *
   * @public
   */
  CreateTime?: Date | undefined;

  /**
   * The fault codes for the Spot Instance request, if any.
   *
   * @public
   */
  Fault?: SpotInstanceStateFault | undefined;

  /**
   * The instance ID, if an instance has been launched to fulfill the Spot Instance request.
   *
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * The instance launch group. Launch groups are Spot Instances that launch together and terminate together.
   *
   * @public
   */
  LaunchGroup?: string | undefined;

  /**
   * Additional information for launching instances.
   *
   * @public
   */
  LaunchSpecification?: LaunchSpecification | undefined;

  /**
   * The Availability Zone in which the request is launched.
   *
   * Either `launchedAvailabilityZone` or `launchedAvailabilityZoneId` can be specified, but not both
   *
   * @public
   */
  LaunchedAvailabilityZone?: string | undefined;

  /**
   * The ID of the Availability Zone in which the request is launched.
   *
   * Either `launchedAvailabilityZone` or `launchedAvailabilityZoneId` can be specified, but not both
   *
   * @public
   */
  LaunchedAvailabilityZoneId?: string | undefined;

  /**
   * The product description associated with the Spot Instance.
   *
   * @public
   */
  ProductDescription?: RIProductDescription | undefined;

  /**
   * The ID of the Spot Instance request.
   *
   * @public
   */
  SpotInstanceRequestId?: string | undefined;

  /**
   * The maximum price per unit hour that you are willing to pay for a Spot Instance. We do not recommend using this parameter because it can lead to increased interruptions. If you do not specify this parameter, you will pay the current Spot price.
   *
   * > **Important:** If you specify a maximum price, your instances will be interrupted more frequently than if you do not specify this parameter.
   *
   * @public
   */
  SpotPrice?: string | undefined;

  /**
   * The state of the Spot Instance request. Spot request status information helps track your Spot Instance requests. For more information, see [Spot request status](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-request-status.html) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  State?: SpotInstanceState | undefined;

  /**
   * The status code and status message describing the Spot Instance request.
   *
   * @public
   */
  Status?: SpotInstanceStatus | undefined;

  /**
   * Any tags assigned to the resource.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The Spot Instance request type.
   *
   * @public
   */
  Type?: SpotInstanceType | undefined;

  /**
   * The start date of the request, in UTC format (for example, *YYYY*-*MM*-*DD*T*HH*:*MM*:*SS*Z). The request becomes active at this date and time.
   *
   * @public
   */
  ValidFrom?: Date | undefined;

  /**
   * The end date of the request, in UTC format (*YYYY*-*MM*-*DD*T*HH*:*MM*:*SS*Z).
   *
   * - For a persistent request, the request remains active until the `validUntil` date and time is reached. Otherwise, the request remains active until you cancel it.
   * - For a one-time request, the request remains active until all instances launch, the request is canceled, or the `validUntil` date and time is reached. By default, the request is valid for 7 days from the date the request was created.
   *
   * @public
   */
  ValidUntil?: Date | undefined;

  /**
   * The behavior when a Spot Instance is interrupted.
   *
   * @public
   */
  InstanceInterruptionBehavior?: InstanceInterruptionBehavior | undefined;
}

/**
 * Contains the output of DescribeSpotInstanceRequests.
 *
 * @public
 */
export interface DescribeSpotInstanceRequestsResult {
  /**
   * The Spot Instance requests.
   *
   * @public
   */
  SpotInstanceRequests?: SpotInstanceRequest[] | undefined;

  /**
   * The token to include in another request to get the next page of items. This value is `null` when there are no more items to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Contains the parameters for DescribeSpotPriceHistory.
 *
 * @public
 */
export interface DescribeSpotPriceHistoryRequest {
  /**
   * Filters the results by the specified ID of the Availability Zone.
   *
   * Either `AvailabilityZone` or `AvailabilityZoneId` can be specified, but not both
   *
   * @public
   */
  AvailabilityZoneId?: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The date and time, up to the past 90 days, from which to start retrieving the price history data, in UTC format (for example, *YYYY*-*MM*-*DD*T*HH*:*MM*:*SS*Z).
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The date and time, up to the current date, from which to stop retrieving the price history data, in UTC format (for example, *YYYY*-*MM*-*DD*T*HH*:*MM*:*SS*Z).
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * Filters the results by the specified instance types.
   *
   * @public
   */
  InstanceTypes?: _InstanceType[] | undefined;

  /**
   * Filters the results by the specified basic product descriptions.
   *
   * @public
   */
  ProductDescriptions?: string[] | undefined;

  /**
   * The filters.
   *
   * - `availability-zone` - The Availability Zone for which prices should be returned.
   * - `availability-zone-id` - The ID of the Availability Zone for which prices should be returned.
   * - `instance-type` - The type of instance (for example, `m3.medium`).
   * - `product-description` - The product description for the Spot price (`Linux/UNIX` | `Red Hat Enterprise Linux` | `SUSE Linux` | `Windows` | `Linux/UNIX (Amazon VPC)` | `Red Hat Enterprise Linux (Amazon VPC)` | `SUSE Linux (Amazon VPC)` | `Windows (Amazon VPC)`).
   * - `spot-price` - The Spot price. The value must match exactly (or use wildcards; greater than or less than comparison is not supported).
   * - `timestamp` - The time stamp of the Spot price history, in UTC format (for example, *ddd MMM dd HH*:*mm*:*ss* UTC *YYYY*). You can use wildcards (`*` and `?`). Greater than or less than comparison is not supported.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * Filters the results by the specified Availability Zone.
   *
   * Either `AvailabilityZone` or `AvailabilityZoneId` can be specified, but not both
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see [Pagination](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination).
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * The maximum price per unit hour that you are willing to pay for a Spot Instance. We do not recommend using this parameter because it can lead to increased interruptions. If you do not specify this parameter, you will pay the current Spot price.
 *
 * > **Important:** If you specify a maximum price, your instances will be interrupted more frequently than if you do not specify this parameter.
 *
 * @public
 */
export interface SpotPrice {
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
   * The instance type.
   *
   * @public
   */
  InstanceType?: _InstanceType | undefined;

  /**
   * A general description of the AMI.
   *
   * @public
   */
  ProductDescription?: RIProductDescription | undefined;

  /**
   * The maximum price per unit hour that you are willing to pay for a Spot Instance. We do not recommend using this parameter because it can lead to increased interruptions. If you do not specify this parameter, you will pay the current Spot price.
   *
   * > **Important:** If you specify a maximum price, your instances will be interrupted more frequently than if you do not specify this parameter.
   *
   * @public
   */
  SpotPrice?: string | undefined;

  /**
   * The date and time the request was created, in UTC format (for example, *YYYY*-*MM*-*DD*T*HH*:*MM*:*SS*Z).
   *
   * @public
   */
  Timestamp?: Date | undefined;
}

/**
 * Contains the output of DescribeSpotPriceHistory.
 *
 * @public
 */
export interface DescribeSpotPriceHistoryResult {
  /**
   * The token to include in another request to get the next page of items. This value is an empty string (`""`) or `null` when there are no more items to return.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The historical Spot prices.
   *
   * @public
   */
  SpotPriceHistory?: SpotPrice[] | undefined;
}

/**
 * @public
 */
export interface DescribeStaleSecurityGroupsRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see [Pagination](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination).
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The ID of the VPC.
   *
   * @public
   */
  VpcId: string | undefined;
}

/**
 * Describes a stale rule in a security group.
 *
 * @public
 */
export interface StaleIpPermission {
  /**
   * If the protocol is TCP or UDP, this is the start of the port range. If the protocol is ICMP or ICMPv6, this is the ICMP type or -1 (all ICMP types).
   *
   * @public
   */
  FromPort?: number | undefined;

  /**
   * The IP protocol name (`tcp`, `udp`, `icmp`, `icmpv6`) or number (see [Protocol Numbers)](http://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml).
   *
   * @public
   */
  IpProtocol?: string | undefined;

  /**
   * The IP ranges. Not applicable for stale security group rules.
   *
   * @public
   */
  IpRanges?: string[] | undefined;

  /**
   * The prefix list IDs. Not applicable for stale security group rules.
   *
   * @public
   */
  PrefixListIds?: string[] | undefined;

  /**
   * If the protocol is TCP or UDP, this is the end of the port range. If the protocol is ICMP or ICMPv6, this is the ICMP code or -1 (all ICMP codes).
   *
   * @public
   */
  ToPort?: number | undefined;

  /**
   * The security group pairs. Returns the ID of the referenced security group and VPC, and the ID and status of the VPC peering connection.
   *
   * @public
   */
  UserIdGroupPairs?: UserIdGroupPair[] | undefined;
}

/**
 * Describes a stale security group (a security group that contains stale rules).
 *
 * @public
 */
export interface StaleSecurityGroup {
  /**
   * The description of the security group.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The ID of the security group.
   *
   * @public
   */
  GroupId?: string | undefined;

  /**
   * The name of the security group.
   *
   * @public
   */
  GroupName?: string | undefined;

  /**
   * Information about the stale inbound rules in the security group.
   *
   * @public
   */
  StaleIpPermissions?: StaleIpPermission[] | undefined;

  /**
   * Information about the stale outbound rules in the security group.
   *
   * @public
   */
  StaleIpPermissionsEgress?: StaleIpPermission[] | undefined;

  /**
   * The ID of the VPC for the security group.
   *
   * @public
   */
  VpcId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeStaleSecurityGroupsResult {
  /**
   * The token to include in another request to get the next page of items. This value is `null` when there are no more items to return.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Information about the stale security groups.
   *
   * @public
   */
  StaleSecurityGroupSet?: StaleSecurityGroup[] | undefined;
}

/**
 * @public
 */
export interface DescribeStoreImageTasksRequest {
  /**
   * The AMI IDs for which to show progress. Up to 20 AMI IDs can be included in a request.
   *
   * @public
   */
  ImageIds?: string[] | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The filters.
   *
   * - `task-state` - Returns tasks in a certain state (`InProgress` | `Completed` | `Failed`)
   * - `bucket` - Returns task information for tasks that targeted a specific bucket. For the filter value, specify the bucket name.
   *
   * > **Note:** When you specify the `ImageIds` parameter, any filters that you specify are ignored. To use the filters, you must remove the `ImageIds` parameter.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see [Pagination](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination).
   *
   * You cannot specify this parameter and the `ImageIds` parameter in the same call.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * The information about the AMI store task, including the progress of the task.
 *
 * @public
 */
export interface StoreImageTaskResult {
  /**
   * The ID of the AMI that is being stored.
   *
   * @public
   */
  AmiId?: string | undefined;

  /**
   * The time the task started.
   *
   * @public
   */
  TaskStartTime?: Date | undefined;

  /**
   * The name of the Amazon S3 bucket that contains the stored AMI object.
   *
   * @public
   */
  Bucket?: string | undefined;

  /**
   * The name of the stored AMI object in the bucket.
   *
   * @public
   */
  S3objectKey?: string | undefined;

  /**
   * The progress of the task as a percentage.
   *
   * @public
   */
  ProgressPercentage?: number | undefined;

  /**
   * The state of the store task (`InProgress`, `Completed`, or `Failed`).
   *
   * @public
   */
  StoreTaskState?: string | undefined;

  /**
   * If the tasks fails, the reason for the failure is returned. If the task succeeds, `null` is returned.
   *
   * @public
   */
  StoreTaskFailureReason?: string | undefined;
}

/**
 * @public
 */
export interface DescribeStoreImageTasksResult {
  /**
   * The information about the AMI store tasks.
   *
   * @public
   */
  StoreImageTaskResults?: StoreImageTaskResult[] | undefined;

  /**
   * The token to include in another request to get the next page of items. This value is `null` when there are no more items to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeSubnetsRequest {
  /**
   * The filters.
   *
   * - `availability-zone` - The Availability Zone for the subnet. You can also use `availabilityZone` as the filter name.
   * - `availability-zone-id` - The ID of the Availability Zone for the subnet. You can also use `availabilityZoneId` as the filter name.
   * - `available-ip-address-count` - The number of IPv4 addresses in the subnet that are available.
   * - `cidr-block` - The IPv4 CIDR block of the subnet. The CIDR block you specify must exactly match the subnet's CIDR block for information to be returned for the subnet. You can also use `cidr` or `cidrBlock` as the filter names.
   * - `customer-owned-ipv4-pool` - The customer-owned IPv4 address pool associated with the subnet.
   * - `default-for-az` - Indicates whether this is the default subnet for the Availability Zone (`true` | `false`). You can also use `defaultForAz` as the filter name.
   * - `enable-dns64` - Indicates whether DNS queries made to the Amazon-provided DNS Resolver in this subnet should return synthetic IPv6 addresses for IPv4-only destinations.
   * - `enable-lni-at-device-index` - Indicates the device position for local network interfaces in this subnet. For example, `1` indicates local network interfaces in this subnet are the secondary network interface (eth1).
   * - `ipv6-cidr-block-association.ipv6-cidr-block` - An IPv6 CIDR block associated with the subnet.
   * - `ipv6-cidr-block-association.association-id` - An association ID for an IPv6 CIDR block associated with the subnet.
   * - `ipv6-cidr-block-association.state` - The state of an IPv6 CIDR block associated with the subnet.
   * - `ipv6-native` - Indicates whether this is an IPv6 only subnet (`true` | `false`).
   * - `map-customer-owned-ip-on-launch` - Indicates whether a network interface created in this subnet (including a network interface created by RunInstances) receives a customer-owned IPv4 address.
   * - `map-public-ip-on-launch` - Indicates whether instances launched in this subnet receive a public IPv4 address.
   * - `outpost-arn` - The Amazon Resource Name (ARN) of the Outpost.
   * - `owner-id` - The ID of the Amazon Web Services account that owns the subnet.
   * - `private-dns-name-options-on-launch.hostname-type` - The type of hostname to assign to instances in the subnet at launch. For IPv4-only and dual-stack (IPv4 and IPv6) subnets, an instance DNS name can be based on the instance IPv4 address (ip-name) or the instance ID (resource-name). For IPv6 only subnets, an instance DNS name must be based on the instance ID (resource-name).
   * - `private-dns-name-options-on-launch.enable-resource-name-dns-a-record` - Indicates whether to respond to DNS queries for instance hostnames with DNS A records.
   * - `private-dns-name-options-on-launch.enable-resource-name-dns-aaaa-record` - Indicates whether to respond to DNS queries for instance hostnames with DNS AAAA records.
   * - `state` - The state of the subnet (`pending` | `available`).
   * - `subnet-arn` - The Amazon Resource Name (ARN) of the subnet.
   * - `subnet-id` - The ID of the subnet.
   * - `tag` - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key `Owner` and the value `TeamA`, specify `tag:Owner` for the filter name and `TeamA` for the filter value.
   * - `tag-key` - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.
   * - `vpc-id` - The ID of the VPC for the subnet.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The IDs of the subnets.
   *
   * Default: Describes all your subnets.
   *
   * @public
   */
  SubnetIds?: string[] | undefined;

  /**
   * The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see [Pagination](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination).
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeSubnetsResult {
  /**
   * The token to include in another request to get the next page of items. This value is `null` when there are no more items to return.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Information about the subnets.
   *
   * @public
   */
  Subnets?: Subnet[] | undefined;
}

/**
 * @public
 */
export interface DescribeTagsRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The filters.
   *
   * - `key` - The tag key.
   * - `resource-id` - The ID of the resource.
   * - `resource-type` - The resource type. For a list of possible values, see [TagSpecification](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_TagSpecification.html).
   * - `tag`:<key> - The key/value combination of the tag. For example, specify "tag:Owner" for the filter name and "TeamA" for the filter value to find resources with the tag "Owner=TeamA".
   * - `value` - The tag value.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of items to return for this request. This value can be between 5 and 1000. To get the next page of items, make another request with the token returned in the output. For more information, see [Pagination](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination).
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Describes a tag.
 *
 * @public
 */
export interface TagDescription {
  /**
   * The tag key.
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * The ID of the resource.
   *
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * The resource type.
   *
   * @public
   */
  ResourceType?: ResourceType | undefined;

  /**
   * The tag value.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * @public
 */
export interface DescribeTagsResult {
  /**
   * The token to include in another request to get the next page of items. This value is `null` when there are no more items to return.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The tags.
   *
   * @public
   */
  Tags?: TagDescription[] | undefined;
}

/**
 * @public
 */
export interface DescribeTrafficMirrorFilterRulesRequest {
  /**
   * Traffic filter rule IDs.
   *
   * @public
   */
  TrafficMirrorFilterRuleIds?: string[] | undefined;

  /**
   * Traffic filter ID.
   *
   * @public
   */
  TrafficMirrorFilterId?: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * Traffic mirror filters.
   *
   * - `traffic-mirror-filter-rule-id`: The ID of the Traffic Mirror rule.
   * - `traffic-mirror-filter-id`: The ID of the filter that this rule is associated with.
   * - `rule-number`: The number of the Traffic Mirror rule.
   * - `rule-action`: The action taken on the filtered traffic. Possible actions are `accept` and `reject`.
   * - `traffic-direction`: The traffic direction. Possible directions are `ingress` and `egress`.
   * - `protocol`: The protocol, for example UDP, assigned to the Traffic Mirror rule.
   * - `source-cidr-block`: The source CIDR block assigned to the Traffic Mirror rule.
   * - `destination-cidr-block`: The destination CIDR block assigned to the Traffic Mirror rule.
   * - `description`: The description of the Traffic Mirror rule.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned `nextToken` value.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeTrafficMirrorFilterRulesResult {
  /**
   * Traffic mirror rules.
   *
   * @public
   */
  TrafficMirrorFilterRules?: TrafficMirrorFilterRule[] | undefined;

  /**
   * The token to use to retrieve the next page of results. The value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeTrafficMirrorFiltersRequest {
  /**
   * The ID of the Traffic Mirror filter.
   *
   * @public
   */
  TrafficMirrorFilterIds?: string[] | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * One or more filters. The possible values are:
   *
   * - `description`: The Traffic Mirror filter description.
   * - `traffic-mirror-filter-id`: The ID of the Traffic Mirror filter.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned `nextToken` value.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeTrafficMirrorFiltersResult {
  /**
   * Information about one or more Traffic Mirror filters.
   *
   * @public
   */
  TrafficMirrorFilters?: TrafficMirrorFilter[] | undefined;

  /**
   * The token to use to retrieve the next page of results. The value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeTrafficMirrorSessionsRequest {
  /**
   * The ID of the Traffic Mirror session.
   *
   * @public
   */
  TrafficMirrorSessionIds?: string[] | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * One or more filters. The possible values are:
   *
   * - `description`: The Traffic Mirror session description.
   * - `network-interface-id`: The ID of the Traffic Mirror session network interface.
   * - `owner-id`: The ID of the account that owns the Traffic Mirror session.
   * - `packet-length`: The assigned number of packets to mirror.
   * - `session-number`: The assigned session number.
   * - `traffic-mirror-filter-id`: The ID of the Traffic Mirror filter.
   * - `traffic-mirror-session-id`: The ID of the Traffic Mirror session.
   * - `traffic-mirror-target-id`: The ID of the Traffic Mirror target.
   * - `virtual-network-id`: The virtual network ID of the Traffic Mirror session.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned `nextToken` value.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeTrafficMirrorSessionsResult {
  /**
   * Describes one or more Traffic Mirror sessions. By default, all Traffic Mirror sessions are described. Alternatively, you can filter the results.
   *
   * @public
   */
  TrafficMirrorSessions?: TrafficMirrorSession[] | undefined;

  /**
   * The token to use to retrieve the next page of results. The value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeTrafficMirrorTargetsRequest {
  /**
   * The ID of the Traffic Mirror targets.
   *
   * @public
   */
  TrafficMirrorTargetIds?: string[] | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * One or more filters. The possible values are:
   *
   * - `description`: The Traffic Mirror target description.
   * - `network-interface-id`: The ID of the Traffic Mirror session network interface.
   * - `network-load-balancer-arn`: The Amazon Resource Name (ARN) of the Network Load Balancer that is associated with the session.
   * - `owner-id`: The ID of the account that owns the Traffic Mirror session.
   * - `traffic-mirror-target-id`: The ID of the Traffic Mirror target.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned `nextToken` value.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeTrafficMirrorTargetsResult {
  /**
   * Information about one or more Traffic Mirror targets.
   *
   * @public
   */
  TrafficMirrorTargets?: TrafficMirrorTarget[] | undefined;

  /**
   * The token to use to retrieve the next page of results. The value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeTransitGatewayAttachmentsRequest {
  /**
   * The IDs of the attachments.
   *
   * @public
   */
  TransitGatewayAttachmentIds?: string[] | undefined;

  /**
   * One or more filters. The possible values are:
   *
   * - `association.state` - The state of the association (`associating` | `associated` | `disassociating`).
   * - `association.transit-gateway-route-table-id` - The ID of the route table for the transit gateway.
   * - `resource-id` - The ID of the resource.
   * - `resource-owner-id` - The ID of the Amazon Web Services account that owns the resource.
   * - `resource-type` - The resource type. Valid values are `vpc` | `vpn` | `direct-connect-gateway` | `peering` | `connect`.
   * - `state` - The state of the attachment. Valid values are `available` | `deleted` | `deleting` | `failed` | `failing` | `initiatingRequest` | `modifying` | `pendingAcceptance` | `pending` | `rollingBack` | `rejected` | `rejecting`.
   * - `transit-gateway-attachment-id` - The ID of the attachment.
   * - `transit-gateway-id` - The ID of the transit gateway.
   * - `transit-gateway-owner-id` - The ID of the Amazon Web Services account that owns the transit gateway.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned `nextToken` value.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * Describes an association.
 *
 * @public
 */
export interface TransitGatewayAttachmentAssociation {
  /**
   * The ID of the route table for the transit gateway.
   *
   * @public
   */
  TransitGatewayRouteTableId?: string | undefined;

  /**
   * The ID of the transit gateway policy table associated with the attachment.
   *
   * @public
   */
  TransitGatewayPolicyTableId?: string | undefined;

  /**
   * The state of the association.
   *
   * @public
   */
  State?: TransitGatewayAssociationState | undefined;
}

/**
 * Describes an attachment between a resource and a transit gateway.
 *
 * @public
 */
export interface TransitGatewayAttachment {
  /**
   * The ID of the attachment.
   *
   * @public
   */
  TransitGatewayAttachmentId?: string | undefined;

  /**
   * The ID of the transit gateway.
   *
   * @public
   */
  TransitGatewayId?: string | undefined;

  /**
   * The ID of the Amazon Web Services account that owns the transit gateway.
   *
   * @public
   */
  TransitGatewayOwnerId?: string | undefined;

  /**
   * The ID of the Amazon Web Services account that owns the resource.
   *
   * @public
   */
  ResourceOwnerId?: string | undefined;

  /**
   * The resource type. Note that the `tgw-peering` resource type has been deprecated.
   *
   * @public
   */
  ResourceType?: TransitGatewayAttachmentResourceType | undefined;

  /**
   * The ID of the resource.
   *
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * The attachment state. Note that the `initiating` state has been deprecated.
   *
   * @public
   */
  State?: TransitGatewayAttachmentState | undefined;

  /**
   * The association.
   *
   * @public
   */
  Association?: TransitGatewayAttachmentAssociation | undefined;

  /**
   * The creation time.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The tags for the attachment.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The state of NAT gateway support for the attachment. Only the owner of the transit gateway receives this parameter.
   *
   * @public
   */
  NatGatewaySupport?: TransitGatewayAttachmentNatGatewaySupportState | undefined;
}

/**
 * @public
 */
export interface DescribeTransitGatewayAttachmentsResult {
  /**
   * Information about the attachments.
   *
   * @public
   */
  TransitGatewayAttachments?: TransitGatewayAttachment[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeTransitGatewayConnectPeersRequest {
  /**
   * The IDs of the Connect peers.
   *
   * @public
   */
  TransitGatewayConnectPeerIds?: string[] | undefined;

  /**
   * One or more filters. The possible values are:
   *
   * - `state` - The state of the Connect peer (`pending` | `available` | `deleting` | `deleted`).
   * - `transit-gateway-attachment-id` - The ID of the attachment.
   * - `transit-gateway-connect-peer-id` - The ID of the Connect peer.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned `nextToken` value.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeTransitGatewayConnectPeersResult {
  /**
   * Information about the Connect peers.
   *
   * @public
   */
  TransitGatewayConnectPeers?: TransitGatewayConnectPeer[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeTransitGatewayConnectsRequest {
  /**
   * The IDs of the attachments.
   *
   * @public
   */
  TransitGatewayAttachmentIds?: string[] | undefined;

  /**
   * One or more filters. The possible values are:
   *
   * - `options.protocol` - The tunnel protocol (`gre`).
   * - `state` - The state of the attachment (`initiating` | `initiatingRequest` | `pendingAcceptance` | `rollingBack` | `pending` | `available` | `modifying` | `deleting` | `deleted` | `failed` | `rejected` | `rejecting` | `failing`).
   * - `transit-gateway-attachment-id` - The ID of the Connect attachment.
   * - `transit-gateway-id` - The ID of the transit gateway.
   * - `transport-transit-gateway-attachment-id` - The ID of the transit gateway attachment from which the Connect attachment was created.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned `nextToken` value.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeTransitGatewayConnectsResult {
  /**
   * Information about the Connect attachments.
   *
   * @public
   */
  TransitGatewayConnects?: TransitGatewayConnect[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeTransitGatewayMeteringPoliciesRequest {
  /**
   * The IDs of the transit gateway metering policies to describe.
   *
   * @public
   */
  TransitGatewayMeteringPolicyIds?: string[] | undefined;

  /**
   * One or more filters to apply when describing transit gateway metering policies.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned `nextToken` value.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeTransitGatewayMeteringPoliciesResult {
  /**
   * Information about the transit gateway metering policies.
   *
   * @public
   */
  TransitGatewayMeteringPolicies?: TransitGatewayMeteringPolicy[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeTransitGatewayMulticastDomainsRequest {
  /**
   * The ID of the transit gateway multicast domain.
   *
   * @public
   */
  TransitGatewayMulticastDomainIds?: string[] | undefined;

  /**
   * One or more filters. The possible values are:
   *
   * - `state` - The state of the transit gateway multicast domain. Valid values are `pending` | `available` | `deleting` | `deleted`.
   * - `transit-gateway-id` - The ID of the transit gateway.
   * - `transit-gateway-multicast-domain-id` - The ID of the transit gateway multicast domain.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned `nextToken` value.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeTransitGatewayMulticastDomainsResult {
  /**
   * Information about the transit gateway multicast domains.
   *
   * @public
   */
  TransitGatewayMulticastDomains?: TransitGatewayMulticastDomain[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeTransitGatewayPeeringAttachmentsRequest {
  /**
   * One or more IDs of the transit gateway peering attachments.
   *
   * @public
   */
  TransitGatewayAttachmentIds?: string[] | undefined;

  /**
   * One or more filters. The possible values are:
   *
   * - `transit-gateway-attachment-id` - The ID of the transit gateway attachment.
   * - `local-owner-id` - The ID of your Amazon Web Services account.
   * - `remote-owner-id` - The ID of the Amazon Web Services account in the remote Region that owns the transit gateway.
   * - `state` - The state of the peering attachment. Valid values are `available` | `deleted` | `deleting` | `failed` | `failing` | `initiatingRequest` | `modifying` | `pendingAcceptance` | `pending` | `rollingBack` | `rejected` | `rejecting`).
   * - `tag`:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key `Owner` and the value `TeamA`, specify `tag:Owner` for the filter name and `TeamA` for the filter value.
   * - `tag-key` - The key of a tag assigned to the resource. Use this filter to find all resources that have a tag with a specific key, regardless of the tag value.
   * - `transit-gateway-id` - The ID of the transit gateway.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned `nextToken` value.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeTransitGatewayPeeringAttachmentsResult {
  /**
   * The transit gateway peering attachments.
   *
   * @public
   */
  TransitGatewayPeeringAttachments?: TransitGatewayPeeringAttachment[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeTransitGatewayPolicyTablesRequest {
  /**
   * The IDs of the transit gateway policy tables.
   *
   * @public
   */
  TransitGatewayPolicyTableIds?: string[] | undefined;

  /**
   * The filters associated with the transit gateway policy table.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned `nextToken` value.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeTransitGatewayPolicyTablesResult {
  /**
   * Describes the transit gateway policy tables.
   *
   * @public
   */
  TransitGatewayPolicyTables?: TransitGatewayPolicyTable[] | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeTransitGatewayRouteTableAnnouncementsRequest {
  /**
   * The IDs of the transit gateway route tables that are being advertised.
   *
   * @public
   */
  TransitGatewayRouteTableAnnouncementIds?: string[] | undefined;

  /**
   * The filters associated with the transit gateway policy table.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned `nextToken` value.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeTransitGatewayRouteTableAnnouncementsResult {
  /**
   * Describes the transit gateway route table announcement.
   *
   * @public
   */
  TransitGatewayRouteTableAnnouncements?: TransitGatewayRouteTableAnnouncement[] | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeTransitGatewayRouteTablesRequest {
  /**
   * The IDs of the transit gateway route tables.
   *
   * @public
   */
  TransitGatewayRouteTableIds?: string[] | undefined;

  /**
   * One or more filters. The possible values are:
   *
   * - `default-association-route-table` - Indicates whether this is the default association route table for the transit gateway (`true` | `false`).
   * - `default-propagation-route-table` - Indicates whether this is the default propagation route table for the transit gateway (`true` | `false`).
   * - `state` - The state of the route table (`available` | `deleting` | `deleted` | `pending`).
   * - `transit-gateway-id` - The ID of the transit gateway.
   * - `transit-gateway-route-table-id` - The ID of the transit gateway route table.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned `nextToken` value.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeTransitGatewayRouteTablesResult {
  /**
   * Information about the transit gateway route tables.
   *
   * @public
   */
  TransitGatewayRouteTables?: TransitGatewayRouteTable[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeTransitGatewaysRequest {
  /**
   * The IDs of the transit gateways.
   *
   * @public
   */
  TransitGatewayIds?: string[] | undefined;

  /**
   * One or more filters. The possible values are:
   *
   * - `options.propagation-default-route-table-id` - The ID of the default propagation route table.
   * - `options.amazon-side-asn` - The private ASN for the Amazon side of a BGP session.
   * - `options.association-default-route-table-id` - The ID of the default association route table.
   * - `options.auto-accept-shared-attachments` - Indicates whether there is automatic acceptance of attachment requests (`enable` | `disable`).
   * - `options.default-route-table-association` - Indicates whether resource attachments are automatically associated with the default association route table (`enable` | `disable`).
   * - `options.default-route-table-propagation` - Indicates whether resource attachments automatically propagate routes to the default propagation route table (`enable` | `disable`).
   * - `options.dns-support` - Indicates whether DNS support is enabled (`enable` | `disable`).
   * - `options.vpn-ecmp-support` - Indicates whether Equal Cost Multipath Protocol support is enabled (`enable` | `disable`).
   * - `owner-id` - The ID of the Amazon Web Services account that owns the transit gateway.
   * - `state` - The state of the transit gateway (`available` | `deleted` | `deleting` | `modifying` | `pending`).
   * - `transit-gateway-id` - The ID of the transit gateway.
   * - `tag-key`- The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key `Owner` and the value `TeamA`, specify `tag:Owner` for the filter name and `TeamA` for the filter value.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned `nextToken` value.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeTransitGatewaysResult {
  /**
   * Information about the transit gateways.
   *
   * @public
   */
  TransitGateways?: TransitGateway[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeTransitGatewayVpcAttachmentsRequest {
  /**
   * The IDs of the attachments.
   *
   * @public
   */
  TransitGatewayAttachmentIds?: string[] | undefined;

  /**
   * One or more filters. The possible values are:
   *
   * - `state` - The state of the attachment. Valid values are `available` | `deleted` | `deleting` | `failed` | `failing` | `initiatingRequest` | `modifying` | `pendingAcceptance` | `pending` | `rollingBack` | `rejected` | `rejecting`.
   * - `transit-gateway-attachment-id` - The ID of the attachment.
   * - `transit-gateway-id` - The ID of the transit gateway.
   * - `vpc-id` - The ID of the VPC.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned `nextToken` value.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeTransitGatewayVpcAttachmentsResult {
  /**
   * Information about the VPC attachments.
   *
   * @public
   */
  TransitGatewayVpcAttachments?: TransitGatewayVpcAttachment[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeTrunkInterfaceAssociationsRequest {
  /**
   * The IDs of the associations.
   *
   * @public
   */
  AssociationIds?: string[] | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * One or more filters.
   *
   * - `gre-key` - The ID of a trunk interface association.
   * - `interface-protocol` - The interface protocol. Valid values are `VLAN` and `GRE`.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned `nextToken` value.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface DescribeTrunkInterfaceAssociationsResult {
  /**
   * Information about the trunk associations.
   *
   * @public
   */
  InterfaceAssociations?: TrunkInterfaceAssociation[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeVerifiedAccessEndpointsRequest {
  /**
   * The ID of the Verified Access endpoint.
   *
   * @public
   */
  VerifiedAccessEndpointIds?: string[] | undefined;

  /**
   * The ID of the Verified Access instance.
   *
   * @public
   */
  VerifiedAccessInstanceId?: string | undefined;

  /**
   * The ID of the Verified Access group.
   *
   * @public
   */
  VerifiedAccessGroupId?: string | undefined;

  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned `nextToken` value.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * One or more filters. Filter names and values are case-sensitive.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeVerifiedAccessEndpointsResult {
  /**
   * Details about the Verified Access endpoints.
   *
   * @public
   */
  VerifiedAccessEndpoints?: VerifiedAccessEndpoint[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeVerifiedAccessGroupsRequest {
  /**
   * The ID of the Verified Access groups.
   *
   * @public
   */
  VerifiedAccessGroupIds?: string[] | undefined;

  /**
   * The ID of the Verified Access instance.
   *
   * @public
   */
  VerifiedAccessInstanceId?: string | undefined;

  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned `nextToken` value.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * One or more filters. Filter names and values are case-sensitive.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeVerifiedAccessGroupsResult {
  /**
   * Details about the Verified Access groups.
   *
   * @public
   */
  VerifiedAccessGroups?: VerifiedAccessGroup[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeVerifiedAccessInstanceLoggingConfigurationsRequest {
  /**
   * The IDs of the Verified Access instances.
   *
   * @public
   */
  VerifiedAccessInstanceIds?: string[] | undefined;

  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned `nextToken` value.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * One or more filters. Filter names and values are case-sensitive.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * Describes a log delivery status.
 *
 * @public
 */
export interface VerifiedAccessLogDeliveryStatus {
  /**
   * The status code.
   *
   * @public
   */
  Code?: VerifiedAccessLogDeliveryStatusCode | undefined;

  /**
   * The status message.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * Options for CloudWatch Logs as a logging destination.
 *
 * @public
 */
export interface VerifiedAccessLogCloudWatchLogsDestination {
  /**
   * Indicates whether logging is enabled.
   *
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * The delivery status for access logs.
   *
   * @public
   */
  DeliveryStatus?: VerifiedAccessLogDeliveryStatus | undefined;

  /**
   * The ID of the CloudWatch Logs log group.
   *
   * @public
   */
  LogGroup?: string | undefined;
}

/**
 * Options for Kinesis as a logging destination.
 *
 * @public
 */
export interface VerifiedAccessLogKinesisDataFirehoseDestination {
  /**
   * Indicates whether logging is enabled.
   *
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * The delivery status.
   *
   * @public
   */
  DeliveryStatus?: VerifiedAccessLogDeliveryStatus | undefined;

  /**
   * The ID of the delivery stream.
   *
   * @public
   */
  DeliveryStream?: string | undefined;
}

/**
 * Options for Amazon S3 as a logging destination.
 *
 * @public
 */
export interface VerifiedAccessLogS3Destination {
  /**
   * Indicates whether logging is enabled.
   *
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * The delivery status.
   *
   * @public
   */
  DeliveryStatus?: VerifiedAccessLogDeliveryStatus | undefined;

  /**
   * The bucket name.
   *
   * @public
   */
  BucketName?: string | undefined;

  /**
   * The bucket prefix.
   *
   * @public
   */
  Prefix?: string | undefined;

  /**
   * The Amazon Web Services account number that owns the bucket.
   *
   * @public
   */
  BucketOwner?: string | undefined;
}

/**
 * Describes the options for Verified Access logs.
 *
 * @public
 */
export interface VerifiedAccessLogs {
  /**
   * Amazon S3 logging options.
   *
   * @public
   */
  S3?: VerifiedAccessLogS3Destination | undefined;

  /**
   * CloudWatch Logs logging destination.
   *
   * @public
   */
  CloudWatchLogs?: VerifiedAccessLogCloudWatchLogsDestination | undefined;

  /**
   * Kinesis logging destination.
   *
   * @public
   */
  KinesisDataFirehose?: VerifiedAccessLogKinesisDataFirehoseDestination | undefined;

  /**
   * The log version.
   *
   * @public
   */
  LogVersion?: string | undefined;

  /**
   * Indicates whether trust data is included in the logs.
   *
   * @public
   */
  IncludeTrustContext?: boolean | undefined;
}

/**
 * Describes logging options for an Amazon Web Services Verified Access instance.
 *
 * @public
 */
export interface VerifiedAccessInstanceLoggingConfiguration {
  /**
   * The ID of the Amazon Web Services Verified Access instance.
   *
   * @public
   */
  VerifiedAccessInstanceId?: string | undefined;

  /**
   * Details about the logging options.
   *
   * @public
   */
  AccessLogs?: VerifiedAccessLogs | undefined;
}

/**
 * @public
 */
export interface DescribeVerifiedAccessInstanceLoggingConfigurationsResult {
  /**
   * The logging configuration for the Verified Access instances.
   *
   * @public
   */
  LoggingConfigurations?: VerifiedAccessInstanceLoggingConfiguration[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeVerifiedAccessInstancesRequest {
  /**
   * The IDs of the Verified Access instances.
   *
   * @public
   */
  VerifiedAccessInstanceIds?: string[] | undefined;

  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned `nextToken` value.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * One or more filters. Filter names and values are case-sensitive.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeVerifiedAccessInstancesResult {
  /**
   * Details about the Verified Access instances.
   *
   * @public
   */
  VerifiedAccessInstances?: VerifiedAccessInstance[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeVerifiedAccessTrustProvidersRequest {
  /**
   * The IDs of the Verified Access trust providers.
   *
   * @public
   */
  VerifiedAccessTrustProviderIds?: string[] | undefined;

  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned `nextToken` value.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * One or more filters. Filter names and values are case-sensitive.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeVerifiedAccessTrustProvidersResult {
  /**
   * Details about the Verified Access trust providers.
   *
   * @public
   */
  VerifiedAccessTrustProviders?: VerifiedAccessTrustProvider[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeVolumeAttributeRequest {
  /**
   * The attribute of the volume. This parameter is required.
   *
   * @public
   */
  Attribute: VolumeAttributeName | undefined;

  /**
   * The ID of the volume.
   *
   * @public
   */
  VolumeId: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeVolumeAttributeResult {
  /**
   * The state of `autoEnableIO` attribute.
   *
   * @public
   */
  AutoEnableIO?: AttributeBooleanValue | undefined;

  /**
   * A list of product codes.
   *
   * @public
   */
  ProductCodes?: ProductCode[] | undefined;

  /**
   * The ID of the volume.
   *
   * @public
   */
  VolumeId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeVolumesRequest {
  /**
   * The volume IDs. If not specified, then all volumes are included in the response.
   *
   * @public
   */
  VolumeIds?: string[] | undefined;

  /**
   * Indicates whether to include managed resources in the output. If this parameter is set to `true`, the output includes resources that are managed by Amazon Web Services services, even if managed resource visibility is set to hidden.
   *
   * @public
   */
  IncludeManagedResources?: boolean | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The filters.
   *
   * - `attachment.attach-time` - The time stamp when the attachment initiated.
   * - `attachment.delete-on-termination` - Whether the volume is deleted on instance termination.
   * - `attachment.device` - The device name specified in the block device mapping (for example, `/dev/sda1`).
   * - `attachment.instance-id` - The ID of the instance the volume is attached to.
   * - `attachment.status` - The attachment state (`attaching` | `attached` | `detaching`).
   * - `availability-zone` - The Availability Zone in which the volume was created.
   * - `availability-zone-id` - The ID of the Availability Zone in which the volume was created.
   * - `create-time` - The time stamp when the volume was created.
   * - `encrypted` - Indicates whether the volume is encrypted (`true` | `false`)
   * - `fast-restored` - Indicates whether the volume was created from a snapshot that is enabled for fast snapshot restore (`true` | `false`).
   * - `multi-attach-enabled` - Indicates whether the volume is enabled for Multi-Attach (`true` | `false`)
   * - `operator.managed` - A Boolean that indicates whether this is a managed volume.
   * - `operator.principal` - The principal that manages the volume. Only valid for managed volumes, where `managed` is `true`.
   * - `size` - The size of the volume, in GiB.
   * - `snapshot-id` - The snapshot from which the volume was created.
   * - `status` - The state of the volume (`creating` | `available` | `in-use` | `deleting` | `deleted` | `error`).
   * - `tag`:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key `Owner` and the value `TeamA`, specify `tag:Owner` for the filter name and `TeamA` for the filter value.
   * - `tag-key` - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.
   * - `volume-id` - The volume ID.
   * - `volume-type` - The Amazon EBS volume type (`gp2` | `gp3` | `io1` | `io2` | `st1` | `sc1`| `standard`)
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see [Pagination](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination).
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface DescribeVolumesResult {
  /**
   * The token to include in another request to get the next page of items. This value is `null` when there are no more items to return.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Information about the volumes.
   *
   * @public
   */
  Volumes?: Volume[] | undefined;
}

/**
 * @public
 */
export interface DescribeVolumesModificationsRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The IDs of the volumes.
   *
   * @public
   */
  VolumeIds?: string[] | undefined;

  /**
   * The filters.
   *
   * - `modification-state` - The current modification state (modifying | optimizing | completed | failed).
   * - `original-iops` - The original IOPS rate of the volume.
   * - `original-size` - The original size of the volume, in GiB.
   * - `original-volume-type` - The original volume type of the volume (standard | io1 | io2 | gp2 | sc1 | st1).
   * - `originalMultiAttachEnabled` - Indicates whether Multi-Attach support was enabled (true | false).
   * - `start-time` - The modification start time.
   * - `target-iops` - The target IOPS rate of the volume.
   * - `target-size` - The target size of the volume, in GiB.
   * - `target-volume-type` - The target volume type of the volume (standard | io1 | io2 | gp2 | sc1 | st1).
   * - `targetMultiAttachEnabled` - Indicates whether Multi-Attach support is to be enabled (true | false).
   * - `volume-id` - The ID of the volume.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results (up to a limit of 500) to be returned in a paginated request. For more information, see [Pagination](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination).
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Indicates whether to include managed resources in the output. If this parameter is set to `true`, the output includes resources that are managed by Amazon Web Services services, even if managed resource visibility is set to hidden.
   *
   * @public
   */
  IncludeManagedResources?: boolean | undefined;
}

/**
 * Describes the modification status of an EBS volume.
 *
 * @public
 */
export interface VolumeModification {
  /**
   * The ID of the volume.
   *
   * @public
   */
  VolumeId?: string | undefined;

  /**
   * The current modification state.
   *
   * @public
   */
  ModificationState?: VolumeModificationState | undefined;

  /**
   * A status message about the modification progress or failure.
   *
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * The target size of the volume, in GiB.
   *
   * @public
   */
  TargetSize?: number | undefined;

  /**
   * The target IOPS rate of the volume.
   *
   * @public
   */
  TargetIops?: number | undefined;

  /**
   * The target EBS volume type of the volume.
   *
   * @public
   */
  TargetVolumeType?: VolumeType | undefined;

  /**
   * The target throughput of the volume, in MiB/s.
   *
   * @public
   */
  TargetThroughput?: number | undefined;

  /**
   * The target setting for Amazon EBS Multi-Attach.
   *
   * @public
   */
  TargetMultiAttachEnabled?: boolean | undefined;

  /**
   * The original size of the volume, in GiB.
   *
   * @public
   */
  OriginalSize?: number | undefined;

  /**
   * The original IOPS rate of the volume.
   *
   * @public
   */
  OriginalIops?: number | undefined;

  /**
   * The original EBS volume type of the volume.
   *
   * @public
   */
  OriginalVolumeType?: VolumeType | undefined;

  /**
   * The original throughput of the volume, in MiB/s.
   *
   * @public
   */
  OriginalThroughput?: number | undefined;

  /**
   * The original setting for Amazon EBS Multi-Attach.
   *
   * @public
   */
  OriginalMultiAttachEnabled?: boolean | undefined;

  /**
   * The modification progress, from 0 to 100 percent complete.
   *
   * @public
   */
  Progress?: number | undefined;

  /**
   * The modification start time.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The modification completion or failure time.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * The service provider that manages the resource.
   *
   * @public
   */
  Operator?: OperatorResponse | undefined;
}

/**
 * @public
 */
export interface DescribeVolumesModificationsResult {
  /**
   * The token to include in another request to get the next page of items. This value is `null` when there are no more items to return.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Information about the volume modifications.
   *
   * @public
   */
  VolumesModifications?: VolumeModification[] | undefined;
}

/**
 * @public
 */
export interface DescribeVolumeStatusRequest {
  /**
   * The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see [Pagination](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination).
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The IDs of the volumes.
   *
   * Default: Describes all your volumes.
   *
   * @public
   */
  VolumeIds?: string[] | undefined;

  /**
   * Indicates whether to include managed resources in the output. If this parameter is set to `true`, the output includes resources that are managed by Amazon Web Services services, even if managed resource visibility is set to hidden.
   *
   * @public
   */
  IncludeManagedResources?: boolean | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The filters.
   *
   * - `action.code` - The action code for the event (for example, `enable-volume-io`).
   * - `action.description` - A description of the action.
   * - `action.event-id` - The event ID associated with the action.
   * - `availability-zone` - The Availability Zone of the instance.
   * - `event.description` - A description of the event.
   * - `event.event-id` - The event ID.
   * - `event.event-type` - The event type (for `io-enabled`: `passed` | `failed`; for `io-performance`: `io-performance:degraded` | `io-performance:severely-degraded` | `io-performance:stalled`).
   * - `event.not-after` - The latest end time for the event.
   * - `event.not-before` - The earliest start time for the event.
   * - `volume-status.details-name` - The cause for `volume-status.status` (`io-enabled` | `io-performance`).
   * - `volume-status.details-status` - The status of `volume-status.details-name` (for `io-enabled`: `passed` | `failed`; for `io-performance`: `normal` | `degraded` | `severely-degraded` | `stalled`).
   * - `volume-status.status` - The status of the volume (`ok` | `impaired` | `warning` | `insufficient-data`).
   *
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * Describes a volume status operation code.
 *
 * @public
 */
export interface VolumeStatusAction {
  /**
   * The code identifying the operation, for example, `enable-volume-io`.
   *
   * @public
   */
  Code?: string | undefined;

  /**
   * A description of the operation.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The ID of the event associated with this operation.
   *
   * @public
   */
  EventId?: string | undefined;

  /**
   * The event type associated with this operation.
   *
   * @public
   */
  EventType?: string | undefined;
}

/**
 * Information about the instances to which the volume is attached.
 *
 * @public
 */
export interface VolumeStatusAttachmentStatus {
  /**
   * The maximum IOPS supported by the attached instance.
   *
   * @public
   */
  IoPerformance?: string | undefined;

  /**
   * The ID of the attached instance.
   *
   * @public
   */
  InstanceId?: string | undefined;
}

/**
 * Describes a volume status event.
 *
 * @public
 */
export interface VolumeStatusEvent {
  /**
   * A description of the event.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The ID of this event.
   *
   * @public
   */
  EventId?: string | undefined;

  /**
   * The type of this event.
   *
   * @public
   */
  EventType?: string | undefined;

  /**
   * The latest end time of the event.
   *
   * @public
   */
  NotAfter?: Date | undefined;

  /**
   * The earliest start time of the event.
   *
   * @public
   */
  NotBefore?: Date | undefined;

  /**
   * The ID of the instance associated with the event.
   *
   * @public
   */
  InstanceId?: string | undefined;
}

/**
 * Information about the volume initialization. For more information, see [Initialize Amazon EBS volumes](https://docs.aws.amazon.com/ebs/latest/userguide/initalize-volume.html).
 *
 * @public
 */
export interface InitializationStatusDetails {
  /**
   * The method used for volume initialization. Possible values include:
   *
   * - `default` - Volume initialized using the default volume initialization rate or fast snapshot restore.
   * - `provisioned-rate` - Volume initialized using an Amazon EBS Provisioned Rate for Volume Initialization.
   * - `volume-copy` - Volume copy initialized at the rate for volume copies.
   *
   * @public
   */
  InitializationType?: InitializationType | undefined;

  /**
   * The current volume initialization progress as a percentage (0-100). Returns `100` when volume initialization has completed.
   *
   * @public
   */
  Progress?: number | undefined;

  /**
   * The estimated remaining time, in seconds, for volume initialization to complete. Returns `0` when volume initialization has completed.
   *
   * Only available for volumes created with Amazon EBS Provisioned Rate for Volume Initialization.
   *
   * @public
   */
  EstimatedTimeToCompleteInSeconds?: number | undefined;
}

/**
 * Describes a volume status.
 *
 * @public
 */
export interface VolumeStatusDetails {
  /**
   * The name of the volume status.
   *
   * - `io-enabled` - Indicates the volume I/O status. For more information, see [Amazon EBS volume status checks](https://docs.aws.amazon.com/ebs/latest/userguide/monitoring-volume-checks.html).
   * - `io-performance` - Indicates the volume performance status. For more information, see [Amazon EBS volume status checks](https://docs.aws.amazon.com/ebs/latest/userguide/monitoring-volume-checks.html).
   * - `initialization-state` - Indicates the status of the volume initialization process. For more information, see [Initialize Amazon EBS volumes](https://docs.aws.amazon.com/ebs/latest/userguide/initalize-volume.html).
   *
   * @public
   */
  Name?: VolumeStatusName | undefined;

  /**
   * The intended status of the volume status.
   *
   * @public
   */
  Status?: string | undefined;
}

/**
 * Describes the status of a volume.
 *
 * @public
 */
export interface VolumeStatusInfo {
  /**
   * The details of the volume status.
   *
   * @public
   */
  Details?: VolumeStatusDetails[] | undefined;

  /**
   * The status of the volume.
   *
   * @public
   */
  Status?: VolumeStatusInfoStatus | undefined;
}

/**
 * Describes the volume status.
 *
 * @public
 */
export interface VolumeStatusItem {
  /**
   * The details of the operation.
   *
   * @public
   */
  Actions?: VolumeStatusAction[] | undefined;

  /**
   * The Availability Zone of the volume.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Outpost.
   *
   * @public
   */
  OutpostArn?: string | undefined;

  /**
   * A list of events associated with the volume.
   *
   * @public
   */
  Events?: VolumeStatusEvent[] | undefined;

  /**
   * The volume ID.
   *
   * @public
   */
  VolumeId?: string | undefined;

  /**
   * The volume status.
   *
   * @public
   */
  VolumeStatus?: VolumeStatusInfo | undefined;

  /**
   * Information about the instances to which the volume is attached.
   *
   * @public
   */
  AttachmentStatuses?: VolumeStatusAttachmentStatus[] | undefined;

  /**
   * Information about the volume initialization. It can take up to 5 minutes for the volume initialization information to be updated.
   *
   * Only available for volumes created from snapshots. Not available for empty volumes created without a snapshot.
   *
   * For more information, see [Initialize Amazon EBS volumes](https://docs.aws.amazon.com/ebs/latest/userguide/initalize-volume.html).
   *
   * @public
   */
  InitializationStatusDetails?: InitializationStatusDetails | undefined;

  /**
   * The ID of the Availability Zone.
   *
   * @public
   */
  AvailabilityZoneId?: string | undefined;

  /**
   * The service provider that manages the resource.
   *
   * @public
   */
  Operator?: OperatorResponse | undefined;
}

/**
 * @public
 */
export interface DescribeVolumeStatusResult {
  /**
   * The token to include in another request to get the next page of items. This value is `null` when there are no more items to return.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Information about the status of the volumes.
   *
   * @public
   */
  VolumeStatuses?: VolumeStatusItem[] | undefined;
}

/**
 * @public
 */
export interface DescribeVpcAttributeRequest {
  /**
   * The VPC attribute.
   *
   * @public
   */
  Attribute: VpcAttributeName | undefined;

  /**
   * The ID of the VPC.
   *
   * @public
   */
  VpcId: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeVpcAttributeResult {
  /**
   * Indicates whether the instances launched in the VPC get DNS hostnames. If this attribute is `true`, instances in the VPC get DNS hostnames; otherwise, they do not.
   *
   * @public
   */
  EnableDnsHostnames?: AttributeBooleanValue | undefined;

  /**
   * Indicates whether DNS resolution is enabled for the VPC. If this attribute is `true`, the Amazon DNS server resolves DNS hostnames for your instances to their corresponding IP addresses; otherwise, it does not.
   *
   * @public
   */
  EnableDnsSupport?: AttributeBooleanValue | undefined;

  /**
   * Indicates whether Network Address Usage metrics are enabled for your VPC.
   *
   * @public
   */
  EnableNetworkAddressUsageMetrics?: AttributeBooleanValue | undefined;

  /**
   * The ID of the VPC.
   *
   * @public
   */
  VpcId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeVpcBlockPublicAccessExclusionsRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * Filters for the request:
   *
   * - `resource-arn` - The Amazon Resource Name (ARN) of a exclusion.
   * - `internet-gateway-exclusion-mode` - The mode of a VPC BPA exclusion. Possible values: `allow-bidirectional | allow-egress`.
   * - `state` - The state of VPC BPA. Possible values: `create-in-progress | create-complete | update-in-progress | update-complete | delete-in-progress | deleted-complete | disable-in-progress | disable-complete`
   * - `tag` - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key `Owner` and the value `TeamA`, specify `tag:Owner` for the filter name and `TeamA` for the filter value.
   * - `tag-key` - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.
   * - `tag-value`: The value of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific value, regardless of the tag key.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * IDs of exclusions.
   *
   * @public
   */
  ExclusionIds?: string[] | undefined;

  /**
   * The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see [Pagination](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination).
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface DescribeVpcBlockPublicAccessExclusionsResult {
  /**
   * Details related to the exclusions.
   *
   * @public
   */
  VpcBlockPublicAccessExclusions?: VpcBlockPublicAccessExclusion[] | undefined;

  /**
   * The token to include in another request to get the next page of items. This value is `null` when there are no more items to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeVpcBlockPublicAccessOptionsRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * VPC Block Public Access (BPA) enables you to block resources in VPCs and subnets that you own in a Region from reaching or being reached from the internet through internet gateways and egress-only internet gateways. To learn more about VPC BPA, see [Block public access to VPCs and subnets](https://docs.aws.amazon.com/vpc/latest/userguide/security-vpc-bpa.html) in the *Amazon VPC User Guide*.
 *
 * @public
 */
export interface VpcBlockPublicAccessOptions {
  /**
   * An Amazon Web Services account ID.
   *
   * @public
   */
  AwsAccountId?: string | undefined;

  /**
   * An Amazon Web Services Region.
   *
   * @public
   */
  AwsRegion?: string | undefined;

  /**
   * The current state of VPC BPA.
   *
   * @public
   */
  State?: VpcBlockPublicAccessState | undefined;

  /**
   * The current mode of VPC BPA.
   *
   * - `off`: VPC BPA is not enabled and traffic is allowed to and from internet gateways and egress-only internet gateways in this Region.
   * - `block-bidirectional`: Block all traffic to and from internet gateways and egress-only internet gateways in this Region (except for excluded VPCs and subnets).
   * - `block-ingress`: Block all internet traffic to the VPCs in this Region (except for VPCs or subnets which are excluded). Only traffic to and from NAT gateways and egress-only internet gateways is allowed because these gateways only allow outbound connections to be established.
   *
   * @public
   */
  InternetGatewayBlockMode?: InternetGatewayBlockMode | undefined;

  /**
   * The reason for the current state.
   *
   * @public
   */
  Reason?: string | undefined;

  /**
   * The last time the VPC BPA mode was updated.
   *
   * @public
   */
  LastUpdateTimestamp?: Date | undefined;

  /**
   * The entity that manages the state of VPC BPA. Possible values include:
   *
   * - `account` - The state is managed by the account.
   * - `declarative-policy` - The state is managed by a declarative policy and can't be modified by the account.
   *
   * @public
   */
  ManagedBy?: ManagedBy | undefined;

  /**
   * Determines if exclusions are allowed. If you have [enabled VPC BPA at the Organization level](https://docs.aws.amazon.com/vpc/latest/userguide/security-vpc-bpa.html#security-vpc-bpa-exclusions-orgs), exclusions may be `not-allowed`. Otherwise, they are `allowed`.
   *
   * @public
   */
  ExclusionsAllowed?: VpcBlockPublicAccessExclusionsAllowed | undefined;
}

/**
 * @public
 */
export interface DescribeVpcBlockPublicAccessOptionsResult {
  /**
   * Details related to the options.
   *
   * @public
   */
  VpcBlockPublicAccessOptions?: VpcBlockPublicAccessOptions | undefined;
}

/**
 * @public
 */
export interface DescribeVpcClassicLinkRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The VPCs for which you want to describe the ClassicLink status.
   *
   * @public
   */
  VpcIds?: string[] | undefined;

  /**
   * The filters.
   *
   * - `is-classic-link-enabled` - Whether the VPC is enabled for ClassicLink (`true` | `false`).
   * - `tag` - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key `Owner` and the value `TeamA`, specify `tag:Owner` for the filter name and `TeamA` for the filter value.
   * - `tag-key` - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.
   *
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * > **Note:** Deprecated.
 *
 * Describes whether a VPC is enabled for ClassicLink.
 *
 * @public
 */
export interface VpcClassicLink {
  /**
   * Indicates whether the VPC is enabled for ClassicLink.
   *
   * @public
   */
  ClassicLinkEnabled?: boolean | undefined;

  /**
   * Any tags assigned to the VPC.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The ID of the VPC.
   *
   * @public
   */
  VpcId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeVpcClassicLinkResult {
  /**
   * The ClassicLink status of the VPCs.
   *
   * @public
   */
  Vpcs?: VpcClassicLink[] | undefined;
}

/**
 * @public
 */
export interface DescribeVpcClassicLinkDnsSupportRequest {
  /**
   * The IDs of the VPCs.
   *
   * @public
   */
  VpcIds?: string[] | undefined;

  /**
   * The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see [Pagination](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination).
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * > **Note:** Deprecated.
 *
 * Describes the ClassicLink DNS support status of a VPC.
 *
 * @public
 */
export interface ClassicLinkDnsSupport {
  /**
   * Indicates whether ClassicLink DNS support is enabled for the VPC.
   *
   * @public
   */
  ClassicLinkDnsSupported?: boolean | undefined;

  /**
   * The ID of the VPC.
   *
   * @public
   */
  VpcId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeVpcClassicLinkDnsSupportResult {
  /**
   * The token to include in another request to get the next page of items. This value is `null` when there are no more items to return.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Information about the ClassicLink DNS support status of the VPCs.
   *
   * @public
   */
  Vpcs?: ClassicLinkDnsSupport[] | undefined;
}

/**
 * @public
 */
export interface DescribeVpcEncryptionControlsRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The filters to apply to the request.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The IDs of the VPC Encryption Control configurations to describe.
   *
   * @public
   */
  VpcEncryptionControlIds?: string[] | undefined;

  /**
   * The IDs of the VPCs to describe encryption control configurations for.
   *
   * @public
   */
  VpcIds?: string[] | undefined;

  /**
   * The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see [Pagination](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination).
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface DescribeVpcEncryptionControlsResult {
  /**
   * Information about the VPC Encryption Control configurations.
   *
   * @public
   */
  VpcEncryptionControls?: VpcEncryptionControl[] | undefined;

  /**
   * The token to include in another request to get the next page of items. This value is `null` when there are no more items to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeVpcEndpointAssociationsRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The IDs of the VPC endpoints.
   *
   * @public
   */
  VpcEndpointIds?: string[] | undefined;

  /**
   * The filters.
   *
   * - `vpc-endpoint-id` - The ID of the VPC endpoint.
   * - `associated-resource-accessibility` - The association state. When the state is `accessible`, it returns `AVAILABLE`. When the state is `inaccessible`, it returns `PENDING` or `FAILED`.
   * - `association-id` - The ID of the VPC endpoint association.
   * - `associated-resource-id` - The ID of the associated resource configuration.
   * - `service-network-arn` - The Amazon Resource Name (ARN) of the associated service network. Only VPC endpoints of type service network will be returned.
   * - `resource-configuration-group-arn` - The Amazon Resource Name (ARN) of the resource configuration of type GROUP.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

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
 * Describes the VPC resources, VPC endpoint services, Lattice services, or service networks associated with the VPC endpoint.
 *
 * @public
 */
export interface VpcEndpointAssociation {
  /**
   * The ID of the VPC endpoint association.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The ID of the VPC endpoint.
   *
   * @public
   */
  VpcEndpointId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the service network.
   *
   * @public
   */
  ServiceNetworkArn?: string | undefined;

  /**
   * The name of the service network.
   *
   * @public
   */
  ServiceNetworkName?: string | undefined;

  /**
   * The connectivity status of the resources associated to a VPC endpoint. The resource is accessible if the associated resource configuration is `AVAILABLE`, otherwise the resource is inaccessible.
   *
   * @public
   */
  AssociatedResourceAccessibility?: string | undefined;

  /**
   * A message related to why an VPC endpoint association failed.
   *
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * An error code related to why an VPC endpoint association failed.
   *
   * @public
   */
  FailureCode?: string | undefined;

  /**
   * The DNS entry of the VPC endpoint association.
   *
   * @public
   */
  DnsEntry?: DnsEntry | undefined;

  /**
   * The private DNS entry of the VPC endpoint association.
   *
   * @public
   */
  PrivateDnsEntry?: DnsEntry | undefined;

  /**
   * The Amazon Resource Name (ARN) of the associated resource.
   *
   * @public
   */
  AssociatedResourceArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the resource configuration group.
   *
   * @public
   */
  ResourceConfigurationGroupArn?: string | undefined;

  /**
   * The tags to apply to the VPC endpoint association.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface DescribeVpcEndpointAssociationsResult {
  /**
   * Details of the endpoint associations.
   *
   * @public
   */
  VpcEndpointAssociations?: VpcEndpointAssociation[] | undefined;

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
export interface DescribeVpcEndpointConnectionNotificationsRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the notification.
   *
   * @public
   */
  ConnectionNotificationId?: string | undefined;

  /**
   * The filters.
   *
   * - `connection-notification-arn` - The ARN of the SNS topic for the notification.
   * - `connection-notification-id` - The ID of the notification.
   * - `connection-notification-state` - The state of the notification (`Enabled` | `Disabled`).
   * - `connection-notification-type` - The type of notification (`Topic`).
   * - `service-id` - The ID of the endpoint service.
   * - `vpc-endpoint-id` - The ID of the VPC endpoint.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of results to return in a single call. To retrieve the remaining results, make another request with the returned `NextToken` value.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token to request the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeVpcEndpointConnectionNotificationsResult {
  /**
   * The notifications.
   *
   * @public
   */
  ConnectionNotificationSet?: ConnectionNotification[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeVpcEndpointConnectionsRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The filters.
   *
   * - `ip-address-type` - The IP address type (`ipv4` | `ipv6`).
   * - `service-id` - The ID of the service.
   * - `vpc-endpoint-owner` - The ID of the Amazon Web Services account ID that owns the endpoint.
   * - `vpc-endpoint-region` - The Region of the endpoint or `cross-region` to find endpoints for other Regions.
   * - `vpc-endpoint-state` - The state of the endpoint (`pendingAcceptance` | `pending` | `available` | `deleting` | `deleted` | `rejected` | `failed`).
   * - `vpc-endpoint-id` - The ID of the endpoint.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of results to return for the request in a single page. The remaining results of the initial request can be seen by sending another request with the returned `NextToken` value. This value can be between 5 and 1,000; if `MaxResults` is given a value larger than 1,000, only 1,000 results are returned.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Describes a VPC endpoint connection to a service.
 *
 * @public
 */
export interface VpcEndpointConnection {
  /**
   * The ID of the service to which the endpoint is connected.
   *
   * @public
   */
  ServiceId?: string | undefined;

  /**
   * The ID of the VPC endpoint.
   *
   * @public
   */
  VpcEndpointId?: string | undefined;

  /**
   * The ID of the Amazon Web Services account that owns the VPC endpoint.
   *
   * @public
   */
  VpcEndpointOwner?: string | undefined;

  /**
   * The state of the VPC endpoint.
   *
   * @public
   */
  VpcEndpointState?: State | undefined;

  /**
   * The date and time that the VPC endpoint was created.
   *
   * @public
   */
  CreationTimestamp?: Date | undefined;

  /**
   * The DNS entries for the VPC endpoint.
   *
   * @public
   */
  DnsEntries?: DnsEntry[] | undefined;

  /**
   * The Amazon Resource Names (ARNs) of the network load balancers for the service.
   *
   * @public
   */
  NetworkLoadBalancerArns?: string[] | undefined;

  /**
   * The Amazon Resource Names (ARNs) of the Gateway Load Balancers for the service.
   *
   * @public
   */
  GatewayLoadBalancerArns?: string[] | undefined;

  /**
   * The IP address type for the endpoint.
   *
   * @public
   */
  IpAddressType?: IpAddressType | undefined;

  /**
   * The ID of the VPC endpoint connection.
   *
   * @public
   */
  VpcEndpointConnectionId?: string | undefined;

  /**
   * The tags.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The Region of the endpoint.
   *
   * @public
   */
  VpcEndpointRegion?: string | undefined;

  /**
   * The payer responsibility settings for the endpoint.
   *
   * @public
   */
  PayerResponsibilities?: PayerResponsibilityEntry[] | undefined;
}

/**
 * @public
 */
export interface DescribeVpcEndpointConnectionsResult {
  /**
   * Information about the VPC endpoint connections.
   *
   * @public
   */
  VpcEndpointConnections?: VpcEndpointConnection[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeVpcEndpointsRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The IDs of the VPC endpoints.
   *
   * @public
   */
  VpcEndpointIds?: string[] | undefined;

  /**
   * The filters.
   *
   * - `ip-address-type` - The IP address type (`ipv4` | `ipv6`).
   * - `service-name` - The name of the service.
   * - `service-region` - The Region of the service.
   * - `tag`:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key `Owner` and the value `TeamA`, specify `tag:Owner` for the filter name and `TeamA` for the filter value.
   * - `tag-key` - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.
   * - `vpc-id` - The ID of the VPC in which the endpoint resides.
   * - `vpc-endpoint-id` - The ID of the endpoint.
   * - `vpc-endpoint-state` - The state of the endpoint (`pendingAcceptance` | `pending` | `available` | `deleting` | `deleted` | `rejected` | `failed`).
   * - `vpc-endpoint-type` - The type of VPC endpoint (`Interface` | `Gateway` | `GatewayLoadBalancer` | `Resource` | `ServiceNetwork` | `Tunnel`).
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of items to return for this request. The request returns a token that you can specify in a subsequent call to get the next set of results.
   *
   * Constraint: If the value is greater than 1,000, we return only 1,000 items.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next set of items to return. (You received this token from a prior call.)
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeVpcEndpointsResult {
  /**
   * Information about the VPC endpoints.
   *
   * @public
   */
  VpcEndpoints?: VpcEndpoint[] | undefined;

  /**
   * The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeVpcEndpointServiceConfigurationsRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The IDs of the endpoint services.
   *
   * @public
   */
  ServiceIds?: string[] | undefined;

  /**
   * The filters.
   *
   * - `service-name` - The name of the service.
   * - `service-id` - The ID of the service.
   * - `service-state` - The state of the service (`Pending` | `Available` | `Deleting` | `Deleted` | `Failed`).
   * - `supported-ip-address-types` - The IP address type (`ipv4` | `ipv6`).
   * - `tag`:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key `Owner` and the value `TeamA`, specify `tag:Owner` for the filter name and `TeamA` for the filter value.
   * - `tag-key` - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of results to return for the request in a single page. The remaining results of the initial request can be seen by sending another request with the returned `NextToken` value. This value can be between 5 and 1,000; if `MaxResults` is given a value larger than 1,000, only 1,000 results are returned.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeVpcEndpointServiceConfigurationsResult {
  /**
   * Information about the services.
   *
   * @public
   */
  ServiceConfigurations?: ServiceConfiguration[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeVpcEndpointServicePermissionsRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the service.
   *
   * @public
   */
  ServiceId: string | undefined;

  /**
   * The filters.
   *
   * - `principal` - The ARN of the principal.
   * - `principal-type` - The principal type (`All` | `Service` | `OrganizationUnit` | `Account` | `User` | `Role`).
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of results to return for the request in a single page. The remaining results of the initial request can be seen by sending another request with the returned `NextToken` value. This value can be between 5 and 1,000; if `MaxResults` is given a value larger than 1,000, only 1,000 results are returned.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeVpcEndpointServicePermissionsResult {
  /**
   * Information about the allowed principals.
   *
   * @public
   */
  AllowedPrincipals?: AllowedPrincipal[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeVpcEndpointServicesRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The service names.
   *
   * @public
   */
  ServiceNames?: string[] | undefined;

  /**
   * The filters.
   *
   * - `owner` - The ID or alias of the Amazon Web Services account that owns the service.
   * - `service-name` - The name of the service.
   * - `service-region` - The Region of the service.
   * - `service-type` - The type of service (`Interface` | `Gateway` | `GatewayLoadBalancer`).
   * - `supported-ip-address-types` - The IP address type (`ipv4` | `ipv6`).
   * - `tag`:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key `Owner` and the value `TeamA`, specify `tag:Owner` for the filter name and `TeamA` for the filter value.
   * - `tag-key` - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of items to return for this request. The request returns a token that you can specify in a subsequent call to get the next set of results.
   *
   * Constraint: If the value is greater than 1,000, we return only 1,000 items.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next set of items to return. (You received this token from a prior call.)
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The service Regions.
   *
   * @public
   */
  ServiceRegions?: string[] | undefined;
}

/**
 * Information about the Private DNS name for interface endpoints.
 *
 * @public
 */
export interface PrivateDnsDetails {
  /**
   * The private DNS name assigned to the VPC endpoint service.
   *
   * @public
   */
  PrivateDnsName?: string | undefined;
}

/**
 * Describes a VPC endpoint service.
 *
 * @public
 */
export interface ServiceDetail {
  /**
   * The name of the service.
   *
   * @public
   */
  ServiceName?: string | undefined;

  /**
   * The ID of the endpoint service.
   *
   * @public
   */
  ServiceId?: string | undefined;

  /**
   * The type of service.
   *
   * @public
   */
  ServiceType?: ServiceTypeDetail[] | undefined;

  /**
   * The Region where the service is hosted.
   *
   * @public
   */
  ServiceRegion?: string | undefined;

  /**
   * The IDs of the Availability Zones in which the service is available.
   *
   * Either `AvailabilityZone` or `AvailabilityZoneId` can be specified, but not both
   *
   * @public
   */
  AvailabilityZoneIds?: string[] | undefined;

  /**
   * The Availability Zones in which the service is available.
   *
   * Either `AvailabilityZone` or `AvailabilityZoneId` can be specified, but not both
   *
   * @public
   */
  AvailabilityZones?: string[] | undefined;

  /**
   * The Amazon Web Services account ID of the service owner.
   *
   * @public
   */
  Owner?: string | undefined;

  /**
   * The DNS names for the service.
   *
   * @public
   */
  BaseEndpointDnsNames?: string[] | undefined;

  /**
   * The private DNS name for the service.
   *
   * @public
   */
  PrivateDnsName?: string | undefined;

  /**
   * The private DNS names assigned to the VPC endpoint service.
   *
   * @public
   */
  PrivateDnsNames?: PrivateDnsDetails[] | undefined;

  /**
   * Indicates whether the service supports endpoint policies.
   *
   * @public
   */
  VpcEndpointPolicySupported?: boolean | undefined;

  /**
   * Indicates whether VPC endpoint connection requests to the service must be accepted by the service owner.
   *
   * @public
   */
  AcceptanceRequired?: boolean | undefined;

  /**
   * Indicates whether the service manages its VPC endpoints. Management of the service VPC endpoints using the VPC endpoint API is restricted.
   *
   * @public
   */
  ManagesVpcEndpoints?: boolean | undefined;

  /**
   * The payer responsibility.
   *
   * @public
   */
  PayerResponsibility?: PayerResponsibility | undefined;

  /**
   * The tags assigned to the service.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The verification state of the VPC endpoint service.
   *
   * Consumers of the endpoint service cannot use the private name when the state is not `verified`.
   *
   * @public
   */
  PrivateDnsNameVerificationState?: DnsNameState | undefined;

  /**
   * The supported IP address types.
   *
   * @public
   */
  SupportedIpAddressTypes?: ServiceConnectivityType[] | undefined;
}

/**
 * @public
 */
export interface DescribeVpcEndpointServicesResult {
  /**
   * The supported services.
   *
   * @public
   */
  ServiceNames?: string[] | undefined;

  /**
   * Information about the service.
   *
   * @public
   */
  ServiceDetails?: ServiceDetail[] | undefined;

  /**
   * The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeVpcPeeringConnectionsRequest {
  /**
   * The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see [Pagination](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination).
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The IDs of the VPC peering connections.
   *
   * Default: Describes all your VPC peering connections.
   *
   * @public
   */
  VpcPeeringConnectionIds?: string[] | undefined;

  /**
   * The filters.
   *
   * - `accepter-vpc-info.cidr-block` - The IPv4 CIDR block of the accepter VPC.
   * - `accepter-vpc-info.owner-id` - The ID of the Amazon Web Services account that owns the accepter VPC.
   * - `accepter-vpc-info.vpc-id` - The ID of the accepter VPC.
   * - `expiration-time` - The expiration date and time for the VPC peering connection.
   * - `requester-vpc-info.cidr-block` - The IPv4 CIDR block of the requester's VPC.
   * - `requester-vpc-info.owner-id` - The ID of the Amazon Web Services account that owns the requester VPC.
   * - `requester-vpc-info.vpc-id` - The ID of the requester VPC.
   * - `status-code` - The status of the VPC peering connection (`pending-acceptance` | `failed` | `expired` | `provisioning` | `active` | `deleting` | `deleted` | `rejected`).
   * - `status-message` - A message that provides more information about the status of the VPC peering connection, if applicable.
   * - `tag` - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key `Owner` and the value `TeamA`, specify `tag:Owner` for the filter name and `TeamA` for the filter value.
   * - `tag-key` - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.
   * - `vpc-peering-connection-id` - The ID of the VPC peering connection.
   *
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * @public
 */
export interface DescribeVpcPeeringConnectionsResult {
  /**
   * Information about the VPC peering connections.
   *
   * @public
   */
  VpcPeeringConnections?: VpcPeeringConnection[] | undefined;

  /**
   * The token to include in another request to get the next page of items. This value is `null` when there are no more items to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeVpcsRequest {
  /**
   * The filters.
   *
   * - `cidr` - The primary IPv4 CIDR block of the VPC. The CIDR block you specify must exactly match the VPC's CIDR block for information to be returned for the VPC. Must contain the slash followed by one or two digits (for example, `/28`).
   * - `cidr-block-association.cidr-block` - An IPv4 CIDR block associated with the VPC.
   * - `cidr-block-association.association-id` - The association ID for an IPv4 CIDR block associated with the VPC.
   * - `cidr-block-association.state` - The state of an IPv4 CIDR block associated with the VPC.
   * - `dhcp-options-id` - The ID of a set of DHCP options.
   * - `ipv6-cidr-block-association.ipv6-cidr-block` - An IPv6 CIDR block associated with the VPC.
   * - `ipv6-cidr-block-association.ipv6-pool` - The ID of the IPv6 address pool from which the IPv6 CIDR block is allocated.
   * - `ipv6-cidr-block-association.association-id` - The association ID for an IPv6 CIDR block associated with the VPC.
   * - `ipv6-cidr-block-association.state` - The state of an IPv6 CIDR block associated with the VPC.
   * - `is-default` - Indicates whether the VPC is the default VPC.
   * - `owner-id` - The ID of the Amazon Web Services account that owns the VPC.
   * - `state` - The state of the VPC (`pending` | `available`).
   * - `tag` - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key `Owner` and the value `TeamA`, specify `tag:Owner` for the filter name and `TeamA` for the filter value.
   * - `tag-key` - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.
   * - `vpc-id` - The ID of the VPC.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The IDs of the VPCs.
   *
   * @public
   */
  VpcIds?: string[] | undefined;

  /**
   * The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see [Pagination](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination).
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeVpcsResult {
  /**
   * The token to include in another request to get the next page of items. This value is `null` when there are no more items to return.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Information about the VPCs.
   *
   * @public
   */
  Vpcs?: Vpc[] | undefined;
}

/**
 * @public
 */
export interface DescribeVpnConcentratorsRequest {
  /**
   * One or more VPN concentrator IDs.
   *
   * @public
   */
  VpnConcentratorIds?: string[] | undefined;

  /**
   * One or more filters to limit the results.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned `nextToken` value.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeVpnConcentratorsResult {
  /**
   * Information about the VPN concentrators.
   *
   * @public
   */
  VpnConcentrators?: VpnConcentrator[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Contains the parameters for DescribeVpnConnections.
 *
 * @public
 */
export interface DescribeVpnConnectionsRequest {
  /**
   * One or more filters.
   *
   * - `customer-gateway-configuration` - The configuration information for the customer gateway.
   * - `customer-gateway-id` - The ID of a customer gateway associated with the VPN connection.
   * - `state` - The state of the VPN connection (`pending` | `available` | `deleting` | `deleted`).
   * - `option.static-routes-only` - Indicates whether the connection has static routes only. Used for devices that do not support Border Gateway Protocol (BGP).
   * - `route.destination-cidr-block` - The destination CIDR block. This corresponds to the subnet used in a customer data center.
   * - `bgp-asn` - The BGP Autonomous System Number (ASN) associated with a BGP device.
   * - `tag`:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key `Owner` and the value `TeamA`, specify `tag:Owner` for the filter name and `TeamA` for the filter value.
   * - `tag-key` - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.
   * - `type` - The type of VPN connection. Currently the only supported type is `ipsec.1`.
   * - `vpn-connection-id` - The ID of the VPN connection.
   * - `vpn-gateway-id` - The ID of a virtual private gateway associated with the VPN connection.
   * - `transit-gateway-id` - The ID of a transit gateway associated with the VPN connection.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * One or more VPN connection IDs.
   *
   * Default: Describes your VPN connections.
   *
   * @public
   */
  VpnConnectionIds?: string[] | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * Contains the output of DescribeVpnConnections.
 *
 * @public
 */
export interface DescribeVpnConnectionsResult {
  /**
   * Information about one or more VPN connections.
   *
   * @public
   */
  VpnConnections?: VpnConnection[] | undefined;
}

/**
 * Contains the parameters for DescribeVpnGateways.
 *
 * @public
 */
export interface DescribeVpnGatewaysRequest {
  /**
   * One or more filters.
   *
   * - `amazon-side-asn` - The Autonomous System Number (ASN) for the Amazon side of the gateway.
   * - `attachment.state` - The current state of the attachment between the gateway and the VPC (`attaching` | `attached` | `detaching` | `detached`).
   * - `attachment.vpc-id` - The ID of an attached VPC.
   * - `availability-zone` - The Availability Zone for the virtual private gateway (if applicable).
   * - `state` - The state of the virtual private gateway (`pending` | `available` | `deleting` | `deleted`).
   * - `tag`:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key `Owner` and the value `TeamA`, specify `tag:Owner` for the filter name and `TeamA` for the filter value.
   * - `tag-key` - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.
   * - `type` - The type of virtual private gateway. Currently the only supported type is `ipsec.1`.
   * - `vpn-gateway-id` - The ID of the virtual private gateway.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * One or more virtual private gateway IDs.
   *
   * Default: Describes all your virtual private gateways.
   *
   * @public
   */
  VpnGatewayIds?: string[] | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * Contains the output of DescribeVpnGateways.
 *
 * @public
 */
export interface DescribeVpnGatewaysResult {
  /**
   * Information about one or more virtual private gateways.
   *
   * @public
   */
  VpnGateways?: VpnGateway[] | undefined;
}

/**
 * @public
 */
export interface DetachClassicLinkVpcRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the instance to unlink from the VPC.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The ID of the VPC to which the instance is linked.
   *
   * @public
   */
  VpcId: string | undefined;
}

/**
 * @public
 */
export interface DetachClassicLinkVpcResult {
  /**
   * Returns `true` if the request succeeds; otherwise, it returns an error.
   *
   * @public
   */
  Return?: boolean | undefined;
}

/**
 * @public
 */
export interface DetachImageWatermarkRequest {
  /**
   * The ID of the AMI.
   *
   * @public
   */
  ImageId: string | undefined;

  /**
   * The watermark key to remove, in `accountId:watermarkName` format (for example, `123456789012:approvedAmi`).
   *
   * @public
   */
  WatermarkKey: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DetachImageWatermarkResult {
  /**
   * Returns `true` if the request succeeds; otherwise, it returns an error.
   *
   * @public
   */
  Return?: boolean | undefined;
}

/**
 * @public
 */
export interface DetachInternetGatewayRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the internet gateway.
   *
   * @public
   */
  InternetGatewayId: string | undefined;

  /**
   * The ID of the VPC.
   *
   * @public
   */
  VpcId: string | undefined;
}

/**
 * Contains the parameters for DetachNetworkInterface.
 *
 * @public
 */
export interface DetachNetworkInterfaceRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the attachment.
   *
   * @public
   */
  AttachmentId: string | undefined;

  /**
   * Specifies whether to force a detachment.
   *
   * > **Note:**
   * >
   * > - Use the `Force` parameter only as a last resort to detach a network interface from a failed instance.
   * > - If you use the `Force` parameter to detach a network interface, you might not be able to attach a different network interface to the same index on the instance without first stopping and starting the instance.
   * > - If you force the detachment of a network interface, the [instance metadata](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html) might not get updated. This means that the attributes associated with the detached network interface might still be visible. The instance metadata will get updated when you stop and start the instance.
   *
   * @public
   */
  Force?: boolean | undefined;
}

/**
 * @public
 */
export interface DetachVerifiedAccessTrustProviderRequest {
  /**
   * The ID of the Verified Access instance.
   *
   * @public
   */
  VerifiedAccessInstanceId: string | undefined;

  /**
   * The ID of the Verified Access trust provider.
   *
   * @public
   */
  VerifiedAccessTrustProviderId: string | undefined;

  /**
   * A unique, case-sensitive token that you provide to ensure idempotency of your modification request. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html).
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DetachVerifiedAccessTrustProviderResult {
  /**
   * Details about the Verified Access trust provider.
   *
   * @public
   */
  VerifiedAccessTrustProvider?: VerifiedAccessTrustProvider | undefined;

  /**
   * Details about the Verified Access instance.
   *
   * @public
   */
  VerifiedAccessInstance?: VerifiedAccessInstance | undefined;
}

/**
 * @public
 */
export interface DetachVolumeRequest {
  /**
   * The device name.
   *
   * @public
   */
  Device?: string | undefined;

  /**
   * Forces detachment if the previous detachment attempt did not occur cleanly (for example, logging into an instance, unmounting the volume, and detaching normally). This option can lead to data loss or a corrupted file system. Use this option only as a last resort to detach a volume from a failed instance. The instance won't have an opportunity to flush file system caches or file system metadata. If you use this option, you must perform file system check and repair procedures.
   *
   * @public
   */
  Force?: boolean | undefined;

  /**
   * The ID of the instance. If you are detaching a Multi-Attach enabled volume, you must specify an instance ID.
   *
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * The ID of the volume.
   *
   * @public
   */
  VolumeId: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * Contains the parameters for DetachVpnGateway.
 *
 * @public
 */
export interface DetachVpnGatewayRequest {
  /**
   * The ID of the VPC.
   *
   * @public
   */
  VpcId: string | undefined;

  /**
   * The ID of the virtual private gateway.
   *
   * @public
   */
  VpnGatewayId: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DisableAddressTransferRequest {
  /**
   * The allocation ID of an Elastic IP address.
   *
   * @public
   */
  AllocationId: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DisableAddressTransferResult {
  /**
   * An Elastic IP address transfer.
   *
   * @public
   */
  AddressTransfer?: AddressTransfer | undefined;
}

/**
 * @public
 */
export interface DisableAllowedImagesSettingsRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DisableAllowedImagesSettingsResult {
  /**
   * Returns `disabled` if the request succeeds; otherwise, it returns an error.
   *
   * @public
   */
  AllowedImagesSettingsState?: AllowedImagesSettingsDisabledState | undefined;
}

/**
 * @public
 */
export interface DisableApplicationStatusCheckSuppressionRequest {
  /**
   * The IDs of the instances for which to disable application status check suppression.
   *
   * @public
   */
  InstanceIds?: string[] | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure that the operation completes no more than one time. If you retry a request with the same token, the service ignores the request but does not return an error. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html).
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * Checks whether you have the required permissions for the operation, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * Describes a successful application status check suppression.
 *
 * @public
 */
export interface SuccessfulSuppressionResponseObject {
  /**
   * The ID of the instance.
   *
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * The date and time when suppression started.
   *
   * @public
   */
  SuppressAt?: Date | undefined;

  /**
   * The date and time when suppression ends and health checks resume.
   *
   * @public
   */
  ResumeAt?: Date | undefined;
}

/**
 * Describes an unsuccessful application status check suppression.
 *
 * @public
 */
export interface UnsuccessfulSuppressionResponseObject {
  /**
   * The ID of the instance.
   *
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * The date and time when suppression was attempted.
   *
   * @public
   */
  SuppressAt?: Date | undefined;

  /**
   * The date and time when health checks would have resumed.
   *
   * @public
   */
  ResumeAt?: Date | undefined;

  /**
   * The reason the suppression failed.
   *
   * @public
   */
  Reason?: string | undefined;
}

/**
 * @public
 */
export interface DisableApplicationStatusCheckSuppressionResult {
  /**
   * The instances for which suppression was successfully disabled.
   *
   * @public
   */
  SuccessfulResults?: SuccessfulSuppressionResponseObject[] | undefined;

  /**
   * The instances for which suppression failed to be disabled.
   *
   * @public
   */
  UnsuccessfulResults?: UnsuccessfulSuppressionResponseObject[] | undefined;
}

/**
 * @public
 */
export interface DisableAwsNetworkPerformanceMetricSubscriptionRequest {
  /**
   * The source Region or Availability Zone that the metric subscription is disabled for. For example, `us-east-1`.
   *
   * @public
   */
  Source?: string | undefined;

  /**
   * The target Region or Availability Zone that the metric subscription is disabled for. For example, `eu-north-1`.
   *
   * @public
   */
  Destination?: string | undefined;

  /**
   * The metric used for the disabled subscription.
   *
   * @public
   */
  Metric?: MetricType | undefined;

  /**
   * The statistic used for the disabled subscription.
   *
   * @public
   */
  Statistic?: StatisticType | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DisableAwsNetworkPerformanceMetricSubscriptionResult {
  /**
   * Indicates whether the unsubscribe action was successful.
   *
   * @public
   */
  Output?: boolean | undefined;
}

/**
 * @public
 */
export interface DisableCapacityManagerRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface DisableCapacityManagerResult {
  /**
   * The current status of Capacity Manager after the disable operation.
   *
   * @public
   */
  CapacityManagerStatus?: CapacityManagerStatus | undefined;

  /**
   * Indicates whether Organizations access is enabled. This will be `false` after disabling Capacity Manager.
   *
   * @public
   */
  OrganizationsAccess?: boolean | undefined;
}

/**
 * @public
 */
export interface DisableEbsEncryptionByDefaultRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DisableEbsEncryptionByDefaultResult {
  /**
   * The updated status of encryption by default.
   *
   * @public
   */
  EbsEncryptionByDefault?: boolean | undefined;
}

/**
 * @public
 */
export interface DisableFastLaunchRequest {
  /**
   * Specify the ID of the image for which to disable Windows fast launch.
   *
   * @public
   */
  ImageId: string | undefined;

  /**
   * Forces the image settings to turn off Windows fast launch for your Windows AMI. This parameter overrides any errors that are encountered while cleaning up resources in your account.
   *
   * @public
   */
  Force?: boolean | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DisableFastLaunchResult {
  /**
   * The ID of the image for which Windows fast launch was disabled.
   *
   * @public
   */
  ImageId?: string | undefined;

  /**
   * The pre-provisioning resource type that must be cleaned after turning off Windows fast launch for the Windows AMI. Supported values include: `snapshot`.
   *
   * @public
   */
  ResourceType?: FastLaunchResourceType | undefined;

  /**
   * Parameters that were used for Windows fast launch for the Windows AMI before Windows fast launch was disabled. This informs the clean-up process.
   *
   * @public
   */
  SnapshotConfiguration?: FastLaunchSnapshotConfigurationResponse | undefined;

  /**
   * The launch template that was used to launch Windows instances from pre-provisioned snapshots.
   *
   * @public
   */
  LaunchTemplate?: FastLaunchLaunchTemplateSpecificationResponse | undefined;

  /**
   * The maximum number of instances that Amazon EC2 can launch at the same time to create pre-provisioned snapshots for Windows fast launch.
   *
   * @public
   */
  MaxParallelLaunches?: number | undefined;

  /**
   * The owner of the Windows AMI for which Windows fast launch was disabled.
   *
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * The current state of Windows fast launch for the specified Windows AMI.
   *
   * @public
   */
  State?: FastLaunchStateCode | undefined;

  /**
   * The reason that the state changed for Windows fast launch for the Windows AMI.
   *
   * @public
   */
  StateTransitionReason?: string | undefined;

  /**
   * The time that the state changed for Windows fast launch for the Windows AMI.
   *
   * @public
   */
  StateTransitionTime?: Date | undefined;
}

/**
 * @public
 */
export interface DisableFastSnapshotRestoresRequest {
  /**
   * One or more Availability Zones. For example, `us-east-2a`.
   *
   * Either `AvailabilityZone` or `AvailabilityZoneId` must be specified in the request, but not both.
   *
   * @public
   */
  AvailabilityZones?: string[] | undefined;

  /**
   * One or more Availability Zone IDs. For example, `use2-az1`.
   *
   * Either `AvailabilityZone` or `AvailabilityZoneId` must be specified in the request, but not both.
   *
   * @public
   */
  AvailabilityZoneIds?: string[] | undefined;

  /**
   * The IDs of one or more snapshots. For example, `snap-1234567890abcdef0`.
   *
   * @public
   */
  SourceSnapshotIds: string[] | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * Describes fast snapshot restores that were successfully disabled.
 *
 * @public
 */
export interface DisableFastSnapshotRestoreSuccessItem {
  /**
   * The ID of the snapshot.
   *
   * @public
   */
  SnapshotId?: string | undefined;

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
   * The state of fast snapshot restores for the snapshot.
   *
   * @public
   */
  State?: FastSnapshotRestoreStateCode | undefined;

  /**
   * The reason for the state transition. The possible values are as follows:
   *
   * - `Client.UserInitiated` - The state successfully transitioned to `enabling` or `disabling`.
   * - `Client.UserInitiated - Lifecycle state transition` - The state successfully transitioned to `optimizing`, `enabled`, or `disabled`.
   *
   * @public
   */
  StateTransitionReason?: string | undefined;

  /**
   * The ID of the Amazon Web Services account that enabled fast snapshot restores on the snapshot.
   *
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * The Amazon Web Services owner alias that enabled fast snapshot restores on the snapshot. This is intended for future use.
   *
   * @public
   */
  OwnerAlias?: string | undefined;

  /**
   * The time at which fast snapshot restores entered the `enabling` state.
   *
   * @public
   */
  EnablingTime?: Date | undefined;

  /**
   * The time at which fast snapshot restores entered the `optimizing` state.
   *
   * @public
   */
  OptimizingTime?: Date | undefined;

  /**
   * The time at which fast snapshot restores entered the `enabled` state.
   *
   * @public
   */
  EnabledTime?: Date | undefined;

  /**
   * The time at which fast snapshot restores entered the `disabling` state.
   *
   * @public
   */
  DisablingTime?: Date | undefined;

  /**
   * The time at which fast snapshot restores entered the `disabled` state.
   *
   * @public
   */
  DisabledTime?: Date | undefined;
}

/**
 * Describes an error that occurred when disabling fast snapshot restores.
 *
 * @public
 */
export interface DisableFastSnapshotRestoreStateError {
  /**
   * The error code.
   *
   * @public
   */
  Code?: string | undefined;

  /**
   * The error message.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * Contains information about an error that occurred when disabling fast snapshot restores.
 *
 * @public
 */
export interface DisableFastSnapshotRestoreStateErrorItem {
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
   * The error.
   *
   * @public
   */
  Error?: DisableFastSnapshotRestoreStateError | undefined;
}

/**
 * Contains information about the errors that occurred when disabling fast snapshot restores.
 *
 * @public
 */
export interface DisableFastSnapshotRestoreErrorItem {
  /**
   * The ID of the snapshot.
   *
   * @public
   */
  SnapshotId?: string | undefined;

  /**
   * The errors.
   *
   * @public
   */
  FastSnapshotRestoreStateErrors?: DisableFastSnapshotRestoreStateErrorItem[] | undefined;
}

/**
 * @public
 */
export interface DisableFastSnapshotRestoresResult {
  /**
   * Information about the snapshots for which fast snapshot restores were successfully disabled.
   *
   * @public
   */
  Successful?: DisableFastSnapshotRestoreSuccessItem[] | undefined;

  /**
   * Information about the snapshots for which fast snapshot restores could not be disabled.
   *
   * @public
   */
  Unsuccessful?: DisableFastSnapshotRestoreErrorItem[] | undefined;
}

/**
 * @public
 */
export interface DisableImageRequest {
  /**
   * The ID of the AMI.
   *
   * @public
   */
  ImageId: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DisableImageResult {
  /**
   * Returns `true` if the request succeeds; otherwise, it returns an error.
   *
   * @public
   */
  Return?: boolean | undefined;
}

/**
 * @public
 */
export interface DisableImageBlockPublicAccessRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DisableImageBlockPublicAccessResult {
  /**
   * Returns `unblocked` if the request succeeds; otherwise, it returns an error.
   *
   * @public
   */
  ImageBlockPublicAccessState?: ImageBlockPublicAccessDisabledState | undefined;
}

/**
 * @public
 */
export interface DisableImageDeprecationRequest {
  /**
   * The ID of the AMI.
   *
   * @public
   */
  ImageId: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DisableImageDeprecationResult {
  /**
   * Returns `true` if the request succeeds; otherwise, it returns an error.
   *
   * @public
   */
  Return?: boolean | undefined;
}

/**
 * @public
 */
export interface DisableImageDeregistrationProtectionRequest {
  /**
   * The ID of the AMI.
   *
   * @public
   */
  ImageId: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DisableImageDeregistrationProtectionResult {
  /**
   * Returns `true` if the request succeeds; otherwise, it returns an error.
   *
   * @public
   */
  Return?: string | undefined;
}

/**
 * @public
 */
export interface DisableInstanceSqlHaStandbyDetectionsRequest {
  /**
   * The IDs of the instances to disable from SQL Server High Availability standby detection monitoring.
   *
   * @public
   */
  InstanceIds: string[] | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DisableInstanceSqlHaStandbyDetectionsResult {
  /**
   * Information about the instances that were disabled from SQL Server High Availability standby detection monitoring.
   *
   * @public
   */
  Instances?: RegisteredInstance[] | undefined;
}

/**
 * @public
 */
export interface DisableIpamOrganizationAdminAccountRequest {
  /**
   * A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The Organizations member account ID that you want to disable as IPAM account.
   *
   * @public
   */
  DelegatedAdminAccountId: string | undefined;
}

/**
 * @public
 */
export interface DisableIpamOrganizationAdminAccountResult {
  /**
   * The result of disabling the IPAM account.
   *
   * @public
   */
  Success?: boolean | undefined;
}

/**
 * @public
 */
export interface DisableIpamPolicyRequest {
  /**
   * A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the IPAM policy to disable.
   *
   * @public
   */
  IpamPolicyId: string | undefined;

  /**
   * The ID of the Amazon Web Services Organizations target for which to disable the IPAM policy. This parameter is required only when IPAM is integrated with Amazon Web Services Organizations. When IPAM is not integrated with Amazon Web Services Organizations, omit this parameter and the policy will be disabled for the current account.
   *
   * A target can be an individual Amazon Web Services account or an entity within an Amazon Web Services Organization to which an IPAM policy can be applied.
   *
   * @public
   */
  OrganizationTargetId?: string | undefined;
}

/**
 * @public
 */
export interface DisableIpamPolicyResult {
  /**
   * Returns true if the IPAM policy was successfully disabled.
   *
   * @public
   */
  Return?: boolean | undefined;
}

/**
 * @public
 */
export interface DisableRouteServerPropagationRequest {
  /**
   * The ID of the route server for which to disable propagation.
   *
   * @public
   */
  RouteServerId: string | undefined;

  /**
   * The ID of the route table for which to disable route server propagation.
   *
   * @public
   */
  RouteTableId: string | undefined;

  /**
   * A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * Describes the route propagation configuration between a route server and a route table.
 *
 * When enabled, route server propagation installs the routes in the FIB on the route table you've specified. Route server supports IPv4 and IPv6 route propagation.
 *
 * @public
 */
export interface RouteServerPropagation {
  /**
   * The ID of the route server configured for route propagation.
   *
   * @public
   */
  RouteServerId?: string | undefined;

  /**
   * The ID of the route table configured for route server propagation.
   *
   * @public
   */
  RouteTableId?: string | undefined;

  /**
   * The current state of route propagation.
   *
   * @public
   */
  State?: RouteServerPropagationState | undefined;
}

/**
 * @public
 */
export interface DisableRouteServerPropagationResult {
  /**
   * Information about the disabled route server propagation.
   *
   * @public
   */
  RouteServerPropagation?: RouteServerPropagation | undefined;
}

/**
 * @public
 */
export interface DisableSerialConsoleAccessRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DisableSerialConsoleAccessResult {
  /**
   * If `true`, access to the EC2 serial console of all instances is enabled for your account. If `false`, access to the EC2 serial console of all instances is disabled for your account.
   *
   * @public
   */
  SerialConsoleAccessEnabled?: boolean | undefined;
}

/**
 * @public
 */
export interface DisableSnapshotBlockPublicAccessRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DisableSnapshotBlockPublicAccessResult {
  /**
   * Returns `unblocked` if the request succeeds.
   *
   * @public
   */
  State?: SnapshotBlockPublicAccessState | undefined;
}

/**
 * @public
 */
export interface DisableTransitGatewayRouteTablePropagationRequest {
  /**
   * The ID of the propagation route table.
   *
   * @public
   */
  TransitGatewayRouteTableId: string | undefined;

  /**
   * The ID of the attachment.
   *
   * @public
   */
  TransitGatewayAttachmentId?: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the route table announcement.
   *
   * @public
   */
  TransitGatewayRouteTableAnnouncementId?: string | undefined;
}

/**
 * Describes route propagation.
 *
 * @public
 */
export interface TransitGatewayPropagation {
  /**
   * The ID of the attachment.
   *
   * @public
   */
  TransitGatewayAttachmentId?: string | undefined;

  /**
   * The ID of the resource.
   *
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * The resource type. Note that the `tgw-peering` resource type has been deprecated.
   *
   * @public
   */
  ResourceType?: TransitGatewayAttachmentResourceType | undefined;

  /**
   * The ID of the transit gateway route table.
   *
   * @public
   */
  TransitGatewayRouteTableId?: string | undefined;

  /**
   * The state.
   *
   * @public
   */
  State?: TransitGatewayPropagationState | undefined;

  /**
   * The ID of the transit gateway route table announcement.
   *
   * @public
   */
  TransitGatewayRouteTableAnnouncementId?: string | undefined;
}

/**
 * @public
 */
export interface DisableTransitGatewayRouteTablePropagationResult {
  /**
   * Information about route propagation.
   *
   * @public
   */
  Propagation?: TransitGatewayPropagation | undefined;
}

/**
 * Contains the parameters for DisableVgwRoutePropagation.
 *
 * @public
 */
export interface DisableVgwRoutePropagationRequest {
  /**
   * The ID of the virtual private gateway.
   *
   * @public
   */
  GatewayId: string | undefined;

  /**
   * The ID of the route table.
   *
   * @public
   */
  RouteTableId: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DisableVpcClassicLinkRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the VPC.
   *
   * @public
   */
  VpcId: string | undefined;
}

/**
 * @public
 */
export interface DisableVpcClassicLinkResult {
  /**
   * Returns `true` if the request succeeds; otherwise, it returns an error.
   *
   * @public
   */
  Return?: boolean | undefined;
}

/**
 * @public
 */
export interface DisableVpcClassicLinkDnsSupportRequest {
  /**
   * The ID of the VPC.
   *
   * @public
   */
  VpcId?: string | undefined;
}

/**
 * @public
 */
export interface DisableVpcClassicLinkDnsSupportResult {
  /**
   * Returns `true` if the request succeeds; otherwise, it returns an error.
   *
   * @public
   */
  Return?: boolean | undefined;
}

/**
 * @public
 */
export interface DisassociateAddressRequest {
  /**
   * The association ID. This parameter is required.
   *
   * @public
   */
  AssociationId?: string | undefined;

  /**
   * Deprecated.
   *
   * @public
   */
  PublicIp?: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DisassociateApplicationStatusCheckRequest {
  /**
   * The ID of the application status check to disassociate.
   *
   * @public
   */
  ApplicationStatusCheckId: string | undefined;

  /**
   * The [tags](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html) to disassociate from the application status check. Specify the same key-value pairs that were used during association.
   *
   * @public
   */
  TargetTagAssociations?: CustomTagKeyValueRequestPair[] | undefined;

  /**
   * The IDs of the instances to disassociate from the application status check.
   *
   * @public
   */
  InstanceIds?: string[] | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure that the operation completes no more than one time. If you retry a request with the same token, the service ignores the request but does not return an error. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html).
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * Checks whether you have the required permissions for the operation, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DisassociateApplicationStatusCheckResult {
  /**
   * The associations that were successfully removed.
   *
   * @public
   */
  SuccessfulResults?: SuccessfulAssociationResponseObject[] | undefined;

  /**
   * The associations that failed to be removed.
   *
   * @public
   */
  UnsuccessfulResults?: UnsuccessfulAssociationResponseObject[] | undefined;
}

/**
 * @public
 */
export interface DisassociateCapacityReservationBillingOwnerRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the Capacity Reservation.
   *
   * @public
   */
  CapacityReservationId: string | undefined;

  /**
   * The ID of the consumer account to which the request was sent.
   *
   * @public
   */
  UnusedReservationBillingOwnerId: string | undefined;
}

/**
 * @public
 */
export interface DisassociateCapacityReservationBillingOwnerResult {
  /**
   * Returns `true` if the request succeeds; otherwise, it returns an error.
   *
   * @public
   */
  Return?: boolean | undefined;
}

/**
 * @public
 */
export interface DisassociateClientVpnTargetNetworkRequest {
  /**
   * The ID of the Client VPN endpoint from which to disassociate the target network.
   *
   * @public
   */
  ClientVpnEndpointId: string | undefined;

  /**
   * The ID of the target network association.
   *
   * @public
   */
  AssociationId: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DisassociateClientVpnTargetNetworkResult {
  /**
   * The ID of the target network association.
   *
   * @public
   */
  AssociationId?: string | undefined;

  /**
   * The current state of the target network association.
   *
   * @public
   */
  Status?: AssociationStatus | undefined;
}

/**
 * @public
 */
export interface DisassociateEnclaveCertificateIamRoleRequest {
  /**
   * The ARN of the ACM certificate from which to disassociate the IAM role.
   *
   * @public
   */
  CertificateArn: string | undefined;

  /**
   * The ARN of the IAM role to disassociate.
   *
   * @public
   */
  RoleArn: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DisassociateEnclaveCertificateIamRoleResult {
  /**
   * Returns `true` if the request succeeds; otherwise, it returns an error.
   *
   * @public
   */
  Return?: boolean | undefined;
}

/**
 * @public
 */
export interface DisassociateIamInstanceProfileRequest {
  /**
   * The ID of the IAM instance profile association.
   *
   * @public
   */
  AssociationId: string | undefined;
}

/**
 * @public
 */
export interface DisassociateIamInstanceProfileResult {
  /**
   * Information about the IAM instance profile association.
   *
   * @public
   */
  IamInstanceProfileAssociation?: IamInstanceProfileAssociation | undefined;
}

/**
 * The targets to disassociate from the specified event window.
 *
 * @public
 */
export interface InstanceEventWindowDisassociationRequest {
  /**
   * The IDs of the instances to disassociate from the event window.
   *
   * @public
   */
  InstanceIds?: string[] | undefined;

  /**
   * The instance tags to disassociate from the event window. Any instances associated with the tags will be disassociated from the event window.
   *
   * @public
   */
  InstanceTags?: Tag[] | undefined;

  /**
   * The IDs of the Dedicated Hosts to disassociate from the event window.
   *
   * @public
   */
  DedicatedHostIds?: string[] | undefined;
}

/**
 * @public
 */
export interface DisassociateInstanceEventWindowRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the event window.
   *
   * @public
   */
  InstanceEventWindowId: string | undefined;

  /**
   * One or more targets to disassociate from the specified event window.
   *
   * @public
   */
  AssociationTarget: InstanceEventWindowDisassociationRequest | undefined;
}

/**
 * @public
 */
export interface DisassociateInstanceEventWindowResult {
  /**
   * Information about the event window.
   *
   * @public
   */
  InstanceEventWindow?: InstanceEventWindow | undefined;
}

/**
 * @public
 */
export interface DisassociateIpamByoasnRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * A public 2-byte or 4-byte ASN.
   *
   * @public
   */
  Asn: string | undefined;

  /**
   * A BYOIP CIDR.
   *
   * @public
   */
  Cidr: string | undefined;
}

/**
 * @public
 */
export interface DisassociateIpamByoasnResult {
  /**
   * An ASN and BYOIP CIDR association.
   *
   * @public
   */
  AsnAssociation?: AsnAssociation | undefined;
}

/**
 * @public
 */
export interface DisassociateIpamResourceDiscoveryRequest {
  /**
   * A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * A resource discovery association ID.
   *
   * @public
   */
  IpamResourceDiscoveryAssociationId: string | undefined;
}

/**
 * @public
 */
export interface DisassociateIpamResourceDiscoveryResult {
  /**
   * A resource discovery association.
   *
   * @public
   */
  IpamResourceDiscoveryAssociation?: IpamResourceDiscoveryAssociation | undefined;
}

/**
 * @public
 */
export interface DisassociateNatGatewayAddressRequest {
  /**
   * The ID of the NAT gateway.
   *
   * @public
   */
  NatGatewayId: string | undefined;

  /**
   * The association IDs of EIPs that have been associated with the NAT gateway.
   *
   * @public
   */
  AssociationIds: string[] | undefined;

  /**
   * The maximum amount of time to wait (in seconds) before forcibly releasing the IP addresses if connections are still in progress. Default value is 350 seconds.
   *
   * @public
   */
  MaxDrainDurationSeconds?: number | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DisassociateNatGatewayAddressResult {
  /**
   * The ID of the NAT gateway.
   *
   * @public
   */
  NatGatewayId?: string | undefined;

  /**
   * Information about the NAT gateway IP addresses.
   *
   * @public
   */
  NatGatewayAddresses?: NatGatewayAddress[] | undefined;
}

/**
 * @public
 */
export interface DisassociateRouteServerRequest {
  /**
   * The ID of the route server to disassociate.
   *
   * @public
   */
  RouteServerId: string | undefined;

  /**
   * The ID of the VPC to disassociate from the route server.
   *
   * @public
   */
  VpcId: string | undefined;

  /**
   * A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DisassociateRouteServerResult {
  /**
   * Information about the disassociated route server.
   *
   * @public
   */
  RouteServerAssociation?: RouteServerAssociation | undefined;
}

/**
 * @public
 */
export interface DisassociateRouteTableRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The association ID representing the current association between the route table and subnet or gateway.
   *
   * @public
   */
  AssociationId: string | undefined;
}

/**
 * @public
 */
export interface DisassociateSecurityGroupVpcRequest {
  /**
   * A security group ID.
   *
   * @public
   */
  GroupId: string | undefined;

  /**
   * A VPC ID.
   *
   * @public
   */
  VpcId: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DisassociateSecurityGroupVpcResult {
  /**
   * The state of the disassociation.
   *
   * @public
   */
  State?: SecurityGroupVpcAssociationState | undefined;
}

/**
 * @public
 */
export interface DisassociateSubnetCidrBlockRequest {
  /**
   * The association ID for the CIDR block.
   *
   * @public
   */
  AssociationId: string | undefined;
}

/**
 * @public
 */
export interface DisassociateSubnetCidrBlockResult {
  /**
   * Information about the IPv6 CIDR block association.
   *
   * @public
   */
  Ipv6CidrBlockAssociation?: SubnetIpv6CidrBlockAssociation | undefined;

  /**
   * The ID of the subnet.
   *
   * @public
   */
  SubnetId?: string | undefined;
}

/**
 * @public
 */
export interface DisassociateTransitGatewayMulticastDomainRequest {
  /**
   * The ID of the transit gateway multicast domain.
   *
   * @public
   */
  TransitGatewayMulticastDomainId: string | undefined;

  /**
   * The ID of the attachment.
   *
   * @public
   */
  TransitGatewayAttachmentId: string | undefined;

  /**
   * The IDs of the subnets;
   *
   * @public
   */
  SubnetIds: string[] | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DisassociateTransitGatewayMulticastDomainResult {
  /**
   * Information about the association.
   *
   * @public
   */
  Associations?: TransitGatewayMulticastDomainAssociations | undefined;
}
