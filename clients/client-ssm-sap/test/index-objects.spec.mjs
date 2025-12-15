import {
  AllocationType,
  Application$,
  ApplicationCredential$,
  ApplicationDiscoveryStatus,
  ApplicationStatus,
  ApplicationSummary$,
  ApplicationType,
  AssociatedHost$,
  BackintConfig$,
  BackintMode,
  ClusterStatus,
  Component$,
  ComponentInfo$,
  ComponentStatus,
  ComponentSummary$,
  ComponentType,
  ConfigurationCheckDefinition$,
  ConfigurationCheckOperation$,
  ConfigurationCheckOperationListingMode,
  ConfigurationCheckType,
  ConflictException,
  ConflictException$,
  ConnectedEntityType,
  CredentialType,
  Database$,
  DatabaseConnection$,
  DatabaseConnectionMethod,
  DatabaseStatus,
  DatabaseSummary$,
  DatabaseType,
  DeleteResourcePermission$,
  DeleteResourcePermissionCommand,
  DeleteResourcePermissionInput$,
  DeleteResourcePermissionOutput$,
  DeregisterApplication$,
  DeregisterApplicationCommand,
  DeregisterApplicationInput$,
  DeregisterApplicationOutput$,
  Filter$,
  FilterOperator,
  GetApplication$,
  GetApplicationCommand,
  GetApplicationInput$,
  GetApplicationOutput$,
  GetComponent$,
  GetComponentCommand,
  GetComponentInput$,
  GetComponentOutput$,
  GetConfigurationCheckOperation$,
  GetConfigurationCheckOperationCommand,
  GetConfigurationCheckOperationInput$,
  GetConfigurationCheckOperationOutput$,
  GetDatabase$,
  GetDatabaseCommand,
  GetDatabaseInput$,
  GetDatabaseOutput$,
  GetOperation$,
  GetOperationCommand,
  GetOperationInput$,
  GetOperationOutput$,
  GetResourcePermission$,
  GetResourcePermissionCommand,
  GetResourcePermissionInput$,
  GetResourcePermissionOutput$,
  Host$,
  HostRole,
  InternalServerException,
  InternalServerException$,
  IpAddressMember$,
  ListApplications$,
  ListApplicationsCommand,
  ListApplicationsInput$,
  ListApplicationsOutput$,
  ListComponents$,
  ListComponentsCommand,
  ListComponentsInput$,
  ListComponentsOutput$,
  ListConfigurationCheckDefinitions$,
  ListConfigurationCheckDefinitionsCommand,
  ListConfigurationCheckDefinitionsInput$,
  ListConfigurationCheckDefinitionsOutput$,
  ListConfigurationCheckOperations$,
  ListConfigurationCheckOperationsCommand,
  ListConfigurationCheckOperationsInput$,
  ListConfigurationCheckOperationsOutput$,
  ListDatabases$,
  ListDatabasesCommand,
  ListDatabasesInput$,
  ListDatabasesOutput$,
  ListOperationEvents$,
  ListOperationEventsCommand,
  ListOperationEventsInput$,
  ListOperationEventsOutput$,
  ListOperations$,
  ListOperationsCommand,
  ListOperationsInput$,
  ListOperationsOutput$,
  ListSubCheckResults$,
  ListSubCheckResultsCommand,
  ListSubCheckResultsInput$,
  ListSubCheckResultsOutput$,
  ListSubCheckRuleResults$,
  ListSubCheckRuleResultsCommand,
  ListSubCheckRuleResultsInput$,
  ListSubCheckRuleResultsOutput$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  Operation$,
  OperationEvent$,
  OperationEventStatus,
  OperationMode,
  OperationStatus,
  PermissionActionType,
  PutResourcePermission$,
  PutResourcePermissionCommand,
  PutResourcePermissionInput$,
  PutResourcePermissionOutput$,
  RegisterApplication$,
  RegisterApplicationCommand,
  RegisterApplicationInput$,
  RegisterApplicationOutput$,
  ReplicationMode,
  Resilience$,
  Resource$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  RuleResult$,
  RuleResultStatus,
  RuleStatusCounts$,
  SsmSap,
  SsmSapClient,
  SsmSapServiceException,
  StartApplication$,
  StartApplicationCommand,
  StartApplicationInput$,
  StartApplicationOutput$,
  StartApplicationRefresh$,
  StartApplicationRefreshCommand,
  StartApplicationRefreshInput$,
  StartApplicationRefreshOutput$,
  StartConfigurationChecks$,
  StartConfigurationChecksCommand,
  StartConfigurationChecksInput$,
  StartConfigurationChecksOutput$,
  StopApplication$,
  StopApplicationCommand,
  StopApplicationInput$,
  StopApplicationOutput$,
  SubCheckResult$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  UnauthorizedException,
  UnauthorizedException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateApplicationSettings$,
  UpdateApplicationSettingsCommand,
  UpdateApplicationSettingsInput$,
  UpdateApplicationSettingsOutput$,
  ValidationException,
  ValidationException$,
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
assert(typeof DeleteResourcePermission$ === "object");
assert(typeof DeregisterApplicationCommand === "function");
assert(typeof DeregisterApplication$ === "object");
assert(typeof GetApplicationCommand === "function");
assert(typeof GetApplication$ === "object");
assert(typeof GetComponentCommand === "function");
assert(typeof GetComponent$ === "object");
assert(typeof GetConfigurationCheckOperationCommand === "function");
assert(typeof GetConfigurationCheckOperation$ === "object");
assert(typeof GetDatabaseCommand === "function");
assert(typeof GetDatabase$ === "object");
assert(typeof GetOperationCommand === "function");
assert(typeof GetOperation$ === "object");
assert(typeof GetResourcePermissionCommand === "function");
assert(typeof GetResourcePermission$ === "object");
assert(typeof ListApplicationsCommand === "function");
assert(typeof ListApplications$ === "object");
assert(typeof ListComponentsCommand === "function");
assert(typeof ListComponents$ === "object");
assert(typeof ListConfigurationCheckDefinitionsCommand === "function");
assert(typeof ListConfigurationCheckDefinitions$ === "object");
assert(typeof ListConfigurationCheckOperationsCommand === "function");
assert(typeof ListConfigurationCheckOperations$ === "object");
assert(typeof ListDatabasesCommand === "function");
assert(typeof ListDatabases$ === "object");
assert(typeof ListOperationEventsCommand === "function");
assert(typeof ListOperationEvents$ === "object");
assert(typeof ListOperationsCommand === "function");
assert(typeof ListOperations$ === "object");
assert(typeof ListSubCheckResultsCommand === "function");
assert(typeof ListSubCheckResults$ === "object");
assert(typeof ListSubCheckRuleResultsCommand === "function");
assert(typeof ListSubCheckRuleResults$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof PutResourcePermissionCommand === "function");
assert(typeof PutResourcePermission$ === "object");
assert(typeof RegisterApplicationCommand === "function");
assert(typeof RegisterApplication$ === "object");
assert(typeof StartApplicationCommand === "function");
assert(typeof StartApplication$ === "object");
assert(typeof StartApplicationRefreshCommand === "function");
assert(typeof StartApplicationRefresh$ === "object");
assert(typeof StartConfigurationChecksCommand === "function");
assert(typeof StartConfigurationChecks$ === "object");
assert(typeof StopApplicationCommand === "function");
assert(typeof StopApplication$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateApplicationSettingsCommand === "function");
assert(typeof UpdateApplicationSettings$ === "object");
// structural schemas
assert(typeof Application$ === "object");
assert(typeof ApplicationCredential$ === "object");
assert(typeof ApplicationSummary$ === "object");
assert(typeof AssociatedHost$ === "object");
assert(typeof BackintConfig$ === "object");
assert(typeof Component$ === "object");
assert(typeof ComponentInfo$ === "object");
assert(typeof ComponentSummary$ === "object");
assert(typeof ConfigurationCheckDefinition$ === "object");
assert(typeof ConfigurationCheckOperation$ === "object");
assert(typeof Database$ === "object");
assert(typeof DatabaseConnection$ === "object");
assert(typeof DatabaseSummary$ === "object");
assert(typeof DeleteResourcePermissionInput$ === "object");
assert(typeof DeleteResourcePermissionOutput$ === "object");
assert(typeof DeregisterApplicationInput$ === "object");
assert(typeof DeregisterApplicationOutput$ === "object");
assert(typeof Filter$ === "object");
assert(typeof GetApplicationInput$ === "object");
assert(typeof GetApplicationOutput$ === "object");
assert(typeof GetComponentInput$ === "object");
assert(typeof GetComponentOutput$ === "object");
assert(typeof GetConfigurationCheckOperationInput$ === "object");
assert(typeof GetConfigurationCheckOperationOutput$ === "object");
assert(typeof GetDatabaseInput$ === "object");
assert(typeof GetDatabaseOutput$ === "object");
assert(typeof GetOperationInput$ === "object");
assert(typeof GetOperationOutput$ === "object");
assert(typeof GetResourcePermissionInput$ === "object");
assert(typeof GetResourcePermissionOutput$ === "object");
assert(typeof Host$ === "object");
assert(typeof IpAddressMember$ === "object");
assert(typeof ListApplicationsInput$ === "object");
assert(typeof ListApplicationsOutput$ === "object");
assert(typeof ListComponentsInput$ === "object");
assert(typeof ListComponentsOutput$ === "object");
assert(typeof ListConfigurationCheckDefinitionsInput$ === "object");
assert(typeof ListConfigurationCheckDefinitionsOutput$ === "object");
assert(typeof ListConfigurationCheckOperationsInput$ === "object");
assert(typeof ListConfigurationCheckOperationsOutput$ === "object");
assert(typeof ListDatabasesInput$ === "object");
assert(typeof ListDatabasesOutput$ === "object");
assert(typeof ListOperationEventsInput$ === "object");
assert(typeof ListOperationEventsOutput$ === "object");
assert(typeof ListOperationsInput$ === "object");
assert(typeof ListOperationsOutput$ === "object");
assert(typeof ListSubCheckResultsInput$ === "object");
assert(typeof ListSubCheckResultsOutput$ === "object");
assert(typeof ListSubCheckRuleResultsInput$ === "object");
assert(typeof ListSubCheckRuleResultsOutput$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof Operation$ === "object");
assert(typeof OperationEvent$ === "object");
assert(typeof PutResourcePermissionInput$ === "object");
assert(typeof PutResourcePermissionOutput$ === "object");
assert(typeof RegisterApplicationInput$ === "object");
assert(typeof RegisterApplicationOutput$ === "object");
assert(typeof Resilience$ === "object");
assert(typeof Resource$ === "object");
assert(typeof RuleResult$ === "object");
assert(typeof RuleStatusCounts$ === "object");
assert(typeof StartApplicationInput$ === "object");
assert(typeof StartApplicationOutput$ === "object");
assert(typeof StartApplicationRefreshInput$ === "object");
assert(typeof StartApplicationRefreshOutput$ === "object");
assert(typeof StartConfigurationChecksInput$ === "object");
assert(typeof StartConfigurationChecksOutput$ === "object");
assert(typeof StopApplicationInput$ === "object");
assert(typeof StopApplicationOutput$ === "object");
assert(typeof SubCheckResult$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateApplicationSettingsInput$ === "object");
assert(typeof UpdateApplicationSettingsOutput$ === "object");
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
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof SsmSapServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof SsmSapServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(UnauthorizedException.prototype instanceof SsmSapServiceException);
assert(typeof UnauthorizedException$ === "object");
assert(ValidationException.prototype instanceof SsmSapServiceException);
assert(typeof ValidationException$ === "object");
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
