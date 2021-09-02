import {
  AddPrefixListEntry,
  AddressAttribute,
  Affinity,
  AllowedPrincipal,
  ApplianceModeSupportValue,
  AssociationStatus,
  AttributeValue,
  AutoPlacement,
  CapacityReservationState,
  ClientConnectOptions,
  ConnectionLogOptions,
  CurrencyCodeValues,
  DiskImageFormat,
  DnsSupportValue,
  EndDateType,
  FleetExcessCapacityTerminationPolicy,
  FleetLaunchTemplateConfigRequest,
  HostRecovery,
  IamInstanceProfileAssociation,
  InstanceEventWindow,
  InstanceEventWindowTimeRangeRequest,
  Ipv6SupportValue,
  Placement,
  PlatformValues,
  SelfServicePortal,
  SubnetAssociation,
  SubnetIpv6CidrBlockAssociation,
  Tag,
  TagSpecification,
  TargetCapacitySpecificationRequest,
  TargetConfigurationRequest,
  TransitGatewayAssociation,
  TransitGatewayAssociationState,
  TransitGatewayAttachmentResourceType,
  TransitGatewayMulticastDomainAssociations,
  TransitGatewayVpcAttachment,
  UnsuccessfulItem,
  VolumeType,
  Vpc,
  VpcCidrBlockAssociation,
  VpcIpv6CidrBlockAssociation,
  VpcPeeringConnection,
  _InstanceType,
} from "./models_0";
import {
  AutoAcceptSharedAttachmentsValue,
  CapacityReservationPreference,
  CapacityReservationTarget,
  ConnectionNotification,
  DefaultRouteTableAssociationValue,
  DefaultRouteTablePropagationValue,
  DnsEntry,
  DnsNameState,
  LaunchTemplate,
  ManagedPrefixList,
  ResponseLaunchTemplateData,
  ServiceConfiguration,
  ServiceTypeDetail,
  ShutdownBehavior,
  State,
  SubnetCidrReservation,
  TrafficDirection,
  TrafficMirrorFilter,
  TrafficMirrorFilterRule,
  TrafficMirrorNetworkService,
  TrafficMirrorPortRangeRequest,
  TrafficMirrorRuleAction,
  TrafficMirrorSession,
  TransitGateway,
  TransitGatewayPrefixListReference,
  VpcEndpoint,
  VpnConnection,
  VpnEcmpSupportValue,
  VpnGateway,
} from "./models_1";
import {
  ArchitectureValues,
  AttributeBooleanValue,
  BootModeValues,
  ConversionTask,
  ExportTaskS3Location,
  FastSnapshotRestoreStateCode,
  Filter,
  FpgaImageAttribute,
  FpgaImageAttributeName,
  ImportImageLicenseConfigurationResponse,
  InstanceAttributeName,
  LaunchPermission,
  PaymentOption,
  PermissionGroup,
  SnapshotDetail,
  SnapshotTaskDetail,
} from "./models_2";
import {
  CreateVolumePermission,
  ExcessCapacityTerminationPolicy,
  HttpTokensState,
  InstanceMetadataEndpointState,
  InstanceMetadataOptionsResponse,
  InstanceMetadataProtocolState,
  InstanceStatusEvent,
  LaunchTemplateConfig,
  ReservedInstancesConfiguration,
  SnapshotAttributeName,
  VolumeModification,
  VolumeStatusItem,
} from "./models_3";
import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";

export interface DescribeVolumeStatusResult {
  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code>
   *       when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>Information about the status of the volumes.</p>
   */
  VolumeStatuses?: VolumeStatusItem[];
}

export namespace DescribeVolumeStatusResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeVolumeStatusResult): any => ({
    ...obj,
  });
}

export type VpcAttributeName = "enableDnsHostnames" | "enableDnsSupport";

export interface DescribeVpcAttributeRequest {
  /**
   * <p>The VPC attribute.</p>
   */
  Attribute: VpcAttributeName | string | undefined;

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DescribeVpcAttributeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeVpcAttributeRequest): any => ({
    ...obj,
  });
}

export interface DescribeVpcAttributeResult {
  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId?: string;

  /**
   * <p>Indicates whether the instances launched in the VPC get DNS hostnames.
   * 				If this attribute is <code>true</code>, instances in the VPC get DNS hostnames;
   * 				otherwise, they do not.</p>
   */
  EnableDnsHostnames?: AttributeBooleanValue;

  /**
   * <p>Indicates whether DNS resolution is enabled for
   * 				the VPC. If this attribute is <code>true</code>, the Amazon DNS server
   * 				resolves DNS hostnames for your instances to their corresponding
   * 				IP addresses; otherwise, it does not.</p>
   */
  EnableDnsSupport?: AttributeBooleanValue;
}

export namespace DescribeVpcAttributeResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeVpcAttributeResult): any => ({
    ...obj,
  });
}

export interface DescribeVpcClassicLinkRequest {
  /**
   * <p>One or more filters.</p>
   * 		       <ul>
   *             <li>
   * 				           <p>
   *                   <code>is-classic-link-enabled</code> - Whether the VPC is enabled for ClassicLink
   * 					   (<code>true</code> | <code>false</code>).</p>
   * 			         </li>
   *             <li>
   * 			            <p>
   *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   * 			         </li>
   *             <li>
   *     			        <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   * 			         </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>One or more VPCs for which you want to describe the ClassicLink status.</p>
   */
  VpcIds?: string[];
}

export namespace DescribeVpcClassicLinkRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeVpcClassicLinkRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes whether a VPC is enabled for ClassicLink.</p>
 */
export interface VpcClassicLink {
  /**
   * <p>Indicates whether the VPC is enabled for ClassicLink.</p>
   */
  ClassicLinkEnabled?: boolean;

  /**
   * <p>Any tags assigned to the VPC.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId?: string;
}

export namespace VpcClassicLink {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VpcClassicLink): any => ({
    ...obj,
  });
}

export interface DescribeVpcClassicLinkResult {
  /**
   * <p>The ClassicLink status of one or more VPCs.</p>
   */
  Vpcs?: VpcClassicLink[];
}

export namespace DescribeVpcClassicLinkResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeVpcClassicLinkResult): any => ({
    ...obj,
  });
}

export interface DescribeVpcClassicLinkDnsSupportRequest {
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
   * <p>One or more VPC IDs.</p>
   */
  VpcIds?: string[];
}

export namespace DescribeVpcClassicLinkDnsSupportRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeVpcClassicLinkDnsSupportRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the ClassicLink DNS support status of a VPC.</p>
 */
export interface ClassicLinkDnsSupport {
  /**
   * <p>Indicates whether ClassicLink DNS support is enabled for the VPC.</p>
   */
  ClassicLinkDnsSupported?: boolean;

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId?: string;
}

export namespace ClassicLinkDnsSupport {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClassicLinkDnsSupport): any => ({
    ...obj,
  });
}

export interface DescribeVpcClassicLinkDnsSupportResult {
  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>Information about the ClassicLink DNS support status of the VPCs.</p>
   */
  Vpcs?: ClassicLinkDnsSupport[];
}

export namespace DescribeVpcClassicLinkDnsSupportResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeVpcClassicLinkDnsSupportResult): any => ({
    ...obj,
  });
}

export interface DescribeVpcEndpointConnectionNotificationsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the notification.</p>
   */
  ConnectionNotificationId?: string;

  /**
   * <p>One or more filters.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>connection-notification-arn</code> - The ARN of the SNS topic for the
   *                     notification.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>connection-notification-id</code> - The ID of the
   *                     notification.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>connection-notification-state</code> - The state of the notification
   *                         (<code>Enabled</code> | <code>Disabled</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>connection-notification-type</code> - The type of notification
   *                         (<code>Topic</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>service-id</code> - The ID of the endpoint service.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>vpc-endpoint-id</code> - The ID of the VPC endpoint.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return in a single call. To retrieve the remaining
   *             results, make another request with the returned <code>NextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token to request the next page of results.</p>
   */
  NextToken?: string;
}

export namespace DescribeVpcEndpointConnectionNotificationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeVpcEndpointConnectionNotificationsRequest): any => ({
    ...obj,
  });
}

export interface DescribeVpcEndpointConnectionNotificationsResult {
  /**
   * <p>One or more notifications.</p>
   */
  ConnectionNotificationSet?: ConnectionNotification[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is
   *             <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeVpcEndpointConnectionNotificationsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeVpcEndpointConnectionNotificationsResult): any => ({
    ...obj,
  });
}

export interface DescribeVpcEndpointConnectionsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>One or more filters.</p>
   * 		       <ul>
   *             <li>
   *                 <p>
   *                   <code>service-id</code> - The ID of the service.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>vpc-endpoint-owner</code> - The AWS account number of the owner of the
   *                     endpoint.</p>
   *             </li>
   *             <li>
   * 			            <p>
   *                   <code>vpc-endpoint-state</code> - The state of the endpoint
   * 			        (<code>pendingAcceptance</code> | <code>pending</code> |
   * 			        <code>available</code> | <code>deleting</code> | <code>deleted</code> |
   * 			        <code>rejected</code> | <code>failed</code>).</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>vpc-endpoint-id</code> - The ID of the endpoint.</p>
   * 			         </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return for the request in a single page. The remaining
   *             results of the initial request can be seen by sending another request with the returned
   *                 <code>NextToken</code> value. This value can be between 5 and 1,000; if
   *                 <code>MaxResults</code> is given a value larger than 1,000, only 1,000 results are
   *             returned.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

export namespace DescribeVpcEndpointConnectionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeVpcEndpointConnectionsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a VPC endpoint connection to a service.</p>
 */
export interface VpcEndpointConnection {
  /**
   * <p>The ID of the service to which the endpoint is connected.</p>
   */
  ServiceId?: string;

  /**
   * <p>The ID of the VPC endpoint.</p>
   */
  VpcEndpointId?: string;

  /**
   * <p>The AWS account ID of the owner of the VPC endpoint.</p>
   */
  VpcEndpointOwner?: string;

  /**
   * <p>The state of the VPC endpoint.</p>
   */
  VpcEndpointState?: State | string;

  /**
   * <p>The date and time that the VPC endpoint was created.</p>
   */
  CreationTimestamp?: Date;

  /**
   * <p>The DNS entries for the VPC endpoint.</p>
   */
  DnsEntries?: DnsEntry[];

  /**
   * <p>The Amazon Resource Names (ARNs) of the network load balancers for the service.</p>
   */
  NetworkLoadBalancerArns?: string[];

  /**
   * <p>The Amazon Resource Names (ARNs) of the Gateway Load Balancers for the service.</p>
   */
  GatewayLoadBalancerArns?: string[];
}

export namespace VpcEndpointConnection {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VpcEndpointConnection): any => ({
    ...obj,
  });
}

export interface DescribeVpcEndpointConnectionsResult {
  /**
   * <p>Information about one or more VPC endpoint connections.</p>
   */
  VpcEndpointConnections?: VpcEndpointConnection[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeVpcEndpointConnectionsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeVpcEndpointConnectionsResult): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for DescribeVpcEndpoints.</p>
 */
export interface DescribeVpcEndpointsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>One or more endpoint IDs.</p>
   */
  VpcEndpointIds?: string[];

  /**
   * <p>One or more filters.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>service-name</code> - The name of the service.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>vpc-id</code> - The ID of the VPC in which the endpoint resides.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>vpc-endpoint-id</code> - The ID of the endpoint.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>vpc-endpoint-state</code> - The state of the endpoint
   *                         (<code>pendingAcceptance</code> | <code>pending</code> |
   *                         <code>available</code> | <code>deleting</code> | <code>deleted</code> |
   *                         <code>rejected</code> | <code>failed</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>vpc-endpoint-type</code> - The type of VPC endpoint (<code>Interface</code> | <code>Gateway</code> | <code>GatewayLoadBalancer</code>).</p>
   *             </li>
   *             <li>
   *         		     <p>
   *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   *         	   </li>
   *             <li>
   *         		     <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   *         	   </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of items to return for this request. The request returns a token that you can specify in a subsequent call to get the next set of results.</p>
   *         <p>Constraint: If the value is greater than 1,000, we return only 1,000 items.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of items to return. (You received this token from a prior call.)</p>
   */
  NextToken?: string;
}

