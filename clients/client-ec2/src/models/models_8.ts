// smithy-typescript generated code
import type { InterruptibleCapacityReservationAllocationStatus, InterruptionType } from "./enums";
import type { ByoipCidr, IpPermission } from "./models_0";

/**
 * @public
 */
export interface UpdateInterruptibleCapacityReservationAllocationRequest {
  /**
   * <p>
   * 			The ID of the source Capacity Reservation containing the interruptible allocation to modify.
   * 		</p>
   * @public
   */
  CapacityReservationId: string | undefined;

  /**
   * <p>
   * 			The new number of instances to allocate. Enter a higher number to add more capacity to share, or a lower number to reclaim capacity to your source Capacity Reservation.
   * 		</p>
   * @public
   */
  TargetInstanceCount: number | undefined;

  /**
   * <p>
   * 			Checks whether you have the required permissions for the action, without actually making the request, and provides an error response.
   * 		</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateInterruptibleCapacityReservationAllocationResult {
  /**
   * <p>
   * 			The ID of the interruptible Capacity Reservation that was modified.
   * 		</p>
   * @public
   */
  InterruptibleCapacityReservationId?: string | undefined;

  /**
   * <p>
   * 			The ID of the source Capacity Reservation to which capacity was reclaimed or from which capacity was allocated.
   * 		</p>
   * @public
   */
  SourceCapacityReservationId?: string | undefined;

  /**
   * <p>
   * 			The current number of instances allocated to the interruptible reservation.
   * 		</p>
   * @public
   */
  InstanceCount?: number | undefined;

  /**
   * <p>
   * 			The requested number of instances for the interruptible Capacity Reservation.
   * 		</p>
   * @public
   */
  TargetInstanceCount?: number | undefined;

  /**
   * <p>
   * 			The current status of the allocation (updating during reclamation, active when complete).
   * 		</p>
   * @public
   */
  Status?: InterruptibleCapacityReservationAllocationStatus | undefined;

  /**
   * <p>
   * 			The interruption type for the interruptible reservation.
   * 		</p>
   * @public
   */
  InterruptionType?: InterruptionType | undefined;
}

/**
 * <p>Describes the description of a security group rule.</p>
 *          <p>You can use this when you want to update the security group rule description for either an inbound or outbound rule.</p>
 * @public
 */
export interface SecurityGroupRuleDescription {
  /**
   * <p>The ID of the security group rule.</p>
   * @public
   */
  SecurityGroupRuleId?: string | undefined;

  /**
   * <p>The description of the security group rule.</p>
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface UpdateSecurityGroupRuleDescriptionsEgressRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the security group. You must specify either the security group ID or the
   * 			security group name in the request. For security groups in a nondefault VPC, you must
   * 			specify the security group ID.</p>
   * @public
   */
  GroupId?: string | undefined;

  /**
   * <p>[Default VPC] The name of the security group. You must specify either the security group
   * 			ID or the security group name.</p>
   * @public
   */
  GroupName?: string | undefined;

  /**
   * <p>The IP permissions for the security group rule. You must specify either the IP permissions
   * 		    or the description.</p>
   * @public
   */
  IpPermissions?: IpPermission[] | undefined;

  /**
   * <p>The description for the egress security group rules. You must specify either the
   *             description or the IP permissions.</p>
   * @public
   */
  SecurityGroupRuleDescriptions?: SecurityGroupRuleDescription[] | undefined;
}

/**
 * @public
 */
export interface UpdateSecurityGroupRuleDescriptionsEgressResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, returns an error.</p>
   * @public
   */
  Return?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateSecurityGroupRuleDescriptionsIngressRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the security group. You must specify either the security group ID or the
   * 			security group name in the request. For security groups in a nondefault VPC, you must
   * 			specify the security group ID.</p>
   * @public
   */
  GroupId?: string | undefined;

  /**
   * <p>[Default VPC] The name of the security group. You must specify either the
   *             security group ID or the security group name. For security groups in a
   *             nondefault VPC, you must specify the security group ID.</p>
   * @public
   */
  GroupName?: string | undefined;

  /**
   * <p>The IP permissions for the security group rule. You must specify either IP permissions
   * 		    or a description.</p>
   * @public
   */
  IpPermissions?: IpPermission[] | undefined;

  /**
   * <p>The description for the ingress security group rules. You must specify either
   *             a description or IP permissions.</p>
   * @public
   */
  SecurityGroupRuleDescriptions?: SecurityGroupRuleDescription[] | undefined;
}

/**
 * @public
 */
export interface UpdateSecurityGroupRuleDescriptionsIngressResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, returns an error.</p>
   * @public
   */
  Return?: boolean | undefined;
}

/**
 * @public
 */
export interface WithdrawByoipCidrRequest {
  /**
   * <p>The address range, in CIDR notation.</p>
   * @public
   */
  Cidr: string | undefined;

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
 */
export interface WithdrawByoipCidrResult {
  /**
   * <p>Information about the address pool.</p>
   * @public
   */
  ByoipCidr?: ByoipCidr | undefined;
}
