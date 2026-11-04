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
 * Defines the structure for multi-Region cluster configurations, containing the witness region and linked cluster settings.
 *
 * @public
 */
export interface MultiRegionProperties {
  /**
   * The Region that serves as the witness region for a multi-Region cluster. The witness Region helps maintain cluster consistency and quorum.
   *
   * @public
   */
  witnessRegion?: string | undefined;

  /**
   * The set of peered clusters that form the multi-Region cluster configuration. Each peered cluster represents a database instance in a different Region.
   *
   * @public
   */
  clusters?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateClusterInput {
  /**
   * If enabled, you can't delete your cluster. You must first disable this property before you can delete your cluster.
   *
   * @public
   */
  deletionProtectionEnabled?: boolean | undefined;

  /**
   * The KMS key that encrypts and protects the data on your cluster. You can specify the ARN, ID, or alias of an existing key or have Amazon Web Services create a default key for you.
   *
   * @public
   */
  kmsEncryptionKey?: string | undefined;

  /**
   * A map of key and value pairs to use to tag your cluster.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, the subsequent retries with the same client token return the result from the original successful request and they have no additional effect.
   *
   * If you don't specify a client token, the Amazon Web Services SDK automatically generates one.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The configuration settings when creating a multi-Region cluster, including the witness region and linked cluster properties.
   *
   * @public
   */
  multiRegionProperties?: MultiRegionProperties | undefined;

  /**
   * An optional resource-based policy document in JSON format that defines access permissions for the cluster.
   *
   * @public
   */
  policy?: string | undefined;

  /**
   * An optional field that controls whether to bypass the lockout prevention check. When set to true, this parameter allows you to apply a policy that might lock you out of the cluster. Use with caution.
   *
   * @public
   */
  bypassPolicyLockoutSafetyCheck?: boolean | undefined;
}

/**
 * Configuration details about encryption for the cluster including the KMS key ARN, encryption type, and encryption status.
 *
 * @public
 */
export interface EncryptionDetails {
  /**
   * The type of encryption that protects the data on your cluster.
   *
   * @public
   */
  encryptionType: EncryptionType | undefined;

  /**
   * The ARN of the KMS key that encrypts data in the cluster.
   *
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * The status of encryption for the cluster.
   *
   * @public
   */
  encryptionStatus: EncryptionStatus | undefined;
}

/**
 * The output of a created cluster.
 *
 * @public
 */
export interface CreateClusterOutput {
  /**
   * The ID of the created cluster.
   *
   * @public
   */
  identifier: string | undefined;

  /**
   * The ARN of the created cluster.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The status of the created cluster.
   *
   * @public
   */
  status: ClusterStatus | undefined;

  /**
   * The time of when created the cluster.
   *
   * @public
   */
  creationTime: Date | undefined;

  /**
   * The multi-Region cluster configuration details that were set during cluster creation
   *
   * @public
   */
  multiRegionProperties?: MultiRegionProperties | undefined;

  /**
   * The encryption configuration for the cluster that was specified during the creation process, including the KMS key identifier and encryption state.
   *
   * @public
   */
  encryptionDetails?: EncryptionDetails | undefined;

  /**
   * Whether deletion protection is enabled on this cluster.
   *
   * @public
   */
  deletionProtectionEnabled: boolean | undefined;

  /**
   * The connection endpoint for the created cluster.
   *
   * @public
   */
  endpoint?: string | undefined;
}

/**
 * Stores information about a field passed inside a request that resulted in an validation error.
 *
 * @public
 */
export interface ValidationExceptionField {
  /**
   * The name of the field.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A message describing why this field failed validation.
   *
   * @public
   */
  message: string | undefined;
}

/**
 * @public
 */
export interface DeleteClusterInput {
  /**
   * The ID of the cluster to delete.
   *
   * @public
   */
  identifier: string | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully. The subsequent retries with the same client token return the result from the original successful request and they have no additional effect.
   *
   * If you don't specify a client token, the Amazon Web Services SDK automatically generates one.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * The output from a deleted cluster.
 *
 * @public
 */
export interface DeleteClusterOutput {
  /**
   * The ID of the deleted cluster.
   *
   * @public
   */
  identifier: string | undefined;

  /**
   * The ARN of the deleted cluster.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The status of the cluster.
   *
   * @public
   */
  status: ClusterStatus | undefined;

