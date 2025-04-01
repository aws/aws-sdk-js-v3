// smithy-typescript generated code
import {
  awsExpectUnion as __expectUnion,
  loadRestJsonErrorCode,
  parseJsonBody as parseBody,
  parseJsonErrorBody as parseErrorBody,
} from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
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
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  isSerializableHeaderValue,
  map,
  parseEpochTimestamp as __parseEpochTimestamp,
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

import { CancelExportTaskCommandInput, CancelExportTaskCommandOutput } from "../commands/CancelExportTaskCommand";
import { CancelImportTaskCommandInput, CancelImportTaskCommandOutput } from "../commands/CancelImportTaskCommand";
import { CancelQueryCommandInput, CancelQueryCommandOutput } from "../commands/CancelQueryCommand";
import { CreateGraphCommandInput, CreateGraphCommandOutput } from "../commands/CreateGraphCommand";
import {
  CreateGraphSnapshotCommandInput,
  CreateGraphSnapshotCommandOutput,
} from "../commands/CreateGraphSnapshotCommand";
import {
  CreateGraphUsingImportTaskCommandInput,
  CreateGraphUsingImportTaskCommandOutput,
} from "../commands/CreateGraphUsingImportTaskCommand";
import {
  CreatePrivateGraphEndpointCommandInput,
  CreatePrivateGraphEndpointCommandOutput,
} from "../commands/CreatePrivateGraphEndpointCommand";
import { DeleteGraphCommandInput, DeleteGraphCommandOutput } from "../commands/DeleteGraphCommand";
import {
  DeleteGraphSnapshotCommandInput,
  DeleteGraphSnapshotCommandOutput,
} from "../commands/DeleteGraphSnapshotCommand";
import {
  DeletePrivateGraphEndpointCommandInput,
  DeletePrivateGraphEndpointCommandOutput,
} from "../commands/DeletePrivateGraphEndpointCommand";
import { ExecuteQueryCommandInput, ExecuteQueryCommandOutput } from "../commands/ExecuteQueryCommand";
import { GetExportTaskCommandInput, GetExportTaskCommandOutput } from "../commands/GetExportTaskCommand";
import { GetGraphCommandInput, GetGraphCommandOutput } from "../commands/GetGraphCommand";
import { GetGraphSnapshotCommandInput, GetGraphSnapshotCommandOutput } from "../commands/GetGraphSnapshotCommand";
import { GetGraphSummaryCommandInput, GetGraphSummaryCommandOutput } from "../commands/GetGraphSummaryCommand";
import { GetImportTaskCommandInput, GetImportTaskCommandOutput } from "../commands/GetImportTaskCommand";
import {
  GetPrivateGraphEndpointCommandInput,
  GetPrivateGraphEndpointCommandOutput,
} from "../commands/GetPrivateGraphEndpointCommand";
import { GetQueryCommandInput, GetQueryCommandOutput } from "../commands/GetQueryCommand";
import { ListExportTasksCommandInput, ListExportTasksCommandOutput } from "../commands/ListExportTasksCommand";
import { ListGraphsCommandInput, ListGraphsCommandOutput } from "../commands/ListGraphsCommand";
import { ListGraphSnapshotsCommandInput, ListGraphSnapshotsCommandOutput } from "../commands/ListGraphSnapshotsCommand";
import { ListImportTasksCommandInput, ListImportTasksCommandOutput } from "../commands/ListImportTasksCommand";
import {
  ListPrivateGraphEndpointsCommandInput,
  ListPrivateGraphEndpointsCommandOutput,
} from "../commands/ListPrivateGraphEndpointsCommand";
import { ListQueriesCommandInput, ListQueriesCommandOutput } from "../commands/ListQueriesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { ResetGraphCommandInput, ResetGraphCommandOutput } from "../commands/ResetGraphCommand";
import {
  RestoreGraphFromSnapshotCommandInput,
  RestoreGraphFromSnapshotCommandOutput,
} from "../commands/RestoreGraphFromSnapshotCommand";
import { StartExportTaskCommandInput, StartExportTaskCommandOutput } from "../commands/StartExportTaskCommand";
import { StartImportTaskCommandInput, StartImportTaskCommandOutput } from "../commands/StartImportTaskCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateGraphCommandInput, UpdateGraphCommandOutput } from "../commands/UpdateGraphCommand";
import {
  AccessDeniedException,
  ConflictException,
  ExportFilter,
  ExportFilterElement,
  ExportFilterPropertyAttributes,
  ExportTaskDetails,
  GraphSnapshotSummary,
  ImportOptions,
  ImportTaskDetails,
  InternalServerException,
  NeptuneImportOptions,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  ThrottlingException,
  UnprocessableException,
  ValidationException,
  VectorSearchConfiguration,
} from "../models/models_0";
import { NeptuneGraphServiceException as __BaseException } from "../models/NeptuneGraphServiceException";