export namespace DescribeVpcEndpointsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeVpcEndpointsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of DescribeVpcEndpoints.</p>
 */
export interface DescribeVpcEndpointsResult {
  /**
   * <p>Information about the endpoints.</p>
   */
  VpcEndpoints?: VpcEndpoint[];

  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.</p>
   */
  NextToken?: string;
}

export namespace DescribeVpcEndpointsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeVpcEndpointsResult): any => ({
    ...obj,
  });
}

export interface DescribeVpcEndpointServiceConfigurationsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The IDs of one or more services.</p>
   */
  ServiceIds?: string[];

  /**
   * <p>One or more filters.</p>
   * 		       <ul>
   *             <li>
   * 				           <p>
   *                   <code>service-name</code> - The name of the service.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>service-id</code> - The ID of the service.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>service-state</code> - The state of the service (<code>Pending</code> |
   *                         <code>Available</code> | <code>Deleting</code> | <code>Deleted</code> |
   *                         <code>Failed</code>). </p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   * 			         </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return for the request in a single page. The remaining
   *             results of the initial request can be seen by sending another request with the returned
   *                 <code>NextToken</code> value. This value can be between 5 and 1,000; if
   *                 <code>MaxResults</code> is given a value larger than 1,000, only 1,000 results are
   *             returned.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

export namespace DescribeVpcEndpointServiceConfigurationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeVpcEndpointServiceConfigurationsRequest): any => ({
    ...obj,
  });
}

export interface DescribeVpcEndpointServiceConfigurationsResult {
  /**
   * <p>Information about one or more services.</p>
   */
  ServiceConfigurations?: ServiceConfiguration[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeVpcEndpointServiceConfigurationsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeVpcEndpointServiceConfigurationsResult): any => ({
    ...obj,
  });
}

export interface DescribeVpcEndpointServicePermissionsRequest {
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
   * <p>One or more filters.</p>
   * 		       <ul>
   *             <li>
   * 				           <p>
   *                   <code>principal</code> - The ARN of the principal.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>principal-type</code> - The principal type (<code>All</code> |
   * 						<code>Service</code> | <code>OrganizationUnit</code> | <code>Account</code>
   * 					| <code>User</code> | <code>Role</code>).</p>
   * 			         </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return for the request in a single page. The remaining
   *             results of the initial request can be seen by sending another request with the returned
   *                 <code>NextToken</code> value. This value can be between 5 and 1,000; if
   *                 <code>MaxResults</code> is given a value larger than 1,000, only 1,000 results are
   *             returned.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

export namespace DescribeVpcEndpointServicePermissionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeVpcEndpointServicePermissionsRequest): any => ({
    ...obj,
  });
}

export interface DescribeVpcEndpointServicePermissionsResult {
  /**
   * <p>Information about one or more allowed principals.</p>
   */
  AllowedPrincipals?: AllowedPrincipal[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeVpcEndpointServicePermissionsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeVpcEndpointServicePermissionsResult): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for DescribeVpcEndpointServices.</p>
 */
export interface DescribeVpcEndpointServicesRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>One or more service names.</p>
   */
  ServiceNames?: string[];

  /**
   * <p>One or more filters.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>service-name</code> - The name of the service.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>service-type</code> - The type of service (<code>Interface</code> |
   *                         <code>Gateway</code>).</p>
   *             </li>
   *             <li>
   *         		     <p>
   *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   *         	   </li>
   *             <li>
   *         		     <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   *         	   </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of items to return for this request. The request returns a token that you can specify in a subsequent call to get the next set of results.</p>
   *         <p>Constraint: If the value is greater than 1,000, we return only 1,000 items.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of items to return. (You received this token from a prior call.)</p>
   */
  NextToken?: string;
}

export namespace DescribeVpcEndpointServicesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeVpcEndpointServicesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the Private DNS name for interface endpoints.</p>
 */
export interface PrivateDnsDetails {
  /**
   * <p>The private DNS name assigned to the VPC endpoint service.</p>
   */
  PrivateDnsName?: string;
}

export namespace PrivateDnsDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PrivateDnsDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a VPC endpoint service.</p>
 */
export interface ServiceDetail {
  /**
   * <p>The Amazon Resource Name (ARN) of the service.</p>
   */
  ServiceName?: string;

  /**
   * <p>The ID of the endpoint service.</p>
   */
  ServiceId?: string;

  /**
   * <p>The type of service.</p>
   */
  ServiceType?: ServiceTypeDetail[];

  /**
   * <p>The Availability Zones in which the service is available.</p>
   */
  AvailabilityZones?: string[];

  /**
   * <p>The AWS account ID of the service owner.</p>
   */
  Owner?: string;

  /**
   * <p>The DNS names for the service.</p>
   */
  BaseEndpointDnsNames?: string[];

  /**
   * <p>The private DNS name for the service.</p>
   */
  PrivateDnsName?: string;

  /**
   * <p>The private DNS names assigned to the VPC endpoint service. </p>
   */
  PrivateDnsNames?: PrivateDnsDetails[];

  /**
   * <p>Indicates whether the service supports endpoint policies.</p>
   */
  VpcEndpointPolicySupported?: boolean;

  /**
   * <p>Indicates whether VPC endpoint connection requests to the service must be accepted by the service owner.</p>
   */
  AcceptanceRequired?: boolean;

  /**
   * <p>Indicates whether the service manages its VPC endpoints. Management of the service VPC
   *             endpoints using the VPC endpoint API is restricted.</p>
   */
  ManagesVpcEndpoints?: boolean;

  /**
   * <p>Any tags assigned to the service.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The verification state of the VPC endpoint service.</p>
   *         <p>Consumers of the endpoint service cannot use the private name when the state is not <code>verified</code>.</p>
   */
  PrivateDnsNameVerificationState?: DnsNameState | string;
}

export namespace ServiceDetail {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServiceDetail): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of DescribeVpcEndpointServices.</p>
 */
export interface DescribeVpcEndpointServicesResult {
  /**
   * <p>A list of supported services.</p>
   */
  ServiceNames?: string[];

  /**
   * <p>Information about the service.</p>
   */
  ServiceDetails?: ServiceDetail[];

  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.</p>
   */
  NextToken?: string;
}

export namespace DescribeVpcEndpointServicesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeVpcEndpointServicesResult): any => ({
    ...obj,
  });
}

export interface DescribeVpcPeeringConnectionsRequest {
  /**
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                     <code>accepter-vpc-info.cidr-block</code> - The IPv4 CIDR block of the accepter
   *                     VPC.</p>
   *             </li>
   *             <li>
   *                <p>
   *                     <code>accepter-vpc-info.owner-id</code> - The ID of the Amazon Web Services account that owns the
   *                     accepter VPC.</p>
   *             </li>
   *             <li>
   *                <p>
   *                     <code>accepter-vpc-info.vpc-id</code> - The ID of the accepter VPC.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>expiration-time</code> - The expiration date and time for the VPC peering
   *           connection.</p>
   *             </li>
   *             <li>
   *                <p>
   *                     <code>requester-vpc-info.cidr-block</code> - The IPv4 CIDR block of the
   *                     requester's VPC.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>requester-vpc-info.owner-id</code> - The ID of the Amazon Web Services account that owns the
   *                   requester VPC.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>requester-vpc-info.vpc-id</code> - The ID of the requester VPC.</p>
   *             </li>
   *             <li>
   *                <p>
   *                     <code>status-code</code> - The status of the VPC peering connection
   *                         (<code>pending-acceptance</code> | <code>failed</code> |
   *                         <code>expired</code> | <code>provisioning</code> | <code>active</code> |
   *                         <code>deleting</code> | <code>deleted</code> |
   *                     <code>rejected</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>status-message</code> - A message that provides more information about the status
   *           of the VPC peering connection, if applicable.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>vpc-peering-connection-id</code> - The ID of the VPC peering connection.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>One or more VPC peering connection IDs.</p>
   *          <p>Default: Describes all your VPC peering connections.</p>
   */
  VpcPeeringConnectionIds?: string[];

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;
}

export namespace DescribeVpcPeeringConnectionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeVpcPeeringConnectionsRequest): any => ({
    ...obj,
  });
}

export interface DescribeVpcPeeringConnectionsResult {
  /**
   * <p>Information about the VPC peering connections.</p>
   */
  VpcPeeringConnections?: VpcPeeringConnection[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeVpcPeeringConnectionsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeVpcPeeringConnectionsResult): any => ({
    ...obj,
  });
}

export interface DescribeVpcsRequest {
  /**
   * <p>One or more filters.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>cidr</code> - The primary IPv4 CIDR block of the VPC. The CIDR block you
   *                     specify must exactly match the VPC's CIDR block for information to be returned
   *                     for the VPC. Must contain the slash followed by one or two digits (for example,
   *                     <code>/28</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>cidr-block-association.cidr-block</code> - An IPv4 CIDR block associated with the
   *                     VPC.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>cidr-block-association.association-id</code> - The association ID for
   *                     an IPv4 CIDR block associated with the VPC.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>cidr-block-association.state</code> - The state of an IPv4 CIDR block
   *                     associated with the VPC.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>dhcp-options-id</code> - The ID of a set of DHCP options.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>ipv6-cidr-block-association.ipv6-cidr-block</code> - An IPv6 CIDR
   *                     block associated with the VPC.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>ipv6-cidr-block-association.ipv6-pool</code> - The ID of the IPv6 address pool from which the IPv6 CIDR block is allocated.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>ipv6-cidr-block-association.association-id</code> - The association
   *                     ID for an IPv6 CIDR block associated with the VPC.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>ipv6-cidr-block-association.state</code> - The state of an IPv6 CIDR
   *                     block associated with the VPC.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>is-default</code> - Indicates whether the VPC is the default VPC.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>owner-id</code> - The ID of the Amazon Web Services account that owns the VPC.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>state</code> - The state of the VPC (<code>pending</code> | <code>available</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>vpc-id</code> - The ID of the VPC.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>One or more VPC IDs.</p>
   * 		       <p>Default: Describes all your VPCs.</p>
   */
  VpcIds?: string[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;
}

export namespace DescribeVpcsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeVpcsRequest): any => ({
    ...obj,
  });
}

