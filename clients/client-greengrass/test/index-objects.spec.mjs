import {
  AssociateRoleToGroup$,
  AssociateRoleToGroupCommand,
  AssociateRoleToGroupRequest$,
  AssociateRoleToGroupResponse$,
  AssociateServiceRoleToAccount$,
  AssociateServiceRoleToAccountCommand,
  AssociateServiceRoleToAccountRequest$,
  AssociateServiceRoleToAccountResponse$,
  BadRequestException,
  BadRequestException$,
  BulkDeployment$,
  BulkDeploymentMetrics$,
  BulkDeploymentResult$,
  BulkDeploymentStatus,
  ConfigurationSyncStatus,
  ConnectivityInfo$,
  Connector$,
  ConnectorDefinitionVersion$,
  Core$,
  CoreDefinitionVersion$,
  CreateConnectorDefinition$,
  CreateConnectorDefinitionCommand,
  CreateConnectorDefinitionRequest$,
  CreateConnectorDefinitionResponse$,
  CreateConnectorDefinitionVersion$,
  CreateConnectorDefinitionVersionCommand,
  CreateConnectorDefinitionVersionRequest$,
  CreateConnectorDefinitionVersionResponse$,
  CreateCoreDefinition$,
  CreateCoreDefinitionCommand,
  CreateCoreDefinitionRequest$,
  CreateCoreDefinitionResponse$,
  CreateCoreDefinitionVersion$,
  CreateCoreDefinitionVersionCommand,
  CreateCoreDefinitionVersionRequest$,
  CreateCoreDefinitionVersionResponse$,
  CreateDeployment$,
  CreateDeploymentCommand,
  CreateDeploymentRequest$,
  CreateDeploymentResponse$,
  CreateDeviceDefinition$,
  CreateDeviceDefinitionCommand,
  CreateDeviceDefinitionRequest$,
  CreateDeviceDefinitionResponse$,
  CreateDeviceDefinitionVersion$,
  CreateDeviceDefinitionVersionCommand,
  CreateDeviceDefinitionVersionRequest$,
  CreateDeviceDefinitionVersionResponse$,
  CreateFunctionDefinition$,
  CreateFunctionDefinitionCommand,
  CreateFunctionDefinitionRequest$,
  CreateFunctionDefinitionResponse$,
  CreateFunctionDefinitionVersion$,
  CreateFunctionDefinitionVersionCommand,
  CreateFunctionDefinitionVersionRequest$,
  CreateFunctionDefinitionVersionResponse$,
  CreateGroup$,
  CreateGroupCertificateAuthority$,
  CreateGroupCertificateAuthorityCommand,
  CreateGroupCertificateAuthorityRequest$,
  CreateGroupCertificateAuthorityResponse$,
  CreateGroupCommand,
  CreateGroupRequest$,
  CreateGroupResponse$,
  CreateGroupVersion$,
  CreateGroupVersionCommand,
  CreateGroupVersionRequest$,
  CreateGroupVersionResponse$,
  CreateLoggerDefinition$,
  CreateLoggerDefinitionCommand,
  CreateLoggerDefinitionRequest$,
  CreateLoggerDefinitionResponse$,
  CreateLoggerDefinitionVersion$,
  CreateLoggerDefinitionVersionCommand,
  CreateLoggerDefinitionVersionRequest$,
  CreateLoggerDefinitionVersionResponse$,
  CreateResourceDefinition$,
  CreateResourceDefinitionCommand,
  CreateResourceDefinitionRequest$,
  CreateResourceDefinitionResponse$,
  CreateResourceDefinitionVersion$,
  CreateResourceDefinitionVersionCommand,
  CreateResourceDefinitionVersionRequest$,
  CreateResourceDefinitionVersionResponse$,
  CreateSoftwareUpdateJob$,
  CreateSoftwareUpdateJobCommand,
  CreateSoftwareUpdateJobRequest$,
  CreateSoftwareUpdateJobResponse$,
  CreateSubscriptionDefinition$,
  CreateSubscriptionDefinitionCommand,
  CreateSubscriptionDefinitionRequest$,
  CreateSubscriptionDefinitionResponse$,
  CreateSubscriptionDefinitionVersion$,
  CreateSubscriptionDefinitionVersionCommand,
  CreateSubscriptionDefinitionVersionRequest$,
  CreateSubscriptionDefinitionVersionResponse$,
  DefinitionInformation$,
  DeleteConnectorDefinition$,
  DeleteConnectorDefinitionCommand,
  DeleteConnectorDefinitionRequest$,
  DeleteConnectorDefinitionResponse$,
  DeleteCoreDefinition$,
  DeleteCoreDefinitionCommand,
  DeleteCoreDefinitionRequest$,
  DeleteCoreDefinitionResponse$,
  DeleteDeviceDefinition$,
  DeleteDeviceDefinitionCommand,
  DeleteDeviceDefinitionRequest$,
  DeleteDeviceDefinitionResponse$,
  DeleteFunctionDefinition$,
  DeleteFunctionDefinitionCommand,
  DeleteFunctionDefinitionRequest$,
  DeleteFunctionDefinitionResponse$,
  DeleteGroup$,
  DeleteGroupCommand,
  DeleteGroupRequest$,
  DeleteGroupResponse$,
  DeleteLoggerDefinition$,
  DeleteLoggerDefinitionCommand,
  DeleteLoggerDefinitionRequest$,
  DeleteLoggerDefinitionResponse$,
  DeleteResourceDefinition$,
  DeleteResourceDefinitionCommand,
  DeleteResourceDefinitionRequest$,
  DeleteResourceDefinitionResponse$,
  DeleteSubscriptionDefinition$,
  DeleteSubscriptionDefinitionCommand,
  DeleteSubscriptionDefinitionRequest$,
  DeleteSubscriptionDefinitionResponse$,
  Deployment$,
  DeploymentType,
  Device$,
  DeviceDefinitionVersion$,
  DisassociateRoleFromGroup$,
  DisassociateRoleFromGroupCommand,
  DisassociateRoleFromGroupRequest$,
  DisassociateRoleFromGroupResponse$,
  DisassociateServiceRoleFromAccount$,
  DisassociateServiceRoleFromAccountCommand,
  DisassociateServiceRoleFromAccountRequest$,
  DisassociateServiceRoleFromAccountResponse$,
  EncodingType,
  ErrorDetail$,
  Function$,
  FunctionConfiguration$,
  FunctionConfigurationEnvironment$,
  FunctionDefaultConfig$,
  FunctionDefaultExecutionConfig$,
  FunctionDefinitionVersion$,
  FunctionExecutionConfig$,
  FunctionIsolationMode,
  FunctionRunAsConfig$,
  GetAssociatedRole$,
  GetAssociatedRoleCommand,
  GetAssociatedRoleRequest$,
  GetAssociatedRoleResponse$,
  GetBulkDeploymentStatus$,
  GetBulkDeploymentStatusCommand,
  GetBulkDeploymentStatusRequest$,
  GetBulkDeploymentStatusResponse$,
  GetConnectivityInfo$,
  GetConnectivityInfoCommand,
  GetConnectivityInfoRequest$,
  GetConnectivityInfoResponse$,
  GetConnectorDefinition$,
  GetConnectorDefinitionCommand,
  GetConnectorDefinitionRequest$,
  GetConnectorDefinitionResponse$,
  GetConnectorDefinitionVersion$,
  GetConnectorDefinitionVersionCommand,
  GetConnectorDefinitionVersionRequest$,
  GetConnectorDefinitionVersionResponse$,
  GetCoreDefinition$,
  GetCoreDefinitionCommand,
  GetCoreDefinitionRequest$,
  GetCoreDefinitionResponse$,
  GetCoreDefinitionVersion$,
  GetCoreDefinitionVersionCommand,
  GetCoreDefinitionVersionRequest$,
  GetCoreDefinitionVersionResponse$,
  GetDeploymentStatus$,
  GetDeploymentStatusCommand,
  GetDeploymentStatusRequest$,
  GetDeploymentStatusResponse$,
  GetDeviceDefinition$,
  GetDeviceDefinitionCommand,
  GetDeviceDefinitionRequest$,
  GetDeviceDefinitionResponse$,
  GetDeviceDefinitionVersion$,
  GetDeviceDefinitionVersionCommand,
  GetDeviceDefinitionVersionRequest$,
  GetDeviceDefinitionVersionResponse$,
  GetFunctionDefinition$,
  GetFunctionDefinitionCommand,
  GetFunctionDefinitionRequest$,
  GetFunctionDefinitionResponse$,
  GetFunctionDefinitionVersion$,
  GetFunctionDefinitionVersionCommand,
  GetFunctionDefinitionVersionRequest$,
  GetFunctionDefinitionVersionResponse$,
  GetGroup$,
  GetGroupCertificateAuthority$,
  GetGroupCertificateAuthorityCommand,
  GetGroupCertificateAuthorityRequest$,
  GetGroupCertificateAuthorityResponse$,
  GetGroupCertificateConfiguration$,
  GetGroupCertificateConfigurationCommand,
  GetGroupCertificateConfigurationRequest$,
  GetGroupCertificateConfigurationResponse$,
  GetGroupCommand,
  GetGroupRequest$,
  GetGroupResponse$,
  GetGroupVersion$,
  GetGroupVersionCommand,
  GetGroupVersionRequest$,
  GetGroupVersionResponse$,
  GetLoggerDefinition$,
  GetLoggerDefinitionCommand,
  GetLoggerDefinitionRequest$,
  GetLoggerDefinitionResponse$,
  GetLoggerDefinitionVersion$,
  GetLoggerDefinitionVersionCommand,
  GetLoggerDefinitionVersionRequest$,
  GetLoggerDefinitionVersionResponse$,
  GetResourceDefinition$,
  GetResourceDefinitionCommand,
  GetResourceDefinitionRequest$,
  GetResourceDefinitionResponse$,
  GetResourceDefinitionVersion$,
  GetResourceDefinitionVersionCommand,
  GetResourceDefinitionVersionRequest$,
  GetResourceDefinitionVersionResponse$,
  GetServiceRoleForAccount$,
  GetServiceRoleForAccountCommand,
  GetServiceRoleForAccountRequest$,
  GetServiceRoleForAccountResponse$,
  GetSubscriptionDefinition$,
  GetSubscriptionDefinitionCommand,
  GetSubscriptionDefinitionRequest$,
  GetSubscriptionDefinitionResponse$,
  GetSubscriptionDefinitionVersion$,
  GetSubscriptionDefinitionVersionCommand,
  GetSubscriptionDefinitionVersionRequest$,
  GetSubscriptionDefinitionVersionResponse$,
  GetThingRuntimeConfiguration$,
  GetThingRuntimeConfigurationCommand,
  GetThingRuntimeConfigurationRequest$,
  GetThingRuntimeConfigurationResponse$,
  Greengrass,
  GreengrassClient,
  GreengrassServiceException,
  GroupCertificateAuthorityProperties$,
  GroupInformation$,
  GroupOwnerSetting$,
  GroupVersion$,
  InternalServerErrorException,
  InternalServerErrorException$,
  ListBulkDeploymentDetailedReports$,
  ListBulkDeploymentDetailedReportsCommand,
  ListBulkDeploymentDetailedReportsRequest$,
  ListBulkDeploymentDetailedReportsResponse$,
  ListBulkDeployments$,
  ListBulkDeploymentsCommand,
  ListBulkDeploymentsRequest$,
  ListBulkDeploymentsResponse$,
  ListConnectorDefinitions$,
  ListConnectorDefinitionsCommand,
  ListConnectorDefinitionsRequest$,
  ListConnectorDefinitionsResponse$,
  ListConnectorDefinitionVersions$,
  ListConnectorDefinitionVersionsCommand,
  ListConnectorDefinitionVersionsRequest$,
  ListConnectorDefinitionVersionsResponse$,
  ListCoreDefinitions$,
  ListCoreDefinitionsCommand,
  ListCoreDefinitionsRequest$,
  ListCoreDefinitionsResponse$,
  ListCoreDefinitionVersions$,
  ListCoreDefinitionVersionsCommand,
  ListCoreDefinitionVersionsRequest$,
  ListCoreDefinitionVersionsResponse$,
  ListDeployments$,
  ListDeploymentsCommand,
  ListDeploymentsRequest$,
  ListDeploymentsResponse$,
  ListDeviceDefinitions$,
  ListDeviceDefinitionsCommand,
  ListDeviceDefinitionsRequest$,
  ListDeviceDefinitionsResponse$,
  ListDeviceDefinitionVersions$,
  ListDeviceDefinitionVersionsCommand,
  ListDeviceDefinitionVersionsRequest$,
  ListDeviceDefinitionVersionsResponse$,
  ListFunctionDefinitions$,
  ListFunctionDefinitionsCommand,
  ListFunctionDefinitionsRequest$,
  ListFunctionDefinitionsResponse$,
  ListFunctionDefinitionVersions$,
  ListFunctionDefinitionVersionsCommand,
  ListFunctionDefinitionVersionsRequest$,
  ListFunctionDefinitionVersionsResponse$,
  ListGroupCertificateAuthorities$,
  ListGroupCertificateAuthoritiesCommand,
  ListGroupCertificateAuthoritiesRequest$,
  ListGroupCertificateAuthoritiesResponse$,
  ListGroups$,
  ListGroupsCommand,
  ListGroupsRequest$,
  ListGroupsResponse$,
  ListGroupVersions$,
  ListGroupVersionsCommand,
  ListGroupVersionsRequest$,
  ListGroupVersionsResponse$,
  ListLoggerDefinitions$,
  ListLoggerDefinitionsCommand,
  ListLoggerDefinitionsRequest$,
  ListLoggerDefinitionsResponse$,
  ListLoggerDefinitionVersions$,
  ListLoggerDefinitionVersionsCommand,
  ListLoggerDefinitionVersionsRequest$,
  ListLoggerDefinitionVersionsResponse$,
  ListResourceDefinitions$,
  ListResourceDefinitionsCommand,
  ListResourceDefinitionsRequest$,
  ListResourceDefinitionsResponse$,
  ListResourceDefinitionVersions$,
  ListResourceDefinitionVersionsCommand,
  ListResourceDefinitionVersionsRequest$,
  ListResourceDefinitionVersionsResponse$,
  ListSubscriptionDefinitions$,
  ListSubscriptionDefinitionsCommand,
  ListSubscriptionDefinitionsRequest$,
  ListSubscriptionDefinitionsResponse$,
  ListSubscriptionDefinitionVersions$,
  ListSubscriptionDefinitionVersionsCommand,
  ListSubscriptionDefinitionVersionsRequest$,
  ListSubscriptionDefinitionVersionsResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  LocalDeviceResourceData$,
  LocalVolumeResourceData$,
  Logger$,
  LoggerComponent,
  LoggerDefinitionVersion$,
  LoggerLevel,
  LoggerType,
  Permission,
  ResetDeployments$,
  ResetDeploymentsCommand,
  ResetDeploymentsRequest$,
  ResetDeploymentsResponse$,
  Resource$,
  ResourceAccessPolicy$,
  ResourceDataContainer$,
  ResourceDefinitionVersion$,
  ResourceDownloadOwnerSetting$,
  RuntimeConfiguration$,
  S3MachineLearningModelResourceData$,
  SageMakerMachineLearningModelResourceData$,
  SecretsManagerSecretResourceData$,
  SoftwareToUpdate,
  StartBulkDeployment$,
  StartBulkDeploymentCommand,
  StartBulkDeploymentRequest$,
  StartBulkDeploymentResponse$,
  StopBulkDeployment$,
  StopBulkDeploymentCommand,
  StopBulkDeploymentRequest$,
  StopBulkDeploymentResponse$,
  Subscription$,
  SubscriptionDefinitionVersion$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  Telemetry,
  TelemetryConfiguration$,
  TelemetryConfigurationUpdate$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UpdateAgentLogLevel,
  UpdateConnectivityInfo$,
  UpdateConnectivityInfoCommand,
  UpdateConnectivityInfoRequest$,
  UpdateConnectivityInfoResponse$,
  UpdateConnectorDefinition$,
  UpdateConnectorDefinitionCommand,
  UpdateConnectorDefinitionRequest$,
  UpdateConnectorDefinitionResponse$,
  UpdateCoreDefinition$,
  UpdateCoreDefinitionCommand,
  UpdateCoreDefinitionRequest$,
  UpdateCoreDefinitionResponse$,
  UpdateDeviceDefinition$,
  UpdateDeviceDefinitionCommand,
  UpdateDeviceDefinitionRequest$,
  UpdateDeviceDefinitionResponse$,
  UpdateFunctionDefinition$,
  UpdateFunctionDefinitionCommand,
  UpdateFunctionDefinitionRequest$,
  UpdateFunctionDefinitionResponse$,
  UpdateGroup$,
  UpdateGroupCertificateConfiguration$,
  UpdateGroupCertificateConfigurationCommand,
  UpdateGroupCertificateConfigurationRequest$,
  UpdateGroupCertificateConfigurationResponse$,
  UpdateGroupCommand,
  UpdateGroupRequest$,
  UpdateGroupResponse$,
  UpdateLoggerDefinition$,
  UpdateLoggerDefinitionCommand,
  UpdateLoggerDefinitionRequest$,
  UpdateLoggerDefinitionResponse$,
  UpdateResourceDefinition$,
  UpdateResourceDefinitionCommand,
  UpdateResourceDefinitionRequest$,
  UpdateResourceDefinitionResponse$,
  UpdateSubscriptionDefinition$,
  UpdateSubscriptionDefinitionCommand,
  UpdateSubscriptionDefinitionRequest$,
  UpdateSubscriptionDefinitionResponse$,
  UpdateTargetsArchitecture,
  UpdateTargetsOperatingSystem,
  UpdateThingRuntimeConfiguration$,
  UpdateThingRuntimeConfigurationCommand,
  UpdateThingRuntimeConfigurationRequest$,
  UpdateThingRuntimeConfigurationResponse$,
  VersionInformation$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof GreengrassClient === "function");
