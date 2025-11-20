// smithy-typescript generated code
import { ClusterStatus, EncryptionStatus, EncryptionType } from "./enums";

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
