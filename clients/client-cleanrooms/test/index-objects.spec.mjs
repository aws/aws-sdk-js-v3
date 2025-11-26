import {
  AccessBudgetType,
  AdditionalAnalyses,
  AggregateFunctionName,
  AggregationType,
  AnalysisFormat,
  AnalysisMethod,
  AnalysisRuleType,
  AnalysisTemplateValidationStatus,
  AnalysisTemplateValidationType,
  AnalysisType,
  AnalyticsEngine,
  AutoApprovedChangeType,
  AutoRefreshMode,
  BatchGetCollaborationAnalysisTemplateCommand,
  BatchGetSchemaAnalysisRuleCommand,
  BatchGetSchemaCommand,
  ChangeRequestStatus,
  ChangeSpecificationType,
  ChangeType,
  CleanRooms,
  CleanRoomsClient,
  CleanRoomsServiceException,
  CollaborationJobLogStatus,
  CollaborationQueryLogStatus,
  CommercialRegion,
  ConfiguredTableAnalysisRuleType,
  ConfiguredTableAssociationAnalysisRuleType,
  CreateAnalysisTemplateCommand,
  CreateCollaborationChangeRequestCommand,
  CreateCollaborationCommand,
  CreateConfiguredAudienceModelAssociationCommand,
  CreateConfiguredTableAnalysisRuleCommand,
  CreateConfiguredTableAssociationAnalysisRuleCommand,
  CreateConfiguredTableAssociationCommand,
  CreateConfiguredTableCommand,
  CreateIdMappingTableCommand,
  CreateIdNamespaceAssociationCommand,
  CreateMembershipCommand,
  CreatePrivacyBudgetTemplateCommand,
  CustomMLMemberAbility,
  DeleteAnalysisTemplateCommand,
  DeleteCollaborationCommand,
  DeleteConfiguredAudienceModelAssociationCommand,
  DeleteConfiguredTableAnalysisRuleCommand,
  DeleteConfiguredTableAssociationAnalysisRuleCommand,
  DeleteConfiguredTableAssociationCommand,
  DeleteConfiguredTableCommand,
  DeleteIdMappingTableCommand,
  DeleteIdNamespaceAssociationCommand,
  DeleteMemberCommand,
  DeleteMembershipCommand,
  DeletePrivacyBudgetTemplateCommand,
  DifferentialPrivacyAggregationType,
  ErrorMessageType,
  FilterableMemberStatus,
  GetAnalysisTemplateCommand,
  GetCollaborationAnalysisTemplateCommand,
  GetCollaborationChangeRequestCommand,
  GetCollaborationCommand,
  GetCollaborationConfiguredAudienceModelAssociationCommand,
  GetCollaborationIdNamespaceAssociationCommand,
  GetCollaborationPrivacyBudgetTemplateCommand,
  GetConfiguredAudienceModelAssociationCommand,
  GetConfiguredTableAnalysisRuleCommand,
  GetConfiguredTableAssociationAnalysisRuleCommand,
  GetConfiguredTableAssociationCommand,
  GetConfiguredTableCommand,
  GetIdMappingTableCommand,
  GetIdNamespaceAssociationCommand,
  GetMembershipCommand,
  GetPrivacyBudgetTemplateCommand,
  GetProtectedJobCommand,
  GetProtectedQueryCommand,
  GetSchemaAnalysisRuleCommand,
  GetSchemaCommand,
  IdNamespaceType,
  JobType,
  JoinOperator,
  JoinRequiredOption,
  ListAnalysisTemplatesCommand,
  ListCollaborationAnalysisTemplatesCommand,
  ListCollaborationChangeRequestsCommand,
  ListCollaborationConfiguredAudienceModelAssociationsCommand,
  ListCollaborationIdNamespaceAssociationsCommand,
  ListCollaborationPrivacyBudgetTemplatesCommand,
  ListCollaborationPrivacyBudgetsCommand,
  ListCollaborationsCommand,
  ListConfiguredAudienceModelAssociationsCommand,
  ListConfiguredTableAssociationsCommand,
  ListConfiguredTablesCommand,
  ListIdMappingTablesCommand,
  ListIdNamespaceAssociationsCommand,
  ListMembersCommand,
  ListMembershipsCommand,
  ListPrivacyBudgetTemplatesCommand,
  ListPrivacyBudgetsCommand,
  ListProtectedJobsCommand,
  ListProtectedQueriesCommand,
  ListSchemasCommand,
  ListTagsForResourceCommand,
  MemberAbility,
  MemberStatus,
  MembershipJobLogStatus,
  MembershipQueryLogStatus,
  MembershipStatus,
  ParameterType,
  PopulateIdMappingTableCommand,
  PreviewPrivacyImpactCommand,
  PrivacyBudgetTemplateAutoRefresh,
  PrivacyBudgetType,
  ProtectedJobAnalysisType,
  ProtectedJobStatus,
  ProtectedJobType,
  ProtectedJobWorkerComputeType,
  ProtectedQueryStatus,
  ProtectedQueryType,
  ResultFormat,
  ScalarFunctions,
  SchemaConfiguration,
  SchemaStatus,
  SchemaStatusReasonCode,
  SchemaType,
  SelectedAnalysisMethod,
  StartProtectedJobCommand,
  StartProtectedQueryCommand,
  SupportedS3Region,
  TagResourceCommand,
  TargetProtectedJobStatus,
  TargetProtectedQueryStatus,
  UntagResourceCommand,
  UpdateAnalysisTemplateCommand,
  UpdateCollaborationCommand,
  UpdateConfiguredAudienceModelAssociationCommand,
  UpdateConfiguredTableAnalysisRuleCommand,
  UpdateConfiguredTableAssociationAnalysisRuleCommand,
  UpdateConfiguredTableAssociationCommand,
  UpdateConfiguredTableCommand,
  UpdateIdMappingTableCommand,
  UpdateIdNamespaceAssociationCommand,
  UpdateMembershipCommand,
  UpdatePrivacyBudgetTemplateCommand,
  UpdateProtectedJobCommand,
  UpdateProtectedQueryCommand,
  WorkerComputeType,
  paginateListAnalysisTemplates,
  paginateListCollaborationAnalysisTemplates,
  paginateListCollaborationChangeRequests,
  paginateListCollaborationConfiguredAudienceModelAssociations,
  paginateListCollaborationIdNamespaceAssociations,
  paginateListCollaborationPrivacyBudgetTemplates,
  paginateListCollaborationPrivacyBudgets,
  paginateListCollaborations,
  paginateListConfiguredAudienceModelAssociations,
  paginateListConfiguredTableAssociations,
  paginateListConfiguredTables,
  paginateListIdMappingTables,
  paginateListIdNamespaceAssociations,
  paginateListMembers,
  paginateListMemberships,
  paginateListPrivacyBudgetTemplates,
  paginateListPrivacyBudgets,
  paginateListProtectedJobs,
  paginateListProtectedQueries,
  paginateListSchemas,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof CleanRoomsClient === "function")
