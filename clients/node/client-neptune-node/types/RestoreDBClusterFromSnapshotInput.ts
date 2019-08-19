import { _Tag } from "./_Tag";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * RestoreDBClusterFromSnapshotInput shape
 */
export interface RestoreDBClusterFromSnapshotInput {
  /**
   * <p>Provides the list of EC2 Availability Zones that instances in the restored DB cluster can be created in.</p>
   */
  AvailabilityZones?: Array<string> | Iterable<string>;

  /**
   * <p>The name of the DB cluster to create from the DB snapshot or DB cluster snapshot. This parameter isn't case-sensitive.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens</p> </li> <li> <p>First character must be a letter</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens</p> </li> </ul> <p>Example: <code>my-snapshot-id</code> </p>
   */
  DBClusterIdentifier: string;

  /**
   * <p>The identifier for the DB snapshot or DB cluster snapshot to restore from.</p> <p>You can use either the name or the Amazon Resource Name (ARN) to specify a DB cluster snapshot. However, you can use only the ARN to specify a DB snapshot.</p> <p>Constraints:</p> <ul> <li> <p>Must match the identifier of an existing Snapshot.</p> </li> </ul>
   */
  SnapshotIdentifier: string;

  /**
   * <p>The database engine to use for the new DB cluster.</p> <p>Default: The same as source</p> <p>Constraint: Must be compatible with the engine of the source</p>
   */
  Engine: string;

  /**
   * <p>The version of the database engine to use for the new DB cluster.</p>
   */
  EngineVersion?: string;

  /**
   * <p>The port number on which the new DB cluster accepts connections.</p> <p>Constraints: Value must be <code>1150-65535</code> </p> <p>Default: The same port as the original DB cluster.</p>
   */
  Port?: number;

  /**
   * <p>The name of the DB subnet group to use for the new DB cluster.</p> <p>Constraints: If supplied, must match the name of an existing DBSubnetGroup.</p> <p>Example: <code>mySubnetgroup</code> </p>
   */
  DBSubnetGroupName?: string;

  /**
   * <p>Not supported.</p>
   */
  DatabaseName?: string;

  /**
   * <p>The name of the option group to use for the restored DB cluster.</p>
   */
  OptionGroupName?: string;

  /**
   * <p>A list of VPC security groups that the new DB cluster will belong to.</p>
   */
  VpcSecurityGroupIds?: Array<string> | Iterable<string>;

  /**
   * <p>The tags to be assigned to the restored DB cluster.</p>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;

  /**
   * <p>The AWS KMS key identifier to use when restoring an encrypted DB cluster from a DB snapshot or DB cluster snapshot.</p> <p>The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption key. If you are restoring a DB cluster with the same AWS account that owns the KMS encryption key used to encrypt the new DB cluster, then you can use the KMS key alias instead of the ARN for the KMS encryption key.</p> <p>If you do not specify a value for the <code>KmsKeyId</code> parameter, then the following will occur:</p> <ul> <li> <p>If the DB snapshot or DB cluster snapshot in <code>SnapshotIdentifier</code> is encrypted, then the restored DB cluster is encrypted using the KMS key that was used to encrypt the DB snapshot or DB cluster snapshot.</p> </li> <li> <p>If the DB snapshot or DB cluster snapshot in <code>SnapshotIdentifier</code> is not encrypted, then the restored DB cluster is not encrypted.</p> </li> </ul>
   */
  KmsKeyId?: string;

  /**
   * <p>True to enable mapping of AWS Identity and Access Management (IAM) accounts to database accounts, and otherwise false.</p> <p>Default: <code>false</code> </p>
   */
  EnableIAMDatabaseAuthentication?: boolean;

  /**
   * <p>The list of logs that the restored DB cluster is to export to Amazon CloudWatch Logs.</p>
   */
  EnableCloudwatchLogsExports?: Array<string> | Iterable<string>;

  /**
   * <p>The name of the DB cluster parameter group to associate with the new DB cluster.</p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match the name of an existing DBClusterParameterGroup.</p> </li> </ul>
   */
  DBClusterParameterGroupName?: string;

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
