// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";
import { DocumentType as __DocumentType } from "@smithy/types";

import { OpenSearchServerlessServiceException as __BaseException } from "./OpenSearchServerlessServiceException";

/**
 * @public
 * @enum
 */
export const AccessPolicyType = {
  /**
   * data policy type
   */
  data: "data",
} as const;

/**
 * @public
 */
export type AccessPolicyType = (typeof AccessPolicyType)[keyof typeof AccessPolicyType];

/**
 * @public
 * <p>When creating a resource, thrown when a resource with the same name already exists
 *             or is being created. When deleting a resource, thrown when the resource is not in
 *             the ACTIVE or FAILED state.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * @public
 */
export interface CreateAccessPolicyRequest {
  /**
   * <p>The type of policy.</p>
   */
  type: AccessPolicyType | string | undefined;

  /**
   * <p>The name of the policy.</p>
   */
  name: string | undefined;

  /**
   * <p>A description of the policy. Typically used to store information about the permissions
   *             defined in the policy.</p>
   */
  description?: string;

  /**
   * <p>The JSON policy document to use as the content for the policy.</p>
   */
  policy: string | undefined;

  /**
   * <p>Unique, case-sensitive identifier to ensure idempotency of the request.</p>
   */
  clientToken?: string;
}

/**
 * @public
 * <p>Details about an OpenSearch Serverless access policy.</p>
 */
export interface AccessPolicyDetail {
  /**
   * <p>The type of access policy.</p>
   */
  type?: AccessPolicyType | string;

  /**
   * <p>The name of the policy.</p>
   */
  name?: string;

  /**
   * <p>The version of the policy.</p>
   */
  policyVersion?: string;

  /**
   * <p>The description of the policy.</p>
   */
  description?: string;

  /**
   * <p>The JSON policy document without any whitespaces.</p>
   */
  policy?: __DocumentType;

  /**
   * <p>The date the policy was created.</p>
   */
  createdDate?: number;

  /**
   * <p>The timestamp of when the policy was last modified.</p>
   */
  lastModifiedDate?: number;
}

/**
 * @public
 */
export interface CreateAccessPolicyResponse {
  /**
   * <p>Details about the created access policy.</p>
   */
  accessPolicyDetail?: AccessPolicyDetail;
}

/**
 * @public
 * <p>Thrown when an error internal to the service occurs while processing a request.</p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
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
 * <p>Thrown when you attempt to create more resources than the service allows based on service quotas.</p>
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * Identifier of the resource affected.
   */
  resourceId?: string;

  /**
   * Type of the resource affected.
   */
  resourceType?: string;

  /**
   * Service Quotas requirement to identify originating service.
   */
  serviceCode: string | undefined;

  /**
   * Service Quotas requirement to identify originating quota.
   */
  quotaCode?: string;

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
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
    this.serviceCode = opts.serviceCode;
    this.quotaCode = opts.quotaCode;
  }
}

/**
 * @public
 * <p>Thrown when the HTTP request contains invalid input or is missing required
 *             input.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * @public
 */
export interface DeleteAccessPolicyRequest {
  /**
   * <p>The type of policy.</p>
   */
  type: AccessPolicyType | string | undefined;

  /**
   * <p>The name of the policy to delete.</p>
   */
  name: string | undefined;

  /**
   * <p>Unique, case-sensitive identifier to ensure idempotency of the request.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface DeleteAccessPolicyResponse {}

/**
 * @public
 * <p>Thrown when accessing or deleting a resource that does not exist.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * @public
 */
export interface GetAccessPolicyRequest {
  /**
   * <p>Tye type of policy. Currently the only supported value is <code>data</code>.</p>
   */
  type: AccessPolicyType | string | undefined;

  /**
   * <p>The name of the access policy.</p>
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface GetAccessPolicyResponse {
  /**
   * <p>Details about the requested access policy.</p>
   */
  accessPolicyDetail?: AccessPolicyDetail;
}

/**
 * @public
 */
export interface ListAccessPoliciesRequest {
  /**
   * <p>The type of access policy.</p>
   */
  type: AccessPolicyType | string | undefined;

  /**
   * <p>Resource filters (can be collections or indexes) that policies can apply to.</p>
   */
  resource?: string[];

  /**
   * <p>If your initial <code>ListAccessPolicies</code> operation returns a
   *                 <code>nextToken</code>, you can include the returned <code>nextToken</code> in
   *             subsequent <code>ListAccessPolicies</code> operations, which returns results in the next
   *             page. </p>
   */
  nextToken?: string;

  /**
   * <p>An optional parameter that specifies the maximum number of results to return. You can
   *             use <code>nextToken</code> to get the next page of results. The default is 20.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>A summary of the data access policy.</p>
 */
export interface AccessPolicySummary {
  /**
   * <p>The type of access policy. Currently the only available type is <code>data</code>.</p>
   */
  type?: AccessPolicyType | string;

  /**
   * <p>The name of the access policy.</p>
   */
  name?: string;

  /**
   * <p>The version of the policy.</p>
   */
  policyVersion?: string;

  /**
   * <p>The description of the access policy.</p>
   */
  description?: string;

