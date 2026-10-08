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
  RecordState,
  RegionAvailabilityStatus,
  RemediationPriority,
  RemediationStatus,
  ResourceCategory,
  ResourceGroupByField,
  ResourcesDateField,
  ResourcesMapField,
  ResourcesNumberField,
  ResourcesStringField,
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
  DateFilter,
  MapFilter,
  NoteUpdate,
  NumberFilter,
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
  RemediationCompositeFilter,
  Result,
  SortCriterion,
  Target,
} from "./models_2";

/**
 * <p>Contains the criteria used to filter remediation targets, such as resource type, priority,
 *          or status.</p>
 * @public
 */
export interface RemediationFilters {
  /**
   * <p>A collection of complex filtering conditions that can be applied to remediation target data.</p>
   * @public
   */
  CompositeFilters?: RemediationCompositeFilter[] | undefined;
}

/**
 * @public
 */
export interface GetRemediationsV2Request {
  /**
   * <p>The unique identifier (ID) of an existing remediation target to return. Returns the single
   *          matching target. You can't use <code>TargetUid</code> together with <code>MetadataUid</code>
   *          or <code>Filters</code>.</p>
   * @public
   */
  TargetUid?: string | undefined;

  /**
   * <p>The unique identifier (ID) of the Security Hub exposure finding, found under the
   *          <code>metadata.uid</code> field of the finding. Returns the remediation targets associated with
   *          that finding. You can't use <code>MetadataUid</code> together with <code>TargetUid</code> or
   *          <code>Filters</code>.</p>
   * @public
   */
  MetadataUid?: string | undefined;

  /**
   * <p>Filters remediation targets based on a set of criteria. You can't use <code>Filters</code>
   *          together with <code>TargetUid</code> or <code>MetadataUid</code>.</p>
   * @public
   */
  Filters?: RemediationFilters | undefined;

  /**
   * <p>Specifies whether to show remediation target guidance.</p>
   * @public
   */
  ShowGuidance?: boolean | undefined;

  /**
   * <p>The format of the remediation guidance examples to return. Valid values are <code>All</code>,
   *          <code>AwsCli</code>, <code>Cli</code>, <code>Python</code>, <code>Terraform</code>,
   *          <code>Cdk</code>, <code>CloudFormation</code>, <code>IaC</code>, and <code>Template</code>.
   *          If you don't specify a value, all formats are returned. Applies only when
   *          <code>ShowGuidance</code> is <code>true</code>.</p>
   * @public
   */
  GuidanceFormat?: GuidanceFormat | undefined;

  /**
   * <p>The maximum number of results to return. Valid range is 1-100. If you don't specify a value,
   *          the operation returns up to 25 results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token used to paginate the remediations target list returned.
   *          On your first call to <code>GetRemediationsV2</code>, omit this parameter or set it
   *          to <code>NULL</code>. For subsequent calls, use the <code>NextToken</code> value returned in
   *          the previous response to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>The context behind the remediation target's existence and guidance.</p>
 * @public
 */
export interface RemediationGuidanceContext {
  /**
   * <p>Explains the cause which directly created the remediation target.</p>
   * @public
   */
  ProblemStatement?: string | undefined;

  /**
   * <p>An assessment of the existing risk the remediation target creates.</p>
   * @public
   */
  RiskAssessment?: string | undefined;

  /**
   * <p>The scope of the resources affected by the resolution of the remediation target.</p>
   * @public
   */
  AffectedScope?: string | undefined;

  /**
   * <p>An array of prerequisite steps in resolving the remediation target.</p>
   * @public
   */
  Prerequisites?: string[] | undefined;
}

/**
 * <p>Provided remediation guidance examples in different formats that can be run for remediating the target.</p>
 * @public
 */
export interface RemediationGuidanceExamples {
  /**
   * <p>An CLI snippet version of the example.</p>
   * @public
   */
  AwsCli?: string | undefined;

  /**
   * <p>A CLI snippet version of the example.</p>
   * @public
   */
  Cli?: string | undefined;

  /**
   * <p>A Python snippet version of the example.</p>
   * @public
   */
  Python?: string | undefined;

  /**
   * <p>A Terraform snippet version of the example.</p>
   * @public
   */
  Terraform?: string | undefined;

  /**
   * <p>A CDK snippet version of the example.</p>
   * @public
   */
  Cdk?: string | undefined;

  /**
   * <p>A CloudFormation snippet version of the example.</p>
   * @public
   */
  CloudFormation?: string | undefined;

  /**
   * <p>An IaC snippet version of the example.</p>
   * @public
   */
  IaC?: string | undefined;

  /**
   * <p>A Template snippet version of the example.</p>
   * @public
   */
  Template?: string | undefined;
}

/**
 * <p>The metadata of the remediation guidance.</p>
 * @public
 */
export interface RemediationGuidanceMetadata {
  /**
   * <p>The resource type of the remediation target.</p>
   * @public
   */
  ResourceType: string | undefined;

  /**
   * <p>The exposure type of the related exposure findings.</p>
   * @public
   */
  ExposureType: string | undefined;

  /**
   * <p>The titles of traits this guidance applies to.</p>
   * @public
   */
  TraitTitles: string[] | undefined;

  /**
   * <p>The extent to which changes made in accordance with the guidance can be reversed, for example <code>Fully reversible</code>.</p>
   * @public
   */
  Reversibility: string | undefined;

  /**
   * <p>When the fix takes effect, for example <code>Immediate</code> or <code>Deferred</code>.</p>
   * @public
   */
  FixEffect: string | undefined;

  /**
   * <p>The risk when implementing the guidance provided.</p>
   * @public
   */
  RiskLevel: string | undefined;

  /**
   * <p>The extent to which the guidance can be automated, for example <code>Full</code>.</p>
   * @public
   */
  AutomationLevel?: string | undefined;

  /**
   * <p>Specifies whether human review is required.</p>
   * @public
   */
  HumanReviewRequired?: boolean | undefined;

  /**
   * <p>Timestamp of when the guidance was generated.</p>
   *          <p>For more information about the validation and formatting of timestamp fields in Security Hub CSPM, see <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps">Timestamps</a>.</p>
   * @public
   */
  GeneratedAt?: Date | undefined;

  /**
   * <p>Verification status of the guidance.</p>
   * @public
   */
  VerificationStatus?: string | undefined;
}

/**
 * <p>A parameter used in running the guidance steps.</p>
 * @public
 */
export interface RemediationParameter {
  /**
   * <p>The name of the parameter.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The type of the parameter.</p>
   * @public
   */
  Type: string | undefined;

  /**
   * <p>A description of the parameter.</p>
   * @public
   */
  Description: string | undefined;

  /**
   * <p>Specifies whether the parameter is required for running the guidance steps.</p>
   * @public
   */
  Required?: boolean | undefined;
}

/**
 * <p>A step in the remediation guidance.</p>
 * @public
 */
export interface RemediationStep {
  /**
   * <p>The phase of the remediation plan that this step belongs to (for example, <code>FIX</code>).</p>
   * @public
   */
  Phase: string | undefined;

  /**
   * <p>A description of what the step does.</p>
   * @public
   */
  Description: string | undefined;

  /**
   * <p>Which service this step is performed in.</p>
   * @public
   */
  Service: string | undefined;

  /**
   * <p>The action to be taken for this step.</p>
   * @public
   */
  Action: string | undefined;

  /**
   * <p>The logic behind the existence of this step.</p>
   * @public
   */
  Logic?: string | undefined;

  /**
   * <p>The inverse of the step, to be used if the step needs to be rolled back.</p>
   * @public
   */
  Inverse?: string | undefined;

  /**
   * <p>The action to take after the step to verify its success.</p>
   * @public
   */
  VerifyAfter?: string | undefined;
}

/**
 * <p>The specification of the remediation target guidance. This outlines required resource parameters
 *          and permissions, remediation steps, and the end state.</p>
 * @public
 */
export interface RemediationGuidanceSpecification {
  /**
   * <p>An array of the parameters used in running the steps provided.</p>
   * @public
   */
  Parameters?: RemediationParameter[] | undefined;

  /**
   * <p>An array of ordered steps for resolving the remediation targets.</p>
   * @public
   */
  Steps?: RemediationStep[] | undefined;

  /**
   * <p>The expected end state of the associated resources after completion of the steps.</p>
   * @public
   */
  ExpectedEndState?: string | undefined;

  /**
   * <p>An array of required permissions to run the steps.</p>
   * @public
   */
  RequiredPermissions?: string[] | undefined;
}

/**
 * <p>A remediation guidebook outlining guidance in resolving the remediation target.</p>
 * @public
 */
export interface RemediationGuidance {
  /**
   * <p>The name of the remediation target type.</p>
   * @public
   */
  TargetTypeName: string | undefined;

  /**
   * <p>The remediation pattern of the remediation target.</p>
   * @public
   */
  Pattern: string | undefined;

  /**
   * <p>The guidance version.</p>
   * @public
   */
  Version: string | undefined;

  /**
   * <p>The context behind the remediation target's existence and guidance.</p>
   * @public
   */
  Context: RemediationGuidanceContext | undefined;

  /**
   * <p>The specification of the remediation target guidance. This outlines required resource parameters
   *          and permissions, remediation steps, and the end state.</p>
   * @public
   */
  Specification: RemediationGuidanceSpecification | undefined;

  /**
   * <p>Provided remediation guidance examples in different formats that can be run for remediating the target.</p>
   * @public
   */
  Examples: RemediationGuidanceExamples | undefined;

  /**
   * <p>The metadata of the remediation guidance.</p>
   * @public
   */
  Metadata: RemediationGuidanceMetadata | undefined;
}

/**
 * <p>The outcome from resolving the remediation target.</p>
 * @public
 */
export interface RemediationOutcome {
  /**
   * <p>The number of associated exposure findings that are resolved by remediating the target.</p>
   * @public
   */
  ResolvedFindingsCount: number | undefined;

  /**
   * <p>The number of associated exposure findings whose severity is reduced by remediating the target.</p>
   * @public
   */
  SeverityReductionFindingsCount: number | undefined;

  /**
   * <p>The number of associated exposure findings whose severity is unchanged by remediating the target.</p>
   * @public
   */
  SeverityUnchangedCount: number | undefined;
}

/**
 * <p>A knowledge base article that provides additional guidance related to the remediation target.</p>
 * @public
 */
export interface KbArticle {
  /**
   * <p>The title of the <code>KbArticle</code>.</p>
   * @public
   */
  Title: string | undefined;

  /**
   * <p>The URL of the <code>KbArticle</code>.</p>
   * @public
   */
  Url: string | undefined;
}

/**
 * <p>A summary of the remediation target.</p>
 * @public
 */
export interface RemediationSummaryDetail {
  /**
   * <p>A summarized action to take for the remediation target.</p>
   * @public
   */
  Action: string | undefined;

  /**
   * <p>A description of the remediation target.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Specifies whether the effect of this target is immediate.</p>
   * @public
   */
  IsImmediate: boolean | undefined;

  /**
   * <p>An array of steps to be taken after remediation.</p>
   * @public
   */
  PostRemediationSteps?: string[] | undefined;

