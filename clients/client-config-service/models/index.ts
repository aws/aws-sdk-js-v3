import {
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>A collection of accounts and regions.</p>
 */
export interface AccountAggregationSource {
  __type?: "AccountAggregationSource";
  /**
   * <p>The 12-digit account ID of the account being aggregated.
   * 		</p>
   */
  AccountIds: Array<string> | undefined;

  /**
   * <p>If true, aggregate existing AWS Config regions and future
   * 			regions.</p>
   */
  AllAwsRegions?: boolean;

  /**
   * <p>The source regions being aggregated.</p>
   */
  AwsRegions?: Array<string>;
}

export namespace AccountAggregationSource {
  export function isa(o: any): o is AccountAggregationSource {
    return __isa(o, "AccountAggregationSource");
  }
}

/**
 * <p>Indicates whether an AWS Config rule is compliant based on
 * 			account ID, region, compliance, and rule name.</p>
 * 		       <p>A rule is compliant if all of the resources that the rule
 * 			evaluated comply with it. It is noncompliant if any of these
 * 			resources do not comply.</p>
 */
export interface AggregateComplianceByConfigRule {
  __type?: "AggregateComplianceByConfigRule";
  /**
   * <p>The 12-digit account ID of the source account.</p>
   */
  AccountId?: string;

  /**
   * <p>The source region from where the data is aggregated.</p>
   */
  AwsRegion?: string;

  /**
   * <p>Indicates whether an AWS resource or AWS Config rule is
   * 			compliant and provides the number of contributors that affect the
   * 			compliance.</p>
   */
  Compliance?: Compliance;

  /**
   * <p>The name of the AWS Config rule.</p>
   */
  ConfigRuleName?: string;
}

export namespace AggregateComplianceByConfigRule {
  export function isa(o: any): o is AggregateComplianceByConfigRule {
    return __isa(o, "AggregateComplianceByConfigRule");
  }
}

/**
 * <p>Returns the number of compliant and noncompliant rules for one
 * 			or more accounts and regions in an aggregator.</p>
 */
export interface AggregateComplianceCount {
  __type?: "AggregateComplianceCount";
  /**
   * <p>The number of compliant and noncompliant AWS Config
   * 			rules.</p>
   */
  ComplianceSummary?: ComplianceSummary;

  /**
   * <p>The 12-digit account ID or region based on the GroupByKey
   * 			value.</p>
   */
  GroupName?: string;
}

export namespace AggregateComplianceCount {
  export function isa(o: any): o is AggregateComplianceCount {
    return __isa(o, "AggregateComplianceCount");
  }
}

/**
 * <p>The details of an AWS Config evaluation for an account ID and
 * 			region in an aggregator. Provides the AWS resource that was
 * 			evaluated, the compliance of the resource, related time stamps, and
 * 			supplementary information. </p>
 */
export interface AggregateEvaluationResult {
  __type?: "AggregateEvaluationResult";
  /**
   * <p>The 12-digit account ID of the source account.</p>
   */
  AccountId?: string;

  /**
   * <p>Supplementary information about how the agrregate evaluation
   * 			determined the compliance.</p>
   */
  Annotation?: string;

  /**
   * <p>The source region from where the data is aggregated.</p>
   */
  AwsRegion?: string;

  /**
   * <p>The resource compliance status.</p>
   * 		       <p>For the <code>AggregationEvaluationResult</code> data type, AWS
   * 			Config supports only the <code>COMPLIANT</code> and
   * 				<code>NON_COMPLIANT</code>. AWS Config does not support the
   * 				<code>NOT_APPLICABLE</code> and <code>INSUFFICIENT_DATA</code>
   * 			value.</p>
   */
  ComplianceType?: ComplianceType | string;

  /**
   * <p>The time when the AWS Config rule evaluated the AWS
   * 			resource.</p>
   */
  ConfigRuleInvokedTime?: Date;

  /**
   * <p>Uniquely identifies the evaluation result.</p>
   */
  EvaluationResultIdentifier?: EvaluationResultIdentifier;

  /**
   * <p>The time when AWS Config recorded the aggregate evaluation
   * 			result.</p>
   */
  ResultRecordedTime?: Date;
}

export namespace AggregateEvaluationResult {
  export function isa(o: any): o is AggregateEvaluationResult {
    return __isa(o, "AggregateEvaluationResult");
  }
}

/**
 * <p>The details that identify a resource that is collected by AWS Config aggregator, including the resource type, ID, (if available) the custom resource name, the source account, and source region.</p>
 */
export interface AggregateResourceIdentifier {
  __type?: "AggregateResourceIdentifier";
  /**
   * <p>The ID of the AWS resource.</p>
   */
  ResourceId: string | undefined;

  /**
   * <p>The name of the AWS resource.</p>
   */
  ResourceName?: string;

  /**
   * <p>The type of the AWS resource.</p>
   */
  ResourceType: ResourceType | string | undefined;

  /**
   * <p>The 12-digit account ID of the source account.</p>
   */
  SourceAccountId: string | undefined;

  /**
   * <p>The source region where data is aggregated.</p>
   */
  SourceRegion: string | undefined;
}

export namespace AggregateResourceIdentifier {
  export function isa(o: any): o is AggregateResourceIdentifier {
    return __isa(o, "AggregateResourceIdentifier");
  }
}

/**
 * <p>The current sync status between the source and the aggregator
 * 			account.</p>
 */
export interface AggregatedSourceStatus {
  __type?: "AggregatedSourceStatus";
  /**
   * <p>The region authorized to collect aggregated data.</p>
   */
  AwsRegion?: string;

  /**
   * <p>The error code that AWS Config returned when the source account
   * 			aggregation last failed.</p>
   */
  LastErrorCode?: string;

  /**
   * <p>The message indicating that the source account aggregation
   * 			failed due to an error.</p>
   */
  LastErrorMessage?: string;

  /**
   * <p>Filters the last updated status type.</p>
   * 		       <ul>
   *             <li>
   * 				           <p>Valid value FAILED indicates errors while moving
   * 					data.</p>
   * 			         </li>
   *             <li>
   * 				           <p>Valid value SUCCEEDED indicates the data was
   * 					successfully moved.</p>
   * 			         </li>
   *             <li>
   * 				           <p>Valid value OUTDATED indicates the data is not the most
   * 					recent.</p>
   * 			         </li>
   *          </ul>
   */
  LastUpdateStatus?: AggregatedSourceStatusType | string;

  /**
   * <p>The time of the last update.</p>
   */
  LastUpdateTime?: Date;

  /**
   * <p>The source account ID or an organization.</p>
   */
  SourceId?: string;

  /**
   * <p>The source account or an organization.</p>
   */
  SourceType?: AggregatedSourceType | string;
}

export namespace AggregatedSourceStatus {
  export function isa(o: any): o is AggregatedSourceStatus {
    return __isa(o, "AggregatedSourceStatus");
  }
}

export enum AggregatedSourceStatusType {
  FAILED = "FAILED",
  OUTDATED = "OUTDATED",
  SUCCEEDED = "SUCCEEDED"
}

export enum AggregatedSourceType {
  ACCOUNT = "ACCOUNT",
  ORGANIZATION = "ORGANIZATION"
}

/**
 * <p>An object that represents the authorizations granted to
 * 			aggregator accounts and regions.</p>
 */
export interface AggregationAuthorization {
  __type?: "AggregationAuthorization";
  /**
   * <p>The Amazon Resource Name (ARN) of the aggregation
   * 			object.</p>
   */
  AggregationAuthorizationArn?: string;

  /**
   * <p>The 12-digit account ID of the account authorized to aggregate
   * 			data.</p>
   */
  AuthorizedAccountId?: string;

  /**
   * <p>The region authorized to collect aggregated data.</p>
   */
  AuthorizedAwsRegion?: string;

  /**
   * <p>The time stamp when the aggregation authorization was
   * 			created.</p>
   */
  CreationTime?: Date;
}

export namespace AggregationAuthorization {
  export function isa(o: any): o is AggregationAuthorization {
    return __isa(o, "AggregationAuthorization");
  }
}

/**
 * <p>The detailed configuration of a specified resource.</p>
 */
export interface BaseConfigurationItem {
  __type?: "BaseConfigurationItem";
  /**
   * <p>The 12-digit AWS account ID associated with the resource.</p>
   */
  accountId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  arn?: string;

  /**
   * <p>The Availability Zone associated with the resource.</p>
   */
  availabilityZone?: string;

  /**
   * <p>The region where the resource resides.</p>
   */
  awsRegion?: string;

  /**
   * <p>The description of the resource configuration.</p>
   */
  configuration?: string;

  /**
   * <p>The time when the configuration recording was initiated.</p>
   */
  configurationItemCaptureTime?: Date;

  /**
   * <p>The configuration item status.</p>
   */
  configurationItemStatus?: ConfigurationItemStatus | string;

  /**
   * <p>An identifier that indicates the ordering of the configuration
   * 			items of a resource.</p>
   */
  configurationStateId?: string;

  /**
   * <p>The time stamp when the resource was created.</p>
   */
  resourceCreationTime?: Date;

  /**
   * <p>The ID of the resource (for example., sg-xxxxxx).</p>
   */
  resourceId?: string;

  /**
   * <p>The custom name of the resource, if available.</p>
   */
  resourceName?: string;

  /**
   * <p>The type of AWS resource.</p>
   */
  resourceType?: ResourceType | string;

  /**
   * <p>Configuration attributes that AWS Config returns for certain
   * 			resource types to supplement the information returned for the
   * 			configuration parameter.</p>
   */
  supplementaryConfiguration?: { [key: string]: string };

  /**
   * <p>The version number of the resource configuration.</p>
   */
  version?: string;
}

export namespace BaseConfigurationItem {
  export function isa(o: any): o is BaseConfigurationItem {
    return __isa(o, "BaseConfigurationItem");
  }
}

export interface BatchGetAggregateResourceConfigRequest {
  __type?: "BatchGetAggregateResourceConfigRequest";
  /**
   * <p>The name of the configuration aggregator.</p>
   */
  ConfigurationAggregatorName: string | undefined;

  /**
   * <p>A list of aggregate ResourceIdentifiers objects. </p>
   */
  ResourceIdentifiers: Array<AggregateResourceIdentifier> | undefined;
}

export namespace BatchGetAggregateResourceConfigRequest {
  export function isa(o: any): o is BatchGetAggregateResourceConfigRequest {
    return __isa(o, "BatchGetAggregateResourceConfigRequest");
  }
}

export interface BatchGetAggregateResourceConfigResponse {
  __type?: "BatchGetAggregateResourceConfigResponse";
  /**
   * <p>A list that contains the current configuration of one or more resources.</p>
   */
  BaseConfigurationItems?: Array<BaseConfigurationItem>;

  /**
   * <p>A list of resource identifiers that were not processed with current scope. The list is empty if all the resources are processed.</p>
   */
  UnprocessedResourceIdentifiers?: Array<AggregateResourceIdentifier>;
}

export namespace BatchGetAggregateResourceConfigResponse {
  export function isa(o: any): o is BatchGetAggregateResourceConfigResponse {
    return __isa(o, "BatchGetAggregateResourceConfigResponse");
  }
}

export interface BatchGetResourceConfigRequest {
  __type?: "BatchGetResourceConfigRequest";
  /**
   * <p>A list of resource keys to be processed with the current
   * 			request. Each element in the list consists of the resource type and
   * 			resource ID.</p>
   */
  resourceKeys: Array<ResourceKey> | undefined;
}

export namespace BatchGetResourceConfigRequest {
  export function isa(o: any): o is BatchGetResourceConfigRequest {
    return __isa(o, "BatchGetResourceConfigRequest");
  }
}

export interface BatchGetResourceConfigResponse {
  __type?: "BatchGetResourceConfigResponse";
  /**
   * <p>A list that contains the current configuration of one or more
   * 			resources.</p>
   */
  baseConfigurationItems?: Array<BaseConfigurationItem>;

  /**
   * <p>A list of resource keys that were not processed with the
   * 			current response. The unprocessesResourceKeys value is in the same
   * 			form as ResourceKeys, so the value can be directly provided to a
   * 			subsequent BatchGetResourceConfig operation.
   *
   * 			If there are no unprocessed resource keys, the response contains an
   * 			empty unprocessedResourceKeys list. </p>
   */
  unprocessedResourceKeys?: Array<ResourceKey>;
}

export namespace BatchGetResourceConfigResponse {
  export function isa(o: any): o is BatchGetResourceConfigResponse {
    return __isa(o, "BatchGetResourceConfigResponse");
  }
}

export enum ChronologicalOrder {
  Forward = "Forward",
  Reverse = "Reverse"
}

/**
 * <p>Indicates whether an AWS resource or AWS Config rule is
 * 			compliant and provides the number of contributors that affect the
 * 			compliance.</p>
 */
export interface Compliance {
  __type?: "Compliance";
  /**
   * <p>The number of AWS resources or AWS Config rules that cause a
   * 			result of <code>NON_COMPLIANT</code>, up to a maximum
   * 			number.</p>
   */
  ComplianceContributorCount?: ComplianceContributorCount;

  /**
   * <p>Indicates whether an AWS resource or AWS Config rule is
   * 			compliant.</p>
   * 		       <p>A resource is compliant if it complies with all of the AWS
   * 			Config rules that evaluate it. A resource is noncompliant if it does
   * 			not comply with one or more of these rules.</p>
   * 		       <p>A rule is compliant if all of the resources that the rule
   * 			evaluates comply with it. A rule is noncompliant if any of these
   * 			resources do not comply.</p>
   * 		       <p>AWS Config returns the <code>INSUFFICIENT_DATA</code> value
   * 			when no evaluation results are available for the AWS resource or AWS
   * 			Config rule.</p>
   * 		       <p>For the <code>Compliance</code> data type, AWS Config supports
   * 			only <code>COMPLIANT</code>, <code>NON_COMPLIANT</code>, and
   * 				<code>INSUFFICIENT_DATA</code> values. AWS Config does not
   * 			support the <code>NOT_APPLICABLE</code> value for the
   * 				<code>Compliance</code> data type.</p>
   */
  ComplianceType?: ComplianceType | string;
}

export namespace Compliance {
  export function isa(o: any): o is Compliance {
    return __isa(o, "Compliance");
  }
}

/**
 * <p>Indicates whether an AWS Config rule is compliant. A rule is
 * 			compliant if all of the resources that the rule evaluated comply
 * 			with it. A rule is noncompliant if any of these resources do not
 * 			comply.</p>
 */
export interface ComplianceByConfigRule {
  __type?: "ComplianceByConfigRule";
  /**
   * <p>Indicates whether the AWS Config rule is compliant.</p>
   */
  Compliance?: Compliance;

  /**
   * <p>The name of the AWS Config rule.</p>
   */
  ConfigRuleName?: string;
}

export namespace ComplianceByConfigRule {
  export function isa(o: any): o is ComplianceByConfigRule {
    return __isa(o, "ComplianceByConfigRule");
  }
}

/**
 * <p>Indicates whether an AWS resource that is evaluated according
 * 			to one or more AWS Config rules is compliant. A resource is
 * 			compliant if it complies with all of the rules that evaluate it. A
 * 			resource is noncompliant if it does not comply with one or more of
 * 			these rules.</p>
 */
export interface ComplianceByResource {
  __type?: "ComplianceByResource";
  /**
   * <p>Indicates whether the AWS resource complies with all of the AWS
   * 			Config rules that evaluated it.</p>
   */
  Compliance?: Compliance;

  /**
   * <p>The ID of the AWS resource that was evaluated.</p>
   */
  ResourceId?: string;

  /**
   * <p>The type of the AWS resource that was evaluated.</p>
   */
  ResourceType?: string;
}

export namespace ComplianceByResource {
  export function isa(o: any): o is ComplianceByResource {
    return __isa(o, "ComplianceByResource");
  }
}

/**
 * <p>The number of AWS resources or AWS Config rules responsible for
 * 			the current compliance of the item, up to a maximum
 * 			number.</p>
 */
export interface ComplianceContributorCount {
  __type?: "ComplianceContributorCount";
  /**
   * <p>Indicates whether the maximum count is reached.</p>
   */
  CapExceeded?: boolean;

  /**
   * <p>The number of AWS resources or AWS Config rules responsible for
   * 			the current compliance of the item.</p>
   */
  CappedCount?: number;
}

export namespace ComplianceContributorCount {
  export function isa(o: any): o is ComplianceContributorCount {
    return __isa(o, "ComplianceContributorCount");
  }
}

/**
 * <p>The number of AWS Config rules or AWS resources that are
 * 			compliant and noncompliant.</p>
 */
export interface ComplianceSummary {
  __type?: "ComplianceSummary";
  /**
   * <p>The time that AWS Config created the compliance
   * 			summary.</p>
   */
  ComplianceSummaryTimestamp?: Date;

  /**
   * <p>The number of AWS Config rules or AWS resources that are
   * 			compliant, up to a maximum of 25 for rules and 100 for
   * 			resources.</p>
   */
  CompliantResourceCount?: ComplianceContributorCount;

  /**
   * <p>The number of AWS Config rules or AWS resources that are
   * 			noncompliant, up to a maximum of 25 for rules and 100 for
   * 			resources.</p>
   */
  NonCompliantResourceCount?: ComplianceContributorCount;
}

export namespace ComplianceSummary {
  export function isa(o: any): o is ComplianceSummary {
    return __isa(o, "ComplianceSummary");
  }
}

/**
 * <p>The number of AWS resources of a specific type that are
 * 			compliant or noncompliant, up to a maximum of 100 for
 * 			each.</p>
 */
export interface ComplianceSummaryByResourceType {
  __type?: "ComplianceSummaryByResourceType";
  /**
   * <p>The number of AWS resources that are compliant or noncompliant,
   * 			up to a maximum of 100 for each.</p>
   */
  ComplianceSummary?: ComplianceSummary;

  /**
   * <p>The type of AWS resource.</p>
   */
  ResourceType?: string;
}

export namespace ComplianceSummaryByResourceType {
  export function isa(o: any): o is ComplianceSummaryByResourceType {
    return __isa(o, "ComplianceSummaryByResourceType");
  }
}

export enum ComplianceType {
  Compliant = "COMPLIANT",
  Insufficient_Data = "INSUFFICIENT_DATA",
  Non_Compliant = "NON_COMPLIANT",
  Not_Applicable = "NOT_APPLICABLE"
}

/**
 * <p>Provides status of the delivery of the snapshot or the
 * 			configuration history to the specified Amazon S3 bucket. Also
 * 			provides the status of notifications about the Amazon S3 delivery to
 * 			the specified Amazon SNS topic.</p>
 */
export interface ConfigExportDeliveryInfo {
  __type?: "ConfigExportDeliveryInfo";
  /**
   * <p>The time of the last attempted delivery.</p>
   */
  lastAttemptTime?: Date;

  /**
   * <p>The error code from the last attempted delivery.</p>
   */
  lastErrorCode?: string;

  /**
   * <p>The error message from the last attempted delivery.</p>
   */
  lastErrorMessage?: string;

  /**
   * <p>Status of the last attempted delivery.</p>
   */
  lastStatus?: DeliveryStatus | string;

  /**
   * <p>The time of the last successful delivery.</p>
   */
  lastSuccessfulTime?: Date;

  /**
   * <p>The time that the next delivery occurs.</p>
   */
  nextDeliveryTime?: Date;
}

export namespace ConfigExportDeliveryInfo {
  export function isa(o: any): o is ConfigExportDeliveryInfo {
    return __isa(o, "ConfigExportDeliveryInfo");
  }
}

/**
 * <p>An AWS Config rule represents an AWS Lambda function that you
 * 			create for a custom rule or a predefined function for an AWS managed
 * 			rule. The function evaluates configuration items to assess whether
 * 			your AWS resources comply with your desired configurations. This
 * 			function can run when AWS Config detects a configuration change to
 * 			an AWS resource and at a periodic frequency that you choose (for
 * 			example, every 24 hours).</p>
 *
 * 		       <note>
 * 			         <p>You can use the AWS CLI and AWS SDKs if you want to create
 * 				a rule that triggers evaluations for your resources when AWS
 * 				Config delivers the configuration snapshot. For more
 * 				information, see <a>ConfigSnapshotDeliveryProperties</a>.</p>
 * 		       </note>
 * 		       <p>For more information about developing and using AWS Config
 * 			rules, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config.html">Evaluating AWS Resource Configurations with AWS Config</a>
 * 			in the <i>AWS Config Developer Guide</i>.</p>
 */
export interface ConfigRule {
  __type?: "ConfigRule";
  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Config
   * 			rule.</p>
   */
  ConfigRuleArn?: string;

  /**
   * <p>The ID of the AWS Config rule.</p>
   */
  ConfigRuleId?: string;

  /**
   * <p>The name that you assign to the AWS Config rule. The name is
   * 			required if you are adding a new rule.</p>
   */
  ConfigRuleName?: string;

  /**
   * <p>Indicates whether the AWS Config rule is active or is currently
   * 			being deleted by AWS Config. It can also indicate the evaluation
   * 			status for the AWS Config rule.</p>
   *
   * 		       <p>AWS Config sets the state of the rule to
   * 				<code>EVALUATING</code> temporarily after you use the
   * 				<code>StartConfigRulesEvaluation</code> request to evaluate your
   * 			resources against the AWS Config rule.</p>
   *
   * 		       <p>AWS Config sets the state of the rule to
   * 				<code>DELETING_RESULTS</code> temporarily after you use the
   * 				<code>DeleteEvaluationResults</code> request to delete the
   * 			current evaluation results for the AWS Config rule.</p>
   *
   * 		       <p>AWS Config temporarily sets the state of a rule to
   * 				<code>DELETING</code> after you use the
   * 				<code>DeleteConfigRule</code> request to delete the rule. After
   * 			AWS Config deletes the rule, the rule and all of its evaluations are
   * 			erased and are no longer available.</p>
   */
  ConfigRuleState?: ConfigRuleState | string;

  /**
   * <p>Service principal name of the service that created the
   * 			rule.</p>
   * 		       <note>
   * 			         <p>The field is populated only if the service linked rule is
   * 				created by a service. The field is empty if you create your own
   * 				rule.</p>
   * 		       </note>
   */
  CreatedBy?: string;

  /**
   * <p>The description that you provide for the AWS Config
   * 			rule.</p>
   */
  Description?: string;

  /**
   * <p>A string, in JSON format, that is passed to the AWS Config rule
   * 			Lambda function.</p>
   */
  InputParameters?: string;

  /**
   * <p>The maximum frequency with which AWS Config runs evaluations
   * 			for a rule. You can specify a value for
   * 				<code>MaximumExecutionFrequency</code> when:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>You are using an AWS managed rule that is triggered at
   * 					a periodic frequency.</p>
   * 			         </li>
   *             <li>
   * 				           <p>Your custom rule is triggered when AWS Config delivers
   * 					the configuration snapshot. For more information, see <a>ConfigSnapshotDeliveryProperties</a>.</p>
   * 			         </li>
   *          </ul>
   *
   *
   *
   * 		       <note>
   * 			         <p>By default, rules with a periodic trigger are evaluated
   * 				every 24 hours. To change the frequency, specify a valid value
   * 				for the <code>MaximumExecutionFrequency</code>
   * 				parameter.</p>
   * 		       </note>
   */
  MaximumExecutionFrequency?: MaximumExecutionFrequency | string;

  /**
   * <p>Defines which resources can trigger an evaluation for the rule.
   * 			The scope can include one or more resource types, a combination of
   * 			one resource type and one resource ID, or a combination of a tag key
   * 			and value. Specify a scope to constrain the resources that can
   * 			trigger an evaluation for the rule. If you do not specify a scope,
   * 			evaluations are triggered when any resource in the recording group
   * 			changes.</p>
   */
  Scope?: Scope;

  /**
   * <p>Provides the rule owner (AWS or customer), the rule identifier,
   * 			and the notifications that cause the function to evaluate your AWS
   * 			resources.</p>
   */
  Source: Source | undefined;
}

export namespace ConfigRule {
  export function isa(o: any): o is ConfigRule {
    return __isa(o, "ConfigRule");
  }
}

/**
 * <p>Filters the compliance results based on account ID, region,
 * 			compliance type, and rule name.</p>
 */
export interface ConfigRuleComplianceFilters {
  __type?: "ConfigRuleComplianceFilters";
  /**
   * <p>The 12-digit account ID of the source account.
   * 			</p>
   */
  AccountId?: string;

  /**
   * <p>The source region where the data is aggregated.
   * 			</p>
   */
  AwsRegion?: string;

  /**
   * <p>The rule compliance status.</p>
   * 		       <p>For the <code>ConfigRuleComplianceFilters</code> data type, AWS
   * 			Config supports only <code>COMPLIANT</code> and
   * 				<code>NON_COMPLIANT</code>. AWS Config does not support the
   * 				<code>NOT_APPLICABLE</code> and the
   * 				<code>INSUFFICIENT_DATA</code> values.</p>
   */
  ComplianceType?: ComplianceType | string;

  /**
   * <p>The name of the AWS Config rule.</p>
   */
  ConfigRuleName?: string;
}

export namespace ConfigRuleComplianceFilters {
  export function isa(o: any): o is ConfigRuleComplianceFilters {
    return __isa(o, "ConfigRuleComplianceFilters");
  }
}

/**
 * <p>Filters the results based on the account IDs and
 * 			regions.</p>
 */
export interface ConfigRuleComplianceSummaryFilters {
  __type?: "ConfigRuleComplianceSummaryFilters";
  /**
   * <p>The 12-digit account ID of the source account.</p>
   */
  AccountId?: string;

  /**
   * <p>The source region where the data is aggregated.</p>
   */
  AwsRegion?: string;
}

export namespace ConfigRuleComplianceSummaryFilters {
  export function isa(o: any): o is ConfigRuleComplianceSummaryFilters {
    return __isa(o, "ConfigRuleComplianceSummaryFilters");
  }
}

export enum ConfigRuleComplianceSummaryGroupKey {
  ACCOUNT_ID = "ACCOUNT_ID",
  AWS_REGION = "AWS_REGION"
}

/**
 * <p>Status information for your AWS managed Config rules. The
 * 			status includes information such as the last time the rule ran, the
 * 			last time it failed, and the related error for the last
 * 			failure.</p>
 * 		       <p>This action does not return status information about custom AWS
 * 			Config rules.</p>
 */
export interface ConfigRuleEvaluationStatus {
  __type?: "ConfigRuleEvaluationStatus";
  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Config
   * 			rule.</p>
   */
  ConfigRuleArn?: string;

  /**
   * <p>The ID of the AWS Config rule.</p>
   */
  ConfigRuleId?: string;

  /**
   * <p>The name of the AWS Config rule.</p>
   */
  ConfigRuleName?: string;

  /**
   * <p>The time that you first activated the AWS Config
   * 			rule.</p>
   */
  FirstActivatedTime?: Date;

  /**
   * <p>Indicates whether AWS Config has evaluated your resources
   * 			against the rule at least once.</p>
   * 		       <ul>
   *             <li>
   * 				           <p>
   * 					             <code>true</code> - AWS Config has evaluated your AWS
   * 					resources against the rule at least once.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   * 					             <code>false</code> - AWS Config has not once finished
   * 					evaluating your AWS resources against the rule.</p>
   * 			         </li>
   *          </ul>
   */
  FirstEvaluationStarted?: boolean;

  /**
   * <p>The error code that AWS Config returned when the rule last
   * 			failed.</p>
   */
  LastErrorCode?: string;

  /**
   * <p>The error message that AWS Config returned when the rule last
   * 			failed.</p>
   */
  LastErrorMessage?: string;

  /**
   * <p>The time that AWS Config last failed to evaluate your AWS
   * 			resources against the rule.</p>
   */
  LastFailedEvaluationTime?: Date;

  /**
   * <p>The time that AWS Config last failed to invoke the AWS Config
   * 			rule to evaluate your AWS resources.</p>
   */
  LastFailedInvocationTime?: Date;

  /**
   * <p>The time that AWS Config last successfully evaluated your AWS
   * 			resources against the rule.</p>
   */
  LastSuccessfulEvaluationTime?: Date;

  /**
   * <p>The time that AWS Config last successfully invoked the AWS
   * 			Config rule to evaluate your AWS resources.</p>
   */
  LastSuccessfulInvocationTime?: Date;
}

export namespace ConfigRuleEvaluationStatus {
  export function isa(o: any): o is ConfigRuleEvaluationStatus {
    return __isa(o, "ConfigRuleEvaluationStatus");
  }
}

export enum ConfigRuleState {
  ACTIVE = "ACTIVE",
  DELETING = "DELETING",
  DELETING_RESULTS = "DELETING_RESULTS",
  EVALUATING = "EVALUATING"
}

/**
 * <p>Provides options for how often AWS Config delivers
 * 			configuration snapshots to the Amazon S3 bucket in your delivery
 * 			channel.</p>
 *
 *
 *
 *
 * 		       <p>The frequency for a rule that triggers evaluations for your
 * 			resources when AWS Config delivers the configuration snapshot is set
 * 			by one of two values, depending on which is less frequent:</p>
 *
 * 		       <ul>
 *             <li>
 * 				           <p>The value for the <code>deliveryFrequency</code>
 * 					parameter within the delivery channel configuration, which
 * 					sets how often AWS Config delivers configuration snapshots.
 * 					This value also sets how often AWS Config invokes
 * 					evaluations for AWS Config rules.</p>
 * 			         </li>
 *             <li>
 * 				           <p>The value for the
 * 						<code>MaximumExecutionFrequency</code> parameter, which
 * 					sets the maximum frequency with which AWS Config invokes
 * 					evaluations for the rule. For more information, see <a>ConfigRule</a>.</p>
 * 			         </li>
 *          </ul>
 *
 * 		       <p>If the <code>deliveryFrequency</code> value is less frequent
 * 			than the <code>MaximumExecutionFrequency</code> value for a rule,
 * 			AWS Config invokes the rule only as often as the
 * 				<code>deliveryFrequency</code> value.</p>
 *
 * 		       <ol>
 *             <li>
 * 				           <p>For example, you want your rule to run evaluations when
 * 					AWS Config delivers the configuration snapshot.</p>
 * 			         </li>
 *             <li>
 * 				           <p>You specify the <code>MaximumExecutionFrequency</code>
 * 					value for <code>Six_Hours</code>. </p>
 * 			         </li>
 *             <li>
 * 				           <p>You then specify the delivery channel
 * 						<code>deliveryFrequency</code> value for
 * 						<code>TwentyFour_Hours</code>.</p>
 * 			         </li>
 *             <li>
 * 				           <p>Because the value for <code>deliveryFrequency</code> is
 * 					less frequent than <code>MaximumExecutionFrequency</code>,
 * 					AWS Config invokes evaluations for the rule every 24 hours.
 * 				</p>
 * 			         </li>
 *          </ol>
 *
 *
 * 		       <p>You should set the <code>MaximumExecutionFrequency</code> value
 * 			to be at least as frequent as the <code>deliveryFrequency</code>
 * 			value. You can view the <code>deliveryFrequency</code> value by
 * 			using the <code>DescribeDeliveryChannnels</code> action.</p>
 *
 * 		       <p>To update the <code>deliveryFrequency</code> with which AWS
 * 			Config delivers your configuration snapshots, use the
 * 				<code>PutDeliveryChannel</code> action.</p>
 */
export interface ConfigSnapshotDeliveryProperties {
  __type?: "ConfigSnapshotDeliveryProperties";
  /**
   * <p>The frequency with which AWS Config delivers configuration
   * 			snapshots.</p>
   */
  deliveryFrequency?: MaximumExecutionFrequency | string;
}

export namespace ConfigSnapshotDeliveryProperties {
  export function isa(o: any): o is ConfigSnapshotDeliveryProperties {
    return __isa(o, "ConfigSnapshotDeliveryProperties");
  }
}

/**
 * <p>A list that contains the status of the delivery of the
 * 			configuration stream notification to the Amazon SNS topic.</p>
 */
export interface ConfigStreamDeliveryInfo {
  __type?: "ConfigStreamDeliveryInfo";
  /**
   * <p>The error code from the last attempted delivery.</p>
   */
  lastErrorCode?: string;

  /**
   * <p>The error message from the last attempted delivery.</p>
   */
  lastErrorMessage?: string;

  /**
   * <p>Status of the last attempted delivery.</p>
   * 		       <p>
   * 			         <b>Note</b> Providing an SNS topic on a
   * 				<a href="https://docs.aws.amazon.com/config/latest/APIReference/API_DeliveryChannel.html">DeliveryChannel</a> for AWS Config is optional. If the SNS
   * 			delivery is turned off, the last status will be <b>Not_Applicable</b>.</p>
   */
  lastStatus?: DeliveryStatus | string;

  /**
   * <p>The time from the last status change.</p>
   */
  lastStatusChangeTime?: Date;
}

export namespace ConfigStreamDeliveryInfo {
  export function isa(o: any): o is ConfigStreamDeliveryInfo {
    return __isa(o, "ConfigStreamDeliveryInfo");
  }
}

/**
 * <p>The details about the configuration aggregator, including
 * 			information about source accounts, regions, and metadata of the
 * 			aggregator. </p>
 */
export interface ConfigurationAggregator {
  __type?: "ConfigurationAggregator";
  /**
   * <p>Provides a list of source accounts and regions to be
   * 			aggregated.</p>
   */
  AccountAggregationSources?: Array<AccountAggregationSource>;

  /**
   * <p>The Amazon Resource Name (ARN) of the aggregator.</p>
   */
  ConfigurationAggregatorArn?: string;

  /**
   * <p>The name of the aggregator.</p>
   */
  ConfigurationAggregatorName?: string;

  /**
   * <p>The time stamp when the configuration aggregator was
   * 			created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The time of the last update.</p>
   */
  LastUpdatedTime?: Date;

  /**
   * <p>Provides an organization and list of regions to be
   * 			aggregated.</p>
   */
  OrganizationAggregationSource?: OrganizationAggregationSource;
}

export namespace ConfigurationAggregator {
  export function isa(o: any): o is ConfigurationAggregator {
    return __isa(o, "ConfigurationAggregator");
  }
}

/**
 * <p>A list that contains detailed configurations of a specified
 * 			resource.</p>
 */
export interface ConfigurationItem {
  __type?: "ConfigurationItem";
  /**
   * <p>The 12-digit AWS account ID associated with the
   * 			resource.</p>
   */
  accountId?: string;

  /**
   * <p>accoun</p>
   */
  arn?: string;

  /**
   * <p>The Availability Zone associated with the resource.</p>
   */
  availabilityZone?: string;

  /**
   * <p>The region where the resource resides.</p>
   */
  awsRegion?: string;

  /**
   * <p>The description of the resource configuration.</p>
   */
  configuration?: string;

  /**
   * <p>The time when the configuration recording was
   * 			initiated.</p>
   */
  configurationItemCaptureTime?: Date;

  /**
   * <p>Unique MD5 hash that represents the configuration item's
   * 			state.</p>
   * 		       <p>You can use MD5 hash to compare the states of two or more
   * 			configuration items that are associated with the same
   * 			resource.</p>
   */
  configurationItemMD5Hash?: string;

  /**
   * <p>The configuration item status.</p>
   */
  configurationItemStatus?: ConfigurationItemStatus | string;

  /**
   * <p>An identifier that indicates the ordering of the configuration
   * 			items of a resource.</p>
   */
  configurationStateId?: string;

  /**
   * <p>A list of CloudTrail event IDs.</p>
   * 		       <p>A populated field indicates that the current configuration was
   * 			initiated by the events recorded in the CloudTrail log. For more
   * 			information about CloudTrail, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/what_is_cloud_trail_top_level.html">What Is AWS CloudTrail</a>.</p>
   * 		       <p>An empty field indicates that the current configuration was not
   * 			initiated by any event. As of Version 1.3, the relatedEvents field is empty.
   * 			You can access the <a href="https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_LookupEvents.html">LookupEvents API</a> in the <i>AWS CloudTrail API Reference</i> to retrieve the events for the resource.</p>
   */
  relatedEvents?: Array<string>;

  /**
   * <p>A list of related AWS resources.</p>
   */
  relationships?: Array<Relationship>;

  /**
   * <p>The time stamp when the resource was created.</p>
   */
  resourceCreationTime?: Date;

  /**
   * <p>The ID of the resource (for example,
   * 			<code>sg-xxxxxx</code>).</p>
   */
  resourceId?: string;

  /**
   * <p>The custom name of the resource, if available.</p>
   */
  resourceName?: string;

  /**
   * <p>The type of AWS resource.</p>
   */
  resourceType?: ResourceType | string;

  /**
   * <p>Configuration attributes that AWS Config returns for certain
   * 			resource types to supplement the information returned for the
   * 				<code>configuration</code> parameter.</p>
   */
  supplementaryConfiguration?: { [key: string]: string };

  /**
   * <p>A mapping of key value tags associated with the
   * 			resource.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>The version number of the resource configuration.</p>
   */
  version?: string;
}

export namespace ConfigurationItem {
  export function isa(o: any): o is ConfigurationItem {
    return __isa(o, "ConfigurationItem");
  }
}

export enum ConfigurationItemStatus {
  OK = "OK",
  ResourceDeleted = "ResourceDeleted",
  ResourceDeletedNotRecorded = "ResourceDeletedNotRecorded",
  ResourceDiscovered = "ResourceDiscovered",
  ResourceNotRecorded = "ResourceNotRecorded"
}

/**
 * <p>An object that represents the recording of configuration
 * 			changes of an AWS resource.</p>
 */
export interface ConfigurationRecorder {
  __type?: "ConfigurationRecorder";
  /**
   * <p>The name of the recorder. By default, AWS Config automatically
   * 			assigns the name "default" when creating the configuration recorder.
   * 			You cannot change the assigned name.</p>
   */
  name?: string;

  /**
   * <p>Specifies the types of AWS resources for which AWS Config
   * 			records configuration changes.</p>
   */
  recordingGroup?: RecordingGroup;

  /**
   * <p>Amazon Resource Name (ARN) of the IAM role used to describe the
   * 			AWS resources associated with the account.</p>
   */
  roleARN?: string;
}

export namespace ConfigurationRecorder {
  export function isa(o: any): o is ConfigurationRecorder {
    return __isa(o, "ConfigurationRecorder");
  }
}

/**
 * <p>The current status of the configuration recorder.</p>
 */
export interface ConfigurationRecorderStatus {
  __type?: "ConfigurationRecorderStatus";
  /**
   * <p>The error code indicating that the recording failed.</p>
   */
  lastErrorCode?: string;

  /**
   * <p>The message indicating that the recording failed due to an
   * 			error.</p>
   */
  lastErrorMessage?: string;

  /**
   * <p>The time the recorder was last started.</p>
   */
  lastStartTime?: Date;

  /**
   * <p>The last (previous) status of the recorder.</p>
   */
  lastStatus?: RecorderStatus | string;

  /**
   * <p>The time when the status was last changed.</p>
   */
  lastStatusChangeTime?: Date;

  /**
   * <p>The time the recorder was last stopped.</p>
   */
  lastStopTime?: Date;

  /**
   * <p>The name of the configuration recorder.</p>
   */
  name?: string;

  /**
   * <p>Specifies whether or not the recorder is currently
   * 			recording.</p>
   */
  recording?: boolean;
}

export namespace ConfigurationRecorderStatus {
  export function isa(o: any): o is ConfigurationRecorderStatus {
    return __isa(o, "ConfigurationRecorderStatus");
  }
}

/**
 * <p>Filters the conformance pack by compliance types and AWS Config rule names.</p>
 */
export interface ConformancePackComplianceFilters {
  __type?: "ConformancePackComplianceFilters";
  /**
   * <p>Filters the results by compliance.</p>
   * 		       <p>The allowed values are <code>COMPLIANT</code> and <code>NON_COMPLIANT</code>.</p>
   */
  ComplianceType?: ConformancePackComplianceType | string;

  /**
   * <p>Filters the results by AWS Config rule names.</p>
   */
  ConfigRuleNames?: Array<string>;
}

export namespace ConformancePackComplianceFilters {
  export function isa(o: any): o is ConformancePackComplianceFilters {
    return __isa(o, "ConformancePackComplianceFilters");
  }
}

/**
 * <p>Summary includes the name and status of the conformance pack.</p>
 */
export interface ConformancePackComplianceSummary {
  __type?: "ConformancePackComplianceSummary";
  /**
   * <p>The status of the conformance pack. The allowed values are COMPLIANT and NON_COMPLIANT. </p>
   */
  ConformancePackComplianceStatus:
    | ConformancePackComplianceType
    | string
    | undefined;

  /**
   * <p>The name of the conformance pack name.</p>
   */
  ConformancePackName: string | undefined;
}

export namespace ConformancePackComplianceSummary {
  export function isa(o: any): o is ConformancePackComplianceSummary {
    return __isa(o, "ConformancePackComplianceSummary");
  }
}

export enum ConformancePackComplianceType {
  COMPLIANT = "COMPLIANT",
  NON_COMPLIANT = "NON_COMPLIANT"
}

/**
 * <p>Returns details of a conformance pack. A conformance pack is a collection of AWS Config rules and remediation actions that can be easily deployed in an account and a region.</p>
 */
export interface ConformancePackDetail {
  __type?: "ConformancePackDetail";
  /**
   * <p>Amazon Resource Name (ARN) of the conformance pack.</p>
   */
  ConformancePackArn: string | undefined;

  /**
   * <p>ID of the conformance pack.</p>
   */
  ConformancePackId: string | undefined;

  /**
   * <p>A list of <code>ConformancePackInputParameter</code> objects.</p>
   */
  ConformancePackInputParameters?: Array<ConformancePackInputParameter>;

  /**
   * <p>Name of the conformance pack.</p>
   */
  ConformancePackName: string | undefined;

  /**
   * <p>AWS service that created the conformance pack.</p>
   */
  CreatedBy?: string;

  /**
   * <p>Conformance pack template that is used to create a pack. The delivery bucket name should start with awsconfigconforms. For example: "Resource": "arn:aws:s3:::your_bucket_name/*".</p>
   */
  DeliveryS3Bucket: string | undefined;

  /**
   * <p>The prefix for the Amazon S3 bucket.</p>
   */
  DeliveryS3KeyPrefix?: string;

  /**
   * <p>Last time when conformation pack update was requested. </p>
   */
  LastUpdateRequestedTime?: Date;
}

export namespace ConformancePackDetail {
  export function isa(o: any): o is ConformancePackDetail {
    return __isa(o, "ConformancePackDetail");
  }
}

/**
 * <p>Filters a conformance pack by AWS Config rule names, compliance types, AWS resource types, and resource IDs.</p>
 */
export interface ConformancePackEvaluationFilters {
  __type?: "ConformancePackEvaluationFilters";
  /**
   * <p>Filters the results by compliance.</p>
   * 		       <p>The allowed values are <code>COMPLIANT</code> and <code>NON_COMPLIANT</code>.</p>
   */
  ComplianceType?: ConformancePackComplianceType | string;

  /**
   * <p>Filters the results by AWS Config rule names.</p>
   */
  ConfigRuleNames?: Array<string>;

  /**
   * <p>Filters the results by resource IDs.</p>
   * 		       <note>
   *             <p>This is valid only when you provide resource type. If there is no resource type, you will see an error.</p>
   *          </note>
   */
  ResourceIds?: Array<string>;

  /**
   * <p>Filters the results by the resource type (for example, <code>"AWS::EC2::Instance"</code>). </p>
   */
  ResourceType?: string;
}

export namespace ConformancePackEvaluationFilters {
  export function isa(o: any): o is ConformancePackEvaluationFilters {
    return __isa(o, "ConformancePackEvaluationFilters");
  }
}

/**
 * <p>The details of a conformance pack evaluation. Provides AWS Config rule and AWS resource type that was evaluated, the compliance of the conformance pack, related time stamps, and supplementary information. </p>
 */
export interface ConformancePackEvaluationResult {
  __type?: "ConformancePackEvaluationResult";
  /**
   * <p>Supplementary information about how the evaluation determined the compliance. </p>
   */
  Annotation?: string;

  /**
   * <p>The compliance type. The allowed values are <code>COMPLIANT</code> and <code>NON_COMPLIANT</code>. </p>
   */
  ComplianceType: ConformancePackComplianceType | string | undefined;

  /**
   * <p>The time when AWS Config rule evaluated AWS resource.</p>
   */
  ConfigRuleInvokedTime: Date | undefined;

  /**
   * <p>Uniquely identifies an evaluation result.</p>
   */
  EvaluationResultIdentifier: EvaluationResultIdentifier | undefined;

  /**
   * <p>The time when AWS Config recorded the evaluation result. </p>
   */
  ResultRecordedTime: Date | undefined;
}

export namespace ConformancePackEvaluationResult {
  export function isa(o: any): o is ConformancePackEvaluationResult {
    return __isa(o, "ConformancePackEvaluationResult");
  }
}

/**
 * <p>Input parameters in the form of key-value pairs for the conformance pack, both of which you define.
 * 			Keys can have a maximum character length of 128 characters, and values can have a maximum length of 256 characters.</p>
 */
export interface ConformancePackInputParameter {
  __type?: "ConformancePackInputParameter";
  /**
   * <p>One part of a key-value pair.</p>
   */
  ParameterName: string | undefined;

  /**
   * <p>Another part of the key-value pair. </p>
   */
  ParameterValue: string | undefined;
}

export namespace ConformancePackInputParameter {
  export function isa(o: any): o is ConformancePackInputParameter {
    return __isa(o, "ConformancePackInputParameter");
  }
}

/**
 * <p>Compliance information of one or more AWS Config rules within a conformance pack. You can filter using AWS Config rule names and compliance types.</p>
 */
export interface ConformancePackRuleCompliance {
  __type?: "ConformancePackRuleCompliance";
  /**
   * <p>Compliance of the AWS Config rule</p>
   * 		       <p>The allowed values are <code>COMPLIANT</code> and <code>NON_COMPLIANT</code>.</p>
   */
  ComplianceType?: ConformancePackComplianceType | string;

  /**
   * <p>Name of the config rule.</p>
   */
  ConfigRuleName?: string;
}

export namespace ConformancePackRuleCompliance {
  export function isa(o: any): o is ConformancePackRuleCompliance {
    return __isa(o, "ConformancePackRuleCompliance");
  }
}

export enum ConformancePackState {
  CREATE_COMPLETE = "CREATE_COMPLETE",
  CREATE_FAILED = "CREATE_FAILED",
  CREATE_IN_PROGRESS = "CREATE_IN_PROGRESS",
  DELETE_FAILED = "DELETE_FAILED",
  DELETE_IN_PROGRESS = "DELETE_IN_PROGRESS"
}

/**
 * <p>Status details of a conformance pack.</p>
 */
export interface ConformancePackStatusDetail {
  __type?: "ConformancePackStatusDetail";
  /**
   * <p>Amazon Resource Name (ARN) of comformance pack.</p>
   */
  ConformancePackArn: string | undefined;

  /**
   * <p>ID of the conformance pack.</p>
   */
  ConformancePackId: string | undefined;

  /**
   * <p>Name of the conformance pack.</p>
   */
  ConformancePackName: string | undefined;

  /**
   * <p>Indicates deployment status of conformance pack.</p>
   * 		       <p>AWS Config sets the state of the conformance pack to:</p>
   * 		       <ul>
   *             <li>
   *                <p>CREATE_IN_PROGRESS when a conformance pack creation is in progress for an account.</p>
   *             </li>
   *             <li>
   *                <p>CREATE_COMPLETE when a conformance pack has been successfully created in your account.</p>
   *             </li>
   *             <li>
   *                <p>CREATE_FAILED when a conformance pack creation failed in your account.</p>
   *             </li>
   *             <li>
   *                <p>DELETE_IN_PROGRESS when a conformance pack deletion is in progress. </p>
   *             </li>
   *             <li>
   *                <p>DELETE_FAILED when a conformance pack deletion failed in your account.</p>
   *             </li>
   *          </ul>
   */
  ConformancePackState: ConformancePackState | string | undefined;

  /**
   * <p>The reason of conformance pack creation failure.</p>
   */
  ConformancePackStatusReason?: string;

  /**
   * <p>Last time when conformation pack creation and update was successful.</p>
   */
  LastUpdateCompletedTime?: Date;

  /**
   * <p>Last time when conformation pack creation and update was requested.</p>
   */
  LastUpdateRequestedTime: Date | undefined;

  /**
   * <p>Amazon Resource Name (ARN) of AWS CloudFormation stack. </p>
   */
  StackArn: string | undefined;
}

export namespace ConformancePackStatusDetail {
  export function isa(o: any): o is ConformancePackStatusDetail {
    return __isa(o, "ConformancePackStatusDetail");
  }
}

/**
 * <p>You have specified a template that is not valid or supported.</p>
 */
export interface ConformancePackTemplateValidationException
  extends __SmithyException,
    $MetadataBearer {
  name: "ConformancePackTemplateValidationException";
  $fault: "client";
  /**
   * <p>Error executing the command</p>
   */
  message?: string;
}

export namespace ConformancePackTemplateValidationException {
  export function isa(o: any): o is ConformancePackTemplateValidationException {
    return __isa(o, "ConformancePackTemplateValidationException");
  }
}

export interface DeleteAggregationAuthorizationRequest {
  __type?: "DeleteAggregationAuthorizationRequest";
  /**
   * <p>The 12-digit account ID of the account authorized to aggregate
   * 			data.</p>
   */
  AuthorizedAccountId: string | undefined;

  /**
   * <p>The region authorized to collect aggregated data.</p>
   */
  AuthorizedAwsRegion: string | undefined;
}

export namespace DeleteAggregationAuthorizationRequest {
  export function isa(o: any): o is DeleteAggregationAuthorizationRequest {
    return __isa(o, "DeleteAggregationAuthorizationRequest");
  }
}

/**
 * <p></p>
 */
export interface DeleteConfigRuleRequest {
  __type?: "DeleteConfigRuleRequest";
  /**
   * <p>The name of the AWS Config rule that you want to
   * 			delete.</p>
   */
  ConfigRuleName: string | undefined;
}

export namespace DeleteConfigRuleRequest {
  export function isa(o: any): o is DeleteConfigRuleRequest {
    return __isa(o, "DeleteConfigRuleRequest");
  }
}

export interface DeleteConfigurationAggregatorRequest {
  __type?: "DeleteConfigurationAggregatorRequest";
  /**
   * <p>The name of the configuration aggregator.</p>
   */
  ConfigurationAggregatorName: string | undefined;
}

export namespace DeleteConfigurationAggregatorRequest {
  export function isa(o: any): o is DeleteConfigurationAggregatorRequest {
    return __isa(o, "DeleteConfigurationAggregatorRequest");
  }
}

/**
 * <p>The request object for the
 * 				<code>DeleteConfigurationRecorder</code> action.</p>
 */
export interface DeleteConfigurationRecorderRequest {
  __type?: "DeleteConfigurationRecorderRequest";
  /**
   * <p>The name of the configuration recorder to be deleted. You can
   * 			retrieve the name of your configuration recorder by using the
   * 				<code>DescribeConfigurationRecorders</code> action.</p>
   */
  ConfigurationRecorderName: string | undefined;
}

export namespace DeleteConfigurationRecorderRequest {
  export function isa(o: any): o is DeleteConfigurationRecorderRequest {
    return __isa(o, "DeleteConfigurationRecorderRequest");
  }
}

export interface DeleteConformancePackRequest {
  __type?: "DeleteConformancePackRequest";
  /**
   * <p>Name of the conformance pack you want to delete.</p>
   */
  ConformancePackName: string | undefined;
}

export namespace DeleteConformancePackRequest {
  export function isa(o: any): o is DeleteConformancePackRequest {
    return __isa(o, "DeleteConformancePackRequest");
  }
}

/**
 * <p>The input for the <a>DeleteDeliveryChannel</a>
 * 			action. The action accepts the following data, in JSON format.
 * 		</p>
 */
export interface DeleteDeliveryChannelRequest {
  __type?: "DeleteDeliveryChannelRequest";
  /**
   * <p>The name of the delivery channel to delete.</p>
   */
  DeliveryChannelName: string | undefined;
}

export namespace DeleteDeliveryChannelRequest {
  export function isa(o: any): o is DeleteDeliveryChannelRequest {
    return __isa(o, "DeleteDeliveryChannelRequest");
  }
}

/**
 * <p></p>
 */
export interface DeleteEvaluationResultsRequest {
  __type?: "DeleteEvaluationResultsRequest";
  /**
   * <p>The name of the AWS Config rule for which you want to delete
   * 			the evaluation results.</p>
   */
  ConfigRuleName: string | undefined;
}

export namespace DeleteEvaluationResultsRequest {
  export function isa(o: any): o is DeleteEvaluationResultsRequest {
    return __isa(o, "DeleteEvaluationResultsRequest");
  }
}

/**
 * <p>The output when you delete the evaluation results for the
 * 			specified AWS Config rule.</p>
 */
export interface DeleteEvaluationResultsResponse {
  __type?: "DeleteEvaluationResultsResponse";
}

export namespace DeleteEvaluationResultsResponse {
  export function isa(o: any): o is DeleteEvaluationResultsResponse {
    return __isa(o, "DeleteEvaluationResultsResponse");
  }
}

export interface DeleteOrganizationConfigRuleRequest {
  __type?: "DeleteOrganizationConfigRuleRequest";
  /**
   * <p>The name of organization config rule that you want to delete.</p>
   */
  OrganizationConfigRuleName: string | undefined;
}

export namespace DeleteOrganizationConfigRuleRequest {
  export function isa(o: any): o is DeleteOrganizationConfigRuleRequest {
    return __isa(o, "DeleteOrganizationConfigRuleRequest");
  }
}

export interface DeleteOrganizationConformancePackRequest {
  __type?: "DeleteOrganizationConformancePackRequest";
  /**
   * <p>The name of organization conformance pack that you want to delete.</p>
   */
  OrganizationConformancePackName: string | undefined;
}

export namespace DeleteOrganizationConformancePackRequest {
  export function isa(o: any): o is DeleteOrganizationConformancePackRequest {
    return __isa(o, "DeleteOrganizationConformancePackRequest");
  }
}

export interface DeletePendingAggregationRequestRequest {
  __type?: "DeletePendingAggregationRequestRequest";
  /**
   * <p>The 12-digit account ID of the account requesting to aggregate
   * 			data.</p>
   */
  RequesterAccountId: string | undefined;

  /**
   * <p>The region requesting to aggregate data.</p>
   */
  RequesterAwsRegion: string | undefined;
}

export namespace DeletePendingAggregationRequestRequest {
  export function isa(o: any): o is DeletePendingAggregationRequestRequest {
    return __isa(o, "DeletePendingAggregationRequestRequest");
  }
}

export interface DeleteRemediationConfigurationRequest {
  __type?: "DeleteRemediationConfigurationRequest";
  /**
   * <p>The name of the AWS Config rule for which you want to delete remediation configuration.</p>
   */
  ConfigRuleName: string | undefined;

  /**
   * <p>The type of a resource.</p>
   */
  ResourceType?: string;
}

export namespace DeleteRemediationConfigurationRequest {
  export function isa(o: any): o is DeleteRemediationConfigurationRequest {
    return __isa(o, "DeleteRemediationConfigurationRequest");
  }
}

export interface DeleteRemediationConfigurationResponse {
  __type?: "DeleteRemediationConfigurationResponse";
}

export namespace DeleteRemediationConfigurationResponse {
  export function isa(o: any): o is DeleteRemediationConfigurationResponse {
    return __isa(o, "DeleteRemediationConfigurationResponse");
  }
}

export interface DeleteRemediationExceptionsRequest {
  __type?: "DeleteRemediationExceptionsRequest";
  /**
   * <p>The name of the AWS Config rule for which you want to delete remediation exception configuration.</p>
   */
  ConfigRuleName: string | undefined;

  /**
   * <p>An exception list of resource exception keys to be processed with the current request. AWS Config adds exception for each resource key. For example, AWS Config adds 3 exceptions for 3 resource keys. </p>
   */
  ResourceKeys: Array<RemediationExceptionResourceKey> | undefined;
}

export namespace DeleteRemediationExceptionsRequest {
  export function isa(o: any): o is DeleteRemediationExceptionsRequest {
    return __isa(o, "DeleteRemediationExceptionsRequest");
  }
}

export interface DeleteRemediationExceptionsResponse {
  __type?: "DeleteRemediationExceptionsResponse";
  /**
   * <p>Returns a list of failed delete remediation exceptions batch objects. Each object in the batch consists of a list of failed items and failure messages.</p>
   */
  FailedBatches?: Array<FailedDeleteRemediationExceptionsBatch>;
}

export namespace DeleteRemediationExceptionsResponse {
  export function isa(o: any): o is DeleteRemediationExceptionsResponse {
    return __isa(o, "DeleteRemediationExceptionsResponse");
  }
}

export interface DeleteResourceConfigRequest {
  __type?: "DeleteResourceConfigRequest";
  /**
   * <p>Unique identifier of the resource.</p>
   */
  ResourceId: string | undefined;

  /**
   * <p>The type of the resource.</p>
   */
  ResourceType: string | undefined;
}

export namespace DeleteResourceConfigRequest {
  export function isa(o: any): o is DeleteResourceConfigRequest {
    return __isa(o, "DeleteResourceConfigRequest");
  }
}

export interface DeleteRetentionConfigurationRequest {
  __type?: "DeleteRetentionConfigurationRequest";
  /**
   * <p>The name of the retention configuration to delete.</p>
   */
  RetentionConfigurationName: string | undefined;
}

export namespace DeleteRetentionConfigurationRequest {
  export function isa(o: any): o is DeleteRetentionConfigurationRequest {
    return __isa(o, "DeleteRetentionConfigurationRequest");
  }
}

/**
 * <p>The input for the <a>DeliverConfigSnapshot</a>
 * 			action.</p>
 */
export interface DeliverConfigSnapshotRequest {
  __type?: "DeliverConfigSnapshotRequest";
  /**
   * <p>The name of the delivery channel through which the snapshot is
   * 			delivered.</p>
   */
  deliveryChannelName: string | undefined;
}

export namespace DeliverConfigSnapshotRequest {
  export function isa(o: any): o is DeliverConfigSnapshotRequest {
    return __isa(o, "DeliverConfigSnapshotRequest");
  }
}

/**
 * <p>The output for the <a>DeliverConfigSnapshot</a>
 * 			action, in JSON format.</p>
 */
export interface DeliverConfigSnapshotResponse {
  __type?: "DeliverConfigSnapshotResponse";
  /**
   * <p>The ID of the snapshot that is being created.</p>
   */
  configSnapshotId?: string;
}

export namespace DeliverConfigSnapshotResponse {
  export function isa(o: any): o is DeliverConfigSnapshotResponse {
    return __isa(o, "DeliverConfigSnapshotResponse");
  }
}

/**
 * <p>The channel through which AWS Config delivers notifications and
 * 			updated configuration states.</p>
 */
export interface DeliveryChannel {
  __type?: "DeliveryChannel";
  /**
   * <p>The options for how often AWS Config delivers configuration
   * 			snapshots to the Amazon S3 bucket.</p>
   */
  configSnapshotDeliveryProperties?: ConfigSnapshotDeliveryProperties;

  /**
   * <p>The name of the delivery channel. By default, AWS Config
   * 			assigns the name "default" when creating the delivery channel. To
   * 			change the delivery channel name, you must use the
   * 			DeleteDeliveryChannel action to delete your current delivery
   * 			channel, and then you must use the PutDeliveryChannel command to
   * 			create a delivery channel that has the desired name.</p>
   */
  name?: string;

  /**
   * <p>The name of the Amazon S3 bucket to which AWS Config delivers
   * 			configuration snapshots and configuration history files.</p>
   * 		       <p>If you specify a bucket that belongs to another AWS account,
   * 			that bucket must have policies that grant access permissions to AWS
   * 			Config. For more information, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/s3-bucket-policy.html">Permissions for the Amazon S3 Bucket</a> in the AWS Config
   * 			Developer Guide.</p>
   */
  s3BucketName?: string;

  /**
   * <p>The prefix for the specified Amazon S3 bucket.</p>
   */
  s3KeyPrefix?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon SNS topic to which
   * 			AWS Config sends notifications about configuration
   * 			changes.</p>
   * 		       <p>If you choose a topic from another account, the topic must have
   * 			policies that grant access permissions to AWS Config. For more
   * 			information, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/sns-topic-policy.html">Permissions for the Amazon SNS Topic</a> in the AWS Config
   * 			Developer Guide.</p>
   */
  snsTopicARN?: string;
}

export namespace DeliveryChannel {
  export function isa(o: any): o is DeliveryChannel {
    return __isa(o, "DeliveryChannel");
  }
}

/**
 * <p>The status of a specified delivery channel.</p>
 * 		       <p>Valid values: <code>Success</code> | <code>Failure</code>
 * 		       </p>
 */
export interface DeliveryChannelStatus {
  __type?: "DeliveryChannelStatus";
  /**
   * <p>A list that contains the status of the delivery of the
   * 			configuration history to the specified Amazon S3 bucket.</p>
   */
  configHistoryDeliveryInfo?: ConfigExportDeliveryInfo;

  /**
   * <p>A list containing the status of the delivery of the snapshot to
   * 			the specified Amazon S3 bucket.</p>
   */
  configSnapshotDeliveryInfo?: ConfigExportDeliveryInfo;

  /**
   * <p>A list containing the status of the delivery of the
   * 			configuration stream notification to the specified Amazon SNS
   * 			topic.</p>
   */
  configStreamDeliveryInfo?: ConfigStreamDeliveryInfo;

  /**
   * <p>The name of the delivery channel.</p>
   */
  name?: string;
}

export namespace DeliveryChannelStatus {
  export function isa(o: any): o is DeliveryChannelStatus {
    return __isa(o, "DeliveryChannelStatus");
  }
}

export enum DeliveryStatus {
  Failure = "Failure",
  Not_Applicable = "Not_Applicable",
  Success = "Success"
}

export interface DescribeAggregateComplianceByConfigRulesRequest {
  __type?: "DescribeAggregateComplianceByConfigRulesRequest";
  /**
   * <p>The name of the configuration aggregator.</p>
   */
  ConfigurationAggregatorName: string | undefined;

  /**
   * <p>Filters the results by ConfigRuleComplianceFilters object.
   * 		</p>
   */
  Filters?: ConfigRuleComplianceFilters;

  /**
   * <p>The maximum number of evaluation results returned on each page.
   * 			The default is
   * 			maximum.
   * 			If you specify 0, AWS Config uses the default.</p>
   */
  Limit?: number;

  /**
   * <p>The <code>nextToken</code> string returned on a previous page that you use
   * 			to get the next page of results in a paginated response.</p>
   */
  NextToken?: string;
}

export namespace DescribeAggregateComplianceByConfigRulesRequest {
  export function isa(
    o: any
  ): o is DescribeAggregateComplianceByConfigRulesRequest {
    return __isa(o, "DescribeAggregateComplianceByConfigRulesRequest");
  }
}

export interface DescribeAggregateComplianceByConfigRulesResponse {
  __type?: "DescribeAggregateComplianceByConfigRulesResponse";
  /**
   * <p>Returns a list of AggregateComplianceByConfigRule
   * 			object.</p>
   */
  AggregateComplianceByConfigRules?: Array<AggregateComplianceByConfigRule>;

  /**
   * <p>The <code>nextToken</code> string returned on a previous page that you use
   * 			to get the next page of results in a paginated response.</p>
   */
  NextToken?: string;
}

export namespace DescribeAggregateComplianceByConfigRulesResponse {
  export function isa(
    o: any
  ): o is DescribeAggregateComplianceByConfigRulesResponse {
    return __isa(o, "DescribeAggregateComplianceByConfigRulesResponse");
  }
}

export interface DescribeAggregationAuthorizationsRequest {
  __type?: "DescribeAggregationAuthorizationsRequest";
  /**
   * <p>The maximum number of AggregationAuthorizations returned on
   * 			each page. The default is maximum. If you specify 0, AWS Config uses
   * 			the default.</p>
   */
  Limit?: number;

  /**
   * <p>The <code>nextToken</code> string returned on a previous page that you use
   * 			to get the next page of results in a paginated response.</p>
   */
  NextToken?: string;
}

export namespace DescribeAggregationAuthorizationsRequest {
  export function isa(o: any): o is DescribeAggregationAuthorizationsRequest {
    return __isa(o, "DescribeAggregationAuthorizationsRequest");
  }
}

export interface DescribeAggregationAuthorizationsResponse {
  __type?: "DescribeAggregationAuthorizationsResponse";
  /**
   * <p>Returns a list of authorizations granted to various aggregator
   * 			accounts and regions.</p>
   */
  AggregationAuthorizations?: Array<AggregationAuthorization>;

  /**
   * <p>The <code>nextToken</code> string returned on a previous page that you use
   * 			to get the next page of results in a paginated response.</p>
   */
  NextToken?: string;
}

export namespace DescribeAggregationAuthorizationsResponse {
  export function isa(o: any): o is DescribeAggregationAuthorizationsResponse {
    return __isa(o, "DescribeAggregationAuthorizationsResponse");
  }
}

/**
 * <p></p>
 */
export interface DescribeComplianceByConfigRuleRequest {
  __type?: "DescribeComplianceByConfigRuleRequest";
  /**
   * <p>Filters the results by compliance.</p>
   * 		       <p>The allowed values are <code>COMPLIANT</code> and <code>NON_COMPLIANT</code>.</p>
   */
  ComplianceTypes?: Array<ComplianceType | string>;

  /**
   * <p>Specify one or more AWS Config rule names to filter the results
   * 			by rule.</p>
   */
  ConfigRuleNames?: Array<string>;

  /**
   * <p>The <code>nextToken</code> string returned on a previous page
   * 			that you use to get the next page of results in a paginated
   * 			response.</p>
   */
  NextToken?: string;
}

export namespace DescribeComplianceByConfigRuleRequest {
  export function isa(o: any): o is DescribeComplianceByConfigRuleRequest {
    return __isa(o, "DescribeComplianceByConfigRuleRequest");
  }
}

/**
 * <p></p>
 */
export interface DescribeComplianceByConfigRuleResponse {
  __type?: "DescribeComplianceByConfigRuleResponse";
  /**
   * <p>Indicates whether each of the specified AWS Config rules is
   * 			compliant.</p>
   */
  ComplianceByConfigRules?: Array<ComplianceByConfigRule>;

  /**
   * <p>The string that you use in a subsequent request to get the next
   * 			page of results in a paginated response.</p>
   */
  NextToken?: string;
}

export namespace DescribeComplianceByConfigRuleResponse {
  export function isa(o: any): o is DescribeComplianceByConfigRuleResponse {
    return __isa(o, "DescribeComplianceByConfigRuleResponse");
  }
}

/**
 * <p></p>
 */
export interface DescribeComplianceByResourceRequest {
  __type?: "DescribeComplianceByResourceRequest";
  /**
   * <p>Filters the results by compliance.</p>
   * 		       <p>The allowed values are <code>COMPLIANT</code>, <code>NON_COMPLIANT</code>, and <code>INSUFFICIENT_DATA</code>.</p>
   */
  ComplianceTypes?: Array<ComplianceType | string>;

  /**
   * <p>The maximum number of evaluation results returned on each page.
   * 			The default is 10. You cannot specify a number greater than 100. If
   * 			you specify 0, AWS Config uses the default.</p>
   */
  Limit?: number;

  /**
   * <p>The <code>nextToken</code> string returned on a previous page
   * 			that you use to get the next page of results in a paginated
   * 			response.</p>
   */
  NextToken?: string;

  /**
   * <p>The ID of the AWS resource for which you want compliance
   * 			information. You can specify only one resource ID. If you specify a
   * 			resource ID, you must also specify a type for
   * 				<code>ResourceType</code>.</p>
   */
  ResourceId?: string;

  /**
   * <p>The types of AWS resources for which you want compliance
   * 			information (for example, <code>AWS::EC2::Instance</code>). For this
   * 			action, you can specify that the resource type is an AWS account by
   * 			specifying <code>AWS::::Account</code>.</p>
   */
  ResourceType?: string;
}

export namespace DescribeComplianceByResourceRequest {
  export function isa(o: any): o is DescribeComplianceByResourceRequest {
    return __isa(o, "DescribeComplianceByResourceRequest");
  }
}

/**
 * <p></p>
 */
export interface DescribeComplianceByResourceResponse {
  __type?: "DescribeComplianceByResourceResponse";
  /**
   * <p>Indicates whether the specified AWS resource complies with all
   * 			of the AWS Config rules that evaluate it.</p>
   */
  ComplianceByResources?: Array<ComplianceByResource>;

  /**
   * <p>The string that you use in a subsequent request to get the next
   * 			page of results in a paginated response.</p>
   */
  NextToken?: string;
}

export namespace DescribeComplianceByResourceResponse {
  export function isa(o: any): o is DescribeComplianceByResourceResponse {
    return __isa(o, "DescribeComplianceByResourceResponse");
  }
}

/**
 * <p></p>
 */
export interface DescribeConfigRuleEvaluationStatusRequest {
  __type?: "DescribeConfigRuleEvaluationStatusRequest";
  /**
   * <p>The name of the AWS managed Config rules for which you want
   * 			status information. If you do not specify any names, AWS Config
   * 			returns status information for all AWS managed Config rules that you
   * 			use.</p>
   */
  ConfigRuleNames?: Array<string>;

  /**
   * <p>The number of rule evaluation results that you want
   * 			returned.</p>
   *
   * 		       <p>This parameter is required if the rule limit for your account
   * 			is more than the default of 150 rules.</p>
   * 		       <p>For information about requesting a rule limit increase, see
   * 				<a href="http://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html#limits_config">AWS Config Limits</a> in the <i>AWS General
   * 				Reference Guide</i>.</p>
   */
  Limit?: number;

  /**
   * <p>The <code>nextToken</code> string returned on a previous page
   * 			that you use to get the next page of results in a paginated
   * 			response.</p>
   */
  NextToken?: string;
}

export namespace DescribeConfigRuleEvaluationStatusRequest {
  export function isa(o: any): o is DescribeConfigRuleEvaluationStatusRequest {
    return __isa(o, "DescribeConfigRuleEvaluationStatusRequest");
  }
}

/**
 * <p></p>
 */
export interface DescribeConfigRuleEvaluationStatusResponse {
  __type?: "DescribeConfigRuleEvaluationStatusResponse";
  /**
   * <p>Status information about your AWS managed Config
   * 			rules.</p>
   */
  ConfigRulesEvaluationStatus?: Array<ConfigRuleEvaluationStatus>;

  /**
   * <p>The string that you use in a subsequent request to get the next
   * 			page of results in a paginated response.</p>
   */
  NextToken?: string;
}

export namespace DescribeConfigRuleEvaluationStatusResponse {
  export function isa(o: any): o is DescribeConfigRuleEvaluationStatusResponse {
    return __isa(o, "DescribeConfigRuleEvaluationStatusResponse");
  }
}

/**
 * <p></p>
 */
export interface DescribeConfigRulesRequest {
  __type?: "DescribeConfigRulesRequest";
  /**
   * <p>The names of the AWS Config rules for which you want details.
   * 			If you do not specify any names, AWS Config returns details for all
   * 			your rules.</p>
   */
  ConfigRuleNames?: Array<string>;

  /**
   * <p>The <code>nextToken</code> string returned on a previous page
   * 			that you use to get the next page of results in a paginated
   * 			response.</p>
   */
  NextToken?: string;
}

export namespace DescribeConfigRulesRequest {
  export function isa(o: any): o is DescribeConfigRulesRequest {
    return __isa(o, "DescribeConfigRulesRequest");
  }
}

/**
 * <p></p>
 */
export interface DescribeConfigRulesResponse {
  __type?: "DescribeConfigRulesResponse";
  /**
   * <p>The details about your AWS Config rules.</p>
   */
  ConfigRules?: Array<ConfigRule>;

  /**
   * <p>The string that you use in a subsequent request to get the next
   * 			page of results in a paginated response.</p>
   */
  NextToken?: string;
}

export namespace DescribeConfigRulesResponse {
  export function isa(o: any): o is DescribeConfigRulesResponse {
    return __isa(o, "DescribeConfigRulesResponse");
  }
}

export interface DescribeConfigurationAggregatorSourcesStatusRequest {
  __type?: "DescribeConfigurationAggregatorSourcesStatusRequest";
  /**
   * <p>The name of the configuration aggregator.</p>
   */
  ConfigurationAggregatorName: string | undefined;

  /**
   * <p>The maximum number of AggregatorSourceStatus returned on each
   * 			page. The default is maximum. If you specify 0, AWS Config uses the
   * 			default.</p>
   */
  Limit?: number;

  /**
   * <p>The <code>nextToken</code> string returned on a previous page that you use
   * 			to get the next page of results in a paginated response.</p>
   */
  NextToken?: string;

  /**
   * <p>Filters the status type.</p>
   * 		       <ul>
   *             <li>
   * 				           <p>Valid value FAILED indicates errors while moving
   * 					data.</p>
   * 			         </li>
   *             <li>
   * 				           <p>Valid value SUCCEEDED indicates the data was
   * 					successfully moved.</p>
   * 			         </li>
   *             <li>
   * 				           <p>Valid value OUTDATED indicates the data is not the most
   * 					recent.</p>
   * 			         </li>
   *          </ul>
   */
  UpdateStatus?: Array<AggregatedSourceStatusType | string>;
}

export namespace DescribeConfigurationAggregatorSourcesStatusRequest {
  export function isa(
    o: any
  ): o is DescribeConfigurationAggregatorSourcesStatusRequest {
    return __isa(o, "DescribeConfigurationAggregatorSourcesStatusRequest");
  }
}

export interface DescribeConfigurationAggregatorSourcesStatusResponse {
  __type?: "DescribeConfigurationAggregatorSourcesStatusResponse";
  /**
   * <p>Returns an AggregatedSourceStatus object.
   * 			</p>
   */
  AggregatedSourceStatusList?: Array<AggregatedSourceStatus>;

  /**
   * <p>The <code>nextToken</code> string returned on a previous page that you use
   * 			to get the next page of results in a paginated response.</p>
   */
  NextToken?: string;
}

export namespace DescribeConfigurationAggregatorSourcesStatusResponse {
  export function isa(
    o: any
  ): o is DescribeConfigurationAggregatorSourcesStatusResponse {
    return __isa(o, "DescribeConfigurationAggregatorSourcesStatusResponse");
  }
}

export interface DescribeConfigurationAggregatorsRequest {
  __type?: "DescribeConfigurationAggregatorsRequest";
  /**
   * <p>The name of the configuration aggregators.</p>
   */
  ConfigurationAggregatorNames?: Array<string>;

  /**
   * <p>The maximum number of configuration aggregators returned on
   * 			each page. The default is maximum. If you specify 0, AWS Config uses
   * 			the default.</p>
   */
  Limit?: number;

  /**
   * <p>The <code>nextToken</code> string returned on a previous page that you use
   * 			to get the next page of results in a paginated response.</p>
   */
  NextToken?: string;
}

export namespace DescribeConfigurationAggregatorsRequest {
  export function isa(o: any): o is DescribeConfigurationAggregatorsRequest {
    return __isa(o, "DescribeConfigurationAggregatorsRequest");
  }
}

export interface DescribeConfigurationAggregatorsResponse {
  __type?: "DescribeConfigurationAggregatorsResponse";
  /**
   * <p>Returns a ConfigurationAggregators object.</p>
   */
  ConfigurationAggregators?: Array<ConfigurationAggregator>;

  /**
   * <p>The <code>nextToken</code> string returned on a previous page that you use
   * 			to get the next page of results in a paginated response.</p>
   */
  NextToken?: string;
}

export namespace DescribeConfigurationAggregatorsResponse {
  export function isa(o: any): o is DescribeConfigurationAggregatorsResponse {
    return __isa(o, "DescribeConfigurationAggregatorsResponse");
  }
}

/**
 * <p>The input for the <a>DescribeConfigurationRecorderStatus</a>
 * 			action.</p>
 */
export interface DescribeConfigurationRecorderStatusRequest {
  __type?: "DescribeConfigurationRecorderStatusRequest";
  /**
   * <p>The name(s) of the configuration recorder. If the name is not
   * 			specified, the action returns the current status of all the
   * 			configuration recorders associated with the account.</p>
   */
  ConfigurationRecorderNames?: Array<string>;
}

export namespace DescribeConfigurationRecorderStatusRequest {
  export function isa(o: any): o is DescribeConfigurationRecorderStatusRequest {
    return __isa(o, "DescribeConfigurationRecorderStatusRequest");
  }
}

/**
 * <p>The output for the <a>DescribeConfigurationRecorderStatus</a> action, in JSON
 * 			format.</p>
 */
export interface DescribeConfigurationRecorderStatusResponse {
  __type?: "DescribeConfigurationRecorderStatusResponse";
  /**
   * <p>A list that contains status of the specified
   * 			recorders.</p>
   */
  ConfigurationRecordersStatus?: Array<ConfigurationRecorderStatus>;
}

export namespace DescribeConfigurationRecorderStatusResponse {
  export function isa(
    o: any
  ): o is DescribeConfigurationRecorderStatusResponse {
    return __isa(o, "DescribeConfigurationRecorderStatusResponse");
  }
}

/**
 * <p>The input for the <a>DescribeConfigurationRecorders</a> action.</p>
 */
export interface DescribeConfigurationRecordersRequest {
  __type?: "DescribeConfigurationRecordersRequest";
  /**
   * <p>A list of configuration recorder names.</p>
   */
  ConfigurationRecorderNames?: Array<string>;
}

export namespace DescribeConfigurationRecordersRequest {
  export function isa(o: any): o is DescribeConfigurationRecordersRequest {
    return __isa(o, "DescribeConfigurationRecordersRequest");
  }
}

/**
 * <p>The output for the <a>DescribeConfigurationRecorders</a> action.</p>
 */
export interface DescribeConfigurationRecordersResponse {
  __type?: "DescribeConfigurationRecordersResponse";
  /**
   * <p>A list that contains the descriptions of the specified
   * 			configuration recorders.</p>
   */
  ConfigurationRecorders?: Array<ConfigurationRecorder>;
}

export namespace DescribeConfigurationRecordersResponse {
  export function isa(o: any): o is DescribeConfigurationRecordersResponse {
    return __isa(o, "DescribeConfigurationRecordersResponse");
  }
}

export interface DescribeConformancePackComplianceRequest {
  __type?: "DescribeConformancePackComplianceRequest";
  /**
   * <p>Name of the conformance pack.</p>
   */
  ConformancePackName: string | undefined;

  /**
   * <p>A <code>ConformancePackComplianceFilters</code> object.</p>
   */
  Filters?: ConformancePackComplianceFilters;

  /**
   * <p>The maximum number of AWS Config rules within a conformance pack are returned on each page.</p>
   */
  Limit?: number;

  /**
   * <p>The <code>nextToken</code> string returned in a previous request that you use to request the next page of results in a paginated response.</p>
   */
  NextToken?: string;
}

export namespace DescribeConformancePackComplianceRequest {
  export function isa(o: any): o is DescribeConformancePackComplianceRequest {
    return __isa(o, "DescribeConformancePackComplianceRequest");
  }
}

export interface DescribeConformancePackComplianceResponse {
  __type?: "DescribeConformancePackComplianceResponse";
  /**
   * <p>Name of the conformance pack.</p>
   */
  ConformancePackName: string | undefined;

  /**
   * <p>Returns a list of <code>ConformancePackRuleCompliance</code> objects.</p>
   */
  ConformancePackRuleComplianceList:
    | Array<ConformancePackRuleCompliance>
    | undefined;

  /**
   * <p>The <code>nextToken</code> string returned in a previous request that you use to request the next page of results in a paginated response.</p>
   */
  NextToken?: string;
}

export namespace DescribeConformancePackComplianceResponse {
  export function isa(o: any): o is DescribeConformancePackComplianceResponse {
    return __isa(o, "DescribeConformancePackComplianceResponse");
  }
}

export interface DescribeConformancePackStatusRequest {
  __type?: "DescribeConformancePackStatusRequest";
  /**
   * <p>Comma-separated list of conformance pack names.</p>
   */
  ConformancePackNames?: Array<string>;

  /**
   * <p>The maximum number of conformance packs status returned on each page.</p>
   */
  Limit?: number;

  /**
   * <p>The <code>nextToken</code> string returned in a previous request that you use to request the next page of results in a paginated response.</p>
   */
  NextToken?: string;
}

export namespace DescribeConformancePackStatusRequest {
  export function isa(o: any): o is DescribeConformancePackStatusRequest {
    return __isa(o, "DescribeConformancePackStatusRequest");
  }
}

export interface DescribeConformancePackStatusResponse {
  __type?: "DescribeConformancePackStatusResponse";
  /**
   * <p>A list of <code>ConformancePackStatusDetail</code> objects.</p>
   */
  ConformancePackStatusDetails?: Array<ConformancePackStatusDetail>;

  /**
   * <p>The <code>nextToken</code> string returned in a previous request that you use to request the next page of results in a paginated response.</p>
   */
  NextToken?: string;
}

export namespace DescribeConformancePackStatusResponse {
  export function isa(o: any): o is DescribeConformancePackStatusResponse {
    return __isa(o, "DescribeConformancePackStatusResponse");
  }
}

export interface DescribeConformancePacksRequest {
  __type?: "DescribeConformancePacksRequest";
  /**
   * <p>Comma-separated list of conformance pack names for which you want details. If you do not specify any names, AWS Config returns details for all your conformance packs. </p>
   */
  ConformancePackNames?: Array<string>;

  /**
   * <p>The maximum number of conformance packs returned on each page.</p>
   */
  Limit?: number;

  /**
   * <p>The <code>nextToken</code> string returned in a previous request that you use to request the next page of results in a paginated response.</p>
   */
  NextToken?: string;
}

export namespace DescribeConformancePacksRequest {
  export function isa(o: any): o is DescribeConformancePacksRequest {
    return __isa(o, "DescribeConformancePacksRequest");
  }
}

export interface DescribeConformancePacksResponse {
  __type?: "DescribeConformancePacksResponse";
  /**
   * <p>Returns a list of <code>ConformancePackDetail</code> objects.</p>
   */
  ConformancePackDetails?: Array<ConformancePackDetail>;

  /**
   * <p>The <code>nextToken</code> string returned in a previous request that you use to request the next page of results in a paginated response.</p>
   */
  NextToken?: string;
}

export namespace DescribeConformancePacksResponse {
  export function isa(o: any): o is DescribeConformancePacksResponse {
    return __isa(o, "DescribeConformancePacksResponse");
  }
}

/**
 * <p>The input for the <a>DeliveryChannelStatus</a>
 * 			action.</p>
 */
export interface DescribeDeliveryChannelStatusRequest {
  __type?: "DescribeDeliveryChannelStatusRequest";
  /**
   * <p>A list of delivery channel names.</p>
   */
  DeliveryChannelNames?: Array<string>;
}

export namespace DescribeDeliveryChannelStatusRequest {
  export function isa(o: any): o is DescribeDeliveryChannelStatusRequest {
    return __isa(o, "DescribeDeliveryChannelStatusRequest");
  }
}

/**
 * <p>The output for the <a>DescribeDeliveryChannelStatus</a> action.</p>
 */
export interface DescribeDeliveryChannelStatusResponse {
  __type?: "DescribeDeliveryChannelStatusResponse";
  /**
   * <p>A list that contains the status of a specified delivery
   * 			channel.</p>
   */
  DeliveryChannelsStatus?: Array<DeliveryChannelStatus>;
}

export namespace DescribeDeliveryChannelStatusResponse {
  export function isa(o: any): o is DescribeDeliveryChannelStatusResponse {
    return __isa(o, "DescribeDeliveryChannelStatusResponse");
  }
}

/**
 * <p>The input for the <a>DescribeDeliveryChannels</a>
 * 			action.</p>
 */
export interface DescribeDeliveryChannelsRequest {
  __type?: "DescribeDeliveryChannelsRequest";
  /**
   * <p>A list of delivery channel names.</p>
   */
  DeliveryChannelNames?: Array<string>;
}

export namespace DescribeDeliveryChannelsRequest {
  export function isa(o: any): o is DescribeDeliveryChannelsRequest {
    return __isa(o, "DescribeDeliveryChannelsRequest");
  }
}

/**
 * <p>The output for the <a>DescribeDeliveryChannels</a>
 * 			action.</p>
 */
export interface DescribeDeliveryChannelsResponse {
  __type?: "DescribeDeliveryChannelsResponse";
  /**
   * <p>A list that contains the descriptions of the specified delivery
   * 			channel.</p>
   */
  DeliveryChannels?: Array<DeliveryChannel>;
}

export namespace DescribeDeliveryChannelsResponse {
  export function isa(o: any): o is DescribeDeliveryChannelsResponse {
    return __isa(o, "DescribeDeliveryChannelsResponse");
  }
}

export interface DescribeOrganizationConfigRuleStatusesRequest {
  __type?: "DescribeOrganizationConfigRuleStatusesRequest";
  /**
   * <p>The maximum number of <code>OrganizationConfigRuleStatuses</code> returned on each page. If you do no specify a number, AWS Config uses the default. The default is 100.</p>
   */
  Limit?: number;

  /**
   * <p>The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response. </p>
   */
  NextToken?: string;

  /**
   * <p>The names of organization config rules for which you want status details. If you do not specify any names, AWS Config returns details for all your organization AWS Confg rules.</p>
   */
  OrganizationConfigRuleNames?: Array<string>;
}

export namespace DescribeOrganizationConfigRuleStatusesRequest {
  export function isa(
    o: any
  ): o is DescribeOrganizationConfigRuleStatusesRequest {
    return __isa(o, "DescribeOrganizationConfigRuleStatusesRequest");
  }
}

export interface DescribeOrganizationConfigRuleStatusesResponse {
  __type?: "DescribeOrganizationConfigRuleStatusesResponse";
  /**
   * <p>The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response. </p>
   */
  NextToken?: string;

  /**
   * <p>A list of <code>OrganizationConfigRuleStatus</code> objects.</p>
   */
  OrganizationConfigRuleStatuses?: Array<OrganizationConfigRuleStatus>;
}

export namespace DescribeOrganizationConfigRuleStatusesResponse {
  export function isa(
    o: any
  ): o is DescribeOrganizationConfigRuleStatusesResponse {
    return __isa(o, "DescribeOrganizationConfigRuleStatusesResponse");
  }
}

export interface DescribeOrganizationConfigRulesRequest {
  __type?: "DescribeOrganizationConfigRulesRequest";
  /**
   * <p>The maximum number of organization config rules returned on each page. If you do no specify a number, AWS Config uses the default. The default is 100.</p>
   */
  Limit?: number;

  /**
   * <p>The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response. </p>
   */
  NextToken?: string;

  /**
   * <p>The names of organization config rules for which you want details. If you do not specify any names, AWS Config returns details for all your organization config rules.</p>
   */
  OrganizationConfigRuleNames?: Array<string>;
}

export namespace DescribeOrganizationConfigRulesRequest {
  export function isa(o: any): o is DescribeOrganizationConfigRulesRequest {
    return __isa(o, "DescribeOrganizationConfigRulesRequest");
  }
}

export interface DescribeOrganizationConfigRulesResponse {
  __type?: "DescribeOrganizationConfigRulesResponse";
  /**
   * <p>The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response. </p>
   */
  NextToken?: string;

  /**
   * <p>Returns a list of <code>OrganizationConfigRule</code> objects.</p>
   */
  OrganizationConfigRules?: Array<OrganizationConfigRule>;
}

export namespace DescribeOrganizationConfigRulesResponse {
  export function isa(o: any): o is DescribeOrganizationConfigRulesResponse {
    return __isa(o, "DescribeOrganizationConfigRulesResponse");
  }
}

export interface DescribeOrganizationConformancePackStatusesRequest {
  __type?: "DescribeOrganizationConformancePackStatusesRequest";
  /**
   * <p>The maximum number of OrganizationConformancePackStatuses returned on each page.
   * 			If you do no specify a number, AWS Config uses the default. The default is 100. </p>
   */
  Limit?: number;

  /**
   * <p>The nextToken string returned on a previous page that you use to get the next page of results in a paginated response. </p>
   */
  NextToken?: string;

  /**
   * <p>The names of organization conformance packs for which you want status details.
   * 			If you do not specify any names, AWS Config returns details for all your organization conformance packs. </p>
   */
  OrganizationConformancePackNames?: Array<string>;
}

export namespace DescribeOrganizationConformancePackStatusesRequest {
  export function isa(
    o: any
  ): o is DescribeOrganizationConformancePackStatusesRequest {
    return __isa(o, "DescribeOrganizationConformancePackStatusesRequest");
  }
}

export interface DescribeOrganizationConformancePackStatusesResponse {
  __type?: "DescribeOrganizationConformancePackStatusesResponse";
  /**
   * <p>The nextToken string returned on a previous page that you use to get the next page of results in a paginated response. </p>
   */
  NextToken?: string;

  /**
   * <p>A list of <code>OrganizationConformancePackStatus</code> objects. </p>
   */
  OrganizationConformancePackStatuses?: Array<
    OrganizationConformancePackStatus
  >;
}

export namespace DescribeOrganizationConformancePackStatusesResponse {
  export function isa(
    o: any
  ): o is DescribeOrganizationConformancePackStatusesResponse {
    return __isa(o, "DescribeOrganizationConformancePackStatusesResponse");
  }
}

export interface DescribeOrganizationConformancePacksRequest {
  __type?: "DescribeOrganizationConformancePacksRequest";
  /**
   * <p>The maximum number of organization config packs returned on each page. If you do no specify a
   * 			number, AWS Config uses the default. The default is 100.</p>
   */
  Limit?: number;

  /**
   * <p>The nextToken string returned on a previous page that you use to get the next page of results in a
   * 			paginated response.</p>
   */
  NextToken?: string;

  /**
   * <p>The name that you assign to an organization conformance pack.</p>
   */
  OrganizationConformancePackNames?: Array<string>;
}

export namespace DescribeOrganizationConformancePacksRequest {
  export function isa(
    o: any
  ): o is DescribeOrganizationConformancePacksRequest {
    return __isa(o, "DescribeOrganizationConformancePacksRequest");
  }
}

export interface DescribeOrganizationConformancePacksResponse {
  __type?: "DescribeOrganizationConformancePacksResponse";
  /**
   * <p>The nextToken string returned on a previous page that you use to get the next page of results in a
   * 			paginated response.</p>
   */
  NextToken?: string;

  /**
   * <p>Returns a list of OrganizationConformancePacks objects.</p>
   */
  OrganizationConformancePacks?: Array<OrganizationConformancePack>;
}

export namespace DescribeOrganizationConformancePacksResponse {
  export function isa(
    o: any
  ): o is DescribeOrganizationConformancePacksResponse {
    return __isa(o, "DescribeOrganizationConformancePacksResponse");
  }
}

export interface DescribePendingAggregationRequestsRequest {
  __type?: "DescribePendingAggregationRequestsRequest";
  /**
   * <p>The maximum number of evaluation results returned on each page.
   * 			The default is maximum. If you specify 0, AWS Config uses the
   * 			default.</p>
   */
  Limit?: number;

  /**
   * <p>The <code>nextToken</code> string returned on a previous page that you use
   * 			to get the next page of results in a paginated response.</p>
   */
  NextToken?: string;
}

export namespace DescribePendingAggregationRequestsRequest {
  export function isa(o: any): o is DescribePendingAggregationRequestsRequest {
    return __isa(o, "DescribePendingAggregationRequestsRequest");
  }
}

export interface DescribePendingAggregationRequestsResponse {
  __type?: "DescribePendingAggregationRequestsResponse";
  /**
   * <p>The <code>nextToken</code> string returned on a previous page that you use
   * 			to get the next page of results in a paginated response.</p>
   */
  NextToken?: string;

  /**
   * <p>Returns a PendingAggregationRequests object.</p>
   */
  PendingAggregationRequests?: Array<PendingAggregationRequest>;
}

export namespace DescribePendingAggregationRequestsResponse {
  export function isa(o: any): o is DescribePendingAggregationRequestsResponse {
    return __isa(o, "DescribePendingAggregationRequestsResponse");
  }
}

export interface DescribeRemediationConfigurationsRequest {
  __type?: "DescribeRemediationConfigurationsRequest";
  /**
   * <p>A list of AWS Config rule names of remediation configurations for which you want details. </p>
   */
  ConfigRuleNames: Array<string> | undefined;
}

export namespace DescribeRemediationConfigurationsRequest {
  export function isa(o: any): o is DescribeRemediationConfigurationsRequest {
    return __isa(o, "DescribeRemediationConfigurationsRequest");
  }
}

export interface DescribeRemediationConfigurationsResponse {
  __type?: "DescribeRemediationConfigurationsResponse";
  /**
   * <p>Returns a remediation configuration object.</p>
   */
  RemediationConfigurations?: Array<RemediationConfiguration>;
}

export namespace DescribeRemediationConfigurationsResponse {
  export function isa(o: any): o is DescribeRemediationConfigurationsResponse {
    return __isa(o, "DescribeRemediationConfigurationsResponse");
  }
}

export interface DescribeRemediationExceptionsRequest {
  __type?: "DescribeRemediationExceptionsRequest";
  /**
   * <p>The name of the AWS Config rule.</p>
   */
  ConfigRuleName: string | undefined;

  /**
   * <p>The maximum number of RemediationExceptionResourceKey returned on each page. The default is 25. If you specify 0, AWS Config uses the default.</p>
   */
  Limit?: number;

  /**
   * <p>The <code>nextToken</code> string returned in a previous request that you use to request the next page of results in a paginated response.</p>
   */
  NextToken?: string;

  /**
   * <p>An exception list of resource exception keys to be processed with the current request. AWS Config adds exception for each resource key. For example, AWS Config adds 3 exceptions for 3 resource keys. </p>
   */
  ResourceKeys?: Array<RemediationExceptionResourceKey>;
}

export namespace DescribeRemediationExceptionsRequest {
  export function isa(o: any): o is DescribeRemediationExceptionsRequest {
    return __isa(o, "DescribeRemediationExceptionsRequest");
  }
}

export interface DescribeRemediationExceptionsResponse {
  __type?: "DescribeRemediationExceptionsResponse";
  /**
   * <p>The <code>nextToken</code> string returned in a previous request that you use to request the next page of results in a paginated response.</p>
   */
  NextToken?: string;

  /**
   * <p>Returns a list of remediation exception objects.</p>
   */
  RemediationExceptions?: Array<RemediationException>;
}

export namespace DescribeRemediationExceptionsResponse {
  export function isa(o: any): o is DescribeRemediationExceptionsResponse {
    return __isa(o, "DescribeRemediationExceptionsResponse");
  }
}

export interface DescribeRemediationExecutionStatusRequest {
  __type?: "DescribeRemediationExecutionStatusRequest";
  /**
   * <p>A list of AWS Config rule names.</p>
   */
  ConfigRuleName: string | undefined;

  /**
   * <p>The maximum number of RemediationExecutionStatuses returned on each page. The default is maximum. If you specify 0, AWS Config uses the default. </p>
   */
  Limit?: number;

  /**
   * <p>The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of resource keys to be processed with the current request. Each element in the list consists of the resource type and resource ID. </p>
   */
  ResourceKeys?: Array<ResourceKey>;
}

export namespace DescribeRemediationExecutionStatusRequest {
  export function isa(o: any): o is DescribeRemediationExecutionStatusRequest {
    return __isa(o, "DescribeRemediationExecutionStatusRequest");
  }
}

export interface DescribeRemediationExecutionStatusResponse {
  __type?: "DescribeRemediationExecutionStatusResponse";
  /**
   * <p>The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response.</p>
   */
  NextToken?: string;

  /**
   * <p>Returns a list of remediation execution statuses objects.</p>
   */
  RemediationExecutionStatuses?: Array<RemediationExecutionStatus>;
}

export namespace DescribeRemediationExecutionStatusResponse {
  export function isa(o: any): o is DescribeRemediationExecutionStatusResponse {
    return __isa(o, "DescribeRemediationExecutionStatusResponse");
  }
}

export interface DescribeRetentionConfigurationsRequest {
  __type?: "DescribeRetentionConfigurationsRequest";
  /**
   * <p>The <code>nextToken</code> string returned on a previous page
   * 			that you use to get the next page of results in a paginated
   * 			response. </p>
   */
  NextToken?: string;

  /**
   * <p>A list of names of retention configurations for which you want
   * 			details. If you do not specify a name, AWS Config returns details
   * 			for all the retention configurations for that account.</p>
   * 		       <note>
   * 			         <p>Currently, AWS Config supports only one retention
   * 				configuration per region in your account.</p>
   * 		       </note>
   */
  RetentionConfigurationNames?: Array<string>;
}

export namespace DescribeRetentionConfigurationsRequest {
  export function isa(o: any): o is DescribeRetentionConfigurationsRequest {
    return __isa(o, "DescribeRetentionConfigurationsRequest");
  }
}

export interface DescribeRetentionConfigurationsResponse {
  __type?: "DescribeRetentionConfigurationsResponse";
  /**
   * <p>The <code>nextToken</code> string returned on a previous page
   * 			that you use to get the next page of results in a paginated
   * 			response. </p>
   */
  NextToken?: string;

  /**
   * <p>Returns a retention configuration object.</p>
   */
  RetentionConfigurations?: Array<RetentionConfiguration>;
}

export namespace DescribeRetentionConfigurationsResponse {
  export function isa(o: any): o is DescribeRetentionConfigurationsResponse {
    return __isa(o, "DescribeRetentionConfigurationsResponse");
  }
}

/**
 * <p>Identifies an AWS resource and indicates whether it complies
 * 			with the AWS Config rule that it was evaluated against.</p>
 */
export interface Evaluation {
  __type?: "Evaluation";
  /**
   * <p>Supplementary information about how the evaluation determined
   * 			the compliance.</p>
   */
  Annotation?: string;

  /**
   * <p>The ID of the AWS resource that was evaluated.</p>
   */
  ComplianceResourceId: string | undefined;

  /**
   * <p>The type of AWS resource that was evaluated.</p>
   */
  ComplianceResourceType: string | undefined;

  /**
   * <p>Indicates whether the AWS resource complies with the AWS Config
   * 			rule that it was evaluated against.</p>
   * 		       <p>For the <code>Evaluation</code> data type, AWS Config supports
   * 			only the <code>COMPLIANT</code>, <code>NON_COMPLIANT</code>, and
   * 				<code>NOT_APPLICABLE</code> values. AWS Config does not support
   * 			the <code>INSUFFICIENT_DATA</code> value for this data
   * 			type.</p>
   * 		       <p>Similarly, AWS Config does not accept
   * 				<code>INSUFFICIENT_DATA</code> as the value for
   * 				<code>ComplianceType</code> from a <code>PutEvaluations</code>
   * 			request. For example, an AWS Lambda function for a custom AWS Config
   * 			rule cannot pass an <code>INSUFFICIENT_DATA</code> value to AWS
   * 			Config.</p>
   */
  ComplianceType: ComplianceType | string | undefined;

  /**
   * <p>The time of the event in AWS Config that triggered the
   * 			evaluation. For event-based evaluations, the time indicates when AWS
   * 			Config created the configuration item that triggered the evaluation.
   * 			For periodic evaluations, the time indicates when AWS Config
   * 			triggered the evaluation at the frequency that you specified (for
   * 			example, every 24 hours).</p>
   */
  OrderingTimestamp: Date | undefined;
}

export namespace Evaluation {
  export function isa(o: any): o is Evaluation {
    return __isa(o, "Evaluation");
  }
}

/**
 * <p>The details of an AWS Config evaluation. Provides the AWS
 * 			resource that was evaluated, the compliance of the resource, related
 * 			time stamps, and supplementary information.</p>
 */
export interface EvaluationResult {
  __type?: "EvaluationResult";
  /**
   * <p>Supplementary information about how the evaluation determined
   * 			the compliance.</p>
   */
  Annotation?: string;

  /**
   * <p>Indicates whether the AWS resource complies with the AWS Config
   * 			rule that evaluated it.</p>
   * 		       <p>For the <code>EvaluationResult</code> data type, AWS Config
   * 			supports only the <code>COMPLIANT</code>,
   * 			<code>NON_COMPLIANT</code>, and <code>NOT_APPLICABLE</code> values.
   * 			AWS Config does not support the <code>INSUFFICIENT_DATA</code> value
   * 			for the <code>EvaluationResult</code> data type.</p>
   */
  ComplianceType?: ComplianceType | string;

  /**
   * <p>The time when the AWS Config rule evaluated the AWS
   * 			resource.</p>
   */
  ConfigRuleInvokedTime?: Date;

  /**
   * <p>Uniquely identifies the evaluation result.</p>
   */
  EvaluationResultIdentifier?: EvaluationResultIdentifier;

  /**
   * <p>The time when AWS Config recorded the evaluation
   * 			result.</p>
   */
  ResultRecordedTime?: Date;

  /**
   * <p>An encrypted token that associates an evaluation with an AWS
   * 			Config rule. The token identifies the rule, the AWS resource being
   * 			evaluated, and the event that triggered the evaluation.</p>
   */
  ResultToken?: string;
}

export namespace EvaluationResult {
  export function isa(o: any): o is EvaluationResult {
    return __isa(o, "EvaluationResult");
  }
}

/**
 * <p>Uniquely identifies an evaluation result.</p>
 */
export interface EvaluationResultIdentifier {
  __type?: "EvaluationResultIdentifier";
  /**
   * <p>Identifies an AWS Config rule used to evaluate an AWS resource,
   * 			and provides the type and ID of the evaluated resource.</p>
   */
  EvaluationResultQualifier?: EvaluationResultQualifier;

  /**
   * <p>The time of the event that triggered the evaluation of your AWS
   * 			resources. The time can indicate when AWS Config delivered a
   * 			configuration item change notification, or it can indicate when AWS
   * 			Config delivered the configuration snapshot, depending on which
   * 			event triggered the evaluation.</p>
   */
  OrderingTimestamp?: Date;
}

export namespace EvaluationResultIdentifier {
  export function isa(o: any): o is EvaluationResultIdentifier {
    return __isa(o, "EvaluationResultIdentifier");
  }
}

/**
 * <p>Identifies an AWS Config rule that evaluated an AWS resource,
 * 			and provides the type and ID of the resource that the rule
 * 			evaluated.</p>
 */
export interface EvaluationResultQualifier {
  __type?: "EvaluationResultQualifier";
  /**
   * <p>The name of the AWS Config rule that was used in the
   * 			evaluation.</p>
   */
  ConfigRuleName?: string;

  /**
   * <p>The ID of the evaluated AWS resource.</p>
   */
  ResourceId?: string;

  /**
   * <p>The type of AWS resource that was evaluated.</p>
   */
  ResourceType?: string;
}

export namespace EvaluationResultQualifier {
  export function isa(o: any): o is EvaluationResultQualifier {
    return __isa(o, "EvaluationResultQualifier");
  }
}

export enum EventSource {
  Aws_Config = "aws.config"
}

/**
 * <p>The controls that AWS Config uses for executing remediations.</p>
 */
export interface ExecutionControls {
  __type?: "ExecutionControls";
  /**
   * <p>A SsmControls object.</p>
   */
  SsmControls?: SsmControls;
}

export namespace ExecutionControls {
  export function isa(o: any): o is ExecutionControls {
    return __isa(o, "ExecutionControls");
  }
}

/**
 * <p>List of each of the failed delete remediation exceptions with specific reasons.</p>
 */
export interface FailedDeleteRemediationExceptionsBatch {
  __type?: "FailedDeleteRemediationExceptionsBatch";
  /**
   * <p>Returns remediation exception resource key object of the failed items.</p>
   */
  FailedItems?: Array<RemediationExceptionResourceKey>;

  /**
   * <p>Returns a failure message for delete remediation exception. For example, AWS Config creates an exception due to an internal error.</p>
   */
  FailureMessage?: string;
}

export namespace FailedDeleteRemediationExceptionsBatch {
  export function isa(o: any): o is FailedDeleteRemediationExceptionsBatch {
    return __isa(o, "FailedDeleteRemediationExceptionsBatch");
  }
}

/**
 * <p>List of each of the failed remediations with specific reasons.</p>
 */
export interface FailedRemediationBatch {
  __type?: "FailedRemediationBatch";
  /**
   * <p>Returns remediation configurations of the failed items.</p>
   */
  FailedItems?: Array<RemediationConfiguration>;

  /**
   * <p>Returns a failure message. For example, the resource is already compliant.</p>
   */
  FailureMessage?: string;
}

export namespace FailedRemediationBatch {
  export function isa(o: any): o is FailedRemediationBatch {
    return __isa(o, "FailedRemediationBatch");
  }
}

/**
 * <p>List of each of the failed remediation exceptions with specific reasons.</p>
 */
export interface FailedRemediationExceptionBatch {
  __type?: "FailedRemediationExceptionBatch";
  /**
   * <p>Returns remediation exception resource key object of the failed items.</p>
   */
  FailedItems?: Array<RemediationException>;

  /**
   * <p>Returns a failure message. For example, the auto-remediation has failed.</p>
   */
  FailureMessage?: string;
}

export namespace FailedRemediationExceptionBatch {
  export function isa(o: any): o is FailedRemediationExceptionBatch {
    return __isa(o, "FailedRemediationExceptionBatch");
  }
}

/**
 * <p>Details about the fields such as name of the field.</p>
 */
export interface FieldInfo {
  __type?: "FieldInfo";
  /**
   * <p>Name of the field.</p>
   */
  Name?: string;
}

export namespace FieldInfo {
  export function isa(o: any): o is FieldInfo {
    return __isa(o, "FieldInfo");
  }
}

export interface GetAggregateComplianceDetailsByConfigRuleRequest {
  __type?: "GetAggregateComplianceDetailsByConfigRuleRequest";
  /**
   * <p>The 12-digit account ID of the source account.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The source region from where the data is aggregated.</p>
   */
  AwsRegion: string | undefined;

  /**
   * <p>The resource compliance status.</p>
   * 		       <note>
   * 			         <p>For the
   * 					<code>GetAggregateComplianceDetailsByConfigRuleRequest</code>
   * 				data type, AWS Config supports only the <code>COMPLIANT</code>
   * 				and <code>NON_COMPLIANT</code>. AWS Config does not support the
   * 					<code>NOT_APPLICABLE</code> and
   * 					<code>INSUFFICIENT_DATA</code> values.</p>
   * 		       </note>
   */
  ComplianceType?: ComplianceType | string;

  /**
   * <p>The name of the AWS Config rule for which you want compliance
   * 			information.</p>
   */
  ConfigRuleName: string | undefined;

  /**
   * <p>The name of the configuration aggregator.</p>
   */
  ConfigurationAggregatorName: string | undefined;

  /**
   * <p>The maximum number of evaluation results returned on each page.
   * 			The default is 50. You cannot specify a number greater than 100. If
   * 			you specify 0, AWS Config uses the default.</p>
   */
  Limit?: number;

  /**
   * <p>The <code>nextToken</code> string returned on a previous page that you use
   * 			to get the next page of results in a paginated response.</p>
   */
  NextToken?: string;
}

export namespace GetAggregateComplianceDetailsByConfigRuleRequest {
  export function isa(
    o: any
  ): o is GetAggregateComplianceDetailsByConfigRuleRequest {
    return __isa(o, "GetAggregateComplianceDetailsByConfigRuleRequest");
  }
}

export interface GetAggregateComplianceDetailsByConfigRuleResponse {
  __type?: "GetAggregateComplianceDetailsByConfigRuleResponse";
  /**
   * <p>Returns an AggregateEvaluationResults object.</p>
   */
  AggregateEvaluationResults?: Array<AggregateEvaluationResult>;

  /**
   * <p>The <code>nextToken</code> string returned on a previous page that you use
   * 			to get the next page of results in a paginated response.</p>
   */
  NextToken?: string;
}

export namespace GetAggregateComplianceDetailsByConfigRuleResponse {
  export function isa(
    o: any
  ): o is GetAggregateComplianceDetailsByConfigRuleResponse {
    return __isa(o, "GetAggregateComplianceDetailsByConfigRuleResponse");
  }
}

export interface GetAggregateConfigRuleComplianceSummaryRequest {
  __type?: "GetAggregateConfigRuleComplianceSummaryRequest";
  /**
   * <p>The name of the configuration aggregator.</p>
   */
  ConfigurationAggregatorName: string | undefined;

  /**
   * <p>Filters the results based on the
   * 			ConfigRuleComplianceSummaryFilters object.</p>
   */
  Filters?: ConfigRuleComplianceSummaryFilters;

  /**
   * <p>Groups the result based on ACCOUNT_ID or AWS_REGION.</p>
   */
  GroupByKey?: ConfigRuleComplianceSummaryGroupKey | string;

  /**
   * <p>The maximum number of evaluation results returned on each page.
   * 			The default is 1000. You cannot specify a number greater than 1000.
   * 			If you specify 0, AWS Config uses the default.</p>
   */
  Limit?: number;

  /**
   * <p>The <code>nextToken</code> string returned on a previous page that you use
   * 			to get the next page of results in a paginated response.</p>
   */
  NextToken?: string;
}

export namespace GetAggregateConfigRuleComplianceSummaryRequest {
  export function isa(
    o: any
  ): o is GetAggregateConfigRuleComplianceSummaryRequest {
    return __isa(o, "GetAggregateConfigRuleComplianceSummaryRequest");
  }
}

export interface GetAggregateConfigRuleComplianceSummaryResponse {
  __type?: "GetAggregateConfigRuleComplianceSummaryResponse";
  /**
   * <p>Returns a list of AggregateComplianceCounts object.</p>
   */
  AggregateComplianceCounts?: Array<AggregateComplianceCount>;

  /**
   * <p>Groups the result based on ACCOUNT_ID or AWS_REGION.</p>
   */
  GroupByKey?: string;

  /**
   * <p>The <code>nextToken</code> string returned on a previous page that you use
   * 			to get the next page of results in a paginated response.</p>
   */
  NextToken?: string;
}

export namespace GetAggregateConfigRuleComplianceSummaryResponse {
  export function isa(
    o: any
  ): o is GetAggregateConfigRuleComplianceSummaryResponse {
    return __isa(o, "GetAggregateConfigRuleComplianceSummaryResponse");
  }
}

export interface GetAggregateDiscoveredResourceCountsRequest {
  __type?: "GetAggregateDiscoveredResourceCountsRequest";
  /**
   * <p>The name of the configuration aggregator.</p>
   */
  ConfigurationAggregatorName: string | undefined;

  /**
   * <p>Filters the results based on the <code>ResourceCountFilters</code> object.</p>
   */
  Filters?: ResourceCountFilters;

  /**
   * <p>The key to group the resource counts.</p>
   */
  GroupByKey?: ResourceCountGroupKey | string;

  /**
   * <p>The maximum number of <a>GroupedResourceCount</a> objects returned on each page. The default is 1000. You cannot specify a number greater than 1000. If you specify 0, AWS Config uses the default.</p>
   */
  Limit?: number;

  /**
   * <p>The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response. </p>
   */
  NextToken?: string;
}

export namespace GetAggregateDiscoveredResourceCountsRequest {
  export function isa(
    o: any
  ): o is GetAggregateDiscoveredResourceCountsRequest {
    return __isa(o, "GetAggregateDiscoveredResourceCountsRequest");
  }
}

export interface GetAggregateDiscoveredResourceCountsResponse {
  __type?: "GetAggregateDiscoveredResourceCountsResponse";
  /**
   * <p>The key passed into the request object. If <code>GroupByKey</code> is not provided, the result will be empty.</p>
   */
  GroupByKey?: string;

  /**
   * <p>Returns a list of GroupedResourceCount objects.</p>
   */
  GroupedResourceCounts?: Array<GroupedResourceCount>;

  /**
   * <p>The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response.</p>
   */
  NextToken?: string;

  /**
   * <p>The total number of resources that are present in an aggregator with the filters that you provide.</p>
   */
  TotalDiscoveredResources: number | undefined;
}

export namespace GetAggregateDiscoveredResourceCountsResponse {
  export function isa(
    o: any
  ): o is GetAggregateDiscoveredResourceCountsResponse {
    return __isa(o, "GetAggregateDiscoveredResourceCountsResponse");
  }
}

export interface GetAggregateResourceConfigRequest {
  __type?: "GetAggregateResourceConfigRequest";
  /**
   * <p>The name of the configuration aggregator.</p>
   */
  ConfigurationAggregatorName: string | undefined;

  /**
   * <p>An object that identifies aggregate resource.</p>
   */
  ResourceIdentifier: AggregateResourceIdentifier | undefined;
}

export namespace GetAggregateResourceConfigRequest {
  export function isa(o: any): o is GetAggregateResourceConfigRequest {
    return __isa(o, "GetAggregateResourceConfigRequest");
  }
}

export interface GetAggregateResourceConfigResponse {
  __type?: "GetAggregateResourceConfigResponse";
  /**
   * <p>Returns a <code>ConfigurationItem</code> object.</p>
   */
  ConfigurationItem?: ConfigurationItem;
}

export namespace GetAggregateResourceConfigResponse {
  export function isa(o: any): o is GetAggregateResourceConfigResponse {
    return __isa(o, "GetAggregateResourceConfigResponse");
  }
}

/**
 * <p></p>
 */
export interface GetComplianceDetailsByConfigRuleRequest {
  __type?: "GetComplianceDetailsByConfigRuleRequest";
  /**
   * <p>Filters the results by compliance.</p>
   * 		       <p>The allowed values are <code>COMPLIANT</code>,
   * 				<code>NON_COMPLIANT</code>, and
   * 			<code>NOT_APPLICABLE</code>.</p>
   */
  ComplianceTypes?: Array<ComplianceType | string>;

  /**
   * <p>The name of the AWS Config rule for which you want compliance
   * 			information.</p>
   */
  ConfigRuleName: string | undefined;

  /**
   * <p>The maximum number of evaluation results returned on each page.
   * 			The default is 10. You cannot specify a number greater than 100. If
   * 			you specify 0, AWS Config uses the default.</p>
   */
  Limit?: number;

  /**
   * <p>The <code>nextToken</code> string returned on a previous page
   * 			that you use to get the next page of results in a paginated
   * 			response.</p>
   */
  NextToken?: string;
}

export namespace GetComplianceDetailsByConfigRuleRequest {
  export function isa(o: any): o is GetComplianceDetailsByConfigRuleRequest {
    return __isa(o, "GetComplianceDetailsByConfigRuleRequest");
  }
}

/**
 * <p></p>
 */
export interface GetComplianceDetailsByConfigRuleResponse {
  __type?: "GetComplianceDetailsByConfigRuleResponse";
  /**
   * <p>Indicates whether the AWS resource complies with the specified
   * 			AWS Config rule.</p>
   */
  EvaluationResults?: Array<EvaluationResult>;

  /**
   * <p>The string that you use in a subsequent request to get the next
   * 			page of results in a paginated response.</p>
   */
  NextToken?: string;
}

export namespace GetComplianceDetailsByConfigRuleResponse {
  export function isa(o: any): o is GetComplianceDetailsByConfigRuleResponse {
    return __isa(o, "GetComplianceDetailsByConfigRuleResponse");
  }
}

/**
 * <p></p>
 */
export interface GetComplianceDetailsByResourceRequest {
  __type?: "GetComplianceDetailsByResourceRequest";
  /**
   * <p>Filters the results by compliance.</p>
   * 		       <p>The allowed values are <code>COMPLIANT</code>,
   * 				<code>NON_COMPLIANT</code>, and
   * 			<code>NOT_APPLICABLE</code>.</p>
   */
  ComplianceTypes?: Array<ComplianceType | string>;

  /**
   * <p>The <code>nextToken</code> string returned on a previous page
   * 			that you use to get the next page of results in a paginated
   * 			response.</p>
   */
  NextToken?: string;

  /**
   * <p>The ID of the AWS resource for which you want compliance
   * 			information.</p>
   */
  ResourceId: string | undefined;

  /**
   * <p>The type of the AWS resource for which you want compliance
   * 			information.</p>
   */
  ResourceType: string | undefined;
}

export namespace GetComplianceDetailsByResourceRequest {
  export function isa(o: any): o is GetComplianceDetailsByResourceRequest {
    return __isa(o, "GetComplianceDetailsByResourceRequest");
  }
}

/**
 * <p></p>
 */
export interface GetComplianceDetailsByResourceResponse {
  __type?: "GetComplianceDetailsByResourceResponse";
  /**
   * <p>Indicates whether the specified AWS resource complies each AWS
   * 			Config rule.</p>
   */
  EvaluationResults?: Array<EvaluationResult>;

  /**
   * <p>The string that you use in a subsequent request to get the next
   * 			page of results in a paginated response.</p>
   */
  NextToken?: string;
}

export namespace GetComplianceDetailsByResourceResponse {
  export function isa(o: any): o is GetComplianceDetailsByResourceResponse {
    return __isa(o, "GetComplianceDetailsByResourceResponse");
  }
}

/**
 * <p></p>
 */
export interface GetComplianceSummaryByConfigRuleResponse {
  __type?: "GetComplianceSummaryByConfigRuleResponse";
  /**
   * <p>The number of AWS Config rules that are compliant and the
   * 			number that are noncompliant, up to a maximum of 25 for
   * 			each.</p>
   */
  ComplianceSummary?: ComplianceSummary;
}

export namespace GetComplianceSummaryByConfigRuleResponse {
  export function isa(o: any): o is GetComplianceSummaryByConfigRuleResponse {
    return __isa(o, "GetComplianceSummaryByConfigRuleResponse");
  }
}

/**
 * <p></p>
 */
export interface GetComplianceSummaryByResourceTypeRequest {
  __type?: "GetComplianceSummaryByResourceTypeRequest";
  /**
   * <p>Specify one or more resource types to get the number of
   * 			resources that are compliant and the number that are noncompliant
   * 			for each resource type.</p>
   * 		       <p>For this request, you can specify an AWS resource type such as
   * 				<code>AWS::EC2::Instance</code>. You can specify that the
   * 			resource type is an AWS account by specifying
   * 				<code>AWS::::Account</code>.</p>
   */
  ResourceTypes?: Array<string>;
}

export namespace GetComplianceSummaryByResourceTypeRequest {
  export function isa(o: any): o is GetComplianceSummaryByResourceTypeRequest {
    return __isa(o, "GetComplianceSummaryByResourceTypeRequest");
  }
}

/**
 * <p></p>
 */
export interface GetComplianceSummaryByResourceTypeResponse {
  __type?: "GetComplianceSummaryByResourceTypeResponse";
  /**
   * <p>The number of resources that are compliant and the number that
   * 			are noncompliant. If one or more resource types were provided with
   * 			the request, the numbers are returned for each resource type. The
   * 			maximum number returned is 100.</p>
   */
  ComplianceSummariesByResourceType?: Array<ComplianceSummaryByResourceType>;
}

export namespace GetComplianceSummaryByResourceTypeResponse {
  export function isa(o: any): o is GetComplianceSummaryByResourceTypeResponse {
    return __isa(o, "GetComplianceSummaryByResourceTypeResponse");
  }
}

export interface GetConformancePackComplianceDetailsRequest {
  __type?: "GetConformancePackComplianceDetailsRequest";
  /**
   * <p>Name of the conformance pack.</p>
   */
  ConformancePackName: string | undefined;

  /**
   * <p>A <code>ConformancePackEvaluationFilters</code> object.</p>
   */
  Filters?: ConformancePackEvaluationFilters;

  /**
   * <p>The maximum number of evaluation results returned on each page. If you do no specify a number, AWS Config uses the default. The default is 100.</p>
   */
  Limit?: number;

  /**
   * <p>The <code>nextToken</code> string returned in a previous request that you use to request the next page of results in a paginated response.</p>
   */
  NextToken?: string;
}

export namespace GetConformancePackComplianceDetailsRequest {
  export function isa(o: any): o is GetConformancePackComplianceDetailsRequest {
    return __isa(o, "GetConformancePackComplianceDetailsRequest");
  }
}

export interface GetConformancePackComplianceDetailsResponse {
  __type?: "GetConformancePackComplianceDetailsResponse";
  /**
   * <p>Name of the conformance pack.</p>
   */
  ConformancePackName: string | undefined;

  /**
   * <p>Returns a list of <code>ConformancePackEvaluationResult</code> objects.</p>
   */
  ConformancePackRuleEvaluationResults?: Array<ConformancePackEvaluationResult>;

  /**
   * <p>The <code>nextToken</code> string returned in a previous request that you use to request the next page of results in a paginated response.</p>
   */
  NextToken?: string;
}

export namespace GetConformancePackComplianceDetailsResponse {
  export function isa(
    o: any
  ): o is GetConformancePackComplianceDetailsResponse {
    return __isa(o, "GetConformancePackComplianceDetailsResponse");
  }
}

export interface GetConformancePackComplianceSummaryRequest {
  __type?: "GetConformancePackComplianceSummaryRequest";
  /**
   * <p>Names of conformance packs.</p>
   */
  ConformancePackNames: Array<string> | undefined;

  /**
   * <p>The maximum number of conformance packs returned on each page.</p>
   */
  Limit?: number;

  /**
   * <p>The nextToken string returned on a previous page that you use to get the next page of results in a paginated response.</p>
   */
  NextToken?: string;
}

export namespace GetConformancePackComplianceSummaryRequest {
  export function isa(o: any): o is GetConformancePackComplianceSummaryRequest {
    return __isa(o, "GetConformancePackComplianceSummaryRequest");
  }
}

export interface GetConformancePackComplianceSummaryResponse {
  __type?: "GetConformancePackComplianceSummaryResponse";
  /**
   * <p>A list of <code>ConformancePackComplianceSummary</code> objects. </p>
   */
  ConformancePackComplianceSummaryList?: Array<
    ConformancePackComplianceSummary
  >;

  /**
   * <p>The nextToken string returned on a previous page that you use to get the next page of results in a paginated response.</p>
   */
  NextToken?: string;
}

export namespace GetConformancePackComplianceSummaryResponse {
  export function isa(
    o: any
  ): o is GetConformancePackComplianceSummaryResponse {
    return __isa(o, "GetConformancePackComplianceSummaryResponse");
  }
}

export interface GetDiscoveredResourceCountsRequest {
  __type?: "GetDiscoveredResourceCountsRequest";
  /**
   * <p>The maximum number of <a>ResourceCount</a> objects
   * 			returned on each page. The default is 100. You cannot specify a
   * 			number greater than 100. If you specify 0, AWS Config uses the
   * 			default.</p>
   */
  limit?: number;

  /**
   * <p>The <code>nextToken</code> string returned on a previous page
   * 			that you use to get the next page of results in a paginated
   * 			response.</p>
   */
  nextToken?: string;

  /**
   * <p>The comma-separated list that specifies the resource types that
   * 			you want AWS Config to return (for example,
   * 				<code>"AWS::EC2::Instance"</code>,
   * 			<code>"AWS::IAM::User"</code>).</p>
   *
   * 		       <p>If a value for <code>resourceTypes</code> is not specified, AWS
   * 			Config returns all resource types that AWS Config is recording in
   * 			the region for your account.</p>
   * 		       <note>
   * 			         <p>If the configuration recorder is turned off, AWS Config
   * 				returns an empty list of <a>ResourceCount</a>
   * 				objects. If the configuration recorder is not recording a
   * 				specific resource type (for example, S3 buckets), that resource
   * 				type is not returned in the list of <a>ResourceCount</a> objects.</p>
   * 		       </note>
   */
  resourceTypes?: Array<string>;
}

export namespace GetDiscoveredResourceCountsRequest {
  export function isa(o: any): o is GetDiscoveredResourceCountsRequest {
    return __isa(o, "GetDiscoveredResourceCountsRequest");
  }
}

export interface GetDiscoveredResourceCountsResponse {
  __type?: "GetDiscoveredResourceCountsResponse";
  /**
   * <p>The string that you use in a subsequent request to get the next
   * 			page of results in a paginated response.</p>
   */
  nextToken?: string;

  /**
   * <p>The list of <code>ResourceCount</code> objects. Each object is
   * 			listed in descending order by the number of resources.</p>
   */
  resourceCounts?: Array<ResourceCount>;

  /**
   * <p>The total number of resources that AWS Config is recording in
   * 			the region for your account. If you specify resource types in the
   * 			request, AWS Config returns only the total number of resources for
   * 			those resource types.</p>
   *
   *
   * 		       <p class="title">
   *             <b>Example</b>
   *          </p>
   *          <ol>
   *             <li>
   * 				           <p>AWS Config is recording three resource types in the US
   * 					East (Ohio) Region for your account: 25 EC2 instances, 20
   * 					IAM users, and 15 S3 buckets, for a total of 60
   * 					resources.</p>
   * 			         </li>
   *             <li>
   * 				           <p>You make a call to the
   * 						<code>GetDiscoveredResourceCounts</code> action and
   * 					specify the resource type,
   * 						<code>"AWS::EC2::Instances"</code>, in the
   * 					request.</p>
   * 			         </li>
   *             <li>
   * 				           <p>AWS Config returns 25 for
   * 						<code>totalDiscoveredResources</code>.</p>
   * 			         </li>
   *          </ol>
   */
  totalDiscoveredResources?: number;
}

export namespace GetDiscoveredResourceCountsResponse {
  export function isa(o: any): o is GetDiscoveredResourceCountsResponse {
    return __isa(o, "GetDiscoveredResourceCountsResponse");
  }
}

export interface GetOrganizationConfigRuleDetailedStatusRequest {
  __type?: "GetOrganizationConfigRuleDetailedStatusRequest";
  /**
   * <p>A <code>StatusDetailFilters</code> object.</p>
   */
  Filters?: StatusDetailFilters;

  /**
   * <p>The maximum number of <code>OrganizationConfigRuleDetailedStatus</code> returned on each page. If you do not specify a number, AWS Config uses the default. The default is 100.</p>
   */
  Limit?: number;

  /**
   * <p>The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response. </p>
   */
  NextToken?: string;

  /**
   * <p>The name of organization config rule for which you want status details for member accounts.</p>
   */
  OrganizationConfigRuleName: string | undefined;
}

export namespace GetOrganizationConfigRuleDetailedStatusRequest {
  export function isa(
    o: any
  ): o is GetOrganizationConfigRuleDetailedStatusRequest {
    return __isa(o, "GetOrganizationConfigRuleDetailedStatusRequest");
  }
}

export interface GetOrganizationConfigRuleDetailedStatusResponse {
  __type?: "GetOrganizationConfigRuleDetailedStatusResponse";
  /**
   * <p>The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response. </p>
   */
  NextToken?: string;

  /**
   * <p>A list of <code>MemberAccountStatus</code> objects.</p>
   */
  OrganizationConfigRuleDetailedStatus?: Array<MemberAccountStatus>;
}

export namespace GetOrganizationConfigRuleDetailedStatusResponse {
  export function isa(
    o: any
  ): o is GetOrganizationConfigRuleDetailedStatusResponse {
    return __isa(o, "GetOrganizationConfigRuleDetailedStatusResponse");
  }
}

export interface GetOrganizationConformancePackDetailedStatusRequest {
  __type?: "GetOrganizationConformancePackDetailedStatusRequest";
  /**
   * <p>An <code>OrganizationResourceDetailedStatusFilters</code> object.</p>
   */
  Filters?: OrganizationResourceDetailedStatusFilters;

  /**
   * <p>The maximum number of <code>OrganizationConformancePackDetailedStatuses</code> returned on each page.
   * 			If you do not specify a number, AWS Config uses the default. The default is 100. </p>
   */
  Limit?: number;

  /**
   * <p>The nextToken string returned on a previous page that you use to get the next page of results in a paginated response. </p>
   */
  NextToken?: string;

  /**
   * <p>The name of organization conformance pack for which you want status details for member accounts.</p>
   */
  OrganizationConformancePackName: string | undefined;
}

export namespace GetOrganizationConformancePackDetailedStatusRequest {
  export function isa(
    o: any
  ): o is GetOrganizationConformancePackDetailedStatusRequest {
    return __isa(o, "GetOrganizationConformancePackDetailedStatusRequest");
  }
}

export interface GetOrganizationConformancePackDetailedStatusResponse {
  __type?: "GetOrganizationConformancePackDetailedStatusResponse";
  /**
   * <p>The nextToken string returned on a previous page that you use to get the next page of results in a paginated response. </p>
   */
  NextToken?: string;

  /**
   * <p>A list of <code>OrganizationConformancePackDetailedStatus</code> objects. </p>
   */
  OrganizationConformancePackDetailedStatuses?: Array<
    OrganizationConformancePackDetailedStatus
  >;
}

export namespace GetOrganizationConformancePackDetailedStatusResponse {
  export function isa(
    o: any
  ): o is GetOrganizationConformancePackDetailedStatusResponse {
    return __isa(o, "GetOrganizationConformancePackDetailedStatusResponse");
  }
}

/**
 * <p>The input for the <a>GetResourceConfigHistory</a>
 * 			action.</p>
 */
export interface GetResourceConfigHistoryRequest {
  __type?: "GetResourceConfigHistoryRequest";
  /**
   * <p>The chronological order for configuration items listed. By
   * 			default, the results are listed in reverse chronological
   * 			order.</p>
   */
  chronologicalOrder?: ChronologicalOrder | string;

  /**
   * <p>The time stamp that indicates an earlier time. If not
   * 			specified, the action returns paginated results that contain
   * 			configuration items that start when the first configuration item was
   * 			recorded.</p>
   */
  earlierTime?: Date;

  /**
   * <p>The time stamp that indicates a later time. If not specified,
   * 			current time is taken.</p>
   */
  laterTime?: Date;

  /**
   * <p>The maximum number of configuration items returned on each
   * 			page. The default is 10. You cannot specify a number greater than
   * 			100. If you specify 0, AWS Config uses the default.</p>
   */
  limit?: number;

  /**
   * <p>The <code>nextToken</code> string returned on a previous page
   * 			that you use to get the next page of results in a paginated
   * 			response.</p>
   */
  nextToken?: string;

  /**
   * <p>The ID of the resource (for example.,
   * 			<code>sg-xxxxxx</code>).</p>
   */
  resourceId: string | undefined;

  /**
   * <p>The resource type.</p>
   */
  resourceType: ResourceType | string | undefined;
}

export namespace GetResourceConfigHistoryRequest {
  export function isa(o: any): o is GetResourceConfigHistoryRequest {
    return __isa(o, "GetResourceConfigHistoryRequest");
  }
}

/**
 * <p>The output for the <a>GetResourceConfigHistory</a>
 * 			action.</p>
 */
export interface GetResourceConfigHistoryResponse {
  __type?: "GetResourceConfigHistoryResponse";
  /**
   * <p>A list that contains the configuration history of one or more
   * 			resources.</p>
   */
  configurationItems?: Array<ConfigurationItem>;

  /**
   * <p>The string that you use in a subsequent request to get the next
   * 			page of results in a paginated response.</p>
   */
  nextToken?: string;
}

export namespace GetResourceConfigHistoryResponse {
  export function isa(o: any): o is GetResourceConfigHistoryResponse {
    return __isa(o, "GetResourceConfigHistoryResponse");
  }
}

/**
 * <p>The count of resources that are grouped by the group name.</p>
 */
export interface GroupedResourceCount {
  __type?: "GroupedResourceCount";
  /**
   * <p>The name of the group that can be region, account ID, or resource type. For example, region1, region2 if the region was chosen as <code>GroupByKey</code>.</p>
   */
  GroupName: string | undefined;

  /**
   * <p>The number of resources in the group.</p>
   */
  ResourceCount: number | undefined;
}

export namespace GroupedResourceCount {
  export function isa(o: any): o is GroupedResourceCount {
    return __isa(o, "GroupedResourceCount");
  }
}

/**
 * <p>Your Amazon S3 bucket policy does not permit AWS Config to
 * 			write to it.</p>
 */
export interface InsufficientDeliveryPolicyException
  extends __SmithyException,
    $MetadataBearer {
  name: "InsufficientDeliveryPolicyException";
  $fault: "client";
  /**
   * <p>Error executing the command</p>
   */
  message?: string;
}

export namespace InsufficientDeliveryPolicyException {
  export function isa(o: any): o is InsufficientDeliveryPolicyException {
    return __isa(o, "InsufficientDeliveryPolicyException");
  }
}

/**
 * <p>Indicates one of the following errors:</p>
 * 		       <ul>
 *             <li>
 *                <p>For PutConfigRule, the rule cannot be created because the IAM role assigned to AWS Config lacks permissions to perform the config:Put* action.</p>
 *             </li>
 *             <li>
 *                <p>For PutConfigRule, the AWS Lambda function cannot be invoked. Check the function ARN, and check the function's permissions.</p>
 *             </li>
 *             <li>
 *                <p>For PutOrganizationConfigRule, organization config rule cannot be created because you do not have permissions to call IAM <code>GetRole</code> action or create a service linked role.</p>
 *             </li>
 *             <li>
 *                <p>For PutConformancePack and PutOrganizationConformancePack, a conformance pack cannot be created because you do not have permissions: </p>
 * 				           <ul>
 *                   <li>
 *                      <p>To call IAM <code>GetRole</code> action or create a service linked role.</p>
 *                   </li>
 *                   <li>
 *                      <p>To read Amazon S3 bucket.</p>
 *                   </li>
 *                </ul>
 * 			         </li>
 *          </ul>
 */
export interface InsufficientPermissionsException
  extends __SmithyException,
    $MetadataBearer {
  name: "InsufficientPermissionsException";
  $fault: "client";
  /**
   * <p>Error executing the command</p>
   */
  message?: string;
}

export namespace InsufficientPermissionsException {
  export function isa(o: any): o is InsufficientPermissionsException {
    return __isa(o, "InsufficientPermissionsException");
  }
}

/**
 * <p>You have provided a configuration recorder name that is not
 * 			valid.</p>
 */
export interface InvalidConfigurationRecorderNameException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidConfigurationRecorderNameException";
  $fault: "client";
  /**
   * <p>Error executing the command</p>
   */
  message?: string;
}

