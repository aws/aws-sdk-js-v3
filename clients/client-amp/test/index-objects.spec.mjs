import {
  AccessDeniedException,
  AlertManagerDefinitionStatusCode,
  Amp,
  AmpClient,
  AmpServiceException,
  AnomalyDetectorStatusCode,
  ConflictException,
  CreateAlertManagerDefinitionCommand,
  CreateAnomalyDetectorCommand,
  CreateLoggingConfigurationCommand,
  CreateQueryLoggingConfigurationCommand,
  CreateRuleGroupsNamespaceCommand,
  CreateScraperCommand,
  CreateWorkspaceCommand,
  DeleteAlertManagerDefinitionCommand,
  DeleteAnomalyDetectorCommand,
  DeleteLoggingConfigurationCommand,
  DeleteQueryLoggingConfigurationCommand,
  DeleteResourcePolicyCommand,
  DeleteRuleGroupsNamespaceCommand,
  DeleteScraperCommand,
  DeleteScraperLoggingConfigurationCommand,
  DeleteWorkspaceCommand,
  DescribeAlertManagerDefinitionCommand,
  DescribeAnomalyDetectorCommand,
  DescribeLoggingConfigurationCommand,
  DescribeQueryLoggingConfigurationCommand,
  DescribeResourcePolicyCommand,
  DescribeRuleGroupsNamespaceCommand,
  DescribeScraperCommand,
  DescribeScraperLoggingConfigurationCommand,
  DescribeWorkspaceCommand,
  DescribeWorkspaceConfigurationCommand,
  GetDefaultScraperConfigurationCommand,
  InternalServerException,
  ListAnomalyDetectorsCommand,
  ListRuleGroupsNamespacesCommand,
  ListScrapersCommand,
  ListTagsForResourceCommand,
  ListWorkspacesCommand,
  LoggingConfigurationStatusCode,
  PutAlertManagerDefinitionCommand,
  PutAnomalyDetectorCommand,
  PutResourcePolicyCommand,
  PutRuleGroupsNamespaceCommand,
  QueryLoggingConfigurationStatusCode,
  ResourceNotFoundException,
  RuleGroupsNamespaceStatusCode,
  ScraperComponentType,
  ScraperLoggingConfigurationStatusCode,
  ScraperStatusCode,
  ServiceQuotaExceededException,
  TagResourceCommand,
  ThrottlingException,
  UntagResourceCommand,
  UpdateLoggingConfigurationCommand,
  UpdateQueryLoggingConfigurationCommand,
  UpdateScraperCommand,
  UpdateScraperLoggingConfigurationCommand,
  UpdateWorkspaceAliasCommand,
  UpdateWorkspaceConfigurationCommand,
  ValidationException,
  ValidationExceptionReason,
  WorkspaceConfigurationStatusCode,
  WorkspacePolicyStatusCode,
  WorkspaceStatusCode,
  paginateListAnomalyDetectors,
  paginateListRuleGroupsNamespaces,
  paginateListScrapers,
  paginateListWorkspaces,
  waitForAnomalyDetectorActive,
  waitForAnomalyDetectorDeleted,
  waitForScraperActive,
  waitForScraperDeleted,
  waitForWorkspaceActive,
  waitForWorkspaceDeleted,
  waitUntilAnomalyDetectorActive,
  waitUntilAnomalyDetectorDeleted,
  waitUntilScraperActive,
  waitUntilScraperDeleted,
  waitUntilWorkspaceActive,
  waitUntilWorkspaceDeleted,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof AmpClient === "function");