  /**
   * <p>An array of <code>KbArticle</code> objects.</p>
   * @public
   */
  KbArticles?: KbArticle[] | undefined;
}

/**
 * <p>Provides comprehensive details about a resource.</p>
 * @public
 */
export interface RemediationResource {
  /**
   * <p>The Amazon Web Services account that recorded the resource data in Security Hub.</p>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p>The Amazon Web Services Region in which Security Hub recorded the resource data.</p>
   * @public
   */
  Region: string | undefined;

  /**
   * <p>The identifier of the cloud account that owns the resource. For Amazon Web Services resources, this is the Amazon Web Services account ID. For Azure resources, this is the Azure subscription ID.</p>
   * @public
   */
  ResourceOwnerAccountId?: string | undefined;

  /**
   * <p>The identifier of the cloud organization that owns the resource. For Amazon Web Services resources, this is the Organizations ID. For Azure resources, this is the Azure tenant ID.</p>
   * @public
   */
  ResourceOwnerOrgId?: string | undefined;

  /**
   * <p>The type of the resource.</p>
   * @public
   */
  Type: string | undefined;

  /**
   * <p>The name of the resource.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The unique identifier for a resource.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The global identifier used to identify a resource.</p>
   * @public
   */
  ResourceGuid?: string | undefined;

  /**
   * <p>The native cloud region where the resource is located. For Amazon Web Services, this is an Amazon Web Services Region (for example, <code>us-east-1</code>). For Azure resources, this is the Azure region (for example, <code>westus2</code>). This field is always included.</p>
   * @public
   */
  ResourceRegion: string | undefined;

  /**
   * <p>The cloud provider where the resource exists.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>AWS</code> specifies that the resource exists in Amazon Web Services.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Azure</code> specifies that the resource exists in Microsoft Azure.</p>
   *             </li>
   *          </ul>
   * @public
   */
  CloudProvider: CloudProviderName | undefined;
}

/**
 * <p>The trait associated with the remediation target.</p>
 * @public
 */
export interface RemediationTrait {
  /**
   * <p>The trait type.</p>
   * @public
   */
  Type: string | undefined;

  /**
   * <p>The trait title.</p>
   * @public
   */
  Title: string | undefined;
}

/**
 * <p>A remediation target.</p>
 * @public
 */
export interface RemediationV2Item {
  /**
   * <p>The unique identifier (ID) of the remediation target.</p>
   * @public
   */
  TargetUid: string | undefined;

  /**
   * <p>The outcome of the remediation target's resolution.</p>
   * @public
   */
  Outcome: RemediationOutcome | undefined;

  /**
   * <p>The remediation target's priority. Valid values are <code>Critical</code>, <code>High</code>, <code>Medium</code>, and <code>Low</code>.</p>
   * @public
   */
  Priority: RemediationPriority | undefined;

  /**
   * <p>A summary of the remediation target.</p>
   * @public
   */
  RemediationSummary: RemediationSummaryDetail | undefined;

  /**
   * <p>The remediation target's associated resource.</p>
   * @public
   */
  Resource: RemediationResource | undefined;

  /**
   * <p>The current status of the remediation target.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>New</code> specifies that the remediation target was newly identified.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Updated</code> specifies that the remediation target changed after it was identified.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Resolved</code> specifies that the remediation target is no longer present.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Status: RemediationStatus | undefined;

  /**
   * <p>The trait associated with the remediation target.</p>
   * @public
   */
  Trait: RemediationTrait | undefined;

  /**
   * <p>The remediation target's guidance. Returned only when <code>ShowGuidance</code> is
   *          <code>true</code> in the request.</p>
   * @public
   */
  Guidance?: RemediationGuidance | undefined;

  /**
   * <p>The remediation target's last updated timestamp.</p>
   *          <p>For more information about the validation and formatting of timestamp fields in Security Hub CSPM, see <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps">Timestamps</a>.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetRemediationsV2Response {
  /**
   * <p>An array of remediation targets returned by the operation.</p>
   * @public
   */
  Items: RemediationV2Item[] | undefined;

  /**
   * <p>The pagination token to use to request the next page of results.
   *          Otherwise, this parameter is null.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Enables the filtering of Amazon Web Services resources based on date and timestamp attributes.</p>
 * @public
 */
export interface ResourcesDateFilter {
  /**
   * <p>The name of the field.</p>
   * @public
   */
  FieldName?: ResourcesDateField | undefined;

  /**
   * <p>A date filter for querying findings.</p>
   * @public
   */
  Filter?: DateFilter | undefined;
}

/**
 * <p>Enables filtering of Amazon Web Services resources based on key-value map attributes.</p>
 * @public
 */
export interface ResourcesMapFilter {
  /**
   * <p>The name of the field.</p>
   * @public
   */
  FieldName?: ResourcesMapField | undefined;

  /**
   * <p>A map filter for filtering Security Hub CSPM findings. Each map filter provides the field to check for, the
   *          value to check for, and the comparison operator.</p>
   * @public
   */
  Filter?: MapFilter | undefined;
}

/**
 * <p>Enables filtering of Amazon Web Services resources based on numerical values.</p>
 * @public
 */
export interface ResourcesNumberFilter {
  /**
   * <p>The name of the field.</p>
   * @public
   */
  FieldName?: ResourcesNumberField | undefined;

  /**
   * <p>A number filter for querying findings.</p>
   * @public
   */
  Filter?: NumberFilter | undefined;
}

/**
 * <p>Enables filtering of Amazon Web Services resources based on string field values.</p>
 * @public
 */
export interface ResourcesStringFilter {
  /**
   * <p>The name of the field.</p>
   * @public
   */
  FieldName?: ResourcesStringField | undefined;

  /**
   * <p>A string filter for filtering Security Hub CSPM findings.</p>
   * @public
   */
  Filter?: StringFilter | undefined;
}

/**
 * <p>Defines the data boundary for a resources query. Scopes determine which organizational units or organizations to retrieve data from.</p>
 * @public
 */
export interface ResourceScopes {
  /**
   * <p>A list of Organizations scopes to include in the query results. Each entry in the list specifies an organization or organizational unit to include for the delegated administrator's account. If the list specifies multiple entries, the entries are combined using OR logic.</p>
   * @public
   */
  AwsOrganizations?: AwsOrganizationScope[] | undefined;
}

/**
 * @public
 */
export interface GetResourcesStatisticsV2Response {
  /**
   * <p>The aggregated statistics about resources based on the specified grouping rule.</p>
   * @public
   */
  GroupByResults: GroupByResult[] | undefined;
}

/**
 * <p>A filter for string-based fields in resources trend data, such as resource type or account ID.</p>
 * @public
 */
export interface ResourcesTrendsStringFilter {
  /**
   * <p>The name of the resources field to filter on. You can specify one of the following fields.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>account_id</code> – The Amazon Web Services account ID that owns the resource.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>region</code> – The Amazon Web Services Region of the resource.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>resource_type</code> – The type of the resource.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>resource_category</code> – The category of the resource.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>resource_cloud_provider</code> – The cloud provider of the resource. Valid values are <code>AWS</code> and <code>Azure</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>resource_region</code> – The Region of the resource. For an Amazon Web Services resource, this is the Amazon Web Services Region. For an Azure resource, this is the Azure Region, such as <code>eastus</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>resource_owner_id</code> – The identifier of the account that owns the resource. For an Amazon Web Services resource, this is the Amazon Web Services account ID. For an Azure resource, this is the Azure subscription ID.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>resource_owner_organization_id</code> – The identifier of the organization that owns the resource. For an Amazon Web Services resource, this is the Amazon Web Services organization ID. For an Azure resource, this is the Azure tenant ID.</p>
   *             </li>
   *          </ul>
   * @public
   */
  FieldName?: ResourcesTrendsStringField | undefined;

  /**
   * <p>A string filter for filtering Security Hub CSPM findings.</p>
   * @public
   */
  Filter?: StringFilter | undefined;
}

/**
 * <p>Contains counts of resources for trend analysis.</p>
 * @public
 */
export interface ResourcesCount {
  /**
   * <p>The total count of all resources for the given time interval.</p>
   * @public
   */
  AllResources: number | undefined;
}

/**
 * <p>Contains the aggregated resource count values for a specific point in the resources trend timeline.</p>
 * @public
 */
export interface ResourcesTrendsValues {
  /**
   * <p>The resource count statistics for this data point in the trend timeline.</p>
   * @public
   */
  ResourcesCount: ResourcesCount | undefined;
}

/**
 * <p>Contains the resource trend metrics data for a specific time point in the requested time period.</p>
 * @public
 */
export interface ResourcesTrendsMetricsResult {
  /**
   * <p>The timestamp for this data point in the resources trend metrics.</p>
   * @public
   */
  Timestamp: Date | undefined;

  /**
   * <p>The resource trend metric values associated with this timestamp, including resource counts.</p>
   * @public
   */
  TrendsValues: ResourcesTrendsValues | undefined;
}

/**
 * @public
 */
export interface GetResourcesTrendsV2Response {
  /**
   * <p>The time interval granularity for the returned trend data (such as DAILY or WEEKLY).</p>
   * @public
   */
  Granularity: GranularityField | undefined;

  /**
   * <p>The collection of time-series trend metrics, including counts of resources across the specified time period.</p>
   * @public
   */
  TrendsMetrics: ResourcesTrendsMetricsResult[] | undefined;

  /**
   * <p>The token to use for retrieving the next page of results, if more trend data is available.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>A comprehensive distribution of security findings by severity level for Amazon Web Services resources.</p>
 * @public
 */
export interface ResourceSeverityBreakdown {
  /**
   * <p>The number of findings not in any of the severity categories.</p>
   * @public
   */
  Other?: number | undefined;

  /**
   * <p>The number of findings with a severity level of fatal.</p>
   * @public
   */
  Fatal?: number | undefined;

  /**
   * <p>The number of findings with a severity level of critical.</p>
   * @public
   */
  Critical?: number | undefined;

  /**
   * <p>The number of findings with a severity level of high.</p>
   * @public
   */
  High?: number | undefined;

  /**
   * <p>The number of findings with a severity level of medium.</p>
   * @public
   */
  Medium?: number | undefined;

  /**
   * <p>The number of findings with a severity level of low.</p>
   * @public
   */
  Low?: number | undefined;

  /**
   * <p>The number of findings that provide security-related information.</p>
   * @public
   */
  Informational?: number | undefined;

  /**
   * <p>The number of findings with a severity level cannot be determined.</p>
   * @public
   */
  Unknown?: number | undefined;
}

/**
 * <p>A list of summaries for all finding types on a resource.</p>
 * @public
 */
export interface ResourceFindingsSummary {
  /**
   * <p>The category or classification of the security finding.</p>
   * @public
   */
  FindingType: string | undefined;

  /**
   * <p>The name of the product associated with the security finding.</p>
   * @public
   */
  ProductName: string | undefined;

  /**
   * <p>The total count of security findings.</p>
   * @public
   */
  TotalFindings: number | undefined;

