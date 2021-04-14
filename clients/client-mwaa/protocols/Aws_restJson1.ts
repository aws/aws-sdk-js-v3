import { CreateCliTokenCommandInput, CreateCliTokenCommandOutput } from "../commands/CreateCliTokenCommand";
import { CreateEnvironmentCommandInput, CreateEnvironmentCommandOutput } from "../commands/CreateEnvironmentCommand";
import {
  CreateWebLoginTokenCommandInput,
  CreateWebLoginTokenCommandOutput,
} from "../commands/CreateWebLoginTokenCommand";
import { DeleteEnvironmentCommandInput, DeleteEnvironmentCommandOutput } from "../commands/DeleteEnvironmentCommand";
import { GetEnvironmentCommandInput, GetEnvironmentCommandOutput } from "../commands/GetEnvironmentCommand";
import { ListEnvironmentsCommandInput, ListEnvironmentsCommandOutput } from "../commands/ListEnvironmentsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { PublishMetricsCommandInput, PublishMetricsCommandOutput } from "../commands/PublishMetricsCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateEnvironmentCommandInput, UpdateEnvironmentCommandOutput } from "../commands/UpdateEnvironmentCommand";
import {
  AccessDeniedException,
  Dimension,
  Environment,
  InternalServerException,
  LastUpdate,
  LoggingConfiguration,
  LoggingConfigurationInput,
  MetricDatum,
  ModuleLoggingConfiguration,
  ModuleLoggingConfigurationInput,
  NetworkConfiguration,
  ResourceNotFoundException,
  StatisticSet,
  UpdateError,
  UpdateNetworkConfigurationInput,
  ValidationException,
} from "../models/models_0";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse,
  isValidHostname as __isValidHostname,
} from "@aws-sdk/protocol-http";
import {
  SmithyException as __SmithyException,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export const serializeAws_restJson1CreateCliTokenCommand = async (
  input: CreateCliTokenCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/clitoken/{Name}";
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "env." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/environments/{Name}";
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.AirflowConfigurationOptions !== undefined &&
      input.AirflowConfigurationOptions !== null && {
        AirflowConfigurationOptions: serializeAws_restJson1AirflowConfigurationOptions(
          input.AirflowConfigurationOptions,
          context
        ),
      }),
    ...(input.AirflowVersion !== undefined &&
      input.AirflowVersion !== null && { AirflowVersion: input.AirflowVersion }),
    ...(input.DagS3Path !== undefined && input.DagS3Path !== null && { DagS3Path: input.DagS3Path }),
    ...(input.EnvironmentClass !== undefined &&
      input.EnvironmentClass !== null && { EnvironmentClass: input.EnvironmentClass }),
    ...(input.ExecutionRoleArn !== undefined &&
      input.ExecutionRoleArn !== null && { ExecutionRoleArn: input.ExecutionRoleArn }),
    ...(input.KmsKey !== undefined && input.KmsKey !== null && { KmsKey: input.KmsKey }),
    ...(input.LoggingConfiguration !== undefined &&
      input.LoggingConfiguration !== null && {
        LoggingConfiguration: serializeAws_restJson1LoggingConfigurationInput(input.LoggingConfiguration, context),
      }),
    ...(input.MaxWorkers !== undefined && input.MaxWorkers !== null && { MaxWorkers: input.MaxWorkers }),
    ...(input.MinWorkers !== undefined && input.MinWorkers !== null && { MinWorkers: input.MinWorkers }),
    ...(input.NetworkConfiguration !== undefined &&
      input.NetworkConfiguration !== null && {
        NetworkConfiguration: serializeAws_restJson1NetworkConfiguration(input.NetworkConfiguration, context),
      }),
    ...(input.PluginsS3ObjectVersion !== undefined &&
      input.PluginsS3ObjectVersion !== null && { PluginsS3ObjectVersion: input.PluginsS3ObjectVersion }),
    ...(input.PluginsS3Path !== undefined && input.PluginsS3Path !== null && { PluginsS3Path: input.PluginsS3Path }),
    ...(input.RequirementsS3ObjectVersion !== undefined &&
      input.RequirementsS3ObjectVersion !== null && { RequirementsS3ObjectVersion: input.RequirementsS3ObjectVersion }),
    ...(input.RequirementsS3Path !== undefined &&
      input.RequirementsS3Path !== null && { RequirementsS3Path: input.RequirementsS3Path }),
    ...(input.SourceBucketArn !== undefined &&
      input.SourceBucketArn !== null && { SourceBucketArn: input.SourceBucketArn }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
    ...(input.WebserverAccessMode !== undefined &&
      input.WebserverAccessMode !== null && { WebserverAccessMode: input.WebserverAccessMode }),
    ...(input.WeeklyMaintenanceWindowStart !== undefined &&
      input.WeeklyMaintenanceWindowStart !== null && {
        WeeklyMaintenanceWindowStart: input.WeeklyMaintenanceWindowStart,
      }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateWebLoginTokenCommand = async (
  input: CreateWebLoginTokenCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/webtoken/{Name}";
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "env." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteEnvironmentCommand = async (
  input: DeleteEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/environments/{Name}";
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetEnvironmentCommand = async (
  input: GetEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/environments/{Name}";
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1ListEnvironmentsCommand = async (
  input: ListEnvironmentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/environments";
  const query: any = {
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults.toString() }),
  };
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
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
  const headers: any = {};
  let resolvedPath = "/tags/{ResourceArn}";
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
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1PublishMetricsCommand = async (
  input: PublishMetricsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/metrics/environments/{EnvironmentName}";
  if (input.EnvironmentName !== undefined) {
    const labelValue: string = input.EnvironmentName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: EnvironmentName.");
    }
    resolvedPath = resolvedPath.replace("{EnvironmentName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: EnvironmentName.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.MetricData !== undefined &&
      input.MetricData !== null && { MetricData: serializeAws_restJson1MetricData(input.MetricData, context) }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "ops." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/tags/{ResourceArn}";
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
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
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
  const headers: any = {};
  let resolvedPath = "/tags/{ResourceArn}";
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
    ...(input.tagKeys !== undefined && { tagKeys: (input.tagKeys || []).map((_entry) => _entry) }),
  };
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1UpdateEnvironmentCommand = async (
  input: UpdateEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/environments/{Name}";
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.AirflowConfigurationOptions !== undefined &&
      input.AirflowConfigurationOptions !== null && {
        AirflowConfigurationOptions: serializeAws_restJson1AirflowConfigurationOptions(
          input.AirflowConfigurationOptions,
          context
        ),
      }),
    ...(input.AirflowVersion !== undefined &&
      input.AirflowVersion !== null && { AirflowVersion: input.AirflowVersion }),
    ...(input.DagS3Path !== undefined && input.DagS3Path !== null && { DagS3Path: input.DagS3Path }),
    ...(input.EnvironmentClass !== undefined &&
      input.EnvironmentClass !== null && { EnvironmentClass: input.EnvironmentClass }),
    ...(input.ExecutionRoleArn !== undefined &&
      input.ExecutionRoleArn !== null && { ExecutionRoleArn: input.ExecutionRoleArn }),
    ...(input.LoggingConfiguration !== undefined &&
      input.LoggingConfiguration !== null && {
        LoggingConfiguration: serializeAws_restJson1LoggingConfigurationInput(input.LoggingConfiguration, context),
      }),
    ...(input.MaxWorkers !== undefined && input.MaxWorkers !== null && { MaxWorkers: input.MaxWorkers }),
    ...(input.MinWorkers !== undefined && input.MinWorkers !== null && { MinWorkers: input.MinWorkers }),
    ...(input.NetworkConfiguration !== undefined &&
      input.NetworkConfiguration !== null && {
        NetworkConfiguration: serializeAws_restJson1UpdateNetworkConfigurationInput(
          input.NetworkConfiguration,
          context
        ),
      }),
    ...(input.PluginsS3ObjectVersion !== undefined &&
      input.PluginsS3ObjectVersion !== null && { PluginsS3ObjectVersion: input.PluginsS3ObjectVersion }),
    ...(input.PluginsS3Path !== undefined && input.PluginsS3Path !== null && { PluginsS3Path: input.PluginsS3Path }),
    ...(input.RequirementsS3ObjectVersion !== undefined &&
      input.RequirementsS3ObjectVersion !== null && { RequirementsS3ObjectVersion: input.RequirementsS3ObjectVersion }),
    ...(input.RequirementsS3Path !== undefined &&
      input.RequirementsS3Path !== null && { RequirementsS3Path: input.RequirementsS3Path }),
    ...(input.SourceBucketArn !== undefined &&
      input.SourceBucketArn !== null && { SourceBucketArn: input.SourceBucketArn }),
    ...(input.WebserverAccessMode !== undefined &&
      input.WebserverAccessMode !== null && { WebserverAccessMode: input.WebserverAccessMode }),
    ...(input.WeeklyMaintenanceWindowStart !== undefined &&
      input.WeeklyMaintenanceWindowStart !== null && {
        WeeklyMaintenanceWindowStart: input.WeeklyMaintenanceWindowStart,
      }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

export const deserializeAws_restJson1CreateCliTokenCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCliTokenCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateCliTokenCommandError(output, context);
  }
  const contents: CreateCliTokenCommandOutput = {
    $metadata: deserializeMetadata(output),
    CliToken: undefined,
    WebServerHostname: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.CliToken !== undefined && data.CliToken !== null) {
    contents.CliToken = data.CliToken;
  }
  if (data.WebServerHostname !== undefined && data.WebServerHostname !== null) {
    contents.WebServerHostname = data.WebServerHostname;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateCliTokenCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCliTokenCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.mwaa#ResourceNotFoundException":
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

export const deserializeAws_restJson1CreateEnvironmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEnvironmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateEnvironmentCommandError(output, context);
  }
  const contents: CreateEnvironmentCommandOutput = {
    $metadata: deserializeMetadata(output),
    Arn: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.Arn !== undefined && data.Arn !== null) {
    contents.Arn = data.Arn;
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
    case "InternalServerException":
    case "com.amazonaws.mwaa#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.mwaa#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1CreateWebLoginTokenCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWebLoginTokenCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateWebLoginTokenCommandError(output, context);
  }
  const contents: CreateWebLoginTokenCommandOutput = {
    $metadata: deserializeMetadata(output),
    WebServerHostname: undefined,
    WebToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.WebServerHostname !== undefined && data.WebServerHostname !== null) {
    contents.WebServerHostname = data.WebServerHostname;
  }
  if (data.WebToken !== undefined && data.WebToken !== null) {
    contents.WebToken = data.WebToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateWebLoginTokenCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWebLoginTokenCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.mwaa#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.mwaa#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.mwaa#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.mwaa#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
  if (output.statusCode !== 200 && output.statusCode >= 300) {
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
    case "InternalServerException":
    case "com.amazonaws.mwaa#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.mwaa#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.mwaa#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
    Environment: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.Environment !== undefined && data.Environment !== null) {
    contents.Environment = deserializeAws_restJson1Environment(data.Environment, context);
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
    case "InternalServerException":
    case "com.amazonaws.mwaa#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.mwaa#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.mwaa#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
    Environments: undefined,
    NextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.Environments !== undefined && data.Environments !== null) {
    contents.Environments = deserializeAws_restJson1EnvironmentList(data.Environments, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
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
    case "InternalServerException":
    case "com.amazonaws.mwaa#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.mwaa#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
    case "InternalServerException":
    case "com.amazonaws.mwaa#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.mwaa#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.mwaa#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1PublishMetricsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PublishMetricsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PublishMetricsCommandError(output, context);
  }
  const contents: PublishMetricsCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1PublishMetricsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PublishMetricsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.mwaa#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.mwaa#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
  if (output.statusCode !== 200 && output.statusCode >= 300) {
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
    case "InternalServerException":
    case "com.amazonaws.mwaa#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.mwaa#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.mwaa#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
  if (output.statusCode !== 200 && output.statusCode >= 300) {
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
    case "InternalServerException":
    case "com.amazonaws.mwaa#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.mwaa#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.mwaa#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
    Arn: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.Arn !== undefined && data.Arn !== null) {
    contents.Arn = data.Arn;
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
    case "InternalServerException":
    case "com.amazonaws.mwaa#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.mwaa#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.mwaa#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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

const deserializeAws_restJson1AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: AccessDeniedException = {
    name: "AccessDeniedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
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
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
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
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1ValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const contents: ValidationException = {
    name: "ValidationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const serializeAws_restJson1AirflowConfigurationOptions = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_restJson1Dimension = (input: Dimension, context: __SerdeContext): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
  };
};

const serializeAws_restJson1Dimensions = (input: Dimension[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1Dimension(entry, context);
    });
};

const serializeAws_restJson1LoggingConfigurationInput = (
  input: LoggingConfigurationInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.DagProcessingLogs !== undefined &&
      input.DagProcessingLogs !== null && {
        DagProcessingLogs: serializeAws_restJson1ModuleLoggingConfigurationInput(input.DagProcessingLogs, context),
      }),
    ...(input.SchedulerLogs !== undefined &&
      input.SchedulerLogs !== null && {
        SchedulerLogs: serializeAws_restJson1ModuleLoggingConfigurationInput(input.SchedulerLogs, context),
      }),
    ...(input.TaskLogs !== undefined &&
      input.TaskLogs !== null && {
        TaskLogs: serializeAws_restJson1ModuleLoggingConfigurationInput(input.TaskLogs, context),
      }),
    ...(input.WebserverLogs !== undefined &&
      input.WebserverLogs !== null && {
        WebserverLogs: serializeAws_restJson1ModuleLoggingConfigurationInput(input.WebserverLogs, context),
      }),
    ...(input.WorkerLogs !== undefined &&
      input.WorkerLogs !== null && {
        WorkerLogs: serializeAws_restJson1ModuleLoggingConfigurationInput(input.WorkerLogs, context),
      }),
  };
};

const serializeAws_restJson1MetricData = (input: MetricDatum[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1MetricDatum(entry, context);
    });
};

const serializeAws_restJson1MetricDatum = (input: MetricDatum, context: __SerdeContext): any => {
  return {
    ...(input.Dimensions !== undefined &&
      input.Dimensions !== null && { Dimensions: serializeAws_restJson1Dimensions(input.Dimensions, context) }),
    ...(input.MetricName !== undefined && input.MetricName !== null && { MetricName: input.MetricName }),
    ...(input.StatisticValues !== undefined &&
      input.StatisticValues !== null && {
        StatisticValues: serializeAws_restJson1StatisticSet(input.StatisticValues, context),
      }),
    ...(input.Timestamp !== undefined &&
      input.Timestamp !== null && { Timestamp: Math.round(input.Timestamp.getTime() / 1000) }),
    ...(input.Unit !== undefined && input.Unit !== null && { Unit: input.Unit }),
    ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
  };
};

const serializeAws_restJson1ModuleLoggingConfigurationInput = (
  input: ModuleLoggingConfigurationInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled }),
    ...(input.LogLevel !== undefined && input.LogLevel !== null && { LogLevel: input.LogLevel }),
  };
};

const serializeAws_restJson1NetworkConfiguration = (input: NetworkConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.SecurityGroupIds !== undefined &&
      input.SecurityGroupIds !== null && {
        SecurityGroupIds: serializeAws_restJson1SecurityGroupList(input.SecurityGroupIds, context),
      }),
    ...(input.SubnetIds !== undefined &&
      input.SubnetIds !== null && { SubnetIds: serializeAws_restJson1SubnetList(input.SubnetIds, context) }),
  };
};

const serializeAws_restJson1SecurityGroupList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1StatisticSet = (input: StatisticSet, context: __SerdeContext): any => {
  return {
    ...(input.Maximum !== undefined && input.Maximum !== null && { Maximum: input.Maximum }),
    ...(input.Minimum !== undefined && input.Minimum !== null && { Minimum: input.Minimum }),
    ...(input.SampleCount !== undefined && input.SampleCount !== null && { SampleCount: input.SampleCount }),
    ...(input.Sum !== undefined && input.Sum !== null && { Sum: input.Sum }),
  };
};

const serializeAws_restJson1SubnetList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1TagMap = (input: { [key: string]: string }, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_restJson1UpdateNetworkConfigurationInput = (
  input: UpdateNetworkConfigurationInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.SecurityGroupIds !== undefined &&
      input.SecurityGroupIds !== null && {
        SecurityGroupIds: serializeAws_restJson1SecurityGroupList(input.SecurityGroupIds, context),
      }),
  };
};