  /**
   * <p>The Epoch time when the access policy was created.</p>
   */
  createdDate?: number;

  /**
   * <p>The date and time when the collection was last modified.</p>
   */
  lastModifiedDate?: number;
}

/**
 * @public
 */
export interface ListAccessPoliciesResponse {
  /**
   * <p>Details about the requested access policies.</p>
   */
  accessPolicySummaries?: AccessPolicySummary[];

  /**
   * <p>When <code>nextToken</code> is returned, there are more results available. The value
   *             of <code>nextToken</code> is a unique pagination token for each page. Make the call
   *             again using the returned token to retrieve the next page.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface UpdateAccessPolicyRequest {
  /**
   * <p>The type of policy.</p>
   */
  type: AccessPolicyType | string | undefined;

  /**
   * <p>The name of the policy.</p>
   */
  name: string | undefined;

  /**
   * <p>The version of the policy being updated.</p>
   */
  policyVersion: string | undefined;

  /**
   * <p>A description of the policy. Typically used to store information about the permissions
   *             defined in the policy.</p>
   */
  description?: string;

  /**
   * <p>The JSON policy document to use as the content for the policy.</p>
   */
  policy?: string;

  /**
   * <p>Unique, case-sensitive identifier to ensure idempotency of the request.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface UpdateAccessPolicyResponse {
  /**
   * <p>Details about the updated access policy.</p>
   */
  accessPolicyDetail?: AccessPolicyDetail;
}

/**
 * @public
 * <p>Statistics for an OpenSearch Serverless access policy.</p>
 */
export interface AccessPolicyStats {
  /**
   * <p>The number of data access policies in the current account.</p>
   */
  DataPolicyCount?: number;
}

/**
 * @public
 * <p>The maximum capacity limits for all OpenSearch Serverless collections, in OpenSearch Compute Units
 *             (OCUs). These limits are used to scale your collections based on the current workload.
 *             For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-scaling.html">Managing
 *                 capacity limits for Amazon OpenSearch Serverless</a>.</p>
 */
export interface CapacityLimits {
  /**
   * <p>The maximum indexing capacity for collections.</p>
   */
  maxIndexingCapacityInOCU?: number;

  /**
   * <p>The maximum search capacity for collections.</p>
   */
  maxSearchCapacityInOCU?: number;
}

/**
 * @public
 * <p>OpenSearch Serverless-related information for the current account.</p>
 */
export interface AccountSettingsDetail {
  /**
   * <p>The maximum capacity limits for all OpenSearch Serverless collections, in OpenSearch Compute Units
   *             (OCUs). These limits are used to scale your collections based on the current workload.
   *             For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-scaling.html">Managing
   *                 capacity limits for Amazon OpenSearch Serverless</a>.</p>
   */
  capacityLimits?: CapacityLimits;
}

/**
 * @public
 */
export interface BatchGetCollectionRequest {
  /**
   * <p>A list of collection IDs. You can't provide names and IDs in the same request. The ID
   *             is part of the collection endpoint. You can also retrieve it using the <a href="https://docs.aws.amazon.com/opensearch-service/latest/ServerlessAPIReference/API_ListCollections.html">ListCollections</a> API.</p>
   */
  ids?: string[];

  /**
   * <p>A list of collection names. You can't provide names and IDs in the same request.</p>
   */
  names?: string[];
}

/**
 * @public
 * @enum
 */
export const CollectionStatus = {
  /**
   * Collection resource is ready to use
   */
  ACTIVE: "ACTIVE",
  /**
   * Creating collection resource
   */
  CREATING: "CREATING",
  /**
   * Deleting collection resource
   */
  DELETING: "DELETING",
  /**
   * Collection resource create or delete failed
   */
  FAILED: "FAILED",
} as const;

/**
 * @public
 */
export type CollectionStatus = (typeof CollectionStatus)[keyof typeof CollectionStatus];

/**
 * @public
 * @enum
 */
export const CollectionType = {
  /**
   * Search collection type
   */
  SEARCH: "SEARCH",
  /**
   * Timeseries collection type
   */
  TIMESERIES: "TIMESERIES",
} as const;

/**
 * @public
 */
export type CollectionType = (typeof CollectionType)[keyof typeof CollectionType];

/**
 * @public
 * <p>Details about each OpenSearch Serverless collection, including the collection endpoint and the
 *             OpenSearch Dashboards endpoint.</p>
 */
export interface CollectionDetail {
  /**
   * <p>A unique identifier for the collection.</p>
   */
  id?: string;

  /**
   * <p>The name of the collection.</p>
   */
  name?: string;

  /**
   * <p>The current status of the collection.</p>
   */
  status?: CollectionStatus | string;

  /**
   * <p>The type of collection.</p>
   */
  type?: CollectionType | string;

  /**
   * <p>A description of the collection.</p>
   */
  description?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the collection.</p>
   */
  arn?: string;

  /**
   * <p>The ARN of the Amazon Web Services KMS key used to encrypt the collection.</p>
   */
  kmsKeyArn?: string;

  /**
   * <p>The Epoch time when the collection was created.</p>
   */
  createdDate?: number;

  /**
   * <p>The date and time when the collection was last modified.</p>
   */
  lastModifiedDate?: number;

