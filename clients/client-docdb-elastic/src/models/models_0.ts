// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@aws-sdk/smithy-client";

import { DocDBElasticServiceException as __BaseException } from "./DocDBElasticServiceException";

/**
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

export enum Auth {
  PLAIN_TEXT = "PLAIN_TEXT",
  SECRET_ARN = "SECRET_ARN",
}

/**
 * <p>There was an access conflict.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * <p>The ID of the resource where there was an access conflict.</p>
   */
  resourceId: string | undefined;

  /**
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

export interface CreateClusterInput {
  /**
   * <p>The name of the new Elastic DocumentDB cluster. This parameter is stored as
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
   * <p>The authentication type for the Elastic DocumentDB cluster.</p>
   */
  authType: Auth | string | undefined;

  /**
   * <p>The name of the Elastic DocumentDB cluster administrator.</p>
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
   * <p>The password for the Elastic DocumentDB cluster administrator and can
   *       contain any printable ASCII characters.</p>
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
   * <p>The capacity of each shard in the new Elastic DocumentDB cluster.</p>
   */
  shardCapacity: number | undefined;

  /**
   * <p>The number of shards to create in the new Elastic DocumentDB cluster.</p>
   */
  shardCount: number | undefined;

  /**
   * <p>A list of EC2 VPC security groups to associate with the new
   *       Elastic DocumentDB cluster.</p>
   */
  vpcSecurityGroupIds?: string[];

  /**
   * <p>The Amazon EC2 subnet IDs for the new Elastic DocumentDB cluster.</p>
   */
  subnetIds?: string[];

  /**
   * <p>The KMS key identifier to use to encrypt the new Elastic DocumentDB cluster.</p>
   *          <p>The KMS key identifier is the Amazon Resource Name (ARN) for the KMS
   *         encryption key. If you are creating a cluster using the same Amazon account
   *         that owns this KMS encryption key, you can use the KMS key alias instead
   *         of the ARN as the KMS encryption key.</p>
   *          <p>If an encryption key is not specified, Elastic DocumentDB uses the
   *         default encryption key that KMS creates for your account. Your account
   *         has a different default encryption key for each Amazon Region.</p>
   */
  kmsKeyId?: string;

  /**
   * <p>The client token for the Elastic DocumentDB cluster.</p>
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
   */
  preferredMaintenanceWindow?: string;

  /**
   * <p>The tags to be assigned to the new Elastic DocumentDB cluster.</p>
   */
  tags?: Record<string, string>;
}

export enum Status {
  ACTIVE = "ACTIVE",
  CREATING = "CREATING",
  DELETING = "DELETING",
  INACCESSIBLE_ENCRYPTION_CREDS = "INACCESSIBLE_ENCRYPTION_CREDS",
  INVALID_SECURITY_GROUP_ID = "INVALID_SECURITY_GROUP_ID",
  INVALID_SUBNET_ID = "INVALID_SUBNET_ID",
  IP_ADDRESS_LIMIT_EXCEEDED = "IP_ADDRESS_LIMIT_EXCEEDED",
  UPDATING = "UPDATING",
  VPC_ENDPOINT_LIMIT_EXCEEDED = "VPC_ENDPOINT_LIMIT_EXCEEDED",
}

/**
 * <p>Returns information about a specific Elastic DocumentDB cluster.</p>
 */
export interface Cluster {
  /**
   * <p>The name of the Elastic DocumentDB cluster.</p>
   */
  clusterName: string | undefined;

  /**
   * <p>The arn of the Elastic DocumentDB cluster.</p>
   */
  clusterArn: string | undefined;

  /**
   * <p>The status of the Elastic DocumentDB cluster.</p>
   */
  status: Status | string | undefined;

  /**
   * <p>The URL used to connect to the Elastic DocumentDB cluster.</p>
   */
  clusterEndpoint: string | undefined;

