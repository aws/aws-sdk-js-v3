import { _ProductCode, _UnmarshalledProductCode } from "./_ProductCode";
import {
  _BlockDeviceMapping,
  _UnmarshalledBlockDeviceMapping
} from "./_BlockDeviceMapping";
import { _StateReason, _UnmarshalledStateReason } from "./_StateReason";
import { _Tag, _UnmarshalledTag } from "./_Tag";

/**
 * <p>Describes an image.</p>
 */
export interface _Image {
  /**
   * <p>The architecture of the image.</p>
   */
  Architecture?: "i386" | "x86_64" | "arm64" | string;

  /**
   * <p>The date and time the image was created.</p>
   */
  CreationDate?: string;

  /**
   * <p>The ID of the AMI.</p>
   */
  ImageId?: string;

  /**
   * <p>The location of the AMI.</p>
   */
  ImageLocation?: string;

  /**
   * <p>The type of image.</p>
   */
  ImageType?: "machine" | "kernel" | "ramdisk" | string;

  /**
   * <p>Indicates whether the image has public launch permissions. The value is <code>true</code> if this image has public launch permissions or <code>false</code> if it has only implicit and explicit launch permissions.</p>
   */
  Public?: boolean;

  /**
   * <p>The kernel associated with the image, if any. Only applicable for machine images.</p>
   */
  KernelId?: string;

  /**
   * <p>The AWS account ID of the image owner.</p>
   */
  OwnerId?: string;

  /**
   * <p>This value is set to <code>windows</code> for Windows AMIs; otherwise, it is blank.</p>
   */
  Platform?: "Windows" | string;

  /**
   * <p>Any product codes associated with the AMI.</p>
   */
  ProductCodes?: Array<_ProductCode> | Iterable<_ProductCode>;

  /**
   * <p>The RAM disk associated with the image, if any. Only applicable for machine images.</p>
   */
  RamdiskId?: string;

  /**
   * <p>The current state of the AMI. If the state is <code>available</code>, the image is successfully registered and can be used to launch an instance.</p>
   */
  State?:
    | "pending"
    | "available"
    | "invalid"
    | "deregistered"
    | "transient"
    | "failed"
    | "error"
    | string;

  /**
   * <p>Any block device mapping entries.</p>
   */
  BlockDeviceMappings?:
    | Array<_BlockDeviceMapping>
    | Iterable<_BlockDeviceMapping>;

  /**
   * <p>The description of the AMI that was provided during image creation.</p>
   */
  Description?: string;

  /**
   * <p>Specifies whether enhanced networking with ENA is enabled.</p>
   */
  EnaSupport?: boolean;

  /**
   * <p>The hypervisor type of the image.</p>
   */
  Hypervisor?: "ovm" | "xen" | string;

  /**
   * <p>The AWS account alias (for example, <code>amazon</code>, <code>self</code>) or the AWS account ID of the AMI owner.</p>
   */
  ImageOwnerAlias?: string;

  /**
   * <p>The name of the AMI that was provided during image creation.</p>
   */
  Name?: string;

  /**
   * <p>The device name of the root device volume (for example, <code>/dev/sda1</code>).</p>
   */
  RootDeviceName?: string;

  /**
   * <p>The type of root device used by the AMI. The AMI can use an EBS volume or an instance store volume.</p>
   */
  RootDeviceType?: "ebs" | "instance-store" | string;

  /**
   * <p>Specifies whether enhanced networking with the Intel 82599 Virtual Function interface is enabled.</p>
   */
  SriovNetSupport?: string;

  /**
   * <p>The reason for the state change.</p>
   */
  StateReason?: _StateReason;

  /**
   * <p>Any tags assigned to the image.</p>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;

  /**
   * <p>The type of virtualization of the AMI.</p>
   */
  VirtualizationType?: "hvm" | "paravirtual" | string;
}

export interface _UnmarshalledImage extends _Image {
  /**
   * <p>Any product codes associated with the AMI.</p>
   */
  ProductCodes?: Array<_UnmarshalledProductCode>;

  /**
   * <p>Any block device mapping entries.</p>
   */
  BlockDeviceMappings?: Array<_UnmarshalledBlockDeviceMapping>;

  /**
   * <p>The reason for the state change.</p>
   */
  StateReason?: _UnmarshalledStateReason;

  /**
   * <p>Any tags assigned to the image.</p>
   */
  Tags?: Array<_UnmarshalledTag>;
}
