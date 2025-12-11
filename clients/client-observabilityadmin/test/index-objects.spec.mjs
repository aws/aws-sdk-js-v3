import {
  AccessDeniedException,
  Action,
  CentralizationFailureReason,
  ConflictException,
  CreateCentralizationRuleForOrganizationCommand,
  CreateS3TableIntegrationCommand,
  CreateTelemetryPipelineCommand,
  CreateTelemetryRuleCommand,
  CreateTelemetryRuleForOrganizationCommand,
  DeleteCentralizationRuleForOrganizationCommand,
  DeleteS3TableIntegrationCommand,
  DeleteTelemetryPipelineCommand,
  DeleteTelemetryRuleCommand,
  DeleteTelemetryRuleForOrganizationCommand,
  DestinationType,
  EncryptedLogGroupStrategy,
  EncryptionConflictResolutionStrategy,
  EncryptionStrategy,
  FilterBehavior,
  FilterRequirement,
  GetCentralizationRuleForOrganizationCommand,
  GetS3TableIntegrationCommand,
  GetTelemetryEnrichmentStatusCommand,
  GetTelemetryEvaluationStatusCommand,
  GetTelemetryEvaluationStatusForOrganizationCommand,
  GetTelemetryPipelineCommand,
  GetTelemetryRuleCommand,
  GetTelemetryRuleForOrganizationCommand,
  IntegrationStatus,
  InternalServerException,
  InvalidStateException,
  ListCentralizationRulesForOrganizationCommand,
  ListResourceTelemetryCommand,
  ListResourceTelemetryForOrganizationCommand,
  ListS3TableIntegrationsCommand,
  ListTagsForResourceCommand,
  ListTelemetryPipelinesCommand,
  ListTelemetryRulesCommand,
  ListTelemetryRulesForOrganizationCommand,
  LogType,
  ObservabilityAdmin,
  ObservabilityAdminClient,
  ObservabilityAdminServiceException,
  OutputFormat,
  RecordFormat,
  ResourceNotFoundException,
  ResourceType,
  RuleHealth,
  SSEAlgorithm,
  ServiceQuotaExceededException,
  StartTelemetryEnrichmentCommand,
  StartTelemetryEvaluationCommand,
  StartTelemetryEvaluationForOrganizationCommand,
  Status,
  StopTelemetryEnrichmentCommand,
  StopTelemetryEvaluationCommand,
  StopTelemetryEvaluationForOrganizationCommand,
  TagResourceCommand,
  TelemetryEnrichmentStatus,
  TelemetryPipelineStatus,
  TelemetrySourceType,
  TelemetryState,
  TelemetryType,
  TestTelemetryPipelineCommand,
  TooManyRequestsException,
  UntagResourceCommand,
  UpdateCentralizationRuleForOrganizationCommand,
  UpdateTelemetryPipelineCommand,
  UpdateTelemetryRuleCommand,
  UpdateTelemetryRuleForOrganizationCommand,
  ValidateTelemetryPipelineConfigurationCommand,
  ValidationException,
  WAFLogType,
  paginateListCentralizationRulesForOrganization,
  paginateListResourceTelemetry,
  paginateListResourceTelemetryForOrganization,
  paginateListS3TableIntegrations,
  paginateListTelemetryPipelines,
  paginateListTelemetryRules,
  paginateListTelemetryRulesForOrganization,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof ObservabilityAdminClient === "function");
assert(typeof ObservabilityAdmin === "function");
// commands
assert(typeof CreateCentralizationRuleForOrganizationCommand === "function");
assert(typeof CreateS3TableIntegrationCommand === "function");
assert(typeof CreateTelemetryPipelineCommand === "function");
assert(typeof CreateTelemetryRuleCommand === "function");
assert(typeof CreateTelemetryRuleForOrganizationCommand === "function");
assert(typeof DeleteCentralizationRuleForOrganizationCommand === "function");
assert(typeof DeleteS3TableIntegrationCommand === "function");
assert(typeof DeleteTelemetryPipelineCommand === "function");
assert(typeof DeleteTelemetryRuleCommand === "function");
assert(typeof DeleteTelemetryRuleForOrganizationCommand === "function");
assert(typeof GetCentralizationRuleForOrganizationCommand === "function");
assert(typeof GetS3TableIntegrationCommand === "function");
assert(typeof GetTelemetryEnrichmentStatusCommand === "function");
assert(typeof GetTelemetryEvaluationStatusCommand === "function");
assert(typeof GetTelemetryEvaluationStatusForOrganizationCommand === "function");
assert(typeof GetTelemetryPipelineCommand === "function");
assert(typeof GetTelemetryRuleCommand === "function");
assert(typeof GetTelemetryRuleForOrganizationCommand === "function");
assert(typeof ListCentralizationRulesForOrganizationCommand === "function");
assert(typeof ListResourceTelemetryCommand === "function");
assert(typeof ListResourceTelemetryForOrganizationCommand === "function");
assert(typeof ListS3TableIntegrationsCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTelemetryPipelinesCommand === "function");
assert(typeof ListTelemetryRulesCommand === "function");
assert(typeof ListTelemetryRulesForOrganizationCommand === "function");
assert(typeof StartTelemetryEnrichmentCommand === "function");
assert(typeof StartTelemetryEvaluationCommand === "function");
assert(typeof StartTelemetryEvaluationForOrganizationCommand === "function");
assert(typeof StopTelemetryEnrichmentCommand === "function");
assert(typeof StopTelemetryEvaluationCommand === "function");
assert(typeof StopTelemetryEvaluationForOrganizationCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof TestTelemetryPipelineCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateCentralizationRuleForOrganizationCommand === "function");
assert(typeof UpdateTelemetryPipelineCommand === "function");
assert(typeof UpdateTelemetryRuleCommand === "function");
assert(typeof UpdateTelemetryRuleForOrganizationCommand === "function");
assert(typeof ValidateTelemetryPipelineConfigurationCommand === "function");
// enums
assert(typeof Action === "object");
assert(typeof CentralizationFailureReason === "object");
assert(typeof DestinationType === "object");
assert(typeof EncryptedLogGroupStrategy === "object");
assert(typeof EncryptionConflictResolutionStrategy === "object");
assert(typeof EncryptionStrategy === "object");
assert(typeof FilterBehavior === "object");
assert(typeof FilterRequirement === "object");
assert(typeof IntegrationStatus === "object");
assert(typeof LogType === "object");
assert(typeof OutputFormat === "object");
assert(typeof RecordFormat === "object");
assert(typeof ResourceType === "object");
assert(typeof RuleHealth === "object");
assert(typeof SSEAlgorithm === "object");
assert(typeof Status === "object");
assert(typeof TelemetryEnrichmentStatus === "object");
assert(typeof TelemetryPipelineStatus === "object");
assert(typeof TelemetrySourceType === "object");
assert(typeof TelemetryState === "object");
assert(typeof TelemetryType === "object");
assert(typeof WAFLogType === "object");
// errors
assert(AccessDeniedException.prototype instanceof ObservabilityAdminServiceException);
assert(ConflictException.prototype instanceof ObservabilityAdminServiceException);
assert(InternalServerException.prototype instanceof ObservabilityAdminServiceException);
assert(InvalidStateException.prototype instanceof ObservabilityAdminServiceException);
assert(ResourceNotFoundException.prototype instanceof ObservabilityAdminServiceException);
assert(ServiceQuotaExceededException.prototype instanceof ObservabilityAdminServiceException);
assert(TooManyRequestsException.prototype instanceof ObservabilityAdminServiceException);
assert(ValidationException.prototype instanceof ObservabilityAdminServiceException);
assert(ObservabilityAdminServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListCentralizationRulesForOrganization === "function");
assert(typeof paginateListResourceTelemetry === "function");
assert(typeof paginateListResourceTelemetryForOrganization === "function");
assert(typeof paginateListS3TableIntegrations === "function");
assert(typeof paginateListTelemetryPipelines === "function");
assert(typeof paginateListTelemetryRules === "function");
assert(typeof paginateListTelemetryRulesForOrganization === "function");
console.log(`ObservabilityAdmin index test passed.`);
