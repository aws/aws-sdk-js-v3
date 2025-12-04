import {
  ConnectorOperationState,
  ConnectorOperationStepState,
  ConnectorOperationStepType,
  ConnectorOperationType,
  ConnectorState,
  CreateConnectorCommand,
  CreateCustomPluginCommand,
  CreateWorkerConfigurationCommand,
  CustomPluginContentType,
  CustomPluginState,
  DeleteConnectorCommand,
  DeleteCustomPluginCommand,
  DeleteWorkerConfigurationCommand,
  DescribeConnectorCommand,
  DescribeConnectorOperationCommand,
  DescribeCustomPluginCommand,
  DescribeWorkerConfigurationCommand,
  KafkaClusterClientAuthenticationType,
  KafkaClusterEncryptionInTransitType,
  KafkaConnect,
  KafkaConnectClient,
  KafkaConnectServiceException,
  ListConnectorOperationsCommand,
  ListConnectorsCommand,
  ListCustomPluginsCommand,
  ListTagsForResourceCommand,
  ListWorkerConfigurationsCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateConnectorCommand,
  WorkerConfigurationState,
  paginateListConnectorOperations,
  paginateListConnectors,
  paginateListCustomPlugins,
  paginateListWorkerConfigurations,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof KafkaConnectClient === "function")
assert(typeof KafkaConnect === "function")
// commands
assert(typeof CreateConnectorCommand === "function")
assert(typeof CreateCustomPluginCommand === "function")
assert(typeof CreateWorkerConfigurationCommand === "function")
assert(typeof DeleteConnectorCommand === "function")
assert(typeof DeleteCustomPluginCommand === "function")
assert(typeof DeleteWorkerConfigurationCommand === "function")
assert(typeof DescribeConnectorCommand === "function")
assert(typeof DescribeConnectorOperationCommand === "function")
assert(typeof DescribeCustomPluginCommand === "function")
assert(typeof DescribeWorkerConfigurationCommand === "function")
assert(typeof ListConnectorOperationsCommand === "function")
assert(typeof ListConnectorsCommand === "function")
assert(typeof ListCustomPluginsCommand === "function")
assert(typeof ListTagsForResourceCommand === "function")
assert(typeof ListWorkerConfigurationsCommand === "function")
assert(typeof TagResourceCommand === "function")
assert(typeof UntagResourceCommand === "function")
assert(typeof UpdateConnectorCommand === "function")
// enums
assert(typeof ConnectorOperationState === "object");
assert(typeof ConnectorOperationStepState === "object");
assert(typeof ConnectorOperationStepType === "object");
assert(typeof ConnectorOperationType === "object");
assert(typeof ConnectorState === "object");
assert(typeof CustomPluginContentType === "object");
assert(typeof CustomPluginState === "object");
assert(typeof KafkaClusterClientAuthenticationType === "object");
assert(typeof KafkaClusterEncryptionInTransitType === "object");
assert(typeof WorkerConfigurationState === "object");
// errors
assert(KafkaConnectServiceException.prototype instanceof Error)
// paginators
assert(typeof paginateListConnectorOperations === "function")
assert(typeof paginateListConnectors === "function")
assert(typeof paginateListCustomPlugins === "function")
assert(typeof paginateListWorkerConfigurations === "function")
console.log(`KafkaConnect index test passed.`);
