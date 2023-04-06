// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map as __map,
  resolvedPath as __resolvedPath,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  AssociateRoleToGroupCommandInput,
  AssociateRoleToGroupCommandOutput,
} from "../commands/AssociateRoleToGroupCommand";
import {
  AssociateServiceRoleToAccountCommandInput,
  AssociateServiceRoleToAccountCommandOutput,
} from "../commands/AssociateServiceRoleToAccountCommand";
import {
  CreateConnectorDefinitionCommandInput,
  CreateConnectorDefinitionCommandOutput,
} from "../commands/CreateConnectorDefinitionCommand";
import {
  CreateConnectorDefinitionVersionCommandInput,
  CreateConnectorDefinitionVersionCommandOutput,
} from "../commands/CreateConnectorDefinitionVersionCommand";
import {
  CreateCoreDefinitionCommandInput,
  CreateCoreDefinitionCommandOutput,
} from "../commands/CreateCoreDefinitionCommand";
import {
  CreateCoreDefinitionVersionCommandInput,
  CreateCoreDefinitionVersionCommandOutput,
} from "../commands/CreateCoreDefinitionVersionCommand";
import { CreateDeploymentCommandInput, CreateDeploymentCommandOutput } from "../commands/CreateDeploymentCommand";
import {
  CreateDeviceDefinitionCommandInput,
  CreateDeviceDefinitionCommandOutput,
} from "../commands/CreateDeviceDefinitionCommand";
import {
  CreateDeviceDefinitionVersionCommandInput,
  CreateDeviceDefinitionVersionCommandOutput,
} from "../commands/CreateDeviceDefinitionVersionCommand";
import {
  CreateFunctionDefinitionCommandInput,
  CreateFunctionDefinitionCommandOutput,
} from "../commands/CreateFunctionDefinitionCommand";
import {
  CreateFunctionDefinitionVersionCommandInput,
  CreateFunctionDefinitionVersionCommandOutput,
} from "../commands/CreateFunctionDefinitionVersionCommand";
import {
  CreateGroupCertificateAuthorityCommandInput,
  CreateGroupCertificateAuthorityCommandOutput,
} from "../commands/CreateGroupCertificateAuthorityCommand";
import { CreateGroupCommandInput, CreateGroupCommandOutput } from "../commands/CreateGroupCommand";
import { CreateGroupVersionCommandInput, CreateGroupVersionCommandOutput } from "../commands/CreateGroupVersionCommand";
import {
  CreateLoggerDefinitionCommandInput,
  CreateLoggerDefinitionCommandOutput,
} from "../commands/CreateLoggerDefinitionCommand";
import {
  CreateLoggerDefinitionVersionCommandInput,
  CreateLoggerDefinitionVersionCommandOutput,
} from "../commands/CreateLoggerDefinitionVersionCommand";
import {
  CreateResourceDefinitionCommandInput,
  CreateResourceDefinitionCommandOutput,
} from "../commands/CreateResourceDefinitionCommand";
import {
  CreateResourceDefinitionVersionCommandInput,
  CreateResourceDefinitionVersionCommandOutput,
} from "../commands/CreateResourceDefinitionVersionCommand";
import {
  CreateSoftwareUpdateJobCommandInput,
  CreateSoftwareUpdateJobCommandOutput,
} from "../commands/CreateSoftwareUpdateJobCommand";
import {
  CreateSubscriptionDefinitionCommandInput,
  CreateSubscriptionDefinitionCommandOutput,
} from "../commands/CreateSubscriptionDefinitionCommand";
import {
  CreateSubscriptionDefinitionVersionCommandInput,
  CreateSubscriptionDefinitionVersionCommandOutput,
} from "../commands/CreateSubscriptionDefinitionVersionCommand";
import {
  DeleteConnectorDefinitionCommandInput,
  DeleteConnectorDefinitionCommandOutput,
} from "../commands/DeleteConnectorDefinitionCommand";
import {
  DeleteCoreDefinitionCommandInput,
  DeleteCoreDefinitionCommandOutput,
} from "../commands/DeleteCoreDefinitionCommand";
import {
  DeleteDeviceDefinitionCommandInput,
  DeleteDeviceDefinitionCommandOutput,
} from "../commands/DeleteDeviceDefinitionCommand";
import {
  DeleteFunctionDefinitionCommandInput,
  DeleteFunctionDefinitionCommandOutput,
} from "../commands/DeleteFunctionDefinitionCommand";
import { DeleteGroupCommandInput, DeleteGroupCommandOutput } from "../commands/DeleteGroupCommand";
import {
  DeleteLoggerDefinitionCommandInput,
  DeleteLoggerDefinitionCommandOutput,
} from "../commands/DeleteLoggerDefinitionCommand";
import {
  DeleteResourceDefinitionCommandInput,
  DeleteResourceDefinitionCommandOutput,
} from "../commands/DeleteResourceDefinitionCommand";
import {
  DeleteSubscriptionDefinitionCommandInput,
  DeleteSubscriptionDefinitionCommandOutput,
} from "../commands/DeleteSubscriptionDefinitionCommand";
import {
  DisassociateRoleFromGroupCommandInput,
  DisassociateRoleFromGroupCommandOutput,
} from "../commands/DisassociateRoleFromGroupCommand";
import {
  DisassociateServiceRoleFromAccountCommandInput,
  DisassociateServiceRoleFromAccountCommandOutput,
} from "../commands/DisassociateServiceRoleFromAccountCommand";
import { GetAssociatedRoleCommandInput, GetAssociatedRoleCommandOutput } from "../commands/GetAssociatedRoleCommand";
import {
  GetBulkDeploymentStatusCommandInput,
  GetBulkDeploymentStatusCommandOutput,
} from "../commands/GetBulkDeploymentStatusCommand";
import {
  GetConnectivityInfoCommandInput,
  GetConnectivityInfoCommandOutput,
} from "../commands/GetConnectivityInfoCommand";
import {
  GetConnectorDefinitionCommandInput,
  GetConnectorDefinitionCommandOutput,
} from "../commands/GetConnectorDefinitionCommand";
import {
  GetConnectorDefinitionVersionCommandInput,
  GetConnectorDefinitionVersionCommandOutput,
} from "../commands/GetConnectorDefinitionVersionCommand";
import { GetCoreDefinitionCommandInput, GetCoreDefinitionCommandOutput } from "../commands/GetCoreDefinitionCommand";
import {
  GetCoreDefinitionVersionCommandInput,
  GetCoreDefinitionVersionCommandOutput,
} from "../commands/GetCoreDefinitionVersionCommand";
import {
  GetDeploymentStatusCommandInput,
  GetDeploymentStatusCommandOutput,
} from "../commands/GetDeploymentStatusCommand";
import {
  GetDeviceDefinitionCommandInput,
  GetDeviceDefinitionCommandOutput,
} from "../commands/GetDeviceDefinitionCommand";
import {
  GetDeviceDefinitionVersionCommandInput,
  GetDeviceDefinitionVersionCommandOutput,
} from "../commands/GetDeviceDefinitionVersionCommand";
import {
  GetFunctionDefinitionCommandInput,
  GetFunctionDefinitionCommandOutput,
} from "../commands/GetFunctionDefinitionCommand";
import {
  GetFunctionDefinitionVersionCommandInput,
  GetFunctionDefinitionVersionCommandOutput,
} from "../commands/GetFunctionDefinitionVersionCommand";
import {
  GetGroupCertificateAuthorityCommandInput,
  GetGroupCertificateAuthorityCommandOutput,
} from "../commands/GetGroupCertificateAuthorityCommand";
import {
  GetGroupCertificateConfigurationCommandInput,
  GetGroupCertificateConfigurationCommandOutput,
} from "../commands/GetGroupCertificateConfigurationCommand";
import { GetGroupCommandInput, GetGroupCommandOutput } from "../commands/GetGroupCommand";
import { GetGroupVersionCommandInput, GetGroupVersionCommandOutput } from "../commands/GetGroupVersionCommand";
import {
  GetLoggerDefinitionCommandInput,
  GetLoggerDefinitionCommandOutput,
} from "../commands/GetLoggerDefinitionCommand";
import {
  GetLoggerDefinitionVersionCommandInput,
  GetLoggerDefinitionVersionCommandOutput,
} from "../commands/GetLoggerDefinitionVersionCommand";
import {
  GetResourceDefinitionCommandInput,
  GetResourceDefinitionCommandOutput,
} from "../commands/GetResourceDefinitionCommand";
import {
  GetResourceDefinitionVersionCommandInput,
  GetResourceDefinitionVersionCommandOutput,
} from "../commands/GetResourceDefinitionVersionCommand";
import {
  GetServiceRoleForAccountCommandInput,
  GetServiceRoleForAccountCommandOutput,
} from "../commands/GetServiceRoleForAccountCommand";
import {
  GetSubscriptionDefinitionCommandInput,
  GetSubscriptionDefinitionCommandOutput,
} from "../commands/GetSubscriptionDefinitionCommand";
import {
  GetSubscriptionDefinitionVersionCommandInput,
  GetSubscriptionDefinitionVersionCommandOutput,
} from "../commands/GetSubscriptionDefinitionVersionCommand";
import {
  GetThingRuntimeConfigurationCommandInput,
  GetThingRuntimeConfigurationCommandOutput,
} from "../commands/GetThingRuntimeConfigurationCommand";
import {
  ListBulkDeploymentDetailedReportsCommandInput,
  ListBulkDeploymentDetailedReportsCommandOutput,
} from "../commands/ListBulkDeploymentDetailedReportsCommand";
import {
  ListBulkDeploymentsCommandInput,
  ListBulkDeploymentsCommandOutput,
} from "../commands/ListBulkDeploymentsCommand";
import {
  ListConnectorDefinitionsCommandInput,
  ListConnectorDefinitionsCommandOutput,
} from "../commands/ListConnectorDefinitionsCommand";
import {
  ListConnectorDefinitionVersionsCommandInput,
  ListConnectorDefinitionVersionsCommandOutput,
} from "../commands/ListConnectorDefinitionVersionsCommand";
import {
  ListCoreDefinitionsCommandInput,
  ListCoreDefinitionsCommandOutput,
} from "../commands/ListCoreDefinitionsCommand";
import {
  ListCoreDefinitionVersionsCommandInput,
  ListCoreDefinitionVersionsCommandOutput,
} from "../commands/ListCoreDefinitionVersionsCommand";
import { ListDeploymentsCommandInput, ListDeploymentsCommandOutput } from "../commands/ListDeploymentsCommand";
import {
  ListDeviceDefinitionsCommandInput,
  ListDeviceDefinitionsCommandOutput,
} from "../commands/ListDeviceDefinitionsCommand";
import {
  ListDeviceDefinitionVersionsCommandInput,
  ListDeviceDefinitionVersionsCommandOutput,
} from "../commands/ListDeviceDefinitionVersionsCommand";
import {
  ListFunctionDefinitionsCommandInput,
  ListFunctionDefinitionsCommandOutput,
} from "../commands/ListFunctionDefinitionsCommand";
import {
  ListFunctionDefinitionVersionsCommandInput,
  ListFunctionDefinitionVersionsCommandOutput,
} from "../commands/ListFunctionDefinitionVersionsCommand";
import {
  ListGroupCertificateAuthoritiesCommandInput,
  ListGroupCertificateAuthoritiesCommandOutput,
} from "../commands/ListGroupCertificateAuthoritiesCommand";
import { ListGroupsCommandInput, ListGroupsCommandOutput } from "../commands/ListGroupsCommand";
import { ListGroupVersionsCommandInput, ListGroupVersionsCommandOutput } from "../commands/ListGroupVersionsCommand";
import {
  ListLoggerDefinitionsCommandInput,
  ListLoggerDefinitionsCommandOutput,
} from "../commands/ListLoggerDefinitionsCommand";
import {
  ListLoggerDefinitionVersionsCommandInput,
  ListLoggerDefinitionVersionsCommandOutput,
} from "../commands/ListLoggerDefinitionVersionsCommand";
import {
  ListResourceDefinitionsCommandInput,
  ListResourceDefinitionsCommandOutput,
} from "../commands/ListResourceDefinitionsCommand";
import {
  ListResourceDefinitionVersionsCommandInput,
  ListResourceDefinitionVersionsCommandOutput,
} from "../commands/ListResourceDefinitionVersionsCommand";
import {
  ListSubscriptionDefinitionsCommandInput,
  ListSubscriptionDefinitionsCommandOutput,
} from "../commands/ListSubscriptionDefinitionsCommand";
import {
  ListSubscriptionDefinitionVersionsCommandInput,
  ListSubscriptionDefinitionVersionsCommandOutput,
} from "../commands/ListSubscriptionDefinitionVersionsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { ResetDeploymentsCommandInput, ResetDeploymentsCommandOutput } from "../commands/ResetDeploymentsCommand";
import {
  StartBulkDeploymentCommandInput,
  StartBulkDeploymentCommandOutput,
} from "../commands/StartBulkDeploymentCommand";
import { StopBulkDeploymentCommandInput, StopBulkDeploymentCommandOutput } from "../commands/StopBulkDeploymentCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateConnectivityInfoCommandInput,
  UpdateConnectivityInfoCommandOutput,
} from "../commands/UpdateConnectivityInfoCommand";
import {
  UpdateConnectorDefinitionCommandInput,
  UpdateConnectorDefinitionCommandOutput,
} from "../commands/UpdateConnectorDefinitionCommand";
import {
  UpdateCoreDefinitionCommandInput,
  UpdateCoreDefinitionCommandOutput,
} from "../commands/UpdateCoreDefinitionCommand";
import {
  UpdateDeviceDefinitionCommandInput,
  UpdateDeviceDefinitionCommandOutput,
} from "../commands/UpdateDeviceDefinitionCommand";
import {
  UpdateFunctionDefinitionCommandInput,
  UpdateFunctionDefinitionCommandOutput,
} from "../commands/UpdateFunctionDefinitionCommand";
import {
  UpdateGroupCertificateConfigurationCommandInput,
  UpdateGroupCertificateConfigurationCommandOutput,
} from "../commands/UpdateGroupCertificateConfigurationCommand";
import { UpdateGroupCommandInput, UpdateGroupCommandOutput } from "../commands/UpdateGroupCommand";
import {
  UpdateLoggerDefinitionCommandInput,
  UpdateLoggerDefinitionCommandOutput,
} from "../commands/UpdateLoggerDefinitionCommand";
import {
  UpdateResourceDefinitionCommandInput,
  UpdateResourceDefinitionCommandOutput,
} from "../commands/UpdateResourceDefinitionCommand";
import {
  UpdateSubscriptionDefinitionCommandInput,
  UpdateSubscriptionDefinitionCommandOutput,
} from "../commands/UpdateSubscriptionDefinitionCommand";
import {
  UpdateThingRuntimeConfigurationCommandInput,
  UpdateThingRuntimeConfigurationCommandOutput,
} from "../commands/UpdateThingRuntimeConfigurationCommand";
import { GreengrassServiceException as __BaseException } from "../models/GreengrassServiceException";
import {
  BadRequestException,
  BulkDeployment,
  BulkDeploymentMetrics,
  BulkDeploymentResult,
  ConnectivityInfo,
  Connector,
  ConnectorDefinitionVersion,
  Core,
  CoreDefinitionVersion,
  DefinitionInformation,
  Deployment,
  Device,
  DeviceDefinitionVersion,
  ErrorDetail,
  Function,
  FunctionConfiguration,
  FunctionConfigurationEnvironment,
  FunctionDefaultConfig,
  FunctionDefaultExecutionConfig,
  FunctionDefinitionVersion,
  FunctionExecutionConfig,
  FunctionRunAsConfig,
  GroupCertificateAuthorityProperties,
  GroupInformation,
  GroupOwnerSetting,
  GroupVersion,
  InternalServerErrorException,
  LocalDeviceResourceData,
  LocalVolumeResourceData,
  Logger,
  LoggerDefinitionVersion,
  Resource,
  ResourceAccessPolicy,
  ResourceDataContainer,
  ResourceDefinitionVersion,
  ResourceDownloadOwnerSetting,
  RuntimeConfiguration,
  S3MachineLearningModelResourceData,
  SageMakerMachineLearningModelResourceData,
  SecretsManagerSecretResourceData,
  Subscription,
  SubscriptionDefinitionVersion,
  TelemetryConfiguration,
  TelemetryConfigurationUpdate,
  VersionInformation,
} from "../models/models_0";

/**
 * serializeAws_restJson1AssociateRoleToGroupCommand
 */