  /**
   * <p>A breakdown of security findings by their severity levels.</p>
   * @public
   */
  Severities?: ResourceSeverityBreakdown | undefined;
}

/**
 * <p>Additional details about a resource that are specific to its category. For AI/ML resources and their host resources, this structure contains <code>AIDetails</code>.</p>
 * @public
 */
export interface ResourceInfo {
  /**
   * <p>Details that are specific to self-hosted AI resources and their host resources.</p>
   * @public
   */
  AIDetails?: AIDetails | undefined;
}

/**
 * <p>Represents tag information associated with Amazon Web Services resources.</p>
 * @public
 */
export interface ResourceTag {
  /**
   * <p>The identifier or name of the tag.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>The data associated with the tag key.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * <p>Provides comprehensive details about an Amazon Web Services resource and its associated security findings.</p>
 * @public
 */
export interface ResourceResult {
  /**
   * <p>The global identifier used to identify a resource.</p>
   * @public
   */
  ResourceGuid?: string | undefined;

  /**
   * <p>The unique identifier for a resource.</p>
   * @public
   */
  ResourceId: string | undefined;

  /**
   * <p>The Amazon Web Services account that recorded the resource data in Security Hub.</p>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p>The name of the Amazon Web Services account that's associated with the resource.</p>
   * @public
   */
  AccountName?: string | undefined;

  /**
   * <p>The Amazon Web Services Region that recorded the resource data in Security Hub.</p>
   * @public
   */
  Region: string | undefined;

  /**
   * <p>The cloud provider where the resource exists. Valid values are <code>AWS</code> and <code>Azure</code>. This field is always included.</p>
   * @public
   */
  ResourceProvider?: string | undefined;

  /**
   * <p>The identifier of the cloud account that owns the resource. For Amazon Web Services resources, this is the Amazon Web Services account ID. For Azure resources, this is the Azure subscription ID.</p>
   * @public
   */
  ResourceOwnerAccountId?: string | undefined;

  /**
   * <p>The identifier of the cloud organization that owns the resource. For Amazon Web Services resources, this is the Organizations ID. For Azure resources, this is the Azure tenant ID.</p>
   * @public
   */
  ResourceOwnerOrgId?: string | undefined;

  /**
   * <p>The cloud partition where the resource exists. For Amazon Web Services, valid values include <code>aws</code>, <code>aws-cn</code>, and <code>aws-us-gov</code>. This field isn't returned for cloud providers that don't use partitions.</p>
   * @public
   */
  ResourceCloudPartition?: string | undefined;

  /**
   * <p>The native cloud region where the resource is located. For Amazon Web Services, this is an Amazon Web Services Region (for example, <code>us-east-1</code>). For Azure resources, this is the Azure region (for example, <code>westus2</code>). This field is always included.</p>
   * @public
   */
  ResourceRegion?: string | undefined;

  /**
   * <p>The grouping where the resource belongs.</p>
   * @public
   */
  ResourceCategory?: ResourceCategory | undefined;

  /**
   * <p>The type of resource.</p>
   * @public
   */
  ResourceType: string | undefined;

  /**
   * <p>The name of the resource.</p>
   * @public
   */
  ResourceName?: string | undefined;

  /**
   * <p>The time when the resource was created.</p>
   * @public
   */
  ResourceCreationTimeDt?: string | undefined;

  /**
   * <p>The timestamp when information about the resource was captured.</p>
   * @public
   */
  ResourceDetailCaptureTimeDt: string | undefined;

  /**
   * <p>An aggregated view of security findings associated with a resource.</p>
   * @public
   */
  FindingsSummary?: ResourceFindingsSummary[] | undefined;

  /**
   * <p>The key-value pairs associated with a resource.</p>
   * @public
   */
  ResourceTags?: ResourceTag[] | undefined;

  /**
   * <p>The configuration details of a resource.</p>
   * @public
   */
  ResourceConfig: __DocumentType | undefined;

  /**
   * <p>The AI/ML sub-grouping of the resource. Present only when <code>ResourceCategory</code> is <code>AI/ML</code>.</p>
   * @public
   */
  ResourceSubCategory?: ResourceSubCategory | undefined;

  /**
   * <p>Specifies how the resource was discovered. If the value is <code>Managed</code>, the resource is natively provided by a cloud service provider. If the value is <code>SelfHosted</code>, the resource is hosted on customer-managed infrastructure, such as a compute instance or container image.</p>
   * @public
   */
  DiscoveryType?: DiscoveryType | undefined;

  /**
   * <p>Additional resource-type-specific details. For self-hosted AI resources and their host resources, contains an <code>AIDetails</code> structure.</p>
   * @public
   */
  ResourceInfo?: ResourceInfo | undefined;
}

/**
 * @public
 */
export interface GetResourcesV2Response {
  /**
   * <p>An array of resources returned by the operation.</p>
   * @public
   */
  Resources: ResourceResult[] | undefined;

  /**
   * <p>The pagination token to use to request the next page of results.
   *          Otherwise, this parameter is null.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetSecurityControlDefinitionRequest {
  /**
   * <p>
   *             The ID of the security control to retrieve the definition for. This field doesn’t accept an Amazon Resource Name (ARN).
   *         </p>
   * @public
   */
  SecurityControlId: string | undefined;
}

/**
 * <p>
 *             An object that describes a security control parameter and the options for customizing it.
 *         </p>
 * @public
 */
export interface ParameterDefinition {
  /**
   * <p>
   *             Description of a control parameter.
   *         </p>
   * @public
   */
  Description: string | undefined;

  /**
   * <p>
   *             The options for customizing a control parameter. Customization options vary based on the data type of the parameter.
   *         </p>
   * @public
   */
  ConfigurationOptions: ConfigurationOptions | undefined;
}

/**
 * <p>
 *          Provides metadata for a security control, including its unique standard-agnostic identifier, title, description,
 *          severity, availability in Amazon Web Services Regions, and a link to remediation steps.
 *       </p>
 * @public
 */
export interface SecurityControlDefinition {
  /**
   * <p>
   *          The unique identifier of a security control across standards. Values for this field typically consist of an
   *          Amazon Web Services service name and a number (for example, APIGateway.3). This parameter differs from
   *          <code>SecurityControlArn</code>, which is a unique Amazon Resource Name (ARN) assigned to a control. The
   *          ARN references the security control ID (for example, arn:aws:securityhub:eu-central-1:123456789012:security-control/APIGateway.3).
   *       </p>
   * @public
   */
  SecurityControlId: string | undefined;

  /**
   * <p>
   *          The title of a security control.
   *       </p>
   * @public
   */
  Title: string | undefined;

  /**
   * <p> The description of a security control across standards. This typically summarizes how
   *             Security Hub CSPM evaluates the control and the conditions under which it produces a
   *          failed finding. This parameter doesn't reference a specific standard. </p>
   * @public
   */
  Description: string | undefined;

  /**
   * <p>
   *          A link to Security Hub CSPM documentation that explains how to remediate a failed finding for a security control.
   *       </p>
   * @public
   */
  RemediationUrl: string | undefined;

  /**
   * <p>
   *          The severity of a security control. For more information about how Security Hub CSPM determines control severity,
   *          see <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/controls-findings-create-update.html#control-findings-severity">Assigning severity to control findings</a> in the
   *          <i>Security Hub CSPM User Guide</i>.
   *       </p>
   * @public
   */
  SeverityRating: SeverityRating | undefined;

  /**
   * <p>
   *          Specifies whether a security control is available in the current Amazon Web Services Region.
   *       </p>
   * @public
   */
  CurrentRegionAvailability: RegionAvailabilityStatus | undefined;

  /**
   * <p>
   *             Security control properties that you can customize. Currently, only parameter customization is supported for select
   *             controls. An empty array is returned for controls that don’t support custom properties.
   *         </p>
   * @public
   */
  CustomizableProperties?: SecurityControlProperty[] | undefined;

  /**
   * <p>
   *             An object that provides a security control parameter name, description, and the options for customizing it. This
   * object is excluded for a control that doesn't support custom parameters.
   *         </p>
   * @public
   */
  ParameterDefinitions?: Record<string, ParameterDefinition> | undefined;

  /**
   * <p>The cloud provider whose resources the security control evaluates. For example, <code>AWS</code> or <code>Azure</code>.</p>
   * @public
   */
  Provider?: SecurityControlsProvider | undefined;
}

/**
 * @public
 */
export interface GetSecurityControlDefinitionResponse {
  /**
   * <p>
   *          Provides metadata for a security control, including its unique standard-agnostic identifier, title, description,
   *          severity, availability in Amazon Web Services Regions, and a link to remediation steps.
   *       </p>
   * @public
   */
  SecurityControlDefinition: SecurityControlDefinition | undefined;
}

/**
 * @public
 */
export interface InviteMembersRequest {
  /**
   * <p>The list of account IDs of the Amazon Web Services accounts to invite to Security Hub CSPM as members. </p>
   * @public
   */
  AccountIds: string[] | undefined;
}

/**
 * @public
 */
export interface InviteMembersResponse {
  /**
   * <p>The list of Amazon Web Services accounts that could not be processed. For each account, the list
   *          includes the account ID and the email address.</p>
   * @public
   */
  UnprocessedAccounts?: Result[] | undefined;
}

/**
 * <p>The parameters used to modify an existing Jira Cloud integration.</p>
 * @public
 */
export interface JiraCloudUpdateConfiguration {
  /**
   * <p>The project key for a JiraCloud instance.</p>
   * @public
   */
  ProjectKey?: string | undefined;
}

/**
 * @public
 */
export interface ListAggregatorsV2Request {
  /**
   * <p>The token required for pagination.
   *          On your first call, set the value of this parameter to <code>NULL</code>.
   *          For subsequent calls, to continue listing data, set the value of this parameter to the value returned in the previous response.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAggregatorsV2Response {
  /**
   * <p>An array of aggregators.</p>
   * @public
   */
  AggregatorsV2?: AggregatorV2[] | undefined;

  /**
   * <p>The pagination token to use to request the next page of results.
   *          Otherwise, this parameter is null.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAutomationRulesRequest {
  /**
   * <p>
   *          A token to specify where to start paginating the response. This is the <code>NextToken</code>
   *          from a previously truncated response. On your first call to the <code>ListAutomationRules</code>
   *          API, set the value of this parameter to <code>NULL</code>.
   *       </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p> The maximum number of rules to return in the response. This currently ranges from 1 to
   *          100. </p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAutomationRulesResponse {
  /**
   * <p>
   *          Metadata for rules in the calling account. The response includes rules with a
   *          <code>RuleStatus</code> of <code>ENABLED</code> and <code>DISABLED</code>.
   *       </p>
   * @public
   */
  AutomationRulesMetadata?: AutomationRulesMetadata[] | undefined;

  /**
   * <p>
   *          A pagination token for the response.
   *       </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAutomationRulesV2Request {
  /**
   * <p>The token required for pagination.
   *          On your first call, set the value of this parameter to <code>NULL</code>.
   *          For subsequent calls, to continue listing data, set the value of this parameter to the value returned in the previous response.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAutomationRulesV2Response {
  /**
   * <p>An array of automation rules.</p>
   * @public
   */
  Rules?: AutomationRulesMetadataV2[] | undefined;