export interface DescribeVpcsResult {
  /**
   * <p>Information about one or more VPCs.</p>
   */
  Vpcs?: Vpc[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeVpcsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeVpcsResult): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for DescribeVpnConnections.</p>
 */
export interface DescribeVpnConnectionsRequest {
  /**
   * <p>One or more filters.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>customer-gateway-configuration</code> - The configuration information for the customer gateway.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>customer-gateway-id</code> - The ID of a customer gateway associated with the VPN connection.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>state</code> - The state of the VPN connection (<code>pending</code> | <code>available</code> | <code>deleting</code> | <code>deleted</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>option.static-routes-only</code> - Indicates whether the connection has static routes only. Used for devices that do not support Border Gateway Protocol (BGP).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>route.destination-cidr-block</code> - The destination CIDR block. This corresponds to the subnet used in a customer data center.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>bgp-asn</code> - The BGP Autonomous System Number (ASN) associated with a BGP device.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>type</code> - The type of VPN connection. Currently the only supported type is <code>ipsec.1</code>.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>vpn-connection-id</code> - The ID of the VPN connection.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>vpn-gateway-id</code> - The ID of a virtual private gateway associated with the VPN connection.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>transit-gateway-id</code> - The ID of a transit gateway associated with the VPN connection.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>One or more VPN connection IDs.</p>
   *         <p>Default: Describes your VPN connections.</p>
   */
  VpnConnectionIds?: string[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *             and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *             Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DescribeVpnConnectionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeVpnConnectionsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of DescribeVpnConnections.</p>
 */
export interface DescribeVpnConnectionsResult {
  /**
   * <p>Information about one or more VPN connections.</p>
   */
  VpnConnections?: VpnConnection[];
}

export namespace DescribeVpnConnectionsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeVpnConnectionsResult): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for DescribeVpnGateways.</p>
 */
export interface DescribeVpnGatewaysRequest {
  /**
   * <p>One or more filters.</p>
   *         <ul>
   *             <li>
   * 				           <p>
   *                   <code>amazon-side-asn</code> - The Autonomous System Number (ASN) for the Amazon side of the gateway.</p>
   * 			         </li>
   *             <li>
   *                 <p>
   *                   <code>attachment.state</code> - The current state of the attachment between the gateway and the VPC (<code>attaching</code> | <code>attached</code> | <code>detaching</code> | <code>detached</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>attachment.vpc-id</code> - The ID of an attached VPC.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>availability-zone</code> - The Availability Zone for the virtual private gateway (if applicable).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>state</code> - The state of the virtual private gateway (<code>pending</code> | <code>available</code> | <code>deleting</code> | <code>deleted</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>type</code> - The type of virtual private gateway. Currently the only supported type is <code>ipsec.1</code>.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>vpn-gateway-id</code> - The ID of the virtual private gateway.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>One or more virtual private gateway IDs.</p>
   *         <p>Default: Describes all your virtual private gateways.</p>
   */
  VpnGatewayIds?: string[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *             and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *             Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DescribeVpnGatewaysRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeVpnGatewaysRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of DescribeVpnGateways.</p>
 */
export interface DescribeVpnGatewaysResult {
  /**
   * <p>Information about one or more virtual private gateways.</p>
   */
  VpnGateways?: VpnGateway[];
}

export namespace DescribeVpnGatewaysResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeVpnGatewaysResult): any => ({
    ...obj,
  });
}

export interface DetachClassicLinkVpcRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the instance to unlink from the VPC.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The ID of the VPC to which the instance is linked.</p>
   */
  VpcId: string | undefined;
}

export namespace DetachClassicLinkVpcRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DetachClassicLinkVpcRequest): any => ({
    ...obj,
  });
}

export interface DetachClassicLinkVpcResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  Return?: boolean;
}

export namespace DetachClassicLinkVpcResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DetachClassicLinkVpcResult): any => ({
    ...obj,
  });
}

export interface DetachInternetGatewayRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the internet gateway.</p>
   */
  InternetGatewayId: string | undefined;

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId: string | undefined;
}

export namespace DetachInternetGatewayRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DetachInternetGatewayRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for DetachNetworkInterface.</p>
 */
export interface DetachNetworkInterfaceRequest {
  /**
   * <p>The ID of the attachment.</p>
   */
  AttachmentId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *             and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *             Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Specifies whether to force a detachment.</p>
   *         <note>
   *             <ul>
   *                <li>
   *                     <p>Use the <code>Force</code> parameter only as a last resort to detach a network interface from a failed instance. </p>
   *                 </li>
   *                <li>
   *                     <p>If you use the <code>Force</code> parameter to detach a network interface, you might not be able to attach a different network interface to the same index on the instance without first stopping and starting the instance.</p>
   *                 </li>
   *                <li>
   *                     <p>If you force the detachment of a network interface, the <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html">instance metadata</a>
   *                         might not get updated. This means that the attributes associated
   *                         with the detached network interface might still be visible. The
   *                         instance metadata will get updated when you stop and start the
   *                         instance.</p>
   *                 </li>
   *             </ul>
   *         </note>
   */
  Force?: boolean;
}

export namespace DetachNetworkInterfaceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DetachNetworkInterfaceRequest): any => ({
    ...obj,
  });
}

export interface DetachVolumeRequest {
  /**
   * <p>The device name.</p>
   */
  Device?: string;

  /**
   * <p>Forces detachment if the previous detachment attempt did not occur cleanly (for example,
   *       logging into an instance, unmounting the volume, and detaching normally). This option can lead
   *       to data loss or a corrupted file system. Use this option only as a last resort to detach a
   *       volume from a failed instance. The instance won't have an opportunity to flush file system
   *       caches or file system metadata. If you use this option, you must perform file system check and
   *       repair procedures.</p>
   */
  Force?: boolean;

  /**
   * <p>The ID of the instance. If you are detaching a Multi-Attach enabled volume, you must specify an instance ID.</p>
   */
  InstanceId?: string;

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

export namespace DetachVolumeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DetachVolumeRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for DetachVpnGateway.</p>
 */
export interface DetachVpnGatewayRequest {
  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId: string | undefined;

  /**
   * <p>The ID of the virtual private gateway.</p>
   */
  VpnGatewayId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *             and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *             Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DetachVpnGatewayRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DetachVpnGatewayRequest): any => ({
    ...obj,
  });
}

export interface DisableEbsEncryptionByDefaultRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DisableEbsEncryptionByDefaultRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisableEbsEncryptionByDefaultRequest): any => ({
    ...obj,
  });
}

export interface DisableEbsEncryptionByDefaultResult {
  /**
   * <p>The updated status of encryption by default.</p>
   */
  EbsEncryptionByDefault?: boolean;
}

export namespace DisableEbsEncryptionByDefaultResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisableEbsEncryptionByDefaultResult): any => ({
    ...obj,
  });
}

export interface DisableFastSnapshotRestoresRequest {
  /**
   * <p>One or more Availability Zones. For example, <code>us-east-2a</code>.</p>
   */
  AvailabilityZones: string[] | undefined;

  /**
   * <p>The IDs of one or more snapshots. For example, <code>snap-1234567890abcdef0</code>.</p>
   */
  SourceSnapshotIds: string[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DisableFastSnapshotRestoresRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisableFastSnapshotRestoresRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes fast snapshot restores that were successfully disabled.</p>
 */
export interface DisableFastSnapshotRestoreSuccessItem {
  /**
   * <p>The ID of the snapshot.</p>
   */
  SnapshotId?: string;

  /**
   * <p>The Availability Zone.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The state of fast snapshot restores for the snapshot.</p>
   */
  State?: FastSnapshotRestoreStateCode | string;

  /**
   * <p>The reason for the state transition. The possible values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Client.UserInitiated</code> - The state successfully transitioned to <code>enabling</code> or
   *           <code>disabling</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Client.UserInitiated - Lifecycle state transition</code> - The state successfully transitioned
   *           to <code>optimizing</code>, <code>enabled</code>, or <code>disabled</code>.</p>
   *             </li>
   *          </ul>
   */
  StateTransitionReason?: string;

  /**
   * <p>The ID of the Amazon Web Services account that enabled fast snapshot restores on the snapshot.</p>
   */
  OwnerId?: string;

  /**
   * <p>The Amazon Web Services owner alias that enabled fast snapshot restores on the snapshot. This is intended for future use.</p>
   */
  OwnerAlias?: string;

  /**
   * <p>The time at which fast snapshot restores entered the <code>enabling</code> state.</p>
   */
  EnablingTime?: Date;

  /**
   * <p>The time at which fast snapshot restores entered the <code>optimizing</code> state.</p>
   */
  OptimizingTime?: Date;

  /**
   * <p>The time at which fast snapshot restores entered the <code>enabled</code> state.</p>
   */
  EnabledTime?: Date;

  /**
   * <p>The time at which fast snapshot restores entered the <code>disabling</code> state.</p>
   */
  DisablingTime?: Date;

  /**
   * <p>The time at which fast snapshot restores entered the <code>disabled</code> state.</p>
   */
  DisabledTime?: Date;
}

export namespace DisableFastSnapshotRestoreSuccessItem {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisableFastSnapshotRestoreSuccessItem): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an error that occurred when disabling fast snapshot restores.</p>
 */
export interface DisableFastSnapshotRestoreStateError {
  /**
   * <p>The error code.</p>
   */
  Code?: string;

  /**
   * <p>The error message.</p>
   */
  Message?: string;
}

export namespace DisableFastSnapshotRestoreStateError {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisableFastSnapshotRestoreStateError): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about an error that occurred when disabling fast snapshot restores.</p>
 */
export interface DisableFastSnapshotRestoreStateErrorItem {
  /**
   * <p>The Availability Zone.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The error.</p>
   */
  Error?: DisableFastSnapshotRestoreStateError;
}

export namespace DisableFastSnapshotRestoreStateErrorItem {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisableFastSnapshotRestoreStateErrorItem): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about the errors that occurred when disabling fast snapshot restores.</p>
 */
export interface DisableFastSnapshotRestoreErrorItem {
  /**
   * <p>The ID of the snapshot.</p>
   */
  SnapshotId?: string;

  /**
   * <p>The errors.</p>
   */
  FastSnapshotRestoreStateErrors?: DisableFastSnapshotRestoreStateErrorItem[];
}

export namespace DisableFastSnapshotRestoreErrorItem {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisableFastSnapshotRestoreErrorItem): any => ({
    ...obj,
  });
}

export interface DisableFastSnapshotRestoresResult {
  /**
   * <p>Information about the snapshots for which fast snapshot restores were successfully disabled.</p>
   */
  Successful?: DisableFastSnapshotRestoreSuccessItem[];

  /**
   * <p>Information about the snapshots for which fast snapshot restores could not be disabled.</p>
   */
  Unsuccessful?: DisableFastSnapshotRestoreErrorItem[];
}

export namespace DisableFastSnapshotRestoresResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisableFastSnapshotRestoresResult): any => ({
    ...obj,
  });
}

export interface DisableImageDeprecationRequest {
  /**
   * <p>The ID of the AMI.</p>
   */
  ImageId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *       and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *       Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DisableImageDeprecationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisableImageDeprecationRequest): any => ({
    ...obj,
  });
}

export interface DisableImageDeprecationResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  Return?: boolean;
}

export namespace DisableImageDeprecationResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisableImageDeprecationResult): any => ({
    ...obj,
  });
}

export interface DisableSerialConsoleAccessRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DisableSerialConsoleAccessRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisableSerialConsoleAccessRequest): any => ({
    ...obj,
  });
}

export interface DisableSerialConsoleAccessResult {
  /**
   * <p>If <code>true</code>, access to the EC2 serial console of all instances is enabled for
   * 			your account. If <code>false</code>, access to the EC2 serial console of all instances
   * 			is disabled for your account.</p>
   */
  SerialConsoleAccessEnabled?: boolean;
}

export namespace DisableSerialConsoleAccessResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisableSerialConsoleAccessResult): any => ({
    ...obj,
  });
}

export interface DisableTransitGatewayRouteTablePropagationRequest {
  /**
   * <p>The ID of the propagation route table.</p>
   */
  TransitGatewayRouteTableId: string | undefined;

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

export namespace DisableTransitGatewayRouteTablePropagationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisableTransitGatewayRouteTablePropagationRequest): any => ({
    ...obj,
  });
}

export type TransitGatewayPropagationState = "disabled" | "disabling" | "enabled" | "enabling";

/**
 * <p>Describes route propagation.</p>
 */
export interface TransitGatewayPropagation {
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
   * <p>The ID of the transit gateway route table.</p>
   */
  TransitGatewayRouteTableId?: string;

  /**
   * <p>The state.</p>
   */
  State?: TransitGatewayPropagationState | string;
}

export namespace TransitGatewayPropagation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TransitGatewayPropagation): any => ({
    ...obj,
  });
}

export interface DisableTransitGatewayRouteTablePropagationResult {
  /**
   * <p>Information about route propagation.</p>
   */
  Propagation?: TransitGatewayPropagation;
}

export namespace DisableTransitGatewayRouteTablePropagationResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisableTransitGatewayRouteTablePropagationResult): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for DisableVgwRoutePropagation.</p>
 */
export interface DisableVgwRoutePropagationRequest {
  /**
   * <p>The ID of the virtual private gateway.</p>
   */
  GatewayId: string | undefined;

