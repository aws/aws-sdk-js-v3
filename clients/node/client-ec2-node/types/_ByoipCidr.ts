/**
 * <p>Information about an address range that is provisioned for use with your AWS resources through bring your own IP addresses (BYOIP).</p>
 */
export interface _ByoipCidr {
  /**
   * <p>The public IPv4 address range, in CIDR notation.</p>
   */
  Cidr?: string;

  /**
   * <p>The description of the address range.</p>
   */
  Description?: string;

  /**
   * <p>Upon success, contains the ID of the address pool. Otherwise, contains an error message.</p>
   */
  StatusMessage?: string;

  /**
   * <p>The state of the address pool.</p>
   */
  State?:
    | "advertised"
    | "deprovisioned"
    | "failed-deprovision"
    | "failed-provision"
    | "pending-deprovision"
    | "pending-provision"
    | "provisioned"
    | string;
}

export type _UnmarshalledByoipCidr = _ByoipCidr;
