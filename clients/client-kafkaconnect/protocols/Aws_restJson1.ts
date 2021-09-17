import { CreateConnectorCommandInput, CreateConnectorCommandOutput } from "../commands/CreateConnectorCommand";
import { CreateCustomPluginCommandInput, CreateCustomPluginCommandOutput } from "../commands/CreateCustomPluginCommand";
import {
  CreateWorkerConfigurationCommandInput,
  CreateWorkerConfigurationCommandOutput,
} from "../commands/CreateWorkerConfigurationCommand";
import { DeleteConnectorCommandInput, DeleteConnectorCommandOutput } from "../commands/DeleteConnectorCommand";
import { DescribeConnectorCommandInput, DescribeConnectorCommandOutput } from "../commands/DescribeConnectorCommand";
import {
  DescribeCustomPluginCommandInput,
  DescribeCustomPluginCommandOutput,
} from "../commands/DescribeCustomPluginCommand";
import {
  DescribeWorkerConfigurationCommandInput,
  DescribeWorkerConfigurationCommandOutput,
} from "../commands/DescribeWorkerConfigurationCommand";
import { ListConnectorsCommandInput, ListConnectorsCommandOutput } from "../commands/ListConnectorsCommand";
import { ListCustomPluginsCommandInput, ListCustomPluginsCommandOutput } from "../commands/ListCustomPluginsCommand";
import {
  ListWorkerConfigurationsCommandInput,
  ListWorkerConfigurationsCommandOutput,
} from "../commands/ListWorkerConfigurationsCommand";
import { UpdateConnectorCommandInput, UpdateConnectorCommandOutput } from "../commands/UpdateConnectorCommand";
import {
  ApacheKafkaCluster,
  ApacheKafkaClusterDescription,
  AutoScaling,
  AutoScalingDescription,
  AutoScalingUpdate,
  BadRequestException,
  Capacity,
  CapacityDescription,
  CapacityUpdate,
  CloudWatchLogsLogDelivery,
  CloudWatchLogsLogDeliveryDescription,
  ConflictException,
  ConnectorSummary,
  CustomPlugin,
  CustomPluginDescription,
  CustomPluginFileDescription,
  CustomPluginLocation,
  CustomPluginLocationDescription,
  CustomPluginRevisionSummary,
  CustomPluginSummary,
  FirehoseLogDelivery,
  FirehoseLogDeliveryDescription,
  ForbiddenException,
  InternalServerErrorException,
  KafkaCluster,
  KafkaClusterClientAuthentication,
  KafkaClusterClientAuthenticationDescription,
  KafkaClusterDescription,
  KafkaClusterEncryptionInTransit,
  KafkaClusterEncryptionInTransitDescription,
  LogDelivery,
  LogDeliveryDescription,
  NotFoundException,
  Plugin,
  PluginDescription,
  ProvisionedCapacity,
  ProvisionedCapacityDescription,
  ProvisionedCapacityUpdate,
  S3Location,
  S3LocationDescription,
  S3LogDelivery,
  S3LogDeliveryDescription,
  ScaleInPolicy,
  ScaleInPolicyDescription,
  ScaleInPolicyUpdate,
  ScaleOutPolicy,
  ScaleOutPolicyDescription,
  ScaleOutPolicyUpdate,
  ServiceUnavailableException,
  TooManyRequestsException,
  UnauthorizedException,
  Vpc,
  VpcDescription,
  WorkerConfiguration,
  WorkerConfigurationDescription,
  WorkerConfigurationRevisionDescription,
  WorkerConfigurationRevisionSummary,
  WorkerConfigurationSummary,
  WorkerLogDelivery,
  WorkerLogDeliveryDescription,
} from "../models/models_0";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  parseRfc3339DateTime as __parseRfc3339DateTime,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
  SmithyException as __SmithyException,
} from "@aws-sdk/types";

