// smithy-typescript generated code
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse,
  isValidHostname as __isValidHostname,
} from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  expectUnion as __expectUnion,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  resolvedPath as __resolvedPath,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  DocumentType as __DocumentType,
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SdkStreamSerdeContext as __SdkStreamSerdeContext,
  SerdeContext as __SerdeContext,
} from "@smithy/types";
import { v4 as generateIdempotencyToken } from "uuid";

import {
  AbortMultipartReadSetUploadCommandInput,
  AbortMultipartReadSetUploadCommandOutput,
} from "../commands/AbortMultipartReadSetUploadCommand";
import { AcceptShareCommandInput, AcceptShareCommandOutput } from "../commands/AcceptShareCommand";
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
  CompleteMultipartReadSetUploadCommandInput,
  CompleteMultipartReadSetUploadCommandOutput,
} from "../commands/CompleteMultipartReadSetUploadCommand";
import {
  CreateAnnotationStoreCommandInput,
  CreateAnnotationStoreCommandOutput,
} from "../commands/CreateAnnotationStoreCommand";
import {
  CreateAnnotationStoreVersionCommandInput,
  CreateAnnotationStoreVersionCommandOutput,
} from "../commands/CreateAnnotationStoreVersionCommand";
import {
  CreateMultipartReadSetUploadCommandInput,
  CreateMultipartReadSetUploadCommandOutput,
} from "../commands/CreateMultipartReadSetUploadCommand";
import {
  CreateReferenceStoreCommandInput,
  CreateReferenceStoreCommandOutput,
} from "../commands/CreateReferenceStoreCommand";
import { CreateRunGroupCommandInput, CreateRunGroupCommandOutput } from "../commands/CreateRunGroupCommand";
import {
  CreateSequenceStoreCommandInput,
  CreateSequenceStoreCommandOutput,
} from "../commands/CreateSequenceStoreCommand";
import { CreateShareCommandInput, CreateShareCommandOutput } from "../commands/CreateShareCommand";
import { CreateVariantStoreCommandInput, CreateVariantStoreCommandOutput } from "../commands/CreateVariantStoreCommand";
import { CreateWorkflowCommandInput, CreateWorkflowCommandOutput } from "../commands/CreateWorkflowCommand";
import {
  DeleteAnnotationStoreCommandInput,
  DeleteAnnotationStoreCommandOutput,
} from "../commands/DeleteAnnotationStoreCommand";
import {
  DeleteAnnotationStoreVersionsCommandInput,
  DeleteAnnotationStoreVersionsCommandOutput,
} from "../commands/DeleteAnnotationStoreVersionsCommand";
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
import { DeleteShareCommandInput, DeleteShareCommandOutput } from "../commands/DeleteShareCommand";
import { DeleteVariantStoreCommandInput, DeleteVariantStoreCommandOutput } from "../commands/DeleteVariantStoreCommand";
import { DeleteWorkflowCommandInput, DeleteWorkflowCommandOutput } from "../commands/DeleteWorkflowCommand";
import {
  GetAnnotationImportJobCommandInput,
  GetAnnotationImportJobCommandOutput,
} from "../commands/GetAnnotationImportJobCommand";
import { GetAnnotationStoreCommandInput, GetAnnotationStoreCommandOutput } from "../commands/GetAnnotationStoreCommand";
import {
  GetAnnotationStoreVersionCommandInput,
  GetAnnotationStoreVersionCommandOutput,
} from "../commands/GetAnnotationStoreVersionCommand";
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
import { GetShareCommandInput, GetShareCommandOutput } from "../commands/GetShareCommand";
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
  ListAnnotationStoreVersionsCommandInput,
  ListAnnotationStoreVersionsCommandOutput,
} from "../commands/ListAnnotationStoreVersionsCommand";
import {
  ListMultipartReadSetUploadsCommandInput,
  ListMultipartReadSetUploadsCommandOutput,
} from "../commands/ListMultipartReadSetUploadsCommand";
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
  ListReadSetUploadPartsCommandInput,
  ListReadSetUploadPartsCommandOutput,
} from "../commands/ListReadSetUploadPartsCommand";
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
import { ListSharesCommandInput, ListSharesCommandOutput } from "../commands/ListSharesCommand";
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
import {
  UpdateAnnotationStoreVersionCommandInput,
  UpdateAnnotationStoreVersionCommandOutput,
} from "../commands/UpdateAnnotationStoreVersionCommand";
import { UpdateRunGroupCommandInput, UpdateRunGroupCommandOutput } from "../commands/UpdateRunGroupCommand";
import { UpdateVariantStoreCommandInput, UpdateVariantStoreCommandOutput } from "../commands/UpdateVariantStoreCommand";
import { UpdateWorkflowCommandInput, UpdateWorkflowCommandOutput } from "../commands/UpdateWorkflowCommand";
import { UploadReadSetPartCommandInput, UploadReadSetPartCommandOutput } from "../commands/UploadReadSetPartCommand";
import {
  AccessDeniedException,
  ActivateReadSetFilter,
  ActivateReadSetJobItem,
  AnnotationImportItemSource,
  AnnotationImportJobItem,
  AnnotationStoreItem,
  AnnotationStoreVersionItem,
  CompleteReadSetUploadPartListItem,
  ConflictException,
  ExportReadSet,
  ExportReadSetFilter,
  ExportReadSetJobDetail,
  Filter,
  FormatOptions,
  ImportReadSetFilter,
  ImportReadSetJobItem,
  ImportReferenceFilter,
  ImportReferenceJobItem,
  InternalServerException,
  ListAnnotationImportJobsFilter,
  ListAnnotationStoresFilter,
  ListAnnotationStoreVersionsFilter,
  ListVariantImportJobsFilter,
  ListVariantStoresFilter,
  MultipartReadSetUploadListItem,
  NotSupportedOperationException,
  RangeNotSatisfiableException,
  ReadOptions,
  ReadSetFilter,
  ReadSetListItem,
  ReadSetUploadPartListFilter,
  ReadSetUploadPartListItem,
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
  SequenceStoreDetail,
  SequenceStoreFilter,
  ServiceQuotaExceededException,
  ShareDetails,
  ShareStatus,
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
  TsvVersionOptions,
  ValidationException,
  VariantImportItemSource,
  VariantImportJobItem,
  VariantStoreItem,
  VcfOptions,
  VersionOptions,
  WorkflowListItem,
  WorkflowParameter,
} from "../models/models_0";
import { OmicsServiceException as __BaseException } from "../models/OmicsServiceException";

