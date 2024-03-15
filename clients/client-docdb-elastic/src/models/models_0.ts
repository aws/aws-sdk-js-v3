// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { DocDBElasticServiceException as __BaseException } from "./DocDBElasticServiceException";

/**
 * <p>An exception that occurs when there are not sufficient permissions to perform an action.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
  }
}

/**
 * @public
 * @enum
 */
export const Auth = {
  PLAIN_TEXT: "PLAIN_TEXT",
  SECRET_ARN: "SECRET_ARN",
} as const;

/**
 * @public
 */
export type Auth = (typeof Auth)[keyof typeof Auth];

/**
 * <p>There was an access conflict.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * <p>The ID of the resource where there was an access conflict.</p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p>The type of the resource where there was an access conflict.</p>
   * @public
   */
  resourceType: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
  }
}

/**
 * @public
 */
export interface CopyClusterSnapshotInput {
  /**
   * <p>The Amazon Resource Name (ARN) identifier of the elastic cluster snapshot.</p>
   * @public
   */
  snapshotArn: string | undefined;

  /**
   * <p>The identifier of the new elastic cluster snapshot to create from the source cluster snapshot.
   *       This parameter is not case sensitive.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p>
   *             </li>
   *             <li>
   *                <p>The first character must be a letter.</p>
   *             </li>
   *             <li>
   *                <p>Cannot end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>elastic-cluster-snapshot-5</code>
   *          </p>
   * @public
   */
  targetSnapshotName: string | undefined;

  /**
   * <p>The Amazon Web Services KMS key ID for an encrypted elastic cluster snapshot.
   *       The Amazon Web Services KMS key ID is the Amazon Resource Name (ARN), Amazon Web Services KMS key identifier, or the Amazon Web Services KMS key alias for the Amazon Web Services KMS encryption key.</p>
   *          <p>If you copy an encrypted elastic cluster snapshot from your Amazon Web Services account, you can specify a value for <code>KmsKeyId</code> to encrypt the copy with a new Amazon Web ServicesS KMS encryption key.
   *       If you don't specify a value for <code>KmsKeyId</code>, then the copy of the elastic cluster snapshot is encrypted with the same <code>AWS</code> KMS key as the source elastic cluster snapshot.</p>
   *          <p>To copy an encrypted elastic cluster snapshot to another Amazon Web Services region, set <code>KmsKeyId</code> to the Amazon Web Services KMS key ID that you want to use to encrypt the copy of the elastic cluster snapshot in the destination region.
   *       Amazon Web Services KMS encryption keys are specific to the Amazon Web Services region that they are created in, and you can't use encryption keys from one Amazon Web Services region in another Amazon Web Services region.</p>
   *          <p>If you copy an unencrypted elastic cluster snapshot and specify a value for the <code>KmsKeyId</code> parameter, an error is returned.</p>
   * @public
   */
  kmsKeyId?: string;

  /**
   * <p>Set to <code>true</code> to copy all tags from the source cluster snapshot to the target elastic cluster snapshot.
   *       The default is <code>false</code>.</p>
   * @public
   */
  copyTags?: boolean;

  /**
   * <p>The tags to be assigned to the elastic cluster snapshot.</p>
   * @public
   */
  tags?: Record<string, string>;
}

/**
 * @public
 * @enum
 */
export const SnapshotType = {
  AUTOMATED: "AUTOMATED",
  MANUAL: "MANUAL",
} as const;

/**
 * @public
 */
export type SnapshotType = (typeof SnapshotType)[keyof typeof SnapshotType];

/**
 * @public
 * @enum
 */
export const Status = {
  ACTIVE: "ACTIVE",
  COPYING: "COPYING",
  CREATING: "CREATING",
  DELETING: "DELETING",
  INACCESSIBLE_ENCRYPTION_CREDS: "INACCESSIBLE_ENCRYPTION_CREDS",
  INACCESSIBLE_SECRET_ARN: "INACCESSIBLE_SECRET_ARN",
  INACCESSIBLE_VPC_ENDPOINT: "INACCESSIBLE_VPC_ENDPOINT",
  INCOMPATIBLE_NETWORK: "INCOMPATIBLE_NETWORK",
  INVALID_SECURITY_GROUP_ID: "INVALID_SECURITY_GROUP_ID",
  INVALID_SUBNET_ID: "INVALID_SUBNET_ID",
  IP_ADDRESS_LIMIT_EXCEEDED: "IP_ADDRESS_LIMIT_EXCEEDED",
  MERGING: "MERGING",
  MODIFYING: "MODIFYING",
  SPLITTING: "SPLITTING",
  STARTING: "STARTING",
  STOPPED: "STOPPED",
  STOPPING: "STOPPING",
  UPDATING: "UPDATING",
  VPC_ENDPOINT_LIMIT_EXCEEDED: "VPC_ENDPOINT_LIMIT_EXCEEDED",
} as const;

