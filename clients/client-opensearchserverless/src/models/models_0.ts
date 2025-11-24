// smithy-typescript generated code
import { DocumentType as __DocumentType } from "@smithy/types";

import {
  AccessPolicyType,
  CollectionStatus,
  CollectionType,
  IamIdentityCenterGroupAttribute,
  IamIdentityCenterUserAttribute,
  LifecyclePolicyType,
  ResourceType,
  SecurityConfigType,
  SecurityPolicyType,
  StandbyReplicas,
  VpcEndpointStatus,
} from "./enums";

/**
 * @public
 */
export interface CreateAccessPolicyRequest {
  /**
   * <p>The type of policy.</p>
   * @public
   */
  type: AccessPolicyType | undefined;

  /**
   * <p>The name of the policy.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A description of the policy. Typically used to store information about the permissions defined in the policy.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The JSON policy document to use as the content for the policy.</p>
   * @public
   */
  policy: string | undefined;

  /**
   * <p>Unique, case-sensitive identifier to ensure idempotency of the request.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * <p>Details about an OpenSearch Serverless access policy.</p>
 * @public
 */
export interface AccessPolicyDetail {
  /**
   * <p>The type of access policy.</p>
   * @public
   */
  type?: AccessPolicyType | undefined;

  /**
   * <p>The name of the policy.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The version of the policy.</p>
   * @public
   */
  policyVersion?: string | undefined;

  /**
   * <p>The description of the policy.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The JSON policy document without any whitespaces.</p>
   * @public
   */
  policy?: __DocumentType | undefined;

  /**
   * <p>The date the policy was created.</p>
   * @public
   */
  createdDate?: number | undefined;

  /**
   * <p>The timestamp of when the policy was last modified.</p>
   * @public
   */
  lastModifiedDate?: number | undefined;
}

/**
 * @public
 */
export interface CreateAccessPolicyResponse {
  /**
   * <p>Details about the created access policy.</p>
   * @public
   */
  accessPolicyDetail?: AccessPolicyDetail | undefined;
}

/**
 * @public
 */
export interface DeleteAccessPolicyRequest {
  /**
   * <p>The type of policy.</p>
   * @public
   */
  type: AccessPolicyType | undefined;

  /**
   * <p>The name of the policy to delete.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Unique, case-sensitive identifier to ensure idempotency of the request.</p>
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
   * <p>Tye type of policy. Currently, the only supported value is <code>data</code>.</p>
   * @public
   */
  type: AccessPolicyType | undefined;

  /**
   * <p>The name of the access policy.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface GetAccessPolicyResponse {
  /**
   * <p>Details about the requested access policy.</p>
   * @public
   */
  accessPolicyDetail?: AccessPolicyDetail | undefined;
}

/**
 * @public
 */
export interface ListAccessPoliciesRequest {
  /**
   * <p>The type of access policy.</p>
   * @public
   */
  type: AccessPolicyType | undefined;

  /**
   * <p>Resource filters (can be collections or indexes) that policies can apply to.</p>
   * @public
   */
  resource?: string[] | undefined;

  /**
   * <p>If your initial <code>ListAccessPolicies</code> operation returns a <code>nextToken</code>, you can include the returned <code>nextToken</code> in subsequent <code>ListAccessPolicies</code> operations, which returns results in the next page.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>An optional parameter that specifies the maximum number of results to return. You can use <code>nextToken</code> to get the next page of results. The default is 20.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>A summary of the data access policy.</p>
 * @public
 */
export interface AccessPolicySummary {
  /**
   * <p>The type of access policy. Currently, the only available type is <code>data</code>.</p>
   * @public
   */
  type?: AccessPolicyType | undefined;

  /**
   * <p>The name of the access policy.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The version of the policy.</p>
   * @public
   */
  policyVersion?: string | undefined;

  /**
   * <p>The description of the access policy.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The Epoch time when the access policy was created.</p>
   * @public
   */
  createdDate?: number | undefined;

  /**
   * <p>The date and time when the collection was last modified.</p>
   * @public
   */
  lastModifiedDate?: number | undefined;
}

/**
 * @public
 */
export interface ListAccessPoliciesResponse {
  /**
   * <p>Details about the requested access policies.</p>
   * @public
   */
  accessPolicySummaries?: AccessPolicySummary[] | undefined;

  /**
   * <p>When <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateAccessPolicyRequest {
  /**
   * <p>The type of policy.</p>
   * @public
   */
  type: AccessPolicyType | undefined;

  /**
   * <p>The name of the policy.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The version of the policy being updated.</p>
   * @public
   */
  policyVersion: string | undefined;

  /**
   * <p>A description of the policy. Typically used to store information about the permissions defined in the policy.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The JSON policy document to use as the content for the policy.</p>
   * @public
   */
  policy?: string | undefined;

  /**
   * <p>Unique, case-sensitive identifier to ensure idempotency of the request.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateAccessPolicyResponse {
  /**
   * <p>Details about the updated access policy.</p>
   * @public
   */
  accessPolicyDetail?: AccessPolicyDetail | undefined;
}

/**
 * <p>Statistics for an OpenSearch Serverless access policy.</p>
 * @public
 */
export interface AccessPolicyStats {
  /**
   * <p>The number of data access policies in the current account.</p>
   * @public
   */
  DataPolicyCount?: number | undefined;
}

/**
 * <p>The maximum capacity limits for all OpenSearch Serverless collections, in OpenSearch Compute Units (OCUs). These limits are used to scale your collections based on the current workload. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-scaling.html">Managing capacity limits for Amazon OpenSearch Serverless</a>.</p>
 * @public
 */
export interface CapacityLimits {
  /**
   * <p>The maximum indexing capacity for collections.</p>
   * @public
   */
  maxIndexingCapacityInOCU?: number | undefined;

  /**
   * <p>The maximum search capacity for collections.</p>
   * @public
   */
  maxSearchCapacityInOCU?: number | undefined;
}

/**
 * <p>OpenSearch Serverless-related information for the current account.</p>
 * @public
 */
export interface AccountSettingsDetail {
  /**
   * <p>The maximum capacity limits for all OpenSearch Serverless collections, in OpenSearch Compute Units (OCUs). These limits are used to scale your collections based on the current workload. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-scaling.html">Managing capacity limits for Amazon OpenSearch Serverless</a>.</p>
   * @public
   */
  capacityLimits?: CapacityLimits | undefined;
}

/**
 * @public
 */
export interface BatchGetCollectionRequest {
  /**
   * <p>A list of collection IDs. You can't provide names and IDs in the same request. The ID is part of the collection endpoint. You can also retrieve it using the <a href="https://docs.aws.amazon.com/opensearch-service/latest/ServerlessAPIReference/API_ListCollections.html">ListCollections</a> API.</p>
   * @public
   */
  ids?: string[] | undefined;

