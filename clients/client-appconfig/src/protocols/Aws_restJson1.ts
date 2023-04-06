// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  expectUnion as __expectUnion,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  limitedParseFloat32 as __limitedParseFloat32,
  map as __map,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  resolvedPath as __resolvedPath,
  serializeFloat as __serializeFloat,
  strictParseInt32 as __strictParseInt32,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { CreateApplicationCommandInput, CreateApplicationCommandOutput } from "../commands/CreateApplicationCommand";
import {
  CreateConfigurationProfileCommandInput,
  CreateConfigurationProfileCommandOutput,
} from "../commands/CreateConfigurationProfileCommand";
import {
  CreateDeploymentStrategyCommandInput,
  CreateDeploymentStrategyCommandOutput,
} from "../commands/CreateDeploymentStrategyCommand";
import { CreateEnvironmentCommandInput, CreateEnvironmentCommandOutput } from "../commands/CreateEnvironmentCommand";
import {
  CreateExtensionAssociationCommandInput,
  CreateExtensionAssociationCommandOutput,
} from "../commands/CreateExtensionAssociationCommand";
import { CreateExtensionCommandInput, CreateExtensionCommandOutput } from "../commands/CreateExtensionCommand";
import {
  CreateHostedConfigurationVersionCommandInput,
  CreateHostedConfigurationVersionCommandOutput,
} from "../commands/CreateHostedConfigurationVersionCommand";
import { DeleteApplicationCommandInput, DeleteApplicationCommandOutput } from "../commands/DeleteApplicationCommand";
import {
  DeleteConfigurationProfileCommandInput,
  DeleteConfigurationProfileCommandOutput,
} from "../commands/DeleteConfigurationProfileCommand";
import {
  DeleteDeploymentStrategyCommandInput,
  DeleteDeploymentStrategyCommandOutput,
} from "../commands/DeleteDeploymentStrategyCommand";
import { DeleteEnvironmentCommandInput, DeleteEnvironmentCommandOutput } from "../commands/DeleteEnvironmentCommand";
import {
  DeleteExtensionAssociationCommandInput,
  DeleteExtensionAssociationCommandOutput,
} from "../commands/DeleteExtensionAssociationCommand";
import { DeleteExtensionCommandInput, DeleteExtensionCommandOutput } from "../commands/DeleteExtensionCommand";
import {
  DeleteHostedConfigurationVersionCommandInput,
  DeleteHostedConfigurationVersionCommandOutput,
} from "../commands/DeleteHostedConfigurationVersionCommand";
import { GetApplicationCommandInput, GetApplicationCommandOutput } from "../commands/GetApplicationCommand";
import { GetConfigurationCommandInput, GetConfigurationCommandOutput } from "../commands/GetConfigurationCommand";
import {
  GetConfigurationProfileCommandInput,
  GetConfigurationProfileCommandOutput,
} from "../commands/GetConfigurationProfileCommand";
import { GetDeploymentCommandInput, GetDeploymentCommandOutput } from "../commands/GetDeploymentCommand";
import {
  GetDeploymentStrategyCommandInput,
  GetDeploymentStrategyCommandOutput,
} from "../commands/GetDeploymentStrategyCommand";
import { GetEnvironmentCommandInput, GetEnvironmentCommandOutput } from "../commands/GetEnvironmentCommand";
import {
  GetExtensionAssociationCommandInput,
  GetExtensionAssociationCommandOutput,
} from "../commands/GetExtensionAssociationCommand";
import { GetExtensionCommandInput, GetExtensionCommandOutput } from "../commands/GetExtensionCommand";
import {
  GetHostedConfigurationVersionCommandInput,
  GetHostedConfigurationVersionCommandOutput,
} from "../commands/GetHostedConfigurationVersionCommand";
import { ListApplicationsCommandInput, ListApplicationsCommandOutput } from "../commands/ListApplicationsCommand";
import {
  ListConfigurationProfilesCommandInput,
  ListConfigurationProfilesCommandOutput,
} from "../commands/ListConfigurationProfilesCommand";
import { ListDeploymentsCommandInput, ListDeploymentsCommandOutput } from "../commands/ListDeploymentsCommand";
import {
  ListDeploymentStrategiesCommandInput,
  ListDeploymentStrategiesCommandOutput,
} from "../commands/ListDeploymentStrategiesCommand";
import { ListEnvironmentsCommandInput, ListEnvironmentsCommandOutput } from "../commands/ListEnvironmentsCommand";
import {
  ListExtensionAssociationsCommandInput,
  ListExtensionAssociationsCommandOutput,
} from "../commands/ListExtensionAssociationsCommand";
import { ListExtensionsCommandInput, ListExtensionsCommandOutput } from "../commands/ListExtensionsCommand";
import {
  ListHostedConfigurationVersionsCommandInput,
  ListHostedConfigurationVersionsCommandOutput,
} from "../commands/ListHostedConfigurationVersionsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { StartDeploymentCommandInput, StartDeploymentCommandOutput } from "../commands/StartDeploymentCommand";
import { StopDeploymentCommandInput, StopDeploymentCommandOutput } from "../commands/StopDeploymentCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateApplicationCommandInput, UpdateApplicationCommandOutput } from "../commands/UpdateApplicationCommand";
import {
  UpdateConfigurationProfileCommandInput,
  UpdateConfigurationProfileCommandOutput,
} from "../commands/UpdateConfigurationProfileCommand";
import {
  UpdateDeploymentStrategyCommandInput,
  UpdateDeploymentStrategyCommandOutput,
} from "../commands/UpdateDeploymentStrategyCommand";
import { UpdateEnvironmentCommandInput, UpdateEnvironmentCommandOutput } from "../commands/UpdateEnvironmentCommand";
import {
  UpdateExtensionAssociationCommandInput,
  UpdateExtensionAssociationCommandOutput,
} from "../commands/UpdateExtensionAssociationCommand";
import { UpdateExtensionCommandInput, UpdateExtensionCommandOutput } from "../commands/UpdateExtensionCommand";
import {
  ValidateConfigurationCommandInput,
  ValidateConfigurationCommandOutput,
} from "../commands/ValidateConfigurationCommand";
import { AppConfigServiceException as __BaseException } from "../models/AppConfigServiceException";
import {
  Action,
  ActionInvocation,
  ActionPoint,
  Application,
  AppliedExtension,
  BadRequestDetails,
  BadRequestException,
  ConfigurationProfileSummary,
  ConflictException,
  DeploymentEvent,
  DeploymentStrategy,
  DeploymentSummary,
  Environment,
  ExtensionAssociationSummary,
  ExtensionSummary,
  HostedConfigurationVersionSummary,
  InternalServerException,
  InvalidConfigurationDetail,
  Monitor,
  Parameter,
  PayloadTooLargeException,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  Validator,
  ValidatorType,
} from "../models/models_0";

/**
 * serializeAws_restJson1CreateApplicationCommand
 */
