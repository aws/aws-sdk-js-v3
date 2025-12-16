import {
  AccessDeniedException,
  AccessDeniedException$,
  BatchPutPropertyError$,
  BatchPutPropertyErrorEntry$,
  BatchPutPropertyValues$,
  BatchPutPropertyValuesCommand,
  BatchPutPropertyValuesRequest$,
  BatchPutPropertyValuesResponse$,
  BundleInformation$,
  CancelMetadataTransferJob$,
  CancelMetadataTransferJobCommand,
  CancelMetadataTransferJobRequest$,
  CancelMetadataTransferJobResponse$,
  ColumnDescription$,
  ColumnType,
  ComponentPropertyGroupRequest$,
  ComponentPropertyGroupResponse$,
  ComponentRequest$,
  ComponentResponse$,
  ComponentSummary$,
  ComponentTypeSummary$,
  ComponentUpdateRequest$,
  ComponentUpdateType,
  CompositeComponentRequest$,
  CompositeComponentTypeRequest$,
  CompositeComponentTypeResponse$,
  CompositeComponentUpdateRequest$,
  ConflictException,
  ConflictException$,
  ConnectorFailureException,
  ConnectorFailureException$,
  ConnectorTimeoutException,
  ConnectorTimeoutException$,
  CreateComponentType$,
  CreateComponentTypeCommand,
  CreateComponentTypeRequest$,
  CreateComponentTypeResponse$,
  CreateEntity$,
  CreateEntityCommand,
  CreateEntityRequest$,
  CreateEntityResponse$,
  CreateMetadataTransferJob$,
  CreateMetadataTransferJobCommand,
  CreateMetadataTransferJobRequest$,
  CreateMetadataTransferJobResponse$,
  CreateScene$,
  CreateSceneCommand,
  CreateSceneRequest$,
  CreateSceneResponse$,
  CreateSyncJob$,
  CreateSyncJobCommand,
  CreateSyncJobRequest$,
  CreateSyncJobResponse$,
  CreateWorkspace$,
  CreateWorkspaceCommand,
  CreateWorkspaceRequest$,
  CreateWorkspaceResponse$,
  DataConnector$,
  DataType$,
  DataValue$,
  DeleteComponentType$,
  DeleteComponentTypeCommand,
  DeleteComponentTypeRequest$,
  DeleteComponentTypeResponse$,
  DeleteEntity$,
  DeleteEntityCommand,
  DeleteEntityRequest$,
  DeleteEntityResponse$,
  DeleteScene$,
  DeleteSceneCommand,
  DeleteSceneRequest$,
  DeleteSceneResponse$,
  DeleteSyncJob$,
  DeleteSyncJobCommand,
  DeleteSyncJobRequest$,
  DeleteSyncJobResponse$,
  DeleteWorkspace$,
  DeleteWorkspaceCommand,
  DeleteWorkspaceRequest$,
  DeleteWorkspaceResponse$,
  DestinationConfiguration$,
  DestinationType,
  EntityPropertyReference$,
  EntitySummary$,
  ErrorCode,
  ErrorDetails$,
  ExecuteQuery$,
  ExecuteQueryCommand,
  ExecuteQueryRequest$,
  ExecuteQueryResponse$,
  FilterByAsset$,
  FilterByAssetModel$,
  FilterByComponentType$,
  FilterByEntity$,
  FunctionRequest$,
  FunctionResponse$,
  GetComponentType$,
  GetComponentTypeCommand,
  GetComponentTypeRequest$,
  GetComponentTypeResponse$,
  GetEntity$,
  GetEntityCommand,
  GetEntityRequest$,
  GetEntityResponse$,
  GetMetadataTransferJob$,
  GetMetadataTransferJobCommand,
  GetMetadataTransferJobRequest$,
  GetMetadataTransferJobResponse$,
  GetPricingPlan$,
  GetPricingPlanCommand,
  GetPricingPlanRequest$,
  GetPricingPlanResponse$,
  GetPropertyValue$,
  GetPropertyValueCommand,
  GetPropertyValueHistory$,
  GetPropertyValueHistoryCommand,
  GetPropertyValueHistoryRequest$,
  GetPropertyValueHistoryResponse$,
  GetPropertyValueRequest$,
  GetPropertyValueResponse$,
  GetScene$,
  GetSceneCommand,
  GetSceneRequest$,
  GetSceneResponse$,
  GetSyncJob$,
  GetSyncJobCommand,
  GetSyncJobRequest$,
  GetSyncJobResponse$,
  GetWorkspace$,
  GetWorkspaceCommand,
  GetWorkspaceRequest$,
  GetWorkspaceResponse$,
  GroupType,
  InternalServerException,
  InternalServerException$,
  InterpolationParameters$,
  InterpolationType,
  IoTTwinMaker,
  IoTTwinMakerClient,
  IoTTwinMakerServiceException,
  IotSiteWiseSourceConfiguration$,
  IotSiteWiseSourceConfigurationFilter$,
  IotTwinMakerDestinationConfiguration$,
  IotTwinMakerSourceConfiguration$,
  IotTwinMakerSourceConfigurationFilter$,
  LambdaFunction$,
  ListComponentTypes$,
  ListComponentTypesCommand,
  ListComponentTypesFilter$,
  ListComponentTypesRequest$,
  ListComponentTypesResponse$,
  ListComponents$,
  ListComponentsCommand,
  ListComponentsRequest$,
  ListComponentsResponse$,
  ListEntities$,
  ListEntitiesCommand,
  ListEntitiesFilter$,
  ListEntitiesRequest$,
  ListEntitiesResponse$,
  ListMetadataTransferJobs$,
  ListMetadataTransferJobsCommand,
  ListMetadataTransferJobsFilter$,
  ListMetadataTransferJobsRequest$,
  ListMetadataTransferJobsResponse$,
  ListProperties$,
  ListPropertiesCommand,
  ListPropertiesRequest$,
  ListPropertiesResponse$,
  ListScenes$,
  ListScenesCommand,
  ListScenesRequest$,
  ListScenesResponse$,
  ListSyncJobs$,
  ListSyncJobsCommand,
  ListSyncJobsRequest$,
  ListSyncJobsResponse$,
  ListSyncResources$,
  ListSyncResourcesCommand,
  ListSyncResourcesRequest$,
  ListSyncResourcesResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  ListWorkspaces$,
  ListWorkspacesCommand,
  ListWorkspacesRequest$,
  ListWorkspacesResponse$,
  MetadataTransferJobProgress$,
  MetadataTransferJobState,
  MetadataTransferJobStatus$,
  MetadataTransferJobSummary$,
  Order,
  OrderBy$,
  OrderByTime,
  ParentEntityUpdateRequest$,
  ParentEntityUpdateType,
  PricingMode,
  PricingPlan$,
  PricingTier,
  PropertyDefinitionRequest$,
  PropertyDefinitionResponse$,
  PropertyFilter$,
  PropertyGroupRequest$,
  PropertyGroupResponse$,
  PropertyGroupUpdateType,
  PropertyLatestValue$,
  PropertyRequest$,
  PropertyResponse$,
  PropertySummary$,
  PropertyUpdateType,
  PropertyValue$,
  PropertyValueEntry$,
  PropertyValueHistory$,
  QueryTimeoutException,
  QueryTimeoutException$,
  Relationship$,
  RelationshipValue$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  Row$,
  S3DestinationConfiguration$,
  S3SourceConfiguration$,
  SceneError$,
  SceneErrorCode,
  SceneSummary$,
  Scope,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  SourceConfiguration$,
  SourceType,
  State,
  Status$,
  SyncJobState,
  SyncJobStatus$,
  SyncJobSummary$,
  SyncResourceFilter$,
  SyncResourceState,
  SyncResourceStatus$,
  SyncResourceSummary$,
  SyncResourceType,
  TabularConditions$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  ThrottlingException,
  ThrottlingException$,
  TooManyTagsException,
  TooManyTagsException$,
  Type,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateComponentType$,
  UpdateComponentTypeCommand,
  UpdateComponentTypeRequest$,
  UpdateComponentTypeResponse$,
  UpdateEntity$,
  UpdateEntityCommand,
  UpdateEntityRequest$,
  UpdateEntityResponse$,
  UpdatePricingPlan$,
  UpdatePricingPlanCommand,
  UpdatePricingPlanRequest$,
  UpdatePricingPlanResponse$,
  UpdateReason,
  UpdateScene$,
  UpdateSceneCommand,
  UpdateSceneRequest$,
  UpdateSceneResponse$,
  UpdateWorkspace$,
  UpdateWorkspaceCommand,
  UpdateWorkspaceRequest$,
  UpdateWorkspaceResponse$,
  ValidationException,
  ValidationException$,
  WorkspaceSummary$,
  paginateExecuteQuery,
  paginateGetPropertyValue,
  paginateGetPropertyValueHistory,
  paginateListComponentTypes,
  paginateListComponents,
  paginateListEntities,
  paginateListMetadataTransferJobs,
  paginateListProperties,
  paginateListScenes,
  paginateListSyncJobs,
  paginateListSyncResources,
  paginateListWorkspaces,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof IoTTwinMakerClient === "function");
