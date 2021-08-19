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
  GetHostedConfigurationVersionCommandInput,
  GetHostedConfigurationVersionCommandOutput,
} from "../commands/GetHostedConfigurationVersionCommand";
import { ListApplicationsCommandInput, ListApplicationsCommandOutput } from "../commands/ListApplicationsCommand";
import {
  ListConfigurationProfilesCommandInput,
  ListConfigurationProfilesCommandOutput,
} from "../commands/ListConfigurationProfilesCommand";
import {
  ListDeploymentStrategiesCommandInput,
  ListDeploymentStrategiesCommandOutput,
} from "../commands/ListDeploymentStrategiesCommand";
import { ListDeploymentsCommandInput, ListDeploymentsCommandOutput } from "../commands/ListDeploymentsCommand";
import { ListEnvironmentsCommandInput, ListEnvironmentsCommandOutput } from "../commands/ListEnvironmentsCommand";
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
  ValidateConfigurationCommandInput,
  ValidateConfigurationCommandOutput,
} from "../commands/ValidateConfigurationCommand";
import {
  Application,
  BadRequestException,
  ConfigurationProfileSummary,
  ConflictException,
  DeploymentEvent,
  DeploymentStrategy,
  DeploymentSummary,
  Environment,
  HostedConfigurationVersionSummary,
  InternalServerException,
  Monitor,
  PayloadTooLargeException,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  Validator,
  ValidatorType,
} from "../models/models_0";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  expectInt as __expectInt,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  limitedParseFloat as __limitedParseFloat,
  serializeFloat as __serializeFloat,
  strictParseInt as __strictParseInt,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
  SmithyException as __SmithyException,
} from "@aws-sdk/types";