  /**
   * The time of when the cluster was created.
   *
   * @public
   */
  creationTime: Date | undefined;
}

/**
 * @public
 */
export interface DeleteClusterPolicyInput {
  /**
   * The ID of the cluster.
   *
   * @public
   */
  identifier: string | undefined;

  /**
   * The expected version of the policy to delete. This parameter ensures that you're deleting the correct version of the policy and helps prevent accidental deletions.
   *
   * @public
   */
  expectedPolicyVersion?: string | undefined;

  /**
   * Idempotency token so a request is only processed once.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteClusterPolicyOutput {
  /**
   * The version of the policy that was deleted.
   *
   * @public
   */
  policyVersion: string | undefined;
}

/**
 * @public
 */
export interface GetClusterInput {
  /**
   * The ID of the cluster to retrieve.
   *
   * @public
   */
  identifier: string | undefined;
}

/**
 * The output of a cluster.
 *
 * @public
 */
export interface GetClusterOutput {
  /**
   * The ID of the retrieved cluster.
   *
   * @public
   */
  identifier: string | undefined;

  /**
   * The ARN of the retrieved cluster.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The status of the retrieved cluster.
   *
   * @public
   */
  status: ClusterStatus | undefined;

  /**
   * The time of when the cluster was created.
   *
   * @public
   */
  creationTime: Date | undefined;

  /**
   * Whether deletion protection is enabled in this cluster.
   *
   * @public
   */
  deletionProtectionEnabled: boolean | undefined;

  /**
   * Returns the current multi-Region cluster configuration, including witness region and linked cluster information.
   *
   * @public
   */
  multiRegionProperties?: MultiRegionProperties | undefined;

  /**
   * Map of tags.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The current encryption configuration details for the cluster.
   *
   * @public
   */
  encryptionDetails?: EncryptionDetails | undefined;

  /**
   * The connection endpoint for the cluster.
   *
   * @public
   */
  endpoint?: string | undefined;
}

/**
 * @public
 */
export interface GetClusterPolicyInput {
  /**
   * The ID of the cluster to retrieve the policy from.
   *
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface GetClusterPolicyOutput {
  /**
   * The resource-based policy document attached to the cluster, returned as a JSON string.
   *
   * @public
   */
  policy: string | undefined;

  /**
   * The version of the policy document. This version number is incremented each time the policy is updated.
   *
   * @public
   */
  policyVersion: string | undefined;
}

/**
 * @public
 */
export interface GetVpcEndpointServiceNameInput {
  /**
   * The ID of the cluster to retrieve.
   *
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface GetVpcEndpointServiceNameOutput {
  /**
   * The VPC endpoint service name.
   *
   * @public
   */
  serviceName: string | undefined;

  /**
   * The VPC connection endpoint for the cluster.
   *
   * @public
   */
  clusterVpcEndpoint?: string | undefined;
}

/**
 * @public
 */
export interface ListClustersInput {
  /**
   * An optional parameter that specifies the maximum number of results to return. You can use nextToken to display the next page of results.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * If your initial ListClusters operation returns a nextToken, you can include the returned nextToken in following ListClusters operations, which returns results in the next page.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * A summary of the properties of a cluster.
 *
 * @public
 */
export interface ClusterSummary {
  /**
   * The ID of the cluster.
   *
   * @public
   */
  identifier: string | undefined;

  /**
   * The ARN of the cluster.
   *
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface ListClustersOutput {
  /**
   * If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. To retrieve the next page, make the call again using the returned token.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * An array of the returned clusters.
   *
   * @public
   */
  clusters: ClusterSummary[] | undefined;
}

/**
 * @public
 */
export interface PutClusterPolicyInput {
  /**
   * The ID of the cluster.
   *
   * @public
   */
  identifier: string | undefined;

  /**
   * The resource-based policy document to attach to the cluster. This should be a valid JSON policy document that defines permissions and conditions.
   *
   * @public
   */
  policy: string | undefined;

  /**
   * A flag that allows you to bypass the policy lockout safety check. When set to true, this parameter allows you to apply a policy that might lock you out of the cluster. Use with caution.
   *
   * @public
   */
  bypassPolicyLockoutSafetyCheck?: boolean | undefined;