  /**
   * <p>The ID of the route table.</p>
   */
  RouteTableId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   * 			and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   * 			Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DisableVgwRoutePropagationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisableVgwRoutePropagationRequest): any => ({
    ...obj,
  });
}

export interface DisableVpcClassicLinkRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId: string | undefined;
}

export namespace DisableVpcClassicLinkRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisableVpcClassicLinkRequest): any => ({
    ...obj,
  });
}

export interface DisableVpcClassicLinkResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  Return?: boolean;
}

export namespace DisableVpcClassicLinkResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisableVpcClassicLinkResult): any => ({
    ...obj,
  });
}

export interface DisableVpcClassicLinkDnsSupportRequest {
  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId?: string;
}

export namespace DisableVpcClassicLinkDnsSupportRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisableVpcClassicLinkDnsSupportRequest): any => ({
    ...obj,
  });
}

export interface DisableVpcClassicLinkDnsSupportResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  Return?: boolean;
}

export namespace DisableVpcClassicLinkDnsSupportResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisableVpcClassicLinkDnsSupportResult): any => ({
    ...obj,
  });
}

export interface DisassociateAddressRequest {
  /**
   * <p>[EC2-VPC] The association ID. Required for EC2-VPC.</p>
   */
  AssociationId?: string;

  /**
   * <p>[EC2-Classic] The Elastic IP address. Required for EC2-Classic.</p>
   */
  PublicIp?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DisassociateAddressRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateAddressRequest): any => ({
    ...obj,
  });
}

export interface DisassociateClientVpnTargetNetworkRequest {
  /**
   * <p>The ID of the Client VPN endpoint from which to disassociate the target network.</p>
   */
  ClientVpnEndpointId: string | undefined;

  /**
   * <p>The ID of the target network association.</p>
   */
  AssociationId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DisassociateClientVpnTargetNetworkRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateClientVpnTargetNetworkRequest): any => ({
    ...obj,
  });
}

export interface DisassociateClientVpnTargetNetworkResult {
  /**
   * <p>The ID of the target network association.</p>
   */
  AssociationId?: string;

  /**
   * <p>The current state of the target network association.</p>
   */
  Status?: AssociationStatus;
}

export namespace DisassociateClientVpnTargetNetworkResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateClientVpnTargetNetworkResult): any => ({
    ...obj,
  });
}

export interface DisassociateEnclaveCertificateIamRoleRequest {
  /**
   * <p>The ARN of the ACM certificate from which to disassociate the IAM role.</p>
   */
  CertificateArn?: string;

  /**
   * <p>The ARN of the IAM role to disassociate.</p>
   */
  RoleArn?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DisassociateEnclaveCertificateIamRoleRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateEnclaveCertificateIamRoleRequest): any => ({
    ...obj,
  });
}

export interface DisassociateEnclaveCertificateIamRoleResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  Return?: boolean;
}

export namespace DisassociateEnclaveCertificateIamRoleResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateEnclaveCertificateIamRoleResult): any => ({
    ...obj,
  });
}

export interface DisassociateIamInstanceProfileRequest {
  /**
   * <p>The ID of the IAM instance profile association.</p>
   */
  AssociationId: string | undefined;
}

export namespace DisassociateIamInstanceProfileRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateIamInstanceProfileRequest): any => ({
    ...obj,
  });
}

export interface DisassociateIamInstanceProfileResult {
  /**
   * <p>Information about the IAM instance profile association.</p>
   */
  IamInstanceProfileAssociation?: IamInstanceProfileAssociation;
}

export namespace DisassociateIamInstanceProfileResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateIamInstanceProfileResult): any => ({
    ...obj,
  });
}

/**
 * <p>The targets to disassociate from the specified event window.</p>
 */
export interface InstanceEventWindowDisassociationRequest {
  /**
   * <p>The IDs of the instances to disassociate from the event window.</p>
   */
  InstanceIds?: string[];

  /**
   * <p>The instance tags to disassociate from the event window. Any instances associated with
   *          the tags will be disassociated from the event window.</p>
   */
  InstanceTags?: Tag[];

  /**
   * <p>The IDs of the Dedicated Hosts to disassociate from the event window.</p>
   */
  DedicatedHostIds?: string[];
}

export namespace InstanceEventWindowDisassociationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InstanceEventWindowDisassociationRequest): any => ({
    ...obj,
  });
}

export interface DisassociateInstanceEventWindowRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the event window.</p>
   */
  InstanceEventWindowId: string | undefined;

  /**
   * <p>One or more targets to disassociate from the specified event window.</p>
   */
  AssociationTarget: InstanceEventWindowDisassociationRequest | undefined;
}

export namespace DisassociateInstanceEventWindowRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateInstanceEventWindowRequest): any => ({
    ...obj,
  });
}

export interface DisassociateInstanceEventWindowResult {
  /**
   * <p>Information about the event window.</p>
   */
  InstanceEventWindow?: InstanceEventWindow;
}

export namespace DisassociateInstanceEventWindowResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateInstanceEventWindowResult): any => ({
    ...obj,
  });
}

export interface DisassociateRouteTableRequest {
  /**
   * <p>The association ID representing the current association between the route table and subnet or gateway.</p>
   */
  AssociationId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DisassociateRouteTableRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateRouteTableRequest): any => ({
    ...obj,
  });
}

export interface DisassociateSubnetCidrBlockRequest {
  /**
   * <p>The association ID for the CIDR block.</p>
   */
  AssociationId: string | undefined;
}

export namespace DisassociateSubnetCidrBlockRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateSubnetCidrBlockRequest): any => ({
    ...obj,
  });
}

export interface DisassociateSubnetCidrBlockResult {
  /**
   * <p>Information about the IPv6 CIDR block association.</p>
   */
  Ipv6CidrBlockAssociation?: SubnetIpv6CidrBlockAssociation;

  /**
   * <p>The ID of the subnet.</p>
   */
  SubnetId?: string;
}

export namespace DisassociateSubnetCidrBlockResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateSubnetCidrBlockResult): any => ({
    ...obj,
  });
}

export interface DisassociateTransitGatewayMulticastDomainRequest {
  /**
   * <p>The ID of the transit gateway multicast domain.</p>
   */
  TransitGatewayMulticastDomainId?: string;

  /**
   * <p>The ID of the attachment.</p>
   */
  TransitGatewayAttachmentId?: string;

  /**
   * <p>The IDs of the subnets;</p>
   */
  SubnetIds?: string[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DisassociateTransitGatewayMulticastDomainRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateTransitGatewayMulticastDomainRequest): any => ({
    ...obj,
  });
}

export interface DisassociateTransitGatewayMulticastDomainResult {
  /**
   * <p>Information about the association.</p>
   */
  Associations?: TransitGatewayMulticastDomainAssociations;
}

export namespace DisassociateTransitGatewayMulticastDomainResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateTransitGatewayMulticastDomainResult): any => ({
    ...obj,
  });
}

export interface DisassociateTransitGatewayRouteTableRequest {
  /**
   * <p>The ID of the transit gateway route table.</p>
   */
  TransitGatewayRouteTableId: string | undefined;

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

export namespace DisassociateTransitGatewayRouteTableRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateTransitGatewayRouteTableRequest): any => ({
    ...obj,
  });
}

export interface DisassociateTransitGatewayRouteTableResult {
  /**
   * <p>Information about the association.</p>
   */
  Association?: TransitGatewayAssociation;
}

export namespace DisassociateTransitGatewayRouteTableResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateTransitGatewayRouteTableResult): any => ({
    ...obj,
  });
}

export interface DisassociateTrunkInterfaceRequest {
  /**
   * <p>The ID of the association</p>
   */
  AssociationId: string | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Run_Instance_Idempotency.html">How to Ensure
   *                 Idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DisassociateTrunkInterfaceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateTrunkInterfaceRequest): any => ({
    ...obj,
  });
}

export interface DisassociateTrunkInterfaceResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  Return?: boolean;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Run_Instance_Idempotency.html">How to Ensure
   *                 Idempotency</a>.</p>
   */
  ClientToken?: string;
}

export namespace DisassociateTrunkInterfaceResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateTrunkInterfaceResult): any => ({
    ...obj,
  });
}

export interface DisassociateVpcCidrBlockRequest {
  /**
   * <p>The association ID for the CIDR block.</p>
   */
  AssociationId: string | undefined;
}

export namespace DisassociateVpcCidrBlockRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateVpcCidrBlockRequest): any => ({
    ...obj,
  });
}

export interface DisassociateVpcCidrBlockResult {
  /**
   * <p>Information about the IPv6 CIDR block association.</p>
   */
  Ipv6CidrBlockAssociation?: VpcIpv6CidrBlockAssociation;

  /**
   * <p>Information about the IPv4 CIDR block association.</p>
   */
  CidrBlockAssociation?: VpcCidrBlockAssociation;

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId?: string;
}

export namespace DisassociateVpcCidrBlockResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateVpcCidrBlockResult): any => ({
    ...obj,
  });
}

export interface EnableEbsEncryptionByDefaultRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace EnableEbsEncryptionByDefaultRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EnableEbsEncryptionByDefaultRequest): any => ({
    ...obj,
  });
}

export interface EnableEbsEncryptionByDefaultResult {
  /**
   * <p>The updated status of encryption by default.</p>
   */
  EbsEncryptionByDefault?: boolean;
}

export namespace EnableEbsEncryptionByDefaultResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EnableEbsEncryptionByDefaultResult): any => ({
    ...obj,
  });
}

export interface EnableFastSnapshotRestoresRequest {
  /**
   * <p>One or more Availability Zones. For example, <code>us-east-2a</code>.</p>
   */
  AvailabilityZones: string[] | undefined;

  /**
   * <p>The IDs of one or more snapshots. For example, <code>snap-1234567890abcdef0</code>. You can specify
   *       a snapshot that was shared with you from another Amazon Web Services account.</p>
   */
  SourceSnapshotIds: string[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace EnableFastSnapshotRestoresRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EnableFastSnapshotRestoresRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes fast snapshot restores that were successfully enabled.</p>
 */
export interface EnableFastSnapshotRestoreSuccessItem {
  /**
   * <p>The ID of the snapshot.</p>
   */
  SnapshotId?: string;

  /**
   * <p>The Availability Zone.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The state of fast snapshot restores.</p>
   */
  State?: FastSnapshotRestoreStateCode | string;

  /**
   * <p>The reason for the state transition. The possible values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Client.UserInitiated</code> - The state successfully transitioned to <code>enabling</code> or
   *           <code>disabling</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Client.UserInitiated - Lifecycle state transition</code> - The state successfully transitioned
   *           to <code>optimizing</code>, <code>enabled</code>, or <code>disabled</code>.</p>
   *             </li>
   *          </ul>
   */
  StateTransitionReason?: string;

  /**
   * <p>The ID of the Amazon Web Services account that enabled fast snapshot restores on the snapshot.</p>
   */
  OwnerId?: string;

  /**
   * <p>The Amazon Web Services owner alias that enabled fast snapshot restores on the snapshot. This is intended for future use.</p>
   */
  OwnerAlias?: string;

  /**
   * <p>The time at which fast snapshot restores entered the <code>enabling</code> state.</p>
   */
  EnablingTime?: Date;

  /**
   * <p>The time at which fast snapshot restores entered the <code>optimizing</code> state.</p>
   */
  OptimizingTime?: Date;

  /**
   * <p>The time at which fast snapshot restores entered the <code>enabled</code> state.</p>
   */
  EnabledTime?: Date;

  /**
   * <p>The time at which fast snapshot restores entered the <code>disabling</code> state.</p>
   */
  DisablingTime?: Date;

  /**
   * <p>The time at which fast snapshot restores entered the <code>disabled</code> state.</p>
   */
  DisabledTime?: Date;
}

export namespace EnableFastSnapshotRestoreSuccessItem {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EnableFastSnapshotRestoreSuccessItem): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an error that occurred when enabling fast snapshot restores.</p>
 */
export interface EnableFastSnapshotRestoreStateError {
  /**
   * <p>The error code.</p>
   */
  Code?: string;

  /**
   * <p>The error message.</p>
   */
  Message?: string;
}

export namespace EnableFastSnapshotRestoreStateError {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EnableFastSnapshotRestoreStateError): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about an error that occurred when enabling fast snapshot restores.</p>
 */
export interface EnableFastSnapshotRestoreStateErrorItem {
  /**
   * <p>The Availability Zone.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The error.</p>
   */
  Error?: EnableFastSnapshotRestoreStateError;
}

export namespace EnableFastSnapshotRestoreStateErrorItem {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EnableFastSnapshotRestoreStateErrorItem): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about the errors that occurred when enabling fast snapshot restores.</p>
 */
export interface EnableFastSnapshotRestoreErrorItem {
  /**
   * <p>The ID of the snapshot.</p>
   */
  SnapshotId?: string;

  /**
   * <p>The errors.</p>
   */
  FastSnapshotRestoreStateErrors?: EnableFastSnapshotRestoreStateErrorItem[];
}

export namespace EnableFastSnapshotRestoreErrorItem {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EnableFastSnapshotRestoreErrorItem): any => ({
    ...obj,
  });
}

export interface EnableFastSnapshotRestoresResult {
  /**
   * <p>Information about the snapshots for which fast snapshot restores were successfully enabled.</p>
   */
  Successful?: EnableFastSnapshotRestoreSuccessItem[];