assert(typeof CleanRooms === "function")
// commands
assert(typeof BatchGetCollaborationAnalysisTemplateCommand === "function")
assert(typeof BatchGetSchemaCommand === "function")
assert(typeof BatchGetSchemaAnalysisRuleCommand === "function")
assert(typeof CreateAnalysisTemplateCommand === "function")
assert(typeof CreateCollaborationCommand === "function")
assert(typeof CreateCollaborationChangeRequestCommand === "function")
assert(typeof CreateConfiguredAudienceModelAssociationCommand === "function")
assert(typeof CreateConfiguredTableCommand === "function")
assert(typeof CreateConfiguredTableAnalysisRuleCommand === "function")
assert(typeof CreateConfiguredTableAssociationCommand === "function")
assert(typeof CreateConfiguredTableAssociationAnalysisRuleCommand === "function")
assert(typeof CreateIdMappingTableCommand === "function")
assert(typeof CreateIdNamespaceAssociationCommand === "function")
assert(typeof CreateMembershipCommand === "function")
assert(typeof CreatePrivacyBudgetTemplateCommand === "function")
assert(typeof DeleteAnalysisTemplateCommand === "function")
assert(typeof DeleteCollaborationCommand === "function")
assert(typeof DeleteConfiguredAudienceModelAssociationCommand === "function")
assert(typeof DeleteConfiguredTableCommand === "function")
assert(typeof DeleteConfiguredTableAnalysisRuleCommand === "function")
assert(typeof DeleteConfiguredTableAssociationCommand === "function")
assert(typeof DeleteConfiguredTableAssociationAnalysisRuleCommand === "function")
assert(typeof DeleteIdMappingTableCommand === "function")
assert(typeof DeleteIdNamespaceAssociationCommand === "function")
assert(typeof DeleteMemberCommand === "function")
assert(typeof DeleteMembershipCommand === "function")
assert(typeof DeletePrivacyBudgetTemplateCommand === "function")
assert(typeof GetAnalysisTemplateCommand === "function")
assert(typeof GetCollaborationCommand === "function")
assert(typeof GetCollaborationAnalysisTemplateCommand === "function")
assert(typeof GetCollaborationChangeRequestCommand === "function")
assert(typeof GetCollaborationConfiguredAudienceModelAssociationCommand === "function")
assert(typeof GetCollaborationIdNamespaceAssociationCommand === "function")
assert(typeof GetCollaborationPrivacyBudgetTemplateCommand === "function")
assert(typeof GetConfiguredAudienceModelAssociationCommand === "function")
assert(typeof GetConfiguredTableCommand === "function")
assert(typeof GetConfiguredTableAnalysisRuleCommand === "function")
assert(typeof GetConfiguredTableAssociationCommand === "function")
assert(typeof GetConfiguredTableAssociationAnalysisRuleCommand === "function")
assert(typeof GetIdMappingTableCommand === "function")
assert(typeof GetIdNamespaceAssociationCommand === "function")
assert(typeof GetMembershipCommand === "function")
assert(typeof GetPrivacyBudgetTemplateCommand === "function")
assert(typeof GetProtectedJobCommand === "function")
assert(typeof GetProtectedQueryCommand === "function")
assert(typeof GetSchemaCommand === "function")
assert(typeof GetSchemaAnalysisRuleCommand === "function")
assert(typeof ListAnalysisTemplatesCommand === "function")
assert(typeof ListCollaborationAnalysisTemplatesCommand === "function")
assert(typeof ListCollaborationChangeRequestsCommand === "function")
assert(typeof ListCollaborationConfiguredAudienceModelAssociationsCommand === "function")
assert(typeof ListCollaborationIdNamespaceAssociationsCommand === "function")
assert(typeof ListCollaborationPrivacyBudgetsCommand === "function")
assert(typeof ListCollaborationPrivacyBudgetTemplatesCommand === "function")
assert(typeof ListCollaborationsCommand === "function")
assert(typeof ListConfiguredAudienceModelAssociationsCommand === "function")
assert(typeof ListConfiguredTableAssociationsCommand === "function")
assert(typeof ListConfiguredTablesCommand === "function")
assert(typeof ListIdMappingTablesCommand === "function")
assert(typeof ListIdNamespaceAssociationsCommand === "function")
assert(typeof ListMembersCommand === "function")
assert(typeof ListMembershipsCommand === "function")
assert(typeof ListPrivacyBudgetsCommand === "function")
assert(typeof ListPrivacyBudgetTemplatesCommand === "function")
assert(typeof ListProtectedJobsCommand === "function")
assert(typeof ListProtectedQueriesCommand === "function")
assert(typeof ListSchemasCommand === "function")
assert(typeof ListTagsForResourceCommand === "function")
assert(typeof PopulateIdMappingTableCommand === "function")
assert(typeof PreviewPrivacyImpactCommand === "function")
assert(typeof StartProtectedJobCommand === "function")
assert(typeof StartProtectedQueryCommand === "function")
assert(typeof TagResourceCommand === "function")
assert(typeof UntagResourceCommand === "function")
assert(typeof UpdateAnalysisTemplateCommand === "function")
assert(typeof UpdateCollaborationCommand === "function")
assert(typeof UpdateConfiguredAudienceModelAssociationCommand === "function")
assert(typeof UpdateConfiguredTableCommand === "function")
assert(typeof UpdateConfiguredTableAnalysisRuleCommand === "function")
assert(typeof UpdateConfiguredTableAssociationCommand === "function")
assert(typeof UpdateConfiguredTableAssociationAnalysisRuleCommand === "function")
assert(typeof UpdateIdMappingTableCommand === "function")
assert(typeof UpdateIdNamespaceAssociationCommand === "function")
assert(typeof UpdateMembershipCommand === "function")
assert(typeof UpdatePrivacyBudgetTemplateCommand === "function")
assert(typeof UpdateProtectedJobCommand === "function")
assert(typeof UpdateProtectedQueryCommand === "function")
// enums
assert(typeof AccessBudgetType === "object");
assert(typeof AdditionalAnalyses === "object");
assert(typeof AggregateFunctionName === "object");
assert(typeof AggregationType === "object");
assert(typeof AnalysisFormat === "object");
assert(typeof AnalysisMethod === "object");
assert(typeof AnalysisRuleType === "object");
assert(typeof AnalysisTemplateValidationStatus === "object");
assert(typeof AnalysisTemplateValidationType === "object");
assert(typeof AnalysisType === "object");
assert(typeof AnalyticsEngine === "object");
assert(typeof AutoApprovedChangeType === "object");
assert(typeof AutoRefreshMode === "object");
assert(typeof ChangeRequestStatus === "object");
assert(typeof ChangeSpecificationType === "object");
assert(typeof ChangeType === "object");
assert(typeof CollaborationJobLogStatus === "object");
assert(typeof CollaborationQueryLogStatus === "object");
assert(typeof CommercialRegion === "object");
assert(typeof ConfiguredTableAnalysisRuleType === "object");
assert(typeof ConfiguredTableAssociationAnalysisRuleType === "object");
assert(typeof CustomMLMemberAbility === "object");
assert(typeof DifferentialPrivacyAggregationType === "object");
assert(typeof ErrorMessageType === "object");
assert(typeof FilterableMemberStatus === "object");
assert(typeof IdNamespaceType === "object");
assert(typeof JobType === "object");
assert(typeof JoinOperator === "object");
assert(typeof JoinRequiredOption === "object");
assert(typeof MemberAbility === "object");
assert(typeof MembershipJobLogStatus === "object");
assert(typeof MembershipQueryLogStatus === "object");
assert(typeof MembershipStatus === "object");
assert(typeof MemberStatus === "object");
assert(typeof ParameterType === "object");
assert(typeof PrivacyBudgetTemplateAutoRefresh === "object");
assert(typeof PrivacyBudgetType === "object");
assert(typeof ProtectedJobAnalysisType === "object");
assert(typeof ProtectedJobStatus === "object");
assert(typeof ProtectedJobType === "object");
assert(typeof ProtectedJobWorkerComputeType === "object");
assert(typeof ProtectedQueryStatus === "object");
assert(typeof ProtectedQueryType === "object");
assert(typeof ResultFormat === "object");
assert(typeof ScalarFunctions === "object");
assert(typeof SchemaConfiguration === "object");
assert(typeof SchemaStatus === "object");
assert(typeof SchemaStatusReasonCode === "object");
assert(typeof SchemaType === "object");
assert(typeof SelectedAnalysisMethod === "object");
assert(typeof SupportedS3Region === "object");
assert(typeof TargetProtectedJobStatus === "object");
assert(typeof TargetProtectedQueryStatus === "object");
assert(typeof WorkerComputeType === "object");
// errors
assert(CleanRoomsServiceException.prototype instanceof Error)
// paginators
assert(typeof paginateListAnalysisTemplates === "function")
assert(typeof paginateListCollaborationAnalysisTemplates === "function")
assert(typeof paginateListCollaborationChangeRequests === "function")
assert(typeof paginateListCollaborationConfiguredAudienceModelAssociations === "function")
assert(typeof paginateListCollaborationIdNamespaceAssociations === "function")
assert(typeof paginateListCollaborationPrivacyBudgetTemplates === "function")
assert(typeof paginateListCollaborationPrivacyBudgets === "function")
assert(typeof paginateListCollaborations === "function")
assert(typeof paginateListConfiguredAudienceModelAssociations === "function")
assert(typeof paginateListConfiguredTableAssociations === "function")
assert(typeof paginateListConfiguredTables === "function")
assert(typeof paginateListIdMappingTables === "function")
assert(typeof paginateListIdNamespaceAssociations === "function")
assert(typeof paginateListMembers === "function")
assert(typeof paginateListMemberships === "function")
assert(typeof paginateListPrivacyBudgetTemplates === "function")
assert(typeof paginateListPrivacyBudgets === "function")
assert(typeof paginateListProtectedJobs === "function")
assert(typeof paginateListProtectedQueries === "function")
assert(typeof paginateListSchemas === "function")
console.log(`CleanRooms index test passed.`);