  /**
   * <p>The time when the Elastic DocumentDB cluster was created in Universal Coordinated Time (UTC).</p>
   */
  createTime: string | undefined;

  /**
   * <p>The name of the Elastic DocumentDB cluster administrator.</p>
   */
  adminUserName: string | undefined;

  /**
   * <p>The authentication type for the Elastic DocumentDB cluster.</p>
   */
  authType: Auth | string | undefined;

  /**
   * <p>The capacity of each shard in the Elastic DocumentDB cluster.</p>
   */
  shardCapacity: number | undefined;

  /**
   * <p>The number of shards in the  Elastic DocumentDB cluster.</p>
   */
  shardCount: number | undefined;

  /**
   * <p>A list of EC2 VPC security groups associated with this cluster.</p>
   */
  vpcSecurityGroupIds: string[] | undefined;

  /**
   * <p>The Amazon EC2 subnet IDs for the Elastic DocumentDB cluster.</p>
   */
  subnetIds: string[] | undefined;

  /**
   * <p>The weekly time range during which system maintenance can occur,
   *       in Universal Coordinated Time (UTC).</p>
   *          <p>
   *             <i>Format</i>: <code>ddd:hh24:mi-ddd:hh24:mi</code>
   *          </p>
   */
  preferredMaintenanceWindow: string | undefined;

  /**
   * <p>The KMS key identifier to use to encrypt the Elastic DocumentDB cluster.</p>
   */
  kmsKeyId: string | undefined;
}

export interface CreateClusterOutput {
  /**
   * <p>The new Elastic DocumentDB cluster that has been created.</p>
   */
  cluster: Cluster | undefined;
}

/**
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
 * <p>ThrottlingException will be thrown when request was denied due to request throttling.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  $retryable = {};
  /**
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
 * <p>A specific field in which a given validation exception occurred.</p>
 */
export interface ValidationExceptionField {
  /**
   * <p>The name of the field where the validation exception occurred.</p>
   */
  name: string | undefined;

  /**
   * <p>An error message describing the validation exception in this field.</p>
   */
  message: string | undefined;
}

export enum ValidationExceptionReason {
  CANNOT_PARSE = "cannotParse",
  FIELD_VALIDATION_FAILED = "fieldValidationFailed",
  OTHER = "other",
  UNKNOWN_OPERATION = "unknownOperation",
}

/**
 * <p>A structure defining a validation exception.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * <p>The reason why the validation exception occurred (one of <code>unknownOperation</code>,
   *       <code>cannotParse</code>, <code>fieldValidationFailed</code>, or <code>other</code>).</p>
   */
  reason: ValidationExceptionReason | string | undefined;

  /**
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

export interface CreateClusterSnapshotInput {
  /**
   * <p>The arn of the Elastic DocumentDB cluster that the snapshot will be taken from.</p>
   */
  clusterArn: string | undefined;

  /**
   * <p>The name of the Elastic DocumentDB snapshot.</p>
   */
  snapshotName: string | undefined;

  /**
   * <p>The tags to be assigned to the new Elastic DocumentDB snapshot.</p>
   */
  tags?: Record<string, string>;
}

/**
 * <p>Returns information about a specific Elastic DocumentDB snapshot.</p>
 */
export interface ClusterSnapshot {
  /**
   * <p>A list of the IDs of subnets associated with the DB cluster snapshot.</p>
   */
  subnetIds: string[] | undefined;

  /**
   * <p>The name of the Elastic DocumentDB snapshot.</p>
   */
  snapshotName: string | undefined;

  /**
   * <p>The arn of the Elastic DocumentDB snapshot</p>
   */
  snapshotArn: string | undefined;

  /**
   * <p>The time when the Elastic DocumentDB snapshot was created in Universal Coordinated Time (UTC).</p>
   */
  snapshotCreationTime: string | undefined;

  /**
   * <p>The arn of the Elastic DocumentDB cluster.</p>
   */
  clusterArn: string | undefined;