export const serializeAws_restJson1CreateApplicationCommand = async (
  input: CreateApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/applications";
  let body: any;
  body = JSON.stringify({
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
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
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.LocationUri !== undefined && input.LocationUri !== null && { LocationUri: input.LocationUri }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.RetrievalRoleArn !== undefined &&
      input.RetrievalRoleArn !== null && { RetrievalRoleArn: input.RetrievalRoleArn }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
    ...(input.Validators !== undefined &&
      input.Validators !== null && { Validators: serializeAws_restJson1ValidatorList(input.Validators, context) }),
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/deploymentstrategies";
  let body: any;
  body = JSON.stringify({
    ...(input.DeploymentDurationInMinutes !== undefined &&
      input.DeploymentDurationInMinutes !== null && { DeploymentDurationInMinutes: input.DeploymentDurationInMinutes }),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.FinalBakeTimeInMinutes !== undefined &&
      input.FinalBakeTimeInMinutes !== null && { FinalBakeTimeInMinutes: input.FinalBakeTimeInMinutes }),
    ...(input.GrowthFactor !== undefined &&
      input.GrowthFactor !== null && { GrowthFactor: __serializeFloat(input.GrowthFactor) }),
    ...(input.GrowthType !== undefined && input.GrowthType !== null && { GrowthType: input.GrowthType }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.ReplicateTo !== undefined && input.ReplicateTo !== null && { ReplicateTo: input.ReplicateTo }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
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
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.Monitors !== undefined &&
      input.Monitors !== null && { Monitors: serializeAws_restJson1MonitorList(input.Monitors, context) }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/applications";
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/deploymentstrategies";
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
    ...(input.ConfigurationProfileId !== undefined &&
      input.ConfigurationProfileId !== null && { ConfigurationProfileId: input.ConfigurationProfileId }),
    ...(input.ConfigurationVersion !== undefined &&
      input.ConfigurationVersion !== null && { ConfigurationVersion: input.ConfigurationVersion }),
    ...(input.DeploymentStrategyId !== undefined &&
      input.DeploymentStrategyId !== null && { DeploymentStrategyId: input.DeploymentStrategyId }),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
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
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
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
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
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
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.RetrievalRoleArn !== undefined &&
      input.RetrievalRoleArn !== null && { RetrievalRoleArn: input.RetrievalRoleArn }),
    ...(input.Validators !== undefined &&
      input.Validators !== null && { Validators: serializeAws_restJson1ValidatorList(input.Validators, context) }),
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
    ...(input.DeploymentDurationInMinutes !== undefined &&
      input.DeploymentDurationInMinutes !== null && { DeploymentDurationInMinutes: input.DeploymentDurationInMinutes }),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.FinalBakeTimeInMinutes !== undefined &&
      input.FinalBakeTimeInMinutes !== null && { FinalBakeTimeInMinutes: input.FinalBakeTimeInMinutes }),
    ...(input.GrowthFactor !== undefined &&
      input.GrowthFactor !== null && { GrowthFactor: __serializeFloat(input.GrowthFactor) }),
    ...(input.GrowthType !== undefined && input.GrowthType !== null && { GrowthType: input.GrowthType }),
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
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.Monitors !== undefined &&
      input.Monitors !== null && { Monitors: serializeAws_restJson1MonitorList(input.Monitors, context) }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
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
  const data: any = await parseBody(output.body, context);
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    Validators: undefined,
  };
  const data: any = await parseBody(output.body, context);
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appconfig#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
  const data: any = await parseBody(output.body, context);
  if (data.DeploymentDurationInMinutes !== undefined && data.DeploymentDurationInMinutes !== null) {
    contents.DeploymentDurationInMinutes = __expectInt(data.DeploymentDurationInMinutes);
  }
  if (data.Description !== undefined && data.Description !== null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.FinalBakeTimeInMinutes !== undefined && data.FinalBakeTimeInMinutes !== null) {
    contents.FinalBakeTimeInMinutes = __expectInt(data.FinalBakeTimeInMinutes);
  }
  if (data.GrowthFactor !== undefined && data.GrowthFactor !== null) {
    contents.GrowthFactor = __limitedParseFloat(data.GrowthFactor);
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
  const data: any = await parseBody(output.body, context);
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appconfig#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    contents.VersionNumber = __strictParseInt(output.headers["version-number"]);
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.appconfig#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.appconfig#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appconfig#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.appconfig#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appconfig#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.appconfig#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appconfig#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appconfig#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.appconfig#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appconfig#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appconfig#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
  const data: any = await parseBody(output.body, context);
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appconfig#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appconfig#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    Validators: undefined,
  };
  const data: any = await parseBody(output.body, context);
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appconfig#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
  const data: any = await parseBody(output.body, context);
  if (data.ApplicationId !== undefined && data.ApplicationId !== null) {
    contents.ApplicationId = __expectString(data.ApplicationId);
  }
  if (data.CompletedAt !== undefined && data.CompletedAt !== null) {
    contents.CompletedAt = new Date(data.CompletedAt);
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
    contents.DeploymentDurationInMinutes = __expectInt(data.DeploymentDurationInMinutes);
  }
  if (data.DeploymentNumber !== undefined && data.DeploymentNumber !== null) {
    contents.DeploymentNumber = __expectInt(data.DeploymentNumber);
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
    contents.FinalBakeTimeInMinutes = __expectInt(data.FinalBakeTimeInMinutes);
  }
  if (data.GrowthFactor !== undefined && data.GrowthFactor !== null) {
    contents.GrowthFactor = __limitedParseFloat(data.GrowthFactor);
  }
  if (data.GrowthType !== undefined && data.GrowthType !== null) {
    contents.GrowthType = __expectString(data.GrowthType);
  }
  if (data.PercentageComplete !== undefined && data.PercentageComplete !== null) {
    contents.PercentageComplete = __limitedParseFloat(data.PercentageComplete);
  }
  if (data.StartedAt !== undefined && data.StartedAt !== null) {
    contents.StartedAt = new Date(data.StartedAt);
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appconfig#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
  const data: any = await parseBody(output.body, context);
  if (data.DeploymentDurationInMinutes !== undefined && data.DeploymentDurationInMinutes !== null) {
    contents.DeploymentDurationInMinutes = __expectInt(data.DeploymentDurationInMinutes);
  }
  if (data.Description !== undefined && data.Description !== null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.FinalBakeTimeInMinutes !== undefined && data.FinalBakeTimeInMinutes !== null) {
    contents.FinalBakeTimeInMinutes = __expectInt(data.FinalBakeTimeInMinutes);
  }
  if (data.GrowthFactor !== undefined && data.GrowthFactor !== null) {
    contents.GrowthFactor = __limitedParseFloat(data.GrowthFactor);
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appconfig#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
  const data: any = await parseBody(output.body, context);
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appconfig#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    contents.VersionNumber = __strictParseInt(output.headers["version-number"]);
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appconfig#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
  const data: any = await parseBody(output.body, context);
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
  const data: any = await parseBody(output.body, context);
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appconfig#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
  const data: any = await parseBody(output.body, context);
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appconfig#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
  const data: any = await parseBody(output.body, context);
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
  const data: any = await parseBody(output.body, context);
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appconfig#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
  const data: any = await parseBody(output.body, context);
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appconfig#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
  const data: any = await parseBody(output.body, context);
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appconfig#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
  const data: any = await parseBody(output.body, context);
  if (data.ApplicationId !== undefined && data.ApplicationId !== null) {
    contents.ApplicationId = __expectString(data.ApplicationId);
  }
  if (data.CompletedAt !== undefined && data.CompletedAt !== null) {
    contents.CompletedAt = new Date(data.CompletedAt);
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
    contents.DeploymentDurationInMinutes = __expectInt(data.DeploymentDurationInMinutes);
  }
  if (data.DeploymentNumber !== undefined && data.DeploymentNumber !== null) {
    contents.DeploymentNumber = __expectInt(data.DeploymentNumber);
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
    contents.FinalBakeTimeInMinutes = __expectInt(data.FinalBakeTimeInMinutes);
  }
  if (data.GrowthFactor !== undefined && data.GrowthFactor !== null) {
    contents.GrowthFactor = __limitedParseFloat(data.GrowthFactor);
  }
  if (data.GrowthType !== undefined && data.GrowthType !== null) {
    contents.GrowthType = __expectString(data.GrowthType);
  }
  if (data.PercentageComplete !== undefined && data.PercentageComplete !== null) {
    contents.PercentageComplete = __limitedParseFloat(data.PercentageComplete);
  }
  if (data.StartedAt !== undefined && data.StartedAt !== null) {
    contents.StartedAt = new Date(data.StartedAt);
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.appconfig#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appconfig#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
  const data: any = await parseBody(output.body, context);
  if (data.ApplicationId !== undefined && data.ApplicationId !== null) {
    contents.ApplicationId = __expectString(data.ApplicationId);
  }
  if (data.CompletedAt !== undefined && data.CompletedAt !== null) {
    contents.CompletedAt = new Date(data.CompletedAt);
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
    contents.DeploymentDurationInMinutes = __expectInt(data.DeploymentDurationInMinutes);
  }
  if (data.DeploymentNumber !== undefined && data.DeploymentNumber !== null) {
    contents.DeploymentNumber = __expectInt(data.DeploymentNumber);
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
    contents.FinalBakeTimeInMinutes = __expectInt(data.FinalBakeTimeInMinutes);
  }
  if (data.GrowthFactor !== undefined && data.GrowthFactor !== null) {
    contents.GrowthFactor = __limitedParseFloat(data.GrowthFactor);
  }
  if (data.GrowthType !== undefined && data.GrowthType !== null) {
    contents.GrowthType = __expectString(data.GrowthType);
  }
  if (data.PercentageComplete !== undefined && data.PercentageComplete !== null) {
    contents.PercentageComplete = __limitedParseFloat(data.PercentageComplete);
  }
  if (data.StartedAt !== undefined && data.StartedAt !== null) {
    contents.StartedAt = new Date(data.StartedAt);
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appconfig#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appconfig#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appconfig#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
  const data: any = await parseBody(output.body, context);
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appconfig#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    Validators: undefined,
  };
  const data: any = await parseBody(output.body, context);
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appconfig#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
  const data: any = await parseBody(output.body, context);
  if (data.DeploymentDurationInMinutes !== undefined && data.DeploymentDurationInMinutes !== null) {
    contents.DeploymentDurationInMinutes = __expectInt(data.DeploymentDurationInMinutes);
  }
  if (data.Description !== undefined && data.Description !== null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.FinalBakeTimeInMinutes !== undefined && data.FinalBakeTimeInMinutes !== null) {
    contents.FinalBakeTimeInMinutes = __expectInt(data.FinalBakeTimeInMinutes);
  }
  if (data.GrowthFactor !== undefined && data.GrowthFactor !== null) {
    contents.GrowthFactor = __limitedParseFloat(data.GrowthFactor);
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appconfig#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
  const data: any = await parseBody(output.body, context);
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appconfig#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appconfig#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

const deserializeAws_restJson1BadRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BadRequestException> => {
  const contents: BadRequestException = {
    name: "BadRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  return contents;
};

const deserializeAws_restJson1ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
  const contents: ConflictException = {
    name: "ConflictException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  return contents;
};

const deserializeAws_restJson1InternalServerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: InternalServerException = {
    name: "InternalServerException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  return contents;
};

const deserializeAws_restJson1PayloadTooLargeExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PayloadTooLargeException> => {
  const contents: PayloadTooLargeException = {
    name: "PayloadTooLargeException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Limit: undefined,
    Measure: undefined,
    Message: undefined,
    Size: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Limit !== undefined && data.Limit !== null) {
    contents.Limit = __limitedParseFloat(data.Limit);
  }
  if (data.Measure !== undefined && data.Measure !== null) {
    contents.Measure = __expectString(data.Measure);
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.Size !== undefined && data.Size !== null) {
    contents.Size = __limitedParseFloat(data.Size);
  }
  return contents;
};

const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
    ResourceName: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.ResourceName !== undefined && data.ResourceName !== null) {
    contents.ResourceName = __expectString(data.ResourceName);
  }
  return contents;
};

const deserializeAws_restJson1ServiceQuotaExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const contents: ServiceQuotaExceededException = {
    name: "ServiceQuotaExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  return contents;
};

const serializeAws_restJson1Monitor = (input: Monitor, context: __SerdeContext): any => {
  return {
    ...(input.AlarmArn !== undefined && input.AlarmArn !== null && { AlarmArn: input.AlarmArn }),
    ...(input.AlarmRoleArn !== undefined && input.AlarmRoleArn !== null && { AlarmRoleArn: input.AlarmRoleArn }),
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

const serializeAws_restJson1TagMap = (input: { [key: string]: string }, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: { [key: string]: any }, [key, value]: [string, any]) => {
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
    ...(input.Content !== undefined && input.Content !== null && { Content: input.Content }),
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
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

const deserializeAws_restJson1Application = (output: any, context: __SerdeContext): Application => {
  return {
    Description: __expectString(output.Description),
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_restJson1ApplicationList = (output: any, context: __SerdeContext): Application[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Application(entry, context);
    });
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
    ValidatorTypes:
      output.ValidatorTypes !== undefined && output.ValidatorTypes !== null
        ? deserializeAws_restJson1ValidatorTypeList(output.ValidatorTypes, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ConfigurationProfileSummaryList = (
  output: any,
  context: __SerdeContext
): ConfigurationProfileSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ConfigurationProfileSummary(entry, context);
    });
};

const deserializeAws_restJson1DeploymentEvent = (output: any, context: __SerdeContext): DeploymentEvent => {
  return {
    Description: __expectString(output.Description),
    EventType: __expectString(output.EventType),
    OccurredAt: output.OccurredAt !== undefined && output.OccurredAt !== null ? new Date(output.OccurredAt) : undefined,
    TriggeredBy: __expectString(output.TriggeredBy),
  } as any;
};

const deserializeAws_restJson1DeploymentEvents = (output: any, context: __SerdeContext): DeploymentEvent[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DeploymentEvent(entry, context);
    });
};

const deserializeAws_restJson1DeploymentList = (output: any, context: __SerdeContext): DeploymentSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DeploymentSummary(entry, context);
    });
};

const deserializeAws_restJson1DeploymentStrategy = (output: any, context: __SerdeContext): DeploymentStrategy => {
  return {
    DeploymentDurationInMinutes: __expectInt(output.DeploymentDurationInMinutes),
    Description: __expectString(output.Description),
    FinalBakeTimeInMinutes: __expectInt(output.FinalBakeTimeInMinutes),
    GrowthFactor: __limitedParseFloat(output.GrowthFactor),
    GrowthType: __expectString(output.GrowthType),
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
    ReplicateTo: __expectString(output.ReplicateTo),
  } as any;
};

const deserializeAws_restJson1DeploymentStrategyList = (output: any, context: __SerdeContext): DeploymentStrategy[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DeploymentStrategy(entry, context);
    });
};