  /**
   * <p>The pagination token to use to request the next page of results.
   *          Otherwise, this parameter is null.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListConfigurationPoliciesRequest {
  /**
   * <p>
   *             The NextToken value that's returned from a previous paginated <code>ListConfigurationPolicies</code> request where
   *             <code>MaxResults</code> was used but the results exceeded the value of that parameter. Pagination continues from the
   *             <code>MaxResults</code> was used but the results exceeded the value of that parameter. Pagination continues from the
   *             end of the previous response that returned the <code>NextToken</code> value. This value is <code>null</code> when
   *             there are no more results to return.
   *         </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>
   *             The maximum number of results that's returned by <code>ListConfigurationPolicies</code> in each page of the response.
   *             When this parameter is used, <code>ListConfigurationPolicies</code> returns the specified number of results in a
   *             single page and a <code>NextToken</code> response element. You can see the remaining results of the initial request
   *             by sending another <code>ListConfigurationPolicies</code> request with the returned <code>NextToken</code> value. A
   *             valid range for <code>MaxResults</code> is between 1 and 100.
   *         </p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListConfigurationPoliciesResponse {
  /**
   * <p>
   *             Provides metadata for each of your configuration policies.
   *         </p>
   * @public
   */
  ConfigurationPolicySummaries?: ConfigurationPolicySummary[] | undefined;

  /**
   * <p>
   *             The <code>NextToken</code> value to include in the next <code>ListConfigurationPolicies</code> request. When the
   *             results of a <code>ListConfigurationPolicies</code> request exceed <code>MaxResults</code>, this value can be used to
   *             retrieve the next page of results. This value is <code>null</code> when there are no more results to return.
   *         </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListConfigurationPolicyAssociationsRequest {
  /**
   * <p>
   *             The <code>NextToken</code> value that's returned from a previous paginated <code>ListConfigurationPolicyAssociations</code>
   *             request where <code>MaxResults</code> was used but the results exceeded the value of that parameter. Pagination
   *             continues from the end of the previous response that returned the <code>NextToken</code> value. This value is <code>null</code>
   *             when there are no more results to return.
   *         </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>
   *             The maximum number of results that's returned by <code>ListConfigurationPolicies</code> in each page of the response.
   *             When this parameter is used, <code>ListConfigurationPolicyAssociations</code> returns the specified number of results
   *             in a single page and a <code>NextToken</code> response element. You can see the remaining results of the initial
   *             request by sending another <code>ListConfigurationPolicyAssociations</code> request with the returned <code>NextToken</code>
   *             value. A valid range for <code>MaxResults</code> is between 1 and 100.
   *         </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>
   *             Options for filtering the <code>ListConfigurationPolicyAssociations</code> response. You can filter by the Amazon Resource Name (ARN) or
   *             universally unique identifier (UUID) of a configuration, <code>AssociationType</code>, or <code>AssociationStatus</code>.
   *         </p>
   * @public
   */
  Filters?: AssociationFilters | undefined;
}

/**
 * @public
 */
export interface ListConfigurationPolicyAssociationsResponse {
  /**
   * <p>
   *             An object that contains the details of each configuration policy association that’s returned in a
   *             <code>ListConfigurationPolicyAssociations</code> request.
   *         </p>
   * @public
   */
  ConfigurationPolicyAssociationSummaries?: ConfigurationPolicyAssociationSummary[] | undefined;

  /**
   * <p>
   *             The <code>NextToken</code> value to include in the next <code>ListConfigurationPolicyAssociations</code> request. When
   *             the results of a <code>ListConfigurationPolicyAssociations</code> request exceed <code>MaxResults</code>, this value
   *             can be used to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.
   *         </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListConnectorsRequest {
  /**
   * <p>The pagination token to request the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The name of the cloud provider to filter connectors by.</p>
   * @public
   */
  ProviderName?: CspmConnectorProviderName | undefined;

  /**
   * <p>The connectivity status to filter connectors by.</p>
   * @public
   */
  ConnectorStatus?: CspmConnectorStatus | undefined;

  /**
   * <p>The enablement status to filter connectors by.</p>
   * @public
   */
  EnablementStatus?: CspmEnablementStatus | undefined;
}

/**
 * @public
 */
export interface ListConnectorsResponse {
  /**
   * <p>The pagination token to use to request the next page of results. If there are no additional results, this value is null.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>An array of connector summaries.</p>
   * @public
   */
  Connectors: CspmConnectorSummary[] | undefined;
}

/**
 * @public
 */
export interface ListConnectorsV2Request {
  /**
   * <p>The pagination token per the Amazon Web Services Pagination standard</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to be returned.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The name of the third-party provider.</p>
   * @public
   */
  ProviderName?: ConnectorProviderName | undefined;

  /**
   * <p>The status for the connectorV2.</p>
   * @public
   */
  ConnectorStatus?: ConnectorStatus | undefined;

  /**
   * <p>The enablement status to filter connectors by.</p>
   * @public
   */
  EnablementStatus?: EnablementStatus | undefined;
}

/**
 * @public
 */
export interface ListConnectorsV2Response {
  /**
   * <p>The pagination token to use to request the next page of results.
   *          Otherwise, this parameter is null.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>An array of connectorV2 summaries.</p>
   * @public
   */
  Connectors: ConnectorSummary[] | undefined;
}

/**
 * @public
 */
export interface ListEnabledProductsForImportRequest {
  /**
   * <p>The token that is required for pagination. On your first call to the
   *             <code>ListEnabledProductsForImport</code> operation, set the value of this parameter to
   *             <code>NULL</code>.</p>
   *          <p>For subsequent calls to the operation, to continue listing data, set the value of this
   *          parameter to the value returned from the previous response.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return in the response.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListEnabledProductsForImportResponse {
  /**
   * <p>The list of ARNs for the resources that represent your subscriptions to products. </p>
   * @public
   */
  ProductSubscriptions?: string[] | undefined;

  /**
   * <p>The pagination token to use to request the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListExportJobsV2Request {
  /**
   * <p>Filters the results to export jobs that have the specified status.</p>
   * @public
   */
  Status?: ExportStatus | undefined;

  /**
   * <p>Filters the results to export jobs that produce the specified data type.</p>
   * @public
   */
  DataType?: ExportDataType | undefined;

  /**
   * <p>The maximum number of results to return in a single call. Valid range is 1–20.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token required for pagination.
   *          On your first call, set the value of this parameter to <code>NULL</code>.
   *          For subsequent calls, to continue listing data, set the value of this parameter to the value returned in the previous response.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListExportJobsV2Response {
  /**
   * <p>The export jobs that match the request, as <code>ExportSummary</code> objects.</p>
   * @public
   */
  Items: ExportSummary[] | undefined;

  /**
   * <p>The pagination token to use to request the next page of results. Otherwise, this parameter is null.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListExposuresByRemediationV2Request {
  /**
   * <p>The unique identifier (ID) of an existing remediation target to list exposure findings for.</p>
   * @public
   */
  TargetUid: string | undefined;

  /**
   * <p>The maximum number of results to return. Valid range is 1-100. If you don't specify a value,
   *          the operation returns up to 25 results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token used to paginate the exposures list returned.
   *          On your first call to <code>ListExposuresByRemediationV2</code>, omit this parameter or set it
   *          to <code>NULL</code>. For subsequent calls, use the <code>NextToken</code> value returned in
   *          the previous response to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListExposuresByRemediationV2Response {
  /**
   * <p>An array of exposure findings returned by the operation.</p>
   * @public
   */
  Items: ExposureFinding[] | undefined;

  /**
   * <p>The unique identifier (ID) of the remediation target that the exposure findings are associated with.</p>
   * @public
   */
  TargetUid: string | undefined;

  /**
   * <p>Provides comprehensive details about a resource.</p>
   * @public
   */
  Resource: RemediationResource | undefined;

  /**
   * <p>The total count of exposure findings associated with the remediation target.</p>
   * @public
   */
  TotalCount: number | undefined;

  /**
   * <p>The specific trait associated with the remediation target.</p>
   * @public
   */
  Trait: RemediationTrait | undefined;

  /**
   * <p>The pagination token to use to request the next page of results.
   *          Otherwise, this parameter is null.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFindingAggregatorsRequest {
  /**
   * <p>The token returned with the previous set of results. Identifies the next set of results to return.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return. This operation currently only returns a single result.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListFindingAggregatorsResponse {
  /**
   * <p>The list of finding aggregators. This operation currently only returns a single result.</p>
   * @public
   */
  FindingAggregators?: FindingAggregator[] | undefined;

  /**
   * <p>If there are more results, this is the token to provide in the next call to <code>ListFindingAggregators</code>.</p>
   *          <p>This operation currently only returns a single result.
   *       </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFreeTrialStatusesV2Request {
  /**
   * <p>The Amazon Web Services account identifiers to list free trial status for. You can specify accounts other than your own only if you are a delegated Security Hub administrator.</p>
   * @public
   */
  AccountIds?: string[] | undefined;

  /**
   * <p>The free trial statuses to filter the results by. Valid values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code> returns only features with an ongoing free trial period.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INACTIVE</code> returns only features whose free trial period has ended, or that never started.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Statuses?: FreeTrialStatusValue[] | undefined;

  /**
   * <p>The maximum number of results to return. If you don't specify a value, Security Hub returns up to 100 results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The pagination token to request the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFreeTrialStatusesV2Response {
  /**
   * <p>An array of free trial statuses, one for each account in scope.</p>
   * @public
   */
  AccountFreeTrialStatuses: AccountFreeTrialStatus[] | undefined;

  /**
   * <p>The pagination token to use to request the next page of results. If there are no additional results, this value is null.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListInvitationsRequest {
  /**
   * <p>The maximum number of items to return in the response. </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token that is required for pagination. On your first call to the
   *             <code>ListInvitations</code> operation, set the value of this parameter to
   *             <code>NULL</code>.</p>
   *          <p>For subsequent calls to the operation, to continue listing data, set the value of this
   *          parameter to the value returned from the previous response.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListInvitationsResponse {
  /**
   * <p>The details of the invitations returned by the operation.</p>
   * @public
   */
  Invitations?: Invitation[] | undefined;

  /**
   * <p>The pagination token to use to request the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListMembersRequest {
  /**
   * <p>Specifies which member accounts to include in the response based on their relationship
   *          status with the administrator account. The default value is <code>TRUE</code>.</p>
   *          <p>If <code>OnlyAssociated</code> is set to <code>TRUE</code>, the response includes member
   *          accounts whose relationship status with the administrator account is set to <code>ENABLED</code>.</p>
   *          <p>If <code>OnlyAssociated</code> is set to <code>FALSE</code>, the response includes all
   *          existing member accounts. </p>
   * @public
   */
  OnlyAssociated?: boolean | undefined;

  /**
   * <p>The maximum number of items to return in the response. </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token that is required for pagination. On your first call to the
   *             <code>ListMembers</code> operation, set the value of this parameter to
   *          <code>NULL</code>.</p>
   *          <p>For subsequent calls to the operation, to continue listing data, set the value of this
   *          parameter to the value returned from the previous response.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListMembersResponse {
  /**
   * <p>Member details returned by the operation.</p>
   * @public
   */
  Members?: Member[] | undefined;

