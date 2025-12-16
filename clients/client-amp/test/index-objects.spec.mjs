import {
  AccessDeniedException,
  AccessDeniedException$,
  AlertManagerDefinitionDescription$,
  AlertManagerDefinitionStatus$,
  AlertManagerDefinitionStatusCode,
  Amp,
  AmpClient,
  AmpConfiguration$,
  AmpServiceException,
  AnomalyDetectorConfiguration$,
  AnomalyDetectorDescription$,
  AnomalyDetectorMissingDataAction$,
  AnomalyDetectorStatus$,
  AnomalyDetectorStatusCode,
  AnomalyDetectorSummary$,
  CloudWatchLogDestination$,
  ComponentConfig$,
  ConflictException,
  ConflictException$,
  CreateAlertManagerDefinition$,
  CreateAlertManagerDefinitionCommand,
  CreateAlertManagerDefinitionRequest$,
  CreateAlertManagerDefinitionResponse$,
  CreateAnomalyDetector$,
  CreateAnomalyDetectorCommand,
  CreateAnomalyDetectorRequest$,
  CreateAnomalyDetectorResponse$,
  CreateLoggingConfiguration$,
  CreateLoggingConfigurationCommand,
  CreateLoggingConfigurationRequest$,
  CreateLoggingConfigurationResponse$,
  CreateQueryLoggingConfiguration$,
  CreateQueryLoggingConfigurationCommand,
  CreateQueryLoggingConfigurationRequest$,
  CreateQueryLoggingConfigurationResponse$,
  CreateRuleGroupsNamespace$,
  CreateRuleGroupsNamespaceCommand,
  CreateRuleGroupsNamespaceRequest$,
  CreateRuleGroupsNamespaceResponse$,
  CreateScraper$,
  CreateScraperCommand,
  CreateScraperRequest$,
  CreateScraperResponse$,
  CreateWorkspace$,
  CreateWorkspaceCommand,
  CreateWorkspaceRequest$,
  CreateWorkspaceResponse$,
  DeleteAlertManagerDefinition$,
  DeleteAlertManagerDefinitionCommand,
  DeleteAlertManagerDefinitionRequest$,
  DeleteAnomalyDetector$,
  DeleteAnomalyDetectorCommand,
  DeleteAnomalyDetectorRequest$,
  DeleteLoggingConfiguration$,
  DeleteLoggingConfigurationCommand,
  DeleteLoggingConfigurationRequest$,
  DeleteQueryLoggingConfiguration$,
  DeleteQueryLoggingConfigurationCommand,
  DeleteQueryLoggingConfigurationRequest$,
  DeleteResourcePolicy$,
  DeleteResourcePolicyCommand,
  DeleteResourcePolicyRequest$,
  DeleteRuleGroupsNamespace$,
  DeleteRuleGroupsNamespaceCommand,
  DeleteRuleGroupsNamespaceRequest$,
  DeleteScraper$,
  DeleteScraperCommand,
  DeleteScraperLoggingConfiguration$,
  DeleteScraperLoggingConfigurationCommand,
  DeleteScraperLoggingConfigurationRequest$,
  DeleteScraperRequest$,
  DeleteScraperResponse$,
  DeleteWorkspace$,
  DeleteWorkspaceCommand,
  DeleteWorkspaceRequest$,
  DescribeAlertManagerDefinition$,
  DescribeAlertManagerDefinitionCommand,
  DescribeAlertManagerDefinitionRequest$,
  DescribeAlertManagerDefinitionResponse$,
  DescribeAnomalyDetector$,
  DescribeAnomalyDetectorCommand,
  DescribeAnomalyDetectorRequest$,
  DescribeAnomalyDetectorResponse$,
  DescribeLoggingConfiguration$,
  DescribeLoggingConfigurationCommand,
  DescribeLoggingConfigurationRequest$,
  DescribeLoggingConfigurationResponse$,
  DescribeQueryLoggingConfiguration$,
  DescribeQueryLoggingConfigurationCommand,
  DescribeQueryLoggingConfigurationRequest$,
  DescribeQueryLoggingConfigurationResponse$,
  DescribeResourcePolicy$,
  DescribeResourcePolicyCommand,
  DescribeResourcePolicyRequest$,
  DescribeResourcePolicyResponse$,
  DescribeRuleGroupsNamespace$,
  DescribeRuleGroupsNamespaceCommand,
  DescribeRuleGroupsNamespaceRequest$,
  DescribeRuleGroupsNamespaceResponse$,
  DescribeScraper$,
  DescribeScraperCommand,
  DescribeScraperLoggingConfiguration$,
  DescribeScraperLoggingConfigurationCommand,
  DescribeScraperLoggingConfigurationRequest$,
  DescribeScraperLoggingConfigurationResponse$,
  DescribeScraperRequest$,
  DescribeScraperResponse$,
  DescribeWorkspace$,
  DescribeWorkspaceCommand,
  DescribeWorkspaceConfiguration$,
  DescribeWorkspaceConfigurationCommand,
  DescribeWorkspaceConfigurationRequest$,
  DescribeWorkspaceConfigurationResponse$,
  DescribeWorkspaceRequest$,
  DescribeWorkspaceResponse$,
  Destination$,
  EksConfiguration$,
  GetDefaultScraperConfiguration$,
  GetDefaultScraperConfigurationCommand,
  GetDefaultScraperConfigurationRequest$,
  GetDefaultScraperConfigurationResponse$,
  IgnoreNearExpected$,
  InternalServerException,
  InternalServerException$,
  LimitsPerLabelSet$,
  LimitsPerLabelSetEntry$,
  ListAnomalyDetectors$,
  ListAnomalyDetectorsCommand,
  ListAnomalyDetectorsRequest$,
  ListAnomalyDetectorsResponse$,
  ListRuleGroupsNamespaces$,
  ListRuleGroupsNamespacesCommand,
  ListRuleGroupsNamespacesRequest$,
  ListRuleGroupsNamespacesResponse$,
  ListScrapers$,
  ListScrapersCommand,
  ListScrapersRequest$,
  ListScrapersResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  ListWorkspaces$,
  ListWorkspacesCommand,
  ListWorkspacesRequest$,
  ListWorkspacesResponse$,
  LoggingConfigurationMetadata$,
  LoggingConfigurationStatus$,
  LoggingConfigurationStatusCode,
  LoggingDestination$,
  LoggingFilter$,
  PutAlertManagerDefinition$,
  PutAlertManagerDefinitionCommand,
  PutAlertManagerDefinitionRequest$,
  PutAlertManagerDefinitionResponse$,
  PutAnomalyDetector$,
  PutAnomalyDetectorCommand,
  PutAnomalyDetectorRequest$,
  PutAnomalyDetectorResponse$,
  PutResourcePolicy$,
  PutResourcePolicyCommand,
  PutResourcePolicyRequest$,
  PutResourcePolicyResponse$,
  PutRuleGroupsNamespace$,
  PutRuleGroupsNamespaceCommand,
  PutRuleGroupsNamespaceRequest$,
  PutRuleGroupsNamespaceResponse$,
  QueryLoggingConfigurationMetadata$,
  QueryLoggingConfigurationStatus$,
  QueryLoggingConfigurationStatusCode,
  RandomCutForestConfiguration$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  RoleConfiguration$,
  RuleGroupsNamespaceDescription$,
  RuleGroupsNamespaceStatus$,
  RuleGroupsNamespaceStatusCode,
  RuleGroupsNamespaceSummary$,
  ScrapeConfiguration$,
  ScraperComponent$,
  ScraperComponentType,
  ScraperDescription$,
  ScraperLoggingConfigurationStatus$,
  ScraperLoggingConfigurationStatusCode,
  ScraperLoggingDestination$,
  ScraperStatus$,
  ScraperStatusCode,
  ScraperSummary$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  Source$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  ThrottlingException,
  ThrottlingException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateLoggingConfiguration$,
  UpdateLoggingConfigurationCommand,
  UpdateLoggingConfigurationRequest$,
  UpdateLoggingConfigurationResponse$,
  UpdateQueryLoggingConfiguration$,
  UpdateQueryLoggingConfigurationCommand,
  UpdateQueryLoggingConfigurationRequest$,
  UpdateQueryLoggingConfigurationResponse$,
  UpdateScraper$,
  UpdateScraperCommand,
  UpdateScraperLoggingConfiguration$,
  UpdateScraperLoggingConfigurationCommand,
  UpdateScraperLoggingConfigurationRequest$,
  UpdateScraperLoggingConfigurationResponse$,
  UpdateScraperRequest$,
  UpdateScraperResponse$,
  UpdateWorkspaceAlias$,
  UpdateWorkspaceAliasCommand,
  UpdateWorkspaceAliasRequest$,
  UpdateWorkspaceConfiguration$,
  UpdateWorkspaceConfigurationCommand,
  UpdateWorkspaceConfigurationRequest$,
  UpdateWorkspaceConfigurationResponse$,
  ValidationException,
  ValidationException$,
  ValidationExceptionField$,
  ValidationExceptionReason,
  VpcConfiguration$,
  WorkspaceConfigurationDescription$,
  WorkspaceConfigurationStatus$,
  WorkspaceConfigurationStatusCode,
  WorkspaceDescription$,
  WorkspacePolicyStatusCode,
  WorkspaceStatus$,
  WorkspaceStatusCode,
  WorkspaceSummary$,
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
assert(typeof CreateAlertManagerDefinition$ === "object");
assert(typeof CreateAnomalyDetectorCommand === "function");
assert(typeof CreateAnomalyDetector$ === "object");
assert(typeof CreateLoggingConfigurationCommand === "function");
assert(typeof CreateLoggingConfiguration$ === "object");
assert(typeof CreateQueryLoggingConfigurationCommand === "function");
assert(typeof CreateQueryLoggingConfiguration$ === "object");
assert(typeof CreateRuleGroupsNamespaceCommand === "function");
assert(typeof CreateRuleGroupsNamespace$ === "object");
assert(typeof CreateScraperCommand === "function");
assert(typeof CreateScraper$ === "object");
assert(typeof CreateWorkspaceCommand === "function");
assert(typeof CreateWorkspace$ === "object");
assert(typeof DeleteAlertManagerDefinitionCommand === "function");
assert(typeof DeleteAlertManagerDefinition$ === "object");
assert(typeof DeleteAnomalyDetectorCommand === "function");
assert(typeof DeleteAnomalyDetector$ === "object");
assert(typeof DeleteLoggingConfigurationCommand === "function");
assert(typeof DeleteLoggingConfiguration$ === "object");
assert(typeof DeleteQueryLoggingConfigurationCommand === "function");
assert(typeof DeleteQueryLoggingConfiguration$ === "object");
assert(typeof DeleteResourcePolicyCommand === "function");
assert(typeof DeleteResourcePolicy$ === "object");
assert(typeof DeleteRuleGroupsNamespaceCommand === "function");
assert(typeof DeleteRuleGroupsNamespace$ === "object");
assert(typeof DeleteScraperCommand === "function");
assert(typeof DeleteScraper$ === "object");
assert(typeof DeleteScraperLoggingConfigurationCommand === "function");
assert(typeof DeleteScraperLoggingConfiguration$ === "object");
assert(typeof DeleteWorkspaceCommand === "function");
assert(typeof DeleteWorkspace$ === "object");
assert(typeof DescribeAlertManagerDefinitionCommand === "function");
assert(typeof DescribeAlertManagerDefinition$ === "object");
assert(typeof DescribeAnomalyDetectorCommand === "function");
assert(typeof DescribeAnomalyDetector$ === "object");
assert(typeof DescribeLoggingConfigurationCommand === "function");
assert(typeof DescribeLoggingConfiguration$ === "object");
assert(typeof DescribeQueryLoggingConfigurationCommand === "function");
assert(typeof DescribeQueryLoggingConfiguration$ === "object");
assert(typeof DescribeResourcePolicyCommand === "function");
assert(typeof DescribeResourcePolicy$ === "object");
assert(typeof DescribeRuleGroupsNamespaceCommand === "function");
assert(typeof DescribeRuleGroupsNamespace$ === "object");
assert(typeof DescribeScraperCommand === "function");
assert(typeof DescribeScraper$ === "object");
assert(typeof DescribeScraperLoggingConfigurationCommand === "function");
assert(typeof DescribeScraperLoggingConfiguration$ === "object");
assert(typeof DescribeWorkspaceCommand === "function");
assert(typeof DescribeWorkspace$ === "object");
assert(typeof DescribeWorkspaceConfigurationCommand === "function");
assert(typeof DescribeWorkspaceConfiguration$ === "object");
assert(typeof GetDefaultScraperConfigurationCommand === "function");
assert(typeof GetDefaultScraperConfiguration$ === "object");
assert(typeof ListAnomalyDetectorsCommand === "function");
assert(typeof ListAnomalyDetectors$ === "object");
assert(typeof ListRuleGroupsNamespacesCommand === "function");
assert(typeof ListRuleGroupsNamespaces$ === "object");
assert(typeof ListScrapersCommand === "function");
assert(typeof ListScrapers$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ListWorkspacesCommand === "function");
assert(typeof ListWorkspaces$ === "object");
assert(typeof PutAlertManagerDefinitionCommand === "function");
assert(typeof PutAlertManagerDefinition$ === "object");
assert(typeof PutAnomalyDetectorCommand === "function");
assert(typeof PutAnomalyDetector$ === "object");
assert(typeof PutResourcePolicyCommand === "function");
assert(typeof PutResourcePolicy$ === "object");
assert(typeof PutRuleGroupsNamespaceCommand === "function");
assert(typeof PutRuleGroupsNamespace$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateLoggingConfigurationCommand === "function");
assert(typeof UpdateLoggingConfiguration$ === "object");
assert(typeof UpdateQueryLoggingConfigurationCommand === "function");
assert(typeof UpdateQueryLoggingConfiguration$ === "object");
assert(typeof UpdateScraperCommand === "function");
assert(typeof UpdateScraper$ === "object");
assert(typeof UpdateScraperLoggingConfigurationCommand === "function");
assert(typeof UpdateScraperLoggingConfiguration$ === "object");
assert(typeof UpdateWorkspaceAliasCommand === "function");
assert(typeof UpdateWorkspaceAlias$ === "object");
assert(typeof UpdateWorkspaceConfigurationCommand === "function");
assert(typeof UpdateWorkspaceConfiguration$ === "object");
// structural schemas
assert(typeof AlertManagerDefinitionDescription$ === "object");
assert(typeof AlertManagerDefinitionStatus$ === "object");
assert(typeof AmpConfiguration$ === "object");
assert(typeof AnomalyDetectorConfiguration$ === "object");
assert(typeof AnomalyDetectorDescription$ === "object");
assert(typeof AnomalyDetectorMissingDataAction$ === "object");
assert(typeof AnomalyDetectorStatus$ === "object");
assert(typeof AnomalyDetectorSummary$ === "object");
assert(typeof CloudWatchLogDestination$ === "object");
assert(typeof ComponentConfig$ === "object");
assert(typeof CreateAlertManagerDefinitionRequest$ === "object");
assert(typeof CreateAlertManagerDefinitionResponse$ === "object");
assert(typeof CreateAnomalyDetectorRequest$ === "object");
assert(typeof CreateAnomalyDetectorResponse$ === "object");
assert(typeof CreateLoggingConfigurationRequest$ === "object");
assert(typeof CreateLoggingConfigurationResponse$ === "object");
assert(typeof CreateQueryLoggingConfigurationRequest$ === "object");
assert(typeof CreateQueryLoggingConfigurationResponse$ === "object");
assert(typeof CreateRuleGroupsNamespaceRequest$ === "object");
assert(typeof CreateRuleGroupsNamespaceResponse$ === "object");
assert(typeof CreateScraperRequest$ === "object");
assert(typeof CreateScraperResponse$ === "object");
assert(typeof CreateWorkspaceRequest$ === "object");
assert(typeof CreateWorkspaceResponse$ === "object");
assert(typeof DeleteAlertManagerDefinitionRequest$ === "object");
assert(typeof DeleteAnomalyDetectorRequest$ === "object");
assert(typeof DeleteLoggingConfigurationRequest$ === "object");
assert(typeof DeleteQueryLoggingConfigurationRequest$ === "object");
assert(typeof DeleteResourcePolicyRequest$ === "object");
assert(typeof DeleteRuleGroupsNamespaceRequest$ === "object");
assert(typeof DeleteScraperLoggingConfigurationRequest$ === "object");
assert(typeof DeleteScraperRequest$ === "object");
assert(typeof DeleteScraperResponse$ === "object");
assert(typeof DeleteWorkspaceRequest$ === "object");
assert(typeof DescribeAlertManagerDefinitionRequest$ === "object");
assert(typeof DescribeAlertManagerDefinitionResponse$ === "object");
assert(typeof DescribeAnomalyDetectorRequest$ === "object");
assert(typeof DescribeAnomalyDetectorResponse$ === "object");
assert(typeof DescribeLoggingConfigurationRequest$ === "object");
assert(typeof DescribeLoggingConfigurationResponse$ === "object");
assert(typeof DescribeQueryLoggingConfigurationRequest$ === "object");
assert(typeof DescribeQueryLoggingConfigurationResponse$ === "object");
assert(typeof DescribeResourcePolicyRequest$ === "object");
assert(typeof DescribeResourcePolicyResponse$ === "object");
assert(typeof DescribeRuleGroupsNamespaceRequest$ === "object");
assert(typeof DescribeRuleGroupsNamespaceResponse$ === "object");
assert(typeof DescribeScraperLoggingConfigurationRequest$ === "object");
assert(typeof DescribeScraperLoggingConfigurationResponse$ === "object");
assert(typeof DescribeScraperRequest$ === "object");
assert(typeof DescribeScraperResponse$ === "object");
assert(typeof DescribeWorkspaceConfigurationRequest$ === "object");
assert(typeof DescribeWorkspaceConfigurationResponse$ === "object");
assert(typeof DescribeWorkspaceRequest$ === "object");
assert(typeof DescribeWorkspaceResponse$ === "object");
assert(typeof Destination$ === "object");
assert(typeof EksConfiguration$ === "object");
assert(typeof GetDefaultScraperConfigurationRequest$ === "object");
assert(typeof GetDefaultScraperConfigurationResponse$ === "object");
assert(typeof IgnoreNearExpected$ === "object");
assert(typeof LimitsPerLabelSet$ === "object");
assert(typeof LimitsPerLabelSetEntry$ === "object");
assert(typeof ListAnomalyDetectorsRequest$ === "object");
assert(typeof ListAnomalyDetectorsResponse$ === "object");
assert(typeof ListRuleGroupsNamespacesRequest$ === "object");
assert(typeof ListRuleGroupsNamespacesResponse$ === "object");
assert(typeof ListScrapersRequest$ === "object");
assert(typeof ListScrapersResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof ListWorkspacesRequest$ === "object");
assert(typeof ListWorkspacesResponse$ === "object");
assert(typeof LoggingConfigurationMetadata$ === "object");
assert(typeof LoggingConfigurationStatus$ === "object");
assert(typeof LoggingDestination$ === "object");
assert(typeof LoggingFilter$ === "object");
assert(typeof PutAlertManagerDefinitionRequest$ === "object");
assert(typeof PutAlertManagerDefinitionResponse$ === "object");
assert(typeof PutAnomalyDetectorRequest$ === "object");
assert(typeof PutAnomalyDetectorResponse$ === "object");
assert(typeof PutResourcePolicyRequest$ === "object");
assert(typeof PutResourcePolicyResponse$ === "object");
assert(typeof PutRuleGroupsNamespaceRequest$ === "object");
assert(typeof PutRuleGroupsNamespaceResponse$ === "object");
assert(typeof QueryLoggingConfigurationMetadata$ === "object");
assert(typeof QueryLoggingConfigurationStatus$ === "object");
assert(typeof RandomCutForestConfiguration$ === "object");
assert(typeof RoleConfiguration$ === "object");
assert(typeof RuleGroupsNamespaceDescription$ === "object");
assert(typeof RuleGroupsNamespaceStatus$ === "object");
assert(typeof RuleGroupsNamespaceSummary$ === "object");
assert(typeof ScrapeConfiguration$ === "object");
assert(typeof ScraperComponent$ === "object");
assert(typeof ScraperDescription$ === "object");
assert(typeof ScraperLoggingConfigurationStatus$ === "object");
assert(typeof ScraperLoggingDestination$ === "object");
assert(typeof ScraperStatus$ === "object");
assert(typeof ScraperSummary$ === "object");
assert(typeof Source$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateLoggingConfigurationRequest$ === "object");
assert(typeof UpdateLoggingConfigurationResponse$ === "object");
assert(typeof UpdateQueryLoggingConfigurationRequest$ === "object");
assert(typeof UpdateQueryLoggingConfigurationResponse$ === "object");
assert(typeof UpdateScraperLoggingConfigurationRequest$ === "object");
assert(typeof UpdateScraperLoggingConfigurationResponse$ === "object");
assert(typeof UpdateScraperRequest$ === "object");
assert(typeof UpdateScraperResponse$ === "object");
assert(typeof UpdateWorkspaceAliasRequest$ === "object");
assert(typeof UpdateWorkspaceConfigurationRequest$ === "object");
assert(typeof UpdateWorkspaceConfigurationResponse$ === "object");
assert(typeof ValidationExceptionField$ === "object");
assert(typeof VpcConfiguration$ === "object");
assert(typeof WorkspaceConfigurationDescription$ === "object");
assert(typeof WorkspaceConfigurationStatus$ === "object");
assert(typeof WorkspaceDescription$ === "object");
assert(typeof WorkspaceStatus$ === "object");
assert(typeof WorkspaceSummary$ === "object");
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
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof AmpServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof AmpServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof AmpServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof AmpServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof AmpServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof AmpServiceException);
assert(typeof ValidationException$ === "object");
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