/**
 * @public
 */
export type Status = (typeof Status)[keyof typeof Status];

/**
 * <p>Returns information about a specific elastic cluster snapshot.</p>
 * @public
 */
export interface ClusterSnapshot {
  /**
   * <p>The Amazon EC2 subnet IDs for the elastic cluster.</p>
   * @public
   */
  subnetIds: string[] | undefined;

  /**
   * <p>The name of the elastic cluster snapshot.</p>
   * @public
   */
  snapshotName: string | undefined;

  /**
   * <p>The ARN identifier of the elastic cluster snapshot.</p>
   * @public
   */
  snapshotArn: string | undefined;

  /**
   * <p>The time when the elastic cluster snapshot was created in Universal Coordinated Time (UTC).</p>
   * @public
   */
  snapshotCreationTime: string | undefined;

  /**
   * <p>The ARN identifier of the elastic cluster.</p>
   * @public
   */
  clusterArn: string | undefined;

  /**
   * <p>The time when the elastic cluster was created in Universal Coordinated Time (UTC).</p>
   * @public
   */
  clusterCreationTime: string | undefined;

  /**
   * <p>The status of the elastic cluster snapshot.</p>
   * @public
   */
  status: Status | undefined;

  /**
   * <p>A list of EC2 VPC security groups to associate with the elastic cluster.</p>
   * @public
   */
  vpcSecurityGroupIds: string[] | undefined;

  /**
   * <p>The name of the elastic cluster administrator.</p>
   * @public
   */
  adminUserName: string | undefined;

  /**
   * <p>The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption key.
   *       If you are creating a cluster using the same Amazon account that owns this KMS encryption key, you can use the KMS key alias instead of the ARN as the KMS encryption key.
   *       If an encryption key is not specified here, Amazon DocumentDB uses the default encryption key that KMS creates for your account.
   *       Your account has a different default encryption key for each Amazon Region.
   *     </p>
   * @public
   */
  kmsKeyId: string | undefined;

  /**
   * <p>The type of cluster snapshots to be returned.
   *       You can specify one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>automated</code> - Return all cluster snapshots that Amazon DocumentDB has automatically created for your Amazon Web Services account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>manual</code> - Return all cluster snapshots that you have manually created for your Amazon Web Services account.</p>
   *             </li>
   *          </ul>
   * @public
   */
  snapshotType?: SnapshotType;
}

/**
 * @public
 */
export interface CopyClusterSnapshotOutput {
  /**
   * <p>Returns information about a specific elastic cluster snapshot.</p>
   * @public
   */
  snapshot: ClusterSnapshot | undefined;
}

/**
 * <p>There was an internal server error.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  $retryable = {};
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
  }
}

/**
 * <p>The specified resource could not be located.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * <p>The ID of the resource that could not be located.</p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p>The type of the resource that could not be found.</p>
   * @public
   */
  resourceType: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
  }
}

/**
 * <p>The service quota for the action was exceeded.</p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceQuotaExceededException, __BaseException>) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
  }
}

/**
 * <p>ThrottlingException will be thrown when request was denied due to request throttling.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  $retryable = {};
  /**
   * <p>The number of seconds to wait before retrying the operation.</p>
   * @public
   */
  retryAfterSeconds?: number;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
    this.retryAfterSeconds = opts.retryAfterSeconds;
  }
}

/**
 * <p>A specific field in which a given validation exception occurred.</p>
 * @public
 */
export interface ValidationExceptionField {
  /**
   * <p>The name of the field where the validation exception occurred.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>An error message describing the validation exception in this field.</p>
   * @public
   */
  message: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  CANNOT_PARSE: "cannotParse",
  FIELD_VALIDATION_FAILED: "fieldValidationFailed",
  OTHER: "other",
  UNKNOWN_OPERATION: "unknownOperation",
} as const;

