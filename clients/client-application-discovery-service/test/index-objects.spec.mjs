import {
  AgentConfigurationStatus$,
  AgentInfo$,
  AgentNetworkInfo$,
  AgentStatus,
  ApplicationDiscoveryService,
  ApplicationDiscoveryServiceClient,
  ApplicationDiscoveryServiceServiceException,
  AssociateConfigurationItemsToApplication$,
  AssociateConfigurationItemsToApplicationCommand,
  AssociateConfigurationItemsToApplicationRequest$,
  AssociateConfigurationItemsToApplicationResponse$,
  AuthorizationErrorException,
  AuthorizationErrorException$,
  BatchDeleteAgentError$,
  BatchDeleteAgents$,
  BatchDeleteAgentsCommand,
  BatchDeleteAgentsRequest$,
  BatchDeleteAgentsResponse$,
  BatchDeleteConfigurationTask$,
  BatchDeleteConfigurationTaskStatus,
  BatchDeleteImportData$,
  BatchDeleteImportDataCommand,
  BatchDeleteImportDataError$,
  BatchDeleteImportDataErrorCode,
  BatchDeleteImportDataRequest$,
  BatchDeleteImportDataResponse$,
  ConfigurationItemType,
  ConfigurationTag$,
  ConflictErrorException,
  ConflictErrorException$,
  ContinuousExportDescription$,
  ContinuousExportStatus,
  CreateApplication$,
  CreateApplicationCommand,
  CreateApplicationRequest$,
  CreateApplicationResponse$,
  CreateTags$,
  CreateTagsCommand,
  CreateTagsRequest$,
  CreateTagsResponse$,
  CustomerAgentInfo$,
  CustomerAgentlessCollectorInfo$,
  CustomerConnectorInfo$,
  CustomerMeCollectorInfo$,
  DataSource,
  DeleteAgent$,
  DeleteAgentErrorCode,
  DeleteApplications$,
  DeleteApplicationsCommand,
  DeleteApplicationsRequest$,
  DeleteApplicationsResponse$,
  DeleteTags$,
  DeleteTagsCommand,
  DeleteTagsRequest$,
  DeleteTagsResponse$,
  DeletionConfigurationItemType,
  DeletionWarning$,
  DescribeAgents$,
  DescribeAgentsCommand,
  DescribeAgentsRequest$,
  DescribeAgentsResponse$,
  DescribeBatchDeleteConfigurationTask$,
  DescribeBatchDeleteConfigurationTaskCommand,
  DescribeBatchDeleteConfigurationTaskRequest$,
  DescribeBatchDeleteConfigurationTaskResponse$,
  DescribeConfigurations$,
  DescribeConfigurationsCommand,
  DescribeConfigurationsRequest$,
  DescribeConfigurationsResponse$,
  DescribeContinuousExports$,
  DescribeContinuousExportsCommand,
  DescribeContinuousExportsRequest$,
  DescribeContinuousExportsResponse$,
  DescribeExportConfigurations$,
  DescribeExportConfigurationsCommand,
  DescribeExportConfigurationsRequest$,
  DescribeExportConfigurationsResponse$,
  DescribeExportTasks$,
  DescribeExportTasksCommand,
  DescribeExportTasksRequest$,
  DescribeExportTasksResponse$,
  DescribeImportTasks$,
  DescribeImportTasksCommand,
  DescribeImportTasksRequest$,
  DescribeImportTasksResponse$,
  DescribeTags$,
  DescribeTagsCommand,
  DescribeTagsRequest$,
  DescribeTagsResponse$,
  DisassociateConfigurationItemsFromApplication$,
  DisassociateConfigurationItemsFromApplicationCommand,
  DisassociateConfigurationItemsFromApplicationRequest$,
  DisassociateConfigurationItemsFromApplicationResponse$,
  Ec2RecommendationsExportPreferences$,
  ExportConfigurations$,
  ExportConfigurationsCommand,
  ExportConfigurationsResponse$,
  ExportDataFormat,
  ExportFilter$,
  ExportInfo$,
  ExportPreferences$,
  ExportStatus,
  FailedConfiguration$,
  FileClassification,
  Filter$,
  GetDiscoverySummary$,
  GetDiscoverySummaryCommand,
  GetDiscoverySummaryRequest$,
  GetDiscoverySummaryResponse$,
  HomeRegionNotSetException,
  HomeRegionNotSetException$,
  ImportStatus,
  ImportTask$,
  ImportTaskFilter$,
  ImportTaskFilterName,
  InvalidParameterException,
  InvalidParameterException$,
  InvalidParameterValueException,
  InvalidParameterValueException$,
  LimitExceededException,
  LimitExceededException$,
  ListConfigurations$,
  ListConfigurationsCommand,
  ListConfigurationsRequest$,
  ListConfigurationsResponse$,
  ListServerNeighbors$,
  ListServerNeighborsCommand,
  ListServerNeighborsRequest$,
  ListServerNeighborsResponse$,
  NeighborConnectionDetail$,
  OfferingClass,
  OperationNotPermittedException,
  OperationNotPermittedException$,
  OrderByElement$,
  OrderString,
  PurchasingOption,
  ReservedInstanceOptions$,
  ResourceInUseException,
  ResourceInUseException$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ServerInternalErrorException,
  ServerInternalErrorException$,
  StartBatchDeleteConfigurationTask$,
  StartBatchDeleteConfigurationTaskCommand,
  StartBatchDeleteConfigurationTaskRequest$,
  StartBatchDeleteConfigurationTaskResponse$,
  StartContinuousExport$,
  StartContinuousExportCommand,
  StartContinuousExportRequest$,
  StartContinuousExportResponse$,
  StartDataCollectionByAgentIds$,
  StartDataCollectionByAgentIdsCommand,
  StartDataCollectionByAgentIdsRequest$,
  StartDataCollectionByAgentIdsResponse$,
  StartExportTask$,
  StartExportTaskCommand,
  StartExportTaskRequest$,
  StartExportTaskResponse$,
  StartImportTask$,
  StartImportTaskCommand,
  StartImportTaskRequest$,
  StartImportTaskResponse$,
  StopContinuousExport$,
  StopContinuousExportCommand,
  StopContinuousExportRequest$,
  StopContinuousExportResponse$,
  StopDataCollectionByAgentIds$,
  StopDataCollectionByAgentIdsCommand,
  StopDataCollectionByAgentIdsRequest$,
  StopDataCollectionByAgentIdsResponse$,
  Tag$,
  TagFilter$,
  Tenancy,
  TermLength,
  UpdateApplication$,
  UpdateApplicationCommand,
  UpdateApplicationRequest$,
  UpdateApplicationResponse$,
  UsageMetricBasis$,
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
assert(typeof AssociateConfigurationItemsToApplication$ === "object");
assert(typeof BatchDeleteAgentsCommand === "function");
assert(typeof BatchDeleteAgents$ === "object");
assert(typeof BatchDeleteImportDataCommand === "function");
assert(typeof BatchDeleteImportData$ === "object");
assert(typeof CreateApplicationCommand === "function");
assert(typeof CreateApplication$ === "object");
assert(typeof CreateTagsCommand === "function");
assert(typeof CreateTags$ === "object");
assert(typeof DeleteApplicationsCommand === "function");
assert(typeof DeleteApplications$ === "object");
assert(typeof DeleteTagsCommand === "function");
assert(typeof DeleteTags$ === "object");
assert(typeof DescribeAgentsCommand === "function");
assert(typeof DescribeAgents$ === "object");
assert(typeof DescribeBatchDeleteConfigurationTaskCommand === "function");
assert(typeof DescribeBatchDeleteConfigurationTask$ === "object");
assert(typeof DescribeConfigurationsCommand === "function");
assert(typeof DescribeConfigurations$ === "object");
assert(typeof DescribeContinuousExportsCommand === "function");
assert(typeof DescribeContinuousExports$ === "object");
assert(typeof DescribeExportConfigurationsCommand === "function");
assert(typeof DescribeExportConfigurations$ === "object");
assert(typeof DescribeExportTasksCommand === "function");
assert(typeof DescribeExportTasks$ === "object");
assert(typeof DescribeImportTasksCommand === "function");
assert(typeof DescribeImportTasks$ === "object");
assert(typeof DescribeTagsCommand === "function");
assert(typeof DescribeTags$ === "object");
assert(typeof DisassociateConfigurationItemsFromApplicationCommand === "function");
assert(typeof DisassociateConfigurationItemsFromApplication$ === "object");
assert(typeof ExportConfigurationsCommand === "function");
assert(typeof ExportConfigurations$ === "object");
assert(typeof GetDiscoverySummaryCommand === "function");
assert(typeof GetDiscoverySummary$ === "object");
assert(typeof ListConfigurationsCommand === "function");
assert(typeof ListConfigurations$ === "object");
assert(typeof ListServerNeighborsCommand === "function");
assert(typeof ListServerNeighbors$ === "object");
assert(typeof StartBatchDeleteConfigurationTaskCommand === "function");
assert(typeof StartBatchDeleteConfigurationTask$ === "object");
assert(typeof StartContinuousExportCommand === "function");
assert(typeof StartContinuousExport$ === "object");
assert(typeof StartDataCollectionByAgentIdsCommand === "function");
assert(typeof StartDataCollectionByAgentIds$ === "object");
assert(typeof StartExportTaskCommand === "function");
assert(typeof StartExportTask$ === "object");
assert(typeof StartImportTaskCommand === "function");
assert(typeof StartImportTask$ === "object");
assert(typeof StopContinuousExportCommand === "function");
assert(typeof StopContinuousExport$ === "object");
assert(typeof StopDataCollectionByAgentIdsCommand === "function");
assert(typeof StopDataCollectionByAgentIds$ === "object");
assert(typeof UpdateApplicationCommand === "function");
assert(typeof UpdateApplication$ === "object");
// structural schemas
assert(typeof AgentConfigurationStatus$ === "object");
assert(typeof AgentInfo$ === "object");
assert(typeof AgentNetworkInfo$ === "object");
assert(typeof AssociateConfigurationItemsToApplicationRequest$ === "object");
assert(typeof AssociateConfigurationItemsToApplicationResponse$ === "object");
assert(typeof BatchDeleteAgentError$ === "object");
assert(typeof BatchDeleteAgentsRequest$ === "object");
assert(typeof BatchDeleteAgentsResponse$ === "object");
assert(typeof BatchDeleteConfigurationTask$ === "object");
assert(typeof BatchDeleteImportDataError$ === "object");
assert(typeof BatchDeleteImportDataRequest$ === "object");
assert(typeof BatchDeleteImportDataResponse$ === "object");
assert(typeof ConfigurationTag$ === "object");
assert(typeof ContinuousExportDescription$ === "object");
assert(typeof CreateApplicationRequest$ === "object");
assert(typeof CreateApplicationResponse$ === "object");
assert(typeof CreateTagsRequest$ === "object");
assert(typeof CreateTagsResponse$ === "object");
assert(typeof CustomerAgentInfo$ === "object");
assert(typeof CustomerAgentlessCollectorInfo$ === "object");
assert(typeof CustomerConnectorInfo$ === "object");
assert(typeof CustomerMeCollectorInfo$ === "object");
assert(typeof DeleteAgent$ === "object");
assert(typeof DeleteApplicationsRequest$ === "object");
assert(typeof DeleteApplicationsResponse$ === "object");
assert(typeof DeleteTagsRequest$ === "object");
assert(typeof DeleteTagsResponse$ === "object");
assert(typeof DeletionWarning$ === "object");
assert(typeof DescribeAgentsRequest$ === "object");
assert(typeof DescribeAgentsResponse$ === "object");
assert(typeof DescribeBatchDeleteConfigurationTaskRequest$ === "object");
assert(typeof DescribeBatchDeleteConfigurationTaskResponse$ === "object");
assert(typeof DescribeConfigurationsRequest$ === "object");
assert(typeof DescribeConfigurationsResponse$ === "object");
assert(typeof DescribeContinuousExportsRequest$ === "object");
assert(typeof DescribeContinuousExportsResponse$ === "object");
assert(typeof DescribeExportConfigurationsRequest$ === "object");
assert(typeof DescribeExportConfigurationsResponse$ === "object");
assert(typeof DescribeExportTasksRequest$ === "object");
assert(typeof DescribeExportTasksResponse$ === "object");
assert(typeof DescribeImportTasksRequest$ === "object");
assert(typeof DescribeImportTasksResponse$ === "object");
assert(typeof DescribeTagsRequest$ === "object");
assert(typeof DescribeTagsResponse$ === "object");
assert(typeof DisassociateConfigurationItemsFromApplicationRequest$ === "object");
assert(typeof DisassociateConfigurationItemsFromApplicationResponse$ === "object");
assert(typeof Ec2RecommendationsExportPreferences$ === "object");
assert(typeof ExportConfigurationsResponse$ === "object");
assert(typeof ExportFilter$ === "object");
assert(typeof ExportInfo$ === "object");
assert(typeof ExportPreferences$ === "object");
assert(typeof FailedConfiguration$ === "object");
assert(typeof Filter$ === "object");
assert(typeof GetDiscoverySummaryRequest$ === "object");
assert(typeof GetDiscoverySummaryResponse$ === "object");
assert(typeof ImportTask$ === "object");
assert(typeof ImportTaskFilter$ === "object");
assert(typeof ListConfigurationsRequest$ === "object");
assert(typeof ListConfigurationsResponse$ === "object");
assert(typeof ListServerNeighborsRequest$ === "object");
assert(typeof ListServerNeighborsResponse$ === "object");
assert(typeof NeighborConnectionDetail$ === "object");
assert(typeof OrderByElement$ === "object");
assert(typeof ReservedInstanceOptions$ === "object");
assert(typeof StartBatchDeleteConfigurationTaskRequest$ === "object");
assert(typeof StartBatchDeleteConfigurationTaskResponse$ === "object");
assert(typeof StartContinuousExportRequest$ === "object");
assert(typeof StartContinuousExportResponse$ === "object");
assert(typeof StartDataCollectionByAgentIdsRequest$ === "object");
assert(typeof StartDataCollectionByAgentIdsResponse$ === "object");
assert(typeof StartExportTaskRequest$ === "object");
assert(typeof StartExportTaskResponse$ === "object");
assert(typeof StartImportTaskRequest$ === "object");
assert(typeof StartImportTaskResponse$ === "object");
assert(typeof StopContinuousExportRequest$ === "object");
assert(typeof StopContinuousExportResponse$ === "object");
assert(typeof StopDataCollectionByAgentIdsRequest$ === "object");
assert(typeof StopDataCollectionByAgentIdsResponse$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagFilter$ === "object");
assert(typeof UpdateApplicationRequest$ === "object");
assert(typeof UpdateApplicationResponse$ === "object");
assert(typeof UsageMetricBasis$ === "object");
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
assert(typeof AuthorizationErrorException$ === "object");
assert(ConflictErrorException.prototype instanceof ApplicationDiscoveryServiceServiceException);
assert(typeof ConflictErrorException$ === "object");
assert(HomeRegionNotSetException.prototype instanceof ApplicationDiscoveryServiceServiceException);
assert(typeof HomeRegionNotSetException$ === "object");
assert(InvalidParameterException.prototype instanceof ApplicationDiscoveryServiceServiceException);
assert(typeof InvalidParameterException$ === "object");
assert(InvalidParameterValueException.prototype instanceof ApplicationDiscoveryServiceServiceException);
assert(typeof InvalidParameterValueException$ === "object");
assert(LimitExceededException.prototype instanceof ApplicationDiscoveryServiceServiceException);
assert(typeof LimitExceededException$ === "object");
assert(OperationNotPermittedException.prototype instanceof ApplicationDiscoveryServiceServiceException);
assert(typeof OperationNotPermittedException$ === "object");
assert(ResourceInUseException.prototype instanceof ApplicationDiscoveryServiceServiceException);
assert(typeof ResourceInUseException$ === "object");
assert(ResourceNotFoundException.prototype instanceof ApplicationDiscoveryServiceServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServerInternalErrorException.prototype instanceof ApplicationDiscoveryServiceServiceException);
assert(typeof ServerInternalErrorException$ === "object");
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
