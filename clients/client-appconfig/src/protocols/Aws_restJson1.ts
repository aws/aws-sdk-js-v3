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
  parseRfc3339DateTime as __parseRfc3339DateTime,
  serializeFloat as __serializeFloat,
  strictParseInt32 as __strictParseInt32,
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

export const serializeAws_restJson1CreateApplicationCommand = async (
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
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
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

export const serializeAws_restJson1CreateConfigurationProfileCommand = async (
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
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Description != null && { Description: input.Description }),
    ...(input.LocationUri != null && { LocationUri: input.LocationUri }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.RetrievalRoleArn != null && { RetrievalRoleArn: input.RetrievalRoleArn }),
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
    ...(input.Type != null && { Type: input.Type }),
    ...(input.Validators != null && { Validators: serializeAws_restJson1ValidatorList(input.Validators, context) }),
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

export const serializeAws_restJson1CreateDeploymentStrategyCommand = async (
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
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
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

export const serializeAws_restJson1CreateEnvironmentCommand = async (
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
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Monitors != null && { Monitors: serializeAws_restJson1MonitorList(input.Monitors, context) }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
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

export const serializeAws_restJson1CreateExtensionCommand = async (
  input: CreateExtensionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
    ...(isSerializableHeaderValue(input.LatestVersionNumber) && {
      "latest-version-number": input.LatestVersionNumber!.toString(),
    }),
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/extensions";
  let body: any;
  body = JSON.stringify({
    ...(input.Actions != null && { Actions: serializeAws_restJson1ActionsMap(input.Actions, context) }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Parameters != null && { Parameters: serializeAws_restJson1ParameterMap(input.Parameters, context) }),
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
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

export const serializeAws_restJson1CreateExtensionAssociationCommand = async (
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
    ...(input.Parameters != null && { Parameters: serializeAws_restJson1ParameterValueMap(input.Parameters, context) }),
    ...(input.ResourceIdentifier != null && { ResourceIdentifier: input.ResourceIdentifier }),
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
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

export const serializeAws_restJson1CreateHostedConfigurationVersionCommand = async (
  input: CreateHostedConfigurationVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/octet-stream",
    ...(isSerializableHeaderValue(input.Description) && { description: input.Description! }),
    ...(isSerializableHeaderValue(input.ContentType) && { "content-type": input.ContentType! }),
    ...(isSerializableHeaderValue(input.LatestVersionNumber) && {
      "latest-version-number": input.LatestVersionNumber!.toString(),
    }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/applications/{ApplicationId}/configurationprofiles/{ConfigurationProfileId}/hostedconfigurationversions";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  if (input.ConfigurationProfileId !== undefined) {
    const labelValue: string = input.ConfigurationProfileId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ConfigurationProfileId.");
    }
    resolvedPath = resolvedPath.replace("{ConfigurationProfileId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ConfigurationProfileId.");
  }
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

export const serializeAws_restJson1DeleteApplicationCommand = async (
  input: DeleteApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/applications/{ApplicationId}";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
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

export const serializeAws_restJson1DeleteConfigurationProfileCommand = async (
  input: DeleteConfigurationProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/applications/{ApplicationId}/configurationprofiles/{ConfigurationProfileId}";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  if (input.ConfigurationProfileId !== undefined) {
    const labelValue: string = input.ConfigurationProfileId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ConfigurationProfileId.");
    }
    resolvedPath = resolvedPath.replace("{ConfigurationProfileId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ConfigurationProfileId.");
  }
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

export const serializeAws_restJson1DeleteDeploymentStrategyCommand = async (
  input: DeleteDeploymentStrategyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/deployementstrategies/{DeploymentStrategyId}";
  if (input.DeploymentStrategyId !== undefined) {
    const labelValue: string = input.DeploymentStrategyId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DeploymentStrategyId.");
    }
    resolvedPath = resolvedPath.replace("{DeploymentStrategyId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DeploymentStrategyId.");
  }
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

export const serializeAws_restJson1DeleteEnvironmentCommand = async (
  input: DeleteEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/applications/{ApplicationId}/environments/{EnvironmentId}";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  if (input.EnvironmentId !== undefined) {
    const labelValue: string = input.EnvironmentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: EnvironmentId.");
    }
    resolvedPath = resolvedPath.replace("{EnvironmentId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: EnvironmentId.");
  }
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

export const serializeAws_restJson1DeleteExtensionCommand = async (
  input: DeleteExtensionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/extensions/{ExtensionIdentifier}";
  if (input.ExtensionIdentifier !== undefined) {
    const labelValue: string = input.ExtensionIdentifier;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ExtensionIdentifier.");
    }
    resolvedPath = resolvedPath.replace("{ExtensionIdentifier}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ExtensionIdentifier.");
  }
  const query: any = {
    ...(input.VersionNumber !== undefined && { version: input.VersionNumber.toString() }),
  };
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

export const serializeAws_restJson1DeleteExtensionAssociationCommand = async (
  input: DeleteExtensionAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/extensionassociations/{ExtensionAssociationId}";
  if (input.ExtensionAssociationId !== undefined) {
    const labelValue: string = input.ExtensionAssociationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ExtensionAssociationId.");
    }
    resolvedPath = resolvedPath.replace("{ExtensionAssociationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ExtensionAssociationId.");
  }
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

export const serializeAws_restJson1DeleteHostedConfigurationVersionCommand = async (
  input: DeleteHostedConfigurationVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/applications/{ApplicationId}/configurationprofiles/{ConfigurationProfileId}/hostedconfigurationversions/{VersionNumber}";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  if (input.ConfigurationProfileId !== undefined) {
    const labelValue: string = input.ConfigurationProfileId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ConfigurationProfileId.");
    }
    resolvedPath = resolvedPath.replace("{ConfigurationProfileId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ConfigurationProfileId.");
  }
  if (input.VersionNumber !== undefined) {
    const labelValue: string = input.VersionNumber.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: VersionNumber.");
    }
    resolvedPath = resolvedPath.replace("{VersionNumber}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: VersionNumber.");
  }
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

export const serializeAws_restJson1GetApplicationCommand = async (
  input: GetApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/applications/{ApplicationId}";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
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

export const serializeAws_restJson1GetConfigurationCommand = async (
  input: GetConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/applications/{Application}/environments/{Environment}/configurations/{Configuration}";
  if (input.Application !== undefined) {
    const labelValue: string = input.Application;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Application.");
    }
    resolvedPath = resolvedPath.replace("{Application}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Application.");
  }
  if (input.Environment !== undefined) {
    const labelValue: string = input.Environment;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Environment.");
    }
    resolvedPath = resolvedPath.replace("{Environment}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Environment.");
  }
  if (input.Configuration !== undefined) {
    const labelValue: string = input.Configuration;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Configuration.");
    }
    resolvedPath = resolvedPath.replace("{Configuration}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Configuration.");
  }
  const query: any = {
    ...(input.ClientId !== undefined && { client_id: input.ClientId }),
    ...(input.ClientConfigurationVersion !== undefined && {
      client_configuration_version: input.ClientConfigurationVersion,
    }),
  };
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

export const serializeAws_restJson1GetConfigurationProfileCommand = async (
  input: GetConfigurationProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/applications/{ApplicationId}/configurationprofiles/{ConfigurationProfileId}";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  if (input.ConfigurationProfileId !== undefined) {
    const labelValue: string = input.ConfigurationProfileId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ConfigurationProfileId.");
    }
    resolvedPath = resolvedPath.replace("{ConfigurationProfileId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ConfigurationProfileId.");
  }
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

export const serializeAws_restJson1GetDeploymentCommand = async (
  input: GetDeploymentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/applications/{ApplicationId}/environments/{EnvironmentId}/deployments/{DeploymentNumber}";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  if (input.EnvironmentId !== undefined) {
    const labelValue: string = input.EnvironmentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: EnvironmentId.");
    }
    resolvedPath = resolvedPath.replace("{EnvironmentId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: EnvironmentId.");
  }
  if (input.DeploymentNumber !== undefined) {
    const labelValue: string = input.DeploymentNumber.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DeploymentNumber.");
    }
    resolvedPath = resolvedPath.replace("{DeploymentNumber}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DeploymentNumber.");
  }
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

export const serializeAws_restJson1GetDeploymentStrategyCommand = async (
  input: GetDeploymentStrategyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/deploymentstrategies/{DeploymentStrategyId}";
  if (input.DeploymentStrategyId !== undefined) {
    const labelValue: string = input.DeploymentStrategyId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DeploymentStrategyId.");
    }
    resolvedPath = resolvedPath.replace("{DeploymentStrategyId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DeploymentStrategyId.");
  }
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