  /**
   * The expected version of the current policy. This parameter ensures that you're updating the correct version of the policy and helps prevent concurrent modification conflicts.
   *
   * @public
   */
  expectedPolicyVersion?: string | undefined;

  /**
   * Idempotency token so a request is only processed once.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface PutClusterPolicyOutput {
  /**
   * The version of the policy after it has been updated or created.
   *
   * @public
   */
  policyVersion: string | undefined;
}

/**
 * @public
 */
export interface UpdateClusterInput {
  /**
   * The ID of the cluster you want to update.
   *
   * @public
   */
  identifier: string | undefined;

  /**
   * Specifies whether to enable deletion protection in your cluster.
   *
   * @public
   */
  deletionProtectionEnabled?: boolean | undefined;

  /**
   * The KMS key that encrypts and protects the data on your cluster. You can specify the ARN, ID, or alias of an existing key or have Amazon Web Services create a default key for you.
   *
   * To switch to the key owned by Amazon Web Services, specify the reserved value `AWS_OWNED_KMS_KEY`.
   *
   * @public
   */
  kmsEncryptionKey?: string | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully. The subsequent retries with the same client token return the result from the original successful request and they have no additional effect.
   *
   * If you don't specify a client token, the Amazon Web Services SDK automatically generates one.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The new multi-Region cluster configuration settings to be applied during an update operation.
   *
   * @public
   */
  multiRegionProperties?: MultiRegionProperties | undefined;
}

/**
 * The details of the cluster after it has been updated.
 *
 * @public
 */
export interface UpdateClusterOutput {
  /**
   * The ID of the cluster to update.
   *
   * @public
   */
  identifier: string | undefined;

  /**
   * The ARN of the updated cluster.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The status of the updated cluster.
   *
   * @public
   */
  status: ClusterStatus | undefined;

  /**
   * The time of when the cluster was created.
   *
   * @public
   */
  creationTime: Date | undefined;
}

/**
 * Kinesis stream target configuration.
 *
 * @public
 */
export interface KinesisTargetDefinition {
  /**
   * The ARN of the Kinesis stream.
   *
   * @public
   */
  streamArn: string | undefined;

  /**
   * The ARN of the IAM role that grants permission to write to the Kinesis stream. This can be a standard role (`arn:aws:iam::account-id:role/role-name`) or a role with a path prefix (`arn:aws:iam::account-id:role/service-role/role-name`), such as roles auto-created by the console.
   *
   * @public
   */
  roleArn: string | undefined;
}

/**
 * Target definition for stream destination.
 *
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
   * Kinesis stream target configuration.
   *
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
   * The ID of the cluster for which to create the stream.
   *
   * @public
   */
  clusterIdentifier: string | undefined;

  /**
   * The target destination configuration for the stream. Contains Kinesis stream configuration including stream ARN and IAM role ARN.
   *
   * @public
   */
  targetDefinition: TargetDefinition | undefined;

  /**
   * The ordering mode for the stream. Determines how change events are ordered when delivered to the target.
   *
   * @public
   */
  ordering: StreamOrdering | undefined;

  /**
   * The format of the stream records.
   *
   * @public
   */
  format: StreamFormat | undefined;

  /**
   * A map of key and value pairs to use to tag your stream.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, the subsequent retries with the same client token return the result from the original successful request and they have no additional effect.
   *
   * If you don't specify a client token, the Amazon Web Services SDK automatically generates one.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * The output of a created stream.
 *
 * @public
 */
export interface CreateStreamOutput {
  /**
   * The ID of the cluster for the created stream.
   *
   * @public
   */
  clusterIdentifier: string | undefined;

  /**
   * The ID of the created stream.
   *
   * @public
   */
  streamIdentifier: string | undefined;

  /**
   * The ARN of the created stream.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The status of the created stream.
   *
   * @public
   */
  status: StreamStatus | undefined;

  /**
   * The time when created the stream.
   *
   * @public
   */
  creationTime: Date | undefined;

  /**
   * The ordering mode of the created stream.
   *
   * @public
   */
  ordering: StreamOrdering | undefined;

  /**
   * The format of the created stream records.
   *
   * @public
   */
  format: StreamFormat | undefined;
}

/**
 * @public
 */
export interface DeleteStreamInput {
  /**
   * The ID of the cluster containing the stream to delete.
   *
   * @public
   */
  clusterIdentifier: string | undefined;

