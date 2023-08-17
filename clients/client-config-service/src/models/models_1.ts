// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { ConfigServiceServiceException as __BaseException } from "./ConfigServiceServiceException";
import {
  AccountAggregationSource,
  AggregationAuthorization,
  ConfigRule,
  ConfigurationAggregator,
  ConfigurationRecorder,
  ConformancePackInputParameter,
  DeliveryChannel,
  Evaluation,
  EvaluationContext,
  EvaluationMode,
  ExternalEvaluation,
  FailedRemediationBatch,
  FailedRemediationExceptionBatch,
  FieldInfo,
  MaximumExecutionFrequency,
  OrganizationAggregationSource,
  OrganizationConfigRuleTriggerTypeNoSN,
  OrganizationCustomRuleMetadata,
  OrganizationManagedRuleMetadata,
  RemediationConfiguration,
  RemediationExceptionResourceKey,
  ResourceDetails,
  ResourceKey,
  RetentionConfiguration,
  StoredQuery,
  Tag,
  TemplateSSMDocumentDetails,
} from "./models_0";

/**
 * @public
 * <p>Failed to add the Config rule because the account already
 * 			contains the maximum number of 150 rules. Consider deleting any
 * 			deactivated rules before you add new rules.</p>
 */
export class MaxNumberOfConfigRulesExceededException extends __BaseException {
  readonly name: "MaxNumberOfConfigRulesExceededException" = "MaxNumberOfConfigRulesExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MaxNumberOfConfigRulesExceededException, __BaseException>) {
    super({
      name: "MaxNumberOfConfigRulesExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MaxNumberOfConfigRulesExceededException.prototype);
  }
}

/**
 * @public
 * <p>You have reached the limit of the number of configuration recorders you can
 * 			create.</p>
 */
export class MaxNumberOfConfigurationRecordersExceededException extends __BaseException {
  readonly name: "MaxNumberOfConfigurationRecordersExceededException" =
    "MaxNumberOfConfigurationRecordersExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MaxNumberOfConfigurationRecordersExceededException, __BaseException>) {
    super({
      name: "MaxNumberOfConfigurationRecordersExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MaxNumberOfConfigurationRecordersExceededException.prototype);
  }
}

/**
 * @public
 * <p>You have reached the limit of the number of conformance packs you can create in an account. For more information, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/configlimits.html">
 *                <b>Service Limits</b>
 *             </a> in the <i>Config Developer Guide</i>.</p>
 */
export class MaxNumberOfConformancePacksExceededException extends __BaseException {
  readonly name: "MaxNumberOfConformancePacksExceededException" = "MaxNumberOfConformancePacksExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MaxNumberOfConformancePacksExceededException, __BaseException>) {
    super({
      name: "MaxNumberOfConformancePacksExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MaxNumberOfConformancePacksExceededException.prototype);
  }
}

/**
 * @public
 * <p>You have reached the limit of the number of delivery channels
 * 			you can create.</p>
 */
export class MaxNumberOfDeliveryChannelsExceededException extends __BaseException {
  readonly name: "MaxNumberOfDeliveryChannelsExceededException" = "MaxNumberOfDeliveryChannelsExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MaxNumberOfDeliveryChannelsExceededException, __BaseException>) {
    super({
      name: "MaxNumberOfDeliveryChannelsExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MaxNumberOfDeliveryChannelsExceededException.prototype);
  }
}

/**
 * @public
 * <p>You have reached the limit of the number of organization Config rules you can create. For more information, see see <a href="https://docs.aws.amazon.com/config/latest/developerguide/configlimits.html">
 *                <b>Service Limits</b>
 *             </a> in the <i>Config Developer Guide</i>.</p>
 */
export class MaxNumberOfOrganizationConfigRulesExceededException extends __BaseException {
  readonly name: "MaxNumberOfOrganizationConfigRulesExceededException" =
    "MaxNumberOfOrganizationConfigRulesExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MaxNumberOfOrganizationConfigRulesExceededException, __BaseException>) {
    super({
      name: "MaxNumberOfOrganizationConfigRulesExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MaxNumberOfOrganizationConfigRulesExceededException.prototype);
  }
}

/**
 * @public
 * <p>You have reached the limit of the number of organization conformance packs you can create in an account. For more information, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/configlimits.html">
 *                <b>Service Limits</b>
 *             </a> in the <i>Config Developer Guide</i>.</p>
 */
export class MaxNumberOfOrganizationConformancePacksExceededException extends __BaseException {
  readonly name: "MaxNumberOfOrganizationConformancePacksExceededException" =
    "MaxNumberOfOrganizationConformancePacksExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MaxNumberOfOrganizationConformancePacksExceededException, __BaseException>) {
    super({
      name: "MaxNumberOfOrganizationConformancePacksExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MaxNumberOfOrganizationConformancePacksExceededException.prototype);
  }
}

/**
 * @public
 * <p>Failed to add the retention configuration because a retention configuration with that name already exists.</p>
 */
export class MaxNumberOfRetentionConfigurationsExceededException extends __BaseException {
  readonly name: "MaxNumberOfRetentionConfigurationsExceededException" =
    "MaxNumberOfRetentionConfigurationsExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MaxNumberOfRetentionConfigurationsExceededException, __BaseException>) {
    super({
      name: "MaxNumberOfRetentionConfigurationsExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MaxNumberOfRetentionConfigurationsExceededException.prototype);
  }
}

/**
 * @public
 * <p>There is no delivery channel available to record
 * 			configurations.</p>
 */
export class NoAvailableDeliveryChannelException extends __BaseException {
  readonly name: "NoAvailableDeliveryChannelException" = "NoAvailableDeliveryChannelException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoAvailableDeliveryChannelException, __BaseException>) {
    super({
      name: "NoAvailableDeliveryChannelException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoAvailableDeliveryChannelException.prototype);
  }
}

/**
 * @public
 * <p>Organization is no longer available.</p>
 */
export class NoAvailableOrganizationException extends __BaseException {
  readonly name: "NoAvailableOrganizationException" = "NoAvailableOrganizationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoAvailableOrganizationException, __BaseException>) {
    super({
      name: "NoAvailableOrganizationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoAvailableOrganizationException.prototype);
  }
}

/**
 * @public
 * <p>The specified Amazon S3 bucket does not exist.</p>
 */
export class NoSuchBucketException extends __BaseException {
  readonly name: "NoSuchBucketException" = "NoSuchBucketException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoSuchBucketException, __BaseException>) {
    super({
      name: "NoSuchBucketException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoSuchBucketException.prototype);
  }
}

/**
 * @public
 * <p>Config resource cannot be created because your organization does not have all features enabled.</p>
 */
export class OrganizationAllFeaturesNotEnabledException extends __BaseException {
  readonly name: "OrganizationAllFeaturesNotEnabledException" = "OrganizationAllFeaturesNotEnabledException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OrganizationAllFeaturesNotEnabledException, __BaseException>) {
    super({
      name: "OrganizationAllFeaturesNotEnabledException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OrganizationAllFeaturesNotEnabledException.prototype);
  }
}

/**
 * @public
 * <p>You have specified a template that is not valid or supported.</p>
 */
export class OrganizationConformancePackTemplateValidationException extends __BaseException {
  readonly name: "OrganizationConformancePackTemplateValidationException" =
    "OrganizationConformancePackTemplateValidationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OrganizationConformancePackTemplateValidationException, __BaseException>) {
    super({
      name: "OrganizationConformancePackTemplateValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OrganizationConformancePackTemplateValidationException.prototype);
  }
}

/**
 * @public
 * <p>An
 * 			object that specifies metadata for your organization's Config Custom Policy rule. The metadata includes the runtime system in use, which accounts have
 * 			debug logging enabled, and other custom rule metadata, such as resource type, resource
 * 			ID of Amazon Web Services resource, and organization trigger types that initiate Config to evaluate Amazon Web Services resources against a rule.</p>
 */
export interface OrganizationCustomPolicyRuleMetadata {
  /**
   * @public
   * <p>The description that you provide for your organization Config Custom Policy rule.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The type of notification that initiates Config to run an evaluation for a rule.
   * 			For Config Custom Policy rules, Config supports change-initiated notification types:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ConfigurationItemChangeNotification</code> - Initiates an evaluation when Config delivers a configuration item as a result of a resource
   * 					change.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OversizedConfigurationItemChangeNotification</code> - Initiates an evaluation when
   * 						Config delivers an oversized configuration item. Config may generate this notification type when a resource changes and the
   * 					notification exceeds the maximum size allowed by Amazon SNS.</p>
   *             </li>
   *          </ul>
   */
  OrganizationConfigRuleTriggerTypes?: (OrganizationConfigRuleTriggerTypeNoSN | string)[];

