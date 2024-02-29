// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { DocDBElasticServiceException as __BaseException } from "./DocDBElasticServiceException";

/**
 * @public
 * <p>An exception that occurs when there are not sufficient permissions to perform an action.</p>
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
 * @public
 * <p>There was an access conflict.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The ID of the resource where there was an access conflict.</p>
   */
  resourceId: string | undefined;

  /**
   * @public
   * <p>The type of the resource where there was an access conflict.</p>
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
   * @public
   * <p>The Amazon Resource Name (ARN) identifier of the elastic cluster snapshot.</p>
   */
  snapshotArn: string | undefined;

  /**
   * @public
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
   */
  targetSnapshotName: string | undefined;

  /**
   * @public
   * <p>The Amazon Web Services KMS key ID for an encrypted elastic cluster snapshot.
   *       The Amazon Web Services KMS key ID is the Amazon Resource Name (ARN), Amazon Web Services KMS key identifier, or the Amazon Web Services KMS key alias for the Amazon Web Services KMS encryption key.</p>
   *          <p>If you copy an encrypted elastic cluster snapshot from your Amazon Web Services account, you can specify a value for <code>KmsKeyId</code> to encrypt the copy with a new Amazon Web ServicesS KMS encryption key.
   *       If you don't specify a value for <code>KmsKeyId</code>, then the copy of the elastic cluster snapshot is encrypted with the same <code>AWS</code> KMS key as the source elastic cluster snapshot.</p>
   *          <p>To copy an encrypted elastic cluster snapshot to another Amazon Web Services region, set <code>KmsKeyId</code> to the Amazon Web Services KMS key ID that you want to use to encrypt the copy of the elastic cluster snapshot in the destination region.
   *       Amazon Web Services KMS encryption keys are specific to the Amazon Web Services region that they are created in, and you can't use encryption keys from one Amazon Web Services region in another Amazon Web Services region.</p>
   *          <p>If you copy an unencrypted elastic cluster snapshot and specify a value for the <code>KmsKeyId</code> parameter, an error is returned.</p>
   */
  kmsKeyId?: string;

  /**
   * @public
   * <p>Set to <code>true</code> to copy all tags from the source cluster snapshot to the target elastic cluster snapshot.
   *       The default is <code>false</code>.</p>
   */
  copyTags?: boolean;

  /**
   * @public
   * <p>The tags to be assigned to the elastic cluster snapshot.</p>
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
 * @public
 * <p>Returns information about a specific elastic cluster snapshot.</p>
 */
export interface ClusterSnapshot {
  /**
   * @public
   * <p>The Amazon EC2 subnet IDs for the elastic cluster.</p>
   */
  subnetIds: string[] | undefined;

  /**
   * @public
   * <p>The name of the elastic cluster snapshot.</p>
   */
  snapshotName: string | undefined;

  /**
   * @public
   * <p>The ARN identifier of the elastic cluster snapshot.</p>
   */
  snapshotArn: string | undefined;

  /**
   * @public
   * <p>The time when the elastic cluster snapshot was created in Universal Coordinated Time (UTC).</p>
   */
  snapshotCreationTime: string | undefined;

  /**
   * @public
   * <p>The ARN identifier of the elastic cluster.</p>
   */
  clusterArn: string | undefined;

  /**
   * @public
   * <p>The time when the elastic cluster was created in Universal Coordinated Time (UTC).</p>
   */
  clusterCreationTime: string | undefined;

  /**
   * @public
   * <p>The status of the elastic cluster snapshot.</p>
   */
  status: Status | undefined;

  /**
   * @public
   * <p>A list of EC2 VPC security groups to associate with the elastic cluster.</p>
   */
  vpcSecurityGroupIds: string[] | undefined;

  /**
   * @public
   * <p>The name of the elastic cluster administrator.</p>
   */
  adminUserName: string | undefined;

  /**
   * @public
   * <p>The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption key.
   *       If you are creating a cluster using the same Amazon account that owns this KMS encryption key, you can use the KMS key alias instead of the ARN as the KMS encryption key.
   *       If an encryption key is not specified here, Amazon DocumentDB uses the default encryption key that KMS creates for your account.
   *       Your account has a different default encryption key for each Amazon Region.
   *     </p>
   */
  kmsKeyId: string | undefined;

  /**
   * @public
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
   */
  snapshotType?: SnapshotType;
}

/**
 * @public
 */
export interface CopyClusterSnapshotOutput {
  /**
   * @public
   * <p>Returns information about a specific elastic cluster snapshot.</p>
   */
  snapshot: ClusterSnapshot | undefined;
}