  /**
   * <p>A list of collection names. You can't provide names and IDs in the same request.</p>
   * @public
   */
  names?: string[] | undefined;
}

/**
 * <p>FIPS-compliant endpoint URLs for an OpenSearch Serverless collection. These endpoints ensure all data transmission uses FIPS 140-3 validated cryptographic implementations, meeting federal security requirements for government workloads.</p>
 * @public
 */
export interface FipsEndpoints {
  /**
   * <p>FIPS-compliant collection endpoint used to submit index, search, and data upload requests to an OpenSearch Serverless collection. This endpoint uses FIPS 140-3 validated cryptography and is required for federal government workloads.</p>
   * @public
   */
  collectionEndpoint?: string | undefined;

  /**
   * <p>FIPS-compliant endpoint used to access OpenSearch Dashboards. This endpoint uses FIPS 140-3 validated cryptography and is required for federal government workloads that need dashboard visualization capabilities.</p>
   * @public
   */
  dashboardEndpoint?: string | undefined;
}

/**
 * <p>Details about each OpenSearch Serverless collection, including the collection endpoint, the OpenSearch Dashboards endpoint, and FIPS-compliant endpoints for federal government workloads.</p>
 * @public
 */
export interface CollectionDetail {
  /**
   * <p>A unique identifier for the collection.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The name of the collection.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The current status of the collection.</p>
   * @public
   */
  status?: CollectionStatus | undefined;

  /**
   * <p>The type of collection.</p>
   * @public
   */
  type?: CollectionType | undefined;

  /**
   * <p>A description of the collection.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the collection.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The ARN of the Amazon Web Services KMS key used to encrypt the collection.</p>
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * <p>Details about an OpenSearch Serverless collection.</p>
   * @public
   */
  standbyReplicas?: StandbyReplicas | undefined;

  /**
   * <p>The Epoch time when the collection was created.</p>
   * @public
   */
  createdDate?: number | undefined;

  /**
   * <p>The date and time when the collection was last modified.</p>
   * @public
   */
  lastModifiedDate?: number | undefined;

  /**
   * <p>Collection-specific endpoint used to submit index, search, and data upload requests to an OpenSearch Serverless collection.</p>
   * @public
   */
  collectionEndpoint?: string | undefined;

  /**
   * <p>Collection-specific endpoint used to access OpenSearch Dashboards.</p>
   * @public
   */
  dashboardEndpoint?: string | undefined;

  /**
   * <p>FIPS-compliant endpoints for the collection. These endpoints use FIPS 140-3 validated cryptographic modules and are required for federal government workloads that must comply with FedRAMP security standards.</p>
   * @public
   */
  fipsEndpoints?: FipsEndpoints | undefined;

  /**
   * <p>A failure code associated with the request.</p>
   * @public
   */
  failureCode?: string | undefined;

  /**
   * <p>A message associated with the failure code.</p>
   * @public
   */
  failureMessage?: string | undefined;
}

/**
 * <p>Error information for an OpenSearch Serverless request.</p>
 * @public
 */
export interface CollectionErrorDetail {
  /**
   * <p>If the request contains collection IDs, the response includes the IDs provided in the request.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>If the request contains collection names, the response includes the names provided in the request.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>A description of the error. For example, <code>The specified Collection is not found.</code> </p>
   * @public
   */
  errorMessage?: string | undefined;

  /**
   * <p>The error code for the request. For example, <code>NOT_FOUND</code>.</p>
   * @public
   */
  errorCode?: string | undefined;
}

/**
 * @public
 */
export interface BatchGetCollectionResponse {
  /**
   * <p>Details about each collection.</p>
   * @public
   */
  collectionDetails?: CollectionDetail[] | undefined;

  /**
   * <p>Error information for the request.</p>
   * @public
   */
  collectionErrorDetails?: CollectionErrorDetail[] | undefined;
}

/**
 * <p>The unique identifiers of policy types and resource names.</p>
 * @public
 */
export interface LifecyclePolicyResourceIdentifier {
  /**
   * <p>The type of lifecycle policy.</p>
   * @public
   */
  type: LifecyclePolicyType | undefined;

  /**
   * <p>The name of the OpenSearch Serverless ilndex resource.</p>
   * @public
   */
  resource: string | undefined;
}

/**
 * @public
 */
export interface BatchGetEffectiveLifecyclePolicyRequest {
  /**
   * <p>The unique identifiers of policy types and resource names.</p>
   * @public
   */
  resourceIdentifiers: LifecyclePolicyResourceIdentifier[] | undefined;
}

/**
 * <p>Error information for an OpenSearch Serverless request.</p>
 * @public
 */
export interface EffectiveLifecyclePolicyDetail {
  /**
   * <p>The type of lifecycle policy.</p>
   * @public
   */
  type?: LifecyclePolicyType | undefined;

  /**
   * <p>The name of the OpenSearch Serverless index resource.</p>
   * @public
   */
  resource?: string | undefined;

  /**
   * <p>The name of the lifecycle policy.</p>
   * @public
   */
  policyName?: string | undefined;

  /**
   * <p>The type of OpenSearch Serverless resource. Currently, the only supported resource is <code>index</code>.</p>
   * @public
   */
  resourceType?: ResourceType | undefined;

  /**
   * <p>The minimum number of index retention in days or hours. This is an optional parameter that will return only if it’s set.</p>
   * @public
   */
  retentionPeriod?: string | undefined;

  /**
   * <p>The minimum number of index retention days set. That is an optional param that will return as <code>true</code> if the minimum number of days or hours is not set to a index resource.</p>
   * @public
   */
  noMinRetentionPeriod?: boolean | undefined;
}

/**
 * <p>Error information for an OpenSearch Serverless request.</p>
 * @public
 */
export interface EffectiveLifecyclePolicyErrorDetail {
  /**
   * <p>The type of lifecycle policy.</p>
   * @public
   */
  type?: LifecyclePolicyType | undefined;

  /**
   * <p>The name of OpenSearch Serverless index resource.</p>
   * @public
   */
  resource?: string | undefined;

  /**
   * <p>A description of the error. For example, <code>The specified Index resource is not found</code>.</p>
   * @public
   */
  errorMessage?: string | undefined;

