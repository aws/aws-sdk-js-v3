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
  TemplateSSMDocumentDetails,
} from "./models_0";

/**
 * <p>The tags for the resource. The metadata that you apply to a resource to help you categorize and organize them.
 * 			Each tag consists of a key and an optional value, both of which you define.
 * 			Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.</p>
 * @public
 */
export interface Tag {
  /**
   * <p>One part of a key-value pair that make up a tag. A key is a general label that acts like a category for more specific tag values.</p>
   * @public
   */
  Key?: string;

  /**
   * <p>The optional part of a key-value pair that make up a tag. A value acts as a descriptor within a tag category (key).</p>
   * @public
   */
  Value?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The tags for the resource.</p>
   * @public
   */
  Tags?: Tag[];

  /**
   * <p>The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response. </p>
   * @public
   */
  NextToken?: string;
}

/**
 * <p>You have reached the limit of active custom resource types in your account. There is a limit of 100,000.
 * 			Delete unused resources using <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteResourceConfig.html">DeleteResourceConfig</a>
 *             <code></code>.</p>
 * @public
 */
export class MaxActiveResourcesExceededException extends __BaseException {
  readonly name: "MaxActiveResourcesExceededException" = "MaxActiveResourcesExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MaxActiveResourcesExceededException, __BaseException>) {
    super({
      name: "MaxActiveResourcesExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MaxActiveResourcesExceededException.prototype);
  }
}

/**
 * <p>Failed to add the Config rule because the account already
 * 			contains the maximum number of 150 rules. Consider deleting any
 * 			deactivated rules before you add new rules.</p>
 * @public
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
 * <p>You have reached the limit of the number of configuration recorders you can
 * 			create.</p>
 * @public
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
 * <p>You have reached the limit of the number of conformance packs you can create in an account. For more information, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/configlimits.html">
 *                <b>Service Limits</b>
 *             </a> in the <i>Config Developer Guide</i>.</p>
 * @public
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
 * <p>You have reached the limit of the number of delivery channels
 * 			you can create.</p>
 * @public
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
 * <p>You have reached the limit of the number of organization Config rules you can create. For more information, see see <a href="https://docs.aws.amazon.com/config/latest/developerguide/configlimits.html">
 *                <b>Service Limits</b>
 *             </a> in the <i>Config Developer Guide</i>.</p>
 * @public
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
 * <p>You have reached the limit of the number of organization conformance packs you can create in an account. For more information, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/configlimits.html">
 *                <b>Service Limits</b>
 *             </a> in the <i>Config Developer Guide</i>.</p>
 * @public
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
 * <p>Failed to add the retention configuration because a retention configuration with that name already exists.</p>
 * @public
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
 * <p>There is no delivery channel available to record
 * 			configurations.</p>
 * @public
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
 * <p>Organization is no longer available.</p>
 * @public
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
 * <p>The specified Amazon S3 bucket does not exist.</p>
 * @public
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
 * <p>Config resource cannot be created because your organization does not have all features enabled.</p>
 * @public
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
 * <p>You have specified a template that is not valid or supported.</p>
 * @public
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
 * <p>An
 * 			object that specifies metadata for your organization's Config Custom Policy rule. The metadata includes the runtime system in use, which accounts have
 * 			debug logging enabled, and other custom rule metadata, such as resource type, resource
 * 			ID of Amazon Web Services resource, and organization trigger types that initiate Config to evaluate Amazon Web Services resources against a rule.</p>
 * @public
 */
export interface OrganizationCustomPolicyRuleMetadata {
  /**
   * <p>The description that you provide for your organization Config Custom Policy rule.</p>
   * @public
   */
  Description?: string;

  /**
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
   * @public
   */
  OrganizationConfigRuleTriggerTypes?: OrganizationConfigRuleTriggerTypeNoSN[];

  /**
   * <p>A string, in JSON format, that is passed to your organization Config Custom Policy rule.</p>
   * @public
   */
  InputParameters?: string;

  /**
   * <p>The maximum frequency with which Config runs evaluations for a rule. Your
   * 			Config Custom Policy rule is triggered when Config delivers
   * 			the configuration snapshot. For more information, see <a>ConfigSnapshotDeliveryProperties</a>.</p>
   * @public
   */
  MaximumExecutionFrequency?: MaximumExecutionFrequency;

