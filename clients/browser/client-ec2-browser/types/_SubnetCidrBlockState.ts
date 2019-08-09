/**
 * <p>Describes the state of a CIDR block.</p>
 */
export interface _SubnetCidrBlockState {
  /**
   * <p>The state of a CIDR block.</p>
   */
  State?:
    | "associating"
    | "associated"
    | "disassociating"
    | "disassociated"
    | "failing"
    | "failed"
    | string;

  /**
   * <p>A message about the status of the CIDR block, if applicable.</p>
   */
  StatusMessage?: string;
}

export type _UnmarshalledSubnetCidrBlockState = _SubnetCidrBlockState;