  /**
   * <p>The error code for the request.</p>
   * @public
   */
  errorCode?: string | undefined;
}

/**
 * @public
 */
export interface BatchGetEffectiveLifecyclePolicyResponse {
  /**
   * <p>A list of lifecycle policies applied to the OpenSearch Serverless indexes.</p>
   * @public
   */
  effectiveLifecyclePolicyDetails?: EffectiveLifecyclePolicyDetail[] | undefined;

  /**
   * <p>A list of resources for which retrieval failed.</p>
   * @public
   */
  effectiveLifecyclePolicyErrorDetails?: EffectiveLifecyclePolicyErrorDetail[] | undefined;
}

/**
 * <p>The unique identifiers of policy types and policy names.</p>
 * @public
 */
export interface LifecyclePolicyIdentifier {
  /**
   * <p>The type of lifecycle policy.</p>
   * @public
   */
  type: LifecyclePolicyType | undefined;

  /**
   * <p>The name of the lifecycle policy.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface BatchGetLifecyclePolicyRequest {
  /**
   * <p>The unique identifiers of policy types and policy names.</p>
   * @public
   */
  identifiers: LifecyclePolicyIdentifier[] | undefined;
}

/**
 * <p>Details about an OpenSearch Serverless lifecycle policy.</p>
 * @public
 */
export interface LifecyclePolicyDetail {
  /**
   * <p>The type of lifecycle policy.</p>
   * @public
   */
  type?: LifecyclePolicyType | undefined;

  /**
   * <p>The name of the lifecycle policy.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The version of the lifecycle policy.</p>
   * @public
   */
  policyVersion?: string | undefined;

  /**
   * <p>The description of the lifecycle policy.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The JSON policy document without any whitespaces.</p>
   * @public
   */
  policy?: __DocumentType | undefined;

  /**
   * <p>The date the lifecycle policy was created.</p>
   * @public
   */
  createdDate?: number | undefined;

  /**
   * <p>The timestamp of when the lifecycle policy was last modified.</p>
   * @public
   */
  lastModifiedDate?: number | undefined;
}

/**
 * <p>Error information for an OpenSearch Serverless request.</p>
 * @public
 */
export interface LifecyclePolicyErrorDetail {
  /**
   * <p>The type of lifecycle policy.</p>
   * @public
   */
  type?: LifecyclePolicyType | undefined;

  /**
   * <p>The name of the lifecycle policy.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>A description of the error. For example, <code>The specified Lifecycle Policy is not found</code>.</p>
   * @public
   */
  errorMessage?: string | undefined;

  /**
   * <p>The error code for the request. For example, <code>NOT_FOUND</code>.</p>
   * @public
   */
  errorCode?: string | undefined;
}

/**
 * @public
 */
export interface BatchGetLifecyclePolicyResponse {
  /**
   * <p>A list of lifecycle policies matched to the input policy name and policy type.</p>
   * @public
   */
  lifecyclePolicyDetails?: LifecyclePolicyDetail[] | undefined;

  /**
   * <p>A list of lifecycle policy names and policy types for which retrieval failed.</p>
   * @public
   */
  lifecyclePolicyErrorDetails?: LifecyclePolicyErrorDetail[] | undefined;
}

/**
 * @public
 */
export interface BatchGetVpcEndpointRequest {
  /**
   * <p>A list of VPC endpoint identifiers.</p>
   * @public
   */
  ids: string[] | undefined;
}

/**
 * <p>Details about an OpenSearch Serverless-managed interface endpoint.</p>
 * @public
 */
export interface VpcEndpointDetail {
  /**
   * <p>The unique identifier of the endpoint.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The name of the endpoint.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The ID of the VPC from which you access OpenSearch Serverless.</p>
   * @public
   */
  vpcId?: string | undefined;

  /**
   * <p>The ID of the subnets from which you access OpenSearch Serverless.</p>
   * @public
   */
  subnetIds?: string[] | undefined;

  /**
   * <p>The unique identifiers of the security groups that define the ports, protocols, and sources for inbound traffic that you are authorizing into your endpoint.</p>
   * @public
   */
  securityGroupIds?: string[] | undefined;

  /**
   * <p>The current status of the endpoint.</p>
   * @public
   */
  status?: VpcEndpointStatus | undefined;

  /**
   * <p>The date the endpoint was created.</p>
   * @public
   */
  createdDate?: number | undefined;

  /**
   * <p>A failure code associated with the request.</p>
   * @public
   */
  failureCode?: string | undefined;

  /**
   * <p>A message associated with the failure code.</p>
   * @public
   */
  failureMessage?: string | undefined;
}

/**
 * <p>Error information for a failed <code>BatchGetVpcEndpoint</code> request.</p>
 * @public
 */
export interface VpcEndpointErrorDetail {
  /**
   * <p>The unique identifier of the VPC endpoint.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>An error message describing the reason for the failure.</p>
   * @public
   */
  errorMessage?: string | undefined;

  /**
   * <p>The error code for the failed request.</p>
   * @public
   */
  errorCode?: string | undefined;
}

/**
 * @public
 */
export interface BatchGetVpcEndpointResponse {
  /**
   * <p>Details about the specified VPC endpoint.</p>
   * @public
   */
  vpcEndpointDetails?: VpcEndpointDetail[] | undefined;

  /**
   * <p>Error information for a failed request.</p>
   * @public
   */
  vpcEndpointErrorDetails?: VpcEndpointErrorDetail[] | undefined;
}

/**
 * <p>A map of key-value pairs associated to an OpenSearch Serverless resource.</p>
 * @public
 */
export interface Tag {
  /**
   * <p>The key to use in the tag.</p>
   * @public
   */
  key: string | undefined;

  /**
   * <p>The value of the tag.</p>
   * @public
   */
  value: string | undefined;
}

/**
 * @public
 */
export interface CreateCollectionRequest {
  /**
   * <p>Name of the collection.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The type of collection.</p>
   * @public
   */
  type?: CollectionType | undefined;

  /**
   * <p>Description of the collection.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>An arbitrary set of tags (key–value pairs) to associate with the OpenSearch Serverless collection.</p>
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * <p>Indicates whether standby replicas should be used for a collection.</p>
   * @public
   */
  standbyReplicas?: StandbyReplicas | undefined;

  /**
   * <p>Unique, case-sensitive identifier to ensure idempotency of the request.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * <p>Details about the created OpenSearch Serverless collection.</p>
 * @public
 */
export interface CreateCollectionDetail {
  /**
   * <p>The unique identifier of the collection.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The name of the collection.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The current status of the collection.</p>
   * @public
   */
  status?: CollectionStatus | undefined;