export namespace InvalidConfigurationRecorderNameException {
  export function isa(o: any): o is InvalidConfigurationRecorderNameException {
    return __isa(o, "InvalidConfigurationRecorderNameException");
  }
}

/**
 * <p>The specified delivery channel name is not valid.</p>
 */
export interface InvalidDeliveryChannelNameException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidDeliveryChannelNameException";
  $fault: "client";
  /**
   * <p>Error executing the command</p>
   */
  message?: string;
}

export namespace InvalidDeliveryChannelNameException {
  export function isa(o: any): o is InvalidDeliveryChannelNameException {
    return __isa(o, "InvalidDeliveryChannelNameException");
  }
}

/**
 * <p>The syntax of the query is incorrect.</p>
 */
export interface InvalidExpressionException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidExpressionException";
  $fault: "client";
  /**
   * <p>Error executing the command</p>
   */
  message?: string;
}

export namespace InvalidExpressionException {
  export function isa(o: any): o is InvalidExpressionException {
    return __isa(o, "InvalidExpressionException");
  }
}

/**
 * <p>The specified limit is outside the allowable range.</p>
 */
export interface InvalidLimitException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidLimitException";
  $fault: "client";
  /**
   * <p>Error executing the command</p>
   */
  message?: string;
}

export namespace InvalidLimitException {
  export function isa(o: any): o is InvalidLimitException {
    return __isa(o, "InvalidLimitException");
  }
}