export const serializeAws_restJson1GetEnvironmentCommand = async (
  input: GetEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/applications/{ApplicationId}/environments/{EnvironmentId}";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  if (input.EnvironmentId !== undefined) {
    const labelValue: string = input.EnvironmentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: EnvironmentId.");
    }
    resolvedPath = resolvedPath.replace("{EnvironmentId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: EnvironmentId.");
  }
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

export const serializeAws_restJson1GetExtensionCommand = async (
  input: GetExtensionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/extensions/{ExtensionIdentifier}";
  if (input.ExtensionIdentifier !== undefined) {
    const labelValue: string = input.ExtensionIdentifier;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ExtensionIdentifier.");
    }
    resolvedPath = resolvedPath.replace("{ExtensionIdentifier}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ExtensionIdentifier.");
  }
  const query: any = {
    ...(input.VersionNumber !== undefined && { version_number: input.VersionNumber.toString() }),
  };
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

export const serializeAws_restJson1GetExtensionAssociationCommand = async (
  input: GetExtensionAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/extensionassociations/{ExtensionAssociationId}";
  if (input.ExtensionAssociationId !== undefined) {
    const labelValue: string = input.ExtensionAssociationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ExtensionAssociationId.");
    }
    resolvedPath = resolvedPath.replace("{ExtensionAssociationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ExtensionAssociationId.");
  }
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

export const serializeAws_restJson1GetHostedConfigurationVersionCommand = async (
  input: GetHostedConfigurationVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/applications/{ApplicationId}/configurationprofiles/{ConfigurationProfileId}/hostedconfigurationversions/{VersionNumber}";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  if (input.ConfigurationProfileId !== undefined) {
    const labelValue: string = input.ConfigurationProfileId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ConfigurationProfileId.");
    }
    resolvedPath = resolvedPath.replace("{ConfigurationProfileId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ConfigurationProfileId.");
  }
  if (input.VersionNumber !== undefined) {
    const labelValue: string = input.VersionNumber.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: VersionNumber.");
    }
    resolvedPath = resolvedPath.replace("{VersionNumber}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: VersionNumber.");
  }
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

