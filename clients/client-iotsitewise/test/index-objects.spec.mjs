import {
  AccessDeniedException,
  AggregateType,
  AssetErrorCode,
  AssetModelState,
  AssetModelType,
  AssetModelVersionType,
  AssetRelationshipType,
  AssetState,
  AssociateAssetsCommand,
  AssociateTimeSeriesToAssetPropertyCommand,
  AuthMode,
  BatchAssociateProjectAssetsCommand,
  BatchDisassociateProjectAssetsCommand,
  BatchEntryCompletionStatus,
  BatchGetAssetPropertyAggregatesCommand,
  BatchGetAssetPropertyAggregatesErrorCode,
  BatchGetAssetPropertyValueCommand,
  BatchGetAssetPropertyValueErrorCode,
  BatchGetAssetPropertyValueHistoryCommand,
  BatchGetAssetPropertyValueHistoryErrorCode,
  BatchPutAssetPropertyValueCommand,
  BatchPutAssetPropertyValueErrorCode,
  CapabilitySyncStatus,
  ColumnName,
  ComputationModelState,
  ComputationModelType,
  ComputeLocation,
  ConfigurationState,
  ConflictingOperationException,
  CoreDeviceOperatingSystem,
  CreateAccessPolicyCommand,
  CreateAssetCommand,
  CreateAssetModelCommand,
  CreateAssetModelCompositeModelCommand,
  CreateBulkImportJobCommand,
  CreateComputationModelCommand,
  CreateDashboardCommand,
  CreateDatasetCommand,
  CreateGatewayCommand,
  CreatePortalCommand,
  CreateProjectCommand,
  DatasetSourceFormat,
  DatasetSourceType,
  DatasetState,
  DeleteAccessPolicyCommand,
  DeleteAssetCommand,
  DeleteAssetModelCommand,
  DeleteAssetModelCompositeModelCommand,
  DeleteAssetModelInterfaceRelationshipCommand,
  DeleteComputationModelCommand,
  DeleteDashboardCommand,
  DeleteDatasetCommand,
  DeleteGatewayCommand,
  DeletePortalCommand,
  DeleteProjectCommand,
  DeleteTimeSeriesCommand,
  DescribeAccessPolicyCommand,
  DescribeActionCommand,
  DescribeAssetCommand,
  DescribeAssetCompositeModelCommand,
  DescribeAssetModelCommand,
  DescribeAssetModelCompositeModelCommand,
  DescribeAssetModelInterfaceRelationshipCommand,
  DescribeAssetPropertyCommand,
  DescribeBulkImportJobCommand,
  DescribeComputationModelCommand,
  DescribeComputationModelExecutionSummaryCommand,
  DescribeDashboardCommand,
  DescribeDatasetCommand,
  DescribeDefaultEncryptionConfigurationCommand,
  DescribeExecutionCommand,
  DescribeGatewayCapabilityConfigurationCommand,
  DescribeGatewayCommand,
  DescribeLoggingOptionsCommand,
  DescribePortalCommand,
  DescribeProjectCommand,
  DescribeStorageConfigurationCommand,
  DescribeTimeSeriesCommand,
  DetailedErrorCode,
  DisassociateAssetsCommand,
  DisassociateTimeSeriesFromAssetPropertyCommand,
  DisassociatedDataStorageState,
  EncryptionType,
  ErrorCode,
  ExecuteActionCommand,
  ExecuteQueryCommand,
  ExecutionState,
  ForwardingConfigState,
  GetAssetPropertyAggregatesCommand,
  GetAssetPropertyValueCommand,
  GetAssetPropertyValueHistoryCommand,
  GetInterpolatedAssetPropertyValuesCommand,
  IdentityType,
  ImageFileType,
  InternalFailureException,
  InvalidRequestException,
  InvokeAssistantCommand,
  IoTSiteWise,
  IoTSiteWiseClient,
  IoTSiteWiseServiceException,
  JobStatus,
  LimitExceededException,
  ListAccessPoliciesCommand,
  ListActionsCommand,
  ListAssetModelCompositeModelsCommand,
  ListAssetModelPropertiesCommand,
  ListAssetModelPropertiesFilter,
  ListAssetModelsCommand,
  ListAssetPropertiesCommand,
  ListAssetPropertiesFilter,
  ListAssetRelationshipsCommand,
  ListAssetsCommand,
  ListAssetsFilter,
  ListAssociatedAssetsCommand,
  ListBulkImportJobsCommand,
  ListBulkImportJobsFilter,
  ListCompositionRelationshipsCommand,
  ListComputationModelDataBindingUsagesCommand,
  ListComputationModelResolveToResourcesCommand,
  ListComputationModelsCommand,
  ListDashboardsCommand,
  ListDatasetsCommand,
  ListExecutionsCommand,
  ListGatewaysCommand,
  ListInterfaceRelationshipsCommand,
  ListPortalsCommand,
  ListProjectAssetsCommand,
  ListProjectsCommand,
  ListTagsForResourceCommand,
  ListTimeSeriesCommand,
  ListTimeSeriesType,
  LoggingLevel,
  MonitorErrorCode,
  Permission,
  PortalState,
  PortalType,
  PropertyDataType,
  PropertyNotificationState,
  PutAssetModelInterfaceRelationshipCommand,
  PutDefaultEncryptionConfigurationCommand,
  PutLoggingOptionsCommand,
  PutStorageConfigurationCommand,
  Quality,
  RawValueType,
  ResolveToResourceType,
  ResourceNotFoundException,
  ResourceType,
  ScalarType,
  StorageType,
  TagResourceCommand,
  TargetResourceType,
  ThrottlingException,
  TimeOrdering,
  TraversalDirection,
  TraversalType,
  UntagResourceCommand,
  UpdateAccessPolicyCommand,
  UpdateAssetCommand,
  UpdateAssetModelCommand,
  UpdateAssetModelCompositeModelCommand,
  UpdateAssetPropertyCommand,
  UpdateComputationModelCommand,
  UpdateDashboardCommand,
  UpdateDatasetCommand,
  UpdateGatewayCapabilityConfigurationCommand,
  UpdateGatewayCommand,
  UpdatePortalCommand,
  UpdateProjectCommand,
  WarmTierState,
  paginateBatchGetAssetPropertyAggregates,
  paginateBatchGetAssetPropertyValue,
  paginateBatchGetAssetPropertyValueHistory,
  paginateExecuteQuery,
  paginateGetAssetPropertyAggregates,
  paginateGetAssetPropertyValueHistory,
  paginateGetInterpolatedAssetPropertyValues,
  paginateListAccessPolicies,
  paginateListAssetModelCompositeModels,
  paginateListAssetModelProperties,
  paginateListAssetModels,
  paginateListAssetProperties,
  paginateListAssetRelationships,
  paginateListAssets,
  paginateListAssociatedAssets,
  paginateListBulkImportJobs,
  paginateListCompositionRelationships,
  paginateListComputationModelDataBindingUsages,
  paginateListComputationModelResolveToResources,
  paginateListComputationModels,
  paginateListDashboards,
  paginateListDatasets,
  paginateListExecutions,
  paginateListGateways,
  paginateListInterfaceRelationships,
  paginateListPortals,
  paginateListProjectAssets,
  paginateListProjects,
  paginateListTimeSeries,
  waitForAssetActive,
  waitForAssetModelActive,
  waitForAssetModelNotExists,
  waitForAssetNotExists,
  waitForPortalActive,
  waitForPortalNotExists,
  waitUntilAssetActive,
  waitUntilAssetModelActive,
  waitUntilAssetModelNotExists,
  waitUntilAssetNotExists,
  waitUntilPortalActive,
  waitUntilPortalNotExists,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof IoTSiteWiseClient === "function")