  /**
   * <p>The type of collection.</p>
   * @public
   */
  type?: CollectionType | undefined;

  /**
   * <p>A description of the collection.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the collection.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key with which to encrypt the collection.</p>
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * <p>Creates details about an OpenSearch Serverless collection.</p>
   * @public
   */
  standbyReplicas?: StandbyReplicas | undefined;

  /**
   * <p>The Epoch time when the collection was created.</p>
   * @public
   */
  createdDate?: number | undefined;

  /**
   * <p>The date and time when the collection was last modified.</p>
   * @public
   */
  lastModifiedDate?: number | undefined;
}

/**
 * @public
 */
export interface CreateCollectionResponse {
  /**
   * <p>Details about the collection.</p>
   * @public
   */
  createCollectionDetail?: CreateCollectionDetail | undefined;
}

/**
 * @public
 */
export interface DeleteCollectionRequest {
  /**
   * <p>The unique identifier of the collection. For example, <code>1iu5usc406kd</code>. The ID is part of the collection endpoint. You can also retrieve it using the <a href="https://docs.aws.amazon.com/opensearch-service/latest/ServerlessAPIReference/API_ListCollections.html">ListCollections</a> API.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure idempotency of the request.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * <p>Details about a deleted OpenSearch Serverless collection.</p>
 * @public
 */
export interface DeleteCollectionDetail {
  /**
   * <p>The unique identifier of the collection.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The name of the collection.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The current status of the collection.</p>
   * @public
   */
  status?: CollectionStatus | undefined;
}

/**
 * @public
 */
export interface DeleteCollectionResponse {
  /**
   * <p>Details of the deleted collection.</p>
   * @public
   */
  deleteCollectionDetail?: DeleteCollectionDetail | undefined;
}

/**
 * <p>A list of filter keys that you can use for LIST, UPDATE, and DELETE requests to OpenSearch Serverless collections.</p>
 * @public
 */
export interface CollectionFilters {
  /**
   * <p>The name of the collection.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The current status of the collection.</p>
   * @public
   */
  status?: CollectionStatus | undefined;
}

/**
 * @public
 */
export interface ListCollectionsRequest {
  /**
   * <p> A list of filter names and values that you can use for requests.</p>
   * @public
   */
  collectionFilters?: CollectionFilters | undefined;

  /**
   * <p>If your initial <code>ListCollections</code> operation returns a <code>nextToken</code>, you can include the returned <code>nextToken</code> in subsequent <code>ListCollections</code> operations, which returns results in the next page.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return. Default is 20. You can use <code>nextToken</code> to get the next page of results.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Details about each OpenSearch Serverless collection.</p>
 * @public
 */
export interface CollectionSummary {
  /**
   * <p>The unique identifier of the collection.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The name of the collection.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The current status of the collection.</p>
   * @public
   */
  status?: CollectionStatus | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the collection.</p>
   * @public
   */
  arn?: string | undefined;
}

/**
 * @public
 */
export interface ListCollectionsResponse {
  /**
   * <p>Details about each collection.</p>
   * @public
   */
  collectionSummaries?: CollectionSummary[] | undefined;

  /**
   * <p>When <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateCollectionRequest {
  /**
   * <p>The unique identifier of the collection.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>A description of the collection.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Unique, case-sensitive identifier to ensure idempotency of the request.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * <p>Details about an updated OpenSearch Serverless collection.</p>
 * @public
 */
export interface UpdateCollectionDetail {
  /**
   * <p>The unique identifier of the collection.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The name of the collection.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The current status of the collection.</p>
   * @public
   */
  status?: CollectionStatus | undefined;

  /**
   * <p>The collection type.</p>
   * @public
   */
  type?: CollectionType | undefined;

  /**
   * <p>The description of the collection.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the collection.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The date and time when the collection was created.</p>
   * @public
   */
  createdDate?: number | undefined;

  /**
   * <p>The date and time when the collection was last modified.</p>
   * @public
   */
  lastModifiedDate?: number | undefined;
}

/**
 * @public
 */
export interface UpdateCollectionResponse {
  /**
   * <p>Details about the updated collection.</p>
   * @public
   */
  updateCollectionDetail?: UpdateCollectionDetail | undefined;
}

/**
 * <p>Describes IAM Identity Center options for creating an OpenSearch Serverless security configuration in the form of a key-value map.</p>
 * @public
 */
export interface CreateIamIdentityCenterConfigOptions {
  /**
   * <p>The ARN of the IAM Identity Center instance used to integrate with OpenSearch Serverless.</p>
   * @public
   */
  instanceArn: string | undefined;

  /**
   * <p>The user attribute for this IAM Identity Center integration. Defaults to <code>UserId</code>.</p>
   * @public
   */
  userAttribute?: IamIdentityCenterUserAttribute | undefined;

  /**
   * <p>The group attribute for this IAM Identity Center integration. Defaults to <code>GroupId</code>.</p>
   * @public
   */
  groupAttribute?: IamIdentityCenterGroupAttribute | undefined;
}

/**
 * @public
 */
export interface CreateIndexRequest {
  /**
   * <p>The unique identifier of the collection in which to create the index.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name of the index to create. Index names must be lowercase and can't begin with underscores (_) or hyphens (-).</p>
   * @public
   */
  indexName: string | undefined;

  /**
   * <p>The JSON schema definition for the index, including field mappings and settings.</p>
   * @public
   */
  indexSchema?: __DocumentType | undefined;
}

/**
 * @public
 */
export interface CreateIndexResponse {}

/**
 * @public
 */
export interface CreateLifecyclePolicyRequest {
  /**
   * <p>The type of lifecycle policy.</p>
   * @public
   */
  type: LifecyclePolicyType | undefined;

  /**
   * <p>The name of the lifecycle policy.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A description of the lifecycle policy.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The JSON policy document to use as the content for the lifecycle policy.</p>
   * @public
   */
  policy: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure idempotency of the request.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateLifecyclePolicyResponse {
  /**
   * <p>Details about the created lifecycle policy.</p>
   * @public
   */
  lifecyclePolicyDetail?: LifecyclePolicyDetail | undefined;
}

/**
 * <p>Describes IAM federation options for an OpenSearch Serverless security configuration in the form of a key-value map. These options define how OpenSearch Serverless integrates with external identity providers using federation.</p>
 * @public
 */
export interface IamFederationConfigOptions {
  /**
   * <p>The group attribute for this IAM federation integration. This attribute is used to map identity provider groups to OpenSearch Serverless permissions.</p>
   * @public
   */
  groupAttribute?: string | undefined;