export const serializeAws_restJson1ListApplicationsCommand = async (
  input: ListApplicationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/applications";
  const query: any = {
    ...(input.MaxResults !== undefined && { max_results: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { next_token: input.NextToken }),
  };
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

export const serializeAws_restJson1ListConfigurationProfilesCommand = async (
  input: ListConfigurationProfilesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/applications/{ApplicationId}/configurationprofiles";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  const query: any = {
    ...(input.MaxResults !== undefined && { max_results: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { next_token: input.NextToken }),
    ...(input.Type !== undefined && { type: input.Type }),
  };
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
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/applications/{ApplicationId}/environments/{EnvironmentId}/deployments";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  if (input.EnvironmentId !== undefined) {
    const labelValue: string = input.EnvironmentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: EnvironmentId.");
    }
    resolvedPath = resolvedPath.replace("{EnvironmentId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: EnvironmentId.");
  }
  const query: any = {
    ...(input.MaxResults !== undefined && { max_results: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { next_token: input.NextToken }),
  };
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

export const serializeAws_restJson1ListDeploymentStrategiesCommand = async (
  input: ListDeploymentStrategiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/deploymentstrategies";
  const query: any = {
    ...(input.MaxResults !== undefined && { max_results: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { next_token: input.NextToken }),
  };
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

export const serializeAws_restJson1ListEnvironmentsCommand = async (
  input: ListEnvironmentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/applications/{ApplicationId}/environments";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  const query: any = {
    ...(input.MaxResults !== undefined && { max_results: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { next_token: input.NextToken }),
  };
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

export const serializeAws_restJson1ListExtensionAssociationsCommand = async (
  input: ListExtensionAssociationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/extensionassociations";
  const query: any = {
    ...(input.ResourceIdentifier !== undefined && { resource_identifier: input.ResourceIdentifier }),
    ...(input.ExtensionIdentifier !== undefined && { extension_identifier: input.ExtensionIdentifier }),
    ...(input.ExtensionVersionNumber !== undefined && {
      extension_version_number: input.ExtensionVersionNumber.toString(),
    }),
    ...(input.MaxResults !== undefined && { max_results: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { next_token: input.NextToken }),
  };
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

export const serializeAws_restJson1ListExtensionsCommand = async (
  input: ListExtensionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/extensions";
  const query: any = {
    ...(input.MaxResults !== undefined && { max_results: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { next_token: input.NextToken }),
    ...(input.Name !== undefined && { name: input.Name }),
  };
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

export const serializeAws_restJson1ListHostedConfigurationVersionsCommand = async (
  input: ListHostedConfigurationVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/applications/{ApplicationId}/configurationprofiles/{ConfigurationProfileId}/hostedconfigurationversions";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  if (input.ConfigurationProfileId !== undefined) {
    const labelValue: string = input.ConfigurationProfileId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ConfigurationProfileId.");
    }
    resolvedPath = resolvedPath.replace("{ConfigurationProfileId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ConfigurationProfileId.");
  }
  const query: any = {
    ...(input.MaxResults !== undefined && { max_results: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { next_token: input.NextToken }),
  };
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
  if (input.ResourceArn !== undefined) {
    const labelValue: string = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceArn.");
    }
    resolvedPath = resolvedPath.replace("{ResourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
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

export const serializeAws_restJson1StartDeploymentCommand = async (
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
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  if (input.EnvironmentId !== undefined) {
    const labelValue: string = input.EnvironmentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: EnvironmentId.");
    }
    resolvedPath = resolvedPath.replace("{EnvironmentId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: EnvironmentId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.ConfigurationProfileId != null && { ConfigurationProfileId: input.ConfigurationProfileId }),
    ...(input.ConfigurationVersion != null && { ConfigurationVersion: input.ConfigurationVersion }),
    ...(input.DeploymentStrategyId != null && { DeploymentStrategyId: input.DeploymentStrategyId }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
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

export const serializeAws_restJson1StopDeploymentCommand = async (
  input: StopDeploymentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/applications/{ApplicationId}/environments/{EnvironmentId}/deployments/{DeploymentNumber}";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  if (input.EnvironmentId !== undefined) {
    const labelValue: string = input.EnvironmentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: EnvironmentId.");
    }
    resolvedPath = resolvedPath.replace("{EnvironmentId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: EnvironmentId.");
  }
  if (input.DeploymentNumber !== undefined) {
    const labelValue: string = input.DeploymentNumber.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DeploymentNumber.");
    }
    resolvedPath = resolvedPath.replace("{DeploymentNumber}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DeploymentNumber.");
  }
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

export const serializeAws_restJson1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue: string = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceArn.");
    }
    resolvedPath = resolvedPath.replace("{ResourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
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
  if (input.ResourceArn !== undefined) {
    const labelValue: string = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceArn.");
    }
    resolvedPath = resolvedPath.replace("{ResourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
  const query: any = {
    ...(input.TagKeys !== undefined && { tagKeys: (input.TagKeys || []).map((_entry) => _entry as any) }),
  };
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

export const serializeAws_restJson1UpdateApplicationCommand = async (
  input: UpdateApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/applications/{ApplicationId}";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
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

export const serializeAws_restJson1UpdateConfigurationProfileCommand = async (
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
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  if (input.ConfigurationProfileId !== undefined) {
    const labelValue: string = input.ConfigurationProfileId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ConfigurationProfileId.");
    }
    resolvedPath = resolvedPath.replace("{ConfigurationProfileId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ConfigurationProfileId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.RetrievalRoleArn != null && { RetrievalRoleArn: input.RetrievalRoleArn }),
    ...(input.Validators != null && { Validators: serializeAws_restJson1ValidatorList(input.Validators, context) }),
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

export const serializeAws_restJson1UpdateDeploymentStrategyCommand = async (
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
  if (input.DeploymentStrategyId !== undefined) {
    const labelValue: string = input.DeploymentStrategyId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DeploymentStrategyId.");
    }
    resolvedPath = resolvedPath.replace("{DeploymentStrategyId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DeploymentStrategyId.");
  }
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

export const serializeAws_restJson1UpdateEnvironmentCommand = async (
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
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  if (input.EnvironmentId !== undefined) {
    const labelValue: string = input.EnvironmentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: EnvironmentId.");
    }
    resolvedPath = resolvedPath.replace("{EnvironmentId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: EnvironmentId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Monitors != null && { Monitors: serializeAws_restJson1MonitorList(input.Monitors, context) }),
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

export const serializeAws_restJson1UpdateExtensionCommand = async (
  input: UpdateExtensionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/extensions/{ExtensionIdentifier}";
  if (input.ExtensionIdentifier !== undefined) {
    const labelValue: string = input.ExtensionIdentifier;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ExtensionIdentifier.");
    }
    resolvedPath = resolvedPath.replace("{ExtensionIdentifier}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ExtensionIdentifier.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Actions != null && { Actions: serializeAws_restJson1ActionsMap(input.Actions, context) }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Parameters != null && { Parameters: serializeAws_restJson1ParameterMap(input.Parameters, context) }),
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

export const serializeAws_restJson1UpdateExtensionAssociationCommand = async (
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
  if (input.ExtensionAssociationId !== undefined) {
    const labelValue: string = input.ExtensionAssociationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ExtensionAssociationId.");
    }
    resolvedPath = resolvedPath.replace("{ExtensionAssociationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ExtensionAssociationId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Parameters != null && { Parameters: serializeAws_restJson1ParameterValueMap(input.Parameters, context) }),
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

export const serializeAws_restJson1ValidateConfigurationCommand = async (
  input: ValidateConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/applications/{ApplicationId}/configurationprofiles/{ConfigurationProfileId}/validators";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  if (input.ConfigurationProfileId !== undefined) {
    const labelValue: string = input.ConfigurationProfileId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ConfigurationProfileId.");
    }
    resolvedPath = resolvedPath.replace("{ConfigurationProfileId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ConfigurationProfileId.");
  }
  const query: any = {
    ...(input.ConfigurationVersion !== undefined && { configuration_version: input.ConfigurationVersion }),
  };
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

export const deserializeAws_restJson1CreateApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApplicationCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateApplicationCommandError(output, context);
  }
  const contents: CreateApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    Description: undefined,
    Id: undefined,
    Name: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Description !== undefined && data.Description !== null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.Id !== undefined && data.Id !== null) {
    contents.Id = __expectString(data.Id);
  }
  if (data.Name !== undefined && data.Name !== null) {
    contents.Name = __expectString(data.Name);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1CreateConfigurationProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfigurationProfileCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateConfigurationProfileCommandError(output, context);
  }
  const contents: CreateConfigurationProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    ApplicationId: undefined,
    Description: undefined,
    Id: undefined,
    LocationUri: undefined,
    Name: undefined,
    RetrievalRoleArn: undefined,
    Type: undefined,
    Validators: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ApplicationId !== undefined && data.ApplicationId !== null) {
    contents.ApplicationId = __expectString(data.ApplicationId);
  }
  if (data.Description !== undefined && data.Description !== null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.Id !== undefined && data.Id !== null) {
    contents.Id = __expectString(data.Id);
  }
  if (data.LocationUri !== undefined && data.LocationUri !== null) {
    contents.LocationUri = __expectString(data.LocationUri);
  }
  if (data.Name !== undefined && data.Name !== null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.RetrievalRoleArn !== undefined && data.RetrievalRoleArn !== null) {
    contents.RetrievalRoleArn = __expectString(data.RetrievalRoleArn);
  }
  if (data.Type !== undefined && data.Type !== null) {
    contents.Type = __expectString(data.Type);
  }
  if (data.Validators !== undefined && data.Validators !== null) {
    contents.Validators = deserializeAws_restJson1ValidatorList(data.Validators, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateConfigurationProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfigurationProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appconfig#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1CreateDeploymentStrategyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDeploymentStrategyCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateDeploymentStrategyCommandError(output, context);
  }
  const contents: CreateDeploymentStrategyCommandOutput = {
    $metadata: deserializeMetadata(output),
    DeploymentDurationInMinutes: undefined,
    Description: undefined,
    FinalBakeTimeInMinutes: undefined,
    GrowthFactor: undefined,
    GrowthType: undefined,
    Id: undefined,
    Name: undefined,
    ReplicateTo: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DeploymentDurationInMinutes !== undefined && data.DeploymentDurationInMinutes !== null) {
    contents.DeploymentDurationInMinutes = __expectInt32(data.DeploymentDurationInMinutes);
  }
  if (data.Description !== undefined && data.Description !== null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.FinalBakeTimeInMinutes !== undefined && data.FinalBakeTimeInMinutes !== null) {
    contents.FinalBakeTimeInMinutes = __expectInt32(data.FinalBakeTimeInMinutes);
  }
  if (data.GrowthFactor !== undefined && data.GrowthFactor !== null) {
    contents.GrowthFactor = __limitedParseFloat32(data.GrowthFactor);
  }
  if (data.GrowthType !== undefined && data.GrowthType !== null) {
    contents.GrowthType = __expectString(data.GrowthType);
  }
  if (data.Id !== undefined && data.Id !== null) {
    contents.Id = __expectString(data.Id);
  }
  if (data.Name !== undefined && data.Name !== null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.ReplicateTo !== undefined && data.ReplicateTo !== null) {
    contents.ReplicateTo = __expectString(data.ReplicateTo);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateDeploymentStrategyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDeploymentStrategyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1CreateEnvironmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEnvironmentCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateEnvironmentCommandError(output, context);
  }
  const contents: CreateEnvironmentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ApplicationId: undefined,
    Description: undefined,
    Id: undefined,
    Monitors: undefined,
    Name: undefined,
    State: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ApplicationId !== undefined && data.ApplicationId !== null) {
    contents.ApplicationId = __expectString(data.ApplicationId);
  }
  if (data.Description !== undefined && data.Description !== null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.Id !== undefined && data.Id !== null) {
    contents.Id = __expectString(data.Id);
  }
  if (data.Monitors !== undefined && data.Monitors !== null) {
    contents.Monitors = deserializeAws_restJson1MonitorList(data.Monitors, context);
  }
  if (data.Name !== undefined && data.Name !== null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.State !== undefined && data.State !== null) {
    contents.State = __expectString(data.State);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateEnvironmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEnvironmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appconfig#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1CreateExtensionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateExtensionCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateExtensionCommandError(output, context);
  }
  const contents: CreateExtensionCommandOutput = {
    $metadata: deserializeMetadata(output),
    Actions: undefined,
    Arn: undefined,
    Description: undefined,
    Id: undefined,
    Name: undefined,
    Parameters: undefined,
    VersionNumber: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Actions !== undefined && data.Actions !== null) {
    contents.Actions = deserializeAws_restJson1ActionsMap(data.Actions, context);
  }
  if (data.Arn !== undefined && data.Arn !== null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.Description !== undefined && data.Description !== null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.Id !== undefined && data.Id !== null) {
    contents.Id = __expectString(data.Id);
  }
  if (data.Name !== undefined && data.Name !== null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.Parameters !== undefined && data.Parameters !== null) {
    contents.Parameters = deserializeAws_restJson1ParameterMap(data.Parameters, context);
  }
  if (data.VersionNumber !== undefined && data.VersionNumber !== null) {
    contents.VersionNumber = __expectInt32(data.VersionNumber);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateExtensionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateExtensionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.appconfig#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.appconfig#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1CreateExtensionAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateExtensionAssociationCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateExtensionAssociationCommandError(output, context);
  }
  const contents: CreateExtensionAssociationCommandOutput = {
    $metadata: deserializeMetadata(output),
    Arn: undefined,
    ExtensionArn: undefined,
    ExtensionVersionNumber: undefined,
    Id: undefined,
    Parameters: undefined,
    ResourceArn: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn !== undefined && data.Arn !== null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.ExtensionArn !== undefined && data.ExtensionArn !== null) {
    contents.ExtensionArn = __expectString(data.ExtensionArn);
  }
  if (data.ExtensionVersionNumber !== undefined && data.ExtensionVersionNumber !== null) {
    contents.ExtensionVersionNumber = __expectInt32(data.ExtensionVersionNumber);
  }
  if (data.Id !== undefined && data.Id !== null) {
    contents.Id = __expectString(data.Id);
  }
  if (data.Parameters !== undefined && data.Parameters !== null) {
    contents.Parameters = deserializeAws_restJson1ParameterValueMap(data.Parameters, context);
  }
  if (data.ResourceArn !== undefined && data.ResourceArn !== null) {
    contents.ResourceArn = __expectString(data.ResourceArn);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateExtensionAssociationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateExtensionAssociationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appconfig#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.appconfig#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1CreateHostedConfigurationVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateHostedConfigurationVersionCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateHostedConfigurationVersionCommandError(output, context);
  }
  const contents: CreateHostedConfigurationVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ApplicationId: undefined,
    ConfigurationProfileId: undefined,
    Content: undefined,
    ContentType: undefined,
    Description: undefined,
    VersionNumber: undefined,
  };
  if (output.headers["application-id"] !== undefined) {
    contents.ApplicationId = output.headers["application-id"];
  }
  if (output.headers["configuration-profile-id"] !== undefined) {
    contents.ConfigurationProfileId = output.headers["configuration-profile-id"];
  }
  if (output.headers["version-number"] !== undefined) {
    contents.VersionNumber = __strictParseInt32(output.headers["version-number"]);
  }
  if (output.headers["description"] !== undefined) {
    contents.Description = output.headers["description"];
  }
  if (output.headers["content-type"] !== undefined) {
    contents.ContentType = output.headers["content-type"];
  }
  const data: any = await collectBody(output.body, context);
  contents.Content = data;
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateHostedConfigurationVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateHostedConfigurationVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.appconfig#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.appconfig#PayloadTooLargeException":
      throw await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appconfig#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.appconfig#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DeleteApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteApplicationCommandError(output, context);
  }
  const contents: DeleteApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appconfig#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DeleteConfigurationProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfigurationProfileCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteConfigurationProfileCommandError(output, context);
  }
  const contents: DeleteConfigurationProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteConfigurationProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfigurationProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.appconfig#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appconfig#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DeleteDeploymentStrategyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDeploymentStrategyCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteDeploymentStrategyCommandError(output, context);
  }
  const contents: DeleteDeploymentStrategyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteDeploymentStrategyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDeploymentStrategyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appconfig#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DeleteEnvironmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEnvironmentCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteEnvironmentCommandError(output, context);
  }
  const contents: DeleteEnvironmentCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteEnvironmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEnvironmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.appconfig#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appconfig#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DeleteExtensionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteExtensionCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteExtensionCommandError(output, context);
  }
  const contents: DeleteExtensionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteExtensionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteExtensionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appconfig#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DeleteExtensionAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteExtensionAssociationCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteExtensionAssociationCommandError(output, context);
  }
  const contents: DeleteExtensionAssociationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteExtensionAssociationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteExtensionAssociationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appconfig#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DeleteHostedConfigurationVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteHostedConfigurationVersionCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteHostedConfigurationVersionCommandError(output, context);
  }
  const contents: DeleteHostedConfigurationVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteHostedConfigurationVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteHostedConfigurationVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appconfig#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetApplicationCommandError(output, context);
  }
  const contents: GetApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    Description: undefined,
    Id: undefined,
    Name: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Description !== undefined && data.Description !== null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.Id !== undefined && data.Id !== null) {
    contents.Id = __expectString(data.Id);
  }
  if (data.Name !== undefined && data.Name !== null) {
    contents.Name = __expectString(data.Name);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appconfig#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetConfigurationCommandError(output, context);
  }
  const contents: GetConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ConfigurationVersion: undefined,
    Content: undefined,
    ContentType: undefined,
  };
  if (output.headers["configuration-version"] !== undefined) {
    contents.ConfigurationVersion = output.headers["configuration-version"];
  }
  if (output.headers["content-type"] !== undefined) {
    contents.ContentType = output.headers["content-type"];
  }
  const data: any = await collectBody(output.body, context);
  contents.Content = data;
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appconfig#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetConfigurationProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConfigurationProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetConfigurationProfileCommandError(output, context);
  }
  const contents: GetConfigurationProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    ApplicationId: undefined,
    Description: undefined,
    Id: undefined,
    LocationUri: undefined,
    Name: undefined,
    RetrievalRoleArn: undefined,
    Type: undefined,
    Validators: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ApplicationId !== undefined && data.ApplicationId !== null) {
    contents.ApplicationId = __expectString(data.ApplicationId);
  }
  if (data.Description !== undefined && data.Description !== null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.Id !== undefined && data.Id !== null) {
    contents.Id = __expectString(data.Id);
  }
  if (data.LocationUri !== undefined && data.LocationUri !== null) {
    contents.LocationUri = __expectString(data.LocationUri);
  }
  if (data.Name !== undefined && data.Name !== null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.RetrievalRoleArn !== undefined && data.RetrievalRoleArn !== null) {
    contents.RetrievalRoleArn = __expectString(data.RetrievalRoleArn);
  }
  if (data.Type !== undefined && data.Type !== null) {
    contents.Type = __expectString(data.Type);
  }
  if (data.Validators !== undefined && data.Validators !== null) {
    contents.Validators = deserializeAws_restJson1ValidatorList(data.Validators, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetConfigurationProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConfigurationProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appconfig#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetDeploymentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeploymentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetDeploymentCommandError(output, context);
  }
  const contents: GetDeploymentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ApplicationId: undefined,
    AppliedExtensions: undefined,
    CompletedAt: undefined,
    ConfigurationLocationUri: undefined,
    ConfigurationName: undefined,
    ConfigurationProfileId: undefined,
    ConfigurationVersion: undefined,
    DeploymentDurationInMinutes: undefined,
    DeploymentNumber: undefined,
    DeploymentStrategyId: undefined,
    Description: undefined,
    EnvironmentId: undefined,
    EventLog: undefined,
    FinalBakeTimeInMinutes: undefined,
    GrowthFactor: undefined,
    GrowthType: undefined,
    PercentageComplete: undefined,
    StartedAt: undefined,
    State: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ApplicationId !== undefined && data.ApplicationId !== null) {
    contents.ApplicationId = __expectString(data.ApplicationId);
  }
  if (data.AppliedExtensions !== undefined && data.AppliedExtensions !== null) {
    contents.AppliedExtensions = deserializeAws_restJson1AppliedExtensions(data.AppliedExtensions, context);
  }
  if (data.CompletedAt !== undefined && data.CompletedAt !== null) {
    contents.CompletedAt = __expectNonNull(__parseRfc3339DateTime(data.CompletedAt));
  }
  if (data.ConfigurationLocationUri !== undefined && data.ConfigurationLocationUri !== null) {
    contents.ConfigurationLocationUri = __expectString(data.ConfigurationLocationUri);
  }
  if (data.ConfigurationName !== undefined && data.ConfigurationName !== null) {
    contents.ConfigurationName = __expectString(data.ConfigurationName);
  }
  if (data.ConfigurationProfileId !== undefined && data.ConfigurationProfileId !== null) {
    contents.ConfigurationProfileId = __expectString(data.ConfigurationProfileId);
  }
  if (data.ConfigurationVersion !== undefined && data.ConfigurationVersion !== null) {
    contents.ConfigurationVersion = __expectString(data.ConfigurationVersion);
  }
  if (data.DeploymentDurationInMinutes !== undefined && data.DeploymentDurationInMinutes !== null) {
    contents.DeploymentDurationInMinutes = __expectInt32(data.DeploymentDurationInMinutes);
  }
  if (data.DeploymentNumber !== undefined && data.DeploymentNumber !== null) {
    contents.DeploymentNumber = __expectInt32(data.DeploymentNumber);
  }
  if (data.DeploymentStrategyId !== undefined && data.DeploymentStrategyId !== null) {
    contents.DeploymentStrategyId = __expectString(data.DeploymentStrategyId);
  }
  if (data.Description !== undefined && data.Description !== null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.EnvironmentId !== undefined && data.EnvironmentId !== null) {
    contents.EnvironmentId = __expectString(data.EnvironmentId);
  }
  if (data.EventLog !== undefined && data.EventLog !== null) {
    contents.EventLog = deserializeAws_restJson1DeploymentEvents(data.EventLog, context);
  }
  if (data.FinalBakeTimeInMinutes !== undefined && data.FinalBakeTimeInMinutes !== null) {
    contents.FinalBakeTimeInMinutes = __expectInt32(data.FinalBakeTimeInMinutes);
  }
  if (data.GrowthFactor !== undefined && data.GrowthFactor !== null) {
    contents.GrowthFactor = __limitedParseFloat32(data.GrowthFactor);
  }
  if (data.GrowthType !== undefined && data.GrowthType !== null) {
    contents.GrowthType = __expectString(data.GrowthType);
  }
  if (data.PercentageComplete !== undefined && data.PercentageComplete !== null) {
    contents.PercentageComplete = __limitedParseFloat32(data.PercentageComplete);
  }
  if (data.StartedAt !== undefined && data.StartedAt !== null) {
    contents.StartedAt = __expectNonNull(__parseRfc3339DateTime(data.StartedAt));
  }
  if (data.State !== undefined && data.State !== null) {
    contents.State = __expectString(data.State);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetDeploymentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeploymentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appconfig#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetDeploymentStrategyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeploymentStrategyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetDeploymentStrategyCommandError(output, context);
  }
  const contents: GetDeploymentStrategyCommandOutput = {
    $metadata: deserializeMetadata(output),
    DeploymentDurationInMinutes: undefined,
    Description: undefined,
    FinalBakeTimeInMinutes: undefined,
    GrowthFactor: undefined,
    GrowthType: undefined,
    Id: undefined,
    Name: undefined,
    ReplicateTo: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DeploymentDurationInMinutes !== undefined && data.DeploymentDurationInMinutes !== null) {
    contents.DeploymentDurationInMinutes = __expectInt32(data.DeploymentDurationInMinutes);
  }
  if (data.Description !== undefined && data.Description !== null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.FinalBakeTimeInMinutes !== undefined && data.FinalBakeTimeInMinutes !== null) {
    contents.FinalBakeTimeInMinutes = __expectInt32(data.FinalBakeTimeInMinutes);
  }
  if (data.GrowthFactor !== undefined && data.GrowthFactor !== null) {
    contents.GrowthFactor = __limitedParseFloat32(data.GrowthFactor);
  }
  if (data.GrowthType !== undefined && data.GrowthType !== null) {
    contents.GrowthType = __expectString(data.GrowthType);
  }
  if (data.Id !== undefined && data.Id !== null) {
    contents.Id = __expectString(data.Id);
  }
  if (data.Name !== undefined && data.Name !== null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.ReplicateTo !== undefined && data.ReplicateTo !== null) {
    contents.ReplicateTo = __expectString(data.ReplicateTo);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetDeploymentStrategyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeploymentStrategyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appconfig#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetEnvironmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEnvironmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetEnvironmentCommandError(output, context);
  }
  const contents: GetEnvironmentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ApplicationId: undefined,
    Description: undefined,
    Id: undefined,
    Monitors: undefined,
    Name: undefined,
    State: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ApplicationId !== undefined && data.ApplicationId !== null) {
    contents.ApplicationId = __expectString(data.ApplicationId);
  }
  if (data.Description !== undefined && data.Description !== null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.Id !== undefined && data.Id !== null) {
    contents.Id = __expectString(data.Id);
  }
  if (data.Monitors !== undefined && data.Monitors !== null) {
    contents.Monitors = deserializeAws_restJson1MonitorList(data.Monitors, context);
  }
  if (data.Name !== undefined && data.Name !== null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.State !== undefined && data.State !== null) {
    contents.State = __expectString(data.State);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetEnvironmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEnvironmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appconfig#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetExtensionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetExtensionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetExtensionCommandError(output, context);
  }
  const contents: GetExtensionCommandOutput = {
    $metadata: deserializeMetadata(output),
    Actions: undefined,
    Arn: undefined,
    Description: undefined,
    Id: undefined,
    Name: undefined,
    Parameters: undefined,
    VersionNumber: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Actions !== undefined && data.Actions !== null) {
    contents.Actions = deserializeAws_restJson1ActionsMap(data.Actions, context);
  }
  if (data.Arn !== undefined && data.Arn !== null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.Description !== undefined && data.Description !== null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.Id !== undefined && data.Id !== null) {
    contents.Id = __expectString(data.Id);
  }
  if (data.Name !== undefined && data.Name !== null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.Parameters !== undefined && data.Parameters !== null) {
    contents.Parameters = deserializeAws_restJson1ParameterMap(data.Parameters, context);
  }
  if (data.VersionNumber !== undefined && data.VersionNumber !== null) {
    contents.VersionNumber = __expectInt32(data.VersionNumber);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetExtensionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetExtensionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appconfig#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetExtensionAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetExtensionAssociationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetExtensionAssociationCommandError(output, context);
  }
  const contents: GetExtensionAssociationCommandOutput = {
    $metadata: deserializeMetadata(output),
    Arn: undefined,
    ExtensionArn: undefined,
    ExtensionVersionNumber: undefined,
    Id: undefined,
    Parameters: undefined,
    ResourceArn: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn !== undefined && data.Arn !== null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.ExtensionArn !== undefined && data.ExtensionArn !== null) {
    contents.ExtensionArn = __expectString(data.ExtensionArn);
  }
  if (data.ExtensionVersionNumber !== undefined && data.ExtensionVersionNumber !== null) {
    contents.ExtensionVersionNumber = __expectInt32(data.ExtensionVersionNumber);
  }
  if (data.Id !== undefined && data.Id !== null) {
    contents.Id = __expectString(data.Id);
  }
  if (data.Parameters !== undefined && data.Parameters !== null) {
    contents.Parameters = deserializeAws_restJson1ParameterValueMap(data.Parameters, context);
  }
  if (data.ResourceArn !== undefined && data.ResourceArn !== null) {
    contents.ResourceArn = __expectString(data.ResourceArn);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetExtensionAssociationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetExtensionAssociationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appconfig#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetHostedConfigurationVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetHostedConfigurationVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetHostedConfigurationVersionCommandError(output, context);
  }
  const contents: GetHostedConfigurationVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ApplicationId: undefined,
    ConfigurationProfileId: undefined,
    Content: undefined,
    ContentType: undefined,
    Description: undefined,
    VersionNumber: undefined,
  };
  if (output.headers["application-id"] !== undefined) {
    contents.ApplicationId = output.headers["application-id"];
  }
  if (output.headers["configuration-profile-id"] !== undefined) {
    contents.ConfigurationProfileId = output.headers["configuration-profile-id"];
  }
  if (output.headers["version-number"] !== undefined) {
    contents.VersionNumber = __strictParseInt32(output.headers["version-number"]);
  }
  if (output.headers["description"] !== undefined) {
    contents.Description = output.headers["description"];
  }
  if (output.headers["content-type"] !== undefined) {
    contents.ContentType = output.headers["content-type"];
  }
  const data: any = await collectBody(output.body, context);
  contents.Content = data;
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetHostedConfigurationVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetHostedConfigurationVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appconfig#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListApplicationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListApplicationsCommandError(output, context);
  }
  const contents: ListApplicationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    Items: undefined,
    NextToken: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Items !== undefined && data.Items !== null) {
    contents.Items = deserializeAws_restJson1ApplicationList(data.Items, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListApplicationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListConfigurationProfilesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConfigurationProfilesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListConfigurationProfilesCommandError(output, context);
  }
  const contents: ListConfigurationProfilesCommandOutput = {
    $metadata: deserializeMetadata(output),
    Items: undefined,
    NextToken: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Items !== undefined && data.Items !== null) {
    contents.Items = deserializeAws_restJson1ConfigurationProfileSummaryList(data.Items, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListConfigurationProfilesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConfigurationProfilesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appconfig#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListDeploymentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeploymentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListDeploymentsCommandError(output, context);
  }
  const contents: ListDeploymentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    Items: undefined,
    NextToken: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Items !== undefined && data.Items !== null) {
    contents.Items = deserializeAws_restJson1DeploymentList(data.Items, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListDeploymentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeploymentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appconfig#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListDeploymentStrategiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeploymentStrategiesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListDeploymentStrategiesCommandError(output, context);
  }
  const contents: ListDeploymentStrategiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    Items: undefined,
    NextToken: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Items !== undefined && data.Items !== null) {
    contents.Items = deserializeAws_restJson1DeploymentStrategyList(data.Items, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListDeploymentStrategiesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeploymentStrategiesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListEnvironmentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEnvironmentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListEnvironmentsCommandError(output, context);
  }
  const contents: ListEnvironmentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    Items: undefined,
    NextToken: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Items !== undefined && data.Items !== null) {
    contents.Items = deserializeAws_restJson1EnvironmentList(data.Items, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListEnvironmentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEnvironmentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appconfig#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListExtensionAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListExtensionAssociationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListExtensionAssociationsCommandError(output, context);
  }
  const contents: ListExtensionAssociationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    Items: undefined,
    NextToken: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Items !== undefined && data.Items !== null) {
    contents.Items = deserializeAws_restJson1ExtensionAssociationSummaries(data.Items, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListExtensionAssociationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListExtensionAssociationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListExtensionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListExtensionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListExtensionsCommandError(output, context);
  }
  const contents: ListExtensionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    Items: undefined,
    NextToken: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Items !== undefined && data.Items !== null) {
    contents.Items = deserializeAws_restJson1ExtensionSummaries(data.Items, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListExtensionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListExtensionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListHostedConfigurationVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHostedConfigurationVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListHostedConfigurationVersionsCommandError(output, context);
  }
  const contents: ListHostedConfigurationVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    Items: undefined,
    NextToken: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Items !== undefined && data.Items !== null) {
    contents.Items = deserializeAws_restJson1HostedConfigurationVersionSummaryList(data.Items, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListHostedConfigurationVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHostedConfigurationVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appconfig#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTagsForResourceCommandError(output, context);
  }
  const contents: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    Tags: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Tags !== undefined && data.Tags !== null) {
    contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appconfig#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1StartDeploymentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDeploymentCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartDeploymentCommandError(output, context);
  }
  const contents: StartDeploymentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ApplicationId: undefined,
    AppliedExtensions: undefined,
    CompletedAt: undefined,
    ConfigurationLocationUri: undefined,
    ConfigurationName: undefined,
    ConfigurationProfileId: undefined,
    ConfigurationVersion: undefined,
    DeploymentDurationInMinutes: undefined,
    DeploymentNumber: undefined,
    DeploymentStrategyId: undefined,
    Description: undefined,
    EnvironmentId: undefined,
    EventLog: undefined,
    FinalBakeTimeInMinutes: undefined,
    GrowthFactor: undefined,
    GrowthType: undefined,
    PercentageComplete: undefined,
    StartedAt: undefined,
    State: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ApplicationId !== undefined && data.ApplicationId !== null) {
    contents.ApplicationId = __expectString(data.ApplicationId);
  }
  if (data.AppliedExtensions !== undefined && data.AppliedExtensions !== null) {
    contents.AppliedExtensions = deserializeAws_restJson1AppliedExtensions(data.AppliedExtensions, context);
  }
  if (data.CompletedAt !== undefined && data.CompletedAt !== null) {
    contents.CompletedAt = __expectNonNull(__parseRfc3339DateTime(data.CompletedAt));
  }
  if (data.ConfigurationLocationUri !== undefined && data.ConfigurationLocationUri !== null) {
    contents.ConfigurationLocationUri = __expectString(data.ConfigurationLocationUri);
  }
  if (data.ConfigurationName !== undefined && data.ConfigurationName !== null) {
    contents.ConfigurationName = __expectString(data.ConfigurationName);
  }
  if (data.ConfigurationProfileId !== undefined && data.ConfigurationProfileId !== null) {
    contents.ConfigurationProfileId = __expectString(data.ConfigurationProfileId);
  }
  if (data.ConfigurationVersion !== undefined && data.ConfigurationVersion !== null) {
    contents.ConfigurationVersion = __expectString(data.ConfigurationVersion);
  }
  if (data.DeploymentDurationInMinutes !== undefined && data.DeploymentDurationInMinutes !== null) {
    contents.DeploymentDurationInMinutes = __expectInt32(data.DeploymentDurationInMinutes);
  }
  if (data.DeploymentNumber !== undefined && data.DeploymentNumber !== null) {
    contents.DeploymentNumber = __expectInt32(data.DeploymentNumber);
  }
  if (data.DeploymentStrategyId !== undefined && data.DeploymentStrategyId !== null) {
    contents.DeploymentStrategyId = __expectString(data.DeploymentStrategyId);
  }
  if (data.Description !== undefined && data.Description !== null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.EnvironmentId !== undefined && data.EnvironmentId !== null) {
    contents.EnvironmentId = __expectString(data.EnvironmentId);
  }
  if (data.EventLog !== undefined && data.EventLog !== null) {
    contents.EventLog = deserializeAws_restJson1DeploymentEvents(data.EventLog, context);
  }
  if (data.FinalBakeTimeInMinutes !== undefined && data.FinalBakeTimeInMinutes !== null) {
    contents.FinalBakeTimeInMinutes = __expectInt32(data.FinalBakeTimeInMinutes);
  }
  if (data.GrowthFactor !== undefined && data.GrowthFactor !== null) {
    contents.GrowthFactor = __limitedParseFloat32(data.GrowthFactor);
  }
  if (data.GrowthType !== undefined && data.GrowthType !== null) {
    contents.GrowthType = __expectString(data.GrowthType);
  }
  if (data.PercentageComplete !== undefined && data.PercentageComplete !== null) {
    contents.PercentageComplete = __limitedParseFloat32(data.PercentageComplete);
  }
  if (data.StartedAt !== undefined && data.StartedAt !== null) {
    contents.StartedAt = __expectNonNull(__parseRfc3339DateTime(data.StartedAt));
  }
  if (data.State !== undefined && data.State !== null) {
    contents.State = __expectString(data.State);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1StartDeploymentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDeploymentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.appconfig#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appconfig#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1StopDeploymentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopDeploymentCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1StopDeploymentCommandError(output, context);
  }
  const contents: StopDeploymentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ApplicationId: undefined,
    AppliedExtensions: undefined,
    CompletedAt: undefined,
    ConfigurationLocationUri: undefined,
    ConfigurationName: undefined,
    ConfigurationProfileId: undefined,
    ConfigurationVersion: undefined,
    DeploymentDurationInMinutes: undefined,
    DeploymentNumber: undefined,
    DeploymentStrategyId: undefined,
    Description: undefined,
    EnvironmentId: undefined,
    EventLog: undefined,
    FinalBakeTimeInMinutes: undefined,
    GrowthFactor: undefined,
    GrowthType: undefined,
    PercentageComplete: undefined,
    StartedAt: undefined,
    State: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ApplicationId !== undefined && data.ApplicationId !== null) {
    contents.ApplicationId = __expectString(data.ApplicationId);
  }
  if (data.AppliedExtensions !== undefined && data.AppliedExtensions !== null) {
    contents.AppliedExtensions = deserializeAws_restJson1AppliedExtensions(data.AppliedExtensions, context);
  }
  if (data.CompletedAt !== undefined && data.CompletedAt !== null) {
    contents.CompletedAt = __expectNonNull(__parseRfc3339DateTime(data.CompletedAt));
  }
  if (data.ConfigurationLocationUri !== undefined && data.ConfigurationLocationUri !== null) {
    contents.ConfigurationLocationUri = __expectString(data.ConfigurationLocationUri);
  }
  if (data.ConfigurationName !== undefined && data.ConfigurationName !== null) {
    contents.ConfigurationName = __expectString(data.ConfigurationName);
  }
  if (data.ConfigurationProfileId !== undefined && data.ConfigurationProfileId !== null) {
    contents.ConfigurationProfileId = __expectString(data.ConfigurationProfileId);
  }
  if (data.ConfigurationVersion !== undefined && data.ConfigurationVersion !== null) {
    contents.ConfigurationVersion = __expectString(data.ConfigurationVersion);
  }
  if (data.DeploymentDurationInMinutes !== undefined && data.DeploymentDurationInMinutes !== null) {
    contents.DeploymentDurationInMinutes = __expectInt32(data.DeploymentDurationInMinutes);
  }
  if (data.DeploymentNumber !== undefined && data.DeploymentNumber !== null) {
    contents.DeploymentNumber = __expectInt32(data.DeploymentNumber);
  }
  if (data.DeploymentStrategyId !== undefined && data.DeploymentStrategyId !== null) {
    contents.DeploymentStrategyId = __expectString(data.DeploymentStrategyId);
  }
  if (data.Description !== undefined && data.Description !== null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.EnvironmentId !== undefined && data.EnvironmentId !== null) {
    contents.EnvironmentId = __expectString(data.EnvironmentId);
  }
  if (data.EventLog !== undefined && data.EventLog !== null) {
    contents.EventLog = deserializeAws_restJson1DeploymentEvents(data.EventLog, context);
  }
  if (data.FinalBakeTimeInMinutes !== undefined && data.FinalBakeTimeInMinutes !== null) {
    contents.FinalBakeTimeInMinutes = __expectInt32(data.FinalBakeTimeInMinutes);
  }
  if (data.GrowthFactor !== undefined && data.GrowthFactor !== null) {
    contents.GrowthFactor = __limitedParseFloat32(data.GrowthFactor);
  }
  if (data.GrowthType !== undefined && data.GrowthType !== null) {
    contents.GrowthType = __expectString(data.GrowthType);
  }
  if (data.PercentageComplete !== undefined && data.PercentageComplete !== null) {
    contents.PercentageComplete = __limitedParseFloat32(data.PercentageComplete);
  }
  if (data.StartedAt !== undefined && data.StartedAt !== null) {
    contents.StartedAt = __expectNonNull(__parseRfc3339DateTime(data.StartedAt));
  }
  if (data.State !== undefined && data.State !== null) {
    contents.State = __expectString(data.State);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1StopDeploymentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopDeploymentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appconfig#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1TagResourceCommandError(output, context);
  }
  const contents: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appconfig#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1UntagResourceCommandError(output, context);
  }
  const contents: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appconfig#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1UpdateApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateApplicationCommandError(output, context);
  }
  const contents: UpdateApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    Description: undefined,
    Id: undefined,
    Name: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Description !== undefined && data.Description !== null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.Id !== undefined && data.Id !== null) {
    contents.Id = __expectString(data.Id);
  }
  if (data.Name !== undefined && data.Name !== null) {
    contents.Name = __expectString(data.Name);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appconfig#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1UpdateConfigurationProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConfigurationProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateConfigurationProfileCommandError(output, context);
  }
  const contents: UpdateConfigurationProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    ApplicationId: undefined,
    Description: undefined,
    Id: undefined,
    LocationUri: undefined,
    Name: undefined,
    RetrievalRoleArn: undefined,
    Type: undefined,
    Validators: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ApplicationId !== undefined && data.ApplicationId !== null) {
    contents.ApplicationId = __expectString(data.ApplicationId);
  }
  if (data.Description !== undefined && data.Description !== null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.Id !== undefined && data.Id !== null) {
    contents.Id = __expectString(data.Id);
  }
  if (data.LocationUri !== undefined && data.LocationUri !== null) {
    contents.LocationUri = __expectString(data.LocationUri);
  }
  if (data.Name !== undefined && data.Name !== null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.RetrievalRoleArn !== undefined && data.RetrievalRoleArn !== null) {
    contents.RetrievalRoleArn = __expectString(data.RetrievalRoleArn);
  }
  if (data.Type !== undefined && data.Type !== null) {
    contents.Type = __expectString(data.Type);
  }
  if (data.Validators !== undefined && data.Validators !== null) {
    contents.Validators = deserializeAws_restJson1ValidatorList(data.Validators, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateConfigurationProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConfigurationProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appconfig#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1UpdateDeploymentStrategyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDeploymentStrategyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateDeploymentStrategyCommandError(output, context);
  }
  const contents: UpdateDeploymentStrategyCommandOutput = {
    $metadata: deserializeMetadata(output),
    DeploymentDurationInMinutes: undefined,
    Description: undefined,
    FinalBakeTimeInMinutes: undefined,
    GrowthFactor: undefined,
    GrowthType: undefined,
    Id: undefined,
    Name: undefined,
    ReplicateTo: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DeploymentDurationInMinutes !== undefined && data.DeploymentDurationInMinutes !== null) {
    contents.DeploymentDurationInMinutes = __expectInt32(data.DeploymentDurationInMinutes);
  }
  if (data.Description !== undefined && data.Description !== null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.FinalBakeTimeInMinutes !== undefined && data.FinalBakeTimeInMinutes !== null) {
    contents.FinalBakeTimeInMinutes = __expectInt32(data.FinalBakeTimeInMinutes);
  }
  if (data.GrowthFactor !== undefined && data.GrowthFactor !== null) {
    contents.GrowthFactor = __limitedParseFloat32(data.GrowthFactor);
  }
  if (data.GrowthType !== undefined && data.GrowthType !== null) {
    contents.GrowthType = __expectString(data.GrowthType);
  }
  if (data.Id !== undefined && data.Id !== null) {
    contents.Id = __expectString(data.Id);
  }
  if (data.Name !== undefined && data.Name !== null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.ReplicateTo !== undefined && data.ReplicateTo !== null) {
    contents.ReplicateTo = __expectString(data.ReplicateTo);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateDeploymentStrategyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDeploymentStrategyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appconfig#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1UpdateEnvironmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEnvironmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateEnvironmentCommandError(output, context);
  }
  const contents: UpdateEnvironmentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ApplicationId: undefined,
    Description: undefined,
    Id: undefined,
    Monitors: undefined,
    Name: undefined,
    State: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ApplicationId !== undefined && data.ApplicationId !== null) {
    contents.ApplicationId = __expectString(data.ApplicationId);
  }
  if (data.Description !== undefined && data.Description !== null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.Id !== undefined && data.Id !== null) {
    contents.Id = __expectString(data.Id);
  }
  if (data.Monitors !== undefined && data.Monitors !== null) {
    contents.Monitors = deserializeAws_restJson1MonitorList(data.Monitors, context);
  }
  if (data.Name !== undefined && data.Name !== null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.State !== undefined && data.State !== null) {
    contents.State = __expectString(data.State);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateEnvironmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEnvironmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appconfig#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1UpdateExtensionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateExtensionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateExtensionCommandError(output, context);
  }
  const contents: UpdateExtensionCommandOutput = {
    $metadata: deserializeMetadata(output),
    Actions: undefined,
    Arn: undefined,
    Description: undefined,
    Id: undefined,
    Name: undefined,
    Parameters: undefined,
    VersionNumber: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Actions !== undefined && data.Actions !== null) {
    contents.Actions = deserializeAws_restJson1ActionsMap(data.Actions, context);
  }
  if (data.Arn !== undefined && data.Arn !== null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.Description !== undefined && data.Description !== null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.Id !== undefined && data.Id !== null) {
    contents.Id = __expectString(data.Id);
  }
  if (data.Name !== undefined && data.Name !== null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.Parameters !== undefined && data.Parameters !== null) {
    contents.Parameters = deserializeAws_restJson1ParameterMap(data.Parameters, context);
  }
  if (data.VersionNumber !== undefined && data.VersionNumber !== null) {
    contents.VersionNumber = __expectInt32(data.VersionNumber);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateExtensionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateExtensionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.appconfig#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appconfig#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1UpdateExtensionAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateExtensionAssociationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateExtensionAssociationCommandError(output, context);
  }
  const contents: UpdateExtensionAssociationCommandOutput = {
    $metadata: deserializeMetadata(output),
    Arn: undefined,
    ExtensionArn: undefined,
    ExtensionVersionNumber: undefined,
    Id: undefined,
    Parameters: undefined,
    ResourceArn: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn !== undefined && data.Arn !== null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.ExtensionArn !== undefined && data.ExtensionArn !== null) {
    contents.ExtensionArn = __expectString(data.ExtensionArn);
  }
  if (data.ExtensionVersionNumber !== undefined && data.ExtensionVersionNumber !== null) {
    contents.ExtensionVersionNumber = __expectInt32(data.ExtensionVersionNumber);
  }
  if (data.Id !== undefined && data.Id !== null) {
    contents.Id = __expectString(data.Id);
  }
  if (data.Parameters !== undefined && data.Parameters !== null) {
    contents.Parameters = deserializeAws_restJson1ParameterValueMap(data.Parameters, context);
  }
  if (data.ResourceArn !== undefined && data.ResourceArn !== null) {
    contents.ResourceArn = __expectString(data.ResourceArn);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateExtensionAssociationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateExtensionAssociationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appconfig#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ValidateConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ValidateConfigurationCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1ValidateConfigurationCommandError(output, context);
  }
  const contents: ValidateConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ValidateConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ValidateConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appconfig#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

