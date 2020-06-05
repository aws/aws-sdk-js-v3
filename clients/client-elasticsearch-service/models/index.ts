import {
  SENSITIVE_STRING,
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>The configured access rules for the domain's document and search endpoints, and the current status of those rules.</p>
 */
export interface AccessPoliciesStatus {
  __type?: "AccessPoliciesStatus";
  /**
   * <p>The access policy configured for the Elasticsearch domain.  Access policies may be resource-based, IP-based, or IAM-based.  See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-access-policies" target="_blank">
   *            Configuring Access Policies</a>for more information.</p>
   */
  Options: string | undefined;

  /**
   * <p>The status of the access policy for the Elasticsearch domain. See <code>OptionStatus</code> for the status information that's included. </p>
   */
  Status: OptionStatus | undefined;
}

export namespace AccessPoliciesStatus {
  export const filterSensitiveLog = (obj: AccessPoliciesStatus): any => ({
    ...obj
  });
  export const isa = (o: any): o is AccessPoliciesStatus =>
    __isa(o, "AccessPoliciesStatus");
}

/**
 * <p>
 *       List of limits that are specific to a given InstanceType and for each of it's
 *       <code>
 *         <a>InstanceRole</a>
 *       </code>
 *       .
 *     </p>
 */
export interface AdditionalLimit {
  __type?: "AdditionalLimit";
  /**
   * <p>
   *       Name of Additional Limit is specific to a given InstanceType and for each of it's
   *       <code>
   *         <a>InstanceRole</a>
   *       </code>
   *       etc.
   *       <br></br>
   *       Attributes and their details:
   *       <br></br>
   *       <ul>
   *         <li>MaximumNumberOfDataNodesSupported</li>
   *         This attribute will be present in Master node only to specify how
   *         much data nodes upto which given
   *         <code>
   *           <a>ESPartitionInstanceType</a>
   *         </code>
   *         can support as master node.
   *         <li>MaximumNumberOfDataNodesWithoutMasterNode</li>
   *         This attribute will be present in Data node only to specify how much
   *         data nodes of given
   *         <code>
   *           <a>ESPartitionInstanceType</a>
   *         </code>
   *         upto which you don't need any master nodes to govern them.
   *       </ul>
   *     </p>
   */
  LimitName?: string;

  /**
   * <p>
   *     Value for given
   *     <code>
   *       <a>AdditionalLimit$LimitName</a>
   *     </code>
   *     .
   *   </p>
   */
  LimitValues?: string[];
}

export namespace AdditionalLimit {
  export const filterSensitiveLog = (obj: AdditionalLimit): any => ({
    ...obj
  });
  export const isa = (o: any): o is AdditionalLimit =>
    __isa(o, "AdditionalLimit");
}

/**
 * <p>Container for the parameters to the <code><a>AddTags</a></code> operation. Specify the tags that you want to attach to the Elasticsearch domain.</p>
 */
export interface AddTagsRequest {
  __type?: "AddTagsRequest";
  /**
   * <p> Specify the <code>ARN</code> for which you want to add the tags.</p>
   */
  ARN: string | undefined;

  /**
   * <p> List of <code>Tag</code> that need to be added for the Elasticsearch domain. </p>
   */
  TagList: Tag[] | undefined;
}

export namespace AddTagsRequest {
  export const filterSensitiveLog = (obj: AddTagsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is AddTagsRequest =>
    __isa(o, "AddTagsRequest");
}

/**
 * <p> Status of the advanced options for the specified Elasticsearch domain. Currently, the following advanced options are available:</p>
 *        <ul>
 *            <li>Option to allow references to indices in an HTTP request body.  Must be <code>false</code> when configuring access to individual sub-resources.  By default, the value is <code>true</code>.
 *                See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options" target="_blank">Configuration Advanced Options</a> for more information.</li>
 *            <li>Option to specify the percentage of heap space that is allocated to field data. By default, this setting is unbounded.</li>
 *        </ul>
 *        <p>For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options">Configuring Advanced Options</a>.</p>
 */
export interface AdvancedOptionsStatus {
  __type?: "AdvancedOptionsStatus";
  /**
   * <p> Specifies the status of advanced options for the specified Elasticsearch domain.</p>
   */
  Options: { [key: string]: string } | undefined;

  /**
   * <p> Specifies the status of <code>OptionStatus</code> for advanced options for the specified Elasticsearch domain.</p>
   */
  Status: OptionStatus | undefined;
}

export namespace AdvancedOptionsStatus {
  export const filterSensitiveLog = (obj: AdvancedOptionsStatus): any => ({
    ...obj
  });
  export const isa = (o: any): o is AdvancedOptionsStatus =>
    __isa(o, "AdvancedOptionsStatus");
}

/**
 * <p>An error occurred while processing the request.</p>
 */
export interface BaseException extends __SmithyException, $MetadataBearer {
  name: "BaseException";
  $fault: "client";
  /**
   * <p>A description of the error.</p>
   */
  message?: string;
}

export namespace BaseException {
  export const filterSensitiveLog = (obj: BaseException): any => ({
    ...obj
  });
  export const isa = (o: any): o is BaseException => __isa(o, "BaseException");
}

/**
 * <p>Container for the parameters to the <code><a>CancelElasticsearchServiceSoftwareUpdate</a></code> operation. Specifies the name of the Elasticsearch domain that you wish to cancel a service software update on.</p>
 */
export interface CancelElasticsearchServiceSoftwareUpdateRequest {
  __type?: "CancelElasticsearchServiceSoftwareUpdateRequest";
  /**
   * <p>The name of the domain that you want to stop the latest service software update on.</p>
   */
  DomainName: string | undefined;
}

export namespace CancelElasticsearchServiceSoftwareUpdateRequest {
  export const filterSensitiveLog = (
    obj: CancelElasticsearchServiceSoftwareUpdateRequest
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is CancelElasticsearchServiceSoftwareUpdateRequest =>
    __isa(o, "CancelElasticsearchServiceSoftwareUpdateRequest");
}

/**
 * <p>The result of a <code>CancelElasticsearchServiceSoftwareUpdate</code> operation. Contains the status of the update.</p>
 */
export interface CancelElasticsearchServiceSoftwareUpdateResponse {
  __type?: "CancelElasticsearchServiceSoftwareUpdateResponse";
  /**
   * <p>The current status of the Elasticsearch service software update.</p>
   */
  ServiceSoftwareOptions?: ServiceSoftwareOptions;
}

export namespace CancelElasticsearchServiceSoftwareUpdateResponse {
  export const filterSensitiveLog = (
    obj: CancelElasticsearchServiceSoftwareUpdateResponse
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is CancelElasticsearchServiceSoftwareUpdateResponse =>
    __isa(o, "CancelElasticsearchServiceSoftwareUpdateResponse");
}

/**
 * <p>Options to specify the Cognito user and identity pools for Kibana authentication. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-cognito-auth.html" target="_blank">Amazon Cognito Authentication for Kibana</a>.</p>
 */
export interface CognitoOptions {
  __type?: "CognitoOptions";
  /**
   * <p>Specifies the option to enable Cognito for Kibana authentication.</p>
   */
  Enabled?: boolean;

  /**
   * <p>Specifies the Cognito identity pool ID for Kibana authentication.</p>
   */
  IdentityPoolId?: string;

  /**
   * <p>Specifies the role ARN that provides Elasticsearch permissions for accessing Cognito resources.</p>
   */
  RoleArn?: string;

  /**
   * <p>Specifies the Cognito user pool ID for Kibana authentication.</p>
   */
  UserPoolId?: string;
}

export namespace CognitoOptions {
  export const filterSensitiveLog = (obj: CognitoOptions): any => ({
    ...obj
  });
  export const isa = (o: any): o is CognitoOptions =>
    __isa(o, "CognitoOptions");
}

/**
 * <p>Status of the Cognito options for the specified Elasticsearch domain.</p>
 */
export interface CognitoOptionsStatus {
  __type?: "CognitoOptionsStatus";
  /**
   * <p>Specifies the Cognito options for the specified Elasticsearch domain.</p>
   */
  Options: CognitoOptions | undefined;

  /**
   * <p>Specifies the status of the Cognito options for the specified Elasticsearch domain.</p>
   */
  Status: OptionStatus | undefined;
}

export namespace CognitoOptionsStatus {
  export const filterSensitiveLog = (obj: CognitoOptionsStatus): any => ({
    ...obj
  });
  export const isa = (o: any): o is CognitoOptionsStatus =>
    __isa(o, "CognitoOptionsStatus");
}

/**
 * <p>
 *       A map from an
 *       <code>
 *         <a>ElasticsearchVersion</a>
 *       </code>
 *       to a list of compatible
 *       <code>
 *         <a>ElasticsearchVersion</a>
 *       </code>
 *       s to which the domain can be upgraded.
 *     </p>
 */
export interface CompatibleVersionsMap {
  __type?: "CompatibleVersionsMap";
  /**
   * <p>The current version of Elasticsearch on which a domain is.</p>
   */
  SourceVersion?: string;

  /**
   * <p>List of supported elastic search versions.
   *     </p>
   */
  TargetVersions?: string[];
}

export namespace CompatibleVersionsMap {
  export const filterSensitiveLog = (obj: CompatibleVersionsMap): any => ({
    ...obj
  });
  export const isa = (o: any): o is CompatibleVersionsMap =>
    __isa(o, "CompatibleVersionsMap");
}

export interface CreateElasticsearchDomainRequest {
  __type?: "CreateElasticsearchDomainRequest";
  /**
   * <p> IAM access policy as a JSON-formatted string.</p>
   */
  AccessPolicies?: string;

  /**
   * <p> Option to allow references to indices in an HTTP request body.  Must be <code>false</code> when configuring access to individual sub-resources.  By default, the value is <code>true</code>.
   *           See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options" target="_blank">Configuration Advanced Options</a> for more information.</p>
   */
  AdvancedOptions?: { [key: string]: string };

  /**
   * <p>Options to specify the Cognito user and identity pools for Kibana authentication. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-cognito-auth.html" target="_blank">Amazon Cognito Authentication for Kibana</a>.</p>
   */
  CognitoOptions?: CognitoOptions;

  /**
   * <p>Options to specify configuration that will be applied to the domain endpoint.</p>
   */
  DomainEndpointOptions?: DomainEndpointOptions;

  /**
   * <p>The name of the Elasticsearch domain that you are creating. Domain names are unique across the domains owned by an account within an AWS region. Domain names must start with a lowercase letter and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).</p>
   */
  DomainName: string | undefined;

  /**
   * <p>Options to enable, disable and specify the type and size of EBS storage volumes. </p>
   */
  EBSOptions?: EBSOptions;

  /**
   * <p>Configuration options for an Elasticsearch domain. Specifies the instance type and number of instances in the domain cluster. </p>
   */
  ElasticsearchClusterConfig?: ElasticsearchClusterConfig;

  /**
   * <p>String of format X.Y to specify version for the Elasticsearch domain eg. "1.5" or "2.3". For more information,
   *           see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomains" target="_blank">Creating Elasticsearch Domains</a> in the <i>Amazon Elasticsearch Service Developer Guide</i>.</p>
   */
  ElasticsearchVersion?: string;

  /**
   * <p>Specifies the Encryption At Rest Options.</p>
   */
  EncryptionAtRestOptions?: EncryptionAtRestOptions;

  /**
   * <p>Map of <code>LogType</code> and <code>LogPublishingOption</code>, each containing options to publish a given type of Elasticsearch log.</p>
   */
  LogPublishingOptions?: { [key: string]: LogPublishingOption };

  /**
   * <p>Specifies the NodeToNodeEncryptionOptions.</p>
   */
  NodeToNodeEncryptionOptions?: NodeToNodeEncryptionOptions;

  /**
   * <p>Option to set time, in UTC format, of the daily automated snapshot. Default value is 0 hours. </p>
   */
  SnapshotOptions?: SnapshotOptions;

  /**
   * <p>Options to specify the subnets and security groups for VPC endpoint. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html#es-creating-vpc" target="_blank">Creating a VPC</a> in <i>VPC Endpoints for Amazon Elasticsearch Service Domains</i></p>
   */
  VPCOptions?: VPCOptions;
}

export namespace CreateElasticsearchDomainRequest {
  export const filterSensitiveLog = (
    obj: CreateElasticsearchDomainRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateElasticsearchDomainRequest =>
    __isa(o, "CreateElasticsearchDomainRequest");
}

/**
 * <p>The result of a <code>CreateElasticsearchDomain</code> operation. Contains the status of the newly created Elasticsearch domain.</p>
 */
export interface CreateElasticsearchDomainResponse {
  __type?: "CreateElasticsearchDomainResponse";
  /**
   * <p>The status of the newly created Elasticsearch domain. </p>
   */
  DomainStatus?: ElasticsearchDomainStatus;
}

export namespace CreateElasticsearchDomainResponse {
  export const filterSensitiveLog = (
    obj: CreateElasticsearchDomainResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateElasticsearchDomainResponse =>
    __isa(o, "CreateElasticsearchDomainResponse");
}

/**
 * <p>Container for the parameters to the <code><a>DeleteElasticsearchDomain</a></code> operation. Specifies the name of the Elasticsearch domain that you want to delete.</p>
 */
export interface DeleteElasticsearchDomainRequest {
  __type?: "DeleteElasticsearchDomainRequest";
  /**
   * <p>The name of the Elasticsearch domain that you want to permanently delete.</p>
   */
  DomainName: string | undefined;
}

export namespace DeleteElasticsearchDomainRequest {
  export const filterSensitiveLog = (
    obj: DeleteElasticsearchDomainRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteElasticsearchDomainRequest =>
    __isa(o, "DeleteElasticsearchDomainRequest");
}

/**
 * <p>The result of a <code>DeleteElasticsearchDomain</code> request. Contains the status of the pending deletion, or no status if the domain and all of its resources have been deleted.</p>
 */
export interface DeleteElasticsearchDomainResponse {
  __type?: "DeleteElasticsearchDomainResponse";
  /**
   * <p>The status of the Elasticsearch domain being deleted.</p>
   */
  DomainStatus?: ElasticsearchDomainStatus;
}

export namespace DeleteElasticsearchDomainResponse {
  export const filterSensitiveLog = (
    obj: DeleteElasticsearchDomainResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteElasticsearchDomainResponse =>
    __isa(o, "DeleteElasticsearchDomainResponse");
}

export type DeploymentStatus =
  | "COMPLETED"
  | "ELIGIBLE"
  | "IN_PROGRESS"
  | "NOT_ELIGIBLE"
  | "PENDING_UPDATE";

/**
 * <p> Container for the parameters to the <code>DescribeElasticsearchDomainConfig</code> operation. Specifies the domain name for which you want configuration information.</p>
 */
export interface DescribeElasticsearchDomainConfigRequest {
  __type?: "DescribeElasticsearchDomainConfigRequest";
  /**
   * <p>The Elasticsearch domain that you want to get information about.</p>
   */
  DomainName: string | undefined;
}

export namespace DescribeElasticsearchDomainConfigRequest {
  export const filterSensitiveLog = (
    obj: DescribeElasticsearchDomainConfigRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeElasticsearchDomainConfigRequest =>
    __isa(o, "DescribeElasticsearchDomainConfigRequest");
}

/**
 * <p>The result of a <code>DescribeElasticsearchDomainConfig</code> request. Contains the configuration information of the requested domain.</p>
 */
export interface DescribeElasticsearchDomainConfigResponse {
  __type?: "DescribeElasticsearchDomainConfigResponse";
  /**
   * <p>The configuration information of the domain requested in the <code>DescribeElasticsearchDomainConfig</code> request.</p>
   */
  DomainConfig: ElasticsearchDomainConfig | undefined;
}

export namespace DescribeElasticsearchDomainConfigResponse {
  export const filterSensitiveLog = (
    obj: DescribeElasticsearchDomainConfigResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeElasticsearchDomainConfigResponse =>
    __isa(o, "DescribeElasticsearchDomainConfigResponse");
}

/**
 * <p>Container for the parameters to the <code><a>DescribeElasticsearchDomain</a></code> operation.</p>
 */
export interface DescribeElasticsearchDomainRequest {
  __type?: "DescribeElasticsearchDomainRequest";
  /**
   * <p>The name of the Elasticsearch domain for which you want information.</p>
   */
  DomainName: string | undefined;
}

export namespace DescribeElasticsearchDomainRequest {
  export const filterSensitiveLog = (
    obj: DescribeElasticsearchDomainRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeElasticsearchDomainRequest =>
    __isa(o, "DescribeElasticsearchDomainRequest");
}

/**
 * <p>The result of a <code>DescribeElasticsearchDomain</code> request. Contains the status of the domain specified in the request.</p>
 */
export interface DescribeElasticsearchDomainResponse {
  __type?: "DescribeElasticsearchDomainResponse";
  /**
   * <p>The current status of the Elasticsearch domain.</p>
   */
  DomainStatus: ElasticsearchDomainStatus | undefined;
}

export namespace DescribeElasticsearchDomainResponse {
  export const filterSensitiveLog = (
    obj: DescribeElasticsearchDomainResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeElasticsearchDomainResponse =>
    __isa(o, "DescribeElasticsearchDomainResponse");
}

/**
 * <p>Container for the parameters to the <code><a>DescribeElasticsearchDomains</a></code> operation. By default, the API returns the status of all Elasticsearch domains.</p>
 */
export interface DescribeElasticsearchDomainsRequest {
  __type?: "DescribeElasticsearchDomainsRequest";
  /**
   * <p>The Elasticsearch domains for which you want information.</p>
   */
  DomainNames: string[] | undefined;
}

export namespace DescribeElasticsearchDomainsRequest {
  export const filterSensitiveLog = (
    obj: DescribeElasticsearchDomainsRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeElasticsearchDomainsRequest =>
    __isa(o, "DescribeElasticsearchDomainsRequest");
}

/**
 * <p>The result of a <code>DescribeElasticsearchDomains</code> request. Contains the status of the specified domains or all domains owned by the account.</p>
 */
export interface DescribeElasticsearchDomainsResponse {
  __type?: "DescribeElasticsearchDomainsResponse";
  /**
   * <p>The status of the domains requested in the <code>DescribeElasticsearchDomains</code> request.</p>
   */
  DomainStatusList: ElasticsearchDomainStatus[] | undefined;
}

export namespace DescribeElasticsearchDomainsResponse {
  export const filterSensitiveLog = (
    obj: DescribeElasticsearchDomainsResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeElasticsearchDomainsResponse =>
    __isa(o, "DescribeElasticsearchDomainsResponse");
}

/**
 * <p>
 *       Container for the parameters to
 *       <code>
 *         <a>DescribeElasticsearchInstanceTypeLimits</a>
 *       </code>
 *       operation.
 *     </p>
 */
export interface DescribeElasticsearchInstanceTypeLimitsRequest {
  __type?: "DescribeElasticsearchInstanceTypeLimitsRequest";
  /**
   * <p>
   *       DomainName represents the name of the Domain that we are trying to
   *       modify. This should be present only if we are
   *       querying for Elasticsearch
   *       <code>
   *         <a>Limits</a>
   *       </code>
   *       for existing domain.
   *     </p>
   */
  DomainName?: string;

  /**
   * <p>
   *       Version of Elasticsearch for which
   *       <code>
   *         <a>Limits</a>
   *       </code>
   *       are needed.
   *     </p>
   */
  ElasticsearchVersion: string | undefined;

  /**
   * <p>
   *       The instance type for an Elasticsearch cluster for which Elasticsearch
   *       <code>
   *         <a>Limits</a>
   *       </code>
   *       are needed.
   *     </p>
   */
  InstanceType: ESPartitionInstanceType | string | undefined;
}

export namespace DescribeElasticsearchInstanceTypeLimitsRequest {
  export const filterSensitiveLog = (
    obj: DescribeElasticsearchInstanceTypeLimitsRequest
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is DescribeElasticsearchInstanceTypeLimitsRequest =>
    __isa(o, "DescribeElasticsearchInstanceTypeLimitsRequest");
}

/**
 * <p>
 *       Container for the parameters received from
 *       <code>
 *         <a>DescribeElasticsearchInstanceTypeLimits</a>
 *       </code>
 *       operation.
 *     </p>
 */
export interface DescribeElasticsearchInstanceTypeLimitsResponse {
  __type?: "DescribeElasticsearchInstanceTypeLimitsResponse";
  /**
   * <p>
   *       Map of Role of the Instance and Limits that are applicable.
   *       Role performed by given Instance in Elasticsearch
   *       can be one of the following:
   *       <ul>
   *         <li>data: If the given InstanceType is used as data node</li>
   *         <li>master: If the given InstanceType is used as master node</li>
   *         <li>ultra_warm: If the given InstanceType is used as warm node</li>
   *       </ul>
   *     </p>
   */
  LimitsByRole?: { [key: string]: Limits };
}

export namespace DescribeElasticsearchInstanceTypeLimitsResponse {
  export const filterSensitiveLog = (
    obj: DescribeElasticsearchInstanceTypeLimitsResponse
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is DescribeElasticsearchInstanceTypeLimitsResponse =>
    __isa(o, "DescribeElasticsearchInstanceTypeLimitsResponse");
}

/**
 * <p>Container for parameters to <code>DescribeReservedElasticsearchInstanceOfferings</code></p>
 */
export interface DescribeReservedElasticsearchInstanceOfferingsRequest {
  __type?: "DescribeReservedElasticsearchInstanceOfferingsRequest";
  /**
   * <p>Set this value to limit the number of results returned. If not specified, defaults to 100.</p>
   */
  MaxResults?: number;

  /**
   * <p>NextToken should be sent in case if earlier API call produced result
   * 		containing NextToken. It is used for pagination.</p>
   */
  NextToken?: string;

  /**
   * <p>The offering identifier filter value. Use this parameter to show only the available offering that matches the specified reservation identifier.</p>
   */
  ReservedElasticsearchInstanceOfferingId?: string;
}

export namespace DescribeReservedElasticsearchInstanceOfferingsRequest {
  export const filterSensitiveLog = (
    obj: DescribeReservedElasticsearchInstanceOfferingsRequest
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is DescribeReservedElasticsearchInstanceOfferingsRequest =>
    __isa(o, "DescribeReservedElasticsearchInstanceOfferingsRequest");
}

/**
 * <p>Container for results from <code>DescribeReservedElasticsearchInstanceOfferings</code></p>
 */
export interface DescribeReservedElasticsearchInstanceOfferingsResponse {
  __type?: "DescribeReservedElasticsearchInstanceOfferingsResponse";
  /**
   * <p>Provides an identifier to allow retrieval of paginated results.</p>
   */
  NextToken?: string;

  /**
   * <p>List of reserved Elasticsearch instance offerings</p>
   */
  ReservedElasticsearchInstanceOfferings?: ReservedElasticsearchInstanceOffering[];
}

export namespace DescribeReservedElasticsearchInstanceOfferingsResponse {
  export const filterSensitiveLog = (
    obj: DescribeReservedElasticsearchInstanceOfferingsResponse
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is DescribeReservedElasticsearchInstanceOfferingsResponse =>
    __isa(o, "DescribeReservedElasticsearchInstanceOfferingsResponse");
}

/**
 * <p>Container for parameters to <code>DescribeReservedElasticsearchInstances</code></p>
 */
export interface DescribeReservedElasticsearchInstancesRequest {
  __type?: "DescribeReservedElasticsearchInstancesRequest";
  /**
   * <p>Set this value to limit the number of results returned. If not specified, defaults to 100.</p>
   */
  MaxResults?: number;

  /**
   * <p>NextToken should be sent in case if earlier API call produced result
   * 		containing NextToken. It is used for pagination.</p>
   */
  NextToken?: string;

  /**
   * <p>The reserved instance identifier filter value. Use this parameter to show only the reservation that matches the specified reserved Elasticsearch instance ID.</p>
   */
  ReservedElasticsearchInstanceId?: string;
}

export namespace DescribeReservedElasticsearchInstancesRequest {
  export const filterSensitiveLog = (
    obj: DescribeReservedElasticsearchInstancesRequest
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is DescribeReservedElasticsearchInstancesRequest =>
    __isa(o, "DescribeReservedElasticsearchInstancesRequest");
}

/**
 * <p>Container for results from <code>DescribeReservedElasticsearchInstances</code></p>
 */
export interface DescribeReservedElasticsearchInstancesResponse {
  __type?: "DescribeReservedElasticsearchInstancesResponse";
  /**
   * <p>Provides an identifier to allow retrieval of paginated results.</p>
   */
  NextToken?: string;

  /**
   * <p>List of reserved Elasticsearch instances.</p>
   */
  ReservedElasticsearchInstances?: ReservedElasticsearchInstance[];
}

export namespace DescribeReservedElasticsearchInstancesResponse {
  export const filterSensitiveLog = (
    obj: DescribeReservedElasticsearchInstancesResponse
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is DescribeReservedElasticsearchInstancesResponse =>
    __isa(o, "DescribeReservedElasticsearchInstancesResponse");
}

/**
 * <p>An error occured because the client wanted to access a not supported operation. Gives http status code of 409.</p>
 */
export interface DisabledOperationException
  extends __SmithyException,
    $MetadataBearer {
  name: "DisabledOperationException";
  $fault: "client";
  /**
   * <p>A description of the error.</p>
   */
  message?: string;
}

export namespace DisabledOperationException {
  export const filterSensitiveLog = (obj: DisabledOperationException): any => ({
    ...obj
  });
  export const isa = (o: any): o is DisabledOperationException =>
    __isa(o, "DisabledOperationException");
}

/**
 * <p>Options to configure endpoint for the Elasticsearch domain.</p>
 */
export interface DomainEndpointOptions {
  __type?: "DomainEndpointOptions";
  /**
   * <p>Specify if only HTTPS endpoint should be enabled for the Elasticsearch domain.</p>
   */
  EnforceHTTPS?: boolean;

  /**
   * <p>Specify the TLS security policy that needs to be applied to the HTTPS endpoint of Elasticsearch domain.
   *         <br></br> It can be one of the following values:
   *         <ul>
   *             <li><b>Policy-Min-TLS-1-0-2019-07: </b> TLS security policy which supports TLSv1.0 and higher.</li>
   *             <li><b>Policy-Min-TLS-1-2-2019-07: </b> TLS security policy which supports only TLSv1.2</li>
   *         </ul>
   *     </p>
   */
  TLSSecurityPolicy?: TLSSecurityPolicy | string;
}

export namespace DomainEndpointOptions {
  export const filterSensitiveLog = (obj: DomainEndpointOptions): any => ({
    ...obj
  });
  export const isa = (o: any): o is DomainEndpointOptions =>
    __isa(o, "DomainEndpointOptions");
}

/**
 * <p>The configured endpoint options for the domain and their current status.</p>
 */
export interface DomainEndpointOptionsStatus {
  __type?: "DomainEndpointOptionsStatus";
  /**
   * <p>Options to configure endpoint for the Elasticsearch domain.</p>
   */
  Options: DomainEndpointOptions | undefined;

  /**
   * <p>The status of the endpoint options for the Elasticsearch domain. See <code>OptionStatus</code> for the status information that's included. </p>
   */
  Status: OptionStatus | undefined;
}

export namespace DomainEndpointOptionsStatus {
  export const filterSensitiveLog = (
    obj: DomainEndpointOptionsStatus
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DomainEndpointOptionsStatus =>
    __isa(o, "DomainEndpointOptionsStatus");
}

export interface DomainInfo {
  __type?: "DomainInfo";
  /**
   * <p> Specifies the <code>DomainName</code>.</p>
   */
  DomainName?: string;
}

export namespace DomainInfo {
  export const filterSensitiveLog = (obj: DomainInfo): any => ({
    ...obj
  });
  export const isa = (o: any): o is DomainInfo => __isa(o, "DomainInfo");
}

/**
 * <p>Options to enable, disable, and specify the properties of EBS storage volumes. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-ebs" target="_blank"> Configuring EBS-based Storage</a>.</p>
 */
export interface EBSOptions {
  __type?: "EBSOptions";
  /**
   * <p>Specifies whether EBS-based storage is enabled.</p>
   */
  EBSEnabled?: boolean;

  /**
   * <p>Specifies the IOPD for a Provisioned IOPS EBS volume (SSD).</p>
   */
  Iops?: number;

  /**
   * <p> Integer to specify the size of an EBS volume.</p>
   */
  VolumeSize?: number;

  /**
   * <p> Specifies the volume type for EBS-based storage.</p>
   */
  VolumeType?: VolumeType | string;
}

export namespace EBSOptions {
  export const filterSensitiveLog = (obj: EBSOptions): any => ({
    ...obj
  });
  export const isa = (o: any): o is EBSOptions => __isa(o, "EBSOptions");
}

/**
 * <p> Status of the EBS options for the specified Elasticsearch domain.</p>
 */
export interface EBSOptionsStatus {
  __type?: "EBSOptionsStatus";
  /**
   * <p> Specifies the EBS options for the specified Elasticsearch domain.</p>
   */
  Options: EBSOptions | undefined;

  /**
   * <p> Specifies the status of the EBS options for the specified Elasticsearch domain.</p>
   */
  Status: OptionStatus | undefined;
}

export namespace EBSOptionsStatus {
  export const filterSensitiveLog = (obj: EBSOptionsStatus): any => ({
    ...obj
  });
  export const isa = (o: any): o is EBSOptionsStatus =>
    __isa(o, "EBSOptionsStatus");
}

/**
 * <p>Specifies the configuration for the domain cluster, such as the type and number of instances.</p>
 */
export interface ElasticsearchClusterConfig {
  __type?: "ElasticsearchClusterConfig";
  /**
   * <p>Total number of dedicated master nodes, active and on standby, for the cluster.</p>
   */
  DedicatedMasterCount?: number;

  /**
   * <p>A boolean value to indicate whether a dedicated master node is enabled.  See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-managedomains.html#es-managedomains-dedicatedmasternodes" target="_blank">About Dedicated Master Nodes</a> for more information.</p>
   */
  DedicatedMasterEnabled?: boolean;

  /**
   * <p>The instance type for a dedicated master node.</p>
   */
  DedicatedMasterType?: ESPartitionInstanceType | string;

  /**
   * <p>The number of instances in the specified domain cluster.</p>
   */
  InstanceCount?: number;

  /**
   * <p>The instance type for an Elasticsearch cluster. UltraWarm instance types are not supported for data instances.</p>
   */
  InstanceType?: ESPartitionInstanceType | string;

  /**
   * <p>The number of warm nodes in the cluster.</p>
   */
  WarmCount?: number;

  /**
   * <p>True to enable warm storage.</p>
   */
  WarmEnabled?: boolean;

  /**
   * <p>The instance type for the Elasticsearch cluster's warm nodes.</p>
   */
  WarmType?: ESWarmPartitionInstanceType | string;

  /**
   * <p>Specifies the zone awareness configuration for a domain when zone awareness is enabled.</p>
   */
  ZoneAwarenessConfig?: ZoneAwarenessConfig;

  /**
   * <p>A boolean value to indicate whether zone awareness is enabled.  See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-managedomains.html#es-managedomains-zoneawareness" target="_blank">About Zone Awareness</a> for more information.</p>
   */
  ZoneAwarenessEnabled?: boolean;
}

export namespace ElasticsearchClusterConfig {
  export const filterSensitiveLog = (obj: ElasticsearchClusterConfig): any => ({
    ...obj
  });
  export const isa = (o: any): o is ElasticsearchClusterConfig =>
    __isa(o, "ElasticsearchClusterConfig");
}

/**
 * <p> Specifies the configuration status for the specified Elasticsearch domain.</p>
 */
export interface ElasticsearchClusterConfigStatus {
  __type?: "ElasticsearchClusterConfigStatus";
  /**
   * <p> Specifies the cluster configuration for the specified Elasticsearch domain.</p>
   */
  Options: ElasticsearchClusterConfig | undefined;

  /**
   * <p> Specifies the status of the configuration for the specified Elasticsearch domain.</p>
   */
  Status: OptionStatus | undefined;
}

export namespace ElasticsearchClusterConfigStatus {
  export const filterSensitiveLog = (
    obj: ElasticsearchClusterConfigStatus
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ElasticsearchClusterConfigStatus =>
    __isa(o, "ElasticsearchClusterConfigStatus");
}

/**
 * <p>The configuration of an Elasticsearch domain.</p>
 */
export interface ElasticsearchDomainConfig {
  __type?: "ElasticsearchDomainConfig";
  /**
   * <p>IAM access policy as a JSON-formatted string.</p>
   */
  AccessPolicies?: AccessPoliciesStatus;

  /**
   * <p>Specifies the <code>AdvancedOptions</code> for the domain.  See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options" target="_blank">Configuring Advanced Options</a> for more information.</p>
   */
  AdvancedOptions?: AdvancedOptionsStatus;

  /**
   * <p>The <code>CognitoOptions</code> for the specified domain. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-cognito-auth.html" target="_blank">Amazon Cognito Authentication for Kibana</a>.</p>
   */
  CognitoOptions?: CognitoOptionsStatus;

  /**
   * <p>Specifies the <code>DomainEndpointOptions</code> for the Elasticsearch domain.</p>
   */
  DomainEndpointOptions?: DomainEndpointOptionsStatus;

  /**
   * <p>Specifies the <code>EBSOptions</code> for the Elasticsearch domain.</p>
   */
  EBSOptions?: EBSOptionsStatus;

  /**
   * <p>Specifies the <code>ElasticsearchClusterConfig</code> for the Elasticsearch domain.</p>
   */
  ElasticsearchClusterConfig?: ElasticsearchClusterConfigStatus;

  /**
   * <p>String of format X.Y to specify version for the Elasticsearch domain.</p>
   */
  ElasticsearchVersion?: ElasticsearchVersionStatus;

  /**
   * <p>Specifies the <code>EncryptionAtRestOptions</code> for the Elasticsearch domain.</p>
   */
  EncryptionAtRestOptions?: EncryptionAtRestOptionsStatus;

  /**
   * <p>Log publishing options for the given domain.</p>
   */
  LogPublishingOptions?: LogPublishingOptionsStatus;

  /**
   * <p>Specifies the <code>NodeToNodeEncryptionOptions</code> for the Elasticsearch domain.</p>
   */
  NodeToNodeEncryptionOptions?: NodeToNodeEncryptionOptionsStatus;

  /**
   * <p>Specifies the <code>SnapshotOptions</code> for the Elasticsearch domain.</p>
   */
  SnapshotOptions?: SnapshotOptionsStatus;

  /**
   * <p>The <code>VPCOptions</code> for the specified domain. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html" target="_blank">VPC Endpoints for Amazon Elasticsearch Service Domains</a>.</p>
   */
  VPCOptions?: VPCDerivedInfoStatus;
}

export namespace ElasticsearchDomainConfig {
  export const filterSensitiveLog = (obj: ElasticsearchDomainConfig): any => ({
    ...obj
  });
  export const isa = (o: any): o is ElasticsearchDomainConfig =>
    __isa(o, "ElasticsearchDomainConfig");
}

/**
 * <p>The current status of an Elasticsearch domain.</p>
 */
export interface ElasticsearchDomainStatus {
  __type?: "ElasticsearchDomainStatus";
  /**
   * <p>The Amazon resource name (ARN) of an Elasticsearch domain.  See <a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/index.html?Using_Identifiers.html" target="_blank">Identifiers for IAM Entities</a> in <i>Using AWS Identity and Access Management</i> for more information.</p>
   */
  ARN: string | undefined;

  /**
   * <p> IAM access policy as a JSON-formatted string.</p>
   */
  AccessPolicies?: string;

  /**
   * <p>Specifies the status of the <code>AdvancedOptions</code></p>
   */
  AdvancedOptions?: { [key: string]: string };

  /**
   * <p>The <code>CognitoOptions</code> for the specified domain. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-cognito-auth.html" target="_blank">Amazon Cognito Authentication for Kibana</a>.</p>
   */
  CognitoOptions?: CognitoOptions;

  /**
   * <p>The domain creation status. <code>True</code> if the creation of an Elasticsearch domain is complete. <code>False</code> if domain creation is still in progress.</p>
   */
  Created?: boolean;

  /**
   * <p>The domain deletion status. <code>True</code> if a delete request has been received for the domain but resource cleanup is still in progress. <code>False</code> if the domain has not been deleted. Once domain deletion is complete, the status of the domain is no longer returned.</p>
   */
  Deleted?: boolean;

  /**
   * <p>The current status of the Elasticsearch domain's endpoint options.</p>
   */
  DomainEndpointOptions?: DomainEndpointOptions;

  /**
   * <p>The unique identifier for the specified Elasticsearch domain.</p>
   */
  DomainId: string | undefined;

  /**
   * <p>The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).</p>
   */
  DomainName: string | undefined;

  /**
   * <p>The <code>EBSOptions</code> for the specified domain.  See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-ebs" target="_blank">Configuring EBS-based Storage</a> for more information.</p>
   */
  EBSOptions?: EBSOptions;

  /**
   * <p>The type and number of instances in the domain cluster.</p>
   */
  ElasticsearchClusterConfig: ElasticsearchClusterConfig | undefined;

  ElasticsearchVersion?: string;
  /**
   * <p> Specifies the status of the <code>EncryptionAtRestOptions</code>.</p>
   */
  EncryptionAtRestOptions?: EncryptionAtRestOptions;

  /**
   * <p>The Elasticsearch domain endpoint that you use to submit index and search requests.</p>
   */
  Endpoint?: string;

  /**
   * <p>Map containing the Elasticsearch domain endpoints used to submit index and search requests. Example <code>key, value</code>: <code>'vpc','vpc-endpoint-h2dsd34efgyghrtguk5gt6j2foh4.us-east-1.es.amazonaws.com'</code>.</p>
   */
  Endpoints?: { [key: string]: string };

  /**
   * <p>Log publishing options for the given domain.</p>
   */
  LogPublishingOptions?: { [key: string]: LogPublishingOption };

  /**
   * <p>Specifies the status of the <code>NodeToNodeEncryptionOptions</code>.</p>
   */
  NodeToNodeEncryptionOptions?: NodeToNodeEncryptionOptions;

  /**
   * <p>The status of the Elasticsearch domain configuration. <code>True</code> if Amazon Elasticsearch Service is processing configuration changes. <code>False</code> if the configuration is active.</p>
   */
  Processing?: boolean;

  /**
   * <p>The current status of the Elasticsearch domain's service software.</p>
   */
  ServiceSoftwareOptions?: ServiceSoftwareOptions;

  /**
   * <p>Specifies the status of the <code>SnapshotOptions</code></p>
   */
  SnapshotOptions?: SnapshotOptions;

  /**
   * <p>The status of an Elasticsearch domain version upgrade. <code>True</code> if Amazon Elasticsearch Service is undergoing a version upgrade. <code>False</code> if the configuration is active.</p>
   */
  UpgradeProcessing?: boolean;

  /**
   * <p>The <code>VPCOptions</code> for the specified domain. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html" target="_blank">VPC Endpoints for Amazon Elasticsearch Service Domains</a>.</p>
   */
  VPCOptions?: VPCDerivedInfo;
}

export namespace ElasticsearchDomainStatus {
  export const filterSensitiveLog = (obj: ElasticsearchDomainStatus): any => ({
    ...obj
  });
  export const isa = (o: any): o is ElasticsearchDomainStatus =>
    __isa(o, "ElasticsearchDomainStatus");
}

/**
 * <p> Status of the Elasticsearch version options for the specified Elasticsearch domain.</p>
 */
export interface ElasticsearchVersionStatus {
  __type?: "ElasticsearchVersionStatus";
  /**
   * <p> Specifies the Elasticsearch version for the specified Elasticsearch domain.</p>
   */
  Options: string | undefined;

  /**
   * <p> Specifies the status of the Elasticsearch version options for the specified Elasticsearch domain.</p>
   */
  Status: OptionStatus | undefined;
}

export namespace ElasticsearchVersionStatus {
  export const filterSensitiveLog = (obj: ElasticsearchVersionStatus): any => ({
    ...obj
  });
  export const isa = (o: any): o is ElasticsearchVersionStatus =>
    __isa(o, "ElasticsearchVersionStatus");
}

/**
 * <p>Specifies the Encryption At Rest Options.</p>
 */
export interface EncryptionAtRestOptions {
  __type?: "EncryptionAtRestOptions";
  /**
   * <p>Specifies the option to enable Encryption At Rest.</p>
   */
  Enabled?: boolean;

  /**
   * <p> Specifies the KMS Key ID for Encryption At Rest options.</p>
   */
  KmsKeyId?: string;
}

export namespace EncryptionAtRestOptions {
  export const filterSensitiveLog = (obj: EncryptionAtRestOptions): any => ({
    ...obj
  });
  export const isa = (o: any): o is EncryptionAtRestOptions =>
    __isa(o, "EncryptionAtRestOptions");
}

/**
 * <p> Status of the Encryption At Rest options for the specified Elasticsearch domain.</p>
 */
export interface EncryptionAtRestOptionsStatus {
  __type?: "EncryptionAtRestOptionsStatus";
  /**
   * <p> Specifies the Encryption At Rest options for the specified Elasticsearch domain.</p>
   */
  Options: EncryptionAtRestOptions | undefined;

  /**
   * <p> Specifies the status of the Encryption At Rest options for the specified Elasticsearch domain.</p>
   */
  Status: OptionStatus | undefined;
}

export namespace EncryptionAtRestOptionsStatus {
  export const filterSensitiveLog = (
    obj: EncryptionAtRestOptionsStatus
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is EncryptionAtRestOptionsStatus =>
    __isa(o, "EncryptionAtRestOptionsStatus");
}

export type ESPartitionInstanceType =
  | "c4.2xlarge.elasticsearch"
  | "c4.4xlarge.elasticsearch"
  | "c4.8xlarge.elasticsearch"
  | "c4.large.elasticsearch"
  | "c4.xlarge.elasticsearch"
  | "c5.18xlarge.elasticsearch"
  | "c5.2xlarge.elasticsearch"
  | "c5.4xlarge.elasticsearch"
  | "c5.9xlarge.elasticsearch"
  | "c5.large.elasticsearch"
  | "c5.xlarge.elasticsearch"
  | "d2.2xlarge.elasticsearch"
  | "d2.4xlarge.elasticsearch"
  | "d2.8xlarge.elasticsearch"
  | "d2.xlarge.elasticsearch"
  | "i2.2xlarge.elasticsearch"
  | "i2.xlarge.elasticsearch"
  | "i3.16xlarge.elasticsearch"
  | "i3.2xlarge.elasticsearch"
  | "i3.4xlarge.elasticsearch"
  | "i3.8xlarge.elasticsearch"
  | "i3.large.elasticsearch"
  | "i3.xlarge.elasticsearch"
  | "m3.2xlarge.elasticsearch"
  | "m3.large.elasticsearch"
  | "m3.medium.elasticsearch"
  | "m3.xlarge.elasticsearch"
  | "m4.10xlarge.elasticsearch"
  | "m4.2xlarge.elasticsearch"
  | "m4.4xlarge.elasticsearch"
  | "m4.large.elasticsearch"
  | "m4.xlarge.elasticsearch"
  | "m5.12xlarge.elasticsearch"
  | "m5.2xlarge.elasticsearch"
  | "m5.4xlarge.elasticsearch"
  | "m5.large.elasticsearch"
  | "m5.xlarge.elasticsearch"
  | "r3.2xlarge.elasticsearch"
  | "r3.4xlarge.elasticsearch"
  | "r3.8xlarge.elasticsearch"
  | "r3.large.elasticsearch"
  | "r3.xlarge.elasticsearch"
  | "r4.16xlarge.elasticsearch"
  | "r4.2xlarge.elasticsearch"
  | "r4.4xlarge.elasticsearch"
  | "r4.8xlarge.elasticsearch"
  | "r4.large.elasticsearch"
  | "r4.xlarge.elasticsearch"
  | "r5.12xlarge.elasticsearch"
  | "r5.2xlarge.elasticsearch"
  | "r5.4xlarge.elasticsearch"
  | "r5.large.elasticsearch"
  | "r5.xlarge.elasticsearch"
  | "t2.medium.elasticsearch"
  | "t2.micro.elasticsearch"
  | "t2.small.elasticsearch"
  | "ultrawarm1.large.elasticsearch"
  | "ultrawarm1.medium.elasticsearch";

export type ESWarmPartitionInstanceType =
  | "ultrawarm1.large.elasticsearch"
  | "ultrawarm1.medium.elasticsearch";

/**
 * <p>
 *       Container for request parameters to
 *       <code>
 *         <a>GetCompatibleElasticsearchVersions</a>
 *       </code>
 *       operation.
 *     </p>
 */
export interface GetCompatibleElasticsearchVersionsRequest {
  __type?: "GetCompatibleElasticsearchVersionsRequest";
  /**
   * <p>The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).</p>
   */
  DomainName?: string;
}

export namespace GetCompatibleElasticsearchVersionsRequest {
  export const filterSensitiveLog = (
    obj: GetCompatibleElasticsearchVersionsRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetCompatibleElasticsearchVersionsRequest =>
    __isa(o, "GetCompatibleElasticsearchVersionsRequest");
}

/**
 * <p>
 *       Container for response returned by
 *       <code>
 *         <a>GetCompatibleElasticsearchVersions</a>
 *       </code>
 *       operation.
 *     </p>
 */
export interface GetCompatibleElasticsearchVersionsResponse {
  __type?: "GetCompatibleElasticsearchVersionsResponse";
  /**
   * <p>
   *       A map of compatible Elasticsearch versions returned as part of the
   *       <code>
   *         <a>GetCompatibleElasticsearchVersions</a>
   *       </code>
   *       operation.
   *     </p>
   */
  CompatibleElasticsearchVersions?: CompatibleVersionsMap[];
}

export namespace GetCompatibleElasticsearchVersionsResponse {
  export const filterSensitiveLog = (
    obj: GetCompatibleElasticsearchVersionsResponse
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is GetCompatibleElasticsearchVersionsResponse =>
    __isa(o, "GetCompatibleElasticsearchVersionsResponse");
}

/**
 * <p>
 *       Container for request parameters to
 *       <code>
 *         <a>GetUpgradeHistory</a>
 *       </code>
 *       operation.
 *     </p>
 */
export interface GetUpgradeHistoryRequest {
  __type?: "GetUpgradeHistoryRequest";
  /**
   * <p>The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).</p>
   */
  DomainName: string | undefined;

  /**
   * <p>
   *       Set this value to limit the number of results returned.
   *     </p>
   */
  MaxResults?: number;

  /**
   * <p>
   *       Paginated APIs accepts NextToken input to returns next page results and provides
   *       a NextToken output in the response which can be used by the client to retrieve more results.
   *     </p>
   */
  NextToken?: string;
}

export namespace GetUpgradeHistoryRequest {
  export const filterSensitiveLog = (obj: GetUpgradeHistoryRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetUpgradeHistoryRequest =>
    __isa(o, "GetUpgradeHistoryRequest");
}

/**
 * <p>
 *       Container for response returned by
 *       <code>
 *         <a>GetUpgradeHistory</a>
 *       </code>
 *       operation.
 *     </p>
 */
export interface GetUpgradeHistoryResponse {
  __type?: "GetUpgradeHistoryResponse";
  /**
   * <p>Pagination token that needs to be supplied to the next call to get the next page of results</p>
   */
  NextToken?: string;

  /**
   * <p>
   *       A list of
   *       <code>
   *         <a>UpgradeHistory</a>
   *       </code>
   *       objects corresponding to each Upgrade or Upgrade Eligibility Check performed on a domain returned as part of
   *       <code>
   *         <a>GetUpgradeHistoryResponse</a>
   *       </code>
   *       object.
   *     </p>
   */
  UpgradeHistories?: UpgradeHistory[];
}

export namespace GetUpgradeHistoryResponse {
  export const filterSensitiveLog = (obj: GetUpgradeHistoryResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetUpgradeHistoryResponse =>
    __isa(o, "GetUpgradeHistoryResponse");
}

/**
 * <p>
 *       Container for request parameters to
 *       <code>
 *         <a>GetUpgradeStatus</a>
 *       </code>
 *       operation.
 *     </p>
 */
export interface GetUpgradeStatusRequest {
  __type?: "GetUpgradeStatusRequest";
  /**
   * <p>The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).</p>
   */
  DomainName: string | undefined;
}

export namespace GetUpgradeStatusRequest {
  export const filterSensitiveLog = (obj: GetUpgradeStatusRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetUpgradeStatusRequest =>
    __isa(o, "GetUpgradeStatusRequest");
}

/**
 * <p>
 *       Container for response returned by
 *       <code>
 *         <a>GetUpgradeStatus</a>
 *       </code>
 *       operation.
 *     </p>
 */
export interface GetUpgradeStatusResponse {
  __type?: "GetUpgradeStatusResponse";
  /**
   * <p>
   *       One of 4 statuses that a step can go through returned as part of the
   *       <code>
   *         <a>GetUpgradeStatusResponse</a>
   *       </code>
   *       object. The status can take one of the following values:
   *       <ul>
   *         <li>In Progress</li>
   *         <li>Succeeded</li>
   *         <li>Succeeded with Issues</li>
   *         <li>Failed</li>
   *       </ul>
   *     </p>
   */
  StepStatus?: UpgradeStatus | string;

  /**
   * <p>A string that describes the update briefly</p>
   */
  UpgradeName?: string;

  /**
   * <p>
   *       Represents one of 3 steps that an Upgrade or Upgrade Eligibility Check does through:
   *       <ul>
   *         <li>PreUpgradeCheck</li>
   *         <li>Snapshot</li>
   *         <li>Upgrade</li>
   *       </ul>
   *     </p>
   */
  UpgradeStep?: UpgradeStep | string;
}

export namespace GetUpgradeStatusResponse {
  export const filterSensitiveLog = (obj: GetUpgradeStatusResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetUpgradeStatusResponse =>
    __isa(o, "GetUpgradeStatusResponse");
}

/**
 * <p>
 *       InstanceCountLimits represents the limits on number of instances that be created in Amazon Elasticsearch for
 *       given InstanceType.
 *     </p>
 */
export interface InstanceCountLimits {
  __type?: "InstanceCountLimits";
  /**
   * <p>
   *       Maximum number of Instances that can be instantiated for given InstanceType.
   *     </p>
   */
  MaximumInstanceCount?: number;

  /**
   * <p>
   *       Minimum number of Instances that can be instantiated for given InstanceType.
   *     </p>
   */
  MinimumInstanceCount?: number;
}

export namespace InstanceCountLimits {
  export const filterSensitiveLog = (obj: InstanceCountLimits): any => ({
    ...obj
  });
  export const isa = (o: any): o is InstanceCountLimits =>
    __isa(o, "InstanceCountLimits");
}

/**
 * <p>InstanceLimits represents the list of instance related attributes that are available for given InstanceType.
 *     </p>
 */
export interface InstanceLimits {
  __type?: "InstanceLimits";
  /**
   * <p>
   *       InstanceCountLimits represents the limits on number of instances that be created in Amazon Elasticsearch for
   *       given InstanceType.
   *     </p>
   */
  InstanceCountLimits?: InstanceCountLimits;
}

export namespace InstanceLimits {
  export const filterSensitiveLog = (obj: InstanceLimits): any => ({
    ...obj
  });
  export const isa = (o: any): o is InstanceLimits =>
    __isa(o, "InstanceLimits");
}

/**
 * <p>The request processing has failed because of an unknown error, exception or failure (the failure is internal to the service) . Gives http status code of 500.</p>
 */
export interface InternalException extends __SmithyException, $MetadataBearer {
  name: "InternalException";
  $fault: "server";
  /**
   * <p>A description of the error.</p>
   */
  message?: string;
}

export namespace InternalException {
  export const filterSensitiveLog = (obj: InternalException): any => ({
    ...obj
  });
  export const isa = (o: any): o is InternalException =>
    __isa(o, "InternalException");
}

/**
 * <p>An exception for trying to create or access sub-resource that is either invalid or not supported. Gives http status code of 409.</p>
 */
export interface InvalidTypeException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidTypeException";
  $fault: "client";
  /**
   * <p>A description of the error.</p>
   */
  message?: string;
}

export namespace InvalidTypeException {
  export const filterSensitiveLog = (obj: InvalidTypeException): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidTypeException =>
    __isa(o, "InvalidTypeException");
}

/**
 * <p>An exception for trying to create more than allowed resources or sub-resources. Gives http status code of 409.</p>
 */
export interface LimitExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  /**
   * <p>A description of the error.</p>
   */
  message?: string;
}

export namespace LimitExceededException {
  export const filterSensitiveLog = (obj: LimitExceededException): any => ({
    ...obj
  });
  export const isa = (o: any): o is LimitExceededException =>
    __isa(o, "LimitExceededException");
}

/**
 * <p>
 *       Limits for given InstanceType and for each of it's role.
 *       <br></br>
 *       Limits contains following
 *       <code>
 *         <a>StorageTypes,</a>
 *       </code>
 *       <code>
 *         <a>InstanceLimits</a>
 *       </code>
 *       and
 *       <code>
 *         <a>AdditionalLimits</a>
 *       </code>
 *     </p>
 */
export interface Limits {
  __type?: "Limits";
  /**
   * <p>
   *       List of additional limits that are specific to a given InstanceType and for each of it's
   *       <code>
   *         <a>InstanceRole</a>
   *       </code>
   *       .
   *     </p>
   */
  AdditionalLimits?: AdditionalLimit[];

  /**
   * <p>InstanceLimits represents the list of instance related attributes that are available for given InstanceType.
   *     </p>
   */
  InstanceLimits?: InstanceLimits;

  /**
   * <p>StorageType represents the list of storage related types and attributes
   *       that are available for given InstanceType.
   *     </p>
   */
  StorageTypes?: StorageType[];
}

export namespace Limits {
  export const filterSensitiveLog = (obj: Limits): any => ({
    ...obj
  });
  export const isa = (o: any): o is Limits => __isa(o, "Limits");
}

/**
 * <p>The result of a <code>ListDomainNames</code> operation. Contains the names of all Elasticsearch domains owned by this account.</p>
 */
export interface ListDomainNamesResponse {
  __type?: "ListDomainNamesResponse";
  /**
   * <p>List of Elasticsearch domain names.</p>
   */
  DomainNames?: DomainInfo[];
}

export namespace ListDomainNamesResponse {
  export const filterSensitiveLog = (obj: ListDomainNamesResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListDomainNamesResponse =>
    __isa(o, "ListDomainNamesResponse");
}

/**
 * <p>
 *       Container for the parameters to the
 *       <code>
 *         <a>ListElasticsearchInstanceTypes</a>
 *       </code>
 *       operation.
 *     </p>
 */
export interface ListElasticsearchInstanceTypesRequest {
  __type?: "ListElasticsearchInstanceTypesRequest";
  /**
   * <p>DomainName represents the name of the Domain that we are trying to modify. This should be present only if we are
   *       querying for list of available Elasticsearch instance types when modifying existing domain.
   *     </p>
   */
  DomainName?: string;

  /**
   * <p>Version of Elasticsearch for which list of supported elasticsearch
   *       instance types are needed.
   *     </p>
   */
  ElasticsearchVersion: string | undefined;

  /**
   * <p>
   *     Set this value to limit the number of results returned.
   *     Value provided must be greater than 30 else it wont be honored.
   *   </p>
   */
  MaxResults?: number;

  /**
   * <p>NextToken should be sent in case if earlier API call produced result
   *       containing NextToken. It is used for pagination.
   *     </p>
   */
  NextToken?: string;
}

export namespace ListElasticsearchInstanceTypesRequest {
  export const filterSensitiveLog = (
    obj: ListElasticsearchInstanceTypesRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListElasticsearchInstanceTypesRequest =>
    __isa(o, "ListElasticsearchInstanceTypesRequest");
}

/**
 * <p>
 *       Container for the parameters returned by
 *       <code>
 *         <a>ListElasticsearchInstanceTypes</a>
 *       </code>
 *       operation.
 *     </p>
 */
export interface ListElasticsearchInstanceTypesResponse {
  __type?: "ListElasticsearchInstanceTypesResponse";
  /**
   * <p>
   *       List of instance types supported by Amazon Elasticsearch service for
   *       given
   *       <code>
   *         <a>ElasticsearchVersion</a>
   *       </code>
   *     </p>
   */
  ElasticsearchInstanceTypes?: (ESPartitionInstanceType | string)[];

  /**
   * <p>In case if there are more results available NextToken would be
   *       present, make further request to the same API with
   *       received NextToken to paginate remaining results.
   *     </p>
   */
  NextToken?: string;
}

export namespace ListElasticsearchInstanceTypesResponse {
  export const filterSensitiveLog = (
    obj: ListElasticsearchInstanceTypesResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListElasticsearchInstanceTypesResponse =>
    __isa(o, "ListElasticsearchInstanceTypesResponse");
}

/**
 * <p>
 *       Container for the parameters to the
 *       <code>
 *         <a>ListElasticsearchVersions</a>
 *       </code>
 *       operation.
 *       <p>
 *         Use
 *         <code>
 *           <a>MaxResults</a>
 *         </code>
 *         to control the maximum number of results to retrieve in a single
 *         call.
 *       </p>
 *       <p>
 *         Use
 *         <code>
 *           <a>NextToken</a>
 *         </code>
 *         in response to retrieve more results. If the received response does
 *         not contain a NextToken, then there are no more results to retrieve.
 *       </p>
 *     </p>
 */
export interface ListElasticsearchVersionsRequest {
  __type?: "ListElasticsearchVersionsRequest";
  /**
   * <p>
   *       Set this value to limit the number of results returned.
   *       Value provided must be greater than 10 else it wont be honored.
   *     </p>
   */
  MaxResults?: number;

  /**
   * <p>
   *       Paginated APIs accepts NextToken input to returns next page results and provides
   *       a NextToken output in the response which can be used by the client to retrieve more results.
   *     </p>
   */
  NextToken?: string;
}

export namespace ListElasticsearchVersionsRequest {
  export const filterSensitiveLog = (
    obj: ListElasticsearchVersionsRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListElasticsearchVersionsRequest =>
    __isa(o, "ListElasticsearchVersionsRequest");
}

/**
 * <p>
 *       Container for the parameters for response received from
 *       <code>
 *         <a>ListElasticsearchVersions</a>
 *       </code>
 *       operation.
 *     </p>
 */
export interface ListElasticsearchVersionsResponse {
  __type?: "ListElasticsearchVersionsResponse";
  /**
   * <p>List of supported elastic search versions.
   *     </p>
   */
  ElasticsearchVersions?: string[];

  /**
   * <p>
   *       Paginated APIs accepts NextToken input to returns next page results and provides
   *       a NextToken output in the response which can be used by the client to retrieve more results.
   *     </p>
   */
  NextToken?: string;
}

export namespace ListElasticsearchVersionsResponse {
  export const filterSensitiveLog = (
    obj: ListElasticsearchVersionsResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListElasticsearchVersionsResponse =>
    __isa(o, "ListElasticsearchVersionsResponse");
}

/**
 * <p>Container for the parameters to the <code><a>ListTags</a></code> operation. Specify the <code>ARN</code> for the Elasticsearch domain to which the tags are attached that you want to view are attached.</p>
 */
export interface ListTagsRequest {
  __type?: "ListTagsRequest";
  /**
   * <p> Specify the <code>ARN</code> for the Elasticsearch domain to which the tags are attached that you want to view.</p>
   */
  ARN: string | undefined;
}

export namespace ListTagsRequest {
  export const filterSensitiveLog = (obj: ListTagsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListTagsRequest =>
    __isa(o, "ListTagsRequest");
}

/**
 * <p>The result of a <code>ListTags</code> operation. Contains tags for all requested Elasticsearch domains.</p>
 */
export interface ListTagsResponse {
  __type?: "ListTagsResponse";
  /**
   * <p> List of <code>Tag</code> for the requested Elasticsearch domain.</p>
   */
  TagList?: Tag[];
}

export namespace ListTagsResponse {
  export const filterSensitiveLog = (obj: ListTagsResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListTagsResponse =>
    __isa(o, "ListTagsResponse");
}

/**
 * <p>Log Publishing option that is set for given domain.
 *        <br></br>Attributes and their details:
 *      <ul>
 *        <li>CloudWatchLogsLogGroupArn: ARN of the Cloudwatch log group to which log needs to be published.</li>
 *        <li>Enabled: Whether the log publishing for given log type is enabled or not</li>
 *      </ul>
 *    </p>
 */
export interface LogPublishingOption {
  __type?: "LogPublishingOption";
  /**
   * <p>ARN of the Cloudwatch log group to which log needs to be published.</p>
   */
  CloudWatchLogsLogGroupArn?: string;

  /**
   * <p> Specifies whether given log publishing option is enabled or not.</p>
   */
  Enabled?: boolean;
}

export namespace LogPublishingOption {
  export const filterSensitiveLog = (obj: LogPublishingOption): any => ({
    ...obj
  });
  export const isa = (o: any): o is LogPublishingOption =>
    __isa(o, "LogPublishingOption");
}

/**
 * <p>The configured log publishing options for the domain and their current status.</p>
 */
export interface LogPublishingOptionsStatus {
  __type?: "LogPublishingOptionsStatus";
  /**
   * <p>The log publishing options configured for the Elasticsearch domain.</p>
   */
  Options?: { [key: string]: LogPublishingOption };

  /**
   * <p>The status of the log publishing options for the Elasticsearch domain. See <code>OptionStatus</code> for the status information that's included. </p>
   */
  Status?: OptionStatus;
}

export namespace LogPublishingOptionsStatus {
  export const filterSensitiveLog = (obj: LogPublishingOptionsStatus): any => ({
    ...obj
  });
  export const isa = (o: any): o is LogPublishingOptionsStatus =>
    __isa(o, "LogPublishingOptionsStatus");
}

export type LogType =
  | "ES_APPLICATION_LOGS"
  | "INDEX_SLOW_LOGS"
  | "SEARCH_SLOW_LOGS";

/**
 * <p>Specifies the node-to-node encryption options.</p>
 */
export interface NodeToNodeEncryptionOptions {
  __type?: "NodeToNodeEncryptionOptions";
  /**
   * <p>Specify true to enable node-to-node encryption.</p>
   */
  Enabled?: boolean;
}

export namespace NodeToNodeEncryptionOptions {
  export const filterSensitiveLog = (
    obj: NodeToNodeEncryptionOptions
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is NodeToNodeEncryptionOptions =>
    __isa(o, "NodeToNodeEncryptionOptions");
}

/**
 * <p>Status of the node-to-node encryption options for the specified Elasticsearch domain.</p>
 */
export interface NodeToNodeEncryptionOptionsStatus {
  __type?: "NodeToNodeEncryptionOptionsStatus";
  /**
   * <p>Specifies the node-to-node encryption options for the specified Elasticsearch domain.</p>
   */
  Options: NodeToNodeEncryptionOptions | undefined;

  /**
   * <p>Specifies the status of the node-to-node encryption options for the specified Elasticsearch domain.</p>
   */
  Status: OptionStatus | undefined;
}

export namespace NodeToNodeEncryptionOptionsStatus {
  export const filterSensitiveLog = (
    obj: NodeToNodeEncryptionOptionsStatus
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is NodeToNodeEncryptionOptionsStatus =>
    __isa(o, "NodeToNodeEncryptionOptionsStatus");
}

export type OptionState = "Active" | "Processing" | "RequiresIndexDocuments";

/**
 * <p>Provides the current status of the entity.</p>
 */
export interface OptionStatus {
  __type?: "OptionStatus";
  /**
   * <p>Timestamp which tells the creation date for the entity.</p>
   */
  CreationDate: Date | undefined;

  /**
   * <p>Indicates whether the Elasticsearch domain is being deleted.</p>
   */
  PendingDeletion?: boolean;

  /**
   * <p>Provides the <code>OptionState</code> for the Elasticsearch domain.</p>
   */
  State: OptionState | string | undefined;

  /**
   * <p>Timestamp which tells the last updated time for the entity.</p>
   */
  UpdateDate: Date | undefined;

  /**
   * <p>Specifies the latest version for the entity.</p>
   */
  UpdateVersion?: number;
}

export namespace OptionStatus {
  export const filterSensitiveLog = (obj: OptionStatus): any => ({
    ...obj
  });
  export const isa = (o: any): o is OptionStatus => __isa(o, "OptionStatus");
}

/**
 * <p>Container for parameters to <code>PurchaseReservedElasticsearchInstanceOffering</code></p>
 */
export interface PurchaseReservedElasticsearchInstanceOfferingRequest {
  __type?: "PurchaseReservedElasticsearchInstanceOfferingRequest";
  /**
   * <p>The number of Elasticsearch instances to reserve.</p>
   */
  InstanceCount?: number;

  /**
   * <p>A customer-specified identifier to track this reservation.</p>
   */
  ReservationName: string | undefined;

  /**
   * <p>The ID of the reserved Elasticsearch instance offering to purchase.</p>
   */
  ReservedElasticsearchInstanceOfferingId: string | undefined;
}

export namespace PurchaseReservedElasticsearchInstanceOfferingRequest {
  export const filterSensitiveLog = (
    obj: PurchaseReservedElasticsearchInstanceOfferingRequest
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is PurchaseReservedElasticsearchInstanceOfferingRequest =>
    __isa(o, "PurchaseReservedElasticsearchInstanceOfferingRequest");
}

/**
 * <p>Represents the output of a <code>PurchaseReservedElasticsearchInstanceOffering</code> operation.</p>
 */
export interface PurchaseReservedElasticsearchInstanceOfferingResponse {
  __type?: "PurchaseReservedElasticsearchInstanceOfferingResponse";
  /**
   * <p>The customer-specified identifier used to track this reservation.</p>
   */
  ReservationName?: string;

  /**
   * <p>Details of the reserved Elasticsearch instance which was purchased.</p>
   */
  ReservedElasticsearchInstanceId?: string;
}

export namespace PurchaseReservedElasticsearchInstanceOfferingResponse {
  export const filterSensitiveLog = (
    obj: PurchaseReservedElasticsearchInstanceOfferingResponse
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is PurchaseReservedElasticsearchInstanceOfferingResponse =>
    __isa(o, "PurchaseReservedElasticsearchInstanceOfferingResponse");
}

/**
 * <p>Contains the specific price and frequency of a recurring charges for a reserved Elasticsearch instance, or for a reserved Elasticsearch instance offering.</p>
 */
export interface RecurringCharge {
  __type?: "RecurringCharge";
  /**
   * <p>The monetary amount of the recurring charge.</p>
   */
  RecurringChargeAmount?: number;

  /**
   * <p>The frequency of the recurring charge.</p>
   */
  RecurringChargeFrequency?: string;
}

export namespace RecurringCharge {
  export const filterSensitiveLog = (obj: RecurringCharge): any => ({
    ...obj
  });
  export const isa = (o: any): o is RecurringCharge =>
    __isa(o, "RecurringCharge");
}

/**
 * <p>Container for the parameters to the <code><a>RemoveTags</a></code> operation. Specify the <code>ARN</code> for the Elasticsearch domain from which you want to remove the specified <code>TagKey</code>.</p>
 */
export interface RemoveTagsRequest {
  __type?: "RemoveTagsRequest";
  /**
   * <p>Specifies the <code>ARN</code> for the Elasticsearch domain from which you want to delete the specified tags.</p>
   */
  ARN: string | undefined;

  /**
   * <p>Specifies the <code>TagKey</code> list which you want to remove from the Elasticsearch domain.</p>
   */
  TagKeys: string[] | undefined;
}

export namespace RemoveTagsRequest {
  export const filterSensitiveLog = (obj: RemoveTagsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is RemoveTagsRequest =>
    __isa(o, "RemoveTagsRequest");
}

/**
 * <p>Details of a reserved Elasticsearch instance.</p>
 */
export interface ReservedElasticsearchInstance {
  __type?: "ReservedElasticsearchInstance";
  /**
   * <p>The currency code for the reserved Elasticsearch instance offering.</p>
   */
  CurrencyCode?: string;

  /**
   * <p>The duration, in seconds, for which the Elasticsearch instance is reserved.</p>
   */
  Duration?: number;

  /**
   * <p>The number of Elasticsearch instances that have been reserved.</p>
   */
  ElasticsearchInstanceCount?: number;

  /**
   * <p>The Elasticsearch instance type offered by the reserved instance offering.</p>
   */
  ElasticsearchInstanceType?: ESPartitionInstanceType | string;

  /**
   * <p>The upfront fixed charge you will paid to purchase the specific reserved Elasticsearch instance offering. </p>
   */
  FixedPrice?: number;

  /**
   * <p>The payment option as defined in the reserved Elasticsearch instance offering.</p>
   */
  PaymentOption?: ReservedElasticsearchInstancePaymentOption | string;

  /**
   * <p>The charge to your account regardless of whether you are creating any domains using the instance offering.</p>
   */
  RecurringCharges?: RecurringCharge[];

  /**
   * <p>The customer-specified identifier to track this reservation.</p>
   */
  ReservationName?: string;

  /**
   * <p>The unique identifier for the reservation.</p>
   */
  ReservedElasticsearchInstanceId?: string;

  /**
   * <p>The offering identifier.</p>
   */
  ReservedElasticsearchInstanceOfferingId?: string;

  /**
   * <p>The time the reservation started.</p>
   */
  StartTime?: Date;

  /**
   * <p>The state of the reserved Elasticsearch instance.</p>
   */
  State?: string;

  /**
   * <p>The rate you are charged for each hour for the domain that is using this reserved instance.</p>
   */
  UsagePrice?: number;
}

export namespace ReservedElasticsearchInstance {
  export const filterSensitiveLog = (
    obj: ReservedElasticsearchInstance
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ReservedElasticsearchInstance =>
    __isa(o, "ReservedElasticsearchInstance");
}

/**
 * <p>Details of a reserved Elasticsearch instance offering.</p>
 */
export interface ReservedElasticsearchInstanceOffering {
  __type?: "ReservedElasticsearchInstanceOffering";
  /**
   * <p>The currency code for the reserved Elasticsearch instance offering.</p>
   */
  CurrencyCode?: string;

  /**
   * <p>The duration, in seconds, for which the offering will reserve the Elasticsearch instance.</p>
   */
  Duration?: number;

  /**
   * <p>The Elasticsearch instance type offered by the reserved instance offering.</p>
   */
  ElasticsearchInstanceType?: ESPartitionInstanceType | string;

  /**
   * <p>The upfront fixed charge you will pay to purchase the specific reserved Elasticsearch instance offering. </p>
   */
  FixedPrice?: number;

  /**
   * <p>Payment option for the reserved Elasticsearch instance offering</p>
   */
  PaymentOption?: ReservedElasticsearchInstancePaymentOption | string;

  /**
   * <p>The charge to your account regardless of whether you are creating any domains using the instance offering.</p>
   */
  RecurringCharges?: RecurringCharge[];

  /**
   * <p>The Elasticsearch reserved instance offering identifier.</p>
   */
  ReservedElasticsearchInstanceOfferingId?: string;

  /**
   * <p>The rate you are charged for each hour the domain that is using the offering is running.</p>
   */
  UsagePrice?: number;
}

export namespace ReservedElasticsearchInstanceOffering {
  export const filterSensitiveLog = (
    obj: ReservedElasticsearchInstanceOffering
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ReservedElasticsearchInstanceOffering =>
    __isa(o, "ReservedElasticsearchInstanceOffering");
}

export type ReservedElasticsearchInstancePaymentOption =
  | "ALL_UPFRONT"
  | "NO_UPFRONT"
  | "PARTIAL_UPFRONT";

/**
 * <p>An exception for creating a resource that already exists. Gives http status code of 400.</p>
 */
export interface ResourceAlreadyExistsException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceAlreadyExistsException";
  $fault: "client";
  /**
   * <p>A description of the error.</p>
   */
  message?: string;
}

export namespace ResourceAlreadyExistsException {
  export const filterSensitiveLog = (
    obj: ResourceAlreadyExistsException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResourceAlreadyExistsException =>
    __isa(o, "ResourceAlreadyExistsException");
}

/**
 * <p>An exception for accessing or deleting a resource that does not exist. Gives http status code of 400.</p>
 */
export interface ResourceNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  /**
   * <p>A description of the error.</p>
   */
  message?: string;
}

export namespace ResourceNotFoundException {
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResourceNotFoundException =>
    __isa(o, "ResourceNotFoundException");
}

/**
 * <p>The current options of an Elasticsearch domain service software options.</p>
 */
export interface ServiceSoftwareOptions {
  __type?: "ServiceSoftwareOptions";
  /**
   * <p>Timestamp, in Epoch time, until which you can manually request a service software update. After this date, we automatically update your service software.</p>
   */
  AutomatedUpdateDate?: Date;

  /**
   * <p><code>True</code> if you are able to cancel your service software version update. <code>False</code> if you are not able to cancel your service software version. </p>
   */
  Cancellable?: boolean;

  /**
   * <p>The current service software version that is present on the domain.</p>
   */
  CurrentVersion?: string;

  /**
   * <p>The description of the <code>UpdateStatus</code>.</p>
   */
  Description?: string;

  /**
   * <p>The new service software version if one is available.</p>
   */
  NewVersion?: string;

  /**
   * <p><code>True</code> if you are able to update you service software version. <code>False</code> if you are not able to update your service software version. </p>
   */
  UpdateAvailable?: boolean;

  /**
   * <p>The status of your service software update. This field can take the following values: <code>ELIGIBLE</code>, <code>PENDING_UPDATE</code>, <code>IN_PROGRESS</code>, <code>COMPLETED</code>, and <code>NOT_ELIGIBLE</code>.</p>
   */
  UpdateStatus?: DeploymentStatus | string;
}

export namespace ServiceSoftwareOptions {
  export const filterSensitiveLog = (obj: ServiceSoftwareOptions): any => ({
    ...obj
  });
  export const isa = (o: any): o is ServiceSoftwareOptions =>
    __isa(o, "ServiceSoftwareOptions");
}

/**
 * <p>Specifies the time, in UTC format, when the service takes a daily automated snapshot of the specified Elasticsearch domain. Default value is <code>0</code> hours.</p>
 */
export interface SnapshotOptions {
  __type?: "SnapshotOptions";
  /**
   * <p>Specifies the time, in UTC format, when the service takes a daily automated snapshot of the specified Elasticsearch domain. Default value is <code>0</code> hours.</p>
   */
  AutomatedSnapshotStartHour?: number;
}

export namespace SnapshotOptions {
  export const filterSensitiveLog = (obj: SnapshotOptions): any => ({
    ...obj
  });
  export const isa = (o: any): o is SnapshotOptions =>
    __isa(o, "SnapshotOptions");
}

/**
 * <p>Status of a daily automated snapshot.</p>
 */
export interface SnapshotOptionsStatus {
  __type?: "SnapshotOptionsStatus";
  /**
   * <p>Specifies the daily snapshot options specified for the Elasticsearch domain.</p>
   */
  Options: SnapshotOptions | undefined;

  /**
   * <p>Specifies the status of a daily automated snapshot.</p>
   */
  Status: OptionStatus | undefined;
}

export namespace SnapshotOptionsStatus {
  export const filterSensitiveLog = (obj: SnapshotOptionsStatus): any => ({
    ...obj
  });
  export const isa = (o: any): o is SnapshotOptionsStatus =>
    __isa(o, "SnapshotOptionsStatus");
}

/**
 * <p>Container for the parameters to the <code><a>StartElasticsearchServiceSoftwareUpdate</a></code> operation. Specifies the name of the Elasticsearch domain that you wish to schedule a service software update on.</p>
 */
export interface StartElasticsearchServiceSoftwareUpdateRequest {
  __type?: "StartElasticsearchServiceSoftwareUpdateRequest";
  /**
   * <p>The name of the domain that you want to update to the latest service software.</p>
   */
  DomainName: string | undefined;
}

export namespace StartElasticsearchServiceSoftwareUpdateRequest {
  export const filterSensitiveLog = (
    obj: StartElasticsearchServiceSoftwareUpdateRequest
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is StartElasticsearchServiceSoftwareUpdateRequest =>
    __isa(o, "StartElasticsearchServiceSoftwareUpdateRequest");
}

/**
 * <p>The result of a <code>StartElasticsearchServiceSoftwareUpdate</code> operation. Contains the status of the update.</p>
 */
export interface StartElasticsearchServiceSoftwareUpdateResponse {
  __type?: "StartElasticsearchServiceSoftwareUpdateResponse";
  /**
   * <p>The current status of the Elasticsearch service software update.</p>
   */
  ServiceSoftwareOptions?: ServiceSoftwareOptions;
}

export namespace StartElasticsearchServiceSoftwareUpdateResponse {
  export const filterSensitiveLog = (
    obj: StartElasticsearchServiceSoftwareUpdateResponse
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is StartElasticsearchServiceSoftwareUpdateResponse =>
    __isa(o, "StartElasticsearchServiceSoftwareUpdateResponse");
}

/**
 * <p>StorageTypes represents the list of storage related types and their attributes
 *       that are available for given InstanceType.
 *     </p>
 */
export interface StorageType {
  __type?: "StorageType";
  /**
   * <p>
   *       SubType of the given storage type.
   *       List of available sub-storage options:
   *       For "instance" storageType we wont have any storageSubType,
   *       in case of "ebs" storageType we will have following valid storageSubTypes
   *       <ol>
   *         <li>standard</li>
   *         <li>gp2</li>
   *         <li>io1</li>
   *       </ol>
   *       Refer <code><a>VolumeType</a></code> for more information regarding above EBS storage options.
   *     </p>
   */
  StorageSubTypeName?: string;

  /**
   * <p>List of limits that are applicable for given storage type.
   *     </p>
   */
  StorageTypeLimits?: StorageTypeLimit[];

  /**
   * <p>
   *   Type of the storage.
   *   List of available storage options:
   *   <ol>
   *     <li>instance</li> Inbuilt storage available for the given Instance
   *     <li>ebs</li> Elastic block storage that would be attached to the given Instance
   *   </ol>
   *     </p>
   */
  StorageTypeName?: string;
}

export namespace StorageType {
  export const filterSensitiveLog = (obj: StorageType): any => ({
    ...obj
  });
  export const isa = (o: any): o is StorageType => __isa(o, "StorageType");
}

/**
 * <p>Limits that are applicable for given storage type.
 *     </p>
 */
export interface StorageTypeLimit {
  __type?: "StorageTypeLimit";
  /**
   * <p>
   *     Name of storage limits that are applicable for given storage type.
   *     If
   *     <code>
   *       <a>StorageType</a>
   *     </code>
   *     is ebs, following storage options are applicable
   *     <ol>
   *       <li>MinimumVolumeSize</li>
   *       Minimum amount of volume size that is applicable for given storage type.It can be empty if it is not applicable.
   *       <li>MaximumVolumeSize</li>
   *       Maximum amount of volume size that is applicable for given storage type.It can be empty if it is not applicable.
   *       <li>MaximumIops</li>
   *       Maximum amount of Iops that is applicable for given storage type.It can be empty if it is not applicable.
   *       <li>MinimumIops</li>
   *       Minimum amount of Iops that is applicable for given storage type.It can be empty if it is not applicable.
   *     </ol>
   *   </p>
   */
  LimitName?: string;

  /**
   * <p>
   *       Values for the
   *       <code>
   *         <a>StorageTypeLimit$LimitName</a>
   *       </code>
   *       .
   *     </p>
   */
  LimitValues?: string[];
}

export namespace StorageTypeLimit {
  export const filterSensitiveLog = (obj: StorageTypeLimit): any => ({
    ...obj
  });
  export const isa = (o: any): o is StorageTypeLimit =>
    __isa(o, "StorageTypeLimit");
}

/**
 * <p>Specifies a key value pair for a resource tag.</p>
 */
export interface Tag {
  __type?: "Tag";
  /**
   * <p>Specifies the <code>TagKey</code>, the name of the tag.  Tag keys must be unique for the Elasticsearch domain to which they are attached.</p>
   */
  Key: string | undefined;

  /**
   * <p>Specifies the <code>TagValue</code>, the value assigned to the corresponding tag key.  Tag values can be null and do not have to be unique in a tag set.  For example, you can have a key value
   *        pair in a tag set of <code>project : Trinity</code> and <code>cost-center : Trinity</code></p>
   */
  Value: string | undefined;
}

export namespace Tag {
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj
  });
  export const isa = (o: any): o is Tag => __isa(o, "Tag");
}

export enum TLSSecurityPolicy {
  POLICY_MIN_TLS_1_0_2019_07 = "Policy-Min-TLS-1-0-2019-07",
  POLICY_MIN_TLS_1_2_2019_07 = "Policy-Min-TLS-1-2-2019-07"
}

/**
 * <p>Container for the parameters to the <code><a>UpdateElasticsearchDomain</a></code> operation. Specifies the type and number of instances in the domain cluster.</p>
 */
export interface UpdateElasticsearchDomainConfigRequest {
  __type?: "UpdateElasticsearchDomainConfigRequest";
  /**
   * <p>IAM access policy as a JSON-formatted string.</p>
   */
  AccessPolicies?: string;

  /**
   * <p>Modifies the advanced option to allow references to indices in an HTTP request body.  Must be <code>false</code> when configuring access to individual sub-resources.  By default, the value is <code>true</code>.
   *        See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options" target="_blank">Configuration Advanced Options</a> for more information.</p>
   */
  AdvancedOptions?: { [key: string]: string };

  /**
   * <p>Options to specify the Cognito user and identity pools for Kibana authentication. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-cognito-auth.html" target="_blank">Amazon Cognito Authentication for Kibana</a>.</p>
   */
  CognitoOptions?: CognitoOptions;

  /**
   * <p>Options to specify configuration that will be applied to the domain endpoint.</p>
   */
  DomainEndpointOptions?: DomainEndpointOptions;

  /**
   * <p>The name of the Elasticsearch domain that you are updating. </p>
   */
  DomainName: string | undefined;

  /**
   * <p>Specify the type and size of the EBS volume that you want to use. </p>
   */
  EBSOptions?: EBSOptions;

  /**
   * <p>The type and number of instances to instantiate for the domain cluster.</p>
   */
  ElasticsearchClusterConfig?: ElasticsearchClusterConfig;

  /**
   * <p>Map of <code>LogType</code> and <code>LogPublishingOption</code>, each containing options to publish a given type of Elasticsearch log.</p>
   */
  LogPublishingOptions?: { [key: string]: LogPublishingOption };

  /**
   * <p>Option to set the time, in UTC format, for the daily automated snapshot. Default value is <code>0</code> hours. </p>
   */
  SnapshotOptions?: SnapshotOptions;

  /**
   * <p>Options to specify the subnets and security groups for VPC endpoint. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html#es-creating-vpc" target="_blank">Creating a VPC</a> in <i>VPC Endpoints for Amazon Elasticsearch Service Domains</i></p>
   */
  VPCOptions?: VPCOptions;
}

export namespace UpdateElasticsearchDomainConfigRequest {
  export const filterSensitiveLog = (
    obj: UpdateElasticsearchDomainConfigRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateElasticsearchDomainConfigRequest =>
    __isa(o, "UpdateElasticsearchDomainConfigRequest");
}

/**
 * <p>The result of an <code>UpdateElasticsearchDomain</code> request. Contains the status of the Elasticsearch domain being updated.</p>
 */
export interface UpdateElasticsearchDomainConfigResponse {
  __type?: "UpdateElasticsearchDomainConfigResponse";
  /**
   * <p>The status of the updated Elasticsearch domain. </p>
   */
  DomainConfig: ElasticsearchDomainConfig | undefined;
}

export namespace UpdateElasticsearchDomainConfigResponse {
  export const filterSensitiveLog = (
    obj: UpdateElasticsearchDomainConfigResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateElasticsearchDomainConfigResponse =>
    __isa(o, "UpdateElasticsearchDomainConfigResponse");
}

/**
 * <p>
 *       Container for request parameters to
 *       <code>
 *         <a>UpgradeElasticsearchDomain</a>
 *       </code>
 *       operation.
 *     </p>
 */
export interface UpgradeElasticsearchDomainRequest {
  __type?: "UpgradeElasticsearchDomainRequest";
  /**
   * <p>The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).</p>
   */
  DomainName: string | undefined;

  /**
   * <p>
   *       This flag, when set to True, indicates that an Upgrade Eligibility Check needs to be performed.
   *       This will not actually perform the Upgrade.
   *     </p>
   */
  PerformCheckOnly?: boolean;

  /**
   * <p>The version of Elasticsearch that you intend to upgrade the domain to.</p>
   */
  TargetVersion: string | undefined;
}

export namespace UpgradeElasticsearchDomainRequest {
  export const filterSensitiveLog = (
    obj: UpgradeElasticsearchDomainRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpgradeElasticsearchDomainRequest =>
    __isa(o, "UpgradeElasticsearchDomainRequest");
}

/**
 * <p>
 *       Container for response returned by
 *       <code>
 *         <a>UpgradeElasticsearchDomain</a>
 *       </code>
 *       operation.
 *     </p>
 */
export interface UpgradeElasticsearchDomainResponse {
  __type?: "UpgradeElasticsearchDomainResponse";
  /**
   * <p>The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).</p>
   */
  DomainName?: string;

  /**
   * <p>
   *       This flag, when set to True, indicates that an Upgrade Eligibility Check needs to be performed.
   *       This will not actually perform the Upgrade.
   *     </p>
   */
  PerformCheckOnly?: boolean;

  /**
   * <p>The version of Elasticsearch that you intend to upgrade the domain to.</p>
   */
  TargetVersion?: string;
}

export namespace UpgradeElasticsearchDomainResponse {
  export const filterSensitiveLog = (
    obj: UpgradeElasticsearchDomainResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpgradeElasticsearchDomainResponse =>
    __isa(o, "UpgradeElasticsearchDomainResponse");
}

/**
 * <p>History of the last 10 Upgrades and Upgrade Eligibility Checks.</p>
 */
export interface UpgradeHistory {
  __type?: "UpgradeHistory";
  /**
   * <p>UTC Timestamp at which the Upgrade API call was made in "yyyy-MM-ddTHH:mm:ssZ" format.</p>
   */
  StartTimestamp?: Date;

  /**
   * <p>
   *       A list of
   *       <code>
   *         <a>UpgradeStepItem</a>
   *       </code>
   *       s representing information about each step performed as pard of a specific Upgrade or Upgrade Eligibility Check.
   *     </p>
   */
  StepsList?: UpgradeStepItem[];

  /**
   * <p>A string that describes the update briefly</p>
   */
  UpgradeName?: string;

  /**
   * <p>
   *       The overall status of the update. The status can take one of the following values:
   *       <ul>
   *         <li>In Progress</li>
   *         <li>Succeeded</li>
   *         <li>Succeeded with Issues</li>
   *         <li>Failed</li>
   *       </ul>
   *     </p>
   */
  UpgradeStatus?: UpgradeStatus | string;
}

export namespace UpgradeHistory {
  export const filterSensitiveLog = (obj: UpgradeHistory): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpgradeHistory =>
    __isa(o, "UpgradeHistory");
}

export type UpgradeStatus =
  | "FAILED"
  | "IN_PROGRESS"
  | "SUCCEEDED"
  | "SUCCEEDED_WITH_ISSUES";

export type UpgradeStep = "PRE_UPGRADE_CHECK" | "SNAPSHOT" | "UPGRADE";

/**
 * <p>Represents a single step of the Upgrade or Upgrade Eligibility Check workflow.</p>
 */
export interface UpgradeStepItem {
  __type?: "UpgradeStepItem";
  /**
   * <p>A list of strings containing detailed information about the errors encountered in a particular step.</p>
   */
  Issues?: string[];

  /**
   * <p>The Floating point value representing progress percentage of a particular step.</p>
   */
  ProgressPercent?: number;

  /**
   * <p>
   *       Represents one of 3 steps that an Upgrade or Upgrade Eligibility Check does through:
   *       <ul>
   *         <li>PreUpgradeCheck</li>
   *         <li>Snapshot</li>
   *         <li>Upgrade</li>
   *       </ul>
   *     </p>
   */
  UpgradeStep?: UpgradeStep | string;

  /**
   * <p>
   *       The status of a particular step during an upgrade. The status can take one of the following values:
   *       <ul>
   *         <li>In Progress</li>
   *         <li>Succeeded</li>
   *         <li>Succeeded with Issues</li>
   *         <li>Failed</li>
   *       </ul>
   *     </p>
   */
  UpgradeStepStatus?: UpgradeStatus | string;
}

export namespace UpgradeStepItem {
  export const filterSensitiveLog = (obj: UpgradeStepItem): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpgradeStepItem =>
    __isa(o, "UpgradeStepItem");
}

/**
 * <p>An exception for missing / invalid input fields. Gives http status code of 400.</p>
 */
export interface ValidationException
  extends __SmithyException,
    $MetadataBearer {
  name: "ValidationException";
  $fault: "client";
  /**
   * <p>A description of the error.</p>
   */
  message?: string;
}

export namespace ValidationException {
  export const filterSensitiveLog = (obj: ValidationException): any => ({
    ...obj
  });
  export const isa = (o: any): o is ValidationException =>
    __isa(o, "ValidationException");
}

export type VolumeType = "gp2" | "io1" | "standard";

/**
 * <p>Options to specify the subnets and security groups for VPC endpoint. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html" target="_blank"> VPC Endpoints for Amazon Elasticsearch Service Domains</a>.</p>
 */
export interface VPCDerivedInfo {
  __type?: "VPCDerivedInfo";
  /**
   * <p>The availability zones for the Elasticsearch domain. Exists only if the domain was created with VPCOptions.</p>
   */
  AvailabilityZones?: string[];

  /**
   * <p>Specifies the security groups for VPC endpoint.</p>
   */
  SecurityGroupIds?: string[];

  /**
   * <p>Specifies the subnets for VPC endpoint.</p>
   */
  SubnetIds?: string[];

  /**
   * <p>The VPC Id for the Elasticsearch domain. Exists only if the domain was created with VPCOptions.</p>
   */
  VPCId?: string;
}

export namespace VPCDerivedInfo {
  export const filterSensitiveLog = (obj: VPCDerivedInfo): any => ({
    ...obj
  });
  export const isa = (o: any): o is VPCDerivedInfo =>
    __isa(o, "VPCDerivedInfo");
}

/**
 * <p> Status of the VPC options for the specified Elasticsearch domain.</p>
 */
export interface VPCDerivedInfoStatus {
  __type?: "VPCDerivedInfoStatus";
  /**
   * <p> Specifies the VPC options for the specified Elasticsearch domain.</p>
   */
  Options: VPCDerivedInfo | undefined;

  /**
   * <p> Specifies the status of the VPC options for the specified Elasticsearch domain.</p>
   */
  Status: OptionStatus | undefined;
}

export namespace VPCDerivedInfoStatus {
  export const filterSensitiveLog = (obj: VPCDerivedInfoStatus): any => ({
    ...obj
  });
  export const isa = (o: any): o is VPCDerivedInfoStatus =>
    __isa(o, "VPCDerivedInfoStatus");
}

/**
 * <p>Options to specify the subnets and security groups for VPC endpoint. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html" target="_blank"> VPC Endpoints for Amazon Elasticsearch Service Domains</a>.</p>
 */
export interface VPCOptions {
  __type?: "VPCOptions";
  /**
   * <p>Specifies the security groups for VPC endpoint.</p>
   */
  SecurityGroupIds?: string[];

  /**
   * <p>Specifies the subnets for VPC endpoint.</p>
   */
  SubnetIds?: string[];
}

export namespace VPCOptions {
  export const filterSensitiveLog = (obj: VPCOptions): any => ({
    ...obj
  });
  export const isa = (o: any): o is VPCOptions => __isa(o, "VPCOptions");
}

/**
 * <p>Specifies the zone awareness configuration for the domain cluster, such as the number of availability zones.</p>
 */
export interface ZoneAwarenessConfig {
  __type?: "ZoneAwarenessConfig";
  /**
   * <p>An integer value to indicate the number of availability zones for a domain when zone awareness is enabled. This should be equal to number of subnets if VPC endpoints is enabled</p>
   */
  AvailabilityZoneCount?: number;
}

export namespace ZoneAwarenessConfig {
  export const filterSensitiveLog = (obj: ZoneAwarenessConfig): any => ({
    ...obj
  });
  export const isa = (o: any): o is ZoneAwarenessConfig =>
    __isa(o, "ZoneAwarenessConfig");
}