/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * <p>A structure defining a validation exception.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * <p>The reason why the validation exception occurred (one of <code>unknownOperation</code>,
   *       <code>cannotParse</code>, <code>fieldValidationFailed</code>, or <code>other</code>).</p>
   * @public
   */
  reason: ValidationExceptionReason | undefined;

  /**
   * <p>A list of the fields in which the validation exception occurred.</p>
   * @public
   */
  fieldList?: ValidationExceptionField[];

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
    this.reason = opts.reason;
    this.fieldList = opts.fieldList;
  }
}

/**
 * @public
 */
export interface CreateClusterInput {
  /**
   * <p>The name of the new elastic cluster. This parameter is stored as
   *       a lowercase string.</p>
   *          <p>
   *             <i>Constraints</i>:</p>
   *          <ul>
   *             <li>
   *                <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p>
   *             </li>
   *             <li>
   *                <p>The first character must be a letter.</p>
   *             </li>
   *             <li>
   *                <p>Cannot end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *          </ul>
   *          <p>
   *             <i>Example</i>: <code>my-cluster</code>
   *          </p>
   * @public
   */
  clusterName: string | undefined;

  /**
   * <p>The authentication type used to determine where to fetch the password used for accessing the elastic cluster.
   *       Valid types are <code>PLAIN_TEXT</code> or <code>SECRET_ARN</code>.</p>
   * @public
   */
  authType: Auth | undefined;

  /**
   * <p>The name of the Amazon DocumentDB elastic clusters administrator.</p>
   *          <p>
   *             <i>Constraints</i>:</p>
   *          <ul>
   *             <li>
   *                <p>Must be from 1 to 63 letters or numbers.</p>
   *             </li>
   *             <li>
   *                <p>The first character must be a letter.</p>
   *             </li>
   *             <li>
   *                <p>Cannot be a reserved word.</p>
   *             </li>
   *          </ul>
   * @public
   */
  adminUserName: string | undefined;

  /**
   * <p>The password for the Amazon DocumentDB elastic clusters administrator. The password can contain any printable ASCII characters.</p>
   *          <p>
   *             <i>Constraints</i>:</p>
   *          <ul>
   *             <li>
   *                <p>Must contain from 8 to 100 characters.</p>
   *             </li>
   *             <li>
   *                <p>Cannot contain a forward slash (/), double quote ("), or the "at" symbol (@).</p>
   *             </li>
   *          </ul>
   * @public
   */
  adminUserPassword: string | undefined;

  /**
   * <p>The number of vCPUs assigned to each elastic cluster shard. Maximum is 64. Allowed values are 2, 4, 8, 16, 32, 64.</p>
   * @public
   */
  shardCapacity: number | undefined;

  /**
   * <p>The number of shards assigned to the elastic cluster. Maximum is 32.</p>
   * @public
   */
  shardCount: number | undefined;

  /**
   * <p>A list of EC2 VPC security groups to associate with the new
   *       elastic cluster.</p>
   * @public
   */
  vpcSecurityGroupIds?: string[];

  /**
   * <p>The Amazon EC2 subnet IDs for the new elastic cluster.</p>
   * @public
   */
  subnetIds?: string[];

  /**
   * <p>The KMS key identifier to use to encrypt the new elastic cluster.</p>
   *          <p>The KMS key identifier is the Amazon Resource Name (ARN) for the KMS
   *         encryption key. If you are creating a cluster using the same Amazon account
   *         that owns this KMS encryption key, you can use the KMS key alias instead
   *         of the ARN as the KMS encryption key.</p>
   *          <p>If an encryption key is not specified, Amazon DocumentDB uses the
   *         default encryption key that KMS creates for your account. Your account
   *         has a different default encryption key for each Amazon Region.</p>
   * @public
   */
  kmsKeyId?: string;

  /**
   * <p>The client token for the elastic cluster.</p>
   * @public
   */
  clientToken?: string;