  /**
   * <p>The user attribute for this IAM federation integration. This attribute is used to identify users in the federated authentication process.</p>
   * @public
   */
  userAttribute?: string | undefined;
}

/**
 * <p>Describes SAML options for an OpenSearch Serverless security configuration in the form of a key-value map.</p>
 * @public
 */
export interface SamlConfigOptions {
  /**
   * <p>The XML IdP metadata file generated from your identity provider.</p>
   * @public
   */
  metadata: string | undefined;

  /**
   * <p>A user attribute for this SAML integration.</p>
   * @public
   */
  userAttribute?: string | undefined;

  /**
   * <p>The group attribute for this SAML integration.</p>
   * @public
   */
  groupAttribute?: string | undefined;

  /**
   * <p>Custom entity ID attribute to override the default entity ID for this SAML integration.</p>
   * @public
   */
  openSearchServerlessEntityId?: string | undefined;

  /**
   * <p>The session timeout, in minutes. Default is 60 minutes (12 hours).</p>
   * @public
   */
  sessionTimeout?: number | undefined;
}

/**
 * @public
 */
export interface CreateSecurityConfigRequest {
  /**
   * <p>The type of security configuration.</p>
   * @public
   */
  type: SecurityConfigType | undefined;

  /**
   * <p>The name of the security configuration.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A description of the security configuration.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Describes SAML options in in the form of a key-value map. This field is required if you specify <code>SAML</code> for the <code>type</code> parameter.</p>
   * @public
   */
  samlOptions?: SamlConfigOptions | undefined;

  /**
   * <p>Describes IAM Identity Center options in the form of a key-value map. This field is required if you specify iamidentitycenter for the type parameter.</p>
   * @public
   */
  iamIdentityCenterOptions?: CreateIamIdentityCenterConfigOptions | undefined;

  /**
   * <p>Describes IAM federation options in the form of a key-value map. This field is required if you specify <code>iamFederation</code> for the <code>type</code> parameter.</p>
   * @public
   */
  iamFederationOptions?: IamFederationConfigOptions | undefined;

  /**
   * <p>Unique, case-sensitive identifier to ensure idempotency of the request.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * <p>Describes IAM Identity Center options for an OpenSearch Serverless security configuration in the form of a key-value map.</p>
 * @public
 */
export interface IamIdentityCenterConfigOptions {
  /**
   * <p>The ARN of the IAM Identity Center instance used to integrate with OpenSearch Serverless.</p>
   * @public
   */
  instanceArn?: string | undefined;

  /**
   * <p>The ARN of the IAM Identity Center application used to integrate with OpenSearch Serverless.</p>
   * @public
   */
  applicationArn?: string | undefined;

  /**
   * <p>The name of the IAM Identity Center application used to integrate with OpenSearch Serverless.</p>
   * @public
   */
  applicationName?: string | undefined;

  /**
   * <p>The description of the IAM Identity Center application used to integrate with OpenSearch Serverless.</p>
   * @public
   */
  applicationDescription?: string | undefined;

  /**
   * <p>The user attribute for this IAM Identity Center integration. Defaults to <code>UserId</code> </p>
   * @public
   */
  userAttribute?: IamIdentityCenterUserAttribute | undefined;

  /**
   * <p>The group attribute for this IAM Identity Center integration. Defaults to <code>GroupId</code>.</p>
   * @public
   */
  groupAttribute?: IamIdentityCenterGroupAttribute | undefined;
}

/**
 * <p>Details about a security configuration for OpenSearch Serverless.</p>
 * @public
 */
export interface SecurityConfigDetail {
  /**
   * <p>The unique identifier of the security configuration.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The type of security configuration.</p>
   * @public
   */
  type?: SecurityConfigType | undefined;

  /**
   * <p>The version of the security configuration.</p>
   * @public
   */
  configVersion?: string | undefined;

  /**
   * <p>The description of the security configuration.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>SAML options for the security configuration in the form of a key-value map.</p>
   * @public
   */
  samlOptions?: SamlConfigOptions | undefined;

  /**
   * <p>Describes IAM Identity Center options in the form of a key-value map.</p>
   * @public
   */
  iamIdentityCenterOptions?: IamIdentityCenterConfigOptions | undefined;

  /**
   * <p>Describes IAM federation options in the form of a key-value map. Contains configuration details about how OpenSearch Serverless integrates with external identity providers through federation.</p>
   * @public
   */
  iamFederationOptions?: IamFederationConfigOptions | undefined;

  /**
   * <p>The date the configuration was created.</p>
   * @public
   */
  createdDate?: number | undefined;

  /**
   * <p>The timestamp of when the configuration was last modified.</p>
   * @public
   */
  lastModifiedDate?: number | undefined;
}

/**
 * @public
 */
export interface CreateSecurityConfigResponse {
  /**
   * <p>Details about the created security configuration.</p>
   * @public
   */
  securityConfigDetail?: SecurityConfigDetail | undefined;
}

/**
 * @public
 */
export interface CreateSecurityPolicyRequest {
  /**
   * <p>The type of security policy.</p>
   * @public
   */
  type: SecurityPolicyType | undefined;

  /**
   * <p>The name of the policy.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A description of the policy. Typically used to store information about the permissions defined in the policy.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The JSON policy document to use as the content for the new policy.</p>
   * @public
   */
  policy: string | undefined;

  /**
   * <p>Unique, case-sensitive identifier to ensure idempotency of the request.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * <p>Details about an OpenSearch Serverless security policy.</p>
 * @public
 */
export interface SecurityPolicyDetail {
  /**
   * <p>The type of security policy.</p>
   * @public
   */
  type?: SecurityPolicyType | undefined;

  /**
   * <p>The name of the policy.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The version of the policy.</p>
   * @public
   */
  policyVersion?: string | undefined;

  /**
   * <p>The description of the security policy.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The JSON policy document without any whitespaces.</p>
   * @public
   */
  policy?: __DocumentType | undefined;

  /**
   * <p>The date the policy was created.</p>
   * @public
   */
  createdDate?: number | undefined;

  /**
   * <p>The timestamp of when the policy was last modified.</p>
   * @public
   */
  lastModifiedDate?: number | undefined;
}

/**
 * @public
 */
export interface CreateSecurityPolicyResponse {
  /**
   * <p>Details about the created security policy.</p>
   * @public
   */
  securityPolicyDetail?: SecurityPolicyDetail | undefined;
}

/**
 * @public
 */
export interface CreateVpcEndpointRequest {
  /**
   * <p>The name of the interface endpoint.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The ID of the VPC from which you'll access OpenSearch Serverless.</p>
   * @public
   */
  vpcId: string | undefined;

