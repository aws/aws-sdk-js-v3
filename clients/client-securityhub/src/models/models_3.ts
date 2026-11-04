// smithy-typescript generated code
import type { DocumentType as __DocumentType } from "@smithy/types";

import type {
  AllowedOperators,
  AssociationStatus,
  AssociationType,
  AutoEnableStandards,
  CloudProviderName,
  ConfigurationPolicyAssociationStatus,
  ConnectorProviderName,
  ConnectorStatus,
  ControlFindingGenerator,
  ControlStatus,
  CspmConnectorProviderName,
  CspmConnectorStatus,
  CspmEnablementStatus,
  DiscoveryType,
  EnablementStatus,
  ExportDataType,
  ExportFailureCode,
  ExportStatus,
  FindingsExportFormat,
  FindingsSelectableField,
  FreeTrialStatusValue,
  GranularityField,
  GroupByField,
  GuidanceFormat,
  RecommendationStatus,
  RecommendationType,
  RecordState,
  RegionAvailabilityStatus,
  RemediationPriority,
  RemediationStatus,
  RemediationStringField,
  ResourceCategory,
  ResourceCriticality,
  ResourceGroupByField,
  ResourcesTrendsStringField,
  ResourceSubCategory,
  RuleStatusV2,
  SecurityControlProperty,
  SecurityControlsProvider,
  SecurityHubFeature,
  SeverityRating,
  SortOrder,
  TargetType,
} from "./enums";
import type {
  AccountFreeTrialStatus,
  AdminAccount,
  AggregatorV2,
  AIDetails,
  AssociationFilters,
  AutomationRulesActionV2,
  AutomationRulesMetadata,
  AutomationRulesMetadataV2,
  NoteUpdate,
  StringFilter,
} from "./models_0";
import type { AwsOrganizationScope } from "./models_1";
import type {
  AwsSecurityFindingFilters,
  AzureUpdateConfiguration,
  ConfigurationOptions,
  ConfigurationPolicyAssociationSummary,
  ConfigurationPolicySummary,
  ConnectorSummary,
  CriticalitySource,
  CspmConnectorSummary,
  CspmProviderUpdateConfiguration,
  ExportDestination,
  ExportScopes,
  ExportSummary,
  ExposureFinding,
  FindingAggregator,
  FindingScopes,
  FindingsTrendsStringFilter,
  GroupByResult,
  Invitation,
  Member,
  OcsfBooleanFilter,
  OcsfDateFilter,
  OcsfIpFilter,
  OcsfMapFilter,
  OcsfNumberFilter,
  OcsfStringFilter,
  OrganizationConfiguration,
  ParameterConfiguration,
  Policy,
  RecommendationError,
  ResourcesDateFilter,
  ResourcesMapFilter,
  ResourcesNumberFilter,
  ResourcesStringFilter,
  Result,
  SortCriterion,
  Target,
} from "./models_2";

/**
 * Contains information about the action to take for a policy in an unused permissions finding.
 *
 * @public
 */
export interface UnusedPermissionsRecommendationStep {
  /**
   * A recommendation of whether to create or detach a policy for an unused permissions finding.
   *
   * @public
   */
  RecommendedAction?: string | undefined;

  /**
   * The contents of the existing policy identified by `ExistingPolicyId` which needs to be replaced, when the `RecommendedAction` is `CREATE_POLICY`.
   *
   * @public
   */
  ExistingPolicy?: string | undefined;

  /**
   * The ID of an existing policy to be replaced or detached.
   *
   * @public
   */
  ExistingPolicyId?: string | undefined;

  /**
   * The time at which the existing policy for the unused permissions finding was last updated.
   *
   * @public
   */
  PolicyUpdatedAt?: Date | undefined;

  /**
   * The contents of the least-privileged recommended replacement for `ExistingPolicyId`, when the `RecommendedAction` is `CREATE_POLICY`.
   *
   * @public
   */
  RecommendedPolicy?: string | undefined;
}

/**
 * Contains information about a recommended step to remediate a Security Hub finding.
 *
 * @public
 */
export type RecommendationStep =
  | RecommendationStep.UnusedPermissionsMember
  | RecommendationStep.$UnknownMember;

/**
 * @public
 */
export namespace RecommendationStep {
  /**
   * A recommended step to remediate an unused permissions finding.
   *
   * @public
   */
  export interface UnusedPermissionsMember {
    UnusedPermissions: UnusedPermissionsRecommendationStep;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    UnusedPermissions?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    UnusedPermissions: (value: UnusedPermissionsRecommendationStep) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface GetRecommendedPolicyV2Response {
  /**
   * The pagination token to use to request the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The type of recommendation for the finding.
   *
   * @public
   */
  RecommendationType?: RecommendationType | undefined;

  /**
   * The recommended steps to take to resolve the finding.
   *
   * @public
   */
  RecommendationSteps?: RecommendationStep[] | undefined;

  /**
   * Detailed information for a `FAILED` retrieval status.
   *
   * @public
   */
  Error?: RecommendationError | undefined;

  /**
   * The current status of the recommended policy retrieval.
   *
   * @public
   */
  Status?: RecommendationStatus | undefined;

  /**
   * The ARN of the resource of the finding.
   *
   * @public
   */
  ResourceArn?: string | undefined;
}

/**
 * The condition to apply to the string filter.
 *
 * @public
 */
export interface RemediationStringFilterCondition {
  /**
   * The value the string filter is comparing against.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * A string filter for filtering remediation targets.
 *
 * @public
 */
export interface RemediationStringFilter {
  /**
   * The name of the filter field. Valid values are `Resource.Type`, `Priority`, `Status`, `Resource.Id`, `Resource.ResourceOwnerAccountId`, and `Resource.CloudProvider`.
   *
   * @public
   */
  FieldName: RemediationStringField | undefined;

  /**
   * The string filter definition.
   *
   * @public
   */
  Filter: RemediationStringFilterCondition | undefined;
}

/**
 * Enables the creation of criteria for remediation targets.
 *
 * @public
 */
export interface RemediationCompositeFilter {
  /**
   * Enables filtering based on string field values.
   *
   * @public
   */
  StringFilters?: RemediationStringFilter[] | undefined;
}

/**
 * Contains the criteria used to filter remediation targets, such as resource type, priority, or status.
 *
 * @public
 */
export interface RemediationFilters {
  /**
   * A collection of complex filtering conditions that can be applied to remediation target data.
   *
   * @public
   */
  CompositeFilters?: RemediationCompositeFilter[] | undefined;
}

/**
 * @public
 */
export interface GetRemediationsV2Request {
  /**
   * The unique identifier (ID) of an existing remediation target to return. Returns the single matching target. You can't use `TargetUid` together with `MetadataUid` or `Filters`.
   *
   * @public
   */
  TargetUid?: string | undefined;

  /**
   * The unique identifier (ID) of the Security Hub exposure finding, found under the `metadata.uid` field of the finding. Returns the remediation targets associated with that finding. You can't use `MetadataUid` together with `TargetUid` or `Filters`.
   *
   * @public
   */
  MetadataUid?: string | undefined;

  /**
   * Filters remediation targets based on a set of criteria. You can't use `Filters` together with `TargetUid` or `MetadataUid`.
   *
   * @public
   */
  Filters?: RemediationFilters | undefined;

  /**
   * Specifies whether to show remediation target guidance.
   *
   * @public
   */
  ShowGuidance?: boolean | undefined;

  /**
   * The format of the remediation guidance examples to return. Valid values are `All`, `AwsCli`, `Cli`, `Python`, `Terraform`, `Cdk`, `CloudFormation`, `IaC`, and `Template`. If you don't specify a value, all formats are returned. Applies only when `ShowGuidance` is `true`.
   *
   * @public
   */
  GuidanceFormat?: GuidanceFormat | undefined;

  /**
   * The maximum number of results to return. Valid range is 1-100. If you don't specify a value, the operation returns up to 25 results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token used to paginate the remediations target list returned. On your first call to `GetRemediationsV2`, omit this parameter or set it to `NULL`. For subsequent calls, use the `NextToken` value returned in the previous response to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * The context behind the remediation target's existence and guidance.
 *
 * @public
 */
export interface RemediationGuidanceContext {
  /**
   * Explains the cause which directly created the remediation target.
   *
   * @public
   */
  ProblemStatement?: string | undefined;

  /**
   * An assessment of the existing risk the remediation target creates.
   *
   * @public
   */
  RiskAssessment?: string | undefined;

  /**
   * The scope of the resources affected by the resolution of the remediation target.
   *
   * @public
   */
  AffectedScope?: string | undefined;

  /**
   * An array of prerequisite steps in resolving the remediation target.
   *
   * @public
   */
  Prerequisites?: string[] | undefined;
}

/**
 * Provided remediation guidance examples in different formats that can be run for remediating the target.
 *
 * @public
 */
export interface RemediationGuidanceExamples {
  /**
   * An CLI snippet version of the example.
   *
   * @public
   */
  AwsCli?: string | undefined;

  /**
   * A CLI snippet version of the example.
   *
   * @public
   */
  Cli?: string | undefined;

  /**
   * A Python snippet version of the example.
   *
   * @public
   */
  Python?: string | undefined;

  /**
   * A Terraform snippet version of the example.
   *
   * @public
   */
  Terraform?: string | undefined;

  /**
   * A CDK snippet version of the example.
   *
   * @public
   */
  Cdk?: string | undefined;

  /**
   * A CloudFormation snippet version of the example.
   *
   * @public
   */
  CloudFormation?: string | undefined;

  /**
   * An IaC snippet version of the example.
   *
   * @public
   */
  IaC?: string | undefined;

  /**
   * A Template snippet version of the example.
   *
   * @public
   */
  Template?: string | undefined;
}

/**
 * The metadata of the remediation guidance.
 *
 * @public
 */
export interface RemediationGuidanceMetadata {
  /**
   * The resource type of the remediation target.
   *
   * @public
   */
  ResourceType: string | undefined;

  /**
   * The exposure type of the related exposure findings.
   *
   * @public
   */
  ExposureType: string | undefined;

  /**
   * The titles of traits this guidance applies to.
   *
   * @public
   */
  TraitTitles: string[] | undefined;

  /**
   * The extent to which changes made in accordance with the guidance can be reversed, for example `Fully reversible`.
   *
   * @public
   */
  Reversibility: string | undefined;

  /**
   * When the fix takes effect, for example `Immediate` or `Deferred`.
   *
   * @public
   */
  FixEffect: string | undefined;

  /**
   * The risk when implementing the guidance provided.
   *
   * @public
   */
  RiskLevel: string | undefined;

  /**
   * The extent to which the guidance can be automated, for example `Full`.
   *
   * @public
   */
  AutomationLevel?: string | undefined;

  /**
   * Specifies whether human review is required.
   *
   * @public
   */
  HumanReviewRequired?: boolean | undefined;

  /**
   * Timestamp of when the guidance was generated.
   *
   * For more information about the validation and formatting of timestamp fields in Security Hub CSPM, see [Timestamps](https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps).
   *
   * @public
   */
  GeneratedAt?: Date | undefined;

