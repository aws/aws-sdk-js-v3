// smithy-typescript generated code
import { SENSITIVE_STRING } from "@smithy/smithy-client";

import {
  AcceleratorCount,
  AcceleratorCountRequest,
  AcceleratorManufacturer,
  AcceleratorName,
  AcceleratorTotalMemoryMiB,
  AcceleratorTotalMemoryMiBRequest,
  AcceleratorType,
  AccessScopePath,
  AccessScopePathRequest,
  AddIpamOperatingRegion,
  AddPrefixListEntry,
  AddressFamily,
  AttachmentStatus,
  CapacityAllocation,
  CapacityReservationFleetState,
  CapacityReservationInstancePlatform,
  CapacityReservationState,
  CapacityReservationTenancy,
  CapacityReservationType,
  EndDateType,
  InstanceEventWindow,
  InstanceMatchCriteria,
  NatGatewayAddress,
  PortRange,
  ResourceType,
  SubnetIpv6CidrBlockAssociation,
  Tag,
  TagSpecification,
  UnsuccessfulItem,
  VpcCidrBlockAssociation,
  VpcIpv6CidrBlockAssociation,
  WeekDay,
} from "./models_0";

/**
 * <p>Describes a Capacity Reservation.</p>
 * @public
 */
export interface CapacityReservation {
  /**
   * <p>The ID of the Capacity Reservation.</p>
   * @public
   */
  CapacityReservationId?: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services account that owns the Capacity Reservation.</p>
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Capacity Reservation.</p>
   * @public
   */
  CapacityReservationArn?: string | undefined;

  /**
   * <p>The Availability Zone ID of the Capacity Reservation.</p>
   * @public
   */
  AvailabilityZoneId?: string | undefined;

  /**
   * <p>The type of instance for which the Capacity Reservation reserves capacity.</p>
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * <p>The type of operating system for which the Capacity Reservation reserves capacity.</p>
   * @public
   */
  InstancePlatform?: CapacityReservationInstancePlatform | undefined;

  /**
   * <p>The Availability Zone in which the capacity is reserved.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>Indicates the tenancy of the Capacity Reservation. A Capacity Reservation can have one of the following tenancy settings:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>default</code> - The Capacity Reservation is created on hardware that is shared with other Amazon Web Services accounts.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>dedicated</code> - The Capacity Reservation is created on single-tenant hardware that is dedicated to a single Amazon Web Services account.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Tenancy?: CapacityReservationTenancy | undefined;

  /**
   * <p>The total number of instances for which the Capacity Reservation reserves capacity.</p>
   * @public
   */
  TotalInstanceCount?: number | undefined;

  /**
   * <p>The remaining capacity. Indicates the number of instances that can be launched in the Capacity Reservation.</p>
   * @public
   */
  AvailableInstanceCount?: number | undefined;

  /**
   * <p>Indicates whether the Capacity Reservation supports EBS-optimized instances. This optimization provides
   * 			dedicated throughput to Amazon EBS and an optimized configuration stack to provide
   * 			optimal I/O performance. This optimization isn't available with all instance types.
   * 			Additional usage charges apply when using an EBS- optimized instance.</p>
   * @public
   */
  EbsOptimized?: boolean | undefined;

  /**
   * <p>
   *             <i>Deprecated.</i>
   *          </p>
   * @public
   */
  EphemeralStorage?: boolean | undefined;

  /**
   * <p>The current state of the Capacity Reservation. A Capacity Reservation can be in one of the following states:</p>
   *          <ul>
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
   * @public
   */
  State?: CapacityReservationState | undefined;

  /**
   * <p>The date and time at which the Capacity Reservation was started.</p>
   * @public
   */
  StartDate?: Date | undefined;

  /**
   * <p>The date and time at which the Capacity Reservation expires. When a Capacity Reservation expires, the reserved capacity
   * 			is released and you can no longer launch instances into it. The Capacity Reservation's state changes to
   * 				<code>expired</code> when it reaches its end date and time.</p>
   * @public
   */
  EndDate?: Date | undefined;

  /**
   * <p>Indicates the way in which the Capacity Reservation ends. A Capacity Reservation can have one of the following end
   * 			types:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>unlimited</code> - The Capacity Reservation remains active until you explicitly cancel it.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>limited</code> - The Capacity Reservation expires automatically at a specified date and time.</p>
   *             </li>
   *          </ul>
   * @public
   */
  EndDateType?: EndDateType | undefined;

  /**
   * <p>Indicates the type of instance launches that the Capacity Reservation accepts. The options
   * 			include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>open</code> - The Capacity Reservation accepts all instances that have matching attributes (instance type, platform,
   * 				and Availability Zone). Instances that have matching attributes launch into the Capacity Reservation automatically without specifying
   * 				any additional parameters.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>targeted</code> - The Capacity Reservation only accepts instances that have matching attributes
   * 					(instance type, platform, and Availability Zone), and explicitly target the
   * 					Capacity Reservation. This ensures that only permitted instances can use the reserved capacity. </p>
   *             </li>
   *          </ul>
   * @public
   */
  InstanceMatchCriteria?: InstanceMatchCriteria | undefined;

  /**
   * <p>The date and time at which the Capacity Reservation was created.</p>
   * @public
   */
  CreateDate?: Date | undefined;

  /**
   * <p>Any tags assigned to the Capacity Reservation.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Outpost on which the Capacity
   * 	  		Reservation was created.</p>
   * @public
   */
  OutpostArn?: string | undefined;

  /**
   * <p>The ID of the Capacity Reservation Fleet to which the Capacity Reservation belongs.
   * 			Only valid for Capacity Reservations that were created by a Capacity Reservation Fleet.</p>
   * @public
   */
  CapacityReservationFleetId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the cluster placement group in which
   * 			the Capacity Reservation was created. For more information, see
   * 			<a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/cr-cpg.html">
   * 				Capacity Reservations for cluster placement groups</a> in the
   * 			<i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  PlacementGroupArn?: string | undefined;

  /**
   * <p>Information about instance capacity usage.</p>
   * @public
   */
  CapacityAllocations?: CapacityAllocation[] | undefined;

  /**
   * <p>The type of Capacity Reservation.</p>
   * @public
   */
  ReservationType?: CapacityReservationType | undefined;

  /**
   * <p>The ID of the Amazon Web Services account to which billing of the unused capacity
   * 			of the Capacity Reservation is assigned.</p>
   * @public
   */
  UnusedReservationBillingOwnerId?: string | undefined;
}

/**
 * @public
 */
export interface CreateCapacityReservationResult {
  /**
   * <p>Information about the Capacity Reservation.</p>
   * @public
   */
  CapacityReservation?: CapacityReservation | undefined;
}

/**
 * @public
 */
export interface CreateCapacityReservationBySplittingRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensure Idempotency</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>
   * 			The ID of the Capacity Reservation from which you want to split the available capacity.
   * 		</p>
   * @public
   */
  SourceCapacityReservationId: string | undefined;

  /**
   * <p>
   * 			The number of instances to split from the source Capacity Reservation.
   * 		</p>
   * @public
   */
  InstanceCount: number | undefined;

  /**
   * <p>
   * 			The tags to apply to the new Capacity Reservation.
   * 		</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;
}

/**
 * @public
 */
export interface CreateCapacityReservationBySplittingResult {
  /**
   * <p>
   * 			Information about the source Capacity Reservation.
   * 		</p>
   * @public
   */
  SourceCapacityReservation?: CapacityReservation | undefined;

  /**
   * <p>
   * 			Information about the destination Capacity Reservation.
   * 		</p>
   * @public
   */
  DestinationCapacityReservation?: CapacityReservation | undefined;

  /**
   * <p>
   * 			The number of instances in the new Capacity Reservation. The number of instances in the source Capacity Reservation was reduced by this amount.
   * 		</p>
   * @public
   */
  InstanceCount?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const FleetInstanceMatchCriteria = {
  open: "open",
} as const;

/**
 * @public
 */
export type FleetInstanceMatchCriteria = (typeof FleetInstanceMatchCriteria)[keyof typeof FleetInstanceMatchCriteria];

/**
 * @public
 * @enum
 */
export const _InstanceType = {
  a1_2xlarge: "a1.2xlarge",
  a1_4xlarge: "a1.4xlarge",
  a1_large: "a1.large",
  a1_medium: "a1.medium",
  a1_metal: "a1.metal",
  a1_xlarge: "a1.xlarge",
  c1_medium: "c1.medium",
  c1_xlarge: "c1.xlarge",
  c3_2xlarge: "c3.2xlarge",
  c3_4xlarge: "c3.4xlarge",
  c3_8xlarge: "c3.8xlarge",
  c3_large: "c3.large",
  c3_xlarge: "c3.xlarge",
  c4_2xlarge: "c4.2xlarge",
  c4_4xlarge: "c4.4xlarge",
  c4_8xlarge: "c4.8xlarge",
  c4_large: "c4.large",
  c4_xlarge: "c4.xlarge",
  c5_12xlarge: "c5.12xlarge",
  c5_18xlarge: "c5.18xlarge",
  c5_24xlarge: "c5.24xlarge",
  c5_2xlarge: "c5.2xlarge",
  c5_4xlarge: "c5.4xlarge",
  c5_9xlarge: "c5.9xlarge",
  c5_large: "c5.large",
  c5_metal: "c5.metal",
  c5_xlarge: "c5.xlarge",
  c5a_12xlarge: "c5a.12xlarge",
  c5a_16xlarge: "c5a.16xlarge",
  c5a_24xlarge: "c5a.24xlarge",
  c5a_2xlarge: "c5a.2xlarge",
  c5a_4xlarge: "c5a.4xlarge",
  c5a_8xlarge: "c5a.8xlarge",
  c5a_large: "c5a.large",
  c5a_xlarge: "c5a.xlarge",
  c5ad_12xlarge: "c5ad.12xlarge",
  c5ad_16xlarge: "c5ad.16xlarge",
  c5ad_24xlarge: "c5ad.24xlarge",
  c5ad_2xlarge: "c5ad.2xlarge",
  c5ad_4xlarge: "c5ad.4xlarge",
  c5ad_8xlarge: "c5ad.8xlarge",
  c5ad_large: "c5ad.large",
  c5ad_xlarge: "c5ad.xlarge",
  c5d_12xlarge: "c5d.12xlarge",
  c5d_18xlarge: "c5d.18xlarge",
  c5d_24xlarge: "c5d.24xlarge",
  c5d_2xlarge: "c5d.2xlarge",
  c5d_4xlarge: "c5d.4xlarge",
  c5d_9xlarge: "c5d.9xlarge",
  c5d_large: "c5d.large",
  c5d_metal: "c5d.metal",
  c5d_xlarge: "c5d.xlarge",
  c5n_18xlarge: "c5n.18xlarge",
  c5n_2xlarge: "c5n.2xlarge",
  c5n_4xlarge: "c5n.4xlarge",
  c5n_9xlarge: "c5n.9xlarge",
  c5n_large: "c5n.large",
  c5n_metal: "c5n.metal",
  c5n_xlarge: "c5n.xlarge",
  c6a_12xlarge: "c6a.12xlarge",
  c6a_16xlarge: "c6a.16xlarge",
  c6a_24xlarge: "c6a.24xlarge",
  c6a_2xlarge: "c6a.2xlarge",
  c6a_32xlarge: "c6a.32xlarge",
  c6a_48xlarge: "c6a.48xlarge",
  c6a_4xlarge: "c6a.4xlarge",
  c6a_8xlarge: "c6a.8xlarge",
  c6a_large: "c6a.large",
  c6a_metal: "c6a.metal",
  c6a_xlarge: "c6a.xlarge",
  c6g_12xlarge: "c6g.12xlarge",
  c6g_16xlarge: "c6g.16xlarge",
  c6g_2xlarge: "c6g.2xlarge",
  c6g_4xlarge: "c6g.4xlarge",
  c6g_8xlarge: "c6g.8xlarge",
  c6g_large: "c6g.large",
  c6g_medium: "c6g.medium",
  c6g_metal: "c6g.metal",
  c6g_xlarge: "c6g.xlarge",
  c6gd_12xlarge: "c6gd.12xlarge",
  c6gd_16xlarge: "c6gd.16xlarge",
  c6gd_2xlarge: "c6gd.2xlarge",
  c6gd_4xlarge: "c6gd.4xlarge",
  c6gd_8xlarge: "c6gd.8xlarge",
  c6gd_large: "c6gd.large",
  c6gd_medium: "c6gd.medium",
  c6gd_metal: "c6gd.metal",
  c6gd_xlarge: "c6gd.xlarge",
  c6gn_12xlarge: "c6gn.12xlarge",
  c6gn_16xlarge: "c6gn.16xlarge",
  c6gn_2xlarge: "c6gn.2xlarge",
  c6gn_4xlarge: "c6gn.4xlarge",
  c6gn_8xlarge: "c6gn.8xlarge",
  c6gn_large: "c6gn.large",
  c6gn_medium: "c6gn.medium",
  c6gn_xlarge: "c6gn.xlarge",
  c6i_12xlarge: "c6i.12xlarge",
  c6i_16xlarge: "c6i.16xlarge",
  c6i_24xlarge: "c6i.24xlarge",
  c6i_2xlarge: "c6i.2xlarge",
  c6i_32xlarge: "c6i.32xlarge",
  c6i_4xlarge: "c6i.4xlarge",
  c6i_8xlarge: "c6i.8xlarge",
  c6i_large: "c6i.large",
  c6i_metal: "c6i.metal",
  c6i_xlarge: "c6i.xlarge",
  c6id_12xlarge: "c6id.12xlarge",
  c6id_16xlarge: "c6id.16xlarge",
  c6id_24xlarge: "c6id.24xlarge",
  c6id_2xlarge: "c6id.2xlarge",
  c6id_32xlarge: "c6id.32xlarge",
  c6id_4xlarge: "c6id.4xlarge",
  c6id_8xlarge: "c6id.8xlarge",
  c6id_large: "c6id.large",
  c6id_metal: "c6id.metal",
  c6id_xlarge: "c6id.xlarge",
  c6in_12xlarge: "c6in.12xlarge",
  c6in_16xlarge: "c6in.16xlarge",
  c6in_24xlarge: "c6in.24xlarge",
  c6in_2xlarge: "c6in.2xlarge",
  c6in_32xlarge: "c6in.32xlarge",
  c6in_4xlarge: "c6in.4xlarge",
  c6in_8xlarge: "c6in.8xlarge",
  c6in_large: "c6in.large",
  c6in_metal: "c6in.metal",
  c6in_xlarge: "c6in.xlarge",
  c7a_12xlarge: "c7a.12xlarge",
  c7a_16xlarge: "c7a.16xlarge",
  c7a_24xlarge: "c7a.24xlarge",
  c7a_2xlarge: "c7a.2xlarge",
  c7a_32xlarge: "c7a.32xlarge",
  c7a_48xlarge: "c7a.48xlarge",
  c7a_4xlarge: "c7a.4xlarge",
  c7a_8xlarge: "c7a.8xlarge",
  c7a_large: "c7a.large",
  c7a_medium: "c7a.medium",
  c7a_metal_48xl: "c7a.metal-48xl",
  c7a_xlarge: "c7a.xlarge",
  c7g_12xlarge: "c7g.12xlarge",
  c7g_16xlarge: "c7g.16xlarge",
  c7g_2xlarge: "c7g.2xlarge",
  c7g_4xlarge: "c7g.4xlarge",
  c7g_8xlarge: "c7g.8xlarge",
  c7g_large: "c7g.large",
  c7g_medium: "c7g.medium",
  c7g_metal: "c7g.metal",
  c7g_xlarge: "c7g.xlarge",
  c7gd_12xlarge: "c7gd.12xlarge",
  c7gd_16xlarge: "c7gd.16xlarge",
  c7gd_2xlarge: "c7gd.2xlarge",
  c7gd_4xlarge: "c7gd.4xlarge",
  c7gd_8xlarge: "c7gd.8xlarge",
  c7gd_large: "c7gd.large",
  c7gd_medium: "c7gd.medium",
  c7gd_metal: "c7gd.metal",
  c7gd_xlarge: "c7gd.xlarge",
  c7gn_12xlarge: "c7gn.12xlarge",
  c7gn_16xlarge: "c7gn.16xlarge",
  c7gn_2xlarge: "c7gn.2xlarge",
  c7gn_4xlarge: "c7gn.4xlarge",
  c7gn_8xlarge: "c7gn.8xlarge",
  c7gn_large: "c7gn.large",
  c7gn_medium: "c7gn.medium",
  c7gn_metal: "c7gn.metal",
  c7gn_xlarge: "c7gn.xlarge",
  c7i_12xlarge: "c7i.12xlarge",
  c7i_16xlarge: "c7i.16xlarge",
  c7i_24xlarge: "c7i.24xlarge",
  c7i_2xlarge: "c7i.2xlarge",
  c7i_48xlarge: "c7i.48xlarge",
  c7i_4xlarge: "c7i.4xlarge",
  c7i_8xlarge: "c7i.8xlarge",
  c7i_flex_2xlarge: "c7i-flex.2xlarge",
  c7i_flex_4xlarge: "c7i-flex.4xlarge",
  c7i_flex_8xlarge: "c7i-flex.8xlarge",
  c7i_flex_large: "c7i-flex.large",
  c7i_flex_xlarge: "c7i-flex.xlarge",
  c7i_large: "c7i.large",
  c7i_metal_24xl: "c7i.metal-24xl",
  c7i_metal_48xl: "c7i.metal-48xl",
  c7i_xlarge: "c7i.xlarge",
  c8g_12xlarge: "c8g.12xlarge",
  c8g_16xlarge: "c8g.16xlarge",
  c8g_24xlarge: "c8g.24xlarge",
  c8g_2xlarge: "c8g.2xlarge",
  c8g_48xlarge: "c8g.48xlarge",
  c8g_4xlarge: "c8g.4xlarge",
  c8g_8xlarge: "c8g.8xlarge",
  c8g_large: "c8g.large",
  c8g_medium: "c8g.medium",
  c8g_metal_24xl: "c8g.metal-24xl",
  c8g_metal_48xl: "c8g.metal-48xl",
  c8g_xlarge: "c8g.xlarge",
  cc1_4xlarge: "cc1.4xlarge",
  cc2_8xlarge: "cc2.8xlarge",
  cg1_4xlarge: "cg1.4xlarge",
  cr1_8xlarge: "cr1.8xlarge",
  d2_2xlarge: "d2.2xlarge",
  d2_4xlarge: "d2.4xlarge",
  d2_8xlarge: "d2.8xlarge",
  d2_xlarge: "d2.xlarge",
  d3_2xlarge: "d3.2xlarge",
  d3_4xlarge: "d3.4xlarge",
  d3_8xlarge: "d3.8xlarge",
  d3_xlarge: "d3.xlarge",
  d3en_12xlarge: "d3en.12xlarge",
  d3en_2xlarge: "d3en.2xlarge",
  d3en_4xlarge: "d3en.4xlarge",
  d3en_6xlarge: "d3en.6xlarge",
  d3en_8xlarge: "d3en.8xlarge",
  d3en_xlarge: "d3en.xlarge",
  dl1_24xlarge: "dl1.24xlarge",
  dl2q_24xlarge: "dl2q.24xlarge",
  f1_16xlarge: "f1.16xlarge",
  f1_2xlarge: "f1.2xlarge",
  f1_4xlarge: "f1.4xlarge",
  g2_2xlarge: "g2.2xlarge",
  g2_8xlarge: "g2.8xlarge",
  g3_16xlarge: "g3.16xlarge",
  g3_4xlarge: "g3.4xlarge",
  g3_8xlarge: "g3.8xlarge",
  g3s_xlarge: "g3s.xlarge",
  g4ad_16xlarge: "g4ad.16xlarge",
  g4ad_2xlarge: "g4ad.2xlarge",
  g4ad_4xlarge: "g4ad.4xlarge",
  g4ad_8xlarge: "g4ad.8xlarge",
  g4ad_xlarge: "g4ad.xlarge",
  g4dn_12xlarge: "g4dn.12xlarge",
  g4dn_16xlarge: "g4dn.16xlarge",
  g4dn_2xlarge: "g4dn.2xlarge",
  g4dn_4xlarge: "g4dn.4xlarge",
  g4dn_8xlarge: "g4dn.8xlarge",
  g4dn_metal: "g4dn.metal",
  g4dn_xlarge: "g4dn.xlarge",
  g5_12xlarge: "g5.12xlarge",
  g5_16xlarge: "g5.16xlarge",
  g5_24xlarge: "g5.24xlarge",
  g5_2xlarge: "g5.2xlarge",
  g5_48xlarge: "g5.48xlarge",
  g5_4xlarge: "g5.4xlarge",
  g5_8xlarge: "g5.8xlarge",
  g5_xlarge: "g5.xlarge",
  g5g_16xlarge: "g5g.16xlarge",
  g5g_2xlarge: "g5g.2xlarge",
  g5g_4xlarge: "g5g.4xlarge",
  g5g_8xlarge: "g5g.8xlarge",
  g5g_metal: "g5g.metal",
  g5g_xlarge: "g5g.xlarge",
  g6_12xlarge: "g6.12xlarge",
  g6_16xlarge: "g6.16xlarge",
  g6_24xlarge: "g6.24xlarge",
  g6_2xlarge: "g6.2xlarge",
  g6_48xlarge: "g6.48xlarge",
  g6_4xlarge: "g6.4xlarge",
  g6_8xlarge: "g6.8xlarge",
  g6_xlarge: "g6.xlarge",
  g6e_12xlarge: "g6e.12xlarge",
  g6e_16xlarge: "g6e.16xlarge",
  g6e_24xlarge: "g6e.24xlarge",
  g6e_2xlarge: "g6e.2xlarge",
  g6e_48xlarge: "g6e.48xlarge",
  g6e_4xlarge: "g6e.4xlarge",
  g6e_8xlarge: "g6e.8xlarge",
  g6e_xlarge: "g6e.xlarge",
  gr6_4xlarge: "gr6.4xlarge",
  gr6_8xlarge: "gr6.8xlarge",
  h1_16xlarge: "h1.16xlarge",
  h1_2xlarge: "h1.2xlarge",
  h1_4xlarge: "h1.4xlarge",
  h1_8xlarge: "h1.8xlarge",
  hi1_4xlarge: "hi1.4xlarge",
  hpc6a_48xlarge: "hpc6a.48xlarge",
  hpc6id_32xlarge: "hpc6id.32xlarge",
  hpc7a_12xlarge: "hpc7a.12xlarge",
  hpc7a_24xlarge: "hpc7a.24xlarge",
  hpc7a_48xlarge: "hpc7a.48xlarge",
  hpc7a_96xlarge: "hpc7a.96xlarge",
  hpc7g_16xlarge: "hpc7g.16xlarge",
  hpc7g_4xlarge: "hpc7g.4xlarge",
  hpc7g_8xlarge: "hpc7g.8xlarge",
  hs1_8xlarge: "hs1.8xlarge",
  i2_2xlarge: "i2.2xlarge",
  i2_4xlarge: "i2.4xlarge",
  i2_8xlarge: "i2.8xlarge",
  i2_xlarge: "i2.xlarge",
  i3_16xlarge: "i3.16xlarge",
  i3_2xlarge: "i3.2xlarge",
  i3_4xlarge: "i3.4xlarge",
  i3_8xlarge: "i3.8xlarge",
  i3_large: "i3.large",
  i3_metal: "i3.metal",
  i3_xlarge: "i3.xlarge",
  i3en_12xlarge: "i3en.12xlarge",
  i3en_24xlarge: "i3en.24xlarge",
  i3en_2xlarge: "i3en.2xlarge",
  i3en_3xlarge: "i3en.3xlarge",
  i3en_6xlarge: "i3en.6xlarge",
  i3en_large: "i3en.large",
  i3en_metal: "i3en.metal",
  i3en_xlarge: "i3en.xlarge",
  i4g_16xlarge: "i4g.16xlarge",
  i4g_2xlarge: "i4g.2xlarge",
  i4g_4xlarge: "i4g.4xlarge",
  i4g_8xlarge: "i4g.8xlarge",
  i4g_large: "i4g.large",
  i4g_xlarge: "i4g.xlarge",
  i4i_12xlarge: "i4i.12xlarge",
  i4i_16xlarge: "i4i.16xlarge",
  i4i_24xlarge: "i4i.24xlarge",
  i4i_2xlarge: "i4i.2xlarge",
  i4i_32xlarge: "i4i.32xlarge",
  i4i_4xlarge: "i4i.4xlarge",
  i4i_8xlarge: "i4i.8xlarge",
  i4i_large: "i4i.large",
  i4i_metal: "i4i.metal",
  i4i_xlarge: "i4i.xlarge",
  im4gn_16xlarge: "im4gn.16xlarge",
  im4gn_2xlarge: "im4gn.2xlarge",
  im4gn_4xlarge: "im4gn.4xlarge",
  im4gn_8xlarge: "im4gn.8xlarge",
  im4gn_large: "im4gn.large",
  im4gn_xlarge: "im4gn.xlarge",
  inf1_24xlarge: "inf1.24xlarge",
  inf1_2xlarge: "inf1.2xlarge",
  inf1_6xlarge: "inf1.6xlarge",
  inf1_xlarge: "inf1.xlarge",
  inf2_24xlarge: "inf2.24xlarge",
  inf2_48xlarge: "inf2.48xlarge",
  inf2_8xlarge: "inf2.8xlarge",
  inf2_xlarge: "inf2.xlarge",
  is4gen_2xlarge: "is4gen.2xlarge",
  is4gen_4xlarge: "is4gen.4xlarge",
  is4gen_8xlarge: "is4gen.8xlarge",
  is4gen_large: "is4gen.large",
  is4gen_medium: "is4gen.medium",
  is4gen_xlarge: "is4gen.xlarge",
  m1_large: "m1.large",
  m1_medium: "m1.medium",
  m1_small: "m1.small",
  m1_xlarge: "m1.xlarge",
  m2_2xlarge: "m2.2xlarge",
  m2_4xlarge: "m2.4xlarge",
  m2_xlarge: "m2.xlarge",
  m3_2xlarge: "m3.2xlarge",
  m3_large: "m3.large",
  m3_medium: "m3.medium",
  m3_xlarge: "m3.xlarge",
  m4_10xlarge: "m4.10xlarge",
  m4_16xlarge: "m4.16xlarge",
  m4_2xlarge: "m4.2xlarge",
  m4_4xlarge: "m4.4xlarge",
  m4_large: "m4.large",
  m4_xlarge: "m4.xlarge",
  m5_12xlarge: "m5.12xlarge",
  m5_16xlarge: "m5.16xlarge",
  m5_24xlarge: "m5.24xlarge",
  m5_2xlarge: "m5.2xlarge",
  m5_4xlarge: "m5.4xlarge",
  m5_8xlarge: "m5.8xlarge",
  m5_large: "m5.large",
  m5_metal: "m5.metal",
  m5_xlarge: "m5.xlarge",
  m5a_12xlarge: "m5a.12xlarge",
  m5a_16xlarge: "m5a.16xlarge",
  m5a_24xlarge: "m5a.24xlarge",
  m5a_2xlarge: "m5a.2xlarge",
  m5a_4xlarge: "m5a.4xlarge",
  m5a_8xlarge: "m5a.8xlarge",
  m5a_large: "m5a.large",
  m5a_xlarge: "m5a.xlarge",
  m5ad_12xlarge: "m5ad.12xlarge",
  m5ad_16xlarge: "m5ad.16xlarge",
  m5ad_24xlarge: "m5ad.24xlarge",
  m5ad_2xlarge: "m5ad.2xlarge",
  m5ad_4xlarge: "m5ad.4xlarge",
  m5ad_8xlarge: "m5ad.8xlarge",
  m5ad_large: "m5ad.large",
  m5ad_xlarge: "m5ad.xlarge",
  m5d_12xlarge: "m5d.12xlarge",
  m5d_16xlarge: "m5d.16xlarge",
  m5d_24xlarge: "m5d.24xlarge",
  m5d_2xlarge: "m5d.2xlarge",
  m5d_4xlarge: "m5d.4xlarge",
  m5d_8xlarge: "m5d.8xlarge",
  m5d_large: "m5d.large",
  m5d_metal: "m5d.metal",
  m5d_xlarge: "m5d.xlarge",
  m5dn_12xlarge: "m5dn.12xlarge",
  m5dn_16xlarge: "m5dn.16xlarge",
  m5dn_24xlarge: "m5dn.24xlarge",
  m5dn_2xlarge: "m5dn.2xlarge",
  m5dn_4xlarge: "m5dn.4xlarge",
  m5dn_8xlarge: "m5dn.8xlarge",
  m5dn_large: "m5dn.large",
  m5dn_metal: "m5dn.metal",
  m5dn_xlarge: "m5dn.xlarge",
  m5n_12xlarge: "m5n.12xlarge",
  m5n_16xlarge: "m5n.16xlarge",
  m5n_24xlarge: "m5n.24xlarge",
  m5n_2xlarge: "m5n.2xlarge",
  m5n_4xlarge: "m5n.4xlarge",
  m5n_8xlarge: "m5n.8xlarge",
  m5n_large: "m5n.large",
  m5n_metal: "m5n.metal",
  m5n_xlarge: "m5n.xlarge",
  m5zn_12xlarge: "m5zn.12xlarge",
  m5zn_2xlarge: "m5zn.2xlarge",
  m5zn_3xlarge: "m5zn.3xlarge",
  m5zn_6xlarge: "m5zn.6xlarge",
  m5zn_large: "m5zn.large",
  m5zn_metal: "m5zn.metal",
  m5zn_xlarge: "m5zn.xlarge",
  m6a_12xlarge: "m6a.12xlarge",
  m6a_16xlarge: "m6a.16xlarge",
  m6a_24xlarge: "m6a.24xlarge",
  m6a_2xlarge: "m6a.2xlarge",
  m6a_32xlarge: "m6a.32xlarge",
  m6a_48xlarge: "m6a.48xlarge",
  m6a_4xlarge: "m6a.4xlarge",
  m6a_8xlarge: "m6a.8xlarge",
  m6a_large: "m6a.large",
  m6a_metal: "m6a.metal",
  m6a_xlarge: "m6a.xlarge",
  m6g_12xlarge: "m6g.12xlarge",
  m6g_16xlarge: "m6g.16xlarge",
  m6g_2xlarge: "m6g.2xlarge",
  m6g_4xlarge: "m6g.4xlarge",
  m6g_8xlarge: "m6g.8xlarge",
  m6g_large: "m6g.large",
  m6g_medium: "m6g.medium",
  m6g_metal: "m6g.metal",
  m6g_xlarge: "m6g.xlarge",
  m6gd_12xlarge: "m6gd.12xlarge",
  m6gd_16xlarge: "m6gd.16xlarge",
  m6gd_2xlarge: "m6gd.2xlarge",
  m6gd_4xlarge: "m6gd.4xlarge",
  m6gd_8xlarge: "m6gd.8xlarge",
  m6gd_large: "m6gd.large",
  m6gd_medium: "m6gd.medium",
  m6gd_metal: "m6gd.metal",
  m6gd_xlarge: "m6gd.xlarge",
  m6i_12xlarge: "m6i.12xlarge",
  m6i_16xlarge: "m6i.16xlarge",
  m6i_24xlarge: "m6i.24xlarge",
  m6i_2xlarge: "m6i.2xlarge",
  m6i_32xlarge: "m6i.32xlarge",
  m6i_4xlarge: "m6i.4xlarge",
  m6i_8xlarge: "m6i.8xlarge",
  m6i_large: "m6i.large",
  m6i_metal: "m6i.metal",
  m6i_xlarge: "m6i.xlarge",
  m6id_12xlarge: "m6id.12xlarge",
  m6id_16xlarge: "m6id.16xlarge",
  m6id_24xlarge: "m6id.24xlarge",
  m6id_2xlarge: "m6id.2xlarge",
  m6id_32xlarge: "m6id.32xlarge",
  m6id_4xlarge: "m6id.4xlarge",
  m6id_8xlarge: "m6id.8xlarge",
  m6id_large: "m6id.large",
  m6id_metal: "m6id.metal",
  m6id_xlarge: "m6id.xlarge",
  m6idn_12xlarge: "m6idn.12xlarge",
  m6idn_16xlarge: "m6idn.16xlarge",
  m6idn_24xlarge: "m6idn.24xlarge",
  m6idn_2xlarge: "m6idn.2xlarge",
  m6idn_32xlarge: "m6idn.32xlarge",
  m6idn_4xlarge: "m6idn.4xlarge",
  m6idn_8xlarge: "m6idn.8xlarge",
  m6idn_large: "m6idn.large",
  m6idn_metal: "m6idn.metal",
  m6idn_xlarge: "m6idn.xlarge",
  m6in_12xlarge: "m6in.12xlarge",
  m6in_16xlarge: "m6in.16xlarge",
  m6in_24xlarge: "m6in.24xlarge",
  m6in_2xlarge: "m6in.2xlarge",
  m6in_32xlarge: "m6in.32xlarge",
  m6in_4xlarge: "m6in.4xlarge",
  m6in_8xlarge: "m6in.8xlarge",
  m6in_large: "m6in.large",
  m6in_metal: "m6in.metal",
  m6in_xlarge: "m6in.xlarge",
  m7a_12xlarge: "m7a.12xlarge",
  m7a_16xlarge: "m7a.16xlarge",
  m7a_24xlarge: "m7a.24xlarge",
  m7a_2xlarge: "m7a.2xlarge",
  m7a_32xlarge: "m7a.32xlarge",
  m7a_48xlarge: "m7a.48xlarge",
  m7a_4xlarge: "m7a.4xlarge",
  m7a_8xlarge: "m7a.8xlarge",
  m7a_large: "m7a.large",
  m7a_medium: "m7a.medium",
  m7a_metal_48xl: "m7a.metal-48xl",
  m7a_xlarge: "m7a.xlarge",
  m7g_12xlarge: "m7g.12xlarge",
  m7g_16xlarge: "m7g.16xlarge",
  m7g_2xlarge: "m7g.2xlarge",
  m7g_4xlarge: "m7g.4xlarge",
  m7g_8xlarge: "m7g.8xlarge",
  m7g_large: "m7g.large",
  m7g_medium: "m7g.medium",
  m7g_metal: "m7g.metal",
  m7g_xlarge: "m7g.xlarge",
  m7gd_12xlarge: "m7gd.12xlarge",
  m7gd_16xlarge: "m7gd.16xlarge",
  m7gd_2xlarge: "m7gd.2xlarge",
  m7gd_4xlarge: "m7gd.4xlarge",
  m7gd_8xlarge: "m7gd.8xlarge",
  m7gd_large: "m7gd.large",
  m7gd_medium: "m7gd.medium",
  m7gd_metal: "m7gd.metal",
  m7gd_xlarge: "m7gd.xlarge",
  m7i_12xlarge: "m7i.12xlarge",
  m7i_16xlarge: "m7i.16xlarge",
  m7i_24xlarge: "m7i.24xlarge",
  m7i_2xlarge: "m7i.2xlarge",
  m7i_48xlarge: "m7i.48xlarge",
  m7i_4xlarge: "m7i.4xlarge",
  m7i_8xlarge: "m7i.8xlarge",
  m7i_flex_2xlarge: "m7i-flex.2xlarge",
  m7i_flex_4xlarge: "m7i-flex.4xlarge",
  m7i_flex_8xlarge: "m7i-flex.8xlarge",
  m7i_flex_large: "m7i-flex.large",
  m7i_flex_xlarge: "m7i-flex.xlarge",
  m7i_large: "m7i.large",
  m7i_metal_24xl: "m7i.metal-24xl",
  m7i_metal_48xl: "m7i.metal-48xl",
  m7i_xlarge: "m7i.xlarge",
  m8g_12xlarge: "m8g.12xlarge",
  m8g_16xlarge: "m8g.16xlarge",
  m8g_24xlarge: "m8g.24xlarge",
  m8g_2xlarge: "m8g.2xlarge",
  m8g_48xlarge: "m8g.48xlarge",
  m8g_4xlarge: "m8g.4xlarge",
  m8g_8xlarge: "m8g.8xlarge",
  m8g_large: "m8g.large",
  m8g_medium: "m8g.medium",
  m8g_metal_24xl: "m8g.metal-24xl",
  m8g_metal_48xl: "m8g.metal-48xl",
  m8g_xlarge: "m8g.xlarge",
  mac1_metal: "mac1.metal",
  mac2_m1ultra_metal: "mac2-m1ultra.metal",
  mac2_m2_metal: "mac2-m2.metal",
  mac2_m2pro_metal: "mac2-m2pro.metal",
  mac2_metal: "mac2.metal",
  p2_16xlarge: "p2.16xlarge",
  p2_8xlarge: "p2.8xlarge",
  p2_xlarge: "p2.xlarge",
  p3_16xlarge: "p3.16xlarge",
  p3_2xlarge: "p3.2xlarge",
  p3_8xlarge: "p3.8xlarge",
  p3dn_24xlarge: "p3dn.24xlarge",
  p4d_24xlarge: "p4d.24xlarge",
  p4de_24xlarge: "p4de.24xlarge",
  p5_48xlarge: "p5.48xlarge",
  r3_2xlarge: "r3.2xlarge",
  r3_4xlarge: "r3.4xlarge",
  r3_8xlarge: "r3.8xlarge",
  r3_large: "r3.large",
  r3_xlarge: "r3.xlarge",
  r4_16xlarge: "r4.16xlarge",
  r4_2xlarge: "r4.2xlarge",
  r4_4xlarge: "r4.4xlarge",
  r4_8xlarge: "r4.8xlarge",
  r4_large: "r4.large",
  r4_xlarge: "r4.xlarge",
  r5_12xlarge: "r5.12xlarge",
  r5_16xlarge: "r5.16xlarge",
  r5_24xlarge: "r5.24xlarge",
  r5_2xlarge: "r5.2xlarge",
  r5_4xlarge: "r5.4xlarge",
  r5_8xlarge: "r5.8xlarge",
  r5_large: "r5.large",
  r5_metal: "r5.metal",
  r5_xlarge: "r5.xlarge",
  r5a_12xlarge: "r5a.12xlarge",
  r5a_16xlarge: "r5a.16xlarge",
  r5a_24xlarge: "r5a.24xlarge",
  r5a_2xlarge: "r5a.2xlarge",
  r5a_4xlarge: "r5a.4xlarge",
  r5a_8xlarge: "r5a.8xlarge",
  r5a_large: "r5a.large",
  r5a_xlarge: "r5a.xlarge",
  r5ad_12xlarge: "r5ad.12xlarge",
  r5ad_16xlarge: "r5ad.16xlarge",
  r5ad_24xlarge: "r5ad.24xlarge",
  r5ad_2xlarge: "r5ad.2xlarge",
  r5ad_4xlarge: "r5ad.4xlarge",
  r5ad_8xlarge: "r5ad.8xlarge",
  r5ad_large: "r5ad.large",
  r5ad_xlarge: "r5ad.xlarge",
  r5b_12xlarge: "r5b.12xlarge",
  r5b_16xlarge: "r5b.16xlarge",
  r5b_24xlarge: "r5b.24xlarge",
  r5b_2xlarge: "r5b.2xlarge",
  r5b_4xlarge: "r5b.4xlarge",
  r5b_8xlarge: "r5b.8xlarge",
  r5b_large: "r5b.large",
  r5b_metal: "r5b.metal",
  r5b_xlarge: "r5b.xlarge",
  r5d_12xlarge: "r5d.12xlarge",
  r5d_16xlarge: "r5d.16xlarge",
  r5d_24xlarge: "r5d.24xlarge",
  r5d_2xlarge: "r5d.2xlarge",
  r5d_4xlarge: "r5d.4xlarge",
  r5d_8xlarge: "r5d.8xlarge",
  r5d_large: "r5d.large",
  r5d_metal: "r5d.metal",
  r5d_xlarge: "r5d.xlarge",
  r5dn_12xlarge: "r5dn.12xlarge",
  r5dn_16xlarge: "r5dn.16xlarge",
  r5dn_24xlarge: "r5dn.24xlarge",
  r5dn_2xlarge: "r5dn.2xlarge",
  r5dn_4xlarge: "r5dn.4xlarge",
  r5dn_8xlarge: "r5dn.8xlarge",
  r5dn_large: "r5dn.large",
  r5dn_metal: "r5dn.metal",
  r5dn_xlarge: "r5dn.xlarge",
  r5n_12xlarge: "r5n.12xlarge",
  r5n_16xlarge: "r5n.16xlarge",
  r5n_24xlarge: "r5n.24xlarge",
  r5n_2xlarge: "r5n.2xlarge",
  r5n_4xlarge: "r5n.4xlarge",
  r5n_8xlarge: "r5n.8xlarge",
  r5n_large: "r5n.large",
  r5n_metal: "r5n.metal",
  r5n_xlarge: "r5n.xlarge",
  r6a_12xlarge: "r6a.12xlarge",
  r6a_16xlarge: "r6a.16xlarge",
  r6a_24xlarge: "r6a.24xlarge",
  r6a_2xlarge: "r6a.2xlarge",
  r6a_32xlarge: "r6a.32xlarge",
  r6a_48xlarge: "r6a.48xlarge",
  r6a_4xlarge: "r6a.4xlarge",
  r6a_8xlarge: "r6a.8xlarge",
  r6a_large: "r6a.large",
  r6a_metal: "r6a.metal",
  r6a_xlarge: "r6a.xlarge",
  r6g_12xlarge: "r6g.12xlarge",
  r6g_16xlarge: "r6g.16xlarge",
  r6g_2xlarge: "r6g.2xlarge",
  r6g_4xlarge: "r6g.4xlarge",
  r6g_8xlarge: "r6g.8xlarge",
  r6g_large: "r6g.large",
  r6g_medium: "r6g.medium",
  r6g_metal: "r6g.metal",
  r6g_xlarge: "r6g.xlarge",
  r6gd_12xlarge: "r6gd.12xlarge",
  r6gd_16xlarge: "r6gd.16xlarge",
  r6gd_2xlarge: "r6gd.2xlarge",
  r6gd_4xlarge: "r6gd.4xlarge",
  r6gd_8xlarge: "r6gd.8xlarge",
  r6gd_large: "r6gd.large",
  r6gd_medium: "r6gd.medium",
  r6gd_metal: "r6gd.metal",
  r6gd_xlarge: "r6gd.xlarge",
  r6i_12xlarge: "r6i.12xlarge",
  r6i_16xlarge: "r6i.16xlarge",
  r6i_24xlarge: "r6i.24xlarge",
  r6i_2xlarge: "r6i.2xlarge",
  r6i_32xlarge: "r6i.32xlarge",
  r6i_4xlarge: "r6i.4xlarge",
  r6i_8xlarge: "r6i.8xlarge",
  r6i_large: "r6i.large",
  r6i_metal: "r6i.metal",
  r6i_xlarge: "r6i.xlarge",
  r6id_12xlarge: "r6id.12xlarge",
  r6id_16xlarge: "r6id.16xlarge",
  r6id_24xlarge: "r6id.24xlarge",
  r6id_2xlarge: "r6id.2xlarge",
  r6id_32xlarge: "r6id.32xlarge",
  r6id_4xlarge: "r6id.4xlarge",
  r6id_8xlarge: "r6id.8xlarge",
  r6id_large: "r6id.large",
  r6id_metal: "r6id.metal",
  r6id_xlarge: "r6id.xlarge",
  r6idn_12xlarge: "r6idn.12xlarge",
  r6idn_16xlarge: "r6idn.16xlarge",
  r6idn_24xlarge: "r6idn.24xlarge",
  r6idn_2xlarge: "r6idn.2xlarge",
  r6idn_32xlarge: "r6idn.32xlarge",
  r6idn_4xlarge: "r6idn.4xlarge",
  r6idn_8xlarge: "r6idn.8xlarge",
  r6idn_large: "r6idn.large",
  r6idn_metal: "r6idn.metal",
  r6idn_xlarge: "r6idn.xlarge",
  r6in_12xlarge: "r6in.12xlarge",
  r6in_16xlarge: "r6in.16xlarge",
  r6in_24xlarge: "r6in.24xlarge",
  r6in_2xlarge: "r6in.2xlarge",
  r6in_32xlarge: "r6in.32xlarge",
  r6in_4xlarge: "r6in.4xlarge",
  r6in_8xlarge: "r6in.8xlarge",
  r6in_large: "r6in.large",
  r6in_metal: "r6in.metal",
  r6in_xlarge: "r6in.xlarge",
  r7a_12xlarge: "r7a.12xlarge",
  r7a_16xlarge: "r7a.16xlarge",
  r7a_24xlarge: "r7a.24xlarge",
  r7a_2xlarge: "r7a.2xlarge",
  r7a_32xlarge: "r7a.32xlarge",
  r7a_48xlarge: "r7a.48xlarge",
  r7a_4xlarge: "r7a.4xlarge",
  r7a_8xlarge: "r7a.8xlarge",
  r7a_large: "r7a.large",
  r7a_medium: "r7a.medium",
  r7a_metal_48xl: "r7a.metal-48xl",
  r7a_xlarge: "r7a.xlarge",
  r7g_12xlarge: "r7g.12xlarge",
  r7g_16xlarge: "r7g.16xlarge",
  r7g_2xlarge: "r7g.2xlarge",
  r7g_4xlarge: "r7g.4xlarge",
  r7g_8xlarge: "r7g.8xlarge",
  r7g_large: "r7g.large",
  r7g_medium: "r7g.medium",
  r7g_metal: "r7g.metal",
  r7g_xlarge: "r7g.xlarge",
  r7gd_12xlarge: "r7gd.12xlarge",
  r7gd_16xlarge: "r7gd.16xlarge",
  r7gd_2xlarge: "r7gd.2xlarge",
  r7gd_4xlarge: "r7gd.4xlarge",
  r7gd_8xlarge: "r7gd.8xlarge",
  r7gd_large: "r7gd.large",
  r7gd_medium: "r7gd.medium",
  r7gd_metal: "r7gd.metal",
  r7gd_xlarge: "r7gd.xlarge",
  r7i_12xlarge: "r7i.12xlarge",
  r7i_16xlarge: "r7i.16xlarge",
  r7i_24xlarge: "r7i.24xlarge",
  r7i_2xlarge: "r7i.2xlarge",
  r7i_48xlarge: "r7i.48xlarge",
  r7i_4xlarge: "r7i.4xlarge",
  r7i_8xlarge: "r7i.8xlarge",
  r7i_large: "r7i.large",
  r7i_metal_24xl: "r7i.metal-24xl",
  r7i_metal_48xl: "r7i.metal-48xl",
  r7i_xlarge: "r7i.xlarge",
  r7iz_12xlarge: "r7iz.12xlarge",
  r7iz_16xlarge: "r7iz.16xlarge",
  r7iz_2xlarge: "r7iz.2xlarge",
  r7iz_32xlarge: "r7iz.32xlarge",
  r7iz_4xlarge: "r7iz.4xlarge",
  r7iz_8xlarge: "r7iz.8xlarge",
  r7iz_large: "r7iz.large",
  r7iz_metal_16xl: "r7iz.metal-16xl",
  r7iz_metal_32xl: "r7iz.metal-32xl",
  r7iz_xlarge: "r7iz.xlarge",
  r8g_12xlarge: "r8g.12xlarge",
  r8g_16xlarge: "r8g.16xlarge",
  r8g_24xlarge: "r8g.24xlarge",
  r8g_2xlarge: "r8g.2xlarge",
  r8g_48xlarge: "r8g.48xlarge",
  r8g_4xlarge: "r8g.4xlarge",
  r8g_8xlarge: "r8g.8xlarge",
  r8g_large: "r8g.large",
  r8g_medium: "r8g.medium",
  r8g_metal_24xl: "r8g.metal-24xl",
  r8g_metal_48xl: "r8g.metal-48xl",
  r8g_xlarge: "r8g.xlarge",
  t1_micro: "t1.micro",
  t2_2xlarge: "t2.2xlarge",
  t2_large: "t2.large",
  t2_medium: "t2.medium",
  t2_micro: "t2.micro",
  t2_nano: "t2.nano",
  t2_small: "t2.small",
  t2_xlarge: "t2.xlarge",
  t3_2xlarge: "t3.2xlarge",
  t3_large: "t3.large",
  t3_medium: "t3.medium",
  t3_micro: "t3.micro",
  t3_nano: "t3.nano",
  t3_small: "t3.small",
  t3_xlarge: "t3.xlarge",
  t3a_2xlarge: "t3a.2xlarge",
  t3a_large: "t3a.large",
  t3a_medium: "t3a.medium",
  t3a_micro: "t3a.micro",
  t3a_nano: "t3a.nano",
  t3a_small: "t3a.small",
  t3a_xlarge: "t3a.xlarge",
  t4g_2xlarge: "t4g.2xlarge",
  t4g_large: "t4g.large",
  t4g_medium: "t4g.medium",
  t4g_micro: "t4g.micro",
  t4g_nano: "t4g.nano",
  t4g_small: "t4g.small",
  t4g_xlarge: "t4g.xlarge",
  trn1_2xlarge: "trn1.2xlarge",
  trn1_32xlarge: "trn1.32xlarge",
  trn1n_32xlarge: "trn1n.32xlarge",
  u7i_12tb_224xlarge: "u7i-12tb.224xlarge",
  u7ib_12tb_224xlarge: "u7ib-12tb.224xlarge",
  u7in_16tb_224xlarge: "u7in-16tb.224xlarge",
  u7in_24tb_224xlarge: "u7in-24tb.224xlarge",
  u7in_32tb_224xlarge: "u7in-32tb.224xlarge",
  u_12tb1_112xlarge: "u-12tb1.112xlarge",
  u_12tb1_metal: "u-12tb1.metal",
  u_18tb1_112xlarge: "u-18tb1.112xlarge",
  u_18tb1_metal: "u-18tb1.metal",
  u_24tb1_112xlarge: "u-24tb1.112xlarge",
  u_24tb1_metal: "u-24tb1.metal",
  u_3tb1_56xlarge: "u-3tb1.56xlarge",
  u_6tb1_112xlarge: "u-6tb1.112xlarge",
  u_6tb1_56xlarge: "u-6tb1.56xlarge",
  u_6tb1_metal: "u-6tb1.metal",
  u_9tb1_112xlarge: "u-9tb1.112xlarge",
  u_9tb1_metal: "u-9tb1.metal",
  vt1_24xlarge: "vt1.24xlarge",
  vt1_3xlarge: "vt1.3xlarge",
  vt1_6xlarge: "vt1.6xlarge",
  x1_16xlarge: "x1.16xlarge",
  x1_32xlarge: "x1.32xlarge",
  x1e_16xlarge: "x1e.16xlarge",
  x1e_2xlarge: "x1e.2xlarge",
  x1e_32xlarge: "x1e.32xlarge",
  x1e_4xlarge: "x1e.4xlarge",
  x1e_8xlarge: "x1e.8xlarge",
  x1e_xlarge: "x1e.xlarge",
  x2gd_12xlarge: "x2gd.12xlarge",
  x2gd_16xlarge: "x2gd.16xlarge",
  x2gd_2xlarge: "x2gd.2xlarge",
  x2gd_4xlarge: "x2gd.4xlarge",
  x2gd_8xlarge: "x2gd.8xlarge",
  x2gd_large: "x2gd.large",
  x2gd_medium: "x2gd.medium",
  x2gd_metal: "x2gd.metal",
  x2gd_xlarge: "x2gd.xlarge",
  x2idn_16xlarge: "x2idn.16xlarge",
  x2idn_24xlarge: "x2idn.24xlarge",
  x2idn_32xlarge: "x2idn.32xlarge",
  x2idn_metal: "x2idn.metal",
  x2iedn_16xlarge: "x2iedn.16xlarge",
  x2iedn_24xlarge: "x2iedn.24xlarge",
  x2iedn_2xlarge: "x2iedn.2xlarge",
  x2iedn_32xlarge: "x2iedn.32xlarge",
  x2iedn_4xlarge: "x2iedn.4xlarge",
  x2iedn_8xlarge: "x2iedn.8xlarge",
  x2iedn_metal: "x2iedn.metal",
  x2iedn_xlarge: "x2iedn.xlarge",
  x2iezn_12xlarge: "x2iezn.12xlarge",
  x2iezn_2xlarge: "x2iezn.2xlarge",
  x2iezn_4xlarge: "x2iezn.4xlarge",
  x2iezn_6xlarge: "x2iezn.6xlarge",
  x2iezn_8xlarge: "x2iezn.8xlarge",
  x2iezn_metal: "x2iezn.metal",
  x8g_12xlarge: "x8g.12xlarge",
  x8g_16xlarge: "x8g.16xlarge",
  x8g_24xlarge: "x8g.24xlarge",
  x8g_2xlarge: "x8g.2xlarge",
  x8g_48xlarge: "x8g.48xlarge",
  x8g_4xlarge: "x8g.4xlarge",
  x8g_8xlarge: "x8g.8xlarge",
  x8g_large: "x8g.large",
  x8g_medium: "x8g.medium",
  x8g_metal_24xl: "x8g.metal-24xl",
  x8g_metal_48xl: "x8g.metal-48xl",
  x8g_xlarge: "x8g.xlarge",
  z1d_12xlarge: "z1d.12xlarge",
  z1d_2xlarge: "z1d.2xlarge",
  z1d_3xlarge: "z1d.3xlarge",
  z1d_6xlarge: "z1d.6xlarge",
  z1d_large: "z1d.large",
  z1d_metal: "z1d.metal",
  z1d_xlarge: "z1d.xlarge",
} as const;

/**
 * @public
 */
export type _InstanceType = (typeof _InstanceType)[keyof typeof _InstanceType];

/**
 * <p>Information about an instance type to use in a Capacity Reservation Fleet.</p>
 * @public
 */
export interface ReservationFleetInstanceSpecification {
  /**
   * <p>The instance type for which the Capacity Reservation Fleet reserves capacity.</p>
   * @public
   */
  InstanceType?: _InstanceType | undefined;

  /**
   * <p>The type of operating system for which the Capacity Reservation Fleet reserves capacity.</p>
   * @public
   */
  InstancePlatform?: CapacityReservationInstancePlatform | undefined;

  /**
   * <p>The number of capacity units provided by the specified instance type. This value, together
   * 			with the total target capacity that you specify for the Fleet determine the number of
   * 			instances for which the Fleet reserves capacity. Both values are based on units that
   * 			make sense for your workload. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/crfleet-concepts.html#target-capacity">Total target
   * 				capacity</a> in the <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  Weight?: number | undefined;

  /**
   * <p>The Availability Zone in which the Capacity Reservation Fleet reserves the capacity. A Capacity
   * 			Reservation Fleet can't span Availability Zones. All instance type specifications that you specify
   * 			for the Fleet must use the same Availability Zone.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>The ID of the Availability Zone in which the Capacity Reservation Fleet reserves the capacity. A
   * 			Capacity Reservation Fleet can't span Availability Zones. All instance type specifications that you
   * 			specify for the Fleet must use the same Availability Zone.</p>
   * @public
   */
  AvailabilityZoneId?: string | undefined;

  /**
   * <p>Indicates whether the Capacity Reservation Fleet supports EBS-optimized instances types. This
   * 			optimization provides dedicated throughput to Amazon EBS and an optimized configuration stack
   * 			to provide optimal I/O performance. This optimization isn't available with all instance types. Additional
   * 			usage charges apply when using EBS-optimized instance types.</p>
   * @public
   */
  EbsOptimized?: boolean | undefined;

  /**
   * <p>The priority to assign to the instance type. This value is used to determine which of the
   * 			instance types specified for the Fleet should be prioritized for use. A lower value
   * 			indicates a high priority. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/crfleet-concepts.html#instance-priority">Instance type
   * 				priority</a> in the <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  Priority?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const FleetCapacityReservationTenancy = {
  default: "default",
} as const;

/**
 * @public
 */
export type FleetCapacityReservationTenancy =
  (typeof FleetCapacityReservationTenancy)[keyof typeof FleetCapacityReservationTenancy];

/**
 * @public
 */
export interface CreateCapacityReservationFleetRequest {
  /**
   * <p>The strategy used by the Capacity Reservation Fleet to determine which of the specified
   * 			instance types to use. Currently, only the <code>prioritized</code> allocation strategy
   * 			is supported. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/crfleet-concepts.html#allocation-strategy"> Allocation
   * 				strategy</a> in the <i>Amazon EC2 User Guide</i>.</p>
   *          <p>Valid values: <code>prioritized</code>
   *          </p>
   * @public
   */
  AllocationStrategy?: string | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensure Idempotency</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>Information about the instance types for which to reserve the capacity.</p>
   * @public
   */
  InstanceTypeSpecifications: ReservationFleetInstanceSpecification[] | undefined;

  /**
   * <p>Indicates the tenancy of the Capacity Reservation Fleet. All Capacity Reservations
   * 			in the Fleet inherit this tenancy. The Capacity Reservation Fleet can have one of
   * 			the following tenancy settings:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>default</code> - The Capacity Reservation Fleet is created on hardware
   * 					that is shared with other Amazon Web Services accounts.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>dedicated</code> - The Capacity Reservations are created on single-tenant
   * 					hardware that is dedicated to a single Amazon Web Services account.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Tenancy?: FleetCapacityReservationTenancy | undefined;

  /**
   * <p>The total number of capacity units to be reserved by the Capacity Reservation Fleet. This
   * 			value, together with the instance type weights that you assign to each instance type
   * 			used by the Fleet determine the number of instances for which the Fleet reserves
   * 			capacity. Both values are based on units that make sense for your workload. For more
   * 			information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/crfleet-concepts.html#target-capacity">Total target
   * 				capacity</a> in the <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  TotalTargetCapacity: number | undefined;

  /**
   * <p>The date and time at which the Capacity Reservation Fleet expires. When the Capacity
   * 			Reservation Fleet expires, its state changes to <code>expired</code> and all of the Capacity
   * 			Reservations in the Fleet expire.</p>
   *          <p>The Capacity Reservation Fleet expires within an hour after the specified time. For example,
   * 			if you specify <code>5/31/2019</code>, <code>13:30:55</code>, the Capacity Reservation Fleet
   * 			is guaranteed to expire between <code>13:30:55</code> and <code>14:30:55</code> on
   * 			<code>5/31/2019</code>.
   * 		</p>
   * @public
   */
  EndDate?: Date | undefined;

  /**
   * <p>Indicates the type of instance launches that the Capacity Reservation Fleet accepts. All
   * 			Capacity Reservations in the Fleet inherit this instance matching criteria.</p>
   *          <p>Currently, Capacity Reservation Fleets support <code>open</code> instance matching criteria
   * 			only. This means that instances that have matching attributes (instance type, platform, and
   * 			Availability Zone) run in the Capacity Reservations automatically. Instances do not need to
   * 			explicitly target a Capacity Reservation Fleet to use its reserved capacity.</p>
   * @public
   */
  InstanceMatchCriteria?: FleetInstanceMatchCriteria | undefined;

  /**
   * <p>The tags to assign to the Capacity Reservation Fleet. The tags are automatically assigned
   * 			to the Capacity Reservations in the Fleet.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * <p>Information about a Capacity Reservation in a Capacity Reservation Fleet.</p>
 * @public
 */
export interface FleetCapacityReservation {
  /**
   * <p>The ID of the Capacity Reservation.</p>
   * @public
   */
  CapacityReservationId?: string | undefined;

  /**
   * <p>The ID of the Availability Zone in which the Capacity Reservation reserves capacity.</p>
   * @public
   */
  AvailabilityZoneId?: string | undefined;

  /**
   * <p>The instance type for which the Capacity Reservation reserves capacity.</p>
   * @public
   */
  InstanceType?: _InstanceType | undefined;

  /**
   * <p>The type of operating system for which the Capacity Reservation reserves capacity.</p>
   * @public
   */
  InstancePlatform?: CapacityReservationInstancePlatform | undefined;

  /**
   * <p>The Availability Zone in which the Capacity Reservation reserves capacity.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>The total number of instances for which the Capacity Reservation reserves capacity.</p>
   * @public
   */
  TotalInstanceCount?: number | undefined;

  /**
   * <p>The number of capacity units fulfilled by the Capacity Reservation. For more information,
   * 			see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/crfleet-concepts.html#target-capacity">Total target
   * 				capacity</a> in the <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  FulfilledCapacity?: number | undefined;

  /**
   * <p>Indicates whether the Capacity Reservation reserves capacity for EBS-optimized instance types.</p>
   * @public
   */
  EbsOptimized?: boolean | undefined;

  /**
   * <p>The date and time at which the Capacity Reservation was created.</p>
   * @public
   */
  CreateDate?: Date | undefined;

  /**
   * <p>The weight of the instance type in the Capacity Reservation Fleet. For more information, see
   * 				<a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/crfleet-concepts.html#instance-weight">Instance type
   * 				weight</a> in the <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  Weight?: number | undefined;

  /**
   * <p>The priority of the instance type in the Capacity Reservation Fleet. For more information,
   * 			see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/crfleet-concepts.html#instance-priority">Instance type
   * 				priority</a> in the <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  Priority?: number | undefined;
}

/**
 * @public
 */
export interface CreateCapacityReservationFleetResult {
  /**
   * <p>The ID of the Capacity Reservation Fleet.</p>
   * @public
   */
  CapacityReservationFleetId?: string | undefined;

  /**
   * <p>The status of the Capacity Reservation Fleet.</p>
   * @public
   */
  State?: CapacityReservationFleetState | undefined;

  /**
   * <p>The total number of capacity units for which the Capacity Reservation Fleet reserves capacity.</p>
   * @public
   */
  TotalTargetCapacity?: number | undefined;

  /**
   * <p>The requested capacity units that have been successfully reserved.</p>
   * @public
   */
  TotalFulfilledCapacity?: number | undefined;

  /**
   * <p>The instance matching criteria for the Capacity Reservation Fleet.</p>
   * @public
   */
  InstanceMatchCriteria?: FleetInstanceMatchCriteria | undefined;

  /**
   * <p>The allocation strategy used by the Capacity Reservation Fleet.</p>
   * @public
   */
  AllocationStrategy?: string | undefined;

  /**
   * <p>The date and time at which the Capacity Reservation Fleet was created.</p>
   * @public
   */
  CreateTime?: Date | undefined;

  /**
   * <p>The date and time at which the Capacity Reservation Fleet expires.</p>
   * @public
   */
  EndDate?: Date | undefined;

  /**
   * <p>Indicates the tenancy of Capacity Reservation Fleet.</p>
   * @public
   */
  Tenancy?: FleetCapacityReservationTenancy | undefined;

  /**
   * <p>Information about the individual Capacity Reservations in the Capacity Reservation Fleet.</p>
   * @public
   */
  FleetCapacityReservations?: FleetCapacityReservation[] | undefined;

  /**
   * <p>The tags assigned to the Capacity Reservation Fleet.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateCarrierGatewayRequest {
  /**
   * <p>The ID of the VPC to associate with the carrier gateway.</p>
   * @public
   */
  VpcId: string | undefined;

  /**
   * <p>The tags to associate with the carrier gateway.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. For more information, see <a href="https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html">How to ensure
   *                 idempotency</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const CarrierGatewayState = {
  available: "available",
  deleted: "deleted",
  deleting: "deleting",
  pending: "pending",
} as const;

/**
 * @public
 */
export type CarrierGatewayState = (typeof CarrierGatewayState)[keyof typeof CarrierGatewayState];

/**
 * <p>Describes a carrier gateway.</p>
 * @public
 */
export interface CarrierGateway {
  /**
   * <p>The ID of the carrier gateway.</p>
   * @public
   */
  CarrierGatewayId?: string | undefined;

  /**
   * <p>The ID of the VPC associated with the carrier gateway.</p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>The state of the carrier gateway.</p>
   * @public
   */
  State?: CarrierGatewayState | undefined;

  /**
   * <p>The Amazon Web Services account ID of the owner of the carrier gateway.</p>
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * <p>The tags assigned to the carrier gateway.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateCarrierGatewayResult {
  /**
   * <p>Information about the carrier gateway.</p>
   * @public
   */
  CarrierGateway?: CarrierGateway | undefined;
}

/**
 * <p>Describes the Active Directory to be used for client authentication.</p>
 * @public
 */
export interface DirectoryServiceAuthenticationRequest {
  /**
   * <p>The ID of the Active Directory to be used for authentication.</p>
   * @public
   */
  DirectoryId?: string | undefined;
}

/**
 * <p>The IAM SAML identity provider used for federated authentication.</p>
 * @public
 */
export interface FederatedAuthenticationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the IAM SAML identity provider.</p>
   * @public
   */
  SAMLProviderArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM SAML identity provider for the self-service portal.</p>
   * @public
   */
  SelfServiceSAMLProviderArn?: string | undefined;
}

/**
 * <p>Information about the client certificate to be used for authentication.</p>
 * @public
 */
export interface CertificateAuthenticationRequest {
  /**
   * <p>The ARN of the client certificate. The certificate must be signed by a certificate
   * 			authority (CA) and it must be provisioned in Certificate Manager (ACM).</p>
   * @public
   */
  ClientRootCertificateChainArn?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ClientVpnAuthenticationType = {
  certificate_authentication: "certificate-authentication",
  directory_service_authentication: "directory-service-authentication",
  federated_authentication: "federated-authentication",
} as const;

/**
 * @public
 */
export type ClientVpnAuthenticationType =
  (typeof ClientVpnAuthenticationType)[keyof typeof ClientVpnAuthenticationType];

/**
 * <p>Describes the authentication method to be used by a Client VPN endpoint. For more information, see <a href="https://docs.aws.amazon.com/vpn/latest/clientvpn-admin/authentication-authrization.html#client-authentication">Authentication</a>
 * 			in the <i>Client VPN Administrator Guide</i>.</p>
 * @public
 */
export interface ClientVpnAuthenticationRequest {
  /**
   * <p>The type of client authentication to be used.</p>
   * @public
   */
  Type?: ClientVpnAuthenticationType | undefined;

  /**
   * <p>Information about the Active Directory to be used, if applicable. You must provide this information if <b>Type</b> is <code>directory-service-authentication</code>.</p>
   * @public
   */
  ActiveDirectory?: DirectoryServiceAuthenticationRequest | undefined;

  /**
   * <p>Information about the authentication certificates to be used, if applicable. You must provide this information if <b>Type</b> is <code>certificate-authentication</code>.</p>
   * @public
   */
  MutualAuthentication?: CertificateAuthenticationRequest | undefined;

  /**
   * <p>Information about the IAM SAML identity provider to be used, if applicable. You must provide this information if <b>Type</b> is <code>federated-authentication</code>.</p>
   * @public
   */
  FederatedAuthentication?: FederatedAuthenticationRequest | undefined;
}

/**
 * <p>The options for managing connection authorization for new client connections.</p>
 * @public
 */
export interface ClientConnectOptions {
  /**
   * <p>Indicates whether client connect options are enabled. The default is <code>false</code> (not enabled).</p>
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Lambda function used for connection authorization.</p>
   * @public
   */
  LambdaFunctionArn?: string | undefined;
}

/**
 * <p>Options for enabling a customizable text banner that will be displayed on
 * 			Amazon Web Services provided clients when a VPN session is established.</p>
 * @public
 */
export interface ClientLoginBannerOptions {
  /**
   * <p>Enable or disable a customizable text banner that will be displayed on
   * 			Amazon Web Services provided clients when a VPN session is established.</p>
   *          <p>Valid values: <code>true | false</code>
   *          </p>
   *          <p>Default value: <code>false</code>
   *          </p>
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * <p>Customizable text that will be displayed in a banner on Amazon Web Services provided
   * 			clients when a VPN session is established. UTF-8 encoded characters only. Maximum of
   * 			1400 characters.</p>
   * @public
   */
  BannerText?: string | undefined;
}

/**
 * <p>Describes the client connection logging options for the Client VPN endpoint.</p>
 * @public
 */
export interface ConnectionLogOptions {
  /**
   * <p>Indicates whether connection logging is enabled.</p>
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * <p>The name of the CloudWatch Logs log group. Required if connection logging is enabled.</p>
   * @public
   */
  CloudwatchLogGroup?: string | undefined;

  /**
   * <p>The name of the CloudWatch Logs log stream to which the connection data is published.</p>
   * @public
   */
  CloudwatchLogStream?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const SelfServicePortal = {
  disabled: "disabled",
  enabled: "enabled",
} as const;

/**
 * @public
 */
export type SelfServicePortal = (typeof SelfServicePortal)[keyof typeof SelfServicePortal];

/**
 * @public
 * @enum
 */
export const TransportProtocol = {
  tcp: "tcp",
  udp: "udp",
} as const;

/**
 * @public
 */
export type TransportProtocol = (typeof TransportProtocol)[keyof typeof TransportProtocol];

/**
 * @public
 */
export interface CreateClientVpnEndpointRequest {
  /**
   * <p>The IPv4 address range, in CIDR notation, from which to assign client IP addresses. The address range cannot overlap with the local CIDR of the VPC in which the associated subnet is located, or the routes that you add manually. The address range cannot be changed after the Client VPN endpoint has been created. Client CIDR range must have a size of at least /22 and must not be greater than /12.</p>
   * @public
   */
  ClientCidrBlock: string | undefined;

  /**
   * <p>The ARN of the server certificate. For more information, see
   * 			the <a href="https://docs.aws.amazon.com/acm/latest/userguide/">Certificate Manager User Guide</a>.</p>
   * @public
   */
  ServerCertificateArn: string | undefined;

  /**
   * <p>Information about the authentication method to be used to authenticate clients.</p>
   * @public
   */
  AuthenticationOptions: ClientVpnAuthenticationRequest[] | undefined;

  /**
   * <p>Information about the client connection logging options.</p>
   *          <p>If you enable client connection logging, data about client connections is sent to a
   * 			Cloudwatch Logs log stream. The following information is logged:</p>
   *          <ul>
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
   * @public
   */
  ConnectionLogOptions: ConnectionLogOptions | undefined;

  /**
   * <p>Information about the DNS servers to be used for DNS resolution. A Client VPN endpoint can
   * 			have up to two DNS servers. If no DNS server is specified, the DNS address configured on the device is used for the DNS server.</p>
   * @public
   */
  DnsServers?: string[] | undefined;

  /**
   * <p>The transport protocol to be used by the VPN session.</p>
   *          <p>Default value: <code>udp</code>
   *          </p>
   * @public
   */
  TransportProtocol?: TransportProtocol | undefined;

  /**
   * <p>The port number to assign to the Client VPN endpoint for TCP and UDP traffic.</p>
   *          <p>Valid Values: <code>443</code> | <code>1194</code>
   *          </p>
   *          <p>Default Value: <code>443</code>
   *          </p>
   * @public
   */
  VpnPort?: number | undefined;

  /**
   * <p>A brief description of the Client VPN endpoint.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Indicates whether split-tunnel is enabled on the Client VPN endpoint.</p>
   *          <p>By default, split-tunnel on a VPN endpoint is disabled.</p>
   *          <p>For information about split-tunnel VPN endpoints, see <a href="https://docs.aws.amazon.com/vpn/latest/clientvpn-admin/split-tunnel-vpn.html">Split-tunnel Client VPN endpoint</a> in the
   * 			<i>Client VPN Administrator Guide</i>.</p>
   * @public
   */
  SplitTunnel?: boolean | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   * For more information, see <a href="https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html">Ensuring idempotency</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The tags to apply to the Client VPN endpoint during creation.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * <p>The IDs of one or more security groups to apply to the target network. You must also specify the ID of the VPC that contains the security groups.</p>
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * <p>The ID of the VPC to associate with the Client VPN endpoint. If no security group IDs are specified in the request, the default security group for the VPC is applied.</p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>Specify whether to enable the self-service portal for the Client VPN endpoint.</p>
   *          <p>Default Value: <code>enabled</code>
   *          </p>
   * @public
   */
  SelfServicePortal?: SelfServicePortal | undefined;

  /**
   * <p>The options for managing connection authorization for new client connections.</p>
   * @public
   */
  ClientConnectOptions?: ClientConnectOptions | undefined;

  /**
   * <p>The maximum VPN session duration time in hours.</p>
   *          <p>Valid values: <code>8 | 10 | 12 | 24</code>
   *          </p>
   *          <p>Default value: <code>24</code>
   *          </p>
   * @public
   */
  SessionTimeoutHours?: number | undefined;

  /**
   * <p>Options for enabling a customizable text banner that will be displayed on
   * 			Amazon Web Services provided clients when a VPN session is established.</p>
   * @public
   */
  ClientLoginBannerOptions?: ClientLoginBannerOptions | undefined;
}

/**
 * @public
 * @enum
 */
export const ClientVpnEndpointStatusCode = {
  available: "available",
  deleted: "deleted",
  deleting: "deleting",
  pending_associate: "pending-associate",
} as const;

/**
 * @public
 */
export type ClientVpnEndpointStatusCode =
  (typeof ClientVpnEndpointStatusCode)[keyof typeof ClientVpnEndpointStatusCode];

/**
 * <p>Describes the state of a Client VPN endpoint.</p>
 * @public
 */
export interface ClientVpnEndpointStatus {
  /**
   * <p>The state of the Client VPN endpoint. Possible states include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>pending-associate</code> - The Client VPN endpoint has been created but no target networks
   * 					have been associated. The Client VPN endpoint cannot accept connections.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>available</code> - The Client VPN endpoint has been created and a target network has been
   * 					associated. The Client VPN endpoint can accept connections.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deleting</code> - The Client VPN endpoint is being deleted. The Client VPN endpoint cannot accept
   * 					connections.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deleted</code> - The Client VPN endpoint has been deleted. The Client VPN endpoint cannot accept
   * 					connections.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Code?: ClientVpnEndpointStatusCode | undefined;

  /**
   * <p>A message about the status of the Client VPN endpoint.</p>
   * @public
   */
  Message?: string | undefined;
}

/**
 * @public
 */
export interface CreateClientVpnEndpointResult {
  /**
   * <p>The ID of the Client VPN endpoint.</p>
   * @public
   */
  ClientVpnEndpointId?: string | undefined;

  /**
   * <p>The current state of the Client VPN endpoint.</p>
   * @public
   */
  Status?: ClientVpnEndpointStatus | undefined;

  /**
   * <p>The DNS name to be used by clients when establishing their VPN session.</p>
   * @public
   */
  DnsName?: string | undefined;
}

/**
 * @public
 */
export interface CreateClientVpnRouteRequest {
  /**
   * <p>The ID of the Client VPN endpoint to which to add the route.</p>
   * @public
   */
  ClientVpnEndpointId: string | undefined;

  /**
   * <p>The IPv4 address range, in CIDR notation, of the route destination. For example:</p>
   *          <ul>
   *             <li>
   *                <p>To add a route for Internet access, enter <code>0.0.0.0/0</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>To add a route for a peered VPC, enter the peered VPC's IPv4 CIDR range</p>
   *             </li>
   *             <li>
   *                <p>To add a route for an on-premises network, enter the Amazon Web Services Site-to-Site VPN connection's IPv4 CIDR range</p>
   *             </li>
   *             <li>
   *                <p>To add a route for the local network, enter the client CIDR range</p>
   *             </li>
   *          </ul>
   * @public
   */
  DestinationCidrBlock: string | undefined;

  /**
   * <p>The ID of the subnet through which you want to route traffic. The specified subnet must be
   * 			an existing target network of the Client VPN endpoint.</p>
   *          <p>Alternatively, if you're adding a route for the local network, specify <code>local</code>.</p>
   * @public
   */
  TargetVpcSubnetId: string | undefined;

  /**
   * <p>A brief description of the route.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   * For more information, see <a href="https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html">Ensuring idempotency</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 * @enum
 */
export const ClientVpnRouteStatusCode = {
  active: "active",
  creating: "creating",
  deleting: "deleting",
  failed: "failed",
} as const;

/**
 * @public
 */
export type ClientVpnRouteStatusCode = (typeof ClientVpnRouteStatusCode)[keyof typeof ClientVpnRouteStatusCode];

/**
 * <p>Describes the state of a Client VPN endpoint route.</p>
 * @public
 */
export interface ClientVpnRouteStatus {
  /**
   * <p>The state of the Client VPN endpoint route.</p>
   * @public
   */
  Code?: ClientVpnRouteStatusCode | undefined;

  /**
   * <p>A message about the status of the Client VPN endpoint route, if applicable.</p>
   * @public
   */
  Message?: string | undefined;
}

/**
 * @public
 */
export interface CreateClientVpnRouteResult {
  /**
   * <p>The current state of the route.</p>
   * @public
   */
  Status?: ClientVpnRouteStatus | undefined;
}

/**
 * @public
 */
export interface CreateCoipCidrRequest {
  /**
   * <p>
   *       A customer-owned IP address range to create.
   *       </p>
   * @public
   */
  Cidr: string | undefined;

  /**
   * <p>
   *          The ID of the address pool.
   *       </p>
   * @public
   */
  CoipPoolId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * <p>
 *       Information about a customer-owned IP address range.
 *       </p>
 * @public
 */
export interface CoipCidr {
  /**
   * <p>
   *       An address range in a customer-owned IP address space.
   *       </p>
   * @public
   */
  Cidr?: string | undefined;

  /**
   * <p>
   *          The ID of the address pool.
   *       </p>
   * @public
   */
  CoipPoolId?: string | undefined;

  /**
   * <p>
   *       The ID of the local gateway route table.
   *       </p>
   * @public
   */
  LocalGatewayRouteTableId?: string | undefined;
}

/**
 * @public
 */
export interface CreateCoipCidrResult {
  /**
   * <p>
   *          Information about a range of customer-owned IP addresses.
   *       </p>
   * @public
   */
  CoipCidr?: CoipCidr | undefined;
}

/**
 * @public
 */
export interface CreateCoipPoolRequest {
  /**
   * <p>
   *       The ID of the local gateway route table.
   *       </p>
   * @public
   */
  LocalGatewayRouteTableId: string | undefined;

  /**
   * <p>
   *       The tags to assign to the CoIP address pool.
   *       </p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * <p>Describes a customer-owned address pool.</p>
 * @public
 */
export interface CoipPool {
  /**
   * <p>The ID of the address pool.</p>
   * @public
   */
  PoolId?: string | undefined;

  /**
   * <p>The address ranges of the address pool.</p>
   * @public
   */
  PoolCidrs?: string[] | undefined;

  /**
   * <p>The ID of the local gateway route table.</p>
   * @public
   */
  LocalGatewayRouteTableId?: string | undefined;

  /**
   * <p>The tags.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The ARN of the address pool.</p>
   * @public
   */
  PoolArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateCoipPoolResult {
  /**
   * <p>Information about the CoIP address pool.</p>
   * @public
   */
  CoipPool?: CoipPool | undefined;
}

/**
 * @public
 * @enum
 */
export const GatewayType = {
  ipsec_1: "ipsec.1",
} as const;

/**
 * @public
 */
export type GatewayType = (typeof GatewayType)[keyof typeof GatewayType];

/**
 * <p>Contains the parameters for CreateCustomerGateway.</p>
 * @public
 */
export interface CreateCustomerGatewayRequest {
  /**
   * <p>For customer gateway devices that support BGP, specify the device's ASN. You must specify either <code>BgpAsn</code> or <code>BgpAsnExtended</code> when creating the customer gateway. If the ASN is larger than <code>2,147,483,647</code>, you must use <code>BgpAsnExtended</code>.</p>
   *          <p>Default: 65000</p>
   *          <p>Valid values: <code>1</code> to <code>2,147,483,647</code>
   *          </p>
   * @public
   */
  BgpAsn?: number | undefined;

  /**
   * <p>
   *             <i>This member has been deprecated.</i> The Internet-routable IP address for the customer gateway's outside interface. The
   *             address must be static.</p>
   * @public
   */
  PublicIp?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the customer gateway certificate.</p>
   * @public
   */
  CertificateArn?: string | undefined;

  /**
   * <p>The type of VPN connection that this customer gateway supports
   *             (<code>ipsec.1</code>).</p>
   * @public
   */
  Type: GatewayType | undefined;

  /**
   * <p>The tags to apply to the customer gateway.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * <p>A name for the customer gateway device.</p>
   *          <p>Length Constraints: Up to 255 characters.</p>
   * @public
   */
  DeviceName?: string | undefined;

  /**
   * <p>IPv4 address for the customer gateway device's outside interface. The address must be
   *             static. If <code>OutsideIpAddressType</code> in your VPN connection options is set to
   *                 <code>PrivateIpv4</code>, you can use an RFC6598 or RFC1918 private IPv4 address. If
   *                 <code>OutsideIpAddressType</code> is set to <code>PublicIpv4</code>, you can use a
   *             public IPv4 address. </p>
   * @public
   */
  IpAddress?: string | undefined;

  /**
   * <p>For customer gateway devices that support BGP, specify the device's ASN. You must specify either <code>BgpAsn</code> or <code>BgpAsnExtended</code> when creating the customer gateway. If the ASN is larger than <code>2,147,483,647</code>, you must use <code>BgpAsnExtended</code>.</p>
   *          <p>Valid values: <code>2,147,483,648</code> to <code>4,294,967,295</code>
   *          </p>
   * @public
   */
  BgpAsnExtended?: number | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * <p>Describes a customer gateway.</p>
 * @public
 */
export interface CustomerGateway {
  /**
   * <p>The Amazon Resource Name (ARN) for the customer gateway certificate.</p>
   * @public
   */
  CertificateArn?: string | undefined;

  /**
   * <p>The name of customer gateway device.</p>
   * @public
   */
  DeviceName?: string | undefined;

  /**
   * <p>Any tags assigned to the customer gateway.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The customer gateway device's Border Gateway Protocol (BGP) Autonomous System Number
   *             (ASN).</p>
   *          <p>Valid values: <code>2,147,483,648</code> to <code>4,294,967,295</code>
   *          </p>
   * @public
   */
  BgpAsnExtended?: string | undefined;

  /**
   * <p>The ID of the customer gateway.</p>
   * @public
   */
  CustomerGatewayId?: string | undefined;

  /**
   * <p>The current state of the customer gateway (<code>pending | available | deleting |
   *                 deleted</code>).</p>
   * @public
   */
  State?: string | undefined;

  /**
   * <p>The type of VPN connection the customer gateway supports
   *             (<code>ipsec.1</code>).</p>
   * @public
   */
  Type?: string | undefined;

  /**
   * <p>
   *             IPv4 address for the customer gateway device's outside interface. The address must be static. If <code>OutsideIpAddressType</code> in your VPN connection options is set to <code>PrivateIpv4</code>, you can use an RFC6598 or RFC1918 private IPv4 address. If <code>OutsideIpAddressType</code> is set to <code>PublicIpv4</code>, you can use a public IPv4 address.
   *         </p>
   * @public
   */
  IpAddress?: string | undefined;

  /**
   * <p>The customer gateway device's Border Gateway Protocol (BGP) Autonomous System Number
   *             (ASN).</p>
   *          <p>Valid values: <code>1</code> to <code>2,147,483,647</code>
   *          </p>
   * @public
   */
  BgpAsn?: string | undefined;
}

/**
 * <p>Contains the output of CreateCustomerGateway.</p>
 * @public
 */
export interface CreateCustomerGatewayResult {
  /**
   * <p>Information about the customer gateway.</p>
   * @public
   */
  CustomerGateway?: CustomerGateway | undefined;
}

/**
 * @public
 */
export interface CreateDefaultSubnetRequest {
  /**
   * <p>The Availability Zone in which to create the default subnet.</p>
   * @public
   */
  AvailabilityZone: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>Indicates whether to create an IPv6 only subnet. If you already have a default subnet
   *             for this Availability Zone, you must delete it before you can create an IPv6 only subnet.</p>
   * @public
   */
  Ipv6Native?: boolean | undefined;
}

/**
 * @public
 * @enum
 */
export const HostnameType = {
  ip_name: "ip-name",
  resource_name: "resource-name",
} as const;

/**
 * @public
 */
export type HostnameType = (typeof HostnameType)[keyof typeof HostnameType];

/**
 * <p>Describes the options for instance hostnames.</p>
 * @public
 */
export interface PrivateDnsNameOptionsOnLaunch {
  /**
   * <p>The type of hostname for EC2 instances. For IPv4 only subnets, an instance DNS name
   *             must be based on the instance IPv4 address. For IPv6 only subnets, an instance DNS name
   *             must be based on the instance ID. For dual-stack subnets, you can specify whether DNS
   *             names use the instance IPv4 address or the instance ID.</p>
   * @public
   */
  HostnameType?: HostnameType | undefined;

  /**
   * <p>Indicates whether to respond to DNS queries for instance hostnames with DNS A
   *             records.</p>
   * @public
   */
  EnableResourceNameDnsARecord?: boolean | undefined;

  /**
   * <p>Indicates whether to respond to DNS queries for instance hostname with DNS AAAA
   *             records.</p>
   * @public
   */
  EnableResourceNameDnsAAAARecord?: boolean | undefined;
}

/**
 * @public
 * @enum
 */
export const SubnetState = {
  available: "available",
  pending: "pending",
  unavailable: "unavailable",
} as const;

/**
 * @public
 */
export type SubnetState = (typeof SubnetState)[keyof typeof SubnetState];

/**
 * <p>Describes a subnet.</p>
 * @public
 */
export interface Subnet {
  /**
   * <p>The AZ ID of the subnet.</p>
   * @public
   */
  AvailabilityZoneId?: string | undefined;

  /**
   * <p>
   *             Indicates the device position for local network interfaces in this subnet. For example,
   *             <code>1</code> indicates local network interfaces in this subnet are the secondary
   *             network interface (eth1).
   *         </p>
   * @public
   */
  EnableLniAtDeviceIndex?: number | undefined;

  /**
   * <p>Indicates whether a network interface created in this subnet (including a network
   *             interface created by <a>RunInstances</a>) receives a customer-owned IPv4 address.</p>
   * @public
   */
  MapCustomerOwnedIpOnLaunch?: boolean | undefined;

  /**
   * <p>The customer-owned IPv4 address pool associated with the subnet.</p>
   * @public
   */
  CustomerOwnedIpv4Pool?: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services account that owns the subnet.</p>
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * <p>Indicates whether a network interface created in this subnet (including a network
   *             interface created by <a>RunInstances</a>) receives an IPv6 address.</p>
   * @public
   */
  AssignIpv6AddressOnCreation?: boolean | undefined;

  /**
   * <p>Information about the IPv6 CIDR blocks associated with the subnet.</p>
   * @public
   */
  Ipv6CidrBlockAssociationSet?: SubnetIpv6CidrBlockAssociation[] | undefined;

  /**
   * <p>Any tags assigned to the subnet.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the subnet.</p>
   * @public
   */
  SubnetArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Outpost.</p>
   * @public
   */
  OutpostArn?: string | undefined;

  /**
   * <p>Indicates whether DNS queries made to the Amazon-provided DNS Resolver in this subnet
   *             should return synthetic IPv6 addresses for IPv4-only destinations.</p>
   * @public
   */
  EnableDns64?: boolean | undefined;

  /**
   * <p>Indicates whether this is an IPv6 only subnet.</p>
   * @public
   */
  Ipv6Native?: boolean | undefined;

  /**
   * <p>The type of hostnames to assign to instances in the subnet at launch. An instance hostname
   *             is based on the IPv4 address or ID of the instance.</p>
   * @public
   */
  PrivateDnsNameOptionsOnLaunch?: PrivateDnsNameOptionsOnLaunch | undefined;

  /**
   * <p>The ID of the subnet.</p>
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * <p>The current state of the subnet.</p>
   * @public
   */
  State?: SubnetState | undefined;

  /**
   * <p>The ID of the VPC the subnet is in.</p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>The IPv4 CIDR block assigned to the subnet.</p>
   * @public
   */
  CidrBlock?: string | undefined;

  /**
   * <p>The number of unused private IPv4 addresses in the subnet. The IPv4 addresses for any
   * 			stopped instances are considered unavailable.</p>
   * @public
   */
  AvailableIpAddressCount?: number | undefined;

  /**
   * <p>The Availability Zone of the subnet.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>Indicates whether this is the default subnet for the Availability Zone.</p>
   * @public
   */
  DefaultForAz?: boolean | undefined;

  /**
   * <p>Indicates whether instances launched in this subnet receive a public IPv4 address.</p>
   *          <p>Amazon Web Services charges for all public IPv4 addresses, including public IPv4 addresses
   * associated with running instances and Elastic IP addresses. For more information, see the <i>Public IPv4 Address</i> tab on the <a href="http://aws.amazon.com/vpc/pricing/">Amazon VPC pricing page</a>.</p>
   * @public
   */
  MapPublicIpOnLaunch?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateDefaultSubnetResult {
  /**
   * <p>Information about the subnet.</p>
   * @public
   */
  Subnet?: Subnet | undefined;
}

/**
 * @public
 */
export interface CreateDefaultVpcRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 * @enum
 */
export const Tenancy = {
  dedicated: "dedicated",
  default: "default",
  host: "host",
} as const;

/**
 * @public
 */
export type Tenancy = (typeof Tenancy)[keyof typeof Tenancy];

/**
 * @public
 * @enum
 */
export const VpcState = {
  available: "available",
  pending: "pending",
} as const;

/**
 * @public
 */
export type VpcState = (typeof VpcState)[keyof typeof VpcState];

/**
 * <p>Describes a VPC.</p>
 * @public
 */
export interface Vpc {
  /**
   * <p>The ID of the Amazon Web Services account that owns the VPC.</p>
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * <p>The allowed tenancy of instances launched into the VPC.</p>
   * @public
   */
  InstanceTenancy?: Tenancy | undefined;

  /**
   * <p>Information about the IPv6 CIDR blocks associated with the VPC.</p>
   * @public
   */
  Ipv6CidrBlockAssociationSet?: VpcIpv6CidrBlockAssociation[] | undefined;

  /**
   * <p>Information about the IPv4 CIDR blocks associated with the VPC.</p>
   * @public
   */
  CidrBlockAssociationSet?: VpcCidrBlockAssociation[] | undefined;

  /**
   * <p>Indicates whether the VPC is the default VPC.</p>
   * @public
   */
  IsDefault?: boolean | undefined;

  /**
   * <p>Any tags assigned to the VPC.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The ID of the VPC.</p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>The current state of the VPC.</p>
   * @public
   */
  State?: VpcState | undefined;

  /**
   * <p>The primary IPv4 CIDR block for the VPC.</p>
   * @public
   */
  CidrBlock?: string | undefined;

  /**
   * <p>The ID of the set of DHCP options you've associated with the VPC.</p>
   * @public
   */
  DhcpOptionsId?: string | undefined;
}

/**
 * @public
 */
export interface CreateDefaultVpcResult {
  /**
   * <p>Information about the VPC.</p>
   * @public
   */
  Vpc?: Vpc | undefined;
}

/**
 * <p>Describes a DHCP configuration option.</p>
 * @public
 */
export interface NewDhcpConfiguration {
  /**
   * <p>The name of a DHCP option.</p>
   * @public
   */
  Key?: string | undefined;

  /**
   * <p>The values for the DHCP option.</p>
   * @public
   */
  Values?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateDhcpOptionsRequest {
  /**
   * <p>A DHCP configuration option.</p>
   * @public
   */
  DhcpConfigurations: NewDhcpConfiguration[] | undefined;

  /**
   * <p>The tags to assign to the DHCP option.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * <p>Describes a value for a resource attribute that is a String.</p>
 * @public
 */
export interface AttributeValue {
  /**
   * <p>The attribute value. The value is case-sensitive.</p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * <p>Describes a DHCP configuration option.</p>
 * @public
 */
export interface DhcpConfiguration {
  /**
   * <p>The name of a DHCP option.</p>
   * @public
   */
  Key?: string | undefined;

  /**
   * <p>The values for the DHCP option.</p>
   * @public
   */
  Values?: AttributeValue[] | undefined;
}

/**
 * <p>The set of DHCP options.</p>
 * @public
 */
export interface DhcpOptions {
  /**
   * <p>The ID of the Amazon Web Services account that owns the DHCP options set.</p>
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * <p>Any tags assigned to the DHCP options set.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The ID of the set of DHCP options.</p>
   * @public
   */
  DhcpOptionsId?: string | undefined;

  /**
   * <p>The DHCP options in the set.</p>
   * @public
   */
  DhcpConfigurations?: DhcpConfiguration[] | undefined;
}

/**
 * @public
 */
export interface CreateDhcpOptionsResult {
  /**
   * <p>A set of DHCP options.</p>
   * @public
   */
  DhcpOptions?: DhcpOptions | undefined;
}

/**
 * @public
 */
export interface CreateEgressOnlyInternetGatewayRequest {
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   * 			request. For more information, see <a href="https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html">Ensuring idempotency</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the VPC for which to create the egress-only internet gateway.</p>
   * @public
   */
  VpcId: string | undefined;

  /**
   * <p>The tags to assign to the egress-only internet gateway.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;
}

/**
 * <p>Describes the attachment of a VPC to an internet gateway or an egress-only internet gateway.</p>
 * @public
 */
export interface InternetGatewayAttachment {
  /**
   * <p>The current state of the attachment. For an internet gateway, the state is
   * 				<code>available</code> when attached to a VPC; otherwise, this value is not
   * 			returned.</p>
   * @public
   */
  State?: AttachmentStatus | undefined;

  /**
   * <p>The ID of the VPC.</p>
   * @public
   */
  VpcId?: string | undefined;
}

/**
 * <p>Describes an egress-only internet gateway.</p>
 * @public
 */
export interface EgressOnlyInternetGateway {
  /**
   * <p>Information about the attachment of the egress-only internet gateway.</p>
   * @public
   */
  Attachments?: InternetGatewayAttachment[] | undefined;

  /**
   * <p>The ID of the egress-only internet gateway.</p>
   * @public
   */
  EgressOnlyInternetGatewayId?: string | undefined;

  /**
   * <p>The tags assigned to the egress-only internet gateway.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateEgressOnlyInternetGatewayResult {
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   * 			request.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>Information about the egress-only internet gateway.</p>
   * @public
   */
  EgressOnlyInternetGateway?: EgressOnlyInternetGateway | undefined;
}

/**
 * @public
 * @enum
 */
export const FleetExcessCapacityTerminationPolicy = {
  NO_TERMINATION: "no-termination",
  TERMINATION: "termination",
} as const;

/**
 * @public
 */
export type FleetExcessCapacityTerminationPolicy =
  (typeof FleetExcessCapacityTerminationPolicy)[keyof typeof FleetExcessCapacityTerminationPolicy];

/**
 * <p>The Amazon EC2 launch template that can be used by
 *          an EC2 Fleet to configure Amazon EC2 instances. You must specify either the ID or name of the launch template in the request, but not both.</p>
 *          <p>For information about launch templates, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html">Launch
 *             an instance from a launch template</a> in the
 *          <i>Amazon EC2 User Guide</i>.</p>
 * @public
 */
export interface FleetLaunchTemplateSpecificationRequest {
  /**
   * <p>The ID of the launch template.</p>
   *          <p>You must specify the <code>LaunchTemplateId</code> or the <code>LaunchTemplateName</code>, but not both.</p>
   * @public
   */
  LaunchTemplateId?: string | undefined;

  /**
   * <p>The name of the launch template.</p>
   *          <p>You must specify the <code>LaunchTemplateName</code> or the <code>LaunchTemplateId</code>, but not both.</p>
   * @public
   */
  LaunchTemplateName?: string | undefined;

  /**
   * <p>The launch template version number, <code>$Latest</code>, or <code>$Default</code>. You must specify a value, otherwise the request fails.</p>
   *          <p>If the value is <code>$Latest</code>, Amazon EC2 uses the latest version of the launch template.</p>
   *          <p>If the value is <code>$Default</code>, Amazon EC2 uses the default version of the launch template.</p>
   * @public
   */
  Version?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const BareMetal = {
  EXCLUDED: "excluded",
  INCLUDED: "included",
  REQUIRED: "required",
} as const;

/**
 * @public
 */
export type BareMetal = (typeof BareMetal)[keyof typeof BareMetal];

/**
 * <p>The minimum and maximum baseline bandwidth to Amazon EBS, in Mbps. For more information, see
 *             <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-optimized.html">Amazon
 *             EBS–optimized instances</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @public
 */
export interface BaselineEbsBandwidthMbpsRequest {
  /**
   * <p>The minimum baseline bandwidth, in Mbps. To specify no minimum limit, omit
   *          this parameter.</p>
   * @public
   */
  Min?: number | undefined;

  /**
   * <p>The maximum baseline bandwidth, in Mbps. To specify no maximum limit, omit
   *          this parameter.</p>
   * @public
   */
  Max?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const BurstablePerformance = {
  EXCLUDED: "excluded",
  INCLUDED: "included",
  REQUIRED: "required",
} as const;

/**
 * @public
 */
export type BurstablePerformance = (typeof BurstablePerformance)[keyof typeof BurstablePerformance];

/**
 * @public
 * @enum
 */
export const CpuManufacturer = {
  AMAZON_WEB_SERVICES: "amazon-web-services",
  AMD: "amd",
  INTEL: "intel",
} as const;

/**
 * @public
 */
export type CpuManufacturer = (typeof CpuManufacturer)[keyof typeof CpuManufacturer];

/**
 * @public
 * @enum
 */
export const InstanceGeneration = {
  CURRENT: "current",
  PREVIOUS: "previous",
} as const;

/**
 * @public
 */
export type InstanceGeneration = (typeof InstanceGeneration)[keyof typeof InstanceGeneration];

/**
 * @public
 * @enum
 */
export const LocalStorage = {
  EXCLUDED: "excluded",
  INCLUDED: "included",
  REQUIRED: "required",
} as const;

/**
 * @public
 */
export type LocalStorage = (typeof LocalStorage)[keyof typeof LocalStorage];

/**
 * @public
 * @enum
 */
export const LocalStorageType = {
  HDD: "hdd",
  SSD: "ssd",
} as const;

/**
 * @public
 */
export type LocalStorageType = (typeof LocalStorageType)[keyof typeof LocalStorageType];

/**
 * <p>The minimum and maximum amount of memory per vCPU, in GiB.</p>
 * @public
 */
export interface MemoryGiBPerVCpuRequest {
  /**
   * <p>The minimum amount of memory per vCPU, in GiB. To specify no minimum limit, omit this
   *          parameter.</p>
   * @public
   */
  Min?: number | undefined;

  /**
   * <p>The maximum amount of memory per vCPU, in GiB. To specify no maximum limit, omit this
   *          parameter.</p>
   * @public
   */
  Max?: number | undefined;
}

/**
 * <p>The minimum and maximum amount of memory, in MiB.</p>
 * @public
 */
export interface MemoryMiBRequest {
  /**
   * <p>The minimum amount of memory, in MiB. To specify no minimum limit, specify
   *          <code>0</code>.</p>
   * @public
   */
  Min: number | undefined;

  /**
   * <p>The maximum amount of memory, in MiB. To specify no maximum limit, omit this
   *          parameter.</p>
   * @public
   */
  Max?: number | undefined;
}

/**
 * <p>The minimum and maximum amount of network bandwidth, in gigabits per second (Gbps).</p>
 *          <note>
 *             <p>Setting the minimum bandwidth does not guarantee that your instance will achieve the
 *             minimum bandwidth. Amazon EC2 will identify instance types that support the specified minimum
 *             bandwidth, but the actual bandwidth of your instance might go below the specified minimum
 *             at times. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-network-bandwidth.html#available-instance-bandwidth">Available instance bandwidth</a> in the
 *             <i>Amazon EC2 User Guide</i>.</p>
 *          </note>
 * @public
 */
export interface NetworkBandwidthGbpsRequest {
  /**
   * <p>The minimum amount of network bandwidth, in Gbps. To specify no minimum limit, omit this
   *          parameter.</p>
   * @public
   */
  Min?: number | undefined;

  /**
   * <p>The maximum amount of network bandwidth, in Gbps. To specify no maximum limit, omit this
   *          parameter.</p>
   * @public
   */
  Max?: number | undefined;
}

/**
 * <p>The minimum and maximum number of network interfaces.</p>
 * @public
 */
export interface NetworkInterfaceCountRequest {
  /**
   * <p>The minimum number of network interfaces. To specify no minimum limit, omit this
   *          parameter.</p>
   * @public
   */
  Min?: number | undefined;

  /**
   * <p>The maximum number of network interfaces. To specify no maximum limit, omit this
   *          parameter.</p>
   * @public
   */
  Max?: number | undefined;
}

/**
 * <p>The minimum and maximum amount of total local storage, in GB.</p>
 * @public
 */
export interface TotalLocalStorageGBRequest {
  /**
   * <p>The minimum amount of total local storage, in GB. To specify no minimum limit, omit this
   *          parameter.</p>
   * @public
   */
  Min?: number | undefined;

  /**
   * <p>The maximum amount of total local storage, in GB. To specify no maximum limit, omit this
   *          parameter.</p>
   * @public
   */
  Max?: number | undefined;
}

/**
 * <p>The minimum and maximum number of vCPUs.</p>
 * @public
 */
export interface VCpuCountRangeRequest {
  /**
   * <p>The minimum number of vCPUs. To specify no minimum limit, specify <code>0</code>.</p>
   * @public
   */
  Min: number | undefined;

  /**
   * <p>The maximum number of vCPUs. To specify no maximum limit, omit this parameter.</p>
   * @public
   */
  Max?: number | undefined;
}

/**
 * <p>The attributes for the instance types. When you specify instance attributes, Amazon EC2 will
 *          identify instance types with these attributes.</p>
 *          <p>You must specify <code>VCpuCount</code> and <code>MemoryMiB</code>. All other attributes
 *          are optional. Any unspecified optional attribute is set to its default.</p>
 *          <p>When you specify multiple attributes, you get instance types that satisfy all of the
 *          specified attributes. If you specify multiple values for an attribute, you get instance
 *          types that satisfy any of the specified values.</p>
 *          <p>To limit the list of instance types from which Amazon EC2 can identify matching instance types,
 *          you can use one of the following parameters, but not both in the same request:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>AllowedInstanceTypes</code> - The instance types to include in the list. All
 *                other instance types are ignored, even if they match your specified attributes.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ExcludedInstanceTypes</code> - The instance types to exclude from the list,
 *                even if they match your specified attributes.</p>
 *             </li>
 *          </ul>
 *          <note>
 *             <p>If you specify <code>InstanceRequirements</code>, you can't specify
 *             <code>InstanceType</code>.</p>
 *             <p>Attribute-based instance type selection is only supported when using Auto Scaling
 *             groups, EC2 Fleet, and Spot Fleet to launch instances. If you plan to use the launch template in
 *             the <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-instance-wizard.html">launch instance
 *                wizard</a>, or with the <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RunInstances.html">RunInstances</a> API or
 *                <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instance.html">AWS::EC2::Instance</a> Amazon Web Services CloudFormation resource, you can't specify
 *                <code>InstanceRequirements</code>.</p>
 *          </note>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-fleet-attribute-based-instance-type-selection.html">Specify attributes for instance type selection for EC2 Fleet or Spot Fleet</a> and <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-placement-score.html">Spot
 *             placement score</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @public
 */
export interface InstanceRequirementsRequest {
  /**
   * <p>The minimum and maximum number of vCPUs.</p>
   * @public
   */
  VCpuCount: VCpuCountRangeRequest | undefined;

  /**
   * <p>The minimum and maximum amount of memory, in MiB.</p>
   * @public
   */
  MemoryMiB: MemoryMiBRequest | undefined;

  /**
   * <p>The CPU manufacturers to include.</p>
   *          <ul>
   *             <li>
   *                <p>For instance types with Intel CPUs, specify <code>intel</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with AMD CPUs, specify <code>amd</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with Amazon Web Services CPUs, specify <code>amazon-web-services</code>.</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>Don't confuse the CPU manufacturer with the CPU architecture. Instances will
   *          be launched with a compatible CPU architecture based on the Amazon Machine Image (AMI) that you
   *          specify in your launch template.</p>
   *          </note>
   *          <p>Default: Any manufacturer</p>
   * @public
   */
  CpuManufacturers?: CpuManufacturer[] | undefined;

  /**
   * <p>The minimum and maximum amount of memory per vCPU, in GiB.</p>
   *          <p>Default: No minimum or maximum limits</p>
   * @public
   */
  MemoryGiBPerVCpu?: MemoryGiBPerVCpuRequest | undefined;

  /**
   * <p>The instance types to exclude.</p>
   *          <p>You can use strings with one or more wild cards, represented by
   *          an asterisk (<code>*</code>), to exclude an instance family, type, size, or generation. The
   *          following are examples: <code>m5.8xlarge</code>, <code>c5*.*</code>, <code>m5a.*</code>,
   *             <code>r*</code>, <code>*3*</code>.</p>
   *          <p>For example, if you specify <code>c5*</code>,Amazon EC2 will exclude the entire C5 instance
   *       family, which includes all C5a and C5n instance types. If you specify
   *       <code>m5a.*</code>, Amazon EC2 will exclude all the M5a instance types, but not the M5n
   *       instance types.</p>
   *          <note>
   *             <p>If you specify <code>ExcludedInstanceTypes</code>, you can't specify <code>AllowedInstanceTypes</code>.</p>
   *          </note>
   *          <p>Default: No excluded instance types</p>
   * @public
   */
  ExcludedInstanceTypes?: string[] | undefined;

  /**
   * <p>Indicates whether current or previous generation instance types are included. The
   *       current generation instance types are recommended for use. Current generation instance types are
   *       typically the latest two to three generations in each instance family. For more
   *       information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html">Instance types</a> in the
   *       <i>Amazon EC2 User Guide</i>.</p>
   *          <p>For current generation instance types, specify <code>current</code>.</p>
   *          <p>For previous generation instance types, specify <code>previous</code>.</p>
   *          <p>Default: Current and previous generation instance types</p>
   * @public
   */
  InstanceGenerations?: InstanceGeneration[] | undefined;

  /**
   * <p>[Price protection] The price protection threshold for Spot Instances, as a percentage higher than
   *          an identified Spot price. The identified Spot price is the Spot price of the lowest priced
   *          current generation C, M, or R instance type with your specified attributes. If no current
   *          generation C, M, or R instance type matches your attributes, then the identified Spot price
   *          is from the lowest priced current generation instance types, and failing that, from the
   *          lowest priced previous generation instance types that match your attributes. When Amazon EC2
   *          selects instance types with your attributes, it will exclude instance types whose Spot
   *          price exceeds your specified threshold.</p>
   *          <p>The parameter accepts an integer, which Amazon EC2 interprets as a percentage.</p>
   *          <p>If you set <code>TargetCapacityUnitType</code> to <code>vcpu</code> or
   *          <code>memory-mib</code>, the price protection threshold is applied based on the
   *          per-vCPU or per-memory price instead of the per-instance price.</p>
   *          <p>This parameter is not supported for <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetSpotPlacementScores.html">GetSpotPlacementScores</a> and <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetInstanceTypesFromInstanceRequirements.html">GetInstanceTypesFromInstanceRequirements</a>.</p>
   *          <note>
   *             <p>Only one of <code>SpotMaxPricePercentageOverLowestPrice</code> or
   *                <code>MaxSpotPriceAsPercentageOfOptimalOnDemandPrice</code> can be specified. If you
   *             don't specify either, Amazon EC2 will automatically apply optimal price protection to
   *             consistently select from a wide range of instance types. To indicate no price protection
   *             threshold for Spot Instances, meaning you want to consider all instance types that match your
   *             attributes, include one of these parameters and specify a high value, such as
   *                <code>999999</code>.</p>
   *          </note>
   *          <p>Default: <code>100</code>
   *          </p>
   * @public
   */
  SpotMaxPricePercentageOverLowestPrice?: number | undefined;

  /**
   * <p>[Price protection] The price protection threshold for On-Demand Instances, as a percentage higher than
   *          an identified On-Demand price. The identified On-Demand price is the price of the lowest
   *          priced current generation C, M, or R instance type with your specified attributes. When
   *          Amazon EC2 selects instance types with your attributes, it will exclude instance types whose
   *          price exceeds your specified threshold.</p>
   *          <p>The parameter accepts an integer, which Amazon EC2 interprets as a percentage.</p>
   *          <p>To indicate no price protection threshold, specify a high value, such as
   *             <code>999999</code>.</p>
   *          <p>This parameter is not supported for <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetSpotPlacementScores.html">GetSpotPlacementScores</a> and <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetInstanceTypesFromInstanceRequirements.html">GetInstanceTypesFromInstanceRequirements</a>.</p>
   *          <note>
   *             <p>If you set <code>TargetCapacityUnitType</code> to <code>vcpu</code> or
   *          <code>memory-mib</code>, the price protection threshold is applied based on the
   *          per-vCPU or per-memory price instead of the per-instance price.</p>
   *          </note>
   *          <p>Default: <code>20</code>
   *          </p>
   * @public
   */
  OnDemandMaxPricePercentageOverLowestPrice?: number | undefined;

  /**
   * <p>Indicates whether bare metal instance types must be included, excluded, or required.</p>
   *          <ul>
   *             <li>
   *                <p>To include bare metal instance types, specify <code>included</code>.</p>
   *             </li>
   *             <li>
   *                <p>To require only bare metal instance types, specify <code>required</code>.</p>
   *             </li>
   *             <li>
   *                <p>To exclude bare metal instance types, specify <code>excluded</code>.</p>
   *             </li>
   *          </ul>
   *          <p>Default: <code>excluded</code>
   *          </p>
   * @public
   */
  BareMetal?: BareMetal | undefined;

  /**
   * <p>Indicates whether burstable performance T instance types are included, excluded, or required. For more information, see
   *       <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-performance-instances.html">Burstable performance instances</a>.</p>
   *          <ul>
   *             <li>
   *                <p>To include burstable performance instance types, specify <code>included</code>.</p>
   *             </li>
   *             <li>
   *                <p>To require only burstable performance instance types, specify <code>required</code>.</p>
   *             </li>
   *             <li>
   *                <p>To exclude burstable performance instance types, specify <code>excluded</code>.</p>
   *             </li>
   *          </ul>
   *          <p>Default: <code>excluded</code>
   *          </p>
   * @public
   */
  BurstablePerformance?: BurstablePerformance | undefined;

  /**
   * <p>Indicates whether instance types must support hibernation for On-Demand Instances.</p>
   *          <p>This parameter is not supported for <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetSpotPlacementScores.html">GetSpotPlacementScores</a>.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   * @public
   */
  RequireHibernateSupport?: boolean | undefined;

  /**
   * <p>The minimum and maximum number of network interfaces.</p>
   *          <p>Default: No minimum or maximum limits</p>
   * @public
   */
  NetworkInterfaceCount?: NetworkInterfaceCountRequest | undefined;

  /**
   * <p>Indicates whether instance types with instance store volumes are included, excluded, or required. For more information,
   *       <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/InstanceStorage.html">Amazon
   *          EC2 instance store</a> in the <i>Amazon EC2 User Guide</i>.</p>
   *          <ul>
   *             <li>
   *                <p>To include instance types with instance store volumes, specify
   *                   <code>included</code>.</p>
   *             </li>
   *             <li>
   *                <p>To require only instance types with instance store volumes, specify
   *                   <code>required</code>.</p>
   *             </li>
   *             <li>
   *                <p>To exclude instance types with instance store volumes, specify
   *                   <code>excluded</code>.</p>
   *             </li>
   *          </ul>
   *          <p>Default: <code>included</code>
   *          </p>
   * @public
   */
  LocalStorage?: LocalStorage | undefined;

  /**
   * <p>The type of local storage that is required.</p>
   *          <ul>
   *             <li>
   *                <p>For instance types with hard disk drive (HDD) storage, specify <code>hdd</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with solid state drive (SSD) storage, specify
   *                <code>ssd</code>.</p>
   *             </li>
   *          </ul>
   *          <p>Default: <code>hdd</code> and <code>ssd</code>
   *          </p>
   * @public
   */
  LocalStorageTypes?: LocalStorageType[] | undefined;

  /**
   * <p>The minimum and maximum amount of total local storage, in GB.</p>
   *          <p>Default: No minimum or maximum limits</p>
   * @public
   */
  TotalLocalStorageGB?: TotalLocalStorageGBRequest | undefined;

  /**
   * <p>The minimum and maximum baseline bandwidth to Amazon EBS, in Mbps. For more information, see
   *             <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-optimized.html">Amazon
   *             EBS–optimized instances</a> in the <i>Amazon EC2 User Guide</i>.</p>
   *          <p>Default: No minimum or maximum limits</p>
   * @public
   */
  BaselineEbsBandwidthMbps?: BaselineEbsBandwidthMbpsRequest | undefined;

  /**
   * <p>The accelerator types that must be on the instance type.</p>
   *          <ul>
   *             <li>
   *                <p>To include instance types with GPU hardware, specify <code>gpu</code>.</p>
   *             </li>
   *             <li>
   *                <p>To include instance types with FPGA hardware, specify <code>fpga</code>.</p>
   *             </li>
   *          </ul>
   *          <p>Default: Any accelerator type</p>
   * @public
   */
  AcceleratorTypes?: AcceleratorType[] | undefined;

  /**
   * <p>The minimum and maximum number of accelerators (GPUs, FPGAs, or Amazon Web Services Inferentia chips) on
   *          an instance.</p>
   *          <p>To exclude accelerator-enabled instance types, set <code>Max</code> to <code>0</code>.</p>
   *          <p>Default: No minimum or maximum limits</p>
   * @public
   */
  AcceleratorCount?: AcceleratorCountRequest | undefined;

  /**
   * <p>Indicates whether instance types must have accelerators by specific manufacturers.</p>
   *          <ul>
   *             <li>
   *                <p>For instance types with Amazon Web Services devices, specify <code>amazon-web-services</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with AMD devices, specify <code>amd</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with Habana devices, specify <code>habana</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with NVIDIA devices, specify <code>nvidia</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with Xilinx devices, specify <code>xilinx</code>.</p>
   *             </li>
   *          </ul>
   *          <p>Default: Any manufacturer</p>
   * @public
   */
  AcceleratorManufacturers?: AcceleratorManufacturer[] | undefined;

  /**
   * <p>The accelerators that must be on the instance type.</p>
   *          <ul>
   *             <li>
   *                <p>For instance types with NVIDIA A10G GPUs, specify <code>a10g</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with NVIDIA A100 GPUs, specify <code>a100</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with NVIDIA H100 GPUs, specify <code>h100</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with Amazon Web Services Inferentia chips, specify <code>inferentia</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with NVIDIA GRID K520 GPUs, specify <code>k520</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with NVIDIA K80 GPUs, specify <code>k80</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with NVIDIA M60 GPUs, specify <code>m60</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with AMD Radeon Pro V520 GPUs, specify <code>radeon-pro-v520</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with NVIDIA T4 GPUs, specify <code>t4</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with NVIDIA T4G GPUs, specify <code>t4g</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with Xilinx VU9P FPGAs, specify <code>vu9p</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with NVIDIA V100 GPUs, specify <code>v100</code>.</p>
   *             </li>
   *          </ul>
   *          <p>Default: Any accelerator</p>
   * @public
   */
  AcceleratorNames?: AcceleratorName[] | undefined;

  /**
   * <p>The minimum and maximum amount of total accelerator memory, in MiB.</p>
   *          <p>Default: No minimum or maximum limits</p>
   * @public
   */
  AcceleratorTotalMemoryMiB?: AcceleratorTotalMemoryMiBRequest | undefined;

  /**
   * <p>The minimum and maximum amount of baseline network bandwidth, in gigabits per second
   *           (Gbps). For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-network-bandwidth.html">Amazon EC2 instance network bandwidth</a> in the <i>Amazon EC2 User Guide</i>.</p>
   *          <p>Default: No minimum or maximum limits</p>
   * @public
   */
  NetworkBandwidthGbps?: NetworkBandwidthGbpsRequest | undefined;

  /**
   * <p>The instance types to apply your specified attributes against. All other instance types
   *          are ignored, even if they match your specified attributes.</p>
   *          <p>You can use strings with one or more wild cards, represented by
   *          an asterisk (<code>*</code>), to allow an instance type, size, or generation. The
   *          following are examples: <code>m5.8xlarge</code>, <code>c5*.*</code>, <code>m5a.*</code>,
   *          <code>r*</code>, <code>*3*</code>.</p>
   *          <p>For example, if you specify <code>c5*</code>,Amazon EC2 will allow the entire C5 instance
   *          family, which includes all C5a and C5n instance types. If you specify
   *          <code>m5a.*</code>, Amazon EC2 will allow all the M5a instance types, but not the M5n
   *          instance types.</p>
   *          <note>
   *             <p>If you specify <code>AllowedInstanceTypes</code>, you can't specify <code>ExcludedInstanceTypes</code>.</p>
   *          </note>
   *          <p>Default: All instance types</p>
   * @public
   */
  AllowedInstanceTypes?: string[] | undefined;

  /**
   * <p>[Price protection] The price protection threshold for Spot Instances, as a percentage of an
   *          identified On-Demand price. The identified On-Demand price is the price of the lowest
   *          priced current generation C, M, or R instance type with your specified attributes. If no
   *          current generation C, M, or R instance type matches your attributes, then the identified
   *          price is from the lowest priced current generation instance types, and failing that, from
   *          the lowest priced previous generation instance types that match your attributes. When Amazon EC2
   *          selects instance types with your attributes, it will exclude instance types whose price
   *          exceeds your specified threshold.</p>
   *          <p>The parameter accepts an integer, which Amazon EC2 interprets as a percentage.</p>
   *          <p>If you set <code>TargetCapacityUnitType</code> to <code>vcpu</code> or
   *          <code>memory-mib</code>, the price protection threshold is based on the per vCPU or per
   *          memory price instead of the per instance price.</p>
   *          <note>
   *             <p>Only one of <code>SpotMaxPricePercentageOverLowestPrice</code> or
   *                <code>MaxSpotPriceAsPercentageOfOptimalOnDemandPrice</code> can be specified. If you
   *             don't specify either, Amazon EC2 will automatically apply optimal price protection to
   *             consistently select from a wide range of instance types. To indicate no price protection
   *             threshold for Spot Instances, meaning you want to consider all instance types that match your
   *             attributes, include one of these parameters and specify a high value, such as
   *                <code>999999</code>.</p>
   *          </note>
   * @public
   */
  MaxSpotPriceAsPercentageOfOptimalOnDemandPrice?: number | undefined;
}

/**
 * <p>Describes the placement of an instance.</p>
 * @public
 */
export interface Placement {
  /**
   * <p>The affinity setting for the instance on the Dedicated Host.</p>
   *          <p>This parameter is not supported for <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateFleet">CreateFleet</a> or <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ImportInstance.html">ImportInstance</a>.</p>
   * @public
   */
  Affinity?: string | undefined;

  /**
   * <p>The name of the placement group that the instance is in. If you specify
   *                 <code>GroupName</code>, you can't specify <code>GroupId</code>.</p>
   * @public
   */
  GroupName?: string | undefined;

  /**
   * <p>The number of the partition that the instance is in. Valid only if the placement group
   *             strategy is set to <code>partition</code>.</p>
   *          <p>This parameter is not supported for <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateFleet">CreateFleet</a>.</p>
   * @public
   */
  PartitionNumber?: number | undefined;

  /**
   * <p>The ID of the Dedicated Host on which the instance resides.</p>
   *          <p>This parameter is not supported for <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateFleet">CreateFleet</a> or <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ImportInstance.html">ImportInstance</a>.</p>
   * @public
   */
  HostId?: string | undefined;

  /**
   * <p>The tenancy of the instance. An instance with a
   *             tenancy of <code>dedicated</code> runs on single-tenant hardware.</p>
   *          <p>This parameter is not supported for <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateFleet">CreateFleet</a>. The
   *                 <code>host</code> tenancy is not supported for <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ImportInstance.html">ImportInstance</a> or
   *             for T3 instances that are configured for the <code>unlimited</code> CPU credit
   *             option.</p>
   * @public
   */
  Tenancy?: Tenancy | undefined;

  /**
   * <p>Reserved for future use.</p>
   * @public
   */
  SpreadDomain?: string | undefined;

  /**
   * <p>The ARN of the host resource group in which to launch the instances.</p>
   *          <p>If you specify this parameter, either omit the <b>Tenancy</b> parameter or set it to <code>host</code>.</p>
   *          <p>This parameter is not supported for <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateFleet">CreateFleet</a>.</p>
   * @public
   */
  HostResourceGroupArn?: string | undefined;

  /**
   * <p>The ID of the placement group that the instance is in. If you specify
   *                 <code>GroupId</code>, you can't specify <code>GroupName</code>.</p>
   * @public
   */
  GroupId?: string | undefined;

  /**
   * <p>The Availability Zone of the instance.</p>
   *          <p>If not specified, an Availability Zone will be automatically chosen for you based on
   *             the load balancing criteria for the Region.</p>
   *          <p>This parameter is not supported for <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateFleet">CreateFleet</a>.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;
}

/**
 * <p>Describes overrides for a launch template.</p>
 * @public
 */
export interface FleetLaunchTemplateOverridesRequest {
  /**
   * <p>The instance type.</p>
   *          <p>
   *             <code>mac1.metal</code> is not supported as a launch template override.</p>
   *          <note>
   *             <p>If you specify <code>InstanceType</code>, you can't specify
   *                <code>InstanceRequirements</code>.</p>
   *          </note>
   * @public
   */
  InstanceType?: _InstanceType | undefined;

  /**
   * <p>The maximum price per unit hour that you are willing to pay for a Spot Instance. We do not recommend using this parameter because it can lead to increased interruptions. If you do not specify this parameter, you will pay the current Spot price.
   *       </p>
   *          <important>
   *             <p>If you specify a maximum price, your instances will be interrupted more frequently than if you do not specify this parameter.</p>
   *          </important>
   * @public
   */
  MaxPrice?: string | undefined;

  /**
   * <p>The IDs of the subnets in which to launch the instances. Separate multiple subnet IDs using commas (for example, <code>subnet-1234abcdeexample1, subnet-0987cdef6example2</code>). A request of type <code>instant</code> can have only one subnet ID.</p>
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * <p>The Availability Zone in which to launch the instances.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>The number of units provided by the specified instance type. These are the same units
   *          that you chose to set the target capacity in terms of instances, or a performance
   *          characteristic such as vCPUs, memory, or I/O.</p>
   *          <p>If the target capacity divided by this value is not a whole number, Amazon EC2 rounds the
   *          number of instances to the next whole number. If this value is not specified, the default
   *          is 1.</p>
   *          <note>
   *             <p>When specifying weights, the price used in the <code>lowest-price</code> and
   *                <code>price-capacity-optimized</code> allocation strategies is per
   *                <i>unit</i> hour (where the instance price is divided by the specified
   *             weight). However, if all the specified weights are above the requested
   *                <code>TargetCapacity</code>, resulting in only 1 instance being launched, the price
   *             used is per <i>instance</i> hour.</p>
   *          </note>
   * @public
   */
  WeightedCapacity?: number | undefined;

  /**
   * <p>The priority for the launch template override. The highest priority is launched
   *          first.</p>
   *          <p>If the On-Demand <code>AllocationStrategy</code> is set to <code>prioritized</code>,
   *          EC2 Fleet uses priority to determine which launch template override to use first in fulfilling
   *          On-Demand capacity.</p>
   *          <p>If the Spot <code>AllocationStrategy</code> is set to
   *             <code>capacity-optimized-prioritized</code>, EC2 Fleet uses priority on a best-effort basis
   *          to determine which launch template override to use in fulfilling Spot capacity, but
   *          optimizes for capacity first.</p>
   *          <p>Valid values are whole numbers starting at <code>0</code>. The lower the number, the
   *          higher the priority. If no number is set, the launch template override has the lowest
   *          priority. You can set the same priority for different launch template overrides.</p>
   * @public
   */
  Priority?: number | undefined;

  /**
   * <p>The location where the instance launched, if applicable.</p>
   * @public
   */
  Placement?: Placement | undefined;

  /**
   * <p>The attributes for the instance types. When you specify instance attributes, Amazon EC2 will
   *          identify instance types with those attributes.</p>
   *          <note>
   *             <p>If you specify <code>InstanceRequirements</code>, you can't specify
   *             <code>InstanceType</code>.</p>
   *          </note>
   * @public
   */
  InstanceRequirements?: InstanceRequirementsRequest | undefined;

  /**
   * <p>The ID of the AMI in the format <code>ami-17characters00000</code>.</p>
   *          <p>Alternatively, you can specify a Systems Manager parameter, using one of the following
   *          formats. The Systems Manager parameter will resolve to an AMI ID on launch.</p>
   *          <p>To reference a public parameter:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>resolve:ssm:<i>public-parameter</i>
   *                   </code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>To reference a parameter stored in the same account:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>resolve:ssm:<i>parameter-name</i>
   *                   </code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>resolve:ssm:<i>parameter-name:version-number</i>
   *                   </code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>resolve:ssm:<i>parameter-name:label</i>
   *                   </code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>To reference a parameter shared from another Amazon Web Services account:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>resolve:ssm:<i>parameter-ARN</i>
   *                   </code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>resolve:ssm:<i>parameter-ARN:version-number</i>
   *                   </code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>resolve:ssm:<i>parameter-ARN:label</i>
   *                   </code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/create-launch-template.html#use-an-ssm-parameter-instead-of-an-ami-id">Use a Systems Manager parameter instead of an AMI ID</a> in the
   *          <i>Amazon EC2 User Guide</i>.</p>
   *          <note>
   *             <p>This parameter is only available for fleets of type <code>instant</code>. For fleets
   *             of type <code>maintain</code> and <code>request</code>, you must specify the AMI ID in
   *             the launch template.</p>
   *          </note>
   * @public
   */
  ImageId?: string | undefined;
}

/**
 * <p>Describes a launch template and overrides.</p>
 * @public
 */
export interface FleetLaunchTemplateConfigRequest {
  /**
   * <p>The launch template to use. You must specify either the launch template ID or launch
   *          template name in the request. </p>
   * @public
   */
  LaunchTemplateSpecification?: FleetLaunchTemplateSpecificationRequest | undefined;

  /**
   * <p>Any parameters that you specify override the same parameters in the launch
   *          template.</p>
   *          <p>For fleets of type <code>request</code> and <code>maintain</code>, a maximum of 300
   *          items is allowed across all launch templates.</p>
   * @public
   */
  Overrides?: FleetLaunchTemplateOverridesRequest[] | undefined;
}

/**
 * @public
 * @enum
 */
export const FleetOnDemandAllocationStrategy = {
  LOWEST_PRICE: "lowest-price",
  PRIORITIZED: "prioritized",
} as const;

/**
 * @public
 */
export type FleetOnDemandAllocationStrategy =
  (typeof FleetOnDemandAllocationStrategy)[keyof typeof FleetOnDemandAllocationStrategy];

/**
 * @public
 * @enum
 */
export const FleetCapacityReservationUsageStrategy = {
  NONE: "none",
  USE_CAPACITY_RESERVATIONS_FIRST: "use-capacity-reservations-first",
  USE_CAPACITY_RESERVATIONS_ONLY: "use-capacity-reservations-only",
} as const;

/**
 * @public
 */
export type FleetCapacityReservationUsageStrategy =
  (typeof FleetCapacityReservationUsageStrategy)[keyof typeof FleetCapacityReservationUsageStrategy];

/**
 * <p>Describes the strategy for using unused Capacity Reservations for fulfilling On-Demand
 *          capacity.</p>
 *          <note>
 *             <p>This strategy can only be used if the EC2 Fleet is of type <code>instant</code>.</p>
 *          </note>
 *          <p>For more information about Capacity Reservations, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-capacity-reservations.html">On-Demand Capacity
 *             Reservations</a> in the <i>Amazon EC2 User Guide</i>. For examples of using
 *          Capacity Reservations in an EC2 Fleet, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-fleet-examples.html">EC2 Fleet example
 *             configurations</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @public
 */
export interface CapacityReservationOptionsRequest {
  /**
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
   * @public
   */
  UsageStrategy?: FleetCapacityReservationUsageStrategy | undefined;
}

/**
 * <p>Describes the configuration of On-Demand Instances in an EC2 Fleet.</p>
 * @public
 */
export interface OnDemandOptionsRequest {
  /**
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
   * @public
   */
  AllocationStrategy?: FleetOnDemandAllocationStrategy | undefined;

  /**
   * <p>The strategy for using unused Capacity Reservations for fulfilling On-Demand
   *          capacity.</p>
   *          <p>Supported only for fleets of type <code>instant</code>.</p>
   * @public
   */
  CapacityReservationOptions?: CapacityReservationOptionsRequest | undefined;

  /**
   * <p>Indicates that the fleet uses a single instance type to launch all On-Demand Instances in the
   *          fleet.</p>
   *          <p>Supported only for fleets of type <code>instant</code>.</p>
   * @public
   */
  SingleInstanceType?: boolean | undefined;

  /**
   * <p>Indicates that the fleet launches all On-Demand Instances into a single Availability Zone.</p>
   *          <p>Supported only for fleets of type <code>instant</code>.</p>
   * @public
   */
  SingleAvailabilityZone?: boolean | undefined;

  /**
   * <p>The minimum target capacity for On-Demand Instances in the fleet. If this minimum capacity isn't
   *          reached, no instances are launched.</p>
   *          <p>Constraints: Maximum value of <code>1000</code>. Supported only for fleets of type
   *             <code>instant</code>.</p>
   *          <p>At least one of the following must be specified: <code>SingleAvailabilityZone</code> |
   *          <code>SingleInstanceType</code>
   *          </p>
   * @public
   */
  MinTargetCapacity?: number | undefined;

  /**
   * <p>The maximum amount per hour for On-Demand Instances that you're willing to pay.</p>
   *          <note>
   *             <p>If your fleet includes T instances that are configured as <code>unlimited</code>,
   *             and if their average CPU usage exceeds the baseline utilization, you will incur a charge
   *             for surplus credits. The <code>MaxTotalPrice</code> does not account for surplus
   *             credits, and, if you use surplus credits, your final cost might be higher than what you
   *             specified for <code>MaxTotalPrice</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-performance-instances-unlimited-mode-concepts.html#unlimited-mode-surplus-credits">Surplus credits can incur charges</a> in the <i>Amazon EC2 User Guide</i>.</p>
   *          </note>
   * @public
   */
  MaxTotalPrice?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const SpotAllocationStrategy = {
  CAPACITY_OPTIMIZED: "capacity-optimized",
  CAPACITY_OPTIMIZED_PRIORITIZED: "capacity-optimized-prioritized",
  DIVERSIFIED: "diversified",
  LOWEST_PRICE: "lowest-price",
  PRICE_CAPACITY_OPTIMIZED: "price-capacity-optimized",
} as const;

/**
 * @public
 */
export type SpotAllocationStrategy = (typeof SpotAllocationStrategy)[keyof typeof SpotAllocationStrategy];

/**
 * @public
 * @enum
 */
export const SpotInstanceInterruptionBehavior = {
  hibernate: "hibernate",
  stop: "stop",
  terminate: "terminate",
} as const;

/**
 * @public
 */
export type SpotInstanceInterruptionBehavior =
  (typeof SpotInstanceInterruptionBehavior)[keyof typeof SpotInstanceInterruptionBehavior];

/**
 * @public
 * @enum
 */
export const FleetReplacementStrategy = {
  LAUNCH: "launch",
  LAUNCH_BEFORE_TERMINATE: "launch-before-terminate",
} as const;

/**
 * @public
 */
export type FleetReplacementStrategy = (typeof FleetReplacementStrategy)[keyof typeof FleetReplacementStrategy];

/**
 * <p>The Spot Instance replacement strategy to use when Amazon EC2 emits a rebalance
 *          notification signal that your Spot Instance is at an elevated risk of being interrupted.
 *          For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-fleet-capacity-rebalance.html">Capacity rebalancing</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @public
 */
export interface FleetSpotCapacityRebalanceRequest {
  /**
   * <p>The replacement strategy to use. Only available for fleets of type
   *          <code>maintain</code>.</p>
   *          <p>
   *             <code>launch</code> - EC2 Fleet launches a replacement Spot Instance when a rebalance
   *          notification is emitted for an existing Spot Instance in the fleet. EC2 Fleet does not
   *          terminate the instances that receive a rebalance notification. You can terminate the old
   *          instances, or you can leave them running. You are charged for all instances while they are
   *          running. </p>
   *          <p>
   *             <code>launch-before-terminate</code> - EC2 Fleet launches a replacement Spot Instance
   *          when a rebalance notification is emitted for an existing Spot Instance in the fleet, and
   *          then, after a delay that you specify (in <code>TerminationDelay</code>), terminates the
   *          instances that received a rebalance notification.</p>
   * @public
   */
  ReplacementStrategy?: FleetReplacementStrategy | undefined;

  /**
   * <p>The amount of time (in seconds) that Amazon EC2 waits before terminating the old Spot
   *          Instance after launching a new replacement Spot Instance.</p>
   *          <p>Required when <code>ReplacementStrategy</code> is set to <code>launch-before-terminate</code>.</p>
   *          <p>Not valid when <code>ReplacementStrategy</code> is set to <code>launch</code>.</p>
   *          <p>Valid values: Minimum value of <code>120</code> seconds. Maximum value of <code>7200</code> seconds.</p>
   * @public
   */
  TerminationDelay?: number | undefined;
}

/**
 * <p>The strategies for managing your Spot Instances that are at an elevated risk of being interrupted.</p>
 * @public
 */
export interface FleetSpotMaintenanceStrategiesRequest {
  /**
   * <p>The strategy to use when Amazon EC2 emits a signal that your Spot Instance is at an
   *          elevated risk of being interrupted.</p>
   * @public
   */
  CapacityRebalance?: FleetSpotCapacityRebalanceRequest | undefined;
}

/**
 * <p>Describes the configuration of Spot Instances in an EC2 Fleet request.</p>
 * @public
 */
export interface SpotOptionsRequest {
  /**
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
   *             <dt>lowest-price (not recommended)</dt>
   *             <dd>
   *                <important>
   *                   <p>We don't recommend the <code>lowest-price</code> allocation strategy because
   *                      it has the highest risk of interruption for your Spot Instances.</p>
   *                </important>
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
   * @public
   */
  AllocationStrategy?: SpotAllocationStrategy | undefined;

  /**
   * <p>The strategies for managing your Spot Instances that are at an elevated risk of being
   *          interrupted.</p>
   * @public
   */
  MaintenanceStrategies?: FleetSpotMaintenanceStrategiesRequest | undefined;

  /**
   * <p>The behavior when a Spot Instance is interrupted.</p>
   *          <p>Default: <code>terminate</code>
   *          </p>
   * @public
   */
  InstanceInterruptionBehavior?: SpotInstanceInterruptionBehavior | undefined;

  /**
   * <p>The number of Spot pools across which to allocate your target Spot capacity. Supported
   *          only when Spot <code>AllocationStrategy</code> is set to <code>lowest-price</code>. EC2 Fleet
   *          selects the cheapest Spot pools and evenly allocates your target Spot capacity across the
   *          number of Spot pools that you specify.</p>
   *          <p>Note that EC2 Fleet attempts to draw Spot Instances from the number of pools that you specify on a
   *          best effort basis. If a pool runs out of Spot capacity before fulfilling your target
   *          capacity, EC2 Fleet will continue to fulfill your request by drawing from the next cheapest
   *          pool. To ensure that your target capacity is met, you might receive Spot Instances from more than
   *          the number of pools that you specified. Similarly, if most of the pools have no Spot
   *          capacity, you might receive your full target capacity from fewer than the number of pools
   *          that you specified.</p>
   * @public
   */
  InstancePoolsToUseCount?: number | undefined;

  /**
   * <p>Indicates that the fleet uses a single instance type to launch all Spot Instances in the
   *          fleet.</p>
   *          <p>Supported only for fleets of type <code>instant</code>.</p>
   * @public
   */
  SingleInstanceType?: boolean | undefined;

  /**
   * <p>Indicates that the fleet launches all Spot Instances into a single Availability Zone.</p>
   *          <p>Supported only for fleets of type <code>instant</code>.</p>
   * @public
   */
  SingleAvailabilityZone?: boolean | undefined;

  /**
   * <p>The minimum target capacity for Spot Instances in the fleet. If this minimum capacity isn't
   *          reached, no instances are launched.</p>
   *          <p>Constraints: Maximum value of <code>1000</code>. Supported only for fleets of type
   *             <code>instant</code>.</p>
   *          <p>At least one of the following must be specified: <code>SingleAvailabilityZone</code> |
   *          <code>SingleInstanceType</code>
   *          </p>
   * @public
   */
  MinTargetCapacity?: number | undefined;

  /**
   * <p>The maximum amount per hour for Spot Instances that you're willing to pay. We do not recommend
   *          using this parameter because it can lead to increased interruptions. If you do not specify
   *          this parameter, you will pay the current Spot price.</p>
   *          <important>
   *             <p>If you specify a maximum price, your Spot Instances will be interrupted more frequently than if you do not specify this parameter.</p>
   *          </important>
   *          <note>
   *             <p>If your fleet includes T instances that are configured as <code>unlimited</code>, and
   *             if their average CPU usage exceeds the baseline utilization, you will incur a charge for
   *             surplus credits. The <code>MaxTotalPrice</code> does not account for surplus credits,
   *             and, if you use surplus credits, your final cost might be higher than what you specified
   *             for <code>MaxTotalPrice</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-performance-instances-unlimited-mode-concepts.html#unlimited-mode-surplus-credits">Surplus credits can incur charges</a> in the
   *                <i>Amazon EC2 User Guide</i>.</p>
   *          </note>
   * @public
   */
  MaxTotalPrice?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const DefaultTargetCapacityType = {
  CAPACITY_BLOCK: "capacity-block",
  ON_DEMAND: "on-demand",
  SPOT: "spot",
} as const;

/**
 * @public
 */
export type DefaultTargetCapacityType = (typeof DefaultTargetCapacityType)[keyof typeof DefaultTargetCapacityType];

/**
 * @public
 * @enum
 */
export const TargetCapacityUnitType = {
  MEMORY_MIB: "memory-mib",
  UNITS: "units",
  VCPU: "vcpu",
} as const;

/**
 * @public
 */
export type TargetCapacityUnitType = (typeof TargetCapacityUnitType)[keyof typeof TargetCapacityUnitType];

/**
 * <p>The number of units to request. You can choose to set the target capacity as the number of
 *          instances. Or you can set the target capacity to a performance characteristic that is important to your application workload,
 *          such as vCPUs, memory, or I/O. If the request type is <code>maintain</code>, you can
 *          specify a target capacity of 0 and add capacity later.</p>
 *          <p>You can use the On-Demand Instance <code>MaxTotalPrice</code> parameter, the Spot Instance
 *             <code>MaxTotalPrice</code> parameter, or both parameters to ensure that your fleet cost
 *          does not exceed your budget. If you set a maximum price per hour for the On-Demand Instances and Spot Instances
 *          in your request, EC2 Fleet will launch instances until it reaches the maximum amount that you're
 *          willing to pay. When the maximum amount you're willing to pay is reached, the fleet stops
 *          launching instances even if it hasn't met the target capacity. The
 *          <code>MaxTotalPrice</code> parameters are located in <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_OnDemandOptionsRequest">OnDemandOptionsRequest</a>
 *          and <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_SpotOptionsRequest">SpotOptionsRequest</a>.</p>
 * @public
 */
export interface TargetCapacitySpecificationRequest {
  /**
   * <p>The number of units to request, filled using the default target capacity type.</p>
   * @public
   */
  TotalTargetCapacity: number | undefined;

  /**
   * <p>The number of On-Demand units to request.</p>
   * @public
   */
  OnDemandTargetCapacity?: number | undefined;

  /**
   * <p>The number of Spot units to request.</p>
   * @public
   */
  SpotTargetCapacity?: number | undefined;

  /**
   * <p>The default target capacity type.</p>
   * @public
   */
  DefaultTargetCapacityType?: DefaultTargetCapacityType | undefined;

  /**
   * <p>The unit for the target capacity. You can specify this parameter only when using
   *          attributed-based instance type selection.</p>
   *          <p>Default: <code>units</code> (the number of instances)</p>
   * @public
   */
  TargetCapacityUnitType?: TargetCapacityUnitType | undefined;
}

/**
 * @public
 * @enum
 */
export const FleetType = {
  INSTANT: "instant",
  MAINTAIN: "maintain",
  REQUEST: "request",
} as const;

/**
 * @public
 */
export type FleetType = (typeof FleetType)[keyof typeof FleetType];

/**
 * @public
 */
export interface CreateFleetRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring
   *             idempotency</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>Describes the configuration of Spot Instances in an EC2 Fleet.</p>
   * @public
   */
  SpotOptions?: SpotOptionsRequest | undefined;

  /**
   * <p>Describes the configuration of On-Demand Instances in an EC2 Fleet.</p>
   * @public
   */
  OnDemandOptions?: OnDemandOptionsRequest | undefined;

  /**
   * <p>Indicates whether running instances should be terminated if the total target capacity of
   *          the EC2 Fleet is decreased below the current size of the EC2 Fleet.</p>
   *          <p>Supported only for fleets of type <code>maintain</code>.</p>
   * @public
   */
  ExcessCapacityTerminationPolicy?: FleetExcessCapacityTerminationPolicy | undefined;

  /**
   * <p>The configuration for the EC2 Fleet.</p>
   * @public
   */
  LaunchTemplateConfigs: FleetLaunchTemplateConfigRequest[] | undefined;

  /**
   * <p>The number of units to request.</p>
   * @public
   */
  TargetCapacitySpecification: TargetCapacitySpecificationRequest | undefined;

  /**
   * <p>Indicates whether running instances should be terminated when the EC2 Fleet expires.</p>
   * @public
   */
  TerminateInstancesWithExpiration?: boolean | undefined;

  /**
   * <p>The fleet type. The default value is <code>maintain</code>.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>maintain</code> - The EC2 Fleet places an asynchronous request for your desired
   *                capacity, and continues to maintain your desired Spot capacity by replenishing
   *                interrupted Spot Instances.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>request</code> - The EC2 Fleet places an asynchronous one-time request for your
   *                desired capacity, but does submit Spot requests in alternative capacity pools if Spot
   *                capacity is unavailable, and does not maintain Spot capacity if Spot Instances are
   *                interrupted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instant</code> - The EC2 Fleet places a synchronous one-time request for your
   *                desired capacity, and returns errors for any instances that could not be
   *                launched.</p>
   *             </li>
   *          </ul>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-fleet-request-type.html">EC2 Fleet
   *             request types</a> in the <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  Type?: FleetType | undefined;

  /**
   * <p>The start date and time of the request, in UTC format (for example,
   *             <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).
   *          The default is to start fulfilling the request immediately.</p>
   * @public
   */
  ValidFrom?: Date | undefined;

  /**
   * <p>The end date and time of the request, in UTC format (for example,
   *             <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).
   *          At this point, no new EC2 Fleet requests are placed or able to fulfill the request. If no value is specified, the request remains until you cancel it.</p>
   * @public
   */
  ValidUntil?: Date | undefined;

  /**
   * <p>Indicates whether EC2 Fleet should replace unhealthy Spot Instances. Supported only for
   *          fleets of type <code>maintain</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/manage-ec2-fleet.html#ec2-fleet-health-checks">EC2 Fleet
   *             health checks</a> in the <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  ReplaceUnhealthyInstances?: boolean | undefined;

  /**
   * <p>The key-value pair for tagging the EC2 Fleet request on creation. For more information, see
   *          <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html#tag-resources">Tag your resources</a>.</p>
   *          <p>If the fleet type is <code>instant</code>, specify a resource type of <code>fleet</code>
   *          to tag the fleet or <code>instance</code> to tag the instances at launch.</p>
   *          <p>If the fleet type is <code>maintain</code> or <code>request</code>, specify a resource
   *          type of <code>fleet</code> to tag the fleet. You cannot specify a resource type of
   *             <code>instance</code>. To tag instances at launch, specify the tags in a <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html#create-launch-template">launch template</a>.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * <p>Reserved.</p>
   * @public
   */
  Context?: string | undefined;
}

/**
 * <p>The Amazon EC2 launch template that can be used by
 *             a Spot Fleet to configure Amazon EC2 instances. You must specify either the ID or name of the launch template in the request, but not both.</p>
 *          <p>For information about launch templates,
 *             see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html">Launch an instance from a launch template</a> in the
 *                 <i>Amazon EC2 User Guide</i>.</p>
 * @public
 */
export interface FleetLaunchTemplateSpecification {
  /**
   * <p>The ID of the launch template.</p>
   *          <p>You must specify the <code>LaunchTemplateId</code> or the <code>LaunchTemplateName</code>, but not both.</p>
   * @public
   */
  LaunchTemplateId?: string | undefined;

  /**
   * <p>The name of the launch template.</p>
   *          <p>You must specify the <code>LaunchTemplateName</code> or the <code>LaunchTemplateId</code>, but not both.</p>
   * @public
   */
  LaunchTemplateName?: string | undefined;

  /**
   * <p>The launch template version number, <code>$Latest</code>, or <code>$Default</code>.
   *             You must specify a value, otherwise the request fails.</p>
   *          <p>If the value is <code>$Latest</code>, Amazon EC2 uses the latest version of the launch
   *             template.</p>
   *          <p>If the value is <code>$Default</code>, Amazon EC2 uses the default version of the launch
   *             template.</p>
   * @public
   */
  Version?: string | undefined;
}

/**
 * <p>The minimum and maximum baseline bandwidth to Amazon EBS, in Mbps. For more information, see
 *             <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-optimized.html">Amazon
 *             EBS–optimized instances</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @public
 */
export interface BaselineEbsBandwidthMbps {
  /**
   * <p>The minimum baseline bandwidth, in Mbps. If this parameter is not specified, there is no
   *          minimum limit.</p>
   * @public
   */
  Min?: number | undefined;

  /**
   * <p>The maximum baseline bandwidth, in Mbps. If this parameter is not specified, there is no
   *          maximum limit.</p>
   * @public
   */
  Max?: number | undefined;
}

/**
 * <p>The minimum and maximum amount of memory per vCPU, in GiB.</p>
 *          <p></p>
 * @public
 */
export interface MemoryGiBPerVCpu {
  /**
   * <p>The minimum amount of memory per vCPU, in GiB. If this parameter is not specified, there is
   *          no minimum limit.</p>
   * @public
   */
  Min?: number | undefined;

  /**
   * <p>The maximum amount of memory per vCPU, in GiB. If this parameter is not specified, there is
   *          no maximum limit.</p>
   * @public
   */
  Max?: number | undefined;
}

/**
 * <p>The minimum and maximum amount of memory, in MiB.</p>
 * @public
 */
export interface MemoryMiB {
  /**
   * <p>The minimum amount of memory, in MiB. If this parameter is not specified, there is no minimum
   *          limit.</p>
   * @public
   */
  Min?: number | undefined;

  /**
   * <p>The maximum amount of memory, in MiB. If this parameter is not specified, there is no
   *          maximum limit.</p>
   * @public
   */
  Max?: number | undefined;
}

/**
 * <p>The minimum and maximum amount of network bandwidth, in gigabits per second (Gbps).</p>
 *          <note>
 *             <p>Setting the minimum bandwidth does not guarantee that your instance will achieve the
 *             minimum bandwidth. Amazon EC2 will identify instance types that support the specified minimum
 *             bandwidth, but the actual bandwidth of your instance might go below the specified minimum
 *             at times. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-network-bandwidth.html#available-instance-bandwidth">Available instance bandwidth</a> in the
 *             <i>Amazon EC2 User Guide</i>.</p>
 *          </note>
 * @public
 */
export interface NetworkBandwidthGbps {
  /**
   * <p>The minimum amount of network bandwidth, in Gbps. If this parameter is not specified, there is no minimum
   *          limit.</p>
   * @public
   */
  Min?: number | undefined;

  /**
   * <p>The maximum amount of network bandwidth, in Gbps. If this parameter is not specified, there is no
   *          maximum limit.</p>
   * @public
   */
  Max?: number | undefined;
}

/**
 * <p>The minimum and maximum number of network interfaces.</p>
 * @public
 */
export interface NetworkInterfaceCount {
  /**
   * <p>The minimum number of network interfaces. If this parameter is not specified, there is no
   *          minimum limit.</p>
   * @public
   */
  Min?: number | undefined;

  /**
   * <p>The maximum number of network interfaces. If this parameter is not specified, there is no
   *          maximum limit.</p>
   * @public
   */
  Max?: number | undefined;
}

/**
 * <p>The minimum and maximum amount of total local storage, in GB.</p>
 * @public
 */
export interface TotalLocalStorageGB {
  /**
   * <p>The minimum amount of total local storage, in GB. If this parameter is not specified, there is
   *          no minimum limit.</p>
   * @public
   */
  Min?: number | undefined;

  /**
   * <p>The maximum amount of total local storage, in GB. If this parameter is not specified, there is
   *          no maximum limit.</p>
   * @public
   */
  Max?: number | undefined;
}

/**
 * <p>The minimum and maximum number of vCPUs.</p>
 * @public
 */
export interface VCpuCountRange {
  /**
   * <p>The minimum number of vCPUs. If the value is <code>0</code>, there is no minimum
   *          limit.</p>
   * @public
   */
  Min?: number | undefined;

  /**
   * <p>The maximum number of vCPUs. If this parameter is not specified, there is no maximum
   *          limit.</p>
   * @public
   */
  Max?: number | undefined;
}

/**
 * <p>The attributes for the instance types. When you specify instance attributes, Amazon EC2 will
 *          identify instance types with these attributes.</p>
 *          <p>You must specify <code>VCpuCount</code> and <code>MemoryMiB</code>. All other attributes
 *          are optional. Any unspecified optional attribute is set to its default.</p>
 *          <p>When you specify multiple attributes, you get instance types that satisfy all of the
 *          specified attributes. If you specify multiple values for an attribute, you get instance
 *          types that satisfy any of the specified values.</p>
 *          <p>To limit the list of instance types from which Amazon EC2 can identify matching instance types,
 *          you can use one of the following parameters, but not both in the same request:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>AllowedInstanceTypes</code> - The instance types to include in the list. All
 *                other instance types are ignored, even if they match your specified attributes.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ExcludedInstanceTypes</code> - The instance types to exclude from the list,
 *                even if they match your specified attributes.</p>
 *             </li>
 *          </ul>
 *          <note>
 *             <p>If you specify <code>InstanceRequirements</code>, you can't specify
 *             <code>InstanceType</code>.</p>
 *             <p>Attribute-based instance type selection is only supported when using Auto Scaling
 *             groups, EC2 Fleet, and Spot Fleet to launch instances. If you plan to use the launch template in
 *             the <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-instance-wizard.html">launch instance
 *                wizard</a> or with the <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RunInstances.html">RunInstances API</a>, you
 *             can't specify <code>InstanceRequirements</code>.</p>
 *          </note>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/create-mixed-instances-group-attribute-based-instance-type-selection.html">Create mixed instances group using attribute-based instance type selection</a> in
 *          the <i>Amazon EC2 Auto Scaling User Guide</i>, and also <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-fleet-attribute-based-instance-type-selection.html">Specify attributes for instance type selection for EC2 Fleet or Spot Fleet</a> and <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-placement-score.html">Spot
 *             placement score</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @public
 */
export interface InstanceRequirements {
  /**
   * <p>The minimum and maximum number of vCPUs.</p>
   * @public
   */
  VCpuCount?: VCpuCountRange | undefined;

  /**
   * <p>The minimum and maximum amount of memory, in MiB.</p>
   * @public
   */
  MemoryMiB?: MemoryMiB | undefined;

  /**
   * <p>The CPU manufacturers to include.</p>
   *          <ul>
   *             <li>
   *                <p>For instance types with Intel CPUs, specify <code>intel</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with AMD CPUs, specify <code>amd</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with Amazon Web Services CPUs, specify <code>amazon-web-services</code>.</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>Don't confuse the CPU manufacturer with the CPU architecture. Instances will
   *          be launched with a compatible CPU architecture based on the Amazon Machine Image (AMI) that you
   *          specify in your launch template.</p>
   *          </note>
   *          <p>Default: Any manufacturer</p>
   * @public
   */
  CpuManufacturers?: CpuManufacturer[] | undefined;

  /**
   * <p>The minimum and maximum amount of memory per vCPU, in GiB.</p>
   *          <p>Default: No minimum or maximum limits</p>
   * @public
   */
  MemoryGiBPerVCpu?: MemoryGiBPerVCpu | undefined;

  /**
   * <p>The instance types to exclude.</p>
   *          <p>You can use strings with one or more wild cards, represented by
   *       an asterisk (<code>*</code>), to exclude an instance type, size, or generation. The
   *       following are examples: <code>m5.8xlarge</code>, <code>c5*.*</code>, <code>m5a.*</code>,
   *       <code>r*</code>, <code>*3*</code>.</p>
   *          <p>For example, if you specify <code>c5*</code>,Amazon EC2 will exclude the entire C5 instance
   *       family, which includes all C5a and C5n instance types. If you specify
   *       <code>m5a.*</code>, Amazon EC2 will exclude all the M5a instance types, but not the M5n
   *       instance types.</p>
   *          <note>
   *             <p>If you specify <code>ExcludedInstanceTypes</code>, you can't specify <code>AllowedInstanceTypes</code>.</p>
   *          </note>
   *          <p>Default: No excluded instance types</p>
   * @public
   */
  ExcludedInstanceTypes?: string[] | undefined;

  /**
   * <p>Indicates whether current or previous generation instance types are included. The
   *       current generation instance types are recommended for use. Current generation instance types are
   *       typically the latest two to three generations in each instance family. For more
   *       information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html">Instance types</a> in the
   *       <i>Amazon EC2 User Guide</i>.</p>
   *          <p>For current generation instance types, specify <code>current</code>.</p>
   *          <p>For previous generation instance types, specify <code>previous</code>.</p>
   *          <p>Default: Current and previous generation instance types</p>
   * @public
   */
  InstanceGenerations?: InstanceGeneration[] | undefined;

  /**
   * <p>[Price protection] The price protection threshold for Spot Instances, as a percentage higher than
   *          an identified Spot price. The identified Spot price is the Spot price of the lowest priced
   *          current generation C, M, or R instance type with your specified attributes. If no current
   *          generation C, M, or R instance type matches your attributes, then the identified Spot price
   *          is from the lowest priced current generation instance types, and failing that, from the
   *          lowest priced previous generation instance types that match your attributes. When Amazon EC2
   *          selects instance types with your attributes, it will exclude instance types whose Spot
   *          price exceeds your specified threshold.</p>
   *          <p>The parameter accepts an integer, which Amazon EC2 interprets as a percentage.</p>
   *          <p>If you set <code>TargetCapacityUnitType</code> to <code>vcpu</code> or
   *             <code>memory-mib</code>, the price protection threshold is applied based on the per-vCPU
   *          or per-memory price instead of the per-instance price.</p>
   *          <p>This parameter is not supported for <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetSpotPlacementScores.html">GetSpotPlacementScores</a> and <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetInstanceTypesFromInstanceRequirements.html">GetInstanceTypesFromInstanceRequirements</a>.</p>
   *          <note>
   *             <p>Only one of <code>SpotMaxPricePercentageOverLowestPrice</code> or
   *                <code>MaxSpotPriceAsPercentageOfOptimalOnDemandPrice</code> can be specified. If you
   *             don't specify either, Amazon EC2 will automatically apply optimal price protection to
   *             consistently select from a wide range of instance types. To indicate no price protection
   *             threshold for Spot Instances, meaning you want to consider all instance types that match your
   *             attributes, include one of these parameters and specify a high value, such as
   *                <code>999999</code>.</p>
   *          </note>
   *          <p>Default: <code>100</code>
   *          </p>
   * @public
   */
  SpotMaxPricePercentageOverLowestPrice?: number | undefined;

  /**
   * <p>[Price protection] The price protection threshold for On-Demand Instances, as a percentage higher
   *          than an identified On-Demand price. The identified On-Demand price is the price of the
   *          lowest priced current generation C, M, or R instance type with your specified attributes.
   *          When Amazon EC2 selects instance types with your attributes, it will exclude instance types
   *          whose price exceeds your specified threshold.</p>
   *          <p>The parameter accepts an integer, which Amazon EC2 interprets as a percentage.</p>
   *          <p>To turn off price protection, specify a high value, such as <code>999999</code>.</p>
   *          <p>This parameter is not supported for <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetSpotPlacementScores.html">GetSpotPlacementScores</a> and <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetInstanceTypesFromInstanceRequirements.html">GetInstanceTypesFromInstanceRequirements</a>.</p>
   *          <note>
   *             <p>If you set <code>TargetCapacityUnitType</code> to <code>vcpu</code> or
   *          <code>memory-mib</code>, the price protection threshold is applied based on the
   *          per-vCPU or per-memory price instead of the per-instance price.</p>
   *          </note>
   *          <p>Default: <code>20</code>
   *          </p>
   * @public
   */
  OnDemandMaxPricePercentageOverLowestPrice?: number | undefined;

  /**
   * <p>Indicates whether bare metal instance types must be included, excluded, or required.</p>
   *          <ul>
   *             <li>
   *                <p>To include bare metal instance types, specify <code>included</code>.</p>
   *             </li>
   *             <li>
   *                <p>To require only bare metal instance types, specify <code>required</code>.</p>
   *             </li>
   *             <li>
   *                <p>To exclude bare metal instance types, specify <code>excluded</code>.</p>
   *             </li>
   *          </ul>
   *          <p>Default: <code>excluded</code>
   *          </p>
   * @public
   */
  BareMetal?: BareMetal | undefined;

  /**
   * <p>Indicates whether burstable performance T instance types are included, excluded, or required. For more information, see
   *       <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-performance-instances.html">Burstable performance instances</a>.</p>
   *          <ul>
   *             <li>
   *                <p>To include burstable performance instance types, specify <code>included</code>.</p>
   *             </li>
   *             <li>
   *                <p>To require only burstable performance instance types, specify <code>required</code>.</p>
   *             </li>
   *             <li>
   *                <p>To exclude burstable performance instance types, specify <code>excluded</code>.</p>
   *             </li>
   *          </ul>
   *          <p>Default: <code>excluded</code>
   *          </p>
   * @public
   */
  BurstablePerformance?: BurstablePerformance | undefined;

  /**
   * <p>Indicates whether instance types must support hibernation for On-Demand
   *          Instances.</p>
   *          <p>This parameter is not supported for <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetSpotPlacementScores.html">GetSpotPlacementScores</a>.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   * @public
   */
  RequireHibernateSupport?: boolean | undefined;

  /**
   * <p>The minimum and maximum number of network interfaces.</p>
   *          <p>Default: No minimum or maximum limits</p>
   * @public
   */
  NetworkInterfaceCount?: NetworkInterfaceCount | undefined;

  /**
   * <p>Indicates whether instance types with instance store volumes are included, excluded, or required. For more information,
   *             <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/InstanceStorage.html">Amazon
   *             EC2 instance store</a> in the <i>Amazon EC2 User Guide</i>.</p>
   *          <ul>
   *             <li>
   *                <p>To include instance types with instance store volumes, specify
   *                <code>included</code>.</p>
   *             </li>
   *             <li>
   *                <p>To require only instance types with instance store volumes, specify
   *                   <code>required</code>.</p>
   *             </li>
   *             <li>
   *                <p>To exclude instance types with instance store volumes, specify
   *                <code>excluded</code>.</p>
   *             </li>
   *          </ul>
   *          <p>Default: <code>included</code>
   *          </p>
   * @public
   */
  LocalStorage?: LocalStorage | undefined;

  /**
   * <p>The type of local storage that is required.</p>
   *          <ul>
   *             <li>
   *                <p>For instance types with hard disk drive (HDD) storage, specify <code>hdd</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with solid state drive (SSD) storage, specify
   *                <code>ssd</code>.</p>
   *             </li>
   *          </ul>
   *          <p>Default: <code>hdd</code> and <code>ssd</code>
   *          </p>
   * @public
   */
  LocalStorageTypes?: LocalStorageType[] | undefined;

  /**
   * <p>The minimum and maximum amount of total local storage, in GB.</p>
   *          <p>Default: No minimum or maximum limits</p>
   * @public
   */
  TotalLocalStorageGB?: TotalLocalStorageGB | undefined;

  /**
   * <p>The minimum and maximum baseline bandwidth to Amazon EBS, in Mbps. For more information, see
   *             <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-optimized.html">Amazon
   *             EBS–optimized instances</a> in the <i>Amazon EC2 User Guide</i>.</p>
   *          <p>Default: No minimum or maximum limits</p>
   * @public
   */
  BaselineEbsBandwidthMbps?: BaselineEbsBandwidthMbps | undefined;

  /**
   * <p>The accelerator types that must be on the instance type.</p>
   *          <ul>
   *             <li>
   *                <p>For instance types with GPU accelerators, specify <code>gpu</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with FPGA accelerators, specify <code>fpga</code>.</p>
   *             </li>
   *          </ul>
   *          <p>Default: Any accelerator type</p>
   * @public
   */
  AcceleratorTypes?: AcceleratorType[] | undefined;

  /**
   * <p>The minimum and maximum number of accelerators (GPUs, FPGAs, or Amazon Web Services Inferentia chips) on
   *          an instance.</p>
   *          <p>To exclude accelerator-enabled instance types, set <code>Max</code> to <code>0</code>.</p>
   *          <p>Default: No minimum or maximum limits</p>
   * @public
   */
  AcceleratorCount?: AcceleratorCount | undefined;

  /**
   * <p>Indicates whether instance types must have accelerators by specific manufacturers.</p>
   *          <ul>
   *             <li>
   *                <p>For instance types with Amazon Web Services devices, specify <code>amazon-web-services</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with AMD devices, specify <code>amd</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with Habana devices, specify <code>habana</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with NVIDIA devices, specify <code>nvidia</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with Xilinx devices, specify <code>xilinx</code>.</p>
   *             </li>
   *          </ul>
   *          <p>Default: Any manufacturer</p>
   * @public
   */
  AcceleratorManufacturers?: AcceleratorManufacturer[] | undefined;

  /**
   * <p>The accelerators that must be on the instance type.</p>
   *          <ul>
   *             <li>
   *                <p>For instance types with NVIDIA A10G GPUs, specify <code>a10g</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with NVIDIA A100 GPUs, specify <code>a100</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with NVIDIA H100 GPUs, specify <code>h100</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with Amazon Web Services Inferentia chips, specify <code>inferentia</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with NVIDIA GRID K520 GPUs, specify <code>k520</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with NVIDIA K80 GPUs, specify <code>k80</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with NVIDIA M60 GPUs, specify <code>m60</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with AMD Radeon Pro V520 GPUs, specify <code>radeon-pro-v520</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with NVIDIA T4 GPUs, specify <code>t4</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with NVIDIA T4G GPUs, specify <code>t4g</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with Xilinx VU9P FPGAs, specify <code>vu9p</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with NVIDIA V100 GPUs, specify <code>v100</code>.</p>
   *             </li>
   *          </ul>
   *          <p>Default: Any accelerator</p>
   * @public
   */
  AcceleratorNames?: AcceleratorName[] | undefined;

  /**
   * <p>The minimum and maximum amount of total accelerator memory, in MiB.</p>
   *          <p>Default: No minimum or maximum limits</p>
   * @public
   */
  AcceleratorTotalMemoryMiB?: AcceleratorTotalMemoryMiB | undefined;

  /**
   * <p>The minimum and maximum amount of network bandwidth, in gigabits per second (Gbps).</p>
   *          <p>Default: No minimum or maximum limits</p>
   * @public
   */
  NetworkBandwidthGbps?: NetworkBandwidthGbps | undefined;

  /**
   * <p>The instance types to apply your specified attributes against. All other instance types
   *          are ignored, even if they match your specified attributes.</p>
   *          <p>You can use strings with one or more wild cards, represented by
   *          an asterisk (<code>*</code>), to allow an instance type, size, or generation. The
   *          following are examples: <code>m5.8xlarge</code>, <code>c5*.*</code>, <code>m5a.*</code>,
   *          <code>r*</code>, <code>*3*</code>.</p>
   *          <p>For example, if you specify <code>c5*</code>,Amazon EC2 will allow the entire C5 instance
   *          family, which includes all C5a and C5n instance types. If you specify
   *          <code>m5a.*</code>, Amazon EC2 will allow all the M5a instance types, but not the M5n
   *          instance types.</p>
   *          <note>
   *             <p>If you specify <code>AllowedInstanceTypes</code>, you can't specify <code>ExcludedInstanceTypes</code>.</p>
   *          </note>
   *          <p>Default: All instance types</p>
   * @public
   */
  AllowedInstanceTypes?: string[] | undefined;

  /**
   * <p>[Price protection] The price protection threshold for Spot Instances, as a percentage of an
   *          identified On-Demand price. The identified On-Demand price is the price of the lowest
   *          priced current generation C, M, or R instance type with your specified attributes. If no
   *          current generation C, M, or R instance type matches your attributes, then the identified
   *          price is from the lowest priced current generation instance types, and failing that, from
   *          the lowest priced previous generation instance types that match your attributes. When Amazon EC2
   *          selects instance types with your attributes, it will exclude instance types whose price
   *          exceeds your specified threshold.</p>
   *          <p>The parameter accepts an integer, which Amazon EC2 interprets as a percentage.</p>
   *          <p>If you set <code>TargetCapacityUnitType</code> to <code>vcpu</code> or
   *             <code>memory-mib</code>, the price protection threshold is based on the per vCPU or per
   *          memory price instead of the per instance price.</p>
   *          <note>
   *             <p>Only one of <code>SpotMaxPricePercentageOverLowestPrice</code> or
   *                <code>MaxSpotPriceAsPercentageOfOptimalOnDemandPrice</code> can be specified. If you
   *             don't specify either, Amazon EC2 will automatically apply optimal price protection to
   *             consistently select from a wide range of instance types. To indicate no price protection
   *             threshold for Spot Instances, meaning you want to consider all instance types that match your
   *             attributes, include one of these parameters and specify a high value, such as
   *                <code>999999</code>.</p>
   *          </note>
   * @public
   */
  MaxSpotPriceAsPercentageOfOptimalOnDemandPrice?: number | undefined;
}

/**
 * <p>Describes the placement of an instance.</p>
 * @public
 */
export interface PlacementResponse {
  /**
   * <p>The name of the placement group that the instance is in.</p>
   * @public
   */
  GroupName?: string | undefined;
}

/**
 * <p>Describes overrides for a launch template.</p>
 * @public
 */
export interface FleetLaunchTemplateOverrides {
  /**
   * <p>The instance type.</p>
   *          <p>
   *             <code>mac1.metal</code> is not supported as a launch template override.</p>
   *          <note>
   *             <p>If you specify <code>InstanceType</code>, you can't specify
   *                <code>InstanceRequirements</code>.</p>
   *          </note>
   * @public
   */
  InstanceType?: _InstanceType | undefined;

  /**
   * <p>The maximum price per unit hour that you are willing to pay for a Spot Instance. We do not recommend using this parameter because it can lead to increased interruptions. If you do not specify this parameter, you will pay the current Spot price.
   *       </p>
   *          <important>
   *             <p>If you specify a maximum price, your instances will be interrupted more frequently than if you do not specify this parameter.</p>
   *          </important>
   * @public
   */
  MaxPrice?: string | undefined;

  /**
   * <p>The ID of the subnet in which to launch the instances.</p>
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * <p>The Availability Zone in which to launch the instances.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>The number of units provided by the specified instance type. These are the same units
   *          that you chose to set the target capacity in terms of instances, or a performance
   *          characteristic such as vCPUs, memory, or I/O.</p>
   *          <p>If the target capacity divided by this value is not a whole number, Amazon EC2 rounds the
   *          number of instances to the next whole number. If this value is not specified, the default
   *          is 1.</p>
   *          <note>
   *             <p>When specifying weights, the price used in the <code>lowest-price</code> and
   *             <code>price-capacity-optimized</code> allocation strategies is per
   *             <i>unit</i> hour (where the instance price is divided by the specified
   *             weight). However, if all the specified weights are above the requested
   *             <code>TargetCapacity</code>, resulting in only 1 instance being launched, the price
   *             used is per <i>instance</i> hour.</p>
   *          </note>
   * @public
   */
  WeightedCapacity?: number | undefined;

  /**
   * <p>The priority for the launch template override. The highest priority is launched
   *          first.</p>
   *          <p>If the On-Demand <code>AllocationStrategy</code> is set to <code>prioritized</code>,
   *          EC2 Fleet uses priority to determine which launch template override to use first in fulfilling
   *          On-Demand capacity.</p>
   *          <p>If the Spot <code>AllocationStrategy</code> is set to
   *             <code>capacity-optimized-prioritized</code>, EC2 Fleet uses priority on a best-effort basis
   *          to determine which launch template override to use in fulfilling Spot capacity, but
   *          optimizes for capacity first.</p>
   *          <p>Valid values are whole numbers starting at <code>0</code>. The lower the number, the
   *          higher the priority. If no number is set, the override has the lowest priority. You can set
   *          the same priority for different launch template overrides.</p>
   * @public
   */
  Priority?: number | undefined;

  /**
   * <p>The location where the instance launched, if applicable.</p>
   * @public
   */
  Placement?: PlacementResponse | undefined;

  /**
   * <p>The attributes for the instance types. When you specify instance attributes, Amazon EC2 will
   *          identify instance types with those attributes.</p>
   *          <note>
   *             <p>If you specify <code>InstanceRequirements</code>, you can't specify
   *             <code>InstanceType</code>.</p>
   *          </note>
   * @public
   */
  InstanceRequirements?: InstanceRequirements | undefined;

  /**
   * <p>The ID of the AMI in the format <code>ami-17characters00000</code>.</p>
   *          <p>Alternatively, you can specify a Systems Manager parameter, using one of the following
   *          formats. The Systems Manager parameter will resolve to an AMI ID on launch.</p>
   *          <p>To reference a public parameter:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>resolve:ssm:<i>public-parameter</i>
   *                   </code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>To reference a parameter stored in the same account:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>resolve:ssm:<i>parameter-name</i>
   *                   </code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>resolve:ssm:<i>parameter-name:version-number</i>
   *                   </code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>resolve:ssm:<i>parameter-name:label</i>
   *                   </code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>To reference a parameter shared from another Amazon Web Services account:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>resolve:ssm:<i>parameter-ARN</i>
   *                   </code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>resolve:ssm:<i>parameter-ARN:version-number</i>
   *                   </code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>resolve:ssm:<i>parameter-ARN:label</i>
   *                   </code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/create-launch-template.html#use-an-ssm-parameter-instead-of-an-ami-id">Use a Systems Manager parameter instead of an AMI ID</a> in the
   *             <i>Amazon EC2 User Guide</i>.</p>
   *          <note>
   *             <p>This parameter is only available for fleets of type <code>instant</code>. For fleets
   *             of type <code>maintain</code> and <code>request</code>, you must specify the AMI ID in
   *             the launch template.</p>
   *          </note>
   * @public
   */
  ImageId?: string | undefined;
}

/**
 * <p>Describes a launch template and overrides.</p>
 * @public
 */
export interface LaunchTemplateAndOverridesResponse {
  /**
   * <p>The launch template.</p>
   * @public
   */
  LaunchTemplateSpecification?: FleetLaunchTemplateSpecification | undefined;

  /**
   * <p>Any parameters that you specify override the same parameters in the launch
   *          template.</p>
   * @public
   */
  Overrides?: FleetLaunchTemplateOverrides | undefined;
}

/**
 * @public
 * @enum
 */
export const InstanceLifecycle = {
  ON_DEMAND: "on-demand",
  SPOT: "spot",
} as const;

/**
 * @public
 */
export type InstanceLifecycle = (typeof InstanceLifecycle)[keyof typeof InstanceLifecycle];

/**
 * <p>Describes the instances that could not be launched by the fleet.</p>
 * @public
 */
export interface CreateFleetError {
  /**
   * <p>The launch templates and overrides that were used for launching the instances. The
   *          values that you specify in the Overrides replace the values in the launch template.</p>
   * @public
   */
  LaunchTemplateAndOverrides?: LaunchTemplateAndOverridesResponse | undefined;

  /**
   * <p>Indicates if the instance that could not be launched was a Spot Instance or On-Demand Instance.</p>
   * @public
   */
  Lifecycle?: InstanceLifecycle | undefined;

  /**
   * <p>The error code that indicates why the instance could not be launched. For more
   *          information about error codes, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/errors-overview.html">Error codes</a>.</p>
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * <p>The error message that describes why the instance could not be launched. For more
   *          information about error messages, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/errors-overview.html">Error codes</a>.</p>
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const PlatformValues = {
  Windows: "Windows",
} as const;

/**
 * @public
 */
export type PlatformValues = (typeof PlatformValues)[keyof typeof PlatformValues];

/**
 * <p>Describes the instances that were launched by the fleet.</p>
 * @public
 */
export interface CreateFleetInstance {
  /**
   * <p>The launch templates and overrides that were used for launching the instances. The
   *          values that you specify in the Overrides replace the values in the launch template.</p>
   * @public
   */
  LaunchTemplateAndOverrides?: LaunchTemplateAndOverridesResponse | undefined;

  /**
   * <p>Indicates if the instance that was launched is a Spot Instance or On-Demand Instance.</p>
   * @public
   */
  Lifecycle?: InstanceLifecycle | undefined;

  /**
   * <p>The IDs of the instances.</p>
   * @public
   */
  InstanceIds?: string[] | undefined;

  /**
   * <p>The instance type.</p>
   * @public
   */
  InstanceType?: _InstanceType | undefined;

  /**
   * <p>The value is <code>windows</code> for Windows instances in an EC2 Fleet. Otherwise, the value is
   *          blank.</p>
   * @public
   */
  Platform?: PlatformValues | undefined;
}

/**
 * @public
 */
export interface CreateFleetResult {
  /**
   * <p>The ID of the EC2 Fleet.</p>
   * @public
   */
  FleetId?: string | undefined;

  /**
   * <p>Information about the instances that could not be launched by the fleet. Supported only for
   *             fleets of type <code>instant</code>.</p>
   * @public
   */
  Errors?: CreateFleetError[] | undefined;

  /**
   * <p>Information about the instances that were launched by the fleet. Supported only for
   *             fleets of type <code>instant</code>.</p>
   * @public
   */
  Instances?: CreateFleetInstance[] | undefined;
}

/**
 * @public
 * @enum
 */
export const DestinationFileFormat = {
  parquet: "parquet",
  plain_text: "plain-text",
} as const;

/**
 * @public
 */
export type DestinationFileFormat = (typeof DestinationFileFormat)[keyof typeof DestinationFileFormat];

/**
 * <p>Describes the destination options for a flow log.</p>
 * @public
 */
export interface DestinationOptionsRequest {
  /**
   * <p>The format for the flow log. The default is <code>plain-text</code>.</p>
   * @public
   */
  FileFormat?: DestinationFileFormat | undefined;

  /**
   * <p>Indicates whether to use Hive-compatible prefixes for flow logs stored in Amazon S3.
   *             The default is <code>false</code>.</p>
   * @public
   */
  HiveCompatiblePartitions?: boolean | undefined;

  /**
   * <p>Indicates whether to partition the flow log per hour. This reduces the cost and response
   *             time for queries. The default is <code>false</code>.</p>
   * @public
   */
  PerHourPartition?: boolean | undefined;
}

/**
 * @public
 * @enum
 */
export const LogDestinationType = {
  cloud_watch_logs: "cloud-watch-logs",
  kinesis_data_firehose: "kinesis-data-firehose",
  s3: "s3",
} as const;

/**
 * @public
 */
export type LogDestinationType = (typeof LogDestinationType)[keyof typeof LogDestinationType];

/**
 * @public
 * @enum
 */
export const FlowLogsResourceType = {
  NetworkInterface: "NetworkInterface",
  Subnet: "Subnet",
  TransitGateway: "TransitGateway",
  TransitGatewayAttachment: "TransitGatewayAttachment",
  VPC: "VPC",
} as const;

/**
 * @public
 */
export type FlowLogsResourceType = (typeof FlowLogsResourceType)[keyof typeof FlowLogsResourceType];

/**
 * @public
 * @enum
 */
export const TrafficType = {
  ACCEPT: "ACCEPT",
  ALL: "ALL",
  REJECT: "REJECT",
} as const;

/**
 * @public
 */
export type TrafficType = (typeof TrafficType)[keyof typeof TrafficType];

/**
 * @public
 */
export interface CreateFlowLogsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. For more information, see <a href="https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html">How to ensure
   *                 idempotency</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The ARN of the IAM role that allows Amazon EC2 to publish flow logs to the log destination.</p>
   *          <p>This parameter is required if the destination type is <code>cloud-watch-logs</code>,
   *             or if the destination type is <code>kinesis-data-firehose</code> and the delivery stream
   *             and the resources to monitor are in different accounts.</p>
   * @public
   */
  DeliverLogsPermissionArn?: string | undefined;

  /**
   * <p>The ARN of the IAM role that allows Amazon EC2 to publish flow logs across accounts.</p>
   * @public
   */
  DeliverCrossAccountRole?: string | undefined;

  /**
   * <p>The name of a new or existing CloudWatch Logs log group where Amazon EC2 publishes your flow logs.</p>
   *          <p>This parameter is valid only if the destination type is <code>cloud-watch-logs</code>.</p>
   * @public
   */
  LogGroupName?: string | undefined;

  /**
   * <p>The IDs of the resources to monitor. For example, if the resource type is
   *                 <code>VPC</code>, specify the IDs of the VPCs.</p>
   *          <p>Constraints: Maximum of 25 for transit gateway resource types. Maximum of 1000 for the
   *             other resource types.</p>
   * @public
   */
  ResourceIds: string[] | undefined;

  /**
   * <p>The type of resource to monitor.</p>
   * @public
   */
  ResourceType: FlowLogsResourceType | undefined;

  /**
   * <p>The type of traffic to monitor (accepted traffic, rejected traffic, or all traffic).
   *             This parameter is not supported for transit gateway resource types. It is required for
   *             the other resource types.</p>
   * @public
   */
  TrafficType?: TrafficType | undefined;

  /**
   * <p>The type of destination for the flow log data.</p>
   *          <p>Default: <code>cloud-watch-logs</code>
   *          </p>
   * @public
   */
  LogDestinationType?: LogDestinationType | undefined;

  /**
   * <p>The destination for the flow log data. The meaning of this parameter depends on the destination type.</p>
   *          <ul>
   *             <li>
   *                <p>If the destination type is <code>cloud-watch-logs</code>, specify the ARN of a CloudWatch Logs log group. For example:</p>
   *                <p>arn:aws:logs:<i>region</i>:<i>account_id</i>:log-group:<i>my_group</i>
   *                </p>
   *                <p>Alternatively, use the <code>LogGroupName</code> parameter.</p>
   *             </li>
   *             <li>
   *                <p>If the destination type is <code>s3</code>, specify the ARN of an S3 bucket. For example:</p>
   *                <p>arn:aws:s3:::<i>my_bucket</i>/<i>my_subfolder</i>/</p>
   *                <p>The subfolder is optional. Note that you can't use <code>AWSLogs</code> as a subfolder name.</p>
   *             </li>
   *             <li>
   *                <p>If the destination type is <code>kinesis-data-firehose</code>, specify the ARN of a Kinesis Data Firehose delivery stream. For example:</p>
   *                <p>arn:aws:firehose:<i>region</i>:<i>account_id</i>:deliverystream:<i>my_stream</i>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  LogDestination?: string | undefined;

  /**
   * <p>The fields to include in the flow log record. List the fields in the order in which
   *             they should appear. If you omit this parameter, the flow log is created using the
   *             default format. If you specify this parameter, you must include at least one
   *             field. For more information about the available fields, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/flow-log-records.html">Flow log records</a>
   *             in the <i>Amazon VPC User Guide</i> or <a href="https://docs.aws.amazon.com/vpc/latest/tgw/tgw-flow-logs.html#flow-log-records">Transit Gateway Flow Log
   *                     records</a> in the <i>Amazon Web Services Transit Gateway Guide</i>.</p>
   *          <p>Specify the fields using the <code>$\{field-id\}</code> format, separated by spaces.</p>
   * @public
   */
  LogFormat?: string | undefined;

  /**
   * <p>The tags to apply to the flow logs.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * <p>The maximum interval of time during which a flow of packets is captured and aggregated into a flow log record.
   *             The possible values are 60 seconds (1 minute) or 600 seconds (10 minutes).
   *             This parameter must be 60 seconds for transit gateway resource types.</p>
   *          <p>When a network interface is attached to a <a href="https://docs.aws.amazon.com/ec2/latest/instancetypes/ec2-nitro-instances.html">Nitro-based
   *                 instance</a>, the aggregation interval is always 60 seconds or less, regardless
   *             of the value that you specify.</p>
   *          <p>Default: 600</p>
   * @public
   */
  MaxAggregationInterval?: number | undefined;

  /**
   * <p>The destination options.</p>
   * @public
   */
  DestinationOptions?: DestinationOptionsRequest | undefined;
}

/**
 * @public
 */
export interface CreateFlowLogsResult {
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The IDs of the flow logs.</p>
   * @public
   */
  FlowLogIds?: string[] | undefined;

  /**
   * <p>Information about the flow logs that could not be created successfully.</p>
   * @public
   */
  Unsuccessful?: UnsuccessfulItem[] | undefined;
}

/**
 * <p>Describes a storage location in Amazon S3.</p>
 * @public
 */
export interface StorageLocation {
  /**
   * <p>The name of the S3 bucket.</p>
   * @public
   */
  Bucket?: string | undefined;

  /**
   * <p>The key.</p>
   * @public
   */
  Key?: string | undefined;
}

/**
 * @public
 */
export interface CreateFpgaImageRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The location of the encrypted design checkpoint in Amazon S3. The input must be a tarball.</p>
   * @public
   */
  InputStorageLocation: StorageLocation | undefined;

  /**
   * <p>The location in Amazon S3 for the output logs.</p>
   * @public
   */
  LogsStorageLocation?: StorageLocation | undefined;

  /**
   * <p>A description for the AFI.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>A name for the AFI.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *       	For more information, see <a href="https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html">Ensuring Idempotency</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The tags to apply to the FPGA image during creation.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;
}

/**
 * @public
 */
export interface CreateFpgaImageResult {
  /**
   * <p>The FPGA image identifier (AFI ID).</p>
   * @public
   */
  FpgaImageId?: string | undefined;

  /**
   * <p>The global FPGA image identifier (AGFI ID).</p>
   * @public
   */
  FpgaImageGlobalId?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const VolumeType = {
  gp2: "gp2",
  gp3: "gp3",
  io1: "io1",
  io2: "io2",
  sc1: "sc1",
  st1: "st1",
  standard: "standard",
} as const;

/**
 * @public
 */
export type VolumeType = (typeof VolumeType)[keyof typeof VolumeType];

/**
 * <p>Describes a block device for an EBS volume.</p>
 * @public
 */
export interface EbsBlockDevice {
  /**
   * <p>Indicates whether the EBS volume is deleted on instance termination. For more
   *             information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/terminating-instances.html#preserving-volumes-on-termination">Preserving Amazon EBS volumes on instance termination</a> in the
   *                 <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  DeleteOnTermination?: boolean | undefined;

  /**
   * <p>The number of I/O operations per second (IOPS). For <code>gp3</code>, <code>io1</code>, and <code>io2</code> volumes,
   *             this represents the number of IOPS that are provisioned for the volume. For <code>gp2</code>
   *             volumes, this represents the baseline performance of the volume and the rate at which
   *             the volume accumulates I/O credits for bursting.</p>
   *          <p>The following are the supported values for each volume type:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>gp3</code>: 3,000 - 16,000 IOPS</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>io1</code>: 100 - 64,000 IOPS</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>io2</code>: 100 - 256,000 IOPS</p>
   *             </li>
   *          </ul>
   *          <p>For <code>io2</code> volumes, you can achieve up to 256,000 IOPS on
   * <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html#ec2-nitro-instances">instances
   * built on the Nitro System</a>. On other instances, you can achieve performance up to 32,000 IOPS.</p>
   *          <p>This parameter is required for <code>io1</code> and <code>io2</code> volumes. The default for <code>gp3</code> volumes
   *             is 3,000 IOPS.</p>
   * @public
   */
  Iops?: number | undefined;

  /**
   * <p>The ID of the snapshot.</p>
   * @public
   */
  SnapshotId?: string | undefined;

  /**
   * <p>The size of the volume, in GiBs. You must specify either a snapshot ID or a volume
   *             size. If you specify a snapshot, the default is the snapshot size. You can specify a
   *             volume size that is equal to or larger than the snapshot size.</p>
   *          <p>The following are the supported sizes for each volume type:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>gp2</code> and <code>gp3</code>: 1 - 16,384 GiB</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>io1</code>: 4 - 16,384 GiB</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>io2</code>: 4 - 65,536 GiB</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>st1</code> and <code>sc1</code>: 125 - 16,384 GiB</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>standard</code>: 1 - 1024 GiB</p>
   *             </li>
   *          </ul>
   * @public
   */
  VolumeSize?: number | undefined;

  /**
   * <p>The volume type. For more information, see <a href="https://docs.aws.amazon.com/ebs/latest/userguide/ebs-volume-types.html">Amazon EBS volume types</a> in the
   *                 <i>Amazon EBS User Guide</i>.</p>
   * @public
   */
  VolumeType?: VolumeType | undefined;

  /**
   * <p>Identifier (key ID, key alias, key ARN, or alias ARN) of the customer managed KMS key
   *             to use for EBS encryption.</p>
   *          <p>This parameter is only supported on <code>BlockDeviceMapping</code> objects called by
   *                 <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RunInstances.html">RunInstances</a>, <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RequestSpotFleet.html">RequestSpotFleet</a>,
   *             and <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RequestSpotInstances.html">RequestSpotInstances</a>.</p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>The throughput that the volume supports, in MiB/s.</p>
   *          <p>This parameter is valid only for <code>gp3</code> volumes.</p>
   *          <p>Valid Range: Minimum value of 125. Maximum value of 1000.</p>
   * @public
   */
  Throughput?: number | undefined;

  /**
   * <p>The ARN of the Outpost on which the snapshot is stored.</p>
   *          <p>This parameter is not supported when using <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateImage.html">CreateImage</a>.</p>
   * @public
   */
  OutpostArn?: string | undefined;

  /**
   * <p>Indicates whether the encryption state of an EBS volume is changed while being
   *             restored from a backing snapshot. The effect of setting the encryption state to <code>true</code> depends on
   * the volume origin (new or from a snapshot), starting encryption state, ownership, and whether encryption by default is enabled. For more information, see <a href="https://docs.aws.amazon.com/ebs/latest/userguide/ebs-encryption.html#encryption-parameters">Amazon EBS encryption</a> in the <i>Amazon EBS User Guide</i>.</p>
   *          <p>In no case can you remove encryption from an encrypted volume.</p>
   *          <p>Encrypted volumes can only be attached to instances that support Amazon EBS encryption. For
   *             more information, see <a href="https://docs.aws.amazon.com/ebs/latest/userguide/ebs-encryption-requirements.html#ebs-encryption_supported_instances">Supported instance types</a>.</p>
   *          <p>This parameter is not returned by <a>DescribeImageAttribute</a>.</p>
   *          <p>For <a>CreateImage</a> and <a>RegisterImage</a>, whether you can
   *             include this parameter, and the allowed values differ depending on the type of block
   *             device mapping you are creating.</p>
   *          <ul>
   *             <li>
   *                <p>If you are creating a block device mapping for a <b>new (empty)
   *                     volume</b>, you can include this parameter, and specify either <code>true</code>
   *                     for an encrypted volume, or <code>false</code> for an unencrypted volume. If you omit
   *                     this parameter, it defaults to <code>false</code> (unencrypted).</p>
   *             </li>
   *             <li>
   *                <p>If you are creating a block device mapping from an <b>existing
   *                     encrypted or unencrypted snapshot</b>, you must omit this parameter. If you
   *                     include this parameter, the request will fail, regardless of the value that you
   *                     specify.</p>
   *             </li>
   *             <li>
   *                <p>If you are creating a block device mapping from an <b>existing
   *                     unencrypted volume</b>, you can include this parameter, but you must specify
   *                     <code>false</code>. If you specify <code>true</code>, the request will fail. In this
   *                     case, we recommend that you omit the parameter.</p>
   *             </li>
   *             <li>
   *                <p>If you are creating a block device mapping from an <b>existing
   *                     encrypted volume</b>, you can include this parameter, and specify either
   *                     <code>true</code> or <code>false</code>. However, if you specify <code>false</code>,
   *                     the parameter is ignored and the block device mapping is always encrypted. In this
   *                     case, we recommend that you omit the parameter.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Encrypted?: boolean | undefined;
}

/**
 * <p>Describes a block device mapping, which defines the EBS volumes and instance store
 *             volumes to attach to an instance at launch.</p>
 * @public
 */
export interface BlockDeviceMapping {
  /**
   * <p>Parameters used to automatically set up EBS volumes when the instance is
   *             launched.</p>
   * @public
   */
  Ebs?: EbsBlockDevice | undefined;

  /**
   * <p>To omit the device from the block device mapping, specify an empty string. When this
   *             property is specified, the device is removed from the block device mapping regardless of
   *             the assigned value.</p>
   * @public
   */
  NoDevice?: string | undefined;

  /**
   * <p>The device name (for example, <code>/dev/sdh</code> or <code>xvdh</code>).</p>
   * @public
   */
  DeviceName?: string | undefined;

  /**
   * <p>The virtual device name (<code>ephemeral</code>N). Instance store volumes are numbered
   *             starting from 0. An instance type with 2 available instance store volumes can specify
   *             mappings for <code>ephemeral0</code> and <code>ephemeral1</code>. The number of
   *             available instance store volumes depends on the instance type. After you connect to the
   *             instance, you must mount the volume.</p>
   *          <p>NVMe instance store volumes are automatically enumerated and assigned a device name.
   *             Including them in your block device mapping has no effect.</p>
   *          <p>Constraints: For M3 instances, you must specify instance store volumes in the block
   *             device mapping for the instance. When you launch an M3 instance, we ignore any instance
   *             store volumes specified in the block device mapping for the AMI.</p>
   * @public
   */
  VirtualName?: string | undefined;
}

/**
 * @public
 */
export interface CreateImageRequest {
  /**
   * <p>The tags to apply to the AMI and snapshots on creation. You can tag the AMI, the
   *       snapshots, or both.</p>
   *          <ul>
   *             <li>
   *                <p>To tag the AMI, the value for <code>ResourceType</code> must be
   *           <code>image</code>.</p>
   *             </li>
   *             <li>
   *                <p>To tag the snapshots that are created of the root volume and of other Amazon EBS volumes that
   *           are attached to the instance, the value for <code>ResourceType</code> must be
   *             <code>snapshot</code>. The same tag is applied to all of the snapshots that are
   *           created.</p>
   *             </li>
   *          </ul>
   *          <p>If you specify other values for <code>ResourceType</code>, the request fails.</p>
   *          <p>To tag an AMI or snapshot after it has been created, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTags.html">CreateTags</a>. </p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   * 			and provides an error response. If you have the required permissions, the error response is
   * 			<code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>A name for the new image.</p>
   *          <p>Constraints: 3-128 alphanumeric characters, parentheses (()), square brackets ([]), spaces ( ), periods (.), slashes (/), dashes (-), single quotes ('), at-signs (@), or underscores(_)</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A description for the new image.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Indicates whether or not the instance should be automatically rebooted before creating
   *        the image. Specify one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>true</code> - The instance is not rebooted before creating the image. This
   *            creates crash-consistent snapshots that include only the data that has been written
   *            to the volumes at the time the snapshots are created. Buffered data and data in
   *            memory that has not yet been written to the volumes is not included in the snapshots.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>false</code> - The instance is rebooted before creating the image. This
   *            ensures that all buffered data and data in memory is written to the volumes before the
   *            snapshots are created.</p>
   *             </li>
   *          </ul>
   *          <p>Default: <code>false</code>
   *          </p>
   * @public
   */
  NoReboot?: boolean | undefined;

  /**
   * <p>The block device mappings.</p>
   *          <p>When using the CreateImage action:</p>
   *          <ul>
   *             <li>
   *                <p>You can't change the volume size using the VolumeSize parameter. If you want a
   *           different volume size, you must first change the volume size of the source
   *           instance.</p>
   *             </li>
   *             <li>
   *                <p>You can't modify the encryption status of existing volumes or snapshots. To create an
   *           AMI with volumes or snapshots that have a different encryption status (for example, where
   *           the source volume and snapshots are unencrypted, and you want to create an AMI with
   *           encrypted volumes or snapshots), use the <a>CopyImage</a> action.</p>
   *             </li>
   *             <li>
   *                <p>The only option that can be changed for existing mappings or snapshots is
   *             <code>DeleteOnTermination</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  BlockDeviceMappings?: BlockDeviceMapping[] | undefined;
}

/**
 * @public
 */
export interface CreateImageResult {
  /**
   * <p>The ID of the new AMI.</p>
   * @public
   */
  ImageId?: string | undefined;
}

/**
 * @public
 */
export interface CreateInstanceConnectEndpointRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *             and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *             Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the subnet in which to create the EC2 Instance Connect Endpoint.</p>
   * @public
   */
  SubnetId: string | undefined;

  /**
   * <p>One or more security groups to associate with the endpoint. If you don't specify a security group,
   *             the default security group for your VPC will be associated with the endpoint.</p>
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * <p>Indicates whether the client IP address is preserved as the source. The following are the possible values.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>true</code> - Use the client IP address as the source.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>false</code> - Use the network interface IP address as the source.</p>
   *             </li>
   *          </ul>
   *          <p>Default: <code>false</code>
   *          </p>
   * @public
   */
  PreserveClientIp?: boolean | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The tags to apply to the EC2 Instance Connect Endpoint during creation.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;
}

/**
 * @public
 * @enum
 */
export const Ec2InstanceConnectEndpointState = {
  create_complete: "create-complete",
  create_failed: "create-failed",
  create_in_progress: "create-in-progress",
  delete_complete: "delete-complete",
  delete_failed: "delete-failed",
  delete_in_progress: "delete-in-progress",
} as const;

/**
 * @public
 */
export type Ec2InstanceConnectEndpointState =
  (typeof Ec2InstanceConnectEndpointState)[keyof typeof Ec2InstanceConnectEndpointState];

/**
 * <p>The EC2 Instance Connect Endpoint.</p>
 * @public
 */
export interface Ec2InstanceConnectEndpoint {
  /**
   * <p>The ID of the Amazon Web Services account that created the EC2 Instance Connect Endpoint.</p>
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * <p>The ID of the EC2 Instance Connect Endpoint.</p>
   * @public
   */
  InstanceConnectEndpointId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the EC2 Instance Connect Endpoint.</p>
   * @public
   */
  InstanceConnectEndpointArn?: string | undefined;

  /**
   * <p>The current state of the EC2 Instance Connect Endpoint.</p>
   * @public
   */
  State?: Ec2InstanceConnectEndpointState | undefined;

  /**
   * <p>The message for the current state of the EC2 Instance Connect Endpoint.
   *         Can include a failure message.</p>
   * @public
   */
  StateMessage?: string | undefined;

  /**
   * <p>The DNS name of the EC2 Instance Connect Endpoint.</p>
   * @public
   */
  DnsName?: string | undefined;

  /**
   * <p></p>
   * @public
   */
  FipsDnsName?: string | undefined;

  /**
   * <p>The ID of the elastic network interface that Amazon EC2 automatically created when creating the EC2
   *             Instance Connect Endpoint.</p>
   * @public
   */
  NetworkInterfaceIds?: string[] | undefined;

  /**
   * <p>The ID of the VPC in which the EC2 Instance Connect Endpoint was created.</p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>The Availability Zone of the EC2 Instance Connect Endpoint.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>The date and time that the EC2 Instance Connect Endpoint was created.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The ID of the subnet in which the EC2 Instance Connect Endpoint was created.</p>
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * <p>Indicates whether your client's IP address is preserved as the source. The value is <code>true</code> or <code>false</code>.</p>
   *          <ul>
   *             <li>
   *                <p>If <code>true</code>, your client's IP address is used when you connect to a resource.</p>
   *             </li>
   *             <li>
   *                <p>If <code>false</code>, the elastic network interface IP address is used when you connect to a resource.</p>
   *             </li>
   *          </ul>
   *          <p>Default: <code>true</code>
   *          </p>
   * @public
   */
  PreserveClientIp?: boolean | undefined;

  /**
   * <p>The security groups associated with the endpoint. If you didn't specify a security group,
   *             the default security group for your VPC is associated with the endpoint.</p>
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * <p>The tags assigned to the EC2 Instance Connect Endpoint.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateInstanceConnectEndpointResult {
  /**
   * <p>Information about the EC2 Instance Connect Endpoint.</p>
   * @public
   */
  InstanceConnectEndpoint?: Ec2InstanceConnectEndpoint | undefined;

  /**
   * <p>Unique, case-sensitive idempotency token provided by the client in the the request.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * <p>The start day and time and the end day and time of the time range, in UTC.</p>
 * @public
 */
export interface InstanceEventWindowTimeRangeRequest {
  /**
   * <p>The day on which the time range begins.</p>
   * @public
   */
  StartWeekDay?: WeekDay | undefined;

  /**
   * <p>The hour when the time range begins.</p>
   * @public
   */
  StartHour?: number | undefined;

  /**
   * <p>The day on which the time range ends.</p>
   * @public
   */
  EndWeekDay?: WeekDay | undefined;

  /**
   * <p>The hour when the time range ends.</p>
   * @public
   */
  EndHour?: number | undefined;
}

/**
 * @public
 */
export interface CreateInstanceEventWindowRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The name of the event window.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The time range for the event window. If you specify a time range, you can't specify a cron
   *          expression.</p>
   * @public
   */
  TimeRanges?: InstanceEventWindowTimeRangeRequest[] | undefined;

  /**
   * <p>The cron expression for the event window, for example, <code>* 0-4,20-23 * * 1,5</code>. If
   *          you specify a cron expression, you can't specify a time range.</p>
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
   *             <code>0-4,20-23</code>.</p>
   *             </li>
   *             <li>
   *                <p>Each hour range must be >= 2 hours, for example, <code>0-2</code> or
   *             <code>20-23</code>.</p>
   *             </li>
   *             <li>
   *                <p>The event window must be >= 4 hours. The combined total time ranges in the event
   *                window must be >= 4 hours.</p>
   *             </li>
   *          </ul>
   *          <p>For more information about cron expressions, see <a href="https://en.wikipedia.org/wiki/Cron">cron</a> on the <i>Wikipedia
   *             website</i>.</p>
   * @public
   */
  CronExpression?: string | undefined;

  /**
   * <p>The tags to apply to the event window.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;
}

/**
 * @public
 */
export interface CreateInstanceEventWindowResult {
  /**
   * <p>Information about the event window.</p>
   * @public
   */
  InstanceEventWindow?: InstanceEventWindow | undefined;
}

/**
 * @public
 * @enum
 */
export const ContainerFormat = {
  ova: "ova",
} as const;

/**
 * @public
 */
export type ContainerFormat = (typeof ContainerFormat)[keyof typeof ContainerFormat];

/**
 * @public
 * @enum
 */
export const DiskImageFormat = {
  RAW: "RAW",
  VHD: "VHD",
  VMDK: "VMDK",
} as const;

/**
 * @public
 */
export type DiskImageFormat = (typeof DiskImageFormat)[keyof typeof DiskImageFormat];

/**
 * <p>Describes an export instance task.</p>
 * @public
 */
export interface ExportToS3TaskSpecification {
  /**
   * <p>The format for the exported image.</p>
   * @public
   */
  DiskImageFormat?: DiskImageFormat | undefined;

  /**
   * <p>The container format used to combine disk images with metadata (such as OVF). If absent, only the disk image is
   *    exported.</p>
   * @public
   */
  ContainerFormat?: ContainerFormat | undefined;

  /**
   * <p>The Amazon S3 bucket for the destination image. The destination bucket must exist and have
   *    an access control list (ACL) attached that specifies the Region-specific canonical account ID for
   *    the <code>Grantee</code>. For more information about the ACL to your S3 bucket, see <a href="https://docs.aws.amazon.com/vm-import/latest/userguide/vmexport.html#vmexport-prerequisites">Prerequisites</a> in the VM Import/Export User Guide.</p>
   * @public
   */
  S3Bucket?: string | undefined;

  /**
   * <p>The image is written to a single object in the Amazon S3 bucket at the S3 key s3prefix +
   *    exportTaskId + '.' + diskImageFormat.</p>
   * @public
   */
  S3Prefix?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ExportEnvironment = {
  citrix: "citrix",
  microsoft: "microsoft",
  vmware: "vmware",
} as const;

/**
 * @public
 */
export type ExportEnvironment = (typeof ExportEnvironment)[keyof typeof ExportEnvironment];

/**
 * @public
 */
export interface CreateInstanceExportTaskRequest {
  /**
   * <p>The tags to apply to the export instance task during creation.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * <p>A description for the conversion task or the resource being exported. The maximum length is 255 characters.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The ID of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The target virtualization environment.</p>
   * @public
   */
  TargetEnvironment: ExportEnvironment | undefined;

  /**
   * <p>The format and location for an export instance task.</p>
   * @public
   */
  ExportToS3Task: ExportToS3TaskSpecification | undefined;
}

/**
 * <p>Describes the format and location for the export task.</p>
 * @public
 */
export interface ExportToS3Task {
  /**
   * <p>The container format used to combine disk images with metadata (such as OVF). If absent, only the disk image is
   *    exported.</p>
   * @public
   */
  ContainerFormat?: ContainerFormat | undefined;

  /**
   * <p>The format for the exported image.</p>
   * @public
   */
  DiskImageFormat?: DiskImageFormat | undefined;

  /**
   * <p>The Amazon S3 bucket for the destination image. The destination bucket must exist and have
   *    an access control list (ACL) attached that specifies the Region-specific canonical account ID for
   *    the <code>Grantee</code>. For more information about the ACL to your S3 bucket, see <a href="https://docs.aws.amazon.com/vm-import/latest/userguide/vmexport.html#vmexport-prerequisites">Prerequisites</a> in the VM Import/Export User Guide.</p>
   * @public
   */
  S3Bucket?: string | undefined;

  /**
   * <p>The encryption key for your S3 bucket.</p>
   * @public
   */
  S3Key?: string | undefined;
}

/**
 * <p>Describes an instance to export.</p>
 * @public
 */
export interface InstanceExportDetails {
  /**
   * <p>The ID of the resource being exported.</p>
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * <p>The target virtualization environment.</p>
   * @public
   */
  TargetEnvironment?: ExportEnvironment | undefined;
}

/**
 * @public
 * @enum
 */
export const ExportTaskState = {
  active: "active",
  cancelled: "cancelled",
  cancelling: "cancelling",
  completed: "completed",
} as const;

/**
 * @public
 */
export type ExportTaskState = (typeof ExportTaskState)[keyof typeof ExportTaskState];

/**
 * <p>Describes an export instance task.</p>
 * @public
 */
export interface ExportTask {
  /**
   * <p>A description of the resource being exported.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The ID of the export task.</p>
   * @public
   */
  ExportTaskId?: string | undefined;

  /**
   * <p>Information about the export task.</p>
   * @public
   */
  ExportToS3Task?: ExportToS3Task | undefined;

  /**
   * <p>Information about the instance to export.</p>
   * @public
   */
  InstanceExportDetails?: InstanceExportDetails | undefined;

  /**
   * <p>The state of the export task.</p>
   * @public
   */
  State?: ExportTaskState | undefined;

  /**
   * <p>The status message related to the export task.</p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>The tags for the export task.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateInstanceExportTaskResult {
  /**
   * <p>Information about the export instance task.</p>
   * @public
   */
  ExportTask?: ExportTask | undefined;
}

/**
 * @public
 */
export interface CreateInternetGatewayRequest {
  /**
   * <p>The tags to assign to the internet gateway.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * <p>Describes an internet gateway.</p>
 * @public
 */
export interface InternetGateway {
  /**
   * <p>Any VPCs attached to the internet gateway.</p>
   * @public
   */
  Attachments?: InternetGatewayAttachment[] | undefined;

  /**
   * <p>The ID of the internet gateway.</p>
   * @public
   */
  InternetGatewayId?: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services account that owns the internet gateway.</p>
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * <p>Any tags assigned to the internet gateway.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateInternetGatewayResult {
  /**
   * <p>Information about the internet gateway.</p>
   * @public
   */
  InternetGateway?: InternetGateway | undefined;
}

/**
 * @public
 * @enum
 */
export const IpamTier = {
  advanced: "advanced",
  free: "free",
} as const;

/**
 * @public
 */
export type IpamTier = (typeof IpamTier)[keyof typeof IpamTier];

/**
 * @public
 */
export interface CreateIpamRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>A description for the IPAM.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The operating Regions for the IPAM. Operating Regions are Amazon Web Services Regions where the IPAM is allowed to manage IP address CIDRs. IPAM only discovers and monitors resources in the Amazon Web Services Regions you select as operating Regions. </p>
   *          <p>For more information about operating Regions, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/create-ipam.html">Create an IPAM</a> in the <i>Amazon VPC IPAM User Guide</i>.
   *       </p>
   * @public
   */
  OperatingRegions?: AddIpamOperatingRegion[] | undefined;

  /**
   * <p>The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html">Ensuring idempotency</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>IPAM is offered in a Free Tier and an Advanced Tier. For more information about the features available in each tier and the costs associated with the tiers, see <a href="http://aws.amazon.com/vpc/pricing/">Amazon VPC pricing > IPAM tab</a>.</p>
   * @public
   */
  Tier?: IpamTier | undefined;

  /**
   * <p>Enable this option to use your own GUA ranges as private IPv6 addresses. This option is disabled by default.</p>
   * @public
   */
  EnablePrivateGua?: boolean | undefined;
}

/**
 * <p>The operating Regions for an IPAM. Operating Regions are Amazon Web Services Regions where the IPAM is allowed to manage IP address CIDRs. IPAM only discovers and monitors resources in the Amazon Web Services Regions you select as operating Regions.</p>
 *          <p>For more information about operating Regions, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/create-ipam.html">Create an IPAM</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
 * @public
 */
export interface IpamOperatingRegion {
  /**
   * <p>The name of the operating Region.</p>
   * @public
   */
  RegionName?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const IpamState = {
  create_complete: "create-complete",
  create_failed: "create-failed",
  create_in_progress: "create-in-progress",
  delete_complete: "delete-complete",
  delete_failed: "delete-failed",
  delete_in_progress: "delete-in-progress",
  isolate_complete: "isolate-complete",
  isolate_in_progress: "isolate-in-progress",
  modify_complete: "modify-complete",
  modify_failed: "modify-failed",
  modify_in_progress: "modify-in-progress",
  restore_in_progress: "restore-in-progress",
} as const;

/**
 * @public
 */
export type IpamState = (typeof IpamState)[keyof typeof IpamState];

/**
 * <p>IPAM is a VPC feature that you can use to automate your IP address management workflows including assigning, tracking, troubleshooting, and auditing IP addresses across Amazon Web Services Regions and accounts throughout your Amazon Web Services Organization. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/what-is-it-ipam.html">What is IPAM?</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
 * @public
 */
export interface Ipam {
  /**
   * <p>The Amazon Web Services account ID of the owner of the IPAM.</p>
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * <p>The ID of the IPAM.</p>
   * @public
   */
  IpamId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IPAM.</p>
   * @public
   */
  IpamArn?: string | undefined;

  /**
   * <p>The Amazon Web Services Region of the IPAM.</p>
   * @public
   */
  IpamRegion?: string | undefined;

  /**
   * <p>The ID of the IPAM's default public scope.</p>
   * @public
   */
  PublicDefaultScopeId?: string | undefined;

  /**
   * <p>The ID of the IPAM's default private scope.</p>
   * @public
   */
  PrivateDefaultScopeId?: string | undefined;

  /**
   * <p>The number of scopes in the IPAM. The scope quota is 5. For more information on quotas, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/quotas-ipam.html">Quotas in IPAM</a> in the <i>Amazon VPC IPAM User Guide</i>.
   *       </p>
   * @public
   */
  ScopeCount?: number | undefined;

  /**
   * <p>The description for the IPAM.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The operating Regions for an IPAM. Operating Regions are Amazon Web Services Regions where the IPAM is allowed to manage IP address CIDRs. IPAM only discovers and monitors resources in the Amazon Web Services Regions you select as operating Regions.</p>
   *          <p>For more information about operating Regions, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/create-ipam.html">Create an IPAM</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
   * @public
   */
  OperatingRegions?: IpamOperatingRegion[] | undefined;

  /**
   * <p>The state of the IPAM.</p>
   * @public
   */
  State?: IpamState | undefined;

  /**
   * <p>The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The IPAM's default resource discovery ID.</p>
   * @public
   */
  DefaultResourceDiscoveryId?: string | undefined;

  /**
   * <p>The IPAM's default resource discovery association ID.</p>
   * @public
   */
  DefaultResourceDiscoveryAssociationId?: string | undefined;

  /**
   * <p>The IPAM's resource discovery association count.</p>
   * @public
   */
  ResourceDiscoveryAssociationCount?: number | undefined;

  /**
   * <p>The state message.</p>
   * @public
   */
  StateMessage?: string | undefined;

  /**
   * <p>IPAM is offered in a Free Tier and an Advanced Tier. For more information about the features available in each tier and the costs associated with the tiers, see <a href="http://aws.amazon.com/vpc/pricing/">Amazon VPC pricing > IPAM tab</a>.</p>
   * @public
   */
  Tier?: IpamTier | undefined;

  /**
   * <p>Enable this option to use your own GUA ranges as private IPv6 addresses. This option is disabled by default.</p>
   * @public
   */
  EnablePrivateGua?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateIpamResult {
  /**
   * <p>Information about the IPAM created.</p>
   * @public
   */
  Ipam?: Ipam | undefined;
}

/**
 * @public
 */
export interface CreateIpamExternalResourceVerificationTokenRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the IPAM that will create the token.</p>
   * @public
   */
  IpamId: string | undefined;

  /**
   * <p>Token tags.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html">Ensuring idempotency</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const IpamExternalResourceVerificationTokenState = {
  CREATE_COMPLETE: "create-complete",
  CREATE_FAILED: "create-failed",
  CREATE_IN_PROGRESS: "create-in-progress",
  DELETE_COMPLETE: "delete-complete",
  DELETE_FAILED: "delete-failed",
  DELETE_IN_PROGRESS: "delete-in-progress",
} as const;

/**
 * @public
 */
export type IpamExternalResourceVerificationTokenState =
  (typeof IpamExternalResourceVerificationTokenState)[keyof typeof IpamExternalResourceVerificationTokenState];

/**
 * @public
 * @enum
 */
export const TokenState = {
  expired: "expired",
  valid: "valid",
} as const;

/**
 * @public
 */
export type TokenState = (typeof TokenState)[keyof typeof TokenState];

/**
 * <p>A verification token is an Amazon Web Services-generated random value that you can use to prove ownership of an external resource. For example, you can use a verification token to validate that you control a public IP address range when you bring an IP address range to Amazon Web Services (BYOIP).
 * </p>
 * @public
 */
export interface IpamExternalResourceVerificationToken {
  /**
   * <p>The ID of the token.</p>
   * @public
   */
  IpamExternalResourceVerificationTokenId?: string | undefined;

  /**
   * <p>Token ARN.</p>
   * @public
   */
  IpamExternalResourceVerificationTokenArn?: string | undefined;

  /**
   * <p>The ID of the IPAM that created the token.</p>
   * @public
   */
  IpamId?: string | undefined;

  /**
   * <p>ARN of the IPAM that created the token.</p>
   * @public
   */
  IpamArn?: string | undefined;

  /**
   * <p>Region of the IPAM that created the token.</p>
   * @public
   */
  IpamRegion?: string | undefined;

  /**
   * <p>Token value.</p>
   * @public
   */
  TokenValue?: string | undefined;

  /**
   * <p>Token name.</p>
   * @public
   */
  TokenName?: string | undefined;

  /**
   * <p>Token expiration.</p>
   * @public
   */
  NotAfter?: Date | undefined;

  /**
   * <p>Token status.</p>
   * @public
   */
  Status?: TokenState | undefined;

  /**
   * <p>Token tags.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>Token state.</p>
   * @public
   */
  State?: IpamExternalResourceVerificationTokenState | undefined;
}

/**
 * @public
 */
export interface CreateIpamExternalResourceVerificationTokenResult {
  /**
   * <p>The verification token.</p>
   * @public
   */
  IpamExternalResourceVerificationToken?: IpamExternalResourceVerificationToken | undefined;
}

/**
 * <p>A tag on an IPAM resource.</p>
 * @public
 */
export interface RequestIpamResourceTag {
  /**
   * <p>The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   * @public
   */
  Key?: string | undefined;

  /**
   * <p>The value for the tag.</p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const IpamPoolAwsService = {
  ec2: "ec2",
} as const;

/**
 * @public
 */
export type IpamPoolAwsService = (typeof IpamPoolAwsService)[keyof typeof IpamPoolAwsService];

/**
 * @public
 * @enum
 */
export const IpamPoolPublicIpSource = {
  amazon: "amazon",
  byoip: "byoip",
} as const;

/**
 * @public
 */
export type IpamPoolPublicIpSource = (typeof IpamPoolPublicIpSource)[keyof typeof IpamPoolPublicIpSource];

/**
 * @public
 * @enum
 */
export const IpamPoolSourceResourceType = {
  vpc: "vpc",
} as const;

/**
 * @public
 */
export type IpamPoolSourceResourceType = (typeof IpamPoolSourceResourceType)[keyof typeof IpamPoolSourceResourceType];

/**
 * <p>The resource used to provision CIDRs to a resource planning pool.</p>
 * @public
 */
export interface IpamPoolSourceResourceRequest {
  /**
   * <p>The source resource ID.</p>
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * <p>The source resource type.</p>
   * @public
   */
  ResourceType?: IpamPoolSourceResourceType | undefined;

  /**
   * <p>The source resource Region.</p>
   * @public
   */
  ResourceRegion?: string | undefined;

  /**
   * <p>The source resource owner.</p>
   * @public
   */
  ResourceOwner?: string | undefined;
}

/**
 * @public
 */
export interface CreateIpamPoolRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the scope in which you would like to create the IPAM pool.</p>
   * @public
   */
  IpamScopeId: string | undefined;

  /**
   * <p>The locale for the pool should be one of the following:</p>
   *          <ul>
   *             <li>
   *                <p>An Amazon Web Services Region where you want this IPAM pool to be available for allocations.</p>
   *             </li>
   *             <li>
   *                <p>The network border group for an Amazon Web Services Local Zone where you want this IPAM pool to be available for allocations (<a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-byoip.html#byoip-zone-avail">supported Local Zones</a>). This option is only available for IPAM IPv4 pools in the public scope.</p>
   *             </li>
   *          </ul>
   *          <p>Possible values: Any Amazon Web Services Region or supported Amazon Web Services Local Zone. Default is <code>none</code> and means any locale.</p>
   * @public
   */
  Locale?: string | undefined;

  /**
   * <p>The ID of the source IPAM pool. Use this option to create a pool within an existing pool. Note that the CIDR you provision for the pool within the source pool must be available in the source pool's CIDR range.</p>
   * @public
   */
  SourceIpamPoolId?: string | undefined;

  /**
   * <p>A description for the IPAM pool.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The IP protocol assigned to this IPAM pool. You must choose either IPv4 or IPv6 protocol for a pool.</p>
   * @public
   */
  AddressFamily: AddressFamily | undefined;

  /**
   * <p>If selected, IPAM will continuously look for resources within the CIDR range of this pool
   *          and automatically import them as allocations into your IPAM. The CIDRs that will be allocated for
   *          these resources must not already be allocated to other resources in order for the import to succeed. IPAM will import
   *          a CIDR regardless of its compliance with the pool's allocation rules, so a resource might be imported and subsequently
   *          marked as noncompliant. If IPAM discovers multiple CIDRs that overlap, IPAM will import the largest CIDR only. If IPAM
   *          discovers multiple CIDRs with matching CIDRs, IPAM will randomly import one of them only.
   *       </p>
   *          <p>A locale must be set on the pool for this feature to work.</p>
   * @public
   */
  AutoImport?: boolean | undefined;

  /**
   * <p>Determines if the pool is publicly advertisable. The request can only contain <code>PubliclyAdvertisable</code> if <code>AddressFamily</code> is <code>ipv6</code> and <code>PublicIpSource</code> is <code>byoip</code>.</p>
   * @public
   */
  PubliclyAdvertisable?: boolean | undefined;

  /**
   * <p>The minimum netmask length required for CIDR allocations in this IPAM pool to be compliant. The minimum netmask length must be
   *          less than the maximum netmask length. Possible netmask lengths for IPv4 addresses are 0 - 32. Possible netmask lengths for IPv6 addresses are  0 - 128.</p>
   * @public
   */
  AllocationMinNetmaskLength?: number | undefined;

  /**
   * <p>The maximum netmask length possible for CIDR allocations in this IPAM pool to be compliant. The maximum netmask length must be
   *          greater than the minimum netmask length. Possible netmask lengths for IPv4 addresses are 0 - 32. Possible netmask lengths for IPv6 addresses are  0 - 128.</p>
   * @public
   */
  AllocationMaxNetmaskLength?: number | undefined;

  /**
   * <p>The default netmask length for allocations added to this pool. If, for example, the CIDR assigned to this pool is 10.0.0.0/8 and you enter 16 here,
   *          new allocations will default to 10.0.0.0/16.</p>
   * @public
   */
  AllocationDefaultNetmaskLength?: number | undefined;

  /**
   * <p>Tags that are required for resources that use CIDRs from this IPAM pool. Resources that do not have these tags will not be allowed to allocate space from the pool. If the resources have their tags changed after they have allocated space or if the allocation tagging requirements are changed on the pool, the resource may be marked as noncompliant.</p>
   * @public
   */
  AllocationResourceTags?: RequestIpamResourceTag[] | undefined;

  /**
   * <p>The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html">Ensuring idempotency</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>Limits which service in Amazon Web Services that the pool can be used in. "ec2", for example, allows users to use space for Elastic IP addresses and VPCs.</p>
   * @public
   */
  AwsService?: IpamPoolAwsService | undefined;

  /**
   * <p>The IP address source for pools in the public scope. Only used for provisioning IP address CIDRs to pools in the public scope. Default is <code>byoip</code>. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/intro-create-ipv6-pools.html">Create IPv6 pools</a> in the <i>Amazon VPC IPAM User Guide</i>.
   *          By default, you can add only one Amazon-provided IPv6 CIDR block to a top-level IPv6 pool if PublicIpSource is <code>amazon</code>. For information on increasing the default limit, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/quotas-ipam.html"> Quotas for your IPAM</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
   * @public
   */
  PublicIpSource?: IpamPoolPublicIpSource | undefined;

  /**
   * <p>The resource used to provision CIDRs to a resource planning pool.</p>
   * @public
   */
  SourceResource?: IpamPoolSourceResourceRequest | undefined;
}

/**
 * <p>The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
 *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
 * @public
 */
export interface IpamResourceTag {
  /**
   * <p>The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   * @public
   */
  Key?: string | undefined;

  /**
   * <p>The value of the tag.</p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const IpamScopeType = {
  private: "private",
  public: "public",
} as const;

/**
 * @public
 */
export type IpamScopeType = (typeof IpamScopeType)[keyof typeof IpamScopeType];

/**
 * <p>The resource used to provision CIDRs to a resource planning pool.</p>
 * @public
 */
export interface IpamPoolSourceResource {
  /**
   * <p>The source resource ID.</p>
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * <p>The source resource type.</p>
   * @public
   */
  ResourceType?: IpamPoolSourceResourceType | undefined;

  /**
   * <p>The source resource Region.</p>
   * @public
   */
  ResourceRegion?: string | undefined;

  /**
   * <p>The source resource owner.</p>
   * @public
   */
  ResourceOwner?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const IpamPoolState = {
  create_complete: "create-complete",
  create_failed: "create-failed",
  create_in_progress: "create-in-progress",
  delete_complete: "delete-complete",
  delete_failed: "delete-failed",
  delete_in_progress: "delete-in-progress",
  isolate_complete: "isolate-complete",
  isolate_in_progress: "isolate-in-progress",
  modify_complete: "modify-complete",
  modify_failed: "modify-failed",
  modify_in_progress: "modify-in-progress",
  restore_in_progress: "restore-in-progress",
} as const;

/**
 * @public
 */
export type IpamPoolState = (typeof IpamPoolState)[keyof typeof IpamPoolState];

/**
 * <p>In IPAM, a pool is a collection of contiguous IP addresses CIDRs. Pools enable you to organize your IP addresses according to your routing and security needs. For example, if you have separate routing and security needs for development and production applications, you can create a pool for each.</p>
 * @public
 */
export interface IpamPool {
  /**
   * <p>The Amazon Web Services account ID of the owner of the IPAM pool.</p>
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * <p>The ID of the IPAM pool.</p>
   * @public
   */
  IpamPoolId?: string | undefined;

  /**
   * <p>The ID of the source IPAM pool. You can use this option to create an IPAM pool within an existing source pool.</p>
   * @public
   */
  SourceIpamPoolId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IPAM pool.</p>
   * @public
   */
  IpamPoolArn?: string | undefined;

  /**
   * <p>The ARN of the scope of the IPAM pool.</p>
   * @public
   */
  IpamScopeArn?: string | undefined;

  /**
   * <p>In IPAM, a scope is the highest-level container within IPAM. An IPAM contains two default scopes. Each scope represents the IP space for a single network. The private scope is intended for all private IP address space. The public scope is intended for all public IP address space. Scopes enable you to reuse IP addresses across multiple unconnected networks without causing IP address overlap or conflict.</p>
   * @public
   */
  IpamScopeType?: IpamScopeType | undefined;

  /**
   * <p>The ARN of the IPAM.</p>
   * @public
   */
  IpamArn?: string | undefined;

  /**
   * <p>The Amazon Web Services Region of the IPAM pool.</p>
   * @public
   */
  IpamRegion?: string | undefined;

  /**
   * <p>The locale of the IPAM pool.</p>
   *          <p>The locale for the pool should be one of the following:</p>
   *          <ul>
   *             <li>
   *                <p>An Amazon Web Services Region where you want this IPAM pool to be available for allocations.</p>
   *             </li>
   *             <li>
   *                <p>The network border group for an Amazon Web Services Local Zone where you want this IPAM pool to be available for allocations (<a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-byoip.html#byoip-zone-avail">supported Local Zones</a>). This option is only available for IPAM IPv4 pools in the public scope.</p>
   *             </li>
   *          </ul>
   *          <p>If you choose an Amazon Web Services Region for locale that has not been configured as an operating Region for the IPAM, you'll get an error.</p>
   * @public
   */
  Locale?: string | undefined;

  /**
   * <p>The depth of pools in your IPAM pool. The pool depth quota is 10. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/quotas-ipam.html">Quotas in IPAM</a> in the <i>Amazon VPC IPAM User Guide</i>.
   *       </p>
   * @public
   */
  PoolDepth?: number | undefined;

  /**
   * <p>The state of the IPAM pool.</p>
   * @public
   */
  State?: IpamPoolState | undefined;

  /**
   * <p>The state message.</p>
   * @public
   */
  StateMessage?: string | undefined;

  /**
   * <p>The description of the IPAM pool.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>If selected, IPAM will continuously look for resources within the CIDR range of this pool
   *          and automatically import them as allocations into your IPAM. The CIDRs that will be allocated for
   *          these resources must not already be allocated to other resources in order for the import to succeed. IPAM will import
   *          a CIDR regardless of its compliance with the pool's allocation rules, so a resource might be imported and subsequently
   *          marked as noncompliant. If IPAM discovers multiple CIDRs that overlap, IPAM will import the largest CIDR only. If IPAM
   *          discovers multiple CIDRs with matching CIDRs, IPAM will randomly import one of them only.
   *       </p>
   *          <p>A locale must be set on the pool for this feature to work.</p>
   * @public
   */
  AutoImport?: boolean | undefined;

  /**
   * <p>Determines if a pool is publicly advertisable. This option is not available for pools with AddressFamily set to <code>ipv4</code>.</p>
   * @public
   */
  PubliclyAdvertisable?: boolean | undefined;

  /**
   * <p>The address family of the pool.</p>
   * @public
   */
  AddressFamily?: AddressFamily | undefined;

  /**
   * <p>The minimum netmask length required for CIDR allocations in this IPAM pool to be compliant. The minimum netmask length must be less than the maximum netmask length. Possible netmask lengths for IPv4 addresses are 0 - 32. Possible netmask lengths for IPv6 addresses are  0 - 128.</p>
   * @public
   */
  AllocationMinNetmaskLength?: number | undefined;

  /**
   * <p>The maximum netmask length possible for CIDR allocations in this IPAM pool to be compliant. The maximum netmask length must be greater than the minimum netmask length. Possible netmask lengths for IPv4 addresses are 0 - 32. Possible netmask lengths for IPv6 addresses are  0 - 128.</p>
   * @public
   */
  AllocationMaxNetmaskLength?: number | undefined;

  /**
   * <p>The default netmask length for allocations added to this pool. If, for example, the CIDR assigned to this pool is 10.0.0.0/8 and
   *          you enter 16 here, new allocations will default to 10.0.0.0/16.</p>
   * @public
   */
  AllocationDefaultNetmaskLength?: number | undefined;

  /**
   * <p>Tags that are required for resources that use CIDRs from this IPAM pool. Resources that do not have these tags will not be allowed to allocate space from the pool. If the resources have their tags changed after they have allocated space or if the allocation tagging requirements are changed on the pool, the resource may be marked as noncompliant.</p>
   * @public
   */
  AllocationResourceTags?: IpamResourceTag[] | undefined;

  /**
   * <p>The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>Limits which service in Amazon Web Services that the pool can be used in. "ec2", for example, allows users to use space for Elastic IP addresses and VPCs.</p>
   * @public
   */
  AwsService?: IpamPoolAwsService | undefined;

  /**
   * <p>The IP address source for pools in the public scope. Only used for provisioning IP address CIDRs to pools in the public scope. Default is <code>BYOIP</code>. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/intro-create-ipv6-pools.html">Create IPv6 pools</a> in the <i>Amazon VPC IPAM User Guide</i>.
   *          By default, you can add only one Amazon-provided IPv6 CIDR block to a top-level IPv6 pool. For information on increasing the default limit, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/quotas-ipam.html">Quotas for your IPAM</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
   * @public
   */
  PublicIpSource?: IpamPoolPublicIpSource | undefined;

  /**
   * <p>The resource used to provision CIDRs to a resource planning pool.</p>
   * @public
   */
  SourceResource?: IpamPoolSourceResource | undefined;
}

/**
 * @public
 */
export interface CreateIpamPoolResult {
  /**
   * <p>Information about the IPAM pool created.</p>
   * @public
   */
  IpamPool?: IpamPool | undefined;
}

/**
 * @public
 */
export interface CreateIpamResourceDiscoveryRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>A description for the IPAM resource discovery.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Operating Regions for the IPAM resource discovery. Operating Regions are Amazon Web Services Regions where the IPAM is allowed to manage IP address CIDRs. IPAM only discovers and monitors resources in the Amazon Web Services Regions you select as operating Regions.</p>
   * @public
   */
  OperatingRegions?: AddIpamOperatingRegion[] | undefined;

  /**
   * <p>Tag specifications for the IPAM resource discovery.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * <p>A client token for the IPAM resource discovery.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const IpamResourceDiscoveryState = {
  CREATE_COMPLETE: "create-complete",
  CREATE_FAILED: "create-failed",
  CREATE_IN_PROGRESS: "create-in-progress",
  DELETE_COMPLETE: "delete-complete",
  DELETE_FAILED: "delete-failed",
  DELETE_IN_PROGRESS: "delete-in-progress",
  ISOLATE_COMPLETE: "isolate-complete",
  ISOLATE_IN_PROGRESS: "isolate-in-progress",
  MODIFY_COMPLETE: "modify-complete",
  MODIFY_FAILED: "modify-failed",
  MODIFY_IN_PROGRESS: "modify-in-progress",
  RESTORE_IN_PROGRESS: "restore-in-progress",
} as const;

/**
 * @public
 */
export type IpamResourceDiscoveryState = (typeof IpamResourceDiscoveryState)[keyof typeof IpamResourceDiscoveryState];

/**
 * <p>A resource discovery is an IPAM component that enables IPAM to manage and monitor resources that belong to the owning account.</p>
 * @public
 */
export interface IpamResourceDiscovery {
  /**
   * <p>The ID of the owner.</p>
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * <p>The resource discovery ID.</p>
   * @public
   */
  IpamResourceDiscoveryId?: string | undefined;

  /**
   * <p>The resource discovery Amazon Resource Name (ARN).</p>
   * @public
   */
  IpamResourceDiscoveryArn?: string | undefined;

  /**
   * <p>The resource discovery Region.</p>
   * @public
   */
  IpamResourceDiscoveryRegion?: string | undefined;

  /**
   * <p>The resource discovery description.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The operating Regions for the resource discovery. Operating Regions are Amazon Web Services Regions where the IPAM is allowed to manage IP address CIDRs. IPAM only discovers and monitors resources in the Amazon Web Services Regions you select as operating Regions.</p>
   * @public
   */
  OperatingRegions?: IpamOperatingRegion[] | undefined;

  /**
   * <p>Defines if the resource discovery is the default. The default resource discovery is the resource discovery automatically created when you create an IPAM.</p>
   * @public
   */
  IsDefault?: boolean | undefined;

  /**
   * <p>The lifecycle state of the resource discovery.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>create-in-progress</code> - Resource discovery is being created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>create-complete</code> - Resource discovery creation is complete.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>create-failed</code> - Resource discovery creation has failed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>modify-in-progress</code> - Resource discovery is being modified.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>modify-complete</code> - Resource discovery modification is complete.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>modify-failed</code> - Resource discovery modification has failed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>delete-in-progress</code> - Resource discovery is being deleted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>delete-complete</code> - Resource discovery deletion is complete.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>delete-failed</code> - Resource discovery deletion has failed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>isolate-in-progress</code> - Amazon Web Services account that created the resource discovery has been removed and the resource discovery is being isolated.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>isolate-complete</code> - Resource discovery isolation is complete.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>restore-in-progress</code> - Amazon Web Services account that created the resource discovery and was isolated has been restored.</p>
   *             </li>
   *          </ul>
   * @public
   */
  State?: IpamResourceDiscoveryState | undefined;

  /**
   * <p>A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key and an optional value. You can use tags to search and filter your resources or track your Amazon Web Services costs.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateIpamResourceDiscoveryResult {
  /**
   * <p>An IPAM resource discovery.</p>
   * @public
   */
  IpamResourceDiscovery?: IpamResourceDiscovery | undefined;
}

/**
 * @public
 */
export interface CreateIpamScopeRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the IPAM for which you're creating this scope.</p>
   * @public
   */
  IpamId: string | undefined;

  /**
   * <p>A description for the scope you're creating.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html">Ensuring idempotency</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const IpamScopeState = {
  create_complete: "create-complete",
  create_failed: "create-failed",
  create_in_progress: "create-in-progress",
  delete_complete: "delete-complete",
  delete_failed: "delete-failed",
  delete_in_progress: "delete-in-progress",
  isolate_complete: "isolate-complete",
  isolate_in_progress: "isolate-in-progress",
  modify_complete: "modify-complete",
  modify_failed: "modify-failed",
  modify_in_progress: "modify-in-progress",
  restore_in_progress: "restore-in-progress",
} as const;

/**
 * @public
 */
export type IpamScopeState = (typeof IpamScopeState)[keyof typeof IpamScopeState];

/**
 * <p>In IPAM, a scope is the highest-level container within IPAM. An IPAM contains two default scopes. Each scope represents the IP space for a single network. The private scope is intended for all private IP address space. The public scope is intended for all public IP address space. Scopes enable you to reuse IP addresses across multiple unconnected networks without causing IP address overlap or conflict.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/how-it-works-ipam.html">How IPAM works</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
 * @public
 */
export interface IpamScope {
  /**
   * <p>The Amazon Web Services account ID of the owner of the scope.</p>
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * <p>The ID of the scope.</p>
   * @public
   */
  IpamScopeId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the scope.</p>
   * @public
   */
  IpamScopeArn?: string | undefined;

  /**
   * <p>The ARN of the IPAM.</p>
   * @public
   */
  IpamArn?: string | undefined;

  /**
   * <p>The Amazon Web Services Region of the IPAM scope.</p>
   * @public
   */
  IpamRegion?: string | undefined;

  /**
   * <p>The type of the scope.</p>
   * @public
   */
  IpamScopeType?: IpamScopeType | undefined;

  /**
   * <p>Defines if the scope is the default scope or not.</p>
   * @public
   */
  IsDefault?: boolean | undefined;

  /**
   * <p>The description of the scope.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The number of pools in the scope.</p>
   * @public
   */
  PoolCount?: number | undefined;

  /**
   * <p>The state of the IPAM scope.</p>
   * @public
   */
  State?: IpamScopeState | undefined;

  /**
   * <p>The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateIpamScopeResult {
  /**
   * <p>Information about the created scope.</p>
   * @public
   */
  IpamScope?: IpamScope | undefined;
}

/**
 * @public
 * @enum
 */
export const KeyFormat = {
  pem: "pem",
  ppk: "ppk",
} as const;

/**
 * @public
 */
export type KeyFormat = (typeof KeyFormat)[keyof typeof KeyFormat];

/**
 * @public
 * @enum
 */
export const KeyType = {
  ed25519: "ed25519",
  rsa: "rsa",
} as const;

/**
 * @public
 */
export type KeyType = (typeof KeyType)[keyof typeof KeyType];

/**
 * @public
 */
export interface CreateKeyPairRequest {
  /**
   * <p>A unique name for the key pair.</p>
   *          <p>Constraints: Up to 255 ASCII characters</p>
   * @public
   */
  KeyName: string | undefined;

  /**
   * <p>The type of key pair. Note that ED25519 keys are not supported for Windows instances.</p>
   *          <p>Default: <code>rsa</code>
   *          </p>
   * @public
   */
  KeyType?: KeyType | undefined;

  /**
   * <p>The tags to apply to the new key pair.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * <p>The format of the key pair.</p>
   *          <p>Default: <code>pem</code>
   *          </p>
   * @public
   */
  KeyFormat?: KeyFormat | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * <p>Describes a key pair.</p>
 * @public
 */
export interface KeyPair {
  /**
   * <p>The ID of the key pair.</p>
   * @public
   */
  KeyPairId?: string | undefined;

  /**
   * <p>Any tags applied to the key pair.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The name of the key pair.</p>
   * @public
   */
  KeyName?: string | undefined;

  /**
   * <ul>
   *             <li>
   *                <p>For RSA key pairs, the key fingerprint is the SHA-1 digest of the DER encoded private key.</p>
   *             </li>
   *             <li>
   *                <p>For ED25519 key pairs, the key fingerprint is the base64-encoded SHA-256 digest, which is the default for OpenSSH, starting with OpenSSH 6.8.</p>
   *             </li>
   *          </ul>
   * @public
   */
  KeyFingerprint?: string | undefined;

  /**
   * <p>An unencrypted PEM encoded RSA or ED25519 private key.</p>
   * @public
   */
  KeyMaterial?: string | undefined;
}

/**
 * <p>The parameters for a block device for an EBS volume.</p>
 * @public
 */
export interface LaunchTemplateEbsBlockDeviceRequest {
  /**
   * <p>Indicates whether the EBS volume is encrypted. Encrypted volumes can only be attached
   *             to instances that support Amazon EBS encryption. If you are creating a volume from a
   *             snapshot, you can't specify an encryption value.</p>
   * @public
   */
  Encrypted?: boolean | undefined;

  /**
   * <p>Indicates whether the EBS volume is deleted on instance termination.</p>
   * @public
   */
  DeleteOnTermination?: boolean | undefined;

  /**
   * <p>The number of I/O operations per second (IOPS). For <code>gp3</code>,
   *             <code>io1</code>, and <code>io2</code> volumes, this represents the number of IOPS that
   *             are provisioned for the volume. For <code>gp2</code> volumes, this represents the
   *             baseline performance of the volume and the rate at which the volume accumulates I/O
   *             credits for bursting.</p>
   *          <p>The following are the supported values for each volume type:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>gp3</code>: 3,000 - 16,000 IOPS</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>io1</code>: 100 - 64,000 IOPS</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>io2</code>: 100 - 256,000 IOPS</p>
   *             </li>
   *          </ul>
   *          <p>For <code>io2</code> volumes, you can achieve up to 256,000 IOPS on
   * <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html#ec2-nitro-instances">instances
   * built on the Nitro System</a>. On other instances, you can achieve performance up to 32,000 IOPS.</p>
   *          <p>This parameter is supported for <code>io1</code>, <code>io2</code>, and <code>gp3</code> volumes only.</p>
   * @public
   */
  Iops?: number | undefined;

  /**
   * <p>Identifier (key ID, key alias, key ARN, or alias ARN) of the customer managed KMS key
   *             to use for EBS encryption.</p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>The ID of the snapshot.</p>
   * @public
   */
  SnapshotId?: string | undefined;

  /**
   * <p>The size of the volume, in GiBs. You must specify either a snapshot ID or a volume
   *             size. The following are the supported volumes sizes for each volume type:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>gp2</code> and <code>gp3</code>: 1 - 16,384 GiB</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>io1</code>: 4 - 16,384 GiB</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>io2</code>: 4 - 65,536 GiB</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>st1</code> and <code>sc1</code>: 125 - 16,384 GiB</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>standard</code>: 1 - 1024 GiB</p>
   *             </li>
   *          </ul>
   * @public
   */
  VolumeSize?: number | undefined;

  /**
   * <p>The volume type. For more information, see <a href="https://docs.aws.amazon.com/ebs/latest/userguide/ebs-volume-types.html">Amazon EBS volume types</a> in the
   *                 <i>Amazon EBS User Guide</i>.</p>
   * @public
   */
  VolumeType?: VolumeType | undefined;

  /**
   * <p>The throughput to provision for a <code>gp3</code> volume, with a maximum of 1,000
   *             MiB/s.</p>
   *          <p>Valid Range: Minimum value of 125. Maximum value of 1000.</p>
   * @public
   */
  Throughput?: number | undefined;
}

/**
 * <p>Describes a block device mapping.</p>
 * @public
 */
export interface LaunchTemplateBlockDeviceMappingRequest {
  /**
   * <p>The device name (for example, /dev/sdh or xvdh).</p>
   * @public
   */
  DeviceName?: string | undefined;

  /**
   * <p>The virtual device name (ephemeralN). Instance store volumes are numbered starting
   *             from 0. An instance type with 2 available instance store volumes can specify mappings
   *             for ephemeral0 and ephemeral1. The number of available instance store volumes depends on
   *             the instance type. After you connect to the instance, you must mount the volume.</p>
   * @public
   */
  VirtualName?: string | undefined;

  /**
   * <p>Parameters used to automatically set up EBS volumes when the instance is
   *             launched.</p>
   * @public
   */
  Ebs?: LaunchTemplateEbsBlockDeviceRequest | undefined;

  /**
   * <p>To omit the device from the block device mapping, specify an empty string.</p>
   * @public
   */
  NoDevice?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const CapacityReservationPreference = {
  none: "none",
  open: "open",
} as const;

/**
 * @public
 */
export type CapacityReservationPreference =
  (typeof CapacityReservationPreference)[keyof typeof CapacityReservationPreference];

/**
 * <p>Describes a target Capacity Reservation or Capacity Reservation group.</p>
 * @public
 */
export interface CapacityReservationTarget {
  /**
   * <p>The ID of the Capacity Reservation in which to run the instance.</p>
   * @public
   */
  CapacityReservationId?: string | undefined;

  /**
   * <p>The ARN of the Capacity Reservation resource group in which to run the instance.</p>
   * @public
   */
  CapacityReservationResourceGroupArn?: string | undefined;
}

/**
 * <p>Describes an instance's Capacity Reservation targeting option. You can specify only
 *             one option at a time. Use the <code>CapacityReservationPreference</code> parameter to
 *             configure the instance to run in On-Demand capacity or to run in any <code>open</code>
 *             Capacity Reservation that has matching attributes (instance type, platform, Availability
 *             Zone). Use the <code>CapacityReservationTarget</code> parameter to explicitly target a
 *             specific Capacity Reservation or a Capacity Reservation group.</p>
 * @public
 */
export interface LaunchTemplateCapacityReservationSpecificationRequest {
  /**
   * <p>Indicates the instance's Capacity Reservation preferences. Possible preferences
   *             include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>open</code> - The instance can run in any <code>open</code> Capacity
   *                     Reservation that has matching attributes (instance type, platform, Availability
   *                     Zone).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>none</code> - The instance avoids running in a Capacity Reservation even
   *                     if one is available. The instance runs in On-Demand capacity.</p>
   *             </li>
   *          </ul>
   * @public
   */
  CapacityReservationPreference?: CapacityReservationPreference | undefined;

  /**
   * <p>Information about the target Capacity Reservation or Capacity Reservation
   *             group.</p>
   * @public
   */
  CapacityReservationTarget?: CapacityReservationTarget | undefined;
}

/**
 * @public
 * @enum
 */
export const AmdSevSnpSpecification = {
  disabled: "disabled",
  enabled: "enabled",
} as const;

/**
 * @public
 */
export type AmdSevSnpSpecification = (typeof AmdSevSnpSpecification)[keyof typeof AmdSevSnpSpecification];

/**
 * <p>The CPU options for the instance. Both the core count and threads per core must be
 *             specified in the request.</p>
 * @public
 */
export interface LaunchTemplateCpuOptionsRequest {
  /**
   * <p>The number of CPU cores for the instance.</p>
   * @public
   */
  CoreCount?: number | undefined;

  /**
   * <p>The number of threads per CPU core. To disable multithreading for the instance,
   *             specify a value of <code>1</code>. Otherwise, specify the default value of
   *                 <code>2</code>.</p>
   * @public
   */
  ThreadsPerCore?: number | undefined;

  /**
   * <p>Indicates whether to enable the instance for AMD SEV-SNP. AMD SEV-SNP is supported
   *             with M6a, R6a, and C6a instance types only. For more information, see
   *             <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/sev-snp.html">AMD SEV-SNP</a>.</p>
   * @public
   */
  AmdSevSnp?: AmdSevSnpSpecification | undefined;
}

/**
 * <p>The credit option for CPU usage of a T instance.</p>
 * @public
 */
export interface CreditSpecificationRequest {
  /**
   * <p>The credit option for CPU usage of a T instance.</p>
   *          <p>Valid values: <code>standard</code> | <code>unlimited</code>
   *          </p>
   * @public
   */
  CpuCredits: string | undefined;
}

/**
 * <note>
 *             <p>Amazon Elastic Graphics reached end of life on January 8, 2024.</p>
 *          </note>
 *          <p>A specification for an Elastic Graphics accelerator.</p>
 * @public
 */
export interface ElasticGpuSpecification {
  /**
   * <p>The type of Elastic Graphics accelerator.</p>
   * @public
   */
  Type: string | undefined;
}

/**
 * <note>
 *             <p>Amazon Elastic Inference is no longer available.</p>
 *          </note>
 *          <p> Describes an elastic inference accelerator. </p>
 * @public
 */
export interface LaunchTemplateElasticInferenceAccelerator {
  /**
   * <p> The type of elastic inference accelerator. The possible values are eia1.medium,
   *             eia1.large, and eia1.xlarge. </p>
   * @public
   */
  Type: string | undefined;

  /**
   * <p> The number of elastic inference accelerators to attach to the instance. </p>
   *          <p>Default: 1</p>
   * @public
   */
  Count?: number | undefined;
}

/**
 * <p>Indicates whether the instance is enabled for Amazon Web Services Nitro Enclaves. For more
 *             information, see <a href="https://docs.aws.amazon.com/enclaves/latest/user/nitro-enclave.html">What is Amazon Web Services Nitro Enclaves?</a>
 *             in the <i>Amazon Web Services Nitro Enclaves User Guide</i>.</p>
 * @public
 */
export interface LaunchTemplateEnclaveOptionsRequest {
  /**
   * <p>To enable the instance for Amazon Web Services Nitro Enclaves, set this parameter to
   *                 <code>true</code>.</p>
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * <p>Indicates whether the instance is configured for hibernation. This parameter is valid
 *             only if the instance meets the <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/hibernating-prerequisites.html">hibernation
 *                 prerequisites</a>.</p>
 * @public
 */
export interface LaunchTemplateHibernationOptionsRequest {
  /**
   * <p>If you set this parameter to <code>true</code>, the instance is enabled for
   *             hibernation.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   * @public
   */
  Configured?: boolean | undefined;
}

/**
 * <p>An IAM instance profile.</p>
 * @public
 */
export interface LaunchTemplateIamInstanceProfileSpecificationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the instance profile.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The name of the instance profile.</p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ShutdownBehavior = {
  stop: "stop",
  terminate: "terminate",
} as const;

/**
 * @public
 */
export type ShutdownBehavior = (typeof ShutdownBehavior)[keyof typeof ShutdownBehavior];

/**
 * @public
 * @enum
 */
export const MarketType = {
  capacity_block: "capacity-block",
  spot: "spot",
} as const;

/**
 * @public
 */
export type MarketType = (typeof MarketType)[keyof typeof MarketType];

/**
 * @public
 * @enum
 */
export const InstanceInterruptionBehavior = {
  hibernate: "hibernate",
  stop: "stop",
  terminate: "terminate",
} as const;

/**
 * @public
 */
export type InstanceInterruptionBehavior =
  (typeof InstanceInterruptionBehavior)[keyof typeof InstanceInterruptionBehavior];

/**
 * @public
 * @enum
 */
export const SpotInstanceType = {
  one_time: "one-time",
  persistent: "persistent",
} as const;

/**
 * @public
 */
export type SpotInstanceType = (typeof SpotInstanceType)[keyof typeof SpotInstanceType];

/**
 * <p>The options for Spot Instances.</p>
 * @public
 */
export interface LaunchTemplateSpotMarketOptionsRequest {
  /**
   * <p>The maximum hourly price you're willing to pay for the Spot Instances. We do not
   *             recommend using this parameter because it can lead to increased interruptions. If you do
   *             not specify this parameter, you will pay the current Spot price.</p>
   *          <important>
   *             <p>If you specify a maximum price, your Spot Instances will be interrupted more
   *                 frequently than if you do not specify this parameter.</p>
   *          </important>
   * @public
   */
  MaxPrice?: string | undefined;

  /**
   * <p>The Spot Instance request type.</p>
   * @public
   */
  SpotInstanceType?: SpotInstanceType | undefined;

  /**
   * <p>Deprecated.</p>
   * @public
   */
  BlockDurationMinutes?: number | undefined;

  /**
   * <p>The end date of the request, in UTC format
   *                 (<i>YYYY-MM-DD</i>T<i>HH:MM:SS</i>Z). Supported only for
   *             persistent requests.</p>
   *          <ul>
   *             <li>
   *                <p>For a persistent request, the request remains active until the
   *                         <code>ValidUntil</code> date and time is reached. Otherwise, the request
   *                     remains active until you cancel it.</p>
   *             </li>
   *             <li>
   *                <p>For a one-time request, <code>ValidUntil</code> is not supported. The request
   *                     remains active until all instances launch or you cancel the request.</p>
   *             </li>
   *          </ul>
   *          <p>Default: 7 days from the current date</p>
   * @public
   */
  ValidUntil?: Date | undefined;

  /**
   * <p>The behavior when a Spot Instance is interrupted. The default is
   *                 <code>terminate</code>.</p>
   * @public
   */
  InstanceInterruptionBehavior?: InstanceInterruptionBehavior | undefined;
}

/**
 * <p>The market (purchasing) option for the instances.</p>
 * @public
 */
export interface LaunchTemplateInstanceMarketOptionsRequest {
  /**
   * <p>The market type.</p>
   * @public
   */
  MarketType?: MarketType | undefined;

  /**
   * <p>The options for Spot Instances.</p>
   * @public
   */
  SpotOptions?: LaunchTemplateSpotMarketOptionsRequest | undefined;
}

/**
 * <p>Describes a license configuration.</p>
 * @public
 */
export interface LaunchTemplateLicenseConfigurationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the license configuration.</p>
   * @public
   */
  LicenseConfigurationArn?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const LaunchTemplateAutoRecoveryState = {
  default: "default",
  disabled: "disabled",
} as const;

/**
 * @public
 */
export type LaunchTemplateAutoRecoveryState =
  (typeof LaunchTemplateAutoRecoveryState)[keyof typeof LaunchTemplateAutoRecoveryState];

/**
 * <p>The maintenance options of your instance.</p>
 * @public
 */
export interface LaunchTemplateInstanceMaintenanceOptionsRequest {
  /**
   * <p>Disables the automatic recovery behavior of your instance or sets it to default. For
   *             more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-recover.html#instance-configuration-recovery">Simplified automatic recovery</a>.</p>
   * @public
   */
  AutoRecovery?: LaunchTemplateAutoRecoveryState | undefined;
}

/**
 * @public
 * @enum
 */
export const LaunchTemplateInstanceMetadataEndpointState = {
  disabled: "disabled",
  enabled: "enabled",
} as const;

/**
 * @public
 */
export type LaunchTemplateInstanceMetadataEndpointState =
  (typeof LaunchTemplateInstanceMetadataEndpointState)[keyof typeof LaunchTemplateInstanceMetadataEndpointState];

/**
 * @public
 * @enum
 */
export const LaunchTemplateInstanceMetadataProtocolIpv6 = {
  disabled: "disabled",
  enabled: "enabled",
} as const;

/**
 * @public
 */
export type LaunchTemplateInstanceMetadataProtocolIpv6 =
  (typeof LaunchTemplateInstanceMetadataProtocolIpv6)[keyof typeof LaunchTemplateInstanceMetadataProtocolIpv6];

/**
 * @public
 * @enum
 */
export const LaunchTemplateHttpTokensState = {
  optional: "optional",
  required: "required",
} as const;

/**
 * @public
 */
export type LaunchTemplateHttpTokensState =
  (typeof LaunchTemplateHttpTokensState)[keyof typeof LaunchTemplateHttpTokensState];

/**
 * @public
 * @enum
 */
export const LaunchTemplateInstanceMetadataTagsState = {
  disabled: "disabled",
  enabled: "enabled",
} as const;

/**
 * @public
 */
export type LaunchTemplateInstanceMetadataTagsState =
  (typeof LaunchTemplateInstanceMetadataTagsState)[keyof typeof LaunchTemplateInstanceMetadataTagsState];

/**
 * <p>The metadata options for the instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html">Instance metadata and user data</a> in the
 *                 <i>Amazon EC2 User Guide</i>.</p>
 * @public
 */
export interface LaunchTemplateInstanceMetadataOptionsRequest {
  /**
   * <p>Indicates whether IMDSv2 is required.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>optional</code> - IMDSv2 is optional. You can choose whether to send a
   *                     session token in your instance metadata retrieval requests. If you retrieve
   *                     IAM role credentials without a session token, you receive the IMDSv1 role
   *                     credentials. If you retrieve IAM role credentials using a valid session token,
   *                     you receive the IMDSv2 role credentials.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>required</code> - IMDSv2 is required. You must send a session token
   *                     in your instance metadata retrieval requests. With this option, retrieving the
   *                     IAM role credentials always returns IMDSv2 credentials; IMDSv1 credentials are
   *                     not available.</p>
   *             </li>
   *          </ul>
   *          <p>Default: If the value of <code>ImdsSupport</code> for the Amazon Machine Image (AMI)
   *             for your instance is <code>v2.0</code>, the default is <code>required</code>.</p>
   * @public
   */
  HttpTokens?: LaunchTemplateHttpTokensState | undefined;

  /**
   * <p>The desired HTTP PUT response hop limit for instance metadata requests. The larger the
   *             number, the further instance metadata requests can travel.</p>
   *          <p>Default: <code>1</code>
   *          </p>
   *          <p>Possible values: Integers from 1 to 64</p>
   * @public
   */
  HttpPutResponseHopLimit?: number | undefined;

  /**
   * <p>Enables or disables the HTTP metadata endpoint on your instances. If the parameter is
   *             not specified, the default state is <code>enabled</code>.</p>
   *          <note>
   *             <p>If you specify a value of <code>disabled</code>, you will not be able to access
   *                 your instance metadata. </p>
   *          </note>
   * @public
   */
  HttpEndpoint?: LaunchTemplateInstanceMetadataEndpointState | undefined;

  /**
   * <p>Enables or disables the IPv6 endpoint for the instance metadata service.</p>
   *          <p>Default: <code>disabled</code>
   *          </p>
   * @public
   */
  HttpProtocolIpv6?: LaunchTemplateInstanceMetadataProtocolIpv6 | undefined;

  /**
   * <p>Set to <code>enabled</code> to allow access to instance tags from the instance
   *             metadata. Set to <code>disabled</code> to turn off access to instance tags from the
   *             instance metadata. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html#work-with-tags-in-IMDS">Work with
   *                 instance tags using the instance metadata</a>.</p>
   *          <p>Default: <code>disabled</code>
   *          </p>
   * @public
   */
  InstanceMetadataTags?: LaunchTemplateInstanceMetadataTagsState | undefined;
}

/**
 * <p>Describes the monitoring for the instance.</p>
 * @public
 */
export interface LaunchTemplatesMonitoringRequest {
  /**
   * <p>Specify <code>true</code> to enable detailed monitoring. Otherwise, basic monitoring
   *             is enabled.</p>
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * <p>A security group connection tracking specification request that enables you to set the idle timeout for connection tracking on an Elastic network interface. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/security-group-connection-tracking.html#connection-tracking-timeouts">Connection tracking timeouts</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @public
 */
export interface ConnectionTrackingSpecificationRequest {
  /**
   * <p>Timeout (in seconds) for idle TCP
   * 						connections in an established state. Min: 60 seconds. Max: 432000 seconds (5
   * 						days). Default: 432000 seconds. Recommended: Less than 432000 seconds.</p>
   * @public
   */
  TcpEstablishedTimeout?: number | undefined;

  /**
   * <p>Timeout (in seconds) for idle UDP
   * 						flows classified as streams which have seen more than one request-response
   * 						transaction. Min: 60 seconds. Max: 180 seconds (3 minutes). Default: 180
   * 						seconds.</p>
   * @public
   */
  UdpStreamTimeout?: number | undefined;

  /**
   * <p>Timeout (in seconds) for idle UDP flows that
   * 						have seen traffic only in a single direction or a single request-response
   * 						transaction. Min: 30 seconds. Max: 60 seconds. Default: 30 seconds.</p>
   * @public
   */
  UdpTimeout?: number | undefined;
}

/**
 * <p>Configures ENA Express for UDP network traffic from your launch template.</p>
 * @public
 */
export interface EnaSrdUdpSpecificationRequest {
  /**
   * <p>Indicates whether UDP traffic uses ENA Express for your instance. To ensure that
   * 			UDP traffic can use ENA Express when you launch an instance, you must also set
   * 			<b>EnaSrdEnabled</b> in the <b>EnaSrdSpecificationRequest</b> to <code>true</code> in your
   * 			launch template.</p>
   * @public
   */
  EnaSrdUdpEnabled?: boolean | undefined;
}

/**
 * <p>Launch instances with ENA Express settings configured
 * 			from your launch template.</p>
 * @public
 */
export interface EnaSrdSpecificationRequest {
  /**
   * <p>Specifies whether ENA Express is enabled for the network interface when you
   * 			launch an instance from your launch template.</p>
   * @public
   */
  EnaSrdEnabled?: boolean | undefined;

  /**
   * <p>Contains ENA Express settings for UDP network traffic in your launch template.</p>
   * @public
   */
  EnaSrdUdpSpecification?: EnaSrdUdpSpecificationRequest | undefined;
}

/**
 * <p>Describes the IPv4 prefix option for a network interface.</p>
 * @public
 */
export interface Ipv4PrefixSpecificationRequest {
  /**
   * <p>The IPv4 prefix. For information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-prefix-eni.html">
   *             Assigning prefixes to network interfaces</a> in the
   *                 <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  Ipv4Prefix?: string | undefined;
}

/**
 * <p>Describes an IPv6 address.</p>
 * @public
 */
export interface InstanceIpv6AddressRequest {
  /**
   * <p>The IPv6 address.</p>
   * @public
   */
  Ipv6Address?: string | undefined;
}

/**
 * <p>Describes the IPv4 prefix option for a network interface.</p>
 * @public
 */
export interface Ipv6PrefixSpecificationRequest {
  /**
   * <p>The IPv6 prefix.</p>
   * @public
   */
  Ipv6Prefix?: string | undefined;
}

/**
 * <p>Describes a secondary private IPv4 address for a network interface.</p>
 * @public
 */
export interface PrivateIpAddressSpecification {
  /**
   * <p>Indicates whether the private IPv4 address is the primary private IPv4 address. Only
   *             one IPv4 address can be designated as primary.</p>
   * @public
   */
  Primary?: boolean | undefined;

  /**
   * <p>The private IPv4 address.</p>
   * @public
   */
  PrivateIpAddress?: string | undefined;
}

/**
 * <p>The parameters for a network interface.</p>
 * @public
 */
export interface LaunchTemplateInstanceNetworkInterfaceSpecificationRequest {
  /**
   * <p>Associates a Carrier IP address with eth0 for a new network interface.</p>
   *          <p>Use this option when you launch an instance in a Wavelength Zone and want to associate
   *             a Carrier IP address with the network interface. For more information about Carrier IP
   *             addresses, see <a href="https://docs.aws.amazon.com/wavelength/latest/developerguide/how-wavelengths-work.html#provider-owned-ip">Carrier IP addresses</a> in the <i>Wavelength Developer
   *             Guide</i>.</p>
   * @public
   */
  AssociateCarrierIpAddress?: boolean | undefined;

  /**
   * <p>Associates a public IPv4 address with eth0 for a new network interface.</p>
   *          <p>Amazon Web Services charges for all public IPv4 addresses, including public IPv4 addresses
   * associated with running instances and Elastic IP addresses. For more information, see the <i>Public IPv4 Address</i> tab on the <a href="http://aws.amazon.com/vpc/pricing/">Amazon VPC pricing page</a>.</p>
   * @public
   */
  AssociatePublicIpAddress?: boolean | undefined;

  /**
   * <p>Indicates whether the network interface is deleted when the instance is
   *             terminated.</p>
   * @public
   */
  DeleteOnTermination?: boolean | undefined;

  /**
   * <p>A description for the network interface.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The device index for the network interface attachment. Each network interface requires
   *             a device index. If you create a launch template that includes secondary network interfaces
   *             but not a primary network interface, then you must add a primary network interface as a
   *             launch parameter when you launch an instance from the template.</p>
   * @public
   */
  DeviceIndex?: number | undefined;

  /**
   * <p>The IDs of one or more security groups.</p>
   * @public
   */
  Groups?: string[] | undefined;

  /**
   * <p>The type of network interface. To create an Elastic Fabric Adapter (EFA), specify
   *             <code>efa</code> or <code>efa</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/efa.html">Elastic Fabric Adapter</a> in the
   *                 <i>Amazon EC2 User Guide</i>.</p>
   *          <p>If you are not creating an EFA, specify <code>interface</code> or omit this
   *             parameter.</p>
   *          <p>If you specify <code>efa-only</code>, do not assign any IP addresses to the network
   *             interface. EFA-only network interfaces do not support IP addresses.</p>
   *          <p>Valid values: <code>interface</code> | <code>efa</code> | <code>efa-only</code>
   *          </p>
   * @public
   */
  InterfaceType?: string | undefined;

  /**
   * <p>The number of IPv6 addresses to assign to a network interface. Amazon EC2
   *             automatically selects the IPv6 addresses from the subnet range. You can't use this
   *             option if specifying specific IPv6 addresses.</p>
   * @public
   */
  Ipv6AddressCount?: number | undefined;

  /**
   * <p>One or more specific IPv6 addresses from the IPv6 CIDR block range of your subnet. You
   *             can't use this option if you're specifying a number of IPv6 addresses.</p>
   * @public
   */
  Ipv6Addresses?: InstanceIpv6AddressRequest[] | undefined;

  /**
   * <p>The ID of the network interface.</p>
   * @public
   */
  NetworkInterfaceId?: string | undefined;

  /**
   * <p>The primary private IPv4 address of the network interface.</p>
   * @public
   */
  PrivateIpAddress?: string | undefined;

  /**
   * <p>One or more private IPv4 addresses.</p>
   * @public
   */
  PrivateIpAddresses?: PrivateIpAddressSpecification[] | undefined;

  /**
   * <p>The number of secondary private IPv4 addresses to assign to a network
   *             interface.</p>
   * @public
   */
  SecondaryPrivateIpAddressCount?: number | undefined;

  /**
   * <p>The ID of the subnet for the network interface.</p>
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * <p>The index of the network card. Some instance types support multiple network cards. The
   *             primary network interface must be assigned to network card index 0. The default is
   *             network card index 0.</p>
   * @public
   */
  NetworkCardIndex?: number | undefined;

  /**
   * <p>One or more IPv4 prefixes to be assigned to the network interface. You cannot use this
   *             option if you use the <code>Ipv4PrefixCount</code> option.</p>
   * @public
   */
  Ipv4Prefixes?: Ipv4PrefixSpecificationRequest[] | undefined;

  /**
   * <p>The number of IPv4 prefixes to be automatically assigned to the network interface. You
   *             cannot use this option if you use the <code>Ipv4Prefix</code> option.</p>
   * @public
   */
  Ipv4PrefixCount?: number | undefined;

  /**
   * <p>One or more IPv6 prefixes to be assigned to the network interface. You cannot use this
   *             option if you use the <code>Ipv6PrefixCount</code> option.</p>
   * @public
   */
  Ipv6Prefixes?: Ipv6PrefixSpecificationRequest[] | undefined;

  /**
   * <p>The number of IPv6 prefixes to be automatically assigned to the network interface. You
   *             cannot use this option if you use the <code>Ipv6Prefix</code> option.</p>
   * @public
   */
  Ipv6PrefixCount?: number | undefined;

  /**
   * <p>The primary IPv6 address of the network interface. When you enable an IPv6 GUA address to be a primary IPv6, the first IPv6 GUA will be made the primary IPv6 address until the instance is terminated or the network interface is detached. For more information about primary IPv6 addresses, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RunInstances.html">RunInstances</a>.</p>
   * @public
   */
  PrimaryIpv6?: boolean | undefined;

  /**
   * <p>Configure ENA Express settings for your launch template.</p>
   * @public
   */
  EnaSrdSpecification?: EnaSrdSpecificationRequest | undefined;

  /**
   * <p>A security group connection tracking specification that enables you to set the timeout
   *             for connection tracking on an Elastic network interface. For more information, see
   *                 <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/security-group-connection-tracking.html#connection-tracking-timeouts">Idle connection tracking timeout</a> in the
   *                 <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  ConnectionTrackingSpecification?: ConnectionTrackingSpecificationRequest | undefined;
}

/**
 * <p>Describes the placement of an instance.</p>
 * @public
 */
export interface LaunchTemplatePlacementRequest {
  /**
   * <p>The Availability Zone for the instance.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>The affinity setting for an instance on a Dedicated Host.</p>
   * @public
   */
  Affinity?: string | undefined;

  /**
   * <p>The name of the placement group for the instance.</p>
   * @public
   */
  GroupName?: string | undefined;

  /**
   * <p>The ID of the Dedicated Host for the instance.</p>
   * @public
   */
  HostId?: string | undefined;

  /**
   * <p>The tenancy of the instance. An instance with a
   *             tenancy of dedicated runs on single-tenant hardware.</p>
   * @public
   */
  Tenancy?: Tenancy | undefined;

  /**
   * <p>Reserved for future use.</p>
   * @public
   */
  SpreadDomain?: string | undefined;

  /**
   * <p>The ARN of the host resource group in which to launch the instances. If you specify a
   *             host resource group ARN, omit the <b>Tenancy</b> parameter or
   *             set it to <code>host</code>.</p>
   * @public
   */
  HostResourceGroupArn?: string | undefined;

  /**
   * <p>The number of the partition the instance should launch in. Valid only if the placement
   *             group strategy is set to <code>partition</code>.</p>
   * @public
   */
  PartitionNumber?: number | undefined;

  /**
   * <p>The Group Id of a placement group. You must specify the Placement Group <b>Group Id</b> to launch an instance in a shared placement
   *             group.</p>
   * @public
   */
  GroupId?: string | undefined;
}

/**
 * <p>Describes the options for instance hostnames.</p>
 * @public
 */
export interface LaunchTemplatePrivateDnsNameOptionsRequest {
  /**
   * <p>The type of hostname for Amazon EC2 instances. For IPv4 only subnets, an instance DNS name
   *             must be based on the instance IPv4 address. For IPv6 native subnets, an instance DNS
   *             name must be based on the instance ID. For dual-stack subnets, you can specify whether
   *             DNS names use the instance IPv4 address or the instance ID.</p>
   * @public
   */
  HostnameType?: HostnameType | undefined;

  /**
   * <p>Indicates whether to respond to DNS queries for instance hostnames with DNS A
   *             records.</p>
   * @public
   */
  EnableResourceNameDnsARecord?: boolean | undefined;

  /**
   * <p>Indicates whether to respond to DNS queries for instance hostnames with DNS AAAA
   *             records.</p>
   * @public
   */
  EnableResourceNameDnsAAAARecord?: boolean | undefined;
}

/**
 * <p>The tags specification for the resources that are created during instance
 *             launch.</p>
 * @public
 */
export interface LaunchTemplateTagSpecificationRequest {
  /**
   * <p>The type of resource to tag.</p>
   *          <p>Valid Values lists all resource types for Amazon EC2 that can be tagged. When
   *             you create a launch template, you can specify tags for the following resource types
   *             only: <code>instance</code> | <code>volume</code> |
   *                 <code>network-interface</code> | <code>spot-instances-request</code>.
   *             If the instance does not include the resource type that you specify, the instance
   *             launch fails. For example, not all instance types include a volume.</p>
   *          <p>To tag a resource after it has been created, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTags.html">CreateTags</a>.</p>
   * @public
   */
  ResourceType?: ResourceType | undefined;

  /**
   * <p>The tags to apply to the resource.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>The information to include in the launch template.</p>
 *          <note>
 *             <p>You must specify at least one parameter for the launch template data.</p>
 *          </note>
 * @public
 */
export interface RequestLaunchTemplateData {
  /**
   * <p>The ID of the kernel.</p>
   *          <important>
   *             <p>We recommend that you use PV-GRUB instead of kernels and RAM disks. For more
   *                 information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/UserProvidedkernels.html">User provided
   *                     kernels</a> in the <i>Amazon EC2 User Guide</i>.</p>
   *          </important>
   * @public
   */
  KernelId?: string | undefined;

  /**
   * <p>Indicates whether the instance is optimized for Amazon EBS I/O. This optimization
   *             provides dedicated throughput to Amazon EBS and an optimized configuration stack to
   *             provide optimal Amazon EBS I/O performance. This optimization isn't available with all
   *             instance types. Additional usage charges apply when using an EBS-optimized
   *             instance.</p>
   * @public
   */
  EbsOptimized?: boolean | undefined;

  /**
   * <p>The name or Amazon Resource Name (ARN) of an IAM instance profile.</p>
   * @public
   */
  IamInstanceProfile?: LaunchTemplateIamInstanceProfileSpecificationRequest | undefined;

  /**
   * <p>The block device mapping.</p>
   * @public
   */
  BlockDeviceMappings?: LaunchTemplateBlockDeviceMappingRequest[] | undefined;

  /**
   * <p>The network interfaces for the instance.</p>
   * @public
   */
  NetworkInterfaces?: LaunchTemplateInstanceNetworkInterfaceSpecificationRequest[] | undefined;

  /**
   * <p>The ID of the AMI in the format <code>ami-0ac394d6a3example</code>.</p>
   *          <p>Alternatively, you can specify a Systems Manager parameter, using one of the following
   *             formats. The Systems Manager parameter will resolve to an AMI ID on launch.</p>
   *          <p>To reference a public parameter:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>resolve:ssm:<i>public-parameter</i>
   *                   </code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>To reference a parameter stored in the same account:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>resolve:ssm:<i>parameter-name</i>
   *                   </code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>resolve:ssm:<i>parameter-name:version-number</i>
   *                   </code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>resolve:ssm:<i>parameter-name:label</i>
   *                   </code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>To reference a parameter shared from another Amazon Web Services account:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>resolve:ssm:<i>parameter-ARN</i>
   *                   </code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>resolve:ssm:<i>parameter-ARN:version-number</i>
   *                   </code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>resolve:ssm:<i>parameter-ARN:label</i>
   *                   </code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/create-launch-template.html#use-an-ssm-parameter-instead-of-an-ami-id">Use a Systems Manager parameter instead of an AMI ID</a> in the <i>Amazon EC2 User Guide</i>.</p>
   *          <note>
   *             <p>If the launch template will be used for an EC2 Fleet or Spot Fleet, note the
   *                 following:</p>
   *             <ul>
   *                <li>
   *                   <p>Only EC2 Fleets of type <code>instant</code> support specifying a Systems
   *                         Manager parameter.</p>
   *                </li>
   *                <li>
   *                   <p>For EC2 Fleets of type <code>maintain</code> or <code>request</code>, or
   *                         for Spot Fleets, you must specify the AMI ID.</p>
   *                </li>
   *             </ul>
   *          </note>
   * @public
   */
  ImageId?: string | undefined;

  /**
   * <p>The instance type. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html">Amazon EC2 instance types</a> in
   *             the <i>Amazon EC2 User Guide</i>.</p>
   *          <p>If you specify <code>InstanceType</code>, you can't specify
   *                 <code>InstanceRequirements</code>.</p>
   * @public
   */
  InstanceType?: _InstanceType | undefined;

  /**
   * <p>The name of the key pair. You can create a key pair using <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateKeyPair.html">CreateKeyPair</a> or
   *                 <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ImportKeyPair.html">ImportKeyPair</a>.</p>
   *          <important>
   *             <p>If you do not specify a key pair, you can't connect to the instance unless you
   *                 choose an AMI that is configured to allow users another way to log in.</p>
   *          </important>
   * @public
   */
  KeyName?: string | undefined;

  /**
   * <p>The monitoring for the instance.</p>
   * @public
   */
  Monitoring?: LaunchTemplatesMonitoringRequest | undefined;

  /**
   * <p>The placement for the instance.</p>
   * @public
   */
  Placement?: LaunchTemplatePlacementRequest | undefined;

  /**
   * <p>The ID of the RAM disk.</p>
   *          <important>
   *             <p>We recommend that you use PV-GRUB instead of kernels and RAM disks. For more
   *                 information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/UserProvidedkernels.html">User provided
   *                     kernels</a> in the <i>Amazon EC2 User Guide</i>.</p>
   *          </important>
   * @public
   */
  RamDiskId?: string | undefined;

  /**
   * <p>If you set this parameter to <code>true</code>, you can't terminate the instance using
   *             the Amazon EC2 console, CLI, or API; otherwise, you can. To change this attribute after
   *             launch, use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyInstanceAttribute.html">ModifyInstanceAttribute</a>. Alternatively, if you set
   *                 <code>InstanceInitiatedShutdownBehavior</code> to <code>terminate</code>, you can
   *             terminate the instance by running the shutdown command from the instance.</p>
   * @public
   */
  DisableApiTermination?: boolean | undefined;

  /**
   * <p>Indicates whether an instance stops or terminates when you initiate shutdown from the
   *             instance (using the operating system command for system shutdown).</p>
   *          <p>Default: <code>stop</code>
   *          </p>
   * @public
   */
  InstanceInitiatedShutdownBehavior?: ShutdownBehavior | undefined;

  /**
   * <p>The user data to make available to the instance. You must provide base64-encoded text.
   *             User data is limited to 16 KB. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/user-data.html">Run commands on your Amazon EC2 instance at
   *                 launch</a> in the <i>Amazon EC2 User Guide</i>.</p>
   *          <p>If you are creating the launch template for use with Batch, the user
   *             data must be provided in the <a href="https://cloudinit.readthedocs.io/en/latest/topics/format.html#mime-multi-part-archive">MIME multi-part archive format</a>. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/launch-templates.html">Amazon EC2 user data in launch templates</a> in the <i>Batch User Guide</i>.</p>
   * @public
   */
  UserData?: string | undefined;

  /**
   * <p>The tags to apply to the resources that are created during instance launch. These
   *           tags are not applied to the launch template.</p>
   * @public
   */
  TagSpecifications?: LaunchTemplateTagSpecificationRequest[] | undefined;

  /**
   * <p>Deprecated.</p>
   *          <note>
   *             <p>Amazon Elastic Graphics reached end of life on January 8, 2024. For
   *                 workloads that require graphics acceleration, we recommend that you use Amazon EC2 G4ad,
   *                 G4dn, or G5 instances.</p>
   *          </note>
   * @public
   */
  ElasticGpuSpecifications?: ElasticGpuSpecification[] | undefined;

  /**
   * <note>
   *             <p>Amazon Elastic Inference is no longer available.</p>
   *          </note>
   *          <p>An elastic inference accelerator to associate with the instance. Elastic inference
   *             accelerators are a resource you can attach to your Amazon EC2 instances to accelerate
   *             your Deep Learning (DL) inference workloads.</p>
   *          <p>You cannot specify accelerators from different generations in the same request.</p>
   *          <note>
   *             <p>Starting April 15, 2023, Amazon Web Services will not onboard new customers to Amazon
   *                 Elastic Inference (EI), and will help current customers migrate their workloads to
   *                 options that offer better price and performance. After April 15, 2023, new customers
   *                 will not be able to launch instances with Amazon EI accelerators in Amazon SageMaker,
   *                 Amazon ECS, or Amazon EC2. However, customers who have used Amazon EI at least once during
   *                 the past 30-day period are considered current customers and will be able to continue
   *                 using the service.</p>
   *          </note>
   * @public
   */
  ElasticInferenceAccelerators?: LaunchTemplateElasticInferenceAccelerator[] | undefined;

  /**
   * <p>The IDs of the security groups.</p>
   *          <p>If you specify a network interface, you must specify any security groups as part of
   *             the network interface instead of using this parameter.</p>
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * <p>The names of the security groups. For a nondefault VPC, you must use security group
   *             IDs instead.</p>
   *          <p>If you specify a network interface, you must specify any security groups as part of
   *             the network interface instead of using this parameter.</p>
   * @public
   */
  SecurityGroups?: string[] | undefined;

  /**
   * <p>The market (purchasing) option for the instances.</p>
   * @public
   */
  InstanceMarketOptions?: LaunchTemplateInstanceMarketOptionsRequest | undefined;

  /**
   * <p>The credit option for CPU usage of the instance. Valid only for T instances.</p>
   * @public
   */
  CreditSpecification?: CreditSpecificationRequest | undefined;

  /**
   * <p>The CPU options for the instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-optimize-cpu.html">Optimize CPU options</a> in the <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  CpuOptions?: LaunchTemplateCpuOptionsRequest | undefined;

  /**
   * <p>The Capacity Reservation targeting option. If you do not specify this parameter, the
   *             instance's Capacity Reservation preference defaults to <code>open</code>, which enables
   *             it to run in any open Capacity Reservation that has matching attributes (instance type,
   *             platform, Availability Zone).</p>
   * @public
   */
  CapacityReservationSpecification?: LaunchTemplateCapacityReservationSpecificationRequest | undefined;

  /**
   * <p>The license configurations.</p>
   * @public
   */
  LicenseSpecifications?: LaunchTemplateLicenseConfigurationRequest[] | undefined;

  /**
   * <p>Indicates whether an instance is enabled for hibernation. This parameter is valid only
   *             if the instance meets the <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/hibernating-prerequisites.html">hibernation
   *                 prerequisites</a>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html">Hibernate your Amazon EC2 instance</a>
   *             in the <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  HibernationOptions?: LaunchTemplateHibernationOptionsRequest | undefined;

  /**
   * <p>The metadata options for the instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html">Instance metadata and user data</a> in the
   *                 <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  MetadataOptions?: LaunchTemplateInstanceMetadataOptionsRequest | undefined;

  /**
   * <p>Indicates whether the instance is enabled for Amazon Web Services Nitro Enclaves. For more
   *             information, see <a href="https://docs.aws.amazon.com/enclaves/latest/user/nitro-enclave.html">What is Amazon Web Services Nitro Enclaves?</a>
   *             in the <i>Amazon Web Services Nitro Enclaves User Guide</i>.</p>
   *          <p>You can't enable Amazon Web Services Nitro Enclaves and hibernation on the same instance.</p>
   * @public
   */
  EnclaveOptions?: LaunchTemplateEnclaveOptionsRequest | undefined;

  /**
   * <p>The attributes for the instance types. When you specify instance attributes, Amazon EC2 will
   *          identify instance types with these attributes.</p>
   *          <p>You must specify <code>VCpuCount</code> and <code>MemoryMiB</code>. All other attributes
   *          are optional. Any unspecified optional attribute is set to its default.</p>
   *          <p>When you specify multiple attributes, you get instance types that satisfy all of the
   *          specified attributes. If you specify multiple values for an attribute, you get instance
   *          types that satisfy any of the specified values.</p>
   *          <p>To limit the list of instance types from which Amazon EC2 can identify matching instance types,
   *          you can use one of the following parameters, but not both in the same request:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>AllowedInstanceTypes</code> - The instance types to include in the list. All
   *                other instance types are ignored, even if they match your specified attributes.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ExcludedInstanceTypes</code> - The instance types to exclude from the list,
   *                even if they match your specified attributes.</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>If you specify <code>InstanceRequirements</code>, you can't specify
   *             <code>InstanceType</code>.</p>
   *             <p>Attribute-based instance type selection is only supported when using Auto Scaling
   *             groups, EC2 Fleet, and Spot Fleet to launch instances. If you plan to use the launch template in
   *             the <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-instance-wizard.html">launch instance
   *                wizard</a>, or with the <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RunInstances.html">RunInstances</a> API or
   *               <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instance.html">AWS::EC2::Instance</a> Amazon Web Services CloudFormation resource, you can't specify <code>InstanceRequirements</code>.</p>
   *          </note>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-fleet-attribute-based-instance-type-selection.html">Specify attributes for instance type selection for EC2 Fleet or Spot Fleet</a> and <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-placement-score.html">Spot
   *             placement score</a> in the <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  InstanceRequirements?: InstanceRequirementsRequest | undefined;

  /**
   * <p>The options for the instance hostname. The default values are inherited from the
   *             subnet.</p>
   * @public
   */
  PrivateDnsNameOptions?: LaunchTemplatePrivateDnsNameOptionsRequest | undefined;

  /**
   * <p>The maintenance options for the instance.</p>
   * @public
   */
  MaintenanceOptions?: LaunchTemplateInstanceMaintenanceOptionsRequest | undefined;

  /**
   * <p>Indicates whether to enable the instance for stop protection. For more information,
   *             see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-stop-protection.html">Enable stop protection for your instance</a> in the
   *                 <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  DisableApiStop?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateLaunchTemplateRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>Unique, case-sensitive identifier you provide to ensure the idempotency of the
   *             request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring
   *                 idempotency</a>.</p>
   *          <p>Constraint: Maximum 128 ASCII characters.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>A name for the launch template.</p>
   * @public
   */
  LaunchTemplateName: string | undefined;

  /**
   * <p>A description for the first version of the launch template.</p>
   * @public
   */
  VersionDescription?: string | undefined;

  /**
   * <p>The information for the launch template.</p>
   * @public
   */
  LaunchTemplateData: RequestLaunchTemplateData | undefined;

  /**
   * <p>The tags to apply to the launch template on creation. To tag the launch template, the
   *             resource type must be <code>launch-template</code>.</p>
   *          <p>To specify the tags for the resources that are created when an instance is
   *             launched, you must use the <code>TagSpecifications</code> parameter in the <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RequestLaunchTemplateData.html">launch template data</a> structure.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;
}

/**
 * <p>Describes a launch template.</p>
 * @public
 */
export interface LaunchTemplate {
  /**
   * <p>The ID of the launch template.</p>
   * @public
   */
  LaunchTemplateId?: string | undefined;

  /**
   * <p>The name of the launch template.</p>
   * @public
   */
  LaunchTemplateName?: string | undefined;

  /**
   * <p>The time launch template was created.</p>
   * @public
   */
  CreateTime?: Date | undefined;

  /**
   * <p>The principal that created the launch template. </p>
   * @public
   */
  CreatedBy?: string | undefined;

  /**
   * <p>The version number of the default version of the launch template.</p>
   * @public
   */
  DefaultVersionNumber?: number | undefined;

  /**
   * <p>The version number of the latest version of the launch template.</p>
   * @public
   */
  LatestVersionNumber?: number | undefined;

  /**
   * <p>The tags for the launch template.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>The error code and error message that is returned for a parameter or parameter
 *             combination that is not valid when a new launch template or new version of a launch
 *             template is created.</p>
 * @public
 */
export interface ValidationError {
  /**
   * <p>The error code that indicates why the parameter or parameter combination is not valid.
   *             For more information about error codes, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/errors-overview.html">Error codes</a>.</p>
   * @public
   */
  Code?: string | undefined;

  /**
   * <p>The error message that describes why the parameter or parameter combination is not
   *             valid. For more information about error messages, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/errors-overview.html">Error codes</a>.</p>
   * @public
   */
  Message?: string | undefined;
}

/**
 * <p>The error codes and error messages that are returned for the parameters or parameter
 *             combinations that are not valid when a new launch template or new version of a launch
 *             template is created.</p>
 * @public
 */
export interface ValidationWarning {
  /**
   * <p>The error codes and error messages.</p>
   * @public
   */
  Errors?: ValidationError[] | undefined;
}

/**
 * @public
 */
export interface CreateLaunchTemplateResult {
  /**
   * <p>Information about the launch template.</p>
   * @public
   */
  LaunchTemplate?: LaunchTemplate | undefined;

  /**
   * <p>If the launch template contains parameters or parameter combinations that are not
   *             valid, an error code and an error message are returned for each issue that's
   *             found.</p>
   * @public
   */
  Warning?: ValidationWarning | undefined;
}

/**
 * @public
 */
export interface CreateLaunchTemplateVersionRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>Unique, case-sensitive identifier you provide to ensure the idempotency of the
   *             request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring
   *                 idempotency</a>.</p>
   *          <p>Constraint: Maximum 128 ASCII characters.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The ID of the launch template.</p>
   *          <p>You must specify either the launch template ID or the
   *             launch template name, but not both.</p>
   * @public
   */
  LaunchTemplateId?: string | undefined;

  /**
   * <p>The name of the launch template.</p>
   *          <p>You must specify either the launch template ID or the
   *             launch template name, but not both.</p>
   * @public
   */
  LaunchTemplateName?: string | undefined;

  /**
   * <p>The version of the launch template on which to base the new version.
   *             Snapshots applied to the block device mapping are ignored when creating a new version
   *             unless they are explicitly included.</p>
   *          <p>If you specify this parameter, the new version inherits the launch parameters from the
   *             source version. If you specify additional launch parameters for the new version, they
   *             overwrite any corresponding launch parameters inherited from the source version.</p>
   *          <p>If you omit this parameter, the new version contains only the launch parameters
   *             that you specify for the new version.</p>
   * @public
   */
  SourceVersion?: string | undefined;

  /**
   * <p>A description for the version of the launch template.</p>
   * @public
   */
  VersionDescription?: string | undefined;

  /**
   * <p>The information for the launch template.</p>
   * @public
   */
  LaunchTemplateData: RequestLaunchTemplateData | undefined;

  /**
   * <p>If <code>true</code>, and if a Systems Manager parameter is specified for <code>ImageId</code>,
   *             the AMI ID is displayed in the response for <code>imageID</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html#use-an-ssm-parameter-instead-of-an-ami-id">Use a Systems
   *                 Manager parameter instead of an AMI ID</a> in the <i>Amazon EC2 User Guide</i>.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   * @public
   */
  ResolveAlias?: boolean | undefined;
}

/**
 * <p>Describes a block device for an EBS volume.</p>
 * @public
 */
export interface LaunchTemplateEbsBlockDevice {
  /**
   * <p>Indicates whether the EBS volume is encrypted.</p>
   * @public
   */
  Encrypted?: boolean | undefined;

  /**
   * <p>Indicates whether the EBS volume is deleted on instance termination.</p>
   * @public
   */
  DeleteOnTermination?: boolean | undefined;

  /**
   * <p>The number of I/O operations per second (IOPS) that the volume supports. </p>
   * @public
   */
  Iops?: number | undefined;

  /**
   * <p>Identifier (key ID, key alias, key ARN, or alias ARN) of the customer managed KMS key
   *             to use for EBS encryption.</p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>The ID of the snapshot.</p>
   * @public
   */
  SnapshotId?: string | undefined;

  /**
   * <p>The size of the volume, in GiB.</p>
   * @public
   */
  VolumeSize?: number | undefined;

  /**
   * <p>The volume type.</p>
   * @public
   */
  VolumeType?: VolumeType | undefined;

  /**
   * <p>The throughput that the volume supports, in MiB/s.</p>
   * @public
   */
  Throughput?: number | undefined;
}

/**
 * <p>Describes a block device mapping.</p>
 * @public
 */
export interface LaunchTemplateBlockDeviceMapping {
  /**
   * <p>The device name.</p>
   * @public
   */
  DeviceName?: string | undefined;

  /**
   * <p>The virtual device name (ephemeralN).</p>
   * @public
   */
  VirtualName?: string | undefined;

  /**
   * <p>Information about the block device for an EBS volume.</p>
   * @public
   */
  Ebs?: LaunchTemplateEbsBlockDevice | undefined;

  /**
   * <p>To omit the device from the block device mapping, specify an empty string.</p>
   * @public
   */
  NoDevice?: string | undefined;
}

/**
 * <p>Describes a target Capacity Reservation or Capacity Reservation group.</p>
 * @public
 */
export interface CapacityReservationTargetResponse {
  /**
   * <p>The ID of the targeted Capacity Reservation.</p>
   * @public
   */
  CapacityReservationId?: string | undefined;

  /**
   * <p>The ARN of the targeted Capacity Reservation group.</p>
   * @public
   */
  CapacityReservationResourceGroupArn?: string | undefined;
}

/**
 * <p>Information about the Capacity Reservation targeting option.</p>
 * @public
 */
export interface LaunchTemplateCapacityReservationSpecificationResponse {
  /**
   * <p>Indicates the instance's Capacity Reservation preferences. Possible preferences
   *             include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>open</code> - The instance can run in any <code>open</code> Capacity
   *                     Reservation that has matching attributes (instance type, platform, Availability
   *                     Zone).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>none</code> - The instance avoids running in a Capacity Reservation even
   *                     if one is available. The instance runs in On-Demand capacity.</p>
   *             </li>
   *          </ul>
   * @public
   */
  CapacityReservationPreference?: CapacityReservationPreference | undefined;

  /**
   * <p>Information about the target Capacity Reservation or Capacity Reservation
   *             group.</p>
   * @public
   */
  CapacityReservationTarget?: CapacityReservationTargetResponse | undefined;
}

/**
 * <p>The CPU options for the instance.</p>
 * @public
 */
export interface LaunchTemplateCpuOptions {
  /**
   * <p>The number of CPU cores for the instance.</p>
   * @public
   */
  CoreCount?: number | undefined;

  /**
   * <p>The number of threads per CPU core.</p>
   * @public
   */
  ThreadsPerCore?: number | undefined;

  /**
   * <p>Indicates whether the instance is enabled for AMD SEV-SNP. For more information, see
   *             <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/sev-snp.html">AMD SEV-SNP</a>.</p>
   * @public
   */
  AmdSevSnp?: AmdSevSnpSpecification | undefined;
}

/**
 * <p>Describes the credit option for CPU usage of a T instance.</p>
 * @public
 */
export interface CreditSpecification {
  /**
   * <p>The credit option for CPU usage of a T instance.</p>
   *          <p>Valid values: <code>standard</code> | <code>unlimited</code>
   *          </p>
   * @public
   */
  CpuCredits?: string | undefined;
}

/**
 * <p>Deprecated.</p>
 *          <note>
 *             <p>Amazon Elastic Graphics reached end of life on January 8, 2024. For
 *                 workloads that require graphics acceleration, we recommend that you use Amazon EC2 G4ad,
 *                 G4dn, or G5 instances.</p>
 *          </note>
 * @public
 */
export interface ElasticGpuSpecificationResponse {
  /**
   * <p>Deprecated.</p>
   *          <note>
   *             <p>Amazon Elastic Graphics reached end of life on January 8, 2024. For
   *                 workloads that require graphics acceleration, we recommend that you use Amazon EC2 G4ad,
   *                 G4dn, or G5 instances.</p>
   *          </note>
   * @public
   */
  Type?: string | undefined;
}

/**
 * <note>
 *             <p>Amazon Elastic Inference is no longer available.</p>
 *          </note>
 *          <p> Describes an elastic inference accelerator. </p>
 * @public
 */
export interface LaunchTemplateElasticInferenceAcceleratorResponse {
  /**
   * <p> The type of elastic inference accelerator. The possible values are eia1.medium,
   *             eia1.large, and eia1.xlarge. </p>
   * @public
   */
  Type?: string | undefined;

  /**
   * <p> The number of elastic inference accelerators to attach to the instance. </p>
   *          <p>Default: 1</p>
   * @public
   */
  Count?: number | undefined;
}

/**
 * <p>Indicates whether the instance is enabled for Amazon Web Services Nitro Enclaves.</p>
 * @public
 */
export interface LaunchTemplateEnclaveOptions {
  /**
   * <p>If this parameter is set to <code>true</code>, the instance is enabled for Amazon Web Services Nitro
   *             Enclaves; otherwise, it is not enabled for Amazon Web Services Nitro Enclaves.</p>
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * <p>Indicates whether an instance is configured for hibernation.</p>
 * @public
 */
export interface LaunchTemplateHibernationOptions {
  /**
   * <p>If this parameter is set to <code>true</code>, the instance is enabled for
   *             hibernation; otherwise, it is not enabled for hibernation.</p>
   * @public
   */
  Configured?: boolean | undefined;
}

/**
 * <p>Describes an IAM instance profile.</p>
 * @public
 */
export interface LaunchTemplateIamInstanceProfileSpecification {
  /**
   * <p>The Amazon Resource Name (ARN) of the instance profile.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The name of the instance profile.</p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * <p>The options for Spot Instances.</p>
 * @public
 */
export interface LaunchTemplateSpotMarketOptions {
  /**
   * <p>The maximum hourly price you're willing to pay for the Spot Instances. We do not
   *             recommend using this parameter because it can lead to increased interruptions. If you do
   *             not specify this parameter, you will pay the current Spot price.</p>
   *          <important>
   *             <p>If you specify a maximum price, your Spot Instances will be interrupted more
   *                 frequently than if you do not specify this parameter.</p>
   *          </important>
   * @public
   */
  MaxPrice?: string | undefined;

  /**
   * <p>The Spot Instance request type.</p>
   * @public
   */
  SpotInstanceType?: SpotInstanceType | undefined;

  /**
   * <p>The required duration for the Spot Instances (also known as Spot blocks), in minutes.
   *             This value must be a multiple of 60 (60, 120, 180, 240, 300, or 360).</p>
   * @public
   */
  BlockDurationMinutes?: number | undefined;

  /**
   * <p>The end date of the request. For a one-time request, the request remains active until
   *             all instances launch, the request is canceled, or this date is reached. If the request
   *             is persistent, it remains active until it is canceled or this date and time is
   *             reached.</p>
   * @public
   */
  ValidUntil?: Date | undefined;

  /**
   * <p>The behavior when a Spot Instance is interrupted.</p>
   * @public
   */
  InstanceInterruptionBehavior?: InstanceInterruptionBehavior | undefined;
}

/**
 * <p>The market (purchasing) option for the instances.</p>
 * @public
 */
export interface LaunchTemplateInstanceMarketOptions {
  /**
   * <p>The market type.</p>
   * @public
   */
  MarketType?: MarketType | undefined;

  /**
   * <p>The options for Spot Instances.</p>
   * @public
   */
  SpotOptions?: LaunchTemplateSpotMarketOptions | undefined;
}

/**
 * <p>Describes a license configuration.</p>
 * @public
 */
export interface LaunchTemplateLicenseConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of the license configuration.</p>
   * @public
   */
  LicenseConfigurationArn?: string | undefined;
}

/**
 * <p>The maintenance options of your instance.</p>
 * @public
 */
export interface LaunchTemplateInstanceMaintenanceOptions {
  /**
   * <p>Disables the automatic recovery behavior of your instance or sets it to
   *             default.</p>
   * @public
   */
  AutoRecovery?: LaunchTemplateAutoRecoveryState | undefined;
}

/**
 * @public
 * @enum
 */
export const LaunchTemplateInstanceMetadataOptionsState = {
  applied: "applied",
  pending: "pending",
} as const;

/**
 * @public
 */
export type LaunchTemplateInstanceMetadataOptionsState =
  (typeof LaunchTemplateInstanceMetadataOptionsState)[keyof typeof LaunchTemplateInstanceMetadataOptionsState];

/**
 * <p>The metadata options for the instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html">Instance metadata and user data</a> in the
 *                 <i>Amazon EC2 User Guide</i>.</p>
 * @public
 */
export interface LaunchTemplateInstanceMetadataOptions {
  /**
   * <p>The state of the metadata option changes.</p>
   *          <p>
   *             <code>pending</code> - The metadata options are being updated and the instance is not
   *             ready to process metadata traffic with the new selection.</p>
   *          <p>
   *             <code>applied</code> - The metadata options have been successfully applied on the
   *             instance.</p>
   * @public
   */
  State?: LaunchTemplateInstanceMetadataOptionsState | undefined;

  /**
   * <p>Indicates whether IMDSv2 is required.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>optional</code> - IMDSv2 is optional. You can choose whether to send a
   *                     session token in your instance metadata retrieval requests. If you retrieve
   *                     IAM role credentials without a session token, you receive the IMDSv1 role
   *                     credentials. If you retrieve IAM role credentials using a valid session token,
   *                     you receive the IMDSv2 role credentials.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>required</code> - IMDSv2 is required. You must send a session token
   *                     in your instance metadata retrieval requests. With this option, retrieving the
   *                     IAM role credentials always returns IMDSv2 credentials; IMDSv1 credentials are
   *                     not available.</p>
   *             </li>
   *          </ul>
   * @public
   */
  HttpTokens?: LaunchTemplateHttpTokensState | undefined;

  /**
   * <p>The desired HTTP PUT response hop limit for instance metadata requests. The larger the
   *             number, the further instance metadata requests can travel.</p>
   *          <p>Default: 1</p>
   *          <p>Possible values: Integers from 1 to 64</p>
   * @public
   */
  HttpPutResponseHopLimit?: number | undefined;

  /**
   * <p>Enables or disables the HTTP metadata endpoint on your instances. If the parameter is
   *             not specified, the default state is <code>enabled</code>.</p>
   *          <note>
   *             <p>If you specify a value of <code>disabled</code>, you will not be able to access
   *                 your instance metadata. </p>
   *          </note>
   * @public
   */
  HttpEndpoint?: LaunchTemplateInstanceMetadataEndpointState | undefined;

  /**
   * <p>Enables or disables the IPv6 endpoint for the instance metadata service.</p>
   *          <p>Default: <code>disabled</code>
   *          </p>
   * @public
   */
  HttpProtocolIpv6?: LaunchTemplateInstanceMetadataProtocolIpv6 | undefined;

  /**
   * <p>Set to <code>enabled</code> to allow access to instance tags from the instance
   *             metadata. Set to <code>disabled</code> to turn off access to instance tags from the
   *             instance metadata. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html#work-with-tags-in-IMDS">Work with
   *                 instance tags using the instance metadata</a>.</p>
   *          <p>Default: <code>disabled</code>
   *          </p>
   * @public
   */
  InstanceMetadataTags?: LaunchTemplateInstanceMetadataTagsState | undefined;
}

/**
 * <p>Describes the monitoring for the instance.</p>
 * @public
 */
export interface LaunchTemplatesMonitoring {
  /**
   * <p>Indicates whether detailed monitoring is enabled. Otherwise, basic monitoring is
   *             enabled.</p>
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * <p>A security group connection tracking specification that enables you to set the idle timeout for connection tracking on an Elastic network interface. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/security-group-connection-tracking.html#connection-tracking-timeouts">Connection tracking timeouts</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @public
 */
export interface ConnectionTrackingSpecification {
  /**
   * <p>Timeout (in seconds) for idle TCP
   * 						connections in an established state. Min: 60 seconds. Max: 432000 seconds (5
   * 						days). Default: 432000 seconds. Recommended: Less than 432000 seconds.</p>
   * @public
   */
  TcpEstablishedTimeout?: number | undefined;

  /**
   * <p>Timeout (in seconds) for idle UDP flows that
   * 						have seen traffic only in a single direction or a single request-response
   * 						transaction. Min: 30 seconds. Max: 60 seconds. Default: 30 seconds.</p>
   * @public
   */
  UdpTimeout?: number | undefined;

  /**
   * <p>Timeout (in seconds) for idle UDP
   * 						flows classified as streams which have seen more than one request-response
   * 						transaction. Min: 60 seconds. Max: 180 seconds (3 minutes). Default: 180
   * 						seconds.</p>
   * @public
   */
  UdpStreamTimeout?: number | undefined;
}

/**
 * <p>ENA Express is compatible with both TCP and UDP transport protocols. When it's enabled, TCP traffic
 * 			automatically uses it. However, some UDP-based applications are designed to handle network packets that are
 * 			out of order, without a need for retransmission, such as live video broadcasting or other near-real-time
 * 			applications. For UDP traffic, you can specify whether to use ENA Express, based on your application
 * 			environment needs.</p>
 * @public
 */
export interface LaunchTemplateEnaSrdUdpSpecification {
  /**
   * <p>Indicates whether UDP traffic to and from the instance uses ENA Express. To specify this setting,
   * 			you must first enable ENA Express.</p>
   * @public
   */
  EnaSrdUdpEnabled?: boolean | undefined;
}

/**
 * <p>ENA Express uses Amazon Web Services Scalable Reliable Datagram (SRD) technology to increase the
 * 			maximum bandwidth used per stream and minimize tail latency of network traffic between EC2 instances.
 * 			With ENA Express, you can communicate between two EC2 instances in the same subnet within the same
 * 			account, or in different accounts. Both sending and receiving instances must have ENA Express enabled.</p>
 *          <p>To improve the reliability of network packet delivery, ENA Express reorders network packets on the
 * 			receiving end by default. However, some UDP-based applications are designed to handle network packets
 * 			that are out of order to reduce the overhead for packet delivery at the network layer. When ENA Express
 * 			is enabled, you can specify whether UDP network traffic uses it.</p>
 * @public
 */
export interface LaunchTemplateEnaSrdSpecification {
  /**
   * <p>Indicates whether ENA Express is enabled for the network interface.</p>
   * @public
   */
  EnaSrdEnabled?: boolean | undefined;

  /**
   * <p>Configures ENA Express for UDP network traffic.</p>
   * @public
   */
  EnaSrdUdpSpecification?: LaunchTemplateEnaSrdUdpSpecification | undefined;
}

/**
 * <p>Information about the IPv4 delegated prefixes assigned
 *             to a network interface.</p>
 * @public
 */
export interface Ipv4PrefixSpecificationResponse {
  /**
   * <p>The IPv4 delegated prefixes assigned to the network interface.</p>
   * @public
   */
  Ipv4Prefix?: string | undefined;
}

/**
 * <p>Describes an IPv6 address.</p>
 * @public
 */
export interface InstanceIpv6Address {
  /**
   * <p>The IPv6 address.</p>
   * @public
   */
  Ipv6Address?: string | undefined;

  /**
   * <p>Determines if an IPv6 address associated with a network interface is the primary IPv6 address. When you enable an IPv6 GUA address to be a primary IPv6, the first IPv6 GUA will be made the primary IPv6 address until the instance is terminated or the network interface is detached.
   *             For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RunInstances.html">RunInstances</a>.</p>
   * @public
   */
  IsPrimaryIpv6?: boolean | undefined;
}

/**
 * <p>Information about the IPv6 delegated prefixes assigned
 *             to a network interface.</p>
 * @public
 */
export interface Ipv6PrefixSpecificationResponse {
  /**
   * <p>The IPv6 delegated prefixes assigned to the network interface.</p>
   * @public
   */
  Ipv6Prefix?: string | undefined;
}

/**
 * <p>Describes a network interface.</p>
 * @public
 */
export interface LaunchTemplateInstanceNetworkInterfaceSpecification {
  /**
   * <p>Indicates whether to associate a Carrier IP address with eth0 for a new network
   *             interface.</p>
   *          <p>Use this option when you launch an instance in a Wavelength Zone and want to associate
   *             a Carrier IP address with the network interface. For more information about Carrier IP
   *             addresses, see <a href="https://docs.aws.amazon.com/wavelength/latest/developerguide/how-wavelengths-work.html#provider-owned-ip">Carrier IP addresses</a> in the <i>Wavelength Developer
   *             Guide</i>.</p>
   * @public
   */
  AssociateCarrierIpAddress?: boolean | undefined;

  /**
   * <p>Indicates whether to associate a public IPv4 address with eth0 for a new network
   *             interface.</p>
   *          <p>Amazon Web Services charges for all public IPv4 addresses, including public IPv4 addresses
   * associated with running instances and Elastic IP addresses. For more information, see the <i>Public IPv4 Address</i> tab on the <a href="http://aws.amazon.com/vpc/pricing/">Amazon VPC pricing page</a>.</p>
   * @public
   */
  AssociatePublicIpAddress?: boolean | undefined;

  /**
   * <p>Indicates whether the network interface is deleted when the instance is
   *             terminated.</p>
   * @public
   */
  DeleteOnTermination?: boolean | undefined;

  /**
   * <p>A description for the network interface.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The device index for the network interface attachment.</p>
   * @public
   */
  DeviceIndex?: number | undefined;

  /**
   * <p>The IDs of one or more security groups.</p>
   * @public
   */
  Groups?: string[] | undefined;

  /**
   * <p>The type of network interface.</p>
   * @public
   */
  InterfaceType?: string | undefined;

  /**
   * <p>The number of IPv6 addresses for the network interface.</p>
   * @public
   */
  Ipv6AddressCount?: number | undefined;

  /**
   * <p>The IPv6 addresses for the network interface.</p>
   * @public
   */
  Ipv6Addresses?: InstanceIpv6Address[] | undefined;

  /**
   * <p>The ID of the network interface.</p>
   * @public
   */
  NetworkInterfaceId?: string | undefined;

  /**
   * <p>The primary private IPv4 address of the network interface.</p>
   * @public
   */
  PrivateIpAddress?: string | undefined;

  /**
   * <p>One or more private IPv4 addresses.</p>
   * @public
   */
  PrivateIpAddresses?: PrivateIpAddressSpecification[] | undefined;

  /**
   * <p>The number of secondary private IPv4 addresses for the network interface.</p>
   * @public
   */
  SecondaryPrivateIpAddressCount?: number | undefined;

  /**
   * <p>The ID of the subnet for the network interface.</p>
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * <p>The index of the network card.</p>
   * @public
   */
  NetworkCardIndex?: number | undefined;

  /**
   * <p>One or more IPv4 prefixes assigned to the network interface.</p>
   * @public
   */
  Ipv4Prefixes?: Ipv4PrefixSpecificationResponse[] | undefined;

  /**
   * <p>The number of IPv4 prefixes that Amazon Web Services automatically assigned to the network
   *             interface.</p>
   * @public
   */
  Ipv4PrefixCount?: number | undefined;

  /**
   * <p>One or more IPv6 prefixes assigned to the network interface.</p>
   * @public
   */
  Ipv6Prefixes?: Ipv6PrefixSpecificationResponse[] | undefined;

  /**
   * <p>The number of IPv6 prefixes that Amazon Web Services automatically assigned to the network
   *             interface.</p>
   * @public
   */
  Ipv6PrefixCount?: number | undefined;

  /**
   * <p>The primary IPv6 address of the network interface. When you enable an IPv6 GUA address to be a primary IPv6, the first IPv6 GUA will be made the primary IPv6 address until the instance is terminated or the network interface is detached. For more information about primary IPv6 addresses, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RunInstances.html">RunInstances</a>.</p>
   * @public
   */
  PrimaryIpv6?: boolean | undefined;

  /**
   * <p>Contains the ENA Express settings for instances launched from your launch template.</p>
   * @public
   */
  EnaSrdSpecification?: LaunchTemplateEnaSrdSpecification | undefined;

  /**
   * <p>A security group connection tracking specification that enables you to set the timeout
   *             for connection tracking on an Elastic network interface. For more information, see
   *                 <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/security-group-connection-tracking.html#connection-tracking-timeouts">Idle connection tracking timeout</a> in the
   *                 <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  ConnectionTrackingSpecification?: ConnectionTrackingSpecification | undefined;
}

/**
 * <p>Describes the placement of an instance.</p>
 * @public
 */
export interface LaunchTemplatePlacement {
  /**
   * <p>The Availability Zone of the instance.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>The affinity setting for the instance on the Dedicated Host.</p>
   * @public
   */
  Affinity?: string | undefined;

  /**
   * <p>The name of the placement group for the instance.</p>
   * @public
   */
  GroupName?: string | undefined;

  /**
   * <p>The ID of the Dedicated Host for the instance.</p>
   * @public
   */
  HostId?: string | undefined;

  /**
   * <p>The tenancy of the instance. An instance with a
   *             tenancy of <code>dedicated</code> runs on single-tenant hardware. </p>
   * @public
   */
  Tenancy?: Tenancy | undefined;

  /**
   * <p>Reserved for future use.</p>
   * @public
   */
  SpreadDomain?: string | undefined;

  /**
   * <p>The ARN of the host resource group in which to launch the instances. </p>
   * @public
   */
  HostResourceGroupArn?: string | undefined;

  /**
   * <p>The number of the partition the instance should launch in. Valid only if the placement
   *             group strategy is set to <code>partition</code>.</p>
   * @public
   */
  PartitionNumber?: number | undefined;

  /**
   * <p>The Group ID of the placement group. You must specify the Placement Group <b>Group ID</b> to launch an instance in a shared placement
   *             group.</p>
   * @public
   */
  GroupId?: string | undefined;
}

/**
 * <p>Describes the options for instance hostnames.</p>
 * @public
 */
export interface LaunchTemplatePrivateDnsNameOptions {
  /**
   * <p>The type of hostname to assign to an instance.</p>
   * @public
   */
  HostnameType?: HostnameType | undefined;

  /**
   * <p>Indicates whether to respond to DNS queries for instance hostnames with DNS A
   *             records.</p>
   * @public
   */
  EnableResourceNameDnsARecord?: boolean | undefined;

  /**
   * <p>Indicates whether to respond to DNS queries for instance hostnames with DNS AAAA
   *             records.</p>
   * @public
   */
  EnableResourceNameDnsAAAARecord?: boolean | undefined;
}

/**
 * <p>The tags specification for the launch template.</p>
 * @public
 */
export interface LaunchTemplateTagSpecification {
  /**
   * <p>The type of resource to tag.</p>
   * @public
   */
  ResourceType?: ResourceType | undefined;

  /**
   * <p>The tags for the resource.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>The information for a launch template. </p>
 * @public
 */
export interface ResponseLaunchTemplateData {
  /**
   * <p>The ID of the kernel, if applicable.</p>
   * @public
   */
  KernelId?: string | undefined;

  /**
   * <p>Indicates whether the instance is optimized for Amazon EBS I/O. </p>
   * @public
   */
  EbsOptimized?: boolean | undefined;

  /**
   * <p>The IAM instance profile.</p>
   * @public
   */
  IamInstanceProfile?: LaunchTemplateIamInstanceProfileSpecification | undefined;

  /**
   * <p>The block device mappings.</p>
   * @public
   */
  BlockDeviceMappings?: LaunchTemplateBlockDeviceMapping[] | undefined;

  /**
   * <p>The network interfaces.</p>
   * @public
   */
  NetworkInterfaces?: LaunchTemplateInstanceNetworkInterfaceSpecification[] | undefined;

  /**
   * <p>The ID of the AMI or a Systems Manager parameter. The Systems Manager parameter will
   *             resolve to the ID of the AMI at instance launch.</p>
   *          <p>The value depends on what you specified in the request. The possible values are:</p>
   *          <ul>
   *             <li>
   *                <p>If an AMI ID was specified in the request, then this is the AMI ID.</p>
   *             </li>
   *             <li>
   *                <p>If a Systems Manager parameter was specified in the request, and
   *                     <code>ResolveAlias</code> was configured as <code>true</code>, then this is
   *                     the AMI ID that the parameter is mapped to in the Parameter Store.</p>
   *             </li>
   *             <li>
   *                <p>If a Systems Manager parameter was specified in the request, and <code>ResolveAlias</code> was configured
   *                     as <code>false</code>, then this is the parameter value.</p>
   *             </li>
   *          </ul>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html#use-an-ssm-parameter-instead-of-an-ami-id">Use a Systems
   *             Manager parameter instead of an AMI ID</a> in the <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  ImageId?: string | undefined;

  /**
   * <p>The instance type.</p>
   * @public
   */
  InstanceType?: _InstanceType | undefined;

  /**
   * <p>The name of the key pair.</p>
   * @public
   */
  KeyName?: string | undefined;

  /**
   * <p>The monitoring for the instance.</p>
   * @public
   */
  Monitoring?: LaunchTemplatesMonitoring | undefined;

  /**
   * <p>The placement of the instance.</p>
   * @public
   */
  Placement?: LaunchTemplatePlacement | undefined;

  /**
   * <p>The ID of the RAM disk, if applicable.</p>
   * @public
   */
  RamDiskId?: string | undefined;

  /**
   * <p>If set to <code>true</code>, indicates that the instance cannot be terminated using
   *             the Amazon EC2 console, command line tool, or API.</p>
   * @public
   */
  DisableApiTermination?: boolean | undefined;

  /**
   * <p>Indicates whether an instance stops or terminates when you initiate shutdown from the
   *             instance (using the operating system command for system shutdown).</p>
   * @public
   */
  InstanceInitiatedShutdownBehavior?: ShutdownBehavior | undefined;

  /**
   * <p>The user data for the instance. </p>
   * @public
   */
  UserData?: string | undefined;

  /**
   * <p>The tags that are applied to the resources that are created during instance
   *             launch.</p>
   * @public
   */
  TagSpecifications?: LaunchTemplateTagSpecification[] | undefined;

  /**
   * <p>Deprecated.</p>
   *          <note>
   *             <p>Amazon Elastic Graphics reached end of life on January 8, 2024. For
   *                 workloads that require graphics acceleration, we recommend that you use Amazon EC2 G4ad,
   *                 G4dn, or G5 instances.</p>
   *          </note>
   * @public
   */
  ElasticGpuSpecifications?: ElasticGpuSpecificationResponse[] | undefined;

  /**
   * <note>
   *             <p>Amazon Elastic Inference is no longer available.</p>
   *          </note>
   *          <p>An elastic inference accelerator to associate with the instance. Elastic inference
   *             accelerators are a resource you can attach to your Amazon EC2 instances to accelerate
   *             your Deep Learning (DL) inference workloads.</p>
   *          <p>You cannot specify accelerators from different generations in the same request.</p>
   *          <note>
   *             <p>Starting April 15, 2023, Amazon Web Services will not onboard new customers to Amazon
   *                 Elastic Inference (EI), and will help current customers migrate their workloads to
   *                 options that offer better price and performance. After April 15, 2023, new customers
   *                 will not be able to launch instances with Amazon EI accelerators in Amazon SageMaker,
   *                 Amazon ECS, or Amazon EC2. However, customers who have used Amazon EI at least once during
   *                 the past 30-day period are considered current customers and will be able to continue
   *                 using the service.</p>
   *          </note>
   * @public
   */
  ElasticInferenceAccelerators?: LaunchTemplateElasticInferenceAcceleratorResponse[] | undefined;

  /**
   * <p>The security group IDs.</p>
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * <p>The security group names.</p>
   * @public
   */
  SecurityGroups?: string[] | undefined;

  /**
   * <p>The market (purchasing) option for the instances.</p>
   * @public
   */
  InstanceMarketOptions?: LaunchTemplateInstanceMarketOptions | undefined;

  /**
   * <p>The credit option for CPU usage of the instance.</p>
   * @public
   */
  CreditSpecification?: CreditSpecification | undefined;

  /**
   * <p>The CPU options for the instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-optimize-cpu.html">Optimize CPU options</a> in the <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  CpuOptions?: LaunchTemplateCpuOptions | undefined;

  /**
   * <p>Information about the Capacity Reservation targeting option.</p>
   * @public
   */
  CapacityReservationSpecification?: LaunchTemplateCapacityReservationSpecificationResponse | undefined;

  /**
   * <p>The license configurations.</p>
   * @public
   */
  LicenseSpecifications?: LaunchTemplateLicenseConfiguration[] | undefined;

  /**
   * <p>Indicates whether an instance is configured for hibernation. For more information, see
   *                 <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html">Hibernate
   *                 your Amazon EC2 instance</a> in the <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  HibernationOptions?: LaunchTemplateHibernationOptions | undefined;

  /**
   * <p>The metadata options for the instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html">Instance metadata and user data</a> in the
   *                 <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  MetadataOptions?: LaunchTemplateInstanceMetadataOptions | undefined;

  /**
   * <p>Indicates whether the instance is enabled for Amazon Web Services Nitro Enclaves.</p>
   * @public
   */
  EnclaveOptions?: LaunchTemplateEnclaveOptions | undefined;

  /**
   * <p>The attributes for the instance types. When you specify instance attributes, Amazon EC2 will
   *          identify instance types with these attributes.</p>
   *          <p>If you specify <code>InstanceRequirements</code>, you can't specify
   *          <code>InstanceTypes</code>.</p>
   * @public
   */
  InstanceRequirements?: InstanceRequirements | undefined;

  /**
   * <p>The options for the instance hostname.</p>
   * @public
   */
  PrivateDnsNameOptions?: LaunchTemplatePrivateDnsNameOptions | undefined;

  /**
   * <p>The maintenance options for your instance.</p>
   * @public
   */
  MaintenanceOptions?: LaunchTemplateInstanceMaintenanceOptions | undefined;

  /**
   * <p>Indicates whether the instance is enabled for stop protection. For more information,
   *             see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-stop-protection.html">Enable stop protection for your instance</a> in the
   *                 <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  DisableApiStop?: boolean | undefined;
}

/**
 * <p>Describes a launch template version.</p>
 * @public
 */
export interface LaunchTemplateVersion {
  /**
   * <p>The ID of the launch template.</p>
   * @public
   */
  LaunchTemplateId?: string | undefined;

  /**
   * <p>The name of the launch template.</p>
   * @public
   */
  LaunchTemplateName?: string | undefined;

  /**
   * <p>The version number.</p>
   * @public
   */
  VersionNumber?: number | undefined;

  /**
   * <p>The description for the version.</p>
   * @public
   */
  VersionDescription?: string | undefined;

  /**
   * <p>The time the version was created.</p>
   * @public
   */
  CreateTime?: Date | undefined;

  /**
   * <p>The principal that created the version.</p>
   * @public
   */
  CreatedBy?: string | undefined;

  /**
   * <p>Indicates whether the version is the default version.</p>
   * @public
   */
  DefaultVersion?: boolean | undefined;

  /**
   * <p>Information about the launch template.</p>
   * @public
   */
  LaunchTemplateData?: ResponseLaunchTemplateData | undefined;
}

/**
 * @public
 */
export interface CreateLaunchTemplateVersionResult {
  /**
   * <p>Information about the launch template version.</p>
   * @public
   */
  LaunchTemplateVersion?: LaunchTemplateVersion | undefined;

  /**
   * <p>If the new version of the launch template contains parameters or parameter
   *             combinations that are not valid, an error code and an error message are returned for
   *             each issue that's found.</p>
   * @public
   */
  Warning?: ValidationWarning | undefined;
}

/**
 * @public
 */
export interface CreateLocalGatewayRouteRequest {
  /**
   * <p>The CIDR range used for destination matches. Routing decisions are based on
   *         the most specific match.</p>
   * @public
   */
  DestinationCidrBlock?: string | undefined;

  /**
   * <p>The ID of the local gateway route table.</p>
   * @public
   */
  LocalGatewayRouteTableId: string | undefined;

  /**
   * <p>The ID of the virtual interface group.</p>
   * @public
   */
  LocalGatewayVirtualInterfaceGroupId?: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the network interface.</p>
   * @public
   */
  NetworkInterfaceId?: string | undefined;

  /**
   * <p>
   *          The ID of the prefix list. Use a prefix list in place of <code>DestinationCidrBlock</code>. You
   *          cannot use <code>DestinationPrefixListId</code> and <code>DestinationCidrBlock</code> in the same request.
   *       </p>
   * @public
   */
  DestinationPrefixListId?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const LocalGatewayRouteState = {
  active: "active",
  blackhole: "blackhole",
  deleted: "deleted",
  deleting: "deleting",
  pending: "pending",
} as const;

/**
 * @public
 */
export type LocalGatewayRouteState = (typeof LocalGatewayRouteState)[keyof typeof LocalGatewayRouteState];

/**
 * @public
 * @enum
 */
export const LocalGatewayRouteType = {
  propagated: "propagated",
  static: "static",
} as const;

/**
 * @public
 */
export type LocalGatewayRouteType = (typeof LocalGatewayRouteType)[keyof typeof LocalGatewayRouteType];

/**
 * <p>Describes a route for a local gateway route table.</p>
 * @public
 */
export interface LocalGatewayRoute {
  /**
   * <p>The CIDR block used for destination matches.</p>
   * @public
   */
  DestinationCidrBlock?: string | undefined;

  /**
   * <p>The ID of the virtual interface group.</p>
   * @public
   */
  LocalGatewayVirtualInterfaceGroupId?: string | undefined;

  /**
   * <p>The route type.</p>
   * @public
   */
  Type?: LocalGatewayRouteType | undefined;

  /**
   * <p>The state of the route.</p>
   * @public
   */
  State?: LocalGatewayRouteState | undefined;

  /**
   * <p>The ID of the local gateway route table.</p>
   * @public
   */
  LocalGatewayRouteTableId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the local gateway route table.</p>
   * @public
   */
  LocalGatewayRouteTableArn?: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services account that owns the local gateway route.</p>
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * <p>The ID of the subnet.</p>
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * <p>The ID of the customer-owned address pool.</p>
   * @public
   */
  CoipPoolId?: string | undefined;

  /**
   * <p>The ID of the network interface.</p>
   * @public
   */
  NetworkInterfaceId?: string | undefined;

  /**
   * <p>
   *          The ID of the prefix list.
   *       </p>
   * @public
   */
  DestinationPrefixListId?: string | undefined;
}

/**
 * @public
 */
export interface CreateLocalGatewayRouteResult {
  /**
   * <p>Information about the route.</p>
   * @public
   */
  Route?: LocalGatewayRoute | undefined;
}

/**
 * @public
 * @enum
 */
export const LocalGatewayRouteTableMode = {
  coip: "coip",
  direct_vpc_routing: "direct-vpc-routing",
} as const;

/**
 * @public
 */
export type LocalGatewayRouteTableMode = (typeof LocalGatewayRouteTableMode)[keyof typeof LocalGatewayRouteTableMode];

/**
 * @public
 */
export interface CreateLocalGatewayRouteTableRequest {
  /**
   * <p>
   *       The ID of the local gateway.
   *       </p>
   * @public
   */
  LocalGatewayId: string | undefined;

  /**
   * <p>
   *       The mode of the local gateway route table.
   *       </p>
   * @public
   */
  Mode?: LocalGatewayRouteTableMode | undefined;

  /**
   * <p>
   *       The tags assigned to the local gateway route table.
   *       </p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * <p>Describes a state change.</p>
 * @public
 */
export interface StateReason {
  /**
   * <p>The reason code for the state change.</p>
   * @public
   */
  Code?: string | undefined;

  /**
   * <p>The message for the state change.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Server.InsufficientInstanceCapacity</code>: There was insufficient
   *                     capacity available to satisfy the launch request.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Server.InternalError</code>: An internal error caused the instance to
   *                     terminate during launch.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Server.ScheduledStop</code>: The instance was stopped due to a scheduled
   *                     retirement.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Server.SpotInstanceShutdown</code>: The instance was stopped because the
   *                     number of Spot requests with a maximum price equal to or higher than the Spot
   *                     price exceeded available capacity or because of an increase in the Spot
   *                     price.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Server.SpotInstanceTermination</code>: The instance was terminated
   *                     because the number of Spot requests with a maximum price equal to or higher than
   *                     the Spot price exceeded available capacity or because of an increase in the Spot
   *                     price.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Client.InstanceInitiatedShutdown</code>: The instance was shut down
   *                     from the operating system of the instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Client.InstanceTerminated</code>: The instance was terminated or
   *                     rebooted during AMI creation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Client.InternalError</code>: A client error caused the instance to
   *                     terminate during launch.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Client.InvalidSnapshot.NotFound</code>: The specified snapshot was not
   *                     found.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Client.UserInitiatedHibernate</code>: Hibernation was initiated on the
   *                     instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Client.UserInitiatedShutdown</code>: The instance was shut down using
   *                     the Amazon EC2 API.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Client.VolumeLimitExceeded</code>: The limit on the number of EBS
   *                     volumes or total storage was exceeded. Decrease usage or request an increase in
   *                     your account limits.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Message?: string | undefined;
}

/**
 * <p>Describes a local gateway route table.</p>
 * @public
 */
export interface LocalGatewayRouteTable {
  /**
   * <p>The ID of the local gateway route table.</p>
   * @public
   */
  LocalGatewayRouteTableId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the local gateway route table.</p>
   * @public
   */
  LocalGatewayRouteTableArn?: string | undefined;

  /**
   * <p>The ID of the local gateway.</p>
   * @public
   */
  LocalGatewayId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Outpost.</p>
   * @public
   */
  OutpostArn?: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services account that owns the local gateway route table.</p>
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * <p>The state of the local gateway route table.</p>
   * @public
   */
  State?: string | undefined;

  /**
   * <p>The tags assigned to the local gateway route table.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The mode of the local gateway route table.</p>
   * @public
   */
  Mode?: LocalGatewayRouteTableMode | undefined;

  /**
   * <p>Information about the state change.</p>
   * @public
   */
  StateReason?: StateReason | undefined;
}

/**
 * @public
 */
export interface CreateLocalGatewayRouteTableResult {
  /**
   * <p>Information about the local gateway route table.</p>
   * @public
   */
  LocalGatewayRouteTable?: LocalGatewayRouteTable | undefined;
}

/**
 * @public
 */
export interface CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationRequest {
  /**
   * <p>
   *       The ID of the local gateway route table.
   *       </p>
   * @public
   */
  LocalGatewayRouteTableId: string | undefined;

  /**
   * <p>
   *       The ID of the local gateway route table virtual interface group association.
   *       </p>
   * @public
   */
  LocalGatewayVirtualInterfaceGroupId: string | undefined;

  /**
   * <p>
   *       The tags assigned to the local gateway route table virtual interface group association.
   *       </p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * <p>Describes an association between a local gateway route table and a virtual interface group.</p>
 * @public
 */
export interface LocalGatewayRouteTableVirtualInterfaceGroupAssociation {
  /**
   * <p>The ID of the association.</p>
   * @public
   */
  LocalGatewayRouteTableVirtualInterfaceGroupAssociationId?: string | undefined;

  /**
   * <p>The ID of the virtual interface group.</p>
   * @public
   */
  LocalGatewayVirtualInterfaceGroupId?: string | undefined;

  /**
   * <p>The ID of the local gateway.</p>
   * @public
   */
  LocalGatewayId?: string | undefined;

  /**
   * <p>The ID of the local gateway route table.</p>
   * @public
   */
  LocalGatewayRouteTableId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the local gateway route table for the virtual interface group.</p>
   * @public
   */
  LocalGatewayRouteTableArn?: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services account that owns the local gateway virtual interface group association.</p>
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * <p>The state of the association.</p>
   * @public
   */
  State?: string | undefined;

  /**
   * <p>The tags assigned to the association.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationResult {
  /**
   * <p>Information about the local gateway route table virtual interface group association.</p>
   * @public
   */
  LocalGatewayRouteTableVirtualInterfaceGroupAssociation?:
    | LocalGatewayRouteTableVirtualInterfaceGroupAssociation
    | undefined;
}

/**
 * @public
 */
export interface CreateLocalGatewayRouteTableVpcAssociationRequest {
  /**
   * <p>The ID of the local gateway route table.</p>
   * @public
   */
  LocalGatewayRouteTableId: string | undefined;

  /**
   * <p>The ID of the VPC.</p>
   * @public
   */
  VpcId: string | undefined;

  /**
   * <p>The tags to assign to the local gateway route table VPC association.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * <p>Describes an association between a local gateway route table and a VPC.</p>
 * @public
 */
export interface LocalGatewayRouteTableVpcAssociation {
  /**
   * <p>The ID of the association.</p>
   * @public
   */
  LocalGatewayRouteTableVpcAssociationId?: string | undefined;

  /**
   * <p>The ID of the local gateway route table.</p>
   * @public
   */
  LocalGatewayRouteTableId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the local gateway route table for the association.</p>
   * @public
   */
  LocalGatewayRouteTableArn?: string | undefined;

  /**
   * <p>The ID of the local gateway.</p>
   * @public
   */
  LocalGatewayId?: string | undefined;

  /**
   * <p>The ID of the VPC.</p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services account that owns the local gateway route table for the association.</p>
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * <p>The state of the association.</p>
   * @public
   */
  State?: string | undefined;

  /**
   * <p>The tags assigned to the association.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateLocalGatewayRouteTableVpcAssociationResult {
  /**
   * <p>Information about the association.</p>
   * @public
   */
  LocalGatewayRouteTableVpcAssociation?: LocalGatewayRouteTableVpcAssociation | undefined;
}

/**
 * @public
 */
export interface CreateManagedPrefixListRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>A name for the prefix list.</p>
   *          <p>Constraints: Up to 255 characters in length. The name cannot start with <code>com.amazonaws</code>.</p>
   * @public
   */
  PrefixListName: string | undefined;

  /**
   * <p>One or more entries for the prefix list.</p>
   * @public
   */
  Entries?: AddPrefixListEntry[] | undefined;

  /**
   * <p>The maximum number of entries for the prefix list.</p>
   * @public
   */
  MaxEntries: number | undefined;

  /**
   * <p>The tags to apply to the prefix list during creation.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * <p>The IP address type.</p>
   *          <p>Valid Values: <code>IPv4</code> | <code>IPv6</code>
   *          </p>
   * @public
   */
  AddressFamily: string | undefined;

  /**
   * <p>Unique, case-sensitive identifier you provide to ensure the idempotency of the
   *             request. For more information, see <a href="https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html">Ensuring
   *                 idempotency</a>.</p>
   *          <p>Constraints: Up to 255 UTF-8 characters in length.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const PrefixListState = {
  create_complete: "create-complete",
  create_failed: "create-failed",
  create_in_progress: "create-in-progress",
  delete_complete: "delete-complete",
  delete_failed: "delete-failed",
  delete_in_progress: "delete-in-progress",
  modify_complete: "modify-complete",
  modify_failed: "modify-failed",
  modify_in_progress: "modify-in-progress",
  restore_complete: "restore-complete",
  restore_failed: "restore-failed",
  restore_in_progress: "restore-in-progress",
} as const;

/**
 * @public
 */
export type PrefixListState = (typeof PrefixListState)[keyof typeof PrefixListState];

/**
 * <p>Describes a managed prefix list.</p>
 * @public
 */
export interface ManagedPrefixList {
  /**
   * <p>The ID of the prefix list.</p>
   * @public
   */
  PrefixListId?: string | undefined;

  /**
   * <p>The IP address version.</p>
   * @public
   */
  AddressFamily?: string | undefined;

  /**
   * <p>The current state of the prefix list.</p>
   * @public
   */
  State?: PrefixListState | undefined;

  /**
   * <p>The state message.</p>
   * @public
   */
  StateMessage?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the prefix list.</p>
   * @public
   */
  PrefixListArn?: string | undefined;

  /**
   * <p>The name of the prefix list.</p>
   * @public
   */
  PrefixListName?: string | undefined;

  /**
   * <p>The maximum number of entries for the prefix list.</p>
   * @public
   */
  MaxEntries?: number | undefined;

  /**
   * <p>The version of the prefix list.</p>
   * @public
   */
  Version?: number | undefined;

  /**
   * <p>The tags for the prefix list.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The ID of the owner of the prefix list.</p>
   * @public
   */
  OwnerId?: string | undefined;
}

/**
 * @public
 */
export interface CreateManagedPrefixListResult {
  /**
   * <p>Information about the prefix list.</p>
   * @public
   */
  PrefixList?: ManagedPrefixList | undefined;
}

/**
 * @public
 * @enum
 */
export const ConnectivityType = {
  PRIVATE: "private",
  PUBLIC: "public",
} as const;

/**
 * @public
 */
export type ConnectivityType = (typeof ConnectivityType)[keyof typeof ConnectivityType];

/**
 * @public
 */
export interface CreateNatGatewayRequest {
  /**
   * <p>[Public NAT gateways only] The allocation ID of an Elastic IP address to associate
   *           with the NAT gateway. You cannot specify an Elastic IP address with a private NAT gateway.
   *           If the Elastic IP address is associated with another resource, you must first disassociate it.</p>
   * @public
   */
  AllocationId?: string | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   * 			request. For more information, see <a href="https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html">Ensuring idempotency</a>.</p>
   *          <p>Constraint: Maximum 64 ASCII characters.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the subnet in which to create the NAT gateway.</p>
   * @public
   */
  SubnetId: string | undefined;

  /**
   * <p>The tags to assign to the NAT gateway.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * <p>Indicates whether the NAT gateway supports public or private connectivity.
   *           The default is public connectivity.</p>
   * @public
   */
  ConnectivityType?: ConnectivityType | undefined;

  /**
   * <p>The private IPv4 address to assign to the NAT gateway. If you don't provide an address, a private IPv4 address will be automatically assigned.</p>
   * @public
   */
  PrivateIpAddress?: string | undefined;

  /**
   * <p>Secondary EIP allocation IDs. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/nat-gateway-working-with.html">Create a NAT gateway</a>
   *             in the <i>Amazon VPC User Guide</i>.</p>
   * @public
   */
  SecondaryAllocationIds?: string[] | undefined;

  /**
   * <p>Secondary private IPv4 addresses. For more information about secondary addresses, see
   *             <a href="https://docs.aws.amazon.com/vpc/latest/userguide/nat-gateway-working-with.html">Create a NAT gateway</a> in the <i>Amazon VPC User Guide</i>.</p>
   * @public
   */
  SecondaryPrivateIpAddresses?: string[] | undefined;

  /**
   * <p>[Private NAT gateway only] The number of secondary private IPv4 addresses you want to assign to the NAT gateway.
   *             For more information about secondary addresses, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/nat-gateway-working-with.html">Create a NAT gateway</a>
   *             in the <i>Amazon VPC User Guide</i>.</p>
   * @public
   */
  SecondaryPrivateIpAddressCount?: number | undefined;
}

/**
 * <p>Reserved. If you need to sustain traffic greater than the <a href="https://docs.aws.amazon.com/vpc/latest/userguide/amazon-vpc-limits.html#vpc-limits-gateways">documented limits</a>,
 *           contact Amazon Web Services Support.</p>
 * @public
 */
export interface ProvisionedBandwidth {
  /**
   * <p>Reserved.</p>
   * @public
   */
  ProvisionTime?: Date | undefined;

  /**
   * <p>Reserved.</p>
   * @public
   */
  Provisioned?: string | undefined;

  /**
   * <p>Reserved.</p>
   * @public
   */
  RequestTime?: Date | undefined;

  /**
   * <p>Reserved.</p>
   * @public
   */
  Requested?: string | undefined;

  /**
   * <p>Reserved.</p>
   * @public
   */
  Status?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const NatGatewayState = {
  AVAILABLE: "available",
  DELETED: "deleted",
  DELETING: "deleting",
  FAILED: "failed",
  PENDING: "pending",
} as const;

/**
 * @public
 */
export type NatGatewayState = (typeof NatGatewayState)[keyof typeof NatGatewayState];

/**
 * <p>Describes a NAT gateway.</p>
 * @public
 */
export interface NatGateway {
  /**
   * <p>The date and time the NAT gateway was created.</p>
   * @public
   */
  CreateTime?: Date | undefined;

  /**
   * <p>The date and time the NAT gateway was deleted, if applicable.</p>
   * @public
   */
  DeleteTime?: Date | undefined;

  /**
   * <p>If the NAT gateway could not be created, specifies the error code for the failure.
   *         (<code>InsufficientFreeAddressesInSubnet</code> | <code>Gateway.NotAttached</code> |
   *          <code>InvalidAllocationID.NotFound</code> | <code>Resource.AlreadyAssociated</code> |
   *          <code>InternalError</code> | <code>InvalidSubnetID.NotFound</code>)</p>
   * @public
   */
  FailureCode?: string | undefined;

  /**
   * <p>If the NAT gateway could not be created, specifies the error message for the failure, that corresponds to the error code.</p>
   *          <ul>
   *             <li>
   *                <p>For InsufficientFreeAddressesInSubnet: "Subnet has insufficient free addresses to create this NAT gateway"</p>
   *             </li>
   *             <li>
   *                <p>For Gateway.NotAttached: "Network vpc-xxxxxxxx has no Internet gateway attached"</p>
   *             </li>
   *             <li>
   *                <p>For InvalidAllocationID.NotFound: "Elastic IP address eipalloc-xxxxxxxx could not be associated with this NAT gateway"</p>
   *             </li>
   *             <li>
   *                <p>For Resource.AlreadyAssociated: "Elastic IP address eipalloc-xxxxxxxx is already associated"</p>
   *             </li>
   *             <li>
   *                <p>For InternalError: "Network interface eni-xxxxxxxx, created and used internally by this NAT gateway is in an invalid state. Please try again."</p>
   *             </li>
   *             <li>
   *                <p>For InvalidSubnetID.NotFound: "The specified subnet subnet-xxxxxxxx does not exist or could not be found."</p>
   *             </li>
   *          </ul>
   * @public
   */
  FailureMessage?: string | undefined;

  /**
   * <p>Information about the IP addresses and network interface associated with the NAT gateway.</p>
   * @public
   */
  NatGatewayAddresses?: NatGatewayAddress[] | undefined;

  /**
   * <p>The ID of the NAT gateway.</p>
   * @public
   */
  NatGatewayId?: string | undefined;

  /**
   * <p>Reserved. If you need to sustain traffic greater than the <a href="https://docs.aws.amazon.com/vpc/latest/userguide/amazon-vpc-limits.html#vpc-limits-gateways">documented limits</a>,
   *           contact Amazon Web Services Support.</p>
   * @public
   */
  ProvisionedBandwidth?: ProvisionedBandwidth | undefined;

  /**
   * <p>The state of the NAT gateway.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>pending</code>: The NAT gateway is being created and is not ready to process
   *           traffic.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>failed</code>: The NAT gateway could not be created. Check the
   *             <code>failureCode</code> and <code>failureMessage</code> fields for the reason.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>available</code>: The NAT gateway is able to process traffic. This status remains
   *           until you delete the NAT gateway, and does not indicate the health of the NAT gateway.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deleting</code>: The NAT gateway is in the process of being terminated and may
   *           still be processing traffic.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deleted</code>: The NAT gateway has been terminated and is no longer processing
   *           traffic.</p>
   *             </li>
   *          </ul>
   * @public
   */
  State?: NatGatewayState | undefined;

  /**
   * <p>The ID of the subnet in which the NAT gateway is located.</p>
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * <p>The ID of the VPC in which the NAT gateway is located.</p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>The tags for the NAT gateway.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>Indicates whether the NAT gateway supports public or private connectivity.</p>
   * @public
   */
  ConnectivityType?: ConnectivityType | undefined;
}

/**
 * @public
 */
export interface CreateNatGatewayResult {
  /**
   * <p>Unique, case-sensitive identifier to ensure the idempotency of the request. Only returned if a client token was provided in the request.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>Information about the NAT gateway.</p>
   * @public
   */
  NatGateway?: NatGateway | undefined;
}

/**
 * @public
 */
export interface CreateNetworkAclRequest {
  /**
   * <p>The tags to assign to the network ACL.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. For more information, see <a href="https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html">Ensuring idempotency</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the VPC.</p>
   * @public
   */
  VpcId: string | undefined;
}

/**
 * <p>Describes an association between a network ACL and a subnet.</p>
 * @public
 */
export interface NetworkAclAssociation {
  /**
   * <p>The ID of the association between a network ACL and a subnet.</p>
   * @public
   */
  NetworkAclAssociationId?: string | undefined;

  /**
   * <p>The ID of the network ACL.</p>
   * @public
   */
  NetworkAclId?: string | undefined;

  /**
   * <p>The ID of the subnet.</p>
   * @public
   */
  SubnetId?: string | undefined;
}

/**
 * <p>Describes the ICMP type and code.</p>
 * @public
 */
export interface IcmpTypeCode {
  /**
   * <p>The ICMP code. A value of -1 means all codes for the specified ICMP type.</p>
   * @public
   */
  Code?: number | undefined;

  /**
   * <p>The ICMP type. A value of -1 means all types.</p>
   * @public
   */
  Type?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const RuleAction = {
  allow: "allow",
  deny: "deny",
} as const;

/**
 * @public
 */
export type RuleAction = (typeof RuleAction)[keyof typeof RuleAction];

/**
 * <p>Describes an entry in a network ACL.</p>
 * @public
 */
export interface NetworkAclEntry {
  /**
   * <p>The IPv4 network range to allow or deny, in CIDR notation.</p>
   * @public
   */
  CidrBlock?: string | undefined;

  /**
   * <p>Indicates whether the rule is an egress rule (applied to traffic leaving the subnet).</p>
   * @public
   */
  Egress?: boolean | undefined;

  /**
   * <p>ICMP protocol: The ICMP type and code.</p>
   * @public
   */
  IcmpTypeCode?: IcmpTypeCode | undefined;

  /**
   * <p>The IPv6 network range to allow or deny, in CIDR notation.</p>
   * @public
   */
  Ipv6CidrBlock?: string | undefined;

  /**
   * <p>TCP or UDP protocols: The range of ports the rule applies to.</p>
   * @public
   */
  PortRange?: PortRange | undefined;

  /**
   * <p>The protocol number. A value of "-1" means all protocols.</p>
   * @public
   */
  Protocol?: string | undefined;

  /**
   * <p>Indicates whether to allow or deny the traffic that matches the rule.</p>
   * @public
   */
  RuleAction?: RuleAction | undefined;

  /**
   * <p>The rule number for the entry. ACL entries are processed in ascending order by rule number.</p>
   * @public
   */
  RuleNumber?: number | undefined;
}

/**
 * <p>Describes a network ACL.</p>
 * @public
 */
export interface NetworkAcl {
  /**
   * <p>Any associations between the network ACL and your subnets</p>
   * @public
   */
  Associations?: NetworkAclAssociation[] | undefined;

  /**
   * <p>The entries (rules) in the network ACL.</p>
   * @public
   */
  Entries?: NetworkAclEntry[] | undefined;

  /**
   * <p>Indicates whether this is the default network ACL for the VPC.</p>
   * @public
   */
  IsDefault?: boolean | undefined;

  /**
   * <p>The ID of the network ACL.</p>
   * @public
   */
  NetworkAclId?: string | undefined;

  /**
   * <p>Any tags assigned to the network ACL.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The ID of the VPC for the network ACL.</p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services account that owns the network ACL.</p>
   * @public
   */
  OwnerId?: string | undefined;
}

/**
 * @public
 */
export interface CreateNetworkAclResult {
  /**
   * <p>Information about the network ACL.</p>
   * @public
   */
  NetworkAcl?: NetworkAcl | undefined;

  /**
   * <p>Unique, case-sensitive identifier to ensure the idempotency of the request. Only returned if a client token was provided in the request.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateNetworkAclEntryRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the network ACL.</p>
   * @public
   */
  NetworkAclId: string | undefined;

  /**
   * <p>The rule number for the entry (for example, 100). ACL entries are processed in ascending order by rule number.</p>
   *          <p>Constraints: Positive integer from 1 to 32766. The range 32767 to 65535 is reserved for internal use.</p>
   * @public
   */
  RuleNumber: number | undefined;

  /**
   * <p>The protocol number. A value of "-1" means all protocols. If you specify "-1" or a
   *   			protocol number other than "6" (TCP), "17" (UDP), or "1" (ICMP), traffic on all ports is
   * 			allowed, regardless of any ports or ICMP types or codes that you specify. If you specify
   * 			protocol "58" (ICMPv6) and specify an IPv4 CIDR block, traffic for all ICMP types and
   * 			codes allowed, regardless of any that you specify. If you specify protocol "58" (ICMPv6)
   * 			and specify an IPv6 CIDR block, you must specify an ICMP type and code.</p>
   * @public
   */
  Protocol: string | undefined;

  /**
   * <p>Indicates whether to allow or deny the traffic that matches the rule.</p>
   * @public
   */
  RuleAction: RuleAction | undefined;

  /**
   * <p>Indicates whether this is an egress rule (rule is applied to traffic leaving the subnet).</p>
   * @public
   */
  Egress: boolean | undefined;

  /**
   * <p>The IPv4 network range to allow or deny, in CIDR notation (for example
   * 		        <code>172.16.0.0/24</code>). We modify the specified CIDR block to its canonical form; for example, if you specify <code>100.68.0.18/18</code>, we modify it to <code>100.68.0.0/18</code>.</p>
   * @public
   */
  CidrBlock?: string | undefined;

  /**
   * <p>The IPv6 network range to allow or deny, in CIDR notation (for example
   *                 <code>2001:db8:1234:1a00::/64</code>).</p>
   * @public
   */
  Ipv6CidrBlock?: string | undefined;

  /**
   * <p>ICMP protocol: The ICMP or ICMPv6 type and code. Required if specifying protocol
   * 		        1 (ICMP) or protocol 58 (ICMPv6) with an IPv6 CIDR block.</p>
   * @public
   */
  IcmpTypeCode?: IcmpTypeCode | undefined;

  /**
   * <p>TCP or UDP protocols: The range of ports the rule applies to.
   * 		        Required if specifying protocol 6 (TCP) or 17 (UDP).</p>
   * @public
   */
  PortRange?: PortRange | undefined;
}

/**
 * @public
 */
export interface CreateNetworkInsightsAccessScopeRequest {
  /**
   * <p>The paths to match.</p>
   * @public
   */
  MatchPaths?: AccessScopePathRequest[] | undefined;

  /**
   * <p>The paths to exclude.</p>
   * @public
   */
  ExcludePaths?: AccessScopePathRequest[] | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information,
   *    see <a href="https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html">How to ensure idempotency</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The tags to apply.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * <p>Describes a Network Access Scope.</p>
 * @public
 */
export interface NetworkInsightsAccessScope {
  /**
   * <p>The ID of the Network Access Scope.</p>
   * @public
   */
  NetworkInsightsAccessScopeId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Network Access Scope.</p>
   * @public
   */
  NetworkInsightsAccessScopeArn?: string | undefined;

  /**
   * <p>The creation date.</p>
   * @public
   */
  CreatedDate?: Date | undefined;

  /**
   * <p>The last updated date.</p>
   * @public
   */
  UpdatedDate?: Date | undefined;

  /**
   * <p>The tags.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>Describes the Network Access Scope content.</p>
 * @public
 */
export interface NetworkInsightsAccessScopeContent {
  /**
   * <p>The ID of the Network Access Scope.</p>
   * @public
   */
  NetworkInsightsAccessScopeId?: string | undefined;

  /**
   * <p>The paths to match.</p>
   * @public
   */
  MatchPaths?: AccessScopePath[] | undefined;

  /**
   * <p>The paths to exclude.</p>
   * @public
   */
  ExcludePaths?: AccessScopePath[] | undefined;
}

/**
 * @public
 */
export interface CreateNetworkInsightsAccessScopeResult {
  /**
   * <p>The Network Access Scope.</p>
   * @public
   */
  NetworkInsightsAccessScope?: NetworkInsightsAccessScope | undefined;

  /**
   * <p>The Network Access Scope content.</p>
   * @public
   */
  NetworkInsightsAccessScopeContent?: NetworkInsightsAccessScopeContent | undefined;
}

/**
 * @internal
 */
export const KeyPairFilterSensitiveLog = (obj: KeyPair): any => ({
  ...obj,
  ...(obj.KeyMaterial && { KeyMaterial: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RequestLaunchTemplateDataFilterSensitiveLog = (obj: RequestLaunchTemplateData): any => ({
  ...obj,
  ...(obj.UserData && { UserData: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateLaunchTemplateRequestFilterSensitiveLog = (obj: CreateLaunchTemplateRequest): any => ({
  ...obj,
  ...(obj.LaunchTemplateData && {
    LaunchTemplateData: RequestLaunchTemplateDataFilterSensitiveLog(obj.LaunchTemplateData),
  }),
});

/**
 * @internal
 */
export const CreateLaunchTemplateVersionRequestFilterSensitiveLog = (obj: CreateLaunchTemplateVersionRequest): any => ({
  ...obj,
  ...(obj.LaunchTemplateData && {
    LaunchTemplateData: RequestLaunchTemplateDataFilterSensitiveLog(obj.LaunchTemplateData),
  }),
});

/**
 * @internal
 */
export const ResponseLaunchTemplateDataFilterSensitiveLog = (obj: ResponseLaunchTemplateData): any => ({
  ...obj,
  ...(obj.UserData && { UserData: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const LaunchTemplateVersionFilterSensitiveLog = (obj: LaunchTemplateVersion): any => ({
  ...obj,
  ...(obj.LaunchTemplateData && {
    LaunchTemplateData: ResponseLaunchTemplateDataFilterSensitiveLog(obj.LaunchTemplateData),
  }),
});

/**
 * @internal
 */
export const CreateLaunchTemplateVersionResultFilterSensitiveLog = (obj: CreateLaunchTemplateVersionResult): any => ({
  ...obj,
  ...(obj.LaunchTemplateVersion && {
    LaunchTemplateVersion: LaunchTemplateVersionFilterSensitiveLog(obj.LaunchTemplateVersion),
  }),
});