assert(typeof IoTTwinMaker === "function");
// commands
assert(typeof BatchPutPropertyValuesCommand === "function");
assert(typeof BatchPutPropertyValues$ === "object");
assert(typeof CancelMetadataTransferJobCommand === "function");
assert(typeof CancelMetadataTransferJob$ === "object");
assert(typeof CreateComponentTypeCommand === "function");
assert(typeof CreateComponentType$ === "object");
assert(typeof CreateEntityCommand === "function");
assert(typeof CreateEntity$ === "object");
assert(typeof CreateMetadataTransferJobCommand === "function");
assert(typeof CreateMetadataTransferJob$ === "object");
assert(typeof CreateSceneCommand === "function");
assert(typeof CreateScene$ === "object");
assert(typeof CreateSyncJobCommand === "function");
assert(typeof CreateSyncJob$ === "object");
assert(typeof CreateWorkspaceCommand === "function");
assert(typeof CreateWorkspace$ === "object");
assert(typeof DeleteComponentTypeCommand === "function");
assert(typeof DeleteComponentType$ === "object");
assert(typeof DeleteEntityCommand === "function");
assert(typeof DeleteEntity$ === "object");
assert(typeof DeleteSceneCommand === "function");
assert(typeof DeleteScene$ === "object");
assert(typeof DeleteSyncJobCommand === "function");
assert(typeof DeleteSyncJob$ === "object");
assert(typeof DeleteWorkspaceCommand === "function");
assert(typeof DeleteWorkspace$ === "object");
assert(typeof ExecuteQueryCommand === "function");
assert(typeof ExecuteQuery$ === "object");
assert(typeof GetComponentTypeCommand === "function");
assert(typeof GetComponentType$ === "object");
assert(typeof GetEntityCommand === "function");
assert(typeof GetEntity$ === "object");
assert(typeof GetMetadataTransferJobCommand === "function");
assert(typeof GetMetadataTransferJob$ === "object");
assert(typeof GetPricingPlanCommand === "function");
assert(typeof GetPricingPlan$ === "object");
assert(typeof GetPropertyValueCommand === "function");
assert(typeof GetPropertyValue$ === "object");
assert(typeof GetPropertyValueHistoryCommand === "function");
assert(typeof GetPropertyValueHistory$ === "object");
assert(typeof GetSceneCommand === "function");
assert(typeof GetScene$ === "object");
assert(typeof GetSyncJobCommand === "function");
assert(typeof GetSyncJob$ === "object");
assert(typeof GetWorkspaceCommand === "function");
assert(typeof GetWorkspace$ === "object");
assert(typeof ListComponentsCommand === "function");
assert(typeof ListComponents$ === "object");
assert(typeof ListComponentTypesCommand === "function");
assert(typeof ListComponentTypes$ === "object");
assert(typeof ListEntitiesCommand === "function");
assert(typeof ListEntities$ === "object");
assert(typeof ListMetadataTransferJobsCommand === "function");
assert(typeof ListMetadataTransferJobs$ === "object");
assert(typeof ListPropertiesCommand === "function");
assert(typeof ListProperties$ === "object");
assert(typeof ListScenesCommand === "function");
assert(typeof ListScenes$ === "object");
assert(typeof ListSyncJobsCommand === "function");
assert(typeof ListSyncJobs$ === "object");
assert(typeof ListSyncResourcesCommand === "function");
assert(typeof ListSyncResources$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ListWorkspacesCommand === "function");
assert(typeof ListWorkspaces$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateComponentTypeCommand === "function");
assert(typeof UpdateComponentType$ === "object");
assert(typeof UpdateEntityCommand === "function");
assert(typeof UpdateEntity$ === "object");
assert(typeof UpdatePricingPlanCommand === "function");
assert(typeof UpdatePricingPlan$ === "object");
assert(typeof UpdateSceneCommand === "function");
assert(typeof UpdateScene$ === "object");
assert(typeof UpdateWorkspaceCommand === "function");
assert(typeof UpdateWorkspace$ === "object");
// structural schemas
assert(typeof BatchPutPropertyError$ === "object");
assert(typeof BatchPutPropertyErrorEntry$ === "object");
assert(typeof BatchPutPropertyValuesRequest$ === "object");
assert(typeof BatchPutPropertyValuesResponse$ === "object");
assert(typeof BundleInformation$ === "object");
assert(typeof CancelMetadataTransferJobRequest$ === "object");
assert(typeof CancelMetadataTransferJobResponse$ === "object");
assert(typeof ColumnDescription$ === "object");
assert(typeof ComponentPropertyGroupRequest$ === "object");
assert(typeof ComponentPropertyGroupResponse$ === "object");
assert(typeof ComponentRequest$ === "object");
assert(typeof ComponentResponse$ === "object");
assert(typeof ComponentSummary$ === "object");
assert(typeof ComponentTypeSummary$ === "object");
assert(typeof ComponentUpdateRequest$ === "object");
assert(typeof CompositeComponentRequest$ === "object");
assert(typeof CompositeComponentTypeRequest$ === "object");
assert(typeof CompositeComponentTypeResponse$ === "object");
assert(typeof CompositeComponentUpdateRequest$ === "object");
assert(typeof CreateComponentTypeRequest$ === "object");
assert(typeof CreateComponentTypeResponse$ === "object");
assert(typeof CreateEntityRequest$ === "object");
assert(typeof CreateEntityResponse$ === "object");
assert(typeof CreateMetadataTransferJobRequest$ === "object");
assert(typeof CreateMetadataTransferJobResponse$ === "object");
assert(typeof CreateSceneRequest$ === "object");
assert(typeof CreateSceneResponse$ === "object");
assert(typeof CreateSyncJobRequest$ === "object");
assert(typeof CreateSyncJobResponse$ === "object");
assert(typeof CreateWorkspaceRequest$ === "object");
assert(typeof CreateWorkspaceResponse$ === "object");
assert(typeof DataConnector$ === "object");
assert(typeof DataType$ === "object");
assert(typeof DataValue$ === "object");
assert(typeof DeleteComponentTypeRequest$ === "object");
assert(typeof DeleteComponentTypeResponse$ === "object");
assert(typeof DeleteEntityRequest$ === "object");
assert(typeof DeleteEntityResponse$ === "object");
assert(typeof DeleteSceneRequest$ === "object");
assert(typeof DeleteSceneResponse$ === "object");
assert(typeof DeleteSyncJobRequest$ === "object");
assert(typeof DeleteSyncJobResponse$ === "object");
assert(typeof DeleteWorkspaceRequest$ === "object");
assert(typeof DeleteWorkspaceResponse$ === "object");
assert(typeof DestinationConfiguration$ === "object");
assert(typeof EntityPropertyReference$ === "object");
assert(typeof EntitySummary$ === "object");
assert(typeof ErrorDetails$ === "object");
assert(typeof ExecuteQueryRequest$ === "object");
assert(typeof ExecuteQueryResponse$ === "object");
assert(typeof FilterByAsset$ === "object");
assert(typeof FilterByAssetModel$ === "object");
assert(typeof FilterByComponentType$ === "object");
assert(typeof FilterByEntity$ === "object");
assert(typeof FunctionRequest$ === "object");
assert(typeof FunctionResponse$ === "object");
assert(typeof GetComponentTypeRequest$ === "object");
assert(typeof GetComponentTypeResponse$ === "object");
assert(typeof GetEntityRequest$ === "object");
assert(typeof GetEntityResponse$ === "object");
assert(typeof GetMetadataTransferJobRequest$ === "object");
assert(typeof GetMetadataTransferJobResponse$ === "object");
assert(typeof GetPricingPlanRequest$ === "object");
assert(typeof GetPricingPlanResponse$ === "object");
assert(typeof GetPropertyValueHistoryRequest$ === "object");
assert(typeof GetPropertyValueHistoryResponse$ === "object");
assert(typeof GetPropertyValueRequest$ === "object");
assert(typeof GetPropertyValueResponse$ === "object");
assert(typeof GetSceneRequest$ === "object");
assert(typeof GetSceneResponse$ === "object");
assert(typeof GetSyncJobRequest$ === "object");
assert(typeof GetSyncJobResponse$ === "object");
assert(typeof GetWorkspaceRequest$ === "object");
assert(typeof GetWorkspaceResponse$ === "object");
assert(typeof InterpolationParameters$ === "object");
assert(typeof IotSiteWiseSourceConfiguration$ === "object");
assert(typeof IotSiteWiseSourceConfigurationFilter$ === "object");
assert(typeof IotTwinMakerDestinationConfiguration$ === "object");
assert(typeof IotTwinMakerSourceConfiguration$ === "object");
assert(typeof IotTwinMakerSourceConfigurationFilter$ === "object");
assert(typeof LambdaFunction$ === "object");
assert(typeof ListComponentsRequest$ === "object");
assert(typeof ListComponentsResponse$ === "object");
assert(typeof ListComponentTypesFilter$ === "object");
assert(typeof ListComponentTypesRequest$ === "object");
assert(typeof ListComponentTypesResponse$ === "object");
assert(typeof ListEntitiesFilter$ === "object");
assert(typeof ListEntitiesRequest$ === "object");
assert(typeof ListEntitiesResponse$ === "object");
assert(typeof ListMetadataTransferJobsFilter$ === "object");
assert(typeof ListMetadataTransferJobsRequest$ === "object");
assert(typeof ListMetadataTransferJobsResponse$ === "object");
assert(typeof ListPropertiesRequest$ === "object");
assert(typeof ListPropertiesResponse$ === "object");
assert(typeof ListScenesRequest$ === "object");
assert(typeof ListScenesResponse$ === "object");
assert(typeof ListSyncJobsRequest$ === "object");
assert(typeof ListSyncJobsResponse$ === "object");
assert(typeof ListSyncResourcesRequest$ === "object");
assert(typeof ListSyncResourcesResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof ListWorkspacesRequest$ === "object");
assert(typeof ListWorkspacesResponse$ === "object");
assert(typeof MetadataTransferJobProgress$ === "object");
assert(typeof MetadataTransferJobStatus$ === "object");
assert(typeof MetadataTransferJobSummary$ === "object");
assert(typeof OrderBy$ === "object");
assert(typeof ParentEntityUpdateRequest$ === "object");
assert(typeof PricingPlan$ === "object");
assert(typeof PropertyDefinitionRequest$ === "object");
assert(typeof PropertyDefinitionResponse$ === "object");
assert(typeof PropertyFilter$ === "object");
assert(typeof PropertyGroupRequest$ === "object");
assert(typeof PropertyGroupResponse$ === "object");
assert(typeof PropertyLatestValue$ === "object");
assert(typeof PropertyRequest$ === "object");
assert(typeof PropertyResponse$ === "object");
assert(typeof PropertySummary$ === "object");
assert(typeof PropertyValue$ === "object");
assert(typeof PropertyValueEntry$ === "object");
assert(typeof PropertyValueHistory$ === "object");
assert(typeof Relationship$ === "object");
assert(typeof RelationshipValue$ === "object");
assert(typeof Row$ === "object");
assert(typeof S3DestinationConfiguration$ === "object");
assert(typeof S3SourceConfiguration$ === "object");
assert(typeof SceneError$ === "object");
assert(typeof SceneSummary$ === "object");
assert(typeof SourceConfiguration$ === "object");
assert(typeof Status$ === "object");
assert(typeof SyncJobStatus$ === "object");
assert(typeof SyncJobSummary$ === "object");
assert(typeof SyncResourceFilter$ === "object");
assert(typeof SyncResourceStatus$ === "object");
assert(typeof SyncResourceSummary$ === "object");
assert(typeof TabularConditions$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateComponentTypeRequest$ === "object");
assert(typeof UpdateComponentTypeResponse$ === "object");
assert(typeof UpdateEntityRequest$ === "object");
assert(typeof UpdateEntityResponse$ === "object");
assert(typeof UpdatePricingPlanRequest$ === "object");
assert(typeof UpdatePricingPlanResponse$ === "object");
assert(typeof UpdateSceneRequest$ === "object");
assert(typeof UpdateSceneResponse$ === "object");
assert(typeof UpdateWorkspaceRequest$ === "object");
assert(typeof UpdateWorkspaceResponse$ === "object");
assert(typeof WorkspaceSummary$ === "object");
// enums
assert(typeof ColumnType === "object");
assert(typeof ComponentUpdateType === "object");
assert(typeof DestinationType === "object");
assert(typeof ErrorCode === "object");
assert(typeof GroupType === "object");
assert(typeof InterpolationType === "object");
assert(typeof MetadataTransferJobState === "object");
assert(typeof Order === "object");
assert(typeof OrderByTime === "object");
assert(typeof ParentEntityUpdateType === "object");
assert(typeof PricingMode === "object");
assert(typeof PricingTier === "object");
assert(typeof PropertyGroupUpdateType === "object");
assert(typeof PropertyUpdateType === "object");
assert(typeof SceneErrorCode === "object");
assert(typeof Scope === "object");
assert(typeof SourceType === "object");
assert(typeof State === "object");
assert(typeof SyncJobState === "object");
assert(typeof SyncResourceState === "object");
assert(typeof SyncResourceType === "object");
assert(typeof Type === "object");
assert(typeof UpdateReason === "object");
// errors
assert(AccessDeniedException.prototype instanceof IoTTwinMakerServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof IoTTwinMakerServiceException);
assert(typeof ConflictException$ === "object");
assert(ConnectorFailureException.prototype instanceof IoTTwinMakerServiceException);
assert(typeof ConnectorFailureException$ === "object");
assert(ConnectorTimeoutException.prototype instanceof IoTTwinMakerServiceException);
assert(typeof ConnectorTimeoutException$ === "object");
assert(InternalServerException.prototype instanceof IoTTwinMakerServiceException);
assert(typeof InternalServerException$ === "object");
assert(QueryTimeoutException.prototype instanceof IoTTwinMakerServiceException);
assert(typeof QueryTimeoutException$ === "object");
assert(ResourceNotFoundException.prototype instanceof IoTTwinMakerServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof IoTTwinMakerServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof IoTTwinMakerServiceException);
assert(typeof ThrottlingException$ === "object");
assert(TooManyTagsException.prototype instanceof IoTTwinMakerServiceException);
assert(typeof TooManyTagsException$ === "object");
assert(ValidationException.prototype instanceof IoTTwinMakerServiceException);
assert(typeof ValidationException$ === "object");
assert(IoTTwinMakerServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateExecuteQuery === "function");
assert(typeof paginateGetPropertyValue === "function");
assert(typeof paginateGetPropertyValueHistory === "function");
assert(typeof paginateListComponentTypes === "function");
assert(typeof paginateListComponents === "function");
assert(typeof paginateListEntities === "function");
assert(typeof paginateListMetadataTransferJobs === "function");
assert(typeof paginateListProperties === "function");
assert(typeof paginateListScenes === "function");
assert(typeof paginateListSyncJobs === "function");
assert(typeof paginateListSyncResources === "function");
assert(typeof paginateListWorkspaces === "function");
console.log(`IoTTwinMaker index test passed.`);
