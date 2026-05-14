// smithy-typescript generated code
import type {
  ClusterStatus,
  EncryptionStatus,
  EncryptionType,
  StreamFailureErrorCode,
  StreamFormat,
  StreamOrdering,
  StreamStatus,
} from "./enums";

/**
 * <p>Defines the structure for multi-Region cluster configurations, containing the witness region and linked cluster settings.</p>
 * @public
 */
export interface MultiRegionProperties {
  /**
   * <p>The Region that serves as the witness region for a multi-Region cluster. The witness Region helps maintain cluster consistency and quorum.</p>
   * @public
   */
  witnessRegion?: string | undefined;

  /**
   * <p>The set of peered clusters that form the multi-Region cluster configuration. Each peered cluster represents a database instance in a different Region.</p>
   * @public
   */
  clusters?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateClusterInput {
  /**
   * <p>If enabled, you can't delete your cluster. You must first disable this property before you can delete your cluster.</p>
   * @public
   */
  deletionProtectionEnabled?: boolean | undefined;

  /**
   * <p>The KMS key that encrypts and protects the data on your cluster. You can specify the ARN, ID, or alias of an existing key or have Amazon Web Services create a default key for you.</p>
   * @public
   */
  kmsEncryptionKey?: string | undefined;

  /**
   * <p>A map of key and value pairs to use to tag your cluster.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, the subsequent retries with the same client token return the result from the original successful request and they have no additional effect.</p> <p>If you don't specify a client token, the Amazon Web Services SDK automatically generates one.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The configuration settings when creating a multi-Region cluster, including the witness region and linked cluster properties.</p>
   * @public
   */
  multiRegionProperties?: MultiRegionProperties | undefined;

  /**
   * <p>An optional resource-based policy document in JSON format that defines access permissions for the cluster.</p>
   * @public
   */
  policy?: string | undefined;

  /**
   * <p>An optional field that controls whether to bypass the lockout prevention check. When set to true, this parameter allows you to apply a policy that might lock you out of the cluster. Use with caution.</p>
   * @public
   */
  bypassPolicyLockoutSafetyCheck?: boolean | undefined;
}

/**
 * <p>Configuration details about encryption for the cluster including the KMS key ARN, encryption type, and encryption status.</p>
 * @public
 */
export interface EncryptionDetails {
  /**
   * <p>The type of encryption that protects the data on your cluster.</p>
   * @public
   */
  encryptionType: EncryptionType | undefined;

  /**
   * <p>The ARN of the KMS key that encrypts data in the cluster.</p>
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * <p>The status of encryption for the cluster.</p>
   * @public
   */
  encryptionStatus: EncryptionStatus | undefined;
}

/**
 * <p>The output of a created cluster.</p>
 * @public
 */
export interface CreateClusterOutput {
  /**
   * <p>The ID of the created cluster.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>The ARN of the created cluster.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The status of the created cluster.</p>
   * @public
   */
  status: ClusterStatus | undefined;

  /**
   * <p>The time of when created the cluster.</p>
   * @public
   */
  creationTime: Date | undefined;

  /**
   * <p>The multi-Region cluster configuration details that were set during cluster creation</p>
   * @public
   */
  multiRegionProperties?: MultiRegionProperties | undefined;

  /**
   * <p>The encryption configuration for the cluster that was specified during the creation process, including the KMS key identifier and encryption state.</p>
   * @public
   */
  encryptionDetails?: EncryptionDetails | undefined;

  /**
   * <p>Whether deletion protection is enabled on this cluster.</p>
   * @public
   */
  deletionProtectionEnabled: boolean | undefined;

  /**
   * <p>The connection endpoint for the created cluster.</p>
   * @public
   */
  endpoint?: string | undefined;
}

/**
 * <p>Stores information about a field passed inside a request that resulted in an validation error.</p>
 * @public
 */
export interface ValidationExceptionField {
  /**
   * <p>The name of the field.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A message describing why this field failed validation.</p>
   * @public
   */
  message: string | undefined;
}

/**
 * @public
 */
export interface DeleteClusterInput {
  /**
   * <p>The ID of the cluster to delete.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully. The subsequent retries with the same client token return the result from the original successful request and they have no additional effect.</p> <p>If you don't specify a client token, the Amazon Web Services SDK automatically generates one.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * <p>The output from a deleted cluster.</p>
 * @public
 */
export interface DeleteClusterOutput {
  /**
   * <p>The ID of the deleted cluster.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>The ARN of the deleted cluster.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The status of the cluster.</p>
   * @public
   */
  status: ClusterStatus | undefined;