export const se_AssociateRoleToGroupCommand = async (
  input: AssociateRoleToGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/greengrass/groups/{GroupId}/role";
  resolvedPath = __resolvedPath(resolvedPath, input, "GroupId", () => input.GroupId!, "{GroupId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1AssociateServiceRoleToAccountCommand
 */
export const se_AssociateServiceRoleToAccountCommand = async (
  input: AssociateServiceRoleToAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/greengrass/servicerole";
  let body: any;
  body = JSON.stringify({
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateConnectorDefinitionCommand
 */
export const se_CreateConnectorDefinitionCommand = async (
  input: CreateConnectorDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amzn-client-token": input.AmznClientToken!,
  });
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/greengrass/definition/connectors";
  let body: any;
  body = JSON.stringify({
    ...(input.InitialVersion != null && {
      InitialVersion: se_ConnectorDefinitionVersion(input.InitialVersion, context),
    }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.tags != null && { tags: se_Tags(input.tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateConnectorDefinitionVersionCommand
 */
export const se_CreateConnectorDefinitionVersionCommand = async (
  input: CreateConnectorDefinitionVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amzn-client-token": input.AmznClientToken!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/greengrass/definition/connectors/{ConnectorDefinitionId}/versions";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ConnectorDefinitionId",
    () => input.ConnectorDefinitionId!,
    "{ConnectorDefinitionId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.Connectors != null && { Connectors: se___listOfConnector(input.Connectors, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateCoreDefinitionCommand
 */
export const se_CreateCoreDefinitionCommand = async (
  input: CreateCoreDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amzn-client-token": input.AmznClientToken!,
  });
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/greengrass/definition/cores";
  let body: any;
  body = JSON.stringify({
    ...(input.InitialVersion != null && { InitialVersion: se_CoreDefinitionVersion(input.InitialVersion, context) }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.tags != null && { tags: se_Tags(input.tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateCoreDefinitionVersionCommand
 */
export const se_CreateCoreDefinitionVersionCommand = async (
  input: CreateCoreDefinitionVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amzn-client-token": input.AmznClientToken!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/greengrass/definition/cores/{CoreDefinitionId}/versions";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "CoreDefinitionId",
    () => input.CoreDefinitionId!,
    "{CoreDefinitionId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.Cores != null && { Cores: se___listOfCore(input.Cores, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateDeploymentCommand
 */
export const se_CreateDeploymentCommand = async (
  input: CreateDeploymentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amzn-client-token": input.AmznClientToken!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/greengrass/groups/{GroupId}/deployments";
  resolvedPath = __resolvedPath(resolvedPath, input, "GroupId", () => input.GroupId!, "{GroupId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.DeploymentId != null && { DeploymentId: input.DeploymentId }),
    ...(input.DeploymentType != null && { DeploymentType: input.DeploymentType }),
    ...(input.GroupVersionId != null && { GroupVersionId: input.GroupVersionId }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateDeviceDefinitionCommand
 */
export const se_CreateDeviceDefinitionCommand = async (
  input: CreateDeviceDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amzn-client-token": input.AmznClientToken!,
  });
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/greengrass/definition/devices";
  let body: any;
  body = JSON.stringify({
    ...(input.InitialVersion != null && { InitialVersion: se_DeviceDefinitionVersion(input.InitialVersion, context) }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.tags != null && { tags: se_Tags(input.tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateDeviceDefinitionVersionCommand
 */
export const se_CreateDeviceDefinitionVersionCommand = async (
  input: CreateDeviceDefinitionVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amzn-client-token": input.AmznClientToken!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/greengrass/definition/devices/{DeviceDefinitionId}/versions";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "DeviceDefinitionId",
    () => input.DeviceDefinitionId!,
    "{DeviceDefinitionId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.Devices != null && { Devices: se___listOfDevice(input.Devices, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateFunctionDefinitionCommand
 */
export const se_CreateFunctionDefinitionCommand = async (
  input: CreateFunctionDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amzn-client-token": input.AmznClientToken!,
  });
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/greengrass/definition/functions";
  let body: any;
  body = JSON.stringify({
    ...(input.InitialVersion != null && {
      InitialVersion: se_FunctionDefinitionVersion(input.InitialVersion, context),
    }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.tags != null && { tags: se_Tags(input.tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateFunctionDefinitionVersionCommand
 */
export const se_CreateFunctionDefinitionVersionCommand = async (
  input: CreateFunctionDefinitionVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amzn-client-token": input.AmznClientToken!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/greengrass/definition/functions/{FunctionDefinitionId}/versions";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "FunctionDefinitionId",
    () => input.FunctionDefinitionId!,
    "{FunctionDefinitionId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.DefaultConfig != null && { DefaultConfig: se_FunctionDefaultConfig(input.DefaultConfig, context) }),
    ...(input.Functions != null && { Functions: se___listOfFunction(input.Functions, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateGroupCommand
 */
export const se_CreateGroupCommand = async (
  input: CreateGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amzn-client-token": input.AmznClientToken!,
  });
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/greengrass/groups";
  let body: any;
  body = JSON.stringify({
    ...(input.InitialVersion != null && { InitialVersion: se_GroupVersion(input.InitialVersion, context) }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.tags != null && { tags: se_Tags(input.tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateGroupCertificateAuthorityCommand
 */
export const se_CreateGroupCertificateAuthorityCommand = async (
  input: CreateGroupCertificateAuthorityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amzn-client-token": input.AmznClientToken!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/greengrass/groups/{GroupId}/certificateauthorities";
  resolvedPath = __resolvedPath(resolvedPath, input, "GroupId", () => input.GroupId!, "{GroupId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateGroupVersionCommand
 */
export const se_CreateGroupVersionCommand = async (
  input: CreateGroupVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amzn-client-token": input.AmznClientToken!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/greengrass/groups/{GroupId}/versions";
  resolvedPath = __resolvedPath(resolvedPath, input, "GroupId", () => input.GroupId!, "{GroupId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.ConnectorDefinitionVersionArn != null && {
      ConnectorDefinitionVersionArn: input.ConnectorDefinitionVersionArn,
    }),
    ...(input.CoreDefinitionVersionArn != null && { CoreDefinitionVersionArn: input.CoreDefinitionVersionArn }),
    ...(input.DeviceDefinitionVersionArn != null && { DeviceDefinitionVersionArn: input.DeviceDefinitionVersionArn }),
    ...(input.FunctionDefinitionVersionArn != null && {
      FunctionDefinitionVersionArn: input.FunctionDefinitionVersionArn,
    }),
    ...(input.LoggerDefinitionVersionArn != null && { LoggerDefinitionVersionArn: input.LoggerDefinitionVersionArn }),
    ...(input.ResourceDefinitionVersionArn != null && {
      ResourceDefinitionVersionArn: input.ResourceDefinitionVersionArn,
    }),
    ...(input.SubscriptionDefinitionVersionArn != null && {
      SubscriptionDefinitionVersionArn: input.SubscriptionDefinitionVersionArn,
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateLoggerDefinitionCommand
 */
export const se_CreateLoggerDefinitionCommand = async (
  input: CreateLoggerDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amzn-client-token": input.AmznClientToken!,
  });
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/greengrass/definition/loggers";
  let body: any;
  body = JSON.stringify({
    ...(input.InitialVersion != null && { InitialVersion: se_LoggerDefinitionVersion(input.InitialVersion, context) }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.tags != null && { tags: se_Tags(input.tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateLoggerDefinitionVersionCommand
 */
export const se_CreateLoggerDefinitionVersionCommand = async (
  input: CreateLoggerDefinitionVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amzn-client-token": input.AmznClientToken!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/greengrass/definition/loggers/{LoggerDefinitionId}/versions";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "LoggerDefinitionId",
    () => input.LoggerDefinitionId!,
    "{LoggerDefinitionId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.Loggers != null && { Loggers: se___listOfLogger(input.Loggers, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateResourceDefinitionCommand
 */
export const se_CreateResourceDefinitionCommand = async (
  input: CreateResourceDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amzn-client-token": input.AmznClientToken!,
  });
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/greengrass/definition/resources";
  let body: any;
  body = JSON.stringify({
    ...(input.InitialVersion != null && {
      InitialVersion: se_ResourceDefinitionVersion(input.InitialVersion, context),
    }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.tags != null && { tags: se_Tags(input.tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateResourceDefinitionVersionCommand
 */
export const se_CreateResourceDefinitionVersionCommand = async (
  input: CreateResourceDefinitionVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amzn-client-token": input.AmznClientToken!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/greengrass/definition/resources/{ResourceDefinitionId}/versions";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ResourceDefinitionId",
    () => input.ResourceDefinitionId!,
    "{ResourceDefinitionId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.Resources != null && { Resources: se___listOfResource(input.Resources, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateSoftwareUpdateJobCommand
 */
export const se_CreateSoftwareUpdateJobCommand = async (
  input: CreateSoftwareUpdateJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amzn-client-token": input.AmznClientToken!,
  });
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/greengrass/updates";
  let body: any;
  body = JSON.stringify({
    ...(input.S3UrlSignerRole != null && { S3UrlSignerRole: input.S3UrlSignerRole }),
    ...(input.SoftwareToUpdate != null && { SoftwareToUpdate: input.SoftwareToUpdate }),
    ...(input.UpdateAgentLogLevel != null && { UpdateAgentLogLevel: input.UpdateAgentLogLevel }),
    ...(input.UpdateTargets != null && { UpdateTargets: se_UpdateTargets(input.UpdateTargets, context) }),
    ...(input.UpdateTargetsArchitecture != null && { UpdateTargetsArchitecture: input.UpdateTargetsArchitecture }),
    ...(input.UpdateTargetsOperatingSystem != null && {
      UpdateTargetsOperatingSystem: input.UpdateTargetsOperatingSystem,
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateSubscriptionDefinitionCommand
 */
export const se_CreateSubscriptionDefinitionCommand = async (
  input: CreateSubscriptionDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amzn-client-token": input.AmznClientToken!,
  });
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/greengrass/definition/subscriptions";
  let body: any;
  body = JSON.stringify({
    ...(input.InitialVersion != null && {
      InitialVersion: se_SubscriptionDefinitionVersion(input.InitialVersion, context),
    }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.tags != null && { tags: se_Tags(input.tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateSubscriptionDefinitionVersionCommand
 */
export const se_CreateSubscriptionDefinitionVersionCommand = async (
  input: CreateSubscriptionDefinitionVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amzn-client-token": input.AmznClientToken!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/greengrass/definition/subscriptions/{SubscriptionDefinitionId}/versions";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "SubscriptionDefinitionId",
    () => input.SubscriptionDefinitionId!,
    "{SubscriptionDefinitionId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.Subscriptions != null && { Subscriptions: se___listOfSubscription(input.Subscriptions, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteConnectorDefinitionCommand
 */
export const se_DeleteConnectorDefinitionCommand = async (
  input: DeleteConnectorDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/greengrass/definition/connectors/{ConnectorDefinitionId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ConnectorDefinitionId",
    () => input.ConnectorDefinitionId!,
    "{ConnectorDefinitionId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteCoreDefinitionCommand
 */
export const se_DeleteCoreDefinitionCommand = async (
  input: DeleteCoreDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/greengrass/definition/cores/{CoreDefinitionId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "CoreDefinitionId",
    () => input.CoreDefinitionId!,
    "{CoreDefinitionId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteDeviceDefinitionCommand
 */
export const se_DeleteDeviceDefinitionCommand = async (
  input: DeleteDeviceDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/greengrass/definition/devices/{DeviceDefinitionId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "DeviceDefinitionId",
    () => input.DeviceDefinitionId!,
    "{DeviceDefinitionId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteFunctionDefinitionCommand
 */
export const se_DeleteFunctionDefinitionCommand = async (
  input: DeleteFunctionDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/greengrass/definition/functions/{FunctionDefinitionId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "FunctionDefinitionId",
    () => input.FunctionDefinitionId!,
    "{FunctionDefinitionId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteGroupCommand
 */
export const se_DeleteGroupCommand = async (
  input: DeleteGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/greengrass/groups/{GroupId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "GroupId", () => input.GroupId!, "{GroupId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteLoggerDefinitionCommand
 */
export const se_DeleteLoggerDefinitionCommand = async (
  input: DeleteLoggerDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/greengrass/definition/loggers/{LoggerDefinitionId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "LoggerDefinitionId",
    () => input.LoggerDefinitionId!,
    "{LoggerDefinitionId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteResourceDefinitionCommand
 */
export const se_DeleteResourceDefinitionCommand = async (
  input: DeleteResourceDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/greengrass/definition/resources/{ResourceDefinitionId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ResourceDefinitionId",
    () => input.ResourceDefinitionId!,
    "{ResourceDefinitionId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteSubscriptionDefinitionCommand
 */
export const se_DeleteSubscriptionDefinitionCommand = async (
  input: DeleteSubscriptionDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/greengrass/definition/subscriptions/{SubscriptionDefinitionId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "SubscriptionDefinitionId",
    () => input.SubscriptionDefinitionId!,
    "{SubscriptionDefinitionId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DisassociateRoleFromGroupCommand
 */
export const se_DisassociateRoleFromGroupCommand = async (
  input: DisassociateRoleFromGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/greengrass/groups/{GroupId}/role";
  resolvedPath = __resolvedPath(resolvedPath, input, "GroupId", () => input.GroupId!, "{GroupId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DisassociateServiceRoleFromAccountCommand
 */
export const se_DisassociateServiceRoleFromAccountCommand = async (
  input: DisassociateServiceRoleFromAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/greengrass/servicerole";
  let body: any;
  body = "";
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetAssociatedRoleCommand
 */
export const se_GetAssociatedRoleCommand = async (
  input: GetAssociatedRoleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/greengrass/groups/{GroupId}/role";
  resolvedPath = __resolvedPath(resolvedPath, input, "GroupId", () => input.GroupId!, "{GroupId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetBulkDeploymentStatusCommand
 */
export const se_GetBulkDeploymentStatusCommand = async (
  input: GetBulkDeploymentStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/greengrass/bulk/deployments/{BulkDeploymentId}/status";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "BulkDeploymentId",
    () => input.BulkDeploymentId!,
    "{BulkDeploymentId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetConnectivityInfoCommand
 */
export const se_GetConnectivityInfoCommand = async (
  input: GetConnectivityInfoCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/greengrass/things/{ThingName}/connectivityInfo";
  resolvedPath = __resolvedPath(resolvedPath, input, "ThingName", () => input.ThingName!, "{ThingName}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetConnectorDefinitionCommand
 */
export const se_GetConnectorDefinitionCommand = async (
  input: GetConnectorDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/greengrass/definition/connectors/{ConnectorDefinitionId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ConnectorDefinitionId",
    () => input.ConnectorDefinitionId!,
    "{ConnectorDefinitionId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetConnectorDefinitionVersionCommand
 */
export const se_GetConnectorDefinitionVersionCommand = async (
  input: GetConnectorDefinitionVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/greengrass/definition/connectors/{ConnectorDefinitionId}/versions/{ConnectorDefinitionVersionId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ConnectorDefinitionId",
    () => input.ConnectorDefinitionId!,
    "{ConnectorDefinitionId}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ConnectorDefinitionVersionId",
    () => input.ConnectorDefinitionVersionId!,
    "{ConnectorDefinitionVersionId}",
    false
  );
  const query: any = map({
    NextToken: [, input.NextToken!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1GetCoreDefinitionCommand
 */
export const se_GetCoreDefinitionCommand = async (
  input: GetCoreDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/greengrass/definition/cores/{CoreDefinitionId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "CoreDefinitionId",
    () => input.CoreDefinitionId!,
    "{CoreDefinitionId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetCoreDefinitionVersionCommand
 */
export const se_GetCoreDefinitionVersionCommand = async (
  input: GetCoreDefinitionVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/greengrass/definition/cores/{CoreDefinitionId}/versions/{CoreDefinitionVersionId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "CoreDefinitionId",
    () => input.CoreDefinitionId!,
    "{CoreDefinitionId}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "CoreDefinitionVersionId",
    () => input.CoreDefinitionVersionId!,
    "{CoreDefinitionVersionId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetDeploymentStatusCommand
 */
export const se_GetDeploymentStatusCommand = async (
  input: GetDeploymentStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/greengrass/groups/{GroupId}/deployments/{DeploymentId}/status";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "DeploymentId",
    () => input.DeploymentId!,
    "{DeploymentId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "GroupId", () => input.GroupId!, "{GroupId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetDeviceDefinitionCommand
 */
export const se_GetDeviceDefinitionCommand = async (
  input: GetDeviceDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/greengrass/definition/devices/{DeviceDefinitionId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "DeviceDefinitionId",
    () => input.DeviceDefinitionId!,
    "{DeviceDefinitionId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetDeviceDefinitionVersionCommand
 */
export const se_GetDeviceDefinitionVersionCommand = async (
  input: GetDeviceDefinitionVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/greengrass/definition/devices/{DeviceDefinitionId}/versions/{DeviceDefinitionVersionId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "DeviceDefinitionId",
    () => input.DeviceDefinitionId!,
    "{DeviceDefinitionId}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "DeviceDefinitionVersionId",
    () => input.DeviceDefinitionVersionId!,
    "{DeviceDefinitionVersionId}",
    false
  );
  const query: any = map({
    NextToken: [, input.NextToken!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1GetFunctionDefinitionCommand
 */
export const se_GetFunctionDefinitionCommand = async (
  input: GetFunctionDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/greengrass/definition/functions/{FunctionDefinitionId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "FunctionDefinitionId",
    () => input.FunctionDefinitionId!,
    "{FunctionDefinitionId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetFunctionDefinitionVersionCommand
 */
export const se_GetFunctionDefinitionVersionCommand = async (
  input: GetFunctionDefinitionVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/greengrass/definition/functions/{FunctionDefinitionId}/versions/{FunctionDefinitionVersionId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "FunctionDefinitionId",
    () => input.FunctionDefinitionId!,
    "{FunctionDefinitionId}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "FunctionDefinitionVersionId",
    () => input.FunctionDefinitionVersionId!,
    "{FunctionDefinitionVersionId}",
    false
  );
  const query: any = map({
    NextToken: [, input.NextToken!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1GetGroupCommand
 */
export const se_GetGroupCommand = async (
  input: GetGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/greengrass/groups/{GroupId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "GroupId", () => input.GroupId!, "{GroupId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetGroupCertificateAuthorityCommand
 */
export const se_GetGroupCertificateAuthorityCommand = async (
  input: GetGroupCertificateAuthorityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/greengrass/groups/{GroupId}/certificateauthorities/{CertificateAuthorityId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "CertificateAuthorityId",
    () => input.CertificateAuthorityId!,
    "{CertificateAuthorityId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "GroupId", () => input.GroupId!, "{GroupId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetGroupCertificateConfigurationCommand
 */
export const se_GetGroupCertificateConfigurationCommand = async (
  input: GetGroupCertificateConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/greengrass/groups/{GroupId}/certificateauthorities/configuration/expiry";
  resolvedPath = __resolvedPath(resolvedPath, input, "GroupId", () => input.GroupId!, "{GroupId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetGroupVersionCommand
 */
export const se_GetGroupVersionCommand = async (
  input: GetGroupVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/greengrass/groups/{GroupId}/versions/{GroupVersionId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "GroupId", () => input.GroupId!, "{GroupId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "GroupVersionId",
    () => input.GroupVersionId!,
    "{GroupVersionId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetLoggerDefinitionCommand
 */
export const se_GetLoggerDefinitionCommand = async (
  input: GetLoggerDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/greengrass/definition/loggers/{LoggerDefinitionId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "LoggerDefinitionId",
    () => input.LoggerDefinitionId!,
    "{LoggerDefinitionId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetLoggerDefinitionVersionCommand
 */
export const se_GetLoggerDefinitionVersionCommand = async (
  input: GetLoggerDefinitionVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/greengrass/definition/loggers/{LoggerDefinitionId}/versions/{LoggerDefinitionVersionId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "LoggerDefinitionId",
    () => input.LoggerDefinitionId!,
    "{LoggerDefinitionId}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "LoggerDefinitionVersionId",
    () => input.LoggerDefinitionVersionId!,
    "{LoggerDefinitionVersionId}",
    false
  );
  const query: any = map({
    NextToken: [, input.NextToken!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1GetResourceDefinitionCommand
 */
export const se_GetResourceDefinitionCommand = async (
  input: GetResourceDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/greengrass/definition/resources/{ResourceDefinitionId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ResourceDefinitionId",
    () => input.ResourceDefinitionId!,
    "{ResourceDefinitionId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetResourceDefinitionVersionCommand
 */
export const se_GetResourceDefinitionVersionCommand = async (
  input: GetResourceDefinitionVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/greengrass/definition/resources/{ResourceDefinitionId}/versions/{ResourceDefinitionVersionId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ResourceDefinitionId",
    () => input.ResourceDefinitionId!,
    "{ResourceDefinitionId}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ResourceDefinitionVersionId",
    () => input.ResourceDefinitionVersionId!,
    "{ResourceDefinitionVersionId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetServiceRoleForAccountCommand
 */
export const se_GetServiceRoleForAccountCommand = async (
  input: GetServiceRoleForAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/greengrass/servicerole";
  let body: any;
  body = "";
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetSubscriptionDefinitionCommand
 */
export const se_GetSubscriptionDefinitionCommand = async (
  input: GetSubscriptionDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/greengrass/definition/subscriptions/{SubscriptionDefinitionId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "SubscriptionDefinitionId",
    () => input.SubscriptionDefinitionId!,
    "{SubscriptionDefinitionId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetSubscriptionDefinitionVersionCommand
 */
export const se_GetSubscriptionDefinitionVersionCommand = async (
  input: GetSubscriptionDefinitionVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/greengrass/definition/subscriptions/{SubscriptionDefinitionId}/versions/{SubscriptionDefinitionVersionId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "SubscriptionDefinitionId",
    () => input.SubscriptionDefinitionId!,
    "{SubscriptionDefinitionId}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "SubscriptionDefinitionVersionId",
    () => input.SubscriptionDefinitionVersionId!,
    "{SubscriptionDefinitionVersionId}",
    false
  );
  const query: any = map({
    NextToken: [, input.NextToken!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1GetThingRuntimeConfigurationCommand
 */
export const se_GetThingRuntimeConfigurationCommand = async (
  input: GetThingRuntimeConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/greengrass/things/{ThingName}/runtimeconfig";
  resolvedPath = __resolvedPath(resolvedPath, input, "ThingName", () => input.ThingName!, "{ThingName}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ListBulkDeploymentDetailedReportsCommand
 */
export const se_ListBulkDeploymentDetailedReportsCommand = async (
  input: ListBulkDeploymentDetailedReportsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/greengrass/bulk/deployments/{BulkDeploymentId}/detailed-reports";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "BulkDeploymentId",
    () => input.BulkDeploymentId!,
    "{BulkDeploymentId}",
    false
  );
  const query: any = map({
    MaxResults: [, input.MaxResults!],
    NextToken: [, input.NextToken!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListBulkDeploymentsCommand
 */
export const se_ListBulkDeploymentsCommand = async (
  input: ListBulkDeploymentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/greengrass/bulk/deployments";
  const query: any = map({
    MaxResults: [, input.MaxResults!],
    NextToken: [, input.NextToken!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListConnectorDefinitionsCommand
 */
export const se_ListConnectorDefinitionsCommand = async (
  input: ListConnectorDefinitionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/greengrass/definition/connectors";
  const query: any = map({
    MaxResults: [, input.MaxResults!],
    NextToken: [, input.NextToken!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListConnectorDefinitionVersionsCommand
 */
export const se_ListConnectorDefinitionVersionsCommand = async (
  input: ListConnectorDefinitionVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/greengrass/definition/connectors/{ConnectorDefinitionId}/versions";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ConnectorDefinitionId",
    () => input.ConnectorDefinitionId!,
    "{ConnectorDefinitionId}",
    false
  );
  const query: any = map({
    MaxResults: [, input.MaxResults!],
    NextToken: [, input.NextToken!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListCoreDefinitionsCommand
 */
export const se_ListCoreDefinitionsCommand = async (
  input: ListCoreDefinitionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/greengrass/definition/cores";
  const query: any = map({
    MaxResults: [, input.MaxResults!],
    NextToken: [, input.NextToken!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListCoreDefinitionVersionsCommand
 */
export const se_ListCoreDefinitionVersionsCommand = async (
  input: ListCoreDefinitionVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/greengrass/definition/cores/{CoreDefinitionId}/versions";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "CoreDefinitionId",
    () => input.CoreDefinitionId!,
    "{CoreDefinitionId}",
    false
  );
  const query: any = map({
    MaxResults: [, input.MaxResults!],
    NextToken: [, input.NextToken!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListDeploymentsCommand
 */
export const se_ListDeploymentsCommand = async (
  input: ListDeploymentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/greengrass/groups/{GroupId}/deployments";
  resolvedPath = __resolvedPath(resolvedPath, input, "GroupId", () => input.GroupId!, "{GroupId}", false);
  const query: any = map({
    MaxResults: [, input.MaxResults!],
    NextToken: [, input.NextToken!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListDeviceDefinitionsCommand
 */
export const se_ListDeviceDefinitionsCommand = async (
  input: ListDeviceDefinitionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/greengrass/definition/devices";
  const query: any = map({
    MaxResults: [, input.MaxResults!],
    NextToken: [, input.NextToken!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListDeviceDefinitionVersionsCommand
 */
export const se_ListDeviceDefinitionVersionsCommand = async (
  input: ListDeviceDefinitionVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/greengrass/definition/devices/{DeviceDefinitionId}/versions";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "DeviceDefinitionId",
    () => input.DeviceDefinitionId!,
    "{DeviceDefinitionId}",
    false
  );
  const query: any = map({
    MaxResults: [, input.MaxResults!],
    NextToken: [, input.NextToken!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListFunctionDefinitionsCommand
 */
export const se_ListFunctionDefinitionsCommand = async (
  input: ListFunctionDefinitionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/greengrass/definition/functions";
  const query: any = map({
    MaxResults: [, input.MaxResults!],
    NextToken: [, input.NextToken!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListFunctionDefinitionVersionsCommand
 */
export const se_ListFunctionDefinitionVersionsCommand = async (
  input: ListFunctionDefinitionVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/greengrass/definition/functions/{FunctionDefinitionId}/versions";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "FunctionDefinitionId",
    () => input.FunctionDefinitionId!,
    "{FunctionDefinitionId}",
    false
  );
  const query: any = map({
    MaxResults: [, input.MaxResults!],
    NextToken: [, input.NextToken!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListGroupCertificateAuthoritiesCommand
 */
export const se_ListGroupCertificateAuthoritiesCommand = async (
  input: ListGroupCertificateAuthoritiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/greengrass/groups/{GroupId}/certificateauthorities";
  resolvedPath = __resolvedPath(resolvedPath, input, "GroupId", () => input.GroupId!, "{GroupId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ListGroupsCommand
 */
export const se_ListGroupsCommand = async (
  input: ListGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/greengrass/groups";
  const query: any = map({
    MaxResults: [, input.MaxResults!],
    NextToken: [, input.NextToken!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListGroupVersionsCommand
 */
export const se_ListGroupVersionsCommand = async (
  input: ListGroupVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/greengrass/groups/{GroupId}/versions";
  resolvedPath = __resolvedPath(resolvedPath, input, "GroupId", () => input.GroupId!, "{GroupId}", false);
  const query: any = map({
    MaxResults: [, input.MaxResults!],
    NextToken: [, input.NextToken!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListLoggerDefinitionsCommand
 */
export const se_ListLoggerDefinitionsCommand = async (
  input: ListLoggerDefinitionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/greengrass/definition/loggers";
  const query: any = map({
    MaxResults: [, input.MaxResults!],
    NextToken: [, input.NextToken!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListLoggerDefinitionVersionsCommand
 */
export const se_ListLoggerDefinitionVersionsCommand = async (
  input: ListLoggerDefinitionVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/greengrass/definition/loggers/{LoggerDefinitionId}/versions";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "LoggerDefinitionId",
    () => input.LoggerDefinitionId!,
    "{LoggerDefinitionId}",
    false
  );
  const query: any = map({
    MaxResults: [, input.MaxResults!],
    NextToken: [, input.NextToken!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListResourceDefinitionsCommand
 */
export const se_ListResourceDefinitionsCommand = async (
  input: ListResourceDefinitionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/greengrass/definition/resources";
  const query: any = map({
    MaxResults: [, input.MaxResults!],
    NextToken: [, input.NextToken!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListResourceDefinitionVersionsCommand
 */
export const se_ListResourceDefinitionVersionsCommand = async (
  input: ListResourceDefinitionVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/greengrass/definition/resources/{ResourceDefinitionId}/versions";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ResourceDefinitionId",
    () => input.ResourceDefinitionId!,
    "{ResourceDefinitionId}",
    false
  );
  const query: any = map({
    MaxResults: [, input.MaxResults!],
    NextToken: [, input.NextToken!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListSubscriptionDefinitionsCommand
 */
export const se_ListSubscriptionDefinitionsCommand = async (
  input: ListSubscriptionDefinitionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/greengrass/definition/subscriptions";
  const query: any = map({
    MaxResults: [, input.MaxResults!],
    NextToken: [, input.NextToken!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListSubscriptionDefinitionVersionsCommand
 */
export const se_ListSubscriptionDefinitionVersionsCommand = async (
  input: ListSubscriptionDefinitionVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/greengrass/definition/subscriptions/{SubscriptionDefinitionId}/versions";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "SubscriptionDefinitionId",
    () => input.SubscriptionDefinitionId!,
    "{SubscriptionDefinitionId}",
    false
  );
  const query: any = map({
    MaxResults: [, input.MaxResults!],
    NextToken: [, input.NextToken!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{ResourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ResetDeploymentsCommand
 */
export const se_ResetDeploymentsCommand = async (
  input: ResetDeploymentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amzn-client-token": input.AmznClientToken!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/greengrass/groups/{GroupId}/deployments/$reset";
  resolvedPath = __resolvedPath(resolvedPath, input, "GroupId", () => input.GroupId!, "{GroupId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Force != null && { Force: input.Force }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1StartBulkDeploymentCommand
 */
export const se_StartBulkDeploymentCommand = async (
  input: StartBulkDeploymentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amzn-client-token": input.AmznClientToken!,
  });
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/greengrass/bulk/deployments";
  let body: any;
  body = JSON.stringify({
    ...(input.ExecutionRoleArn != null && { ExecutionRoleArn: input.ExecutionRoleArn }),
    ...(input.InputFileUri != null && { InputFileUri: input.InputFileUri }),
    ...(input.tags != null && { tags: se_Tags(input.tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1StopBulkDeploymentCommand
 */
export const se_StopBulkDeploymentCommand = async (
  input: StopBulkDeploymentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/greengrass/bulk/deployments/{BulkDeploymentId}/$stop";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "BulkDeploymentId",
    () => input.BulkDeploymentId!,
    "{BulkDeploymentId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{ResourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.tags != null && { tags: se_Tags(input.tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{ResourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  const query: any = map({
    tagKeys: [
      __expectNonNull(input.TagKeys, `TagKeys`) != null,
      () => (input.TagKeys! || []).map((_entry) => _entry as any),
    ],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateConnectivityInfoCommand
 */
export const se_UpdateConnectivityInfoCommand = async (
  input: UpdateConnectivityInfoCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/greengrass/things/{ThingName}/connectivityInfo";
  resolvedPath = __resolvedPath(resolvedPath, input, "ThingName", () => input.ThingName!, "{ThingName}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.ConnectivityInfo != null && {
      ConnectivityInfo: se___listOfConnectivityInfo(input.ConnectivityInfo, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateConnectorDefinitionCommand
 */
export const se_UpdateConnectorDefinitionCommand = async (
  input: UpdateConnectorDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/greengrass/definition/connectors/{ConnectorDefinitionId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ConnectorDefinitionId",
    () => input.ConnectorDefinitionId!,
    "{ConnectorDefinitionId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.Name != null && { Name: input.Name }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateCoreDefinitionCommand
 */
export const se_UpdateCoreDefinitionCommand = async (
  input: UpdateCoreDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/greengrass/definition/cores/{CoreDefinitionId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "CoreDefinitionId",
    () => input.CoreDefinitionId!,
    "{CoreDefinitionId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.Name != null && { Name: input.Name }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateDeviceDefinitionCommand
 */
export const se_UpdateDeviceDefinitionCommand = async (
  input: UpdateDeviceDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/greengrass/definition/devices/{DeviceDefinitionId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "DeviceDefinitionId",
    () => input.DeviceDefinitionId!,
    "{DeviceDefinitionId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.Name != null && { Name: input.Name }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateFunctionDefinitionCommand
 */
export const se_UpdateFunctionDefinitionCommand = async (
  input: UpdateFunctionDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/greengrass/definition/functions/{FunctionDefinitionId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "FunctionDefinitionId",
    () => input.FunctionDefinitionId!,
    "{FunctionDefinitionId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.Name != null && { Name: input.Name }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateGroupCommand
 */
export const se_UpdateGroupCommand = async (
  input: UpdateGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/greengrass/groups/{GroupId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "GroupId", () => input.GroupId!, "{GroupId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Name != null && { Name: input.Name }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateGroupCertificateConfigurationCommand
 */
export const se_UpdateGroupCertificateConfigurationCommand = async (
  input: UpdateGroupCertificateConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/greengrass/groups/{GroupId}/certificateauthorities/configuration/expiry";
  resolvedPath = __resolvedPath(resolvedPath, input, "GroupId", () => input.GroupId!, "{GroupId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.CertificateExpiryInMilliseconds != null && {
      CertificateExpiryInMilliseconds: input.CertificateExpiryInMilliseconds,
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateLoggerDefinitionCommand
 */
export const se_UpdateLoggerDefinitionCommand = async (
  input: UpdateLoggerDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/greengrass/definition/loggers/{LoggerDefinitionId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "LoggerDefinitionId",
    () => input.LoggerDefinitionId!,
    "{LoggerDefinitionId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.Name != null && { Name: input.Name }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateResourceDefinitionCommand
 */
export const se_UpdateResourceDefinitionCommand = async (
  input: UpdateResourceDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/greengrass/definition/resources/{ResourceDefinitionId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ResourceDefinitionId",
    () => input.ResourceDefinitionId!,
    "{ResourceDefinitionId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.Name != null && { Name: input.Name }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateSubscriptionDefinitionCommand
 */
export const se_UpdateSubscriptionDefinitionCommand = async (
  input: UpdateSubscriptionDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/greengrass/definition/subscriptions/{SubscriptionDefinitionId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "SubscriptionDefinitionId",
    () => input.SubscriptionDefinitionId!,
    "{SubscriptionDefinitionId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.Name != null && { Name: input.Name }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateThingRuntimeConfigurationCommand
 */
export const se_UpdateThingRuntimeConfigurationCommand = async (
  input: UpdateThingRuntimeConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/greengrass/things/{ThingName}/runtimeconfig";
  resolvedPath = __resolvedPath(resolvedPath, input, "ThingName", () => input.ThingName!, "{ThingName}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.TelemetryConfiguration != null && {
      TelemetryConfiguration: se_TelemetryConfigurationUpdate(input.TelemetryConfiguration, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * deserializeAws_restJson1AssociateRoleToGroupCommand
 */
export const de_AssociateRoleToGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateRoleToGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_AssociateRoleToGroupCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AssociatedAt != null) {
    contents.AssociatedAt = __expectString(data.AssociatedAt);
  }
  return contents;
};

/**
 * deserializeAws_restJson1AssociateRoleToGroupCommandError
 */
const de_AssociateRoleToGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateRoleToGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.greengrass#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.greengrass#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1AssociateServiceRoleToAccountCommand
 */
export const de_AssociateServiceRoleToAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateServiceRoleToAccountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_AssociateServiceRoleToAccountCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AssociatedAt != null) {
    contents.AssociatedAt = __expectString(data.AssociatedAt);
  }
  return contents;
};

/**
 * deserializeAws_restJson1AssociateServiceRoleToAccountCommandError
 */
const de_AssociateServiceRoleToAccountCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateServiceRoleToAccountCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.greengrass#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.greengrass#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateConnectorDefinitionCommand
 */
export const de_CreateConnectorDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConnectorDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateConnectorDefinitionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.CreationTimestamp != null) {
    contents.CreationTimestamp = __expectString(data.CreationTimestamp);
  }
  if (data.Id != null) {
    contents.Id = __expectString(data.Id);
  }
  if (data.LastUpdatedTimestamp != null) {
    contents.LastUpdatedTimestamp = __expectString(data.LastUpdatedTimestamp);
  }
  if (data.LatestVersion != null) {
    contents.LatestVersion = __expectString(data.LatestVersion);
  }
  if (data.LatestVersionArn != null) {
    contents.LatestVersionArn = __expectString(data.LatestVersionArn);
  }
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateConnectorDefinitionCommandError
 */
const de_CreateConnectorDefinitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConnectorDefinitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.greengrass#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateConnectorDefinitionVersionCommand
 */
export const de_CreateConnectorDefinitionVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConnectorDefinitionVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateConnectorDefinitionVersionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.CreationTimestamp != null) {
    contents.CreationTimestamp = __expectString(data.CreationTimestamp);
  }
  if (data.Id != null) {
    contents.Id = __expectString(data.Id);
  }
  if (data.Version != null) {
    contents.Version = __expectString(data.Version);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateConnectorDefinitionVersionCommandError
 */
const de_CreateConnectorDefinitionVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConnectorDefinitionVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.greengrass#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateCoreDefinitionCommand
 */
export const de_CreateCoreDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCoreDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateCoreDefinitionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.CreationTimestamp != null) {
    contents.CreationTimestamp = __expectString(data.CreationTimestamp);
  }
  if (data.Id != null) {
    contents.Id = __expectString(data.Id);
  }
  if (data.LastUpdatedTimestamp != null) {
    contents.LastUpdatedTimestamp = __expectString(data.LastUpdatedTimestamp);
  }
  if (data.LatestVersion != null) {
    contents.LatestVersion = __expectString(data.LatestVersion);
  }
  if (data.LatestVersionArn != null) {
    contents.LatestVersionArn = __expectString(data.LatestVersionArn);
  }
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateCoreDefinitionCommandError
 */
const de_CreateCoreDefinitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCoreDefinitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.greengrass#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateCoreDefinitionVersionCommand
 */
export const de_CreateCoreDefinitionVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCoreDefinitionVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateCoreDefinitionVersionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.CreationTimestamp != null) {
    contents.CreationTimestamp = __expectString(data.CreationTimestamp);
  }
  if (data.Id != null) {
    contents.Id = __expectString(data.Id);
  }
  if (data.Version != null) {
    contents.Version = __expectString(data.Version);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateCoreDefinitionVersionCommandError
 */
const de_CreateCoreDefinitionVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCoreDefinitionVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.greengrass#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateDeploymentCommand
 */
export const de_CreateDeploymentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDeploymentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateDeploymentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DeploymentArn != null) {
    contents.DeploymentArn = __expectString(data.DeploymentArn);
  }
  if (data.DeploymentId != null) {
    contents.DeploymentId = __expectString(data.DeploymentId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateDeploymentCommandError
 */
const de_CreateDeploymentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDeploymentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.greengrass#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateDeviceDefinitionCommand
 */
export const de_CreateDeviceDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDeviceDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateDeviceDefinitionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.CreationTimestamp != null) {
    contents.CreationTimestamp = __expectString(data.CreationTimestamp);
  }
  if (data.Id != null) {
    contents.Id = __expectString(data.Id);
  }
  if (data.LastUpdatedTimestamp != null) {
    contents.LastUpdatedTimestamp = __expectString(data.LastUpdatedTimestamp);
  }
  if (data.LatestVersion != null) {
    contents.LatestVersion = __expectString(data.LatestVersion);
  }
  if (data.LatestVersionArn != null) {
    contents.LatestVersionArn = __expectString(data.LatestVersionArn);
  }
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateDeviceDefinitionCommandError
 */
const de_CreateDeviceDefinitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDeviceDefinitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.greengrass#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateDeviceDefinitionVersionCommand
 */
export const de_CreateDeviceDefinitionVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDeviceDefinitionVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateDeviceDefinitionVersionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.CreationTimestamp != null) {
    contents.CreationTimestamp = __expectString(data.CreationTimestamp);
  }
  if (data.Id != null) {
    contents.Id = __expectString(data.Id);
  }
  if (data.Version != null) {
    contents.Version = __expectString(data.Version);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateDeviceDefinitionVersionCommandError
 */
const de_CreateDeviceDefinitionVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDeviceDefinitionVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.greengrass#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateFunctionDefinitionCommand
 */
export const de_CreateFunctionDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFunctionDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateFunctionDefinitionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.CreationTimestamp != null) {
    contents.CreationTimestamp = __expectString(data.CreationTimestamp);
  }
  if (data.Id != null) {
    contents.Id = __expectString(data.Id);
  }
  if (data.LastUpdatedTimestamp != null) {
    contents.LastUpdatedTimestamp = __expectString(data.LastUpdatedTimestamp);
  }
  if (data.LatestVersion != null) {
    contents.LatestVersion = __expectString(data.LatestVersion);
  }
  if (data.LatestVersionArn != null) {
    contents.LatestVersionArn = __expectString(data.LatestVersionArn);
  }
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateFunctionDefinitionCommandError
 */
const de_CreateFunctionDefinitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFunctionDefinitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.greengrass#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateFunctionDefinitionVersionCommand
 */
export const de_CreateFunctionDefinitionVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFunctionDefinitionVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateFunctionDefinitionVersionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.CreationTimestamp != null) {
    contents.CreationTimestamp = __expectString(data.CreationTimestamp);
  }
  if (data.Id != null) {
    contents.Id = __expectString(data.Id);
  }
  if (data.Version != null) {
    contents.Version = __expectString(data.Version);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateFunctionDefinitionVersionCommandError
 */
const de_CreateFunctionDefinitionVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFunctionDefinitionVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.greengrass#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateGroupCommand
 */
export const de_CreateGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateGroupCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.CreationTimestamp != null) {
    contents.CreationTimestamp = __expectString(data.CreationTimestamp);
  }
  if (data.Id != null) {
    contents.Id = __expectString(data.Id);
  }
  if (data.LastUpdatedTimestamp != null) {
    contents.LastUpdatedTimestamp = __expectString(data.LastUpdatedTimestamp);
  }
  if (data.LatestVersion != null) {
    contents.LatestVersion = __expectString(data.LatestVersion);
  }
  if (data.LatestVersionArn != null) {
    contents.LatestVersionArn = __expectString(data.LatestVersionArn);
  }
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateGroupCommandError
 */
const de_CreateGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.greengrass#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateGroupCertificateAuthorityCommand
 */
export const de_CreateGroupCertificateAuthorityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGroupCertificateAuthorityCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateGroupCertificateAuthorityCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.GroupCertificateAuthorityArn != null) {
    contents.GroupCertificateAuthorityArn = __expectString(data.GroupCertificateAuthorityArn);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateGroupCertificateAuthorityCommandError
 */
const de_CreateGroupCertificateAuthorityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGroupCertificateAuthorityCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.greengrass#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.greengrass#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateGroupVersionCommand
 */
export const de_CreateGroupVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGroupVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateGroupVersionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.CreationTimestamp != null) {
    contents.CreationTimestamp = __expectString(data.CreationTimestamp);
  }
  if (data.Id != null) {
    contents.Id = __expectString(data.Id);
  }
  if (data.Version != null) {
    contents.Version = __expectString(data.Version);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateGroupVersionCommandError
 */
const de_CreateGroupVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGroupVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.greengrass#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateLoggerDefinitionCommand
 */
export const de_CreateLoggerDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLoggerDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateLoggerDefinitionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.CreationTimestamp != null) {
    contents.CreationTimestamp = __expectString(data.CreationTimestamp);
  }
  if (data.Id != null) {
    contents.Id = __expectString(data.Id);
  }
  if (data.LastUpdatedTimestamp != null) {
    contents.LastUpdatedTimestamp = __expectString(data.LastUpdatedTimestamp);
  }
  if (data.LatestVersion != null) {
    contents.LatestVersion = __expectString(data.LatestVersion);
  }
  if (data.LatestVersionArn != null) {
    contents.LatestVersionArn = __expectString(data.LatestVersionArn);
  }
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateLoggerDefinitionCommandError
 */
const de_CreateLoggerDefinitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLoggerDefinitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.greengrass#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateLoggerDefinitionVersionCommand
 */
export const de_CreateLoggerDefinitionVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLoggerDefinitionVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateLoggerDefinitionVersionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.CreationTimestamp != null) {
    contents.CreationTimestamp = __expectString(data.CreationTimestamp);
  }
  if (data.Id != null) {
    contents.Id = __expectString(data.Id);
  }
  if (data.Version != null) {
    contents.Version = __expectString(data.Version);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateLoggerDefinitionVersionCommandError
 */
const de_CreateLoggerDefinitionVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLoggerDefinitionVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.greengrass#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateResourceDefinitionCommand
 */
export const de_CreateResourceDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateResourceDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateResourceDefinitionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.CreationTimestamp != null) {
    contents.CreationTimestamp = __expectString(data.CreationTimestamp);
  }
  if (data.Id != null) {
    contents.Id = __expectString(data.Id);
  }
  if (data.LastUpdatedTimestamp != null) {
    contents.LastUpdatedTimestamp = __expectString(data.LastUpdatedTimestamp);
  }
  if (data.LatestVersion != null) {
    contents.LatestVersion = __expectString(data.LatestVersion);
  }
  if (data.LatestVersionArn != null) {
    contents.LatestVersionArn = __expectString(data.LatestVersionArn);
  }
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateResourceDefinitionCommandError
 */
const de_CreateResourceDefinitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateResourceDefinitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.greengrass#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateResourceDefinitionVersionCommand
 */
export const de_CreateResourceDefinitionVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateResourceDefinitionVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateResourceDefinitionVersionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.CreationTimestamp != null) {
    contents.CreationTimestamp = __expectString(data.CreationTimestamp);
  }
  if (data.Id != null) {
    contents.Id = __expectString(data.Id);
  }
  if (data.Version != null) {
    contents.Version = __expectString(data.Version);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateResourceDefinitionVersionCommandError
 */
const de_CreateResourceDefinitionVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateResourceDefinitionVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.greengrass#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateSoftwareUpdateJobCommand
 */
export const de_CreateSoftwareUpdateJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSoftwareUpdateJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateSoftwareUpdateJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.IotJobArn != null) {
    contents.IotJobArn = __expectString(data.IotJobArn);
  }
  if (data.IotJobId != null) {
    contents.IotJobId = __expectString(data.IotJobId);
  }
  if (data.PlatformSoftwareVersion != null) {
    contents.PlatformSoftwareVersion = __expectString(data.PlatformSoftwareVersion);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateSoftwareUpdateJobCommandError
 */
const de_CreateSoftwareUpdateJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSoftwareUpdateJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.greengrass#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.greengrass#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateSubscriptionDefinitionCommand
 */
export const de_CreateSubscriptionDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSubscriptionDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateSubscriptionDefinitionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.CreationTimestamp != null) {
    contents.CreationTimestamp = __expectString(data.CreationTimestamp);
  }
  if (data.Id != null) {
    contents.Id = __expectString(data.Id);
  }
  if (data.LastUpdatedTimestamp != null) {
    contents.LastUpdatedTimestamp = __expectString(data.LastUpdatedTimestamp);
  }
  if (data.LatestVersion != null) {
    contents.LatestVersion = __expectString(data.LatestVersion);
  }
  if (data.LatestVersionArn != null) {
    contents.LatestVersionArn = __expectString(data.LatestVersionArn);
  }
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateSubscriptionDefinitionCommandError
 */
const de_CreateSubscriptionDefinitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSubscriptionDefinitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.greengrass#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateSubscriptionDefinitionVersionCommand
 */
export const de_CreateSubscriptionDefinitionVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSubscriptionDefinitionVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateSubscriptionDefinitionVersionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.CreationTimestamp != null) {
    contents.CreationTimestamp = __expectString(data.CreationTimestamp);
  }
  if (data.Id != null) {
    contents.Id = __expectString(data.Id);
  }
  if (data.Version != null) {
    contents.Version = __expectString(data.Version);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateSubscriptionDefinitionVersionCommandError
 */
const de_CreateSubscriptionDefinitionVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSubscriptionDefinitionVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.greengrass#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteConnectorDefinitionCommand
 */
export const de_DeleteConnectorDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConnectorDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteConnectorDefinitionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteConnectorDefinitionCommandError
 */
const de_DeleteConnectorDefinitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConnectorDefinitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.greengrass#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteCoreDefinitionCommand
 */
export const de_DeleteCoreDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCoreDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteCoreDefinitionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteCoreDefinitionCommandError
 */
const de_DeleteCoreDefinitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCoreDefinitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.greengrass#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteDeviceDefinitionCommand
 */
export const de_DeleteDeviceDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDeviceDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteDeviceDefinitionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteDeviceDefinitionCommandError
 */
const de_DeleteDeviceDefinitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDeviceDefinitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.greengrass#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteFunctionDefinitionCommand
 */
export const de_DeleteFunctionDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFunctionDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteFunctionDefinitionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteFunctionDefinitionCommandError
 */
const de_DeleteFunctionDefinitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFunctionDefinitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.greengrass#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteGroupCommand
 */
export const de_DeleteGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteGroupCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteGroupCommandError
 */
const de_DeleteGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.greengrass#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteLoggerDefinitionCommand
 */
export const de_DeleteLoggerDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLoggerDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteLoggerDefinitionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteLoggerDefinitionCommandError
 */
const de_DeleteLoggerDefinitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLoggerDefinitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.greengrass#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteResourceDefinitionCommand
 */
export const de_DeleteResourceDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourceDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteResourceDefinitionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteResourceDefinitionCommandError
 */
const de_DeleteResourceDefinitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourceDefinitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.greengrass#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteSubscriptionDefinitionCommand
 */
export const de_DeleteSubscriptionDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSubscriptionDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteSubscriptionDefinitionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteSubscriptionDefinitionCommandError
 */
const de_DeleteSubscriptionDefinitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSubscriptionDefinitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.greengrass#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DisassociateRoleFromGroupCommand
 */
export const de_DisassociateRoleFromGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateRoleFromGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DisassociateRoleFromGroupCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DisassociatedAt != null) {
    contents.DisassociatedAt = __expectString(data.DisassociatedAt);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DisassociateRoleFromGroupCommandError
 */
const de_DisassociateRoleFromGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateRoleFromGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.greengrass#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.greengrass#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DisassociateServiceRoleFromAccountCommand
 */
export const de_DisassociateServiceRoleFromAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateServiceRoleFromAccountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DisassociateServiceRoleFromAccountCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DisassociatedAt != null) {
    contents.DisassociatedAt = __expectString(data.DisassociatedAt);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DisassociateServiceRoleFromAccountCommandError
 */
const de_DisassociateServiceRoleFromAccountCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateServiceRoleFromAccountCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerErrorException":
    case "com.amazonaws.greengrass#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetAssociatedRoleCommand
 */
export const de_GetAssociatedRoleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAssociatedRoleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetAssociatedRoleCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AssociatedAt != null) {
    contents.AssociatedAt = __expectString(data.AssociatedAt);
  }
  if (data.RoleArn != null) {
    contents.RoleArn = __expectString(data.RoleArn);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetAssociatedRoleCommandError
 */
const de_GetAssociatedRoleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAssociatedRoleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.greengrass#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.greengrass#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetBulkDeploymentStatusCommand
 */
export const de_GetBulkDeploymentStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBulkDeploymentStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetBulkDeploymentStatusCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.BulkDeploymentMetrics != null) {
    contents.BulkDeploymentMetrics = de_BulkDeploymentMetrics(data.BulkDeploymentMetrics, context);
  }
  if (data.BulkDeploymentStatus != null) {
    contents.BulkDeploymentStatus = __expectString(data.BulkDeploymentStatus);
  }
  if (data.CreatedAt != null) {
    contents.CreatedAt = __expectString(data.CreatedAt);
  }
  if (data.ErrorDetails != null) {
    contents.ErrorDetails = de_ErrorDetails(data.ErrorDetails, context);
  }
  if (data.ErrorMessage != null) {
    contents.ErrorMessage = __expectString(data.ErrorMessage);
  }
  if (data.tags != null) {
    contents.tags = de_Tags(data.tags, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetBulkDeploymentStatusCommandError
 */
const de_GetBulkDeploymentStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBulkDeploymentStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.greengrass#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetConnectivityInfoCommand
 */
export const de_GetConnectivityInfoCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConnectivityInfoCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetConnectivityInfoCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ConnectivityInfo != null) {
    contents.ConnectivityInfo = de___listOfConnectivityInfo(data.ConnectivityInfo, context);
  }
  if (data.message != null) {
    contents.Message = __expectString(data.message);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetConnectivityInfoCommandError
 */
const de_GetConnectivityInfoCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConnectivityInfoCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.greengrass#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.greengrass#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetConnectorDefinitionCommand
 */
export const de_GetConnectorDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConnectorDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetConnectorDefinitionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.CreationTimestamp != null) {
    contents.CreationTimestamp = __expectString(data.CreationTimestamp);
  }
  if (data.Id != null) {
    contents.Id = __expectString(data.Id);
  }
  if (data.LastUpdatedTimestamp != null) {
    contents.LastUpdatedTimestamp = __expectString(data.LastUpdatedTimestamp);
  }
  if (data.LatestVersion != null) {
    contents.LatestVersion = __expectString(data.LatestVersion);
  }
  if (data.LatestVersionArn != null) {
    contents.LatestVersionArn = __expectString(data.LatestVersionArn);
  }
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.tags != null) {
    contents.tags = de_Tags(data.tags, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetConnectorDefinitionCommandError
 */
const de_GetConnectorDefinitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConnectorDefinitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.greengrass#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetConnectorDefinitionVersionCommand
 */
export const de_GetConnectorDefinitionVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConnectorDefinitionVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetConnectorDefinitionVersionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.CreationTimestamp != null) {
    contents.CreationTimestamp = __expectString(data.CreationTimestamp);
  }
  if (data.Definition != null) {
    contents.Definition = de_ConnectorDefinitionVersion(data.Definition, context);
  }
  if (data.Id != null) {
    contents.Id = __expectString(data.Id);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Version != null) {
    contents.Version = __expectString(data.Version);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetConnectorDefinitionVersionCommandError
 */
const de_GetConnectorDefinitionVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConnectorDefinitionVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.greengrass#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetCoreDefinitionCommand
 */
export const de_GetCoreDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCoreDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetCoreDefinitionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.CreationTimestamp != null) {
    contents.CreationTimestamp = __expectString(data.CreationTimestamp);
  }
  if (data.Id != null) {
    contents.Id = __expectString(data.Id);
  }
  if (data.LastUpdatedTimestamp != null) {
    contents.LastUpdatedTimestamp = __expectString(data.LastUpdatedTimestamp);
  }
  if (data.LatestVersion != null) {
    contents.LatestVersion = __expectString(data.LatestVersion);
  }
  if (data.LatestVersionArn != null) {
    contents.LatestVersionArn = __expectString(data.LatestVersionArn);
  }
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.tags != null) {
    contents.tags = de_Tags(data.tags, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetCoreDefinitionCommandError
 */
const de_GetCoreDefinitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCoreDefinitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.greengrass#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetCoreDefinitionVersionCommand
 */
export const de_GetCoreDefinitionVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCoreDefinitionVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetCoreDefinitionVersionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.CreationTimestamp != null) {
    contents.CreationTimestamp = __expectString(data.CreationTimestamp);
  }
  if (data.Definition != null) {
    contents.Definition = de_CoreDefinitionVersion(data.Definition, context);
  }
  if (data.Id != null) {
    contents.Id = __expectString(data.Id);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Version != null) {
    contents.Version = __expectString(data.Version);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetCoreDefinitionVersionCommandError
 */
const de_GetCoreDefinitionVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCoreDefinitionVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.greengrass#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetDeploymentStatusCommand
 */
export const de_GetDeploymentStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeploymentStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetDeploymentStatusCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DeploymentStatus != null) {
    contents.DeploymentStatus = __expectString(data.DeploymentStatus);
  }
  if (data.DeploymentType != null) {
    contents.DeploymentType = __expectString(data.DeploymentType);
  }
  if (data.ErrorDetails != null) {
    contents.ErrorDetails = de_ErrorDetails(data.ErrorDetails, context);
  }
  if (data.ErrorMessage != null) {
    contents.ErrorMessage = __expectString(data.ErrorMessage);
  }
  if (data.UpdatedAt != null) {
    contents.UpdatedAt = __expectString(data.UpdatedAt);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetDeploymentStatusCommandError
 */
const de_GetDeploymentStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeploymentStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.greengrass#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetDeviceDefinitionCommand
 */
export const de_GetDeviceDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeviceDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetDeviceDefinitionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.CreationTimestamp != null) {
    contents.CreationTimestamp = __expectString(data.CreationTimestamp);
  }
  if (data.Id != null) {
    contents.Id = __expectString(data.Id);
  }
  if (data.LastUpdatedTimestamp != null) {
    contents.LastUpdatedTimestamp = __expectString(data.LastUpdatedTimestamp);
  }
  if (data.LatestVersion != null) {
    contents.LatestVersion = __expectString(data.LatestVersion);
  }
  if (data.LatestVersionArn != null) {
    contents.LatestVersionArn = __expectString(data.LatestVersionArn);
  }
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.tags != null) {
    contents.tags = de_Tags(data.tags, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetDeviceDefinitionCommandError
 */
const de_GetDeviceDefinitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeviceDefinitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.greengrass#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetDeviceDefinitionVersionCommand
 */
export const de_GetDeviceDefinitionVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeviceDefinitionVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetDeviceDefinitionVersionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.CreationTimestamp != null) {
    contents.CreationTimestamp = __expectString(data.CreationTimestamp);
  }
  if (data.Definition != null) {
    contents.Definition = de_DeviceDefinitionVersion(data.Definition, context);
  }
  if (data.Id != null) {
    contents.Id = __expectString(data.Id);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Version != null) {
    contents.Version = __expectString(data.Version);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetDeviceDefinitionVersionCommandError
 */
const de_GetDeviceDefinitionVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeviceDefinitionVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.greengrass#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetFunctionDefinitionCommand
 */
export const de_GetFunctionDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFunctionDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetFunctionDefinitionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.CreationTimestamp != null) {
    contents.CreationTimestamp = __expectString(data.CreationTimestamp);
  }
  if (data.Id != null) {
    contents.Id = __expectString(data.Id);
  }
  if (data.LastUpdatedTimestamp != null) {
    contents.LastUpdatedTimestamp = __expectString(data.LastUpdatedTimestamp);
  }
  if (data.LatestVersion != null) {
    contents.LatestVersion = __expectString(data.LatestVersion);
  }
  if (data.LatestVersionArn != null) {
    contents.LatestVersionArn = __expectString(data.LatestVersionArn);
  }
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.tags != null) {
    contents.tags = de_Tags(data.tags, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetFunctionDefinitionCommandError
 */
const de_GetFunctionDefinitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFunctionDefinitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.greengrass#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetFunctionDefinitionVersionCommand
 */
export const de_GetFunctionDefinitionVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFunctionDefinitionVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetFunctionDefinitionVersionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.CreationTimestamp != null) {
    contents.CreationTimestamp = __expectString(data.CreationTimestamp);
  }
  if (data.Definition != null) {
    contents.Definition = de_FunctionDefinitionVersion(data.Definition, context);
  }
  if (data.Id != null) {
    contents.Id = __expectString(data.Id);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Version != null) {
    contents.Version = __expectString(data.Version);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetFunctionDefinitionVersionCommandError
 */
const de_GetFunctionDefinitionVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFunctionDefinitionVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.greengrass#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetGroupCommand
 */
export const de_GetGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetGroupCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.CreationTimestamp != null) {
    contents.CreationTimestamp = __expectString(data.CreationTimestamp);
  }
  if (data.Id != null) {
    contents.Id = __expectString(data.Id);
  }
  if (data.LastUpdatedTimestamp != null) {
    contents.LastUpdatedTimestamp = __expectString(data.LastUpdatedTimestamp);
  }
  if (data.LatestVersion != null) {
    contents.LatestVersion = __expectString(data.LatestVersion);
  }
  if (data.LatestVersionArn != null) {
    contents.LatestVersionArn = __expectString(data.LatestVersionArn);
  }
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.tags != null) {
    contents.tags = de_Tags(data.tags, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetGroupCommandError
 */
const de_GetGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.greengrass#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetGroupCertificateAuthorityCommand
 */
export const de_GetGroupCertificateAuthorityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGroupCertificateAuthorityCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetGroupCertificateAuthorityCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.GroupCertificateAuthorityArn != null) {
    contents.GroupCertificateAuthorityArn = __expectString(data.GroupCertificateAuthorityArn);
  }
  if (data.GroupCertificateAuthorityId != null) {
    contents.GroupCertificateAuthorityId = __expectString(data.GroupCertificateAuthorityId);
  }
  if (data.PemEncodedCertificate != null) {
    contents.PemEncodedCertificate = __expectString(data.PemEncodedCertificate);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetGroupCertificateAuthorityCommandError
 */
const de_GetGroupCertificateAuthorityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGroupCertificateAuthorityCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.greengrass#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.greengrass#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetGroupCertificateConfigurationCommand
 */
export const de_GetGroupCertificateConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGroupCertificateConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetGroupCertificateConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CertificateAuthorityExpiryInMilliseconds != null) {
    contents.CertificateAuthorityExpiryInMilliseconds = __expectString(data.CertificateAuthorityExpiryInMilliseconds);
  }
  if (data.CertificateExpiryInMilliseconds != null) {
    contents.CertificateExpiryInMilliseconds = __expectString(data.CertificateExpiryInMilliseconds);
  }
  if (data.GroupId != null) {
    contents.GroupId = __expectString(data.GroupId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetGroupCertificateConfigurationCommandError
 */
const de_GetGroupCertificateConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGroupCertificateConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.greengrass#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.greengrass#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetGroupVersionCommand
 */
export const de_GetGroupVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGroupVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetGroupVersionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.CreationTimestamp != null) {
    contents.CreationTimestamp = __expectString(data.CreationTimestamp);
  }
  if (data.Definition != null) {
    contents.Definition = de_GroupVersion(data.Definition, context);
  }
  if (data.Id != null) {
    contents.Id = __expectString(data.Id);
  }
  if (data.Version != null) {
    contents.Version = __expectString(data.Version);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetGroupVersionCommandError
 */
const de_GetGroupVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGroupVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.greengrass#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetLoggerDefinitionCommand
 */
export const de_GetLoggerDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLoggerDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetLoggerDefinitionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.CreationTimestamp != null) {
    contents.CreationTimestamp = __expectString(data.CreationTimestamp);
  }
  if (data.Id != null) {
    contents.Id = __expectString(data.Id);
  }
  if (data.LastUpdatedTimestamp != null) {
    contents.LastUpdatedTimestamp = __expectString(data.LastUpdatedTimestamp);
  }
  if (data.LatestVersion != null) {
    contents.LatestVersion = __expectString(data.LatestVersion);
  }
  if (data.LatestVersionArn != null) {
    contents.LatestVersionArn = __expectString(data.LatestVersionArn);
  }
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.tags != null) {
    contents.tags = de_Tags(data.tags, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetLoggerDefinitionCommandError
 */
const de_GetLoggerDefinitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLoggerDefinitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.greengrass#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetLoggerDefinitionVersionCommand
 */
export const de_GetLoggerDefinitionVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLoggerDefinitionVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetLoggerDefinitionVersionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.CreationTimestamp != null) {
    contents.CreationTimestamp = __expectString(data.CreationTimestamp);
  }
  if (data.Definition != null) {
    contents.Definition = de_LoggerDefinitionVersion(data.Definition, context);
  }
  if (data.Id != null) {
    contents.Id = __expectString(data.Id);
  }
  if (data.Version != null) {
    contents.Version = __expectString(data.Version);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetLoggerDefinitionVersionCommandError
 */
const de_GetLoggerDefinitionVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLoggerDefinitionVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.greengrass#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetResourceDefinitionCommand
 */
export const de_GetResourceDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourceDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetResourceDefinitionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.CreationTimestamp != null) {
    contents.CreationTimestamp = __expectString(data.CreationTimestamp);
  }
  if (data.Id != null) {
    contents.Id = __expectString(data.Id);
  }
  if (data.LastUpdatedTimestamp != null) {
    contents.LastUpdatedTimestamp = __expectString(data.LastUpdatedTimestamp);
  }
  if (data.LatestVersion != null) {
    contents.LatestVersion = __expectString(data.LatestVersion);
  }
  if (data.LatestVersionArn != null) {
    contents.LatestVersionArn = __expectString(data.LatestVersionArn);
  }
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.tags != null) {
    contents.tags = de_Tags(data.tags, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetResourceDefinitionCommandError
 */
const de_GetResourceDefinitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourceDefinitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.greengrass#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetResourceDefinitionVersionCommand
 */
export const de_GetResourceDefinitionVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourceDefinitionVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetResourceDefinitionVersionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.CreationTimestamp != null) {
    contents.CreationTimestamp = __expectString(data.CreationTimestamp);
  }
  if (data.Definition != null) {
    contents.Definition = de_ResourceDefinitionVersion(data.Definition, context);
  }
  if (data.Id != null) {
    contents.Id = __expectString(data.Id);
  }
  if (data.Version != null) {
    contents.Version = __expectString(data.Version);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetResourceDefinitionVersionCommandError
 */
const de_GetResourceDefinitionVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourceDefinitionVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.greengrass#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetServiceRoleForAccountCommand
 */
export const de_GetServiceRoleForAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServiceRoleForAccountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetServiceRoleForAccountCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AssociatedAt != null) {
    contents.AssociatedAt = __expectString(data.AssociatedAt);
  }
  if (data.RoleArn != null) {
    contents.RoleArn = __expectString(data.RoleArn);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetServiceRoleForAccountCommandError
 */
const de_GetServiceRoleForAccountCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServiceRoleForAccountCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerErrorException":
    case "com.amazonaws.greengrass#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetSubscriptionDefinitionCommand
 */
export const de_GetSubscriptionDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSubscriptionDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetSubscriptionDefinitionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.CreationTimestamp != null) {
    contents.CreationTimestamp = __expectString(data.CreationTimestamp);
  }
  if (data.Id != null) {
    contents.Id = __expectString(data.Id);
  }
  if (data.LastUpdatedTimestamp != null) {
    contents.LastUpdatedTimestamp = __expectString(data.LastUpdatedTimestamp);
  }
  if (data.LatestVersion != null) {
    contents.LatestVersion = __expectString(data.LatestVersion);
  }
  if (data.LatestVersionArn != null) {
    contents.LatestVersionArn = __expectString(data.LatestVersionArn);
  }
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.tags != null) {
    contents.tags = de_Tags(data.tags, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetSubscriptionDefinitionCommandError
 */
const de_GetSubscriptionDefinitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSubscriptionDefinitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.greengrass#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetSubscriptionDefinitionVersionCommand
 */
export const de_GetSubscriptionDefinitionVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSubscriptionDefinitionVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetSubscriptionDefinitionVersionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.CreationTimestamp != null) {
    contents.CreationTimestamp = __expectString(data.CreationTimestamp);
  }
  if (data.Definition != null) {
    contents.Definition = de_SubscriptionDefinitionVersion(data.Definition, context);
  }
  if (data.Id != null) {
    contents.Id = __expectString(data.Id);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Version != null) {
    contents.Version = __expectString(data.Version);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetSubscriptionDefinitionVersionCommandError
 */
const de_GetSubscriptionDefinitionVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSubscriptionDefinitionVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.greengrass#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetThingRuntimeConfigurationCommand
 */
export const de_GetThingRuntimeConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetThingRuntimeConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetThingRuntimeConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.RuntimeConfiguration != null) {
    contents.RuntimeConfiguration = de_RuntimeConfiguration(data.RuntimeConfiguration, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetThingRuntimeConfigurationCommandError
 */
const de_GetThingRuntimeConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetThingRuntimeConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.greengrass#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.greengrass#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListBulkDeploymentDetailedReportsCommand
 */
export const de_ListBulkDeploymentDetailedReportsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBulkDeploymentDetailedReportsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListBulkDeploymentDetailedReportsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Deployments != null) {
    contents.Deployments = de_BulkDeploymentResults(data.Deployments, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListBulkDeploymentDetailedReportsCommandError
 */
const de_ListBulkDeploymentDetailedReportsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBulkDeploymentDetailedReportsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.greengrass#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListBulkDeploymentsCommand
 */
export const de_ListBulkDeploymentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBulkDeploymentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListBulkDeploymentsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.BulkDeployments != null) {
    contents.BulkDeployments = de_BulkDeployments(data.BulkDeployments, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListBulkDeploymentsCommandError
 */
const de_ListBulkDeploymentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBulkDeploymentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.greengrass#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListConnectorDefinitionsCommand
 */
export const de_ListConnectorDefinitionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConnectorDefinitionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListConnectorDefinitionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Definitions != null) {
    contents.Definitions = de___listOfDefinitionInformation(data.Definitions, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListConnectorDefinitionsCommandError
 */
const de_ListConnectorDefinitionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConnectorDefinitionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1ListConnectorDefinitionVersionsCommand
 */
export const de_ListConnectorDefinitionVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConnectorDefinitionVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListConnectorDefinitionVersionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Versions != null) {
    contents.Versions = de___listOfVersionInformation(data.Versions, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListConnectorDefinitionVersionsCommandError
 */
const de_ListConnectorDefinitionVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConnectorDefinitionVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.greengrass#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListCoreDefinitionsCommand
 */
export const de_ListCoreDefinitionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCoreDefinitionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListCoreDefinitionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Definitions != null) {
    contents.Definitions = de___listOfDefinitionInformation(data.Definitions, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListCoreDefinitionsCommandError
 */
const de_ListCoreDefinitionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCoreDefinitionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1ListCoreDefinitionVersionsCommand
 */
export const de_ListCoreDefinitionVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCoreDefinitionVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListCoreDefinitionVersionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Versions != null) {
    contents.Versions = de___listOfVersionInformation(data.Versions, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListCoreDefinitionVersionsCommandError
 */
const de_ListCoreDefinitionVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCoreDefinitionVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.greengrass#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListDeploymentsCommand
 */
export const de_ListDeploymentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeploymentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListDeploymentsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Deployments != null) {
    contents.Deployments = de_Deployments(data.Deployments, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListDeploymentsCommandError
 */
const de_ListDeploymentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeploymentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.greengrass#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListDeviceDefinitionsCommand
 */
export const de_ListDeviceDefinitionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeviceDefinitionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListDeviceDefinitionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Definitions != null) {
    contents.Definitions = de___listOfDefinitionInformation(data.Definitions, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListDeviceDefinitionsCommandError
 */
const de_ListDeviceDefinitionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeviceDefinitionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1ListDeviceDefinitionVersionsCommand
 */
export const de_ListDeviceDefinitionVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeviceDefinitionVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListDeviceDefinitionVersionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Versions != null) {
    contents.Versions = de___listOfVersionInformation(data.Versions, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListDeviceDefinitionVersionsCommandError
 */
const de_ListDeviceDefinitionVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeviceDefinitionVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.greengrass#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListFunctionDefinitionsCommand
 */
export const de_ListFunctionDefinitionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFunctionDefinitionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListFunctionDefinitionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Definitions != null) {
    contents.Definitions = de___listOfDefinitionInformation(data.Definitions, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListFunctionDefinitionsCommandError
 */
const de_ListFunctionDefinitionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFunctionDefinitionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1ListFunctionDefinitionVersionsCommand
 */
export const de_ListFunctionDefinitionVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFunctionDefinitionVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListFunctionDefinitionVersionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Versions != null) {
    contents.Versions = de___listOfVersionInformation(data.Versions, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListFunctionDefinitionVersionsCommandError
 */
const de_ListFunctionDefinitionVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFunctionDefinitionVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.greengrass#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListGroupCertificateAuthoritiesCommand
 */
export const de_ListGroupCertificateAuthoritiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGroupCertificateAuthoritiesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListGroupCertificateAuthoritiesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.GroupCertificateAuthorities != null) {
    contents.GroupCertificateAuthorities = de___listOfGroupCertificateAuthorityProperties(
      data.GroupCertificateAuthorities,
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListGroupCertificateAuthoritiesCommandError
 */
const de_ListGroupCertificateAuthoritiesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGroupCertificateAuthoritiesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.greengrass#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.greengrass#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListGroupsCommand
 */
export const de_ListGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGroupsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListGroupsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Groups != null) {
    contents.Groups = de___listOfGroupInformation(data.Groups, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListGroupsCommandError
 */
const de_ListGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1ListGroupVersionsCommand
 */
export const de_ListGroupVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGroupVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListGroupVersionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Versions != null) {
    contents.Versions = de___listOfVersionInformation(data.Versions, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListGroupVersionsCommandError
 */
const de_ListGroupVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGroupVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.greengrass#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListLoggerDefinitionsCommand
 */
export const de_ListLoggerDefinitionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLoggerDefinitionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListLoggerDefinitionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Definitions != null) {
    contents.Definitions = de___listOfDefinitionInformation(data.Definitions, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListLoggerDefinitionsCommandError
 */
const de_ListLoggerDefinitionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLoggerDefinitionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1ListLoggerDefinitionVersionsCommand
 */
export const de_ListLoggerDefinitionVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLoggerDefinitionVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListLoggerDefinitionVersionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Versions != null) {
    contents.Versions = de___listOfVersionInformation(data.Versions, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListLoggerDefinitionVersionsCommandError
 */
const de_ListLoggerDefinitionVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLoggerDefinitionVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.greengrass#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListResourceDefinitionsCommand
 */
export const de_ListResourceDefinitionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourceDefinitionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListResourceDefinitionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Definitions != null) {
    contents.Definitions = de___listOfDefinitionInformation(data.Definitions, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListResourceDefinitionsCommandError
 */
const de_ListResourceDefinitionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourceDefinitionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1ListResourceDefinitionVersionsCommand
 */
export const de_ListResourceDefinitionVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourceDefinitionVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListResourceDefinitionVersionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Versions != null) {
    contents.Versions = de___listOfVersionInformation(data.Versions, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListResourceDefinitionVersionsCommandError
 */
const de_ListResourceDefinitionVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourceDefinitionVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.greengrass#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListSubscriptionDefinitionsCommand
 */
export const de_ListSubscriptionDefinitionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSubscriptionDefinitionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListSubscriptionDefinitionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Definitions != null) {
    contents.Definitions = de___listOfDefinitionInformation(data.Definitions, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListSubscriptionDefinitionsCommandError
 */
const de_ListSubscriptionDefinitionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSubscriptionDefinitionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1ListSubscriptionDefinitionVersionsCommand
 */
export const de_ListSubscriptionDefinitionVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSubscriptionDefinitionVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListSubscriptionDefinitionVersionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Versions != null) {
    contents.Versions = de___listOfVersionInformation(data.Versions, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListSubscriptionDefinitionVersionsCommandError
 */
const de_ListSubscriptionDefinitionVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSubscriptionDefinitionVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.greengrass#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListTagsForResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.tags != null) {
    contents.tags = de_Tags(data.tags, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListTagsForResourceCommandError
 */
const de_ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.greengrass#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ResetDeploymentsCommand
 */
export const de_ResetDeploymentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResetDeploymentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ResetDeploymentsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DeploymentArn != null) {
    contents.DeploymentArn = __expectString(data.DeploymentArn);
  }
  if (data.DeploymentId != null) {
    contents.DeploymentId = __expectString(data.DeploymentId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ResetDeploymentsCommandError
 */
const de_ResetDeploymentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResetDeploymentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.greengrass#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1StartBulkDeploymentCommand
 */
export const de_StartBulkDeploymentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartBulkDeploymentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StartBulkDeploymentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.BulkDeploymentArn != null) {
    contents.BulkDeploymentArn = __expectString(data.BulkDeploymentArn);
  }
  if (data.BulkDeploymentId != null) {
    contents.BulkDeploymentId = __expectString(data.BulkDeploymentId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1StartBulkDeploymentCommandError
 */
const de_StartBulkDeploymentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartBulkDeploymentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.greengrass#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1StopBulkDeploymentCommand
 */
export const de_StopBulkDeploymentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopBulkDeploymentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StopBulkDeploymentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1StopBulkDeploymentCommandError
 */
const de_StopBulkDeploymentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopBulkDeploymentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.greengrass#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_TagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1TagResourceCommandError
 */
const de_TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.greengrass#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_UntagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UntagResourceCommandError
 */
const de_UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.greengrass#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateConnectivityInfoCommand
 */
export const de_UpdateConnectivityInfoCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConnectivityInfoCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateConnectivityInfoCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.message != null) {
    contents.Message = __expectString(data.message);
  }
  if (data.Version != null) {
    contents.Version = __expectString(data.Version);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateConnectivityInfoCommandError
 */
const de_UpdateConnectivityInfoCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConnectivityInfoCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.greengrass#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.greengrass#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateConnectorDefinitionCommand
 */
export const de_UpdateConnectorDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConnectorDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateConnectorDefinitionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateConnectorDefinitionCommandError
 */
const de_UpdateConnectorDefinitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConnectorDefinitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.greengrass#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateCoreDefinitionCommand
 */
export const de_UpdateCoreDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCoreDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateCoreDefinitionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateCoreDefinitionCommandError
 */
const de_UpdateCoreDefinitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCoreDefinitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.greengrass#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateDeviceDefinitionCommand
 */
export const de_UpdateDeviceDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDeviceDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateDeviceDefinitionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateDeviceDefinitionCommandError
 */
const de_UpdateDeviceDefinitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDeviceDefinitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.greengrass#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateFunctionDefinitionCommand
 */
export const de_UpdateFunctionDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFunctionDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateFunctionDefinitionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateFunctionDefinitionCommandError
 */
const de_UpdateFunctionDefinitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFunctionDefinitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.greengrass#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateGroupCommand
 */
export const de_UpdateGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateGroupCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateGroupCommandError
 */
const de_UpdateGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.greengrass#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateGroupCertificateConfigurationCommand
 */
export const de_UpdateGroupCertificateConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGroupCertificateConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateGroupCertificateConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CertificateAuthorityExpiryInMilliseconds != null) {
    contents.CertificateAuthorityExpiryInMilliseconds = __expectString(data.CertificateAuthorityExpiryInMilliseconds);
  }
  if (data.CertificateExpiryInMilliseconds != null) {
    contents.CertificateExpiryInMilliseconds = __expectString(data.CertificateExpiryInMilliseconds);
  }
  if (data.GroupId != null) {
    contents.GroupId = __expectString(data.GroupId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateGroupCertificateConfigurationCommandError
 */
const de_UpdateGroupCertificateConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGroupCertificateConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.greengrass#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.greengrass#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateLoggerDefinitionCommand
 */
export const de_UpdateLoggerDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLoggerDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateLoggerDefinitionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateLoggerDefinitionCommandError
 */
const de_UpdateLoggerDefinitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLoggerDefinitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.greengrass#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateResourceDefinitionCommand
 */
export const de_UpdateResourceDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateResourceDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateResourceDefinitionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateResourceDefinitionCommandError
 */
const de_UpdateResourceDefinitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateResourceDefinitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.greengrass#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateSubscriptionDefinitionCommand
 */
export const de_UpdateSubscriptionDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSubscriptionDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateSubscriptionDefinitionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateSubscriptionDefinitionCommandError
 */
const de_UpdateSubscriptionDefinitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSubscriptionDefinitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.greengrass#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateThingRuntimeConfigurationCommand
 */
export const de_UpdateThingRuntimeConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateThingRuntimeConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateThingRuntimeConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateThingRuntimeConfigurationCommandError
 */
const de_UpdateThingRuntimeConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateThingRuntimeConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.greengrass#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.greengrass#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

const map = __map;
/**
 * deserializeAws_restJson1BadRequestExceptionRes
 */
const de_BadRequestExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<BadRequestException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.ErrorDetails != null) {
    contents.ErrorDetails = de_ErrorDetails(data.ErrorDetails, context);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new BadRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InternalServerErrorExceptionRes
 */
const de_InternalServerErrorExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerErrorException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.ErrorDetails != null) {
    contents.ErrorDetails = de_ErrorDetails(data.ErrorDetails, context);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new InternalServerErrorException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * serializeAws_restJson1__listOf__string
 */
const se___listOf__string = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1__listOfConnectivityInfo
 */
const se___listOfConnectivityInfo = (input: ConnectivityInfo[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ConnectivityInfo(entry, context);
    });
};

/**
 * serializeAws_restJson1__listOfConnector
 */
const se___listOfConnector = (input: Connector[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Connector(entry, context);
    });
};

/**
 * serializeAws_restJson1__listOfCore
 */
const se___listOfCore = (input: Core[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Core(entry, context);
    });
};

/**
 * serializeAws_restJson1__listOfDevice
 */
const se___listOfDevice = (input: Device[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Device(entry, context);
    });
};

/**
 * serializeAws_restJson1__listOfFunction
 */
const se___listOfFunction = (input: Function[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Function(entry, context);
    });
};

/**
 * serializeAws_restJson1__listOfLogger
 */
const se___listOfLogger = (input: Logger[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Logger(entry, context);
    });
};

/**
 * serializeAws_restJson1__listOfResource
 */
const se___listOfResource = (input: Resource[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Resource(entry, context);
    });
};

/**
 * serializeAws_restJson1__listOfResourceAccessPolicy
 */
const se___listOfResourceAccessPolicy = (input: ResourceAccessPolicy[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ResourceAccessPolicy(entry, context);
    });
};

/**
 * serializeAws_restJson1__listOfSubscription
 */
const se___listOfSubscription = (input: Subscription[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Subscription(entry, context);
    });
};

/**
 * serializeAws_restJson1__mapOf__string
 */
const se___mapOf__string = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1ConnectivityInfo
 */
const se_ConnectivityInfo = (input: ConnectivityInfo, context: __SerdeContext): any => {
  return {
    ...(input.HostAddress != null && { HostAddress: input.HostAddress }),
    ...(input.Id != null && { Id: input.Id }),
    ...(input.Metadata != null && { Metadata: input.Metadata }),
    ...(input.PortNumber != null && { PortNumber: input.PortNumber }),
  };
};

/**
 * serializeAws_restJson1Connector
 */
const se_Connector = (input: Connector, context: __SerdeContext): any => {
  return {
    ...(input.ConnectorArn != null && { ConnectorArn: input.ConnectorArn }),
    ...(input.Id != null && { Id: input.Id }),
    ...(input.Parameters != null && { Parameters: se___mapOf__string(input.Parameters, context) }),
  };
};

/**
 * serializeAws_restJson1ConnectorDefinitionVersion
 */
const se_ConnectorDefinitionVersion = (input: ConnectorDefinitionVersion, context: __SerdeContext): any => {
  return {
    ...(input.Connectors != null && { Connectors: se___listOfConnector(input.Connectors, context) }),
  };
};

/**
 * serializeAws_restJson1Core
 */
const se_Core = (input: Core, context: __SerdeContext): any => {
  return {
    ...(input.CertificateArn != null && { CertificateArn: input.CertificateArn }),
    ...(input.Id != null && { Id: input.Id }),
    ...(input.SyncShadow != null && { SyncShadow: input.SyncShadow }),
    ...(input.ThingArn != null && { ThingArn: input.ThingArn }),
  };
};

/**
 * serializeAws_restJson1CoreDefinitionVersion
 */
const se_CoreDefinitionVersion = (input: CoreDefinitionVersion, context: __SerdeContext): any => {
  return {
    ...(input.Cores != null && { Cores: se___listOfCore(input.Cores, context) }),
  };
};

/**
 * serializeAws_restJson1Device
 */
const se_Device = (input: Device, context: __SerdeContext): any => {
  return {
    ...(input.CertificateArn != null && { CertificateArn: input.CertificateArn }),
    ...(input.Id != null && { Id: input.Id }),
    ...(input.SyncShadow != null && { SyncShadow: input.SyncShadow }),
    ...(input.ThingArn != null && { ThingArn: input.ThingArn }),
  };
};

/**
 * serializeAws_restJson1DeviceDefinitionVersion
 */
const se_DeviceDefinitionVersion = (input: DeviceDefinitionVersion, context: __SerdeContext): any => {
  return {
    ...(input.Devices != null && { Devices: se___listOfDevice(input.Devices, context) }),
  };
};

/**
 * serializeAws_restJson1Function
 */
const se_Function = (input: Function, context: __SerdeContext): any => {
  return {
    ...(input.FunctionArn != null && { FunctionArn: input.FunctionArn }),
    ...(input.FunctionConfiguration != null && {
      FunctionConfiguration: se_FunctionConfiguration(input.FunctionConfiguration, context),
    }),
    ...(input.Id != null && { Id: input.Id }),
  };
};

/**
 * serializeAws_restJson1FunctionConfiguration
 */
const se_FunctionConfiguration = (input: FunctionConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.EncodingType != null && { EncodingType: input.EncodingType }),
    ...(input.Environment != null && { Environment: se_FunctionConfigurationEnvironment(input.Environment, context) }),
    ...(input.ExecArgs != null && { ExecArgs: input.ExecArgs }),
    ...(input.Executable != null && { Executable: input.Executable }),
    ...(input.FunctionRuntimeOverride != null && { FunctionRuntimeOverride: input.FunctionRuntimeOverride }),
    ...(input.MemorySize != null && { MemorySize: input.MemorySize }),
    ...(input.Pinned != null && { Pinned: input.Pinned }),
    ...(input.Timeout != null && { Timeout: input.Timeout }),
  };
};

/**
 * serializeAws_restJson1FunctionConfigurationEnvironment
 */
const se_FunctionConfigurationEnvironment = (input: FunctionConfigurationEnvironment, context: __SerdeContext): any => {
  return {
    ...(input.AccessSysfs != null && { AccessSysfs: input.AccessSysfs }),
    ...(input.Execution != null && { Execution: se_FunctionExecutionConfig(input.Execution, context) }),
    ...(input.ResourceAccessPolicies != null && {
      ResourceAccessPolicies: se___listOfResourceAccessPolicy(input.ResourceAccessPolicies, context),
    }),
    ...(input.Variables != null && { Variables: se___mapOf__string(input.Variables, context) }),
  };
};

/**
 * serializeAws_restJson1FunctionDefaultConfig
 */
const se_FunctionDefaultConfig = (input: FunctionDefaultConfig, context: __SerdeContext): any => {
  return {
    ...(input.Execution != null && { Execution: se_FunctionDefaultExecutionConfig(input.Execution, context) }),
  };
};

/**
 * serializeAws_restJson1FunctionDefaultExecutionConfig
 */
const se_FunctionDefaultExecutionConfig = (input: FunctionDefaultExecutionConfig, context: __SerdeContext): any => {
  return {
    ...(input.IsolationMode != null && { IsolationMode: input.IsolationMode }),
    ...(input.RunAs != null && { RunAs: se_FunctionRunAsConfig(input.RunAs, context) }),
  };
};

/**
 * serializeAws_restJson1FunctionDefinitionVersion
 */
const se_FunctionDefinitionVersion = (input: FunctionDefinitionVersion, context: __SerdeContext): any => {
  return {
    ...(input.DefaultConfig != null && { DefaultConfig: se_FunctionDefaultConfig(input.DefaultConfig, context) }),
    ...(input.Functions != null && { Functions: se___listOfFunction(input.Functions, context) }),
  };
};

/**
 * serializeAws_restJson1FunctionExecutionConfig
 */
const se_FunctionExecutionConfig = (input: FunctionExecutionConfig, context: __SerdeContext): any => {
  return {
    ...(input.IsolationMode != null && { IsolationMode: input.IsolationMode }),
    ...(input.RunAs != null && { RunAs: se_FunctionRunAsConfig(input.RunAs, context) }),
  };
};

/**
 * serializeAws_restJson1FunctionRunAsConfig
 */
const se_FunctionRunAsConfig = (input: FunctionRunAsConfig, context: __SerdeContext): any => {
  return {
    ...(input.Gid != null && { Gid: input.Gid }),
    ...(input.Uid != null && { Uid: input.Uid }),
  };
};

/**
 * serializeAws_restJson1GroupOwnerSetting
 */
const se_GroupOwnerSetting = (input: GroupOwnerSetting, context: __SerdeContext): any => {
  return {
    ...(input.AutoAddGroupOwner != null && { AutoAddGroupOwner: input.AutoAddGroupOwner }),
    ...(input.GroupOwner != null && { GroupOwner: input.GroupOwner }),
  };
};

/**
 * serializeAws_restJson1GroupVersion
 */
const se_GroupVersion = (input: GroupVersion, context: __SerdeContext): any => {
  return {
    ...(input.ConnectorDefinitionVersionArn != null && {
      ConnectorDefinitionVersionArn: input.ConnectorDefinitionVersionArn,
    }),
    ...(input.CoreDefinitionVersionArn != null && { CoreDefinitionVersionArn: input.CoreDefinitionVersionArn }),
    ...(input.DeviceDefinitionVersionArn != null && { DeviceDefinitionVersionArn: input.DeviceDefinitionVersionArn }),
    ...(input.FunctionDefinitionVersionArn != null && {
      FunctionDefinitionVersionArn: input.FunctionDefinitionVersionArn,
    }),
    ...(input.LoggerDefinitionVersionArn != null && { LoggerDefinitionVersionArn: input.LoggerDefinitionVersionArn }),
    ...(input.ResourceDefinitionVersionArn != null && {
      ResourceDefinitionVersionArn: input.ResourceDefinitionVersionArn,
    }),
    ...(input.SubscriptionDefinitionVersionArn != null && {
      SubscriptionDefinitionVersionArn: input.SubscriptionDefinitionVersionArn,
    }),
  };
};

/**
 * serializeAws_restJson1LocalDeviceResourceData
 */
const se_LocalDeviceResourceData = (input: LocalDeviceResourceData, context: __SerdeContext): any => {
  return {
    ...(input.GroupOwnerSetting != null && {
      GroupOwnerSetting: se_GroupOwnerSetting(input.GroupOwnerSetting, context),
    }),
    ...(input.SourcePath != null && { SourcePath: input.SourcePath }),
  };
};

/**
 * serializeAws_restJson1LocalVolumeResourceData
 */
const se_LocalVolumeResourceData = (input: LocalVolumeResourceData, context: __SerdeContext): any => {
  return {
    ...(input.DestinationPath != null && { DestinationPath: input.DestinationPath }),
    ...(input.GroupOwnerSetting != null && {
      GroupOwnerSetting: se_GroupOwnerSetting(input.GroupOwnerSetting, context),
    }),
    ...(input.SourcePath != null && { SourcePath: input.SourcePath }),
  };
};

/**
 * serializeAws_restJson1Logger
 */
const se_Logger = (input: Logger, context: __SerdeContext): any => {
  return {
    ...(input.Component != null && { Component: input.Component }),
    ...(input.Id != null && { Id: input.Id }),
    ...(input.Level != null && { Level: input.Level }),
    ...(input.Space != null && { Space: input.Space }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

/**
 * serializeAws_restJson1LoggerDefinitionVersion
 */
const se_LoggerDefinitionVersion = (input: LoggerDefinitionVersion, context: __SerdeContext): any => {
  return {
    ...(input.Loggers != null && { Loggers: se___listOfLogger(input.Loggers, context) }),
  };
};

/**
 * serializeAws_restJson1Resource
 */
const se_Resource = (input: Resource, context: __SerdeContext): any => {
  return {
    ...(input.Id != null && { Id: input.Id }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.ResourceDataContainer != null && {
      ResourceDataContainer: se_ResourceDataContainer(input.ResourceDataContainer, context),
    }),
  };
};

/**
 * serializeAws_restJson1ResourceAccessPolicy
 */
const se_ResourceAccessPolicy = (input: ResourceAccessPolicy, context: __SerdeContext): any => {
  return {
    ...(input.Permission != null && { Permission: input.Permission }),
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
  };
};

/**
 * serializeAws_restJson1ResourceDataContainer
 */
const se_ResourceDataContainer = (input: ResourceDataContainer, context: __SerdeContext): any => {
  return {
    ...(input.LocalDeviceResourceData != null && {
      LocalDeviceResourceData: se_LocalDeviceResourceData(input.LocalDeviceResourceData, context),
    }),
    ...(input.LocalVolumeResourceData != null && {
      LocalVolumeResourceData: se_LocalVolumeResourceData(input.LocalVolumeResourceData, context),
    }),
    ...(input.S3MachineLearningModelResourceData != null && {
      S3MachineLearningModelResourceData: se_S3MachineLearningModelResourceData(
        input.S3MachineLearningModelResourceData,
        context
      ),
    }),
    ...(input.SageMakerMachineLearningModelResourceData != null && {
      SageMakerMachineLearningModelResourceData: se_SageMakerMachineLearningModelResourceData(
        input.SageMakerMachineLearningModelResourceData,
        context
      ),
    }),
    ...(input.SecretsManagerSecretResourceData != null && {
      SecretsManagerSecretResourceData: se_SecretsManagerSecretResourceData(
        input.SecretsManagerSecretResourceData,
        context
      ),
    }),
  };
};

/**
 * serializeAws_restJson1ResourceDefinitionVersion
 */
const se_ResourceDefinitionVersion = (input: ResourceDefinitionVersion, context: __SerdeContext): any => {
  return {
    ...(input.Resources != null && { Resources: se___listOfResource(input.Resources, context) }),
  };
};

/**
 * serializeAws_restJson1ResourceDownloadOwnerSetting
 */
const se_ResourceDownloadOwnerSetting = (input: ResourceDownloadOwnerSetting, context: __SerdeContext): any => {
  return {
    ...(input.GroupOwner != null && { GroupOwner: input.GroupOwner }),
    ...(input.GroupPermission != null && { GroupPermission: input.GroupPermission }),
  };
};

/**
 * serializeAws_restJson1S3MachineLearningModelResourceData
 */
const se_S3MachineLearningModelResourceData = (
  input: S3MachineLearningModelResourceData,
  context: __SerdeContext
): any => {
  return {
    ...(input.DestinationPath != null && { DestinationPath: input.DestinationPath }),
    ...(input.OwnerSetting != null && { OwnerSetting: se_ResourceDownloadOwnerSetting(input.OwnerSetting, context) }),
    ...(input.S3Uri != null && { S3Uri: input.S3Uri }),
  };
};

/**
 * serializeAws_restJson1SageMakerMachineLearningModelResourceData
 */
const se_SageMakerMachineLearningModelResourceData = (
  input: SageMakerMachineLearningModelResourceData,
  context: __SerdeContext
): any => {
  return {
    ...(input.DestinationPath != null && { DestinationPath: input.DestinationPath }),
    ...(input.OwnerSetting != null && { OwnerSetting: se_ResourceDownloadOwnerSetting(input.OwnerSetting, context) }),
    ...(input.SageMakerJobArn != null && { SageMakerJobArn: input.SageMakerJobArn }),
  };
};

/**
 * serializeAws_restJson1SecretsManagerSecretResourceData
 */
const se_SecretsManagerSecretResourceData = (input: SecretsManagerSecretResourceData, context: __SerdeContext): any => {
  return {
    ...(input.ARN != null && { ARN: input.ARN }),
    ...(input.AdditionalStagingLabelsToDownload != null && {
      AdditionalStagingLabelsToDownload: se___listOf__string(input.AdditionalStagingLabelsToDownload, context),
    }),
  };
};

/**
 * serializeAws_restJson1Subscription
 */
const se_Subscription = (input: Subscription, context: __SerdeContext): any => {
  return {
    ...(input.Id != null && { Id: input.Id }),
    ...(input.Source != null && { Source: input.Source }),
    ...(input.Subject != null && { Subject: input.Subject }),
    ...(input.Target != null && { Target: input.Target }),
  };
};

/**
 * serializeAws_restJson1SubscriptionDefinitionVersion
 */
const se_SubscriptionDefinitionVersion = (input: SubscriptionDefinitionVersion, context: __SerdeContext): any => {
  return {
    ...(input.Subscriptions != null && { Subscriptions: se___listOfSubscription(input.Subscriptions, context) }),
  };
};

/**
 * serializeAws_restJson1Tags
 */
const se_Tags = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1TelemetryConfigurationUpdate
 */
const se_TelemetryConfigurationUpdate = (input: TelemetryConfigurationUpdate, context: __SerdeContext): any => {
  return {
    ...(input.Telemetry != null && { Telemetry: input.Telemetry }),
  };
};

/**
 * serializeAws_restJson1UpdateTargets
 */
const se_UpdateTargets = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * deserializeAws_restJson1__listOf__string
 */
const de___listOf__string = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfConnectivityInfo
 */
const de___listOfConnectivityInfo = (output: any, context: __SerdeContext): ConnectivityInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ConnectivityInfo(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfConnector
 */
const de___listOfConnector = (output: any, context: __SerdeContext): Connector[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Connector(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfCore
 */
const de___listOfCore = (output: any, context: __SerdeContext): Core[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Core(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfDefinitionInformation
 */
const de___listOfDefinitionInformation = (output: any, context: __SerdeContext): DefinitionInformation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DefinitionInformation(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfDevice
 */
const de___listOfDevice = (output: any, context: __SerdeContext): Device[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Device(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfFunction
 */
const de___listOfFunction = (output: any, context: __SerdeContext): Function[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Function(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfGroupCertificateAuthorityProperties
 */
const de___listOfGroupCertificateAuthorityProperties = (
  output: any,
  context: __SerdeContext
): GroupCertificateAuthorityProperties[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_GroupCertificateAuthorityProperties(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfGroupInformation
 */
const de___listOfGroupInformation = (output: any, context: __SerdeContext): GroupInformation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_GroupInformation(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfLogger
 */
const de___listOfLogger = (output: any, context: __SerdeContext): Logger[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Logger(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfResource
 */
const de___listOfResource = (output: any, context: __SerdeContext): Resource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Resource(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfResourceAccessPolicy
 */
const de___listOfResourceAccessPolicy = (output: any, context: __SerdeContext): ResourceAccessPolicy[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ResourceAccessPolicy(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfSubscription
 */
const de___listOfSubscription = (output: any, context: __SerdeContext): Subscription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Subscription(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfVersionInformation
 */
const de___listOfVersionInformation = (output: any, context: __SerdeContext): VersionInformation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_VersionInformation(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__mapOf__string
 */
const de___mapOf__string = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1BulkDeployment
 */
const de_BulkDeployment = (output: any, context: __SerdeContext): BulkDeployment => {
  return {
    BulkDeploymentArn: __expectString(output.BulkDeploymentArn),
    BulkDeploymentId: __expectString(output.BulkDeploymentId),
    CreatedAt: __expectString(output.CreatedAt),
  } as any;
};

/**
 * deserializeAws_restJson1BulkDeploymentMetrics
 */
const de_BulkDeploymentMetrics = (output: any, context: __SerdeContext): BulkDeploymentMetrics => {
  return {
    InvalidInputRecords: __expectInt32(output.InvalidInputRecords),
    RecordsProcessed: __expectInt32(output.RecordsProcessed),
    RetryAttempts: __expectInt32(output.RetryAttempts),
  } as any;
};

/**
 * deserializeAws_restJson1BulkDeploymentResult
 */
const de_BulkDeploymentResult = (output: any, context: __SerdeContext): BulkDeploymentResult => {
  return {
    CreatedAt: __expectString(output.CreatedAt),
    DeploymentArn: __expectString(output.DeploymentArn),
    DeploymentId: __expectString(output.DeploymentId),
    DeploymentStatus: __expectString(output.DeploymentStatus),
    DeploymentType: __expectString(output.DeploymentType),
    ErrorDetails: output.ErrorDetails != null ? de_ErrorDetails(output.ErrorDetails, context) : undefined,
    ErrorMessage: __expectString(output.ErrorMessage),
    GroupArn: __expectString(output.GroupArn),
  } as any;
};

/**
 * deserializeAws_restJson1BulkDeploymentResults
 */
const de_BulkDeploymentResults = (output: any, context: __SerdeContext): BulkDeploymentResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BulkDeploymentResult(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1BulkDeployments
 */
const de_BulkDeployments = (output: any, context: __SerdeContext): BulkDeployment[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BulkDeployment(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ConnectivityInfo
 */
const de_ConnectivityInfo = (output: any, context: __SerdeContext): ConnectivityInfo => {
  return {
    HostAddress: __expectString(output.HostAddress),
    Id: __expectString(output.Id),
    Metadata: __expectString(output.Metadata),
    PortNumber: __expectInt32(output.PortNumber),
  } as any;
};

/**
 * deserializeAws_restJson1Connector
 */
const de_Connector = (output: any, context: __SerdeContext): Connector => {
  return {
    ConnectorArn: __expectString(output.ConnectorArn),
    Id: __expectString(output.Id),
    Parameters: output.Parameters != null ? de___mapOf__string(output.Parameters, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ConnectorDefinitionVersion
 */
const de_ConnectorDefinitionVersion = (output: any, context: __SerdeContext): ConnectorDefinitionVersion => {
  return {
    Connectors: output.Connectors != null ? de___listOfConnector(output.Connectors, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1Core
 */
const de_Core = (output: any, context: __SerdeContext): Core => {
  return {
    CertificateArn: __expectString(output.CertificateArn),
    Id: __expectString(output.Id),
    SyncShadow: __expectBoolean(output.SyncShadow),
    ThingArn: __expectString(output.ThingArn),
  } as any;
};

/**
 * deserializeAws_restJson1CoreDefinitionVersion
 */
const de_CoreDefinitionVersion = (output: any, context: __SerdeContext): CoreDefinitionVersion => {
  return {
    Cores: output.Cores != null ? de___listOfCore(output.Cores, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1DefinitionInformation
 */
const de_DefinitionInformation = (output: any, context: __SerdeContext): DefinitionInformation => {
  return {
    Arn: __expectString(output.Arn),
    CreationTimestamp: __expectString(output.CreationTimestamp),
    Id: __expectString(output.Id),
    LastUpdatedTimestamp: __expectString(output.LastUpdatedTimestamp),
    LatestVersion: __expectString(output.LatestVersion),
    LatestVersionArn: __expectString(output.LatestVersionArn),
    Name: __expectString(output.Name),
    Tags: output.tags != null ? de_Tags(output.tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1Deployment
 */
const de_Deployment = (output: any, context: __SerdeContext): Deployment => {
  return {
    CreatedAt: __expectString(output.CreatedAt),
    DeploymentArn: __expectString(output.DeploymentArn),
    DeploymentId: __expectString(output.DeploymentId),
    DeploymentType: __expectString(output.DeploymentType),
    GroupArn: __expectString(output.GroupArn),
  } as any;
};

/**
 * deserializeAws_restJson1Deployments
 */
const de_Deployments = (output: any, context: __SerdeContext): Deployment[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Deployment(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Device
 */
const de_Device = (output: any, context: __SerdeContext): Device => {
  return {
    CertificateArn: __expectString(output.CertificateArn),
    Id: __expectString(output.Id),
    SyncShadow: __expectBoolean(output.SyncShadow),
    ThingArn: __expectString(output.ThingArn),
  } as any;
};

/**
 * deserializeAws_restJson1DeviceDefinitionVersion
 */
const de_DeviceDefinitionVersion = (output: any, context: __SerdeContext): DeviceDefinitionVersion => {
  return {
    Devices: output.Devices != null ? de___listOfDevice(output.Devices, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ErrorDetail
 */
const de_ErrorDetail = (output: any, context: __SerdeContext): ErrorDetail => {
  return {
    DetailedErrorCode: __expectString(output.DetailedErrorCode),
    DetailedErrorMessage: __expectString(output.DetailedErrorMessage),
  } as any;
};

/**
 * deserializeAws_restJson1ErrorDetails
 */
const de_ErrorDetails = (output: any, context: __SerdeContext): ErrorDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ErrorDetail(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Function
 */
const de_Function = (output: any, context: __SerdeContext): Function => {
  return {
    FunctionArn: __expectString(output.FunctionArn),
    FunctionConfiguration:
      output.FunctionConfiguration != null
        ? de_FunctionConfiguration(output.FunctionConfiguration, context)
        : undefined,
    Id: __expectString(output.Id),
  } as any;
};

/**
 * deserializeAws_restJson1FunctionConfiguration
 */
const de_FunctionConfiguration = (output: any, context: __SerdeContext): FunctionConfiguration => {
  return {
    EncodingType: __expectString(output.EncodingType),
    Environment:
      output.Environment != null ? de_FunctionConfigurationEnvironment(output.Environment, context) : undefined,
    ExecArgs: __expectString(output.ExecArgs),
    Executable: __expectString(output.Executable),
    FunctionRuntimeOverride: __expectString(output.FunctionRuntimeOverride),
    MemorySize: __expectInt32(output.MemorySize),
    Pinned: __expectBoolean(output.Pinned),
    Timeout: __expectInt32(output.Timeout),
  } as any;
};

/**
 * deserializeAws_restJson1FunctionConfigurationEnvironment
 */
const de_FunctionConfigurationEnvironment = (
  output: any,
  context: __SerdeContext
): FunctionConfigurationEnvironment => {
  return {
    AccessSysfs: __expectBoolean(output.AccessSysfs),
    Execution: output.Execution != null ? de_FunctionExecutionConfig(output.Execution, context) : undefined,
    ResourceAccessPolicies:
      output.ResourceAccessPolicies != null
        ? de___listOfResourceAccessPolicy(output.ResourceAccessPolicies, context)
        : undefined,
    Variables: output.Variables != null ? de___mapOf__string(output.Variables, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1FunctionDefaultConfig
 */
const de_FunctionDefaultConfig = (output: any, context: __SerdeContext): FunctionDefaultConfig => {
  return {
    Execution: output.Execution != null ? de_FunctionDefaultExecutionConfig(output.Execution, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1FunctionDefaultExecutionConfig
 */
const de_FunctionDefaultExecutionConfig = (output: any, context: __SerdeContext): FunctionDefaultExecutionConfig => {
  return {
    IsolationMode: __expectString(output.IsolationMode),
    RunAs: output.RunAs != null ? de_FunctionRunAsConfig(output.RunAs, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1FunctionDefinitionVersion
 */
const de_FunctionDefinitionVersion = (output: any, context: __SerdeContext): FunctionDefinitionVersion => {
  return {
    DefaultConfig: output.DefaultConfig != null ? de_FunctionDefaultConfig(output.DefaultConfig, context) : undefined,
    Functions: output.Functions != null ? de___listOfFunction(output.Functions, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1FunctionExecutionConfig
 */
const de_FunctionExecutionConfig = (output: any, context: __SerdeContext): FunctionExecutionConfig => {
  return {
    IsolationMode: __expectString(output.IsolationMode),
    RunAs: output.RunAs != null ? de_FunctionRunAsConfig(output.RunAs, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1FunctionRunAsConfig
 */
const de_FunctionRunAsConfig = (output: any, context: __SerdeContext): FunctionRunAsConfig => {
  return {
    Gid: __expectInt32(output.Gid),
    Uid: __expectInt32(output.Uid),
  } as any;
};

/**
 * deserializeAws_restJson1GroupCertificateAuthorityProperties
 */
const de_GroupCertificateAuthorityProperties = (
  output: any,
  context: __SerdeContext
): GroupCertificateAuthorityProperties => {
  return {
    GroupCertificateAuthorityArn: __expectString(output.GroupCertificateAuthorityArn),
    GroupCertificateAuthorityId: __expectString(output.GroupCertificateAuthorityId),
  } as any;
};

/**
 * deserializeAws_restJson1GroupInformation
 */
const de_GroupInformation = (output: any, context: __SerdeContext): GroupInformation => {
  return {
    Arn: __expectString(output.Arn),
    CreationTimestamp: __expectString(output.CreationTimestamp),
    Id: __expectString(output.Id),
    LastUpdatedTimestamp: __expectString(output.LastUpdatedTimestamp),
    LatestVersion: __expectString(output.LatestVersion),
    LatestVersionArn: __expectString(output.LatestVersionArn),
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_restJson1GroupOwnerSetting
 */
const de_GroupOwnerSetting = (output: any, context: __SerdeContext): GroupOwnerSetting => {
  return {
    AutoAddGroupOwner: __expectBoolean(output.AutoAddGroupOwner),
    GroupOwner: __expectString(output.GroupOwner),
  } as any;
};

/**
 * deserializeAws_restJson1GroupVersion
 */
const de_GroupVersion = (output: any, context: __SerdeContext): GroupVersion => {
  return {
    ConnectorDefinitionVersionArn: __expectString(output.ConnectorDefinitionVersionArn),
    CoreDefinitionVersionArn: __expectString(output.CoreDefinitionVersionArn),
    DeviceDefinitionVersionArn: __expectString(output.DeviceDefinitionVersionArn),
    FunctionDefinitionVersionArn: __expectString(output.FunctionDefinitionVersionArn),
    LoggerDefinitionVersionArn: __expectString(output.LoggerDefinitionVersionArn),
    ResourceDefinitionVersionArn: __expectString(output.ResourceDefinitionVersionArn),
    SubscriptionDefinitionVersionArn: __expectString(output.SubscriptionDefinitionVersionArn),
  } as any;
};

/**
 * deserializeAws_restJson1LocalDeviceResourceData
 */
const de_LocalDeviceResourceData = (output: any, context: __SerdeContext): LocalDeviceResourceData => {
  return {
    GroupOwnerSetting:
      output.GroupOwnerSetting != null ? de_GroupOwnerSetting(output.GroupOwnerSetting, context) : undefined,
    SourcePath: __expectString(output.SourcePath),
  } as any;
};

/**
 * deserializeAws_restJson1LocalVolumeResourceData
 */
const de_LocalVolumeResourceData = (output: any, context: __SerdeContext): LocalVolumeResourceData => {
  return {
    DestinationPath: __expectString(output.DestinationPath),
    GroupOwnerSetting:
      output.GroupOwnerSetting != null ? de_GroupOwnerSetting(output.GroupOwnerSetting, context) : undefined,
    SourcePath: __expectString(output.SourcePath),
  } as any;
};

/**
 * deserializeAws_restJson1Logger
 */
const de_Logger = (output: any, context: __SerdeContext): Logger => {
  return {
    Component: __expectString(output.Component),
    Id: __expectString(output.Id),
    Level: __expectString(output.Level),
    Space: __expectInt32(output.Space),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_restJson1LoggerDefinitionVersion
 */
const de_LoggerDefinitionVersion = (output: any, context: __SerdeContext): LoggerDefinitionVersion => {
  return {
    Loggers: output.Loggers != null ? de___listOfLogger(output.Loggers, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1Resource
 */
const de_Resource = (output: any, context: __SerdeContext): Resource => {
  return {
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
    ResourceDataContainer:
      output.ResourceDataContainer != null
        ? de_ResourceDataContainer(output.ResourceDataContainer, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ResourceAccessPolicy
 */
const de_ResourceAccessPolicy = (output: any, context: __SerdeContext): ResourceAccessPolicy => {
  return {
    Permission: __expectString(output.Permission),
    ResourceId: __expectString(output.ResourceId),
  } as any;
};

/**
 * deserializeAws_restJson1ResourceDataContainer
 */
const de_ResourceDataContainer = (output: any, context: __SerdeContext): ResourceDataContainer => {
  return {
    LocalDeviceResourceData:
      output.LocalDeviceResourceData != null
        ? de_LocalDeviceResourceData(output.LocalDeviceResourceData, context)
        : undefined,
    LocalVolumeResourceData:
      output.LocalVolumeResourceData != null
        ? de_LocalVolumeResourceData(output.LocalVolumeResourceData, context)
        : undefined,
    S3MachineLearningModelResourceData:
      output.S3MachineLearningModelResourceData != null
        ? de_S3MachineLearningModelResourceData(output.S3MachineLearningModelResourceData, context)
        : undefined,
    SageMakerMachineLearningModelResourceData:
      output.SageMakerMachineLearningModelResourceData != null
        ? de_SageMakerMachineLearningModelResourceData(output.SageMakerMachineLearningModelResourceData, context)
        : undefined,
    SecretsManagerSecretResourceData:
      output.SecretsManagerSecretResourceData != null
        ? de_SecretsManagerSecretResourceData(output.SecretsManagerSecretResourceData, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ResourceDefinitionVersion
 */
const de_ResourceDefinitionVersion = (output: any, context: __SerdeContext): ResourceDefinitionVersion => {
  return {
    Resources: output.Resources != null ? de___listOfResource(output.Resources, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ResourceDownloadOwnerSetting
 */
const de_ResourceDownloadOwnerSetting = (output: any, context: __SerdeContext): ResourceDownloadOwnerSetting => {
  return {
    GroupOwner: __expectString(output.GroupOwner),
    GroupPermission: __expectString(output.GroupPermission),
  } as any;
};

/**
 * deserializeAws_restJson1RuntimeConfiguration
 */
const de_RuntimeConfiguration = (output: any, context: __SerdeContext): RuntimeConfiguration => {
  return {
    TelemetryConfiguration:
      output.TelemetryConfiguration != null
        ? de_TelemetryConfiguration(output.TelemetryConfiguration, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1S3MachineLearningModelResourceData
 */
const de_S3MachineLearningModelResourceData = (
  output: any,
  context: __SerdeContext
): S3MachineLearningModelResourceData => {
  return {
    DestinationPath: __expectString(output.DestinationPath),
    OwnerSetting:
      output.OwnerSetting != null ? de_ResourceDownloadOwnerSetting(output.OwnerSetting, context) : undefined,
    S3Uri: __expectString(output.S3Uri),
  } as any;
};

/**
 * deserializeAws_restJson1SageMakerMachineLearningModelResourceData
 */
const de_SageMakerMachineLearningModelResourceData = (
  output: any,
  context: __SerdeContext
): SageMakerMachineLearningModelResourceData => {
  return {
    DestinationPath: __expectString(output.DestinationPath),
    OwnerSetting:
      output.OwnerSetting != null ? de_ResourceDownloadOwnerSetting(output.OwnerSetting, context) : undefined,
    SageMakerJobArn: __expectString(output.SageMakerJobArn),
  } as any;
};

/**
 * deserializeAws_restJson1SecretsManagerSecretResourceData
 */
const de_SecretsManagerSecretResourceData = (
  output: any,
  context: __SerdeContext
): SecretsManagerSecretResourceData => {
  return {
    ARN: __expectString(output.ARN),
    AdditionalStagingLabelsToDownload:
      output.AdditionalStagingLabelsToDownload != null
        ? de___listOf__string(output.AdditionalStagingLabelsToDownload, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1Subscription
 */
const de_Subscription = (output: any, context: __SerdeContext): Subscription => {
  return {
    Id: __expectString(output.Id),
    Source: __expectString(output.Source),
    Subject: __expectString(output.Subject),
    Target: __expectString(output.Target),
  } as any;
};

/**
 * deserializeAws_restJson1SubscriptionDefinitionVersion
 */
const de_SubscriptionDefinitionVersion = (output: any, context: __SerdeContext): SubscriptionDefinitionVersion => {
  return {
    Subscriptions: output.Subscriptions != null ? de___listOfSubscription(output.Subscriptions, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1Tags
 */
const de_Tags = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1TelemetryConfiguration
 */
const de_TelemetryConfiguration = (output: any, context: __SerdeContext): TelemetryConfiguration => {
  return {
    ConfigurationSyncStatus: __expectString(output.ConfigurationSyncStatus),
    Telemetry: __expectString(output.Telemetry),
  } as any;
};

/**
 * deserializeAws_restJson1VersionInformation
 */
const de_VersionInformation = (output: any, context: __SerdeContext): VersionInformation => {
  return {
    Arn: __expectString(output.Arn),
    CreationTimestamp: __expectString(output.CreationTimestamp),
    Id: __expectString(output.Id),
    Version: __expectString(output.Version),
  } as any;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody: any = new Uint8Array(), context: __SerdeContext): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const isSerializableHeaderValue = (value: any): boolean =>
  value !== undefined &&
  value !== null &&
  value !== "" &&
  (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
  (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });

const parseErrorBody = async (errorBody: any, context: __SerdeContext) => {
  const value = await parseBody(errorBody, context);
  value.message = value.message ?? value.Message;
  return value;
};

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string | undefined => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string | number): string => {
    let cleanValue = rawValue;
    if (typeof cleanValue === "number") {
      cleanValue = cleanValue.toString();
    }
    if (cleanValue.indexOf(",") >= 0) {
      cleanValue = cleanValue.split(",")[0];
    }
    if (cleanValue.indexOf(":") >= 0) {
      cleanValue = cleanValue.split(":")[0];
    }
    if (cleanValue.indexOf("#") >= 0) {
      cleanValue = cleanValue.split("#")[1];
    }
    return cleanValue;
  };

  const headerKey = findKey(output.headers, "x-amzn-errortype");
  if (headerKey !== undefined) {
    return sanitizeErrorCode(output.headers[headerKey]);
  }

  if (data.code !== undefined) {
    return sanitizeErrorCode(data.code);
  }

  if (data["__type"] !== undefined) {
    return sanitizeErrorCode(data["__type"]);
  }
};