export const serializeAws_restJson1CreateConnectorCommand = async (
  input: CreateConnectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/connectors";
  let body: any;
  body = JSON.stringify({
    ...(input.capacity !== undefined &&
      input.capacity !== null && { capacity: serializeAws_restJson1Capacity(input.capacity, context) }),
    ...(input.connectorConfiguration !== undefined &&
      input.connectorConfiguration !== null && {
        connectorConfiguration: serializeAws_restJson1__mapOf__string(input.connectorConfiguration, context),
      }),
    ...(input.connectorDescription !== undefined &&
      input.connectorDescription !== null && { connectorDescription: input.connectorDescription }),
    ...(input.connectorName !== undefined && input.connectorName !== null && { connectorName: input.connectorName }),
    ...(input.kafkaCluster !== undefined &&
      input.kafkaCluster !== null && { kafkaCluster: serializeAws_restJson1KafkaCluster(input.kafkaCluster, context) }),
    ...(input.kafkaClusterClientAuthentication !== undefined &&
      input.kafkaClusterClientAuthentication !== null && {
        kafkaClusterClientAuthentication: serializeAws_restJson1KafkaClusterClientAuthentication(
          input.kafkaClusterClientAuthentication,
          context
        ),
      }),
    ...(input.kafkaClusterEncryptionInTransit !== undefined &&
      input.kafkaClusterEncryptionInTransit !== null && {
        kafkaClusterEncryptionInTransit: serializeAws_restJson1KafkaClusterEncryptionInTransit(
          input.kafkaClusterEncryptionInTransit,
          context
        ),
      }),
    ...(input.kafkaConnectVersion !== undefined &&
      input.kafkaConnectVersion !== null && { kafkaConnectVersion: input.kafkaConnectVersion }),
    ...(input.logDelivery !== undefined &&
      input.logDelivery !== null && { logDelivery: serializeAws_restJson1LogDelivery(input.logDelivery, context) }),
    ...(input.plugins !== undefined &&
      input.plugins !== null && { plugins: serializeAws_restJson1__listOfPlugin(input.plugins, context) }),
    ...(input.serviceExecutionRoleArn !== undefined &&
      input.serviceExecutionRoleArn !== null && { serviceExecutionRoleArn: input.serviceExecutionRoleArn }),
    ...(input.workerConfiguration !== undefined &&
      input.workerConfiguration !== null && {
        workerConfiguration: serializeAws_restJson1WorkerConfiguration(input.workerConfiguration, context),
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

export const serializeAws_restJson1CreateCustomPluginCommand = async (
  input: CreateCustomPluginCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/custom-plugins";
  let body: any;
  body = JSON.stringify({
    ...(input.contentType !== undefined && input.contentType !== null && { contentType: input.contentType }),
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.location !== undefined &&
      input.location !== null && { location: serializeAws_restJson1CustomPluginLocation(input.location, context) }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
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

export const serializeAws_restJson1CreateWorkerConfigurationCommand = async (
  input: CreateWorkerConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/worker-configurations";
  let body: any;
  body = JSON.stringify({
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.propertiesFileContent !== undefined &&
      input.propertiesFileContent !== null && { propertiesFileContent: input.propertiesFileContent }),
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

export const serializeAws_restJson1DeleteConnectorCommand = async (
  input: DeleteConnectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/connectors/{connectorArn}";
  if (input.connectorArn !== undefined) {
    const labelValue: string = input.connectorArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: connectorArn.");
    }
    resolvedPath = resolvedPath.replace("{connectorArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: connectorArn.");
  }
  const query: any = {
    ...(input.currentVersion !== undefined && { currentVersion: input.currentVersion }),
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

export const serializeAws_restJson1DescribeConnectorCommand = async (
  input: DescribeConnectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/connectors/{connectorArn}";
  if (input.connectorArn !== undefined) {
    const labelValue: string = input.connectorArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: connectorArn.");
    }
    resolvedPath = resolvedPath.replace("{connectorArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: connectorArn.");
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

export const serializeAws_restJson1DescribeCustomPluginCommand = async (
  input: DescribeCustomPluginCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/custom-plugins/{customPluginArn}";
  if (input.customPluginArn !== undefined) {
    const labelValue: string = input.customPluginArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: customPluginArn.");
    }
    resolvedPath = resolvedPath.replace("{customPluginArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: customPluginArn.");
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

export const serializeAws_restJson1DescribeWorkerConfigurationCommand = async (
  input: DescribeWorkerConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/worker-configurations/{workerConfigurationArn}";
  if (input.workerConfigurationArn !== undefined) {
    const labelValue: string = input.workerConfigurationArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: workerConfigurationArn.");
    }
    resolvedPath = resolvedPath.replace("{workerConfigurationArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: workerConfigurationArn.");
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

export const serializeAws_restJson1ListConnectorsCommand = async (
  input: ListConnectorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/connectors";
  const query: any = {
    ...(input.connectorNamePrefix !== undefined && { connectorNamePrefix: input.connectorNamePrefix }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
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

export const serializeAws_restJson1ListCustomPluginsCommand = async (
  input: ListCustomPluginsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/custom-plugins";
  const query: any = {
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
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

export const serializeAws_restJson1ListWorkerConfigurationsCommand = async (
  input: ListWorkerConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/worker-configurations";
  const query: any = {
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
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

export const serializeAws_restJson1UpdateConnectorCommand = async (
  input: UpdateConnectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/connectors/{connectorArn}";
  if (input.connectorArn !== undefined) {
    const labelValue: string = input.connectorArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: connectorArn.");
    }
    resolvedPath = resolvedPath.replace("{connectorArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: connectorArn.");
  }
  const query: any = {
    ...(input.currentVersion !== undefined && { currentVersion: input.currentVersion }),
  };
  let body: any;
  body = JSON.stringify({
    ...(input.capacity !== undefined &&
      input.capacity !== null && { capacity: serializeAws_restJson1CapacityUpdate(input.capacity, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const deserializeAws_restJson1CreateConnectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConnectorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateConnectorCommandError(output, context);
  }
  const contents: CreateConnectorCommandOutput = {
    $metadata: deserializeMetadata(output),
    connectorArn: undefined,
    connectorName: undefined,
    connectorState: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.connectorArn !== undefined && data.connectorArn !== null) {
    contents.connectorArn = __expectString(data.connectorArn);
  }
  if (data.connectorName !== undefined && data.connectorName !== null) {
    contents.connectorName = __expectString(data.connectorName);
  }
  if (data.connectorState !== undefined && data.connectorState !== null) {
    contents.connectorState = __expectString(data.connectorState);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateConnectorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConnectorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.kafkaconnect#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.kafkaconnect#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.kafkaconnect#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.kafkaconnect#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.kafkaconnect#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.kafkaconnect#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.kafkaconnect#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.kafkaconnect#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1CreateCustomPluginCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCustomPluginCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateCustomPluginCommandError(output, context);
  }
  const contents: CreateCustomPluginCommandOutput = {
    $metadata: deserializeMetadata(output),
    customPluginArn: undefined,
    customPluginState: undefined,
    name: undefined,
    revision: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.customPluginArn !== undefined && data.customPluginArn !== null) {
    contents.customPluginArn = __expectString(data.customPluginArn);
  }
  if (data.customPluginState !== undefined && data.customPluginState !== null) {
    contents.customPluginState = __expectString(data.customPluginState);
  }
  if (data.name !== undefined && data.name !== null) {
    contents.name = __expectString(data.name);
  }
  if (data.revision !== undefined && data.revision !== null) {
    contents.revision = __expectLong(data.revision);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateCustomPluginCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCustomPluginCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.kafkaconnect#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.kafkaconnect#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.kafkaconnect#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.kafkaconnect#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.kafkaconnect#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.kafkaconnect#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.kafkaconnect#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.kafkaconnect#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1CreateWorkerConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorkerConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateWorkerConfigurationCommandError(output, context);
  }
  const contents: CreateWorkerConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    creationTime: undefined,
    latestRevision: undefined,
    name: undefined,
    workerConfigurationArn: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.creationTime !== undefined && data.creationTime !== null) {
    contents.creationTime = __expectNonNull(__parseRfc3339DateTime(data.creationTime));
  }
  if (data.latestRevision !== undefined && data.latestRevision !== null) {
    contents.latestRevision = deserializeAws_restJson1WorkerConfigurationRevisionSummary(data.latestRevision, context);
  }
  if (data.name !== undefined && data.name !== null) {
    contents.name = __expectString(data.name);
  }
  if (data.workerConfigurationArn !== undefined && data.workerConfigurationArn !== null) {
    contents.workerConfigurationArn = __expectString(data.workerConfigurationArn);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateWorkerConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorkerConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.kafkaconnect#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.kafkaconnect#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.kafkaconnect#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.kafkaconnect#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.kafkaconnect#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.kafkaconnect#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.kafkaconnect#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.kafkaconnect#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1DeleteConnectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConnectorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteConnectorCommandError(output, context);
  }
  const contents: DeleteConnectorCommandOutput = {
    $metadata: deserializeMetadata(output),
    connectorArn: undefined,
    connectorState: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.connectorArn !== undefined && data.connectorArn !== null) {
    contents.connectorArn = __expectString(data.connectorArn);
  }
  if (data.connectorState !== undefined && data.connectorState !== null) {
    contents.connectorState = __expectString(data.connectorState);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteConnectorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConnectorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.kafkaconnect#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.kafkaconnect#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.kafkaconnect#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.kafkaconnect#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.kafkaconnect#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.kafkaconnect#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.kafkaconnect#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1DescribeConnectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConnectorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeConnectorCommandError(output, context);
  }
  const contents: DescribeConnectorCommandOutput = {
    $metadata: deserializeMetadata(output),
    capacity: undefined,
    connectorArn: undefined,
    connectorConfiguration: undefined,
    connectorDescription: undefined,
    connectorName: undefined,
    connectorState: undefined,
    creationTime: undefined,
    currentVersion: undefined,
    kafkaCluster: undefined,
    kafkaClusterClientAuthentication: undefined,
    kafkaClusterEncryptionInTransit: undefined,
    kafkaConnectVersion: undefined,
    logDelivery: undefined,
    plugins: undefined,
    serviceExecutionRoleArn: undefined,
    workerConfiguration: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.capacity !== undefined && data.capacity !== null) {
    contents.capacity = deserializeAws_restJson1CapacityDescription(data.capacity, context);
  }
  if (data.connectorArn !== undefined && data.connectorArn !== null) {
    contents.connectorArn = __expectString(data.connectorArn);
  }
  if (data.connectorConfiguration !== undefined && data.connectorConfiguration !== null) {
    contents.connectorConfiguration = deserializeAws_restJson1__mapOf__string(data.connectorConfiguration, context);
  }
  if (data.connectorDescription !== undefined && data.connectorDescription !== null) {
    contents.connectorDescription = __expectString(data.connectorDescription);
  }
  if (data.connectorName !== undefined && data.connectorName !== null) {
    contents.connectorName = __expectString(data.connectorName);
  }
  if (data.connectorState !== undefined && data.connectorState !== null) {
    contents.connectorState = __expectString(data.connectorState);
  }
  if (data.creationTime !== undefined && data.creationTime !== null) {
    contents.creationTime = __expectNonNull(__parseRfc3339DateTime(data.creationTime));
  }
  if (data.currentVersion !== undefined && data.currentVersion !== null) {
    contents.currentVersion = __expectString(data.currentVersion);
  }
  if (data.kafkaCluster !== undefined && data.kafkaCluster !== null) {
    contents.kafkaCluster = deserializeAws_restJson1KafkaClusterDescription(data.kafkaCluster, context);
  }
  if (data.kafkaClusterClientAuthentication !== undefined && data.kafkaClusterClientAuthentication !== null) {
    contents.kafkaClusterClientAuthentication = deserializeAws_restJson1KafkaClusterClientAuthenticationDescription(
      data.kafkaClusterClientAuthentication,
      context
    );
  }
  if (data.kafkaClusterEncryptionInTransit !== undefined && data.kafkaClusterEncryptionInTransit !== null) {
    contents.kafkaClusterEncryptionInTransit = deserializeAws_restJson1KafkaClusterEncryptionInTransitDescription(
      data.kafkaClusterEncryptionInTransit,
      context
    );
  }
  if (data.kafkaConnectVersion !== undefined && data.kafkaConnectVersion !== null) {
    contents.kafkaConnectVersion = __expectString(data.kafkaConnectVersion);
  }
  if (data.logDelivery !== undefined && data.logDelivery !== null) {
    contents.logDelivery = deserializeAws_restJson1LogDeliveryDescription(data.logDelivery, context);
  }
  if (data.plugins !== undefined && data.plugins !== null) {
    contents.plugins = deserializeAws_restJson1__listOfPluginDescription(data.plugins, context);
  }
  if (data.serviceExecutionRoleArn !== undefined && data.serviceExecutionRoleArn !== null) {
    contents.serviceExecutionRoleArn = __expectString(data.serviceExecutionRoleArn);
  }
  if (data.workerConfiguration !== undefined && data.workerConfiguration !== null) {
    contents.workerConfiguration = deserializeAws_restJson1WorkerConfigurationDescription(
      data.workerConfiguration,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeConnectorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConnectorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.kafkaconnect#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.kafkaconnect#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.kafkaconnect#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.kafkaconnect#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.kafkaconnect#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.kafkaconnect#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.kafkaconnect#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1DescribeCustomPluginCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCustomPluginCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeCustomPluginCommandError(output, context);
  }
  const contents: DescribeCustomPluginCommandOutput = {
    $metadata: deserializeMetadata(output),
    creationTime: undefined,
    customPluginArn: undefined,
    customPluginState: undefined,
    description: undefined,
    latestRevision: undefined,
    name: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.creationTime !== undefined && data.creationTime !== null) {
    contents.creationTime = __expectNonNull(__parseRfc3339DateTime(data.creationTime));
  }
  if (data.customPluginArn !== undefined && data.customPluginArn !== null) {
    contents.customPluginArn = __expectString(data.customPluginArn);
  }
  if (data.customPluginState !== undefined && data.customPluginState !== null) {
    contents.customPluginState = __expectString(data.customPluginState);
  }
  if (data.description !== undefined && data.description !== null) {
    contents.description = __expectString(data.description);
  }
  if (data.latestRevision !== undefined && data.latestRevision !== null) {
    contents.latestRevision = deserializeAws_restJson1CustomPluginRevisionSummary(data.latestRevision, context);
  }
  if (data.name !== undefined && data.name !== null) {
    contents.name = __expectString(data.name);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeCustomPluginCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCustomPluginCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.kafkaconnect#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.kafkaconnect#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.kafkaconnect#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.kafkaconnect#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.kafkaconnect#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.kafkaconnect#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.kafkaconnect#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1DescribeWorkerConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorkerConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeWorkerConfigurationCommandError(output, context);
  }
  const contents: DescribeWorkerConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    creationTime: undefined,
    description: undefined,
    latestRevision: undefined,
    name: undefined,
    workerConfigurationArn: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.creationTime !== undefined && data.creationTime !== null) {
    contents.creationTime = __expectNonNull(__parseRfc3339DateTime(data.creationTime));
  }
  if (data.description !== undefined && data.description !== null) {
    contents.description = __expectString(data.description);
  }
  if (data.latestRevision !== undefined && data.latestRevision !== null) {
    contents.latestRevision = deserializeAws_restJson1WorkerConfigurationRevisionDescription(
      data.latestRevision,
      context
    );
  }
  if (data.name !== undefined && data.name !== null) {
    contents.name = __expectString(data.name);
  }
  if (data.workerConfigurationArn !== undefined && data.workerConfigurationArn !== null) {
    contents.workerConfigurationArn = __expectString(data.workerConfigurationArn);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeWorkerConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorkerConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.kafkaconnect#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.kafkaconnect#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.kafkaconnect#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.kafkaconnect#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.kafkaconnect#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.kafkaconnect#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.kafkaconnect#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1ListConnectorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConnectorsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListConnectorsCommandError(output, context);
  }
  const contents: ListConnectorsCommandOutput = {
    $metadata: deserializeMetadata(output),
    connectors: undefined,
    nextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.connectors !== undefined && data.connectors !== null) {
    contents.connectors = deserializeAws_restJson1__listOfConnectorSummary(data.connectors, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListConnectorsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConnectorsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.kafkaconnect#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.kafkaconnect#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.kafkaconnect#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.kafkaconnect#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.kafkaconnect#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.kafkaconnect#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.kafkaconnect#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1ListCustomPluginsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCustomPluginsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListCustomPluginsCommandError(output, context);
  }
  const contents: ListCustomPluginsCommandOutput = {
    $metadata: deserializeMetadata(output),
    customPlugins: undefined,
    nextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.customPlugins !== undefined && data.customPlugins !== null) {
    contents.customPlugins = deserializeAws_restJson1__listOfCustomPluginSummary(data.customPlugins, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListCustomPluginsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCustomPluginsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.kafkaconnect#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.kafkaconnect#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.kafkaconnect#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.kafkaconnect#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.kafkaconnect#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.kafkaconnect#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.kafkaconnect#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1ListWorkerConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkerConfigurationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListWorkerConfigurationsCommandError(output, context);
  }
  const contents: ListWorkerConfigurationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    nextToken: undefined,
    workerConfigurations: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.workerConfigurations !== undefined && data.workerConfigurations !== null) {
    contents.workerConfigurations = deserializeAws_restJson1__listOfWorkerConfigurationSummary(
      data.workerConfigurations,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListWorkerConfigurationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkerConfigurationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.kafkaconnect#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.kafkaconnect#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.kafkaconnect#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.kafkaconnect#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.kafkaconnect#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.kafkaconnect#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.kafkaconnect#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1UpdateConnectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConnectorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateConnectorCommandError(output, context);
  }
  const contents: UpdateConnectorCommandOutput = {
    $metadata: deserializeMetadata(output),
    connectorArn: undefined,
    connectorState: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.connectorArn !== undefined && data.connectorArn !== null) {
    contents.connectorArn = __expectString(data.connectorArn);
  }
  if (data.connectorState !== undefined && data.connectorState !== null) {
    contents.connectorState = __expectString(data.connectorState);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateConnectorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConnectorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.kafkaconnect#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.kafkaconnect#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.kafkaconnect#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.kafkaconnect#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.kafkaconnect#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.kafkaconnect#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.kafkaconnect#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
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
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
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
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1ForbiddenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ForbiddenException> => {
  const contents: ForbiddenException = {
    name: "ForbiddenException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1InternalServerErrorExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerErrorException> => {
  const contents: InternalServerErrorException = {
    name: "InternalServerErrorException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1NotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotFoundException> => {
  const contents: NotFoundException = {
    name: "NotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1ServiceUnavailableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const contents: ServiceUnavailableException = {
    name: "ServiceUnavailableException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1TooManyRequestsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyRequestsException> => {
  const contents: TooManyRequestsException = {
    name: "TooManyRequestsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1UnauthorizedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnauthorizedException> => {
  const contents: UnauthorizedException = {
    name: "UnauthorizedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

const serializeAws_restJson1__listOf__string = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1__listOfPlugin = (input: Plugin[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1Plugin(entry, context);
    });
};

const serializeAws_restJson1__mapOf__string = (input: { [key: string]: string }, context: __SerdeContext): any => {
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

const serializeAws_restJson1ApacheKafkaCluster = (input: ApacheKafkaCluster, context: __SerdeContext): any => {
  return {
    ...(input.bootstrapServers !== undefined &&
      input.bootstrapServers !== null && { bootstrapServers: input.bootstrapServers }),
    ...(input.vpc !== undefined && input.vpc !== null && { vpc: serializeAws_restJson1Vpc(input.vpc, context) }),
  };
};

const serializeAws_restJson1AutoScaling = (input: AutoScaling, context: __SerdeContext): any => {
  return {
    ...(input.maxWorkerCount !== undefined &&
      input.maxWorkerCount !== null && { maxWorkerCount: input.maxWorkerCount }),
    ...(input.mcuCount !== undefined && input.mcuCount !== null && { mcuCount: input.mcuCount }),
    ...(input.minWorkerCount !== undefined &&
      input.minWorkerCount !== null && { minWorkerCount: input.minWorkerCount }),
    ...(input.scaleInPolicy !== undefined &&
      input.scaleInPolicy !== null && {
        scaleInPolicy: serializeAws_restJson1ScaleInPolicy(input.scaleInPolicy, context),
      }),
    ...(input.scaleOutPolicy !== undefined &&
      input.scaleOutPolicy !== null && {
        scaleOutPolicy: serializeAws_restJson1ScaleOutPolicy(input.scaleOutPolicy, context),
      }),
  };
};

const serializeAws_restJson1AutoScalingUpdate = (input: AutoScalingUpdate, context: __SerdeContext): any => {
  return {
    ...(input.maxWorkerCount !== undefined &&
      input.maxWorkerCount !== null && { maxWorkerCount: input.maxWorkerCount }),
    ...(input.mcuCount !== undefined && input.mcuCount !== null && { mcuCount: input.mcuCount }),
    ...(input.minWorkerCount !== undefined &&
      input.minWorkerCount !== null && { minWorkerCount: input.minWorkerCount }),
    ...(input.scaleInPolicy !== undefined &&
      input.scaleInPolicy !== null && {
        scaleInPolicy: serializeAws_restJson1ScaleInPolicyUpdate(input.scaleInPolicy, context),
      }),
    ...(input.scaleOutPolicy !== undefined &&
      input.scaleOutPolicy !== null && {
        scaleOutPolicy: serializeAws_restJson1ScaleOutPolicyUpdate(input.scaleOutPolicy, context),
      }),
  };
};

const serializeAws_restJson1Capacity = (input: Capacity, context: __SerdeContext): any => {
  return {
    ...(input.autoScaling !== undefined &&
      input.autoScaling !== null && { autoScaling: serializeAws_restJson1AutoScaling(input.autoScaling, context) }),
    ...(input.provisionedCapacity !== undefined &&
      input.provisionedCapacity !== null && {
        provisionedCapacity: serializeAws_restJson1ProvisionedCapacity(input.provisionedCapacity, context),
      }),
  };
};

const serializeAws_restJson1CapacityUpdate = (input: CapacityUpdate, context: __SerdeContext): any => {
  return {
    ...(input.autoScaling !== undefined &&
      input.autoScaling !== null && {
        autoScaling: serializeAws_restJson1AutoScalingUpdate(input.autoScaling, context),
      }),
    ...(input.provisionedCapacity !== undefined &&
      input.provisionedCapacity !== null && {
        provisionedCapacity: serializeAws_restJson1ProvisionedCapacityUpdate(input.provisionedCapacity, context),
      }),
  };
};

const serializeAws_restJson1CloudWatchLogsLogDelivery = (
  input: CloudWatchLogsLogDelivery,
  context: __SerdeContext
): any => {
  return {
    ...(input.enabled !== undefined && input.enabled !== null && { enabled: input.enabled }),
    ...(input.logGroup !== undefined && input.logGroup !== null && { logGroup: input.logGroup }),
  };
};

const serializeAws_restJson1CustomPlugin = (input: CustomPlugin, context: __SerdeContext): any => {
  return {
    ...(input.customPluginArn !== undefined &&
      input.customPluginArn !== null && { customPluginArn: input.customPluginArn }),
    ...(input.revision !== undefined && input.revision !== null && { revision: input.revision }),
  };
};

const serializeAws_restJson1CustomPluginLocation = (input: CustomPluginLocation, context: __SerdeContext): any => {
  return {
    ...(input.s3Location !== undefined &&
      input.s3Location !== null && { s3Location: serializeAws_restJson1S3Location(input.s3Location, context) }),
  };
};

const serializeAws_restJson1FirehoseLogDelivery = (input: FirehoseLogDelivery, context: __SerdeContext): any => {
  return {
    ...(input.deliveryStream !== undefined &&
      input.deliveryStream !== null && { deliveryStream: input.deliveryStream }),
    ...(input.enabled !== undefined && input.enabled !== null && { enabled: input.enabled }),
  };
};

const serializeAws_restJson1KafkaCluster = (input: KafkaCluster, context: __SerdeContext): any => {
  return {
    ...(input.apacheKafkaCluster !== undefined &&
      input.apacheKafkaCluster !== null && {
        apacheKafkaCluster: serializeAws_restJson1ApacheKafkaCluster(input.apacheKafkaCluster, context),
      }),
  };
};

const serializeAws_restJson1KafkaClusterClientAuthentication = (
  input: KafkaClusterClientAuthentication,
  context: __SerdeContext
): any => {
  return {
    ...(input.authenticationType !== undefined &&
      input.authenticationType !== null && { authenticationType: input.authenticationType }),
  };
};

const serializeAws_restJson1KafkaClusterEncryptionInTransit = (
  input: KafkaClusterEncryptionInTransit,
  context: __SerdeContext
): any => {
  return {
    ...(input.encryptionType !== undefined &&
      input.encryptionType !== null && { encryptionType: input.encryptionType }),
  };
};

const serializeAws_restJson1LogDelivery = (input: LogDelivery, context: __SerdeContext): any => {
  return {
    ...(input.workerLogDelivery !== undefined &&
      input.workerLogDelivery !== null && {
        workerLogDelivery: serializeAws_restJson1WorkerLogDelivery(input.workerLogDelivery, context),
      }),
  };
};

const serializeAws_restJson1Plugin = (input: Plugin, context: __SerdeContext): any => {
  return {
    ...(input.customPlugin !== undefined &&
      input.customPlugin !== null && { customPlugin: serializeAws_restJson1CustomPlugin(input.customPlugin, context) }),
  };
};

const serializeAws_restJson1ProvisionedCapacity = (input: ProvisionedCapacity, context: __SerdeContext): any => {
  return {
    ...(input.mcuCount !== undefined && input.mcuCount !== null && { mcuCount: input.mcuCount }),
    ...(input.workerCount !== undefined && input.workerCount !== null && { workerCount: input.workerCount }),
  };
};

const serializeAws_restJson1ProvisionedCapacityUpdate = (
  input: ProvisionedCapacityUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.mcuCount !== undefined && input.mcuCount !== null && { mcuCount: input.mcuCount }),
    ...(input.workerCount !== undefined && input.workerCount !== null && { workerCount: input.workerCount }),
  };
};

const serializeAws_restJson1S3Location = (input: S3Location, context: __SerdeContext): any => {
  return {
    ...(input.bucketArn !== undefined && input.bucketArn !== null && { bucketArn: input.bucketArn }),
    ...(input.fileKey !== undefined && input.fileKey !== null && { fileKey: input.fileKey }),
    ...(input.objectVersion !== undefined && input.objectVersion !== null && { objectVersion: input.objectVersion }),
  };
};

const serializeAws_restJson1S3LogDelivery = (input: S3LogDelivery, context: __SerdeContext): any => {
  return {
    ...(input.bucket !== undefined && input.bucket !== null && { bucket: input.bucket }),
    ...(input.enabled !== undefined && input.enabled !== null && { enabled: input.enabled }),
    ...(input.prefix !== undefined && input.prefix !== null && { prefix: input.prefix }),
  };
};

const serializeAws_restJson1ScaleInPolicy = (input: ScaleInPolicy, context: __SerdeContext): any => {
  return {
    ...(input.cpuUtilizationPercentage !== undefined &&
      input.cpuUtilizationPercentage !== null && { cpuUtilizationPercentage: input.cpuUtilizationPercentage }),
  };
};

const serializeAws_restJson1ScaleInPolicyUpdate = (input: ScaleInPolicyUpdate, context: __SerdeContext): any => {
  return {
    ...(input.cpuUtilizationPercentage !== undefined &&
      input.cpuUtilizationPercentage !== null && { cpuUtilizationPercentage: input.cpuUtilizationPercentage }),
  };
};

const serializeAws_restJson1ScaleOutPolicy = (input: ScaleOutPolicy, context: __SerdeContext): any => {
  return {
    ...(input.cpuUtilizationPercentage !== undefined &&
      input.cpuUtilizationPercentage !== null && { cpuUtilizationPercentage: input.cpuUtilizationPercentage }),
  };
};

const serializeAws_restJson1ScaleOutPolicyUpdate = (input: ScaleOutPolicyUpdate, context: __SerdeContext): any => {
  return {
    ...(input.cpuUtilizationPercentage !== undefined &&
      input.cpuUtilizationPercentage !== null && { cpuUtilizationPercentage: input.cpuUtilizationPercentage }),
  };
};

const serializeAws_restJson1Vpc = (input: Vpc, context: __SerdeContext): any => {
  return {
    ...(input.securityGroups !== undefined &&
      input.securityGroups !== null && {
        securityGroups: serializeAws_restJson1__listOf__string(input.securityGroups, context),
      }),
    ...(input.subnets !== undefined &&
      input.subnets !== null && { subnets: serializeAws_restJson1__listOf__string(input.subnets, context) }),
  };
};

const serializeAws_restJson1WorkerConfiguration = (input: WorkerConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.revision !== undefined && input.revision !== null && { revision: input.revision }),
    ...(input.workerConfigurationArn !== undefined &&
      input.workerConfigurationArn !== null && { workerConfigurationArn: input.workerConfigurationArn }),
  };
};

const serializeAws_restJson1WorkerLogDelivery = (input: WorkerLogDelivery, context: __SerdeContext): any => {
  return {
    ...(input.cloudWatchLogs !== undefined &&
      input.cloudWatchLogs !== null && {
        cloudWatchLogs: serializeAws_restJson1CloudWatchLogsLogDelivery(input.cloudWatchLogs, context),
      }),
    ...(input.firehose !== undefined &&
      input.firehose !== null && { firehose: serializeAws_restJson1FirehoseLogDelivery(input.firehose, context) }),
    ...(input.s3 !== undefined && input.s3 !== null && { s3: serializeAws_restJson1S3LogDelivery(input.s3, context) }),
  };
};

const deserializeAws_restJson1__listOf__string = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1__listOfConnectorSummary = (output: any, context: __SerdeContext): ConnectorSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ConnectorSummary(entry, context);
    });
};

const deserializeAws_restJson1__listOfCustomPluginSummary = (
  output: any,
  context: __SerdeContext
): CustomPluginSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1CustomPluginSummary(entry, context);
    });
};

const deserializeAws_restJson1__listOfPluginDescription = (
  output: any,
  context: __SerdeContext
): PluginDescription[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1PluginDescription(entry, context);
    });
};

const deserializeAws_restJson1__listOfWorkerConfigurationSummary = (
  output: any,
  context: __SerdeContext
): WorkerConfigurationSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1WorkerConfigurationSummary(entry, context);
    });
};

const deserializeAws_restJson1__mapOf__string = (output: any, context: __SerdeContext): { [key: string]: string } => {
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

const deserializeAws_restJson1ApacheKafkaClusterDescription = (
  output: any,
  context: __SerdeContext
): ApacheKafkaClusterDescription => {
  return {
    bootstrapServers: __expectString(output.bootstrapServers),
    vpc:
      output.vpc !== undefined && output.vpc !== null
        ? deserializeAws_restJson1VpcDescription(output.vpc, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AutoScalingDescription = (
  output: any,
  context: __SerdeContext
): AutoScalingDescription => {
  return {
    maxWorkerCount: __expectInt32(output.maxWorkerCount),
    mcuCount: __expectInt32(output.mcuCount),
    minWorkerCount: __expectInt32(output.minWorkerCount),
    scaleInPolicy:
      output.scaleInPolicy !== undefined && output.scaleInPolicy !== null
        ? deserializeAws_restJson1ScaleInPolicyDescription(output.scaleInPolicy, context)
        : undefined,
    scaleOutPolicy:
      output.scaleOutPolicy !== undefined && output.scaleOutPolicy !== null
        ? deserializeAws_restJson1ScaleOutPolicyDescription(output.scaleOutPolicy, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1CapacityDescription = (output: any, context: __SerdeContext): CapacityDescription => {
  return {
    autoScaling:
      output.autoScaling !== undefined && output.autoScaling !== null
        ? deserializeAws_restJson1AutoScalingDescription(output.autoScaling, context)
        : undefined,
    provisionedCapacity:
      output.provisionedCapacity !== undefined && output.provisionedCapacity !== null
        ? deserializeAws_restJson1ProvisionedCapacityDescription(output.provisionedCapacity, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1CloudWatchLogsLogDeliveryDescription = (
  output: any,
  context: __SerdeContext
): CloudWatchLogsLogDeliveryDescription => {
  return {
    enabled: __expectBoolean(output.enabled),
    logGroup: __expectString(output.logGroup),
  } as any;
};

const deserializeAws_restJson1ConnectorSummary = (output: any, context: __SerdeContext): ConnectorSummary => {
  return {
    capacity:
      output.capacity !== undefined && output.capacity !== null
        ? deserializeAws_restJson1CapacityDescription(output.capacity, context)
        : undefined,
    connectorArn: __expectString(output.connectorArn),
    connectorDescription: __expectString(output.connectorDescription),
    connectorName: __expectString(output.connectorName),
    connectorState: __expectString(output.connectorState),
    creationTime:
      output.creationTime !== undefined && output.creationTime !== null
        ? __expectNonNull(__parseRfc3339DateTime(output.creationTime))
        : undefined,
    currentVersion: __expectString(output.currentVersion),
    kafkaCluster:
      output.kafkaCluster !== undefined && output.kafkaCluster !== null
        ? deserializeAws_restJson1KafkaClusterDescription(output.kafkaCluster, context)
        : undefined,
    kafkaClusterClientAuthentication:
      output.kafkaClusterClientAuthentication !== undefined && output.kafkaClusterClientAuthentication !== null
        ? deserializeAws_restJson1KafkaClusterClientAuthenticationDescription(
            output.kafkaClusterClientAuthentication,
            context
          )
        : undefined,
    kafkaClusterEncryptionInTransit:
      output.kafkaClusterEncryptionInTransit !== undefined && output.kafkaClusterEncryptionInTransit !== null
        ? deserializeAws_restJson1KafkaClusterEncryptionInTransitDescription(
            output.kafkaClusterEncryptionInTransit,
            context
          )
        : undefined,
    kafkaConnectVersion: __expectString(output.kafkaConnectVersion),
    logDelivery:
      output.logDelivery !== undefined && output.logDelivery !== null
        ? deserializeAws_restJson1LogDeliveryDescription(output.logDelivery, context)
        : undefined,
    plugins:
      output.plugins !== undefined && output.plugins !== null
        ? deserializeAws_restJson1__listOfPluginDescription(output.plugins, context)
        : undefined,
    serviceExecutionRoleArn: __expectString(output.serviceExecutionRoleArn),
    workerConfiguration:
      output.workerConfiguration !== undefined && output.workerConfiguration !== null
        ? deserializeAws_restJson1WorkerConfigurationDescription(output.workerConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1CustomPluginDescription = (
  output: any,
  context: __SerdeContext
): CustomPluginDescription => {
  return {
    customPluginArn: __expectString(output.customPluginArn),
    revision: __expectLong(output.revision),
  } as any;
};

const deserializeAws_restJson1CustomPluginFileDescription = (
  output: any,
  context: __SerdeContext
): CustomPluginFileDescription => {
  return {
    fileMd5: __expectString(output.fileMd5),
    fileSize: __expectLong(output.fileSize),
  } as any;
};

const deserializeAws_restJson1CustomPluginLocationDescription = (
  output: any,
  context: __SerdeContext
): CustomPluginLocationDescription => {
  return {
    s3Location:
      output.s3Location !== undefined && output.s3Location !== null
        ? deserializeAws_restJson1S3LocationDescription(output.s3Location, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1CustomPluginRevisionSummary = (
  output: any,
  context: __SerdeContext
): CustomPluginRevisionSummary => {
  return {
    contentType: __expectString(output.contentType),
    creationTime:
      output.creationTime !== undefined && output.creationTime !== null
        ? __expectNonNull(__parseRfc3339DateTime(output.creationTime))
        : undefined,
    description: __expectString(output.description),
    fileDescription:
      output.fileDescription !== undefined && output.fileDescription !== null
        ? deserializeAws_restJson1CustomPluginFileDescription(output.fileDescription, context)
        : undefined,
    location:
      output.location !== undefined && output.location !== null
        ? deserializeAws_restJson1CustomPluginLocationDescription(output.location, context)
        : undefined,
    revision: __expectLong(output.revision),
  } as any;
};

const deserializeAws_restJson1CustomPluginSummary = (output: any, context: __SerdeContext): CustomPluginSummary => {
  return {
    creationTime:
      output.creationTime !== undefined && output.creationTime !== null
        ? __expectNonNull(__parseRfc3339DateTime(output.creationTime))
        : undefined,
    customPluginArn: __expectString(output.customPluginArn),
    customPluginState: __expectString(output.customPluginState),
    description: __expectString(output.description),
    latestRevision:
      output.latestRevision !== undefined && output.latestRevision !== null
        ? deserializeAws_restJson1CustomPluginRevisionSummary(output.latestRevision, context)
        : undefined,
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_restJson1FirehoseLogDeliveryDescription = (
  output: any,
  context: __SerdeContext
): FirehoseLogDeliveryDescription => {
  return {
    deliveryStream: __expectString(output.deliveryStream),
    enabled: __expectBoolean(output.enabled),
  } as any;
};

const deserializeAws_restJson1KafkaClusterClientAuthenticationDescription = (
  output: any,
  context: __SerdeContext
): KafkaClusterClientAuthenticationDescription => {
  return {
    authenticationType: __expectString(output.authenticationType),
  } as any;
};

const deserializeAws_restJson1KafkaClusterDescription = (
  output: any,
  context: __SerdeContext
): KafkaClusterDescription => {
  return {
    apacheKafkaCluster:
      output.apacheKafkaCluster !== undefined && output.apacheKafkaCluster !== null
        ? deserializeAws_restJson1ApacheKafkaClusterDescription(output.apacheKafkaCluster, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1KafkaClusterEncryptionInTransitDescription = (
  output: any,
  context: __SerdeContext
): KafkaClusterEncryptionInTransitDescription => {
  return {
    encryptionType: __expectString(output.encryptionType),
  } as any;
};

const deserializeAws_restJson1LogDeliveryDescription = (
  output: any,
  context: __SerdeContext
): LogDeliveryDescription => {
  return {
    workerLogDelivery:
      output.workerLogDelivery !== undefined && output.workerLogDelivery !== null
        ? deserializeAws_restJson1WorkerLogDeliveryDescription(output.workerLogDelivery, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1PluginDescription = (output: any, context: __SerdeContext): PluginDescription => {
  return {
    customPlugin:
      output.customPlugin !== undefined && output.customPlugin !== null
        ? deserializeAws_restJson1CustomPluginDescription(output.customPlugin, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ProvisionedCapacityDescription = (
  output: any,
  context: __SerdeContext
): ProvisionedCapacityDescription => {
  return {
    mcuCount: __expectInt32(output.mcuCount),
    workerCount: __expectInt32(output.workerCount),
  } as any;
};

const deserializeAws_restJson1S3LocationDescription = (output: any, context: __SerdeContext): S3LocationDescription => {
  return {
    bucketArn: __expectString(output.bucketArn),
    fileKey: __expectString(output.fileKey),
    objectVersion: __expectString(output.objectVersion),
  } as any;
};

const deserializeAws_restJson1S3LogDeliveryDescription = (
  output: any,
  context: __SerdeContext
): S3LogDeliveryDescription => {
  return {
    bucket: __expectString(output.bucket),
    enabled: __expectBoolean(output.enabled),
    prefix: __expectString(output.prefix),
  } as any;
};

const deserializeAws_restJson1ScaleInPolicyDescription = (
  output: any,
  context: __SerdeContext
): ScaleInPolicyDescription => {
  return {
    cpuUtilizationPercentage: __expectInt32(output.cpuUtilizationPercentage),
  } as any;
};

const deserializeAws_restJson1ScaleOutPolicyDescription = (
  output: any,
  context: __SerdeContext
): ScaleOutPolicyDescription => {
  return {
    cpuUtilizationPercentage: __expectInt32(output.cpuUtilizationPercentage),
  } as any;
};

const deserializeAws_restJson1VpcDescription = (output: any, context: __SerdeContext): VpcDescription => {
  return {
    securityGroups:
      output.securityGroups !== undefined && output.securityGroups !== null
        ? deserializeAws_restJson1__listOf__string(output.securityGroups, context)
        : undefined,
    subnets:
      output.subnets !== undefined && output.subnets !== null
        ? deserializeAws_restJson1__listOf__string(output.subnets, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1WorkerConfigurationDescription = (
  output: any,
  context: __SerdeContext
): WorkerConfigurationDescription => {
  return {
    revision: __expectLong(output.revision),
    workerConfigurationArn: __expectString(output.workerConfigurationArn),
  } as any;
};

const deserializeAws_restJson1WorkerConfigurationRevisionDescription = (
  output: any,
  context: __SerdeContext
): WorkerConfigurationRevisionDescription => {
  return {
    creationTime:
      output.creationTime !== undefined && output.creationTime !== null
        ? __expectNonNull(__parseRfc3339DateTime(output.creationTime))
        : undefined,
    description: __expectString(output.description),
    propertiesFileContent: __expectString(output.propertiesFileContent),
    revision: __expectLong(output.revision),
  } as any;
};

const deserializeAws_restJson1WorkerConfigurationRevisionSummary = (
  output: any,
  context: __SerdeContext
): WorkerConfigurationRevisionSummary => {
  return {
    creationTime:
      output.creationTime !== undefined && output.creationTime !== null
        ? __expectNonNull(__parseRfc3339DateTime(output.creationTime))
        : undefined,
    description: __expectString(output.description),
    revision: __expectLong(output.revision),
  } as any;
};

const deserializeAws_restJson1WorkerConfigurationSummary = (
  output: any,
  context: __SerdeContext
): WorkerConfigurationSummary => {
  return {
    creationTime:
      output.creationTime !== undefined && output.creationTime !== null
        ? __expectNonNull(__parseRfc3339DateTime(output.creationTime))
        : undefined,
    description: __expectString(output.description),
    latestRevision:
      output.latestRevision !== undefined && output.latestRevision !== null
        ? deserializeAws_restJson1WorkerConfigurationRevisionSummary(output.latestRevision, context)
        : undefined,
    name: __expectString(output.name),
    workerConfigurationArn: __expectString(output.workerConfigurationArn),
  } as any;
};

const deserializeAws_restJson1WorkerLogDeliveryDescription = (
  output: any,
  context: __SerdeContext
): WorkerLogDeliveryDescription => {
  return {
    cloudWatchLogs:
      output.cloudWatchLogs !== undefined && output.cloudWatchLogs !== null
        ? deserializeAws_restJson1CloudWatchLogsLogDeliveryDescription(output.cloudWatchLogs, context)
        : undefined,
    firehose:
      output.firehose !== undefined && output.firehose !== null
        ? deserializeAws_restJson1FirehoseLogDeliveryDescription(output.firehose, context)
        : undefined,
    s3:
      output.s3 !== undefined && output.s3 !== null
        ? deserializeAws_restJson1S3LogDeliveryDescription(output.s3, context)
        : undefined,
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
