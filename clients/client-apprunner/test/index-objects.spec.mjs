import {
  AppRunner,
  AppRunnerClient,
  AppRunnerServiceException,
  AssociateCustomDomainCommand,
  AutoScalingConfigurationStatus,
  CertificateValidationRecordStatus,
  ConfigurationSource,
  ConnectionStatus,
  CreateAutoScalingConfigurationCommand,
  CreateConnectionCommand,
  CreateObservabilityConfigurationCommand,
  CreateServiceCommand,
  CreateVpcConnectorCommand,
  CreateVpcIngressConnectionCommand,
  CustomDomainAssociationStatus,
  DeleteAutoScalingConfigurationCommand,
  DeleteConnectionCommand,
  DeleteObservabilityConfigurationCommand,
  DeleteServiceCommand,
  DeleteVpcConnectorCommand,
  DeleteVpcIngressConnectionCommand,
  DescribeAutoScalingConfigurationCommand,
  DescribeCustomDomainsCommand,
  DescribeObservabilityConfigurationCommand,
  DescribeServiceCommand,
  DescribeVpcConnectorCommand,
  DescribeVpcIngressConnectionCommand,
  DisassociateCustomDomainCommand,
  EgressType,
  HealthCheckProtocol,
  ImageRepositoryType,
  IpAddressType,
  ListAutoScalingConfigurationsCommand,
  ListConnectionsCommand,
  ListObservabilityConfigurationsCommand,
  ListOperationsCommand,
  ListServicesCommand,
  ListServicesForAutoScalingConfigurationCommand,
  ListTagsForResourceCommand,
  ListVpcConnectorsCommand,
  ListVpcIngressConnectionsCommand,
  ObservabilityConfigurationStatus,
  OperationStatus,
  OperationType,
  PauseServiceCommand,
  ProviderType,
  ResumeServiceCommand,
  Runtime,
  ServiceStatus,
  SourceCodeVersionType,
  StartDeploymentCommand,
  TagResourceCommand,
  TracingVendor,
  UntagResourceCommand,
  UpdateDefaultAutoScalingConfigurationCommand,
  UpdateServiceCommand,
  UpdateVpcIngressConnectionCommand,
  VpcConnectorStatus,
  VpcIngressConnectionStatus,
  paginateDescribeCustomDomains,
  paginateListAutoScalingConfigurations,
  paginateListConnections,
  paginateListObservabilityConfigurations,
  paginateListOperations,
  paginateListServices,
  paginateListServicesForAutoScalingConfiguration,
  paginateListVpcConnectors,
  paginateListVpcIngressConnections,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof AppRunnerClient === "function")
assert(typeof AppRunner === "function")
// commands
assert(typeof AssociateCustomDomainCommand === "function")
assert(typeof CreateAutoScalingConfigurationCommand === "function")
assert(typeof CreateConnectionCommand === "function")
assert(typeof CreateObservabilityConfigurationCommand === "function")
assert(typeof CreateServiceCommand === "function")
assert(typeof CreateVpcConnectorCommand === "function")
assert(typeof CreateVpcIngressConnectionCommand === "function")
assert(typeof DeleteAutoScalingConfigurationCommand === "function")
assert(typeof DeleteConnectionCommand === "function")
assert(typeof DeleteObservabilityConfigurationCommand === "function")
assert(typeof DeleteServiceCommand === "function")
assert(typeof DeleteVpcConnectorCommand === "function")
assert(typeof DeleteVpcIngressConnectionCommand === "function")
assert(typeof DescribeAutoScalingConfigurationCommand === "function")
assert(typeof DescribeCustomDomainsCommand === "function")
assert(typeof DescribeObservabilityConfigurationCommand === "function")
assert(typeof DescribeServiceCommand === "function")
assert(typeof DescribeVpcConnectorCommand === "function")
assert(typeof DescribeVpcIngressConnectionCommand === "function")
assert(typeof DisassociateCustomDomainCommand === "function")
assert(typeof ListAutoScalingConfigurationsCommand === "function")
assert(typeof ListConnectionsCommand === "function")
assert(typeof ListObservabilityConfigurationsCommand === "function")
assert(typeof ListOperationsCommand === "function")
assert(typeof ListServicesCommand === "function")
assert(typeof ListServicesForAutoScalingConfigurationCommand === "function")
assert(typeof ListTagsForResourceCommand === "function")
assert(typeof ListVpcConnectorsCommand === "function")
assert(typeof ListVpcIngressConnectionsCommand === "function")
assert(typeof PauseServiceCommand === "function")
assert(typeof ResumeServiceCommand === "function")
assert(typeof StartDeploymentCommand === "function")
assert(typeof TagResourceCommand === "function")
assert(typeof UntagResourceCommand === "function")
assert(typeof UpdateDefaultAutoScalingConfigurationCommand === "function")
assert(typeof UpdateServiceCommand === "function")
assert(typeof UpdateVpcIngressConnectionCommand === "function")
// enums
assert(typeof AutoScalingConfigurationStatus === "object");
assert(typeof CertificateValidationRecordStatus === "object");
assert(typeof ConfigurationSource === "object");
assert(typeof ConnectionStatus === "object");
assert(typeof CustomDomainAssociationStatus === "object");
assert(typeof EgressType === "object");
assert(typeof HealthCheckProtocol === "object");
assert(typeof ImageRepositoryType === "object");
assert(typeof IpAddressType === "object");
assert(typeof ObservabilityConfigurationStatus === "object");
assert(typeof OperationStatus === "object");
assert(typeof OperationType === "object");
assert(typeof ProviderType === "object");
assert(typeof Runtime === "object");
assert(typeof ServiceStatus === "object");
assert(typeof SourceCodeVersionType === "object");
assert(typeof TracingVendor === "object");
assert(typeof VpcConnectorStatus === "object");
assert(typeof VpcIngressConnectionStatus === "object");
// errors
assert(AppRunnerServiceException.prototype instanceof Error)
// paginators
assert(typeof paginateDescribeCustomDomains === "function")
assert(typeof paginateListAutoScalingConfigurations === "function")
assert(typeof paginateListConnections === "function")
assert(typeof paginateListObservabilityConfigurations === "function")
assert(typeof paginateListOperations === "function")
assert(typeof paginateListServices === "function")
assert(typeof paginateListServicesForAutoScalingConfiguration === "function")
assert(typeof paginateListVpcConnectors === "function")
assert(typeof paginateListVpcIngressConnections === "function")
console.log(`AppRunner index test passed.`);