  /**
   * @public
   * <p>A string, in JSON format, that is passed to your organization Config Custom Policy rule.</p>
   */
  InputParameters?: string;

  /**
   * @public
   * <p>The maximum frequency with which Config runs evaluations for a rule. Your
   * 			Config Custom Policy rule is triggered when Config delivers
   * 			the configuration snapshot. For more information, see <a>ConfigSnapshotDeliveryProperties</a>.</p>
   */
  MaximumExecutionFrequency?: MaximumExecutionFrequency | string;

  /**
   * @public
   * <p>The type of the Amazon Web Services resource that was evaluated.</p>
   */
  ResourceTypesScope?: string[];

  /**
   * @public
   * <p>The ID of the Amazon Web Services resource that was evaluated.</p>
   */
  ResourceIdScope?: string;

  /**
   * @public
   * <p>One part of a key-value pair that make up a tag. A key is a general label that acts like a category for more specific tag values.</p>
   */
  TagKeyScope?: string;

  /**
   * @public
   * <p>The optional part of a key-value pair that make up a tag. A value acts as a descriptor within a tag category (key).</p>
   */
  TagValueScope?: string;

  /**
   * @public
   * <p>The runtime system for your organization Config Custom Policy rules. Guard is a policy-as-code language that allows you to write policies that are enforced by Config Custom Policy rules. For more information about Guard, see the <a href="https://github.com/aws-cloudformation/cloudformation-guard">Guard GitHub
   * 			Repository</a>.</p>
   */
  PolicyRuntime: string | undefined;

