import {
  ConfigurationJobStatus,
  CreateBillOfMaterialsImportJobCommand,
  CreateDataIntegrationFlowCommand,
  CreateDataLakeDatasetCommand,
  CreateDataLakeNamespaceCommand,
  CreateInstanceCommand,
  DataIntegrationEventDatasetLoadStatus,
  DataIntegrationEventDatasetOperationType,
  DataIntegrationEventType,
  DataIntegrationFlowDedupeStrategyType,
  DataIntegrationFlowExecutionStatus,
  DataIntegrationFlowFieldPriorityDedupeSortOrder,
  DataIntegrationFlowFileType,
  DataIntegrationFlowLoadType,
  DataIntegrationFlowSourceType,
  DataIntegrationFlowTargetType,
  DataIntegrationFlowTransformationType,
  DataLakeDatasetPartitionTransformType,
  DataLakeDatasetSchemaFieldType,
  DeleteDataIntegrationFlowCommand,
  DeleteDataLakeDatasetCommand,
  DeleteDataLakeNamespaceCommand,
  DeleteInstanceCommand,
  GetBillOfMaterialsImportJobCommand,
  GetDataIntegrationEventCommand,
  GetDataIntegrationFlowCommand,
  GetDataIntegrationFlowExecutionCommand,
  GetDataLakeDatasetCommand,
  GetDataLakeNamespaceCommand,
  GetInstanceCommand,
  InstanceState,
  ListDataIntegrationEventsCommand,
  ListDataIntegrationFlowExecutionsCommand,
  ListDataIntegrationFlowsCommand,
  ListDataLakeDatasetsCommand,
  ListDataLakeNamespacesCommand,
  ListInstancesCommand,
  ListTagsForResourceCommand,
  SendDataIntegrationEventCommand,
  SupplyChain,
  SupplyChainClient,
  SupplyChainServiceException,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateDataIntegrationFlowCommand,
  UpdateDataLakeDatasetCommand,
  UpdateDataLakeNamespaceCommand,
  UpdateInstanceCommand,
  paginateListDataIntegrationEvents,
  paginateListDataIntegrationFlowExecutions,
  paginateListDataIntegrationFlows,
  paginateListDataLakeDatasets,
  paginateListDataLakeNamespaces,
  paginateListInstances,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof SupplyChainClient === "function")
assert(typeof SupplyChain === "function")
// commands
assert(typeof CreateBillOfMaterialsImportJobCommand === "function")
assert(typeof CreateDataIntegrationFlowCommand === "function")
assert(typeof CreateDataLakeDatasetCommand === "function")
assert(typeof CreateDataLakeNamespaceCommand === "function")
assert(typeof CreateInstanceCommand === "function")
assert(typeof DeleteDataIntegrationFlowCommand === "function")
assert(typeof DeleteDataLakeDatasetCommand === "function")
assert(typeof DeleteDataLakeNamespaceCommand === "function")
assert(typeof DeleteInstanceCommand === "function")
assert(typeof GetBillOfMaterialsImportJobCommand === "function")
assert(typeof GetDataIntegrationEventCommand === "function")
assert(typeof GetDataIntegrationFlowCommand === "function")
assert(typeof GetDataIntegrationFlowExecutionCommand === "function")
assert(typeof GetDataLakeDatasetCommand === "function")
assert(typeof GetDataLakeNamespaceCommand === "function")
assert(typeof GetInstanceCommand === "function")
assert(typeof ListDataIntegrationEventsCommand === "function")
assert(typeof ListDataIntegrationFlowExecutionsCommand === "function")
assert(typeof ListDataIntegrationFlowsCommand === "function")
assert(typeof ListDataLakeDatasetsCommand === "function")
assert(typeof ListDataLakeNamespacesCommand === "function")
assert(typeof ListInstancesCommand === "function")
assert(typeof ListTagsForResourceCommand === "function")
assert(typeof SendDataIntegrationEventCommand === "function")
assert(typeof TagResourceCommand === "function")
assert(typeof UntagResourceCommand === "function")
assert(typeof UpdateDataIntegrationFlowCommand === "function")
assert(typeof UpdateDataLakeDatasetCommand === "function")
assert(typeof UpdateDataLakeNamespaceCommand === "function")
assert(typeof UpdateInstanceCommand === "function")
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
assert(SupplyChainServiceException.prototype instanceof Error)
// paginators
assert(typeof paginateListDataIntegrationEvents === "function")
assert(typeof paginateListDataIntegrationFlowExecutions === "function")
assert(typeof paginateListDataIntegrationFlows === "function")
assert(typeof paginateListDataLakeDatasets === "function")
assert(typeof paginateListDataLakeNamespaces === "function")
assert(typeof paginateListInstances === "function")
console.log(`SupplyChain index test passed.`);