  /**
   * <p>The time of when the cluster was created.</p>
   * @public
   */
  creationTime: Date | undefined;
}

/**
 * @public
 */
export interface DeleteClusterPolicyInput {
  /**
   * <p>The ID of the cluster.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>The expected version of the policy to delete. This parameter ensures that you're deleting the correct version of the policy and helps prevent accidental deletions.</p>
   * @public
   */
  expectedPolicyVersion?: string | undefined;

  /**
   * <p>Idempotency token so a request is only processed once.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteClusterPolicyOutput {
  /**
   * <p>The version of the policy that was deleted.</p>
   * @public
   */
  policyVersion: string | undefined;
}

/**
 * @public
 */
export interface GetClusterInput {
  /**
   * <p>The ID of the cluster to retrieve.</p>
   * @public
   */
  identifier: string | undefined;
}

/**
 * <p>The output of a cluster.</p>
 * @public
 */
export interface GetClusterOutput {
  /**
   * <p>The ID of the retrieved cluster.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>The ARN of the retrieved cluster.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The status of the retrieved cluster.</p>
   * @public
   */
  status: ClusterStatus | undefined;

  /**
   * <p>The time of when the cluster was created.</p>
   * @public
   */
  creationTime: Date | undefined;

  /**
   * <p>Whether deletion protection is enabled in this cluster.</p>
   * @public
   */
  deletionProtectionEnabled: boolean | undefined;

  /**
   * <p>Returns the current multi-Region cluster configuration, including witness region and linked cluster information.</p>
   * @public
   */
  multiRegionProperties?: MultiRegionProperties | undefined;

  /**
   * <p>Map of tags.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The current encryption configuration details for the cluster.</p>
   * @public
   */
  encryptionDetails?: EncryptionDetails | undefined;

  /**
   * <p>The connection endpoint for the cluster.</p>
   * @public
   */
  endpoint?: string | undefined;
}

/**
 * @public
 */
export interface GetClusterPolicyInput {
  /**
   * <p>The ID of the cluster to retrieve the policy from.</p>
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface GetClusterPolicyOutput {
  /**
   * <p>The resource-based policy document attached to the cluster, returned as a JSON string.</p>
   * @public
   */
  policy: string | undefined;

  /**
   * <p>The version of the policy document. This version number is incremented each time the policy is updated.</p>
   * @public
   */
  policyVersion: string | undefined;
}

/**
 * @public
 */
export interface GetVpcEndpointServiceNameInput {
  /**
   * <p>The ID of the cluster to retrieve.</p>
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface GetVpcEndpointServiceNameOutput {
  /**
   * <p>The VPC endpoint service name.</p>
   * @public
   */
  serviceName: string | undefined;

  /**
   * <p>The VPC connection endpoint for the cluster.</p>
   * @public
   */
  clusterVpcEndpoint?: string | undefined;
}

/**
 * @public
 */
export interface ListClustersInput {
  /**
   * <p>An optional parameter that specifies the maximum number of results to return. You can use nextToken to display the next page of results.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>If your initial ListClusters operation returns a nextToken, you can include the returned nextToken in following ListClusters operations, which returns results in the next page.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>A summary of the properties of a cluster.</p>
 * @public
 */
export interface ClusterSummary {
  /**
   * <p>The ID of the cluster.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>The ARN of the cluster.</p>
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface ListClustersOutput {
  /**
   * <p>If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. To retrieve the next page, make the call again using the returned token.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>An array of the returned clusters.</p>
   * @public
   */
  clusters: ClusterSummary[] | undefined;
}

/**
 * @public
 */
export interface PutClusterPolicyInput {
  /**
   * <p>The ID of the cluster.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>The resource-based policy document to attach to the cluster. This should be a valid JSON policy document that defines permissions and conditions.</p>
   * @public
   */
  policy: string | undefined;

  /**
   * <p>A flag that allows you to bypass the policy lockout safety check. When set to true, this parameter allows you to apply a policy that might lock you out of the cluster. Use with caution.</p>
   * @public
   */
  bypassPolicyLockoutSafetyCheck?: boolean | undefined;

  /**
   * <p>The expected version of the current policy. This parameter ensures that you're updating the correct version of the policy and helps prevent concurrent modification conflicts.</p>
   * @public
   */
  expectedPolicyVersion?: string | undefined;

