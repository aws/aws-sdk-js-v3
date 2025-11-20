// smithy-typescript generated code
import {
  AllowedOperators,
  AssociationType,
  AutoEnableStandards,
  ConfigurationPolicyAssociationStatus,
  ControlFindingGenerator,
  ControlStatus,
  GroupByField,
  RecordState,
  ResourceGroupByField,
  RuleStatusV2,
  SortOrder,
  TargetType,
} from "./enums";

import { AutomationRulesActionV2, NoteUpdate } from "./models_0";

import {
  AwsSecurityFindingFilters,
  FindingsTrendsStringFilter,
  JiraCloudUpdateConfiguration,
  OcsfBooleanFilter,
  OcsfDateFilter,
  OcsfIpFilter,
  OcsfMapFilter,
  OcsfNumberFilter,
  OcsfStringFilter,
  OrganizationConfiguration,
  ParameterConfiguration,
  Policy,
  ResourcesDateFilter,
  ResourcesMapFilter,
  ResourcesNumberFilter,
  ResourcesStringFilter,
  ResourcesTrendsStringFilter,
  SortCriterion,
  StandardsControlAssociationSummary,
  Target,
} from "./models_2";

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
 * <p>The parameters required to update the configuration of an integration provider.</p>
 * @public
 */
export type ProviderUpdateConfiguration =
  | ProviderUpdateConfiguration.JiraCloudMember
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
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    JiraCloud?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    JiraCloud: (value: JiraCloudUpdateConfiguration) => T;
    _: (name: string, value: any) => T;
  }
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
   *             Security Hub delegated administrator or inherited from a parent.
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
   *             An object that defines how Security Hub is configured. It includes whether Security Hub is enabled or
   *             disabled, a list of enabled security standards, a list of enabled or disabled security controls, and a list of custom parameter values for specified controls.
   *             If you provide a list of security controls that are enabled in the configuration policy, Security Hub disables all other controls (including newly
   *             released controls). If you provide a list of security controls that are disabled in the configuration policy, Security Hub
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
   *             An object that defines how Security Hub is configured. It includes whether Security Hub is enabled or
   *             disabled, a list of enabled security standards, a list of enabled or disabled security controls, and a list of custom parameter values for specified controls. If the request included a
   *             list of security controls that are enabled in the configuration policy, Security Hub disables all other controls (including
   *             newly released controls). If the request included a list of security controls that are disabled in the configuration policy,
   *             Security Hub enables all other controls (including newly released controls).
   *         </p>
   * @public
   */
  ConfigurationPolicy?: Policy | undefined;
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
   * <p>The clientSecret of ServiceNow.</p>
   * @public
   */
  ClientSecret?: string | undefined;

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
export interface UpdateConnectorV2Response {}

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
   * <p>Indicates whether to aggregate findings from all of the available Regions in the current partition. Also determines whether to automatically aggregate findings from new Regions as Security Hub supports them and you opt into them.</p>
   *          <p>The selected option also determines how to use the Regions provided in the Regions list.</p>
   *          <p>The options are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ALL_REGIONS</code> - Aggregates findings from all of the Regions where Security Hub is enabled. When you choose this option, Security Hub also automatically aggregates findings from new Regions as Security Hub supports them and you opt into them.
   *          </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ALL_REGIONS_EXCEPT_SPECIFIED</code> - Aggregates findings from all of the Regions where Security Hub is enabled, except for the Regions listed in the <code>Regions</code> parameter. When you choose this option, Security Hub also automatically aggregates findings from new Regions as Security Hub supports them and you opt into them.
   *          </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SPECIFIED_REGIONS</code> - Aggregates findings only from the Regions listed in the <code>Regions</code> parameter. Security Hub does not automatically aggregate findings from new Regions.
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
   * <p>Whether to automatically enable Security Hub in new member accounts when they join the organization.</p>
   *          <p>If set to <code>true</code>, then Security Hub is automatically enabled in new accounts. If set to <code>false</code>,
   *            then Security Hub isn't enabled in new accounts automatically. The default value is <code>false</code>.</p>
   *          <p>If the <code>ConfigurationType</code> of your organization is set to <code>CENTRAL</code>, then this field is set
   *            to <code>false</code> and can't be changed in the home Region and linked Regions. However, in that case, the delegated administrator can create a configuration
   *             policy in which Security Hub is enabled and associate the policy with new organization accounts.</p>
   * @public
   */
  AutoEnable: boolean | undefined;

  /**
   * <p>Whether to automatically enable Security Hub <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-standards-enable-disable.html">default standards</a>
   *            in new member accounts when they join the organization.</p>
   *          <p>The default value of this parameter is equal to <code>DEFAULT</code>.</p>
   *          <p>If equal to <code>DEFAULT</code>, then Security Hub default standards are automatically enabled for new member
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
   *             Provides information about the way an organization is configured in Security Hub.
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
   *            <code>DISABLED</code>. It can take up to several days for Security Hub to process the control release and designate the
   *            control as <code>ENABLED</code> in your account. During the processing period, you can manually enable or disable a
   *            control, and Security Hub will maintain that designation regardless of whether you have <code>AutoEnableControls</code> set to
   *            <code>true</code>.</p>
   * @public
   */
  AutoEnableControls?: boolean | undefined;

  /**
   * <p>Updates whether the calling account has consolidated control findings turned on.
   *       If the value for this field is set to
   *       <code>SECURITY_CONTROL</code>, Security Hub generates a single finding for a control check even when the check
   *       applies to multiple enabled standards.</p>
   *          <p>If the value for this field is set to <code>STANDARD_CONTROL</code>, Security Hub generates separate findings
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
 * <p>Enables the creation of criteria for Amazon Web Services resources in Security Hub.</p>
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
export type Criteria = Criteria.OcsfFindingCriteriaMember | Criteria.$UnknownMember;

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
   * <p>The finding attributes used to sort the list of returned findings.</p>
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
export interface GetFindingStatisticsV2Request {
  /**
   * <p>Specifies how security findings should be aggregated and organized in the statistical analysis.
   *       It can accept up to 5 <code>groupBy</code> fields in a single call.</p>
   * @public
   */
  GroupByRules: GroupByRule[] | undefined;

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