const deserializeAws_restJson1AirflowConfigurationOptions = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  return Object.entries(output).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const deserializeAws_restJson1Environment = (output: any, context: __SerdeContext): Environment => {
  return {
    AirflowConfigurationOptions:
      output.AirflowConfigurationOptions !== undefined && output.AirflowConfigurationOptions !== null
        ? deserializeAws_restJson1AirflowConfigurationOptions(output.AirflowConfigurationOptions, context)
        : undefined,
    AirflowVersion:
      output.AirflowVersion !== undefined && output.AirflowVersion !== null ? output.AirflowVersion : undefined,
    Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
    CreatedAt:
      output.CreatedAt !== undefined && output.CreatedAt !== null
        ? new Date(Math.round(output.CreatedAt * 1000))
        : undefined,
    DagS3Path: output.DagS3Path !== undefined && output.DagS3Path !== null ? output.DagS3Path : undefined,
    EnvironmentClass:
      output.EnvironmentClass !== undefined && output.EnvironmentClass !== null ? output.EnvironmentClass : undefined,
    ExecutionRoleArn:
      output.ExecutionRoleArn !== undefined && output.ExecutionRoleArn !== null ? output.ExecutionRoleArn : undefined,
    KmsKey: output.KmsKey !== undefined && output.KmsKey !== null ? output.KmsKey : undefined,
    LastUpdate:
      output.LastUpdate !== undefined && output.LastUpdate !== null
        ? deserializeAws_restJson1LastUpdate(output.LastUpdate, context)
        : undefined,
    LoggingConfiguration:
      output.LoggingConfiguration !== undefined && output.LoggingConfiguration !== null
        ? deserializeAws_restJson1LoggingConfiguration(output.LoggingConfiguration, context)
        : undefined,
    MaxWorkers: output.MaxWorkers !== undefined && output.MaxWorkers !== null ? output.MaxWorkers : undefined,
    MinWorkers: output.MinWorkers !== undefined && output.MinWorkers !== null ? output.MinWorkers : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    NetworkConfiguration:
      output.NetworkConfiguration !== undefined && output.NetworkConfiguration !== null
        ? deserializeAws_restJson1NetworkConfiguration(output.NetworkConfiguration, context)
        : undefined,
    PluginsS3ObjectVersion:
      output.PluginsS3ObjectVersion !== undefined && output.PluginsS3ObjectVersion !== null
        ? output.PluginsS3ObjectVersion
        : undefined,
    PluginsS3Path:
      output.PluginsS3Path !== undefined && output.PluginsS3Path !== null ? output.PluginsS3Path : undefined,
    RequirementsS3ObjectVersion:
      output.RequirementsS3ObjectVersion !== undefined && output.RequirementsS3ObjectVersion !== null
        ? output.RequirementsS3ObjectVersion
        : undefined,
    RequirementsS3Path:
      output.RequirementsS3Path !== undefined && output.RequirementsS3Path !== null
        ? output.RequirementsS3Path
        : undefined,
    ServiceRoleArn:
      output.ServiceRoleArn !== undefined && output.ServiceRoleArn !== null ? output.ServiceRoleArn : undefined,
    SourceBucketArn:
      output.SourceBucketArn !== undefined && output.SourceBucketArn !== null ? output.SourceBucketArn : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_restJson1TagMap(output.Tags, context)
        : undefined,
    WebserverAccessMode:
      output.WebserverAccessMode !== undefined && output.WebserverAccessMode !== null
        ? output.WebserverAccessMode
        : undefined,
    WebserverUrl: output.WebserverUrl !== undefined && output.WebserverUrl !== null ? output.WebserverUrl : undefined,
    WeeklyMaintenanceWindowStart:
      output.WeeklyMaintenanceWindowStart !== undefined && output.WeeklyMaintenanceWindowStart !== null
        ? output.WeeklyMaintenanceWindowStart
        : undefined,
  } as any;
};