  /**
   * <p>Information about the snapshots for which fast snapshot restores could not be enabled.</p>
   */
  Unsuccessful?: EnableFastSnapshotRestoreErrorItem[];
}

export namespace EnableFastSnapshotRestoresResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EnableFastSnapshotRestoresResult): any => ({
    ...obj,
  });
}

export interface EnableImageDeprecationRequest {
  /**
   * <p>The ID of the AMI.</p>
   */
  ImageId: string | undefined;

  /**
   * <p>The date and time to deprecate the AMI, in UTC, in the following format:
   *         <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z.
   *       If you specify a value for seconds, Amazon EC2 rounds the seconds to the
   *       nearest minute.</p>
   *          <p>You can’t specify a date in the past. The upper limit for <code>DeprecateAt</code> is 10
   *       years from now.</p>
   */
  DeprecateAt: Date | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *       and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *       Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace EnableImageDeprecationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EnableImageDeprecationRequest): any => ({
    ...obj,
  });
}

export interface EnableImageDeprecationResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  Return?: boolean;
}

export namespace EnableImageDeprecationResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EnableImageDeprecationResult): any => ({
    ...obj,
  });
}

export interface EnableSerialConsoleAccessRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace EnableSerialConsoleAccessRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EnableSerialConsoleAccessRequest): any => ({
    ...obj,
  });
}

export interface EnableSerialConsoleAccessResult {
  /**
   * <p>If <code>true</code>, access to the EC2 serial console of all instances is enabled for
   * 			your account. If <code>false</code>, access to the EC2 serial console of all instances
   * 			is disabled for your account.</p>
   */
  SerialConsoleAccessEnabled?: boolean;
}

export namespace EnableSerialConsoleAccessResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EnableSerialConsoleAccessResult): any => ({
    ...obj,
  });
}

export interface EnableTransitGatewayRouteTablePropagationRequest {
  /**
   * <p>The ID of the propagation route table.</p>
   */
  TransitGatewayRouteTableId: string | undefined;

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

export namespace EnableTransitGatewayRouteTablePropagationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EnableTransitGatewayRouteTablePropagationRequest): any => ({
    ...obj,
  });
}

export interface EnableTransitGatewayRouteTablePropagationResult {
  /**
   * <p>Information about route propagation.</p>
   */
  Propagation?: TransitGatewayPropagation;
}

export namespace EnableTransitGatewayRouteTablePropagationResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EnableTransitGatewayRouteTablePropagationResult): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for EnableVgwRoutePropagation.</p>
 */
export interface EnableVgwRoutePropagationRequest {
  /**
   * <p>The ID of the virtual private gateway that is attached to a VPC. The virtual private gateway must be attached to the same VPC that the routing tables are associated with. </p>
   */
  GatewayId: string | undefined;

  /**
   * <p>The ID of the route table. The routing table must be associated with the same VPC that the virtual private gateway is attached to. </p>
   */
  RouteTableId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   * 			and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   * 			Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace EnableVgwRoutePropagationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EnableVgwRoutePropagationRequest): any => ({
    ...obj,
  });
}

export interface EnableVolumeIORequest {
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
}

export namespace EnableVolumeIORequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EnableVolumeIORequest): any => ({
    ...obj,
  });
}

export interface EnableVpcClassicLinkRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId: string | undefined;
}

export namespace EnableVpcClassicLinkRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EnableVpcClassicLinkRequest): any => ({
    ...obj,
  });
}

export interface EnableVpcClassicLinkResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  Return?: boolean;
}

export namespace EnableVpcClassicLinkResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EnableVpcClassicLinkResult): any => ({
    ...obj,
  });
}

export interface EnableVpcClassicLinkDnsSupportRequest {
  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId?: string;
}

export namespace EnableVpcClassicLinkDnsSupportRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EnableVpcClassicLinkDnsSupportRequest): any => ({
    ...obj,
  });
}

export interface EnableVpcClassicLinkDnsSupportResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  Return?: boolean;
}

export namespace EnableVpcClassicLinkDnsSupportResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EnableVpcClassicLinkDnsSupportResult): any => ({
    ...obj,
  });
}

export interface ExportClientVpnClientCertificateRevocationListRequest {
  /**
   * <p>The ID of the Client VPN endpoint.</p>
   */
  ClientVpnEndpointId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace ExportClientVpnClientCertificateRevocationListRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExportClientVpnClientCertificateRevocationListRequest): any => ({
    ...obj,
  });
}

export type ClientCertificateRevocationListStatusCode = "active" | "pending";

/**
 * <p>Describes the state of a client certificate revocation list.</p>
 */
export interface ClientCertificateRevocationListStatus {
  /**
   * <p>The state of the client certificate revocation list.</p>
   */
  Code?: ClientCertificateRevocationListStatusCode | string;

  /**
   * <p>A message about the status of the client certificate revocation list, if applicable.</p>
   */
  Message?: string;
}

export namespace ClientCertificateRevocationListStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClientCertificateRevocationListStatus): any => ({
    ...obj,
  });
}

export interface ExportClientVpnClientCertificateRevocationListResult {
  /**
   * <p>Information about the client certificate revocation list.</p>
   */
  CertificateRevocationList?: string;

  /**
   * <p>The current state of the client certificate revocation list.</p>
   */
  Status?: ClientCertificateRevocationListStatus;
}

export namespace ExportClientVpnClientCertificateRevocationListResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExportClientVpnClientCertificateRevocationListResult): any => ({
    ...obj,
  });
}

export interface ExportClientVpnClientConfigurationRequest {
  /**
   * <p>The ID of the Client VPN endpoint.</p>
   */
  ClientVpnEndpointId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace ExportClientVpnClientConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExportClientVpnClientConfigurationRequest): any => ({
    ...obj,
  });
}

export interface ExportClientVpnClientConfigurationResult {
  /**
   * <p>The contents of the Client VPN endpoint configuration file.</p>
   */
  ClientConfiguration?: string;
}

export namespace ExportClientVpnClientConfigurationResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExportClientVpnClientConfigurationResult): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the destination for an export image task.</p>
 */
export interface ExportTaskS3LocationRequest {
  /**
   * <p>The destination Amazon S3 bucket.</p>
   */
  S3Bucket: string | undefined;

  /**
   * <p>The prefix (logical hierarchy) in the bucket.</p>
   */
  S3Prefix?: string;
}

export namespace ExportTaskS3LocationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExportTaskS3LocationRequest): any => ({
    ...obj,
  });
}

export interface ExportImageRequest {
  /**
   * <p>Token to enable idempotency for export image requests.</p>
   */
  ClientToken?: string;

  /**
   * <p>A description of the image being exported. The maximum length is 255 characters.</p>
   */
  Description?: string;

  /**
   * <p>The disk image format.</p>
   */
  DiskImageFormat: DiskImageFormat | string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the image.</p>
   */
  ImageId: string | undefined;

  /**
   * <p>Information about the destination Amazon S3 bucket. The bucket must exist and grant WRITE
   *    and READ_ACP permissions to the Amazon Web Services account vm-import-export@amazon.com.</p>
   */
  S3ExportLocation: ExportTaskS3LocationRequest | undefined;

  /**
   * <p>The name of the role that grants VM Import/Export permission to export images to your Amazon
   *    S3 bucket. If this parameter is not specified, the default role is named 'vmimport'.</p>
   */
  RoleName?: string;

  /**
   * <p>The tags to apply to the export image task during creation.</p>
   */
  TagSpecifications?: TagSpecification[];
}

export namespace ExportImageRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExportImageRequest): any => ({
    ...obj,
  });
}

export interface ExportImageResult {
  /**
   * <p>A description of the image being exported.</p>
   */
  Description?: string;

  /**
   * <p>The disk image format for the exported image.</p>
   */
  DiskImageFormat?: DiskImageFormat | string;

  /**
   * <p>The ID of the export image task.</p>
   */
  ExportImageTaskId?: string;

  /**
   * <p>The ID of the image.</p>
   */
  ImageId?: string;

  /**
   * <p>The name of the role that grants VM Import/Export permission to export images to your Amazon
   *    S3 bucket.</p>
   */
  RoleName?: string;

  /**
   * <p>The percent complete of the export image task.</p>
   */
  Progress?: string;

  /**
   * <p>Information about the destination Amazon S3 bucket.</p>
   */
  S3ExportLocation?: ExportTaskS3Location;

  /**
   * <p>The status of the export image task. The possible values are <code>active</code>, <code>completed</code>,
   *     <code>deleting</code>, and <code>deleted</code>.</p>
   */
  Status?: string;

  /**
   * <p>The status message for the export image task.</p>
   */
  StatusMessage?: string;

  /**
   * <p>Any tags assigned to the export image task.</p>
   */
  Tags?: Tag[];
}

export namespace ExportImageResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExportImageResult): any => ({
    ...obj,
  });
}

export interface ExportTransitGatewayRoutesRequest {
  /**
   * <p>The ID of the route table.</p>
   */
  TransitGatewayRouteTableId: string | undefined;

  /**
   * <p>One or more filters. The possible values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>attachment.transit-gateway-attachment-id</code> - The id of the transit gateway attachment.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>attachment.resource-id</code> - The resource id of the transit gateway attachment.</p>
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
   *                   <code>transit-gateway-route-destination-cidr-block</code> - The CIDR range.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>type</code> - The type of route (<code>propagated</code> |
   *                <code>static</code>).</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The name of the S3 bucket.</p>
   */
  S3Bucket: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace ExportTransitGatewayRoutesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExportTransitGatewayRoutesRequest): any => ({
    ...obj,
  });
}

export interface ExportTransitGatewayRoutesResult {
  /**
   * <p>The URL of the exported file in Amazon S3. For example,
   *          s3://<i>bucket_name</i>/VPCTransitGateway/TransitGatewayRouteTables/<i>file_name</i>.</p>
   */
  S3Location?: string;
}

export namespace ExportTransitGatewayRoutesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExportTransitGatewayRoutesResult): any => ({
    ...obj,
  });
}

export interface GetAssociatedEnclaveCertificateIamRolesRequest {
  /**
   * <p>The ARN of the ACM certificate for which to view the associated IAM roles, encryption keys, and Amazon
   * 			S3 object information.</p>
   */
  CertificateArn?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace GetAssociatedEnclaveCertificateIamRolesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAssociatedEnclaveCertificateIamRolesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the associated IAM roles.</p>
 */
export interface AssociatedRole {
  /**
   * <p>The ARN of the associated IAM role.</p>
   */
  AssociatedRoleArn?: string;