  /**
   * <p>Idempotency token so a request is only processed once.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface PutClusterPolicyOutput {
  /**
   * <p>The version of the policy after it has been updated or created.</p>
   * @public
   */
  policyVersion: string | undefined;
}

/**
 * @public
 */
export interface UpdateClusterInput {
  /**
   * <p>The ID of the cluster you want to update.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>Specifies whether to enable deletion protection in your cluster.</p>
   * @public
   */
  deletionProtectionEnabled?: boolean | undefined;

  /**
   * <p>The KMS key that encrypts and protects the data on your cluster. You can specify the ARN, ID, or alias of an existing key or have Amazon Web Services create a default key for you.</p>
   * @public
   */
  kmsEncryptionKey?: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully. The subsequent retries with the same client token return the result from the original successful request and they have no additional effect.</p> <p>If you don't specify a client token, the Amazon Web Services SDK automatically generates one.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The new multi-Region cluster configuration settings to be applied during an update operation.</p>
   * @public
   */
  multiRegionProperties?: MultiRegionProperties | undefined;
}

/**
 * <p>The details of the cluster after it has been updated.</p>
 * @public
 */
export interface UpdateClusterOutput {
  /**
   * <p>The ID of the cluster to update.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>The ARN of the updated cluster.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The status of the updated cluster.</p>
   * @public
   */
  status: ClusterStatus | undefined;

  /**
   * <p>The time of when the cluster was created.</p>
   * @public
   */
  creationTime: Date | undefined;
}

/**
 * <p>Kinesis stream target configuration.</p>
 * @public
 */
export interface KinesisTargetDefinition {
  /**
   * <p>The ARN of the Kinesis stream.</p>
   * @public
   */
  streamArn: string | undefined;