assert(typeof Greengrass === "function");
// commands
assert(typeof AssociateRoleToGroupCommand === "function");
assert(typeof AssociateRoleToGroup$ === "object");
assert(typeof AssociateServiceRoleToAccountCommand === "function");
assert(typeof AssociateServiceRoleToAccount$ === "object");
assert(typeof CreateConnectorDefinitionCommand === "function");
assert(typeof CreateConnectorDefinition$ === "object");
assert(typeof CreateConnectorDefinitionVersionCommand === "function");
assert(typeof CreateConnectorDefinitionVersion$ === "object");
assert(typeof CreateCoreDefinitionCommand === "function");
assert(typeof CreateCoreDefinition$ === "object");
assert(typeof CreateCoreDefinitionVersionCommand === "function");
assert(typeof CreateCoreDefinitionVersion$ === "object");
assert(typeof CreateDeploymentCommand === "function");
assert(typeof CreateDeployment$ === "object");
assert(typeof CreateDeviceDefinitionCommand === "function");
assert(typeof CreateDeviceDefinition$ === "object");
assert(typeof CreateDeviceDefinitionVersionCommand === "function");
assert(typeof CreateDeviceDefinitionVersion$ === "object");
assert(typeof CreateFunctionDefinitionCommand === "function");
assert(typeof CreateFunctionDefinition$ === "object");
assert(typeof CreateFunctionDefinitionVersionCommand === "function");
assert(typeof CreateFunctionDefinitionVersion$ === "object");
assert(typeof CreateGroupCommand === "function");
assert(typeof CreateGroup$ === "object");
assert(typeof CreateGroupCertificateAuthorityCommand === "function");
assert(typeof CreateGroupCertificateAuthority$ === "object");
assert(typeof CreateGroupVersionCommand === "function");
assert(typeof CreateGroupVersion$ === "object");
assert(typeof CreateLoggerDefinitionCommand === "function");
assert(typeof CreateLoggerDefinition$ === "object");
assert(typeof CreateLoggerDefinitionVersionCommand === "function");
assert(typeof CreateLoggerDefinitionVersion$ === "object");
assert(typeof CreateResourceDefinitionCommand === "function");
assert(typeof CreateResourceDefinition$ === "object");
assert(typeof CreateResourceDefinitionVersionCommand === "function");
assert(typeof CreateResourceDefinitionVersion$ === "object");
assert(typeof CreateSoftwareUpdateJobCommand === "function");
assert(typeof CreateSoftwareUpdateJob$ === "object");
assert(typeof CreateSubscriptionDefinitionCommand === "function");
assert(typeof CreateSubscriptionDefinition$ === "object");
assert(typeof CreateSubscriptionDefinitionVersionCommand === "function");
assert(typeof CreateSubscriptionDefinitionVersion$ === "object");
assert(typeof DeleteConnectorDefinitionCommand === "function");
assert(typeof DeleteConnectorDefinition$ === "object");
assert(typeof DeleteCoreDefinitionCommand === "function");
assert(typeof DeleteCoreDefinition$ === "object");
assert(typeof DeleteDeviceDefinitionCommand === "function");
assert(typeof DeleteDeviceDefinition$ === "object");
assert(typeof DeleteFunctionDefinitionCommand === "function");
assert(typeof DeleteFunctionDefinition$ === "object");
assert(typeof DeleteGroupCommand === "function");
assert(typeof DeleteGroup$ === "object");
assert(typeof DeleteLoggerDefinitionCommand === "function");
assert(typeof DeleteLoggerDefinition$ === "object");
assert(typeof DeleteResourceDefinitionCommand === "function");
assert(typeof DeleteResourceDefinition$ === "object");
assert(typeof DeleteSubscriptionDefinitionCommand === "function");
assert(typeof DeleteSubscriptionDefinition$ === "object");
assert(typeof DisassociateRoleFromGroupCommand === "function");
assert(typeof DisassociateRoleFromGroup$ === "object");
assert(typeof DisassociateServiceRoleFromAccountCommand === "function");
assert(typeof DisassociateServiceRoleFromAccount$ === "object");
assert(typeof GetAssociatedRoleCommand === "function");
assert(typeof GetAssociatedRole$ === "object");
assert(typeof GetBulkDeploymentStatusCommand === "function");
assert(typeof GetBulkDeploymentStatus$ === "object");
assert(typeof GetConnectivityInfoCommand === "function");
assert(typeof GetConnectivityInfo$ === "object");
assert(typeof GetConnectorDefinitionCommand === "function");
assert(typeof GetConnectorDefinition$ === "object");
assert(typeof GetConnectorDefinitionVersionCommand === "function");
assert(typeof GetConnectorDefinitionVersion$ === "object");
assert(typeof GetCoreDefinitionCommand === "function");
assert(typeof GetCoreDefinition$ === "object");
assert(typeof GetCoreDefinitionVersionCommand === "function");
assert(typeof GetCoreDefinitionVersion$ === "object");
assert(typeof GetDeploymentStatusCommand === "function");
assert(typeof GetDeploymentStatus$ === "object");
assert(typeof GetDeviceDefinitionCommand === "function");
assert(typeof GetDeviceDefinition$ === "object");
assert(typeof GetDeviceDefinitionVersionCommand === "function");
assert(typeof GetDeviceDefinitionVersion$ === "object");
assert(typeof GetFunctionDefinitionCommand === "function");
assert(typeof GetFunctionDefinition$ === "object");
assert(typeof GetFunctionDefinitionVersionCommand === "function");
assert(typeof GetFunctionDefinitionVersion$ === "object");
assert(typeof GetGroupCommand === "function");
assert(typeof GetGroup$ === "object");
assert(typeof GetGroupCertificateAuthorityCommand === "function");
assert(typeof GetGroupCertificateAuthority$ === "object");
assert(typeof GetGroupCertificateConfigurationCommand === "function");
assert(typeof GetGroupCertificateConfiguration$ === "object");
assert(typeof GetGroupVersionCommand === "function");
assert(typeof GetGroupVersion$ === "object");
assert(typeof GetLoggerDefinitionCommand === "function");
assert(typeof GetLoggerDefinition$ === "object");
assert(typeof GetLoggerDefinitionVersionCommand === "function");
assert(typeof GetLoggerDefinitionVersion$ === "object");
assert(typeof GetResourceDefinitionCommand === "function");
assert(typeof GetResourceDefinition$ === "object");
assert(typeof GetResourceDefinitionVersionCommand === "function");
assert(typeof GetResourceDefinitionVersion$ === "object");
assert(typeof GetServiceRoleForAccountCommand === "function");
assert(typeof GetServiceRoleForAccount$ === "object");
assert(typeof GetSubscriptionDefinitionCommand === "function");
assert(typeof GetSubscriptionDefinition$ === "object");
assert(typeof GetSubscriptionDefinitionVersionCommand === "function");
assert(typeof GetSubscriptionDefinitionVersion$ === "object");
assert(typeof GetThingRuntimeConfigurationCommand === "function");
assert(typeof GetThingRuntimeConfiguration$ === "object");
assert(typeof ListBulkDeploymentDetailedReportsCommand === "function");
assert(typeof ListBulkDeploymentDetailedReports$ === "object");
assert(typeof ListBulkDeploymentsCommand === "function");
assert(typeof ListBulkDeployments$ === "object");
assert(typeof ListConnectorDefinitionsCommand === "function");
assert(typeof ListConnectorDefinitions$ === "object");
assert(typeof ListConnectorDefinitionVersionsCommand === "function");
assert(typeof ListConnectorDefinitionVersions$ === "object");
assert(typeof ListCoreDefinitionsCommand === "function");
assert(typeof ListCoreDefinitions$ === "object");
assert(typeof ListCoreDefinitionVersionsCommand === "function");
assert(typeof ListCoreDefinitionVersions$ === "object");
assert(typeof ListDeploymentsCommand === "function");
assert(typeof ListDeployments$ === "object");
assert(typeof ListDeviceDefinitionsCommand === "function");
assert(typeof ListDeviceDefinitions$ === "object");
assert(typeof ListDeviceDefinitionVersionsCommand === "function");
assert(typeof ListDeviceDefinitionVersions$ === "object");
assert(typeof ListFunctionDefinitionsCommand === "function");
assert(typeof ListFunctionDefinitions$ === "object");
assert(typeof ListFunctionDefinitionVersionsCommand === "function");
assert(typeof ListFunctionDefinitionVersions$ === "object");
assert(typeof ListGroupCertificateAuthoritiesCommand === "function");
assert(typeof ListGroupCertificateAuthorities$ === "object");
assert(typeof ListGroupsCommand === "function");
assert(typeof ListGroups$ === "object");
assert(typeof ListGroupVersionsCommand === "function");
assert(typeof ListGroupVersions$ === "object");
assert(typeof ListLoggerDefinitionsCommand === "function");
assert(typeof ListLoggerDefinitions$ === "object");
assert(typeof ListLoggerDefinitionVersionsCommand === "function");
assert(typeof ListLoggerDefinitionVersions$ === "object");
assert(typeof ListResourceDefinitionsCommand === "function");
assert(typeof ListResourceDefinitions$ === "object");
assert(typeof ListResourceDefinitionVersionsCommand === "function");
assert(typeof ListResourceDefinitionVersions$ === "object");
assert(typeof ListSubscriptionDefinitionsCommand === "function");
assert(typeof ListSubscriptionDefinitions$ === "object");
assert(typeof ListSubscriptionDefinitionVersionsCommand === "function");
assert(typeof ListSubscriptionDefinitionVersions$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ResetDeploymentsCommand === "function");
assert(typeof ResetDeployments$ === "object");
assert(typeof StartBulkDeploymentCommand === "function");
assert(typeof StartBulkDeployment$ === "object");
assert(typeof StopBulkDeploymentCommand === "function");
assert(typeof StopBulkDeployment$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateConnectivityInfoCommand === "function");
assert(typeof UpdateConnectivityInfo$ === "object");
assert(typeof UpdateConnectorDefinitionCommand === "function");
assert(typeof UpdateConnectorDefinition$ === "object");
assert(typeof UpdateCoreDefinitionCommand === "function");
assert(typeof UpdateCoreDefinition$ === "object");
assert(typeof UpdateDeviceDefinitionCommand === "function");
assert(typeof UpdateDeviceDefinition$ === "object");
assert(typeof UpdateFunctionDefinitionCommand === "function");
assert(typeof UpdateFunctionDefinition$ === "object");
assert(typeof UpdateGroupCommand === "function");
assert(typeof UpdateGroup$ === "object");
assert(typeof UpdateGroupCertificateConfigurationCommand === "function");
assert(typeof UpdateGroupCertificateConfiguration$ === "object");
assert(typeof UpdateLoggerDefinitionCommand === "function");
assert(typeof UpdateLoggerDefinition$ === "object");
assert(typeof UpdateResourceDefinitionCommand === "function");
assert(typeof UpdateResourceDefinition$ === "object");
assert(typeof UpdateSubscriptionDefinitionCommand === "function");
assert(typeof UpdateSubscriptionDefinition$ === "object");
assert(typeof UpdateThingRuntimeConfigurationCommand === "function");
assert(typeof UpdateThingRuntimeConfiguration$ === "object");
// structural schemas
assert(typeof AssociateRoleToGroupRequest$ === "object");
assert(typeof AssociateRoleToGroupResponse$ === "object");
assert(typeof AssociateServiceRoleToAccountRequest$ === "object");
assert(typeof AssociateServiceRoleToAccountResponse$ === "object");
assert(typeof BulkDeployment$ === "object");
assert(typeof BulkDeploymentMetrics$ === "object");
assert(typeof BulkDeploymentResult$ === "object");
assert(typeof ConnectivityInfo$ === "object");
assert(typeof Connector$ === "object");
assert(typeof ConnectorDefinitionVersion$ === "object");
assert(typeof Core$ === "object");
assert(typeof CoreDefinitionVersion$ === "object");
assert(typeof CreateConnectorDefinitionRequest$ === "object");
assert(typeof CreateConnectorDefinitionResponse$ === "object");
assert(typeof CreateConnectorDefinitionVersionRequest$ === "object");
assert(typeof CreateConnectorDefinitionVersionResponse$ === "object");
assert(typeof CreateCoreDefinitionRequest$ === "object");
assert(typeof CreateCoreDefinitionResponse$ === "object");
assert(typeof CreateCoreDefinitionVersionRequest$ === "object");
assert(typeof CreateCoreDefinitionVersionResponse$ === "object");
assert(typeof CreateDeploymentRequest$ === "object");
assert(typeof CreateDeploymentResponse$ === "object");
assert(typeof CreateDeviceDefinitionRequest$ === "object");
assert(typeof CreateDeviceDefinitionResponse$ === "object");
assert(typeof CreateDeviceDefinitionVersionRequest$ === "object");
assert(typeof CreateDeviceDefinitionVersionResponse$ === "object");
assert(typeof CreateFunctionDefinitionRequest$ === "object");
assert(typeof CreateFunctionDefinitionResponse$ === "object");
assert(typeof CreateFunctionDefinitionVersionRequest$ === "object");
assert(typeof CreateFunctionDefinitionVersionResponse$ === "object");
assert(typeof CreateGroupCertificateAuthorityRequest$ === "object");
assert(typeof CreateGroupCertificateAuthorityResponse$ === "object");
assert(typeof CreateGroupRequest$ === "object");
assert(typeof CreateGroupResponse$ === "object");
assert(typeof CreateGroupVersionRequest$ === "object");
assert(typeof CreateGroupVersionResponse$ === "object");
assert(typeof CreateLoggerDefinitionRequest$ === "object");
assert(typeof CreateLoggerDefinitionResponse$ === "object");
assert(typeof CreateLoggerDefinitionVersionRequest$ === "object");
assert(typeof CreateLoggerDefinitionVersionResponse$ === "object");
assert(typeof CreateResourceDefinitionRequest$ === "object");
assert(typeof CreateResourceDefinitionResponse$ === "object");
assert(typeof CreateResourceDefinitionVersionRequest$ === "object");
assert(typeof CreateResourceDefinitionVersionResponse$ === "object");
assert(typeof CreateSoftwareUpdateJobRequest$ === "object");
assert(typeof CreateSoftwareUpdateJobResponse$ === "object");
assert(typeof CreateSubscriptionDefinitionRequest$ === "object");
assert(typeof CreateSubscriptionDefinitionResponse$ === "object");
assert(typeof CreateSubscriptionDefinitionVersionRequest$ === "object");
assert(typeof CreateSubscriptionDefinitionVersionResponse$ === "object");
assert(typeof DefinitionInformation$ === "object");
assert(typeof DeleteConnectorDefinitionRequest$ === "object");
assert(typeof DeleteConnectorDefinitionResponse$ === "object");
assert(typeof DeleteCoreDefinitionRequest$ === "object");
assert(typeof DeleteCoreDefinitionResponse$ === "object");
assert(typeof DeleteDeviceDefinitionRequest$ === "object");
assert(typeof DeleteDeviceDefinitionResponse$ === "object");
assert(typeof DeleteFunctionDefinitionRequest$ === "object");
assert(typeof DeleteFunctionDefinitionResponse$ === "object");
assert(typeof DeleteGroupRequest$ === "object");
assert(typeof DeleteGroupResponse$ === "object");
assert(typeof DeleteLoggerDefinitionRequest$ === "object");
assert(typeof DeleteLoggerDefinitionResponse$ === "object");
assert(typeof DeleteResourceDefinitionRequest$ === "object");
assert(typeof DeleteResourceDefinitionResponse$ === "object");
assert(typeof DeleteSubscriptionDefinitionRequest$ === "object");
assert(typeof DeleteSubscriptionDefinitionResponse$ === "object");
assert(typeof Deployment$ === "object");
assert(typeof Device$ === "object");
assert(typeof DeviceDefinitionVersion$ === "object");
assert(typeof DisassociateRoleFromGroupRequest$ === "object");
assert(typeof DisassociateRoleFromGroupResponse$ === "object");
assert(typeof DisassociateServiceRoleFromAccountRequest$ === "object");
assert(typeof DisassociateServiceRoleFromAccountResponse$ === "object");
assert(typeof ErrorDetail$ === "object");
assert(typeof Function$ === "object");
assert(typeof FunctionConfiguration$ === "object");
assert(typeof FunctionConfigurationEnvironment$ === "object");
assert(typeof FunctionDefaultConfig$ === "object");
assert(typeof FunctionDefaultExecutionConfig$ === "object");
assert(typeof FunctionDefinitionVersion$ === "object");
assert(typeof FunctionExecutionConfig$ === "object");
assert(typeof FunctionRunAsConfig$ === "object");
assert(typeof GetAssociatedRoleRequest$ === "object");
assert(typeof GetAssociatedRoleResponse$ === "object");
assert(typeof GetBulkDeploymentStatusRequest$ === "object");
assert(typeof GetBulkDeploymentStatusResponse$ === "object");
assert(typeof GetConnectivityInfoRequest$ === "object");
assert(typeof GetConnectivityInfoResponse$ === "object");
assert(typeof GetConnectorDefinitionRequest$ === "object");
assert(typeof GetConnectorDefinitionResponse$ === "object");
assert(typeof GetConnectorDefinitionVersionRequest$ === "object");
assert(typeof GetConnectorDefinitionVersionResponse$ === "object");
assert(typeof GetCoreDefinitionRequest$ === "object");
assert(typeof GetCoreDefinitionResponse$ === "object");
assert(typeof GetCoreDefinitionVersionRequest$ === "object");
assert(typeof GetCoreDefinitionVersionResponse$ === "object");
assert(typeof GetDeploymentStatusRequest$ === "object");
assert(typeof GetDeploymentStatusResponse$ === "object");
assert(typeof GetDeviceDefinitionRequest$ === "object");
assert(typeof GetDeviceDefinitionResponse$ === "object");
assert(typeof GetDeviceDefinitionVersionRequest$ === "object");
assert(typeof GetDeviceDefinitionVersionResponse$ === "object");
assert(typeof GetFunctionDefinitionRequest$ === "object");
assert(typeof GetFunctionDefinitionResponse$ === "object");
assert(typeof GetFunctionDefinitionVersionRequest$ === "object");
assert(typeof GetFunctionDefinitionVersionResponse$ === "object");
assert(typeof GetGroupCertificateAuthorityRequest$ === "object");
assert(typeof GetGroupCertificateAuthorityResponse$ === "object");
assert(typeof GetGroupCertificateConfigurationRequest$ === "object");
assert(typeof GetGroupCertificateConfigurationResponse$ === "object");
assert(typeof GetGroupRequest$ === "object");
assert(typeof GetGroupResponse$ === "object");
assert(typeof GetGroupVersionRequest$ === "object");
assert(typeof GetGroupVersionResponse$ === "object");
assert(typeof GetLoggerDefinitionRequest$ === "object");
assert(typeof GetLoggerDefinitionResponse$ === "object");
assert(typeof GetLoggerDefinitionVersionRequest$ === "object");
assert(typeof GetLoggerDefinitionVersionResponse$ === "object");
assert(typeof GetResourceDefinitionRequest$ === "object");
assert(typeof GetResourceDefinitionResponse$ === "object");
assert(typeof GetResourceDefinitionVersionRequest$ === "object");
assert(typeof GetResourceDefinitionVersionResponse$ === "object");
assert(typeof GetServiceRoleForAccountRequest$ === "object");
assert(typeof GetServiceRoleForAccountResponse$ === "object");
assert(typeof GetSubscriptionDefinitionRequest$ === "object");
assert(typeof GetSubscriptionDefinitionResponse$ === "object");
assert(typeof GetSubscriptionDefinitionVersionRequest$ === "object");
assert(typeof GetSubscriptionDefinitionVersionResponse$ === "object");
assert(typeof GetThingRuntimeConfigurationRequest$ === "object");
assert(typeof GetThingRuntimeConfigurationResponse$ === "object");
assert(typeof GroupCertificateAuthorityProperties$ === "object");
assert(typeof GroupInformation$ === "object");
assert(typeof GroupOwnerSetting$ === "object");
assert(typeof GroupVersion$ === "object");
assert(typeof ListBulkDeploymentDetailedReportsRequest$ === "object");
assert(typeof ListBulkDeploymentDetailedReportsResponse$ === "object");
assert(typeof ListBulkDeploymentsRequest$ === "object");
assert(typeof ListBulkDeploymentsResponse$ === "object");
assert(typeof ListConnectorDefinitionsRequest$ === "object");
assert(typeof ListConnectorDefinitionsResponse$ === "object");
assert(typeof ListConnectorDefinitionVersionsRequest$ === "object");
assert(typeof ListConnectorDefinitionVersionsResponse$ === "object");
assert(typeof ListCoreDefinitionsRequest$ === "object");
assert(typeof ListCoreDefinitionsResponse$ === "object");
assert(typeof ListCoreDefinitionVersionsRequest$ === "object");
assert(typeof ListCoreDefinitionVersionsResponse$ === "object");
assert(typeof ListDeploymentsRequest$ === "object");
assert(typeof ListDeploymentsResponse$ === "object");
assert(typeof ListDeviceDefinitionsRequest$ === "object");
assert(typeof ListDeviceDefinitionsResponse$ === "object");
assert(typeof ListDeviceDefinitionVersionsRequest$ === "object");
assert(typeof ListDeviceDefinitionVersionsResponse$ === "object");
assert(typeof ListFunctionDefinitionsRequest$ === "object");
assert(typeof ListFunctionDefinitionsResponse$ === "object");
assert(typeof ListFunctionDefinitionVersionsRequest$ === "object");
assert(typeof ListFunctionDefinitionVersionsResponse$ === "object");
assert(typeof ListGroupCertificateAuthoritiesRequest$ === "object");
assert(typeof ListGroupCertificateAuthoritiesResponse$ === "object");
assert(typeof ListGroupsRequest$ === "object");
assert(typeof ListGroupsResponse$ === "object");
assert(typeof ListGroupVersionsRequest$ === "object");
assert(typeof ListGroupVersionsResponse$ === "object");
assert(typeof ListLoggerDefinitionsRequest$ === "object");
assert(typeof ListLoggerDefinitionsResponse$ === "object");
assert(typeof ListLoggerDefinitionVersionsRequest$ === "object");
assert(typeof ListLoggerDefinitionVersionsResponse$ === "object");
assert(typeof ListResourceDefinitionsRequest$ === "object");
assert(typeof ListResourceDefinitionsResponse$ === "object");
assert(typeof ListResourceDefinitionVersionsRequest$ === "object");
assert(typeof ListResourceDefinitionVersionsResponse$ === "object");
assert(typeof ListSubscriptionDefinitionsRequest$ === "object");
assert(typeof ListSubscriptionDefinitionsResponse$ === "object");
assert(typeof ListSubscriptionDefinitionVersionsRequest$ === "object");
assert(typeof ListSubscriptionDefinitionVersionsResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof LocalDeviceResourceData$ === "object");
assert(typeof LocalVolumeResourceData$ === "object");
assert(typeof Logger$ === "object");
assert(typeof LoggerDefinitionVersion$ === "object");
assert(typeof ResetDeploymentsRequest$ === "object");
assert(typeof ResetDeploymentsResponse$ === "object");
assert(typeof Resource$ === "object");
assert(typeof ResourceAccessPolicy$ === "object");
assert(typeof ResourceDataContainer$ === "object");
assert(typeof ResourceDefinitionVersion$ === "object");
assert(typeof ResourceDownloadOwnerSetting$ === "object");
assert(typeof RuntimeConfiguration$ === "object");
assert(typeof S3MachineLearningModelResourceData$ === "object");
assert(typeof SageMakerMachineLearningModelResourceData$ === "object");
assert(typeof SecretsManagerSecretResourceData$ === "object");
assert(typeof StartBulkDeploymentRequest$ === "object");
assert(typeof StartBulkDeploymentResponse$ === "object");
assert(typeof StopBulkDeploymentRequest$ === "object");
assert(typeof StopBulkDeploymentResponse$ === "object");
assert(typeof Subscription$ === "object");
assert(typeof SubscriptionDefinitionVersion$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TelemetryConfiguration$ === "object");
assert(typeof TelemetryConfigurationUpdate$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UpdateConnectivityInfoRequest$ === "object");
assert(typeof UpdateConnectivityInfoResponse$ === "object");
assert(typeof UpdateConnectorDefinitionRequest$ === "object");
assert(typeof UpdateConnectorDefinitionResponse$ === "object");
assert(typeof UpdateCoreDefinitionRequest$ === "object");
assert(typeof UpdateCoreDefinitionResponse$ === "object");
assert(typeof UpdateDeviceDefinitionRequest$ === "object");
assert(typeof UpdateDeviceDefinitionResponse$ === "object");
assert(typeof UpdateFunctionDefinitionRequest$ === "object");
assert(typeof UpdateFunctionDefinitionResponse$ === "object");
assert(typeof UpdateGroupCertificateConfigurationRequest$ === "object");
assert(typeof UpdateGroupCertificateConfigurationResponse$ === "object");
assert(typeof UpdateGroupRequest$ === "object");
assert(typeof UpdateGroupResponse$ === "object");
assert(typeof UpdateLoggerDefinitionRequest$ === "object");
assert(typeof UpdateLoggerDefinitionResponse$ === "object");
assert(typeof UpdateResourceDefinitionRequest$ === "object");
assert(typeof UpdateResourceDefinitionResponse$ === "object");
assert(typeof UpdateSubscriptionDefinitionRequest$ === "object");
assert(typeof UpdateSubscriptionDefinitionResponse$ === "object");
assert(typeof UpdateThingRuntimeConfigurationRequest$ === "object");
assert(typeof UpdateThingRuntimeConfigurationResponse$ === "object");
assert(typeof VersionInformation$ === "object");
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
assert(typeof BadRequestException$ === "object");
assert(InternalServerErrorException.prototype instanceof GreengrassServiceException);
assert(typeof InternalServerErrorException$ === "object");
assert(GreengrassServiceException.prototype instanceof Error);
console.log(`Greengrass index test passed.`);