  /**
   * <p>The weekly time range during which system maintenance can occur,
   *       in Universal Coordinated Time (UTC).</p>
   *          <p>
   *             <i>Format</i>: <code>ddd:hh24:mi-ddd:hh24:mi</code>
   *          </p>
   *          <p>
   *             <i>Default</i>: a 30-minute window selected at random from an 8-hour block of time for each Amazon Web Services Region, occurring on a random day of the week.</p>
   *          <p>
   *             <i>Valid days</i>: Mon, Tue, Wed, Thu, Fri, Sat, Sun</p>
   *          <p>
   *             <i>Constraints</i>: Minimum 30-minute window.</p>
   * @public
   */
  preferredMaintenanceWindow?: string;

  /**
   * <p>The tags to be assigned to the new elastic cluster.</p>
   * @public
   */
  tags?: Record<string, string>;

  /**
   * <p>The number of days for which automatic snapshots are retained.</p>
   * @public
   */
  backupRetentionPeriod?: number;

  /**
   * <p>The daily time range during which automated backups are created if automated backups are enabled, as determined by the <code>backupRetentionPeriod</code>.</p>
   * @public
   */
  preferredBackupWindow?: string;

  /**
   * <p>The number of replica instances applying to all shards in the elastic cluster.
   *       A <code>shardInstanceCount</code> value of 1 means there is one writer instance, and any additional instances are replicas that can be used for reads and to improve availability.</p>
   * @public
   */
  shardInstanceCount?: number;
}

/**
 * <p>The name of the shard.</p>
 * @public
 */
export interface Shard {
  /**
   * <p>The ID of the shard.</p>
   * @public
   */
  shardId: string | undefined;

  /**
   * <p>The time when the shard was created in Universal Coordinated Time (UTC).</p>
   * @public
   */
  createTime: string | undefined;

  /**
   * <p>The current status of the shard.</p>
   * @public
   */
  status: Status | undefined;
}

/**
 * <p>Returns information about a specific elastic cluster.</p>
 * @public
 */
export interface Cluster {
  /**
   * <p>The name of the elastic cluster.</p>
   * @public
   */
  clusterName: string | undefined;

  /**
   * <p>The ARN identifier of the elastic cluster.</p>
   * @public
   */
  clusterArn: string | undefined;

  /**
   * <p>The status of the elastic cluster.</p>
   * @public
   */
  status: Status | undefined;

  /**
   * <p>The URL used to connect to the elastic cluster.</p>
   * @public
   */
  clusterEndpoint: string | undefined;

  /**
   * <p>The time when the elastic cluster was created in Universal Coordinated Time (UTC).</p>
   * @public
   */
  createTime: string | undefined;

  /**
   * <p>The name of the elastic cluster administrator.</p>
   * @public
   */
  adminUserName: string | undefined;

  /**
   * <p>The authentication type for the elastic cluster.</p>
   * @public
   */
  authType: Auth | undefined;

  /**
   * <p>The number of vCPUs assigned to each elastic cluster shard. Maximum is 64.
   *       Allowed values are 2, 4, 8, 16, 32, 64.</p>
   * @public
   */
  shardCapacity: number | undefined;

  /**
   * <p>The number of shards assigned to the elastic cluster. Maximum is 32.</p>
   * @public
   */
  shardCount: number | undefined;

  /**
   * <p>A list of EC2 VPC security groups associated with thie elastic cluster.</p>
   * @public
   */
  vpcSecurityGroupIds: string[] | undefined;

  /**
   * <p>The Amazon EC2 subnet IDs for the elastic cluster.</p>
   * @public
   */
  subnetIds: string[] | undefined;

  /**
   * <p>The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).</p>
   *          <p>
   *             <i>Format</i>: <code>ddd:hh24:mi-ddd:hh24:mi</code>
   *          </p>
   * @public
   */
  preferredMaintenanceWindow: string | undefined;

  /**
   * <p>The KMS key identifier to use to encrypt the elastic cluster.</p>
   * @public
   */
  kmsKeyId: string | undefined;

  /**
   * <p>The total number of shards in the cluster.</p>
   * @public
   */
  shards?: Shard[];

  /**
   * <p>The number of days for which automatic snapshots are retained.</p>
   * @public
   */
  backupRetentionPeriod?: number;

  /**
   * <p>The daily time range during which automated backups are created if automated backups are enabled, as determined by <code>backupRetentionPeriod</code>.</p>
   * @public
   */
  preferredBackupWindow?: string;