  /**
   * @public
   * <p>The policy definition containing the logic for your organization Config Custom Policy rule.</p>
   */
  PolicyText: string | undefined;

  /**
   * @public
   * <p>A list of accounts that you can enable debug logging for your organization Config Custom Policy rule. List is null when debug logging is enabled for all accounts.</p>
   */
  DebugLogDeliveryAccounts?: string[];
}

/**
 * @public
 */
export interface PutAggregationAuthorizationRequest {
  /**
   * @public
   * <p>The 12-digit account ID of the account authorized to aggregate data.</p>
   */
  AuthorizedAccountId: string | undefined;

  /**
   * @public
   * <p>The region authorized to collect aggregated data.</p>
   */
  AuthorizedAwsRegion: string | undefined;

  /**
   * @public
   * <p>An array of tag object.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface PutAggregationAuthorizationResponse {
  /**
   * @public
   * <p>Returns an AggregationAuthorization object.
   *
   * 		</p>
   */
  AggregationAuthorization?: AggregationAuthorization;
}

/**
 * @public
 */
export interface PutConfigRuleRequest {
  /**
   * @public
   * <p>The rule that you want to add to your account.</p>
   */
  ConfigRule: ConfigRule | undefined;

  /**
   * @public
   * <p>An array of tag object.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface PutConfigurationAggregatorRequest {
  /**
   * @public
   * <p>The name of the configuration aggregator.</p>
   */
  ConfigurationAggregatorName: string | undefined;

