// smithy-typescript generated code
import type { DocumentType as __DocumentType } from "@smithy/types";

import type {
  AccessPolicyType,
  AutoscalingStatus,
  CollectionStatus,
  CollectionType,
  DeletionProtection,
  IamIdentityCenterGroupAttribute,
  IamIdentityCenterUserAttribute,
  IngestionAlertCode,
  IngestionFailureCode,
  IngestionJobStatus,
  IngestionState,
  IngestionStreamStatus,
  InitialScan,
  LifecyclePolicyType,
  ResourceType,
  SecurityConfigType,
  SecurityPolicyType,
  ServerlessGeneration,
  ServerlessVectorAccelerationStatus,
  StandbyReplicas,
  VpcEndpointStatus,
} from "./enums";

/**
 * @public
 */
export interface CreateAccessPolicyRequest {
  /**
   * The type of policy.
   *
   * @public
   */
  type: AccessPolicyType | undefined;

  /**
   * The name of the policy.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A description of the policy. Typically used to store information about the permissions defined in the policy.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The JSON policy document to use as the content for the policy.
   *
   * @public
   */
  policy: string | undefined;

  /**
   * Unique, case-sensitive identifier to ensure idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * Details about an OpenSearch Serverless access policy.
 *
 * @public
 */
export interface AccessPolicyDetail {
  /**
   * The type of access policy.
   *
   * @public
   */
  type?: AccessPolicyType | undefined;

  /**
   * The name of the policy.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The version of the policy.
   *
   * @public
   */
  policyVersion?: string | undefined;

  /**
   * The description of the policy.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The JSON policy document without any whitespaces.
   *
   * @public
   */
  policy?: __DocumentType | undefined;

  /**
   * The date the policy was created.
   *
   * @public
   */
  createdDate?: number | undefined;

  /**
   * The timestamp of when the policy was last modified.
   *
   * @public
   */
  lastModifiedDate?: number | undefined;
}

/**
 * @public
 */
export interface CreateAccessPolicyResponse {
  /**
   * Details about the created access policy.
   *
   * @public
   */
  accessPolicyDetail?: AccessPolicyDetail | undefined;
}

/**
 * @public
 */
export interface DeleteAccessPolicyRequest {
  /**
   * The type of policy.
   *
   * @public
   */
  type: AccessPolicyType | undefined;

  /**
   * The name of the policy to delete.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Unique, case-sensitive identifier to ensure idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteAccessPolicyResponse {}

/**
 * @public
 */
export interface GetAccessPolicyRequest {
  /**
   * Tye type of policy. Currently, the only supported value is `data`.
   *
   * @public
   */
  type: AccessPolicyType | undefined;

  /**
   * The name of the access policy.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface GetAccessPolicyResponse {
  /**
   * Details about the requested access policy.
   *
   * @public
   */
  accessPolicyDetail?: AccessPolicyDetail | undefined;
}

/**
 * @public
 */
export interface ListAccessPoliciesRequest {
  /**
   * The type of access policy.
   *
   * @public
   */
  type: AccessPolicyType | undefined;

  /**
   * Resource filters (can be collections or indexes) that policies can apply to.
   *
   * @public
   */
  resource?: string[] | undefined;

  /**
   * If your initial `ListAccessPolicies` operation returns a `nextToken`, you can include the returned `nextToken` in subsequent `ListAccessPolicies` operations, which returns results in the next page.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * An optional parameter that specifies the maximum number of results to return. You can use `nextToken` to get the next page of results. The default is 20.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * A summary of the data access policy.
 *
 * @public
 */
export interface AccessPolicySummary {
  /**
   * The type of access policy. Currently, the only available type is `data`.
   *
   * @public
   */
  type?: AccessPolicyType | undefined;

  /**
   * The name of the access policy.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The version of the policy.
   *
   * @public
   */
  policyVersion?: string | undefined;

  /**
   * The description of the access policy.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The Epoch time when the access policy was created.
   *
   * @public
   */
  createdDate?: number | undefined;

  /**
   * The date and time when the collection was last modified.
   *
   * @public
   */
  lastModifiedDate?: number | undefined;
}

/**
 * @public
 */
export interface ListAccessPoliciesResponse {
  /**
   * Details about the requested access policies.
   *
   * @public
   */
  accessPolicySummaries?: AccessPolicySummary[] | undefined;

  /**
   * When `nextToken` is returned, there are more results available. The value of `nextToken` is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateAccessPolicyRequest {
  /**
   * The type of policy.
   *
   * @public
   */
  type: AccessPolicyType | undefined;

  /**
   * The name of the policy.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The version of the policy being updated.
   *
   * @public
   */
  policyVersion: string | undefined;

  /**
   * A description of the policy. Typically used to store information about the permissions defined in the policy.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The JSON policy document to use as the content for the policy.
   *
   * @public
   */
  policy?: string | undefined;

  /**
   * Unique, case-sensitive identifier to ensure idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateAccessPolicyResponse {
  /**
   * Details about the updated access policy.
   *
   * @public
   */
  accessPolicyDetail?: AccessPolicyDetail | undefined;
}

/**
 * Statistics for an OpenSearch Serverless access policy.
 *
 * @public
 */
export interface AccessPolicyStats {
  /**
   * The number of data access policies in the current account.
   *
   * @public
   */
  DataPolicyCount?: number | undefined;
}

/**
 * The maximum capacity limits for all OpenSearch Serverless collections, in OpenSearch Compute Units (OCUs). These limits are used to scale your collections based on the current workload. For more information, see [Managing capacity limits for Amazon OpenSearch Serverless](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-scaling.html).
 *
 * @public
 */
export interface CapacityLimits {
  /**
   * The maximum indexing capacity for collections.
   *
   * @public
   */
  maxIndexingCapacityInOCU?: number | undefined;

  /**
   * The maximum search capacity for collections.
   *
   * @public
   */
  maxSearchCapacityInOCU?: number | undefined;
}

/**
 * OpenSearch Serverless-related information for the current account.
 *
 * @public
 */
export interface AccountSettingsDetail {
  /**
   * The maximum capacity limits for all OpenSearch Serverless collections, in OpenSearch Compute Units (OCUs). These limits are used to scale your collections based on the current workload. For more information, see [Managing capacity limits for Amazon OpenSearch Serverless](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-scaling.html).
   *
   * @public
   */
  capacityLimits?: CapacityLimits | undefined;
}

/**
 * @public
 */
export interface BatchGetCollectionRequest {
  /**
   * A list of collection IDs. You can't provide names and IDs in the same request. The ID is part of the collection endpoint. You can also retrieve it using the [ListCollections](https://docs.aws.amazon.com/opensearch-service/latest/ServerlessAPIReference/API_ListCollections.html) API.
   *
   * @public
   */
  ids?: string[] | undefined;

  /**
   * A list of collection names. You can't provide names and IDs in the same request.
   *
   * @public
   */
  names?: string[] | undefined;
}

/**
 * FIPS-compliant endpoint URLs for an OpenSearch Serverless collection. These endpoints ensure all data transmission uses FIPS 140-3 validated cryptographic implementations, meeting federal security requirements for government workloads.
 *
 * @public
 */
export interface FipsEndpoints {
  /**
   * FIPS-compliant collection endpoint used to submit index, search, and data upload requests to an OpenSearch Serverless collection. This endpoint uses FIPS 140-3 validated cryptography and is required for federal government workloads.
   *
   * @public
   */
  collectionEndpoint?: string | undefined;

  /**
   * FIPS-compliant endpoint used to access OpenSearch Dashboards. This endpoint uses FIPS 140-3 validated cryptography and is required for federal government workloads that need dashboard visualization capabilities.
   *
   * @public
   */
  dashboardEndpoint?: string | undefined;
}

/**
 * Configuration options for vector search capabilities in an OpenSearch Serverless collection.
 *
 * @public
 */
export interface VectorOptions {
  /**
   * Specifies whether serverless vector acceleration is enabled for the collection.
   *
   * @public
   */
  ServerlessVectorAcceleration: ServerlessVectorAccelerationStatus | undefined;
}

/**
 * Details about each OpenSearch Serverless collection, including the collection endpoint, the OpenSearch Dashboards endpoint, and FIPS-compliant endpoints for federal government workloads.
 *
 * @public
 */
export interface CollectionDetail {
  /**
   * A unique identifier for the collection.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The name of the collection.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The current status of the collection.
   *
   * @public
   */
  status?: CollectionStatus | undefined;

  /**
   * The type of collection.
   *
   * @public
   */
  type?: CollectionType | undefined;

  /**
   * A description of the collection.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the collection.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The ARN of the Amazon Web Services KMS key used to encrypt the collection.
   *
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * Details about an OpenSearch Serverless collection.
   *
   * @public
   */
  standbyReplicas?: StandbyReplicas | undefined;

  /**
   * Indicates whether deletion protection is `ENABLED` or `DISABLED` for the collection.
   *
   * @public
   */
  deletionProtection?: DeletionProtection | undefined;

  /**
   * Configuration options for vector search capabilities in the collection.
   *
   * @public
   */
  vectorOptions?: VectorOptions | undefined;

  /**
   * The Epoch time when the collection was created.
   *
   * @public
   */
  createdDate?: number | undefined;

  /**
   * The date and time when the collection was last modified.
   *
   * @public
   */
  lastModifiedDate?: number | undefined;

  /**
   * Collection-specific endpoint used to submit index, search, and data upload requests to an OpenSearch Serverless collection.
   *
   * @public
   */
  collectionEndpoint?: string | undefined;

  /**
   * Collection-specific endpoint used to access OpenSearch Dashboards.
   *
   * @public
   */
  dashboardEndpoint?: string | undefined;

  /**
   * FIPS-compliant endpoints for the collection. These endpoints use FIPS 140-3 validated cryptographic modules and are required for federal government workloads that must comply with FedRAMP security standards.
   *
   * @public
   */
  fipsEndpoints?: FipsEndpoints | undefined;

  /**
   * A failure code associated with the request.
   *
   * @public
   */
  failureCode?: string | undefined;

