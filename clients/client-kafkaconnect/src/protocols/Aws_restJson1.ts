// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  resolvedPath as __resolvedPath,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { CreateConnectorCommandInput, CreateConnectorCommandOutput } from "../commands/CreateConnectorCommand";
import { CreateCustomPluginCommandInput, CreateCustomPluginCommandOutput } from "../commands/CreateCustomPluginCommand";
import {
  CreateWorkerConfigurationCommandInput,
  CreateWorkerConfigurationCommandOutput,
} from "../commands/CreateWorkerConfigurationCommand";
import { DeleteConnectorCommandInput, DeleteConnectorCommandOutput } from "../commands/DeleteConnectorCommand";
import { DeleteCustomPluginCommandInput, DeleteCustomPluginCommandOutput } from "../commands/DeleteCustomPluginCommand";
import {
  DeleteWorkerConfigurationCommandInput,
  DeleteWorkerConfigurationCommandOutput,
} from "../commands/DeleteWorkerConfigurationCommand";
import { DescribeConnectorCommandInput, DescribeConnectorCommandOutput } from "../commands/DescribeConnectorCommand";
import {
  DescribeConnectorOperationCommandInput,
  DescribeConnectorOperationCommandOutput,
} from "../commands/DescribeConnectorOperationCommand";
import {
  DescribeCustomPluginCommandInput,
  DescribeCustomPluginCommandOutput,
} from "../commands/DescribeCustomPluginCommand";
import {
  DescribeWorkerConfigurationCommandInput,
  DescribeWorkerConfigurationCommandOutput,
} from "../commands/DescribeWorkerConfigurationCommand";
import {
  ListConnectorOperationsCommandInput,
  ListConnectorOperationsCommandOutput,
} from "../commands/ListConnectorOperationsCommand";
import { ListConnectorsCommandInput, ListConnectorsCommandOutput } from "../commands/ListConnectorsCommand";
import { ListCustomPluginsCommandInput, ListCustomPluginsCommandOutput } from "../commands/ListCustomPluginsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  ListWorkerConfigurationsCommandInput,
  ListWorkerConfigurationsCommandOutput,
} from "../commands/ListWorkerConfigurationsCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateConnectorCommandInput, UpdateConnectorCommandOutput } from "../commands/UpdateConnectorCommand";
import { KafkaConnectServiceException as __BaseException } from "../models/KafkaConnectServiceException";
import {
  ApacheKafkaCluster,
  AutoScaling,
  AutoScalingUpdate,
  BadRequestException,
  Capacity,
  CapacityUpdate,
  CloudWatchLogsLogDelivery,
  ConflictException,
  ConnectorOperationSummary,
  ConnectorSummary,
  CustomPlugin,
  CustomPluginLocation,
  CustomPluginRevisionSummary,
  CustomPluginSummary,
  FirehoseLogDelivery,
  ForbiddenException,
  InternalServerErrorException,
  KafkaCluster,
  KafkaClusterClientAuthentication,
  KafkaClusterEncryptionInTransit,
  LogDelivery,
  NotFoundException,
  Plugin,
  ProvisionedCapacity,
  ProvisionedCapacityUpdate,
  S3Location,
  S3LogDelivery,
  ScaleInPolicy,
  ScaleInPolicyUpdate,
  ScaleOutPolicy,
  ScaleOutPolicyUpdate,
  ServiceUnavailableException,
  TooManyRequestsException,
  UnauthorizedException,
  Vpc,
  WorkerConfiguration,
  WorkerConfigurationRevisionDescription,
  WorkerConfigurationRevisionSummary,
  WorkerConfigurationSummary,
  WorkerLogDelivery,
} from "../models/models_0";

/**
 * serializeAws_restJson1CreateConnectorCommand
 */
