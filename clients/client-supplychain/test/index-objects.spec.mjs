import {
  AccessDeniedException,
  AccessDeniedException$,
  BillOfMaterialsImportJob$,
  ConfigurationJobStatus,
  ConflictException,
  ConflictException$,
  CreateBillOfMaterialsImportJob$,
  CreateBillOfMaterialsImportJobCommand,
  CreateBillOfMaterialsImportJobRequest$,
  CreateBillOfMaterialsImportJobResponse$,
  CreateDataIntegrationFlow$,
  CreateDataIntegrationFlowCommand,
  CreateDataIntegrationFlowRequest$,
  CreateDataIntegrationFlowResponse$,
  CreateDataLakeDataset$,
  CreateDataLakeDatasetCommand,
  CreateDataLakeDatasetRequest$,
  CreateDataLakeDatasetResponse$,
  CreateDataLakeNamespace$,
  CreateDataLakeNamespaceCommand,
  CreateDataLakeNamespaceRequest$,
  CreateDataLakeNamespaceResponse$,
  CreateInstance$,
  CreateInstanceCommand,
  CreateInstanceRequest$,
  CreateInstanceResponse$,
  DataIntegrationEvent$,
  DataIntegrationEventDatasetLoadExecutionDetails$,
  DataIntegrationEventDatasetLoadStatus,
  DataIntegrationEventDatasetOperationType,
  DataIntegrationEventDatasetTargetConfiguration$,
  DataIntegrationEventDatasetTargetDetails$,
  DataIntegrationEventType,
  DataIntegrationFlow$,
  DataIntegrationFlowDatasetOptions$,
  DataIntegrationFlowDatasetSource$,
  DataIntegrationFlowDatasetSourceConfiguration$,
  DataIntegrationFlowDatasetTargetConfiguration$,
  DataIntegrationFlowDedupeStrategy$,
  DataIntegrationFlowDedupeStrategyType,
  DataIntegrationFlowExecution$,
  DataIntegrationFlowExecutionOutputMetadata$,
  DataIntegrationFlowExecutionSourceInfo$,
  DataIntegrationFlowExecutionStatus,
  DataIntegrationFlowFieldPriorityDedupeField$,
  DataIntegrationFlowFieldPriorityDedupeSortOrder,
  DataIntegrationFlowFieldPriorityDedupeStrategyConfiguration$,
  DataIntegrationFlowFileType,
  DataIntegrationFlowLoadType,
  DataIntegrationFlowS3Options$,
  DataIntegrationFlowS3Source$,
  DataIntegrationFlowS3SourceConfiguration$,
  DataIntegrationFlowS3TargetConfiguration$,
  DataIntegrationFlowSource$,
  DataIntegrationFlowSourceType,
  DataIntegrationFlowSQLTransformationConfiguration$,
  DataIntegrationFlowTarget$,
  DataIntegrationFlowTargetType,
  DataIntegrationFlowTransformation$,
  DataIntegrationFlowTransformationType,
  DataLakeDataset$,
  DataLakeDatasetPartitionField$,
  DataLakeDatasetPartitionFieldTransform$,
  DataLakeDatasetPartitionSpec$,
  DataLakeDatasetPartitionTransformType,
  DataLakeDatasetPrimaryKeyField$,
  DataLakeDatasetSchema$,
  DataLakeDatasetSchemaField$,
  DataLakeDatasetSchemaFieldType,
  DataLakeNamespace$,
  DeleteDataIntegrationFlow$,
  DeleteDataIntegrationFlowCommand,
  DeleteDataIntegrationFlowRequest$,
  DeleteDataIntegrationFlowResponse$,
  DeleteDataLakeDataset$,
  DeleteDataLakeDatasetCommand,
  DeleteDataLakeDatasetRequest$,
  DeleteDataLakeDatasetResponse$,
  DeleteDataLakeNamespace$,
  DeleteDataLakeNamespaceCommand,
  DeleteDataLakeNamespaceRequest$,
  DeleteDataLakeNamespaceResponse$,
  DeleteInstance$,
  DeleteInstanceCommand,
  DeleteInstanceRequest$,
  DeleteInstanceResponse$,
  GetBillOfMaterialsImportJob$,
  GetBillOfMaterialsImportJobCommand,
  GetBillOfMaterialsImportJobRequest$,
  GetBillOfMaterialsImportJobResponse$,
  GetDataIntegrationEvent$,
  GetDataIntegrationEventCommand,
  GetDataIntegrationEventRequest$,
  GetDataIntegrationEventResponse$,
  GetDataIntegrationFlow$,
  GetDataIntegrationFlowCommand,
  GetDataIntegrationFlowExecution$,
  GetDataIntegrationFlowExecutionCommand,
  GetDataIntegrationFlowExecutionRequest$,
  GetDataIntegrationFlowExecutionResponse$,
  GetDataIntegrationFlowRequest$,
  GetDataIntegrationFlowResponse$,
  GetDataLakeDataset$,
  GetDataLakeDatasetCommand,
  GetDataLakeDatasetRequest$,
  GetDataLakeDatasetResponse$,
  GetDataLakeNamespace$,
  GetDataLakeNamespaceCommand,
  GetDataLakeNamespaceRequest$,
  GetDataLakeNamespaceResponse$,
  GetInstance$,
  GetInstanceCommand,
  GetInstanceRequest$,
  GetInstanceResponse$,
  Instance$,
  InstanceState,
  InternalServerException,
  InternalServerException$,
  ListDataIntegrationEvents$,
  ListDataIntegrationEventsCommand,
  ListDataIntegrationEventsRequest$,
  ListDataIntegrationEventsResponse$,
  ListDataIntegrationFlowExecutions$,
  ListDataIntegrationFlowExecutionsCommand,
  ListDataIntegrationFlowExecutionsRequest$,
  ListDataIntegrationFlowExecutionsResponse$,
  ListDataIntegrationFlows$,
  ListDataIntegrationFlowsCommand,
  ListDataIntegrationFlowsRequest$,
  ListDataIntegrationFlowsResponse$,
  ListDataLakeDatasets$,
  ListDataLakeDatasetsCommand,
  ListDataLakeDatasetsRequest$,
  ListDataLakeDatasetsResponse$,
  ListDataLakeNamespaces$,
  ListDataLakeNamespacesCommand,
  ListDataLakeNamespacesRequest$,
  ListDataLakeNamespacesResponse$,
  ListInstances$,
  ListInstancesCommand,
  ListInstancesRequest$,
  ListInstancesResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  paginateListDataIntegrationEvents,
  paginateListDataIntegrationFlowExecutions,
  paginateListDataIntegrationFlows,
  paginateListDataLakeDatasets,
  paginateListDataLakeNamespaces,
  paginateListInstances,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  SendDataIntegrationEvent$,
  SendDataIntegrationEventCommand,
  SendDataIntegrationEventRequest$,
  SendDataIntegrationEventResponse$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  SupplyChain,
  SupplyChainClient,
  SupplyChainServiceException,
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
  UpdateDataIntegrationFlow$,
  UpdateDataIntegrationFlowCommand,
  UpdateDataIntegrationFlowRequest$,
  UpdateDataIntegrationFlowResponse$,
  UpdateDataLakeDataset$,
  UpdateDataLakeDatasetCommand,
  UpdateDataLakeDatasetRequest$,
  UpdateDataLakeDatasetResponse$,
  UpdateDataLakeNamespace$,
  UpdateDataLakeNamespaceCommand,
  UpdateDataLakeNamespaceRequest$,
  UpdateDataLakeNamespaceResponse$,
  UpdateInstance$,
  UpdateInstanceCommand,
  UpdateInstanceRequest$,
  UpdateInstanceResponse$,
  ValidationException,
  ValidationException$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof SupplyChainClient === "function");