  /**
   * A message associated with the failure code.
   *
   * @public
   */
  failureMessage?: string | undefined;

  /**
   * The name of the collection group that contains this collection.
   *
   * @public
   */
  collectionGroupName?: string | undefined;
}

/**
 * Error information for an OpenSearch Serverless request.
 *
 * @public
 */
export interface CollectionErrorDetail {
  /**
   * If the request contains collection IDs, the response includes the IDs provided in the request.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * If the request contains collection names, the response includes the names provided in the request.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * A description of the error. For example, `The specified Collection is not found.`
   *
   * @public
   */
  errorMessage?: string | undefined;

  /**
   * The error code for the request. For example, `NOT_FOUND`.
   *
   * @public
   */
  errorCode?: string | undefined;
}

/**
 * @public
 */
export interface BatchGetCollectionResponse {
  /**
   * Details about each collection.
   *
   * @public
   */
  collectionDetails?: CollectionDetail[] | undefined;

  /**
   * Error information for the request.
   *
   * @public
   */
  collectionErrorDetails?: CollectionErrorDetail[] | undefined;
}

/**
 * @public
 */
export interface BatchGetCollectionGroupRequest {
  /**
   * A list of collection group IDs. You can't provide names and IDs in the same request.
   *
   * @public
   */
  ids?: string[] | undefined;

  /**
   * A list of collection group names. You can't provide names and IDs in the same request.
   *
   * @public
   */
  names?: string[] | undefined;
}

/**
 * Capacity limits for a collection group. These limits define the minimum and maximum OpenSearch Compute Units (OCUs) for indexing and search operations that can be used by collections in the group.
 *
 * @public
 */
export interface CollectionGroupCapacityLimits {
  /**
   * The maximum indexing capacity for collections in the group.
   *
   * @public
   */
  maxIndexingCapacityInOCU?: number | undefined;

  /**
   * The maximum search capacity for collections in the group.
   *
   * @public
   */
  maxSearchCapacityInOCU?: number | undefined;

  /**
   * The minimum indexing capacity for collections in the group.
   *
   * @public
   */
  minIndexingCapacityInOCU?: number | undefined;

  /**
   * The minimum search capacity for collections in the group.
   *
   * @public
   */
  minSearchCapacityInOCU?: number | undefined;
}

/**
 * Capacity details for an OpenSearch Serverless collection group, including the current capacity and autoscaling status.
 *
 * @public
 */
export interface CapacityDetails {
  /**
   * The current capacity in OpenSearch Compute Units (OCUs).
   *
   * @public
   */
  capacityInOcu?: number | undefined;

  /**
   * The current autoscaling status for the collection group.
   *
   * @public
   */
  autoscalingStatus?: AutoscalingStatus | undefined;
}

/**
 * Current search and indexing capacity for an OpenSearch Serverless collection group. Measured in OpenSearch Compute Units (OCUs).
 *
 * @public
 */
export interface CurrentCapacity {
  /**
   * The search capacity for the collection group.
   *
   * @public
   */
  search?: CapacityDetails | undefined;

  /**
   * The indexing capacity for the collection group.
   *
   * @public
   */
  indexing?: CapacityDetails | undefined;
}

/**
 * A map of key-value pairs associated to an OpenSearch Serverless resource.
 *
 * @public
 */
export interface Tag {
  /**
   * The key to use in the tag.
   *
   * @public
   */
  key: string | undefined;

  /**
   * The value of the tag.
   *
   * @public
   */
  value: string | undefined;
}

/**
 * Details about a collection group.
 *
 * @public
 */
export interface CollectionGroupDetail {
  /**
   * The unique identifier of the collection group.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the collection group.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The name of the collection group.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Indicates whether standby replicas are used for the collection group.
   *
   * @public
   */
  standbyReplicas?: StandbyReplicas | undefined;

  /**
   * The description of the collection group.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * A map of key-value pairs associated with the collection group.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * The Epoch time when the collection group was created.
   *
   * @public
   */
  createdDate?: number | undefined;

  /**
   * The capacity limits for the collection group, in OpenSearch Compute Units (OCUs).
   *
   * @public
   */
  capacityLimits?: CollectionGroupCapacityLimits | undefined;

  /**
   * Current search and indexing capacity for the collection group.
   *
   * @public
   */
  currentCapacity?: CurrentCapacity | undefined;

  /**
   * The number of collections associated with the collection group.
   *
   * @public
   */
  numberOfCollections?: number | undefined;

  /**
   * The generation of Amazon OpenSearch Serverless for the collection group.
   *
   * @public
   */
  generation?: ServerlessGeneration | undefined;
}

/**
 * Error details for a collection group operation.
 *
 * @public
 */
export interface CollectionGroupErrorDetail {
  /**
   * If the request contains collection group IDs, the response includes the IDs provided in the request.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * If the request contains collection group names, the response includes the names provided in the request.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * A description of the error. For example, `The specified Collection Group is not found.`
   *
   * @public
   */
  errorMessage?: string | undefined;

  /**
   * The error code for the request. For example, `NOT_FOUND`.
   *
   * @public
   */
  errorCode?: string | undefined;
}

/**
 * @public
 */
export interface BatchGetCollectionGroupResponse {
  /**
   * Details about each collection group.
   *
   * @public
   */
  collectionGroupDetails?: CollectionGroupDetail[] | undefined;

  /**
   * Error information for the request.
   *
   * @public
   */
  collectionGroupErrorDetails?: CollectionGroupErrorDetail[] | undefined;
}

/**
 * The unique identifiers of policy types and resource names.
 *
 * @public
 */
export interface LifecyclePolicyResourceIdentifier {
  /**
   * The type of lifecycle policy.
   *
   * @public
   */
  type: LifecyclePolicyType | undefined;

  /**
   * The name of the OpenSearch Serverless ilndex resource.
   *
   * @public
   */
  resource: string | undefined;
}

/**
 * @public
 */
export interface BatchGetEffectiveLifecyclePolicyRequest {
  /**
   * The unique identifiers of policy types and resource names.
   *
   * @public
   */
  resourceIdentifiers: LifecyclePolicyResourceIdentifier[] | undefined;
}

/**
 * Error information for an OpenSearch Serverless request.
 *
 * @public
 */
export interface EffectiveLifecyclePolicyDetail {
  /**
   * The type of lifecycle policy.
   *
   * @public
   */
  type?: LifecyclePolicyType | undefined;

  /**
   * The name of the OpenSearch Serverless index resource.
   *
   * @public
   */
  resource?: string | undefined;

  /**
   * The name of the lifecycle policy.
   *
   * @public
   */
  policyName?: string | undefined;

  /**
   * The type of OpenSearch Serverless resource. Currently, the only supported resource is `index`.
   *
   * @public
   */
  resourceType?: ResourceType | undefined;

  /**
   * The minimum number of index retention in days or hours. This is an optional parameter that will return only if it’s set.
   *
   * @public
   */
  retentionPeriod?: string | undefined;

  /**
   * The minimum number of index retention days set. That is an optional param that will return as `true` if the minimum number of days or hours is not set to a index resource.
   *
   * @public
   */
  noMinRetentionPeriod?: boolean | undefined;
}

/**
 * Error information for an OpenSearch Serverless request.
 *
 * @public
 */
export interface EffectiveLifecyclePolicyErrorDetail {
  /**
   * The type of lifecycle policy.
   *
   * @public
   */
  type?: LifecyclePolicyType | undefined;

  /**
   * The name of OpenSearch Serverless index resource.
   *
   * @public
   */
  resource?: string | undefined;

  /**
   * A description of the error. For example, `The specified Index resource is not found`.
   *
   * @public
   */
  errorMessage?: string | undefined;

  /**
   * The error code for the request.
   *
   * @public
   */
  errorCode?: string | undefined;
}

/**
 * @public
 */
export interface BatchGetEffectiveLifecyclePolicyResponse {
  /**
   * A list of lifecycle policies applied to the OpenSearch Serverless indexes.
   *
   * @public
   */
  effectiveLifecyclePolicyDetails?: EffectiveLifecyclePolicyDetail[] | undefined;

  /**
   * A list of resources for which retrieval failed.
   *
   * @public
   */
  effectiveLifecyclePolicyErrorDetails?: EffectiveLifecyclePolicyErrorDetail[] | undefined;
}

/**
 * The unique identifiers of policy types and policy names.
 *
 * @public
 */
export interface LifecyclePolicyIdentifier {
  /**
   * The type of lifecycle policy.
   *
   * @public
   */
  type: LifecyclePolicyType | undefined;

  /**
   * The name of the lifecycle policy.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface BatchGetLifecyclePolicyRequest {
  /**
   * The unique identifiers of policy types and policy names.
   *
   * @public
   */
  identifiers: LifecyclePolicyIdentifier[] | undefined;
}

/**
 * Details about an OpenSearch Serverless lifecycle policy.
 *
 * @public
 */
export interface LifecyclePolicyDetail {
  /**
   * The type of lifecycle policy.
   *
   * @public
   */
  type?: LifecyclePolicyType | undefined;

  /**
   * The name of the lifecycle policy.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The version of the lifecycle policy.
   *
   * @public
   */
  policyVersion?: string | undefined;

  /**
   * The description of the lifecycle policy.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The JSON policy document without any whitespaces.
   *
   * @public
   */
  policy?: __DocumentType | undefined;

  /**
   * The date the lifecycle policy was created.
   *
   * @public
   */
  createdDate?: number | undefined;

  /**
   * The timestamp of when the lifecycle policy was last modified.
   *
   * @public
   */
  lastModifiedDate?: number | undefined;
}

/**
 * Error information for an OpenSearch Serverless request.
 *
 * @public
 */
export interface LifecyclePolicyErrorDetail {
  /**
   * The type of lifecycle policy.
   *
   * @public
   */
  type?: LifecyclePolicyType | undefined;

  /**
   * The name of the lifecycle policy.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * A description of the error. For example, `The specified Lifecycle Policy is not found`.
   *
   * @public
   */
  errorMessage?: string | undefined;