  /**
   * <p>The number of replica instances applying to all shards in the cluster.
   *       A <code>shardInstanceCount</code> value of 1 means there is one writer instance, and any additional instances are replicas that can be used for reads and to improve availability.</p>
   * @public
   */
  shardInstanceCount?: number;
}

/**
 * @public
 */
export interface CreateClusterOutput {
  /**
   * <p>The new elastic cluster that has been created.</p>
   * @public
   */
  cluster: Cluster | undefined;
}

/**
 * @public
 */
export interface CreateClusterSnapshotInput {
  /**
   * <p>The ARN identifier of the elastic cluster of which you want to create a snapshot.</p>
   * @public
   */
  clusterArn: string | undefined;

  /**
   * <p>The name of the new elastic cluster snapshot.</p>
   * @public
   */
  snapshotName: string | undefined;

  /**
   * <p>The tags to be assigned to the new elastic cluster snapshot.</p>
   * @public
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateClusterSnapshotOutput {
  /**
   * <p>Returns information about the new elastic cluster snapshot.</p>
   * @public
   */
  snapshot: ClusterSnapshot | undefined;
}

/**
 * @public
 */
export interface DeleteClusterInput {
  /**
   * <p>The ARN identifier of the elastic cluster that is to be deleted.</p>
   * @public
   */
  clusterArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteClusterOutput {
  /**
   * <p>Returns information about the newly deleted elastic cluster.</p>
   * @public
   */
  cluster: Cluster | undefined;
}

/**
 * @public
 */
export interface DeleteClusterSnapshotInput {
  /**
   * <p>The ARN identifier of the elastic cluster snapshot that is to be deleted.</p>
   * @public
   */
  snapshotArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteClusterSnapshotOutput {
  /**
   * <p>Returns information about the newly deleted elastic cluster snapshot.</p>
   * @public
   */
  snapshot: ClusterSnapshot | undefined;
}

/**
 * @public
 */
export interface GetClusterInput {
  /**
   * <p>The ARN identifier of the elastic cluster.</p>
   * @public
   */
  clusterArn: string | undefined;
}

/**
 * @public
 */
export interface GetClusterOutput {
  /**
   * <p>Returns information about a specific elastic cluster.</p>
   * @public
   */
  cluster: Cluster | undefined;
}

/**
 * @public
 */
export interface GetClusterSnapshotInput {
  /**
   * <p>The ARN identifier of the elastic cluster snapshot.</p>
   * @public
   */
  snapshotArn: string | undefined;
}

/**
 * @public
 */
export interface GetClusterSnapshotOutput {
  /**
   * <p>Returns information about a specific elastic cluster snapshot.</p>
   * @public
   */
  snapshot: ClusterSnapshot | undefined;
}

/**
 * @public
 */
export interface ListClustersInput {
  /**
   * <p>A pagination token provided by a previous request.
   *       If this parameter is specified, the response includes only records beyond this token, up to the value specified by <code>max-results</code>.</p>
   *          <p>If there is no more data in the responce, the <code>nextToken</code> will not be returned.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The maximum number of elastic cluster snapshot results to receive in the response.</p>
   * @public
   */
  maxResults?: number;
}

/**
 * <p>A list of Amazon DocumentDB elastic clusters.</p>
 * @public
 */
export interface ClusterInList {
  /**
   * <p>The name of the elastic cluster.</p>
   * @public
   */
  clusterName: string | undefined;

  /**
   * <p>The ARN identifier of the elastic cluster.</p>
   * @public
   */
  clusterArn: string | undefined;

  /**
   * <p>The status of the elastic cluster.</p>
   * @public
   */
  status: Status | undefined;
}

/**
 * @public
 */
export interface ListClustersOutput {
  /**
   * <p>A list of Amazon DocumentDB elastic clusters.</p>
   * @public
   */
  clusters?: ClusterInList[];

  /**
   * <p>A pagination token provided by a previous request.
   *       If this parameter is specified, the response includes only records beyond this token, up to the value specified by <code>max-results</code>.</p>
   *          <p>If there is no more data in the responce, the <code>nextToken</code> will not be returned.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListClusterSnapshotsInput {
  /**
   * <p>The ARN identifier of the elastic cluster.</p>
   * @public
   */
  clusterArn?: string;