assert(typeof SupplyChain === "function");
// commands
assert(typeof CreateBillOfMaterialsImportJobCommand === "function");
assert(typeof CreateBillOfMaterialsImportJob$ === "object");
assert(typeof CreateDataIntegrationFlowCommand === "function");
assert(typeof CreateDataIntegrationFlow$ === "object");
assert(typeof CreateDataLakeDatasetCommand === "function");
assert(typeof CreateDataLakeDataset$ === "object");
assert(typeof CreateDataLakeNamespaceCommand === "function");
assert(typeof CreateDataLakeNamespace$ === "object");
assert(typeof CreateInstanceCommand === "function");
assert(typeof CreateInstance$ === "object");
assert(typeof DeleteDataIntegrationFlowCommand === "function");
assert(typeof DeleteDataIntegrationFlow$ === "object");
assert(typeof DeleteDataLakeDatasetCommand === "function");
assert(typeof DeleteDataLakeDataset$ === "object");
assert(typeof DeleteDataLakeNamespaceCommand === "function");
assert(typeof DeleteDataLakeNamespace$ === "object");
assert(typeof DeleteInstanceCommand === "function");
assert(typeof DeleteInstance$ === "object");
assert(typeof GetBillOfMaterialsImportJobCommand === "function");
assert(typeof GetBillOfMaterialsImportJob$ === "object");
assert(typeof GetDataIntegrationEventCommand === "function");
assert(typeof GetDataIntegrationEvent$ === "object");
assert(typeof GetDataIntegrationFlowCommand === "function");
assert(typeof GetDataIntegrationFlow$ === "object");
assert(typeof GetDataIntegrationFlowExecutionCommand === "function");
assert(typeof GetDataIntegrationFlowExecution$ === "object");
assert(typeof GetDataLakeDatasetCommand === "function");
assert(typeof GetDataLakeDataset$ === "object");
assert(typeof GetDataLakeNamespaceCommand === "function");
assert(typeof GetDataLakeNamespace$ === "object");
assert(typeof GetInstanceCommand === "function");
assert(typeof GetInstance$ === "object");
assert(typeof ListDataIntegrationEventsCommand === "function");
assert(typeof ListDataIntegrationEvents$ === "object");
assert(typeof ListDataIntegrationFlowExecutionsCommand === "function");
assert(typeof ListDataIntegrationFlowExecutions$ === "object");
assert(typeof ListDataIntegrationFlowsCommand === "function");
assert(typeof ListDataIntegrationFlows$ === "object");
assert(typeof ListDataLakeDatasetsCommand === "function");
assert(typeof ListDataLakeDatasets$ === "object");
assert(typeof ListDataLakeNamespacesCommand === "function");
assert(typeof ListDataLakeNamespaces$ === "object");
assert(typeof ListInstancesCommand === "function");
assert(typeof ListInstances$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof SendDataIntegrationEventCommand === "function");
assert(typeof SendDataIntegrationEvent$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateDataIntegrationFlowCommand === "function");
assert(typeof UpdateDataIntegrationFlow$ === "object");
assert(typeof UpdateDataLakeDatasetCommand === "function");
assert(typeof UpdateDataLakeDataset$ === "object");
assert(typeof UpdateDataLakeNamespaceCommand === "function");
assert(typeof UpdateDataLakeNamespace$ === "object");
assert(typeof UpdateInstanceCommand === "function");
assert(typeof UpdateInstance$ === "object");
// structural schemas
assert(typeof BillOfMaterialsImportJob$ === "object");
assert(typeof CreateBillOfMaterialsImportJobRequest$ === "object");
assert(typeof CreateBillOfMaterialsImportJobResponse$ === "object");
assert(typeof CreateDataIntegrationFlowRequest$ === "object");
assert(typeof CreateDataIntegrationFlowResponse$ === "object");
assert(typeof CreateDataLakeDatasetRequest$ === "object");
assert(typeof CreateDataLakeDatasetResponse$ === "object");
assert(typeof CreateDataLakeNamespaceRequest$ === "object");
assert(typeof CreateDataLakeNamespaceResponse$ === "object");
assert(typeof CreateInstanceRequest$ === "object");
assert(typeof CreateInstanceResponse$ === "object");
assert(typeof DataIntegrationEvent$ === "object");
assert(typeof DataIntegrationEventDatasetLoadExecutionDetails$ === "object");
assert(typeof DataIntegrationEventDatasetTargetConfiguration$ === "object");
assert(typeof DataIntegrationEventDatasetTargetDetails$ === "object");
assert(typeof DataIntegrationFlow$ === "object");
assert(typeof DataIntegrationFlowDatasetOptions$ === "object");
assert(typeof DataIntegrationFlowDatasetSource$ === "object");
assert(typeof DataIntegrationFlowDatasetSourceConfiguration$ === "object");
assert(typeof DataIntegrationFlowDatasetTargetConfiguration$ === "object");
assert(typeof DataIntegrationFlowDedupeStrategy$ === "object");
assert(typeof DataIntegrationFlowExecution$ === "object");
assert(typeof DataIntegrationFlowExecutionOutputMetadata$ === "object");
assert(typeof DataIntegrationFlowExecutionSourceInfo$ === "object");
assert(typeof DataIntegrationFlowFieldPriorityDedupeField$ === "object");
assert(typeof DataIntegrationFlowFieldPriorityDedupeStrategyConfiguration$ === "object");
assert(typeof DataIntegrationFlowS3Options$ === "object");
assert(typeof DataIntegrationFlowS3Source$ === "object");
assert(typeof DataIntegrationFlowS3SourceConfiguration$ === "object");
assert(typeof DataIntegrationFlowS3TargetConfiguration$ === "object");
assert(typeof DataIntegrationFlowSource$ === "object");
assert(typeof DataIntegrationFlowSQLTransformationConfiguration$ === "object");
assert(typeof DataIntegrationFlowTarget$ === "object");
assert(typeof DataIntegrationFlowTransformation$ === "object");
assert(typeof DataLakeDataset$ === "object");
assert(typeof DataLakeDatasetPartitionField$ === "object");
assert(typeof DataLakeDatasetPartitionFieldTransform$ === "object");
assert(typeof DataLakeDatasetPartitionSpec$ === "object");
assert(typeof DataLakeDatasetPrimaryKeyField$ === "object");
assert(typeof DataLakeDatasetSchema$ === "object");
assert(typeof DataLakeDatasetSchemaField$ === "object");
assert(typeof DataLakeNamespace$ === "object");
assert(typeof DeleteDataIntegrationFlowRequest$ === "object");
assert(typeof DeleteDataIntegrationFlowResponse$ === "object");
assert(typeof DeleteDataLakeDatasetRequest$ === "object");
assert(typeof DeleteDataLakeDatasetResponse$ === "object");
assert(typeof DeleteDataLakeNamespaceRequest$ === "object");
assert(typeof DeleteDataLakeNamespaceResponse$ === "object");
assert(typeof DeleteInstanceRequest$ === "object");
assert(typeof DeleteInstanceResponse$ === "object");
assert(typeof GetBillOfMaterialsImportJobRequest$ === "object");
assert(typeof GetBillOfMaterialsImportJobResponse$ === "object");
assert(typeof GetDataIntegrationEventRequest$ === "object");
assert(typeof GetDataIntegrationEventResponse$ === "object");
assert(typeof GetDataIntegrationFlowExecutionRequest$ === "object");
assert(typeof GetDataIntegrationFlowExecutionResponse$ === "object");
assert(typeof GetDataIntegrationFlowRequest$ === "object");
assert(typeof GetDataIntegrationFlowResponse$ === "object");
assert(typeof GetDataLakeDatasetRequest$ === "object");
assert(typeof GetDataLakeDatasetResponse$ === "object");
assert(typeof GetDataLakeNamespaceRequest$ === "object");
assert(typeof GetDataLakeNamespaceResponse$ === "object");
assert(typeof GetInstanceRequest$ === "object");
assert(typeof GetInstanceResponse$ === "object");
assert(typeof Instance$ === "object");
assert(typeof ListDataIntegrationEventsRequest$ === "object");
assert(typeof ListDataIntegrationEventsResponse$ === "object");
assert(typeof ListDataIntegrationFlowExecutionsRequest$ === "object");
assert(typeof ListDataIntegrationFlowExecutionsResponse$ === "object");
assert(typeof ListDataIntegrationFlowsRequest$ === "object");
assert(typeof ListDataIntegrationFlowsResponse$ === "object");
assert(typeof ListDataLakeDatasetsRequest$ === "object");
assert(typeof ListDataLakeDatasetsResponse$ === "object");
assert(typeof ListDataLakeNamespacesRequest$ === "object");
assert(typeof ListDataLakeNamespacesResponse$ === "object");
assert(typeof ListInstancesRequest$ === "object");
assert(typeof ListInstancesResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof SendDataIntegrationEventRequest$ === "object");
assert(typeof SendDataIntegrationEventResponse$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateDataIntegrationFlowRequest$ === "object");
assert(typeof UpdateDataIntegrationFlowResponse$ === "object");
assert(typeof UpdateDataLakeDatasetRequest$ === "object");
assert(typeof UpdateDataLakeDatasetResponse$ === "object");
assert(typeof UpdateDataLakeNamespaceRequest$ === "object");
assert(typeof UpdateDataLakeNamespaceResponse$ === "object");
assert(typeof UpdateInstanceRequest$ === "object");
assert(typeof UpdateInstanceResponse$ === "object");
// enums
assert(typeof ConfigurationJobStatus === "object");
assert(typeof DataIntegrationEventDatasetLoadStatus === "object");
assert(typeof DataIntegrationEventDatasetOperationType === "object");
assert(typeof DataIntegrationEventType === "object");
assert(typeof DataIntegrationFlowDedupeStrategyType === "object");
assert(typeof DataIntegrationFlowExecutionStatus === "object");
assert(typeof DataIntegrationFlowFieldPriorityDedupeSortOrder === "object");
assert(typeof DataIntegrationFlowFileType === "object");
assert(typeof DataIntegrationFlowLoadType === "object");
assert(typeof DataIntegrationFlowSourceType === "object");
assert(typeof DataIntegrationFlowTargetType === "object");
assert(typeof DataIntegrationFlowTransformationType === "object");
assert(typeof DataLakeDatasetPartitionTransformType === "object");
assert(typeof DataLakeDatasetSchemaFieldType === "object");
assert(typeof InstanceState === "object");
// errors
assert(AccessDeniedException.prototype instanceof SupplyChainServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof SupplyChainServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof SupplyChainServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof SupplyChainServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof SupplyChainServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof SupplyChainServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof SupplyChainServiceException);
assert(typeof ValidationException$ === "object");
assert(SupplyChainServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListDataIntegrationEvents === "function");
assert(typeof paginateListDataIntegrationFlowExecutions === "function");
assert(typeof paginateListDataIntegrationFlows === "function");
assert(typeof paginateListDataLakeDatasets === "function");
assert(typeof paginateListDataLakeNamespaces === "function");
assert(typeof paginateListInstances === "function");
console.log(`SupplyChain index test passed.`);
