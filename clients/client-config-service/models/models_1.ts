import { FieldInfo, ResourceKey, RetentionConfiguration, StoredQuery, Tag } from "./models_0";
import { MetadataBearer as $MetadataBearer, SmithyException as __SmithyException } from "@aws-sdk/types";

export interface PutResourceConfigRequest {
  /**
   * <p>The type of the resource. The custom resource type must be registered with CloudFormation. </p>
   * 		       <note>
   *             <p>You cannot use the organization names “amzn”, “amazon”, “alexa”, “custom” with custom resource types. It is the first part of the ResourceType up to the first ::.</p>
   *          </note>
   */
  ResourceType: string | undefined;

  /**
   * <p>Version of the schema registered for the ResourceType in CloudFormation.</p>
   */
  SchemaVersionId: string | undefined;

  /**
   * <p>Unique identifier of the resource.</p>
   */
  ResourceId: string | undefined;

  /**
   * <p>Name of the resource.</p>
   */
  ResourceName?: string;

  /**
   * <p>The configuration object of the resource in valid JSON format. It must match the schema registered with CloudFormation.</p>
   * 		       <note>
   *             <p>The configuration JSON must not exceed 64 KB.</p>
   *          </note>
   */
  Configuration: string | undefined;

  /**
   * <p>Tags associated with the resource.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace PutResourceConfigRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutResourceConfigRequest): any => ({
    ...obj,
  });
}

export interface PutRetentionConfigurationRequest {
  /**
   * <p>Number of days Config stores your historical
   * 			information.</p>
   * 		       <note>
   * 			         <p>Currently, only applicable to the configuration item
   * 				history.</p>
   * 		       </note>
   */
  RetentionPeriodInDays: number | undefined;
}

export namespace PutRetentionConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutRetentionConfigurationRequest): any => ({
    ...obj,
  });
}

export interface PutRetentionConfigurationResponse {
  /**
   * <p>Returns a retention configuration object.</p>
   */
  RetentionConfiguration?: RetentionConfiguration;
}

export namespace PutRetentionConfigurationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutRetentionConfigurationResponse): any => ({
    ...obj,
  });
}

export interface PutStoredQueryRequest {
  /**
   * <p>A list of <code>StoredQuery</code> objects.
   * 			The mandatory fields are <code>QueryName</code> and <code>Expression</code>.</p>
   * 		       <note>
   *             <p>When you are creating a query, you must provide a query name and an expression.
   * 			When you are updating a query, you must provide a query name but updating the description is optional.</p>
   *          </note>
   */
  StoredQuery: StoredQuery | undefined;

  /**
   * <p>A list of <code>Tags</code> object.</p>
   */
  Tags?: Tag[];
}

export namespace PutStoredQueryRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutStoredQueryRequest): any => ({
    ...obj,
  });
}

export interface PutStoredQueryResponse {
  /**
   * <p>Amazon Resource Name (ARN) of the query.
   * 			For example, arn:partition:service:region:account-id:resource-type/resource-name/resource-id.</p>
   */
  QueryArn?: string;
}

export namespace PutStoredQueryResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutStoredQueryResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Two users are trying to modify the same query at the same time. Wait for a moment and try again.</p>
 */
export interface ResourceConcurrentModificationException extends __SmithyException, $MetadataBearer {
  name: "ResourceConcurrentModificationException";
  $fault: "client";
  message?: string;
}

export namespace ResourceConcurrentModificationException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceConcurrentModificationException): any => ({
    ...obj,
  });
}

/**
 * <p>You have reached the limit of the number of tags you can use. You have more than 50 tags.</p>
 */
export interface TooManyTagsException extends __SmithyException, $MetadataBearer {
  name: "TooManyTagsException";
  $fault: "client";
  /**
   * <p>Error executing the command</p>
   */
  message?: string;
}

export namespace TooManyTagsException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TooManyTagsException): any => ({
    ...obj,
  });
}

/**
 * <p>Details about the query.</p>
 */
export interface QueryInfo {
  /**
   * <p>Returns a <code>FieldInfo</code> object.</p>
   */
  SelectFields?: FieldInfo[];
}

export namespace QueryInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: QueryInfo): any => ({
    ...obj,
  });
}

export interface SelectAggregateResourceConfigRequest {
  /**
   * <p>The SQL query SELECT command. </p>
   */
  Expression: string | undefined;

  /**
   * <p>The name of the configuration aggregator.</p>
   */
  ConfigurationAggregatorName: string | undefined;

  /**
   * <p>The maximum number of query results returned on each page. </p>
   */
  Limit?: number;