  /**
   * <p>The type of the Amazon Web Services resource that was evaluated.</p>
   * @public
   */
  ResourceTypesScope?: string[];

  /**
   * <p>The ID of the Amazon Web Services resource that was evaluated.</p>
   * @public
   */
  ResourceIdScope?: string;

  /**
   * <p>One part of a key-value pair that make up a tag. A key is a general label that acts like a category for more specific tag values.</p>
   * @public
   */
  TagKeyScope?: string;

  /**
   * <p>The optional part of a key-value pair that make up a tag. A value acts as a descriptor within a tag category (key).</p>
   * @public
   */
  TagValueScope?: string;

  /**
   * <p>The runtime system for your organization Config Custom Policy rules. Guard is a policy-as-code language that allows you to write policies that are enforced by Config Custom Policy rules. For more information about Guard, see the <a href="https://github.com/aws-cloudformation/cloudformation-guard">Guard GitHub
   * 			Repository</a>.</p>
   * @public
   */
  PolicyRuntime: string | undefined;

  /**
   * <p>The policy definition containing the logic for your organization Config Custom Policy rule.</p>
   * @public
   */
  PolicyText: string | undefined;

  /**
   * <p>A list of accounts that you can enable debug logging for your organization Config Custom Policy rule. List is null when debug logging is enabled for all accounts.</p>
   * @public
   */
  DebugLogDeliveryAccounts?: string[];
}

/**
 * @public
 */
export interface PutAggregationAuthorizationRequest {
  /**
   * <p>The 12-digit account ID of the account authorized to aggregate data.</p>
   * @public
   */
  AuthorizedAccountId: string | undefined;

  /**
   * <p>The region authorized to collect aggregated data.</p>
   * @public
   */
  AuthorizedAwsRegion: string | undefined;

  /**
   * <p>An array of tag object.</p>
   * @public
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface PutAggregationAuthorizationResponse {
  /**
   * <p>Returns an AggregationAuthorization object.
   *
   * 		</p>
   * @public
   */
  AggregationAuthorization?: AggregationAuthorization;
}

/**
 * @public
 */
export interface PutConfigRuleRequest {
  /**
   * <p>The rule that you want to add to your account.</p>
   * @public
   */
  ConfigRule: ConfigRule | undefined;

  /**
   * <p>An array of tag object.</p>
   * @public
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface PutConfigurationAggregatorRequest {
  /**
   * <p>The name of the configuration aggregator.</p>
   * @public
   */
  ConfigurationAggregatorName: string | undefined;

  /**
   * <p>A list of AccountAggregationSource object.
   *
   * 		</p>
   * @public
   */
  AccountAggregationSources?: AccountAggregationSource[];

  /**
   * <p>An OrganizationAggregationSource object.</p>
   * @public
   */
  OrganizationAggregationSource?: OrganizationAggregationSource;

  /**
   * <p>An array of tag object.</p>
   * @public
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface PutConfigurationAggregatorResponse {
  /**
   * <p>Returns a ConfigurationAggregator object.</p>
   * @public
   */
  ConfigurationAggregator?: ConfigurationAggregator;
}

/**
 * <p>The input for the <a>PutConfigurationRecorder</a>
 * 			action.</p>
 * @public
 */
export interface PutConfigurationRecorderRequest {
  /**
   * <p>An object for the configuration recorder to record configuration changes for specified resource types.</p>
   * @public
   */
  ConfigurationRecorder: ConfigurationRecorder | undefined;
}

/**
 * @public
 */
export interface PutConformancePackRequest {
  /**
   * <p>The unique name of the conformance pack you want to deploy.</p>
   * @public
   */
  ConformancePackName: string | undefined;

  /**
   * <p>The location of the file containing the template body (<code>s3://bucketname/prefix</code>). The uri must point to a conformance pack template (max size: 300 KB) that is located in an Amazon S3 bucket in the same Region as the conformance pack. </p>
   *          <note>
   *             <p>You must have access to read Amazon S3 bucket.
   * 			In addition, in order to ensure a successful deployment, the template object must not be in an <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-class-intro.html">archived storage class</a> if this parameter is passed.</p>
   *          </note>
   * @public
   */
  TemplateS3Uri?: string;

