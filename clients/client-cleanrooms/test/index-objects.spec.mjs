import {
  AccessBudget$,
  AccessBudgetDetails$,
  AccessBudgetsPrivacyTemplateParametersInput$,
  AccessBudgetsPrivacyTemplateParametersOutput$,
  AccessBudgetsPrivacyTemplateUpdateParameters$,
  AccessBudgetType,
  AccessDeniedException,
  AccessDeniedException$,
  AccessDeniedExceptionReason,
  AdditionalAnalyses,
  AggregateColumn$,
  AggregateFunctionName,
  AggregationConstraint$,
  AggregationType,
  AnalysisFormat,
  AnalysisMethod,
  AnalysisParameter$,
  AnalysisRule$,
  AnalysisRuleAggregation$,
  AnalysisRuleCustom$,
  AnalysisRuleIdMappingTable$,
  AnalysisRuleList$,
  AnalysisRulePolicy$,
  AnalysisRulePolicyV1$,
  AnalysisRuleType,
  AnalysisSchema$,
  AnalysisSource$,
  AnalysisSourceMetadata$,
  AnalysisTemplate$,
  AnalysisTemplateArtifact$,
  AnalysisTemplateArtifactMetadata$,
  AnalysisTemplateArtifacts$,
  AnalysisTemplateSummary$,
  AnalysisTemplateValidationStatus,
  AnalysisTemplateValidationStatusDetail$,
  AnalysisTemplateValidationStatusReason$,
  AnalysisTemplateValidationType,
  AnalysisType,
  AnalyticsEngine,
  ApprovalStatus,
  ApprovalStatusDetails$,
  AthenaTableReference$,
  AutoApprovedChangeType,
  AutoRefreshMode,
  BatchGetCollaborationAnalysisTemplate$,
  BatchGetCollaborationAnalysisTemplateCommand,
  BatchGetCollaborationAnalysisTemplateError$,
  BatchGetCollaborationAnalysisTemplateInput$,
  BatchGetCollaborationAnalysisTemplateOutput$,
  BatchGetSchema$,
  BatchGetSchemaAnalysisRule$,
  BatchGetSchemaAnalysisRuleCommand,
  BatchGetSchemaAnalysisRuleError$,
  BatchGetSchemaAnalysisRuleInput$,
  BatchGetSchemaAnalysisRuleOutput$,
  BatchGetSchemaCommand,
  BatchGetSchemaError$,
  BatchGetSchemaInput$,
  BatchGetSchemaOutput$,
  BilledJobResourceUtilization$,
  BilledResourceUtilization$,
  BudgetParameter$,
  Change$,
  ChangeInput$,
  ChangeRequestAction,
  ChangeRequestStatus,
  ChangeSpecification$,
  ChangeSpecificationType,
  ChangeType,
  CleanRooms,
  CleanRoomsClient,
  CleanRoomsServiceException,
  Collaboration$,
  CollaborationAnalysisTemplate$,
  CollaborationAnalysisTemplateSummary$,
  CollaborationChangeRequest$,
  CollaborationChangeRequestSummary$,
  CollaborationChangeSpecification$,
  CollaborationConfiguredAudienceModelAssociation$,
  CollaborationConfiguredAudienceModelAssociationSummary$,
  CollaborationIdNamespaceAssociation$,
  CollaborationIdNamespaceAssociationSummary$,
  CollaborationJobLogStatus,
  CollaborationPrivacyBudgetSummary$,
  CollaborationPrivacyBudgetTemplate$,
  CollaborationPrivacyBudgetTemplateSummary$,
  CollaborationQueryLogStatus,
  CollaborationSummary$,
  Column$,
  ColumnClassificationDetails$,
  CommercialRegion,
  ComputeConfiguration$,
  ConfigurationDetails$,
  ConfiguredAudienceModelAssociation$,
  ConfiguredAudienceModelAssociationSummary$,
  ConfiguredTable$,
  ConfiguredTableAnalysisRule$,
  ConfiguredTableAnalysisRulePolicy$,
  ConfiguredTableAnalysisRulePolicyV1$,
  ConfiguredTableAnalysisRuleType,
  ConfiguredTableAssociation$,
  ConfiguredTableAssociationAnalysisRule$,
  ConfiguredTableAssociationAnalysisRuleAggregation$,
  ConfiguredTableAssociationAnalysisRuleCustom$,
  ConfiguredTableAssociationAnalysisRuleList$,
  ConfiguredTableAssociationAnalysisRulePolicy$,
  ConfiguredTableAssociationAnalysisRulePolicyV1$,
  ConfiguredTableAssociationAnalysisRuleType,
  ConfiguredTableAssociationSummary$,
  ConfiguredTableSummary$,
  ConflictException,
  ConflictException$,
  ConflictExceptionReason,
  ConsolidatedPolicy$,
  ConsolidatedPolicyAggregation$,
  ConsolidatedPolicyCustom$,
  ConsolidatedPolicyList$,
  ConsolidatedPolicyV1$,
  CreateAnalysisTemplate$,
  CreateAnalysisTemplateCommand,
  CreateAnalysisTemplateInput$,
  CreateAnalysisTemplateOutput$,
  CreateCollaboration$,
  CreateCollaborationChangeRequest$,
  CreateCollaborationChangeRequestCommand,
  CreateCollaborationChangeRequestInput$,
  CreateCollaborationChangeRequestOutput$,
  CreateCollaborationCommand,
  CreateCollaborationInput$,
  CreateCollaborationOutput$,
  CreateConfiguredAudienceModelAssociation$,
  CreateConfiguredAudienceModelAssociationCommand,
  CreateConfiguredAudienceModelAssociationInput$,
  CreateConfiguredAudienceModelAssociationOutput$,
  CreateConfiguredTable$,
  CreateConfiguredTableAnalysisRule$,
  CreateConfiguredTableAnalysisRuleCommand,
  CreateConfiguredTableAnalysisRuleInput$,
  CreateConfiguredTableAnalysisRuleOutput$,
  CreateConfiguredTableAssociation$,
  CreateConfiguredTableAssociationAnalysisRule$,
  CreateConfiguredTableAssociationAnalysisRuleCommand,
  CreateConfiguredTableAssociationAnalysisRuleInput$,
  CreateConfiguredTableAssociationAnalysisRuleOutput$,
  CreateConfiguredTableAssociationCommand,
  CreateConfiguredTableAssociationInput$,
  CreateConfiguredTableAssociationOutput$,
  CreateConfiguredTableCommand,
  CreateConfiguredTableInput$,
  CreateConfiguredTableOutput$,
  CreateIdMappingTable$,
  CreateIdMappingTableCommand,
  CreateIdMappingTableInput$,
  CreateIdMappingTableOutput$,
  CreateIdNamespaceAssociation$,
  CreateIdNamespaceAssociationCommand,
  CreateIdNamespaceAssociationInput$,
  CreateIdNamespaceAssociationOutput$,
  CreateMembership$,
  CreateMembershipCommand,
  CreateMembershipInput$,
  CreateMembershipOutput$,
  CreatePrivacyBudgetTemplate$,
  CreatePrivacyBudgetTemplateCommand,
  CreatePrivacyBudgetTemplateInput$,
  CreatePrivacyBudgetTemplateOutput$,
  CustomMLMemberAbility,
  DataEncryptionMetadata$,
  DeleteAnalysisTemplate$,
  DeleteAnalysisTemplateCommand,
  DeleteAnalysisTemplateInput$,
  DeleteAnalysisTemplateOutput$,
  DeleteCollaboration$,
  DeleteCollaborationCommand,
  DeleteCollaborationInput$,
  DeleteCollaborationOutput$,
  DeleteConfiguredAudienceModelAssociation$,
  DeleteConfiguredAudienceModelAssociationCommand,
  DeleteConfiguredAudienceModelAssociationInput$,
  DeleteConfiguredAudienceModelAssociationOutput$,
  DeleteConfiguredTable$,
  DeleteConfiguredTableAnalysisRule$,
  DeleteConfiguredTableAnalysisRuleCommand,
  DeleteConfiguredTableAnalysisRuleInput$,
  DeleteConfiguredTableAnalysisRuleOutput$,
  DeleteConfiguredTableAssociation$,
  DeleteConfiguredTableAssociationAnalysisRule$,
  DeleteConfiguredTableAssociationAnalysisRuleCommand,
  DeleteConfiguredTableAssociationAnalysisRuleInput$,
  DeleteConfiguredTableAssociationAnalysisRuleOutput$,
  DeleteConfiguredTableAssociationCommand,
  DeleteConfiguredTableAssociationInput$,
  DeleteConfiguredTableAssociationOutput$,
  DeleteConfiguredTableCommand,
  DeleteConfiguredTableInput$,
  DeleteConfiguredTableOutput$,
  DeleteIdMappingTable$,
  DeleteIdMappingTableCommand,
  DeleteIdMappingTableInput$,
  DeleteIdMappingTableOutput$,
  DeleteIdNamespaceAssociation$,
  DeleteIdNamespaceAssociationCommand,
  DeleteIdNamespaceAssociationInput$,
  DeleteIdNamespaceAssociationOutput$,
  DeleteMember$,
  DeleteMemberCommand,
  DeleteMemberInput$,
  DeleteMemberOutput$,
  DeleteMembership$,
  DeleteMembershipCommand,
  DeleteMembershipInput$,
  DeleteMembershipOutput$,
  DeletePrivacyBudgetTemplate$,
  DeletePrivacyBudgetTemplateCommand,
  DeletePrivacyBudgetTemplateInput$,
  DeletePrivacyBudgetTemplateOutput$,
  DifferentialPrivacyAggregationType,
  DifferentialPrivacyColumn$,
  DifferentialPrivacyConfiguration$,
  DifferentialPrivacyParameters$,
  DifferentialPrivacyPreviewAggregation$,
  DifferentialPrivacyPreviewParametersInput$,
  DifferentialPrivacyPrivacyBudget$,
  DifferentialPrivacyPrivacyBudgetAggregation$,
  DifferentialPrivacyPrivacyImpact$,
  DifferentialPrivacySensitivityParameters$,
  DifferentialPrivacyTemplateParametersInput$,
  DifferentialPrivacyTemplateParametersOutput$,
  DifferentialPrivacyTemplateUpdateParameters$,
  DirectAnalysisConfigurationDetails$,
  ErrorMessageConfiguration$,
  ErrorMessageType,
  FilterableMemberStatus,
  GetAnalysisTemplate$,
  GetAnalysisTemplateCommand,
  GetAnalysisTemplateInput$,
  GetAnalysisTemplateOutput$,
  GetCollaboration$,
  GetCollaborationAnalysisTemplate$,
  GetCollaborationAnalysisTemplateCommand,
  GetCollaborationAnalysisTemplateInput$,
  GetCollaborationAnalysisTemplateOutput$,
  GetCollaborationChangeRequest$,
  GetCollaborationChangeRequestCommand,
  GetCollaborationChangeRequestInput$,
  GetCollaborationChangeRequestOutput$,
  GetCollaborationCommand,
  GetCollaborationConfiguredAudienceModelAssociation$,
  GetCollaborationConfiguredAudienceModelAssociationCommand,
  GetCollaborationConfiguredAudienceModelAssociationInput$,
  GetCollaborationConfiguredAudienceModelAssociationOutput$,
  GetCollaborationIdNamespaceAssociation$,
  GetCollaborationIdNamespaceAssociationCommand,
  GetCollaborationIdNamespaceAssociationInput$,
  GetCollaborationIdNamespaceAssociationOutput$,
  GetCollaborationInput$,
  GetCollaborationOutput$,
  GetCollaborationPrivacyBudgetTemplate$,
  GetCollaborationPrivacyBudgetTemplateCommand,
  GetCollaborationPrivacyBudgetTemplateInput$,
  GetCollaborationPrivacyBudgetTemplateOutput$,
  GetConfiguredAudienceModelAssociation$,
  GetConfiguredAudienceModelAssociationCommand,
  GetConfiguredAudienceModelAssociationInput$,
  GetConfiguredAudienceModelAssociationOutput$,
  GetConfiguredTable$,
  GetConfiguredTableAnalysisRule$,
  GetConfiguredTableAnalysisRuleCommand,
  GetConfiguredTableAnalysisRuleInput$,
  GetConfiguredTableAnalysisRuleOutput$,
  GetConfiguredTableAssociation$,
  GetConfiguredTableAssociationAnalysisRule$,
  GetConfiguredTableAssociationAnalysisRuleCommand,
  GetConfiguredTableAssociationAnalysisRuleInput$,
  GetConfiguredTableAssociationAnalysisRuleOutput$,
  GetConfiguredTableAssociationCommand,
  GetConfiguredTableAssociationInput$,
  GetConfiguredTableAssociationOutput$,
  GetConfiguredTableCommand,
  GetConfiguredTableInput$,
  GetConfiguredTableOutput$,
  GetIdMappingTable$,
  GetIdMappingTableCommand,
  GetIdMappingTableInput$,
  GetIdMappingTableOutput$,
  GetIdNamespaceAssociation$,
  GetIdNamespaceAssociationCommand,
  GetIdNamespaceAssociationInput$,
  GetIdNamespaceAssociationOutput$,
  GetMembership$,
  GetMembershipCommand,
  GetMembershipInput$,
  GetMembershipOutput$,
  GetPrivacyBudgetTemplate$,
  GetPrivacyBudgetTemplateCommand,
  GetPrivacyBudgetTemplateInput$,
  GetPrivacyBudgetTemplateOutput$,
  GetProtectedJob$,
  GetProtectedJobCommand,
  GetProtectedJobInput$,
  GetProtectedJobOutput$,
  GetProtectedQuery$,
  GetProtectedQueryCommand,
  GetProtectedQueryInput$,
  GetProtectedQueryOutput$,
  GetSchema$,
  GetSchemaAnalysisRule$,
  GetSchemaAnalysisRuleCommand,
  GetSchemaAnalysisRuleInput$,
  GetSchemaAnalysisRuleOutput$,
  GetSchemaCommand,
  GetSchemaInput$,
  GetSchemaOutput$,
  GlueTableReference$,
  Hash$,
  IdMappingConfig$,
  IdMappingTable$,
  IdMappingTableInputReferenceConfig$,
  IdMappingTableInputReferenceProperties$,
  IdMappingTableInputSource$,
  IdMappingTableSchemaTypeProperties$,
  IdMappingTableSummary$,
  IdNamespaceAssociation$,
  IdNamespaceAssociationInputReferenceConfig$,
  IdNamespaceAssociationInputReferenceProperties$,
  IdNamespaceAssociationInputReferencePropertiesSummary$,
  IdNamespaceAssociationSummary$,
  IdNamespaceType,
  InternalServerException,
  InternalServerException$,
  JobComputePaymentConfig$,
  JobType,
  JoinOperator,
  JoinRequiredOption,
  ListAnalysisTemplates$,
  ListAnalysisTemplatesCommand,
  ListAnalysisTemplatesInput$,
  ListAnalysisTemplatesOutput$,
  ListCollaborationAnalysisTemplates$,
  ListCollaborationAnalysisTemplatesCommand,
  ListCollaborationAnalysisTemplatesInput$,
  ListCollaborationAnalysisTemplatesOutput$,
  ListCollaborationChangeRequests$,
  ListCollaborationChangeRequestsCommand,
  ListCollaborationChangeRequestsInput$,
  ListCollaborationChangeRequestsOutput$,
  ListCollaborationConfiguredAudienceModelAssociations$,
  ListCollaborationConfiguredAudienceModelAssociationsCommand,
  ListCollaborationConfiguredAudienceModelAssociationsInput$,
  ListCollaborationConfiguredAudienceModelAssociationsOutput$,
  ListCollaborationIdNamespaceAssociations$,
  ListCollaborationIdNamespaceAssociationsCommand,
  ListCollaborationIdNamespaceAssociationsInput$,
  ListCollaborationIdNamespaceAssociationsOutput$,
  ListCollaborationPrivacyBudgets$,
  ListCollaborationPrivacyBudgetsCommand,
  ListCollaborationPrivacyBudgetsInput$,
  ListCollaborationPrivacyBudgetsOutput$,
  ListCollaborationPrivacyBudgetTemplates$,
  ListCollaborationPrivacyBudgetTemplatesCommand,
  ListCollaborationPrivacyBudgetTemplatesInput$,
  ListCollaborationPrivacyBudgetTemplatesOutput$,
  ListCollaborations$,
  ListCollaborationsCommand,
  ListCollaborationsInput$,
  ListCollaborationsOutput$,
  ListConfiguredAudienceModelAssociations$,
  ListConfiguredAudienceModelAssociationsCommand,
  ListConfiguredAudienceModelAssociationsInput$,
  ListConfiguredAudienceModelAssociationsOutput$,
  ListConfiguredTableAssociations$,
  ListConfiguredTableAssociationsCommand,
  ListConfiguredTableAssociationsInput$,
  ListConfiguredTableAssociationsOutput$,
  ListConfiguredTables$,
  ListConfiguredTablesCommand,
  ListConfiguredTablesInput$,
  ListConfiguredTablesOutput$,
  ListIdMappingTables$,
  ListIdMappingTablesCommand,
  ListIdMappingTablesInput$,
  ListIdMappingTablesOutput$,
  ListIdNamespaceAssociations$,
  ListIdNamespaceAssociationsCommand,
  ListIdNamespaceAssociationsInput$,
  ListIdNamespaceAssociationsOutput$,
  ListMembers$,
  ListMembersCommand,
  ListMemberships$,
  ListMembershipsCommand,
  ListMembershipsInput$,
  ListMembershipsOutput$,
  ListMembersInput$,
  ListMembersOutput$,
  ListPrivacyBudgets$,
  ListPrivacyBudgetsCommand,
  ListPrivacyBudgetsInput$,
  ListPrivacyBudgetsOutput$,
  ListPrivacyBudgetTemplates$,
  ListPrivacyBudgetTemplatesCommand,
  ListPrivacyBudgetTemplatesInput$,
  ListPrivacyBudgetTemplatesOutput$,
  ListProtectedJobs$,
  ListProtectedJobsCommand,
  ListProtectedJobsInput$,
  ListProtectedJobsOutput$,
  ListProtectedQueries$,
  ListProtectedQueriesCommand,
  ListProtectedQueriesInput$,
  ListProtectedQueriesOutput$,
  ListSchemas$,
  ListSchemasCommand,
  ListSchemasInput$,
  ListSchemasOutput$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceInput$,
  ListTagsForResourceOutput$,
  MemberAbility,
  MemberChangeSpecification$,
  Membership$,
  MembershipJobComputePaymentConfig$,
  MembershipJobLogStatus,
  MembershipMLPaymentConfig$,
  MembershipModelInferencePaymentConfig$,
  MembershipModelTrainingPaymentConfig$,
  MembershipPaymentConfiguration$,
  MembershipProtectedJobOutputConfiguration$,
  MembershipProtectedJobResultConfiguration$,
  MembershipProtectedQueryOutputConfiguration$,
  MembershipProtectedQueryResultConfiguration$,
  MembershipQueryComputePaymentConfig$,
  MembershipQueryLogStatus,
  MembershipStatus,
  MembershipSummary$,
  MembershipSyntheticDataGenerationPaymentConfig$,
  MemberSpecification$,
  MemberStatus,
  MemberSummary$,
  MLMemberAbilities$,
  MLPaymentConfig$,
  MLSyntheticDataParameters$,
  ModelInferencePaymentConfig$,
  ModelTrainingPaymentConfig$,
  paginateListAnalysisTemplates,
  paginateListCollaborationAnalysisTemplates,
  paginateListCollaborationChangeRequests,
  paginateListCollaborationConfiguredAudienceModelAssociations,
  paginateListCollaborationIdNamespaceAssociations,
  paginateListCollaborationPrivacyBudgets,
  paginateListCollaborationPrivacyBudgetTemplates,
  paginateListCollaborations,
  paginateListConfiguredAudienceModelAssociations,
  paginateListConfiguredTableAssociations,
  paginateListConfiguredTables,
  paginateListIdMappingTables,
  paginateListIdNamespaceAssociations,
  paginateListMembers,
  paginateListMemberships,
  paginateListPrivacyBudgets,
  paginateListPrivacyBudgetTemplates,
  paginateListProtectedJobs,
  paginateListProtectedQueries,
  paginateListSchemas,
  ParameterType,
  PaymentConfiguration$,
  PopulateIdMappingTable$,
  PopulateIdMappingTableCommand,
  PopulateIdMappingTableInput$,
  PopulateIdMappingTableOutput$,
  PreviewPrivacyImpact$,
  PreviewPrivacyImpactCommand,
  PreviewPrivacyImpactInput$,
  PreviewPrivacyImpactOutput$,
  PreviewPrivacyImpactParametersInput$,
  PrivacyBudget$,
  PrivacyBudgetSummary$,
  PrivacyBudgetTemplate$,
  PrivacyBudgetTemplateAutoRefresh,
  PrivacyBudgetTemplateParametersInput$,
  PrivacyBudgetTemplateParametersOutput$,
  PrivacyBudgetTemplateSummary$,
  PrivacyBudgetTemplateUpdateParameters$,
  PrivacyBudgetType,
  PrivacyImpact$,
  ProtectedJob$,
  ProtectedJobAnalysisType,
  ProtectedJobComputeConfiguration$,
  ProtectedJobConfigurationDetails$,
  ProtectedJobDirectAnalysisConfigurationDetails$,
  ProtectedJobError$,
  ProtectedJobMemberOutputConfigurationInput$,
  ProtectedJobMemberOutputConfigurationOutput$,
  ProtectedJobOutput$,
  ProtectedJobOutputConfigurationInput$,
  ProtectedJobOutputConfigurationOutput$,
  ProtectedJobParameters$,
  ProtectedJobReceiverConfiguration$,
  ProtectedJobResult$,
  ProtectedJobResultConfigurationInput$,
  ProtectedJobResultConfigurationOutput$,
  ProtectedJobS3Output$,
  ProtectedJobS3OutputConfigurationInput$,
  ProtectedJobS3OutputConfigurationOutput$,
  ProtectedJobSingleMemberOutput$,
  ProtectedJobStatistics$,
  ProtectedJobStatus,
  ProtectedJobSummary$,
  ProtectedJobType,
  ProtectedJobWorkerComputeConfiguration$,
  ProtectedJobWorkerComputeType,
  ProtectedQuery$,
  ProtectedQueryDistributeOutput$,
  ProtectedQueryDistributeOutputConfiguration$,
  ProtectedQueryDistributeOutputConfigurationLocation$,
  ProtectedQueryError$,
  ProtectedQueryMemberOutputConfiguration$,
  ProtectedQueryOutput$,
  ProtectedQueryOutputConfiguration$,
  ProtectedQueryResult$,
  ProtectedQueryResultConfiguration$,
  ProtectedQueryS3Output$,
  ProtectedQueryS3OutputConfiguration$,
  ProtectedQuerySingleMemberOutput$,
  ProtectedQuerySQLParameters$,
  ProtectedQueryStatistics$,
  ProtectedQueryStatus,
  ProtectedQuerySummary$,
  ProtectedQueryType,
  QueryComputePaymentConfig$,
  QueryConstraint$,
  QueryConstraintRequireOverlap$,
  ReceiverConfiguration$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResourceType,
  ResultFormat,
  S3Location$,
  ScalarFunctions,
  Schema$,
  SchemaAnalysisRuleRequest$,
  SchemaConfiguration,
  SchemaStatus,
  SchemaStatusDetail$,
  SchemaStatusReason$,
  SchemaStatusReasonCode,
  SchemaSummary$,
  SchemaType,
  SchemaTypeProperties$,
  SelectedAnalysisMethod,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  SnowflakeTableReference$,
  SnowflakeTableSchema$,
  SnowflakeTableSchemaV1$,
  StartProtectedJob$,
  StartProtectedJobCommand,
  StartProtectedJobInput$,
  StartProtectedJobOutput$,
  StartProtectedQuery$,
  StartProtectedQueryCommand,
  StartProtectedQueryInput$,
  StartProtectedQueryOutput$,
  SupportedS3Region,
  SyntheticDataColumnProperties$,
  SyntheticDataColumnType,
  SyntheticDataGenerationPaymentConfig$,
  SyntheticDataParameters$,
  TableReference$,
  TagResource$,
  TagResourceCommand,
  TagResourceInput$,
  TagResourceOutput$,
  TargetProtectedJobStatus,
  TargetProtectedQueryStatus,
  ThrottlingException,
  ThrottlingException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceInput$,
  UntagResourceOutput$,
  UpdateAnalysisTemplate$,
  UpdateAnalysisTemplateCommand,
  UpdateAnalysisTemplateInput$,
  UpdateAnalysisTemplateOutput$,
  UpdateCollaboration$,
  UpdateCollaborationChangeRequest$,
  UpdateCollaborationChangeRequestCommand,
  UpdateCollaborationChangeRequestInput$,
  UpdateCollaborationChangeRequestOutput$,
  UpdateCollaborationCommand,
  UpdateCollaborationInput$,
  UpdateCollaborationOutput$,
  UpdateConfiguredAudienceModelAssociation$,
  UpdateConfiguredAudienceModelAssociationCommand,
  UpdateConfiguredAudienceModelAssociationInput$,
  UpdateConfiguredAudienceModelAssociationOutput$,
  UpdateConfiguredTable$,
  UpdateConfiguredTableAnalysisRule$,
  UpdateConfiguredTableAnalysisRuleCommand,
  UpdateConfiguredTableAnalysisRuleInput$,
  UpdateConfiguredTableAnalysisRuleOutput$,
  UpdateConfiguredTableAssociation$,
  UpdateConfiguredTableAssociationAnalysisRule$,
  UpdateConfiguredTableAssociationAnalysisRuleCommand,
  UpdateConfiguredTableAssociationAnalysisRuleInput$,
  UpdateConfiguredTableAssociationAnalysisRuleOutput$,
  UpdateConfiguredTableAssociationCommand,
  UpdateConfiguredTableAssociationInput$,
  UpdateConfiguredTableAssociationOutput$,
  UpdateConfiguredTableCommand,
  UpdateConfiguredTableInput$,
  UpdateConfiguredTableOutput$,
  UpdateIdMappingTable$,
  UpdateIdMappingTableCommand,
  UpdateIdMappingTableInput$,
  UpdateIdMappingTableOutput$,
  UpdateIdNamespaceAssociation$,
  UpdateIdNamespaceAssociationCommand,
  UpdateIdNamespaceAssociationInput$,
  UpdateIdNamespaceAssociationOutput$,
  UpdateMembership$,
  UpdateMembershipCommand,
  UpdateMembershipInput$,
  UpdateMembershipOutput$,
  UpdatePrivacyBudgetTemplate$,
  UpdatePrivacyBudgetTemplateCommand,
  UpdatePrivacyBudgetTemplateInput$,
  UpdatePrivacyBudgetTemplateOutput$,
  UpdateProtectedJob$,
  UpdateProtectedJobCommand,
  UpdateProtectedJobInput$,
  UpdateProtectedJobOutput$,
  UpdateProtectedQuery$,
  UpdateProtectedQueryCommand,
  UpdateProtectedQueryInput$,
  UpdateProtectedQueryOutput$,
  ValidationException,
  ValidationException$,
  ValidationExceptionField$,
  ValidationExceptionReason,
  WorkerComputeConfiguration$,
  WorkerComputeConfigurationProperties$,
  WorkerComputeType,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof CleanRoomsClient === "function");