/**
 * serializeAws_restJson1CancelExportTaskCommand
 */
export const se_CancelExportTaskCommand = async (
  input: CancelExportTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/exporttasks/{taskIdentifier}");
  b.p("taskIdentifier", () => input.taskIdentifier!, "{taskIdentifier}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CancelImportTaskCommand
 */
export const se_CancelImportTaskCommand = async (
  input: CancelImportTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/importtasks/{taskIdentifier}");
  b.p("taskIdentifier", () => input.taskIdentifier!, "{taskIdentifier}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CancelQueryCommand
 */
export const se_CancelQueryCommand = async (
  input: CancelQueryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_g]: input[_gI]!,
  });
  b.bp("/queries/{queryId}");
  b.p("queryId", () => input.queryId!, "{queryId}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "{graphIdentifier}." + resolvedHostname;
    if (input.graphIdentifier === undefined) {
      throw new Error("Empty value provided for input host prefix: graphIdentifier.");
    }
    resolvedHostname = resolvedHostname.replace("{graphIdentifier}", input.graphIdentifier!);
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateGraphCommand
 */
export const se_CreateGraphCommand = async (
  input: CreateGraphCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/graphs");
  let body: any;
  body = JSON.stringify(
    take(input, {
      deletionProtection: [],
      graphName: [],
      kmsKeyIdentifier: [],
      provisionedMemory: [],
      publicConnectivity: [],
      replicaCount: [],
      tags: (_) => _json(_),
      vectorSearchConfiguration: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateGraphSnapshotCommand
 */
export const se_CreateGraphSnapshotCommand = async (
  input: CreateGraphSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/snapshots");
  let body: any;
  body = JSON.stringify(
    take(input, {
      graphIdentifier: [],
      snapshotName: [],
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateGraphUsingImportTaskCommand
 */
export const se_CreateGraphUsingImportTaskCommand = async (
  input: CreateGraphUsingImportTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/importtasks");
  let body: any;
  body = JSON.stringify(
    take(input, {
      blankNodeHandling: [],
      deletionProtection: [],
      failOnError: [],
      format: [],
      graphName: [],
      importOptions: (_) => _json(_),
      kmsKeyIdentifier: [],
      maxProvisionedMemory: [],
      minProvisionedMemory: [],
      parquetType: [],
      publicConnectivity: [],
      replicaCount: [],
      roleArn: [],
      source: [],
      tags: (_) => _json(_),
      vectorSearchConfiguration: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreatePrivateGraphEndpointCommand
 */
export const se_CreatePrivateGraphEndpointCommand = async (
  input: CreatePrivateGraphEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/graphs/{graphIdentifier}/endpoints");
  b.p("graphIdentifier", () => input.graphIdentifier!, "{graphIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      subnetIds: (_) => _json(_),
      vpcId: [],
      vpcSecurityGroupIds: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteGraphCommand
 */
export const se_DeleteGraphCommand = async (
  input: DeleteGraphCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/graphs/{graphIdentifier}");
  b.p("graphIdentifier", () => input.graphIdentifier!, "{graphIdentifier}", false);
  const query: any = map({
    [_sS]: [__expectNonNull(input.skipSnapshot, `skipSnapshot`) != null, () => input[_sS]!.toString()],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteGraphSnapshotCommand
 */
export const se_DeleteGraphSnapshotCommand = async (
  input: DeleteGraphSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/snapshots/{snapshotIdentifier}");
  b.p("snapshotIdentifier", () => input.snapshotIdentifier!, "{snapshotIdentifier}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeletePrivateGraphEndpointCommand
 */
export const se_DeletePrivateGraphEndpointCommand = async (
  input: DeletePrivateGraphEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/graphs/{graphIdentifier}/endpoints/{vpcId}");
  b.p("graphIdentifier", () => input.graphIdentifier!, "{graphIdentifier}", false);
  b.p("vpcId", () => input.vpcId!, "{vpcId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ExecuteQueryCommand
 */
export const se_ExecuteQueryCommand = async (
  input: ExecuteQueryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_g]: input[_gI]!,
  });
  b.bp("/queries");
  let body: any;
  body = JSON.stringify(
    take(input, {
      explain: [, , `explainMode`],
      language: [],
      parameters: (_) => se_DocumentValuedMap(_, context),
      planCache: [],
      query: [, , `queryString`],
      queryTimeoutMilliseconds: [],
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "{graphIdentifier}." + resolvedHostname;
    if (input.graphIdentifier === undefined) {
      throw new Error("Empty value provided for input host prefix: graphIdentifier.");
    }
    resolvedHostname = resolvedHostname.replace("{graphIdentifier}", input.graphIdentifier!);
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetExportTaskCommand
 */
export const se_GetExportTaskCommand = async (
  input: GetExportTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/exporttasks/{taskIdentifier}");
  b.p("taskIdentifier", () => input.taskIdentifier!, "{taskIdentifier}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetGraphCommand
 */
export const se_GetGraphCommand = async (
  input: GetGraphCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/graphs/{graphIdentifier}");
  b.p("graphIdentifier", () => input.graphIdentifier!, "{graphIdentifier}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetGraphSnapshotCommand
 */
export const se_GetGraphSnapshotCommand = async (
  input: GetGraphSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/snapshots/{snapshotIdentifier}");
  b.p("snapshotIdentifier", () => input.snapshotIdentifier!, "{snapshotIdentifier}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetGraphSummaryCommand
 */
export const se_GetGraphSummaryCommand = async (
  input: GetGraphSummaryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_g]: input[_gI]!,
  });
  b.bp("/summary");
  const query: any = map({
    [_m]: [, input[_m]!],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "{graphIdentifier}." + resolvedHostname;
    if (input.graphIdentifier === undefined) {
      throw new Error("Empty value provided for input host prefix: graphIdentifier.");
    }
    resolvedHostname = resolvedHostname.replace("{graphIdentifier}", input.graphIdentifier!);
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetImportTaskCommand
 */
export const se_GetImportTaskCommand = async (
  input: GetImportTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/importtasks/{taskIdentifier}");
  b.p("taskIdentifier", () => input.taskIdentifier!, "{taskIdentifier}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetPrivateGraphEndpointCommand
 */
export const se_GetPrivateGraphEndpointCommand = async (
  input: GetPrivateGraphEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/graphs/{graphIdentifier}/endpoints/{vpcId}");
  b.p("graphIdentifier", () => input.graphIdentifier!, "{graphIdentifier}", false);
  b.p("vpcId", () => input.vpcId!, "{vpcId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetQueryCommand
 */
export const se_GetQueryCommand = async (
  input: GetQueryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_g]: input[_gI]!,
  });
  b.bp("/queries/{queryId}");
  b.p("queryId", () => input.queryId!, "{queryId}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "{graphIdentifier}." + resolvedHostname;
    if (input.graphIdentifier === undefined) {
      throw new Error("Empty value provided for input host prefix: graphIdentifier.");
    }
    resolvedHostname = resolvedHostname.replace("{graphIdentifier}", input.graphIdentifier!);
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListExportTasksCommand
 */
export const se_ListExportTasksCommand = async (
  input: ListExportTasksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/exporttasks");
  const query: any = map({
    [_gI]: [, input[_gI]!],
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListGraphsCommand
 */
export const se_ListGraphsCommand = async (
  input: ListGraphsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/graphs");
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListGraphSnapshotsCommand
 */
export const se_ListGraphSnapshotsCommand = async (
  input: ListGraphSnapshotsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/snapshots");
  const query: any = map({
    [_gI]: [, input[_gI]!],
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListImportTasksCommand
 */
export const se_ListImportTasksCommand = async (
  input: ListImportTasksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/importtasks");
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListPrivateGraphEndpointsCommand
 */
export const se_ListPrivateGraphEndpointsCommand = async (
  input: ListPrivateGraphEndpointsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/graphs/{graphIdentifier}/endpoints");
  b.p("graphIdentifier", () => input.graphIdentifier!, "{graphIdentifier}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListQueriesCommand
 */
export const se_ListQueriesCommand = async (
  input: ListQueriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_g]: input[_gI]!,
  });
  b.bp("/queries");
  const query: any = map({
    [_mR]: [__expectNonNull(input.maxResults, `maxResults`) != null, () => input[_mR]!.toString()],
    [_s]: [, input[_s]!],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "{graphIdentifier}." + resolvedHostname;
    if (input.graphIdentifier === undefined) {
      throw new Error("Empty value provided for input host prefix: graphIdentifier.");
    }
    resolvedHostname = resolvedHostname.replace("{graphIdentifier}", input.graphIdentifier!);
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
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
  b.bp("/tags/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ResetGraphCommand
 */
export const se_ResetGraphCommand = async (
  input: ResetGraphCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/graphs/{graphIdentifier}");
  b.p("graphIdentifier", () => input.graphIdentifier!, "{graphIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      skipSnapshot: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1RestoreGraphFromSnapshotCommand
 */
export const se_RestoreGraphFromSnapshotCommand = async (
  input: RestoreGraphFromSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/snapshots/{snapshotIdentifier}/restore");
  b.p("snapshotIdentifier", () => input.snapshotIdentifier!, "{snapshotIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      deletionProtection: [],
      graphName: [],
      provisionedMemory: [],
      publicConnectivity: [],
      replicaCount: [],
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartExportTaskCommand
 */
export const se_StartExportTaskCommand = async (
  input: StartExportTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/exporttasks");
  let body: any;
  body = JSON.stringify(
    take(input, {
      destination: [],
      exportFilter: (_) => _json(_),
      format: [],
      graphIdentifier: [],
      kmsKeyIdentifier: [],
      parquetType: [],
      roleArn: [],
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartImportTaskCommand
 */
export const se_StartImportTaskCommand = async (
  input: StartImportTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/graphs/{graphIdentifier}/importtasks");
  b.p("graphIdentifier", () => input.graphIdentifier!, "{graphIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      blankNodeHandling: [],
      failOnError: [],
      format: [],
      importOptions: (_) => _json(_),
      parquetType: [],
      roleArn: [],
      source: [],
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
  b.bp("/tags/{resourceArn}");
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
  b.bp("/tags/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  const query: any = map({
    [_tK]: [__expectNonNull(input.tagKeys, `tagKeys`) != null, () => input[_tK]! || []],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateGraphCommand
 */
export const se_UpdateGraphCommand = async (
  input: UpdateGraphCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/graphs/{graphIdentifier}");
  b.p("graphIdentifier", () => input.graphIdentifier!, "{graphIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      deletionProtection: [],
      provisionedMemory: [],
      publicConnectivity: [],
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1CancelExportTaskCommand
 */
export const de_CancelExportTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelExportTaskCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    destination: __expectString,
    format: __expectString,
    graphId: __expectString,
    kmsKeyIdentifier: __expectString,
    parquetType: __expectString,
    roleArn: __expectString,
    status: __expectString,
    statusReason: __expectString,
    taskId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CancelImportTaskCommand
 */
export const de_CancelImportTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelImportTaskCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    format: __expectString,
    graphId: __expectString,
    parquetType: __expectString,
    roleArn: __expectString,
    source: __expectString,
    status: __expectString,
    taskId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CancelQueryCommand
 */
export const de_CancelQueryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelQueryCommandOutput> => {
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
 * deserializeAws_restJson1CreateGraphCommand
 */
export const de_CreateGraphCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGraphCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    buildNumber: __expectString,
    createTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    deletionProtection: __expectBoolean,
    endpoint: __expectString,
    id: __expectString,
    kmsKeyIdentifier: __expectString,
    name: __expectString,
    provisionedMemory: __expectInt32,
    publicConnectivity: __expectBoolean,
    replicaCount: __expectInt32,
    sourceSnapshotId: __expectString,
    status: __expectString,
    statusReason: __expectString,
    vectorSearchConfiguration: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateGraphSnapshotCommand
 */
export const de_CreateGraphSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGraphSnapshotCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    id: __expectString,
    kmsKeyIdentifier: __expectString,
    name: __expectString,
    snapshotCreateTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    sourceGraphId: __expectString,
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateGraphUsingImportTaskCommand
 */
export const de_CreateGraphUsingImportTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGraphUsingImportTaskCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    format: __expectString,
    graphId: __expectString,
    importOptions: (_) => _json(__expectUnion(_)),
    parquetType: __expectString,
    roleArn: __expectString,
    source: __expectString,
    status: __expectString,
    taskId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreatePrivateGraphEndpointCommand
 */
export const de_CreatePrivateGraphEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePrivateGraphEndpointCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    status: __expectString,
    subnetIds: _json,
    vpcEndpointId: __expectString,
    vpcId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteGraphCommand
 */
export const de_DeleteGraphCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGraphCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    buildNumber: __expectString,
    createTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    deletionProtection: __expectBoolean,
    endpoint: __expectString,
    id: __expectString,
    kmsKeyIdentifier: __expectString,
    name: __expectString,
    provisionedMemory: __expectInt32,
    publicConnectivity: __expectBoolean,
    replicaCount: __expectInt32,
    sourceSnapshotId: __expectString,
    status: __expectString,
    statusReason: __expectString,
    vectorSearchConfiguration: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteGraphSnapshotCommand
 */
export const de_DeleteGraphSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGraphSnapshotCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    id: __expectString,
    kmsKeyIdentifier: __expectString,
    name: __expectString,
    snapshotCreateTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    sourceGraphId: __expectString,
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeletePrivateGraphEndpointCommand
 */
export const de_DeletePrivateGraphEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePrivateGraphEndpointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    status: __expectString,
    subnetIds: _json,
    vpcEndpointId: __expectString,
    vpcId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ExecuteQueryCommand
 */
export const de_ExecuteQueryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext & __SdkStreamSerdeContext
): Promise<ExecuteQueryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1GetExportTaskCommand
 */
export const de_GetExportTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetExportTaskCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    destination: __expectString,
    exportFilter: _json,
    exportTaskDetails: (_) => de_ExportTaskDetails(_, context),
    format: __expectString,
    graphId: __expectString,
    kmsKeyIdentifier: __expectString,
    parquetType: __expectString,
    roleArn: __expectString,
    status: __expectString,
    statusReason: __expectString,
    taskId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetGraphCommand
 */
export const de_GetGraphCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGraphCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    buildNumber: __expectString,
    createTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    deletionProtection: __expectBoolean,
    endpoint: __expectString,
    id: __expectString,
    kmsKeyIdentifier: __expectString,
    name: __expectString,
    provisionedMemory: __expectInt32,
    publicConnectivity: __expectBoolean,
    replicaCount: __expectInt32,
    sourceSnapshotId: __expectString,
    status: __expectString,
    statusReason: __expectString,
    vectorSearchConfiguration: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetGraphSnapshotCommand
 */
export const de_GetGraphSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGraphSnapshotCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    id: __expectString,
    kmsKeyIdentifier: __expectString,
    name: __expectString,
    snapshotCreateTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    sourceGraphId: __expectString,
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetGraphSummaryCommand
 */
export const de_GetGraphSummaryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGraphSummaryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    graphSummary: _json,
    lastStatisticsComputationTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    version: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetImportTaskCommand
 */
export const de_GetImportTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetImportTaskCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    attemptNumber: __expectInt32,
    format: __expectString,
    graphId: __expectString,
    importOptions: (_) => _json(__expectUnion(_)),
    importTaskDetails: (_) => de_ImportTaskDetails(_, context),
    parquetType: __expectString,
    roleArn: __expectString,
    source: __expectString,
    status: __expectString,
    statusReason: __expectString,
    taskId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetPrivateGraphEndpointCommand
 */
export const de_GetPrivateGraphEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPrivateGraphEndpointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    status: __expectString,
    subnetIds: _json,
    vpcEndpointId: __expectString,
    vpcId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetQueryCommand
 */
export const de_GetQueryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetQueryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    elapsed: __expectInt32,
    id: __expectString,
    queryString: __expectString,
    state: __expectString,
    waited: __expectInt32,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListExportTasksCommand
 */
export const de_ListExportTasksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListExportTasksCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    tasks: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListGraphsCommand
 */
export const de_ListGraphsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGraphsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    graphs: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListGraphSnapshotsCommand
 */
export const de_ListGraphSnapshotsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGraphSnapshotsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    graphSnapshots: (_) => de_GraphSnapshotSummaryList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListImportTasksCommand
 */
export const de_ListImportTasksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListImportTasksCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    tasks: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListPrivateGraphEndpointsCommand
 */
export const de_ListPrivateGraphEndpointsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPrivateGraphEndpointsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    privateGraphEndpoints: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListQueriesCommand
 */
export const de_ListQueriesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListQueriesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    queries: _json,
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
 * deserializeAws_restJson1ResetGraphCommand
 */
export const de_ResetGraphCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResetGraphCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    buildNumber: __expectString,
    createTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    deletionProtection: __expectBoolean,
    endpoint: __expectString,
    id: __expectString,
    kmsKeyIdentifier: __expectString,
    name: __expectString,
    provisionedMemory: __expectInt32,
    publicConnectivity: __expectBoolean,
    replicaCount: __expectInt32,
    sourceSnapshotId: __expectString,
    status: __expectString,
    statusReason: __expectString,
    vectorSearchConfiguration: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1RestoreGraphFromSnapshotCommand
 */
export const de_RestoreGraphFromSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreGraphFromSnapshotCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    buildNumber: __expectString,
    createTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    deletionProtection: __expectBoolean,
    endpoint: __expectString,
    id: __expectString,
    kmsKeyIdentifier: __expectString,
    name: __expectString,
    provisionedMemory: __expectInt32,
    publicConnectivity: __expectBoolean,
    replicaCount: __expectInt32,
    sourceSnapshotId: __expectString,
    status: __expectString,
    statusReason: __expectString,
    vectorSearchConfiguration: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartExportTaskCommand
 */
export const de_StartExportTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartExportTaskCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    destination: __expectString,
    exportFilter: _json,
    format: __expectString,
    graphId: __expectString,
    kmsKeyIdentifier: __expectString,
    parquetType: __expectString,
    roleArn: __expectString,
    status: __expectString,
    statusReason: __expectString,
    taskId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartImportTaskCommand
 */
export const de_StartImportTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartImportTaskCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    format: __expectString,
    graphId: __expectString,
    importOptions: (_) => _json(__expectUnion(_)),
    parquetType: __expectString,
    roleArn: __expectString,
    source: __expectString,
    status: __expectString,
    taskId: __expectString,
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
 * deserializeAws_restJson1UpdateGraphCommand
 */
export const de_UpdateGraphCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGraphCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    buildNumber: __expectString,
    createTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    deletionProtection: __expectBoolean,
    endpoint: __expectString,
    id: __expectString,
    kmsKeyIdentifier: __expectString,
    name: __expectString,
    provisionedMemory: __expectInt32,
    publicConnectivity: __expectBoolean,
    replicaCount: __expectInt32,
    sourceSnapshotId: __expectString,
    status: __expectString,
    statusReason: __expectString,
    vectorSearchConfiguration: _json,
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
    case "ConflictException":
    case "com.amazonaws.neptunegraph#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.neptunegraph#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.neptunegraph#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.neptunegraph#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.neptunegraph#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.neptunegraph#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.neptunegraph#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "UnprocessableException":
    case "com.amazonaws.neptunegraph#UnprocessableException":
      throw await de_UnprocessableExceptionRes(parsedOutput, context);
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
    reason: __expectString,
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
    quotaCode: __expectString,
    resourceId: __expectString,
    resourceType: __expectString,
    serviceCode: __expectString,
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
 * deserializeAws_restJson1UnprocessableExceptionRes
 */
const de_UnprocessableExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnprocessableException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
    reason: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new UnprocessableException({
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
    reason: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * serializeAws_restJson1DocumentValuedMap
 */
const se_DocumentValuedMap = (input: Record<string, __DocumentType>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_Document(value, context);
    return acc;
  }, {});
};

// se_ExportFilter omitted.

// se_ExportFilterElement omitted.

// se_ExportFilterPerLabelMap omitted.

// se_ExportFilterPropertyAttributes omitted.

// se_ExportFilterPropertyMap omitted.

// se_ImportOptions omitted.

// se_NeptuneImportOptions omitted.

// se_SecurityGroupIds omitted.

// se_SubnetIds omitted.

// se_TagMap omitted.

// se_VectorSearchConfiguration omitted.

/**
 * serializeAws_restJson1Document
 */
const se_Document = (input: __DocumentType, context: __SerdeContext): any => {
  return input;
};

// de_EdgeLabels omitted.

// de_EdgeProperties omitted.

// de_EdgeStructure omitted.

// de_EdgeStructures omitted.

// de_ExportFilter omitted.

// de_ExportFilterElement omitted.

// de_ExportFilterPerLabelMap omitted.

// de_ExportFilterPropertyAttributes omitted.

// de_ExportFilterPropertyMap omitted.

/**
 * deserializeAws_restJson1ExportTaskDetails
 */
const de_ExportTaskDetails = (output: any, context: __SerdeContext): ExportTaskDetails => {
  return take(output, {
    numEdgesWritten: __expectLong,
    numVerticesWritten: __expectLong,
    progressPercentage: __expectInt32,
    startTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    timeElapsedSeconds: __expectLong,
  }) as any;
};

// de_ExportTaskSummary omitted.

// de_ExportTaskSummaryList omitted.

// de_GraphDataSummary omitted.

/**
 * deserializeAws_restJson1GraphSnapshotSummary
 */
const de_GraphSnapshotSummary = (output: any, context: __SerdeContext): GraphSnapshotSummary => {
  return take(output, {
    arn: __expectString,
    id: __expectString,
    kmsKeyIdentifier: __expectString,
    name: __expectString,
    snapshotCreateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    sourceGraphId: __expectString,
    status: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1GraphSnapshotSummaryList
 */
const de_GraphSnapshotSummaryList = (output: any, context: __SerdeContext): GraphSnapshotSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_GraphSnapshotSummary(entry, context);
    });
  return retVal;
};

// de_GraphSummary omitted.

// de_GraphSummaryList omitted.

// de_ImportOptions omitted.

/**
 * deserializeAws_restJson1ImportTaskDetails
 */
const de_ImportTaskDetails = (output: any, context: __SerdeContext): ImportTaskDetails => {
  return take(output, {
    dictionaryEntryCount: __expectLong,
    errorCount: __expectInt32,
    errorDetails: __expectString,
    progressPercentage: __expectInt32,
    startTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    statementCount: __expectLong,
    status: __expectString,
    timeElapsedSeconds: __expectLong,
  }) as any;
};

// de_ImportTaskSummary omitted.

// de_ImportTaskSummaryList omitted.

// de_LongValuedMap omitted.

// de_LongValuedMapList omitted.

// de_NeptuneImportOptions omitted.

// de_NodeLabels omitted.

// de_NodeProperties omitted.

// de_NodeStructure omitted.

// de_NodeStructures omitted.

// de_OutgoingEdgeLabels omitted.

// de_PrivateGraphEndpointSummary omitted.

// de_PrivateGraphEndpointSummaryList omitted.

// de_QuerySummary omitted.

// de_QuerySummaryList omitted.

// de_SubnetIds omitted.

// de_TagMap omitted.

// de_VectorSearchConfiguration omitted.

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

const _g = "graphidentifier";
const _gI = "graphIdentifier";
const _m = "mode";
const _mR = "maxResults";
const _nT = "nextToken";
const _s = "state";
const _sS = "skipSnapshot";
const _tK = "tagKeys";