  /**
   * <p>The ID of one or more subnets from which you'll access OpenSearch Serverless.</p>
   * @public
   */
  subnetIds: string[] | undefined;

  /**
   * <p>The unique identifiers of the security groups that define the ports, protocols, and sources for inbound traffic that you are authorizing into your endpoint.</p>
   * @public
   */
  securityGroupIds?: string[] | undefined;

  /**
   * <p>Unique, case-sensitive identifier to ensure idempotency of the request.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * <p>Creation details for an OpenSearch Serverless-managed interface endpoint. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-vpc.html">Access Amazon OpenSearch Serverless using an interface endpoint</a>.</p>
 * @public
 */
export interface CreateVpcEndpointDetail {
  /**
   * <p>The unique identifier of the endpoint.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The name of the endpoint.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The current status in the endpoint creation process.</p>
   * @public
   */
  status?: VpcEndpointStatus | undefined;
}

/**
 * @public
 */
export interface CreateVpcEndpointResponse {
  /**
   * <p>Details about the created interface VPC endpoint.</p>
   * @public
   */
  createVpcEndpointDetail?: CreateVpcEndpointDetail | undefined;
}

/**
 * @public
 */
export interface DeleteIndexRequest {
  /**
   * <p>The unique identifier of the collection containing the index to delete.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name of the index to delete.</p>
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
export interface DeleteLifecyclePolicyRequest {
  /**
   * <p>The type of lifecycle policy.</p>
   * @public
   */
  type: LifecyclePolicyType | undefined;

  /**
   * <p>The name of the policy to delete.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Unique, case-sensitive identifier to ensure idempotency of the request.</p>
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
   * <p>The security configuration identifier. For SAML the ID will be <code>saml/&lt;accountId&gt;/&lt;idpProviderName&gt;</code>. For example, <code>saml/123456789123/OKTADev</code>.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>Unique, case-sensitive identifier to ensure idempotency of the request.</p>
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
   * <p>The type of policy.</p>
   * @public
   */
  type: SecurityPolicyType | undefined;

  /**
   * <p>The name of the policy to delete.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Unique, case-sensitive identifier to ensure idempotency of the request.</p>
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
   * <p>The VPC endpoint identifier.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>Unique, case-sensitive identifier to ensure idempotency of the request.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * <p>Deletion details for an OpenSearch Serverless-managed interface endpoint.</p>
 * @public
 */
export interface DeleteVpcEndpointDetail {
  /**
   * <p>The unique identifier of the endpoint.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The name of the endpoint.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The current status of the endpoint deletion process.</p>
   * @public
   */
  status?: VpcEndpointStatus | undefined;
}

/**
 * @public
 */
export interface DeleteVpcEndpointResponse {
  /**
   * <p>Details about the deleted endpoint.</p>
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
   * <p>OpenSearch Serverless-related details for the current account.</p>
   * @public
   */
  accountSettingsDetail?: AccountSettingsDetail | undefined;
}

/**
 * @public
 */
export interface GetIndexRequest {
  /**
   * <p>The unique identifier of the collection containing the index.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name of the index to retrieve information about.</p>
   * @public
   */
  indexName: string | undefined;
}

/**
 * @public
 */
export interface GetIndexResponse {
  /**
   * <p>The JSON schema definition for the index, including field mappings and settings.</p>
   * @public
   */
  indexSchema?: __DocumentType | undefined;
}

/**
 * @public
 */
export interface GetPoliciesStatsRequest {}

/**
 * <p>Statistics for an OpenSearch Serverless lifecycle policy.</p>
 * @public
 */
export interface LifecyclePolicyStats {
  /**
   * <p>The number of retention lifecycle policies in the current account.</p>
   * @public
   */
  RetentionPolicyCount?: number | undefined;
}

/**
 * <p>Statistics for an OpenSearch Serverless security configuration.</p>
 * @public
 */
export interface SecurityConfigStats {
  /**
   * <p>The number of security configurations in the current account.</p>
   * @public
   */
  SamlConfigCount?: number | undefined;
}

/**
 * <p>Statistics for an OpenSearch Serverless security policy.</p>
 * @public
 */
export interface SecurityPolicyStats {
  /**
   * <p>The number of encryption policies in the current account.</p>
   * @public
   */
  EncryptionPolicyCount?: number | undefined;

  /**
   * <p>The number of network policies in the current account.</p>
   * @public
   */
  NetworkPolicyCount?: number | undefined;
}

/**
 * @public
 */
export interface GetPoliciesStatsResponse {
  /**
   * <p>Information about the data access policies in your account.</p>
   * @public
   */
  AccessPolicyStats?: AccessPolicyStats | undefined;

  /**
   * <p>Information about the security policies in your account.</p>
   * @public
   */
  SecurityPolicyStats?: SecurityPolicyStats | undefined;

  /**
   * <p>Information about the security configurations in your account.</p>
   * @public
   */
  SecurityConfigStats?: SecurityConfigStats | undefined;

  /**
   * <p>Information about the lifecycle policies in your account.</p>
   * @public
   */
  LifecyclePolicyStats?: LifecyclePolicyStats | undefined;

  /**
   * <p>The total number of OpenSearch Serverless security policies and configurations in your account.</p>
   * @public
   */
  TotalPolicyCount?: number | undefined;
}

/**
 * @public
 */
export interface GetSecurityConfigRequest {
  /**
   * <p>The unique identifier of the security configuration.</p>
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface GetSecurityConfigResponse {
  /**
   * <p>Details of the requested security configuration.</p>
   * @public
   */
  securityConfigDetail?: SecurityConfigDetail | undefined;
}

/**
 * @public
 */
export interface GetSecurityPolicyRequest {
  /**
   * <p>The type of security policy.</p>
   * @public
   */
  type: SecurityPolicyType | undefined;

  /**
   * <p>The name of the security policy.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface GetSecurityPolicyResponse {
  /**
   * <p>Details about the requested security policy.</p>
   * @public
   */
  securityPolicyDetail?: SecurityPolicyDetail | undefined;
}

/**
 * @public
 */
export interface UpdateIndexRequest {
  /**
   * <p>The unique identifier of the collection containing the index to update.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name of the index to update.</p>
   * @public
   */
  indexName: string | undefined;