  /**
   * <p>The ARN of the IAM role that grants permission to write to the Kinesis stream. This can be a standard role (<code>arn:aws:iam::account-id:role/role-name</code>) or a role with a path prefix (<code>arn:aws:iam::account-id:role/service-role/role-name</code>), such as roles auto-created by the console.</p>
   * @public
   */
  roleArn: string | undefined;
}

/**
 * <p>Target definition for stream destination.</p>
 * @public
 */
export type TargetDefinition =
  | TargetDefinition.KinesisMember
  | TargetDefinition.$UnknownMember;

/**
 * @public
 */
export namespace TargetDefinition {
  /**
   * <p>Kinesis stream target configuration.</p>
   * @public
   */
  export interface KinesisMember {
    kinesis: KinesisTargetDefinition;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    kinesis?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    kinesis: (value: KinesisTargetDefinition) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateStreamInput {
  /**
   * <p>The ID of the cluster for which to create the stream.</p>
   * @public
   */
  clusterIdentifier: string | undefined;

  /**
   * <p>The target destination configuration for the stream. Contains Kinesis stream configuration including stream ARN and IAM role ARN.</p>
   * @public
   */
  targetDefinition: TargetDefinition | undefined;

  /**
   * <p>The ordering mode for the stream. Determines how change events are ordered when delivered to the target.</p>
   * @public
   */
  ordering: StreamOrdering | undefined;

  /**
   * <p>The format of the stream records.</p>
   * @public
   */
  format: StreamFormat | undefined;

  /**
   * <p>A map of key and value pairs to use to tag your stream.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, the subsequent retries with the same client token return the result from the original successful request and they have no additional effect.</p> <p>If you don't specify a client token, the Amazon Web Services SDK automatically generates one.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * <p>The output of a created stream.</p>
 * @public
 */
export interface CreateStreamOutput {
  /**
   * <p>The ID of the cluster for the created stream.</p>
   * @public
   */
  clusterIdentifier: string | undefined;

  /**
   * <p>The ID of the created stream.</p>
   * @public
   */
  streamIdentifier: string | undefined;

  /**
   * <p>The ARN of the created stream.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The status of the created stream.</p>
   * @public
   */
  status: StreamStatus | undefined;

  /**
   * <p>The time when created the stream.</p>
   * @public
   */
  creationTime: Date | undefined;

  /**
   * <p>The ordering mode of the created stream.</p>
   * @public
   */
  ordering: StreamOrdering | undefined;

  /**
   * <p>The format of the created stream records.</p>
   * @public
   */
  format: StreamFormat | undefined;
}

/**
 * @public
 */
export interface DeleteStreamInput {
  /**
   * <p>The ID of the cluster containing the stream to delete.</p>
   * @public
   */
  clusterIdentifier: string | undefined;

  /**
   * <p>The ID of the stream to delete.</p>
   * @public
   */
  streamIdentifier: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, the subsequent retries with the same client token return the result from the original successful request and they have no additional effect.</p> <p>If you don't specify a client token, the Amazon Web Services SDK automatically generates one.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * <p>The output from a deleted stream.</p>
 * @public
 */
export interface DeleteStreamOutput {
  /**
   * <p>The ID of the cluster for the deleted stream.</p>
   * @public
   */
  clusterIdentifier: string | undefined;

  /**
   * <p>The ID of the deleted stream.</p>
   * @public
   */
  streamIdentifier: string | undefined;

  /**
   * <p>The ARN of the deleted stream.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The status of the stream.</p>
   * @public
   */
  status: StreamStatus | undefined;

  /**
   * <p>The time when the stream was created.</p>
   * @public
   */
  creationTime: Date | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceInput {
  /**
   * <p>The ARN of the resource for which you want to list the tags.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceOutput {
  /**
   * <p>A map of key and value pairs that you used to tag your resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetStreamInput {
  /**
   * <p>The ID of the cluster containing the stream to retrieve.</p>
   * @public
   */
  clusterIdentifier: string | undefined;

  /**
   * <p>The ID of the stream to retrieve.</p>
   * @public
   */
  streamIdentifier: string | undefined;
}

/**
 * <p>Stream status reason with error and timestamp.</p>
 * @public
 */
export interface StatusReason {
  /**
   * <p>The error code for the stream failure.</p>
   * @public
   */
  error: StreamFailureErrorCode | undefined;

  /**
   * <p>The timestamp when the status was updated.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * <p>The output of a retrieved stream.</p>
 * @public
 */
export interface GetStreamOutput {
  /**
   * <p>The ID of the cluster for the retrieved stream.</p>
   * @public
   */
  clusterIdentifier: string | undefined;

  /**
   * <p>The ID of the retrieved stream.</p>
   * @public
   */
  streamIdentifier: string | undefined;

  /**
   * <p>The ARN of the retrieved stream.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The current status of the retrieved stream.</p>
   * @public
   */
  status: StreamStatus | undefined;

  /**
   * <p>The time when the stream was created.</p>
   * @public
   */
  creationTime: Date | undefined;

  /**
   * <p>The ordering mode of the stream.</p>
   * @public
   */
  ordering: StreamOrdering | undefined;

  /**
   * <p>The format of the stream records.</p>
   * @public
   */
  format: StreamFormat | undefined;

  /**
   * <p>The target definition for the stream destination.</p>
   * @public
   */
  targetDefinition?: TargetDefinition | undefined;

  /**
   * <p>Stream status reason with error code and timestamp (if applicable).</p>
   * @public
   */
  statusReason?: StatusReason | undefined;

  /**
   * <p>A map of tags associated with the stream.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListStreamsInput {
  /**
   * <p>The ID of the cluster for which to list streams.</p>
   * @public
   */
  clusterIdentifier: string | undefined;

  /**
   * <p>An optional parameter that specifies the maximum number of results to return. You can use nextToken to display the next page of results. Default: 10.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>If your initial ListStreams operation returns a nextToken, you can include the returned nextToken in following ListStreams operations, which returns results in the next page.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Summary information about a stream.</p>
 * @public
 */
export interface StreamSummary {
  /**
   * <p>The ID of the cluster.</p>
   * @public
   */
  clusterIdentifier: string | undefined;

  /**
   * <p>The ID of the stream.</p>
   * @public
   */
  streamIdentifier: string | undefined;

  /**
   * <p>The ARN of the stream.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The timestamp when the stream was created.</p>
   * @public
   */
  creationTime: Date | undefined;

  /**
   * <p>The current status of the stream.</p>
   * @public
   */
  status: StreamStatus | undefined;
}

/**
 * @public
 */
export interface ListStreamsOutput {
  /**
   * <p>If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. To retrieve the next page, make the call again using the returned token.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>An array of the returned streams.</p>
   * @public
   */
  streams: StreamSummary[] | undefined;
}

/**
 * @public
 */
export interface TagResourceInput {
  /**
   * <p>The ARN of the resource that you want to tag.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>A map of key and value pairs to use to tag your resource.</p>
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UntagResourceInput {
  /**
   * <p>The ARN of the resource from which to remove tags.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The array of keys of the tags that you want to remove.</p>
   * @public
   */
  tagKeys: string[] | undefined;
}