/**
 * <p>The specified next token is invalid. Specify the
 * 				<code>nextToken</code> string that was returned in the previous
 * 			response to get the next page of results.</p>
 */
export interface InvalidNextTokenException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidNextTokenException";
  $fault: "client";
  /**
   * <p>Error executing the command</p>
   */
  message?: string;
}

export namespace InvalidNextTokenException {
  export function isa(o: any): o is InvalidNextTokenException {
    return __isa(o, "InvalidNextTokenException");
  }
}

/**
 * <p>One or more of the specified parameters are invalid. Verify
 * 			that your parameters are valid and try again.</p>
 */
export interface InvalidParameterValueException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidParameterValueException";
  $fault: "client";
  /**
   * <p>Error executing the command</p>
   */
  message?: string;
}

export namespace InvalidParameterValueException {
  export function isa(o: any): o is InvalidParameterValueException {
    return __isa(o, "InvalidParameterValueException");
  }
}

/**
 * <p>AWS Config throws an exception if the recording group does not contain a valid list of resource types. Invalid values might also be incorrectly formatted.</p>
 */
export interface InvalidRecordingGroupException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidRecordingGroupException";
  $fault: "client";
  /**
   * <p>Error executing the command</p>
   */
  message?: string;
}

export namespace InvalidRecordingGroupException {
  export function isa(o: any): o is InvalidRecordingGroupException {
    return __isa(o, "InvalidRecordingGroupException");
  }
}