  /**
   * @public
   * <p>A list of AccountAggregationSource object.
   *
   * 		</p>
   */
  AccountAggregationSources?: AccountAggregationSource[];

  /**
   * @public
   * <p>An OrganizationAggregationSource object.</p>
   */
  OrganizationAggregationSource?: OrganizationAggregationSource;

  /**
   * @public
   * <p>An array of tag object.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface PutConfigurationAggregatorResponse {
  /**
   * @public
   * <p>Returns a ConfigurationAggregator object.</p>
   */
  ConfigurationAggregator?: ConfigurationAggregator;
}

/**
 * @public
 * <p>The input for the <a>PutConfigurationRecorder</a>
 * 			action.</p>
 */
export interface PutConfigurationRecorderRequest {
  /**
   * @public
   * <p>An object for the configuration recorder to record configuration changes for specified resource types.</p>
   */
  ConfigurationRecorder: ConfigurationRecorder | undefined;
}

/**
 * @public
 */
export interface PutConformancePackRequest {
  /**
   * @public
   * <p>The unique name of the conformance pack you want to deploy.</p>
   */
  ConformancePackName: string | undefined;

  /**
   * @public
   * <p>The location of the file containing the template body (<code>s3://bucketname/prefix</code>). The uri must point to a conformance pack template (max size: 300 KB) that is located in an Amazon S3 bucket in the same Region as the conformance pack. </p>
   *          <note>
   *             <p>You must have access to read Amazon S3 bucket.</p>
   *          </note>
   */
  TemplateS3Uri?: string;

  /**
   * @public
   * <p>A string containing the full conformance pack template body. The structure containing the template body has a minimum length of 1 byte and a maximum length of 51,200 bytes.</p>
   *          <note>
   *             <p>You can use a YAML template with two resource types: Config rule (<code>AWS::Config::ConfigRule</code>) and remediation action (<code>AWS::Config::RemediationConfiguration</code>).</p>
   *          </note>
   */
  TemplateBody?: string;

  /**
   * @public
   * <p>The name of the Amazon S3 bucket where Config stores conformance pack templates.</p>
   *          <note>
   *             <p>This field is optional.</p>
   *          </note>
   */
  DeliveryS3Bucket?: string;

  /**
   * @public
   * <p>The prefix for the Amazon S3 bucket. </p>
   *          <note>
   *             <p>This field is optional.</p>
   *          </note>
   */
  DeliveryS3KeyPrefix?: string;

  /**
   * @public
   * <p>A list of <code>ConformancePackInputParameter</code> objects.</p>
   */
  ConformancePackInputParameters?: ConformancePackInputParameter[];

  /**
   * @public
   * <p>An object of type <code>TemplateSSMDocumentDetails</code>, which contains the name or the Amazon Resource Name (ARN) of the Amazon Web Services Systems Manager document (SSM document) and the version of the SSM document that is used to create a conformance pack.</p>
   */
  TemplateSSMDocumentDetails?: TemplateSSMDocumentDetails;
}

/**
 * @public
 */
export interface PutConformancePackResponse {
  /**
   * @public
   * <p>ARN of the conformance pack.</p>
   */
  ConformancePackArn?: string;
}

/**
 * @public
 * <p>The input for the <a>PutDeliveryChannel</a>
 * 			action.</p>
 */
export interface PutDeliveryChannelRequest {
  /**
   * @public
   * <p>The configuration delivery channel object that delivers the
   * 			configuration information to an Amazon S3 bucket and to an Amazon
   * 			SNS topic.</p>
   */
  DeliveryChannel: DeliveryChannel | undefined;
}

/**
 * @public
 * <p></p>
 */
export interface PutEvaluationsRequest {
  /**
   * @public
   * <p>The assessments that the Lambda function performs. Each
   * 			evaluation identifies an Amazon Web Services resource and indicates whether it
   * 			complies with the Config rule that invokes the Lambda
   * 			function.</p>
   */
  Evaluations?: Evaluation[];