  /**
   * <p>A string containing the full conformance pack template body. The structure containing the template body has a minimum length of 1 byte and a maximum length of 51,200 bytes.</p>
   *          <note>
   *             <p>You can use a YAML template with two resource types: Config rule (<code>AWS::Config::ConfigRule</code>) and remediation action (<code>AWS::Config::RemediationConfiguration</code>).</p>
   *          </note>
   * @public
   */
  TemplateBody?: string;

  /**
   * <p>The name of the Amazon S3 bucket where Config stores conformance pack templates.</p>
   *          <note>
   *             <p>This field is optional.</p>
   *          </note>
   * @public
   */
  DeliveryS3Bucket?: string;

  /**
   * <p>The prefix for the Amazon S3 bucket. </p>
   *          <note>
   *             <p>This field is optional.</p>
   *          </note>
   * @public
   */
  DeliveryS3KeyPrefix?: string;

  /**
   * <p>A list of <code>ConformancePackInputParameter</code> objects.</p>
   * @public
   */
  ConformancePackInputParameters?: ConformancePackInputParameter[];

  /**
   * <p>An object of type <code>TemplateSSMDocumentDetails</code>, which contains the name or the Amazon Resource Name (ARN) of the Amazon Web Services Systems Manager document (SSM document) and the version of the SSM document that is used to create a conformance pack.</p>
   * @public
   */
  TemplateSSMDocumentDetails?: TemplateSSMDocumentDetails;
}

/**
 * @public
 */
export interface PutConformancePackResponse {
  /**
   * <p>ARN of the conformance pack.</p>
   * @public
   */
  ConformancePackArn?: string;
}

/**
 * <p>The input for the <a>PutDeliveryChannel</a>
 * 			action.</p>
 * @public
 */
export interface PutDeliveryChannelRequest {
  /**
   * <p>The configuration delivery channel object that delivers the
   * 			configuration information to an Amazon S3 bucket and to an Amazon
   * 			SNS topic.</p>
   * @public
   */
  DeliveryChannel: DeliveryChannel | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface PutEvaluationsRequest {
  /**
   * <p>The assessments that the Lambda function performs. Each
   * 			evaluation identifies an Amazon Web Services resource and indicates whether it
   * 			complies with the Config rule that invokes the Lambda
   * 			function.</p>
   * @public
   */
  Evaluations?: Evaluation[];

  /**
   * <p>An encrypted token that associates an evaluation with an Config rule. Identifies the rule and the event that triggered the
   * 			evaluation.</p>
   * @public
   */
  ResultToken: string | undefined;

  /**
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
   * @public
   */
  TestMode?: boolean;
}

/**
 * <p></p>
 * @public
 */
export interface PutEvaluationsResponse {
  /**
   * <p>Requests that failed because of a client or server
   * 			error.</p>
   * @public
   */
  FailedEvaluations?: Evaluation[];
}

/**
 * @public
 */
export interface PutExternalEvaluationRequest {
  /**
   * <p>The name of the Config rule.</p>
   * @public
   */
  ConfigRuleName: string | undefined;

  /**
   * <p>An <code>ExternalEvaluation</code> object that provides details about compliance.</p>
   * @public
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
   * <p>The name that you assign to an organization Config rule.</p>
   * @public
   */
  OrganizationConfigRuleName: string | undefined;

  /**
   * <p>An <code>OrganizationManagedRuleMetadata</code> object. This object specifies organization
   * 			managed rule metadata such as resource type and ID of Amazon Web Services resource along with the rule identifier.
   * 			It also provides the frequency with which you want Config to run evaluations for the rule if the trigger type is periodic.</p>
   * @public
   */
  OrganizationManagedRuleMetadata?: OrganizationManagedRuleMetadata;

  /**
   * <p>An <code>OrganizationCustomRuleMetadata</code> object. This object specifies organization custom rule metadata such as resource type,
   * 			resource ID of Amazon Web Services resource, Lambda function ARN, and organization trigger types that trigger Config to evaluate your Amazon Web Services resources against a rule.
   * 			It also provides the frequency with which you want Config to run evaluations for the rule if the trigger type is periodic.</p>
   * @public
   */
  OrganizationCustomRuleMetadata?: OrganizationCustomRuleMetadata;

