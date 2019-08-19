import {
  _ResourceLocation,
  _UnmarshalledResourceLocation
} from "./_ResourceLocation";
import { _Tag, _UnmarshalledTag } from "./_Tag";
import { _Disk, _UnmarshalledDisk } from "./_Disk";

/**
 * <p>Describes the snapshot of the virtual private server, or <i>instance</i>.</p>
 */
export interface _InstanceSnapshot {
  /**
   * <p>The name of the snapshot.</p>
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the snapshot (e.g., <code>arn:aws:lightsail:us-east-2:123456789101:InstanceSnapshot/d23b5706-3322-4d83-81e5-12345EXAMPLE</code>).</p>
   */
  arn?: string;

  /**
   * <p>The support code. Include this code in your email to support when you have questions about an instance or another resource in Lightsail. This code enables our support team to look up your Lightsail information more easily.</p>
   */
  supportCode?: string;

  /**
   * <p>The timestamp when the snapshot was created (e.g., <code>1479907467.024</code>).</p>
   */
  createdAt?: Date | string | number;

  /**
   * <p>The region name and Availability Zone where you created the snapshot.</p>
   */
  location?: _ResourceLocation;

  /**
   * <p>The type of resource (usually <code>InstanceSnapshot</code>).</p>
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
   * <p>The state the snapshot is in.</p>
   */
  state?: "pending" | "error" | "available" | string;

  /**
   * <p>The progress of the snapshot.</p>
   */
  progress?: string;

  /**
   * <p>An array of disk objects containing information about all block storage disks.</p>
   */
  fromAttachedDisks?: Array<_Disk> | Iterable<_Disk>;

  /**
   * <p>The instance from which the snapshot was created.</p>
   */
  fromInstanceName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the instance from which the snapshot was created (e.g., <code>arn:aws:lightsail:us-east-2:123456789101:Instance/64b8404c-ccb1-430b-8daf-12345EXAMPLE</code>).</p>
   */
  fromInstanceArn?: string;

  /**
   * <p>The blueprint ID from which you created the snapshot (e.g., <code>os_debian_8_3</code>). A blueprint is a virtual private server (or <i>instance</i>) image used to create instances quickly.</p>
   */
  fromBlueprintId?: string;

  /**
   * <p>The bundle ID from which you created the snapshot (e.g., <code>micro_1_0</code>).</p>
   */
  fromBundleId?: string;

  /**
   * <p>The size in GB of the SSD.</p>
   */
  sizeInGb?: number;
}

export interface _UnmarshalledInstanceSnapshot extends _InstanceSnapshot {
  /**
   * <p>The timestamp when the snapshot was created (e.g., <code>1479907467.024</code>).</p>
   */
  createdAt?: Date;

  /**
   * <p>The region name and Availability Zone where you created the snapshot.</p>
   */
  location?: _UnmarshalledResourceLocation;

  /**
   * <p>The tag keys and optional values for the resource. For more information about tags in Lightsail, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-tags">Lightsail Dev Guide</a>.</p>
   */
  tags?: Array<_UnmarshalledTag>;

  /**
   * <p>An array of disk objects containing information about all block storage disks.</p>
   */
  fromAttachedDisks?: Array<_UnmarshalledDisk>;
}
