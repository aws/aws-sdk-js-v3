/**
 * <p>Describes an attachment between a virtual private gateway and a VPC.</p>
 */
export interface _VpcAttachment {
  /**
   * <p>The current state of the attachment.</p>
   */
  State?: "attaching" | "attached" | "detaching" | "detached" | string;

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId?: string;
}

export type _UnmarshalledVpcAttachment = _VpcAttachment;