  /**
   * Verification status of the guidance.
   *
   * @public
   */
  VerificationStatus?: string | undefined;
}

/**
 * A parameter used in running the guidance steps.
 *
 * @public
 */
export interface RemediationParameter {
  /**
   * The name of the parameter.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The type of the parameter.
   *
   * @public
   */
  Type: string | undefined;

  /**
   * A description of the parameter.
   *
   * @public
   */
  Description: string | undefined;

  /**
   * Specifies whether the parameter is required for running the guidance steps.
   *
   * @public
   */
  Required?: boolean | undefined;
}

/**
 * A step in the remediation guidance.
 *
 * @public
 */
export interface RemediationStep {
  /**
   * The phase of the remediation plan that this step belongs to (for example, `FIX`).
   *
   * @public
   */
  Phase: string | undefined;

  /**
   * A description of what the step does.
   *
   * @public
   */
  Description: string | undefined;

  /**
   * Which service this step is performed in.
   *
   * @public
   */
  Service: string | undefined;

  /**
   * The action to be taken for this step.
   *
   * @public
   */
  Action: string | undefined;

  /**
   * The logic behind the existence of this step.
   *
   * @public
   */
  Logic?: string | undefined;

  /**
   * The inverse of the step, to be used if the step needs to be rolled back.
   *
   * @public
   */
  Inverse?: string | undefined;

  /**
   * The action to take after the step to verify its success.
   *
   * @public
   */
  VerifyAfter?: string | undefined;
}

/**
 * The specification of the remediation target guidance. This outlines required resource parameters and permissions, remediation steps, and the end state.
 *
 * @public
 */
export interface RemediationGuidanceSpecification {
  /**
   * An array of the parameters used in running the steps provided.
   *
   * @public
   */
  Parameters?: RemediationParameter[] | undefined;

  /**
   * An array of ordered steps for resolving the remediation targets.
   *
   * @public
   */
  Steps?: RemediationStep[] | undefined;

  /**
   * The expected end state of the associated resources after completion of the steps.
   *
   * @public
   */
  ExpectedEndState?: string | undefined;

  /**
   * An array of required permissions to run the steps.
   *
   * @public
   */
  RequiredPermissions?: string[] | undefined;
}

/**
 * A remediation guidebook outlining guidance in resolving the remediation target.
 *
 * @public
 */
export interface RemediationGuidance {
  /**
   * The name of the remediation target type.
   *
   * @public
   */
  TargetTypeName: string | undefined;

  /**
   * The remediation pattern of the remediation target.
   *
   * @public
   */
  Pattern: string | undefined;

  /**
   * The guidance version.
   *
   * @public
   */
  Version: string | undefined;

  /**
   * The context behind the remediation target's existence and guidance.
   *
   * @public
   */
  Context: RemediationGuidanceContext | undefined;

  /**
   * The specification of the remediation target guidance. This outlines required resource parameters and permissions, remediation steps, and the end state.
   *
   * @public
   */
  Specification: RemediationGuidanceSpecification | undefined;

  /**
   * Provided remediation guidance examples in different formats that can be run for remediating the target.
   *
   * @public
   */
  Examples: RemediationGuidanceExamples | undefined;

  /**
   * The metadata of the remediation guidance.
   *
   * @public
   */
  Metadata: RemediationGuidanceMetadata | undefined;
}

/**
 * The outcome from resolving the remediation target.
 *
 * @public
 */
export interface RemediationOutcome {
  /**
   * The number of associated exposure findings that are resolved by remediating the target.
   *
   * @public
   */
  ResolvedFindingsCount: number | undefined;

  /**
   * The number of associated exposure findings whose severity is reduced by remediating the target.
   *
   * @public
   */
  SeverityReductionFindingsCount: number | undefined;

  /**
   * The number of associated exposure findings whose severity is unchanged by remediating the target.
   *
   * @public
   */
  SeverityUnchangedCount: number | undefined;
}

/**
 * A knowledge base article that provides additional guidance related to the remediation target.
 *
 * @public
 */
export interface KbArticle {
  /**
   * The title of the `KbArticle`.
   *
   * @public
   */
  Title: string | undefined;

  /**
   * The URL of the `KbArticle`.
   *
   * @public
   */
  Url: string | undefined;
}

/**
 * A summary of the remediation target.
 *
 * @public
 */
export interface RemediationSummaryDetail {
  /**
   * A summarized action to take for the remediation target.
   *
   * @public
   */
  Action: string | undefined;

  /**
   * A description of the remediation target.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Specifies whether the effect of this target is immediate.
   *
   * @public
   */
  IsImmediate: boolean | undefined;

  /**
   * An array of steps to be taken after remediation.
   *
   * @public
   */
  PostRemediationSteps?: string[] | undefined;

  /**
   * An array of `KbArticle` objects.
   *
   * @public
   */
  KbArticles?: KbArticle[] | undefined;
}

/**
 * Provides comprehensive details about a resource.
 *
 * @public
 */
export interface RemediationResource {
  /**
   * The Amazon Web Services account that recorded the resource data in Security Hub.
   *
   * @public
   */
  AccountId: string | undefined;

  /**
   * The Amazon Web Services Region in which Security Hub recorded the resource data.
   *
   * @public
   */
  Region: string | undefined;

  /**
   * The identifier of the cloud account that owns the resource. For Amazon Web Services resources, this is the Amazon Web Services account ID. For Azure resources, this is the Azure subscription ID.
   *
   * @public
   */
  ResourceOwnerAccountId?: string | undefined;

  /**
   * The identifier of the cloud organization that owns the resource. For Amazon Web Services resources, this is the Organizations ID. For Azure resources, this is the Azure tenant ID.
   *
   * @public
   */
  ResourceOwnerOrgId?: string | undefined;

  /**
   * The type of the resource.
   *
   * @public
   */
  Type: string | undefined;

  /**
   * The name of the resource.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The unique identifier for a resource.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The global identifier used to identify a resource.
   *
   * @public
   */
  ResourceGuid?: string | undefined;

  /**
   * The native cloud region where the resource is located. For Amazon Web Services, this is an Amazon Web Services Region (for example, `us-east-1`). For Azure resources, this is the Azure region (for example, `westus2`). This field is always included.
   *
   * @public
   */
  ResourceRegion: string | undefined;

  /**
   * The cloud provider where the resource exists.
   *
   * - `AWS` specifies that the resource exists in Amazon Web Services.
   * - `Azure` specifies that the resource exists in Microsoft Azure.
   *
   * @public
   */
  CloudProvider: CloudProviderName | undefined;
}

/**
 * The trait associated with the remediation target.
 *
 * @public
 */
export interface RemediationTrait {
  /**
   * The trait type.
   *
   * @public
   */
  Type: string | undefined;

  /**
   * The trait title.
   *
   * @public
   */
  Title: string | undefined;
}

/**
 * A remediation target.
 *
 * @public
 */
export interface RemediationV2Item {
  /**
   * The unique identifier (ID) of the remediation target.
   *
   * @public
   */
  TargetUid: string | undefined;

  /**
   * The outcome of the remediation target's resolution.
   *
   * @public
   */
  Outcome: RemediationOutcome | undefined;

  /**
   * The remediation target's priority. Valid values are `Critical`, `High`, `Medium`, and `Low`.
   *
   * @public
   */
  Priority: RemediationPriority | undefined;

  /**
   * A summary of the remediation target.
   *
   * @public
   */
  RemediationSummary: RemediationSummaryDetail | undefined;

  /**
   * The remediation target's associated resource.
   *
   * @public
   */
  Resource: RemediationResource | undefined;

  /**
   * The current status of the remediation target.
   *
   * - `New` specifies that the remediation target was newly identified.
   * - `Updated` specifies that the remediation target changed after it was identified.
   * - `Resolved` specifies that the remediation target is no longer present.
   *
   * @public
   */
  Status: RemediationStatus | undefined;

  /**
   * The trait associated with the remediation target.
   *
   * @public
   */
  Trait: RemediationTrait | undefined;

  /**
   * The remediation target's guidance. Returned only when `ShowGuidance` is `true` in the request.
   *
   * @public
   */
  Guidance?: RemediationGuidance | undefined;

  /**
   * The remediation target's last updated timestamp.
   *
   * For more information about the validation and formatting of timestamp fields in Security Hub CSPM, see [Timestamps](https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps).
   *
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetRemediationsV2Response {
  /**
   * An array of remediation targets returned by the operation.
   *
   * @public
   */
  Items: RemediationV2Item[] | undefined;

  /**
   * The pagination token to use to request the next page of results. Otherwise, this parameter is null.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Defines the data boundary for a resources query. Scopes determine which organizational units or organizations to retrieve data from.
 *
 * @public
 */
export interface ResourceScopes {
  /**
   * A list of Organizations scopes to include in the query results. Each entry in the list specifies an organization or organizational unit to include for the delegated administrator's account. If the list specifies multiple entries, the entries are combined using OR logic.
   *
   * @public
   */
  AwsOrganizations?: AwsOrganizationScope[] | undefined;
}

/**
 * @public
 */
export interface GetResourcesStatisticsV2Response {
  /**
   * The aggregated statistics about resources based on the specified grouping rule.
   *
   * @public
   */
  GroupByResults: GroupByResult[] | undefined;
}

/**
 * A filter for string-based fields in resources trend data, such as resource type or account ID.
 *
 * @public
 */
export interface ResourcesTrendsStringFilter {
  /**
   * The name of the resources field to filter on. You can specify one of the following fields.
   *
   * - `account_id` – The Amazon Web Services account ID that owns the resource.
   * - `region` – The Amazon Web Services Region of the resource.
   * - `resource_type` – The type of the resource.
   * - `resource_category` – The category of the resource.
   * - `resource_cloud_provider` – The cloud provider of the resource. Valid values are `AWS` and `Azure`.
   * - `resource_region` – The Region of the resource. For an Amazon Web Services resource, this is the Amazon Web Services Region. For an Azure resource, this is the Azure Region, such as `eastus`.
   * - `resource_owner_id` – The identifier of the account that owns the resource. For an Amazon Web Services resource, this is the Amazon Web Services account ID. For an Azure resource, this is the Azure subscription ID.
   * - `resource_owner_organization_id` – The identifier of the organization that owns the resource. For an Amazon Web Services resource, this is the Amazon Web Services organization ID. For an Azure resource, this is the Azure tenant ID.
   *
   * @public
   */
  FieldName?: ResourcesTrendsStringField | undefined;

  /**
   * A string filter for filtering Security Hub CSPM findings.
   *
   * @public
   */
  Filter?: StringFilter | undefined;
}

/**
 * Contains counts of resources for trend analysis.
 *
 * @public
 */
export interface ResourcesCount {
  /**
   * The total count of all resources for the given time interval.
   *
   * @public
   */
  AllResources: number | undefined;
}

/**
 * Contains the aggregated resource count values for a specific point in the resources trend timeline.
 *
 * @public
 */
export interface ResourcesTrendsValues {
  /**
   * The resource count statistics for this data point in the trend timeline.
   *
   * @public
   */
  ResourcesCount: ResourcesCount | undefined;
}

/**
 * Contains the resource trend metrics data for a specific time point in the requested time period.
 *
 * @public
 */
export interface ResourcesTrendsMetricsResult {
  /**
   * The timestamp for this data point in the resources trend metrics.
   *
   * @public
   */
  Timestamp: Date | undefined;

