import {
  ApacheKafkaCluster$,
  ApacheKafkaClusterDescription$,
  AutoScaling$,
  AutoScalingDescription$,
  AutoScalingUpdate$,
  BadRequestException,
  BadRequestException$,
  Capacity$,
  CapacityDescription$,
  CapacityUpdate$,
  CloudWatchLogsLogDelivery$,
  CloudWatchLogsLogDeliveryDescription$,
  ConflictException,
  ConflictException$,
  ConnectorOperationState,
  ConnectorOperationStep$,
  ConnectorOperationStepState,
  ConnectorOperationStepType,
  ConnectorOperationSummary$,
  ConnectorOperationType,
  ConnectorState,
  ConnectorSummary$,
  CreateConnector$,
  CreateConnectorCommand,
  CreateConnectorRequest$,
  CreateConnectorResponse$,
  CreateCustomPlugin$,
  CreateCustomPluginCommand,
  CreateCustomPluginRequest$,
  CreateCustomPluginResponse$,
  CreateWorkerConfiguration$,
  CreateWorkerConfigurationCommand,
  CreateWorkerConfigurationRequest$,
  CreateWorkerConfigurationResponse$,
  CustomPlugin$,
  CustomPluginContentType,
  CustomPluginDescription$,
  CustomPluginFileDescription$,
  CustomPluginLocation$,
  CustomPluginLocationDescription$,
  CustomPluginRevisionSummary$,
  CustomPluginState,
  CustomPluginSummary$,
  DeleteConnector$,
  DeleteConnectorCommand,
  DeleteConnectorRequest$,
  DeleteConnectorResponse$,
  DeleteCustomPlugin$,
  DeleteCustomPluginCommand,
  DeleteCustomPluginRequest$,
  DeleteCustomPluginResponse$,
  DeleteWorkerConfiguration$,
  DeleteWorkerConfigurationCommand,
  DeleteWorkerConfigurationRequest$,
  DeleteWorkerConfigurationResponse$,
  DescribeConnector$,
  DescribeConnectorCommand,
  DescribeConnectorOperation$,
  DescribeConnectorOperationCommand,
  DescribeConnectorOperationRequest$,
  DescribeConnectorOperationResponse$,
  DescribeConnectorRequest$,
  DescribeConnectorResponse$,
  DescribeCustomPlugin$,
  DescribeCustomPluginCommand,
  DescribeCustomPluginRequest$,
  DescribeCustomPluginResponse$,
  DescribeWorkerConfiguration$,
  DescribeWorkerConfigurationCommand,
  DescribeWorkerConfigurationRequest$,
  DescribeWorkerConfigurationResponse$,
  FirehoseLogDelivery$,
  FirehoseLogDeliveryDescription$,
  ForbiddenException,
  ForbiddenException$,
  InternalServerErrorException,
  InternalServerErrorException$,
  KafkaCluster$,
  KafkaClusterClientAuthentication$,
  KafkaClusterClientAuthenticationDescription$,
  KafkaClusterClientAuthenticationType,
  KafkaClusterDescription$,
  KafkaClusterEncryptionInTransit$,
  KafkaClusterEncryptionInTransitDescription$,
  KafkaClusterEncryptionInTransitType,
  KafkaConnect,
  KafkaConnectClient,
  KafkaConnectServiceException,
  ListConnectorOperations$,
  ListConnectorOperationsCommand,
  ListConnectorOperationsRequest$,
  ListConnectorOperationsResponse$,
  ListConnectors$,
  ListConnectorsCommand,
  ListConnectorsRequest$,
  ListConnectorsResponse$,
  ListCustomPlugins$,
  ListCustomPluginsCommand,
  ListCustomPluginsRequest$,
  ListCustomPluginsResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  ListWorkerConfigurations$,
  ListWorkerConfigurationsCommand,
  ListWorkerConfigurationsRequest$,
  ListWorkerConfigurationsResponse$,
  LogDelivery$,
  LogDeliveryDescription$,
  NetworkType,
  NotFoundException,
  NotFoundException$,
  Plugin$,
  PluginDescription$,
  ProvisionedCapacity$,
  ProvisionedCapacityDescription$,
  ProvisionedCapacityUpdate$,
  S3Location$,
  S3LocationDescription$,
  S3LogDelivery$,
  S3LogDeliveryDescription$,
  ScaleInPolicy$,
  ScaleInPolicyDescription$,
  ScaleInPolicyUpdate$,
  ScaleOutPolicy$,
  ScaleOutPolicyDescription$,
  ScaleOutPolicyUpdate$,
  ServiceUnavailableException,
  ServiceUnavailableException$,
  StateDescription$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  TooManyRequestsException,
  TooManyRequestsException$,
  UnauthorizedException,
  UnauthorizedException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateConnector$,
  UpdateConnectorCommand,
  UpdateConnectorRequest$,
  UpdateConnectorResponse$,
  Vpc$,
  VpcDescription$,
  WorkerConfiguration$,
  WorkerConfigurationDescription$,
  WorkerConfigurationRevisionDescription$,
  WorkerConfigurationRevisionSummary$,
  WorkerConfigurationState,
  WorkerConfigurationSummary$,
  WorkerLogDelivery$,
  WorkerLogDeliveryDescription$,
  WorkerSetting$,
  paginateListConnectorOperations,
  paginateListConnectors,
  paginateListCustomPlugins,
  paginateListWorkerConfigurations,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof KafkaConnectClient === "function");
