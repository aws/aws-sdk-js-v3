// smithy-typescript generated code
import type {
  AggregateConformancePackComplianceSummaryGroupKey,
  AggregatedSourceStatusType,
  AggregatedSourceType,
  AggregatorFilterType,
  ChronologicalOrder,
  ComplianceType,
  ConfigRuleComplianceSummaryGroupKey,
  ConfigRuleState,
  ConfigurationItemStatus,
  ConfigurationRecorderFilterName,
  ConformancePackComplianceType,
  ConformancePackState,
  ConnectorFilterName,
  DeliveryStatus,
  EvaluationMode,
  EventSource,
  MaximumExecutionFrequency,
  MemberAccountRuleStatus,
  MessageType,
  OrganizationConfigRuleTriggerType,
  OrganizationConfigRuleTriggerTypeNoSN,
  OrganizationResourceDetailedStatus,
  OrganizationResourceStatus,
  OrganizationRuleStatus,
  Owner,
  Provider,
  RecorderStatus,
  RecordingFrequency,
  RecordingScope,
  RecordingStrategyType,
  RemediationExecutionState,
  RemediationExecutionStepState,
  RemediationTargetType,
  ResourceConfigurationSchemaType,
  ResourceCountGroupKey,
  ResourceEvaluationStatus,
  ResourceType,
  ResourceValueType,
  RuleEvaluationVisibility,
  SortBy,
  SortOrder,
} from "./enums";

/**
 * A collection of accounts and regions.
 *
 * @public
 */
export interface AccountAggregationSource {
  /**
   * The 12-digit account ID of the account being aggregated.
   *
   * @public
   */
  AccountIds: string[] | undefined;

  /**
   * If true, aggregate existing Config regions and future regions.
   *
   * @public
   */
  AllAwsRegions?: boolean | undefined;

  /**
   * The source regions being aggregated.
   *
   * @public
   */
  AwsRegions?: string[] | undefined;
}

/**
 * The number of Amazon Web Services resources or Config rules responsible for the current compliance of the item, up to a maximum number.
 *
 * @public
 */
export interface ComplianceContributorCount {
  /**
   * The number of Amazon Web Services resources or Config rules responsible for the current compliance of the item.
   *
   * @public
   */
  CappedCount?: number | undefined;

  /**
   * Indicates whether the maximum count is reached.
   *
   * @public
   */
  CapExceeded?: boolean | undefined;
}

/**
 * Indicates whether an Amazon Web Services resource or Config rule is compliant and provides the number of contributors that affect the compliance.
 *
 * @public
 */
export interface Compliance {
  /**
   * Indicates whether an Amazon Web Services resource or Config rule is compliant.
   *
   * A resource is compliant if it complies with all of the Config rules that evaluate it. A resource is noncompliant if it does not comply with one or more of these rules.
   *
   * A rule is compliant if all of the resources that the rule evaluates comply with it. A rule is noncompliant if any of these resources do not comply.
   *
   * Config returns the `INSUFFICIENT_DATA` value when no evaluation results are available for the Amazon Web Services resource or Config rule.
   *
   * For the `Compliance` data type, Config supports only `COMPLIANT`, `NON_COMPLIANT`, and `INSUFFICIENT_DATA` values. Config does not support the `NOT_APPLICABLE` value for the `Compliance` data type.
   *
   * @public
   */
  ComplianceType?: ComplianceType | undefined;

  /**
   * The number of Amazon Web Services resources or Config rules that cause a result of `NON_COMPLIANT`, up to a maximum number.
   *
   * @public
   */
  ComplianceContributorCount?: ComplianceContributorCount | undefined;
}

/**
 * Indicates whether an Config rule is compliant based on account ID, region, compliance, and rule name.
 *
 * A rule is compliant if all of the resources that the rule evaluated comply with it. It is noncompliant if any of these resources do not comply.
 *
 * @public
 */
export interface AggregateComplianceByConfigRule {
  /**
   * The name of the Config rule.
   *
   * @public
   */
  ConfigRuleName?: string | undefined;

  /**
   * Indicates whether an Amazon Web Services resource or Config rule is compliant and provides the number of contributors that affect the compliance.
   *
   * @public
   */
  Compliance?: Compliance | undefined;

  /**
   * The 12-digit account ID of the source account.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The source region from where the data is aggregated.
   *
   * @public
   */
  AwsRegion?: string | undefined;
}

/**
 * Provides the number of compliant and noncompliant rules within a conformance pack. Also provides the compliance status of the conformance pack and the total rule count which includes compliant rules, noncompliant rules, and rules that cannot be evaluated due to insufficient data.
 *
 * A conformance pack is compliant if all of the rules in a conformance packs are compliant. It is noncompliant if any of the rules are not compliant. The compliance status of a conformance pack is INSUFFICIENT_DATA only if all rules within a conformance pack cannot be evaluated due to insufficient data. If some of the rules in a conformance pack are compliant but the compliance status of other rules in that same conformance pack is INSUFFICIENT_DATA, the conformance pack shows compliant.
 *
 * @public
 */
export interface AggregateConformancePackCompliance {
  /**
   * The compliance status of the conformance pack.
   *
   * @public
   */
  ComplianceType?: ConformancePackComplianceType | undefined;

  /**
   * The number of compliant Config Rules.
   *
   * @public
   */
  CompliantRuleCount?: number | undefined;

  /**
   * The number of noncompliant Config Rules.
   *
   * @public
   */
  NonCompliantRuleCount?: number | undefined;

  /**
   * Total number of compliant rules, noncompliant rules, and the rules that do not have any applicable resources to evaluate upon resulting in insufficient data.
   *
   * @public
   */
  TotalRuleCount?: number | undefined;
}

/**
 * Provides aggregate compliance of the conformance pack. Indicates whether a conformance pack is compliant based on the name of the conformance pack, account ID, and region.
 *
 * A conformance pack is compliant if all of the rules in a conformance packs are compliant. It is noncompliant if any of the rules are not compliant. The compliance status of a conformance pack is INSUFFICIENT_DATA only if all rules within a conformance pack cannot be evaluated due to insufficient data. If some of the rules in a conformance pack are compliant but the compliance status of other rules in that same conformance pack is INSUFFICIENT_DATA, the conformance pack shows compliant.
 *
 * @public
 */
export interface AggregateComplianceByConformancePack {
  /**
   * The name of the conformance pack.
   *
   * @public
   */
  ConformancePackName?: string | undefined;

  /**
   * The compliance status of the conformance pack.
   *
   * @public
   */
  Compliance?: AggregateConformancePackCompliance | undefined;

  /**
   * The 12-digit Amazon Web Services account ID of the source account.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The source Amazon Web Services Region from where the data is aggregated.
   *
   * @public
   */
  AwsRegion?: string | undefined;
}

/**
 * The number of Config rules or Amazon Web Services resources that are compliant and noncompliant.
 *
 * @public
 */
export interface ComplianceSummary {
  /**
   * The number of Config rules or Amazon Web Services resources that are compliant, up to a maximum of 25 for rules and 100 for resources.
   *
   * @public
   */
  CompliantResourceCount?: ComplianceContributorCount | undefined;

  /**
   * The number of Config rules or Amazon Web Services resources that are noncompliant, up to a maximum of 25 for rules and 100 for resources.
   *
   * @public
   */
  NonCompliantResourceCount?: ComplianceContributorCount | undefined;

  /**
   * The time that Config created the compliance summary.
   *
   * @public
   */
  ComplianceSummaryTimestamp?: Date | undefined;
}

/**
 * Returns the number of compliant and noncompliant rules for one or more accounts and regions in an aggregator.
 *
 * @public
 */
export interface AggregateComplianceCount {
  /**
   * The 12-digit account ID or region based on the GroupByKey value.
   *
   * @public
   */
  GroupName?: string | undefined;

  /**
   * The number of compliant and noncompliant Config rules.
   *
   * @public
   */
  ComplianceSummary?: ComplianceSummary | undefined;
}

/**
 * The number of conformance packs that are compliant and noncompliant.
 *
 * @public
 */
export interface AggregateConformancePackComplianceCount {
  /**
   * Number of compliant conformance packs.
   *
   * @public
   */
  CompliantConformancePackCount?: number | undefined;

  /**
   * Number of noncompliant conformance packs.
   *
   * @public
   */
  NonCompliantConformancePackCount?: number | undefined;
}

/**
 * Filters the conformance packs based on an account ID, region, compliance type, and the name of the conformance pack.
 *
 * @public
 */
export interface AggregateConformancePackComplianceFilters {
  /**
   * The name of the conformance pack.
   *
   * @public
   */
  ConformancePackName?: string | undefined;

  /**
   * The compliance status of the conformance pack.
   *
   * @public
   */
  ComplianceType?: ConformancePackComplianceType | undefined;

  /**
   * The 12-digit Amazon Web Services account ID of the source account.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The source Amazon Web Services Region from where the data is aggregated.
   *
   * @public
   */
  AwsRegion?: string | undefined;
}

/**
 * Provides a summary of compliance based on either account ID or region.
 *
 * @public
 */
export interface AggregateConformancePackComplianceSummary {
  /**
   * Returns an `AggregateConformancePackComplianceCount` object.
   *
   * @public
   */
  ComplianceSummary?: AggregateConformancePackComplianceCount | undefined;

  /**
   * Groups the result based on Amazon Web Services account ID or Amazon Web Services Region.
   *
   * @public
   */
  GroupName?: string | undefined;
}

/**
 * Filters the results based on account ID and region.
 *
 * @public
 */
export interface AggregateConformancePackComplianceSummaryFilters {
  /**
   * The 12-digit Amazon Web Services account ID of the source account.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The source Amazon Web Services Region from where the data is aggregated.
   *
   * @public
   */
  AwsRegion?: string | undefined;
}

/**
 * The current sync status between the source and the aggregator account.
 *
 * @public
 */
export interface AggregatedSourceStatus {
  /**
   * The source account ID or an organization.
   *
   * @public
   */
  SourceId?: string | undefined;

  /**
   * The source account or an organization.
   *
   * @public
   */
  SourceType?: AggregatedSourceType | undefined;

  /**
   * The region authorized to collect aggregated data.
   *
   * @public
   */
  AwsRegion?: string | undefined;

  /**
   * Filters the last updated status type.
   *
   * - Valid value FAILED indicates errors while moving data.
   * - Valid value SUCCEEDED indicates the data was successfully moved.
   * - Valid value OUTDATED indicates the data is not the most recent.
   *
   * @public
   */
  LastUpdateStatus?: AggregatedSourceStatusType | undefined;

  /**
   * The time of the last update.
   *
   * @public
   */
  LastUpdateTime?: Date | undefined;

  /**
   * The error code that Config returned when the source account aggregation last failed.
   *
   * @public
   */
  LastErrorCode?: string | undefined;

  /**
   * The message indicating that the source account aggregation failed due to an error.
   *
   * @public
   */
  LastErrorMessage?: string | undefined;
}

/**
 * Identifies an Config rule that evaluated an Amazon Web Services resource, and provides the type and ID of the resource that the rule evaluated.
 *
 * @public
 */
export interface EvaluationResultQualifier {
  /**
   * The name of the Config rule that was used in the evaluation.
   *
   * @public
   */
  ConfigRuleName?: string | undefined;

  /**
   * The type of Amazon Web Services resource that was evaluated.
   *
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * The ID of the evaluated Amazon Web Services resource.
   *
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * The mode of an evaluation. The valid values are Detective or Proactive.
   *
   * @public
   */
  EvaluationMode?: EvaluationMode | undefined;
}

/**
 * Uniquely identifies an evaluation result.
 *
 * @public
 */
export interface EvaluationResultIdentifier {
  /**
   * Identifies an Config rule used to evaluate an Amazon Web Services resource, and provides the type and ID of the evaluated resource.
   *
   * @public
   */
  EvaluationResultQualifier?: EvaluationResultQualifier | undefined;

  /**
   * The time of the event that triggered the evaluation of your Amazon Web Services resources. The time can indicate when Config delivered a configuration item change notification, or it can indicate when Config delivered the configuration snapshot, depending on which event triggered the evaluation.
   *
   * @public
   */
  OrderingTimestamp?: Date | undefined;

  /**
   * A Unique ID for an evaluation result.
   *
   * @public
   */
  ResourceEvaluationId?: string | undefined;
}

/**
 * The details of an Config evaluation for an account ID and region in an aggregator. Provides the Amazon Web Services resource that was evaluated, the compliance of the resource, related time stamps, and supplementary information.
 *
 * @public
 */
export interface AggregateEvaluationResult {
  /**
   * Uniquely identifies the evaluation result.
   *
   * @public
   */
  EvaluationResultIdentifier?: EvaluationResultIdentifier | undefined;

  /**
   * The resource compliance status.
   *
   * For the `AggregationEvaluationResult` data type, Config supports only the `COMPLIANT` and `NON_COMPLIANT`. Config does not support the `NOT_APPLICABLE` and `INSUFFICIENT_DATA` value.
   *
   * @public
   */
  ComplianceType?: ComplianceType | undefined;

  /**
   * The time when Config recorded the aggregate evaluation result.
   *
   * @public
   */
  ResultRecordedTime?: Date | undefined;

  /**
   * The time when the Config rule evaluated the Amazon Web Services resource.
   *
   * @public
   */
  ConfigRuleInvokedTime?: Date | undefined;

  /**
   * Supplementary information about how the agrregate evaluation determined the compliance.
   *
   * @public
   */
  Annotation?: string | undefined;

  /**
   * The 12-digit account ID of the source account.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The source region from where the data is aggregated.
   *
   * @public
   */
  AwsRegion?: string | undefined;
}

/**
 * The details that identify a resource that is collected by Config aggregator, including the resource type, ID, (if available) the custom resource name, the source account, and source region.
 *
 * @public
 */
export interface AggregateResourceIdentifier {
  /**
   * The 12-digit account ID of the source account.
   *
   * @public
   */
  SourceAccountId: string | undefined;

  /**
   * The source region where data is aggregated.
   *
   * @public
   */
  SourceRegion: string | undefined;

  /**
   * The ID of the Amazon Web Services resource.
   *
   * @public
   */
  ResourceId: string | undefined;

  /**
   * The type of the Amazon Web Services resource.
   *
   * @public
   */
  ResourceType: ResourceType | undefined;

  /**
   * The name of the Amazon Web Services resource.
   *
   * @public
   */
  ResourceName?: string | undefined;
}

/**
 * An object that represents the authorizations granted to aggregator accounts and regions.
 *
 * @public
 */
export interface AggregationAuthorization {
  /**
   * The Amazon Resource Name (ARN) of the aggregation object.
   *
   * @public
   */
  AggregationAuthorizationArn?: string | undefined;

  /**
   * The 12-digit account ID of the account authorized to aggregate data.
   *
   * @public
   */
  AuthorizedAccountId?: string | undefined;

  /**
   * The region authorized to collect aggregated data.
   *
   * @public
   */
  AuthorizedAwsRegion?: string | undefined;

  /**
   * The time stamp when the aggregation authorization was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;
}

/**
 * An object to filter the configuration recorders based on the resource types in scope for recording.
 *
 * @public
 */
export interface AggregatorFilterResourceType {
  /**
   * The type of resource type filter to apply. `INCLUDE` specifies that the list of resource types in the `Value` field will be aggregated and no other resource types will be filtered.
   *
   * @public
   */
  Type?: AggregatorFilterType | undefined;

  /**
   * Comma-separate list of resource types to filter your aggregated configuration recorders.
   *
   * @public
   */
  Value?: string[] | undefined;
}

/**
 * An object to filter service-linked configuration recorders in an aggregator based on the linked Amazon Web Services service.
 *
 * @public
 */
export interface AggregatorFilterServicePrincipal {
  /**
   * The type of service principal filter to apply. `INCLUDE` specifies that the list of service principals in the `Value` field will be aggregated and no other service principals will be filtered.
   *
   * @public
   */
  Type?: AggregatorFilterType | undefined;

  /**
   * Comma-separated list of service principals for the linked Amazon Web Services services to filter your aggregated service-linked configuration recorders.
   *
   * @public
   */
  Value?: string[] | undefined;
}

/**
 * An object to filter the data you specify for an aggregator.
 *
 * @public
 */
export interface AggregatorFilters {
  /**
   * An object to filter the configuration recorders based on the resource types in scope for recording.
   *
   * @public
   */
  ResourceType?: AggregatorFilterResourceType | undefined;

  /**
   * An object to filter service-linked configuration recorders in an aggregator based on the linked Amazon Web Services service.
   *
   * @public
   */
  ServicePrincipal?: AggregatorFilterServicePrincipal | undefined;
}

/**
 * @public
 */
export interface AssociateResourceTypesRequest {
  /**
   * The Amazon Resource Name (ARN) of the specified configuration recorder.
   *
   * @public
   */
  ConfigurationRecorderArn: string | undefined;

  /**
   * The list of resource types you want to add to the recording group of the specified configuration recorder.
   *
   * @public
   */
  ResourceTypes: ResourceType[] | undefined;
}

/**
 * Specifies whether the configuration recorder excludes certain resource types from being recorded. Use the `resourceTypes` field to enter a comma-separated list of resource types you want to exclude from recording.
 *
 * By default, when Config adds support for a new resource type in the Region where you set up the configuration recorder, including global resource types, Config starts recording resources of that type automatically.
 *
 * > **Note:**
 * >
 * > **How to use the exclusion recording strategy**
 * >
 * > To use this option, you must set the `useOnly` field of [RecordingStrategy](https://docs.aws.amazon.com/config/latest/APIReference/API_RecordingStrategy.html) to `EXCLUSION_BY_RESOURCE_TYPES`.
 * >
 * > Config will then record configuration changes for all supported resource types, except the resource types that you specify to exclude from being recorded.
 * >
 * > **Global resource types and the exclusion recording strategy**
 * >
 * > Unless specifically listed as exclusions, `AWS::RDS::GlobalCluster` will be recorded automatically in all supported Config Regions were the configuration recorder is enabled.
 * >
 * > IAM users, groups, roles, and customer managed policies will be recorded in the Region where you set up the configuration recorder if that is a Region where Config was available before February 2022. You cannot be record the global IAM resouce types in Regions supported by Config after February 2022. For a list of those Regions, see [Recording Amazon Web Services Resources | Global Resources](https://docs.aws.amazon.com/config/latest/developerguide/select-resources.html#select-resources-all).
 *
 * @public
 */
export interface ExclusionByResourceTypes {
  /**
   * A comma-separated list of resource types to exclude from recording by the configuration recorder.
   *
   * @public
   */
  resourceTypes?: ResourceType[] | undefined;
}

/**
 * Specifies the recording strategy of the configuration recorder.
 *
 * @public
 */
export interface RecordingStrategy {
  /**
   * The recording strategy for the configuration recorder.
   *
   * - If you set this option to `ALL_SUPPORTED_RESOURCE_TYPES`, Config records configuration changes for all supported resource types, excluding the global IAM resource types. You also must set the `allSupported` field of [RecordingGroup](https://docs.aws.amazon.com/config/latest/APIReference/API_RecordingGroup.html) to `true`. When Config adds support for a new resource type, Config automatically starts recording resources of that type. For a list of supported resource types, see [Supported Resource Types](https://docs.aws.amazon.com/config/latest/developerguide/resource-config-reference.html#supported-resources) in the *Config developer guide*.
   * - If you set this option to `INCLUSION_BY_RESOURCE_TYPES`, Config records configuration changes for only the resource types that you specify in the `resourceTypes` field of [RecordingGroup](https://docs.aws.amazon.com/config/latest/APIReference/API_RecordingGroup.html).
   * - If you set this option to `EXCLUSION_BY_RESOURCE_TYPES`, Config records configuration changes for all supported resource types, except the resource types that you specify to exclude from being recorded in the `resourceTypes` field of [ExclusionByResourceTypes](https://docs.aws.amazon.com/config/latest/APIReference/API_ExclusionByResourceTypes.html).
   *
   * > **Note:**
   * >
   * > **Required and optional fields**
   * >
   * > The `recordingStrategy` field is optional when you set the `allSupported` field of [RecordingGroup](https://docs.aws.amazon.com/config/latest/APIReference/API_RecordingGroup.html) to `true`.
   * >
   * > The `recordingStrategy` field is optional when you list resource types in the `resourceTypes` field of [RecordingGroup](https://docs.aws.amazon.com/config/latest/APIReference/API_RecordingGroup.html).
   * >
   * > The `recordingStrategy` field is required if you list resource types to exclude from recording in the `resourceTypes` field of [ExclusionByResourceTypes](https://docs.aws.amazon.com/config/latest/APIReference/API_ExclusionByResourceTypes.html).
   *
   * > **Note:**
   * >
   * > **Overriding fields**
   * >
   * > If you choose `EXCLUSION_BY_RESOURCE_TYPES` for the recording strategy, the `exclusionByResourceTypes` field will override other properties in the request.
   * >
   * > For example, even if you set `includeGlobalResourceTypes` to false, global IAM resource types will still be automatically recorded in this option unless those resource types are specifically listed as exclusions in the `resourceTypes` field of `exclusionByResourceTypes`.
   *
   * > **Note:**
   * >
   * > **Global resource types and the exclusion recording strategy**
   * >
   * > By default, if you choose the `EXCLUSION_BY_RESOURCE_TYPES` recording strategy, when Config adds support for a new resource type in the Region where you set up the configuration recorder, including global resource types, Config starts recording resources of that type automatically.
   * >
   * > Unless specifically listed as exclusions, `AWS::RDS::GlobalCluster` will be recorded automatically in all supported Config Regions were the configuration recorder is enabled.
   * >
   * > IAM users, groups, roles, and customer managed policies will be recorded in the Region where you set up the configuration recorder if that is a Region where Config was available before February 2022. You cannot be record the global IAM resouce types in Regions supported by Config after February 2022. This list where you cannot record the global IAM resource types includes the following Regions:
   * >
   * > - Asia Pacific (Hyderabad)
   * > - Asia Pacific (Melbourne)
   * > - Canada West (Calgary)
   * > - Europe (Spain)
   * > - Europe (Zurich)
   * > - Israel (Tel Aviv)
   * > - Middle East (UAE)
   *
   * @public
   */
  useOnly?: RecordingStrategyType | undefined;
}

/**
 * Specifies which resource types Config records for configuration changes. By default, Config records configuration changes for all current and future supported resource types in the Amazon Web Services Region where you have enabled Config, excluding the global IAM resource types: IAM users, groups, roles, and customer managed policies.
 *
 * In the recording group, you specify whether you want to record all supported current and future supported resource types or to include or exclude specific resources types. For a list of supported resource types, see [Supported Resource Types](https://docs.aws.amazon.com/config/latest/developerguide/resource-config-reference.html#supported-resources) in the *Config developer guide*.
 *
 * If you don't want Config to record all current and future supported resource types (excluding the global IAM resource types), use one of the following recording strategies:
 *
 * 1. **Record all current and future resource types with exclusions** (`EXCLUSION_BY_RESOURCE_TYPES`), or
 * 2. **Record specific resource types** (`INCLUSION_BY_RESOURCE_TYPES`).
 *
 * If you use the recording strategy to **Record all current and future resource types** (`ALL_SUPPORTED_RESOURCE_TYPES`), you can use the flag `includeGlobalResourceTypes` to include the global IAM resource types in your recording.
 *
 * > **Important:**
 * >
 * > **Aurora global clusters are recorded in all enabled Regions**
 * >
 * > The `AWS::RDS::GlobalCluster` resource type will be recorded in all supported Config Regions where the configuration recorder is enabled.
 * >
 * > If you do not want to record `AWS::RDS::GlobalCluster` in all enabled Regions, use the `EXCLUSION_BY_RESOURCE_TYPES` or `INCLUSION_BY_RESOURCE_TYPES` recording strategy.
 *
 * @public
 */
export interface RecordingGroup {
  /**
   * Specifies whether Config records configuration changes for all supported resource types, excluding the global IAM resource types.
   *
   * If you set this field to `true`, when Config adds support for a new resource type, Config starts recording resources of that type automatically.
   *
   * If you set this field to `true`, you cannot enumerate specific resource types to record in the `resourceTypes` field of [RecordingGroup](https://docs.aws.amazon.com/config/latest/APIReference/API_RecordingGroup.html), or to exclude in the `resourceTypes` field of [ExclusionByResourceTypes](https://docs.aws.amazon.com/config/latest/APIReference/API_ExclusionByResourceTypes.html).
   *
   * > **Note:**
   * >
   * > **Region availability**
   * >
   * > Check [Resource Coverage by Region Availability](https://docs.aws.amazon.com/config/latest/developerguide/what-is-resource-config-coverage.html) to see if a resource type is supported in the Amazon Web Services Region where you set up Config.
   *
   * @public
   */
  allSupported?: boolean | undefined;