  /**
   * The resource trend metric values associated with this timestamp, including resource counts.
   *
   * @public
   */
  TrendsValues: ResourcesTrendsValues | undefined;
}

/**
 * @public
 */
export interface GetResourcesTrendsV2Response {
  /**
   * The time interval granularity for the returned trend data (such as DAILY or WEEKLY).
   *
   * @public
   */
  Granularity: GranularityField | undefined;

  /**
   * The collection of time-series trend metrics, including counts of resources across the specified time period.
   *
   * @public
   */
  TrendsMetrics: ResourcesTrendsMetricsResult[] | undefined;

  /**
   * The token to use for retrieving the next page of results, if more trend data is available.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A comprehensive distribution of security findings by severity level for Amazon Web Services resources.
 *
 * @public
 */
export interface ResourceSeverityBreakdown {
  /**
   * The number of findings not in any of the severity categories.
   *
   * @public
   */
  Other?: number | undefined;

  /**
   * The number of findings with a severity level of fatal.
   *
   * @public
   */
  Fatal?: number | undefined;

  /**
   * The number of findings with a severity level of critical.
   *
   * @public
   */
  Critical?: number | undefined;

  /**
   * The number of findings with a severity level of high.
   *
   * @public
   */
  High?: number | undefined;

  /**
   * The number of findings with a severity level of medium.
   *
   * @public
   */
  Medium?: number | undefined;

  /**
   * The number of findings with a severity level of low.
   *
   * @public
   */
  Low?: number | undefined;

  /**
   * The number of findings that provide security-related information.
   *
   * @public
   */
  Informational?: number | undefined;

  /**
   * The number of findings with a severity level cannot be determined.
   *
   * @public
   */
  Unknown?: number | undefined;
}

/**
 * A list of summaries for all finding types on a resource.
 *
 * @public
 */
export interface ResourceFindingsSummary {
  /**
   * The category or classification of the security finding.
   *
   * @public
   */
  FindingType: string | undefined;

  /**
   * The name of the product associated with the security finding.
   *
   * @public
   */
  ProductName: string | undefined;

  /**
   * The total count of security findings.
   *
   * @public
   */
  TotalFindings: number | undefined;

  /**
   * A breakdown of security findings by their severity levels.
   *
   * @public
   */
  Severities?: ResourceSeverityBreakdown | undefined;
}

/**
 * Additional details about a resource that are specific to its category. For AI/ML resources and their host resources, this structure contains `AIDetails`.
 *
 * @public
 */
export interface ResourceInfo {
  /**
   * Details that are specific to self-hosted AI resources and their host resources.
   *
   * @public
   */
  AIDetails?: AIDetails | undefined;
}

/**
 * Represents tag information associated with Amazon Web Services resources.
 *
 * @public
 */
export interface ResourceTag {
  /**
   * The identifier or name of the tag.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The data associated with the tag key.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * Provides comprehensive details about an Amazon Web Services resource and its associated security findings.
 *
 * @public
 */
export interface ResourceResult {
  /**
   * The global identifier used to identify a resource.
   *
   * @public
   */
  ResourceGuid?: string | undefined;

  /**
   * The unique identifier for a resource.
   *
   * @public
   */
  ResourceId: string | undefined;

  /**
   * The Amazon Web Services account that recorded the resource data in Security Hub.
   *
   * @public
   */
  AccountId: string | undefined;

  /**
   * The name of the Amazon Web Services account that's associated with the resource.
   *
   * @public
   */
  AccountName?: string | undefined;

  /**
   * The Amazon Web Services Region that recorded the resource data in Security Hub.
   *
   * @public
   */
  Region: string | undefined;

  /**
   * The cloud provider where the resource exists. Valid values are `AWS` and `Azure`. This field is always included.
   *
   * @public
   */
  ResourceProvider?: string | undefined;

  /**
   * The identifier of the cloud account that owns the resource. For Amazon Web Services resources, this is the Amazon Web Services account ID. For Azure resources, this is the Azure subscription ID.
   *
   * @public
   */
  ResourceOwnerAccountId?: string | undefined;

  /**
   * The identifier of the cloud organization that owns the resource. For Amazon Web Services resources, this is the Organizations ID. For Azure resources, this is the Azure tenant ID.
   *
   * @public
   */
  ResourceOwnerOrgId?: string | undefined;

  /**
   * The cloud partition where the resource exists. For Amazon Web Services, valid values include `aws`, `aws-cn`, and `aws-us-gov`. This field isn't returned for cloud providers that don't use partitions.
   *
   * @public
   */
  ResourceCloudPartition?: string | undefined;

  /**
   * The native cloud region where the resource is located. For Amazon Web Services, this is an Amazon Web Services Region (for example, `us-east-1`). For Azure resources, this is the Azure region (for example, `westus2`). This field is always included.
   *
   * @public
   */
  ResourceRegion?: string | undefined;

  /**
   * The grouping where the resource belongs.
   *
   * @public
   */
  ResourceCategory?: ResourceCategory | undefined;

  /**
   * The type of resource.
   *
   * @public
   */
  ResourceType: string | undefined;

  /**
   * The name of the resource.
   *
   * @public
   */
  ResourceName?: string | undefined;

  /**
   * The time when the resource was created.
   *
   * @public
   */
  ResourceCreationTimeDt?: string | undefined;

  /**
   * The timestamp when information about the resource was captured.
   *
   * @public
   */
  ResourceDetailCaptureTimeDt: string | undefined;

  /**
   * An aggregated view of security findings associated with a resource.
   *
   * @public
   */
  FindingsSummary?: ResourceFindingsSummary[] | undefined;

  /**
   * The key-value pairs associated with a resource.
   *
   * @public
   */
  ResourceTags?: ResourceTag[] | undefined;

  /**
   * The configuration details of a resource.
   *
   * @public
   */
  ResourceConfig: __DocumentType | undefined;

  /**
   * The AI/ML sub-grouping of the resource. Present only when `ResourceCategory` is `AI/ML`.
   *
   * @public
   */
  ResourceSubCategory?: ResourceSubCategory | undefined;

  /**
   * Specifies how the resource was discovered. If the value is `Managed`, the resource is natively provided by a cloud service provider. If the value is `SelfHosted`, the resource is hosted on customer-managed infrastructure, such as a compute instance or container image.
   *
   * @public
   */
  DiscoveryType?: DiscoveryType | undefined;

  /**
   * Additional resource-type-specific details. For self-hosted AI resources and their host resources, contains an `AIDetails` structure.
   *
   * @public
   */
  ResourceInfo?: ResourceInfo | undefined;

  /**
   * The criticality assigned to a resource.
   *
   * @public
   */
  ResourceCriticality?: ResourceCriticality | undefined;

  /**
   * The sources of criticalities determined from a resource.
   *
   * @public
   */
  CriticalitySources?: CriticalitySource[] | undefined;
}

/**
 * @public
 */
export interface GetResourcesV2Response {
  /**
   * An array of resources returned by the operation.
   *
   * @public
   */
  Resources: ResourceResult[] | undefined;

  /**
   * The pagination token to use to request the next page of results. Otherwise, this parameter is null.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetSecurityControlDefinitionRequest {
  /**
   * The ID of the security control to retrieve the definition for. This field doesn’t accept an Amazon Resource Name (ARN).
   *
   * @public
   */
  SecurityControlId: string | undefined;
}

/**
 * An object that describes a security control parameter and the options for customizing it.
 *
 * @public
 */
export interface ParameterDefinition {
  /**
   * Description of a control parameter.
   *
   * @public
   */
  Description: string | undefined;

  /**
   * The options for customizing a control parameter. Customization options vary based on the data type of the parameter.
   *
   * @public
   */
  ConfigurationOptions: ConfigurationOptions | undefined;
}

/**
 * Provides metadata for a security control, including its unique standard-agnostic identifier, title, description, severity, availability in Amazon Web Services Regions, and a link to remediation steps.
 *
 * @public
 */
export interface SecurityControlDefinition {
  /**
   * The unique identifier of a security control across standards. Values for this field typically consist of an Amazon Web Services service name and a number (for example, APIGateway.3). This parameter differs from `SecurityControlArn`, which is a unique Amazon Resource Name (ARN) assigned to a control. The ARN references the security control ID (for example, arn:aws:securityhub:eu-central-1:123456789012:security-control/APIGateway.3).
   *
   * @public
   */
  SecurityControlId: string | undefined;

  /**
   * The title of a security control.
   *
   * @public
   */
  Title: string | undefined;

  /**
   * The description of a security control across standards. This typically summarizes how Security Hub CSPM evaluates the control and the conditions under which it produces a failed finding. This parameter doesn't reference a specific standard.
   *
   * @public
   */
  Description: string | undefined;

  /**
   * A link to Security Hub CSPM documentation that explains how to remediate a failed finding for a security control.
   *
   * @public
   */
  RemediationUrl: string | undefined;

  /**
   * The severity of a security control. For more information about how Security Hub CSPM determines control severity, see [Assigning severity to control findings](https://docs.aws.amazon.com/securityhub/latest/userguide/controls-findings-create-update.html#control-findings-severity) in the *Security Hub CSPM User Guide*.
   *
   * @public
   */
  SeverityRating: SeverityRating | undefined;

  /**
   * Specifies whether a security control is available in the current Amazon Web Services Region.
   *
   * @public
   */
  CurrentRegionAvailability: RegionAvailabilityStatus | undefined;

  /**
   * Security control properties that you can customize. Currently, only parameter customization is supported for select controls. An empty array is returned for controls that don’t support custom properties.
   *
   * @public
   */
  CustomizableProperties?: SecurityControlProperty[] | undefined;

  /**
   * An object that provides a security control parameter name, description, and the options for customizing it. This object is excluded for a control that doesn't support custom parameters.
   *
   * @public
   */
  ParameterDefinitions?: Record<string, ParameterDefinition> | undefined;

  /**
   * The cloud provider whose resources the security control evaluates. For example, `AWS` or `Azure`.
   *
   * @public
   */
  Provider?: SecurityControlsProvider | undefined;
}

/**
 * @public
 */
export interface GetSecurityControlDefinitionResponse {
  /**
   * Provides metadata for a security control, including its unique standard-agnostic identifier, title, description, severity, availability in Amazon Web Services Regions, and a link to remediation steps.
   *
   * @public
   */
  SecurityControlDefinition: SecurityControlDefinition | undefined;
}

/**
 * @public
 */
export interface InviteMembersRequest {
  /**
   * The list of account IDs of the Amazon Web Services accounts to invite to Security Hub CSPM as members.
   *
   * @public
   */
  AccountIds: string[] | undefined;
}

/**
 * @public
 */
export interface InviteMembersResponse {
  /**
   * The list of Amazon Web Services accounts that could not be processed. For each account, the list includes the account ID and the email address.
   *
   * @public
   */
  UnprocessedAccounts?: Result[] | undefined;
}

/**
 * The parameters used to modify an existing Jira Cloud integration.
 *
 * @public
 */
export interface JiraCloudUpdateConfiguration {
  /**
   * The project key for a JiraCloud instance.
   *
   * @public
   */
  ProjectKey?: string | undefined;
}

/**
 * @public
 */
export interface ListAggregatorsV2Request {
  /**
   * The token required for pagination. On your first call, set the value of this parameter to `NULL`. For subsequent calls, to continue listing data, set the value of this parameter to the value returned in the previous response.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAggregatorsV2Response {
  /**
   * An array of aggregators.
   *
   * @public
   */
  AggregatorsV2?: AggregatorV2[] | undefined;