  /**
   * <p>The updated JSON schema definition for the index, including field mappings and settings. </p>
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
export interface ListLifecyclePoliciesRequest {
  /**
   * <p>The type of lifecycle policy.</p>
   * @public
   */
  type: LifecyclePolicyType | undefined;

  /**
   * <p>Resource filters that policies can apply to. Currently, the only supported resource type is <code>index</code>.</p>
   * @public
   */
  resources?: string[] | undefined;

  /**
   * <p>If your initial <code>ListLifecyclePolicies</code> operation returns a <code>nextToken</code>, you can include the returned <code>nextToken</code> in subsequent <code>ListLifecyclePolicies</code> operations, which returns results in the next page.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>An optional parameter that specifies the maximum number of results to return. You can use use <code>nextToken</code> to get the next page of results. The default is 10.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>A summary of the lifecycle policy.</p>
 * @public
 */
export interface LifecyclePolicySummary {
  /**
   * <p>The type of lifecycle policy.</p>
   * @public
   */
  type?: LifecyclePolicyType | undefined;

  /**
   * <p>The name of the lifecycle policy.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The version of the lifecycle policy.</p>
   * @public
   */
  policyVersion?: string | undefined;

  /**
   * <p>The description of the lifecycle policy.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The Epoch time when the lifecycle policy was created.</p>
   * @public
   */
  createdDate?: number | undefined;

  /**
   * <p>The date and time when the lifecycle policy was last modified.</p>
   * @public
   */
  lastModifiedDate?: number | undefined;
}

/**
 * @public
 */
export interface ListLifecyclePoliciesResponse {
  /**
   * <p>Details about the requested lifecycle policies.</p>
   * @public
   */
  lifecyclePolicySummaries?: LifecyclePolicySummary[] | undefined;

  /**
   * <p>When <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateLifecyclePolicyRequest {
  /**
   * <p> The type of lifecycle policy.</p>
   * @public
   */
  type: LifecyclePolicyType | undefined;

  /**
   * <p>The name of the policy.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The version of the policy being updated.</p>
   * @public
   */
  policyVersion: string | undefined;

  /**
   * <p>A description of the lifecycle policy.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The JSON policy document to use as the content for the lifecycle policy.</p>
   * @public
   */
  policy?: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure idempotency of the request.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateLifecyclePolicyResponse {
  /**
   * <p>Details about the updated lifecycle policy.</p>
   * @public
   */
  lifecyclePolicyDetail?: LifecyclePolicyDetail | undefined;
}

/**
 * @public
 */
export interface ListSecurityConfigsRequest {
  /**
   * <p>The type of security configuration.</p>
   * @public
   */
  type: SecurityConfigType | undefined;

  /**
   * <p>If your initial <code>ListSecurityConfigs</code> operation returns a <code>nextToken</code>, you can include the returned <code>nextToken</code> in subsequent <code>ListSecurityConfigs</code> operations, which returns results in the next page.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>An optional parameter that specifies the maximum number of results to return. You can use <code>nextToken</code> to get the next page of results. The default is 20.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>A summary of a security configuration for OpenSearch Serverless.</p>
 * @public
 */
export interface SecurityConfigSummary {
  /**
   * <p>The unique identifier of the security configuration.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The type of security configuration.</p>
   * @public
   */
  type?: SecurityConfigType | undefined;

  /**
   * <p>The version of the security configuration.</p>
   * @public
   */
  configVersion?: string | undefined;

  /**
   * <p>The description of the security configuration.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The Epoch time when the security configuration was created.</p>
   * @public
   */
  createdDate?: number | undefined;

  /**
   * <p>The timestamp of when the configuration was last modified.</p>
   * @public
   */
  lastModifiedDate?: number | undefined;
}

/**
 * @public
 */
export interface ListSecurityConfigsResponse {
  /**
   * <p>Details about the security configurations in your account.</p>
   * @public
   */
  securityConfigSummaries?: SecurityConfigSummary[] | undefined;

  /**
   * <p>When <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSecurityPoliciesRequest {
  /**
   * <p>The type of policy.</p>
   * @public
   */
  type: SecurityPolicyType | undefined;

  /**
   * <p>Resource filters (can be collection or indexes) that policies can apply to. </p>
   * @public
   */
  resource?: string[] | undefined;

  /**
   * <p>If your initial <code>ListSecurityPolicies</code> operation returns a <code>nextToken</code>, you can include the returned <code>nextToken</code> in subsequent <code>ListSecurityPolicies</code> operations, which returns results in the next page.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>An optional parameter that specifies the maximum number of results to return. You can use <code>nextToken</code> to get the next page of results. The default is 20.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>A summary of a security policy for OpenSearch Serverless.</p>
 * @public
 */
export interface SecurityPolicySummary {
  /**
   * <p>The type of security policy.</p>
   * @public
   */
  type?: SecurityPolicyType | undefined;

  /**
   * <p>The name of the policy.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The version of the policy.</p>
   * @public
   */
  policyVersion?: string | undefined;

  /**
   * <p>The description of the security policy.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The date the policy was created.</p>
   * @public
   */
  createdDate?: number | undefined;

  /**
   * <p>The timestamp of when the policy was last modified.</p>
   * @public
   */
  lastModifiedDate?: number | undefined;
}

/**
 * @public
 */
export interface ListSecurityPoliciesResponse {
  /**
   * <p>Details about the security policies in your account.</p>
   * @public
   */
  securityPolicySummaries?: SecurityPolicySummary[] | undefined;

  /**
   * <p>When <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource. The resource must be active (not in the <code>DELETING</code> state), and must be owned by the account ID included in the request.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The tags associated with the resource.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * <p>Filter the results of a <code>ListVpcEndpoints</code> request.</p>
 * @public
 */
export interface VpcEndpointFilters {
  /**
   * <p>The current status of the endpoint.</p>
   * @public
   */
  status?: VpcEndpointStatus | undefined;
}

/**
 * @public
 */
export interface ListVpcEndpointsRequest {
  /**
   * <p>Filter the results according to the current status of the VPC endpoint. Possible statuses are <code>CREATING</code>, <code>DELETING</code>, <code>UPDATING</code>, <code>ACTIVE</code>, and <code>FAILED</code>.</p>
   * @public
   */
  vpcEndpointFilters?: VpcEndpointFilters | undefined;