  /**
   * <p>Collection-specific endpoint used to submit index, search, and data upload requests to
   *             an OpenSearch Serverless collection.</p>
   */
  collectionEndpoint?: string;

  /**
   * <p>Collection-specific endpoint used to access OpenSearch Dashboards.</p>
   */
  dashboardEndpoint?: string;
}

/**
 * @public
 * <p>Error information for an OpenSearch Serverless request.</p>
 */
export interface CollectionErrorDetail {
  /**
   * <p>If the request contains collection IDs, the response includes the IDs provided in the
   *             request.</p>
   */
  id?: string;

  /**
   * <p>If the request contains collection names, the response includes the names provided in
   *             the request.</p>
   */
  name?: string;

  /**
   * <p>A description of the error. For example, <code>The specified Collection is not
   *                 found.</code>
   *          </p>
   */
  errorMessage?: string;

  /**
   * <p>The error code for the request. For example, <code>NOT_FOUND</code>.</p>
   */
  errorCode?: string;
}

/**
 * @public
 */
export interface BatchGetCollectionResponse {
  /**
   * <p>Details about each collection.</p>
   */
  collectionDetails?: CollectionDetail[];

  /**
   * <p>Error information for the request.</p>
   */
  collectionErrorDetails?: CollectionErrorDetail[];
}

/**
 * @public
 */
export interface BatchGetVpcEndpointRequest {
  /**
   * <p>A list of VPC endpoint identifiers.</p>
   */
  ids: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const VpcEndpointStatus = {
  /**
   * VPCEndpoint resource is ready to use
   */
  ACTIVE: "ACTIVE",
  /**
   * Deleting VPCEndpoint resource
   */
  DELETING: "DELETING",
  /**
   * VPCEndpoint resource create or delete failed
   */
  FAILED: "FAILED",
  /**
   * Pending VPCEndpoint resource
   */
  PENDING: "PENDING",
} as const;

/**
 * @public
 */
export type VpcEndpointStatus = (typeof VpcEndpointStatus)[keyof typeof VpcEndpointStatus];

/**
 * @public
 * <p>Details about an OpenSearch Serverless-managed interface endpoint.</p>
 */
export interface VpcEndpointDetail {
  /**
   * <p>The unique identifier of the endpoint.</p>
   */
  id?: string;

  /**
   * <p>The name of the endpoint.</p>
   */
  name?: string;

  /**
   * <p>The ID of the VPC from which you access OpenSearch Serverless.</p>
   */
  vpcId?: string;

  /**
   * <p>The ID of the subnets from which you access OpenSearch Serverless.</p>
   */
  subnetIds?: string[];

  /**
   * <p>The unique identifiers of the security groups that define the ports, protocols, and
   *             sources for inbound traffic that you are authorizing into your endpoint.</p>
   */
  securityGroupIds?: string[];

  /**
   * <p>The current status of the endpoint.</p>
   */
  status?: VpcEndpointStatus | string;

  /**
   * <p>The date the endpoint was created.</p>
   */
  createdDate?: number;
}

/**
 * @public
 * <p>Error information for a failed <code>BatchGetVpcEndpoint</code> request.</p>
 */
export interface VpcEndpointErrorDetail {
  /**
   * <p>The unique identifier of the VPC endpoint.</p>
   */
  id?: string;

  /**
   * <p>An error message describing the reason for the failure.</p>
   */
  errorMessage?: string;

  /**
   * <p>The error code for the failed request.</p>
   */
  errorCode?: string;
}

/**
 * @public
 */
export interface BatchGetVpcEndpointResponse {
  /**
   * <p>Details about the specified VPC endpoint.</p>
   */
  vpcEndpointDetails?: VpcEndpointDetail[];

  /**
   * <p>Error information for a failed request.</p>
   */
  vpcEndpointErrorDetails?: VpcEndpointErrorDetail[];
}

/**
 * @public
 * <p>A map of key-value pairs associated to an OpenSearch Serverless resource.</p>
 */
export interface Tag {
  /**
   * <p>The key to use in the tag.</p>
   */
  key: string | undefined;

  /**
   * <p>The value of the tag.</p>
   */
  value: string | undefined;
}

/**
 * @public
 */
export interface CreateCollectionRequest {
  /**
   * <p>Name of the collection.</p>
   */
  name: string | undefined;

  /**
   * <p>The type of collection.</p>
   */
  type?: CollectionType | string;

  /**
   * <p>Description of the collection.</p>
   */
  description?: string;

  /**
   * <p>An arbitrary set of tags (key–value pairs) to associate with the OpenSearch Serverless collection.</p>
   */
  tags?: Tag[];

  /**
   * <p>Unique, case-sensitive identifier to ensure idempotency of the request.</p>
   */
  clientToken?: string;
}

/**
 * @public
 * <p>Details about the created OpenSearch Serverless collection.</p>
 */
export interface CreateCollectionDetail {
  /**
   * <p>The unique identifier of the collection.</p>
   */
  id?: string;

  /**
   * <p>The name of the collection.</p>
   */
  name?: string;

  /**
   * <p>The current status of the collection.</p>
   */
  status?: CollectionStatus | string;