assert(typeof CleanRooms === "function");
// commands
assert(typeof BatchGetCollaborationAnalysisTemplateCommand === "function");
assert(typeof BatchGetCollaborationAnalysisTemplate$ === "object");
assert(typeof BatchGetSchemaCommand === "function");
assert(typeof BatchGetSchema$ === "object");
assert(typeof BatchGetSchemaAnalysisRuleCommand === "function");
assert(typeof BatchGetSchemaAnalysisRule$ === "object");
assert(typeof CreateAnalysisTemplateCommand === "function");
assert(typeof CreateAnalysisTemplate$ === "object");
assert(typeof CreateCollaborationCommand === "function");
assert(typeof CreateCollaboration$ === "object");
assert(typeof CreateCollaborationChangeRequestCommand === "function");
assert(typeof CreateCollaborationChangeRequest$ === "object");
assert(typeof CreateConfiguredAudienceModelAssociationCommand === "function");
assert(typeof CreateConfiguredAudienceModelAssociation$ === "object");
assert(typeof CreateConfiguredTableCommand === "function");
assert(typeof CreateConfiguredTable$ === "object");
assert(typeof CreateConfiguredTableAnalysisRuleCommand === "function");
assert(typeof CreateConfiguredTableAnalysisRule$ === "object");
assert(typeof CreateConfiguredTableAssociationCommand === "function");
assert(typeof CreateConfiguredTableAssociation$ === "object");
assert(typeof CreateConfiguredTableAssociationAnalysisRuleCommand === "function");
assert(typeof CreateConfiguredTableAssociationAnalysisRule$ === "object");
assert(typeof CreateIdMappingTableCommand === "function");
assert(typeof CreateIdMappingTable$ === "object");
assert(typeof CreateIdNamespaceAssociationCommand === "function");
assert(typeof CreateIdNamespaceAssociation$ === "object");
assert(typeof CreateMembershipCommand === "function");
assert(typeof CreateMembership$ === "object");
assert(typeof CreatePrivacyBudgetTemplateCommand === "function");
assert(typeof CreatePrivacyBudgetTemplate$ === "object");
assert(typeof DeleteAnalysisTemplateCommand === "function");
assert(typeof DeleteAnalysisTemplate$ === "object");
assert(typeof DeleteCollaborationCommand === "function");
assert(typeof DeleteCollaboration$ === "object");
assert(typeof DeleteConfiguredAudienceModelAssociationCommand === "function");
assert(typeof DeleteConfiguredAudienceModelAssociation$ === "object");
assert(typeof DeleteConfiguredTableCommand === "function");
assert(typeof DeleteConfiguredTable$ === "object");
assert(typeof DeleteConfiguredTableAnalysisRuleCommand === "function");
assert(typeof DeleteConfiguredTableAnalysisRule$ === "object");
assert(typeof DeleteConfiguredTableAssociationCommand === "function");
assert(typeof DeleteConfiguredTableAssociation$ === "object");
assert(typeof DeleteConfiguredTableAssociationAnalysisRuleCommand === "function");
assert(typeof DeleteConfiguredTableAssociationAnalysisRule$ === "object");
assert(typeof DeleteIdMappingTableCommand === "function");
assert(typeof DeleteIdMappingTable$ === "object");
assert(typeof DeleteIdNamespaceAssociationCommand === "function");
assert(typeof DeleteIdNamespaceAssociation$ === "object");
assert(typeof DeleteMemberCommand === "function");
assert(typeof DeleteMember$ === "object");
assert(typeof DeleteMembershipCommand === "function");
assert(typeof DeleteMembership$ === "object");
assert(typeof DeletePrivacyBudgetTemplateCommand === "function");
assert(typeof DeletePrivacyBudgetTemplate$ === "object");
assert(typeof GetAnalysisTemplateCommand === "function");
assert(typeof GetAnalysisTemplate$ === "object");
assert(typeof GetCollaborationCommand === "function");
assert(typeof GetCollaboration$ === "object");
assert(typeof GetCollaborationAnalysisTemplateCommand === "function");
assert(typeof GetCollaborationAnalysisTemplate$ === "object");
assert(typeof GetCollaborationChangeRequestCommand === "function");
assert(typeof GetCollaborationChangeRequest$ === "object");
assert(typeof GetCollaborationConfiguredAudienceModelAssociationCommand === "function");
assert(typeof GetCollaborationConfiguredAudienceModelAssociation$ === "object");
assert(typeof GetCollaborationIdNamespaceAssociationCommand === "function");
assert(typeof GetCollaborationIdNamespaceAssociation$ === "object");
assert(typeof GetCollaborationPrivacyBudgetTemplateCommand === "function");
assert(typeof GetCollaborationPrivacyBudgetTemplate$ === "object");
assert(typeof GetConfiguredAudienceModelAssociationCommand === "function");
assert(typeof GetConfiguredAudienceModelAssociation$ === "object");
assert(typeof GetConfiguredTableCommand === "function");
assert(typeof GetConfiguredTable$ === "object");
assert(typeof GetConfiguredTableAnalysisRuleCommand === "function");
assert(typeof GetConfiguredTableAnalysisRule$ === "object");
assert(typeof GetConfiguredTableAssociationCommand === "function");
assert(typeof GetConfiguredTableAssociation$ === "object");
assert(typeof GetConfiguredTableAssociationAnalysisRuleCommand === "function");
assert(typeof GetConfiguredTableAssociationAnalysisRule$ === "object");
assert(typeof GetIdMappingTableCommand === "function");
assert(typeof GetIdMappingTable$ === "object");
assert(typeof GetIdNamespaceAssociationCommand === "function");
assert(typeof GetIdNamespaceAssociation$ === "object");
assert(typeof GetMembershipCommand === "function");
assert(typeof GetMembership$ === "object");
assert(typeof GetPrivacyBudgetTemplateCommand === "function");
assert(typeof GetPrivacyBudgetTemplate$ === "object");
assert(typeof GetProtectedJobCommand === "function");
assert(typeof GetProtectedJob$ === "object");
assert(typeof GetProtectedQueryCommand === "function");
assert(typeof GetProtectedQuery$ === "object");
assert(typeof GetSchemaCommand === "function");
assert(typeof GetSchema$ === "object");
assert(typeof GetSchemaAnalysisRuleCommand === "function");
assert(typeof GetSchemaAnalysisRule$ === "object");
assert(typeof ListAnalysisTemplatesCommand === "function");
assert(typeof ListAnalysisTemplates$ === "object");
assert(typeof ListCollaborationAnalysisTemplatesCommand === "function");
assert(typeof ListCollaborationAnalysisTemplates$ === "object");
assert(typeof ListCollaborationChangeRequestsCommand === "function");
assert(typeof ListCollaborationChangeRequests$ === "object");
assert(typeof ListCollaborationConfiguredAudienceModelAssociationsCommand === "function");
assert(typeof ListCollaborationConfiguredAudienceModelAssociations$ === "object");
assert(typeof ListCollaborationIdNamespaceAssociationsCommand === "function");
assert(typeof ListCollaborationIdNamespaceAssociations$ === "object");
assert(typeof ListCollaborationPrivacyBudgetsCommand === "function");
assert(typeof ListCollaborationPrivacyBudgets$ === "object");
assert(typeof ListCollaborationPrivacyBudgetTemplatesCommand === "function");
assert(typeof ListCollaborationPrivacyBudgetTemplates$ === "object");
assert(typeof ListCollaborationsCommand === "function");
assert(typeof ListCollaborations$ === "object");
assert(typeof ListConfiguredAudienceModelAssociationsCommand === "function");
assert(typeof ListConfiguredAudienceModelAssociations$ === "object");
assert(typeof ListConfiguredTableAssociationsCommand === "function");
assert(typeof ListConfiguredTableAssociations$ === "object");
assert(typeof ListConfiguredTablesCommand === "function");
assert(typeof ListConfiguredTables$ === "object");
assert(typeof ListIdMappingTablesCommand === "function");
assert(typeof ListIdMappingTables$ === "object");
assert(typeof ListIdNamespaceAssociationsCommand === "function");
assert(typeof ListIdNamespaceAssociations$ === "object");
assert(typeof ListMembersCommand === "function");
assert(typeof ListMembers$ === "object");
assert(typeof ListMembershipsCommand === "function");
assert(typeof ListMemberships$ === "object");
assert(typeof ListPrivacyBudgetsCommand === "function");
assert(typeof ListPrivacyBudgets$ === "object");
assert(typeof ListPrivacyBudgetTemplatesCommand === "function");
assert(typeof ListPrivacyBudgetTemplates$ === "object");
assert(typeof ListProtectedJobsCommand === "function");
assert(typeof ListProtectedJobs$ === "object");
assert(typeof ListProtectedQueriesCommand === "function");
assert(typeof ListProtectedQueries$ === "object");
assert(typeof ListSchemasCommand === "function");
assert(typeof ListSchemas$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof PopulateIdMappingTableCommand === "function");
assert(typeof PopulateIdMappingTable$ === "object");
assert(typeof PreviewPrivacyImpactCommand === "function");
assert(typeof PreviewPrivacyImpact$ === "object");
assert(typeof StartProtectedJobCommand === "function");
assert(typeof StartProtectedJob$ === "object");
assert(typeof StartProtectedQueryCommand === "function");
assert(typeof StartProtectedQuery$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateAnalysisTemplateCommand === "function");
assert(typeof UpdateAnalysisTemplate$ === "object");
assert(typeof UpdateCollaborationCommand === "function");
assert(typeof UpdateCollaboration$ === "object");
assert(typeof UpdateCollaborationChangeRequestCommand === "function");
assert(typeof UpdateCollaborationChangeRequest$ === "object");
assert(typeof UpdateConfiguredAudienceModelAssociationCommand === "function");
assert(typeof UpdateConfiguredAudienceModelAssociation$ === "object");
assert(typeof UpdateConfiguredTableCommand === "function");
assert(typeof UpdateConfiguredTable$ === "object");
assert(typeof UpdateConfiguredTableAnalysisRuleCommand === "function");
assert(typeof UpdateConfiguredTableAnalysisRule$ === "object");
assert(typeof UpdateConfiguredTableAssociationCommand === "function");
assert(typeof UpdateConfiguredTableAssociation$ === "object");
assert(typeof UpdateConfiguredTableAssociationAnalysisRuleCommand === "function");
assert(typeof UpdateConfiguredTableAssociationAnalysisRule$ === "object");
assert(typeof UpdateIdMappingTableCommand === "function");
assert(typeof UpdateIdMappingTable$ === "object");
assert(typeof UpdateIdNamespaceAssociationCommand === "function");
assert(typeof UpdateIdNamespaceAssociation$ === "object");
assert(typeof UpdateMembershipCommand === "function");
assert(typeof UpdateMembership$ === "object");
assert(typeof UpdatePrivacyBudgetTemplateCommand === "function");
assert(typeof UpdatePrivacyBudgetTemplate$ === "object");
assert(typeof UpdateProtectedJobCommand === "function");
assert(typeof UpdateProtectedJob$ === "object");
assert(typeof UpdateProtectedQueryCommand === "function");
assert(typeof UpdateProtectedQuery$ === "object");
// structural schemas
assert(typeof AccessBudget$ === "object");
assert(typeof AccessBudgetDetails$ === "object");
assert(typeof AccessBudgetsPrivacyTemplateParametersInput$ === "object");
assert(typeof AccessBudgetsPrivacyTemplateParametersOutput$ === "object");
assert(typeof AccessBudgetsPrivacyTemplateUpdateParameters$ === "object");
assert(typeof AggregateColumn$ === "object");
assert(typeof AggregationConstraint$ === "object");
assert(typeof AnalysisParameter$ === "object");
assert(typeof AnalysisRule$ === "object");
assert(typeof AnalysisRuleAggregation$ === "object");
assert(typeof AnalysisRuleCustom$ === "object");
assert(typeof AnalysisRuleIdMappingTable$ === "object");
assert(typeof AnalysisRuleList$ === "object");
assert(typeof AnalysisRulePolicy$ === "object");
assert(typeof AnalysisRulePolicyV1$ === "object");
assert(typeof AnalysisSchema$ === "object");
assert(typeof AnalysisSource$ === "object");
assert(typeof AnalysisSourceMetadata$ === "object");
assert(typeof AnalysisTemplate$ === "object");
assert(typeof AnalysisTemplateArtifact$ === "object");
assert(typeof AnalysisTemplateArtifactMetadata$ === "object");
assert(typeof AnalysisTemplateArtifacts$ === "object");
assert(typeof AnalysisTemplateSummary$ === "object");
assert(typeof AnalysisTemplateValidationStatusDetail$ === "object");
assert(typeof AnalysisTemplateValidationStatusReason$ === "object");
assert(typeof ApprovalStatusDetails$ === "object");
assert(typeof AthenaTableReference$ === "object");
assert(typeof BatchGetCollaborationAnalysisTemplateError$ === "object");
assert(typeof BatchGetCollaborationAnalysisTemplateInput$ === "object");
assert(typeof BatchGetCollaborationAnalysisTemplateOutput$ === "object");
assert(typeof BatchGetSchemaAnalysisRuleError$ === "object");
assert(typeof BatchGetSchemaAnalysisRuleInput$ === "object");
assert(typeof BatchGetSchemaAnalysisRuleOutput$ === "object");
assert(typeof BatchGetSchemaError$ === "object");
assert(typeof BatchGetSchemaInput$ === "object");
assert(typeof BatchGetSchemaOutput$ === "object");
assert(typeof BilledJobResourceUtilization$ === "object");
assert(typeof BilledResourceUtilization$ === "object");
assert(typeof BudgetParameter$ === "object");
assert(typeof Change$ === "object");
assert(typeof ChangeInput$ === "object");
assert(typeof ChangeSpecification$ === "object");
assert(typeof Collaboration$ === "object");
assert(typeof CollaborationAnalysisTemplate$ === "object");
assert(typeof CollaborationAnalysisTemplateSummary$ === "object");
assert(typeof CollaborationChangeRequest$ === "object");
assert(typeof CollaborationChangeRequestSummary$ === "object");
assert(typeof CollaborationChangeSpecification$ === "object");
assert(typeof CollaborationConfiguredAudienceModelAssociation$ === "object");
assert(typeof CollaborationConfiguredAudienceModelAssociationSummary$ === "object");
assert(typeof CollaborationIdNamespaceAssociation$ === "object");
assert(typeof CollaborationIdNamespaceAssociationSummary$ === "object");
assert(typeof CollaborationPrivacyBudgetSummary$ === "object");
assert(typeof CollaborationPrivacyBudgetTemplate$ === "object");
assert(typeof CollaborationPrivacyBudgetTemplateSummary$ === "object");
assert(typeof CollaborationSummary$ === "object");
assert(typeof Column$ === "object");
assert(typeof ColumnClassificationDetails$ === "object");
assert(typeof ComputeConfiguration$ === "object");
assert(typeof ConfigurationDetails$ === "object");
assert(typeof ConfiguredAudienceModelAssociation$ === "object");
assert(typeof ConfiguredAudienceModelAssociationSummary$ === "object");
assert(typeof ConfiguredTable$ === "object");
assert(typeof ConfiguredTableAnalysisRule$ === "object");
assert(typeof ConfiguredTableAnalysisRulePolicy$ === "object");
assert(typeof ConfiguredTableAnalysisRulePolicyV1$ === "object");
assert(typeof ConfiguredTableAssociation$ === "object");
assert(typeof ConfiguredTableAssociationAnalysisRule$ === "object");
assert(typeof ConfiguredTableAssociationAnalysisRuleAggregation$ === "object");
assert(typeof ConfiguredTableAssociationAnalysisRuleCustom$ === "object");
assert(typeof ConfiguredTableAssociationAnalysisRuleList$ === "object");
assert(typeof ConfiguredTableAssociationAnalysisRulePolicy$ === "object");
assert(typeof ConfiguredTableAssociationAnalysisRulePolicyV1$ === "object");
assert(typeof ConfiguredTableAssociationSummary$ === "object");
assert(typeof ConfiguredTableSummary$ === "object");
assert(typeof ConsolidatedPolicy$ === "object");
assert(typeof ConsolidatedPolicyAggregation$ === "object");
assert(typeof ConsolidatedPolicyCustom$ === "object");
assert(typeof ConsolidatedPolicyList$ === "object");
assert(typeof ConsolidatedPolicyV1$ === "object");
assert(typeof CreateAnalysisTemplateInput$ === "object");
assert(typeof CreateAnalysisTemplateOutput$ === "object");
assert(typeof CreateCollaborationChangeRequestInput$ === "object");
assert(typeof CreateCollaborationChangeRequestOutput$ === "object");
assert(typeof CreateCollaborationInput$ === "object");
assert(typeof CreateCollaborationOutput$ === "object");
assert(typeof CreateConfiguredAudienceModelAssociationInput$ === "object");
assert(typeof CreateConfiguredAudienceModelAssociationOutput$ === "object");
assert(typeof CreateConfiguredTableAnalysisRuleInput$ === "object");
assert(typeof CreateConfiguredTableAnalysisRuleOutput$ === "object");
assert(typeof CreateConfiguredTableAssociationAnalysisRuleInput$ === "object");
assert(typeof CreateConfiguredTableAssociationAnalysisRuleOutput$ === "object");
assert(typeof CreateConfiguredTableAssociationInput$ === "object");
assert(typeof CreateConfiguredTableAssociationOutput$ === "object");
assert(typeof CreateConfiguredTableInput$ === "object");
assert(typeof CreateConfiguredTableOutput$ === "object");
assert(typeof CreateIdMappingTableInput$ === "object");
assert(typeof CreateIdMappingTableOutput$ === "object");
assert(typeof CreateIdNamespaceAssociationInput$ === "object");
assert(typeof CreateIdNamespaceAssociationOutput$ === "object");
assert(typeof CreateMembershipInput$ === "object");
assert(typeof CreateMembershipOutput$ === "object");
assert(typeof CreatePrivacyBudgetTemplateInput$ === "object");
assert(typeof CreatePrivacyBudgetTemplateOutput$ === "object");
assert(typeof DataEncryptionMetadata$ === "object");
assert(typeof DeleteAnalysisTemplateInput$ === "object");
assert(typeof DeleteAnalysisTemplateOutput$ === "object");
assert(typeof DeleteCollaborationInput$ === "object");
assert(typeof DeleteCollaborationOutput$ === "object");
assert(typeof DeleteConfiguredAudienceModelAssociationInput$ === "object");
assert(typeof DeleteConfiguredAudienceModelAssociationOutput$ === "object");
assert(typeof DeleteConfiguredTableAnalysisRuleInput$ === "object");
assert(typeof DeleteConfiguredTableAnalysisRuleOutput$ === "object");
assert(typeof DeleteConfiguredTableAssociationAnalysisRuleInput$ === "object");
assert(typeof DeleteConfiguredTableAssociationAnalysisRuleOutput$ === "object");
assert(typeof DeleteConfiguredTableAssociationInput$ === "object");
assert(typeof DeleteConfiguredTableAssociationOutput$ === "object");
assert(typeof DeleteConfiguredTableInput$ === "object");
assert(typeof DeleteConfiguredTableOutput$ === "object");
assert(typeof DeleteIdMappingTableInput$ === "object");
assert(typeof DeleteIdMappingTableOutput$ === "object");
assert(typeof DeleteIdNamespaceAssociationInput$ === "object");
assert(typeof DeleteIdNamespaceAssociationOutput$ === "object");
assert(typeof DeleteMemberInput$ === "object");
assert(typeof DeleteMemberOutput$ === "object");
assert(typeof DeleteMembershipInput$ === "object");
assert(typeof DeleteMembershipOutput$ === "object");
assert(typeof DeletePrivacyBudgetTemplateInput$ === "object");
assert(typeof DeletePrivacyBudgetTemplateOutput$ === "object");
assert(typeof DifferentialPrivacyColumn$ === "object");
assert(typeof DifferentialPrivacyConfiguration$ === "object");
assert(typeof DifferentialPrivacyParameters$ === "object");
assert(typeof DifferentialPrivacyPreviewAggregation$ === "object");
assert(typeof DifferentialPrivacyPreviewParametersInput$ === "object");
assert(typeof DifferentialPrivacyPrivacyBudget$ === "object");
assert(typeof DifferentialPrivacyPrivacyBudgetAggregation$ === "object");
assert(typeof DifferentialPrivacyPrivacyImpact$ === "object");
assert(typeof DifferentialPrivacySensitivityParameters$ === "object");
assert(typeof DifferentialPrivacyTemplateParametersInput$ === "object");
assert(typeof DifferentialPrivacyTemplateParametersOutput$ === "object");
assert(typeof DifferentialPrivacyTemplateUpdateParameters$ === "object");
assert(typeof DirectAnalysisConfigurationDetails$ === "object");
assert(typeof ErrorMessageConfiguration$ === "object");
assert(typeof GetAnalysisTemplateInput$ === "object");
assert(typeof GetAnalysisTemplateOutput$ === "object");
assert(typeof GetCollaborationAnalysisTemplateInput$ === "object");
assert(typeof GetCollaborationAnalysisTemplateOutput$ === "object");
assert(typeof GetCollaborationChangeRequestInput$ === "object");
assert(typeof GetCollaborationChangeRequestOutput$ === "object");
assert(typeof GetCollaborationConfiguredAudienceModelAssociationInput$ === "object");
assert(typeof GetCollaborationConfiguredAudienceModelAssociationOutput$ === "object");
assert(typeof GetCollaborationIdNamespaceAssociationInput$ === "object");
assert(typeof GetCollaborationIdNamespaceAssociationOutput$ === "object");
assert(typeof GetCollaborationInput$ === "object");
assert(typeof GetCollaborationOutput$ === "object");
assert(typeof GetCollaborationPrivacyBudgetTemplateInput$ === "object");
assert(typeof GetCollaborationPrivacyBudgetTemplateOutput$ === "object");
assert(typeof GetConfiguredAudienceModelAssociationInput$ === "object");
assert(typeof GetConfiguredAudienceModelAssociationOutput$ === "object");
assert(typeof GetConfiguredTableAnalysisRuleInput$ === "object");
assert(typeof GetConfiguredTableAnalysisRuleOutput$ === "object");
assert(typeof GetConfiguredTableAssociationAnalysisRuleInput$ === "object");
assert(typeof GetConfiguredTableAssociationAnalysisRuleOutput$ === "object");
assert(typeof GetConfiguredTableAssociationInput$ === "object");
assert(typeof GetConfiguredTableAssociationOutput$ === "object");
assert(typeof GetConfiguredTableInput$ === "object");
assert(typeof GetConfiguredTableOutput$ === "object");
assert(typeof GetIdMappingTableInput$ === "object");
assert(typeof GetIdMappingTableOutput$ === "object");
assert(typeof GetIdNamespaceAssociationInput$ === "object");
assert(typeof GetIdNamespaceAssociationOutput$ === "object");
assert(typeof GetMembershipInput$ === "object");
assert(typeof GetMembershipOutput$ === "object");
assert(typeof GetPrivacyBudgetTemplateInput$ === "object");
assert(typeof GetPrivacyBudgetTemplateOutput$ === "object");
assert(typeof GetProtectedJobInput$ === "object");
assert(typeof GetProtectedJobOutput$ === "object");
assert(typeof GetProtectedQueryInput$ === "object");
assert(typeof GetProtectedQueryOutput$ === "object");
assert(typeof GetSchemaAnalysisRuleInput$ === "object");
assert(typeof GetSchemaAnalysisRuleOutput$ === "object");
assert(typeof GetSchemaInput$ === "object");
assert(typeof GetSchemaOutput$ === "object");
assert(typeof GlueTableReference$ === "object");
assert(typeof Hash$ === "object");
assert(typeof IdMappingConfig$ === "object");
assert(typeof IdMappingTable$ === "object");
assert(typeof IdMappingTableInputReferenceConfig$ === "object");
assert(typeof IdMappingTableInputReferenceProperties$ === "object");
assert(typeof IdMappingTableInputSource$ === "object");
assert(typeof IdMappingTableSchemaTypeProperties$ === "object");
assert(typeof IdMappingTableSummary$ === "object");
assert(typeof IdNamespaceAssociation$ === "object");
assert(typeof IdNamespaceAssociationInputReferenceConfig$ === "object");
assert(typeof IdNamespaceAssociationInputReferenceProperties$ === "object");
assert(typeof IdNamespaceAssociationInputReferencePropertiesSummary$ === "object");
assert(typeof IdNamespaceAssociationSummary$ === "object");
assert(typeof JobComputePaymentConfig$ === "object");
assert(typeof ListAnalysisTemplatesInput$ === "object");
assert(typeof ListAnalysisTemplatesOutput$ === "object");
assert(typeof ListCollaborationAnalysisTemplatesInput$ === "object");
assert(typeof ListCollaborationAnalysisTemplatesOutput$ === "object");
assert(typeof ListCollaborationChangeRequestsInput$ === "object");
assert(typeof ListCollaborationChangeRequestsOutput$ === "object");
assert(typeof ListCollaborationConfiguredAudienceModelAssociationsInput$ === "object");
assert(typeof ListCollaborationConfiguredAudienceModelAssociationsOutput$ === "object");
assert(typeof ListCollaborationIdNamespaceAssociationsInput$ === "object");
assert(typeof ListCollaborationIdNamespaceAssociationsOutput$ === "object");
assert(typeof ListCollaborationPrivacyBudgetsInput$ === "object");
assert(typeof ListCollaborationPrivacyBudgetsOutput$ === "object");
assert(typeof ListCollaborationPrivacyBudgetTemplatesInput$ === "object");
assert(typeof ListCollaborationPrivacyBudgetTemplatesOutput$ === "object");
assert(typeof ListCollaborationsInput$ === "object");
assert(typeof ListCollaborationsOutput$ === "object");
assert(typeof ListConfiguredAudienceModelAssociationsInput$ === "object");
assert(typeof ListConfiguredAudienceModelAssociationsOutput$ === "object");
assert(typeof ListConfiguredTableAssociationsInput$ === "object");
assert(typeof ListConfiguredTableAssociationsOutput$ === "object");
assert(typeof ListConfiguredTablesInput$ === "object");
assert(typeof ListConfiguredTablesOutput$ === "object");
assert(typeof ListIdMappingTablesInput$ === "object");
assert(typeof ListIdMappingTablesOutput$ === "object");
assert(typeof ListIdNamespaceAssociationsInput$ === "object");
assert(typeof ListIdNamespaceAssociationsOutput$ === "object");
assert(typeof ListMembershipsInput$ === "object");
assert(typeof ListMembershipsOutput$ === "object");
assert(typeof ListMembersInput$ === "object");
assert(typeof ListMembersOutput$ === "object");
assert(typeof ListPrivacyBudgetsInput$ === "object");
assert(typeof ListPrivacyBudgetsOutput$ === "object");
assert(typeof ListPrivacyBudgetTemplatesInput$ === "object");
assert(typeof ListPrivacyBudgetTemplatesOutput$ === "object");
assert(typeof ListProtectedJobsInput$ === "object");
assert(typeof ListProtectedJobsOutput$ === "object");
assert(typeof ListProtectedQueriesInput$ === "object");
assert(typeof ListProtectedQueriesOutput$ === "object");
assert(typeof ListSchemasInput$ === "object");
assert(typeof ListSchemasOutput$ === "object");
assert(typeof ListTagsForResourceInput$ === "object");
assert(typeof ListTagsForResourceOutput$ === "object");
assert(typeof MemberChangeSpecification$ === "object");
assert(typeof Membership$ === "object");
assert(typeof MembershipJobComputePaymentConfig$ === "object");
assert(typeof MembershipMLPaymentConfig$ === "object");
assert(typeof MembershipModelInferencePaymentConfig$ === "object");
assert(typeof MembershipModelTrainingPaymentConfig$ === "object");
assert(typeof MembershipPaymentConfiguration$ === "object");
assert(typeof MembershipProtectedJobOutputConfiguration$ === "object");
assert(typeof MembershipProtectedJobResultConfiguration$ === "object");
assert(typeof MembershipProtectedQueryOutputConfiguration$ === "object");
assert(typeof MembershipProtectedQueryResultConfiguration$ === "object");
assert(typeof MembershipQueryComputePaymentConfig$ === "object");
assert(typeof MembershipSummary$ === "object");
assert(typeof MembershipSyntheticDataGenerationPaymentConfig$ === "object");
assert(typeof MemberSpecification$ === "object");
assert(typeof MemberSummary$ === "object");
assert(typeof MLMemberAbilities$ === "object");
assert(typeof MLPaymentConfig$ === "object");
assert(typeof MLSyntheticDataParameters$ === "object");
assert(typeof ModelInferencePaymentConfig$ === "object");
assert(typeof ModelTrainingPaymentConfig$ === "object");
assert(typeof PaymentConfiguration$ === "object");
assert(typeof PopulateIdMappingTableInput$ === "object");
assert(typeof PopulateIdMappingTableOutput$ === "object");
assert(typeof PreviewPrivacyImpactInput$ === "object");
assert(typeof PreviewPrivacyImpactOutput$ === "object");
assert(typeof PreviewPrivacyImpactParametersInput$ === "object");
assert(typeof PrivacyBudget$ === "object");
assert(typeof PrivacyBudgetSummary$ === "object");
assert(typeof PrivacyBudgetTemplate$ === "object");
assert(typeof PrivacyBudgetTemplateParametersInput$ === "object");
assert(typeof PrivacyBudgetTemplateParametersOutput$ === "object");
assert(typeof PrivacyBudgetTemplateSummary$ === "object");
assert(typeof PrivacyBudgetTemplateUpdateParameters$ === "object");
assert(typeof PrivacyImpact$ === "object");
assert(typeof ProtectedJob$ === "object");
assert(typeof ProtectedJobComputeConfiguration$ === "object");
assert(typeof ProtectedJobConfigurationDetails$ === "object");
assert(typeof ProtectedJobDirectAnalysisConfigurationDetails$ === "object");
assert(typeof ProtectedJobError$ === "object");
assert(typeof ProtectedJobMemberOutputConfigurationInput$ === "object");
assert(typeof ProtectedJobMemberOutputConfigurationOutput$ === "object");
assert(typeof ProtectedJobOutput$ === "object");
assert(typeof ProtectedJobOutputConfigurationInput$ === "object");
assert(typeof ProtectedJobOutputConfigurationOutput$ === "object");
assert(typeof ProtectedJobParameters$ === "object");
assert(typeof ProtectedJobReceiverConfiguration$ === "object");
assert(typeof ProtectedJobResult$ === "object");
assert(typeof ProtectedJobResultConfigurationInput$ === "object");
assert(typeof ProtectedJobResultConfigurationOutput$ === "object");
assert(typeof ProtectedJobS3Output$ === "object");
assert(typeof ProtectedJobS3OutputConfigurationInput$ === "object");
assert(typeof ProtectedJobS3OutputConfigurationOutput$ === "object");
assert(typeof ProtectedJobSingleMemberOutput$ === "object");
assert(typeof ProtectedJobStatistics$ === "object");
assert(typeof ProtectedJobSummary$ === "object");
assert(typeof ProtectedJobWorkerComputeConfiguration$ === "object");
assert(typeof ProtectedQuery$ === "object");
assert(typeof ProtectedQueryDistributeOutput$ === "object");
assert(typeof ProtectedQueryDistributeOutputConfiguration$ === "object");
assert(typeof ProtectedQueryDistributeOutputConfigurationLocation$ === "object");
assert(typeof ProtectedQueryError$ === "object");
assert(typeof ProtectedQueryMemberOutputConfiguration$ === "object");
assert(typeof ProtectedQueryOutput$ === "object");
assert(typeof ProtectedQueryOutputConfiguration$ === "object");
assert(typeof ProtectedQueryResult$ === "object");
assert(typeof ProtectedQueryResultConfiguration$ === "object");
assert(typeof ProtectedQueryS3Output$ === "object");
assert(typeof ProtectedQueryS3OutputConfiguration$ === "object");
assert(typeof ProtectedQuerySingleMemberOutput$ === "object");
assert(typeof ProtectedQuerySQLParameters$ === "object");
assert(typeof ProtectedQueryStatistics$ === "object");
assert(typeof ProtectedQuerySummary$ === "object");
assert(typeof QueryComputePaymentConfig$ === "object");
assert(typeof QueryConstraint$ === "object");
assert(typeof QueryConstraintRequireOverlap$ === "object");
assert(typeof ReceiverConfiguration$ === "object");
assert(typeof S3Location$ === "object");
assert(typeof Schema$ === "object");
assert(typeof SchemaAnalysisRuleRequest$ === "object");
assert(typeof SchemaStatusDetail$ === "object");
assert(typeof SchemaStatusReason$ === "object");
assert(typeof SchemaSummary$ === "object");
assert(typeof SchemaTypeProperties$ === "object");
assert(typeof SnowflakeTableReference$ === "object");
assert(typeof SnowflakeTableSchema$ === "object");
assert(typeof SnowflakeTableSchemaV1$ === "object");
assert(typeof StartProtectedJobInput$ === "object");
assert(typeof StartProtectedJobOutput$ === "object");
assert(typeof StartProtectedQueryInput$ === "object");
assert(typeof StartProtectedQueryOutput$ === "object");
assert(typeof SyntheticDataColumnProperties$ === "object");
assert(typeof SyntheticDataGenerationPaymentConfig$ === "object");
assert(typeof SyntheticDataParameters$ === "object");
assert(typeof TableReference$ === "object");
assert(typeof TagResourceInput$ === "object");
assert(typeof TagResourceOutput$ === "object");
assert(typeof UntagResourceInput$ === "object");
assert(typeof UntagResourceOutput$ === "object");
assert(typeof UpdateAnalysisTemplateInput$ === "object");
assert(typeof UpdateAnalysisTemplateOutput$ === "object");
assert(typeof UpdateCollaborationChangeRequestInput$ === "object");
assert(typeof UpdateCollaborationChangeRequestOutput$ === "object");
assert(typeof UpdateCollaborationInput$ === "object");
assert(typeof UpdateCollaborationOutput$ === "object");
assert(typeof UpdateConfiguredAudienceModelAssociationInput$ === "object");
assert(typeof UpdateConfiguredAudienceModelAssociationOutput$ === "object");
assert(typeof UpdateConfiguredTableAnalysisRuleInput$ === "object");
assert(typeof UpdateConfiguredTableAnalysisRuleOutput$ === "object");
assert(typeof UpdateConfiguredTableAssociationAnalysisRuleInput$ === "object");
assert(typeof UpdateConfiguredTableAssociationAnalysisRuleOutput$ === "object");
assert(typeof UpdateConfiguredTableAssociationInput$ === "object");
assert(typeof UpdateConfiguredTableAssociationOutput$ === "object");
assert(typeof UpdateConfiguredTableInput$ === "object");
assert(typeof UpdateConfiguredTableOutput$ === "object");
assert(typeof UpdateIdMappingTableInput$ === "object");
assert(typeof UpdateIdMappingTableOutput$ === "object");
assert(typeof UpdateIdNamespaceAssociationInput$ === "object");
assert(typeof UpdateIdNamespaceAssociationOutput$ === "object");
assert(typeof UpdateMembershipInput$ === "object");
assert(typeof UpdateMembershipOutput$ === "object");
assert(typeof UpdatePrivacyBudgetTemplateInput$ === "object");
assert(typeof UpdatePrivacyBudgetTemplateOutput$ === "object");
assert(typeof UpdateProtectedJobInput$ === "object");
assert(typeof UpdateProtectedJobOutput$ === "object");
assert(typeof UpdateProtectedQueryInput$ === "object");
assert(typeof UpdateProtectedQueryOutput$ === "object");
assert(typeof ValidationExceptionField$ === "object");
assert(typeof WorkerComputeConfiguration$ === "object");
assert(typeof WorkerComputeConfigurationProperties$ === "object");
// enums
assert(typeof AccessBudgetType === "object");
assert(typeof AccessDeniedExceptionReason === "object");
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
assert(typeof ApprovalStatus === "object");
assert(typeof AutoApprovedChangeType === "object");
assert(typeof AutoRefreshMode === "object");
assert(typeof ChangeRequestAction === "object");
assert(typeof ChangeRequestStatus === "object");
assert(typeof ChangeSpecificationType === "object");
assert(typeof ChangeType === "object");
assert(typeof CollaborationJobLogStatus === "object");
assert(typeof CollaborationQueryLogStatus === "object");
assert(typeof CommercialRegion === "object");
assert(typeof ConfiguredTableAnalysisRuleType === "object");
assert(typeof ConfiguredTableAssociationAnalysisRuleType === "object");
assert(typeof ConflictExceptionReason === "object");
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
assert(typeof ResourceType === "object");
assert(typeof ResultFormat === "object");
assert(typeof ScalarFunctions === "object");
assert(typeof SchemaConfiguration === "object");
assert(typeof SchemaStatus === "object");
assert(typeof SchemaStatusReasonCode === "object");
assert(typeof SchemaType === "object");
assert(typeof SelectedAnalysisMethod === "object");
assert(typeof SupportedS3Region === "object");
assert(typeof SyntheticDataColumnType === "object");
assert(typeof TargetProtectedJobStatus === "object");
assert(typeof TargetProtectedQueryStatus === "object");
assert(typeof ValidationExceptionReason === "object");
assert(typeof WorkerComputeType === "object");
// errors
assert(AccessDeniedException.prototype instanceof CleanRoomsServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof CleanRoomsServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof CleanRoomsServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof CleanRoomsServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof CleanRoomsServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof CleanRoomsServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof CleanRoomsServiceException);
assert(typeof ValidationException$ === "object");
assert(CleanRoomsServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListAnalysisTemplates === "function");
assert(typeof paginateListCollaborationAnalysisTemplates === "function");
assert(typeof paginateListCollaborationChangeRequests === "function");
assert(typeof paginateListCollaborationConfiguredAudienceModelAssociations === "function");
assert(typeof paginateListCollaborationIdNamespaceAssociations === "function");
assert(typeof paginateListCollaborationPrivacyBudgetTemplates === "function");
assert(typeof paginateListCollaborationPrivacyBudgets === "function");
assert(typeof paginateListCollaborations === "function");
assert(typeof paginateListConfiguredAudienceModelAssociations === "function");
assert(typeof paginateListConfiguredTableAssociations === "function");
assert(typeof paginateListConfiguredTables === "function");
assert(typeof paginateListIdMappingTables === "function");
assert(typeof paginateListIdNamespaceAssociations === "function");
assert(typeof paginateListMembers === "function");
assert(typeof paginateListMemberships === "function");
assert(typeof paginateListPrivacyBudgetTemplates === "function");
assert(typeof paginateListPrivacyBudgets === "function");
assert(typeof paginateListProtectedJobs === "function");
assert(typeof paginateListProtectedQueries === "function");
assert(typeof paginateListSchemas === "function");
console.log(`CleanRooms index test passed.`);
