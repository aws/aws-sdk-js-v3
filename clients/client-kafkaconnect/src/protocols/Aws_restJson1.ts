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
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
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

/**
 * serializeAws_restJson1CreateConnectorCommand
 */
export const se_CreateConnectorCommand = async (
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
    ...(input.capacity != null && { capacity: se_Capacity(input.capacity, context) }),
    ...(input.connectorConfiguration != null && {
      connectorConfiguration: se___sensitive__mapOf__string(input.connectorConfiguration, context),
    }),
    ...(input.connectorDescription != null && { connectorDescription: input.connectorDescription }),
    ...(input.connectorName != null && { connectorName: input.connectorName }),
    ...(input.kafkaCluster != null && { kafkaCluster: se_KafkaCluster(input.kafkaCluster, context) }),
    ...(input.kafkaClusterClientAuthentication != null && {
      kafkaClusterClientAuthentication: se_KafkaClusterClientAuthentication(
        input.kafkaClusterClientAuthentication,
        context
      ),
    }),
    ...(input.kafkaClusterEncryptionInTransit != null && {
      kafkaClusterEncryptionInTransit: se_KafkaClusterEncryptionInTransit(
        input.kafkaClusterEncryptionInTransit,
        context
      ),
    }),
    ...(input.kafkaConnectVersion != null && { kafkaConnectVersion: input.kafkaConnectVersion }),
    ...(input.logDelivery != null && { logDelivery: se_LogDelivery(input.logDelivery, context) }),
    ...(input.plugins != null && { plugins: se___listOfPlugin(input.plugins, context) }),
    ...(input.serviceExecutionRoleArn != null && { serviceExecutionRoleArn: input.serviceExecutionRoleArn }),
    ...(input.workerConfiguration != null && {
      workerConfiguration: se_WorkerConfiguration(input.workerConfiguration, context),
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
 * serializeAws_restJson1CreateCustomPluginCommand
 */
export const se_CreateCustomPluginCommand = async (
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
    ...(input.location != null && { location: se_CustomPluginLocation(input.location, context) }),
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

/**
 * serializeAws_restJson1CreateWorkerConfigurationCommand
 */
export const se_CreateWorkerConfigurationCommand = async (
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

/**
 * serializeAws_restJson1DeleteConnectorCommand
 */
export const se_DeleteConnectorCommand = async (
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

/**
 * serializeAws_restJson1DeleteCustomPluginCommand
 */
export const se_DeleteCustomPluginCommand = async (
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

/**
 * serializeAws_restJson1DescribeConnectorCommand
 */
export const se_DescribeConnectorCommand = async (
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

/**
 * serializeAws_restJson1DescribeCustomPluginCommand
 */
export const se_DescribeCustomPluginCommand = async (
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

/**
 * serializeAws_restJson1DescribeWorkerConfigurationCommand
 */
export const se_DescribeWorkerConfigurationCommand = async (
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

/**
 * serializeAws_restJson1ListConnectorsCommand
 */
export const se_ListConnectorsCommand = async (
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

/**
 * serializeAws_restJson1ListCustomPluginsCommand
 */
export const se_ListCustomPluginsCommand = async (
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

/**
 * serializeAws_restJson1ListWorkerConfigurationsCommand
 */
export const se_ListWorkerConfigurationsCommand = async (
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

/**
 * serializeAws_restJson1UpdateConnectorCommand
 */
export const se_UpdateConnectorCommand = async (
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
    ...(input.capacity != null && { capacity: se_CapacityUpdate(input.capacity, context) }),
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

/**
 * deserializeAws_restJson1CreateConnectorCommand
 */
export const de_CreateConnectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConnectorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateConnectorCommandError(output, context);
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

/**
 * deserializeAws_restJson1CreateConnectorCommandError
 */
const de_CreateConnectorCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.kafkaconnect#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.kafkaconnect#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.kafkaconnect#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kafkaconnect#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.kafkaconnect#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.kafkaconnect#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.kafkaconnect#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateCustomPluginCommand
 */
export const de_CreateCustomPluginCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCustomPluginCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateCustomPluginCommandError(output, context);
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

/**
 * deserializeAws_restJson1CreateCustomPluginCommandError
 */
const de_CreateCustomPluginCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.kafkaconnect#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.kafkaconnect#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.kafkaconnect#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kafkaconnect#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.kafkaconnect#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.kafkaconnect#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.kafkaconnect#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateWorkerConfigurationCommand
 */
export const de_CreateWorkerConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorkerConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateWorkerConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.creationTime != null) {
    contents.creationTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.creationTime));
  }
  if (data.latestRevision != null) {
    contents.latestRevision = de_WorkerConfigurationRevisionSummary(data.latestRevision, context);
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.workerConfigurationArn != null) {
    contents.workerConfigurationArn = __expectString(data.workerConfigurationArn);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateWorkerConfigurationCommandError
 */
const de_CreateWorkerConfigurationCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.kafkaconnect#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.kafkaconnect#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.kafkaconnect#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kafkaconnect#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.kafkaconnect#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.kafkaconnect#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.kafkaconnect#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteConnectorCommand
 */
export const de_DeleteConnectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConnectorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteConnectorCommandError(output, context);
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

/**
 * deserializeAws_restJson1DeleteConnectorCommandError
 */
const de_DeleteConnectorCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.kafkaconnect#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.kafkaconnect#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kafkaconnect#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.kafkaconnect#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.kafkaconnect#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.kafkaconnect#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteCustomPluginCommand
 */
export const de_DeleteCustomPluginCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCustomPluginCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteCustomPluginCommandError(output, context);
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

/**
 * deserializeAws_restJson1DeleteCustomPluginCommandError
 */
const de_DeleteCustomPluginCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.kafkaconnect#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.kafkaconnect#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kafkaconnect#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.kafkaconnect#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.kafkaconnect#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.kafkaconnect#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DescribeConnectorCommand
 */
export const de_DescribeConnectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConnectorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeConnectorCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.capacity != null) {
    contents.capacity = de_CapacityDescription(data.capacity, context);
  }
  if (data.connectorArn != null) {
    contents.connectorArn = __expectString(data.connectorArn);
  }
  if (data.connectorConfiguration != null) {
    contents.connectorConfiguration = de___sensitive__mapOf__string(data.connectorConfiguration, context);
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
    contents.creationTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.creationTime));
  }
  if (data.currentVersion != null) {
    contents.currentVersion = __expectString(data.currentVersion);
  }
  if (data.kafkaCluster != null) {
    contents.kafkaCluster = de_KafkaClusterDescription(data.kafkaCluster, context);
  }
  if (data.kafkaClusterClientAuthentication != null) {
    contents.kafkaClusterClientAuthentication = de_KafkaClusterClientAuthenticationDescription(
      data.kafkaClusterClientAuthentication,
      context
    );
  }
  if (data.kafkaClusterEncryptionInTransit != null) {
    contents.kafkaClusterEncryptionInTransit = de_KafkaClusterEncryptionInTransitDescription(
      data.kafkaClusterEncryptionInTransit,
      context
    );
  }
  if (data.kafkaConnectVersion != null) {
    contents.kafkaConnectVersion = __expectString(data.kafkaConnectVersion);
  }
  if (data.logDelivery != null) {
    contents.logDelivery = de_LogDeliveryDescription(data.logDelivery, context);
  }
  if (data.plugins != null) {
    contents.plugins = de___listOfPluginDescription(data.plugins, context);
  }
  if (data.serviceExecutionRoleArn != null) {
    contents.serviceExecutionRoleArn = __expectString(data.serviceExecutionRoleArn);
  }
  if (data.stateDescription != null) {
    contents.stateDescription = de_StateDescription(data.stateDescription, context);
  }
  if (data.workerConfiguration != null) {
    contents.workerConfiguration = de_WorkerConfigurationDescription(data.workerConfiguration, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeConnectorCommandError
 */
const de_DescribeConnectorCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.kafkaconnect#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.kafkaconnect#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kafkaconnect#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.kafkaconnect#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.kafkaconnect#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.kafkaconnect#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DescribeCustomPluginCommand
 */
export const de_DescribeCustomPluginCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCustomPluginCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeCustomPluginCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.creationTime != null) {
    contents.creationTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.creationTime));
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
    contents.latestRevision = de_CustomPluginRevisionSummary(data.latestRevision, context);
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.stateDescription != null) {
    contents.stateDescription = de_StateDescription(data.stateDescription, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeCustomPluginCommandError
 */
const de_DescribeCustomPluginCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.kafkaconnect#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.kafkaconnect#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kafkaconnect#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.kafkaconnect#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.kafkaconnect#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.kafkaconnect#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DescribeWorkerConfigurationCommand
 */
export const de_DescribeWorkerConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorkerConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeWorkerConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.creationTime != null) {
    contents.creationTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.creationTime));
  }
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.latestRevision != null) {
    contents.latestRevision = de_WorkerConfigurationRevisionDescription(data.latestRevision, context);
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.workerConfigurationArn != null) {
    contents.workerConfigurationArn = __expectString(data.workerConfigurationArn);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeWorkerConfigurationCommandError
 */
const de_DescribeWorkerConfigurationCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.kafkaconnect#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.kafkaconnect#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kafkaconnect#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.kafkaconnect#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.kafkaconnect#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.kafkaconnect#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListConnectorsCommand
 */
export const de_ListConnectorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConnectorsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListConnectorsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.connectors != null) {
    contents.connectors = de___listOfConnectorSummary(data.connectors, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListConnectorsCommandError
 */
const de_ListConnectorsCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.kafkaconnect#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.kafkaconnect#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kafkaconnect#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.kafkaconnect#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.kafkaconnect#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.kafkaconnect#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListCustomPluginsCommand
 */
export const de_ListCustomPluginsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCustomPluginsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListCustomPluginsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.customPlugins != null) {
    contents.customPlugins = de___listOfCustomPluginSummary(data.customPlugins, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListCustomPluginsCommandError
 */
const de_ListCustomPluginsCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.kafkaconnect#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.kafkaconnect#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kafkaconnect#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.kafkaconnect#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.kafkaconnect#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.kafkaconnect#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListWorkerConfigurationsCommand
 */
export const de_ListWorkerConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkerConfigurationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListWorkerConfigurationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.workerConfigurations != null) {
    contents.workerConfigurations = de___listOfWorkerConfigurationSummary(data.workerConfigurations, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListWorkerConfigurationsCommandError
 */
const de_ListWorkerConfigurationsCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.kafkaconnect#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.kafkaconnect#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kafkaconnect#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.kafkaconnect#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.kafkaconnect#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.kafkaconnect#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateConnectorCommand
 */
export const de_UpdateConnectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConnectorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateConnectorCommandError(output, context);
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

/**
 * deserializeAws_restJson1UpdateConnectorCommandError
 */
const de_UpdateConnectorCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.kafkaconnect#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.kafkaconnect#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kafkaconnect#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.kafkaconnect#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.kafkaconnect#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.kafkaconnect#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
  if (data.message != null) {
    contents.message = __expectString(data.message);
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
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ForbiddenExceptionRes
 */
const de_ForbiddenExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ForbiddenException> => {
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

/**
 * deserializeAws_restJson1InternalServerErrorExceptionRes
 */
const de_InternalServerErrorExceptionRes = async (
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

/**
 * deserializeAws_restJson1NotFoundExceptionRes
 */
const de_NotFoundExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<NotFoundException> => {
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

/**
 * deserializeAws_restJson1ServiceUnavailableExceptionRes
 */
const de_ServiceUnavailableExceptionRes = async (
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

/**
 * deserializeAws_restJson1TooManyRequestsExceptionRes
 */
const de_TooManyRequestsExceptionRes = async (
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

/**
 * deserializeAws_restJson1UnauthorizedExceptionRes
 */
const de_UnauthorizedExceptionRes = async (
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
 * serializeAws_restJson1__listOfPlugin
 */
const se___listOfPlugin = (input: Plugin[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Plugin(entry, context);
    });
};

/**
 * serializeAws_restJson1__sensitive__mapOf__string
 */
const se___sensitive__mapOf__string = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1ApacheKafkaCluster
 */
const se_ApacheKafkaCluster = (input: ApacheKafkaCluster, context: __SerdeContext): any => {
  return {
    ...(input.bootstrapServers != null && { bootstrapServers: input.bootstrapServers }),
    ...(input.vpc != null && { vpc: se_Vpc(input.vpc, context) }),
  };
};

/**
 * serializeAws_restJson1AutoScaling
 */
const se_AutoScaling = (input: AutoScaling, context: __SerdeContext): any => {
  return {
    ...(input.maxWorkerCount != null && { maxWorkerCount: input.maxWorkerCount }),
    ...(input.mcuCount != null && { mcuCount: input.mcuCount }),
    ...(input.minWorkerCount != null && { minWorkerCount: input.minWorkerCount }),
    ...(input.scaleInPolicy != null && { scaleInPolicy: se_ScaleInPolicy(input.scaleInPolicy, context) }),
    ...(input.scaleOutPolicy != null && { scaleOutPolicy: se_ScaleOutPolicy(input.scaleOutPolicy, context) }),
  };
};

/**
 * serializeAws_restJson1AutoScalingUpdate
 */
const se_AutoScalingUpdate = (input: AutoScalingUpdate, context: __SerdeContext): any => {
  return {
    ...(input.maxWorkerCount != null && { maxWorkerCount: input.maxWorkerCount }),
    ...(input.mcuCount != null && { mcuCount: input.mcuCount }),
    ...(input.minWorkerCount != null && { minWorkerCount: input.minWorkerCount }),
    ...(input.scaleInPolicy != null && { scaleInPolicy: se_ScaleInPolicyUpdate(input.scaleInPolicy, context) }),
    ...(input.scaleOutPolicy != null && { scaleOutPolicy: se_ScaleOutPolicyUpdate(input.scaleOutPolicy, context) }),
  };
};

/**
 * serializeAws_restJson1Capacity
 */
const se_Capacity = (input: Capacity, context: __SerdeContext): any => {
  return {
    ...(input.autoScaling != null && { autoScaling: se_AutoScaling(input.autoScaling, context) }),
    ...(input.provisionedCapacity != null && {
      provisionedCapacity: se_ProvisionedCapacity(input.provisionedCapacity, context),
    }),
  };
};

/**
 * serializeAws_restJson1CapacityUpdate
 */
const se_CapacityUpdate = (input: CapacityUpdate, context: __SerdeContext): any => {
  return {
    ...(input.autoScaling != null && { autoScaling: se_AutoScalingUpdate(input.autoScaling, context) }),
    ...(input.provisionedCapacity != null && {
      provisionedCapacity: se_ProvisionedCapacityUpdate(input.provisionedCapacity, context),
    }),
  };
};

/**
 * serializeAws_restJson1CloudWatchLogsLogDelivery
 */
const se_CloudWatchLogsLogDelivery = (input: CloudWatchLogsLogDelivery, context: __SerdeContext): any => {
  return {
    ...(input.enabled != null && { enabled: input.enabled }),
    ...(input.logGroup != null && { logGroup: input.logGroup }),
  };
};

/**
 * serializeAws_restJson1CustomPlugin
 */
const se_CustomPlugin = (input: CustomPlugin, context: __SerdeContext): any => {
  return {
    ...(input.customPluginArn != null && { customPluginArn: input.customPluginArn }),
    ...(input.revision != null && { revision: input.revision }),
  };
};

/**
 * serializeAws_restJson1CustomPluginLocation
 */
const se_CustomPluginLocation = (input: CustomPluginLocation, context: __SerdeContext): any => {
  return {
    ...(input.s3Location != null && { s3Location: se_S3Location(input.s3Location, context) }),
  };
};

/**
 * serializeAws_restJson1FirehoseLogDelivery
 */
const se_FirehoseLogDelivery = (input: FirehoseLogDelivery, context: __SerdeContext): any => {
  return {
    ...(input.deliveryStream != null && { deliveryStream: input.deliveryStream }),
    ...(input.enabled != null && { enabled: input.enabled }),
  };
};

/**
 * serializeAws_restJson1KafkaCluster
 */
const se_KafkaCluster = (input: KafkaCluster, context: __SerdeContext): any => {
  return {
    ...(input.apacheKafkaCluster != null && {
      apacheKafkaCluster: se_ApacheKafkaCluster(input.apacheKafkaCluster, context),
    }),
  };
};

/**
 * serializeAws_restJson1KafkaClusterClientAuthentication
 */
const se_KafkaClusterClientAuthentication = (input: KafkaClusterClientAuthentication, context: __SerdeContext): any => {
  return {
    ...(input.authenticationType != null && { authenticationType: input.authenticationType }),
  };
};

/**
 * serializeAws_restJson1KafkaClusterEncryptionInTransit
 */
const se_KafkaClusterEncryptionInTransit = (input: KafkaClusterEncryptionInTransit, context: __SerdeContext): any => {
  return {
    ...(input.encryptionType != null && { encryptionType: input.encryptionType }),
  };
};

/**
 * serializeAws_restJson1LogDelivery
 */
const se_LogDelivery = (input: LogDelivery, context: __SerdeContext): any => {
  return {
    ...(input.workerLogDelivery != null && {
      workerLogDelivery: se_WorkerLogDelivery(input.workerLogDelivery, context),
    }),
  };
};

/**
 * serializeAws_restJson1Plugin
 */
const se_Plugin = (input: Plugin, context: __SerdeContext): any => {
  return {
    ...(input.customPlugin != null && { customPlugin: se_CustomPlugin(input.customPlugin, context) }),
  };
};

/**
 * serializeAws_restJson1ProvisionedCapacity
 */
const se_ProvisionedCapacity = (input: ProvisionedCapacity, context: __SerdeContext): any => {
  return {
    ...(input.mcuCount != null && { mcuCount: input.mcuCount }),
    ...(input.workerCount != null && { workerCount: input.workerCount }),
  };
};

/**
 * serializeAws_restJson1ProvisionedCapacityUpdate
 */
const se_ProvisionedCapacityUpdate = (input: ProvisionedCapacityUpdate, context: __SerdeContext): any => {
  return {
    ...(input.mcuCount != null && { mcuCount: input.mcuCount }),
    ...(input.workerCount != null && { workerCount: input.workerCount }),
  };
};

/**
 * serializeAws_restJson1S3Location
 */
const se_S3Location = (input: S3Location, context: __SerdeContext): any => {
  return {
    ...(input.bucketArn != null && { bucketArn: input.bucketArn }),
    ...(input.fileKey != null && { fileKey: input.fileKey }),
    ...(input.objectVersion != null && { objectVersion: input.objectVersion }),
  };
};

/**
 * serializeAws_restJson1S3LogDelivery
 */
const se_S3LogDelivery = (input: S3LogDelivery, context: __SerdeContext): any => {
  return {
    ...(input.bucket != null && { bucket: input.bucket }),
    ...(input.enabled != null && { enabled: input.enabled }),
    ...(input.prefix != null && { prefix: input.prefix }),
  };
};

/**
 * serializeAws_restJson1ScaleInPolicy
 */
const se_ScaleInPolicy = (input: ScaleInPolicy, context: __SerdeContext): any => {
  return {
    ...(input.cpuUtilizationPercentage != null && { cpuUtilizationPercentage: input.cpuUtilizationPercentage }),
  };
};

/**
 * serializeAws_restJson1ScaleInPolicyUpdate
 */
const se_ScaleInPolicyUpdate = (input: ScaleInPolicyUpdate, context: __SerdeContext): any => {
  return {
    ...(input.cpuUtilizationPercentage != null && { cpuUtilizationPercentage: input.cpuUtilizationPercentage }),
  };
};

/**
 * serializeAws_restJson1ScaleOutPolicy
 */
const se_ScaleOutPolicy = (input: ScaleOutPolicy, context: __SerdeContext): any => {
  return {
    ...(input.cpuUtilizationPercentage != null && { cpuUtilizationPercentage: input.cpuUtilizationPercentage }),
  };
};

/**
 * serializeAws_restJson1ScaleOutPolicyUpdate
 */
const se_ScaleOutPolicyUpdate = (input: ScaleOutPolicyUpdate, context: __SerdeContext): any => {
  return {
    ...(input.cpuUtilizationPercentage != null && { cpuUtilizationPercentage: input.cpuUtilizationPercentage }),
  };
};

/**
 * serializeAws_restJson1Vpc
 */
const se_Vpc = (input: Vpc, context: __SerdeContext): any => {
  return {
    ...(input.securityGroups != null && { securityGroups: se___listOf__string(input.securityGroups, context) }),
    ...(input.subnets != null && { subnets: se___listOf__string(input.subnets, context) }),
  };
};

/**
 * serializeAws_restJson1WorkerConfiguration
 */
const se_WorkerConfiguration = (input: WorkerConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.revision != null && { revision: input.revision }),
    ...(input.workerConfigurationArn != null && { workerConfigurationArn: input.workerConfigurationArn }),
  };
};

/**
 * serializeAws_restJson1WorkerLogDelivery
 */
const se_WorkerLogDelivery = (input: WorkerLogDelivery, context: __SerdeContext): any => {
  return {
    ...(input.cloudWatchLogs != null && {
      cloudWatchLogs: se_CloudWatchLogsLogDelivery(input.cloudWatchLogs, context),
    }),
    ...(input.firehose != null && { firehose: se_FirehoseLogDelivery(input.firehose, context) }),
    ...(input.s3 != null && { s3: se_S3LogDelivery(input.s3, context) }),
  };
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
 * deserializeAws_restJson1__listOfConnectorSummary
 */
const de___listOfConnectorSummary = (output: any, context: __SerdeContext): ConnectorSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ConnectorSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfCustomPluginSummary
 */
const de___listOfCustomPluginSummary = (output: any, context: __SerdeContext): CustomPluginSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CustomPluginSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfPluginDescription
 */
const de___listOfPluginDescription = (output: any, context: __SerdeContext): PluginDescription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PluginDescription(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfWorkerConfigurationSummary
 */
const de___listOfWorkerConfigurationSummary = (output: any, context: __SerdeContext): WorkerConfigurationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_WorkerConfigurationSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__sensitive__mapOf__string
 */
const de___sensitive__mapOf__string = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1ApacheKafkaClusterDescription
 */
const de_ApacheKafkaClusterDescription = (output: any, context: __SerdeContext): ApacheKafkaClusterDescription => {
  return {
    bootstrapServers: __expectString(output.bootstrapServers),
    vpc: output.vpc != null ? de_VpcDescription(output.vpc, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1AutoScalingDescription
 */
const de_AutoScalingDescription = (output: any, context: __SerdeContext): AutoScalingDescription => {
  return {
    maxWorkerCount: __expectInt32(output.maxWorkerCount),
    mcuCount: __expectInt32(output.mcuCount),
    minWorkerCount: __expectInt32(output.minWorkerCount),
    scaleInPolicy:
      output.scaleInPolicy != null ? de_ScaleInPolicyDescription(output.scaleInPolicy, context) : undefined,
    scaleOutPolicy:
      output.scaleOutPolicy != null ? de_ScaleOutPolicyDescription(output.scaleOutPolicy, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1CapacityDescription
 */
const de_CapacityDescription = (output: any, context: __SerdeContext): CapacityDescription => {
  return {
    autoScaling: output.autoScaling != null ? de_AutoScalingDescription(output.autoScaling, context) : undefined,
    provisionedCapacity:
      output.provisionedCapacity != null
        ? de_ProvisionedCapacityDescription(output.provisionedCapacity, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1CloudWatchLogsLogDeliveryDescription
 */
const de_CloudWatchLogsLogDeliveryDescription = (
  output: any,
  context: __SerdeContext
): CloudWatchLogsLogDeliveryDescription => {
  return {
    enabled: __expectBoolean(output.enabled),
    logGroup: __expectString(output.logGroup),
  } as any;
};

/**
 * deserializeAws_restJson1ConnectorSummary
 */
const de_ConnectorSummary = (output: any, context: __SerdeContext): ConnectorSummary => {
  return {
    capacity: output.capacity != null ? de_CapacityDescription(output.capacity, context) : undefined,
    connectorArn: __expectString(output.connectorArn),
    connectorDescription: __expectString(output.connectorDescription),
    connectorName: __expectString(output.connectorName),
    connectorState: __expectString(output.connectorState),
    creationTime:
      output.creationTime != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.creationTime)) : undefined,
    currentVersion: __expectString(output.currentVersion),
    kafkaCluster: output.kafkaCluster != null ? de_KafkaClusterDescription(output.kafkaCluster, context) : undefined,
    kafkaClusterClientAuthentication:
      output.kafkaClusterClientAuthentication != null
        ? de_KafkaClusterClientAuthenticationDescription(output.kafkaClusterClientAuthentication, context)
        : undefined,
    kafkaClusterEncryptionInTransit:
      output.kafkaClusterEncryptionInTransit != null
        ? de_KafkaClusterEncryptionInTransitDescription(output.kafkaClusterEncryptionInTransit, context)
        : undefined,
    kafkaConnectVersion: __expectString(output.kafkaConnectVersion),
    logDelivery: output.logDelivery != null ? de_LogDeliveryDescription(output.logDelivery, context) : undefined,
    plugins: output.plugins != null ? de___listOfPluginDescription(output.plugins, context) : undefined,
    serviceExecutionRoleArn: __expectString(output.serviceExecutionRoleArn),
    workerConfiguration:
      output.workerConfiguration != null
        ? de_WorkerConfigurationDescription(output.workerConfiguration, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1CustomPluginDescription
 */
const de_CustomPluginDescription = (output: any, context: __SerdeContext): CustomPluginDescription => {
  return {
    customPluginArn: __expectString(output.customPluginArn),
    revision: __expectLong(output.revision),
  } as any;
};

/**
 * deserializeAws_restJson1CustomPluginFileDescription
 */
const de_CustomPluginFileDescription = (output: any, context: __SerdeContext): CustomPluginFileDescription => {
  return {
    fileMd5: __expectString(output.fileMd5),
    fileSize: __expectLong(output.fileSize),
  } as any;
};

/**
 * deserializeAws_restJson1CustomPluginLocationDescription
 */
const de_CustomPluginLocationDescription = (output: any, context: __SerdeContext): CustomPluginLocationDescription => {
  return {
    s3Location: output.s3Location != null ? de_S3LocationDescription(output.s3Location, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1CustomPluginRevisionSummary
 */
const de_CustomPluginRevisionSummary = (output: any, context: __SerdeContext): CustomPluginRevisionSummary => {
  return {
    contentType: __expectString(output.contentType),
    creationTime:
      output.creationTime != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.creationTime)) : undefined,
    description: __expectString(output.description),
    fileDescription:
      output.fileDescription != null ? de_CustomPluginFileDescription(output.fileDescription, context) : undefined,
    location: output.location != null ? de_CustomPluginLocationDescription(output.location, context) : undefined,
    revision: __expectLong(output.revision),
  } as any;
};

/**
 * deserializeAws_restJson1CustomPluginSummary
 */
const de_CustomPluginSummary = (output: any, context: __SerdeContext): CustomPluginSummary => {
  return {
    creationTime:
      output.creationTime != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.creationTime)) : undefined,
    customPluginArn: __expectString(output.customPluginArn),
    customPluginState: __expectString(output.customPluginState),
    description: __expectString(output.description),
    latestRevision:
      output.latestRevision != null ? de_CustomPluginRevisionSummary(output.latestRevision, context) : undefined,
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_restJson1FirehoseLogDeliveryDescription
 */
const de_FirehoseLogDeliveryDescription = (output: any, context: __SerdeContext): FirehoseLogDeliveryDescription => {
  return {
    deliveryStream: __expectString(output.deliveryStream),
    enabled: __expectBoolean(output.enabled),
  } as any;
};

/**
 * deserializeAws_restJson1KafkaClusterClientAuthenticationDescription
 */
const de_KafkaClusterClientAuthenticationDescription = (
  output: any,
  context: __SerdeContext
): KafkaClusterClientAuthenticationDescription => {
  return {
    authenticationType: __expectString(output.authenticationType),
  } as any;
};

/**
 * deserializeAws_restJson1KafkaClusterDescription
 */
const de_KafkaClusterDescription = (output: any, context: __SerdeContext): KafkaClusterDescription => {
  return {
    apacheKafkaCluster:
      output.apacheKafkaCluster != null
        ? de_ApacheKafkaClusterDescription(output.apacheKafkaCluster, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1KafkaClusterEncryptionInTransitDescription
 */
const de_KafkaClusterEncryptionInTransitDescription = (
  output: any,
  context: __SerdeContext
): KafkaClusterEncryptionInTransitDescription => {
  return {
    encryptionType: __expectString(output.encryptionType),
  } as any;
};

/**
 * deserializeAws_restJson1LogDeliveryDescription
 */
const de_LogDeliveryDescription = (output: any, context: __SerdeContext): LogDeliveryDescription => {
  return {
    workerLogDelivery:
      output.workerLogDelivery != null ? de_WorkerLogDeliveryDescription(output.workerLogDelivery, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1PluginDescription
 */
const de_PluginDescription = (output: any, context: __SerdeContext): PluginDescription => {
  return {
    customPlugin: output.customPlugin != null ? de_CustomPluginDescription(output.customPlugin, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ProvisionedCapacityDescription
 */
const de_ProvisionedCapacityDescription = (output: any, context: __SerdeContext): ProvisionedCapacityDescription => {
  return {
    mcuCount: __expectInt32(output.mcuCount),
    workerCount: __expectInt32(output.workerCount),
  } as any;
};

/**
 * deserializeAws_restJson1S3LocationDescription
 */
const de_S3LocationDescription = (output: any, context: __SerdeContext): S3LocationDescription => {
  return {
    bucketArn: __expectString(output.bucketArn),
    fileKey: __expectString(output.fileKey),
    objectVersion: __expectString(output.objectVersion),
  } as any;
};

/**
 * deserializeAws_restJson1S3LogDeliveryDescription
 */
const de_S3LogDeliveryDescription = (output: any, context: __SerdeContext): S3LogDeliveryDescription => {
  return {
    bucket: __expectString(output.bucket),
    enabled: __expectBoolean(output.enabled),
    prefix: __expectString(output.prefix),
  } as any;
};

/**
 * deserializeAws_restJson1ScaleInPolicyDescription
 */
const de_ScaleInPolicyDescription = (output: any, context: __SerdeContext): ScaleInPolicyDescription => {
  return {
    cpuUtilizationPercentage: __expectInt32(output.cpuUtilizationPercentage),
  } as any;
};

/**
 * deserializeAws_restJson1ScaleOutPolicyDescription
 */
const de_ScaleOutPolicyDescription = (output: any, context: __SerdeContext): ScaleOutPolicyDescription => {
  return {
    cpuUtilizationPercentage: __expectInt32(output.cpuUtilizationPercentage),
  } as any;
};

/**
 * deserializeAws_restJson1StateDescription
 */
const de_StateDescription = (output: any, context: __SerdeContext): StateDescription => {
  return {
    code: __expectString(output.code),
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_restJson1VpcDescription
 */
const de_VpcDescription = (output: any, context: __SerdeContext): VpcDescription => {
  return {
    securityGroups: output.securityGroups != null ? de___listOf__string(output.securityGroups, context) : undefined,
    subnets: output.subnets != null ? de___listOf__string(output.subnets, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1WorkerConfigurationDescription
 */
const de_WorkerConfigurationDescription = (output: any, context: __SerdeContext): WorkerConfigurationDescription => {
  return {
    revision: __expectLong(output.revision),
    workerConfigurationArn: __expectString(output.workerConfigurationArn),
  } as any;
};

/**
 * deserializeAws_restJson1WorkerConfigurationRevisionDescription
 */
const de_WorkerConfigurationRevisionDescription = (
  output: any,
  context: __SerdeContext
): WorkerConfigurationRevisionDescription => {
  return {
    creationTime:
      output.creationTime != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.creationTime)) : undefined,
    description: __expectString(output.description),
    propertiesFileContent: __expectString(output.propertiesFileContent),
    revision: __expectLong(output.revision),
  } as any;
};

/**
 * deserializeAws_restJson1WorkerConfigurationRevisionSummary
 */
const de_WorkerConfigurationRevisionSummary = (
  output: any,
  context: __SerdeContext
): WorkerConfigurationRevisionSummary => {
  return {
    creationTime:
      output.creationTime != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.creationTime)) : undefined,
    description: __expectString(output.description),
    revision: __expectLong(output.revision),
  } as any;
};

/**
 * deserializeAws_restJson1WorkerConfigurationSummary
 */
const de_WorkerConfigurationSummary = (output: any, context: __SerdeContext): WorkerConfigurationSummary => {
  return {
    creationTime:
      output.creationTime != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.creationTime)) : undefined,
    description: __expectString(output.description),
    latestRevision:
      output.latestRevision != null ? de_WorkerConfigurationRevisionSummary(output.latestRevision, context) : undefined,
    name: __expectString(output.name),
    workerConfigurationArn: __expectString(output.workerConfigurationArn),
  } as any;
};

/**
 * deserializeAws_restJson1WorkerLogDeliveryDescription
 */
const de_WorkerLogDeliveryDescription = (output: any, context: __SerdeContext): WorkerLogDeliveryDescription => {
  return {
    cloudWatchLogs:
      output.cloudWatchLogs != null
        ? de_CloudWatchLogsLogDeliveryDescription(output.cloudWatchLogs, context)
        : undefined,
    firehose: output.firehose != null ? de_FirehoseLogDeliveryDescription(output.firehose, context) : undefined,
    s3: output.s3 != null ? de_S3LogDeliveryDescription(output.s3, context) : undefined,
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
