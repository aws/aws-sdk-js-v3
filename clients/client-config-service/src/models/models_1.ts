// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { ConfigServiceServiceException as __BaseException } from "./ConfigServiceServiceException";
import {
  ConformancePackInputParameter,
  FailedRemediationBatch,
  FailedRemediationExceptionBatch,
  FieldInfo,
  OrganizationCustomPolicyRuleMetadata,
  OrganizationCustomRuleMetadata,
  OrganizationManagedRuleMetadata,
  RemediationConfiguration,
  RemediationExceptionResourceKey,
  ResourceKey,
  RetentionConfiguration,
  StoredQuery,
  Tag,
} from "./models_0";

export interface PutOrganizationConfigRuleRequest {
  /**
   * <p>The name that you assign to an organization Config rule.</p>
   */
  OrganizationConfigRuleName: string | undefined;

  /**
   * <p>An <code>OrganizationManagedRuleMetadata</code> object. </p>
   */
  OrganizationManagedRuleMetadata?: OrganizationManagedRuleMetadata;

  /**
   * <p>An <code>OrganizationCustomRuleMetadata</code> object.</p>
   */
  OrganizationCustomRuleMetadata?: OrganizationCustomRuleMetadata;

  /**
   * <p>A comma-separated list of accounts that you want to exclude from an organization Config rule.</p>
   */
  ExcludedAccounts?: string[];

  /**
   * <p>An object that specifies metadata for your organization's Config Custom Policy rule. The metadata includes the runtime system in use, which accounts have debug
   * 			logging enabled, and other custom rule metadata, such as resource type, resource ID of
   * 				Amazon Web Services resource, and organization trigger types that initiate Config to evaluate Amazon Web Services resources against a rule.</p>
   */
  OrganizationCustomPolicyRuleMetadata?: OrganizationCustomPolicyRuleMetadata;
}

export namespace PutOrganizationConfigRuleRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutOrganizationConfigRuleRequest): any => ({
    ...obj,
  });
}

export interface PutOrganizationConfigRuleResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of an organization Config rule.</p>
   */
  OrganizationConfigRuleArn?: string;
}

export namespace PutOrganizationConfigRuleResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutOrganizationConfigRuleResponse): any => ({
    ...obj,
  });
}

export interface PutOrganizationConformancePackRequest {
  /**
   * <p>Name of the organization conformance pack you want to create.</p>
   */
  OrganizationConformancePackName: string | undefined;

  /**
   * <p>Location of file containing the template body. The uri must point to the conformance pack template
   * 			(max size: 300 KB).</p>
   * 		       <note>
   *             <p>You must have access to read Amazon S3 bucket.</p>
   *          </note>
   */
  TemplateS3Uri?: string;

  /**
   * <p>A string containing full conformance pack template body. Structure containing the template body
   * 			with a minimum length of 1 byte and a maximum length of 51,200 bytes.</p>
   */
  TemplateBody?: string;

  /**
   * <p>The name of the Amazon S3 bucket where Config stores conformance pack templates.</p>
   * 		       <note>
   *             <p>This field is optional. If used, it must be prefixed with <code>awsconfigconforms</code>.</p>
   *          </note>
   */
  DeliveryS3Bucket?: string;

  /**
   * <p>The prefix for the Amazon S3 bucket.</p>
   * 		       <note>
   *             <p>This field is optional.</p>
   *          </note>
   */
  DeliveryS3KeyPrefix?: string;

  /**
   * <p>A list of <code>ConformancePackInputParameter</code> objects.</p>
   */
  ConformancePackInputParameters?: ConformancePackInputParameter[];

  /**
   * <p>A list of Amazon Web Services accounts to be excluded from an organization conformance pack while deploying a conformance pack.</p>
   */
  ExcludedAccounts?: string[];
}

export namespace PutOrganizationConformancePackRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutOrganizationConformancePackRequest): any => ({
    ...obj,
  });
}

export interface PutOrganizationConformancePackResponse {
  /**
   * <p>ARN of the organization conformance pack.</p>
   */
  OrganizationConformancePackArn?: string;
}

export namespace PutOrganizationConformancePackResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutOrganizationConformancePackResponse): any => ({
    ...obj,
  });
}

export interface PutRemediationConfigurationsRequest {
  /**
   * <p>A list of remediation configuration objects.</p>
   */
  RemediationConfigurations: RemediationConfiguration[] | undefined;
}

export namespace PutRemediationConfigurationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutRemediationConfigurationsRequest): any => ({
    ...obj,
  });
}

export interface PutRemediationConfigurationsResponse {
  /**
   * <p>Returns a list of failed remediation batch objects.</p>
   */
  FailedBatches?: FailedRemediationBatch[];
}

export namespace PutRemediationConfigurationsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutRemediationConfigurationsResponse): any => ({
    ...obj,
  });
}

export interface PutRemediationExceptionsRequest {
  /**
   * <p>The name of the Config rule for which you want to create remediation exception.</p>
   */
  ConfigRuleName: string | undefined;

  /**
   * <p>An exception list of resource exception keys to be processed with the current request. Config adds exception for each resource key. For example, Config adds 3 exceptions for 3 resource keys. </p>
   */
  ResourceKeys: RemediationExceptionResourceKey[] | undefined;

  /**
   * <p>The message contains an explanation of the exception.</p>
   */
  Message?: string;

  /**
   * <p>The exception is automatically deleted after the expiration date.</p>
   */
  ExpirationTime?: Date;
}

export namespace PutRemediationExceptionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutRemediationExceptionsRequest): any => ({
    ...obj,
  });
}

export interface PutRemediationExceptionsResponse {
  /**
   * <p>Returns a list of failed remediation exceptions batch objects. Each object in the batch consists of a list of failed items and failure messages.</p>
   */
  FailedBatches?: FailedRemediationExceptionBatch[];
}

export namespace PutRemediationExceptionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutRemediationExceptionsResponse): any => ({
    ...obj,
  });
}

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
  Tags?: Record<string, string>;
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
export class ResourceConcurrentModificationException extends __BaseException {
  readonly name: "ResourceConcurrentModificationException" = "ResourceConcurrentModificationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceConcurrentModificationException, __BaseException>) {
    super({
      name: "ResourceConcurrentModificationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceConcurrentModificationException.prototype);
  }
}

/**
 * <p>You have reached the limit of the number of tags you can use. You have more than 50 tags.</p>
 */
export class TooManyTagsException extends __BaseException {
  readonly name: "TooManyTagsException" = "TooManyTagsException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyTagsException, __BaseException>) {
    super({
      name: "TooManyTagsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyTagsException.prototype);
  }
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
