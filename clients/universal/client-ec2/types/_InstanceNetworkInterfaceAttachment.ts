/**
 * <p>Describes a network interface attachment.</p>
 */
export interface _InstanceNetworkInterfaceAttachment {
  /**
   * <p>The time stamp when the attachment initiated.</p>
   */
  AttachTime?: Date | string | number;

  /**
   * <p>The ID of the network interface attachment.</p>
   */
  AttachmentId?: string;

  /**
   * <p>Indicates whether the network interface is deleted when the instance is terminated.</p>
   */
  DeleteOnTermination?: boolean;

  /**
   * <p>The index of the device on the instance for the network interface attachment.</p>
   */
  DeviceIndex?: number;

  /**
   * <p>The attachment state.</p>
   */
  Status?: "attaching" | "attached" | "detaching" | "detached" | string;
}

export interface _UnmarshalledInstanceNetworkInterfaceAttachment
  extends _InstanceNetworkInterfaceAttachment {
  /**
   * <p>The time stamp when the attachment initiated.</p>
   */
  AttachTime?: Date;
}