/**
 * @public
 * <p>There was an internal server error.</p>
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
 * @public
 * <p>The specified resource could not be located.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The ID of the resource that could not be located.</p>
   */
  resourceId: string | undefined;

  /**
   * @public
   * <p>The type of the resource that could not be found.</p>
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
 * @public
 * <p>The service quota for the action was exceeded.</p>
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
 * @public
 * <p>ThrottlingException will be thrown when request was denied due to request throttling.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  $retryable = {};
  /**
   * @public
   * <p>The number of seconds to wait before retrying the operation.</p>
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
 * @public
 * <p>A specific field in which a given validation exception occurred.</p>
 */
export interface ValidationExceptionField {
  /**
   * @public
   * <p>The name of the field where the validation exception occurred.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>An error message describing the validation exception in this field.</p>
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
 * @public
 * <p>A structure defining a validation exception.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The reason why the validation exception occurred (one of <code>unknownOperation</code>,
   *       <code>cannotParse</code>, <code>fieldValidationFailed</code>, or <code>other</code>).</p>
   */
  reason: ValidationExceptionReason | undefined;

  /**
   * @public
   * <p>A list of the fields in which the validation exception occurred.</p>
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
   * @public
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
   */
  clusterName: string | undefined;

  /**
   * @public
   * <p>The authentication type used to determine where to fetch the password used for accessing the elastic cluster.
   *       Valid types are <code>PLAIN_TEXT</code> or <code>SECRET_ARN</code>.</p>
   */
  authType: Auth | undefined;

  /**
   * @public
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
   */
  adminUserName: string | undefined;

  /**
   * @public
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
   */
  adminUserPassword: string | undefined;

  /**
   * @public
   * <p>The number of vCPUs assigned to each elastic cluster shard. Maximum is 64. Allowed values are 2, 4, 8, 16, 32, 64.</p>
   */
  shardCapacity: number | undefined;

  /**
   * @public
   * <p>The number of shards assigned to the elastic cluster. Maximum is 32.</p>
   */
  shardCount: number | undefined;

  /**
   * @public
   * <p>A list of EC2 VPC security groups to associate with the new
   *       elastic cluster.</p>
   */
  vpcSecurityGroupIds?: string[];

  /**
   * @public
   * <p>The Amazon EC2 subnet IDs for the new elastic cluster.</p>
   */
  subnetIds?: string[];

  /**
   * @public
   * <p>The KMS key identifier to use to encrypt the new elastic cluster.</p>
   *          <p>The KMS key identifier is the Amazon Resource Name (ARN) for the KMS
   *         encryption key. If you are creating a cluster using the same Amazon account
   *         that owns this KMS encryption key, you can use the KMS key alias instead
   *         of the ARN as the KMS encryption key.</p>
   *          <p>If an encryption key is not specified, Amazon DocumentDB uses the
   *         default encryption key that KMS creates for your account. Your account
   *         has a different default encryption key for each Amazon Region.</p>
   */
  kmsKeyId?: string;

  /**
   * @public
   * <p>The client token for the elastic cluster.</p>
   */
  clientToken?: string;

  /**
   * @public
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
   */
  preferredMaintenanceWindow?: string;

  /**
   * @public
   * <p>The tags to be assigned to the new elastic cluster.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>The number of days for which automatic snapshots are retained.</p>
   */
  backupRetentionPeriod?: number;

  /**
   * @public
   * <p>The daily time range during which automated backups are created if automated backups are enabled, as determined by the <code>backupRetentionPeriod</code>.</p>
   */
  preferredBackupWindow?: string;

  /**
   * @public
   * <p>The number of replica instances applying to all shards in the elastic cluster.
   *       A <code>shardInstanceCount</code> value of 1 means there is one writer instance, and any additional instances are replicas that can be used for reads and to improve availability.</p>
   */
  shardInstanceCount?: number;
}

/**
 * @public
 * <p>The name of the shard.</p>
 */
export interface Shard {
  /**
   * @public
   * <p>The ID of the shard.</p>
   */
  shardId: string | undefined;

  /**
   * @public
   * <p>The time when the shard was created in Universal Coordinated Time (UTC).</p>
   */
  createTime: string | undefined;

  /**
   * @public
   * <p>The current status of the shard.</p>
   */
  status: Status | undefined;
}

/**
 * @public
 * <p>Returns information about a specific elastic cluster.</p>
 */
export interface Cluster {
  /**
   * @public
   * <p>The name of the elastic cluster.</p>
   */
  clusterName: string | undefined;