  /**
   * This option is a bundle which only applies to the global IAM resource types: IAM users, groups, roles, and customer managed policies. These global IAM resource types can only be recorded by Config in Regions where Config was available before February 2022. You cannot be record the global IAM resouce types in Regions supported by Config after February 2022. For a list of those Regions, see [Recording Amazon Web Services Resources | Global Resources](https://docs.aws.amazon.com/config/latest/developerguide/select-resources.html#select-resources-all).
   *
   * > **Important:**
   * >
   * > **Aurora global clusters are recorded in all enabled Regions**
   * >
   * > The `AWS::RDS::GlobalCluster` resource type will be recorded in all supported Config Regions where the configuration recorder is enabled, even if `includeGlobalResourceTypes` is set`false`. The `includeGlobalResourceTypes` option is a bundle which only applies to IAM users, groups, roles, and customer managed policies.
   * >
   * > If you do not want to record `AWS::RDS::GlobalCluster` in all enabled Regions, use one of the following recording strategies:
   * >
   * > 1. **Record all current and future resource types with exclusions** (`EXCLUSION_BY_RESOURCE_TYPES`), or
   * > 2. **Record specific resource types** (`INCLUSION_BY_RESOURCE_TYPES`).
   * >
   * > For more information, see [Selecting Which Resources are Recorded](https://docs.aws.amazon.com/config/latest/developerguide/select-resources.html#select-resources-all) in the *Config developer guide*.
   *
   * > **Important:**
   * >
   * > **includeGlobalResourceTypes and the exclusion recording strategy**
   * >
   * > The `includeGlobalResourceTypes` field has no impact on the `EXCLUSION_BY_RESOURCE_TYPES` recording strategy. This means that the global IAM resource types (IAM users, groups, roles, and customer managed policies) will not be automatically added as exclusions for `exclusionByResourceTypes` when `includeGlobalResourceTypes` is set to `false`.
   * >
   * > The `includeGlobalResourceTypes` field should only be used to modify the `AllSupported` field, as the default for the `AllSupported` field is to record configuration changes for all supported resource types excluding the global IAM resource types. To include the global IAM resource types when `AllSupported` is set to `true`, make sure to set `includeGlobalResourceTypes` to `true`.
   * >
   * > To exclude the global IAM resource types for the `EXCLUSION_BY_RESOURCE_TYPES` recording strategy, you need to manually add them to the `resourceTypes` field of `exclusionByResourceTypes`.
   *
   * > **Note:**
   * >
   * > **Required and optional fields**
   * >
   * > Before you set this field to `true`, set the `allSupported` field of [RecordingGroup](https://docs.aws.amazon.com/config/latest/APIReference/API_RecordingGroup.html) to `true`. Optionally, you can set the `useOnly` field of [RecordingStrategy](https://docs.aws.amazon.com/config/latest/APIReference/API_RecordingStrategy.html) to `ALL_SUPPORTED_RESOURCE_TYPES`.
   *
   * > **Note:**
   * >
   * > **Overriding fields**
   * >
   * > If you set this field to `false` but list global IAM resource types in the `resourceTypes` field of [RecordingGroup](https://docs.aws.amazon.com/config/latest/APIReference/API_RecordingGroup.html), Config will still record configuration changes for those specified resource types *regardless* of if you set the `includeGlobalResourceTypes` field to false.
   * >
   * > If you do not want to record configuration changes to the global IAM resource types (IAM users, groups, roles, and customer managed policies), make sure to not list them in the `resourceTypes` field in addition to setting the `includeGlobalResourceTypes` field to false.
   *
   * @public
   */
  includeGlobalResourceTypes?: boolean | undefined;

  /**
   * A comma-separated list that specifies which resource types Config records.
   *
   * For a list of valid `resourceTypes` values, see the **Resource Type Value** column in [Supported Amazon Web Services resource Types](https://docs.aws.amazon.com/config/latest/developerguide/resource-config-reference.html#supported-resources) in the *Config developer guide*.
   *
   * > **Note:**
   * >
   * > **Required and optional fields**
   * >
   * > Optionally, you can set the `useOnly` field of [RecordingStrategy](https://docs.aws.amazon.com/config/latest/APIReference/API_RecordingStrategy.html) to `INCLUSION_BY_RESOURCE_TYPES`.
   * >
   * > To record all configuration changes, set the `allSupported` field of [RecordingGroup](https://docs.aws.amazon.com/config/latest/APIReference/API_RecordingGroup.html) to `true`, and either omit this field or don't specify any resource types in this field. If you set the `allSupported` field to `false` and specify values for `resourceTypes`, when Config adds support for a new type of resource, it will not record resources of that type unless you manually add that type to your recording group.
   *
   * > **Note:**
   * >
   * > **Region availability**
   * >
   * > Before specifying a resource type for Config to track, check [Resource Coverage by Region Availability](https://docs.aws.amazon.com/config/latest/developerguide/what-is-resource-config-coverage.html) to see if the resource type is supported in the Amazon Web Services Region where you set up Config. If a resource type is supported by Config in at least one Region, you can enable the recording of that resource type in all Regions supported by Config, even if the specified resource type is not supported in the Amazon Web Services Region where you set up Config.
   *
   * @public
   */
  resourceTypes?: ResourceType[] | undefined;

  /**
   * An object that specifies how Config excludes resource types from being recorded by the configuration recorder.
   *
   * > **Note:**
   * >
   * > **Required fields**
   * >
   * > To use this option, you must set the `useOnly` field of [RecordingStrategy](https://docs.aws.amazon.com/config/latest/APIReference/API_RecordingStrategy.html) to `EXCLUSION_BY_RESOURCE_TYPES`.
   *
   * @public
   */
  exclusionByResourceTypes?: ExclusionByResourceTypes | undefined;

  /**
   * An object that specifies the recording strategy for the configuration recorder.
   *
   * - If you set the `useOnly` field of [RecordingStrategy](https://docs.aws.amazon.com/config/latest/APIReference/API_RecordingStrategy.html) to `ALL_SUPPORTED_RESOURCE_TYPES`, Config records configuration changes for all supported resource types, excluding the global IAM resource types. You also must set the `allSupported` field of [RecordingGroup](https://docs.aws.amazon.com/config/latest/APIReference/API_RecordingGroup.html) to `true`. When Config adds support for a new resource type, Config automatically starts recording resources of that type.
   * - If you set the `useOnly` field of [RecordingStrategy](https://docs.aws.amazon.com/config/latest/APIReference/API_RecordingStrategy.html) to `INCLUSION_BY_RESOURCE_TYPES`, Config records configuration changes for only the resource types you specify in the `resourceTypes` field of [RecordingGroup](https://docs.aws.amazon.com/config/latest/APIReference/API_RecordingGroup.html).
   * - If you set the `useOnly` field of [RecordingStrategy](https://docs.aws.amazon.com/config/latest/APIReference/API_RecordingStrategy.html) to `EXCLUSION_BY_RESOURCE_TYPES`, Config records configuration changes for all supported resource types except the resource types that you specify to exclude from being recorded in the `resourceTypes` field of [ExclusionByResourceTypes](https://docs.aws.amazon.com/config/latest/APIReference/API_ExclusionByResourceTypes.html).
   *
   * > **Note:**
   * >
   * > **Required and optional fields**
   * >
   * > The `recordingStrategy` field is optional when you set the `allSupported` field of [RecordingGroup](https://docs.aws.amazon.com/config/latest/APIReference/API_RecordingGroup.html) to `true`.
   * >
   * > The `recordingStrategy` field is optional when you list resource types in the `resourceTypes` field of [RecordingGroup](https://docs.aws.amazon.com/config/latest/APIReference/API_RecordingGroup.html).
   * >
   * > The `recordingStrategy` field is required if you list resource types to exclude from recording in the `resourceTypes` field of [ExclusionByResourceTypes](https://docs.aws.amazon.com/config/latest/APIReference/API_ExclusionByResourceTypes.html).
   *
   * > **Note:**
   * >
   * > **Overriding fields**
   * >
   * > If you choose `EXCLUSION_BY_RESOURCE_TYPES` for the recording strategy, the `exclusionByResourceTypes` field will override other properties in the request.
   * >
   * > For example, even if you set `includeGlobalResourceTypes` to false, global IAM resource types will still be automatically recorded in this option unless those resource types are specifically listed as exclusions in the `resourceTypes` field of `exclusionByResourceTypes`.
   *
   * > **Note:**
   * >
   * > **Global resources types and the resource exclusion recording strategy**
   * >
   * > By default, if you choose the `EXCLUSION_BY_RESOURCE_TYPES` recording strategy, when Config adds support for a new resource type in the Region where you set up the configuration recorder, including global resource types, Config starts recording resources of that type automatically.
   * >
   * > Unless specifically listed as exclusions, `AWS::RDS::GlobalCluster` will be recorded automatically in all supported Config Regions were the configuration recorder is enabled.
   * >
   * > IAM users, groups, roles, and customer managed policies will be recorded in the Region where you set up the configuration recorder if that is a Region where Config was available before February 2022. You cannot be record the global IAM resouce types in Regions supported by Config after February 2022. For a list of those Regions, see [Recording Amazon Web Services Resources | Global Resources](https://docs.aws.amazon.com/config/latest/developerguide/select-resources.html#select-resources-all).
   *
   * @public
   */
  recordingStrategy?: RecordingStrategy | undefined;
}

/**
 * An object for you to specify your overrides for the recording mode.
 *
 * @public
 */
export interface RecordingModeOverride {
  /**
   * A description that you provide for the override.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * A comma-separated list that specifies which resource types Config includes in the override.
   *
   * > **Important:**
   * >
   * > Daily recording cannot be specified for the following resource types:
   * >
   * > - `AWS::Config::ResourceCompliance`
   * > - `AWS::Config::ConformancePackCompliance`
   * > - `AWS::Config::ConfigurationRecorder`
   *
   * @public
   */
  resourceTypes: ResourceType[] | undefined;

  /**
   * The recording frequency that will be applied to all the resource types specified in the override.
   *
   * - Continuous recording allows you to record configuration changes continuously whenever a change occurs.
   * - Daily recording allows you to receive a configuration item (CI) representing the most recent state of your resources over the last 24-hour period, only if it’s different from the previous CI recorded.
   *
   * > **Note:** Firewall Manager depends on continuous recording to monitor your resources. If you are using Firewall Manager, it is recommended that you set the recording frequency to Continuous.
   *
   * @public
   */
  recordingFrequency: RecordingFrequency | undefined;
}

/**
 * Specifies the default recording frequency that Config uses to record configuration changes. Config supports *Continuous recording* and *Daily recording*.
 *
 * - Continuous recording allows you to record configuration changes continuously whenever a change occurs.
 * - Daily recording allows you to receive a configuration item (CI) representing the most recent state of your resources over the last 24-hour period, only if it’s different from the previous CI recorded.
 *
 * > **Note:** Firewall Manager depends on continuous recording to monitor your resources. If you are using Firewall Manager, it is recommended that you set the recording frequency to Continuous.
 *
 * You can also override the recording frequency for specific resource types.
 *
 * @public
 */
export interface RecordingMode {
  /**
   * The default recording frequency that Config uses to record configuration changes.
   *
   * > **Important:**
   * >
   * > Daily recording cannot be specified for the following resource types:
   * >
   * > - `AWS::Config::ResourceCompliance`
   * > - `AWS::Config::ConformancePackCompliance`
   * > - `AWS::Config::ConfigurationRecorder`
   * >
   * > For the **allSupported** (`ALL_SUPPORTED_RESOURCE_TYPES`) recording strategy, these resource types will be set to Continuous recording.
   *
   * @public
   */
  recordingFrequency: RecordingFrequency | undefined;

  /**
   * An array of `recordingModeOverride` objects for you to specify your overrides for the recording mode. The `recordingModeOverride` object in the `recordingModeOverrides` array consists of three fields: a `description`, the new `recordingFrequency`, and an array of `resourceTypes` to override.
   *
   * @public
   */
  recordingModeOverrides?: RecordingModeOverride[] | undefined;
}

/**
 * Specifies the scope of resources to record from a third-party cloud service provider.
 *
 * @public
 */
export interface ScopeConfiguration {
  /**
   * The type of scope for the third-party cloud resources. Valid values include `tenant` and `subscription`.
   *
   * @public
   */
  scopeType: string | undefined;

  /**
   * The list of specific scope values for the third-party cloud resources. For example, a list of Azure subscriptions or management groups.
   *
   * @public
   */
  scopeValues?: string[] | undefined;

  /**
   * Specifies whether to record resources from all supported regions for the third-party cloud service provider.
   *
   * @public
   */
  allRegions: boolean | undefined;

  /**
   * The list of regions from the third-party cloud service provider to include when recording resources. Used when `allRegions` is set to `false`.
   *
   * @public
   */
  includedRegions?: string[] | undefined;
}

/**
 * Records configuration changes to the resource types in scope.
 *
 * For more information about the configuration recorder, see [**Working with the Configuration Recorder**](https://docs.aws.amazon.com/config/latest/developerguide/stop-start-recorder.html) in the *Config Developer Guide*.
 *
 * @public
 */
export interface ConfigurationRecorder {
  /**
   * The Amazon Resource Name (ARN) of the specified configuration recorder.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The name of the configuration recorder.
   *
   * For customer managed configuration recorders, Config automatically assigns the name of "default" when creating a configuration recorder if you do not specify a name at creation time.
   *
   * For service-linked configuration recorders, Config automatically assigns a name that has the prefix "`AWSConfigurationRecorderFor`" to a new service-linked configuration recorder.
   *
   * > **Note:**
   * >
   * > **Changing the name of a configuration recorder**
   * >
   * > To change the name of the customer managed configuration recorder, you must delete it and create a new customer managed configuration recorder with a new name.
   * >
   * > You cannot change the name of a service-linked configuration recorder.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role assumed by Config and used by the specified configuration recorder.
   *
   * > **Note:**
   * >
   * > **The server will reject a request without a defined `roleARN` for the configuration recorder**
   * >
   * > While the API model does not require this field, the server will reject a request without a defined `roleARN` for the configuration recorder.
   * >
   * > **Policies and compliance results**
   * >
   * > [IAM policies](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html) and [other policies managed in Organizations](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies.html) can impact whether Config has permissions to record configuration changes for your resources. Additionally, rules directly evaluate the configuration of a resource and rules don't take into account these policies when running evaluations. Make sure that the policies in effect align with how you intend to use Config.
   * >
   * > **Keep Minimum Permisions When Reusing an IAM role**
   * >
   * > If you use an Amazon Web Services service that uses Config, such as Security Hub CSPM or Control Tower, and an IAM role has already been created, make sure that the IAM role that you use when setting up Config keeps the same minimum permissions as the pre-existing IAM role. You must do this to ensure that the other Amazon Web Services service continues to run as expected.
   * >
   * > For example, if Control Tower has an IAM role that allows Config to read S3 objects, make sure that the same permissions are granted to the IAM role you use when setting up Config. Otherwise, it may interfere with how Control Tower operates.
   * >
   * > **The service-linked IAM role for Config must be used for service-linked configuration recorders**
   * >
   * > For service-linked configuration recorders, you must use the service-linked IAM role for Config: [AWSServiceRoleForConfig](https://docs.aws.amazon.com/config/latest/developerguide/using-service-linked-roles.html).
   *
   * @public
   */
  roleARN?: string | undefined;

  /**
   * Specifies which resource types are in scope for the configuration recorder to record.
   *
   * > **Note:**
   * >
   * > **High Number of Config Evaluations**
   * >
   * > You might notice increased activity in your account during your initial month recording with Config when compared to subsequent months. During the initial bootstrapping process, Config runs evaluations on all the resources in your account that you have selected for Config to record.
   * >
   * > If you are running ephemeral workloads, you may see increased activity from Config as it records configuration changes associated with creating and deleting these temporary resources. An *ephemeral workload* is a temporary use of computing resources that are loaded and run when needed. Examples include Amazon Elastic Compute Cloud (Amazon EC2) Spot Instances, Amazon EMR jobs, and Auto Scaling.
   * >
   * > If you want to avoid the increased activity from running ephemeral workloads, you can set up the configuration recorder to exclude these resource types from being recorded, or run these types of workloads in a separate account with Config turned off to avoid increased configuration recording and rule evaluations.
   *
   * @public
   */
  recordingGroup?: RecordingGroup | undefined;

  /**
   * Specifies the default recording frequency for the configuration recorder. Config supports *Continuous recording* and *Daily recording*.
   *
   * - Continuous recording allows you to record configuration changes continuously whenever a change occurs.
   * - Daily recording allows you to receive a configuration item (CI) representing the most recent state of your resources over the last 24-hour period, only if it’s different from the previous CI recorded.
   *
   * > **Note:**
   * >
   * > **Some resource types require continuous recording**
   * >
   * > Firewall Manager depends on continuous recording to monitor your resources. If you are using Firewall Manager, it is recommended that you set the recording frequency to Continuous.
   *
   * You can also override the recording frequency for specific resource types.
   *
   * @public
   */
  recordingMode?: RecordingMode | undefined;

  /**
   * Specifies whether the [ConfigurationItems](https://docs.aws.amazon.com/config/latest/APIReference/API_ConfigurationItem.html) in scope for the specified configuration recorder are recorded for free (`INTERNAL`) or if it impacts the costs to your bill (`PAID`).
   *
   * @public
   */
  recordingScope?: RecordingScope | undefined;

  /**
   * For service-linked configuration recorders, specifies the linked Amazon Web Services service for the configuration recorder.
   *
   * @public
   */
  servicePrincipal?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the connector that specifies the connection between a third-party cloud service provider and Config.
   *
   * @public
   */
  connectorArn?: string | undefined;

  /**
   * Specifies the scope of resources to record from the third-party cloud service provider connected through the connector.
   *
   * @public
   */
  scopeConfiguration?: ScopeConfiguration | undefined;
}

/**
 * @public
 */
export interface AssociateResourceTypesResponse {
  /**
   * Records configuration changes to the resource types in scope.
   *
   * For more information about the configuration recorder, see [**Working with the Configuration Recorder**](https://docs.aws.amazon.com/config/latest/developerguide/stop-start-recorder.html) in the *Config Developer Guide*.
   *
   * @public
   */
  ConfigurationRecorder: ConfigurationRecorder | undefined;
}

/**
 * The configuration details for connecting to Microsoft Azure.
 *
 * @public
 */
export interface AzureConnectorConfiguration {
  /**
   * The Azure tenant identifier.
   *
   * @public
   */
  tenantIdentifier: string | undefined;

  /**
   * The Azure client identifier.
   *
   * @public
   */
  clientIdentifier: string | undefined;
}

/**
 * The detailed configurations of a specified resource.
 *
 * @public
 */
export interface BaseConfigurationItem {
  /**
   * The version number of the resource configuration.
   *
   * @public
   */
  version?: string | undefined;

  /**
   * The 12-digit Amazon Web Services account ID associated with the resource.
   *
   * @public
   */
  accountId?: string | undefined;

  /**
   * The time when the recording of configuration changes was initiated for the resource.
   *
   * @public
   */
  configurationItemCaptureTime?: Date | undefined;

  /**
   * The configuration item status. Valid values include:
   *
   * - OK – The resource configuration has been updated.
   * - ResourceDiscovered – The resource was newly discovered.
   * - ResourceNotRecorded – The resource was discovered, but its configuration was not recorded since the recorder doesn't record resources of this type.
   * - ResourceDeleted – The resource was deleted
   * - ResourceDeletedNotRecorded – The resource was deleted, but its configuration was not recorded since the recorder doesn't record resources of this type.
   *
   * @public
   */
  configurationItemStatus?: ConfigurationItemStatus | undefined;

  /**
   * An identifier that indicates the ordering of the configuration items of a resource.
   *
   * @public
   */
  configurationStateId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The type of Amazon Web Services resource.
   *
   * @public
   */
  resourceType?: ResourceType | undefined;

  /**
   * The ID of the resource (for example., sg-xxxxxx).
   *
   * @public
   */
  resourceId?: string | undefined;

  /**
   * The custom name of the resource, if available.
   *
   * @public
   */
  resourceName?: string | undefined;

  /**
   * The region where the resource resides.
   *
   * @public
   */
  awsRegion?: string | undefined;

  /**
   * The Availability Zone associated with the resource.
   *
   * @public
   */
  availabilityZone?: string | undefined;

  /**
   * The time stamp when the resource was created.
   *
   * @public
   */
  resourceCreationTime?: Date | undefined;

  /**
   * A JSON-encoded string that contains the contents for the resource configuration. This string needs to be deserialized using `json.loads()` before you can access the contents.
   *
   * @public
   */
  configuration?: string | undefined;

  /**
   * A string to string map that contains additional contents for the resource configuration.Config returns this field for certain resource types to supplement the information returned for the `configuration` field.
   *
   * This string needs to be deserialized using `json.loads()` before you can access the contents.
   *
   * @public
   */
  supplementaryConfiguration?: Record<string, string> | undefined;

  /**
   * The recording frequency that Config uses to record configuration changes for the resource.
   *
   * > **Note:** This field only appears in the API response when `DAILY` recording is enabled for a resource type. If this field is not present, `CONTINUOUS` recording is enabled for that resource type. For more information on daily recording and continuous recording, see [Recording Frequency](https://docs.aws.amazon.com/config/latest/developerguide/select-resources.html#select-resources-recording-frequency) in the *Config Developer Guide*.
   *
   * @public
   */
  recordingFrequency?: RecordingFrequency | undefined;

  /**
   * The time when configuration changes for the resource were delivered.
   *
   * > **Note:** This field is optional and is not guaranteed to be present in a configuration item (CI). If you are using daily recording, this field will be populated. However, if you are using continuous recording, this field will be omitted since the delivery time is instantaneous as the CI is available right away. For more information on daily recording and continuous recording, see [Recording Frequency](https://docs.aws.amazon.com/config/latest/developerguide/select-resources.html#select-resources-recording-frequency) in the *Config Developer Guide*.
   *
   * @public
   */
  configurationItemDeliveryTime?: Date | undefined;
}

/**
 * @public
 */
export interface BatchGetAggregateResourceConfigRequest {
  /**
   * The name of the configuration aggregator.
   *
   * @public
   */
  ConfigurationAggregatorName: string | undefined;

  /**
   * A list of aggregate ResourceIdentifiers objects.
   *
   * @public
   */
  ResourceIdentifiers: AggregateResourceIdentifier[] | undefined;
}

/**
 * @public
 */
export interface BatchGetAggregateResourceConfigResponse {
  /**
   * A list that contains the current configuration of one or more resources.
   *
   * @public
   */
  BaseConfigurationItems?: BaseConfigurationItem[] | undefined;

  /**
   * A list of resource identifiers that were not processed with current scope. The list is empty if all the resources are processed.
   *
   * @public
   */
  UnprocessedResourceIdentifiers?: AggregateResourceIdentifier[] | undefined;
}

/**
 * The details that identify a resource within Config, including the resource type and resource ID.
 *
 * @public
 */
export interface ResourceKey {
  /**
   * The resource type.
   *
   * @public
   */
  resourceType: ResourceType | undefined;

  /**
   * The ID of the resource (for example., sg-xxxxxx).
   *
   * @public
   */
  resourceId: string | undefined;
}

/**
 * @public
 */
export interface BatchGetResourceConfigRequest {
  /**
   * A list of resource keys to be processed with the current request. Each element in the list consists of the resource type and resource ID.
   *
   * @public
   */
  resourceKeys: ResourceKey[] | undefined;
}

/**
 * @public
 */
export interface BatchGetResourceConfigResponse {
  /**
   * A list that contains the current configuration of one or more resources.
   *
   * @public
   */
  baseConfigurationItems?: BaseConfigurationItem[] | undefined;

  /**
   * A list of resource keys that were not processed with the current response. The unprocessesResourceKeys value is in the same form as ResourceKeys, so the value can be directly provided to a subsequent BatchGetResourceConfig operation. If there are no unprocessed resource keys, the response contains an empty unprocessedResourceKeys list.
   *
   * @public
   */
  unprocessedResourceKeys?: ResourceKey[] | undefined;
}

/**
 * Indicates whether an Config rule is compliant. A rule is compliant if all of the resources that the rule evaluated comply with it. A rule is noncompliant if any of these resources do not comply.
 *
 * @public
 */
export interface ComplianceByConfigRule {
  /**
   * The name of the Config rule.
   *
   * @public
   */
  ConfigRuleName?: string | undefined;

  /**
   * Indicates whether the Config rule is compliant.
   *
   * @public
   */
  Compliance?: Compliance | undefined;
}

/**
 * Indicates whether an Amazon Web Services resource that is evaluated according to one or more Config rules is compliant. A resource is compliant if it complies with all of the rules that evaluate it. A resource is noncompliant if it does not comply with one or more of these rules.
 *
 * @public
 */
export interface ComplianceByResource {
  /**
   * The type of the Amazon Web Services resource that was evaluated.
   *
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * The ID of the Amazon Web Services resource that was evaluated.
   *
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * Indicates whether the Amazon Web Services resource complies with all of the Config rules that evaluated it.
   *
   * @public
   */
  Compliance?: Compliance | undefined;
}

/**
 * The number of Amazon Web Services resources of a specific type that are compliant or noncompliant, up to a maximum of 100 for each.
 *
 * @public
 */
export interface ComplianceSummaryByResourceType {
  /**
   * The type of Amazon Web Services resource.
   *
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * The number of Amazon Web Services resources that are compliant or noncompliant, up to a maximum of 100 for each.
   *
   * @public
   */
  ComplianceSummary?: ComplianceSummary | undefined;
}

/**
 * Provides status of the delivery of the snapshot or the configuration history to the specified Amazon S3 bucket. Also provides the status of notifications about the Amazon S3 delivery to the specified Amazon SNS topic.
 *
 * @public
 */
export interface ConfigExportDeliveryInfo {
  /**
   * Status of the last attempted delivery.
   *
   * @public
   */
  lastStatus?: DeliveryStatus | undefined;

  /**
   * The error code from the last attempted delivery.
   *
   * @public
   */
  lastErrorCode?: string | undefined;

  /**
   * The error message from the last attempted delivery.
   *
   * @public
   */
  lastErrorMessage?: string | undefined;

  /**
   * The time of the last attempted delivery.
   *
   * @public
   */
  lastAttemptTime?: Date | undefined;

  /**
   * The time of the last successful delivery.
   *
   * @public
   */
  lastSuccessfulTime?: Date | undefined;

  /**
   * The time that the next delivery occurs.
   *
   * @public
   */
  nextDeliveryTime?: Date | undefined;
}

/**
 * The configuration object for Config rule evaluation mode. The supported valid values are Detective or Proactive.
 *
 * @public
 */
export interface EvaluationModeConfiguration {
  /**
   * The mode of an evaluation. The valid values are Detective or Proactive.
   *
   * @public
   */
  Mode?: EvaluationMode | undefined;
}

/**
 * Defines which resources trigger an evaluation for an Config rule. The scope can include one or more resource types, a combination of a tag key and value, or a combination of one resource type and one resource ID. Specify a scope to constrain which resources trigger an evaluation for a rule. Otherwise, evaluations for the rule are triggered when any resource in your recording group changes in configuration.
 *
 * @public
 */
export interface Scope {
  /**
   * The resource types of only those Amazon Web Services resources that you want to trigger an evaluation for the rule. You can only specify one type if you also specify a resource ID for `ComplianceResourceId`.
   *
   * @public
   */
  ComplianceResourceTypes?: string[] | undefined;

  /**
   * The tag key that is applied to only those Amazon Web Services resources that you want to trigger an evaluation for the rule.
   *
   * @public
   */
  TagKey?: string | undefined;

  /**
   * The tag value applied to only those Amazon Web Services resources that you want to trigger an evaluation for the rule. If you specify a value for `TagValue`, you must also specify a value for `TagKey`.
   *
   * @public
   */
  TagValue?: string | undefined;

  /**
   * The ID of the only Amazon Web Services resource that you want to trigger an evaluation for the rule. If you specify a resource ID, you must specify one resource type for `ComplianceResourceTypes`.
   *
   * @public
   */
  ComplianceResourceId?: string | undefined;