  /**
   * <p>A pagination token provided by a previous request.
   *       If this parameter is specified, the response includes only records beyond this token, up to the value specified by <code>max-results</code>.</p>
   *          <p>If there is no more data in the responce, the <code>nextToken</code> will not be returned.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The maximum number of elastic cluster snapshot results to receive in the response.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>The type of cluster snapshots to be returned. You can specify one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>automated</code> - Return all cluster snapshots that Amazon DocumentDB has automatically created for your Amazon Web Services account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>manual</code> - Return all cluster snapshots that you have manually created for your Amazon Web Services account.</p>
   *             </li>
   *          </ul>
   * @public
   */
  snapshotType?: string;
}

/**
 * <p>A list of elastic cluster snapshots.</p>
 * @public
 */
export interface ClusterSnapshotInList {
  /**
   * <p>The name of the elastic cluster snapshot.</p>
   * @public
   */
  snapshotName: string | undefined;

  /**
   * <p>The ARN identifier of the elastic cluster snapshot.</p>
   * @public
   */
  snapshotArn: string | undefined;

  /**
   * <p>The ARN identifier of the elastic cluster.</p>
   * @public
   */
  clusterArn: string | undefined;

  /**
   * <p>The status of the elastic cluster snapshot.</p>
   * @public
   */
  status: Status | undefined;

  /**
   * <p>The time when the elastic cluster snapshot was created in Universal Coordinated Time (UTC).</p>
   * @public
   */
  snapshotCreationTime: string | undefined;
}

/**
 * @public
 */
export interface ListClusterSnapshotsOutput {
  /**
   * <p>A list of snapshots for a specified elastic cluster.</p>
   * @public
   */
  snapshots?: ClusterSnapshotInList[];

  /**
   * <p>A pagination token provided by a previous request.
   *       If this parameter is specified, the response includes only records beyond this token, up to the value specified by <code>max-results</code>.</p>
   *          <p>If there is no more data in the responce, the <code>nextToken</code> will not be returned.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The ARN identifier of the elastic cluster resource.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The list of tags for the specified elastic cluster resource.</p>
   * @public
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface RestoreClusterFromSnapshotInput {
  /**
   * <p>The name of the elastic cluster.</p>
   * @public
   */
  clusterName: string | undefined;

  /**
   * <p>The ARN identifier of the elastic cluster snapshot.</p>
   * @public
   */
  snapshotArn: string | undefined;

  /**
   * <p>A list of EC2 VPC security groups to associate with the elastic cluster.</p>
   * @public
   */
  vpcSecurityGroupIds?: string[];

  /**
   * <p>The Amazon EC2 subnet IDs for the elastic cluster.</p>
   * @public
   */
  subnetIds?: string[];

  /**
   * <p>The KMS key identifier to use to encrypt the new Amazon DocumentDB elastic clusters cluster.</p>
   *          <p>The KMS key identifier is the Amazon Resource Name (ARN) for the KMS
   *         encryption key. If you are creating a cluster using the same Amazon account
   *         that owns this KMS encryption key, you can use the KMS key alias instead
   *         of the ARN as the KMS encryption key.</p>
   *          <p>If an encryption key is not specified here, Amazon DocumentDB uses the
   *         default encryption key that KMS creates for your account. Your account
   *         has a different default encryption key for each Amazon Region.</p>
   * @public
   */
  kmsKeyId?: string;

  /**
   * <p>A list of the tag names to be assigned to the restored elastic cluster, in the form of an array of key-value pairs in which the key is the tag name and the value is the key value.</p>
   * @public
   */
  tags?: Record<string, string>;

  /**
   * <p>The capacity of each shard in the new restored elastic cluster.</p>
   * @public
   */
  shardCapacity?: number;