export const se_CreateConnectorCommand = async (
  input: CreateConnectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/connectors");
  let body: any;
  body = JSON.stringify(
    take(input, {
      capacity: (_) => _json(_),
      connectorConfiguration: (_) => _json(_),
      connectorDescription: [],
      connectorName: [],
      kafkaCluster: (_) => _json(_),
      kafkaClusterClientAuthentication: (_) => _json(_),
      kafkaClusterEncryptionInTransit: (_) => _json(_),
      kafkaConnectVersion: [],
      logDelivery: (_) => _json(_),
      plugins: (_) => _json(_),
      serviceExecutionRoleArn: [],
      tags: (_) => _json(_),
      workerConfiguration: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateCustomPluginCommand
 */
export const se_CreateCustomPluginCommand = async (
  input: CreateCustomPluginCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/custom-plugins");
  let body: any;
  body = JSON.stringify(
    take(input, {
      contentType: [],
      description: [],
      location: (_) => _json(_),
      name: [],
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateWorkerConfigurationCommand
 */
export const se_CreateWorkerConfigurationCommand = async (
  input: CreateWorkerConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/worker-configurations");
  let body: any;
  body = JSON.stringify(
    take(input, {
      description: [],
      name: [],
      propertiesFileContent: [],
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteConnectorCommand
 */
export const se_DeleteConnectorCommand = async (
  input: DeleteConnectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/connectors/{connectorArn}");
  b.p("connectorArn", () => input.connectorArn!, "{connectorArn}", false);
  const query: any = map({
    [_cV]: [, input[_cV]!],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteCustomPluginCommand
 */
export const se_DeleteCustomPluginCommand = async (
  input: DeleteCustomPluginCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/custom-plugins/{customPluginArn}");
  b.p("customPluginArn", () => input.customPluginArn!, "{customPluginArn}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteWorkerConfigurationCommand
 */
export const se_DeleteWorkerConfigurationCommand = async (
  input: DeleteWorkerConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/worker-configurations/{workerConfigurationArn}");
  b.p("workerConfigurationArn", () => input.workerConfigurationArn!, "{workerConfigurationArn}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeConnectorCommand
 */
export const se_DescribeConnectorCommand = async (
  input: DescribeConnectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/connectors/{connectorArn}");
  b.p("connectorArn", () => input.connectorArn!, "{connectorArn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeConnectorOperationCommand
 */
export const se_DescribeConnectorOperationCommand = async (
  input: DescribeConnectorOperationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/connectorOperations/{connectorOperationArn}");
  b.p("connectorOperationArn", () => input.connectorOperationArn!, "{connectorOperationArn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeCustomPluginCommand
 */
export const se_DescribeCustomPluginCommand = async (
  input: DescribeCustomPluginCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/custom-plugins/{customPluginArn}");
  b.p("customPluginArn", () => input.customPluginArn!, "{customPluginArn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeWorkerConfigurationCommand
 */
export const se_DescribeWorkerConfigurationCommand = async (
  input: DescribeWorkerConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/worker-configurations/{workerConfigurationArn}");
  b.p("workerConfigurationArn", () => input.workerConfigurationArn!, "{workerConfigurationArn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListConnectorOperationsCommand
 */
export const se_ListConnectorOperationsCommand = async (
  input: ListConnectorOperationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/connectors/{connectorArn}/operations");
  b.p("connectorArn", () => input.connectorArn!, "{connectorArn}", false);
  const query: any = map({
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListConnectorsCommand
 */
export const se_ListConnectorsCommand = async (
  input: ListConnectorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/connectors");
  const query: any = map({
    [_cNP]: [, input[_cNP]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListCustomPluginsCommand
 */
export const se_ListCustomPluginsCommand = async (
  input: ListCustomPluginsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/custom-plugins");
  const query: any = map({
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
    [_nP]: [, input[_nP]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/tags/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListWorkerConfigurationsCommand
 */
export const se_ListWorkerConfigurationsCommand = async (
  input: ListWorkerConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/worker-configurations");
  const query: any = map({
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
    [_nP]: [, input[_nP]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/tags/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/tags/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  const query: any = map({
    [_tK]: [__expectNonNull(input.tagKeys, `tagKeys`) != null, () => input[_tK]! || []],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateConnectorCommand
 */
export const se_UpdateConnectorCommand = async (
  input: UpdateConnectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/connectors/{connectorArn}");
  b.p("connectorArn", () => input.connectorArn!, "{connectorArn}", false);
  const query: any = map({
    [_cV]: [, __expectNonNull(input[_cV]!, `currentVersion`)],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      capacity: (_) => _json(_),
      connectorConfiguration: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).q(query).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1CreateConnectorCommand
 */
export const de_CreateConnectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConnectorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    connectorArn: __expectString,
    connectorName: __expectString,
    connectorState: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateCustomPluginCommand
 */
export const de_CreateCustomPluginCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCustomPluginCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    customPluginArn: __expectString,
    customPluginState: __expectString,
    name: __expectString,
    revision: __expectLong,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateWorkerConfigurationCommand
 */
export const de_CreateWorkerConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorkerConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    creationTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    latestRevision: (_) => de_WorkerConfigurationRevisionSummary(_, context),
    name: __expectString,
    workerConfigurationArn: __expectString,
    workerConfigurationState: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteConnectorCommand
 */
export const de_DeleteConnectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConnectorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    connectorArn: __expectString,
    connectorState: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteCustomPluginCommand
 */
export const de_DeleteCustomPluginCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCustomPluginCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    customPluginArn: __expectString,
    customPluginState: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteWorkerConfigurationCommand
 */
export const de_DeleteWorkerConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWorkerConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    workerConfigurationArn: __expectString,
    workerConfigurationState: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeConnectorCommand
 */
export const de_DescribeConnectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConnectorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    capacity: _json,
    connectorArn: __expectString,
    connectorConfiguration: _json,
    connectorDescription: __expectString,
    connectorName: __expectString,
    connectorState: __expectString,
    creationTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    currentVersion: __expectString,
    kafkaCluster: _json,
    kafkaClusterClientAuthentication: _json,
    kafkaClusterEncryptionInTransit: _json,
    kafkaConnectVersion: __expectString,
    logDelivery: _json,
    plugins: _json,
    serviceExecutionRoleArn: __expectString,
    stateDescription: _json,
    workerConfiguration: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeConnectorOperationCommand
 */
export const de_DescribeConnectorOperationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConnectorOperationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    connectorArn: __expectString,
    connectorOperationArn: __expectString,
    connectorOperationState: __expectString,
    connectorOperationType: __expectString,
    creationTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    endTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    errorInfo: _json,
    operationSteps: _json,
    originConnectorConfiguration: _json,
    originWorkerSetting: _json,
    targetConnectorConfiguration: _json,
    targetWorkerSetting: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeCustomPluginCommand
 */
export const de_DescribeCustomPluginCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCustomPluginCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    creationTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    customPluginArn: __expectString,
    customPluginState: __expectString,
    description: __expectString,
    latestRevision: (_) => de_CustomPluginRevisionSummary(_, context),
    name: __expectString,
    stateDescription: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeWorkerConfigurationCommand
 */
export const de_DescribeWorkerConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorkerConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    creationTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    description: __expectString,
    latestRevision: (_) => de_WorkerConfigurationRevisionDescription(_, context),
    name: __expectString,
    workerConfigurationArn: __expectString,
    workerConfigurationState: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListConnectorOperationsCommand
 */
export const de_ListConnectorOperationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConnectorOperationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    connectorOperations: (_) => de___listOfConnectorOperationSummary(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListConnectorsCommand
 */
export const de_ListConnectorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConnectorsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    connectors: (_) => de___listOfConnectorSummary(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListCustomPluginsCommand
 */
export const de_ListCustomPluginsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCustomPluginsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    customPlugins: (_) => de___listOfCustomPluginSummary(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListWorkerConfigurationsCommand
 */
export const de_ListWorkerConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkerConfigurationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    workerConfigurations: (_) => de___listOfWorkerConfigurationSummary(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateConnectorCommand
 */
export const de_UpdateConnectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConnectorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    connectorArn: __expectString,
    connectorOperationArn: __expectString,
    connectorState: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserialize_Aws_restJson1CommandError
 */
const de_CommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<never> => {
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      }) as never;
  }
};

const throwDefaultError = withBaseException(__BaseException);
/**
 * deserializeAws_restJson1BadRequestExceptionRes
 */
const de_BadRequestExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<BadRequestException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new UnauthorizedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se___listOf__string omitted.

// se___listOfPlugin omitted.

// se_ApacheKafkaCluster omitted.

// se_AutoScaling omitted.

// se_AutoScalingUpdate omitted.

// se_Capacity omitted.

// se_CapacityUpdate omitted.

// se_CloudWatchLogsLogDelivery omitted.

// se_ConnectorConfiguration omitted.

// se_ConnectorConfigurationUpdate omitted.

// se_CustomPlugin omitted.

// se_CustomPluginLocation omitted.

// se_FirehoseLogDelivery omitted.

// se_KafkaCluster omitted.

// se_KafkaClusterClientAuthentication omitted.

// se_KafkaClusterEncryptionInTransit omitted.

// se_LogDelivery omitted.

// se_Plugin omitted.

// se_ProvisionedCapacity omitted.

// se_ProvisionedCapacityUpdate omitted.

// se_S3Location omitted.

// se_S3LogDelivery omitted.

// se_ScaleInPolicy omitted.

// se_ScaleInPolicyUpdate omitted.

// se_ScaleOutPolicy omitted.

// se_ScaleOutPolicyUpdate omitted.

// se_Tags omitted.

// se_Vpc omitted.

// se_WorkerConfiguration omitted.

// se_WorkerLogDelivery omitted.

// de___listOf__string omitted.

// de___listOfConnectorOperationStep omitted.

/**
 * deserializeAws_restJson1__listOfConnectorOperationSummary
 */
const de___listOfConnectorOperationSummary = (output: any, context: __SerdeContext): ConnectorOperationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ConnectorOperationSummary(entry, context);
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
      return de_CustomPluginSummary(entry, context);
    });
  return retVal;
};

// de___listOfPluginDescription omitted.

/**
 * deserializeAws_restJson1__listOfWorkerConfigurationSummary
 */
const de___listOfWorkerConfigurationSummary = (output: any, context: __SerdeContext): WorkerConfigurationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_WorkerConfigurationSummary(entry, context);
    });
  return retVal;
};

// de_ApacheKafkaClusterDescription omitted.

// de_AutoScalingDescription omitted.

// de_CapacityDescription omitted.

// de_CloudWatchLogsLogDeliveryDescription omitted.

// de_ConnectorConfiguration omitted.

// de_ConnectorOperationStep omitted.

/**
 * deserializeAws_restJson1ConnectorOperationSummary
 */
const de_ConnectorOperationSummary = (output: any, context: __SerdeContext): ConnectorOperationSummary => {
  return take(output, {
    connectorOperationArn: __expectString,
    connectorOperationState: __expectString,
    connectorOperationType: __expectString,
    creationTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    endTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1ConnectorSummary
 */
const de_ConnectorSummary = (output: any, context: __SerdeContext): ConnectorSummary => {
  return take(output, {
    capacity: _json,
    connectorArn: __expectString,
    connectorDescription: __expectString,
    connectorName: __expectString,
    connectorState: __expectString,
    creationTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    currentVersion: __expectString,
    kafkaCluster: _json,
    kafkaClusterClientAuthentication: _json,
    kafkaClusterEncryptionInTransit: _json,
    kafkaConnectVersion: __expectString,
    logDelivery: _json,
    plugins: _json,
    serviceExecutionRoleArn: __expectString,
    workerConfiguration: _json,
  }) as any;
};

// de_CustomPluginDescription omitted.

// de_CustomPluginFileDescription omitted.

// de_CustomPluginLocationDescription omitted.

/**
 * deserializeAws_restJson1CustomPluginRevisionSummary
 */
const de_CustomPluginRevisionSummary = (output: any, context: __SerdeContext): CustomPluginRevisionSummary => {
  return take(output, {
    contentType: __expectString,
    creationTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    description: __expectString,
    fileDescription: _json,
    location: _json,
    revision: __expectLong,
  }) as any;
};

/**
 * deserializeAws_restJson1CustomPluginSummary
 */
const de_CustomPluginSummary = (output: any, context: __SerdeContext): CustomPluginSummary => {
  return take(output, {
    creationTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    customPluginArn: __expectString,
    customPluginState: __expectString,
    description: __expectString,
    latestRevision: (_: any) => de_CustomPluginRevisionSummary(_, context),
    name: __expectString,
  }) as any;
};

// de_FirehoseLogDeliveryDescription omitted.

// de_KafkaClusterClientAuthenticationDescription omitted.

// de_KafkaClusterDescription omitted.

// de_KafkaClusterEncryptionInTransitDescription omitted.

// de_LogDeliveryDescription omitted.

// de_PluginDescription omitted.

// de_ProvisionedCapacityDescription omitted.

// de_S3LocationDescription omitted.

// de_S3LogDeliveryDescription omitted.

// de_ScaleInPolicyDescription omitted.

// de_ScaleOutPolicyDescription omitted.

// de_StateDescription omitted.

// de_Tags omitted.

// de_VpcDescription omitted.

// de_WorkerConfigurationDescription omitted.

/**
 * deserializeAws_restJson1WorkerConfigurationRevisionDescription
 */
const de_WorkerConfigurationRevisionDescription = (
  output: any,
  context: __SerdeContext
): WorkerConfigurationRevisionDescription => {
  return take(output, {
    creationTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    description: __expectString,
    propertiesFileContent: __expectString,
    revision: __expectLong,
  }) as any;
};

/**
 * deserializeAws_restJson1WorkerConfigurationRevisionSummary
 */
const de_WorkerConfigurationRevisionSummary = (
  output: any,
  context: __SerdeContext
): WorkerConfigurationRevisionSummary => {
  return take(output, {
    creationTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    description: __expectString,
    revision: __expectLong,
  }) as any;
};

/**
 * deserializeAws_restJson1WorkerConfigurationSummary
 */
const de_WorkerConfigurationSummary = (output: any, context: __SerdeContext): WorkerConfigurationSummary => {
  return take(output, {
    creationTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    description: __expectString,
    latestRevision: (_: any) => de_WorkerConfigurationRevisionSummary(_, context),
    name: __expectString,
    workerConfigurationArn: __expectString,
    workerConfigurationState: __expectString,
  }) as any;
};

// de_WorkerLogDeliveryDescription omitted.

// de_WorkerSetting omitted.

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const _cNP = "connectorNamePrefix";
const _cV = "currentVersion";
const _mR = "maxResults";
const _nP = "namePrefix";
const _nT = "nextToken";
const _tK = "tagKeys";