  /**
   * <p>The name of the Amazon S3 bucket in which the Amazon S3 object is stored.</p>
   */
  CertificateS3BucketName?: string;

  /**
   * <p>The key of the Amazon S3 object ey where the certificate, certificate chain, and encrypted private key bundle
   * 			is stored. The object key is formated as follows:  <code>role_arn</code>/<code>certificate_arn</code>.
   * 		</p>
   */
  CertificateS3ObjectKey?: string;

  /**
   * <p>The ID of the KMS customer master key (CMK) used to encrypt the private key.</p>
   */
  EncryptionKmsKeyId?: string;
}

export namespace AssociatedRole {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociatedRole): any => ({
    ...obj,
  });
}

export interface GetAssociatedEnclaveCertificateIamRolesResult {
  /**
   * <p>Information about the associated IAM roles.</p>
   */
  AssociatedRoles?: AssociatedRole[];
}

export namespace GetAssociatedEnclaveCertificateIamRolesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAssociatedEnclaveCertificateIamRolesResult): any => ({
    ...obj,
  });
}

export interface GetAssociatedIpv6PoolCidrsRequest {
  /**
   * <p>The ID of the IPv6 address pool.</p>
   */
  PoolId: string | undefined;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace GetAssociatedIpv6PoolCidrsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAssociatedIpv6PoolCidrsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an IPv6 CIDR block association.</p>
 */
export interface Ipv6CidrAssociation {
  /**
   * <p>The IPv6 CIDR block.</p>
   */
  Ipv6Cidr?: string;

  /**
   * <p>The resource that's associated with the IPv6 CIDR block.</p>
   */
  AssociatedResource?: string;
}

export namespace Ipv6CidrAssociation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Ipv6CidrAssociation): any => ({
    ...obj,
  });
}

export interface GetAssociatedIpv6PoolCidrsResult {
  /**
   * <p>Information about the IPv6 CIDR block associations.</p>
   */
  Ipv6CidrAssociations?: Ipv6CidrAssociation[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace GetAssociatedIpv6PoolCidrsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAssociatedIpv6PoolCidrsResult): any => ({
    ...obj,
  });
}

export interface GetCapacityReservationUsageRequest {
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
   * 		       <p>Valid range: Minimum value of 1. Maximum value of 1000.</p>
   */
  MaxResults?: number;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace GetCapacityReservationUsageRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetCapacityReservationUsageRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the Capacity Reservation usage.</p>
 */
export interface InstanceUsage {
  /**
   * <p>The ID of the Amazon Web Services account that is making use of the Capacity Reservation.</p>
   */
  AccountId?: string;

  /**
   * <p>The number of instances the Amazon Web Services account currently has in the Capacity Reservation.</p>
   */
  UsedInstanceCount?: number;
}

export namespace InstanceUsage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InstanceUsage): any => ({
    ...obj,
  });
}

export interface GetCapacityReservationUsageResult {
  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>The ID of the Capacity Reservation.</p>
   */
  CapacityReservationId?: string;

  /**
   * <p>The type of instance for which the Capacity Reservation reserves capacity.</p>
   */
  InstanceType?: string;

  /**
   * <p>The number of instances for which the Capacity Reservation reserves capacity.</p>
   */
  TotalInstanceCount?: number;

  /**
   * <p>The remaining capacity. Indicates the number of instances that can be launched in the Capacity Reservation.</p>
   */
  AvailableInstanceCount?: number;

  /**
   * <p>The current state of the Capacity Reservation. A Capacity Reservation can be in one of the following states:</p>
   * 			      <ul>
   *             <li>
   *                <p>
   *                   <code>active</code> - The Capacity Reservation is active and the capacity is available for your use.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>expired</code> - The Capacity Reservation expired automatically at the date and time specified
   * 					in your request. The reserved capacity is no longer available for your use.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>cancelled</code> - The Capacity Reservation was cancelled. The reserved capacity is no
   * 					longer available for your use.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>pending</code> - The Capacity Reservation request was successful but the capacity
   * 					provisioning is still pending.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>failed</code> - The Capacity Reservation request has failed. A request might fail
   * 					due to invalid request parameters, capacity constraints, or instance limit constraints.
   * 					Failed requests are retained for 60 minutes.</p>
   *             </li>
   *          </ul>
   */
  State?: CapacityReservationState | string;

  /**
   * <p>Information about the Capacity Reservation usage.</p>
   */
  InstanceUsages?: InstanceUsage[];
}

export namespace GetCapacityReservationUsageResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetCapacityReservationUsageResult): any => ({
    ...obj,
  });
}

export interface GetCoipPoolUsageRequest {
  /**
   * <p>The ID of the address pool.</p>
   */
  PoolId: string | undefined;

  /**
   * <p>The filters. The following are the possible values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>coip-address-usage.allocation-id</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>coip-address-usage.aws-account-id</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>coip-address-usage.aws-service</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>coip-address-usage.co-ip</code>
   *                </p>
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

export namespace GetCoipPoolUsageRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetCoipPoolUsageRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes address usage for a customer-owned address pool.</p>
 */
export interface CoipAddressUsage {
  /**
   * <p>The allocation ID of the address.</p>
   */
  AllocationId?: string;

  /**
   * <p>The AWS account ID.</p>
   */
  AwsAccountId?: string;

  /**
   * <p>The AWS service.</p>
   */
  AwsService?: string;

  /**
   * <p>The customer-owned IP address.</p>
   */
  CoIp?: string;
}

export namespace CoipAddressUsage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CoipAddressUsage): any => ({
    ...obj,
  });
}

export interface GetCoipPoolUsageResult {
  /**
   * <p>The ID of the customer-owned address pool.</p>
   */
  CoipPoolId?: string;

  /**
   * <p>Information about the address usage.</p>
   */
  CoipAddressUsages?: CoipAddressUsage[];

  /**
   * <p>The ID of the local gateway route table.</p>
   */
  LocalGatewayRouteTableId?: string;
}

export namespace GetCoipPoolUsageResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetCoipPoolUsageResult): any => ({
    ...obj,
  });
}

export interface GetConsoleOutputRequest {
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

  /**
   * <p>When enabled, retrieves the latest console output for the instance.</p>
   *         <p>Default: disabled (<code>false</code>)</p>
   */
  Latest?: boolean;
}

export namespace GetConsoleOutputRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetConsoleOutputRequest): any => ({
    ...obj,
  });
}

export interface GetConsoleOutputResult {
  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId?: string;

  /**
   * <p>The console output, base64-encoded. If you are using a command line tool, the tool
   *             decodes the output for you.</p>
   */
  Output?: string;

  /**
   * <p>The time at which the output was last updated.</p>
   */
  Timestamp?: Date;
}

export namespace GetConsoleOutputResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetConsoleOutputResult): any => ({
    ...obj,
  });
}

export interface GetConsoleScreenshotRequest {
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

  /**
   * <p>When set to <code>true</code>, acts as keystroke input and wakes up an instance that's
   *             in standby or "sleep" mode.</p>
   */
  WakeUp?: boolean;
}

export namespace GetConsoleScreenshotRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetConsoleScreenshotRequest): any => ({
    ...obj,
  });
}

export interface GetConsoleScreenshotResult {
  /**
   * <p>The data that comprises the image.</p>
   */
  ImageData?: string;

  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId?: string;
}

export namespace GetConsoleScreenshotResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetConsoleScreenshotResult): any => ({
    ...obj,
  });
}

export type UnlimitedSupportedInstanceFamily = "t2" | "t3" | "t3a" | "t4g";

export interface GetDefaultCreditSpecificationRequest {
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
}

export namespace GetDefaultCreditSpecificationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDefaultCreditSpecificationRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the default credit option for CPU usage of a burstable performance instance family.</p>
 */
export interface InstanceFamilyCreditSpecification {
  /**
   * <p>The instance family.</p>
   */
  InstanceFamily?: UnlimitedSupportedInstanceFamily | string;

  /**
   * <p>The default credit option for CPU usage of the instance family. Valid values are <code>standard</code> and <code>unlimited</code>.</p>
   */
  CpuCredits?: string;
}

export namespace InstanceFamilyCreditSpecification {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InstanceFamilyCreditSpecification): any => ({
    ...obj,
  });
}

export interface GetDefaultCreditSpecificationResult {
  /**
   * <p>The default credit option for CPU usage of the instance family.</p>
   */
  InstanceFamilyCreditSpecification?: InstanceFamilyCreditSpecification;
}

export namespace GetDefaultCreditSpecificationResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDefaultCreditSpecificationResult): any => ({
    ...obj,
  });
}

export interface GetEbsDefaultKmsKeyIdRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace GetEbsDefaultKmsKeyIdRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetEbsDefaultKmsKeyIdRequest): any => ({
    ...obj,
  });
}

export interface GetEbsDefaultKmsKeyIdResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the default KMS key for encryption by default.</p>
   */
  KmsKeyId?: string;
}

export namespace GetEbsDefaultKmsKeyIdResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetEbsDefaultKmsKeyIdResult): any => ({
    ...obj,
  });
}

export interface GetEbsEncryptionByDefaultRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace GetEbsEncryptionByDefaultRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetEbsEncryptionByDefaultRequest): any => ({
    ...obj,
  });
}

export interface GetEbsEncryptionByDefaultResult {
  /**
   * <p>Indicates whether encryption by default is enabled.</p>
   */
  EbsEncryptionByDefault?: boolean;
}

export namespace GetEbsEncryptionByDefaultResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetEbsEncryptionByDefaultResult): any => ({
    ...obj,
  });
}

export enum PartitionLoadFrequency {
  DAILY = "daily",
  MONTHLY = "monthly",
  NONE = "none",
  WEEKLY = "weekly",
}

/**
 * <p>Describes integration options for Amazon Athena.</p>
 */
export interface AthenaIntegration {
  /**
   * <p>The location in Amazon S3 to store the generated CloudFormation template.</p>
   */
  IntegrationResultS3DestinationArn: string | undefined;

  /**
   * <p>The schedule for adding new partitions to the table.</p>
   */
  PartitionLoadFrequency: PartitionLoadFrequency | string | undefined;

  /**
   * <p>The start date for the partition.</p>
   */
  PartitionStartDate?: Date;

  /**
   * <p>The end date for the partition.</p>
   */
  PartitionEndDate?: Date;
}

export namespace AthenaIntegration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AthenaIntegration): any => ({
    ...obj,
  });
}

/**
 * <p>Describes service integrations with VPC Flow logs.</p>
 */
export interface IntegrateServices {
  /**
   * <p>Information about the integration with Amazon Athena.</p>
   */
  AthenaIntegrations?: AthenaIntegration[];
}

export namespace IntegrateServices {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IntegrateServices): any => ({
    ...obj,
  });
}

export interface GetFlowLogsIntegrationTemplateRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the flow log.</p>
   */
  FlowLogId: string | undefined;

  /**
   * <p>To store the CloudFormation template in Amazon S3, specify the location in Amazon S3.</p>
   */
  ConfigDeliveryS3DestinationArn: string | undefined;

  /**
   * <p>Information about the service integration.</p>
   */
  IntegrateServices: IntegrateServices | undefined;
}

export namespace GetFlowLogsIntegrationTemplateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetFlowLogsIntegrationTemplateRequest): any => ({
    ...obj,
  });
}

export interface GetFlowLogsIntegrationTemplateResult {
  /**
   * <p>The generated CloudFormation template.</p>
   */
  Result?: string;
}

