import {
  AppRunner,
  AppRunnerClient,
  AppRunnerServiceException,
  AssociateCustomDomain$,
  AssociateCustomDomainCommand,
  AssociateCustomDomainRequest$,
  AssociateCustomDomainResponse$,
  AuthenticationConfiguration$,
  AutoScalingConfiguration$,
  AutoScalingConfigurationStatus,
  AutoScalingConfigurationSummary$,
  CertificateValidationRecord$,
  CertificateValidationRecordStatus,
  CodeConfiguration$,
  CodeConfigurationValues$,
  CodeRepository$,
  ConfigurationSource,
  Connection$,
  ConnectionStatus,
  ConnectionSummary$,
  CreateAutoScalingConfiguration$,
  CreateAutoScalingConfigurationCommand,
  CreateAutoScalingConfigurationRequest$,
  CreateAutoScalingConfigurationResponse$,
  CreateConnection$,
  CreateConnectionCommand,
  CreateConnectionRequest$,
  CreateConnectionResponse$,
  CreateObservabilityConfiguration$,
  CreateObservabilityConfigurationCommand,
  CreateObservabilityConfigurationRequest$,
  CreateObservabilityConfigurationResponse$,
  CreateService$,
  CreateServiceCommand,
  CreateServiceRequest$,
  CreateServiceResponse$,
  CreateVpcConnector$,
  CreateVpcConnectorCommand,
  CreateVpcConnectorRequest$,
  CreateVpcConnectorResponse$,
  CreateVpcIngressConnection$,
  CreateVpcIngressConnectionCommand,
  CreateVpcIngressConnectionRequest$,
  CreateVpcIngressConnectionResponse$,
  CustomDomain$,
  CustomDomainAssociationStatus,
  DeleteAutoScalingConfiguration$,
  DeleteAutoScalingConfigurationCommand,
  DeleteAutoScalingConfigurationRequest$,
  DeleteAutoScalingConfigurationResponse$,
  DeleteConnection$,
  DeleteConnectionCommand,
  DeleteConnectionRequest$,
  DeleteConnectionResponse$,
  DeleteObservabilityConfiguration$,
  DeleteObservabilityConfigurationCommand,
  DeleteObservabilityConfigurationRequest$,
  DeleteObservabilityConfigurationResponse$,
  DeleteService$,
  DeleteServiceCommand,
  DeleteServiceRequest$,
  DeleteServiceResponse$,
  DeleteVpcConnector$,
  DeleteVpcConnectorCommand,
  DeleteVpcConnectorRequest$,
  DeleteVpcConnectorResponse$,
  DeleteVpcIngressConnection$,
  DeleteVpcIngressConnectionCommand,
  DeleteVpcIngressConnectionRequest$,
  DeleteVpcIngressConnectionResponse$,
  DescribeAutoScalingConfiguration$,
  DescribeAutoScalingConfigurationCommand,
  DescribeAutoScalingConfigurationRequest$,
  DescribeAutoScalingConfigurationResponse$,
  DescribeCustomDomains$,
  DescribeCustomDomainsCommand,
  DescribeCustomDomainsRequest$,
  DescribeCustomDomainsResponse$,
  DescribeObservabilityConfiguration$,
  DescribeObservabilityConfigurationCommand,
  DescribeObservabilityConfigurationRequest$,
  DescribeObservabilityConfigurationResponse$,
  DescribeService$,
  DescribeServiceCommand,
  DescribeServiceRequest$,
  DescribeServiceResponse$,
  DescribeVpcConnector$,
  DescribeVpcConnectorCommand,
  DescribeVpcConnectorRequest$,
  DescribeVpcConnectorResponse$,
  DescribeVpcIngressConnection$,
  DescribeVpcIngressConnectionCommand,
  DescribeVpcIngressConnectionRequest$,
  DescribeVpcIngressConnectionResponse$,
  DisassociateCustomDomain$,
  DisassociateCustomDomainCommand,
  DisassociateCustomDomainRequest$,
  DisassociateCustomDomainResponse$,
  EgressConfiguration$,
  EgressType,
  EncryptionConfiguration$,
  HealthCheckConfiguration$,
  HealthCheckProtocol,
  ImageConfiguration$,
  ImageRepository$,
  ImageRepositoryType,
  IngressConfiguration$,
  IngressVpcConfiguration$,
  InstanceConfiguration$,
  InternalServiceErrorException,
  InternalServiceErrorException$,
  InvalidRequestException,
  InvalidRequestException$,
  InvalidStateException,
  InvalidStateException$,
  IpAddressType,
  ListAutoScalingConfigurations$,
  ListAutoScalingConfigurationsCommand,
  ListAutoScalingConfigurationsRequest$,
  ListAutoScalingConfigurationsResponse$,
  ListConnections$,
  ListConnectionsCommand,
  ListConnectionsRequest$,
  ListConnectionsResponse$,
  ListObservabilityConfigurations$,
  ListObservabilityConfigurationsCommand,
  ListObservabilityConfigurationsRequest$,
  ListObservabilityConfigurationsResponse$,
  ListOperations$,
  ListOperationsCommand,
  ListOperationsRequest$,
  ListOperationsResponse$,
  ListServices$,
  ListServicesCommand,
  ListServicesForAutoScalingConfiguration$,
  ListServicesForAutoScalingConfigurationCommand,
  ListServicesForAutoScalingConfigurationRequest$,
  ListServicesForAutoScalingConfigurationResponse$,
  ListServicesRequest$,
  ListServicesResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  ListVpcConnectors$,
  ListVpcConnectorsCommand,
  ListVpcConnectorsRequest$,
  ListVpcConnectorsResponse$,
  ListVpcIngressConnections$,
  ListVpcIngressConnectionsCommand,
  ListVpcIngressConnectionsFilter$,
  ListVpcIngressConnectionsRequest$,
  ListVpcIngressConnectionsResponse$,
  NetworkConfiguration$,
  ObservabilityConfiguration$,
  ObservabilityConfigurationStatus,
  ObservabilityConfigurationSummary$,
  OperationStatus,
  OperationSummary$,
  OperationType,
  paginateDescribeCustomDomains,
  paginateListAutoScalingConfigurations,
  paginateListConnections,
  paginateListObservabilityConfigurations,
  paginateListOperations,
  paginateListServices,
  paginateListServicesForAutoScalingConfiguration,
  paginateListVpcConnectors,
  paginateListVpcIngressConnections,
  PauseService$,
  PauseServiceCommand,
  PauseServiceRequest$,
  PauseServiceResponse$,
  ProviderType,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResumeService$,
  ResumeServiceCommand,
  ResumeServiceRequest$,
  ResumeServiceResponse$,
  Runtime,
  Service$,
  ServiceObservabilityConfiguration$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  ServiceStatus,
  ServiceSummary$,
  SourceCodeVersion$,
  SourceCodeVersionType,
  SourceConfiguration$,
  StartDeployment$,
  StartDeploymentCommand,
  StartDeploymentRequest$,
  StartDeploymentResponse$,
  Tag$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  TraceConfiguration$,
  TracingVendor,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateDefaultAutoScalingConfiguration$,
  UpdateDefaultAutoScalingConfigurationCommand,
  UpdateDefaultAutoScalingConfigurationRequest$,
  UpdateDefaultAutoScalingConfigurationResponse$,
  UpdateService$,
  UpdateServiceCommand,
  UpdateServiceRequest$,
  UpdateServiceResponse$,
  UpdateVpcIngressConnection$,
  UpdateVpcIngressConnectionCommand,
  UpdateVpcIngressConnectionRequest$,
  UpdateVpcIngressConnectionResponse$,
  VpcConnector$,
  VpcConnectorStatus,
  VpcDNSTarget$,
  VpcIngressConnection$,
  VpcIngressConnectionStatus,
  VpcIngressConnectionSummary$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof AppRunnerClient === "function");