  /**
   * <p>The pagination token to use to request the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListOrganizationAdminAccountsRequest {
  /**
   * <p>The maximum number of items to return in the response.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token that is required for pagination. On your first call to the
   *             <code>ListOrganizationAdminAccounts</code> operation, set the value of this parameter to
   *             <code>NULL</code>. For subsequent calls to the operation, to continue listing data, set
   *          the value of this parameter to the value returned from the previous response. </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The feature where the delegated administrator account is listed.
   *          Defaults to Security Hub CSPM if not specified.</p>
   * @public
   */
  Feature?: SecurityHubFeature | undefined;
}

/**
 * @public
 */
export interface ListOrganizationAdminAccountsResponse {
  /**
   * <p>The list of Security Hub CSPM administrator accounts.</p>
   * @public
   */
  AdminAccounts?: AdminAccount[] | undefined;

  /**
   * <p>The pagination token to use to request the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The feature where the delegated administrator account is listed.
   *          Defaults to Security Hub CSPM CSPM if not specified.</p>
   * @public
   */
  Feature?: SecurityHubFeature | undefined;
}

/**
 * @public
 */
export interface ListSecurityControlDefinitionsRequest {
  /**
   * <p>
   *          The Amazon Resource Name (ARN) of the standard that you want to view controls for.
   *       </p>
   * @public
   */
  StandardsArn?: string | undefined;

  /**
   * <p>
   *          Optional pagination parameter.
   *       </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p> An optional parameter that limits the total results of the API response to the
   *          specified number. If this parameter isn't provided in the request, the results include the
   *          first 25 security controls that apply to the specified standard. The results also include a
   *             <code>NextToken</code> parameter that you can use in a subsequent API call to get the
   *          next 25 controls. This repeats until all controls for the standard are returned. </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A list of cloud providers to filter the security control definitions by. For example, specify <code>Azure</code> to return only controls that evaluate Azure resources.</p>
   * @public
   */
  Providers?: SecurityControlsProvider[] | undefined;
}

/**
 * @public
 */
export interface ListSecurityControlDefinitionsResponse {
  /**
   * <p>
   *          An array of controls that apply to the specified standard.
   *       </p>
   * @public
   */
  SecurityControlDefinitions: SecurityControlDefinition[] | undefined;

  /**
   * <p> A pagination parameter that's included in the response only if it was included in the
   *          request. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListStandardsControlAssociationsRequest {
  /**
   * <p>
   *          The identifier of the control (identified with <code>SecurityControlId</code>, <code>SecurityControlArn</code>, or a mix of both parameters) that you
   *          want to determine the enablement status of in each enabled standard.
   *       </p>
   * @public
   */
  SecurityControlId: string | undefined;

  /**
   * <p>
   *          Optional pagination parameter.
   *       </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p> An optional parameter that limits the total results of the API response to the
   *          specified number. If this parameter isn't provided in the request, the results include the
   *          first 25 standard and control associations. The results also include a
   *             <code>NextToken</code> parameter that you can use in a subsequent API call to get the
   *          next 25 associations. This repeats until all associations for the specified control are
   *          returned. The number of results is limited by the number of supported Security Hub CSPM
   *          standards that you've enabled in the calling account. </p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p> An array that provides the enablement status and other details for each control that
 *          applies to each enabled standard. </p>
 * @public
 */
export interface StandardsControlAssociationSummary {
  /**
   * <p>
   *          The Amazon Resource Name (ARN) of a standard.
   *       </p>
   * @public
   */
  StandardsArn: string | undefined;

  /**
   * <p>
   *          A unique standard-agnostic identifier for a control. Values for this field typically consist of an
   *          Amazon Web Services service and a number, such as APIGateway.5. This field doesn't reference a specific standard.
   *       </p>
   * @public
   */
  SecurityControlId: string | undefined;

  /**
   * <p> The ARN of a control, such as
   *             <code>arn:aws:securityhub:eu-central-1:123456789012:security-control/S3.1</code>. This
   *          parameter doesn't mention a specific standard. </p>
   * @public
   */
  SecurityControlArn: string | undefined;

  /**
   * <p>
   *          The enablement status of a control in a specific standard.
   *       </p>
   * @public
   */
  AssociationStatus: AssociationStatus | undefined;

  /**
   * <p>
   *          The requirement that underlies this control in the compliance framework related to the standard.
   *       </p>
   * @public
   */
  RelatedRequirements?: string[] | undefined;

  /**
   * <p>The last time that a control's enablement status in a specified standard was updated.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * <p>The reason for updating a control's enablement status in a specified standard.</p>
   * @public
   */
  UpdatedReason?: string | undefined;

  /**
   * <p>
   *          The title of a control.
   *       </p>
   * @public
   */
  StandardsControlTitle?: string | undefined;

  /**
   * <p>
   *          The description of a control. This typically summarizes how Security Hub CSPM evaluates the control and the
   *          conditions under which it produces a failed finding. The parameter may reference a specific standard.
   *       </p>
   * @public
   */
  StandardsControlDescription?: string | undefined;
}

/**
 * @public
 */
export interface ListStandardsControlAssociationsResponse {
  /**
   * <p> An array that provides the enablement status and other details for each security
   *          control that applies to each enabled standard. </p>
   * @public
   */
  StandardsControlAssociationSummaries: StandardsControlAssociationSummary[] | undefined;

  /**
   * <p> A pagination parameter that's included in the response only if it was included in the
   *          request. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The ARN of the resource to retrieve tags for.</p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The tags associated with a resource.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * <p>The parameters used to modify an existing ServiceNow integration.</p>
 * @public
 */
export interface ServiceNowUpdateConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Web Services Secrets Manager secret that contains the ServiceNow credentials.</p>
   * @public
   */
  SecretArn?: string | undefined;
}

/**
 * <p>The parameters required to update the configuration of an integration provider.</p>
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
   * <p>The parameters required to update the configuration for a Jira Cloud integration.</p>
   * @public
   */
  export interface JiraCloudMember {
    JiraCloud: JiraCloudUpdateConfiguration;
    ServiceNow?: never;
    Azure?: never;
    $unknown?: never;
  }

  /**
   * <p>The parameters required to update the configuration for a ServiceNow integration.</p>
   * @public
   */
  export interface ServiceNowMember {
    JiraCloud?: never;
    ServiceNow: ServiceNowUpdateConfiguration;
    Azure?: never;
    $unknown?: never;
  }

  /**
   * <p>The parameters required to update the configuration for a Microsoft Azure CSPM integration.</p>
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
   * <p>The authCode retrieved from authUrl to complete the OAuth 2.0 authorization code flow.</p>
   * @public
   */
  AuthCode: string | undefined;

  /**
   * <p>The authState retrieved from authUrl to complete the OAuth 2.0 authorization code flow.</p>
   * @public
   */
  AuthState: string | undefined;
}

/**
 * @public
 */
export interface RegisterConnectorV2Response {
  /**
   * <p>The Amazon Resource Name (ARN) of the connectorV2.</p>
   * @public
   */
  ConnectorArn?: string | undefined;

  /**
   * <p>The UUID of the connectorV2 to identify connectorV2 resource.</p>
   * @public
   */
  ConnectorId: string | undefined;
}

/**
 * @public
 */
export interface StartConfigurationPolicyAssociationRequest {
  /**
   * <p>
   *             The Amazon Resource Name (ARN) of a configuration policy, the universally unique identifier (UUID) of a
   *             configuration policy, or a value of <code>SELF_MANAGED_SECURITY_HUB</code> for a self-managed configuration.
   *         </p>
   * @public
   */
  ConfigurationPolicyIdentifier: string | undefined;

  /**
   * <p>
   *             The identifier of the target account, organizational unit, or the root to associate with the specified configuration.
   *         </p>
   * @public
   */
  Target: Target | undefined;
}

/**
 * @public
 */
export interface StartConfigurationPolicyAssociationResponse {
  /**
   * <p>
   *             The UUID of the configuration policy.
   *         </p>
   * @public
   */
  ConfigurationPolicyId?: string | undefined;

  /**
   * <p>
   *             The identifier of the target account, organizational unit, or the organization root with which the configuration is associated.
   *         </p>
   * @public
   */
  TargetId?: string | undefined;

  /**
   * <p>
   *             Indicates whether the target is an Amazon Web Services account, organizational unit, or the organization root.
   *         </p>
   * @public
   */
  TargetType?: TargetType | undefined;

  /**
   * <p>
   *             Indicates whether the association between the specified target and the configuration was directly applied by the
   *             Security Hub CSPM delegated administrator or inherited from a parent.
   *         </p>
   * @public
   */
  AssociationType?: AssociationType | undefined;

  /**
   * <p>
   *             The date and time, in UTC and ISO 8601 format, that the configuration policy association was last updated.
   *         </p>
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * <p>
   *             The current status of the association between the specified target and the configuration.
   *         </p>
   * @public
   */
  AssociationStatus?: ConfigurationPolicyAssociationStatus | undefined;

  /**
   * <p>
   *             An explanation for a <code>FAILED</code> value for <code>AssociationStatus</code>.
   *         </p>
   * @public
   */
  AssociationStatusMessage?: string | undefined;
}

/**
 * @public
 */
export interface StartConfigurationPolicyDisassociationRequest {
  /**
   * <p>
   *             The identifier of the target account, organizational unit, or the root to disassociate from the specified configuration.
   *         </p>
   * @public
   */
  Target?: Target | undefined;

  /**
   * <p>
   *             The Amazon Resource Name (ARN) of a configuration policy, the universally unique identifier (UUID) of a
   *             configuration policy, or a value of <code>SELF_MANAGED_SECURITY_HUB</code> for a self-managed configuration.
   *         </p>
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
   * <p>The unique identifier of the export job that Security Hub started. Use this value with <code>GetExportJobV2</code> or <code>CancelExportJobV2</code>.</p>
   * @public
   */
  ExportJobId: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The ARN of the resource to apply the tags to.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tags to add to the resource. You can add up to 50 tags at a time. The tag keys can be no longer than 128 characters. The tag values can be no longer than 256 characters.</p>
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
   * <p>The ARN of the resource to remove the tags from.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tag keys associated with the tags to remove from the resource. You can remove up to 50 tags at a time.</p>
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
   * <p>The ARN of the custom action target to update.</p>
   * @public
   */
  ActionTargetArn: string | undefined;

  /**
   * <p>The updated name of the custom action target.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The updated description for the custom action target.</p>
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
   * <p>The ARN of the Aggregator V2.</p>
   * @public
   */
  AggregatorV2Arn: string | undefined;

  /**
   * <p>Determines how Amazon Web Services Regions should be linked to the Aggregator V2.</p>
   * @public
   */
  RegionLinkingMode: string | undefined;