export namespace GetFlowLogsIntegrationTemplateResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetFlowLogsIntegrationTemplateResult): any => ({
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
  /**
   * @internal
   */
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
   * <p>The ID of the Amazon Web Services account that owns the resource group.</p>
   */
  OwnerId?: string;
}

export namespace CapacityReservationGroup {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetReservedInstancesExchangeQuoteResult): any => ({
    ...obj,
  });
}

export interface GetSerialConsoleAccessStatusRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace GetSerialConsoleAccessStatusRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSerialConsoleAccessStatusRequest): any => ({
    ...obj,
  });
}

export interface GetSerialConsoleAccessStatusResult {
  /**
   * <p>If <code>true</code>, access to the EC2 serial console of all instances is enabled for
   * 			your account. If <code>false</code>, access to the EC2 serial console of all instances
   * 			is disabled for your account.</p>
   */
  SerialConsoleAccessEnabled?: boolean;
}

export namespace GetSerialConsoleAccessStatusResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSerialConsoleAccessStatusResult): any => ({
    ...obj,
  });
}

export interface GetSubnetCidrReservationsRequest {
  /**
   * <p>One or more filters.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>reservationType</code> - The type of reservation (<code>prefix</code> |
   *                     <code>explicit</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>subnet-id</code> - The ID of the subnet.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The ID of the subnet.</p>
   */
  SubnetId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;
}

export namespace GetSubnetCidrReservationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSubnetCidrReservationsRequest): any => ({
    ...obj,
  });
}

export interface GetSubnetCidrReservationsResult {
  /**
   * <p>Information about the IPv4 subnet CIDR reservations.</p>
   */
  SubnetIpv4CidrReservations?: SubnetCidrReservation[];

  /**
   * <p>Information about the IPv6 subnet CIDR reservations.</p>
   */
  SubnetIpv6CidrReservations?: SubnetCidrReservation[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace GetSubnetCidrReservationsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSubnetCidrReservationsResult): any => ({
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
   * <p> The ID of the Amazon Web Services account that owns the transit gateway multicast domain association resource.</p>
   */
  ResourceOwnerId?: string;

  /**
   * <p>The subnet associated with the transit gateway multicast domain.</p>
   */
  Subnet?: SubnetAssociation;
}

export namespace TransitGatewayMulticastDomainAssociation {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
   *                   <code>resource-type</code> - The resource type. Valid values are <code>vpc</code>
   *                     | <code>vpn</code> | <code>direct-connect-gateway</code> | <code>peering</code>
   *                     | <code>connect</code>.</p>
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
   *                   <code>resource-type</code> - The resource type. Valid values are <code>vpc</code>
   *                     | <code>vpn</code> | <code>direct-connect-gateway</code> | <code>peering</code>
   *                     | <code>connect</code>.</p>
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
   *          <p>Valid values: <code>OVA</code> | <code>VHD</code> | <code>VHDX</code> | <code>VMDK</code> | <code>RAW</code>
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
   * <p>Specifies whether the destination AMI of the imported image should be encrypted. The default KMS key for EBS is used
   *    unless you specify a non-default KMS key using <code>KmsKeyId</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html">Amazon EBS Encryption</a> in the
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
   * <p>An identifier for the symmetric KMS key to use when creating the
   *    encrypted AMI. This parameter is only required if you want to use a non-default KMS key; if this
   *    parameter is not specified, the default KMS key for EBS is used. If a <code>KmsKeyId</code> is
   *    specified, the <code>Encrypted</code> flag must also be set. </p>
   *          <p>The KMS key identifier may be provided in any of the following formats: </p>
   *          <ul>
   *             <li>
   *                <p>Key ID</p>
   *             </li>
   *             <li>
   *                <p>Key alias. The alias ARN contains the <code>arn:aws:kms</code> namespace, followed by the Region of the key, the Amazon Web Services account ID of the key owner, the <code>alias</code> namespace, and then the key alias. For example, arn:aws:kms:<i>us-east-1</i>:<i>012345678910</i>:alias/<i>ExampleAlias</i>.</p>
   *             </li>
   *             <li>
   *                <p>ARN using key ID. The ID ARN contains the <code>arn:aws:kms</code> namespace, followed by the Region of the key, the Amazon Web Services account ID of the key owner, the <code>key</code> namespace, and then the key ID. For example, arn:aws:kms:<i>us-east-1</i>:<i>012345678910</i>:key/<i>abcd1234-a123-456a-a12b-a123b4cd56ef</i>.</p>
   *             </li>
   *             <li>
   *                <p>ARN using key alias. The alias ARN contains the <code>arn:aws:kms</code> namespace, followed by the Region of the key, the Amazon Web Services account ID of the key owner, the <code>alias</code> namespace, and then the key alias. For example, arn:aws:kms:<i>us-east-1</i>:<i>012345678910</i>:alias/<i>ExampleAlias</i>. </p>
   *             </li>
   *          </ul>
   *          <p>Amazon Web Services parses <code>KmsKeyId</code> asynchronously, meaning that the action you call may appear to complete even
   *    though you provided an invalid identifier. This action will eventually report failure. </p>
   *          <p>The specified KMS key must exist in the Region that the AMI is being copied to.</p>
   *          <p>Amazon EBS does not support asymmetric KMS keys.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The license type to be used for the Amazon Machine Image (AMI) after importing.</p>
   *          <p>By default, we detect the source-system operating system (OS) and apply the appropriate license. Specify
   *    <code>AWS</code> to replace the source-system license with an Amazon Web Services license, if appropriate. Specify <code>BYOL</code>
   *    to retain the source-system license, if appropriate.</p>
   *          <p>To use <code>BYOL</code>, you must have existing licenses with rights to use these licenses in a third party
   *    cloud, such as Amazon Web Services. For more information, see <a href="https://docs.aws.amazon.com/vm-import/latest/userguide/vmimport-image-import.html#prerequisites-image">Prerequisites</a> in the
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
   * <p>The tags to apply to the import image task during creation.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>The usage operation value. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/billing-info-fields.html">AMI billing information fields</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  UsageOperation?: string;

  /**
   * <p>The boot mode of the virtual machine.</p>
   */
  BootMode?: BootModeValues | string;
}

export namespace ImportImageRequest {
  /**
   * @internal
   */
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
   * <p>The identifier for the symmetric KMS key that was used to create the encrypted AMI.</p>
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
   * <p>Any tags assigned to the import image task.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The usage operation value.</p>
   */
  UsageOperation?: string;
}

export namespace ImportImageResult {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DiskImage): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the user data for an instance.</p>
 */
export interface UserData {
  /**
   * <p>The user data. If you are using an Amazon Web Services SDK or command line tool, Base64-encoding is performed for you, and you
   *    can load the text from a file. Otherwise, you must provide Base64-encoded text.</p>
   */
  Data?: string;
}

export namespace UserData {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
   * <p>The key pair name that you provided.</p>
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
  /**
   * @internal
   */
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
   *          <p>Valid values: <code>VHD</code> | <code>VMDK</code> | <code>RAW</code>
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
  /**
   * @internal
   */
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
   * <p>Specifies whether the destination snapshot of the imported image should be encrypted. The default KMS key for EBS is
   *    used unless you specify a non-default KMS key using <code>KmsKeyId</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html">Amazon EBS Encryption</a> in the
   *     <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  Encrypted?: boolean;

  /**
   * <p>An identifier for the symmetric KMS key to use when creating the
   *    encrypted snapshot. This parameter is only required if you want to use a non-default KMS key; if this
   *    parameter is not specified, the default KMS key for EBS is used. If a <code>KmsKeyId</code> is
   *    specified, the <code>Encrypted</code> flag must also be set. </p>
   *          <p>The KMS key identifier may be provided in any of the following formats: </p>
   *          <ul>
   *             <li>
   *                <p>Key ID</p>
   *             </li>
   *             <li>
   *                <p>Key alias. The alias ARN contains the <code>arn:aws:kms</code> namespace, followed by the Region of the key, the Amazon Web Services account ID of the key owner, the <code>alias</code> namespace, and then the key alias. For example, arn:aws:kms:<i>us-east-1</i>:<i>012345678910</i>:alias/<i>ExampleAlias</i>.</p>
   *             </li>
   *             <li>
   *                <p>ARN using key ID. The ID ARN contains the <code>arn:aws:kms</code> namespace, followed by the Region of the key, the Amazon Web Services account ID of the key owner, the <code>key</code> namespace, and then the key ID. For example, arn:aws:kms:<i>us-east-1</i>:<i>012345678910</i>:key/<i>abcd1234-a123-456a-a12b-a123b4cd56ef</i>.</p>
   *             </li>
   *             <li>
   *                <p>ARN using key alias. The alias ARN contains the <code>arn:aws:kms</code> namespace, followed by the Region of the key, the Amazon Web Services account ID of the key owner, the <code>alias</code> namespace, and then the key alias. For example, arn:aws:kms:<i>us-east-1</i>:<i>012345678910</i>:alias/<i>ExampleAlias</i>. </p>
   *             </li>
   *          </ul>
   *          <p>Amazon Web Services parses <code>KmsKeyId</code> asynchronously, meaning that the action you call may appear to complete even
   *    though you provided an invalid identifier. This action will eventually report failure. </p>
   *          <p>The specified KMS key must exist in the Region that the snapshot is being copied to.</p>
   *          <p>Amazon EBS does not support asymmetric KMS keys.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The name of the role to use when not using the default role, 'vmimport'.</p>
   */
  RoleName?: string;

  /**
   * <p>The tags to apply to the import snapshot task during creation.</p>
   */
  TagSpecifications?: TagSpecification[];
}

export namespace ImportSnapshotRequest {
  /**
   * @internal
   */
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
   * <p>Any tags assigned to the import snapshot task.</p>
   */
  Tags?: Tag[];
}

export namespace ImportSnapshotResult {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ImportVolumeResult): any => ({
    ...obj,
  });
}

export interface ModifyAddressAttributeRequest {
  /**
   * <p>[EC2-VPC] The allocation ID.</p>
   */
  AllocationId: string | undefined;

  /**
   * <p>The domain name to modify for the IP address.</p>
   */
  DomainName?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace ModifyAddressAttributeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModifyAddressAttributeRequest): any => ({
    ...obj,
  });
}

export interface ModifyAddressAttributeResult {
  /**
   * <p>Information about the Elastic IP address.</p>
   */
  Address?: AddressAttribute;
}

export namespace ModifyAddressAttributeResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModifyAddressAttributeResult): any => ({
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
   * 	  	     <p>Valid range: 1 - 1000</p>
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
   * <p>Reserved. Capacity Reservations you have created are accepted by default.</p>
   */
  Accept?: boolean;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace ModifyCapacityReservationRequest {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModifyDefaultCreditSpecificationResult): any => ({
    ...obj,
  });
}

export interface ModifyEbsDefaultKmsKeyIdRequest {
  /**
   * <p>The identifier of the Key Management Service (KMS) KMS key to use for Amazon EBS encryption.
   *       If this parameter is not specified, your KMS key for Amazon EBS is used. If <code>KmsKeyId</code> is
   *       specified, the encrypted state must be <code>true</code>.</p>
   *          <p>You can specify the KMS key using any of the following:</p>
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
   *          <p>Amazon Web Services authenticates the KMS key asynchronously. Therefore, if you specify an ID, alias, or ARN that is not valid,
   *       the action can appear to complete, but eventually fails.</p>
   *          <p>Amazon EBS does not support asymmetric KMS keys.</p>
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModifyEbsDefaultKmsKeyIdRequest): any => ({
    ...obj,
  });
}

export interface ModifyEbsDefaultKmsKeyIdResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the default KMS key for encryption by default.</p>
   */
  KmsKeyId?: string;
}

export namespace ModifyEbsDefaultKmsKeyIdResult {
  /**
   * @internal
   */
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

  /**
   * <p>Reserved.</p>
   */
  Context?: string;
}

export namespace ModifyFleetRequest {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
   * 				Host recovery</a> in the <i>Amazon EC2 User Guide</i>.</p>
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InstanceBlockDeviceMappingSpecification): any => ({
    ...obj,
  });
}

