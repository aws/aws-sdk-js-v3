import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p/>
 */
export interface ModifyReplicationInstanceInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the replication instance.</p>
   */
  ReplicationInstanceArn: string;

  /**
   * <p>The amount of storage (in gigabytes) to be allocated for the replication instance.</p>
   */
  AllocatedStorage?: number;

  /**
   * <p>Indicates whether the changes should be applied immediately or during the next maintenance window.</p>
   */
  ApplyImmediately?: boolean;

  /**
   * <p>The compute and memory capacity of the replication instance.</p> <p> Valid Values: <code>dms.t2.micro | dms.t2.small | dms.t2.medium | dms.t2.large | dms.c4.large | dms.c4.xlarge | dms.c4.2xlarge | dms.c4.4xlarge </code> </p>
   */
  ReplicationInstanceClass?: string;

  /**
   * <p> Specifies the VPC security group to be used with the replication instance. The VPC security group must work with the VPC containing the replication instance. </p>
   */
  VpcSecurityGroupIds?: Array<string> | Iterable<string>;

  /**
   * <p>The weekly time range (in UTC) during which system maintenance can occur, which might result in an outage. Changing this parameter does not result in an outage, except in the following situation, and the change is asynchronously applied as soon as possible. If moving this window to the current time, there must be at least 30 minutes between the current time and end of the window to ensure pending changes are applied.</p> <p>Default: Uses existing setting</p> <p>Format: ddd:hh24:mi-ddd:hh24:mi</p> <p>Valid Days: Mon | Tue | Wed | Thu | Fri | Sat | Sun</p> <p>Constraints: Must be at least 30 minutes</p>
   */
  PreferredMaintenanceWindow?: string;

  /**
   * <p> Specifies whether the replication instance is a Multi-AZ deployment. You cannot set the <code>AvailabilityZone</code> parameter if the Multi-AZ parameter is set to <code>true</code>. </p>
   */
  MultiAZ?: boolean;

  /**
   * <p>The engine version number of the replication instance.</p>
   */
  EngineVersion?: string;

  /**
   * <p>Indicates that major version upgrades are allowed. Changing this parameter does not result in an outage, and the change is asynchronously applied as soon as possible.</p> <p>This parameter must be set to <code>true</code> when specifying a value for the <code>EngineVersion</code> parameter that is a different major version than the replication instance's current version.</p>
   */
  AllowMajorVersionUpgrade?: boolean;

  /**
   * <p> Indicates that minor version upgrades will be applied automatically to the replication instance during the maintenance window. Changing this parameter does not result in an outage except in the following case and the change is asynchronously applied as soon as possible. An outage will result if this parameter is set to <code>true</code> during the maintenance window, and a newer minor version is available, and AWS DMS has enabled auto patching for that engine version. </p>
   */
  AutoMinorVersionUpgrade?: boolean;

  /**
   * <p>The replication instance identifier. This parameter is stored as a lowercase string.</p>
   */
  ReplicationInstanceIdentifier?: string;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
