// smithy-typescript generated code
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse,
  isValidHostname as __isValidHostname,
} from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  expectUnion as __expectUnion,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map as __map,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  resolvedPath as __resolvedPath,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  DocumentType as __DocumentType,
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SdkStreamSerdeContext as __SdkStreamSerdeContext,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";
import { v4 as generateIdempotencyToken } from "uuid";

import { BatchDeleteReadSetCommandInput, BatchDeleteReadSetCommandOutput } from "../commands/BatchDeleteReadSetCommand";
import {
  CancelAnnotationImportJobCommandInput,
  CancelAnnotationImportJobCommandOutput,
} from "../commands/CancelAnnotationImportJobCommand";
import { CancelRunCommandInput, CancelRunCommandOutput } from "../commands/CancelRunCommand";
import {
  CancelVariantImportJobCommandInput,
  CancelVariantImportJobCommandOutput,
} from "../commands/CancelVariantImportJobCommand";
import {
  CreateAnnotationStoreCommandInput,
  CreateAnnotationStoreCommandOutput,
} from "../commands/CreateAnnotationStoreCommand";
import {
  CreateReferenceStoreCommandInput,
  CreateReferenceStoreCommandOutput,
} from "../commands/CreateReferenceStoreCommand";
import { CreateRunGroupCommandInput, CreateRunGroupCommandOutput } from "../commands/CreateRunGroupCommand";
import {
  CreateSequenceStoreCommandInput,
  CreateSequenceStoreCommandOutput,
} from "../commands/CreateSequenceStoreCommand";
import { CreateVariantStoreCommandInput, CreateVariantStoreCommandOutput } from "../commands/CreateVariantStoreCommand";
import { CreateWorkflowCommandInput, CreateWorkflowCommandOutput } from "../commands/CreateWorkflowCommand";
import {
  DeleteAnnotationStoreCommandInput,
  DeleteAnnotationStoreCommandOutput,
} from "../commands/DeleteAnnotationStoreCommand";
import { DeleteReferenceCommandInput, DeleteReferenceCommandOutput } from "../commands/DeleteReferenceCommand";
import {
  DeleteReferenceStoreCommandInput,
  DeleteReferenceStoreCommandOutput,
} from "../commands/DeleteReferenceStoreCommand";
import { DeleteRunCommandInput, DeleteRunCommandOutput } from "../commands/DeleteRunCommand";
import { DeleteRunGroupCommandInput, DeleteRunGroupCommandOutput } from "../commands/DeleteRunGroupCommand";
import {
  DeleteSequenceStoreCommandInput,
  DeleteSequenceStoreCommandOutput,
} from "../commands/DeleteSequenceStoreCommand";
import { DeleteVariantStoreCommandInput, DeleteVariantStoreCommandOutput } from "../commands/DeleteVariantStoreCommand";
import { DeleteWorkflowCommandInput, DeleteWorkflowCommandOutput } from "../commands/DeleteWorkflowCommand";
import {
  GetAnnotationImportJobCommandInput,
  GetAnnotationImportJobCommandOutput,
} from "../commands/GetAnnotationImportJobCommand";
import { GetAnnotationStoreCommandInput, GetAnnotationStoreCommandOutput } from "../commands/GetAnnotationStoreCommand";
import {
  GetReadSetActivationJobCommandInput,
  GetReadSetActivationJobCommandOutput,
} from "../commands/GetReadSetActivationJobCommand";
import { GetReadSetCommandInput, GetReadSetCommandOutput } from "../commands/GetReadSetCommand";
import {
  GetReadSetExportJobCommandInput,
  GetReadSetExportJobCommandOutput,
} from "../commands/GetReadSetExportJobCommand";
import {
  GetReadSetImportJobCommandInput,
  GetReadSetImportJobCommandOutput,
} from "../commands/GetReadSetImportJobCommand";
import { GetReadSetMetadataCommandInput, GetReadSetMetadataCommandOutput } from "../commands/GetReadSetMetadataCommand";
import { GetReferenceCommandInput, GetReferenceCommandOutput } from "../commands/GetReferenceCommand";
import {
  GetReferenceImportJobCommandInput,
  GetReferenceImportJobCommandOutput,
} from "../commands/GetReferenceImportJobCommand";
import {
  GetReferenceMetadataCommandInput,
  GetReferenceMetadataCommandOutput,
} from "../commands/GetReferenceMetadataCommand";
import { GetReferenceStoreCommandInput, GetReferenceStoreCommandOutput } from "../commands/GetReferenceStoreCommand";
import { GetRunCommandInput, GetRunCommandOutput } from "../commands/GetRunCommand";
import { GetRunGroupCommandInput, GetRunGroupCommandOutput } from "../commands/GetRunGroupCommand";
import { GetRunTaskCommandInput, GetRunTaskCommandOutput } from "../commands/GetRunTaskCommand";
import { GetSequenceStoreCommandInput, GetSequenceStoreCommandOutput } from "../commands/GetSequenceStoreCommand";
import {
  GetVariantImportJobCommandInput,
  GetVariantImportJobCommandOutput,
} from "../commands/GetVariantImportJobCommand";
import { GetVariantStoreCommandInput, GetVariantStoreCommandOutput } from "../commands/GetVariantStoreCommand";
import { GetWorkflowCommandInput, GetWorkflowCommandOutput } from "../commands/GetWorkflowCommand";
import {
  ListAnnotationImportJobsCommandInput,
  ListAnnotationImportJobsCommandOutput,
} from "../commands/ListAnnotationImportJobsCommand";
import {
  ListAnnotationStoresCommandInput,
  ListAnnotationStoresCommandOutput,
} from "../commands/ListAnnotationStoresCommand";
import {
  ListReadSetActivationJobsCommandInput,
  ListReadSetActivationJobsCommandOutput,
} from "../commands/ListReadSetActivationJobsCommand";
import {
  ListReadSetExportJobsCommandInput,
  ListReadSetExportJobsCommandOutput,
} from "../commands/ListReadSetExportJobsCommand";
import {
  ListReadSetImportJobsCommandInput,
  ListReadSetImportJobsCommandOutput,
} from "../commands/ListReadSetImportJobsCommand";
import { ListReadSetsCommandInput, ListReadSetsCommandOutput } from "../commands/ListReadSetsCommand";
import {
  ListReferenceImportJobsCommandInput,
  ListReferenceImportJobsCommandOutput,
} from "../commands/ListReferenceImportJobsCommand";
import { ListReferencesCommandInput, ListReferencesCommandOutput } from "../commands/ListReferencesCommand";
import {
  ListReferenceStoresCommandInput,
  ListReferenceStoresCommandOutput,
} from "../commands/ListReferenceStoresCommand";
import { ListRunGroupsCommandInput, ListRunGroupsCommandOutput } from "../commands/ListRunGroupsCommand";
import { ListRunsCommandInput, ListRunsCommandOutput } from "../commands/ListRunsCommand";
import { ListRunTasksCommandInput, ListRunTasksCommandOutput } from "../commands/ListRunTasksCommand";
import { ListSequenceStoresCommandInput, ListSequenceStoresCommandOutput } from "../commands/ListSequenceStoresCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  ListVariantImportJobsCommandInput,
  ListVariantImportJobsCommandOutput,
} from "../commands/ListVariantImportJobsCommand";
import { ListVariantStoresCommandInput, ListVariantStoresCommandOutput } from "../commands/ListVariantStoresCommand";
import { ListWorkflowsCommandInput, ListWorkflowsCommandOutput } from "../commands/ListWorkflowsCommand";
import {
  StartAnnotationImportJobCommandInput,
  StartAnnotationImportJobCommandOutput,
} from "../commands/StartAnnotationImportJobCommand";
import {
  StartReadSetActivationJobCommandInput,
  StartReadSetActivationJobCommandOutput,
} from "../commands/StartReadSetActivationJobCommand";
import {
  StartReadSetExportJobCommandInput,
  StartReadSetExportJobCommandOutput,
} from "../commands/StartReadSetExportJobCommand";
import {
  StartReadSetImportJobCommandInput,
  StartReadSetImportJobCommandOutput,
} from "../commands/StartReadSetImportJobCommand";
import {
  StartReferenceImportJobCommandInput,
  StartReferenceImportJobCommandOutput,
} from "../commands/StartReferenceImportJobCommand";
import { StartRunCommandInput, StartRunCommandOutput } from "../commands/StartRunCommand";
import {
  StartVariantImportJobCommandInput,
  StartVariantImportJobCommandOutput,
} from "../commands/StartVariantImportJobCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateAnnotationStoreCommandInput,
  UpdateAnnotationStoreCommandOutput,
} from "../commands/UpdateAnnotationStoreCommand";
import { UpdateRunGroupCommandInput, UpdateRunGroupCommandOutput } from "../commands/UpdateRunGroupCommand";
import { UpdateVariantStoreCommandInput, UpdateVariantStoreCommandOutput } from "../commands/UpdateVariantStoreCommand";
import { UpdateWorkflowCommandInput, UpdateWorkflowCommandOutput } from "../commands/UpdateWorkflowCommand";
import {
  AccessDeniedException,
  ActivateReadSetFilter,
  ActivateReadSetJobItem,
  ActivateReadSetSourceItem,
  AnnotationImportItemDetail,
  AnnotationImportItemSource,
  AnnotationImportJobItem,
  AnnotationStoreItem,
  ConflictException,
  ExportReadSet,
  ExportReadSetDetail,
  ExportReadSetFilter,
  ExportReadSetJobDetail,
  FileInformation,
  FormatOptions,
  FormatToHeaderKey,
  ImportReadSetFilter,
  ImportReadSetJobItem,
  ImportReadSetSourceItem,
  ImportReferenceFilter,
  ImportReferenceJobItem,
  ImportReferenceSourceItem,
  InternalServerException,
  ListAnnotationImportJobsFilter,
  ListAnnotationStoresFilter,
  ListVariantImportJobsFilter,
  ListVariantStoresFilter,
  RangeNotSatisfiableException,
  ReadOptions,
  ReadSetBatchError,
  ReadSetFiles,
  ReadSetFilter,
  ReadSetListItem,
  ReferenceFiles,
  ReferenceFilter,
  ReferenceItem,
  ReferenceListItem,
  ReferenceStoreDetail,
  ReferenceStoreFilter,
  RequestTimeoutException,
  ResourceNotFoundException,
  RunGroupListItem,
  RunListItem,
  SchemaValueType,
  SequenceInformation,
  SequenceStoreDetail,
  SequenceStoreFilter,
  ServiceQuotaExceededException,
  SourceFiles,
  SseConfig,
  StartReadSetActivationJobSourceItem,
  StartReadSetImportJobSourceItem,
  StartReferenceImportJobSourceItem,
  StoreOptions,
  TaskListItem,
  ThrottlingException,
  TsvOptions,
  TsvStoreOptions,
  ValidationException,
  VariantImportItemDetail,
  VariantImportItemSource,
  VariantImportJobItem,
  VariantStoreItem,
  VcfOptions,
  WorkflowListItem,
  WorkflowParameter,
} from "../models/models_0";
import { OmicsServiceException as __BaseException } from "../models/OmicsServiceException";

/**
 * serializeAws_restJson1BatchDeleteReadSetCommand
 */