/**
 * <p>The specified <code>ResultToken</code> is invalid.</p>
 */
export interface InvalidResultTokenException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidResultTokenException";
  $fault: "client";
  /**
   * <p>Error executing the command</p>
   */
  message?: string;
}

export namespace InvalidResultTokenException {
  export function isa(o: any): o is InvalidResultTokenException {
    return __isa(o, "InvalidResultTokenException");
  }
}

/**
 * <p>You have provided a null or empty role ARN.</p>
 */
export interface InvalidRoleException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidRoleException";
  $fault: "client";
  /**
   * <p>Error executing the command</p>
   */
  message?: string;
}

export namespace InvalidRoleException {
  export function isa(o: any): o is InvalidRoleException {
    return __isa(o, "InvalidRoleException");
  }
}

/**
 * <p>The specified Amazon S3 key prefix is not valid.</p>
 */
export interface InvalidS3KeyPrefixException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidS3KeyPrefixException";
  $fault: "client";
  /**
   * <p>Error executing the command</p>
   */
  message?: string;
}

export namespace InvalidS3KeyPrefixException {
  export function isa(o: any): o is InvalidS3KeyPrefixException {
    return __isa(o, "InvalidS3KeyPrefixException");
  }
}

/**
 * <p>The specified Amazon SNS topic does not exist.</p>
 */