const deserializeAws_restJson1EnvironmentList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const deserializeAws_restJson1LastUpdate = (output: any, context: __SerdeContext): LastUpdate => {
  return {
    CreatedAt:
      output.CreatedAt !== undefined && output.CreatedAt !== null
        ? new Date(Math.round(output.CreatedAt * 1000))
        : undefined,
    Error:
      output.Error !== undefined && output.Error !== null
        ? deserializeAws_restJson1UpdateError(output.Error, context)
        : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
  } as any;
};

const deserializeAws_restJson1LoggingConfiguration = (output: any, context: __SerdeContext): LoggingConfiguration => {
  return {
    DagProcessingLogs:
      output.DagProcessingLogs !== undefined && output.DagProcessingLogs !== null
        ? deserializeAws_restJson1ModuleLoggingConfiguration(output.DagProcessingLogs, context)
        : undefined,
    SchedulerLogs:
      output.SchedulerLogs !== undefined && output.SchedulerLogs !== null
        ? deserializeAws_restJson1ModuleLoggingConfiguration(output.SchedulerLogs, context)
        : undefined,
    TaskLogs:
      output.TaskLogs !== undefined && output.TaskLogs !== null
        ? deserializeAws_restJson1ModuleLoggingConfiguration(output.TaskLogs, context)
        : undefined,
    WebserverLogs:
      output.WebserverLogs !== undefined && output.WebserverLogs !== null
        ? deserializeAws_restJson1ModuleLoggingConfiguration(output.WebserverLogs, context)
        : undefined,
    WorkerLogs:
      output.WorkerLogs !== undefined && output.WorkerLogs !== null
        ? deserializeAws_restJson1ModuleLoggingConfiguration(output.WorkerLogs, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ModuleLoggingConfiguration = (
  output: any,
  context: __SerdeContext
): ModuleLoggingConfiguration => {
  return {
    CloudWatchLogGroupArn:
      output.CloudWatchLogGroupArn !== undefined && output.CloudWatchLogGroupArn !== null
        ? output.CloudWatchLogGroupArn
        : undefined,
    Enabled: output.Enabled !== undefined && output.Enabled !== null ? output.Enabled : undefined,
    LogLevel: output.LogLevel !== undefined && output.LogLevel !== null ? output.LogLevel : undefined,
  } as any;
};

const deserializeAws_restJson1NetworkConfiguration = (output: any, context: __SerdeContext): NetworkConfiguration => {
  return {
    SecurityGroupIds:
      output.SecurityGroupIds !== undefined && output.SecurityGroupIds !== null
        ? deserializeAws_restJson1SecurityGroupList(output.SecurityGroupIds, context)
        : undefined,
    SubnetIds:
      output.SubnetIds !== undefined && output.SubnetIds !== null
        ? deserializeAws_restJson1SubnetList(output.SubnetIds, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1SecurityGroupList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const deserializeAws_restJson1SubnetList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const deserializeAws_restJson1TagMap = (output: any, context: __SerdeContext): { [key: string]: string } => {
  return Object.entries(output).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const deserializeAws_restJson1UpdateError = (output: any, context: __SerdeContext): UpdateError => {
  return {
    ErrorCode: output.ErrorCode !== undefined && output.ErrorCode !== null ? output.ErrorCode : undefined,
    ErrorMessage: output.ErrorMessage !== undefined && output.ErrorMessage !== null ? output.ErrorMessage : undefined,
  } as any;
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