  /**
   * <p>A comma-separated list of accounts that you want to exclude from an organization Config rule.</p>
   * @public
   */
  ExcludedAccounts?: string[];

  /**
   * <p>An <code>OrganizationCustomPolicyRuleMetadata</code> object. This object specifies metadata for your organization's Config Custom Policy rule. The metadata includes the runtime system in use, which accounts have debug
   * 			logging enabled, and other custom rule metadata, such as resource type, resource ID of
   * 			Amazon Web Services resource, and organization trigger types that initiate Config to evaluate Amazon Web Services resources against a rule.</p>
   * @public
   */
  OrganizationCustomPolicyRuleMetadata?: OrganizationCustomPolicyRuleMetadata;
}

/**
 * @public
 */
export interface PutOrganizationConfigRuleResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of an organization Config rule.</p>
   * @public
   */
  OrganizationConfigRuleArn?: string;
}

/**
 * @public
 */
export interface PutOrganizationConformancePackRequest {
  /**
   * <p>Name of the organization conformance pack you want to create.</p>
   * @public
   */
  OrganizationConformancePackName: string | undefined;

  /**
   * <p>Location of file containing the template body. The uri must point to the conformance pack template
   * 			(max size: 300 KB).</p>
   *          <note>
   *             <p>You must have access to read Amazon S3 bucket.
   * 			In addition, in order to ensure a successful deployment, the template object must not be in an <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-class-intro.html">archived storage class</a> if this parameter is passed.</p>
   *          </note>
   * @public
   */
  TemplateS3Uri?: string;

  /**
   * <p>A string containing full conformance pack template body. Structure containing the template body
   * 			with a minimum length of 1 byte and a maximum length of 51,200 bytes.</p>
   * @public
   */
  TemplateBody?: string;

  /**
   * <p>The name of the Amazon S3 bucket where Config stores conformance pack templates.</p>
   *          <note>
   *             <p>This field is optional. If used, it must be prefixed with <code>awsconfigconforms</code>.</p>
   *          </note>
   * @public
   */
  DeliveryS3Bucket?: string;

  /**
   * <p>The prefix for the Amazon S3 bucket.</p>
   *          <note>
   *             <p>This field is optional.</p>
   *          </note>
   * @public
   */
  DeliveryS3KeyPrefix?: string;

  /**
   * <p>A list of <code>ConformancePackInputParameter</code> objects.</p>
   * @public
   */
  ConformancePackInputParameters?: ConformancePackInputParameter[];

  /**
   * <p>A list of Amazon Web Services accounts to be excluded from an organization conformance pack while deploying a conformance pack.</p>
   * @public
   */
  ExcludedAccounts?: string[];
}

/**
 * @public
 */
export interface PutOrganizationConformancePackResponse {
  /**
   * <p>ARN of the organization conformance pack.</p>
   * @public
   */
  OrganizationConformancePackArn?: string;
}

/**
 * @public
 */
export interface PutRemediationConfigurationsRequest {
  /**
   * <p>A list of remediation configuration objects.</p>
   * @public
   */
  RemediationConfigurations: RemediationConfiguration[] | undefined;
}

/**
 * @public
 */
export interface PutRemediationConfigurationsResponse {
  /**
   * <p>Returns a list of failed remediation batch objects.</p>
   * @public
   */
  FailedBatches?: FailedRemediationBatch[];
}

/**
 * @public
 */
export interface PutRemediationExceptionsRequest {
  /**
   * <p>The name of the Config rule for which you want to create remediation exception.</p>
   * @public
   */
  ConfigRuleName: string | undefined;

  /**
   * <p>An exception list of resource exception keys to be processed with the current request. Config adds exception for each resource key. For example, Config adds 3 exceptions for 3 resource keys. </p>
   * @public
   */
  ResourceKeys: RemediationExceptionResourceKey[] | undefined;

  /**
   * <p>The message contains an explanation of the exception.</p>
   * @public
   */
  Message?: string;