  /**
   * <p>The time when the Elastic DocumentDB cluster was created in Universal Coordinated Time (UTC).</p>
   */
  clusterCreationTime: string | undefined;

  /**
   * <p>The status of the Elastic DocumentDB snapshot.</p>
   */
  status: Status | string | undefined;

  /**
   * <p>A list of the IDs of the VPC security groups associated with the cluster snapshot.</p>
   */
  vpcSecurityGroupIds: string[] | undefined;

  /**
   * <p>The name of the Elastic DocumentDB cluster administrator.</p>
   */
  adminUserName: string | undefined;

  /**
   * <p>The KMS key identifier to use to encrypt the Elastic DocumentDB cluster.</p>
   */
  kmsKeyId: string | undefined;
}

export interface CreateClusterSnapshotOutput {
  /**
   * <p>Returns information about the new Elastic DocumentDB snapshot.</p>
   */
  snapshot: ClusterSnapshot | undefined;
}

/**
 * <p>The specified resource could not be located.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * <p>The ID of the resource that could not be located.</p>
   */
  resourceId: string | undefined;

  /**
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

export interface DeleteClusterInput {
  /**
   * <p>The arn of the Elastic DocumentDB cluster that is to be deleted.</p>
   */
  clusterArn: string | undefined;
}

export interface DeleteClusterOutput {
  /**
   * <p>Returns information about the newly deleted Elastic DocumentDB cluster.</p>
   */
  cluster: Cluster | undefined;
}

export interface DeleteClusterSnapshotInput {
  /**
   * <p>The arn of the Elastic DocumentDB snapshot that is to be deleted.</p>
   */
  snapshotArn: string | undefined;
}

export interface DeleteClusterSnapshotOutput {
  /**
   * <p>Returns information about the newly deleted Elastic DocumentDB snapshot.</p>
   */
  snapshot: ClusterSnapshot | undefined;
}

export interface GetClusterInput {
  /**
   * <p>The arn of the Elastic DocumentDB cluster.</p>
   */
  clusterArn: string | undefined;
}

export interface GetClusterOutput {
  /**
   * <p>Returns information about a specific Elastic DocumentDB cluster.</p>
   */
  cluster: Cluster | undefined;
}

export interface GetClusterSnapshotInput {
  /**
   * <p>The arn of the Elastic DocumentDB snapshot.</p>
   */
  snapshotArn: string | undefined;
}

export interface GetClusterSnapshotOutput {
  /**
   * <p>Returns information about a specific Elastic DocumentDB snapshot.</p>
   */
  snapshot: ClusterSnapshot | undefined;
}

export interface ListClustersInput {
  /**
   * <p>The nextToken which is used the get the next page of data.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of entries to recieve in the response.</p>
   */
  maxResults?: number;
}

/**
 * <p>A list of Elastic DocumentDB cluster.</p>
 */
export interface ClusterInList {
  /**
   * <p>The name of the Elastic DocumentDB cluster.</p>
   */
  clusterName: string | undefined;

  /**
   * <p>The arn of the Elastic DocumentDB cluster.</p>
   */
  clusterArn: string | undefined;

  /**
   * <p>The status of the Elastic DocumentDB cluster.</p>
   */
  status: Status | string | undefined;
}

export interface ListClustersOutput {
  /**
   * <p>A list of Elastic DocumentDB cluster.</p>
   */
  clusters?: ClusterInList[];

  /**
   * <p>The response will provide a nextToken if there is more data beyond the maxResults.</p>
   *          <p>If there is no more data in the responce, the nextToken will not be returned.</p>
   */
  nextToken?: string;
}

export interface ListClusterSnapshotsInput {
  /**
   * <p>The arn of the Elastic DocumentDB cluster.</p>
   */
  clusterArn?: string;

  /**
   * <p>The nextToken which is used the get the next page of data.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of entries to recieve in the response.</p>
   */
  maxResults?: number;
}

