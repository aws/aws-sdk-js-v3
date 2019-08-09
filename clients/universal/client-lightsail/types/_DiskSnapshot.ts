import {
  _ResourceLocation,
  _UnmarshalledResourceLocation
} from "./_ResourceLocation";
import { _Tag, _UnmarshalledTag } from "./_Tag";

/**
 * <p>Describes a block storage disk snapshot.</p>
 */
export interface _DiskSnapshot {
  /**
   * <p>The name of the disk snapshot (e.g., <code>my-disk-snapshot</code>).</p>
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the disk snapshot.</p>
   */
  arn?: string;

  /**
   * <p>The support code. Include this code in your email to support when you have questions about an instance or another resource in Lightsail. This code enables our support team to look up your Lightsail information more easily.</p>
   */
  supportCode?: string;

  /**
   * <p>The date when the disk snapshot was created.</p>
   */
  createdAt?: Date | string | number;

  /**
   * <p>The AWS Region and Availability Zone where the disk snapshot was created.</p>
   */
  location?: _ResourceLocation;

  /**
   * <p>The Lightsail resource type (e.g., <code>DiskSnapshot</code>).</p>
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
   * <p>The status of the disk snapshot operation.</p>
   */
  state?: "pending" | "completed" | "error" | "unknown" | string;

  /**
   * <p>The progress of the disk snapshot operation.</p>
   */
  progress?: string;

  /**
   * <p>The unique name of the source disk from which the disk snapshot was created.</p>
   */
  fromDiskName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the source disk from which the disk snapshot was created.</p>
   */
  fromDiskArn?: string;

  /**
   * <p>The unique name of the source instance from which the disk (system volume) snapshot was created.</p>
   */
  fromInstanceName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the source instance from which the disk (system volume) snapshot was created.</p>
   */
  fromInstanceArn?: string;
}

export interface _UnmarshalledDiskSnapshot extends _DiskSnapshot {
  /**
   * <p>The date when the disk snapshot was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The AWS Region and Availability Zone where the disk snapshot was created.</p>
   */
  location?: _UnmarshalledResourceLocation;

  /**
   * <p>The tag keys and optional values for the resource. For more information about tags in Lightsail, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-tags">Lightsail Dev Guide</a>.</p>
   */
  tags?: Array<_UnmarshalledTag>;
}
