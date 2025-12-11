import {
  AssociateRoleToGroupCommand,
  AssociateServiceRoleToAccountCommand,
  BadRequestException,
  BulkDeploymentStatus,
  ConfigurationSyncStatus,
  CreateConnectorDefinitionCommand,
  CreateConnectorDefinitionVersionCommand,
  CreateCoreDefinitionCommand,
  CreateCoreDefinitionVersionCommand,
  CreateDeploymentCommand,
  CreateDeviceDefinitionCommand,
  CreateDeviceDefinitionVersionCommand,
  CreateFunctionDefinitionCommand,
  CreateFunctionDefinitionVersionCommand,
  CreateGroupCertificateAuthorityCommand,
  CreateGroupCommand,
  CreateGroupVersionCommand,
  CreateLoggerDefinitionCommand,
  CreateLoggerDefinitionVersionCommand,
  CreateResourceDefinitionCommand,
  CreateResourceDefinitionVersionCommand,
  CreateSoftwareUpdateJobCommand,
  CreateSubscriptionDefinitionCommand,
  CreateSubscriptionDefinitionVersionCommand,
  DeleteConnectorDefinitionCommand,
  DeleteCoreDefinitionCommand,
  DeleteDeviceDefinitionCommand,
  DeleteFunctionDefinitionCommand,
  DeleteGroupCommand,
  DeleteLoggerDefinitionCommand,
  DeleteResourceDefinitionCommand,
  DeleteSubscriptionDefinitionCommand,
  DeploymentType,
  DisassociateRoleFromGroupCommand,
  DisassociateServiceRoleFromAccountCommand,
  EncodingType,
  FunctionIsolationMode,
  GetAssociatedRoleCommand,
  GetBulkDeploymentStatusCommand,
  GetConnectivityInfoCommand,
  GetConnectorDefinitionCommand,
  GetConnectorDefinitionVersionCommand,
  GetCoreDefinitionCommand,
  GetCoreDefinitionVersionCommand,
  GetDeploymentStatusCommand,
  GetDeviceDefinitionCommand,
  GetDeviceDefinitionVersionCommand,
  GetFunctionDefinitionCommand,
  GetFunctionDefinitionVersionCommand,
  GetGroupCertificateAuthorityCommand,
  GetGroupCertificateConfigurationCommand,
  GetGroupCommand,
  GetGroupVersionCommand,
  GetLoggerDefinitionCommand,
  GetLoggerDefinitionVersionCommand,
  GetResourceDefinitionCommand,
  GetResourceDefinitionVersionCommand,
  GetServiceRoleForAccountCommand,
  GetSubscriptionDefinitionCommand,
  GetSubscriptionDefinitionVersionCommand,
  GetThingRuntimeConfigurationCommand,
  Greengrass,
  GreengrassClient,
  GreengrassServiceException,
  InternalServerErrorException,
  ListBulkDeploymentDetailedReportsCommand,
  ListBulkDeploymentsCommand,
  ListConnectorDefinitionVersionsCommand,
  ListConnectorDefinitionsCommand,
  ListCoreDefinitionVersionsCommand,
  ListCoreDefinitionsCommand,
  ListDeploymentsCommand,
  ListDeviceDefinitionVersionsCommand,
  ListDeviceDefinitionsCommand,
  ListFunctionDefinitionVersionsCommand,
  ListFunctionDefinitionsCommand,
  ListGroupCertificateAuthoritiesCommand,
  ListGroupVersionsCommand,
  ListGroupsCommand,
  ListLoggerDefinitionVersionsCommand,
  ListLoggerDefinitionsCommand,
  ListResourceDefinitionVersionsCommand,
  ListResourceDefinitionsCommand,
  ListSubscriptionDefinitionVersionsCommand,
  ListSubscriptionDefinitionsCommand,
  ListTagsForResourceCommand,
  LoggerComponent,
  LoggerLevel,
  LoggerType,
  Permission,
  ResetDeploymentsCommand,
  SoftwareToUpdate,
  StartBulkDeploymentCommand,
  StopBulkDeploymentCommand,
  TagResourceCommand,
  Telemetry,
  UntagResourceCommand,
  UpdateAgentLogLevel,
  UpdateConnectivityInfoCommand,
  UpdateConnectorDefinitionCommand,
  UpdateCoreDefinitionCommand,
  UpdateDeviceDefinitionCommand,
  UpdateFunctionDefinitionCommand,
  UpdateGroupCertificateConfigurationCommand,
  UpdateGroupCommand,
  UpdateLoggerDefinitionCommand,
  UpdateResourceDefinitionCommand,
  UpdateSubscriptionDefinitionCommand,
  UpdateTargetsArchitecture,
  UpdateTargetsOperatingSystem,
  UpdateThingRuntimeConfigurationCommand,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof GreengrassClient === "function");