  /**
   * The service principals of the Amazon Web Services services for the rule.
   *
   * > **Note:** The field is populated only if the service-linked rule is created by a service. The field is empty if you create your own rule.
   *
   * @public
   */
  ServicePrincipals?: string[] | undefined;
}

/**
 * Provides the runtime system, policy definition, and whether debug logging enabled. You can specify the following CustomPolicyDetails parameter values only for Config Custom Policy rules.
 *
 * @public
 */
export interface CustomPolicyDetails {
  /**
   * The runtime system for your Config Custom Policy rule. Guard is a policy-as-code language that allows you to write policies that are enforced by Config Custom Policy rules. For more information about Guard, see the [Guard GitHub Repository](https://github.com/aws-cloudformation/cloudformation-guard).
   *
   * @public
   */
  PolicyRuntime: string | undefined;

  /**
   * The policy definition containing the logic for your Config Custom Policy rule.
   *
   * @public
   */
  PolicyText: string | undefined;

  /**
   * The boolean expression for enabling debug logging for your Config Custom Policy rule. The default value is `false`.
   *
   * @public
   */
  EnableDebugLogDelivery?: boolean | undefined;
}

/**
 * Provides the source and the message types that trigger Config to evaluate your Amazon Web Services resources against a rule. It also provides the frequency with which you want Config to run evaluations for the rule if the trigger type is periodic. You can specify the parameter values for `SourceDetail` only for custom rules.
 *
 * @public
 */
export interface SourceDetail {
  /**
   * The source of the event, such as an Amazon Web Services service, that triggers Config to evaluate your Amazon Web Services resources.
   *
   * @public
   */
  EventSource?: EventSource | undefined;

  /**
   * The type of notification that triggers Config to run an evaluation for a rule. You can specify the following notification types:
   *
   * - `ConfigurationItemChangeNotification` - Triggers an evaluation when Config delivers a configuration item as a result of a resource change.
   * - `OversizedConfigurationItemChangeNotification` - Triggers an evaluation when Config delivers an oversized configuration item. Config may generate this notification type when a resource changes and the notification exceeds the maximum size allowed by Amazon SNS.
   * - `ScheduledNotification` - Triggers a periodic evaluation at the frequency specified for `MaximumExecutionFrequency`.
   * - `ConfigurationSnapshotDeliveryCompleted` - Triggers a periodic evaluation when Config delivers a configuration snapshot.
   *
   * If you want your custom rule to be triggered by configuration changes, specify two SourceDetail objects, one for `ConfigurationItemChangeNotification` and one for `OversizedConfigurationItemChangeNotification`.
   *
   * @public
   */
  MessageType?: MessageType | undefined;

  /**
   * The frequency at which you want Config to run evaluations for a custom rule with a periodic trigger. If you specify a value for `MaximumExecutionFrequency`, then `MessageType` must use the `ScheduledNotification` value.
   *
   * > **Note:**
   * >
   * > By default, rules with a periodic trigger are evaluated every 24 hours. To change the frequency, specify a valid value for the `MaximumExecutionFrequency` parameter.
   * >
   * > Based on the valid value you choose, Config runs evaluations once for each valid value. For example, if you choose `Three_Hours`, Config runs evaluations once every three hours. In this case, `Three_Hours` is the frequency of this rule.
   *
   * @public
   */
  MaximumExecutionFrequency?: MaximumExecutionFrequency | undefined;
}

/**
 * Provides the CustomPolicyDetails, the rule owner (`Amazon Web Services` for managed rules, `CUSTOM_POLICY` for Custom Policy rules, and `CUSTOM_LAMBDA` for Custom Lambda rules), the rule identifier, and the events that cause the evaluation of your Amazon Web Services resources.
 *
 * @public
 */
export interface Source {
  /**
   * Indicates whether Amazon Web Services or the customer owns and manages the Config rule.
   *
   * Config Managed Rules are predefined rules owned by Amazon Web Services. For more information, see [Config Managed Rules](https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config_use-managed-rules.html) in the *Config developer guide*.
   *
   * Config Custom Rules are rules that you can develop either with Guard (`CUSTOM_POLICY`) or Lambda (`CUSTOM_LAMBDA`). For more information, see [Config Custom Rules](https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config_develop-rules.html) in the *Config developer guide*.
   *
   * @public
   */
  Owner: Owner | undefined;

  /**
   * For Config Managed rules, a predefined identifier from a list. For example, `IAM_PASSWORD_POLICY` is a managed rule. To reference a managed rule, see [List of Config Managed Rules](https://docs.aws.amazon.com/config/latest/developerguide/managed-rules-by-aws-config.html).
   *
   * For Config Custom Lambda rules, the identifier is the Amazon Resource Name (ARN) of the rule's Lambda function, such as `arn:aws:lambda:us-east-2:123456789012:function:custom_rule_name`.
   *
   * For Config Custom Policy rules, this field will be ignored.
   *
   * @public
   */
  SourceIdentifier?: string | undefined;

  /**
   * Provides the source and the message types that cause Config to evaluate your Amazon Web Services resources against a rule. It also provides the frequency with which you want Config to run evaluations for the rule if the trigger type is periodic.
   *
   * If the owner is set to `CUSTOM_POLICY`, the only acceptable values for the Config rule trigger message type are `ConfigurationItemChangeNotification` and `OversizedConfigurationItemChangeNotification`.
   *
   * @public
   */
  SourceDetails?: SourceDetail[] | undefined;

  /**
   * Provides the runtime system, policy definition, and whether debug logging is enabled. Required when owner is set to `CUSTOM_POLICY`.
   *
   * @public
   */
  CustomPolicyDetails?: CustomPolicyDetails | undefined;
}

/**
 * Config rules evaluate the configuration settings of your Amazon Web Services resources. A rule can run when Config detects a configuration change to an Amazon Web Services resource or at a periodic frequency that you choose (for example, every 24 hours). There are two types of rules: *Config Managed Rules* and *Config Custom Rules*.
 *
 * Config Managed Rules are predefined, customizable rules created by Config. For a list of managed rules, see [List of Config Managed Rules](https://docs.aws.amazon.com/config/latest/developerguide/managed-rules-by-aws-config.html).
 *
 * Config Custom Rules are rules that you create from scratch. There are two ways to create Config custom rules: with Lambda functions ([Lambda Developer Guide](https://docs.aws.amazon.com/config/latest/developerguide/gettingstarted-concepts.html#gettingstarted-concepts-function)) and with Guard ([Guard GitHub Repository](https://github.com/aws-cloudformation/cloudformation-guard)), a policy-as-code language. Config custom rules created with Lambda are called *Config Custom Lambda Rules* and Config custom rules created with Guard are called *Config Custom Policy Rules*.
 *
 * For more information about developing and using Config rules, see [Evaluating Resource with Config Rules](https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config.html) in the *Config Developer Guide*.
 *
 * > **Note:** You can use the Amazon Web Services CLI and Amazon Web Services SDKs if you want to create a rule that triggers evaluations for your resources when Config delivers the configuration snapshot. For more information, see ConfigSnapshotDeliveryProperties.
 *
 * @public
 */
export interface ConfigRule {
  /**
   * The name that you assign to the Config rule. The name is required if you are adding a new rule.
   *
   * @public
   */
  ConfigRuleName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Config rule.
   *
   * @public
   */
  ConfigRuleArn?: string | undefined;

  /**
   * The ID of the Config rule.
   *
   * @public
   */
  ConfigRuleId?: string | undefined;

  /**
   * The description that you provide for the Config rule.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Defines which resources can trigger an evaluation for the rule. The scope can include one or more resource types, a combination of one resource type and one resource ID, or a combination of a tag key and value. Specify a scope to constrain the resources that can trigger an evaluation for the rule. If you do not specify a scope, evaluations are triggered when any resource in the recording group changes.
   *
   * @public
   */
  Scope?: Scope | undefined;

  /**
   * Provides the rule owner (`Amazon Web Services` for managed rules, `CUSTOM_POLICY` for Custom Policy rules, and `CUSTOM_LAMBDA` for Custom Lambda rules), the rule identifier, and the notifications that cause the function to evaluate your Amazon Web Services resources.
   *
   * @public
   */
  Source: Source | undefined;

  /**
   * A string, in JSON format, that is passed to the Config rule Lambda function.
   *
   * @public
   */
  InputParameters?: string | undefined;

  /**
   * The maximum frequency with which Config runs evaluations for a rule. You can specify a value for `MaximumExecutionFrequency` when:
   *
   * - This is for an Config managed rule that is triggered at a periodic frequency.
   * - Your custom rule is triggered when Config delivers the configuration snapshot. For more information, see ConfigSnapshotDeliveryProperties.
   *
   * > **Note:** By default, rules with a periodic trigger are evaluated every 24 hours. To change the frequency, specify a valid value for the `MaximumExecutionFrequency` parameter.
   *
   * @public
   */
  MaximumExecutionFrequency?: MaximumExecutionFrequency | undefined;

  /**
   * Indicates whether the Config rule is active or is currently being deleted by Config. It can also indicate the evaluation status for the Config rule.
   *
   * Config sets the state of the rule to `EVALUATING` temporarily after you use the `StartConfigRulesEvaluation` request to evaluate your resources against the Config rule.
   *
   * Config sets the state of the rule to `DELETING_RESULTS` temporarily after you use the `DeleteEvaluationResults` request to delete the current evaluation results for the Config rule.
   *
   * Config temporarily sets the state of a rule to `DELETING` after you use the `DeleteConfigRule` request to delete the rule. After Config deletes the rule, the rule and all of its evaluations are erased and are no longer available.
   *
   * @public
   */
  ConfigRuleState?: ConfigRuleState | undefined;

  /**
   * Service principal name of the service that created the rule.
   *
   * > **Note:** The field is populated only if the service-linked rule is created by a service. The field is empty if you create your own rule.
   *
   * @public
   */
  CreatedBy?: string | undefined;

  /**
   * The modes the Config rule can be evaluated in. The valid values are distinct objects. By default, the value is Detective evaluation mode only.
   *
   * @public
   */
  EvaluationModes?: EvaluationModeConfiguration[] | undefined;

  /**
   * Indicates whether you can get Evaluations for the Config rule. You can get Evaluations for the Amazon Web Services Config rule if this value is `EXTERNAL`. You cannot get Evaluations for the Amazon Web Services Config rule if this value is `INTERNAL`.
   *
   * @public
   */
  RuleEvaluationVisibility?: RuleEvaluationVisibility | undefined;
}

/**
 * Filters the compliance results based on account ID, region, compliance type, and rule name.
 *
 * @public
 */
export interface ConfigRuleComplianceFilters {
  /**
   * The name of the Config rule.
   *
   * @public
   */
  ConfigRuleName?: string | undefined;

  /**
   * The rule compliance status.
   *
   * For the `ConfigRuleComplianceFilters` data type, Config supports only `COMPLIANT` and `NON_COMPLIANT`. Config does not support the `NOT_APPLICABLE` and the `INSUFFICIENT_DATA` values.
   *
   * @public
   */
  ComplianceType?: ComplianceType | undefined;

  /**
   * The 12-digit account ID of the source account.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The source region where the data is aggregated.
   *
   * @public
   */
  AwsRegion?: string | undefined;
}

/**
 * Filters the results based on the account IDs and regions.
 *
 * @public
 */
export interface ConfigRuleComplianceSummaryFilters {
  /**
   * The 12-digit account ID of the source account.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The source region where the data is aggregated.
   *
   * @public
   */
  AwsRegion?: string | undefined;
}

/**
 * Status information for your Config Managed rules and Config Custom Policy rules. The status includes information such as the last time the rule ran, the last time it failed, and the related error for the last failure.
 *
 * This operation does not return status information about Config Custom Lambda rules.
 *
 * @public
 */
export interface ConfigRuleEvaluationStatus {
  /**
   * The name of the Config rule.
   *
   * @public
   */
  ConfigRuleName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Config rule.
   *
   * @public
   */
  ConfigRuleArn?: string | undefined;

  /**
   * The ID of the Config rule.
   *
   * @public
   */
  ConfigRuleId?: string | undefined;

  /**
   * The time that Config last successfully invoked the Config rule to evaluate your Amazon Web Services resources.
   *
   * @public
   */
  LastSuccessfulInvocationTime?: Date | undefined;

  /**
   * The time that Config last failed to invoke the Config rule to evaluate your Amazon Web Services resources.
   *
   * @public
   */
  LastFailedInvocationTime?: Date | undefined;

  /**
   * The time that Config last successfully evaluated your Amazon Web Services resources against the rule.
   *
   * @public
   */
  LastSuccessfulEvaluationTime?: Date | undefined;

  /**
   * The time that Config last failed to evaluate your Amazon Web Services resources against the rule.
   *
   * @public
   */
  LastFailedEvaluationTime?: Date | undefined;

  /**
   * The time that you first activated the Config rule.
   *
   * @public
   */
  FirstActivatedTime?: Date | undefined;

  /**
   * The time that you last turned off the Config rule.
   *
   * @public
   */
  LastDeactivatedTime?: Date | undefined;

  /**
   * The error code that Config returned when the rule last failed.
   *
   * @public
   */
  LastErrorCode?: string | undefined;

  /**
   * The error message that Config returned when the rule last failed.
   *
   * @public
   */
  LastErrorMessage?: string | undefined;

  /**
   * Indicates whether Config has evaluated your resources against the rule at least once.
   *
   * - `true` - Config has evaluated your Amazon Web Services resources against the rule at least once.
   * - `false` - Config has not finished evaluating your Amazon Web Services resources against the rule at least once.
   *
   * @public
   */
  FirstEvaluationStarted?: boolean | undefined;

  /**
   * The status of the last attempted delivery of a debug log for your Config Custom Policy rules. Either `Successful` or `Failed`.
   *
   * @public
   */
  LastDebugLogDeliveryStatus?: string | undefined;

  /**
   * The reason Config was not able to deliver a debug log. This is for the last failed attempt to retrieve a debug log for your Config Custom Policy rules.
   *
   * @public
   */
  LastDebugLogDeliveryStatusReason?: string | undefined;

  /**
   * The time Config last attempted to deliver a debug log for your Config Custom Policy rules.
   *
   * @public
   */
  LastDebugLogDeliveryTime?: Date | undefined;
}

/**
 * Provides options for how often Config delivers configuration snapshots to the Amazon S3 bucket in your delivery channel.
 *
 * The frequency for a rule that triggers evaluations for your resources when Config delivers the configuration snapshot is set by one of two values, depending on which is less frequent:
 *
 * - The value for the `deliveryFrequency` parameter within the delivery channel configuration, which sets how often Config delivers configuration snapshots. This value also sets how often Config invokes evaluations for Config rules.
 * - The value for the `MaximumExecutionFrequency` parameter, which sets the maximum frequency with which Config invokes evaluations for the rule. For more information, see ConfigRule.
 *
 * If the `deliveryFrequency` value is less frequent than the `MaximumExecutionFrequency` value for a rule, Config invokes the rule only as often as the `deliveryFrequency` value.
 *
 * 1. For example, you want your rule to run evaluations when Config delivers the configuration snapshot.
 * 2. You specify the `MaximumExecutionFrequency` value for `Six_Hours`.
 * 3. You then specify the delivery channel `deliveryFrequency` value for `TwentyFour_Hours`.
 * 4. Because the value for `deliveryFrequency` is less frequent than `MaximumExecutionFrequency`, Config invokes evaluations for the rule every 24 hours.
 *
 * You should set the `MaximumExecutionFrequency` value to be at least as frequent as the `deliveryFrequency` value. You can view the `deliveryFrequency` value by using the `DescribeDeliveryChannnels` action.
 *
 * To update the `deliveryFrequency` with which Config delivers your configuration snapshots, use the `PutDeliveryChannel` action.
 *
 * @public
 */
export interface ConfigSnapshotDeliveryProperties {
  /**
   * The frequency with which Config delivers configuration snapshots.
   *
   * @public
   */
  deliveryFrequency?: MaximumExecutionFrequency | undefined;
}

/**
 * A list that contains the status of the delivery of the configuration stream notification to the Amazon SNS topic.
 *
 * @public
 */
export interface ConfigStreamDeliveryInfo {
  /**
   * Status of the last attempted delivery.
   *
   * **Note** Providing an SNS topic on a [DeliveryChannel](https://docs.aws.amazon.com/config/latest/APIReference/API_DeliveryChannel.html) for Config is optional. If the SNS delivery is turned off, the last status will be **Not_Applicable**.
   *
   * @public
   */
  lastStatus?: DeliveryStatus | undefined;

  /**
   * The error code from the last attempted delivery.
   *
   * @public
   */
  lastErrorCode?: string | undefined;

  /**
   * The error message from the last attempted delivery.
   *
   * @public
   */
  lastErrorMessage?: string | undefined;

  /**
   * The time from the last status change.
   *
   * @public
   */
  lastStatusChangeTime?: Date | undefined;
}

/**
 * This object contains regions to set up the aggregator and an IAM role to retrieve organization details.
 *
 * @public
 */
export interface OrganizationAggregationSource {
  /**
   * ARN of the IAM role used to retrieve Amazon Web Services Organization details associated with the aggregator account.
   *
   * @public
   */
  RoleArn: string | undefined;

  /**
   * The source regions being aggregated.
   *
   * @public
   */
  AwsRegions?: string[] | undefined;

  /**
   * If true, aggregate existing Config regions and future regions.
   *
   * @public
   */
  AllAwsRegions?: boolean | undefined;
}

/**
 * The details about the configuration aggregator, including information about source accounts, regions, and metadata of the aggregator.
 *
 * @public
 */
export interface ConfigurationAggregator {
  /**
   * The name of the aggregator.
   *
   * @public
   */
  ConfigurationAggregatorName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the aggregator.
   *
   * @public
   */
  ConfigurationAggregatorArn?: string | undefined;

  /**
   * Provides a list of source accounts and regions to be aggregated.
   *
   * @public
   */
  AccountAggregationSources?: AccountAggregationSource[] | undefined;

  /**
   * Provides an organization and list of regions to be aggregated.
   *
   * @public
   */
  OrganizationAggregationSource?: OrganizationAggregationSource | undefined;

  /**
   * The time stamp when the configuration aggregator was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The time of the last update.
   *
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * Amazon Web Services service that created the configuration aggregator.
   *
   * @public
   */
  CreatedBy?: string | undefined;

  /**
   * An object to filter the data you specify for an aggregator.
   *
   * @public
   */
  AggregatorFilters?: AggregatorFilters | undefined;
}

/**
 * The relationship of the related resource to the main resource.
 *
 * @public
 */
export interface Relationship {
  /**
   * The resource type of the related resource.
   *
   * @public
   */
  resourceType?: ResourceType | undefined;

  /**
   * The ID of the related resource (for example, `sg-xxxxxx`).
   *
   * @public
   */
  resourceId?: string | undefined;

  /**
   * The custom name of the related resource, if available.
   *
   * @public
   */
  resourceName?: string | undefined;

  /**
   * The type of relationship with the related resource.
   *
   * @public
   */
  relationshipName?: string | undefined;
}

/**
 * A list that contains detailed configurations of a specified resource.
 *
 * @public
 */
export interface ConfigurationItem {
  /**
   * The version number of the resource configuration.
   *
   * @public
   */
  version?: string | undefined;

  /**
   * The 12-digit Amazon Web Services account ID associated with the resource.
   *
   * @public
   */
  accountId?: string | undefined;

  /**
   * The time when the recording of configuration changes was initiated for the resource.
   *
   * @public
   */
  configurationItemCaptureTime?: Date | undefined;

  /**
   * The configuration item status. Valid values include:
   *
   * - OK – The resource configuration has been updated
   * - ResourceDiscovered – The resource was newly discovered
   * - ResourceNotRecorded – The resource was discovered but its configuration was not recorded since the recorder doesn't record resources of this type
   * - ResourceDeleted – The resource was deleted
   * - ResourceDeletedNotRecorded – The resource was deleted but its configuration was not recorded since the recorder doesn't record resources of this type
   *
   * @public
   */
  configurationItemStatus?: ConfigurationItemStatus | undefined;

  /**
   * An identifier that indicates the ordering of the configuration items of a resource.
   *
   * @public
   */
  configurationStateId?: string | undefined;

  /**
   * Unique MD5 hash that represents the configuration item's state.
   *
   * You can use MD5 hash to compare the states of two or more configuration items that are associated with the same resource.
   *
   * @public
   */
  configurationItemMD5Hash?: string | undefined;

  /**
   * Amazon Resource Name (ARN) associated with the resource.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The type of Amazon Web Services resource.
   *
   * @public
   */
  resourceType?: ResourceType | undefined;

  /**
   * The ID of the resource (for example, `sg-xxxxxx`).
   *
   * @public
   */
  resourceId?: string | undefined;

  /**
   * The custom name of the resource, if available.
   *
   * @public
   */
  resourceName?: string | undefined;

  /**
   * The region where the resource resides.
   *
   * @public
   */
  awsRegion?: string | undefined;

  /**
   * The Availability Zone associated with the resource.
   *
   * @public
   */
  availabilityZone?: string | undefined;

  /**
   * The time stamp when the resource was created.
   *
   * @public
   */
  resourceCreationTime?: Date | undefined;

  /**
   * A mapping of key value tags associated with the resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * A list of CloudTrail event IDs.
   *
   * A populated field indicates that the current configuration was initiated by the events recorded in the CloudTrail log. For more information about CloudTrail, see [What Is CloudTrail](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/what_is_cloud_trail_top_level.html).
   *
   * An empty field indicates that the current configuration was not initiated by any event. As of Version 1.3, the relatedEvents field is empty. You can access the [LookupEvents API](https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_LookupEvents.html) in the *CloudTrail API Reference* to retrieve the events for the resource.
   *
   * @public
   */
  relatedEvents?: string[] | undefined;

  /**
   * A list of related Amazon Web Services resources.
   *
   * @public
   */
  relationships?: Relationship[] | undefined;

  /**
   * A JSON-encoded string that contains the contents for the resource configuration. This string needs to be deserialized using `json.loads()` before you can access the contents.
   *
   * @public
   */
  configuration?: string | undefined;

  /**
   * A string to string map that contains additional contents for the resource configuration.Config returns this field for certain resource types to supplement the information returned for the `configuration` field.
   *
   * This string to string map needs to be deserialized using `json.loads()` before you can accessing the contents.
   *
   * @public
   */
  supplementaryConfiguration?: Record<string, string> | undefined;

  /**
   * The recording frequency that Config uses to record configuration changes for the resource.
   *
   * > **Note:** This field only appears in the API response when `DAILY` recording is enabled for a resource type. If this field is not present, `CONTINUOUS` recording is enabled for that resource type. For more information on daily recording and continuous recording, see [Recording Frequency](https://docs.aws.amazon.com/config/latest/developerguide/select-resources.html#select-resources-recording-frequency) in the *Config Developer Guide*.
   *
   * @public
   */
  recordingFrequency?: RecordingFrequency | undefined;

  /**
   * The time when configuration changes for the resource were delivered.
   *
   * > **Note:**
   * >
   * > This field is optional and is not guaranteed to be present in a configuration item (CI). If you are using daily recording, this field will be populated. However, if you are using continuous recording, this field will be omitted since the delivery time is instantaneous as the CI is available right away.
   * >
   * > For more information on daily recording and continuous recording, see [Recording Frequency](https://docs.aws.amazon.com/config/latest/developerguide/select-resources.html#select-resources-recording-frequency) in the *Config Developer Guide*.
   *
   * @public
   */
  configurationItemDeliveryTime?: Date | undefined;
}

/**
 * Filters configuration recorders by recording scope.
 *
 * @public
 */
export interface ConfigurationRecorderFilter {
  /**
   * The name of the type of filter. Currently, only `recordingScope` is supported.
   *
   * @public
   */
  filterName?: ConfigurationRecorderFilterName | undefined;

  /**
   * The value of the filter. For `recordingScope`, valid values include: `INTERNAL` and `PAID`.
   *
   * `INTERNAL` indicates that the [ConfigurationItems](https://docs.aws.amazon.com/config/latest/APIReference/API_ConfigurationItem.html) in scope for the configuration recorder are recorded for free.
   *
   * `PAID` indicates that the [ConfigurationItems](https://docs.aws.amazon.com/config/latest/APIReference/API_ConfigurationItem.html) in scope for the configuration recorder impact the costs to your bill.
   *
   * @public
   */
  filterValue?: string[] | undefined;
}

/**
 * The current status of the configuration recorder.
 *
 * For a detailed status of recording events over time, add your Config events to CloudWatch metrics and use CloudWatch metrics.
 *
 * @public
 */
export interface ConfigurationRecorderStatus {
  /**
   * The Amazon Resource Name (ARN) of the configuration recorder.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The name of the configuration recorder.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The time the recorder was last started.
   *
   * @public
   */
  lastStartTime?: Date | undefined;

  /**
   * The time the recorder was last stopped.
   *
   * @public
   */
  lastStopTime?: Date | undefined;

  /**
   * Specifies whether or not the recorder is currently recording.
   *
   * @public
   */
  recording?: boolean | undefined;

  /**
   * The status of the latest recording event processed by the recorder.
   *
   * @public
   */
  lastStatus?: RecorderStatus | undefined;

  /**
   * The latest error code from when the recorder last failed.
   *
   * @public
   */
  lastErrorCode?: string | undefined;

  /**
   * The latest error message from when the recorder last failed.
   *
   * @public
   */
  lastErrorMessage?: string | undefined;

  /**
   * The time of the latest change in status of an recording event processed by the recorder.
   *
   * @public
   */
  lastStatusChangeTime?: Date | undefined;

  /**
   * For service-linked configuration recorders, the service principal of the linked Amazon Web Services service.
   *
   * @public
   */
  servicePrincipal?: string | undefined;
}

/**
 * A summary of a configuration recorder, including the `arn`, `name`, `servicePrincipal`, `recordingScope`, and `provider`.
 *
 * @public
 */
export interface ConfigurationRecorderSummary {
  /**
   * The Amazon Resource Name (ARN) of the configuration recorder.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The name of the configuration recorder.
   *
   * @public
   */
  name: string | undefined;

  /**
   * For service-linked configuration recorders, indicates which Amazon Web Services service the configuration recorder is linked to.
   *
   * @public
   */
  servicePrincipal?: string | undefined;

  /**
   * Indicates whether the [ConfigurationItems](https://docs.aws.amazon.com/config/latest/APIReference/API_ConfigurationItem.html) in scope for the configuration recorder are recorded for free (`INTERNAL`) or if you are charged a service fee for recording (`PAID`).
   *
   * @public
   */
  recordingScope: RecordingScope | undefined;

