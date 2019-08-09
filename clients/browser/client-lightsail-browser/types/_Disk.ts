import {
  _ResourceLocation,
  _UnmarshalledResourceLocation
} from "./_ResourceLocation";
import { _Tag, _UnmarshalledTag } from "./_Tag";

/**
 * <p>Describes a system disk or an block storage disk.</p>
 */
export interface _Disk {
  /**
   * <p>The unique name of the disk.</p>
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the disk.</p>
   */
  arn?: string;

  /**
   * <p>The support code. Include this code in your email to support when you have questions about an instance or another resource in Lightsail. This code enables our support team to look up your Lightsail information more easily.</p>
   */
  supportCode?: string;

  /**
   * <p>The date when the disk was created.</p>
   */
  createdAt?: Date | string | number;

  /**
   * <p>The AWS Region and Availability Zone where the disk is located.</p>
   */
  location?: _ResourceLocation;

  /**
   * <p>The Lightsail resource type (e.g., <code>Disk</code>).</p>
   */
  resourceType?:
    | "Instance"
    | "StaticIp"
    | "KeyPair"
    | "InstanceSnapshot"
    | "Domain"
    | "PeeredVpc"
    | "LoadBalancer"
    | "LoadBalancerTlsCertificate"
    | "Disk"
    | "DiskSnapshot"
    | "RelationalDatabase"
    | "RelationalDatabaseSnapshot"
    | "ExportSnapshotRecord"
    | "CloudFormationStackRecord"
    | string;

  /**
   * <p>The tag keys and optional values for the resource. For more information about tags in Lightsail, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-tags">Lightsail Dev Guide</a>.</p>
   */
  tags?: Array<_Tag> | Iterable<_Tag>;

  /**
   * <p>The size of the disk in GB.</p>
   */
  sizeInGb?: number;

  /**
   * <p>A Boolean value indicating whether this disk is a system disk (has an operating system loaded on it).</p>
   */
  isSystemDisk?: boolean;

  /**
   * <p>The input/output operations per second (IOPS) of the disk.</p>
   */
  iops?: number;

  /**
   * <p>The disk path.</p>
   */
  path?: string;

  /**
   * <p>Describes the status of the disk.</p>
   */
  state?: "pending" | "error" | "available" | "in-use" | "unknown" | string;

  /**
   * <p>The resources to which the disk is attached.</p>
   */
  attachedTo?: string;

  /**
   * <p>A Boolean value indicating whether the disk is attached.</p>
   */
  isAttached?: boolean;

  /**
   * <p>(Deprecated) The attachment state of the disk.</p> <note> <p>In releases prior to November 14, 2017, this parameter returned <code>attached</code> for system disks in the API response. It is now deprecated, but still included in the response. Use <code>isAttached</code> instead.</p> </note>
   */
  attachmentState?: string;

  /**
   * <p>(Deprecated) The number of GB in use by the disk.</p> <note> <p>In releases prior to November 14, 2017, this parameter was not included in the API response. It is now deprecated.</p> </note>
   */
  gbInUse?: number;
}

export interface _UnmarshalledDisk extends _Disk {
  /**
   * <p>The date when the disk was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The AWS Region and Availability Zone where the disk is located.</p>
   */
  location?: _UnmarshalledResourceLocation;

  /**
   * <p>The tag keys and optional values for the resource. For more information about tags in Lightsail, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-tags">Lightsail Dev Guide</a>.</p>
   */
  tags?: Array<_UnmarshalledTag>;
}