  /**
   * @public
   * <p>An encrypted token that associates an evaluation with an Config rule. Identifies the rule and the event that triggered the
   * 			evaluation.</p>
   */
  ResultToken: string | undefined;

  /**
   * @public
   * <p>Use this parameter to specify a test run for
   * 			<code>PutEvaluations</code>. You can verify whether your Lambda function will deliver evaluation results to Config. No
   * 			updates occur to your existing evaluations, and evaluation results
   * 			are not sent to Config.</p>
   *          <note>
   *             <p>When <code>TestMode</code> is <code>true</code>,
   * 					<code>PutEvaluations</code> doesn't require a valid value
   * 				for the <code>ResultToken</code> parameter, but the value cannot
   * 				be null.</p>
   *          </note>
   */
  TestMode?: boolean;
}

/**
 * @public
 * <p></p>
 */
export interface PutEvaluationsResponse {
  /**
   * @public
   * <p>Requests that failed because of a client or server
   * 			error.</p>
   */
  FailedEvaluations?: Evaluation[];
}

/**
 * @public
 */
export interface PutExternalEvaluationRequest {
  /**
   * @public
   * <p>The name of the Config rule.</p>
   */
  ConfigRuleName: string | undefined;

  /**
   * @public
   * <p>An <code>ExternalEvaluation</code> object that provides details about compliance.</p>
   */
  ExternalEvaluation: ExternalEvaluation | undefined;
}

/**
 * @public
 */
export interface PutExternalEvaluationResponse {}

/**
 * @public
 */
export interface PutOrganizationConfigRuleRequest {
  /**
   * @public
   * <p>The name that you assign to an organization Config rule.</p>
   */
  OrganizationConfigRuleName: string | undefined;

  /**
   * @public
   * <p>An <code>OrganizationManagedRuleMetadata</code> object. This object specifies organization
   * 			managed rule metadata such as resource type and ID of Amazon Web Services resource along with the rule identifier.
   * 			It also provides the frequency with which you want Config to run evaluations for the rule if the trigger type is periodic.</p>
   */
  OrganizationManagedRuleMetadata?: OrganizationManagedRuleMetadata;

  /**
   * @public
   * <p>An <code>OrganizationCustomRuleMetadata</code> object. This object specifies organization custom rule metadata such as resource type,
   * 			resource ID of Amazon Web Services resource, Lambda function ARN, and organization trigger types that trigger Config to evaluate your Amazon Web Services resources against a rule.
   * 			It also provides the frequency with which you want Config to run evaluations for the rule if the trigger type is periodic.</p>
   */
  OrganizationCustomRuleMetadata?: OrganizationCustomRuleMetadata;

  /**
   * @public
   * <p>A comma-separated list of accounts that you want to exclude from an organization Config rule.</p>
   */
  ExcludedAccounts?: string[];

  /**
   * @public
   * <p>An <code>OrganizationCustomPolicyRuleMetadata</code> object. This object specifies metadata for your organization's Config Custom Policy rule. The metadata includes the runtime system in use, which accounts have debug
   * 			logging enabled, and other custom rule metadata, such as resource type, resource ID of
   * 			Amazon Web Services resource, and organization trigger types that initiate Config to evaluate Amazon Web Services resources against a rule.</p>
   */
  OrganizationCustomPolicyRuleMetadata?: OrganizationCustomPolicyRuleMetadata;
}

/**
 * @public
 */
export interface PutOrganizationConfigRuleResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of an organization Config rule.</p>
   */
  OrganizationConfigRuleArn?: string;
}

/**
 * @public
 */
export interface PutOrganizationConformancePackRequest {
  /**
   * @public
   * <p>Name of the organization conformance pack you want to create.</p>
   */
  OrganizationConformancePackName: string | undefined;

  /**
   * @public
   * <p>Location of file containing the template body. The uri must point to the conformance pack template
   * 			(max size: 300 KB).</p>
   *          <note>
   *             <p>You must have access to read Amazon S3 bucket.</p>
   *          </note>
   */
  TemplateS3Uri?: string;