const deserializeAws_restJson1BadRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BadRequestException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Details !== undefined && data.Details !== null) {
    contents.Details = deserializeAws_restJson1BadRequestDetails(__expectUnion(data.Details), context);
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.Reason !== undefined && data.Reason !== null) {
    contents.Reason = __expectString(data.Reason);
  }
  const exception = new BadRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1InternalServerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new InternalServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1PayloadTooLargeExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PayloadTooLargeException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Limit !== undefined && data.Limit !== null) {
    contents.Limit = __limitedParseFloat32(data.Limit);
  }
  if (data.Measure !== undefined && data.Measure !== null) {
    contents.Measure = __expectString(data.Measure);
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.Size !== undefined && data.Size !== null) {
    contents.Size = __limitedParseFloat32(data.Size);
  }
  const exception = new PayloadTooLargeException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.ResourceName !== undefined && data.ResourceName !== null) {
    contents.ResourceName = __expectString(data.ResourceName);
  }
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ServiceQuotaExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ServiceQuotaExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const serializeAws_restJson1Action = (input: Action, context: __SerdeContext): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
    ...(input.Uri != null && { Uri: input.Uri }),
  };
};

const serializeAws_restJson1ActionList = (input: Action[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1Action(entry, context);
    });
};

const serializeAws_restJson1ActionsMap = (input: Record<string, Action[]>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [ActionPoint | string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: serializeAws_restJson1ActionList(value, context),
    };
  }, {});
};

