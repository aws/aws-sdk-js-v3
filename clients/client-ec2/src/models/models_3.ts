// smithy-typescript generated code
import { SENSITIVE_STRING } from "@smithy/smithy-client";

import {
  _InstanceType,
  AccountAttribute,
  AccountAttributeName,
  ActiveInstance,
  Address,
  AddressAttribute,
  AddressAttributeName,
  AddressTransfer,
  AllocationState,
  AllowsMultipleInstanceTypes,
  AssociationStatus,
  AttachmentStatus,
  AutoPlacement,
  BundleTask,
  BundleTaskFilterSensitiveLog,
  ByoipCidr,
  CapacityReservation,
  CapacityReservationFleetState,
  CarrierGateway,
  ClientVpnAuthorizationRuleStatus,
  CurrencyCodeValues,
  FleetCapacityReservation,
  FleetCapacityReservationTenancy,
  FleetInstanceMatchCriteria,
  HostMaintenance,
  HostRecovery,
  IamInstanceProfileAssociation,
  InstanceEventWindow,
  Tag,
  TransitGatewayPeeringAttachment,
  TransitGatewayVpcAttachment,
  UnsuccessfulItem,
  VerifiedAccessInstance,
  VerifiedAccessTrustProvider,
  VerifiedAccessTrustProviderFilterSensitiveLog,
} from "./models_0";
import {
  AmdSevSnpSpecification,
  AttributeValue,
  BlockDeviceMapping,
  CapacityReservationPreference,
  CapacityReservationTargetResponse,
  ClientVpnAuthenticationType,
  ClientVpnEndpointStatus,
  ClientVpnRouteStatus,
  CoipPool,
  CustomerGateway,
  DefaultTargetCapacityType,
  DestinationFileFormat,
  DhcpOptions,
  DiskImageFormat,
  Ec2InstanceConnectEndpoint,
  EgressOnlyInternetGateway,
  ExportTask,
  FleetCapacityReservationUsageStrategy,
  FleetExcessCapacityTerminationPolicy,
  FleetLaunchTemplateOverrides,
  FleetLaunchTemplateSpecification,
  FleetOnDemandAllocationStrategy,
  FleetReplacementStrategy,
  FleetType,
  GroupIdentifier,
  InstanceLifecycle,
  LaunchTemplateAndOverridesResponse,
  LogDestinationType,
  PlatformValues,
  SpotAllocationStrategy,
  SpotInstanceInterruptionBehavior,
  StateReason,
  TargetCapacityUnitType,
  TrafficType,
  TransportProtocol,
} from "./models_1";
import {
  FleetStateCode,
  SubnetCidrReservation,
  TransitGateway,
  TransitGatewayConnect,
  TransitGatewayConnectPeer,
  TransitGatewayMulticastDomain,
  TransitGatewayPolicyTable,
  TransitGatewayPrefixListReference,
  TransitGatewayRoute,
  TransitGatewayRouteTable,
  TransitGatewayRouteTableAnnouncement,
  VerifiedAccessEndpoint,
  VerifiedAccessGroup,
} from "./models_2";

/**
 * @public
 * @enum
 */
export const DeleteQueuedReservedInstancesErrorCode = {
  RESERVED_INSTANCES_ID_INVALID: "reserved-instances-id-invalid",
  RESERVED_INSTANCES_NOT_IN_QUEUED_STATE: "reserved-instances-not-in-queued-state",
  UNEXPECTED_ERROR: "unexpected-error",
} as const;

/**
 * @public
 */
export type DeleteQueuedReservedInstancesErrorCode =
  (typeof DeleteQueuedReservedInstancesErrorCode)[keyof typeof DeleteQueuedReservedInstancesErrorCode];

/**
 * @public
 * <p>Describes the error for a Reserved Instance whose queued purchase could not be deleted.</p>
 */
export interface DeleteQueuedReservedInstancesError {
  /**
   * @public
   * <p>The error code.</p>
   */
  Code?: DeleteQueuedReservedInstancesErrorCode | string;

  /**
   * @public
   * <p>The error message.</p>
   */
  Message?: string;
}

/**
 * @public
 * <p>Describes a Reserved Instance whose queued purchase was not deleted.</p>
 */
export interface FailedQueuedPurchaseDeletion {
  /**
   * @public
   * <p>The error.</p>
   */
  Error?: DeleteQueuedReservedInstancesError;

  /**
   * @public
   * <p>The ID of the Reserved Instance.</p>
   */
  ReservedInstancesId?: string;
}

/**
 * @public
 * <p>Describes a Reserved Instance whose queued purchase was successfully deleted.</p>
 */
export interface SuccessfulQueuedPurchaseDeletion {
  /**
   * @public
   * <p>The ID of the Reserved Instance.</p>
   */
  ReservedInstancesId?: string;
}

/**
 * @public
 */
export interface DeleteQueuedReservedInstancesResult {
  /**
   * @public
   * <p>Information about the queued purchases that were successfully deleted.</p>
   */
  SuccessfulQueuedPurchaseDeletions?: SuccessfulQueuedPurchaseDeletion[];

  /**
   * @public
   * <p>Information about the queued purchases that could not be deleted.</p>
   */
  FailedQueuedPurchaseDeletions?: FailedQueuedPurchaseDeletion[];
}

/**
 * @public
 */
export interface DeleteRouteRequest {
  /**
   * @public
   * <p>The IPv4 CIDR range for the route. The value you specify must match the CIDR for the route exactly.</p>
   */
  DestinationCidrBlock?: string;

  /**
   * @public
   * <p>The IPv6 CIDR range for the route. The value you specify must match the CIDR for the route exactly.</p>
   */
  DestinationIpv6CidrBlock?: string;

  /**
   * @public
   * <p>The ID of the prefix list for the route.</p>
   */
  DestinationPrefixListId?: string;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The ID of the route table.</p>
   */
  RouteTableId: string | undefined;
}

/**
 * @public
 */
export interface DeleteRouteTableRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The ID of the route table.</p>
   */
  RouteTableId: string | undefined;
}

/**
 * @public
 */
export interface DeleteSecurityGroupRequest {
  /**
   * @public
   * <p>The ID of the security group.</p>
   */
  GroupId?: string;

