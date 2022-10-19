// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { ConfigServiceServiceException as __BaseException } from "./ConfigServiceServiceException";
import {
  ConformancePackInputParameter,
  DeliveryChannel,
  Evaluation,
  ExternalEvaluation,
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
  TemplateSSMDocumentDetails,
} from "./models_0";

export interface PutConformancePackRequest {
  /**
   * <p>The unique name of the conformance pack you want to deploy.</p>
   */
  ConformancePackName: string | undefined;

  /**
   * <p>The location of the file containing the template body (<code>s3://bucketname/prefix</code>). The uri must point to a conformance pack template (max size: 300 KB) that is located in an Amazon S3 bucket in the same Region as the conformance pack. </p>
   * 		       <note>
   *             <p>You must have access to read Amazon S3 bucket.</p>
   *          </note>
   */
  TemplateS3Uri?: string;

  /**
   * <p>A string containing the full conformance pack template body. The structure containing the template body has a minimum length of 1 byte and a maximum length of 51,200 bytes.</p>
   * 		       <note>
   *             <p>You can use a YAML template with two resource types: Config rule (<code>AWS::Config::ConfigRule</code>) and remediation action (<code>AWS::Config::RemediationConfiguration</code>).</p>
   *          </note>
   */
  TemplateBody?: string;

  /**
   * <p>The name of the Amazon S3 bucket where Config stores conformance pack templates.</p>
   * 		       <note>
   *             <p>This field is optional.</p>
   *          </note>
   */
  DeliveryS3Bucket?: string;

  /**
   * <p>The prefix for the Amazon S3 bucket. </p>
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
   * <p>An object of type <code>TemplateSSMDocumentDetails</code>, which contains the name or the Amazon Resource Name (ARN) of the Amazon Web Services Systems Manager document (SSM document) and the version of the SSM document that is used to create a conformance pack.</p>
   */
  TemplateSSMDocumentDetails?: TemplateSSMDocumentDetails;
}

export interface PutConformancePackResponse {
  /**
   * <p>ARN of the conformance pack.</p>
   */
  ConformancePackArn?: string;
}

/**
 * <p>The input for the <a>PutDeliveryChannel</a>
 * 			action.</p>
 */
export interface PutDeliveryChannelRequest {
  /**
   * <p>The configuration delivery channel object that delivers the
   * 			configuration information to an Amazon S3 bucket and to an Amazon
   * 			SNS topic.</p>
   */
  DeliveryChannel: DeliveryChannel | undefined;
}

/**
 * <p></p>
 */
export interface PutEvaluationsRequest {
  /**
   * <p>The assessments that the Lambda function performs. Each
   * 			evaluation identifies an Amazon Web Services resource and indicates whether it
   * 			complies with the Config rule that invokes the Lambda
   * 			function.</p>
   */
  Evaluations?: Evaluation[];

  /**
   * <p>An encrypted token that associates an evaluation with an Config rule. Identifies the rule and the event that triggered the
   * 			evaluation.</p>
   */
  ResultToken: string | undefined;

  /**
   * <p>Use this parameter to specify a test run for
   * 			<code>PutEvaluations</code>. You can verify whether your Lambda function will deliver evaluation results to Config. No
   * 			updates occur to your existing evaluations, and evaluation results
   * 			are not sent to Config.</p>
   *
   * 		       <note>
   * 			         <p>When <code>TestMode</code> is <code>true</code>,
   * 					<code>PutEvaluations</code> doesn't require a valid value
   * 				for the <code>ResultToken</code> parameter, but the value cannot
   * 				be null.</p>
   * 		       </note>
   */
  TestMode?: boolean;
}

/**
 * <p></p>
 */
export interface PutEvaluationsResponse {
  /**
   * <p>Requests that failed because of a client or server
   * 			error.</p>
   */
  FailedEvaluations?: Evaluation[];
}