  /**
   * The pagination token to use to request the next page of results. Otherwise, this parameter is null.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAutomationRulesRequest {
  /**
   * A token to specify where to start paginating the response. This is the `NextToken` from a previously truncated response. On your first call to the `ListAutomationRules` API, set the value of this parameter to `NULL`.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of rules to return in the response. This currently ranges from 1 to 100.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAutomationRulesResponse {
  /**
   * Metadata for rules in the calling account. The response includes rules with a `RuleStatus` of `ENABLED` and `DISABLED`.
   *
   * @public
   */
  AutomationRulesMetadata?: AutomationRulesMetadata[] | undefined;

  /**
   * A pagination token for the response.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAutomationRulesV2Request {
  /**
   * The token required for pagination. On your first call, set the value of this parameter to `NULL`. For subsequent calls, to continue listing data, set the value of this parameter to the value returned in the previous response.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAutomationRulesV2Response {
  /**
   * An array of automation rules.
   *
   * @public
   */
  Rules?: AutomationRulesMetadataV2[] | undefined;

  /**
   * The pagination token to use to request the next page of results. Otherwise, this parameter is null.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListConfigurationPoliciesRequest {
  /**
   * The NextToken value that's returned from a previous paginated `ListConfigurationPolicies` request where `MaxResults` was used but the results exceeded the value of that parameter. Pagination continues from the `MaxResults` was used but the results exceeded the value of that parameter. Pagination continues from the end of the previous response that returned the `NextToken` value. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results that's returned by `ListConfigurationPolicies` in each page of the response. When this parameter is used, `ListConfigurationPolicies` returns the specified number of results in a single page and a `NextToken` response element. You can see the remaining results of the initial request by sending another `ListConfigurationPolicies` request with the returned `NextToken` value. A valid range for `MaxResults` is between 1 and 100.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListConfigurationPoliciesResponse {
  /**
   * Provides metadata for each of your configuration policies.
   *
   * @public
   */
  ConfigurationPolicySummaries?: ConfigurationPolicySummary[] | undefined;

  /**
   * The `NextToken` value to include in the next `ListConfigurationPolicies` request. When the results of a `ListConfigurationPolicies` request exceed `MaxResults`, this value can be used to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListConfigurationPolicyAssociationsRequest {
  /**
   * The `NextToken` value that's returned from a previous paginated `ListConfigurationPolicyAssociations` request where `MaxResults` was used but the results exceeded the value of that parameter. Pagination continues from the end of the previous response that returned the `NextToken` value. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results that's returned by `ListConfigurationPolicies` in each page of the response. When this parameter is used, `ListConfigurationPolicyAssociations` returns the specified number of results in a single page and a `NextToken` response element. You can see the remaining results of the initial request by sending another `ListConfigurationPolicyAssociations` request with the returned `NextToken` value. A valid range for `MaxResults` is between 1 and 100.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Options for filtering the `ListConfigurationPolicyAssociations` response. You can filter by the Amazon Resource Name (ARN) or universally unique identifier (UUID) of a configuration, `AssociationType`, or `AssociationStatus`.
   *
   * @public
   */
  Filters?: AssociationFilters | undefined;
}

/**
 * @public
 */
export interface ListConfigurationPolicyAssociationsResponse {
  /**
   * An object that contains the details of each configuration policy association that’s returned in a `ListConfigurationPolicyAssociations` request.
   *
   * @public
   */
  ConfigurationPolicyAssociationSummaries?: ConfigurationPolicyAssociationSummary[] | undefined;

  /**
   * The `NextToken` value to include in the next `ListConfigurationPolicyAssociations` request. When the results of a `ListConfigurationPolicyAssociations` request exceed `MaxResults`, this value can be used to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListConnectorsRequest {
  /**
   * The pagination token to request the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The name of the cloud provider to filter connectors by.
   *
   * @public
   */
  ProviderName?: CspmConnectorProviderName | undefined;

  /**
   * The connectivity status to filter connectors by.
   *
   * @public
   */
  ConnectorStatus?: CspmConnectorStatus | undefined;

  /**
   * The enablement status to filter connectors by.
   *
   * @public
   */
  EnablementStatus?: CspmEnablementStatus | undefined;
}

/**
 * @public
 */
export interface ListConnectorsResponse {
  /**
   * The pagination token to use to request the next page of results. If there are no additional results, this value is null.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * An array of connector summaries.
   *
   * @public
   */
  Connectors: CspmConnectorSummary[] | undefined;
}

/**
 * @public
 */
export interface ListConnectorsV2Request {
  /**
   * The pagination token per the Amazon Web Services Pagination standard
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to be returned.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The name of the third-party provider.
   *
   * @public
   */
  ProviderName?: ConnectorProviderName | undefined;

  /**
   * The status for the connectorV2.
   *
   * @public
   */
  ConnectorStatus?: ConnectorStatus | undefined;

  /**
   * The enablement status to filter connectors by.
   *
   * @public
   */
  EnablementStatus?: EnablementStatus | undefined;
}

/**
 * @public
 */
export interface ListConnectorsV2Response {
  /**
   * The pagination token to use to request the next page of results. Otherwise, this parameter is null.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * An array of connectorV2 summaries.
   *
   * @public
   */
  Connectors: ConnectorSummary[] | undefined;
}

/**
 * @public
 */
export interface ListEnabledProductsForImportRequest {
  /**
   * The token that is required for pagination. On your first call to the `ListEnabledProductsForImport` operation, set the value of this parameter to `NULL`.
   *
   * For subsequent calls to the operation, to continue listing data, set the value of this parameter to the value returned from the previous response.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to return in the response.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListEnabledProductsForImportResponse {
  /**
   * The list of ARNs for the resources that represent your subscriptions to products.
   *
   * @public
   */
  ProductSubscriptions?: string[] | undefined;

  /**
   * The pagination token to use to request the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListExportJobsV2Request {
  /**
   * Filters the results to export jobs that have the specified status.
   *
   * @public
   */
  Status?: ExportStatus | undefined;

  /**
   * Filters the results to export jobs that produce the specified data type.
   *
   * @public
   */
  DataType?: ExportDataType | undefined;

  /**
   * The maximum number of results to return in a single call. Valid range is 1–20.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token required for pagination. On your first call, set the value of this parameter to `NULL`. For subsequent calls, to continue listing data, set the value of this parameter to the value returned in the previous response.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListExportJobsV2Response {
  /**
   * The export jobs that match the request, as `ExportSummary` objects.
   *
   * @public
   */
  Items: ExportSummary[] | undefined;

  /**
   * The pagination token to use to request the next page of results. Otherwise, this parameter is null.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListExposuresByRemediationV2Request {
  /**
   * The unique identifier (ID) of an existing remediation target to list exposure findings for.
   *
   * @public
   */
  TargetUid: string | undefined;

  /**
   * The maximum number of results to return. Valid range is 1-100. If you don't specify a value, the operation returns up to 25 results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token used to paginate the exposures list returned. On your first call to `ListExposuresByRemediationV2`, omit this parameter or set it to `NULL`. For subsequent calls, use the `NextToken` value returned in the previous response to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListExposuresByRemediationV2Response {
  /**
   * An array of exposure findings returned by the operation.
   *
   * @public
   */
  Items: ExposureFinding[] | undefined;

  /**
   * The unique identifier (ID) of the remediation target that the exposure findings are associated with.
   *
   * @public
   */
  TargetUid: string | undefined;

  /**
   * Provides comprehensive details about a resource.
   *
   * @public
   */
  Resource: RemediationResource | undefined;

  /**
   * The total count of exposure findings associated with the remediation target.
   *
   * @public
   */
  TotalCount: number | undefined;

  /**
   * The specific trait associated with the remediation target.
   *
   * @public
   */
  Trait: RemediationTrait | undefined;

  /**
   * The pagination token to use to request the next page of results. Otherwise, this parameter is null.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFindingAggregatorsRequest {
  /**
   * The token returned with the previous set of results. Identifies the next set of results to return.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return. This operation currently only returns a single result.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListFindingAggregatorsResponse {
  /**
   * The list of finding aggregators. This operation currently only returns a single result.
   *
   * @public
   */
  FindingAggregators?: FindingAggregator[] | undefined;

  /**
   * If there are more results, this is the token to provide in the next call to `ListFindingAggregators`.
   *
   * This operation currently only returns a single result.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFreeTrialStatusesV2Request {
  /**
   * The Amazon Web Services account identifiers to list free trial status for. You can specify accounts other than your own only if you are a delegated Security Hub administrator.
   *
   * @public
   */
  AccountIds?: string[] | undefined;

  /**
   * The free trial statuses to filter the results by. Valid values:
   *
   * - `ACTIVE` returns only features with an ongoing free trial period.
   * - `INACTIVE` returns only features whose free trial period has ended, or that never started.
   *
   * @public
   */
  Statuses?: FreeTrialStatusValue[] | undefined;

  /**
   * The maximum number of results to return. If you don't specify a value, Security Hub returns up to 100 results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The pagination token to request the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFreeTrialStatusesV2Response {
  /**
   * An array of free trial statuses, one for each account in scope.
   *
   * @public
   */
  AccountFreeTrialStatuses: AccountFreeTrialStatus[] | undefined;

  /**
   * The pagination token to use to request the next page of results. If there are no additional results, this value is null.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListInvitationsRequest {
  /**
   * The maximum number of items to return in the response.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token that is required for pagination. On your first call to the `ListInvitations` operation, set the value of this parameter to `NULL`.
   *
   * For subsequent calls to the operation, to continue listing data, set the value of this parameter to the value returned from the previous response.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListInvitationsResponse {
  /**
   * The details of the invitations returned by the operation.
   *
   * @public
   */
  Invitations?: Invitation[] | undefined;

  /**
   * The pagination token to use to request the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListMembersRequest {
  /**
   * Specifies which member accounts to include in the response based on their relationship status with the administrator account. The default value is `TRUE`.
   *
   * If `OnlyAssociated` is set to `TRUE`, the response includes member accounts whose relationship status with the administrator account is set to `ENABLED`.
   *
   * If `OnlyAssociated` is set to `FALSE`, the response includes all existing member accounts.
   *
   * @public
   */
  OnlyAssociated?: boolean | undefined;