  /**
   * <p>The number of replica instances applying to all shards in the elastic cluster.
   *       A <code>shardInstanceCount</code> value of 1 means there is one writer instance, and any additional instances are replicas that can be used for reads and to improve availability.</p>
   * @public
   */
  shardInstanceCount?: number;
}

/**
 * @public
 */
export interface RestoreClusterFromSnapshotOutput {
  /**
   * <p>Returns information about a the restored elastic cluster.</p>
   * @public
   */
  cluster: Cluster | undefined;
}

/**
 * @public
 */
export interface StartClusterInput {
  /**
   * <p>The ARN identifier of the elastic cluster.</p>
   * @public
   */
  clusterArn: string | undefined;
}

/**
 * @public
 */
export interface StartClusterOutput {
  /**
   * <p>Returns information about a specific elastic cluster.</p>
   * @public
   */
  cluster: Cluster | undefined;
}

/**
 * @public
 */
export interface StopClusterInput {
  /**
   * <p>The ARN identifier of the elastic cluster.</p>
   * @public
   */
  clusterArn: string | undefined;
}

/**
 * @public
 */
export interface StopClusterOutput {
  /**
   * <p>Returns information about a specific elastic cluster.</p>
   * @public
   */
  cluster: Cluster | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The ARN identifier of the elastic cluster resource.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The tags that are assigned to the elastic cluster resource.</p>
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The ARN identifier of the elastic cluster resource.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The tag keys to be removed from the elastic cluster resource.</p>
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdateClusterInput {
  /**
   * <p>The ARN identifier of the elastic cluster.</p>
   * @public
   */
  clusterArn: string | undefined;

  /**
   * <p>The authentication type used to determine where to fetch the password used for accessing the elastic cluster.
   *       Valid types are <code>PLAIN_TEXT</code> or <code>SECRET_ARN</code>.</p>
   * @public
   */
  authType?: Auth;

  /**
   * <p>The number of vCPUs assigned to each elastic cluster shard.
   *       Maximum is 64. Allowed values are 2, 4, 8, 16, 32, 64.</p>
   * @public
   */
  shardCapacity?: number;

  /**
   * <p>The number of shards assigned to the elastic cluster. Maximum is 32.</p>
   * @public
   */
  shardCount?: number;

  /**
   * <p>A list of EC2 VPC security groups to associate with the elastic cluster.</p>
   * @public
   */
  vpcSecurityGroupIds?: string[];

  /**
   * <p>The Amazon EC2 subnet IDs for the elastic cluster.</p>
   * @public
   */
  subnetIds?: string[];

  /**
   * <p>The password associated with the elastic cluster administrator.
   *       This password can contain any printable ASCII character except forward slash (/), double quote ("), or the "at" symbol (@).</p>
   *          <p>
   *             <i>Constraints</i>: Must contain from 8 to 100 characters.</p>
   * @public
   */
  adminUserPassword?: string;

  /**
   * <p>The client token for the elastic cluster.</p>
   * @public
   */
  clientToken?: string;

  /**
   * <p>The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).</p>
   *          <p>
   *             <i>Format</i>: <code>ddd:hh24:mi-ddd:hh24:mi</code>
   *          </p>
   *          <p>
   *             <i>Default</i>: a 30-minute window selected at random from an 8-hour block of time for each Amazon Web Services Region, occurring on a random day of the week.</p>
   *          <p>
   *             <i>Valid days</i>: Mon, Tue, Wed, Thu, Fri, Sat, Sun</p>
   *          <p>
   *             <i>Constraints</i>: Minimum 30-minute window.</p>
   * @public
   */
  preferredMaintenanceWindow?: string;

  /**
   * <p>The number of days for which automatic snapshots are retained.</p>
   * @public
   */
  backupRetentionPeriod?: number;

  /**
   * <p>The daily time range during which automated backups are created if automated backups are enabled, as determined by the <code>backupRetentionPeriod</code>.</p>
   * @public
   */
  preferredBackupWindow?: string;

  /**
   * <p>The number of replica instances applying to all shards in the elastic cluster.
   *       A <code>shardInstanceCount</code> value of 1 means there is one writer instance, and any additional instances are replicas that can be used for reads and to improve availability.</p>
   * @public
   */
  shardInstanceCount?: number;
}

/**
 * @public
 */
export interface UpdateClusterOutput {
  /**
   * <p>Returns information about the updated elastic cluster.</p>
   * @public
   */
  cluster: Cluster | undefined;
}

/**
 * @internal
 */
export const CreateClusterInputFilterSensitiveLog = (obj: CreateClusterInput): any => ({
  ...obj,
  ...(obj.adminUserPassword && { adminUserPassword: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateClusterInputFilterSensitiveLog = (obj: UpdateClusterInput): any => ({
  ...obj,
  ...(obj.adminUserPassword && { adminUserPassword: SENSITIVE_STRING }),
});