  /**
   * <p>The type of collection.</p>
   */
  type?: CollectionType | string;

  /**
   * <p>A description of the collection.</p>
   */
  description?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the collection.</p>
   */
  arn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key with which to encrypt the collection.</p>
   */
  kmsKeyArn?: string;

  /**
   * <p>The Epoch time when the collection was created.</p>
   */
  createdDate?: number;

  /**
   * <p>The date and time when the collection was last modified.</p>
   */
  lastModifiedDate?: number;
}

/**
 * @public
 */
export interface CreateCollectionResponse {
  /**
   * <p>Details about the collection.</p>
   */
  createCollectionDetail?: CreateCollectionDetail;
}

/**
 * @public
 * OCU Limit Exceeded for service limits
 */
export class OcuLimitExceededException extends __BaseException {
  readonly name: "OcuLimitExceededException" = "OcuLimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OcuLimitExceededException, __BaseException>) {
    super({
      name: "OcuLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OcuLimitExceededException.prototype);
  }
}

/**
 * @public
 */
export interface DeleteCollectionRequest {
  /**
   * <p>The unique identifier of the collection. For example, <code>1iu5usc406kd</code>. The
   *             ID is part of the collection endpoint. You can also retrieve it using the <a href="https://docs.aws.amazon.com/opensearch-service/latest/ServerlessAPIReference/API_ListCollections.html">ListCollections</a> API.</p>
   */
  id: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure idempotency of the request.</p>
   */
  clientToken?: string;
}

/**
 * @public
 * <p>Details about a deleted OpenSearch Serverless collection.</p>
 */
export interface DeleteCollectionDetail {
  /**
   * <p>The unique identifier of the collection.</p>
   */
  id?: string;

  /**
   * <p>The name of the collection.</p>
   */
  name?: string;

  /**
   * <p>The current status of the collection.</p>
   */
  status?: CollectionStatus | string;
}

/**
 * @public
 */
export interface DeleteCollectionResponse {
  /**
   * <p>Details of the deleted collection.</p>
   */
  deleteCollectionDetail?: DeleteCollectionDetail;
}

/**
 * @public
 * <p>List of filter keys that you can use for LIST, UPDATE, and DELETE requests to OpenSearch Serverless
 *             collections.</p>
 */
export interface CollectionFilters {
  /**
   * <p>The name of the collection.</p>
   */
  name?: string;

  /**
   * <p>The current status of the collection.</p>
   */
  status?: CollectionStatus | string;
}

/**
 * @public
 */
export interface ListCollectionsRequest {
  /**
   * <p>List of filter names and values that you can use for requests.</p>
   */
  collectionFilters?: CollectionFilters;

  /**
   * <p>If your initial <code>ListCollections</code> operation returns a <code>nextToken</code>,
   *             you can include the returned <code>nextToken</code> in subsequent <code>ListCollections</code> operations,
   *             which returns results in the next page.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return. Default is 20. You can use
   *                 <code>nextToken</code> to get the next page of results.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>Details about each OpenSearch Serverless collection.</p>
 */
export interface CollectionSummary {
  /**
   * <p>The unique identifier of the collection.</p>
   */
  id?: string;

  /**
   * <p>The name of the collection.</p>
   */
  name?: string;

  /**
   * <p>The current status of the collection.</p>
   */
  status?: CollectionStatus | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the collection.</p>
   */
  arn?: string;
}

/**
 * @public
 */
export interface ListCollectionsResponse {
  /**
   * <p>Details about each collection.</p>
   */
  collectionSummaries?: CollectionSummary[];

  /**
   * <p>When <code>nextToken</code> is returned, there are more results available.
   *             The value of <code>nextToken</code> is a unique pagination token for each page.
   *             Make the call again using the returned token to retrieve the next page.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface UpdateCollectionRequest {
  /**
   * <p>The unique identifier of the collection.</p>
   */
  id: string | undefined;

  /**
   * <p>A description of the collection.</p>
   */
  description?: string;

  /**
   * <p>Unique, case-sensitive identifier to ensure idempotency of the request.</p>
   */
  clientToken?: string;
}

/**
 * @public
 * <p>Details about an updated OpenSearch Serverless collection.</p>
 */
export interface UpdateCollectionDetail {
  /**
   * <p>The unique identifier of the collection.</p>
   */
  id?: string;

  /**
   * <p>The name of the collection.</p>
   */
  name?: string;

  /**
   * <p>The current status of the collection.</p>
   */
  status?: CollectionStatus | string;

  /**
   * <p>The collection type.</p>
   */
  type?: CollectionType | string;

  /**
   * <p>The description of the collection.</p>
   */
  description?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the collection.</p>
   */
  arn?: string;

  /**
   * <p>The date and time when the collection was created.</p>
   */
  createdDate?: number;

  /**
   * <p>The date and time when the collection was last modified.</p>
   */
  lastModifiedDate?: number;
}

/**
 * @public
 */
export interface UpdateCollectionResponse {
  /**
   * <p>Details about the updated collection.</p>
   */
  updateCollectionDetail?: UpdateCollectionDetail;
}

/**
 * @public
 * <p>Describes SAML options for an OpenSearch Serverless security configuration in the form of a key-value
 *             map.</p>
 */
export interface SamlConfigOptions {
  /**
   * <p>The XML IdP metadata file generated from your identity provider.</p>
   */
  metadata: string | undefined;