  /**
   * For service-linked configuration recorders that record resources from a third-party cloud service provider, indicates the cloud service provider. Currently, `AZURE` is supported.
   *
   * @public
   */
  provider?: Provider | undefined;
}

/**
 * Filters the conformance pack by compliance types and Config rule names.
 *
 * @public
 */
export interface ConformancePackComplianceFilters {
  /**
   * Filters the results by Config rule names.
   *
   * @public
   */
  ConfigRuleNames?: string[] | undefined;

  /**
   * Filters the results by compliance.
   *
   * The allowed values are `COMPLIANT` and `NON_COMPLIANT`. `INSUFFICIENT_DATA` is not supported.
   *
   * @public
   */
  ComplianceType?: ConformancePackComplianceType | undefined;
}

/**
 * A compliance score is the percentage of the number of compliant rule-resource combinations in a conformance pack compared to the number of total possible rule-resource combinations in the conformance pack. This metric provides you with a high-level view of the compliance state of your conformance packs. You can use it to identify, investigate, and understand the level of compliance in your conformance packs.
 *
 * @public
 */
export interface ConformancePackComplianceScore {
  /**
   * Compliance score for the conformance pack. Conformance packs with no evaluation results will have a compliance score of `INSUFFICIENT_DATA`.
   *
   * @public
   */
  Score?: string | undefined;

  /**
   * The name of the conformance pack.
   *
   * @public
   */
  ConformancePackName?: string | undefined;

  /**
   * The time that the conformance pack compliance score was last updated.
   *
   * @public
   */
  LastUpdatedTime?: Date | undefined;
}

/**
 * A list of filters to apply to the conformance pack compliance score result set.
 *
 * @public
 */
export interface ConformancePackComplianceScoresFilters {
  /**
   * The names of the conformance packs whose compliance scores you want to include in the conformance pack compliance score result set. You can include up to 25 conformance packs in the `ConformancePackNames` array of strings, each with a character limit of 256 characters for the conformance pack name.
   *
   * @public
   */
  ConformancePackNames: string[] | undefined;
}

/**
 * Summary includes the name and status of the conformance pack.
 *
 * @public
 */
export interface ConformancePackComplianceSummary {
  /**
   * The name of the conformance pack name.
   *
   * @public
   */
  ConformancePackName: string | undefined;

  /**
   * The status of the conformance pack.
   *
   * @public
   */
  ConformancePackComplianceStatus: ConformancePackComplianceType | undefined;
}

/**
 * Input parameters in the form of key-value pairs for the conformance pack, both of which you define. Keys can have a maximum character length of 255 characters, and values can have a maximum length of 4096 characters.
 *
 * @public
 */
export interface ConformancePackInputParameter {
  /**
   * One part of a key-value pair.
   *
   * @public
   */
  ParameterName: string | undefined;

  /**
   * Another part of the key-value pair.
   *
   * @public
   */
  ParameterValue: string | undefined;
}

/**
 * This API allows you to create a conformance pack template with an Amazon Web Services Systems Manager document (SSM document). To deploy a conformance pack using an SSM document, first create an SSM document with conformance pack content, and then provide the `DocumentName` in the [PutConformancePack API](https://docs.aws.amazon.com/config/latest/APIReference/API_PutConformancePack.html). You can also provide the `DocumentVersion`.
 *
 * The `TemplateSSMDocumentDetails` object contains the name of the SSM document and the version of the SSM document.
 *
 * @public
 */
export interface TemplateSSMDocumentDetails {
  /**
   * The name or Amazon Resource Name (ARN) of the SSM document to use to create a conformance pack. If you use the document name, Config checks only your account and Amazon Web Services Region for the SSM document.
   *
   * @public
   */
  DocumentName: string | undefined;

  /**
   * The version of the SSM document to use to create a conformance pack. By default, Config uses the latest version.
   *
   * > **Note:** This field is optional.
   *
   * @public
   */
  DocumentVersion?: string | undefined;
}

/**
 * Returns details of a conformance pack. A conformance pack is a collection of Config rules and remediation actions that can be easily deployed in an account and a region.
 *
 * @public
 */
export interface ConformancePackDetail {
  /**
   * Name of the conformance pack.
   *
   * @public
   */
  ConformancePackName: string | undefined;

  /**
   * Amazon Resource Name (ARN) of the conformance pack.
   *
   * @public
   */
  ConformancePackArn: string | undefined;

  /**
   * ID of the conformance pack.
   *
   * @public
   */
  ConformancePackId: string | undefined;

  /**
   * The name of the Amazon S3 bucket where Config stores conformance pack templates.
   *
   * > **Note:** This field is optional.
   *
   * @public
   */
  DeliveryS3Bucket?: string | undefined;

  /**
   * The prefix for the Amazon S3 bucket.
   *
   * > **Note:** This field is optional.
   *
   * @public
   */
  DeliveryS3KeyPrefix?: string | undefined;

  /**
   * A list of `ConformancePackInputParameter` objects.
   *
   * @public
   */
  ConformancePackInputParameters?: ConformancePackInputParameter[] | undefined;

  /**
   * The last time a conformation pack update was requested.
   *
   * @public
   */
  LastUpdateRequestedTime?: Date | undefined;

  /**
   * The Amazon Web Services service that created the conformance pack.
   *
   * @public
   */
  CreatedBy?: string | undefined;

  /**
   * An object that contains the name or Amazon Resource Name (ARN) of the Amazon Web Services Systems Manager document (SSM document) and the version of the SSM document that is used to create a conformance pack.
   *
   * @public
   */
  TemplateSSMDocumentDetails?: TemplateSSMDocumentDetails | undefined;
}

/**
 * Filters a conformance pack by Config rule names, compliance types, Amazon Web Services resource types, and resource IDs.
 *
 * @public
 */
export interface ConformancePackEvaluationFilters {
  /**
   * Filters the results by Config rule names.
   *
   * @public
   */
  ConfigRuleNames?: string[] | undefined;

  /**
   * Filters the results by compliance.
   *
   * The allowed values are `COMPLIANT` and `NON_COMPLIANT`. `INSUFFICIENT_DATA` is not supported.
   *
   * @public
   */
  ComplianceType?: ConformancePackComplianceType | undefined;

  /**
   * Filters the results by the resource type (for example, `"AWS::EC2::Instance"`).
   *
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * Filters the results by resource IDs.
   *
   * > **Note:** This is valid only when you provide resource type. If there is no resource type, you will see an error.
   *
   * @public
   */
  ResourceIds?: string[] | undefined;
}

/**
 * The details of a conformance pack evaluation. Provides Config rule and Amazon Web Services resource type that was evaluated, the compliance of the conformance pack, related time stamps, and supplementary information.
 *
 * @public
 */
export interface ConformancePackEvaluationResult {
  /**
   * The compliance type. The allowed values are `COMPLIANT` and `NON_COMPLIANT`. `INSUFFICIENT_DATA` is not supported.
   *
   * @public
   */
  ComplianceType: ConformancePackComplianceType | undefined;

  /**
   * Uniquely identifies an evaluation result.
   *
   * @public
   */
  EvaluationResultIdentifier: EvaluationResultIdentifier | undefined;

  /**
   * The time when Config rule evaluated Amazon Web Services resource.
   *
   * @public
   */
  ConfigRuleInvokedTime: Date | undefined;

  /**
   * The time when Config recorded the evaluation result.
   *
   * @public
   */
  ResultRecordedTime: Date | undefined;

  /**
   * Supplementary information about how the evaluation determined the compliance.
   *
   * @public
   */
  Annotation?: string | undefined;
}

/**
 * Compliance information of one or more Config rules within a conformance pack. You can filter using Config rule names and compliance types.
 *
 * @public
 */
export interface ConformancePackRuleCompliance {
  /**
   * Name of the Config rule.
   *
   * @public
   */
  ConfigRuleName?: string | undefined;

  /**
   * Compliance of the Config rule.
   *
   * @public
   */
  ComplianceType?: ConformancePackComplianceType | undefined;

  /**
   * Controls for the conformance pack. A control is a process to prevent or detect problems while meeting objectives. A control can align with a specific compliance regime or map to internal controls defined by an organization.
   *
   * @public
   */
  Controls?: string[] | undefined;
}

/**
 * Status details of a conformance pack.
 *
 * @public
 */
export interface ConformancePackStatusDetail {
  /**
   * Name of the conformance pack.
   *
   * @public
   */
  ConformancePackName: string | undefined;

  /**
   * ID of the conformance pack.
   *
   * @public
   */
  ConformancePackId: string | undefined;

  /**
   * Amazon Resource Name (ARN) of comformance pack.
   *
   * @public
   */
  ConformancePackArn: string | undefined;

  /**
   * Indicates deployment status of conformance pack.
   *
   * Config sets the state of the conformance pack to:
   *
   * - CREATE_IN_PROGRESS when a conformance pack creation is in progress for an account.
   * - CREATE_COMPLETE when a conformance pack has been successfully created in your account.
   * - CREATE_FAILED when a conformance pack creation failed in your account.
   * - DELETE_IN_PROGRESS when a conformance pack deletion is in progress.
   * - DELETE_FAILED when a conformance pack deletion failed in your account.
   *
   * @public
   */
  ConformancePackState: ConformancePackState | undefined;

  /**
   * Amazon Resource Name (ARN) of CloudFormation stack.
   *
   * @public
   */
  StackArn: string | undefined;

  /**
   * The reason of conformance pack creation failure.
   *
   * @public
   */
  ConformancePackStatusReason?: string | undefined;

  /**
   * Last time when conformation pack creation and update was requested.
   *
   * @public
   */
  LastUpdateRequestedTime: Date | undefined;

  /**
   * Last time when conformation pack creation and update was successful.
   *
   * @public
   */
  LastUpdateCompletedTime?: Date | undefined;
}

/**
 * The provider-specific configuration for connecting to the third-party cloud service provider. You must specify exactly one provider configuration.
 *
 * @public
 */
export interface ConnectorConfiguration {
  /**
   * The configuration for an Azure connector.
   *
   * @public
   */
  azure?: AzureConnectorConfiguration | undefined;
}

/**
 * The details of the connector, including the connector configuration and connector ARN.
 *
 * @public
 */
export interface Connector {
  /**
   * The name of the connector.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the connector.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The provider-specific configuration for connecting to the third-party cloud service provider.
   *
   * @public
   */
  connectorConfiguration: ConnectorConfiguration | undefined;

  /**
   * The date and time that the connector was created.
   *
   * @public
   */
  createdTime: Date | undefined;
}

/**
 * Filters connectors based on the connector provider.
 *
 * @public
 */
export interface ConnectorFilter {
  /**
   * The name of the filter. Currently, only `provider` is supported.
   *
   * @public
   */
  filterName?: ConnectorFilterName | undefined;

  /**
   * The value of the filter. For `provider`, valid values include: `AZURE`.
   *
   * @public
   */
  filterValues?: string[] | undefined;
}

/**
 * A summary of a connector.
 *
 * @public
 */
export interface ConnectorSummary {
  /**
   * The Amazon Resource Name (ARN) of the connector.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The name of the connector.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The third-party cloud service provider. Currently, `AZURE` is supported.
   *
   * @public
   */
  provider: Provider | undefined;

  /**
   * The Azure tenant identifier for the connector.
   *
   * @public
   */
  tenantIdentifier: string | undefined;

  /**
   * The date and time that the connector was created.
   *
   * @public
   */
  createdTime: Date | undefined;
}

/**
 * @public
 */
export interface DeleteAggregationAuthorizationRequest {
  /**
   * The 12-digit account ID of the account authorized to aggregate data.
   *
   * @public
   */
  AuthorizedAccountId: string | undefined;

  /**
   * The region authorized to collect aggregated data.
   *
   * @public
   */
  AuthorizedAwsRegion: string | undefined;
}

/**
 * @public
 */
export interface DeleteConfigRuleRequest {
  /**
   * The name of the Config rule that you want to delete.
   *
   * @public
   */
  ConfigRuleName: string | undefined;
}

/**
 * @public
 */
export interface DeleteConfigurationAggregatorRequest {
  /**
   * The name of the configuration aggregator.
   *
   * @public
   */
  ConfigurationAggregatorName: string | undefined;
}

/**
 * The request object for the `DeleteConfigurationRecorder` operation.
 *
 * @public
 */
export interface DeleteConfigurationRecorderRequest {
  /**
   * The name of the customer managed configuration recorder that you want to delete. You can retrieve the name of your configuration recorders by using the [DescribeConfigurationRecorders](https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeConfigurationRecorders.html) operation.
   *
   * @public
   */
  ConfigurationRecorderName: string | undefined;
}

/**
 * @public
 */
export interface DeleteConformancePackRequest {
  /**
   * Name of the conformance pack you want to delete.
   *
   * @public
   */
  ConformancePackName: string | undefined;
}

/**
 * @public
 */
export interface DeleteConnectorRequest {
  /**
   * The Amazon Resource Name (ARN) of the connector that you want to delete.
   *
   * @public
   */
  Arn: string | undefined;
}

/**
 * The input for the DeleteDeliveryChannel action. The action accepts the following data, in JSON format.
 *
 * @public
 */
export interface DeleteDeliveryChannelRequest {
  /**
   * The name of the delivery channel that you want to delete.
   *
   * @public
   */
  DeliveryChannelName: string | undefined;
}

/**
 * @public
 */
export interface DeleteEvaluationResultsRequest {
  /**
   * The name of the Config rule for which you want to delete the evaluation results.
   *
   * @public
   */
  ConfigRuleName: string | undefined;
}

/**
 * The output when you delete the evaluation results for the specified Config rule.
 *
 * @public
 */
export interface DeleteEvaluationResultsResponse {}

/**
 * @public
 */
export interface DeleteOrganizationConfigRuleRequest {
  /**
   * The name of organization Config rule that you want to delete.
   *
   * @public
   */
  OrganizationConfigRuleName: string | undefined;
}

/**
 * @public
 */
export interface DeleteOrganizationConformancePackRequest {
  /**
   * The name of organization conformance pack that you want to delete.
   *
   * @public
   */
  OrganizationConformancePackName: string | undefined;
}

/**
 * @public
 */
export interface DeletePendingAggregationRequestRequest {
  /**
   * The 12-digit account ID of the account requesting to aggregate data.
   *
   * @public
   */
  RequesterAccountId: string | undefined;

  /**
   * The region requesting to aggregate data.
   *
   * @public
   */
  RequesterAwsRegion: string | undefined;
}

/**
 * @public
 */
export interface DeleteRemediationConfigurationRequest {
  /**
   * The name of the Config rule for which you want to delete remediation configuration.
   *
   * @public
   */
  ConfigRuleName: string | undefined;

  /**
   * The type of a resource.
   *
   * @public
   */
  ResourceType?: string | undefined;
}

/**
 * @public
 */
export interface DeleteRemediationConfigurationResponse {}

/**
 * The details that identify a resource within Config, including the resource type and resource ID.
 *
 * @public
 */
export interface RemediationExceptionResourceKey {
  /**
   * The type of a resource.
   *
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * The ID of the resource (for example., sg-xxxxxx).
   *
   * @public
   */
  ResourceId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteRemediationExceptionsRequest {
  /**
   * The name of the Config rule for which you want to delete remediation exception configuration.
   *
   * @public
   */
  ConfigRuleName: string | undefined;

  /**
   * An exception list of resource exception keys to be processed with the current request. Config adds exception for each resource key. For example, Config adds 3 exceptions for 3 resource keys.
   *
   * @public
   */
  ResourceKeys: RemediationExceptionResourceKey[] | undefined;
}

/**
 * List of each of the failed delete remediation exceptions with specific reasons.
 *
 * @public
 */
export interface FailedDeleteRemediationExceptionsBatch {
  /**
   * Returns a failure message for delete remediation exception. For example, Config creates an exception due to an internal error.
   *
   * @public
   */
  FailureMessage?: string | undefined;

  /**
   * Returns remediation exception resource key object of the failed items.
   *
   * @public
   */
  FailedItems?: RemediationExceptionResourceKey[] | undefined;
}

/**
 * @public
 */
export interface DeleteRemediationExceptionsResponse {
  /**
   * Returns a list of failed delete remediation exceptions batch objects. Each object in the batch consists of a list of failed items and failure messages.
   *
   * @public
   */
  FailedBatches?: FailedDeleteRemediationExceptionsBatch[] | undefined;
}

/**
 * @public
 */
export interface DeleteResourceConfigRequest {
  /**
   * The type of the resource.
   *
   * @public
   */
  ResourceType: string | undefined;

  /**
   * Unique identifier of the resource.
   *
   * @public
   */
  ResourceId: string | undefined;
}

/**
 * @public
 */
export interface DeleteRetentionConfigurationRequest {
  /**
   * The name of the retention configuration to delete.
   *
   * @public
   */
  RetentionConfigurationName: string | undefined;
}

/**
 * @public
 */
export interface DeleteServiceLinkedConfigurationRecorderRequest {
  /**
   * The service principal of the Amazon Web Services service for the service-linked configuration recorder that you want to delete. This field is only supported for Amazon Web Services service principals. For third-party service-linked configuration recorders, use `Arn` instead.
   *
   * @public
   */
  ServicePrincipal?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the service-linked configuration recorder that you want to delete. For third-party service-linked configuration recorders, you must use `Arn`. You must specify exactly one of `Arn` or `ServicePrincipal`.
   *
   * @public
   */
  Arn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteServiceLinkedConfigurationRecorderResponse {
  /**
   * The Amazon Resource Name (ARN) of the specified configuration recorder.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The name of the specified configuration recorder.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteStoredQueryRequest {
  /**
   * The name of the query that you want to delete.
   *
   * @public
   */
  QueryName: string | undefined;
}

/**
 * @public
 */
export interface DeleteStoredQueryResponse {}

/**
 * The input for the DeliverConfigSnapshot action.
 *
 * @public
 */
export interface DeliverConfigSnapshotRequest {
  /**
   * The name of the delivery channel through which the snapshot is delivered.
   *
   * @public
   */
  deliveryChannelName: string | undefined;
}

/**
 * The output for the DeliverConfigSnapshot action, in JSON format.
 *
 * @public
 */
export interface DeliverConfigSnapshotResponse {
  /**
   * The ID of the snapshot that is being created.
   *
   * @public
   */
  configSnapshotId?: string | undefined;
}

/**
 * The channel through which Config delivers notifications and updated configuration states.
 *
 * @public
 */
export interface DeliveryChannel {
  /**
   * The name of the delivery channel. By default, Config assigns the name "default" when creating the delivery channel. To change the delivery channel name, you must use the DeleteDeliveryChannel action to delete your current delivery channel, and then you must use the PutDeliveryChannel command to create a delivery channel that has the desired name.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The name of the Amazon S3 bucket to which Config delivers configuration snapshots and configuration history files.
   *
   * If you specify a bucket that belongs to another Amazon Web Services account, that bucket must have policies that grant access permissions to Config. For more information, see [Permissions for the Amazon S3 Bucket](https://docs.aws.amazon.com/config/latest/developerguide/s3-bucket-policy.html) in the *Config Developer Guide*.
   *
   * @public
   */
  s3BucketName?: string | undefined;

  /**
   * The prefix for the specified Amazon S3 bucket.
   *
   * @public
   */
  s3KeyPrefix?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Key Management Service (KMS ) KMS key (KMS key) used to encrypt objects delivered by Config. Must belong to the same Region as the destination S3 bucket.
   *
   * @public
   */
  s3KmsKeyArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon SNS topic to which Config sends notifications about configuration changes.
   *
   * If you choose a topic from another account, the topic must have policies that grant access permissions to Config. For more information, see [Permissions for the Amazon SNS Topic](https://docs.aws.amazon.com/config/latest/developerguide/sns-topic-policy.html) in the *Config Developer Guide*.
   *
   * @public
   */
  snsTopicARN?: string | undefined;

  /**
   * The options for how often Config delivers configuration snapshots to the Amazon S3 bucket.
   *
   * @public
   */
  configSnapshotDeliveryProperties?: ConfigSnapshotDeliveryProperties | undefined;
}

/**
 * The status of a specified delivery channel.
 *
 * Valid values: `Success` | `Failure`
 *
 * @public
 */
export interface DeliveryChannelStatus {
  /**
   * The name of the delivery channel.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * A list containing the status of the delivery of the snapshot to the specified Amazon S3 bucket.
   *
   * @public
   */
  configSnapshotDeliveryInfo?: ConfigExportDeliveryInfo | undefined;

  /**
   * A list that contains the status of the delivery of the configuration history to the specified Amazon S3 bucket.
   *
   * @public
   */
  configHistoryDeliveryInfo?: ConfigExportDeliveryInfo | undefined;

  /**
   * A list containing the status of the delivery of the configuration stream notification to the specified Amazon SNS topic.
   *
   * @public
   */
  configStreamDeliveryInfo?: ConfigStreamDeliveryInfo | undefined;
}

/**
 * @public
 */
export interface DescribeAggregateComplianceByConfigRulesRequest {
  /**
   * The name of the configuration aggregator.
   *
   * @public
   */
  ConfigurationAggregatorName: string | undefined;

  /**
   * Filters the results by ConfigRuleComplianceFilters object.
   *
   * @public
   */
  Filters?: ConfigRuleComplianceFilters | undefined;

  /**
   * The maximum number of evaluation results returned on each page. The default is maximum. If you specify 0, Config uses the default.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * The `nextToken` string returned on a previous page that you use to get the next page of results in a paginated response.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeAggregateComplianceByConfigRulesResponse {
  /**
   * Returns a list of AggregateComplianceByConfigRule object.
   *
   * @public
   */
  AggregateComplianceByConfigRules?: AggregateComplianceByConfigRule[] | undefined;

  /**
   * The `nextToken` string returned on a previous page that you use to get the next page of results in a paginated response.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeAggregateComplianceByConformancePacksRequest {
  /**
   * The name of the configuration aggregator.
   *
   * @public
   */
  ConfigurationAggregatorName: string | undefined;

  /**
   * Filters the result by `AggregateConformancePackComplianceFilters` object.
   *
   * @public
   */
  Filters?: AggregateConformancePackComplianceFilters | undefined;

  /**
   * The maximum number of conformance packs compliance details returned on each page. The default is maximum. If you specify 0, Config uses the default.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * The `nextToken` string returned on a previous page that you use to get the next page of results in a paginated response.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeAggregateComplianceByConformancePacksResponse {
  /**
   * Returns the `AggregateComplianceByConformancePack` object.
   *
   * @public
   */
  AggregateComplianceByConformancePacks?: AggregateComplianceByConformancePack[] | undefined;

  /**
   * The `nextToken` string returned on a previous page that you use to get the next page of results in a paginated response.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeAggregationAuthorizationsRequest {
  /**
   * The maximum number of AggregationAuthorizations returned on each page. The default is maximum. If you specify 0, Config uses the default.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * The `nextToken` string returned on a previous page that you use to get the next page of results in a paginated response.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeAggregationAuthorizationsResponse {
  /**
   * Returns a list of authorizations granted to various aggregator accounts and regions.
   *
   * @public
   */
  AggregationAuthorizations?: AggregationAuthorization[] | undefined;

  /**
   * The `nextToken` string returned on a previous page that you use to get the next page of results in a paginated response.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeComplianceByConfigRuleRequest {
  /**
   * Specify one or more Config rule names to filter the results by rule.
   *
   * @public
   */
  ConfigRuleNames?: string[] | undefined;

  /**
   * Filters the results by compliance.
   *
   * @public
   */
  ComplianceTypes?: ComplianceType[] | undefined;

  /**
   * The `nextToken` string returned on a previous page that you use to get the next page of results in a paginated response.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeComplianceByConfigRuleResponse {
  /**
   * Indicates whether each of the specified Config rules is compliant.
   *
   * @public
   */
  ComplianceByConfigRules?: ComplianceByConfigRule[] | undefined;

  /**
   * The string that you use in a subsequent request to get the next page of results in a paginated response.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeComplianceByResourceRequest {
  /**
   * The types of Amazon Web Services resources for which you want compliance information (for example, `AWS::EC2::Instance`). For this operation, you can specify that the resource type is an Amazon Web Services account by specifying `AWS::::Account`.
   *
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * The ID of the Amazon Web Services resource for which you want compliance information. You can specify only one resource ID. If you specify a resource ID, you must also specify a type for `ResourceType`.
   *
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * Filters the results by compliance.
   *
   * @public
   */
  ComplianceTypes?: ComplianceType[] | undefined;

  /**
   * The maximum number of evaluation results returned on each page. The default is 10. You cannot specify a number greater than 100. If you specify 0, Config uses the default.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * The `nextToken` string returned on a previous page that you use to get the next page of results in a paginated response.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeComplianceByResourceResponse {
  /**
   * Indicates whether the specified Amazon Web Services resource complies with all of the Config rules that evaluate it.
   *
   * @public
   */
  ComplianceByResources?: ComplianceByResource[] | undefined;

  /**
   * The string that you use in a subsequent request to get the next page of results in a paginated response.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeConfigRuleEvaluationStatusRequest {
  /**
   * The name of the Config managed rules for which you want status information. If you do not specify any names, Config returns status information for all Config managed rules that you use.
   *
   * @public
   */
  ConfigRuleNames?: string[] | undefined;

  /**
   * The `nextToken` string returned on a previous page that you use to get the next page of results in a paginated response.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The number of rule evaluation results that you want returned.
   *
   * This parameter is required if the rule limit for your account is more than the default of 1000 rules.
   *
   * For information about requesting a rule limit increase, see [Config Limits](http://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html#limits_config) in the *Amazon Web Services General Reference Guide*.
   *
   * @public
   */
  Limit?: number | undefined;
}

/**
 * @public
 */
export interface DescribeConfigRuleEvaluationStatusResponse {
  /**
   * Status information about your Config managed rules.
   *
   * @public
   */
  ConfigRulesEvaluationStatus?: ConfigRuleEvaluationStatus[] | undefined;

  /**
   * The string that you use in a subsequent request to get the next page of results in a paginated response.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Returns a filtered list of Detective or Proactive Config rules. By default, if the filter is not defined, this API returns an unfiltered list. For more information on Detective or Proactive Config rules, see [**Evaluation Mode**](https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config-rules.html) in the *Config Developer Guide*.
 *
 * @public
 */
export interface DescribeConfigRulesFilters {
  /**
   * The mode of an evaluation. The valid values are Detective or Proactive.
   *
   * @public
   */
  EvaluationMode?: EvaluationMode | undefined;

