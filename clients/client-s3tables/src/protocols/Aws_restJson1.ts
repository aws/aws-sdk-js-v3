// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
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

import { CreateNamespaceCommandInput, CreateNamespaceCommandOutput } from "../commands/CreateNamespaceCommand";
import { CreateTableBucketCommandInput, CreateTableBucketCommandOutput } from "../commands/CreateTableBucketCommand";
import { CreateTableCommandInput, CreateTableCommandOutput } from "../commands/CreateTableCommand";
import { DeleteNamespaceCommandInput, DeleteNamespaceCommandOutput } from "../commands/DeleteNamespaceCommand";
import { DeleteTableBucketCommandInput, DeleteTableBucketCommandOutput } from "../commands/DeleteTableBucketCommand";
import {
  DeleteTableBucketEncryptionCommandInput,
  DeleteTableBucketEncryptionCommandOutput,
} from "../commands/DeleteTableBucketEncryptionCommand";
import {
  DeleteTableBucketPolicyCommandInput,
  DeleteTableBucketPolicyCommandOutput,
} from "../commands/DeleteTableBucketPolicyCommand";
import { DeleteTableCommandInput, DeleteTableCommandOutput } from "../commands/DeleteTableCommand";
import { DeleteTablePolicyCommandInput, DeleteTablePolicyCommandOutput } from "../commands/DeleteTablePolicyCommand";
import { GetNamespaceCommandInput, GetNamespaceCommandOutput } from "../commands/GetNamespaceCommand";
import { GetTableBucketCommandInput, GetTableBucketCommandOutput } from "../commands/GetTableBucketCommand";
import {
  GetTableBucketEncryptionCommandInput,
  GetTableBucketEncryptionCommandOutput,
} from "../commands/GetTableBucketEncryptionCommand";
import {
  GetTableBucketMaintenanceConfigurationCommandInput,
  GetTableBucketMaintenanceConfigurationCommandOutput,
} from "../commands/GetTableBucketMaintenanceConfigurationCommand";
import {
  GetTableBucketPolicyCommandInput,
  GetTableBucketPolicyCommandOutput,
} from "../commands/GetTableBucketPolicyCommand";
import { GetTableCommandInput, GetTableCommandOutput } from "../commands/GetTableCommand";
import { GetTableEncryptionCommandInput, GetTableEncryptionCommandOutput } from "../commands/GetTableEncryptionCommand";
import {
  GetTableMaintenanceConfigurationCommandInput,
  GetTableMaintenanceConfigurationCommandOutput,
} from "../commands/GetTableMaintenanceConfigurationCommand";
import {
  GetTableMaintenanceJobStatusCommandInput,
  GetTableMaintenanceJobStatusCommandOutput,
} from "../commands/GetTableMaintenanceJobStatusCommand";
import {
  GetTableMetadataLocationCommandInput,
  GetTableMetadataLocationCommandOutput,
} from "../commands/GetTableMetadataLocationCommand";
import { GetTablePolicyCommandInput, GetTablePolicyCommandOutput } from "../commands/GetTablePolicyCommand";
import { ListNamespacesCommandInput, ListNamespacesCommandOutput } from "../commands/ListNamespacesCommand";
import { ListTableBucketsCommandInput, ListTableBucketsCommandOutput } from "../commands/ListTableBucketsCommand";
import { ListTablesCommandInput, ListTablesCommandOutput } from "../commands/ListTablesCommand";
import {
  PutTableBucketEncryptionCommandInput,
  PutTableBucketEncryptionCommandOutput,
} from "../commands/PutTableBucketEncryptionCommand";
import {
  PutTableBucketMaintenanceConfigurationCommandInput,
  PutTableBucketMaintenanceConfigurationCommandOutput,
} from "../commands/PutTableBucketMaintenanceConfigurationCommand";
import {
  PutTableBucketPolicyCommandInput,
  PutTableBucketPolicyCommandOutput,
} from "../commands/PutTableBucketPolicyCommand";
import {
  PutTableMaintenanceConfigurationCommandInput,
  PutTableMaintenanceConfigurationCommandOutput,
} from "../commands/PutTableMaintenanceConfigurationCommand";
import { PutTablePolicyCommandInput, PutTablePolicyCommandOutput } from "../commands/PutTablePolicyCommand";
import { RenameTableCommandInput, RenameTableCommandOutput } from "../commands/RenameTableCommand";
import {
  UpdateTableMetadataLocationCommandInput,
  UpdateTableMetadataLocationCommandOutput,
} from "../commands/UpdateTableMetadataLocationCommand";
import {
  AccessDeniedException,
  BadRequestException,
  ConflictException,
  EncryptionConfiguration,
  ForbiddenException,
  IcebergCompactionSettings,
  IcebergMetadata,
  IcebergSchema,
  IcebergSnapshotManagementSettings,
  IcebergUnreferencedFileRemovalSettings,
  InternalServerErrorException,
  NamespaceSummary,
  NotFoundException,
  SchemaField,
  TableBucketMaintenanceConfigurationValue,
  TableBucketMaintenanceSettings,
  TableBucketSummary,
  TableMaintenanceConfigurationValue,
  TableMaintenanceJobStatusValue,
  TableMaintenanceJobType,
  TableMaintenanceSettings,
  TableMetadata,
  TableSummary,
  TooManyRequestsException,
} from "../models/models_0";
import { S3TablesServiceException as __BaseException } from "../models/S3TablesServiceException";