export interface InvalidSNSTopicARNException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidSNSTopicARNException";
  $fault: "client";
  /**
   * <p>Error executing the command</p>
   */
  message?: string;
}

export namespace InvalidSNSTopicARNException {
  export function isa(o: any): o is InvalidSNSTopicARNException {
    return __isa(o, "InvalidSNSTopicARNException");
  }
}

/**
 * <p>The specified time range is not valid. The earlier time is not
 * 			chronologically before the later time.</p>
 */
export interface InvalidTimeRangeException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidTimeRangeException";
  $fault: "client";
  /**
   * <p>Error executing the command</p>
   */
  message?: string;
}

export namespace InvalidTimeRangeException {
  export function isa(o: any): o is InvalidTimeRangeException {
    return __isa(o, "InvalidTimeRangeException");
  }
}

/**
 * <p>You cannot delete the delivery channel you specified because
 * 			the configuration recorder is running.</p>
 */
export interface LastDeliveryChannelDeleteFailedException
  extends __SmithyException,
    $MetadataBearer {
  name: "LastDeliveryChannelDeleteFailedException";
  $fault: "client";
  /**
   * <p>Error executing the command</p>
   */
  message?: string;
}

export namespace LastDeliveryChannelDeleteFailedException {
  export function isa(o: any): o is LastDeliveryChannelDeleteFailedException {
    return __isa(o, "LastDeliveryChannelDeleteFailedException");
  }
}

/**
 * <p>For <code>StartConfigRulesEvaluation</code> API, this exception
 * 			is thrown if an evaluation is in progress or if you call the <a>StartConfigRulesEvaluation</a> API more than once per
 * 			minute.</p>
 * 		       <p>For <code>PutConfigurationAggregator</code> API, this exception
 * 			is thrown if the number of accounts and aggregators exceeds the
 * 			limit.</p>
 */
export interface LimitExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  /**
   * <p>Error executing the command</p>
   */
  message?: string;
}

export namespace LimitExceededException {
  export function isa(o: any): o is LimitExceededException {
    return __isa(o, "LimitExceededException");
  }
}

export interface ListAggregateDiscoveredResourcesRequest {
  __type?: "ListAggregateDiscoveredResourcesRequest";
  /**
   * <p>The name of the configuration aggregator. </p>
   */
  ConfigurationAggregatorName: string | undefined;

  /**
   * <p>Filters the results based on the <code>ResourceFilters</code> object.</p>
   */
  Filters?: ResourceFilters;

  /**
   * <p>The maximum number of resource identifiers returned on each page. The default is 100. You cannot specify a number greater than 100. If you specify 0, AWS Config uses the default.</p>
   */
  Limit?: number;

  /**
   * <p>The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response.</p>
   */
  NextToken?: string;

  /**
   * <p>The type of resources that you want AWS Config to list in the response.</p>
   */
  ResourceType: ResourceType | string | undefined;
}

export namespace ListAggregateDiscoveredResourcesRequest {
  export function isa(o: any): o is ListAggregateDiscoveredResourcesRequest {
    return __isa(o, "ListAggregateDiscoveredResourcesRequest");
  }
}

export interface ListAggregateDiscoveredResourcesResponse {
  __type?: "ListAggregateDiscoveredResourcesResponse";
  /**
   * <p>The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response.</p>
   */
  NextToken?: string;

  /**
   * <p>Returns a list of <code>ResourceIdentifiers</code> objects.</p>
   */
  ResourceIdentifiers?: Array<AggregateResourceIdentifier>;
}

export namespace ListAggregateDiscoveredResourcesResponse {
  export function isa(o: any): o is ListAggregateDiscoveredResourcesResponse {
    return __isa(o, "ListAggregateDiscoveredResourcesResponse");
  }
}

/**
 * <p></p>
 */
export interface ListDiscoveredResourcesRequest {
  __type?: "ListDiscoveredResourcesRequest";
  /**
   * <p>Specifies whether AWS Config includes deleted resources in the
   * 			results. By default, deleted resources are not included.</p>
   */
  includeDeletedResources?: boolean;

  /**
   * <p>The maximum number of resource identifiers returned on each
   * 			page. The default is 100. You cannot specify a number greater than
   * 			100. If you specify 0, AWS Config uses the default.</p>
   */
  limit?: number;

  /**
   * <p>The <code>nextToken</code> string returned on a previous page
   * 			that you use to get the next page of results in a paginated
   * 			response.</p>
   */
  nextToken?: string;

  /**
   * <p>The IDs of only those resources that you want AWS Config to
   * 			list in the response. If you do not specify this parameter, AWS
   * 			Config lists all resources of the specified type that it has
   * 			discovered.</p>
   */
  resourceIds?: Array<string>;

  /**
   * <p>The custom name of only those resources that you want AWS
   * 			Config to list in the response. If you do not specify this
   * 			parameter, AWS Config lists all resources of the specified type that
   * 			it has discovered.</p>
   */
  resourceName?: string;

  /**
   * <p>The type of resources that you want AWS Config to list in the
   * 			response.</p>
   */
  resourceType: ResourceType | string | undefined;
}

export namespace ListDiscoveredResourcesRequest {
  export function isa(o: any): o is ListDiscoveredResourcesRequest {
    return __isa(o, "ListDiscoveredResourcesRequest");
  }
}

/**
 * <p></p>
 */
export interface ListDiscoveredResourcesResponse {
  __type?: "ListDiscoveredResourcesResponse";
  /**
   * <p>The string that you use in a subsequent request to get the next
   * 			page of results in a paginated response.</p>
   */
  nextToken?: string;

  /**
   * <p>The details that identify a resource that is discovered by AWS
   * 			Config, including the resource type, ID, and (if available) the
   * 			custom resource name.</p>
   */
  resourceIdentifiers?: Array<ResourceIdentifier>;
}

export namespace ListDiscoveredResourcesResponse {
  export function isa(o: any): o is ListDiscoveredResourcesResponse {
    return __isa(o, "ListDiscoveredResourcesResponse");
  }
}

export interface ListTagsForResourceRequest {
  __type?: "ListTagsForResourceRequest";
  /**
   * <p>The maximum number of tags returned on each page. The limit maximum is 50. You cannot specify a number greater than 50. If you specify 0, AWS Config uses the default. </p>
   */
  Limit?: number;

  /**
   * <p>The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response. </p>
   */
  NextToken?: string;

  /**
   * <p>The Amazon Resource Name (ARN) that identifies the resource for which to list the tags. Currently, the supported resources are <code>ConfigRule</code>, <code>ConfigurationAggregator</code> and <code>AggregatorAuthorization</code>.</p>
   */
  ResourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  export function isa(o: any): o is ListTagsForResourceRequest {
    return __isa(o, "ListTagsForResourceRequest");
  }
}

export interface ListTagsForResourceResponse {
  __type?: "ListTagsForResourceResponse";
  /**
   * <p>The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response. </p>
   */
  NextToken?: string;

  /**
   * <p>The tags for the resource.</p>
   */
  Tags?: Array<Tag>;
}

export namespace ListTagsForResourceResponse {
  export function isa(o: any): o is ListTagsForResourceResponse {
    return __isa(o, "ListTagsForResourceResponse");
  }
}

/**
 * <p>You have reached the limit (100,000) of active custom resource types in your account.
 * 			Delete unused resources using <code>DeleteResourceConfig</code>.</p>
 */
export interface MaxActiveResourcesExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "MaxActiveResourcesExceededException";
  $fault: "client";
  /**
   * <p>Error executing the command</p>
   */
  message?: string;
}

export namespace MaxActiveResourcesExceededException {
  export function isa(o: any): o is MaxActiveResourcesExceededException {
    return __isa(o, "MaxActiveResourcesExceededException");
  }
}

/**
 * <p>Failed to add the AWS Config rule because the account already
 * 			contains the maximum number of 150 rules. Consider deleting any
 * 			deactivated rules before you add new rules.</p>
 */
export interface MaxNumberOfConfigRulesExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "MaxNumberOfConfigRulesExceededException";
  $fault: "client";
  /**
   * <p>Error executing the command</p>
   */
  message?: string;
}

export namespace MaxNumberOfConfigRulesExceededException {
  export function isa(o: any): o is MaxNumberOfConfigRulesExceededException {
    return __isa(o, "MaxNumberOfConfigRulesExceededException");
  }
}

/**
 * <p>You have reached the limit of the number of recorders you can
 * 			create.</p>
 */
export interface MaxNumberOfConfigurationRecordersExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "MaxNumberOfConfigurationRecordersExceededException";
  $fault: "client";
  /**
   * <p>Error executing the command</p>
   */
  message?: string;
}

export namespace MaxNumberOfConfigurationRecordersExceededException {
  export function isa(
    o: any
  ): o is MaxNumberOfConfigurationRecordersExceededException {
    return __isa(o, "MaxNumberOfConfigurationRecordersExceededException");
  }
}

/**
 * <p>You have reached the limit (6) of the number of conformance packs in an account (6 conformance pack with 25 AWS Config rules per pack).</p>
 */
export interface MaxNumberOfConformancePacksExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "MaxNumberOfConformancePacksExceededException";
  $fault: "client";
  /**
   * <p>Error executing the command</p>
   */
  message?: string;
}

export namespace MaxNumberOfConformancePacksExceededException {
  export function isa(
    o: any
  ): o is MaxNumberOfConformancePacksExceededException {
    return __isa(o, "MaxNumberOfConformancePacksExceededException");
  }
}

/**
 * <p>You have reached the limit of the number of delivery channels
 * 			you can create.</p>
 */
export interface MaxNumberOfDeliveryChannelsExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "MaxNumberOfDeliveryChannelsExceededException";
  $fault: "client";
  /**
   * <p>Error executing the command</p>
   */
  message?: string;
}

export namespace MaxNumberOfDeliveryChannelsExceededException {
  export function isa(
    o: any
  ): o is MaxNumberOfDeliveryChannelsExceededException {
    return __isa(o, "MaxNumberOfDeliveryChannelsExceededException");
  }
}

/**
 * <p>You have reached the limit of the number of organization config rules you can create.</p>
 */
export interface MaxNumberOfOrganizationConfigRulesExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "MaxNumberOfOrganizationConfigRulesExceededException";
  $fault: "client";
  /**
   * <p>Error executing the command</p>
   */
  message?: string;
}

export namespace MaxNumberOfOrganizationConfigRulesExceededException {
  export function isa(
    o: any
  ): o is MaxNumberOfOrganizationConfigRulesExceededException {
    return __isa(o, "MaxNumberOfOrganizationConfigRulesExceededException");
  }
}

/**
 * <p>You have reached the limit (6) of the number of organization conformance packs in an account (6 conformance pack with 25 AWS Config rules per pack per account).</p>
 */
export interface MaxNumberOfOrganizationConformancePacksExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "MaxNumberOfOrganizationConformancePacksExceededException";
  $fault: "client";
  /**
   * <p>Error executing the command</p>
   */
  message?: string;
}

export namespace MaxNumberOfOrganizationConformancePacksExceededException {
  export function isa(
    o: any
  ): o is MaxNumberOfOrganizationConformancePacksExceededException {
    return __isa(o, "MaxNumberOfOrganizationConformancePacksExceededException");
  }
}

/**
 * <p>Failed to add the retention configuration because a retention configuration with that name already exists.</p>
 */
export interface MaxNumberOfRetentionConfigurationsExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "MaxNumberOfRetentionConfigurationsExceededException";
  $fault: "client";
  /**
   * <p>Error executing the command</p>
   */
  message?: string;
}

export namespace MaxNumberOfRetentionConfigurationsExceededException {
  export function isa(
    o: any
  ): o is MaxNumberOfRetentionConfigurationsExceededException {
    return __isa(o, "MaxNumberOfRetentionConfigurationsExceededException");
  }
}

export enum MaximumExecutionFrequency {
  One_Hour = "One_Hour",
  Six_Hours = "Six_Hours",
  Three_Hours = "Three_Hours",
  Twelve_Hours = "Twelve_Hours",
  TwentyFour_Hours = "TwentyFour_Hours"
}

