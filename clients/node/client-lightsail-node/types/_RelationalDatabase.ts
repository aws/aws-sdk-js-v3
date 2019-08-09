import {
  _ResourceLocation,
  _UnmarshalledResourceLocation
} from "./_ResourceLocation";
import { _Tag, _UnmarshalledTag } from "./_Tag";
import {
  _RelationalDatabaseHardware,
  _UnmarshalledRelationalDatabaseHardware
} from "./_RelationalDatabaseHardware";
import {
  _PendingModifiedRelationalDatabaseValues,
  _UnmarshalledPendingModifiedRelationalDatabaseValues
} from "./_PendingModifiedRelationalDatabaseValues";
import {
  _RelationalDatabaseEndpoint,
  _UnmarshalledRelationalDatabaseEndpoint
} from "./_RelationalDatabaseEndpoint";
import {
  _PendingMaintenanceAction,
  _UnmarshalledPendingMaintenanceAction
} from "./_PendingMaintenanceAction";

/**
 * <p>Describes a database.</p>
 */
export interface _RelationalDatabase {
  /**
   * <p>The unique name of the database resource in Lightsail.</p>
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the database.</p>
   */
  arn?: string;

  /**
   * <p>The support code for the database. Include this code in your email to support when you have questions about a database in Lightsail. This code enables our support team to look up your Lightsail information more easily.</p>
   */
  supportCode?: string;

  /**
   * <p>The timestamp when the database was created. Formatted in Unix time.</p>
   */
  createdAt?: Date | string | number;

  /**
   * <p>The Region name and Availability Zone where the database is located.</p>
   */
  location?: _ResourceLocation;

  /**
   * <p>The Lightsail resource type for the database (for example, <code>RelationalDatabase</code>).</p>
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
   * <p>The blueprint ID for the database. A blueprint describes the major engine version of a database.</p>
   */
  relationalDatabaseBlueprintId?: string;

  /**
   * <p>The bundle ID for the database. A bundle describes the performance specifications for your database.</p>
   */
  relationalDatabaseBundleId?: string;

  /**
   * <p>The name of the master database created when the Lightsail database resource is created.</p>
   */
  masterDatabaseName?: string;

  /**
   * <p>Describes the hardware of the database.</p>
   */
  hardware?: _RelationalDatabaseHardware;

  /**
   * <p>Describes the current state of the database.</p>
   */
  state?: string;

  /**
   * <p>Describes the secondary Availability Zone of a high availability database.</p> <p>The secondary database is used for failover support of a high availability database.</p>
   */
  secondaryAvailabilityZone?: string;

  /**
   * <p>A Boolean value indicating whether automated backup retention is enabled for the database.</p>
   */
  backupRetentionEnabled?: boolean;

  /**
   * <p>Describes pending database value modifications.</p>
   */
  pendingModifiedValues?: _PendingModifiedRelationalDatabaseValues;

  /**
   * <p>The database software (for example, <code>MySQL</code>).</p>
   */
  engine?: string;

  /**
   * <p>The database engine version (for example, <code>5.7.23</code>).</p>
   */
  engineVersion?: string;

  /**
   * <p>The latest point in time to which the database can be restored. Formatted in Unix time.</p>
   */
  latestRestorableTime?: Date | string | number;

  /**
   * <p>The master user name of the database.</p>
   */
  masterUsername?: string;

  /**
   * <p>The status of parameter updates for the database.</p>
   */
  parameterApplyStatus?: string;

  /**
   * <p>The daily time range during which automated backups are created for the database (for example, <code>16:00-16:30</code>).</p>
   */
  preferredBackupWindow?: string;

  /**
   * <p>The weekly time range during which system maintenance can occur on the database.</p> <p>In the format <code>ddd:hh24:mi-ddd:hh24:mi</code>. For example, <code>Tue:17:00-Tue:17:30</code>.</p>
   */
  preferredMaintenanceWindow?: string;

  /**
   * <p>A Boolean value indicating whether the database is publicly accessible.</p>
   */
  publiclyAccessible?: boolean;

  /**
   * <p>The master endpoint for the database.</p>
   */
  masterEndpoint?: _RelationalDatabaseEndpoint;

  /**
   * <p>Describes the pending maintenance actions for the database.</p>
   */
  pendingMaintenanceActions?:
    | Array<_PendingMaintenanceAction>
    | Iterable<_PendingMaintenanceAction>;
}

export interface _UnmarshalledRelationalDatabase extends _RelationalDatabase {
  /**
   * <p>The timestamp when the database was created. Formatted in Unix time.</p>
   */
  createdAt?: Date;

  /**
   * <p>The Region name and Availability Zone where the database is located.</p>
   */
  location?: _UnmarshalledResourceLocation;

  /**
   * <p>The tag keys and optional values for the resource. For more information about tags in Lightsail, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-tags">Lightsail Dev Guide</a>.</p>
   */
  tags?: Array<_UnmarshalledTag>;

  /**
   * <p>Describes the hardware of the database.</p>
   */
  hardware?: _UnmarshalledRelationalDatabaseHardware;

  /**
   * <p>Describes pending database value modifications.</p>
   */
  pendingModifiedValues?: _UnmarshalledPendingModifiedRelationalDatabaseValues;

  /**
   * <p>The latest point in time to which the database can be restored. Formatted in Unix time.</p>
   */
  latestRestorableTime?: Date;

  /**
   * <p>The master endpoint for the database.</p>
   */
  masterEndpoint?: _UnmarshalledRelationalDatabaseEndpoint;

  /**
   * <p>Describes the pending maintenance actions for the database.</p>
   */
  pendingMaintenanceActions?: Array<_UnmarshalledPendingMaintenanceAction>;
}