assert(typeof Amp === "function");
// commands
assert(typeof CreateAlertManagerDefinitionCommand === "function");
assert(typeof CreateAnomalyDetectorCommand === "function");
assert(typeof CreateLoggingConfigurationCommand === "function");
assert(typeof CreateQueryLoggingConfigurationCommand === "function");
assert(typeof CreateRuleGroupsNamespaceCommand === "function");
assert(typeof CreateScraperCommand === "function");
assert(typeof CreateWorkspaceCommand === "function");
assert(typeof DeleteAlertManagerDefinitionCommand === "function");
assert(typeof DeleteAnomalyDetectorCommand === "function");
assert(typeof DeleteLoggingConfigurationCommand === "function");
assert(typeof DeleteQueryLoggingConfigurationCommand === "function");
assert(typeof DeleteResourcePolicyCommand === "function");
assert(typeof DeleteRuleGroupsNamespaceCommand === "function");
assert(typeof DeleteScraperCommand === "function");
assert(typeof DeleteScraperLoggingConfigurationCommand === "function");
assert(typeof DeleteWorkspaceCommand === "function");
assert(typeof DescribeAlertManagerDefinitionCommand === "function");
assert(typeof DescribeAnomalyDetectorCommand === "function");
assert(typeof DescribeLoggingConfigurationCommand === "function");
assert(typeof DescribeQueryLoggingConfigurationCommand === "function");
assert(typeof DescribeResourcePolicyCommand === "function");
assert(typeof DescribeRuleGroupsNamespaceCommand === "function");
assert(typeof DescribeScraperCommand === "function");
assert(typeof DescribeScraperLoggingConfigurationCommand === "function");
assert(typeof DescribeWorkspaceCommand === "function");
assert(typeof DescribeWorkspaceConfigurationCommand === "function");
assert(typeof GetDefaultScraperConfigurationCommand === "function");
assert(typeof ListAnomalyDetectorsCommand === "function");
assert(typeof ListRuleGroupsNamespacesCommand === "function");
assert(typeof ListScrapersCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListWorkspacesCommand === "function");
assert(typeof PutAlertManagerDefinitionCommand === "function");
assert(typeof PutAnomalyDetectorCommand === "function");
assert(typeof PutResourcePolicyCommand === "function");
assert(typeof PutRuleGroupsNamespaceCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateLoggingConfigurationCommand === "function");
assert(typeof UpdateQueryLoggingConfigurationCommand === "function");
assert(typeof UpdateScraperCommand === "function");
assert(typeof UpdateScraperLoggingConfigurationCommand === "function");
assert(typeof UpdateWorkspaceAliasCommand === "function");
assert(typeof UpdateWorkspaceConfigurationCommand === "function");
// enums
assert(typeof AlertManagerDefinitionStatusCode === "object");
assert(typeof AnomalyDetectorStatusCode === "object");
assert(typeof LoggingConfigurationStatusCode === "object");
assert(typeof QueryLoggingConfigurationStatusCode === "object");
assert(typeof RuleGroupsNamespaceStatusCode === "object");
assert(typeof ScraperComponentType === "object");
assert(typeof ScraperLoggingConfigurationStatusCode === "object");
assert(typeof ScraperStatusCode === "object");
assert(typeof ValidationExceptionReason === "object");
assert(typeof WorkspaceConfigurationStatusCode === "object");
assert(typeof WorkspacePolicyStatusCode === "object");
assert(typeof WorkspaceStatusCode === "object");
// errors
assert(AccessDeniedException.prototype instanceof AmpServiceException);
assert(ConflictException.prototype instanceof AmpServiceException);
assert(InternalServerException.prototype instanceof AmpServiceException);
assert(ResourceNotFoundException.prototype instanceof AmpServiceException);
assert(ServiceQuotaExceededException.prototype instanceof AmpServiceException);
assert(ThrottlingException.prototype instanceof AmpServiceException);
assert(ValidationException.prototype instanceof AmpServiceException);
assert(AmpServiceException.prototype instanceof Error);
// waiters
assert(typeof waitForAnomalyDetectorActive === "function");
assert(typeof waitForAnomalyDetectorDeleted === "function");
assert(typeof waitForScraperActive === "function");
assert(typeof waitForScraperDeleted === "function");
assert(typeof waitForWorkspaceActive === "function");
assert(typeof waitForWorkspaceDeleted === "function");
assert(typeof waitUntilAnomalyDetectorActive === "function");
assert(typeof waitUntilAnomalyDetectorDeleted === "function");
assert(typeof waitUntilScraperActive === "function");
assert(typeof waitUntilScraperDeleted === "function");
assert(typeof waitUntilWorkspaceActive === "function");
assert(typeof waitUntilWorkspaceDeleted === "function");
// paginators
assert(typeof paginateListAnomalyDetectors === "function");
assert(typeof paginateListRuleGroupsNamespaces === "function");
assert(typeof paginateListScrapers === "function");
assert(typeof paginateListWorkspaces === "function");
console.log(`Amp index test passed.`);