  /**
   * <p>If your initial <code>ListVpcEndpoints</code> operation returns a <code>nextToken</code>, you can include the returned <code>nextToken</code> in subsequent <code>ListVpcEndpoints</code> operations, which returns results in the next page. </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>An optional parameter that specifies the maximum number of results to return. You can use <code>nextToken</code> to get the next page of results. The default is 20.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>The VPC endpoint object.</p>
 * @public
 */
export interface VpcEndpointSummary {
  /**
   * <p>The unique identifier of the endpoint.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The name of the endpoint.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The current status of the endpoint.</p>
   * @public
   */
  status?: VpcEndpointStatus | undefined;
}

/**
 * @public
 */
export interface ListVpcEndpointsResponse {
  /**
   * <p>Details about each VPC endpoint, including the name and current status.</p>
   * @public
   */
  vpcEndpointSummaries?: VpcEndpointSummary[] | undefined;

  /**
   * <p>When <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Describes IAM Identity Center options for updating an OpenSearch Serverless security configuration in the form of a key-value map.</p>
 * @public
 */
export interface UpdateIamIdentityCenterConfigOptions {
  /**
   * <p>The user attribute for this IAM Identity Center integration. Defaults to <code>UserId</code>.</p>
   * @public
   */
  userAttribute?: IamIdentityCenterUserAttribute | undefined;

  /**
   * <p>The group attribute for this IAM Identity Center integration. Defaults to <code>GroupId</code>.</p>
   * @public
   */
  groupAttribute?: IamIdentityCenterGroupAttribute | undefined;
}

/**
 * @public
 */
export interface UpdateSecurityConfigRequest {
  /**
   * <p>The security configuration identifier. For SAML the ID will be <code>saml/&lt;accountId&gt;/&lt;idpProviderName&gt;</code>. For example, <code>saml/123456789123/OKTADev</code>.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The version of the security configuration to be updated. You can find the most recent version of a security configuration using the <code>GetSecurityPolicy</code> command.</p>
   * @public
   */
  configVersion: string | undefined;

  /**
   * <p>A description of the security configuration.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>SAML options in in the form of a key-value map.</p>
   * @public
   */
  samlOptions?: SamlConfigOptions | undefined;

  /**
   * <p>Describes IAM Identity Center options in the form of a key-value map.</p>
   * @public
   */
  iamIdentityCenterOptionsUpdates?: UpdateIamIdentityCenterConfigOptions | undefined;

  /**
   * <p>Describes IAM federation options in the form of a key-value map for updating an existing security configuration. Use this field to modify IAM federation settings for the security configuration.</p>
   * @public
   */
  iamFederationOptions?: IamFederationConfigOptions | undefined;

  /**
   * <p>Unique, case-sensitive identifier to ensure idempotency of the request.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateSecurityConfigResponse {
  /**
   * <p>Details about the updated security configuration. </p>
   * @public
   */
  securityConfigDetail?: SecurityConfigDetail | undefined;
}

/**
 * @public
 */
export interface UpdateSecurityPolicyRequest {
  /**
   * <p>The type of access policy.</p>
   * @public
   */
  type: SecurityPolicyType | undefined;

  /**
   * <p>The name of the policy.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The version of the policy being updated.</p>
   * @public
   */
  policyVersion: string | undefined;

  /**
   * <p>A description of the policy. Typically used to store information about the permissions defined in the policy.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The JSON policy document to use as the content for the new policy.</p>
   * @public
   */
  policy?: string | undefined;

  /**
   * <p>Unique, case-sensitive identifier to ensure idempotency of the request.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateSecurityPolicyResponse {
  /**
   * <p>Details about the updated security policy.</p>
   * @public
   */
  securityPolicyDetail?: SecurityPolicyDetail | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource. The resource must be active (not in the <code>DELETING</code> state), and must be owned by the account ID included in the request.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>A list of tags (key-value pairs) to add to the resource. All tag keys in the request must be unique.</p>
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
   * <p>The Amazon Resource Name (ARN) of the resource to remove tags from. The resource must be active (not in the <code>DELETING</code> state), and must be owned by the account ID included in the request.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The tag or set of tags to remove from the resource. All tag keys in the request must be unique.</p>
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
   * <p>The maximum capacity limits for all OpenSearch Serverless collections, in OpenSearch Compute Units (OCUs). These limits are used to scale your collections based on the current workload. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-scaling.html">Managing capacity limits for Amazon OpenSearch Serverless</a>.</p>
   * @public
   */
  capacityLimits?: CapacityLimits | undefined;
}

/**
 * @public
 */
export interface UpdateAccountSettingsResponse {
  /**
   * <p>OpenSearch Serverless-related settings for the current Amazon Web Services account.</p>
   * @public
   */
  accountSettingsDetail?: AccountSettingsDetail | undefined;
}

/**
 * @public
 */
export interface UpdateVpcEndpointRequest {
  /**
   * <p>The unique identifier of the interface endpoint to update.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The ID of one or more subnets to add to the endpoint.</p>
   * @public
   */
  addSubnetIds?: string[] | undefined;

  /**
   * <p>The unique identifiers of the subnets to remove from the endpoint.</p>
   * @public
   */
  removeSubnetIds?: string[] | undefined;

  /**
   * <p>The unique identifiers of the security groups to add to the endpoint. Security groups define the ports, protocols, and sources for inbound traffic that you are authorizing into your endpoint.</p>
   * @public
   */
  addSecurityGroupIds?: string[] | undefined;

  /**
   * <p>The unique identifiers of the security groups to remove from the endpoint.</p>
   * @public
   */
  removeSecurityGroupIds?: string[] | undefined;

  /**
   * <p>Unique, case-sensitive identifier to ensure idempotency of the request.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * <p>Update details for an OpenSearch Serverless-managed interface endpoint.</p>
 * @public
 */
export interface UpdateVpcEndpointDetail {
  /**
   * <p>The unique identifier of the endpoint.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The name of the endpoint.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The current status of the endpoint update process.</p>
   * @public
   */
  status?: VpcEndpointStatus | undefined;

  /**
   * <p>The ID of the subnets from which you access OpenSearch Serverless.</p>
   * @public
   */
  subnetIds?: string[] | undefined;

  /**
   * <p>The unique identifiers of the security groups that define the ports, protocols, and sources for inbound traffic that you are authorizing into your endpoint.</p>
   * @public
   */
  securityGroupIds?: string[] | undefined;

  /**
   * <p>The timestamp of when the endpoint was last modified.</p>
   * @public
   */
  lastModifiedDate?: number | undefined;
}

/**
 * @public
 */
export interface UpdateVpcEndpointResponse {
  /**
   * <p>Details about the updated VPC endpoint.</p>
   * @public
   */
  UpdateVpcEndpointDetail?: UpdateVpcEndpointDetail | undefined;
}