/**
 * serializeAws_restJson1AbortMultipartReadSetUploadCommand
 */
export const se_AbortMultipartReadSetUploadCommand = async (
  input: AbortMultipartReadSetUploadCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/sequencestore/{sequenceStoreId}/upload/{uploadId}/abort";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "sequenceStoreId",
    () => input.sequenceStoreId!,
    "{sequenceStoreId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "uploadId", () => input.uploadId!, "{uploadId}", false);
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
 * serializeAws_restJson1AcceptShareCommand
 */
export const se_AcceptShareCommand = async (
  input: AcceptShareCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/share/{shareId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "shareId", () => input.shareId!, "{shareId}", false);
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
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

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
  body = JSON.stringify(
    take(input, {
      ids: (_) => _json(_),
    })
  );
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
 * serializeAws_restJson1CompleteMultipartReadSetUploadCommand
 */
export const se_CompleteMultipartReadSetUploadCommand = async (
  input: CompleteMultipartReadSetUploadCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/sequencestore/{sequenceStoreId}/upload/{uploadId}/complete";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "sequenceStoreId",
    () => input.sequenceStoreId!,
    "{sequenceStoreId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "uploadId", () => input.uploadId!, "{uploadId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      parts: (_) => _json(_),
    })
  );
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
    method: "POST",
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
  body = JSON.stringify(
    take(input, {
      description: [],
      name: [],
      reference: (_) => _json(_),
      sseConfig: (_) => _json(_),
      storeFormat: [],
      storeOptions: (_) => _json(_),
      tags: (_) => _json(_),
      versionName: [],
    })
  );
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
 * serializeAws_restJson1CreateAnnotationStoreVersionCommand
 */
export const se_CreateAnnotationStoreVersionCommand = async (
  input: CreateAnnotationStoreVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/annotationStore/{name}/version";
  resolvedPath = __resolvedPath(resolvedPath, input, "name", () => input.name!, "{name}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      description: [],
      tags: (_) => _json(_),
      versionName: [],
      versionOptions: (_) => _json(_),
    })
  );
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
 * serializeAws_restJson1CreateMultipartReadSetUploadCommand
 */
export const se_CreateMultipartReadSetUploadCommand = async (
  input: CreateMultipartReadSetUploadCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/sequencestore/{sequenceStoreId}/upload";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "sequenceStoreId",
    () => input.sequenceStoreId!,
    "{sequenceStoreId}",
    false
  );
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [],
      description: [],
      generatedFrom: [],
      name: [],
      referenceArn: [],
      sampleId: [],
      sourceFileType: [],
      subjectId: [],
      tags: (_) => _json(_),
    })
  );
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
  body = JSON.stringify(
    take(input, {
      clientToken: [],
      description: [],
      name: [],
      sseConfig: (_) => _json(_),
      tags: (_) => _json(_),
    })
  );
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
  body = JSON.stringify(
    take(input, {
      maxCpus: [],
      maxDuration: [],
      maxGpus: [],
      maxRuns: [],
      name: [],
      requestId: [true, (_) => _ ?? generateIdempotencyToken()],
      tags: (_) => _json(_),
    })
  );
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
  body = JSON.stringify(
    take(input, {
      clientToken: [],
      description: [],
      fallbackLocation: [],
      name: [],
      sseConfig: (_) => _json(_),
      tags: (_) => _json(_),
    })
  );
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
 * serializeAws_restJson1CreateShareCommand
 */