const deserializeAws_restJson1DeploymentSummary = (output: any, context: __SerdeContext): DeploymentSummary => {
  return {
    CompletedAt:
      output.CompletedAt !== undefined && output.CompletedAt !== null ? new Date(output.CompletedAt) : undefined,
    ConfigurationName: __expectString(output.ConfigurationName),
    ConfigurationVersion: __expectString(output.ConfigurationVersion),
    DeploymentDurationInMinutes: __expectInt(output.DeploymentDurationInMinutes),
    DeploymentNumber: __expectInt(output.DeploymentNumber),
    FinalBakeTimeInMinutes: __expectInt(output.FinalBakeTimeInMinutes),
    GrowthFactor: __limitedParseFloat(output.GrowthFactor),
    GrowthType: __expectString(output.GrowthType),
    PercentageComplete: __limitedParseFloat(output.PercentageComplete),
    StartedAt: output.StartedAt !== undefined && output.StartedAt !== null ? new Date(output.StartedAt) : undefined,
    State: __expectString(output.State),
  } as any;
};

const deserializeAws_restJson1Environment = (output: any, context: __SerdeContext): Environment => {
  return {
    ApplicationId: __expectString(output.ApplicationId),
    Description: __expectString(output.Description),
    Id: __expectString(output.Id),
    Monitors:
      output.Monitors !== undefined && output.Monitors !== null
        ? deserializeAws_restJson1MonitorList(output.Monitors, context)
        : undefined,
    Name: __expectString(output.Name),
    State: __expectString(output.State),
  } as any;
};

const deserializeAws_restJson1EnvironmentList = (output: any, context: __SerdeContext): Environment[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Environment(entry, context);
    });
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
    VersionNumber: __expectInt(output.VersionNumber),
  } as any;
};

const deserializeAws_restJson1HostedConfigurationVersionSummaryList = (
  output: any,
  context: __SerdeContext
): HostedConfigurationVersionSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1HostedConfigurationVersionSummary(entry, context);
    });
};

const deserializeAws_restJson1Monitor = (output: any, context: __SerdeContext): Monitor => {
  return {
    AlarmArn: __expectString(output.AlarmArn),
    AlarmRoleArn: __expectString(output.AlarmRoleArn),
  } as any;
};

const deserializeAws_restJson1MonitorList = (output: any, context: __SerdeContext): Monitor[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Monitor(entry, context);
    });
};

const deserializeAws_restJson1TagMap = (output: any, context: __SerdeContext): { [key: string]: string } => {
  return Object.entries(output).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
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
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Validator(entry, context);
    });
};

const deserializeAws_restJson1ValidatorTypeList = (
  output: any,
  context: __SerdeContext
): (ValidatorType | string)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
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
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string => {
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

  return "";
};