  /**
   * <p>A list of Amazon Web Services Regions linked to the aggegation Region.</p>
   * @public
   */
  LinkedRegions?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateAggregatorV2Response {
  /**
   * <p>The ARN of the Aggregator V2.</p>
   * @public
   */
  AggregatorV2Arn?: string | undefined;

  /**
   * <p>The Amazon Web Services Region where data is aggregated.</p>
   * @public
   */
  AggregationRegion?: string | undefined;

  /**
   * <p>Determines how Amazon Web Services Regions should be linked to the Aggregator V2.</p>
   * @public
   */
  RegionLinkingMode?: string | undefined;

  /**
   * <p>A list of Amazon Web Services Regions linked to the aggegation Region.</p>
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
   * <p>
   *             The Amazon Resource Name (ARN) or universally unique identifier (UUID) of the configuration policy.
   *         </p>
   * @public
   */
  Identifier: string | undefined;

  /**
   * <p>
   *             The name of the configuration policy. Alphanumeric characters and the following ASCII characters are permitted:
   *             <code>-, ., !, *, /</code>.
   *         </p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>
   *             The description of the configuration policy.
   *         </p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>
   *             The reason for updating the configuration policy.
   *         </p>
   * @public
   */
  UpdatedReason?: string | undefined;

  /**
   * <p>
   *             An object that defines how Security Hub CSPM is configured. It includes whether Security Hub CSPM is enabled or
   *             disabled, a list of enabled security standards, a list of enabled or disabled security controls, and a list of custom parameter values for specified controls.
   *             If you provide a list of security controls that are enabled in the configuration policy, Security Hub CSPM disables all other controls (including newly
   *             released controls). If you provide a list of security controls that are disabled in the configuration policy, Security Hub CSPM
   *             enables all other controls (including newly released controls).
   *         </p>
   *          <p>When updating a configuration policy, provide a complete list of standards that you want to enable and a complete list
   *             of controls that you want to enable or disable. The updated configuration replaces the current configuration.</p>
   * @public
   */
  ConfigurationPolicy?: Policy | undefined;
}

/**
 * @public
 */
export interface UpdateConfigurationPolicyResponse {
  /**
   * <p>
   *             The ARN of the configuration policy.
   *         </p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>
   *             The UUID of the configuration policy.
   *         </p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>
   *             The name of the configuration policy.
   *         </p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>
   *             The description of the configuration policy.
   *         </p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>
   *             The date and time, in UTC and ISO 8601 format, that the configuration policy was last updated.
   *         </p>
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * <p>
   *             The date and time, in UTC and ISO 8601 format, that the configuration policy was created.
   *         </p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>
   *             An object that defines how Security Hub CSPM is configured. It includes whether Security Hub CSPM is enabled or
   *             disabled, a list of enabled security standards, a list of enabled or disabled security controls, and a list of custom parameter values for specified controls. If the request included a
   *             list of security controls that are enabled in the configuration policy, Security Hub CSPM disables all other controls (including
   *             newly released controls). If the request included a list of security controls that are disabled in the configuration policy,
   *             Security Hub CSPM enables all other controls (including newly released controls).
   *         </p>
   * @public
   */
  ConfigurationPolicy?: Policy | undefined;
}

/**
 * @public
 */
export interface UpdateConnectorRequest {
  /**
   * <p>The unique identifier of the connector to update.</p>
   * @public
   */
  ConnectorId: string | undefined;

  /**
   * <p>The updated description of the connector.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The updated cloud provider configuration for the connector.</p>
   * @public
   */
  Provider?: CspmProviderUpdateConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateConnectorResponse {
  /**
   * <p>The connectivity status of the connector after the update.</p>
   * @public
   */
  ConnectorStatus?: CspmConnectorStatus | undefined;

  /**
   * <p>The enablement status of the connector after the update.</p>
   * @public
   */
  EnablementStatus?: CspmEnablementStatus | undefined;
}

/**
 * @public
 */
export interface UpdateConnectorV2Request {
  /**
   * <p>The UUID of the connectorV2 to identify connectorV2 resource.</p>
   * @public
   */
  ConnectorId: string | undefined;

  /**
   * <p>The description of the connectorV2.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The third-party provider’s service configuration.</p>
   * @public
   */
  Provider?: ProviderUpdateConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateConnectorV2Response {
  /**
   * <p>The status of the connector after the update.</p>
   * @public
   */
  ConnectorStatus?: ConnectorStatus | undefined;

  /**
   * <p>The enablement status of the connector after the update.</p>
   * @public
   */
  EnablementStatus?: EnablementStatus | undefined;
}

/**
 * @public
 */
export interface UpdateFindingAggregatorRequest {
  /**
   * <p>The ARN of the finding aggregator. To obtain the ARN, use <code>ListFindingAggregators</code>.</p>
   * @public
   */
  FindingAggregatorArn: string | undefined;

  /**
   * <p>Indicates whether to aggregate findings from all of the available Regions in the current partition. Also determines whether to automatically aggregate findings from new Regions as Security Hub CSPM supports them and you opt into them.</p>
   *          <p>The selected option also determines how to use the Regions provided in the Regions list.</p>
   *          <p>The options are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ALL_REGIONS</code> - Aggregates findings from all of the Regions where Security Hub CSPM is enabled. When you choose this option, Security Hub CSPM also automatically aggregates findings from new Regions as Security Hub CSPM supports them and you opt into them.
   *          </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ALL_REGIONS_EXCEPT_SPECIFIED</code> - Aggregates findings from all of the Regions where Security Hub CSPM is enabled, except for the Regions listed in the <code>Regions</code> parameter. When you choose this option, Security Hub CSPM also automatically aggregates findings from new Regions as Security Hub CSPM supports them and you opt into them.
   *          </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SPECIFIED_REGIONS</code> - Aggregates findings only from the Regions listed in the <code>Regions</code> parameter. Security Hub CSPM does not automatically aggregate findings from new Regions.
   *          </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NO_REGIONS</code> - Aggregates no data because no Regions are selected as linked Regions.
   *           </p>
   *             </li>
   *          </ul>
   * @public
   */
  RegionLinkingMode: string | undefined;