export const se_CreateShareCommand = async (
  input: CreateShareCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/share";
  let body: any;
  body = JSON.stringify(
    take(input, {
      principalSubscriber: [],
      resourceArn: [],
      shareName: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      description: [],
      name: [],
      reference: (_) => _json(_),
      sseConfig: (_) => _json(_),
      tags: (_) => _json(_),
    })
  );
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
  body = JSON.stringify(
    take(input, {
      accelerators: [],
      definitionUri: [],
      definitionZip: (_) => context.base64Encoder(_),
      description: [],
      engine: [],
      main: [],
      name: [],
      parameterTemplate: (_) => _json(_),
      requestId: [true, (_) => _ ?? generateIdempotencyToken()],
      storageCapacity: [],
      tags: (_) => _json(_),
    })
  );
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
 * serializeAws_restJson1DeleteAnnotationStoreVersionsCommand
 */
export const se_DeleteAnnotationStoreVersionsCommand = async (
  input: DeleteAnnotationStoreVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/annotationStore/{name}/versions/delete";
  resolvedPath = __resolvedPath(resolvedPath, input, "name", () => input.name!, "{name}", false);
  const query: any = map({
    force: [() => input.force !== void 0, () => input.force!.toString()],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      versions: (_) => _json(_),
    })
  );
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
 * serializeAws_restJson1DeleteShareCommand
 */
export const se_DeleteShareCommand = async (
  input: DeleteShareCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/share/{shareId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "shareId", () => input.shareId!, "{shareId}", false);
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
 * serializeAws_restJson1GetAnnotationStoreVersionCommand
 */
export const se_GetAnnotationStoreVersionCommand = async (
  input: GetAnnotationStoreVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/annotationStore/{name}/version/{versionName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "name", () => input.name!, "{name}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "versionName", () => input.versionName!, "{versionName}", false);
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
 * serializeAws_restJson1GetShareCommand
 */
export const se_GetShareCommand = async (
  input: GetShareCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/share/{shareId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "shareId", () => input.shareId!, "{shareId}", false);
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
  body = JSON.stringify(
    take(input, {
      filter: (_) => _json(_),
      ids: (_) => _json(_),
    })
  );
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
  body = JSON.stringify(
    take(input, {
      filter: (_) => _json(_),
      ids: (_) => _json(_),
    })
  );
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
 * serializeAws_restJson1ListAnnotationStoreVersionsCommand
 */
export const se_ListAnnotationStoreVersionsCommand = async (
  input: ListAnnotationStoreVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/annotationStore/{name}/versions";
  resolvedPath = __resolvedPath(resolvedPath, input, "name", () => input.name!, "{name}", false);
  const query: any = map({
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
    nextToken: [, input.nextToken!],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      filter: (_) => _json(_),
    })
  );
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
 * serializeAws_restJson1ListMultipartReadSetUploadsCommand
 */
export const se_ListMultipartReadSetUploadsCommand = async (
  input: ListMultipartReadSetUploadsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/sequencestore/{sequenceStoreId}/uploads";
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
  body = JSON.stringify(
    take(input, {
      filter: (_) => se_ActivateReadSetFilter(_, context),
    })
  );
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
  body = JSON.stringify(
    take(input, {
      filter: (_) => se_ExportReadSetFilter(_, context),
    })
  );
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
  body = JSON.stringify(
    take(input, {
      filter: (_) => se_ImportReadSetFilter(_, context),
    })
  );
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
  body = JSON.stringify(
    take(input, {
      filter: (_) => se_ReadSetFilter(_, context),
    })
  );
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
 * serializeAws_restJson1ListReadSetUploadPartsCommand
 */
export const se_ListReadSetUploadPartsCommand = async (
  input: ListReadSetUploadPartsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/sequencestore/{sequenceStoreId}/upload/{uploadId}/parts";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "sequenceStoreId",
    () => input.sequenceStoreId!,
    "{sequenceStoreId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "uploadId", () => input.uploadId!, "{uploadId}", false);
  const query: any = map({
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
    nextToken: [, input.nextToken!],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      filter: (_) => se_ReadSetUploadPartListFilter(_, context),
      partSource: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      filter: (_) => se_ImportReferenceFilter(_, context),
    })
  );
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
  body = JSON.stringify(
    take(input, {
      filter: (_) => se_ReferenceFilter(_, context),
    })
  );
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
  body = JSON.stringify(
    take(input, {
      filter: (_) => se_ReferenceStoreFilter(_, context),
    })
  );
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
    status: [, input.status!],
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
  body = JSON.stringify(
    take(input, {
      filter: (_) => se_SequenceStoreFilter(_, context),
    })
  );
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
 * serializeAws_restJson1ListSharesCommand
 */
export const se_ListSharesCommand = async (
  input: ListSharesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/shares";
  const query: any = map({
    nextToken: [, input.nextToken!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      filter: (_) => _json(_),
      resourceOwner: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      filter: (_) => _json(_),
      ids: (_) => _json(_),
    })
  );
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
  body = JSON.stringify(
    take(input, {
      filter: (_) => _json(_),
      ids: (_) => _json(_),
    })
  );
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
  body = JSON.stringify(
    take(input, {
      annotationFields: (_) => _json(_),
      destinationName: [],
      formatOptions: (_) => _json(_),
      items: (_) => _json(_),
      roleArn: [],
      runLeftNormalization: [],
      versionName: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      clientToken: [],
      sources: (_) => _json(_),
    })
  );
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
  body = JSON.stringify(
    take(input, {
      clientToken: [],
      destination: [],
      roleArn: [],
      sources: (_) => _json(_),
    })
  );
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
  body = JSON.stringify(
    take(input, {
      clientToken: [],
      roleArn: [],
      sources: (_) => _json(_),
    })
  );
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
  body = JSON.stringify(
    take(input, {
      clientToken: [],
      roleArn: [],
      sources: (_) => _json(_),
    })
  );
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
  body = JSON.stringify(
    take(input, {
      logLevel: [],
      name: [],
      outputUri: [],
      parameters: (_) => se_RunParameters(_, context),
      priority: [],
      requestId: [true, (_) => _ ?? generateIdempotencyToken()],
      roleArn: [],
      runGroupId: [],
      runId: [],
      storageCapacity: [],
      tags: (_) => _json(_),
      workflowId: [],
      workflowType: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      annotationFields: (_) => _json(_),
      destinationName: [],
      items: (_) => _json(_),
      roleArn: [],
      runLeftNormalization: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      tags: (_) => _json(_),
    })
  );
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
  body = JSON.stringify(
    take(input, {
      description: [],
    })
  );
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
 * serializeAws_restJson1UpdateAnnotationStoreVersionCommand
 */
export const se_UpdateAnnotationStoreVersionCommand = async (
  input: UpdateAnnotationStoreVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/annotationStore/{name}/version/{versionName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "name", () => input.name!, "{name}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "versionName", () => input.versionName!, "{versionName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      description: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      maxCpus: [],
      maxDuration: [],
      maxGpus: [],
      maxRuns: [],
      name: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      description: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      description: [],
      name: [],
    })
  );
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
 * serializeAws_restJson1UploadReadSetPartCommand
 */
export const se_UploadReadSetPartCommand = async (
  input: UploadReadSetPartCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "x-amz-content-sha256": "UNSIGNED-PAYLOAD",
    "content-type": "application/octet-stream",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/sequencestore/{sequenceStoreId}/upload/{uploadId}/part";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "sequenceStoreId",
    () => input.sequenceStoreId!,
    "{sequenceStoreId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "uploadId", () => input.uploadId!, "{uploadId}", false);
  const query: any = map({
    partSource: [, __expectNonNull(input.partSource!, `partSource`)],
    partNumber: [__expectNonNull(input.partNumber, `partNumber`) != null, () => input.partNumber!.toString()],
  });
  let body: any;
  if (input.payload !== undefined) {
    body = input.payload;
  }
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
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * deserializeAws_restJson1AbortMultipartReadSetUploadCommand
 */
export const de_AbortMultipartReadSetUploadCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AbortMultipartReadSetUploadCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_AbortMultipartReadSetUploadCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1AbortMultipartReadSetUploadCommandError
 */
const de_AbortMultipartReadSetUploadCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AbortMultipartReadSetUploadCommandOutput> => {
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
    case "NotSupportedOperationException":
    case "com.amazonaws.omics#NotSupportedOperationException":
      throw await de_NotSupportedOperationExceptionRes(parsedOutput, context);
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1AcceptShareCommand
 */
export const de_AcceptShareCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcceptShareCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_AcceptShareCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1AcceptShareCommandError
 */
const de_AcceptShareCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcceptShareCommandOutput> => {
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
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
  const doc = take(data, {
    errors: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CompleteMultipartReadSetUploadCommand
 */
export const de_CompleteMultipartReadSetUploadCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CompleteMultipartReadSetUploadCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CompleteMultipartReadSetUploadCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    readSetId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CompleteMultipartReadSetUploadCommandError
 */
const de_CompleteMultipartReadSetUploadCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CompleteMultipartReadSetUploadCommandOutput> => {
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
    case "NotSupportedOperationException":
    case "com.amazonaws.omics#NotSupportedOperationException":
      throw await de_NotSupportedOperationExceptionRes(parsedOutput, context);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    creationTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    id: __expectString,
    name: __expectString,
    reference: (_) => _json(__expectUnion(_)),
    status: __expectString,
    storeFormat: __expectString,
    storeOptions: (_) => _json(__expectUnion(_)),
    versionName: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateAnnotationStoreVersionCommand
 */
export const de_CreateAnnotationStoreVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAnnotationStoreVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateAnnotationStoreVersionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    creationTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    id: __expectString,
    name: __expectString,
    status: __expectString,
    storeId: __expectString,
    versionName: __expectString,
    versionOptions: (_) => _json(__expectUnion(_)),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateAnnotationStoreVersionCommandError
 */
const de_CreateAnnotationStoreVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAnnotationStoreVersionCommandOutput> => {
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateMultipartReadSetUploadCommand
 */
export const de_CreateMultipartReadSetUploadCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMultipartReadSetUploadCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateMultipartReadSetUploadCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    creationTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    description: __expectString,
    generatedFrom: __expectString,
    name: __expectString,
    referenceArn: __expectString,
    sampleId: __expectString,
    sequenceStoreId: __expectString,
    sourceFileType: __expectString,
    subjectId: __expectString,
    tags: _json,
    uploadId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateMultipartReadSetUploadCommandError
 */
const de_CreateMultipartReadSetUploadCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMultipartReadSetUploadCommandOutput> => {
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
    case "NotSupportedOperationException":
    case "com.amazonaws.omics#NotSupportedOperationException":
      throw await de_NotSupportedOperationExceptionRes(parsedOutput, context);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    arn: __expectString,
    creationTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    description: __expectString,
    id: __expectString,
    name: __expectString,
    sseConfig: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    arn: __expectString,
    id: __expectString,
    tags: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    arn: __expectString,
    creationTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    description: __expectString,
    fallbackLocation: __expectString,
    id: __expectString,
    name: __expectString,
    sseConfig: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateShareCommand
 */
export const de_CreateShareCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateShareCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateShareCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    shareId: __expectString,
    shareName: __expectString,
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateShareCommandError
 */
const de_CreateShareCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateShareCommandOutput> => {
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    creationTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    id: __expectString,
    name: __expectString,
    reference: (_) => _json(__expectUnion(_)),
    status: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    arn: __expectString,
    id: __expectString,
    status: __expectString,
    tags: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    status: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteAnnotationStoreVersionsCommand
 */
export const de_DeleteAnnotationStoreVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAnnotationStoreVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteAnnotationStoreVersionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    errors: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteAnnotationStoreVersionsCommandError
 */
const de_DeleteAnnotationStoreVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAnnotationStoreVersionsCommandOutput> => {
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteShareCommand
 */
export const de_DeleteShareCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteShareCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteShareCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteShareCommandError
 */
const de_DeleteShareCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteShareCommandOutput> => {
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    status: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    annotationFields: _json,
    completionTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    creationTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    destinationName: __expectString,
    formatOptions: (_) => _json(__expectUnion(_)),
    id: __expectString,
    items: _json,
    roleArn: __expectString,
    runLeftNormalization: __expectBoolean,
    status: __expectString,
    statusMessage: __expectString,
    updateTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    versionName: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    creationTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    description: __expectString,
    id: __expectString,
    name: __expectString,
    numVersions: __expectInt32,
    reference: (_) => _json(__expectUnion(_)),
    sseConfig: _json,
    status: __expectString,
    statusMessage: __expectString,
    storeArn: __expectString,
    storeFormat: __expectString,
    storeOptions: (_) => _json(__expectUnion(_)),
    storeSizeBytes: __expectLong,
    tags: _json,
    updateTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetAnnotationStoreVersionCommand
 */
export const de_GetAnnotationStoreVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAnnotationStoreVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetAnnotationStoreVersionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    creationTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    description: __expectString,
    id: __expectString,
    name: __expectString,
    status: __expectString,
    statusMessage: __expectString,
    storeId: __expectString,
    tags: _json,
    updateTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    versionArn: __expectString,
    versionName: __expectString,
    versionOptions: (_) => _json(__expectUnion(_)),
    versionSizeBytes: __expectLong,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetAnnotationStoreVersionCommandError
 */
const de_GetAnnotationStoreVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAnnotationStoreVersionCommandOutput> => {
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    completionTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    creationTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    id: __expectString,
    sequenceStoreId: __expectString,
    sources: _json,
    status: __expectString,
    statusMessage: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    completionTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    creationTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    destination: __expectString,
    id: __expectString,
    readSets: _json,
    sequenceStoreId: __expectString,
    status: __expectString,
    statusMessage: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    completionTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    creationTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    id: __expectString,
    roleArn: __expectString,
    sequenceStoreId: __expectString,
    sources: _json,
    status: __expectString,
    statusMessage: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    arn: __expectString,
    creationTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    creationType: __expectString,
    description: __expectString,
    fileType: __expectString,
    files: _json,
    id: __expectString,
    name: __expectString,
    referenceArn: __expectString,
    sampleId: __expectString,
    sequenceInformation: _json,
    sequenceStoreId: __expectString,
    status: __expectString,
    statusMessage: __expectString,
    subjectId: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    completionTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    creationTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    id: __expectString,
    referenceStoreId: __expectString,
    roleArn: __expectString,
    sources: _json,
    status: __expectString,
    statusMessage: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    arn: __expectString,
    creationTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    description: __expectString,
    files: _json,
    id: __expectString,
    md5: __expectString,
    name: __expectString,
    referenceStoreId: __expectString,
    status: __expectString,
    updateTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    arn: __expectString,
    creationTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    description: __expectString,
    id: __expectString,
    name: __expectString,
    sseConfig: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    accelerators: __expectString,
    arn: __expectString,
    creationTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    definition: __expectString,
    digest: __expectString,
    id: __expectString,
    logLevel: __expectString,
    name: __expectString,
    outputUri: __expectString,
    parameters: (_) => de_RunParameters(_, context),
    priority: __expectInt32,
    resourceDigests: _json,
    roleArn: __expectString,
    runGroupId: __expectString,
    runId: __expectString,
    startTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    startedBy: __expectString,
    status: __expectString,
    statusMessage: __expectString,
    stopTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    storageCapacity: __expectInt32,
    tags: _json,
    workflowId: __expectString,
    workflowType: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    arn: __expectString,
    creationTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    id: __expectString,
    maxCpus: __expectInt32,
    maxDuration: __expectInt32,
    maxGpus: __expectInt32,
    maxRuns: __expectInt32,
    name: __expectString,
    tags: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    cpus: __expectInt32,
    creationTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    gpus: __expectInt32,
    instanceType: __expectString,
    logStream: __expectString,
    memory: __expectInt32,
    name: __expectString,
    startTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    status: __expectString,
    statusMessage: __expectString,
    stopTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    taskId: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    arn: __expectString,
    creationTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    description: __expectString,
    fallbackLocation: __expectString,
    id: __expectString,
    name: __expectString,
    sseConfig: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetShareCommand
 */
export const de_GetShareCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetShareCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetShareCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    share: (_) => de_ShareDetails(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetShareCommandError
 */
const de_GetShareCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetShareCommandOutput> => {
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    annotationFields: _json,
    completionTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    creationTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    destinationName: __expectString,
    id: __expectString,
    items: _json,
    roleArn: __expectString,
    runLeftNormalization: __expectBoolean,
    status: __expectString,
    statusMessage: __expectString,
    updateTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    creationTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    description: __expectString,
    id: __expectString,
    name: __expectString,
    reference: (_) => _json(__expectUnion(_)),
    sseConfig: _json,
    status: __expectString,
    statusMessage: __expectString,
    storeArn: __expectString,
    storeSizeBytes: __expectLong,
    tags: _json,
    updateTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    accelerators: __expectString,
    arn: __expectString,
    creationTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    definition: __expectString,
    description: __expectString,
    digest: __expectString,
    engine: __expectString,
    id: __expectString,
    main: __expectString,
    metadata: _json,
    name: __expectString,
    parameterTemplate: _json,
    status: __expectString,
    statusMessage: __expectString,
    storageCapacity: __expectInt32,
    tags: _json,
    type: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    annotationImportJobs: (_) => de_AnnotationImportJobItems(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    annotationStores: (_) => de_AnnotationStoreItems(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListAnnotationStoreVersionsCommand
 */
export const de_ListAnnotationStoreVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAnnotationStoreVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListAnnotationStoreVersionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    annotationStoreVersions: (_) => de_AnnotationStoreVersionItems(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListAnnotationStoreVersionsCommandError
 */
const de_ListAnnotationStoreVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAnnotationStoreVersionsCommandOutput> => {
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListMultipartReadSetUploadsCommand
 */
export const de_ListMultipartReadSetUploadsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMultipartReadSetUploadsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListMultipartReadSetUploadsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    uploads: (_) => de_MultipartReadSetUploadList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListMultipartReadSetUploadsCommandError
 */
const de_ListMultipartReadSetUploadsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMultipartReadSetUploadsCommandOutput> => {
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
    case "NotSupportedOperationException":
    case "com.amazonaws.omics#NotSupportedOperationException":
      throw await de_NotSupportedOperationExceptionRes(parsedOutput, context);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    activationJobs: (_) => de_ActivateReadSetJobList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    exportJobs: (_) => de_ExportReadSetJobDetailList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    importJobs: (_) => de_ImportReadSetJobList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    nextToken: __expectString,
    readSets: (_) => de_ReadSetList(_, context),
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListReadSetUploadPartsCommand
 */
export const de_ListReadSetUploadPartsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReadSetUploadPartsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListReadSetUploadPartsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    parts: (_) => de_ReadSetUploadPartList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListReadSetUploadPartsCommandError
 */
const de_ListReadSetUploadPartsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReadSetUploadPartsCommandOutput> => {
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
    case "NotSupportedOperationException":
    case "com.amazonaws.omics#NotSupportedOperationException":
      throw await de_NotSupportedOperationExceptionRes(parsedOutput, context);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    importJobs: (_) => de_ImportReferenceJobList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    nextToken: __expectString,
    references: (_) => de_ReferenceList(_, context),
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    nextToken: __expectString,
    referenceStores: (_) => de_ReferenceStoreDetailList(_, context),
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    items: (_) => de_RunGroupList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    items: (_) => de_RunList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    items: (_) => de_TaskList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    nextToken: __expectString,
    sequenceStores: (_) => de_SequenceStoreDetailList(_, context),
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListSharesCommand
 */
export const de_ListSharesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSharesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListSharesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    shares: (_) => de_ShareDetailsList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListSharesCommandError
 */
const de_ListSharesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSharesCommandOutput> => {
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    tags: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    nextToken: __expectString,
    variantImportJobs: (_) => de_VariantImportJobItems(_, context),
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    nextToken: __expectString,
    variantStores: (_) => de_VariantStoreItems(_, context),
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    items: (_) => de_WorkflowList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    jobId: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    creationTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    id: __expectString,
    sequenceStoreId: __expectString,
    status: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    creationTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    destination: __expectString,
    id: __expectString,
    sequenceStoreId: __expectString,
    status: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    creationTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    id: __expectString,
    roleArn: __expectString,
    sequenceStoreId: __expectString,
    status: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    creationTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    id: __expectString,
    referenceStoreId: __expectString,
    roleArn: __expectString,
    status: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    arn: __expectString,
    id: __expectString,
    status: __expectString,
    tags: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    jobId: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    creationTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    description: __expectString,
    id: __expectString,
    name: __expectString,
    reference: (_) => _json(__expectUnion(_)),
    status: __expectString,
    storeFormat: __expectString,
    storeOptions: (_) => _json(__expectUnion(_)),
    updateTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateAnnotationStoreVersionCommand
 */
export const de_UpdateAnnotationStoreVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAnnotationStoreVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateAnnotationStoreVersionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    creationTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    description: __expectString,
    id: __expectString,
    name: __expectString,
    status: __expectString,
    storeId: __expectString,
    updateTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    versionName: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateAnnotationStoreVersionCommandError
 */
const de_UpdateAnnotationStoreVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAnnotationStoreVersionCommandOutput> => {
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    creationTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    description: __expectString,
    id: __expectString,
    name: __expectString,
    reference: (_) => _json(__expectUnion(_)),
    status: __expectString,
    updateTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UploadReadSetPartCommand
 */
export const de_UploadReadSetPartCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UploadReadSetPartCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UploadReadSetPartCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    checksum: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UploadReadSetPartCommandError
 */
const de_UploadReadSetPartCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UploadReadSetPartCommandOutput> => {
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
    case "NotSupportedOperationException":
    case "com.amazonaws.omics#NotSupportedOperationException":
      throw await de_NotSupportedOperationExceptionRes(parsedOutput, context);
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
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
 * deserializeAws_restJson1NotSupportedOperationExceptionRes
 */
const de_NotSupportedOperationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotSupportedOperationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new NotSupportedOperationException({
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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

/**
 * serializeAws_restJson1ActivateReadSetFilter
 */
const se_ActivateReadSetFilter = (input: ActivateReadSetFilter, context: __SerdeContext): any => {
  return take(input, {
    createdAfter: (_) => _.toISOString().split(".")[0] + "Z",
    createdBefore: (_) => _.toISOString().split(".")[0] + "Z",
    status: [],
  });
};

// se_AnnotationFieldMap omitted.

// se_AnnotationImportItemSource omitted.

// se_AnnotationImportItemSources omitted.

// se_ArnList omitted.

// se_CompleteReadSetUploadPartList omitted.

// se_CompleteReadSetUploadPartListItem omitted.

// se_ExportReadSet omitted.

/**
 * serializeAws_restJson1ExportReadSetFilter
 */
const se_ExportReadSetFilter = (input: ExportReadSetFilter, context: __SerdeContext): any => {
  return take(input, {
    createdAfter: (_) => _.toISOString().split(".")[0] + "Z",
    createdBefore: (_) => _.toISOString().split(".")[0] + "Z",
    status: [],
  });
};

// se_ExportReadSetList omitted.

// se_Filter omitted.

// se_FormatOptions omitted.

// se_FormatToHeader omitted.

// se_IdList omitted.

/**
 * serializeAws_restJson1ImportReadSetFilter
 */
const se_ImportReadSetFilter = (input: ImportReadSetFilter, context: __SerdeContext): any => {
  return take(input, {
    createdAfter: (_) => _.toISOString().split(".")[0] + "Z",
    createdBefore: (_) => _.toISOString().split(".")[0] + "Z",
    status: [],
  });
};

/**
 * serializeAws_restJson1ImportReferenceFilter
 */
const se_ImportReferenceFilter = (input: ImportReferenceFilter, context: __SerdeContext): any => {
  return take(input, {
    createdAfter: (_) => _.toISOString().split(".")[0] + "Z",
    createdBefore: (_) => _.toISOString().split(".")[0] + "Z",
    status: [],
  });
};

// se_ListAnnotationImportJobsFilter omitted.

// se_ListAnnotationStoresFilter omitted.

// se_ListAnnotationStoreVersionsFilter omitted.

// se_ListVariantImportJobsFilter omitted.

// se_ListVariantStoresFilter omitted.

// se_ReadOptions omitted.

/**
 * serializeAws_restJson1ReadSetFilter
 */
const se_ReadSetFilter = (input: ReadSetFilter, context: __SerdeContext): any => {
  return take(input, {
    createdAfter: (_) => _.toISOString().split(".")[0] + "Z",
    createdBefore: (_) => _.toISOString().split(".")[0] + "Z",
    creationType: [],
    generatedFrom: [],
    name: [],
    referenceArn: [],
    sampleId: [],
    status: [],
    subjectId: [],
  });
};

// se_ReadSetIdList omitted.

/**
 * serializeAws_restJson1ReadSetUploadPartListFilter
 */
const se_ReadSetUploadPartListFilter = (input: ReadSetUploadPartListFilter, context: __SerdeContext): any => {
  return take(input, {
    createdAfter: (_) => _.toISOString().split(".")[0] + "Z",
    createdBefore: (_) => _.toISOString().split(".")[0] + "Z",
  });
};

/**
 * serializeAws_restJson1ReferenceFilter
 */
const se_ReferenceFilter = (input: ReferenceFilter, context: __SerdeContext): any => {
  return take(input, {
    createdAfter: (_) => _.toISOString().split(".")[0] + "Z",
    createdBefore: (_) => _.toISOString().split(".")[0] + "Z",
    md5: [],
    name: [],
  });
};

// se_ReferenceItem omitted.

/**
 * serializeAws_restJson1ReferenceStoreFilter
 */
const se_ReferenceStoreFilter = (input: ReferenceStoreFilter, context: __SerdeContext): any => {
  return take(input, {
    createdAfter: (_) => _.toISOString().split(".")[0] + "Z",
    createdBefore: (_) => _.toISOString().split(".")[0] + "Z",
    name: [],
  });
};

/**
 * serializeAws_restJson1RunParameters
 */
const se_RunParameters = (input: __DocumentType, context: __SerdeContext): any => {
  return input;
};

// se_Schema omitted.

// se_SchemaItem omitted.

/**
 * serializeAws_restJson1SequenceStoreFilter
 */
const se_SequenceStoreFilter = (input: SequenceStoreFilter, context: __SerdeContext): any => {
  return take(input, {
    createdAfter: (_) => _.toISOString().split(".")[0] + "Z",
    createdBefore: (_) => _.toISOString().split(".")[0] + "Z",
    name: [],
  });
};

// se_SourceFiles omitted.

// se_SseConfig omitted.

// se_StartReadSetActivationJobSourceItem omitted.

// se_StartReadSetActivationJobSourceList omitted.

// se_StartReadSetImportJobSourceItem omitted.

// se_StartReadSetImportJobSourceList omitted.

// se_StartReferenceImportJobSourceItem omitted.

// se_StartReferenceImportJobSourceList omitted.

// se_StatusList omitted.

// se_StoreOptions omitted.

// se_TagMap omitted.

// se_TsvOptions omitted.

// se_TsvStoreOptions omitted.

// se_TsvVersionOptions omitted.

// se_VariantImportItemSource omitted.

// se_VariantImportItemSources omitted.

// se_VcfOptions omitted.

// se_VersionList omitted.

// se_VersionOptions omitted.

// se_WorkflowParameter omitted.

// se_WorkflowParameterTemplate omitted.

/**
 * deserializeAws_restJson1ActivateReadSetJobItem
 */
const de_ActivateReadSetJobItem = (output: any, context: __SerdeContext): ActivateReadSetJobItem => {
  return take(output, {
    completionTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    creationTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    id: __expectString,
    sequenceStoreId: __expectString,
    status: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ActivateReadSetJobList
 */
const de_ActivateReadSetJobList = (output: any, context: __SerdeContext): ActivateReadSetJobItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ActivateReadSetJobItem(entry, context);
    });
  return retVal;
};

// de_ActivateReadSetSourceItem omitted.

// de_ActivateReadSetSourceList omitted.

// de_AnnotationFieldMap omitted.

// de_AnnotationImportItemDetail omitted.

// de_AnnotationImportItemDetails omitted.

/**
 * deserializeAws_restJson1AnnotationImportJobItem
 */
const de_AnnotationImportJobItem = (output: any, context: __SerdeContext): AnnotationImportJobItem => {
  return take(output, {
    annotationFields: _json,
    completionTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    creationTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    destinationName: __expectString,
    id: __expectString,
    roleArn: __expectString,
    runLeftNormalization: __expectBoolean,
    status: __expectString,
    updateTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    versionName: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1AnnotationImportJobItems
 */
const de_AnnotationImportJobItems = (output: any, context: __SerdeContext): AnnotationImportJobItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AnnotationImportJobItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AnnotationStoreItem
 */
const de_AnnotationStoreItem = (output: any, context: __SerdeContext): AnnotationStoreItem => {
  return take(output, {
    creationTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    description: __expectString,
    id: __expectString,
    name: __expectString,
    reference: (_: any) => _json(__expectUnion(_)),
    sseConfig: _json,
    status: __expectString,
    statusMessage: __expectString,
    storeArn: __expectString,
    storeFormat: __expectString,
    storeSizeBytes: __expectLong,
    updateTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1AnnotationStoreItems
 */
const de_AnnotationStoreItems = (output: any, context: __SerdeContext): AnnotationStoreItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AnnotationStoreItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AnnotationStoreVersionItem
 */
const de_AnnotationStoreVersionItem = (output: any, context: __SerdeContext): AnnotationStoreVersionItem => {
  return take(output, {
    creationTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    description: __expectString,
    id: __expectString,
    name: __expectString,
    status: __expectString,
    statusMessage: __expectString,
    storeId: __expectString,
    updateTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    versionArn: __expectString,
    versionName: __expectString,
    versionSizeBytes: __expectLong,
  }) as any;
};

/**
 * deserializeAws_restJson1AnnotationStoreVersionItems
 */
const de_AnnotationStoreVersionItems = (output: any, context: __SerdeContext): AnnotationStoreVersionItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AnnotationStoreVersionItem(entry, context);
    });
  return retVal;
};

// de_ExportReadSetDetail omitted.

// de_ExportReadSetDetailList omitted.

/**
 * deserializeAws_restJson1ExportReadSetJobDetail
 */
const de_ExportReadSetJobDetail = (output: any, context: __SerdeContext): ExportReadSetJobDetail => {
  return take(output, {
    completionTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    creationTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    destination: __expectString,
    id: __expectString,
    sequenceStoreId: __expectString,
    status: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ExportReadSetJobDetailList
 */
const de_ExportReadSetJobDetailList = (output: any, context: __SerdeContext): ExportReadSetJobDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ExportReadSetJobDetail(entry, context);
    });
  return retVal;
};

// de_FileInformation omitted.

// de_FormatOptions omitted.

// de_FormatToHeader omitted.

/**
 * deserializeAws_restJson1ImportReadSetJobItem
 */
const de_ImportReadSetJobItem = (output: any, context: __SerdeContext): ImportReadSetJobItem => {
  return take(output, {
    completionTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    creationTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    id: __expectString,
    roleArn: __expectString,
    sequenceStoreId: __expectString,
    status: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ImportReadSetJobList
 */
const de_ImportReadSetJobList = (output: any, context: __SerdeContext): ImportReadSetJobItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ImportReadSetJobItem(entry, context);
    });
  return retVal;
};

// de_ImportReadSetSourceItem omitted.

// de_ImportReadSetSourceList omitted.

/**
 * deserializeAws_restJson1ImportReferenceJobItem
 */
const de_ImportReferenceJobItem = (output: any, context: __SerdeContext): ImportReferenceJobItem => {
  return take(output, {
    completionTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    creationTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    id: __expectString,
    referenceStoreId: __expectString,
    roleArn: __expectString,
    status: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ImportReferenceJobList
 */
const de_ImportReferenceJobList = (output: any, context: __SerdeContext): ImportReferenceJobItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ImportReferenceJobItem(entry, context);
    });
  return retVal;
};

// de_ImportReferenceSourceItem omitted.

// de_ImportReferenceSourceList omitted.

/**
 * deserializeAws_restJson1MultipartReadSetUploadList
 */
const de_MultipartReadSetUploadList = (output: any, context: __SerdeContext): MultipartReadSetUploadListItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MultipartReadSetUploadListItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1MultipartReadSetUploadListItem
 */
const de_MultipartReadSetUploadListItem = (output: any, context: __SerdeContext): MultipartReadSetUploadListItem => {
  return take(output, {
    creationTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    description: __expectString,
    generatedFrom: __expectString,
    name: __expectString,
    referenceArn: __expectString,
    sampleId: __expectString,
    sequenceStoreId: __expectString,
    sourceFileType: __expectString,
    subjectId: __expectString,
    tags: _json,
    uploadId: __expectString,
  }) as any;
};

// de_ReadOptions omitted.

// de_ReadSetBatchError omitted.

// de_ReadSetBatchErrorList omitted.

// de_ReadSetFiles omitted.

/**
 * deserializeAws_restJson1ReadSetList
 */
const de_ReadSetList = (output: any, context: __SerdeContext): ReadSetListItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ReadSetListItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ReadSetListItem
 */
const de_ReadSetListItem = (output: any, context: __SerdeContext): ReadSetListItem => {
  return take(output, {
    arn: __expectString,
    creationTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    creationType: __expectString,
    description: __expectString,
    fileType: __expectString,
    id: __expectString,
    name: __expectString,
    referenceArn: __expectString,
    sampleId: __expectString,
    sequenceInformation: _json,
    sequenceStoreId: __expectString,
    status: __expectString,
    statusMessage: __expectString,
    subjectId: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ReadSetUploadPartList
 */
const de_ReadSetUploadPartList = (output: any, context: __SerdeContext): ReadSetUploadPartListItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ReadSetUploadPartListItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ReadSetUploadPartListItem
 */
const de_ReadSetUploadPartListItem = (output: any, context: __SerdeContext): ReadSetUploadPartListItem => {
  return take(output, {
    checksum: __expectString,
    creationTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    lastUpdatedTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    partNumber: __expectInt32,
    partSize: __expectLong,
    partSource: __expectString,
  }) as any;
};

// de_ReferenceFiles omitted.

// de_ReferenceItem omitted.

/**
 * deserializeAws_restJson1ReferenceList
 */
const de_ReferenceList = (output: any, context: __SerdeContext): ReferenceListItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ReferenceListItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ReferenceListItem
 */
const de_ReferenceListItem = (output: any, context: __SerdeContext): ReferenceListItem => {
  return take(output, {
    arn: __expectString,
    creationTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    description: __expectString,
    id: __expectString,
    md5: __expectString,
    name: __expectString,
    referenceStoreId: __expectString,
    status: __expectString,
    updateTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1ReferenceStoreDetail
 */
const de_ReferenceStoreDetail = (output: any, context: __SerdeContext): ReferenceStoreDetail => {
  return take(output, {
    arn: __expectString,
    creationTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    description: __expectString,
    id: __expectString,
    name: __expectString,
    sseConfig: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1ReferenceStoreDetailList
 */
const de_ReferenceStoreDetailList = (output: any, context: __SerdeContext): ReferenceStoreDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
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
      return de_RunGroupListItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1RunGroupListItem
 */
const de_RunGroupListItem = (output: any, context: __SerdeContext): RunGroupListItem => {
  return take(output, {
    arn: __expectString,
    creationTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    id: __expectString,
    maxCpus: __expectInt32,
    maxDuration: __expectInt32,
    maxGpus: __expectInt32,
    maxRuns: __expectInt32,
    name: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1RunList
 */
const de_RunList = (output: any, context: __SerdeContext): RunListItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RunListItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1RunListItem
 */
const de_RunListItem = (output: any, context: __SerdeContext): RunListItem => {
  return take(output, {
    arn: __expectString,
    creationTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    id: __expectString,
    name: __expectString,
    priority: __expectInt32,
    startTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    status: __expectString,
    stopTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    storageCapacity: __expectInt32,
    workflowId: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1RunParameters
 */
const de_RunParameters = (output: any, context: __SerdeContext): __DocumentType => {
  return output;
};

// de_RunResourceDigests omitted.

// de_Schema omitted.

// de_SchemaItem omitted.

// de_SequenceInformation omitted.

/**
 * deserializeAws_restJson1SequenceStoreDetail
 */
const de_SequenceStoreDetail = (output: any, context: __SerdeContext): SequenceStoreDetail => {
  return take(output, {
    arn: __expectString,
    creationTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    description: __expectString,
    fallbackLocation: __expectString,
    id: __expectString,
    name: __expectString,
    sseConfig: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1SequenceStoreDetailList
 */
const de_SequenceStoreDetailList = (output: any, context: __SerdeContext): SequenceStoreDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SequenceStoreDetail(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ShareDetails
 */
const de_ShareDetails = (output: any, context: __SerdeContext): ShareDetails => {
  return take(output, {
    creationTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    ownerId: __expectString,
    principalSubscriber: __expectString,
    resourceArn: __expectString,
    shareId: __expectString,
    shareName: __expectString,
    status: __expectString,
    statusMessage: __expectString,
    updateTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1ShareDetailsList
 */
const de_ShareDetailsList = (output: any, context: __SerdeContext): ShareDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ShareDetails(entry, context);
    });
  return retVal;
};

// de_SourceFiles omitted.

// de_SseConfig omitted.

// de_StoreOptions omitted.

// de_TagMap omitted.

/**
 * deserializeAws_restJson1TaskList
 */
const de_TaskList = (output: any, context: __SerdeContext): TaskListItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TaskListItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1TaskListItem
 */
const de_TaskListItem = (output: any, context: __SerdeContext): TaskListItem => {
  return take(output, {
    cpus: __expectInt32,
    creationTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    gpus: __expectInt32,
    instanceType: __expectString,
    memory: __expectInt32,
    name: __expectString,
    startTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    status: __expectString,
    stopTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    taskId: __expectString,
  }) as any;
};

// de_TsvOptions omitted.

// de_TsvStoreOptions omitted.

// de_TsvVersionOptions omitted.

// de_VariantImportItemDetail omitted.

// de_VariantImportItemDetails omitted.

/**
 * deserializeAws_restJson1VariantImportJobItem
 */
const de_VariantImportJobItem = (output: any, context: __SerdeContext): VariantImportJobItem => {
  return take(output, {
    annotationFields: _json,
    completionTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    creationTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    destinationName: __expectString,
    id: __expectString,
    roleArn: __expectString,
    runLeftNormalization: __expectBoolean,
    status: __expectString,
    updateTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1VariantImportJobItems
 */
const de_VariantImportJobItems = (output: any, context: __SerdeContext): VariantImportJobItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_VariantImportJobItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1VariantStoreItem
 */
const de_VariantStoreItem = (output: any, context: __SerdeContext): VariantStoreItem => {
  return take(output, {
    creationTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    description: __expectString,
    id: __expectString,
    name: __expectString,
    reference: (_: any) => _json(__expectUnion(_)),
    sseConfig: _json,
    status: __expectString,
    statusMessage: __expectString,
    storeArn: __expectString,
    storeSizeBytes: __expectLong,
    updateTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1VariantStoreItems
 */
const de_VariantStoreItems = (output: any, context: __SerdeContext): VariantStoreItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_VariantStoreItem(entry, context);
    });
  return retVal;
};

// de_VcfOptions omitted.

// de_VersionDeleteError omitted.

// de_VersionDeleteErrorList omitted.

// de_VersionOptions omitted.

/**
 * deserializeAws_restJson1WorkflowList
 */
const de_WorkflowList = (output: any, context: __SerdeContext): WorkflowListItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_WorkflowListItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1WorkflowListItem
 */
const de_WorkflowListItem = (output: any, context: __SerdeContext): WorkflowListItem => {
  return take(output, {
    arn: __expectString,
    creationTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    digest: __expectString,
    id: __expectString,
    metadata: _json,
    name: __expectString,
    status: __expectString,
    type: __expectString,
  }) as any;
};

// de_WorkflowMetadata omitted.

// de_WorkflowParameter omitted.

// de_WorkflowParameterTemplate omitted.

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
