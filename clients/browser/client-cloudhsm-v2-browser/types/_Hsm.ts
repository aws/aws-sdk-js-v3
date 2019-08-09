/**
 * <p>Contains information about a hardware security module (HSM) in an AWS CloudHSM cluster.</p>
 */
export interface _Hsm {
  /**
   * <p>The Availability Zone that contains the HSM.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The identifier (ID) of the cluster that contains the HSM.</p>
   */
  ClusterId?: string;

  /**
   * <p>The subnet that contains the HSM's elastic network interface (ENI).</p>
   */
  SubnetId?: string;

  /**
   * <p>The identifier (ID) of the HSM's elastic network interface (ENI).</p>
   */
  EniId?: string;

  /**
   * <p>The IP address of the HSM's elastic network interface (ENI).</p>
   */
  EniIp?: string;

  /**
   * <p>The HSM's identifier (ID).</p>
   */
  HsmId: string;

  /**
   * <p>The HSM's state.</p>
   */
  State?:
    | "CREATE_IN_PROGRESS"
    | "ACTIVE"
    | "DEGRADED"
    | "DELETE_IN_PROGRESS"
    | "DELETED"
    | string;

  /**
   * <p>A description of the HSM's state.</p>
   */
  StateMessage?: string;
}

export type _UnmarshalledHsm = _Hsm;