  /**
   * @public
   * <p>A string containing full conformance pack template body. Structure containing the template body
   * 			with a minimum length of 1 byte and a maximum length of 51,200 bytes.</p>
   */
  TemplateBody?: string;

  /**
   * @public
   * <p>The name of the Amazon S3 bucket where Config stores conformance pack templates.</p>
   *          <note>
   *             <p>This field is optional. If used, it must be prefixed with <code>awsconfigconforms</code>.</p>
   *          </note>
   */
  DeliveryS3Bucket?: string;

  /**
   * @public
   * <p>The prefix for the Amazon S3 bucket.</p>
   *          <note>
   *             <p>This field is optional.</p>
   *          </note>
   */
  DeliveryS3KeyPrefix?: string;

  /**
   * @public
   * <p>A list of <code>ConformancePackInputParameter</code> objects.</p>
   */
  ConformancePackInputParameters?: ConformancePackInputParameter[];

  /**
   * @public
   * <p>A list of Amazon Web Services accounts to be excluded from an organization conformance pack while deploying a conformance pack.</p>
   */
  ExcludedAccounts?: string[];
}

/**
 * @public
 */
export interface PutOrganizationConformancePackResponse {
  /**
   * @public
   * <p>ARN of the organization conformance pack.</p>
   */
  OrganizationConformancePackArn?: string;
}

/**
 * @public
 */
export interface PutRemediationConfigurationsRequest {
  /**
   * @public
   * <p>A list of remediation configuration objects.</p>
   */
  RemediationConfigurations: RemediationConfiguration[] | undefined;
}

/**
 * @public
 */
export interface PutRemediationConfigurationsResponse {
  /**
   * @public
   * <p>Returns a list of failed remediation batch objects.</p>
   */
  FailedBatches?: FailedRemediationBatch[];
}

/**
 * @public
 */
export interface PutRemediationExceptionsRequest {
  /**
   * @public
   * <p>The name of the Config rule for which you want to create remediation exception.</p>
   */
  ConfigRuleName: string | undefined;

  /**
   * @public
   * <p>An exception list of resource exception keys to be processed with the current request. Config adds exception for each resource key. For example, Config adds 3 exceptions for 3 resource keys. </p>
   */
  ResourceKeys: RemediationExceptionResourceKey[] | undefined;

  /**
   * @public
   * <p>The message contains an explanation of the exception.</p>
   */
  Message?: string;

  /**
   * @public
   * <p>The exception is automatically deleted after the expiration date.</p>
   */
  ExpirationTime?: Date;
}

/**
 * @public
 */
export interface PutRemediationExceptionsResponse {
  /**
   * @public
   * <p>Returns a list of failed remediation exceptions batch objects. Each object in the batch consists of a list of failed items and failure messages.</p>
   */
  FailedBatches?: FailedRemediationExceptionBatch[];
}

/**
 * @public
 */
export interface PutResourceConfigRequest {
  /**
   * @public
   * <p>The type of the resource. The custom resource type must be registered with CloudFormation. </p>
   *          <note>
   *             <p>You cannot use the organization names “amzn”, “amazon”, “alexa”, “custom” with custom resource types. It is the first part of the ResourceType up to the first ::.</p>
   *          </note>
   */
  ResourceType: string | undefined;

  /**
   * @public
   * <p>Version of the schema registered for the ResourceType in CloudFormation.</p>
   */
  SchemaVersionId: string | undefined;

  /**
   * @public
   * <p>Unique identifier of the resource.</p>
   */
  ResourceId: string | undefined;

  /**
   * @public
   * <p>Name of the resource.</p>
   */
  ResourceName?: string;

  /**
   * @public
   * <p>The configuration object of the resource in valid JSON format. It must match the schema registered with CloudFormation.</p>
   *          <note>
   *             <p>The configuration JSON must not exceed 64 KB.</p>
   *          </note>
   */
  Configuration: string | undefined;