  /**
   * <p>A user attribute for this SAML integration.</p>
   */
  userAttribute?: string;

  /**
   * <p>The group attribute for this SAML integration.</p>
   */
  groupAttribute?: string;

  /**
   * <p>The session timeout, in minutes. Default is 60 minutes (12 hours).</p>
   */
  sessionTimeout?: number;
}

/**
 * @public
 * @enum
 */
export const SecurityConfigType = {
  /**
   * saml provider
   */
  saml: "saml",
} as const;

/**
 * @public
 */
export type SecurityConfigType = (typeof SecurityConfigType)[keyof typeof SecurityConfigType];

/**
 * @public
 */
export interface CreateSecurityConfigRequest {
  /**
   * <p>The type of security configuration.</p>
   */
  type: SecurityConfigType | string | undefined;

  /**
   * <p>The name of the security configuration.</p>
   */
  name: string | undefined;

  /**
   * <p>A description of the security configuration.</p>
   */
  description?: string;

  /**
   * <p>Describes SAML options in in the form of a key-value map. This field is required if
   *             you specify <code>saml</code> for the <code>type</code> parameter.</p>
   */
  samlOptions?: SamlConfigOptions;

  /**
   * <p>Unique, case-sensitive identifier to ensure idempotency of the request.</p>
   */
  clientToken?: string;
}

/**
 * @public
 * <p>Details about a security configuration for OpenSearch Serverless. </p>
 */
export interface SecurityConfigDetail {
  /**
   * <p>The unique identifier of the security configuration.</p>
   */
  id?: string;

  /**
   * <p>The type of security configuration.</p>
   */
  type?: SecurityConfigType | string;

  /**
   * <p>The version of the security configuration.</p>
   */
  configVersion?: string;

  /**
   * <p>The description of the security configuration.</p>
   */
  description?: string;

  /**
   * <p>SAML options for the security configuration in the form of a key-value map.</p>
   */
  samlOptions?: SamlConfigOptions;

  /**
   * <p>The date the configuration was created.</p>
   */
  createdDate?: number;

  /**
   * <p>The timestamp of when the configuration was last modified.</p>
   */
  lastModifiedDate?: number;
}

/**
 * @public
 */
export interface CreateSecurityConfigResponse {
  /**
   * <p>Details about the created security configuration. </p>
   */
  securityConfigDetail?: SecurityConfigDetail;
}

/**
 * @public
 * @enum
 */
export const SecurityPolicyType = {
  /**
   * encryption policy type
   */
  encryption: "encryption",
  /**
   * network policy type
   */
  network: "network",
} as const;

/**
 * @public
 */
export type SecurityPolicyType = (typeof SecurityPolicyType)[keyof typeof SecurityPolicyType];

/**
 * @public
 */
export interface CreateSecurityPolicyRequest {
  /**
   * <p>The type of security policy.</p>
   */
  type: SecurityPolicyType | string | undefined;

  /**
   * <p>The name of the policy.</p>
   */
  name: string | undefined;

  /**
   * <p>A description of the policy. Typically used to store information about the permissions
   *             defined in the policy.</p>
   */
  description?: string;

  /**
   * <p>The JSON policy document to use as the content for the new policy.</p>
   */
  policy: string | undefined;

  /**
   * <p>Unique, case-sensitive identifier to ensure idempotency of the request.</p>
   */
  clientToken?: string;
}

/**
 * @public
 * <p>Details about an OpenSearch Serverless security policy.</p>
 */
export interface SecurityPolicyDetail {
  /**
   * <p>The type of security policy.</p>
   */
  type?: SecurityPolicyType | string;

  /**
   * <p>The name of the policy.</p>
   */
  name?: string;

  /**
   * <p>The version of the policy.</p>
   */
  policyVersion?: string;

  /**
   * <p>The description of the security policy.</p>
   */
  description?: string;

  /**
   * <p>The JSON policy document without any whitespaces.</p>
   */
  policy?: __DocumentType;

  /**
   * <p>The date the policy was created.</p>
   */
  createdDate?: number;

  /**
   * <p>The timestamp of when the policy was last modified.</p>
   */
  lastModifiedDate?: number;
}

/**
 * @public
 */
export interface CreateSecurityPolicyResponse {
  /**
   * <p>Details about the created security policy.</p>
   */
  securityPolicyDetail?: SecurityPolicyDetail;
}

/**
 * @public
 */
export interface CreateVpcEndpointRequest {
  /**
   * <p>The name of the interface endpoint.</p>
   */
  name: string | undefined;

  /**
   * <p>The ID of the VPC from which you'll access OpenSearch Serverless.</p>
   */
  vpcId: string | undefined;

  /**
   * <p>The ID of one or more subnets from which you'll access OpenSearch Serverless.</p>
   */
  subnetIds: string[] | undefined;

  /**
   * <p>The unique identifiers of the security groups that define the ports, protocols, and
   *             sources for inbound traffic that you are authorizing into your endpoint.</p>
   */
  securityGroupIds?: string[];