  /**
   * The maximum number of items to return in the response.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token that is required for pagination. On your first call to the `ListMembers` operation, set the value of this parameter to `NULL`.
   *
   * For subsequent calls to the operation, to continue listing data, set the value of this parameter to the value returned from the previous response.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListMembersResponse {
  /**
   * Member details returned by the operation.
   *
   * @public
   */
  Members?: Member[] | undefined;

  /**
   * The pagination token to use to request the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListOrganizationAdminAccountsRequest {
  /**
   * The maximum number of items to return in the response.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token that is required for pagination. On your first call to the `ListOrganizationAdminAccounts` operation, set the value of this parameter to `NULL`. For subsequent calls to the operation, to continue listing data, set the value of this parameter to the value returned from the previous response.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The feature where the delegated administrator account is listed. Defaults to Security Hub CSPM if not specified.
   *
   * @public
   */
  Feature?: SecurityHubFeature | undefined;
}

/**
 * @public
 */
export interface ListOrganizationAdminAccountsResponse {
  /**
   * The list of Security Hub CSPM administrator accounts.
   *
   * @public
   */
  AdminAccounts?: AdminAccount[] | undefined;

  /**
   * The pagination token to use to request the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The feature where the delegated administrator account is listed. Defaults to Security Hub CSPM CSPM if not specified.
   *
   * @public
   */
  Feature?: SecurityHubFeature | undefined;
}

/**
 * @public
 */
export interface ListSecurityControlDefinitionsRequest {
  /**
   * The Amazon Resource Name (ARN) of the standard that you want to view controls for.
   *
   * @public
   */
  StandardsArn?: string | undefined;

  /**
   * Optional pagination parameter.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * An optional parameter that limits the total results of the API response to the specified number. If this parameter isn't provided in the request, the results include the first 25 security controls that apply to the specified standard. The results also include a `NextToken` parameter that you can use in a subsequent API call to get the next 25 controls. This repeats until all controls for the standard are returned.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A list of cloud providers to filter the security control definitions by. For example, specify `Azure` to return only controls that evaluate Azure resources.
   *
   * @public
   */
  Providers?: SecurityControlsProvider[] | undefined;
}

/**
 * @public
 */
export interface ListSecurityControlDefinitionsResponse {
  /**
   * An array of controls that apply to the specified standard.
   *
   * @public
   */
  SecurityControlDefinitions: SecurityControlDefinition[] | undefined;

  /**
   * A pagination parameter that's included in the response only if it was included in the request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListStandardsControlAssociationsRequest {
  /**
   * The identifier of the control (identified with `SecurityControlId`, `SecurityControlArn`, or a mix of both parameters) that you want to determine the enablement status of in each enabled standard.
   *
   * @public
   */
  SecurityControlId: string | undefined;

  /**
   * Optional pagination parameter.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * An optional parameter that limits the total results of the API response to the specified number. If this parameter isn't provided in the request, the results include the first 25 standard and control associations. The results also include a `NextToken` parameter that you can use in a subsequent API call to get the next 25 associations. This repeats until all associations for the specified control are returned. The number of results is limited by the number of supported Security Hub CSPM standards that you've enabled in the calling account.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * An array that provides the enablement status and other details for each control that applies to each enabled standard.
 *
 * @public
 */
export interface StandardsControlAssociationSummary {
  /**
   * The Amazon Resource Name (ARN) of a standard.
   *
   * @public
   */
  StandardsArn: string | undefined;

  /**
   * A unique standard-agnostic identifier for a control. Values for this field typically consist of an Amazon Web Services service and a number, such as APIGateway.5. This field doesn't reference a specific standard.
   *
   * @public
   */
  SecurityControlId: string | undefined;

  /**
   * The ARN of a control, such as `arn:aws:securityhub:eu-central-1:123456789012:security-control/S3.1`. This parameter doesn't mention a specific standard.
   *
   * @public
   */
  SecurityControlArn: string | undefined;

  /**
   * The enablement status of a control in a specific standard.
   *
   * @public
   */
  AssociationStatus: AssociationStatus | undefined;

  /**
   * The requirement that underlies this control in the compliance framework related to the standard.
   *
   * @public
   */
  RelatedRequirements?: string[] | undefined;

  /**
   * The last time that a control's enablement status in a specified standard was updated.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * The reason for updating a control's enablement status in a specified standard.
   *
   * @public
   */
  UpdatedReason?: string | undefined;

  /**
   * The title of a control.
   *
   * @public
   */
  StandardsControlTitle?: string | undefined;

  /**
   * The description of a control. This typically summarizes how Security Hub CSPM evaluates the control and the conditions under which it produces a failed finding. The parameter may reference a specific standard.
   *
   * @public
   */
  StandardsControlDescription?: string | undefined;
}

/**
 * @public
 */
export interface ListStandardsControlAssociationsResponse {
  /**
   * An array that provides the enablement status and other details for each security control that applies to each enabled standard.
   *
   * @public
   */
  StandardsControlAssociationSummaries: StandardsControlAssociationSummary[] | undefined;