  /**
   * @public
   * <p>Tags associated with the resource.</p>
   *          <note>
   *             <p>This field is not to be confused with the Amazon Web Services-wide tag feature for Amazon Web Services resources.
   * 			Tags for <code>PutResourceConfig</code> are tags that you supply for the configuration items of your custom resources.</p>
   *          </note>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface PutRetentionConfigurationRequest {
  /**
   * @public
   * <p>Number of days Config stores your historical
   * 			information.</p>
   *          <note>
   *             <p>Currently, only applicable to the configuration item
   * 				history.</p>
   *          </note>
   */
  RetentionPeriodInDays: number | undefined;
}

/**
 * @public
 */
export interface PutRetentionConfigurationResponse {
  /**
   * @public
   * <p>Returns a retention configuration object.</p>
   */
  RetentionConfiguration?: RetentionConfiguration;
}

/**
 * @public
 */
export interface PutStoredQueryRequest {
  /**
   * @public
   * <p>A list of <code>StoredQuery</code> objects.
   * 			The mandatory fields are <code>QueryName</code> and <code>Expression</code>.</p>
   *          <note>
   *             <p>When you are creating a query, you must provide a query name and an expression.
   * 			When you are updating a query, you must provide a query name but updating the description is optional.</p>
   *          </note>
   */
  StoredQuery: StoredQuery | undefined;

  /**
   * @public
   * <p>A list of <code>Tags</code> object.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface PutStoredQueryResponse {
  /**
   * @public
   * <p>Amazon Resource Name (ARN) of the query.
   * 			For example, arn:partition:service:region:account-id:resource-type/resource-name/resource-id.</p>
   */
  QueryArn?: string;
}

/**
 * @public
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
 * @public
 * <p>You have reached the limit of the number of tags you can use.
 * 			For more information, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/configlimits.html">
 *                <b>Service Limits</b>
 *             </a> in the <i>Config Developer Guide</i>.</p>
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
 * @public
 * <p>Details about the query.</p>
 */
export interface QueryInfo {
  /**
   * @public
   * <p>Returns a <code>FieldInfo</code> object.</p>
   */
  SelectFields?: FieldInfo[];
}

/**
 * @public
 */
export interface SelectAggregateResourceConfigRequest {
  /**
   * @public
   * <p>The SQL query SELECT command. </p>
   */
  Expression: string | undefined;

  /**
   * @public
   * <p>The name of the configuration aggregator.</p>
   */
  ConfigurationAggregatorName: string | undefined;

  /**
   * @public
   * <p>The maximum number of query results returned on each page. </p>
   */
  Limit?: number;

  /**
   * @public
   * <p>The maximum number of query results returned on each page. Config also allows the Limit request parameter.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The nextToken string returned in a previous request that you use to request the next page of results in a paginated response. </p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface SelectAggregateResourceConfigResponse {
  /**
   * @public
   * <p>Returns the results for the SQL query.</p>
   */
  Results?: string[];

  /**
   * @public
   * <p>Details about the query.</p>
   */
  QueryInfo?: QueryInfo;

  /**
   * @public
   * <p>The nextToken string returned in a previous request that you use to request the next page of results in a paginated response. </p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface SelectResourceConfigRequest {
  /**
   * @public
   * <p>The SQL query <code>SELECT</code> command.</p>
   */
  Expression: string | undefined;

  /**
   * @public
   * <p>The maximum number of query results returned on each page. </p>
   */
  Limit?: number;

  /**
   * @public
   * <p>The <code>nextToken</code> string returned in a previous request that you use to request the next page of results in a paginated response. </p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface SelectResourceConfigResponse {
  /**
   * @public
   * <p>Returns the results for the SQL query.</p>
   */
  Results?: string[];

  /**
   * @public
   * <p>Returns the <code>QueryInfo</code> object.</p>
   */
  QueryInfo?: QueryInfo;

