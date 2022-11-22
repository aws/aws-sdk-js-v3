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

export const serializeAws_restJson1AssociateRoleToGroupCommand = async (
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

export const serializeAws_restJson1AssociateServiceRoleToAccountCommand = async (
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

export const serializeAws_restJson1CreateConnectorDefinitionCommand = async (
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
      InitialVersion: serializeAws_restJson1ConnectorDefinitionVersion(input.InitialVersion, context),
    }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.tags != null && { tags: serializeAws_restJson1Tags(input.tags, context) }),
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

export const serializeAws_restJson1CreateConnectorDefinitionVersionCommand = async (
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
    ...(input.Connectors != null && { Connectors: serializeAws_restJson1__listOfConnector(input.Connectors, context) }),
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

export const serializeAws_restJson1CreateCoreDefinitionCommand = async (
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
    ...(input.InitialVersion != null && {
      InitialVersion: serializeAws_restJson1CoreDefinitionVersion(input.InitialVersion, context),
    }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.tags != null && { tags: serializeAws_restJson1Tags(input.tags, context) }),
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

export const serializeAws_restJson1CreateCoreDefinitionVersionCommand = async (
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
    ...(input.Cores != null && { Cores: serializeAws_restJson1__listOfCore(input.Cores, context) }),
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

export const serializeAws_restJson1CreateDeploymentCommand = async (
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

export const serializeAws_restJson1CreateDeviceDefinitionCommand = async (
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
    ...(input.InitialVersion != null && {
      InitialVersion: serializeAws_restJson1DeviceDefinitionVersion(input.InitialVersion, context),
    }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.tags != null && { tags: serializeAws_restJson1Tags(input.tags, context) }),
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

export const serializeAws_restJson1CreateDeviceDefinitionVersionCommand = async (
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
    ...(input.Devices != null && { Devices: serializeAws_restJson1__listOfDevice(input.Devices, context) }),
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

export const serializeAws_restJson1CreateFunctionDefinitionCommand = async (
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
      InitialVersion: serializeAws_restJson1FunctionDefinitionVersion(input.InitialVersion, context),
    }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.tags != null && { tags: serializeAws_restJson1Tags(input.tags, context) }),
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

export const serializeAws_restJson1CreateFunctionDefinitionVersionCommand = async (
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
    ...(input.DefaultConfig != null && {
      DefaultConfig: serializeAws_restJson1FunctionDefaultConfig(input.DefaultConfig, context),
    }),
    ...(input.Functions != null && { Functions: serializeAws_restJson1__listOfFunction(input.Functions, context) }),
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

export const serializeAws_restJson1CreateGroupCommand = async (
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
    ...(input.InitialVersion != null && {
      InitialVersion: serializeAws_restJson1GroupVersion(input.InitialVersion, context),
    }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.tags != null && { tags: serializeAws_restJson1Tags(input.tags, context) }),
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

export const serializeAws_restJson1CreateGroupCertificateAuthorityCommand = async (
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

export const serializeAws_restJson1CreateGroupVersionCommand = async (
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

export const serializeAws_restJson1CreateLoggerDefinitionCommand = async (
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
    ...(input.InitialVersion != null && {
      InitialVersion: serializeAws_restJson1LoggerDefinitionVersion(input.InitialVersion, context),
    }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.tags != null && { tags: serializeAws_restJson1Tags(input.tags, context) }),
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

export const serializeAws_restJson1CreateLoggerDefinitionVersionCommand = async (
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
    ...(input.Loggers != null && { Loggers: serializeAws_restJson1__listOfLogger(input.Loggers, context) }),
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

export const serializeAws_restJson1CreateResourceDefinitionCommand = async (
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
      InitialVersion: serializeAws_restJson1ResourceDefinitionVersion(input.InitialVersion, context),
    }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.tags != null && { tags: serializeAws_restJson1Tags(input.tags, context) }),
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

export const serializeAws_restJson1CreateResourceDefinitionVersionCommand = async (
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
    ...(input.Resources != null && { Resources: serializeAws_restJson1__listOfResource(input.Resources, context) }),
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

export const serializeAws_restJson1CreateSoftwareUpdateJobCommand = async (
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
    ...(input.UpdateTargets != null && {
      UpdateTargets: serializeAws_restJson1UpdateTargets(input.UpdateTargets, context),
    }),
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

export const serializeAws_restJson1CreateSubscriptionDefinitionCommand = async (
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
      InitialVersion: serializeAws_restJson1SubscriptionDefinitionVersion(input.InitialVersion, context),
    }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.tags != null && { tags: serializeAws_restJson1Tags(input.tags, context) }),
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

export const serializeAws_restJson1CreateSubscriptionDefinitionVersionCommand = async (
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
    ...(input.Subscriptions != null && {
      Subscriptions: serializeAws_restJson1__listOfSubscription(input.Subscriptions, context),
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

export const serializeAws_restJson1DeleteConnectorDefinitionCommand = async (
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

export const serializeAws_restJson1DeleteCoreDefinitionCommand = async (
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

export const serializeAws_restJson1DeleteDeviceDefinitionCommand = async (
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

export const serializeAws_restJson1DeleteFunctionDefinitionCommand = async (
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

export const serializeAws_restJson1DeleteGroupCommand = async (
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

export const serializeAws_restJson1DeleteLoggerDefinitionCommand = async (
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

export const serializeAws_restJson1DeleteResourceDefinitionCommand = async (
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

export const serializeAws_restJson1DeleteSubscriptionDefinitionCommand = async (
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

export const serializeAws_restJson1DisassociateRoleFromGroupCommand = async (
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

export const serializeAws_restJson1DisassociateServiceRoleFromAccountCommand = async (
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

export const serializeAws_restJson1GetAssociatedRoleCommand = async (
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

export const serializeAws_restJson1GetBulkDeploymentStatusCommand = async (
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

export const serializeAws_restJson1GetConnectivityInfoCommand = async (
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

export const serializeAws_restJson1GetConnectorDefinitionCommand = async (
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

export const serializeAws_restJson1GetConnectorDefinitionVersionCommand = async (
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

export const serializeAws_restJson1GetCoreDefinitionCommand = async (
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

export const serializeAws_restJson1GetCoreDefinitionVersionCommand = async (
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

export const serializeAws_restJson1GetDeploymentStatusCommand = async (
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

export const serializeAws_restJson1GetDeviceDefinitionCommand = async (
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

export const serializeAws_restJson1GetDeviceDefinitionVersionCommand = async (
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

export const serializeAws_restJson1GetFunctionDefinitionCommand = async (
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

export const serializeAws_restJson1GetFunctionDefinitionVersionCommand = async (
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

export const serializeAws_restJson1GetGroupCommand = async (
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

export const serializeAws_restJson1GetGroupCertificateAuthorityCommand = async (
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

export const serializeAws_restJson1GetGroupCertificateConfigurationCommand = async (
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

export const serializeAws_restJson1GetGroupVersionCommand = async (
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

export const serializeAws_restJson1GetLoggerDefinitionCommand = async (
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

export const serializeAws_restJson1GetLoggerDefinitionVersionCommand = async (
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

export const serializeAws_restJson1GetResourceDefinitionCommand = async (
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

export const serializeAws_restJson1GetResourceDefinitionVersionCommand = async (
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

export const serializeAws_restJson1GetServiceRoleForAccountCommand = async (
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

export const serializeAws_restJson1GetSubscriptionDefinitionCommand = async (
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

export const serializeAws_restJson1GetSubscriptionDefinitionVersionCommand = async (
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

export const serializeAws_restJson1GetThingRuntimeConfigurationCommand = async (
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

export const serializeAws_restJson1ListBulkDeploymentDetailedReportsCommand = async (
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

export const serializeAws_restJson1ListBulkDeploymentsCommand = async (
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

export const serializeAws_restJson1ListConnectorDefinitionsCommand = async (
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

export const serializeAws_restJson1ListConnectorDefinitionVersionsCommand = async (
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

export const serializeAws_restJson1ListCoreDefinitionsCommand = async (
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

export const serializeAws_restJson1ListCoreDefinitionVersionsCommand = async (
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

export const serializeAws_restJson1ListDeploymentsCommand = async (
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

export const serializeAws_restJson1ListDeviceDefinitionsCommand = async (
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

export const serializeAws_restJson1ListDeviceDefinitionVersionsCommand = async (
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

export const serializeAws_restJson1ListFunctionDefinitionsCommand = async (
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

export const serializeAws_restJson1ListFunctionDefinitionVersionsCommand = async (
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

export const serializeAws_restJson1ListGroupCertificateAuthoritiesCommand = async (
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

export const serializeAws_restJson1ListGroupsCommand = async (
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

export const serializeAws_restJson1ListGroupVersionsCommand = async (
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

export const serializeAws_restJson1ListLoggerDefinitionsCommand = async (
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

export const serializeAws_restJson1ListLoggerDefinitionVersionsCommand = async (
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

export const serializeAws_restJson1ListResourceDefinitionsCommand = async (
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

export const serializeAws_restJson1ListResourceDefinitionVersionsCommand = async (
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

export const serializeAws_restJson1ListSubscriptionDefinitionsCommand = async (
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

export const serializeAws_restJson1ListSubscriptionDefinitionVersionsCommand = async (
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

export const serializeAws_restJson1ListTagsForResourceCommand = async (
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

export const serializeAws_restJson1ResetDeploymentsCommand = async (
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

export const serializeAws_restJson1StartBulkDeploymentCommand = async (
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
    ...(input.tags != null && { tags: serializeAws_restJson1Tags(input.tags, context) }),
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

export const serializeAws_restJson1StopBulkDeploymentCommand = async (
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

export const serializeAws_restJson1TagResourceCommand = async (
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
    ...(input.tags != null && { tags: serializeAws_restJson1Tags(input.tags, context) }),
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

export const serializeAws_restJson1UntagResourceCommand = async (
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

export const serializeAws_restJson1UpdateConnectivityInfoCommand = async (
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
      ConnectivityInfo: serializeAws_restJson1__listOfConnectivityInfo(input.ConnectivityInfo, context),
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

export const serializeAws_restJson1UpdateConnectorDefinitionCommand = async (
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

export const serializeAws_restJson1UpdateCoreDefinitionCommand = async (
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

export const serializeAws_restJson1UpdateDeviceDefinitionCommand = async (
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

export const serializeAws_restJson1UpdateFunctionDefinitionCommand = async (
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

export const serializeAws_restJson1UpdateGroupCommand = async (
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

export const serializeAws_restJson1UpdateGroupCertificateConfigurationCommand = async (
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

export const serializeAws_restJson1UpdateLoggerDefinitionCommand = async (
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

export const serializeAws_restJson1UpdateResourceDefinitionCommand = async (
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

export const serializeAws_restJson1UpdateSubscriptionDefinitionCommand = async (
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

export const serializeAws_restJson1UpdateThingRuntimeConfigurationCommand = async (
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
      TelemetryConfiguration: serializeAws_restJson1TelemetryConfigurationUpdate(input.TelemetryConfiguration, context),
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

export const deserializeAws_restJson1AssociateRoleToGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateRoleToGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1AssociateRoleToGroupCommandError(output, context);
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

const deserializeAws_restJson1AssociateRoleToGroupCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.greengrass#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1AssociateServiceRoleToAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateServiceRoleToAccountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1AssociateServiceRoleToAccountCommandError(output, context);
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

const deserializeAws_restJson1AssociateServiceRoleToAccountCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.greengrass#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateConnectorDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConnectorDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateConnectorDefinitionCommandError(output, context);
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

const deserializeAws_restJson1CreateConnectorDefinitionCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateConnectorDefinitionVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConnectorDefinitionVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateConnectorDefinitionVersionCommandError(output, context);
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

const deserializeAws_restJson1CreateConnectorDefinitionVersionCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateCoreDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCoreDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateCoreDefinitionCommandError(output, context);
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

const deserializeAws_restJson1CreateCoreDefinitionCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateCoreDefinitionVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCoreDefinitionVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateCoreDefinitionVersionCommandError(output, context);
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

const deserializeAws_restJson1CreateCoreDefinitionVersionCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateDeploymentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDeploymentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateDeploymentCommandError(output, context);
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

const deserializeAws_restJson1CreateDeploymentCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateDeviceDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDeviceDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateDeviceDefinitionCommandError(output, context);
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

const deserializeAws_restJson1CreateDeviceDefinitionCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateDeviceDefinitionVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDeviceDefinitionVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateDeviceDefinitionVersionCommandError(output, context);
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

const deserializeAws_restJson1CreateDeviceDefinitionVersionCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateFunctionDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFunctionDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateFunctionDefinitionCommandError(output, context);
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

const deserializeAws_restJson1CreateFunctionDefinitionCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateFunctionDefinitionVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFunctionDefinitionVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateFunctionDefinitionVersionCommandError(output, context);
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

const deserializeAws_restJson1CreateFunctionDefinitionVersionCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateGroupCommandError(output, context);
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

const deserializeAws_restJson1CreateGroupCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateGroupCertificateAuthorityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGroupCertificateAuthorityCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateGroupCertificateAuthorityCommandError(output, context);
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

const deserializeAws_restJson1CreateGroupCertificateAuthorityCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.greengrass#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateGroupVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGroupVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateGroupVersionCommandError(output, context);
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

const deserializeAws_restJson1CreateGroupVersionCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateLoggerDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLoggerDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateLoggerDefinitionCommandError(output, context);
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

const deserializeAws_restJson1CreateLoggerDefinitionCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateLoggerDefinitionVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLoggerDefinitionVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateLoggerDefinitionVersionCommandError(output, context);
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

const deserializeAws_restJson1CreateLoggerDefinitionVersionCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateResourceDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateResourceDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateResourceDefinitionCommandError(output, context);
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

const deserializeAws_restJson1CreateResourceDefinitionCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateResourceDefinitionVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateResourceDefinitionVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateResourceDefinitionVersionCommandError(output, context);
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

const deserializeAws_restJson1CreateResourceDefinitionVersionCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateSoftwareUpdateJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSoftwareUpdateJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateSoftwareUpdateJobCommandError(output, context);
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

const deserializeAws_restJson1CreateSoftwareUpdateJobCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.greengrass#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateSubscriptionDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSubscriptionDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateSubscriptionDefinitionCommandError(output, context);
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

const deserializeAws_restJson1CreateSubscriptionDefinitionCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateSubscriptionDefinitionVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSubscriptionDefinitionVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateSubscriptionDefinitionVersionCommandError(output, context);
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

const deserializeAws_restJson1CreateSubscriptionDefinitionVersionCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteConnectorDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConnectorDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteConnectorDefinitionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteConnectorDefinitionCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteCoreDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCoreDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteCoreDefinitionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteCoreDefinitionCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteDeviceDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDeviceDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteDeviceDefinitionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteDeviceDefinitionCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteFunctionDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFunctionDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteFunctionDefinitionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteFunctionDefinitionCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteGroupCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteGroupCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteLoggerDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLoggerDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteLoggerDefinitionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteLoggerDefinitionCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteResourceDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourceDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteResourceDefinitionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteResourceDefinitionCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteSubscriptionDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSubscriptionDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteSubscriptionDefinitionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteSubscriptionDefinitionCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DisassociateRoleFromGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateRoleFromGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DisassociateRoleFromGroupCommandError(output, context);
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

const deserializeAws_restJson1DisassociateRoleFromGroupCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.greengrass#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DisassociateServiceRoleFromAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateServiceRoleFromAccountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DisassociateServiceRoleFromAccountCommandError(output, context);
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

const deserializeAws_restJson1DisassociateServiceRoleFromAccountCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetAssociatedRoleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAssociatedRoleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetAssociatedRoleCommandError(output, context);
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

const deserializeAws_restJson1GetAssociatedRoleCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.greengrass#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetBulkDeploymentStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBulkDeploymentStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetBulkDeploymentStatusCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.BulkDeploymentMetrics != null) {
    contents.BulkDeploymentMetrics = deserializeAws_restJson1BulkDeploymentMetrics(data.BulkDeploymentMetrics, context);
  }
  if (data.BulkDeploymentStatus != null) {
    contents.BulkDeploymentStatus = __expectString(data.BulkDeploymentStatus);
  }
  if (data.CreatedAt != null) {
    contents.CreatedAt = __expectString(data.CreatedAt);
  }
  if (data.ErrorDetails != null) {
    contents.ErrorDetails = deserializeAws_restJson1ErrorDetails(data.ErrorDetails, context);
  }
  if (data.ErrorMessage != null) {
    contents.ErrorMessage = __expectString(data.ErrorMessage);
  }
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1Tags(data.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1GetBulkDeploymentStatusCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetConnectivityInfoCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConnectivityInfoCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetConnectivityInfoCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ConnectivityInfo != null) {
    contents.ConnectivityInfo = deserializeAws_restJson1__listOfConnectivityInfo(data.ConnectivityInfo, context);
  }
  if (data.message != null) {
    contents.Message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1GetConnectivityInfoCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.greengrass#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetConnectorDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConnectorDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetConnectorDefinitionCommandError(output, context);
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
    contents.tags = deserializeAws_restJson1Tags(data.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1GetConnectorDefinitionCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetConnectorDefinitionVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConnectorDefinitionVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetConnectorDefinitionVersionCommandError(output, context);
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
    contents.Definition = deserializeAws_restJson1ConnectorDefinitionVersion(data.Definition, context);
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

const deserializeAws_restJson1GetConnectorDefinitionVersionCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetCoreDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCoreDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetCoreDefinitionCommandError(output, context);
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
    contents.tags = deserializeAws_restJson1Tags(data.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1GetCoreDefinitionCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetCoreDefinitionVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCoreDefinitionVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetCoreDefinitionVersionCommandError(output, context);
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
    contents.Definition = deserializeAws_restJson1CoreDefinitionVersion(data.Definition, context);
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

const deserializeAws_restJson1GetCoreDefinitionVersionCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetDeploymentStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeploymentStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetDeploymentStatusCommandError(output, context);
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
    contents.ErrorDetails = deserializeAws_restJson1ErrorDetails(data.ErrorDetails, context);
  }
  if (data.ErrorMessage != null) {
    contents.ErrorMessage = __expectString(data.ErrorMessage);
  }
  if (data.UpdatedAt != null) {
    contents.UpdatedAt = __expectString(data.UpdatedAt);
  }
  return contents;
};

const deserializeAws_restJson1GetDeploymentStatusCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetDeviceDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeviceDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetDeviceDefinitionCommandError(output, context);
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
    contents.tags = deserializeAws_restJson1Tags(data.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1GetDeviceDefinitionCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetDeviceDefinitionVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeviceDefinitionVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetDeviceDefinitionVersionCommandError(output, context);
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
    contents.Definition = deserializeAws_restJson1DeviceDefinitionVersion(data.Definition, context);
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

const deserializeAws_restJson1GetDeviceDefinitionVersionCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetFunctionDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFunctionDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetFunctionDefinitionCommandError(output, context);
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
    contents.tags = deserializeAws_restJson1Tags(data.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1GetFunctionDefinitionCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetFunctionDefinitionVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFunctionDefinitionVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetFunctionDefinitionVersionCommandError(output, context);
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
    contents.Definition = deserializeAws_restJson1FunctionDefinitionVersion(data.Definition, context);
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

const deserializeAws_restJson1GetFunctionDefinitionVersionCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetGroupCommandError(output, context);
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
    contents.tags = deserializeAws_restJson1Tags(data.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1GetGroupCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetGroupCertificateAuthorityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGroupCertificateAuthorityCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetGroupCertificateAuthorityCommandError(output, context);
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

const deserializeAws_restJson1GetGroupCertificateAuthorityCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.greengrass#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetGroupCertificateConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGroupCertificateConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetGroupCertificateConfigurationCommandError(output, context);
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

const deserializeAws_restJson1GetGroupCertificateConfigurationCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.greengrass#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetGroupVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGroupVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetGroupVersionCommandError(output, context);
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
    contents.Definition = deserializeAws_restJson1GroupVersion(data.Definition, context);
  }
  if (data.Id != null) {
    contents.Id = __expectString(data.Id);
  }
  if (data.Version != null) {
    contents.Version = __expectString(data.Version);
  }
  return contents;
};

const deserializeAws_restJson1GetGroupVersionCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetLoggerDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLoggerDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetLoggerDefinitionCommandError(output, context);
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
    contents.tags = deserializeAws_restJson1Tags(data.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1GetLoggerDefinitionCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetLoggerDefinitionVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLoggerDefinitionVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetLoggerDefinitionVersionCommandError(output, context);
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
    contents.Definition = deserializeAws_restJson1LoggerDefinitionVersion(data.Definition, context);
  }
  if (data.Id != null) {
    contents.Id = __expectString(data.Id);
  }
  if (data.Version != null) {
    contents.Version = __expectString(data.Version);
  }
  return contents;
};

const deserializeAws_restJson1GetLoggerDefinitionVersionCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetResourceDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourceDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetResourceDefinitionCommandError(output, context);
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
    contents.tags = deserializeAws_restJson1Tags(data.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1GetResourceDefinitionCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetResourceDefinitionVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourceDefinitionVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetResourceDefinitionVersionCommandError(output, context);
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
    contents.Definition = deserializeAws_restJson1ResourceDefinitionVersion(data.Definition, context);
  }
  if (data.Id != null) {
    contents.Id = __expectString(data.Id);
  }
  if (data.Version != null) {
    contents.Version = __expectString(data.Version);
  }
  return contents;
};

const deserializeAws_restJson1GetResourceDefinitionVersionCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetServiceRoleForAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServiceRoleForAccountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetServiceRoleForAccountCommandError(output, context);
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

const deserializeAws_restJson1GetServiceRoleForAccountCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetSubscriptionDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSubscriptionDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetSubscriptionDefinitionCommandError(output, context);
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
    contents.tags = deserializeAws_restJson1Tags(data.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1GetSubscriptionDefinitionCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetSubscriptionDefinitionVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSubscriptionDefinitionVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetSubscriptionDefinitionVersionCommandError(output, context);
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
    contents.Definition = deserializeAws_restJson1SubscriptionDefinitionVersion(data.Definition, context);
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

const deserializeAws_restJson1GetSubscriptionDefinitionVersionCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetThingRuntimeConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetThingRuntimeConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetThingRuntimeConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.RuntimeConfiguration != null) {
    contents.RuntimeConfiguration = deserializeAws_restJson1RuntimeConfiguration(data.RuntimeConfiguration, context);
  }
  return contents;
};

const deserializeAws_restJson1GetThingRuntimeConfigurationCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.greengrass#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListBulkDeploymentDetailedReportsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBulkDeploymentDetailedReportsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListBulkDeploymentDetailedReportsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Deployments != null) {
    contents.Deployments = deserializeAws_restJson1BulkDeploymentResults(data.Deployments, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListBulkDeploymentDetailedReportsCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListBulkDeploymentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBulkDeploymentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListBulkDeploymentsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.BulkDeployments != null) {
    contents.BulkDeployments = deserializeAws_restJson1BulkDeployments(data.BulkDeployments, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListBulkDeploymentsCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListConnectorDefinitionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConnectorDefinitionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListConnectorDefinitionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Definitions != null) {
    contents.Definitions = deserializeAws_restJson1__listOfDefinitionInformation(data.Definitions, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListConnectorDefinitionsCommandError = async (
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

export const deserializeAws_restJson1ListConnectorDefinitionVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConnectorDefinitionVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListConnectorDefinitionVersionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Versions != null) {
    contents.Versions = deserializeAws_restJson1__listOfVersionInformation(data.Versions, context);
  }
  return contents;
};

const deserializeAws_restJson1ListConnectorDefinitionVersionsCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListCoreDefinitionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCoreDefinitionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListCoreDefinitionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Definitions != null) {
    contents.Definitions = deserializeAws_restJson1__listOfDefinitionInformation(data.Definitions, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListCoreDefinitionsCommandError = async (
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

export const deserializeAws_restJson1ListCoreDefinitionVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCoreDefinitionVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListCoreDefinitionVersionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Versions != null) {
    contents.Versions = deserializeAws_restJson1__listOfVersionInformation(data.Versions, context);
  }
  return contents;
};

const deserializeAws_restJson1ListCoreDefinitionVersionsCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListDeploymentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeploymentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListDeploymentsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Deployments != null) {
    contents.Deployments = deserializeAws_restJson1Deployments(data.Deployments, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListDeploymentsCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListDeviceDefinitionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeviceDefinitionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListDeviceDefinitionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Definitions != null) {
    contents.Definitions = deserializeAws_restJson1__listOfDefinitionInformation(data.Definitions, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListDeviceDefinitionsCommandError = async (
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

export const deserializeAws_restJson1ListDeviceDefinitionVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeviceDefinitionVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListDeviceDefinitionVersionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Versions != null) {
    contents.Versions = deserializeAws_restJson1__listOfVersionInformation(data.Versions, context);
  }
  return contents;
};

const deserializeAws_restJson1ListDeviceDefinitionVersionsCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListFunctionDefinitionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFunctionDefinitionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListFunctionDefinitionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Definitions != null) {
    contents.Definitions = deserializeAws_restJson1__listOfDefinitionInformation(data.Definitions, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListFunctionDefinitionsCommandError = async (
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

export const deserializeAws_restJson1ListFunctionDefinitionVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFunctionDefinitionVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListFunctionDefinitionVersionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Versions != null) {
    contents.Versions = deserializeAws_restJson1__listOfVersionInformation(data.Versions, context);
  }
  return contents;
};

const deserializeAws_restJson1ListFunctionDefinitionVersionsCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListGroupCertificateAuthoritiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGroupCertificateAuthoritiesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListGroupCertificateAuthoritiesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.GroupCertificateAuthorities != null) {
    contents.GroupCertificateAuthorities = deserializeAws_restJson1__listOfGroupCertificateAuthorityProperties(
      data.GroupCertificateAuthorities,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1ListGroupCertificateAuthoritiesCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.greengrass#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGroupsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListGroupsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Groups != null) {
    contents.Groups = deserializeAws_restJson1__listOfGroupInformation(data.Groups, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListGroupsCommandError = async (
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

export const deserializeAws_restJson1ListGroupVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGroupVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListGroupVersionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Versions != null) {
    contents.Versions = deserializeAws_restJson1__listOfVersionInformation(data.Versions, context);
  }
  return contents;
};

const deserializeAws_restJson1ListGroupVersionsCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListLoggerDefinitionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLoggerDefinitionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListLoggerDefinitionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Definitions != null) {
    contents.Definitions = deserializeAws_restJson1__listOfDefinitionInformation(data.Definitions, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListLoggerDefinitionsCommandError = async (
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

export const deserializeAws_restJson1ListLoggerDefinitionVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLoggerDefinitionVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListLoggerDefinitionVersionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Versions != null) {
    contents.Versions = deserializeAws_restJson1__listOfVersionInformation(data.Versions, context);
  }
  return contents;
};

const deserializeAws_restJson1ListLoggerDefinitionVersionsCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListResourceDefinitionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourceDefinitionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListResourceDefinitionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Definitions != null) {
    contents.Definitions = deserializeAws_restJson1__listOfDefinitionInformation(data.Definitions, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListResourceDefinitionsCommandError = async (
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

export const deserializeAws_restJson1ListResourceDefinitionVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourceDefinitionVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListResourceDefinitionVersionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Versions != null) {
    contents.Versions = deserializeAws_restJson1__listOfVersionInformation(data.Versions, context);
  }
  return contents;
};

const deserializeAws_restJson1ListResourceDefinitionVersionsCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListSubscriptionDefinitionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSubscriptionDefinitionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListSubscriptionDefinitionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Definitions != null) {
    contents.Definitions = deserializeAws_restJson1__listOfDefinitionInformation(data.Definitions, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListSubscriptionDefinitionsCommandError = async (
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

export const deserializeAws_restJson1ListSubscriptionDefinitionVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSubscriptionDefinitionVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListSubscriptionDefinitionVersionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Versions != null) {
    contents.Versions = deserializeAws_restJson1__listOfVersionInformation(data.Versions, context);
  }
  return contents;
};

const deserializeAws_restJson1ListSubscriptionDefinitionVersionsCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTagsForResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1Tags(data.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1ListTagsForResourceCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ResetDeploymentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResetDeploymentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ResetDeploymentsCommandError(output, context);
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

const deserializeAws_restJson1ResetDeploymentsCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1StartBulkDeploymentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartBulkDeploymentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartBulkDeploymentCommandError(output, context);
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

const deserializeAws_restJson1StartBulkDeploymentCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1StopBulkDeploymentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopBulkDeploymentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StopBulkDeploymentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1StopBulkDeploymentCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1TagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1TagResourceCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1UntagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UntagResourceCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateConnectivityInfoCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConnectivityInfoCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateConnectivityInfoCommandError(output, context);
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

const deserializeAws_restJson1UpdateConnectivityInfoCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.greengrass#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateConnectorDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConnectorDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateConnectorDefinitionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateConnectorDefinitionCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateCoreDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCoreDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateCoreDefinitionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateCoreDefinitionCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateDeviceDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDeviceDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateDeviceDefinitionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateDeviceDefinitionCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateFunctionDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFunctionDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateFunctionDefinitionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateFunctionDefinitionCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateGroupCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateGroupCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateGroupCertificateConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGroupCertificateConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateGroupCertificateConfigurationCommandError(output, context);
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

const deserializeAws_restJson1UpdateGroupCertificateConfigurationCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.greengrass#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateLoggerDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLoggerDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateLoggerDefinitionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateLoggerDefinitionCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateResourceDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateResourceDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateResourceDefinitionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateResourceDefinitionCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateSubscriptionDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSubscriptionDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateSubscriptionDefinitionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateSubscriptionDefinitionCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateThingRuntimeConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateThingRuntimeConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateThingRuntimeConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateThingRuntimeConfigurationCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.greengrass#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
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
const deserializeAws_restJson1BadRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BadRequestException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.ErrorDetails != null) {
    contents.ErrorDetails = deserializeAws_restJson1ErrorDetails(data.ErrorDetails, context);
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

const deserializeAws_restJson1InternalServerErrorExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerErrorException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.ErrorDetails != null) {
    contents.ErrorDetails = deserializeAws_restJson1ErrorDetails(data.ErrorDetails, context);
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

const serializeAws_restJson1__listOf__string = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1__listOfConnectivityInfo = (input: ConnectivityInfo[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1ConnectivityInfo(entry, context);
    });
};

const serializeAws_restJson1__listOfConnector = (input: Connector[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1Connector(entry, context);
    });
};

const serializeAws_restJson1__listOfCore = (input: Core[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1Core(entry, context);
    });
};

const serializeAws_restJson1__listOfDevice = (input: Device[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1Device(entry, context);
    });
};

const serializeAws_restJson1__listOfFunction = (input: Function[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1Function(entry, context);
    });
};

const serializeAws_restJson1__listOfLogger = (input: Logger[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1Logger(entry, context);
    });
};

const serializeAws_restJson1__listOfResource = (input: Resource[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1Resource(entry, context);
    });
};

const serializeAws_restJson1__listOfResourceAccessPolicy = (
  input: ResourceAccessPolicy[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1ResourceAccessPolicy(entry, context);
    });
};

const serializeAws_restJson1__listOfSubscription = (input: Subscription[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1Subscription(entry, context);
    });
};

const serializeAws_restJson1__mapOf__string = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1ConnectivityInfo = (input: ConnectivityInfo, context: __SerdeContext): any => {
  return {
    ...(input.HostAddress != null && { HostAddress: input.HostAddress }),
    ...(input.Id != null && { Id: input.Id }),
    ...(input.Metadata != null && { Metadata: input.Metadata }),
    ...(input.PortNumber != null && { PortNumber: input.PortNumber }),
  };
};

const serializeAws_restJson1Connector = (input: Connector, context: __SerdeContext): any => {
  return {
    ...(input.ConnectorArn != null && { ConnectorArn: input.ConnectorArn }),
    ...(input.Id != null && { Id: input.Id }),
    ...(input.Parameters != null && { Parameters: serializeAws_restJson1__mapOf__string(input.Parameters, context) }),
  };
};

const serializeAws_restJson1ConnectorDefinitionVersion = (
  input: ConnectorDefinitionVersion,
  context: __SerdeContext
): any => {
  return {
    ...(input.Connectors != null && { Connectors: serializeAws_restJson1__listOfConnector(input.Connectors, context) }),
  };
};

const serializeAws_restJson1Core = (input: Core, context: __SerdeContext): any => {
  return {
    ...(input.CertificateArn != null && { CertificateArn: input.CertificateArn }),
    ...(input.Id != null && { Id: input.Id }),
    ...(input.SyncShadow != null && { SyncShadow: input.SyncShadow }),
    ...(input.ThingArn != null && { ThingArn: input.ThingArn }),
  };
};

const serializeAws_restJson1CoreDefinitionVersion = (input: CoreDefinitionVersion, context: __SerdeContext): any => {
  return {
    ...(input.Cores != null && { Cores: serializeAws_restJson1__listOfCore(input.Cores, context) }),
  };
};

const serializeAws_restJson1Device = (input: Device, context: __SerdeContext): any => {
  return {
    ...(input.CertificateArn != null && { CertificateArn: input.CertificateArn }),
    ...(input.Id != null && { Id: input.Id }),
    ...(input.SyncShadow != null && { SyncShadow: input.SyncShadow }),
    ...(input.ThingArn != null && { ThingArn: input.ThingArn }),
  };
};

const serializeAws_restJson1DeviceDefinitionVersion = (
  input: DeviceDefinitionVersion,
  context: __SerdeContext
): any => {
  return {
    ...(input.Devices != null && { Devices: serializeAws_restJson1__listOfDevice(input.Devices, context) }),
  };
};

const serializeAws_restJson1Function = (input: Function, context: __SerdeContext): any => {
  return {
    ...(input.FunctionArn != null && { FunctionArn: input.FunctionArn }),
    ...(input.FunctionConfiguration != null && {
      FunctionConfiguration: serializeAws_restJson1FunctionConfiguration(input.FunctionConfiguration, context),
    }),
    ...(input.Id != null && { Id: input.Id }),
  };
};

const serializeAws_restJson1FunctionConfiguration = (input: FunctionConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.EncodingType != null && { EncodingType: input.EncodingType }),
    ...(input.Environment != null && {
      Environment: serializeAws_restJson1FunctionConfigurationEnvironment(input.Environment, context),
    }),
    ...(input.ExecArgs != null && { ExecArgs: input.ExecArgs }),
    ...(input.Executable != null && { Executable: input.Executable }),
    ...(input.FunctionRuntimeOverride != null && { FunctionRuntimeOverride: input.FunctionRuntimeOverride }),
    ...(input.MemorySize != null && { MemorySize: input.MemorySize }),
    ...(input.Pinned != null && { Pinned: input.Pinned }),
    ...(input.Timeout != null && { Timeout: input.Timeout }),
  };
};

const serializeAws_restJson1FunctionConfigurationEnvironment = (
  input: FunctionConfigurationEnvironment,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccessSysfs != null && { AccessSysfs: input.AccessSysfs }),
    ...(input.Execution != null && {
      Execution: serializeAws_restJson1FunctionExecutionConfig(input.Execution, context),
    }),
    ...(input.ResourceAccessPolicies != null && {
      ResourceAccessPolicies: serializeAws_restJson1__listOfResourceAccessPolicy(input.ResourceAccessPolicies, context),
    }),
    ...(input.Variables != null && { Variables: serializeAws_restJson1__mapOf__string(input.Variables, context) }),
  };
};

const serializeAws_restJson1FunctionDefaultConfig = (input: FunctionDefaultConfig, context: __SerdeContext): any => {
  return {
    ...(input.Execution != null && {
      Execution: serializeAws_restJson1FunctionDefaultExecutionConfig(input.Execution, context),
    }),
  };
};

const serializeAws_restJson1FunctionDefaultExecutionConfig = (
  input: FunctionDefaultExecutionConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.IsolationMode != null && { IsolationMode: input.IsolationMode }),
    ...(input.RunAs != null && { RunAs: serializeAws_restJson1FunctionRunAsConfig(input.RunAs, context) }),
  };
};

const serializeAws_restJson1FunctionDefinitionVersion = (
  input: FunctionDefinitionVersion,
  context: __SerdeContext
): any => {
  return {
    ...(input.DefaultConfig != null && {
      DefaultConfig: serializeAws_restJson1FunctionDefaultConfig(input.DefaultConfig, context),
    }),
    ...(input.Functions != null && { Functions: serializeAws_restJson1__listOfFunction(input.Functions, context) }),
  };
};

const serializeAws_restJson1FunctionExecutionConfig = (
  input: FunctionExecutionConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.IsolationMode != null && { IsolationMode: input.IsolationMode }),
    ...(input.RunAs != null && { RunAs: serializeAws_restJson1FunctionRunAsConfig(input.RunAs, context) }),
  };
};

const serializeAws_restJson1FunctionRunAsConfig = (input: FunctionRunAsConfig, context: __SerdeContext): any => {
  return {
    ...(input.Gid != null && { Gid: input.Gid }),
    ...(input.Uid != null && { Uid: input.Uid }),
  };
};

const serializeAws_restJson1GroupOwnerSetting = (input: GroupOwnerSetting, context: __SerdeContext): any => {
  return {
    ...(input.AutoAddGroupOwner != null && { AutoAddGroupOwner: input.AutoAddGroupOwner }),
    ...(input.GroupOwner != null && { GroupOwner: input.GroupOwner }),
  };
};

const serializeAws_restJson1GroupVersion = (input: GroupVersion, context: __SerdeContext): any => {
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

const serializeAws_restJson1LocalDeviceResourceData = (
  input: LocalDeviceResourceData,
  context: __SerdeContext
): any => {
  return {
    ...(input.GroupOwnerSetting != null && {
      GroupOwnerSetting: serializeAws_restJson1GroupOwnerSetting(input.GroupOwnerSetting, context),
    }),
    ...(input.SourcePath != null && { SourcePath: input.SourcePath }),
  };
};

const serializeAws_restJson1LocalVolumeResourceData = (
  input: LocalVolumeResourceData,
  context: __SerdeContext
): any => {
  return {
    ...(input.DestinationPath != null && { DestinationPath: input.DestinationPath }),
    ...(input.GroupOwnerSetting != null && {
      GroupOwnerSetting: serializeAws_restJson1GroupOwnerSetting(input.GroupOwnerSetting, context),
    }),
    ...(input.SourcePath != null && { SourcePath: input.SourcePath }),
  };
};

const serializeAws_restJson1Logger = (input: Logger, context: __SerdeContext): any => {
  return {
    ...(input.Component != null && { Component: input.Component }),
    ...(input.Id != null && { Id: input.Id }),
    ...(input.Level != null && { Level: input.Level }),
    ...(input.Space != null && { Space: input.Space }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

const serializeAws_restJson1LoggerDefinitionVersion = (
  input: LoggerDefinitionVersion,
  context: __SerdeContext
): any => {
  return {
    ...(input.Loggers != null && { Loggers: serializeAws_restJson1__listOfLogger(input.Loggers, context) }),
  };
};

const serializeAws_restJson1Resource = (input: Resource, context: __SerdeContext): any => {
  return {
    ...(input.Id != null && { Id: input.Id }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.ResourceDataContainer != null && {
      ResourceDataContainer: serializeAws_restJson1ResourceDataContainer(input.ResourceDataContainer, context),
    }),
  };
};

const serializeAws_restJson1ResourceAccessPolicy = (input: ResourceAccessPolicy, context: __SerdeContext): any => {
  return {
    ...(input.Permission != null && { Permission: input.Permission }),
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
  };
};

const serializeAws_restJson1ResourceDataContainer = (input: ResourceDataContainer, context: __SerdeContext): any => {
  return {
    ...(input.LocalDeviceResourceData != null && {
      LocalDeviceResourceData: serializeAws_restJson1LocalDeviceResourceData(input.LocalDeviceResourceData, context),
    }),
    ...(input.LocalVolumeResourceData != null && {
      LocalVolumeResourceData: serializeAws_restJson1LocalVolumeResourceData(input.LocalVolumeResourceData, context),
    }),
    ...(input.S3MachineLearningModelResourceData != null && {
      S3MachineLearningModelResourceData: serializeAws_restJson1S3MachineLearningModelResourceData(
        input.S3MachineLearningModelResourceData,
        context
      ),
    }),
    ...(input.SageMakerMachineLearningModelResourceData != null && {
      SageMakerMachineLearningModelResourceData: serializeAws_restJson1SageMakerMachineLearningModelResourceData(
        input.SageMakerMachineLearningModelResourceData,
        context
      ),
    }),
    ...(input.SecretsManagerSecretResourceData != null && {
      SecretsManagerSecretResourceData: serializeAws_restJson1SecretsManagerSecretResourceData(
        input.SecretsManagerSecretResourceData,
        context
      ),
    }),
  };
};

const serializeAws_restJson1ResourceDefinitionVersion = (
  input: ResourceDefinitionVersion,
  context: __SerdeContext
): any => {
  return {
    ...(input.Resources != null && { Resources: serializeAws_restJson1__listOfResource(input.Resources, context) }),
  };
};

const serializeAws_restJson1ResourceDownloadOwnerSetting = (
  input: ResourceDownloadOwnerSetting,
  context: __SerdeContext
): any => {
  return {
    ...(input.GroupOwner != null && { GroupOwner: input.GroupOwner }),
    ...(input.GroupPermission != null && { GroupPermission: input.GroupPermission }),
  };
};

const serializeAws_restJson1S3MachineLearningModelResourceData = (
  input: S3MachineLearningModelResourceData,
  context: __SerdeContext
): any => {
  return {
    ...(input.DestinationPath != null && { DestinationPath: input.DestinationPath }),
    ...(input.OwnerSetting != null && {
      OwnerSetting: serializeAws_restJson1ResourceDownloadOwnerSetting(input.OwnerSetting, context),
    }),
    ...(input.S3Uri != null && { S3Uri: input.S3Uri }),
  };
};

const serializeAws_restJson1SageMakerMachineLearningModelResourceData = (
  input: SageMakerMachineLearningModelResourceData,
  context: __SerdeContext
): any => {
  return {
    ...(input.DestinationPath != null && { DestinationPath: input.DestinationPath }),
    ...(input.OwnerSetting != null && {
      OwnerSetting: serializeAws_restJson1ResourceDownloadOwnerSetting(input.OwnerSetting, context),
    }),
    ...(input.SageMakerJobArn != null && { SageMakerJobArn: input.SageMakerJobArn }),
  };
};

const serializeAws_restJson1SecretsManagerSecretResourceData = (
  input: SecretsManagerSecretResourceData,
  context: __SerdeContext
): any => {
  return {
    ...(input.ARN != null && { ARN: input.ARN }),
    ...(input.AdditionalStagingLabelsToDownload != null && {
      AdditionalStagingLabelsToDownload: serializeAws_restJson1__listOf__string(
        input.AdditionalStagingLabelsToDownload,
        context
      ),
    }),
  };
};

const serializeAws_restJson1Subscription = (input: Subscription, context: __SerdeContext): any => {
  return {
    ...(input.Id != null && { Id: input.Id }),
    ...(input.Source != null && { Source: input.Source }),
    ...(input.Subject != null && { Subject: input.Subject }),
    ...(input.Target != null && { Target: input.Target }),
  };
};

const serializeAws_restJson1SubscriptionDefinitionVersion = (
  input: SubscriptionDefinitionVersion,
  context: __SerdeContext
): any => {
  return {
    ...(input.Subscriptions != null && {
      Subscriptions: serializeAws_restJson1__listOfSubscription(input.Subscriptions, context),
    }),
  };
};

const serializeAws_restJson1Tags = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1TelemetryConfigurationUpdate = (
  input: TelemetryConfigurationUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.Telemetry != null && { Telemetry: input.Telemetry }),
  };
};

const serializeAws_restJson1UpdateTargets = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const deserializeAws_restJson1__listOf__string = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1__listOfConnectivityInfo = (output: any, context: __SerdeContext): ConnectivityInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ConnectivityInfo(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1__listOfConnector = (output: any, context: __SerdeContext): Connector[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Connector(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1__listOfCore = (output: any, context: __SerdeContext): Core[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Core(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1__listOfDefinitionInformation = (
  output: any,
  context: __SerdeContext
): DefinitionInformation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DefinitionInformation(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1__listOfDevice = (output: any, context: __SerdeContext): Device[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Device(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1__listOfFunction = (output: any, context: __SerdeContext): Function[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Function(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1__listOfGroupCertificateAuthorityProperties = (
  output: any,
  context: __SerdeContext
): GroupCertificateAuthorityProperties[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1GroupCertificateAuthorityProperties(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1__listOfGroupInformation = (output: any, context: __SerdeContext): GroupInformation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1GroupInformation(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1__listOfLogger = (output: any, context: __SerdeContext): Logger[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Logger(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1__listOfResource = (output: any, context: __SerdeContext): Resource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Resource(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1__listOfResourceAccessPolicy = (
  output: any,
  context: __SerdeContext
): ResourceAccessPolicy[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ResourceAccessPolicy(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1__listOfSubscription = (output: any, context: __SerdeContext): Subscription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Subscription(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1__listOfVersionInformation = (
  output: any,
  context: __SerdeContext
): VersionInformation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1VersionInformation(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1__mapOf__string = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1BulkDeployment = (output: any, context: __SerdeContext): BulkDeployment => {
  return {
    BulkDeploymentArn: __expectString(output.BulkDeploymentArn),
    BulkDeploymentId: __expectString(output.BulkDeploymentId),
    CreatedAt: __expectString(output.CreatedAt),
  } as any;
};

const deserializeAws_restJson1BulkDeploymentMetrics = (output: any, context: __SerdeContext): BulkDeploymentMetrics => {
  return {
    InvalidInputRecords: __expectInt32(output.InvalidInputRecords),
    RecordsProcessed: __expectInt32(output.RecordsProcessed),
    RetryAttempts: __expectInt32(output.RetryAttempts),
  } as any;
};

const deserializeAws_restJson1BulkDeploymentResult = (output: any, context: __SerdeContext): BulkDeploymentResult => {
  return {
    CreatedAt: __expectString(output.CreatedAt),
    DeploymentArn: __expectString(output.DeploymentArn),
    DeploymentId: __expectString(output.DeploymentId),
    DeploymentStatus: __expectString(output.DeploymentStatus),
    DeploymentType: __expectString(output.DeploymentType),
    ErrorDetails:
      output.ErrorDetails != null ? deserializeAws_restJson1ErrorDetails(output.ErrorDetails, context) : undefined,
    ErrorMessage: __expectString(output.ErrorMessage),
    GroupArn: __expectString(output.GroupArn),
  } as any;
};

const deserializeAws_restJson1BulkDeploymentResults = (
  output: any,
  context: __SerdeContext
): BulkDeploymentResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1BulkDeploymentResult(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1BulkDeployments = (output: any, context: __SerdeContext): BulkDeployment[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1BulkDeployment(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ConnectivityInfo = (output: any, context: __SerdeContext): ConnectivityInfo => {
  return {
    HostAddress: __expectString(output.HostAddress),
    Id: __expectString(output.Id),
    Metadata: __expectString(output.Metadata),
    PortNumber: __expectInt32(output.PortNumber),
  } as any;
};

const deserializeAws_restJson1Connector = (output: any, context: __SerdeContext): Connector => {
  return {
    ConnectorArn: __expectString(output.ConnectorArn),
    Id: __expectString(output.Id),
    Parameters:
      output.Parameters != null ? deserializeAws_restJson1__mapOf__string(output.Parameters, context) : undefined,
  } as any;
};

const deserializeAws_restJson1ConnectorDefinitionVersion = (
  output: any,
  context: __SerdeContext
): ConnectorDefinitionVersion => {
  return {
    Connectors:
      output.Connectors != null ? deserializeAws_restJson1__listOfConnector(output.Connectors, context) : undefined,
  } as any;
};

const deserializeAws_restJson1Core = (output: any, context: __SerdeContext): Core => {
  return {
    CertificateArn: __expectString(output.CertificateArn),
    Id: __expectString(output.Id),
    SyncShadow: __expectBoolean(output.SyncShadow),
    ThingArn: __expectString(output.ThingArn),
  } as any;
};

const deserializeAws_restJson1CoreDefinitionVersion = (output: any, context: __SerdeContext): CoreDefinitionVersion => {
  return {
    Cores: output.Cores != null ? deserializeAws_restJson1__listOfCore(output.Cores, context) : undefined,
  } as any;
};

const deserializeAws_restJson1DefinitionInformation = (output: any, context: __SerdeContext): DefinitionInformation => {
  return {
    Arn: __expectString(output.Arn),
    CreationTimestamp: __expectString(output.CreationTimestamp),
    Id: __expectString(output.Id),
    LastUpdatedTimestamp: __expectString(output.LastUpdatedTimestamp),
    LatestVersion: __expectString(output.LatestVersion),
    LatestVersionArn: __expectString(output.LatestVersionArn),
    Name: __expectString(output.Name),
    Tags: output.tags != null ? deserializeAws_restJson1Tags(output.tags, context) : undefined,
  } as any;
};

const deserializeAws_restJson1Deployment = (output: any, context: __SerdeContext): Deployment => {
  return {
    CreatedAt: __expectString(output.CreatedAt),
    DeploymentArn: __expectString(output.DeploymentArn),
    DeploymentId: __expectString(output.DeploymentId),
    DeploymentType: __expectString(output.DeploymentType),
    GroupArn: __expectString(output.GroupArn),
  } as any;
};

const deserializeAws_restJson1Deployments = (output: any, context: __SerdeContext): Deployment[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Deployment(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Device = (output: any, context: __SerdeContext): Device => {
  return {
    CertificateArn: __expectString(output.CertificateArn),
    Id: __expectString(output.Id),
    SyncShadow: __expectBoolean(output.SyncShadow),
    ThingArn: __expectString(output.ThingArn),
  } as any;
};

const deserializeAws_restJson1DeviceDefinitionVersion = (
  output: any,
  context: __SerdeContext
): DeviceDefinitionVersion => {
  return {
    Devices: output.Devices != null ? deserializeAws_restJson1__listOfDevice(output.Devices, context) : undefined,
  } as any;
};

const deserializeAws_restJson1ErrorDetail = (output: any, context: __SerdeContext): ErrorDetail => {
  return {
    DetailedErrorCode: __expectString(output.DetailedErrorCode),
    DetailedErrorMessage: __expectString(output.DetailedErrorMessage),
  } as any;
};

const deserializeAws_restJson1ErrorDetails = (output: any, context: __SerdeContext): ErrorDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ErrorDetail(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Function = (output: any, context: __SerdeContext): Function => {
  return {
    FunctionArn: __expectString(output.FunctionArn),
    FunctionConfiguration:
      output.FunctionConfiguration != null
        ? deserializeAws_restJson1FunctionConfiguration(output.FunctionConfiguration, context)
        : undefined,
    Id: __expectString(output.Id),
  } as any;
};

const deserializeAws_restJson1FunctionConfiguration = (output: any, context: __SerdeContext): FunctionConfiguration => {
  return {
    EncodingType: __expectString(output.EncodingType),
    Environment:
      output.Environment != null
        ? deserializeAws_restJson1FunctionConfigurationEnvironment(output.Environment, context)
        : undefined,
    ExecArgs: __expectString(output.ExecArgs),
    Executable: __expectString(output.Executable),
    FunctionRuntimeOverride: __expectString(output.FunctionRuntimeOverride),
    MemorySize: __expectInt32(output.MemorySize),
    Pinned: __expectBoolean(output.Pinned),
    Timeout: __expectInt32(output.Timeout),
  } as any;
};

const deserializeAws_restJson1FunctionConfigurationEnvironment = (
  output: any,
  context: __SerdeContext
): FunctionConfigurationEnvironment => {
  return {
    AccessSysfs: __expectBoolean(output.AccessSysfs),
    Execution:
      output.Execution != null ? deserializeAws_restJson1FunctionExecutionConfig(output.Execution, context) : undefined,
    ResourceAccessPolicies:
      output.ResourceAccessPolicies != null
        ? deserializeAws_restJson1__listOfResourceAccessPolicy(output.ResourceAccessPolicies, context)
        : undefined,
    Variables:
      output.Variables != null ? deserializeAws_restJson1__mapOf__string(output.Variables, context) : undefined,
  } as any;
};

const deserializeAws_restJson1FunctionDefaultConfig = (output: any, context: __SerdeContext): FunctionDefaultConfig => {
  return {
    Execution:
      output.Execution != null
        ? deserializeAws_restJson1FunctionDefaultExecutionConfig(output.Execution, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1FunctionDefaultExecutionConfig = (
  output: any,
  context: __SerdeContext
): FunctionDefaultExecutionConfig => {
  return {
    IsolationMode: __expectString(output.IsolationMode),
    RunAs: output.RunAs != null ? deserializeAws_restJson1FunctionRunAsConfig(output.RunAs, context) : undefined,
  } as any;
};

const deserializeAws_restJson1FunctionDefinitionVersion = (
  output: any,
  context: __SerdeContext
): FunctionDefinitionVersion => {
  return {
    DefaultConfig:
      output.DefaultConfig != null
        ? deserializeAws_restJson1FunctionDefaultConfig(output.DefaultConfig, context)
        : undefined,
    Functions:
      output.Functions != null ? deserializeAws_restJson1__listOfFunction(output.Functions, context) : undefined,
  } as any;
};

const deserializeAws_restJson1FunctionExecutionConfig = (
  output: any,
  context: __SerdeContext
): FunctionExecutionConfig => {
  return {
    IsolationMode: __expectString(output.IsolationMode),
    RunAs: output.RunAs != null ? deserializeAws_restJson1FunctionRunAsConfig(output.RunAs, context) : undefined,
  } as any;
};

const deserializeAws_restJson1FunctionRunAsConfig = (output: any, context: __SerdeContext): FunctionRunAsConfig => {
  return {
    Gid: __expectInt32(output.Gid),
    Uid: __expectInt32(output.Uid),
  } as any;
};

const deserializeAws_restJson1GroupCertificateAuthorityProperties = (
  output: any,
  context: __SerdeContext
): GroupCertificateAuthorityProperties => {
  return {
    GroupCertificateAuthorityArn: __expectString(output.GroupCertificateAuthorityArn),
    GroupCertificateAuthorityId: __expectString(output.GroupCertificateAuthorityId),
  } as any;
};

const deserializeAws_restJson1GroupInformation = (output: any, context: __SerdeContext): GroupInformation => {
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

const deserializeAws_restJson1GroupOwnerSetting = (output: any, context: __SerdeContext): GroupOwnerSetting => {
  return {
    AutoAddGroupOwner: __expectBoolean(output.AutoAddGroupOwner),
    GroupOwner: __expectString(output.GroupOwner),
  } as any;
};

const deserializeAws_restJson1GroupVersion = (output: any, context: __SerdeContext): GroupVersion => {
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

const deserializeAws_restJson1LocalDeviceResourceData = (
  output: any,
  context: __SerdeContext
): LocalDeviceResourceData => {
  return {
    GroupOwnerSetting:
      output.GroupOwnerSetting != null
        ? deserializeAws_restJson1GroupOwnerSetting(output.GroupOwnerSetting, context)
        : undefined,
    SourcePath: __expectString(output.SourcePath),
  } as any;
};

const deserializeAws_restJson1LocalVolumeResourceData = (
  output: any,
  context: __SerdeContext
): LocalVolumeResourceData => {
  return {
    DestinationPath: __expectString(output.DestinationPath),
    GroupOwnerSetting:
      output.GroupOwnerSetting != null
        ? deserializeAws_restJson1GroupOwnerSetting(output.GroupOwnerSetting, context)
        : undefined,
    SourcePath: __expectString(output.SourcePath),
  } as any;
};

const deserializeAws_restJson1Logger = (output: any, context: __SerdeContext): Logger => {
  return {
    Component: __expectString(output.Component),
    Id: __expectString(output.Id),
    Level: __expectString(output.Level),
    Space: __expectInt32(output.Space),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1LoggerDefinitionVersion = (
  output: any,
  context: __SerdeContext
): LoggerDefinitionVersion => {
  return {
    Loggers: output.Loggers != null ? deserializeAws_restJson1__listOfLogger(output.Loggers, context) : undefined,
  } as any;
};

const deserializeAws_restJson1Resource = (output: any, context: __SerdeContext): Resource => {
  return {
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
    ResourceDataContainer:
      output.ResourceDataContainer != null
        ? deserializeAws_restJson1ResourceDataContainer(output.ResourceDataContainer, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ResourceAccessPolicy = (output: any, context: __SerdeContext): ResourceAccessPolicy => {
  return {
    Permission: __expectString(output.Permission),
    ResourceId: __expectString(output.ResourceId),
  } as any;
};

const deserializeAws_restJson1ResourceDataContainer = (output: any, context: __SerdeContext): ResourceDataContainer => {
  return {
    LocalDeviceResourceData:
      output.LocalDeviceResourceData != null
        ? deserializeAws_restJson1LocalDeviceResourceData(output.LocalDeviceResourceData, context)
        : undefined,
    LocalVolumeResourceData:
      output.LocalVolumeResourceData != null
        ? deserializeAws_restJson1LocalVolumeResourceData(output.LocalVolumeResourceData, context)
        : undefined,
    S3MachineLearningModelResourceData:
      output.S3MachineLearningModelResourceData != null
        ? deserializeAws_restJson1S3MachineLearningModelResourceData(output.S3MachineLearningModelResourceData, context)
        : undefined,
    SageMakerMachineLearningModelResourceData:
      output.SageMakerMachineLearningModelResourceData != null
        ? deserializeAws_restJson1SageMakerMachineLearningModelResourceData(
            output.SageMakerMachineLearningModelResourceData,
            context
          )
        : undefined,
    SecretsManagerSecretResourceData:
      output.SecretsManagerSecretResourceData != null
        ? deserializeAws_restJson1SecretsManagerSecretResourceData(output.SecretsManagerSecretResourceData, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ResourceDefinitionVersion = (
  output: any,
  context: __SerdeContext
): ResourceDefinitionVersion => {
  return {
    Resources:
      output.Resources != null ? deserializeAws_restJson1__listOfResource(output.Resources, context) : undefined,
  } as any;
};

const deserializeAws_restJson1ResourceDownloadOwnerSetting = (
  output: any,
  context: __SerdeContext
): ResourceDownloadOwnerSetting => {
  return {
    GroupOwner: __expectString(output.GroupOwner),
    GroupPermission: __expectString(output.GroupPermission),
  } as any;
};

const deserializeAws_restJson1RuntimeConfiguration = (output: any, context: __SerdeContext): RuntimeConfiguration => {
  return {
    TelemetryConfiguration:
      output.TelemetryConfiguration != null
        ? deserializeAws_restJson1TelemetryConfiguration(output.TelemetryConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1S3MachineLearningModelResourceData = (
  output: any,
  context: __SerdeContext
): S3MachineLearningModelResourceData => {
  return {
    DestinationPath: __expectString(output.DestinationPath),
    OwnerSetting:
      output.OwnerSetting != null
        ? deserializeAws_restJson1ResourceDownloadOwnerSetting(output.OwnerSetting, context)
        : undefined,
    S3Uri: __expectString(output.S3Uri),
  } as any;
};

const deserializeAws_restJson1SageMakerMachineLearningModelResourceData = (
  output: any,
  context: __SerdeContext
): SageMakerMachineLearningModelResourceData => {
  return {
    DestinationPath: __expectString(output.DestinationPath),
    OwnerSetting:
      output.OwnerSetting != null
        ? deserializeAws_restJson1ResourceDownloadOwnerSetting(output.OwnerSetting, context)
        : undefined,
    SageMakerJobArn: __expectString(output.SageMakerJobArn),
  } as any;
};

const deserializeAws_restJson1SecretsManagerSecretResourceData = (
  output: any,
  context: __SerdeContext
): SecretsManagerSecretResourceData => {
  return {
    ARN: __expectString(output.ARN),
    AdditionalStagingLabelsToDownload:
      output.AdditionalStagingLabelsToDownload != null
        ? deserializeAws_restJson1__listOf__string(output.AdditionalStagingLabelsToDownload, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1Subscription = (output: any, context: __SerdeContext): Subscription => {
  return {
    Id: __expectString(output.Id),
    Source: __expectString(output.Source),
    Subject: __expectString(output.Subject),
    Target: __expectString(output.Target),
  } as any;
};

const deserializeAws_restJson1SubscriptionDefinitionVersion = (
  output: any,
  context: __SerdeContext
): SubscriptionDefinitionVersion => {
  return {
    Subscriptions:
      output.Subscriptions != null
        ? deserializeAws_restJson1__listOfSubscription(output.Subscriptions, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1Tags = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1TelemetryConfiguration = (
  output: any,
  context: __SerdeContext
): TelemetryConfiguration => {
  return {
    ConfigurationSyncStatus: __expectString(output.ConfigurationSyncStatus),
    Telemetry: __expectString(output.Telemetry),
  } as any;
};

const deserializeAws_restJson1VersionInformation = (output: any, context: __SerdeContext): VersionInformation => {
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