  /**
   * A pagination parameter that's included in the response only if it was included in the request.
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
   * The ARN of the resource to retrieve tags for.
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * The tags associated with a resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * The parameters used to modify an existing ServiceNow integration.
 *
 * @public
 */
export interface ServiceNowUpdateConfiguration {
  /**
   * The Amazon Resource Name (ARN) of the Amazon Web Services Secrets Manager secret that contains the ServiceNow credentials.
   *
   * @public
   */
  SecretArn?: string | undefined;
}

/**
 * The parameters required to update the configuration of an integration provider.
 *
 * @public
 */
export type ProviderUpdateConfiguration =
  | ProviderUpdateConfiguration.AzureMember
  | ProviderUpdateConfiguration.JiraCloudMember
  | ProviderUpdateConfiguration.ServiceNowMember
  | ProviderUpdateConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace ProviderUpdateConfiguration {
  /**
   * The parameters required to update the configuration for a Jira Cloud integration.
   *
   * @public
   */
  export interface JiraCloudMember {
    JiraCloud: JiraCloudUpdateConfiguration;
    ServiceNow?: never;
    Azure?: never;
    $unknown?: never;
  }

  /**
   * The parameters required to update the configuration for a ServiceNow integration.
   *
   * @public
   */
  export interface ServiceNowMember {
    JiraCloud?: never;
    ServiceNow: ServiceNowUpdateConfiguration;
    Azure?: never;
    $unknown?: never;
  }

  /**
   * The parameters required to update the configuration for a Microsoft Azure CSPM integration.
   *
   * @public
   */
  export interface AzureMember {
    JiraCloud?: never;
    ServiceNow?: never;
    Azure: AzureUpdateConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    JiraCloud?: never;
    ServiceNow?: never;
    Azure?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    JiraCloud: (value: JiraCloudUpdateConfiguration) => T;
    ServiceNow: (value: ServiceNowUpdateConfiguration) => T;
    Azure: (value: AzureUpdateConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface RegisterConnectorV2Request {
  /**
   * The authCode retrieved from authUrl to complete the OAuth 2.0 authorization code flow.
   *
   * @public
   */
  AuthCode: string | undefined;

  /**
   * The authState retrieved from authUrl to complete the OAuth 2.0 authorization code flow.
   *
   * @public
   */
  AuthState: string | undefined;
}

/**
 * @public
 */
export interface RegisterConnectorV2Response {
  /**
   * The Amazon Resource Name (ARN) of the connectorV2.
   *
   * @public
   */
  ConnectorArn?: string | undefined;

  /**
   * The UUID of the connectorV2 to identify connectorV2 resource.
   *
   * @public
   */
  ConnectorId: string | undefined;
}

/**
 * @public
 */
export interface StartConfigurationPolicyAssociationRequest {
  /**
   * The Amazon Resource Name (ARN) of a configuration policy, the universally unique identifier (UUID) of a configuration policy, or a value of `SELF_MANAGED_SECURITY_HUB` for a self-managed configuration.
   *
   * @public
   */
  ConfigurationPolicyIdentifier: string | undefined;

  /**
   * The identifier of the target account, organizational unit, or the root to associate with the specified configuration.
   *
   * @public
   */
  Target: Target | undefined;
}

/**
 * @public
 */
export interface StartConfigurationPolicyAssociationResponse {
  /**
   * The UUID of the configuration policy.
   *
   * @public
   */
  ConfigurationPolicyId?: string | undefined;

  /**
   * The identifier of the target account, organizational unit, or the organization root with which the configuration is associated.
   *
   * @public
   */
  TargetId?: string | undefined;

  /**
   * Indicates whether the target is an Amazon Web Services account, organizational unit, or the organization root.
   *
   * @public
   */
  TargetType?: TargetType | undefined;

  /**
   * Indicates whether the association between the specified target and the configuration was directly applied by the Security Hub CSPM delegated administrator or inherited from a parent.
   *
   * @public
   */
  AssociationType?: AssociationType | undefined;

  /**
   * The date and time, in UTC and ISO 8601 format, that the configuration policy association was last updated.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * The current status of the association between the specified target and the configuration.
   *
   * @public
   */
  AssociationStatus?: ConfigurationPolicyAssociationStatus | undefined;

  /**
   * An explanation for a `FAILED` value for `AssociationStatus`.
   *
   * @public
   */
  AssociationStatusMessage?: string | undefined;
}

/**
 * @public
 */
export interface StartConfigurationPolicyDisassociationRequest {
  /**
   * The identifier of the target account, organizational unit, or the root to disassociate from the specified configuration.
   *
   * @public
   */
  Target?: Target | undefined;

  /**
   * The Amazon Resource Name (ARN) of a configuration policy, the universally unique identifier (UUID) of a configuration policy, or a value of `SELF_MANAGED_SECURITY_HUB` for a self-managed configuration.
   *
   * @public
   */
  ConfigurationPolicyIdentifier: string | undefined;
}

/**
 * @public
 */
export interface StartConfigurationPolicyDisassociationResponse {}

/**
 * @public
 */
export interface StartExportJobV2Response {
  /**
   * The unique identifier of the export job that Security Hub started. Use this value with `GetExportJobV2` or `CancelExportJobV2`.
   *
   * @public
   */
  ExportJobId: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The ARN of the resource to apply the tags to.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The tags to add to the resource. You can add up to 50 tags at a time. The tag keys can be no longer than 128 characters. The tag values can be no longer than 256 characters.
   *
   * @public
   */
  Tags: Record<string, string> | undefined;
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
   * The ARN of the resource to remove the tags from.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The tag keys associated with the tags to remove from the resource. You can remove up to 50 tags at a time.
   *
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdateActionTargetRequest {
  /**
   * The ARN of the custom action target to update.
   *
   * @public
   */
  ActionTargetArn: string | undefined;

  /**
   * The updated name of the custom action target.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The updated description for the custom action target.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface UpdateActionTargetResponse {}

/**
 * @public
 */
export interface UpdateAggregatorV2Request {
  /**
   * The ARN of the Aggregator V2.
   *
   * @public
   */
  AggregatorV2Arn: string | undefined;

  /**
   * Determines how Amazon Web Services Regions should be linked to the Aggregator V2.
   *
   * @public
   */
  RegionLinkingMode: string | undefined;

  /**
   * A list of Amazon Web Services Regions linked to the aggegation Region.
   *
   * @public
   */
  LinkedRegions?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateAggregatorV2Response {
  /**
   * The ARN of the Aggregator V2.
   *
   * @public
   */
  AggregatorV2Arn?: string | undefined;

  /**
   * The Amazon Web Services Region where data is aggregated.
   *
   * @public
   */
  AggregationRegion?: string | undefined;

  /**
   * Determines how Amazon Web Services Regions should be linked to the Aggregator V2.
   *
   * @public
   */
  RegionLinkingMode?: string | undefined;

  /**
   * A list of Amazon Web Services Regions linked to the aggegation Region.
   *
   * @public
   */
  LinkedRegions?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateAutomationRuleV2Response {}

/**
 * @public
 */
export interface UpdateConfigurationPolicyRequest {
  /**
   * The Amazon Resource Name (ARN) or universally unique identifier (UUID) of the configuration policy.
   *
   * @public
   */
  Identifier: string | undefined;

  /**
   * The name of the configuration policy. Alphanumeric characters and the following ASCII characters are permitted: `-, ., !, *, /`.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The description of the configuration policy.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The reason for updating the configuration policy.
   *
   * @public
   */
  UpdatedReason?: string | undefined;

  /**
   * An object that defines how Security Hub CSPM is configured. It includes whether Security Hub CSPM is enabled or disabled, a list of enabled security standards, a list of enabled or disabled security controls, and a list of custom parameter values for specified controls. If you provide a list of security controls that are enabled in the configuration policy, Security Hub CSPM disables all other controls (including newly released controls). If you provide a list of security controls that are disabled in the configuration policy, Security Hub CSPM enables all other controls (including newly released controls).
   *
   * When updating a configuration policy, provide a complete list of standards that you want to enable and a complete list of controls that you want to enable or disable. The updated configuration replaces the current configuration.
   *
   * @public
   */
  ConfigurationPolicy?: Policy | undefined;
}

/**
 * @public
 */
export interface UpdateConfigurationPolicyResponse {
  /**
   * The ARN of the configuration policy.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The UUID of the configuration policy.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The name of the configuration policy.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The description of the configuration policy.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The date and time, in UTC and ISO 8601 format, that the configuration policy was last updated.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * The date and time, in UTC and ISO 8601 format, that the configuration policy was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * An object that defines how Security Hub CSPM is configured. It includes whether Security Hub CSPM is enabled or disabled, a list of enabled security standards, a list of enabled or disabled security controls, and a list of custom parameter values for specified controls. If the request included a list of security controls that are enabled in the configuration policy, Security Hub CSPM disables all other controls (including newly released controls). If the request included a list of security controls that are disabled in the configuration policy, Security Hub CSPM enables all other controls (including newly released controls).
   *
   * @public
   */
  ConfigurationPolicy?: Policy | undefined;
}

/**
 * @public
 */
export interface UpdateConnectorRequest {
  /**
   * The unique identifier of the connector to update.
   *
   * @public
   */
  ConnectorId: string | undefined;

  /**
   * The updated description of the connector.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The updated cloud provider configuration for the connector.
   *
   * @public
   */
  Provider?: CspmProviderUpdateConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateConnectorResponse {
  /**
   * The connectivity status of the connector after the update.
   *
   * @public
   */
  ConnectorStatus?: CspmConnectorStatus | undefined;

  /**
   * The enablement status of the connector after the update.
   *
   * @public
   */
  EnablementStatus?: CspmEnablementStatus | undefined;
}

/**
 * @public
 */
export interface UpdateConnectorV2Request {
  /**
   * The UUID of the connectorV2 to identify connectorV2 resource.
   *
   * @public
   */
  ConnectorId: string | undefined;

  /**
   * The description of the connectorV2.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The third-party provider’s service configuration.
   *
   * @public
   */
  Provider?: ProviderUpdateConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateConnectorV2Response {
  /**
   * The status of the connector after the update.
   *
   * @public
   */
  ConnectorStatus?: ConnectorStatus | undefined;

  /**
   * The enablement status of the connector after the update.
   *
   * @public
   */
  EnablementStatus?: EnablementStatus | undefined;
}

/**
 * @public
 */
export interface UpdateFindingAggregatorRequest {
  /**
   * The ARN of the finding aggregator. To obtain the ARN, use `ListFindingAggregators`.
   *
   * @public
   */
  FindingAggregatorArn: string | undefined;

  /**
   * Indicates whether to aggregate findings from all of the available Regions in the current partition. Also determines whether to automatically aggregate findings from new Regions as Security Hub CSPM supports them and you opt into them.
   *
   * The selected option also determines how to use the Regions provided in the Regions list.
   *
   * The options are as follows:
   *
   * - `ALL_REGIONS` - Aggregates findings from all of the Regions where Security Hub CSPM is enabled. When you choose this option, Security Hub CSPM also automatically aggregates findings from new Regions as Security Hub CSPM supports them and you opt into them.
   * - `ALL_REGIONS_EXCEPT_SPECIFIED` - Aggregates findings from all of the Regions where Security Hub CSPM is enabled, except for the Regions listed in the `Regions` parameter. When you choose this option, Security Hub CSPM also automatically aggregates findings from new Regions as Security Hub CSPM supports them and you opt into them.
   * - `SPECIFIED_REGIONS` - Aggregates findings only from the Regions listed in the `Regions` parameter. Security Hub CSPM does not automatically aggregate findings from new Regions.
   * - `NO_REGIONS` - Aggregates no data because no Regions are selected as linked Regions.
   *
   * @public
   */
  RegionLinkingMode: string | undefined;

  /**
   * If `RegionLinkingMode` is `ALL_REGIONS_EXCEPT_SPECIFIED`, then this is a space-separated list of Regions that don't replicate and send findings to the home Region.
   *
   * If `RegionLinkingMode` is `SPECIFIED_REGIONS`, then this is a space-separated list of Regions that do replicate and send findings to the home Region.
   *
   * An `InvalidInputException` error results if you populate this field while `RegionLinkingMode` is `NO_REGIONS`.
   *
   * @public
   */
  Regions?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateFindingAggregatorResponse {
  /**
   * The ARN of the finding aggregator.
   *
   * @public
   */
  FindingAggregatorArn?: string | undefined;

  /**
   * The home Region. Findings generated in linked Regions are replicated and sent to the home Region.
   *
   * @public
   */
  FindingAggregationRegion?: string | undefined;

  /**
   * Indicates whether to link all Regions, all Regions except for a list of excluded Regions, or a list of included Regions.
   *
   * @public
   */
  RegionLinkingMode?: string | undefined;

  /**
   * The list of excluded Regions or included Regions.
   *
   * @public
   */
  Regions?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateFindingsRequest {
  /**
   * A collection of attributes that specify which findings you want to update.
   *
   * @public
   */
  Filters: AwsSecurityFindingFilters | undefined;

  /**
   * The updated note for the finding.
   *
   * @public
   */
  Note?: NoteUpdate | undefined;

  /**
   * The updated record state for the finding.
   *
   * @public
   */
  RecordState?: RecordState | undefined;
}

/**
 * @public
 */
export interface UpdateFindingsResponse {}

/**
 * @public
 */
export interface UpdateInsightRequest {
  /**
   * The ARN of the insight that you want to update.
   *
   * @public
   */
  InsightArn: string | undefined;

  /**
   * The updated name for the insight.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The updated filters that define this insight.
   *
   * @public
   */
  Filters?: AwsSecurityFindingFilters | undefined;

  /**
   * The updated `GroupBy` attribute that defines this insight.
   *
   * @public
   */
  GroupByAttribute?: string | undefined;
}

/**
 * @public
 */
export interface UpdateInsightResponse {}

/**
 * @public
 */
export interface UpdateOrganizationConfigurationRequest {
  /**
   * Whether to automatically enable Security Hub CSPM in new member accounts when they join the organization.
   *
   * If set to `true`, then Security Hub CSPM is automatically enabled in new accounts. If set to `false`, then Security Hub CSPM isn't enabled in new accounts automatically. The default value is `false`.
   *
   * If the `ConfigurationType` of your organization is set to `CENTRAL`, then this field is set to `false` and can't be changed in the home Region and linked Regions. However, in that case, the delegated administrator can create a configuration policy in which Security Hub CSPM is enabled and associate the policy with new organization accounts.
   *
   * @public
   */
  AutoEnable: boolean | undefined;

  /**
   * Whether to automatically enable Security Hub CSPM [default standards](https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-standards-enable-disable.html) in new member accounts when they join the organization.
   *
   * The default value of this parameter is equal to `DEFAULT`.
   *
   * If equal to `DEFAULT`, then Security Hub CSPM default standards are automatically enabled for new member accounts. If equal to `NONE`, then default standards are not automatically enabled for new member accounts.
   *
   * If the `ConfigurationType` of your organization is set to `CENTRAL`, then this field is set to `NONE` and can't be changed in the home Region and linked Regions. However, in that case, the delegated administrator can create a configuration policy in which specific security standards are enabled and associate the policy with new organization accounts.
   *
   * @public
   */
  AutoEnableStandards?: AutoEnableStandards | undefined;

  /**
   * Provides information about the way an organization is configured in Security Hub CSPM.
   *
   * @public
   */
  OrganizationConfiguration?: OrganizationConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateOrganizationConfigurationResponse {}

/**
 * @public
 */
export interface UpdateSecurityControlRequest {
  /**
   * The Amazon Resource Name (ARN) or ID of the control to update.
   *
   * @public
   */
  SecurityControlId: string | undefined;

  /**
   * An object that specifies which security control parameters to update.
   *
   * @public
   */
  Parameters: Record<string, ParameterConfiguration> | undefined;

  /**
   * The most recent reason for updating the properties of the security control. This field accepts alphanumeric characters in addition to white spaces, dashes, and underscores.
   *
   * @public
   */
  LastUpdateReason?: string | undefined;
}

/**
 * @public
 */
export interface UpdateSecurityControlResponse {}

/**
 * @public
 */
export interface UpdateSecurityHubConfigurationRequest {
  /**
   * Whether to automatically enable new controls when they are added to standards that are enabled.
   *
   * By default, this is set to `true`, and new controls are enabled automatically. To not automatically enable new controls, set this to `false`.
   *
   * When you automatically enable new controls, you can interact with the controls in the console and programmatically immediately after release. However, automatically enabled controls have a temporary default status of `DISABLED`. It can take up to several days for Security Hub CSPM to process the control release and designate the control as `ENABLED` in your account. During the processing period, you can manually enable or disable a control, and Security Hub CSPM will maintain that designation regardless of whether you have `AutoEnableControls` set to `true`.
   *
   * @public
   */
  AutoEnableControls?: boolean | undefined;

  /**
   * Updates whether the calling account has consolidated control findings turned on. If the value for this field is set to `SECURITY_CONTROL`, Security Hub CSPM generates a single finding for a control check even when the check applies to multiple enabled standards.
   *
   * If the value for this field is set to `STANDARD_CONTROL`, Security Hub CSPM generates separate findings for a control check when the check applies to multiple enabled standards.
   *
   * For accounts that are part of an organization, this value can only be updated in the administrator account.
   *
   * @public
   */
  ControlFindingGenerator?: ControlFindingGenerator | undefined;
}

/**
 * @public
 */
export interface UpdateSecurityHubConfigurationResponse {}

/**
 * @public
 */
export interface UpdateStandardsControlRequest {
  /**
   * The ARN of the security standard control to enable or disable.
   *
   * @public
   */
  StandardsControlArn: string | undefined;

  /**
   * The updated status of the security standard control.
   *
   * @public
   */
  ControlStatus?: ControlStatus | undefined;

  /**
   * A description of the reason why you are disabling a security standard control. If you are disabling a control, then this is required.
   *
   * @public
   */
  DisabledReason?: string | undefined;
}

/**
 * @public
 */
export interface UpdateStandardsControlResponse {}

/**
 * Enables the creation of filtering criteria for security findings.
 *
 * @public
 */
export interface CompositeFilter {
  /**
   * Enables filtering based on string field values.
   *
   * @public
   */
  StringFilters?: OcsfStringFilter[] | undefined;

  /**
   * Enables filtering based on date and timestamp fields.
   *
   * @public
   */
  DateFilters?: OcsfDateFilter[] | undefined;

  /**
   * Enables filtering based on boolean field values.
   *
   * @public
   */
  BooleanFilters?: OcsfBooleanFilter[] | undefined;

  /**
   * Enables filtering based on numerical field values.
   *
   * @public
   */
  NumberFilters?: OcsfNumberFilter[] | undefined;

  /**
   * Enables filtering based on map field values.
   *
   * @public
   */
  MapFilters?: OcsfMapFilter[] | undefined;

  /**
   * A list of IP address filters that allowing you to filter findings based on IP address properties.
   *
   * @public
   */
  IpFilters?: OcsfIpFilter[] | undefined;

  /**
   * Provides an additional level of filtering, creating a three-layer nested structure. The first layer is a `CompositeFilters` array with a `CompositeOperator` (`AND`/`OR`). The second layer is a `CompositeFilter` object that contains direct filters and `NestedCompositeFilters`. The third layer is `NestedCompositeFilters`, which contains additional filter conditions.
   *
   * @public
   */
  NestedCompositeFilters?: CompositeFilter[] | undefined;

  /**
   * The logical operator used to combine multiple filter conditions.
   *
   * @public
   */
  Operator?: AllowedOperators | undefined;
}

/**
 * A filter structure that contains a logical combination of string filters and nested composite filters for findings trend data.
 *
 * @public
 */
export interface FindingsTrendsCompositeFilter {
  /**
   * A list of string filters that apply to findings trend data fields.
   *
   * @public
   */
  StringFilters?: FindingsTrendsStringFilter[] | undefined;

  /**
   * A list of nested composite filters that you can use to create complex filter conditions for findings trend data.
   *
   * @public
   */
  NestedCompositeFilters?: FindingsTrendsCompositeFilter[] | undefined;

  /**
   * The logical operator (AND, OR) to apply between the string filters and nested composite filters.
   *
   * @public
   */
  Operator?: AllowedOperators | undefined;
}

/**
 * Enables the creation of criteria for Amazon Web Services resources in Security Hub CSPM.
 *
 * @public
 */
export interface ResourcesCompositeFilter {
  /**
   * Enables filtering based on string field values.
   *
   * @public
   */
  StringFilters?: ResourcesStringFilter[] | undefined;

  /**
   * Enables filtering based on date and timestamp field values.
   *
   * @public
   */
  DateFilters?: ResourcesDateFilter[] | undefined;

  /**
   * Enables filtering based on numerical field values.
   *
   * @public
   */
  NumberFilters?: ResourcesNumberFilter[] | undefined;

  /**
   * Enables filtering based on map-based field values.
   *
   * @public
   */
  MapFilters?: ResourcesMapFilter[] | undefined;

  /**
   * Provides an additional level of filtering, creating a three-layer nested structure. The first layer is a `CompositeFilters` array with a `CompositeOperator` (`AND`/`OR`). The second layer is a `CompositeFilter` object that contains direct filters and `NestedCompositeFilters`. The third layer is `NestedCompositeFilters`, which contains additional filter conditions.
   *
   * @public
   */
  NestedCompositeFilters?: ResourcesCompositeFilter[] | undefined;

  /**
   * The logical operator used to combine multiple filter conditions.
   *
   * @public
   */
  Operator?: AllowedOperators | undefined;
}

/**
 * A filter structure that contains a logical combination of string filters and nested composite filters for resources trend data.
 *
 * @public
 */
export interface ResourcesTrendsCompositeFilter {
  /**
   * A list of string filters that apply to resources trend data fields.
   *
   * @public
   */
  StringFilters?: ResourcesTrendsStringFilter[] | undefined;

  /**
   * A list of nested composite filters that you can use to create complex filter conditions for resources trend data.
   *
   * @public
   */
  NestedCompositeFilters?: ResourcesTrendsCompositeFilter[] | undefined;

  /**
   * The logical operator (AND, OR) to apply between the string filters and nested composite filters.
   *
   * @public
   */
  Operator?: AllowedOperators | undefined;
}

/**
 * The structure that defines filters to apply to findings trend data queries.
 *
 * @public
 */
export interface FindingsTrendsFilters {
  /**
   * A list of composite filters to apply to the findings trend data.
   *
   * @public
   */
  CompositeFilters?: FindingsTrendsCompositeFilter[] | undefined;

  /**
   * The logical operator (AND, OR) to apply between multiple composite filters.
   *
   * @public
   */
  CompositeOperator?: AllowedOperators | undefined;
}

/**
 * Specifies the filtering criteria for security findings using OCSF.
 *
 * @public
 */
export interface OcsfFindingFilters {
  /**
   * Enables the creation of complex filtering conditions by combining filter criteria.
   *
   * @public
   */
  CompositeFilters?: CompositeFilter[] | undefined;

  /**
   * The logical operators used to combine the filtering on multiple `CompositeFilters`.
   *
   * @public
   */
  CompositeOperator?: AllowedOperators | undefined;
}

/**
 * Enables filtering of Amazon Web Services resources based on data.
 *
 * @public
 */
export interface ResourcesFilters {
  /**
   * A collection of complex filtering conditions that can be applied to Amazon Web Services resources.
   *
   * @public
   */
  CompositeFilters?: ResourcesCompositeFilter[] | undefined;

  /**
   * The logical operator used to combine multiple filter conditions in the structure.
   *
   * @public
   */
  CompositeOperator?: AllowedOperators | undefined;
}

/**
 * The structure that defines filters to apply to resources trend data queries.
 *
 * @public
 */
export interface ResourcesTrendsFilters {
  /**
   * A list of composite filters to apply to the resources trend data.
   *
   * @public
   */
  CompositeFilters?: ResourcesTrendsCompositeFilter[] | undefined;

  /**
   * The logical operator (AND, OR) to apply between multiple composite filters.
   *
   * @public
   */
  CompositeOperator?: AllowedOperators | undefined;
}

/**
 * The configuration for a findings export: the output format, an optional set of filters, and the fields to include.
 *
 * @public
 */
export interface FindingsOutput {
  /**
   * The output format of the export. `CSV` produces comma-separated rows that are suitable for spreadsheets and analysis tools. `OCSF_JSON` produces newline-delimited JSON records in the Open Cybersecurity Schema Framework (OCSF) format used elsewhere in Security Hub.
   *
   * @public
   */
  Format: FindingsExportFormat | undefined;

  /**
   * An optional set of OCSF finding filters that restrict which findings are exported. The filter structure is the same as the one used by `GetFindingsV2`. If you omit this member, Security Hub exports all findings available to the caller. When echoed by `GetExportJobV2`, relative date ranges are returned unresolved.
   *
   * @public
   */
  Filters?: OcsfFindingFilters | undefined;

  /**
   * The OCSF finding fields to include in the export, specified as OCSF field paths (for example, `finding_info.title` or `severity`). You can specify from 1 to 50 fields.
   *
   * Whether this parameter is required depends on the value of `Format`:
   *
   * - `CSV` – Required. The field paths that you specify become the columns of the output, in the order that you provide them. If you omit this parameter, the request returns a `ValidationException`.
   * - `OCSF_JSON` – Not supported. This format includes each finding in full, so field selection doesn't apply. If you specify this parameter, the request returns a `ValidationException`.
   *
   * @public
   */
  SelectedFields?: FindingsSelectableField[] | undefined;
}

/**
 * @public
 */
export interface GetFindingsTrendsV2Request {
  /**
   * The filters to apply to the findings trend data.
   *
   * @public
   */
  Filters?: FindingsTrendsFilters | undefined;

  /**
   * The starting timestamp for the time period to analyze findings trends, in ISO 8601 format.
   *
   * @public
   */
  StartTime: Date | undefined;

  /**
   * The ending timestamp for the time period to analyze findings trends, in ISO 8601 format.
   *
   * @public
   */
  EndTime: Date | undefined;

  /**
   * The token to use for paginating results. This value is returned in the response if more results are available.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of trend data points to return in a single response.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface GetFindingsV2Request {
  /**
   * The finding attributes used to define a condition to filter the returned OCSF findings. You can filter up to 10 composite filters. For each filter type inside of a composite filter, you can provide up to 20 filters.
   *
   * @public
   */
  Filters?: OcsfFindingFilters | undefined;

  /**
   * Limits the results to findings from specific organizational units or from the delegated administrator's organization. Only the delegated administrator account can use this parameter. Other accounts receive an `AccessDeniedException`.
   *
   * This parameter is optional. If you omit it, the delegated administrator sees findings from all accounts across the entire organization. Other accounts see only their own findings.
   *
   * You can specify up to 10 entries in `Scopes.AwsOrganizations`. If multiple entries are specified, the entries are combined using OR logic.
   *
   * @public
   */
  Scopes?: FindingScopes | undefined;

  /**
   * The finding attributes used to sort the list of returned findings.
   *
   * @public
   */
  SortCriteria?: SortCriterion[] | undefined;

  /**
   * The token required for pagination. On your first call, set the value of this parameter to `NULL`. For subsequent calls, to continue listing data, set the value of this parameter to the value returned in the previous response.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface GetResourcesTrendsV2Request {
  /**
   * The filters to apply to the resources trend data.
   *
   * @public
   */
  Filters?: ResourcesTrendsFilters | undefined;

  /**
   * The starting timestamp for the time period to analyze resources trends, in ISO 8601 format.
   *
   * @public
   */
  StartTime: Date | undefined;

  /**
   * The ending timestamp for the time period to analyze resources trends, in ISO 8601 format.
   *
   * @public
   */
  EndTime: Date | undefined;

  /**
   * The token to use for paginating results. This value is returned in the response if more results are available.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of trend data points to return in a single response.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface GetResourcesV2Request {
  /**
   * Filters resources based on a set of criteria.
   *
   * @public
   */
  Filters?: ResourcesFilters | undefined;

  /**
   * Limits the results to resources from specific organizational units or from the delegated administrator's organization. Only the delegated administrator account can use this parameter. Other accounts receive an `AccessDeniedException`.
   *
   * This parameter is optional. If you omit it, the delegated administrator sees resources from all accounts across the entire organization. Other accounts see only their own resources.
   *
   * You can specify up to 10 entries in `Scopes.AwsOrganizations`. If multiple entries are specified, the entries are combined using OR logic.
   *
   * @public
   */
  Scopes?: ResourceScopes | undefined;

  /**
   * The resource attributes used to sort the list of returned resources.
   *
   * @public
   */
  SortCriteria?: SortCriterion[] | undefined;

  /**
   * The token required for pagination. On your first call, set the value of this parameter to `NULL`. For subsequent calls, to continue listing data, set the value of this parameter to the value returned in the previous response.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Defines the how the finding attribute should be grouped.
 *
 * @public
 */
export interface GroupByRule {
  /**
   * The criteria used to select which security findings should be included in the grouping operation.
   *
   * @public
   */
  Filters?: OcsfFindingFilters | undefined;

  /**
   * The attribute by which filtered findings should be grouped.
   *
   * @public
   */
  GroupByField: GroupByField | undefined;
}

/**
 * Defines the configuration for organizing and categorizing Amazon Web Services resources based on associated security findings.
 *
 * @public
 */
export interface ResourceGroupByRule {
  /**
   * Specifies the attribute that resources should be grouped by.
   *
   * @public
   */
  GroupByField: ResourceGroupByField | undefined;

  /**
   * The criteria used to select resources and associated security findings.
   *
   * @public
   */
  Filters?: ResourcesFilters | undefined;
}

/**
 * Specifies what data to export and how to format it. This is a union: you must specify exactly one member. Currently, the only supported member is `Findings`.
 *
 * @public
 */
export type ExportOutput =
  | ExportOutput.FindingsMember
  | ExportOutput.$UnknownMember;

/**
 * @public
 */
export namespace ExportOutput {
  /**
   * Configures an export of Security Hub findings, including the output format and any filters or selected fields.
   *
   * @public
   */
  export interface FindingsMember {
    Findings: FindingsOutput;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Findings?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    Findings: (value: FindingsOutput) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface GetExportJobV2Response {
  /**
   * The unique identifier of the export job.
   *
   * @public
   */
  ExportJobId: string | undefined;

  /**
   * The user-provided name of the export job, if one was specified when the job was started.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The current state of the export job.
   *
   * @public
   */
  Status: ExportStatus | undefined;

  /**
   * The category of data that the export job produces.
   *
   * @public
   */
  DataType: ExportDataType | undefined;

  /**
   * The output configuration that the export job was started with, including the format and any filters or selected fields.
   *
   * @public
   */
  OutputConfiguration?: ExportOutput | undefined;

  /**
   * The organization scopes that the export job was started with, echoed verbatim. This parameter is absent if the caller didn't supply `Scopes`. It contains only the organization or organizational unit (OU) identifiers that the caller submitted; it never contains resolved member-account identifiers.
   *
   * @public
   */
  Scopes?: ExportScopes | undefined;

  /**
   * The destination that the export job writes to.
   *
   * @public
   */
  Destination: ExportDestination | undefined;

  /**
   * A code that classifies why the export job failed. Present only when `Status` is `FAILED`.
   *
   * @public
   */
  FailureCode?: ExportFailureCode | undefined;

  /**
   * A human-readable message that provides more detail about why the export job failed. Present only when `Status` is `FAILED`.
   *
   * @public
   */
  FailureMessage?: string | undefined;

  /**
   * The time when the export job was created.
   *
   * For more information about the validation and formatting of timestamp fields in Security Hub, see [Timestamps](https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps).
   *
   * @public
   */
  StartedAt: Date | undefined;

  /**
   * The time when the export job reached a terminal state (`SUCCEEDED`, `FAILED`, or `CANCELLED`). This parameter is absent while the job is `RUNNING`.
   *
   * For more information about the validation and formatting of timestamp fields in Security Hub, see [Timestamps](https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps).
   *
   * @public
   */
  EndedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetFindingStatisticsV2Request {
  /**
   * Specifies how security findings should be aggregated and organized in the statistical analysis. It can accept up to 5 `groupBy` fields in a single call.
   *
   * @public
   */
  GroupByRules: GroupByRule[] | undefined;

  /**
   * Limits the results to findings from specific organizational units or from the delegated administrator's organization. Only the delegated administrator account can use this parameter. Other accounts receive an `AccessDeniedException`.
   *
   * This parameter is optional. If you omit it, the delegated administrator sees statistics from all accounts across the entire organization. Other accounts see only statistics for their own findings.
   *
   * You can specify up to 10 entries in `Scopes.AwsOrganizations`. If multiple entries are specified, the entries are combined using OR logic.
   *
   * @public
   */
  Scopes?: FindingScopes | undefined;

  /**
   * Orders the aggregation count in descending or ascending order. Descending order is the default.
   *
   * @public
   */
  SortOrder?: SortOrder | undefined;

  /**
   * The maximum number of results to be returned.
   *
   * @public
   */
  MaxStatisticResults?: number | undefined;
}

/**
 * @public
 */
export interface GetResourcesStatisticsV2Request {
  /**
   * How resource statistics should be aggregated and organized in the response.
   *
   * @public
   */
  GroupByRules: ResourceGroupByRule[] | undefined;

  /**
   * Limits the results to resources from specific organizational units or from the delegated administrator's organization. Only the delegated administrator account can use this parameter. Other accounts receive an `AccessDeniedException`.
   *
   * This parameter is optional. If you omit it, the delegated administrator sees statistics from all accounts across the entire organization. Other accounts see only statistics for their own resources.
   *
   * You can specify up to 10 entries in `Scopes.AwsOrganizations`. If multiple entries are specified, the entries are combined using OR logic.
   *
   * @public
   */
  Scopes?: ResourceScopes | undefined;

  /**
   * Sorts aggregated statistics.
   *
   * @public
   */
  SortOrder?: SortOrder | undefined;

  /**
   * The maximum number of results to be returned.
   *
   * @public
   */
  MaxStatisticResults?: number | undefined;
}

/**
 * @public
 */
export interface StartExportJobV2Request {
  /**
   * An optional, user-provided name for the export job that helps you identify it in `ListExportJobsV2` results. The value can be 1–256 characters. Alphanumeric characters, spaces, and the following ASCII characters are permitted: `. _ , : ( ) / + -`.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The destination that Security Hub writes the export to. You must specify exactly one destination type. Currently, the only supported type is Amazon S3.
   *
   * @public
   */
  Destination: ExportDestination | undefined;

  /**
   * Specifies what data to export and how to format it. You must specify exactly one output type. Currently, the only supported type is `Findings`.
   *
   * @public
   */
  OutputConfiguration: ExportOutput | undefined;

  /**
   * Limits the export to findings from specific organizational units (OUs) or from the delegated administrator's organization. Only the delegated administrator account can use this parameter; other accounts that specify it receive an `AccessDeniedException`.
   *
   * This parameter is optional. If you omit it, the delegated administrator exports findings from all accounts across the entire organization, and other accounts export only their own findings.
   *
   * You can specify up to 10 entries in `Scopes.AwsOrganizations`. If you specify multiple entries, Security Hub combines them using OR logic.
   *
   * @public
   */
  Scopes?: ExportScopes | undefined;

  /**
   * A unique identifier used to ensure idempotency.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * Defines the parameters and conditions used to evaluate and filter security findings or resources.
 *
 * @public
 */
export type Criteria =
  | Criteria.OcsfFindingCriteriaMember
  | Criteria.ResourceCriteriaMember
  | Criteria.$UnknownMember;

/**
 * @public
 */
export namespace Criteria {
  /**
   * The filtering conditions that align with OCSF standards.
   *
   * @public
   */
  export interface OcsfFindingCriteriaMember {
    OcsfFindingCriteria: OcsfFindingFilters;
    ResourceCriteria?: never;
    $unknown?: never;
  }

  /**
   * The filtering conditions for resources.
   *
   * @public
   */
  export interface ResourceCriteriaMember {
    OcsfFindingCriteria?: never;
    ResourceCriteria: ResourcesFilters;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    OcsfFindingCriteria?: never;
    ResourceCriteria?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    OcsfFindingCriteria: (value: OcsfFindingFilters) => T;
    ResourceCriteria: (value: ResourcesFilters) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateAutomationRuleV2Request {
  /**
   * The name of the V2 automation rule.
   *
   * @public
   */
  RuleName: string | undefined;

  /**
   * The status of the V2 automation rule.
   *
   * @public
   */
  RuleStatus?: RuleStatusV2 | undefined;

  /**
   * A description of the V2 automation rule.
   *
   * @public
   */
  Description: string | undefined;

  /**
   * The value for the rule priority.
   *
   * @public
   */
  RuleOrder: number | undefined;

  /**
   * The filtering type and configuration of the automation rule.
   *
   * @public
   */
  Criteria: Criteria | undefined;

  /**
   * A list of actions to be performed when the rule criteria is met.
   *
   * @public
   */
  Actions: AutomationRulesActionV2[] | undefined;

  /**
   * A list of key-value pairs associated with the V2 automation rule.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * A unique identifier used to ensure idempotency.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface GetAutomationRuleV2Response {
  /**
   * The ARN of the V2 automation rule.
   *
   * @public
   */
  RuleArn?: string | undefined;

  /**
   * The ID of the V2 automation rule.
   *
   * @public
   */
  RuleId?: string | undefined;

  /**
   * The value for the rule priority.
   *
   * @public
   */
  RuleOrder?: number | undefined;

  /**
   * The name of the V2 automation rule.
   *
   * @public
   */
  RuleName?: string | undefined;

  /**
   * The status of the V2 automation automation rule.
   *
   * @public
   */
  RuleStatus?: RuleStatusV2 | undefined;

  /**
   * A description of the automation rule.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The filtering type and configuration of the V2 automation rule.
   *
   * @public
   */
  Criteria?: Criteria | undefined;

  /**
   * A list of actions performed when the rule criteria is met.
   *
   * @public
   */
  Actions?: AutomationRulesActionV2[] | undefined;

  /**
   * The timestamp when the V2 automation rule was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The timestamp when the V2 automation rule was updated.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface UpdateAutomationRuleV2Request {
  /**
   * The ARN of the automation rule.
   *
   * @public
   */
  Identifier: string | undefined;

  /**
   * The status of the automation rule.
   *
   * @public
   */
  RuleStatus?: RuleStatusV2 | undefined;

  /**
   * Represents a value for the rule priority.
   *
   * @public
   */
  RuleOrder?: number | undefined;

  /**
   * A description of the automation rule.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The name of the automation rule.
   *
   * @public
   */
  RuleName?: string | undefined;

  /**
   * The filtering type and configuration of the automation rule.
   *
   * @public
   */
  Criteria?: Criteria | undefined;

  /**
   * A list of actions to be performed when the rule criteria is met.
   *
   * @public
   */
  Actions?: AutomationRulesActionV2[] | undefined;
}