assert(typeof IoTSiteWise === "function")
// commands
assert(typeof AssociateAssetsCommand === "function")
assert(typeof AssociateTimeSeriesToAssetPropertyCommand === "function")
assert(typeof BatchAssociateProjectAssetsCommand === "function")
assert(typeof BatchDisassociateProjectAssetsCommand === "function")
assert(typeof BatchGetAssetPropertyAggregatesCommand === "function")
assert(typeof BatchGetAssetPropertyValueCommand === "function")
assert(typeof BatchGetAssetPropertyValueHistoryCommand === "function")
assert(typeof BatchPutAssetPropertyValueCommand === "function")
assert(typeof CreateAccessPolicyCommand === "function")
assert(typeof CreateAssetCommand === "function")
assert(typeof CreateAssetModelCommand === "function")
assert(typeof CreateAssetModelCompositeModelCommand === "function")
assert(typeof CreateBulkImportJobCommand === "function")
assert(typeof CreateComputationModelCommand === "function")
assert(typeof CreateDashboardCommand === "function")
assert(typeof CreateDatasetCommand === "function")
assert(typeof CreateGatewayCommand === "function")
assert(typeof CreatePortalCommand === "function")
assert(typeof CreateProjectCommand === "function")
assert(typeof DeleteAccessPolicyCommand === "function")
assert(typeof DeleteAssetCommand === "function")
assert(typeof DeleteAssetModelCommand === "function")
assert(typeof DeleteAssetModelCompositeModelCommand === "function")
assert(typeof DeleteAssetModelInterfaceRelationshipCommand === "function")
assert(typeof DeleteComputationModelCommand === "function")
assert(typeof DeleteDashboardCommand === "function")
assert(typeof DeleteDatasetCommand === "function")
assert(typeof DeleteGatewayCommand === "function")
assert(typeof DeletePortalCommand === "function")
assert(typeof DeleteProjectCommand === "function")
assert(typeof DeleteTimeSeriesCommand === "function")
assert(typeof DescribeAccessPolicyCommand === "function")
assert(typeof DescribeActionCommand === "function")
assert(typeof DescribeAssetCommand === "function")
assert(typeof DescribeAssetCompositeModelCommand === "function")
assert(typeof DescribeAssetModelCommand === "function")
assert(typeof DescribeAssetModelCompositeModelCommand === "function")
assert(typeof DescribeAssetModelInterfaceRelationshipCommand === "function")
assert(typeof DescribeAssetPropertyCommand === "function")
assert(typeof DescribeBulkImportJobCommand === "function")
assert(typeof DescribeComputationModelCommand === "function")
assert(typeof DescribeComputationModelExecutionSummaryCommand === "function")
assert(typeof DescribeDashboardCommand === "function")
assert(typeof DescribeDatasetCommand === "function")
assert(typeof DescribeDefaultEncryptionConfigurationCommand === "function")
assert(typeof DescribeExecutionCommand === "function")
assert(typeof DescribeGatewayCommand === "function")
assert(typeof DescribeGatewayCapabilityConfigurationCommand === "function")
assert(typeof DescribeLoggingOptionsCommand === "function")
assert(typeof DescribePortalCommand === "function")
assert(typeof DescribeProjectCommand === "function")
assert(typeof DescribeStorageConfigurationCommand === "function")
assert(typeof DescribeTimeSeriesCommand === "function")
assert(typeof DisassociateAssetsCommand === "function")
assert(typeof DisassociateTimeSeriesFromAssetPropertyCommand === "function")
assert(typeof ExecuteActionCommand === "function")
assert(typeof ExecuteQueryCommand === "function")
assert(typeof GetAssetPropertyAggregatesCommand === "function")
assert(typeof GetAssetPropertyValueCommand === "function")
assert(typeof GetAssetPropertyValueHistoryCommand === "function")
assert(typeof GetInterpolatedAssetPropertyValuesCommand === "function")
assert(typeof InvokeAssistantCommand === "function")
assert(typeof ListAccessPoliciesCommand === "function")
assert(typeof ListActionsCommand === "function")
assert(typeof ListAssetModelCompositeModelsCommand === "function")
assert(typeof ListAssetModelPropertiesCommand === "function")
assert(typeof ListAssetModelsCommand === "function")
assert(typeof ListAssetPropertiesCommand === "function")
assert(typeof ListAssetRelationshipsCommand === "function")
assert(typeof ListAssetsCommand === "function")
assert(typeof ListAssociatedAssetsCommand === "function")
assert(typeof ListBulkImportJobsCommand === "function")
assert(typeof ListCompositionRelationshipsCommand === "function")
assert(typeof ListComputationModelDataBindingUsagesCommand === "function")
assert(typeof ListComputationModelResolveToResourcesCommand === "function")
assert(typeof ListComputationModelsCommand === "function")
assert(typeof ListDashboardsCommand === "function")
assert(typeof ListDatasetsCommand === "function")
assert(typeof ListExecutionsCommand === "function")
assert(typeof ListGatewaysCommand === "function")
assert(typeof ListInterfaceRelationshipsCommand === "function")
assert(typeof ListPortalsCommand === "function")
assert(typeof ListProjectAssetsCommand === "function")
assert(typeof ListProjectsCommand === "function")
assert(typeof ListTagsForResourceCommand === "function")
assert(typeof ListTimeSeriesCommand === "function")
assert(typeof PutAssetModelInterfaceRelationshipCommand === "function")
assert(typeof PutDefaultEncryptionConfigurationCommand === "function")
assert(typeof PutLoggingOptionsCommand === "function")
assert(typeof PutStorageConfigurationCommand === "function")
assert(typeof TagResourceCommand === "function")
assert(typeof UntagResourceCommand === "function")
assert(typeof UpdateAccessPolicyCommand === "function")
assert(typeof UpdateAssetCommand === "function")
assert(typeof UpdateAssetModelCommand === "function")
assert(typeof UpdateAssetModelCompositeModelCommand === "function")
assert(typeof UpdateAssetPropertyCommand === "function")
assert(typeof UpdateComputationModelCommand === "function")
assert(typeof UpdateDashboardCommand === "function")
assert(typeof UpdateDatasetCommand === "function")
assert(typeof UpdateGatewayCommand === "function")
assert(typeof UpdateGatewayCapabilityConfigurationCommand === "function")
assert(typeof UpdatePortalCommand === "function")
assert(typeof UpdateProjectCommand === "function")
// enums
assert(typeof AggregateType === "object");
assert(typeof AssetErrorCode === "object");
assert(typeof AssetModelState === "object");
assert(typeof AssetModelType === "object");
assert(typeof AssetModelVersionType === "object");
assert(typeof AssetRelationshipType === "object");
assert(typeof AssetState === "object");
assert(typeof AuthMode === "object");
assert(typeof BatchEntryCompletionStatus === "object");
assert(typeof BatchGetAssetPropertyAggregatesErrorCode === "object");
assert(typeof BatchGetAssetPropertyValueErrorCode === "object");
assert(typeof BatchGetAssetPropertyValueHistoryErrorCode === "object");
assert(typeof BatchPutAssetPropertyValueErrorCode === "object");
assert(typeof CapabilitySyncStatus === "object");
assert(typeof ColumnName === "object");
assert(typeof ComputationModelState === "object");
assert(typeof ComputationModelType === "object");
assert(typeof ComputeLocation === "object");
assert(typeof ConfigurationState === "object");
assert(typeof CoreDeviceOperatingSystem === "object");
assert(typeof DatasetSourceFormat === "object");
assert(typeof DatasetSourceType === "object");
assert(typeof DatasetState === "object");
assert(typeof DetailedErrorCode === "object");
assert(typeof DisassociatedDataStorageState === "object");
assert(typeof EncryptionType === "object");
assert(typeof ErrorCode === "object");
assert(typeof ExecutionState === "object");
assert(typeof ForwardingConfigState === "object");
assert(typeof IdentityType === "object");
assert(typeof ImageFileType === "object");
assert(typeof JobStatus === "object");
assert(typeof ListAssetModelPropertiesFilter === "object");
assert(typeof ListAssetPropertiesFilter === "object");
assert(typeof ListAssetsFilter === "object");
assert(typeof ListBulkImportJobsFilter === "object");
assert(typeof ListTimeSeriesType === "object");
assert(typeof LoggingLevel === "object");
assert(typeof MonitorErrorCode === "object");
assert(typeof Permission === "object");
assert(typeof PortalState === "object");
assert(typeof PortalType === "object");
assert(typeof PropertyDataType === "object");
assert(typeof PropertyNotificationState === "object");
assert(typeof Quality === "object");
assert(typeof RawValueType === "object");
assert(typeof ResolveToResourceType === "object");
assert(typeof ResourceType === "object");
assert(typeof ScalarType === "object");
assert(typeof StorageType === "object");
assert(typeof TargetResourceType === "object");
assert(typeof TimeOrdering === "object");
assert(typeof TraversalDirection === "object");
assert(typeof TraversalType === "object");
assert(typeof WarmTierState === "object");
// errors
assert(AccessDeniedException.prototype instanceof IoTSiteWiseServiceException)
assert(ConflictingOperationException.prototype instanceof IoTSiteWiseServiceException)
assert(InternalFailureException.prototype instanceof IoTSiteWiseServiceException)
assert(InvalidRequestException.prototype instanceof IoTSiteWiseServiceException)
assert(LimitExceededException.prototype instanceof IoTSiteWiseServiceException)
assert(ResourceNotFoundException.prototype instanceof IoTSiteWiseServiceException)
assert(ThrottlingException.prototype instanceof IoTSiteWiseServiceException)
assert(IoTSiteWiseServiceException.prototype instanceof Error)
// waiters
assert(typeof waitForAssetActive === "function")
assert(typeof waitForAssetModelActive === "function")
assert(typeof waitForAssetModelNotExists === "function")
assert(typeof waitForAssetNotExists === "function")
assert(typeof waitForPortalActive === "function")
assert(typeof waitForPortalNotExists === "function")
assert(typeof waitUntilAssetActive === "function")
assert(typeof waitUntilAssetModelActive === "function")
assert(typeof waitUntilAssetModelNotExists === "function")
assert(typeof waitUntilAssetNotExists === "function")
assert(typeof waitUntilPortalActive === "function")
assert(typeof waitUntilPortalNotExists === "function")
// paginators
assert(typeof paginateBatchGetAssetPropertyAggregates === "function")
assert(typeof paginateBatchGetAssetPropertyValue === "function")
assert(typeof paginateBatchGetAssetPropertyValueHistory === "function")
assert(typeof paginateExecuteQuery === "function")
assert(typeof paginateGetAssetPropertyAggregates === "function")
assert(typeof paginateGetAssetPropertyValueHistory === "function")
assert(typeof paginateGetInterpolatedAssetPropertyValues === "function")
assert(typeof paginateListAccessPolicies === "function")
assert(typeof paginateListAssetModelCompositeModels === "function")
assert(typeof paginateListAssetModelProperties === "function")
assert(typeof paginateListAssetModels === "function")
assert(typeof paginateListAssetProperties === "function")
assert(typeof paginateListAssetRelationships === "function")
assert(typeof paginateListAssets === "function")
assert(typeof paginateListAssociatedAssets === "function")
assert(typeof paginateListBulkImportJobs === "function")
assert(typeof paginateListCompositionRelationships === "function")
assert(typeof paginateListComputationModelDataBindingUsages === "function")
assert(typeof paginateListComputationModelResolveToResources === "function")
assert(typeof paginateListComputationModels === "function")
assert(typeof paginateListDashboards === "function")
assert(typeof paginateListDatasets === "function")
assert(typeof paginateListExecutions === "function")
assert(typeof paginateListGateways === "function")
assert(typeof paginateListInterfaceRelationships === "function")
assert(typeof paginateListPortals === "function")
assert(typeof paginateListProjectAssets === "function")
assert(typeof paginateListProjects === "function")
assert(typeof paginateListTimeSeries === "function")
console.log(`IoTSiteWise index test passed.`);