  /**
   * @public
   * <p>The ARN identifier of the elastic cluster.</p>
   */
  clusterArn: string | undefined;

  /**
   * @public
   * <p>The status of the elastic cluster.</p>
   */
  status: Status | undefined;

  /**
   * @public
   * <p>The URL used to connect to the elastic cluster.</p>
   */
  clusterEndpoint: string | undefined;

  /**
   * @public
   * <p>The time when the elastic cluster was created in Universal Coordinated Time (UTC).</p>
   */
  createTime: string | undefined;

  /**
   * @public
   * <p>The name of the elastic cluster administrator.</p>
   */
  adminUserName: string | undefined;

  /**
   * @public
   * <p>The authentication type for the elastic cluster.</p>
   */
  authType: Auth | undefined;

  /**
   * @public
   * <p>The number of vCPUs assigned to each elastic cluster shard. Maximum is 64.
   *       Allowed values are 2, 4, 8, 16, 32, 64.</p>
   */
  shardCapacity: number | undefined;

  /**
   * @public
   * <p>The number of shards assigned to the elastic cluster. Maximum is 32.</p>
   */
  shardCount: number | undefined;

  /**
   * @public
   * <p>A list of EC2 VPC security groups associated with thie elastic cluster.</p>
   */
  vpcSecurityGroupIds: string[] | undefined;

  /**
   * @public
   * <p>The Amazon EC2 subnet IDs for the elastic cluster.</p>
   */
  subnetIds: string[] | undefined;

  /**
   * @public
   * <p>The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).</p>
   *          <p>
   *             <i>Format</i>: <code>ddd:hh24:mi-ddd:hh24:mi</code>
   *          </p>
   */
  preferredMaintenanceWindow: string | undefined;

  /**
   * @public
   * <p>The KMS key identifier to use to encrypt the elastic cluster.</p>
   */
  kmsKeyId: string | undefined;

  /**
   * @public
   * <p>The total number of shards in the cluster.</p>
   */
  shards?: Shard[];

  /**
   * @public
   * <p>The number of days for which automatic snapshots are retained.</p>
   */
  backupRetentionPeriod?: number;

  /**
   * @public
   * <p>The daily time range during which automated backups are created if automated backups are enabled, as determined by <code>backupRetentionPeriod</code>.</p>
   */
  preferredBackupWindow?: string;

  /**
   * @public
   * <p>The number of replica instances applying to all shards in the cluster.
   *       A <code>shardInstanceCount</code> value of 1 means there is one writer instance, and any additional instances are replicas that can be used for reads and to improve availability.</p>
   */
  shardInstanceCount?: number;
}

/**
 * @public
 */
export interface CreateClusterOutput {
  /**
   * @public
   * <p>The new elastic cluster that has been created.</p>
   */
  cluster: Cluster | undefined;
}

/**
 * @public
 */
export interface CreateClusterSnapshotInput {
  /**
   * @public
   * <p>The ARN identifier of the elastic cluster of which you want to create a snapshot.</p>
   */
  clusterArn: string | undefined;

  /**
   * @public
   * <p>The name of the new elastic cluster snapshot.</p>
   */
  snapshotName: string | undefined;

  /**
   * @public
   * <p>The tags to be assigned to the new elastic cluster snapshot.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateClusterSnapshotOutput {
  /**
   * @public
   * <p>Returns information about the new elastic cluster snapshot.</p>
   */
  snapshot: ClusterSnapshot | undefined;
}

/**
 * @public
 */
export interface DeleteClusterInput {
  /**
   * @public
   * <p>The ARN identifier of the elastic cluster that is to be deleted.</p>
   */
  clusterArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteClusterOutput {
  /**
   * @public
   * <p>Returns information about the newly deleted elastic cluster.</p>
   */
  cluster: Cluster | undefined;
}

/**
 * @public
 */
export interface DeleteClusterSnapshotInput {
  /**
   * @public
   * <p>The ARN identifier of the elastic cluster snapshot that is to be deleted.</p>
   */
  snapshotArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteClusterSnapshotOutput {
  /**
   * @public
   * <p>Returns information about the newly deleted elastic cluster snapshot.</p>
   */
  snapshot: ClusterSnapshot | undefined;
}

/**
 * @public
 */
export interface GetClusterInput {
  /**
   * @public
   * <p>The ARN identifier of the elastic cluster.</p>
   */
  clusterArn: string | undefined;
}

/**
 * @public
 */
export interface GetClusterOutput {
  /**
   * @public
   * <p>Returns information about a specific elastic cluster.</p>
   */
  cluster: Cluster | undefined;
}

/**
 * @public
 */
export interface GetClusterSnapshotInput {
  /**
   * @public
   * <p>The ARN identifier of the elastic cluster snapshot.</p>
   */
  snapshotArn: string | undefined;
}

/**
 * @public
 */
export interface GetClusterSnapshotOutput {
  /**
   * @public
   * <p>Returns information about a specific elastic cluster snapshot.</p>
   */
  snapshot: ClusterSnapshot | undefined;
}

/**
 * @public
 */
export interface ListClustersInput {
  /**
   * @public
   * <p>A pagination token provided by a previous request.
   *       If this parameter is specified, the response includes only records beyond this token, up to the value specified by <code>max-results</code>.</p>
   *          <p>If there is no more data in the responce, the <code>nextToken</code> will not be returned.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of elastic cluster snapshot results to receive in the response.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>A list of Amazon DocumentDB elastic clusters.</p>
 */
export interface ClusterInList {
  /**
   * @public
   * <p>The name of the elastic cluster.</p>
   */
  clusterName: string | undefined;