  /**
   * Filters the results by `RuleEvaluationVisibility`.
   *
   * @public
   */
  RuleEvaluationVisibility?: RuleEvaluationVisibility | undefined;
}

/**
 * @public
 */
export interface DescribeConfigRulesRequest {
  /**
   * The names of the Config rules for which you want details. If you do not specify any names, Config returns details for all your rules.
   *
   * @public
   */
  ConfigRuleNames?: string[] | undefined;

  /**
   * Returns a list of Detective or Proactive Config rules. By default, this API returns an unfiltered list. For more information on Detective or Proactive Config rules, see [**Evaluation Mode**](https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config-rules.html) in the *Config Developer Guide*.
   *
   * @public
   */
  Filters?: DescribeConfigRulesFilters | undefined;

  /**
   * The `nextToken` string returned on a previous page that you use to get the next page of results in a paginated response.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeConfigRulesResponse {
  /**
   * The details about your Config rules.
   *
   * @public
   */
  ConfigRules?: ConfigRule[] | undefined;

  /**
   * The string that you use in a subsequent request to get the next page of results in a paginated response.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeConfigurationAggregatorsRequest {
  /**
   * The name of the configuration aggregators.
   *
   * @public
   */
  ConfigurationAggregatorNames?: string[] | undefined;

  /**
   * The `nextToken` string returned on a previous page that you use to get the next page of results in a paginated response.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of configuration aggregators returned on each page. The default is maximum. If you specify 0, Config uses the default.
   *
   * @public
   */
  Limit?: number | undefined;
}

/**
 * @public
 */
export interface DescribeConfigurationAggregatorsResponse {
  /**
   * Returns a ConfigurationAggregators object.
   *
   * @public
   */
  ConfigurationAggregators?: ConfigurationAggregator[] | undefined;

  /**
   * The `nextToken` string returned on a previous page that you use to get the next page of results in a paginated response.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeConfigurationAggregatorSourcesStatusRequest {
  /**
   * The name of the configuration aggregator.
   *
   * @public
   */
  ConfigurationAggregatorName: string | undefined;

  /**
   * Filters the status type.
   *
   * - Valid value FAILED indicates errors while moving data.
   * - Valid value SUCCEEDED indicates the data was successfully moved.
   * - Valid value OUTDATED indicates the data is not the most recent.
   *
   * @public
   */
  UpdateStatus?: AggregatedSourceStatusType[] | undefined;

  /**
   * The `nextToken` string returned on a previous page that you use to get the next page of results in a paginated response.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of AggregatorSourceStatus returned on each page. The default is maximum. If you specify 0, Config uses the default.
   *
   * @public
   */
  Limit?: number | undefined;
}

/**
 * @public
 */
export interface DescribeConfigurationAggregatorSourcesStatusResponse {
  /**
   * Returns an AggregatedSourceStatus object.
   *
   * @public
   */
  AggregatedSourceStatusList?: AggregatedSourceStatus[] | undefined;

  /**
   * The `nextToken` string returned on a previous page that you use to get the next page of results in a paginated response.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * The input for the DescribeConfigurationRecorders action.
 *
 * @public
 */
export interface DescribeConfigurationRecordersRequest {
  /**
   * A list of names of the configuration recorders that you want to specify.
   *
   * > **Note:** When making a request to this operation, you can only specify one configuration recorder.
   *
   * @public
   */
  ConfigurationRecorderNames?: string[] | undefined;

  /**
   * For service-linked configuration recorders, you can use the service principal of the linked Amazon Web Services service to specify the configuration recorder. This field is only supported for Amazon Web Services service principals. For third-party service-linked configuration recorders, use `Arn` instead.
   *
   * @public
   */
  ServicePrincipal?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the configuration recorder that you want to specify.
   *
   * @public
   */
  Arn?: string | undefined;
}

/**
 * The output for the DescribeConfigurationRecorders action.
 *
 * @public
 */
export interface DescribeConfigurationRecordersResponse {
  /**
   * A list that contains the descriptions of the specified configuration recorders.
   *
   * @public
   */
  ConfigurationRecorders?: ConfigurationRecorder[] | undefined;
}

/**
 * The input for the DescribeConfigurationRecorderStatus action.
 *
 * @public
 */
export interface DescribeConfigurationRecorderStatusRequest {
  /**
   * The name of the configuration recorder. If the name is not specified, the operation returns the status for the customer managed configuration recorder configured for the account, if applicable.
   *
   * > **Note:** When making a request to this operation, you can only specify one configuration recorder.
   *
   * @public
   */
  ConfigurationRecorderNames?: string[] | undefined;

  /**
   * For service-linked configuration recorders, you can use the service principal of the linked Amazon Web Services service to specify the configuration recorder. This field is only supported for Amazon Web Services service principals. For third-party service-linked configuration recorders, use `Arn` instead.
   *
   * @public
   */
  ServicePrincipal?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the configuration recorder that you want to specify.
   *
   * @public
   */
  Arn?: string | undefined;
}

/**
 * The output for the DescribeConfigurationRecorderStatus action, in JSON format.
 *
 * @public
 */
export interface DescribeConfigurationRecorderStatusResponse {
  /**
   * A list that contains status of the specified recorders.
   *
   * @public
   */
  ConfigurationRecordersStatus?: ConfigurationRecorderStatus[] | undefined;
}

/**
 * @public
 */
export interface DescribeConformancePackComplianceRequest {
  /**
   * Name of the conformance pack.
   *
   * @public
   */
  ConformancePackName: string | undefined;

  /**
   * A `ConformancePackComplianceFilters` object.
   *
   * @public
   */
  Filters?: ConformancePackComplianceFilters | undefined;

  /**
   * The maximum number of Config rules within a conformance pack are returned on each page.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * The `nextToken` string returned in a previous request that you use to request the next page of results in a paginated response.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeConformancePackComplianceResponse {
  /**
   * Name of the conformance pack.
   *
   * @public
   */
  ConformancePackName: string | undefined;

  /**
   * Returns a list of `ConformancePackRuleCompliance` objects.
   *
   * @public
   */
  ConformancePackRuleComplianceList: ConformancePackRuleCompliance[] | undefined;

  /**
   * The `nextToken` string returned in a previous request that you use to request the next page of results in a paginated response.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeConformancePacksRequest {
  /**
   * Comma-separated list of conformance pack names for which you want details. If you do not specify any names, Config returns details for all your conformance packs.
   *
   * @public
   */
  ConformancePackNames?: string[] | undefined;

  /**
   * The maximum number of conformance packs returned on each page.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * The `nextToken` string returned in a previous request that you use to request the next page of results in a paginated response.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeConformancePacksResponse {
  /**
   * Returns a list of `ConformancePackDetail` objects.
   *
   * @public
   */
  ConformancePackDetails?: ConformancePackDetail[] | undefined;

  /**
   * The `nextToken` string returned in a previous request that you use to request the next page of results in a paginated response.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeConformancePackStatusRequest {
  /**
   * Comma-separated list of conformance pack names.
   *
   * @public
   */
  ConformancePackNames?: string[] | undefined;

  /**
   * The maximum number of conformance packs status returned on each page.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * The `nextToken` string returned in a previous request that you use to request the next page of results in a paginated response.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeConformancePackStatusResponse {
  /**
   * A list of `ConformancePackStatusDetail` objects.
   *
   * @public
   */
  ConformancePackStatusDetails?: ConformancePackStatusDetail[] | undefined;

  /**
   * The `nextToken` string returned in a previous request that you use to request the next page of results in a paginated response.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * The input for the DescribeDeliveryChannels action.
 *
 * @public
 */
export interface DescribeDeliveryChannelsRequest {
  /**
   * A list of delivery channel names.
   *
   * @public
   */
  DeliveryChannelNames?: string[] | undefined;
}

/**
 * The output for the DescribeDeliveryChannels action.
 *
 * @public
 */
export interface DescribeDeliveryChannelsResponse {
  /**
   * A list that contains the descriptions of the specified delivery channel.
   *
   * @public
   */
  DeliveryChannels?: DeliveryChannel[] | undefined;
}

/**
 * The input for the DeliveryChannelStatus action.
 *
 * @public
 */
export interface DescribeDeliveryChannelStatusRequest {
  /**
   * A list of delivery channel names.
   *
   * @public
   */
  DeliveryChannelNames?: string[] | undefined;
}

/**
 * The output for the DescribeDeliveryChannelStatus action.
 *
 * @public
 */
export interface DescribeDeliveryChannelStatusResponse {
  /**
   * A list that contains the status of a specified delivery channel.
   *
   * @public
   */
  DeliveryChannelsStatus?: DeliveryChannelStatus[] | undefined;
}

/**
 * @public
 */
export interface DescribeOrganizationConfigRulesRequest {
  /**
   * The names of organization Config rules for which you want details. If you do not specify any names, Config returns details for all your organization Config rules.
   *
   * @public
   */
  OrganizationConfigRuleNames?: string[] | undefined;

  /**
   * The maximum number of organization Config rules returned on each page. If you do no specify a number, Config uses the default. The default is 100.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * The `nextToken` string returned on a previous page that you use to get the next page of results in a paginated response.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * metadata for your organization Config Custom Policy rule including the runtime system in use, which accounts have debug logging enabled, and other custom rule metadata such as resource type, resource ID of Amazon Web Services resource, and organization trigger types that trigger Config to evaluate Amazon Web Services resources against a rule.
 *
 * @public
 */
export interface OrganizationCustomPolicyRuleMetadataNoPolicy {
  /**
   * The description that you provide for your organization Config Custom Policy rule.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The type of notification that triggers Config to run an evaluation for a rule. For Config Custom Policy rules, Config supports change triggered notification types:
   *
   * - `ConfigurationItemChangeNotification` - Triggers an evaluation when Config delivers a configuration item as a result of a resource change.
   * - `OversizedConfigurationItemChangeNotification` - Triggers an evaluation when Config delivers an oversized configuration item. Config may generate this notification type when a resource changes and the notification exceeds the maximum size allowed by Amazon SNS.
   *
   * @public
   */
  OrganizationConfigRuleTriggerTypes?: OrganizationConfigRuleTriggerTypeNoSN[] | undefined;

  /**
   * A string, in JSON format, that is passed to your organization Config Custom Policy rule.
   *
   * @public
   */
  InputParameters?: string | undefined;

  /**
   * The maximum frequency with which Config runs evaluations for a rule. Your Config Custom Policy rule is triggered when Config delivers the configuration snapshot. For more information, see ConfigSnapshotDeliveryProperties.
   *
   * @public
   */
  MaximumExecutionFrequency?: MaximumExecutionFrequency | undefined;

  /**
   * The type of the Amazon Web Services resource that was evaluated.
   *
   * @public
   */
  ResourceTypesScope?: string[] | undefined;

  /**
   * The ID of the Amazon Web Services resource that was evaluated.
   *
   * @public
   */
  ResourceIdScope?: string | undefined;

  /**
   * One part of a key-value pair that make up a tag. A key is a general label that acts like a category for more specific tag values.
   *
   * @public
   */
  TagKeyScope?: string | undefined;

  /**
   * The optional part of a key-value pair that make up a tag. A value acts as a descriptor within a tag category (key).
   *
   * @public
   */
  TagValueScope?: string | undefined;

  /**
   * The runtime system for your organization Config Custom Policy rules. Guard is a policy-as-code language that allows you to write policies that are enforced by Config Custom Policy rules. For more information about Guard, see the [Guard GitHub Repository](https://github.com/aws-cloudformation/cloudformation-guard).
   *
   * @public
   */
  PolicyRuntime?: string | undefined;

  /**
   * A list of accounts that you can enable debug logging for your organization Config Custom Policy rule. List is null when debug logging is enabled for all accounts.
   *
   * @public
   */
  DebugLogDeliveryAccounts?: string[] | undefined;
}

/**
 * An object that specifies organization custom rule metadata such as resource type, resource ID of Amazon Web Services resource, Lambda function ARN, and organization trigger types that trigger Config to evaluate your Amazon Web Services resources against a rule. It also provides the frequency with which you want Config to run evaluations for the rule if the trigger type is periodic.
 *
 * @public
 */
export interface OrganizationCustomRuleMetadata {
  /**
   * The description that you provide for your organization Config rule.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The lambda function ARN.
   *
   * @public
   */
  LambdaFunctionArn: string | undefined;

  /**
   * The type of notification that triggers Config to run an evaluation for a rule. You can specify the following notification types:
   *
   * - `ConfigurationItemChangeNotification` - Triggers an evaluation when Config delivers a configuration item as a result of a resource change.
   * - `OversizedConfigurationItemChangeNotification` - Triggers an evaluation when Config delivers an oversized configuration item. Config may generate this notification type when a resource changes and the notification exceeds the maximum size allowed by Amazon SNS.
   * - `ScheduledNotification` - Triggers a periodic evaluation at the frequency specified for `MaximumExecutionFrequency`.
   *
   * @public
   */
  OrganizationConfigRuleTriggerTypes: OrganizationConfigRuleTriggerType[] | undefined;

  /**
   * A string, in JSON format, that is passed to your organization Config rule Lambda function.
   *
   * @public
   */
  InputParameters?: string | undefined;

  /**
   * The maximum frequency with which Config runs evaluations for a rule. Your custom rule is triggered when Config delivers the configuration snapshot. For more information, see ConfigSnapshotDeliveryProperties.
   *
   * > **Note:** By default, rules with a periodic trigger are evaluated every 24 hours. To change the frequency, specify a valid value for the `MaximumExecutionFrequency` parameter.
   *
   * @public
   */
  MaximumExecutionFrequency?: MaximumExecutionFrequency | undefined;

  /**
   * The type of the Amazon Web Services resource that was evaluated.
   *
   * @public
   */
  ResourceTypesScope?: string[] | undefined;

  /**
   * The ID of the Amazon Web Services resource that was evaluated.
   *
   * @public
   */
  ResourceIdScope?: string | undefined;

  /**
   * One part of a key-value pair that make up a tag. A key is a general label that acts like a category for more specific tag values.
   *
   * @public
   */
  TagKeyScope?: string | undefined;

  /**
   * The optional part of a key-value pair that make up a tag. A value acts as a descriptor within a tag category (key).
   *
   * @public
   */
  TagValueScope?: string | undefined;
}

/**
 * An object that specifies organization managed rule metadata such as resource type and ID of Amazon Web Services resource along with the rule identifier. It also provides the frequency with which you want Config to run evaluations for the rule if the trigger type is periodic.
 *
 * @public
 */
export interface OrganizationManagedRuleMetadata {
  /**
   * The description that you provide for your organization Config rule.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * For organization config managed rules, a predefined identifier from a list. For example, `IAM_PASSWORD_POLICY` is a managed rule. To reference a managed rule, see [Using Config managed rules](https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config_use-managed-rules.html).
   *
   * @public
   */
  RuleIdentifier: string | undefined;

  /**
   * A string, in JSON format, that is passed to your organization Config rule Lambda function.
   *
   * @public
   */
  InputParameters?: string | undefined;

  /**
   * The maximum frequency with which Config runs evaluations for a rule. This is for an Config managed rule that is triggered at a periodic frequency.
   *
   * > **Note:** By default, rules with a periodic trigger are evaluated every 24 hours. To change the frequency, specify a valid value for the `MaximumExecutionFrequency` parameter.
   *
   * @public
   */
  MaximumExecutionFrequency?: MaximumExecutionFrequency | undefined;

  /**
   * The type of the Amazon Web Services resource that was evaluated.
   *
   * @public
   */
  ResourceTypesScope?: string[] | undefined;

  /**
   * The ID of the Amazon Web Services resource that was evaluated.
   *
   * @public
   */
  ResourceIdScope?: string | undefined;

  /**
   * One part of a key-value pair that make up a tag. A key is a general label that acts like a category for more specific tag values.
   *
   * @public
   */
  TagKeyScope?: string | undefined;

  /**
   * The optional part of a key-value pair that make up a tag. A value acts as a descriptor within a tag category (key).
   *
   * @public
   */
  TagValueScope?: string | undefined;
}

/**
 * An organization Config rule that has information about Config rules that Config creates in member accounts.
 *
 * @public
 */
export interface OrganizationConfigRule {
  /**
   * The name that you assign to organization Config rule.
   *
   * @public
   */
  OrganizationConfigRuleName: string | undefined;

  /**
   * Amazon Resource Name (ARN) of organization Config rule.
   *
   * @public
   */
  OrganizationConfigRuleArn: string | undefined;

  /**
   * An `OrganizationManagedRuleMetadata` object.
   *
   * @public
   */
  OrganizationManagedRuleMetadata?: OrganizationManagedRuleMetadata | undefined;

  /**
   * An `OrganizationCustomRuleMetadata` object.
   *
   * @public
   */
  OrganizationCustomRuleMetadata?: OrganizationCustomRuleMetadata | undefined;

  /**
   * A comma-separated list of accounts excluded from organization Config rule.
   *
   * @public
   */
  ExcludedAccounts?: string[] | undefined;

  /**
   * The timestamp of the last update.
   *
   * @public
   */
  LastUpdateTime?: Date | undefined;

  /**
   * An object that specifies metadata for your organization's Config Custom Policy rule. The metadata includes the runtime system in use, which accounts have debug logging enabled, and other custom rule metadata, such as resource type, resource ID of Amazon Web Services resource, and organization trigger types that initiate Config to evaluate Amazon Web Services resources against a rule.
   *
   * @public
   */
  OrganizationCustomPolicyRuleMetadata?: OrganizationCustomPolicyRuleMetadataNoPolicy | undefined;
}

/**
 * @public
 */
export interface DescribeOrganizationConfigRulesResponse {
  /**
   * Returns a list of `OrganizationConfigRule` objects.
   *
   * @public
   */
  OrganizationConfigRules?: OrganizationConfigRule[] | undefined;

  /**
   * The `nextToken` string returned on a previous page that you use to get the next page of results in a paginated response.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeOrganizationConfigRuleStatusesRequest {
  /**
   * The names of organization Config rules for which you want status details. If you do not specify any names, Config returns details for all your organization Config rules.
   *
   * @public
   */
  OrganizationConfigRuleNames?: string[] | undefined;

  /**
   * The maximum number of `OrganizationConfigRuleStatuses` returned on each page. If you do no specify a number, Config uses the default. The default is 100.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * The `nextToken` string returned on a previous page that you use to get the next page of results in a paginated response.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Returns the status for an organization Config rule in an organization.
 *
 * @public
 */
export interface OrganizationConfigRuleStatus {
  /**
   * The name that you assign to organization Config rule.
   *
   * @public
   */
  OrganizationConfigRuleName: string | undefined;

  /**
   * Indicates deployment status of an organization Config rule. When management account calls PutOrganizationConfigRule action for the first time, Config rule status is created in all the member accounts. When management account calls PutOrganizationConfigRule action for the second time, Config rule status is updated in all the member accounts. Additionally, Config rule status is updated when one or more member accounts join or leave an organization. Config rule status is deleted when the management account deletes OrganizationConfigRule in all the member accounts and disables service access for `config-multiaccountsetup.amazonaws.com`.
   *
   * Config sets the state of the rule to:
   *
   * - `CREATE_SUCCESSFUL` when an organization Config rule has been successfully created in all the member accounts.
   * - `CREATE_IN_PROGRESS` when an organization Config rule creation is in progress.
   * - `CREATE_FAILED` when an organization Config rule creation failed in one or more member accounts within that organization.
   * - `DELETE_FAILED` when an organization Config rule deletion failed in one or more member accounts within that organization.
   * - `DELETE_IN_PROGRESS` when an organization Config rule deletion is in progress.
   * - `DELETE_SUCCESSFUL` when an organization Config rule has been successfully deleted from all the member accounts.
   * - `UPDATE_SUCCESSFUL` when an organization Config rule has been successfully updated in all the member accounts.
   * - `UPDATE_IN_PROGRESS` when an organization Config rule update is in progress.
   * - `UPDATE_FAILED` when an organization Config rule update failed in one or more member accounts within that organization.
   *
   * @public
   */
  OrganizationRuleStatus: OrganizationRuleStatus | undefined;

