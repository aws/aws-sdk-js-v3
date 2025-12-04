import {
  AcceptAdministratorInvitationCommand,
  AcceptInvitationCommand,
  ActorSessionMfaStatus,
  AdminStatus,
  AllowedOperators,
  AssociationStatus,
  AssociationType,
  AutoEnableStandards,
  AutomationRulesActionType,
  AutomationRulesActionTypeV2,
  AwsIamAccessKeyStatus,
  AwsS3BucketNotificationConfigurationS3KeyFilterRuleName,
  BatchDeleteAutomationRulesCommand,
  BatchDisableStandardsCommand,
  BatchEnableStandardsCommand,
  BatchGetAutomationRulesCommand,
  BatchGetConfigurationPolicyAssociationsCommand,
  BatchGetSecurityControlsCommand,
  BatchGetStandardsControlAssociationsCommand,
  BatchImportFindingsCommand,
  BatchUpdateAutomationRulesCommand,
  BatchUpdateFindingsCommand,
  BatchUpdateFindingsV2Command,
  BatchUpdateFindingsV2UnprocessedFindingErrorCode,
  BatchUpdateStandardsControlAssociationsCommand,
  ComplianceStatus,
  ConfigurationPolicyAssociationStatus,
  ConnectionDirection,
  ConnectorAuthStatus,
  ConnectorProviderName,
  ConnectorStatus,
  ControlFindingGenerator,
  ControlStatus,
  CreateActionTargetCommand,
  CreateAggregatorV2Command,
  CreateAutomationRuleCommand,
  CreateAutomationRuleV2Command,
  CreateConfigurationPolicyCommand,
  CreateConnectorV2Command,
  CreateFindingAggregatorCommand,
  CreateInsightCommand,
  CreateMembersCommand,
  CreateTicketV2Command,
  DateRangeUnit,
  DeclineInvitationsCommand,
  DeleteActionTargetCommand,
  DeleteAggregatorV2Command,
  DeleteAutomationRuleV2Command,
  DeleteConfigurationPolicyCommand,
  DeleteConnectorV2Command,
  DeleteFindingAggregatorCommand,
  DeleteInsightCommand,
  DeleteInvitationsCommand,
  DeleteMembersCommand,
  DescribeActionTargetsCommand,
  DescribeHubCommand,
  DescribeOrganizationConfigurationCommand,
  DescribeProductsCommand,
  DescribeProductsV2Command,
  DescribeSecurityHubV2Command,
  DescribeStandardsCommand,
  DescribeStandardsControlsCommand,
  DisableImportFindingsForProductCommand,
  DisableOrganizationAdminAccountCommand,
  DisableSecurityHubCommand,
  DisableSecurityHubV2Command,
  DisassociateFromAdministratorAccountCommand,
  DisassociateFromMasterAccountCommand,
  DisassociateMembersCommand,
  EnableImportFindingsForProductCommand,
  EnableOrganizationAdminAccountCommand,
  EnableSecurityHubCommand,
  EnableSecurityHubV2Command,
  FindingHistoryUpdateSourceType,
  FindingsTrendsStringField,
  GetAdministratorAccountCommand,
  GetAggregatorV2Command,
  GetAutomationRuleV2Command,
  GetConfigurationPolicyAssociationCommand,
  GetConfigurationPolicyCommand,
  GetConnectorV2Command,
  GetEnabledStandardsCommand,
  GetFindingAggregatorCommand,
  GetFindingHistoryCommand,
  GetFindingStatisticsV2Command,
  GetFindingsCommand,
  GetFindingsTrendsV2Command,
  GetFindingsV2Command,
  GetInsightResultsCommand,
  GetInsightsCommand,
  GetInvitationsCountCommand,
  GetMasterAccountCommand,
  GetMembersCommand,
  GetResourcesStatisticsV2Command,
  GetResourcesTrendsV2Command,
  GetResourcesV2Command,
  GetSecurityControlDefinitionCommand,
  GranularityField,
  GroupByField,
  IntegrationType,
  IntegrationV2Type,
  InviteMembersCommand,
  ListAggregatorsV2Command,
  ListAutomationRulesCommand,
  ListAutomationRulesV2Command,
  ListConfigurationPoliciesCommand,
  ListConfigurationPolicyAssociationsCommand,
  ListConnectorsV2Command,
  ListEnabledProductsForImportCommand,
  ListFindingAggregatorsCommand,
  ListInvitationsCommand,
  ListMembersCommand,
  ListOrganizationAdminAccountsCommand,
  ListSecurityControlDefinitionsCommand,
  ListStandardsControlAssociationsCommand,
  ListTagsForResourceCommand,
  MalwareState,
  MalwareType,
  MapFilterComparison,
  NetworkDirection,
  OcsfBooleanField,
  OcsfDateField,
  OcsfIpField,
  OcsfMapField,
  OcsfNumberField,
  OcsfStringField,
  OrganizationConfigurationConfigurationType,
  OrganizationConfigurationStatus,
  ParameterValueType,
  Partition,
  RecordState,
  RegionAvailabilityStatus,
  RegisterConnectorV2Command,
  ResourceCategory,
  ResourceGroupByField,
  ResourcesDateField,
  ResourcesMapField,
  ResourcesNumberField,
  ResourcesStringField,
  ResourcesTrendsStringField,
  RuleStatus,
  RuleStatusV2,
  SecurityControlProperty,
  SecurityHub,
  SecurityHubClient,
  SecurityHubFeature,
  SecurityHubServiceException,
  SeverityLabel,
  SeverityRating,
  SortOrder,
  StandardsControlsUpdatable,
  StandardsStatus,
  StartConfigurationPolicyAssociationCommand,
  StartConfigurationPolicyDisassociationCommand,
  StatusReasonCode,
  StringFilterComparison,
  TagResourceCommand,
  TargetType,
  ThreatIntelIndicatorCategory,
  ThreatIntelIndicatorType,
  TicketCreationMode,
  UnprocessedErrorCode,
  UntagResourceCommand,
  UpdateActionTargetCommand,
  UpdateAggregatorV2Command,
  UpdateAutomationRuleV2Command,
  UpdateConfigurationPolicyCommand,
  UpdateConnectorV2Command,
  UpdateFindingAggregatorCommand,
  UpdateFindingsCommand,
  UpdateInsightCommand,
  UpdateOrganizationConfigurationCommand,
  UpdateSecurityControlCommand,
  UpdateSecurityHubConfigurationCommand,
  UpdateStandardsControlCommand,
  UpdateStatus,
  VerificationState,
  VulnerabilityExploitAvailable,
  VulnerabilityFixAvailable,
  WorkflowState,
  WorkflowStatus,
  paginateDescribeActionTargets,
  paginateDescribeProducts,
  paginateDescribeProductsV2,
  paginateDescribeStandards,
  paginateDescribeStandardsControls,
  paginateGetEnabledStandards,
  paginateGetFindingHistory,
  paginateGetFindings,
  paginateGetFindingsTrendsV2,
  paginateGetFindingsV2,
  paginateGetInsights,
  paginateGetResourcesTrendsV2,
  paginateGetResourcesV2,
  paginateListAggregatorsV2,
  paginateListConfigurationPolicies,
  paginateListConfigurationPolicyAssociations,
  paginateListEnabledProductsForImport,
  paginateListFindingAggregators,
  paginateListInvitations,
  paginateListMembers,
  paginateListOrganizationAdminAccounts,
  paginateListSecurityControlDefinitions,
  paginateListStandardsControlAssociations,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof SecurityHubClient === "function")
