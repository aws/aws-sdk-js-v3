import {
  AgentStatus,
  ApplicationDiscoveryService,
  ApplicationDiscoveryServiceClient,
  ApplicationDiscoveryServiceServiceException,
  AssociateConfigurationItemsToApplicationCommand,
  AuthorizationErrorException,
  BatchDeleteAgentsCommand,
  BatchDeleteConfigurationTaskStatus,
  BatchDeleteImportDataCommand,
  BatchDeleteImportDataErrorCode,
  ConfigurationItemType,
  ConflictErrorException,
  ContinuousExportStatus,
  CreateApplicationCommand,
  CreateTagsCommand,
  DataSource,
  DeleteAgentErrorCode,
  DeleteApplicationsCommand,
  DeleteTagsCommand,
  DeletionConfigurationItemType,
  DescribeAgentsCommand,
  DescribeBatchDeleteConfigurationTaskCommand,
  DescribeConfigurationsCommand,
  DescribeContinuousExportsCommand,
  DescribeExportConfigurationsCommand,
  DescribeExportTasksCommand,
  DescribeImportTasksCommand,
  DescribeTagsCommand,
  DisassociateConfigurationItemsFromApplicationCommand,
  ExportConfigurationsCommand,
  ExportDataFormat,
  ExportStatus,
  FileClassification,
  GetDiscoverySummaryCommand,
  HomeRegionNotSetException,
  ImportStatus,
  ImportTaskFilterName,
  InvalidParameterException,
  InvalidParameterValueException,
  LimitExceededException,
  ListConfigurationsCommand,
  ListServerNeighborsCommand,
  OfferingClass,
  OperationNotPermittedException,
  OrderString,
  PurchasingOption,
  ResourceInUseException,
  ResourceNotFoundException,
  ServerInternalErrorException,
  StartBatchDeleteConfigurationTaskCommand,
  StartContinuousExportCommand,
  StartDataCollectionByAgentIdsCommand,
  StartExportTaskCommand,
  StartImportTaskCommand,
  StopContinuousExportCommand,
  StopDataCollectionByAgentIdsCommand,
  Tenancy,
  TermLength,
  UpdateApplicationCommand,
  paginateDescribeAgents,
  paginateDescribeContinuousExports,
  paginateDescribeExportConfigurations,
  paginateDescribeExportTasks,
  paginateDescribeImportTasks,
  paginateDescribeTags,
  paginateListConfigurations,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof ApplicationDiscoveryServiceClient === "function");
assert(typeof ApplicationDiscoveryService === "function");
// commands
assert(typeof AssociateConfigurationItemsToApplicationCommand === "function");
assert(typeof BatchDeleteAgentsCommand === "function");
assert(typeof BatchDeleteImportDataCommand === "function");
assert(typeof CreateApplicationCommand === "function");
assert(typeof CreateTagsCommand === "function");
assert(typeof DeleteApplicationsCommand === "function");
assert(typeof DeleteTagsCommand === "function");
assert(typeof DescribeAgentsCommand === "function");
assert(typeof DescribeBatchDeleteConfigurationTaskCommand === "function");
assert(typeof DescribeConfigurationsCommand === "function");
assert(typeof DescribeContinuousExportsCommand === "function");
assert(typeof DescribeExportConfigurationsCommand === "function");
assert(typeof DescribeExportTasksCommand === "function");
assert(typeof DescribeImportTasksCommand === "function");
assert(typeof DescribeTagsCommand === "function");
assert(typeof DisassociateConfigurationItemsFromApplicationCommand === "function");
assert(typeof ExportConfigurationsCommand === "function");
assert(typeof GetDiscoverySummaryCommand === "function");
assert(typeof ListConfigurationsCommand === "function");
assert(typeof ListServerNeighborsCommand === "function");
assert(typeof StartBatchDeleteConfigurationTaskCommand === "function");
assert(typeof StartContinuousExportCommand === "function");
assert(typeof StartDataCollectionByAgentIdsCommand === "function");
assert(typeof StartExportTaskCommand === "function");
assert(typeof StartImportTaskCommand === "function");
assert(typeof StopContinuousExportCommand === "function");
assert(typeof StopDataCollectionByAgentIdsCommand === "function");
assert(typeof UpdateApplicationCommand === "function");
// enums
assert(typeof AgentStatus === "object");
assert(typeof BatchDeleteConfigurationTaskStatus === "object");
assert(typeof BatchDeleteImportDataErrorCode === "object");
assert(typeof ConfigurationItemType === "object");
assert(typeof ContinuousExportStatus === "object");
assert(typeof DataSource === "object");
assert(typeof DeleteAgentErrorCode === "object");
assert(typeof DeletionConfigurationItemType === "object");
assert(typeof ExportDataFormat === "object");
assert(typeof ExportStatus === "object");
assert(typeof FileClassification === "object");
assert(typeof ImportStatus === "object");
assert(typeof ImportTaskFilterName === "object");
assert(typeof OfferingClass === "object");
assert(typeof OrderString === "object");
assert(typeof PurchasingOption === "object");
assert(typeof Tenancy === "object");
assert(typeof TermLength === "object");
// errors
assert(AuthorizationErrorException.prototype instanceof ApplicationDiscoveryServiceServiceException);
assert(ConflictErrorException.prototype instanceof ApplicationDiscoveryServiceServiceException);
assert(HomeRegionNotSetException.prototype instanceof ApplicationDiscoveryServiceServiceException);
assert(InvalidParameterException.prototype instanceof ApplicationDiscoveryServiceServiceException);
assert(InvalidParameterValueException.prototype instanceof ApplicationDiscoveryServiceServiceException);
assert(LimitExceededException.prototype instanceof ApplicationDiscoveryServiceServiceException);
assert(OperationNotPermittedException.prototype instanceof ApplicationDiscoveryServiceServiceException);
assert(ResourceInUseException.prototype instanceof ApplicationDiscoveryServiceServiceException);
assert(ResourceNotFoundException.prototype instanceof ApplicationDiscoveryServiceServiceException);
assert(ServerInternalErrorException.prototype instanceof ApplicationDiscoveryServiceServiceException);
assert(ApplicationDiscoveryServiceServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateDescribeAgents === "function");
assert(typeof paginateDescribeContinuousExports === "function");
assert(typeof paginateDescribeExportConfigurations === "function");
assert(typeof paginateDescribeExportTasks === "function");
assert(typeof paginateDescribeImportTasks === "function");
assert(typeof paginateDescribeTags === "function");
assert(typeof paginateListConfigurations === "function");
console.log(`ApplicationDiscoveryService index test passed.`);