  /**
   * The ID of the stream to delete.
   *
   * @public
   */
  streamIdentifier: string | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, the subsequent retries with the same client token return the result from the original successful request and they have no additional effect.
   *
   * If you don't specify a client token, the Amazon Web Services SDK automatically generates one.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * The output from a deleted stream.
 *
 * @public
 */
export interface DeleteStreamOutput {
  /**
   * The ID of the cluster for the deleted stream.
   *
   * @public
   */
  clusterIdentifier: string | undefined;

  /**
   * The ID of the deleted stream.
   *
   * @public
   */
  streamIdentifier: string | undefined;

  /**
   * The ARN of the deleted stream.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The status of the stream.
   *
   * @public
   */
  status: StreamStatus | undefined;

  /**
   * The time when the stream was created.
   *
   * @public
   */
  creationTime: Date | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceInput {
  /**
   * The ARN of the resource for which you want to list the tags.
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceOutput {
  /**
   * A map of key and value pairs that you used to tag your resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetStreamInput {
  /**
   * The ID of the cluster containing the stream to retrieve.
   *
   * @public
   */
  clusterIdentifier: string | undefined;

  /**
   * The ID of the stream to retrieve.
   *
   * @public
   */
  streamIdentifier: string | undefined;
}

/**
 * Stream status reason with error and timestamp.
 *
 * @public
 */
export interface StatusReason {
  /**
   * The error code for the stream failure.
   *
   * @public
   */
  error: StreamFailureErrorCode | undefined;

  /**
   * The timestamp when the status was updated.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * The output of a retrieved stream.
 *
 * @public
 */
export interface GetStreamOutput {
  /**
   * The ID of the cluster for the retrieved stream.
   *
   * @public
   */
  clusterIdentifier: string | undefined;

  /**
   * The ID of the retrieved stream.
   *
   * @public
   */
  streamIdentifier: string | undefined;

  /**
   * The ARN of the retrieved stream.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The current status of the retrieved stream.
   *
   * @public
   */
  status: StreamStatus | undefined;

  /**
   * The time when the stream was created.
   *
   * @public
   */
  creationTime: Date | undefined;

  /**
   * The ordering mode of the stream.
   *
   * @public
   */
  ordering: StreamOrdering | undefined;

  /**
   * The format of the stream records.
   *
   * @public
   */
  format: StreamFormat | undefined;

  /**
   * The target definition for the stream destination.
   *
   * @public
   */
  targetDefinition?: TargetDefinition | undefined;

  /**
   * Stream status reason with error code and timestamp (if applicable).
   *
   * @public
   */
  statusReason?: StatusReason | undefined;

  /**
   * A map of tags associated with the stream.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListStreamsInput {
  /**
   * The ID of the cluster for which to list streams.
   *
   * @public
   */
  clusterIdentifier: string | undefined;

  /**
   * An optional parameter that specifies the maximum number of results to return. You can use nextToken to display the next page of results. Default: 10.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * If your initial ListStreams operation returns a nextToken, you can include the returned nextToken in following ListStreams operations, which returns results in the next page.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Summary information about a stream.
 *
 * @public
 */
export interface StreamSummary {
  /**
   * The ID of the cluster.
   *
   * @public
   */
  clusterIdentifier: string | undefined;

  /**
   * The ID of the stream.
   *
   * @public
   */
  streamIdentifier: string | undefined;

  /**
   * The ARN of the stream.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The timestamp when the stream was created.
   *
   * @public
   */
  creationTime: Date | undefined;

  /**
   * The current status of the stream.
   *
   * @public
   */
  status: StreamStatus | undefined;
}

/**
 * @public
 */
export interface ListStreamsOutput {
  /**
   * If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. To retrieve the next page, make the call again using the returned token.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * An array of the returned streams.
   *
   * @public
   */
  streams: StreamSummary[] | undefined;
}

/**
 * @public
 */
export interface TagResourceInput {
  /**
   * The ARN of the resource that you want to tag.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * A map of key and value pairs to use to tag your resource.
   *
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UntagResourceInput {
  /**
   * The ARN of the resource from which to remove tags.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The array of keys of the tags that you want to remove.
   *
   * @public
   */
  tagKeys: string[] | undefined;
}