export interface BlobAttributeValue {
  Value?: Uint8Array;
}

export namespace BlobAttributeValue {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BlobAttributeValue): any => ({
    ...obj,
  });
}

export interface ModifyInstanceAttributeRequest {
  /**
   * <p>Enable or disable source/destination checks, which ensure that the instance
   *             is either the source or the destination of any traffic that it receives.
   *             If the value is <code>true</code>, source/destination checks are enabled;
   *             otherwise, they are disabled. The default value is <code>true</code>.
   *             You must disable source/destination checks if the instance runs services
   *             such as network address translation, routing, or firewalls.</p>
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
   *             <i>Amazon EC2 User Guide</i>.</p>
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
   * <p>[EC2-VPC] Replaces the security groups of the instance with the specified security groups.
   *             You must specify at least one security group, even if it's just the default security group for the VPC. You must
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
   *             types</a> in the <i>Amazon EC2 User Guide</i>. If the instance type is not valid,
   *             the error returned is <code>InvalidInstanceAttributeValue</code>.</p>
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
   * <p>Changes the instance's user data to the specified value. If you are using an Amazon Web Services SDK
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModifyInstanceEventStartTimeResult): any => ({
    ...obj,
  });
}

export interface ModifyInstanceEventWindowRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The name of the event window.</p>
   */
  Name?: string;

  /**
   * <p>The ID of the event window.</p>
   */
  InstanceEventWindowId: string | undefined;

  /**
   * <p>The time ranges of the event window.</p>
   */
  TimeRanges?: InstanceEventWindowTimeRangeRequest[];

  /**
   * <p>The cron expression of the event window, for example, <code>* 0-4,20-23 * * 1,5</code>.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Only hour and day of the week values are supported.</p>
   *             </li>
   *             <li>
   *                <p>For day of the week values, you can specify either integers <code>0</code> through
   *                   <code>6</code>, or alternative single values <code>SUN</code> through
   *                   <code>SAT</code>.</p>
   *             </li>
   *             <li>
   *                <p>The minute, month, and year must be specified by <code>*</code>.</p>
   *             </li>
   *             <li>
   *                <p>The hour value must be one or a multiple range, for example, <code>0-4</code> or
   *                   <code>0-4,20-23</code>.</p>
   *             </li>
   *             <li>
   *                <p>Each hour range must be >= 2 hours, for example, <code>0-2</code> or
   *                   <code>20-23</code>.</p>
   *             </li>
   *             <li>
   *                <p>The event window must be >= 4 hours. The combined total time ranges in the event
   *                window must be >= 4 hours.</p>
   *             </li>
   *          </ul>
   *          <p>For more information about cron expressions, see <a href="https://en.wikipedia.org/wiki/Cron">cron</a> on the <i>Wikipedia
   *             website</i>.</p>
   */
  CronExpression?: string;
}

export namespace ModifyInstanceEventWindowRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModifyInstanceEventWindowRequest): any => ({
    ...obj,
  });
}

export interface ModifyInstanceEventWindowResult {
  /**
   * <p>Information about the event window.</p>
   */
  InstanceEventWindow?: InstanceEventWindow;
}

export namespace ModifyInstanceEventWindowResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModifyInstanceEventWindowResult): any => ({
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

  /**
   * <p>Enables or disables the IPv6 endpoint for the instance metadata service.</p>
   */
  HttpProtocolIpv6?: InstanceMetadataProtocolState | string;
}

export namespace ModifyInstanceMetadataOptionsRequest {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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

  /**
   * <p>The maximum number of entries for the prefix list. You cannot modify the entries
   *             of a prefix list and modify the size of a prefix list at the same time.</p>
   */
  MaxEntries?: number;
}

export namespace ModifyManagedPrefixListRequest {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
   * <p>Enable or disable source/destination checks, which ensure that the instance
   *             is either the source or the destination of any traffic that it receives.
   *             If the value is <code>true</code>, source/destination checks are enabled;
   *             otherwise, they are disabled. The default value is <code>true</code>.
   *             You must disable source/destination checks if the instance runs services
   *             such as network address translation, routing, or firewalls.</p>
   */
  SourceDestCheck?: AttributeBooleanValue;
}

export namespace ModifyNetworkInterfaceAttributeRequest {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModifyReservedInstancesResult): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a security group rule.</p>
 *         <p>You must specify exactly one of the following parameters, based on the rule type:</p>
 *         <ul>
 *             <li>
 *                <p>CidrIpv4</p>
 *             </li>
 *             <li>
 *                <p>CidrIpv6</p>
 *             </li>
 *             <li>
 *                <p>PrefixListId</p>
 *             </li>
 *             <li>
 *                <p>ReferencedGroupId</p>
 *             </li>
 *          </ul>
 *         <p>When you modify a rule, you cannot change the rule type. For example, if the rule
 *             uses an IPv4 address range, you must use <code>CidrIpv4</code> to specify a new IPv4
 *             address range.</p>
 */
export interface SecurityGroupRuleRequest {
  /**
   * <p>The IP protocol name (<code>tcp</code>, <code>udp</code>, <code>icmp</code>,
   *                 <code>icmpv6</code>) or number (see <a href="http://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml">Protocol Numbers</a>). </p>
   *         <p>Use <code>-1</code> to specify all protocols.</p>
   */
  IpProtocol?: string;

  /**
   * <p>The start of port range for the TCP and UDP protocols, or an ICMP/ICMPv6 type. A value of -1 indicates all ICMP/ICMPv6 types. If you specify all ICMP/ICMPv6 types, you must specify all codes.</p>
   */
  FromPort?: number;

  /**
   * <p>The end of port range for the TCP and UDP protocols, or an ICMP/ICMPv6 code. A value of <code>-1</code> indicates all ICMP/ICMPv6 codes. If you specify all ICMP/ICMPv6 types, you must specify all codes. </p>
   */
  ToPort?: number;

  /**
   * <p>The IPv4 CIDR range. To specify a single IPv4 address, use the /32 prefix length. </p>
   */
  CidrIpv4?: string;

  /**
   * <p>The IPv6 CIDR range. To specify a single IPv6 address, use the /128 prefix length.</p>
   */
  CidrIpv6?: string;

  /**
   * <p>The ID of the prefix list.</p>
   */
  PrefixListId?: string;

  /**
   * <p>The ID of the security group that is referenced in the security group rule.</p>
   */
  ReferencedGroupId?: string;

  /**
   * <p>The description of the security group rule.</p>
   */
  Description?: string;
}

export namespace SecurityGroupRuleRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SecurityGroupRuleRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an update to a security group rule.</p>
 */
export interface SecurityGroupRuleUpdate {
  /**
   * <p>The ID of the security group rule.</p>
   */
  SecurityGroupRuleId?: string;

  /**
   * <p>Information about the security group rule.</p>
   */
  SecurityGroupRule?: SecurityGroupRuleRequest;
}

export namespace SecurityGroupRuleUpdate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SecurityGroupRuleUpdate): any => ({
    ...obj,
  });
}

export interface ModifySecurityGroupRulesRequest {
  /**
   * <p>The ID of the security group.</p>
   */
  GroupId: string | undefined;

  /**
   * <p>Information about the security group properties to update.</p>
   */
  SecurityGroupRules: SecurityGroupRuleUpdate[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace ModifySecurityGroupRulesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModifySecurityGroupRulesRequest): any => ({
    ...obj,
  });
}

export interface ModifySecurityGroupRulesResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, returns an error.</p>
   */
  Return?: boolean;
}

export namespace ModifySecurityGroupRulesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModifySecurityGroupRulesResult): any => ({
    ...obj,
  });
}

/**
 * <p>Describes modifications to the list of create volume permissions for a volume.</p>
 */
export interface CreateVolumePermissionModifications {
  /**
   * <p>Adds the specified Amazon Web Services account ID or group to the list.</p>
   */
  Add?: CreateVolumePermission[];

  /**
   * <p>Removes the specified Amazon Web Services account ID or group from the list.</p>
   */
  Remove?: CreateVolumePermission[];
}

export namespace CreateVolumePermissionModifications {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModifySnapshotAttributeRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for ModifySpotFleetRequest.</p>
 */
export interface ModifySpotFleetRequestRequest {
  /**
   * <p>Indicates whether running Spot Instances should be terminated if the target capacity
   *             of the Spot Fleet request is decreased below the current size of the Spot Fleet.</p>
   */
  ExcessCapacityTerminationPolicy?: ExcessCapacityTerminationPolicy | string;

  /**
   * <p>The launch template and overrides. You can only use this parameter if you specified a
   *             launch template (<code>LaunchTemplateConfigs</code>) in your Spot Fleet request. If you
   *             specified <code>LaunchSpecifications</code> in your Spot Fleet request, then omit this
   *             parameter.</p>
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

  /**
   * <p>Reserved.</p>
   */
  Context?: string;
}

export namespace ModifySpotFleetRequestRequest {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModifyTrafficMirrorSessionResult): any => ({
    ...obj,
  });
}

/**
 * <p>The transit gateway options.</p>
 */
export interface ModifyTransitGatewayOptions {
  /**
   * <p>Adds IPv4 or IPv6 CIDR blocks for the transit gateway. Must be a size /24 CIDR block or larger for IPv4, or a size /64 CIDR block or larger for IPv6.</p>
   */
  AddTransitGatewayCidrBlocks?: string[];

  /**
   * <p>Removes CIDR blocks for the transit gateway.</p>
   */
  RemoveTransitGatewayCidrBlocks?: string[];

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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
   *       equal to the existing size of the volume.</p>
   *          <p>The following are the supported volumes sizes for each volume type:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>gp2</code> and <code>gp3</code>: 1-16,384</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>io1</code> and <code>io2</code>: 4-16,384</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>st1</code> and <code>sc1</code>: 125-16,384</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>standard</code>: 1-1,024</p>
   *             </li>
   *          </ul>
   *          <p>Default: The existing size is retained.</p>
   */
  Size?: number;

  /**
   * <p>The target EBS volume type of the volume. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSVolumeTypes.html">Amazon EBS volume types</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *          <p>Default: The existing type is retained.</p>
   */
  VolumeType?: VolumeType | string;

  /**
   * <p>The target IOPS rate of the volume. This parameter is valid only for <code>gp3</code>, <code>io1</code>, and <code>io2</code> volumes.</p>
   *          <p>The following are the supported values for each volume type:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>gp3</code>: 3,000-16,000 IOPS</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>io1</code>: 100-64,000 IOPS</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>io2</code>: 100-64,000 IOPS</p>
   *             </li>
   *          </ul>
   *          <p>Default: The existing value is retained if you keep the same volume type. If you change
   *       the volume type to <code>io1</code>, <code>io2</code>, or <code>gp3</code>, the default is 3,000.</p>
   */
  Iops?: number;

  /**
   * <p>The target throughput of the volume, in MiB/s. This parameter is valid only for <code>gp3</code> volumes.
   *       The maximum value is 1,000.</p>
   *          <p>Default: The existing value is retained if the source and target volume type is <code>gp3</code>.
   *       Otherwise, the default value is 125.</p>
   *   	      <p>Valid Range: Minimum value of 125. Maximum value of 1000.</p>
   */
  Throughput?: number;

  /**
   * <p>Specifies whether to enable Amazon EBS Multi-Attach. If you enable Multi-Attach, you can attach the
   * 		volume to up to 16 <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html#ec2-nitro-instances">
   * 			Nitro-based instances</a> in the same Availability Zone. This parameter is
   * 		supported with <code>io1</code> and <code>io2</code> volumes only. For more information, see
   * 		<a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-volumes-multi.html">
   * 			Amazon EBS Multi-Attach</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  MultiAttachEnabled?: boolean;
}

export namespace ModifyVolumeRequest {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PeeringConnectionOptionsRequest): any => ({
    ...obj,
  });
}
