import {
  AccessDeniedException,
  AccessDeniedException$,
  AccessPolicySummary$,
  ActionDefinition$,
  ActionPayload$,
  ActionSummary$,
  AggregatedValue$,
  Aggregates$,
  AggregateType,
  Alarms$,
  Annotation$,
  ApplicationStatus,
  ApplicationSummary$,
  AssetBindingValueFilter$,
  AssetCompositeModel$,
  AssetCompositeModelPathSegment$,
  AssetCompositeModelSummary$,
  AssetErrorCode,
  AssetErrorDetails$,
  AssetHierarchy$,
  AssetHierarchyInfo$,
  AssetModelBindingValueFilter$,
  AssetModelCompositeModel$,
  AssetModelCompositeModelDefinition$,
  AssetModelCompositeModelPathSegment$,
  AssetModelCompositeModelSummary$,
  AssetModelHierarchy$,
  AssetModelHierarchyDefinition$,
  AssetModelProperty$,
  AssetModelPropertyBindingValue$,
  AssetModelPropertyBindingValueFilter$,
  AssetModelPropertyDefinition$,
  AssetModelPropertyPathSegment$,
  AssetModelPropertySummary$,
  AssetModelState,
  AssetModelStatus$,
  AssetModelSummary$,
  AssetModelType,
  AssetModelVersionType,
  AssetProperty$,
  AssetPropertyBindingValue$,
  AssetPropertyBindingValueFilter$,
  AssetPropertyPathSegment$,
  AssetPropertySummary$,
  AssetPropertyValue$,
  AssetRelationshipSummary$,
  AssetRelationshipType,
  AssetState,
  AssetStatus$,
  AssetSummary$,
  AssociateAssets$,
  AssociateAssetsCommand,
  AssociateAssetsRequest$,
  AssociatedAssetsSummary$,
  AssociateDataSegmentEntry$,
  AssociateTimeSeriesToAssetProperty$,
  AssociateTimeSeriesToAssetPropertyCommand,
  AssociateTimeSeriesToAssetPropertyRequest$,
  Attribute$,
  AuthMode,
  BatchAssociateDataSegmentsToDataset$,
  BatchAssociateDataSegmentsToDatasetCommand,
  BatchAssociateDataSegmentsToDatasetRequest$,
  BatchAssociateDataSegmentsToDatasetResponse$,
  BatchAssociateProjectAssets$,
  BatchAssociateProjectAssetsCommand,
  BatchAssociateProjectAssetsRequest$,
  BatchAssociateProjectAssetsResponse$,
  BatchDeleteDatasetDataSegments$,
  BatchDeleteDatasetDataSegmentsCommand,
  BatchDeleteDatasetDataSegmentsRequest$,
  BatchDeleteDatasetDataSegmentsResponse$,
  BatchDisassociateDataSegmentsFromDataset$,
  BatchDisassociateDataSegmentsFromDatasetCommand,
  BatchDisassociateDataSegmentsFromDatasetRequest$,
  BatchDisassociateDataSegmentsFromDatasetResponse$,
  BatchDisassociateProjectAssets$,
  BatchDisassociateProjectAssetsCommand,
  BatchDisassociateProjectAssetsRequest$,
  BatchDisassociateProjectAssetsResponse$,
  BatchEntryCompletionStatus,
  BatchGetAssetPropertyAggregates$,
  BatchGetAssetPropertyAggregatesCommand,
  BatchGetAssetPropertyAggregatesEntry$,
  BatchGetAssetPropertyAggregatesErrorCode,
  BatchGetAssetPropertyAggregatesErrorEntry$,
  BatchGetAssetPropertyAggregatesErrorInfo$,
  BatchGetAssetPropertyAggregatesRequest$,
  BatchGetAssetPropertyAggregatesResponse$,
  BatchGetAssetPropertyAggregatesSkippedEntry$,
  BatchGetAssetPropertyAggregatesSuccessEntry$,
  BatchGetAssetPropertyValue$,
  BatchGetAssetPropertyValueCommand,
  BatchGetAssetPropertyValueEntry$,
  BatchGetAssetPropertyValueErrorCode,
  BatchGetAssetPropertyValueErrorEntry$,
  BatchGetAssetPropertyValueErrorInfo$,
  BatchGetAssetPropertyValueHistory$,
  BatchGetAssetPropertyValueHistoryCommand,
  BatchGetAssetPropertyValueHistoryEntry$,
  BatchGetAssetPropertyValueHistoryErrorCode,
  BatchGetAssetPropertyValueHistoryErrorEntry$,
  BatchGetAssetPropertyValueHistoryErrorInfo$,
  BatchGetAssetPropertyValueHistoryRequest$,
  BatchGetAssetPropertyValueHistoryResponse$,
  BatchGetAssetPropertyValueHistorySkippedEntry$,
  BatchGetAssetPropertyValueHistorySuccessEntry$,
  BatchGetAssetPropertyValueRequest$,
  BatchGetAssetPropertyValueResponse$,
  BatchGetAssetPropertyValueSkippedEntry$,
  BatchGetAssetPropertyValueSuccessEntry$,
  BatchPutAssetPropertyError$,
  BatchPutAssetPropertyErrorEntry$,
  BatchPutAssetPropertyValue$,
  BatchPutAssetPropertyValueCommand,
  BatchPutAssetPropertyValueErrorCode,
  BatchPutAssetPropertyValueRequest$,
  BatchPutAssetPropertyValueResponse$,
  CancelEnrichmentJob$,
  CancelEnrichmentJobCommand,
  CancelEnrichmentJobRequest$,
  CancelEnrichmentJobResponse$,
  CancelPipelineExecution$,
  CancelPipelineExecutionCommand,
  CancelPipelineExecutionRequest$,
  CancelPipelineExecutionResponse$,
  CancelQuery$,
  CancelQueryCommand,
  CancelQueryRequest$,
  CancelQueryResponse$,
  CapabilitySyncStatus,
  Citation$,
  ColumnInfo$,
  ColumnInformation$,
  ColumnName,
  ColumnType$,
  CompositeModelProperty$,
  CompositionDetails$,
  CompositionRelationshipItem$,
  CompositionRelationshipSummary$,
  ComputationModelAnomalyDetectionConfiguration$,
  ComputationModelConfiguration$,
  ComputationModelDataBindingUsageSummary$,
  ComputationModelDataBindingValue$,
  ComputationModelResolveToResourceSummary$,
  ComputationModelState,
  ComputationModelStatus$,
  ComputationModelSummary$,
  ComputationModelType,
  ComputeLocation,
  ComputeNode$,
  ComputeNodeErrorCode,
  ComputeNodeExecutionDetails$,
  ComputeNodeExecutionState,
  ComputeNodeExecutionStateDetails$,
  ComputeNodeExecutionStatus$,
  ConfigurationErrorDetails$,
  ConfigurationState,
  ConfigurationStatus$,
  ConflictingOperationException,
  ConflictingOperationException$,
  ContainerTaskConfiguration$,
  Content$,
  CoreDeviceOperatingSystem,
  CreateAccessPolicy$,
  CreateAccessPolicyCommand,
  CreateAccessPolicyRequest$,
  CreateAccessPolicyResponse$,
  CreateApplication$,
  CreateApplicationCommand,
  CreateApplicationRequest$,
  CreateApplicationResponse$,
  CreateAsset$,
  CreateAssetCommand,
  CreateAssetModel$,
  CreateAssetModelCommand,
  CreateAssetModelCompositeModel$,
  CreateAssetModelCompositeModelCommand,
  CreateAssetModelCompositeModelRequest$,
  CreateAssetModelCompositeModelResponse$,
  CreateAssetModelRequest$,
  CreateAssetModelResponse$,
  CreateAssetRequest$,
  CreateAssetResponse$,
  CreateBulkImportJob$,
  CreateBulkImportJobCommand,
  CreateBulkImportJobRequest$,
  CreateBulkImportJobResponse$,
  CreateComputationModel$,
  CreateComputationModelCommand,
  CreateComputationModelRequest$,
  CreateComputationModelResponse$,
  CreateDashboard$,
  CreateDashboardCommand,
  CreateDashboardRequest$,
  CreateDashboardResponse$,
  CreateDataset$,
  CreateDatasetCommand,
  CreateDatasetExportJob$,
  CreateDatasetExportJobCommand,
  CreateDatasetExportJobRequest$,
  CreateDatasetExportJobResponse$,
  CreateDatasetRequest$,
  CreateDatasetResponse$,
  CreateEnrichmentJob$,
  CreateEnrichmentJobCommand,
  CreateEnrichmentJobRequest$,
  CreateEnrichmentJobResponse$,
  CreateGateway$,
  CreateGatewayCommand,
  CreateGatewayRequest$,
  CreateGatewayResponse$,
  CreatePipeline$,
  CreatePipelineCommand,
  CreatePipelineRequest$,
  CreatePipelineResponse$,
  CreatePortal$,
  CreatePortalCommand,
  CreatePortalRequest$,
  CreatePortalResponse$,
  CreateProject$,
  CreateProjectCommand,
  CreateProjectRequest$,
  CreateProjectResponse$,
  CreateTask$,
  CreateTaskCommand,
  CreateTaskRequest$,
  CreateTaskResponse$,
  CreateWorkspace$,
  CreateWorkspaceCommand,
  CreateWorkspaceRequest$,
  CreateWorkspaceResponse$,
  Csv$,
  CustomerManagedS3Storage$,
  DashboardSummary$,
  DataBindingValue$,
  DataBindingValueFilter$,
  DataSegmentEnrichment$,
  DataSegmentErrorCode,
  DataSegmentRelationshipSummary$,
  DataSegmentSummary$,
  DatasetConfig$,
  DatasetEnrichment$,
  DatasetEnrichmentEntry$,
  DatasetEnrichmentStatus,
  DatasetExportJobFilter,
  DatasetExportJobStatus,
  DatasetItem$,
  DataSetReference$,
  DatasetSource$,
  DatasetSourceFormat,
  DatasetSourceType,
  DatasetState,
  DatasetStatus$,
  DatasetSummary$,
  DatasetTypeEnum,
  Datum$,
  DeleteAccessPolicy$,
  DeleteAccessPolicyCommand,
  DeleteAccessPolicyRequest$,
  DeleteAccessPolicyResponse$,
  DeleteApplication$,
  DeleteApplicationCommand,
  DeleteApplicationRequest$,
  DeleteApplicationResponse$,
  DeleteAsset$,
  DeleteAssetCommand,
  DeleteAssetModel$,
  DeleteAssetModelCommand,
  DeleteAssetModelCompositeModel$,
  DeleteAssetModelCompositeModelCommand,
  DeleteAssetModelCompositeModelRequest$,
  DeleteAssetModelCompositeModelResponse$,
  DeleteAssetModelInterfaceRelationship$,
  DeleteAssetModelInterfaceRelationshipCommand,
  DeleteAssetModelInterfaceRelationshipRequest$,
  DeleteAssetModelInterfaceRelationshipResponse$,
  DeleteAssetModelRequest$,
  DeleteAssetModelResponse$,
  DeleteAssetRequest$,
  DeleteAssetResponse$,
  DeleteComputationModel$,
  DeleteComputationModelCommand,
  DeleteComputationModelRequest$,
  DeleteComputationModelResponse$,
  DeleteDashboard$,
  DeleteDashboardCommand,
  DeleteDashboardRequest$,
  DeleteDashboardResponse$,
  DeleteDataSegmentEntry$,
  DeleteDataset$,
  DeleteDatasetCommand,
  DeleteDatasetRequest$,
  DeleteDatasetResponse$,
  DeleteGateway$,
  DeleteGatewayCommand,
  DeleteGatewayRequest$,
  DeletePipeline$,
  DeletePipelineCommand,
  DeletePipelineRequest$,
  DeletePipelineResponse$,
  DeletePortal$,
  DeletePortalCommand,
  DeletePortalRequest$,
  DeletePortalResponse$,
  DeleteProject$,
  DeleteProjectCommand,
  DeleteProjectRequest$,
  DeleteProjectResponse$,
  DeleteTask$,
  DeleteTaskCommand,
  DeleteTaskRequest$,
  DeleteTaskResponse$,
  DeleteTimeSeries$,
  DeleteTimeSeriesCommand,
  DeleteTimeSeriesRequest$,
  DeleteWorkspace$,
  DeleteWorkspaceCommand,
  DeleteWorkspaceRequest$,
  DeleteWorkspaceResponse$,
  DescribeAccessPolicy$,
  DescribeAccessPolicyCommand,
  DescribeAccessPolicyRequest$,
  DescribeAccessPolicyResponse$,
  DescribeAction$,
  DescribeActionCommand,
  DescribeActionRequest$,
  DescribeActionResponse$,
  DescribeApplication$,
  DescribeApplicationCommand,
  DescribeApplicationRequest$,
  DescribeApplicationResponse$,
  DescribeAsset$,
  DescribeAssetCommand,
  DescribeAssetCompositeModel$,
  DescribeAssetCompositeModelCommand,
  DescribeAssetCompositeModelRequest$,
  DescribeAssetCompositeModelResponse$,
  DescribeAssetModel$,
  DescribeAssetModelCommand,
  DescribeAssetModelCompositeModel$,
  DescribeAssetModelCompositeModelCommand,
  DescribeAssetModelCompositeModelRequest$,
  DescribeAssetModelCompositeModelResponse$,
  DescribeAssetModelInterfaceRelationship$,
  DescribeAssetModelInterfaceRelationshipCommand,
  DescribeAssetModelInterfaceRelationshipRequest$,
  DescribeAssetModelInterfaceRelationshipResponse$,
  DescribeAssetModelRequest$,
  DescribeAssetModelResponse$,
  DescribeAssetProperty$,
  DescribeAssetPropertyCommand,
  DescribeAssetPropertyRequest$,
  DescribeAssetPropertyResponse$,
  DescribeAssetRequest$,
  DescribeAssetResponse$,
  DescribeBulkImportJob$,
  DescribeBulkImportJobCommand,
  DescribeBulkImportJobRequest$,
  DescribeBulkImportJobResponse$,
  DescribeComputationModel$,
  DescribeComputationModelCommand,
  DescribeComputationModelExecutionSummary$,
  DescribeComputationModelExecutionSummaryCommand,
  DescribeComputationModelExecutionSummaryRequest$,
  DescribeComputationModelExecutionSummaryResponse$,
  DescribeComputationModelRequest$,
  DescribeComputationModelResponse$,
  DescribeDashboard$,
  DescribeDashboardCommand,
  DescribeDashboardRequest$,
  DescribeDashboardResponse$,
  DescribeDataset$,
  DescribeDatasetCommand,
  DescribeDatasetExportJob$,
  DescribeDatasetExportJobCommand,
  DescribeDatasetExportJobRequest$,
  DescribeDatasetExportJobResponse$,
  DescribeDatasetRequest$,
  DescribeDatasetResponse$,
  DescribeDefaultEncryptionConfiguration$,
  DescribeDefaultEncryptionConfigurationCommand,
  DescribeDefaultEncryptionConfigurationRequest$,
  DescribeDefaultEncryptionConfigurationResponse$,
  DescribeEnrichmentJob$,
  DescribeEnrichmentJobCommand,
  DescribeEnrichmentJobRequest$,
  DescribeEnrichmentJobResponse$,
  DescribeExecution$,
  DescribeExecutionCommand,
  DescribeExecutionRequest$,
  DescribeExecutionResponse$,
  DescribeGateway$,
  DescribeGatewayCapabilityConfiguration$,
  DescribeGatewayCapabilityConfigurationCommand,
  DescribeGatewayCapabilityConfigurationRequest$,
  DescribeGatewayCapabilityConfigurationResponse$,
  DescribeGatewayCommand,
  DescribeGatewayRequest$,
  DescribeGatewayResponse$,
  DescribeLoggingOptions$,
  DescribeLoggingOptionsCommand,
  DescribeLoggingOptionsRequest$,
  DescribeLoggingOptionsResponse$,
  DescribePipeline$,
  DescribePipelineCommand,
  DescribePipelineExecution$,
  DescribePipelineExecutionCommand,
  DescribePipelineExecutionRequest$,
  DescribePipelineExecutionResponse$,
  DescribePipelineRequest$,
  DescribePipelineResponse$,
  DescribePortal$,
  DescribePortalCommand,
  DescribePortalRequest$,
  DescribePortalResponse$,
  DescribeProject$,
  DescribeProjectCommand,
  DescribeProjectRequest$,
  DescribeProjectResponse$,
  DescribeQuery$,
  DescribeQueryCommand,
  DescribeQueryRequest$,
  DescribeQueryResponse$,
  DescribeSearch$,
  DescribeSearchCommand,
  DescribeSearchRequest$,
  DescribeSearchResponse$,
  DescribeStorageConfiguration$,
  DescribeStorageConfigurationCommand,
  DescribeStorageConfigurationRequest$,
  DescribeStorageConfigurationResponse$,
  DescribeTask$,
  DescribeTaskCommand,
  DescribeTaskRequest$,
  DescribeTaskResponse$,
  DescribeTimeSeries$,
  DescribeTimeSeriesCommand,
  DescribeTimeSeriesRequest$,
  DescribeTimeSeriesResponse$,
  DescribeWorkspace$,
  DescribeWorkspaceCommand,
  DescribeWorkspaceRequest$,
  DescribeWorkspaceResponse$,
  DetailedError$,
  DetailedErrorCode,
  DetailedPipelineError$,
  DetailedPipelineErrorCode,
  DisassociateAssets$,
  DisassociateAssetsCommand,
  DisassociateAssetsRequest$,
  DisassociateDataSegmentEntry$,
  DisassociatedDataStorageState,
  DisassociateTimeSeriesFromAssetProperty$,
  DisassociateTimeSeriesFromAssetPropertyCommand,
  DisassociateTimeSeriesFromAssetPropertyRequest$,
  EncryptionType,
  EnrichmentJobConfiguration$,
  EnrichmentJobStatus,
  EnrichmentJobSummary$,
  EnrichmentStatus,
  EnrichmentTrimSettings$,
  ErrorCode,
  ErrorDetails$,
  ErrorReportLocation$,
  EventDetection$,
  ExecuteAction$,
  ExecuteActionCommand,
  ExecuteActionRequest$,
  ExecuteActionResponse$,
  ExecuteQuery$,
  ExecuteQueryCommand,
  ExecuteQueryRequest$,
  ExecuteQueryResponse$,
  ExecutionEnvironmentVariables$,
  ExecutionState,
  ExecutionStatus$,
  ExecutionSummary$,
  ExportDataType,
  ExportErrorReportLocation$,
  ExportJobSummary$,
  ExpressionVariable$,
  FailedDataSegmentAssociation$,
  FailedDataSegmentDeletion$,
  FailedDataSegmentDisassociation$,
  File$,
  FileFormat$,
  FormatSettings$,
  ForwardingConfig$,
  ForwardingConfigState,
  GatewayCapabilitySummary$,
  GatewayPlatform$,
  GatewaySummary$,
  GetAssetPropertyAggregates$,
  GetAssetPropertyAggregatesCommand,
  GetAssetPropertyAggregatesRequest$,
  GetAssetPropertyAggregatesResponse$,
  GetAssetPropertyValue$,
  GetAssetPropertyValueCommand,
  GetAssetPropertyValueHistory$,
  GetAssetPropertyValueHistoryCommand,
  GetAssetPropertyValueHistoryRequest$,
  GetAssetPropertyValueHistoryResponse$,
  GetAssetPropertyValueRequest$,
  GetAssetPropertyValueResponse$,
  GetCaptureData$,
  GetCaptureDataCommand,
  GetCaptureDataRequest$,
  GetCaptureDataResponse$,
  GetInterpolatedAssetPropertyValues$,
  GetInterpolatedAssetPropertyValuesCommand,
  GetInterpolatedAssetPropertyValuesRequest$,
  GetInterpolatedAssetPropertyValuesResponse$,
  GetQueryResults$,
  GetQueryResultsCommand,
  GetQueryResultsRequest$,
  GetQueryResultsResponse$,
  GetSearchResults$,
  GetSearchResultsCommand,
  GetSearchResultsRequest$,
  GetSearchResultsResponse$,
  Greengrass$,
  GreengrassV2$,
  GroupIdentity$,
  HierarchyMapping$,
  IAMRoleIdentity$,
  IAMUserIdentity$,
  Identity$,
  IdentityType,
  Image$,
  ImageFile$,
  ImageFileType,
  ImageLocation$,
  InterfaceRelationship$,
  InterfaceRelationshipSummary$,
  InterfaceSummary$,
  InternalFailureException,
  InternalFailureException$,
  InterpolatedAssetPropertyValue$,
  InvalidRequestException,
  InvalidRequestException$,
  InvocationOutput$,
  InvokeAssistant$,
  InvokeAssistantCommand,
  InvokeAssistantRequest$,
  InvokeAssistantResponse$,
  IoTSiteWise,
  IoTSiteWiseClient,
  IoTSiteWiseServiceException,
  JobConfiguration$,
  JobStatus,
  JobSummary$,
  JobType,
  KendraSourceDetail$,
  LimitExceededException,
  LimitExceededException$,
  ListAccessPolicies$,
  ListAccessPoliciesCommand,
  ListAccessPoliciesRequest$,
  ListAccessPoliciesResponse$,
  ListActions$,
  ListActionsCommand,
  ListActionsRequest$,
  ListActionsResponse$,
  ListApplications$,
  ListApplicationsCommand,
  ListApplicationsRequest$,
  ListApplicationsResponse$,
  ListAssetModelCompositeModels$,
  ListAssetModelCompositeModelsCommand,
  ListAssetModelCompositeModelsRequest$,
  ListAssetModelCompositeModelsResponse$,
  ListAssetModelProperties$,
  ListAssetModelPropertiesCommand,
  ListAssetModelPropertiesFilter,
  ListAssetModelPropertiesRequest$,
  ListAssetModelPropertiesResponse$,
  ListAssetModels$,
  ListAssetModelsCommand,
  ListAssetModelsRequest$,
  ListAssetModelsResponse$,
  ListAssetProperties$,
  ListAssetPropertiesCommand,
  ListAssetPropertiesFilter,
  ListAssetPropertiesRequest$,
  ListAssetPropertiesResponse$,
  ListAssetRelationships$,
  ListAssetRelationshipsCommand,
  ListAssetRelationshipsRequest$,
  ListAssetRelationshipsResponse$,
  ListAssets$,
  ListAssetsCommand,
  ListAssetsFilter,
  ListAssetsRequest$,
  ListAssetsResponse$,
  ListAssociatedAssets$,
  ListAssociatedAssetsCommand,
  ListAssociatedAssetsRequest$,
  ListAssociatedAssetsResponse$,
  ListBulkImportJobs$,
  ListBulkImportJobsCommand,
  ListBulkImportJobsFilter,
  ListBulkImportJobsRequest$,
  ListBulkImportJobsResponse$,
  ListCompositionRelationships$,
  ListCompositionRelationshipsCommand,
  ListCompositionRelationshipsRequest$,
  ListCompositionRelationshipsResponse$,
  ListComputationModelDataBindingUsages$,
  ListComputationModelDataBindingUsagesCommand,
  ListComputationModelDataBindingUsagesRequest$,
  ListComputationModelDataBindingUsagesResponse$,
  ListComputationModelResolveToResources$,
  ListComputationModelResolveToResourcesCommand,
  ListComputationModelResolveToResourcesRequest$,
  ListComputationModelResolveToResourcesResponse$,
  ListComputationModels$,
  ListComputationModelsCommand,
  ListComputationModelsRequest$,
  ListComputationModelsResponse$,
  ListDashboards$,
  ListDashboardsCommand,
  ListDashboardsRequest$,
  ListDashboardsResponse$,
  ListDatasetDataSegmentRelationships$,
  ListDatasetDataSegmentRelationshipsCommand,
  ListDatasetDataSegmentRelationshipsRequest$,
  ListDatasetDataSegmentRelationshipsResponse$,
  ListDatasetDataSegments$,
  ListDatasetDataSegmentsCommand,
  ListDatasetDataSegmentsRequest$,
  ListDatasetDataSegmentsResponse$,
  ListDatasetExportJobs$,
  ListDatasetExportJobsCommand,
  ListDatasetExportJobsRequest$,
  ListDatasetExportJobsResponse$,
  ListDatasets$,
  ListDatasetsCommand,
  ListDatasetsRequest$,
  ListDatasetsResponse$,
  ListEnrichmentJobs$,
  ListEnrichmentJobsCommand,
  ListEnrichmentJobsRequest$,
  ListEnrichmentJobsResponse$,
  ListExecutions$,
  ListExecutionsCommand,
  ListExecutionsRequest$,
  ListExecutionsResponse$,
  ListGateways$,
  ListGatewaysCommand,
  ListGatewaysRequest$,
  ListGatewaysResponse$,
  ListInterfaceRelationships$,
  ListInterfaceRelationshipsCommand,
  ListInterfaceRelationshipsRequest$,
  ListInterfaceRelationshipsResponse$,
  ListPipelineExecutions$,
  ListPipelineExecutionsCommand,
  ListPipelineExecutionsRequest$,
  ListPipelineExecutionsResponse$,
  ListPipelines$,
  ListPipelinesCommand,
  ListPipelinesRequest$,
  ListPipelinesResponse$,
  ListPortals$,
  ListPortalsCommand,
  ListPortalsRequest$,
  ListPortalsResponse$,
  ListProjectAssets$,
  ListProjectAssetsCommand,
  ListProjectAssetsRequest$,
  ListProjectAssetsResponse$,
  ListProjects$,
  ListProjectsCommand,
  ListProjectsRequest$,
  ListProjectsResponse$,
  ListQueries$,
  ListQueriesCommand,
  ListQueriesRequest$,
  ListQueriesResponse$,
  ListSearches$,
  ListSearchesCommand,
  ListSearchesFilters$,
  ListSearchesRequest$,
  ListSearchesResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  ListTasks$,
  ListTasksCommand,
  ListTasksRequest$,
  ListTasksResponse$,
  ListTimeSeries$,
  ListTimeSeriesCommand,
  ListTimeSeriesRequest$,
  ListTimeSeriesResponse$,
  ListTimeSeriesType,
  ListWorkspaces$,
  ListWorkspacesCommand,
  ListWorkspacesRequest$,
  ListWorkspacesResponse$,
  Location$,
  LoggingLevel,
  LoggingOptions$,
  MatchedDataBinding$,
  Measurement$,
  MeasurementProcessingConfig$,
  Metric$,
  MetricProcessingConfig$,
  MetricWindow$,
  MonitorErrorCode,
  MonitorErrorDetails$,
  Mp4$,
  MultiLayerStorage$,
  paginateBatchGetAssetPropertyAggregates,
  paginateBatchGetAssetPropertyValue,
  paginateBatchGetAssetPropertyValueHistory,
  paginateDescribePipelineExecution,
  paginateExecuteQuery,
  paginateGetAssetPropertyAggregates,
  paginateGetAssetPropertyValueHistory,
  paginateGetInterpolatedAssetPropertyValues,
  paginateGetQueryResults,
  paginateGetSearchResults,
  paginateListAccessPolicies,
  paginateListActions,
  paginateListApplications,
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
  paginateListDatasetDataSegmentRelationships,
  paginateListDatasetDataSegments,
  paginateListDatasetExportJobs,
  paginateListDatasets,
  paginateListEnrichmentJobs,
  paginateListExecutions,
  paginateListGateways,
  paginateListInterfaceRelationships,
  paginateListPipelineExecutions,
  paginateListPipelines,
  paginateListPortals,
  paginateListProjectAssets,
  paginateListProjects,
  paginateListQueries,
  paginateListSearches,
  paginateListTasks,
  paginateListTimeSeries,
  paginateListWorkspaces,
  Parquet$,
  Permission,
  PipelineErrorCode,
  PipelineExecutionState,
  PipelineExecutionStateDetails$,
  PipelineExecutionStatus$,
  PipelineExecutionSummary$,
  PipelineSummary$,
  PortalResource$,
  PortalState,
  PortalStatus$,
  PortalSummary$,
  PortalType,
  PortalTypeEntry$,
  PreconditionFailedException,
  PreconditionFailedException$,
  ProcessingInput$,
  ProcessingType,
  ProcessingUnit,
  ProjectResource$,
  ProjectSummary$,
  Property$,
  PropertyDataType,
  PropertyMapping$,
  PropertyMappingConfiguration$,
  PropertyNotification$,
  PropertyNotificationState,
  PropertyType$,
  PropertyValueNullValue$,
  PutAssetModelInterfaceRelationship$,
  PutAssetModelInterfaceRelationshipCommand,
  PutAssetModelInterfaceRelationshipRequest$,
  PutAssetModelInterfaceRelationshipResponse$,
  PutAssetPropertyValueEntry$,
  PutDefaultEncryptionConfiguration$,
  PutDefaultEncryptionConfigurationCommand,
  PutDefaultEncryptionConfigurationRequest$,
  PutDefaultEncryptionConfigurationResponse$,
  PutLoggingOptions$,
  PutLoggingOptionsCommand,
  PutLoggingOptionsRequest$,
  PutLoggingOptionsResponse$,
  PutStorageConfiguration$,
  PutStorageConfigurationCommand,
  PutStorageConfigurationRequest$,
  PutStorageConfigurationResponse$,
  Quality,
  QueryStatistics$,
  QueryStatus,
  QuerySummary$,
  QueryTimeoutException,
  QueryTimeoutException$,
  RawValueType,
  Reference$,
  ResolveTo$,
  ResolveToResourceType,
  Resource$,
  ResourceAlreadyExistsException,
  ResourceAlreadyExistsException$,
  ResourceError$,
  ResourceErrorCode,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResourceState,
  ResourceStatus$,
  ResourceType,
  ResponseStream$,
  RetentionPeriod$,
  Row$,
  ScalarType,
  SearchFilters$,
  SearchResult$,
  SearchStatus,
  SearchSummary$,
  SearchType,
  ServiceUnavailableException,
  ServiceUnavailableException$,
  SessionConfig$,
  SiemensIE$,
  Source$,
  SourceDetail$,
  StartPipelineExecution$,
  StartPipelineExecutionCommand,
  StartPipelineExecutionRequest$,
  StartPipelineExecutionResponse$,
  StartQuery$,
  StartQueryCommand,
  StartQueryRequest$,
  StartQueryResponse$,
  StartSearch$,
  StartSearchCommand,
  StartSearchRequest$,
  StartSearchResponse$,
  StorageType,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  TargetResource$,
  TargetResourceType,
  TaskConfiguration$,
  TaskSummary$,
  ThrottlingException,
  ThrottlingException$,
  TimeInNanos$,
  TimeInterval$,
  TimeOrdering,
  TimeseriesItem$,
  TimeSeriesSummary$,
  TooManyTagsException,
  TooManyTagsException$,
  Trace$,
  Transform$,
  TransformProcessingConfig$,
  TraversalDirection,
  TraversalType,
  TrimSettings$,
  TumblingWindow$,
  UnauthorizedException,
  UnauthorizedException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateAccessPolicy$,
  UpdateAccessPolicyCommand,
  UpdateAccessPolicyRequest$,
  UpdateAccessPolicyResponse$,
  UpdateAsset$,
  UpdateAssetCommand,
  UpdateAssetModel$,
  UpdateAssetModelCommand,
  UpdateAssetModelCompositeModel$,
  UpdateAssetModelCompositeModelCommand,
  UpdateAssetModelCompositeModelRequest$,
  UpdateAssetModelCompositeModelResponse$,
  UpdateAssetModelRequest$,
  UpdateAssetModelResponse$,
  UpdateAssetProperty$,
  UpdateAssetPropertyCommand,
  UpdateAssetPropertyRequest$,
  UpdateAssetRequest$,
  UpdateAssetResponse$,
  UpdateComputationModel$,
  UpdateComputationModelCommand,
  UpdateComputationModelRequest$,
  UpdateComputationModelResponse$,
  UpdateDashboard$,
  UpdateDashboardCommand,
  UpdateDashboardRequest$,
  UpdateDashboardResponse$,
  UpdateDataset$,
  UpdateDatasetCommand,
  UpdateDatasetRequest$,
  UpdateDatasetResponse$,
  UpdateGateway$,
  UpdateGatewayCapabilityConfiguration$,
  UpdateGatewayCapabilityConfigurationCommand,
  UpdateGatewayCapabilityConfigurationRequest$,
  UpdateGatewayCapabilityConfigurationResponse$,
  UpdateGatewayCommand,
  UpdateGatewayRequest$,
  UpdatePipeline$,
  UpdatePipelineCommand,
  UpdatePipelineRequest$,
  UpdatePipelineResponse$,
  UpdatePortal$,
  UpdatePortalCommand,
  UpdatePortalRequest$,
  UpdatePortalResponse$,
  UpdateProject$,
  UpdateProjectCommand,
  UpdateProjectRequest$,
  UpdateProjectResponse$,
  UpdateTask$,
  UpdateTaskCommand,
  UpdateTaskRequest$,
  UpdateTaskResponse$,
  UpdateWorkspace$,
  UpdateWorkspaceCommand,
  UpdateWorkspaceRequest$,
  UpdateWorkspaceResponse$,
  UserIdentity$,
  ValidationException,
  ValidationException$,
  VariableValue$,
  Variant$,
  VideoDataType,
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
  WarmTierRetentionPeriod$,
  WarmTierState,
  WorkspaceEncryptionConfiguration$,
  WorkspaceEncryptionConfigurationInfo$,
  WorkspaceErrorDetails$,
  WorkspaceState,
  WorkspaceStatus$,
  WorkspaceSummary$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof IoTSiteWiseClient === "function");