assert(typeof Greengrass === "function");
// commands
assert(typeof AssociateRoleToGroupCommand === "function");
assert(typeof AssociateServiceRoleToAccountCommand === "function");
assert(typeof CreateConnectorDefinitionCommand === "function");
assert(typeof CreateConnectorDefinitionVersionCommand === "function");
assert(typeof CreateCoreDefinitionCommand === "function");
assert(typeof CreateCoreDefinitionVersionCommand === "function");
assert(typeof CreateDeploymentCommand === "function");
assert(typeof CreateDeviceDefinitionCommand === "function");
assert(typeof CreateDeviceDefinitionVersionCommand === "function");
assert(typeof CreateFunctionDefinitionCommand === "function");
assert(typeof CreateFunctionDefinitionVersionCommand === "function");
assert(typeof CreateGroupCommand === "function");
assert(typeof CreateGroupCertificateAuthorityCommand === "function");
assert(typeof CreateGroupVersionCommand === "function");
assert(typeof CreateLoggerDefinitionCommand === "function");
assert(typeof CreateLoggerDefinitionVersionCommand === "function");
assert(typeof CreateResourceDefinitionCommand === "function");
assert(typeof CreateResourceDefinitionVersionCommand === "function");
assert(typeof CreateSoftwareUpdateJobCommand === "function");
assert(typeof CreateSubscriptionDefinitionCommand === "function");
assert(typeof CreateSubscriptionDefinitionVersionCommand === "function");
assert(typeof DeleteConnectorDefinitionCommand === "function");
assert(typeof DeleteCoreDefinitionCommand === "function");
assert(typeof DeleteDeviceDefinitionCommand === "function");
assert(typeof DeleteFunctionDefinitionCommand === "function");
assert(typeof DeleteGroupCommand === "function");
assert(typeof DeleteLoggerDefinitionCommand === "function");
assert(typeof DeleteResourceDefinitionCommand === "function");
assert(typeof DeleteSubscriptionDefinitionCommand === "function");
assert(typeof DisassociateRoleFromGroupCommand === "function");
assert(typeof DisassociateServiceRoleFromAccountCommand === "function");
assert(typeof GetAssociatedRoleCommand === "function");
assert(typeof GetBulkDeploymentStatusCommand === "function");
assert(typeof GetConnectivityInfoCommand === "function");
assert(typeof GetConnectorDefinitionCommand === "function");
assert(typeof GetConnectorDefinitionVersionCommand === "function");
assert(typeof GetCoreDefinitionCommand === "function");
assert(typeof GetCoreDefinitionVersionCommand === "function");
assert(typeof GetDeploymentStatusCommand === "function");
assert(typeof GetDeviceDefinitionCommand === "function");
assert(typeof GetDeviceDefinitionVersionCommand === "function");
assert(typeof GetFunctionDefinitionCommand === "function");
assert(typeof GetFunctionDefinitionVersionCommand === "function");
assert(typeof GetGroupCommand === "function");
assert(typeof GetGroupCertificateAuthorityCommand === "function");
assert(typeof GetGroupCertificateConfigurationCommand === "function");
assert(typeof GetGroupVersionCommand === "function");
assert(typeof GetLoggerDefinitionCommand === "function");
assert(typeof GetLoggerDefinitionVersionCommand === "function");
assert(typeof GetResourceDefinitionCommand === "function");
assert(typeof GetResourceDefinitionVersionCommand === "function");
assert(typeof GetServiceRoleForAccountCommand === "function");
assert(typeof GetSubscriptionDefinitionCommand === "function");
assert(typeof GetSubscriptionDefinitionVersionCommand === "function");
assert(typeof GetThingRuntimeConfigurationCommand === "function");
assert(typeof ListBulkDeploymentDetailedReportsCommand === "function");
assert(typeof ListBulkDeploymentsCommand === "function");
assert(typeof ListConnectorDefinitionsCommand === "function");
assert(typeof ListConnectorDefinitionVersionsCommand === "function");
assert(typeof ListCoreDefinitionsCommand === "function");
assert(typeof ListCoreDefinitionVersionsCommand === "function");
assert(typeof ListDeploymentsCommand === "function");
assert(typeof ListDeviceDefinitionsCommand === "function");
assert(typeof ListDeviceDefinitionVersionsCommand === "function");
assert(typeof ListFunctionDefinitionsCommand === "function");
assert(typeof ListFunctionDefinitionVersionsCommand === "function");
assert(typeof ListGroupCertificateAuthoritiesCommand === "function");
assert(typeof ListGroupsCommand === "function");
assert(typeof ListGroupVersionsCommand === "function");
assert(typeof ListLoggerDefinitionsCommand === "function");
assert(typeof ListLoggerDefinitionVersionsCommand === "function");
assert(typeof ListResourceDefinitionsCommand === "function");
assert(typeof ListResourceDefinitionVersionsCommand === "function");
assert(typeof ListSubscriptionDefinitionsCommand === "function");
assert(typeof ListSubscriptionDefinitionVersionsCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ResetDeploymentsCommand === "function");
assert(typeof StartBulkDeploymentCommand === "function");
assert(typeof StopBulkDeploymentCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateConnectivityInfoCommand === "function");
assert(typeof UpdateConnectorDefinitionCommand === "function");
assert(typeof UpdateCoreDefinitionCommand === "function");
assert(typeof UpdateDeviceDefinitionCommand === "function");
assert(typeof UpdateFunctionDefinitionCommand === "function");
assert(typeof UpdateGroupCommand === "function");
assert(typeof UpdateGroupCertificateConfigurationCommand === "function");
assert(typeof UpdateLoggerDefinitionCommand === "function");
assert(typeof UpdateResourceDefinitionCommand === "function");
assert(typeof UpdateSubscriptionDefinitionCommand === "function");
assert(typeof UpdateThingRuntimeConfigurationCommand === "function");
// enums
assert(typeof BulkDeploymentStatus === "object");
assert(typeof ConfigurationSyncStatus === "object");
assert(typeof DeploymentType === "object");
assert(typeof EncodingType === "object");
assert(typeof FunctionIsolationMode === "object");
assert(typeof LoggerComponent === "object");
assert(typeof LoggerLevel === "object");
assert(typeof LoggerType === "object");
assert(typeof Permission === "object");
assert(typeof SoftwareToUpdate === "object");
assert(typeof Telemetry === "object");
assert(typeof UpdateAgentLogLevel === "object");
assert(typeof UpdateTargetsArchitecture === "object");
assert(typeof UpdateTargetsOperatingSystem === "object");
// errors
assert(BadRequestException.prototype instanceof GreengrassServiceException);
assert(InternalServerErrorException.prototype instanceof GreengrassServiceException);
assert(GreengrassServiceException.prototype instanceof Error);
console.log(`Greengrass index test passed.`);