  /**
   * <p>Unique, case-sensitive identifier to ensure idempotency of the request.</p>
   */
  clientToken?: string;
}

/**
 * @public
 * <p>Creation details for an OpenSearch Serverless-managed interface endpoint. For more information, see
 *             <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-vpc.html">Access Amazon OpenSearch Serverless using an interface endpoint</a>.</p>
 */
export interface CreateVpcEndpointDetail {
  /**
   * <p>The unique identifier of the endpoint.</p>
   */
  id?: string;

  /**
   * <p>The name of the endpoint.</p>
   */
  name?: string;

  /**
   * <p>The current status in the endpoint creation process.</p>
   */
  status?: VpcEndpointStatus | string;
}

/**
 * @public
 */
export interface CreateVpcEndpointResponse {
  /**
   * <p>Details about the created interface VPC endpoint.</p>
   */
  createVpcEndpointDetail?: CreateVpcEndpointDetail;
}

/**
 * @public
 */
export interface DeleteSecurityConfigRequest {
  /**
   * <p>The security configuration identifier. For SAML the ID will be
   *                 <code>saml/&lt;accountId&gt;/&lt;idpProviderName&gt;</code>. For example,
   *                 <code>saml/123456789123/OKTADev</code>.</p>
   */
  id: string | undefined;

  /**
   * <p>Unique, case-sensitive identifier to ensure idempotency of the request.</p>
   */
  clientToken?: string;
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
   */
  type: SecurityPolicyType | string | undefined;

  /**
   * <p>The name of the policy to delete.</p>
   */
  name: string | undefined;

  /**
   * <p>Unique, case-sensitive identifier to ensure idempotency of the request.</p>
   */
  clientToken?: string;
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
   */
  id: string | undefined;

  /**
   * <p>Unique, case-sensitive identifier to ensure idempotency of the request.</p>
   */
  clientToken?: string;
}

/**
 * @public
 * <p>Deletion details for an OpenSearch Serverless-managed interface endpoint.</p>
 */
export interface DeleteVpcEndpointDetail {
  /**
   * <p>The unique identifier of the endpoint.</p>
   */
  id?: string;

  /**
   * <p>The name of the endpoint.</p>
   */
  name?: string;

  /**
   * <p>The current status of the endpoint deletion process.</p>
   */
  status?: VpcEndpointStatus | string;
}

/**
 * @public
 */
export interface DeleteVpcEndpointResponse {
  /**
   * <p>Details about the deleted endpoint.</p>
   */
  deleteVpcEndpointDetail?: DeleteVpcEndpointDetail;
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
   */
  accountSettingsDetail?: AccountSettingsDetail;
}

/**
 * @public
 */
export interface GetPoliciesStatsRequest {}

/**
 * @public
 * <p>Statistics for an OpenSearch Serverless security configuration.</p>
 */
export interface SecurityConfigStats {
  /**
   * <p>The number of security configurations in the current account.</p>
   */
  SamlConfigCount?: number;
}

/**
 * @public
 * <p>Statistics for an OpenSearch Serverless security policy.</p>
 */
export interface SecurityPolicyStats {
  /**
   * <p>The number of encryption policies in the current account.</p>
   */
  EncryptionPolicyCount?: number;

  /**
   * <p>The number of network policies in the current account.</p>
   */
  NetworkPolicyCount?: number;
}

/**
 * @public
 */
export interface GetPoliciesStatsResponse {
  /**
   * <p>Information about the data access policies in your account.</p>
   */
  AccessPolicyStats?: AccessPolicyStats;

  /**
   * <p>Information about the security policies in your account.</p>
   */
  SecurityPolicyStats?: SecurityPolicyStats;

  /**
   * <p>Information about the security configurations in your account.</p>
   */
  SecurityConfigStats?: SecurityConfigStats;

  /**
   * <p>The total number of OpenSearch Serverless security policies and configurations in your
   *             account.</p>
   */
  TotalPolicyCount?: number;
}

/**
 * @public
 */
export interface GetSecurityConfigRequest {
  /**
   * <p>The unique identifier of the security configuration.</p>
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface GetSecurityConfigResponse {
  /**
   * <p>Details of the requested security configuration.</p>
   */
  securityConfigDetail?: SecurityConfigDetail;
}

/**
 * @public
 */
export interface GetSecurityPolicyRequest {
  /**
   * <p>The type of security policy.</p>
   */
  type: SecurityPolicyType | string | undefined;

  /**
   * <p>The name of the security policy.</p>
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface GetSecurityPolicyResponse {
  /**
   * <p>Details about the requested security policy.</p>
   */
  securityPolicyDetail?: SecurityPolicyDetail;
}

/**
 * @public
 */
export interface ListSecurityConfigsRequest {
  /**
   * <p>The type of security configuration.</p>
   */
  type: SecurityConfigType | string | undefined;

  /**
   * <p>If your initial <code>ListSecurityConfigs</code> operation returns a
   *                 <code>nextToken</code>, you can include the returned <code>nextToken</code> in
   *             subsequent <code>ListSecurityConfigs</code> operations, which returns results in the
   *             next page. </p>
   */
  nextToken?: string;