  /**
   * The error code for the request. For example, `NOT_FOUND`.
   *
   * @public
   */
  errorCode?: string | undefined;
}

/**
 * @public
 */
export interface BatchGetLifecyclePolicyResponse {
  /**
   * A list of lifecycle policies matched to the input policy name and policy type.
   *
   * @public
   */
  lifecyclePolicyDetails?: LifecyclePolicyDetail[] | undefined;

  /**
   * A list of lifecycle policy names and policy types for which retrieval failed.
   *
   * @public
   */
  lifecyclePolicyErrorDetails?: LifecyclePolicyErrorDetail[] | undefined;
}

/**
 * @public
 */
export interface BatchGetVpcEndpointRequest {
  /**
   * A list of VPC endpoint identifiers.
   *
   * @public
   */
  ids: string[] | undefined;
}

/**
 * Details about an OpenSearch Serverless-managed interface endpoint.
 *
 * @public
 */
export interface VpcEndpointDetail {
  /**
   * The unique identifier of the endpoint.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The name of the endpoint.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The ID of the VPC from which you access OpenSearch Serverless.
   *
   * @public
   */
  vpcId?: string | undefined;

  /**
   * The ID of the subnets from which you access OpenSearch Serverless.
   *
   * @public
   */
  subnetIds?: string[] | undefined;

  /**
   * The unique identifiers of the security groups that define the ports, protocols, and sources for inbound traffic that you are authorizing into your endpoint.
   *
   * @public
   */
  securityGroupIds?: string[] | undefined;

  /**
   * The current status of the endpoint.
   *
   * @public
   */
  status?: VpcEndpointStatus | undefined;

  /**
   * The date the endpoint was created.
   *
   * @public
   */
  createdDate?: number | undefined;

  /**
   * A failure code associated with the request.
   *
   * @public
   */
  failureCode?: string | undefined;

  /**
   * A message associated with the failure code.
   *
   * @public
   */
  failureMessage?: string | undefined;
}

/**
 * Error information for a failed `BatchGetVpcEndpoint` request.
 *
 * @public
 */
export interface VpcEndpointErrorDetail {
  /**
   * The unique identifier of the VPC endpoint.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * An error message describing the reason for the failure.
   *
   * @public
   */
  errorMessage?: string | undefined;

  /**
   * The error code for the failed request.
   *
   * @public
   */
  errorCode?: string | undefined;
}

/**
 * @public
 */
export interface BatchGetVpcEndpointResponse {
  /**
   * Details about the specified VPC endpoint.
   *
   * @public
   */
  vpcEndpointDetails?: VpcEndpointDetail[] | undefined;

  /**
   * Error information for a failed request.
   *
   * @public
   */
  vpcEndpointErrorDetails?: VpcEndpointErrorDetail[] | undefined;
}

/**
 * @public
 */
export interface CancelIngestionJobRequest {
  /**
   * The unique identifier of the collection that the ingestion job belongs to.
   *
   * @public
   */
  collectionId: string | undefined;

  /**
   * The unique identifier of the ingestion job to cancel.
   *
   * @public
   */
  ingestionJobId: string | undefined;

  /**
   * Unique, case-sensitive identifier to ensure idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CancelIngestionJobResponse {
  /**
   * The unique identifier of the cancelled ingestion job.
   *
   * @public
   */
  ingestionJobId?: string | undefined;

  /**
   * The unique identifier of the collection that the ingestion job belongs to.
   *
   * @public
   */
  collectionId?: string | undefined;

  /**
   * The name of the cancelled ingestion job.
   *
   * @public
   */
  ingestionJobName?: string | undefined;

  /**
   * The current status of the ingestion job.
   *
   * @public
   */
  status?: IngestionJobStatus | undefined;
}

/**
 * Encryption settings for a collection.
 *
 * @public
 */
export interface EncryptionConfig {
  /**
   * Indicates whether to use an Amazon Web Services-owned key for encryption.
   *
   * @public
   */
  aWSOwnedKey?: boolean | undefined;