export interface PutExternalEvaluationRequest {
  /**
   * <p>The name of the Config rule.</p>
   */
  ConfigRuleName: string | undefined;

  /**
   * <p>An <code>ExternalEvaluation</code> object that provides details about compliance.</p>
   */
  ExternalEvaluation: ExternalEvaluation | undefined;
}

export interface PutExternalEvaluationResponse {}

export interface PutOrganizationConfigRuleRequest {
  /**
   * <p>The name that you assign to an organization Config rule.</p>
   */
  OrganizationConfigRuleName: string | undefined;

  /**
   * <p>An <code>OrganizationManagedRuleMetadata</code> object. This object specifies organization
   * 			managed rule metadata such as resource type and ID of Amazon Web Services resource along with the rule identifier.
   * 			It also provides the frequency with which you want Config to run evaluations for the rule if the trigger type is periodic.</p>
   */
  OrganizationManagedRuleMetadata?: OrganizationManagedRuleMetadata;

  /**
   * <p>An <code>OrganizationCustomRuleMetadata</code> object. This object specifies organization custom rule metadata such as resource type,
   * 			resource ID of Amazon Web Services resource, Lambda function ARN, and organization trigger types that trigger Config to evaluate your Amazon Web Services resources against a rule.
   * 			It also provides the frequency with which you want Config to run evaluations for the rule if the trigger type is periodic.</p>
   */
  OrganizationCustomRuleMetadata?: OrganizationCustomRuleMetadata;

  /**
   * <p>A comma-separated list of accounts that you want to exclude from an organization Config rule.</p>
   */
  ExcludedAccounts?: string[];

  /**
   * <p>An <code>OrganizationCustomPolicyRuleMetadata</code> object. This object specifies metadata for your organization's Config Custom Policy rule. The metadata includes the runtime system in use, which accounts have debug
   * 			logging enabled, and other custom rule metadata, such as resource type, resource ID of
   * 			Amazon Web Services resource, and organization trigger types that initiate Config to evaluate Amazon Web Services resources against a rule.</p>
   */
  OrganizationCustomPolicyRuleMetadata?: OrganizationCustomPolicyRuleMetadata;
}

export interface PutOrganizationConfigRuleResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of an organization Config rule.</p>
   */
  OrganizationConfigRuleArn?: string;
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

export interface PutOrganizationConformancePackResponse {
  /**
   * <p>ARN of the organization conformance pack.</p>
   */
  OrganizationConformancePackArn?: string;
}

export interface PutRemediationConfigurationsRequest {
  /**
   * <p>A list of remediation configuration objects.</p>
   */
  RemediationConfigurations: RemediationConfiguration[] | undefined;
}