  /**
   * <p>An optional parameter that specifies the maximum number of results to return. You can
   *             use <code>nextToken</code> to get the next page of results. The default is 20.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>A summary of a security configuration for OpenSearch Serverless.</p>
 */
export interface SecurityConfigSummary {
  /**
   * <p>The unique identifier of the security configuration.</p>
   */
  id?: string;

  /**
   * <p>The type of security configuration.</p>
   */
  type?: SecurityConfigType | string;

  /**
   * <p>The version of the security configuration.</p>
   */
  configVersion?: string;

  /**
   * <p>The description of the security configuration.</p>
   */
  description?: string;

  /**
   * <p>The Epoch time when the security configuration was created.</p>
   */
  createdDate?: number;

  /**
   * <p>The timestamp of when the configuration was last modified.</p>
   */
  lastModifiedDate?: number;
}

/**
 * @public
 */
export interface ListSecurityConfigsResponse {
  /**
   * <p>Details about the security configurations in your account.</p>
   */
  securityConfigSummaries?: SecurityConfigSummary[];

  /**
   * <p>When <code>nextToken</code> is returned, there are more results available. The value
   *             of <code>nextToken</code> is a unique pagination token for each page. Make the call
   *             again using the returned token to retrieve the next page.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListSecurityPoliciesRequest {
  /**
   * <p>The type of policy.</p>
   */
  type: SecurityPolicyType | string | undefined;

  /**
   * <p>Resource filters (can be collection or indexes) that policies can apply to. </p>
   */
  resource?: string[];

  /**
   * <p>If your initial <code>ListSecurityPolicies</code> operation returns a
   *                 <code>nextToken</code>, you can include the returned <code>nextToken</code> in
   *             subsequent <code>ListSecurityPolicies</code> operations, which returns results in the
   *             next page. </p>
   */
  nextToken?: string;

  /**
   * <p>An optional parameter that specifies the maximum number of results to return. You can
   *             use <code>nextToken</code> to get the next page of results. The default is 20.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>A summary of a security policy for OpenSearch Serverless.</p>
 */
export interface SecurityPolicySummary {
  /**
   * <p>The type of security policy.</p>
   */
  type?: SecurityPolicyType | string;

  /**
   * <p>The name of the policy.</p>
   */
  name?: string;

  /**
   * <p>The version of the policy.</p>
   */
  policyVersion?: string;

  /**
   * <p>The description of the security policy.</p>
   */
  description?: string;

  /**
   * <p>The date the policy was created.</p>
   */
  createdDate?: number;

  /**
   * <p>The timestamp of when the policy was last modified.</p>
   */
  lastModifiedDate?: number;
}

/**
 * @public
 */
export interface ListSecurityPoliciesResponse {
  /**
   * <p>Details about the security policies in your account.</p>
   */
  securityPolicySummaries?: SecurityPolicySummary[];

  /**
   * <p>When <code>nextToken</code> is returned, there are more results available. The value
   *             of <code>nextToken</code> is a unique pagination token for each page. Make the call
   *             again using the returned token to retrieve the next page.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource. The resource must be active (not in
   *             the <code>DELETING</code> state), and must be owned by the account ID included in the
   *             request.</p>
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The tags associated with the resource.</p>
   */
  tags?: Tag[];
}

/**
 * @public
 * <p>Filter the results of a <code>ListVpcEndpoints</code> request.</p>
 */
export interface VpcEndpointFilters {
  /**
   * <p>The current status of the endpoint.</p>
   */
  status?: VpcEndpointStatus | string;
}

/**
 * @public
 */
export interface ListVpcEndpointsRequest {
  /**
   * <p>Filter the results according to the current status of the VPC endpoint. Possible
   *             statuses are <code>CREATING</code>, <code>DELETING</code>, <code>UPDATING</code>,
   *                 <code>ACTIVE</code>, and <code>FAILED</code>.</p>
   */
  vpcEndpointFilters?: VpcEndpointFilters;

  /**
   * <p>If your initial <code>ListVpcEndpoints</code> operation returns a
   *                 <code>nextToken</code>, you can include the returned <code>nextToken</code> in
   *             subsequent <code>ListVpcEndpoints</code> operations, which returns results in the next
   *             page. </p>
   */
  nextToken?: string;

  /**
   * <p>An optional parameter that specifies the maximum number of results to return. You can
   *             use <code>nextToken</code> to get the next page of results. The default is 20.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>The VPC endpoint object.</p>
 */
export interface VpcEndpointSummary {
  /**
   * <p>The unique identifier of the endpoint.</p>
   */
  id?: string;

  /**
   * <p>The name of the endpoint.</p>
   */
  name?: string;

  /**
   * <p>The current status of the endpoint.</p>
   */
  status?: VpcEndpointStatus | string;
}

/**
 * @public
 */
export interface ListVpcEndpointsResponse {
  /**
   * <p>Details about each VPC endpoint, including the name and current status.</p>
   */
  vpcEndpointSummaries?: VpcEndpointSummary[];