  /**
   * The ARN of the Amazon Web Services Key Management Service key used to encrypt the collection.
   *
   * @public
   */
  kmsKeyArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateCollectionRequest {
  /**
   * Name of the collection.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The type of collection.
   *
   * @public
   */
  type?: CollectionType | undefined;

  /**
   * Description of the collection.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * An arbitrary set of tags (key–value pairs) to associate with the OpenSearch Serverless collection.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * Indicates whether standby replicas should be used for a collection.
   *
   * @public
   */
  standbyReplicas?: StandbyReplicas | undefined;

  /**
   * Configuration options for vector search capabilities in the collection.
   *
   * @public
   */
  vectorOptions?: VectorOptions | undefined;

  /**
   * The name of the collection group to associate with the collection.
   *
   * @public
   */
  collectionGroupName?: string | undefined;

  /**
   * Encryption settings for the collection.
   *
   * @public
   */
  encryptionConfig?: EncryptionConfig | undefined;

  /**
   * Indicates whether to enable deletion protection for the collection. When set to `ENABLED`, the collection cannot be deleted.
   *
   * @public
   */
  deletionProtection?: DeletionProtection | undefined;

  /**
   * Unique, case-sensitive identifier to ensure idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * Details about the created OpenSearch Serverless collection.
 *
 * @public
 */
export interface CreateCollectionDetail {
  /**
   * The unique identifier of the collection.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The name of the collection.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The current status of the collection.
   *
   * @public
   */
  status?: CollectionStatus | undefined;

  /**
   * The type of collection.
   *
   * @public
   */
  type?: CollectionType | undefined;

  /**
   * A description of the collection.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the collection.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the KMS key with which to encrypt the collection.
   *
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * Creates details about an OpenSearch Serverless collection.
   *
   * @public
   */
  standbyReplicas?: StandbyReplicas | undefined;

  /**
   * Indicates whether deletion protection is `ENABLED` or `DISABLED` for the collection.
   *
   * @public
   */
  deletionProtection?: DeletionProtection | undefined;

  /**
   * Configuration options for vector search capabilities in the collection.
   *
   * @public
   */
  vectorOptions?: VectorOptions | undefined;

  /**
   * The Epoch time when the collection was created.
   *
   * @public
   */
  createdDate?: number | undefined;

  /**
   * The date and time when the collection was last modified.
   *
   * @public
   */
  lastModifiedDate?: number | undefined;

  /**
   * The name of the collection group that contains this collection.
   *
   * @public
   */
  collectionGroupName?: string | undefined;
}

/**
 * @public
 */
export interface CreateCollectionResponse {
  /**
   * Details about the collection.
   *
   * @public
   */
  createCollectionDetail?: CreateCollectionDetail | undefined;
}

/**
 * @public
 */
export interface DeleteCollectionRequest {
  /**
   * The unique identifier of the collection. For example, `1iu5usc406kd`. The ID is part of the collection endpoint. You can also retrieve it using the [ListCollections](https://docs.aws.amazon.com/opensearch-service/latest/ServerlessAPIReference/API_ListCollections.html) API.
   *
   * @public
   */
  id: string | undefined;

  /**
   * A unique, case-sensitive identifier to ensure idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * Details about a deleted OpenSearch Serverless collection.
 *
 * @public
 */
export interface DeleteCollectionDetail {
  /**
   * The unique identifier of the collection.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The name of the collection.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The current status of the collection.
   *
   * @public
   */
  status?: CollectionStatus | undefined;

  /**
   * Indicates whether deletion protection is `ENABLED` or `DISABLED` for the collection.
   *
   * @public
   */
  deletionProtection?: DeletionProtection | undefined;
}

/**
 * @public
 */
export interface DeleteCollectionResponse {
  /**
   * Details of the deleted collection.
   *
   * @public
   */
  deleteCollectionDetail?: DeleteCollectionDetail | undefined;
}

/**
 * A list of filter keys that you can use for LIST, UPDATE, and DELETE requests to OpenSearch Serverless collections.
 *
 * @public
 */
export interface CollectionFilters {
  /**
   * The name of the collection.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The current status of the collection.
   *
   * @public
   */
  status?: CollectionStatus | undefined;

  /**
   * The name of the collection group to filter by.
   *
   * @public
   */
  collectionGroupName?: string | undefined;
}

/**
 * @public
 */
export interface ListCollectionsRequest {
  /**
   * A list of filter names and values that you can use for requests.
   *
   * @public
   */
  collectionFilters?: CollectionFilters | undefined;

  /**
   * If your initial `ListCollections` operation returns a `nextToken`, you can include the returned `nextToken` in subsequent `ListCollections` operations, which returns results in the next page.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return. Default is 20. You can use `nextToken` to get the next page of results.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Details about each OpenSearch Serverless collection.
 *
 * @public
 */
export interface CollectionSummary {
  /**
   * The unique identifier of the collection.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The name of the collection.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The current status of the collection.
   *
   * @public
   */
  status?: CollectionStatus | undefined;

  /**
   * The Amazon Resource Name (ARN) of the collection.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The ARN of the Amazon Web Services Key Management Service key used to encrypt the collection.
   *
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * The name of the collection group that contains this collection.
   *
   * @public
   */
  collectionGroupName?: string | undefined;
}

/**
 * @public
 */
export interface ListCollectionsResponse {
  /**
   * Details about each collection.
   *
   * @public
   */
  collectionSummaries?: CollectionSummary[] | undefined;

  /**
   * When `nextToken` is returned, there are more results available. The value of `nextToken` is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateCollectionRequest {
  /**
   * The unique identifier of the collection.
   *
   * @public
   */
  id: string | undefined;

  /**
   * A description of the collection.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Configuration options for vector search capabilities in the collection.
   *
   * @public
   */
  vectorOptions?: VectorOptions | undefined;

  /**
   * Indicates whether to enable or disable deletion protection for the collection. When set to `ENABLED`, the collection cannot be deleted.
   *
   * @public
   */
  deletionProtection?: DeletionProtection | undefined;

  /**
   * Encryption settings for a collection.
   *
   * @public
   */
  encryptionConfig?: EncryptionConfig | undefined;

  /**
   * Unique, case-sensitive identifier to ensure idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * Details about an updated OpenSearch Serverless collection.
 *
 * @public
 */
export interface UpdateCollectionDetail {
  /**
   * The unique identifier of the collection.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The name of the collection.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The current status of the collection.
   *
   * @public
   */
  status?: CollectionStatus | undefined;

  /**
   * The collection type.
   *
   * @public
   */
  type?: CollectionType | undefined;

  /**
   * The description of the collection.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Configuration options for vector search capabilities in the collection.
   *
   * @public
   */
  vectorOptions?: VectorOptions | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon Web Services Key Management Service (Amazon Web Services KMS) key used to encrypt the collection.
   *
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the collection.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The date and time when the collection was created.
   *
   * @public
   */
  createdDate?: number | undefined;

  /**
   * The date and time when the collection was last modified.
   *
   * @public
   */
  lastModifiedDate?: number | undefined;

  /**
   * Indicates whether deletion protection is `ENABLED` or `DISABLED` for the collection.
   *
   * @public
   */
  deletionProtection?: DeletionProtection | undefined;
}

/**
 * @public
 */
export interface UpdateCollectionResponse {
  /**
   * Details about the updated collection.
   *
   * @public
   */
  updateCollectionDetail?: UpdateCollectionDetail | undefined;
}

/**
 * @public
 */
export interface CreateCollectionGroupRequest {
  /**
   * The name of the collection group.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Indicates whether standby replicas should be used for a collection group.
   *
   * @public
   */
  standbyReplicas: StandbyReplicas | undefined;

  /**
   * A description of the collection group.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * An arbitrary set of tags (key–value pairs) to associate with the OpenSearch Serverless collection group.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * The capacity limits for the collection group, in OpenSearch Compute Units (OCUs). These limits control the maximum and minimum capacity for collections within the group.
   *
   * @public
   */
  capacityLimits?: CollectionGroupCapacityLimits | undefined;

  /**
   * The generation of Amazon OpenSearch Serverless for the collection group. Valid values are `CLASSIC` and `NEXTGEN`.
   *
   * @public
   */
  generation?: ServerlessGeneration | undefined;

  /**
   * Unique, case-sensitive identifier to ensure idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * Details about the created collection group.
 *
 * @public
 */
export interface CreateCollectionGroupDetail {
  /**
   * The unique identifier of the collection group.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the collection group.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The name of the collection group.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Indicates whether standby replicas are used for the collection group.
   *
   * @public
   */
  standbyReplicas?: StandbyReplicas | undefined;

  /**
   * The description of the collection group.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * A map of key-value pairs associated with the collection group.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * The Epoch time when the collection group was created.
   *
   * @public
   */
  createdDate?: number | undefined;

  /**
   * The capacity limits for the collection group, in OpenSearch Compute Units (OCUs).
   *
   * @public
   */
  capacityLimits?: CollectionGroupCapacityLimits | undefined;

  /**
   * The generation of Amazon OpenSearch Serverless for the collection group.
   *
   * @public
   */
  generation?: ServerlessGeneration | undefined;
}

/**
 * @public
 */
export interface CreateCollectionGroupResponse {
  /**
   * Details about the created collection group.
   *
   * @public
   */
  createCollectionGroupDetail?: CreateCollectionGroupDetail | undefined;
}

/**
 * @public
 */
export interface DeleteCollectionGroupRequest {
  /**
   * The unique identifier of the collection group to delete.
   *
   * @public
   */
  id: string | undefined;

  /**
   * Unique, case-sensitive identifier to ensure idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteCollectionGroupResponse {}

/**
 * @public
 */
export interface ListCollectionGroupsRequest {
  /**
   * If your initial `ListCollectionGroups` operation returns a `nextToken`, you can include the returned `nextToken` in subsequent `ListCollectionGroups` operations, which returns results in the next page.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return. Default is 20. You can use `nextToken` to get the next page of results.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Summary information about a collection group.
 *
 * @public
 */
export interface CollectionGroupSummary {
  /**
   * The unique identifier of the collection group.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the collection group.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The name of the collection group.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The number of collections within the collection group.
   *
   * @public
   */
  numberOfCollections?: number | undefined;

  /**
   * The Epoch time when the collection group was created.
   *
   * @public
   */
  createdDate?: number | undefined;

  /**
   * Capacity limits for a collection group. These limits define the minimum and maximum OpenSearch Compute Units (OCUs) for indexing and search operations that can be used by collections in the group.
   *
   * @public
   */
  capacityLimits?: CollectionGroupCapacityLimits | undefined;

  /**
   * The generation of Amazon OpenSearch Serverless for the collection group.
   *
   * @public
   */
  generation?: ServerlessGeneration | undefined;
}

/**
 * @public
 */
export interface ListCollectionGroupsResponse {
  /**
   * Details about each collection group.
   *
   * @public
   */
  collectionGroupSummaries?: CollectionGroupSummary[] | undefined;

  /**
   * When `nextToken` is returned, there are more results available. The value of `nextToken` is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateCollectionGroupRequest {
  /**
   * The unique identifier of the collection group to update.
   *
   * @public
   */
  id: string | undefined;

  /**
   * A new description for the collection group.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The updated capacity limits for the collection group, in OpenSearch Compute Units (OCUs). Updates to capacity limits are not incremental. Any field not specified resets to its default value.
   *
   * @public
   */
  capacityLimits?: CollectionGroupCapacityLimits | undefined;

  /**
   * Unique, case-sensitive identifier to ensure idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * Details about the updated collection group.
 *
 * @public
 */
export interface UpdateCollectionGroupDetail {
  /**
   * The unique identifier of the collection group.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the collection group.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The name of the collection group.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The description of the collection group.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The capacity limits for the collection group, in OpenSearch Compute Units (OCUs).
   *
   * @public
   */
  capacityLimits?: CollectionGroupCapacityLimits | undefined;

  /**
   * The Epoch time when the collection group was created.
   *
   * @public
   */
  createdDate?: number | undefined;

  /**
   * The date and time when the collection group was last modified.
   *
   * @public
   */
  lastModifiedDate?: number | undefined;

  /**
   * The generation of Amazon OpenSearch Serverless for the collection group.
   *
   * @public
   */
  generation?: ServerlessGeneration | undefined;
}

/**
 * @public
 */
export interface UpdateCollectionGroupResponse {
  /**
   * Details about the updated collection group.
   *
   * @public
   */
  updateCollectionGroupDetail?: UpdateCollectionGroupDetail | undefined;
}

/**
 * Describes IAM Identity Center options for creating an OpenSearch Serverless security configuration in the form of a key-value map.
 *
 * @public
 */
export interface CreateIamIdentityCenterConfigOptions {
  /**
   * The ARN of the IAM Identity Center instance used to integrate with OpenSearch Serverless.
   *
   * @public
   */
  instanceArn: string | undefined;

  /**
   * The user attribute for this IAM Identity Center integration. Defaults to `UserId`.
   *
   * @public
   */
  userAttribute?: IamIdentityCenterUserAttribute | undefined;

  /**
   * The group attribute for this IAM Identity Center integration. Defaults to `GroupId`.
   *
   * @public
   */
  groupAttribute?: IamIdentityCenterGroupAttribute | undefined;
}

/**
 * @public
 */
export interface CreateIndexRequest {
  /**
   * The unique identifier of the collection in which to create the index.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The name of the index to create. Index names must be lowercase and can't begin with underscores (_) or hyphens (-).
   *
   * @public
   */
  indexName: string | undefined;

  /**
   * The JSON schema definition for the index, including field mappings and settings.
   *
   * @public
   */
  indexSchema?: __DocumentType | undefined;
}

/**
 * @public
 */
export interface CreateIndexResponse {}

/**
 * The Amazon S3 source configuration for an ingestion job.
 *
 * @public
 */
export interface IngestionJobS3Source {
  /**
   * The name or Amazon Resource Name (ARN) of the Amazon S3 bucket to ingest data from.
   *
   * @public
   */
  bucket?: string | undefined;

  /**
   * The Amazon Web Services account ID that owns the Amazon S3 bucket.
   *
   * @public
   */
  bucketOwnerAccountId?: string | undefined;

  /**
   * A key prefix that limits ingestion to objects in the Amazon S3 bucket whose keys begin with the prefix.
   *
   * @public
   */
  keyPrefix?: string | undefined;
}

/**
 * The source that an ingestion job ingests data from.
 *
 * @public
 */
export interface IngestionJobSource {
  /**
   * The Amazon S3 source configuration for the ingestion job.
   *
   * @public
   */
  s3: IngestionJobS3Source | undefined;
}

/**
 * @public
 */
export interface CreateIngestionJobRequest {
  /**
   * The unique identifier of the collection to ingest data into.
   *
   * @public
   */
  collectionId: string | undefined;

  /**
   * The name of the ingestion job. The name must be unique within the collection.
   *
   * @public
   */
  ingestionJobName: string | undefined;

  /**
   * The name of the index to ingest documents into.
   *
   * @public
   */
  indexName: string | undefined;

  /**
   * The name of the index where documents that fail to be ingested are recorded.
   *
   * @public
   */
  failureIndexName?: string | undefined;

  /**
   * The Amazon S3 source to ingest data from.
   *
   * @public
   */
  source: IngestionJobSource | undefined;

  /**
   * An arbitrary set of tags (key–value pairs) to associate with the ingestion job.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * Unique, case-sensitive identifier to ensure idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * An active alert about a running ingestion — operational issues
 * or updates to processing state. Cleared when the issue resolves.
 * @public
 */
export interface IngestionAlert {
  /**
   * The code that identifies the alert.
   *
   * @public
   */
  code?: IngestionAlertCode | undefined;

  /**
   * A description of the alert.
   *
   * @public
   */
  message?: string | undefined;
}

/**
 * A terminal failure reason explaining why an ingestion stopped.
 * @public
 */
export interface IngestionFailureReason {
  /**
   * The code that identifies the reason for the failure.
   *
   * @public
   */
  code?: IngestionFailureCode | undefined;

  /**
   * A description of the reason for the failure.
   *
   * @public
   */
  message?: string | undefined;
}

/**
 * Processing statistics for the Amazon S3 objects in an ingestion source.
 *
 * @public
 */
export interface S3Statistics {
  /**
   * The number of Amazon S3 objects discovered for ingestion.
   *
   * @public
   */
  objectsDiscovered?: number | undefined;

  /**
   * The number of Amazon S3 objects successfully ingested.
   *
   * @public
   */
  objectsIngested?: number | undefined;

  /**
   * The number of Amazon S3 objects that failed to be ingested.
   *
   * @public
   */
  objectsFailed?: number | undefined;
}

/**
 * Processing statistics for an ingestion job or ingestion stream.
 *
 * @public
 */
export interface IngestionStatistics {
  /**
   * Processing statistics for the Amazon S3 source.
   *
   * @public
   */
  s3?: S3Statistics | undefined;
}

/**
 * Details about an ingestion job.
 *
 * @public
 */
export interface IngestionJobDetail {
  /**
   * The unique identifier of the ingestion job.
   *
   * @public
   */
  ingestionJobId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the ingestion job.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The unique identifier of the collection that the ingestion job belongs to.
   *
   * @public
   */
  collectionId?: string | undefined;

  /**
   * The name of the ingestion job.
   *
   * @public
   */
  ingestionJobName?: string | undefined;

  /**
   * The name of the index that documents are ingested into.
   *
   * @public
   */
  indexName?: string | undefined;

  /**
   * The name of the index where documents that fail to be ingested are recorded.
   *
   * @public
   */
  failureIndexName?: string | undefined;

  /**
   * The Amazon S3 source that the ingestion job ingests data from.
   *
   * @public
   */
  source?: IngestionJobSource | undefined;

  /**
   * The current lifecycle status of the ingestion job. For example, `CREATING`, `ACTIVE`, `COMPLETED`, or `CANCELLED`.
   *
   * @public
   */
  status?: IngestionJobStatus | undefined;

  /**
   * The current processing state of the ingestion job. For example, `SCANNING`, `INGESTION_IN_PROGRESS`, or `INGESTION_COMPLETE`.
   *
   * @public
   */
  state?: IngestionState | undefined;

  /**
   * Processing statistics for the ingestion job, such as the number of Amazon S3 objects discovered, ingested, and failed.
   *
   * @public
   */
  statistics?: IngestionStatistics | undefined;

  /**
   * The revision number of the ingestion job.
   *
   * @public
   */
  revision?: number | undefined;

  /**
   * The date and time when the ingestion job was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The date and time when the ingestion job was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The reasons that the ingestion job reached a terminal failure state, if applicable.
   *
   * @public
   */
  failureReasons?: IngestionFailureReason[] | undefined;

  /**
   * Active alerts about operational issues that currently affect the ingestion job. Alerts are cleared when the issue is resolved.
   *
   * @public
   */
  activeAlerts?: IngestionAlert[] | undefined;
}

/**
 * @public
 */
export interface CreateIngestionJobResponse {
  /**
   * Details about the created ingestion job.
   *
   * @public
   */
  ingestionJobDetail?: IngestionJobDetail | undefined;
}

/**
 * S3 bucket configuration for SQS-driven ingestion. The scan mode controls only
 * the optional one-time delta scan of existing objects in this bucket.
 * @public
 */
export interface StreamBucketConfig {
  /**
   * The name or Amazon Resource Name (ARN) of the Amazon S3 bucket to ingest data from.
   *
   * @public
   */
  bucket: string | undefined;

  /**
   * The AWS account ID that owns the S3 bucket. Optional. If omitted, the
   * control plane derives it from the account segment of sqsArn.
   * @public
   */
  bucketOwnerAccountId?: string | undefined;

  /**
   * Specifies whether to perform a one-time scan of the objects that already exist in the bucket before the stream begins processing Amazon S3 event notifications. If `DISABLED`, only new objects are ingested.
   *
   * @public
   */
  initialScan?: InitialScan | undefined;
}

/**
 * The Amazon S3 source configuration for an ingestion stream.
 *
 * @public
 */
export interface IngestionStreamS3Source {
  /**
   * The Amazon Resource Name (ARN) of the Amazon SQS queue that receives Amazon S3 event notifications for the source buckets.
   *
   * @public
   */
  sqsArn: string | undefined;

  /**
   * The configuration for each Amazon S3 bucket that the ingestion stream ingests data from.
   *
   * @public
   */
  buckets?: StreamBucketConfig[] | undefined;
}

/**
 * The source that an ingestion stream ingests data from.
 *
 * @public
 */
export interface IngestionStreamSource {
  /**
   * The Amazon S3 source configuration for the ingestion stream.
   *
   * @public
   */
  s3: IngestionStreamS3Source | undefined;
}

/**
 * @public
 */
export interface CreateIngestionStreamRequest {
  /**
   * The unique identifier of the collection to ingest data into.
   *
   * @public
   */
  collectionId: string | undefined;

  /**
   * The name of the ingestion stream. The name must be unique within the collection.
   *
   * @public
   */
  ingestionStreamName: string | undefined;

  /**
   * The name of the index to ingest documents into.
   *
   * @public
   */
  indexName: string | undefined;

  /**
   * The name of the index where documents that fail to be ingested are recorded.
   *
   * @public
   */
  failureIndexName?: string | undefined;

  /**
   * The Amazon S3 source to ingest data from, including the Amazon SQS queue that receives S3 event notifications.
   *
   * @public
   */
  source: IngestionStreamSource | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that OpenSearch Serverless assumes to read data from the source. The role must be in the same account as the collection.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * An arbitrary set of tags (key–value pairs) to associate with the ingestion stream.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * Unique, case-sensitive identifier to ensure idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * Details about an ingestion stream.
 *
 * @public
 */
export interface IngestionStreamDetail {
  /**
   * The unique identifier of the ingestion stream.
   *
   * @public
   */
  ingestionStreamId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the ingestion stream.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The unique identifier of the collection that the ingestion stream belongs to.
   *
   * @public
   */
  collectionId?: string | undefined;

  /**
   * The name of the ingestion stream.
   *
   * @public
   */
  ingestionStreamName?: string | undefined;

  /**
   * The name of the index that documents are ingested into.
   *
   * @public
   */
  indexName?: string | undefined;

  /**
   * The name of the index where documents that fail to be ingested are recorded.
   *
   * @public
   */
  failureIndexName?: string | undefined;

  /**
   * The Amazon S3 source that the ingestion stream ingests data from.
   *
   * @public
   */
  source?: IngestionStreamSource | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that OpenSearch Serverless assumes to read data from the source.
   *
   * @public
   */
  roleArn?: string | undefined;

  /**
   * The current lifecycle status of the ingestion stream. For example, `CREATING`, `ACTIVE`, or `DELETING`.
   *
   * @public
   */
  status?: IngestionStreamStatus | undefined;

  /**
   * The current processing state of the ingestion stream. For example, `STARTING` or `INGESTION_IN_PROGRESS`.
   *
   * @public
   */
  state?: IngestionState | undefined;

  /**
   * Processing statistics for the ingestion stream, such as the number of Amazon S3 objects discovered, ingested, and failed.
   *
   * @public
   */
  statistics?: IngestionStatistics | undefined;

  /**
   * The revision number of the ingestion stream.
   *
   * @public
   */
  revision?: number | undefined;

  /**
   * The date and time when the ingestion stream was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The date and time when the ingestion stream was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The reasons that the ingestion stream reached a terminal failure state, if applicable.
   *
   * @public
   */
  failureReasons?: IngestionFailureReason[] | undefined;

  /**
   * Active alerts about operational issues that currently affect the ingestion stream. Alerts are cleared when the issue is resolved.
   *
   * @public
   */
  activeAlerts?: IngestionAlert[] | undefined;
}

/**
 * @public
 */
export interface CreateIngestionStreamResponse {
  /**
   * Details about the created ingestion stream.
   *
   * @public
   */
  ingestionStreamDetail?: IngestionStreamDetail | undefined;
}

/**
 * @public
 */
export interface CreateLifecyclePolicyRequest {
  /**
   * The type of lifecycle policy.
   *
   * @public
   */
  type: LifecyclePolicyType | undefined;

  /**
   * The name of the lifecycle policy.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A description of the lifecycle policy.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The JSON policy document to use as the content for the lifecycle policy.
   *
   * @public
   */
  policy: string | undefined;

  /**
   * A unique, case-sensitive identifier to ensure idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateLifecyclePolicyResponse {
  /**
   * Details about the created lifecycle policy.
   *
   * @public
   */
  lifecyclePolicyDetail?: LifecyclePolicyDetail | undefined;
}

/**
 * Describes IAM federation options for an OpenSearch Serverless security configuration in the form of a key-value map. These options define how OpenSearch Serverless integrates with external identity providers using federation.
 *
 * @public
 */
export interface IamFederationConfigOptions {
  /**
   * The group attribute for this IAM federation integration. This attribute is used to map identity provider groups to OpenSearch Serverless permissions.
   *
   * @public
   */
  groupAttribute?: string | undefined;

  /**
   * The user attribute for this IAM federation integration. This attribute is used to identify users in the federated authentication process.
   *
   * @public
   */
  userAttribute?: string | undefined;
}

/**
 * Describes SAML options for an OpenSearch Serverless security configuration in the form of a key-value map.
 *
 * @public
 */
export interface SamlConfigOptions {
  /**
   * The XML IdP metadata file generated from your identity provider.
   *
   * @public
   */
  metadata: string | undefined;

  /**
   * A user attribute for this SAML integration.
   *
   * @public
   */
  userAttribute?: string | undefined;

  /**
   * The group attribute for this SAML integration.
   *
   * @public
   */
  groupAttribute?: string | undefined;

  /**
   * Custom entity ID attribute to override the default entity ID for this SAML integration.
   *
   * @public
   */
  openSearchServerlessEntityId?: string | undefined;

  /**
   * The session timeout, in minutes. Default is 60 minutes (12 hours).
   *
   * @public
   */
  sessionTimeout?: number | undefined;
}

/**
 * @public
 */
export interface CreateSecurityConfigRequest {
  /**
   * The type of security configuration.
   *
   * @public
   */
  type: SecurityConfigType | undefined;

  /**
   * The name of the security configuration.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A description of the security configuration.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Describes SAML options in the form of a key-value map. This field is required if you specify `SAML` for the `type` parameter.
   *
   * @public
   */
  samlOptions?: SamlConfigOptions | undefined;

  /**
   * Describes IAM Identity Center options in the form of a key-value map. This field is required if you specify `iamidentitycenter` for the `type` parameter.
   *
   * @public
   */
  iamIdentityCenterOptions?: CreateIamIdentityCenterConfigOptions | undefined;

  /**
   * Describes IAM federation options in the form of a key-value map. This field is required if you specify `iamFederation` for the `type` parameter.
   *
   * @public
   */
  iamFederationOptions?: IamFederationConfigOptions | undefined;

  /**
   * Unique, case-sensitive identifier to ensure idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * Describes IAM Identity Center options for an OpenSearch Serverless security configuration in the form of a key-value map.
 *
 * @public
 */
export interface IamIdentityCenterConfigOptions {
  /**
   * The ARN of the IAM Identity Center instance used to integrate with OpenSearch Serverless.
   *
   * @public
   */
  instanceArn?: string | undefined;

  /**
   * The ARN of the IAM Identity Center application used to integrate with OpenSearch Serverless.
   *
   * @public
   */
  applicationArn?: string | undefined;

  /**
   * The name of the IAM Identity Center application used to integrate with OpenSearch Serverless.
   *
   * @public
   */
  applicationName?: string | undefined;

  /**
   * The description of the IAM Identity Center application used to integrate with OpenSearch Serverless.
   *
   * @public
   */
  applicationDescription?: string | undefined;

  /**
   * The user attribute for this IAM Identity Center integration. Defaults to `UserId`
   *
   * @public
   */
  userAttribute?: IamIdentityCenterUserAttribute | undefined;

  /**
   * The group attribute for this IAM Identity Center integration. Defaults to `GroupId`.
   *
   * @public
   */
  groupAttribute?: IamIdentityCenterGroupAttribute | undefined;
}

/**
 * Details about a security configuration for OpenSearch Serverless.
 *
 * @public
 */
export interface SecurityConfigDetail {
  /**
   * The unique identifier of the security configuration.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The type of security configuration.
   *
   * @public
   */
  type?: SecurityConfigType | undefined;

  /**
   * The version of the security configuration.
   *
   * @public
   */
  configVersion?: string | undefined;

  /**
   * The description of the security configuration.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * SAML options for the security configuration in the form of a key-value map.
   *
   * @public
   */
  samlOptions?: SamlConfigOptions | undefined;

  /**
   * Describes IAM Identity Center options in the form of a key-value map.
   *
   * @public
   */
  iamIdentityCenterOptions?: IamIdentityCenterConfigOptions | undefined;

  /**
   * Describes IAM federation options in the form of a key-value map. Contains configuration details about how OpenSearch Serverless integrates with external identity providers through federation.
   *
   * @public
   */
  iamFederationOptions?: IamFederationConfigOptions | undefined;

  /**
   * The date the configuration was created.
   *
   * @public
   */
  createdDate?: number | undefined;

  /**
   * The timestamp of when the configuration was last modified.
   *
   * @public
   */
  lastModifiedDate?: number | undefined;
}

/**
 * @public
 */
export interface CreateSecurityConfigResponse {
  /**
   * Details about the created security configuration.
   *
   * @public
   */
  securityConfigDetail?: SecurityConfigDetail | undefined;
}

/**
 * @public
 */
export interface CreateSecurityPolicyRequest {
  /**
   * The type of security policy.
   *
   * @public
   */
  type: SecurityPolicyType | undefined;

  /**
   * The name of the policy.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A description of the policy. Typically used to store information about the permissions defined in the policy.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The JSON policy document to use as the content for the new policy.
   *
   * @public
   */
  policy: string | undefined;

  /**
   * Unique, case-sensitive identifier to ensure idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * Details about an OpenSearch Serverless security policy.
 *
 * @public
 */
export interface SecurityPolicyDetail {
  /**
   * The type of security policy.
   *
   * @public
   */
  type?: SecurityPolicyType | undefined;

  /**
   * The name of the policy.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The version of the policy.
   *
   * @public
   */
  policyVersion?: string | undefined;

  /**
   * The description of the security policy.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The JSON policy document without any whitespaces.
   *
   * @public
   */
  policy?: __DocumentType | undefined;

  /**
   * The date the policy was created.
   *
   * @public
   */
  createdDate?: number | undefined;

  /**
   * The timestamp of when the policy was last modified.
   *
   * @public
   */
  lastModifiedDate?: number | undefined;
}

/**
 * @public
 */
export interface CreateSecurityPolicyResponse {
  /**
   * Details about the created security policy.
   *
   * @public
   */
  securityPolicyDetail?: SecurityPolicyDetail | undefined;
}

/**
 * @public
 */
export interface CreateVpcEndpointRequest {
  /**
   * The name of the interface endpoint.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The ID of the VPC from which you'll access OpenSearch Serverless.
   *
   * @public
   */
  vpcId: string | undefined;

  /**
   * The ID of one or more subnets from which you'll access OpenSearch Serverless.
   *
   * @public
   */
  subnetIds: string[] | undefined;

  /**
   * The unique identifiers of the security groups that define the ports, protocols, and sources for inbound traffic that you are authorizing into your endpoint.
   *
   * @public
   */
  securityGroupIds?: string[] | undefined;

  /**
   * Unique, case-sensitive identifier to ensure idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * Creation details for an OpenSearch Serverless-managed interface endpoint. For more information, see [Access Amazon OpenSearch Serverless using an interface endpoint](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-vpc.html).
 *
 * @public
 */
export interface CreateVpcEndpointDetail {
  /**
   * The unique identifier of the endpoint.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The name of the endpoint.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The current status in the endpoint creation process.
   *
   * @public
   */
  status?: VpcEndpointStatus | undefined;
}

/**
 * @public
 */
export interface CreateVpcEndpointResponse {
  /**
   * Details about the created interface VPC endpoint.
   *
   * @public
   */
  createVpcEndpointDetail?: CreateVpcEndpointDetail | undefined;
}

/**
 * @public
 */
export interface DeleteIndexRequest {
  /**
   * The unique identifier of the collection containing the index to delete.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The name of the index to delete.
   *
   * @public
   */
  indexName: string | undefined;
}

/**
 * @public
 */
export interface DeleteIndexResponse {}

/**
 * @public
 */
export interface DeleteIngestionStreamRequest {
  /**
   * The unique identifier of the collection that the ingestion stream belongs to.
   *
   * @public
   */
  collectionId: string | undefined;

  /**
   * The unique identifier of the ingestion stream to delete.
   *
   * @public
   */
  ingestionStreamId: string | undefined;

  /**
   * Unique, case-sensitive identifier to ensure idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteIngestionStreamResponse {
  /**
   * The unique identifier of the deleted ingestion stream.
   *
   * @public
   */
  ingestionStreamId?: string | undefined;

  /**
   * The unique identifier of the collection that the ingestion stream belonged to.
   *
   * @public
   */
  collectionId?: string | undefined;

  /**
   * The name of the deleted ingestion stream.
   *
   * @public
   */
  ingestionStreamName?: string | undefined;

  /**
   * The current status of the ingestion stream.
   *
   * @public
   */
  status?: IngestionStreamStatus | undefined;
}

/**
 * @public
 */
export interface DeleteLifecyclePolicyRequest {
  /**
   * The type of lifecycle policy.
   *
   * @public
   */
  type: LifecyclePolicyType | undefined;

  /**
   * The name of the policy to delete.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Unique, case-sensitive identifier to ensure idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteLifecyclePolicyResponse {}

/**
 * @public
 */
export interface DeleteSecurityConfigRequest {
  /**
   * The security configuration identifier. For SAML the ID will be `saml/<accountId>/<idpProviderName>`. For example, `saml/123456789123/OKTADev`.
   *
   * @public
   */
  id: string | undefined;

  /**
   * Unique, case-sensitive identifier to ensure idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteSecurityConfigResponse {}

/**
 * @public
 */
export interface DeleteSecurityPolicyRequest {
  /**
   * The type of policy.
   *
   * @public
   */
  type: SecurityPolicyType | undefined;

  /**
   * The name of the policy to delete.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Unique, case-sensitive identifier to ensure idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteSecurityPolicyResponse {}

/**
 * @public
 */
export interface DeleteVpcEndpointRequest {
  /**
   * The VPC endpoint identifier.
   *
   * @public
   */
  id: string | undefined;

  /**
   * Unique, case-sensitive identifier to ensure idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * Deletion details for an OpenSearch Serverless-managed interface endpoint.
 *
 * @public
 */
export interface DeleteVpcEndpointDetail {
  /**
   * The unique identifier of the endpoint.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The name of the endpoint.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The current status of the endpoint deletion process.
   *
   * @public
   */
  status?: VpcEndpointStatus | undefined;
}

/**
 * @public
 */
export interface DeleteVpcEndpointResponse {
  /**
   * Details about the deleted endpoint.
   *
   * @public
   */
  deleteVpcEndpointDetail?: DeleteVpcEndpointDetail | undefined;
}

/**
 * @public
 */
export interface GetAccountSettingsRequest {}

/**
 * @public
 */
export interface GetAccountSettingsResponse {
  /**
   * OpenSearch Serverless-related details for the current account.
   *
   * @public
   */
  accountSettingsDetail?: AccountSettingsDetail | undefined;
}

/**
 * @public
 */
export interface GetIndexRequest {
  /**
   * The unique identifier of the collection containing the index.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The name of the index to retrieve information about.
   *
   * @public
   */
  indexName: string | undefined;
}

/**
 * @public
 */
export interface GetIndexResponse {
  /**
   * The JSON schema definition for the index, including field mappings and settings.
   *
   * @public
   */
  indexSchema?: __DocumentType | undefined;
}

/**
 * @public
 */
export interface GetIngestionJobRequest {
  /**
   * The unique identifier of the collection that the ingestion job belongs to.
   *
   * @public
   */
  collectionId: string | undefined;

  /**
   * The unique identifier of the ingestion job to retrieve.
   *
   * @public
   */
  ingestionJobId: string | undefined;
}

/**
 * @public
 */
export interface GetIngestionJobResponse {
  /**
   * Details about the requested ingestion job.
   *
   * @public
   */
  ingestionJobDetail?: IngestionJobDetail | undefined;
}

/**
 * @public
 */
export interface GetIngestionStreamRequest {
  /**
   * The unique identifier of the collection that the ingestion stream belongs to.
   *
   * @public
   */
  collectionId: string | undefined;

  /**
   * The unique identifier of the ingestion stream to retrieve.
   *
   * @public
   */
  ingestionStreamId: string | undefined;
}

/**
 * @public
 */
export interface GetIngestionStreamResponse {
  /**
   * Details about the requested ingestion stream.
   *
   * @public
   */
  ingestionStreamDetail?: IngestionStreamDetail | undefined;
}

/**
 * @public
 */
export interface GetPoliciesStatsRequest {}

/**
 * Statistics for an OpenSearch Serverless lifecycle policy.
 *
 * @public
 */
export interface LifecyclePolicyStats {
  /**
   * The number of retention lifecycle policies in the current account.
   *
   * @public
   */
  RetentionPolicyCount?: number | undefined;
}

/**
 * Statistics for an OpenSearch Serverless security configuration.
 *
 * @public
 */
export interface SecurityConfigStats {
  /**
   * The number of security configurations in the current account.
   *
   * @public
   */
  SamlConfigCount?: number | undefined;
}

/**
 * Statistics for an OpenSearch Serverless security policy.
 *
 * @public
 */
export interface SecurityPolicyStats {
  /**
   * The number of encryption policies in the current account.
   *
   * @public
   */
  EncryptionPolicyCount?: number | undefined;

  /**
   * The number of network policies in the current account.
   *
   * @public
   */
  NetworkPolicyCount?: number | undefined;
}

/**
 * @public
 */
export interface GetPoliciesStatsResponse {
  /**
   * Information about the data access policies in your account.
   *
   * @public
   */
  AccessPolicyStats?: AccessPolicyStats | undefined;

  /**
   * Information about the security policies in your account.
   *
   * @public
   */
  SecurityPolicyStats?: SecurityPolicyStats | undefined;

  /**
   * Information about the security configurations in your account.
   *
   * @public
   */
  SecurityConfigStats?: SecurityConfigStats | undefined;

  /**
   * Information about the lifecycle policies in your account.
   *
   * @public
   */
  LifecyclePolicyStats?: LifecyclePolicyStats | undefined;

  /**
   * The total number of OpenSearch Serverless security policies and configurations in your account.
   *
   * @public
   */
  TotalPolicyCount?: number | undefined;
}

/**
 * @public
 */
export interface GetSecurityConfigRequest {
  /**
   * The unique identifier of the security configuration.
   *
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface GetSecurityConfigResponse {
  /**
   * Details of the requested security configuration.
   *
   * @public
   */
  securityConfigDetail?: SecurityConfigDetail | undefined;
}

/**
 * @public
 */
export interface GetSecurityPolicyRequest {
  /**
   * The type of security policy.
   *
   * @public
   */
  type: SecurityPolicyType | undefined;

  /**
   * The name of the security policy.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface GetSecurityPolicyResponse {
  /**
   * Details about the requested security policy.
   *
   * @public
   */
  securityPolicyDetail?: SecurityPolicyDetail | undefined;
}

/**
 * @public
 */
export interface UpdateIndexRequest {
  /**
   * The unique identifier of the collection containing the index to update.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The name of the index to update.
   *
   * @public
   */
  indexName: string | undefined;

  /**
   * The updated JSON schema definition for the index, including field mappings and settings.
   *
   * @public
   */
  indexSchema?: __DocumentType | undefined;
}

/**
 * @public
 */
export interface UpdateIndexResponse {}

/**
 * @public
 */
export interface ListIngestionJobsRequest {
  /**
   * The unique identifier of the collection to list ingestion jobs for.
   *
   * @public
   */
  collectionId: string | undefined;

  /**
   * If your initial `ListIngestionJobs` operation returns a `nextToken`, you can include the returned `nextToken` in subsequent `ListIngestionJobs` operations, which returns results in the next page.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return. Valid values are 1–100. If you don't specify a value, the default is 100. You can use `nextToken` to get the next page of results.
   *
   * A response can contain fewer results than `maxResults`, or no results, and still include a `nextToken`. To retrieve all results, continue to make the call with the returned `nextToken` until no `nextToken` is returned.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Summary information about an ingestion job.
 *
 * @public
 */
export interface IngestionJobSummary {
  /**
   * The unique identifier of the ingestion job.
   *
   * @public
   */
  ingestionJobId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the ingestion job.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The name of the ingestion job.
   *
   * @public
   */
  ingestionJobName?: string | undefined;

  /**
   * The name of the index that documents are ingested into.
   *
   * @public
   */
  indexName?: string | undefined;

  /**
   * The current lifecycle status of the ingestion job.
   *
   * @public
   */
  status?: IngestionJobStatus | undefined;

  /**
   * The date and time when the ingestion job was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The date and time when the ingestion job was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListIngestionJobsResponse {
  /**
   * Summary information about each ingestion job.
   *
   * @public
   */
  ingestionJobSummaries?: IngestionJobSummary[] | undefined;

  /**
   * When `nextToken` is returned, there are more results available. The value of `nextToken` is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListIngestionStreamsRequest {
  /**
   * The unique identifier of the collection to list ingestion streams for.
   *
   * @public
   */
  collectionId: string | undefined;

  /**
   * If your initial `ListIngestionStreams` operation returns a `nextToken`, you can include the returned `nextToken` in subsequent `ListIngestionStreams` operations, which returns results in the next page.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return. Valid values are 1–100. If you don't specify a value, the default is 100. You can use `nextToken` to get the next page of results.
   *
   * A response can contain fewer results than `maxResults`, or no results, and still include a `nextToken`. To retrieve all results, continue to make the call with the returned `nextToken` until no `nextToken` is returned.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Summary information about an ingestion stream.
 *
 * @public
 */
export interface IngestionStreamSummary {
  /**
   * The unique identifier of the ingestion stream.
   *
   * @public
   */
  ingestionStreamId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the ingestion stream.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The name of the ingestion stream.
   *
   * @public
   */
  ingestionStreamName?: string | undefined;

  /**
   * The name of the index that documents are ingested into.
   *
   * @public
   */
  indexName?: string | undefined;

  /**
   * The current lifecycle status of the ingestion stream.
   *
   * @public
   */
  status?: IngestionStreamStatus | undefined;

  /**
   * The date and time when the ingestion stream was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The date and time when the ingestion stream was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListIngestionStreamsResponse {
  /**
   * Summary information about each ingestion stream.
   *
   * @public
   */
  ingestionStreamSummaries?: IngestionStreamSummary[] | undefined;

  /**
   * When `nextToken` is returned, there are more results available. The value of `nextToken` is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListLifecyclePoliciesRequest {
  /**
   * The type of lifecycle policy.
   *
   * @public
   */
  type: LifecyclePolicyType | undefined;

  /**
   * Resource filters that policies can apply to. Currently, the only supported resource type is `index`.
   *
   * @public
   */
  resources?: string[] | undefined;

  /**
   * If your initial `ListLifecyclePolicies` operation returns a `nextToken`, you can include the returned `nextToken` in subsequent `ListLifecyclePolicies` operations, which returns results in the next page.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * An optional parameter that specifies the maximum number of results to return. You can use use `nextToken` to get the next page of results. The default is 10.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * A summary of the lifecycle policy.
 *
 * @public
 */
export interface LifecyclePolicySummary {
  /**
   * The type of lifecycle policy.
   *
   * @public
   */
  type?: LifecyclePolicyType | undefined;

  /**
   * The name of the lifecycle policy.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The version of the lifecycle policy.
   *
   * @public
   */
  policyVersion?: string | undefined;

  /**
   * The description of the lifecycle policy.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The Epoch time when the lifecycle policy was created.
   *
   * @public
   */
  createdDate?: number | undefined;

  /**
   * The date and time when the lifecycle policy was last modified.
   *
   * @public
   */
  lastModifiedDate?: number | undefined;
}

/**
 * @public
 */
export interface ListLifecyclePoliciesResponse {
  /**
   * Details about the requested lifecycle policies.
   *
   * @public
   */
  lifecyclePolicySummaries?: LifecyclePolicySummary[] | undefined;

  /**
   * When `nextToken` is returned, there are more results available. The value of `nextToken` is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateLifecyclePolicyRequest {
  /**
   * The type of lifecycle policy.
   *
   * @public
   */
  type: LifecyclePolicyType | undefined;

  /**
   * The name of the policy.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The version of the policy being updated.
   *
   * @public
   */
  policyVersion: string | undefined;

  /**
   * A description of the lifecycle policy.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The JSON policy document to use as the content for the lifecycle policy.
   *
   * @public
   */
  policy?: string | undefined;

  /**
   * A unique, case-sensitive identifier to ensure idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateLifecyclePolicyResponse {
  /**
   * Details about the updated lifecycle policy.
   *
   * @public
   */
  lifecyclePolicyDetail?: LifecyclePolicyDetail | undefined;
}

/**
 * @public
 */
export interface ListSecurityConfigsRequest {
  /**
   * The type of security configuration.
   *
   * @public
   */
  type: SecurityConfigType | undefined;

  /**
   * If your initial `ListSecurityConfigs` operation returns a `nextToken`, you can include the returned `nextToken` in subsequent `ListSecurityConfigs` operations, which returns results in the next page.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * An optional parameter that specifies the maximum number of results to return. You can use `nextToken` to get the next page of results. The default is 20.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * A summary of a security configuration for OpenSearch Serverless.
 *
 * @public
 */
export interface SecurityConfigSummary {
  /**
   * The unique identifier of the security configuration.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The type of security configuration.
   *
   * @public
   */
  type?: SecurityConfigType | undefined;

  /**
   * The version of the security configuration.
   *
   * @public
   */
  configVersion?: string | undefined;

  /**
   * The description of the security configuration.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The Epoch time when the security configuration was created.
   *
   * @public
   */
  createdDate?: number | undefined;

  /**
   * The timestamp of when the configuration was last modified.
   *
   * @public
   */
  lastModifiedDate?: number | undefined;
}

/**
 * @public
 */
export interface ListSecurityConfigsResponse {
  /**
   * Details about the security configurations in your account.
   *
   * @public
   */
  securityConfigSummaries?: SecurityConfigSummary[] | undefined;

  /**
   * When `nextToken` is returned, there are more results available. The value of `nextToken` is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSecurityPoliciesRequest {
  /**
   * The type of policy.
   *
   * @public
   */
  type: SecurityPolicyType | undefined;

  /**
   * Resource filters (can be collection or indexes) that policies can apply to.
   *
   * @public
   */
  resource?: string[] | undefined;

  /**
   * If your initial `ListSecurityPolicies` operation returns a `nextToken`, you can include the returned `nextToken` in subsequent `ListSecurityPolicies` operations, which returns results in the next page.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * An optional parameter that specifies the maximum number of results to return. You can use `nextToken` to get the next page of results. The default is 20.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * A summary of a security policy for OpenSearch Serverless.
 *
 * @public
 */
export interface SecurityPolicySummary {
  /**
   * The type of security policy.
   *
   * @public
   */
  type?: SecurityPolicyType | undefined;

  /**
   * The name of the policy.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The version of the policy.
   *
   * @public
   */
  policyVersion?: string | undefined;

  /**
   * The description of the security policy.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The date the policy was created.
   *
   * @public
   */
  createdDate?: number | undefined;

  /**
   * The timestamp of when the policy was last modified.
   *
   * @public
   */
  lastModifiedDate?: number | undefined;
}

/**
 * @public
 */
export interface ListSecurityPoliciesResponse {
  /**
   * Details about the security policies in your account.
   *
   * @public
   */
  securityPolicySummaries?: SecurityPolicySummary[] | undefined;

  /**
   * When `nextToken` is returned, there are more results available. The value of `nextToken` is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource. The resource must be active (not in the `DELETING` state), and must be owned by the account ID included in the request.
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * The tags associated with the resource.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * Filter the results of a `ListVpcEndpoints` request.
 *
 * @public
 */
export interface VpcEndpointFilters {
  /**
   * The current status of the endpoint.
   *
   * @public
   */
  status?: VpcEndpointStatus | undefined;
}

/**
 * @public
 */
export interface ListVpcEndpointsRequest {
  /**
   * Filter the results according to the current status of the VPC endpoint. Possible statuses are `CREATING`, `DELETING`, `UPDATING`, `ACTIVE`, and `FAILED`.
   *
   * @public
   */
  vpcEndpointFilters?: VpcEndpointFilters | undefined;

  /**
   * If your initial `ListVpcEndpoints` operation returns a `nextToken`, you can include the returned `nextToken` in subsequent `ListVpcEndpoints` operations, which returns results in the next page.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * An optional parameter that specifies the maximum number of results to return. You can use `nextToken` to get the next page of results. The default is 20.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * The VPC endpoint object.
 *
 * @public
 */
export interface VpcEndpointSummary {
  /**
   * The unique identifier of the endpoint.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The name of the endpoint.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The current status of the endpoint.
   *
   * @public
   */
  status?: VpcEndpointStatus | undefined;
}

/**
 * @public
 */
export interface ListVpcEndpointsResponse {
  /**
   * Details about each VPC endpoint, including the name and current status.
   *
   * @public
   */
  vpcEndpointSummaries?: VpcEndpointSummary[] | undefined;

  /**
   * When `nextToken` is returned, there are more results available. The value of `nextToken` is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Describes IAM Identity Center options for updating an OpenSearch Serverless security configuration in the form of a key-value map.
 *
 * @public
 */
export interface UpdateIamIdentityCenterConfigOptions {
  /**
   * The user attribute for this IAM Identity Center integration. Defaults to `UserId`.
   *
   * @public
   */
  userAttribute?: IamIdentityCenterUserAttribute | undefined;

  /**
   * The group attribute for this IAM Identity Center integration. Defaults to `GroupId`.
   *
   * @public
   */
  groupAttribute?: IamIdentityCenterGroupAttribute | undefined;
}

/**
 * @public
 */
export interface UpdateSecurityConfigRequest {
  /**
   * The security configuration identifier. For SAML the ID will be `saml/<accountId>/<idpProviderName>`. For example, `saml/123456789123/OKTADev`.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The version of the security configuration to be updated. You can find the most recent version of a security configuration using the `GetSecurityPolicy` command.
   *
   * @public
   */
  configVersion: string | undefined;

  /**
   * A description of the security configuration.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * SAML options in in the form of a key-value map.
   *
   * @public
   */
  samlOptions?: SamlConfigOptions | undefined;

  /**
   * Describes IAM Identity Center options in the form of a key-value map.
   *
   * @public
   */
  iamIdentityCenterOptionsUpdates?: UpdateIamIdentityCenterConfigOptions | undefined;

  /**
   * Describes IAM federation options in the form of a key-value map for updating an existing security configuration. Use this field to modify IAM federation settings for the security configuration.
   *
   * @public
   */
  iamFederationOptions?: IamFederationConfigOptions | undefined;

  /**
   * Unique, case-sensitive identifier to ensure idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateSecurityConfigResponse {
  /**
   * Details about the updated security configuration.
   *
   * @public
   */
  securityConfigDetail?: SecurityConfigDetail | undefined;
}

/**
 * @public
 */
export interface UpdateSecurityPolicyRequest {
  /**
   * The type of access policy.
   *
   * @public
   */
  type: SecurityPolicyType | undefined;

  /**
   * The name of the policy.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The version of the policy being updated.
   *
   * @public
   */
  policyVersion: string | undefined;

  /**
   * A description of the policy. Typically used to store information about the permissions defined in the policy.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The JSON policy document to use as the content for the new policy.
   *
   * @public
   */
  policy?: string | undefined;

  /**
   * Unique, case-sensitive identifier to ensure idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateSecurityPolicyResponse {
  /**
   * Details about the updated security policy.
   *
   * @public
   */
  securityPolicyDetail?: SecurityPolicyDetail | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource. The resource must be active (not in the `DELETING` state), and must be owned by the account ID included in the request.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * A list of tags (key-value pairs) to add to the resource. All tag keys in the request must be unique.
   *
   * @public
   */
  tags: Tag[] | undefined;
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
   * The Amazon Resource Name (ARN) of the resource to remove tags from. The resource must be active (not in the `DELETING` state), and must be owned by the account ID included in the request.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The tag or set of tags to remove from the resource. All tag keys in the request must be unique.
   *
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
export interface UpdateAccountSettingsRequest {
  /**
   * The maximum capacity limits for all OpenSearch Serverless collections, in OpenSearch Compute Units (OCUs). These limits are used to scale your collections based on the current workload. For more information, see [Managing capacity limits for Amazon OpenSearch Serverless](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-scaling.html).
   *
   * @public
   */
  capacityLimits?: CapacityLimits | undefined;
}

/**
 * @public
 */
export interface UpdateAccountSettingsResponse {
  /**
   * OpenSearch Serverless-related settings for the current Amazon Web Services account.
   *
   * @public
   */
  accountSettingsDetail?: AccountSettingsDetail | undefined;
}

/**
 * @public
 */
export interface UpdateVpcEndpointRequest {
  /**
   * The unique identifier of the interface endpoint to update.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The ID of one or more subnets to add to the endpoint.
   *
   * @public
   */
  addSubnetIds?: string[] | undefined;

  /**
   * The unique identifiers of the subnets to remove from the endpoint.
   *
   * @public
   */
  removeSubnetIds?: string[] | undefined;

  /**
   * The unique identifiers of the security groups to add to the endpoint. Security groups define the ports, protocols, and sources for inbound traffic that you are authorizing into your endpoint.
   *
   * @public
   */
  addSecurityGroupIds?: string[] | undefined;

  /**
   * The unique identifiers of the security groups to remove from the endpoint.
   *
   * @public
   */
  removeSecurityGroupIds?: string[] | undefined;

  /**
   * Unique, case-sensitive identifier to ensure idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * Update details for an OpenSearch Serverless-managed interface endpoint.
 *
 * @public
 */
export interface UpdateVpcEndpointDetail {
  /**
   * The unique identifier of the endpoint.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The name of the endpoint.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The current status of the endpoint update process.
   *
   * @public
   */
  status?: VpcEndpointStatus | undefined;

  /**
   * The ID of the subnets from which you access OpenSearch Serverless.
   *
   * @public
   */
  subnetIds?: string[] | undefined;

  /**
   * The unique identifiers of the security groups that define the ports, protocols, and sources for inbound traffic that you are authorizing into your endpoint.
   *
   * @public
   */
  securityGroupIds?: string[] | undefined;

  /**
   * The timestamp of when the endpoint was last modified.
   *
   * @public
   */
  lastModifiedDate?: number | undefined;
}

/**
 * @public
 */
export interface UpdateVpcEndpointResponse {
  /**
   * Details about the updated VPC endpoint.
   *
   * @public
   */
  UpdateVpcEndpointDetail?: UpdateVpcEndpointDetail | undefined;
}