/**
 * serializeAws_restJson1CreateNamespaceCommand
 */
export const se_CreateNamespaceCommand = async (
  input: CreateNamespaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/namespaces/{tableBucketARN}");
  b.p("tableBucketARN", () => input.tableBucketARN!, "{tableBucketARN}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      namespace: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateTableCommand
 */
export const se_CreateTableCommand = async (
  input: CreateTableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/tables/{tableBucketARN}/{namespace}");
  b.p("tableBucketARN", () => input.tableBucketARN!, "{tableBucketARN}", false);
  b.p("namespace", () => input.namespace!, "{namespace}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      encryptionConfiguration: (_) => _json(_),
      format: [],
      metadata: (_) => _json(_),
      name: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateTableBucketCommand
 */
export const se_CreateTableBucketCommand = async (
  input: CreateTableBucketCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/buckets");
  let body: any;
  body = JSON.stringify(
    take(input, {
      encryptionConfiguration: (_) => _json(_),
      name: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteNamespaceCommand
 */
export const se_DeleteNamespaceCommand = async (
  input: DeleteNamespaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/namespaces/{tableBucketARN}/{namespace}");
  b.p("tableBucketARN", () => input.tableBucketARN!, "{tableBucketARN}", false);
  b.p("namespace", () => input.namespace!, "{namespace}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteTableCommand
 */
export const se_DeleteTableCommand = async (
  input: DeleteTableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/tables/{tableBucketARN}/{namespace}/{name}");
  b.p("tableBucketARN", () => input.tableBucketARN!, "{tableBucketARN}", false);
  b.p("namespace", () => input.namespace!, "{namespace}", false);
  b.p("name", () => input.name!, "{name}", false);
  const query: any = map({
    [_vT]: [, input[_vT]!],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteTableBucketCommand
 */
export const se_DeleteTableBucketCommand = async (
  input: DeleteTableBucketCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/buckets/{tableBucketARN}");
  b.p("tableBucketARN", () => input.tableBucketARN!, "{tableBucketARN}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteTableBucketEncryptionCommand
 */
export const se_DeleteTableBucketEncryptionCommand = async (
  input: DeleteTableBucketEncryptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/buckets/{tableBucketARN}/encryption");
  b.p("tableBucketARN", () => input.tableBucketARN!, "{tableBucketARN}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteTableBucketPolicyCommand
 */
export const se_DeleteTableBucketPolicyCommand = async (
  input: DeleteTableBucketPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/buckets/{tableBucketARN}/policy");
  b.p("tableBucketARN", () => input.tableBucketARN!, "{tableBucketARN}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteTablePolicyCommand
 */
export const se_DeleteTablePolicyCommand = async (
  input: DeleteTablePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/tables/{tableBucketARN}/{namespace}/{name}/policy");
  b.p("tableBucketARN", () => input.tableBucketARN!, "{tableBucketARN}", false);
  b.p("namespace", () => input.namespace!, "{namespace}", false);
  b.p("name", () => input.name!, "{name}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetNamespaceCommand
 */
export const se_GetNamespaceCommand = async (
  input: GetNamespaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/namespaces/{tableBucketARN}/{namespace}");
  b.p("tableBucketARN", () => input.tableBucketARN!, "{tableBucketARN}", false);
  b.p("namespace", () => input.namespace!, "{namespace}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetTableCommand
 */
export const se_GetTableCommand = async (
  input: GetTableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/get-table");
  const query: any = map({
    [_tBARN]: [, input[_tBARN]!],
    [_n]: [, input[_n]!],
    [_na]: [, input[_na]!],
    [_tA]: [, input[_tA]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetTableBucketCommand
 */
export const se_GetTableBucketCommand = async (
  input: GetTableBucketCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/buckets/{tableBucketARN}");
  b.p("tableBucketARN", () => input.tableBucketARN!, "{tableBucketARN}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetTableBucketEncryptionCommand
 */
export const se_GetTableBucketEncryptionCommand = async (
  input: GetTableBucketEncryptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/buckets/{tableBucketARN}/encryption");
  b.p("tableBucketARN", () => input.tableBucketARN!, "{tableBucketARN}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetTableBucketMaintenanceConfigurationCommand
 */
export const se_GetTableBucketMaintenanceConfigurationCommand = async (
  input: GetTableBucketMaintenanceConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/buckets/{tableBucketARN}/maintenance");
  b.p("tableBucketARN", () => input.tableBucketARN!, "{tableBucketARN}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetTableBucketPolicyCommand
 */
export const se_GetTableBucketPolicyCommand = async (
  input: GetTableBucketPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/buckets/{tableBucketARN}/policy");
  b.p("tableBucketARN", () => input.tableBucketARN!, "{tableBucketARN}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetTableEncryptionCommand
 */
export const se_GetTableEncryptionCommand = async (
  input: GetTableEncryptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/tables/{tableBucketARN}/{namespace}/{name}/encryption");
  b.p("tableBucketARN", () => input.tableBucketARN!, "{tableBucketARN}", false);
  b.p("namespace", () => input.namespace!, "{namespace}", false);
  b.p("name", () => input.name!, "{name}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetTableMaintenanceConfigurationCommand
 */
export const se_GetTableMaintenanceConfigurationCommand = async (
  input: GetTableMaintenanceConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/tables/{tableBucketARN}/{namespace}/{name}/maintenance");
  b.p("tableBucketARN", () => input.tableBucketARN!, "{tableBucketARN}", false);
  b.p("namespace", () => input.namespace!, "{namespace}", false);
  b.p("name", () => input.name!, "{name}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetTableMaintenanceJobStatusCommand
 */
export const se_GetTableMaintenanceJobStatusCommand = async (
  input: GetTableMaintenanceJobStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/tables/{tableBucketARN}/{namespace}/{name}/maintenance-job-status");
  b.p("tableBucketARN", () => input.tableBucketARN!, "{tableBucketARN}", false);
  b.p("namespace", () => input.namespace!, "{namespace}", false);
  b.p("name", () => input.name!, "{name}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetTableMetadataLocationCommand
 */
export const se_GetTableMetadataLocationCommand = async (
  input: GetTableMetadataLocationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/tables/{tableBucketARN}/{namespace}/{name}/metadata-location");
  b.p("tableBucketARN", () => input.tableBucketARN!, "{tableBucketARN}", false);
  b.p("namespace", () => input.namespace!, "{namespace}", false);
  b.p("name", () => input.name!, "{name}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetTablePolicyCommand
 */
export const se_GetTablePolicyCommand = async (
  input: GetTablePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/tables/{tableBucketARN}/{namespace}/{name}/policy");
  b.p("tableBucketARN", () => input.tableBucketARN!, "{tableBucketARN}", false);
  b.p("namespace", () => input.namespace!, "{namespace}", false);
  b.p("name", () => input.name!, "{name}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListNamespacesCommand
 */
export const se_ListNamespacesCommand = async (
  input: ListNamespacesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/namespaces/{tableBucketARN}");
  b.p("tableBucketARN", () => input.tableBucketARN!, "{tableBucketARN}", false);
  const query: any = map({
    [_p]: [, input[_p]!],
    [_cT]: [, input[_cT]!],
    [_mN]: [() => input.maxNamespaces !== void 0, () => input[_mN]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListTableBucketsCommand
 */
export const se_ListTableBucketsCommand = async (
  input: ListTableBucketsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/buckets");
  const query: any = map({
    [_p]: [, input[_p]!],
    [_cT]: [, input[_cT]!],
    [_mB]: [() => input.maxBuckets !== void 0, () => input[_mB]!.toString()],
    [_t]: [, input[_t]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListTablesCommand
 */
export const se_ListTablesCommand = async (
  input: ListTablesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/tables/{tableBucketARN}");
  b.p("tableBucketARN", () => input.tableBucketARN!, "{tableBucketARN}", false);
  const query: any = map({
    [_n]: [, input[_n]!],
    [_p]: [, input[_p]!],
    [_cT]: [, input[_cT]!],
    [_mT]: [() => input.maxTables !== void 0, () => input[_mT]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutTableBucketEncryptionCommand
 */
export const se_PutTableBucketEncryptionCommand = async (
  input: PutTableBucketEncryptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/buckets/{tableBucketARN}/encryption");
  b.p("tableBucketARN", () => input.tableBucketARN!, "{tableBucketARN}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      encryptionConfiguration: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutTableBucketMaintenanceConfigurationCommand
 */
export const se_PutTableBucketMaintenanceConfigurationCommand = async (
  input: PutTableBucketMaintenanceConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/buckets/{tableBucketARN}/maintenance/{type}");
  b.p("tableBucketARN", () => input.tableBucketARN!, "{tableBucketARN}", false);
  b.p("type", () => input.type!, "{type}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      value: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutTableBucketPolicyCommand
 */
export const se_PutTableBucketPolicyCommand = async (
  input: PutTableBucketPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/buckets/{tableBucketARN}/policy");
  b.p("tableBucketARN", () => input.tableBucketARN!, "{tableBucketARN}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      resourcePolicy: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutTableMaintenanceConfigurationCommand
 */
export const se_PutTableMaintenanceConfigurationCommand = async (
  input: PutTableMaintenanceConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/tables/{tableBucketARN}/{namespace}/{name}/maintenance/{type}");
  b.p("tableBucketARN", () => input.tableBucketARN!, "{tableBucketARN}", false);
  b.p("namespace", () => input.namespace!, "{namespace}", false);
  b.p("name", () => input.name!, "{name}", false);
  b.p("type", () => input.type!, "{type}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      value: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutTablePolicyCommand
 */
export const se_PutTablePolicyCommand = async (
  input: PutTablePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/tables/{tableBucketARN}/{namespace}/{name}/policy");
  b.p("tableBucketARN", () => input.tableBucketARN!, "{tableBucketARN}", false);
  b.p("namespace", () => input.namespace!, "{namespace}", false);
  b.p("name", () => input.name!, "{name}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      resourcePolicy: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1RenameTableCommand
 */
export const se_RenameTableCommand = async (
  input: RenameTableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/tables/{tableBucketARN}/{namespace}/{name}/rename");
  b.p("tableBucketARN", () => input.tableBucketARN!, "{tableBucketARN}", false);
  b.p("namespace", () => input.namespace!, "{namespace}", false);
  b.p("name", () => input.name!, "{name}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      newName: [],
      newNamespaceName: [],
      versionToken: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateTableMetadataLocationCommand
 */
export const se_UpdateTableMetadataLocationCommand = async (
  input: UpdateTableMetadataLocationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/tables/{tableBucketARN}/{namespace}/{name}/metadata-location");
  b.p("tableBucketARN", () => input.tableBucketARN!, "{tableBucketARN}", false);
  b.p("namespace", () => input.namespace!, "{namespace}", false);
  b.p("name", () => input.name!, "{name}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      metadataLocation: [],
      versionToken: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1CreateNamespaceCommand
 */
export const de_CreateNamespaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateNamespaceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    namespace: _json,
    tableBucketARN: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateTableCommand
 */
export const de_CreateTableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTableCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    tableARN: __expectString,
    versionToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateTableBucketCommand
 */
export const de_CreateTableBucketCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTableBucketCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteNamespaceCommand
 */
export const de_DeleteNamespaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteNamespaceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteTableCommand
 */
export const de_DeleteTableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTableCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteTableBucketCommand
 */
export const de_DeleteTableBucketCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTableBucketCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteTableBucketEncryptionCommand
 */
export const de_DeleteTableBucketEncryptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTableBucketEncryptionCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteTableBucketPolicyCommand
 */
export const de_DeleteTableBucketPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTableBucketPolicyCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteTablePolicyCommand
 */
export const de_DeleteTablePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTablePolicyCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1GetNamespaceCommand
 */
export const de_GetNamespaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetNamespaceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    createdAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    createdBy: __expectString,
    namespace: _json,
    namespaceId: __expectString,
    ownerAccountId: __expectString,
    tableBucketId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetTableCommand
 */
export const de_GetTableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTableCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    createdAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    createdBy: __expectString,
    format: __expectString,
    managedByService: __expectString,
    metadataLocation: __expectString,
    modifiedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    modifiedBy: __expectString,
    name: __expectString,
    namespace: _json,
    namespaceId: __expectString,
    ownerAccountId: __expectString,
    tableARN: __expectString,
    tableBucketId: __expectString,
    type: __expectString,
    versionToken: __expectString,
    warehouseLocation: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetTableBucketCommand
 */
export const de_GetTableBucketCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTableBucketCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    createdAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    name: __expectString,
    ownerAccountId: __expectString,
    tableBucketId: __expectString,
    type: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetTableBucketEncryptionCommand
 */
export const de_GetTableBucketEncryptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTableBucketEncryptionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    encryptionConfiguration: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetTableBucketMaintenanceConfigurationCommand
 */
export const de_GetTableBucketMaintenanceConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTableBucketMaintenanceConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    configuration: _json,
    tableBucketARN: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetTableBucketPolicyCommand
 */
export const de_GetTableBucketPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTableBucketPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    resourcePolicy: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetTableEncryptionCommand
 */
export const de_GetTableEncryptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTableEncryptionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    encryptionConfiguration: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetTableMaintenanceConfigurationCommand
 */
export const de_GetTableMaintenanceConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTableMaintenanceConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    configuration: _json,
    tableARN: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetTableMaintenanceJobStatusCommand
 */
export const de_GetTableMaintenanceJobStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTableMaintenanceJobStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    status: (_) => de_TableMaintenanceJobStatus(_, context),
    tableARN: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetTableMetadataLocationCommand
 */
export const de_GetTableMetadataLocationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTableMetadataLocationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    metadataLocation: __expectString,
    versionToken: __expectString,
    warehouseLocation: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetTablePolicyCommand
 */
export const de_GetTablePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTablePolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    resourcePolicy: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListNamespacesCommand
 */
export const de_ListNamespacesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNamespacesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    continuationToken: __expectString,
    namespaces: (_) => de_NamespaceSummaryList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListTableBucketsCommand
 */
export const de_ListTableBucketsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTableBucketsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    continuationToken: __expectString,
    tableBuckets: (_) => de_TableBucketSummaryList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListTablesCommand
 */
export const de_ListTablesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTablesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    continuationToken: __expectString,
    tables: (_) => de_TableSummaryList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PutTableBucketEncryptionCommand
 */
export const de_PutTableBucketEncryptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutTableBucketEncryptionCommandOutput> => {
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
 * deserializeAws_restJson1PutTableBucketMaintenanceConfigurationCommand
 */
export const de_PutTableBucketMaintenanceConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutTableBucketMaintenanceConfigurationCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1PutTableBucketPolicyCommand
 */
export const de_PutTableBucketPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutTableBucketPolicyCommandOutput> => {
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
 * deserializeAws_restJson1PutTableMaintenanceConfigurationCommand
 */
export const de_PutTableMaintenanceConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutTableMaintenanceConfigurationCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1PutTablePolicyCommand
 */
export const de_PutTablePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutTablePolicyCommandOutput> => {
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
 * deserializeAws_restJson1RenameTableCommand
 */
export const de_RenameTableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RenameTableCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateTableMetadataLocationCommand
 */
export const de_UpdateTableMetadataLocationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTableMetadataLocationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    metadataLocation: __expectString,
    name: __expectString,
    namespace: _json,
    tableARN: __expectString,
    versionToken: __expectString,
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
    case "com.amazonaws.s3tables#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.s3tables#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.s3tables#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.s3tables#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.s3tables#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.s3tables#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.s3tables#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
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

// se_EncryptionConfiguration omitted.

// se_IcebergCompactionSettings omitted.

// se_IcebergMetadata omitted.

// se_IcebergSchema omitted.

// se_IcebergSnapshotManagementSettings omitted.

// se_IcebergUnreferencedFileRemovalSettings omitted.

// se_NamespaceList omitted.

// se_SchemaField omitted.

// se_SchemaFieldList omitted.

// se_TableBucketMaintenanceConfigurationValue omitted.

// se_TableBucketMaintenanceSettings omitted.

// se_TableMaintenanceConfigurationValue omitted.

// se_TableMaintenanceSettings omitted.

// se_TableMetadata omitted.

// de_EncryptionConfiguration omitted.

// de_IcebergCompactionSettings omitted.

// de_IcebergSnapshotManagementSettings omitted.

// de_IcebergUnreferencedFileRemovalSettings omitted.

// de_NamespaceList omitted.

/**
 * deserializeAws_restJson1NamespaceSummary
 */
const de_NamespaceSummary = (output: any, context: __SerdeContext): NamespaceSummary => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    createdBy: __expectString,
    namespace: _json,
    namespaceId: __expectString,
    ownerAccountId: __expectString,
    tableBucketId: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1NamespaceSummaryList
 */
const de_NamespaceSummaryList = (output: any, context: __SerdeContext): NamespaceSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_NamespaceSummary(entry, context);
    });
  return retVal;
};

// de_TableBucketMaintenanceConfiguration omitted.

// de_TableBucketMaintenanceConfigurationValue omitted.

// de_TableBucketMaintenanceSettings omitted.

/**
 * deserializeAws_restJson1TableBucketSummary
 */
const de_TableBucketSummary = (output: any, context: __SerdeContext): TableBucketSummary => {
  return take(output, {
    arn: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    name: __expectString,
    ownerAccountId: __expectString,
    tableBucketId: __expectString,
    type: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1TableBucketSummaryList
 */
const de_TableBucketSummaryList = (output: any, context: __SerdeContext): TableBucketSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TableBucketSummary(entry, context);
    });
  return retVal;
};

// de_TableMaintenanceConfiguration omitted.

// de_TableMaintenanceConfigurationValue omitted.

/**
 * deserializeAws_restJson1TableMaintenanceJobStatus
 */
const de_TableMaintenanceJobStatus = (
  output: any,
  context: __SerdeContext
): Partial<Record<TableMaintenanceJobType, TableMaintenanceJobStatusValue>> => {
  return Object.entries(output).reduce(
    (acc: Partial<Record<TableMaintenanceJobType, TableMaintenanceJobStatusValue>>, [key, value]: [string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key as TableMaintenanceJobType] = de_TableMaintenanceJobStatusValue(value, context);
      return acc;
    },
    {} as Partial<Record<TableMaintenanceJobType, TableMaintenanceJobStatusValue>>
  );
};

/**
 * deserializeAws_restJson1TableMaintenanceJobStatusValue
 */
const de_TableMaintenanceJobStatusValue = (output: any, context: __SerdeContext): TableMaintenanceJobStatusValue => {
  return take(output, {
    failureMessage: __expectString,
    lastRunTimestamp: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    status: __expectString,
  }) as any;
};

// de_TableMaintenanceSettings omitted.

/**
 * deserializeAws_restJson1TableSummary
 */
const de_TableSummary = (output: any, context: __SerdeContext): TableSummary => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    modifiedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    name: __expectString,
    namespace: _json,
    namespaceId: __expectString,
    tableARN: __expectString,
    tableBucketId: __expectString,
    type: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1TableSummaryList
 */
const de_TableSummaryList = (output: any, context: __SerdeContext): TableSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TableSummary(entry, context);
    });
  return retVal;
};

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

const _cT = "continuationToken";
const _mB = "maxBuckets";
const _mN = "maxNamespaces";
const _mT = "maxTables";
const _n = "namespace";
const _na = "name";
const _p = "prefix";
const _t = "type";
const _tA = "tableArn";
const _tBARN = "tableBucketARN";
const _vT = "versionToken";
