import {
  AccessDeniedException,
  BatchPutPropertyValuesCommand,
  CancelMetadataTransferJobCommand,
  ColumnType,
  ComponentUpdateType,
  ConflictException,
  ConnectorFailureException,
  ConnectorTimeoutException,
  CreateComponentTypeCommand,
  CreateEntityCommand,
  CreateMetadataTransferJobCommand,
  CreateSceneCommand,
  CreateSyncJobCommand,
  CreateWorkspaceCommand,
  DeleteComponentTypeCommand,
  DeleteEntityCommand,
  DeleteSceneCommand,
  DeleteSyncJobCommand,
  DeleteWorkspaceCommand,
  DestinationType,
  ErrorCode,
  ExecuteQueryCommand,
  GetComponentTypeCommand,
  GetEntityCommand,
  GetMetadataTransferJobCommand,
  GetPricingPlanCommand,
  GetPropertyValueCommand,
  GetPropertyValueHistoryCommand,
  GetSceneCommand,
  GetSyncJobCommand,
  GetWorkspaceCommand,
  GroupType,
  InternalServerException,
  InterpolationType,
  IoTTwinMaker,
  IoTTwinMakerClient,
  IoTTwinMakerServiceException,
  ListComponentTypesCommand,
  ListComponentsCommand,
  ListEntitiesCommand,
  ListMetadataTransferJobsCommand,
  ListPropertiesCommand,
  ListScenesCommand,
  ListSyncJobsCommand,
  ListSyncResourcesCommand,
  ListTagsForResourceCommand,
  ListWorkspacesCommand,
  MetadataTransferJobState,
  Order,
  OrderByTime,
  ParentEntityUpdateType,
  PricingMode,
  PricingTier,
  PropertyGroupUpdateType,
  PropertyUpdateType,
  QueryTimeoutException,
  ResourceNotFoundException,
  SceneErrorCode,
  Scope,
  ServiceQuotaExceededException,
  SourceType,
  State,
  SyncJobState,
  SyncResourceState,
  SyncResourceType,
  TagResourceCommand,
  ThrottlingException,
  TooManyTagsException,
  Type,
  UntagResourceCommand,
  UpdateComponentTypeCommand,
  UpdateEntityCommand,
  UpdatePricingPlanCommand,
  UpdateReason,
  UpdateSceneCommand,
  UpdateWorkspaceCommand,
  ValidationException,
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
assert(typeof CancelMetadataTransferJobCommand === "function");
assert(typeof CreateComponentTypeCommand === "function");
assert(typeof CreateEntityCommand === "function");
assert(typeof CreateMetadataTransferJobCommand === "function");
assert(typeof CreateSceneCommand === "function");
assert(typeof CreateSyncJobCommand === "function");
assert(typeof CreateWorkspaceCommand === "function");
assert(typeof DeleteComponentTypeCommand === "function");
assert(typeof DeleteEntityCommand === "function");
assert(typeof DeleteSceneCommand === "function");
assert(typeof DeleteSyncJobCommand === "function");
assert(typeof DeleteWorkspaceCommand === "function");
assert(typeof ExecuteQueryCommand === "function");
assert(typeof GetComponentTypeCommand === "function");
assert(typeof GetEntityCommand === "function");
assert(typeof GetMetadataTransferJobCommand === "function");
assert(typeof GetPricingPlanCommand === "function");
assert(typeof GetPropertyValueCommand === "function");
assert(typeof GetPropertyValueHistoryCommand === "function");
assert(typeof GetSceneCommand === "function");
assert(typeof GetSyncJobCommand === "function");
assert(typeof GetWorkspaceCommand === "function");
assert(typeof ListComponentsCommand === "function");
assert(typeof ListComponentTypesCommand === "function");
assert(typeof ListEntitiesCommand === "function");
assert(typeof ListMetadataTransferJobsCommand === "function");
assert(typeof ListPropertiesCommand === "function");
assert(typeof ListScenesCommand === "function");
assert(typeof ListSyncJobsCommand === "function");
assert(typeof ListSyncResourcesCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListWorkspacesCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateComponentTypeCommand === "function");
assert(typeof UpdateEntityCommand === "function");
assert(typeof UpdatePricingPlanCommand === "function");
assert(typeof UpdateSceneCommand === "function");
assert(typeof UpdateWorkspaceCommand === "function");
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
assert(ConflictException.prototype instanceof IoTTwinMakerServiceException);
assert(ConnectorFailureException.prototype instanceof IoTTwinMakerServiceException);
assert(ConnectorTimeoutException.prototype instanceof IoTTwinMakerServiceException);
assert(InternalServerException.prototype instanceof IoTTwinMakerServiceException);
assert(QueryTimeoutException.prototype instanceof IoTTwinMakerServiceException);
assert(ResourceNotFoundException.prototype instanceof IoTTwinMakerServiceException);
assert(ServiceQuotaExceededException.prototype instanceof IoTTwinMakerServiceException);
assert(ThrottlingException.prototype instanceof IoTTwinMakerServiceException);
assert(TooManyTagsException.prototype instanceof IoTTwinMakerServiceException);
assert(ValidationException.prototype instanceof IoTTwinMakerServiceException);
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