export const se_BatchDeleteReadSetCommand = async (
  input: BatchDeleteReadSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/sequencestore/{sequenceStoreId}/readset/batch/delete";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "sequenceStoreId",
    () => input.sequenceStoreId!,
    "{sequenceStoreId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.ids != null && { ids: se_ReadSetIdList(input.ids, context) }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "control-storage-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
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

/**
 * serializeAws_restJson1CancelAnnotationImportJobCommand
 */
export const se_CancelAnnotationImportJobCommand = async (
  input: CancelAnnotationImportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/import/annotation/{jobId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "jobId", () => input.jobId!, "{jobId}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "analytics-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
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

/**
 * serializeAws_restJson1CancelRunCommand
 */
export const se_CancelRunCommand = async (
  input: CancelRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/run/{id}/cancel";
  resolvedPath = __resolvedPath(resolvedPath, input, "id", () => input.id!, "{id}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "workflows-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
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

/**
 * serializeAws_restJson1CancelVariantImportJobCommand
 */
export const se_CancelVariantImportJobCommand = async (
  input: CancelVariantImportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/import/variant/{jobId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "jobId", () => input.jobId!, "{jobId}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "analytics-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
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

/**
 * serializeAws_restJson1CreateAnnotationStoreCommand
 */
export const se_CreateAnnotationStoreCommand = async (
  input: CreateAnnotationStoreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/annotationStore";
  let body: any;
  body = JSON.stringify({
    ...(input.description != null && { description: input.description }),
    ...(input.name != null && { name: input.name }),
    ...(input.reference != null && { reference: se_ReferenceItem(input.reference, context) }),
    ...(input.sseConfig != null && { sseConfig: se_SseConfig(input.sseConfig, context) }),
    ...(input.storeFormat != null && { storeFormat: input.storeFormat }),
    ...(input.storeOptions != null && { storeOptions: se_StoreOptions(input.storeOptions, context) }),
    ...(input.tags != null && { tags: se_TagMap(input.tags, context) }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "analytics-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
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

/**
 * serializeAws_restJson1CreateReferenceStoreCommand
 */
export const se_CreateReferenceStoreCommand = async (
  input: CreateReferenceStoreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/referencestore";
  let body: any;
  body = JSON.stringify({
    ...(input.clientToken != null && { clientToken: input.clientToken }),
    ...(input.description != null && { description: input.description }),
    ...(input.name != null && { name: input.name }),
    ...(input.sseConfig != null && { sseConfig: se_SseConfig(input.sseConfig, context) }),
    ...(input.tags != null && { tags: se_TagMap(input.tags, context) }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "control-storage-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
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

/**
 * serializeAws_restJson1CreateRunGroupCommand
 */
export const se_CreateRunGroupCommand = async (
  input: CreateRunGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/runGroup";
  let body: any;
  body = JSON.stringify({
    ...(input.maxCpus != null && { maxCpus: input.maxCpus }),
    ...(input.maxDuration != null && { maxDuration: input.maxDuration }),
    ...(input.maxRuns != null && { maxRuns: input.maxRuns }),
    ...(input.name != null && { name: input.name }),
    requestId: input.requestId ?? generateIdempotencyToken(),
    ...(input.tags != null && { tags: se_TagMap(input.tags, context) }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "workflows-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
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

/**
 * serializeAws_restJson1CreateSequenceStoreCommand
 */
export const se_CreateSequenceStoreCommand = async (
  input: CreateSequenceStoreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/sequencestore";
  let body: any;
  body = JSON.stringify({
    ...(input.clientToken != null && { clientToken: input.clientToken }),
    ...(input.description != null && { description: input.description }),
    ...(input.name != null && { name: input.name }),
    ...(input.sseConfig != null && { sseConfig: se_SseConfig(input.sseConfig, context) }),
    ...(input.tags != null && { tags: se_TagMap(input.tags, context) }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "control-storage-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
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

/**
 * serializeAws_restJson1CreateVariantStoreCommand
 */
export const se_CreateVariantStoreCommand = async (
  input: CreateVariantStoreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/variantStore";
  let body: any;
  body = JSON.stringify({
    ...(input.description != null && { description: input.description }),
    ...(input.name != null && { name: input.name }),
    ...(input.reference != null && { reference: se_ReferenceItem(input.reference, context) }),
    ...(input.sseConfig != null && { sseConfig: se_SseConfig(input.sseConfig, context) }),
    ...(input.tags != null && { tags: se_TagMap(input.tags, context) }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "analytics-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
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

/**
 * serializeAws_restJson1CreateWorkflowCommand
 */
export const se_CreateWorkflowCommand = async (
  input: CreateWorkflowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/workflow";
  let body: any;
  body = JSON.stringify({
    ...(input.definitionUri != null && { definitionUri: input.definitionUri }),
    ...(input.definitionZip != null && { definitionZip: context.base64Encoder(input.definitionZip) }),
    ...(input.description != null && { description: input.description }),
    ...(input.engine != null && { engine: input.engine }),
    ...(input.main != null && { main: input.main }),
    ...(input.name != null && { name: input.name }),
    ...(input.parameterTemplate != null && {
      parameterTemplate: se_WorkflowParameterTemplate(input.parameterTemplate, context),
    }),
    requestId: input.requestId ?? generateIdempotencyToken(),
    ...(input.storageCapacity != null && { storageCapacity: input.storageCapacity }),
    ...(input.tags != null && { tags: se_TagMap(input.tags, context) }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "workflows-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
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

/**
 * serializeAws_restJson1DeleteAnnotationStoreCommand
 */
export const se_DeleteAnnotationStoreCommand = async (
  input: DeleteAnnotationStoreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/annotationStore/{name}";
  resolvedPath = __resolvedPath(resolvedPath, input, "name", () => input.name!, "{name}", false);
  const query: any = map({
    force: [() => input.force !== void 0, () => input.force!.toString()],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "analytics-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
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

/**
 * serializeAws_restJson1DeleteReferenceCommand
 */
export const se_DeleteReferenceCommand = async (
  input: DeleteReferenceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/referencestore/{referenceStoreId}/reference/{id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "id", () => input.id!, "{id}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "referenceStoreId",
    () => input.referenceStoreId!,
    "{referenceStoreId}",
    false
  );
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "control-storage-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
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

/**
 * serializeAws_restJson1DeleteReferenceStoreCommand
 */
export const se_DeleteReferenceStoreCommand = async (
  input: DeleteReferenceStoreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/referencestore/{id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "id", () => input.id!, "{id}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "control-storage-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
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

/**
 * serializeAws_restJson1DeleteRunCommand
 */
export const se_DeleteRunCommand = async (
  input: DeleteRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/run/{id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "id", () => input.id!, "{id}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "workflows-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
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

/**
 * serializeAws_restJson1DeleteRunGroupCommand
 */
export const se_DeleteRunGroupCommand = async (
  input: DeleteRunGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/runGroup/{id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "id", () => input.id!, "{id}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "workflows-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
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

/**
 * serializeAws_restJson1DeleteSequenceStoreCommand
 */
export const se_DeleteSequenceStoreCommand = async (
  input: DeleteSequenceStoreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/sequencestore/{id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "id", () => input.id!, "{id}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "control-storage-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
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

/**
 * serializeAws_restJson1DeleteVariantStoreCommand
 */
export const se_DeleteVariantStoreCommand = async (
  input: DeleteVariantStoreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/variantStore/{name}";
  resolvedPath = __resolvedPath(resolvedPath, input, "name", () => input.name!, "{name}", false);
  const query: any = map({
    force: [() => input.force !== void 0, () => input.force!.toString()],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "analytics-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
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

/**
 * serializeAws_restJson1DeleteWorkflowCommand
 */
export const se_DeleteWorkflowCommand = async (
  input: DeleteWorkflowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/workflow/{id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "id", () => input.id!, "{id}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "workflows-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
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

/**
 * serializeAws_restJson1GetAnnotationImportJobCommand
 */
export const se_GetAnnotationImportJobCommand = async (
  input: GetAnnotationImportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/import/annotation/{jobId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "jobId", () => input.jobId!, "{jobId}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "analytics-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
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

/**
 * serializeAws_restJson1GetAnnotationStoreCommand
 */
export const se_GetAnnotationStoreCommand = async (
  input: GetAnnotationStoreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/annotationStore/{name}";
  resolvedPath = __resolvedPath(resolvedPath, input, "name", () => input.name!, "{name}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "analytics-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
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

/**
 * serializeAws_restJson1GetReadSetCommand
 */
export const se_GetReadSetCommand = async (
  input: GetReadSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/sequencestore/{sequenceStoreId}/readset/{id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "id", () => input.id!, "{id}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "sequenceStoreId",
    () => input.sequenceStoreId!,
    "{sequenceStoreId}",
    false
  );
  const query: any = map({
    file: [, input.file!],
    partNumber: [__expectNonNull(input.partNumber, `partNumber`) != null, () => input.partNumber!.toString()],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "storage-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
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

/**
 * serializeAws_restJson1GetReadSetActivationJobCommand
 */
export const se_GetReadSetActivationJobCommand = async (
  input: GetReadSetActivationJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/sequencestore/{sequenceStoreId}/activationjob/{id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "id", () => input.id!, "{id}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "sequenceStoreId",
    () => input.sequenceStoreId!,
    "{sequenceStoreId}",
    false
  );
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "control-storage-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
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

/**
 * serializeAws_restJson1GetReadSetExportJobCommand
 */
export const se_GetReadSetExportJobCommand = async (
  input: GetReadSetExportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/sequencestore/{sequenceStoreId}/exportjob/{id}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "sequenceStoreId",
    () => input.sequenceStoreId!,
    "{sequenceStoreId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "id", () => input.id!, "{id}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "control-storage-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
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

/**
 * serializeAws_restJson1GetReadSetImportJobCommand
 */
export const se_GetReadSetImportJobCommand = async (
  input: GetReadSetImportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/sequencestore/{sequenceStoreId}/importjob/{id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "id", () => input.id!, "{id}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "sequenceStoreId",
    () => input.sequenceStoreId!,
    "{sequenceStoreId}",
    false
  );
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "control-storage-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
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

/**
 * serializeAws_restJson1GetReadSetMetadataCommand
 */
export const se_GetReadSetMetadataCommand = async (
  input: GetReadSetMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/sequencestore/{sequenceStoreId}/readset/{id}/metadata";
  resolvedPath = __resolvedPath(resolvedPath, input, "id", () => input.id!, "{id}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "sequenceStoreId",
    () => input.sequenceStoreId!,
    "{sequenceStoreId}",
    false
  );
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "control-storage-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
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

/**
 * serializeAws_restJson1GetReferenceCommand
 */
export const se_GetReferenceCommand = async (
  input: GetReferenceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    range: input.range!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/referencestore/{referenceStoreId}/reference/{id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "id", () => input.id!, "{id}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "referenceStoreId",
    () => input.referenceStoreId!,
    "{referenceStoreId}",
    false
  );
  const query: any = map({
    partNumber: [__expectNonNull(input.partNumber, `partNumber`) != null, () => input.partNumber!.toString()],
    file: [, input.file!],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "storage-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
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

/**
 * serializeAws_restJson1GetReferenceImportJobCommand
 */
export const se_GetReferenceImportJobCommand = async (
  input: GetReferenceImportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/referencestore/{referenceStoreId}/importjob/{id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "id", () => input.id!, "{id}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "referenceStoreId",
    () => input.referenceStoreId!,
    "{referenceStoreId}",
    false
  );
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "control-storage-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
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

/**
 * serializeAws_restJson1GetReferenceMetadataCommand
 */
export const se_GetReferenceMetadataCommand = async (
  input: GetReferenceMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/referencestore/{referenceStoreId}/reference/{id}/metadata";
  resolvedPath = __resolvedPath(resolvedPath, input, "id", () => input.id!, "{id}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "referenceStoreId",
    () => input.referenceStoreId!,
    "{referenceStoreId}",
    false
  );
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "control-storage-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
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

/**
 * serializeAws_restJson1GetReferenceStoreCommand
 */
export const se_GetReferenceStoreCommand = async (
  input: GetReferenceStoreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/referencestore/{id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "id", () => input.id!, "{id}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "control-storage-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
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

/**
 * serializeAws_restJson1GetRunCommand
 */
export const se_GetRunCommand = async (input: GetRunCommandInput, context: __SerdeContext): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/run/{id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "id", () => input.id!, "{id}", false);
  const query: any = map({
    export: [() => input.export !== void 0, () => (input.export! || []).map((_entry) => _entry as any)],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "workflows-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
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

/**
 * serializeAws_restJson1GetRunGroupCommand
 */
export const se_GetRunGroupCommand = async (
  input: GetRunGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/runGroup/{id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "id", () => input.id!, "{id}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "workflows-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
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

/**
 * serializeAws_restJson1GetRunTaskCommand
 */
export const se_GetRunTaskCommand = async (
  input: GetRunTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/run/{id}/task/{taskId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "id", () => input.id!, "{id}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "taskId", () => input.taskId!, "{taskId}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "workflows-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
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

/**
 * serializeAws_restJson1GetSequenceStoreCommand
 */
export const se_GetSequenceStoreCommand = async (
  input: GetSequenceStoreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/sequencestore/{id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "id", () => input.id!, "{id}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "control-storage-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
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

/**
 * serializeAws_restJson1GetVariantImportJobCommand
 */
export const se_GetVariantImportJobCommand = async (
  input: GetVariantImportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/import/variant/{jobId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "jobId", () => input.jobId!, "{jobId}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "analytics-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
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

/**
 * serializeAws_restJson1GetVariantStoreCommand
 */
export const se_GetVariantStoreCommand = async (
  input: GetVariantStoreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/variantStore/{name}";
  resolvedPath = __resolvedPath(resolvedPath, input, "name", () => input.name!, "{name}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "analytics-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
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

/**
 * serializeAws_restJson1GetWorkflowCommand
 */
export const se_GetWorkflowCommand = async (
  input: GetWorkflowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/workflow/{id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "id", () => input.id!, "{id}", false);
  const query: any = map({
    type: [, input.type!],
    export: [() => input.export !== void 0, () => (input.export! || []).map((_entry) => _entry as any)],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "workflows-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
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

/**
 * serializeAws_restJson1ListAnnotationImportJobsCommand
 */
export const se_ListAnnotationImportJobsCommand = async (
  input: ListAnnotationImportJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/import/annotations";
  const query: any = map({
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
    nextToken: [, input.nextToken!],
  });
  let body: any;
  body = JSON.stringify({
    ...(input.filter != null && { filter: se_ListAnnotationImportJobsFilter(input.filter, context) }),
    ...(input.ids != null && { ids: se_IdList(input.ids, context) }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "analytics-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListAnnotationStoresCommand
 */
export const se_ListAnnotationStoresCommand = async (
  input: ListAnnotationStoresCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/annotationStores";
  const query: any = map({
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
    nextToken: [, input.nextToken!],
  });
  let body: any;
  body = JSON.stringify({
    ...(input.filter != null && { filter: se_ListAnnotationStoresFilter(input.filter, context) }),
    ...(input.ids != null && { ids: se_IdList(input.ids, context) }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "analytics-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListReadSetActivationJobsCommand
 */
export const se_ListReadSetActivationJobsCommand = async (
  input: ListReadSetActivationJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/sequencestore/{sequenceStoreId}/activationjobs";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "sequenceStoreId",
    () => input.sequenceStoreId!,
    "{sequenceStoreId}",
    false
  );
  const query: any = map({
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
    nextToken: [, input.nextToken!],
  });
  let body: any;
  body = JSON.stringify({
    ...(input.filter != null && { filter: se_ActivateReadSetFilter(input.filter, context) }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "control-storage-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListReadSetExportJobsCommand
 */
export const se_ListReadSetExportJobsCommand = async (
  input: ListReadSetExportJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/sequencestore/{sequenceStoreId}/exportjobs";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "sequenceStoreId",
    () => input.sequenceStoreId!,
    "{sequenceStoreId}",
    false
  );
  const query: any = map({
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
    nextToken: [, input.nextToken!],
  });
  let body: any;
  body = JSON.stringify({
    ...(input.filter != null && { filter: se_ExportReadSetFilter(input.filter, context) }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "control-storage-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListReadSetImportJobsCommand
 */
export const se_ListReadSetImportJobsCommand = async (
  input: ListReadSetImportJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/sequencestore/{sequenceStoreId}/importjobs";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "sequenceStoreId",
    () => input.sequenceStoreId!,
    "{sequenceStoreId}",
    false
  );
  const query: any = map({
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
    nextToken: [, input.nextToken!],
  });
  let body: any;
  body = JSON.stringify({
    ...(input.filter != null && { filter: se_ImportReadSetFilter(input.filter, context) }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "control-storage-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListReadSetsCommand
 */
export const se_ListReadSetsCommand = async (
  input: ListReadSetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/sequencestore/{sequenceStoreId}/readsets";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "sequenceStoreId",
    () => input.sequenceStoreId!,
    "{sequenceStoreId}",
    false
  );
  const query: any = map({
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
    nextToken: [, input.nextToken!],
  });
  let body: any;
  body = JSON.stringify({
    ...(input.filter != null && { filter: se_ReadSetFilter(input.filter, context) }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "control-storage-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListReferenceImportJobsCommand
 */
export const se_ListReferenceImportJobsCommand = async (
  input: ListReferenceImportJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/referencestore/{referenceStoreId}/importjobs";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "referenceStoreId",
    () => input.referenceStoreId!,
    "{referenceStoreId}",
    false
  );
  const query: any = map({
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
    nextToken: [, input.nextToken!],
  });
  let body: any;
  body = JSON.stringify({
    ...(input.filter != null && { filter: se_ImportReferenceFilter(input.filter, context) }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "control-storage-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListReferencesCommand
 */
export const se_ListReferencesCommand = async (
  input: ListReferencesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/referencestore/{referenceStoreId}/references";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "referenceStoreId",
    () => input.referenceStoreId!,
    "{referenceStoreId}",
    false
  );
  const query: any = map({
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
    nextToken: [, input.nextToken!],
  });
  let body: any;
  body = JSON.stringify({
    ...(input.filter != null && { filter: se_ReferenceFilter(input.filter, context) }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "control-storage-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListReferenceStoresCommand
 */
export const se_ListReferenceStoresCommand = async (
  input: ListReferenceStoresCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/referencestores";
  const query: any = map({
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
    nextToken: [, input.nextToken!],
  });
  let body: any;
  body = JSON.stringify({
    ...(input.filter != null && { filter: se_ReferenceStoreFilter(input.filter, context) }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "control-storage-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListRunGroupsCommand
 */
export const se_ListRunGroupsCommand = async (
  input: ListRunGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/runGroup";
  const query: any = map({
    name: [, input.name!],
    startingToken: [, input.startingToken!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "workflows-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
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

/**
 * serializeAws_restJson1ListRunsCommand
 */
export const se_ListRunsCommand = async (
  input: ListRunsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/run";
  const query: any = map({
    name: [, input.name!],
    runGroupId: [, input.runGroupId!],
    startingToken: [, input.startingToken!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "workflows-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
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

/**
 * serializeAws_restJson1ListRunTasksCommand
 */
export const se_ListRunTasksCommand = async (
  input: ListRunTasksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/run/{id}/task";
  resolvedPath = __resolvedPath(resolvedPath, input, "id", () => input.id!, "{id}", false);
  const query: any = map({
    status: [, input.status!],
    startingToken: [, input.startingToken!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "workflows-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
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

/**
 * serializeAws_restJson1ListSequenceStoresCommand
 */
export const se_ListSequenceStoresCommand = async (
  input: ListSequenceStoresCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/sequencestores";
  const query: any = map({
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
    nextToken: [, input.nextToken!],
  });
  let body: any;
  body = JSON.stringify({
    ...(input.filter != null && { filter: se_SequenceStoreFilter(input.filter, context) }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "control-storage-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "POST",
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{resourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "tags-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
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

/**
 * serializeAws_restJson1ListVariantImportJobsCommand
 */
export const se_ListVariantImportJobsCommand = async (
  input: ListVariantImportJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/import/variants";
  const query: any = map({
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
    nextToken: [, input.nextToken!],
  });
  let body: any;
  body = JSON.stringify({
    ...(input.filter != null && { filter: se_ListVariantImportJobsFilter(input.filter, context) }),
    ...(input.ids != null && { ids: se_IdList(input.ids, context) }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "analytics-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListVariantStoresCommand
 */
export const se_ListVariantStoresCommand = async (
  input: ListVariantStoresCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/variantStores";
  const query: any = map({
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
    nextToken: [, input.nextToken!],
  });
  let body: any;
  body = JSON.stringify({
    ...(input.filter != null && { filter: se_ListVariantStoresFilter(input.filter, context) }),
    ...(input.ids != null && { ids: se_IdList(input.ids, context) }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "analytics-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListWorkflowsCommand
 */
export const se_ListWorkflowsCommand = async (
  input: ListWorkflowsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/workflow";
  const query: any = map({
    type: [, input.type!],
    name: [, input.name!],
    startingToken: [, input.startingToken!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "workflows-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
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

/**
 * serializeAws_restJson1StartAnnotationImportJobCommand
 */
export const se_StartAnnotationImportJobCommand = async (
  input: StartAnnotationImportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/import/annotation";
  let body: any;
  body = JSON.stringify({
    ...(input.destinationName != null && { destinationName: input.destinationName }),
    ...(input.formatOptions != null && { formatOptions: se_FormatOptions(input.formatOptions, context) }),
    ...(input.items != null && { items: se_AnnotationImportItemSources(input.items, context) }),
    ...(input.roleArn != null && { roleArn: input.roleArn }),
    ...(input.runLeftNormalization != null && { runLeftNormalization: input.runLeftNormalization }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "analytics-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
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

/**
 * serializeAws_restJson1StartReadSetActivationJobCommand
 */
export const se_StartReadSetActivationJobCommand = async (
  input: StartReadSetActivationJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/sequencestore/{sequenceStoreId}/activationjob";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "sequenceStoreId",
    () => input.sequenceStoreId!,
    "{sequenceStoreId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.clientToken != null && { clientToken: input.clientToken }),
    ...(input.sources != null && { sources: se_StartReadSetActivationJobSourceList(input.sources, context) }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "control-storage-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
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

/**
 * serializeAws_restJson1StartReadSetExportJobCommand
 */
export const se_StartReadSetExportJobCommand = async (
  input: StartReadSetExportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/sequencestore/{sequenceStoreId}/exportjob";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "sequenceStoreId",
    () => input.sequenceStoreId!,
    "{sequenceStoreId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.clientToken != null && { clientToken: input.clientToken }),
    ...(input.destination != null && { destination: input.destination }),
    ...(input.roleArn != null && { roleArn: input.roleArn }),
    ...(input.sources != null && { sources: se_ExportReadSetList(input.sources, context) }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "control-storage-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
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

/**
 * serializeAws_restJson1StartReadSetImportJobCommand
 */
export const se_StartReadSetImportJobCommand = async (
  input: StartReadSetImportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/sequencestore/{sequenceStoreId}/importjob";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "sequenceStoreId",
    () => input.sequenceStoreId!,
    "{sequenceStoreId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.clientToken != null && { clientToken: input.clientToken }),
    ...(input.roleArn != null && { roleArn: input.roleArn }),
    ...(input.sources != null && { sources: se_StartReadSetImportJobSourceList(input.sources, context) }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "control-storage-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
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

/**
 * serializeAws_restJson1StartReferenceImportJobCommand
 */
export const se_StartReferenceImportJobCommand = async (
  input: StartReferenceImportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/referencestore/{referenceStoreId}/importjob";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "referenceStoreId",
    () => input.referenceStoreId!,
    "{referenceStoreId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.clientToken != null && { clientToken: input.clientToken }),
    ...(input.roleArn != null && { roleArn: input.roleArn }),
    ...(input.sources != null && { sources: se_StartReferenceImportJobSourceList(input.sources, context) }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "control-storage-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
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

/**
 * serializeAws_restJson1StartRunCommand
 */
export const se_StartRunCommand = async (
  input: StartRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/run";
  let body: any;
  body = JSON.stringify({
    ...(input.logLevel != null && { logLevel: input.logLevel }),
    ...(input.name != null && { name: input.name }),
    ...(input.outputUri != null && { outputUri: input.outputUri }),
    ...(input.parameters != null && { parameters: se_RunParameters(input.parameters, context) }),
    ...(input.priority != null && { priority: input.priority }),
    requestId: input.requestId ?? generateIdempotencyToken(),
    ...(input.roleArn != null && { roleArn: input.roleArn }),
    ...(input.runGroupId != null && { runGroupId: input.runGroupId }),
    ...(input.runId != null && { runId: input.runId }),
    ...(input.storageCapacity != null && { storageCapacity: input.storageCapacity }),
    ...(input.tags != null && { tags: se_TagMap(input.tags, context) }),
    ...(input.workflowId != null && { workflowId: input.workflowId }),
    ...(input.workflowType != null && { workflowType: input.workflowType }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "workflows-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
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

/**
 * serializeAws_restJson1StartVariantImportJobCommand
 */
export const se_StartVariantImportJobCommand = async (
  input: StartVariantImportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/import/variant";
  let body: any;
  body = JSON.stringify({
    ...(input.destinationName != null && { destinationName: input.destinationName }),
    ...(input.items != null && { items: se_VariantImportItemSources(input.items, context) }),
    ...(input.roleArn != null && { roleArn: input.roleArn }),
    ...(input.runLeftNormalization != null && { runLeftNormalization: input.runLeftNormalization }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "analytics-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{resourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.tags != null && { tags: se_TagMap(input.tags, context) }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "tags-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
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

/**
 * serializeAws_restJson1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{resourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  const query: any = map({
    tagKeys: [
      __expectNonNull(input.tagKeys, `tagKeys`) != null,
      () => (input.tagKeys! || []).map((_entry) => _entry as any),
    ],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "tags-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
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

/**
 * serializeAws_restJson1UpdateAnnotationStoreCommand
 */
export const se_UpdateAnnotationStoreCommand = async (
  input: UpdateAnnotationStoreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/annotationStore/{name}";
  resolvedPath = __resolvedPath(resolvedPath, input, "name", () => input.name!, "{name}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.description != null && { description: input.description }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "analytics-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
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

/**
 * serializeAws_restJson1UpdateRunGroupCommand
 */
export const se_UpdateRunGroupCommand = async (
  input: UpdateRunGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/runGroup/{id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "id", () => input.id!, "{id}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.maxCpus != null && { maxCpus: input.maxCpus }),
    ...(input.maxDuration != null && { maxDuration: input.maxDuration }),
    ...(input.maxRuns != null && { maxRuns: input.maxRuns }),
    ...(input.name != null && { name: input.name }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "workflows-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
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

/**
 * serializeAws_restJson1UpdateVariantStoreCommand
 */
export const se_UpdateVariantStoreCommand = async (
  input: UpdateVariantStoreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/variantStore/{name}";
  resolvedPath = __resolvedPath(resolvedPath, input, "name", () => input.name!, "{name}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.description != null && { description: input.description }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "analytics-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
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

/**
 * serializeAws_restJson1UpdateWorkflowCommand
 */
export const se_UpdateWorkflowCommand = async (
  input: UpdateWorkflowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/workflow/{id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "id", () => input.id!, "{id}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.description != null && { description: input.description }),
    ...(input.name != null && { name: input.name }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "workflows-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
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

/**
 * deserializeAws_restJson1BatchDeleteReadSetCommand
 */
export const de_BatchDeleteReadSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeleteReadSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_BatchDeleteReadSetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.errors != null) {
    contents.errors = de_ReadSetBatchErrorList(data.errors, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1BatchDeleteReadSetCommandError
 */
const de_BatchDeleteReadSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeleteReadSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.omics#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.omics#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "RequestTimeoutException":
    case "com.amazonaws.omics#RequestTimeoutException":
      throw await de_RequestTimeoutExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.omics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.omics#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.omics#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CancelAnnotationImportJobCommand
 */
export const de_CancelAnnotationImportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelAnnotationImportJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CancelAnnotationImportJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1CancelAnnotationImportJobCommandError
 */
const de_CancelAnnotationImportJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelAnnotationImportJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.omics#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.omics#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.omics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.omics#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.omics#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CancelRunCommand
 */
export const de_CancelRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelRunCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CancelRunCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1CancelRunCommandError
 */
const de_CancelRunCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelRunCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.omics#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.omics#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.omics#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "RequestTimeoutException":
    case "com.amazonaws.omics#RequestTimeoutException":
      throw await de_RequestTimeoutExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.omics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.omics#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.omics#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.omics#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CancelVariantImportJobCommand
 */
export const de_CancelVariantImportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelVariantImportJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CancelVariantImportJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1CancelVariantImportJobCommandError
 */
const de_CancelVariantImportJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelVariantImportJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.omics#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.omics#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.omics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.omics#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.omics#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateAnnotationStoreCommand
 */
export const de_CreateAnnotationStoreCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAnnotationStoreCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateAnnotationStoreCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.creationTime != null) {
    contents.creationTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.creationTime));
  }
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.reference != null) {
    contents.reference = de_ReferenceItem(__expectUnion(data.reference), context);
  }
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  if (data.storeFormat != null) {
    contents.storeFormat = __expectString(data.storeFormat);
  }
  if (data.storeOptions != null) {
    contents.storeOptions = de_StoreOptions(__expectUnion(data.storeOptions), context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateAnnotationStoreCommandError
 */
const de_CreateAnnotationStoreCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAnnotationStoreCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.omics#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.omics#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.omics#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.omics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.omics#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.omics#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.omics#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateReferenceStoreCommand
 */
export const de_CreateReferenceStoreCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateReferenceStoreCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateReferenceStoreCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.creationTime != null) {
    contents.creationTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.creationTime));
  }
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.sseConfig != null) {
    contents.sseConfig = de_SseConfig(data.sseConfig, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateReferenceStoreCommandError
 */
const de_CreateReferenceStoreCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateReferenceStoreCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.omics#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.omics#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "RequestTimeoutException":
    case "com.amazonaws.omics#RequestTimeoutException":
      throw await de_RequestTimeoutExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.omics#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.omics#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.omics#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateRunGroupCommand
 */
export const de_CreateRunGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRunGroupCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateRunGroupCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.tags != null) {
    contents.tags = de_TagMap(data.tags, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateRunGroupCommandError
 */
const de_CreateRunGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRunGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.omics#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.omics#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.omics#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "RequestTimeoutException":
    case "com.amazonaws.omics#RequestTimeoutException":
      throw await de_RequestTimeoutExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.omics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.omics#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.omics#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.omics#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateSequenceStoreCommand
 */
export const de_CreateSequenceStoreCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSequenceStoreCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateSequenceStoreCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.creationTime != null) {
    contents.creationTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.creationTime));
  }
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.sseConfig != null) {
    contents.sseConfig = de_SseConfig(data.sseConfig, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateSequenceStoreCommandError
 */
const de_CreateSequenceStoreCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSequenceStoreCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.omics#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.omics#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "RequestTimeoutException":
    case "com.amazonaws.omics#RequestTimeoutException":
      throw await de_RequestTimeoutExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.omics#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.omics#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.omics#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateVariantStoreCommand
 */
export const de_CreateVariantStoreCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVariantStoreCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateVariantStoreCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.creationTime != null) {
    contents.creationTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.creationTime));
  }
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.reference != null) {
    contents.reference = de_ReferenceItem(__expectUnion(data.reference), context);
  }
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateVariantStoreCommandError
 */
const de_CreateVariantStoreCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVariantStoreCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.omics#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.omics#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.omics#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.omics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.omics#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.omics#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.omics#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateWorkflowCommand
 */
export const de_CreateWorkflowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorkflowCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateWorkflowCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  if (data.tags != null) {
    contents.tags = de_TagMap(data.tags, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateWorkflowCommandError
 */
const de_CreateWorkflowCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorkflowCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.omics#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.omics#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.omics#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "RequestTimeoutException":
    case "com.amazonaws.omics#RequestTimeoutException":
      throw await de_RequestTimeoutExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.omics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.omics#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.omics#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.omics#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteAnnotationStoreCommand
 */
export const de_DeleteAnnotationStoreCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAnnotationStoreCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteAnnotationStoreCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DeleteAnnotationStoreCommandError
 */
const de_DeleteAnnotationStoreCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAnnotationStoreCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.omics#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.omics#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.omics#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.omics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.omics#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.omics#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteReferenceCommand
 */
export const de_DeleteReferenceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteReferenceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteReferenceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteReferenceCommandError
 */
const de_DeleteReferenceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteReferenceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.omics#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.omics#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.omics#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "RequestTimeoutException":
    case "com.amazonaws.omics#RequestTimeoutException":
      throw await de_RequestTimeoutExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.omics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.omics#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.omics#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteReferenceStoreCommand
 */
export const de_DeleteReferenceStoreCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteReferenceStoreCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteReferenceStoreCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteReferenceStoreCommandError
 */
const de_DeleteReferenceStoreCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteReferenceStoreCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.omics#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.omics#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.omics#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "RequestTimeoutException":
    case "com.amazonaws.omics#RequestTimeoutException":
      throw await de_RequestTimeoutExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.omics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.omics#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.omics#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteRunCommand
 */
export const de_DeleteRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRunCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_DeleteRunCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteRunCommandError
 */
const de_DeleteRunCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRunCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.omics#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.omics#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.omics#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "RequestTimeoutException":
    case "com.amazonaws.omics#RequestTimeoutException":
      throw await de_RequestTimeoutExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.omics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.omics#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.omics#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.omics#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteRunGroupCommand
 */
export const de_DeleteRunGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRunGroupCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_DeleteRunGroupCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteRunGroupCommandError
 */
const de_DeleteRunGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRunGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.omics#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.omics#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.omics#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "RequestTimeoutException":
    case "com.amazonaws.omics#RequestTimeoutException":
      throw await de_RequestTimeoutExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.omics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.omics#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.omics#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.omics#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteSequenceStoreCommand
 */
export const de_DeleteSequenceStoreCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSequenceStoreCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteSequenceStoreCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteSequenceStoreCommandError
 */
const de_DeleteSequenceStoreCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSequenceStoreCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.omics#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.omics#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.omics#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "RequestTimeoutException":
    case "com.amazonaws.omics#RequestTimeoutException":
      throw await de_RequestTimeoutExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.omics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.omics#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.omics#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteVariantStoreCommand
 */
export const de_DeleteVariantStoreCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVariantStoreCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteVariantStoreCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DeleteVariantStoreCommandError
 */
const de_DeleteVariantStoreCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVariantStoreCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.omics#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.omics#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.omics#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.omics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.omics#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.omics#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteWorkflowCommand
 */
export const de_DeleteWorkflowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWorkflowCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_DeleteWorkflowCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteWorkflowCommandError
 */
const de_DeleteWorkflowCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWorkflowCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.omics#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.omics#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.omics#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "RequestTimeoutException":
    case "com.amazonaws.omics#RequestTimeoutException":
      throw await de_RequestTimeoutExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.omics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.omics#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.omics#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.omics#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetAnnotationImportJobCommand
 */
export const de_GetAnnotationImportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAnnotationImportJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetAnnotationImportJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.completionTime != null) {
    contents.completionTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.completionTime));
  }
  if (data.creationTime != null) {
    contents.creationTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.creationTime));
  }
  if (data.destinationName != null) {
    contents.destinationName = __expectString(data.destinationName);
  }
  if (data.formatOptions != null) {
    contents.formatOptions = de_FormatOptions(__expectUnion(data.formatOptions), context);
  }
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.items != null) {
    contents.items = de_AnnotationImportItemDetails(data.items, context);
  }
  if (data.roleArn != null) {
    contents.roleArn = __expectString(data.roleArn);
  }
  if (data.runLeftNormalization != null) {
    contents.runLeftNormalization = __expectBoolean(data.runLeftNormalization);
  }
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  if (data.statusMessage != null) {
    contents.statusMessage = __expectString(data.statusMessage);
  }
  if (data.updateTime != null) {
    contents.updateTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.updateTime));
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetAnnotationImportJobCommandError
 */
const de_GetAnnotationImportJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAnnotationImportJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.omics#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.omics#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.omics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.omics#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.omics#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetAnnotationStoreCommand
 */
export const de_GetAnnotationStoreCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAnnotationStoreCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetAnnotationStoreCommandError(output, context);
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
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.reference != null) {
    contents.reference = de_ReferenceItem(__expectUnion(data.reference), context);
  }
  if (data.sseConfig != null) {
    contents.sseConfig = de_SseConfig(data.sseConfig, context);
  }
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  if (data.statusMessage != null) {
    contents.statusMessage = __expectString(data.statusMessage);
  }
  if (data.storeArn != null) {
    contents.storeArn = __expectString(data.storeArn);
  }
  if (data.storeFormat != null) {
    contents.storeFormat = __expectString(data.storeFormat);
  }
  if (data.storeOptions != null) {
    contents.storeOptions = de_StoreOptions(__expectUnion(data.storeOptions), context);
  }
  if (data.storeSizeBytes != null) {
    contents.storeSizeBytes = __expectLong(data.storeSizeBytes);
  }
  if (data.tags != null) {
    contents.tags = de_TagMap(data.tags, context);
  }
  if (data.updateTime != null) {
    contents.updateTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.updateTime));
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetAnnotationStoreCommandError
 */
const de_GetAnnotationStoreCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAnnotationStoreCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.omics#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.omics#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.omics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.omics#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.omics#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetReadSetCommand
 */
export const de_GetReadSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext & __SdkStreamSerdeContext
): Promise<GetReadSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetReadSetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: any = output.body;
  context.sdkStreamMixin(data);
  contents.payload = data;
  return contents;
};

/**
 * deserializeAws_restJson1GetReadSetCommandError
 */
const de_GetReadSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetReadSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.omics#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.omics#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.omics#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "RangeNotSatisfiableException":
    case "com.amazonaws.omics#RangeNotSatisfiableException":
      throw await de_RangeNotSatisfiableExceptionRes(parsedOutput, context);
    case "RequestTimeoutException":
    case "com.amazonaws.omics#RequestTimeoutException":
      throw await de_RequestTimeoutExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.omics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.omics#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.omics#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetReadSetActivationJobCommand
 */
export const de_GetReadSetActivationJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetReadSetActivationJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetReadSetActivationJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.completionTime != null) {
    contents.completionTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.completionTime));
  }
  if (data.creationTime != null) {
    contents.creationTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.creationTime));
  }
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.sequenceStoreId != null) {
    contents.sequenceStoreId = __expectString(data.sequenceStoreId);
  }
  if (data.sources != null) {
    contents.sources = de_ActivateReadSetSourceList(data.sources, context);
  }
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  if (data.statusMessage != null) {
    contents.statusMessage = __expectString(data.statusMessage);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetReadSetActivationJobCommandError
 */
const de_GetReadSetActivationJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetReadSetActivationJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.omics#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.omics#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "RequestTimeoutException":
    case "com.amazonaws.omics#RequestTimeoutException":
      throw await de_RequestTimeoutExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.omics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.omics#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.omics#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetReadSetExportJobCommand
 */
export const de_GetReadSetExportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetReadSetExportJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetReadSetExportJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.completionTime != null) {
    contents.completionTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.completionTime));
  }
  if (data.creationTime != null) {
    contents.creationTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.creationTime));
  }
  if (data.destination != null) {
    contents.destination = __expectString(data.destination);
  }
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.readSets != null) {
    contents.readSets = de_ExportReadSetDetailList(data.readSets, context);
  }
  if (data.sequenceStoreId != null) {
    contents.sequenceStoreId = __expectString(data.sequenceStoreId);
  }
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  if (data.statusMessage != null) {
    contents.statusMessage = __expectString(data.statusMessage);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetReadSetExportJobCommandError
 */
const de_GetReadSetExportJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetReadSetExportJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.omics#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.omics#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "RequestTimeoutException":
    case "com.amazonaws.omics#RequestTimeoutException":
      throw await de_RequestTimeoutExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.omics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.omics#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.omics#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetReadSetImportJobCommand
 */
export const de_GetReadSetImportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetReadSetImportJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetReadSetImportJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.completionTime != null) {
    contents.completionTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.completionTime));
  }
  if (data.creationTime != null) {
    contents.creationTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.creationTime));
  }
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.roleArn != null) {
    contents.roleArn = __expectString(data.roleArn);
  }
  if (data.sequenceStoreId != null) {
    contents.sequenceStoreId = __expectString(data.sequenceStoreId);
  }
  if (data.sources != null) {
    contents.sources = de_ImportReadSetSourceList(data.sources, context);
  }
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  if (data.statusMessage != null) {
    contents.statusMessage = __expectString(data.statusMessage);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetReadSetImportJobCommandError
 */
const de_GetReadSetImportJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetReadSetImportJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.omics#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.omics#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "RequestTimeoutException":
    case "com.amazonaws.omics#RequestTimeoutException":
      throw await de_RequestTimeoutExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.omics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.omics#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.omics#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetReadSetMetadataCommand
 */
export const de_GetReadSetMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetReadSetMetadataCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetReadSetMetadataCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.creationTime != null) {
    contents.creationTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.creationTime));
  }
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.fileType != null) {
    contents.fileType = __expectString(data.fileType);
  }
  if (data.files != null) {
    contents.files = de_ReadSetFiles(data.files, context);
  }
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.referenceArn != null) {
    contents.referenceArn = __expectString(data.referenceArn);
  }
  if (data.sampleId != null) {
    contents.sampleId = __expectString(data.sampleId);
  }
  if (data.sequenceInformation != null) {
    contents.sequenceInformation = de_SequenceInformation(data.sequenceInformation, context);
  }
  if (data.sequenceStoreId != null) {
    contents.sequenceStoreId = __expectString(data.sequenceStoreId);
  }
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  if (data.subjectId != null) {
    contents.subjectId = __expectString(data.subjectId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetReadSetMetadataCommandError
 */
const de_GetReadSetMetadataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetReadSetMetadataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.omics#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.omics#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "RequestTimeoutException":
    case "com.amazonaws.omics#RequestTimeoutException":
      throw await de_RequestTimeoutExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.omics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.omics#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.omics#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetReferenceCommand
 */
export const de_GetReferenceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext & __SdkStreamSerdeContext
): Promise<GetReferenceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetReferenceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: any = output.body;
  context.sdkStreamMixin(data);
  contents.payload = data;
  return contents;
};

/**
 * deserializeAws_restJson1GetReferenceCommandError
 */
const de_GetReferenceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetReferenceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.omics#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.omics#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "RangeNotSatisfiableException":
    case "com.amazonaws.omics#RangeNotSatisfiableException":
      throw await de_RangeNotSatisfiableExceptionRes(parsedOutput, context);
    case "RequestTimeoutException":
    case "com.amazonaws.omics#RequestTimeoutException":
      throw await de_RequestTimeoutExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.omics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.omics#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.omics#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetReferenceImportJobCommand
 */
export const de_GetReferenceImportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetReferenceImportJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetReferenceImportJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.completionTime != null) {
    contents.completionTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.completionTime));
  }
  if (data.creationTime != null) {
    contents.creationTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.creationTime));
  }
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.referenceStoreId != null) {
    contents.referenceStoreId = __expectString(data.referenceStoreId);
  }
  if (data.roleArn != null) {
    contents.roleArn = __expectString(data.roleArn);
  }
  if (data.sources != null) {
    contents.sources = de_ImportReferenceSourceList(data.sources, context);
  }
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  if (data.statusMessage != null) {
    contents.statusMessage = __expectString(data.statusMessage);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetReferenceImportJobCommandError
 */
const de_GetReferenceImportJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetReferenceImportJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.omics#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.omics#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "RequestTimeoutException":
    case "com.amazonaws.omics#RequestTimeoutException":
      throw await de_RequestTimeoutExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.omics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.omics#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.omics#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetReferenceMetadataCommand
 */
export const de_GetReferenceMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetReferenceMetadataCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetReferenceMetadataCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.creationTime != null) {
    contents.creationTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.creationTime));
  }
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.files != null) {
    contents.files = de_ReferenceFiles(data.files, context);
  }
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.md5 != null) {
    contents.md5 = __expectString(data.md5);
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.referenceStoreId != null) {
    contents.referenceStoreId = __expectString(data.referenceStoreId);
  }
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  if (data.updateTime != null) {
    contents.updateTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.updateTime));
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetReferenceMetadataCommandError
 */
const de_GetReferenceMetadataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetReferenceMetadataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.omics#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.omics#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "RequestTimeoutException":
    case "com.amazonaws.omics#RequestTimeoutException":
      throw await de_RequestTimeoutExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.omics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.omics#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.omics#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetReferenceStoreCommand
 */
export const de_GetReferenceStoreCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetReferenceStoreCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetReferenceStoreCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.creationTime != null) {
    contents.creationTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.creationTime));
  }
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.sseConfig != null) {
    contents.sseConfig = de_SseConfig(data.sseConfig, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetReferenceStoreCommandError
 */
const de_GetReferenceStoreCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetReferenceStoreCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.omics#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.omics#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "RequestTimeoutException":
    case "com.amazonaws.omics#RequestTimeoutException":
      throw await de_RequestTimeoutExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.omics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.omics#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.omics#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetRunCommand
 */
export const de_GetRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRunCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetRunCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.creationTime != null) {
    contents.creationTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.creationTime));
  }
  if (data.definition != null) {
    contents.definition = __expectString(data.definition);
  }
  if (data.digest != null) {
    contents.digest = __expectString(data.digest);
  }
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.logLevel != null) {
    contents.logLevel = __expectString(data.logLevel);
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.outputUri != null) {
    contents.outputUri = __expectString(data.outputUri);
  }
  if (data.parameters != null) {
    contents.parameters = de_RunParameters(data.parameters, context);
  }
  if (data.priority != null) {
    contents.priority = __expectInt32(data.priority);
  }
  if (data.resourceDigests != null) {
    contents.resourceDigests = de_RunResourceDigests(data.resourceDigests, context);
  }
  if (data.roleArn != null) {
    contents.roleArn = __expectString(data.roleArn);
  }
  if (data.runGroupId != null) {
    contents.runGroupId = __expectString(data.runGroupId);
  }
  if (data.runId != null) {
    contents.runId = __expectString(data.runId);
  }
  if (data.startTime != null) {
    contents.startTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.startTime));
  }
  if (data.startedBy != null) {
    contents.startedBy = __expectString(data.startedBy);
  }
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  if (data.statusMessage != null) {
    contents.statusMessage = __expectString(data.statusMessage);
  }
  if (data.stopTime != null) {
    contents.stopTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.stopTime));
  }
  if (data.storageCapacity != null) {
    contents.storageCapacity = __expectInt32(data.storageCapacity);
  }
  if (data.tags != null) {
    contents.tags = de_TagMap(data.tags, context);
  }
  if (data.workflowId != null) {
    contents.workflowId = __expectString(data.workflowId);
  }
  if (data.workflowType != null) {
    contents.workflowType = __expectString(data.workflowType);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetRunCommandError
 */
const de_GetRunCommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<GetRunCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.omics#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.omics#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.omics#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "RequestTimeoutException":
    case "com.amazonaws.omics#RequestTimeoutException":
      throw await de_RequestTimeoutExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.omics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.omics#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.omics#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.omics#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetRunGroupCommand
 */
export const de_GetRunGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRunGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetRunGroupCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.creationTime != null) {
    contents.creationTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.creationTime));
  }
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.maxCpus != null) {
    contents.maxCpus = __expectInt32(data.maxCpus);
  }
  if (data.maxDuration != null) {
    contents.maxDuration = __expectInt32(data.maxDuration);
  }
  if (data.maxRuns != null) {
    contents.maxRuns = __expectInt32(data.maxRuns);
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.tags != null) {
    contents.tags = de_TagMap(data.tags, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetRunGroupCommandError
 */
const de_GetRunGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRunGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.omics#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.omics#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.omics#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "RequestTimeoutException":
    case "com.amazonaws.omics#RequestTimeoutException":
      throw await de_RequestTimeoutExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.omics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.omics#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.omics#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.omics#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetRunTaskCommand
 */
export const de_GetRunTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRunTaskCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetRunTaskCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.cpus != null) {
    contents.cpus = __expectInt32(data.cpus);
  }
  if (data.creationTime != null) {
    contents.creationTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.creationTime));
  }
  if (data.logStream != null) {
    contents.logStream = __expectString(data.logStream);
  }
  if (data.memory != null) {
    contents.memory = __expectInt32(data.memory);
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.startTime != null) {
    contents.startTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.startTime));
  }
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  if (data.statusMessage != null) {
    contents.statusMessage = __expectString(data.statusMessage);
  }
  if (data.stopTime != null) {
    contents.stopTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.stopTime));
  }
  if (data.taskId != null) {
    contents.taskId = __expectString(data.taskId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetRunTaskCommandError
 */
const de_GetRunTaskCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRunTaskCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.omics#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.omics#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.omics#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "RequestTimeoutException":
    case "com.amazonaws.omics#RequestTimeoutException":
      throw await de_RequestTimeoutExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.omics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.omics#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.omics#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.omics#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetSequenceStoreCommand
 */
export const de_GetSequenceStoreCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSequenceStoreCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetSequenceStoreCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.creationTime != null) {
    contents.creationTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.creationTime));
  }
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.sseConfig != null) {
    contents.sseConfig = de_SseConfig(data.sseConfig, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetSequenceStoreCommandError
 */
const de_GetSequenceStoreCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSequenceStoreCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.omics#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.omics#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "RequestTimeoutException":
    case "com.amazonaws.omics#RequestTimeoutException":
      throw await de_RequestTimeoutExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.omics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.omics#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.omics#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetVariantImportJobCommand
 */
export const de_GetVariantImportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVariantImportJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetVariantImportJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.completionTime != null) {
    contents.completionTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.completionTime));
  }
  if (data.creationTime != null) {
    contents.creationTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.creationTime));
  }
  if (data.destinationName != null) {
    contents.destinationName = __expectString(data.destinationName);
  }
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.items != null) {
    contents.items = de_VariantImportItemDetails(data.items, context);
  }
  if (data.roleArn != null) {
    contents.roleArn = __expectString(data.roleArn);
  }
  if (data.runLeftNormalization != null) {
    contents.runLeftNormalization = __expectBoolean(data.runLeftNormalization);
  }
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  if (data.statusMessage != null) {
    contents.statusMessage = __expectString(data.statusMessage);
  }
  if (data.updateTime != null) {
    contents.updateTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.updateTime));
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetVariantImportJobCommandError
 */
const de_GetVariantImportJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVariantImportJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.omics#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.omics#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.omics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.omics#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.omics#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetVariantStoreCommand
 */
export const de_GetVariantStoreCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVariantStoreCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetVariantStoreCommandError(output, context);
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
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.reference != null) {
    contents.reference = de_ReferenceItem(__expectUnion(data.reference), context);
  }
  if (data.sseConfig != null) {
    contents.sseConfig = de_SseConfig(data.sseConfig, context);
  }
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  if (data.statusMessage != null) {
    contents.statusMessage = __expectString(data.statusMessage);
  }
  if (data.storeArn != null) {
    contents.storeArn = __expectString(data.storeArn);
  }
  if (data.storeSizeBytes != null) {
    contents.storeSizeBytes = __expectLong(data.storeSizeBytes);
  }
  if (data.tags != null) {
    contents.tags = de_TagMap(data.tags, context);
  }
  if (data.updateTime != null) {
    contents.updateTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.updateTime));
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetVariantStoreCommandError
 */
const de_GetVariantStoreCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVariantStoreCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.omics#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.omics#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.omics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.omics#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.omics#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetWorkflowCommand
 */
export const de_GetWorkflowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWorkflowCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetWorkflowCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.creationTime != null) {
    contents.creationTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.creationTime));
  }
  if (data.definition != null) {
    contents.definition = __expectString(data.definition);
  }
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.digest != null) {
    contents.digest = __expectString(data.digest);
  }
  if (data.engine != null) {
    contents.engine = __expectString(data.engine);
  }
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.main != null) {
    contents.main = __expectString(data.main);
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.parameterTemplate != null) {
    contents.parameterTemplate = de_WorkflowParameterTemplate(data.parameterTemplate, context);
  }
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  if (data.statusMessage != null) {
    contents.statusMessage = __expectString(data.statusMessage);
  }
  if (data.storageCapacity != null) {
    contents.storageCapacity = __expectInt32(data.storageCapacity);
  }
  if (data.tags != null) {
    contents.tags = de_TagMap(data.tags, context);
  }
  if (data.type != null) {
    contents.type = __expectString(data.type);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetWorkflowCommandError
 */
const de_GetWorkflowCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWorkflowCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.omics#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.omics#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.omics#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "RequestTimeoutException":
    case "com.amazonaws.omics#RequestTimeoutException":
      throw await de_RequestTimeoutExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.omics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.omics#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.omics#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.omics#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListAnnotationImportJobsCommand
 */
export const de_ListAnnotationImportJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAnnotationImportJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListAnnotationImportJobsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.annotationImportJobs != null) {
    contents.annotationImportJobs = de_AnnotationImportJobItems(data.annotationImportJobs, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListAnnotationImportJobsCommandError
 */
const de_ListAnnotationImportJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAnnotationImportJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.omics#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.omics#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.omics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.omics#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.omics#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListAnnotationStoresCommand
 */
export const de_ListAnnotationStoresCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAnnotationStoresCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListAnnotationStoresCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.annotationStores != null) {
    contents.annotationStores = de_AnnotationStoreItems(data.annotationStores, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListAnnotationStoresCommandError
 */
const de_ListAnnotationStoresCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAnnotationStoresCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.omics#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.omics#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.omics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.omics#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.omics#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListReadSetActivationJobsCommand
 */
export const de_ListReadSetActivationJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReadSetActivationJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListReadSetActivationJobsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.activationJobs != null) {
    contents.activationJobs = de_ActivateReadSetJobList(data.activationJobs, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListReadSetActivationJobsCommandError
 */
const de_ListReadSetActivationJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReadSetActivationJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.omics#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.omics#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "RequestTimeoutException":
    case "com.amazonaws.omics#RequestTimeoutException":
      throw await de_RequestTimeoutExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.omics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.omics#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.omics#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListReadSetExportJobsCommand
 */
export const de_ListReadSetExportJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReadSetExportJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListReadSetExportJobsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.exportJobs != null) {
    contents.exportJobs = de_ExportReadSetJobDetailList(data.exportJobs, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListReadSetExportJobsCommandError
 */
const de_ListReadSetExportJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReadSetExportJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.omics#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.omics#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "RequestTimeoutException":
    case "com.amazonaws.omics#RequestTimeoutException":
      throw await de_RequestTimeoutExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.omics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.omics#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.omics#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListReadSetImportJobsCommand
 */
export const de_ListReadSetImportJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReadSetImportJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListReadSetImportJobsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.importJobs != null) {
    contents.importJobs = de_ImportReadSetJobList(data.importJobs, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListReadSetImportJobsCommandError
 */
const de_ListReadSetImportJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReadSetImportJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.omics#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.omics#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "RequestTimeoutException":
    case "com.amazonaws.omics#RequestTimeoutException":
      throw await de_RequestTimeoutExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.omics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.omics#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.omics#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListReadSetsCommand
 */
export const de_ListReadSetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReadSetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListReadSetsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.readSets != null) {
    contents.readSets = de_ReadSetList(data.readSets, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListReadSetsCommandError
 */
const de_ListReadSetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReadSetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.omics#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.omics#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "RequestTimeoutException":
    case "com.amazonaws.omics#RequestTimeoutException":
      throw await de_RequestTimeoutExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.omics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.omics#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.omics#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListReferenceImportJobsCommand
 */
export const de_ListReferenceImportJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReferenceImportJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListReferenceImportJobsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.importJobs != null) {
    contents.importJobs = de_ImportReferenceJobList(data.importJobs, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListReferenceImportJobsCommandError
 */
const de_ListReferenceImportJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReferenceImportJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.omics#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.omics#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "RequestTimeoutException":
    case "com.amazonaws.omics#RequestTimeoutException":
      throw await de_RequestTimeoutExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.omics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.omics#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.omics#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListReferencesCommand
 */
export const de_ListReferencesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReferencesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListReferencesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.references != null) {
    contents.references = de_ReferenceList(data.references, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListReferencesCommandError
 */
const de_ListReferencesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReferencesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.omics#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.omics#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "RequestTimeoutException":
    case "com.amazonaws.omics#RequestTimeoutException":
      throw await de_RequestTimeoutExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.omics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.omics#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.omics#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListReferenceStoresCommand
 */
export const de_ListReferenceStoresCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReferenceStoresCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListReferenceStoresCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.referenceStores != null) {
    contents.referenceStores = de_ReferenceStoreDetailList(data.referenceStores, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListReferenceStoresCommandError
 */
const de_ListReferenceStoresCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReferenceStoresCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.omics#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.omics#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "RequestTimeoutException":
    case "com.amazonaws.omics#RequestTimeoutException":
      throw await de_RequestTimeoutExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.omics#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.omics#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListRunGroupsCommand
 */
export const de_ListRunGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRunGroupsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListRunGroupsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.items != null) {
    contents.items = de_RunGroupList(data.items, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListRunGroupsCommandError
 */
const de_ListRunGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRunGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.omics#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.omics#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.omics#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "RequestTimeoutException":
    case "com.amazonaws.omics#RequestTimeoutException":
      throw await de_RequestTimeoutExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.omics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.omics#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.omics#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.omics#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListRunsCommand
 */
export const de_ListRunsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRunsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListRunsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.items != null) {
    contents.items = de_RunList(data.items, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListRunsCommandError
 */
const de_ListRunsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRunsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.omics#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.omics#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.omics#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "RequestTimeoutException":
    case "com.amazonaws.omics#RequestTimeoutException":
      throw await de_RequestTimeoutExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.omics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.omics#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.omics#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.omics#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListRunTasksCommand
 */
export const de_ListRunTasksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRunTasksCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListRunTasksCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.items != null) {
    contents.items = de_TaskList(data.items, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListRunTasksCommandError
 */
const de_ListRunTasksCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRunTasksCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.omics#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.omics#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.omics#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "RequestTimeoutException":
    case "com.amazonaws.omics#RequestTimeoutException":
      throw await de_RequestTimeoutExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.omics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.omics#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.omics#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.omics#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListSequenceStoresCommand
 */
export const de_ListSequenceStoresCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSequenceStoresCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListSequenceStoresCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.sequenceStores != null) {
    contents.sequenceStores = de_SequenceStoreDetailList(data.sequenceStores, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListSequenceStoresCommandError
 */
const de_ListSequenceStoresCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSequenceStoresCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.omics#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.omics#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "RequestTimeoutException":
    case "com.amazonaws.omics#RequestTimeoutException":
      throw await de_RequestTimeoutExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.omics#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.omics#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
  if (data.tags != null) {
    contents.tags = de_TagMap(data.tags, context);
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
    case "AccessDeniedException":
    case "com.amazonaws.omics#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.omics#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.omics#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "RequestTimeoutException":
    case "com.amazonaws.omics#RequestTimeoutException":
      throw await de_RequestTimeoutExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.omics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.omics#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.omics#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.omics#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListVariantImportJobsCommand
 */
export const de_ListVariantImportJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVariantImportJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListVariantImportJobsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.variantImportJobs != null) {
    contents.variantImportJobs = de_VariantImportJobItems(data.variantImportJobs, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListVariantImportJobsCommandError
 */
const de_ListVariantImportJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVariantImportJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.omics#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.omics#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.omics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.omics#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.omics#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListVariantStoresCommand
 */
export const de_ListVariantStoresCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVariantStoresCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListVariantStoresCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.variantStores != null) {
    contents.variantStores = de_VariantStoreItems(data.variantStores, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListVariantStoresCommandError
 */
const de_ListVariantStoresCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVariantStoresCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.omics#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.omics#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.omics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.omics#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.omics#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListWorkflowsCommand
 */
export const de_ListWorkflowsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkflowsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListWorkflowsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.items != null) {
    contents.items = de_WorkflowList(data.items, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListWorkflowsCommandError
 */
const de_ListWorkflowsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkflowsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.omics#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.omics#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.omics#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "RequestTimeoutException":
    case "com.amazonaws.omics#RequestTimeoutException":
      throw await de_RequestTimeoutExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.omics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.omics#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.omics#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.omics#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1StartAnnotationImportJobCommand
 */
export const de_StartAnnotationImportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartAnnotationImportJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StartAnnotationImportJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.jobId != null) {
    contents.jobId = __expectString(data.jobId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1StartAnnotationImportJobCommandError
 */
const de_StartAnnotationImportJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartAnnotationImportJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.omics#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.omics#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.omics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.omics#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.omics#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.omics#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1StartReadSetActivationJobCommand
 */
export const de_StartReadSetActivationJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartReadSetActivationJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StartReadSetActivationJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.creationTime != null) {
    contents.creationTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.creationTime));
  }
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.sequenceStoreId != null) {
    contents.sequenceStoreId = __expectString(data.sequenceStoreId);
  }
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  return contents;
};

/**
 * deserializeAws_restJson1StartReadSetActivationJobCommandError
 */
const de_StartReadSetActivationJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartReadSetActivationJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.omics#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.omics#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "RequestTimeoutException":
    case "com.amazonaws.omics#RequestTimeoutException":
      throw await de_RequestTimeoutExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.omics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.omics#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.omics#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.omics#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1StartReadSetExportJobCommand
 */
export const de_StartReadSetExportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartReadSetExportJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StartReadSetExportJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.creationTime != null) {
    contents.creationTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.creationTime));
  }
  if (data.destination != null) {
    contents.destination = __expectString(data.destination);
  }
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.sequenceStoreId != null) {
    contents.sequenceStoreId = __expectString(data.sequenceStoreId);
  }
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  return contents;
};

/**
 * deserializeAws_restJson1StartReadSetExportJobCommandError
 */
const de_StartReadSetExportJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartReadSetExportJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.omics#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.omics#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "RequestTimeoutException":
    case "com.amazonaws.omics#RequestTimeoutException":
      throw await de_RequestTimeoutExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.omics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.omics#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.omics#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.omics#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1StartReadSetImportJobCommand
 */
export const de_StartReadSetImportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartReadSetImportJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StartReadSetImportJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.creationTime != null) {
    contents.creationTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.creationTime));
  }
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.roleArn != null) {
    contents.roleArn = __expectString(data.roleArn);
  }
  if (data.sequenceStoreId != null) {
    contents.sequenceStoreId = __expectString(data.sequenceStoreId);
  }
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  return contents;
};

/**
 * deserializeAws_restJson1StartReadSetImportJobCommandError
 */
const de_StartReadSetImportJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartReadSetImportJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.omics#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.omics#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "RequestTimeoutException":
    case "com.amazonaws.omics#RequestTimeoutException":
      throw await de_RequestTimeoutExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.omics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.omics#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.omics#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.omics#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1StartReferenceImportJobCommand
 */
export const de_StartReferenceImportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartReferenceImportJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StartReferenceImportJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.creationTime != null) {
    contents.creationTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.creationTime));
  }
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.referenceStoreId != null) {
    contents.referenceStoreId = __expectString(data.referenceStoreId);
  }
  if (data.roleArn != null) {
    contents.roleArn = __expectString(data.roleArn);
  }
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  return contents;
};

/**
 * deserializeAws_restJson1StartReferenceImportJobCommandError
 */
const de_StartReferenceImportJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartReferenceImportJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.omics#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.omics#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "RequestTimeoutException":
    case "com.amazonaws.omics#RequestTimeoutException":
      throw await de_RequestTimeoutExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.omics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.omics#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.omics#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.omics#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1StartRunCommand
 */
export const de_StartRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartRunCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_StartRunCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  if (data.tags != null) {
    contents.tags = de_TagMap(data.tags, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1StartRunCommandError
 */
const de_StartRunCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartRunCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.omics#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.omics#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.omics#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "RequestTimeoutException":
    case "com.amazonaws.omics#RequestTimeoutException":
      throw await de_RequestTimeoutExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.omics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.omics#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.omics#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.omics#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1StartVariantImportJobCommand
 */
export const de_StartVariantImportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartVariantImportJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StartVariantImportJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.jobId != null) {
    contents.jobId = __expectString(data.jobId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1StartVariantImportJobCommandError
 */
const de_StartVariantImportJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartVariantImportJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.omics#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.omics#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.omics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.omics#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.omics#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.omics#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
    case "AccessDeniedException":
    case "com.amazonaws.omics#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.omics#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.omics#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "RequestTimeoutException":
    case "com.amazonaws.omics#RequestTimeoutException":
      throw await de_RequestTimeoutExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.omics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.omics#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.omics#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.omics#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
    case "AccessDeniedException":
    case "com.amazonaws.omics#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.omics#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.omics#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "RequestTimeoutException":
    case "com.amazonaws.omics#RequestTimeoutException":
      throw await de_RequestTimeoutExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.omics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.omics#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.omics#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.omics#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateAnnotationStoreCommand
 */
export const de_UpdateAnnotationStoreCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAnnotationStoreCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateAnnotationStoreCommandError(output, context);
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
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.reference != null) {
    contents.reference = de_ReferenceItem(__expectUnion(data.reference), context);
  }
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  if (data.storeFormat != null) {
    contents.storeFormat = __expectString(data.storeFormat);
  }
  if (data.storeOptions != null) {
    contents.storeOptions = de_StoreOptions(__expectUnion(data.storeOptions), context);
  }
  if (data.updateTime != null) {
    contents.updateTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.updateTime));
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateAnnotationStoreCommandError
 */
const de_UpdateAnnotationStoreCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAnnotationStoreCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.omics#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.omics#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.omics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.omics#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.omics#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateRunGroupCommand
 */
export const de_UpdateRunGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRunGroupCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_UpdateRunGroupCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateRunGroupCommandError
 */
const de_UpdateRunGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRunGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.omics#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.omics#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.omics#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "RequestTimeoutException":
    case "com.amazonaws.omics#RequestTimeoutException":
      throw await de_RequestTimeoutExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.omics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.omics#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.omics#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.omics#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateVariantStoreCommand
 */
export const de_UpdateVariantStoreCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVariantStoreCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateVariantStoreCommandError(output, context);
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
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.reference != null) {
    contents.reference = de_ReferenceItem(__expectUnion(data.reference), context);
  }
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  if (data.updateTime != null) {
    contents.updateTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.updateTime));
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateVariantStoreCommandError
 */
const de_UpdateVariantStoreCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVariantStoreCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.omics#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.omics#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.omics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.omics#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.omics#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateWorkflowCommand
 */
export const de_UpdateWorkflowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWorkflowCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_UpdateWorkflowCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateWorkflowCommandError
 */
const de_UpdateWorkflowCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWorkflowCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.omics#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.omics#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.omics#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "RequestTimeoutException":
    case "com.amazonaws.omics#RequestTimeoutException":
      throw await de_RequestTimeoutExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.omics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.omics#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.omics#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.omics#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
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
 * deserializeAws_restJson1InternalServerExceptionRes
 */
const de_InternalServerExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new InternalServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1RangeNotSatisfiableExceptionRes
 */
const de_RangeNotSatisfiableExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RangeNotSatisfiableException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new RangeNotSatisfiableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1RequestTimeoutExceptionRes
 */
const de_RequestTimeoutExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RequestTimeoutException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new RequestTimeoutException({
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
  if (data.message != null) {
    contents.message = __expectString(data.message);
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
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
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
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
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
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * serializeAws_restJson1ActivateReadSetFilter
 */
const se_ActivateReadSetFilter = (input: ActivateReadSetFilter, context: __SerdeContext): any => {
  return {
    ...(input.createdAfter != null && { createdAfter: input.createdAfter.toISOString().split(".")[0] + "Z" }),
    ...(input.createdBefore != null && { createdBefore: input.createdBefore.toISOString().split(".")[0] + "Z" }),
    ...(input.status != null && { status: input.status }),
  };
};

/**
 * serializeAws_restJson1AnnotationImportItemSource
 */
const se_AnnotationImportItemSource = (input: AnnotationImportItemSource, context: __SerdeContext): any => {
  return {
    ...(input.source != null && { source: input.source }),
  };
};

/**
 * serializeAws_restJson1AnnotationImportItemSources
 */
const se_AnnotationImportItemSources = (input: AnnotationImportItemSource[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_AnnotationImportItemSource(entry, context);
    });
};

/**
 * serializeAws_restJson1ExportReadSet
 */
const se_ExportReadSet = (input: ExportReadSet, context: __SerdeContext): any => {
  return {
    ...(input.readSetId != null && { readSetId: input.readSetId }),
  };
};

/**
 * serializeAws_restJson1ExportReadSetFilter
 */
const se_ExportReadSetFilter = (input: ExportReadSetFilter, context: __SerdeContext): any => {
  return {
    ...(input.createdAfter != null && { createdAfter: input.createdAfter.toISOString().split(".")[0] + "Z" }),
    ...(input.createdBefore != null && { createdBefore: input.createdBefore.toISOString().split(".")[0] + "Z" }),
    ...(input.status != null && { status: input.status }),
  };
};

/**
 * serializeAws_restJson1ExportReadSetList
 */
const se_ExportReadSetList = (input: ExportReadSet[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ExportReadSet(entry, context);
    });
};

/**
 * serializeAws_restJson1FormatOptions
 */
const se_FormatOptions = (input: FormatOptions, context: __SerdeContext): any => {
  return FormatOptions.visit(input, {
    tsvOptions: (value) => ({ tsvOptions: se_TsvOptions(value, context) }),
    vcfOptions: (value) => ({ vcfOptions: se_VcfOptions(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

/**
 * serializeAws_restJson1FormatToHeader
 */
const se_FormatToHeader = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [FormatToHeaderKey | string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1IdList
 */
const se_IdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1ImportReadSetFilter
 */
const se_ImportReadSetFilter = (input: ImportReadSetFilter, context: __SerdeContext): any => {
  return {
    ...(input.createdAfter != null && { createdAfter: input.createdAfter.toISOString().split(".")[0] + "Z" }),
    ...(input.createdBefore != null && { createdBefore: input.createdBefore.toISOString().split(".")[0] + "Z" }),
    ...(input.status != null && { status: input.status }),
  };
};

/**
 * serializeAws_restJson1ImportReferenceFilter
 */
const se_ImportReferenceFilter = (input: ImportReferenceFilter, context: __SerdeContext): any => {
  return {
    ...(input.createdAfter != null && { createdAfter: input.createdAfter.toISOString().split(".")[0] + "Z" }),
    ...(input.createdBefore != null && { createdBefore: input.createdBefore.toISOString().split(".")[0] + "Z" }),
    ...(input.status != null && { status: input.status }),
  };
};

/**
 * serializeAws_restJson1ListAnnotationImportJobsFilter
 */
const se_ListAnnotationImportJobsFilter = (input: ListAnnotationImportJobsFilter, context: __SerdeContext): any => {
  return {
    ...(input.status != null && { status: input.status }),
    ...(input.storeName != null && { storeName: input.storeName }),
  };
};

/**
 * serializeAws_restJson1ListAnnotationStoresFilter
 */
const se_ListAnnotationStoresFilter = (input: ListAnnotationStoresFilter, context: __SerdeContext): any => {
  return {
    ...(input.status != null && { status: input.status }),
  };
};

/**
 * serializeAws_restJson1ListVariantImportJobsFilter
 */
const se_ListVariantImportJobsFilter = (input: ListVariantImportJobsFilter, context: __SerdeContext): any => {
  return {
    ...(input.status != null && { status: input.status }),
    ...(input.storeName != null && { storeName: input.storeName }),
  };
};

/**
 * serializeAws_restJson1ListVariantStoresFilter
 */
const se_ListVariantStoresFilter = (input: ListVariantStoresFilter, context: __SerdeContext): any => {
  return {
    ...(input.status != null && { status: input.status }),
  };
};

/**
 * serializeAws_restJson1ReadOptions
 */
const se_ReadOptions = (input: ReadOptions, context: __SerdeContext): any => {
  return {
    ...(input.comment != null && { comment: input.comment }),
    ...(input.encoding != null && { encoding: input.encoding }),
    ...(input.escape != null && { escape: input.escape }),
    ...(input.escapeQuotes != null && { escapeQuotes: input.escapeQuotes }),
    ...(input.header != null && { header: input.header }),
    ...(input.lineSep != null && { lineSep: input.lineSep }),
    ...(input.quote != null && { quote: input.quote }),
    ...(input.quoteAll != null && { quoteAll: input.quoteAll }),
    ...(input.sep != null && { sep: input.sep }),
  };
};

/**
 * serializeAws_restJson1ReadSetFilter
 */
const se_ReadSetFilter = (input: ReadSetFilter, context: __SerdeContext): any => {
  return {
    ...(input.createdAfter != null && { createdAfter: input.createdAfter.toISOString().split(".")[0] + "Z" }),
    ...(input.createdBefore != null && { createdBefore: input.createdBefore.toISOString().split(".")[0] + "Z" }),
    ...(input.name != null && { name: input.name }),
    ...(input.referenceArn != null && { referenceArn: input.referenceArn }),
    ...(input.status != null && { status: input.status }),
  };
};

/**
 * serializeAws_restJson1ReadSetIdList
 */
const se_ReadSetIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1ReferenceFilter
 */
const se_ReferenceFilter = (input: ReferenceFilter, context: __SerdeContext): any => {
  return {
    ...(input.createdAfter != null && { createdAfter: input.createdAfter.toISOString().split(".")[0] + "Z" }),
    ...(input.createdBefore != null && { createdBefore: input.createdBefore.toISOString().split(".")[0] + "Z" }),
    ...(input.md5 != null && { md5: input.md5 }),
    ...(input.name != null && { name: input.name }),
  };
};

/**
 * serializeAws_restJson1ReferenceItem
 */
const se_ReferenceItem = (input: ReferenceItem, context: __SerdeContext): any => {
  return ReferenceItem.visit(input, {
    referenceArn: (value) => ({ referenceArn: value }),
    _: (name, value) => ({ name: value } as any),
  });
};

/**
 * serializeAws_restJson1ReferenceStoreFilter
 */
const se_ReferenceStoreFilter = (input: ReferenceStoreFilter, context: __SerdeContext): any => {
  return {
    ...(input.createdAfter != null && { createdAfter: input.createdAfter.toISOString().split(".")[0] + "Z" }),
    ...(input.createdBefore != null && { createdBefore: input.createdBefore.toISOString().split(".")[0] + "Z" }),
    ...(input.name != null && { name: input.name }),
  };
};

/**
 * serializeAws_restJson1RunParameters
 */
const se_RunParameters = (input: __DocumentType, context: __SerdeContext): any => {
  return input;
};

/**
 * serializeAws_restJson1Schema
 */
const se_Schema = (input: Record<string, SchemaValueType | string>[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_SchemaItem(entry, context);
    });
};

/**
 * serializeAws_restJson1SchemaItem
 */
const se_SchemaItem = (input: Record<string, SchemaValueType | string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1SequenceStoreFilter
 */
const se_SequenceStoreFilter = (input: SequenceStoreFilter, context: __SerdeContext): any => {
  return {
    ...(input.createdAfter != null && { createdAfter: input.createdAfter.toISOString().split(".")[0] + "Z" }),
    ...(input.createdBefore != null && { createdBefore: input.createdBefore.toISOString().split(".")[0] + "Z" }),
    ...(input.name != null && { name: input.name }),
  };
};

/**
 * serializeAws_restJson1SourceFiles
 */
const se_SourceFiles = (input: SourceFiles, context: __SerdeContext): any => {
  return {
    ...(input.source1 != null && { source1: input.source1 }),
    ...(input.source2 != null && { source2: input.source2 }),
  };
};

/**
 * serializeAws_restJson1SseConfig
 */
const se_SseConfig = (input: SseConfig, context: __SerdeContext): any => {
  return {
    ...(input.keyArn != null && { keyArn: input.keyArn }),
    ...(input.type != null && { type: input.type }),
  };
};

/**
 * serializeAws_restJson1StartReadSetActivationJobSourceItem
 */
const se_StartReadSetActivationJobSourceItem = (
  input: StartReadSetActivationJobSourceItem,
  context: __SerdeContext
): any => {
  return {
    ...(input.readSetId != null && { readSetId: input.readSetId }),
  };
};

/**
 * serializeAws_restJson1StartReadSetActivationJobSourceList
 */
const se_StartReadSetActivationJobSourceList = (
  input: StartReadSetActivationJobSourceItem[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_StartReadSetActivationJobSourceItem(entry, context);
    });
};

/**
 * serializeAws_restJson1StartReadSetImportJobSourceItem
 */
const se_StartReadSetImportJobSourceItem = (input: StartReadSetImportJobSourceItem, context: __SerdeContext): any => {
  return {
    ...(input.description != null && { description: input.description }),
    ...(input.generatedFrom != null && { generatedFrom: input.generatedFrom }),
    ...(input.name != null && { name: input.name }),
    ...(input.referenceArn != null && { referenceArn: input.referenceArn }),
    ...(input.sampleId != null && { sampleId: input.sampleId }),
    ...(input.sourceFileType != null && { sourceFileType: input.sourceFileType }),
    ...(input.sourceFiles != null && { sourceFiles: se_SourceFiles(input.sourceFiles, context) }),
    ...(input.subjectId != null && { subjectId: input.subjectId }),
    ...(input.tags != null && { tags: se_TagMap(input.tags, context) }),
  };
};

/**
 * serializeAws_restJson1StartReadSetImportJobSourceList
 */
const se_StartReadSetImportJobSourceList = (input: StartReadSetImportJobSourceItem[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_StartReadSetImportJobSourceItem(entry, context);
    });
};

/**
 * serializeAws_restJson1StartReferenceImportJobSourceItem
 */
const se_StartReferenceImportJobSourceItem = (
  input: StartReferenceImportJobSourceItem,
  context: __SerdeContext
): any => {
  return {
    ...(input.description != null && { description: input.description }),
    ...(input.name != null && { name: input.name }),
    ...(input.sourceFile != null && { sourceFile: input.sourceFile }),
    ...(input.tags != null && { tags: se_TagMap(input.tags, context) }),
  };
};

/**
 * serializeAws_restJson1StartReferenceImportJobSourceList
 */
const se_StartReferenceImportJobSourceList = (
  input: StartReferenceImportJobSourceItem[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_StartReferenceImportJobSourceItem(entry, context);
    });
};

/**
 * serializeAws_restJson1StoreOptions
 */
const se_StoreOptions = (input: StoreOptions, context: __SerdeContext): any => {
  return StoreOptions.visit(input, {
    tsvStoreOptions: (value) => ({ tsvStoreOptions: se_TsvStoreOptions(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
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
 * serializeAws_restJson1TsvOptions
 */
const se_TsvOptions = (input: TsvOptions, context: __SerdeContext): any => {
  return {
    ...(input.readOptions != null && { readOptions: se_ReadOptions(input.readOptions, context) }),
  };
};

/**
 * serializeAws_restJson1TsvStoreOptions
 */
const se_TsvStoreOptions = (input: TsvStoreOptions, context: __SerdeContext): any => {
  return {
    ...(input.annotationType != null && { annotationType: input.annotationType }),
    ...(input.formatToHeader != null && { formatToHeader: se_FormatToHeader(input.formatToHeader, context) }),
    ...(input.schema != null && { schema: se_Schema(input.schema, context) }),
  };
};

/**
 * serializeAws_restJson1VariantImportItemSource
 */
const se_VariantImportItemSource = (input: VariantImportItemSource, context: __SerdeContext): any => {
  return {
    ...(input.source != null && { source: input.source }),
  };
};

/**
 * serializeAws_restJson1VariantImportItemSources
 */
const se_VariantImportItemSources = (input: VariantImportItemSource[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_VariantImportItemSource(entry, context);
    });
};

/**
 * serializeAws_restJson1VcfOptions
 */
const se_VcfOptions = (input: VcfOptions, context: __SerdeContext): any => {
  return {
    ...(input.ignoreFilterField != null && { ignoreFilterField: input.ignoreFilterField }),
    ...(input.ignoreQualField != null && { ignoreQualField: input.ignoreQualField }),
  };
};

/**
 * serializeAws_restJson1WorkflowParameter
 */
const se_WorkflowParameter = (input: WorkflowParameter, context: __SerdeContext): any => {
  return {
    ...(input.description != null && { description: input.description }),
    ...(input.optional != null && { optional: input.optional }),
  };
};

/**
 * serializeAws_restJson1WorkflowParameterTemplate
 */
const se_WorkflowParameterTemplate = (input: Record<string, WorkflowParameter>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_WorkflowParameter(value, context);
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1ActivateReadSetJobItem
 */
const de_ActivateReadSetJobItem = (output: any, context: __SerdeContext): ActivateReadSetJobItem => {
  return {
    completionTime:
      output.completionTime != null
        ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.completionTime))
        : undefined,
    creationTime:
      output.creationTime != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.creationTime)) : undefined,
    id: __expectString(output.id),
    sequenceStoreId: __expectString(output.sequenceStoreId),
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_restJson1ActivateReadSetJobList
 */
const de_ActivateReadSetJobList = (output: any, context: __SerdeContext): ActivateReadSetJobItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ActivateReadSetJobItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ActivateReadSetSourceItem
 */
const de_ActivateReadSetSourceItem = (output: any, context: __SerdeContext): ActivateReadSetSourceItem => {
  return {
    readSetId: __expectString(output.readSetId),
    status: __expectString(output.status),
    statusMessage: __expectString(output.statusMessage),
  } as any;
};

/**
 * deserializeAws_restJson1ActivateReadSetSourceList
 */
const de_ActivateReadSetSourceList = (output: any, context: __SerdeContext): ActivateReadSetSourceItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ActivateReadSetSourceItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AnnotationImportItemDetail
 */
const de_AnnotationImportItemDetail = (output: any, context: __SerdeContext): AnnotationImportItemDetail => {
  return {
    jobStatus: __expectString(output.jobStatus),
    source: __expectString(output.source),
  } as any;
};

/**
 * deserializeAws_restJson1AnnotationImportItemDetails
 */
const de_AnnotationImportItemDetails = (output: any, context: __SerdeContext): AnnotationImportItemDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AnnotationImportItemDetail(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AnnotationImportJobItem
 */
const de_AnnotationImportJobItem = (output: any, context: __SerdeContext): AnnotationImportJobItem => {
  return {
    completionTime:
      output.completionTime != null
        ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.completionTime))
        : undefined,
    creationTime:
      output.creationTime != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.creationTime)) : undefined,
    destinationName: __expectString(output.destinationName),
    id: __expectString(output.id),
    roleArn: __expectString(output.roleArn),
    runLeftNormalization: __expectBoolean(output.runLeftNormalization),
    status: __expectString(output.status),
    updateTime:
      output.updateTime != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.updateTime)) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1AnnotationImportJobItems
 */
const de_AnnotationImportJobItems = (output: any, context: __SerdeContext): AnnotationImportJobItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AnnotationImportJobItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AnnotationStoreItem
 */
const de_AnnotationStoreItem = (output: any, context: __SerdeContext): AnnotationStoreItem => {
  return {
    creationTime:
      output.creationTime != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.creationTime)) : undefined,
    description: __expectString(output.description),
    id: __expectString(output.id),
    name: __expectString(output.name),
    reference: output.reference != null ? de_ReferenceItem(__expectUnion(output.reference), context) : undefined,
    sseConfig: output.sseConfig != null ? de_SseConfig(output.sseConfig, context) : undefined,
    status: __expectString(output.status),
    statusMessage: __expectString(output.statusMessage),
    storeArn: __expectString(output.storeArn),
    storeFormat: __expectString(output.storeFormat),
    storeSizeBytes: __expectLong(output.storeSizeBytes),
    updateTime:
      output.updateTime != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.updateTime)) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1AnnotationStoreItems
 */
const de_AnnotationStoreItems = (output: any, context: __SerdeContext): AnnotationStoreItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AnnotationStoreItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ExportReadSetDetail
 */
const de_ExportReadSetDetail = (output: any, context: __SerdeContext): ExportReadSetDetail => {
  return {
    id: __expectString(output.id),
    status: __expectString(output.status),
    statusMessage: __expectString(output.statusMessage),
  } as any;
};

/**
 * deserializeAws_restJson1ExportReadSetDetailList
 */
const de_ExportReadSetDetailList = (output: any, context: __SerdeContext): ExportReadSetDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ExportReadSetDetail(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ExportReadSetJobDetail
 */
const de_ExportReadSetJobDetail = (output: any, context: __SerdeContext): ExportReadSetJobDetail => {
  return {
    completionTime:
      output.completionTime != null
        ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.completionTime))
        : undefined,
    creationTime:
      output.creationTime != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.creationTime)) : undefined,
    destination: __expectString(output.destination),
    id: __expectString(output.id),
    sequenceStoreId: __expectString(output.sequenceStoreId),
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_restJson1ExportReadSetJobDetailList
 */
const de_ExportReadSetJobDetailList = (output: any, context: __SerdeContext): ExportReadSetJobDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ExportReadSetJobDetail(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1FileInformation
 */
const de_FileInformation = (output: any, context: __SerdeContext): FileInformation => {
  return {
    contentLength: __expectLong(output.contentLength),
    partSize: __expectLong(output.partSize),
    totalParts: __expectInt32(output.totalParts),
  } as any;
};

/**
 * deserializeAws_restJson1FormatOptions
 */
const de_FormatOptions = (output: any, context: __SerdeContext): FormatOptions => {
  if (output.tsvOptions != null) {
    return {
      tsvOptions: de_TsvOptions(output.tsvOptions, context),
    };
  }
  if (output.vcfOptions != null) {
    return {
      vcfOptions: de_VcfOptions(output.vcfOptions, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1FormatToHeader
 */
const de_FormatToHeader = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce(
    (acc: Record<string, string>, [key, value]: [FormatToHeaderKey | string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key] = __expectString(value) as any;
      return acc;
    },
    {}
  );
};

/**
 * deserializeAws_restJson1ImportReadSetJobItem
 */
const de_ImportReadSetJobItem = (output: any, context: __SerdeContext): ImportReadSetJobItem => {
  return {
    completionTime:
      output.completionTime != null
        ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.completionTime))
        : undefined,
    creationTime:
      output.creationTime != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.creationTime)) : undefined,
    id: __expectString(output.id),
    roleArn: __expectString(output.roleArn),
    sequenceStoreId: __expectString(output.sequenceStoreId),
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_restJson1ImportReadSetJobList
 */
const de_ImportReadSetJobList = (output: any, context: __SerdeContext): ImportReadSetJobItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ImportReadSetJobItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ImportReadSetSourceItem
 */
const de_ImportReadSetSourceItem = (output: any, context: __SerdeContext): ImportReadSetSourceItem => {
  return {
    description: __expectString(output.description),
    generatedFrom: __expectString(output.generatedFrom),
    name: __expectString(output.name),
    referenceArn: __expectString(output.referenceArn),
    sampleId: __expectString(output.sampleId),
    sourceFileType: __expectString(output.sourceFileType),
    sourceFiles: output.sourceFiles != null ? de_SourceFiles(output.sourceFiles, context) : undefined,
    status: __expectString(output.status),
    statusMessage: __expectString(output.statusMessage),
    subjectId: __expectString(output.subjectId),
    tags: output.tags != null ? de_TagMap(output.tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ImportReadSetSourceList
 */
const de_ImportReadSetSourceList = (output: any, context: __SerdeContext): ImportReadSetSourceItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ImportReadSetSourceItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ImportReferenceJobItem
 */
const de_ImportReferenceJobItem = (output: any, context: __SerdeContext): ImportReferenceJobItem => {
  return {
    completionTime:
      output.completionTime != null
        ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.completionTime))
        : undefined,
    creationTime:
      output.creationTime != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.creationTime)) : undefined,
    id: __expectString(output.id),
    referenceStoreId: __expectString(output.referenceStoreId),
    roleArn: __expectString(output.roleArn),
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_restJson1ImportReferenceJobList
 */
const de_ImportReferenceJobList = (output: any, context: __SerdeContext): ImportReferenceJobItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ImportReferenceJobItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ImportReferenceSourceItem
 */
const de_ImportReferenceSourceItem = (output: any, context: __SerdeContext): ImportReferenceSourceItem => {
  return {
    description: __expectString(output.description),
    name: __expectString(output.name),
    sourceFile: __expectString(output.sourceFile),
    status: __expectString(output.status),
    statusMessage: __expectString(output.statusMessage),
    tags: output.tags != null ? de_TagMap(output.tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ImportReferenceSourceList
 */
const de_ImportReferenceSourceList = (output: any, context: __SerdeContext): ImportReferenceSourceItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ImportReferenceSourceItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ReadOptions
 */
const de_ReadOptions = (output: any, context: __SerdeContext): ReadOptions => {
  return {
    comment: __expectString(output.comment),
    encoding: __expectString(output.encoding),
    escape: __expectString(output.escape),
    escapeQuotes: __expectBoolean(output.escapeQuotes),
    header: __expectBoolean(output.header),
    lineSep: __expectString(output.lineSep),
    quote: __expectString(output.quote),
    quoteAll: __expectBoolean(output.quoteAll),
    sep: __expectString(output.sep),
  } as any;
};

/**
 * deserializeAws_restJson1ReadSetBatchError
 */
const de_ReadSetBatchError = (output: any, context: __SerdeContext): ReadSetBatchError => {
  return {
    code: __expectString(output.code),
    id: __expectString(output.id),
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_restJson1ReadSetBatchErrorList
 */
const de_ReadSetBatchErrorList = (output: any, context: __SerdeContext): ReadSetBatchError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ReadSetBatchError(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ReadSetFiles
 */
const de_ReadSetFiles = (output: any, context: __SerdeContext): ReadSetFiles => {
  return {
    index: output.index != null ? de_FileInformation(output.index, context) : undefined,
    source1: output.source1 != null ? de_FileInformation(output.source1, context) : undefined,
    source2: output.source2 != null ? de_FileInformation(output.source2, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ReadSetList
 */
const de_ReadSetList = (output: any, context: __SerdeContext): ReadSetListItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ReadSetListItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ReadSetListItem
 */
const de_ReadSetListItem = (output: any, context: __SerdeContext): ReadSetListItem => {
  return {
    arn: __expectString(output.arn),
    creationTime:
      output.creationTime != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.creationTime)) : undefined,
    description: __expectString(output.description),
    fileType: __expectString(output.fileType),
    id: __expectString(output.id),
    name: __expectString(output.name),
    referenceArn: __expectString(output.referenceArn),
    sampleId: __expectString(output.sampleId),
    sequenceInformation:
      output.sequenceInformation != null ? de_SequenceInformation(output.sequenceInformation, context) : undefined,
    sequenceStoreId: __expectString(output.sequenceStoreId),
    status: __expectString(output.status),
    subjectId: __expectString(output.subjectId),
  } as any;
};

/**
 * deserializeAws_restJson1ReferenceFiles
 */
const de_ReferenceFiles = (output: any, context: __SerdeContext): ReferenceFiles => {
  return {
    index: output.index != null ? de_FileInformation(output.index, context) : undefined,
    source: output.source != null ? de_FileInformation(output.source, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ReferenceItem
 */
const de_ReferenceItem = (output: any, context: __SerdeContext): ReferenceItem => {
  if (__expectString(output.referenceArn) !== undefined) {
    return { referenceArn: __expectString(output.referenceArn) as any };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1ReferenceList
 */
const de_ReferenceList = (output: any, context: __SerdeContext): ReferenceListItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ReferenceListItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ReferenceListItem
 */
const de_ReferenceListItem = (output: any, context: __SerdeContext): ReferenceListItem => {
  return {
    arn: __expectString(output.arn),
    creationTime:
      output.creationTime != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.creationTime)) : undefined,
    description: __expectString(output.description),
    id: __expectString(output.id),
    md5: __expectString(output.md5),
    name: __expectString(output.name),
    referenceStoreId: __expectString(output.referenceStoreId),
    status: __expectString(output.status),
    updateTime:
      output.updateTime != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.updateTime)) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ReferenceStoreDetail
 */
const de_ReferenceStoreDetail = (output: any, context: __SerdeContext): ReferenceStoreDetail => {
  return {
    arn: __expectString(output.arn),
    creationTime:
      output.creationTime != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.creationTime)) : undefined,
    description: __expectString(output.description),
    id: __expectString(output.id),
    name: __expectString(output.name),
    sseConfig: output.sseConfig != null ? de_SseConfig(output.sseConfig, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ReferenceStoreDetailList
 */
const de_ReferenceStoreDetailList = (output: any, context: __SerdeContext): ReferenceStoreDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ReferenceStoreDetail(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1RunGroupList
 */
const de_RunGroupList = (output: any, context: __SerdeContext): RunGroupListItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RunGroupListItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1RunGroupListItem
 */
const de_RunGroupListItem = (output: any, context: __SerdeContext): RunGroupListItem => {
  return {
    arn: __expectString(output.arn),
    creationTime:
      output.creationTime != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.creationTime)) : undefined,
    id: __expectString(output.id),
    maxCpus: __expectInt32(output.maxCpus),
    maxDuration: __expectInt32(output.maxDuration),
    maxRuns: __expectInt32(output.maxRuns),
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_restJson1RunList
 */
const de_RunList = (output: any, context: __SerdeContext): RunListItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RunListItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1RunListItem
 */
const de_RunListItem = (output: any, context: __SerdeContext): RunListItem => {
  return {
    arn: __expectString(output.arn),
    creationTime:
      output.creationTime != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.creationTime)) : undefined,
    id: __expectString(output.id),
    name: __expectString(output.name),
    priority: __expectInt32(output.priority),
    startTime:
      output.startTime != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.startTime)) : undefined,
    status: __expectString(output.status),
    stopTime: output.stopTime != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.stopTime)) : undefined,
    storageCapacity: __expectInt32(output.storageCapacity),
    workflowId: __expectString(output.workflowId),
  } as any;
};

/**
 * deserializeAws_restJson1RunParameters
 */
const de_RunParameters = (output: any, context: __SerdeContext): __DocumentType => {
  return output;
};

/**
 * deserializeAws_restJson1RunResourceDigests
 */
const de_RunResourceDigests = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1Schema
 */
const de_Schema = (output: any, context: __SerdeContext): Record<string, SchemaValueType | string>[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SchemaItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SchemaItem
 */
const de_SchemaItem = (output: any, context: __SerdeContext): Record<string, SchemaValueType | string> => {
  return Object.entries(output).reduce((acc: Record<string, SchemaValueType | string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1SequenceInformation
 */
const de_SequenceInformation = (output: any, context: __SerdeContext): SequenceInformation => {
  return {
    alignment: __expectString(output.alignment),
    generatedFrom: __expectString(output.generatedFrom),
    totalBaseCount: __expectLong(output.totalBaseCount),
    totalReadCount: __expectLong(output.totalReadCount),
  } as any;
};

/**
 * deserializeAws_restJson1SequenceStoreDetail
 */
const de_SequenceStoreDetail = (output: any, context: __SerdeContext): SequenceStoreDetail => {
  return {
    arn: __expectString(output.arn),
    creationTime:
      output.creationTime != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.creationTime)) : undefined,
    description: __expectString(output.description),
    id: __expectString(output.id),
    name: __expectString(output.name),
    sseConfig: output.sseConfig != null ? de_SseConfig(output.sseConfig, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1SequenceStoreDetailList
 */
const de_SequenceStoreDetailList = (output: any, context: __SerdeContext): SequenceStoreDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SequenceStoreDetail(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SourceFiles
 */
const de_SourceFiles = (output: any, context: __SerdeContext): SourceFiles => {
  return {
    source1: __expectString(output.source1),
    source2: __expectString(output.source2),
  } as any;
};

/**
 * deserializeAws_restJson1SseConfig
 */
const de_SseConfig = (output: any, context: __SerdeContext): SseConfig => {
  return {
    keyArn: __expectString(output.keyArn),
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_restJson1StoreOptions
 */
const de_StoreOptions = (output: any, context: __SerdeContext): StoreOptions => {
  if (output.tsvStoreOptions != null) {
    return {
      tsvStoreOptions: de_TsvStoreOptions(output.tsvStoreOptions, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
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
 * deserializeAws_restJson1TaskList
 */
const de_TaskList = (output: any, context: __SerdeContext): TaskListItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_TaskListItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1TaskListItem
 */
const de_TaskListItem = (output: any, context: __SerdeContext): TaskListItem => {
  return {
    cpus: __expectInt32(output.cpus),
    creationTime:
      output.creationTime != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.creationTime)) : undefined,
    memory: __expectInt32(output.memory),
    name: __expectString(output.name),
    startTime:
      output.startTime != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.startTime)) : undefined,
    status: __expectString(output.status),
    stopTime: output.stopTime != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.stopTime)) : undefined,
    taskId: __expectString(output.taskId),
  } as any;
};

/**
 * deserializeAws_restJson1TsvOptions
 */
const de_TsvOptions = (output: any, context: __SerdeContext): TsvOptions => {
  return {
    readOptions: output.readOptions != null ? de_ReadOptions(output.readOptions, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1TsvStoreOptions
 */
const de_TsvStoreOptions = (output: any, context: __SerdeContext): TsvStoreOptions => {
  return {
    annotationType: __expectString(output.annotationType),
    formatToHeader: output.formatToHeader != null ? de_FormatToHeader(output.formatToHeader, context) : undefined,
    schema: output.schema != null ? de_Schema(output.schema, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1VariantImportItemDetail
 */
const de_VariantImportItemDetail = (output: any, context: __SerdeContext): VariantImportItemDetail => {
  return {
    jobStatus: __expectString(output.jobStatus),
    source: __expectString(output.source),
    statusMessage: __expectString(output.statusMessage),
  } as any;
};

/**
 * deserializeAws_restJson1VariantImportItemDetails
 */
const de_VariantImportItemDetails = (output: any, context: __SerdeContext): VariantImportItemDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_VariantImportItemDetail(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1VariantImportJobItem
 */
const de_VariantImportJobItem = (output: any, context: __SerdeContext): VariantImportJobItem => {
  return {
    completionTime:
      output.completionTime != null
        ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.completionTime))
        : undefined,
    creationTime:
      output.creationTime != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.creationTime)) : undefined,
    destinationName: __expectString(output.destinationName),
    id: __expectString(output.id),
    roleArn: __expectString(output.roleArn),
    runLeftNormalization: __expectBoolean(output.runLeftNormalization),
    status: __expectString(output.status),
    updateTime:
      output.updateTime != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.updateTime)) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1VariantImportJobItems
 */
const de_VariantImportJobItems = (output: any, context: __SerdeContext): VariantImportJobItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_VariantImportJobItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1VariantStoreItem
 */
const de_VariantStoreItem = (output: any, context: __SerdeContext): VariantStoreItem => {
  return {
    creationTime:
      output.creationTime != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.creationTime)) : undefined,
    description: __expectString(output.description),
    id: __expectString(output.id),
    name: __expectString(output.name),
    reference: output.reference != null ? de_ReferenceItem(__expectUnion(output.reference), context) : undefined,
    sseConfig: output.sseConfig != null ? de_SseConfig(output.sseConfig, context) : undefined,
    status: __expectString(output.status),
    statusMessage: __expectString(output.statusMessage),
    storeArn: __expectString(output.storeArn),
    storeSizeBytes: __expectLong(output.storeSizeBytes),
    updateTime:
      output.updateTime != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.updateTime)) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1VariantStoreItems
 */
const de_VariantStoreItems = (output: any, context: __SerdeContext): VariantStoreItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_VariantStoreItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1VcfOptions
 */
const de_VcfOptions = (output: any, context: __SerdeContext): VcfOptions => {
  return {
    ignoreFilterField: __expectBoolean(output.ignoreFilterField),
    ignoreQualField: __expectBoolean(output.ignoreQualField),
  } as any;
};

/**
 * deserializeAws_restJson1WorkflowList
 */
const de_WorkflowList = (output: any, context: __SerdeContext): WorkflowListItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_WorkflowListItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1WorkflowListItem
 */
const de_WorkflowListItem = (output: any, context: __SerdeContext): WorkflowListItem => {
  return {
    arn: __expectString(output.arn),
    creationTime:
      output.creationTime != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.creationTime)) : undefined,
    digest: __expectString(output.digest),
    id: __expectString(output.id),
    name: __expectString(output.name),
    status: __expectString(output.status),
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_restJson1WorkflowParameter
 */
const de_WorkflowParameter = (output: any, context: __SerdeContext): WorkflowParameter => {
  return {
    description: __expectString(output.description),
    optional: __expectBoolean(output.optional),
  } as any;
};

/**
 * deserializeAws_restJson1WorkflowParameterTemplate
 */
const de_WorkflowParameterTemplate = (output: any, context: __SerdeContext): Record<string, WorkflowParameter> => {
  return Object.entries(output).reduce((acc: Record<string, WorkflowParameter>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_WorkflowParameter(value, context);
    return acc;
  }, {});
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