/**
 * <p>A list of Elastic DocumentDB snapshots.</p>
 */
export interface ClusterSnapshotInList {
  /**
   * <p>The name of the Elastic DocumentDB snapshot.</p>
   */
  snapshotName: string | undefined;

  /**
   * <p>The arn of the Elastic DocumentDB snapshot</p>
   */
  snapshotArn: string | undefined;

  /**
   * <p>The arn of the Elastic DocumentDB cluster.</p>
   */
  clusterArn: string | undefined;

  /**
   * <p>The status of the Elastic DocumentDB snapshot.</p>
   */
  status: Status | string | undefined;

  /**
   * <p>The time when the Elastic DocumentDB snapshot was created in Universal Coordinated Time (UTC).</p>
   */
  snapshotCreationTime: string | undefined;
}

export interface ListClusterSnapshotsOutput {
  /**
   * <p>A list of Elastic DocumentDB snapshots for a specified cluster.</p>
   */
  snapshots?: ClusterSnapshotInList[];

  /**
   * <p>The response will provide a nextToken if there is more data beyond the maxResults.</p>
   *          <p>If there is no more data in the responce, the nextToken will not be returned.</p>
   */
  nextToken?: string;
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The arn of the Elastic DocumentDB resource.</p>
   */
  resourceArn: string | undefined;
}

export interface ListTagsForResourceResponse {
  /**
   * <p>The list of tags for the specified Elastic DocumentDB resource.</p>
   */
  tags?: Record<string, string>;
}

export interface RestoreClusterFromSnapshotInput {
  /**
   * <p>The name of the Elastic DocumentDB cluster.</p>
   */
  clusterName: string | undefined;

  /**
   * <p>The arn of the Elastic DocumentDB snapshot.</p>
   */
  snapshotArn: string | undefined;

  /**
   * <p>A list of EC2 VPC security groups to associate with the
   *       Elastic DocumentDB cluster.</p>
   */
  vpcSecurityGroupIds?: string[];

  /**
   * <p>The Amazon EC2 subnet IDs for the Elastic DocumentDB cluster.</p>
   */
  subnetIds?: string[];

  /**
   * <p>The KMS key identifier to use to encrypt the new Elastic DocumentDB cluster.</p>
   *          <p>The KMS key identifier is the Amazon Resource Name (ARN) for the KMS
   *         encryption key. If you are creating a cluster using the same Amazon account
   *         that owns this KMS encryption key, you can use the KMS key alias instead
   *         of the ARN as the KMS encryption key.</p>
   *          <p>If an encryption key is not specified here, Elastic DocumentDB uses the
   *         default encryption key that KMS creates for your account. Your account
   *         has a different default encryption key for each Amazon Region.</p>
   */
  kmsKeyId?: string;

  /**
   * <p>A list of the tag names to be assigned to the restored DB cluster,
   *       in the form of an array of key-value pairs in which the key
   *       is the tag name and the value is the key value.</p>
   */
  tags?: Record<string, string>;
}

export interface RestoreClusterFromSnapshotOutput {
  /**
   * <p>Returns information about a the restored Elastic DocumentDB cluster.</p>
   */
  cluster: Cluster | undefined;
}

export interface TagResourceRequest {
  /**
   * <p>The arn of the Elastic DocumentDB resource.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The tags to be assigned to the Elastic DocumentDB resource.</p>
   */
  tags: Record<string, string> | undefined;
}

export interface TagResourceResponse {}

export interface UntagResourceRequest {
  /**
   * <p>The arn of the Elastic DocumentDB resource.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The tag keys to be removed from the Elastic DocumentDB resource.</p>
   */
  tagKeys: string[] | undefined;
}

export interface UntagResourceResponse {}

export interface UpdateClusterInput {
  /**
   * <p>The arn of the Elastic DocumentDB cluster.</p>
   */
  clusterArn: string | undefined;

