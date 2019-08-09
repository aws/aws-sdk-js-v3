/**
 * <p>Describes a network interface attachment.</p>
 */
export interface _NetworkInterfaceAttachment {
  /**
   * <p>The timestamp indicating when the attachment initiated.</p>
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
   * <p>The device index of the network interface attachment on the instance.</p>
   */
  DeviceIndex?: number;

  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId?: string;

  /**
   * <p>The AWS account ID of the owner of the instance.</p>
   */
  InstanceOwnerId?: string;

  /**
   * <p>The attachment state.</p>
   */
  Status?: "attaching" | "attached" | "detaching" | "detached" | string;
}

export interface _UnmarshalledNetworkInterfaceAttachment
  extends _NetworkInterfaceAttachment {
  /**
   * <p>The timestamp indicating when the attachment initiated.</p>
   */
  AttachTime?: Date;
}