  /**
   * @public
   * <p>The ARN identifier of the elastic cluster.</p>
   */
  clusterArn: string | undefined;

  /**
   * @public
   * <p>The status of the elastic cluster.</p>
   */
  status: Status | undefined;
}

/**
 * @public
 */
export interface ListClustersOutput {
  /**
   * @public
   * <p>A list of Amazon DocumentDB elastic clusters.</p>
   */
  clusters?: ClusterInList[];

  /**
   * @public
   * <p>A pagination token provided by a previous request.
   *       If this parameter is specified, the response includes only records beyond this token, up to the value specified by <code>max-results</code>.</p>
   *          <p>If there is no more data in the responce, the <code>nextToken</code> will not be returned.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListClusterSnapshotsInput {
  /**
   * @public
   * <p>The ARN identifier of the elastic cluster.</p>
   */
  clusterArn?: string;

  /**
   * @public
   * <p>A pagination token provided by a previous request.
   *       If this parameter is specified, the response includes only records beyond this token, up to the value specified by <code>max-results</code>.</p>
   *          <p>If there is no more data in the responce, the <code>nextToken</code> will not be returned.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of elastic cluster snapshot results to receive in the response.</p>
   */
  maxResults?: number;

  /**
   * @public
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
   */
  snapshotType?: string;
}

/**
 * @public
 * <p>A list of elastic cluster snapshots.</p>
 */
export interface ClusterSnapshotInList {
  /**
   * @public
   * <p>The name of the elastic cluster snapshot.</p>
   */
  snapshotName: string | undefined;

  /**
   * @public
   * <p>The ARN identifier of the elastic cluster snapshot.</p>
   */
  snapshotArn: string | undefined;

  /**
   * @public
   * <p>The ARN identifier of the elastic cluster.</p>
   */
  clusterArn: string | undefined;

  /**
   * @public
   * <p>The status of the elastic cluster snapshot.</p>
   */
  status: Status | undefined;

  /**
   * @public
   * <p>The time when the elastic cluster snapshot was created in Universal Coordinated Time (UTC).</p>
   */
  snapshotCreationTime: string | undefined;
}

/**
 * @public
 */
export interface ListClusterSnapshotsOutput {
  /**
   * @public
   * <p>A list of snapshots for a specified elastic cluster.</p>
   */
  snapshots?: ClusterSnapshotInList[];

  /**
   * @public
   * <p>A pagination token provided by a previous request.
   *       If this parameter is specified, the response includes only records beyond this token, up to the value specified by <code>max-results</code>.</p>
   *          <p>If there is no more data in the responce, the <code>nextToken</code> will not be returned.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p>The ARN identifier of the elastic cluster resource.</p>
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * <p>The list of tags for the specified elastic cluster resource.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface RestoreClusterFromSnapshotInput {
  /**
   * @public
   * <p>The name of the elastic cluster.</p>
   */
  clusterName: string | undefined;

  /**
   * @public
   * <p>The ARN identifier of the elastic cluster snapshot.</p>
   */
  snapshotArn: string | undefined;

  /**
   * @public
   * <p>A list of EC2 VPC security groups to associate with the elastic cluster.</p>
   */
  vpcSecurityGroupIds?: string[];

  /**
   * @public
   * <p>The Amazon EC2 subnet IDs for the elastic cluster.</p>
   */
  subnetIds?: string[];

