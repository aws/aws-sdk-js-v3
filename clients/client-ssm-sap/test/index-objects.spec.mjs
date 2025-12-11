import {
  AllocationType,
  ApplicationDiscoveryStatus,
  ApplicationStatus,
  ApplicationType,
  BackintMode,
  ClusterStatus,
  ComponentStatus,
  ComponentType,
  ConfigurationCheckOperationListingMode,
  ConfigurationCheckType,
  ConflictException,
  ConnectedEntityType,
  CredentialType,
  DatabaseConnectionMethod,
  DatabaseStatus,
  DatabaseType,
  DeleteResourcePermissionCommand,
  DeregisterApplicationCommand,
  FilterOperator,
  GetApplicationCommand,
  GetComponentCommand,
  GetConfigurationCheckOperationCommand,
  GetDatabaseCommand,
  GetOperationCommand,
  GetResourcePermissionCommand,
  HostRole,
  InternalServerException,
  ListApplicationsCommand,
  ListComponentsCommand,
  ListConfigurationCheckDefinitionsCommand,
  ListConfigurationCheckOperationsCommand,
  ListDatabasesCommand,
  ListOperationEventsCommand,
  ListOperationsCommand,
  ListSubCheckResultsCommand,
  ListSubCheckRuleResultsCommand,
  ListTagsForResourceCommand,
  OperationEventStatus,
  OperationMode,
  OperationStatus,
  PermissionActionType,
  PutResourcePermissionCommand,
  RegisterApplicationCommand,
  ReplicationMode,
  ResourceNotFoundException,
  RuleResultStatus,
  SsmSap,
  SsmSapClient,
  SsmSapServiceException,
  StartApplicationCommand,
  StartApplicationRefreshCommand,
  StartConfigurationChecksCommand,
  StopApplicationCommand,
  TagResourceCommand,
  UnauthorizedException,
  UntagResourceCommand,
  UpdateApplicationSettingsCommand,
  ValidationException,
  paginateListApplications,
  paginateListComponents,
  paginateListConfigurationCheckDefinitions,
  paginateListConfigurationCheckOperations,
  paginateListDatabases,
  paginateListOperationEvents,
  paginateListOperations,
  paginateListSubCheckResults,
  paginateListSubCheckRuleResults,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof SsmSapClient === "function");
assert(typeof SsmSap === "function");
// commands
assert(typeof DeleteResourcePermissionCommand === "function");
assert(typeof DeregisterApplicationCommand === "function");
assert(typeof GetApplicationCommand === "function");
assert(typeof GetComponentCommand === "function");
assert(typeof GetConfigurationCheckOperationCommand === "function");
assert(typeof GetDatabaseCommand === "function");
assert(typeof GetOperationCommand === "function");
assert(typeof GetResourcePermissionCommand === "function");
assert(typeof ListApplicationsCommand === "function");
assert(typeof ListComponentsCommand === "function");
assert(typeof ListConfigurationCheckDefinitionsCommand === "function");
assert(typeof ListConfigurationCheckOperationsCommand === "function");
assert(typeof ListDatabasesCommand === "function");
assert(typeof ListOperationEventsCommand === "function");
assert(typeof ListOperationsCommand === "function");
assert(typeof ListSubCheckResultsCommand === "function");
assert(typeof ListSubCheckRuleResultsCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof PutResourcePermissionCommand === "function");
assert(typeof RegisterApplicationCommand === "function");
assert(typeof StartApplicationCommand === "function");
assert(typeof StartApplicationRefreshCommand === "function");
assert(typeof StartConfigurationChecksCommand === "function");
assert(typeof StopApplicationCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateApplicationSettingsCommand === "function");
// enums
assert(typeof AllocationType === "object");
assert(typeof ApplicationDiscoveryStatus === "object");
assert(typeof ApplicationStatus === "object");
assert(typeof ApplicationType === "object");
assert(typeof BackintMode === "object");
assert(typeof ClusterStatus === "object");
assert(typeof ComponentStatus === "object");
assert(typeof ComponentType === "object");
assert(typeof ConfigurationCheckOperationListingMode === "object");
assert(typeof ConfigurationCheckType === "object");
assert(typeof ConnectedEntityType === "object");
assert(typeof CredentialType === "object");
assert(typeof DatabaseConnectionMethod === "object");
assert(typeof DatabaseStatus === "object");
assert(typeof DatabaseType === "object");
assert(typeof FilterOperator === "object");
assert(typeof HostRole === "object");
assert(typeof OperationEventStatus === "object");
assert(typeof OperationMode === "object");
assert(typeof OperationStatus === "object");
assert(typeof PermissionActionType === "object");
assert(typeof ReplicationMode === "object");
assert(typeof RuleResultStatus === "object");
// errors
assert(ConflictException.prototype instanceof SsmSapServiceException);
assert(InternalServerException.prototype instanceof SsmSapServiceException);
assert(ResourceNotFoundException.prototype instanceof SsmSapServiceException);
assert(UnauthorizedException.prototype instanceof SsmSapServiceException);
assert(ValidationException.prototype instanceof SsmSapServiceException);
assert(SsmSapServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListApplications === "function");
assert(typeof paginateListComponents === "function");
assert(typeof paginateListConfigurationCheckDefinitions === "function");
assert(typeof paginateListConfigurationCheckOperations === "function");
assert(typeof paginateListDatabases === "function");
assert(typeof paginateListOperationEvents === "function");
assert(typeof paginateListOperations === "function");
assert(typeof paginateListSubCheckResults === "function");
assert(typeof paginateListSubCheckRuleResults === "function");
console.log(`SsmSap index test passed.`);