  /**
   * <p>If <code>RegionLinkingMode</code> is <code>ALL_REGIONS_EXCEPT_SPECIFIED</code>, then this is a space-separated list of Regions that don't replicate and send findings to the home Region.</p>
   *          <p>If <code>RegionLinkingMode</code> is <code>SPECIFIED_REGIONS</code>, then this is a space-separated list of Regions that do replicate and send findings to the home Region.</p>
   *          <p>An <code>InvalidInputException</code> error results if you populate this field while <code>RegionLinkingMode</code> is
   *         <code>NO_REGIONS</code>.</p>
   * @public
   */
  Regions?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateFindingAggregatorResponse {
  /**
   * <p>The ARN of the finding aggregator.</p>
   * @public
   */
  FindingAggregatorArn?: string | undefined;

  /**
   * <p>The home Region. Findings generated in linked Regions are replicated and sent to the home Region.</p>
   * @public
   */
  FindingAggregationRegion?: string | undefined;

  /**
   * <p>Indicates whether to link all Regions, all Regions except for a list of excluded Regions, or a list of included Regions.</p>
   * @public
   */
  RegionLinkingMode?: string | undefined;

  /**
   * <p>The list of excluded Regions or included Regions.</p>
   * @public
   */
  Regions?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateFindingsRequest {
  /**
   * <p>A collection of attributes that specify which findings you want to update.</p>
   * @public
   */
  Filters: AwsSecurityFindingFilters | undefined;

  /**
   * <p>The updated note for the finding.</p>
   * @public
   */
  Note?: NoteUpdate | undefined;

  /**
   * <p>The updated record state for the finding.</p>
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
   * <p>The ARN of the insight that you want to update.</p>
   * @public
   */
  InsightArn: string | undefined;

  /**
   * <p>The updated name for the insight.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The updated filters that define this insight.</p>
   * @public
   */
  Filters?: AwsSecurityFindingFilters | undefined;

  /**
   * <p>The updated <code>GroupBy</code> attribute that defines this insight.</p>
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
   * <p>Whether to automatically enable Security Hub CSPM in new member accounts when they join the organization.</p>
   *          <p>If set to <code>true</code>, then Security Hub CSPM is automatically enabled in new accounts. If set to <code>false</code>,
   *            then Security Hub CSPM isn't enabled in new accounts automatically. The default value is <code>false</code>.</p>
   *          <p>If the <code>ConfigurationType</code> of your organization is set to <code>CENTRAL</code>, then this field is set
   *            to <code>false</code> and can't be changed in the home Region and linked Regions. However, in that case, the delegated administrator can create a configuration
   *             policy in which Security Hub CSPM is enabled and associate the policy with new organization accounts.</p>
   * @public
   */
  AutoEnable: boolean | undefined;

  /**
   * <p>Whether to automatically enable Security Hub CSPM <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-standards-enable-disable.html">default standards</a>
   *            in new member accounts when they join the organization.</p>
   *          <p>The default value of this parameter is equal to <code>DEFAULT</code>.</p>
   *          <p>If equal to <code>DEFAULT</code>, then Security Hub CSPM default standards are automatically enabled for new member
   *            accounts. If equal to <code>NONE</code>, then default standards are not automatically enabled for new member
   *            accounts.</p>
   *          <p>If the <code>ConfigurationType</code> of your organization is set to <code>CENTRAL</code>, then this field is set
   *            to <code>NONE</code> and can't be changed in the home Region and linked Regions. However, in that case, the delegated administrator can create a configuration
   *             policy in which specific security standards are enabled and associate the policy with new organization accounts.</p>
   * @public
   */
  AutoEnableStandards?: AutoEnableStandards | undefined;

  /**
   * <p>
   *             Provides information about the way an organization is configured in Security Hub CSPM.
   *         </p>
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
   * <p>
   *             The Amazon Resource Name (ARN) or ID of the control to update.
   *         </p>
   * @public
   */
  SecurityControlId: string | undefined;

  /**
   * <p>
   *             An object that specifies which security control parameters to update.
   *         </p>
   * @public
   */
  Parameters: Record<string, ParameterConfiguration> | undefined;

  /**
   * <p>
   *             The most recent reason for updating the properties of the security control. This field accepts alphanumeric
   * characters in addition to white spaces, dashes, and underscores.
   *         </p>
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
   * <p>Whether to automatically enable new controls when they are added to standards that are
   *          enabled.</p>
   *          <p>By default, this is set to <code>true</code>, and new controls are enabled
   *          automatically. To not automatically enable new controls, set this to <code>false</code>.
   *       </p>
   *          <p>When you automatically enable new controls, you can interact with the controls in
   *            the console and programmatically immediately after release. However, automatically enabled controls have a temporary default status of
   *            <code>DISABLED</code>. It can take up to several days for Security Hub CSPM to process the control release and designate the
   *            control as <code>ENABLED</code> in your account. During the processing period, you can manually enable or disable a
   *            control, and Security Hub CSPM will maintain that designation regardless of whether you have <code>AutoEnableControls</code> set to
   *            <code>true</code>.</p>
   * @public
   */
  AutoEnableControls?: boolean | undefined;

  /**
   * <p>Updates whether the calling account has consolidated control findings turned on.
   *       If the value for this field is set to
   *       <code>SECURITY_CONTROL</code>, Security Hub CSPM generates a single finding for a control check even when the check
   *       applies to multiple enabled standards.</p>
   *          <p>If the value for this field is set to <code>STANDARD_CONTROL</code>, Security Hub CSPM generates separate findings
   *       for a control check when the check applies to multiple enabled standards.</p>
   *          <p>For accounts that are part of an organization, this value can only be updated in the administrator account.</p>
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
   * <p>The ARN of the security standard control to enable or disable.</p>
   * @public
   */
  StandardsControlArn: string | undefined;

  /**
   * <p>The updated status of the security standard control.</p>
   * @public
   */
  ControlStatus?: ControlStatus | undefined;

  /**
   * <p>A description of the reason why you are disabling a security standard control. If you
   *          are disabling a control, then this is required.</p>
   * @public
   */
  DisabledReason?: string | undefined;
}

/**
 * @public
 */
export interface UpdateStandardsControlResponse {}

/**
 * <p>Enables the creation of filtering criteria for security findings.</p>
 * @public
 */
export interface CompositeFilter {
  /**
   * <p>Enables filtering based on string field values.</p>
   * @public
   */
  StringFilters?: OcsfStringFilter[] | undefined;

  /**
   * <p>Enables filtering based on date and timestamp fields.</p>
   * @public
   */
  DateFilters?: OcsfDateFilter[] | undefined;

  /**
   * <p>Enables filtering  based on boolean field values.</p>
   * @public
   */
  BooleanFilters?: OcsfBooleanFilter[] | undefined;

  /**
   * <p>Enables filtering based on numerical field values.</p>
   * @public
   */
  NumberFilters?: OcsfNumberFilter[] | undefined;

  /**
   * <p>Enables filtering based on map field values.</p>
   * @public
   */
  MapFilters?: OcsfMapFilter[] | undefined;

  /**
   * <p>A list of IP address filters that allowing you to filter findings based on IP address properties.</p>
   * @public
   */
  IpFilters?: OcsfIpFilter[] | undefined;

  /**
   * <p>
   *          Provides an additional level of filtering, creating a three-layer nested structure.
   *          The first layer is a <code>CompositeFilters</code> array with a <code>CompositeOperator</code> (<code>AND</code>/<code>OR</code>).
   *          The second layer is a <code>CompositeFilter</code> object that contains direct filters and <code>NestedCompositeFilters</code>.
   *          The third layer is <code>NestedCompositeFilters</code>, which contains additional filter conditions.
   *       </p>
   * @public
   */
  NestedCompositeFilters?: CompositeFilter[] | undefined;

  /**
   * <p>The logical operator used to combine multiple filter conditions.</p>
   * @public
   */
  Operator?: AllowedOperators | undefined;
}

/**
 * <p>A filter structure that contains a logical combination of string filters and nested composite filters for findings trend data.</p>
 * @public
 */
export interface FindingsTrendsCompositeFilter {
  /**
   * <p>A list of string filters that apply to findings trend data fields.</p>
   * @public
   */
  StringFilters?: FindingsTrendsStringFilter[] | undefined;

  /**
   * <p>A list of nested composite filters that you can use to create complex filter conditions for findings trend data.</p>
   * @public
   */
  NestedCompositeFilters?: FindingsTrendsCompositeFilter[] | undefined;

  /**
   * <p>The logical operator (AND, OR) to apply between the string filters and nested composite filters.</p>
   * @public
   */
  Operator?: AllowedOperators | undefined;
}

/**
 * <p>Enables the creation of criteria for Amazon Web Services resources in Security Hub CSPM.</p>
 * @public
 */
export interface ResourcesCompositeFilter {
  /**
   * <p>Enables filtering based on string field values.</p>
   * @public
   */
  StringFilters?: ResourcesStringFilter[] | undefined;

  /**
   * <p>Enables filtering based on date and timestamp field values.</p>
   * @public
   */
  DateFilters?: ResourcesDateFilter[] | undefined;

  /**
   * <p>Enables filtering based on numerical field values.</p>
   * @public
   */
  NumberFilters?: ResourcesNumberFilter[] | undefined;

  /**
   * <p>Enables filtering based on map-based field values.</p>
   * @public
   */
  MapFilters?: ResourcesMapFilter[] | undefined;

  /**
   * <p>
   *          Provides an additional level of filtering, creating a three-layer nested structure.
   *          The first layer is a <code>CompositeFilters</code> array with a <code>CompositeOperator</code> (<code>AND</code>/<code>OR</code>).
   *          The second layer is a <code>CompositeFilter</code> object that contains direct filters and <code>NestedCompositeFilters</code>.
   *          The third layer is <code>NestedCompositeFilters</code>, which contains additional filter conditions.
   *       </p>
   * @public
   */
  NestedCompositeFilters?: ResourcesCompositeFilter[] | undefined;

  /**
   * <p>The logical operator used to combine multiple filter conditions.</p>
   * @public
   */
  Operator?: AllowedOperators | undefined;
}

/**
 * <p>A filter structure that contains a logical combination of string filters and nested composite filters for resources trend data.</p>
 * @public
 */
export interface ResourcesTrendsCompositeFilter {
  /**
   * <p>A list of string filters that apply to resources trend data fields.</p>
   * @public
   */
  StringFilters?: ResourcesTrendsStringFilter[] | undefined;

  /**
   * <p>A list of nested composite filters that you can use to create complex filter conditions for resources trend data.</p>
   * @public
   */
  NestedCompositeFilters?: ResourcesTrendsCompositeFilter[] | undefined;

  /**
   * <p>The logical operator (AND, OR) to apply between the string filters and nested composite filters.</p>
   * @public
   */
  Operator?: AllowedOperators | undefined;
}

/**
 * <p>The structure that defines filters to apply to findings trend data queries.</p>
 * @public
 */
export interface FindingsTrendsFilters {
  /**
   * <p>A list of composite filters to apply to the findings trend data.</p>
   * @public
   */
  CompositeFilters?: FindingsTrendsCompositeFilter[] | undefined;

  /**
   * <p>The logical operator (AND, OR) to apply between multiple composite filters.</p>
   * @public
   */
  CompositeOperator?: AllowedOperators | undefined;
}

/**
 * <p>Specifies the filtering criteria for security findings using OCSF.</p>
 * @public
 */
export interface OcsfFindingFilters {
  /**
   * <p>Enables the creation of complex filtering conditions by combining filter criteria.</p>
   * @public
   */
  CompositeFilters?: CompositeFilter[] | undefined;

  /**
   * <p>The logical operators used to combine the filtering on multiple <code>CompositeFilters</code>.</p>
   * @public
   */
  CompositeOperator?: AllowedOperators | undefined;
}

/**
 * <p>Enables filtering of Amazon Web Services resources based on data.</p>
 * @public
 */
export interface ResourcesFilters {
  /**
   * <p>A collection of complex filtering conditions that can be applied to Amazon Web Services resources.</p>
   * @public
   */
  CompositeFilters?: ResourcesCompositeFilter[] | undefined;

  /**
   * <p>The logical operator used to combine multiple filter conditions in the structure.</p>
   * @public
   */
  CompositeOperator?: AllowedOperators | undefined;
}

/**
 * <p>The structure that defines filters to apply to resources trend data queries.</p>
 * @public
 */
export interface ResourcesTrendsFilters {
  /**
   * <p>A list of composite filters to apply to the resources trend data.</p>
   * @public
   */
  CompositeFilters?: ResourcesTrendsCompositeFilter[] | undefined;

  /**
   * <p>The logical operator (AND, OR) to apply between multiple composite filters.</p>
   * @public
   */
  CompositeOperator?: AllowedOperators | undefined;
}

/**
 * <p>Defines the parameters and conditions used to evaluate and filter security findings.</p>
 * @public
 */
export type Criteria =
  | Criteria.OcsfFindingCriteriaMember
  | Criteria.$UnknownMember;

/**
 * @public
 */
export namespace Criteria {
  /**
   * <p>The filtering conditions that align with OCSF standards.</p>
   * @public
   */
  export interface OcsfFindingCriteriaMember {
    OcsfFindingCriteria: OcsfFindingFilters;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    OcsfFindingCriteria?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    OcsfFindingCriteria: (value: OcsfFindingFilters) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>The configuration for a findings export: the output format, an optional set of filters, and the fields to include.</p>
 * @public
 */
export interface FindingsOutput {
  /**
   * <p>The output format of the export. <code>CSV</code> produces comma-separated rows that are suitable for spreadsheets and analysis tools. <code>OCSF_JSON</code> produces newline-delimited JSON records in the Open Cybersecurity Schema Framework (OCSF) format used elsewhere in Security Hub.</p>
   * @public
   */
  Format: FindingsExportFormat | undefined;

  /**
   * <p>An optional set of OCSF finding filters that restrict which findings are exported. The filter structure is the same as the one used by <code>GetFindingsV2</code>. If you omit this member, Security Hub exports all findings available to the caller. When echoed by <code>GetExportJobV2</code>, relative date ranges are returned unresolved.</p>
   * @public
   */
  Filters?: OcsfFindingFilters | undefined;

  /**
   * <p>The OCSF finding fields to include in the export, specified as OCSF field paths (for example, <code>finding_info.title</code> or <code>severity</code>). You can specify from 1 to 50 fields.</p>
   *          <p>Whether this parameter is required depends on the value of <code>Format</code>:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CSV</code> – Required. The field paths that you specify become the columns of the output, in the order that you provide them. If you omit this parameter, the request returns a <code>ValidationException</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OCSF_JSON</code> – Not supported. This format includes each finding in full, so field selection doesn't apply. If you specify this parameter, the request returns a <code>ValidationException</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  SelectedFields?: FindingsSelectableField[] | undefined;
}

/**
 * @public
 */
export interface GetFindingsTrendsV2Request {
  /**
   * <p>The filters to apply to the findings trend data.</p>
   * @public
   */
  Filters?: FindingsTrendsFilters | undefined;

  /**
   * <p>The starting timestamp for the time period to analyze findings trends, in ISO 8601 format.</p>
   * @public
   */
  StartTime: Date | undefined;

  /**
   * <p>The ending timestamp for the time period to analyze findings trends, in ISO 8601 format.</p>
   * @public
   */
  EndTime: Date | undefined;

  /**
   * <p>The token to use for paginating results. This value is returned in the response if more results are available.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of trend data points to return in a single response.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface GetFindingsV2Request {
  /**
   * <p>The finding attributes used to define a condition to filter the returned OCSF findings.
   *          You can filter up to 10 composite filters.
   *          For each filter type inside of a composite filter, you can provide up to 20 filters.</p>
   * @public
   */
  Filters?: OcsfFindingFilters | undefined;

  /**
   * <p>Limits the results to findings from specific organizational units or from the delegated administrator's organization.
   *          Only the delegated administrator account can use this parameter. Other accounts receive an <code>AccessDeniedException</code>.</p>
   *          <p>This parameter is optional. If you omit it, the delegated administrator sees findings from all accounts across the entire organization. Other accounts see only their own findings.</p>
   *          <p>You can specify up to 10 entries in <code>Scopes.AwsOrganizations</code>. If multiple entries are specified, the entries are combined using OR logic.</p>
   * @public
   */
  Scopes?: FindingScopes | undefined;

  /**
   * <p>The finding attributes used to sort the list of returned findings.</p>
   * @public
   */
  SortCriteria?: SortCriterion[] | undefined;

  /**
   * <p>
   *          The token required for pagination.
   *          On your first call, set the value of this parameter to <code>NULL</code>.
   *          For subsequent calls, to continue listing data, set the value of this parameter to the value returned in the previous response.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface GetResourcesTrendsV2Request {
  /**
   * <p>The filters to apply to the resources trend data.</p>
   * @public
   */
  Filters?: ResourcesTrendsFilters | undefined;

  /**
   * <p>The starting timestamp for the time period to analyze resources trends, in ISO 8601 format.</p>
   * @public
   */
  StartTime: Date | undefined;

  /**
   * <p>The ending timestamp for the time period to analyze resources trends, in ISO 8601 format.</p>
   * @public
   */
  EndTime: Date | undefined;

  /**
   * <p>The token to use for paginating results. This value is returned in the response if more results are available.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of trend data points to return in a single response.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface GetResourcesV2Request {
  /**
   * <p>Filters resources based on a set of criteria.</p>
   * @public
   */
  Filters?: ResourcesFilters | undefined;

  /**
   * <p>Limits the results to resources from specific organizational units or from the delegated administrator's organization.
   *          Only the delegated administrator account can use this parameter. Other accounts receive an <code>AccessDeniedException</code>.</p>
   *          <p>This parameter is optional. If you omit it, the delegated administrator sees resources from all accounts across the entire organization. Other accounts see only their own resources.</p>
   *          <p>You can specify up to 10 entries in <code>Scopes.AwsOrganizations</code>. If multiple entries are specified, the entries are combined using OR logic.</p>
   * @public
   */
  Scopes?: ResourceScopes | undefined;

  /**
   * <p>The resource attributes used to sort the list of returned resources.</p>
   * @public
   */
  SortCriteria?: SortCriterion[] | undefined;

  /**
   * <p>The token required for pagination.
   *          On your first call, set the value of this parameter to <code>NULL</code>.
   *          For subsequent calls, to continue listing data, set the value of this parameter to the value returned in the previous response.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Defines the how the finding attribute should be grouped.</p>
 * @public
 */
export interface GroupByRule {
  /**
   * <p>The criteria used to select which security findings should be included in the grouping operation.</p>
   * @public
   */
  Filters?: OcsfFindingFilters | undefined;

  /**
   * <p>The attribute by which filtered findings should be grouped.</p>
   * @public
   */
  GroupByField: GroupByField | undefined;
}

/**
 * <p>Defines the configuration for organizing and categorizing Amazon Web Services resources based on associated security findings.</p>
 * @public
 */
export interface ResourceGroupByRule {
  /**
   * <p>Specifies the attribute that resources should be grouped by.</p>
   * @public
   */
  GroupByField: ResourceGroupByField | undefined;

  /**
   * <p>The criteria used to select resources and associated security findings.</p>
   * @public
   */
  Filters?: ResourcesFilters | undefined;
}

/**
 * @public
 */
export interface CreateAutomationRuleV2Request {
  /**
   * <p>The name of the V2 automation rule.</p>
   * @public
   */
  RuleName: string | undefined;

  /**
   * <p>The status of the V2 automation rule.</p>
   * @public
   */
  RuleStatus?: RuleStatusV2 | undefined;

  /**
   * <p>A description of the V2 automation rule.</p>
   * @public
   */
  Description: string | undefined;

  /**
   * <p>The value for the rule priority.</p>
   * @public
   */
  RuleOrder: number | undefined;

  /**
   * <p>The filtering type and configuration of the automation rule.</p>
   * @public
   */
  Criteria: Criteria | undefined;

  /**
   * <p>A list of actions to be performed when the rule criteria is met.</p>
   * @public
   */
  Actions: AutomationRulesActionV2[] | undefined;

  /**
   * <p>A list of key-value pairs associated with the V2 automation rule.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>A unique identifier used to ensure idempotency.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * <p>Specifies what data to export and how to format it. This is a union: you must specify exactly one member. Currently, the only supported member is <code>Findings</code>.</p>
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
   * <p>Configures an export of Security Hub findings, including the output format and any filters or selected fields.</p>
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
export interface GetAutomationRuleV2Response {
  /**
   * <p>The ARN of the V2 automation rule.</p>
   * @public
   */
  RuleArn?: string | undefined;

  /**
   * <p>The ID of the V2 automation rule.</p>
   * @public
   */
  RuleId?: string | undefined;

  /**
   * <p>The value for the rule priority.</p>
   * @public
   */
  RuleOrder?: number | undefined;

  /**
   * <p>The name of the V2 automation rule.</p>
   * @public
   */
  RuleName?: string | undefined;

  /**
   * <p>The status of the V2 automation automation rule.</p>
   * @public
   */
  RuleStatus?: RuleStatusV2 | undefined;

  /**
   * <p>A description of the automation rule.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The filtering type and configuration of the V2 automation rule.</p>
   * @public
   */
  Criteria?: Criteria | undefined;

  /**
   * <p>A list of actions performed when the rule criteria is met.</p>
   * @public
   */
  Actions?: AutomationRulesActionV2[] | undefined;

  /**
   * <p>The timestamp when the V2 automation rule was created.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The timestamp when the V2 automation rule was updated.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface UpdateAutomationRuleV2Request {
  /**
   * <p>The ARN of the automation rule.</p>
   * @public
   */
  Identifier: string | undefined;

  /**
   * <p>The status of the automation rule.</p>
   * @public
   */
  RuleStatus?: RuleStatusV2 | undefined;

  /**
   * <p>Represents a value for the rule priority.</p>
   * @public
   */
  RuleOrder?: number | undefined;

  /**
   * <p>A description of the automation rule.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The name of the automation rule.</p>
   * @public
   */
  RuleName?: string | undefined;

  /**
   * <p>The filtering type and configuration of the automation rule.</p>
   * @public
   */
  Criteria?: Criteria | undefined;

  /**
   * <p>A list of actions to be performed when the rule criteria is met.</p>
   * @public
   */
  Actions?: AutomationRulesActionV2[] | undefined;
}

/**
 * @public
 */
export interface GetExportJobV2Response {
  /**
   * <p>The unique identifier of the export job.</p>
   * @public
   */
  ExportJobId: string | undefined;

  /**
   * <p>The user-provided name of the export job, if one was specified when the job was started.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The current state of the export job.</p>
   * @public
   */
  Status: ExportStatus | undefined;

  /**
   * <p>The category of data that the export job produces.</p>
   * @public
   */
  DataType: ExportDataType | undefined;

  /**
   * <p>The output configuration that the export job was started with, including the format and any filters or selected fields.</p>
   * @public
   */
  OutputConfiguration?: ExportOutput | undefined;

  /**
   * <p>The organization scopes that the export job was started with, echoed verbatim. This parameter is absent if the caller didn't supply <code>Scopes</code>. It contains only the organization or organizational unit (OU) identifiers that the caller submitted; it never contains resolved member-account identifiers.</p>
   * @public
   */
  Scopes?: ExportScopes | undefined;

  /**
   * <p>The destination that the export job writes to.</p>
   * @public
   */
  Destination: ExportDestination | undefined;

  /**
   * <p>A code that classifies why the export job failed. Present only when <code>Status</code> is <code>FAILED</code>.</p>
   * @public
   */
  FailureCode?: ExportFailureCode | undefined;

  /**
   * <p>A human-readable message that provides more detail about why the export job failed. Present only when <code>Status</code> is <code>FAILED</code>.</p>
   * @public
   */
  FailureMessage?: string | undefined;

  /**
   * <p>The time when the export job was created.</p>
   *          <p>For more information about the validation and formatting of timestamp fields in Security Hub, see <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps">Timestamps</a>.</p>
   * @public
   */
  StartedAt: Date | undefined;

  /**
   * <p>The time when the export job reached a terminal state (<code>SUCCEEDED</code>, <code>FAILED</code>, or <code>CANCELLED</code>). This parameter is absent while the job is <code>RUNNING</code>.</p>
   *          <p>For more information about the validation and formatting of timestamp fields in Security Hub, see <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps">Timestamps</a>.</p>
   * @public
   */
  EndedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetFindingStatisticsV2Request {
  /**
   * <p>Specifies how security findings should be aggregated and organized in the statistical analysis.
   *       It can accept up to 5 <code>groupBy</code> fields in a single call.</p>
   * @public
   */
  GroupByRules: GroupByRule[] | undefined;

  /**
   * <p>Limits the results to findings from specific organizational units or from the delegated administrator's organization.
   *          Only the delegated administrator account can use this parameter. Other accounts receive an <code>AccessDeniedException</code>.</p>
   *          <p>This parameter is optional. If you omit it, the delegated administrator sees statistics from all accounts across the entire organization. Other accounts see only statistics for their own findings.</p>
   *          <p>You can specify up to 10 entries in <code>Scopes.AwsOrganizations</code>. If multiple entries are specified, the entries are combined using OR logic.</p>
   * @public
   */
  Scopes?: FindingScopes | undefined;

  /**
   * <p>Orders the aggregation count in descending or ascending order.
   *          Descending order is the default.</p>
   * @public
   */
  SortOrder?: SortOrder | undefined;

  /**
   * <p>The maximum number of results to be returned.</p>
   * @public
   */
  MaxStatisticResults?: number | undefined;
}

/**
 * @public
 */
export interface GetResourcesStatisticsV2Request {
  /**
   * <p>How resource statistics should be aggregated and organized in the response.</p>
   * @public
   */
  GroupByRules: ResourceGroupByRule[] | undefined;

  /**
   * <p>Limits the results to resources from specific organizational units or from the delegated administrator's organization.
   *          Only the delegated administrator account can use this parameter. Other accounts receive an <code>AccessDeniedException</code>.</p>
   *          <p>This parameter is optional. If you omit it, the delegated administrator sees statistics from all accounts across the entire organization. Other accounts see only statistics for their own resources.</p>
   *          <p>You can specify up to 10 entries in <code>Scopes.AwsOrganizations</code>. If multiple entries are specified, the entries are combined using OR logic.</p>
   * @public
   */
  Scopes?: ResourceScopes | undefined;

  /**
   * <p>Sorts aggregated statistics.</p>
   * @public
   */
  SortOrder?: SortOrder | undefined;

  /**
   * <p>The maximum number of results to be returned.</p>
   * @public
   */
  MaxStatisticResults?: number | undefined;
}

/**
 * @public
 */
export interface StartExportJobV2Request {
  /**
   * <p>An optional, user-provided name for the export job that helps you identify it in <code>ListExportJobsV2</code> results. The value can be 1–256 characters. Alphanumeric characters, spaces, and the following ASCII characters are permitted: <code>. _ , : ( ) / + -</code>.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The destination that Security Hub writes the export to. You must specify exactly one destination type. Currently, the only supported type is Amazon S3.</p>
   * @public
   */
  Destination: ExportDestination | undefined;

  /**
   * <p>Specifies what data to export and how to format it. You must specify exactly one output type. Currently, the only supported type is <code>Findings</code>.</p>
   * @public
   */
  OutputConfiguration: ExportOutput | undefined;

  /**
   * <p>Limits the export to findings from specific organizational units (OUs) or from the delegated administrator's organization. Only the delegated administrator account can use this parameter; other accounts that specify it receive an <code>AccessDeniedException</code>.</p>
   *          <p>This parameter is optional. If you omit it, the delegated administrator exports findings from all accounts across the entire organization, and other accounts export only their own findings.</p>
   *          <p>You can specify up to 10 entries in <code>Scopes.AwsOrganizations</code>. If you specify multiple entries, Security Hub combines them using OR logic.</p>
   * @public
   */
  Scopes?: ExportScopes | undefined;

  /**
   * <p>A unique identifier used to ensure idempotency.</p>
   * @public
   */
  ClientToken?: string | undefined;
}
