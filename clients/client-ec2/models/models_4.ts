import {
  AddPrefixListEntry,
  Affinity,
  ApplianceModeSupportValue,
  AttributeValue,
  AutoPlacement,
  BlockDeviceMapping,
  ByoipCidr,
  CapacityReservationPreference,
  CapacityReservationTarget,
  ClientConnectOptions,
  ClientVpnAuthorizationRuleStatus,
  ConnectionLogOptions,
  CreditSpecificationRequest,
  CurrencyCodeValues,
  DiskImageFormat,
  DnsSupportValue,
  ElasticGpuSpecification,
  EndDateType,
  FleetExcessCapacityTerminationPolicy,
  FleetLaunchTemplateConfigRequest,
  HostRecovery,
  IamInstanceProfileAssociation,
  IamInstanceProfileSpecification,
  InstanceInterruptionBehavior,
  IpPermission,
  Ipv6SupportValue,
  MarketType,
  Placement,
  PlatformValues,
  RouteTableAssociationState,
  SelfServicePortal,
  ShutdownBehavior,
  SpotInstanceType,
  SubnetAssociation,
  Tag,
  TagSpecification,
  TargetCapacitySpecificationRequest,
  TargetConfigurationRequest,
  TransitGatewayAssociationState,
  TransitGatewayAttachmentResourceType,
  TransitGatewayPeeringAttachment,
  TransitGatewayVpcAttachment,
  UnsuccessfulItem,
  VolumeType,
  _InstanceType,
} from "./models_0";
import {
  AutoAcceptSharedAttachmentsValue,
  DefaultRouteTableAssociationValue,
  DefaultRouteTablePropagationValue,
  IKEVersionsRequestListValue,
  IcmpTypeCode,
  InstanceIpv6Address,
  LaunchTemplate,
  LocalGatewayRoute,
  ManagedPrefixList,
  Phase1DHGroupNumbersRequestListValue,
  Phase1EncryptionAlgorithmsRequestListValue,
  Phase1IntegrityAlgorithmsRequestListValue,
  Phase2DHGroupNumbersRequestListValue,
  Phase2EncryptionAlgorithmsRequestListValue,
  Phase2IntegrityAlgorithmsRequestListValue,
  PortRange,
  ResponseLaunchTemplateData,
  RuleAction,
  TrafficDirection,
  TrafficMirrorFilter,
  TrafficMirrorFilterRule,
  TrafficMirrorNetworkService,
  TrafficMirrorPortRangeRequest,
  TrafficMirrorRuleAction,
  TrafficMirrorSession,
  TransitGateway,
  TransitGatewayPrefixListReference,
  TransitGatewayRoute,
  VpnConnection,
  VpnEcmpSupportValue,
} from "./models_1";
import {
  ArchitectureValues,
  AttributeBooleanValue,
  ClientVpnConnectionStatus,
  ConversionTask,
  Filter,
  FpgaImageAttribute,
  FpgaImageAttributeName,
  HttpTokensState,
  ImportImageLicenseConfigurationResponse,
  InstanceAttributeName,
  InstanceMetadataEndpointState,
  InstanceMetadataOptionsResponse,
  InstanceState,
  InstanceStatusEvent,
  InstanceTagNotificationAttribute,
  LaunchPermission,
  Monitoring,
  PaymentOption,
  PermissionGroup,
  SnapshotDetail,
  SnapshotTaskDetail,
} from "./models_2";
import {
  CreateVolumePermission,
  ExcessCapacityTerminationPolicy,
  InstanceFamilyCreditSpecification,
  InstanceNetworkInterfaceSpecification,
  LaunchTemplateConfig,
  ReservedInstancesConfiguration,
  RunInstancesMonitoringEnabled,
  ScheduledInstance,
  SnapshotAttributeName,
  SpotFleetRequestConfigData,
  SpotInstanceRequest,
  SpotPlacement,
  TransitGatewayPropagationState,
  UnlimitedSupportedInstanceFamily,
  VolumeModification,
} from "./models_3";
import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";

export interface GetEbsEncryptionByDefaultResult {
  /**
   * <p>Indicates whether encryption by default is enabled.</p>
   */
  EbsEncryptionByDefault?: boolean;
}

export namespace GetEbsEncryptionByDefaultResult {
  export const filterSensitiveLog = (obj: GetEbsEncryptionByDefaultResult): any => ({
    ...obj,
  });
}