  /**
   * <p>When <code>nextToken</code> is returned, there are more results available. The value
   *             of <code>nextToken</code> is a unique pagination token for each page. Make the call
   *             again using the returned token to retrieve the next page.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface UpdateSecurityConfigRequest {
  /**
   * <p>The security configuration identifier. For SAML the ID will be
   *                 <code>saml/&lt;accountId&gt;/&lt;idpProviderName&gt;</code>. For example,
   *                 <code>saml/123456789123/OKTADev</code>.</p>
   */
  id: string | undefined;

  /**
   * <p>The version of the security configuration to be updated. You can find the most recent
   *             version of a security configuration using the <code>GetSecurityPolicy</code>
   *             command.</p>
   */
  configVersion: string | undefined;

  /**
   * <p>A description of the security configuration.</p>
   */
  description?: string;

  /**
   * <p>SAML options in in the form of a key-value map.</p>
   */
  samlOptions?: SamlConfigOptions;

  /**
   * <p>Unique, case-sensitive identifier to ensure idempotency of the request.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface UpdateSecurityConfigResponse {
  /**
   * <p>Details about the updated security configuration. </p>
   */
  securityConfigDetail?: SecurityConfigDetail;
}

/**
 * @public
 */
export interface UpdateSecurityPolicyRequest {
  /**
   * <p>The type of access policy.</p>
   */
  type: SecurityPolicyType | string | undefined;

  /**
   * <p>The name of the policy.</p>
   */
  name: string | undefined;

  /**
   * <p>The version of the policy being updated.</p>
   */
  policyVersion: string | undefined;

  /**
   * <p>A description of the policy. Typically used to store information about the permissions
   *             defined in the policy.</p>
   */
  description?: string;

  /**
   * <p>The JSON policy document to use as the content for the new policy.</p>
   */
  policy?: string;

  /**
   * <p>Unique, case-sensitive identifier to ensure idempotency of the request.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface UpdateSecurityPolicyResponse {
  /**
   * <p>Details about the updated security policy.</p>
   */
  securityPolicyDetail?: SecurityPolicyDetail;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource. The resource must be active (not in
   *             the <code>DELETING</code> state), and must be owned by the account ID included in the
   *             request.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>A list of tags (key-value pairs) to add to the resource. All tag keys in the request
   *             must be unique.</p>
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
   * <p>The Amazon Resource Name (ARN) of the resource to remove tags from. The resource must
   *             be active (not in the <code>DELETING</code> state), and must be owned by the account ID
   *             included in the request.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The tag or set of tags to remove from the resource. All tag keys in the request must
   *             be unique.</p>
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
   * <p>The maximum capacity limits for all OpenSearch Serverless collections, in OpenSearch Compute Units
   *             (OCUs). These limits are used to scale your collections based on the current workload.
   *             For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-scaling.html">Managing
   *                 capacity limits for Amazon OpenSearch Serverless</a>.</p>
   */
  capacityLimits?: CapacityLimits;
}

/**
 * @public
 */
export interface UpdateAccountSettingsResponse {
  /**
   * <p>OpenSearch Serverless-related settings for the current Amazon Web Services account. </p>
   */
  accountSettingsDetail?: AccountSettingsDetail;
}

/**
 * @public
 */
export interface UpdateVpcEndpointRequest {
  /**
   * <p>The unique identifier of the interface endpoint to update.</p>
   */
  id: string | undefined;

  /**
   * <p>The ID of one or more subnets to add to the endpoint.</p>
   */
  addSubnetIds?: string[];

  /**
   * <p>The unique identifiers of the subnets to remove from the endpoint.</p>
   */
  removeSubnetIds?: string[];

  /**
   * <p>The unique identifiers of the security groups to add to the endpoint. Security groups
   *             define the ports, protocols, and sources for inbound traffic that you are authorizing
   *             into your endpoint.</p>
   */
  addSecurityGroupIds?: string[];

  /**
   * <p>The unique identifiers of the security groups to remove from the endpoint.</p>
   */
  removeSecurityGroupIds?: string[];

  /**
   * <p>Unique, case-sensitive identifier to ensure idempotency of the request.</p>
   */
  clientToken?: string;
}

/**
 * @public
 * <p>Update details for an OpenSearch Serverless-managed interface endpoint.</p>
 */
export interface UpdateVpcEndpointDetail {
  /**
   * <p>The unique identifier of the endpoint.</p>
   */
  id?: string;

  /**
   * <p>The name of the endpoint.</p>
   */
  name?: string;

  /**
   * <p>The current status of the endpoint update process.</p>
   */
  status?: VpcEndpointStatus | string;

  /**
   * <p>The ID of the subnets from which you access OpenSearch Serverless.</p>
   */
  subnetIds?: string[];

  /**
   * <p>The unique identifiers of the security groups that define the ports, protocols, and
   *             sources for inbound traffic that you are authorizing into your endpoint.</p>
   */
  securityGroupIds?: string[];

  /**
   * <p>The timestamp of when the endpoint was last modified.</p>
   */
  lastModifiedDate?: number;
}

/**
 * @public
 */
export interface UpdateVpcEndpointResponse {
  /**
   * <p>Details about the updated VPC endpoint.</p>
   */
  UpdateVpcEndpointDetail?: UpdateVpcEndpointDetail;
}
