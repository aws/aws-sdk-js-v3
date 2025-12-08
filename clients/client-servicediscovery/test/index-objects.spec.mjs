import {
  CreateHttpNamespaceCommand,
  CreatePrivateDnsNamespaceCommand,
  CreatePublicDnsNamespaceCommand,
  CreateServiceCommand,
  CustomHealthNotFound,
  CustomHealthStatus,
  DeleteNamespaceCommand,
  DeleteServiceAttributesCommand,
  DeleteServiceCommand,
  DeregisterInstanceCommand,
  DiscoverInstancesCommand,
  DiscoverInstancesRevisionCommand,
  DuplicateRequest,
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
  InstanceNotFound,
  InvalidInput,
  ListInstancesCommand,
  ListNamespacesCommand,
  ListOperationsCommand,
  ListServicesCommand,
  ListTagsForResourceCommand,
  NamespaceAlreadyExists,
  NamespaceFilterName,
  NamespaceNotFound,
  NamespaceType,
  OperationFilterName,
  OperationNotFound,
  OperationStatus,
  OperationTargetType,
  OperationType,
  RecordType,
  RegisterInstanceCommand,
  RequestLimitExceeded,
  ResourceInUse,
  ResourceLimitExceeded,
  ResourceNotFoundException,
  RoutingPolicy,
  ServiceAlreadyExists,
  ServiceAttributesLimitExceededException,
  ServiceDiscovery,
  ServiceDiscoveryClient,
  ServiceDiscoveryServiceException,
  ServiceFilterName,
  ServiceNotFound,
  ServiceType,
  ServiceTypeOption,
  TagResourceCommand,
  TooManyTagsException,
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
assert(typeof ServiceDiscoveryClient === "function");
assert(typeof ServiceDiscovery === "function");
// commands
assert(typeof CreateHttpNamespaceCommand === "function");
assert(typeof CreatePrivateDnsNamespaceCommand === "function");
assert(typeof CreatePublicDnsNamespaceCommand === "function");
assert(typeof CreateServiceCommand === "function");
assert(typeof DeleteNamespaceCommand === "function");
assert(typeof DeleteServiceCommand === "function");
assert(typeof DeleteServiceAttributesCommand === "function");
assert(typeof DeregisterInstanceCommand === "function");
assert(typeof DiscoverInstancesCommand === "function");
assert(typeof DiscoverInstancesRevisionCommand === "function");
assert(typeof GetInstanceCommand === "function");
assert(typeof GetInstancesHealthStatusCommand === "function");
assert(typeof GetNamespaceCommand === "function");
assert(typeof GetOperationCommand === "function");
assert(typeof GetServiceCommand === "function");
assert(typeof GetServiceAttributesCommand === "function");
assert(typeof ListInstancesCommand === "function");
assert(typeof ListNamespacesCommand === "function");
assert(typeof ListOperationsCommand === "function");
assert(typeof ListServicesCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof RegisterInstanceCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateHttpNamespaceCommand === "function");
assert(typeof UpdateInstanceCustomHealthStatusCommand === "function");
assert(typeof UpdatePrivateDnsNamespaceCommand === "function");
assert(typeof UpdatePublicDnsNamespaceCommand === "function");
assert(typeof UpdateServiceCommand === "function");
assert(typeof UpdateServiceAttributesCommand === "function");
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
assert(CustomHealthNotFound.prototype instanceof ServiceDiscoveryServiceException);
assert(DuplicateRequest.prototype instanceof ServiceDiscoveryServiceException);
assert(InstanceNotFound.prototype instanceof ServiceDiscoveryServiceException);
assert(InvalidInput.prototype instanceof ServiceDiscoveryServiceException);
assert(NamespaceAlreadyExists.prototype instanceof ServiceDiscoveryServiceException);
assert(NamespaceNotFound.prototype instanceof ServiceDiscoveryServiceException);
assert(OperationNotFound.prototype instanceof ServiceDiscoveryServiceException);
assert(RequestLimitExceeded.prototype instanceof ServiceDiscoveryServiceException);
assert(ResourceInUse.prototype instanceof ServiceDiscoveryServiceException);
assert(ResourceLimitExceeded.prototype instanceof ServiceDiscoveryServiceException);
assert(ResourceNotFoundException.prototype instanceof ServiceDiscoveryServiceException);
assert(ServiceAlreadyExists.prototype instanceof ServiceDiscoveryServiceException);
assert(ServiceAttributesLimitExceededException.prototype instanceof ServiceDiscoveryServiceException);
assert(ServiceNotFound.prototype instanceof ServiceDiscoveryServiceException);
assert(TooManyTagsException.prototype instanceof ServiceDiscoveryServiceException);
assert(ServiceDiscoveryServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateGetInstancesHealthStatus === "function");
assert(typeof paginateListInstances === "function");
assert(typeof paginateListNamespaces === "function");
assert(typeof paginateListOperations === "function");
assert(typeof paginateListServices === "function");
console.log(`ServiceDiscovery index test passed.`);
