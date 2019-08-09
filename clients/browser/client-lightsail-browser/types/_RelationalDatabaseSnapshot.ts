import {
  _ResourceLocation,
  _UnmarshalledResourceLocation
} from "./_ResourceLocation";
import { _Tag, _UnmarshalledTag } from "./_Tag";

/**
 * <p>Describes a database snapshot.</p>
 */
export interface _RelationalDatabaseSnapshot {
  /**
   * <p>The name of the database snapshot.</p>
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the database snapshot.</p>
   */
  arn?: string;

  /**
   * <p>The support code for the database snapshot. Include this code in your email to support when you have questions about a database snapshot in Lightsail. This code enables our support team to look up your Lightsail information more easily.</p>
   */
  supportCode?: string;

  /**
   * <p>The timestamp when the database snapshot was created.</p>
   */
  createdAt?: Date | string | number;

  /**
   * <p>The Region name and Availability Zone where the database snapshot is located.</p>
   */
  location?: _ResourceLocation;

  /**
   * <p>The Lightsail resource type.</p>
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
   * <p>The software of the database snapshot (for example, <code>MySQL</code>)</p>
   */
  engine?: string;

  /**
   * <p>The database engine version for the database snapshot (for example, <code>5.7.23</code>).</p>
   */
  engineVersion?: string;

  /**
   * <p>The size of the disk in GB (for example, <code>32</code>) for the database snapshot.</p>
   */
  sizeInGb?: number;

  /**
   * <p>The state of the database snapshot.</p>
   */
  state?: string;

  /**
   * <p>The name of the source database from which the database snapshot was created.</p>
   */
  fromRelationalDatabaseName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the database from which the database snapshot was created.</p>
   */
  fromRelationalDatabaseArn?: string;

  /**
   * <p>The bundle ID of the database from which the database snapshot was created.</p>
   */
  fromRelationalDatabaseBundleId?: string;

  /**
   * <p>The blueprint ID of the database from which the database snapshot was created. A blueprint describes the major engine version of a database.</p>
   */
  fromRelationalDatabaseBlueprintId?: string;
}

export interface _UnmarshalledRelationalDatabaseSnapshot
  extends _RelationalDatabaseSnapshot {
  /**
   * <p>The timestamp when the database snapshot was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The Region name and Availability Zone where the database snapshot is located.</p>
   */
  location?: _UnmarshalledResourceLocation;

  /**
   * <p>The tag keys and optional values for the resource. For more information about tags in Lightsail, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-tags">Lightsail Dev Guide</a>.</p>
   */
  tags?: Array<_UnmarshalledTag>;
}