  /**
   * An error code that is returned when organization Config rule creation or deletion has failed.
   *
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * An error message indicating that organization Config rule creation or deletion failed due to an error.
   *
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * The timestamp of the last update.
   *
   * @public
   */
  LastUpdateTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeOrganizationConfigRuleStatusesResponse {
  /**
   * A list of `OrganizationConfigRuleStatus` objects.
   *
   * @public
   */
  OrganizationConfigRuleStatuses?: OrganizationConfigRuleStatus[] | undefined;

  /**
   * The `nextToken` string returned on a previous page that you use to get the next page of results in a paginated response.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeOrganizationConformancePacksRequest {
  /**
   * The name that you assign to an organization conformance pack.
   *
   * @public
   */
  OrganizationConformancePackNames?: string[] | undefined;

  /**
   * The maximum number of organization config packs returned on each page. If you do no specify a number, Config uses the default. The default is 100.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * The nextToken string returned on a previous page that you use to get the next page of results in a paginated response.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * An organization conformance pack that has information about conformance packs that Config creates in member accounts.
 *
 * @public
 */
export interface OrganizationConformancePack {
  /**
   * The name you assign to an organization conformance pack.
   *
   * @public
   */
  OrganizationConformancePackName: string | undefined;

  /**
   * Amazon Resource Name (ARN) of organization conformance pack.
   *
   * @public
   */
  OrganizationConformancePackArn: string | undefined;

  /**
   * The name of the Amazon S3 bucket where Config stores conformance pack templates.
   *
   * > **Note:** This field is optional.
   *
   * @public
   */
  DeliveryS3Bucket?: string | undefined;

  /**
   * Any folder structure you want to add to an Amazon S3 bucket.
   *
   * > **Note:** This field is optional.
   *
   * @public
   */
  DeliveryS3KeyPrefix?: string | undefined;

  /**
   * A list of `ConformancePackInputParameter` objects.
   *
   * @public
   */
  ConformancePackInputParameters?: ConformancePackInputParameter[] | undefined;

  /**
   * A comma-separated list of accounts excluded from organization conformance pack.
   *
   * @public
   */
  ExcludedAccounts?: string[] | undefined;

  /**
   * Last time when organization conformation pack was updated.
   *
   * @public
   */
  LastUpdateTime: Date | undefined;
}

/**
 * @public
 */
export interface DescribeOrganizationConformancePacksResponse {
  /**
   * Returns a list of OrganizationConformancePacks objects.
   *
   * @public
   */
  OrganizationConformancePacks?: OrganizationConformancePack[] | undefined;

  /**
   * The nextToken string returned on a previous page that you use to get the next page of results in a paginated response.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeOrganizationConformancePackStatusesRequest {
  /**
   * The names of organization conformance packs for which you want status details. If you do not specify any names, Config returns details for all your organization conformance packs.
   *
   * @public
   */
  OrganizationConformancePackNames?: string[] | undefined;

  /**
   * The maximum number of OrganizationConformancePackStatuses returned on each page. If you do no specify a number, Config uses the default. The default is 100.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * The nextToken string returned on a previous page that you use to get the next page of results in a paginated response.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Returns the status for an organization conformance pack in an organization.
 *
 * @public
 */
export interface OrganizationConformancePackStatus {
  /**
   * The name that you assign to organization conformance pack.
   *
   * @public
   */
  OrganizationConformancePackName: string | undefined;

  /**
   * Indicates deployment status of an organization conformance pack. When management account calls PutOrganizationConformancePack for the first time, conformance pack status is created in all the member accounts. When management account calls PutOrganizationConformancePack for the second time, conformance pack status is updated in all the member accounts. Additionally, conformance pack status is updated when one or more member accounts join or leave an organization. Conformance pack status is deleted when the management account deletes OrganizationConformancePack in all the member accounts and disables service access for `config-multiaccountsetup.amazonaws.com`.
   *
   * Config sets the state of the conformance pack to:
   *
   * - `CREATE_SUCCESSFUL` when an organization conformance pack has been successfully created in all the member accounts.
   * - `CREATE_IN_PROGRESS` when an organization conformance pack creation is in progress.
   * - `CREATE_FAILED` when an organization conformance pack creation failed in one or more member accounts within that organization.
   * - `DELETE_FAILED` when an organization conformance pack deletion failed in one or more member accounts within that organization.
   * - `DELETE_IN_PROGRESS` when an organization conformance pack deletion is in progress.
   * - `DELETE_SUCCESSFUL` when an organization conformance pack has been successfully deleted from all the member accounts.
   * - `UPDATE_SUCCESSFUL` when an organization conformance pack has been successfully updated in all the member accounts.
   * - `UPDATE_IN_PROGRESS` when an organization conformance pack update is in progress.
   * - `UPDATE_FAILED` when an organization conformance pack update failed in one or more member accounts within that organization.
   *
   * @public
   */
  Status: OrganizationResourceStatus | undefined;

  /**
   * An error code that is returned when organization conformance pack creation or deletion has failed in a member account.
   *
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * An error message indicating that organization conformance pack creation or deletion failed due to an error.
   *
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * The timestamp of the last update.
   *
   * @public
   */
  LastUpdateTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeOrganizationConformancePackStatusesResponse {
  /**
   * A list of `OrganizationConformancePackStatus` objects.
   *
   * @public
   */
  OrganizationConformancePackStatuses?: OrganizationConformancePackStatus[] | undefined;

  /**
   * The nextToken string returned on a previous page that you use to get the next page of results in a paginated response.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribePendingAggregationRequestsRequest {
  /**
   * The maximum number of evaluation results returned on each page. The default is maximum. If you specify 0, Config uses the default.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * The `nextToken` string returned on a previous page that you use to get the next page of results in a paginated response.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * An object that represents the account ID and region of an aggregator account that is requesting authorization but is not yet authorized.
 *
 * @public
 */
export interface PendingAggregationRequest {
  /**
   * The 12-digit account ID of the account requesting to aggregate data.
   *
   * @public
   */
  RequesterAccountId?: string | undefined;

  /**
   * The region requesting to aggregate data.
   *
   * @public
   */
  RequesterAwsRegion?: string | undefined;
}

/**
 * @public
 */
export interface DescribePendingAggregationRequestsResponse {
  /**
   * Returns a PendingAggregationRequests object.
   *
   * @public
   */
  PendingAggregationRequests?: PendingAggregationRequest[] | undefined;

  /**
   * The `nextToken` string returned on a previous page that you use to get the next page of results in a paginated response.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeRemediationConfigurationsRequest {
  /**
   * A list of Config rule names of remediation configurations for which you want details.
   *
   * @public
   */
  ConfigRuleNames: string[] | undefined;
}

/**
 * Amazon Web Services Systems Manager (SSM) specific remediation controls.
 *
 * @public
 */
export interface SsmControls {
  /**
   * The maximum percentage of remediation actions allowed to run in parallel on the non-compliant resources for that specific rule. You can specify a percentage, such as 10%. The default value is 10.
   *
   * @public
   */
  ConcurrentExecutionRatePercentage?: number | undefined;

  /**
   * The percentage of errors that are allowed before SSM stops running automations on non-compliant resources for that specific rule. You can specify a percentage of errors, for example 10%. If you do not specifiy a percentage, the default is 50%. For example, if you set the ErrorPercentage to 40% for 10 non-compliant resources, then SSM stops running the automations when the fifth error is received.
   *
   * @public
   */
  ErrorPercentage?: number | undefined;
}

/**
 * The controls that Config uses for executing remediations.
 *
 * @public
 */
export interface ExecutionControls {
  /**
   * A SsmControls object.
   *
   * @public
   */
  SsmControls?: SsmControls | undefined;
}

/**
 * The dynamic value of the resource.
 *
 * @public
 */
export interface ResourceValue {
  /**
   * The value is a resource ID.
   *
   * @public
   */
  Value: ResourceValueType | undefined;
}

/**
 * The static value of the resource.
 *
 * @public
 */
export interface StaticValue {
  /**
   * A list of values. For example, the ARN of the assumed role.
   *
   * @public
   */
  Values: string[] | undefined;
}

/**
 * The value is either a dynamic (resource) value or a static value. You must select either a dynamic value or a static value.
 *
 * @public
 */
export interface RemediationParameterValue {
  /**
   * The value is dynamic and changes at run-time.
   *
   * @public
   */
  ResourceValue?: ResourceValue | undefined;

  /**
   * The value is static and does not change at run-time.
   *
   * @public
   */
  StaticValue?: StaticValue | undefined;
}

/**
 * An object that represents the details about the remediation configuration that includes the remediation action, parameters, and data to execute the action.
 *
 * @public
 */
export interface RemediationConfiguration {
  /**
   * The name of the Config rule.
   *
   * @public
   */
  ConfigRuleName: string | undefined;

  /**
   * The type of the target. Target executes remediation. For example, SSM document.
   *
   * @public
   */
  TargetType: RemediationTargetType | undefined;

  /**
   * Target ID is the name of the SSM document.
   *
   * @public
   */
  TargetId: string | undefined;

  /**
   * Version of the target. For example, version of the SSM document.
   *
   * > **Note:** If you make backward incompatible changes to the SSM document, you must call PutRemediationConfiguration API again to ensure the remediations can run.
   *
   * @public
   */
  TargetVersion?: string | undefined;

  /**
   * An object of the RemediationParameterValue.
   *
   * @public
   */
  Parameters?: Record<string, RemediationParameterValue> | undefined;

  /**
   * The type of a resource.
   *
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * The remediation is triggered automatically.
   *
   * @public
   */
  Automatic?: boolean | undefined;

  /**
   * An ExecutionControls object.
   *
   * @public
   */
  ExecutionControls?: ExecutionControls | undefined;

  /**
   * The maximum number of failed attempts for auto-remediation. If you do not select a number, the default is 5.
   *
   * For example, if you specify MaximumAutomaticAttempts as 5 with RetryAttemptSeconds as 50 seconds, Config will put a RemediationException on your behalf for the failing resource after the 5th failed attempt within 50 seconds.
   *
   * @public
   */
  MaximumAutomaticAttempts?: number | undefined;

  /**
   * Time window to determine whether or not to add a remediation exception to prevent infinite remediation attempts. If `MaximumAutomaticAttempts` remediation attempts have been made under `RetryAttemptSeconds`, a remediation exception will be added to the resource. If you do not select a number, the default is 60 seconds.
   *
   * For example, if you specify `RetryAttemptSeconds` as 50 seconds and `MaximumAutomaticAttempts` as 5, Config will run auto-remediations 5 times within 50 seconds before adding a remediation exception to the resource.
   *
   * @public
   */
  RetryAttemptSeconds?: number | undefined;

  /**
   * Amazon Resource Name (ARN) of remediation configuration.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * Name of the service that owns the service-linked rule, if applicable.
   *
   * @public
   */
  CreatedByService?: string | undefined;
}

/**
 * @public
 */
export interface DescribeRemediationConfigurationsResponse {
  /**
   * Returns a remediation configuration object.
   *
   * @public
   */
  RemediationConfigurations?: RemediationConfiguration[] | undefined;
}

/**
 * @public
 */
export interface DescribeRemediationExceptionsRequest {
  /**
   * The name of the Config rule.
   *
   * @public
   */
  ConfigRuleName: string | undefined;

  /**
   * An exception list of resource exception keys to be processed with the current request. Config adds exception for each resource key. For example, Config adds 3 exceptions for 3 resource keys.
   *
   * @public
   */
  ResourceKeys?: RemediationExceptionResourceKey[] | undefined;

  /**
   * The maximum number of RemediationExceptionResourceKey returned on each page. The default is 25. If you specify 0, Config uses the default.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * The `nextToken` string returned in a previous request that you use to request the next page of results in a paginated response.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * An object that represents the details about the remediation exception. The details include the rule name, an explanation of an exception, the time when the exception will be deleted, the resource ID, and resource type.
 *
 * @public
 */
export interface RemediationException {
  /**
   * The name of the Config rule.
   *
   * @public
   */
  ConfigRuleName: string | undefined;

  /**
   * The type of a resource.
   *
   * @public
   */
  ResourceType: string | undefined;

  /**
   * The ID of the resource (for example., sg-xxxxxx).
   *
   * @public
   */
  ResourceId: string | undefined;

  /**
   * An explanation of an remediation exception.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The time when the remediation exception will be deleted.
   *
   * @public
   */
  ExpirationTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeRemediationExceptionsResponse {
  /**
   * Returns a list of remediation exception objects.
   *
   * @public
   */
  RemediationExceptions?: RemediationException[] | undefined;

  /**
   * The `nextToken` string returned in a previous request that you use to request the next page of results in a paginated response.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeRemediationExecutionStatusRequest {
  /**
   * The name of the Config rule.
   *
   * @public
   */
  ConfigRuleName: string | undefined;

  /**
   * A list of resource keys to be processed with the current request. Each element in the list consists of the resource type and resource ID.
   *
   * @public
   */
  ResourceKeys?: ResourceKey[] | undefined;

  /**
   * The maximum number of RemediationExecutionStatuses returned on each page. The default is maximum. If you specify 0, Config uses the default.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * The `nextToken` string returned on a previous page that you use to get the next page of results in a paginated response.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Name of the step from the SSM document.
 *
 * @public
 */
export interface RemediationExecutionStep {
  /**
   * The details of the step.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The valid status of the step.
   *
   * @public
   */
  State?: RemediationExecutionStepState | undefined;

  /**
   * An error message if the step was interrupted during execution.
   *
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * The time when the step started.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The time when the step stopped.
   *
   * @public
   */
  StopTime?: Date | undefined;
}

/**
 * Provides details of the current status of the invoked remediation action for that resource.
 *
 * @public
 */
export interface RemediationExecutionStatus {
  /**
   * The details that identify a resource within Config, including the resource type and resource ID.
   *
   * @public
   */
  ResourceKey?: ResourceKey | undefined;

  /**
   * ENUM of the values.
   *
   * @public
   */
  State?: RemediationExecutionState | undefined;

  /**
   * Details of every step.
   *
   * @public
   */
  StepDetails?: RemediationExecutionStep[] | undefined;

  /**
   * Start time when the remediation was executed.
   *
   * @public
   */
  InvocationTime?: Date | undefined;

  /**
   * The time when the remediation execution was last updated.
   *
   * @public
   */
  LastUpdatedTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeRemediationExecutionStatusResponse {
  /**
   * Returns a list of remediation execution statuses objects.
   *
   * @public
   */
  RemediationExecutionStatuses?: RemediationExecutionStatus[] | undefined;

  /**
   * The `nextToken` string returned on a previous page that you use to get the next page of results in a paginated response.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeRetentionConfigurationsRequest {
  /**
   * A list of names of retention configurations for which you want details. If you do not specify a name, Config returns details for all the retention configurations for that account.
   *
   * > **Note:** Currently, Config supports only one retention configuration per region in your account.
   *
   * @public
   */
  RetentionConfigurationNames?: string[] | undefined;

  /**
   * The `nextToken` string returned on a previous page that you use to get the next page of results in a paginated response.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * An object with the name of the retention configuration and the retention period in days. The object stores the configuration for data retention in Config.
 *
 * @public
 */
export interface RetentionConfiguration {
  /**
   * The name of the retention configuration object.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Number of days Config stores your historical information.
   *
   * > **Note:** Currently, only applicable to the configuration item history.
   *
   * @public
   */
  RetentionPeriodInDays: number | undefined;
}

/**
 * @public
 */
export interface DescribeRetentionConfigurationsResponse {
  /**
   * Returns a retention configuration object.
   *
   * @public
   */
  RetentionConfigurations?: RetentionConfiguration[] | undefined;

  /**
   * The `nextToken` string returned on a previous page that you use to get the next page of results in a paginated response.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DisassociateResourceTypesRequest {
  /**
   * The Amazon Resource Name (ARN) of the specified configuration recorder.
   *
   * @public
   */
  ConfigurationRecorderArn: string | undefined;

  /**
   * The list of resource types you want to remove from the recording group of the specified configuration recorder.
   *
   * @public
   */
  ResourceTypes: ResourceType[] | undefined;
}

/**
 * @public
 */
export interface DisassociateResourceTypesResponse {
  /**
   * Records configuration changes to the resource types in scope.
   *
   * For more information about the configuration recorder, see [**Working with the Configuration Recorder**](https://docs.aws.amazon.com/config/latest/developerguide/stop-start-recorder.html) in the *Config Developer Guide*.
   *
   * @public
   */
  ConfigurationRecorder: ConfigurationRecorder | undefined;
}

/**
 * Identifies an Amazon Web Services resource and indicates whether it complies with the Config rule that it was evaluated against.
 *
 * @public
 */
export interface Evaluation {
  /**
   * The type of Amazon Web Services resource that was evaluated.
   *
   * @public
   */
  ComplianceResourceType: string | undefined;

  /**
   * The ID of the Amazon Web Services resource that was evaluated.
   *
   * @public
   */
  ComplianceResourceId: string | undefined;

  /**
   * Indicates whether the Amazon Web Services resource complies with the Config rule that it was evaluated against.
   *
   * For the `Evaluation` data type, Config supports only the `COMPLIANT`, `NON_COMPLIANT`, and `NOT_APPLICABLE` values. Config does not support the `INSUFFICIENT_DATA` value for this data type.
   *
   * Similarly, Config does not accept `INSUFFICIENT_DATA` as the value for `ComplianceType` from a `PutEvaluations` request. For example, an Lambda function for a custom Config rule cannot pass an `INSUFFICIENT_DATA` value to Config.
   *
   * @public
   */
  ComplianceType: ComplianceType | undefined;

  /**
   * Supplementary information about how the evaluation determined the compliance.
   *
   * @public
   */
  Annotation?: string | undefined;

  /**
   * The time of the event in Config that triggered the evaluation. For event-based evaluations, the time indicates when Config created the configuration item that triggered the evaluation. For periodic evaluations, the time indicates when Config triggered the evaluation at the frequency that you specified (for example, every 24 hours).
   *
   * @public
   */
  OrderingTimestamp: Date | undefined;
}

/**
 * Use EvaluationContext to group independently initiated proactive resource evaluations. For example, CFN Stack. If you want to check just a resource definition, you do not need to provide evaluation context.
 *
 * @public
 */
export interface EvaluationContext {
  /**
   * A unique EvaluationContextIdentifier ID for an EvaluationContext.
   *
   * @public
   */
  EvaluationContextIdentifier?: string | undefined;
}

/**
 * The details of an Config evaluation. Provides the Amazon Web Services resource that was evaluated, the compliance of the resource, related time stamps, and supplementary information.
 *
 * @public
 */
export interface EvaluationResult {
  /**
   * Uniquely identifies the evaluation result.
   *
   * @public
   */
  EvaluationResultIdentifier?: EvaluationResultIdentifier | undefined;

  /**
   * Indicates whether the Amazon Web Services resource complies with the Config rule that evaluated it.
   *
   * For the `EvaluationResult` data type, Config supports only the `COMPLIANT`, `NON_COMPLIANT`, and `NOT_APPLICABLE` values. Config does not support the `INSUFFICIENT_DATA` value for the `EvaluationResult` data type.
   *
   * @public
   */
  ComplianceType?: ComplianceType | undefined;

  /**
   * The time when Config recorded the evaluation result.
   *
   * @public
   */
  ResultRecordedTime?: Date | undefined;

  /**
   * The time when the Config rule evaluated the Amazon Web Services resource.
   *
   * @public
   */
  ConfigRuleInvokedTime?: Date | undefined;

  /**
   * Supplementary information about how the evaluation determined the compliance.
   *
   * @public
   */
  Annotation?: string | undefined;

  /**
   * An encrypted token that associates an evaluation with an Config rule. The token identifies the rule, the Amazon Web Services resource being evaluated, and the event that triggered the evaluation.
   *
   * @public
   */
  ResultToken?: string | undefined;
}

/**
 * Returns status details of an evaluation.
 *
 * @public
 */
export interface EvaluationStatus {
  /**
   * The status of an execution. The valid values are In_Progress, Succeeded or Failed.
   *
   * @public
   */
  Status: ResourceEvaluationStatus | undefined;

  /**
   * An explanation for failed execution status.
   *
   * @public
   */
  FailureReason?: string | undefined;
}

/**
 * Identifies an Amazon Web Services resource and indicates whether it complies with the Config rule that it was evaluated against.
 *
 * @public
 */
export interface ExternalEvaluation {
  /**
   * The evaluated compliance resource type. Config accepts `AWS::::Account` resource type.
   *
   * @public
   */
  ComplianceResourceType: string | undefined;

  /**
   * The evaluated compliance resource ID. Config accepts only Amazon Web Services account ID.
   *
   * @public
   */
  ComplianceResourceId: string | undefined;

  /**
   * The compliance of the Amazon Web Services resource. The valid values are `COMPLIANT, NON_COMPLIANT,` and `NOT_APPLICABLE`.
   *
   * @public
   */
  ComplianceType: ComplianceType | undefined;

  /**
   * Supplementary information about the reason of compliance. For example, this task was completed on a specific date.
   *
   * @public
   */
  Annotation?: string | undefined;

  /**
   * The time when the compliance was recorded.
   *
   * @public
   */
  OrderingTimestamp: Date | undefined;
}

/**
 * List of each of the failed remediations with specific reasons.
 *
 * @public
 */
export interface FailedRemediationBatch {
  /**
   * Returns a failure message. For example, the resource is already compliant.
   *
   * @public
   */
  FailureMessage?: string | undefined;

  /**
   * Returns remediation configurations of the failed items.
   *
   * @public
   */
  FailedItems?: RemediationConfiguration[] | undefined;
}

/**
 * List of each of the failed remediation exceptions with specific reasons.
 *
 * @public
 */
export interface FailedRemediationExceptionBatch {
  /**
   * Returns a failure message. For example, the auto-remediation has failed.
   *
   * @public
   */
  FailureMessage?: string | undefined;

  /**
   * Returns remediation exception resource key object of the failed items.
   *
   * @public
   */
  FailedItems?: RemediationException[] | undefined;
}

/**
 * Details about the fields such as name of the field.
 *
 * @public
 */
export interface FieldInfo {
  /**
   * Name of the field.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * @public
 */
export interface GetAggregateComplianceDetailsByConfigRuleRequest {
  /**
   * The name of the configuration aggregator.
   *
   * @public
   */
  ConfigurationAggregatorName: string | undefined;

  /**
   * The name of the Config rule for which you want compliance information.
   *
   * @public
   */
  ConfigRuleName: string | undefined;

  /**
   * The 12-digit account ID of the source account.
   *
   * @public
   */
  AccountId: string | undefined;

  /**
   * The source region from where the data is aggregated.
   *
   * @public
   */
  AwsRegion: string | undefined;

  /**
   * The resource compliance status.
   *
   * > **Note:** For the `GetAggregateComplianceDetailsByConfigRuleRequest` data type, Config supports only the `COMPLIANT` and `NON_COMPLIANT`. Config does not support the `NOT_APPLICABLE` and `INSUFFICIENT_DATA` values.
   *
   * @public
   */
  ComplianceType?: ComplianceType | undefined;

  /**
   * The maximum number of evaluation results returned on each page. The default is 50. You cannot specify a number greater than 100. If you specify 0, Config uses the default.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * The `nextToken` string returned on a previous page that you use to get the next page of results in a paginated response.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetAggregateComplianceDetailsByConfigRuleResponse {
  /**
   * Returns an AggregateEvaluationResults object.
   *
   * @public
   */
  AggregateEvaluationResults?: AggregateEvaluationResult[] | undefined;

  /**
   * The `nextToken` string returned on a previous page that you use to get the next page of results in a paginated response.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetAggregateConfigRuleComplianceSummaryRequest {
  /**
   * The name of the configuration aggregator.
   *
   * @public
   */
  ConfigurationAggregatorName: string | undefined;

  /**
   * Filters the results based on the ConfigRuleComplianceSummaryFilters object.
   *
   * @public
   */
  Filters?: ConfigRuleComplianceSummaryFilters | undefined;

  /**
   * Groups the result based on ACCOUNT_ID or AWS_REGION.
   *
   * @public
   */
  GroupByKey?: ConfigRuleComplianceSummaryGroupKey | undefined;

  /**
   * The maximum number of evaluation results returned on each page. The default is 1000. You cannot specify a number greater than 1000. If you specify 0, Config uses the default.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * The `nextToken` string returned on a previous page that you use to get the next page of results in a paginated response.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetAggregateConfigRuleComplianceSummaryResponse {
  /**
   * Groups the result based on ACCOUNT_ID or AWS_REGION.
   *
   * @public
   */
  GroupByKey?: string | undefined;

  /**
   * Returns a list of AggregateComplianceCounts object.
   *
   * @public
   */
  AggregateComplianceCounts?: AggregateComplianceCount[] | undefined;

  /**
   * The `nextToken` string returned on a previous page that you use to get the next page of results in a paginated response.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetAggregateConformancePackComplianceSummaryRequest {
  /**
   * The name of the configuration aggregator.
   *
   * @public
   */
  ConfigurationAggregatorName: string | undefined;

  /**
   * Filters the results based on the `AggregateConformancePackComplianceSummaryFilters` object.
   *
   * @public
   */
  Filters?: AggregateConformancePackComplianceSummaryFilters | undefined;

  /**
   * Groups the result based on Amazon Web Services account ID or Amazon Web Services Region.
   *
   * @public
   */
  GroupByKey?: AggregateConformancePackComplianceSummaryGroupKey | undefined;

  /**
   * The maximum number of results returned on each page. The default is maximum. If you specify 0, Config uses the default.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * The `nextToken` string returned on a previous page that you use to get the next page of results in a paginated response.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetAggregateConformancePackComplianceSummaryResponse {
  /**
   * Returns a list of `AggregateConformancePackComplianceSummary` object.
   *
   * @public
   */
  AggregateConformancePackComplianceSummaries?: AggregateConformancePackComplianceSummary[] | undefined;

  /**
   * Groups the result based on Amazon Web Services account ID or Amazon Web Services Region.
   *
   * @public
   */
  GroupByKey?: string | undefined;

  /**
   * The `nextToken` string returned on a previous page that you use to get the next page of results in a paginated response.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Filters the resource count based on account ID, region, and resource type.
 *
 * @public
 */
export interface ResourceCountFilters {
  /**
   * The type of the Amazon Web Services resource.
   *
   * @public
   */
  ResourceType?: ResourceType | undefined;

  /**
   * The 12-digit ID of the account.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The region where the account is located.
   *
   * @public
   */
  Region?: string | undefined;
}

/**
 * @public
 */
export interface GetAggregateDiscoveredResourceCountsRequest {
  /**
   * The name of the configuration aggregator.
   *
   * @public
   */
  ConfigurationAggregatorName: string | undefined;

  /**
   * Filters the results based on the `ResourceCountFilters` object.
   *
   * @public
   */
  Filters?: ResourceCountFilters | undefined;

  /**
   * The key to group the resource counts.
   *
   * @public
   */
  GroupByKey?: ResourceCountGroupKey | undefined;

  /**
   * The maximum number of GroupedResourceCount objects returned on each page. The default is 1000. You cannot specify a number greater than 1000. If you specify 0, Config uses the default.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * The `nextToken` string returned on a previous page that you use to get the next page of results in a paginated response.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * The count of resources that are grouped by the group name.
 *
 * @public
 */
export interface GroupedResourceCount {
  /**
   * The name of the group that can be region, account ID, or resource type. For example, region1, region2 if the region was chosen as `GroupByKey`.
   *
   * @public
   */
  GroupName: string | undefined;

  /**
   * The number of resources in the group.
   *
   * @public
   */
  ResourceCount: number | undefined;
}

/**
 * @public
 */
export interface GetAggregateDiscoveredResourceCountsResponse {
  /**
   * The total number of resources that are present in an aggregator with the filters that you provide.
   *
   * @public
   */
  TotalDiscoveredResources: number | undefined;

  /**
   * The key passed into the request object. If `GroupByKey` is not provided, the result will be empty.
   *
   * @public
   */
  GroupByKey?: string | undefined;

  /**
   * Returns a list of GroupedResourceCount objects.
   *
   * @public
   */
  GroupedResourceCounts?: GroupedResourceCount[] | undefined;

  /**
   * The `nextToken` string returned on a previous page that you use to get the next page of results in a paginated response.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetAggregateResourceConfigRequest {
  /**
   * The name of the configuration aggregator.
   *
   * @public
   */
  ConfigurationAggregatorName: string | undefined;

  /**
   * An object that identifies aggregate resource.
   *
   * @public
   */
  ResourceIdentifier: AggregateResourceIdentifier | undefined;
}

/**
 * @public
 */
export interface GetAggregateResourceConfigResponse {
  /**
   * Returns a `ConfigurationItem` object.
   *
   * @public
   */
  ConfigurationItem?: ConfigurationItem | undefined;
}

/**
 * @public
 */
export interface GetComplianceDetailsByConfigRuleRequest {
  /**
   * The name of the Config rule for which you want compliance information.
   *
   * @public
   */
  ConfigRuleName: string | undefined;

  /**
   * Filters the results by compliance.
   *
   * `INSUFFICIENT_DATA` is a valid `ComplianceType` that is returned when an Config rule cannot be evaluated. However, `INSUFFICIENT_DATA` cannot be used as a `ComplianceType` for filtering results.
   *
   * @public
   */
  ComplianceTypes?: ComplianceType[] | undefined;

  /**
   * The maximum number of evaluation results returned on each page. The default is 10. You cannot specify a number greater than 100. If you specify 0, Config uses the default.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * The `nextToken` string returned on a previous page that you use to get the next page of results in a paginated response.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetComplianceDetailsByConfigRuleResponse {
  /**
   * Indicates whether the Amazon Web Services resource complies with the specified Config rule.
   *
   * @public
   */
  EvaluationResults?: EvaluationResult[] | undefined;

  /**
   * The string that you use in a subsequent request to get the next page of results in a paginated response.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetComplianceDetailsByResourceRequest {
  /**
   * The type of the Amazon Web Services resource for which you want compliance information.
   *
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * The ID of the Amazon Web Services resource for which you want compliance information.
   *
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * Filters the results by compliance.
   *
   * `INSUFFICIENT_DATA` is a valid `ComplianceType` that is returned when an Config rule cannot be evaluated. However, `INSUFFICIENT_DATA` cannot be used as a `ComplianceType` for filtering results.
   *
   * @public
   */
  ComplianceTypes?: ComplianceType[] | undefined;

  /**
   * The `nextToken` string returned on a previous page that you use to get the next page of results in a paginated response.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The unique ID of Amazon Web Services resource execution for which you want to retrieve evaluation results.
   *
   * > **Note:** You need to only provide either a `ResourceEvaluationID` or a `ResourceID`and `ResourceType`.
   *
   * @public
   */
  ResourceEvaluationId?: string | undefined;
}

/**
 * @public
 */
export interface GetComplianceDetailsByResourceResponse {
  /**
   * Indicates whether the specified Amazon Web Services resource complies each Config rule.
   *
   * @public
   */
  EvaluationResults?: EvaluationResult[] | undefined;

  /**
   * The string that you use in a subsequent request to get the next page of results in a paginated response.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetComplianceSummaryByConfigRuleResponse {
  /**
   * The number of Config rules that are compliant and the number that are noncompliant, up to a maximum of 25 for each.
   *
   * @public
   */
  ComplianceSummary?: ComplianceSummary | undefined;
}

/**
 * @public
 */
export interface GetComplianceSummaryByResourceTypeRequest {
  /**
   * Specify one or more resource types to get the number of resources that are compliant and the number that are noncompliant for each resource type.
   *
   * For this request, you can specify an Amazon Web Services resource type such as `AWS::EC2::Instance`. You can specify that the resource type is an Amazon Web Services account by specifying `AWS::::Account`.
   *
   * @public
   */
  ResourceTypes?: string[] | undefined;
}

/**
 * @public
 */
export interface GetComplianceSummaryByResourceTypeResponse {
  /**
   * The number of resources that are compliant and the number that are noncompliant. If one or more resource types were provided with the request, the numbers are returned for each resource type. The maximum number returned is 100.
   *
   * @public
   */
  ComplianceSummariesByResourceType?: ComplianceSummaryByResourceType[] | undefined;
}

/**
 * @public
 */
export interface GetConformancePackComplianceDetailsRequest {
  /**
   * Name of the conformance pack.
   *
   * @public
   */
  ConformancePackName: string | undefined;

  /**
   * A `ConformancePackEvaluationFilters` object.
   *
   * @public
   */
  Filters?: ConformancePackEvaluationFilters | undefined;

  /**
   * The maximum number of evaluation results returned on each page. If you do no specify a number, Config uses the default. The default is 100.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * The `nextToken` string returned in a previous request that you use to request the next page of results in a paginated response.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetConformancePackComplianceDetailsResponse {
  /**
   * Name of the conformance pack.
   *
   * @public
   */
  ConformancePackName: string | undefined;

  /**
   * Returns a list of `ConformancePackEvaluationResult` objects.
   *
   * @public
   */
  ConformancePackRuleEvaluationResults?: ConformancePackEvaluationResult[] | undefined;

  /**
   * The `nextToken` string returned in a previous request that you use to request the next page of results in a paginated response.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetConformancePackComplianceSummaryRequest {
  /**
   * Names of conformance packs.
   *
   * @public
   */
  ConformancePackNames: string[] | undefined;

  /**
   * The maximum number of conformance packs returned on each page.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * The nextToken string returned on a previous page that you use to get the next page of results in a paginated response.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetConformancePackComplianceSummaryResponse {
  /**
   * A list of `ConformancePackComplianceSummary` objects.
   *
   * @public
   */
  ConformancePackComplianceSummaryList?: ConformancePackComplianceSummary[] | undefined;

  /**
   * The nextToken string returned on a previous page that you use to get the next page of results in a paginated response.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetConnectorRequest {
  /**
   * The Amazon Resource Name (ARN) of the connector.
   *
   * @public
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface GetConnectorResponse {
  /**
   * The details of the specified connector.
   *
   * @public
   */
  Connector: Connector | undefined;
}

/**
 * @public
 */
export interface GetCustomRulePolicyRequest {
  /**
   * The name of your Config Custom Policy rule.
   *
   * @public
   */
  ConfigRuleName?: string | undefined;
}

/**
 * @public
 */
export interface GetCustomRulePolicyResponse {
  /**
   * The policy definition containing the logic for your Config Custom Policy rule.
   *
   * @public
   */
  PolicyText?: string | undefined;
}

/**
 * @public
 */
export interface GetDiscoveredResourceCountsRequest {
  /**
   * The comma-separated list that specifies the resource types that you want Config to return (for example, `"AWS::EC2::Instance"`, `"AWS::IAM::User"`).
   *
   * If a value for `resourceTypes` is not specified, Config returns all resource types that Config is recording in the region for your account.
   *
   * > **Note:** If the configuration recorder is turned off, Config returns an empty list of ResourceCount objects. If the configuration recorder is not recording a specific resource type (for example, S3 buckets), that resource type is not returned in the list of ResourceCount objects.
   *
   * @public
   */
  resourceTypes?: string[] | undefined;

  /**
   * The maximum number of ResourceCount objects returned on each page. The default is 100. You cannot specify a number greater than 100. If you specify 0, Config uses the default.
   *
   * @public
   */
  limit?: number | undefined;

  /**
   * The `nextToken` string returned on a previous page that you use to get the next page of results in a paginated response.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * An object that contains the resource type and the number of resources.
 *
 * @public
 */
export interface ResourceCount {
  /**
   * The resource type (for example, `"AWS::EC2::Instance"`).
   *
   * @public
   */
  resourceType?: ResourceType | undefined;

  /**
   * The number of resources.
   *
   * @public
   */
  count?: number | undefined;
}

/**
 * @public
 */
export interface GetDiscoveredResourceCountsResponse {
  /**
   * The total number of resources that Config is recording in the region for your account. If you specify resource types in the request, Config returns only the total number of resources for those resource types.
   *
   * **Example**
   *
   * 1. Config is recording three resource types in the US East (Ohio) Region for your account: 25 EC2 instances, 20 IAM users, and 15 S3 buckets, for a total of 60 resources.
   * 2. You make a call to the `GetDiscoveredResourceCounts` action and specify the resource type, `"AWS::EC2::Instances"`, in the request.
   * 3. Config returns 25 for `totalDiscoveredResources`.
   *
   * @public
   */
  totalDiscoveredResources?: number | undefined;

  /**
   * The list of `ResourceCount` objects. Each object is listed in descending order by the number of resources.
   *
   * @public
   */
  resourceCounts?: ResourceCount[] | undefined;

  /**
   * The string that you use in a subsequent request to get the next page of results in a paginated response.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Status filter object to filter results based on specific member account ID or status type for an organization Config rule.
 *
 * @public
 */
export interface StatusDetailFilters {
  /**
   * The 12-digit account ID of the member account within an organization.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * Indicates deployment status for Config rule in the member account. When management account calls `PutOrganizationConfigRule` action for the first time, Config rule status is created in the member account. When management account calls `PutOrganizationConfigRule` action for the second time, Config rule status is updated in the member account. Config rule status is deleted when the management account deletes `OrganizationConfigRule` and disables service access for `config-multiaccountsetup.amazonaws.com`.
   *
   * Config sets the state of the rule to:
   *
   * - `CREATE_SUCCESSFUL` when Config rule has been created in the member account.
   * - `CREATE_IN_PROGRESS` when Config rule is being created in the member account.
   * - `CREATE_FAILED` when Config rule creation has failed in the member account.
   * - `DELETE_FAILED` when Config rule deletion has failed in the member account.
   * - `DELETE_IN_PROGRESS` when Config rule is being deleted in the member account.
   * - `DELETE_SUCCESSFUL` when Config rule has been deleted in the member account.
   * - `UPDATE_SUCCESSFUL` when Config rule has been updated in the member account.
   * - `UPDATE_IN_PROGRESS` when Config rule is being updated in the member account.
   * - `UPDATE_FAILED` when Config rule deletion has failed in the member account.
   *
   * @public
   */
  MemberAccountRuleStatus?: MemberAccountRuleStatus | undefined;
}

/**
 * @public
 */
export interface GetOrganizationConfigRuleDetailedStatusRequest {
  /**
   * The name of your organization Config rule for which you want status details for member accounts.
   *
   * @public
   */
  OrganizationConfigRuleName: string | undefined;

  /**
   * A `StatusDetailFilters` object.
   *
   * @public
   */
  Filters?: StatusDetailFilters | undefined;

  /**
   * The maximum number of `OrganizationConfigRuleDetailedStatus` returned on each page. If you do not specify a number, Config uses the default. The default is 100.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * The `nextToken` string returned on a previous page that you use to get the next page of results in a paginated response.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Organization Config rule creation or deletion status in each member account. This includes the name of the rule, the status, error code and error message when the rule creation or deletion failed.
 *
 * @public
 */
export interface MemberAccountStatus {
  /**
   * The 12-digit account ID of a member account.
   *
   * @public
   */
  AccountId: string | undefined;

  /**
   * The name of Config rule deployed in the member account.
   *
   * @public
   */
  ConfigRuleName: string | undefined;

  /**
   * Indicates deployment status for Config rule in the member account. When management account calls `PutOrganizationConfigRule` action for the first time, Config rule status is created in the member account. When management account calls `PutOrganizationConfigRule` action for the second time, Config rule status is updated in the member account. Config rule status is deleted when the management account deletes `OrganizationConfigRule` and disables service access for `config-multiaccountsetup.amazonaws.com`.
   *
   * Config sets the state of the rule to:
   *
   * - `CREATE_SUCCESSFUL` when Config rule has been created in the member account.
   * - `CREATE_IN_PROGRESS` when Config rule is being created in the member account.
   * - `CREATE_FAILED` when Config rule creation has failed in the member account.
   * - `DELETE_FAILED` when Config rule deletion has failed in the member account.
   * - `DELETE_IN_PROGRESS` when Config rule is being deleted in the member account.
   * - `DELETE_SUCCESSFUL` when Config rule has been deleted in the member account.
   * - `UPDATE_SUCCESSFUL` when Config rule has been updated in the member account.
   * - `UPDATE_IN_PROGRESS` when Config rule is being updated in the member account.
   * - `UPDATE_FAILED` when Config rule deletion has failed in the member account.
   *
   * @public
   */
  MemberAccountRuleStatus: MemberAccountRuleStatus | undefined;

  /**
   * An error code that is returned when Config rule creation or deletion failed in the member account.
   *
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * An error message indicating that Config rule account creation or deletion has failed due to an error in the member account.
   *
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * The timestamp of the last status update.
   *
   * @public
   */
  LastUpdateTime?: Date | undefined;
}

/**
 * @public
 */
export interface GetOrganizationConfigRuleDetailedStatusResponse {
  /**
   * A list of `MemberAccountStatus` objects.
   *
   * @public
   */
  OrganizationConfigRuleDetailedStatus?: MemberAccountStatus[] | undefined;

  /**
   * The `nextToken` string returned on a previous page that you use to get the next page of results in a paginated response.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Status filter object to filter results based on specific member account ID or status type for an organization conformance pack.
 *
 * @public
 */
export interface OrganizationResourceDetailedStatusFilters {
  /**
   * The 12-digit account ID of the member account within an organization.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * Indicates deployment status for conformance pack in a member account. When management account calls `PutOrganizationConformancePack` action for the first time, conformance pack status is created in the member account. When management account calls `PutOrganizationConformancePack` action for the second time, conformance pack status is updated in the member account. Conformance pack status is deleted when the management account deletes `OrganizationConformancePack` and disables service access for `config-multiaccountsetup.amazonaws.com`.
   *
   * Config sets the state of the conformance pack to:
   *
   * - `CREATE_SUCCESSFUL` when conformance pack has been created in the member account.
   * - `CREATE_IN_PROGRESS` when conformance pack is being created in the member account.
   * - `CREATE_FAILED` when conformance pack creation has failed in the member account.
   * - `DELETE_FAILED` when conformance pack deletion has failed in the member account.
   * - `DELETE_IN_PROGRESS` when conformance pack is being deleted in the member account.
   * - `DELETE_SUCCESSFUL` when conformance pack has been deleted in the member account.
   * - `UPDATE_SUCCESSFUL` when conformance pack has been updated in the member account.
   * - `UPDATE_IN_PROGRESS` when conformance pack is being updated in the member account.
   * - `UPDATE_FAILED` when conformance pack deletion has failed in the member account.
   *
   * @public
   */
  Status?: OrganizationResourceDetailedStatus | undefined;
}

/**
 * @public
 */
export interface GetOrganizationConformancePackDetailedStatusRequest {
  /**
   * The name of organization conformance pack for which you want status details for member accounts.
   *
   * @public
   */
  OrganizationConformancePackName: string | undefined;

  /**
   * An `OrganizationResourceDetailedStatusFilters` object.
   *
   * @public
   */
  Filters?: OrganizationResourceDetailedStatusFilters | undefined;

  /**
   * The maximum number of `OrganizationConformancePackDetailedStatuses` returned on each page. If you do not specify a number, Config uses the default. The default is 100.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * The nextToken string returned on a previous page that you use to get the next page of results in a paginated response.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Organization conformance pack creation or deletion status in each member account. This includes the name of the conformance pack, the status, error code and error message when the conformance pack creation or deletion failed.
 *
 * @public
 */
export interface OrganizationConformancePackDetailedStatus {
  /**
   * The 12-digit account ID of a member account.
   *
   * @public
   */
  AccountId: string | undefined;

  /**
   * The name of conformance pack deployed in the member account.
   *
   * @public
   */
  ConformancePackName: string | undefined;

  /**
   * Indicates deployment status for conformance pack in a member account. When management account calls `PutOrganizationConformancePack` action for the first time, conformance pack status is created in the member account. When management account calls `PutOrganizationConformancePack` action for the second time, conformance pack status is updated in the member account. Conformance pack status is deleted when the management account deletes `OrganizationConformancePack` and disables service access for `config-multiaccountsetup.amazonaws.com`.
   *
   * Config sets the state of the conformance pack to:
   *
   * - `CREATE_SUCCESSFUL` when conformance pack has been created in the member account.
   * - `CREATE_IN_PROGRESS` when conformance pack is being created in the member account.
   * - `CREATE_FAILED` when conformance pack creation has failed in the member account.
   * - `DELETE_FAILED` when conformance pack deletion has failed in the member account.
   * - `DELETE_IN_PROGRESS` when conformance pack is being deleted in the member account.
   * - `DELETE_SUCCESSFUL` when conformance pack has been deleted in the member account.
   * - `UPDATE_SUCCESSFUL` when conformance pack has been updated in the member account.
   * - `UPDATE_IN_PROGRESS` when conformance pack is being updated in the member account.
   * - `UPDATE_FAILED` when conformance pack deletion has failed in the member account.
   *
   * @public
   */
  Status: OrganizationResourceDetailedStatus | undefined;

  /**
   * An error code that is returned when conformance pack creation or deletion failed in the member account.
   *
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * An error message indicating that conformance pack account creation or deletion has failed due to an error in the member account.
   *
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * The timestamp of the last status update.
   *
   * @public
   */
  LastUpdateTime?: Date | undefined;
}

/**
 * @public
 */
export interface GetOrganizationConformancePackDetailedStatusResponse {
  /**
   * A list of `OrganizationConformancePackDetailedStatus` objects.
   *
   * @public
   */
  OrganizationConformancePackDetailedStatuses?: OrganizationConformancePackDetailedStatus[] | undefined;

  /**
   * The nextToken string returned on a previous page that you use to get the next page of results in a paginated response.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetOrganizationCustomRulePolicyRequest {
  /**
   * The name of your organization Config Custom Policy rule.
   *
   * @public
   */
  OrganizationConfigRuleName: string | undefined;
}

/**
 * @public
 */
export interface GetOrganizationCustomRulePolicyResponse {
  /**
   * The policy definition containing the logic for your organization Config Custom Policy rule.
   *
   * @public
   */
  PolicyText?: string | undefined;
}

/**
 * The input for the GetResourceConfigHistory action.
 *
 * @public
 */
export interface GetResourceConfigHistoryRequest {
  /**
   * The resource type.
   *
   * @public
   */
  resourceType: ResourceType | undefined;

  /**
   * The ID of the resource (for example., `sg-xxxxxx`).
   *
   * @public
   */
  resourceId: string | undefined;

  /**
   * The chronologically latest time in the time range for which the history requested. If not specified, current time is taken.
   *
   * @public
   */
  laterTime?: Date | undefined;

  /**
   * The chronologically earliest time in the time range for which the history requested. If not specified, the action returns paginated results that contain configuration items that start when the first configuration item was recorded.
   *
   * @public
   */
  earlierTime?: Date | undefined;

  /**
   * The chronological order for configuration items listed. By default, the results are listed in reverse chronological order.
   *
   * @public
   */
  chronologicalOrder?: ChronologicalOrder | undefined;

  /**
   * The maximum number of configuration items returned on each page. The default is 10. You cannot specify a number greater than 100. If you specify 0, Config uses the default.
   *
   * @public
   */
  limit?: number | undefined;

  /**
   * The `nextToken` string returned on a previous page that you use to get the next page of results in a paginated response.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * The output for the GetResourceConfigHistory action.
 *
 * @public
 */
export interface GetResourceConfigHistoryResponse {
  /**
   * An array of `ConfigurationItems` Objects. Contatins the configuration history for one or more resources.
   *
   * @public
   */
  configurationItems?: ConfigurationItem[] | undefined;

  /**
   * The string that you use in a subsequent request to get the next page of results in a paginated response.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetResourceEvaluationSummaryRequest {
  /**
   * The unique `ResourceEvaluationId` of Amazon Web Services resource execution for which you want to retrieve the evaluation summary.
   *
   * @public
   */
  ResourceEvaluationId: string | undefined;
}

/**
 * Returns information about the resource being evaluated.
 *
 * @public
 */
export interface ResourceDetails {
  /**
   * A unique resource ID for an evaluation.
   *
   * @public
   */
  ResourceId: string | undefined;

  /**
   * The type of resource being evaluated.
   *
   * @public
   */
  ResourceType: string | undefined;

  /**
   * The resource definition to be evaluated as per the resource configuration schema type.
   *
   * @public
   */
  ResourceConfiguration: string | undefined;

  /**
   * The schema type of the resource configuration.
   *
   * > **Note:**
   * >
   * > You can find the [Resource type schema](https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-type-schema.html), or `CFN_RESOURCE_SCHEMA`, in "*Amazon Web Services public extensions*" within the CloudFormation registry or with the following CLI commmand: `aws cloudformation describe-type --type-name "AWS::S3::Bucket" --type RESOURCE`.
   * >
   * > For more information, see [Managing extensions through the CloudFormation registry](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry.html#registry-view) and [Amazon Web Services resource and property types reference](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html) in the CloudFormation User Guide.
   *
   * @public
   */
  ResourceConfigurationSchemaType?: ResourceConfigurationSchemaType | undefined;
}

/**
 * @public
 */
export interface GetResourceEvaluationSummaryResponse {
  /**
   * The unique `ResourceEvaluationId` of Amazon Web Services resource execution for which you want to retrieve the evaluation summary.
   *
   * @public
   */
  ResourceEvaluationId?: string | undefined;

  /**
   * Lists results of the mode that you requested to retrieve the resource evaluation summary. The valid values are Detective or Proactive.
   *
   * @public
   */
  EvaluationMode?: EvaluationMode | undefined;

  /**
   * Returns an `EvaluationStatus` object.
   *
   * @public
   */
  EvaluationStatus?: EvaluationStatus | undefined;

  /**
   * The start timestamp when Config rule starts evaluating compliance for the provided resource details.
   *
   * @public
   */
  EvaluationStartTimestamp?: Date | undefined;

  /**
   * The compliance status of the resource evaluation summary.
   *
   * @public
   */
  Compliance?: ComplianceType | undefined;

  /**
   * Returns an `EvaluationContext` object.
   *
   * @public
   */
  EvaluationContext?: EvaluationContext | undefined;

  /**
   * Returns a `ResourceDetails` object.
   *
   * @public
   */
  ResourceDetails?: ResourceDetails | undefined;
}

/**
 * @public
 */
export interface GetStoredQueryRequest {
  /**
   * The name of the query.
   *
   * @public
   */
  QueryName: string | undefined;
}

/**
 * Provides the details of a stored query.
 *
 * @public
 */
export interface StoredQuery {
  /**
   * The ID of the query.
   *
   * @public
   */
  QueryId?: string | undefined;

  /**
   * Amazon Resource Name (ARN) of the query. For example, arn:partition:service:region:account-id:resource-type/resource-name/resource-id.
   *
   * @public
   */
  QueryArn?: string | undefined;

  /**
   * The name of the query.
   *
   * @public
   */
  QueryName: string | undefined;

  /**
   * A unique description for the query.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The expression of the query. For example, `SELECT resourceId, resourceType, supplementaryConfiguration.BucketVersioningConfiguration.status WHERE resourceType = 'AWS::S3::Bucket' AND supplementaryConfiguration.BucketVersioningConfiguration.status = 'Off'.`
   *
   * @public
   */
  Expression?: string | undefined;
}

/**
 * @public
 */
export interface GetStoredQueryResponse {
  /**
   * Returns a `StoredQuery` object.
   *
   * @public
   */
  StoredQuery?: StoredQuery | undefined;
}

/**
 * Filters the results by resource account ID, region, resource ID, and resource name.
 *
 * @public
 */
export interface ResourceFilters {
  /**
   * The 12-digit source account ID.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The ID of the resource.
   *
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * The name of the resource.
   *
   * @public
   */
  ResourceName?: string | undefined;

  /**
   * The source region.
   *
   * @public
   */
  Region?: string | undefined;
}

/**
 * @public
 */
export interface ListAggregateDiscoveredResourcesRequest {
  /**
   * The name of the configuration aggregator.
   *
   * @public
   */
  ConfigurationAggregatorName: string | undefined;

  /**
   * The type of resources that you want Config to list in the response.
   *
   * @public
   */
  ResourceType: ResourceType | undefined;

  /**
   * Filters the results based on the `ResourceFilters` object.
   *
   * @public
   */
  Filters?: ResourceFilters | undefined;

  /**
   * The maximum number of resource identifiers returned on each page. You cannot specify a number greater than 100. If you specify 0, Config uses the default.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * The `nextToken` string returned on a previous page that you use to get the next page of results in a paginated response.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAggregateDiscoveredResourcesResponse {
  /**
   * Returns a list of `ResourceIdentifiers` objects.
   *
   * @public
   */
  ResourceIdentifiers?: AggregateResourceIdentifier[] | undefined;

  /**
   * The `nextToken` string returned on a previous page that you use to get the next page of results in a paginated response.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListConfigurationRecordersRequest {
  /**
   * Filters the results based on a list of `ConfigurationRecorderFilter` objects that you specify.
   *
   * @public
   */
  Filters?: ConfigurationRecorderFilter[] | undefined;

  /**
   * The maximum number of results to include in the response.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The `NextToken` string returned on a previous page that you use to get the next page of results in a paginated response.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListConfigurationRecordersResponse {
  /**
   * A list of `ConfigurationRecorderSummary` objects that includes.
   *
   * @public
   */
  ConfigurationRecorderSummaries: ConfigurationRecorderSummary[] | undefined;

  /**
   * The `NextToken` string returned on a previous page that you use to get the next page of results in a paginated response.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListConformancePackComplianceScoresRequest {
  /**
   * Filters the results based on the `ConformancePackComplianceScoresFilters`.
   *
   * @public
   */
  Filters?: ConformancePackComplianceScoresFilters | undefined;

  /**
   * Determines the order in which conformance pack compliance scores are sorted. Either in ascending or descending order.
   *
   * By default, conformance pack compliance scores are sorted in alphabetical order by name of the conformance pack. Conformance pack compliance scores are sorted in reverse alphabetical order if you enter `DESCENDING`.
   *
   * You can sort conformance pack compliance scores by the numerical value of the compliance score by entering `SCORE` in the `SortBy` action. When compliance scores are sorted by `SCORE`, conformance packs with a compliance score of `INSUFFICIENT_DATA` will be last when sorting by ascending order and first when sorting by descending order.
   *
   * @public
   */
  SortOrder?: SortOrder | undefined;

  /**
   * Sorts your conformance pack compliance scores in either ascending or descending order, depending on `SortOrder`.
   *
   * By default, conformance pack compliance scores are sorted in alphabetical order by name of the conformance pack. Enter `SCORE`, to sort conformance pack compliance scores by the numerical value of the compliance score.
   *
   * @public
   */
  SortBy?: SortBy | undefined;

  /**
   * The maximum number of conformance pack compliance scores returned on each page.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * The `nextToken` string in a prior request that you can use to get the paginated response for the next set of conformance pack compliance scores.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListConformancePackComplianceScoresResponse {
  /**
   * The `nextToken` string that you can use to get the next page of results in a paginated response.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A list of `ConformancePackComplianceScore` objects.
   *
   * @public
   */
  ConformancePackComplianceScores: ConformancePackComplianceScore[] | undefined;
}

/**
 * @public
 */
export interface ListConnectorsRequest {
  /**
   * The maximum number of results to include in the response.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The `NextToken` string returned on a previous page that you use to get the next page of results in a paginated response.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Filters the results based on a list of `ConnectorFilter` objects that you specify.
   *
   * @public
   */
  Filters?: ConnectorFilter[] | undefined;
}

/**
 * @public
 */
export interface ListConnectorsResponse {
  /**
   * A list of `ConnectorSummary` objects.
   *
   * @public
   */
  ConnectorSummaries: ConnectorSummary[] | undefined;

  /**
   * The `NextToken` string returned on a previous page that you use to get the next page of results in a paginated response.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDiscoveredResourcesRequest {
  /**
   * The type of resources that you want Config to list in the response.
   *
   * @public
   */
  resourceType: ResourceType | undefined;

  /**
   * The IDs of only those resources that you want Config to list in the response. If you do not specify this parameter, Config lists all resources of the specified type that it has discovered. You can list a minimum of 1 resourceID and a maximum of 20 resourceIds.
   *
   * @public
   */
  resourceIds?: string[] | undefined;

  /**
   * The custom name of only those resources that you want Config to list in the response. If you do not specify this parameter, Config lists all resources of the specified type that it has discovered.
   *
   * @public
   */
  resourceName?: string | undefined;

  /**
   * The maximum number of resource identifiers returned on each page. The default is 100. You cannot specify a number greater than 100. If you specify 0, Config uses the default.
   *
   * @public
   */
  limit?: number | undefined;

  /**
   * Specifies whether Config includes deleted resources in the results. By default, deleted resources are not included.
   *
   * @public
   */
  includeDeletedResources?: boolean | undefined;

  /**
   * The `nextToken` string returned on a previous page that you use to get the next page of results in a paginated response.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * The details that identify a resource that is discovered by Config, including the resource type, ID, and (if available) the custom resource name.
 *
 * @public
 */
export interface ResourceIdentifier {
  /**
   * The type of resource.
   *
   * @public
   */
  resourceType?: ResourceType | undefined;

  /**
   * The ID of the resource (for example, `sg-xxxxxx`).
   *
   * @public
   */
  resourceId?: string | undefined;

  /**
   * The custom name of the resource (if available).
   *
   * @public
   */
  resourceName?: string | undefined;

  /**
   * The time that the resource was deleted.
   *
   * @public
   */
  resourceDeletionTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListDiscoveredResourcesResponse {
  /**
   * The details that identify a resource that is discovered by Config, including the resource type, ID, and (if available) the custom resource name.
   *
   * @public
   */
  resourceIdentifiers?: ResourceIdentifier[] | undefined;

  /**
   * The string that you use in a subsequent request to get the next page of results in a paginated response.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Filters evaluation results based on start and end times.
 *
 * @public
 */
export interface TimeWindow {
  /**
   * The start time of an execution.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The end time of an execution. The end time must be after the start date.
   *
   * @public
   */
  EndTime?: Date | undefined;
}

/**
 * Returns details of a resource evaluation based on the selected filter.
 *
 * @public
 */
export interface ResourceEvaluationFilters {
  /**
   * Filters all resource evaluations results based on an evaluation mode.
   *
   * > **Important:** Currently, `DECTECTIVE` is not supported as a valid value. Ignore other documentation stating otherwise.
   *
   * @public
   */
  EvaluationMode?: EvaluationMode | undefined;

  /**
   * Returns a `TimeWindow` object.
   *
   * @public
   */
  TimeWindow?: TimeWindow | undefined;

  /**
   * Filters evaluations for a given infrastructure deployment. For example: CFN Stack.
   *
   * @public
   */
  EvaluationContextIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface ListResourceEvaluationsRequest {
  /**
   * Returns a `ResourceEvaluationFilters` object.
   *
   * @public
   */
  Filters?: ResourceEvaluationFilters | undefined;

  /**
   * The maximum number of evaluations returned on each page. The default is 10. You cannot specify a number greater than 100. If you specify 0, Config uses the default.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * The `nextToken` string returned on a previous page that you use to get the next page of results in a paginated response.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Returns details of a resource evaluation.
 *
 * @public
 */
export interface ResourceEvaluation {
  /**
   * The ResourceEvaluationId of a evaluation.
   *
   * @public
   */
  ResourceEvaluationId?: string | undefined;

  /**
   * The mode of an evaluation. The valid values are Detective or Proactive.
   *
   * @public
   */
  EvaluationMode?: EvaluationMode | undefined;

  /**
   * The starting time of an execution.
   *
   * @public
   */
  EvaluationStartTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface ListResourceEvaluationsResponse {
  /**
   * Returns a `ResourceEvaluations` object.
   *
   * @public
   */
  ResourceEvaluations?: ResourceEvaluation[] | undefined;

  /**
   * The `nextToken` string returned on a previous page that you use to get the next page of results in a paginated response.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListStoredQueriesRequest {
  /**
   * The nextToken string returned in a previous request that you use to request the next page of results in a paginated response.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to be returned with a single call.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Returns details of a specific query.
 *
 * @public
 */
export interface StoredQueryMetadata {
  /**
   * The ID of the query.
   *
   * @public
   */
  QueryId: string | undefined;

  /**
   * Amazon Resource Name (ARN) of the query. For example, arn:partition:service:region:account-id:resource-type/resource-name/resource-id.
   *
   * @public
   */
  QueryArn: string | undefined;

  /**
   * The name of the query.
   *
   * @public
   */
  QueryName: string | undefined;

  /**
   * A unique description for the query.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface ListStoredQueriesResponse {
  /**
   * A list of `StoredQueryMetadata` objects.
   *
   * @public
   */
  StoredQueryMetadata?: StoredQueryMetadata[] | undefined;

  /**
   * If the previous paginated request didn't return all of the remaining results, the response object's `NextToken` parameter value is set to a token. To retrieve the next set of results, call this operation again and assign that token to the request object's `NextToken` parameter. If there are no remaining results, the previous response object's `NextToken` parameter is set to `null`.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) that identifies the resource for which to list the tags. The following resources are supported:
   *
   * - `ConfigurationRecorder`
   * - `ConfigRule`
   * - `OrganizationConfigRule`
   * - `ConformancePack`
   * - `OrganizationConformancePack`
   * - `ConfigurationAggregator`
   * - `AggregationAuthorization`
   * - `StoredQuery`
   * - `Connector`
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The maximum number of tags returned on each page. The limit maximum is 50. You cannot specify a number greater than 50. If you specify 0, Config uses the default.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * The `nextToken` string returned on a previous page that you use to get the next page of results in a paginated response.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * The tags for the resource. The metadata that you apply to a resource to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.
 *
 * @public
 */
export interface Tag {
  /**
   * One part of a key-value pair that make up a tag. A key is a general label that acts like a category for more specific tag values.
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * The optional part of a key-value pair that make up a tag. A value acts as a descriptor within a tag category (key).
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * The tags for the resource.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The `nextToken` string returned on a previous page that you use to get the next page of results in a paginated response.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * An object that specifies metadata for your organization's Config Custom Policy rule. The metadata includes the runtime system in use, which accounts have debug logging enabled, and other custom rule metadata, such as resource type, resource ID of Amazon Web Services resource, and organization trigger types that initiate Config to evaluate Amazon Web Services resources against a rule.
 *
 * @public
 */
export interface OrganizationCustomPolicyRuleMetadata {
  /**
   * The description that you provide for your organization Config Custom Policy rule.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The type of notification that initiates Config to run an evaluation for a rule. For Config Custom Policy rules, Config supports change-initiated notification types:
   *
   * - `ConfigurationItemChangeNotification` - Initiates an evaluation when Config delivers a configuration item as a result of a resource change.
   * - `OversizedConfigurationItemChangeNotification` - Initiates an evaluation when Config delivers an oversized configuration item. Config may generate this notification type when a resource changes and the notification exceeds the maximum size allowed by Amazon SNS.
   *
   * @public
   */
  OrganizationConfigRuleTriggerTypes?: OrganizationConfigRuleTriggerTypeNoSN[] | undefined;

  /**
   * A string, in JSON format, that is passed to your organization Config Custom Policy rule.
   *
   * @public
   */
  InputParameters?: string | undefined;

  /**
   * The maximum frequency with which Config runs evaluations for a rule. Your Config Custom Policy rule is triggered when Config delivers the configuration snapshot. For more information, see ConfigSnapshotDeliveryProperties.
   *
   * @public
   */
  MaximumExecutionFrequency?: MaximumExecutionFrequency | undefined;

  /**
   * The type of the Amazon Web Services resource that was evaluated.
   *
   * @public
   */
  ResourceTypesScope?: string[] | undefined;

  /**
   * The ID of the Amazon Web Services resource that was evaluated.
   *
   * @public
   */
  ResourceIdScope?: string | undefined;

  /**
   * One part of a key-value pair that make up a tag. A key is a general label that acts like a category for more specific tag values.
   *
   * @public
   */
  TagKeyScope?: string | undefined;

  /**
   * The optional part of a key-value pair that make up a tag. A value acts as a descriptor within a tag category (key).
   *
   * @public
   */
  TagValueScope?: string | undefined;

  /**
   * The runtime system for your organization Config Custom Policy rules. Guard is a policy-as-code language that allows you to write policies that are enforced by Config Custom Policy rules. For more information about Guard, see the [Guard GitHub Repository](https://github.com/aws-cloudformation/cloudformation-guard).
   *
   * @public
   */
  PolicyRuntime: string | undefined;

  /**
   * The policy definition containing the logic for your organization Config Custom Policy rule.
   *
   * @public
   */
  PolicyText: string | undefined;

  /**
   * A list of accounts that you can enable debug logging for your organization Config Custom Policy rule. List is null when debug logging is enabled for all accounts.
   *
   * @public
   */
  DebugLogDeliveryAccounts?: string[] | undefined;
}

/**
 * @public
 */
export interface PutAggregationAuthorizationRequest {
  /**
   * The 12-digit account ID of the account authorized to aggregate data.
   *
   * @public
   */
  AuthorizedAccountId: string | undefined;

  /**
   * The region authorized to collect aggregated data.
   *
   * @public
   */
  AuthorizedAwsRegion: string | undefined;

  /**
   * An array of tag object.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface PutAggregationAuthorizationResponse {
  /**
   * Returns an AggregationAuthorization object.
   *
   * @public
   */
  AggregationAuthorization?: AggregationAuthorization | undefined;
}

/**
 * @public
 */
export interface PutConfigRuleRequest {
  /**
   * The rule that you want to add to your account.
   *
   * @public
   */
  ConfigRule: ConfigRule | undefined;

  /**
   * An array of tag object.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface PutConfigurationAggregatorRequest {
  /**
   * The name of the configuration aggregator.
   *
   * @public
   */
  ConfigurationAggregatorName: string | undefined;

  /**
   * A list of AccountAggregationSource object.
   *
   * @public
   */
  AccountAggregationSources?: AccountAggregationSource[] | undefined;

  /**
   * An OrganizationAggregationSource object.
   *
   * @public
   */
  OrganizationAggregationSource?: OrganizationAggregationSource | undefined;

  /**
   * An array of tag object.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * An object to filter configuration recorders in an aggregator. Either `ResourceType` or `ServicePrincipal` is required.
   *
   * @public
   */
  AggregatorFilters?: AggregatorFilters | undefined;
}

/**
 * @public
 */
export interface PutConfigurationAggregatorResponse {
  /**
   * Returns a ConfigurationAggregator object.
   *
   * @public
   */
  ConfigurationAggregator?: ConfigurationAggregator | undefined;
}

/**
 * The input for the PutConfigurationRecorder action.
 *
 * @public
 */
export interface PutConfigurationRecorderRequest {
  /**
   * An object for the configuration recorder. A configuration recorder records configuration changes for the resource types in scope.
   *
   * @public
   */
  ConfigurationRecorder: ConfigurationRecorder | undefined;

  /**
   * The tags for the customer managed configuration recorder. Each tag consists of a key and an optional value, both of which you define.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface PutConformancePackRequest {
  /**
   * The unique name of the conformance pack you want to deploy.
   *
   * @public
   */
  ConformancePackName: string | undefined;

  /**
   * The location of the file containing the template body (`s3://bucketname/prefix`). The uri must point to a conformance pack template (max size: 300 KB) that is located in an Amazon S3 bucket in the same Region as the conformance pack.
   *
   * > **Note:** You must have access to read Amazon S3 bucket. In addition, in order to ensure a successful deployment, the template object must not be in an [archived storage class](https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-class-intro.html) if this parameter is passed.
   *
   * @public
   */
  TemplateS3Uri?: string | undefined;

  /**
   * A string that contains the full conformance pack template body. The structure containing the template body has a minimum length of 1 byte and a maximum length of 51,200 bytes.
   *
   * > **Note:** You can use a YAML template with two resource types: Config rule (`AWS::Config::ConfigRule`) and remediation action (`AWS::Config::RemediationConfiguration`).
   *
   * @public
   */
  TemplateBody?: string | undefined;

  /**
   * The name of the Amazon S3 bucket where Config stores conformance pack templates.
   *
   * > **Note:** This field is optional.
   *
   * @public
   */
  DeliveryS3Bucket?: string | undefined;

  /**
   * The prefix for the Amazon S3 bucket.
   *
   * > **Note:** This field is optional.
   *
   * @public
   */
  DeliveryS3KeyPrefix?: string | undefined;

  /**
   * A list of `ConformancePackInputParameter` objects.
   *
   * @public
   */
  ConformancePackInputParameters?: ConformancePackInputParameter[] | undefined;

  /**
   * An object of type `TemplateSSMDocumentDetails`, which contains the name or the Amazon Resource Name (ARN) of the Amazon Web Services Systems Manager document (SSM document) and the version of the SSM document that is used to create a conformance pack.
   *
   * @public
   */
  TemplateSSMDocumentDetails?: TemplateSSMDocumentDetails | undefined;

  /**
   * The tags for the conformance pack. Each tag consists of a key and an optional value, both of which you define.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface PutConformancePackResponse {
  /**
   * ARN of the conformance pack.
   *
   * @public
   */
  ConformancePackArn?: string | undefined;
}

/**
 * @public
 */
export interface PutConnectorRequest {
  /**
   * The provider-specific configuration for connecting to the third-party cloud service provider.
   *
   * @public
   */
  ConnectorConfiguration: ConnectorConfiguration | undefined;

  /**
   * The tags for the connector. Each tag consists of a key and an optional value, both of which you define.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface PutConnectorResponse {
  /**
   * The Amazon Resource Name (ARN) of the connector.
   *
   * @public
   */
  Arn: string | undefined;
}

/**
 * The input for the PutDeliveryChannel action.
 *
 * @public
 */
export interface PutDeliveryChannelRequest {
  /**
   * An object for the delivery channel. A delivery channel sends notifications and updated configuration states.
   *
   * @public
   */
  DeliveryChannel: DeliveryChannel | undefined;
}

/**
 * @public
 */
export interface PutEvaluationsRequest {
  /**
   * The assessments that the Lambda function performs. Each evaluation identifies an Amazon Web Services resource and indicates whether it complies with the Config rule that invokes the Lambda function.
   *
   * @public
   */
  Evaluations?: Evaluation[] | undefined;

  /**
   * An encrypted token that associates an evaluation with an Config rule. Identifies the rule and the event that triggered the evaluation.
   *
   * @public
   */
  ResultToken: string | undefined;

  /**
   * Use this parameter to specify a test run for `PutEvaluations`. You can verify whether your Lambda function will deliver evaluation results to Config. No updates occur to your existing evaluations, and evaluation results are not sent to Config.
   *
   * > **Note:** When `TestMode` is `true`, `PutEvaluations` doesn't require a valid value for the `ResultToken` parameter, but the value cannot be null.
   *
   * @public
   */
  TestMode?: boolean | undefined;
}

/**
 * @public
 */
export interface PutEvaluationsResponse {
  /**
   * Requests that failed because of a client or server error.
   *
   * @public
   */
  FailedEvaluations?: Evaluation[] | undefined;
}

/**
 * @public
 */
export interface PutExternalEvaluationRequest {
  /**
   * The name of the Config rule.
   *
   * @public
   */
  ConfigRuleName: string | undefined;

  /**
   * An `ExternalEvaluation` object that provides details about compliance.
   *
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
   * The name that you assign to an organization Config rule.
   *
   * @public
   */
  OrganizationConfigRuleName: string | undefined;

  /**
   * An `OrganizationManagedRuleMetadata` object. This object specifies organization managed rule metadata such as resource type and ID of Amazon Web Services resource along with the rule identifier. It also provides the frequency with which you want Config to run evaluations for the rule if the trigger type is periodic.
   *
   * @public
   */
  OrganizationManagedRuleMetadata?: OrganizationManagedRuleMetadata | undefined;

  /**
   * An `OrganizationCustomRuleMetadata` object. This object specifies organization custom rule metadata such as resource type, resource ID of Amazon Web Services resource, Lambda function ARN, and organization trigger types that trigger Config to evaluate your Amazon Web Services resources against a rule. It also provides the frequency with which you want Config to run evaluations for the rule if the trigger type is periodic.
   *
   * @public
   */
  OrganizationCustomRuleMetadata?: OrganizationCustomRuleMetadata | undefined;

  /**
   * A comma-separated list of accounts that you want to exclude from an organization Config rule.
   *
   * @public
   */
  ExcludedAccounts?: string[] | undefined;

  /**
   * An `OrganizationCustomPolicyRuleMetadata` object. This object specifies metadata for your organization's Config Custom Policy rule. The metadata includes the runtime system in use, which accounts have debug logging enabled, and other custom rule metadata, such as resource type, resource ID of Amazon Web Services resource, and organization trigger types that initiate Config to evaluate Amazon Web Services resources against a rule.
   *
   * @public
   */
  OrganizationCustomPolicyRuleMetadata?: OrganizationCustomPolicyRuleMetadata | undefined;

  /**
   * The tags for the organization Config rule. Each tag consists of a key and an optional value, both of which you define.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface PutOrganizationConfigRuleResponse {
  /**
   * The Amazon Resource Name (ARN) of an organization Config rule.
   *
   * @public
   */
  OrganizationConfigRuleArn?: string | undefined;
}

/**
 * @public
 */
export interface PutOrganizationConformancePackRequest {
  /**
   * Name of the organization conformance pack you want to create.
   *
   * @public
   */
  OrganizationConformancePackName: string | undefined;

  /**
   * Location of file containing the template body. The uri must point to the conformance pack template (max size: 300 KB).
   *
   * > **Note:** You must have access to read Amazon S3 bucket. In addition, in order to ensure a successful deployment, the template object must not be in an [archived storage class](https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-class-intro.html) if this parameter is passed.
   *
   * @public
   */
  TemplateS3Uri?: string | undefined;

  /**
   * A string that contains the full conformance pack template body. Structure containing the template body with a minimum length of 1 byte and a maximum length of 51,200 bytes.
   *
   * @public
   */
  TemplateBody?: string | undefined;

  /**
   * The name of the Amazon S3 bucket where Config stores conformance pack templates.
   *
   * > **Note:** This field is optional. If used, it must be prefixed with `awsconfigconforms`.
   *
   * @public
   */
  DeliveryS3Bucket?: string | undefined;

  /**
   * The prefix for the Amazon S3 bucket.
   *
   * > **Note:** This field is optional.
   *
   * @public
   */
  DeliveryS3KeyPrefix?: string | undefined;

  /**
   * A list of `ConformancePackInputParameter` objects.
   *
   * @public
   */
  ConformancePackInputParameters?: ConformancePackInputParameter[] | undefined;

  /**
   * A list of Amazon Web Services accounts to be excluded from an organization conformance pack while deploying a conformance pack.
   *
   * @public
   */
  ExcludedAccounts?: string[] | undefined;

  /**
   * The tags for the organization conformance pack. Each tag consists of a key and an optional value, both of which you define.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface PutOrganizationConformancePackResponse {
  /**
   * ARN of the organization conformance pack.
   *
   * @public
   */
  OrganizationConformancePackArn?: string | undefined;
}

/**
 * @public
 */
export interface PutRemediationConfigurationsRequest {
  /**
   * A list of remediation configuration objects.
   *
   * @public
   */
  RemediationConfigurations: RemediationConfiguration[] | undefined;
}

/**
 * @public
 */
export interface PutRemediationConfigurationsResponse {
  /**
   * Returns a list of failed remediation batch objects.
   *
   * @public
   */
  FailedBatches?: FailedRemediationBatch[] | undefined;
}

/**
 * @public
 */
export interface PutRemediationExceptionsRequest {
  /**
   * The name of the Config rule for which you want to create remediation exception.
   *
   * @public
   */
  ConfigRuleName: string | undefined;

  /**
   * An exception list of resource exception keys to be processed with the current request. Config adds exception for each resource key. For example, Config adds 3 exceptions for 3 resource keys.
   *
   * @public
   */
  ResourceKeys: RemediationExceptionResourceKey[] | undefined;

  /**
   * The message contains an explanation of the exception.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The exception is automatically deleted after the expiration date.
   *
   * @public
   */
  ExpirationTime?: Date | undefined;
}

/**
 * @public
 */
export interface PutRemediationExceptionsResponse {
  /**
   * Returns a list of failed remediation exceptions batch objects. Each object in the batch consists of a list of failed items and failure messages.
   *
   * @public
   */
  FailedBatches?: FailedRemediationExceptionBatch[] | undefined;
}

/**
 * @public
 */
export interface PutResourceConfigRequest {
  /**
   * The type of the resource. The custom resource type must be registered with CloudFormation.
   *
   * > **Note:** You cannot use the organization names “amzn”, “amazon”, “alexa”, “custom” with custom resource types. It is the first part of the ResourceType up to the first ::.
   *
   * @public
   */
  ResourceType: string | undefined;

  /**
   * Version of the schema registered for the ResourceType in CloudFormation.
   *
   * @public
   */
  SchemaVersionId: string | undefined;

  /**
   * Unique identifier of the resource.
   *
   * @public
   */
  ResourceId: string | undefined;

  /**
   * Name of the resource.
   *
   * @public
   */
  ResourceName?: string | undefined;

  /**
   * The configuration object of the resource in valid JSON format. It must match the schema registered with CloudFormation.
   *
   * > **Note:** The configuration JSON must not exceed 64 KB.
   *
   * @public
   */
  Configuration: string | undefined;

  /**
   * Tags associated with the resource.
   *
   * > **Note:** This field is not to be confused with the Amazon Web Services-wide tag feature for Amazon Web Services resources. Tags for `PutResourceConfig` are tags that you supply for the configuration items of your custom resources.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface PutRetentionConfigurationRequest {
  /**
   * Number of days Config stores your historical information.
   *
   * > **Note:** Currently, only applicable to the configuration item history.
   *
   * @public
   */
  RetentionPeriodInDays: number | undefined;
}

/**
 * @public
 */
export interface PutRetentionConfigurationResponse {
  /**
   * Returns a retention configuration object.
   *
   * @public
   */
  RetentionConfiguration?: RetentionConfiguration | undefined;
}

/**
 * @public
 */
export interface PutServiceLinkedConfigurationRecorderRequest {
  /**
   * The service principal of the Amazon Web Services service for the service-linked configuration recorder that you want to create.
   *
   * @public
   */
  ServicePrincipal: string | undefined;

  /**
   * The tags for a service-linked configuration recorder. Each tag consists of a key and an optional value, both of which you define.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface PutServiceLinkedConfigurationRecorderResponse {
  /**
   * The Amazon Resource Name (ARN) of the specified configuration recorder.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The name of the specified configuration recorder.
   *
   * For service-linked configuration recorders, Config automatically assigns a name that has the prefix "`AWSConfigurationRecorderFor`" to the new service-linked configuration recorder.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * @public
 */
export interface PutStoredQueryRequest {
  /**
   * A list of `StoredQuery` objects. The mandatory fields are `QueryName` and `Expression`.
   *
   * > **Note:** When you are creating a query, you must provide a query name and an expression. When you are updating a query, you must provide a query name but updating the description is optional.
   *
   * @public
   */
  StoredQuery: StoredQuery | undefined;

  /**
   * A list of `Tags` object.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface PutStoredQueryResponse {
  /**
   * Amazon Resource Name (ARN) of the query. For example, arn:partition:service:region:account-id:resource-type/resource-name/resource-id.
   *
   * @public
   */
  QueryArn?: string | undefined;
}

/**
 * @public
 */
export interface PutThirdPartyServiceLinkedConfigurationRecorderRequest {
  /**
   * The service principal of the Amazon Web Services service for the service-linked configuration recorder that you want to create.
   *
   * @public
   */
  ServicePrincipal: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the connector that specifies the connection between the third-party cloud service provider and Config. The specified connector must exist.
   *
   * @public
   */
  ConnectorArn: string | undefined;

  /**
   * Specifies the scope of resources to record from the third-party cloud service provider.
   *
   * @public
   */
  ScopeConfiguration: ScopeConfiguration | undefined;

  /**
   * The tags for a service-linked configuration recorder. Each tag consists of a key and an optional value, both of which you define.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface PutThirdPartyServiceLinkedConfigurationRecorderResponse {
  /**
   * The Amazon Resource Name (ARN) of the specified configuration recorder.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The name of the specified configuration recorder.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * Details about the query.
 *
 * @public
 */
export interface QueryInfo {
  /**
   * Returns a `FieldInfo` object.
   *
   * @public
   */
  SelectFields?: FieldInfo[] | undefined;
}

/**
 * @public
 */
export interface SelectAggregateResourceConfigRequest {
  /**
   * The SQL query SELECT command.
   *
   * @public
   */
  Expression: string | undefined;

  /**
   * The name of the configuration aggregator.
   *
   * @public
   */
  ConfigurationAggregatorName: string | undefined;

  /**
   * The maximum number of query results returned on each page.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * The maximum number of query results returned on each page. Config also allows the Limit request parameter.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The nextToken string returned in a previous request that you use to request the next page of results in a paginated response.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface SelectAggregateResourceConfigResponse {
  /**
   * Returns the results for the SQL query.
   *
   * @public
   */
  Results?: string[] | undefined;

  /**
   * Details about the query.
   *
   * @public
   */
  QueryInfo?: QueryInfo | undefined;

  /**
   * The nextToken string returned in a previous request that you use to request the next page of results in a paginated response.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface SelectResourceConfigRequest {
  /**
   * The SQL query `SELECT` command.
   *
   * @public
   */
  Expression: string | undefined;

  /**
   * The maximum number of query results returned on each page.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * The `nextToken` string returned in a previous request that you use to request the next page of results in a paginated response.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface SelectResourceConfigResponse {
  /**
   * Returns the results for the SQL query.
   *
   * @public
   */
  Results?: string[] | undefined;

  /**
   * Returns the `QueryInfo` object.
   *
   * @public
   */
  QueryInfo?: QueryInfo | undefined;

  /**
   * The `nextToken` string returned in a previous request that you use to request the next page of results in a paginated response.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface StartConfigRulesEvaluationRequest {
  /**
   * The list of names of Config rules that you want to run evaluations for.
   *
   * @public
   */
  ConfigRuleNames?: string[] | undefined;
}

/**
 * The output when you start the evaluation for the specified Config rule.
 *
 * @public
 */
export interface StartConfigRulesEvaluationResponse {}

/**
 * The input for the StartConfigurationRecorder operation.
 *
 * @public
 */
export interface StartConfigurationRecorderRequest {
  /**
   * The name of the customer managed configuration recorder that you want to start.
   *
   * @public
   */
  ConfigurationRecorderName: string | undefined;
}

/**
 * @public
 */
export interface StartRemediationExecutionRequest {
  /**
   * The list of names of Config rules that you want to run remediation execution for.
   *
   * @public
   */
  ConfigRuleName: string | undefined;

  /**
   * A list of resource keys to be processed with the current request. Each element in the list consists of the resource type and resource ID.
   *
   * @public
   */
  ResourceKeys: ResourceKey[] | undefined;
}

/**
 * @public
 */
export interface StartRemediationExecutionResponse {
  /**
   * Returns a failure message. For example, the resource is already compliant.
   *
   * @public
   */
  FailureMessage?: string | undefined;

  /**
   * For resources that have failed to start execution, the API returns a resource key object.
   *
   * @public
   */
  FailedItems?: ResourceKey[] | undefined;
}

/**
 * @public
 */
export interface StartResourceEvaluationRequest {
  /**
   * Returns a `ResourceDetails` object.
   *
   * @public
   */
  ResourceDetails: ResourceDetails | undefined;

  /**
   * Returns an `EvaluationContext` object.
   *
   * @public
   */
  EvaluationContext?: EvaluationContext | undefined;

  /**
   * The mode of an evaluation.
   *
   * > **Note:** The only valid value for this API is `PROACTIVE`.
   *
   * @public
   */
  EvaluationMode: EvaluationMode | undefined;

  /**
   * The timeout for an evaluation. The default is 900 seconds. You cannot specify a number greater than 3600. If you specify 0, Config uses the default.
   *
   * @public
   */
  EvaluationTimeout?: number | undefined;

  /**
   * A client token is a unique, case-sensitive string of up to 64 ASCII characters. To make an idempotent API request using one of these actions, specify a client token in the request.
   *
   * > **Note:** Avoid reusing the same client token for other API requests. If you retry a request that completed successfully using the same client token and the same parameters, the retry succeeds without performing any further actions. If you retry a successful request using the same client token, but one or more of the parameters are different, other than the Region or Availability Zone, the retry fails with an IdempotentParameterMismatch error.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface StartResourceEvaluationResponse {
  /**
   * A unique ResourceEvaluationId that is associated with a single execution.
   *
   * @public
   */
  ResourceEvaluationId?: string | undefined;
}

/**
 * The input for the StopConfigurationRecorder operation.
 *
 * @public
 */
export interface StopConfigurationRecorderRequest {
  /**
   * The name of the customer managed configuration recorder that you want to stop.
   *
   * @public
   */
  ConfigurationRecorderName: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) that identifies the resource for which to list the tags. The following resources are supported:
   *
   * - `ConfigurationRecorder`
   * - `ConfigRule`
   * - `OrganizationConfigRule`
   * - `ConformancePack`
   * - `OrganizationConformancePack`
   * - `ConfigurationAggregator`
   * - `AggregationAuthorization`
   * - `StoredQuery`
   * - `Connector`
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * An array of tag object.
   *
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) that identifies the resource for which to list the tags. The following resources are supported:
   *
   * - `ConfigurationRecorder`
   * - `ConfigRule`
   * - `OrganizationConfigRule`
   * - `ConformancePack`
   * - `OrganizationConformancePack`
   * - `ConfigurationAggregator`
   * - `AggregationAuthorization`
   * - `StoredQuery`
   * - `Connector`
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The keys of the tags to be removed.
   *
   * @public
   */
  TagKeys: string[] | undefined;
}
