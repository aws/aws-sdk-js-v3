import {
  CentralizationFailureReason,
  CreateCentralizationRuleForOrganizationCommand,
  CreateTelemetryRuleCommand,
  CreateTelemetryRuleForOrganizationCommand,
  DeleteCentralizationRuleForOrganizationCommand,
  DeleteTelemetryRuleCommand,
  DeleteTelemetryRuleForOrganizationCommand,
  DestinationType,
  EncryptedLogGroupStrategy,
  EncryptionConflictResolutionStrategy,
  EncryptionStrategy,
  GetCentralizationRuleForOrganizationCommand,
  GetTelemetryEnrichmentStatusCommand,
  GetTelemetryEvaluationStatusCommand,
  GetTelemetryEvaluationStatusForOrganizationCommand,
  GetTelemetryRuleCommand,
  GetTelemetryRuleForOrganizationCommand,
  ListCentralizationRulesForOrganizationCommand,
  ListResourceTelemetryCommand,
  ListResourceTelemetryForOrganizationCommand,
  ListTagsForResourceCommand,
  ListTelemetryRulesCommand,
  ListTelemetryRulesForOrganizationCommand,
  ObservabilityAdmin,
  ObservabilityAdminClient,
  ObservabilityAdminServiceException,
  ResourceType,
  RuleHealth,
  StartTelemetryEnrichmentCommand,
  StartTelemetryEvaluationCommand,
  StartTelemetryEvaluationForOrganizationCommand,
  Status,
  StopTelemetryEnrichmentCommand,
  StopTelemetryEvaluationCommand,
  StopTelemetryEvaluationForOrganizationCommand,
  TagResourceCommand,
  TelemetryEnrichmentStatus,
  TelemetryState,
  TelemetryType,
  UntagResourceCommand,
  UpdateCentralizationRuleForOrganizationCommand,
  UpdateTelemetryRuleCommand,
  UpdateTelemetryRuleForOrganizationCommand,
  paginateListCentralizationRulesForOrganization,
  paginateListResourceTelemetry,
  paginateListResourceTelemetryForOrganization,
  paginateListTelemetryRules,
  paginateListTelemetryRulesForOrganization,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof ObservabilityAdminClient === "function")
assert(typeof ObservabilityAdmin === "function")
// commands
assert(typeof CreateCentralizationRuleForOrganizationCommand === "function")
assert(typeof CreateTelemetryRuleCommand === "function")
assert(typeof CreateTelemetryRuleForOrganizationCommand === "function")
assert(typeof DeleteCentralizationRuleForOrganizationCommand === "function")
assert(typeof DeleteTelemetryRuleCommand === "function")
assert(typeof DeleteTelemetryRuleForOrganizationCommand === "function")
assert(typeof GetCentralizationRuleForOrganizationCommand === "function")
assert(typeof GetTelemetryEnrichmentStatusCommand === "function")
assert(typeof GetTelemetryEvaluationStatusCommand === "function")
assert(typeof GetTelemetryEvaluationStatusForOrganizationCommand === "function")
assert(typeof GetTelemetryRuleCommand === "function")
assert(typeof GetTelemetryRuleForOrganizationCommand === "function")
assert(typeof ListCentralizationRulesForOrganizationCommand === "function")
assert(typeof ListResourceTelemetryCommand === "function")
assert(typeof ListResourceTelemetryForOrganizationCommand === "function")
assert(typeof ListTagsForResourceCommand === "function")
assert(typeof ListTelemetryRulesCommand === "function")
assert(typeof ListTelemetryRulesForOrganizationCommand === "function")
assert(typeof StartTelemetryEnrichmentCommand === "function")
assert(typeof StartTelemetryEvaluationCommand === "function")
assert(typeof StartTelemetryEvaluationForOrganizationCommand === "function")
assert(typeof StopTelemetryEnrichmentCommand === "function")
assert(typeof StopTelemetryEvaluationCommand === "function")
assert(typeof StopTelemetryEvaluationForOrganizationCommand === "function")
assert(typeof TagResourceCommand === "function")
assert(typeof UntagResourceCommand === "function")
assert(typeof UpdateCentralizationRuleForOrganizationCommand === "function")
assert(typeof UpdateTelemetryRuleCommand === "function")
assert(typeof UpdateTelemetryRuleForOrganizationCommand === "function")
// enums
assert(typeof CentralizationFailureReason === "object");
assert(typeof DestinationType === "object");
assert(typeof EncryptedLogGroupStrategy === "object");
assert(typeof EncryptionConflictResolutionStrategy === "object");
assert(typeof EncryptionStrategy === "object");
assert(typeof ResourceType === "object");
assert(typeof RuleHealth === "object");
assert(typeof Status === "object");
assert(typeof TelemetryEnrichmentStatus === "object");
assert(typeof TelemetryState === "object");
assert(typeof TelemetryType === "object");
// errors
assert(ObservabilityAdminServiceException.prototype instanceof Error)
// paginators
assert(typeof paginateListCentralizationRulesForOrganization === "function")
assert(typeof paginateListResourceTelemetry === "function")
assert(typeof paginateListResourceTelemetryForOrganization === "function")
assert(typeof paginateListTelemetryRules === "function")
assert(typeof paginateListTelemetryRulesForOrganization === "function")
console.log(`ObservabilityAdmin index test passed.`);