  /**
   * <p>The authentication type for the Elastic DocumentDB cluster.</p>
   */
  authType?: Auth | string;

  /**
   * <p>The capacity of each shard in the Elastic DocumentDB cluster.</p>
   */
  shardCapacity?: number;

  /**
   * <p>The number of shards to create in the Elastic DocumentDB cluster.</p>
   */
  shardCount?: number;

  /**
   * <p>A list of EC2 VPC security groups to associate with the new
   *       Elastic DocumentDB cluster.</p>
   */
  vpcSecurityGroupIds?: string[];

  /**
   * <p>The number of shards to create in the Elastic DocumentDB cluster.</p>
   */
  subnetIds?: string[];

  /**
   * <p>The password for the Elastic DocumentDB cluster administrator. This password can
   *       contain any printable ASCII character except forward slash (/),
   *       double quote ("), or the "at" symbol (@).</p>
   *          <p>
   *             <i>Constraints</i>: Must contain from 8 to 100 characters.</p>
   */
  adminUserPassword?: string;

  /**
   * <p>The client token for the Elastic DocumentDB cluster.</p>
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
   */
  preferredMaintenanceWindow?: string;
}

export interface UpdateClusterOutput {
  /**
   * <p>Returns information about the updated Elastic DocumentDB cluster.</p>
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
export const ClusterFilterSensitiveLog = (obj: Cluster): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateClusterOutputFilterSensitiveLog = (obj: CreateClusterOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ValidationExceptionFieldFilterSensitiveLog = (obj: ValidationExceptionField): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateClusterSnapshotInputFilterSensitiveLog = (obj: CreateClusterSnapshotInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ClusterSnapshotFilterSensitiveLog = (obj: ClusterSnapshot): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateClusterSnapshotOutputFilterSensitiveLog = (obj: CreateClusterSnapshotOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteClusterInputFilterSensitiveLog = (obj: DeleteClusterInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteClusterOutputFilterSensitiveLog = (obj: DeleteClusterOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteClusterSnapshotInputFilterSensitiveLog = (obj: DeleteClusterSnapshotInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteClusterSnapshotOutputFilterSensitiveLog = (obj: DeleteClusterSnapshotOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetClusterInputFilterSensitiveLog = (obj: GetClusterInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetClusterOutputFilterSensitiveLog = (obj: GetClusterOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetClusterSnapshotInputFilterSensitiveLog = (obj: GetClusterSnapshotInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetClusterSnapshotOutputFilterSensitiveLog = (obj: GetClusterSnapshotOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListClustersInputFilterSensitiveLog = (obj: ListClustersInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ClusterInListFilterSensitiveLog = (obj: ClusterInList): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListClustersOutputFilterSensitiveLog = (obj: ListClustersOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListClusterSnapshotsInputFilterSensitiveLog = (obj: ListClusterSnapshotsInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ClusterSnapshotInListFilterSensitiveLog = (obj: ClusterSnapshotInList): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListClusterSnapshotsOutputFilterSensitiveLog = (obj: ListClusterSnapshotsOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceRequestFilterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceResponseFilterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RestoreClusterFromSnapshotInputFilterSensitiveLog = (obj: RestoreClusterFromSnapshotInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RestoreClusterFromSnapshotOutputFilterSensitiveLog = (obj: RestoreClusterFromSnapshotOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceRequestFilterSensitiveLog = (obj: TagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceResponseFilterSensitiveLog = (obj: TagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceRequestFilterSensitiveLog = (obj: UntagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceResponseFilterSensitiveLog = (obj: UntagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateClusterInputFilterSensitiveLog = (obj: UpdateClusterInput): any => ({
  ...obj,
  ...(obj.adminUserPassword && { adminUserPassword: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateClusterOutputFilterSensitiveLog = (obj: UpdateClusterOutput): any => ({
  ...obj,
});
