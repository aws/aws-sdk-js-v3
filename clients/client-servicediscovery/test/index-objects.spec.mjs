import {
  CreateHttpNamespace$,
  CreateHttpNamespaceCommand,
  CreateHttpNamespaceRequest$,
  CreateHttpNamespaceResponse$,
  CreatePrivateDnsNamespace$,
  CreatePrivateDnsNamespaceCommand,
  CreatePrivateDnsNamespaceRequest$,
  CreatePrivateDnsNamespaceResponse$,
  CreatePublicDnsNamespace$,
  CreatePublicDnsNamespaceCommand,
  CreatePublicDnsNamespaceRequest$,
  CreatePublicDnsNamespaceResponse$,
  CreateService$,
  CreateServiceCommand,
  CreateServiceRequest$,
  CreateServiceResponse$,
  CustomHealthNotFound,
  CustomHealthNotFound$,
  CustomHealthStatus,
  DeleteNamespace$,
  DeleteNamespaceCommand,
  DeleteNamespaceRequest$,
  DeleteNamespaceResponse$,
  DeleteService$,
  DeleteServiceAttributes$,
  DeleteServiceAttributesCommand,
  DeleteServiceAttributesRequest$,
  DeleteServiceAttributesResponse$,
  DeleteServiceCommand,
  DeleteServiceRequest$,
  DeleteServiceResponse$,
  DeregisterInstance$,
  DeregisterInstanceCommand,
  DeregisterInstanceRequest$,
  DeregisterInstanceResponse$,
  DiscoverInstances$,
  DiscoverInstancesCommand,
  DiscoverInstancesRequest$,
  DiscoverInstancesResponse$,
  DiscoverInstancesRevision$,
  DiscoverInstancesRevisionCommand,
  DiscoverInstancesRevisionRequest$,
  DiscoverInstancesRevisionResponse$,
  DnsConfig$,
  DnsConfigChange$,
  DnsProperties$,
  DnsRecord$,
  DuplicateRequest,
  DuplicateRequest$,
  FilterCondition,
  GetInstance$,
  GetInstanceCommand,
  GetInstanceRequest$,
  GetInstanceResponse$,
  GetInstancesHealthStatus$,
  GetInstancesHealthStatusCommand,
  GetInstancesHealthStatusRequest$,
  GetInstancesHealthStatusResponse$,
  GetNamespace$,
  GetNamespaceCommand,
  GetNamespaceRequest$,
  GetNamespaceResponse$,
  GetOperation$,
  GetOperationCommand,
  GetOperationRequest$,
  GetOperationResponse$,
  GetService$,
  GetServiceAttributes$,
  GetServiceAttributesCommand,
  GetServiceAttributesRequest$,
  GetServiceAttributesResponse$,
  GetServiceCommand,
  GetServiceRequest$,
  GetServiceResponse$,
  HealthCheckConfig$,
  HealthCheckCustomConfig$,
  HealthCheckType,
  HealthStatus,
  HealthStatusFilter,
  HttpInstanceSummary$,
  HttpNamespaceChange$,
  HttpProperties$,
  Instance$,
  InstanceNotFound,
  InstanceNotFound$,
  InstanceSummary$,
  InvalidInput,
  InvalidInput$,
  ListInstances$,
  ListInstancesCommand,
  ListInstancesRequest$,
  ListInstancesResponse$,
  ListNamespaces$,
  ListNamespacesCommand,
  ListNamespacesRequest$,
  ListNamespacesResponse$,
  ListOperations$,
  ListOperationsCommand,
  ListOperationsRequest$,
  ListOperationsResponse$,
  ListServices$,
  ListServicesCommand,
  ListServicesRequest$,
  ListServicesResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  Namespace$,
  NamespaceAlreadyExists,
  NamespaceAlreadyExists$,
  NamespaceFilter$,
  NamespaceFilterName,
  NamespaceNotFound,
  NamespaceNotFound$,
  NamespaceProperties$,
  NamespaceSummary$,
  NamespaceType,
  Operation$,
  OperationFilter$,
  OperationFilterName,
  OperationNotFound,
  OperationNotFound$,
  OperationStatus,
  OperationSummary$,
  OperationTargetType,
  OperationType,
  paginateGetInstancesHealthStatus,
  paginateListInstances,
  paginateListNamespaces,
  paginateListOperations,
  paginateListServices,
  PrivateDnsNamespaceChange$,
  PrivateDnsNamespaceProperties$,
  PrivateDnsNamespacePropertiesChange$,
  PrivateDnsPropertiesMutable$,
  PrivateDnsPropertiesMutableChange$,
  PublicDnsNamespaceChange$,
  PublicDnsNamespaceProperties$,
  PublicDnsNamespacePropertiesChange$,
  PublicDnsPropertiesMutable$,
  PublicDnsPropertiesMutableChange$,
  RecordType,
  RegisterInstance$,
  RegisterInstanceCommand,
  RegisterInstanceRequest$,
  RegisterInstanceResponse$,
  RequestLimitExceeded,
  RequestLimitExceeded$,
  ResourceInUse,
  ResourceInUse$,
  ResourceLimitExceeded,
  ResourceLimitExceeded$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  RoutingPolicy,
  Service$,
  ServiceAlreadyExists,
  ServiceAlreadyExists$,
  ServiceAttributes$,
  ServiceAttributesLimitExceededException,
  ServiceAttributesLimitExceededException$,
  ServiceChange$,
  ServiceDiscovery,
  ServiceDiscoveryClient,
  ServiceDiscoveryServiceException,
  ServiceFilter$,
  ServiceFilterName,
  ServiceNotFound,
  ServiceNotFound$,
  ServiceSummary$,
  ServiceType,
  ServiceTypeOption,
  SOA$,
  SOAChange$,
  Tag$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  TooManyTagsException,
  TooManyTagsException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateHttpNamespace$,
  UpdateHttpNamespaceCommand,
  UpdateHttpNamespaceRequest$,
  UpdateHttpNamespaceResponse$,
  UpdateInstanceCustomHealthStatus$,
  UpdateInstanceCustomHealthStatusCommand,
  UpdateInstanceCustomHealthStatusRequest$,
  UpdatePrivateDnsNamespace$,
  UpdatePrivateDnsNamespaceCommand,
  UpdatePrivateDnsNamespaceRequest$,
  UpdatePrivateDnsNamespaceResponse$,
  UpdatePublicDnsNamespace$,
  UpdatePublicDnsNamespaceCommand,
  UpdatePublicDnsNamespaceRequest$,
  UpdatePublicDnsNamespaceResponse$,
  UpdateService$,
  UpdateServiceAttributes$,
  UpdateServiceAttributesCommand,
  UpdateServiceAttributesRequest$,
  UpdateServiceAttributesResponse$,
  UpdateServiceCommand,
  UpdateServiceRequest$,
  UpdateServiceResponse$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof ServiceDiscoveryClient === "function");
