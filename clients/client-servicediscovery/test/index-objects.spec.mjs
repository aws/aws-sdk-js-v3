import {
  CreateHttpNamespaceCommand,
  CreatePrivateDnsNamespaceCommand,
  CreatePublicDnsNamespaceCommand,
  CreateServiceCommand,
  CustomHealthStatus,
  DeleteNamespaceCommand,
  DeleteServiceAttributesCommand,
  DeleteServiceCommand,
  DeregisterInstanceCommand,
  DiscoverInstancesCommand,
  DiscoverInstancesRevisionCommand,
  FilterCondition,
  GetInstanceCommand,
  GetInstancesHealthStatusCommand,
  GetNamespaceCommand,
  GetOperationCommand,
  GetServiceAttributesCommand,
  GetServiceCommand,
  HealthCheckType,
  HealthStatus,
  HealthStatusFilter,
  ListInstancesCommand,
  ListNamespacesCommand,
  ListOperationsCommand,
  ListServicesCommand,
  ListTagsForResourceCommand,
  NamespaceFilterName,
  NamespaceType,
  OperationFilterName,
  OperationStatus,
  OperationTargetType,
  OperationType,
  RecordType,
  RegisterInstanceCommand,
  RoutingPolicy,
  ServiceDiscovery,
  ServiceDiscoveryClient,
  ServiceDiscoveryServiceException,
  ServiceFilterName,
  ServiceType,
  ServiceTypeOption,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateHttpNamespaceCommand,
  UpdateInstanceCustomHealthStatusCommand,
  UpdatePrivateDnsNamespaceCommand,
  UpdatePublicDnsNamespaceCommand,
  UpdateServiceAttributesCommand,
  UpdateServiceCommand,
  paginateGetInstancesHealthStatus,
  paginateListInstances,
  paginateListNamespaces,
  paginateListOperations,
  paginateListServices,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof ServiceDiscoveryClient === "function")
assert(typeof ServiceDiscovery === "function")
// commands
assert(typeof CreateHttpNamespaceCommand === "function")
assert(typeof CreatePrivateDnsNamespaceCommand === "function")
assert(typeof CreatePublicDnsNamespaceCommand === "function")
assert(typeof CreateServiceCommand === "function")
assert(typeof DeleteNamespaceCommand === "function")
assert(typeof DeleteServiceCommand === "function")
assert(typeof DeleteServiceAttributesCommand === "function")
assert(typeof DeregisterInstanceCommand === "function")
assert(typeof DiscoverInstancesCommand === "function")
assert(typeof DiscoverInstancesRevisionCommand === "function")
assert(typeof GetInstanceCommand === "function")
assert(typeof GetInstancesHealthStatusCommand === "function")
assert(typeof GetNamespaceCommand === "function")
assert(typeof GetOperationCommand === "function")
assert(typeof GetServiceCommand === "function")
assert(typeof GetServiceAttributesCommand === "function")
assert(typeof ListInstancesCommand === "function")
assert(typeof ListNamespacesCommand === "function")
assert(typeof ListOperationsCommand === "function")
assert(typeof ListServicesCommand === "function")
assert(typeof ListTagsForResourceCommand === "function")
assert(typeof RegisterInstanceCommand === "function")
assert(typeof TagResourceCommand === "function")
assert(typeof UntagResourceCommand === "function")
assert(typeof UpdateHttpNamespaceCommand === "function")
assert(typeof UpdateInstanceCustomHealthStatusCommand === "function")
assert(typeof UpdatePrivateDnsNamespaceCommand === "function")
assert(typeof UpdatePublicDnsNamespaceCommand === "function")
assert(typeof UpdateServiceCommand === "function")
assert(typeof UpdateServiceAttributesCommand === "function")
// enums
assert(typeof CustomHealthStatus === "object");
assert(typeof FilterCondition === "object");
assert(typeof HealthCheckType === "object");
assert(typeof HealthStatus === "object");
assert(typeof HealthStatusFilter === "object");
assert(typeof NamespaceFilterName === "object");
assert(typeof NamespaceType === "object");
assert(typeof OperationFilterName === "object");
assert(typeof OperationStatus === "object");
assert(typeof OperationTargetType === "object");
assert(typeof OperationType === "object");
assert(typeof RecordType === "object");
assert(typeof RoutingPolicy === "object");
assert(typeof ServiceFilterName === "object");
assert(typeof ServiceType === "object");
assert(typeof ServiceTypeOption === "object");
// errors
assert(ServiceDiscoveryServiceException.prototype instanceof Error)
// paginators
assert(typeof paginateGetInstancesHealthStatus === "function")
assert(typeof paginateListInstances === "function")
assert(typeof paginateListNamespaces === "function")
assert(typeof paginateListOperations === "function")
assert(typeof paginateListServices === "function")
console.log(`ServiceDiscovery index test passed.`);