export enum MemberAccountRuleStatus {
  CREATE_FAILED = "CREATE_FAILED",
  CREATE_IN_PROGRESS = "CREATE_IN_PROGRESS",
  CREATE_SUCCESSFUL = "CREATE_SUCCESSFUL",
  DELETE_FAILED = "DELETE_FAILED",
  DELETE_IN_PROGRESS = "DELETE_IN_PROGRESS",
  DELETE_SUCCESSFUL = "DELETE_SUCCESSFUL",
  UPDATE_FAILED = "UPDATE_FAILED",
  UPDATE_IN_PROGRESS = "UPDATE_IN_PROGRESS",
  UPDATE_SUCCESSFUL = "UPDATE_SUCCESSFUL"
}

/**
 * <p>Organization config rule creation or deletion status in each member account. This includes the name of the rule, the status, error code and error message when the rule creation or deletion failed.</p>
 */
export interface MemberAccountStatus {
  __type?: "MemberAccountStatus";
  /**
   * <p>The 12-digit account ID of a member account.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The name of config rule deployed in the member account.</p>
   */
  ConfigRuleName: string | undefined;

  /**
   * <p>An error code that is returned when config rule creation or deletion failed in the member account.</p>
   */
  ErrorCode?: string;

  /**
   * <p>An error message indicating that config rule account creation or deletion has failed due to an error in the member account.</p>
   */
  ErrorMessage?: string;

  /**
   * <p>The timestamp of the last status update.</p>
   */
  LastUpdateTime?: Date;

  /**
   * <p>Indicates deployment status for config rule in the member account.
   * 			When master account calls <code>PutOrganizationConfigRule</code> action for the first time, config rule status is created in the member account.
   * 			When master account calls <code>PutOrganizationConfigRule</code> action for the second time, config rule status is updated in the member account.
   * 			Config rule status is deleted when the master account deletes <code>OrganizationConfigRule</code> and disables service access for <code>config-multiaccountsetup.amazonaws.com</code>.
   * 		</p>
   * 		       <p> AWS Config sets the state of the rule to:</p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <code>CREATE_SUCCESSFUL</code> when config rule has been created in the member account. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_IN_PROGRESS</code> when config rule is being created in the member account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_FAILED</code> when config rule creation has failed in the member account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETE_FAILED</code> when config rule deletion has failed in the member account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETE_IN_PROGRESS</code> when config rule is being deleted in the member account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETE_SUCCESSFUL</code> when config rule has been deleted in the member account. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATE_SUCCESSFUL</code> when config rule has been updated in the member account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATE_IN_PROGRESS</code> when config rule is being updated in the member account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATE_FAILED</code> when config rule deletion has failed in the member account.</p>
   *             </li>
   *          </ul>
   */
  MemberAccountRuleStatus: MemberAccountRuleStatus | string | undefined;
}

export namespace MemberAccountStatus {
  export function isa(o: any): o is MemberAccountStatus {
    return __isa(o, "MemberAccountStatus");
  }
}

export enum MessageType {
  ConfigurationItemChangeNotification = "ConfigurationItemChangeNotification",
  ConfigurationSnapshotDeliveryCompleted = "ConfigurationSnapshotDeliveryCompleted",
  OversizedConfigurationItemChangeNotification = "OversizedConfigurationItemChangeNotification",
  ScheduledNotification = "ScheduledNotification"
}

/**
 * <p>There are no configuration recorders available to provide the
 * 			role needed to describe your resources. Create a configuration
 * 			recorder.</p>
 */
export interface NoAvailableConfigurationRecorderException
  extends __SmithyException,
    $MetadataBearer {
  name: "NoAvailableConfigurationRecorderException";
  $fault: "client";
  /**
   * <p>Error executing the command</p>
   */
  message?: string;
}

export namespace NoAvailableConfigurationRecorderException {
  export function isa(o: any): o is NoAvailableConfigurationRecorderException {
    return __isa(o, "NoAvailableConfigurationRecorderException");
  }
}

/**
 * <p>There is no delivery channel available to record
 * 			configurations.</p>
 */
export interface NoAvailableDeliveryChannelException
  extends __SmithyException,
    $MetadataBearer {
  name: "NoAvailableDeliveryChannelException";
  $fault: "client";
  /**
   * <p>Error executing the command</p>
   */
  message?: string;
}

export namespace NoAvailableDeliveryChannelException {
  export function isa(o: any): o is NoAvailableDeliveryChannelException {
    return __isa(o, "NoAvailableDeliveryChannelException");
  }
}

/**
 * <p>Organization is no longer available.</p>
 */
export interface NoAvailableOrganizationException
  extends __SmithyException,
    $MetadataBearer {
  name: "NoAvailableOrganizationException";
  $fault: "client";
  /**
   * <p>Error executing the command</p>
   */
  message?: string;
}

export namespace NoAvailableOrganizationException {
  export function isa(o: any): o is NoAvailableOrganizationException {
    return __isa(o, "NoAvailableOrganizationException");
  }
}

/**
 * <p>There is no configuration recorder running.</p>
 */
export interface NoRunningConfigurationRecorderException
  extends __SmithyException,
    $MetadataBearer {
  name: "NoRunningConfigurationRecorderException";
  $fault: "client";
  /**
   * <p>Error executing the command</p>
   */
  message?: string;
}

export namespace NoRunningConfigurationRecorderException {
  export function isa(o: any): o is NoRunningConfigurationRecorderException {
    return __isa(o, "NoRunningConfigurationRecorderException");
  }
}

/**
 * <p>The specified Amazon S3 bucket does not exist.</p>
 */
export interface NoSuchBucketException
  extends __SmithyException,
    $MetadataBearer {
  name: "NoSuchBucketException";
  $fault: "client";
  /**
   * <p>Error executing the command</p>
   */
  message?: string;
}

export namespace NoSuchBucketException {
  export function isa(o: any): o is NoSuchBucketException {
    return __isa(o, "NoSuchBucketException");
  }
}

/**
 * <p>One or more AWS Config rules in the request are invalid. Verify
 * 			that the rule names are correct and try again.</p>
 */
export interface NoSuchConfigRuleException
  extends __SmithyException,
    $MetadataBearer {
  name: "NoSuchConfigRuleException";
  $fault: "client";
  /**
   * <p>Error executing the command</p>
   */
  message?: string;
}

export namespace NoSuchConfigRuleException {
  export function isa(o: any): o is NoSuchConfigRuleException {
    return __isa(o, "NoSuchConfigRuleException");
  }
}

/**
 * <p>AWS Config rule that you passed in the filter does not exist.</p>
 */
export interface NoSuchConfigRuleInConformancePackException
  extends __SmithyException,
    $MetadataBearer {
  name: "NoSuchConfigRuleInConformancePackException";
  $fault: "client";
  /**
   * <p>Error executing the command</p>
   */
  message?: string;
}

export namespace NoSuchConfigRuleInConformancePackException {
  export function isa(o: any): o is NoSuchConfigRuleInConformancePackException {
    return __isa(o, "NoSuchConfigRuleInConformancePackException");
  }
}

/**
 * <p>You have specified a configuration aggregator that does not exist.</p>
 */
export interface NoSuchConfigurationAggregatorException
  extends __SmithyException,
    $MetadataBearer {
  name: "NoSuchConfigurationAggregatorException";
  $fault: "client";
  /**
   * <p>Error executing the command</p>
   */
  message?: string;
}

export namespace NoSuchConfigurationAggregatorException {
  export function isa(o: any): o is NoSuchConfigurationAggregatorException {
    return __isa(o, "NoSuchConfigurationAggregatorException");
  }
}

/**
 * <p>You have specified a configuration recorder that does not
 * 			exist.</p>
 */
export interface NoSuchConfigurationRecorderException
  extends __SmithyException,
    $MetadataBearer {
  name: "NoSuchConfigurationRecorderException";
  $fault: "client";
  /**
   * <p>Error executing the command</p>
   */
  message?: string;
}

export namespace NoSuchConfigurationRecorderException {
  export function isa(o: any): o is NoSuchConfigurationRecorderException {
    return __isa(o, "NoSuchConfigurationRecorderException");
  }
}

/**
 * <p>You specified one or more conformance packs that do not exist.</p>
 */
export interface NoSuchConformancePackException
  extends __SmithyException,
    $MetadataBearer {
  name: "NoSuchConformancePackException";
  $fault: "client";
  /**
   * <p>Error executing the command</p>
   */
  message?: string;
}

export namespace NoSuchConformancePackException {
  export function isa(o: any): o is NoSuchConformancePackException {
    return __isa(o, "NoSuchConformancePackException");
  }
}

/**
 * <p>You have specified a delivery channel that does not
 * 			exist.</p>
 */
export interface NoSuchDeliveryChannelException
  extends __SmithyException,
    $MetadataBearer {
  name: "NoSuchDeliveryChannelException";
  $fault: "client";
  /**
   * <p>Error executing the command</p>
   */
  message?: string;
}

export namespace NoSuchDeliveryChannelException {
  export function isa(o: any): o is NoSuchDeliveryChannelException {
    return __isa(o, "NoSuchDeliveryChannelException");
  }
}

/**
 * <p>You specified one or more organization config rules that do not exist.</p>
 */
export interface NoSuchOrganizationConfigRuleException
  extends __SmithyException,
    $MetadataBearer {
  name: "NoSuchOrganizationConfigRuleException";
  $fault: "client";
  /**
   * <p>Error executing the command</p>
   */
  message?: string;
}

export namespace NoSuchOrganizationConfigRuleException {
  export function isa(o: any): o is NoSuchOrganizationConfigRuleException {
    return __isa(o, "NoSuchOrganizationConfigRuleException");
  }
}

/**
 * <p>AWS Config organization conformance pack that you passed in the filter does not exist.</p>
 * 		       <p>For DeleteOrganizationConformancePack, you tried to delete an organization conformance pack that does not exist.</p>
 */
export interface NoSuchOrganizationConformancePackException
  extends __SmithyException,
    $MetadataBearer {
  name: "NoSuchOrganizationConformancePackException";
  $fault: "client";
  /**
   * <p>Error executing the command</p>
   */
  message?: string;
}

export namespace NoSuchOrganizationConformancePackException {
  export function isa(o: any): o is NoSuchOrganizationConformancePackException {
    return __isa(o, "NoSuchOrganizationConformancePackException");
  }
}

/**
 * <p>You specified an AWS Config rule without a remediation configuration.</p>
 */
export interface NoSuchRemediationConfigurationException
  extends __SmithyException,
    $MetadataBearer {
  name: "NoSuchRemediationConfigurationException";
  $fault: "client";
  /**
   * <p>Error executing the command</p>
   */
  message?: string;
}

export namespace NoSuchRemediationConfigurationException {
  export function isa(o: any): o is NoSuchRemediationConfigurationException {
    return __isa(o, "NoSuchRemediationConfigurationException");
  }
}

/**
 * <p>You tried to delete a remediation exception that does not exist.</p>
 */
export interface NoSuchRemediationExceptionException
  extends __SmithyException,
    $MetadataBearer {
  name: "NoSuchRemediationExceptionException";
  $fault: "client";
  /**
   * <p>Error executing the command</p>
   */
  message?: string;
}

export namespace NoSuchRemediationExceptionException {
  export function isa(o: any): o is NoSuchRemediationExceptionException {
    return __isa(o, "NoSuchRemediationExceptionException");
  }
}

/**
 * <p>You have specified a retention configuration that does not exist.</p>
 */
export interface NoSuchRetentionConfigurationException
  extends __SmithyException,
    $MetadataBearer {
  name: "NoSuchRetentionConfigurationException";
  $fault: "client";
  /**
   * <p>Error executing the command</p>
   */
  message?: string;
}

export namespace NoSuchRetentionConfigurationException {
  export function isa(o: any): o is NoSuchRetentionConfigurationException {
    return __isa(o, "NoSuchRetentionConfigurationException");
  }
}

/**
 * <p>For PutConfigAggregator API, no permission to call EnableAWSServiceAccess API.</p>
 * 		       <p>For all OrganizationConfigRule and OrganizationConformancePack APIs, AWS Config throws an exception if APIs are called from member accounts. All APIs must be called from organization master account.</p>
 */
export interface OrganizationAccessDeniedException
  extends __SmithyException,
    $MetadataBearer {
  name: "OrganizationAccessDeniedException";
  $fault: "client";
  /**
   * <p>Error executing the command</p>
   */
  message?: string;
}

export namespace OrganizationAccessDeniedException {
  export function isa(o: any): o is OrganizationAccessDeniedException {
    return __isa(o, "OrganizationAccessDeniedException");
  }
}

/**
 * <p>This object contains regions to set up the aggregator and an IAM
 * 			role to retrieve organization details.</p>
 */
export interface OrganizationAggregationSource {
  __type?: "OrganizationAggregationSource";
  /**
   * <p>If true, aggregate existing AWS Config regions and future
   * 			regions.</p>
   */
  AllAwsRegions?: boolean;

  /**
   * <p>The source regions being aggregated.</p>
   */
  AwsRegions?: Array<string>;

  /**
   * <p>ARN of the IAM role used to retrieve AWS Organization details
   * 			associated with the aggregator account.</p>
   */
  RoleArn: string | undefined;
}

export namespace OrganizationAggregationSource {
  export function isa(o: any): o is OrganizationAggregationSource {
    return __isa(o, "OrganizationAggregationSource");
  }
}

/**
 * <p>AWS Config resource cannot be created because your organization does not have all features enabled.</p>
 */
export interface OrganizationAllFeaturesNotEnabledException
  extends __SmithyException,
    $MetadataBearer {
  name: "OrganizationAllFeaturesNotEnabledException";
  $fault: "client";
  /**
   * <p>Error executing the command</p>
   */
  message?: string;
}

export namespace OrganizationAllFeaturesNotEnabledException {
  export function isa(o: any): o is OrganizationAllFeaturesNotEnabledException {
    return __isa(o, "OrganizationAllFeaturesNotEnabledException");
  }
}

/**
 * <p>An organization config rule that has information about config rules that AWS Config creates in member accounts.</p>
 */
export interface OrganizationConfigRule {
  __type?: "OrganizationConfigRule";
  /**
   * <p>A comma-separated list of accounts excluded from organization config rule.</p>
   */
  ExcludedAccounts?: Array<string>;

  /**
   * <p>The timestamp of the last update.</p>
   */
  LastUpdateTime?: Date;

  /**
   * <p>Amazon Resource Name (ARN) of organization config rule.</p>
   */
  OrganizationConfigRuleArn: string | undefined;

  /**
   * <p>The name that you assign to organization config rule.</p>
   */
  OrganizationConfigRuleName: string | undefined;

  /**
   * <p>An <code>OrganizationCustomRuleMetadata</code> object.</p>
   */
  OrganizationCustomRuleMetadata?: OrganizationCustomRuleMetadata;

  /**
   * <p>An <code>OrganizationManagedRuleMetadata</code> object.</p>
   */
  OrganizationManagedRuleMetadata?: OrganizationManagedRuleMetadata;
}

export namespace OrganizationConfigRule {
  export function isa(o: any): o is OrganizationConfigRule {
    return __isa(o, "OrganizationConfigRule");
  }
}

/**
 * <p>Returns the status for an organization config rule in an organization.</p>
 */
export interface OrganizationConfigRuleStatus {
  __type?: "OrganizationConfigRuleStatus";
  /**
   * <p>An error code that is returned when organization config rule creation or deletion has failed.</p>
   */
  ErrorCode?: string;

  /**
   * <p>An error message indicating that organization config rule creation or deletion failed due to an error.</p>
   */
  ErrorMessage?: string;

  /**
   * <p>The timestamp of the last update.</p>
   */
  LastUpdateTime?: Date;

  /**
   * <p>The name that you assign to organization config rule.</p>
   */
  OrganizationConfigRuleName: string | undefined;

  /**
   * <p>Indicates deployment status of an organization config rule.
   * 			When master account calls PutOrganizationConfigRule action for the first time, config rule status is created in all the member accounts.
   * 			When master account calls PutOrganizationConfigRule action for the second time, config rule status is updated in all the member accounts. Additionally, config rule status is updated when one or more member accounts join or leave an organization.
   * 			Config rule status is deleted when the master account deletes OrganizationConfigRule in all the member accounts and disables service access for <code>config-multiaccountsetup.amazonaws.com</code>.</p>
   * 			      <p>AWS Config sets the state of the rule to:</p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <code>CREATE_SUCCESSFUL</code> when an organization config rule has been successfully created in all the member accounts. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_IN_PROGRESS</code> when an organization config rule creation is in progress.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_FAILED</code> when an organization config rule creation failed in one or more member accounts within that organization.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETE_FAILED</code> when an organization config rule deletion failed in one or more member accounts within that organization.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETE_IN_PROGRESS</code> when an organization config rule deletion is in progress.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETE_SUCCESSFUL</code> when an organization config rule has been successfully deleted from all the member accounts.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATE_SUCCESSFUL</code> when an organization config rule has been successfully updated in all the member accounts.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATE_IN_PROGRESS</code> when an organization config rule update is in progress.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATE_FAILED</code> when an organization config rule update failed in one or more member accounts within that organization.</p>
   *             </li>
   *          </ul>
   */
  OrganizationRuleStatus: OrganizationRuleStatus | string | undefined;
}

export namespace OrganizationConfigRuleStatus {
  export function isa(o: any): o is OrganizationConfigRuleStatus {
    return __isa(o, "OrganizationConfigRuleStatus");
  }
}

export enum OrganizationConfigRuleTriggerType {
  CONFIGURATION_ITEM_CHANGE_NOTIFICATION = "ConfigurationItemChangeNotification",
  OVERSIZED_CONFIGURATION_ITEM_CHANGE_NOTIFCATION = "OversizedConfigurationItemChangeNotification",
  SCHEDULED_NOTIFICATION = "ScheduledNotification"
}

/**
 * <p>An organization conformance pack that has information about conformance packs that AWS Config creates in member accounts. </p>
 */
export interface OrganizationConformancePack {
  __type?: "OrganizationConformancePack";
  /**
   * <p>A list of <code>ConformancePackInputParameter</code> objects.</p>
   */
  ConformancePackInputParameters?: Array<ConformancePackInputParameter>;

  /**
   * <p>Location of an Amazon S3 bucket where AWS Config can
   * 			deliver evaluation results and conformance pack template that is used to create a pack. </p>
   */
  DeliveryS3Bucket: string | undefined;

  /**
   * <p>Any folder structure you want to add to an Amazon S3 bucket.</p>
   */
  DeliveryS3KeyPrefix?: string;

  /**
   * <p>A comma-separated list of accounts excluded from organization conformance pack.</p>
   */
  ExcludedAccounts?: Array<string>;

  /**
   * <p>Last time when organization conformation pack was updated.</p>
   */
  LastUpdateTime: Date | undefined;

  /**
   * <p>Amazon Resource Name (ARN) of organization conformance pack.</p>
   */
  OrganizationConformancePackArn: string | undefined;

  /**
   * <p>The name you assign to an organization conformance pack.</p>
   */
  OrganizationConformancePackName: string | undefined;
}

export namespace OrganizationConformancePack {
  export function isa(o: any): o is OrganizationConformancePack {
    return __isa(o, "OrganizationConformancePack");
  }
}

/**
 * <p>Organization conformance pack creation or deletion status in each member account.
 * 			This includes the name of the conformance pack, the status, error code and error message
 * 			when the conformance pack creation or deletion failed. </p>
 */
export interface OrganizationConformancePackDetailedStatus {
  __type?: "OrganizationConformancePackDetailedStatus";
  /**
   * <p>The 12-digit account ID of a member account.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The name of conformance pack deployed in the member account.</p>
   */
  ConformancePackName: string | undefined;

  /**
   * <p>An error code that is returned when conformance pack creation or
   * 			deletion failed in the member account. </p>
   */
  ErrorCode?: string;

  /**
   * <p>An error message indicating that conformance pack account creation or deletion
   * 			has failed due to an error in the member account. </p>
   */
  ErrorMessage?: string;

  /**
   * <p>The timestamp of the last status update.</p>
   */
  LastUpdateTime?: Date;

  /**
   * <p>Indicates deployment status for conformance pack in a member account.
   * 			When master account calls <code>PutOrganizationConformancePack</code> action for the first time, conformance pack status is created in the member account.
   * 			When master account calls <code>PutOrganizationConformancePack</code> action for the second time, conformance pack status is updated in the member account.
   * 			Conformance pack status is deleted when the master account deletes <code>OrganizationConformancePack</code> and disables service access for <code>config-multiaccountsetup.amazonaws.com</code>.
   * 		</p>
   * 		       <p> AWS Config sets the state of the conformance pack to:</p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <code>CREATE_SUCCESSFUL</code> when conformance pack has been created in the member account. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_IN_PROGRESS</code> when conformance pack is being created in the member account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_FAILED</code> when conformance pack creation has failed in the member account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETE_FAILED</code> when conformance pack deletion has failed in the member account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETE_IN_PROGRESS</code> when conformance pack is being deleted in the member account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETE_SUCCESSFUL</code> when conformance pack has been deleted in the member account. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATE_SUCCESSFUL</code> when conformance pack has been updated in the member account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATE_IN_PROGRESS</code> when conformance pack is being updated in the member account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATE_FAILED</code> when conformance pack deletion has failed in the member account.</p>
   *             </li>
   *          </ul>
   */
  Status: OrganizationResourceDetailedStatus | string | undefined;
}

export namespace OrganizationConformancePackDetailedStatus {
  export function isa(o: any): o is OrganizationConformancePackDetailedStatus {
    return __isa(o, "OrganizationConformancePackDetailedStatus");
  }
}

/**
 * <p>Returns the status for an organization conformance pack in an organization.</p>
 */
export interface OrganizationConformancePackStatus {
  __type?: "OrganizationConformancePackStatus";
  /**
   * <p>An error code that is returned when organization conformance pack creation or deletion has failed in a member account. </p>
   */
  ErrorCode?: string;

  /**
   * <p>An error message indicating that organization conformance pack creation or deletion failed due to an error. </p>
   */
  ErrorMessage?: string;

  /**
   * <p>The timestamp of the last update.</p>
   */
  LastUpdateTime?: Date;

  /**
   * <p>The name that you assign to organization conformance pack.</p>
   */
  OrganizationConformancePackName: string | undefined;

  /**
   * <p>Indicates deployment status of an organization conformance pack.
   * 			When master account calls PutOrganizationConformancePack for the first time,
   * 			conformance pack status is created in all the member accounts.
   * 			When master account calls PutOrganizationConformancePack for the second time,
   * 			conformance pack status is updated in all the member accounts.
   * 			Additionally, conformance pack status is updated when one or more member accounts join or leave an
   * 			organization.
   * 			Conformance pack status is deleted when the master account deletes
   * 			OrganizationConformancePack in all the member accounts and disables service
   * 			access for <code>config-multiaccountsetup.amazonaws.com</code>.</p>
   * 		       <p>AWS Config sets the state of the conformance pack to:</p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <code>CREATE_SUCCESSFUL</code> when an organization conformance pack has been successfully created in all the member accounts. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_IN_PROGRESS</code> when an organization conformance pack creation is in progress.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_FAILED</code> when an organization conformance pack creation failed in one or more member accounts within that organization.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETE_FAILED</code> when an organization conformance pack deletion failed in one or more member accounts within that organization.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETE_IN_PROGRESS</code> when an organization conformance pack deletion is in progress.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETE_SUCCESSFUL</code> when an organization conformance pack has been successfully deleted from all the member accounts.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATE_SUCCESSFUL</code> when an organization conformance pack has been successfully updated in all the member accounts.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATE_IN_PROGRESS</code> when an organization conformance pack update is in progress.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATE_FAILED</code> when an organization conformance pack update failed in one or more member accounts within that organization.</p>
   *             </li>
   *          </ul>
   */
  Status: OrganizationResourceStatus | string | undefined;
}

export namespace OrganizationConformancePackStatus {
  export function isa(o: any): o is OrganizationConformancePackStatus {
    return __isa(o, "OrganizationConformancePackStatus");
  }
}

/**
 * <p>You have specified a template that is not valid or supported.</p>
 */
export interface OrganizationConformancePackTemplateValidationException
  extends __SmithyException,
    $MetadataBearer {
  name: "OrganizationConformancePackTemplateValidationException";
  $fault: "client";
  /**
   * <p>Error executing the command</p>
   */
  message?: string;
}

export namespace OrganizationConformancePackTemplateValidationException {
  export function isa(
    o: any
  ): o is OrganizationConformancePackTemplateValidationException {
    return __isa(o, "OrganizationConformancePackTemplateValidationException");
  }
}

/**
 * <p>An object that specifies organization custom rule metadata such as resource type, resource ID of AWS resource, Lamdba function ARN,
 * 			and organization trigger types that trigger AWS Config to evaluate your AWS resources against a rule.
 * 			It also provides the frequency with which you want AWS Config to run evaluations for the rule if the trigger type is periodic.</p>
 */
export interface OrganizationCustomRuleMetadata {
  __type?: "OrganizationCustomRuleMetadata";
  /**
   * <p>The description that you provide for organization config rule.</p>
   */
  Description?: string;

  /**
   * <p>A string, in JSON format, that is passed to organization config rule Lambda function.</p>
   */
  InputParameters?: string;

  /**
   * <p>The lambda function ARN.</p>
   */
  LambdaFunctionArn: string | undefined;

  /**
   * <p>The maximum frequency with which AWS Config runs evaluations for a rule.
   * 			Your custom rule is triggered when AWS Config delivers the configuration snapshot. For more information, see <a>ConfigSnapshotDeliveryProperties</a>.</p>
   * 		       <note>
   *             <p>By default, rules with a periodic trigger are evaluated every 24 hours. To change the frequency, specify a valid
   * 			value for the <code>MaximumExecutionFrequency</code> parameter.</p>
   *          </note>
   */
  MaximumExecutionFrequency?: MaximumExecutionFrequency | string;

  /**
   * <p>The type of notification that triggers AWS Config to run an evaluation for a rule. You can specify the following notification types:</p>
   *
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <code>ConfigurationItemChangeNotification</code> - Triggers an evaluation when AWS Config delivers a configuration item as a result of a resource change.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OversizedConfigurationItemChangeNotification</code> - Triggers an evaluation when AWS Config delivers an oversized configuration item.
   * 			         	AWS Config may generate this notification type when a resource changes and the notification exceeds the maximum size allowed by Amazon SNS.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ScheduledNotification</code> - Triggers a periodic evaluation at the frequency specified for <code>MaximumExecutionFrequency</code>.</p>
   *             </li>
   *          </ul>
   */
  OrganizationConfigRuleTriggerTypes:
    | Array<OrganizationConfigRuleTriggerType | string>
    | undefined;

  /**
   * <p>The ID of the AWS resource that was evaluated.</p>
   */
  ResourceIdScope?: string;

  /**
   * <p>The type of the AWS resource that was evaluated.</p>
   */
  ResourceTypesScope?: Array<string>;

  /**
   * <p>One part of a key-value pair that make up a tag.
   * 			A key is a general label that acts like a category for more specific tag values. </p>
   */
  TagKeyScope?: string;

  /**
   * <p>The optional part of a key-value pair that make up a tag.
   * 			A value acts as a descriptor within a tag category (key). </p>
   */
  TagValueScope?: string;
}

export namespace OrganizationCustomRuleMetadata {
  export function isa(o: any): o is OrganizationCustomRuleMetadata {
    return __isa(o, "OrganizationCustomRuleMetadata");
  }
}

/**
 * <p>An object that specifies organization managed rule metadata such as resource type and ID of AWS resource along with the rule identifier.
 * 			It also provides the frequency with which you want AWS Config to run evaluations for the rule if the trigger type is periodic.</p>
 */
export interface OrganizationManagedRuleMetadata {
  __type?: "OrganizationManagedRuleMetadata";
  /**
   * <p>The description that you provide for organization config rule.</p>
   */
  Description?: string;

  /**
   * <p>A string, in JSON format, that is passed to organization config rule Lambda function.</p>
   */
  InputParameters?: string;

  /**
   * <p>The maximum frequency with which AWS Config runs evaluations for a rule. You are using an AWS managed rule that is triggered at a periodic frequency.</p>
   * 		       <note>
   *             <p>By default, rules with a periodic trigger are evaluated every 24 hours. To change the frequency, specify a valid
   * 			value for the <code>MaximumExecutionFrequency</code> parameter.</p>
   *          </note>
   */
  MaximumExecutionFrequency?: MaximumExecutionFrequency | string;

  /**
   * <p>The ID of the AWS resource that was evaluated.</p>
   */
  ResourceIdScope?: string;

  /**
   * <p>The type of the AWS resource that was evaluated.</p>
   */
  ResourceTypesScope?: Array<string>;

  /**
   * <p>For organization config managed rules, a predefined identifier from a
   * 			list. For example, <code>IAM_PASSWORD_POLICY</code> is a managed
   * 			rule. To reference a managed rule, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config_use-managed-rules.html">Using AWS Managed Config Rules</a>.</p>
   */
  RuleIdentifier: string | undefined;

  /**
   * <p>One part of a key-value pair that make up a tag.
   * 			A key is a general label that acts like a category for more specific tag values. </p>
   */
  TagKeyScope?: string;

  /**
   * <p>The optional part of a key-value pair that make up a tag.
   * 			A value acts as a descriptor within a tag category (key).</p>
   */
  TagValueScope?: string;
}

export namespace OrganizationManagedRuleMetadata {
  export function isa(o: any): o is OrganizationManagedRuleMetadata {
    return __isa(o, "OrganizationManagedRuleMetadata");
  }
}

export enum OrganizationResourceDetailedStatus {
  CREATE_FAILED = "CREATE_FAILED",
  CREATE_IN_PROGRESS = "CREATE_IN_PROGRESS",
  CREATE_SUCCESSFUL = "CREATE_SUCCESSFUL",
  DELETE_FAILED = "DELETE_FAILED",
  DELETE_IN_PROGRESS = "DELETE_IN_PROGRESS",
  DELETE_SUCCESSFUL = "DELETE_SUCCESSFUL",
  UPDATE_FAILED = "UPDATE_FAILED",
  UPDATE_IN_PROGRESS = "UPDATE_IN_PROGRESS",
  UPDATE_SUCCESSFUL = "UPDATE_SUCCESSFUL"
}

