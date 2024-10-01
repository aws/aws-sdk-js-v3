// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map,
  parseEpochTimestamp as __parseEpochTimestamp,
  resolvedPath as __resolvedPath,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";
import { v4 as generateIdempotencyToken } from "uuid";

import {
  CreateBillOfMaterialsImportJobCommandInput,
  CreateBillOfMaterialsImportJobCommandOutput,
} from "../commands/CreateBillOfMaterialsImportJobCommand";
import {
  CreateDataIntegrationFlowCommandInput,
  CreateDataIntegrationFlowCommandOutput,
} from "../commands/CreateDataIntegrationFlowCommand";
import {
  CreateDataLakeDatasetCommandInput,
  CreateDataLakeDatasetCommandOutput,
} from "../commands/CreateDataLakeDatasetCommand";
import {
  DeleteDataIntegrationFlowCommandInput,
  DeleteDataIntegrationFlowCommandOutput,
} from "../commands/DeleteDataIntegrationFlowCommand";
import {
  DeleteDataLakeDatasetCommandInput,
  DeleteDataLakeDatasetCommandOutput,
} from "../commands/DeleteDataLakeDatasetCommand";
import {
  GetBillOfMaterialsImportJobCommandInput,
  GetBillOfMaterialsImportJobCommandOutput,
} from "../commands/GetBillOfMaterialsImportJobCommand";
import {
  GetDataIntegrationFlowCommandInput,
  GetDataIntegrationFlowCommandOutput,
} from "../commands/GetDataIntegrationFlowCommand";
import { GetDataLakeDatasetCommandInput, GetDataLakeDatasetCommandOutput } from "../commands/GetDataLakeDatasetCommand";
import {
  ListDataIntegrationFlowsCommandInput,
  ListDataIntegrationFlowsCommandOutput,
} from "../commands/ListDataIntegrationFlowsCommand";
import {
  ListDataLakeDatasetsCommandInput,
  ListDataLakeDatasetsCommandOutput,
} from "../commands/ListDataLakeDatasetsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  SendDataIntegrationEventCommandInput,
  SendDataIntegrationEventCommandOutput,
} from "../commands/SendDataIntegrationEventCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateDataIntegrationFlowCommandInput,
  UpdateDataIntegrationFlowCommandOutput,
} from "../commands/UpdateDataIntegrationFlowCommand";
import {
  UpdateDataLakeDatasetCommandInput,
  UpdateDataLakeDatasetCommandOutput,
} from "../commands/UpdateDataLakeDatasetCommand";
import {
  AccessDeniedException,
  ConflictException,
  DataIntegrationFlow,
  DataIntegrationFlowDatasetOptions,
  DataIntegrationFlowDatasetSourceConfiguration,
  DataIntegrationFlowDatasetTargetConfiguration,
  DataIntegrationFlowS3Options,
  DataIntegrationFlowS3SourceConfiguration,
  DataIntegrationFlowS3TargetConfiguration,
  DataIntegrationFlowSource,
  DataIntegrationFlowSQLTransformationConfiguration,
  DataIntegrationFlowTarget,
  DataIntegrationFlowTransformation,
  DataLakeDataset,
  DataLakeDatasetSchema,
  DataLakeDatasetSchemaField,
  InternalServerException,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  ThrottlingException,
  ValidationException,
} from "../models/models_0";
import { SupplyChainServiceException as __BaseException } from "../models/SupplyChainServiceException";

/**
 * serializeAws_restJson1CreateBillOfMaterialsImportJobCommand
 */