export const se_CreateApplicationCommand = async (
  input: CreateApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/applications";
  let body: any;
  body = JSON.stringify({
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Tags != null && { Tags: se_TagMap(input.Tags, context) }),
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
 * serializeAws_restJson1CreateConfigurationProfileCommand
 */
export const se_CreateConfigurationProfileCommand = async (
  input: CreateConfigurationProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/applications/{ApplicationId}/configurationprofiles";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.Description != null && { Description: input.Description }),
    ...(input.LocationUri != null && { LocationUri: input.LocationUri }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.RetrievalRoleArn != null && { RetrievalRoleArn: input.RetrievalRoleArn }),
    ...(input.Tags != null && { Tags: se_TagMap(input.Tags, context) }),
    ...(input.Type != null && { Type: input.Type }),
    ...(input.Validators != null && { Validators: se_ValidatorList(input.Validators, context) }),
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
 * serializeAws_restJson1CreateDeploymentStrategyCommand
 */
export const se_CreateDeploymentStrategyCommand = async (
  input: CreateDeploymentStrategyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/deploymentstrategies";
  let body: any;
  body = JSON.stringify({
    ...(input.DeploymentDurationInMinutes != null && {
      DeploymentDurationInMinutes: input.DeploymentDurationInMinutes,
    }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.FinalBakeTimeInMinutes != null && { FinalBakeTimeInMinutes: input.FinalBakeTimeInMinutes }),
    ...(input.GrowthFactor != null && { GrowthFactor: __serializeFloat(input.GrowthFactor) }),
    ...(input.GrowthType != null && { GrowthType: input.GrowthType }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.ReplicateTo != null && { ReplicateTo: input.ReplicateTo }),
    ...(input.Tags != null && { Tags: se_TagMap(input.Tags, context) }),
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
 * serializeAws_restJson1CreateEnvironmentCommand
 */
export const se_CreateEnvironmentCommand = async (
  input: CreateEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/applications/{ApplicationId}/environments";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Monitors != null && { Monitors: se_MonitorList(input.Monitors, context) }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Tags != null && { Tags: se_TagMap(input.Tags, context) }),
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
 * serializeAws_restJson1CreateExtensionCommand
 */
export const se_CreateExtensionCommand = async (
  input: CreateExtensionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "latest-version-number": [
      () => isSerializableHeaderValue(input.LatestVersionNumber),
      () => input.LatestVersionNumber!.toString(),
    ],
  });
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/extensions";
  let body: any;
  body = JSON.stringify({
    ...(input.Actions != null && { Actions: se_ActionsMap(input.Actions, context) }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Parameters != null && { Parameters: se_ParameterMap(input.Parameters, context) }),
    ...(input.Tags != null && { Tags: se_TagMap(input.Tags, context) }),
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
 * serializeAws_restJson1CreateExtensionAssociationCommand
 */
export const se_CreateExtensionAssociationCommand = async (
  input: CreateExtensionAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/extensionassociations";
  let body: any;
  body = JSON.stringify({
    ...(input.ExtensionIdentifier != null && { ExtensionIdentifier: input.ExtensionIdentifier }),
    ...(input.ExtensionVersionNumber != null && { ExtensionVersionNumber: input.ExtensionVersionNumber }),
    ...(input.Parameters != null && { Parameters: se_ParameterValueMap(input.Parameters, context) }),
    ...(input.ResourceIdentifier != null && { ResourceIdentifier: input.ResourceIdentifier }),
    ...(input.Tags != null && { Tags: se_TagMap(input.Tags, context) }),
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
 * serializeAws_restJson1CreateHostedConfigurationVersionCommand
 */
export const se_CreateHostedConfigurationVersionCommand = async (
  input: CreateHostedConfigurationVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": input.ContentType! || "application/octet-stream",
    description: input.Description!,
    "latest-version-number": [
      () => isSerializableHeaderValue(input.LatestVersionNumber),
      () => input.LatestVersionNumber!.toString(),
    ],
    versionlabel: input.VersionLabel!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/applications/{ApplicationId}/configurationprofiles/{ConfigurationProfileId}/hostedconfigurationversions";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ConfigurationProfileId",
    () => input.ConfigurationProfileId!,
    "{ConfigurationProfileId}",
    false
  );
  let body: any;
  if (input.Content !== undefined) {
    body = input.Content;
  }
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
 * serializeAws_restJson1DeleteApplicationCommand
 */
export const se_DeleteApplicationCommand = async (
  input: DeleteApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/applications/{ApplicationId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
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
 * serializeAws_restJson1DeleteConfigurationProfileCommand
 */
export const se_DeleteConfigurationProfileCommand = async (
  input: DeleteConfigurationProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/applications/{ApplicationId}/configurationprofiles/{ConfigurationProfileId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ConfigurationProfileId",
    () => input.ConfigurationProfileId!,
    "{ConfigurationProfileId}",
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
 * serializeAws_restJson1DeleteDeploymentStrategyCommand
 */
export const se_DeleteDeploymentStrategyCommand = async (
  input: DeleteDeploymentStrategyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/deployementstrategies/{DeploymentStrategyId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "DeploymentStrategyId",
    () => input.DeploymentStrategyId!,
    "{DeploymentStrategyId}",
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
 * serializeAws_restJson1DeleteEnvironmentCommand
 */
export const se_DeleteEnvironmentCommand = async (
  input: DeleteEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/applications/{ApplicationId}/environments/{EnvironmentId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "EnvironmentId",
    () => input.EnvironmentId!,
    "{EnvironmentId}",
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
 * serializeAws_restJson1DeleteExtensionCommand
 */
export const se_DeleteExtensionCommand = async (
  input: DeleteExtensionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/extensions/{ExtensionIdentifier}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ExtensionIdentifier",
    () => input.ExtensionIdentifier!,
    "{ExtensionIdentifier}",
    false
  );
  const query: any = map({
    version: [() => input.VersionNumber !== void 0, () => input.VersionNumber!.toString()],
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
 * serializeAws_restJson1DeleteExtensionAssociationCommand
 */
export const se_DeleteExtensionAssociationCommand = async (
  input: DeleteExtensionAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/extensionassociations/{ExtensionAssociationId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ExtensionAssociationId",
    () => input.ExtensionAssociationId!,
    "{ExtensionAssociationId}",
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
 * serializeAws_restJson1DeleteHostedConfigurationVersionCommand
 */
export const se_DeleteHostedConfigurationVersionCommand = async (
  input: DeleteHostedConfigurationVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/applications/{ApplicationId}/configurationprofiles/{ConfigurationProfileId}/hostedconfigurationversions/{VersionNumber}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ConfigurationProfileId",
    () => input.ConfigurationProfileId!,
    "{ConfigurationProfileId}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "VersionNumber",
    () => input.VersionNumber!.toString(),
    "{VersionNumber}",
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
 * serializeAws_restJson1GetApplicationCommand
 */
export const se_GetApplicationCommand = async (
  input: GetApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/applications/{ApplicationId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
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
 * serializeAws_restJson1GetConfigurationCommand
 */
export const se_GetConfigurationCommand = async (
  input: GetConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/applications/{Application}/environments/{Environment}/configurations/{Configuration}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Application", () => input.Application!, "{Application}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "Environment", () => input.Environment!, "{Environment}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "Configuration",
    () => input.Configuration!,
    "{Configuration}",
    false
  );
  const query: any = map({
    client_id: [, __expectNonNull(input.ClientId!, `ClientId`)],
    client_configuration_version: [, input.ClientConfigurationVersion!],
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
 * serializeAws_restJson1GetConfigurationProfileCommand
 */
export const se_GetConfigurationProfileCommand = async (
  input: GetConfigurationProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/applications/{ApplicationId}/configurationprofiles/{ConfigurationProfileId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ConfigurationProfileId",
    () => input.ConfigurationProfileId!,
    "{ConfigurationProfileId}",
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
 * serializeAws_restJson1GetDeploymentCommand
 */
export const se_GetDeploymentCommand = async (
  input: GetDeploymentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/applications/{ApplicationId}/environments/{EnvironmentId}/deployments/{DeploymentNumber}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "EnvironmentId",
    () => input.EnvironmentId!,
    "{EnvironmentId}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "DeploymentNumber",
    () => input.DeploymentNumber!.toString(),
    "{DeploymentNumber}",
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
 * serializeAws_restJson1GetDeploymentStrategyCommand
 */
export const se_GetDeploymentStrategyCommand = async (
  input: GetDeploymentStrategyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/deploymentstrategies/{DeploymentStrategyId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "DeploymentStrategyId",
    () => input.DeploymentStrategyId!,
    "{DeploymentStrategyId}",
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
 * serializeAws_restJson1GetEnvironmentCommand
 */
export const se_GetEnvironmentCommand = async (
  input: GetEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/applications/{ApplicationId}/environments/{EnvironmentId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "EnvironmentId",
    () => input.EnvironmentId!,
    "{EnvironmentId}",
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
 * serializeAws_restJson1GetExtensionCommand
 */
export const se_GetExtensionCommand = async (
  input: GetExtensionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/extensions/{ExtensionIdentifier}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ExtensionIdentifier",
    () => input.ExtensionIdentifier!,
    "{ExtensionIdentifier}",
    false
  );
  const query: any = map({
    version_number: [() => input.VersionNumber !== void 0, () => input.VersionNumber!.toString()],
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
 * serializeAws_restJson1GetExtensionAssociationCommand
 */
export const se_GetExtensionAssociationCommand = async (
  input: GetExtensionAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/extensionassociations/{ExtensionAssociationId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ExtensionAssociationId",
    () => input.ExtensionAssociationId!,
    "{ExtensionAssociationId}",
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
 * serializeAws_restJson1GetHostedConfigurationVersionCommand
 */
export const se_GetHostedConfigurationVersionCommand = async (
  input: GetHostedConfigurationVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/applications/{ApplicationId}/configurationprofiles/{ConfigurationProfileId}/hostedconfigurationversions/{VersionNumber}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ConfigurationProfileId",
    () => input.ConfigurationProfileId!,
    "{ConfigurationProfileId}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "VersionNumber",
    () => input.VersionNumber!.toString(),
    "{VersionNumber}",
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
 * serializeAws_restJson1ListApplicationsCommand
 */
export const se_ListApplicationsCommand = async (
  input: ListApplicationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/applications";
  const query: any = map({
    max_results: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    next_token: [, input.NextToken!],
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
 * serializeAws_restJson1ListConfigurationProfilesCommand
 */
export const se_ListConfigurationProfilesCommand = async (
  input: ListConfigurationProfilesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/applications/{ApplicationId}/configurationprofiles";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
  const query: any = map({
    max_results: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    next_token: [, input.NextToken!],
    type: [, input.Type!],
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
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/applications/{ApplicationId}/environments/{EnvironmentId}/deployments";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "EnvironmentId",
    () => input.EnvironmentId!,
    "{EnvironmentId}",
    false
  );
  const query: any = map({
    max_results: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    next_token: [, input.NextToken!],
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
 * serializeAws_restJson1ListDeploymentStrategiesCommand
 */
export const se_ListDeploymentStrategiesCommand = async (
  input: ListDeploymentStrategiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/deploymentstrategies";
  const query: any = map({
    max_results: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    next_token: [, input.NextToken!],
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
 * serializeAws_restJson1ListEnvironmentsCommand
 */
export const se_ListEnvironmentsCommand = async (
  input: ListEnvironmentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/applications/{ApplicationId}/environments";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
  const query: any = map({
    max_results: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    next_token: [, input.NextToken!],
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
 * serializeAws_restJson1ListExtensionAssociationsCommand
 */
export const se_ListExtensionAssociationsCommand = async (
  input: ListExtensionAssociationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/extensionassociations";
  const query: any = map({
    resource_identifier: [, input.ResourceIdentifier!],
    extension_identifier: [, input.ExtensionIdentifier!],
    extension_version_number: [
      () => input.ExtensionVersionNumber !== void 0,
      () => input.ExtensionVersionNumber!.toString(),
    ],
    max_results: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    next_token: [, input.NextToken!],
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
 * serializeAws_restJson1ListExtensionsCommand
 */
export const se_ListExtensionsCommand = async (
  input: ListExtensionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/extensions";
  const query: any = map({
    max_results: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    next_token: [, input.NextToken!],
    name: [, input.Name!],
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
 * serializeAws_restJson1ListHostedConfigurationVersionsCommand
 */
export const se_ListHostedConfigurationVersionsCommand = async (
  input: ListHostedConfigurationVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/applications/{ApplicationId}/configurationprofiles/{ConfigurationProfileId}/hostedconfigurationversions";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ConfigurationProfileId",
    () => input.ConfigurationProfileId!,
    "{ConfigurationProfileId}",
    false
  );
  const query: any = map({
    max_results: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    next_token: [, input.NextToken!],
    version_label: [, input.VersionLabel!],
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
 * serializeAws_restJson1StartDeploymentCommand
 */
export const se_StartDeploymentCommand = async (
  input: StartDeploymentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/applications/{ApplicationId}/environments/{EnvironmentId}/deployments";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "EnvironmentId",
    () => input.EnvironmentId!,
    "{EnvironmentId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.ConfigurationProfileId != null && { ConfigurationProfileId: input.ConfigurationProfileId }),
    ...(input.ConfigurationVersion != null && { ConfigurationVersion: input.ConfigurationVersion }),
    ...(input.DeploymentStrategyId != null && { DeploymentStrategyId: input.DeploymentStrategyId }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.KmsKeyIdentifier != null && { KmsKeyIdentifier: input.KmsKeyIdentifier }),
    ...(input.Tags != null && { Tags: se_TagMap(input.Tags, context) }),
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
 * serializeAws_restJson1StopDeploymentCommand
 */
export const se_StopDeploymentCommand = async (
  input: StopDeploymentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/applications/{ApplicationId}/environments/{EnvironmentId}/deployments/{DeploymentNumber}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "EnvironmentId",
    () => input.EnvironmentId!,
    "{EnvironmentId}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "DeploymentNumber",
    () => input.DeploymentNumber!.toString(),
    "{DeploymentNumber}",
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
    ...(input.Tags != null && { Tags: se_TagMap(input.Tags, context) }),
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
 * serializeAws_restJson1UpdateApplicationCommand
 */
export const se_UpdateApplicationCommand = async (
  input: UpdateApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/applications/{ApplicationId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Name != null && { Name: input.Name }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateConfigurationProfileCommand
 */
export const se_UpdateConfigurationProfileCommand = async (
  input: UpdateConfigurationProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/applications/{ApplicationId}/configurationprofiles/{ConfigurationProfileId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ConfigurationProfileId",
    () => input.ConfigurationProfileId!,
    "{ConfigurationProfileId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.RetrievalRoleArn != null && { RetrievalRoleArn: input.RetrievalRoleArn }),
    ...(input.Validators != null && { Validators: se_ValidatorList(input.Validators, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateDeploymentStrategyCommand
 */
export const se_UpdateDeploymentStrategyCommand = async (
  input: UpdateDeploymentStrategyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/deploymentstrategies/{DeploymentStrategyId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "DeploymentStrategyId",
    () => input.DeploymentStrategyId!,
    "{DeploymentStrategyId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.DeploymentDurationInMinutes != null && {
      DeploymentDurationInMinutes: input.DeploymentDurationInMinutes,
    }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.FinalBakeTimeInMinutes != null && { FinalBakeTimeInMinutes: input.FinalBakeTimeInMinutes }),
    ...(input.GrowthFactor != null && { GrowthFactor: __serializeFloat(input.GrowthFactor) }),
    ...(input.GrowthType != null && { GrowthType: input.GrowthType }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateEnvironmentCommand
 */
export const se_UpdateEnvironmentCommand = async (
  input: UpdateEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/applications/{ApplicationId}/environments/{EnvironmentId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "EnvironmentId",
    () => input.EnvironmentId!,
    "{EnvironmentId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Monitors != null && { Monitors: se_MonitorList(input.Monitors, context) }),
    ...(input.Name != null && { Name: input.Name }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateExtensionCommand
 */
export const se_UpdateExtensionCommand = async (
  input: UpdateExtensionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/extensions/{ExtensionIdentifier}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ExtensionIdentifier",
    () => input.ExtensionIdentifier!,
    "{ExtensionIdentifier}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.Actions != null && { Actions: se_ActionsMap(input.Actions, context) }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Parameters != null && { Parameters: se_ParameterMap(input.Parameters, context) }),
    ...(input.VersionNumber != null && { VersionNumber: input.VersionNumber }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateExtensionAssociationCommand
 */
export const se_UpdateExtensionAssociationCommand = async (
  input: UpdateExtensionAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/extensionassociations/{ExtensionAssociationId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ExtensionAssociationId",
    () => input.ExtensionAssociationId!,
    "{ExtensionAssociationId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.Parameters != null && { Parameters: se_ParameterValueMap(input.Parameters, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ValidateConfigurationCommand
 */
export const se_ValidateConfigurationCommand = async (
  input: ValidateConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/applications/{ApplicationId}/configurationprofiles/{ConfigurationProfileId}/validators";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ConfigurationProfileId",
    () => input.ConfigurationProfileId!,
    "{ConfigurationProfileId}",
    false
  );
  const query: any = map({
    configuration_version: [, __expectNonNull(input.ConfigurationVersion!, `ConfigurationVersion`)],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * deserializeAws_restJson1CreateApplicationCommand
 */
export const de_CreateApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApplicationCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateApplicationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Description != null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.Id != null) {
    contents.Id = __expectString(data.Id);
  }
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateApplicationCommandError
 */
const de_CreateApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateConfigurationProfileCommand
 */
export const de_CreateConfigurationProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfigurationProfileCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateConfigurationProfileCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ApplicationId != null) {
    contents.ApplicationId = __expectString(data.ApplicationId);
  }
  if (data.Description != null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.Id != null) {
    contents.Id = __expectString(data.Id);
  }
  if (data.LocationUri != null) {
    contents.LocationUri = __expectString(data.LocationUri);
  }
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.RetrievalRoleArn != null) {
    contents.RetrievalRoleArn = __expectString(data.RetrievalRoleArn);
  }
  if (data.Type != null) {
    contents.Type = __expectString(data.Type);
  }
  if (data.Validators != null) {
    contents.Validators = de_ValidatorList(data.Validators, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateConfigurationProfileCommandError
 */
const de_CreateConfigurationProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfigurationProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appconfig#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateDeploymentStrategyCommand
 */
export const de_CreateDeploymentStrategyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDeploymentStrategyCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateDeploymentStrategyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DeploymentDurationInMinutes != null) {
    contents.DeploymentDurationInMinutes = __expectInt32(data.DeploymentDurationInMinutes);
  }
  if (data.Description != null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.FinalBakeTimeInMinutes != null) {
    contents.FinalBakeTimeInMinutes = __expectInt32(data.FinalBakeTimeInMinutes);
  }
  if (data.GrowthFactor != null) {
    contents.GrowthFactor = __limitedParseFloat32(data.GrowthFactor);
  }
  if (data.GrowthType != null) {
    contents.GrowthType = __expectString(data.GrowthType);
  }
  if (data.Id != null) {
    contents.Id = __expectString(data.Id);
  }
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.ReplicateTo != null) {
    contents.ReplicateTo = __expectString(data.ReplicateTo);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateDeploymentStrategyCommandError
 */
const de_CreateDeploymentStrategyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDeploymentStrategyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateEnvironmentCommand
 */
export const de_CreateEnvironmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEnvironmentCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateEnvironmentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ApplicationId != null) {
    contents.ApplicationId = __expectString(data.ApplicationId);
  }
  if (data.Description != null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.Id != null) {
    contents.Id = __expectString(data.Id);
  }
  if (data.Monitors != null) {
    contents.Monitors = de_MonitorList(data.Monitors, context);
  }
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.State != null) {
    contents.State = __expectString(data.State);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateEnvironmentCommandError
 */
const de_CreateEnvironmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEnvironmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appconfig#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateExtensionCommand
 */
export const de_CreateExtensionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateExtensionCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateExtensionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Actions != null) {
    contents.Actions = de_ActionsMap(data.Actions, context);
  }
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.Description != null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.Id != null) {
    contents.Id = __expectString(data.Id);
  }
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.Parameters != null) {
    contents.Parameters = de_ParameterMap(data.Parameters, context);
  }
  if (data.VersionNumber != null) {
    contents.VersionNumber = __expectInt32(data.VersionNumber);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateExtensionCommandError
 */
const de_CreateExtensionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateExtensionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.appconfig#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.appconfig#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateExtensionAssociationCommand
 */
export const de_CreateExtensionAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateExtensionAssociationCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateExtensionAssociationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.ExtensionArn != null) {
    contents.ExtensionArn = __expectString(data.ExtensionArn);
  }
  if (data.ExtensionVersionNumber != null) {
    contents.ExtensionVersionNumber = __expectInt32(data.ExtensionVersionNumber);
  }
  if (data.Id != null) {
    contents.Id = __expectString(data.Id);
  }
  if (data.Parameters != null) {
    contents.Parameters = de_ParameterValueMap(data.Parameters, context);
  }
  if (data.ResourceArn != null) {
    contents.ResourceArn = __expectString(data.ResourceArn);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateExtensionAssociationCommandError
 */
const de_CreateExtensionAssociationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateExtensionAssociationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appconfig#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.appconfig#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateHostedConfigurationVersionCommand
 */
export const de_CreateHostedConfigurationVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateHostedConfigurationVersionCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateHostedConfigurationVersionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    ApplicationId: [, output.headers["application-id"]],
    ConfigurationProfileId: [, output.headers["configuration-profile-id"]],
    VersionNumber: [
      () => void 0 !== output.headers["version-number"],
      () => __strictParseInt32(output.headers["version-number"]),
    ],
    Description: [, output.headers["description"]],
    ContentType: [, output.headers["content-type"]],
    VersionLabel: [, output.headers["versionlabel"]],
  });
  const data: any = await collectBody(output.body, context);
  contents.Content = data;
  return contents;
};

/**
 * deserializeAws_restJson1CreateHostedConfigurationVersionCommandError
 */
const de_CreateHostedConfigurationVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateHostedConfigurationVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.appconfig#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.appconfig#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appconfig#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.appconfig#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteApplicationCommand
 */
export const de_DeleteApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteApplicationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteApplicationCommandError
 */
const de_DeleteApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appconfig#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteConfigurationProfileCommand
 */
export const de_DeleteConfigurationProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfigurationProfileCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteConfigurationProfileCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteConfigurationProfileCommandError
 */
const de_DeleteConfigurationProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfigurationProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.appconfig#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appconfig#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteDeploymentStrategyCommand
 */
export const de_DeleteDeploymentStrategyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDeploymentStrategyCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteDeploymentStrategyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteDeploymentStrategyCommandError
 */
const de_DeleteDeploymentStrategyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDeploymentStrategyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appconfig#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteEnvironmentCommand
 */
export const de_DeleteEnvironmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEnvironmentCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteEnvironmentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteEnvironmentCommandError
 */
const de_DeleteEnvironmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEnvironmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.appconfig#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appconfig#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteExtensionCommand
 */
export const de_DeleteExtensionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteExtensionCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteExtensionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteExtensionCommandError
 */
const de_DeleteExtensionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteExtensionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appconfig#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteExtensionAssociationCommand
 */
export const de_DeleteExtensionAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteExtensionAssociationCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteExtensionAssociationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteExtensionAssociationCommandError
 */
const de_DeleteExtensionAssociationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteExtensionAssociationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appconfig#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteHostedConfigurationVersionCommand
 */
export const de_DeleteHostedConfigurationVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteHostedConfigurationVersionCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteHostedConfigurationVersionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteHostedConfigurationVersionCommandError
 */
const de_DeleteHostedConfigurationVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteHostedConfigurationVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appconfig#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetApplicationCommand
 */
export const de_GetApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetApplicationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Description != null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.Id != null) {
    contents.Id = __expectString(data.Id);
  }
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetApplicationCommandError
 */
const de_GetApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appconfig#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetConfigurationCommand
 */
export const de_GetConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    ConfigurationVersion: [, output.headers["configuration-version"]],
    ContentType: [, output.headers["content-type"]],
  });
  const data: any = await collectBody(output.body, context);
  contents.Content = data;
  return contents;
};

/**
 * deserializeAws_restJson1GetConfigurationCommandError
 */
const de_GetConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appconfig#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetConfigurationProfileCommand
 */
export const de_GetConfigurationProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConfigurationProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetConfigurationProfileCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ApplicationId != null) {
    contents.ApplicationId = __expectString(data.ApplicationId);
  }
  if (data.Description != null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.Id != null) {
    contents.Id = __expectString(data.Id);
  }
  if (data.LocationUri != null) {
    contents.LocationUri = __expectString(data.LocationUri);
  }
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.RetrievalRoleArn != null) {
    contents.RetrievalRoleArn = __expectString(data.RetrievalRoleArn);
  }
  if (data.Type != null) {
    contents.Type = __expectString(data.Type);
  }
  if (data.Validators != null) {
    contents.Validators = de_ValidatorList(data.Validators, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetConfigurationProfileCommandError
 */
const de_GetConfigurationProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConfigurationProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appconfig#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetDeploymentCommand
 */
export const de_GetDeploymentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeploymentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetDeploymentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ApplicationId != null) {
    contents.ApplicationId = __expectString(data.ApplicationId);
  }
  if (data.AppliedExtensions != null) {
    contents.AppliedExtensions = de_AppliedExtensions(data.AppliedExtensions, context);
  }
  if (data.CompletedAt != null) {
    contents.CompletedAt = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.CompletedAt));
  }
  if (data.ConfigurationLocationUri != null) {
    contents.ConfigurationLocationUri = __expectString(data.ConfigurationLocationUri);
  }
  if (data.ConfigurationName != null) {
    contents.ConfigurationName = __expectString(data.ConfigurationName);
  }
  if (data.ConfigurationProfileId != null) {
    contents.ConfigurationProfileId = __expectString(data.ConfigurationProfileId);
  }
  if (data.ConfigurationVersion != null) {
    contents.ConfigurationVersion = __expectString(data.ConfigurationVersion);
  }
  if (data.DeploymentDurationInMinutes != null) {
    contents.DeploymentDurationInMinutes = __expectInt32(data.DeploymentDurationInMinutes);
  }
  if (data.DeploymentNumber != null) {
    contents.DeploymentNumber = __expectInt32(data.DeploymentNumber);
  }
  if (data.DeploymentStrategyId != null) {
    contents.DeploymentStrategyId = __expectString(data.DeploymentStrategyId);
  }
  if (data.Description != null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.EnvironmentId != null) {
    contents.EnvironmentId = __expectString(data.EnvironmentId);
  }
  if (data.EventLog != null) {
    contents.EventLog = de_DeploymentEvents(data.EventLog, context);
  }
  if (data.FinalBakeTimeInMinutes != null) {
    contents.FinalBakeTimeInMinutes = __expectInt32(data.FinalBakeTimeInMinutes);
  }
  if (data.GrowthFactor != null) {
    contents.GrowthFactor = __limitedParseFloat32(data.GrowthFactor);
  }
  if (data.GrowthType != null) {
    contents.GrowthType = __expectString(data.GrowthType);
  }
  if (data.KmsKeyArn != null) {
    contents.KmsKeyArn = __expectString(data.KmsKeyArn);
  }
  if (data.KmsKeyIdentifier != null) {
    contents.KmsKeyIdentifier = __expectString(data.KmsKeyIdentifier);
  }
  if (data.PercentageComplete != null) {
    contents.PercentageComplete = __limitedParseFloat32(data.PercentageComplete);
  }
  if (data.StartedAt != null) {
    contents.StartedAt = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.StartedAt));
  }
  if (data.State != null) {
    contents.State = __expectString(data.State);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetDeploymentCommandError
 */
const de_GetDeploymentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeploymentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appconfig#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetDeploymentStrategyCommand
 */
export const de_GetDeploymentStrategyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeploymentStrategyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetDeploymentStrategyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DeploymentDurationInMinutes != null) {
    contents.DeploymentDurationInMinutes = __expectInt32(data.DeploymentDurationInMinutes);
  }
  if (data.Description != null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.FinalBakeTimeInMinutes != null) {
    contents.FinalBakeTimeInMinutes = __expectInt32(data.FinalBakeTimeInMinutes);
  }
  if (data.GrowthFactor != null) {
    contents.GrowthFactor = __limitedParseFloat32(data.GrowthFactor);
  }
  if (data.GrowthType != null) {
    contents.GrowthType = __expectString(data.GrowthType);
  }
  if (data.Id != null) {
    contents.Id = __expectString(data.Id);
  }
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.ReplicateTo != null) {
    contents.ReplicateTo = __expectString(data.ReplicateTo);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetDeploymentStrategyCommandError
 */
const de_GetDeploymentStrategyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeploymentStrategyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appconfig#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetEnvironmentCommand
 */
export const de_GetEnvironmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEnvironmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetEnvironmentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ApplicationId != null) {
    contents.ApplicationId = __expectString(data.ApplicationId);
  }
  if (data.Description != null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.Id != null) {
    contents.Id = __expectString(data.Id);
  }
  if (data.Monitors != null) {
    contents.Monitors = de_MonitorList(data.Monitors, context);
  }
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.State != null) {
    contents.State = __expectString(data.State);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetEnvironmentCommandError
 */
const de_GetEnvironmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEnvironmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appconfig#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetExtensionCommand
 */
export const de_GetExtensionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetExtensionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetExtensionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Actions != null) {
    contents.Actions = de_ActionsMap(data.Actions, context);
  }
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.Description != null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.Id != null) {
    contents.Id = __expectString(data.Id);
  }
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.Parameters != null) {
    contents.Parameters = de_ParameterMap(data.Parameters, context);
  }
  if (data.VersionNumber != null) {
    contents.VersionNumber = __expectInt32(data.VersionNumber);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetExtensionCommandError
 */
const de_GetExtensionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetExtensionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appconfig#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetExtensionAssociationCommand
 */
export const de_GetExtensionAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetExtensionAssociationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetExtensionAssociationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.ExtensionArn != null) {
    contents.ExtensionArn = __expectString(data.ExtensionArn);
  }
  if (data.ExtensionVersionNumber != null) {
    contents.ExtensionVersionNumber = __expectInt32(data.ExtensionVersionNumber);
  }
  if (data.Id != null) {
    contents.Id = __expectString(data.Id);
  }
  if (data.Parameters != null) {
    contents.Parameters = de_ParameterValueMap(data.Parameters, context);
  }
  if (data.ResourceArn != null) {
    contents.ResourceArn = __expectString(data.ResourceArn);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetExtensionAssociationCommandError
 */
const de_GetExtensionAssociationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetExtensionAssociationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appconfig#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetHostedConfigurationVersionCommand
 */
export const de_GetHostedConfigurationVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetHostedConfigurationVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetHostedConfigurationVersionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    ApplicationId: [, output.headers["application-id"]],
    ConfigurationProfileId: [, output.headers["configuration-profile-id"]],
    VersionNumber: [
      () => void 0 !== output.headers["version-number"],
      () => __strictParseInt32(output.headers["version-number"]),
    ],
    Description: [, output.headers["description"]],
    ContentType: [, output.headers["content-type"]],
    VersionLabel: [, output.headers["versionlabel"]],
  });
  const data: any = await collectBody(output.body, context);
  contents.Content = data;
  return contents;
};

/**
 * deserializeAws_restJson1GetHostedConfigurationVersionCommandError
 */
const de_GetHostedConfigurationVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetHostedConfigurationVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appconfig#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListApplicationsCommand
 */
export const de_ListApplicationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListApplicationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Items != null) {
    contents.Items = de_ApplicationList(data.Items, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListApplicationsCommandError
 */
const de_ListApplicationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListConfigurationProfilesCommand
 */
export const de_ListConfigurationProfilesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConfigurationProfilesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListConfigurationProfilesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Items != null) {
    contents.Items = de_ConfigurationProfileSummaryList(data.Items, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListConfigurationProfilesCommandError
 */
const de_ListConfigurationProfilesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConfigurationProfilesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appconfig#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
  if (data.Items != null) {
    contents.Items = de_DeploymentList(data.Items, context);
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
    case "com.amazonaws.appconfig#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appconfig#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListDeploymentStrategiesCommand
 */
export const de_ListDeploymentStrategiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeploymentStrategiesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListDeploymentStrategiesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Items != null) {
    contents.Items = de_DeploymentStrategyList(data.Items, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListDeploymentStrategiesCommandError
 */
const de_ListDeploymentStrategiesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeploymentStrategiesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListEnvironmentsCommand
 */
export const de_ListEnvironmentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEnvironmentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListEnvironmentsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Items != null) {
    contents.Items = de_EnvironmentList(data.Items, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListEnvironmentsCommandError
 */
const de_ListEnvironmentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEnvironmentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appconfig#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListExtensionAssociationsCommand
 */
export const de_ListExtensionAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListExtensionAssociationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListExtensionAssociationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Items != null) {
    contents.Items = de_ExtensionAssociationSummaries(data.Items, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListExtensionAssociationsCommandError
 */
const de_ListExtensionAssociationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListExtensionAssociationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListExtensionsCommand
 */
export const de_ListExtensionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListExtensionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListExtensionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Items != null) {
    contents.Items = de_ExtensionSummaries(data.Items, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListExtensionsCommandError
 */
const de_ListExtensionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListExtensionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListHostedConfigurationVersionsCommand
 */
export const de_ListHostedConfigurationVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHostedConfigurationVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListHostedConfigurationVersionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Items != null) {
    contents.Items = de_HostedConfigurationVersionSummaryList(data.Items, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListHostedConfigurationVersionsCommandError
 */
const de_ListHostedConfigurationVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHostedConfigurationVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appconfig#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
  if (data.Tags != null) {
    contents.Tags = de_TagMap(data.Tags, context);
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
    case "com.amazonaws.appconfig#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appconfig#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1StartDeploymentCommand
 */
export const de_StartDeploymentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDeploymentCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_StartDeploymentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ApplicationId != null) {
    contents.ApplicationId = __expectString(data.ApplicationId);
  }
  if (data.AppliedExtensions != null) {
    contents.AppliedExtensions = de_AppliedExtensions(data.AppliedExtensions, context);
  }
  if (data.CompletedAt != null) {
    contents.CompletedAt = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.CompletedAt));
  }
  if (data.ConfigurationLocationUri != null) {
    contents.ConfigurationLocationUri = __expectString(data.ConfigurationLocationUri);
  }
  if (data.ConfigurationName != null) {
    contents.ConfigurationName = __expectString(data.ConfigurationName);
  }
  if (data.ConfigurationProfileId != null) {
    contents.ConfigurationProfileId = __expectString(data.ConfigurationProfileId);
  }
  if (data.ConfigurationVersion != null) {
    contents.ConfigurationVersion = __expectString(data.ConfigurationVersion);
  }
  if (data.DeploymentDurationInMinutes != null) {
    contents.DeploymentDurationInMinutes = __expectInt32(data.DeploymentDurationInMinutes);
  }
  if (data.DeploymentNumber != null) {
    contents.DeploymentNumber = __expectInt32(data.DeploymentNumber);
  }
  if (data.DeploymentStrategyId != null) {
    contents.DeploymentStrategyId = __expectString(data.DeploymentStrategyId);
  }
  if (data.Description != null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.EnvironmentId != null) {
    contents.EnvironmentId = __expectString(data.EnvironmentId);
  }
  if (data.EventLog != null) {
    contents.EventLog = de_DeploymentEvents(data.EventLog, context);
  }
  if (data.FinalBakeTimeInMinutes != null) {
    contents.FinalBakeTimeInMinutes = __expectInt32(data.FinalBakeTimeInMinutes);
  }
  if (data.GrowthFactor != null) {
    contents.GrowthFactor = __limitedParseFloat32(data.GrowthFactor);
  }
  if (data.GrowthType != null) {
    contents.GrowthType = __expectString(data.GrowthType);
  }
  if (data.KmsKeyArn != null) {
    contents.KmsKeyArn = __expectString(data.KmsKeyArn);
  }
  if (data.KmsKeyIdentifier != null) {
    contents.KmsKeyIdentifier = __expectString(data.KmsKeyIdentifier);
  }
  if (data.PercentageComplete != null) {
    contents.PercentageComplete = __limitedParseFloat32(data.PercentageComplete);
  }
  if (data.StartedAt != null) {
    contents.StartedAt = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.StartedAt));
  }
  if (data.State != null) {
    contents.State = __expectString(data.State);
  }
  return contents;
};

/**
 * deserializeAws_restJson1StartDeploymentCommandError
 */
const de_StartDeploymentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDeploymentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.appconfig#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appconfig#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1StopDeploymentCommand
 */
export const de_StopDeploymentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopDeploymentCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_StopDeploymentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ApplicationId != null) {
    contents.ApplicationId = __expectString(data.ApplicationId);
  }
  if (data.AppliedExtensions != null) {
    contents.AppliedExtensions = de_AppliedExtensions(data.AppliedExtensions, context);
  }
  if (data.CompletedAt != null) {
    contents.CompletedAt = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.CompletedAt));
  }
  if (data.ConfigurationLocationUri != null) {
    contents.ConfigurationLocationUri = __expectString(data.ConfigurationLocationUri);
  }
  if (data.ConfigurationName != null) {
    contents.ConfigurationName = __expectString(data.ConfigurationName);
  }
  if (data.ConfigurationProfileId != null) {
    contents.ConfigurationProfileId = __expectString(data.ConfigurationProfileId);
  }
  if (data.ConfigurationVersion != null) {
    contents.ConfigurationVersion = __expectString(data.ConfigurationVersion);
  }
  if (data.DeploymentDurationInMinutes != null) {
    contents.DeploymentDurationInMinutes = __expectInt32(data.DeploymentDurationInMinutes);
  }
  if (data.DeploymentNumber != null) {
    contents.DeploymentNumber = __expectInt32(data.DeploymentNumber);
  }
  if (data.DeploymentStrategyId != null) {
    contents.DeploymentStrategyId = __expectString(data.DeploymentStrategyId);
  }
  if (data.Description != null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.EnvironmentId != null) {
    contents.EnvironmentId = __expectString(data.EnvironmentId);
  }
  if (data.EventLog != null) {
    contents.EventLog = de_DeploymentEvents(data.EventLog, context);
  }
  if (data.FinalBakeTimeInMinutes != null) {
    contents.FinalBakeTimeInMinutes = __expectInt32(data.FinalBakeTimeInMinutes);
  }
  if (data.GrowthFactor != null) {
    contents.GrowthFactor = __limitedParseFloat32(data.GrowthFactor);
  }
  if (data.GrowthType != null) {
    contents.GrowthType = __expectString(data.GrowthType);
  }
  if (data.KmsKeyArn != null) {
    contents.KmsKeyArn = __expectString(data.KmsKeyArn);
  }
  if (data.KmsKeyIdentifier != null) {
    contents.KmsKeyIdentifier = __expectString(data.KmsKeyIdentifier);
  }
  if (data.PercentageComplete != null) {
    contents.PercentageComplete = __limitedParseFloat32(data.PercentageComplete);
  }
  if (data.StartedAt != null) {
    contents.StartedAt = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.StartedAt));
  }
  if (data.State != null) {
    contents.State = __expectString(data.State);
  }
  return contents;
};

/**
 * deserializeAws_restJson1StopDeploymentCommandError
 */
const de_StopDeploymentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopDeploymentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appconfig#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
    case "com.amazonaws.appconfig#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appconfig#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
    case "com.amazonaws.appconfig#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appconfig#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateApplicationCommand
 */
export const de_UpdateApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateApplicationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Description != null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.Id != null) {
    contents.Id = __expectString(data.Id);
  }
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateApplicationCommandError
 */
const de_UpdateApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appconfig#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateConfigurationProfileCommand
 */
export const de_UpdateConfigurationProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConfigurationProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateConfigurationProfileCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ApplicationId != null) {
    contents.ApplicationId = __expectString(data.ApplicationId);
  }
  if (data.Description != null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.Id != null) {
    contents.Id = __expectString(data.Id);
  }
  if (data.LocationUri != null) {
    contents.LocationUri = __expectString(data.LocationUri);
  }
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.RetrievalRoleArn != null) {
    contents.RetrievalRoleArn = __expectString(data.RetrievalRoleArn);
  }
  if (data.Type != null) {
    contents.Type = __expectString(data.Type);
  }
  if (data.Validators != null) {
    contents.Validators = de_ValidatorList(data.Validators, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateConfigurationProfileCommandError
 */
const de_UpdateConfigurationProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConfigurationProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appconfig#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateDeploymentStrategyCommand
 */
export const de_UpdateDeploymentStrategyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDeploymentStrategyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateDeploymentStrategyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DeploymentDurationInMinutes != null) {
    contents.DeploymentDurationInMinutes = __expectInt32(data.DeploymentDurationInMinutes);
  }
  if (data.Description != null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.FinalBakeTimeInMinutes != null) {
    contents.FinalBakeTimeInMinutes = __expectInt32(data.FinalBakeTimeInMinutes);
  }
  if (data.GrowthFactor != null) {
    contents.GrowthFactor = __limitedParseFloat32(data.GrowthFactor);
  }
  if (data.GrowthType != null) {
    contents.GrowthType = __expectString(data.GrowthType);
  }
  if (data.Id != null) {
    contents.Id = __expectString(data.Id);
  }
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.ReplicateTo != null) {
    contents.ReplicateTo = __expectString(data.ReplicateTo);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateDeploymentStrategyCommandError
 */
const de_UpdateDeploymentStrategyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDeploymentStrategyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appconfig#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateEnvironmentCommand
 */
export const de_UpdateEnvironmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEnvironmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateEnvironmentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ApplicationId != null) {
    contents.ApplicationId = __expectString(data.ApplicationId);
  }
  if (data.Description != null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.Id != null) {
    contents.Id = __expectString(data.Id);
  }
  if (data.Monitors != null) {
    contents.Monitors = de_MonitorList(data.Monitors, context);
  }
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.State != null) {
    contents.State = __expectString(data.State);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateEnvironmentCommandError
 */
const de_UpdateEnvironmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEnvironmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appconfig#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateExtensionCommand
 */
export const de_UpdateExtensionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateExtensionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateExtensionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Actions != null) {
    contents.Actions = de_ActionsMap(data.Actions, context);
  }
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.Description != null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.Id != null) {
    contents.Id = __expectString(data.Id);
  }
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.Parameters != null) {
    contents.Parameters = de_ParameterMap(data.Parameters, context);
  }
  if (data.VersionNumber != null) {
    contents.VersionNumber = __expectInt32(data.VersionNumber);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateExtensionCommandError
 */
const de_UpdateExtensionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateExtensionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.appconfig#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appconfig#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateExtensionAssociationCommand
 */
export const de_UpdateExtensionAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateExtensionAssociationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateExtensionAssociationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.ExtensionArn != null) {
    contents.ExtensionArn = __expectString(data.ExtensionArn);
  }
  if (data.ExtensionVersionNumber != null) {
    contents.ExtensionVersionNumber = __expectInt32(data.ExtensionVersionNumber);
  }
  if (data.Id != null) {
    contents.Id = __expectString(data.Id);
  }
  if (data.Parameters != null) {
    contents.Parameters = de_ParameterValueMap(data.Parameters, context);
  }
  if (data.ResourceArn != null) {
    contents.ResourceArn = __expectString(data.ResourceArn);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateExtensionAssociationCommandError
 */
const de_UpdateExtensionAssociationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateExtensionAssociationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appconfig#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ValidateConfigurationCommand
 */
export const de_ValidateConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ValidateConfigurationCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_ValidateConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1ValidateConfigurationCommandError
 */
const de_ValidateConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ValidateConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appconfig#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
  if (data.Details != null) {
    contents.Details = de_BadRequestDetails(__expectUnion(data.Details), context);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.Reason != null) {
    contents.Reason = __expectString(data.Reason);
  }
  const exception = new BadRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ConflictExceptionRes
 */
const de_ConflictExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ConflictException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InternalServerExceptionRes
 */
const de_InternalServerExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new InternalServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1PayloadTooLargeExceptionRes
 */
const de_PayloadTooLargeExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PayloadTooLargeException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Limit != null) {
    contents.Limit = __limitedParseFloat32(data.Limit);
  }
  if (data.Measure != null) {
    contents.Measure = __expectString(data.Measure);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.Size != null) {
    contents.Size = __limitedParseFloat32(data.Size);
  }
  const exception = new PayloadTooLargeException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ResourceNotFoundExceptionRes
 */
const de_ResourceNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.ResourceName != null) {
    contents.ResourceName = __expectString(data.ResourceName);
  }
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ServiceQuotaExceededExceptionRes
 */
const de_ServiceQuotaExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ServiceQuotaExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * serializeAws_restJson1Action
 */
const se_Action = (input: Action, context: __SerdeContext): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
    ...(input.Uri != null && { Uri: input.Uri }),
  };
};

/**
 * serializeAws_restJson1ActionList
 */
const se_ActionList = (input: Action[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Action(entry, context);
    });
};

/**
 * serializeAws_restJson1ActionsMap
 */
const se_ActionsMap = (input: Record<string, Action[]>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [ActionPoint | string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_ActionList(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1Monitor
 */
const se_Monitor = (input: Monitor, context: __SerdeContext): any => {
  return {
    ...(input.AlarmArn != null && { AlarmArn: input.AlarmArn }),
    ...(input.AlarmRoleArn != null && { AlarmRoleArn: input.AlarmRoleArn }),
  };
};

/**
 * serializeAws_restJson1MonitorList
 */
const se_MonitorList = (input: Monitor[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Monitor(entry, context);
    });
};

/**
 * serializeAws_restJson1Parameter
 */
const se_Parameter = (input: Parameter, context: __SerdeContext): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Required != null && { Required: input.Required }),
  };
};

/**
 * serializeAws_restJson1ParameterMap
 */
const se_ParameterMap = (input: Record<string, Parameter>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_Parameter(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1ParameterValueMap
 */
const se_ParameterValueMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1TagMap
 */
const se_TagMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1Validator
 */
const se_Validator = (input: Validator, context: __SerdeContext): any => {
  return {
    ...(input.Content != null && { Content: input.Content }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

/**
 * serializeAws_restJson1ValidatorList
 */
const se_ValidatorList = (input: Validator[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Validator(entry, context);
    });
};

/**
 * deserializeAws_restJson1Action
 */
const de_Action = (output: any, context: __SerdeContext): Action => {
  return {
    Description: __expectString(output.Description),
    Name: __expectString(output.Name),
    RoleArn: __expectString(output.RoleArn),
    Uri: __expectString(output.Uri),
  } as any;
};

/**
 * deserializeAws_restJson1ActionInvocation
 */
const de_ActionInvocation = (output: any, context: __SerdeContext): ActionInvocation => {
  return {
    ActionName: __expectString(output.ActionName),
    ErrorCode: __expectString(output.ErrorCode),
    ErrorMessage: __expectString(output.ErrorMessage),
    ExtensionIdentifier: __expectString(output.ExtensionIdentifier),
    InvocationId: __expectString(output.InvocationId),
    RoleArn: __expectString(output.RoleArn),
    Uri: __expectString(output.Uri),
  } as any;
};

/**
 * deserializeAws_restJson1ActionInvocations
 */
const de_ActionInvocations = (output: any, context: __SerdeContext): ActionInvocation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ActionInvocation(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ActionList
 */
const de_ActionList = (output: any, context: __SerdeContext): Action[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Action(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ActionsMap
 */
const de_ActionsMap = (output: any, context: __SerdeContext): Record<string, Action[]> => {
  return Object.entries(output).reduce((acc: Record<string, Action[]>, [key, value]: [ActionPoint | string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_ActionList(value, context);
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1Application
 */
const de_Application = (output: any, context: __SerdeContext): Application => {
  return {
    Description: __expectString(output.Description),
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_restJson1ApplicationList
 */
const de_ApplicationList = (output: any, context: __SerdeContext): Application[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Application(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AppliedExtension
 */
const de_AppliedExtension = (output: any, context: __SerdeContext): AppliedExtension => {
  return {
    ExtensionAssociationId: __expectString(output.ExtensionAssociationId),
    ExtensionId: __expectString(output.ExtensionId),
    Parameters: output.Parameters != null ? de_ParameterValueMap(output.Parameters, context) : undefined,
    VersionNumber: __expectInt32(output.VersionNumber),
  } as any;
};

/**
 * deserializeAws_restJson1AppliedExtensions
 */
const de_AppliedExtensions = (output: any, context: __SerdeContext): AppliedExtension[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AppliedExtension(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1BadRequestDetails
 */
const de_BadRequestDetails = (output: any, context: __SerdeContext): BadRequestDetails => {
  if (output.InvalidConfiguration != null) {
    return {
      InvalidConfiguration: de_InvalidConfigurationDetailList(output.InvalidConfiguration, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1ConfigurationProfileSummary
 */
const de_ConfigurationProfileSummary = (output: any, context: __SerdeContext): ConfigurationProfileSummary => {
  return {
    ApplicationId: __expectString(output.ApplicationId),
    Id: __expectString(output.Id),
    LocationUri: __expectString(output.LocationUri),
    Name: __expectString(output.Name),
    Type: __expectString(output.Type),
    ValidatorTypes: output.ValidatorTypes != null ? de_ValidatorTypeList(output.ValidatorTypes, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ConfigurationProfileSummaryList
 */
const de_ConfigurationProfileSummaryList = (output: any, context: __SerdeContext): ConfigurationProfileSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ConfigurationProfileSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DeploymentEvent
 */
const de_DeploymentEvent = (output: any, context: __SerdeContext): DeploymentEvent => {
  return {
    ActionInvocations:
      output.ActionInvocations != null ? de_ActionInvocations(output.ActionInvocations, context) : undefined,
    Description: __expectString(output.Description),
    EventType: __expectString(output.EventType),
    OccurredAt:
      output.OccurredAt != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.OccurredAt)) : undefined,
    TriggeredBy: __expectString(output.TriggeredBy),
  } as any;
};

/**
 * deserializeAws_restJson1DeploymentEvents
 */
const de_DeploymentEvents = (output: any, context: __SerdeContext): DeploymentEvent[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DeploymentEvent(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DeploymentList
 */
const de_DeploymentList = (output: any, context: __SerdeContext): DeploymentSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DeploymentSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DeploymentStrategy
 */
const de_DeploymentStrategy = (output: any, context: __SerdeContext): DeploymentStrategy => {
  return {
    DeploymentDurationInMinutes: __expectInt32(output.DeploymentDurationInMinutes),
    Description: __expectString(output.Description),
    FinalBakeTimeInMinutes: __expectInt32(output.FinalBakeTimeInMinutes),
    GrowthFactor: __limitedParseFloat32(output.GrowthFactor),
    GrowthType: __expectString(output.GrowthType),
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
    ReplicateTo: __expectString(output.ReplicateTo),
  } as any;
};

/**
 * deserializeAws_restJson1DeploymentStrategyList
 */
const de_DeploymentStrategyList = (output: any, context: __SerdeContext): DeploymentStrategy[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DeploymentStrategy(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DeploymentSummary
 */
const de_DeploymentSummary = (output: any, context: __SerdeContext): DeploymentSummary => {
  return {
    CompletedAt:
      output.CompletedAt != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.CompletedAt)) : undefined,
    ConfigurationName: __expectString(output.ConfigurationName),
    ConfigurationVersion: __expectString(output.ConfigurationVersion),
    DeploymentDurationInMinutes: __expectInt32(output.DeploymentDurationInMinutes),
    DeploymentNumber: __expectInt32(output.DeploymentNumber),
    FinalBakeTimeInMinutes: __expectInt32(output.FinalBakeTimeInMinutes),
    GrowthFactor: __limitedParseFloat32(output.GrowthFactor),
    GrowthType: __expectString(output.GrowthType),
    PercentageComplete: __limitedParseFloat32(output.PercentageComplete),
    StartedAt:
      output.StartedAt != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.StartedAt)) : undefined,
    State: __expectString(output.State),
  } as any;
};

/**
 * deserializeAws_restJson1Environment
 */
const de_Environment = (output: any, context: __SerdeContext): Environment => {
  return {
    ApplicationId: __expectString(output.ApplicationId),
    Description: __expectString(output.Description),
    Id: __expectString(output.Id),
    Monitors: output.Monitors != null ? de_MonitorList(output.Monitors, context) : undefined,
    Name: __expectString(output.Name),
    State: __expectString(output.State),
  } as any;
};

/**
 * deserializeAws_restJson1EnvironmentList
 */
const de_EnvironmentList = (output: any, context: __SerdeContext): Environment[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Environment(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ExtensionAssociationSummaries
 */
const de_ExtensionAssociationSummaries = (output: any, context: __SerdeContext): ExtensionAssociationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ExtensionAssociationSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ExtensionAssociationSummary
 */
const de_ExtensionAssociationSummary = (output: any, context: __SerdeContext): ExtensionAssociationSummary => {
  return {
    ExtensionArn: __expectString(output.ExtensionArn),
    Id: __expectString(output.Id),
    ResourceArn: __expectString(output.ResourceArn),
  } as any;
};

/**
 * deserializeAws_restJson1ExtensionSummaries
 */
const de_ExtensionSummaries = (output: any, context: __SerdeContext): ExtensionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ExtensionSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ExtensionSummary
 */
const de_ExtensionSummary = (output: any, context: __SerdeContext): ExtensionSummary => {
  return {
    Arn: __expectString(output.Arn),
    Description: __expectString(output.Description),
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
    VersionNumber: __expectInt32(output.VersionNumber),
  } as any;
};

/**
 * deserializeAws_restJson1HostedConfigurationVersionSummary
 */
const de_HostedConfigurationVersionSummary = (
  output: any,
  context: __SerdeContext
): HostedConfigurationVersionSummary => {
  return {
    ApplicationId: __expectString(output.ApplicationId),
    ConfigurationProfileId: __expectString(output.ConfigurationProfileId),
    ContentType: __expectString(output.ContentType),
    Description: __expectString(output.Description),
    VersionLabel: __expectString(output.VersionLabel),
    VersionNumber: __expectInt32(output.VersionNumber),
  } as any;
};

/**
 * deserializeAws_restJson1HostedConfigurationVersionSummaryList
 */
const de_HostedConfigurationVersionSummaryList = (
  output: any,
  context: __SerdeContext
): HostedConfigurationVersionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_HostedConfigurationVersionSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1InvalidConfigurationDetail
 */
const de_InvalidConfigurationDetail = (output: any, context: __SerdeContext): InvalidConfigurationDetail => {
  return {
    Constraint: __expectString(output.Constraint),
    Location: __expectString(output.Location),
    Reason: __expectString(output.Reason),
    Type: __expectString(output.Type),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_restJson1InvalidConfigurationDetailList
 */
const de_InvalidConfigurationDetailList = (output: any, context: __SerdeContext): InvalidConfigurationDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_InvalidConfigurationDetail(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Monitor
 */
const de_Monitor = (output: any, context: __SerdeContext): Monitor => {
  return {
    AlarmArn: __expectString(output.AlarmArn),
    AlarmRoleArn: __expectString(output.AlarmRoleArn),
  } as any;
};

/**
 * deserializeAws_restJson1MonitorList
 */
const de_MonitorList = (output: any, context: __SerdeContext): Monitor[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Monitor(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Parameter
 */
const de_Parameter = (output: any, context: __SerdeContext): Parameter => {
  return {
    Description: __expectString(output.Description),
    Required: __expectBoolean(output.Required),
  } as any;
};

/**
 * deserializeAws_restJson1ParameterMap
 */
const de_ParameterMap = (output: any, context: __SerdeContext): Record<string, Parameter> => {
  return Object.entries(output).reduce((acc: Record<string, Parameter>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_Parameter(value, context);
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1ParameterValueMap
 */
const de_ParameterValueMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1TagMap
 */
const de_TagMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1Validator
 */
const de_Validator = (output: any, context: __SerdeContext): Validator => {
  return {
    Content: __expectString(output.Content),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_restJson1ValidatorList
 */
const de_ValidatorList = (output: any, context: __SerdeContext): Validator[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Validator(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ValidatorTypeList
 */
const de_ValidatorTypeList = (output: any, context: __SerdeContext): (ValidatorType | string)[] => {
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