/**
 * <p>Status filter object to filter results based on specific member account ID or status type for an organization conformance pack.</p>
 */
export interface OrganizationResourceDetailedStatusFilters {
  __type?: "OrganizationResourceDetailedStatusFilters";
  /**
   * <p>The 12-digit account ID of the member account within an organization.</p>
   */
  AccountId?: string;

  /**
   * <p>Indicates deployment status for conformance pack in a member account.
   * 			When master account calls <code>PutOrganizationConformancePack</code> action for the first time, conformance pack status is created in the member account.
   * 			When master account calls <code>PutOrganizationConformancePack</code> action for the second time, conformance pack status is updated in the member account.
   * 			Conformance pack status is deleted when the master account deletes <code>OrganizationConformancePack</code> and disables service access for <code>config-multiaccountsetup.amazonaws.com</code>.
   * 		</p>
   * 		       <p> AWS Config sets the state of the conformance pack to:</p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <code>CREATE_SUCCESSFUL</code> when conformance pack has been created in the member account. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_IN_PROGRESS</code> when conformance pack is being created in the member account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_FAILED</code> when conformance pack creation has failed in the member account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETE_FAILED</code> when conformance pack deletion has failed in the member account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETE_IN_PROGRESS</code> when conformance pack is being deleted in the member account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETE_SUCCESSFUL</code> when conformance pack has been deleted in the member account. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATE_SUCCESSFUL</code> when conformance pack has been updated in the member account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATE_IN_PROGRESS</code> when conformance pack is being updated in the member account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATE_FAILED</code> when conformance pack deletion has failed in the member account.</p>
   *             </li>
   *          </ul>
   */
  Status?: OrganizationResourceDetailedStatus | string;
}

export namespace OrganizationResourceDetailedStatusFilters {
  export function isa(o: any): o is OrganizationResourceDetailedStatusFilters {
    return __isa(o, "OrganizationResourceDetailedStatusFilters");
  }
}

export enum OrganizationResourceStatus {
  CREATE_FAILED = "CREATE_FAILED",
  CREATE_IN_PROGRESS = "CREATE_IN_PROGRESS",
  CREATE_SUCCESSFUL = "CREATE_SUCCESSFUL",
  DELETE_FAILED = "DELETE_FAILED",
  DELETE_IN_PROGRESS = "DELETE_IN_PROGRESS",
  DELETE_SUCCESSFUL = "DELETE_SUCCESSFUL",
  UPDATE_FAILED = "UPDATE_FAILED",
  UPDATE_IN_PROGRESS = "UPDATE_IN_PROGRESS",
  UPDATE_SUCCESSFUL = "UPDATE_SUCCESSFUL"
}

export enum OrganizationRuleStatus {
  CREATE_FAILED = "CREATE_FAILED",
  CREATE_IN_PROGRESS = "CREATE_IN_PROGRESS",
  CREATE_SUCCESSFUL = "CREATE_SUCCESSFUL",
  DELETE_FAILED = "DELETE_FAILED",
  DELETE_IN_PROGRESS = "DELETE_IN_PROGRESS",
  DELETE_SUCCESSFUL = "DELETE_SUCCESSFUL",
  UPDATE_FAILED = "UPDATE_FAILED",
  UPDATE_IN_PROGRESS = "UPDATE_IN_PROGRESS",
  UPDATE_SUCCESSFUL = "UPDATE_SUCCESSFUL"
}

/**
 * <p>The configuration item size is outside the allowable range.</p>
 */
export interface OversizedConfigurationItemException
  extends __SmithyException,
    $MetadataBearer {
  name: "OversizedConfigurationItemException";
  $fault: "client";
  /**
   * <p>Error executing the command</p>
   */
  message?: string;
}

export namespace OversizedConfigurationItemException {
  export function isa(o: any): o is OversizedConfigurationItemException {
    return __isa(o, "OversizedConfigurationItemException");
  }
}

export enum Owner {
  Aws = "AWS",
  Custom_Lambda = "CUSTOM_LAMBDA"
}

/**
 * <p>An object that represents the account ID and region of an
 * 			aggregator account that is requesting authorization but is not yet
 * 			authorized.</p>
 */
export interface PendingAggregationRequest {
  __type?: "PendingAggregationRequest";
  /**
   * <p>The 12-digit account ID of the account requesting to aggregate
   * 			data.</p>
   */
  RequesterAccountId?: string;

  /**
   * <p>The region requesting to aggregate data. </p>
   */
  RequesterAwsRegion?: string;
}

export namespace PendingAggregationRequest {
  export function isa(o: any): o is PendingAggregationRequest {
    return __isa(o, "PendingAggregationRequest");
  }
}

export interface PutAggregationAuthorizationRequest {
  __type?: "PutAggregationAuthorizationRequest";
  /**
   * <p>The 12-digit account ID of the account authorized to aggregate data.</p>
   */
  AuthorizedAccountId: string | undefined;

  /**
   * <p>The region authorized to collect aggregated data.</p>
   */
  AuthorizedAwsRegion: string | undefined;

  /**
   * <p>An array of tag object.</p>
   */
  Tags?: Array<Tag>;
}

export namespace PutAggregationAuthorizationRequest {
  export function isa(o: any): o is PutAggregationAuthorizationRequest {
    return __isa(o, "PutAggregationAuthorizationRequest");
  }
}

export interface PutAggregationAuthorizationResponse {
  __type?: "PutAggregationAuthorizationResponse";
  /**
   * <p>Returns an AggregationAuthorization object.
   *
   * 		</p>
   */
  AggregationAuthorization?: AggregationAuthorization;
}

export namespace PutAggregationAuthorizationResponse {
  export function isa(o: any): o is PutAggregationAuthorizationResponse {
    return __isa(o, "PutAggregationAuthorizationResponse");
  }
}

export interface PutConfigRuleRequest {
  __type?: "PutConfigRuleRequest";
  /**
   * <p>The rule that you want to add to your account.</p>
   */
  ConfigRule: ConfigRule | undefined;

  /**
   * <p>An array of tag object.</p>
   */
  Tags?: Array<Tag>;
}

export namespace PutConfigRuleRequest {
  export function isa(o: any): o is PutConfigRuleRequest {
    return __isa(o, "PutConfigRuleRequest");
  }
}

export interface PutConfigurationAggregatorRequest {
  __type?: "PutConfigurationAggregatorRequest";
  /**
   * <p>A list of AccountAggregationSource object.
   *
   * 		</p>
   */
  AccountAggregationSources?: Array<AccountAggregationSource>;

  /**
   * <p>The name of the configuration aggregator.</p>
   */
  ConfigurationAggregatorName: string | undefined;

  /**
   * <p>An OrganizationAggregationSource object.</p>
   */
  OrganizationAggregationSource?: OrganizationAggregationSource;

  /**
   * <p>An array of tag object.</p>
   */
  Tags?: Array<Tag>;
}

export namespace PutConfigurationAggregatorRequest {
  export function isa(o: any): o is PutConfigurationAggregatorRequest {
    return __isa(o, "PutConfigurationAggregatorRequest");
  }
}

export interface PutConfigurationAggregatorResponse {
  __type?: "PutConfigurationAggregatorResponse";
  /**
   * <p>Returns a ConfigurationAggregator object.</p>
   */
  ConfigurationAggregator?: ConfigurationAggregator;
}

export namespace PutConfigurationAggregatorResponse {
  export function isa(o: any): o is PutConfigurationAggregatorResponse {
    return __isa(o, "PutConfigurationAggregatorResponse");
  }
}

/**
 * <p>The input for the <a>PutConfigurationRecorder</a>
 * 			action.</p>
 */
export interface PutConfigurationRecorderRequest {
  __type?: "PutConfigurationRecorderRequest";
  /**
   * <p>The configuration recorder object that records each
   * 			configuration change made to the resources.</p>
   */
  ConfigurationRecorder: ConfigurationRecorder | undefined;
}

export namespace PutConfigurationRecorderRequest {
  export function isa(o: any): o is PutConfigurationRecorderRequest {
    return __isa(o, "PutConfigurationRecorderRequest");
  }
}

export interface PutConformancePackRequest {
  __type?: "PutConformancePackRequest";
  /**
   * <p>A list of <code>ConformancePackInputParameter</code> objects.</p>
   */
  ConformancePackInputParameters?: Array<ConformancePackInputParameter>;

  /**
   * <p>Name of the conformance pack you want to create.</p>
   */
  ConformancePackName: string | undefined;

  /**
   * <p>AWS Config stores intermediate files while processing conformance pack template.</p>
   */
  DeliveryS3Bucket: string | undefined;

  /**
   * <p>The prefix for the Amazon S3 bucket. </p>
   */
  DeliveryS3KeyPrefix?: string;

  /**
   * <p>A string containing full conformance pack template body. Structure containing the template body with a minimum length of 1 byte and a maximum length of 51,200 bytes.</p>
   * 		       <note>
   *             <p>You can only use a YAML template with one resource type, that is, config rule and a remediation action. </p>
   *          </note>
   */
  TemplateBody?: string;

  /**
   * <p>Location of file containing the template body (<code>s3://bucketname/prefix</code>). The uri must point to the conformance pack template (max size: 300 KB) that is located in an Amazon S3 bucket in the same region as the conformance pack. </p>
   * 		       <note>
   *             <p>You must have access to read Amazon S3 bucket.</p>
   *          </note>
   */
  TemplateS3Uri?: string;
}

export namespace PutConformancePackRequest {
  export function isa(o: any): o is PutConformancePackRequest {
    return __isa(o, "PutConformancePackRequest");
  }
}

export interface PutConformancePackResponse {
  __type?: "PutConformancePackResponse";
  /**
   * <p>ARN of the conformance pack.</p>
   */
  ConformancePackArn?: string;
}

export namespace PutConformancePackResponse {
  export function isa(o: any): o is PutConformancePackResponse {
    return __isa(o, "PutConformancePackResponse");
  }
}

/**
 * <p>The input for the <a>PutDeliveryChannel</a>
 * 			action.</p>
 */
export interface PutDeliveryChannelRequest {
  __type?: "PutDeliveryChannelRequest";
  /**
   * <p>The configuration delivery channel object that delivers the
   * 			configuration information to an Amazon S3 bucket and to an Amazon
   * 			SNS topic.</p>
   */
  DeliveryChannel: DeliveryChannel | undefined;
}

export namespace PutDeliveryChannelRequest {
  export function isa(o: any): o is PutDeliveryChannelRequest {
    return __isa(o, "PutDeliveryChannelRequest");
  }
}

/**
 * <p></p>
 */
export interface PutEvaluationsRequest {
  __type?: "PutEvaluationsRequest";
  /**
   * <p>The assessments that the AWS Lambda function performs. Each
   * 			evaluation identifies an AWS resource and indicates whether it
   * 			complies with the AWS Config rule that invokes the AWS Lambda
   * 			function.</p>
   */
  Evaluations?: Array<Evaluation>;

  /**
   * <p>An encrypted token that associates an evaluation with an AWS
   * 			Config rule. Identifies the rule and the event that triggered the
   * 			evaluation.</p>
   */
  ResultToken: string | undefined;

  /**
   * <p>Use this parameter to specify a test run for
   * 				<code>PutEvaluations</code>. You can verify whether your AWS
   * 			Lambda function will deliver evaluation results to AWS Config. No
   * 			updates occur to your existing evaluations, and evaluation results
   * 			are not sent to AWS Config.</p>
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

export namespace PutEvaluationsRequest {
  export function isa(o: any): o is PutEvaluationsRequest {
    return __isa(o, "PutEvaluationsRequest");
  }
}

/**
 * <p></p>
 */
export interface PutEvaluationsResponse {
  __type?: "PutEvaluationsResponse";
  /**
   * <p>Requests that failed because of a client or server
   * 			error.</p>
   */
  FailedEvaluations?: Array<Evaluation>;
}

export namespace PutEvaluationsResponse {
  export function isa(o: any): o is PutEvaluationsResponse {
    return __isa(o, "PutEvaluationsResponse");
  }
}

export interface PutOrganizationConfigRuleRequest {
  __type?: "PutOrganizationConfigRuleRequest";
  /**
   * <p>A comma-separated list of accounts that you want to exclude from an organization config rule.</p>
   */
  ExcludedAccounts?: Array<string>;

  /**
   * <p>The name that you assign to an organization config rule.</p>
   */
  OrganizationConfigRuleName: string | undefined;

  /**
   * <p>An <code>OrganizationCustomRuleMetadata</code> object.</p>
   */
  OrganizationCustomRuleMetadata?: OrganizationCustomRuleMetadata;

  /**
   * <p>An <code>OrganizationManagedRuleMetadata</code> object. </p>
   */
  OrganizationManagedRuleMetadata?: OrganizationManagedRuleMetadata;
}

export namespace PutOrganizationConfigRuleRequest {
  export function isa(o: any): o is PutOrganizationConfigRuleRequest {
    return __isa(o, "PutOrganizationConfigRuleRequest");
  }
}

export interface PutOrganizationConfigRuleResponse {
  __type?: "PutOrganizationConfigRuleResponse";
  /**
   * <p>The Amazon Resource Name (ARN) of an organization config rule.</p>
   */
  OrganizationConfigRuleArn?: string;
}

export namespace PutOrganizationConfigRuleResponse {
  export function isa(o: any): o is PutOrganizationConfigRuleResponse {
    return __isa(o, "PutOrganizationConfigRuleResponse");
  }
}

export interface PutOrganizationConformancePackRequest {
  __type?: "PutOrganizationConformancePackRequest";
  /**
   * <p>A list of <code>ConformancePackInputParameter</code> objects.</p>
   */
  ConformancePackInputParameters?: Array<ConformancePackInputParameter>;

  /**
   * <p>Location of an Amazon S3 bucket where AWS Config can deliver evaluation results. AWS Config
   * 			stores intermediate files while processing conformance pack template. </p>
   * 		       <p>The delivery bucket name should start with awsconfigconforms. For example: "Resource": "arn:aws:s3:::your_bucket_name/*".
   * 			For more information, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/conformance-pack-organization-apis.html">Permissions for cross account bucket access</a>.</p>
   */
  DeliveryS3Bucket: string | undefined;

  /**
   * <p>The prefix for the Amazon S3 bucket.</p>
   */
  DeliveryS3KeyPrefix?: string;

  /**
   * <p>A list of AWS accounts to be excluded from an organization conformance pack while deploying a conformance pack.</p>
   */
  ExcludedAccounts?: Array<string>;

  /**
   * <p>Name of the organization conformance pack you want to create.</p>
   */
  OrganizationConformancePackName: string | undefined;

  /**
   * <p>A string containing full conformance pack template body. Structure containing the template body
   * 			with a minimum length of 1 byte and a maximum length of 51,200 bytes.</p>
   */
  TemplateBody?: string;

  /**
   * <p>Location of file containing the template body. The uri must point to the conformance pack template
   * 			(max size: 300 KB).</p>
   * 		       <note>
   *             <p>You must have access to read Amazon S3 bucket.</p>
   *          </note>
   */
  TemplateS3Uri?: string;
}

export namespace PutOrganizationConformancePackRequest {
  export function isa(o: any): o is PutOrganizationConformancePackRequest {
    return __isa(o, "PutOrganizationConformancePackRequest");
  }
}

export interface PutOrganizationConformancePackResponse {
  __type?: "PutOrganizationConformancePackResponse";
  /**
   * <p>ARN of the organization conformance pack.</p>
   */
  OrganizationConformancePackArn?: string;
}

export namespace PutOrganizationConformancePackResponse {
  export function isa(o: any): o is PutOrganizationConformancePackResponse {
    return __isa(o, "PutOrganizationConformancePackResponse");
  }
}

export interface PutRemediationConfigurationsRequest {
  __type?: "PutRemediationConfigurationsRequest";
  /**
   * <p>A list of remediation configuration objects.</p>
   */
  RemediationConfigurations: Array<RemediationConfiguration> | undefined;
}

export namespace PutRemediationConfigurationsRequest {
  export function isa(o: any): o is PutRemediationConfigurationsRequest {
    return __isa(o, "PutRemediationConfigurationsRequest");
  }
}

export interface PutRemediationConfigurationsResponse {
  __type?: "PutRemediationConfigurationsResponse";
  /**
   * <p>Returns a list of failed remediation batch objects.</p>
   */
  FailedBatches?: Array<FailedRemediationBatch>;
}

export namespace PutRemediationConfigurationsResponse {
  export function isa(o: any): o is PutRemediationConfigurationsResponse {
    return __isa(o, "PutRemediationConfigurationsResponse");
  }
}

export interface PutRemediationExceptionsRequest {
  __type?: "PutRemediationExceptionsRequest";
  /**
   * <p>The name of the AWS Config rule for which you want to create remediation exception.</p>
   */
  ConfigRuleName: string | undefined;

  /**
   * <p>The exception is automatically deleted after the expiration date.</p>
   */
  ExpirationTime?: Date;

  /**
   * <p>The message contains an explanation of the exception.</p>
   */
  Message?: string;

  /**
   * <p>An exception list of resource exception keys to be processed with the current request. AWS Config adds exception for each resource key. For example, AWS Config adds 3 exceptions for 3 resource keys. </p>
   */
  ResourceKeys: Array<RemediationExceptionResourceKey> | undefined;
}

export namespace PutRemediationExceptionsRequest {
  export function isa(o: any): o is PutRemediationExceptionsRequest {
    return __isa(o, "PutRemediationExceptionsRequest");
  }
}

export interface PutRemediationExceptionsResponse {
  __type?: "PutRemediationExceptionsResponse";
  /**
   * <p>Returns a list of failed remediation exceptions batch objects. Each object in the batch consists of a list of failed items and failure messages.</p>
   */
  FailedBatches?: Array<FailedRemediationExceptionBatch>;
}

export namespace PutRemediationExceptionsResponse {
  export function isa(o: any): o is PutRemediationExceptionsResponse {
    return __isa(o, "PutRemediationExceptionsResponse");
  }
}

export interface PutResourceConfigRequest {
  __type?: "PutResourceConfigRequest";
  /**
   * <p>The configuration object of the resource in valid JSON format. It must match the schema registered with AWS CloudFormation.</p>
   * 		       <note>
   *             <p>The configuration JSON must not exceed 64 KB.</p>
   *          </note>
   */
  Configuration: string | undefined;

  /**
   * <p>Unique identifier of the resource.</p>
   */
  ResourceId: string | undefined;

  /**
   * <p>Name of the resource.</p>
   */
  ResourceName?: string;

  /**
   * <p>The type of the resource. The custom resource type must be registered with AWS CloudFormation. </p>
   * 		       <note>
   *             <p>You cannot use the organization names “aws”, “amzn”, “amazon”, “alexa”, “custom” with custom resource types. It is the first part of the ResourceType up to the first ::.</p>
   *          </note>
   */
  ResourceType: string | undefined;

  /**
   * <p>Version of the schema registered for the ResourceType in AWS CloudFormation.</p>
   */
  SchemaVersionId: string | undefined;

  /**
   * <p>Tags associated with the resource.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace PutResourceConfigRequest {
  export function isa(o: any): o is PutResourceConfigRequest {
    return __isa(o, "PutResourceConfigRequest");
  }
}

export interface PutRetentionConfigurationRequest {
  __type?: "PutRetentionConfigurationRequest";
  /**
   * <p>Number of days AWS Config stores your historical
   * 			information.</p>
   * 		       <note>
   * 			         <p>Currently, only applicable to the configuration item
   * 				history.</p>
   * 		       </note>
   */
  RetentionPeriodInDays: number | undefined;
}

export namespace PutRetentionConfigurationRequest {
  export function isa(o: any): o is PutRetentionConfigurationRequest {
    return __isa(o, "PutRetentionConfigurationRequest");
  }
}

export interface PutRetentionConfigurationResponse {
  __type?: "PutRetentionConfigurationResponse";
  /**
   * <p>Returns a retention configuration object.</p>
   */
  RetentionConfiguration?: RetentionConfiguration;
}

export namespace PutRetentionConfigurationResponse {
  export function isa(o: any): o is PutRetentionConfigurationResponse {
    return __isa(o, "PutRetentionConfigurationResponse");
  }
}

/**
 * <p>Details about the query.</p>
 */
export interface QueryInfo {
  __type?: "QueryInfo";
  /**
   * <p>Returns a <code>FieldInfo</code> object.</p>
   */
  SelectFields?: Array<FieldInfo>;
}

export namespace QueryInfo {
  export function isa(o: any): o is QueryInfo {
    return __isa(o, "QueryInfo");
  }
}

export enum RecorderStatus {
  Failure = "Failure",
  Pending = "Pending",
  Success = "Success"
}

/**
 * <p>Specifies the types of AWS resource for which AWS Config
 * 			records configuration changes.</p>
 * 		       <p>In the recording group, you specify whether all supported types
 * 			or specific types of resources are recorded.</p>
 * 		       <p>By default, AWS Config records configuration changes for all
 * 			supported types of regional resources that AWS Config discovers in
 * 			the region in which it is running. Regional resources are tied to a
 * 			region and can be used only in that region. Examples of regional
 * 			resources are EC2 instances and EBS volumes.</p>
 * 		       <p>You can also have AWS Config record configuration changes for
 * 			supported types of global resources (for example, IAM resources).
 * 			Global resources are not tied to an individual region and can be
 * 			used in all regions.</p>
 * 		       <important>
 * 			         <p>The configuration details for any global resource are the
 * 				same in all regions. If you customize AWS Config in multiple
 * 				regions to record global resources, it will create multiple
 * 				configuration items each time a global resource changes: one
 * 				configuration item for each region. These configuration items
 * 				will contain identical data. To prevent duplicate configuration
 * 				items, you should consider customizing AWS Config in only one
 * 				region to record global resources, unless you want the
 * 				configuration items to be available in multiple
 * 				regions.</p>
 * 		       </important>
 * 		       <p>If you don't want AWS Config to record all resources, you can
 * 			specify which types of resources it will record with the
 * 				<code>resourceTypes</code> parameter.</p>
 * 		       <p>For a list of supported resource types, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/resource-config-reference.html#supported-resources">Supported Resource Types</a>.</p>
 * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/select-resources.html">Selecting Which Resources AWS Config Records</a>.</p>
 */
export interface RecordingGroup {
  __type?: "RecordingGroup";
  /**
   * <p>Specifies whether AWS Config records configuration changes for
   * 			every supported type of regional resource.</p>
   * 		       <p>If you set this option to <code>true</code>, when AWS Config
   * 			adds support for a new type of regional resource, it starts
   * 			recording resources of that type automatically.</p>
   * 		       <p>If you set this option to <code>true</code>, you cannot
   * 			enumerate a list of <code>resourceTypes</code>.</p>
   */
  allSupported?: boolean;

  /**
   * <p>Specifies whether AWS Config includes all supported types of
   * 			global resources (for example, IAM resources) with the resources
   * 			that it records.</p>
   * 		       <p>Before you can set this option to <code>true</code>, you must
   * 			set the <code>allSupported</code> option to
   * 			<code>true</code>.</p>
   * 		       <p>If you set this option to <code>true</code>, when AWS Config
   * 			adds support for a new type of global resource, it starts recording
   * 			resources of that type automatically.</p>
   * 		       <p>The configuration details for any global resource are the same
   * 			in all regions. To prevent duplicate configuration items, you should
   * 			consider customizing AWS Config in only one region to record global
   * 			resources.</p>
   */
  includeGlobalResourceTypes?: boolean;

  /**
   * <p>A comma-separated list that specifies the types of AWS
   * 			resources for which AWS Config records configuration changes (for
   * 			example, <code>AWS::EC2::Instance</code> or
   * 				<code>AWS::CloudTrail::Trail</code>).</p>
   * 		       <p>Before you can set this option to <code>true</code>, you must
   * 			set the <code>allSupported</code> option to
   * 			<code>false</code>.</p>
   * 		       <p>If you set this option to <code>true</code>, when AWS Config
   * 			adds support for a new type of resource, it will not record
   * 			resources of that type unless you manually add that type to your
   * 			recording group.</p>
   * 		       <p>For a list of valid <code>resourceTypes</code> values, see the
   * 				<b>resourceType Value</b> column in
   * 				<a href="https://docs.aws.amazon.com/config/latest/developerguide/resource-config-reference.html#supported-resources">Supported AWS Resource Types</a>.</p>
   */
  resourceTypes?: Array<ResourceType | string>;
}

export namespace RecordingGroup {
  export function isa(o: any): o is RecordingGroup {
    return __isa(o, "RecordingGroup");
  }
}

/**
 * <p>The relationship of the related resource to the main
 * 			resource.</p>
 */
export interface Relationship {
  __type?: "Relationship";
  /**
   * <p>The type of relationship with the related resource.</p>
   */
  relationshipName?: string;

  /**
   * <p>The ID of the related resource (for example,
   * 				<code>sg-xxxxxx</code>).</p>
   */
  resourceId?: string;

  /**
   * <p>The custom name of the related resource, if
   * 			available.</p>
   */
  resourceName?: string;

  /**
   * <p>The resource type of the related resource.</p>
   */
  resourceType?: ResourceType | string;
}

export namespace Relationship {
  export function isa(o: any): o is Relationship {
    return __isa(o, "Relationship");
  }
}

/**
 * <p>An object that represents the details about the remediation configuration that includes the remediation action, parameters, and data to execute the action.</p>
 */
export interface RemediationConfiguration {
  __type?: "RemediationConfiguration";
  /**
   * <p>Amazon Resource Name (ARN) of remediation configuration.</p>
   */
  Arn?: string;

  /**
   * <p>The remediation is triggered automatically.</p>
   */
  Automatic?: boolean;

  /**
   * <p>The name of the AWS Config rule.</p>
   */
  ConfigRuleName: string | undefined;

  /**
   * <p>Name of the service that owns the service linked rule, if applicable.</p>
   */
  CreatedByService?: string;

  /**
   * <p>An ExecutionControls object.</p>
   */
  ExecutionControls?: ExecutionControls;

  /**
   * <p>The maximum number of failed attempts for auto-remediation. If you do not select a number, the default is 5.</p>
   * 		       <p>For example, if you specify MaximumAutomaticAttempts as 5 with RetryAttemptsSeconds as 50 seconds, AWS Config throws an exception after the 5th failed attempt within 50 seconds.</p>
   */
  MaximumAutomaticAttempts?: number;

  /**
   * <p>An object of the RemediationParameterValue.</p>
   */
  Parameters?: { [key: string]: RemediationParameterValue };

  /**
   * <p>The type of a resource. </p>
   */
  ResourceType?: string;

  /**
   * <p>Maximum time in seconds that AWS Config runs auto-remediation. If you do not select a number, the default is 60 seconds. </p>
   * 		       <p>For example, if you specify RetryAttemptsSeconds as 50 seconds and MaximumAutomaticAttempts as 5, AWS Config will run auto-remediations 5 times within 50 seconds before throwing an exception. </p>
   */
  RetryAttemptSeconds?: number;

  /**
   * <p>Target ID is the name of the public document.</p>
   */
  TargetId: string | undefined;

  /**
   * <p>The type of the target. Target executes remediation. For example, SSM document.</p>
   */
  TargetType: RemediationTargetType | string | undefined;

  /**
   * <p>Version of the target. For example, version of the SSM document.</p>
   */
  TargetVersion?: string;
}

export namespace RemediationConfiguration {
  export function isa(o: any): o is RemediationConfiguration {
    return __isa(o, "RemediationConfiguration");
  }
}

/**
 * <p>An object that represents the details about the remediation exception. The details include the rule name, an explanation of an exception, the time when the exception will be deleted, the resource ID, and resource type. </p>
 */
export interface RemediationException {
  __type?: "RemediationException";
  /**
   * <p>The name of the AWS Config rule.</p>
   */
  ConfigRuleName: string | undefined;

  /**
   * <p>The time when the remediation exception will be deleted.</p>
   */
  ExpirationTime?: Date;

  /**
   * <p>An explanation of an remediation exception.</p>
   */
  Message?: string;

  /**
   * <p>The ID of the resource (for example., sg-xxxxxx).</p>
   */
  ResourceId: string | undefined;

  /**
   * <p>The type of a resource.</p>
   */
  ResourceType: string | undefined;
}

export namespace RemediationException {
  export function isa(o: any): o is RemediationException {
    return __isa(o, "RemediationException");
  }
}

/**
 * <p>The details that identify a resource within AWS Config, including the resource type and resource ID. </p>
 */
export interface RemediationExceptionResourceKey {
  __type?: "RemediationExceptionResourceKey";
  /**
   * <p>The ID of the resource (for example., sg-xxxxxx).</p>
   */
  ResourceId?: string;

  /**
   * <p>The type of a resource.</p>
   */
  ResourceType?: string;
}

export namespace RemediationExceptionResourceKey {
  export function isa(o: any): o is RemediationExceptionResourceKey {
    return __isa(o, "RemediationExceptionResourceKey");
  }
}

export enum RemediationExecutionState {
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  QUEUED = "QUEUED",
  SUCCEEDED = "SUCCEEDED"
}

/**
 * <p>Provides details of the current status of the invoked remediation action for that resource.</p>
 */
export interface RemediationExecutionStatus {
  __type?: "RemediationExecutionStatus";
  /**
   * <p>Start time when the remediation was executed.</p>
   */
  InvocationTime?: Date;

  /**
   * <p>The time when the remediation execution was last updated.</p>
   */
  LastUpdatedTime?: Date;

  /**
   * <p>The details that identify a resource within AWS Config, including
   * 			the resource type and resource ID.</p>
   */
  ResourceKey?: ResourceKey;

  /**
   * <p>ENUM of the values.</p>
   */
  State?: RemediationExecutionState | string;