const serializeAws_restJson1Monitor = (input: Monitor, context: __SerdeContext): any => {
  return {
    ...(input.AlarmArn != null && { AlarmArn: input.AlarmArn }),
    ...(input.AlarmRoleArn != null && { AlarmRoleArn: input.AlarmRoleArn }),
  };
};

const serializeAws_restJson1MonitorList = (input: Monitor[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1Monitor(entry, context);
    });
};

const serializeAws_restJson1Parameter = (input: Parameter, context: __SerdeContext): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Required != null && { Required: input.Required }),
  };
};

const serializeAws_restJson1ParameterMap = (input: Record<string, Parameter>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: serializeAws_restJson1Parameter(value, context),
    };
  }, {});
};

const serializeAws_restJson1ParameterValueMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_restJson1TagMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_restJson1Validator = (input: Validator, context: __SerdeContext): any => {
  return {
    ...(input.Content != null && { Content: input.Content }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

const serializeAws_restJson1ValidatorList = (input: Validator[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1Validator(entry, context);
    });
};

const deserializeAws_restJson1Action = (output: any, context: __SerdeContext): Action => {
  return {
    Description: __expectString(output.Description),
    Name: __expectString(output.Name),
    RoleArn: __expectString(output.RoleArn),
    Uri: __expectString(output.Uri),
  } as any;
};

const deserializeAws_restJson1ActionInvocation = (output: any, context: __SerdeContext): ActionInvocation => {
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

const deserializeAws_restJson1ActionInvocations = (output: any, context: __SerdeContext): ActionInvocation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ActionInvocation(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ActionList = (output: any, context: __SerdeContext): Action[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Action(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ActionsMap = (output: any, context: __SerdeContext): Record<string, Action[]> => {
  return Object.entries(output).reduce((acc: Record<string, Action[]>, [key, value]: [ActionPoint | string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: deserializeAws_restJson1ActionList(value, context),
    };
  }, {});
};

const deserializeAws_restJson1Application = (output: any, context: __SerdeContext): Application => {
  return {
    Description: __expectString(output.Description),
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_restJson1ApplicationList = (output: any, context: __SerdeContext): Application[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Application(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AppliedExtension = (output: any, context: __SerdeContext): AppliedExtension => {
  return {
    ExtensionAssociationId: __expectString(output.ExtensionAssociationId),
    ExtensionId: __expectString(output.ExtensionId),
    Parameters:
      output.Parameters != null ? deserializeAws_restJson1ParameterValueMap(output.Parameters, context) : undefined,
    VersionNumber: __expectInt32(output.VersionNumber),
  } as any;
};

const deserializeAws_restJson1AppliedExtensions = (output: any, context: __SerdeContext): AppliedExtension[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AppliedExtension(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1BadRequestDetails = (output: any, context: __SerdeContext): BadRequestDetails => {
  if (output.InvalidConfiguration !== undefined && output.InvalidConfiguration !== null) {
    return {
      InvalidConfiguration: deserializeAws_restJson1InvalidConfigurationDetailList(
        output.InvalidConfiguration,
        context
      ),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1ConfigurationProfileSummary = (
  output: any,
  context: __SerdeContext
): ConfigurationProfileSummary => {
  return {
    ApplicationId: __expectString(output.ApplicationId),
    Id: __expectString(output.Id),
    LocationUri: __expectString(output.LocationUri),
    Name: __expectString(output.Name),
    Type: __expectString(output.Type),
    ValidatorTypes:
      output.ValidatorTypes != null
        ? deserializeAws_restJson1ValidatorTypeList(output.ValidatorTypes, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ConfigurationProfileSummaryList = (
  output: any,
  context: __SerdeContext
): ConfigurationProfileSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ConfigurationProfileSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1DeploymentEvent = (output: any, context: __SerdeContext): DeploymentEvent => {
  return {
    ActionInvocations:
      output.ActionInvocations != null
        ? deserializeAws_restJson1ActionInvocations(output.ActionInvocations, context)
        : undefined,
    Description: __expectString(output.Description),
    EventType: __expectString(output.EventType),
    OccurredAt: output.OccurredAt != null ? __expectNonNull(__parseRfc3339DateTime(output.OccurredAt)) : undefined,
    TriggeredBy: __expectString(output.TriggeredBy),
  } as any;
};

const deserializeAws_restJson1DeploymentEvents = (output: any, context: __SerdeContext): DeploymentEvent[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DeploymentEvent(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1DeploymentList = (output: any, context: __SerdeContext): DeploymentSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DeploymentSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1DeploymentStrategy = (output: any, context: __SerdeContext): DeploymentStrategy => {
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

const deserializeAws_restJson1DeploymentStrategyList = (output: any, context: __SerdeContext): DeploymentStrategy[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DeploymentStrategy(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1DeploymentSummary = (output: any, context: __SerdeContext): DeploymentSummary => {
  return {
    CompletedAt: output.CompletedAt != null ? __expectNonNull(__parseRfc3339DateTime(output.CompletedAt)) : undefined,
    ConfigurationName: __expectString(output.ConfigurationName),
    ConfigurationVersion: __expectString(output.ConfigurationVersion),
    DeploymentDurationInMinutes: __expectInt32(output.DeploymentDurationInMinutes),
    DeploymentNumber: __expectInt32(output.DeploymentNumber),
    FinalBakeTimeInMinutes: __expectInt32(output.FinalBakeTimeInMinutes),
    GrowthFactor: __limitedParseFloat32(output.GrowthFactor),
    GrowthType: __expectString(output.GrowthType),
    PercentageComplete: __limitedParseFloat32(output.PercentageComplete),
    StartedAt: output.StartedAt != null ? __expectNonNull(__parseRfc3339DateTime(output.StartedAt)) : undefined,
    State: __expectString(output.State),
  } as any;
};

const deserializeAws_restJson1Environment = (output: any, context: __SerdeContext): Environment => {
  return {
    ApplicationId: __expectString(output.ApplicationId),
    Description: __expectString(output.Description),
    Id: __expectString(output.Id),
    Monitors: output.Monitors != null ? deserializeAws_restJson1MonitorList(output.Monitors, context) : undefined,
    Name: __expectString(output.Name),
    State: __expectString(output.State),
  } as any;
};

const deserializeAws_restJson1EnvironmentList = (output: any, context: __SerdeContext): Environment[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Environment(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ExtensionAssociationSummaries = (
  output: any,
  context: __SerdeContext
): ExtensionAssociationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ExtensionAssociationSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ExtensionAssociationSummary = (
  output: any,
  context: __SerdeContext
): ExtensionAssociationSummary => {
  return {
    ExtensionArn: __expectString(output.ExtensionArn),
    Id: __expectString(output.Id),
    ResourceArn: __expectString(output.ResourceArn),
  } as any;
};

const deserializeAws_restJson1ExtensionSummaries = (output: any, context: __SerdeContext): ExtensionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ExtensionSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ExtensionSummary = (output: any, context: __SerdeContext): ExtensionSummary => {
  return {
    Arn: __expectString(output.Arn),
    Description: __expectString(output.Description),
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
    VersionNumber: __expectInt32(output.VersionNumber),
  } as any;
};

const deserializeAws_restJson1HostedConfigurationVersionSummary = (
  output: any,
  context: __SerdeContext
): HostedConfigurationVersionSummary => {
  return {
    ApplicationId: __expectString(output.ApplicationId),
    ConfigurationProfileId: __expectString(output.ConfigurationProfileId),
    ContentType: __expectString(output.ContentType),
    Description: __expectString(output.Description),
    VersionNumber: __expectInt32(output.VersionNumber),
  } as any;
};

const deserializeAws_restJson1HostedConfigurationVersionSummaryList = (
  output: any,
  context: __SerdeContext
): HostedConfigurationVersionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1HostedConfigurationVersionSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1InvalidConfigurationDetail = (
  output: any,
  context: __SerdeContext
): InvalidConfigurationDetail => {
  return {
    Constraint: __expectString(output.Constraint),
    Location: __expectString(output.Location),
    Reason: __expectString(output.Reason),
    Type: __expectString(output.Type),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_restJson1InvalidConfigurationDetailList = (
  output: any,
  context: __SerdeContext
): InvalidConfigurationDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1InvalidConfigurationDetail(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Monitor = (output: any, context: __SerdeContext): Monitor => {
  return {
    AlarmArn: __expectString(output.AlarmArn),
    AlarmRoleArn: __expectString(output.AlarmRoleArn),
  } as any;
};

const deserializeAws_restJson1MonitorList = (output: any, context: __SerdeContext): Monitor[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Monitor(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Parameter = (output: any, context: __SerdeContext): Parameter => {
  return {
    Description: __expectString(output.Description),
    Required: __expectBoolean(output.Required),
  } as any;
};

const deserializeAws_restJson1ParameterMap = (output: any, context: __SerdeContext): Record<string, Parameter> => {
  return Object.entries(output).reduce((acc: Record<string, Parameter>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: deserializeAws_restJson1Parameter(value, context),
    };
  }, {});
};

const deserializeAws_restJson1ParameterValueMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectString(value) as any,
    };
  }, {});
};

const deserializeAws_restJson1TagMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectString(value) as any,
    };
  }, {});
};

const deserializeAws_restJson1Validator = (output: any, context: __SerdeContext): Validator => {
  return {
    Content: __expectString(output.Content),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1ValidatorList = (output: any, context: __SerdeContext): Validator[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Validator(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ValidatorTypeList = (
  output: any,
  context: __SerdeContext
): (ValidatorType | string)[] => {
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
  requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"],
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

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string | undefined => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string): string => {
    let cleanValue = rawValue;
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