assert(typeof IoTSiteWise === "function");
// commands
assert(typeof AssociateAssetsCommand === "function");
assert(typeof AssociateAssets$ === "object");
assert(typeof AssociateTimeSeriesToAssetPropertyCommand === "function");
assert(typeof AssociateTimeSeriesToAssetProperty$ === "object");
assert(typeof BatchAssociateDataSegmentsToDatasetCommand === "function");
assert(typeof BatchAssociateDataSegmentsToDataset$ === "object");
assert(typeof BatchAssociateProjectAssetsCommand === "function");
assert(typeof BatchAssociateProjectAssets$ === "object");
assert(typeof BatchDeleteDatasetDataSegmentsCommand === "function");
assert(typeof BatchDeleteDatasetDataSegments$ === "object");
assert(typeof BatchDisassociateDataSegmentsFromDatasetCommand === "function");
assert(typeof BatchDisassociateDataSegmentsFromDataset$ === "object");
assert(typeof BatchDisassociateProjectAssetsCommand === "function");
assert(typeof BatchDisassociateProjectAssets$ === "object");
assert(typeof BatchGetAssetPropertyAggregatesCommand === "function");
assert(typeof BatchGetAssetPropertyAggregates$ === "object");
assert(typeof BatchGetAssetPropertyValueCommand === "function");
assert(typeof BatchGetAssetPropertyValue$ === "object");
assert(typeof BatchGetAssetPropertyValueHistoryCommand === "function");
assert(typeof BatchGetAssetPropertyValueHistory$ === "object");
assert(typeof BatchPutAssetPropertyValueCommand === "function");
assert(typeof BatchPutAssetPropertyValue$ === "object");
assert(typeof CancelEnrichmentJobCommand === "function");
assert(typeof CancelEnrichmentJob$ === "object");
assert(typeof CancelPipelineExecutionCommand === "function");
assert(typeof CancelPipelineExecution$ === "object");
assert(typeof CancelQueryCommand === "function");
assert(typeof CancelQuery$ === "object");
assert(typeof CreateAccessPolicyCommand === "function");
assert(typeof CreateAccessPolicy$ === "object");
assert(typeof CreateApplicationCommand === "function");
assert(typeof CreateApplication$ === "object");
assert(typeof CreateAssetCommand === "function");
assert(typeof CreateAsset$ === "object");
assert(typeof CreateAssetModelCommand === "function");
assert(typeof CreateAssetModel$ === "object");
assert(typeof CreateAssetModelCompositeModelCommand === "function");
assert(typeof CreateAssetModelCompositeModel$ === "object");
assert(typeof CreateBulkImportJobCommand === "function");
assert(typeof CreateBulkImportJob$ === "object");
assert(typeof CreateComputationModelCommand === "function");
assert(typeof CreateComputationModel$ === "object");
assert(typeof CreateDashboardCommand === "function");
assert(typeof CreateDashboard$ === "object");
assert(typeof CreateDatasetCommand === "function");
assert(typeof CreateDataset$ === "object");
assert(typeof CreateDatasetExportJobCommand === "function");
assert(typeof CreateDatasetExportJob$ === "object");
assert(typeof CreateEnrichmentJobCommand === "function");
assert(typeof CreateEnrichmentJob$ === "object");
assert(typeof CreateGatewayCommand === "function");
assert(typeof CreateGateway$ === "object");
assert(typeof CreatePipelineCommand === "function");
assert(typeof CreatePipeline$ === "object");
assert(typeof CreatePortalCommand === "function");
assert(typeof CreatePortal$ === "object");
assert(typeof CreateProjectCommand === "function");
assert(typeof CreateProject$ === "object");
assert(typeof CreateTaskCommand === "function");
assert(typeof CreateTask$ === "object");
assert(typeof CreateWorkspaceCommand === "function");
assert(typeof CreateWorkspace$ === "object");
assert(typeof DeleteAccessPolicyCommand === "function");
assert(typeof DeleteAccessPolicy$ === "object");
assert(typeof DeleteApplicationCommand === "function");
assert(typeof DeleteApplication$ === "object");
assert(typeof DeleteAssetCommand === "function");
assert(typeof DeleteAsset$ === "object");
assert(typeof DeleteAssetModelCommand === "function");
assert(typeof DeleteAssetModel$ === "object");
assert(typeof DeleteAssetModelCompositeModelCommand === "function");
assert(typeof DeleteAssetModelCompositeModel$ === "object");
assert(typeof DeleteAssetModelInterfaceRelationshipCommand === "function");
assert(typeof DeleteAssetModelInterfaceRelationship$ === "object");
assert(typeof DeleteComputationModelCommand === "function");
assert(typeof DeleteComputationModel$ === "object");
assert(typeof DeleteDashboardCommand === "function");
assert(typeof DeleteDashboard$ === "object");
assert(typeof DeleteDatasetCommand === "function");
assert(typeof DeleteDataset$ === "object");
assert(typeof DeleteGatewayCommand === "function");
assert(typeof DeleteGateway$ === "object");
assert(typeof DeletePipelineCommand === "function");
assert(typeof DeletePipeline$ === "object");
assert(typeof DeletePortalCommand === "function");
assert(typeof DeletePortal$ === "object");
assert(typeof DeleteProjectCommand === "function");
assert(typeof DeleteProject$ === "object");
assert(typeof DeleteTaskCommand === "function");
assert(typeof DeleteTask$ === "object");
assert(typeof DeleteTimeSeriesCommand === "function");
assert(typeof DeleteTimeSeries$ === "object");
assert(typeof DeleteWorkspaceCommand === "function");
assert(typeof DeleteWorkspace$ === "object");
assert(typeof DescribeAccessPolicyCommand === "function");
assert(typeof DescribeAccessPolicy$ === "object");
assert(typeof DescribeActionCommand === "function");
assert(typeof DescribeAction$ === "object");
assert(typeof DescribeApplicationCommand === "function");
assert(typeof DescribeApplication$ === "object");
assert(typeof DescribeAssetCommand === "function");
assert(typeof DescribeAsset$ === "object");
assert(typeof DescribeAssetCompositeModelCommand === "function");
assert(typeof DescribeAssetCompositeModel$ === "object");
assert(typeof DescribeAssetModelCommand === "function");
assert(typeof DescribeAssetModel$ === "object");
assert(typeof DescribeAssetModelCompositeModelCommand === "function");
assert(typeof DescribeAssetModelCompositeModel$ === "object");
assert(typeof DescribeAssetModelInterfaceRelationshipCommand === "function");
assert(typeof DescribeAssetModelInterfaceRelationship$ === "object");
assert(typeof DescribeAssetPropertyCommand === "function");
assert(typeof DescribeAssetProperty$ === "object");
assert(typeof DescribeBulkImportJobCommand === "function");
assert(typeof DescribeBulkImportJob$ === "object");
assert(typeof DescribeComputationModelCommand === "function");
assert(typeof DescribeComputationModel$ === "object");
assert(typeof DescribeComputationModelExecutionSummaryCommand === "function");
assert(typeof DescribeComputationModelExecutionSummary$ === "object");
assert(typeof DescribeDashboardCommand === "function");
assert(typeof DescribeDashboard$ === "object");
assert(typeof DescribeDatasetCommand === "function");
assert(typeof DescribeDataset$ === "object");
assert(typeof DescribeDatasetExportJobCommand === "function");
assert(typeof DescribeDatasetExportJob$ === "object");
assert(typeof DescribeDefaultEncryptionConfigurationCommand === "function");
assert(typeof DescribeDefaultEncryptionConfiguration$ === "object");
assert(typeof DescribeEnrichmentJobCommand === "function");
assert(typeof DescribeEnrichmentJob$ === "object");
assert(typeof DescribeExecutionCommand === "function");
assert(typeof DescribeExecution$ === "object");
assert(typeof DescribeGatewayCommand === "function");
assert(typeof DescribeGateway$ === "object");
assert(typeof DescribeGatewayCapabilityConfigurationCommand === "function");
assert(typeof DescribeGatewayCapabilityConfiguration$ === "object");
assert(typeof DescribeLoggingOptionsCommand === "function");
assert(typeof DescribeLoggingOptions$ === "object");
assert(typeof DescribePipelineCommand === "function");
assert(typeof DescribePipeline$ === "object");
assert(typeof DescribePipelineExecutionCommand === "function");
assert(typeof DescribePipelineExecution$ === "object");
assert(typeof DescribePortalCommand === "function");
assert(typeof DescribePortal$ === "object");
assert(typeof DescribeProjectCommand === "function");
assert(typeof DescribeProject$ === "object");
assert(typeof DescribeQueryCommand === "function");
assert(typeof DescribeQuery$ === "object");
assert(typeof DescribeSearchCommand === "function");
assert(typeof DescribeSearch$ === "object");
assert(typeof DescribeStorageConfigurationCommand === "function");
assert(typeof DescribeStorageConfiguration$ === "object");
assert(typeof DescribeTaskCommand === "function");
assert(typeof DescribeTask$ === "object");
assert(typeof DescribeTimeSeriesCommand === "function");
assert(typeof DescribeTimeSeries$ === "object");
assert(typeof DescribeWorkspaceCommand === "function");
assert(typeof DescribeWorkspace$ === "object");
assert(typeof DisassociateAssetsCommand === "function");
assert(typeof DisassociateAssets$ === "object");
assert(typeof DisassociateTimeSeriesFromAssetPropertyCommand === "function");
assert(typeof DisassociateTimeSeriesFromAssetProperty$ === "object");
assert(typeof ExecuteActionCommand === "function");
assert(typeof ExecuteAction$ === "object");
assert(typeof ExecuteQueryCommand === "function");
assert(typeof ExecuteQuery$ === "object");
assert(typeof GetAssetPropertyAggregatesCommand === "function");
assert(typeof GetAssetPropertyAggregates$ === "object");
assert(typeof GetAssetPropertyValueCommand === "function");
assert(typeof GetAssetPropertyValue$ === "object");
assert(typeof GetAssetPropertyValueHistoryCommand === "function");
assert(typeof GetAssetPropertyValueHistory$ === "object");
assert(typeof GetCaptureDataCommand === "function");
assert(typeof GetCaptureData$ === "object");
assert(typeof GetInterpolatedAssetPropertyValuesCommand === "function");
assert(typeof GetInterpolatedAssetPropertyValues$ === "object");
assert(typeof GetQueryResultsCommand === "function");
assert(typeof GetQueryResults$ === "object");
assert(typeof GetSearchResultsCommand === "function");
assert(typeof GetSearchResults$ === "object");
assert(typeof InvokeAssistantCommand === "function");
assert(typeof InvokeAssistant$ === "object");
assert(typeof ListAccessPoliciesCommand === "function");
assert(typeof ListAccessPolicies$ === "object");
assert(typeof ListActionsCommand === "function");
assert(typeof ListActions$ === "object");
assert(typeof ListApplicationsCommand === "function");
assert(typeof ListApplications$ === "object");
assert(typeof ListAssetModelCompositeModelsCommand === "function");
assert(typeof ListAssetModelCompositeModels$ === "object");
assert(typeof ListAssetModelPropertiesCommand === "function");
assert(typeof ListAssetModelProperties$ === "object");
assert(typeof ListAssetModelsCommand === "function");
assert(typeof ListAssetModels$ === "object");
assert(typeof ListAssetPropertiesCommand === "function");
assert(typeof ListAssetProperties$ === "object");
assert(typeof ListAssetRelationshipsCommand === "function");
assert(typeof ListAssetRelationships$ === "object");
assert(typeof ListAssetsCommand === "function");
assert(typeof ListAssets$ === "object");
assert(typeof ListAssociatedAssetsCommand === "function");
assert(typeof ListAssociatedAssets$ === "object");
assert(typeof ListBulkImportJobsCommand === "function");
assert(typeof ListBulkImportJobs$ === "object");
assert(typeof ListCompositionRelationshipsCommand === "function");
assert(typeof ListCompositionRelationships$ === "object");
assert(typeof ListComputationModelDataBindingUsagesCommand === "function");
assert(typeof ListComputationModelDataBindingUsages$ === "object");
assert(typeof ListComputationModelResolveToResourcesCommand === "function");
assert(typeof ListComputationModelResolveToResources$ === "object");
assert(typeof ListComputationModelsCommand === "function");
assert(typeof ListComputationModels$ === "object");
assert(typeof ListDashboardsCommand === "function");
assert(typeof ListDashboards$ === "object");
assert(typeof ListDatasetDataSegmentRelationshipsCommand === "function");
assert(typeof ListDatasetDataSegmentRelationships$ === "object");
assert(typeof ListDatasetDataSegmentsCommand === "function");
assert(typeof ListDatasetDataSegments$ === "object");
assert(typeof ListDatasetExportJobsCommand === "function");
assert(typeof ListDatasetExportJobs$ === "object");
assert(typeof ListDatasetsCommand === "function");
assert(typeof ListDatasets$ === "object");
assert(typeof ListEnrichmentJobsCommand === "function");
assert(typeof ListEnrichmentJobs$ === "object");
assert(typeof ListExecutionsCommand === "function");
assert(typeof ListExecutions$ === "object");
assert(typeof ListGatewaysCommand === "function");
assert(typeof ListGateways$ === "object");
assert(typeof ListInterfaceRelationshipsCommand === "function");
assert(typeof ListInterfaceRelationships$ === "object");
assert(typeof ListPipelineExecutionsCommand === "function");
assert(typeof ListPipelineExecutions$ === "object");
assert(typeof ListPipelinesCommand === "function");
assert(typeof ListPipelines$ === "object");
assert(typeof ListPortalsCommand === "function");
assert(typeof ListPortals$ === "object");
assert(typeof ListProjectAssetsCommand === "function");
assert(typeof ListProjectAssets$ === "object");
assert(typeof ListProjectsCommand === "function");
assert(typeof ListProjects$ === "object");
assert(typeof ListQueriesCommand === "function");
assert(typeof ListQueries$ === "object");
assert(typeof ListSearchesCommand === "function");
assert(typeof ListSearches$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ListTasksCommand === "function");
assert(typeof ListTasks$ === "object");
assert(typeof ListTimeSeriesCommand === "function");
assert(typeof ListTimeSeries$ === "object");
assert(typeof ListWorkspacesCommand === "function");
assert(typeof ListWorkspaces$ === "object");
assert(typeof PutAssetModelInterfaceRelationshipCommand === "function");
assert(typeof PutAssetModelInterfaceRelationship$ === "object");
assert(typeof PutDefaultEncryptionConfigurationCommand === "function");
assert(typeof PutDefaultEncryptionConfiguration$ === "object");
assert(typeof PutLoggingOptionsCommand === "function");
assert(typeof PutLoggingOptions$ === "object");
assert(typeof PutStorageConfigurationCommand === "function");
assert(typeof PutStorageConfiguration$ === "object");
assert(typeof StartPipelineExecutionCommand === "function");
assert(typeof StartPipelineExecution$ === "object");
assert(typeof StartQueryCommand === "function");
assert(typeof StartQuery$ === "object");
assert(typeof StartSearchCommand === "function");
assert(typeof StartSearch$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateAccessPolicyCommand === "function");
assert(typeof UpdateAccessPolicy$ === "object");
assert(typeof UpdateAssetCommand === "function");
assert(typeof UpdateAsset$ === "object");
assert(typeof UpdateAssetModelCommand === "function");
assert(typeof UpdateAssetModel$ === "object");
assert(typeof UpdateAssetModelCompositeModelCommand === "function");
assert(typeof UpdateAssetModelCompositeModel$ === "object");
assert(typeof UpdateAssetPropertyCommand === "function");
assert(typeof UpdateAssetProperty$ === "object");
assert(typeof UpdateComputationModelCommand === "function");
assert(typeof UpdateComputationModel$ === "object");
assert(typeof UpdateDashboardCommand === "function");
assert(typeof UpdateDashboard$ === "object");
assert(typeof UpdateDatasetCommand === "function");
assert(typeof UpdateDataset$ === "object");
assert(typeof UpdateGatewayCommand === "function");
assert(typeof UpdateGateway$ === "object");
assert(typeof UpdateGatewayCapabilityConfigurationCommand === "function");
assert(typeof UpdateGatewayCapabilityConfiguration$ === "object");
assert(typeof UpdatePipelineCommand === "function");
assert(typeof UpdatePipeline$ === "object");
assert(typeof UpdatePortalCommand === "function");
assert(typeof UpdatePortal$ === "object");
assert(typeof UpdateProjectCommand === "function");
assert(typeof UpdateProject$ === "object");
assert(typeof UpdateTaskCommand === "function");
assert(typeof UpdateTask$ === "object");
assert(typeof UpdateWorkspaceCommand === "function");
assert(typeof UpdateWorkspace$ === "object");
// structural schemas
assert(typeof AccessPolicySummary$ === "object");
assert(typeof ActionDefinition$ === "object");
assert(typeof ActionPayload$ === "object");
assert(typeof ActionSummary$ === "object");
assert(typeof AggregatedValue$ === "object");
assert(typeof Aggregates$ === "object");
assert(typeof Alarms$ === "object");
assert(typeof Annotation$ === "object");
assert(typeof ApplicationSummary$ === "object");
assert(typeof AssetBindingValueFilter$ === "object");
assert(typeof AssetCompositeModel$ === "object");
assert(typeof AssetCompositeModelPathSegment$ === "object");
assert(typeof AssetCompositeModelSummary$ === "object");
assert(typeof AssetErrorDetails$ === "object");
assert(typeof AssetHierarchy$ === "object");
assert(typeof AssetHierarchyInfo$ === "object");
assert(typeof AssetModelBindingValueFilter$ === "object");
assert(typeof AssetModelCompositeModel$ === "object");
assert(typeof AssetModelCompositeModelDefinition$ === "object");
assert(typeof AssetModelCompositeModelPathSegment$ === "object");
assert(typeof AssetModelCompositeModelSummary$ === "object");
assert(typeof AssetModelHierarchy$ === "object");
assert(typeof AssetModelHierarchyDefinition$ === "object");
assert(typeof AssetModelProperty$ === "object");
assert(typeof AssetModelPropertyBindingValue$ === "object");
assert(typeof AssetModelPropertyBindingValueFilter$ === "object");
assert(typeof AssetModelPropertyDefinition$ === "object");
assert(typeof AssetModelPropertyPathSegment$ === "object");
assert(typeof AssetModelPropertySummary$ === "object");
assert(typeof AssetModelStatus$ === "object");
assert(typeof AssetModelSummary$ === "object");
assert(typeof AssetProperty$ === "object");
assert(typeof AssetPropertyBindingValue$ === "object");
assert(typeof AssetPropertyBindingValueFilter$ === "object");
assert(typeof AssetPropertyPathSegment$ === "object");
assert(typeof AssetPropertySummary$ === "object");
assert(typeof AssetPropertyValue$ === "object");
assert(typeof AssetRelationshipSummary$ === "object");
assert(typeof AssetStatus$ === "object");
assert(typeof AssetSummary$ === "object");
assert(typeof AssociateAssetsRequest$ === "object");
assert(typeof AssociatedAssetsSummary$ === "object");
assert(typeof AssociateDataSegmentEntry$ === "object");
assert(typeof AssociateTimeSeriesToAssetPropertyRequest$ === "object");
assert(typeof Attribute$ === "object");
assert(typeof BatchAssociateDataSegmentsToDatasetRequest$ === "object");
assert(typeof BatchAssociateDataSegmentsToDatasetResponse$ === "object");
assert(typeof BatchAssociateProjectAssetsRequest$ === "object");
assert(typeof BatchAssociateProjectAssetsResponse$ === "object");
assert(typeof BatchDeleteDatasetDataSegmentsRequest$ === "object");
assert(typeof BatchDeleteDatasetDataSegmentsResponse$ === "object");
assert(typeof BatchDisassociateDataSegmentsFromDatasetRequest$ === "object");
assert(typeof BatchDisassociateDataSegmentsFromDatasetResponse$ === "object");
assert(typeof BatchDisassociateProjectAssetsRequest$ === "object");
assert(typeof BatchDisassociateProjectAssetsResponse$ === "object");
assert(typeof BatchGetAssetPropertyAggregatesEntry$ === "object");
assert(typeof BatchGetAssetPropertyAggregatesErrorEntry$ === "object");
assert(typeof BatchGetAssetPropertyAggregatesErrorInfo$ === "object");
assert(typeof BatchGetAssetPropertyAggregatesRequest$ === "object");
assert(typeof BatchGetAssetPropertyAggregatesResponse$ === "object");
assert(typeof BatchGetAssetPropertyAggregatesSkippedEntry$ === "object");
assert(typeof BatchGetAssetPropertyAggregatesSuccessEntry$ === "object");
assert(typeof BatchGetAssetPropertyValueEntry$ === "object");
assert(typeof BatchGetAssetPropertyValueErrorEntry$ === "object");
assert(typeof BatchGetAssetPropertyValueErrorInfo$ === "object");
assert(typeof BatchGetAssetPropertyValueHistoryEntry$ === "object");
assert(typeof BatchGetAssetPropertyValueHistoryErrorEntry$ === "object");
assert(typeof BatchGetAssetPropertyValueHistoryErrorInfo$ === "object");
assert(typeof BatchGetAssetPropertyValueHistoryRequest$ === "object");
assert(typeof BatchGetAssetPropertyValueHistoryResponse$ === "object");
assert(typeof BatchGetAssetPropertyValueHistorySkippedEntry$ === "object");
assert(typeof BatchGetAssetPropertyValueHistorySuccessEntry$ === "object");
assert(typeof BatchGetAssetPropertyValueRequest$ === "object");
assert(typeof BatchGetAssetPropertyValueResponse$ === "object");
assert(typeof BatchGetAssetPropertyValueSkippedEntry$ === "object");
assert(typeof BatchGetAssetPropertyValueSuccessEntry$ === "object");
assert(typeof BatchPutAssetPropertyError$ === "object");
assert(typeof BatchPutAssetPropertyErrorEntry$ === "object");
assert(typeof BatchPutAssetPropertyValueRequest$ === "object");
assert(typeof BatchPutAssetPropertyValueResponse$ === "object");
assert(typeof CancelEnrichmentJobRequest$ === "object");
assert(typeof CancelEnrichmentJobResponse$ === "object");
assert(typeof CancelPipelineExecutionRequest$ === "object");
assert(typeof CancelPipelineExecutionResponse$ === "object");
assert(typeof CancelQueryRequest$ === "object");
assert(typeof CancelQueryResponse$ === "object");
assert(typeof Citation$ === "object");
assert(typeof ColumnInfo$ === "object");
assert(typeof ColumnInformation$ === "object");
assert(typeof ColumnType$ === "object");
assert(typeof CompositeModelProperty$ === "object");
assert(typeof CompositionDetails$ === "object");
assert(typeof CompositionRelationshipItem$ === "object");
assert(typeof CompositionRelationshipSummary$ === "object");
assert(typeof ComputationModelAnomalyDetectionConfiguration$ === "object");
assert(typeof ComputationModelConfiguration$ === "object");
assert(typeof ComputationModelDataBindingUsageSummary$ === "object");
assert(typeof ComputationModelDataBindingValue$ === "object");
assert(typeof ComputationModelResolveToResourceSummary$ === "object");
assert(typeof ComputationModelStatus$ === "object");
assert(typeof ComputationModelSummary$ === "object");
assert(typeof ComputeNode$ === "object");
assert(typeof ComputeNodeExecutionDetails$ === "object");
assert(typeof ComputeNodeExecutionStateDetails$ === "object");
assert(typeof ComputeNodeExecutionStatus$ === "object");
assert(typeof ConfigurationErrorDetails$ === "object");
assert(typeof ConfigurationStatus$ === "object");
assert(typeof ContainerTaskConfiguration$ === "object");
assert(typeof Content$ === "object");
assert(typeof CreateAccessPolicyRequest$ === "object");
assert(typeof CreateAccessPolicyResponse$ === "object");
assert(typeof CreateApplicationRequest$ === "object");
assert(typeof CreateApplicationResponse$ === "object");
assert(typeof CreateAssetModelCompositeModelRequest$ === "object");
assert(typeof CreateAssetModelCompositeModelResponse$ === "object");
assert(typeof CreateAssetModelRequest$ === "object");
assert(typeof CreateAssetModelResponse$ === "object");
assert(typeof CreateAssetRequest$ === "object");
assert(typeof CreateAssetResponse$ === "object");
assert(typeof CreateBulkImportJobRequest$ === "object");
assert(typeof CreateBulkImportJobResponse$ === "object");
assert(typeof CreateComputationModelRequest$ === "object");
assert(typeof CreateComputationModelResponse$ === "object");
assert(typeof CreateDashboardRequest$ === "object");
assert(typeof CreateDashboardResponse$ === "object");
assert(typeof CreateDatasetExportJobRequest$ === "object");
assert(typeof CreateDatasetExportJobResponse$ === "object");
assert(typeof CreateDatasetRequest$ === "object");
assert(typeof CreateDatasetResponse$ === "object");
assert(typeof CreateEnrichmentJobRequest$ === "object");
assert(typeof CreateEnrichmentJobResponse$ === "object");
assert(typeof CreateGatewayRequest$ === "object");
assert(typeof CreateGatewayResponse$ === "object");
assert(typeof CreatePipelineRequest$ === "object");
assert(typeof CreatePipelineResponse$ === "object");
assert(typeof CreatePortalRequest$ === "object");
assert(typeof CreatePortalResponse$ === "object");
assert(typeof CreateProjectRequest$ === "object");
assert(typeof CreateProjectResponse$ === "object");
assert(typeof CreateTaskRequest$ === "object");
assert(typeof CreateTaskResponse$ === "object");
assert(typeof CreateWorkspaceRequest$ === "object");
assert(typeof CreateWorkspaceResponse$ === "object");
assert(typeof Csv$ === "object");
assert(typeof CustomerManagedS3Storage$ === "object");
assert(typeof DashboardSummary$ === "object");
assert(typeof DataBindingValue$ === "object");
assert(typeof DataBindingValueFilter$ === "object");
assert(typeof DataSegmentEnrichment$ === "object");
assert(typeof DataSegmentRelationshipSummary$ === "object");
assert(typeof DataSegmentSummary$ === "object");
assert(typeof DatasetConfig$ === "object");
assert(typeof DatasetEnrichment$ === "object");
assert(typeof DatasetEnrichmentEntry$ === "object");
assert(typeof DatasetItem$ === "object");
assert(typeof DataSetReference$ === "object");
assert(typeof DatasetSource$ === "object");
assert(typeof DatasetStatus$ === "object");
assert(typeof DatasetSummary$ === "object");
assert(typeof Datum$ === "object");
assert(typeof DeleteAccessPolicyRequest$ === "object");
assert(typeof DeleteAccessPolicyResponse$ === "object");
assert(typeof DeleteApplicationRequest$ === "object");
assert(typeof DeleteApplicationResponse$ === "object");
assert(typeof DeleteAssetModelCompositeModelRequest$ === "object");
assert(typeof DeleteAssetModelCompositeModelResponse$ === "object");
assert(typeof DeleteAssetModelInterfaceRelationshipRequest$ === "object");
assert(typeof DeleteAssetModelInterfaceRelationshipResponse$ === "object");
assert(typeof DeleteAssetModelRequest$ === "object");
assert(typeof DeleteAssetModelResponse$ === "object");
assert(typeof DeleteAssetRequest$ === "object");
assert(typeof DeleteAssetResponse$ === "object");
assert(typeof DeleteComputationModelRequest$ === "object");
assert(typeof DeleteComputationModelResponse$ === "object");
assert(typeof DeleteDashboardRequest$ === "object");
assert(typeof DeleteDashboardResponse$ === "object");
assert(typeof DeleteDataSegmentEntry$ === "object");
assert(typeof DeleteDatasetRequest$ === "object");
assert(typeof DeleteDatasetResponse$ === "object");
assert(typeof DeleteGatewayRequest$ === "object");
assert(typeof DeletePipelineRequest$ === "object");
assert(typeof DeletePipelineResponse$ === "object");
assert(typeof DeletePortalRequest$ === "object");
assert(typeof DeletePortalResponse$ === "object");
assert(typeof DeleteProjectRequest$ === "object");
assert(typeof DeleteProjectResponse$ === "object");
assert(typeof DeleteTaskRequest$ === "object");
assert(typeof DeleteTaskResponse$ === "object");
assert(typeof DeleteTimeSeriesRequest$ === "object");
assert(typeof DeleteWorkspaceRequest$ === "object");
assert(typeof DeleteWorkspaceResponse$ === "object");
assert(typeof DescribeAccessPolicyRequest$ === "object");
assert(typeof DescribeAccessPolicyResponse$ === "object");
assert(typeof DescribeActionRequest$ === "object");
assert(typeof DescribeActionResponse$ === "object");
assert(typeof DescribeApplicationRequest$ === "object");
assert(typeof DescribeApplicationResponse$ === "object");
assert(typeof DescribeAssetCompositeModelRequest$ === "object");
assert(typeof DescribeAssetCompositeModelResponse$ === "object");
assert(typeof DescribeAssetModelCompositeModelRequest$ === "object");
assert(typeof DescribeAssetModelCompositeModelResponse$ === "object");
assert(typeof DescribeAssetModelInterfaceRelationshipRequest$ === "object");
assert(typeof DescribeAssetModelInterfaceRelationshipResponse$ === "object");
assert(typeof DescribeAssetModelRequest$ === "object");
assert(typeof DescribeAssetModelResponse$ === "object");
assert(typeof DescribeAssetPropertyRequest$ === "object");
assert(typeof DescribeAssetPropertyResponse$ === "object");
assert(typeof DescribeAssetRequest$ === "object");
assert(typeof DescribeAssetResponse$ === "object");
assert(typeof DescribeBulkImportJobRequest$ === "object");
assert(typeof DescribeBulkImportJobResponse$ === "object");
assert(typeof DescribeComputationModelExecutionSummaryRequest$ === "object");
assert(typeof DescribeComputationModelExecutionSummaryResponse$ === "object");
assert(typeof DescribeComputationModelRequest$ === "object");
assert(typeof DescribeComputationModelResponse$ === "object");
assert(typeof DescribeDashboardRequest$ === "object");
assert(typeof DescribeDashboardResponse$ === "object");
assert(typeof DescribeDatasetExportJobRequest$ === "object");
assert(typeof DescribeDatasetExportJobResponse$ === "object");
assert(typeof DescribeDatasetRequest$ === "object");
assert(typeof DescribeDatasetResponse$ === "object");
assert(typeof DescribeDefaultEncryptionConfigurationRequest$ === "object");
assert(typeof DescribeDefaultEncryptionConfigurationResponse$ === "object");
assert(typeof DescribeEnrichmentJobRequest$ === "object");
assert(typeof DescribeEnrichmentJobResponse$ === "object");
assert(typeof DescribeExecutionRequest$ === "object");
assert(typeof DescribeExecutionResponse$ === "object");
assert(typeof DescribeGatewayCapabilityConfigurationRequest$ === "object");
assert(typeof DescribeGatewayCapabilityConfigurationResponse$ === "object");
assert(typeof DescribeGatewayRequest$ === "object");
assert(typeof DescribeGatewayResponse$ === "object");
assert(typeof DescribeLoggingOptionsRequest$ === "object");
assert(typeof DescribeLoggingOptionsResponse$ === "object");
assert(typeof DescribePipelineExecutionRequest$ === "object");
assert(typeof DescribePipelineExecutionResponse$ === "object");
assert(typeof DescribePipelineRequest$ === "object");
assert(typeof DescribePipelineResponse$ === "object");
assert(typeof DescribePortalRequest$ === "object");
assert(typeof DescribePortalResponse$ === "object");
assert(typeof DescribeProjectRequest$ === "object");
assert(typeof DescribeProjectResponse$ === "object");
assert(typeof DescribeQueryRequest$ === "object");
assert(typeof DescribeQueryResponse$ === "object");
assert(typeof DescribeSearchRequest$ === "object");
assert(typeof DescribeSearchResponse$ === "object");
assert(typeof DescribeStorageConfigurationRequest$ === "object");
assert(typeof DescribeStorageConfigurationResponse$ === "object");
assert(typeof DescribeTaskRequest$ === "object");
assert(typeof DescribeTaskResponse$ === "object");
assert(typeof DescribeTimeSeriesRequest$ === "object");
assert(typeof DescribeTimeSeriesResponse$ === "object");
assert(typeof DescribeWorkspaceRequest$ === "object");
assert(typeof DescribeWorkspaceResponse$ === "object");
assert(typeof DetailedError$ === "object");
assert(typeof DetailedPipelineError$ === "object");
assert(typeof DisassociateAssetsRequest$ === "object");
assert(typeof DisassociateDataSegmentEntry$ === "object");
assert(typeof DisassociateTimeSeriesFromAssetPropertyRequest$ === "object");
assert(typeof EnrichmentJobConfiguration$ === "object");
assert(typeof EnrichmentJobSummary$ === "object");
assert(typeof EnrichmentTrimSettings$ === "object");
assert(typeof ErrorDetails$ === "object");
assert(typeof ErrorReportLocation$ === "object");
assert(typeof EventDetection$ === "object");
assert(typeof ExecuteActionRequest$ === "object");
assert(typeof ExecuteActionResponse$ === "object");
assert(typeof ExecuteQueryRequest$ === "object");
assert(typeof ExecuteQueryResponse$ === "object");
assert(typeof ExecutionEnvironmentVariables$ === "object");
assert(typeof ExecutionStatus$ === "object");
assert(typeof ExecutionSummary$ === "object");
assert(typeof ExportErrorReportLocation$ === "object");
assert(typeof ExportJobSummary$ === "object");
assert(typeof ExpressionVariable$ === "object");
assert(typeof FailedDataSegmentAssociation$ === "object");
assert(typeof FailedDataSegmentDeletion$ === "object");
assert(typeof FailedDataSegmentDisassociation$ === "object");
assert(typeof File$ === "object");
assert(typeof FileFormat$ === "object");
assert(typeof FormatSettings$ === "object");
assert(typeof ForwardingConfig$ === "object");
assert(typeof GatewayCapabilitySummary$ === "object");
assert(typeof GatewayPlatform$ === "object");
assert(typeof GatewaySummary$ === "object");
assert(typeof GetAssetPropertyAggregatesRequest$ === "object");
assert(typeof GetAssetPropertyAggregatesResponse$ === "object");
assert(typeof GetAssetPropertyValueHistoryRequest$ === "object");
assert(typeof GetAssetPropertyValueHistoryResponse$ === "object");
assert(typeof GetAssetPropertyValueRequest$ === "object");
assert(typeof GetAssetPropertyValueResponse$ === "object");
assert(typeof GetCaptureDataRequest$ === "object");
assert(typeof GetCaptureDataResponse$ === "object");
assert(typeof GetInterpolatedAssetPropertyValuesRequest$ === "object");
assert(typeof GetInterpolatedAssetPropertyValuesResponse$ === "object");
assert(typeof GetQueryResultsRequest$ === "object");
assert(typeof GetQueryResultsResponse$ === "object");
assert(typeof GetSearchResultsRequest$ === "object");
assert(typeof GetSearchResultsResponse$ === "object");
assert(typeof Greengrass$ === "object");
assert(typeof GreengrassV2$ === "object");
assert(typeof GroupIdentity$ === "object");
assert(typeof HierarchyMapping$ === "object");
assert(typeof IAMRoleIdentity$ === "object");
assert(typeof IAMUserIdentity$ === "object");
assert(typeof Identity$ === "object");
assert(typeof Image$ === "object");
assert(typeof ImageFile$ === "object");
assert(typeof ImageLocation$ === "object");
assert(typeof InterfaceRelationship$ === "object");
assert(typeof InterfaceRelationshipSummary$ === "object");
assert(typeof InterfaceSummary$ === "object");
assert(typeof InterpolatedAssetPropertyValue$ === "object");
assert(typeof InvocationOutput$ === "object");
assert(typeof InvokeAssistantRequest$ === "object");
assert(typeof InvokeAssistantResponse$ === "object");
assert(typeof JobConfiguration$ === "object");
assert(typeof JobSummary$ === "object");
assert(typeof KendraSourceDetail$ === "object");
assert(typeof ListAccessPoliciesRequest$ === "object");
assert(typeof ListAccessPoliciesResponse$ === "object");
assert(typeof ListActionsRequest$ === "object");
assert(typeof ListActionsResponse$ === "object");
assert(typeof ListApplicationsRequest$ === "object");
assert(typeof ListApplicationsResponse$ === "object");
assert(typeof ListAssetModelCompositeModelsRequest$ === "object");
assert(typeof ListAssetModelCompositeModelsResponse$ === "object");
assert(typeof ListAssetModelPropertiesRequest$ === "object");
assert(typeof ListAssetModelPropertiesResponse$ === "object");
assert(typeof ListAssetModelsRequest$ === "object");
assert(typeof ListAssetModelsResponse$ === "object");
assert(typeof ListAssetPropertiesRequest$ === "object");
assert(typeof ListAssetPropertiesResponse$ === "object");
assert(typeof ListAssetRelationshipsRequest$ === "object");
assert(typeof ListAssetRelationshipsResponse$ === "object");
assert(typeof ListAssetsRequest$ === "object");
assert(typeof ListAssetsResponse$ === "object");
assert(typeof ListAssociatedAssetsRequest$ === "object");
assert(typeof ListAssociatedAssetsResponse$ === "object");
assert(typeof ListBulkImportJobsRequest$ === "object");
assert(typeof ListBulkImportJobsResponse$ === "object");
assert(typeof ListCompositionRelationshipsRequest$ === "object");
assert(typeof ListCompositionRelationshipsResponse$ === "object");
assert(typeof ListComputationModelDataBindingUsagesRequest$ === "object");
assert(typeof ListComputationModelDataBindingUsagesResponse$ === "object");
assert(typeof ListComputationModelResolveToResourcesRequest$ === "object");
assert(typeof ListComputationModelResolveToResourcesResponse$ === "object");
assert(typeof ListComputationModelsRequest$ === "object");
assert(typeof ListComputationModelsResponse$ === "object");
assert(typeof ListDashboardsRequest$ === "object");
assert(typeof ListDashboardsResponse$ === "object");
assert(typeof ListDatasetDataSegmentRelationshipsRequest$ === "object");
assert(typeof ListDatasetDataSegmentRelationshipsResponse$ === "object");
assert(typeof ListDatasetDataSegmentsRequest$ === "object");
assert(typeof ListDatasetDataSegmentsResponse$ === "object");
assert(typeof ListDatasetExportJobsRequest$ === "object");
assert(typeof ListDatasetExportJobsResponse$ === "object");
assert(typeof ListDatasetsRequest$ === "object");
assert(typeof ListDatasetsResponse$ === "object");
assert(typeof ListEnrichmentJobsRequest$ === "object");
assert(typeof ListEnrichmentJobsResponse$ === "object");
assert(typeof ListExecutionsRequest$ === "object");
assert(typeof ListExecutionsResponse$ === "object");
assert(typeof ListGatewaysRequest$ === "object");
assert(typeof ListGatewaysResponse$ === "object");
assert(typeof ListInterfaceRelationshipsRequest$ === "object");
assert(typeof ListInterfaceRelationshipsResponse$ === "object");
assert(typeof ListPipelineExecutionsRequest$ === "object");
assert(typeof ListPipelineExecutionsResponse$ === "object");
assert(typeof ListPipelinesRequest$ === "object");
assert(typeof ListPipelinesResponse$ === "object");
assert(typeof ListPortalsRequest$ === "object");
assert(typeof ListPortalsResponse$ === "object");
assert(typeof ListProjectAssetsRequest$ === "object");
assert(typeof ListProjectAssetsResponse$ === "object");
assert(typeof ListProjectsRequest$ === "object");
assert(typeof ListProjectsResponse$ === "object");
assert(typeof ListQueriesRequest$ === "object");
assert(typeof ListQueriesResponse$ === "object");
assert(typeof ListSearchesFilters$ === "object");
assert(typeof ListSearchesRequest$ === "object");
assert(typeof ListSearchesResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof ListTasksRequest$ === "object");
assert(typeof ListTasksResponse$ === "object");
assert(typeof ListTimeSeriesRequest$ === "object");
assert(typeof ListTimeSeriesResponse$ === "object");
assert(typeof ListWorkspacesRequest$ === "object");
assert(typeof ListWorkspacesResponse$ === "object");
assert(typeof Location$ === "object");
assert(typeof LoggingOptions$ === "object");
assert(typeof MatchedDataBinding$ === "object");
assert(typeof Measurement$ === "object");
assert(typeof MeasurementProcessingConfig$ === "object");
assert(typeof Metric$ === "object");
assert(typeof MetricProcessingConfig$ === "object");
assert(typeof MetricWindow$ === "object");
assert(typeof MonitorErrorDetails$ === "object");
assert(typeof Mp4$ === "object");
assert(typeof MultiLayerStorage$ === "object");
assert(typeof Parquet$ === "object");
assert(typeof PipelineExecutionStateDetails$ === "object");
assert(typeof PipelineExecutionStatus$ === "object");
assert(typeof PipelineExecutionSummary$ === "object");
assert(typeof PipelineSummary$ === "object");
assert(typeof PortalResource$ === "object");
assert(typeof PortalStatus$ === "object");
assert(typeof PortalSummary$ === "object");
assert(typeof PortalTypeEntry$ === "object");
assert(typeof ProcessingInput$ === "object");
assert(typeof ProjectResource$ === "object");
assert(typeof ProjectSummary$ === "object");
assert(typeof Property$ === "object");
assert(typeof PropertyMapping$ === "object");
assert(typeof PropertyMappingConfiguration$ === "object");
assert(typeof PropertyNotification$ === "object");
assert(typeof PropertyType$ === "object");
assert(typeof PropertyValueNullValue$ === "object");
assert(typeof PutAssetModelInterfaceRelationshipRequest$ === "object");
assert(typeof PutAssetModelInterfaceRelationshipResponse$ === "object");
assert(typeof PutAssetPropertyValueEntry$ === "object");
assert(typeof PutDefaultEncryptionConfigurationRequest$ === "object");
assert(typeof PutDefaultEncryptionConfigurationResponse$ === "object");
assert(typeof PutLoggingOptionsRequest$ === "object");
assert(typeof PutLoggingOptionsResponse$ === "object");
assert(typeof PutStorageConfigurationRequest$ === "object");
assert(typeof PutStorageConfigurationResponse$ === "object");
assert(typeof QueryStatistics$ === "object");
assert(typeof QuerySummary$ === "object");
assert(typeof Reference$ === "object");
assert(typeof ResolveTo$ === "object");
assert(typeof Resource$ === "object");
assert(typeof ResourceError$ === "object");
assert(typeof ResourceStatus$ === "object");
assert(typeof ResponseStream$ === "object");
assert(typeof RetentionPeriod$ === "object");
assert(typeof Row$ === "object");
assert(typeof SearchFilters$ === "object");
assert(typeof SearchResult$ === "object");
assert(typeof SearchSummary$ === "object");
assert(typeof SessionConfig$ === "object");
assert(typeof SiemensIE$ === "object");
assert(typeof Source$ === "object");
assert(typeof SourceDetail$ === "object");
assert(typeof StartPipelineExecutionRequest$ === "object");
assert(typeof StartPipelineExecutionResponse$ === "object");
assert(typeof StartQueryRequest$ === "object");
assert(typeof StartQueryResponse$ === "object");
assert(typeof StartSearchRequest$ === "object");
assert(typeof StartSearchResponse$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof TargetResource$ === "object");
assert(typeof TaskConfiguration$ === "object");
assert(typeof TaskSummary$ === "object");
assert(typeof TimeInNanos$ === "object");
assert(typeof TimeInterval$ === "object");
assert(typeof TimeseriesItem$ === "object");
assert(typeof TimeSeriesSummary$ === "object");
assert(typeof Trace$ === "object");
assert(typeof Transform$ === "object");
assert(typeof TransformProcessingConfig$ === "object");
assert(typeof TrimSettings$ === "object");
assert(typeof TumblingWindow$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateAccessPolicyRequest$ === "object");
assert(typeof UpdateAccessPolicyResponse$ === "object");
assert(typeof UpdateAssetModelCompositeModelRequest$ === "object");
assert(typeof UpdateAssetModelCompositeModelResponse$ === "object");
assert(typeof UpdateAssetModelRequest$ === "object");
assert(typeof UpdateAssetModelResponse$ === "object");
assert(typeof UpdateAssetPropertyRequest$ === "object");
assert(typeof UpdateAssetRequest$ === "object");
assert(typeof UpdateAssetResponse$ === "object");
assert(typeof UpdateComputationModelRequest$ === "object");
assert(typeof UpdateComputationModelResponse$ === "object");
assert(typeof UpdateDashboardRequest$ === "object");
assert(typeof UpdateDashboardResponse$ === "object");
assert(typeof UpdateDatasetRequest$ === "object");
assert(typeof UpdateDatasetResponse$ === "object");
assert(typeof UpdateGatewayCapabilityConfigurationRequest$ === "object");
assert(typeof UpdateGatewayCapabilityConfigurationResponse$ === "object");
assert(typeof UpdateGatewayRequest$ === "object");
assert(typeof UpdatePipelineRequest$ === "object");
assert(typeof UpdatePipelineResponse$ === "object");
assert(typeof UpdatePortalRequest$ === "object");
assert(typeof UpdatePortalResponse$ === "object");
assert(typeof UpdateProjectRequest$ === "object");
assert(typeof UpdateProjectResponse$ === "object");
assert(typeof UpdateTaskRequest$ === "object");
assert(typeof UpdateTaskResponse$ === "object");
assert(typeof UpdateWorkspaceRequest$ === "object");
assert(typeof UpdateWorkspaceResponse$ === "object");
assert(typeof UserIdentity$ === "object");
assert(typeof VariableValue$ === "object");
assert(typeof Variant$ === "object");
assert(typeof WarmTierRetentionPeriod$ === "object");
assert(typeof WorkspaceEncryptionConfiguration$ === "object");
assert(typeof WorkspaceEncryptionConfigurationInfo$ === "object");
assert(typeof WorkspaceErrorDetails$ === "object");
assert(typeof WorkspaceStatus$ === "object");
assert(typeof WorkspaceSummary$ === "object");
// enums
assert(typeof AggregateType === "object");
assert(typeof ApplicationStatus === "object");
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
assert(typeof ComputeNodeErrorCode === "object");
assert(typeof ComputeNodeExecutionState === "object");
assert(typeof ConfigurationState === "object");
assert(typeof CoreDeviceOperatingSystem === "object");
assert(typeof DataSegmentErrorCode === "object");
assert(typeof DatasetEnrichmentStatus === "object");
assert(typeof DatasetExportJobFilter === "object");
assert(typeof DatasetExportJobStatus === "object");
assert(typeof DatasetSourceFormat === "object");
assert(typeof DatasetSourceType === "object");
assert(typeof DatasetState === "object");
assert(typeof DatasetTypeEnum === "object");
assert(typeof DetailedErrorCode === "object");
assert(typeof DetailedPipelineErrorCode === "object");
assert(typeof DisassociatedDataStorageState === "object");
assert(typeof EncryptionType === "object");
assert(typeof EnrichmentJobStatus === "object");
assert(typeof EnrichmentStatus === "object");
assert(typeof ErrorCode === "object");
assert(typeof ExecutionState === "object");
assert(typeof ExportDataType === "object");
assert(typeof ForwardingConfigState === "object");
assert(typeof IdentityType === "object");
assert(typeof ImageFileType === "object");
assert(typeof JobStatus === "object");
assert(typeof JobType === "object");
assert(typeof ListAssetModelPropertiesFilter === "object");
assert(typeof ListAssetPropertiesFilter === "object");
assert(typeof ListAssetsFilter === "object");
assert(typeof ListBulkImportJobsFilter === "object");
assert(typeof ListTimeSeriesType === "object");
assert(typeof LoggingLevel === "object");
assert(typeof MonitorErrorCode === "object");
assert(typeof Permission === "object");
assert(typeof PipelineErrorCode === "object");
assert(typeof PipelineExecutionState === "object");
assert(typeof PortalState === "object");
assert(typeof PortalType === "object");
assert(typeof ProcessingType === "object");
assert(typeof ProcessingUnit === "object");
assert(typeof PropertyDataType === "object");
assert(typeof PropertyNotificationState === "object");
assert(typeof Quality === "object");
assert(typeof QueryStatus === "object");
assert(typeof RawValueType === "object");
assert(typeof ResolveToResourceType === "object");
assert(typeof ResourceErrorCode === "object");
assert(typeof ResourceState === "object");
assert(typeof ResourceType === "object");
assert(typeof ScalarType === "object");
assert(typeof SearchStatus === "object");
assert(typeof SearchType === "object");
assert(typeof StorageType === "object");
assert(typeof TargetResourceType === "object");
assert(typeof TimeOrdering === "object");
assert(typeof TraversalDirection === "object");
assert(typeof TraversalType === "object");
assert(typeof VideoDataType === "object");
assert(typeof WarmTierState === "object");
assert(typeof WorkspaceState === "object");
// errors
assert(AccessDeniedException.prototype instanceof IoTSiteWiseServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictingOperationException.prototype instanceof IoTSiteWiseServiceException);
assert(typeof ConflictingOperationException$ === "object");
assert(InternalFailureException.prototype instanceof IoTSiteWiseServiceException);
assert(typeof InternalFailureException$ === "object");
assert(InvalidRequestException.prototype instanceof IoTSiteWiseServiceException);
assert(typeof InvalidRequestException$ === "object");
assert(LimitExceededException.prototype instanceof IoTSiteWiseServiceException);
assert(typeof LimitExceededException$ === "object");
assert(PreconditionFailedException.prototype instanceof IoTSiteWiseServiceException);
assert(typeof PreconditionFailedException$ === "object");
assert(QueryTimeoutException.prototype instanceof IoTSiteWiseServiceException);
assert(typeof QueryTimeoutException$ === "object");
assert(ResourceAlreadyExistsException.prototype instanceof IoTSiteWiseServiceException);
assert(typeof ResourceAlreadyExistsException$ === "object");
assert(ResourceNotFoundException.prototype instanceof IoTSiteWiseServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceUnavailableException.prototype instanceof IoTSiteWiseServiceException);
assert(typeof ServiceUnavailableException$ === "object");
assert(ThrottlingException.prototype instanceof IoTSiteWiseServiceException);
assert(typeof ThrottlingException$ === "object");
assert(TooManyTagsException.prototype instanceof IoTSiteWiseServiceException);
assert(typeof TooManyTagsException$ === "object");
assert(UnauthorizedException.prototype instanceof IoTSiteWiseServiceException);
assert(typeof UnauthorizedException$ === "object");
assert(ValidationException.prototype instanceof IoTSiteWiseServiceException);
assert(typeof ValidationException$ === "object");
assert(IoTSiteWiseServiceException.prototype instanceof Error);
// waiters
assert(typeof waitForAssetActive === "function");
assert(typeof waitForAssetModelActive === "function");
assert(typeof waitForAssetModelNotExists === "function");
assert(typeof waitForAssetNotExists === "function");
assert(typeof waitForPortalActive === "function");
assert(typeof waitForPortalNotExists === "function");
assert(typeof waitUntilAssetActive === "function");
assert(typeof waitUntilAssetModelActive === "function");
assert(typeof waitUntilAssetModelNotExists === "function");
assert(typeof waitUntilAssetNotExists === "function");
assert(typeof waitUntilPortalActive === "function");
assert(typeof waitUntilPortalNotExists === "function");
// paginators
assert(typeof paginateBatchGetAssetPropertyAggregates === "function");
assert(typeof paginateBatchGetAssetPropertyValue === "function");
assert(typeof paginateBatchGetAssetPropertyValueHistory === "function");
assert(typeof paginateDescribePipelineExecution === "function");
assert(typeof paginateExecuteQuery === "function");
assert(typeof paginateGetAssetPropertyAggregates === "function");
assert(typeof paginateGetAssetPropertyValueHistory === "function");
assert(typeof paginateGetInterpolatedAssetPropertyValues === "function");
assert(typeof paginateGetQueryResults === "function");
assert(typeof paginateGetSearchResults === "function");
assert(typeof paginateListAccessPolicies === "function");
assert(typeof paginateListActions === "function");
assert(typeof paginateListApplications === "function");
assert(typeof paginateListAssetModelCompositeModels === "function");
assert(typeof paginateListAssetModelProperties === "function");
assert(typeof paginateListAssetModels === "function");
assert(typeof paginateListAssetProperties === "function");
assert(typeof paginateListAssetRelationships === "function");
assert(typeof paginateListAssets === "function");
assert(typeof paginateListAssociatedAssets === "function");
assert(typeof paginateListBulkImportJobs === "function");
assert(typeof paginateListCompositionRelationships === "function");
assert(typeof paginateListComputationModelDataBindingUsages === "function");
assert(typeof paginateListComputationModelResolveToResources === "function");
assert(typeof paginateListComputationModels === "function");
assert(typeof paginateListDashboards === "function");
assert(typeof paginateListDatasetDataSegmentRelationships === "function");
assert(typeof paginateListDatasetDataSegments === "function");
assert(typeof paginateListDatasetExportJobs === "function");
assert(typeof paginateListDatasets === "function");
assert(typeof paginateListEnrichmentJobs === "function");
assert(typeof paginateListExecutions === "function");
assert(typeof paginateListGateways === "function");
assert(typeof paginateListInterfaceRelationships === "function");
assert(typeof paginateListPipelineExecutions === "function");
assert(typeof paginateListPipelines === "function");
assert(typeof paginateListPortals === "function");
assert(typeof paginateListProjectAssets === "function");
assert(typeof paginateListProjects === "function");
assert(typeof paginateListQueries === "function");
assert(typeof paginateListSearches === "function");
assert(typeof paginateListTasks === "function");
assert(typeof paginateListTimeSeries === "function");
assert(typeof paginateListWorkspaces === "function");
console.log(`IoTSiteWise index test passed.`);