export const se_CreateBillOfMaterialsImportJobCommand = async (
  input: CreateBillOfMaterialsImportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/api/configuration/instances/{instanceId}/bill-of-materials-import-jobs");
  b.p("instanceId", () => input.instanceId!, "{instanceId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      s3uri: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateDataIntegrationFlowCommand
 */
export const se_CreateDataIntegrationFlowCommand = async (
  input: CreateDataIntegrationFlowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/api/data-integration/instance/{instanceId}/data-integration-flows/{name}");
  b.p("instanceId", () => input.instanceId!, "{instanceId}", false);
  b.p("name", () => input.name!, "{name}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      sources: (_) => _json(_),
      tags: (_) => _json(_),
      target: (_) => _json(_),
      transformation: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateDataLakeDatasetCommand
 */
export const se_CreateDataLakeDatasetCommand = async (
  input: CreateDataLakeDatasetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/api/datalake/instance/{instanceId}/namespaces/{namespace}/datasets/{name}");
  b.p("instanceId", () => input.instanceId!, "{instanceId}", false);
  b.p("namespace", () => input.namespace!, "{namespace}", false);
  b.p("name", () => input.name!, "{name}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      description: [],
      schema: (_) => _json(_),
      tags: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteDataIntegrationFlowCommand
 */
export const se_DeleteDataIntegrationFlowCommand = async (
  input: DeleteDataIntegrationFlowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/api/data-integration/instance/{instanceId}/data-integration-flows/{name}");
  b.p("instanceId", () => input.instanceId!, "{instanceId}", false);
  b.p("name", () => input.name!, "{name}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteDataLakeDatasetCommand
 */
export const se_DeleteDataLakeDatasetCommand = async (
  input: DeleteDataLakeDatasetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/api/datalake/instance/{instanceId}/namespaces/{namespace}/datasets/{name}");
  b.p("instanceId", () => input.instanceId!, "{instanceId}", false);
  b.p("namespace", () => input.namespace!, "{namespace}", false);
  b.p("name", () => input.name!, "{name}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetBillOfMaterialsImportJobCommand
 */
export const se_GetBillOfMaterialsImportJobCommand = async (
  input: GetBillOfMaterialsImportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/api/configuration/instances/{instanceId}/bill-of-materials-import-jobs/{jobId}");
  b.p("instanceId", () => input.instanceId!, "{instanceId}", false);
  b.p("jobId", () => input.jobId!, "{jobId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetDataIntegrationFlowCommand
 */
export const se_GetDataIntegrationFlowCommand = async (
  input: GetDataIntegrationFlowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/api/data-integration/instance/{instanceId}/data-integration-flows/{name}");
  b.p("instanceId", () => input.instanceId!, "{instanceId}", false);
  b.p("name", () => input.name!, "{name}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetDataLakeDatasetCommand
 */
export const se_GetDataLakeDatasetCommand = async (
  input: GetDataLakeDatasetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/api/datalake/instance/{instanceId}/namespaces/{namespace}/datasets/{name}");
  b.p("instanceId", () => input.instanceId!, "{instanceId}", false);
  b.p("namespace", () => input.namespace!, "{namespace}", false);
  b.p("name", () => input.name!, "{name}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListDataIntegrationFlowsCommand
 */
export const se_ListDataIntegrationFlowsCommand = async (
  input: ListDataIntegrationFlowsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/api/data-integration/instance/{instanceId}/data-integration-flows");
  b.p("instanceId", () => input.instanceId!, "{instanceId}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListDataLakeDatasetsCommand
 */
export const se_ListDataLakeDatasetsCommand = async (
  input: ListDataLakeDatasetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/api/datalake/instance/{instanceId}/namespaces/{namespace}/datasets");
  b.p("instanceId", () => input.instanceId!, "{instanceId}", false);
  b.p("namespace", () => input.namespace!, "{namespace}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
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
  b.bp("/api/tags/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1SendDataIntegrationEventCommand
 */
export const se_SendDataIntegrationEventCommand = async (
  input: SendDataIntegrationEventCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/api-data/data-integration/instance/{instanceId}/data-integration-events");
  b.p("instanceId", () => input.instanceId!, "{instanceId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      data: [],
      eventGroupId: [],
      eventTimestamp: (_) => _.getTime() / 1_000,
      eventType: [],
    })
  );
  b.m("POST").h(headers).b(body);
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
  b.bp("/api/tags/{resourceArn}");
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
  b.bp("/api/tags/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  const query: any = map({
    [_tK]: [__expectNonNull(input.tagKeys, `tagKeys`) != null, () => input[_tK]! || []],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateDataIntegrationFlowCommand
 */
export const se_UpdateDataIntegrationFlowCommand = async (
  input: UpdateDataIntegrationFlowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/api/data-integration/instance/{instanceId}/data-integration-flows/{name}");
  b.p("instanceId", () => input.instanceId!, "{instanceId}", false);
  b.p("name", () => input.name!, "{name}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      sources: (_) => _json(_),
      target: (_) => _json(_),
      transformation: (_) => _json(_),
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateDataLakeDatasetCommand
 */
export const se_UpdateDataLakeDatasetCommand = async (
  input: UpdateDataLakeDatasetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/api/datalake/instance/{instanceId}/namespaces/{namespace}/datasets/{name}");
  b.p("instanceId", () => input.instanceId!, "{instanceId}", false);
  b.p("namespace", () => input.namespace!, "{namespace}", false);
  b.p("name", () => input.name!, "{name}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      description: [],
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1CreateBillOfMaterialsImportJobCommand
 */
export const de_CreateBillOfMaterialsImportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBillOfMaterialsImportJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    jobId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateDataIntegrationFlowCommand
 */
export const de_CreateDataIntegrationFlowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDataIntegrationFlowCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    instanceId: __expectString,
    name: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateDataLakeDatasetCommand
 */
export const de_CreateDataLakeDatasetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDataLakeDatasetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    dataset: (_) => de_DataLakeDataset(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteDataIntegrationFlowCommand
 */
export const de_DeleteDataIntegrationFlowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDataIntegrationFlowCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    instanceId: __expectString,
    name: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteDataLakeDatasetCommand
 */
export const de_DeleteDataLakeDatasetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDataLakeDatasetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    instanceId: __expectString,
    name: __expectString,
    namespace: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetBillOfMaterialsImportJobCommand
 */
export const de_GetBillOfMaterialsImportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBillOfMaterialsImportJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    job: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetDataIntegrationFlowCommand
 */
export const de_GetDataIntegrationFlowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataIntegrationFlowCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    flow: (_) => de_DataIntegrationFlow(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetDataLakeDatasetCommand
 */
export const de_GetDataLakeDatasetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataLakeDatasetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    dataset: (_) => de_DataLakeDataset(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListDataIntegrationFlowsCommand
 */
export const de_ListDataIntegrationFlowsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDataIntegrationFlowsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    flows: (_) => de_DataIntegrationFlowList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListDataLakeDatasetsCommand
 */
export const de_ListDataLakeDatasetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDataLakeDatasetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    datasets: (_) => de_DataLakeDatasetList(_, context),
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
 * deserializeAws_restJson1SendDataIntegrationEventCommand
 */
export const de_SendDataIntegrationEventCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendDataIntegrationEventCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    eventId: __expectString,
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
 * deserializeAws_restJson1UpdateDataIntegrationFlowCommand
 */
export const de_UpdateDataIntegrationFlowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDataIntegrationFlowCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    flow: (_) => de_DataIntegrationFlow(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateDataLakeDatasetCommand
 */
export const de_UpdateDataLakeDatasetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDataLakeDatasetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    dataset: (_) => de_DataLakeDataset(_, context),
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
    case "AccessDeniedException":
    case "com.amazonaws.supplychain#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.supplychain#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.supplychain#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.supplychain#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.supplychain#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.supplychain#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.supplychain#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new AccessDeniedException({
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
 * deserializeAws_restJson1InternalServerExceptionRes
 */
const de_InternalServerExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InternalServerException({
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ServiceQuotaExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ThrottlingExceptionRes
 */
const de_ThrottlingExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ThrottlingException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ValidationExceptionRes
 */
const de_ValidationExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ValidationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_DataIntegrationFlowDatasetOptions omitted.

// se_DataIntegrationFlowDatasetSourceConfiguration omitted.

// se_DataIntegrationFlowDatasetTargetConfiguration omitted.

// se_DataIntegrationFlowS3Options omitted.

// se_DataIntegrationFlowS3SourceConfiguration omitted.

// se_DataIntegrationFlowS3TargetConfiguration omitted.

// se_DataIntegrationFlowSource omitted.

// se_DataIntegrationFlowSourceList omitted.

// se_DataIntegrationFlowSQLTransformationConfiguration omitted.

// se_DataIntegrationFlowTarget omitted.

// se_DataIntegrationFlowTransformation omitted.

// se_DataLakeDatasetSchema omitted.

// se_DataLakeDatasetSchemaField omitted.

// se_DataLakeDatasetSchemaFieldList omitted.

// se_TagMap omitted.

// de_BillOfMaterialsImportJob omitted.

/**
 * deserializeAws_restJson1DataIntegrationFlow
 */
const de_DataIntegrationFlow = (output: any, context: __SerdeContext): DataIntegrationFlow => {
  return take(output, {
    createdTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    instanceId: __expectString,
    lastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
    sources: _json,
    target: _json,
    transformation: _json,
  }) as any;
};

// de_DataIntegrationFlowDatasetOptions omitted.

// de_DataIntegrationFlowDatasetSourceConfiguration omitted.

// de_DataIntegrationFlowDatasetTargetConfiguration omitted.

/**
 * deserializeAws_restJson1DataIntegrationFlowList
 */
const de_DataIntegrationFlowList = (output: any, context: __SerdeContext): DataIntegrationFlow[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DataIntegrationFlow(entry, context);
    });
  return retVal;
};

// de_DataIntegrationFlowS3Options omitted.

// de_DataIntegrationFlowS3SourceConfiguration omitted.

// de_DataIntegrationFlowS3TargetConfiguration omitted.

// de_DataIntegrationFlowSource omitted.

// de_DataIntegrationFlowSourceList omitted.

// de_DataIntegrationFlowSQLTransformationConfiguration omitted.

// de_DataIntegrationFlowTarget omitted.

// de_DataIntegrationFlowTransformation omitted.

/**
 * deserializeAws_restJson1DataLakeDataset
 */
const de_DataLakeDataset = (output: any, context: __SerdeContext): DataLakeDataset => {
  return take(output, {
    arn: __expectString,
    createdTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    instanceId: __expectString,
    lastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
    namespace: __expectString,
    schema: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1DataLakeDatasetList
 */
const de_DataLakeDatasetList = (output: any, context: __SerdeContext): DataLakeDataset[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DataLakeDataset(entry, context);
    });
  return retVal;
};

// de_DataLakeDatasetSchema omitted.

// de_DataLakeDatasetSchemaField omitted.

// de_DataLakeDatasetSchemaFieldList omitted.

// de_TagMap omitted.

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

const _mR = "maxResults";
const _nT = "nextToken";
const _tK = "tagKeys";