  /**
   * <p>The exception is automatically deleted after the expiration date.</p>
   * @public
   */
  ExpirationTime?: Date;
}

/**
 * @public
 */
export interface PutRemediationExceptionsResponse {
  /**
   * <p>Returns a list of failed remediation exceptions batch objects. Each object in the batch consists of a list of failed items and failure messages.</p>
   * @public
   */
  FailedBatches?: FailedRemediationExceptionBatch[];
}

/**
 * @public
 */
export interface PutResourceConfigRequest {
  /**
   * <p>The type of the resource. The custom resource type must be registered with CloudFormation. </p>
   *          <note>
   *             <p>You cannot use the organization names “amzn”, “amazon”, “alexa”, “custom” with custom resource types. It is the first part of the ResourceType up to the first ::.</p>
   *          </note>
   * @public
   */
  ResourceType: string | undefined;

  /**
   * <p>Version of the schema registered for the ResourceType in CloudFormation.</p>
   * @public
   */
  SchemaVersionId: string | undefined;

  /**
   * <p>Unique identifier of the resource.</p>
   * @public
   */
  ResourceId: string | undefined;

  /**
   * <p>Name of the resource.</p>
   * @public
   */
  ResourceName?: string;

  /**
   * <p>The configuration object of the resource in valid JSON format. It must match the schema registered with CloudFormation.</p>
   *          <note>
   *             <p>The configuration JSON must not exceed 64 KB.</p>
   *          </note>
   * @public
   */
  Configuration: string | undefined;

  /**
   * <p>Tags associated with the resource.</p>
   *          <note>
   *             <p>This field is not to be confused with the Amazon Web Services-wide tag feature for Amazon Web Services resources.
   * 			Tags for <code>PutResourceConfig</code> are tags that you supply for the configuration items of your custom resources.</p>
   *          </note>
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface PutRetentionConfigurationRequest {
  /**
   * <p>Number of days Config stores your historical
   * 			information.</p>
   *          <note>
   *             <p>Currently, only applicable to the configuration item
   * 				history.</p>
   *          </note>
   * @public
   */
  RetentionPeriodInDays: number | undefined;
}

/**
 * @public
 */
export interface PutRetentionConfigurationResponse {
  /**
   * <p>Returns a retention configuration object.</p>
   * @public
   */
  RetentionConfiguration?: RetentionConfiguration;
}

/**
 * @public
 */
export interface PutStoredQueryRequest {
  /**
   * <p>A list of <code>StoredQuery</code> objects.
   * 			The mandatory fields are <code>QueryName</code> and <code>Expression</code>.</p>
   *          <note>
   *             <p>When you are creating a query, you must provide a query name and an expression.
   * 			When you are updating a query, you must provide a query name but updating the description is optional.</p>
   *          </note>
   * @public
   */
  StoredQuery: StoredQuery | undefined;

  /**
   * <p>A list of <code>Tags</code> object.</p>
   * @public
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface PutStoredQueryResponse {
  /**
   * <p>Amazon Resource Name (ARN) of the query.
   * 			For example, arn:partition:service:region:account-id:resource-type/resource-name/resource-id.</p>
   * @public
   */
  QueryArn?: string;
}

/**
 * <p>Two users are trying to modify the same query at the same time. Wait for a moment and try again.</p>
 * @public
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
 *             </a> in the <i>Config Developer Guide</i>.</p>
 * @public
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
 * @public
 */
export interface QueryInfo {
  /**
   * <p>Returns a <code>FieldInfo</code> object.</p>
   * @public
   */
  SelectFields?: FieldInfo[];
}

/**
 * @public
 */
export interface SelectAggregateResourceConfigRequest {
  /**
   * <p>The SQL query SELECT command. </p>
   * @public
   */
  Expression: string | undefined;

  /**
   * <p>The name of the configuration aggregator.</p>
   * @public
   */
  ConfigurationAggregatorName: string | undefined;

  /**
   * <p>The maximum number of query results returned on each page. </p>
   * @public
   */
  Limit?: number;

  /**
   * <p>The maximum number of query results returned on each page. Config also allows the Limit request parameter.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The nextToken string returned in a previous request that you use to request the next page of results in a paginated response. </p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface SelectAggregateResourceConfigResponse {
  /**
   * <p>Returns the results for the SQL query.</p>
   * @public
   */
  Results?: string[];

  /**
   * <p>Details about the query.</p>
   * @public
   */
  QueryInfo?: QueryInfo;

  /**
   * <p>The nextToken string returned in a previous request that you use to request the next page of results in a paginated response. </p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface SelectResourceConfigRequest {
  /**
   * <p>The SQL query <code>SELECT</code> command.</p>
   * @public
   */
  Expression: string | undefined;