export interface GetGroupsForCapacityReservationRequest {
  /**
   * <p>The ID of the Capacity Reservation.</p>
   */
  CapacityReservationId: string | undefined;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return for the request in a single page. The remaining results can be seen by sending another request with the returned <code>nextToken</code> value. This value can be between 5 and 500. If <code>maxResults</code> is given a larger value than 500, you receive an error.</p>
   */
  MaxResults?: number;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace GetGroupsForCapacityReservationRequest {
  export const filterSensitiveLog = (obj: GetGroupsForCapacityReservationRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a resource group to which a Capacity Reservation has been added.</p>
 */
export interface CapacityReservationGroup {
  /**
   * <p>The ARN of the resource group.</p>
   */
  GroupArn?: string;

  /**
   * <p>The ID of the AWS account that owns the resource group.</p>
   */
  OwnerId?: string;
}

export namespace CapacityReservationGroup {
  export const filterSensitiveLog = (obj: CapacityReservationGroup): any => ({
    ...obj,
  });
}

export interface GetGroupsForCapacityReservationResult {
  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>Information about the resource groups to which the Capacity Reservation has been added.</p>
   */
  CapacityReservationGroups?: CapacityReservationGroup[];
}

export namespace GetGroupsForCapacityReservationResult {
  export const filterSensitiveLog = (obj: GetGroupsForCapacityReservationResult): any => ({
    ...obj,
  });
}

export interface GetHostReservationPurchasePreviewRequest {
  /**
   * <p>The IDs of the Dedicated Hosts with which the reservation is associated.</p>
   */
  HostIdSet: string[] | undefined;

  /**
   * <p>The offering ID of the reservation.</p>
   */
  OfferingId: string | undefined;
}

export namespace GetHostReservationPurchasePreviewRequest {
  export const filterSensitiveLog = (obj: GetHostReservationPurchasePreviewRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the result of the purchase.</p>
 */
export interface Purchase {
  /**
   * <p>The currency in which the <code>UpfrontPrice</code> and <code>HourlyPrice</code>
   *             amounts are specified. At this time, the only supported currency is
   *             <code>USD</code>.</p>
   */
  CurrencyCode?: CurrencyCodeValues | string;

  /**
   * <p>The duration of the reservation's term in seconds.</p>
   */
  Duration?: number;

  /**
   * <p>The IDs of the Dedicated Hosts associated with the reservation.</p>
   */
  HostIdSet?: string[];

  /**
   * <p>The ID of the reservation.</p>
   */
  HostReservationId?: string;

  /**
   * <p>The hourly price of the reservation per hour.</p>
   */
  HourlyPrice?: string;

  /**
   * <p>The instance family on the Dedicated Host that the reservation can be associated
   *             with.</p>
   */
  InstanceFamily?: string;

  /**
   * <p>The payment option for the reservation.</p>
   */
  PaymentOption?: PaymentOption | string;

  /**
   * <p>The upfront price of the reservation.</p>
   */
  UpfrontPrice?: string;
}

export namespace Purchase {
  export const filterSensitiveLog = (obj: Purchase): any => ({
    ...obj,
  });
}

export interface GetHostReservationPurchasePreviewResult {
  /**
   * <p>The currency in which the <code>totalUpfrontPrice</code> and
   *                 <code>totalHourlyPrice</code> amounts are specified. At this time, the only
   *             supported currency is <code>USD</code>.</p>
   */
  CurrencyCode?: CurrencyCodeValues | string;

  /**
   * <p>The purchase information of the Dedicated Host reservation and the Dedicated Hosts
   *             associated with it.</p>
   */
  Purchase?: Purchase[];

  /**
   * <p>The potential total hourly price of the reservation per hour.</p>
   */
  TotalHourlyPrice?: string;

  /**
   * <p>The potential total upfront price. This is billed immediately.</p>
   */
  TotalUpfrontPrice?: string;
}

export namespace GetHostReservationPurchasePreviewResult {
  export const filterSensitiveLog = (obj: GetHostReservationPurchasePreviewResult): any => ({
    ...obj,
  });
}

export interface GetLaunchTemplateDataRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId: string | undefined;
}

export namespace GetLaunchTemplateDataRequest {
  export const filterSensitiveLog = (obj: GetLaunchTemplateDataRequest): any => ({
    ...obj,
  });
}

export interface GetLaunchTemplateDataResult {
  /**
   * <p>The instance data.</p>
   */
  LaunchTemplateData?: ResponseLaunchTemplateData;
}

export namespace GetLaunchTemplateDataResult {
  export const filterSensitiveLog = (obj: GetLaunchTemplateDataResult): any => ({
    ...obj,
  });
}

export interface GetManagedPrefixListAssociationsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the prefix list.</p>
   */
  PrefixListId: string | undefined;

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export namespace GetManagedPrefixListAssociationsRequest {
  export const filterSensitiveLog = (obj: GetManagedPrefixListAssociationsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the resource with which a prefix list is associated.</p>
 */
export interface PrefixListAssociation {
  /**
   * <p>The ID of the resource.</p>
   */
  ResourceId?: string;

  /**
   * <p>The owner of the resource.</p>
   */
  ResourceOwner?: string;
}

export namespace PrefixListAssociation {
  export const filterSensitiveLog = (obj: PrefixListAssociation): any => ({
    ...obj,
  });
}

export interface GetManagedPrefixListAssociationsResult {
  /**
   * <p>Information about the associations.</p>
   */
  PrefixListAssociations?: PrefixListAssociation[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace GetManagedPrefixListAssociationsResult {
  export const filterSensitiveLog = (obj: GetManagedPrefixListAssociationsResult): any => ({
    ...obj,
  });
}

export interface GetManagedPrefixListEntriesRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the prefix list.</p>
   */
  PrefixListId: string | undefined;

  /**
   * <p>The version of the prefix list for which to return the entries. The default is the current version.</p>
   */
  TargetVersion?: number;

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export namespace GetManagedPrefixListEntriesRequest {
  export const filterSensitiveLog = (obj: GetManagedPrefixListEntriesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a prefix list entry.</p>
 */
export interface PrefixListEntry {
  /**
   * <p>The CIDR block.</p>
   */
  Cidr?: string;

  /**
   * <p>The description.</p>
   */
  Description?: string;
}

export namespace PrefixListEntry {
  export const filterSensitiveLog = (obj: PrefixListEntry): any => ({
    ...obj,
  });
}

export interface GetManagedPrefixListEntriesResult {
  /**
   * <p>Information about the prefix list entries.</p>
   */
  Entries?: PrefixListEntry[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace GetManagedPrefixListEntriesResult {
  export const filterSensitiveLog = (obj: GetManagedPrefixListEntriesResult): any => ({
    ...obj,
  });
}

export interface GetPasswordDataRequest {
  /**
   * <p>The ID of the Windows instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace GetPasswordDataRequest {
  export const filterSensitiveLog = (obj: GetPasswordDataRequest): any => ({
    ...obj,
  });
}

export interface GetPasswordDataResult {
  /**
   * <p>The ID of the Windows instance.</p>
   */
  InstanceId?: string;

  /**
   * <p>The password of the instance. Returns an empty string if the password is not
   *             available.</p>
   */
  PasswordData?: string;

  /**
   * <p>The time the data was last updated.</p>
   */
  Timestamp?: Date;
}

export namespace GetPasswordDataResult {
  export const filterSensitiveLog = (obj: GetPasswordDataResult): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for GetReservedInstanceExchangeQuote.</p>
 */
export interface GetReservedInstancesExchangeQuoteRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *       and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *       Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The IDs of the Convertible Reserved Instances to exchange.</p>
   */
  ReservedInstanceIds: string[] | undefined;

  /**
   * <p>The configuration of the target Convertible Reserved Instance to exchange for your
   *             current Convertible Reserved Instances.</p>
   */
  TargetConfigurations?: TargetConfigurationRequest[];
}

export namespace GetReservedInstancesExchangeQuoteRequest {
  export const filterSensitiveLog = (obj: GetReservedInstancesExchangeQuoteRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The cost associated with the Reserved Instance.</p>
 */
export interface ReservationValue {
  /**
   * <p>The hourly rate of the reservation.</p>
   */
  HourlyPrice?: string;

  /**
   * <p>The balance of the total value (the sum of remainingUpfrontValue + hourlyPrice * number of hours remaining).</p>
   */
  RemainingTotalValue?: string;

  /**
   * <p>The remaining upfront cost of the reservation.</p>
   */
  RemainingUpfrontValue?: string;
}

export namespace ReservationValue {
  export const filterSensitiveLog = (obj: ReservationValue): any => ({
    ...obj,
  });
}

/**
 * <p>The total value of the Convertible Reserved Instance.</p>
 */
export interface ReservedInstanceReservationValue {
  /**
   * <p>The total value of the Convertible Reserved Instance that you are exchanging.</p>
   */
  ReservationValue?: ReservationValue;

  /**
   * <p>The ID of the Convertible Reserved Instance that you are exchanging.</p>
   */
  ReservedInstanceId?: string;
}

export namespace ReservedInstanceReservationValue {
  export const filterSensitiveLog = (obj: ReservedInstanceReservationValue): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the Convertible Reserved Instance offering.</p>
 */
export interface TargetConfiguration {
  /**
   * <p>The number of instances the Convertible Reserved Instance offering can be applied to. This parameter is
   *       reserved and cannot be specified in a request</p>
   */
  InstanceCount?: number;

  /**
   * <p>The ID of the Convertible Reserved Instance offering.</p>
   */
  OfferingId?: string;
}

export namespace TargetConfiguration {
  export const filterSensitiveLog = (obj: TargetConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>The total value of the new Convertible Reserved Instances.</p>
 */
export interface TargetReservationValue {
  /**
   * <p>The total value of the Convertible Reserved Instances that make up the exchange. This is the sum of
   *       the list value, remaining upfront price, and additional upfront cost of the exchange.</p>
   */
  ReservationValue?: ReservationValue;

  /**
   * <p>The configuration of the Convertible Reserved Instances that make up the exchange.</p>
   */
  TargetConfiguration?: TargetConfiguration;
}

export namespace TargetReservationValue {
  export const filterSensitiveLog = (obj: TargetReservationValue): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of GetReservedInstancesExchangeQuote.</p>
 */
export interface GetReservedInstancesExchangeQuoteResult {
  /**
   * <p>The currency of the transaction.</p>
   */
  CurrencyCode?: string;

  /**
   * <p>If <code>true</code>, the exchange is valid. If <code>false</code>, the exchange cannot be completed.</p>
   */
  IsValidExchange?: boolean;

  /**
   * <p>The new end date of the reservation term.</p>
   */
  OutputReservedInstancesWillExpireAt?: Date;

  /**
   * <p>The total true upfront charge for the exchange.</p>
   */
  PaymentDue?: string;

  /**
   * <p>The cost associated with the Reserved Instance.</p>
   */
  ReservedInstanceValueRollup?: ReservationValue;

  /**
   * <p>The configuration of your Convertible Reserved Instances.</p>
   */
  ReservedInstanceValueSet?: ReservedInstanceReservationValue[];

  /**
   * <p>The cost associated with the Reserved Instance.</p>
   */
  TargetConfigurationValueRollup?: ReservationValue;

  /**
   * <p>The values of the target Convertible Reserved Instances.</p>
   */
  TargetConfigurationValueSet?: TargetReservationValue[];

  /**
   * <p>Describes the reason why the exchange cannot be completed.</p>
   */
  ValidationFailureReason?: string;
}

export namespace GetReservedInstancesExchangeQuoteResult {
  export const filterSensitiveLog = (obj: GetReservedInstancesExchangeQuoteResult): any => ({
    ...obj,
  });
}

export interface GetTransitGatewayAttachmentPropagationsRequest {
  /**
   * <p>The ID of the attachment.</p>
   */
  TransitGatewayAttachmentId: string | undefined;

  /**
   * <p>One or more filters. The possible values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>transit-gateway-route-table-id</code> - The ID of the transit gateway route table.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace GetTransitGatewayAttachmentPropagationsRequest {
  export const filterSensitiveLog = (obj: GetTransitGatewayAttachmentPropagationsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a propagation route table.</p>
 */
export interface TransitGatewayAttachmentPropagation {
  /**
   * <p>The ID of the propagation route table.</p>
   */
  TransitGatewayRouteTableId?: string;

  /**
   * <p>The state of the propagation route table.</p>
   */
  State?: TransitGatewayPropagationState | string;
}

export namespace TransitGatewayAttachmentPropagation {
  export const filterSensitiveLog = (obj: TransitGatewayAttachmentPropagation): any => ({
    ...obj,
  });
}

export interface GetTransitGatewayAttachmentPropagationsResult {
  /**
   * <p>Information about the propagation route tables.</p>
   */
  TransitGatewayAttachmentPropagations?: TransitGatewayAttachmentPropagation[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace GetTransitGatewayAttachmentPropagationsResult {
  export const filterSensitiveLog = (obj: GetTransitGatewayAttachmentPropagationsResult): any => ({
    ...obj,
  });
}

export interface GetTransitGatewayMulticastDomainAssociationsRequest {
  /**
   * <p>The ID of the transit gateway multicast domain.</p>
   */
  TransitGatewayMulticastDomainId?: string;

  /**
   * <p>One or more filters. The possible values are:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>resource-id</code> - The ID of the resource.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>resource-type</code> - The type of resource. The valid value is: <code>vpc</code>.</p>
   *             </li>
   *             <li>
   *
   *                 <p>
   *                   <code>state</code> - The state of the subnet association. Valid values are
   *                         <code>associated</code> |
   *                         <code>associating</code>
   *                     | <code>disassociated</code> | <code>disassociating</code>.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>subnet-id</code> - The ID of the subnet.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>transit-gateway-attachment-id</code> - The id of the transit gateway attachment.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace GetTransitGatewayMulticastDomainAssociationsRequest {
  export const filterSensitiveLog = (obj: GetTransitGatewayMulticastDomainAssociationsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the resources associated with the transit gateway multicast domain.</p>
 */
export interface TransitGatewayMulticastDomainAssociation {
  /**
   * <p>The ID of the transit gateway attachment.</p>
   */
  TransitGatewayAttachmentId?: string;

  /**
   * <p>The ID of the resource.</p>
   */
  ResourceId?: string;

  /**
   * <p>The type of resource, for example a VPC attachment.</p>
   */
  ResourceType?: TransitGatewayAttachmentResourceType | string;

  /**
   * <p>The subnet associated with the transit gateway multicast domain.</p>
   */
  Subnet?: SubnetAssociation;
}

export namespace TransitGatewayMulticastDomainAssociation {
  export const filterSensitiveLog = (obj: TransitGatewayMulticastDomainAssociation): any => ({
    ...obj,
  });
}

export interface GetTransitGatewayMulticastDomainAssociationsResult {
  /**
   * <p>Information about the multicast domain associations.</p>
   */
  MulticastDomainAssociations?: TransitGatewayMulticastDomainAssociation[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace GetTransitGatewayMulticastDomainAssociationsResult {
  export const filterSensitiveLog = (obj: GetTransitGatewayMulticastDomainAssociationsResult): any => ({
    ...obj,
  });
}

export interface GetTransitGatewayPrefixListReferencesRequest {
  /**
   * <p>The ID of the transit gateway route table.</p>
   */
  TransitGatewayRouteTableId: string | undefined;

  /**
   * <p>One or more filters. The possible values are:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>attachment.resource-id</code> - The ID of the resource for the attachment.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>attachment.resource-type</code> - The type of resource for the
   *                     attachment. Valid values are <code>vpc</code> | <code>vpn</code> |
   *                         <code>direct-connect-gateway</code> | <code>peering</code>.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>attachment.transit-gateway-attachment-id</code> - The ID of the attachment.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>is-blackhole</code> - Whether traffic matching the route is blocked (<code>true</code> | <code>false</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>prefix-list-id</code> - The ID of the prefix list.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>prefix-list-owner-id</code> - The ID of the owner of the prefix list.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>state</code> - The state of the prefix list reference (<code>pending</code> | <code>available</code> | <code>modifying</code> | <code>deleting</code>).</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace GetTransitGatewayPrefixListReferencesRequest {
  export const filterSensitiveLog = (obj: GetTransitGatewayPrefixListReferencesRequest): any => ({
    ...obj,
  });
}

export interface GetTransitGatewayPrefixListReferencesResult {
  /**
   * <p>Information about the prefix list references.</p>
   */
  TransitGatewayPrefixListReferences?: TransitGatewayPrefixListReference[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace GetTransitGatewayPrefixListReferencesResult {
  export const filterSensitiveLog = (obj: GetTransitGatewayPrefixListReferencesResult): any => ({
    ...obj,
  });
}

export interface GetTransitGatewayRouteTableAssociationsRequest {
  /**
   * <p>The ID of the transit gateway route table.</p>
   */
  TransitGatewayRouteTableId: string | undefined;

  /**
   * <p>One or more filters. The possible values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>resource-id</code> - The ID of the resource.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>resource-type</code> - The resource type. Valid values are <code>vpc</code> |
   *                         <code>vpn</code> | <code>direct-connect-gateway</code> |
   *                 <code>peering</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>transit-gateway-attachment-id</code> - The ID of the attachment.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace GetTransitGatewayRouteTableAssociationsRequest {
  export const filterSensitiveLog = (obj: GetTransitGatewayRouteTableAssociationsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an association between a route table and a resource attachment.</p>
 */
export interface TransitGatewayRouteTableAssociation {
  /**
   * <p>The ID of the attachment.</p>
   */
  TransitGatewayAttachmentId?: string;

  /**
   * <p>The ID of the resource.</p>
   */
  ResourceId?: string;

  /**
   * <p>The resource type. Note that the <code>tgw-peering</code> resource type has been deprecated.</p>
   */
  ResourceType?: TransitGatewayAttachmentResourceType | string;

  /**
   * <p>The state of the association.</p>
   */
  State?: TransitGatewayAssociationState | string;
}

export namespace TransitGatewayRouteTableAssociation {
  export const filterSensitiveLog = (obj: TransitGatewayRouteTableAssociation): any => ({
    ...obj,
  });
}

export interface GetTransitGatewayRouteTableAssociationsResult {
  /**
   * <p>Information about the associations.</p>
   */
  Associations?: TransitGatewayRouteTableAssociation[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace GetTransitGatewayRouteTableAssociationsResult {
  export const filterSensitiveLog = (obj: GetTransitGatewayRouteTableAssociationsResult): any => ({
    ...obj,
  });
}

export interface GetTransitGatewayRouteTablePropagationsRequest {
  /**
   * <p>The ID of the transit gateway route table.</p>
   */
  TransitGatewayRouteTableId: string | undefined;

  /**
   * <p>One or more filters. The possible values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>resource-id</code> - The ID of the resource.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>resource-type</code> - The resource type. Valid values are <code>vpc</code> |
   *                         <code>vpn</code> | <code>direct-connect-gateway</code> |
   *                 <code>peering</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>transit-gateway-attachment-id</code> - The ID of the attachment.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace GetTransitGatewayRouteTablePropagationsRequest {
  export const filterSensitiveLog = (obj: GetTransitGatewayRouteTablePropagationsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a route table propagation.</p>
 */
export interface TransitGatewayRouteTablePropagation {
  /**
   * <p>The ID of the attachment.</p>
   */
  TransitGatewayAttachmentId?: string;

  /**
   * <p>The ID of the resource.</p>
   */
  ResourceId?: string;

  /**
   * <p>The type of resource. Note that the <code>tgw-peering</code> resource type has been deprecated.</p>
   */
  ResourceType?: TransitGatewayAttachmentResourceType | string;

  /**
   * <p>The state of the resource.</p>
   */
  State?: TransitGatewayPropagationState | string;
}

export namespace TransitGatewayRouteTablePropagation {
  export const filterSensitiveLog = (obj: TransitGatewayRouteTablePropagation): any => ({
    ...obj,
  });
}

export interface GetTransitGatewayRouteTablePropagationsResult {
  /**
   * <p>Information about the route table propagations.</p>
   */
  TransitGatewayRouteTablePropagations?: TransitGatewayRouteTablePropagation[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace GetTransitGatewayRouteTablePropagationsResult {
  export const filterSensitiveLog = (obj: GetTransitGatewayRouteTablePropagationsResult): any => ({
    ...obj,
  });
}

export interface ImportClientVpnClientCertificateRevocationListRequest {
  /**
   * <p>The ID of the Client VPN endpoint to which the client certificate revocation list applies.</p>
   */
  ClientVpnEndpointId: string | undefined;

  /**
   * <p>The client certificate revocation list file. For more information, see <a href="https://docs.aws.amazon.com/vpn/latest/clientvpn-admin/cvpn-working-certificates.html#cvpn-working-certificates-generate">Generate a Client Certificate Revocation List</a> in the
   * 				<i>AWS Client VPN Administrator Guide</i>.</p>
   */
  CertificateRevocationList: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace ImportClientVpnClientCertificateRevocationListRequest {
  export const filterSensitiveLog = (obj: ImportClientVpnClientCertificateRevocationListRequest): any => ({
    ...obj,
  });
}

export interface ImportClientVpnClientCertificateRevocationListResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  Return?: boolean;
}

export namespace ImportClientVpnClientCertificateRevocationListResult {
  export const filterSensitiveLog = (obj: ImportClientVpnClientCertificateRevocationListResult): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the client-specific data.</p>
 */
export interface ClientData {
  /**
   * <p>A user-defined comment about the disk upload.</p>
   */
  Comment?: string;

  /**
   * <p>The time that the disk upload ends.</p>
   */
  UploadEnd?: Date;

  /**
   * <p>The size of the uploaded disk image, in GiB.</p>
   */
  UploadSize?: number;

  /**
   * <p>The time that the disk upload starts.</p>
   */
  UploadStart?: Date;
}

export namespace ClientData {
  export const filterSensitiveLog = (obj: ClientData): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the Amazon S3 bucket for the disk image.</p>
 */
export interface UserBucket {
  /**
   * <p>The name of the Amazon S3 bucket where the disk image is located.</p>
   */
  S3Bucket?: string;

  /**
   * <p>The file name of the disk image.</p>
   */
  S3Key?: string;
}

export namespace UserBucket {
  export const filterSensitiveLog = (obj: UserBucket): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the disk container object for an import image task.</p>
 */
export interface ImageDiskContainer {
  /**
   * <p>The description of the disk image.</p>
   */
  Description?: string;

  /**
   * <p>The block device mapping for the disk.</p>
   */
  DeviceName?: string;

  /**
   * <p>The format of the disk image being imported.</p>
   *          <p>Valid values: <code>OVA</code> | <code>VHD</code> | <code>VHDX</code> |<code>VMDK</code>
   *          </p>
   */
  Format?: string;

  /**
   * <p>The ID of the EBS snapshot to be used for importing the snapshot.</p>
   */
  SnapshotId?: string;

  /**
   * <p>The URL to the Amazon S3-based disk image being imported. The URL can either be a https URL (https://..) or an
   *    Amazon S3 URL (s3://..)</p>
   */
  Url?: string;

  /**
   * <p>The S3 bucket for the disk image.</p>
   */
  UserBucket?: UserBucket;
}

export namespace ImageDiskContainer {
  export const filterSensitiveLog = (obj: ImageDiskContainer): any => ({
    ...obj,
  });
}

/**
 * <p>The request information of license configurations.</p>
 */
export interface ImportImageLicenseConfigurationRequest {
  /**
   * <p>The ARN of a license configuration.</p>
   */
  LicenseConfigurationArn?: string;
}

export namespace ImportImageLicenseConfigurationRequest {
  export const filterSensitiveLog = (obj: ImportImageLicenseConfigurationRequest): any => ({
    ...obj,
  });
}

export interface ImportImageRequest {
  /**
   * <p>The architecture of the virtual machine.</p>
   *          <p>Valid values: <code>i386</code> | <code>x86_64</code> | <code>arm64</code>
   *          </p>
   */
  Architecture?: string;

  /**
   * <p>The client-specific data.</p>
   */
  ClientData?: ClientData;

  /**
   * <p>The token to enable idempotency for VM import requests.</p>
   */
  ClientToken?: string;

  /**
   * <p>A description string for the import image task.</p>
   */
  Description?: string;

  /**
   * <p>Information about the disk containers.</p>
   */
  DiskContainers?: ImageDiskContainer[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Specifies whether the destination AMI of the imported image should be encrypted. The default CMK for EBS is used
   *    unless you specify a non-default AWS Key Management Service (AWS KMS) CMK using <code>KmsKeyId</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html">Amazon EBS Encryption</a> in the
   *     <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  Encrypted?: boolean;

  /**
   * <p>The target hypervisor platform.</p>
   *          <p>Valid values: <code>xen</code>
   *          </p>
   */
  Hypervisor?: string;

  /**
   * <p>An identifier for the symmetric AWS Key Management Service (AWS KMS) customer master key (CMK) to use when creating the
   *    encrypted AMI. This parameter is only required if you want to use a non-default CMK; if this
   *    parameter is not specified, the default CMK for EBS is used. If a <code>KmsKeyId</code> is
   *    specified, the <code>Encrypted</code> flag must also be set. </p>
   *          <p>The CMK identifier may be provided in any of the following formats: </p>
   *          <ul>
   *             <li>
   *                <p>Key ID</p>
   *             </li>
   *             <li>
   *                <p>Key alias. The alias ARN contains the <code>arn:aws:kms</code> namespace, followed by the Region of the CMK, the AWS account ID of the CMK owner, the <code>alias</code> namespace, and then the CMK alias. For example, arn:aws:kms:<i>us-east-1</i>:<i>012345678910</i>:alias/<i>ExampleAlias</i>.</p>
   *             </li>
   *             <li>
   *                <p>ARN using key ID. The ID ARN contains the <code>arn:aws:kms</code> namespace, followed by the Region of the CMK, the AWS account ID of the CMK owner, the <code>key</code> namespace, and then the CMK ID. For example, arn:aws:kms:<i>us-east-1</i>:<i>012345678910</i>:key/<i>abcd1234-a123-456a-a12b-a123b4cd56ef</i>.</p>
   *             </li>
   *             <li>
   *                <p>ARN using key alias. The alias ARN contains the <code>arn:aws:kms</code> namespace, followed by the Region of the CMK, the AWS account ID of the CMK owner, the <code>alias</code> namespace, and then the CMK alias. For example, arn:aws:kms:<i>us-east-1</i>:<i>012345678910</i>:alias/<i>ExampleAlias</i>. </p>
   *             </li>
   *          </ul>
   *          <p>AWS parses <code>KmsKeyId</code> asynchronously, meaning that the action you call may appear to complete even
   *    though you provided an invalid identifier. This action will eventually report failure. </p>
   *          <p>The specified CMK must exist in the Region that the AMI is being copied to.</p>
   *          <p>Amazon EBS does not support asymmetric CMKs.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The license type to be used for the Amazon Machine Image (AMI) after importing.</p>
   *          <p>By default, we detect the source-system operating system (OS) and apply the appropriate license. Specify
   *     <code>AWS</code> to replace the source-system license with an AWS license, if appropriate. Specify <code>BYOL</code>
   *    to retain the source-system license, if appropriate.</p>
   *          <p>To use <code>BYOL</code>, you must have existing licenses with rights to use these licenses in a third party
   *    cloud, such as AWS. For more information, see <a href="https://docs.aws.amazon.com/vm-import/latest/userguide/vmimport-image-import.html#prerequisites-image">Prerequisites</a> in the
   *    VM Import/Export User Guide.</p>
   */
  LicenseType?: string;

  /**
   * <p>The operating system of the virtual machine.</p>
   *          <p>Valid values: <code>Windows</code> | <code>Linux</code>
   *          </p>
   */
  Platform?: string;

  /**
   * <p>The name of the role to use when not using the default role, 'vmimport'.</p>
   */
  RoleName?: string;

  /**
   * <p>The ARNs of the license configurations.</p>
   */
  LicenseSpecifications?: ImportImageLicenseConfigurationRequest[];

  /**
   * <p>The tags to apply to the image being imported.</p>
   */
  TagSpecifications?: TagSpecification[];
}

export namespace ImportImageRequest {
  export const filterSensitiveLog = (obj: ImportImageRequest): any => ({
    ...obj,
  });
}

export interface ImportImageResult {
  /**
   * <p>The architecture of the virtual machine.</p>
   */
  Architecture?: string;

  /**
   * <p>A description of the import task.</p>
   */
  Description?: string;

  /**
   * <p>Indicates whether the AMI is encrypted.</p>
   */
  Encrypted?: boolean;

  /**
   * <p>The target hypervisor of the import task.</p>
   */
  Hypervisor?: string;

  /**
   * <p>The ID of the Amazon Machine Image (AMI) created by the import task.</p>
   */
  ImageId?: string;

  /**
   * <p>The task ID of the import image task.</p>
   */
  ImportTaskId?: string;

  /**
   * <p>The identifier for the symmetric AWS Key Management Service (AWS KMS) customer master key
   *    (CMK) that was used to create the encrypted AMI.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The license type of the virtual machine.</p>
   */
  LicenseType?: string;

  /**
   * <p>The operating system of the virtual machine.</p>
   */
  Platform?: string;

  /**
   * <p>The progress of the task.</p>
   */
  Progress?: string;

  /**
   * <p>Information about the snapshots.</p>
   */
  SnapshotDetails?: SnapshotDetail[];

  /**
   * <p>A brief status of the task.</p>
   */
  Status?: string;

  /**
   * <p>A detailed status message of the import task.</p>
   */
  StatusMessage?: string;

  /**
   * <p>The ARNs of the license configurations.</p>
   */
  LicenseSpecifications?: ImportImageLicenseConfigurationResponse[];

  /**
   * <p>Any tags assigned to the image being imported.</p>
   */
  Tags?: Tag[];
}

export namespace ImportImageResult {
  export const filterSensitiveLog = (obj: ImportImageResult): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a disk image.</p>
 */
export interface DiskImageDetail {
  /**
   * <p>The size of the disk image, in GiB.</p>
   */
  Bytes: number | undefined;

  /**
   * <p>The disk image format.</p>
   */
  Format: DiskImageFormat | string | undefined;

  /**
   * <p>A presigned URL for the import manifest stored in Amazon S3 and presented here as an Amazon S3 presigned URL.
   *    For information about creating a presigned URL for an Amazon S3 object, read the "Query String Request Authentication
   *    Alternative" section of the <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/RESTAuthentication.html">Authenticating REST Requests</a> topic in the <i>Amazon Simple Storage Service Developer
   *     Guide</i>.</p>
   *          <p>For information about the import manifest referenced by this API action, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/manifest.html">VM Import Manifest</a>.</p>
   */
  ImportManifestUrl: string | undefined;
}

export namespace DiskImageDetail {
  export const filterSensitiveLog = (obj: DiskImageDetail): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an EBS volume.</p>
 */
export interface VolumeDetail {
  /**
   * <p>The size of the volume, in GiB.</p>
   */
  Size: number | undefined;
}

export namespace VolumeDetail {
  export const filterSensitiveLog = (obj: VolumeDetail): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a disk image.</p>
 */
export interface DiskImage {
  /**
   * <p>A description of the disk image.</p>
   */
  Description?: string;

  /**
   * <p>Information about the disk image.</p>
   */
  Image?: DiskImageDetail;

  /**
   * <p>Information about the volume.</p>
   */
  Volume?: VolumeDetail;
}

export namespace DiskImage {
  export const filterSensitiveLog = (obj: DiskImage): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the user data for an instance.</p>
 */
export interface UserData {
  /**
   * <p>The user data. If you are using an AWS SDK or command line tool, Base64-encoding is performed for you, and you
   *    can load the text from a file. Otherwise, you must provide Base64-encoded text.</p>
   */
  Data?: string;
}

export namespace UserData {
  export const filterSensitiveLog = (obj: UserData): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the launch specification for VM import.</p>
 */
export interface ImportInstanceLaunchSpecification {
  /**
   * <p>Reserved.</p>
   */
  AdditionalInfo?: string;

  /**
   * <p>The architecture of the instance.</p>
   */
  Architecture?: ArchitectureValues | string;

  /**
   * <p>The security group IDs.</p>
   */
  GroupIds?: string[];

  /**
   * <p>The security group names.</p>
   */
  GroupNames?: string[];

  /**
   * <p>Indicates whether an instance stops or terminates when you initiate shutdown from the instance (using the
   *    operating system command for system shutdown).</p>
   */
  InstanceInitiatedShutdownBehavior?: ShutdownBehavior | string;

  /**
   * <p>The instance type. For more information about the instance types that you can import, see <a href="https://docs.aws.amazon.com/vm-import/latest/userguide/vmie_prereqs.html#vmimport-instance-types">Instance Types</a> in the
   *    VM Import/Export User Guide.</p>
   */
  InstanceType?: _InstanceType | string;

  /**
   * <p>Indicates whether monitoring is enabled.</p>
   */
  Monitoring?: boolean;

  /**
   * <p>The placement information for the instance.</p>
   */
  Placement?: Placement;

  /**
   * <p>[EC2-VPC] An available IP address from the IP address range of the subnet.</p>
   */
  PrivateIpAddress?: string;

  /**
   * <p>[EC2-VPC] The ID of the subnet in which to launch the instance.</p>
   */
  SubnetId?: string;

  /**
   * <p>The Base64-encoded user data to make available to the instance.</p>
   */
  UserData?: UserData;
}

export namespace ImportInstanceLaunchSpecification {
  export const filterSensitiveLog = (obj: ImportInstanceLaunchSpecification): any => ({
    ...obj,
    ...(obj.UserData && { UserData: SENSITIVE_STRING }),
  });
}

export interface ImportInstanceRequest {
  /**
   * <p>A description for the instance being imported.</p>
   */
  Description?: string;

  /**
   * <p>The disk image.</p>
   */
  DiskImages?: DiskImage[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The launch specification.</p>
   */
  LaunchSpecification?: ImportInstanceLaunchSpecification;

  /**
   * <p>The instance operating system.</p>
   */
  Platform: PlatformValues | string | undefined;
}

export namespace ImportInstanceRequest {
  export const filterSensitiveLog = (obj: ImportInstanceRequest): any => ({
    ...obj,
    ...(obj.LaunchSpecification && {
      LaunchSpecification: ImportInstanceLaunchSpecification.filterSensitiveLog(obj.LaunchSpecification),
    }),
  });
}

export interface ImportInstanceResult {
  /**
   * <p>Information about the conversion task.</p>
   */
  ConversionTask?: ConversionTask;
}

export namespace ImportInstanceResult {
  export const filterSensitiveLog = (obj: ImportInstanceResult): any => ({
    ...obj,
  });
}

export interface ImportKeyPairRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>A unique name for the key pair.</p>
   */
  KeyName: string | undefined;

  /**
   * <p>The public key. For API calls, the text must be base64-encoded. For command line tools, base64 encoding is performed for you.</p>
   */
  PublicKeyMaterial: Uint8Array | undefined;

  /**
   * <p>The tags to apply to the imported key pair.</p>
   */
  TagSpecifications?: TagSpecification[];
}

export namespace ImportKeyPairRequest {
  export const filterSensitiveLog = (obj: ImportKeyPairRequest): any => ({
    ...obj,
  });
}

export interface ImportKeyPairResult {
  /**
   * <p>The MD5 public key fingerprint as specified in section 4 of RFC 4716.</p>
   */
  KeyFingerprint?: string;

  /**
   * <p>The key pair name you provided.</p>
   */
  KeyName?: string;

  /**
   * <p>The ID of the resulting key pair.</p>
   */
  KeyPairId?: string;

  /**
   * <p>The tags applied to the imported key pair.</p>
   */
  Tags?: Tag[];
}

export namespace ImportKeyPairResult {
  export const filterSensitiveLog = (obj: ImportKeyPairResult): any => ({
    ...obj,
  });
}

/**
 * <p>The disk container object for the import snapshot request.</p>
 */
export interface SnapshotDiskContainer {
  /**
   * <p>The description of the disk image being imported.</p>
   */
  Description?: string;

  /**
   * <p>The format of the disk image being imported.</p>
   *          <p>Valid values: <code>VHD</code> | <code>VMDK</code>
   *          </p>
   */
  Format?: string;

  /**
   * <p>The URL to the Amazon S3-based disk image being imported. It can either be a https URL (https://..) or an Amazon
   *    S3 URL (s3://..).</p>
   */
  Url?: string;

  /**
   * <p>The Amazon S3 bucket for the disk image.</p>
   */
  UserBucket?: UserBucket;
}

export namespace SnapshotDiskContainer {
  export const filterSensitiveLog = (obj: SnapshotDiskContainer): any => ({
    ...obj,
  });
}

export interface ImportSnapshotRequest {
  /**
   * <p>The client-specific data.</p>
   */
  ClientData?: ClientData;

  /**
   * <p>Token to enable idempotency for VM import requests.</p>
   */
  ClientToken?: string;

  /**
   * <p>The description string for the import snapshot task.</p>
   */
  Description?: string;

  /**
   * <p>Information about the disk container.</p>
   */
  DiskContainer?: SnapshotDiskContainer;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Specifies whether the destination snapshot of the imported image should be encrypted. The default CMK for EBS is
   *    used unless you specify a non-default AWS Key Management Service (AWS KMS) CMK using <code>KmsKeyId</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html">Amazon EBS Encryption</a> in the
   *     <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  Encrypted?: boolean;

  /**
   * <p>An identifier for the symmetric AWS Key Management Service (AWS KMS) customer master key (CMK) to use when creating the
   *    encrypted snapshot. This parameter is only required if you want to use a non-default CMK; if this
   *    parameter is not specified, the default CMK for EBS is used. If a <code>KmsKeyId</code> is
   *    specified, the <code>Encrypted</code> flag must also be set. </p>
   *          <p>The CMK identifier may be provided in any of the following formats: </p>
   *          <ul>
   *             <li>
   *                <p>Key ID</p>
   *             </li>
   *             <li>
   *                <p>Key alias. The alias ARN contains the <code>arn:aws:kms</code> namespace, followed by the Region of the CMK, the AWS account ID of the CMK owner, the <code>alias</code> namespace, and then the CMK alias. For example, arn:aws:kms:<i>us-east-1</i>:<i>012345678910</i>:alias/<i>ExampleAlias</i>.</p>
   *             </li>
   *             <li>
   *                <p>ARN using key ID. The ID ARN contains the <code>arn:aws:kms</code> namespace, followed by the Region of the CMK, the AWS account ID of the CMK owner, the <code>key</code> namespace, and then the CMK ID. For example, arn:aws:kms:<i>us-east-1</i>:<i>012345678910</i>:key/<i>abcd1234-a123-456a-a12b-a123b4cd56ef</i>.</p>
   *             </li>
   *             <li>
   *                <p>ARN using key alias. The alias ARN contains the <code>arn:aws:kms</code> namespace, followed by the Region of the CMK, the AWS account ID of the CMK owner, the <code>alias</code> namespace, and then the CMK alias. For example, arn:aws:kms:<i>us-east-1</i>:<i>012345678910</i>:alias/<i>ExampleAlias</i>. </p>
   *             </li>
   *          </ul>
   *          <p>AWS parses <code>KmsKeyId</code> asynchronously, meaning that the action you call may appear to complete even
   *    though you provided an invalid identifier. This action will eventually report failure. </p>
   *          <p>The specified CMK must exist in the Region that the snapshot is being copied to.</p>
   *          <p>Amazon EBS does not support asymmetric CMKs.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The name of the role to use when not using the default role, 'vmimport'.</p>
   */
  RoleName?: string;

  /**
   * <p>The tags to apply to the snapshot being imported.</p>
   */
  TagSpecifications?: TagSpecification[];
}

export namespace ImportSnapshotRequest {
  export const filterSensitiveLog = (obj: ImportSnapshotRequest): any => ({
    ...obj,
  });
}

export interface ImportSnapshotResult {
  /**
   * <p>A description of the import snapshot task.</p>
   */
  Description?: string;

  /**
   * <p>The ID of the import snapshot task.</p>
   */
  ImportTaskId?: string;

  /**
   * <p>Information about the import snapshot task.</p>
   */
  SnapshotTaskDetail?: SnapshotTaskDetail;

  /**
   * <p>Any tags assigned to the snapshot being imported.</p>
   */
  Tags?: Tag[];
}

export namespace ImportSnapshotResult {
  export const filterSensitiveLog = (obj: ImportSnapshotResult): any => ({
    ...obj,
  });
}

export interface ImportVolumeRequest {
  /**
   * <p>The Availability Zone for the resulting EBS volume.</p>
   */
  AvailabilityZone: string | undefined;

  /**
   * <p>A description of the volume.</p>
   */
  Description?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The disk image.</p>
   */
  Image: DiskImageDetail | undefined;

  /**
   * <p>The volume size.</p>
   */
  Volume: VolumeDetail | undefined;
}

export namespace ImportVolumeRequest {
  export const filterSensitiveLog = (obj: ImportVolumeRequest): any => ({
    ...obj,
  });
}

export interface ImportVolumeResult {
  /**
   * <p>Information about the conversion task.</p>
   */
  ConversionTask?: ConversionTask;
}

export namespace ImportVolumeResult {
  export const filterSensitiveLog = (obj: ImportVolumeResult): any => ({
    ...obj,
  });
}

export type ModifyAvailabilityZoneOptInStatus = "not-opted-in" | "opted-in";

export interface ModifyAvailabilityZoneGroupRequest {
  /**
   * <p>The name of the Availability Zone group, Local Zone group, or Wavelength Zone
   *       group.</p>
   */
  GroupName: string | undefined;

  /**
   * <p>Indicates whether you are opted in to the Local Zone group or Wavelength Zone group. The
   *       only valid value is <code>opted-in</code>. You must contact <a href="https://console.aws.amazon.com/support/home#/case/create%3FissueType=customer-service%26serviceCode=general-info%26getting-started%26categoryCode=using-aws%26services">AWS Support</a> to opt out of a Local Zone group, or Wavelength Zone group.</p>
   */
  OptInStatus: ModifyAvailabilityZoneOptInStatus | string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace ModifyAvailabilityZoneGroupRequest {
  export const filterSensitiveLog = (obj: ModifyAvailabilityZoneGroupRequest): any => ({
    ...obj,
  });
}

export interface ModifyAvailabilityZoneGroupResult {
  /**
   * <p>Is <code>true</code> if the request succeeds, and an error otherwise.</p>
   */
  Return?: boolean;
}

export namespace ModifyAvailabilityZoneGroupResult {
  export const filterSensitiveLog = (obj: ModifyAvailabilityZoneGroupResult): any => ({
    ...obj,
  });
}

export interface ModifyCapacityReservationRequest {
  /**
   * <p>The ID of the Capacity Reservation.</p>
   */
  CapacityReservationId: string | undefined;

  /**
   * <p>The number of instances for which to reserve capacity.</p>
   */
  InstanceCount?: number;

  /**
   * <p>The date and time at which the Capacity Reservation expires. When a Capacity Reservation expires, the reserved capacity
   * 			is released and you can no longer launch instances into it. The Capacity Reservation's state changes to
   * 				<code>expired</code> when it reaches its end date and time.</p>
   * 		       <p>The Capacity Reservation is cancelled within an hour from the specified time. For example, if you specify
   * 			5/31/2019, 13:30:55, the Capacity Reservation is guaranteed to end between 13:30:55 and 14:30:55 on 5/31/2019.</p>
   * 		       <p>You must provide an <code>EndDate</code> value if <code>EndDateType</code> is
   * 				<code>limited</code>. Omit <code>EndDate</code> if <code>EndDateType</code> is
   * 				<code>unlimited</code>.</p>
   */
  EndDate?: Date;

  /**
   * <p>Indicates the way in which the Capacity Reservation ends. A Capacity Reservation can have one of the following end
   * 			types:</p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <code>unlimited</code> - The Capacity Reservation remains active until you explicitly cancel it. Do not
   * 					provide an <code>EndDate</code> value if <code>EndDateType</code> is
   * 						<code>unlimited</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>limited</code> - The Capacity Reservation expires automatically at a specified date and time. You must
   * 					provide an <code>EndDate</code> value if <code>EndDateType</code> is
   * 						<code>limited</code>.</p>
   *             </li>
   *          </ul>
   */
  EndDateType?: EndDateType | string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace ModifyCapacityReservationRequest {
  export const filterSensitiveLog = (obj: ModifyCapacityReservationRequest): any => ({
    ...obj,
  });
}

export interface ModifyCapacityReservationResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  Return?: boolean;
}

export namespace ModifyCapacityReservationResult {
  export const filterSensitiveLog = (obj: ModifyCapacityReservationResult): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the DNS server to be used.</p>
 */
export interface DnsServersOptionsModifyStructure {
  /**
   * <p>The IPv4 address range, in CIDR notation, of the DNS servers to be used. You can specify up to
   * 			two DNS servers. Ensure that the DNS servers can be reached by the clients. The specified values
   * 			overwrite the existing values.</p>
   */
  CustomDnsServers?: string[];

  /**
   * <p>Indicates whether DNS servers should be used. Specify <code>False</code> to delete the existing DNS
   * 			servers.</p>
   */
  Enabled?: boolean;
}

export namespace DnsServersOptionsModifyStructure {
  export const filterSensitiveLog = (obj: DnsServersOptionsModifyStructure): any => ({
    ...obj,
  });
}

export interface ModifyClientVpnEndpointRequest {
  /**
   * <p>The ID of the Client VPN endpoint to modify.</p>
   */
  ClientVpnEndpointId: string | undefined;

  /**
   * <p>The ARN of the server certificate to be used. The server certificate must be provisioned in AWS Certificate Manager (ACM).</p>
   */
  ServerCertificateArn?: string;

  /**
   * <p>Information about the client connection logging options.</p>
   * 		       <p>If you enable client connection logging, data about client connections is sent to a
   * 			Cloudwatch Logs log stream. The following information is logged:</p>
   * 		       <ul>
   *             <li>
   *                <p>Client connection requests</p>
   *             </li>
   *             <li>
   *                <p>Client connection results (successful and unsuccessful)</p>
   *             </li>
   *             <li>
   *                <p>Reasons for unsuccessful client connection requests</p>
   *             </li>
   *             <li>
   *                <p>Client connection termination time</p>
   *             </li>
   *          </ul>
   */
  ConnectionLogOptions?: ConnectionLogOptions;

  /**
   * <p>Information about the DNS servers to be used by Client VPN connections. A Client VPN endpoint can have
   * 			up to two DNS servers.</p>
   */
  DnsServers?: DnsServersOptionsModifyStructure;

  /**
   * <p>The port number to assign to the Client VPN endpoint for TCP and UDP traffic.</p>
   * 	        <p>Valid Values: <code>443</code> | <code>1194</code>
   *          </p>
   * 	        <p>Default Value: <code>443</code>
   *          </p>
   */
  VpnPort?: number;

  /**
   * <p>A brief description of the Client VPN endpoint.</p>
   */
  Description?: string;

  /**
   * <p>Indicates whether the VPN is split-tunnel.</p>
   *         <p>For information about split-tunnel VPN endpoints, see <a href="https://docs.aws.amazon.com/vpn/latest/clientvpn-admin/split-tunnel-vpn.html">Split-Tunnel AWS Client VPN Endpoint</a> in the <i>AWS
   *                 Client VPN Administrator Guide</i>.</p>
   */
  SplitTunnel?: boolean;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The IDs of one or more security groups to apply to the target network.</p>
   */
  SecurityGroupIds?: string[];

  /**
   * <p>The ID of the VPC to associate with the Client VPN endpoint.</p>
   */
  VpcId?: string;

  /**
   * <p>Specify whether to enable the self-service portal for the Client VPN endpoint.</p>
   */
  SelfServicePortal?: SelfServicePortal | string;

  /**
   * <p>The options for managing connection authorization for new client connections.</p>
   */
  ClientConnectOptions?: ClientConnectOptions;
}

export namespace ModifyClientVpnEndpointRequest {
  export const filterSensitiveLog = (obj: ModifyClientVpnEndpointRequest): any => ({
    ...obj,
  });
}

export interface ModifyClientVpnEndpointResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  Return?: boolean;
}

export namespace ModifyClientVpnEndpointResult {
  export const filterSensitiveLog = (obj: ModifyClientVpnEndpointResult): any => ({
    ...obj,
  });
}

export interface ModifyDefaultCreditSpecificationRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The instance family.</p>
   */
  InstanceFamily: UnlimitedSupportedInstanceFamily | string | undefined;

  /**
   * <p>The credit option for CPU usage of the instance family.</p>
   *         <p>Valid Values: <code>standard</code> | <code>unlimited</code>
   *          </p>
   */
  CpuCredits: string | undefined;
}

export namespace ModifyDefaultCreditSpecificationRequest {
  export const filterSensitiveLog = (obj: ModifyDefaultCreditSpecificationRequest): any => ({
    ...obj,
  });
}

export interface ModifyDefaultCreditSpecificationResult {
  /**
   * <p>The default credit option for CPU usage of the instance family.</p>
   */
  InstanceFamilyCreditSpecification?: InstanceFamilyCreditSpecification;
}

export namespace ModifyDefaultCreditSpecificationResult {
  export const filterSensitiveLog = (obj: ModifyDefaultCreditSpecificationResult): any => ({
    ...obj,
  });
}

export interface ModifyEbsDefaultKmsKeyIdRequest {
  /**
   * <p>The identifier of the AWS Key Management Service (AWS KMS) customer master key (CMK) to use for Amazon EBS encryption.
   *       If this parameter is not specified, your AWS managed CMK for EBS is used. If <code>KmsKeyId</code> is
   *       specified, the encrypted state must be <code>true</code>.</p>
   *          <p>You can specify the CMK using any of the following:</p>
   *          <ul>
   *             <li>
   *                <p>Key ID. For example, 1234abcd-12ab-34cd-56ef-1234567890ab.</p>
   *             </li>
   *             <li>
   *                <p>Key alias. For example, alias/ExampleAlias.</p>
   *             </li>
   *             <li>
   *                <p>Key ARN. For example, arn:aws:kms:us-east-1:012345678910:key/1234abcd-12ab-34cd-56ef-1234567890ab.</p>
   *             </li>
   *             <li>
   *                <p>Alias ARN. For example, arn:aws:kms:us-east-1:012345678910:alias/ExampleAlias.</p>
   *             </li>
   *          </ul>
   *          <p>AWS authenticates the CMK asynchronously. Therefore, if you specify an ID, alias, or ARN that is not valid,
   *       the action can appear to complete, but eventually fails.</p>
   *          <p>Amazon EBS does not support asymmetric CMKs.</p>
   */
  KmsKeyId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace ModifyEbsDefaultKmsKeyIdRequest {
  export const filterSensitiveLog = (obj: ModifyEbsDefaultKmsKeyIdRequest): any => ({
    ...obj,
  });
}

export interface ModifyEbsDefaultKmsKeyIdResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the default CMK for encryption by default.</p>
   */
  KmsKeyId?: string;
}

export namespace ModifyEbsDefaultKmsKeyIdResult {
  export const filterSensitiveLog = (obj: ModifyEbsDefaultKmsKeyIdResult): any => ({
    ...obj,
  });
}

export interface ModifyFleetRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Indicates whether running instances should be terminated if the total target capacity of
   *          the EC2 Fleet is decreased below the current size of the EC2 Fleet.</p>
   */
  ExcessCapacityTerminationPolicy?: FleetExcessCapacityTerminationPolicy | string;

  /**
   * <p>The launch template and overrides.</p>
   */
  LaunchTemplateConfigs?: FleetLaunchTemplateConfigRequest[];

  /**
   * <p>The ID of the EC2 Fleet.</p>
   */
  FleetId: string | undefined;

  /**
   * <p>The size of the EC2 Fleet.</p>
   */
  TargetCapacitySpecification?: TargetCapacitySpecificationRequest;
}

export namespace ModifyFleetRequest {
  export const filterSensitiveLog = (obj: ModifyFleetRequest): any => ({
    ...obj,
  });
}

export interface ModifyFleetResult {
  /**
   * <p>Is <code>true</code> if the request succeeds, and an error otherwise.</p>
   */
  Return?: boolean;
}

export namespace ModifyFleetResult {
  export const filterSensitiveLog = (obj: ModifyFleetResult): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a load permission.</p>
 */
export interface LoadPermissionRequest {
  /**
   * <p>The name of the group.</p>
   */
  Group?: PermissionGroup | string;

  /**
   * <p>The AWS account ID.</p>
   */
  UserId?: string;
}

export namespace LoadPermissionRequest {
  export const filterSensitiveLog = (obj: LoadPermissionRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes modifications to the load permissions of an Amazon FPGA image (AFI).</p>
 */
export interface LoadPermissionModifications {
  /**
   * <p>The load permissions to add.</p>
   */
  Add?: LoadPermissionRequest[];

  /**
   * <p>The load permissions to remove.</p>
   */
  Remove?: LoadPermissionRequest[];
}

export namespace LoadPermissionModifications {
  export const filterSensitiveLog = (obj: LoadPermissionModifications): any => ({
    ...obj,
  });
}

export type OperationType = "add" | "remove";

export interface ModifyFpgaImageAttributeRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the AFI.</p>
   */
  FpgaImageId: string | undefined;

  /**
   * <p>The name of the attribute.</p>
   */
  Attribute?: FpgaImageAttributeName | string;

  /**
   * <p>The operation type.</p>
   */
  OperationType?: OperationType | string;

  /**
   * <p>The AWS account IDs. This parameter is valid only when modifying the <code>loadPermission</code> attribute.</p>
   */
  UserIds?: string[];

  /**
   * <p>The user groups. This parameter is valid only when modifying the <code>loadPermission</code> attribute.</p>
   */
  UserGroups?: string[];

  /**
   * <p>The product codes. After you add a product code to an AFI, it can't be removed.
   * 		    This parameter is valid only when modifying the <code>productCodes</code> attribute.</p>
   */
  ProductCodes?: string[];

  /**
   * <p>The load permission for the AFI.</p>
   */
  LoadPermission?: LoadPermissionModifications;

  /**
   * <p>A description for the AFI.</p>
   */
  Description?: string;

  /**
   * <p>A name for the AFI.</p>
   */
  Name?: string;
}

export namespace ModifyFpgaImageAttributeRequest {
  export const filterSensitiveLog = (obj: ModifyFpgaImageAttributeRequest): any => ({
    ...obj,
  });
}

export interface ModifyFpgaImageAttributeResult {
  /**
   * <p>Information about the attribute.</p>
   */
  FpgaImageAttribute?: FpgaImageAttribute;
}

export namespace ModifyFpgaImageAttributeResult {
  export const filterSensitiveLog = (obj: ModifyFpgaImageAttributeResult): any => ({
    ...obj,
  });
}

export interface ModifyHostsRequest {
  /**
   * <p>Specify whether to enable or disable auto-placement.</p>
   */
  AutoPlacement?: AutoPlacement | string;

  /**
   * <p>The IDs of the Dedicated Hosts to modify.</p>
   */
  HostIds: string[] | undefined;

  /**
   * <p>Indicates whether to enable or disable host recovery for the Dedicated Host. For more information,
   * 			see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/dedicated-hosts-recovery.html">
   * 				Host Recovery</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  HostRecovery?: HostRecovery | string;

  /**
   * <p>Specifies the instance type to be supported by the Dedicated Host. Specify this parameter to
   * 			modify a Dedicated Host to support only a specific instance type.</p>
   *
   * 		       <p>If you want to modify a Dedicated Host to support multiple instance types in its current instance
   * 			family, omit this parameter and specify <b>InstanceFamily</b>
   * 			instead. You cannot specify <b>InstanceType</b> and
   * 			<b>InstanceFamily</b> in the same request.</p>
   */
  InstanceType?: string;

  /**
   * <p>Specifies the instance family to be supported by the Dedicated Host. Specify this parameter
   * 			to modify a Dedicated Host to support multiple instance types within its current
   * 			instance family.</p>
   *
   * 		       <p>If you want to modify a Dedicated Host to support a specific instance type only, omit this parameter
   * 			and specify <b>InstanceType</b> instead. You cannot specify
   * 			<b>InstanceFamily</b> and <b>InstanceType</b>
   * 			in the same request.</p>
   */
  InstanceFamily?: string;
}

export namespace ModifyHostsRequest {
  export const filterSensitiveLog = (obj: ModifyHostsRequest): any => ({
    ...obj,
  });
}

export interface ModifyHostsResult {
  /**
   * <p>The IDs of the Dedicated Hosts that were successfully modified.</p>
   */
  Successful?: string[];

  /**
   * <p>The IDs of the Dedicated Hosts that could not be modified. Check whether the
   *             setting you requested can be used.</p>
   */
  Unsuccessful?: UnsuccessfulItem[];
}

export namespace ModifyHostsResult {
  export const filterSensitiveLog = (obj: ModifyHostsResult): any => ({
    ...obj,
  });
}

export interface ModifyIdentityIdFormatRequest {
  /**
   * <p>The ARN of the principal, which can be an IAM user, IAM role, or the root user. Specify
   *        <code>all</code> to modify the ID format for all IAM users, IAM roles, and the root user of
   *        the account.</p>
   */
  PrincipalArn: string | undefined;

  /**
   * <p>The type of resource: <code>bundle</code> | <code>conversion-task</code> | <code>customer-gateway</code> | <code>dhcp-options</code> |
   *           <code>elastic-ip-allocation</code> | <code>elastic-ip-association</code> |
   *           <code>export-task</code> | <code>flow-log</code> | <code>image</code> |
   *           <code>import-task</code> | <code>internet-gateway</code> | <code>network-acl</code>
   *           | <code>network-acl-association</code> | <code>network-interface</code> |
   *           <code>network-interface-attachment</code> | <code>prefix-list</code> |
   *           <code>route-table</code> | <code>route-table-association</code> |
   *           <code>security-group</code> | <code>subnet</code> |
   *           <code>subnet-cidr-block-association</code> | <code>vpc</code> |
   *           <code>vpc-cidr-block-association</code> | <code>vpc-endpoint</code> | <code>vpc-peering-connection</code> | <code>vpn-connection</code> | <code>vpn-gateway</code>.</p>
   *          <p>Alternatively, use the <code>all-current</code> option to include all resource types that are
   *           currently within their opt-in period for longer IDs.</p>
   */
  Resource: string | undefined;

  /**
   * <p>Indicates whether the resource should use longer IDs (17-character IDs)</p>
   */
  UseLongIds: boolean | undefined;
}

export namespace ModifyIdentityIdFormatRequest {
  export const filterSensitiveLog = (obj: ModifyIdentityIdFormatRequest): any => ({
    ...obj,
  });
}

export interface ModifyIdFormatRequest {
  /**
   * <p>The type of resource: <code>bundle</code> | <code>conversion-task</code> | <code>customer-gateway</code> | <code>dhcp-options</code> |
   *            <code>elastic-ip-allocation</code> | <code>elastic-ip-association</code> |
   *            <code>export-task</code> | <code>flow-log</code> | <code>image</code> |
   *            <code>import-task</code> | <code>internet-gateway</code> | <code>network-acl</code>
   *            | <code>network-acl-association</code> | <code>network-interface</code> |
   *            <code>network-interface-attachment</code> | <code>prefix-list</code> |
   *            <code>route-table</code> | <code>route-table-association</code> |
   *            <code>security-group</code> | <code>subnet</code> |
   *            <code>subnet-cidr-block-association</code> | <code>vpc</code> |
   *            <code>vpc-cidr-block-association</code> | <code>vpc-endpoint</code> | <code>vpc-peering-connection</code> | <code>vpn-connection</code> | <code>vpn-gateway</code>.</p>
   *          <p>Alternatively, use the <code>all-current</code> option to include all resource types that are
   *        currently within their opt-in period for longer IDs.</p>
   */
  Resource: string | undefined;

  /**
   * <p>Indicate whether the resource should use longer IDs (17-character IDs).</p>
   */
  UseLongIds: boolean | undefined;
}

export namespace ModifyIdFormatRequest {
  export const filterSensitiveLog = (obj: ModifyIdFormatRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a launch permission modification.</p>
 */
export interface LaunchPermissionModifications {
  /**
   * <p>The AWS account ID to add to the list of launch permissions for the AMI.</p>
   */
  Add?: LaunchPermission[];

  /**
   * <p>The AWS account ID to remove from the list of launch permissions for the AMI.</p>
   */
  Remove?: LaunchPermission[];
}

export namespace LaunchPermissionModifications {
  export const filterSensitiveLog = (obj: LaunchPermissionModifications): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for ModifyImageAttribute.</p>
 */
export interface ModifyImageAttributeRequest {
  /**
   * <p>The name of the attribute to modify.
   *        The valid values are <code>description</code>, <code>launchPermission</code>, and <code>productCodes</code>.</p>
   */
  Attribute?: string;

  /**
   * <p>A new description for the AMI.</p>
   */
  Description?: AttributeValue;

  /**
   * <p>The ID of the AMI.</p>
   */
  ImageId: string | undefined;

  /**
   * <p>A new launch permission for the AMI.</p>
   */
  LaunchPermission?: LaunchPermissionModifications;

  /**
   * <p>The operation type.
   *        This parameter can be used only when the <code>Attribute</code> parameter is <code>launchPermission</code>.</p>
   */
  OperationType?: OperationType | string;

  /**
   * <p>The DevPay product codes. After you add a product code to an AMI, it can't be removed.</p>
   */
  ProductCodes?: string[];

  /**
   * <p>The user groups.
   *        This parameter can be used only when the <code>Attribute</code> parameter is <code>launchPermission</code>.</p>
   */
  UserGroups?: string[];

  /**
   * <p>The AWS account IDs.
   *        This parameter can be used only when the <code>Attribute</code> parameter is <code>launchPermission</code>.</p>
   */
  UserIds?: string[];

  /**
   * <p>The value of the attribute being modified.
   *        This parameter can be used only when the <code>Attribute</code> parameter is <code>description</code> or <code>productCodes</code>.</p>
   */
  Value?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *        and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *        Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace ModifyImageAttributeRequest {
  export const filterSensitiveLog = (obj: ModifyImageAttributeRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes information used to set up an EBS volume specified in a block device
 *             mapping.</p>
 */
export interface EbsInstanceBlockDeviceSpecification {
  /**
   * <p>Indicates whether the volume is deleted on instance termination.</p>
   */
  DeleteOnTermination?: boolean;

  /**
   * <p>The ID of the EBS volume.</p>
   */
  VolumeId?: string;
}

export namespace EbsInstanceBlockDeviceSpecification {
  export const filterSensitiveLog = (obj: EbsInstanceBlockDeviceSpecification): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a block device mapping entry.</p>
 */
export interface InstanceBlockDeviceMappingSpecification {
  /**
   * <p>The device name (for example, <code>/dev/sdh</code> or <code>xvdh</code>).</p>
   */
  DeviceName?: string;

  /**
   * <p>Parameters used to automatically set up EBS volumes when the instance is
   *             launched.</p>
   */
  Ebs?: EbsInstanceBlockDeviceSpecification;

  /**
   * <p>suppress the specified device included in the block device mapping.</p>
   */
  NoDevice?: string;

  /**
   * <p>The virtual device name.</p>
   */
  VirtualName?: string;
}

export namespace InstanceBlockDeviceMappingSpecification {
  export const filterSensitiveLog = (obj: InstanceBlockDeviceMappingSpecification): any => ({
    ...obj,
  });
}

export interface BlobAttributeValue {
  Value?: Uint8Array;
}

export namespace BlobAttributeValue {
  export const filterSensitiveLog = (obj: BlobAttributeValue): any => ({
    ...obj,
  });
}

export interface ModifyInstanceAttributeRequest {
  /**
   * <p>Specifies whether source/destination checking is enabled. A value of <code>true</code>
   *             means that checking is enabled, and <code>false</code> means that checking is disabled.
   *             This value must be <code>false</code> for a NAT instance to perform NAT.</p>
   */
  SourceDestCheck?: AttributeBooleanValue;

  /**
   * <p>The name of the attribute.</p>
   */
  Attribute?: InstanceAttributeName | string;

  /**
   * <p>Modifies the <code>DeleteOnTermination</code> attribute for volumes that are currently
   *             attached. The volume must be owned by the caller. If no value is specified for
   *                 <code>DeleteOnTermination</code>, the default is <code>true</code> and the volume is
   *             deleted when the instance is terminated.</p>
   *         <p>To add instance store volumes to an Amazon EBS-backed instance, you must add them when
   *             you launch the instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/block-device-mapping-concepts.html#Using_OverridingAMIBDM">Updating the block device mapping when launching an instance</a> in the
   *                 <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  BlockDeviceMappings?: InstanceBlockDeviceMappingSpecification[];

  /**
   * <p>If the value is <code>true</code>, you can't terminate the instance using the Amazon
   *             EC2 console, CLI, or API; otherwise, you can. You cannot use this parameter for Spot
   *             Instances.</p>
   */
  DisableApiTermination?: AttributeBooleanValue;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Specifies whether the instance is optimized for Amazon EBS I/O. This optimization
   *             provides dedicated throughput to Amazon EBS and an optimized configuration stack to
   *             provide optimal EBS I/O performance. This optimization isn't available with all instance
   *             types. Additional usage charges apply when using an EBS Optimized instance.</p>
   */
  EbsOptimized?: AttributeBooleanValue;

  /**
   * <p>Set to <code>true</code> to enable enhanced networking with ENA for the
   *             instance.</p>
   *         <p>This option is supported only for HVM instances. Specifying this option with a PV
   *             instance can make it unreachable.</p>
   */
  EnaSupport?: AttributeBooleanValue;

  /**
   * <p>[EC2-VPC] Changes the security groups of the instance. You must specify at least one
   *             security group, even if it's just the default security group for the VPC. You must
   *             specify the security group ID, not the security group name.</p>
   */
  Groups?: string[];

  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>Specifies whether an instance stops or terminates when you initiate shutdown from the
   *             instance (using the operating system command for system shutdown).</p>
   */
  InstanceInitiatedShutdownBehavior?: AttributeValue;

  /**
   * <p>Changes the instance type to the specified value. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html">Instance
   *                 types</a>. If the instance type is not valid, the error returned is
   *                 <code>InvalidInstanceAttributeValue</code>.</p>
   */
  InstanceType?: AttributeValue;

  /**
   * <p>Changes the instance's kernel to the specified value. We recommend that you use
   *             PV-GRUB instead of kernels and RAM disks. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/UserProvidedKernels.html">PV-GRUB</a>.</p>
   */
  Kernel?: AttributeValue;

  /**
   * <p>Changes the instance's RAM disk to the specified value. We recommend that you use
   *             PV-GRUB instead of kernels and RAM disks. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/UserProvidedKernels.html">PV-GRUB</a>.</p>
   */
  Ramdisk?: AttributeValue;

  /**
   * <p>Set to <code>simple</code> to enable enhanced networking with the Intel 82599 Virtual
   *             Function interface for the instance.</p>
   *         <p>There is no way to disable enhanced networking with the Intel 82599 Virtual Function
   *             interface at this time.</p>
   *         <p>This option is supported only for HVM instances. Specifying this option with a PV
   *             instance can make it unreachable.</p>
   */
  SriovNetSupport?: AttributeValue;

  /**
   * <p>Changes the instance's user data to the specified value. If you are using an AWS SDK
   *             or command line tool, base64-encoding is performed for you, and you can load the text
   *             from a file. Otherwise, you must provide base64-encoded text.</p>
   */
  UserData?: BlobAttributeValue;

  /**
   * <p>A new value for the attribute. Use only with the <code>kernel</code>,
   *                 <code>ramdisk</code>, <code>userData</code>, <code>disableApiTermination</code>, or
   *                 <code>instanceInitiatedShutdownBehavior</code> attribute.</p>
   */
  Value?: string;
}

export namespace ModifyInstanceAttributeRequest {
  export const filterSensitiveLog = (obj: ModifyInstanceAttributeRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an instance's Capacity Reservation targeting option. You can specify only one parameter
 * 			at a time. If you specify <code>CapacityReservationPreference</code> and
 * 			<code>CapacityReservationTarget</code>, the request fails.</p>
 * 			      <p>Use the <code>CapacityReservationPreference</code> parameter to configure the instance
 * 			to run as an On-Demand Instance or to run in any <code>open</code> Capacity Reservation that has
 * 			matching attributes (instance type, platform, Availability Zone). Use the
 * 			<code>CapacityReservationTarget</code> parameter to explicitly target a specific
 * 			   	Capacity Reservation or a Capacity Reservation group.</p>
 */
export interface CapacityReservationSpecification {
  /**
   * <p>Indicates the instance's Capacity Reservation preferences. Possible preferences include:</p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <code>open</code> - The instance can run in any <code>open</code> Capacity Reservation that has matching attributes
   * 				(instance type, platform, Availability Zone).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>none</code> - The instance avoids running in a Capacity Reservation even if one is available. The
   * 					instance runs as an On-Demand Instance.</p>
   *             </li>
   *          </ul>
   */
  CapacityReservationPreference?: CapacityReservationPreference | string;

  /**
   * <p>Information about the target Capacity Reservation or Capacity Reservation group.</p>
   */
  CapacityReservationTarget?: CapacityReservationTarget;
}

export namespace CapacityReservationSpecification {
  export const filterSensitiveLog = (obj: CapacityReservationSpecification): any => ({
    ...obj,
  });
}

export interface ModifyInstanceCapacityReservationAttributesRequest {
  /**
   * <p>The ID of the instance to be modified.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>Information about the Capacity Reservation targeting option.</p>
   */
  CapacityReservationSpecification: CapacityReservationSpecification | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace ModifyInstanceCapacityReservationAttributesRequest {
  export const filterSensitiveLog = (obj: ModifyInstanceCapacityReservationAttributesRequest): any => ({
    ...obj,
  });
}

export interface ModifyInstanceCapacityReservationAttributesResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  Return?: boolean;
}

export namespace ModifyInstanceCapacityReservationAttributesResult {
  export const filterSensitiveLog = (obj: ModifyInstanceCapacityReservationAttributesResult): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the credit option for CPU usage of a burstable performance instance.</p>
 */
export interface InstanceCreditSpecificationRequest {
  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId?: string;

  /**
   * <p>The credit option for CPU usage of the instance. Valid values are
   *                 <code>standard</code> and <code>unlimited</code>.</p>
   */
  CpuCredits?: string;
}

export namespace InstanceCreditSpecificationRequest {
  export const filterSensitiveLog = (obj: InstanceCreditSpecificationRequest): any => ({
    ...obj,
  });
}

export interface ModifyInstanceCreditSpecificationRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>A unique, case-sensitive token that you provide to ensure idempotency of your
   *             modification request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring
   *                 Idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * <p>Information about the credit option for CPU usage.</p>
   */
  InstanceCreditSpecifications: InstanceCreditSpecificationRequest[] | undefined;
}

export namespace ModifyInstanceCreditSpecificationRequest {
  export const filterSensitiveLog = (obj: ModifyInstanceCreditSpecificationRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the burstable performance instance whose credit option for CPU usage was
 *             successfully modified.</p>
 */
export interface SuccessfulInstanceCreditSpecificationItem {
  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId?: string;
}

export namespace SuccessfulInstanceCreditSpecificationItem {
  export const filterSensitiveLog = (obj: SuccessfulInstanceCreditSpecificationItem): any => ({
    ...obj,
  });
}

export enum UnsuccessfulInstanceCreditSpecificationErrorCode {
  INCORRECT_INSTANCE_STATE = "IncorrectInstanceState",
  INSTANCE_CREDIT_SPECIFICATION_NOT_SUPPORTED = "InstanceCreditSpecification.NotSupported",
  INSTANCE_NOT_FOUND = "InvalidInstanceID.NotFound",
  INVALID_INSTANCE_ID = "InvalidInstanceID.Malformed",
}

/**
 * <p>Information about the error for the burstable performance instance whose credit option
 *             for CPU usage was not modified.</p>
 */
export interface UnsuccessfulInstanceCreditSpecificationItemError {
  /**
   * <p>The error code.</p>
   */
  Code?: UnsuccessfulInstanceCreditSpecificationErrorCode | string;

  /**
   * <p>The applicable error message.</p>
   */
  Message?: string;
}

export namespace UnsuccessfulInstanceCreditSpecificationItemError {
  export const filterSensitiveLog = (obj: UnsuccessfulInstanceCreditSpecificationItemError): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the burstable performance instance whose credit option for CPU usage was not
 *             modified.</p>
 */
export interface UnsuccessfulInstanceCreditSpecificationItem {
  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId?: string;

  /**
   * <p>The applicable error for the burstable performance instance whose credit option for
   *             CPU usage was not modified.</p>
   */
  Error?: UnsuccessfulInstanceCreditSpecificationItemError;
}

export namespace UnsuccessfulInstanceCreditSpecificationItem {
  export const filterSensitiveLog = (obj: UnsuccessfulInstanceCreditSpecificationItem): any => ({
    ...obj,
  });
}

export interface ModifyInstanceCreditSpecificationResult {
  /**
   * <p>Information about the instances whose credit option for CPU usage was successfully
   *             modified.</p>
   */
  SuccessfulInstanceCreditSpecifications?: SuccessfulInstanceCreditSpecificationItem[];

  /**
   * <p>Information about the instances whose credit option for CPU usage was not
   *             modified.</p>
   */
  UnsuccessfulInstanceCreditSpecifications?: UnsuccessfulInstanceCreditSpecificationItem[];
}

export namespace ModifyInstanceCreditSpecificationResult {
  export const filterSensitiveLog = (obj: ModifyInstanceCreditSpecificationResult): any => ({
    ...obj,
  });
}

export interface ModifyInstanceEventStartTimeRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the instance with the scheduled event.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The ID of the event whose date and time you are modifying.</p>
   */
  InstanceEventId: string | undefined;

  /**
   * <p>The new date and time when the event will take place.</p>
   */
  NotBefore: Date | undefined;
}

export namespace ModifyInstanceEventStartTimeRequest {
  export const filterSensitiveLog = (obj: ModifyInstanceEventStartTimeRequest): any => ({
    ...obj,
  });
}

export interface ModifyInstanceEventStartTimeResult {
  /**
   * <p>Describes a scheduled event for an instance.</p>
   */
  Event?: InstanceStatusEvent;
}

export namespace ModifyInstanceEventStartTimeResult {
  export const filterSensitiveLog = (obj: ModifyInstanceEventStartTimeResult): any => ({
    ...obj,
  });
}

export interface ModifyInstanceMetadataOptionsRequest {
  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The state of token usage for your instance metadata requests. If the parameter is not
   *             specified in the request, the default state is <code>optional</code>.</p>
   *         <p>If the state is <code>optional</code>, you can choose to retrieve instance metadata
   *             with or without a signed token header on your request. If you retrieve the IAM role
   *             credentials without a token, the version 1.0 role credentials are returned. If you
   *             retrieve the IAM role credentials using a valid signed token, the version 2.0 role
   *             credentials are returned.</p>
   *         <p>If the state is <code>required</code>, you must send a signed token header with any
   *             instance metadata retrieval requests. In this state, retrieving the IAM role credential
   *             always returns the version 2.0 credentials; the version 1.0 credentials are not
   *             available.</p>
   */
  HttpTokens?: HttpTokensState | string;

  /**
   * <p>The desired HTTP PUT response hop limit for instance metadata requests. The larger the
   *             number, the further instance metadata requests can travel. If no parameter is specified, the existing state is maintained.</p>
   *         <p>Possible values: Integers from 1 to 64</p>
   */
  HttpPutResponseHopLimit?: number;

  /**
   * <p>This parameter enables or disables the HTTP metadata endpoint on your instances. If
   *             the parameter is not specified, the existing state is maintained.</p>
   *         <note>
   *             <p>If you specify a value of <code>disabled</code>, you will not be able to access your
   *                 instance metadata.</p>
   *         </note>
   */
  HttpEndpoint?: InstanceMetadataEndpointState | string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace ModifyInstanceMetadataOptionsRequest {
  export const filterSensitiveLog = (obj: ModifyInstanceMetadataOptionsRequest): any => ({
    ...obj,
  });
}

export interface ModifyInstanceMetadataOptionsResult {
  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId?: string;

  /**
   * <p>The metadata options for the instance.</p>
   */
  InstanceMetadataOptions?: InstanceMetadataOptionsResponse;
}

export namespace ModifyInstanceMetadataOptionsResult {
  export const filterSensitiveLog = (obj: ModifyInstanceMetadataOptionsResult): any => ({
    ...obj,
  });
}

export type HostTenancy = "dedicated" | "host";

export interface ModifyInstancePlacementRequest {
  /**
   * <p>The affinity setting for the instance.</p>
   */
  Affinity?: Affinity | string;

  /**
   * <p>The name of the placement group in which to place the instance. For spread placement
   *             groups, the instance must have a tenancy of <code>default</code>. For cluster and
   *             partition placement groups, the instance must have a tenancy of <code>default</code> or
   *                 <code>dedicated</code>.</p>
   *         <p>To remove an instance from a placement group, specify an empty string
   *             ("").</p>
   */
  GroupName?: string;

  /**
   * <p>The ID of the Dedicated Host with which to associate the instance.</p>
   */
  HostId?: string;

  /**
   * <p>The ID of the instance that you are modifying.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The tenancy for the instance.</p>
   */
  Tenancy?: HostTenancy | string;

  /**
   * <p>Reserved for future use.</p>
   */
  PartitionNumber?: number;

  /**
   * <p>The ARN of the host resource group in which to place the instance.</p>
   */
  HostResourceGroupArn?: string;
}

export namespace ModifyInstancePlacementRequest {
  export const filterSensitiveLog = (obj: ModifyInstancePlacementRequest): any => ({
    ...obj,
  });
}

export interface ModifyInstancePlacementResult {
  /**
   * <p>Is <code>true</code> if the request succeeds, and an error otherwise.</p>
   */
  Return?: boolean;
}

export namespace ModifyInstancePlacementResult {
  export const filterSensitiveLog = (obj: ModifyInstancePlacementResult): any => ({
    ...obj,
  });
}

export interface ModifyLaunchTemplateRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Unique, case-sensitive identifier you provide to ensure the idempotency of the
   *             request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring
   *                 Idempotency</a>.</p>
   *         <p>Constraint: Maximum 128 ASCII characters.</p>
   */
  ClientToken?: string;

  /**
   * <p>The ID of the launch template. You must specify either the launch template ID or
   *             launch template name in the request.</p>
   */
  LaunchTemplateId?: string;

  /**
   * <p>The name of the launch template. You must specify either the launch template ID or
   *             launch template name in the request.</p>
   */
  LaunchTemplateName?: string;

  /**
   * <p>The version number of the launch template to set as the default version.</p>
   */
  DefaultVersion?: string;
}

export namespace ModifyLaunchTemplateRequest {
  export const filterSensitiveLog = (obj: ModifyLaunchTemplateRequest): any => ({
    ...obj,
  });
}

export interface ModifyLaunchTemplateResult {
  /**
   * <p>Information about the launch template.</p>
   */
  LaunchTemplate?: LaunchTemplate;
}

export namespace ModifyLaunchTemplateResult {
  export const filterSensitiveLog = (obj: ModifyLaunchTemplateResult): any => ({
    ...obj,
  });
}

/**
 * <p>An entry for a prefix list.</p>
 */
export interface RemovePrefixListEntry {
  /**
   * <p>The CIDR block.</p>
   */
  Cidr: string | undefined;
}

export namespace RemovePrefixListEntry {
  export const filterSensitiveLog = (obj: RemovePrefixListEntry): any => ({
    ...obj,
  });
}

export interface ModifyManagedPrefixListRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the prefix list.</p>
   */
  PrefixListId: string | undefined;

  /**
   * <p>The current version of the prefix list.</p>
   */
  CurrentVersion?: number;

  /**
   * <p>A name for the prefix list.</p>
   */
  PrefixListName?: string;

  /**
   * <p>One or more entries to add to the prefix list.</p>
   */
  AddEntries?: AddPrefixListEntry[];

  /**
   * <p>One or more entries to remove from the prefix list.</p>
   */
  RemoveEntries?: RemovePrefixListEntry[];
}

export namespace ModifyManagedPrefixListRequest {
  export const filterSensitiveLog = (obj: ModifyManagedPrefixListRequest): any => ({
    ...obj,
  });
}

export interface ModifyManagedPrefixListResult {
  /**
   * <p>Information about the prefix list.</p>
   */
  PrefixList?: ManagedPrefixList;
}

export namespace ModifyManagedPrefixListResult {
  export const filterSensitiveLog = (obj: ModifyManagedPrefixListResult): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an attachment change.</p>
 */
export interface NetworkInterfaceAttachmentChanges {
  /**
   * <p>The ID of the network interface attachment.</p>
   */
  AttachmentId?: string;

  /**
   * <p>Indicates whether the network interface is deleted when the instance is terminated.</p>
   */
  DeleteOnTermination?: boolean;
}

export namespace NetworkInterfaceAttachmentChanges {
  export const filterSensitiveLog = (obj: NetworkInterfaceAttachmentChanges): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for ModifyNetworkInterfaceAttribute.</p>
 */
export interface ModifyNetworkInterfaceAttributeRequest {
  /**
   * <p>Information about the interface attachment. If modifying the 'delete on termination' attribute, you must specify the ID of the interface attachment.</p>
   */
  Attachment?: NetworkInterfaceAttachmentChanges;

  /**
   * <p>A description for the network interface.</p>
   */
  Description?: AttributeValue;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *             and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *             Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Changes the security groups for the network interface. The new set of groups you specify replaces the current set. You must specify at least one group, even if it's just the default security group in the VPC. You must specify the ID of the security group, not the name.</p>
   */
  Groups?: string[];

  /**
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId: string | undefined;

  /**
   * <p>Indicates whether source/destination checking is enabled.
   *             A value of <code>true</code> means checking
   *             is enabled, and <code>false</code> means checking is disabled. This value
   *             must be <code>false</code> for a NAT instance to perform NAT. For more
   *             information, see <a href="https://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_NAT_Instance.html">NAT
   *                 Instances</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
   */
  SourceDestCheck?: AttributeBooleanValue;
}

export namespace ModifyNetworkInterfaceAttributeRequest {
  export const filterSensitiveLog = (obj: ModifyNetworkInterfaceAttributeRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for ModifyReservedInstances.</p>
 */
export interface ModifyReservedInstancesRequest {
  /**
   * <p>The IDs of the Reserved Instances to modify.</p>
   */
  ReservedInstancesIds: string[] | undefined;

  /**
   * <p>A unique, case-sensitive token you provide to ensure idempotency of your modification request. For more information, see
   *    		<a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * <p>The configuration settings for the Reserved Instances to modify.</p>
   */
  TargetConfigurations: ReservedInstancesConfiguration[] | undefined;
}

export namespace ModifyReservedInstancesRequest {
  export const filterSensitiveLog = (obj: ModifyReservedInstancesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of ModifyReservedInstances.</p>
 */
export interface ModifyReservedInstancesResult {
  /**
   * <p>The ID for the modification.</p>
   */
  ReservedInstancesModificationId?: string;
}

export namespace ModifyReservedInstancesResult {
  export const filterSensitiveLog = (obj: ModifyReservedInstancesResult): any => ({
    ...obj,
  });
}

/**
 * <p>Describes modifications to the list of create volume permissions for a volume.</p>
 */
export interface CreateVolumePermissionModifications {
  /**
   * <p>Adds the specified AWS account ID or group to the list.</p>
   */
  Add?: CreateVolumePermission[];

  /**
   * <p>Removes the specified AWS account ID or group from the list.</p>
   */
  Remove?: CreateVolumePermission[];
}

export namespace CreateVolumePermissionModifications {
  export const filterSensitiveLog = (obj: CreateVolumePermissionModifications): any => ({
    ...obj,
  });
}

export interface ModifySnapshotAttributeRequest {
  /**
   * <p>The snapshot attribute to modify. Only volume creation permissions can be modified.</p>
   */
  Attribute?: SnapshotAttributeName | string;

  /**
   * <p>A JSON representation of the snapshot attribute modification.</p>
   */
  CreateVolumePermission?: CreateVolumePermissionModifications;

  /**
   * <p>The group to modify for the snapshot.</p>
   */
  GroupNames?: string[];

  /**
   * <p>The type of operation to perform to the attribute.</p>
   */
  OperationType?: OperationType | string;

  /**
   * <p>The ID of the snapshot.</p>
   */
  SnapshotId: string | undefined;

  /**
   * <p>The account ID to modify for the snapshot.</p>
   */
  UserIds?: string[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace ModifySnapshotAttributeRequest {
  export const filterSensitiveLog = (obj: ModifySnapshotAttributeRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for ModifySpotFleetRequest.</p>
 */
export interface ModifySpotFleetRequestRequest {
  /**
   * <p>Indicates whether running Spot Instances should be terminated if the target capacity of the Spot Fleet request is decreased below the current size of the Spot Fleet.</p>
   */
  ExcessCapacityTerminationPolicy?: ExcessCapacityTerminationPolicy | string;

  /**
   * <p>The launch template and overrides. You can only use this parameter if you specified a launch template (<code>LaunchTemplateConfigs</code>) in your Spot Fleet request. If you specified <code>LaunchSpecifications</code> in your Spot Fleet request, then omit this parameter.</p>
   */
  LaunchTemplateConfigs?: LaunchTemplateConfig[];

  /**
   * <p>The ID of the Spot Fleet request.</p>
   */
  SpotFleetRequestId: string | undefined;

  /**
   * <p>The size of the fleet.</p>
   */
  TargetCapacity?: number;

  /**
   * <p>The number of On-Demand Instances in the fleet.</p>
   */
  OnDemandTargetCapacity?: number;
}

export namespace ModifySpotFleetRequestRequest {
  export const filterSensitiveLog = (obj: ModifySpotFleetRequestRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of ModifySpotFleetRequest.</p>
 */
export interface ModifySpotFleetRequestResponse {
  /**
   * <p>Is <code>true</code> if the request succeeds, and an error otherwise.</p>
   */
  Return?: boolean;
}

export namespace ModifySpotFleetRequestResponse {
  export const filterSensitiveLog = (obj: ModifySpotFleetRequestResponse): any => ({
    ...obj,
  });
}

export interface ModifySubnetAttributeRequest {
  /**
   * <p>Specify <code>true</code> to indicate that network interfaces created in the
   *             specified subnet should be assigned an IPv6 address. This includes a network interface
   *             that's created when launching an instance into the subnet (the instance therefore
   *             receives an IPv6 address). </p>
   *         <p>If you enable the IPv6 addressing feature for your subnet, your network interface
   *             or instance only receives an IPv6 address if it's created using version
   *                 <code>2016-11-15</code> or later of the Amazon EC2 API.</p>
   */
  AssignIpv6AddressOnCreation?: AttributeBooleanValue;

  /**
   * <p>Specify <code>true</code> to indicate that network interfaces attached to instances created in the
   *             specified subnet should be assigned a public IPv4 address.</p>
   */
  MapPublicIpOnLaunch?: AttributeBooleanValue;

  /**
   * <p>The ID of the subnet.</p>
   */
  SubnetId: string | undefined;

  /**
   * <p>Specify <code>true</code> to indicate that network interfaces  attached to instances created in the
   *             specified subnet should be assigned a customer-owned IPv4 address.</p>
   *         <p>When this value is <code>true</code>, you must specify the customer-owned IP pool using <code>CustomerOwnedIpv4Pool</code>.</p>
   */
  MapCustomerOwnedIpOnLaunch?: AttributeBooleanValue;

  /**
   * <p>The customer-owned IPv4 address pool associated with the subnet.</p>
   *         <p>You must set this value when you specify <code>true</code> for <code>MapCustomerOwnedIpOnLaunch</code>.</p>
   */
  CustomerOwnedIpv4Pool?: string;
}

export namespace ModifySubnetAttributeRequest {
  export const filterSensitiveLog = (obj: ModifySubnetAttributeRequest): any => ({
    ...obj,
  });
}

export interface ModifyTrafficMirrorFilterNetworkServicesRequest {
  /**
   * <p>The ID of the Traffic Mirror filter.</p>
   */
  TrafficMirrorFilterId: string | undefined;

  /**
   * <p>The network service, for example Amazon DNS, that you want to mirror.</p>
   */
  AddNetworkServices?: (TrafficMirrorNetworkService | string)[];

  /**
   * <p>The network service, for example Amazon DNS, that you no longer want to mirror.</p>
   */
  RemoveNetworkServices?: (TrafficMirrorNetworkService | string)[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace ModifyTrafficMirrorFilterNetworkServicesRequest {
  export const filterSensitiveLog = (obj: ModifyTrafficMirrorFilterNetworkServicesRequest): any => ({
    ...obj,
  });
}

export interface ModifyTrafficMirrorFilterNetworkServicesResult {
  /**
   * <p>The Traffic Mirror filter that the network service is associated with.</p>
   */
  TrafficMirrorFilter?: TrafficMirrorFilter;
}

export namespace ModifyTrafficMirrorFilterNetworkServicesResult {
  export const filterSensitiveLog = (obj: ModifyTrafficMirrorFilterNetworkServicesResult): any => ({
    ...obj,
  });
}

export type TrafficMirrorFilterRuleField = "description" | "destination-port-range" | "protocol" | "source-port-range";

export interface ModifyTrafficMirrorFilterRuleRequest {
  /**
   * <p>The ID of the Traffic Mirror rule.</p>
   */
  TrafficMirrorFilterRuleId: string | undefined;

  /**
   * <p>The type of traffic (<code>ingress</code> | <code>egress</code>) to assign to the rule.</p>
   */
  TrafficDirection?: TrafficDirection | string;

  /**
   * <p>The number of the Traffic Mirror rule. This number must be unique for each Traffic Mirror rule in a given
   *          direction. The rules are processed in ascending order by rule number.</p>
   */
  RuleNumber?: number;

  /**
   * <p>The action to assign to the rule.</p>
   */
  RuleAction?: TrafficMirrorRuleAction | string;

  /**
   * <p>The destination ports that are associated with the Traffic Mirror rule.</p>
   */
  DestinationPortRange?: TrafficMirrorPortRangeRequest;

  /**
   * <p>The port range to assign to the Traffic Mirror rule.</p>
   */
  SourcePortRange?: TrafficMirrorPortRangeRequest;

  /**
   * <p>The protocol, for example TCP, to assign to the Traffic Mirror rule.</p>
   */
  Protocol?: number;

  /**
   * <p>The destination CIDR block to assign to the Traffic Mirror rule.</p>
   */
  DestinationCidrBlock?: string;

  /**
   * <p>The source CIDR block to assign to the Traffic Mirror rule.</p>
   */
  SourceCidrBlock?: string;

  /**
   * <p>The description to assign to the Traffic Mirror rule.</p>
   */
  Description?: string;

  /**
   * <p>The properties that you want to remove from the Traffic Mirror filter rule.</p>
   *          <p>When you remove a property from a Traffic Mirror filter rule, the property is set to the default.</p>
   */
  RemoveFields?: (TrafficMirrorFilterRuleField | string)[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace ModifyTrafficMirrorFilterRuleRequest {
  export const filterSensitiveLog = (obj: ModifyTrafficMirrorFilterRuleRequest): any => ({
    ...obj,
  });
}

export interface ModifyTrafficMirrorFilterRuleResult {
  /**
   * <p>Modifies a Traffic Mirror rule.</p>
   */
  TrafficMirrorFilterRule?: TrafficMirrorFilterRule;
}

export namespace ModifyTrafficMirrorFilterRuleResult {
  export const filterSensitiveLog = (obj: ModifyTrafficMirrorFilterRuleResult): any => ({
    ...obj,
  });
}

export type TrafficMirrorSessionField = "description" | "packet-length" | "virtual-network-id";

export interface ModifyTrafficMirrorSessionRequest {
  /**
   * <p>The ID of the Traffic Mirror session.</p>
   */
  TrafficMirrorSessionId: string | undefined;

  /**
   * <p>The Traffic Mirror target. The target must be in the same VPC as the source, or have a VPC peering connection with the source.</p>
   */
  TrafficMirrorTargetId?: string;

  /**
   * <p>The ID of the Traffic Mirror filter.</p>
   */
  TrafficMirrorFilterId?: string;

  /**
   * <p>The number of bytes in each packet to mirror. These are bytes after the VXLAN header. To mirror a subset, set this to the length (in bytes) to mirror. For example, if you set this value to 100, then the first 100 bytes that meet the filter criteria are copied to the target. Do not specify this parameter when you want to mirror the entire packet.</p>
   */
  PacketLength?: number;

  /**
   * <p>The session number determines the order in which sessions are evaluated when an interface is used by multiple sessions. The first session with a matching filter is the one that mirrors the packets.</p>
   *          <p>Valid values are 1-32766.</p>
   */
  SessionNumber?: number;

  /**
   * <p>The virtual network ID of the Traffic Mirror session.</p>
   */
  VirtualNetworkId?: number;

  /**
   * <p>The description to assign to the Traffic Mirror session.</p>
   */
  Description?: string;

  /**
   * <p>The properties that you want to remove from the Traffic Mirror session.</p>
   *          <p>When you remove a property from a Traffic Mirror session, the property is set to the default.</p>
   */
  RemoveFields?: (TrafficMirrorSessionField | string)[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace ModifyTrafficMirrorSessionRequest {
  export const filterSensitiveLog = (obj: ModifyTrafficMirrorSessionRequest): any => ({
    ...obj,
  });
}

export interface ModifyTrafficMirrorSessionResult {
  /**
   * <p>Information about the Traffic Mirror session.</p>
   */
  TrafficMirrorSession?: TrafficMirrorSession;
}

export namespace ModifyTrafficMirrorSessionResult {
  export const filterSensitiveLog = (obj: ModifyTrafficMirrorSessionResult): any => ({
    ...obj,
  });
}

/**
 * <p>The transit gateway options.</p>
 */
export interface ModifyTransitGatewayOptions {
  /**
   * <p>Enable or disable Equal Cost Multipath Protocol support.</p>
   */
  VpnEcmpSupport?: VpnEcmpSupportValue | string;

  /**
   * <p>Enable or disable DNS support.</p>
   */
  DnsSupport?: DnsSupportValue | string;

  /**
   * <p>Enable or disable automatic acceptance of attachment requests.</p>
   */
  AutoAcceptSharedAttachments?: AutoAcceptSharedAttachmentsValue | string;

  /**
   * <p>Enable or disable automatic association with the default association route table.</p>
   */
  DefaultRouteTableAssociation?: DefaultRouteTableAssociationValue | string;

  /**
   * <p>The ID of the default association route table.</p>
   */
  AssociationDefaultRouteTableId?: string;

  /**
   * <p>Enable or disable automatic propagation of routes to the default propagation route table.</p>
   */
  DefaultRouteTablePropagation?: DefaultRouteTablePropagationValue | string;

  /**
   * <p>The ID of the default propagation route table.</p>
   */
  PropagationDefaultRouteTableId?: string;
}

export namespace ModifyTransitGatewayOptions {
  export const filterSensitiveLog = (obj: ModifyTransitGatewayOptions): any => ({
    ...obj,
  });
}

export interface ModifyTransitGatewayRequest {
  /**
   * <p>The ID of the transit gateway.</p>
   */
  TransitGatewayId: string | undefined;

  /**
   * <p>The description for the transit gateway.</p>
   */
  Description?: string;

  /**
   * <p>The options to modify.</p>
   */
  Options?: ModifyTransitGatewayOptions;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace ModifyTransitGatewayRequest {
  export const filterSensitiveLog = (obj: ModifyTransitGatewayRequest): any => ({
    ...obj,
  });
}

export interface ModifyTransitGatewayResult {
  /**
   * <p>Describes a transit gateway.</p>
   */
  TransitGateway?: TransitGateway;
}

export namespace ModifyTransitGatewayResult {
  export const filterSensitiveLog = (obj: ModifyTransitGatewayResult): any => ({
    ...obj,
  });
}

export interface ModifyTransitGatewayPrefixListReferenceRequest {
  /**
   * <p>The ID of the transit gateway route table.</p>
   */
  TransitGatewayRouteTableId: string | undefined;

  /**
   * <p>The ID of the prefix list.</p>
   */
  PrefixListId: string | undefined;

  /**
   * <p>The ID of the attachment to which traffic is routed.</p>
   */
  TransitGatewayAttachmentId?: string;

  /**
   * <p>Indicates whether to drop traffic that matches this route.</p>
   */
  Blackhole?: boolean;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace ModifyTransitGatewayPrefixListReferenceRequest {
  export const filterSensitiveLog = (obj: ModifyTransitGatewayPrefixListReferenceRequest): any => ({
    ...obj,
  });
}

export interface ModifyTransitGatewayPrefixListReferenceResult {
  /**
   * <p>Information about the prefix list reference.</p>
   */
  TransitGatewayPrefixListReference?: TransitGatewayPrefixListReference;
}

export namespace ModifyTransitGatewayPrefixListReferenceResult {
  export const filterSensitiveLog = (obj: ModifyTransitGatewayPrefixListReferenceResult): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the options for a VPC attachment.</p>
 */
export interface ModifyTransitGatewayVpcAttachmentRequestOptions {
  /**
   * <p>Enable or disable DNS support. The default is <code>enable</code>.</p>
   */
  DnsSupport?: DnsSupportValue | string;

  /**
   * <p>Enable or disable IPv6 support. The default is <code>enable</code>.</p>
   */
  Ipv6Support?: Ipv6SupportValue | string;

  /**
   * <p>Enable or disable support for appliance mode. If enabled, a traffic flow between a source and destination uses the same Availability Zone for the VPC attachment for the lifetime of that flow. The default is <code>disable</code>.</p>
   */
  ApplianceModeSupport?: ApplianceModeSupportValue | string;
}

export namespace ModifyTransitGatewayVpcAttachmentRequestOptions {
  export const filterSensitiveLog = (obj: ModifyTransitGatewayVpcAttachmentRequestOptions): any => ({
    ...obj,
  });
}

export interface ModifyTransitGatewayVpcAttachmentRequest {
  /**
   * <p>The ID of the attachment.</p>
   */
  TransitGatewayAttachmentId: string | undefined;

  /**
   * <p>The IDs of one or more subnets to add. You can specify at most one subnet per Availability Zone.</p>
   */
  AddSubnetIds?: string[];

  /**
   * <p>The IDs of one or more subnets to remove.</p>
   */
  RemoveSubnetIds?: string[];

  /**
   * <p>The new VPC attachment options.</p>
   *          <note>
   *             <p>You cannot modify the IPv6 options.</p>
   *          </note>
   */
  Options?: ModifyTransitGatewayVpcAttachmentRequestOptions;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace ModifyTransitGatewayVpcAttachmentRequest {
  export const filterSensitiveLog = (obj: ModifyTransitGatewayVpcAttachmentRequest): any => ({
    ...obj,
  });
}

export interface ModifyTransitGatewayVpcAttachmentResult {
  /**
   * <p>Information about the modified attachment.</p>
   */
  TransitGatewayVpcAttachment?: TransitGatewayVpcAttachment;
}

export namespace ModifyTransitGatewayVpcAttachmentResult {
  export const filterSensitiveLog = (obj: ModifyTransitGatewayVpcAttachmentResult): any => ({
    ...obj,
  });
}

export interface ModifyVolumeRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the volume.</p>
   */
  VolumeId: string | undefined;

  /**
   * <p>The target size of the volume, in GiB. The target volume size must be greater than or
   *       equal to than the existing size of the volume. For information about available EBS volume
   *       sizes, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSVolumeTypes.html">Amazon EBS Volume
   *         Types</a>.</p>
   *          <p>Default: If no size is specified, the existing size is retained.</p>
   */
  Size?: number;

  /**
   * <p>The target EBS volume type of the volume.</p>
   *          <p>Default: If no type is specified, the existing type is retained.</p>
   */
  VolumeType?: VolumeType | string;

  /**
   * <p>The target IOPS rate of the volume.</p>
   *          <p>This is only valid for Provisioned IOPS SSD (<code>io1</code> and <code>io2</code>) volumes. For moreinformation, see
   *     	<a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSVolumeTypes.html#EBSVolumeTypes_piops">
   *     		Provisioned IOPS SSD (io1 and io2) volumes</a>.</p>
   *          <p>Default: If no IOPS value is specified, the existing value is retained.</p>
   */
  Iops?: number;
}

export namespace ModifyVolumeRequest {
  export const filterSensitiveLog = (obj: ModifyVolumeRequest): any => ({
    ...obj,
  });
}

export interface ModifyVolumeResult {
  /**
   * <p>Information about the volume modification.</p>
   */
  VolumeModification?: VolumeModification;
}

export namespace ModifyVolumeResult {
  export const filterSensitiveLog = (obj: ModifyVolumeResult): any => ({
    ...obj,
  });
}

export interface ModifyVolumeAttributeRequest {
  /**
   * <p>Indicates whether the volume should be auto-enabled for I/O operations.</p>
   */
  AutoEnableIO?: AttributeBooleanValue;

  /**
   * <p>The ID of the volume.</p>
   */
  VolumeId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace ModifyVolumeAttributeRequest {
  export const filterSensitiveLog = (obj: ModifyVolumeAttributeRequest): any => ({
    ...obj,
  });
}

export interface ModifyVpcAttributeRequest {
  /**
   * <p>Indicates whether the instances launched in the VPC get DNS hostnames. If enabled, instances in the VPC get DNS hostnames; otherwise, they do not.</p>
   *          <p>You cannot modify the DNS resolution and DNS hostnames attributes in the same request. Use separate requests for each attribute. You can only enable DNS hostnames if you've enabled DNS support.</p>
   */
  EnableDnsHostnames?: AttributeBooleanValue;

  /**
   * <p>Indicates whether the DNS resolution is supported for the VPC. If enabled, queries to
   * 			the Amazon provided DNS server at the 169.254.169.253 IP address, or the reserved IP
   * 			address at the base of the VPC network range "plus two" succeed. If disabled, the Amazon
   * 			provided DNS service in the VPC that resolves public DNS hostnames to IP addresses is
   * 			not enabled.</p>
   *          <p>You cannot modify the DNS resolution and DNS hostnames attributes in the same request. Use separate requests for each attribute.</p>
   */
  EnableDnsSupport?: AttributeBooleanValue;

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId: string | undefined;
}

export namespace ModifyVpcAttributeRequest {
  export const filterSensitiveLog = (obj: ModifyVpcAttributeRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for ModifyVpcEndpoint.</p>
 */
export interface ModifyVpcEndpointRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the endpoint.</p>
   */
  VpcEndpointId: string | undefined;

  /**
   * <p>(Gateway endpoint) Specify <code>true</code> to reset the policy document to the
   *             default policy. The default policy allows full access to the service.</p>
   */
  ResetPolicy?: boolean;

  /**
   * <p>(Interface and gateway endpoints) A policy to attach to the endpoint that controls access to the service. The policy must
   *             be in valid JSON format.</p>
   */
  PolicyDocument?: string;

  /**
   * <p>(Gateway endpoint) One or more route tables IDs to associate with the endpoint.</p>
   */
  AddRouteTableIds?: string[];

  /**
   * <p>(Gateway endpoint) One or more route table IDs to disassociate from the endpoint.</p>
   */
  RemoveRouteTableIds?: string[];

  /**
   * <p>(Interface and Gateway Load Balancer endpoints) One or more subnet IDs in which to serve the endpoint. For a Gateway Load Balancer endpoint, you can specify only one subnet.</p>
   */
  AddSubnetIds?: string[];

  /**
   * <p>(Interface endpoint) One or more subnets IDs in which to remove the endpoint.</p>
   */
  RemoveSubnetIds?: string[];

  /**
   * <p>(Interface endpoint) One or more security group IDs to associate with the network interface.</p>
   */
  AddSecurityGroupIds?: string[];

  /**
   * <p>(Interface endpoint) One or more security group IDs to disassociate from the network interface.</p>
   */
  RemoveSecurityGroupIds?: string[];

  /**
   * <p>(Interface endpoint) Indicates whether a private hosted zone is associated with the
   *             VPC.</p>
   */
  PrivateDnsEnabled?: boolean;
}

export namespace ModifyVpcEndpointRequest {
  export const filterSensitiveLog = (obj: ModifyVpcEndpointRequest): any => ({
    ...obj,
  });
}

export interface ModifyVpcEndpointResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  Return?: boolean;
}

export namespace ModifyVpcEndpointResult {
  export const filterSensitiveLog = (obj: ModifyVpcEndpointResult): any => ({
    ...obj,
  });
}

export interface ModifyVpcEndpointConnectionNotificationRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the notification.</p>
   */
  ConnectionNotificationId: string | undefined;

  /**
   * <p>The ARN for the SNS topic for the notification.</p>
   */
  ConnectionNotificationArn?: string;

  /**
   * <p>One or more events for the endpoint. Valid values are <code>Accept</code>,
   *                 <code>Connect</code>, <code>Delete</code>, and <code>Reject</code>.</p>
   */
  ConnectionEvents?: string[];
}

export namespace ModifyVpcEndpointConnectionNotificationRequest {
  export const filterSensitiveLog = (obj: ModifyVpcEndpointConnectionNotificationRequest): any => ({
    ...obj,
  });
}

export interface ModifyVpcEndpointConnectionNotificationResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  ReturnValue?: boolean;
}

export namespace ModifyVpcEndpointConnectionNotificationResult {
  export const filterSensitiveLog = (obj: ModifyVpcEndpointConnectionNotificationResult): any => ({
    ...obj,
  });
}

export interface ModifyVpcEndpointServiceConfigurationRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the service.</p>
   */
  ServiceId: string | undefined;

  /**
   * <p>(Interface endpoint configuration) The private DNS name to assign to the endpoint service.</p>
   */
  PrivateDnsName?: string;

  /**
   * <p>(Interface endpoint configuration) Removes the private DNS name of the endpoint service.</p>
   */
  RemovePrivateDnsName?: boolean;

  /**
   * <p>Indicates whether requests to create an endpoint to your service must be accepted.</p>
   */
  AcceptanceRequired?: boolean;

  /**
   * <p>The Amazon Resource Names (ARNs) of Network Load Balancers to add to your service
   *             configuration.</p>
   */
  AddNetworkLoadBalancerArns?: string[];

  /**
   * <p>The Amazon Resource Names (ARNs) of Network Load Balancers to remove from your service
   *             configuration.</p>
   */
  RemoveNetworkLoadBalancerArns?: string[];

  /**
   * <p>The Amazon Resource Names (ARNs) of Gateway Load Balancers to add to your service
   *             configuration.</p>
   */
  AddGatewayLoadBalancerArns?: string[];

  /**
   * <p>The Amazon Resource Names (ARNs) of Gateway Load Balancers to remove from your service
   *             configuration.</p>
   */
  RemoveGatewayLoadBalancerArns?: string[];
}

export namespace ModifyVpcEndpointServiceConfigurationRequest {
  export const filterSensitiveLog = (obj: ModifyVpcEndpointServiceConfigurationRequest): any => ({
    ...obj,
  });
}

export interface ModifyVpcEndpointServiceConfigurationResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  Return?: boolean;
}

export namespace ModifyVpcEndpointServiceConfigurationResult {
  export const filterSensitiveLog = (obj: ModifyVpcEndpointServiceConfigurationResult): any => ({
    ...obj,
  });
}

export interface ModifyVpcEndpointServicePermissionsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the service.</p>
   */
  ServiceId: string | undefined;

  /**
   * <p>The Amazon Resource Names (ARN) of one or more principals.
   * 	        Permissions are granted to the principals in this list.
   * 	        To grant permissions to all principals, specify an asterisk (*).</p>
   */
  AddAllowedPrincipals?: string[];

  /**
   * <p>The Amazon Resource Names (ARN) of one or more principals.
   * 	        Permissions are revoked for principals in this list.</p>
   */
  RemoveAllowedPrincipals?: string[];
}

export namespace ModifyVpcEndpointServicePermissionsRequest {
  export const filterSensitiveLog = (obj: ModifyVpcEndpointServicePermissionsRequest): any => ({
    ...obj,
  });
}

export interface ModifyVpcEndpointServicePermissionsResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  ReturnValue?: boolean;
}

export namespace ModifyVpcEndpointServicePermissionsResult {
  export const filterSensitiveLog = (obj: ModifyVpcEndpointServicePermissionsResult): any => ({
    ...obj,
  });
}

/**
 * <p>The VPC peering connection options.</p>
 */
export interface PeeringConnectionOptionsRequest {
  /**
   * <p>If true, enables a local VPC to resolve public DNS hostnames to private IP addresses when queried from instances in the peer VPC.</p>
   */
  AllowDnsResolutionFromRemoteVpc?: boolean;

  /**
   * <p>If true, enables outbound communication from an EC2-Classic instance that's linked to
   *             a local VPC using ClassicLink to instances in a peer VPC.</p>
   */
  AllowEgressFromLocalClassicLinkToRemoteVpc?: boolean;

  /**
   * <p>If true, enables outbound communication from instances in a local VPC to an
   *             EC2-Classic instance that's linked to a peer VPC using ClassicLink.</p>
   */
  AllowEgressFromLocalVpcToRemoteClassicLink?: boolean;
}

export namespace PeeringConnectionOptionsRequest {
  export const filterSensitiveLog = (obj: PeeringConnectionOptionsRequest): any => ({
    ...obj,
  });
}

export interface ModifyVpcPeeringConnectionOptionsRequest {
  /**
   * <p>The VPC peering connection options for the accepter VPC.</p>
   */
  AccepterPeeringConnectionOptions?: PeeringConnectionOptionsRequest;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The VPC peering connection options for the requester VPC.</p>
   */
  RequesterPeeringConnectionOptions?: PeeringConnectionOptionsRequest;

  /**
   * <p>The ID of the VPC peering connection.</p>
   */
  VpcPeeringConnectionId: string | undefined;
}

export namespace ModifyVpcPeeringConnectionOptionsRequest {
  export const filterSensitiveLog = (obj: ModifyVpcPeeringConnectionOptionsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the VPC peering connection options.</p>
 */
export interface PeeringConnectionOptions {
  /**
   * <p>If true, the public DNS hostnames of instances in the specified VPC resolve to private
   *             IP addresses when queried from instances in the peer VPC.</p>
   */
  AllowDnsResolutionFromRemoteVpc?: boolean;

  /**
   * <p>If true, enables outbound communication from an EC2-Classic instance that's linked to
   *             a local VPC using ClassicLink to instances in a peer VPC.</p>
   */
  AllowEgressFromLocalClassicLinkToRemoteVpc?: boolean;

  /**
   * <p>If true, enables outbound communication from instances in a local VPC to an
   *             EC2-Classic instance that's linked to a peer VPC using ClassicLink.</p>
   */
  AllowEgressFromLocalVpcToRemoteClassicLink?: boolean;
}

export namespace PeeringConnectionOptions {
  export const filterSensitiveLog = (obj: PeeringConnectionOptions): any => ({
    ...obj,
  });
}

export interface ModifyVpcPeeringConnectionOptionsResult {
  /**
   * <p>Information about the VPC peering connection options for the accepter VPC.</p>
   */
  AccepterPeeringConnectionOptions?: PeeringConnectionOptions;

  /**
   * <p>Information about the VPC peering connection options for the requester VPC.</p>
   */
  RequesterPeeringConnectionOptions?: PeeringConnectionOptions;
}

export namespace ModifyVpcPeeringConnectionOptionsResult {
  export const filterSensitiveLog = (obj: ModifyVpcPeeringConnectionOptionsResult): any => ({
    ...obj,
  });
}

export type VpcTenancy = "default";

export interface ModifyVpcTenancyRequest {
  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId: string | undefined;

  /**
   * <p>The instance tenancy attribute for the VPC. </p>
   */
  InstanceTenancy: VpcTenancy | string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace ModifyVpcTenancyRequest {
  export const filterSensitiveLog = (obj: ModifyVpcTenancyRequest): any => ({
    ...obj,
  });
}

export interface ModifyVpcTenancyResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, returns an
   *             error.</p>
   */
  ReturnValue?: boolean;
}

export namespace ModifyVpcTenancyResult {
  export const filterSensitiveLog = (obj: ModifyVpcTenancyResult): any => ({
    ...obj,
  });
}

export interface ModifyVpnConnectionRequest {
  /**
   * <p>The ID of the VPN connection.</p>
   */
  VpnConnectionId: string | undefined;

  /**
   * <p>The ID of the transit gateway.</p>
   */
  TransitGatewayId?: string;

  /**
   * <p>The ID of the customer gateway at your end of the VPN connection.</p>
   */
  CustomerGatewayId?: string;

  /**
   * <p>The ID of the virtual private gateway at the AWS side of the VPN connection.</p>
   */
  VpnGatewayId?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *             and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *             Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace ModifyVpnConnectionRequest {
  export const filterSensitiveLog = (obj: ModifyVpnConnectionRequest): any => ({
    ...obj,
  });
}

export interface ModifyVpnConnectionResult {
  /**
   * <p>Describes a VPN connection.</p>
   */
  VpnConnection?: VpnConnection;
}

export namespace ModifyVpnConnectionResult {
  export const filterSensitiveLog = (obj: ModifyVpnConnectionResult): any => ({
    ...obj,
  });
}

export interface ModifyVpnConnectionOptionsRequest {
  /**
   * <p>The ID of the Site-to-Site VPN connection.
   *         </p>
   */
  VpnConnectionId: string | undefined;

  /**
   * <p>The IPv4 CIDR on the customer gateway (on-premises) side of the VPN connection.</p>
   *         <p>Default: <code>0.0.0.0/0</code>
   *          </p>
   */
  LocalIpv4NetworkCidr?: string;

  /**
   * <p>The IPv4 CIDR on the AWS side of the VPN connection.</p>
   *         <p>Default: <code>0.0.0.0/0</code>
   *          </p>
   */
  RemoteIpv4NetworkCidr?: string;

  /**
   * <p>The IPv6 CIDR on the customer gateway (on-premises) side of the VPN connection.</p>
   *         <p>Default: <code>::/0</code>
   *          </p>
   */
  LocalIpv6NetworkCidr?: string;

  /**
   * <p>The IPv6 CIDR on the AWS side of the VPN connection.</p>
   *         <p>Default: <code>::/0</code>
   *          </p>
   */
  RemoteIpv6NetworkCidr?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace ModifyVpnConnectionOptionsRequest {
  export const filterSensitiveLog = (obj: ModifyVpnConnectionOptionsRequest): any => ({
    ...obj,
  });
}

export interface ModifyVpnConnectionOptionsResult {
  /**
   * <p>Describes a VPN connection.</p>
   */
  VpnConnection?: VpnConnection;
}

export namespace ModifyVpnConnectionOptionsResult {
  export const filterSensitiveLog = (obj: ModifyVpnConnectionOptionsResult): any => ({
    ...obj,
  });
}

export interface ModifyVpnTunnelCertificateRequest {
  /**
   * <p>The ID of the AWS Site-to-Site VPN connection.</p>
   */
  VpnConnectionId: string | undefined;

  /**
   * <p>The external IP address of the VPN tunnel.</p>
   */
  VpnTunnelOutsideIpAddress: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *             and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *             Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace ModifyVpnTunnelCertificateRequest {
  export const filterSensitiveLog = (obj: ModifyVpnTunnelCertificateRequest): any => ({
    ...obj,
  });
}

export interface ModifyVpnTunnelCertificateResult {
  /**
   * <p>Describes a VPN connection.</p>
   */
  VpnConnection?: VpnConnection;
}

export namespace ModifyVpnTunnelCertificateResult {
  export const filterSensitiveLog = (obj: ModifyVpnTunnelCertificateResult): any => ({
    ...obj,
  });
}

/**
 * <p>The AWS Site-to-Site VPN tunnel options to modify.</p>
 */
export interface ModifyVpnTunnelOptionsSpecification {
  /**
   * <p>The range of inside IPv4 addresses for the tunnel. Any specified CIDR blocks must be unique
   *             across all VPN connections that use the same virtual private gateway. </p>
   *         <p>Constraints: A size /30 CIDR block from the <code>169.254.0.0/16</code> range. The
   *             following CIDR blocks are reserved and cannot be used:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>169.254.0.0/30</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>169.254.1.0/30</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>169.254.2.0/30</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>169.254.3.0/30</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>169.254.4.0/30</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>169.254.5.0/30</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>169.254.169.252/30</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  TunnelInsideCidr?: string;

  /**
   * <p>The range of inside IPv6 addresses for the tunnel. Any specified CIDR blocks must be unique across all VPN connections that use the same transit gateway.</p>
   *         <p>Constraints: A size /126 CIDR block from the local <code>fd00::/8</code> range.</p>
   */
  TunnelInsideIpv6Cidr?: string;

  /**
   * <p>The pre-shared key (PSK) to establish initial authentication between the virtual
   *             private gateway and the customer gateway.</p>
   *         <p>Constraints: Allowed characters are alphanumeric characters, periods (.), and
   *             underscores (_). Must be between 8 and 64 characters in length and cannot start with
   *             zero (0).</p>
   */
  PreSharedKey?: string;

  /**
   * <p>The lifetime for phase 1 of the IKE negotiation, in seconds.</p>
   *         <p>Constraints: A value between 900 and 28,800.</p>
   *         <p>Default: <code>28800</code>
   *          </p>
   */
  Phase1LifetimeSeconds?: number;

  /**
   * <p>The lifetime for phase 2 of the IKE negotiation, in seconds.</p>
   *         <p>Constraints: A value between 900 and 3,600. The value must be less than the value for <code>Phase1LifetimeSeconds</code>.</p>
   *         <p>Default: <code>3600</code>
   *          </p>
   */
  Phase2LifetimeSeconds?: number;

  /**
   * <p>The margin time, in seconds, before the phase 2 lifetime expires, during which the AWS side of the VPN connection performs an IKE rekey. The exact time of the rekey is randomly selected based on the value for <code>RekeyFuzzPercentage</code>.</p>
   *         <p>Constraints: A value between 60 and half of <code>Phase2LifetimeSeconds</code>.</p>
   *         <p>Default: <code>540</code>
   *          </p>
   */
  RekeyMarginTimeSeconds?: number;

  /**
   * <p>The percentage of the rekey window (determined by <code>RekeyMarginTimeSeconds</code>) during which the rekey time is randomly selected.</p>
   *         <p>Constraints: A value between 0 and 100.</p>
   *         <p>Default: <code>100</code>
   *          </p>
   */
  RekeyFuzzPercentage?: number;

  /**
   * <p>The number of packets in an IKE replay window.</p>
   *         <p>Constraints: A value between 64 and 2048.</p>
   *         <p>Default: <code>1024</code>
   *          </p>
   */
  ReplayWindowSize?: number;

  /**
   * <p>The number of seconds after which a DPD timeout occurs.</p>
   *         <p>Constraints: A value between 0 and 30.</p>
   *         <p>Default: <code>30</code>
   *          </p>
   */
  DPDTimeoutSeconds?: number;

  /**
   * <p>The action to take after DPD timeout occurs. Specify <code>restart</code> to restart the IKE initiation. Specify <code>clear</code> to end the IKE session.</p>
   *         <p>Valid Values: <code>clear</code> | <code>none</code> | <code>restart</code>
   *          </p>
   *         <p>Default: <code>clear</code>
   *          </p>
   */
  DPDTimeoutAction?: string;

  /**
   * <p>One or more encryption algorithms that are permitted for the VPN tunnel for phase 1 IKE negotiations.</p>
   *         <p>Valid values: <code>AES128</code> | <code>AES256</code> | <code>AES128-GCM-16</code> | <code>AES256-GCM-16</code>
   *          </p>
   */
  Phase1EncryptionAlgorithms?: Phase1EncryptionAlgorithmsRequestListValue[];

  /**
   * <p>One or more encryption algorithms that are permitted for the VPN tunnel for phase 2 IKE negotiations.</p>
   *         <p>Valid values: <code>AES128</code> | <code>AES256</code> | <code>AES128-GCM-16</code> | <code>AES256-GCM-16</code>
   *          </p>
   */
  Phase2EncryptionAlgorithms?: Phase2EncryptionAlgorithmsRequestListValue[];

  /**
   * <p>One or more integrity algorithms that are permitted for the VPN tunnel for phase 1 IKE negotiations.</p>
   *         <p>Valid values: <code>SHA1</code> | <code>SHA2-256</code> | <code>SHA2-384</code> | <code>SHA2-512</code>
   *          </p>
   */
  Phase1IntegrityAlgorithms?: Phase1IntegrityAlgorithmsRequestListValue[];

  /**
   * <p>One or more integrity algorithms that are permitted for the VPN tunnel for phase 2 IKE negotiations.</p>
   *         <p>Valid values: <code>SHA1</code> | <code>SHA2-256</code> | <code>SHA2-384</code> | <code>SHA2-512</code>
   *          </p>
   */
  Phase2IntegrityAlgorithms?: Phase2IntegrityAlgorithmsRequestListValue[];

  /**
   * <p>One or more Diffie-Hellman group numbers that are permitted for the VPN tunnel for phase 1 IKE negotiations.</p>
   *         <p>Valid values: <code>2</code> | <code>14</code> | <code>15</code> | <code>16</code> | <code>17</code> | <code>18</code> | <code>19</code> | <code>20</code> | <code>21</code> | <code>22</code> | <code>23</code> | <code>24</code>
   *          </p>
   */
  Phase1DHGroupNumbers?: Phase1DHGroupNumbersRequestListValue[];

  /**
   * <p>One or more Diffie-Hellman group numbers that are permitted for the VPN tunnel for phase 2 IKE negotiations.</p>
   *         <p>Valid values: <code>2</code> | <code>5</code> | <code>14</code> | <code>15</code> | <code>16</code> | <code>17</code> | <code>18</code> | <code>19</code> | <code>20</code> | <code>21</code> | <code>22</code> | <code>23</code> | <code>24</code>
   *          </p>
   */
  Phase2DHGroupNumbers?: Phase2DHGroupNumbersRequestListValue[];

  /**
   * <p>The IKE versions that are permitted for the VPN tunnel.</p>
   *         <p>Valid values: <code>ikev1</code> | <code>ikev2</code>
   *          </p>
   */
  IKEVersions?: IKEVersionsRequestListValue[];

  /**
   * <p>The action to take when the establishing the tunnel for the VPN connection. By default, your customer gateway device must initiate the IKE negotiation and bring up the tunnel. Specify <code>start</code> for AWS to initiate the IKE negotiation.</p>
   *         <p>Valid Values: <code>add</code> | <code>start</code>
   *          </p>
   *         <p>Default: <code>add</code>
   *          </p>
   */
  StartupAction?: string;
}

export namespace ModifyVpnTunnelOptionsSpecification {
  export const filterSensitiveLog = (obj: ModifyVpnTunnelOptionsSpecification): any => ({
    ...obj,
  });
}

export interface ModifyVpnTunnelOptionsRequest {
  /**
   * <p>The ID of the AWS Site-to-Site VPN connection.</p>
   */
  VpnConnectionId: string | undefined;

  /**
   * <p>The external IP address of the VPN tunnel.</p>
   */
  VpnTunnelOutsideIpAddress: string | undefined;

  /**
   * <p>The tunnel options to modify.</p>
   */
  TunnelOptions: ModifyVpnTunnelOptionsSpecification | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *             and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *             Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace ModifyVpnTunnelOptionsRequest {
  export const filterSensitiveLog = (obj: ModifyVpnTunnelOptionsRequest): any => ({
    ...obj,
  });
}

export interface ModifyVpnTunnelOptionsResult {
  /**
   * <p>Describes a VPN connection.</p>
   */
  VpnConnection?: VpnConnection;
}

export namespace ModifyVpnTunnelOptionsResult {
  export const filterSensitiveLog = (obj: ModifyVpnTunnelOptionsResult): any => ({
    ...obj,
  });
}

export interface MonitorInstancesRequest {
  /**
   * <p>The IDs of the instances.</p>
   */
  InstanceIds: string[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace MonitorInstancesRequest {
  export const filterSensitiveLog = (obj: MonitorInstancesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the monitoring of an instance.</p>
 */
export interface InstanceMonitoring {
  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId?: string;

  /**
   * <p>The monitoring for the instance.</p>
   */
  Monitoring?: Monitoring;
}

export namespace InstanceMonitoring {
  export const filterSensitiveLog = (obj: InstanceMonitoring): any => ({
    ...obj,
  });
}

export interface MonitorInstancesResult {
  /**
   * <p>The monitoring information.</p>
   */
  InstanceMonitorings?: InstanceMonitoring[];
}

export namespace MonitorInstancesResult {
  export const filterSensitiveLog = (obj: MonitorInstancesResult): any => ({
    ...obj,
  });
}

export interface MoveAddressToVpcRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The Elastic IP address.</p>
   */
  PublicIp: string | undefined;
}

export namespace MoveAddressToVpcRequest {
  export const filterSensitiveLog = (obj: MoveAddressToVpcRequest): any => ({
    ...obj,
  });
}

export enum Status {
  inClassic = "InClassic",
  inVpc = "InVpc",
  moveInProgress = "MoveInProgress",
}

export interface MoveAddressToVpcResult {
  /**
   * <p>The allocation ID for the Elastic IP address.</p>
   */
  AllocationId?: string;

  /**
   * <p>The status of the move of the IP address.</p>
   */
  Status?: Status | string;
}

export namespace MoveAddressToVpcResult {
  export const filterSensitiveLog = (obj: MoveAddressToVpcResult): any => ({
    ...obj,
  });
}

/**
 * <p>Provides authorization for Amazon to bring a specific IP address range to a specific
 *          AWS account using bring your own IP addresses (BYOIP). For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-byoip.html#prepare-for-byoip">Prepare to Bring Your Address Range to Your AWS Account</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 */
export interface CidrAuthorizationContext {
  /**
   * <p>The plain-text authorization message for the prefix and account.</p>
   */
  Message: string | undefined;

  /**
   * <p>The signed authorization message for the prefix and account.</p>
   */
  Signature: string | undefined;
}

export namespace CidrAuthorizationContext {
  export const filterSensitiveLog = (obj: CidrAuthorizationContext): any => ({
    ...obj,
  });
}

export interface ProvisionByoipCidrRequest {
  /**
   * <p>The public IPv4 or IPv6 address range, in CIDR notation. The most specific IPv4 prefix that you can
   *          specify is /24. The most specific IPv6 prefix you can specify is /56. The address range cannot overlap with another address range that you've
   *          brought to this or another Region.</p>
   */
  Cidr: string | undefined;

  /**
   * <p>A signed document that proves that you are authorized to bring the specified IP address
   *          range to Amazon using BYOIP.</p>
   */
  CidrAuthorizationContext?: CidrAuthorizationContext;

  /**
   * <p>(IPv6 only) Indicate whether the address range will be publicly advertised to the
   *             internet.</p>
   *         <p>Default: true</p>
   */
  PubliclyAdvertisable?: boolean;

  /**
   * <p>A description for the address range and the address pool.</p>
   */
  Description?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The tags to apply to the address pool.</p>
   */
  PoolTagSpecifications?: TagSpecification[];
}

export namespace ProvisionByoipCidrRequest {
  export const filterSensitiveLog = (obj: ProvisionByoipCidrRequest): any => ({
    ...obj,
  });
}

export interface ProvisionByoipCidrResult {
  /**
   * <p>Information about the address range.</p>
   */
  ByoipCidr?: ByoipCidr;
}

export namespace ProvisionByoipCidrResult {
  export const filterSensitiveLog = (obj: ProvisionByoipCidrResult): any => ({
    ...obj,
  });
}

export interface PurchaseHostReservationRequest {
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">How to Ensure Idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * <p>The currency in which the <code>totalUpfrontPrice</code>, <code>LimitPrice</code>,
   *             and <code>totalHourlyPrice</code> amounts are specified. At this time, the only
   *             supported currency is <code>USD</code>.</p>
   */
  CurrencyCode?: CurrencyCodeValues | string;

  /**
   * <p>The IDs of the Dedicated Hosts with which the reservation will be associated.</p>
   */
  HostIdSet: string[] | undefined;

  /**
   * <p>The specified limit is checked against the total upfront cost of the reservation
   *             (calculated as the offering's upfront cost multiplied by the host count). If the total
   *             upfront cost is greater than the specified price limit, the request fails. This is used
   *             to ensure that the purchase does not exceed the expected upfront cost of the purchase.
   *             At this time, the only supported currency is <code>USD</code>. For example, to indicate
   *             a limit price of USD 100, specify 100.00.</p>
   */
  LimitPrice?: string;

  /**
   * <p>The ID of the offering.</p>
   */
  OfferingId: string | undefined;

  /**
   * <p>The tags to apply to the Dedicated Host Reservation during purchase.</p>
   */
  TagSpecifications?: TagSpecification[];
}

export namespace PurchaseHostReservationRequest {
  export const filterSensitiveLog = (obj: PurchaseHostReservationRequest): any => ({
    ...obj,
  });
}

export interface PurchaseHostReservationResult {
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">How to Ensure Idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * <p>The currency in which the <code>totalUpfrontPrice</code> and
   *                 <code>totalHourlyPrice</code> amounts are specified. At this time, the only
   *             supported currency is <code>USD</code>.</p>
   */
  CurrencyCode?: CurrencyCodeValues | string;

  /**
   * <p>Describes the details of the purchase.</p>
   */
  Purchase?: Purchase[];

  /**
   * <p>The total hourly price of the reservation calculated per hour.</p>
   */
  TotalHourlyPrice?: string;

  /**
   * <p>The total amount charged to your account when you purchase the reservation.</p>
   */
  TotalUpfrontPrice?: string;
}

export namespace PurchaseHostReservationResult {
  export const filterSensitiveLog = (obj: PurchaseHostReservationResult): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the limit price of a Reserved Instance offering.</p>
 */
export interface ReservedInstanceLimitPrice {
  /**
   * <p>Used for Reserved Instance Marketplace offerings. Specifies the limit price on the total order (instanceCount * price).</p>
   */
  Amount?: number;

  /**
   * <p>The currency in which the <code>limitPrice</code> amount is specified.
   * 				At this time, the only supported currency is <code>USD</code>.</p>
   */
  CurrencyCode?: CurrencyCodeValues | string;
}

export namespace ReservedInstanceLimitPrice {
  export const filterSensitiveLog = (obj: ReservedInstanceLimitPrice): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for PurchaseReservedInstancesOffering.</p>
 */
export interface PurchaseReservedInstancesOfferingRequest {
  /**
   * <p>The number of Reserved Instances to purchase.</p>
   */
  InstanceCount: number | undefined;

  /**
   * <p>The ID of the Reserved Instance offering to purchase.</p>
   */
  ReservedInstancesOfferingId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *        and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *        Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Specified for Reserved Instance Marketplace offerings to limit the total order and ensure that the Reserved Instances are not purchased at unexpected prices.</p>
   */
  LimitPrice?: ReservedInstanceLimitPrice;

  /**
   * <p>The time at which to purchase the Reserved Instance, in UTC format (for example, <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).</p>
   */
  PurchaseTime?: Date;
}

export namespace PurchaseReservedInstancesOfferingRequest {
  export const filterSensitiveLog = (obj: PurchaseReservedInstancesOfferingRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of PurchaseReservedInstancesOffering.</p>
 */
export interface PurchaseReservedInstancesOfferingResult {
  /**
   * <p>The IDs of the purchased Reserved Instances.</p>
   */
  ReservedInstancesId?: string;
}

export namespace PurchaseReservedInstancesOfferingResult {
  export const filterSensitiveLog = (obj: PurchaseReservedInstancesOfferingResult): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a request to purchase Scheduled Instances.</p>
 */
export interface PurchaseRequest {
  /**
   * <p>The number of instances.</p>
   */
  InstanceCount: number | undefined;

  /**
   * <p>The purchase token.</p>
   */
  PurchaseToken: string | undefined;
}

export namespace PurchaseRequest {
  export const filterSensitiveLog = (obj: PurchaseRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for PurchaseScheduledInstances.</p>
 */
export interface PurchaseScheduledInstancesRequest {
  /**
   * <p>Unique, case-sensitive identifier that ensures the idempotency of the request.
   *          For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The purchase requests.</p>
   */
  PurchaseRequests: PurchaseRequest[] | undefined;
}

export namespace PurchaseScheduledInstancesRequest {
  export const filterSensitiveLog = (obj: PurchaseScheduledInstancesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of PurchaseScheduledInstances.</p>
 */
export interface PurchaseScheduledInstancesResult {
  /**
   * <p>Information about the Scheduled Instances.</p>
   */
  ScheduledInstanceSet?: ScheduledInstance[];
}

export namespace PurchaseScheduledInstancesResult {
  export const filterSensitiveLog = (obj: PurchaseScheduledInstancesResult): any => ({
    ...obj,
  });
}

export interface RebootInstancesRequest {
  /**
   * <p>The instance IDs.</p>
   */
  InstanceIds: string[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace RebootInstancesRequest {
  export const filterSensitiveLog = (obj: RebootInstancesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for RegisterImage.</p>
 */
export interface RegisterImageRequest {
  /**
   * <p>The full path to your AMI manifest in Amazon S3 storage. The specified bucket must have the
   *    		<code>aws-exec-read</code> canned access control list (ACL) to ensure that it can be accessed
   *    		by Amazon EC2. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#canned-acl">Canned ACLs</a> in the
   *    		<i>Amazon S3 Service Developer Guide</i>.</p>
   */
  ImageLocation?: string;

  /**
   * <p>The architecture of the AMI.</p>
   *          <p>Default: For Amazon EBS-backed AMIs, <code>i386</code>.
   *         For instance store-backed AMIs, the architecture specified in the manifest file.</p>
   */
  Architecture?: ArchitectureValues | string;

  /**
   * <p>The block device mapping entries.</p>
   */
  BlockDeviceMappings?: BlockDeviceMapping[];

  /**
   * <p>A description for your AMI.</p>
   */
  Description?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *        and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *        Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Set to <code>true</code> to enable enhanced networking with ENA for the AMI and any instances that you launch from the AMI.</p>
   *          <p>This option is supported only for HVM AMIs. Specifying this option with a PV AMI can make instances launched from the AMI unreachable.</p>
   */
  EnaSupport?: boolean;

  /**
   * <p>The ID of the kernel.</p>
   */
  KernelId?: string;

  /**
   * <p>A name for your AMI.</p>
   *          <p>Constraints: 3-128 alphanumeric characters, parentheses (()), square brackets ([]), spaces ( ), periods (.), slashes (/), dashes (-), single quotes ('), at-signs (@), or underscores(_)</p>
   */
  Name: string | undefined;

  /**
   * <p>The billing product codes. Your account must be authorized to specify billing product codes. Otherwise,
   *          you can use the AWS Marketplace to bill for the use of an AMI.</p>
   */
  BillingProducts?: string[];

  /**
   * <p>The ID of the RAM disk.</p>
   */
  RamdiskId?: string;

  /**
   * <p>The device name of the root device volume (for example, <code>/dev/sda1</code>).</p>
   */
  RootDeviceName?: string;

  /**
   * <p>Set to <code>simple</code> to enable enhanced networking with the Intel 82599 Virtual Function interface for the AMI and any instances that you launch from the AMI.</p>
   *          <p>There is no way to disable <code>sriovNetSupport</code> at this time.</p>
   *          <p>This option is supported only for HVM AMIs. Specifying this option with a PV AMI can make instances launched from the AMI unreachable.</p>
   */
  SriovNetSupport?: string;

  /**
   * <p>The type of virtualization (<code>hvm</code> | <code>paravirtual</code>).</p>
   *          <p>Default: <code>paravirtual</code>
   *          </p>
   */
  VirtualizationType?: string;
}

export namespace RegisterImageRequest {
  export const filterSensitiveLog = (obj: RegisterImageRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of RegisterImage.</p>
 */
export interface RegisterImageResult {
  /**
   * <p>The ID of the newly registered AMI.</p>
   */
  ImageId?: string;
}

export namespace RegisterImageResult {
  export const filterSensitiveLog = (obj: RegisterImageResult): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the tag keys to register for the current Region. You can either specify
 *       	individual tag keys or register all tag keys in the current Region. You must specify either
 *       	<code>IncludeAllTagsOfInstance</code> or <code>InstanceTagKeys</code> in the request</p>
 */
export interface RegisterInstanceTagAttributeRequest {
  /**
   * <p>Indicates whether to register all tag keys in the current Region. Specify <code>true</code>
   *       	to register all tag keys.</p>
   */
  IncludeAllTagsOfInstance?: boolean;

  /**
   * <p>The tag keys to register.</p>
   */
  InstanceTagKeys?: string[];
}

export namespace RegisterInstanceTagAttributeRequest {
  export const filterSensitiveLog = (obj: RegisterInstanceTagAttributeRequest): any => ({
    ...obj,
  });
}

export interface RegisterInstanceEventNotificationAttributesRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Information about the tag keys to register.</p>
   */
  InstanceTagAttribute?: RegisterInstanceTagAttributeRequest;
}

export namespace RegisterInstanceEventNotificationAttributesRequest {
  export const filterSensitiveLog = (obj: RegisterInstanceEventNotificationAttributesRequest): any => ({
    ...obj,
  });
}

export interface RegisterInstanceEventNotificationAttributesResult {
  /**
   * <p>The resulting set of tag keys.</p>
   */
  InstanceTagAttribute?: InstanceTagNotificationAttribute;
}

export namespace RegisterInstanceEventNotificationAttributesResult {
  export const filterSensitiveLog = (obj: RegisterInstanceEventNotificationAttributesResult): any => ({
    ...obj,
  });
}

export interface RegisterTransitGatewayMulticastGroupMembersRequest {
  /**
   * <p>The ID of the transit gateway multicast domain.</p>
   */
  TransitGatewayMulticastDomainId?: string;

  /**
   * <p>The IP address assigned to the  transit gateway multicast group.</p>
   */
  GroupIpAddress?: string;

  /**
   * <p>The group members' network interface IDs to register with the  transit gateway multicast group.</p>
   */
  NetworkInterfaceIds?: string[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace RegisterTransitGatewayMulticastGroupMembersRequest {
  export const filterSensitiveLog = (obj: RegisterTransitGatewayMulticastGroupMembersRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the registered  transit gateway multicast group members.</p>
 */
export interface TransitGatewayMulticastRegisteredGroupMembers {
  /**
   * <p>The ID of the transit gateway multicast domain.</p>
   */
  TransitGatewayMulticastDomainId?: string;

  /**
   * <p>The ID of the registered network interfaces.</p>
   */
  RegisteredNetworkInterfaceIds?: string[];

  /**
   * <p>The IP address assigned to the  transit gateway multicast group.</p>
   */
  GroupIpAddress?: string;
}

export namespace TransitGatewayMulticastRegisteredGroupMembers {
  export const filterSensitiveLog = (obj: TransitGatewayMulticastRegisteredGroupMembers): any => ({
    ...obj,
  });
}

export interface RegisterTransitGatewayMulticastGroupMembersResult {
  /**
   * <p>Information about the registered  transit gateway multicast group members.</p>
   */
  RegisteredMulticastGroupMembers?: TransitGatewayMulticastRegisteredGroupMembers;
}

export namespace RegisterTransitGatewayMulticastGroupMembersResult {
  export const filterSensitiveLog = (obj: RegisterTransitGatewayMulticastGroupMembersResult): any => ({
    ...obj,
  });
}

export interface RegisterTransitGatewayMulticastGroupSourcesRequest {
  /**
   * <p>The ID of the transit gateway multicast domain.</p>
   */
  TransitGatewayMulticastDomainId?: string;

  /**
   * <p>The IP address assigned to the  transit gateway multicast group.</p>
   */
  GroupIpAddress?: string;

  /**
   * <p>The group sources' network interface IDs to register with the  transit gateway multicast group.</p>
   */
  NetworkInterfaceIds?: string[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace RegisterTransitGatewayMulticastGroupSourcesRequest {
  export const filterSensitiveLog = (obj: RegisterTransitGatewayMulticastGroupSourcesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the members registered with the  transit gateway multicast group.</p>
 */
export interface TransitGatewayMulticastRegisteredGroupSources {
  /**
   * <p>The ID of the transit gateway multicast domain.</p>
   */
  TransitGatewayMulticastDomainId?: string;

  /**
   * <p>The IDs of the network interfaces members registered with the  transit gateway multicast group.</p>
   */
  RegisteredNetworkInterfaceIds?: string[];

  /**
   * <p>The IP address assigned to the  transit gateway multicast group.</p>
   */
  GroupIpAddress?: string;
}

export namespace TransitGatewayMulticastRegisteredGroupSources {
  export const filterSensitiveLog = (obj: TransitGatewayMulticastRegisteredGroupSources): any => ({
    ...obj,
  });
}

export interface RegisterTransitGatewayMulticastGroupSourcesResult {
  /**
   * <p>Information about the  transit gateway multicast group sources.</p>
   */
  RegisteredMulticastGroupSources?: TransitGatewayMulticastRegisteredGroupSources;
}

export namespace RegisterTransitGatewayMulticastGroupSourcesResult {
  export const filterSensitiveLog = (obj: RegisterTransitGatewayMulticastGroupSourcesResult): any => ({
    ...obj,
  });
}

export interface RejectTransitGatewayPeeringAttachmentRequest {
  /**
   * <p>The ID of the transit gateway peering attachment.</p>
   */
  TransitGatewayAttachmentId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace RejectTransitGatewayPeeringAttachmentRequest {
  export const filterSensitiveLog = (obj: RejectTransitGatewayPeeringAttachmentRequest): any => ({
    ...obj,
  });
}

export interface RejectTransitGatewayPeeringAttachmentResult {
  /**
   * <p>The transit gateway peering attachment.</p>
   */
  TransitGatewayPeeringAttachment?: TransitGatewayPeeringAttachment;
}

export namespace RejectTransitGatewayPeeringAttachmentResult {
  export const filterSensitiveLog = (obj: RejectTransitGatewayPeeringAttachmentResult): any => ({
    ...obj,
  });
}

export interface RejectTransitGatewayVpcAttachmentRequest {
  /**
   * <p>The ID of the attachment.</p>
   */
  TransitGatewayAttachmentId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace RejectTransitGatewayVpcAttachmentRequest {
  export const filterSensitiveLog = (obj: RejectTransitGatewayVpcAttachmentRequest): any => ({
    ...obj,
  });
}

export interface RejectTransitGatewayVpcAttachmentResult {
  /**
   * <p>Information about the attachment.</p>
   */
  TransitGatewayVpcAttachment?: TransitGatewayVpcAttachment;
}

export namespace RejectTransitGatewayVpcAttachmentResult {
  export const filterSensitiveLog = (obj: RejectTransitGatewayVpcAttachmentResult): any => ({
    ...obj,
  });
}

export interface RejectVpcEndpointConnectionsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the service.</p>
   */
  ServiceId: string | undefined;

  /**
   * <p>The IDs of one or more VPC endpoints.</p>
   */
  VpcEndpointIds: string[] | undefined;
}

export namespace RejectVpcEndpointConnectionsRequest {
  export const filterSensitiveLog = (obj: RejectVpcEndpointConnectionsRequest): any => ({
    ...obj,
  });
}

export interface RejectVpcEndpointConnectionsResult {
  /**
   * <p>Information about the endpoints that were not rejected, if applicable.</p>
   */
  Unsuccessful?: UnsuccessfulItem[];
}

export namespace RejectVpcEndpointConnectionsResult {
  export const filterSensitiveLog = (obj: RejectVpcEndpointConnectionsResult): any => ({
    ...obj,
  });
}

export interface RejectVpcPeeringConnectionRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the VPC peering connection.</p>
   */
  VpcPeeringConnectionId: string | undefined;
}

export namespace RejectVpcPeeringConnectionRequest {
  export const filterSensitiveLog = (obj: RejectVpcPeeringConnectionRequest): any => ({
    ...obj,
  });
}

export interface RejectVpcPeeringConnectionResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  Return?: boolean;
}

export namespace RejectVpcPeeringConnectionResult {
  export const filterSensitiveLog = (obj: RejectVpcPeeringConnectionResult): any => ({
    ...obj,
  });
}

export interface ReleaseAddressRequest {
  /**
   * <p>[EC2-VPC] The allocation ID. Required for EC2-VPC.</p>
   */
  AllocationId?: string;

  /**
   * <p>[EC2-Classic] The Elastic IP address. Required for EC2-Classic.</p>
   */
  PublicIp?: string;

  /**
   * <p>The set of Availability Zones, Local Zones, or Wavelength Zones from which AWS advertises
   *       IP addresses.</p>
   *          <p>If you provide an incorrect network border group, you will receive an <code>InvalidAddress.NotFound</code> error. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/errors-overview.html">Error Codes</a>.</p>
   *          <note>
   *             <p>You cannot use a network border group with EC2 Classic. If you attempt this operation on EC2 classic, you will receive an <code>InvalidParameterCombination</code> error. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/errors-overview.html">Error Codes</a>.</p>
   *          </note>
   */
  NetworkBorderGroup?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace ReleaseAddressRequest {
  export const filterSensitiveLog = (obj: ReleaseAddressRequest): any => ({
    ...obj,
  });
}

export interface ReleaseHostsRequest {
  /**
   * <p>The IDs of the Dedicated Hosts to release.</p>
   */
  HostIds: string[] | undefined;
}

export namespace ReleaseHostsRequest {
  export const filterSensitiveLog = (obj: ReleaseHostsRequest): any => ({
    ...obj,
  });
}

export interface ReleaseHostsResult {
  /**
   * <p>The IDs of the Dedicated Hosts that were successfully released.</p>
   */
  Successful?: string[];

  /**
   * <p>The IDs of the Dedicated Hosts that could not be released, including an error
   *             message.</p>
   */
  Unsuccessful?: UnsuccessfulItem[];
}

export namespace ReleaseHostsResult {
  export const filterSensitiveLog = (obj: ReleaseHostsResult): any => ({
    ...obj,
  });
}

export interface ReplaceIamInstanceProfileAssociationRequest {
  /**
   * <p>The IAM instance profile.</p>
   */
  IamInstanceProfile: IamInstanceProfileSpecification | undefined;

  /**
   * <p>The ID of the existing IAM instance profile association.</p>
   */
  AssociationId: string | undefined;
}

export namespace ReplaceIamInstanceProfileAssociationRequest {
  export const filterSensitiveLog = (obj: ReplaceIamInstanceProfileAssociationRequest): any => ({
    ...obj,
  });
}

export interface ReplaceIamInstanceProfileAssociationResult {
  /**
   * <p>Information about the IAM instance profile association.</p>
   */
  IamInstanceProfileAssociation?: IamInstanceProfileAssociation;
}

export namespace ReplaceIamInstanceProfileAssociationResult {
  export const filterSensitiveLog = (obj: ReplaceIamInstanceProfileAssociationResult): any => ({
    ...obj,
  });
}

export interface ReplaceNetworkAclAssociationRequest {
  /**
   * <p>The ID of the current association between the original network ACL and the subnet.</p>
   */
  AssociationId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the new network ACL to associate with the subnet.</p>
   */
  NetworkAclId: string | undefined;
}

export namespace ReplaceNetworkAclAssociationRequest {
  export const filterSensitiveLog = (obj: ReplaceNetworkAclAssociationRequest): any => ({
    ...obj,
  });
}

export interface ReplaceNetworkAclAssociationResult {
  /**
   * <p>The ID of the new association.</p>
   */
  NewAssociationId?: string;
}

export namespace ReplaceNetworkAclAssociationResult {
  export const filterSensitiveLog = (obj: ReplaceNetworkAclAssociationResult): any => ({
    ...obj,
  });
}

export interface ReplaceNetworkAclEntryRequest {
  /**
   * <p>The IPv4 network range to allow or deny, in CIDR notation (for example
   *                 <code>172.16.0.0/24</code>).</p>
   */
  CidrBlock?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Indicates whether to replace the egress rule.</p>
   * 		       <p>Default: If no value is specified, we replace the ingress rule.</p>
   */
  Egress: boolean | undefined;

  /**
   * <p>ICMP protocol: The ICMP or ICMPv6 type and code. Required if specifying protocol
   * 		        1 (ICMP) or protocol 58 (ICMPv6) with an IPv6 CIDR block.</p>
   */
  IcmpTypeCode?: IcmpTypeCode;

  /**
   * <p>The IPv6 network range to allow or deny, in CIDR notation (for example
   *                 <code>2001:bd8:1234:1a00::/64</code>).</p>
   */
  Ipv6CidrBlock?: string;

  /**
   * <p>The ID of the ACL.</p>
   */
  NetworkAclId: string | undefined;

  /**
   * <p>TCP or UDP protocols: The range of ports the rule applies to.
   * 		        Required if specifying protocol 6 (TCP) or 17 (UDP).</p>
   */
  PortRange?: PortRange;

  /**
   * <p>The protocol number. A value of "-1" means all protocols. If you specify "-1" or a
   *            protocol number other than "6" (TCP), "17" (UDP), or "1" (ICMP), traffic on all ports is
   *            allowed, regardless of any ports or ICMP types or codes that you specify. If you specify
   *            protocol "58" (ICMPv6) and specify an IPv4 CIDR block, traffic for all ICMP types and
   *            codes allowed, regardless of any that you specify. If you specify protocol "58" (ICMPv6)
   *            and specify an IPv6 CIDR block, you must specify an ICMP type and code.</p>
   */
  Protocol: string | undefined;

  /**
   * <p>Indicates whether to allow or deny the traffic that matches the rule.</p>
   */
  RuleAction: RuleAction | string | undefined;

  /**
   * <p>The rule number of the entry to replace.</p>
   */
  RuleNumber: number | undefined;
}

export namespace ReplaceNetworkAclEntryRequest {
  export const filterSensitiveLog = (obj: ReplaceNetworkAclEntryRequest): any => ({
    ...obj,
  });
}

export interface ReplaceRouteRequest {
  /**
   * <p>The IPv4 CIDR address block used for the destination match. The value that you
   * 			provide must match the CIDR of an existing route in the table.</p>
   */
  DestinationCidrBlock?: string;

  /**
   * <p>The IPv6 CIDR address block used for the destination match. The value that you
   * 			provide must match the CIDR of an existing route in the table.</p>
   */
  DestinationIpv6CidrBlock?: string;

  /**
   * <p>The ID of the prefix list for the route.</p>
   */
  DestinationPrefixListId?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of a VPC endpoint. Supported for Gateway Load Balancer endpoints only.</p>
   */
  VpcEndpointId?: string;

  /**
   * <p>[IPv6 traffic only] The ID of an egress-only internet gateway.</p>
   */
  EgressOnlyInternetGatewayId?: string;

  /**
   * <p>The ID of an internet gateway or virtual private gateway.</p>
   */
  GatewayId?: string;

  /**
   * <p>The ID of a NAT instance in your VPC.</p>
   */
  InstanceId?: string;

  /**
   * <p>Specifies whether to reset the local route to its default target (<code>local</code>).</p>
   */
  LocalTarget?: boolean;

  /**
   * <p>[IPv4 traffic only] The ID of a NAT gateway.</p>
   */
  NatGatewayId?: string;

  /**
   * <p>The ID of a transit gateway.</p>
   */
  TransitGatewayId?: string;

  /**
   * <p>The ID of the local gateway.</p>
   */
  LocalGatewayId?: string;

  /**
   * <p>[IPv4 traffic only] The ID of a carrier gateway.</p>
   */
  CarrierGatewayId?: string;

  /**
   * <p>The ID of a network interface.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * <p>The ID of the route table.</p>
   */
  RouteTableId: string | undefined;

  /**
   * <p>The ID of a VPC peering connection.</p>
   */
  VpcPeeringConnectionId?: string;
}

export namespace ReplaceRouteRequest {
  export const filterSensitiveLog = (obj: ReplaceRouteRequest): any => ({
    ...obj,
  });
}

export interface ReplaceRouteTableAssociationRequest {
  /**
   * <p>The association ID.</p>
   */
  AssociationId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the new route table to associate with the subnet.</p>
   */
  RouteTableId: string | undefined;
}

export namespace ReplaceRouteTableAssociationRequest {
  export const filterSensitiveLog = (obj: ReplaceRouteTableAssociationRequest): any => ({
    ...obj,
  });
}

export interface ReplaceRouteTableAssociationResult {
  /**
   * <p>The ID of the new association.</p>
   */
  NewAssociationId?: string;

  /**
   * <p>The state of the association.</p>
   */
  AssociationState?: RouteTableAssociationState;
}

export namespace ReplaceRouteTableAssociationResult {
  export const filterSensitiveLog = (obj: ReplaceRouteTableAssociationResult): any => ({
    ...obj,
  });
}

export interface ReplaceTransitGatewayRouteRequest {
  /**
   * <p>The CIDR range used for the destination match. Routing decisions are based on the most specific match.</p>
   */
  DestinationCidrBlock: string | undefined;

  /**
   * <p>The ID of the route table.</p>
   */
  TransitGatewayRouteTableId: string | undefined;

  /**
   * <p>The ID of the attachment.</p>
   */
  TransitGatewayAttachmentId?: string;

  /**
   * <p>Indicates whether traffic matching this route is to be dropped.</p>
   */
  Blackhole?: boolean;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace ReplaceTransitGatewayRouteRequest {
  export const filterSensitiveLog = (obj: ReplaceTransitGatewayRouteRequest): any => ({
    ...obj,
  });
}

export interface ReplaceTransitGatewayRouteResult {
  /**
   * <p>Information about the modified route.</p>
   */
  Route?: TransitGatewayRoute;
}

export namespace ReplaceTransitGatewayRouteResult {
  export const filterSensitiveLog = (obj: ReplaceTransitGatewayRouteResult): any => ({
    ...obj,
  });
}

export type ReportInstanceReasonCodes =
  | "instance-stuck-in-state"
  | "not-accepting-credentials"
  | "other"
  | "password-not-available"
  | "performance-ebs-volume"
  | "performance-instance-store"
  | "performance-network"
  | "performance-other"
  | "unresponsive";

export type ReportStatusType = "impaired" | "ok";

export interface ReportInstanceStatusRequest {
  /**
   * <p>Descriptive text about the health state of your instance.</p>
   */
  Description?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The time at which the reported instance health state ended.</p>
   */
  EndTime?: Date;

  /**
   * <p>The instances.</p>
   */
  Instances: string[] | undefined;

  /**
   * <p>The reason codes that describe the health state of your instance.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>instance-stuck-in-state</code>: My instance is stuck in a state.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>unresponsive</code>: My instance is unresponsive.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>not-accepting-credentials</code>: My instance is not accepting my
   *                     credentials.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>password-not-available</code>: A password is not available for my
   *                     instance.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>performance-network</code>: My instance is experiencing performance
   *                     problems that I believe are network related.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>performance-instance-store</code>: My instance is experiencing performance
   *                     problems that I believe are related to the instance stores.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>performance-ebs-volume</code>: My instance is experiencing performance
   *                     problems that I believe are related to an EBS volume.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>performance-other</code>: My instance is experiencing performance
   *                     problems.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>other</code>: [explain using the description parameter]</p>
   *             </li>
   *          </ul>
   */
  ReasonCodes: (ReportInstanceReasonCodes | string)[] | undefined;

  /**
   * <p>The time at which the reported instance health state began.</p>
   */
  StartTime?: Date;

  /**
   * <p>The status of all instances listed.</p>
   */
  Status: ReportStatusType | string | undefined;
}

export namespace ReportInstanceStatusRequest {
  export const filterSensitiveLog = (obj: ReportInstanceStatusRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for RequestSpotFleet.</p>
 */
export interface RequestSpotFleetRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *       and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *       Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The configuration for the Spot Fleet request.</p>
   */
  SpotFleetRequestConfig: SpotFleetRequestConfigData | undefined;
}

export namespace RequestSpotFleetRequest {
  export const filterSensitiveLog = (obj: RequestSpotFleetRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of RequestSpotFleet.</p>
 */
export interface RequestSpotFleetResponse {
  /**
   * <p>The ID of the Spot Fleet request.</p>
   */
  SpotFleetRequestId?: string;
}

export namespace RequestSpotFleetResponse {
  export const filterSensitiveLog = (obj: RequestSpotFleetResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the launch specification for an instance.</p>
 */
export interface RequestSpotLaunchSpecification {
  /**
   * <p>One or more security group IDs.</p>
   */
  SecurityGroupIds?: string[];

  /**
   * <p>One or more security groups. When requesting instances in a VPC, you must specify the IDs of the security groups. When requesting instances in EC2-Classic, you can specify the names or the IDs of the security groups.</p>
   */
  SecurityGroups?: string[];

  /**
   * <p>Deprecated.</p>
   */
  AddressingType?: string;

  /**
   * <p>One or more block device mapping entries. You can't specify both a snapshot ID and an encryption value.
   *            This is because only blank volumes can be encrypted on creation. If a snapshot is the basis for a volume,
   *            it is not blank and its encryption status is used for the volume encryption status.</p>
   */
  BlockDeviceMappings?: BlockDeviceMapping[];

  /**
   * <p>Indicates whether the instance is optimized for EBS I/O. This optimization provides dedicated throughput to Amazon EBS and an optimized configuration stack to provide optimal EBS I/O performance. This optimization isn't available with all instance types. Additional usage charges apply when using an EBS Optimized instance.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   */
  EbsOptimized?: boolean;

  /**
   * <p>The IAM instance profile.</p>
   */
  IamInstanceProfile?: IamInstanceProfileSpecification;

  /**
   * <p>The ID of the AMI.</p>
   */
  ImageId?: string;

  /**
   * <p>The instance type.</p>
   */
  InstanceType?: _InstanceType | string;

  /**
   * <p>The ID of the kernel.</p>
   */
  KernelId?: string;

  /**
   * <p>The name of the key pair.</p>
   */
  KeyName?: string;

  /**
   * <p>Indicates whether basic or detailed monitoring is enabled for the instance.</p>
   *          <p>Default: Disabled</p>
   */
  Monitoring?: RunInstancesMonitoringEnabled;

  /**
   * <p>One or more network interfaces. If you specify a network interface, you must specify
   *            subnet IDs and security group IDs using the network interface.</p>
   */
  NetworkInterfaces?: InstanceNetworkInterfaceSpecification[];

  /**
   * <p>The placement information for the instance.</p>
   */
  Placement?: SpotPlacement;

  /**
   * <p>The ID of the RAM disk.</p>
   */
  RamdiskId?: string;

  /**
   * <p>The IDs of the subnets in which to launch the instance. To specify multiple subnets, separate
   *            them using commas; for example, "subnet-1234abcdeexample1, subnet-0987cdef6example2".</p>
   */
  SubnetId?: string;

  /**
   * <p>The Base64-encoded user data for the instance. User data is limited to 16 KB.</p>
   */
  UserData?: string;
}

export namespace RequestSpotLaunchSpecification {
  export const filterSensitiveLog = (obj: RequestSpotLaunchSpecification): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for RequestSpotInstances.</p>
 */
export interface RequestSpotInstancesRequest {
  /**
   * <p>The user-specified name for a logical grouping of requests.</p>
   *          <p>When you specify an Availability Zone group in a Spot Instance request, all Spot Instances in the request are launched in the same Availability Zone. Instance proximity is maintained with this parameter, but the choice of Availability Zone is not. The group applies only to requests for Spot Instances of the same instance type. Any additional Spot Instance requests that are specified with the same Availability Zone group name are launched in that same Availability Zone, as long as at least one instance from the group is still active.</p>
   *          <p>If there is no active instance running in the Availability Zone group that you specify for a new Spot Instance request (all instances are terminated, the request is expired, or the maximum price you specified falls below current Spot price), then Amazon EC2 launches the instance in any Availability Zone where the constraint can be met. Consequently, the subsequent set of Spot Instances could be placed in a different zone from the original request, even if you specified the same Availability Zone group.</p>
   *          <p>Default: Instances are launched in any available Availability Zone.</p>
   */
  AvailabilityZoneGroup?: string;

  /**
   * <p>The required duration for the Spot Instances (also known as Spot blocks), in minutes. This value must be a multiple of 60 (60, 120, 180, 240, 300, or 360).</p>
   *          <p>The duration period starts as soon as your Spot Instance receives its instance ID. At
   *             the end of the duration period, Amazon EC2 marks the Spot Instance for termination and
   *             provides a Spot Instance termination notice, which gives the instance a two-minute
   *             warning before it terminates.</p>
   *          <p>You can't specify an Availability Zone group or a launch group if you specify a
   *             duration.</p>
   *          <p>New accounts or accounts with no previous billing history with AWS are not eligible for
   *             Spot Instances with a defined duration (also known as Spot blocks).</p>
   */
  BlockDurationMinutes?: number;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *        For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Run_Instance_Idempotency.html">How to Ensure Idempotency</a>
   *        in the <i>Amazon EC2 User Guide for Linux Instances</i>.</p>
   */
  ClientToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *        and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *        Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The maximum number of Spot Instances to launch.</p>
   *          <p>Default: 1</p>
   */
  InstanceCount?: number;

  /**
   * <p>The instance launch group. Launch groups are Spot Instances that launch together and terminate together.</p>
   *          <p>Default: Instances are launched and terminated individually</p>
   */
  LaunchGroup?: string;

  /**
   * <p>The launch specification.</p>
   */
  LaunchSpecification?: RequestSpotLaunchSpecification;

  /**
   * <p>The maximum price per hour that you are willing to pay for a Spot Instance. The default is the On-Demand price.</p>
   */
  SpotPrice?: string;

  /**
   * <p>The Spot Instance request type.</p>
   *          <p>Default: <code>one-time</code>
   *          </p>
   */
  Type?: SpotInstanceType | string;

  /**
   * <p>The start date of the request. If this is a one-time request, the request becomes active at this date and time and remains active until all instances launch, the request expires, or the request is canceled. If the request is persistent, the request becomes active at this date and time and remains active until it expires or is canceled.</p>
   *    	     <p>The specified start date and time cannot be equal to the current date and time. You must specify a start date and time that occurs after the current date and time.</p>
   */
  ValidFrom?: Date;

  /**
   * <p>The end date of the request, in UTC format
   *                 (<i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).</p>
   *          <ul>
   *             <li>
   *                 <p>For a persistent request, the request remains active until the <code>ValidUntil</code> date
   *                     and time is reached. Otherwise, the request remains active until you cancel it.
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>For a one-time request, the request remains active until all instances launch,
   *                     the request is canceled, or the <code>ValidUntil</code> date and time is
   *                     reached. By default, the request is valid for 7 days from the date the request
   *                     was created.</p>
   *             </li>
   *          </ul>
   */
  ValidUntil?: Date;

  /**
   * <p>The key-value pair for tagging the Spot Instance request on creation. The value for <code>ResourceType</code> must be <code>spot-instances-request</code>, otherwise the Spot Instance request fails. To tag the Spot Instance request after it has been created, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTags.html">CreateTags</a>.
   *         </p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>The behavior when a Spot Instance is interrupted. The default is <code>terminate</code>.</p>
   */
  InstanceInterruptionBehavior?: InstanceInterruptionBehavior | string;
}

export namespace RequestSpotInstancesRequest {
  export const filterSensitiveLog = (obj: RequestSpotInstancesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of RequestSpotInstances.</p>
 */
export interface RequestSpotInstancesResult {
  /**
   * <p>One or more Spot Instance requests.</p>
   */
  SpotInstanceRequests?: SpotInstanceRequest[];
}

export namespace RequestSpotInstancesResult {
  export const filterSensitiveLog = (obj: RequestSpotInstancesResult): any => ({
    ...obj,
  });
}

export interface ResetEbsDefaultKmsKeyIdRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace ResetEbsDefaultKmsKeyIdRequest {
  export const filterSensitiveLog = (obj: ResetEbsDefaultKmsKeyIdRequest): any => ({
    ...obj,
  });
}

export interface ResetEbsDefaultKmsKeyIdResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the default CMK for EBS encryption by default.</p>
   */
  KmsKeyId?: string;
}

export namespace ResetEbsDefaultKmsKeyIdResult {
  export const filterSensitiveLog = (obj: ResetEbsDefaultKmsKeyIdResult): any => ({
    ...obj,
  });
}

export type ResetFpgaImageAttributeName = "loadPermission";

export interface ResetFpgaImageAttributeRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the AFI.</p>
   */
  FpgaImageId: string | undefined;

  /**
   * <p>The attribute.</p>
   */
  Attribute?: ResetFpgaImageAttributeName | string;
}

export namespace ResetFpgaImageAttributeRequest {
  export const filterSensitiveLog = (obj: ResetFpgaImageAttributeRequest): any => ({
    ...obj,
  });
}

export interface ResetFpgaImageAttributeResult {
  /**
   * <p>Is <code>true</code> if the request succeeds, and an error otherwise.</p>
   */
  Return?: boolean;
}

export namespace ResetFpgaImageAttributeResult {
  export const filterSensitiveLog = (obj: ResetFpgaImageAttributeResult): any => ({
    ...obj,
  });
}

export type ResetImageAttributeName = "launchPermission";

/**
 * <p>Contains the parameters for ResetImageAttribute.</p>
 */
export interface ResetImageAttributeRequest {
  /**
   * <p>The attribute to reset (currently you can only reset the launch permission attribute).</p>
   */
  Attribute: ResetImageAttributeName | string | undefined;

  /**
   * <p>The ID of the AMI.</p>
   */
  ImageId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *        and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *        Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace ResetImageAttributeRequest {
  export const filterSensitiveLog = (obj: ResetImageAttributeRequest): any => ({
    ...obj,
  });
}

export interface ResetInstanceAttributeRequest {
  /**
   * <p>The attribute to reset.</p>
   *         <important>
   *             <p>You can only reset the following attributes: <code>kernel</code> |
   *                     <code>ramdisk</code> | <code>sourceDestCheck</code>. To change an instance
   *                 attribute, use <a>ModifyInstanceAttribute</a>.</p>
   *         </important>
   */
  Attribute: InstanceAttributeName | string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId: string | undefined;
}

export namespace ResetInstanceAttributeRequest {
  export const filterSensitiveLog = (obj: ResetInstanceAttributeRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for ResetNetworkInterfaceAttribute.</p>
 */
export interface ResetNetworkInterfaceAttributeRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *             and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *             Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId: string | undefined;

  /**
   * <p>The source/destination checking attribute. Resets the value to <code>true</code>.</p>
   */
  SourceDestCheck?: string;
}

export namespace ResetNetworkInterfaceAttributeRequest {
  export const filterSensitiveLog = (obj: ResetNetworkInterfaceAttributeRequest): any => ({
    ...obj,
  });
}

export interface ResetSnapshotAttributeRequest {
  /**
   * <p>The attribute to reset. Currently, only the attribute for permission to create volumes can
   *       be reset.</p>
   */
  Attribute: SnapshotAttributeName | string | undefined;

  /**
   * <p>The ID of the snapshot.</p>
   */
  SnapshotId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace ResetSnapshotAttributeRequest {
  export const filterSensitiveLog = (obj: ResetSnapshotAttributeRequest): any => ({
    ...obj,
  });
}

export interface RestoreAddressToClassicRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The Elastic IP address.</p>
   */
  PublicIp: string | undefined;
}

export namespace RestoreAddressToClassicRequest {
  export const filterSensitiveLog = (obj: RestoreAddressToClassicRequest): any => ({
    ...obj,
  });
}

export interface RestoreAddressToClassicResult {
  /**
   * <p>The Elastic IP address.</p>
   */
  PublicIp?: string;

  /**
   * <p>The move status for the IP address.</p>
   */
  Status?: Status | string;
}

export namespace RestoreAddressToClassicResult {
  export const filterSensitiveLog = (obj: RestoreAddressToClassicResult): any => ({
    ...obj,
  });
}

export interface RestoreManagedPrefixListVersionRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the prefix list.</p>
   */
  PrefixListId: string | undefined;

  /**
   * <p>The version to restore.</p>
   */
  PreviousVersion: number | undefined;

  /**
   * <p>The current version number for the prefix list.</p>
   */
  CurrentVersion: number | undefined;
}

export namespace RestoreManagedPrefixListVersionRequest {
  export const filterSensitiveLog = (obj: RestoreManagedPrefixListVersionRequest): any => ({
    ...obj,
  });
}

export interface RestoreManagedPrefixListVersionResult {
  /**
   * <p>Information about the prefix list.</p>
   */
  PrefixList?: ManagedPrefixList;
}

export namespace RestoreManagedPrefixListVersionResult {
  export const filterSensitiveLog = (obj: RestoreManagedPrefixListVersionResult): any => ({
    ...obj,
  });
}

export interface RevokeClientVpnIngressRequest {
  /**
   * <p>The ID of the Client VPN endpoint with which the authorization rule is associated.</p>
   */
  ClientVpnEndpointId: string | undefined;

  /**
   * <p>The IPv4 address range, in CIDR notation, of the network for which access is being removed.</p>
   */
  TargetNetworkCidr: string | undefined;

  /**
   * <p>The ID of the Active Directory group for which to revoke access. </p>
   */
  AccessGroupId?: string;

  /**
   * <p>Indicates whether access should be revoked for all clients.</p>
   */
  RevokeAllGroups?: boolean;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace RevokeClientVpnIngressRequest {
  export const filterSensitiveLog = (obj: RevokeClientVpnIngressRequest): any => ({
    ...obj,
  });
}

export interface RevokeClientVpnIngressResult {
  /**
   * <p>The current state of the authorization rule.</p>
   */
  Status?: ClientVpnAuthorizationRuleStatus;
}

export namespace RevokeClientVpnIngressResult {
  export const filterSensitiveLog = (obj: RevokeClientVpnIngressResult): any => ({
    ...obj,
  });
}

export interface RevokeSecurityGroupEgressRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the security group.</p>
   */
  GroupId: string | undefined;

  /**
   * <p>The sets of IP permissions. You can't specify a destination security group and a CIDR IP address range in the same set of permissions.</p>
   */
  IpPermissions?: IpPermission[];

  /**
   * <p>Not supported. Use a set of IP permissions to specify the CIDR.</p>
   */
  CidrIp?: string;

  /**
   * <p>Not supported. Use a set of IP permissions to specify the port.</p>
   */
  FromPort?: number;

  /**
   * <p>Not supported. Use a set of IP permissions to specify the protocol name or
   *             number.</p>
   */
  IpProtocol?: string;

  /**
   * <p>Not supported. Use a set of IP permissions to specify the port.</p>
   */
  ToPort?: number;

  /**
   * <p>Not supported. Use a set of IP permissions to specify a
   *            destination security group.</p>
   */
  SourceSecurityGroupName?: string;

  /**
   * <p>Not supported. Use a set of IP permissions to specify a destination security
   *             group.</p>
   */
  SourceSecurityGroupOwnerId?: string;
}

export namespace RevokeSecurityGroupEgressRequest {
  export const filterSensitiveLog = (obj: RevokeSecurityGroupEgressRequest): any => ({
    ...obj,
  });
}

export interface RevokeSecurityGroupEgressResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, returns an error.</p>
   */
  Return?: boolean;

  /**
   * <p>The outbound rules that were unknown to the service. In some cases,
   *                 <code>unknownIpPermissionSet</code> might be in a different format from the request
   *             parameter. </p>
   */
  UnknownIpPermissions?: IpPermission[];
}

export namespace RevokeSecurityGroupEgressResult {
  export const filterSensitiveLog = (obj: RevokeSecurityGroupEgressResult): any => ({
    ...obj,
  });
}

export interface RevokeSecurityGroupIngressRequest {
  /**
   * <p>The CIDR IP address range. You can't specify this parameter when specifying a source security group.</p>
   */
  CidrIp?: string;

  /**
   * <p>The start of port range for the TCP and UDP protocols, or an ICMP type number. For the ICMP type number,
   *         use <code>-1</code> to specify all ICMP types.</p>
   */
  FromPort?: number;

  /**
   * <p>The ID of the security group. You must specify either the security group ID or the
   *            security group name in the request. For security groups in a nondefault VPC, you must
   *            specify the security group ID.</p>
   */
  GroupId?: string;

  /**
   * <p>[EC2-Classic, default VPC] The name of the security group. You must specify either the
   *            security group ID or the security group name in the request.</p>
   */
  GroupName?: string;

  /**
   * <p>The sets of IP permissions. You can't specify a source security group and a CIDR IP address range in the same set of permissions.</p>
   */
  IpPermissions?: IpPermission[];

  /**
   * <p>The IP protocol name (<code>tcp</code>, <code>udp</code>, <code>icmp</code>) or number
   *         (see <a href="http://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml">Protocol Numbers</a>).
   *         Use <code>-1</code> to specify all.</p>
   */
  IpProtocol?: string;

  /**
   * <p>[EC2-Classic, default VPC] The name of the source security group. You can't specify this parameter in combination with the following parameters: the CIDR IP address range, the start of the port range, the IP protocol, and the end of the port range. For EC2-VPC, the source security group must be in the same VPC. To revoke a specific rule for an IP protocol and port range, use a set of IP permissions instead.</p>
   */
  SourceSecurityGroupName?: string;

  /**
   * <p>[EC2-Classic] The AWS account ID of the source security group, if the source security group is in a different account. You can't specify this parameter in combination with the following parameters: the CIDR IP address range, the IP protocol, the start of the port range, and the end of the port range. To revoke a specific rule for an IP protocol and port range, use a set of IP permissions instead.</p>
   */
  SourceSecurityGroupOwnerId?: string;

  /**
   * <p>The end of port range for the TCP and UDP protocols, or an ICMP code number. For the ICMP code number,
   *         use <code>-1</code> to specify all ICMP codes for the ICMP type.</p>
   */
  ToPort?: number;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace RevokeSecurityGroupIngressRequest {
  export const filterSensitiveLog = (obj: RevokeSecurityGroupIngressRequest): any => ({
    ...obj,
  });
}

export interface RevokeSecurityGroupIngressResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, returns an error.</p>
   */
  Return?: boolean;

  /**
   * <p>The inbound rules that were unknown to the service. In some cases,
   *                 <code>unknownIpPermissionSet</code> might be in a different format from the request
   *             parameter. </p>
   */
  UnknownIpPermissions?: IpPermission[];
}

export namespace RevokeSecurityGroupIngressResult {
  export const filterSensitiveLog = (obj: RevokeSecurityGroupIngressResult): any => ({
    ...obj,
  });
}

/**
 * <p>The CPU options for the instance. Both the core count and threads per core must be
 *             specified in the request.</p>
 */
export interface CpuOptionsRequest {
  /**
   * <p>The number of CPU cores for the instance.</p>
   */
  CoreCount?: number;

  /**
   * <p>The number of threads per CPU core. To disable multithreading for
   *             the instance, specify a value of <code>1</code>. Otherwise, specify the default value of
   *                 <code>2</code>.</p>
   */
  ThreadsPerCore?: number;
}

export namespace CpuOptionsRequest {
  export const filterSensitiveLog = (obj: CpuOptionsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>
 *            Describes an elastic inference accelerator.
 *         </p>
 */
export interface ElasticInferenceAccelerator {
  /**
   * <p>
   *         	The type of elastic inference accelerator. The possible values are <code>eia1.medium</code>, <code>eia1.large</code>, <code>eia1.xlarge</code>, <code>eia2.medium</code>, <code>eia2.large</code>, and <code>eia2.xlarge</code>.
   *         </p>
   */
  Type: string | undefined;

  /**
   * <p>
   *             The number of elastic inference accelerators to attach to the instance.
   *         </p>
   *          <p>Default: 1</p>
   */
  Count?: number;
}

export namespace ElasticInferenceAccelerator {
  export const filterSensitiveLog = (obj: ElasticInferenceAccelerator): any => ({
    ...obj,
  });
}

/**
 * <p>Indicates whether the instance is enabled for AWS Nitro Enclaves. For more information,
 *     		see <a href="https://docs.aws.amazon.com/enclaves/latest/user/nitro-enclave.html">
 *     			What is AWS Nitro Enclaves?</a> in the <i>AWS Nitro Enclaves User Guide</i>.</p>
 */
export interface EnclaveOptionsRequest {
  /**
   * <p>To enable the instance for AWS Nitro Enclaves, set this parameter to <code>true</code>.</p>
   */
  Enabled?: boolean;
}

export namespace EnclaveOptionsRequest {
  export const filterSensitiveLog = (obj: EnclaveOptionsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Indicates whether your instance is configured for hibernation. This parameter is valid
 *             only if the instance meets the <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html#hibernating-prerequisites">hibernation
 *                 prerequisites</a>. For
 *             more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html">Hibernate your instance</a> in the
 *                 <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 */
export interface HibernationOptionsRequest {
  /**
   * <p>If you set this parameter to <code>true</code>, your instance is enabled for
   *             hibernation.</p>
   *         <p>Default: <code>false</code>
   *          </p>
   */
  Configured?: boolean;
}

export namespace HibernationOptionsRequest {
  export const filterSensitiveLog = (obj: HibernationOptionsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The options for Spot Instances.</p>
 */
export interface SpotMarketOptions {
  /**
   * <p>The maximum hourly price you're willing to pay for the Spot Instances. The default is
   *             the On-Demand price.</p>
   */
  MaxPrice?: string;

  /**
   * <p>The Spot Instance request type. For <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RunInstances">RunInstances</a>, persistent Spot
   *             Instance requests are only supported when <b>InstanceInterruptionBehavior</b> is set to either <code>hibernate</code> or
   *                 <code>stop</code>.</p>
   */
  SpotInstanceType?: SpotInstanceType | string;

  /**
   * <p>The required duration for the Spot Instances (also known as Spot blocks), in minutes.
   *             This value must be a multiple of 60 (60, 120, 180, 240, 300, or 360).</p>
   *         <p>The duration period starts as soon as your Spot Instance receives its instance ID. At
   *             the end of the duration period, Amazon EC2 marks the Spot Instance for termination and
   *             provides a Spot Instance termination notice, which gives the instance a two-minute
   *             warning before it terminates.</p>
   *         <p>You can't specify an Availability Zone group or a launch group if you specify a
   *             duration.</p>
   *         <p>New accounts or accounts with no previous billing history with AWS are not eligible
   *             for Spot Instances with a defined duration (also known as Spot blocks).</p>
   */
  BlockDurationMinutes?: number;

  /**
   * <p>The end date of the request, in UTC format
   *                 (<i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).
   *             Supported only for persistent requests.</p>
   *         <ul>
   *             <li>
   *                 <p>For a persistent request, the request remains active until the
   *                         <code>ValidUntil</code> date and time is reached. Otherwise, the request
   *                     remains active until you cancel it.</p>
   *             </li>
   *             <li>
   *                 <p>For a one-time request, <code>ValidUntil</code> is not supported. The request
   *                     remains active until all instances launch or you cancel the request.</p>
   *             </li>
   *          </ul>
   */
  ValidUntil?: Date;

  /**
   * <p>The behavior when a Spot Instance is interrupted. The default is
   *                 <code>terminate</code>.</p>
   */
  InstanceInterruptionBehavior?: InstanceInterruptionBehavior | string;
}

export namespace SpotMarketOptions {
  export const filterSensitiveLog = (obj: SpotMarketOptions): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the market (purchasing) option for the instances.</p>
 */
export interface InstanceMarketOptionsRequest {
  /**
   * <p>The market type.</p>
   */
  MarketType?: MarketType | string;

  /**
   * <p>The options for Spot Instances.</p>
   */
  SpotOptions?: SpotMarketOptions;
}

export namespace InstanceMarketOptionsRequest {
  export const filterSensitiveLog = (obj: InstanceMarketOptionsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The launch template to use. You must specify either the launch template ID or
 *             launch template name in the request, but not both.</p>
 */
export interface LaunchTemplateSpecification {
  /**
   * <p>The ID of the launch template.</p>
   */
  LaunchTemplateId?: string;

  /**
   * <p>The name of the launch template.</p>
   */
  LaunchTemplateName?: string;

  /**
   * <p>The version number of the launch template.</p>
   *         <p>Default: The default version for the launch template.</p>
   */
  Version?: string;
}

export namespace LaunchTemplateSpecification {
  export const filterSensitiveLog = (obj: LaunchTemplateSpecification): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a license configuration.</p>
 */
export interface LicenseConfigurationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the license configuration.</p>
   */
  LicenseConfigurationArn?: string;
}

export namespace LicenseConfigurationRequest {
  export const filterSensitiveLog = (obj: LicenseConfigurationRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The metadata options for the instance.</p>
 */
export interface InstanceMetadataOptionsRequest {
  /**
   * <p>The state of token usage for your instance metadata requests. If the parameter is not
   *             specified in the request, the default state is <code>optional</code>.</p>
   *         <p>If the state is <code>optional</code>, you can choose to retrieve instance metadata
   *             with or without a signed token header on your request. If you retrieve the IAM role
   *             credentials without a token, the version 1.0 role credentials are returned. If you
   *             retrieve the IAM role credentials using a valid signed token, the version 2.0 role
   *             credentials are returned.</p>
   *         <p>If the state is <code>required</code>, you must send a signed token header with any
   *             instance metadata retrieval requests. In this state, retrieving the IAM role credentials
   *             always returns the version 2.0 credentials; the version 1.0 credentials are not
   *             available.</p>
   */
  HttpTokens?: HttpTokensState | string;

  /**
   * <p>The desired HTTP PUT response hop limit for instance metadata requests. The larger the
   *             number, the further instance metadata requests can travel.</p>
   *         <p>Default: 1</p>
   *         <p>Possible values: Integers from 1 to 64</p>
   */
  HttpPutResponseHopLimit?: number;

  /**
   * <p>This parameter enables or disables the HTTP metadata endpoint on your instances. If
   *             the parameter is not specified, the default state is <code>enabled</code>.</p>
   *         <note>
   *             <p>If you specify a value of <code>disabled</code>, you will not be able to access your
   *                 instance metadata.</p>
   *         </note>
   */
  HttpEndpoint?: InstanceMetadataEndpointState | string;
}

export namespace InstanceMetadataOptionsRequest {
  export const filterSensitiveLog = (obj: InstanceMetadataOptionsRequest): any => ({
    ...obj,
  });
}

export interface RunInstancesRequest {
  /**
   * <p>The block device mapping entries.</p>
   */
  BlockDeviceMappings?: BlockDeviceMapping[];

  /**
   * <p>The ID of the AMI. An AMI ID is required to launch an instance and must be
   *         	specified here or in a launch template.</p>
   */
  ImageId?: string;

  /**
   * <p>The instance type. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html">Instance types</a> in the
   *                 <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *         <p>Default: <code>m1.small</code>
   *          </p>
   */
  InstanceType?: _InstanceType | string;

  /**
   * <p>[EC2-VPC] The number of IPv6 addresses to associate with the primary network
   *             interface. Amazon EC2 chooses the IPv6 addresses from the range of your subnet. You
   *             cannot specify this option and the option to assign specific IPv6 addresses in the same
   *             request. You can specify this option if you've specified a minimum number of instances
   *             to launch.</p>
   *         <p>You cannot specify this option and the network interfaces option in the same
   *             request.</p>
   */
  Ipv6AddressCount?: number;

  /**
   * <p>[EC2-VPC] The IPv6 addresses from the range of the subnet to associate with the
   *             primary network interface. You cannot specify this option and the option to assign a
   *             number of IPv6 addresses in the same request. You cannot specify this option if you've
   *             specified a minimum number of instances to launch.</p>
   *         <p>You cannot specify this option and the network interfaces option in the same
   *             request.</p>
   */
  Ipv6Addresses?: InstanceIpv6Address[];

  /**
   * <p>The ID of the kernel.</p>
   *         <important>
   *             <p>We recommend that you use PV-GRUB instead of kernels and RAM disks. For more
   *                 information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/UserProvidedkernels.html"> PV-GRUB</a> in the
   *                     <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *         </important>
   */
  KernelId?: string;

  /**
   * <p>The name of the key pair. You can create a key pair using <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateKeyPair.html">CreateKeyPair</a> or
   *                 <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ImportKeyPair.html">ImportKeyPair</a>.</p>
   *         <important>
   *             <p>If you do not specify a key pair, you can't connect to the instance unless you
   *                 choose an AMI that is configured to allow users another way to log in.</p>
   *         </important>
   */
  KeyName?: string;

  /**
   * <p>The maximum number of instances to launch. If you specify more instances than Amazon
   *             EC2 can launch in the target Availability Zone, Amazon EC2 launches the largest possible
   *             number of instances above <code>MinCount</code>.</p>
   *         <p>Constraints: Between 1 and the maximum number you're allowed for the specified
   *             instance type. For more information about the default limits, and how to request an
   *             increase, see <a href="http://aws.amazon.com/ec2/faqs/#How_many_instances_can_I_run_in_Amazon_EC2">How many instances can I
   *                 run in Amazon EC2</a> in the Amazon EC2 FAQ.</p>
   */
  MaxCount: number | undefined;

  /**
   * <p>The minimum number of instances to launch. If you specify a minimum that is more
   *             instances than Amazon EC2 can launch in the target Availability Zone, Amazon EC2
   *             launches no instances.</p>
   *         <p>Constraints: Between 1 and the maximum number you're allowed for the specified
   *             instance type. For more information about the default limits, and how to request an
   *             increase, see <a href="http://aws.amazon.com/ec2/faqs/#How_many_instances_can_I_run_in_Amazon_EC2">How many instances can I
   *                 run in Amazon EC2</a> in the Amazon EC2 General FAQ.</p>
   */
  MinCount: number | undefined;

  /**
   * <p>Specifies whether detailed monitoring is enabled for the instance.</p>
   */
  Monitoring?: RunInstancesMonitoringEnabled;

  /**
   * <p>The placement for the instance.</p>
   */
  Placement?: Placement;

  /**
   * <p>The ID of the RAM disk to select. Some kernels require additional drivers at launch.
   *             Check the kernel requirements for information about whether you need to specify a RAM
   *             disk. To find kernel requirements, go to the AWS Resource Center and search for the
   *             kernel ID.</p>
   *         <important>
   *             <p>We recommend that you use PV-GRUB instead of kernels and RAM disks. For more
   *                 information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/UserProvidedkernels.html"> PV-GRUB</a> in the
   *                     <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *         </important>
   */
  RamdiskId?: string;

  /**
   * <p>The IDs of the security groups. You can create a security group using
   * 	<a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateSecurityGroup.html">CreateSecurityGroup</a>.</p>
   *         <p>If you specify a network interface, you must specify any security groups as part of the network interface.</p>
   */
  SecurityGroupIds?: string[];

  /**
   * <p>[EC2-Classic, default VPC] The names of the security groups. For a nondefault VPC, you
   *             must use security group IDs instead.</p>
   *         <p>If you specify a network interface, you must specify any security groups as part of
   *             the network interface.</p>
   *         <p>Default: Amazon EC2 uses the default security group.</p>
   */
  SecurityGroups?: string[];

  /**
   * <p>[EC2-VPC] The ID of the subnet to launch the instance into.</p>
   *         <p>If you specify a network interface, you must specify any subnets as part of the network interface.</p>
   */
  SubnetId?: string;

  /**
   * <p>The user data to make available to the instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/user-data.html">Running commands
   *                 on your Linux instance at launch</a> (Linux) and <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/ec2-instance-metadata.html#instancedata-add-user-data">Adding User Data</a> (Windows). If you are using a command line tool,
   *             base64-encoding is performed for you, and you can load the text from a file. Otherwise,
   *             you must provide base64-encoded text. User data is limited to 16 KB.</p>
   */
  UserData?: string;

  /**
   * <p>Reserved.</p>
   */
  AdditionalInfo?: string;

  /**
   * <p>Unique, case-sensitive identifier you provide to ensure the idempotency of the
   *             request. If you do not specify a client token, a randomly generated token is used for the
   *             request to ensure idempotency.</p>
   *
   *             <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring
   *                 Idempotency</a>.</p>
   *         <p>Constraints: Maximum 64 ASCII characters</p>
   */
  ClientToken?: string;

  /**
   * <p>If you set this parameter to <code>true</code>, you can't terminate the instance using
   *             the Amazon EC2 console, CLI, or API; otherwise, you can. To change this attribute after launch,
   *             use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyInstanceAttribute.html">ModifyInstanceAttribute</a>.
   *             Alternatively, if you set <code>InstanceInitiatedShutdownBehavior</code> to
   *                 <code>terminate</code>, you can terminate the instance by running the shutdown
   *             command from the instance.</p>
   *         <p>Default: <code>false</code>
   *         </p>
   */
  DisableApiTermination?: boolean;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Indicates whether the instance is optimized for Amazon EBS I/O. This optimization
   *             provides dedicated throughput to Amazon EBS and an optimized configuration stack to
   *             provide optimal Amazon EBS I/O performance. This optimization isn't available with all
   *             instance types. Additional usage charges apply when using an EBS-optimized
   *             instance.</p>
   *         <p>Default: <code>false</code>
   *         </p>
   */
  EbsOptimized?: boolean;

  /**
   * <p>The IAM instance profile.</p>
   */
  IamInstanceProfile?: IamInstanceProfileSpecification;

  /**
   * <p>Indicates whether an instance stops or terminates when you initiate shutdown from the
   *             instance (using the operating system command for system shutdown).</p>
   *         <p>Default: <code>stop</code>
   *         </p>
   */
  InstanceInitiatedShutdownBehavior?: ShutdownBehavior | string;

  /**
   * <p>The network interfaces to associate with the instance. If you specify a network interface,
   *             you must specify any security groups and subnets as part of the network interface.</p>
   */
  NetworkInterfaces?: InstanceNetworkInterfaceSpecification[];

  /**
   * <p>[EC2-VPC] The primary IPv4 address. You must specify a value from the IPv4 address
   *             range of the subnet.</p>
   *         <p>Only one private IP address can be designated as primary. You can't specify this
   *             option if you've specified the option to designate a private IP address as the primary
   *             IP address in a network interface specification. You cannot specify this option if
   *             you're launching more than one instance in the request.</p>
   *         <p>You cannot specify this option and the network interfaces option in the same
   *             request.</p>
   */
  PrivateIpAddress?: string;

  /**
   * <p>An elastic GPU to associate with the instance. An Elastic GPU is a GPU resource that
   *             you can attach to your Windows instance to accelerate the graphics performance of your
   *             applications. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/elastic-graphics.html"> Amazon EC2 Elastic
   *                 GPUs</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  ElasticGpuSpecification?: ElasticGpuSpecification[];

  /**
   * <p>An elastic inference accelerator to associate with the instance. Elastic inference
   *             accelerators are a resource you can attach to your Amazon EC2 instances to accelerate
   *             your Deep Learning (DL) inference workloads.</p>
   *         <p>You cannot specify accelerators from different generations in the same request.</p>
   */
  ElasticInferenceAccelerators?: ElasticInferenceAccelerator[];

  /**
   * <p>The tags to apply to the resources during launch. You can only tag instances and
   *             volumes on launch. The specified tags are applied to all instances or volumes that are
   *             created during launch. To tag a resource after it has been created, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTags.html">CreateTags</a>.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>The launch template to use to launch the instances. Any parameters that you specify in
   *                 <a>RunInstances</a> override the same parameters in the launch template.
   *             You can specify either the name or ID of a launch template, but not both.</p>
   */
  LaunchTemplate?: LaunchTemplateSpecification;

  /**
   * <p>The market (purchasing) option for the instances.</p>
   *         <p>For <a>RunInstances</a>, persistent Spot Instance requests are
   *             only supported when <b>InstanceInterruptionBehavior</b> is set
   *             to either <code>hibernate</code> or <code>stop</code>.</p>
   */
  InstanceMarketOptions?: InstanceMarketOptionsRequest;

  /**
   * <p>The credit option for CPU usage of the burstable performance instance. Valid values
   *             are <code>standard</code> and <code>unlimited</code>. To change this attribute after
   *             launch, use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyInstanceCreditSpecification.html">
   *                 ModifyInstanceCreditSpecification</a>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-performance-instances.html">Burstable
   *                 performance instances</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *         <p>Default: <code>standard</code> (T2 instances) or <code>unlimited</code> (T3/T3a
   *             instances)</p>
   */
  CreditSpecification?: CreditSpecificationRequest;

  /**
   * <p>The CPU options for the instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-optimize-cpu.html">Optimizing CPU options</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  CpuOptions?: CpuOptionsRequest;

  /**
   * <p>Information about the Capacity Reservation targeting option. If you do not specify this parameter, the
   *             instance's Capacity Reservation preference defaults to <code>open</code>, which enables
   *             it to run in any open Capacity Reservation that has matching attributes (instance type,
   *             platform, Availability Zone).</p>
   */
  CapacityReservationSpecification?: CapacityReservationSpecification;

  /**
   * <p>Indicates whether an instance is enabled for hibernation. For more information, see
   *                 <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html">Hibernate
   *                 your instance</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *     	    <p>You can't enable hibernation and AWS Nitro Enclaves on the same instance.</p>
   */
  HibernationOptions?: HibernationOptionsRequest;

  /**
   * <p>The license configurations.</p>
   */
  LicenseSpecifications?: LicenseConfigurationRequest[];

  /**
   * <p>The metadata options for the instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html">Instance metadata and user data</a>.</p>
   */
  MetadataOptions?: InstanceMetadataOptionsRequest;

  /**
   * <p>Indicates whether the instance is enabled for AWS Nitro Enclaves. For more information,
   * 			see <a href="https://docs.aws.amazon.com/enclaves/latest/user/nitro-enclave.html">
   * 				What is AWS Nitro Enclaves?</a> in the <i>AWS Nitro Enclaves User Guide</i>.</p>
   * 		       <p>You can't enable AWS Nitro Enclaves and hibernation on the same instance.</p>
   */
  EnclaveOptions?: EnclaveOptionsRequest;
}

export namespace RunInstancesRequest {
  export const filterSensitiveLog = (obj: RunInstancesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an EBS volume for a Scheduled Instance.</p>
 */
export interface ScheduledInstancesEbs {
  /**
   * <p>Indicates whether the volume is deleted on instance termination.</p>
   */
  DeleteOnTermination?: boolean;

  /**
   * <p>Indicates whether the volume is encrypted. You can attached encrypted volumes only to instances that support them.</p>
   */
  Encrypted?: boolean;

  /**
   * <p>The number of I/O operations per second (IOPS) to provision for an <code>io1</code> or <code>io2</code> volume, with a maximum
   *    		ratio of 50 IOPS/GiB for <code>io1</code>, and 500 IOPS/GiB for <code>io2</code>. Range is 100 to 64,000 IOPS for
   *    		volumes in most Regions. Maximum IOPS of 64,000 is guaranteed only on
   *    		<a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html#ec2-nitro-instances">Nitro-based instances</a>. Other instance families guarantee performance up to
   *    		32,000 IOPS. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSVolumeTypes.html">Amazon EBS Volume Types</a> in the
   *    		<i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *    	     <p>This parameter is valid only for Provisioned IOPS SSD (<code>io1</code> and <code>io2</code>) volumes.</p>
   */
  Iops?: number;

  /**
   * <p>The ID of the snapshot.</p>
   */
  SnapshotId?: string;

  /**
   * <p>The size of the volume, in GiB.</p>
   *          <p>Default: If you're creating the volume from a snapshot and don't specify a volume size, the default is the snapshot size.</p>
   */
  VolumeSize?: number;

  /**
   * <p>The volume type. <code>gp2</code> for General Purpose SSD, <code>io1</code> or <code> io2</code> for Provisioned IOPS SSD, Throughput Optimized HDD
   *          for <code>st1</code>, Cold HDD for <code>sc1</code>, or <code>standard</code> for
   *          Magnetic.</p>
   *          <p>Default: <code>gp2</code>
   *          </p>
   */
  VolumeType?: string;
}

export namespace ScheduledInstancesEbs {
  export const filterSensitiveLog = (obj: ScheduledInstancesEbs): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a block device mapping for a Scheduled Instance.</p>
 */
export interface ScheduledInstancesBlockDeviceMapping {
  /**
   * <p>The device name (for example, <code>/dev/sdh</code> or <code>xvdh</code>).</p>
   */
  DeviceName?: string;

  /**
   * <p>Parameters used to set up EBS volumes automatically when the instance is launched.</p>
   */
  Ebs?: ScheduledInstancesEbs;

  /**
   * <p>Suppresses the specified device included in the block device mapping of the AMI.</p>
   */
  NoDevice?: string;

  /**
   * <p>The virtual device name (<code>ephemeral</code>N). Instance store volumes are numbered
   *          starting from 0. An instance type with two available instance store volumes can specify mappings
   *          for <code>ephemeral0</code> and <code>ephemeral1</code>. The number of available instance store
   *          volumes depends on the instance type. After you connect to the instance, you must mount the
   *          volume.</p>
   *          <p>Constraints: For M3 instances, you must specify instance store volumes in the block device mapping for the instance. When you launch an M3 instance, we ignore any instance store volumes specified in the block device mapping for the AMI.</p>
   */
  VirtualName?: string;
}

export namespace ScheduledInstancesBlockDeviceMapping {
  export const filterSensitiveLog = (obj: ScheduledInstancesBlockDeviceMapping): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an IAM instance profile for a Scheduled Instance.</p>
 */
export interface ScheduledInstancesIamInstanceProfile {
  /**
   * <p>The Amazon Resource Name (ARN).</p>
   */
  Arn?: string;

  /**
   * <p>The name.</p>
   */
  Name?: string;
}

export namespace ScheduledInstancesIamInstanceProfile {
  export const filterSensitiveLog = (obj: ScheduledInstancesIamInstanceProfile): any => ({
    ...obj,
  });
}

/**
 * <p>Describes whether monitoring is enabled for a Scheduled Instance.</p>
 */
export interface ScheduledInstancesMonitoring {
  /**
   * <p>Indicates whether monitoring is enabled.</p>
   */
  Enabled?: boolean;
}

export namespace ScheduledInstancesMonitoring {
  export const filterSensitiveLog = (obj: ScheduledInstancesMonitoring): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an IPv6 address.</p>
 */
export interface ScheduledInstancesIpv6Address {
  /**
   * <p>The IPv6 address.</p>
   */
  Ipv6Address?: string;
}

export namespace ScheduledInstancesIpv6Address {
  export const filterSensitiveLog = (obj: ScheduledInstancesIpv6Address): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a private IPv4 address for a Scheduled Instance.</p>
 */
export interface ScheduledInstancesPrivateIpAddressConfig {
  /**
   * <p>Indicates whether this is a primary IPv4 address. Otherwise, this is a secondary IPv4 address.</p>
   */
  Primary?: boolean;

  /**
   * <p>The IPv4 address.</p>
   */
  PrivateIpAddress?: string;
}

export namespace ScheduledInstancesPrivateIpAddressConfig {
  export const filterSensitiveLog = (obj: ScheduledInstancesPrivateIpAddressConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a network interface for a Scheduled Instance.</p>
 */
export interface ScheduledInstancesNetworkInterface {
  /**
   * <p>Indicates whether to assign a public IPv4 address to instances launched in a VPC. The
   *          public IPv4 address can only be assigned to a network interface for eth0, and can only be
   *          assigned to a new network interface, not an existing one. You cannot specify more than one
   *          network interface in the request. If launching into a default subnet, the default value is
   *          <code>true</code>.</p>
   */
  AssociatePublicIpAddress?: boolean;

  /**
   * <p>Indicates whether to delete the interface when the instance is terminated.</p>
   */
  DeleteOnTermination?: boolean;

  /**
   * <p>The description.</p>
   */
  Description?: string;

  /**
   * <p>The index of the device for the network interface attachment.</p>
   */
  DeviceIndex?: number;

  /**
   * <p>The IDs of the security groups.</p>
   */
  Groups?: string[];

  /**
   * <p>The number of IPv6 addresses to assign to the network interface. The IPv6 addresses are automatically selected from the subnet range.</p>
   */
  Ipv6AddressCount?: number;

  /**
   * <p>The specific IPv6 addresses from the subnet range.</p>
   */
  Ipv6Addresses?: ScheduledInstancesIpv6Address[];

  /**
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * <p>The IPv4 address of the network interface within the subnet.</p>
   */
  PrivateIpAddress?: string;

  /**
   * <p>The private IPv4 addresses.</p>
   */
  PrivateIpAddressConfigs?: ScheduledInstancesPrivateIpAddressConfig[];

  /**
   * <p>The number of secondary private IPv4 addresses.</p>
   */
  SecondaryPrivateIpAddressCount?: number;

  /**
   * <p>The ID of the subnet.</p>
   */
  SubnetId?: string;
}

export namespace ScheduledInstancesNetworkInterface {
  export const filterSensitiveLog = (obj: ScheduledInstancesNetworkInterface): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the placement for a Scheduled Instance.</p>
 */
export interface ScheduledInstancesPlacement {
  /**
   * <p>The Availability Zone.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The name of the placement group.</p>
   */
  GroupName?: string;
}

export namespace ScheduledInstancesPlacement {
  export const filterSensitiveLog = (obj: ScheduledInstancesPlacement): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the launch specification for a Scheduled Instance.</p>
 *          <p>If you are launching the Scheduled Instance in EC2-VPC, you must specify the ID of the subnet.
 *           You can specify the subnet using either <code>SubnetId</code> or <code>NetworkInterface</code>.</p>
 */
export interface ScheduledInstancesLaunchSpecification {
  /**
   * <p>The block device mapping entries.</p>
   */
  BlockDeviceMappings?: ScheduledInstancesBlockDeviceMapping[];

  /**
   * <p>Indicates whether the instances are optimized for EBS I/O. This optimization provides dedicated throughput to Amazon EBS and an optimized configuration stack to provide optimal EBS I/O performance. This optimization isn't available with all instance types. Additional usage charges apply when using an EBS-optimized instance.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   */
  EbsOptimized?: boolean;

  /**
   * <p>The IAM instance profile.</p>
   */
  IamInstanceProfile?: ScheduledInstancesIamInstanceProfile;

  /**
   * <p>The ID of the Amazon Machine Image (AMI).</p>
   */
  ImageId: string | undefined;

  /**
   * <p>The instance type.</p>
   */
  InstanceType?: string;

  /**
   * <p>The ID of the kernel.</p>
   */
  KernelId?: string;

  /**
   * <p>The name of the key pair.</p>
   */
  KeyName?: string;

  /**
   * <p>Enable or disable monitoring for the instances.</p>
   */
  Monitoring?: ScheduledInstancesMonitoring;

  /**
   * <p>The network interfaces.</p>
   */
  NetworkInterfaces?: ScheduledInstancesNetworkInterface[];

  /**
   * <p>The placement information.</p>
   */
  Placement?: ScheduledInstancesPlacement;

  /**
   * <p>The ID of the RAM disk.</p>
   */
  RamdiskId?: string;

  /**
   * <p>The IDs of the security groups.</p>
   */
  SecurityGroupIds?: string[];

  /**
   * <p>The ID of the subnet in which to launch the instances.</p>
   */
  SubnetId?: string;

  /**
   * <p>The base64-encoded MIME user data.</p>
   */
  UserData?: string;
}

export namespace ScheduledInstancesLaunchSpecification {
  export const filterSensitiveLog = (obj: ScheduledInstancesLaunchSpecification): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for RunScheduledInstances.</p>
 */
export interface RunScheduledInstancesRequest {
  /**
   * <p>Unique, case-sensitive identifier that ensures the idempotency of the request.
   *          For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The number of instances.</p>
   *          <p>Default: 1</p>
   */
  InstanceCount?: number;

  /**
   * <p>The launch specification. You must match the instance type, Availability Zone,
   *          network, and platform of the schedule that you purchased.</p>
   */
  LaunchSpecification: ScheduledInstancesLaunchSpecification | undefined;

  /**
   * <p>The Scheduled Instance ID.</p>
   */
  ScheduledInstanceId: string | undefined;
}

export namespace RunScheduledInstancesRequest {
  export const filterSensitiveLog = (obj: RunScheduledInstancesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of RunScheduledInstances.</p>
 */
export interface RunScheduledInstancesResult {
  /**
   * <p>The IDs of the newly launched instances.</p>
   */
  InstanceIdSet?: string[];
}

export namespace RunScheduledInstancesResult {
  export const filterSensitiveLog = (obj: RunScheduledInstancesResult): any => ({
    ...obj,
  });
}

export interface SearchLocalGatewayRoutesRequest {
  /**
   * <p>The ID of the local gateway route table.</p>
   */
  LocalGatewayRouteTableId: string | undefined;

  /**
   * <p>One or more filters.</p>
   */
  Filters: Filter[] | undefined;

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace SearchLocalGatewayRoutesRequest {
  export const filterSensitiveLog = (obj: SearchLocalGatewayRoutesRequest): any => ({
    ...obj,
  });
}

export interface SearchLocalGatewayRoutesResult {
  /**
   * <p>Information about the routes.</p>
   */
  Routes?: LocalGatewayRoute[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace SearchLocalGatewayRoutesResult {
  export const filterSensitiveLog = (obj: SearchLocalGatewayRoutesResult): any => ({
    ...obj,
  });
}

export interface SearchTransitGatewayMulticastGroupsRequest {
  /**
   * <p>The ID of the transit gateway multicast domain.</p>
   */
  TransitGatewayMulticastDomainId?: string;

  /**
   * <p>One or more filters. The possible values are:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>group-ip-address</code> - The IP address of the  transit gateway multicast group.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>is-group-member</code> - The resource is a group member. Valid values are <code>true</code> | <code>false</code>.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>is-group-source</code> - The resource is a group source. Valid values are <code>true</code> | <code>false</code>.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>member-type</code> - The member type. Valid values are <code>igmp</code> | <code>static</code>.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>resource-id</code> - The ID of the resource.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>resource-type</code> - The type of resource. Valid values are <code>vpc</code> | <code>vpn</code> | <code>direct-connect-gateway</code> | <code>tgw-peering</code>.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>source-type</code> - The source type. Valid values are <code>igmp</code> | <code>static</code>.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>state</code> - The state of the subnet association. Valid values are <code>associated</code> | <code>associated</code> | <code>disassociated</code> | <code>disassociating</code>.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>subnet-id</code> - The ID of the subnet.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>transit-gateway-attachment-id</code> - The id of the transit gateway attachment.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace SearchTransitGatewayMulticastGroupsRequest {
  export const filterSensitiveLog = (obj: SearchTransitGatewayMulticastGroupsRequest): any => ({
    ...obj,
  });
}

export type MembershipType = "igmp" | "static";

/**
 * <p>Describes the  transit gateway multicast group resources.</p>
 */
export interface TransitGatewayMulticastGroup {
  /**
   * <p>The IP address assigned to the  transit gateway multicast group.</p>
   */
  GroupIpAddress?: string;

  /**
   * <p>The ID of the transit gateway attachment.</p>
   */
  TransitGatewayAttachmentId?: string;

  /**
   * <p>The ID of the subnet.</p>
   */
  SubnetId?: string;

  /**
   * <p>The ID of the resource.</p>
   */
  ResourceId?: string;

  /**
   * <p>The type of resource, for example a VPC attachment.</p>
   */
  ResourceType?: TransitGatewayAttachmentResourceType | string;

  /**
   * <p>The ID of the transit gateway attachment.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * <p>Indicates that the resource is a  transit gateway multicast group member.</p>
   */
  GroupMember?: boolean;

  /**
   * <p>Indicates that the resource is a  transit gateway multicast group member.</p>
   */
  GroupSource?: boolean;

  /**
   * <p>The member type (for example, <code>static</code>).</p>
   */
  MemberType?: MembershipType | string;

  /**
   * <p>The source type.</p>
   */
  SourceType?: MembershipType | string;
}

export namespace TransitGatewayMulticastGroup {
  export const filterSensitiveLog = (obj: TransitGatewayMulticastGroup): any => ({
    ...obj,
  });
}

export interface SearchTransitGatewayMulticastGroupsResult {
  /**
   * <p>Information about the  transit gateway multicast group.</p>
   */
  MulticastGroups?: TransitGatewayMulticastGroup[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace SearchTransitGatewayMulticastGroupsResult {
  export const filterSensitiveLog = (obj: SearchTransitGatewayMulticastGroupsResult): any => ({
    ...obj,
  });
}

export interface SearchTransitGatewayRoutesRequest {
  /**
   * <p>The ID of the transit gateway route table.</p>
   */
  TransitGatewayRouteTableId: string | undefined;

  /**
   * <p>One or more filters. The possible values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>attachment.transit-gateway-attachment-id</code>- The id of the transit gateway attachment.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>attachment.resource-id</code> - The resource id of the transit gateway attachment.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>attachment.resource-type</code> - The attachment resource type. Valid values are <code>vpc</code> | <code>vpn</code> | <code>direct-connect-gateway</code> |
   *                 <code>peering</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>prefix-list-id</code> - The ID of the prefix list.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>route-search.exact-match</code> - The exact match of the specified filter.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>route-search.longest-prefix-match</code> - The longest prefix that matches the route.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>route-search.subnet-of-match</code> - The routes with a subnet that match the specified CIDR filter.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>route-search.supernet-of-match</code> - The routes with a CIDR that encompass the CIDR filter. For example, if you have 10.0.1.0/29 and 10.0.1.0/31 routes in your route table and you specify supernet-of-match as 10.0.1.0/30, then the result returns 10.0.1.0/29.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the route (<code>active</code> | <code>blackhole</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>type</code> - The type of route (<code>propagated</code> |
   *                   <code>static</code>).</p>
   *             </li>
   *          </ul>
   */
  Filters: Filter[] | undefined;

  /**
   * <p>The maximum number of routes to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace SearchTransitGatewayRoutesRequest {
  export const filterSensitiveLog = (obj: SearchTransitGatewayRoutesRequest): any => ({
    ...obj,
  });
}

export interface SearchTransitGatewayRoutesResult {
  /**
   * <p>Information about the routes.</p>
   */
  Routes?: TransitGatewayRoute[];

  /**
   * <p>Indicates whether there are additional routes available.</p>
   */
  AdditionalRoutesAvailable?: boolean;
}

export namespace SearchTransitGatewayRoutesResult {
  export const filterSensitiveLog = (obj: SearchTransitGatewayRoutesResult): any => ({
    ...obj,
  });
}

export interface SendDiagnosticInterruptRequest {
  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace SendDiagnosticInterruptRequest {
  export const filterSensitiveLog = (obj: SendDiagnosticInterruptRequest): any => ({
    ...obj,
  });
}

export interface StartInstancesRequest {
  /**
   * <p>The IDs of the instances.</p>
   */
  InstanceIds: string[] | undefined;

  /**
   * <p>Reserved.</p>
   */
  AdditionalInfo?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace StartInstancesRequest {
  export const filterSensitiveLog = (obj: StartInstancesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an instance state change.</p>
 */
export interface InstanceStateChange {
  /**
   * <p>The current state of the instance.</p>
   */
  CurrentState?: InstanceState;

  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId?: string;

  /**
   * <p>The previous state of the instance.</p>
   */
  PreviousState?: InstanceState;
}

export namespace InstanceStateChange {
  export const filterSensitiveLog = (obj: InstanceStateChange): any => ({
    ...obj,
  });
}

export interface StartInstancesResult {
  /**
   * <p>Information about the started instances.</p>
   */
  StartingInstances?: InstanceStateChange[];
}

export namespace StartInstancesResult {
  export const filterSensitiveLog = (obj: StartInstancesResult): any => ({
    ...obj,
  });
}

export interface StartVpcEndpointServicePrivateDnsVerificationRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the endpoint service.</p>
   */
  ServiceId: string | undefined;
}

export namespace StartVpcEndpointServicePrivateDnsVerificationRequest {
  export const filterSensitiveLog = (obj: StartVpcEndpointServicePrivateDnsVerificationRequest): any => ({
    ...obj,
  });
}

export interface StartVpcEndpointServicePrivateDnsVerificationResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  ReturnValue?: boolean;
}

export namespace StartVpcEndpointServicePrivateDnsVerificationResult {
  export const filterSensitiveLog = (obj: StartVpcEndpointServicePrivateDnsVerificationResult): any => ({
    ...obj,
  });
}

export interface StopInstancesRequest {
  /**
   * <p>The IDs of the instances.</p>
   */
  InstanceIds: string[] | undefined;

  /**
   * <p>Hibernates the instance if the instance was enabled for hibernation at launch. If the
   *             instance cannot hibernate successfully, a normal shutdown occurs. For more information,
   *             see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html">Hibernate
   *                 your instance</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *         <p> Default: <code>false</code>
   *          </p>
   */
  Hibernate?: boolean;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Forces the instances to stop. The instances do not have an opportunity to flush file
   *             system caches or file system metadata. If you use this option, you must perform file
   *             system check and repair procedures. This option is not recommended for Windows
   *             instances.</p>
   *         <p>Default: <code>false</code>
   *         </p>
   */
  Force?: boolean;
}

export namespace StopInstancesRequest {
  export const filterSensitiveLog = (obj: StopInstancesRequest): any => ({
    ...obj,
  });
}

export interface StopInstancesResult {
  /**
   * <p>Information about the stopped instances.</p>
   */
  StoppingInstances?: InstanceStateChange[];
}

export namespace StopInstancesResult {
  export const filterSensitiveLog = (obj: StopInstancesResult): any => ({
    ...obj,
  });
}

export interface TerminateClientVpnConnectionsRequest {
  /**
   * <p>The ID of the Client VPN endpoint to which the client is connected.</p>
   */
  ClientVpnEndpointId: string | undefined;

  /**
   * <p>The ID of the client connection to be terminated.</p>
   */
  ConnectionId?: string;

  /**
   * <p>The name of the user who initiated the connection. Use this option to terminate all active connections for
   * 			the specified user. This option can only be used if the user has established up to five connections.</p>
   */
  Username?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace TerminateClientVpnConnectionsRequest {
  export const filterSensitiveLog = (obj: TerminateClientVpnConnectionsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a terminated Client VPN endpoint client connection.</p>
 */
export interface TerminateConnectionStatus {
  /**
   * <p>The ID of the client connection.</p>
   */
  ConnectionId?: string;

  /**
   * <p>The state of the client connection.</p>
   */
  PreviousStatus?: ClientVpnConnectionStatus;

  /**
   * <p>A message about the status of the client connection, if applicable.</p>
   */
  CurrentStatus?: ClientVpnConnectionStatus;
}

export namespace TerminateConnectionStatus {
  export const filterSensitiveLog = (obj: TerminateConnectionStatus): any => ({
    ...obj,
  });
}

export interface TerminateClientVpnConnectionsResult {
  /**
   * <p>The ID of the Client VPN endpoint.</p>
   */
  ClientVpnEndpointId?: string;

  /**
   * <p>The user who established the terminated client connections.</p>
   */
  Username?: string;

  /**
   * <p>The current state of the client connections.</p>
   */
  ConnectionStatuses?: TerminateConnectionStatus[];
}

export namespace TerminateClientVpnConnectionsResult {
  export const filterSensitiveLog = (obj: TerminateClientVpnConnectionsResult): any => ({
    ...obj,
  });
}

export interface TerminateInstancesRequest {
  /**
   * <p>The IDs of the instances.</p>
   *         <p>Constraints: Up to 1000 instance IDs. We recommend breaking up this request into
   *             smaller batches.</p>
   */
  InstanceIds: string[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace TerminateInstancesRequest {
  export const filterSensitiveLog = (obj: TerminateInstancesRequest): any => ({
    ...obj,
  });
}

export interface TerminateInstancesResult {
  /**
   * <p>Information about the terminated instances.</p>
   */
  TerminatingInstances?: InstanceStateChange[];
}

export namespace TerminateInstancesResult {
  export const filterSensitiveLog = (obj: TerminateInstancesResult): any => ({
    ...obj,
  });
}

export interface UnassignIpv6AddressesRequest {
  /**
   * <p>The IPv6 addresses to unassign from the network interface.</p>
   */
  Ipv6Addresses: string[] | undefined;

  /**
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId: string | undefined;
}

export namespace UnassignIpv6AddressesRequest {
  export const filterSensitiveLog = (obj: UnassignIpv6AddressesRequest): any => ({
    ...obj,
  });
}

export interface UnassignIpv6AddressesResult {
  /**
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * <p>The IPv6 addresses that have been unassigned from the network interface.</p>
   */
  UnassignedIpv6Addresses?: string[];
}

export namespace UnassignIpv6AddressesResult {
  export const filterSensitiveLog = (obj: UnassignIpv6AddressesResult): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for UnassignPrivateIpAddresses.</p>
 */
export interface UnassignPrivateIpAddressesRequest {
  /**
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId: string | undefined;

  /**
   * <p>The secondary private IP addresses to unassign from the network interface. You can specify this option multiple times to unassign more than one IP address.</p>
   */
  PrivateIpAddresses: string[] | undefined;
}

export namespace UnassignPrivateIpAddressesRequest {
  export const filterSensitiveLog = (obj: UnassignPrivateIpAddressesRequest): any => ({
    ...obj,
  });
}

export interface UnmonitorInstancesRequest {
  /**
   * <p>The IDs of the instances.</p>
   */
  InstanceIds: string[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace UnmonitorInstancesRequest {
  export const filterSensitiveLog = (obj: UnmonitorInstancesRequest): any => ({
    ...obj,
  });
}

export interface UnmonitorInstancesResult {
  /**
   * <p>The monitoring information.</p>
   */
  InstanceMonitorings?: InstanceMonitoring[];
}

export namespace UnmonitorInstancesResult {
  export const filterSensitiveLog = (obj: UnmonitorInstancesResult): any => ({
    ...obj,
  });
}

export interface UpdateSecurityGroupRuleDescriptionsEgressRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the security group. You must specify either the security group ID or the
   * 			security group name in the request. For security groups in a nondefault VPC, you must
   * 			specify the security group ID.</p>
   */
  GroupId?: string;

  /**
   * <p>[Default VPC] The name of the security group. You must specify either the security group
   * 			ID or the security group name in the request.</p>
   */
  GroupName?: string;

  /**
   * <p>The IP permissions for the security group rule.</p>
   */
  IpPermissions: IpPermission[] | undefined;
}

export namespace UpdateSecurityGroupRuleDescriptionsEgressRequest {
  export const filterSensitiveLog = (obj: UpdateSecurityGroupRuleDescriptionsEgressRequest): any => ({
    ...obj,
  });
}

export interface UpdateSecurityGroupRuleDescriptionsEgressResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, returns an error.</p>
   */
  Return?: boolean;
}

export namespace UpdateSecurityGroupRuleDescriptionsEgressResult {
  export const filterSensitiveLog = (obj: UpdateSecurityGroupRuleDescriptionsEgressResult): any => ({
    ...obj,
  });
}

export interface UpdateSecurityGroupRuleDescriptionsIngressRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the security group. You must specify either the security group ID or the
   * 			security group name in the request. For security groups in a nondefault VPC, you must
   * 			specify the security group ID.</p>
   */
  GroupId?: string;

  /**
   * <p>[EC2-Classic, default VPC] The name of the security group. You must specify either the
   * 			security group ID or the security group name in the request.</p>
   */
  GroupName?: string;

  /**
   * <p>The IP permissions for the security group rule. </p>
   */
  IpPermissions: IpPermission[] | undefined;
}

export namespace UpdateSecurityGroupRuleDescriptionsIngressRequest {
  export const filterSensitiveLog = (obj: UpdateSecurityGroupRuleDescriptionsIngressRequest): any => ({
    ...obj,
  });
}

export interface UpdateSecurityGroupRuleDescriptionsIngressResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, returns an error.</p>
   */
  Return?: boolean;
}

export namespace UpdateSecurityGroupRuleDescriptionsIngressResult {
  export const filterSensitiveLog = (obj: UpdateSecurityGroupRuleDescriptionsIngressResult): any => ({
    ...obj,
  });
}

export interface WithdrawByoipCidrRequest {
  /**
   * <p>The address range, in CIDR notation.</p>
   */
  Cidr: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace WithdrawByoipCidrRequest {
  export const filterSensitiveLog = (obj: WithdrawByoipCidrRequest): any => ({
    ...obj,
  });
}

export interface WithdrawByoipCidrResult {
  /**
   * <p>Information about the address pool.</p>
   */
  ByoipCidr?: ByoipCidr;
}

export namespace WithdrawByoipCidrResult {
  export const filterSensitiveLog = (obj: WithdrawByoipCidrResult): any => ({
    ...obj,
  });
}