  /**
   * <p>The maximum number of query results returned on each page. Config also allows the Limit request parameter.</p>
   */
  MaxResults?: number;

  /**
   * <p>The nextToken string returned in a previous request that you use to request the next page of results in a paginated response. </p>
   */
  NextToken?: string;
}

export namespace SelectAggregateResourceConfigRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SelectAggregateResourceConfigRequest): any => ({
    ...obj,
  });
}

export interface SelectAggregateResourceConfigResponse {
  /**
   * <p>Returns the results for the SQL query.</p>
   */
  Results?: string[];

  /**
   * <p>Details about the query.</p>
   */
  QueryInfo?: QueryInfo;

  /**
   * <p>The nextToken string returned in a previous request that you use to request the next page of results in a paginated response. </p>
   */
  NextToken?: string;
}

export namespace SelectAggregateResourceConfigResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SelectAggregateResourceConfigResponse): any => ({
    ...obj,
  });
}

export interface SelectResourceConfigRequest {
  /**
   * <p>The SQL query <code>SELECT</code> command.</p>
   */
  Expression: string | undefined;

  /**
   * <p>The maximum number of query results returned on each page. </p>
   */
  Limit?: number;

  /**
   * <p>The <code>nextToken</code> string returned in a previous request that you use to request the next page of results in a paginated response. </p>
   */
  NextToken?: string;
}

export namespace SelectResourceConfigRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SelectResourceConfigRequest): any => ({
    ...obj,
  });
}

export interface SelectResourceConfigResponse {
  /**
   * <p>Returns the results for the SQL query.</p>
   */
  Results?: string[];

  /**
   * <p>Returns the <code>QueryInfo</code> object.</p>
   */
  QueryInfo?: QueryInfo;

  /**
   * <p>The <code>nextToken</code> string returned in a previous request that you use to request the next page of results in a paginated response. </p>
   */
  NextToken?: string;
}

export namespace SelectResourceConfigResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SelectResourceConfigResponse): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface StartConfigRulesEvaluationRequest {
  /**
   * <p>The list of names of Config rules that you want to run
   * 			evaluations for.</p>
   */
  ConfigRuleNames?: string[];
}

export namespace StartConfigRulesEvaluationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartConfigRulesEvaluationRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The output when you start the evaluation for the specified Config rule.</p>
 */
export interface StartConfigRulesEvaluationResponse {}

export namespace StartConfigRulesEvaluationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartConfigRulesEvaluationResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The input for the <a>StartConfigurationRecorder</a>
 * 			action.</p>
 */
export interface StartConfigurationRecorderRequest {
  /**
   * <p>The name of the recorder object that records each configuration
   * 			change made to the resources.</p>
   */
  ConfigurationRecorderName: string | undefined;
}

export namespace StartConfigurationRecorderRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartConfigurationRecorderRequest): any => ({
    ...obj,
  });
}

export interface StartRemediationExecutionRequest {
  /**
   * <p>The list of names of Config rules that you want to run remediation execution for.</p>
   */
  ConfigRuleName: string | undefined;

  /**
   * <p>A list of resource keys to be processed with the current request. Each element in the list consists of the resource type and resource ID. </p>
   */
  ResourceKeys: ResourceKey[] | undefined;
}

export namespace StartRemediationExecutionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartRemediationExecutionRequest): any => ({
    ...obj,
  });
}

export interface StartRemediationExecutionResponse {
  /**
   * <p>Returns a failure message. For example, the resource is already compliant.</p>
   */
  FailureMessage?: string;

  /**
   * <p>For resources that have failed to start execution, the API returns a resource key object.</p>
   */
  FailedItems?: ResourceKey[];
}

export namespace StartRemediationExecutionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartRemediationExecutionResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The input for the <a>StopConfigurationRecorder</a> action.</p>
 */
export interface StopConfigurationRecorderRequest {
  /**
   * <p>The name of the recorder object that records each configuration change made to the resources.</p>
   */
  ConfigurationRecorderName: string | undefined;
}

export namespace StopConfigurationRecorderRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopConfigurationRecorderRequest): any => ({
    ...obj,
  });
}

export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the resource for which to list the tags. Currently, the supported resources are <code>ConfigRule</code>, <code>ConfigurationAggregator</code> and <code>AggregatorAuthorization</code>.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>An array of tag object.</p>
   */
  Tags: Tag[] | undefined;
}

export namespace TagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the resource for which to list the tags. Currently, the supported resources are <code>ConfigRule</code>, <code>ConfigurationAggregator</code> and <code>AggregatorAuthorization</code>.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The keys of the tags to be removed.</p>
   */
  TagKeys: string[] | undefined;
}

export namespace UntagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}
