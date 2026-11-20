import {
  _Record$,
  AccessDeniedException,
  AccessDeniedException$,
  Action,
  ActionCondition$,
  AdvancedEventSelector$,
  AdvancedFieldSelector$,
  AllSubscriptions$,
  AzureAwsManagedFlowLogs$,
  AzureConnectorConfiguration$,
  AzureConnectorQuery$,
  AzureConnectorQueryResults$,
  AzureCustomerManagedFlowLogs$,
  AzureEventHubConfiguration$,
  AzureEventHubsQuery$,
  AzureEventHubSummary$,
  AzureEventHubTier,
  AzureFlowLogsInfrastructure$,
  AzureFlowLogStorageAccountScope$,
  AzureInfrastructure$,
  AzureManagementGroupsQuery$,
  AzureManagementGroupSummary$,
  AzureQueryScope$,
  AzureRegionsQuery$,
  AzureResourceIdentifierSummary$,
  AzureResourceIdScope$,
  AzureResourceIdsQuery$,
  AzureResourceTypesQuery$,
  AzureScope$,
  AzureScopeItem$,
  AzureSubscriptionScope$,
  AzureSubscriptionsQuery$,
  AzureSubscriptionSummary$,
  AzureTelemetrySourceConfigurationInput$,
  AzureTelemetrySourceConfigurationOutput$,
  AzureTelemetryType,
  CentralizationFailureReason,
  CentralizationRule$,
  CentralizationRuleDestination$,
  CentralizationRuleSource$,
  CentralizationRuleSummary$,
  CentralizeWithDataProtection,
  CloudtrailParameters$,
  Condition$,
  ConfigurationSummary$,
  ConflictException,
  ConflictException$,
  Connector$,
  ConnectorConfiguration$,
  ConnectorProvider,
  ConnectorQuery$,
  ConnectorQueryResults$,
  ConnectorSummary$,
  ContextGraphStatus,
  CreateCentralizationRuleForOrganization$,
  CreateCentralizationRuleForOrganizationCommand,
  CreateCentralizationRuleForOrganizationInput$,
  CreateCentralizationRuleForOrganizationOutput$,
  CreateConnector$,
  CreateConnectorCommand,
  CreateConnectorInput$,
  CreateConnectorOutput$,
  CreateDatasetIntegration$,
  CreateDatasetIntegrationCommand,
  CreateDatasetIntegrationInput$,
  CreateDatasetIntegrationOutput$,
  CreateS3TableIntegration$,
  CreateS3TableIntegrationCommand,
  CreateS3TableIntegrationInput$,
  CreateS3TableIntegrationOutput$,
  CreateTelemetryPipeline$,
  CreateTelemetryPipelineCommand,
  CreateTelemetryPipelineInput$,
  CreateTelemetryPipelineOutput$,
  CreateTelemetryRule$,
  CreateTelemetryRuleCommand,
  CreateTelemetryRuleForOrganization$,
  CreateTelemetryRuleForOrganizationCommand,
  CreateTelemetryRuleForOrganizationInput$,
  CreateTelemetryRuleForOrganizationOutput$,
  CreateTelemetryRuleInput$,
  CreateTelemetryRuleOutput$,
  DatasetIntegrationSummary$,
  DataSource$,
  DeleteCentralizationRuleForOrganization$,
  DeleteCentralizationRuleForOrganizationCommand,
  DeleteCentralizationRuleForOrganizationInput$,
  DeleteConnector$,
  DeleteConnectorCommand,
  DeleteConnectorInput$,
  DeleteConnectorOutput$,
  DeleteDatasetIntegration$,
  DeleteDatasetIntegrationCommand,
  DeleteDatasetIntegrationInput$,
  DeleteS3TableIntegration$,
  DeleteS3TableIntegrationCommand,
  DeleteS3TableIntegrationInput$,
  DeleteTelemetryPipeline$,
  DeleteTelemetryPipelineCommand,
  DeleteTelemetryPipelineInput$,
  DeleteTelemetryPipelineOutput$,
  DeleteTelemetryRule$,
  DeleteTelemetryRuleCommand,
  DeleteTelemetryRuleForOrganization$,
  DeleteTelemetryRuleForOrganizationCommand,
  DeleteTelemetryRuleForOrganizationInput$,
  DeleteTelemetryRuleInput$,
  DeletionProtection,
  DestinationLogsConfiguration$,
  DestinationMetricsConfiguration$,
  DestinationProfilesConfiguration$,
  DestinationType,
  ELBLoadBalancerLoggingParameters$,
  EncryptedLogGroupStrategy,
  Encryption$,
  EncryptionConflictResolutionStrategy,
  EncryptionScope,
  EncryptionStrategy,
  FieldToMatch$,
  Filter$,
  FilterBehavior,
  FilterRequirement,
  GetCentralizationRuleForOrganization$,
  GetCentralizationRuleForOrganizationCommand,
  GetCentralizationRuleForOrganizationInput$,
  GetCentralizationRuleForOrganizationOutput$,
  GetConnector$,
  GetConnectorCommand,
  GetConnectorInput$,
  GetConnectorOutput$,
  GetConnectorTelemetryManifest$,
  GetConnectorTelemetryManifestCommand,
  GetConnectorTelemetryManifestInput$,
  GetConnectorTelemetryManifestOutput$,
  GetConnectorTelemetrySetup$,
  GetConnectorTelemetrySetupCommand,
  GetConnectorTelemetrySetupInput$,
  GetConnectorTelemetrySetupOutput$,
  GetDatasetIntegration$,
  GetDatasetIntegrationCommand,
  GetDatasetIntegrationInput$,
  GetDatasetIntegrationOutput$,
  GetS3TableIntegration$,
  GetS3TableIntegrationCommand,
  GetS3TableIntegrationInput$,
  GetS3TableIntegrationOutput$,
  GetTelemetryEnrichmentStatus$,
  GetTelemetryEnrichmentStatusCommand,
  GetTelemetryEnrichmentStatusOutput$,
  GetTelemetryEvaluationStatus$,
  GetTelemetryEvaluationStatusCommand,
  GetTelemetryEvaluationStatusForOrganization$,
  GetTelemetryEvaluationStatusForOrganizationCommand,
  GetTelemetryEvaluationStatusForOrganizationOutput$,
  GetTelemetryEvaluationStatusOutput$,
  GetTelemetryPipeline$,
  GetTelemetryPipelineCommand,
  GetTelemetryPipelineInput$,
  GetTelemetryPipelineOutput$,
  GetTelemetryRule$,
  GetTelemetryRuleCommand,
  GetTelemetryRuleForOrganization$,
  GetTelemetryRuleForOrganizationCommand,
  GetTelemetryRuleForOrganizationInput$,
  GetTelemetryRuleForOrganizationOutput$,
  GetTelemetryRuleInput$,
  GetTelemetryRuleOutput$,
  GetThirdPartyTelemetryEnrichment$,
  GetThirdPartyTelemetryEnrichmentCommand,
  GetThirdPartyTelemetryEnrichmentInput$,
  GetThirdPartyTelemetryEnrichmentOutput$,
  IntegrationStatus,
  IntegrationSummary$,
  InternalServerException,
  InternalServerException$,
  InvalidStateException,
  InvalidStateException$,
  LabelNameCondition$,
  ListCentralizationRulesForOrganization$,
  ListCentralizationRulesForOrganizationCommand,
  ListCentralizationRulesForOrganizationInput$,
  ListCentralizationRulesForOrganizationOutput$,
  ListConnectors$,
  ListConnectorsCommand,
  ListConnectorsInput$,
  ListConnectorsOutput$,
  ListDatasetIntegrations$,
  ListDatasetIntegrationsCommand,
  ListDatasetIntegrationsInput$,
  ListDatasetIntegrationsOutput$,
  ListResourcesByConnector$,
  ListResourcesByConnectorCommand,
  ListResourcesByConnectorInput$,
  ListResourcesByConnectorOutput$,
  ListResourceTelemetry$,
  ListResourceTelemetryCommand,
  ListResourceTelemetryForOrganization$,
  ListResourceTelemetryForOrganizationCommand,
  ListResourceTelemetryForOrganizationInput$,
  ListResourceTelemetryForOrganizationOutput$,
  ListResourceTelemetryInput$,
  ListResourceTelemetryOutput$,
  ListS3TableIntegrations$,
  ListS3TableIntegrationsCommand,
  ListS3TableIntegrationsInput$,
  ListS3TableIntegrationsOutput$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceInput$,
  ListTagsForResourceOutput$,
  ListTelemetryPipelines$,
  ListTelemetryPipelinesCommand,
  ListTelemetryPipelinesInput$,
  ListTelemetryPipelinesOutput$,
  ListTelemetryRules$,
  ListTelemetryRulesCommand,
  ListTelemetryRulesForOrganization$,
  ListTelemetryRulesForOrganizationCommand,
  ListTelemetryRulesForOrganizationInput$,
  ListTelemetryRulesForOrganizationOutput$,
  ListTelemetryRulesInput$,
  ListTelemetryRulesOutput$,
  ListThirdPartyTelemetryEnrichments$,
  ListThirdPartyTelemetryEnrichmentsCommand,
  ListThirdPartyTelemetryEnrichmentsInput$,
  ListThirdPartyTelemetryEnrichmentsOutput$,
  LogDeliveryParameters$,
  LoggingFilter$,
  LogGroupNameConfiguration$,
  LogsBackupConfiguration$,
  LogsEncryptionConfiguration$,
  LogType,
  MetricsBackupConfiguration$,
  MskEnhancedMonitoringLevel,
  MskMonitoringParameters$,
  ObservabilityAdmin,
  ObservabilityAdminClient,
  ObservabilityAdminServiceException,
  OutputFormat,
  paginateListCentralizationRulesForOrganization,
  paginateListConnectors,
  paginateListDatasetIntegrations,
  paginateListResourceTelemetry,
  paginateListResourceTelemetryForOrganization,
  paginateListS3TableIntegrations,
  paginateListTelemetryPipelines,
  paginateListTelemetryRules,
  paginateListTelemetryRulesForOrganization,
  paginateListThirdPartyTelemetryEnrichments,
  PipelineOutput$,
  PipelineOutputError$,
  ProfilesBackupConfiguration$,
  PutConnectorTelemetryManifest$,
  PutConnectorTelemetryManifestCommand,
  PutConnectorTelemetryManifestInput$,
  PutConnectorTelemetryManifestOutput$,
  RecordFormat,
  RegionStatus$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResourceType,
  RuleHealth,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  SetupArtifact$,
  SetupFormat,
  SignalType,
  SingleHeader$,
  Source$,
  SourceContextGraphConfiguration$,
  SourceLogsConfiguration$,
  SourceMetricsConfiguration$,
  SourceProfilesConfiguration$,
  SourceProgress$,
  SSEAlgorithm,
  StartTelemetryEnrichment$,
  StartTelemetryEnrichmentCommand,
  StartTelemetryEnrichmentOutput$,
  StartTelemetryEvaluation$,
  StartTelemetryEvaluationCommand,
  StartTelemetryEvaluationForOrganization$,
  StartTelemetryEvaluationForOrganizationCommand,
  StartTelemetryEvaluationForOrganizationInput$,
  StartTelemetryEvaluationInput$,
  StartTelemetryPipelineRefresh$,
  StartTelemetryPipelineRefreshCommand,
  StartTelemetryPipelineRefreshInput$,
  StartTelemetryPipelineRefreshOutput$,
  StartThirdPartyTelemetryEnrichment$,
  StartThirdPartyTelemetryEnrichmentCommand,
  StartThirdPartyTelemetryEnrichmentInput$,
  StartThirdPartyTelemetryEnrichmentOutput$,
  Status,
  StopTelemetryEnrichment$,
  StopTelemetryEnrichmentCommand,
  StopTelemetryEnrichmentOutput$,
  StopTelemetryEvaluation$,
  StopTelemetryEvaluationCommand,
  StopTelemetryEvaluationForOrganization$,
  StopTelemetryEvaluationForOrganizationCommand,
  StopThirdPartyTelemetryEnrichment$,
  StopThirdPartyTelemetryEnrichmentCommand,
  StopThirdPartyTelemetryEnrichmentInput$,
  StopThirdPartyTelemetryEnrichmentOutput$,
  TagConflictResolutionStrategy,
  TagFilter$,
  TagPropagationConfiguration$,
  TagPropagationFailureReason,
  TagPropagationStatus,
  TagResource$,
  TagResourceCommand,
  TagResourceInput$,
  TelemetryConfiguration$,
  TelemetryDestinationConfiguration$,
  TelemetryEnrichmentStatus,
  TelemetryManifest$,
  TelemetryManifestInfrastructure$,
  TelemetryManifestSource$,
  TelemetryPipeline$,
  TelemetryPipelineConfiguration$,
  TelemetryPipelineStatus,
  TelemetryPipelineStatusReason$,
  TelemetryPipelineSummary$,
  TelemetryRule$,
  TelemetryRuleSummary$,
  TelemetrySourceConfigurationInput$,
  TelemetrySourceConfigurationOutput$,
  TelemetrySourceType,
  TelemetryState,
  TelemetryType,
  TestTelemetryPipeline$,
  TestTelemetryPipelineCommand,
  TestTelemetryPipelineInput$,
  TestTelemetryPipelineOutput$,
  ThirdPartyTelemetryEnrichmentStatus,
  ThirdPartyTelemetryEnrichmentSummary$,
  ThirdPartyTelemetrySource,
  TooManyRequestsException,
  TooManyRequestsException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceInput$,
  UpdateCentralizationRuleForOrganization$,
  UpdateCentralizationRuleForOrganizationCommand,
  UpdateCentralizationRuleForOrganizationInput$,
  UpdateCentralizationRuleForOrganizationOutput$,
  UpdateDatasetIntegration$,
  UpdateDatasetIntegrationCommand,
  UpdateDatasetIntegrationInput$,
  UpdateDatasetIntegrationOutput$,
  UpdateTelemetryPipeline$,
  UpdateTelemetryPipelineCommand,
  UpdateTelemetryPipelineInput$,
  UpdateTelemetryPipelineOutput$,
  UpdateTelemetryRule$,
  UpdateTelemetryRuleCommand,
  UpdateTelemetryRuleForOrganization$,
  UpdateTelemetryRuleForOrganizationCommand,
  UpdateTelemetryRuleForOrganizationInput$,
  UpdateTelemetryRuleForOrganizationOutput$,
  UpdateTelemetryRuleInput$,
  UpdateTelemetryRuleOutput$,
  ValidateTelemetryPipelineConfiguration$,
  ValidateTelemetryPipelineConfigurationCommand,
  ValidateTelemetryPipelineConfigurationInput$,
  ValidateTelemetryPipelineConfigurationOutput$,
  ValidationError$,
  ValidationException,
  ValidationException$,
  VPCFlowLogParameters$,
  WAFLoggingParameters$,
  WAFLogType,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof ObservabilityAdminClient === "function");
assert(typeof ObservabilityAdmin === "function");
// commands
assert(typeof CreateCentralizationRuleForOrganizationCommand === "function");
assert(typeof CreateCentralizationRuleForOrganization$ === "object");
assert(typeof CreateConnectorCommand === "function");
assert(typeof CreateConnector$ === "object");
assert(typeof CreateDatasetIntegrationCommand === "function");
assert(typeof CreateDatasetIntegration$ === "object");
assert(typeof CreateS3TableIntegrationCommand === "function");
assert(typeof CreateS3TableIntegration$ === "object");
assert(typeof CreateTelemetryPipelineCommand === "function");
assert(typeof CreateTelemetryPipeline$ === "object");
assert(typeof CreateTelemetryRuleCommand === "function");
assert(typeof CreateTelemetryRule$ === "object");
assert(typeof CreateTelemetryRuleForOrganizationCommand === "function");
assert(typeof CreateTelemetryRuleForOrganization$ === "object");
assert(typeof DeleteCentralizationRuleForOrganizationCommand === "function");
assert(typeof DeleteCentralizationRuleForOrganization$ === "object");
assert(typeof DeleteConnectorCommand === "function");
assert(typeof DeleteConnector$ === "object");
assert(typeof DeleteDatasetIntegrationCommand === "function");
assert(typeof DeleteDatasetIntegration$ === "object");
assert(typeof DeleteS3TableIntegrationCommand === "function");
assert(typeof DeleteS3TableIntegration$ === "object");
assert(typeof DeleteTelemetryPipelineCommand === "function");
assert(typeof DeleteTelemetryPipeline$ === "object");
assert(typeof DeleteTelemetryRuleCommand === "function");
assert(typeof DeleteTelemetryRule$ === "object");
assert(typeof DeleteTelemetryRuleForOrganizationCommand === "function");
assert(typeof DeleteTelemetryRuleForOrganization$ === "object");
assert(typeof GetCentralizationRuleForOrganizationCommand === "function");
assert(typeof GetCentralizationRuleForOrganization$ === "object");
assert(typeof GetConnectorCommand === "function");
assert(typeof GetConnector$ === "object");
assert(typeof GetConnectorTelemetryManifestCommand === "function");
assert(typeof GetConnectorTelemetryManifest$ === "object");
assert(typeof GetConnectorTelemetrySetupCommand === "function");
assert(typeof GetConnectorTelemetrySetup$ === "object");
assert(typeof GetDatasetIntegrationCommand === "function");
assert(typeof GetDatasetIntegration$ === "object");
assert(typeof GetS3TableIntegrationCommand === "function");
assert(typeof GetS3TableIntegration$ === "object");
assert(typeof GetTelemetryEnrichmentStatusCommand === "function");
assert(typeof GetTelemetryEnrichmentStatus$ === "object");
assert(typeof GetTelemetryEvaluationStatusCommand === "function");
assert(typeof GetTelemetryEvaluationStatus$ === "object");
assert(typeof GetTelemetryEvaluationStatusForOrganizationCommand === "function");
assert(typeof GetTelemetryEvaluationStatusForOrganization$ === "object");
assert(typeof GetTelemetryPipelineCommand === "function");
assert(typeof GetTelemetryPipeline$ === "object");
assert(typeof GetTelemetryRuleCommand === "function");
assert(typeof GetTelemetryRule$ === "object");
assert(typeof GetTelemetryRuleForOrganizationCommand === "function");
assert(typeof GetTelemetryRuleForOrganization$ === "object");
assert(typeof GetThirdPartyTelemetryEnrichmentCommand === "function");
assert(typeof GetThirdPartyTelemetryEnrichment$ === "object");
assert(typeof ListCentralizationRulesForOrganizationCommand === "function");
assert(typeof ListCentralizationRulesForOrganization$ === "object");
assert(typeof ListConnectorsCommand === "function");
assert(typeof ListConnectors$ === "object");
assert(typeof ListDatasetIntegrationsCommand === "function");
assert(typeof ListDatasetIntegrations$ === "object");
assert(typeof ListResourcesByConnectorCommand === "function");
assert(typeof ListResourcesByConnector$ === "object");
assert(typeof ListResourceTelemetryCommand === "function");
assert(typeof ListResourceTelemetry$ === "object");
assert(typeof ListResourceTelemetryForOrganizationCommand === "function");
assert(typeof ListResourceTelemetryForOrganization$ === "object");
assert(typeof ListS3TableIntegrationsCommand === "function");
assert(typeof ListS3TableIntegrations$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ListTelemetryPipelinesCommand === "function");
assert(typeof ListTelemetryPipelines$ === "object");
assert(typeof ListTelemetryRulesCommand === "function");
assert(typeof ListTelemetryRules$ === "object");
assert(typeof ListTelemetryRulesForOrganizationCommand === "function");
assert(typeof ListTelemetryRulesForOrganization$ === "object");
assert(typeof ListThirdPartyTelemetryEnrichmentsCommand === "function");
assert(typeof ListThirdPartyTelemetryEnrichments$ === "object");
assert(typeof PutConnectorTelemetryManifestCommand === "function");
assert(typeof PutConnectorTelemetryManifest$ === "object");
assert(typeof StartTelemetryEnrichmentCommand === "function");
assert(typeof StartTelemetryEnrichment$ === "object");
assert(typeof StartTelemetryEvaluationCommand === "function");
assert(typeof StartTelemetryEvaluation$ === "object");
assert(typeof StartTelemetryEvaluationForOrganizationCommand === "function");
assert(typeof StartTelemetryEvaluationForOrganization$ === "object");
assert(typeof StartTelemetryPipelineRefreshCommand === "function");
assert(typeof StartTelemetryPipelineRefresh$ === "object");
assert(typeof StartThirdPartyTelemetryEnrichmentCommand === "function");
assert(typeof StartThirdPartyTelemetryEnrichment$ === "object");
assert(typeof StopTelemetryEnrichmentCommand === "function");
assert(typeof StopTelemetryEnrichment$ === "object");
assert(typeof StopTelemetryEvaluationCommand === "function");
assert(typeof StopTelemetryEvaluation$ === "object");
assert(typeof StopTelemetryEvaluationForOrganizationCommand === "function");
assert(typeof StopTelemetryEvaluationForOrganization$ === "object");
assert(typeof StopThirdPartyTelemetryEnrichmentCommand === "function");
assert(typeof StopThirdPartyTelemetryEnrichment$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof TestTelemetryPipelineCommand === "function");
assert(typeof TestTelemetryPipeline$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateCentralizationRuleForOrganizationCommand === "function");
assert(typeof UpdateCentralizationRuleForOrganization$ === "object");
assert(typeof UpdateDatasetIntegrationCommand === "function");
assert(typeof UpdateDatasetIntegration$ === "object");
assert(typeof UpdateTelemetryPipelineCommand === "function");
assert(typeof UpdateTelemetryPipeline$ === "object");
assert(typeof UpdateTelemetryRuleCommand === "function");
assert(typeof UpdateTelemetryRule$ === "object");
assert(typeof UpdateTelemetryRuleForOrganizationCommand === "function");
assert(typeof UpdateTelemetryRuleForOrganization$ === "object");
assert(typeof ValidateTelemetryPipelineConfigurationCommand === "function");
assert(typeof ValidateTelemetryPipelineConfiguration$ === "object");
// structural schemas
assert(typeof ActionCondition$ === "object");
assert(typeof AdvancedEventSelector$ === "object");
assert(typeof AdvancedFieldSelector$ === "object");
assert(typeof AllSubscriptions$ === "object");
assert(typeof AzureAwsManagedFlowLogs$ === "object");
assert(typeof AzureConnectorConfiguration$ === "object");
assert(typeof AzureConnectorQuery$ === "object");
assert(typeof AzureConnectorQueryResults$ === "object");
assert(typeof AzureCustomerManagedFlowLogs$ === "object");
assert(typeof AzureEventHubConfiguration$ === "object");
assert(typeof AzureEventHubsQuery$ === "object");
assert(typeof AzureEventHubSummary$ === "object");
assert(typeof AzureFlowLogsInfrastructure$ === "object");
assert(typeof AzureFlowLogStorageAccountScope$ === "object");
assert(typeof AzureInfrastructure$ === "object");
assert(typeof AzureManagementGroupsQuery$ === "object");
assert(typeof AzureManagementGroupSummary$ === "object");
assert(typeof AzureQueryScope$ === "object");
assert(typeof AzureRegionsQuery$ === "object");
assert(typeof AzureResourceIdentifierSummary$ === "object");
assert(typeof AzureResourceIdScope$ === "object");
assert(typeof AzureResourceIdsQuery$ === "object");
assert(typeof AzureResourceTypesQuery$ === "object");
assert(typeof AzureScope$ === "object");
assert(typeof AzureScopeItem$ === "object");
assert(typeof AzureSubscriptionScope$ === "object");
assert(typeof AzureSubscriptionsQuery$ === "object");
assert(typeof AzureSubscriptionSummary$ === "object");
assert(typeof AzureTelemetrySourceConfigurationInput$ === "object");
assert(typeof AzureTelemetrySourceConfigurationOutput$ === "object");
assert(typeof CentralizationRule$ === "object");
assert(typeof CentralizationRuleDestination$ === "object");
assert(typeof CentralizationRuleSource$ === "object");
assert(typeof CentralizationRuleSummary$ === "object");
assert(typeof CloudtrailParameters$ === "object");
assert(typeof Condition$ === "object");
assert(typeof ConfigurationSummary$ === "object");
assert(typeof Connector$ === "object");
assert(typeof ConnectorConfiguration$ === "object");
assert(typeof ConnectorQuery$ === "object");
assert(typeof ConnectorQueryResults$ === "object");
assert(typeof ConnectorSummary$ === "object");
assert(typeof CreateCentralizationRuleForOrganizationInput$ === "object");
assert(typeof CreateCentralizationRuleForOrganizationOutput$ === "object");
assert(typeof CreateConnectorInput$ === "object");
assert(typeof CreateConnectorOutput$ === "object");
assert(typeof CreateDatasetIntegrationInput$ === "object");
assert(typeof CreateDatasetIntegrationOutput$ === "object");
assert(typeof CreateS3TableIntegrationInput$ === "object");
assert(typeof CreateS3TableIntegrationOutput$ === "object");
assert(typeof CreateTelemetryPipelineInput$ === "object");
assert(typeof CreateTelemetryPipelineOutput$ === "object");
assert(typeof CreateTelemetryRuleForOrganizationInput$ === "object");
assert(typeof CreateTelemetryRuleForOrganizationOutput$ === "object");
assert(typeof CreateTelemetryRuleInput$ === "object");
assert(typeof CreateTelemetryRuleOutput$ === "object");
assert(typeof DatasetIntegrationSummary$ === "object");
assert(typeof DataSource$ === "object");
assert(typeof DeleteCentralizationRuleForOrganizationInput$ === "object");
assert(typeof DeleteConnectorInput$ === "object");
assert(typeof DeleteConnectorOutput$ === "object");
assert(typeof DeleteDatasetIntegrationInput$ === "object");
assert(typeof DeleteS3TableIntegrationInput$ === "object");
assert(typeof DeleteTelemetryPipelineInput$ === "object");
assert(typeof DeleteTelemetryPipelineOutput$ === "object");
assert(typeof DeleteTelemetryRuleForOrganizationInput$ === "object");
assert(typeof DeleteTelemetryRuleInput$ === "object");
assert(typeof DestinationLogsConfiguration$ === "object");
assert(typeof DestinationMetricsConfiguration$ === "object");
assert(typeof DestinationProfilesConfiguration$ === "object");
assert(typeof ELBLoadBalancerLoggingParameters$ === "object");
assert(typeof Encryption$ === "object");
assert(typeof FieldToMatch$ === "object");
assert(typeof Filter$ === "object");
assert(typeof GetCentralizationRuleForOrganizationInput$ === "object");
assert(typeof GetCentralizationRuleForOrganizationOutput$ === "object");
assert(typeof GetConnectorInput$ === "object");
assert(typeof GetConnectorOutput$ === "object");
assert(typeof GetConnectorTelemetryManifestInput$ === "object");
assert(typeof GetConnectorTelemetryManifestOutput$ === "object");
assert(typeof GetConnectorTelemetrySetupInput$ === "object");
assert(typeof GetConnectorTelemetrySetupOutput$ === "object");
assert(typeof GetDatasetIntegrationInput$ === "object");
assert(typeof GetDatasetIntegrationOutput$ === "object");
assert(typeof GetS3TableIntegrationInput$ === "object");
assert(typeof GetS3TableIntegrationOutput$ === "object");
assert(typeof GetTelemetryEnrichmentStatusOutput$ === "object");
assert(typeof GetTelemetryEvaluationStatusForOrganizationOutput$ === "object");
assert(typeof GetTelemetryEvaluationStatusOutput$ === "object");
assert(typeof GetTelemetryPipelineInput$ === "object");
assert(typeof GetTelemetryPipelineOutput$ === "object");
assert(typeof GetTelemetryRuleForOrganizationInput$ === "object");
assert(typeof GetTelemetryRuleForOrganizationOutput$ === "object");
assert(typeof GetTelemetryRuleInput$ === "object");
assert(typeof GetTelemetryRuleOutput$ === "object");
assert(typeof GetThirdPartyTelemetryEnrichmentInput$ === "object");
assert(typeof GetThirdPartyTelemetryEnrichmentOutput$ === "object");
assert(typeof IntegrationSummary$ === "object");
assert(typeof LabelNameCondition$ === "object");
assert(typeof ListCentralizationRulesForOrganizationInput$ === "object");
assert(typeof ListCentralizationRulesForOrganizationOutput$ === "object");
assert(typeof ListConnectorsInput$ === "object");
assert(typeof ListConnectorsOutput$ === "object");
assert(typeof ListDatasetIntegrationsInput$ === "object");
assert(typeof ListDatasetIntegrationsOutput$ === "object");
assert(typeof ListResourcesByConnectorInput$ === "object");
assert(typeof ListResourcesByConnectorOutput$ === "object");
assert(typeof ListResourceTelemetryForOrganizationInput$ === "object");
assert(typeof ListResourceTelemetryForOrganizationOutput$ === "object");
assert(typeof ListResourceTelemetryInput$ === "object");
assert(typeof ListResourceTelemetryOutput$ === "object");
assert(typeof ListS3TableIntegrationsInput$ === "object");
assert(typeof ListS3TableIntegrationsOutput$ === "object");
assert(typeof ListTagsForResourceInput$ === "object");
assert(typeof ListTagsForResourceOutput$ === "object");
assert(typeof ListTelemetryPipelinesInput$ === "object");
assert(typeof ListTelemetryPipelinesOutput$ === "object");
assert(typeof ListTelemetryRulesForOrganizationInput$ === "object");
assert(typeof ListTelemetryRulesForOrganizationOutput$ === "object");
assert(typeof ListTelemetryRulesInput$ === "object");
assert(typeof ListTelemetryRulesOutput$ === "object");
assert(typeof ListThirdPartyTelemetryEnrichmentsInput$ === "object");
assert(typeof ListThirdPartyTelemetryEnrichmentsOutput$ === "object");
assert(typeof LogDeliveryParameters$ === "object");
assert(typeof LoggingFilter$ === "object");
assert(typeof LogGroupNameConfiguration$ === "object");
assert(typeof LogsBackupConfiguration$ === "object");
assert(typeof LogsEncryptionConfiguration$ === "object");
assert(typeof MetricsBackupConfiguration$ === "object");
assert(typeof MskMonitoringParameters$ === "object");
assert(typeof PipelineOutput$ === "object");
assert(typeof PipelineOutputError$ === "object");
assert(typeof ProfilesBackupConfiguration$ === "object");
assert(typeof PutConnectorTelemetryManifestInput$ === "object");
assert(typeof PutConnectorTelemetryManifestOutput$ === "object");
assert(typeof _Record$ === "object");
assert(typeof RegionStatus$ === "object");
assert(typeof SetupArtifact$ === "object");
assert(typeof SingleHeader$ === "object");
assert(typeof Source$ === "object");
assert(typeof SourceContextGraphConfiguration$ === "object");
assert(typeof SourceLogsConfiguration$ === "object");
assert(typeof SourceMetricsConfiguration$ === "object");
assert(typeof SourceProfilesConfiguration$ === "object");
assert(typeof SourceProgress$ === "object");
assert(typeof StartTelemetryEnrichmentOutput$ === "object");
assert(typeof StartTelemetryEvaluationForOrganizationInput$ === "object");
assert(typeof StartTelemetryEvaluationInput$ === "object");
assert(typeof StartTelemetryPipelineRefreshInput$ === "object");
assert(typeof StartTelemetryPipelineRefreshOutput$ === "object");
assert(typeof StartThirdPartyTelemetryEnrichmentInput$ === "object");
assert(typeof StartThirdPartyTelemetryEnrichmentOutput$ === "object");
assert(typeof StopTelemetryEnrichmentOutput$ === "object");
assert(typeof StopThirdPartyTelemetryEnrichmentInput$ === "object");
assert(typeof StopThirdPartyTelemetryEnrichmentOutput$ === "object");
assert(typeof TagFilter$ === "object");
assert(typeof TagPropagationConfiguration$ === "object");
assert(typeof TagResourceInput$ === "object");
assert(typeof TelemetryConfiguration$ === "object");
assert(typeof TelemetryDestinationConfiguration$ === "object");
assert(typeof TelemetryManifest$ === "object");
assert(typeof TelemetryManifestInfrastructure$ === "object");
assert(typeof TelemetryManifestSource$ === "object");
assert(typeof TelemetryPipeline$ === "object");
assert(typeof TelemetryPipelineConfiguration$ === "object");
assert(typeof TelemetryPipelineStatusReason$ === "object");
assert(typeof TelemetryPipelineSummary$ === "object");
assert(typeof TelemetryRule$ === "object");
assert(typeof TelemetryRuleSummary$ === "object");
assert(typeof TelemetrySourceConfigurationInput$ === "object");
assert(typeof TelemetrySourceConfigurationOutput$ === "object");
assert(typeof TestTelemetryPipelineInput$ === "object");
assert(typeof TestTelemetryPipelineOutput$ === "object");
assert(typeof ThirdPartyTelemetryEnrichmentSummary$ === "object");
assert(typeof UntagResourceInput$ === "object");
assert(typeof UpdateCentralizationRuleForOrganizationInput$ === "object");
assert(typeof UpdateCentralizationRuleForOrganizationOutput$ === "object");
assert(typeof UpdateDatasetIntegrationInput$ === "object");
assert(typeof UpdateDatasetIntegrationOutput$ === "object");
assert(typeof UpdateTelemetryPipelineInput$ === "object");
assert(typeof UpdateTelemetryPipelineOutput$ === "object");
assert(typeof UpdateTelemetryRuleForOrganizationInput$ === "object");
assert(typeof UpdateTelemetryRuleForOrganizationOutput$ === "object");
assert(typeof UpdateTelemetryRuleInput$ === "object");
assert(typeof UpdateTelemetryRuleOutput$ === "object");
assert(typeof ValidateTelemetryPipelineConfigurationInput$ === "object");
assert(typeof ValidateTelemetryPipelineConfigurationOutput$ === "object");
assert(typeof ValidationError$ === "object");
assert(typeof VPCFlowLogParameters$ === "object");
assert(typeof WAFLoggingParameters$ === "object");
// enums
assert(typeof Action === "object");
assert(typeof AzureEventHubTier === "object");
assert(typeof AzureTelemetryType === "object");
assert(typeof CentralizationFailureReason === "object");
assert(typeof CentralizeWithDataProtection === "object");
assert(typeof ConnectorProvider === "object");
assert(typeof ContextGraphStatus === "object");
assert(typeof DeletionProtection === "object");
assert(typeof DestinationType === "object");
assert(typeof EncryptedLogGroupStrategy === "object");
assert(typeof EncryptionConflictResolutionStrategy === "object");
assert(typeof EncryptionScope === "object");
assert(typeof EncryptionStrategy === "object");
assert(typeof FilterBehavior === "object");
assert(typeof FilterRequirement === "object");
assert(typeof IntegrationStatus === "object");
assert(typeof LogType === "object");
assert(typeof MskEnhancedMonitoringLevel === "object");
assert(typeof OutputFormat === "object");
assert(typeof RecordFormat === "object");
assert(typeof ResourceType === "object");
assert(typeof RuleHealth === "object");
assert(typeof SetupFormat === "object");
assert(typeof SignalType === "object");
assert(typeof SSEAlgorithm === "object");
assert(typeof Status === "object");
assert(typeof TagConflictResolutionStrategy === "object");
assert(typeof TagPropagationFailureReason === "object");
assert(typeof TagPropagationStatus === "object");
assert(typeof TelemetryEnrichmentStatus === "object");
assert(typeof TelemetryPipelineStatus === "object");
assert(typeof TelemetrySourceType === "object");
assert(typeof TelemetryState === "object");
assert(typeof TelemetryType === "object");
assert(typeof ThirdPartyTelemetryEnrichmentStatus === "object");
assert(typeof ThirdPartyTelemetrySource === "object");
assert(typeof WAFLogType === "object");
// errors
assert(AccessDeniedException.prototype instanceof ObservabilityAdminServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof ObservabilityAdminServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof ObservabilityAdminServiceException);
assert(typeof InternalServerException$ === "object");
assert(InvalidStateException.prototype instanceof ObservabilityAdminServiceException);
assert(typeof InvalidStateException$ === "object");
assert(ResourceNotFoundException.prototype instanceof ObservabilityAdminServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof ObservabilityAdminServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(TooManyRequestsException.prototype instanceof ObservabilityAdminServiceException);
assert(typeof TooManyRequestsException$ === "object");
assert(ValidationException.prototype instanceof ObservabilityAdminServiceException);
assert(typeof ValidationException$ === "object");
assert(ObservabilityAdminServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListCentralizationRulesForOrganization === "function");
assert(typeof paginateListConnectors === "function");
assert(typeof paginateListDatasetIntegrations === "function");
assert(typeof paginateListResourceTelemetry === "function");
assert(typeof paginateListResourceTelemetryForOrganization === "function");
assert(typeof paginateListS3TableIntegrations === "function");
assert(typeof paginateListTelemetryPipelines === "function");
assert(typeof paginateListTelemetryRules === "function");
assert(typeof paginateListTelemetryRulesForOrganization === "function");
assert(typeof paginateListThirdPartyTelemetryEnrichments === "function");
console.log(`ObservabilityAdmin index test passed.`);