  /**
   * @public
   * <p>The KMS key identifier to use to encrypt the new Amazon DocumentDB elastic clusters cluster.</p>
   *          <p>The KMS key identifier is the Amazon Resource Name (ARN) for the KMS
   *         encryption key. If you are creating a cluster using the same Amazon account
   *         that owns this KMS encryption key, you can use the KMS key alias instead
   *         of the ARN as the KMS encryption key.</p>
   *          <p>If an encryption key is not specified here, Amazon DocumentDB uses the
   *         default encryption key that KMS creates for your account. Your account
   *         has a different default encryption key for each Amazon Region.</p>
   */
  kmsKeyId?: string;

  /**
   * @public
   * <p>A list of the tag names to be assigned to the restored elastic cluster, in the form of an array of key-value pairs in which the key is the tag name and the value is the key value.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>The capacity of each shard in the new restored elastic cluster.</p>
   */
  shardCapacity?: number;

  /**
   * @public
   * <p>The number of replica instances applying to all shards in the elastic cluster.
   *       A <code>shardInstanceCount</code> value of 1 means there is one writer instance, and any additional instances are replicas that can be used for reads and to improve availability.</p>
   */
  shardInstanceCount?: number;
}

/**
 * @public
 */
export interface RestoreClusterFromSnapshotOutput {
  /**
   * @public
   * <p>Returns information about a the restored elastic cluster.</p>
   */
  cluster: Cluster | undefined;
}

/**
 * @public
 */
export interface StartClusterInput {
  /**
   * @public
   * <p>The ARN identifier of the elastic cluster.</p>
   */
  clusterArn: string | undefined;
}

/**
 * @public
 */
export interface StartClusterOutput {
  /**
   * @public
   * <p>Returns information about a specific elastic cluster.</p>
   */
  cluster: Cluster | undefined;
}

/**
 * @public
 */
export interface StopClusterInput {
  /**
   * @public
   * <p>The ARN identifier of the elastic cluster.</p>
   */
  clusterArn: string | undefined;
}

/**
 * @public
 */
export interface StopClusterOutput {
  /**
   * @public
   * <p>Returns information about a specific elastic cluster.</p>
   */
  cluster: Cluster | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * @public
   * <p>The ARN identifier of the elastic cluster resource.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>The tags that are assigned to the elastic cluster resource.</p>
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
   * @public
   * <p>The ARN identifier of the elastic cluster resource.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>The tag keys to be removed from the elastic cluster resource.</p>
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
   * @public
   * <p>The ARN identifier of the elastic cluster.</p>
   */
  clusterArn: string | undefined;

  /**
   * @public
   * <p>The authentication type used to determine where to fetch the password used for accessing the elastic cluster.
   *       Valid types are <code>PLAIN_TEXT</code> or <code>SECRET_ARN</code>.</p>
   */
  authType?: Auth;

  /**
   * @public
   * <p>The number of vCPUs assigned to each elastic cluster shard.
   *       Maximum is 64. Allowed values are 2, 4, 8, 16, 32, 64.</p>
   */
  shardCapacity?: number;

  /**
   * @public
   * <p>The number of shards assigned to the elastic cluster. Maximum is 32.</p>
   */
  shardCount?: number;

  /**
   * @public
   * <p>A list of EC2 VPC security groups to associate with the elastic cluster.</p>
   */
  vpcSecurityGroupIds?: string[];

  /**
   * @public
   * <p>The Amazon EC2 subnet IDs for the elastic cluster.</p>
   */
  subnetIds?: string[];

  /**
   * @public
   * <p>The password associated with the elastic cluster administrator.
   *       This password can contain any printable ASCII character except forward slash (/), double quote ("), or the "at" symbol (@).</p>
   *          <p>
   *             <i>Constraints</i>: Must contain from 8 to 100 characters.</p>
   */
  adminUserPassword?: string;

  /**
   * @public
   * <p>The client token for the elastic cluster.</p>
   */
  clientToken?: string;

  /**
   * @public
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
   */
  preferredMaintenanceWindow?: string;

  /**
   * @public
   * <p>The number of days for which automatic snapshots are retained.</p>
   */
  backupRetentionPeriod?: number;

  /**
   * @public
   * <p>The daily time range during which automated backups are created if automated backups are enabled, as determined by the <code>backupRetentionPeriod</code>.</p>
   */
  preferredBackupWindow?: string;

  /**
   * @public
   * <p>The number of replica instances applying to all shards in the elastic cluster.
   *       A <code>shardInstanceCount</code> value of 1 means there is one writer instance, and any additional instances are replicas that can be used for reads and to improve availability.</p>
   */
  shardInstanceCount?: number;
}

/**
 * @public
 */
export interface UpdateClusterOutput {
  /**
   * @public
   * <p>Returns information about the updated elastic cluster.</p>
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