assert(typeof KafkaConnect === "function");
// commands
assert(typeof CreateConnectorCommand === "function");
assert(typeof CreateConnector$ === "object");
assert(typeof CreateCustomPluginCommand === "function");
assert(typeof CreateCustomPlugin$ === "object");
assert(typeof CreateWorkerConfigurationCommand === "function");
assert(typeof CreateWorkerConfiguration$ === "object");
assert(typeof DeleteConnectorCommand === "function");
assert(typeof DeleteConnector$ === "object");
assert(typeof DeleteCustomPluginCommand === "function");
assert(typeof DeleteCustomPlugin$ === "object");
assert(typeof DeleteWorkerConfigurationCommand === "function");
assert(typeof DeleteWorkerConfiguration$ === "object");
assert(typeof DescribeConnectorCommand === "function");
assert(typeof DescribeConnector$ === "object");
assert(typeof DescribeConnectorOperationCommand === "function");
assert(typeof DescribeConnectorOperation$ === "object");
assert(typeof DescribeCustomPluginCommand === "function");
assert(typeof DescribeCustomPlugin$ === "object");
assert(typeof DescribeWorkerConfigurationCommand === "function");
assert(typeof DescribeWorkerConfiguration$ === "object");
assert(typeof ListConnectorOperationsCommand === "function");
assert(typeof ListConnectorOperations$ === "object");
assert(typeof ListConnectorsCommand === "function");
assert(typeof ListConnectors$ === "object");
assert(typeof ListCustomPluginsCommand === "function");
assert(typeof ListCustomPlugins$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ListWorkerConfigurationsCommand === "function");
assert(typeof ListWorkerConfigurations$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateConnectorCommand === "function");
assert(typeof UpdateConnector$ === "object");
// structural schemas
assert(typeof ApacheKafkaCluster$ === "object");
assert(typeof ApacheKafkaClusterDescription$ === "object");
assert(typeof AutoScaling$ === "object");
assert(typeof AutoScalingDescription$ === "object");
assert(typeof AutoScalingUpdate$ === "object");
assert(typeof Capacity$ === "object");
assert(typeof CapacityDescription$ === "object");
assert(typeof CapacityUpdate$ === "object");
assert(typeof CloudWatchLogsLogDelivery$ === "object");
assert(typeof CloudWatchLogsLogDeliveryDescription$ === "object");
assert(typeof ConnectorOperationStep$ === "object");
assert(typeof ConnectorOperationSummary$ === "object");
assert(typeof ConnectorSummary$ === "object");
assert(typeof CreateConnectorRequest$ === "object");
assert(typeof CreateConnectorResponse$ === "object");
assert(typeof CreateCustomPluginRequest$ === "object");
assert(typeof CreateCustomPluginResponse$ === "object");
assert(typeof CreateWorkerConfigurationRequest$ === "object");
assert(typeof CreateWorkerConfigurationResponse$ === "object");
assert(typeof CustomPlugin$ === "object");
assert(typeof CustomPluginDescription$ === "object");
assert(typeof CustomPluginFileDescription$ === "object");
assert(typeof CustomPluginLocation$ === "object");
assert(typeof CustomPluginLocationDescription$ === "object");
assert(typeof CustomPluginRevisionSummary$ === "object");
assert(typeof CustomPluginSummary$ === "object");
assert(typeof DeleteConnectorRequest$ === "object");
assert(typeof DeleteConnectorResponse$ === "object");
assert(typeof DeleteCustomPluginRequest$ === "object");
assert(typeof DeleteCustomPluginResponse$ === "object");
assert(typeof DeleteWorkerConfigurationRequest$ === "object");
assert(typeof DeleteWorkerConfigurationResponse$ === "object");
assert(typeof DescribeConnectorOperationRequest$ === "object");
assert(typeof DescribeConnectorOperationResponse$ === "object");
assert(typeof DescribeConnectorRequest$ === "object");
assert(typeof DescribeConnectorResponse$ === "object");
assert(typeof DescribeCustomPluginRequest$ === "object");
assert(typeof DescribeCustomPluginResponse$ === "object");
assert(typeof DescribeWorkerConfigurationRequest$ === "object");
assert(typeof DescribeWorkerConfigurationResponse$ === "object");
assert(typeof FirehoseLogDelivery$ === "object");
assert(typeof FirehoseLogDeliveryDescription$ === "object");
assert(typeof KafkaCluster$ === "object");
assert(typeof KafkaClusterClientAuthentication$ === "object");
assert(typeof KafkaClusterClientAuthenticationDescription$ === "object");
assert(typeof KafkaClusterDescription$ === "object");
assert(typeof KafkaClusterEncryptionInTransit$ === "object");
assert(typeof KafkaClusterEncryptionInTransitDescription$ === "object");
assert(typeof ListConnectorOperationsRequest$ === "object");
assert(typeof ListConnectorOperationsResponse$ === "object");
assert(typeof ListConnectorsRequest$ === "object");
assert(typeof ListConnectorsResponse$ === "object");
assert(typeof ListCustomPluginsRequest$ === "object");
assert(typeof ListCustomPluginsResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof ListWorkerConfigurationsRequest$ === "object");
assert(typeof ListWorkerConfigurationsResponse$ === "object");
assert(typeof LogDelivery$ === "object");
assert(typeof LogDeliveryDescription$ === "object");
assert(typeof Plugin$ === "object");
assert(typeof PluginDescription$ === "object");
assert(typeof ProvisionedCapacity$ === "object");
assert(typeof ProvisionedCapacityDescription$ === "object");
assert(typeof ProvisionedCapacityUpdate$ === "object");
assert(typeof S3Location$ === "object");
assert(typeof S3LocationDescription$ === "object");
assert(typeof S3LogDelivery$ === "object");
assert(typeof S3LogDeliveryDescription$ === "object");
assert(typeof ScaleInPolicy$ === "object");
assert(typeof ScaleInPolicyDescription$ === "object");
assert(typeof ScaleInPolicyUpdate$ === "object");
assert(typeof ScaleOutPolicy$ === "object");
assert(typeof ScaleOutPolicyDescription$ === "object");
assert(typeof ScaleOutPolicyUpdate$ === "object");
assert(typeof StateDescription$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateConnectorRequest$ === "object");
assert(typeof UpdateConnectorResponse$ === "object");
assert(typeof Vpc$ === "object");
assert(typeof VpcDescription$ === "object");
assert(typeof WorkerConfiguration$ === "object");
assert(typeof WorkerConfigurationDescription$ === "object");
assert(typeof WorkerConfigurationRevisionDescription$ === "object");
assert(typeof WorkerConfigurationRevisionSummary$ === "object");
assert(typeof WorkerConfigurationSummary$ === "object");
assert(typeof WorkerLogDelivery$ === "object");
assert(typeof WorkerLogDeliveryDescription$ === "object");
assert(typeof WorkerSetting$ === "object");
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
assert(typeof NetworkType === "object");
assert(typeof WorkerConfigurationState === "object");
// errors
assert(BadRequestException.prototype instanceof KafkaConnectServiceException);
assert(typeof BadRequestException$ === "object");
assert(ConflictException.prototype instanceof KafkaConnectServiceException);
assert(typeof ConflictException$ === "object");
assert(ForbiddenException.prototype instanceof KafkaConnectServiceException);
assert(typeof ForbiddenException$ === "object");
assert(InternalServerErrorException.prototype instanceof KafkaConnectServiceException);
assert(typeof InternalServerErrorException$ === "object");
assert(NotFoundException.prototype instanceof KafkaConnectServiceException);
assert(typeof NotFoundException$ === "object");
assert(ServiceUnavailableException.prototype instanceof KafkaConnectServiceException);
assert(typeof ServiceUnavailableException$ === "object");
assert(TooManyRequestsException.prototype instanceof KafkaConnectServiceException);
assert(typeof TooManyRequestsException$ === "object");
assert(UnauthorizedException.prototype instanceof KafkaConnectServiceException);
assert(typeof UnauthorizedException$ === "object");
assert(KafkaConnectServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListConnectorOperations === "function");
assert(typeof paginateListConnectors === "function");
assert(typeof paginateListCustomPlugins === "function");
assert(typeof paginateListWorkerConfigurations === "function");
console.log(`KafkaConnect index test passed.`);