assert(typeof AppRunner === "function");
// commands
assert(typeof AssociateCustomDomainCommand === "function");
assert(typeof AssociateCustomDomain$ === "object");
assert(typeof CreateAutoScalingConfigurationCommand === "function");
assert(typeof CreateAutoScalingConfiguration$ === "object");
assert(typeof CreateConnectionCommand === "function");
assert(typeof CreateConnection$ === "object");
assert(typeof CreateObservabilityConfigurationCommand === "function");
assert(typeof CreateObservabilityConfiguration$ === "object");
assert(typeof CreateServiceCommand === "function");
assert(typeof CreateService$ === "object");
assert(typeof CreateVpcConnectorCommand === "function");
assert(typeof CreateVpcConnector$ === "object");
assert(typeof CreateVpcIngressConnectionCommand === "function");
assert(typeof CreateVpcIngressConnection$ === "object");
assert(typeof DeleteAutoScalingConfigurationCommand === "function");
assert(typeof DeleteAutoScalingConfiguration$ === "object");
assert(typeof DeleteConnectionCommand === "function");
assert(typeof DeleteConnection$ === "object");
assert(typeof DeleteObservabilityConfigurationCommand === "function");
assert(typeof DeleteObservabilityConfiguration$ === "object");
assert(typeof DeleteServiceCommand === "function");
assert(typeof DeleteService$ === "object");
assert(typeof DeleteVpcConnectorCommand === "function");
assert(typeof DeleteVpcConnector$ === "object");
assert(typeof DeleteVpcIngressConnectionCommand === "function");
assert(typeof DeleteVpcIngressConnection$ === "object");
assert(typeof DescribeAutoScalingConfigurationCommand === "function");
assert(typeof DescribeAutoScalingConfiguration$ === "object");
assert(typeof DescribeCustomDomainsCommand === "function");
assert(typeof DescribeCustomDomains$ === "object");
assert(typeof DescribeObservabilityConfigurationCommand === "function");
assert(typeof DescribeObservabilityConfiguration$ === "object");
assert(typeof DescribeServiceCommand === "function");
assert(typeof DescribeService$ === "object");
assert(typeof DescribeVpcConnectorCommand === "function");
assert(typeof DescribeVpcConnector$ === "object");
assert(typeof DescribeVpcIngressConnectionCommand === "function");
assert(typeof DescribeVpcIngressConnection$ === "object");
assert(typeof DisassociateCustomDomainCommand === "function");
assert(typeof DisassociateCustomDomain$ === "object");
assert(typeof ListAutoScalingConfigurationsCommand === "function");
assert(typeof ListAutoScalingConfigurations$ === "object");
assert(typeof ListConnectionsCommand === "function");
assert(typeof ListConnections$ === "object");
assert(typeof ListObservabilityConfigurationsCommand === "function");
assert(typeof ListObservabilityConfigurations$ === "object");
assert(typeof ListOperationsCommand === "function");
assert(typeof ListOperations$ === "object");
assert(typeof ListServicesCommand === "function");
assert(typeof ListServices$ === "object");
assert(typeof ListServicesForAutoScalingConfigurationCommand === "function");
assert(typeof ListServicesForAutoScalingConfiguration$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ListVpcConnectorsCommand === "function");
assert(typeof ListVpcConnectors$ === "object");
assert(typeof ListVpcIngressConnectionsCommand === "function");
assert(typeof ListVpcIngressConnections$ === "object");
assert(typeof PauseServiceCommand === "function");
assert(typeof PauseService$ === "object");
assert(typeof ResumeServiceCommand === "function");
assert(typeof ResumeService$ === "object");
assert(typeof StartDeploymentCommand === "function");
assert(typeof StartDeployment$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateDefaultAutoScalingConfigurationCommand === "function");
assert(typeof UpdateDefaultAutoScalingConfiguration$ === "object");
assert(typeof UpdateServiceCommand === "function");
assert(typeof UpdateService$ === "object");
assert(typeof UpdateVpcIngressConnectionCommand === "function");
assert(typeof UpdateVpcIngressConnection$ === "object");
// structural schemas
assert(typeof AssociateCustomDomainRequest$ === "object");
assert(typeof AssociateCustomDomainResponse$ === "object");
assert(typeof AuthenticationConfiguration$ === "object");
assert(typeof AutoScalingConfiguration$ === "object");
assert(typeof AutoScalingConfigurationSummary$ === "object");
assert(typeof CertificateValidationRecord$ === "object");
assert(typeof CodeConfiguration$ === "object");
assert(typeof CodeConfigurationValues$ === "object");
assert(typeof CodeRepository$ === "object");
assert(typeof Connection$ === "object");
assert(typeof ConnectionSummary$ === "object");
assert(typeof CreateAutoScalingConfigurationRequest$ === "object");
assert(typeof CreateAutoScalingConfigurationResponse$ === "object");
assert(typeof CreateConnectionRequest$ === "object");
assert(typeof CreateConnectionResponse$ === "object");
assert(typeof CreateObservabilityConfigurationRequest$ === "object");
assert(typeof CreateObservabilityConfigurationResponse$ === "object");
assert(typeof CreateServiceRequest$ === "object");
assert(typeof CreateServiceResponse$ === "object");
assert(typeof CreateVpcConnectorRequest$ === "object");
assert(typeof CreateVpcConnectorResponse$ === "object");
assert(typeof CreateVpcIngressConnectionRequest$ === "object");
assert(typeof CreateVpcIngressConnectionResponse$ === "object");
assert(typeof CustomDomain$ === "object");
assert(typeof DeleteAutoScalingConfigurationRequest$ === "object");
assert(typeof DeleteAutoScalingConfigurationResponse$ === "object");
assert(typeof DeleteConnectionRequest$ === "object");
assert(typeof DeleteConnectionResponse$ === "object");
assert(typeof DeleteObservabilityConfigurationRequest$ === "object");
assert(typeof DeleteObservabilityConfigurationResponse$ === "object");
assert(typeof DeleteServiceRequest$ === "object");
assert(typeof DeleteServiceResponse$ === "object");
assert(typeof DeleteVpcConnectorRequest$ === "object");
assert(typeof DeleteVpcConnectorResponse$ === "object");
assert(typeof DeleteVpcIngressConnectionRequest$ === "object");
assert(typeof DeleteVpcIngressConnectionResponse$ === "object");
assert(typeof DescribeAutoScalingConfigurationRequest$ === "object");
assert(typeof DescribeAutoScalingConfigurationResponse$ === "object");
assert(typeof DescribeCustomDomainsRequest$ === "object");
assert(typeof DescribeCustomDomainsResponse$ === "object");
assert(typeof DescribeObservabilityConfigurationRequest$ === "object");
assert(typeof DescribeObservabilityConfigurationResponse$ === "object");
assert(typeof DescribeServiceRequest$ === "object");
assert(typeof DescribeServiceResponse$ === "object");
assert(typeof DescribeVpcConnectorRequest$ === "object");
assert(typeof DescribeVpcConnectorResponse$ === "object");
assert(typeof DescribeVpcIngressConnectionRequest$ === "object");
assert(typeof DescribeVpcIngressConnectionResponse$ === "object");
assert(typeof DisassociateCustomDomainRequest$ === "object");
assert(typeof DisassociateCustomDomainResponse$ === "object");
assert(typeof EgressConfiguration$ === "object");
assert(typeof EncryptionConfiguration$ === "object");
assert(typeof HealthCheckConfiguration$ === "object");
assert(typeof ImageConfiguration$ === "object");
assert(typeof ImageRepository$ === "object");
assert(typeof IngressConfiguration$ === "object");
assert(typeof IngressVpcConfiguration$ === "object");
assert(typeof InstanceConfiguration$ === "object");
assert(typeof ListAutoScalingConfigurationsRequest$ === "object");
assert(typeof ListAutoScalingConfigurationsResponse$ === "object");
assert(typeof ListConnectionsRequest$ === "object");
assert(typeof ListConnectionsResponse$ === "object");
assert(typeof ListObservabilityConfigurationsRequest$ === "object");
assert(typeof ListObservabilityConfigurationsResponse$ === "object");
assert(typeof ListOperationsRequest$ === "object");
assert(typeof ListOperationsResponse$ === "object");
assert(typeof ListServicesForAutoScalingConfigurationRequest$ === "object");
assert(typeof ListServicesForAutoScalingConfigurationResponse$ === "object");
assert(typeof ListServicesRequest$ === "object");
assert(typeof ListServicesResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof ListVpcConnectorsRequest$ === "object");
assert(typeof ListVpcConnectorsResponse$ === "object");
assert(typeof ListVpcIngressConnectionsFilter$ === "object");
assert(typeof ListVpcIngressConnectionsRequest$ === "object");
assert(typeof ListVpcIngressConnectionsResponse$ === "object");
assert(typeof NetworkConfiguration$ === "object");
assert(typeof ObservabilityConfiguration$ === "object");
assert(typeof ObservabilityConfigurationSummary$ === "object");
assert(typeof OperationSummary$ === "object");
assert(typeof PauseServiceRequest$ === "object");
assert(typeof PauseServiceResponse$ === "object");
assert(typeof ResumeServiceRequest$ === "object");
assert(typeof ResumeServiceResponse$ === "object");
assert(typeof Service$ === "object");
assert(typeof ServiceObservabilityConfiguration$ === "object");
assert(typeof ServiceSummary$ === "object");
assert(typeof SourceCodeVersion$ === "object");
assert(typeof SourceConfiguration$ === "object");
assert(typeof StartDeploymentRequest$ === "object");
assert(typeof StartDeploymentResponse$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof TraceConfiguration$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateDefaultAutoScalingConfigurationRequest$ === "object");
assert(typeof UpdateDefaultAutoScalingConfigurationResponse$ === "object");
assert(typeof UpdateServiceRequest$ === "object");
assert(typeof UpdateServiceResponse$ === "object");
assert(typeof UpdateVpcIngressConnectionRequest$ === "object");
assert(typeof UpdateVpcIngressConnectionResponse$ === "object");
assert(typeof VpcConnector$ === "object");
assert(typeof VpcDNSTarget$ === "object");
assert(typeof VpcIngressConnection$ === "object");
assert(typeof VpcIngressConnectionSummary$ === "object");
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
assert(InternalServiceErrorException.prototype instanceof AppRunnerServiceException);
assert(typeof InternalServiceErrorException$ === "object");
assert(InvalidRequestException.prototype instanceof AppRunnerServiceException);
assert(typeof InvalidRequestException$ === "object");
assert(InvalidStateException.prototype instanceof AppRunnerServiceException);
assert(typeof InvalidStateException$ === "object");
assert(ResourceNotFoundException.prototype instanceof AppRunnerServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof AppRunnerServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(AppRunnerServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateDescribeCustomDomains === "function");
assert(typeof paginateListAutoScalingConfigurations === "function");
assert(typeof paginateListConnections === "function");
assert(typeof paginateListObservabilityConfigurations === "function");
assert(typeof paginateListOperations === "function");
assert(typeof paginateListServices === "function");
assert(typeof paginateListServicesForAutoScalingConfiguration === "function");
assert(typeof paginateListVpcConnectors === "function");
assert(typeof paginateListVpcIngressConnections === "function");
console.log(`AppRunner index test passed.`);
