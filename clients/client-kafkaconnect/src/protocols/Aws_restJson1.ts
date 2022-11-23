// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map as __map,
  parseRfc3339DateTime as __parseRfc3339DateTime,
  resolvedPath as __resolvedPath,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { CreateConnectorCommandInput, CreateConnectorCommandOutput } from "../commands/CreateConnectorCommand";
import { CreateCustomPluginCommandInput, CreateCustomPluginCommandOutput } from "../commands/CreateCustomPluginCommand";
import {
  CreateWorkerConfigurationCommandInput,
  CreateWorkerConfigurationCommandOutput,
} from "../commands/CreateWorkerConfigurationCommand";
import { DeleteConnectorCommandInput, DeleteConnectorCommandOutput } from "../commands/DeleteConnectorCommand";
import { DeleteCustomPluginCommandInput, DeleteCustomPluginCommandOutput } from "../commands/DeleteCustomPluginCommand";
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
import { KafkaConnectServiceException as __BaseException } from "../models/KafkaConnectServiceException";
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
  StateDescription,
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

export const serializeAws_restJson1CreateConnectorCommand = async (
  input: CreateConnectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/connectors";
  let body: any;
  body = JSON.stringify({
    ...(input.capacity != null && { capacity: serializeAws_restJson1Capacity(input.capacity, context) }),
    ...(input.connectorConfiguration != null && {
      connectorConfiguration: serializeAws_restJson1__sensitive__mapOf__string(input.connectorConfiguration, context),
    }),
    ...(input.connectorDescription != null && { connectorDescription: input.connectorDescription }),
    ...(input.connectorName != null && { connectorName: input.connectorName }),
    ...(input.kafkaCluster != null && {
      kafkaCluster: serializeAws_restJson1KafkaCluster(input.kafkaCluster, context),
    }),
    ...(input.kafkaClusterClientAuthentication != null && {
      kafkaClusterClientAuthentication: serializeAws_restJson1KafkaClusterClientAuthentication(
        input.kafkaClusterClientAuthentication,
        context
      ),
    }),
    ...(input.kafkaClusterEncryptionInTransit != null && {
      kafkaClusterEncryptionInTransit: serializeAws_restJson1KafkaClusterEncryptionInTransit(
        input.kafkaClusterEncryptionInTransit,
        context
      ),
    }),
    ...(input.kafkaConnectVersion != null && { kafkaConnectVersion: input.kafkaConnectVersion }),
    ...(input.logDelivery != null && { logDelivery: serializeAws_restJson1LogDelivery(input.logDelivery, context) }),
    ...(input.plugins != null && { plugins: serializeAws_restJson1__listOfPlugin(input.plugins, context) }),
    ...(input.serviceExecutionRoleArn != null && { serviceExecutionRoleArn: input.serviceExecutionRoleArn }),
    ...(input.workerConfiguration != null && {
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
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/custom-plugins";
  let body: any;
  body = JSON.stringify({
    ...(input.contentType != null && { contentType: input.contentType }),
    ...(input.description != null && { description: input.description }),
    ...(input.location != null && { location: serializeAws_restJson1CustomPluginLocation(input.location, context) }),
    ...(input.name != null && { name: input.name }),
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
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/worker-configurations";
  let body: any;
  body = JSON.stringify({
    ...(input.description != null && { description: input.description }),
    ...(input.name != null && { name: input.name }),
    ...(input.propertiesFileContent != null && { propertiesFileContent: input.propertiesFileContent }),
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
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "connectorArn",
    () => input.connectorArn!,
    "{connectorArn}",
    false
  );
  const query: any = map({
    currentVersion: [, input.currentVersion!],
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

export const serializeAws_restJson1DeleteCustomPluginCommand = async (
  input: DeleteCustomPluginCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/custom-plugins/{customPluginArn}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "customPluginArn",
    () => input.customPluginArn!,
    "{customPluginArn}",
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

export const serializeAws_restJson1DescribeConnectorCommand = async (
  input: DescribeConnectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/connectors/{connectorArn}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "connectorArn",
    () => input.connectorArn!,
    "{connectorArn}",
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

export const serializeAws_restJson1DescribeCustomPluginCommand = async (
  input: DescribeCustomPluginCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/custom-plugins/{customPluginArn}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "customPluginArn",
    () => input.customPluginArn!,
    "{customPluginArn}",
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

export const serializeAws_restJson1DescribeWorkerConfigurationCommand = async (
  input: DescribeWorkerConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/worker-configurations/{workerConfigurationArn}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "workerConfigurationArn",
    () => input.workerConfigurationArn!,
    "{workerConfigurationArn}",
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

export const serializeAws_restJson1ListConnectorsCommand = async (
  input: ListConnectorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/connectors";
  const query: any = map({
    connectorNamePrefix: [, input.connectorNamePrefix!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
    nextToken: [, input.nextToken!],
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

export const serializeAws_restJson1ListCustomPluginsCommand = async (
  input: ListCustomPluginsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/custom-plugins";
  const query: any = map({
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
    nextToken: [, input.nextToken!],
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

export const serializeAws_restJson1ListWorkerConfigurationsCommand = async (
  input: ListWorkerConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/worker-configurations";
  const query: any = map({
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
    nextToken: [, input.nextToken!],
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
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "connectorArn",
    () => input.connectorArn!,
    "{connectorArn}",
    false
  );
  const query: any = map({
    currentVersion: [, __expectNonNull(input.currentVersion!, `currentVersion`)],
  });
  let body: any;
  body = JSON.stringify({
    ...(input.capacity != null && { capacity: serializeAws_restJson1CapacityUpdate(input.capacity, context) }),
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
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.connectorArn != null) {
    contents.connectorArn = __expectString(data.connectorArn);
  }
  if (data.connectorName != null) {
    contents.connectorName = __expectString(data.connectorName);
  }
  if (data.connectorState != null) {
    contents.connectorState = __expectString(data.connectorState);
  }
  return contents;
};

const deserializeAws_restJson1CreateConnectorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConnectorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.kafkaconnect#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.kafkaconnect#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.kafkaconnect#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.kafkaconnect#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kafkaconnect#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.kafkaconnect#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.kafkaconnect#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.kafkaconnect#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateCustomPluginCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCustomPluginCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateCustomPluginCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.customPluginArn != null) {
    contents.customPluginArn = __expectString(data.customPluginArn);
  }
  if (data.customPluginState != null) {
    contents.customPluginState = __expectString(data.customPluginState);
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.revision != null) {
    contents.revision = __expectLong(data.revision);
  }
  return contents;
};

const deserializeAws_restJson1CreateCustomPluginCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCustomPluginCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.kafkaconnect#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.kafkaconnect#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.kafkaconnect#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.kafkaconnect#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kafkaconnect#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.kafkaconnect#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.kafkaconnect#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.kafkaconnect#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateWorkerConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorkerConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateWorkerConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.creationTime != null) {
    contents.creationTime = __expectNonNull(__parseRfc3339DateTime(data.creationTime));
  }
  if (data.latestRevision != null) {
    contents.latestRevision = deserializeAws_restJson1WorkerConfigurationRevisionSummary(data.latestRevision, context);
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.workerConfigurationArn != null) {
    contents.workerConfigurationArn = __expectString(data.workerConfigurationArn);
  }
  return contents;
};

const deserializeAws_restJson1CreateWorkerConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorkerConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.kafkaconnect#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.kafkaconnect#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.kafkaconnect#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.kafkaconnect#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kafkaconnect#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.kafkaconnect#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.kafkaconnect#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.kafkaconnect#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteConnectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConnectorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteConnectorCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.connectorArn != null) {
    contents.connectorArn = __expectString(data.connectorArn);
  }
  if (data.connectorState != null) {
    contents.connectorState = __expectString(data.connectorState);
  }
  return contents;
};

const deserializeAws_restJson1DeleteConnectorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConnectorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.kafkaconnect#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.kafkaconnect#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.kafkaconnect#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kafkaconnect#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.kafkaconnect#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.kafkaconnect#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.kafkaconnect#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteCustomPluginCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCustomPluginCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteCustomPluginCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.customPluginArn != null) {
    contents.customPluginArn = __expectString(data.customPluginArn);
  }
  if (data.customPluginState != null) {
    contents.customPluginState = __expectString(data.customPluginState);
  }
  return contents;
};

const deserializeAws_restJson1DeleteCustomPluginCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCustomPluginCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.kafkaconnect#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.kafkaconnect#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.kafkaconnect#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kafkaconnect#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.kafkaconnect#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.kafkaconnect#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.kafkaconnect#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DescribeConnectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConnectorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeConnectorCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.capacity != null) {
    contents.capacity = deserializeAws_restJson1CapacityDescription(data.capacity, context);
  }
  if (data.connectorArn != null) {
    contents.connectorArn = __expectString(data.connectorArn);
  }
  if (data.connectorConfiguration != null) {
    contents.connectorConfiguration = deserializeAws_restJson1__sensitive__mapOf__string(
      data.connectorConfiguration,
      context
    );
  }
  if (data.connectorDescription != null) {
    contents.connectorDescription = __expectString(data.connectorDescription);
  }
  if (data.connectorName != null) {
    contents.connectorName = __expectString(data.connectorName);
  }
  if (data.connectorState != null) {
    contents.connectorState = __expectString(data.connectorState);
  }
  if (data.creationTime != null) {
    contents.creationTime = __expectNonNull(__parseRfc3339DateTime(data.creationTime));
  }
  if (data.currentVersion != null) {
    contents.currentVersion = __expectString(data.currentVersion);
  }
  if (data.kafkaCluster != null) {
    contents.kafkaCluster = deserializeAws_restJson1KafkaClusterDescription(data.kafkaCluster, context);
  }
  if (data.kafkaClusterClientAuthentication != null) {
    contents.kafkaClusterClientAuthentication = deserializeAws_restJson1KafkaClusterClientAuthenticationDescription(
      data.kafkaClusterClientAuthentication,
      context
    );
  }
  if (data.kafkaClusterEncryptionInTransit != null) {
    contents.kafkaClusterEncryptionInTransit = deserializeAws_restJson1KafkaClusterEncryptionInTransitDescription(
      data.kafkaClusterEncryptionInTransit,
      context
    );
  }
  if (data.kafkaConnectVersion != null) {
    contents.kafkaConnectVersion = __expectString(data.kafkaConnectVersion);
  }
  if (data.logDelivery != null) {
    contents.logDelivery = deserializeAws_restJson1LogDeliveryDescription(data.logDelivery, context);
  }
  if (data.plugins != null) {
    contents.plugins = deserializeAws_restJson1__listOfPluginDescription(data.plugins, context);
  }
  if (data.serviceExecutionRoleArn != null) {
    contents.serviceExecutionRoleArn = __expectString(data.serviceExecutionRoleArn);
  }
  if (data.stateDescription != null) {
    contents.stateDescription = deserializeAws_restJson1StateDescription(data.stateDescription, context);
  }
  if (data.workerConfiguration != null) {
    contents.workerConfiguration = deserializeAws_restJson1WorkerConfigurationDescription(
      data.workerConfiguration,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1DescribeConnectorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConnectorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.kafkaconnect#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.kafkaconnect#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.kafkaconnect#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kafkaconnect#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.kafkaconnect#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.kafkaconnect#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.kafkaconnect#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DescribeCustomPluginCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCustomPluginCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeCustomPluginCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.creationTime != null) {
    contents.creationTime = __expectNonNull(__parseRfc3339DateTime(data.creationTime));
  }
  if (data.customPluginArn != null) {
    contents.customPluginArn = __expectString(data.customPluginArn);
  }
  if (data.customPluginState != null) {
    contents.customPluginState = __expectString(data.customPluginState);
  }
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.latestRevision != null) {
    contents.latestRevision = deserializeAws_restJson1CustomPluginRevisionSummary(data.latestRevision, context);
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.stateDescription != null) {
    contents.stateDescription = deserializeAws_restJson1StateDescription(data.stateDescription, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeCustomPluginCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCustomPluginCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.kafkaconnect#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.kafkaconnect#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.kafkaconnect#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kafkaconnect#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.kafkaconnect#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.kafkaconnect#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.kafkaconnect#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DescribeWorkerConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorkerConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeWorkerConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.creationTime != null) {
    contents.creationTime = __expectNonNull(__parseRfc3339DateTime(data.creationTime));
  }
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.latestRevision != null) {
    contents.latestRevision = deserializeAws_restJson1WorkerConfigurationRevisionDescription(
      data.latestRevision,
      context
    );
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.workerConfigurationArn != null) {
    contents.workerConfigurationArn = __expectString(data.workerConfigurationArn);
  }
  return contents;
};

const deserializeAws_restJson1DescribeWorkerConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorkerConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.kafkaconnect#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.kafkaconnect#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.kafkaconnect#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kafkaconnect#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.kafkaconnect#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.kafkaconnect#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.kafkaconnect#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListConnectorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConnectorsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListConnectorsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.connectors != null) {
    contents.connectors = deserializeAws_restJson1__listOfConnectorSummary(data.connectors, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListConnectorsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConnectorsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.kafkaconnect#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.kafkaconnect#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.kafkaconnect#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kafkaconnect#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.kafkaconnect#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.kafkaconnect#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.kafkaconnect#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListCustomPluginsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCustomPluginsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListCustomPluginsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.customPlugins != null) {
    contents.customPlugins = deserializeAws_restJson1__listOfCustomPluginSummary(data.customPlugins, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListCustomPluginsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCustomPluginsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.kafkaconnect#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.kafkaconnect#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.kafkaconnect#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kafkaconnect#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.kafkaconnect#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.kafkaconnect#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.kafkaconnect#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListWorkerConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkerConfigurationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListWorkerConfigurationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.workerConfigurations != null) {
    contents.workerConfigurations = deserializeAws_restJson1__listOfWorkerConfigurationSummary(
      data.workerConfigurations,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1ListWorkerConfigurationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkerConfigurationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.kafkaconnect#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.kafkaconnect#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.kafkaconnect#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kafkaconnect#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.kafkaconnect#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.kafkaconnect#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.kafkaconnect#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateConnectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConnectorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateConnectorCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.connectorArn != null) {
    contents.connectorArn = __expectString(data.connectorArn);
  }
  if (data.connectorState != null) {
    contents.connectorState = __expectString(data.connectorState);
  }
  return contents;
};

const deserializeAws_restJson1UpdateConnectorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConnectorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.kafkaconnect#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.kafkaconnect#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.kafkaconnect#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kafkaconnect#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.kafkaconnect#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.kafkaconnect#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.kafkaconnect#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
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
  if (data.message != null) {
    contents.message = __expectString(data.message);
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
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ForbiddenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ForbiddenException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ForbiddenException({
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
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new InternalServerErrorException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1NotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new NotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ServiceUnavailableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ServiceUnavailableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1TooManyRequestsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyRequestsException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new TooManyRequestsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1UnauthorizedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnauthorizedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new UnauthorizedException({
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

const serializeAws_restJson1__listOfPlugin = (input: Plugin[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1Plugin(entry, context);
    });
};

const serializeAws_restJson1__sensitive__mapOf__string = (
  input: Record<string, string>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1ApacheKafkaCluster = (input: ApacheKafkaCluster, context: __SerdeContext): any => {
  return {
    ...(input.bootstrapServers != null && { bootstrapServers: input.bootstrapServers }),
    ...(input.vpc != null && { vpc: serializeAws_restJson1Vpc(input.vpc, context) }),
  };
};

const serializeAws_restJson1AutoScaling = (input: AutoScaling, context: __SerdeContext): any => {
  return {
    ...(input.maxWorkerCount != null && { maxWorkerCount: input.maxWorkerCount }),
    ...(input.mcuCount != null && { mcuCount: input.mcuCount }),
    ...(input.minWorkerCount != null && { minWorkerCount: input.minWorkerCount }),
    ...(input.scaleInPolicy != null && {
      scaleInPolicy: serializeAws_restJson1ScaleInPolicy(input.scaleInPolicy, context),
    }),
    ...(input.scaleOutPolicy != null && {
      scaleOutPolicy: serializeAws_restJson1ScaleOutPolicy(input.scaleOutPolicy, context),
    }),
  };
};

const serializeAws_restJson1AutoScalingUpdate = (input: AutoScalingUpdate, context: __SerdeContext): any => {
  return {
    ...(input.maxWorkerCount != null && { maxWorkerCount: input.maxWorkerCount }),
    ...(input.mcuCount != null && { mcuCount: input.mcuCount }),
    ...(input.minWorkerCount != null && { minWorkerCount: input.minWorkerCount }),
    ...(input.scaleInPolicy != null && {
      scaleInPolicy: serializeAws_restJson1ScaleInPolicyUpdate(input.scaleInPolicy, context),
    }),
    ...(input.scaleOutPolicy != null && {
      scaleOutPolicy: serializeAws_restJson1ScaleOutPolicyUpdate(input.scaleOutPolicy, context),
    }),
  };
};

const serializeAws_restJson1Capacity = (input: Capacity, context: __SerdeContext): any => {
  return {
    ...(input.autoScaling != null && { autoScaling: serializeAws_restJson1AutoScaling(input.autoScaling, context) }),
    ...(input.provisionedCapacity != null && {
      provisionedCapacity: serializeAws_restJson1ProvisionedCapacity(input.provisionedCapacity, context),
    }),
  };
};

const serializeAws_restJson1CapacityUpdate = (input: CapacityUpdate, context: __SerdeContext): any => {
  return {
    ...(input.autoScaling != null && {
      autoScaling: serializeAws_restJson1AutoScalingUpdate(input.autoScaling, context),
    }),
    ...(input.provisionedCapacity != null && {
      provisionedCapacity: serializeAws_restJson1ProvisionedCapacityUpdate(input.provisionedCapacity, context),
    }),
  };
};

const serializeAws_restJson1CloudWatchLogsLogDelivery = (
  input: CloudWatchLogsLogDelivery,
  context: __SerdeContext
): any => {
  return {
    ...(input.enabled != null && { enabled: input.enabled }),
    ...(input.logGroup != null && { logGroup: input.logGroup }),
  };
};

const serializeAws_restJson1CustomPlugin = (input: CustomPlugin, context: __SerdeContext): any => {
  return {
    ...(input.customPluginArn != null && { customPluginArn: input.customPluginArn }),
    ...(input.revision != null && { revision: input.revision }),
  };
};

const serializeAws_restJson1CustomPluginLocation = (input: CustomPluginLocation, context: __SerdeContext): any => {
  return {
    ...(input.s3Location != null && { s3Location: serializeAws_restJson1S3Location(input.s3Location, context) }),
  };
};

const serializeAws_restJson1FirehoseLogDelivery = (input: FirehoseLogDelivery, context: __SerdeContext): any => {
  return {
    ...(input.deliveryStream != null && { deliveryStream: input.deliveryStream }),
    ...(input.enabled != null && { enabled: input.enabled }),
  };
};

const serializeAws_restJson1KafkaCluster = (input: KafkaCluster, context: __SerdeContext): any => {
  return {
    ...(input.apacheKafkaCluster != null && {
      apacheKafkaCluster: serializeAws_restJson1ApacheKafkaCluster(input.apacheKafkaCluster, context),
    }),
  };
};

const serializeAws_restJson1KafkaClusterClientAuthentication = (
  input: KafkaClusterClientAuthentication,
  context: __SerdeContext
): any => {
  return {
    ...(input.authenticationType != null && { authenticationType: input.authenticationType }),
  };
};

const serializeAws_restJson1KafkaClusterEncryptionInTransit = (
  input: KafkaClusterEncryptionInTransit,
  context: __SerdeContext
): any => {
  return {
    ...(input.encryptionType != null && { encryptionType: input.encryptionType }),
  };
};

const serializeAws_restJson1LogDelivery = (input: LogDelivery, context: __SerdeContext): any => {
  return {
    ...(input.workerLogDelivery != null && {
      workerLogDelivery: serializeAws_restJson1WorkerLogDelivery(input.workerLogDelivery, context),
    }),
  };
};

const serializeAws_restJson1Plugin = (input: Plugin, context: __SerdeContext): any => {
  return {
    ...(input.customPlugin != null && {
      customPlugin: serializeAws_restJson1CustomPlugin(input.customPlugin, context),
    }),
  };
};

const serializeAws_restJson1ProvisionedCapacity = (input: ProvisionedCapacity, context: __SerdeContext): any => {
  return {
    ...(input.mcuCount != null && { mcuCount: input.mcuCount }),
    ...(input.workerCount != null && { workerCount: input.workerCount }),
  };
};

const serializeAws_restJson1ProvisionedCapacityUpdate = (
  input: ProvisionedCapacityUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.mcuCount != null && { mcuCount: input.mcuCount }),
    ...(input.workerCount != null && { workerCount: input.workerCount }),
  };
};

const serializeAws_restJson1S3Location = (input: S3Location, context: __SerdeContext): any => {
  return {
    ...(input.bucketArn != null && { bucketArn: input.bucketArn }),
    ...(input.fileKey != null && { fileKey: input.fileKey }),
    ...(input.objectVersion != null && { objectVersion: input.objectVersion }),
  };
};

const serializeAws_restJson1S3LogDelivery = (input: S3LogDelivery, context: __SerdeContext): any => {
  return {
    ...(input.bucket != null && { bucket: input.bucket }),
    ...(input.enabled != null && { enabled: input.enabled }),
    ...(input.prefix != null && { prefix: input.prefix }),
  };
};

const serializeAws_restJson1ScaleInPolicy = (input: ScaleInPolicy, context: __SerdeContext): any => {
  return {
    ...(input.cpuUtilizationPercentage != null && { cpuUtilizationPercentage: input.cpuUtilizationPercentage }),
  };
};

const serializeAws_restJson1ScaleInPolicyUpdate = (input: ScaleInPolicyUpdate, context: __SerdeContext): any => {
  return {
    ...(input.cpuUtilizationPercentage != null && { cpuUtilizationPercentage: input.cpuUtilizationPercentage }),
  };
};

const serializeAws_restJson1ScaleOutPolicy = (input: ScaleOutPolicy, context: __SerdeContext): any => {
  return {
    ...(input.cpuUtilizationPercentage != null && { cpuUtilizationPercentage: input.cpuUtilizationPercentage }),
  };
};

const serializeAws_restJson1ScaleOutPolicyUpdate = (input: ScaleOutPolicyUpdate, context: __SerdeContext): any => {
  return {
    ...(input.cpuUtilizationPercentage != null && { cpuUtilizationPercentage: input.cpuUtilizationPercentage }),
  };
};

const serializeAws_restJson1Vpc = (input: Vpc, context: __SerdeContext): any => {
  return {
    ...(input.securityGroups != null && {
      securityGroups: serializeAws_restJson1__listOf__string(input.securityGroups, context),
    }),
    ...(input.subnets != null && { subnets: serializeAws_restJson1__listOf__string(input.subnets, context) }),
  };
};

const serializeAws_restJson1WorkerConfiguration = (input: WorkerConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.revision != null && { revision: input.revision }),
    ...(input.workerConfigurationArn != null && { workerConfigurationArn: input.workerConfigurationArn }),
  };
};

const serializeAws_restJson1WorkerLogDelivery = (input: WorkerLogDelivery, context: __SerdeContext): any => {
  return {
    ...(input.cloudWatchLogs != null && {
      cloudWatchLogs: serializeAws_restJson1CloudWatchLogsLogDelivery(input.cloudWatchLogs, context),
    }),
    ...(input.firehose != null && { firehose: serializeAws_restJson1FirehoseLogDelivery(input.firehose, context) }),
    ...(input.s3 != null && { s3: serializeAws_restJson1S3LogDelivery(input.s3, context) }),
  };
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

const deserializeAws_restJson1__listOfConnectorSummary = (output: any, context: __SerdeContext): ConnectorSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ConnectorSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1__listOfCustomPluginSummary = (
  output: any,
  context: __SerdeContext
): CustomPluginSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1CustomPluginSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1__listOfPluginDescription = (
  output: any,
  context: __SerdeContext
): PluginDescription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1PluginDescription(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1__listOfWorkerConfigurationSummary = (
  output: any,
  context: __SerdeContext
): WorkerConfigurationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1WorkerConfigurationSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1__sensitive__mapOf__string = (
  output: any,
  context: __SerdeContext
): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1ApacheKafkaClusterDescription = (
  output: any,
  context: __SerdeContext
): ApacheKafkaClusterDescription => {
  return {
    bootstrapServers: __expectString(output.bootstrapServers),
    vpc: output.vpc != null ? deserializeAws_restJson1VpcDescription(output.vpc, context) : undefined,
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
      output.scaleInPolicy != null
        ? deserializeAws_restJson1ScaleInPolicyDescription(output.scaleInPolicy, context)
        : undefined,
    scaleOutPolicy:
      output.scaleOutPolicy != null
        ? deserializeAws_restJson1ScaleOutPolicyDescription(output.scaleOutPolicy, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1CapacityDescription = (output: any, context: __SerdeContext): CapacityDescription => {
  return {
    autoScaling:
      output.autoScaling != null
        ? deserializeAws_restJson1AutoScalingDescription(output.autoScaling, context)
        : undefined,
    provisionedCapacity:
      output.provisionedCapacity != null
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
      output.capacity != null ? deserializeAws_restJson1CapacityDescription(output.capacity, context) : undefined,
    connectorArn: __expectString(output.connectorArn),
    connectorDescription: __expectString(output.connectorDescription),
    connectorName: __expectString(output.connectorName),
    connectorState: __expectString(output.connectorState),
    creationTime:
      output.creationTime != null ? __expectNonNull(__parseRfc3339DateTime(output.creationTime)) : undefined,
    currentVersion: __expectString(output.currentVersion),
    kafkaCluster:
      output.kafkaCluster != null
        ? deserializeAws_restJson1KafkaClusterDescription(output.kafkaCluster, context)
        : undefined,
    kafkaClusterClientAuthentication:
      output.kafkaClusterClientAuthentication != null
        ? deserializeAws_restJson1KafkaClusterClientAuthenticationDescription(
            output.kafkaClusterClientAuthentication,
            context
          )
        : undefined,
    kafkaClusterEncryptionInTransit:
      output.kafkaClusterEncryptionInTransit != null
        ? deserializeAws_restJson1KafkaClusterEncryptionInTransitDescription(
            output.kafkaClusterEncryptionInTransit,
            context
          )
        : undefined,
    kafkaConnectVersion: __expectString(output.kafkaConnectVersion),
    logDelivery:
      output.logDelivery != null
        ? deserializeAws_restJson1LogDeliveryDescription(output.logDelivery, context)
        : undefined,
    plugins:
      output.plugins != null ? deserializeAws_restJson1__listOfPluginDescription(output.plugins, context) : undefined,
    serviceExecutionRoleArn: __expectString(output.serviceExecutionRoleArn),
    workerConfiguration:
      output.workerConfiguration != null
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
      output.s3Location != null ? deserializeAws_restJson1S3LocationDescription(output.s3Location, context) : undefined,
  } as any;
};

const deserializeAws_restJson1CustomPluginRevisionSummary = (
  output: any,
  context: __SerdeContext
): CustomPluginRevisionSummary => {
  return {
    contentType: __expectString(output.contentType),
    creationTime:
      output.creationTime != null ? __expectNonNull(__parseRfc3339DateTime(output.creationTime)) : undefined,
    description: __expectString(output.description),
    fileDescription:
      output.fileDescription != null
        ? deserializeAws_restJson1CustomPluginFileDescription(output.fileDescription, context)
        : undefined,
    location:
      output.location != null
        ? deserializeAws_restJson1CustomPluginLocationDescription(output.location, context)
        : undefined,
    revision: __expectLong(output.revision),
  } as any;
};

const deserializeAws_restJson1CustomPluginSummary = (output: any, context: __SerdeContext): CustomPluginSummary => {
  return {
    creationTime:
      output.creationTime != null ? __expectNonNull(__parseRfc3339DateTime(output.creationTime)) : undefined,
    customPluginArn: __expectString(output.customPluginArn),
    customPluginState: __expectString(output.customPluginState),
    description: __expectString(output.description),
    latestRevision:
      output.latestRevision != null
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
      output.apacheKafkaCluster != null
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
      output.workerLogDelivery != null
        ? deserializeAws_restJson1WorkerLogDeliveryDescription(output.workerLogDelivery, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1PluginDescription = (output: any, context: __SerdeContext): PluginDescription => {
  return {
    customPlugin:
      output.customPlugin != null
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

const deserializeAws_restJson1StateDescription = (output: any, context: __SerdeContext): StateDescription => {
  return {
    code: __expectString(output.code),
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_restJson1VpcDescription = (output: any, context: __SerdeContext): VpcDescription => {
  return {
    securityGroups:
      output.securityGroups != null
        ? deserializeAws_restJson1__listOf__string(output.securityGroups, context)
        : undefined,
    subnets: output.subnets != null ? deserializeAws_restJson1__listOf__string(output.subnets, context) : undefined,
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
      output.creationTime != null ? __expectNonNull(__parseRfc3339DateTime(output.creationTime)) : undefined,
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
      output.creationTime != null ? __expectNonNull(__parseRfc3339DateTime(output.creationTime)) : undefined,
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
      output.creationTime != null ? __expectNonNull(__parseRfc3339DateTime(output.creationTime)) : undefined,
    description: __expectString(output.description),
    latestRevision:
      output.latestRevision != null
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
      output.cloudWatchLogs != null
        ? deserializeAws_restJson1CloudWatchLogsLogDeliveryDescription(output.cloudWatchLogs, context)
        : undefined,
    firehose:
      output.firehose != null
        ? deserializeAws_restJson1FirehoseLogDeliveryDescription(output.firehose, context)
        : undefined,
    s3: output.s3 != null ? deserializeAws_restJson1S3LogDeliveryDescription(output.s3, context) : undefined,
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