  /**
   * @public
   * <p>The <code>nextToken</code> string returned in a previous request that you use to request the next page of results in a paginated response. </p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p></p>
 */
export interface StartConfigRulesEvaluationRequest {
  /**
   * @public
   * <p>The list of names of Config rules that you want to run
   * 			evaluations for.</p>
   */
  ConfigRuleNames?: string[];
}

/**
 * @public
 * <p>The output when you start the evaluation for the specified Config rule.</p>
 */
export interface StartConfigRulesEvaluationResponse {}

/**
 * @public
 * <p>The input for the <a>StartConfigurationRecorder</a>
 * 			action.</p>
 */
export interface StartConfigurationRecorderRequest {
  /**
   * @public
   * <p>The name of the recorder object that records each configuration
   * 			change made to the resources.</p>
   */
  ConfigurationRecorderName: string | undefined;
}

/**
 * @public
 */
export interface StartRemediationExecutionRequest {
  /**
   * @public
   * <p>The list of names of Config rules that you want to run remediation execution for.</p>
   */
  ConfigRuleName: string | undefined;

  /**
   * @public
   * <p>A list of resource keys to be processed with the current request. Each element in the list consists of the resource type and resource ID. </p>
   */
  ResourceKeys: ResourceKey[] | undefined;
}

/**
 * @public
 */
export interface StartRemediationExecutionResponse {
  /**
   * @public
   * <p>Returns a failure message. For example, the resource is already compliant.</p>
   */
  FailureMessage?: string;

  /**
   * @public
   * <p>For resources that have failed to start execution, the API returns a resource key object.</p>
   */
  FailedItems?: ResourceKey[];
}

/**
 * @public
 */
export interface StartResourceEvaluationRequest {
  /**
   * @public
   * <p>Returns a <code>ResourceDetails</code> object.</p>
   */
  ResourceDetails: ResourceDetails | undefined;

  /**
   * @public
   * <p>Returns an <code>EvaluationContext</code> object.</p>
   */
  EvaluationContext?: EvaluationContext;

  /**
   * @public
   * <p>The mode of an evaluation. The valid values for this API are <code>DETECTIVE</code> and <code>PROACTIVE</code>.</p>
   */
  EvaluationMode: EvaluationMode | string | undefined;

  /**
   * @public
   * <p>The timeout for an evaluation. The default is 900 seconds. You cannot specify a number greater than 3600. If you specify 0, Config uses the default.</p>
   */
  EvaluationTimeout?: number;

  /**
   * @public
   * <p>A client token is a unique, case-sensitive string of up to 64 ASCII characters.
   * 			To make an idempotent API request using one of these actions, specify a client token in the request.</p>
   *          <note>
   *             <p>Avoid reusing the same client token for other API requests. If you retry
   * 				a request that completed successfully using the same client token and the same
   * 				parameters, the retry succeeds without performing any further actions. If you retry
   * 				a successful request using the same client token, but one or more of the parameters
   * 				are different, other than the Region or Availability Zone, the retry fails with an
   * 				IdempotentParameterMismatch error.</p>
   *          </note>
   */
  ClientToken?: string;
}

/**
 * @public
 */
export interface StartResourceEvaluationResponse {
  /**
   * @public
   * <p>A
   * 			unique ResourceEvaluationId that is associated with a single execution.</p>
   */
  ResourceEvaluationId?: string;
}

/**
 * @public
 * <p>The input for the <a>StopConfigurationRecorder</a> action.</p>
 */
export interface StopConfigurationRecorderRequest {
  /**
   * @public
   * <p>The name of the recorder object that records each configuration change made to the resources.</p>
   */
  ConfigurationRecorderName: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that identifies the resource for which to list the tags. Currently, the supported resources are <code>ConfigRule</code>, <code>ConfigurationAggregator</code> and <code>AggregatorAuthorization</code>.</p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>An array of tag object.</p>
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that identifies the resource for which to list the tags. Currently, the supported resources are <code>ConfigRule</code>, <code>ConfigurationAggregator</code> and <code>AggregatorAuthorization</code>.</p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>The keys of the tags to be removed.</p>
   */
  TagKeys: string[] | undefined;
}