  /**
   * @public
   * <p>[Default VPC] The name of the security group. You can specify either the
   *             security group name or the security group ID. For security groups in a nondefault VPC,
   *             you must specify the security group ID.</p>
   */
  GroupName?: string;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface DeleteSnapshotRequest {
  /**
   * @public
   * <p>The ID of the EBS snapshot.</p>
   */
  SnapshotId: string | undefined;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 * <p>Contains the parameters for DeleteSpotDatafeedSubscription.</p>
 */
export interface DeleteSpotDatafeedSubscriptionRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *             <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface DeleteSubnetRequest {
  /**
   * @public
   * <p>The ID of the subnet.</p>
   */
  SubnetId: string | undefined;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface DeleteSubnetCidrReservationRequest {
  /**
   * @public
   * <p>The ID of the subnet CIDR reservation.</p>
   */
  SubnetCidrReservationId: string | undefined;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface DeleteSubnetCidrReservationResult {
  /**
   * @public
   * <p>Information about the deleted subnet CIDR reservation.</p>
   */
  DeletedSubnetCidrReservation?: SubnetCidrReservation;
}

/**
 * @public
 */
export interface DeleteTagsRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The IDs of the resources, separated by spaces.</p>
   *          <p>Constraints: Up to 1000 resource IDs. We recommend breaking up this request into smaller batches.</p>
   */
  Resources: string[] | undefined;

  /**
   * @public
   * <p>The tags to delete. Specify a tag key and an optional tag value to delete
   *             specific tags. If you specify a tag key without a tag value, we delete any tag with this
   *             key regardless of its value. If you specify a tag key with an empty string as the tag
   *             value, we delete the tag only if its value is an empty string.</p>
   *          <p>If you omit this parameter, we delete all user-defined tags for the specified
   *             resources. We do not delete Amazon Web Services-generated tags (tags that have the <code>aws:</code>
   *             prefix).</p>
   *          <p>Constraints: Up to 1000 tags.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface DeleteTrafficMirrorFilterRequest {
  /**
   * @public
   * <p>The ID of the Traffic Mirror filter.</p>
   */
  TrafficMirrorFilterId: string | undefined;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface DeleteTrafficMirrorFilterResult {
  /**
   * @public
   * <p>The ID of the Traffic Mirror filter.</p>
   */
  TrafficMirrorFilterId?: string;
}

/**
 * @public
 */
export interface DeleteTrafficMirrorFilterRuleRequest {
  /**
   * @public
   * <p>The ID of the Traffic Mirror rule.</p>
   */
  TrafficMirrorFilterRuleId: string | undefined;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface DeleteTrafficMirrorFilterRuleResult {
  /**
   * @public
   * <p>The ID of the deleted Traffic Mirror rule.</p>
   */
  TrafficMirrorFilterRuleId?: string;
}

/**
 * @public
 */
export interface DeleteTrafficMirrorSessionRequest {
  /**
   * @public
   * <p>The ID of the Traffic Mirror session.</p>
   */
  TrafficMirrorSessionId: string | undefined;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface DeleteTrafficMirrorSessionResult {
  /**
   * @public
   * <p>The ID of the deleted Traffic Mirror session.</p>
   */
  TrafficMirrorSessionId?: string;
}

/**
 * @public
 */
export interface DeleteTrafficMirrorTargetRequest {
  /**
   * @public
   * <p>The ID of the Traffic Mirror target.</p>
   */
  TrafficMirrorTargetId: string | undefined;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface DeleteTrafficMirrorTargetResult {
  /**
   * @public
   * <p>The ID of the deleted Traffic Mirror target.</p>
   */
  TrafficMirrorTargetId?: string;
}

/**
 * @public
 */
export interface DeleteTransitGatewayRequest {
  /**
   * @public
   * <p>The ID of the transit gateway.</p>
   */
  TransitGatewayId: string | undefined;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface DeleteTransitGatewayResult {
  /**
   * @public
   * <p>Information about the deleted transit gateway.</p>
   */
  TransitGateway?: TransitGateway;
}

/**
 * @public
 */
export interface DeleteTransitGatewayConnectRequest {
  /**
   * @public
   * <p>The ID of the Connect attachment.</p>
   */
  TransitGatewayAttachmentId: string | undefined;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface DeleteTransitGatewayConnectResult {
  /**
   * @public
   * <p>Information about the deleted Connect attachment.</p>
   */
  TransitGatewayConnect?: TransitGatewayConnect;
}

/**
 * @public
 */
export interface DeleteTransitGatewayConnectPeerRequest {
  /**
   * @public
   * <p>The ID of the Connect peer.</p>
   */
  TransitGatewayConnectPeerId: string | undefined;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface DeleteTransitGatewayConnectPeerResult {
  /**
   * @public
   * <p>Information about the deleted Connect peer.</p>
   */
  TransitGatewayConnectPeer?: TransitGatewayConnectPeer;
}

/**
 * @public
 */
export interface DeleteTransitGatewayMulticastDomainRequest {
  /**
   * @public
   * <p>The ID of the transit gateway multicast domain.</p>
   */
  TransitGatewayMulticastDomainId: string | undefined;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface DeleteTransitGatewayMulticastDomainResult {
  /**
   * @public
   * <p>Information about the deleted transit gateway multicast domain.</p>
   */
  TransitGatewayMulticastDomain?: TransitGatewayMulticastDomain;
}

/**
 * @public
 */
export interface DeleteTransitGatewayPeeringAttachmentRequest {
  /**
   * @public
   * <p>The ID of the transit gateway peering attachment.</p>
   */
  TransitGatewayAttachmentId: string | undefined;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface DeleteTransitGatewayPeeringAttachmentResult {
  /**
   * @public
   * <p>The transit gateway peering attachment.</p>
   */
  TransitGatewayPeeringAttachment?: TransitGatewayPeeringAttachment;
}

/**
 * @public
 */
export interface DeleteTransitGatewayPolicyTableRequest {
  /**
   * @public
   * <p>The transit gateway policy table to delete.</p>
   */
  TransitGatewayPolicyTableId: string | undefined;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface DeleteTransitGatewayPolicyTableResult {
  /**
   * @public
   * <p>Provides details about the deleted transit gateway policy table.</p>
   */
  TransitGatewayPolicyTable?: TransitGatewayPolicyTable;
}

/**
 * @public
 */
export interface DeleteTransitGatewayPrefixListReferenceRequest {
  /**
   * @public
   * <p>The ID of the route table.</p>
   */
  TransitGatewayRouteTableId: string | undefined;

  /**
   * @public
   * <p>The ID of the prefix list.</p>
   */
  PrefixListId: string | undefined;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface DeleteTransitGatewayPrefixListReferenceResult {
  /**
   * @public
   * <p>Information about the deleted prefix list reference.</p>
   */
  TransitGatewayPrefixListReference?: TransitGatewayPrefixListReference;
}

/**
 * @public
 */
export interface DeleteTransitGatewayRouteRequest {
  /**
   * @public
   * <p>The ID of the transit gateway route table.</p>
   */
  TransitGatewayRouteTableId: string | undefined;

  /**
   * @public
   * <p>The CIDR range for the route. This must match the CIDR for the route exactly.</p>
   */
  DestinationCidrBlock: string | undefined;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface DeleteTransitGatewayRouteResult {
  /**
   * @public
   * <p>Information about the route.</p>
   */
  Route?: TransitGatewayRoute;
}

/**
 * @public
 */
export interface DeleteTransitGatewayRouteTableRequest {
  /**
   * @public
   * <p>The ID of the transit gateway route table.</p>
   */
  TransitGatewayRouteTableId: string | undefined;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface DeleteTransitGatewayRouteTableResult {
  /**
   * @public
   * <p>Information about the deleted transit gateway route table.</p>
   */
  TransitGatewayRouteTable?: TransitGatewayRouteTable;
}

/**
 * @public
 */
export interface DeleteTransitGatewayRouteTableAnnouncementRequest {
  /**
   * @public
   * <p>The transit gateway route table ID that's being deleted. </p>
   */
  TransitGatewayRouteTableAnnouncementId: string | undefined;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface DeleteTransitGatewayRouteTableAnnouncementResult {
  /**
   * @public
   * <p>Provides details about a deleted transit gateway route table.</p>
   */
  TransitGatewayRouteTableAnnouncement?: TransitGatewayRouteTableAnnouncement;
}

/**
 * @public
 */
export interface DeleteTransitGatewayVpcAttachmentRequest {
  /**
   * @public
   * <p>The ID of the attachment.</p>
   */
  TransitGatewayAttachmentId: string | undefined;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface DeleteTransitGatewayVpcAttachmentResult {
  /**
   * @public
   * <p>Information about the deleted VPC attachment.</p>
   */
  TransitGatewayVpcAttachment?: TransitGatewayVpcAttachment;
}

/**
 * @public
 */
export interface DeleteVerifiedAccessEndpointRequest {
  /**
   * @public
   * <p>The ID of the Verified Access endpoint.</p>
   */
  VerifiedAccessEndpointId: string | undefined;

  /**
   * @public
   * <p>A unique, case-sensitive token that you provide to ensure idempotency of your
   *             modification request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface DeleteVerifiedAccessEndpointResult {
  /**
   * @public
   * <p>The ID of the Verified Access endpoint.</p>
   */
  VerifiedAccessEndpoint?: VerifiedAccessEndpoint;
}

/**
 * @public
 */
export interface DeleteVerifiedAccessGroupRequest {
  /**
   * @public
   * <p>The ID of the Verified Access group.</p>
   */
  VerifiedAccessGroupId: string | undefined;

  /**
   * @public
   * <p>A unique, case-sensitive token that you provide to ensure idempotency of your
   *             modification request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface DeleteVerifiedAccessGroupResult {
  /**
   * @public
   * <p>The ID of the Verified Access group.</p>
   */
  VerifiedAccessGroup?: VerifiedAccessGroup;
}

/**
 * @public
 */
export interface DeleteVerifiedAccessInstanceRequest {
  /**
   * @public
   * <p>The ID of the Verified Access instance.</p>
   */
  VerifiedAccessInstanceId: string | undefined;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>A unique, case-sensitive token that you provide to ensure idempotency of your
   *             modification request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.</p>
   */
  ClientToken?: string;
}

/**
 * @public
 */
export interface DeleteVerifiedAccessInstanceResult {
  /**
   * @public
   * <p>The ID of the Verified Access instance.</p>
   */
  VerifiedAccessInstance?: VerifiedAccessInstance;
}

/**
 * @public
 */
export interface DeleteVerifiedAccessTrustProviderRequest {
  /**
   * @public
   * <p>The ID of the Verified Access trust provider.</p>
   */
  VerifiedAccessTrustProviderId: string | undefined;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>A unique, case-sensitive token that you provide to ensure idempotency of your
   *             modification request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.</p>
   */
  ClientToken?: string;
}

/**
 * @public
 */
export interface DeleteVerifiedAccessTrustProviderResult {
  /**
   * @public
   * <p>The ID of the Verified Access trust provider.</p>
   */
  VerifiedAccessTrustProvider?: VerifiedAccessTrustProvider;
}

/**
 * @public
 */
export interface DeleteVolumeRequest {
  /**
   * @public
   * <p>The ID of the volume.</p>
   */
  VolumeId: string | undefined;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface DeleteVpcRequest {
  /**
   * @public
   * <p>The ID of the VPC.</p>
   */
  VpcId: string | undefined;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface DeleteVpcEndpointConnectionNotificationsRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The IDs of the notifications.</p>
   */
  ConnectionNotificationIds: string[] | undefined;
}

/**
 * @public
 */
export interface DeleteVpcEndpointConnectionNotificationsResult {
  /**
   * @public
   * <p>Information about the notifications that could not be deleted
   *             successfully.</p>
   */
  Unsuccessful?: UnsuccessfulItem[];
}

/**
 * @public
 */
export interface DeleteVpcEndpointsRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The IDs of the VPC endpoints.</p>
   */
  VpcEndpointIds: string[] | undefined;
}

/**
 * @public
 */
export interface DeleteVpcEndpointsResult {
  /**
   * @public
   * <p>Information about the VPC endpoints that were not successfully deleted.</p>
   */
  Unsuccessful?: UnsuccessfulItem[];
}

/**
 * @public
 */
export interface DeleteVpcEndpointServiceConfigurationsRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The IDs of the services.</p>
   */
  ServiceIds: string[] | undefined;
}

/**
 * @public
 */
export interface DeleteVpcEndpointServiceConfigurationsResult {
  /**
   * @public
   * <p>Information about the service configurations that were not deleted, if
   *             applicable.</p>
   */
  Unsuccessful?: UnsuccessfulItem[];
}

/**
 * @public
 */
export interface DeleteVpcPeeringConnectionRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The ID of the VPC peering connection.</p>
   */
  VpcPeeringConnectionId: string | undefined;
}

/**
 * @public
 */
export interface DeleteVpcPeeringConnectionResult {
  /**
   * @public
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  Return?: boolean;
}

/**
 * @public
 * <p>Contains the parameters for DeleteVpnConnection.</p>
 */
export interface DeleteVpnConnectionRequest {
  /**
   * @public
   * <p>The ID of the VPN connection.</p>
   */
  VpnConnectionId: string | undefined;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 * <p>Contains the parameters for DeleteVpnConnectionRoute.</p>
 */
export interface DeleteVpnConnectionRouteRequest {
  /**
   * @public
   * <p>The CIDR block associated with the local subnet of the customer network.</p>
   */
  DestinationCidrBlock: string | undefined;

  /**
   * @public
   * <p>The ID of the VPN connection.</p>
   */
  VpnConnectionId: string | undefined;
}

/**
 * @public
 * <p>Contains the parameters for DeleteVpnGateway.</p>
 */
export interface DeleteVpnGatewayRequest {
  /**
   * @public
   * <p>The ID of the virtual private gateway.</p>
   */
  VpnGatewayId: string | undefined;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface DeprovisionByoipCidrRequest {
  /**
   * @public
   * <p>The address range, in CIDR notation. The prefix must be the same prefix
   *          that you specified when you provisioned the address range.</p>
   */
  Cidr: string | undefined;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface DeprovisionByoipCidrResult {
  /**
   * @public
   * <p>Information about the address range.</p>
   */
  ByoipCidr?: ByoipCidr;
}

/**
 * @public
 */
export interface DeprovisionIpamPoolCidrRequest {
  /**
   * @public
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The ID of the pool that has the CIDR you want to deprovision.</p>
   */
  IpamPoolId: string | undefined;

  /**
   * @public
   * <p>The CIDR which you want to deprovision from the pool.</p>
   */
  Cidr?: string;
}

/**
 * @public
 * @enum
 */
export const IpamPoolCidrFailureCode = {
  cidr_not_available: "cidr-not-available",
  limit_exceeded: "limit-exceeded",
} as const;

/**
 * @public
 */
export type IpamPoolCidrFailureCode = (typeof IpamPoolCidrFailureCode)[keyof typeof IpamPoolCidrFailureCode];

/**
 * @public
 * <p>Details related to why an IPAM pool CIDR failed to be provisioned.</p>
 */
export interface IpamPoolCidrFailureReason {
  /**
   * @public
   * <p>An error code related to why an IPAM pool CIDR failed to be provisioned.</p>
   */
  Code?: IpamPoolCidrFailureCode | string;

  /**
   * @public
   * <p>A message related to why an IPAM pool CIDR failed to be provisioned.</p>
   */
  Message?: string;
}

/**
 * @public
 * @enum
 */
export const IpamPoolCidrState = {
  deprovisioned: "deprovisioned",
  failed_deprovision: "failed-deprovision",
  failed_import: "failed-import",
  failed_provision: "failed-provision",
  pending_deprovision: "pending-deprovision",
  pending_import: "pending-import",
  pending_provision: "pending-provision",
  provisioned: "provisioned",
} as const;

/**
 * @public
 */
export type IpamPoolCidrState = (typeof IpamPoolCidrState)[keyof typeof IpamPoolCidrState];

/**
 * @public
 * <p>A CIDR provisioned to an IPAM pool.</p>
 */
export interface IpamPoolCidr {
  /**
   * @public
   * <p>The CIDR provisioned to the IPAM pool. A CIDR is a representation of an IP address and its associated network mask (or netmask)
   *          and refers to a range of IP addresses. An IPv4 CIDR example is <code>10.24.34.0/23</code>. An IPv6 CIDR example is <code>2001:DB8::/32</code>.</p>
   */
  Cidr?: string;

  /**
   * @public
   * <p>The state of the CIDR.</p>
   */
  State?: IpamPoolCidrState | string;

  /**
   * @public
   * <p>Details related to why an IPAM pool CIDR failed to be provisioned.</p>
   */
  FailureReason?: IpamPoolCidrFailureReason;

  /**
   * @public
   * <p>The IPAM pool CIDR ID.</p>
   */
  IpamPoolCidrId?: string;

  /**
   * @public
   * <p>The netmask length of the CIDR you'd like to provision to a pool. Can be used for provisioning Amazon-provided IPv6 CIDRs to top-level pools and for provisioning CIDRs to pools with source pools. Cannot be used to provision BYOIP CIDRs to top-level pools. "NetmaskLength" or "Cidr" is required.</p>
   */
  NetmaskLength?: number;
}

/**
 * @public
 */
export interface DeprovisionIpamPoolCidrResult {
  /**
   * @public
   * <p>The deprovisioned pool CIDR.</p>
   */
  IpamPoolCidr?: IpamPoolCidr;
}

/**
 * @public
 */
export interface DeprovisionPublicIpv4PoolCidrRequest {
  /**
   * @public
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The ID of the pool that you want to deprovision the CIDR from.</p>
   */
  PoolId: string | undefined;

  /**
   * @public
   * <p>The CIDR you want to deprovision from the pool. Enter the CIDR you want to deprovision with a netmask of <code>/32</code>. You must rerun this command for each IP address in the CIDR range. If your CIDR is a <code>/24</code>, you will have to run this command to deprovision each of the 256 IP addresses in the <code>/24</code> CIDR.</p>
   */
  Cidr: string | undefined;
}

/**
 * @public
 */
export interface DeprovisionPublicIpv4PoolCidrResult {
  /**
   * @public
   * <p>The ID of the pool that you deprovisioned the CIDR from.</p>
   */
  PoolId?: string;

  /**
   * @public
   * <p>The deprovisioned CIDRs.</p>
   */
  DeprovisionedAddresses?: string[];
}

/**
 * @public
 * <p>Contains the parameters for DeregisterImage.</p>
 */
export interface DeregisterImageRequest {
  /**
   * @public
   * <p>The ID of the AMI.</p>
   */
  ImageId: string | undefined;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   * 			and provides an error response. If you have the required permissions, the error response is
   * 			<code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 * <p>Information about the tag keys to deregister for the current Region. You can either specify
 *    		individual tag keys or deregister all tag keys in the current Region. You must specify either
 *    		<code>IncludeAllTagsOfInstance</code> or <code>InstanceTagKeys</code> in the request</p>
 */
export interface DeregisterInstanceTagAttributeRequest {
  /**
   * @public
   * <p>Indicates whether to deregister all tag keys in the current Region. Specify <code>false</code>
   *    		to deregister all tag keys.</p>
   */
  IncludeAllTagsOfInstance?: boolean;

  /**
   * @public
   * <p>Information about the tag keys to deregister.</p>
   */
  InstanceTagKeys?: string[];
}

/**
 * @public
 */
export interface DeregisterInstanceEventNotificationAttributesRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>Information about the tag keys to deregister.</p>
   */
  InstanceTagAttribute: DeregisterInstanceTagAttributeRequest | undefined;
}

/**
 * @public
 * <p>Describes the registered tag keys for the current Region.</p>
 */
export interface InstanceTagNotificationAttribute {
  /**
   * @public
   * <p>The registered tag keys.</p>
   */
  InstanceTagKeys?: string[];

  /**
   * @public
   * <p>Indicates wheter all tag keys in the current Region are registered to appear in scheduled event notifications.
   *       	<code>true</code> indicates that all tag keys in the current Region are registered.</p>
   */
  IncludeAllTagsOfInstance?: boolean;
}

/**
 * @public
 */
export interface DeregisterInstanceEventNotificationAttributesResult {
  /**
   * @public
   * <p>The resulting set of tag keys.</p>
   */
  InstanceTagAttribute?: InstanceTagNotificationAttribute;
}

/**
 * @public
 */
export interface DeregisterTransitGatewayMulticastGroupMembersRequest {
  /**
   * @public
   * <p>The ID of the transit gateway multicast domain.</p>
   */
  TransitGatewayMulticastDomainId?: string;

  /**
   * @public
   * <p>The IP address assigned to the  transit gateway multicast group.</p>
   */
  GroupIpAddress?: string;

  /**
   * @public
   * <p>The IDs of the group members' network interfaces.</p>
   */
  NetworkInterfaceIds?: string[];

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 * <p>Describes the deregistered  transit gateway multicast group members.</p>
 */
export interface TransitGatewayMulticastDeregisteredGroupMembers {
  /**
   * @public
   * <p>The ID of the transit gateway multicast domain.</p>
   */
  TransitGatewayMulticastDomainId?: string;

  /**
   * @public
   * <p>The network interface IDs of the deregistered members.</p>
   */
  DeregisteredNetworkInterfaceIds?: string[];

  /**
   * @public
   * <p>The IP address assigned to the  transit gateway multicast group.</p>
   */
  GroupIpAddress?: string;
}

/**
 * @public
 */
export interface DeregisterTransitGatewayMulticastGroupMembersResult {
  /**
   * @public
   * <p>Information about the deregistered members.</p>
   */
  DeregisteredMulticastGroupMembers?: TransitGatewayMulticastDeregisteredGroupMembers;
}

/**
 * @public
 */
export interface DeregisterTransitGatewayMulticastGroupSourcesRequest {
  /**
   * @public
   * <p>The ID of the transit gateway multicast domain.</p>
   */
  TransitGatewayMulticastDomainId?: string;

  /**
   * @public
   * <p>The IP address assigned to the  transit gateway multicast group.</p>
   */
  GroupIpAddress?: string;

  /**
   * @public
   * <p>The IDs of the group sources' network interfaces.</p>
   */
  NetworkInterfaceIds?: string[];

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 * <p>Describes the deregistered  transit gateway multicast group sources.</p>
 */
export interface TransitGatewayMulticastDeregisteredGroupSources {
  /**
   * @public
   * <p>The ID of the transit gateway multicast domain.</p>
   */
  TransitGatewayMulticastDomainId?: string;

  /**
   * @public
   * <p>The network interface IDs of the non-registered members.</p>
   */
  DeregisteredNetworkInterfaceIds?: string[];

  /**
   * @public
   * <p>The IP address assigned to the  transit gateway multicast group.</p>
   */
  GroupIpAddress?: string;
}

/**
 * @public
 */
export interface DeregisterTransitGatewayMulticastGroupSourcesResult {
  /**
   * @public
   * <p>Information about the deregistered group sources.</p>
   */
  DeregisteredMulticastGroupSources?: TransitGatewayMulticastDeregisteredGroupSources;
}

/**
 * @public
 */
export interface DescribeAccountAttributesRequest {
  /**
   * @public
   * <p>The account attribute names.</p>
   */
  AttributeNames?: (AccountAttributeName | string)[];

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *            and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *            Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface DescribeAccountAttributesResult {
  /**
   * @public
   * <p>Information about the account attributes.</p>
   */
  AccountAttributes?: AccountAttribute[];
}

/**
 * @public
 * <p>A filter name and value pair that is used to return a more specific list of results from a describe operation.
 *          Filters can be used to match a set of resources by specific criteria, such as tags, attributes, or IDs.</p>
 *          <p>If you specify multiple filters, the filters are joined with an <code>AND</code>, and the request returns only
 *            results that match all of the specified filters.</p>
 */
export interface Filter {
  /**
   * @public
   * <p>The name of the filter. Filter names are case-sensitive.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The filter values. Filter values are case-sensitive. If you specify multiple values for a
   *          filter, the values are joined with an <code>OR</code>, and the request returns all results
   *          that match any of the specified values.</p>
   */
  Values?: string[];
}

/**
 * @public
 */
export interface DescribeAddressesRequest {
  /**
   * @public
   * <p>One or more filters. Filter names and values are case-sensitive.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>allocation-id</code> - The allocation ID for the address.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>association-id</code> - The association ID for the address.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-id</code> - The ID of the instance the address is associated with, if any.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-border-group</code> -  A unique set of Availability Zones, Local Zones,
   *            or Wavelength Zones from where Amazon Web Services advertises IP addresses. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface-id</code> - The ID of the network interface that the address is associated with, if any.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface-owner-id</code> - The Amazon Web Services account ID of the owner.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>private-ip-address</code> - The private IP address associated with the Elastic IP address.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>public-ip</code> - The Elastic IP address, or the carrier IP address.</p>
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
   * @public
   * <p>One or more Elastic IP addresses.</p>
   *          <p>Default: Describes all your Elastic IP addresses.</p>
   */
  PublicIps?: string[];

  /**
   * @public
   * <p>Information about the allocation IDs.</p>
   */
  AllocationIds?: string[];

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface DescribeAddressesResult {
  /**
   * @public
   * <p>Information about the Elastic IP addresses.</p>
   */
  Addresses?: Address[];
}

/**
 * @public
 */
export interface DescribeAddressesAttributeRequest {
  /**
   * @public
   * <p>[EC2-VPC] The allocation IDs.</p>
   */
  AllocationIds?: string[];

  /**
   * @public
   * <p>The attribute of the IP address.</p>
   */
  Attribute?: AddressAttributeName | string;

  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface DescribeAddressesAttributeResult {
  /**
   * @public
   * <p>Information about the IP addresses.</p>
   */
  Addresses?: AddressAttribute[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeAddressTransfersRequest {
  /**
   * @public
   * <p>The allocation IDs of Elastic IP addresses.</p>
   */
  AllocationIds?: string[];

  /**
   * @public
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of address transfers to return in one page of results.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface DescribeAddressTransfersResult {
  /**
   * @public
   * <p>The Elastic IP address transfer.</p>
   */
  AddressTransfers?: AddressTransfer[];

  /**
   * @public
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeAggregateIdFormatRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 * <p>Describes the ID format for a resource.</p>
 */
export interface IdFormat {
  /**
   * @public
   * <p>The date in UTC at which you are permanently switched over to using longer IDs. If a deadline is not yet available for this resource type, this field is not returned.</p>
   */
  Deadline?: Date;

  /**
   * @public
   * <p>The type of resource.</p>
   */
  Resource?: string;

  /**
   * @public
   * <p>Indicates whether longer IDs (17-character IDs) are enabled for the resource.</p>
   */
  UseLongIds?: boolean;
}

/**
 * @public
 */
export interface DescribeAggregateIdFormatResult {
  /**
   * @public
   * <p>Indicates whether all resource types in the Region are configured to use longer IDs.
   *             This value is only <code>true</code> if all users are configured to use longer IDs for
   *             all resources types in the Region.</p>
   */
  UseLongIdsAggregated?: boolean;

  /**
   * @public
   * <p>Information about each resource's ID format.</p>
   */
  Statuses?: IdFormat[];
}

/**
 * @public
 */
export interface DescribeAvailabilityZonesRequest {
  /**
   * @public
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>group-name</code> - For Availability Zones, use the Region name. For Local
   *           Zones, use the name of the group associated with the Local Zone (for example,
   *             <code>us-west-2-lax-1</code>) For Wavelength Zones, use the name of the group associated
   *           with the Wavelength Zone (for example, <code>us-east-1-wl1-bos-wlz-1</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>message</code> - The Zone message.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>opt-in-status</code> - The opt-in status (<code>opted-in</code> |
   *             <code>not-opted-in</code> | <code>opt-in-not-required</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>parent-zoneID</code> - The ID of the zone that handles some of the Local Zone
   *           and Wavelength Zone control plane operations, such as API calls.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>parent-zoneName</code> - The ID of the zone that handles some of the Local Zone
   *           and Wavelength Zone control plane operations, such as API calls.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>region-name</code> - The name of the Region for the Zone (for example,
   *             <code>us-east-1</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the Availability Zone, the Local Zone, or the
   *           Wavelength Zone (<code>available</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>zone-id</code> - The ID of the Availability Zone (for example,
   *             <code>use1-az1</code>), the Local Zone (for example, <code>usw2-lax1-az1</code>), or the
   *           Wavelength Zone (for example, <code>us-east-1-wl1-bos-wlz-1</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>zone-name</code> - The name of the Availability Zone (for example,
   *             <code>us-east-1a</code>), the Local Zone (for example, <code>us-west-2-lax-1a</code>), or
   *           the Wavelength Zone (for example, <code>us-east-1-wl1-bos-wlz-1</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>zone-type</code> - The type of zone (<code>availability-zone</code> |
   *           <code>local-zone</code> | <code>wavelength-zone</code>).</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>The names of the Availability Zones, Local Zones, and Wavelength Zones.</p>
   */
  ZoneNames?: string[];

  /**
   * @public
   * <p>The IDs of the Availability Zones, Local Zones, and Wavelength Zones.</p>
   */
  ZoneIds?: string[];

  /**
   * @public
   * <p>Include all Availability Zones, Local Zones, and Wavelength Zones regardless of your
   *       opt-in status.</p>
   *          <p>If you do not use this parameter, the results include only the zones for the Regions where you have chosen the option to opt in.</p>
   */
  AllAvailabilityZones?: boolean;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 * <p>Describes a message about an Availability Zone, Local Zone, or Wavelength Zone.</p>
 */
export interface AvailabilityZoneMessage {
  /**
   * @public
   * <p>The message about the Availability Zone, Local Zone, or Wavelength Zone.</p>
   */
  Message?: string;
}

/**
 * @public
 * @enum
 */
export const AvailabilityZoneOptInStatus = {
  not_opted_in: "not-opted-in",
  opt_in_not_required: "opt-in-not-required",
  opted_in: "opted-in",
} as const;

/**
 * @public
 */
export type AvailabilityZoneOptInStatus =
  (typeof AvailabilityZoneOptInStatus)[keyof typeof AvailabilityZoneOptInStatus];

/**
 * @public
 * @enum
 */
export const AvailabilityZoneState = {
  available: "available",
  impaired: "impaired",
  information: "information",
  unavailable: "unavailable",
} as const;

/**
 * @public
 */
export type AvailabilityZoneState = (typeof AvailabilityZoneState)[keyof typeof AvailabilityZoneState];

/**
 * @public
 * <p>Describes Availability Zones, Local Zones, and Wavelength Zones.</p>
 */
export interface AvailabilityZone {
  /**
   * @public
   * <p>The state of the Availability Zone, Local Zone, or Wavelength Zone. This value is always
   *         <code>available</code>.</p>
   */
  State?: AvailabilityZoneState | string;

  /**
   * @public
   * <p>For Availability Zones, this parameter always has the value of
   *         <code>opt-in-not-required</code>.</p>
   *          <p>For Local Zones and Wavelength Zones, this parameter is the opt-in status. The possible
   *       values are <code>opted-in</code>, and <code>not-opted-in</code>.</p>
   */
  OptInStatus?: AvailabilityZoneOptInStatus | string;

  /**
   * @public
   * <p>Any messages about the Availability Zone, Local Zone, or Wavelength Zone.</p>
   */
  Messages?: AvailabilityZoneMessage[];

  /**
   * @public
   * <p>The name of the Region.</p>
   */
  RegionName?: string;

  /**
   * @public
   * <p>The name of the Availability Zone, Local Zone, or Wavelength Zone.</p>
   */
  ZoneName?: string;

  /**
   * @public
   * <p>The ID of the Availability Zone, Local Zone, or Wavelength Zone.</p>
   */
  ZoneId?: string;

  /**
   * @public
   * <p> For Availability Zones, this parameter has the same value as the Region name.</p>
   *          <p>For Local Zones, the name of the associated group, for example
   *         <code>us-west-2-lax-1</code>.</p>
   *          <p>For Wavelength Zones, the name of the associated group, for example
   *         <code>us-east-1-wl1-bos-wlz-1</code>.</p>
   */
  GroupName?: string;

  /**
   * @public
   * <p>The name of the network border group.</p>
   */
  NetworkBorderGroup?: string;

  /**
   * @public
   * <p>The type of zone. The valid values are <code>availability-zone</code>,
   *         <code>local-zone</code>, and <code>wavelength-zone</code>.</p>
   */
  ZoneType?: string;

  /**
   * @public
   * <p>The name of the zone that handles some of the Local Zone or Wavelength Zone control plane
   *       operations, such as API calls.</p>
   */
  ParentZoneName?: string;

  /**
   * @public
   * <p>The ID of the zone that handles some of the Local Zone or Wavelength Zone control plane
   *       operations, such as API calls.</p>
   */
  ParentZoneId?: string;
}

/**
 * @public
 */
export interface DescribeAvailabilityZonesResult {
  /**
   * @public
   * <p>Information about the Availability Zones, Local Zones, and Wavelength Zones.</p>
   */
  AvailabilityZones?: AvailabilityZone[];
}

/**
 * @public
 */
export interface DescribeAwsNetworkPerformanceMetricSubscriptionsRequest {
  /**
   * @public
   * <p>The maximum number of results to return with a single call.
   *    To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>One or more filters.</p>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 * @enum
 */
export const MetricType = {
  aggregate_latency: "aggregate-latency",
} as const;

/**
 * @public
 */
export type MetricType = (typeof MetricType)[keyof typeof MetricType];

/**
 * @public
 * @enum
 */
export const PeriodType = {
  fifteen_minutes: "fifteen-minutes",
  five_minutes: "five-minutes",
  one_day: "one-day",
  one_hour: "one-hour",
  one_week: "one-week",
  three_hours: "three-hours",
} as const;

/**
 * @public
 */
export type PeriodType = (typeof PeriodType)[keyof typeof PeriodType];

/**
 * @public
 * @enum
 */
export const StatisticType = {
  p50: "p50",
} as const;

/**
 * @public
 */
export type StatisticType = (typeof StatisticType)[keyof typeof StatisticType];

/**
 * @public
 * <p>Describes an Infrastructure Performance subscription.</p>
 */
export interface Subscription {
  /**
   * @public
   * <p>The Region or Availability Zone that's the source for the subscription. For example, <code>us-east-1</code>.</p>
   */
  Source?: string;

  /**
   * @public
   * <p>The Region or Availability Zone that's the target for the subscription. For example, <code>eu-west-1</code>.</p>
   */
  Destination?: string;

  /**
   * @public
   * <p>The metric used for the subscription.</p>
   */
  Metric?: MetricType | string;

  /**
   * @public
   * <p>The statistic used for the subscription.</p>
   */
  Statistic?: StatisticType | string;

  /**
   * @public
   * <p>The data aggregation time for the subscription.</p>
   */
  Period?: PeriodType | string;
}

/**
 * @public
 */
export interface DescribeAwsNetworkPerformanceMetricSubscriptionsResult {
  /**
   * @public
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Describes the current Infrastructure Performance subscriptions.</p>
   */
  Subscriptions?: Subscription[];
}

/**
 * @public
 */
export interface DescribeBundleTasksRequest {
  /**
   * @public
   * <p>The bundle task IDs.</p>
   *          <p>Default: Describes all your bundle tasks.</p>
   */
  BundleIds?: string[];

  /**
   * @public
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>bundle-id</code> - The ID of the bundle task.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>error-code</code> - If the task failed, the error code returned.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>error-message</code> - If the task failed, the error message returned.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-id</code> - The ID of the instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>progress</code> - The level of task completion, as a percentage (for example, 20%).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>s3-bucket</code> - The Amazon S3 bucket to store the AMI.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>s3-prefix</code> - The beginning of the AMI name.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>start-time</code> - The time the task started (for example, 2013-09-15T17:15:20.000Z).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the task (<code>pending</code> | <code>waiting-for-shutdown</code> | <code>bundling</code> |
   *            <code>storing</code> | <code>cancelling</code> | <code>complete</code> | <code>failed</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>update-time</code> - The time of the most recent update for the task.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   * 			and provides an error response. If you have the required permissions, the error response is
   * 			<code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface DescribeBundleTasksResult {
  /**
   * @public
   * <p>Information about the bundle tasks.</p>
   */
  BundleTasks?: BundleTask[];
}

/**
 * @public
 */
export interface DescribeByoipCidrsRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults: number | undefined;

  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeByoipCidrsResult {
  /**
   * @public
   * <p>Information about your address ranges.</p>
   */
  ByoipCidrs?: ByoipCidr[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeCapacityReservationFleetsRequest {
  /**
   * @public
   * <p>The IDs of the Capacity Reservation Fleets to describe.</p>
   */
  CapacityReservationFleetIds?: string[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return for the request in a single page. The remaining results can be seen by sending another request with the returned <code>nextToken</code> value. This value can be between 5 and 500. If <code>maxResults</code> is given a larger value than 500, you receive an error.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the Fleet (<code>submitted</code> | <code>modifying</code> | <code>active</code> |
   * 					<code>partially_fulfilled</code> | <code>expiring</code> | <code>expired</code> | <code>cancelling</code> |
   * 					<code>cancelled</code> | <code>failed</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-match-criteria</code> - The instance matching criteria for the Fleet. Only <code>open</code> is supported.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tenancy</code> - The tenancy of the Fleet (<code>default</code> | <code>dedicated</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>allocation-strategy</code> - The allocation strategy used by the Fleet. Only <code>prioritized</code> is supported.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 * <p>Information about a Capacity Reservation Fleet.</p>
 */
export interface CapacityReservationFleet {
  /**
   * @public
   * <p>The ID of the Capacity Reservation Fleet.</p>
   */
  CapacityReservationFleetId?: string;

  /**
   * @public
   * <p>The ARN of the Capacity Reservation Fleet.</p>
   */
  CapacityReservationFleetArn?: string;

  /**
   * @public
   * <p>The state of the Capacity Reservation Fleet. Possible states include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>submitted</code> - The Capacity Reservation Fleet request has been submitted
   * 					and Amazon Elastic Compute Cloud is preparing to create the Capacity Reservations.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>modifying</code> - The Capacity Reservation Fleet is being modified. The Fleet
   * 					remains in this state until the modification is complete.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>active</code> - The Capacity Reservation Fleet has fulfilled its total target
   * 					capacity and it is attempting to maintain this capacity. The Fleet remains in this
   * 					state until it is modified or deleted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>partially_fulfilled</code> - The Capacity Reservation Fleet has partially
   * 					fulfilled its total target capacity. There is insufficient Amazon EC2 to
   * 					fulfill the total target capacity. The Fleet is attempting to asynchronously fulfill
   * 					its total target capacity.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>expiring</code> - The Capacity Reservation Fleet has reach its end date and it
   * 					is in the process of expiring. One or more of its Capacity reservations might still
   * 					be active.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>expired</code> - The Capacity Reservation Fleet has reach its end date. The Fleet
   * 					and its Capacity Reservations are expired. The Fleet can't create new Capacity
   * 					Reservations.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>cancelling</code> - The Capacity Reservation Fleet is in the process of being
   * 					cancelled. One or more of its Capacity reservations might still be active.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>cancelled</code> - The Capacity Reservation Fleet has been manually cancelled.
   * 					The Fleet and its Capacity Reservations are cancelled and the Fleet can't create new
   * 					Capacity Reservations.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>failed</code> - The Capacity Reservation Fleet failed to reserve capacity for
   * 					the specified instance types.</p>
   *             </li>
   *          </ul>
   */
  State?: CapacityReservationFleetState | string;

  /**
   * @public
   * <p>The total number of capacity units for which the Capacity Reservation Fleet reserves capacity.
   * 			For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/crfleet-concepts.html#target-capacity">Total target capacity</a>
   * 			in the Amazon EC2 User Guide.</p>
   */
  TotalTargetCapacity?: number;

  /**
   * @public
   * <p>The capacity units that have been fulfilled.</p>
   */
  TotalFulfilledCapacity?: number;

  /**
   * @public
   * <p>The tenancy of the Capacity Reservation Fleet. Tenancies include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>default</code> - The Capacity Reservation Fleet is created on hardware that is
   * 					shared with other Amazon Web Services accounts.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>dedicated</code> - The Capacity Reservation Fleet is created on single-tenant
   * 					hardware that is dedicated to a single Amazon Web Services account.</p>
   *             </li>
   *          </ul>
   */
  Tenancy?: FleetCapacityReservationTenancy | string;

  /**
   * @public
   * <p>The date and time at which the Capacity Reservation Fleet expires.</p>
   */
  EndDate?: Date;

  /**
   * @public
   * <p>The date and time at which the Capacity Reservation Fleet was created.</p>
   */
  CreateTime?: Date;

  /**
   * @public
   * <p>Indicates the type of instance launches that the Capacity Reservation Fleet accepts. All
   * 			Capacity Reservations in the Fleet inherit this instance matching criteria.</p>
   *          <p>Currently, Capacity Reservation Fleets support <code>open</code> instance matching criteria
   * 			only. This means that instances that have matching attributes (instance type, platform, and
   * 			Availability Zone) run in the Capacity Reservations automatically. Instances do not need to
   * 			explicitly target a Capacity Reservation Fleet to use its reserved capacity.</p>
   */
  InstanceMatchCriteria?: FleetInstanceMatchCriteria | string;

  /**
   * @public
   * <p>The strategy used by the Capacity Reservation Fleet to determine which of the specified
   * 			instance types to use. For more information, see For more information, see
   * 			<a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/crfleet-concepts.html#allocation-strategy">
   * 				Allocation strategy</a> in the Amazon EC2 User Guide.</p>
   */
  AllocationStrategy?: string;

  /**
   * @public
   * <p>Information about the instance types for which to reserve the capacity.</p>
   */
  InstanceTypeSpecifications?: FleetCapacityReservation[];

  /**
   * @public
   * <p>The tags assigned to the Capacity Reservation Fleet.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface DescribeCapacityReservationFleetsResult {
  /**
   * @public
   * <p>Information about the Capacity Reservation Fleets.</p>
   */
  CapacityReservationFleets?: CapacityReservationFleet[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeCapacityReservationsRequest {
  /**
   * @public
   * <p>The ID of the Capacity Reservation.</p>
   */
  CapacityReservationIds?: string[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return for the request in a single page. The remaining results can be seen by sending another request with the returned <code>nextToken</code> value. This value can be between 5 and 500. If <code>maxResults</code> is given a larger value than 500, you receive an error.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>instance-type</code> - The type of instance for which the Capacity Reservation reserves capacity.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>owner-id</code> - The ID of the Amazon Web Services account that owns the Capacity Reservation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-platform</code> - The type of operating system for which the Capacity Reservation reserves capacity.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>availability-zone</code> - The Availability Zone of the Capacity Reservation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tenancy</code> - Indicates the tenancy of the Capacity Reservation. A Capacity Reservation can have one of the
   * 	  			following tenancy settings:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>default</code> - The Capacity Reservation is created on hardware that is shared with other Amazon Web Services accounts.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>dedicated</code> - The Capacity Reservation is created on single-tenant hardware that is dedicated to a single Amazon Web Services account.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>outpost-arn</code> - The Amazon Resource Name (ARN) of the Outpost on which the Capacity Reservation was created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The current state of the Capacity Reservation. A Capacity Reservation can be in one of the following states:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>active</code>- The Capacity Reservation is active and the capacity is available for your use.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>expired</code> - The Capacity Reservation expired automatically at the date and time specified in your request.
   * 	  				The reserved capacity is no longer available for your use.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>cancelled</code> - The Capacity Reservation was cancelled. The reserved capacity is no longer available for your use.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>pending</code> - The Capacity Reservation request was successful but the capacity provisioning is still pending.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>failed</code> - The Capacity Reservation request has failed. A request might fail due to invalid request parameters,
   * 	  				capacity constraints, or instance limit constraints. Failed requests are retained for 60 minutes.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>start-date</code> - The date and time at which the Capacity Reservation was started.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>end-date</code> - The date and time at which the Capacity Reservation expires. When a Capacity Reservation expires, the reserved capacity is
   * 	  			released and you can no longer launch instances into it. The Capacity Reservation's state changes to expired when it reaches its end date and time.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>end-date-type</code> - Indicates the way in which the Capacity Reservation ends. A Capacity Reservation can have one of the following end types:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>unlimited</code> - The Capacity Reservation remains active until you explicitly cancel it.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>limited</code> - The Capacity Reservation expires automatically at a specified date and time.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-match-criteria</code> - Indicates the type of instance launches that the Capacity Reservation accepts. The options include:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>open</code> - The Capacity Reservation accepts all instances that have matching
   * 							attributes (instance type, platform, and Availability Zone). Instances
   * 							that have matching attributes launch into the Capacity Reservation
   * 							automatically without specifying any additional parameters.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>targeted</code> - The Capacity Reservation only accepts instances that have matching
   * 							attributes (instance type, platform, and Availability Zone), and
   * 							explicitly target the Capacity Reservation. This ensures that only
   * 							permitted instances can use the reserved capacity.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>placement-group-arn</code> - The ARN of the cluster placement group in which the Capacity Reservation was created.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface DescribeCapacityReservationsResult {
  /**
   * @public
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Information about the Capacity Reservations.</p>
   */
  CapacityReservations?: CapacityReservation[];
}

/**
 * @public
 */
export interface DescribeCarrierGatewaysRequest {
  /**
   * @public
   * <p>One or more carrier gateway IDs.</p>
   */
  CarrierGatewayIds?: string[];

  /**
   * @public
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>carrier-gateway-id</code> - The ID of the carrier gateway.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the carrier gateway (<code>pending</code> |
   *                     <code>failed</code> | <code>available</code> | <code>deleting</code> | <code>deleted</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>owner-id</code> - The Amazon Web Services account ID of the owner of the carrier gateway.</p>
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
   *                   <code>vpc-id</code> - The ID of the VPC associated with the carrier gateway.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface DescribeCarrierGatewaysResult {
  /**
   * @public
   * <p>Information about the carrier gateway.</p>
   */
  CarrierGateways?: CarrierGateway[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeClassicLinkInstancesRequest {
  /**
   * @public
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>group-id</code> - The ID of a VPC security group that's associated with the instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-id</code> - The ID of the instance.</p>
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
   *                   <code>vpc-id</code> - The ID of the VPC to which the instance is linked.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The instance IDs. Must be instances linked to a VPC through ClassicLink.</p>
   */
  InstanceIds?: string[];

  /**
   * @public
   * <p>The maximum number of items to return for this request.
   * 	To get the next page of items, make another request with the token returned in the output.
   * 	For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   *          <p>Constraint: If the value is greater than 1000, we return only 1000 items.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <note>
 *             <p>Deprecated.</p>
 *          </note>
 *          <p>Describes a linked EC2-Classic instance.</p>
 */
export interface ClassicLinkInstance {
  /**
   * @public
   * <p>The security groups.</p>
   */
  Groups?: GroupIdentifier[];

  /**
   * @public
   * <p>The ID of the instance.</p>
   */
  InstanceId?: string;

  /**
   * @public
   * <p>Any tags assigned to the instance.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>The ID of the VPC.</p>
   */
  VpcId?: string;
}

/**
 * @public
 */
export interface DescribeClassicLinkInstancesResult {
  /**
   * @public
   * <p>Information about one or more linked EC2-Classic instances.</p>
   */
  Instances?: ClassicLinkInstance[];

  /**
   * @public
   * <p>The token to include in another request to get the next page of items. This value is <code>null</code> when there are no more items to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeClientVpnAuthorizationRulesRequest {
  /**
   * @public
   * <p>The ID of the Client VPN endpoint.</p>
   */
  ClientVpnEndpointId: string | undefined;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The token to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>One or more filters. Filter names and values are case-sensitive.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>description</code> - The description of the authorization rule.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>destination-cidr</code> - The CIDR of the network to which the authorization rule
   *                     applies.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>group-id</code> - The ID of the Active Directory group to which the authorization rule grants access.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>The maximum number of results to return for the request in a single page. The remaining results can be seen by sending another request with the nextToken value.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Information about an authorization rule.</p>
 */
export interface AuthorizationRule {
  /**
   * @public
   * <p>The ID of the Client VPN endpoint with which the authorization rule is associated.</p>
   */
  ClientVpnEndpointId?: string;

  /**
   * @public
   * <p>A brief description of the authorization rule.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The ID of the Active Directory group to which the authorization rule grants access.</p>
   */
  GroupId?: string;

  /**
   * @public
   * <p>Indicates whether the authorization rule grants access to all clients.</p>
   */
  AccessAll?: boolean;

  /**
   * @public
   * <p>The IPv4 address range, in CIDR notation, of the network to which the authorization rule applies.</p>
   */
  DestinationCidr?: string;

  /**
   * @public
   * <p>The current state of the authorization rule.</p>
   */
  Status?: ClientVpnAuthorizationRuleStatus;
}

/**
 * @public
 */
export interface DescribeClientVpnAuthorizationRulesResult {
  /**
   * @public
   * <p>Information about the authorization rules.</p>
   */
  AuthorizationRules?: AuthorizationRule[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeClientVpnConnectionsRequest {
  /**
   * @public
   * <p>The ID of the Client VPN endpoint.</p>
   */
  ClientVpnEndpointId: string | undefined;

  /**
   * @public
   * <p>One or more filters. Filter names and values are case-sensitive.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>connection-id</code> - The ID of the connection.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>username</code> - For Active Directory client authentication, the user name of the
   *                     client who established the client connection.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>The token to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return for the request in a single page. The remaining results can be seen by sending another request with the nextToken value.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 * @enum
 */
export const ClientVpnConnectionStatusCode = {
  active: "active",
  failed_to_terminate: "failed-to-terminate",
  terminated: "terminated",
  terminating: "terminating",
} as const;

/**
 * @public
 */
export type ClientVpnConnectionStatusCode =
  (typeof ClientVpnConnectionStatusCode)[keyof typeof ClientVpnConnectionStatusCode];

/**
 * @public
 * <p>Describes the status of a client connection.</p>
 */
export interface ClientVpnConnectionStatus {
  /**
   * @public
   * <p>The state of the client connection.</p>
   */
  Code?: ClientVpnConnectionStatusCode | string;

  /**
   * @public
   * <p>A message about the status of the client connection, if applicable.</p>
   */
  Message?: string;
}

/**
 * @public
 * <p>Describes a client connection.</p>
 */
export interface ClientVpnConnection {
  /**
   * @public
   * <p>The ID of the Client VPN endpoint to which the client is connected.</p>
   */
  ClientVpnEndpointId?: string;

  /**
   * @public
   * <p>The current date and time.</p>
   */
  Timestamp?: string;

  /**
   * @public
   * <p>The ID of the client connection.</p>
   */
  ConnectionId?: string;

  /**
   * @public
   * <p>The username of the client who established the client connection. This information is only provided
   * 			if Active Directory client authentication is used.</p>
   */
  Username?: string;

  /**
   * @public
   * <p>The date and time the client connection was established.</p>
   */
  ConnectionEstablishedTime?: string;

  /**
   * @public
   * <p>The number of bytes sent by the client.</p>
   */
  IngressBytes?: string;

  /**
   * @public
   * <p>The number of bytes received by the client.</p>
   */
  EgressBytes?: string;

  /**
   * @public
   * <p>The number of packets sent by the client.</p>
   */
  IngressPackets?: string;

  /**
   * @public
   * <p>The number of packets received by the client.</p>
   */
  EgressPackets?: string;

  /**
   * @public
   * <p>The IP address of the client.</p>
   */
  ClientIp?: string;

  /**
   * @public
   * <p>The common name associated with the client. This is either the name of the client certificate,
   * 			or the Active Directory user name.</p>
   */
  CommonName?: string;

  /**
   * @public
   * <p>The current state of the client connection.</p>
   */
  Status?: ClientVpnConnectionStatus;

  /**
   * @public
   * <p>The date and time the client connection was terminated.</p>
   */
  ConnectionEndTime?: string;

  /**
   * @public
   * <p>The statuses returned by the client connect handler for posture compliance, if applicable.</p>
   */
  PostureComplianceStatuses?: string[];
}

/**
 * @public
 */
export interface DescribeClientVpnConnectionsResult {
  /**
   * @public
   * <p>Information about the active and terminated client connections.</p>
   */
  Connections?: ClientVpnConnection[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeClientVpnEndpointsRequest {
  /**
   * @public
   * <p>The ID of the Client VPN endpoint.</p>
   */
  ClientVpnEndpointIds?: string[];

  /**
   * @public
   * <p>The maximum number of results to return for the request in a single page. The remaining results can be seen by sending another request with the nextToken value.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>One or more filters. Filter names and values are case-sensitive.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>endpoint-id</code> - The ID of the Client VPN endpoint.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>transport-protocol</code> - The transport protocol (<code>tcp</code> |
   *                     <code>udp</code>).</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 * @enum
 */
export const AssociatedNetworkType = {
  vpc: "vpc",
} as const;

/**
 * @public
 */
export type AssociatedNetworkType = (typeof AssociatedNetworkType)[keyof typeof AssociatedNetworkType];

/**
 * @public
 * <p>Describes a target network that is associated with a Client VPN endpoint. A target network is a subnet in a VPC.</p>
 */
export interface AssociatedTargetNetwork {
  /**
   * @public
   * <p>The ID of the subnet.</p>
   */
  NetworkId?: string;

  /**
   * @public
   * <p>The target network type.</p>
   */
  NetworkType?: AssociatedNetworkType | string;
}

/**
 * @public
 * <p>Describes an Active Directory.</p>
 */
export interface DirectoryServiceAuthentication {
  /**
   * @public
   * <p>The ID of the Active Directory used for authentication.</p>
   */
  DirectoryId?: string;
}

/**
 * @public
 * <p>Describes the IAM SAML identity providers used for federated authentication.</p>
 */
export interface FederatedAuthentication {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the IAM SAML identity provider.</p>
   */
  SamlProviderArn?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the IAM SAML identity provider for the self-service portal.</p>
   */
  SelfServiceSamlProviderArn?: string;
}

/**
 * @public
 * <p>Information about the client certificate used for authentication.</p>
 */
export interface CertificateAuthentication {
  /**
   * @public
   * <p>The ARN of the client certificate. </p>
   */
  ClientRootCertificateChain?: string;
}

/**
 * @public
 * <p>Describes the authentication methods used by a Client VPN endpoint. For more information, see <a href="https://docs.aws.amazon.com/vpn/latest/clientvpn-admin/client-authentication.html">Authentication</a>
 * 			in the <i>Client VPN Administrator Guide</i>.</p>
 */
export interface ClientVpnAuthentication {
  /**
   * @public
   * <p>The authentication type used.</p>
   */
  Type?: ClientVpnAuthenticationType | string;

  /**
   * @public
   * <p>Information about the Active Directory, if applicable.</p>
   */
  ActiveDirectory?: DirectoryServiceAuthentication;

  /**
   * @public
   * <p>Information about the authentication certificates, if applicable.</p>
   */
  MutualAuthentication?: CertificateAuthentication;

  /**
   * @public
   * <p>Information about the IAM SAML identity provider, if applicable.</p>
   */
  FederatedAuthentication?: FederatedAuthentication;
}

/**
 * @public
 * @enum
 */
export const ClientVpnEndpointAttributeStatusCode = {
  applied: "applied",
  applying: "applying",
} as const;

/**
 * @public
 */
export type ClientVpnEndpointAttributeStatusCode =
  (typeof ClientVpnEndpointAttributeStatusCode)[keyof typeof ClientVpnEndpointAttributeStatusCode];

/**
 * @public
 * <p>Describes the status of the Client VPN endpoint attribute.</p>
 */
export interface ClientVpnEndpointAttributeStatus {
  /**
   * @public
   * <p>The status code.</p>
   */
  Code?: ClientVpnEndpointAttributeStatusCode | string;

  /**
   * @public
   * <p>The status message.</p>
   */
  Message?: string;
}

/**
 * @public
 * <p>The options for managing connection authorization for new client connections.</p>
 */
export interface ClientConnectResponseOptions {
  /**
   * @public
   * <p>Indicates whether client connect options are enabled.</p>
   */
  Enabled?: boolean;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Lambda function used for connection authorization.</p>
   */
  LambdaFunctionArn?: string;

  /**
   * @public
   * <p>The status of any updates to the client connect options.</p>
   */
  Status?: ClientVpnEndpointAttributeStatus;
}

/**
 * @public
 * <p>Current state of options for customizable text banner that will be displayed on
 * 			Amazon Web Services provided clients when a VPN session is established.</p>
 */
export interface ClientLoginBannerResponseOptions {
  /**
   * @public
   * <p>Current state of text banner feature.</p>
   *          <p>Valid values: <code>true | false</code>
   *          </p>
   */
  Enabled?: boolean;

  /**
   * @public
   * <p>Customizable text that will be displayed in a banner on Amazon Web Services provided
   * 			clients when a VPN session is established. UTF-8 encoded
   * 			characters only. Maximum of 1400 characters.</p>
   */
  BannerText?: string;
}

/**
 * @public
 * <p>Information about the client connection logging options for a Client VPN endpoint.</p>
 */
export interface ConnectionLogResponseOptions {
  /**
   * @public
   * <p>Indicates whether client connection logging is enabled for the Client VPN endpoint.</p>
   */
  Enabled?: boolean;

  /**
   * @public
   * <p>The name of the Amazon CloudWatch Logs log group to which connection logging data is published.</p>
   */
  CloudwatchLogGroup?: string;

  /**
   * @public
   * <p>The name of the Amazon CloudWatch Logs log stream to which connection logging data is published.</p>
   */
  CloudwatchLogStream?: string;
}

/**
 * @public
 * @enum
 */
export const VpnProtocol = {
  openvpn: "openvpn",
} as const;

/**
 * @public
 */
export type VpnProtocol = (typeof VpnProtocol)[keyof typeof VpnProtocol];

/**
 * @public
 * <p>Describes a Client VPN endpoint.</p>
 */
export interface ClientVpnEndpoint {
  /**
   * @public
   * <p>The ID of the Client VPN endpoint.</p>
   */
  ClientVpnEndpointId?: string;

  /**
   * @public
   * <p>A brief description of the endpoint.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The current state of the Client VPN endpoint.</p>
   */
  Status?: ClientVpnEndpointStatus;

  /**
   * @public
   * <p>The date and time the Client VPN endpoint was created.</p>
   */
  CreationTime?: string;

  /**
   * @public
   * <p>The date and time the Client VPN endpoint was deleted, if applicable.</p>
   */
  DeletionTime?: string;

  /**
   * @public
   * <p>The DNS name to be used by clients when connecting to the Client VPN endpoint.</p>
   */
  DnsName?: string;

  /**
   * @public
   * <p>The IPv4 address range, in CIDR notation, from which client IP addresses are assigned.</p>
   */
  ClientCidrBlock?: string;

  /**
   * @public
   * <p>Information about the DNS servers to be used for DNS resolution. </p>
   */
  DnsServers?: string[];

  /**
   * @public
   * <p>Indicates whether split-tunnel is enabled in the Client VPN endpoint.</p>
   *          <p>For information about split-tunnel VPN endpoints, see <a href="https://docs.aws.amazon.com/vpn/latest/clientvpn-admin/split-tunnel-vpn.html">Split-Tunnel Client VPN endpoint</a>
   * 			in the <i>Client VPN Administrator Guide</i>.</p>
   */
  SplitTunnel?: boolean;

  /**
   * @public
   * <p>The protocol used by the VPN session.</p>
   */
  VpnProtocol?: VpnProtocol | string;

  /**
   * @public
   * <p>The transport protocol used by the Client VPN endpoint.</p>
   */
  TransportProtocol?: TransportProtocol | string;

  /**
   * @public
   * <p>The port number for the  Client VPN endpoint.</p>
   */
  VpnPort?: number;

  /**
   * @public
   * @deprecated
   *
   * <p>Information about the associated target networks. A target network is a subnet in a VPC.</p>
   */
  AssociatedTargetNetworks?: AssociatedTargetNetwork[];

  /**
   * @public
   * <p>The ARN of the server certificate.</p>
   */
  ServerCertificateArn?: string;

  /**
   * @public
   * <p>Information about the authentication method used by the Client VPN endpoint.</p>
   */
  AuthenticationOptions?: ClientVpnAuthentication[];

  /**
   * @public
   * <p>Information about the client connection logging options for the Client VPN endpoint.</p>
   */
  ConnectionLogOptions?: ConnectionLogResponseOptions;

  /**
   * @public
   * <p>Any tags assigned to the Client VPN endpoint.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>The IDs of the security groups for the target network.</p>
   */
  SecurityGroupIds?: string[];

  /**
   * @public
   * <p>The ID of the VPC.</p>
   */
  VpcId?: string;

  /**
   * @public
   * <p>The URL of the self-service portal.</p>
   */
  SelfServicePortalUrl?: string;

  /**
   * @public
   * <p>The options for managing connection authorization for new client connections.</p>
   */
  ClientConnectOptions?: ClientConnectResponseOptions;

  /**
   * @public
   * <p>The maximum VPN session duration time in hours.</p>
   *          <p>Valid values: <code>8 | 10 | 12 | 24</code>
   *          </p>
   *          <p>Default value: <code>24</code>
   *          </p>
   */
  SessionTimeoutHours?: number;

  /**
   * @public
   * <p>Options for enabling a customizable text banner that will be displayed on Amazon Web Services provided clients when a VPN session is
   * 			established.</p>
   */
  ClientLoginBannerOptions?: ClientLoginBannerResponseOptions;
}

/**
 * @public
 */
export interface DescribeClientVpnEndpointsResult {
  /**
   * @public
   * <p>Information about the Client VPN endpoints.</p>
   */
  ClientVpnEndpoints?: ClientVpnEndpoint[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeClientVpnRoutesRequest {
  /**
   * @public
   * <p>The ID of the Client VPN endpoint.</p>
   */
  ClientVpnEndpointId: string | undefined;

  /**
   * @public
   * <p>One or more filters. Filter names and values are case-sensitive.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>destination-cidr</code> - The CIDR of the route destination.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>origin</code> - How the route was associated with the Client VPN endpoint (<code>associate</code> | <code>add-route</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>target-subnet</code> - The ID of the subnet through which traffic is routed.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>The maximum number of results to return for the request in a single page. The remaining results can be seen by sending another request with the nextToken value.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 * <p>Information about a Client VPN endpoint route.</p>
 */
export interface ClientVpnRoute {
  /**
   * @public
   * <p>The ID of the Client VPN endpoint with which the route is associated.</p>
   */
  ClientVpnEndpointId?: string;

  /**
   * @public
   * <p>The IPv4 address range, in CIDR notation, of the route destination.</p>
   */
  DestinationCidr?: string;

  /**
   * @public
   * <p>The ID of the subnet through which traffic is routed.</p>
   */
  TargetSubnet?: string;

  /**
   * @public
   * <p>The route type.</p>
   */
  Type?: string;

  /**
   * @public
   * <p>Indicates how the route was associated with the Client VPN endpoint.
   * 			<code>associate</code> indicates that the route was automatically added when the target network
   * 			was associated with the Client VPN endpoint. <code>add-route</code> indicates that the route
   * 			was manually added using the <b>CreateClientVpnRoute</b> action.</p>
   */
  Origin?: string;

  /**
   * @public
   * <p>The current state of the route.</p>
   */
  Status?: ClientVpnRouteStatus;

  /**
   * @public
   * <p>A brief description of the route.</p>
   */
  Description?: string;
}

/**
 * @public
 */
export interface DescribeClientVpnRoutesResult {
  /**
   * @public
   * <p>Information about the Client VPN endpoint routes.</p>
   */
  Routes?: ClientVpnRoute[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeClientVpnTargetNetworksRequest {
  /**
   * @public
   * <p>The ID of the Client VPN endpoint.</p>
   */
  ClientVpnEndpointId: string | undefined;

  /**
   * @public
   * <p>The IDs of the target network associations.</p>
   */
  AssociationIds?: string[];

  /**
   * @public
   * <p>The maximum number of results to return for the request in a single page. The remaining results can be seen by sending another request with the nextToken value.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>One or more filters. Filter names and values are case-sensitive.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>association-id</code> - The ID of the association.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>target-network-id</code> - The ID of the subnet specified as the target network.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>vpc-id</code> - The ID of the VPC in which the target network is located.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 * <p>Describes a target network associated with a Client VPN endpoint.</p>
 */
export interface TargetNetwork {
  /**
   * @public
   * <p>The ID of the association.</p>
   */
  AssociationId?: string;

  /**
   * @public
   * <p>The ID of the VPC in which the target network (subnet) is located.</p>
   */
  VpcId?: string;

  /**
   * @public
   * <p>The ID of the subnet specified as the target network.</p>
   */
  TargetNetworkId?: string;

  /**
   * @public
   * <p>The ID of the Client VPN endpoint with which the target network is associated.</p>
   */
  ClientVpnEndpointId?: string;

  /**
   * @public
   * <p>The current state of the target network association.</p>
   */
  Status?: AssociationStatus;

  /**
   * @public
   * <p>The IDs of the security groups applied to the target network association.</p>
   */
  SecurityGroups?: string[];
}

/**
 * @public
 */
export interface DescribeClientVpnTargetNetworksResult {
  /**
   * @public
   * <p>Information about the associated target networks.</p>
   */
  ClientVpnTargetNetworks?: TargetNetwork[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeCoipPoolsRequest {
  /**
   * @public
   * <p>The IDs of the address pools.</p>
   */
  PoolIds?: string[];

  /**
   * @public
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>coip-pool.local-gateway-route-table-id</code> - The ID of the local gateway route table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>coip-pool.pool-id</code> - The ID of the address pool.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface DescribeCoipPoolsResult {
  /**
   * @public
   * <p>Information about the address pools.</p>
   */
  CoipPools?: CoipPool[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeConversionTasksRequest {
  /**
   * @public
   * <p>The conversion task IDs.</p>
   */
  ConversionTaskIds?: string[];

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 * <p>Describes a disk image.</p>
 */
export interface DiskImageDescription {
  /**
   * @public
   * <p>The checksum computed for the disk image.</p>
   */
  Checksum?: string;

  /**
   * @public
   * <p>The disk image format.</p>
   */
  Format?: DiskImageFormat | string;

  /**
   * @public
   * <p>A presigned URL for the import manifest stored in Amazon S3. For information about creating a presigned URL for
   *    an Amazon S3 object, read the "Query String Request Authentication Alternative" section of the <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/RESTAuthentication.html">Authenticating REST Requests</a> topic in
   *    the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   *          <p>For information about the import manifest referenced by this API action, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/manifest.html">VM Import Manifest</a>.</p>
   */
  ImportManifestUrl?: string;

  /**
   * @public
   * <p>The size of the disk image, in GiB.</p>
   */
  Size?: number;
}

/**
 * @public
 * <p>Describes a disk image volume.</p>
 */
export interface DiskImageVolumeDescription {
  /**
   * @public
   * <p>The volume identifier.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The size of the volume, in GiB.</p>
   */
  Size?: number;
}

/**
 * @public
 * <p>Describes an import volume task.</p>
 */
export interface ImportInstanceVolumeDetailItem {
  /**
   * @public
   * <p>The Availability Zone where the resulting instance will reside.</p>
   */
  AvailabilityZone?: string;

  /**
   * @public
   * <p>The number of bytes converted so far.</p>
   */
  BytesConverted?: number;

  /**
   * @public
   * <p>A description of the task.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The image.</p>
   */
  Image?: DiskImageDescription;

  /**
   * @public
   * <p>The status of the import of this particular disk image.</p>
   */
  Status?: string;

  /**
   * @public
   * <p>The status information or errors related to the disk image.</p>
   */
  StatusMessage?: string;

  /**
   * @public
   * <p>The volume.</p>
   */
  Volume?: DiskImageVolumeDescription;
}

/**
 * @public
 * <p>Describes an import instance task.</p>
 */
export interface ImportInstanceTaskDetails {
  /**
   * @public
   * <p>A description of the task.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The ID of the instance.</p>
   */
  InstanceId?: string;

  /**
   * @public
   * <p>The instance operating system.</p>
   */
  Platform?: PlatformValues | string;

  /**
   * @public
   * <p>The volumes.</p>
   */
  Volumes?: ImportInstanceVolumeDetailItem[];
}

/**
 * @public
 * <p>Describes an import volume task.</p>
 */
export interface ImportVolumeTaskDetails {
  /**
   * @public
   * <p>The Availability Zone where the resulting volume will reside.</p>
   */
  AvailabilityZone?: string;

  /**
   * @public
   * <p>The number of bytes converted so far.</p>
   */
  BytesConverted?: number;

  /**
   * @public
   * <p>The description you provided when starting the import volume task.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The image.</p>
   */
  Image?: DiskImageDescription;

  /**
   * @public
   * <p>The volume.</p>
   */
  Volume?: DiskImageVolumeDescription;
}

/**
 * @public
 * @enum
 */
export const ConversionTaskState = {
  active: "active",
  cancelled: "cancelled",
  cancelling: "cancelling",
  completed: "completed",
} as const;

/**
 * @public
 */
export type ConversionTaskState = (typeof ConversionTaskState)[keyof typeof ConversionTaskState];

/**
 * @public
 * <p>Describes a conversion task.</p>
 */
export interface ConversionTask {
  /**
   * @public
   * <p>The ID of the conversion task.</p>
   */
  ConversionTaskId?: string;

  /**
   * @public
   * <p>The time when the task expires. If the upload isn't complete before the expiration time, we automatically cancel
   *    the task.</p>
   */
  ExpirationTime?: string;

  /**
   * @public
   * <p>If the task is for importing an instance, this contains information about the import instance task.</p>
   */
  ImportInstance?: ImportInstanceTaskDetails;

  /**
   * @public
   * <p>If the task is for importing a volume, this contains information about the import volume task.</p>
   */
  ImportVolume?: ImportVolumeTaskDetails;

  /**
   * @public
   * <p>The state of the conversion task.</p>
   */
  State?: ConversionTaskState | string;

  /**
   * @public
   * <p>The status message related to the conversion task.</p>
   */
  StatusMessage?: string;

  /**
   * @public
   * <p>Any tags assigned to the task.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface DescribeConversionTasksResult {
  /**
   * @public
   * <p>Information about the conversion tasks.</p>
   */
  ConversionTasks?: ConversionTask[];
}

/**
 * @public
 * <p>Contains the parameters for DescribeCustomerGateways.</p>
 */
export interface DescribeCustomerGatewaysRequest {
  /**
   * @public
   * <p>One or more customer gateway IDs.</p>
   *          <p>Default: Describes all your customer gateways.</p>
   */
  CustomerGatewayIds?: string[];

  /**
   * @public
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>bgp-asn</code> - The customer gateway's Border Gateway Protocol (BGP)
   *                     Autonomous System Number (ASN).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>customer-gateway-id</code> - The ID of the customer gateway.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ip-address</code> - The IP address of the customer gateway
   *                     device's external interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the customer gateway (<code>pending</code> |
   *                         <code>available</code> | <code>deleting</code> |
   *                     <code>deleted</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>type</code> - The type of customer gateway. Currently, the only
   *                     supported type is <code>ipsec.1</code>.</p>
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
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 * <p>Contains the output of DescribeCustomerGateways.</p>
 */
export interface DescribeCustomerGatewaysResult {
  /**
   * @public
   * <p>Information about one or more customer gateways.</p>
   */
  CustomerGateways?: CustomerGateway[];
}

/**
 * @public
 */
export interface DescribeDhcpOptionsRequest {
  /**
   * @public
   * <p>The IDs of one or more DHCP options sets.</p>
   *          <p>Default: Describes all your DHCP options sets.</p>
   */
  DhcpOptionsIds?: string[];

  /**
   * @public
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>dhcp-options-id</code> - The ID of a DHCP options set.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>key</code> - The key for one of the options (for example, <code>domain-name</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>value</code> - The value for one of the options.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>owner-id</code> - The ID of the Amazon Web Services account that owns the DHCP options set.</p>
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
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of items to return for this request.
   * 	To get the next page of items, make another request with the token returned in the output.
   * 	For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface DescribeDhcpOptionsResult {
  /**
   * @public
   * <p>Information about one or more DHCP options sets.</p>
   */
  DhcpOptions?: DhcpOptions[];

  /**
   * @public
   * <p>The token to include in another request to get the next page of items. This value is <code>null</code> when there are no more items to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeEgressOnlyInternetGatewaysRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The IDs of the egress-only internet gateways.</p>
   */
  EgressOnlyInternetGatewayIds?: string[];

  /**
   * @public
   * <p>The maximum number of items to return for this request.
   * 	To get the next page of items, make another request with the token returned in the output.
   * 	For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The filters.</p>
   *          <ul>
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
}

/**
 * @public
 */
export interface DescribeEgressOnlyInternetGatewaysResult {
  /**
   * @public
   * <p>Information about the egress-only internet gateways.</p>
   */
  EgressOnlyInternetGateways?: EgressOnlyInternetGateway[];

  /**
   * @public
   * <p>The token to include in another request to get the next page of items. This value is <code>null</code> when there are no more items to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeElasticGpusRequest {
  /**
   * @public
   * <p>The Elastic Graphics accelerator IDs.</p>
   */
  ElasticGpuIds?: string[];

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>availability-zone</code> - The Availability Zone in which the
   *                     Elastic Graphics accelerator resides.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>elastic-gpu-health</code> - The status of the Elastic Graphics accelerator
   *                         (<code>OK</code> | <code>IMPAIRED</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>elastic-gpu-state</code> - The state of the Elastic Graphics accelerator
   *                         (<code>ATTACHED</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>elastic-gpu-type</code> - The type of Elastic Graphics accelerator; for example,
   *                         <code>eg1.medium</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-id</code> - The ID of the instance to which the
   *                     Elastic Graphics accelerator is associated.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>The maximum number of results to return in a single call. To retrieve the remaining
   *             results, make another call with the returned <code>NextToken</code> value. This value
   *             can be between 5 and 1000.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token to request the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const ElasticGpuStatus = {
  Impaired: "IMPAIRED",
  Ok: "OK",
} as const;

/**
 * @public
 */
export type ElasticGpuStatus = (typeof ElasticGpuStatus)[keyof typeof ElasticGpuStatus];

/**
 * @public
 * <p>Describes the status of an Elastic Graphics accelerator.</p>
 */
export interface ElasticGpuHealth {
  /**
   * @public
   * <p>The health status.</p>
   */
  Status?: ElasticGpuStatus | string;
}

/**
 * @public
 * @enum
 */
export const ElasticGpuState = {
  Attached: "ATTACHED",
} as const;

/**
 * @public
 */
export type ElasticGpuState = (typeof ElasticGpuState)[keyof typeof ElasticGpuState];

/**
 * @public
 * <p>Describes an Elastic Graphics accelerator.</p>
 */
export interface ElasticGpus {
  /**
   * @public
   * <p>The ID of the Elastic Graphics accelerator.</p>
   */
  ElasticGpuId?: string;

  /**
   * @public
   * <p>The Availability Zone in the which the Elastic Graphics accelerator resides.</p>
   */
  AvailabilityZone?: string;

  /**
   * @public
   * <p>The type of Elastic Graphics accelerator.</p>
   */
  ElasticGpuType?: string;

  /**
   * @public
   * <p>The status of the Elastic Graphics accelerator.</p>
   */
  ElasticGpuHealth?: ElasticGpuHealth;

  /**
   * @public
   * <p>The state of the Elastic Graphics accelerator.</p>
   */
  ElasticGpuState?: ElasticGpuState | string;

  /**
   * @public
   * <p>The ID of the instance to which the Elastic Graphics accelerator is attached.</p>
   */
  InstanceId?: string;

  /**
   * @public
   * <p>The tags assigned to the Elastic Graphics accelerator.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface DescribeElasticGpusResult {
  /**
   * @public
   * <p>Information about the Elastic Graphics accelerators.</p>
   */
  ElasticGpuSet?: ElasticGpus[];

  /**
   * @public
   * <p>The total number of items to return. If the total number of items available is more
   *             than the value specified in max-items then a Next-Token will be provided in the output
   *             that you can use to resume pagination.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token to use to retrieve the next page of results. This value is
   *                 <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeExportImageTasksRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>Filter tasks using the <code>task-state</code> filter and one of the following values: <code>active</code>,
   *     <code>completed</code>, <code>deleting</code>, or <code>deleted</code>.</p>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>The IDs of the export image tasks.</p>
   */
  ExportImageTaskIds?: string[];

  /**
   * @public
   * <p>The maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>A token that indicates the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Describes the destination for an export image task.</p>
 */
export interface ExportTaskS3Location {
  /**
   * @public
   * <p>The destination Amazon S3 bucket.</p>
   */
  S3Bucket?: string;

  /**
   * @public
   * <p>The prefix (logical hierarchy) in the bucket.</p>
   */
  S3Prefix?: string;
}

/**
 * @public
 * <p>Describes an export image task.</p>
 */
export interface ExportImageTask {
  /**
   * @public
   * <p>A description of the image being exported.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The ID of the export image task.</p>
   */
  ExportImageTaskId?: string;

  /**
   * @public
   * <p>The ID of the image.</p>
   */
  ImageId?: string;

  /**
   * @public
   * <p>The percent complete of the export image task.</p>
   */
  Progress?: string;

  /**
   * @public
   * <p>Information about the destination Amazon S3 bucket.</p>
   */
  S3ExportLocation?: ExportTaskS3Location;

  /**
   * @public
   * <p>The status of the export image task. The possible values are <code>active</code>, <code>completed</code>,
   *     <code>deleting</code>, and <code>deleted</code>.</p>
   */
  Status?: string;

  /**
   * @public
   * <p>The status message for the export image task.</p>
   */
  StatusMessage?: string;

  /**
   * @public
   * <p>Any tags assigned to the export image task.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface DescribeExportImageTasksResult {
  /**
   * @public
   * <p>Information about the export image tasks.</p>
   */
  ExportImageTasks?: ExportImageTask[];

  /**
   * @public
   * <p>The token to use to get the next page of results. This value is <code>null</code> when there are no more results
   *    to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeExportTasksRequest {
  /**
   * @public
   * <p>The export task IDs.</p>
   */
  ExportTaskIds?: string[];

  /**
   * @public
   * <p>the filters for the export tasks.</p>
   */
  Filters?: Filter[];
}

/**
 * @public
 */
export interface DescribeExportTasksResult {
  /**
   * @public
   * <p>Information about the export tasks.</p>
   */
  ExportTasks?: ExportTask[];
}

/**
 * @public
 */
export interface DescribeFastLaunchImagesRequest {
  /**
   * @public
   * <p>Details for one or more Windows AMI image IDs.</p>
   */
  ImageIds?: string[];

  /**
   * @public
   * <p>Use the following filters to streamline results.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>resource-type</code> - The resource type for pre-provisioning.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>launch-template</code> - The launch template that is associated with the pre-provisioned Windows AMI.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>owner-id</code> - The owner ID for the pre-provisioning resource.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The current state of fast launching for the Windows AMI.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>The maximum number of items to return for this request.
   *          To get the next page of items, make another request with the token returned in the output.
   * 	        For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   * 			and provides an error response. If you have the required permissions, the error response is
   * 			<code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 * <p>Identifies the launch template to use for faster launching of the Windows AMI.</p>
 */
export interface FastLaunchLaunchTemplateSpecificationResponse {
  /**
   * @public
   * <p>The ID of the launch template for faster launching of the associated Windows AMI.</p>
   */
  LaunchTemplateId?: string;

  /**
   * @public
   * <p>The name of the launch template for faster launching of the associated Windows AMI.</p>
   */
  LaunchTemplateName?: string;

  /**
   * @public
   * <p>The version of the launch template for faster launching of the associated Windows AMI.</p>
   */
  Version?: string;
}

/**
 * @public
 * @enum
 */
export const FastLaunchResourceType = {
  SNAPSHOT: "snapshot",
} as const;

/**
 * @public
 */
export type FastLaunchResourceType = (typeof FastLaunchResourceType)[keyof typeof FastLaunchResourceType];

/**
 * @public
 * <p>Configuration settings for creating and managing pre-provisioned snapshots for a fast-launch enabled Windows AMI.</p>
 */
export interface FastLaunchSnapshotConfigurationResponse {
  /**
   * @public
   * <p>The number of pre-provisioned snapshots requested to keep on hand for a fast-launch enabled Windows AMI.</p>
   */
  TargetResourceCount?: number;
}

/**
 * @public
 * @enum
 */
export const FastLaunchStateCode = {
  disabling: "disabling",
  disabling_failed: "disabling-failed",
  enabled: "enabled",
  enabled_failed: "enabled-failed",
  enabling: "enabling",
  enabling_failed: "enabling-failed",
} as const;

/**
 * @public
 */
export type FastLaunchStateCode = (typeof FastLaunchStateCode)[keyof typeof FastLaunchStateCode];

/**
 * @public
 * <p>Describe details about a fast-launch enabled Windows image that meets the requested
 * 			criteria. Criteria are defined by the <code>DescribeFastLaunchImages</code> action filters.</p>
 */
export interface DescribeFastLaunchImagesSuccessItem {
  /**
   * @public
   * <p>The image ID that identifies the fast-launch enabled Windows image.</p>
   */
  ImageId?: string;

  /**
   * @public
   * <p>The resource type that is used for pre-provisioning the Windows AMI. Supported values
   * 			include: <code>snapshot</code>.</p>
   */
  ResourceType?: FastLaunchResourceType | string;

  /**
   * @public
   * <p>A group of parameters that are used for pre-provisioning the associated
   * 			Windows AMI using snapshots.</p>
   */
  SnapshotConfiguration?: FastLaunchSnapshotConfigurationResponse;

  /**
   * @public
   * <p>The launch template that the fast-launch enabled Windows AMI uses when it launches
   * 			Windows instances from pre-provisioned snapshots.</p>
   */
  LaunchTemplate?: FastLaunchLaunchTemplateSpecificationResponse;

  /**
   * @public
   * <p>The maximum number of instances that Amazon EC2 can launch at the same time to create
   * 			pre-provisioned snapshots for Windows faster launching.</p>
   */
  MaxParallelLaunches?: number;

  /**
   * @public
   * <p>The owner ID for the fast-launch enabled Windows AMI.</p>
   */
  OwnerId?: string;

  /**
   * @public
   * <p>The current state of faster launching for the specified Windows AMI.</p>
   */
  State?: FastLaunchStateCode | string;

  /**
   * @public
   * <p>The reason that faster launching for the Windows AMI changed to the current state.</p>
   */
  StateTransitionReason?: string;

  /**
   * @public
   * <p>The time that faster launching for the Windows AMI changed to the current state.</p>
   */
  StateTransitionTime?: Date;
}

/**
 * @public
 */
export interface DescribeFastLaunchImagesResult {
  /**
   * @public
   * <p>A collection of details about the fast-launch enabled Windows images that meet
   * 			the requested criteria.</p>
   */
  FastLaunchImages?: DescribeFastLaunchImagesSuccessItem[];

  /**
   * @public
   * <p>The token to include in another request to get the next page of items. This value is <code>null</code> when there
   *          are no more items to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeFastSnapshotRestoresRequest {
  /**
   * @public
   * <p>The filters. The possible values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>availability-zone</code>: The Availability Zone of the snapshot.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>owner-id</code>: The ID of the Amazon Web Services account that enabled fast snapshot restore on the snapshot.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>snapshot-id</code>: The ID of the snapshot.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code>: The state of fast snapshot restores for the snapshot
   *          (<code>enabling</code> |
   *           <code>optimizing</code> |
   *           <code>enabled</code> |
   *           <code>disabling</code> |
   *           <code>disabled</code>).</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>The maximum number of items to return for this request.
   * 	To get the next page of items, make another request with the token returned in the output.
   * 	For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token returned from a previous paginated request.
   *   Pagination continues from the end of the items returned by the previous request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 * @enum
 */
export const FastSnapshotRestoreStateCode = {
  disabled: "disabled",
  disabling: "disabling",
  enabled: "enabled",
  enabling: "enabling",
  optimizing: "optimizing",
} as const;

/**
 * @public
 */
export type FastSnapshotRestoreStateCode =
  (typeof FastSnapshotRestoreStateCode)[keyof typeof FastSnapshotRestoreStateCode];

/**
 * @public
 * <p>Describes fast snapshot restores for a snapshot.</p>
 */
export interface DescribeFastSnapshotRestoreSuccessItem {
  /**
   * @public
   * <p>The ID of the snapshot.</p>
   */
  SnapshotId?: string;

  /**
   * @public
   * <p>The Availability Zone.</p>
   */
  AvailabilityZone?: string;

  /**
   * @public
   * <p>The state of fast snapshot restores.</p>
   */
  State?: FastSnapshotRestoreStateCode | string;

  /**
   * @public
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
   * @public
   * <p>The ID of the Amazon Web Services account that enabled fast snapshot restores on the snapshot.</p>
   */
  OwnerId?: string;

  /**
   * @public
   * <p>The Amazon Web Services owner alias that enabled fast snapshot restores on the snapshot. This is intended for future use.</p>
   */
  OwnerAlias?: string;

  /**
   * @public
   * <p>The time at which fast snapshot restores entered the <code>enabling</code> state.</p>
   */
  EnablingTime?: Date;

  /**
   * @public
   * <p>The time at which fast snapshot restores entered the <code>optimizing</code> state.</p>
   */
  OptimizingTime?: Date;

  /**
   * @public
   * <p>The time at which fast snapshot restores entered the <code>enabled</code> state.</p>
   */
  EnabledTime?: Date;

  /**
   * @public
   * <p>The time at which fast snapshot restores entered the <code>disabling</code> state.</p>
   */
  DisablingTime?: Date;

  /**
   * @public
   * <p>The time at which fast snapshot restores entered the <code>disabled</code> state.</p>
   */
  DisabledTime?: Date;
}

/**
 * @public
 */
export interface DescribeFastSnapshotRestoresResult {
  /**
   * @public
   * <p>Information about the state of fast snapshot restores.</p>
   */
  FastSnapshotRestores?: DescribeFastSnapshotRestoreSuccessItem[];

  /**
   * @public
   * <p>The token to include in another request to get the next page of items.
   *   This value is <code>null</code> when there are no more items to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const FleetEventType = {
  FLEET_CHANGE: "fleet-change",
  INSTANCE_CHANGE: "instance-change",
  SERVICE_ERROR: "service-error",
} as const;

/**
 * @public
 */
export type FleetEventType = (typeof FleetEventType)[keyof typeof FleetEventType];

/**
 * @public
 */
export interface DescribeFleetHistoryRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The type of events to describe. By default, all events are described.</p>
   */
  EventType?: FleetEventType | string;

  /**
   * @public
   * <p>The maximum number of items to return for this request.
   *          To get the next page of items, make another request with the token returned in the output.
   * 	        For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The ID of the EC2 Fleet.</p>
   */
  FleetId: string | undefined;

  /**
   * @public
   * <p>The start date and time for the events, in UTC format (for example,
   *             <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).</p>
   */
  StartTime: Date | undefined;
}

/**
 * @public
 * <p>Describes an EC2 Fleet or Spot Fleet event.</p>
 */
export interface EventInformation {
  /**
   * @public
   * <p>The description of the event.</p>
   */
  EventDescription?: string;

  /**
   * @public
   * <p>The event.</p>
   *          <p>
   *             <code>error</code> events:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>iamFleetRoleInvalid</code> - The EC2 Fleet or Spot Fleet does not have the required
   *                permissions either to launch or terminate an instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>allLaunchSpecsTemporarilyBlacklisted</code> - None of the configurations
   *                are valid, and several attempts to launch instances have failed. For more
   *                information, see the description of the event.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>spotInstanceCountLimitExceeded</code> - You've reached the limit on the
   *                number of Spot Instances that you can launch.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>spotFleetRequestConfigurationInvalid</code> - The configuration is not
   *                valid. For more information, see the description of the event.</p>
   *             </li>
   *          </ul>
   *          <p>
   *             <code>fleetRequestChange</code> events:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>active</code> - The EC2 Fleet or Spot Fleet request has been validated and Amazon EC2 is
   *                attempting to maintain the target number of running instances.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deleted</code> (EC2 Fleet) / <code>cancelled</code> (Spot Fleet) - The EC2 Fleet is deleted or the Spot Fleet request is canceled and has no running
   *                instances. The EC2 Fleet or Spot Fleet will be deleted two days after its instances are
   *                terminated.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deleted_running</code> (EC2 Fleet) / <code>cancelled_running</code> (Spot Fleet) - The EC2 Fleet is deleted or the Spot Fleet request is canceled and does
   *                not launch additional instances. Its existing instances continue to run until
   *                they are interrupted or terminated. The request remains in this state until all
   *                instances are interrupted or terminated.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deleted_terminating</code> (EC2 Fleet) / <code>cancelled_terminating</code> (Spot Fleet) - The EC2 Fleet is deleted or the Spot Fleet request is canceled and
   *                its instances are terminating. The request remains in this state until all
   *                instances are terminated.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>expired</code> - The EC2 Fleet or Spot Fleet request has expired. If the request was
   *                created with <code>TerminateInstancesWithExpiration</code> set, a subsequent
   *                <code>terminated</code> event indicates that the instances are
   *                terminated.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>modify_in_progress</code> - The EC2 Fleet or Spot Fleet request is being modified.
   *                The request remains in this state until the modification is fully
   *                processed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>modify_succeeded</code> - The EC2 Fleet or Spot Fleet request was modified.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>submitted</code> - The EC2 Fleet or Spot Fleet request is being evaluated and Amazon EC2
   *                is preparing to launch the target number of instances.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>progress</code> - The EC2 Fleet or Spot Fleet request is in the process of being fulfilled.</p>
   *             </li>
   *          </ul>
   *          <p>
   *             <code>instanceChange</code> events:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>launched</code> - A new instance was launched.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>terminated</code> - An instance was terminated by the user.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>termination_notified</code> - An instance termination notification was
   *                sent when a Spot Instance was terminated by Amazon EC2 during scale-down, when the target
   *                capacity of the fleet was modified down, for example, from a target capacity of
   *                4 to a target capacity of 3.</p>
   *             </li>
   *          </ul>
   *          <p>
   *             <code>Information</code> events:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>fleetProgressHalted</code> - The price in every launch specification is
   *                not valid because it is below the Spot price (all the launch specifications have
   *                produced <code>launchSpecUnusable</code> events). A launch specification might
   *                become valid if the Spot price changes.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>launchSpecTemporarilyBlacklisted</code> - The configuration is not valid
   *                and several attempts to launch instances have failed. For more information, see
   *                the description of the event.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>launchSpecUnusable</code> - The price in a launch specification is not
   *                valid because it is below the Spot price.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>registerWithLoadBalancersFailed</code> - An attempt to register
   *                instances with load balancers failed. For more information, see the description
   *                of the event.</p>
   *             </li>
   *          </ul>
   */
  EventSubType?: string;

  /**
   * @public
   * <p>The ID of the instance. This information is available only for
   *          <code>instanceChange</code> events.</p>
   */
  InstanceId?: string;
}

/**
 * @public
 * <p>Describes an event in the history of an EC2 Fleet.</p>
 */
export interface HistoryRecordEntry {
  /**
   * @public
   * <p>Information about the event.</p>
   */
  EventInformation?: EventInformation;

  /**
   * @public
   * <p>The event type.</p>
   */
  EventType?: FleetEventType | string;

  /**
   * @public
   * <p>The date and time of the event, in UTC format (for example,
   *             <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).</p>
   */
  Timestamp?: Date;
}

/**
 * @public
 */
export interface DescribeFleetHistoryResult {
  /**
   * @public
   * <p>Information about the events in the history of the EC2 Fleet.</p>
   */
  HistoryRecords?: HistoryRecordEntry[];

  /**
   * @public
   * <p>The last date and time for the events, in UTC format (for example,
   *             <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).
   *          All records up to this time were retrieved.</p>
   *          <p>If <code>nextToken</code> indicates that there are more items, this value is not
   *          present.</p>
   */
  LastEvaluatedTime?: Date;

  /**
   * @public
   * <p>The token to include in another request to get the next page of items. This value is <code>null</code> when there
   *          are no more items to return.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The ID of the EC Fleet.</p>
   */
  FleetId?: string;

  /**
   * @public
   * <p>The start date and time for the events, in UTC format (for example,
   *             <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).</p>
   */
  StartTime?: Date;
}

/**
 * @public
 */
export interface DescribeFleetInstancesRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The maximum number of items to return for this request.
   *          To get the next page of items, make another request with the token returned in the output.
   * 	        For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The ID of the EC2 Fleet.</p>
   */
  FleetId: string | undefined;

  /**
   * @public
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>instance-type</code> - The instance type.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];
}

/**
 * @public
 */
export interface DescribeFleetInstancesResult {
  /**
   * @public
   * <p>The running instances. This list is refreshed periodically and might be out of
   *          date.</p>
   */
  ActiveInstances?: ActiveInstance[];

  /**
   * @public
   * <p>The token to include in another request to get the next page of items. This value is <code>null</code> when there
   *          are no more items to return.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The ID of the EC2 Fleet.</p>
   */
  FleetId?: string;
}

/**
 * @public
 */
export interface DescribeFleetsRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The maximum number of items to return for this request.
   *          To get the next page of items, make another request with the token returned in the output.
   * 	        For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The IDs of the EC2 Fleets.</p>
   *          <note>
   *             <p>If a fleet is of type <code>instant</code>, you must specify the fleet ID, otherwise
   *             it does not appear in the response.</p>
   *          </note>
   */
  FleetIds?: string[];

  /**
   * @public
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>activity-status</code> - The progress of the EC2 Fleet ( <code>error</code> |
   *                   <code>pending-fulfillment</code> | <code>pending-termination</code> |
   *                   <code>fulfilled</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>excess-capacity-termination-policy</code> - Indicates whether to terminate
   *                running instances if the target capacity is decreased below the current EC2 Fleet size
   *                   (<code>true</code> | <code>false</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>fleet-state</code> - The state of the EC2 Fleet (<code>submitted</code> |
   *                   <code>active</code> | <code>deleted</code> | <code>failed</code> |
   *                   <code>deleted-running</code> | <code>deleted-terminating</code> |
   *                   <code>modifying</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>replace-unhealthy-instances</code> - Indicates whether EC2 Fleet should replace
   *                unhealthy instances (<code>true</code> | <code>false</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>type</code> - The type of request (<code>instant</code> |
   *                   <code>request</code> | <code>maintain</code>).</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];
}

/**
 * @public
 * @enum
 */
export const FleetActivityStatus = {
  ERROR: "error",
  FULFILLED: "fulfilled",
  PENDING_FULFILLMENT: "pending_fulfillment",
  PENDING_TERMINATION: "pending_termination",
} as const;

/**
 * @public
 */
export type FleetActivityStatus = (typeof FleetActivityStatus)[keyof typeof FleetActivityStatus];

/**
 * @public
 * <p>Describes the instances that could not be launched by the fleet.</p>
 */
export interface DescribeFleetError {
  /**
   * @public
   * <p>The launch templates and overrides that were used for launching the instances. The
   *          values that you specify in the Overrides replace the values in the launch template.</p>
   */
  LaunchTemplateAndOverrides?: LaunchTemplateAndOverridesResponse;

  /**
   * @public
   * <p>Indicates if the instance that could not be launched was a Spot Instance or On-Demand Instance.</p>
   */
  Lifecycle?: InstanceLifecycle | string;

  /**
   * @public
   * <p>The error code that indicates why the instance could not be launched. For more
   *          information about error codes, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/errors-overview.html.html">Error codes</a>.</p>
   */
  ErrorCode?: string;

  /**
   * @public
   * <p>The error message that describes why the instance could not be launched. For more
   *          information about error messages, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/errors-overview.html.html">Error codes</a>.</p>
   */
  ErrorMessage?: string;
}

/**
 * @public
 * <p>Describes the instances that were launched by the fleet.</p>
 */
export interface DescribeFleetsInstances {
  /**
   * @public
   * <p>The launch templates and overrides that were used for launching the instances. The
   *          values that you specify in the Overrides replace the values in the launch template.</p>
   */
  LaunchTemplateAndOverrides?: LaunchTemplateAndOverridesResponse;

  /**
   * @public
   * <p>Indicates if the instance that was launched is a Spot Instance or On-Demand Instance.</p>
   */
  Lifecycle?: InstanceLifecycle | string;

  /**
   * @public
   * <p>The IDs of the instances.</p>
   */
  InstanceIds?: string[];

  /**
   * @public
   * <p>The instance type.</p>
   */
  InstanceType?: _InstanceType | string;

  /**
   * @public
   * <p>The value is <code>Windows</code> for Windows instances. Otherwise, the value is
   *          blank.</p>
   */
  Platform?: PlatformValues | string;
}

/**
 * @public
 * <p>Describes a launch template and overrides.</p>
 */
export interface FleetLaunchTemplateConfig {
  /**
   * @public
   * <p>The launch template.</p>
   */
  LaunchTemplateSpecification?: FleetLaunchTemplateSpecification;

  /**
   * @public
   * <p>Any parameters that you specify override the same parameters in the launch
   *          template.</p>
   */
  Overrides?: FleetLaunchTemplateOverrides[];
}

/**
 * @public
 * <p>Describes the strategy for using unused Capacity Reservations for fulfilling On-Demand
 *          capacity.</p>
 *          <note>
 *             <p>This strategy can only be used if the EC2 Fleet is of type
 *             <code>instant</code>.</p>
 *          </note>
 *          <p>For more information about Capacity Reservations, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-capacity-reservations.html">On-Demand Capacity
 *             Reservations</a> in the <i>Amazon EC2 User Guide</i>. For examples of using
 *          Capacity Reservations in an EC2 Fleet, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-fleet-examples.html">EC2 Fleet example
 *             configurations</a> in the <i>Amazon EC2 User Guide</i>.</p>
 */
export interface CapacityReservationOptions {
  /**
   * @public
   * <p>Indicates whether to use unused Capacity Reservations for fulfilling On-Demand capacity.</p>
   *          <p>If you specify <code>use-capacity-reservations-first</code>, the fleet uses unused
   *          Capacity Reservations to fulfill On-Demand capacity up to the target On-Demand capacity. If
   *          multiple instance pools have unused Capacity Reservations, the On-Demand allocation
   *          strategy (<code>lowest-price</code> or <code>prioritized</code>) is applied. If the number
   *          of unused Capacity Reservations is less than the On-Demand target capacity, the remaining
   *          On-Demand target capacity is launched according to the On-Demand allocation strategy
   *             (<code>lowest-price</code> or <code>prioritized</code>).</p>
   *          <p>If you do not specify a value, the fleet fulfils the On-Demand capacity according to the
   *          chosen On-Demand allocation strategy.</p>
   */
  UsageStrategy?: FleetCapacityReservationUsageStrategy | string;
}

/**
 * @public
 * <p>Describes the configuration of On-Demand Instances in an EC2 Fleet.</p>
 */
export interface OnDemandOptions {
  /**
   * @public
   * <p>The strategy that determines the order of the launch template overrides to use in
   *          fulfilling On-Demand capacity.</p>
   *          <p>
   *             <code>lowest-price</code> - EC2 Fleet uses price to determine the order, launching the lowest
   *          price first.</p>
   *          <p>
   *             <code>prioritized</code> - EC2 Fleet uses the priority that you assigned to each launch
   *          template override, launching the highest priority first.</p>
   *          <p>Default: <code>lowest-price</code>
   *          </p>
   */
  AllocationStrategy?: FleetOnDemandAllocationStrategy | string;

  /**
   * @public
   * <p>The strategy for using unused Capacity Reservations for fulfilling On-Demand
   *          capacity.</p>
   *          <p>Supported only for fleets of type <code>instant</code>.</p>
   */
  CapacityReservationOptions?: CapacityReservationOptions;

  /**
   * @public
   * <p>Indicates that the fleet uses a single instance type to launch all On-Demand Instances in the
   *          fleet.</p>
   *          <p>Supported only for fleets of type <code>instant</code>.</p>
   */
  SingleInstanceType?: boolean;

  /**
   * @public
   * <p>Indicates that the fleet launches all On-Demand Instances into a single Availability Zone.</p>
   *          <p>Supported only for fleets of type <code>instant</code>.</p>
   */
  SingleAvailabilityZone?: boolean;

  /**
   * @public
   * <p>The minimum target capacity for On-Demand Instances in the fleet. If the minimum target capacity is
   *          not reached, the fleet launches no instances.</p>
   *          <p>Supported only for fleets of type <code>instant</code>.</p>
   *          <p>At least one of the following must be specified: <code>SingleAvailabilityZone</code> |
   *          <code>SingleInstanceType</code>
   *          </p>
   */
  MinTargetCapacity?: number;

  /**
   * @public
   * <p>The maximum amount per hour for On-Demand Instances that you're willing to pay.</p>
   */
  MaxTotalPrice?: string;
}

/**
 * @public
 * <p>The strategy to use when Amazon EC2 emits a signal that your Spot Instance is at an
 *          elevated risk of being interrupted.</p>
 */
export interface FleetSpotCapacityRebalance {
  /**
   * @public
   * <p>The replacement strategy to use. Only available for fleets of type
   *          <code>maintain</code>.</p>
   *          <p>
   *             <code>launch</code> - EC2 Fleet launches a new replacement Spot Instance when a
   *          rebalance notification is emitted for an existing Spot Instance in the fleet. EC2 Fleet
   *          does not terminate the instances that receive a rebalance notification. You can terminate
   *          the old instances, or you can leave them running. You are charged for all instances while
   *          they are running. </p>
   *          <p>
   *             <code>launch-before-terminate</code> - EC2 Fleet launches a new replacement Spot
   *          Instance when a rebalance notification is emitted for an existing Spot Instance in the
   *          fleet, and then, after a delay that you specify (in <code>TerminationDelay</code>),
   *          terminates the instances that received a rebalance notification.</p>
   */
  ReplacementStrategy?: FleetReplacementStrategy | string;

  /**
   * @public
   * <p>The amount of time (in seconds) that Amazon EC2 waits before terminating the old Spot
   *          Instance after launching a new replacement Spot Instance.</p>
   *          <p>Required when <code>ReplacementStrategy</code> is set to <code>launch-before-terminate</code>.</p>
   *          <p>Not valid when <code>ReplacementStrategy</code> is set to <code>launch</code>.</p>
   *          <p>Valid values: Minimum value of <code>120</code> seconds. Maximum value of <code>7200</code> seconds.</p>
   */
  TerminationDelay?: number;
}

/**
 * @public
 * <p>The strategies for managing your Spot Instances that are at an elevated risk of being
 *          interrupted.</p>
 */
export interface FleetSpotMaintenanceStrategies {
  /**
   * @public
   * <p>The strategy to use when Amazon EC2 emits a signal that your Spot Instance is at an
   *          elevated risk of being interrupted.</p>
   */
  CapacityRebalance?: FleetSpotCapacityRebalance;
}

/**
 * @public
 * <p>Describes the configuration of Spot Instances in an EC2 Fleet.</p>
 */
export interface SpotOptions {
  /**
   * @public
   * <p>The strategy that determines how to allocate the target Spot Instance capacity across the Spot Instance
   *          pools specified by the EC2 Fleet launch configuration. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-fleet-allocation-strategy.html">Allocation strategies for Spot Instances</a> in the
   *          <i>Amazon EC2 User Guide</i>.</p>
   *          <dl>
   *             <dt>price-capacity-optimized (recommended)</dt>
   *             <dd>
   *                <p>EC2 Fleet identifies the pools with
   *                   the highest capacity availability for the number of instances that are launching. This means
   *                   that we will request Spot Instances from the pools that we believe have the lowest chance of interruption
   *                   in the near term. EC2 Fleet then requests Spot Instances from the lowest priced of these pools.</p>
   *             </dd>
   *             <dt>capacity-optimized</dt>
   *             <dd>
   *                <p>EC2 Fleet identifies the pools with
   *                   the highest capacity availability for the number of instances that are launching. This means
   *                   that we will request Spot Instances from the pools that we believe have the lowest chance of interruption
   *                   in the near term. To give certain
   *                   instance types a higher chance of launching first, use
   *                   <code>capacity-optimized-prioritized</code>. Set a priority for each instance type by
   *                   using the <code>Priority</code> parameter for <code>LaunchTemplateOverrides</code>. You can
   *                   assign the same priority to different <code>LaunchTemplateOverrides</code>. EC2 implements
   *                   the priorities on a best-effort basis, but optimizes for capacity first.
   *                   <code>capacity-optimized-prioritized</code> is supported only if your EC2 Fleet uses a
   *                   launch template. Note that if the On-Demand <code>AllocationStrategy</code> is set to
   *                   <code>prioritized</code>, the same priority is applied when fulfilling On-Demand
   *                   capacity.</p>
   *             </dd>
   *             <dt>diversified</dt>
   *             <dd>
   *                <p>EC2 Fleet requests instances from all of the Spot Instance pools that you
   *                   specify.</p>
   *             </dd>
   *             <dt>lowest-price</dt>
   *             <dd>
   *                <p>EC2 Fleet requests instances from the lowest priced Spot Instance pool that
   *                   has available capacity. If the lowest priced pool doesn't have available capacity, the Spot Instances
   *                   come from the next lowest priced pool that has available capacity. If a pool runs out of
   *                   capacity before fulfilling your desired capacity, EC2 Fleet will continue to fulfill your
   *                   request by drawing from the next lowest priced pool. To ensure that your desired capacity is
   *                   met, you might receive Spot Instances from several pools. Because this strategy only considers instance
   *                   price and not capacity availability, it might lead to high interruption rates.</p>
   *             </dd>
   *          </dl>
   *          <p>Default: <code>lowest-price</code>
   *          </p>
   */
  AllocationStrategy?: SpotAllocationStrategy | string;

  /**
   * @public
   * <p>The strategies for managing your workloads on your Spot Instances that will be
   *          interrupted. Currently only the capacity rebalance strategy is available.</p>
   */
  MaintenanceStrategies?: FleetSpotMaintenanceStrategies;

  /**
   * @public
   * <p>The behavior when a Spot Instance is interrupted.</p>
   *          <p>Default: <code>terminate</code>
   *          </p>
   */
  InstanceInterruptionBehavior?: SpotInstanceInterruptionBehavior | string;

  /**
   * @public
   * <p>The number of Spot pools across which to allocate your target Spot capacity. Supported
   *          only when <code>AllocationStrategy</code> is set to <code>lowest-price</code>. EC2 Fleet selects
   *          the cheapest Spot pools and evenly allocates your target Spot capacity across the number of
   *          Spot pools that you specify.</p>
   *          <p>Note that EC2 Fleet attempts to draw Spot Instances from the number of pools that you specify on a
   *          best effort basis. If a pool runs out of Spot capacity before fulfilling your target
   *          capacity, EC2 Fleet will continue to fulfill your request by drawing from the next cheapest
   *          pool. To ensure that your target capacity is met, you might receive Spot Instances from more than
   *          the number of pools that you specified. Similarly, if most of the pools have no Spot
   *          capacity, you might receive your full target capacity from fewer than the number of pools
   *          that you specified.</p>
   */
  InstancePoolsToUseCount?: number;

  /**
   * @public
   * <p>Indicates that the fleet uses a single instance type to launch all Spot Instances in the
   *          fleet.</p>
   *          <p>Supported only for fleets of type <code>instant</code>.</p>
   */
  SingleInstanceType?: boolean;

  /**
   * @public
   * <p>Indicates that the fleet launches all Spot Instances into a single Availability Zone.</p>
   *          <p>Supported only for fleets of type <code>instant</code>.</p>
   */
  SingleAvailabilityZone?: boolean;

  /**
   * @public
   * <p>The minimum target capacity for Spot Instances in the fleet. If the minimum target capacity is
   *          not reached, the fleet launches no instances.</p>
   *          <p>Supported only for fleets of type <code>instant</code>.</p>
   *          <p>At least one of the following must be specified: <code>SingleAvailabilityZone</code> |
   *             <code>SingleInstanceType</code>
   *          </p>
   */
  MinTargetCapacity?: number;

  /**
   * @public
   * <p>The maximum amount per hour for Spot Instances that you're willing to pay. We do not recommend
   *          using this parameter because it can lead to increased interruptions. If you do not specify
   *          this parameter, you will pay the current Spot price.</p>
   *          <important>
   *             <p>If you specify a maximum price, your Spot Instances will be interrupted more frequently than if you do not specify this parameter.</p>
   *          </important>
   */
  MaxTotalPrice?: string;
}

/**
 * @public
 * <p>The number of units to request. You can choose to set the target capacity in terms of
 *          instances or a performance characteristic that is important to your application workload,
 *          such as vCPUs, memory, or I/O. If the request type is <code>maintain</code>, you can
 *          specify a target capacity of 0 and add capacity later.</p>
 *          <p>You can use the On-Demand Instance <code>MaxTotalPrice</code> parameter, the Spot Instance
 *             <code>MaxTotalPrice</code>, or both to ensure that your fleet cost does not exceed your
 *          budget. If you set a maximum price per hour for the On-Demand Instances and Spot Instances in your request, EC2 Fleet
 *          will launch instances until it reaches the maximum amount that you're willing to pay. When
 *          the maximum amount you're willing to pay is reached, the fleet stops launching instances
 *          even if it hasn’t met the target capacity. The <code>MaxTotalPrice</code> parameters are
 *          located in <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_OnDemandOptions.html">OnDemandOptions</a>
 *          and <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_SpotOptions">SpotOptions</a>.</p>
 */
export interface TargetCapacitySpecification {
  /**
   * @public
   * <p>The number of units to request, filled using
   *          <code>DefaultTargetCapacityType</code>.</p>
   */
  TotalTargetCapacity?: number;

  /**
   * @public
   * <p>The number of On-Demand units to request. If you specify a target capacity for Spot units, you cannot specify a target capacity for On-Demand units.</p>
   */
  OnDemandTargetCapacity?: number;

  /**
   * @public
   * <p>The maximum number of Spot units to launch. If you specify a target capacity for On-Demand units, you cannot specify a target capacity for Spot units.</p>
   */
  SpotTargetCapacity?: number;

  /**
   * @public
   * <p>The default <code>TotalTargetCapacity</code>, which is either <code>Spot</code> or
   *          <code>On-Demand</code>.</p>
   */
  DefaultTargetCapacityType?: DefaultTargetCapacityType | string;

  /**
   * @public
   * <p>The unit for the target capacity. <code>TargetCapacityUnitType</code> can only be specified when <code>InstanceRequirements</code> is specified.</p>
   *          <p>Default: <code>units</code> (translates to number of instances)</p>
   */
  TargetCapacityUnitType?: TargetCapacityUnitType | string;
}

/**
 * @public
 * <p>Describes an EC2 Fleet.</p>
 */
export interface FleetData {
  /**
   * @public
   * <p>The progress of the EC2 Fleet. If there is an error, the status is <code>error</code>. After
   *          all requests are placed, the status is <code>pending_fulfillment</code>. If the size of the
   *          EC2 Fleet is equal to or greater than its target capacity, the status is <code>fulfilled</code>.
   *          If the size of the EC2 Fleet is decreased, the status is <code>pending_termination</code> while
   *          instances are terminating.</p>
   */
  ActivityStatus?: FleetActivityStatus | string;

  /**
   * @public
   * <p>The creation date and time of the EC2 Fleet.</p>
   */
  CreateTime?: Date;

  /**
   * @public
   * <p>The ID of the EC2 Fleet.</p>
   */
  FleetId?: string;

  /**
   * @public
   * <p>The state of the EC2 Fleet.</p>
   */
  FleetState?: FleetStateCode | string;

  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring
   *             idempotency</a>.</p>
   *          <p>Constraints: Maximum 64 ASCII characters</p>
   */
  ClientToken?: string;

  /**
   * @public
   * <p>Indicates whether running instances should be terminated if the target capacity of the
   *          EC2 Fleet is decreased below the current size of the EC2 Fleet.</p>
   *          <p>Supported only for fleets of type <code>maintain</code>.</p>
   */
  ExcessCapacityTerminationPolicy?: FleetExcessCapacityTerminationPolicy | string;

  /**
   * @public
   * <p>The number of units fulfilled by this request compared to the set target
   *          capacity.</p>
   */
  FulfilledCapacity?: number;

  /**
   * @public
   * <p>The number of units fulfilled by this request compared to the set target On-Demand
   *          capacity.</p>
   */
  FulfilledOnDemandCapacity?: number;

  /**
   * @public
   * <p>The launch template and overrides.</p>
   */
  LaunchTemplateConfigs?: FleetLaunchTemplateConfig[];

  /**
   * @public
   * <p>The number of units to request. You can choose to set the target capacity in terms of
   *          instances or a performance characteristic that is important to your application workload,
   *          such as vCPUs, memory, or I/O. If the request type is <code>maintain</code>, you can
   *          specify a target capacity of 0 and add capacity later.</p>
   */
  TargetCapacitySpecification?: TargetCapacitySpecification;

  /**
   * @public
   * <p>Indicates whether running instances should be terminated when the EC2 Fleet expires. </p>
   */
  TerminateInstancesWithExpiration?: boolean;

  /**
   * @public
   * <p>The type of request. Indicates whether the EC2 Fleet only <code>requests</code> the target
   *          capacity, or also attempts to <code>maintain</code> it. If you request a certain target
   *          capacity, EC2 Fleet only places the required requests; it does not attempt to replenish
   *          instances if capacity is diminished, and it does not submit requests in alternative
   *          capacity pools if capacity is unavailable. To maintain a certain target capacity, EC2 Fleet
   *          places the required requests to meet this target capacity. It also automatically
   *          replenishes any interrupted Spot Instances. Default: <code>maintain</code>.</p>
   */
  Type?: FleetType | string;

  /**
   * @public
   * <p>The start date and time of the request, in UTC format (for example,
   *             <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).
   *          The default is to start fulfilling the request immediately. </p>
   */
  ValidFrom?: Date;

  /**
   * @public
   * <p>The end date and time of the request, in UTC format (for example,
   *             <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).
   *          At this point, no new instance requests are placed or able to fulfill the request. The
   *          default end date is 7 days from the current date. </p>
   */
  ValidUntil?: Date;

  /**
   * @public
   * <p>Indicates whether EC2 Fleet should replace unhealthy Spot Instances. Supported only for
   *          fleets of type <code>maintain</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/manage-ec2-fleet.html#ec2-fleet-health-checks">EC2 Fleet
   *             health checks</a> in the <i>Amazon EC2 User Guide</i>.</p>
   */
  ReplaceUnhealthyInstances?: boolean;

  /**
   * @public
   * <p>The configuration of Spot Instances in an EC2 Fleet.</p>
   */
  SpotOptions?: SpotOptions;

  /**
   * @public
   * <p>The allocation strategy of On-Demand Instances in an EC2 Fleet.</p>
   */
  OnDemandOptions?: OnDemandOptions;

  /**
   * @public
   * <p>The tags for an EC2 Fleet resource.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>Information about the instances that could not be launched by the fleet. Valid only when
   *             <b>Type</b> is set to <code>instant</code>.</p>
   */
  Errors?: DescribeFleetError[];

  /**
   * @public
   * <p>Information about the instances that were launched by the fleet. Valid only when
   *             <b>Type</b> is set to <code>instant</code>.</p>
   */
  Instances?: DescribeFleetsInstances[];

  /**
   * @public
   * <p>Reserved.</p>
   */
  Context?: string;
}

/**
 * @public
 */
export interface DescribeFleetsResult {
  /**
   * @public
   * <p>The token to include in another request to get the next page of items. This value is <code>null</code> when there
   *          are no more items to return.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Information about the EC2 Fleets.</p>
   */
  Fleets?: FleetData[];
}

/**
 * @public
 */
export interface DescribeFlowLogsRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>deliver-log-status</code> - The status of the logs delivery (<code>SUCCESS</code> |
   *                     <code>FAILED</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>log-destination-type</code> - The type of destination for the flow log
   *                     data (<code>cloud-watch-logs</code> | <code>s3</code> |
   *                         <code>kinesis-data-firehose</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>flow-log-id</code> - The ID of the flow log.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>log-group-name</code> - The name of the log group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>resource-id</code> - The ID of the VPC, subnet, or network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>traffic-type</code> - The type of traffic (<code>ACCEPT</code> |
   *                     <code>REJECT</code> | <code>ALL</code>).</p>
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
  Filter?: Filter[];

  /**
   * @public
   * <p>One or more flow log IDs.</p>
   *          <p>Constraint: Maximum of 1000 flow log IDs.</p>
   */
  FlowLogIds?: string[];

  /**
   * @public
   * <p>The maximum number of items to return for this request.
   * 	To get the next page of items, make another request with the token returned in the output.
   * 	For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token to request the next page of items. Pagination continues from the end of the items returned by the previous request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Describes the destination options for a flow log.</p>
 */
export interface DestinationOptionsResponse {
  /**
   * @public
   * <p>The format for the flow log.</p>
   */
  FileFormat?: DestinationFileFormat | string;

  /**
   * @public
   * <p>Indicates whether to use Hive-compatible prefixes for flow logs stored in Amazon S3.</p>
   */
  HiveCompatiblePartitions?: boolean;

  /**
   * @public
   * <p>Indicates whether to partition the flow log per hour.</p>
   */
  PerHourPartition?: boolean;
}

/**
 * @public
 * <p>Describes a flow log.</p>
 */
export interface FlowLog {
  /**
   * @public
   * <p>The date and time the flow log was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>Information about the error that occurred. <code>Rate limited</code> indicates that
   *             CloudWatch Logs throttling has been applied for one or more network interfaces, or that you've
   *             reached the limit on the number of log groups that you can create. <code>Access
   *                 error</code> indicates that the IAM role associated with the flow log does not have
   *             sufficient permissions to publish to CloudWatch Logs. <code>Unknown error</code> indicates an
   *             internal error.</p>
   */
  DeliverLogsErrorMessage?: string;

  /**
   * @public
   * <p>The ARN of the IAM role allows the service to publish logs to CloudWatch Logs.</p>
   */
  DeliverLogsPermissionArn?: string;

  /**
   * @public
   * <p>The ARN of the IAM role that allows the service to publish flow logs across accounts.</p>
   */
  DeliverCrossAccountRole?: string;

  /**
   * @public
   * <p>The status of the logs delivery (<code>SUCCESS</code> | <code>FAILED</code>).</p>
   */
  DeliverLogsStatus?: string;

  /**
   * @public
   * <p>The ID of the flow log.</p>
   */
  FlowLogId?: string;

  /**
   * @public
   * <p>The status of the flow log (<code>ACTIVE</code>).</p>
   */
  FlowLogStatus?: string;

  /**
   * @public
   * <p>The name of the flow log group.</p>
   */
  LogGroupName?: string;

  /**
   * @public
   * <p>The ID of the resource being monitored.</p>
   */
  ResourceId?: string;

  /**
   * @public
   * <p>The type of traffic captured for the flow log.</p>
   */
  TrafficType?: TrafficType | string;

  /**
   * @public
   * <p>The type of destination for the flow log data.</p>
   */
  LogDestinationType?: LogDestinationType | string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the destination for the flow log data.</p>
   */
  LogDestination?: string;

  /**
   * @public
   * <p>The format of the flow log record.</p>
   */
  LogFormat?: string;

  /**
   * @public
   * <p>The tags for the flow log.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>The maximum interval of time, in seconds, during which a flow of packets is captured and aggregated into a flow log record.</p>
   *          <p>When a network interface is attached to a <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html#ec2-nitro-instances">Nitro-based
   *                 instance</a>, the aggregation interval is always 60 seconds (1 minute) or less,
   *             regardless of the specified value.</p>
   *          <p>Valid Values: <code>60</code> | <code>600</code>
   *          </p>
   */
  MaxAggregationInterval?: number;

  /**
   * @public
   * <p>The destination options.</p>
   */
  DestinationOptions?: DestinationOptionsResponse;
}

/**
 * @public
 */
export interface DescribeFlowLogsResult {
  /**
   * @public
   * <p>Information about the flow logs.</p>
   */
  FlowLogs?: FlowLog[];

  /**
   * @public
   * <p>The token to request the next page of items. This value is <code>null</code> when there are no more items to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const FpgaImageAttributeName = {
  description: "description",
  loadPermission: "loadPermission",
  name: "name",
  productCodes: "productCodes",
} as const;

/**
 * @public
 */
export type FpgaImageAttributeName = (typeof FpgaImageAttributeName)[keyof typeof FpgaImageAttributeName];

/**
 * @public
 */
export interface DescribeFpgaImageAttributeRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The ID of the AFI.</p>
   */
  FpgaImageId: string | undefined;

  /**
   * @public
   * <p>The AFI attribute.</p>
   */
  Attribute: FpgaImageAttributeName | string | undefined;
}

/**
 * @public
 * @enum
 */
export const PermissionGroup = {
  all: "all",
} as const;

/**
 * @public
 */
export type PermissionGroup = (typeof PermissionGroup)[keyof typeof PermissionGroup];

/**
 * @public
 * <p>Describes a load permission.</p>
 */
export interface LoadPermission {
  /**
   * @public
   * <p>The Amazon Web Services account ID.</p>
   */
  UserId?: string;

  /**
   * @public
   * <p>The name of the group.</p>
   */
  Group?: PermissionGroup | string;
}

/**
 * @public
 * @enum
 */
export const ProductCodeValues = {
  devpay: "devpay",
  marketplace: "marketplace",
} as const;

/**
 * @public
 */
export type ProductCodeValues = (typeof ProductCodeValues)[keyof typeof ProductCodeValues];

/**
 * @public
 * <p>Describes a product code.</p>
 */
export interface ProductCode {
  /**
   * @public
   * <p>The product code.</p>
   */
  ProductCodeId?: string;

  /**
   * @public
   * <p>The type of product code.</p>
   */
  ProductCodeType?: ProductCodeValues | string;
}

/**
 * @public
 * <p>Describes an Amazon FPGA image (AFI) attribute.</p>
 */
export interface FpgaImageAttribute {
  /**
   * @public
   * <p>The ID of the AFI.</p>
   */
  FpgaImageId?: string;

  /**
   * @public
   * <p>The name of the AFI.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The description of the AFI.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The load permissions.</p>
   */
  LoadPermissions?: LoadPermission[];

  /**
   * @public
   * <p>The product codes.</p>
   */
  ProductCodes?: ProductCode[];
}

/**
 * @public
 */
export interface DescribeFpgaImageAttributeResult {
  /**
   * @public
   * <p>Information about the attribute.</p>
   */
  FpgaImageAttribute?: FpgaImageAttribute;
}

/**
 * @public
 */
export interface DescribeFpgaImagesRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The AFI IDs.</p>
   */
  FpgaImageIds?: string[];

  /**
   * @public
   * <p>Filters the AFI by owner. Specify an Amazon Web Services account ID, <code>self</code>
   * 			(owner is the sender of the request), or an Amazon Web Services owner alias (valid values are
   * 			<code>amazon</code> | <code>aws-marketplace</code>).</p>
   */
  Owners?: string[];

  /**
   * @public
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>create-time</code> - The creation time of the AFI.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>fpga-image-id</code> - The FPGA image identifier (AFI ID).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>fpga-image-global-id</code> - The global FPGA image identifier (AGFI ID).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>name</code> - The name of the AFI.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>owner-id</code> - The Amazon Web Services account ID of the AFI owner.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>product-code</code> - The product code.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>shell-version</code> - The version of the Amazon Web Services Shell that was used to create the bitstream.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the AFI (<code>pending</code> | <code>failed</code> | <code>available</code> | <code>unavailable</code>).</p>
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
   *                   <code>update-time</code> - The time of the most recent update.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>The token to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Describes the data that identifies an Amazon FPGA image (AFI) on the PCI bus.</p>
 */
export interface PciId {
  /**
   * @public
   * <p>The ID of the device.</p>
   */
  DeviceId?: string;

  /**
   * @public
   * <p>The ID of the vendor.</p>
   */
  VendorId?: string;

  /**
   * @public
   * <p>The ID of the subsystem.</p>
   */
  SubsystemId?: string;

  /**
   * @public
   * <p>The ID of the vendor for the subsystem.</p>
   */
  SubsystemVendorId?: string;
}

/**
 * @public
 * @enum
 */
export const FpgaImageStateCode = {
  available: "available",
  failed: "failed",
  pending: "pending",
  unavailable: "unavailable",
} as const;

/**
 * @public
 */
export type FpgaImageStateCode = (typeof FpgaImageStateCode)[keyof typeof FpgaImageStateCode];

/**
 * @public
 * <p>Describes the state of the bitstream generation process for an Amazon FPGA image (AFI).</p>
 */
export interface FpgaImageState {
  /**
   * @public
   * <p>The state. The following are the possible values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>pending</code> - AFI bitstream generation is in progress.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>available</code> - The AFI is available for use.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>failed</code> - AFI bitstream generation failed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>unavailable</code> - The AFI is no longer available for use.</p>
   *             </li>
   *          </ul>
   */
  Code?: FpgaImageStateCode | string;

  /**
   * @public
   * <p>If the state is <code>failed</code>, this is the error message.</p>
   */
  Message?: string;
}

/**
 * @public
 * <p>Describes an Amazon FPGA image (AFI).</p>
 */
export interface FpgaImage {
  /**
   * @public
   * <p>The FPGA image identifier (AFI ID).</p>
   */
  FpgaImageId?: string;

  /**
   * @public
   * <p>The global FPGA image identifier (AGFI ID).</p>
   */
  FpgaImageGlobalId?: string;

  /**
   * @public
   * <p>The name of the AFI.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The description of the AFI.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The version of the Amazon Web Services Shell that was used to create the bitstream.</p>
   */
  ShellVersion?: string;

  /**
   * @public
   * <p>Information about the PCI bus.</p>
   */
  PciId?: PciId;

  /**
   * @public
   * <p>Information about the state of the AFI.</p>
   */
  State?: FpgaImageState;

  /**
   * @public
   * <p>The date and time the AFI was created.</p>
   */
  CreateTime?: Date;

  /**
   * @public
   * <p>The time of the most recent update to the AFI.</p>
   */
  UpdateTime?: Date;

  /**
   * @public
   * <p>The ID of the Amazon Web Services account that owns the AFI.</p>
   */
  OwnerId?: string;

  /**
   * @public
   * <p>The alias of the AFI owner. Possible values include <code>self</code>, <code>amazon</code>, and <code>aws-marketplace</code>.</p>
   */
  OwnerAlias?: string;

  /**
   * @public
   * <p>The product codes for the AFI.</p>
   */
  ProductCodes?: ProductCode[];

  /**
   * @public
   * <p>Any tags assigned to the AFI.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>Indicates whether the AFI is public.</p>
   */
  Public?: boolean;

  /**
   * @public
   * <p>Indicates whether data retention support is enabled for the AFI.</p>
   */
  DataRetentionSupport?: boolean;

  /**
   * @public
   * <p>The instance types supported by the AFI.</p>
   */
  InstanceTypes?: string[];
}

/**
 * @public
 */
export interface DescribeFpgaImagesResult {
  /**
   * @public
   * <p>Information about the FPGA images.</p>
   */
  FpgaImages?: FpgaImage[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeHostReservationOfferingsRequest {
  /**
   * @public
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>instance-family</code> - The instance family of the offering (for example,
   *                         <code>m4</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>payment-option</code> - The payment option (<code>NoUpfront</code> |
   *                         <code>PartialUpfront</code> | <code>AllUpfront</code>).</p>
   *             </li>
   *          </ul>
   */
  Filter?: Filter[];

  /**
   * @public
   * <p>This is the maximum duration of the reservation to purchase, specified in seconds.
   *             Reservations are available in one-year and three-year terms. The number of seconds
   *             specified must be the number of seconds in a year (365x24x60x60) times one of the
   *             supported durations (1 or 3). For example, specify 94608000 for three years.</p>
   */
  MaxDuration?: number;

  /**
   * @public
   * <p>The maximum number of results to return for the request in a single page. The remaining results can be seen by sending another request with the returned <code>nextToken</code> value. This value can be between 5 and 500. If <code>maxResults</code> is given a larger value than 500, you receive an error.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>This is the minimum duration of the reservation you'd like to purchase, specified in
   *             seconds. Reservations are available in one-year and three-year terms. The number of
   *             seconds specified must be the number of seconds in a year (365x24x60x60) times one of
   *             the supported durations (1 or 3). For example, specify 31536000 for one year.</p>
   */
  MinDuration?: number;

  /**
   * @public
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The ID of the reservation offering.</p>
   */
  OfferingId?: string;
}

/**
 * @public
 * @enum
 */
export const PaymentOption = {
  ALL_UPFRONT: "AllUpfront",
  NO_UPFRONT: "NoUpfront",
  PARTIAL_UPFRONT: "PartialUpfront",
} as const;

/**
 * @public
 */
export type PaymentOption = (typeof PaymentOption)[keyof typeof PaymentOption];

/**
 * @public
 * <p>Details about the Dedicated Host Reservation offering.</p>
 */
export interface HostOffering {
  /**
   * @public
   * <p>The currency of the offering.</p>
   */
  CurrencyCode?: CurrencyCodeValues | string;

  /**
   * @public
   * <p>The duration of the offering (in seconds).</p>
   */
  Duration?: number;

  /**
   * @public
   * <p>The hourly price of the offering.</p>
   */
  HourlyPrice?: string;

  /**
   * @public
   * <p>The instance family of the offering.</p>
   */
  InstanceFamily?: string;

  /**
   * @public
   * <p>The ID of the offering.</p>
   */
  OfferingId?: string;

  /**
   * @public
   * <p>The available payment option.</p>
   */
  PaymentOption?: PaymentOption | string;

  /**
   * @public
   * <p>The upfront price of the offering. Does not apply to No Upfront offerings.</p>
   */
  UpfrontPrice?: string;
}

/**
 * @public
 */
export interface DescribeHostReservationOfferingsResult {
  /**
   * @public
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Information about the offerings.</p>
   */
  OfferingSet?: HostOffering[];
}

/**
 * @public
 */
export interface DescribeHostReservationsRequest {
  /**
   * @public
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>instance-family</code> - The instance family (for example,
   *                     <code>m4</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>payment-option</code> - The payment option (<code>NoUpfront</code> |
   *                         <code>PartialUpfront</code> | <code>AllUpfront</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the reservation (<code>payment-pending</code>
   *                     | <code>payment-failed</code> | <code>active</code> |
   *                     <code>retired</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag:<key></code> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   *             </li>
   *          </ul>
   */
  Filter?: Filter[];

  /**
   * @public
   * <p>The host reservation IDs.</p>
   */
  HostReservationIdSet?: string[];

  /**
   * @public
   * <p>The maximum number of results to return for the request in a single page. The remaining results can be seen by sending another request with the returned <code>nextToken</code> value. This value can be between 5 and 500. If <code>maxResults</code> is given a larger value than 500, you receive an error.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const ReservationState = {
  ACTIVE: "active",
  PAYMENT_FAILED: "payment-failed",
  PAYMENT_PENDING: "payment-pending",
  RETIRED: "retired",
} as const;

/**
 * @public
 */
export type ReservationState = (typeof ReservationState)[keyof typeof ReservationState];

/**
 * @public
 * <p>Details about the Dedicated Host Reservation and associated Dedicated Hosts.</p>
 */
export interface HostReservation {
  /**
   * @public
   * <p>The number of Dedicated Hosts the reservation is associated with.</p>
   */
  Count?: number;

  /**
   * @public
   * <p>The currency in which the <code>upfrontPrice</code> and <code>hourlyPrice</code>
   *             amounts are specified. At this time, the only supported currency is
   *             <code>USD</code>.</p>
   */
  CurrencyCode?: CurrencyCodeValues | string;

  /**
   * @public
   * <p>The length of the reservation's term, specified in seconds. Can be <code>31536000 (1
   *                 year)</code> | <code>94608000 (3 years)</code>.</p>
   */
  Duration?: number;

  /**
   * @public
   * <p>The date and time that the reservation ends.</p>
   */
  End?: Date;

  /**
   * @public
   * <p>The IDs of the Dedicated Hosts associated with the reservation.</p>
   */
  HostIdSet?: string[];

  /**
   * @public
   * <p>The ID of the reservation that specifies the associated Dedicated Hosts.</p>
   */
  HostReservationId?: string;

  /**
   * @public
   * <p>The hourly price of the reservation.</p>
   */
  HourlyPrice?: string;

  /**
   * @public
   * <p>The instance family of the Dedicated Host Reservation. The instance family on the
   *             Dedicated Host must be the same in order for it to benefit from the reservation.</p>
   */
  InstanceFamily?: string;

  /**
   * @public
   * <p>The ID of the reservation. This remains the same regardless of which Dedicated Hosts
   *             are associated with it.</p>
   */
  OfferingId?: string;

  /**
   * @public
   * <p>The payment option selected for this reservation.</p>
   */
  PaymentOption?: PaymentOption | string;

  /**
   * @public
   * <p>The date and time that the reservation started.</p>
   */
  Start?: Date;

  /**
   * @public
   * <p>The state of the reservation.</p>
   */
  State?: ReservationState | string;

  /**
   * @public
   * <p>The upfront price of the reservation.</p>
   */
  UpfrontPrice?: string;

  /**
   * @public
   * <p>Any tags assigned to the Dedicated Host Reservation.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface DescribeHostReservationsResult {
  /**
   * @public
   * <p>Details about the reservation's configuration.</p>
   */
  HostReservationSet?: HostReservation[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeHostsRequest {
  /**
   * @public
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>auto-placement</code> - Whether auto-placement is enabled or disabled
   *                         (<code>on</code> | <code>off</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>availability-zone</code> - The Availability Zone of the host.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>client-token</code> - The idempotency token that you provided when you
   *                     allocated the host.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>host-reservation-id</code> - The ID of the reservation assigned to this
   *                     host.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-type</code> - The instance type size that the Dedicated Host is
   *                     configured to support.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The allocation state of the Dedicated Host
   *                         (<code>available</code> | <code>under-assessment</code> |
   *                         <code>permanent-failure</code> | <code>released</code> |
   *                         <code>released-permanent-failure</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   *             </li>
   *          </ul>
   */
  Filter?: Filter[];

  /**
   * @public
   * <p>The IDs of the Dedicated Hosts. The IDs are used for targeted instance
   *             launches.</p>
   */
  HostIds?: string[];

  /**
   * @public
   * <p>The maximum number of results to return for the request in a single page. The remaining results can be seen by sending another request with the returned <code>nextToken</code> value. This value can be between 5 and 500. If <code>maxResults</code> is given a larger value than 500, you receive an error.</p>
   *          <p>You cannot specify this parameter and the host IDs parameter in the same
   *             request.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Information about the number of instances that can be launched onto the Dedicated
 *             Host.</p>
 */
export interface InstanceCapacity {
  /**
   * @public
   * <p>The number of instances that can be launched onto the Dedicated Host based on the
   *             host's available capacity.</p>
   */
  AvailableCapacity?: number;

  /**
   * @public
   * <p>The instance type supported by the Dedicated Host.</p>
   */
  InstanceType?: string;

  /**
   * @public
   * <p>The total number of instances that can be launched onto the Dedicated Host if there
   *             are no instances running on it.</p>
   */
  TotalCapacity?: number;
}

/**
 * @public
 * <p>The capacity information for instances that can be launched onto the Dedicated Host.
 *         </p>
 */
export interface AvailableCapacity {
  /**
   * @public
   * <p>The number of instances that can be launched onto the Dedicated Host depending on the
   *             host's available capacity. For Dedicated Hosts that support multiple instance types,
   *             this parameter represents the number of instances for each instance size that is
   *             supported on the host.</p>
   */
  AvailableInstanceCapacity?: InstanceCapacity[];

  /**
   * @public
   * <p>The number of vCPUs available for launching instances onto the Dedicated Host.</p>
   */
  AvailableVCpus?: number;
}

/**
 * @public
 * <p>Describes the properties of a Dedicated Host.</p>
 */
export interface HostProperties {
  /**
   * @public
   * <p>The number of cores on the Dedicated Host.</p>
   */
  Cores?: number;

  /**
   * @public
   * <p>The instance type supported by the Dedicated Host. For example, <code>m5.large</code>.
   *             If the host supports multiple instance types, no <b>instanceType</b> is returned.</p>
   */
  InstanceType?: string;

  /**
   * @public
   * <p>The instance family supported by the Dedicated Host. For example,
   *             <code>m5</code>.</p>
   */
  InstanceFamily?: string;

  /**
   * @public
   * <p>The number of sockets on the Dedicated Host.</p>
   */
  Sockets?: number;

  /**
   * @public
   * <p>The total number of vCPUs on the Dedicated Host.</p>
   */
  TotalVCpus?: number;
}

/**
 * @public
 * <p>Describes an instance running on a Dedicated Host.</p>
 */
export interface HostInstance {
  /**
   * @public
   * <p>The ID of instance that is running on the Dedicated Host.</p>
   */
  InstanceId?: string;

  /**
   * @public
   * <p>The instance type (for example, <code>m3.medium</code>) of the running
   *             instance.</p>
   */
  InstanceType?: string;

  /**
   * @public
   * <p>The ID of the Amazon Web Services account that owns the instance.</p>
   */
  OwnerId?: string;
}

/**
 * @public
 * <p>Describes the properties of the Dedicated Host.</p>
 */
export interface Host {
  /**
   * @public
   * <p>Whether auto-placement is on or off.</p>
   */
  AutoPlacement?: AutoPlacement | string;

  /**
   * @public
   * <p>The Availability Zone of the Dedicated Host.</p>
   */
  AvailabilityZone?: string;

  /**
   * @public
   * <p>Information about the instances running on the Dedicated Host.</p>
   */
  AvailableCapacity?: AvailableCapacity;

  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * @public
   * <p>The ID of the Dedicated Host.</p>
   */
  HostId?: string;

  /**
   * @public
   * <p>The hardware specifications of the Dedicated Host.</p>
   */
  HostProperties?: HostProperties;

  /**
   * @public
   * <p>The reservation ID of the Dedicated Host. This returns a <code>null</code> response if
   *             the Dedicated Host doesn't have an associated reservation.</p>
   */
  HostReservationId?: string;

  /**
   * @public
   * <p>The IDs and instance type that are currently running on the Dedicated Host.</p>
   */
  Instances?: HostInstance[];

  /**
   * @public
   * <p>The Dedicated Host's state.</p>
   */
  State?: AllocationState | string;

  /**
   * @public
   * <p>The time that the Dedicated Host was allocated.</p>
   */
  AllocationTime?: Date;

  /**
   * @public
   * <p>The time that the Dedicated Host was released.</p>
   */
  ReleaseTime?: Date;

  /**
   * @public
   * <p>Any tags assigned to the Dedicated Host.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>Indicates whether host recovery is enabled or disabled for the Dedicated Host.</p>
   */
  HostRecovery?: HostRecovery | string;

  /**
   * @public
   * <p>Indicates whether the Dedicated Host supports multiple instance types of the same
   *             instance family. If the value is <code>on</code>, the Dedicated Host supports multiple
   *             instance types in the instance family. If the value is <code>off</code>, the Dedicated
   *             Host supports a single instance type only.</p>
   */
  AllowsMultipleInstanceTypes?: AllowsMultipleInstanceTypes | string;

  /**
   * @public
   * <p>The ID of the Amazon Web Services account that owns the Dedicated Host.</p>
   */
  OwnerId?: string;

  /**
   * @public
   * <p>The ID of the Availability Zone in which the Dedicated Host is allocated.</p>
   */
  AvailabilityZoneId?: string;

  /**
   * @public
   * <p>Indicates whether the Dedicated Host is in a host resource group. If <b>memberOfServiceLinkedResourceGroup</b> is <code>true</code>, the
   *             host is in a host resource group; otherwise, it is not.</p>
   */
  MemberOfServiceLinkedResourceGroup?: boolean;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Amazon Web Services Outpost on which the
   *             Dedicated Host is allocated.</p>
   */
  OutpostArn?: string;

  /**
   * @public
   * <p>Indicates whether host maintenance is enabled or disabled for the Dedicated
   *             Host.</p>
   */
  HostMaintenance?: HostMaintenance | string;

  /**
   * @public
   * <p>The ID of the Outpost hardware asset on which the Dedicated Host is allocated.</p>
   */
  AssetId?: string;
}

/**
 * @public
 */
export interface DescribeHostsResult {
  /**
   * @public
   * <p>Information about the Dedicated Hosts.</p>
   */
  Hosts?: Host[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeIamInstanceProfileAssociationsRequest {
  /**
   * @public
   * <p>The IAM instance profile associations.</p>
   */
  AssociationIds?: string[];

  /**
   * @public
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>instance-id</code> - The ID of the instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the association (<code>associating</code> |
   *                 <code>associated</code> | <code>disassociating</code>).</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>The maximum number of items to return for this request. To get the next page of
   *             items, make another request with the token returned in the output. For more information,
   *             see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token returned from a previous paginated request.
   *             Pagination continues from the end of the items returned by the previous request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeIamInstanceProfileAssociationsResult {
  /**
   * @public
   * <p>Information about the IAM instance profile associations.</p>
   */
  IamInstanceProfileAssociations?: IamInstanceProfileAssociation[];

  /**
   * @public
   * <p>The token to include in another request to get the next page of items.
   *             This value is <code>null</code> when there are no more items to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeIdentityIdFormatRequest {
  /**
   * @public
   * <p>The ARN of the principal, which can be an IAM role, IAM user, or the root user.</p>
   */
  PrincipalArn: string | undefined;

  /**
   * @public
   * <p>The type of resource: <code>bundle</code> |
   *           <code>conversion-task</code> | <code>customer-gateway</code> | <code>dhcp-options</code> |
   *           <code>elastic-ip-allocation</code> | <code>elastic-ip-association</code> |
   *           <code>export-task</code> | <code>flow-log</code> | <code>image</code> |
   *           <code>import-task</code> | <code>instance</code> | <code>internet-gateway</code> |
   *           <code>network-acl</code> | <code>network-acl-association</code> |
   *           <code>network-interface</code> | <code>network-interface-attachment</code> |
   *           <code>prefix-list</code> | <code>reservation</code> | <code>route-table</code> |
   *           <code>route-table-association</code> | <code>security-group</code> |
   *           <code>snapshot</code> | <code>subnet</code> |
   *           <code>subnet-cidr-block-association</code> | <code>volume</code> | <code>vpc</code>
   *           | <code>vpc-cidr-block-association</code> | <code>vpc-endpoint</code> |
   *           <code>vpc-peering-connection</code> | <code>vpn-connection</code> | <code>vpn-gateway</code>
   *          </p>
   */
  Resource?: string;
}

/**
 * @public
 */
export interface DescribeIdentityIdFormatResult {
  /**
   * @public
   * <p>Information about the ID format for the resources.</p>
   */
  Statuses?: IdFormat[];
}

/**
 * @public
 */
export interface DescribeIdFormatRequest {
  /**
   * @public
   * <p>The type of resource: <code>bundle</code> |
   *            <code>conversion-task</code> | <code>customer-gateway</code> | <code>dhcp-options</code> |
   *            <code>elastic-ip-allocation</code> | <code>elastic-ip-association</code> |
   *            <code>export-task</code> | <code>flow-log</code> | <code>image</code> |
   *            <code>import-task</code> | <code>instance</code> | <code>internet-gateway</code> |
   *            <code>network-acl</code> | <code>network-acl-association</code> |
   *            <code>network-interface</code> | <code>network-interface-attachment</code> |
   *            <code>prefix-list</code> | <code>reservation</code> | <code>route-table</code> |
   *            <code>route-table-association</code> | <code>security-group</code> |
   *            <code>snapshot</code> | <code>subnet</code> |
   *            <code>subnet-cidr-block-association</code> | <code>volume</code> | <code>vpc</code>
   *            | <code>vpc-cidr-block-association</code> | <code>vpc-endpoint</code> |
   *            <code>vpc-peering-connection</code> | <code>vpn-connection</code> | <code>vpn-gateway</code>
   *          </p>
   */
  Resource?: string;
}

/**
 * @public
 */
export interface DescribeIdFormatResult {
  /**
   * @public
   * <p>Information about the ID format for the resource.</p>
   */
  Statuses?: IdFormat[];
}

/**
 * @public
 * @enum
 */
export const ImageAttributeName = {
  blockDeviceMapping: "blockDeviceMapping",
  bootMode: "bootMode",
  description: "description",
  imdsSupport: "imdsSupport",
  kernel: "kernel",
  lastLaunchedTime: "lastLaunchedTime",
  launchPermission: "launchPermission",
  productCodes: "productCodes",
  ramdisk: "ramdisk",
  sriovNetSupport: "sriovNetSupport",
  tpmSupport: "tpmSupport",
  uefiData: "uefiData",
} as const;

/**
 * @public
 */
export type ImageAttributeName = (typeof ImageAttributeName)[keyof typeof ImageAttributeName];

/**
 * @public
 * <p>Contains the parameters for DescribeImageAttribute.</p>
 */
export interface DescribeImageAttributeRequest {
  /**
   * @public
   * <p>The AMI attribute.</p>
   *          <p>
   *             <b>Note</b>: The <code>blockDeviceMapping</code> attribute is deprecated.
   *    	    Using this attribute returns the <code>Client.AuthFailure</code> error. To get information about
   *    	    the block device mappings for an AMI, use the <a>DescribeImages</a> action.</p>
   */
  Attribute: ImageAttributeName | string | undefined;

  /**
   * @public
   * <p>The ID of the AMI.</p>
   */
  ImageId: string | undefined;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   * 			and provides an error response. If you have the required permissions, the error response is
   * 			<code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 * <p>Describes a launch permission.</p>
 */
export interface LaunchPermission {
  /**
   * @public
   * <p>The name of the group.</p>
   */
  Group?: PermissionGroup | string;

  /**
   * @public
   * <p>The Amazon Web Services account ID.</p>
   *          <p>Constraints: Up to 10 000 account IDs can be specified in a single request.</p>
   */
  UserId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of an organization.</p>
   */
  OrganizationArn?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of an organizational unit (OU).</p>
   */
  OrganizationalUnitArn?: string;
}

/**
 * @public
 * <p>Describes an image attribute.</p>
 */
export interface ImageAttribute {
  /**
   * @public
   * <p>The block device mapping entries.</p>
   */
  BlockDeviceMappings?: BlockDeviceMapping[];

  /**
   * @public
   * <p>The ID of the AMI.</p>
   */
  ImageId?: string;

  /**
   * @public
   * <p>The launch permissions.</p>
   */
  LaunchPermissions?: LaunchPermission[];

  /**
   * @public
   * <p>The product codes.</p>
   */
  ProductCodes?: ProductCode[];

  /**
   * @public
   * <p>A description for the AMI.</p>
   */
  Description?: AttributeValue;

  /**
   * @public
   * <p>The kernel ID.</p>
   */
  KernelId?: AttributeValue;

  /**
   * @public
   * <p>The RAM disk ID.</p>
   */
  RamdiskId?: AttributeValue;

  /**
   * @public
   * <p>Indicates whether enhanced networking with the Intel 82599 Virtual Function interface is enabled.</p>
   */
  SriovNetSupport?: AttributeValue;

  /**
   * @public
   * <p>The boot mode.</p>
   */
  BootMode?: AttributeValue;

  /**
   * @public
   * <p>If the image is configured for NitroTPM support, the value is <code>v2.0</code>.</p>
   */
  TpmSupport?: AttributeValue;

  /**
   * @public
   * <p>Base64 representation of the non-volatile UEFI variable store. To retrieve the UEFI data,
   *       use the <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetInstanceUefiData">GetInstanceUefiData</a> command. You can inspect and modify the UEFI data by using the
   *       <a href="https://github.com/awslabs/python-uefivars">python-uefivars tool</a> on
   *       GitHub. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/uefi-secure-boot.html">UEFI Secure Boot</a> in the
   *       <i>Amazon EC2 User Guide</i>.</p>
   */
  UefiData?: AttributeValue;

  /**
   * @public
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
   *         format</a>, when the AMI was last used to launch an EC2 instance. When the AMI is used
   *       to launch an instance, there is a 24-hour delay before that usage is reported.</p>
   *          <note>
   *             <p>
   *                <code>lastLaunchedTime</code> data is available starting April 2017.</p>
   *          </note>
   */
  LastLaunchedTime?: AttributeValue;

  /**
   * @public
   * <p>If <code>v2.0</code>, it indicates that IMDSv2 is specified in the AMI. Instances launched
   *       from this AMI will have <code>HttpTokens</code> automatically set to <code>required</code> so
   *       that, by default, the instance requires that IMDSv2 is used when requesting instance metadata.
   *       In addition, <code>HttpPutResponseHopLimit</code> is set to <code>2</code>. For more
   *       information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configuring-IMDS-new-instances.html#configure-IMDS-new-instances-ami-configuration">Configure
   *         the AMI</a> in the <i>Amazon EC2 User Guide</i>.</p>
   */
  ImdsSupport?: AttributeValue;
}

/**
 * @public
 */
export interface DescribeImagesRequest {
  /**
   * @public
   * <p>Scopes the images by users with explicit launch permissions.
   *        Specify an Amazon Web Services account ID, <code>self</code> (the sender of the request),
   * 				or <code>all</code> (public AMIs).</p>
   *          <ul>
   *             <li>
   *                <p>If you specify an Amazon Web Services account ID that is not your own, only AMIs
   *           shared with that specific Amazon Web Services account ID are returned. However, AMIs that
   *           are shared with the account’s organization or organizational unit (OU) are not
   *           returned.</p>
   *             </li>
   *             <li>
   *                <p>If you specify <code>self</code> or your own Amazon Web Services account ID, AMIs
   *           shared with your account are returned. In addition, AMIs that are shared with the
   *           organization or OU of which you are member are also returned. </p>
   *             </li>
   *             <li>
   *                <p>If you specify <code>all</code>, all public AMIs are returned.</p>
   *             </li>
   *          </ul>
   */
  ExecutableUsers?: string[];

  /**
   * @public
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>architecture</code> - The image architecture (<code>i386</code> | <code>x86_64</code> |
   *           <code>arm64</code> | <code>x86_64_mac</code> | <code>arm64_mac</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>block-device-mapping.delete-on-termination</code> - A Boolean value that indicates
   *         	whether the Amazon EBS volume is deleted on instance termination.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>block-device-mapping.device-name</code> - The device name specified in the block device mapping (for
   *           example, <code>/dev/sdh</code> or <code>xvdh</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>block-device-mapping.snapshot-id</code> - The ID of the snapshot used for the Amazon EBS
   *           volume.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>block-device-mapping.volume-size</code> - The volume size of the Amazon EBS volume, in GiB.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>block-device-mapping.volume-type</code> - The volume type of the Amazon EBS volume
   *             (<code>io1</code> | <code>io2</code> | <code>gp2</code> | <code>gp3</code> | <code>sc1
   *           </code>| <code>st1</code> | <code>standard</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>block-device-mapping.encrypted</code> - A Boolean that indicates whether the Amazon EBS volume is encrypted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>creation-date</code> - The time when the image was created, in the ISO 8601
   *           format in the UTC time zone (YYYY-MM-DDThh:mm:ss.sssZ), for example,
   *             <code>2021-09-29T11:04:43.305Z</code>. You can use a wildcard (<code>*</code>), for
   *           example, <code>2021-09-29T*</code>, which matches an entire day.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>description</code> - The description of the image (provided during image
   *           creation).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ena-support</code> - A Boolean that indicates whether enhanced networking
   *           with ENA is enabled.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>hypervisor</code> - The hypervisor type (<code>ovm</code> |
   *           <code>xen</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>image-id</code> - The ID of the image.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>image-type</code> - The image type (<code>machine</code> | <code>kernel</code> |
   *             <code>ramdisk</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>is-public</code> - A Boolean that indicates whether the image is public.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>kernel-id</code> - The kernel ID.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>manifest-location</code> - The location of the image manifest.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>name</code> - The name of the AMI (provided during image creation).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>owner-alias</code> - The owner alias (<code>amazon</code> | <code>aws-marketplace</code>).
   *           The valid aliases are defined in an Amazon-maintained list. This is not the Amazon Web Services account alias that can be
   *         	set using the IAM console. We recommend that you use the <b>Owner</b>
   *         	request parameter instead of this filter.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>owner-id</code> - The Amazon Web Services account ID of the owner. We recommend that you use the
   *       		<b>Owner</b> request parameter instead of this filter.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>platform</code> - The platform. The only supported value is <code>windows</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>product-code</code> - The product code.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>product-code.type</code> - The type of the product code (<code>marketplace</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ramdisk-id</code> - The RAM disk ID.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>root-device-name</code> - The device name of the root device volume (for example, <code>/dev/sda1</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>root-device-type</code> - The type of the root device volume (<code>ebs</code> |
   *             <code>instance-store</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the image (<code>available</code> | <code>pending</code>
   *           | <code>failed</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state-reason-code</code> - The reason code for the state change.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state-reason-message</code> - The message for the state change.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sriov-net-support</code> - A value of <code>simple</code> indicates
   *                     that enhanced networking with the Intel 82599 VF interface is enabled.</p>
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
   *                   <code>virtualization-type</code> - The virtualization type (<code>paravirtual</code> |
   *             <code>hvm</code>).</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>The image IDs.</p>
   *          <p>Default: Describes all images available to you.</p>
   */
  ImageIds?: string[];

  /**
   * @public
   * <p>Scopes the results to images with the specified owners. You can specify a combination of
   *       Amazon Web Services account IDs, <code>self</code>, <code>amazon</code>, and <code>aws-marketplace</code>.
   *       If you omit this parameter, the results include all images for which you have launch permissions,
   *       regardless of ownership.</p>
   */
  Owners?: string[];

  /**
   * @public
   * <p>Specifies whether to include deprecated AMIs.</p>
   *          <p>Default: No deprecated AMIs are included in the response.</p>
   *          <note>
   *             <p>If you are the AMI owner, all deprecated AMIs appear in the response regardless of what
   *         you specify for this parameter.</p>
   *          </note>
   */
  IncludeDeprecated?: boolean;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   * 			and provides an error response. If you have the required permissions, the error response is
   * 			<code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The maximum number of items to return for this request.
   *          To get the next page of items, make another request with the token returned in the output.
   * 	        For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const ArchitectureValues = {
  arm64: "arm64",
  arm64_mac: "arm64_mac",
  i386: "i386",
  x86_64: "x86_64",
  x86_64_mac: "x86_64_mac",
} as const;

/**
 * @public
 */
export type ArchitectureValues = (typeof ArchitectureValues)[keyof typeof ArchitectureValues];

/**
 * @public
 * @enum
 */
export const BootModeValues = {
  legacy_bios: "legacy-bios",
  uefi: "uefi",
  uefi_preferred: "uefi-preferred",
} as const;

/**
 * @public
 */
export type BootModeValues = (typeof BootModeValues)[keyof typeof BootModeValues];

/**
 * @public
 * @enum
 */
export const HypervisorType = {
  ovm: "ovm",
  xen: "xen",
} as const;

/**
 * @public
 */
export type HypervisorType = (typeof HypervisorType)[keyof typeof HypervisorType];

/**
 * @public
 * @enum
 */
export const ImageTypeValues = {
  kernel: "kernel",
  machine: "machine",
  ramdisk: "ramdisk",
} as const;

/**
 * @public
 */
export type ImageTypeValues = (typeof ImageTypeValues)[keyof typeof ImageTypeValues];

/**
 * @public
 * @enum
 */
export const ImdsSupportValues = {
  v2_0: "v2.0",
} as const;

/**
 * @public
 */
export type ImdsSupportValues = (typeof ImdsSupportValues)[keyof typeof ImdsSupportValues];

/**
 * @public
 * @enum
 */
export const DeviceType = {
  ebs: "ebs",
  instance_store: "instance-store",
} as const;

/**
 * @public
 */
export type DeviceType = (typeof DeviceType)[keyof typeof DeviceType];

/**
 * @public
 * @enum
 */
export const ImageState = {
  available: "available",
  deregistered: "deregistered",
  error: "error",
  failed: "failed",
  invalid: "invalid",
  pending: "pending",
  transient: "transient",
} as const;

/**
 * @public
 */
export type ImageState = (typeof ImageState)[keyof typeof ImageState];

/**
 * @public
 * @enum
 */
export const TpmSupportValues = {
  v2_0: "v2.0",
} as const;

/**
 * @public
 */
export type TpmSupportValues = (typeof TpmSupportValues)[keyof typeof TpmSupportValues];

/**
 * @public
 * @enum
 */
export const VirtualizationType = {
  hvm: "hvm",
  paravirtual: "paravirtual",
} as const;

/**
 * @public
 */
export type VirtualizationType = (typeof VirtualizationType)[keyof typeof VirtualizationType];

/**
 * @public
 * <p>Describes an image.</p>
 */
export interface Image {
  /**
   * @public
   * <p>The architecture of the image.</p>
   */
  Architecture?: ArchitectureValues | string;

  /**
   * @public
   * <p>The date and time the image was created.</p>
   */
  CreationDate?: string;

  /**
   * @public
   * <p>The ID of the AMI.</p>
   */
  ImageId?: string;

  /**
   * @public
   * <p>The location of the AMI.</p>
   */
  ImageLocation?: string;

  /**
   * @public
   * <p>The type of image.</p>
   */
  ImageType?: ImageTypeValues | string;

  /**
   * @public
   * <p>Indicates whether the image has public launch permissions. The value is <code>true</code> if
   * 				this image has public launch permissions or <code>false</code>
   * 				if it has only implicit and explicit launch permissions.</p>
   */
  Public?: boolean;

  /**
   * @public
   * <p>The kernel associated with the image, if any. Only applicable for machine images.</p>
   */
  KernelId?: string;

  /**
   * @public
   * <p>The ID of the Amazon Web Services account that owns the image.</p>
   */
  OwnerId?: string;

  /**
   * @public
   * <p>This value is set to <code>windows</code> for Windows AMIs; otherwise, it is blank.</p>
   */
  Platform?: PlatformValues | string;

  /**
   * @public
   * <p>The platform details associated with the billing code of the AMI. For more information,
   *       see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ami-billing-info.html">Understand
   *         AMI billing information</a> in the <i>Amazon EC2 User Guide</i>.</p>
   */
  PlatformDetails?: string;

  /**
   * @public
   * <p>The operation of the Amazon EC2 instance and the billing code that is associated with the AMI.
   *         <code>usageOperation</code> corresponds to the <a href="https://docs.aws.amazon.com/cur/latest/userguide/Lineitem-columns.html#Lineitem-details-O-Operation">lineitem/Operation</a> column on your Amazon Web Services Cost and Usage Report and in the <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/price-changes.html">Amazon Web Services Price
   *         	List API</a>. You can view these fields on the <b>Instances</b> or
   *     	<b>AMIs</b> pages in the Amazon EC2 console, or in the responses that are
   *     	returned by the <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeImages.html">DescribeImages</a>
   *     	command in the Amazon EC2 API, or the <a href="https://docs.aws.amazon.com/cli/latest/reference/ec2/describe-images.html">describe-images</a>
   *     	command in the CLI.</p>
   */
  UsageOperation?: string;

  /**
   * @public
   * <p>Any product codes associated with the AMI.</p>
   */
  ProductCodes?: ProductCode[];

  /**
   * @public
   * <p>The RAM disk associated with the image, if any. Only applicable for machine images.</p>
   */
  RamdiskId?: string;

  /**
   * @public
   * <p>The current state of the AMI. If the state is <code>available</code>, the image is successfully registered and can be used to launch an instance.</p>
   */
  State?: ImageState | string;

  /**
   * @public
   * <p>Any block device mapping entries.</p>
   */
  BlockDeviceMappings?: BlockDeviceMapping[];

  /**
   * @public
   * <p>The description of the AMI that was provided during image creation.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Specifies whether enhanced networking with ENA is enabled.</p>
   */
  EnaSupport?: boolean;

  /**
   * @public
   * <p>The hypervisor type of the image.</p>
   */
  Hypervisor?: HypervisorType | string;

  /**
   * @public
   * <p>The Amazon Web Services account alias (for example, <code>amazon</code>, <code>self</code>) or
   *        the Amazon Web Services account ID of the AMI owner.</p>
   */
  ImageOwnerAlias?: string;

  /**
   * @public
   * <p>The name of the AMI that was provided during image creation.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The device name of the root device volume (for example, <code>/dev/sda1</code>).</p>
   */
  RootDeviceName?: string;

  /**
   * @public
   * <p>The type of root device used by the AMI. The AMI can use an Amazon EBS volume or an instance store volume.</p>
   */
  RootDeviceType?: DeviceType | string;

  /**
   * @public
   * <p>Specifies whether enhanced networking with the Intel 82599 Virtual Function interface is enabled.</p>
   */
  SriovNetSupport?: string;

  /**
   * @public
   * <p>The reason for the state change.</p>
   */
  StateReason?: StateReason;

  /**
   * @public
   * <p>Any tags assigned to the image.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>The type of virtualization of the AMI.</p>
   */
  VirtualizationType?: VirtualizationType | string;

  /**
   * @public
   * <p>The boot mode of the image. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ami-boot.html">Boot modes</a> in the
   *         <i>Amazon EC2 User Guide</i>.</p>
   */
  BootMode?: BootModeValues | string;

  /**
   * @public
   * <p>If the image is configured for NitroTPM support, the value is <code>v2.0</code>.
   *       For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/nitrotpm.html">NitroTPM</a> in the
   *       <i>Amazon EC2 User Guide</i>.</p>
   */
  TpmSupport?: TpmSupportValues | string;

  /**
   * @public
   * <p>The date and time to deprecate the AMI, in UTC, in the following format:
   *      <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z.
   *       If you specified a value for seconds, Amazon EC2 rounds the seconds to the
   *       nearest minute.</p>
   */
  DeprecationTime?: string;

  /**
   * @public
   * <p>If <code>v2.0</code>, it indicates that IMDSv2 is specified in the AMI. Instances launched
   *       from this AMI will have <code>HttpTokens</code> automatically set to <code>required</code> so
   *       that, by default, the instance requires that IMDSv2 is used when requesting instance metadata.
   *       In addition, <code>HttpPutResponseHopLimit</code> is set to <code>2</code>. For more
   *       information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configuring-IMDS-new-instances.html#configure-IMDS-new-instances-ami-configuration">Configure
   *         the AMI</a> in the <i>Amazon EC2 User Guide</i>.</p>
   */
  ImdsSupport?: ImdsSupportValues | string;
}

/**
 * @public
 */
export interface DescribeImagesResult {
  /**
   * @public
   * <p>Information about the images.</p>
   */
  Images?: Image[];

  /**
   * @public
   * <p>The token to include in another request to get the next page of items. This value is <code>null</code> when there
   *          are no more items to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeImportImageTasksRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>Filter tasks using the <code>task-state</code> filter and one of the following values: <code>active</code>,
   *     <code>completed</code>, <code>deleting</code>, or <code>deleted</code>.</p>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>The IDs of the import image tasks.</p>
   */
  ImportTaskIds?: string[];

  /**
   * @public
   * <p>The maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>A token that indicates the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p> The response information for license configurations.</p>
 */
export interface ImportImageLicenseConfigurationResponse {
  /**
   * @public
   * <p>The ARN of a license configuration.</p>
   */
  LicenseConfigurationArn?: string;
}

/**
 * @public
 * <p>Describes the Amazon S3 bucket for the disk image.</p>
 */
export interface UserBucketDetails {
  /**
   * @public
   * <p>The Amazon S3 bucket from which the disk image was created.</p>
   */
  S3Bucket?: string;

  /**
   * @public
   * <p>The file name of the disk image.</p>
   */
  S3Key?: string;
}

/**
 * @public
 * <p>Describes the snapshot created from the imported disk.</p>
 */
export interface SnapshotDetail {
  /**
   * @public
   * <p>A description for the snapshot.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The block device mapping for the snapshot.</p>
   */
  DeviceName?: string;

  /**
   * @public
   * <p>The size of the disk in the snapshot, in GiB.</p>
   */
  DiskImageSize?: number;

  /**
   * @public
   * <p>The format of the disk image from which the snapshot is created.</p>
   */
  Format?: string;

  /**
   * @public
   * <p>The percentage of progress for the task.</p>
   */
  Progress?: string;

  /**
   * @public
   * <p>The snapshot ID of the disk being imported.</p>
   */
  SnapshotId?: string;

  /**
   * @public
   * <p>A brief status of the snapshot creation.</p>
   */
  Status?: string;

  /**
   * @public
   * <p>A detailed status message for the snapshot creation.</p>
   */
  StatusMessage?: string;

  /**
   * @public
   * <p>The URL used to access the disk image.</p>
   */
  Url?: string;

  /**
   * @public
   * <p>The Amazon S3 bucket for the disk image.</p>
   */
  UserBucket?: UserBucketDetails;
}

/**
 * @public
 * <p>Describes an import image task.</p>
 */
export interface ImportImageTask {
  /**
   * @public
   * <p>The architecture of the virtual machine.</p>
   *          <p>Valid values: <code>i386</code> | <code>x86_64</code> | <code>arm64</code>
   *          </p>
   */
  Architecture?: string;

  /**
   * @public
   * <p>A description of the import task.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Indicates whether the image is encrypted.</p>
   */
  Encrypted?: boolean;

  /**
   * @public
   * <p>The target hypervisor for the import task.</p>
   *          <p>Valid values: <code>xen</code>
   *          </p>
   */
  Hypervisor?: string;

  /**
   * @public
   * <p>The ID of the Amazon Machine Image (AMI) of the imported virtual machine.</p>
   */
  ImageId?: string;

  /**
   * @public
   * <p>The ID of the import image task.</p>
   */
  ImportTaskId?: string;

  /**
   * @public
   * <p>The identifier for the KMS key that was used to create the encrypted image.</p>
   */
  KmsKeyId?: string;

  /**
   * @public
   * <p>The license type of the virtual machine.</p>
   */
  LicenseType?: string;

  /**
   * @public
   * <p>The description string for the import image task.</p>
   */
  Platform?: string;

  /**
   * @public
   * <p>The percentage of progress of the import image task.</p>
   */
  Progress?: string;

  /**
   * @public
   * <p>Information about the snapshots.</p>
   */
  SnapshotDetails?: SnapshotDetail[];

  /**
   * @public
   * <p>A brief status for the import image task.</p>
   */
  Status?: string;

  /**
   * @public
   * <p>A descriptive status message for the import image task.</p>
   */
  StatusMessage?: string;

  /**
   * @public
   * <p>The tags for the import image task.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>The ARNs of the license configurations that are associated with the import image task.</p>
   */
  LicenseSpecifications?: ImportImageLicenseConfigurationResponse[];

  /**
   * @public
   * <p>The usage operation value.</p>
   */
  UsageOperation?: string;

  /**
   * @public
   * <p>The boot mode of the virtual machine.</p>
   */
  BootMode?: BootModeValues | string;
}

/**
 * @public
 */
export interface DescribeImportImageTasksResult {
  /**
   * @public
   * <p>A list of zero or more import image tasks that are currently active or were completed or canceled in the
   *    previous 7 days.</p>
   */
  ImportImageTasks?: ImportImageTask[];

  /**
   * @public
   * <p>The token to use to get the next page of results. This value is <code>null</code> when there are no more results
   *    to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeImportSnapshotTasksRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The filters.</p>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>A list of import snapshot task IDs.</p>
   */
  ImportTaskIds?: string[];

  /**
   * @public
   * <p>The maximum number of results to return in a single call. To retrieve the remaining results, make another call
   *    with the returned <code>NextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>A token that indicates the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Details about the import snapshot task.</p>
 */
export interface SnapshotTaskDetail {
  /**
   * @public
   * <p>The description of the snapshot.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The size of the disk in the snapshot, in GiB.</p>
   */
  DiskImageSize?: number;

  /**
   * @public
   * <p>Indicates whether the snapshot is encrypted.</p>
   */
  Encrypted?: boolean;

  /**
   * @public
   * <p>The format of the disk image from which the snapshot is created.</p>
   */
  Format?: string;

  /**
   * @public
   * <p>The identifier for the KMS key that was used to create the encrypted snapshot.</p>
   */
  KmsKeyId?: string;

  /**
   * @public
   * <p>The percentage of completion for the import snapshot task.</p>
   */
  Progress?: string;

  /**
   * @public
   * <p>The snapshot ID of the disk being imported.</p>
   */
  SnapshotId?: string;

  /**
   * @public
   * <p>A brief status for the import snapshot task.</p>
   */
  Status?: string;

  /**
   * @public
   * <p>A detailed status message for the import snapshot task.</p>
   */
  StatusMessage?: string;

  /**
   * @public
   * <p>The URL of the disk image from which the snapshot is created.</p>
   */
  Url?: string;

  /**
   * @public
   * <p>The Amazon S3 bucket for the disk image.</p>
   */
  UserBucket?: UserBucketDetails;
}

/**
 * @public
 * <p>Describes an import snapshot task.</p>
 */
export interface ImportSnapshotTask {
  /**
   * @public
   * <p>A description of the import snapshot task.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The ID of the import snapshot task.</p>
   */
  ImportTaskId?: string;

  /**
   * @public
   * <p>Describes an import snapshot task.</p>
   */
  SnapshotTaskDetail?: SnapshotTaskDetail;

  /**
   * @public
   * <p>The tags for the import snapshot task.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface DescribeImportSnapshotTasksResult {
  /**
   * @public
   * <p>A list of zero or more import snapshot tasks that are currently active or were completed or canceled in the
   *    previous 7 days.</p>
   */
  ImportSnapshotTasks?: ImportSnapshotTask[];

  /**
   * @public
   * <p>The token to use to get the next page of results. This value is <code>null</code> when there are no more results
   *    to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const InstanceAttributeName = {
  blockDeviceMapping: "blockDeviceMapping",
  disableApiStop: "disableApiStop",
  disableApiTermination: "disableApiTermination",
  ebsOptimized: "ebsOptimized",
  enaSupport: "enaSupport",
  enclaveOptions: "enclaveOptions",
  groupSet: "groupSet",
  instanceInitiatedShutdownBehavior: "instanceInitiatedShutdownBehavior",
  instanceType: "instanceType",
  kernel: "kernel",
  productCodes: "productCodes",
  ramdisk: "ramdisk",
  rootDeviceName: "rootDeviceName",
  sourceDestCheck: "sourceDestCheck",
  sriovNetSupport: "sriovNetSupport",
  userData: "userData",
} as const;

/**
 * @public
 */
export type InstanceAttributeName = (typeof InstanceAttributeName)[keyof typeof InstanceAttributeName];

/**
 * @public
 */
export interface DescribeInstanceAttributeRequest {
  /**
   * @public
   * <p>The instance attribute.</p>
   *          <p>Note: The <code>enaSupport</code> attribute is not supported at this time.</p>
   */
  Attribute: InstanceAttributeName | string | undefined;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The ID of the instance.</p>
   */
  InstanceId: string | undefined;
}

/**
 * @public
 * <p>Describes a parameter used to set up an EBS volume in a block device mapping.</p>
 */
export interface EbsInstanceBlockDevice {
  /**
   * @public
   * <p>The time stamp when the attachment initiated.</p>
   */
  AttachTime?: Date;

  /**
   * @public
   * <p>Indicates whether the volume is deleted on instance termination.</p>
   */
  DeleteOnTermination?: boolean;

  /**
   * @public
   * <p>The attachment state.</p>
   */
  Status?: AttachmentStatus | string;

  /**
   * @public
   * <p>The ID of the EBS volume.</p>
   */
  VolumeId?: string;
}

/**
 * @public
 * <p>Describes a block device mapping.</p>
 */
export interface InstanceBlockDeviceMapping {
  /**
   * @public
   * <p>The device name (for example, <code>/dev/sdh</code> or <code>xvdh</code>).</p>
   */
  DeviceName?: string;

  /**
   * @public
   * <p>Parameters used to automatically set up EBS volumes when the instance is
   *             launched.</p>
   */
  Ebs?: EbsInstanceBlockDevice;
}

/**
 * @public
 * <p>Describes a value for a resource attribute that is a Boolean value.</p>
 */
export interface AttributeBooleanValue {
  /**
   * @public
   * <p>The attribute value. The valid values are <code>true</code> or <code>false</code>.</p>
   */
  Value?: boolean;
}

/**
 * @public
 * <p>Indicates whether the instance is enabled for Amazon Web Services Nitro
 *             Enclaves.</p>
 */
export interface EnclaveOptions {
  /**
   * @public
   * <p>If this parameter is set to <code>true</code>, the instance is enabled for Amazon Web Services Nitro Enclaves; otherwise, it is not enabled for Amazon Web Services Nitro
   *             Enclaves.</p>
   */
  Enabled?: boolean;
}

/**
 * @public
 * <p>Describes an instance attribute.</p>
 */
export interface InstanceAttribute {
  /**
   * @public
   * <p>The security groups associated with the instance.</p>
   */
  Groups?: GroupIdentifier[];

  /**
   * @public
   * <p>The block device mapping of the instance.</p>
   */
  BlockDeviceMappings?: InstanceBlockDeviceMapping[];

  /**
   * @public
   * <p>If the value is <code>true</code>, you can't terminate the instance through the Amazon
   *             EC2 console, CLI, or API; otherwise, you can.</p>
   */
  DisableApiTermination?: AttributeBooleanValue;

  /**
   * @public
   * <p>Indicates whether enhanced networking with ENA is enabled.</p>
   */
  EnaSupport?: AttributeBooleanValue;

  /**
   * @public
   * <p>To enable the instance for Amazon Web Services Nitro Enclaves, set this parameter to
   *                 <code>true</code>; otherwise, set it to <code>false</code>.</p>
   */
  EnclaveOptions?: EnclaveOptions;

  /**
   * @public
   * <p>Indicates whether the instance is optimized for Amazon EBS I/O.</p>
   */
  EbsOptimized?: AttributeBooleanValue;

  /**
   * @public
   * <p>The ID of the instance.</p>
   */
  InstanceId?: string;

  /**
   * @public
   * <p>Indicates whether an instance stops or terminates when you initiate shutdown from the
   *             instance (using the operating system command for system shutdown).</p>
   */
  InstanceInitiatedShutdownBehavior?: AttributeValue;

  /**
   * @public
   * <p>The instance type.</p>
   */
  InstanceType?: AttributeValue;

  /**
   * @public
   * <p>The kernel ID.</p>
   */
  KernelId?: AttributeValue;

  /**
   * @public
   * <p>A list of product codes.</p>
   */
  ProductCodes?: ProductCode[];

  /**
   * @public
   * <p>The RAM disk ID.</p>
   */
  RamdiskId?: AttributeValue;

  /**
   * @public
   * <p>The device name of the root device volume (for example,
   *             <code>/dev/sda1</code>).</p>
   */
  RootDeviceName?: AttributeValue;

  /**
   * @public
   * <p>Enable or disable source/destination checks, which ensure that the instance is either
   *             the source or the destination of any traffic that it receives. If the value is
   *                 <code>true</code>, source/destination checks are enabled; otherwise, they are
   *             disabled. The default value is <code>true</code>. You must disable source/destination
   *             checks if the instance runs services such as network address translation, routing, or
   *             firewalls.</p>
   */
  SourceDestCheck?: AttributeBooleanValue;

  /**
   * @public
   * <p>Indicates whether enhanced networking with the Intel 82599 Virtual Function interface
   *             is enabled.</p>
   */
  SriovNetSupport?: AttributeValue;

  /**
   * @public
   * <p>The user data.</p>
   */
  UserData?: AttributeValue;

  /**
   * @public
   * <p>To enable the instance for Amazon Web Services Stop Protection, set this parameter to
   *                 <code>true</code>; otherwise, set it to <code>false</code>.</p>
   */
  DisableApiStop?: AttributeBooleanValue;
}

/**
 * @public
 */
export interface DescribeInstanceConnectEndpointsRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *             and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *             Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The maximum number of items to return for this request.
   *          To get the next page of items, make another request with the token returned in the output.
   * 	        For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>instance-connect-endpoint-id</code> - The ID of the EC2 Instance Connect Endpoint.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the EC2 Instance Connect Endpoint (<code>create-in-progress</code> | <code>create-complete</code> | <code>create-failed</code> |
   *                     <code>delete-in-progress</code> | <code>delete-complete</code> | <code>delete-failed</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>subnet-id</code> - The ID of the subnet in which the EC2 Instance
   *                     Connect Endpoint was created.</p>
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
   *                   <code>tag-value</code> - The value of a tag assigned to the resource. Use this filter to find all resources
   *                     that have a tag with a specific value, regardless of tag key.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>vpc-id</code> - The ID of the VPC in which the EC2 Instance Connect
   *                     Endpoint was created.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>One or more EC2 Instance Connect Endpoint IDs.</p>
   */
  InstanceConnectEndpointIds?: string[];
}

/**
 * @public
 */
export interface DescribeInstanceConnectEndpointsResult {
  /**
   * @public
   * <p>Information about the EC2 Instance Connect Endpoints.</p>
   */
  InstanceConnectEndpoints?: Ec2InstanceConnectEndpoint[];

  /**
   * @public
   * <p>The token to include in another request to get the next page of items. This value is <code>null</code> when there
   *          are no more items to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeInstanceCreditSpecificationsRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>instance-id</code> - The ID of the instance.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>The instance IDs.</p>
   *          <p>Default: Describes all your instances.</p>
   *          <p>Constraints: Maximum 1000 explicitly specified instance IDs.</p>
   */
  InstanceIds?: string[];

  /**
   * @public
   * <p>The maximum number of items to return for this request.
   *          To get the next page of items, make another request with the token returned in the output.
   * 	        For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   *          <p>You cannot specify this parameter and the instance IDs
   *             parameter in the same call.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Describes the credit option for CPU usage of a burstable performance instance. </p>
 */
export interface InstanceCreditSpecification {
  /**
   * @public
   * <p>The ID of the instance.</p>
   */
  InstanceId?: string;

  /**
   * @public
   * <p>The credit option for CPU usage of the instance.</p>
   *          <p>Valid values: <code>standard</code> | <code>unlimited</code>
   *          </p>
   */
  CpuCredits?: string;
}

/**
 * @public
 */
export interface DescribeInstanceCreditSpecificationsResult {
  /**
   * @public
   * <p>Information about the credit option for CPU usage of an instance.</p>
   */
  InstanceCreditSpecifications?: InstanceCreditSpecification[];

  /**
   * @public
   * <p>The token to include in another request to get the next page of items. This value is <code>null</code> when there
   *          are no more items to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeInstanceEventNotificationAttributesRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface DescribeInstanceEventNotificationAttributesResult {
  /**
   * @public
   * <p>Information about the registered tag keys.</p>
   */
  InstanceTagAttribute?: InstanceTagNotificationAttribute;
}

/**
 * @public
 * <para>Describe instance event windows by InstanceEventWindow.</para>
 */
export interface DescribeInstanceEventWindowsRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The IDs of the event windows.</p>
   */
  InstanceEventWindowIds?: string[];

  /**
   * @public
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>dedicated-host-id</code> - The event windows associated with the specified
   *             Dedicated Host ID.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>event-window-name</code> - The event windows associated with the specified
   *             names. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-id</code> - The event windows associated with the specified instance
   *                ID.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-tag</code> - The event windows associated with the specified tag and
   *                value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-tag-key</code> - The event windows associated with the specified tag
   *                key, regardless of the value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-tag-value</code> - The event windows associated with the specified tag
   *                value, regardless of the key.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag:<key></code> - The key/value combination of a tag assigned to the
   *                event window. Use the tag key in the filter name and the tag value as the filter
   *                value. For example, to find all resources that have a tag with the key
   *                   <code>Owner</code> and the value <code>CMX</code>, specify <code>tag:Owner</code>
   *                for the filter name and <code>CMX</code> for the filter value. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the event window. Use this filter
   *                to find all event windows that have a tag with a specific key, regardless of the tag
   *                value. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag-value</code> - The value of a tag assigned to the event window. Use this
   *                filter to find all event windows that have a tag with a specific value, regardless of
   *                the tag key. </p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>The maximum number of results to return in a single call. To retrieve the remaining
   *          results, make another call with the returned <code>NextToken</code> value. This value can
   *          be between 20 and 500. You cannot specify this parameter and the event window IDs parameter
   *          in the same call.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token to request the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeInstanceEventWindowsResult {
  /**
   * @public
   * <p>Information about the event windows.</p>
   */
  InstanceEventWindows?: InstanceEventWindow[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return. </p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeInstancesRequest {
  /**
   * @public
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>affinity</code> - The affinity setting for an instance running on a
   *                     Dedicated Host (<code>default</code> | <code>host</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>architecture</code> - The instance architecture (<code>i386</code> |
   *                         <code>x86_64</code> | <code>arm64</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>availability-zone</code> - The Availability Zone of the instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>block-device-mapping.attach-time</code> - The attach time for an EBS
   *                     volume mapped to the instance, for example,
   *                         <code>2022-09-15T17:15:20.000Z</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>block-device-mapping.delete-on-termination</code> - A Boolean that
   *                     indicates whether the EBS volume is deleted on instance termination.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>block-device-mapping.device-name</code> - The device name specified in
   *                     the block device mapping (for example, <code>/dev/sdh</code> or
   *                         <code>xvdh</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>block-device-mapping.status</code> - The status for the EBS volume
   *                         (<code>attaching</code> | <code>attached</code> | <code>detaching</code> |
   *                         <code>detached</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>block-device-mapping.volume-id</code> - The volume ID of the EBS
   *                     volume.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>boot-mode</code> - The boot mode that was specified by the AMI
   *                         (<code>legacy-bios</code> | <code>uefi</code> |
   *                     <code>uefi-preferred</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>capacity-reservation-id</code> - The ID of the Capacity Reservation into which the
   *                     instance was launched.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>capacity-reservation-specification.capacity-reservation-preference</code>
   *                     - The instance's Capacity Reservation preference (<code>open</code> | <code>none</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>capacity-reservation-specification.capacity-reservation-target.capacity-reservation-id</code>
   *                     - The ID of the targeted Capacity Reservation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>capacity-reservation-specification.capacity-reservation-target.capacity-reservation-resource-group-arn</code>
   *                     - The ARN of the targeted Capacity Reservation group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>client-token</code> - The idempotency token you provided when you
   *                     launched the instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>current-instance-boot-mode</code> - The boot mode that is used to launch
   *                     the instance at launch or start (<code>legacy-bios</code> |
   *                     <code>uefi</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>dns-name</code> - The public DNS name of the instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ebs-optimized</code> - A Boolean that indicates whether the instance is
   *                     optimized for Amazon EBS I/O.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ena-support</code> - A Boolean that indicates whether the instance is
   *                     enabled for enhanced networking with ENA.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>enclave-options.enabled</code> - A Boolean that indicates whether the
   *                     instance is enabled for Amazon Web Services Nitro Enclaves.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>hibernation-options.configured</code> - A Boolean that indicates whether
   *                     the instance is enabled for hibernation. A value of <code>true</code> means that
   *                     the instance is enabled for hibernation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>host-id</code> - The ID of the Dedicated Host on which the instance is
   *                     running, if applicable.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>hypervisor</code> - The hypervisor type of the instance
   *                         (<code>ovm</code> | <code>xen</code>). The value <code>xen</code> is used
   *                     for both Xen and Nitro hypervisors.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>iam-instance-profile.arn</code> - The instance profile associated with
   *                     the instance. Specified as an ARN.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>iam-instance-profile.id</code> - The instance profile associated with
   *                     the instance. Specified as an ID.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>iam-instance-profile.name</code> - The instance profile associated with
   *                     the instance. Specified as an name.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>image-id</code> - The ID of the image used to launch the
   *                     instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-id</code> - The ID of the instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-lifecycle</code> - Indicates whether this is a Spot Instance or
   *                     a Scheduled Instance (<code>spot</code> | <code>scheduled</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-state-code</code> - The state of the instance, as a 16-bit
   *                     unsigned integer. The high byte is used for internal purposes and should be
   *                     ignored. The low byte is set based on the state represented. The valid values
   *                     are: 0 (pending), 16 (running), 32 (shutting-down), 48 (terminated), 64
   *                     (stopping), and 80 (stopped).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-state-name</code> - The state of the instance
   *                         (<code>pending</code> | <code>running</code> | <code>shutting-down</code> |
   *                         <code>terminated</code> | <code>stopping</code> |
   *                     <code>stopped</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-type</code> - The type of instance (for example,
   *                         <code>t2.micro</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance.group-id</code> - The ID of the security group for the
   *                     instance. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance.group-name</code> - The name of the security group for the
   *                     instance. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ip-address</code> - The public IPv4 address of the instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ipv6-address</code> - The IPv6 address of the instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>kernel-id</code> - The kernel ID.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>key-name</code> - The name of the key pair used when the instance was
   *                     launched.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>launch-index</code> - When launching multiple instances, this is the
   *                     index for the instance in the launch group (for example, 0, 1, 2, and so on).
   *                 </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>launch-time</code> - The time when the instance was launched, in the ISO
   *                     8601 format in the UTC time zone (YYYY-MM-DDThh:mm:ss.sssZ), for example,
   *                         <code>2021-09-29T11:04:43.305Z</code>. You can use a wildcard
   *                         (<code>*</code>), for example, <code>2021-09-29T*</code>, which matches an
   *                     entire day.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>license-pool</code> - </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>maintenance-options.auto-recovery</code> - The current automatic
   *                     recovery behavior of the instance (<code>disabled</code> | <code>default</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>metadata-options.http-endpoint</code> - The status of access to the HTTP
   *                     metadata endpoint on your instance (<code>enabled</code> |
   *                     <code>disabled</code>)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>metadata-options.http-protocol-ipv4</code> - Indicates whether the IPv4
   *                     endpoint is enabled (<code>disabled</code> | <code>enabled</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>metadata-options.http-protocol-ipv6</code> - Indicates whether the IPv6
   *                     endpoint is enabled (<code>disabled</code> | <code>enabled</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>metadata-options.http-put-response-hop-limit</code> - The HTTP metadata
   *                     request put response hop limit (integer, possible values <code>1</code> to
   *                         <code>64</code>)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>metadata-options.http-tokens</code> - The metadata request authorization
   *                     state (<code>optional</code> | <code>required</code>)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>metadata-options.instance-metadata-tags</code> - The status of access to
   *                     instance tags from the instance metadata (<code>enabled</code> |
   *                         <code>disabled</code>)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>metadata-options.state</code> - The state of the metadata option changes
   *                         (<code>pending</code> | <code>applied</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>monitoring-state</code> - Indicates whether detailed monitoring is
   *                     enabled (<code>disabled</code> | <code>enabled</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.addresses.primary</code> - Specifies whether the IPv4
   *                     address of the network interface is the primary private IPv4 address.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.addresses.private-ip-address</code> - The private IPv4
   *                     address associated with the network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.addresses.association.public-ip</code> - The ID of the
   *                     association of an Elastic IP address (IPv4) with a network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.addresses.association.ip-owner-id</code> - The owner
   *                     ID of the private IPv4 address associated with the network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.association.public-ip</code> - The address of the
   *                     Elastic IP address (IPv4) bound to the network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.association.ip-owner-id</code> - The owner of the
   *                     Elastic IP address (IPv4) associated with the network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.association.allocation-id</code> - The allocation ID
   *                     returned when you allocated the Elastic IP address (IPv4) for your network
   *                     interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.association.association-id</code> - The association ID
   *                     returned when the network interface was associated with an IPv4 address.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.attachment.attachment-id</code> - The ID of the
   *                     interface attachment.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.attachment.instance-id</code> - The ID of the instance
   *                     to which the network interface is attached.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.attachment.instance-owner-id</code> - The owner ID of
   *                     the instance to which the network interface is attached.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.attachment.device-index</code> - The device index to
   *                     which the network interface is attached.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.attachment.status</code> - The status of the
   *                     attachment (<code>attaching</code> | <code>attached</code> |
   *                         <code>detaching</code> | <code>detached</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.attachment.attach-time</code> - The time that the
   *                     network interface was attached to an instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.attachment.delete-on-termination</code> - Specifies
   *                     whether the attachment is deleted when an instance is terminated.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.availability-zone</code> - The Availability Zone for
   *                     the network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.description</code> - The description of the network
   *                     interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.group-id</code> - The ID of a security group
   *                     associated with the network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.group-name</code> - The name of a security group
   *                     associated with the network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.ipv6-addresses.ipv6-address</code> - The IPv6 address
   *                     associated with the network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.mac-address</code> - The MAC address of the network
   *                     interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.network-interface-id</code> - The ID of the network
   *                     interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.owner-id</code> - The ID of the owner of the network
   *                     interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.private-dns-name</code> - The private DNS name of the
   *                     network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.requester-id</code> - The requester ID for the network
   *                     interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.requester-managed</code> - Indicates whether the
   *                     network interface is being managed by Amazon Web Services.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.status</code> - The status of the network interface
   *                         (<code>available</code>) | <code>in-use</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.source-dest-check</code> - Whether the network
   *                     interface performs source/destination checking. A value of <code>true</code>
   *                     means that checking is enabled, and <code>false</code> means that checking is
   *                     disabled. The value must be <code>false</code> for the network interface to
   *                     perform network address translation (NAT) in your VPC.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.subnet-id</code> - The ID of the subnet for the
   *                     network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.vpc-id</code> - The ID of the VPC for the network
   *                     interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>outpost-arn</code> - The Amazon Resource Name (ARN) of the
   *                     Outpost.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>owner-id</code> - The Amazon Web Services account ID of the instance
   *                     owner.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>placement-group-name</code> - The name of the placement group for the
   *                     instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>placement-partition-number</code> - The partition in which the instance is
   *                     located.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>platform</code> - The platform. To list only Windows instances, use
   *                         <code>windows</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>platform-details</code> - The platform (<code>Linux/UNIX</code> |
   *                         <code>Red Hat BYOL Linux</code> | <code> Red Hat Enterprise Linux</code> |
   *                         <code>Red Hat Enterprise Linux with HA</code> | <code>Red Hat Enterprise
   *                         Linux with SQL Server Standard and HA</code> | <code>Red Hat Enterprise
   *                         Linux with SQL Server Enterprise and HA</code> | <code>Red Hat Enterprise
   *                         Linux with SQL Server Standard</code> | <code>Red Hat Enterprise Linux with
   *                         SQL Server Web</code> | <code>Red Hat Enterprise Linux with SQL Server
   *                         Enterprise</code> | <code>SQL Server Enterprise</code> | <code>SQL Server
   *                         Standard</code> | <code>SQL Server Web</code> | <code>SUSE Linux</code> |
   *                         <code>Ubuntu Pro</code> | <code>Windows</code> | <code>Windows BYOL</code> |
   *                         <code>Windows with SQL Server Enterprise</code> | <code>Windows with SQL
   *                         Server Standard</code> | <code>Windows with SQL Server Web</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>private-dns-name</code> - The private IPv4 DNS name of the
   *                     instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>private-dns-name-options.enable-resource-name-dns-a-record</code> - A
   *                     Boolean that indicates whether to respond to DNS queries for instance hostnames
   *                     with DNS A records.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>private-dns-name-options.enable-resource-name-dns-aaaa-record</code> - A
   *                     Boolean that indicates whether to respond to DNS queries for instance hostnames
   *                     with DNS AAAA records.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>private-dns-name-options.hostname-type</code> - The type of hostname
   *                     (<code>ip-name</code> | <code>resource-name</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>private-ip-address</code> - The private IPv4 address of the
   *                     instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>product-code</code> - The product code associated with the AMI used to
   *                     launch the instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>product-code.type</code> - The type of product code (<code>devpay</code>
   *                     | <code>marketplace</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ramdisk-id</code> - The RAM disk ID.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>reason</code> - The reason for the current state of the instance (for
   *                     example, shows "User Initiated [date]" when you stop or terminate the instance).
   *                     Similar to the state-reason-code filter.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>requester-id</code> - The ID of the entity that launched the instance on
   *                     your behalf (for example, Amazon Web Services Management Console, Auto Scaling, and so
   *                     on).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>reservation-id</code> - The ID of the instance's reservation. A
   *                     reservation ID is created any time you launch an instance. A reservation ID has
   *                     a one-to-one relationship with an instance launch request, but can be associated
   *                     with more than one instance if you launch multiple instances using the same
   *                     launch request. For example, if you launch one instance, you get one reservation
   *                     ID. If you launch ten instances using the same launch request, you also get one
   *                     reservation ID.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>root-device-name</code> - The device name of the root device volume (for
   *                     example, <code>/dev/sda1</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>root-device-type</code> - The type of the root device volume
   *                         (<code>ebs</code> | <code>instance-store</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>source-dest-check</code> - Indicates whether the instance performs
   *                     source/destination checking. A value of <code>true</code> means that checking is
   *                     enabled, and <code>false</code> means that checking is disabled. The value must
   *                     be <code>false</code> for the instance to perform network address translation
   *                     (NAT) in your VPC. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>spot-instance-request-id</code> - The ID of the Spot Instance
   *                     request.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state-reason-code</code> - The reason code for the state change.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state-reason-message</code> - A message that describes the state
   *                     change.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>subnet-id</code> - The ID of the subnet for the instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag:<key></code> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources that have a tag with a specific key, regardless of the tag value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tenancy</code> - The tenancy of an instance (<code>dedicated</code> |
   *                         <code>default</code> | <code>host</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tpm-support</code> - Indicates if the instance is configured for
   *                     NitroTPM support (<code>v2.0</code>). </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>usage-operation</code> - The usage operation value for the instance
   *                         (<code>RunInstances</code> | <code>RunInstances:00g0</code> |
   *                         <code>RunInstances:0010</code> | <code>RunInstances:1010</code> |
   *                         <code>RunInstances:1014</code> | <code>RunInstances:1110</code> |
   *                         <code>RunInstances:0014</code> | <code>RunInstances:0210</code> |
   *                         <code>RunInstances:0110</code> | <code>RunInstances:0100</code> |
   *                         <code>RunInstances:0004</code> | <code>RunInstances:0200</code> |
   *                         <code>RunInstances:000g</code> | <code>RunInstances:0g00</code> |
   *                         <code>RunInstances:0002</code> | <code>RunInstances:0800</code> |
   *                         <code>RunInstances:0102</code> | <code>RunInstances:0006</code> |
   *                         <code>RunInstances:0202</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>usage-operation-update-time</code> - The time that the usage operation
   *                     was last updated, for example, <code>2022-09-15T17:15:20.000Z</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>virtualization-type</code> - The virtualization type of the instance
   *                         (<code>paravirtual</code> | <code>hvm</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>vpc-id</code> - The ID of the VPC that the instance is running in.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>The instance IDs.</p>
   *          <p>Default: Describes all your instances.</p>
   */
  InstanceIds?: string[];

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The maximum number of items to return for this request.
   *          To get the next page of items, make another request with the token returned in the output.
   * 	        For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   *          <p>You cannot specify this parameter and the instance IDs parameter in the same request.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Describes the instance's Capacity Reservation targeting preferences. The action returns the
 *                 <code>capacityReservationPreference</code> response element if the instance is
 *             configured to run in On-Demand capacity, or if it is configured in run in any
 *                 <code>open</code> Capacity Reservation that has matching attributes (instance type, platform,
 *             Availability Zone). The action returns the <code>capacityReservationTarget</code>
 *             response element if the instance explicily targets a specific Capacity Reservation or Capacity Reservation group.</p>
 */
export interface CapacityReservationSpecificationResponse {
  /**
   * @public
   * <p>Describes the instance's Capacity Reservation preferences. Possible preferences include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>open</code> - The instance can run in any <code>open</code> Capacity Reservation that
   *                     has matching attributes (instance type, platform, Availability Zone).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>none</code> - The instance avoids running in a Capacity Reservation even if one is
   *                     available. The instance runs in On-Demand capacity.</p>
   *             </li>
   *          </ul>
   */
  CapacityReservationPreference?: CapacityReservationPreference | string;

  /**
   * @public
   * <p>Information about the targeted Capacity Reservation or Capacity Reservation group.</p>
   */
  CapacityReservationTarget?: CapacityReservationTargetResponse;
}

/**
 * @public
 * <p>The CPU options for the instance.</p>
 */
export interface CpuOptions {
  /**
   * @public
   * <p>The number of CPU cores for the instance.</p>
   */
  CoreCount?: number;

  /**
   * @public
   * <p>The number of threads per CPU core.</p>
   */
  ThreadsPerCore?: number;

  /**
   * @public
   * <p>Indicates whether the instance is enabled for AMD SEV-SNP. For more information, see
   *             <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/sev-snp.html">AMD SEV-SNP</a>.</p>
   */
  AmdSevSnp?: AmdSevSnpSpecification | string;
}

/**
 * @public
 * @enum
 */
export const InstanceBootModeValues = {
  legacy_bios: "legacy-bios",
  uefi: "uefi",
} as const;

/**
 * @public
 */
export type InstanceBootModeValues = (typeof InstanceBootModeValues)[keyof typeof InstanceBootModeValues];

/**
 * @public
 * <p>Describes the association between an instance and an Elastic Graphics accelerator.</p>
 */
export interface ElasticGpuAssociation {
  /**
   * @public
   * <p>The ID of the Elastic Graphics accelerator.</p>
   */
  ElasticGpuId?: string;

  /**
   * @public
   * <p>The ID of the association.</p>
   */
  ElasticGpuAssociationId?: string;

  /**
   * @public
   * <p>The state of the association between the instance and the
   *             Elastic Graphics accelerator.</p>
   */
  ElasticGpuAssociationState?: string;

  /**
   * @public
   * <p>The time the Elastic Graphics accelerator was associated with the instance.</p>
   */
  ElasticGpuAssociationTime?: string;
}

/**
 * @public
 * <p>
 *             Describes the association between an instance and an elastic inference accelerator.
 *         </p>
 */
export interface ElasticInferenceAcceleratorAssociation {
  /**
   * @public
   * <p>
   *             The Amazon Resource Name (ARN) of the elastic inference accelerator.
   *         </p>
   */
  ElasticInferenceAcceleratorArn?: string;

  /**
   * @public
   * <p>
   *             The ID of the association.
   *         </p>
   */
  ElasticInferenceAcceleratorAssociationId?: string;

  /**
   * @public
   * <p>
   *             The state of the elastic inference accelerator.
   *         </p>
   */
  ElasticInferenceAcceleratorAssociationState?: string;

  /**
   * @public
   * <p>
   *             The time at which the elastic inference accelerator is associated with an instance.
   *         </p>
   */
  ElasticInferenceAcceleratorAssociationTime?: Date;
}

/**
 * @internal
 */
export const DeleteVerifiedAccessTrustProviderResultFilterSensitiveLog = (
  obj: DeleteVerifiedAccessTrustProviderResult
): any => ({
  ...obj,
  ...(obj.VerifiedAccessTrustProvider && {
    VerifiedAccessTrustProvider: VerifiedAccessTrustProviderFilterSensitiveLog(obj.VerifiedAccessTrustProvider),
  }),
});

/**
 * @internal
 */
export const DescribeBundleTasksResultFilterSensitiveLog = (obj: DescribeBundleTasksResult): any => ({
  ...obj,
  ...(obj.BundleTasks && { BundleTasks: obj.BundleTasks.map((item) => BundleTaskFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const DiskImageDescriptionFilterSensitiveLog = (obj: DiskImageDescription): any => ({
  ...obj,
  ...(obj.ImportManifestUrl && { ImportManifestUrl: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ImportInstanceVolumeDetailItemFilterSensitiveLog = (obj: ImportInstanceVolumeDetailItem): any => ({
  ...obj,
  ...(obj.Image && { Image: DiskImageDescriptionFilterSensitiveLog(obj.Image) }),
});

/**
 * @internal
 */
export const ImportInstanceTaskDetailsFilterSensitiveLog = (obj: ImportInstanceTaskDetails): any => ({
  ...obj,
  ...(obj.Volumes && { Volumes: obj.Volumes.map((item) => ImportInstanceVolumeDetailItemFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const ImportVolumeTaskDetailsFilterSensitiveLog = (obj: ImportVolumeTaskDetails): any => ({
  ...obj,
  ...(obj.Image && { Image: DiskImageDescriptionFilterSensitiveLog(obj.Image) }),
});

/**
 * @internal
 */
export const ConversionTaskFilterSensitiveLog = (obj: ConversionTask): any => ({
  ...obj,
  ...(obj.ImportInstance && { ImportInstance: ImportInstanceTaskDetailsFilterSensitiveLog(obj.ImportInstance) }),
  ...(obj.ImportVolume && { ImportVolume: ImportVolumeTaskDetailsFilterSensitiveLog(obj.ImportVolume) }),
});

/**
 * @internal
 */
export const DescribeConversionTasksResultFilterSensitiveLog = (obj: DescribeConversionTasksResult): any => ({
  ...obj,
  ...(obj.ConversionTasks && {
    ConversionTasks: obj.ConversionTasks.map((item) => ConversionTaskFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const SnapshotDetailFilterSensitiveLog = (obj: SnapshotDetail): any => ({
  ...obj,
  ...(obj.Url && { Url: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ImportImageTaskFilterSensitiveLog = (obj: ImportImageTask): any => ({
  ...obj,
  ...(obj.SnapshotDetails && {
    SnapshotDetails: obj.SnapshotDetails.map((item) => SnapshotDetailFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const DescribeImportImageTasksResultFilterSensitiveLog = (obj: DescribeImportImageTasksResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SnapshotTaskDetailFilterSensitiveLog = (obj: SnapshotTaskDetail): any => ({
  ...obj,
  ...(obj.Url && { Url: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ImportSnapshotTaskFilterSensitiveLog = (obj: ImportSnapshotTask): any => ({
  ...obj,
  ...(obj.SnapshotTaskDetail && { SnapshotTaskDetail: SnapshotTaskDetailFilterSensitiveLog(obj.SnapshotTaskDetail) }),
});

/**
 * @internal
 */
export const DescribeImportSnapshotTasksResultFilterSensitiveLog = (obj: DescribeImportSnapshotTasksResult): any => ({
  ...obj,
  ...(obj.ImportSnapshotTasks && {
    ImportSnapshotTasks: obj.ImportSnapshotTasks.map((item) => ImportSnapshotTaskFilterSensitiveLog(item)),
  }),
});