export interface PutRemediationConfigurationsResponse {
  /**
   * <p>Returns a list of failed remediation batch objects.</p>
   */
  FailedBatches?: FailedRemediationBatch[];
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

export interface PutRemediationExceptionsResponse {
  /**
   * <p>Returns a list of failed remediation exceptions batch objects. Each object in the batch consists of a list of failed items and failure messages.</p>
   */
  FailedBatches?: FailedRemediationExceptionBatch[];
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
   * 		       <note>
   *             <p>This field is not to be confused with the Amazon Web Services-wide tag feature for Amazon Web Services resources.
   * 			Tags for <code>PutResourceConfig</code> are tags that you supply for the configuration items of your custom resources.</p>
   *          </note>
   */
  Tags?: Record<string, string>;
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

export interface PutRetentionConfigurationResponse {
  /**
   * <p>Returns a retention configuration object.</p>
   */
  RetentionConfiguration?: RetentionConfiguration;
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

export interface PutStoredQueryResponse {
  /**
   * <p>Amazon Resource Name (ARN) of the query.
   * 			For example, arn:partition:service:region:account-id:resource-type/resource-name/resource-id.</p>
   */
  QueryArn?: string;
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
 * <p>You have reached the limit of the number of tags you can use.
 * 			For more information, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/configlimits.html">
 *                <b>Service Limits</b>
 *             </a> in the Config Developer Guide.</p>
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

/**
 * <p>The output when you start the evaluation for the specified Config rule.</p>
 */
export interface StartConfigRulesEvaluationResponse {}

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

/**
 * <p>The input for the <a>StopConfigurationRecorder</a> action.</p>
 */
export interface StopConfigurationRecorderRequest {
  /**
   * <p>The name of the recorder object that records each configuration change made to the resources.</p>
   */
  ConfigurationRecorderName: string | undefined;
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

/**
 * @internal
 */
export const PutConformancePackRequestFilterSensitiveLog = (obj: PutConformancePackRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutConformancePackResponseFilterSensitiveLog = (obj: PutConformancePackResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutDeliveryChannelRequestFilterSensitiveLog = (obj: PutDeliveryChannelRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutEvaluationsRequestFilterSensitiveLog = (obj: PutEvaluationsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutEvaluationsResponseFilterSensitiveLog = (obj: PutEvaluationsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutExternalEvaluationRequestFilterSensitiveLog = (obj: PutExternalEvaluationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutExternalEvaluationResponseFilterSensitiveLog = (obj: PutExternalEvaluationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutOrganizationConfigRuleRequestFilterSensitiveLog = (obj: PutOrganizationConfigRuleRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutOrganizationConfigRuleResponseFilterSensitiveLog = (obj: PutOrganizationConfigRuleResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutOrganizationConformancePackRequestFilterSensitiveLog = (
  obj: PutOrganizationConformancePackRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutOrganizationConformancePackResponseFilterSensitiveLog = (
  obj: PutOrganizationConformancePackResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutRemediationConfigurationsRequestFilterSensitiveLog = (
  obj: PutRemediationConfigurationsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutRemediationConfigurationsResponseFilterSensitiveLog = (
  obj: PutRemediationConfigurationsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutRemediationExceptionsRequestFilterSensitiveLog = (obj: PutRemediationExceptionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutRemediationExceptionsResponseFilterSensitiveLog = (obj: PutRemediationExceptionsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutResourceConfigRequestFilterSensitiveLog = (obj: PutResourceConfigRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutRetentionConfigurationRequestFilterSensitiveLog = (obj: PutRetentionConfigurationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutRetentionConfigurationResponseFilterSensitiveLog = (obj: PutRetentionConfigurationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutStoredQueryRequestFilterSensitiveLog = (obj: PutStoredQueryRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutStoredQueryResponseFilterSensitiveLog = (obj: PutStoredQueryResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const QueryInfoFilterSensitiveLog = (obj: QueryInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SelectAggregateResourceConfigRequestFilterSensitiveLog = (
  obj: SelectAggregateResourceConfigRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SelectAggregateResourceConfigResponseFilterSensitiveLog = (
  obj: SelectAggregateResourceConfigResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SelectResourceConfigRequestFilterSensitiveLog = (obj: SelectResourceConfigRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SelectResourceConfigResponseFilterSensitiveLog = (obj: SelectResourceConfigResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartConfigRulesEvaluationRequestFilterSensitiveLog = (obj: StartConfigRulesEvaluationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartConfigRulesEvaluationResponseFilterSensitiveLog = (obj: StartConfigRulesEvaluationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartConfigurationRecorderRequestFilterSensitiveLog = (obj: StartConfigurationRecorderRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartRemediationExecutionRequestFilterSensitiveLog = (obj: StartRemediationExecutionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartRemediationExecutionResponseFilterSensitiveLog = (obj: StartRemediationExecutionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopConfigurationRecorderRequestFilterSensitiveLog = (obj: StopConfigurationRecorderRequest): any => ({
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
export const UntagResourceRequestFilterSensitiveLog = (obj: UntagResourceRequest): any => ({
  ...obj,
});
