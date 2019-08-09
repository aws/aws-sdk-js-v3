/**
 * <p>Describes an attachment change.</p>
 */
export interface _NetworkInterfaceAttachmentChanges {
  /**
   * <p>The ID of the network interface attachment.</p>
   */
  AttachmentId?: string;

  /**
   * <p>Indicates whether the network interface is deleted when the instance is terminated.</p>
   */
  DeleteOnTermination?: boolean;
}

export type _UnmarshalledNetworkInterfaceAttachmentChanges = _NetworkInterfaceAttachmentChanges;