  /**
   * <p>Details of every step.</p>
   */
  StepDetails?: Array<RemediationExecutionStep>;
}

export namespace RemediationExecutionStatus {
  export function isa(o: any): o is RemediationExecutionStatus {
    return __isa(o, "RemediationExecutionStatus");
  }
}

/**
 * <p>Name of the step from the SSM document.</p>
 */
export interface RemediationExecutionStep {
  __type?: "RemediationExecutionStep";
  /**
   * <p>An error message if the step was interrupted during execution.</p>
   */
  ErrorMessage?: string;

  /**
   * <p>The details of the step.</p>
   */
  Name?: string;

  /**
   * <p>The time when the step started.</p>
   */
  StartTime?: Date;

  /**
   * <p>The valid status of the step.</p>
   */
  State?: RemediationExecutionStepState | string;

  /**
   * <p>The time when the step stopped.</p>
   */
  StopTime?: Date;
}

export namespace RemediationExecutionStep {
  export function isa(o: any): o is RemediationExecutionStep {
    return __isa(o, "RemediationExecutionStep");
  }
}

export enum RemediationExecutionStepState {
  FAILED = "FAILED",
  PENDING = "PENDING",
  SUCCEEDED = "SUCCEEDED"
}

/**
 * <p>Remediation action is in progress. You can either cancel execution in AWS Systems Manager or wait and try again later. </p>
 */
export interface RemediationInProgressException
  extends __SmithyException,
    $MetadataBearer {
  name: "RemediationInProgressException";
  $fault: "client";
  /**
   * <p>Error executing the command</p>
   */
  message?: string;
}

export namespace RemediationInProgressException {
  export function isa(o: any): o is RemediationInProgressException {
    return __isa(o, "RemediationInProgressException");
  }
}

/**
 * <p>The value is either a dynamic (resource) value or a static value. You must select either a dynamic value or a static value.</p>
 */
export interface RemediationParameterValue {
  __type?: "RemediationParameterValue";
  /**
   * <p>The value is dynamic and changes at run-time.</p>
   */
  ResourceValue?: ResourceValue;

  /**
   * <p>The value is static and does not change at run-time.</p>
   */
  StaticValue?: StaticValue;
}

export namespace RemediationParameterValue {
  export function isa(o: any): o is RemediationParameterValue {
    return __isa(o, "RemediationParameterValue");
  }
}

export enum RemediationTargetType {
  SSM_DOCUMENT = "SSM_DOCUMENT"
}

/**
 * <p>An object that contains the resource type and the number of
 * 			resources.</p>
 */
export interface ResourceCount {
  __type?: "ResourceCount";
  /**
   * <p>The number of resources.</p>
   */
  count?: number;

  /**
   * <p>The resource type (for example,
   * 				<code>"AWS::EC2::Instance"</code>).</p>
   */
  resourceType?: ResourceType | string;
}

export namespace ResourceCount {
  export function isa(o: any): o is ResourceCount {
    return __isa(o, "ResourceCount");
  }
}

/**
 * <p>Filters the resource count based on account ID, region, and resource type.</p>
 */
export interface ResourceCountFilters {
  __type?: "ResourceCountFilters";
  /**
   * <p>The 12-digit ID of the account.</p>
   */
  AccountId?: string;

  /**
   * <p>The region where the account is located.</p>
   */
  Region?: string;

  /**
   * <p>The type of the AWS resource.</p>
   */
  ResourceType?: ResourceType | string;
}

export namespace ResourceCountFilters {
  export function isa(o: any): o is ResourceCountFilters {
    return __isa(o, "ResourceCountFilters");
  }
}

export enum ResourceCountGroupKey {
  ACCOUNT_ID = "ACCOUNT_ID",
  AWS_REGION = "AWS_REGION",
  RESOURCE_TYPE = "RESOURCE_TYPE"
}

/**
 * <p>Filters the results by resource account ID, region, resource ID, and resource name.</p>
 */
export interface ResourceFilters {
  __type?: "ResourceFilters";
  /**
   * <p>The 12-digit source account ID.</p>
   */
  AccountId?: string;

  /**
   * <p>The source region.</p>
   */
  Region?: string;

  /**
   * <p>The ID of the resource.</p>
   */
  ResourceId?: string;

  /**
   * <p>The name of the resource.</p>
   */
  ResourceName?: string;
}

export namespace ResourceFilters {
  export function isa(o: any): o is ResourceFilters {
    return __isa(o, "ResourceFilters");
  }
}

/**
 * <p>The details that identify a resource that is discovered by AWS
 * 			Config, including the resource type, ID, and (if available) the
 * 			custom resource name.</p>
 */
export interface ResourceIdentifier {
  __type?: "ResourceIdentifier";
  /**
   * <p>The time that the resource was deleted.</p>
   */
  resourceDeletionTime?: Date;

  /**
   * <p>The ID of the resource (for example,
   * 			<code>sg-xxxxxx</code>).</p>
   */
  resourceId?: string;

  /**
   * <p>The custom name of the resource (if available).</p>
   */
  resourceName?: string;

  /**
   * <p>The type of resource.</p>
   */
  resourceType?: ResourceType | string;
}

export namespace ResourceIdentifier {
  export function isa(o: any): o is ResourceIdentifier {
    return __isa(o, "ResourceIdentifier");
  }
}

/**
 * <p>You see this exception in the following cases: </p>
 * 		       <ul>
 *             <li>
 *                <p>For DeleteConfigRule, AWS Config is deleting this rule. Try your request again later.</p>
 *             </li>
 *             <li>
 *                <p>For DeleteConfigRule, the rule is deleting your evaluation results. Try your request again later.</p>
 *             </li>
 *             <li>
 *                <p>For DeleteConfigRule, a remediation action is associated with the rule and AWS Config cannot delete this rule. Delete the remediation action associated with the rule before deleting the rule and try your request again later.</p>
 *             </li>
 *             <li>
 *                <p>For PutConfigOrganizationRule, organization config rule deletion is in progress. Try your request again later.</p>
 *             </li>
 *             <li>
 *                <p>For DeleteOrganizationConfigRule, organization config rule creation is in progress. Try your request again later.</p>
 *             </li>
 *             <li>
 *                <p>For PutConformancePack and PutOrganizationConformancePack, a conformance pack creation, update, and deletion is in progress. Try your request again later.</p>
 *             </li>
 *             <li>
 *                <p>For DeleteConformancePack, a conformance pack creation, update, and deletion is in progress. Try your request again later.</p>
 *             </li>
 *          </ul>
 */
export interface ResourceInUseException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceInUseException";
  $fault: "client";
  /**
   * <p>Error executing the command</p>
   */
  message?: string;
}

export namespace ResourceInUseException {
  export function isa(o: any): o is ResourceInUseException {
    return __isa(o, "ResourceInUseException");
  }
}

/**
 * <p>The details that identify a resource within AWS Config, including
 * 			the resource type and resource ID.</p>
 */
export interface ResourceKey {
  __type?: "ResourceKey";
  /**
   * <p>The ID of the resource (for example., sg-xxxxxx). </p>
   */
  resourceId: string | undefined;

  /**
   * <p>The resource type.</p>
   */
  resourceType: ResourceType | string | undefined;
}

export namespace ResourceKey {
  export function isa(o: any): o is ResourceKey {
    return __isa(o, "ResourceKey");
  }
}

/**
 * <p>You have specified a resource that is either unknown or has not
 * 			been discovered.</p>
 */
export interface ResourceNotDiscoveredException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceNotDiscoveredException";
  $fault: "client";
  /**
   * <p>Error executing the command</p>
   */
  message?: string;
}

export namespace ResourceNotDiscoveredException {
  export function isa(o: any): o is ResourceNotDiscoveredException {
    return __isa(o, "ResourceNotDiscoveredException");
  }
}

/**
 * <p>You have specified a resource that does not exist.</p>
 */
export interface ResourceNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  /**
   * <p>Error executing the command</p>
   */
  message?: string;
}

export namespace ResourceNotFoundException {
  export function isa(o: any): o is ResourceNotFoundException {
    return __isa(o, "ResourceNotFoundException");
  }
}

export enum ResourceType {
  AccountPublicAccessBlock = "AWS::S3::AccountPublicAccessBlock",
  Alarm = "AWS::CloudWatch::Alarm",
  Alias = "AWS::Lambda::Alias",
  Api = "AWS::ApiGatewayV2::Api",
  Application = "AWS::ElasticBeanstalk::Application",
  ApplicationVersion = "AWS::ElasticBeanstalk::ApplicationVersion",
  AssociationCompliance = "AWS::SSM::AssociationCompliance",
  AutoScalingGroup = "AWS::AutoScaling::AutoScalingGroup",
  Bucket = "AWS::S3::Bucket",
  Certificate = "AWS::ACM::Certificate",
  CloudFormationProduct = "AWS::ServiceCatalog::CloudFormationProduct",
  CloudFormationProvisionedProduct = "AWS::ServiceCatalog::CloudFormationProvisionedProduct",
  Cluster = "AWS::Redshift::Cluster",
  ClusterParameterGroup = "AWS::Redshift::ClusterParameterGroup",
  ClusterSecurityGroup = "AWS::Redshift::ClusterSecurityGroup",
  ClusterSnapshot = "AWS::Redshift::ClusterSnapshot",
  ClusterSubnetGroup = "AWS::Redshift::ClusterSubnetGroup",
  CustomerGateway = "AWS::EC2::CustomerGateway",
  DBCluster = "AWS::RDS::DBCluster",
  DBClusterParameterGroup = "AWS::RDS::DBClusterParameterGroup",
  DBClusterSnapshot = "AWS::RDS::DBClusterSnapshot",
  DBInstance = "AWS::RDS::DBInstance",
  DBOptionGroup = "AWS::RDS::DBOptionGroup",
  DBParameterGroup = "AWS::RDS::DBParameterGroup",
  DBSecurityGroup = "AWS::RDS::DBSecurityGroup",
  DBSnapshot = "AWS::RDS::DBSnapshot",
  DBSubnetGroup = "AWS::RDS::DBSubnetGroup",
  Distribution = "AWS::CloudFront::Distribution",
  DomainName = "AWS::ApiGateway::DomainName",
  DomainNameV2 = "AWS::ApiGatewayV2::DomainName",
  EIP = "AWS::EC2::EIP",
  EgressOnlyInternetGateway = "AWS::EC2::EgressOnlyInternetGateway",
  EncryptionConfig = "AWS::XRay::EncryptionConfig",
  Environment = "AWS::ElasticBeanstalk::Environment",
  EventSubscription = "AWS::RDS::EventSubscription",
  FlowLog = "AWS::EC2::FlowLog",
  Function = "AWS::Lambda::Function",
  Group = "AWS::IAM::Group",
  Host = "AWS::EC2::Host",
  Instance = "AWS::EC2::Instance",
  InternetGateway = "AWS::EC2::InternetGateway",
  LaunchConfiguration = "AWS::AutoScaling::LaunchConfiguration",
  LicenseConfiguration = "AWS::LicenseManager::LicenseConfiguration",
  LoadBalancer = "AWS::ElasticLoadBalancing::LoadBalancer",
  LoadBalancerV2 = "AWS::ElasticLoadBalancingV2::LoadBalancer",
  ManagedInstanceInventory = "AWS::SSM::ManagedInstanceInventory",
  Method = "AWS::ApiGateway::Method",
  MobileHubProject = "AWS::MobileHub::Project",
  NatGateway = "AWS::EC2::NatGateway",
  NetworkAcl = "AWS::EC2::NetworkAcl",
  NetworkInterface = "AWS::EC2::NetworkInterface",
  PatchCompliance = "AWS::SSM::PatchCompliance",
  Pipeline = "AWS::CodePipeline::Pipeline",
  Policy = "AWS::IAM::Policy",
  Portfolio = "AWS::ServiceCatalog::Portfolio",
  Project = "AWS::CodeBuild::Project",
  Protection = "AWS::Shield::Protection",
  RateBasedRule = "AWS::WAF::RateBasedRule",
  RedshiftEventSubscription = "AWS::Redshift::EventSubscription",
  RegionalProtection = "AWS::ShieldRegional::Protection",
  RegionalRateBasedRule = "AWS::WAFRegional::RateBasedRule",
  RegionalRule = "AWS::WAFRegional::Rule",
  RegionalRuleGroup = "AWS::WAFRegional::RuleGroup",
  RegionalWebACL = "AWS::WAFRegional::WebACL",
  RegisteredHAInstance = "AWS::EC2::RegisteredHAInstance",
  ResourceCompliance = "AWS::Config::ResourceCompliance",
  RestApi = "AWS::ApiGateway::RestApi",
  Role = "AWS::IAM::Role",
  RouteTable = "AWS::EC2::RouteTable",
  Rule = "AWS::WAF::Rule",
  RuleGroup = "AWS::WAF::RuleGroup",
  ScalingPolicy = "AWS::AutoScaling::ScalingPolicy",
  ScheduledAction = "AWS::AutoScaling::ScheduledAction",
  SecurityGroup = "AWS::EC2::SecurityGroup",
  Stack = "AWS::CloudFormation::Stack",
  Stage = "AWS::ApiGateway::Stage",
  StageV2 = "AWS::ApiGatewayV2::Stage",
  StreamingDistribution = "AWS::CloudFront::StreamingDistribution",
  Subnet = "AWS::EC2::Subnet",
  Table = "AWS::DynamoDB::Table",
  Trail = "AWS::CloudTrail::Trail",
  User = "AWS::IAM::User",
  VPC = "AWS::EC2::VPC",
  VPCEndpoint = "AWS::EC2::VPCEndpoint",
  VPCEndpointService = "AWS::EC2::VPCEndpointService",
  VPCPeeringConnection = "AWS::EC2::VPCPeeringConnection",
  VPNConnection = "AWS::EC2::VPNConnection",
  VPNGateway = "AWS::EC2::VPNGateway",
  Volume = "AWS::EC2::Volume",
  WebACL = "AWS::WAF::WebACL"
}

/**
 * <p>The dynamic value of the resource.</p>
 */
export interface ResourceValue {
  __type?: "ResourceValue";
  /**
   * <p>The value is a resource ID.</p>
   */
  Value: ResourceValueType | string | undefined;
}

export namespace ResourceValue {
  export function isa(o: any): o is ResourceValue {
    return __isa(o, "ResourceValue");
  }
}

export enum ResourceValueType {
  RESOURCE_ID = "RESOURCE_ID"
}

/**
 * <p>An object with the name of the retention configuration and the retention period in days. The object stores the configuration for data retention in AWS Config.</p>
 */
export interface RetentionConfiguration {
  __type?: "RetentionConfiguration";
  /**
   * <p>The name of the retention configuration object.</p>
   */
  Name: string | undefined;

  /**
   * <p>Number of days AWS Config stores your historical information.</p>
   * 		       <note>
   *             <p>Currently, only applicable to the configuration item history.</p>
   *          </note>
   */
  RetentionPeriodInDays: number | undefined;
}

export namespace RetentionConfiguration {
  export function isa(o: any): o is RetentionConfiguration {
    return __isa(o, "RetentionConfiguration");
  }
}

/**
 * <p>Defines which resources trigger an evaluation for an AWS Config
 * 			rule. The scope can include one or more resource types, a
 * 			combination of a tag key and value, or a combination of one resource
 * 			type and one resource ID. Specify a scope to constrain which
 * 			resources trigger an evaluation for a rule. Otherwise, evaluations
 * 			for the rule are triggered when any resource in your recording group
 * 			changes in configuration.</p>
 */
export interface Scope {
  __type?: "Scope";
  /**
   * <p>The ID of the only AWS resource that you want to trigger an
   * 			evaluation for the rule. If you specify a resource ID, you must
   * 			specify one resource type for
   * 			<code>ComplianceResourceTypes</code>.</p>
   */
  ComplianceResourceId?: string;

  /**
   * <p>The resource types of only those AWS resources that you want to
   * 			trigger an evaluation for the rule. You can only specify one type if
   * 			you also specify a resource ID for
   * 			<code>ComplianceResourceId</code>.</p>
   */
  ComplianceResourceTypes?: Array<string>;

  /**
   * <p>The tag key that is applied to only those AWS resources that
   * 			you want to trigger an evaluation for the rule.</p>
   */
  TagKey?: string;

  /**
   * <p>The tag value applied to only those AWS resources that you want
   * 			to trigger an evaluation for the rule. If you specify a value for
   * 				<code>TagValue</code>, you must also specify a value for
   * 				<code>TagKey</code>.</p>
   */
  TagValue?: string;
}

export namespace Scope {
  export function isa(o: any): o is Scope {
    return __isa(o, "Scope");
  }
}

export interface SelectResourceConfigRequest {
  __type?: "SelectResourceConfigRequest";
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
  export function isa(o: any): o is SelectResourceConfigRequest {
    return __isa(o, "SelectResourceConfigRequest");
  }
}

export interface SelectResourceConfigResponse {
  __type?: "SelectResourceConfigResponse";
  /**
   * <p>The <code>nextToken</code> string returned in a previous request that you use to request the next page of results in a paginated response. </p>
   */
  NextToken?: string;

  /**
   * <p>Returns the <code>QueryInfo</code> object.</p>
   */
  QueryInfo?: QueryInfo;

  /**
   * <p>Returns the results for the SQL query.</p>
   */
  Results?: Array<string>;
}

export namespace SelectResourceConfigResponse {
  export function isa(o: any): o is SelectResourceConfigResponse {
    return __isa(o, "SelectResourceConfigResponse");
  }
}

/**
 * <p>Provides the AWS Config rule owner (AWS or customer), the rule
 * 			identifier, and the events that trigger the evaluation of your AWS
 * 			resources.</p>
 */
export interface Source {
  __type?: "Source";
  /**
   * <p>Indicates whether AWS or the customer owns and manages the AWS
   * 			Config rule.</p>
   */
  Owner: Owner | string | undefined;

  /**
   * <p>Provides the source and type of the event that causes AWS
   * 			Config to evaluate your AWS resources.</p>
   */
  SourceDetails?: Array<SourceDetail>;

  /**
   * <p>For AWS Config managed rules, a predefined identifier from a
   * 			list. For example, <code>IAM_PASSWORD_POLICY</code> is a managed
   * 			rule. To reference a managed rule, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config_use-managed-rules.html">Using AWS Managed Config Rules</a>.</p>
   * 		       <p>For custom rules, the identifier is the Amazon Resource Name
   * 			(ARN) of the rule's AWS Lambda function, such as
   * 				<code>arn:aws:lambda:us-east-2:123456789012:function:custom_rule_name</code>.</p>
   */
  SourceIdentifier: string | undefined;
}

export namespace Source {
  export function isa(o: any): o is Source {
    return __isa(o, "Source");
  }
}

/**
 * <p>Provides the source and the message types that trigger AWS
 * 			Config to evaluate your AWS resources against a rule. It also
 * 			provides the frequency with which you want AWS Config to run
 * 			evaluations for the rule if the trigger type is periodic. You can
 * 			specify the parameter values for <code>SourceDetail</code> only for
 * 			custom rules. </p>
 */
export interface SourceDetail {
  __type?: "SourceDetail";
  /**
   * <p>The source of the event, such as an AWS service, that triggers
   * 			AWS Config to evaluate your AWS resources.</p>
   */
  EventSource?: EventSource | string;

  /**
   * <p>The frequency at which you want AWS Config to run evaluations
   * 			for a custom rule with a periodic trigger. If you specify a value
   * 			for <code>MaximumExecutionFrequency</code>, then
   * 				<code>MessageType</code> must use the
   * 				<code>ScheduledNotification</code> value.</p>
   *
   *
   *
   *
   *
   * 		       <note>
   * 			         <p>By default, rules with a periodic trigger are evaluated
   * 				every 24 hours. To change the frequency, specify a valid value
   * 				for the <code>MaximumExecutionFrequency</code>
   * 				parameter.</p>
   * 			         <p>Based on the valid value you choose, AWS Config runs
   * 				evaluations once for each valid value. For example, if you
   * 				choose <code>Three_Hours</code>, AWS Config runs evaluations
   * 				once every three hours. In this case, <code>Three_Hours</code>
   * 				is the frequency of this rule. </p>
   * 		       </note>
   */
  MaximumExecutionFrequency?: MaximumExecutionFrequency | string;

  /**
   * <p>The type of notification that triggers AWS Config to run an
   * 			evaluation for a rule. You can specify the following notification
   * 			types:</p>
   *
   *
   * 		       <ul>
   *             <li>
   * 				           <p>
   * 					             <code>ConfigurationItemChangeNotification</code> - Triggers
   * 					an evaluation when AWS Config delivers a configuration item
   * 					as a result of a resource change.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>OversizedConfigurationItemChangeNotification</code>
   * 					- Triggers an evaluation when AWS Config delivers an
   * 					oversized configuration item. AWS Config may generate this
   * 					notification type when a resource changes and the
   * 					notification exceeds the maximum size allowed by Amazon
   * 					SNS.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>ScheduledNotification</code> - Triggers a
   * 					periodic evaluation at the frequency specified for
   * 						<code>MaximumExecutionFrequency</code>.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>ConfigurationSnapshotDeliveryCompleted</code> -
   * 					Triggers a periodic evaluation when AWS Config delivers a
   * 					configuration snapshot.</p>
   * 			         </li>
   *          </ul>
   *
   * 		       <p>If you want your custom rule to be triggered by configuration
   * 			changes, specify two SourceDetail objects, one for
   * 				<code>ConfigurationItemChangeNotification</code> and one for
   * 				<code>OversizedConfigurationItemChangeNotification</code>.</p>
   */
  MessageType?: MessageType | string;
}

export namespace SourceDetail {
  export function isa(o: any): o is SourceDetail {
    return __isa(o, "SourceDetail");
  }
}

/**
 * <p>AWS Systems Manager (SSM) specific remediation controls.</p>
 */
export interface SsmControls {
  __type?: "SsmControls";
  /**
   * <p>The maximum percentage of remediation actions allowed to run in parallel on the non-compliant resources for that specific rule. You can specify a percentage, such as 10%. The default value is 10. </p>
   */
  ConcurrentExecutionRatePercentage?: number;

  /**
   * <p>The percentage of errors that are allowed before SSM stops running automations on non-compliant resources for that specific rule.
   * 			You can specify a percentage of errors, for example 10%. If you do not specifiy a percentage, the default is 50%.
   * 			For example, if you set the ErrorPercentage to 40% for 10 non-compliant resources, then SSM stops running the automations when the fifth error is received. </p>
   */
  ErrorPercentage?: number;
}

export namespace SsmControls {
  export function isa(o: any): o is SsmControls {
    return __isa(o, "SsmControls");
  }
}

/**
 * <p></p>
 */
export interface StartConfigRulesEvaluationRequest {
  __type?: "StartConfigRulesEvaluationRequest";
  /**
   * <p>The list of names of AWS Config rules that you want to run
   * 			evaluations for.</p>
   */
  ConfigRuleNames?: Array<string>;
}

export namespace StartConfigRulesEvaluationRequest {
  export function isa(o: any): o is StartConfigRulesEvaluationRequest {
    return __isa(o, "StartConfigRulesEvaluationRequest");
  }
}

/**
 * <p>The output when you start the evaluation for the specified AWS
 * 			Config rule.</p>
 */
export interface StartConfigRulesEvaluationResponse {
  __type?: "StartConfigRulesEvaluationResponse";
}

export namespace StartConfigRulesEvaluationResponse {
  export function isa(o: any): o is StartConfigRulesEvaluationResponse {
    return __isa(o, "StartConfigRulesEvaluationResponse");
  }
}

/**
 * <p>The input for the <a>StartConfigurationRecorder</a>
 * 			action.</p>
 */
export interface StartConfigurationRecorderRequest {
  __type?: "StartConfigurationRecorderRequest";
  /**
   * <p>The name of the recorder object that records each configuration
   * 			change made to the resources.</p>
   */
  ConfigurationRecorderName: string | undefined;
}

export namespace StartConfigurationRecorderRequest {
  export function isa(o: any): o is StartConfigurationRecorderRequest {
    return __isa(o, "StartConfigurationRecorderRequest");
  }
}

export interface StartRemediationExecutionRequest {
  __type?: "StartRemediationExecutionRequest";
  /**
   * <p>The list of names of AWS Config rules that you want to run remediation execution for.</p>
   */
  ConfigRuleName: string | undefined;

  /**
   * <p>A list of resource keys to be processed with the current request. Each element in the list consists of the resource type and resource ID. </p>
   */
  ResourceKeys: Array<ResourceKey> | undefined;
}

export namespace StartRemediationExecutionRequest {
  export function isa(o: any): o is StartRemediationExecutionRequest {
    return __isa(o, "StartRemediationExecutionRequest");
  }
}

export interface StartRemediationExecutionResponse {
  __type?: "StartRemediationExecutionResponse";
  /**
   * <p>For resources that have failed to start execution, the API returns a resource key object.</p>
   */
  FailedItems?: Array<ResourceKey>;

  /**
   * <p>Returns a failure message. For example, the resource is already compliant.</p>
   */
  FailureMessage?: string;
}

export namespace StartRemediationExecutionResponse {
  export function isa(o: any): o is StartRemediationExecutionResponse {
    return __isa(o, "StartRemediationExecutionResponse");
  }
}

/**
 * <p>The static value of the resource.</p>
 */
export interface StaticValue {
  __type?: "StaticValue";
  /**
   * <p>A list of values. For example, the ARN of the assumed role. </p>
   */
  Values: Array<string> | undefined;
}

export namespace StaticValue {
  export function isa(o: any): o is StaticValue {
    return __isa(o, "StaticValue");
  }
}

/**
 * <p>Status filter object to filter results based on specific member account ID or status type for an organization config rule. </p>
 */
export interface StatusDetailFilters {
  __type?: "StatusDetailFilters";
  /**
   * <p>The 12-digit account ID of the member account within an organization.</p>
   */
  AccountId?: string;

  /**
   * <p>Indicates deployment status for config rule in the member account.
   * 			When master account calls <code>PutOrganizationConfigRule</code> action for the first time, config rule status is created in the member account.
   * 			When master account calls <code>PutOrganizationConfigRule</code> action for the second time, config rule status is updated in the member account.
   * 			Config rule status is deleted when the master account deletes <code>OrganizationConfigRule</code> and disables service access for <code>config-multiaccountsetup.amazonaws.com</code>.
   * 			</p>
   * 		       <p>AWS Config sets the state of the rule to:</p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <code>CREATE_SUCCESSFUL</code> when config rule has been created in the member account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_IN_PROGRESS</code> when config rule is being created in the member account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_FAILED</code> when config rule creation has failed in the member account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETE_FAILED</code> when config rule deletion has failed in the member account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETE_IN_PROGRESS</code> when config rule is being deleted in the member account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETE_SUCCESSFUL</code> when config rule has been deleted in the member account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATE_SUCCESSFUL</code> when config rule has been updated in the member account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATE_IN_PROGRESS</code> when config rule is being updated in the member account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATE_FAILED</code> when config rule deletion has failed in the member account.</p>
   *             </li>
   *          </ul>
   */
  MemberAccountRuleStatus?: MemberAccountRuleStatus | string;
}

export namespace StatusDetailFilters {
  export function isa(o: any): o is StatusDetailFilters {
    return __isa(o, "StatusDetailFilters");
  }
}

/**
 * <p>The input for the <a>StopConfigurationRecorder</a> action.</p>
 */
export interface StopConfigurationRecorderRequest {
  __type?: "StopConfigurationRecorderRequest";
  /**
   * <p>The name of the recorder object that records each configuration change made to the resources.</p>
   */
  ConfigurationRecorderName: string | undefined;
}

export namespace StopConfigurationRecorderRequest {
  export function isa(o: any): o is StopConfigurationRecorderRequest {
    return __isa(o, "StopConfigurationRecorderRequest");
  }
}

/**
 * <p>The tags for the resource. The metadata that you apply to a resource to help you categorize and organize them.
 * 			Each tag consists of a key and an optional value, both of which you define.
 * 			Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.</p>
 */
export interface Tag {
  __type?: "Tag";
  /**
   * <p>One part of a key-value pair that make up a tag. A key is a general label that acts like a category for more specific tag values.</p>
   */
  Key?: string;

  /**
   * <p>The optional part of a key-value pair that make up a tag. A value acts as a descriptor within a tag category (key).</p>
   */
  Value?: string;
}

export namespace Tag {
  export function isa(o: any): o is Tag {
    return __isa(o, "Tag");
  }
}

export interface TagResourceRequest {
  __type?: "TagResourceRequest";
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the resource for which to list the tags. Currently, the supported resources are <code>ConfigRule</code>, <code>ConfigurationAggregator</code> and <code>AggregatorAuthorization</code>.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>An array of tag object.</p>
   */
  Tags: Array<Tag> | undefined;
}

export namespace TagResourceRequest {
  export function isa(o: any): o is TagResourceRequest {
    return __isa(o, "TagResourceRequest");
  }
}

/**
 * <p>You have reached the limit of the number of tags you can use. You have more than 50 tags.</p>
 */
export interface TooManyTagsException
  extends __SmithyException,
    $MetadataBearer {
  name: "TooManyTagsException";
  $fault: "client";
  /**
   * <p>Error executing the command</p>
   */
  message?: string;
}

export namespace TooManyTagsException {
  export function isa(o: any): o is TooManyTagsException {
    return __isa(o, "TooManyTagsException");
  }
}

export interface UntagResourceRequest {
  __type?: "UntagResourceRequest";
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the resource for which to list the tags. Currently, the supported resources are <code>ConfigRule</code>, <code>ConfigurationAggregator</code> and <code>AggregatorAuthorization</code>.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The keys of the tags to be removed.</p>
   */
  TagKeys: Array<string> | undefined;
}

export namespace UntagResourceRequest {
  export function isa(o: any): o is UntagResourceRequest {
    return __isa(o, "UntagResourceRequest");
  }
}

/**
 * <p>The requested action is not valid.</p>
 */
export interface ValidationException
  extends __SmithyException,
    $MetadataBearer {
  name: "ValidationException";
  $fault: "client";
  /**
   * <p>Error executing the command</p>
   */
  message?: string;
}

export namespace ValidationException {
  export function isa(o: any): o is ValidationException {
    return __isa(o, "ValidationException");
  }
}