  /**
   * <p>The maximum number of query results returned on each page. </p>
   * @public
   */
  Limit?: number;

  /**
   * <p>The <code>nextToken</code> string returned in a previous request that you use to request the next page of results in a paginated response. </p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface SelectResourceConfigResponse {
  /**
   * <p>Returns the results for the SQL query.</p>
   * @public
   */
  Results?: string[];

  /**
   * <p>Returns the <code>QueryInfo</code> object.</p>
   * @public
   */
  QueryInfo?: QueryInfo;

  /**
   * <p>The <code>nextToken</code> string returned in a previous request that you use to request the next page of results in a paginated response. </p>
   * @public
   */
  NextToken?: string;
}

/**
 * <p></p>
 * @public
 */
export interface StartConfigRulesEvaluationRequest {
  /**
   * <p>The list of names of Config rules that you want to run
   * 			evaluations for.</p>
   * @public
   */
  ConfigRuleNames?: string[];
}

/**
 * <p>The output when you start the evaluation for the specified Config rule.</p>
 * @public
 */
export interface StartConfigRulesEvaluationResponse {}

/**
 * <p>The input for the <a>StartConfigurationRecorder</a>
 * 			action.</p>
 * @public
 */
export interface StartConfigurationRecorderRequest {
  /**
   * <p>The name of the recorder object that records each configuration
   * 			change made to the resources.</p>
   * @public
   */
  ConfigurationRecorderName: string | undefined;
}

/**
 * @public
 */
export interface StartRemediationExecutionRequest {
  /**
   * <p>The list of names of Config rules that you want to run remediation execution for.</p>
   * @public
   */
  ConfigRuleName: string | undefined;

  /**
   * <p>A list of resource keys to be processed with the current request. Each element in the list consists of the resource type and resource ID. </p>
   * @public
   */
  ResourceKeys: ResourceKey[] | undefined;
}

/**
 * @public
 */
export interface StartRemediationExecutionResponse {
  /**
   * <p>Returns a failure message. For example, the resource is already compliant.</p>
   * @public
   */
  FailureMessage?: string;

  /**
   * <p>For resources that have failed to start execution, the API returns a resource key object.</p>
   * @public
   */
  FailedItems?: ResourceKey[];
}

/**
 * @public
 */
export interface StartResourceEvaluationRequest {
  /**
   * <p>Returns a <code>ResourceDetails</code> object.</p>
   * @public
   */
  ResourceDetails: ResourceDetails | undefined;

  /**
   * <p>Returns an <code>EvaluationContext</code> object.</p>
   * @public
   */
  EvaluationContext?: EvaluationContext;

  /**
   * <p>The mode of an evaluation. The valid values for this API are <code>DETECTIVE</code> and <code>PROACTIVE</code>.</p>
   * @public
   */
  EvaluationMode: EvaluationMode | undefined;

  /**
   * <p>The timeout for an evaluation. The default is 900 seconds. You cannot specify a number greater than 3600. If you specify 0, Config uses the default.</p>
   * @public
   */
  EvaluationTimeout?: number;

  /**
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
   * @public
   */
  ClientToken?: string;
}

/**
 * @public
 */
export interface StartResourceEvaluationResponse {
  /**
   * <p>A
   * 			unique ResourceEvaluationId that is associated with a single execution.</p>
   * @public
   */
  ResourceEvaluationId?: string;
}

/**
 * <p>The input for the <a>StopConfigurationRecorder</a> action.</p>
 * @public
 */
export interface StopConfigurationRecorderRequest {
  /**
   * <p>The name of the recorder object that records each configuration change made to the resources.</p>
   * @public
   */
  ConfigurationRecorderName: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the resource for which to list the tags. Currently, the supported resources are <code>ConfigRule</code>, <code>ConfigurationAggregator</code> and <code>AggregatorAuthorization</code>.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>An array of tag object.</p>
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the resource for which to list the tags. Currently, the supported resources are <code>ConfigRule</code>, <code>ConfigurationAggregator</code> and <code>AggregatorAuthorization</code>.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The keys of the tags to be removed.</p>
   * @public
   */
  TagKeys: string[] | undefined;
}