assert(typeof SecurityHub === "function")
// commands
assert(typeof AcceptAdministratorInvitationCommand === "function")
assert(typeof AcceptInvitationCommand === "function")
assert(typeof BatchDeleteAutomationRulesCommand === "function")
assert(typeof BatchDisableStandardsCommand === "function")
assert(typeof BatchEnableStandardsCommand === "function")
assert(typeof BatchGetAutomationRulesCommand === "function")
assert(typeof BatchGetConfigurationPolicyAssociationsCommand === "function")
assert(typeof BatchGetSecurityControlsCommand === "function")
assert(typeof BatchGetStandardsControlAssociationsCommand === "function")
assert(typeof BatchImportFindingsCommand === "function")
assert(typeof BatchUpdateAutomationRulesCommand === "function")
assert(typeof BatchUpdateFindingsCommand === "function")
assert(typeof BatchUpdateFindingsV2Command === "function")
assert(typeof BatchUpdateStandardsControlAssociationsCommand === "function")
assert(typeof CreateActionTargetCommand === "function")
assert(typeof CreateAggregatorV2Command === "function")
assert(typeof CreateAutomationRuleCommand === "function")
assert(typeof CreateAutomationRuleV2Command === "function")
assert(typeof CreateConfigurationPolicyCommand === "function")
assert(typeof CreateConnectorV2Command === "function")
assert(typeof CreateFindingAggregatorCommand === "function")
assert(typeof CreateInsightCommand === "function")
assert(typeof CreateMembersCommand === "function")
assert(typeof CreateTicketV2Command === "function")
assert(typeof DeclineInvitationsCommand === "function")
assert(typeof DeleteActionTargetCommand === "function")
assert(typeof DeleteAggregatorV2Command === "function")
assert(typeof DeleteAutomationRuleV2Command === "function")
assert(typeof DeleteConfigurationPolicyCommand === "function")
assert(typeof DeleteConnectorV2Command === "function")
assert(typeof DeleteFindingAggregatorCommand === "function")
assert(typeof DeleteInsightCommand === "function")
assert(typeof DeleteInvitationsCommand === "function")
assert(typeof DeleteMembersCommand === "function")
assert(typeof DescribeActionTargetsCommand === "function")
assert(typeof DescribeHubCommand === "function")
assert(typeof DescribeOrganizationConfigurationCommand === "function")
assert(typeof DescribeProductsCommand === "function")
assert(typeof DescribeProductsV2Command === "function")
assert(typeof DescribeSecurityHubV2Command === "function")
assert(typeof DescribeStandardsCommand === "function")
assert(typeof DescribeStandardsControlsCommand === "function")
assert(typeof DisableImportFindingsForProductCommand === "function")
assert(typeof DisableOrganizationAdminAccountCommand === "function")
assert(typeof DisableSecurityHubCommand === "function")
assert(typeof DisableSecurityHubV2Command === "function")
assert(typeof DisassociateFromAdministratorAccountCommand === "function")
assert(typeof DisassociateFromMasterAccountCommand === "function")
assert(typeof DisassociateMembersCommand === "function")
assert(typeof EnableImportFindingsForProductCommand === "function")
assert(typeof EnableOrganizationAdminAccountCommand === "function")
assert(typeof EnableSecurityHubCommand === "function")
assert(typeof EnableSecurityHubV2Command === "function")
assert(typeof GetAdministratorAccountCommand === "function")
assert(typeof GetAggregatorV2Command === "function")
assert(typeof GetAutomationRuleV2Command === "function")
assert(typeof GetConfigurationPolicyCommand === "function")
assert(typeof GetConfigurationPolicyAssociationCommand === "function")
assert(typeof GetConnectorV2Command === "function")
assert(typeof GetEnabledStandardsCommand === "function")
assert(typeof GetFindingAggregatorCommand === "function")
assert(typeof GetFindingHistoryCommand === "function")
assert(typeof GetFindingsCommand === "function")
assert(typeof GetFindingStatisticsV2Command === "function")
assert(typeof GetFindingsTrendsV2Command === "function")
assert(typeof GetFindingsV2Command === "function")
assert(typeof GetInsightResultsCommand === "function")
assert(typeof GetInsightsCommand === "function")
assert(typeof GetInvitationsCountCommand === "function")
assert(typeof GetMasterAccountCommand === "function")
assert(typeof GetMembersCommand === "function")
assert(typeof GetResourcesStatisticsV2Command === "function")
assert(typeof GetResourcesTrendsV2Command === "function")
assert(typeof GetResourcesV2Command === "function")
assert(typeof GetSecurityControlDefinitionCommand === "function")
assert(typeof InviteMembersCommand === "function")
assert(typeof ListAggregatorsV2Command === "function")
assert(typeof ListAutomationRulesCommand === "function")
assert(typeof ListAutomationRulesV2Command === "function")
assert(typeof ListConfigurationPoliciesCommand === "function")
assert(typeof ListConfigurationPolicyAssociationsCommand === "function")
assert(typeof ListConnectorsV2Command === "function")
assert(typeof ListEnabledProductsForImportCommand === "function")
assert(typeof ListFindingAggregatorsCommand === "function")
assert(typeof ListInvitationsCommand === "function")
assert(typeof ListMembersCommand === "function")
assert(typeof ListOrganizationAdminAccountsCommand === "function")
assert(typeof ListSecurityControlDefinitionsCommand === "function")
assert(typeof ListStandardsControlAssociationsCommand === "function")
assert(typeof ListTagsForResourceCommand === "function")
assert(typeof RegisterConnectorV2Command === "function")
assert(typeof StartConfigurationPolicyAssociationCommand === "function")
assert(typeof StartConfigurationPolicyDisassociationCommand === "function")
assert(typeof TagResourceCommand === "function")
assert(typeof UntagResourceCommand === "function")
assert(typeof UpdateActionTargetCommand === "function")
assert(typeof UpdateAggregatorV2Command === "function")
assert(typeof UpdateAutomationRuleV2Command === "function")
assert(typeof UpdateConfigurationPolicyCommand === "function")
assert(typeof UpdateConnectorV2Command === "function")
assert(typeof UpdateFindingAggregatorCommand === "function")
assert(typeof UpdateFindingsCommand === "function")
assert(typeof UpdateInsightCommand === "function")
assert(typeof UpdateOrganizationConfigurationCommand === "function")
assert(typeof UpdateSecurityControlCommand === "function")
assert(typeof UpdateSecurityHubConfigurationCommand === "function")
assert(typeof UpdateStandardsControlCommand === "function")
// enums
assert(typeof ActorSessionMfaStatus === "object");
assert(typeof AdminStatus === "object");
assert(typeof AllowedOperators === "object");
assert(typeof AssociationStatus === "object");
assert(typeof AssociationType === "object");
assert(typeof AutoEnableStandards === "object");
assert(typeof AutomationRulesActionType === "object");
assert(typeof AutomationRulesActionTypeV2 === "object");
assert(typeof AwsIamAccessKeyStatus === "object");
assert(typeof AwsS3BucketNotificationConfigurationS3KeyFilterRuleName === "object");
assert(typeof BatchUpdateFindingsV2UnprocessedFindingErrorCode === "object");
assert(typeof ComplianceStatus === "object");
assert(typeof ConfigurationPolicyAssociationStatus === "object");
assert(typeof ConnectionDirection === "object");
assert(typeof ConnectorAuthStatus === "object");
assert(typeof ConnectorProviderName === "object");
assert(typeof ConnectorStatus === "object");
assert(typeof ControlFindingGenerator === "object");
assert(typeof ControlStatus === "object");
assert(typeof DateRangeUnit === "object");
assert(typeof FindingHistoryUpdateSourceType === "object");
assert(typeof FindingsTrendsStringField === "object");
assert(typeof GranularityField === "object");
assert(typeof GroupByField === "object");
assert(typeof IntegrationType === "object");
assert(typeof IntegrationV2Type === "object");
assert(typeof MalwareState === "object");
assert(typeof MalwareType === "object");
assert(typeof MapFilterComparison === "object");
assert(typeof NetworkDirection === "object");
assert(typeof OcsfBooleanField === "object");
assert(typeof OcsfDateField === "object");
assert(typeof OcsfIpField === "object");
assert(typeof OcsfMapField === "object");
assert(typeof OcsfNumberField === "object");
assert(typeof OcsfStringField === "object");
assert(typeof OrganizationConfigurationConfigurationType === "object");
assert(typeof OrganizationConfigurationStatus === "object");
assert(typeof ParameterValueType === "object");
assert(typeof Partition === "object");
assert(typeof RecordState === "object");
assert(typeof RegionAvailabilityStatus === "object");
assert(typeof ResourceCategory === "object");
assert(typeof ResourceGroupByField === "object");
assert(typeof ResourcesDateField === "object");
assert(typeof ResourcesMapField === "object");
assert(typeof ResourcesNumberField === "object");
assert(typeof ResourcesStringField === "object");
assert(typeof ResourcesTrendsStringField === "object");
assert(typeof RuleStatus === "object");
assert(typeof RuleStatusV2 === "object");
assert(typeof SecurityControlProperty === "object");
assert(typeof SecurityHubFeature === "object");
assert(typeof SeverityLabel === "object");
assert(typeof SeverityRating === "object");
assert(typeof SortOrder === "object");
assert(typeof StandardsControlsUpdatable === "object");
assert(typeof StandardsStatus === "object");
assert(typeof StatusReasonCode === "object");
assert(typeof StringFilterComparison === "object");
assert(typeof TargetType === "object");
assert(typeof ThreatIntelIndicatorCategory === "object");
assert(typeof ThreatIntelIndicatorType === "object");
assert(typeof TicketCreationMode === "object");
assert(typeof UnprocessedErrorCode === "object");
assert(typeof UpdateStatus === "object");
assert(typeof VerificationState === "object");
assert(typeof VulnerabilityExploitAvailable === "object");
assert(typeof VulnerabilityFixAvailable === "object");
assert(typeof WorkflowState === "object");
assert(typeof WorkflowStatus === "object");
// errors
assert(SecurityHubServiceException.prototype instanceof Error)
// paginators
assert(typeof paginateDescribeActionTargets === "function")
assert(typeof paginateDescribeProducts === "function")
assert(typeof paginateDescribeProductsV2 === "function")
assert(typeof paginateDescribeStandards === "function")
assert(typeof paginateDescribeStandardsControls === "function")
assert(typeof paginateGetEnabledStandards === "function")
assert(typeof paginateGetFindingHistory === "function")
assert(typeof paginateGetFindings === "function")
assert(typeof paginateGetFindingsTrendsV2 === "function")
assert(typeof paginateGetFindingsV2 === "function")
assert(typeof paginateGetInsights === "function")
assert(typeof paginateGetResourcesTrendsV2 === "function")
assert(typeof paginateGetResourcesV2 === "function")
assert(typeof paginateListAggregatorsV2 === "function")
assert(typeof paginateListConfigurationPolicies === "function")
assert(typeof paginateListConfigurationPolicyAssociations === "function")
assert(typeof paginateListEnabledProductsForImport === "function")
assert(typeof paginateListFindingAggregators === "function")
assert(typeof paginateListInvitations === "function")
assert(typeof paginateListMembers === "function")
assert(typeof paginateListOrganizationAdminAccounts === "function")
assert(typeof paginateListSecurityControlDefinitions === "function")
assert(typeof paginateListStandardsControlAssociations === "function")
console.log(`SecurityHub index test passed.`);