assert(typeof ServiceDiscovery === "function");
// commands
assert(typeof CreateHttpNamespaceCommand === "function");
assert(typeof CreateHttpNamespace$ === "object");
assert(typeof CreatePrivateDnsNamespaceCommand === "function");
assert(typeof CreatePrivateDnsNamespace$ === "object");
assert(typeof CreatePublicDnsNamespaceCommand === "function");
assert(typeof CreatePublicDnsNamespace$ === "object");
assert(typeof CreateServiceCommand === "function");
assert(typeof CreateService$ === "object");
assert(typeof DeleteNamespaceCommand === "function");
assert(typeof DeleteNamespace$ === "object");
assert(typeof DeleteServiceCommand === "function");
assert(typeof DeleteService$ === "object");
assert(typeof DeleteServiceAttributesCommand === "function");
assert(typeof DeleteServiceAttributes$ === "object");
assert(typeof DeregisterInstanceCommand === "function");
assert(typeof DeregisterInstance$ === "object");
assert(typeof DiscoverInstancesCommand === "function");
assert(typeof DiscoverInstances$ === "object");
assert(typeof DiscoverInstancesRevisionCommand === "function");
assert(typeof DiscoverInstancesRevision$ === "object");
assert(typeof GetInstanceCommand === "function");
assert(typeof GetInstance$ === "object");
assert(typeof GetInstancesHealthStatusCommand === "function");
assert(typeof GetInstancesHealthStatus$ === "object");
assert(typeof GetNamespaceCommand === "function");
assert(typeof GetNamespace$ === "object");
assert(typeof GetOperationCommand === "function");
assert(typeof GetOperation$ === "object");
assert(typeof GetServiceCommand === "function");
assert(typeof GetService$ === "object");
assert(typeof GetServiceAttributesCommand === "function");
assert(typeof GetServiceAttributes$ === "object");
assert(typeof ListInstancesCommand === "function");
assert(typeof ListInstances$ === "object");
assert(typeof ListNamespacesCommand === "function");
assert(typeof ListNamespaces$ === "object");
assert(typeof ListOperationsCommand === "function");
assert(typeof ListOperations$ === "object");
assert(typeof ListServicesCommand === "function");
assert(typeof ListServices$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof RegisterInstanceCommand === "function");
assert(typeof RegisterInstance$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateHttpNamespaceCommand === "function");
assert(typeof UpdateHttpNamespace$ === "object");
assert(typeof UpdateInstanceCustomHealthStatusCommand === "function");
assert(typeof UpdateInstanceCustomHealthStatus$ === "object");
assert(typeof UpdatePrivateDnsNamespaceCommand === "function");
assert(typeof UpdatePrivateDnsNamespace$ === "object");
assert(typeof UpdatePublicDnsNamespaceCommand === "function");
assert(typeof UpdatePublicDnsNamespace$ === "object");
assert(typeof UpdateServiceCommand === "function");
assert(typeof UpdateService$ === "object");
assert(typeof UpdateServiceAttributesCommand === "function");
assert(typeof UpdateServiceAttributes$ === "object");
// structural schemas
assert(typeof CreateHttpNamespaceRequest$ === "object");
assert(typeof CreateHttpNamespaceResponse$ === "object");
assert(typeof CreatePrivateDnsNamespaceRequest$ === "object");
assert(typeof CreatePrivateDnsNamespaceResponse$ === "object");
assert(typeof CreatePublicDnsNamespaceRequest$ === "object");
assert(typeof CreatePublicDnsNamespaceResponse$ === "object");
assert(typeof CreateServiceRequest$ === "object");
assert(typeof CreateServiceResponse$ === "object");
assert(typeof DeleteNamespaceRequest$ === "object");
assert(typeof DeleteNamespaceResponse$ === "object");
assert(typeof DeleteServiceAttributesRequest$ === "object");
assert(typeof DeleteServiceAttributesResponse$ === "object");
assert(typeof DeleteServiceRequest$ === "object");
assert(typeof DeleteServiceResponse$ === "object");
assert(typeof DeregisterInstanceRequest$ === "object");
assert(typeof DeregisterInstanceResponse$ === "object");
assert(typeof DiscoverInstancesRequest$ === "object");
assert(typeof DiscoverInstancesResponse$ === "object");
assert(typeof DiscoverInstancesRevisionRequest$ === "object");
assert(typeof DiscoverInstancesRevisionResponse$ === "object");
assert(typeof DnsConfig$ === "object");
assert(typeof DnsConfigChange$ === "object");
assert(typeof DnsProperties$ === "object");
assert(typeof DnsRecord$ === "object");
assert(typeof GetInstanceRequest$ === "object");
assert(typeof GetInstanceResponse$ === "object");
assert(typeof GetInstancesHealthStatusRequest$ === "object");
assert(typeof GetInstancesHealthStatusResponse$ === "object");
assert(typeof GetNamespaceRequest$ === "object");
assert(typeof GetNamespaceResponse$ === "object");
assert(typeof GetOperationRequest$ === "object");
assert(typeof GetOperationResponse$ === "object");
assert(typeof GetServiceAttributesRequest$ === "object");
assert(typeof GetServiceAttributesResponse$ === "object");
assert(typeof GetServiceRequest$ === "object");
assert(typeof GetServiceResponse$ === "object");
assert(typeof HealthCheckConfig$ === "object");
assert(typeof HealthCheckCustomConfig$ === "object");
assert(typeof HttpInstanceSummary$ === "object");
assert(typeof HttpNamespaceChange$ === "object");
assert(typeof HttpProperties$ === "object");
assert(typeof Instance$ === "object");
assert(typeof InstanceSummary$ === "object");
assert(typeof ListInstancesRequest$ === "object");
assert(typeof ListInstancesResponse$ === "object");
assert(typeof ListNamespacesRequest$ === "object");
assert(typeof ListNamespacesResponse$ === "object");
assert(typeof ListOperationsRequest$ === "object");
assert(typeof ListOperationsResponse$ === "object");
assert(typeof ListServicesRequest$ === "object");
assert(typeof ListServicesResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof Namespace$ === "object");
assert(typeof NamespaceFilter$ === "object");
assert(typeof NamespaceProperties$ === "object");
assert(typeof NamespaceSummary$ === "object");
assert(typeof Operation$ === "object");
assert(typeof OperationFilter$ === "object");
assert(typeof OperationSummary$ === "object");
assert(typeof PrivateDnsNamespaceChange$ === "object");
assert(typeof PrivateDnsNamespaceProperties$ === "object");
assert(typeof PrivateDnsNamespacePropertiesChange$ === "object");
assert(typeof PrivateDnsPropertiesMutable$ === "object");
assert(typeof PrivateDnsPropertiesMutableChange$ === "object");
assert(typeof PublicDnsNamespaceChange$ === "object");
assert(typeof PublicDnsNamespaceProperties$ === "object");
assert(typeof PublicDnsNamespacePropertiesChange$ === "object");
assert(typeof PublicDnsPropertiesMutable$ === "object");
assert(typeof PublicDnsPropertiesMutableChange$ === "object");
assert(typeof RegisterInstanceRequest$ === "object");
assert(typeof RegisterInstanceResponse$ === "object");
assert(typeof Service$ === "object");
assert(typeof ServiceAttributes$ === "object");
assert(typeof ServiceChange$ === "object");
assert(typeof ServiceFilter$ === "object");
assert(typeof ServiceSummary$ === "object");
assert(typeof SOA$ === "object");
assert(typeof SOAChange$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateHttpNamespaceRequest$ === "object");
assert(typeof UpdateHttpNamespaceResponse$ === "object");
assert(typeof UpdateInstanceCustomHealthStatusRequest$ === "object");
assert(typeof UpdatePrivateDnsNamespaceRequest$ === "object");
assert(typeof UpdatePrivateDnsNamespaceResponse$ === "object");
assert(typeof UpdatePublicDnsNamespaceRequest$ === "object");
assert(typeof UpdatePublicDnsNamespaceResponse$ === "object");
assert(typeof UpdateServiceAttributesRequest$ === "object");
assert(typeof UpdateServiceAttributesResponse$ === "object");
assert(typeof UpdateServiceRequest$ === "object");
assert(typeof UpdateServiceResponse$ === "object");
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
assert(typeof CustomHealthNotFound$ === "object");
assert(DuplicateRequest.prototype instanceof ServiceDiscoveryServiceException);
assert(typeof DuplicateRequest$ === "object");
assert(InstanceNotFound.prototype instanceof ServiceDiscoveryServiceException);
assert(typeof InstanceNotFound$ === "object");
assert(InvalidInput.prototype instanceof ServiceDiscoveryServiceException);
assert(typeof InvalidInput$ === "object");
assert(NamespaceAlreadyExists.prototype instanceof ServiceDiscoveryServiceException);
assert(typeof NamespaceAlreadyExists$ === "object");
assert(NamespaceNotFound.prototype instanceof ServiceDiscoveryServiceException);
assert(typeof NamespaceNotFound$ === "object");
assert(OperationNotFound.prototype instanceof ServiceDiscoveryServiceException);
assert(typeof OperationNotFound$ === "object");
assert(RequestLimitExceeded.prototype instanceof ServiceDiscoveryServiceException);
assert(typeof RequestLimitExceeded$ === "object");
assert(ResourceInUse.prototype instanceof ServiceDiscoveryServiceException);
assert(typeof ResourceInUse$ === "object");
assert(ResourceLimitExceeded.prototype instanceof ServiceDiscoveryServiceException);
assert(typeof ResourceLimitExceeded$ === "object");
assert(ResourceNotFoundException.prototype instanceof ServiceDiscoveryServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceAlreadyExists.prototype instanceof ServiceDiscoveryServiceException);
assert(typeof ServiceAlreadyExists$ === "object");
assert(ServiceAttributesLimitExceededException.prototype instanceof ServiceDiscoveryServiceException);
assert(typeof ServiceAttributesLimitExceededException$ === "object");
assert(ServiceNotFound.prototype instanceof ServiceDiscoveryServiceException);
assert(typeof ServiceNotFound$ === "object");
assert(TooManyTagsException.prototype instanceof ServiceDiscoveryServiceException);
assert(typeof TooManyTagsException$ === "object");
assert(ServiceDiscoveryServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateGetInstancesHealthStatus === "function");
assert(typeof paginateListInstances === "function");
assert(typeof paginateListNamespaces === "function");
assert(typeof paginateListOperations === "function");
assert(typeof paginateListServices === "function");
console.log(`ServiceDiscovery index test passed.`);
