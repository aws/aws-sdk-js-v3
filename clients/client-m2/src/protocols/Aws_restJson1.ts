// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  expectUnion as __expectUnion,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  parseEpochTimestamp as __parseEpochTimestamp,
  strictParseInt32 as __strictParseInt32,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";
import { v4 as generateIdempotencyToken } from "uuid";

import {
  CancelBatchJobExecutionCommandInput,
  CancelBatchJobExecutionCommandOutput,
} from "../commands/CancelBatchJobExecutionCommand";
import { CreateApplicationCommandInput, CreateApplicationCommandOutput } from "../commands/CreateApplicationCommand";
import {
  CreateDataSetImportTaskCommandInput,
  CreateDataSetImportTaskCommandOutput,
} from "../commands/CreateDataSetImportTaskCommand";
import { CreateDeploymentCommandInput, CreateDeploymentCommandOutput } from "../commands/CreateDeploymentCommand";
import { CreateEnvironmentCommandInput, CreateEnvironmentCommandOutput } from "../commands/CreateEnvironmentCommand";
import { DeleteApplicationCommandInput, DeleteApplicationCommandOutput } from "../commands/DeleteApplicationCommand";
import {
  DeleteApplicationFromEnvironmentCommandInput,
  DeleteApplicationFromEnvironmentCommandOutput,
} from "../commands/DeleteApplicationFromEnvironmentCommand";
import { DeleteEnvironmentCommandInput, DeleteEnvironmentCommandOutput } from "../commands/DeleteEnvironmentCommand";
import { GetApplicationCommandInput, GetApplicationCommandOutput } from "../commands/GetApplicationCommand";
import {
  GetApplicationVersionCommandInput,
  GetApplicationVersionCommandOutput,
} from "../commands/GetApplicationVersionCommand";
import {
  GetBatchJobExecutionCommandInput,
  GetBatchJobExecutionCommandOutput,
} from "../commands/GetBatchJobExecutionCommand";
import { GetDataSetDetailsCommandInput, GetDataSetDetailsCommandOutput } from "../commands/GetDataSetDetailsCommand";
import {
  GetDataSetImportTaskCommandInput,
  GetDataSetImportTaskCommandOutput,
} from "../commands/GetDataSetImportTaskCommand";
import { GetDeploymentCommandInput, GetDeploymentCommandOutput } from "../commands/GetDeploymentCommand";
import { GetEnvironmentCommandInput, GetEnvironmentCommandOutput } from "../commands/GetEnvironmentCommand";
import { ListApplicationsCommandInput, ListApplicationsCommandOutput } from "../commands/ListApplicationsCommand";
import {
  ListApplicationVersionsCommandInput,
  ListApplicationVersionsCommandOutput,
} from "../commands/ListApplicationVersionsCommand";
import {
  ListBatchJobDefinitionsCommandInput,
  ListBatchJobDefinitionsCommandOutput,
} from "../commands/ListBatchJobDefinitionsCommand";
import {
  ListBatchJobExecutionsCommandInput,
  ListBatchJobExecutionsCommandOutput,
} from "../commands/ListBatchJobExecutionsCommand";
import {
  ListDataSetImportHistoryCommandInput,
  ListDataSetImportHistoryCommandOutput,
} from "../commands/ListDataSetImportHistoryCommand";
import { ListDataSetsCommandInput, ListDataSetsCommandOutput } from "../commands/ListDataSetsCommand";
import { ListDeploymentsCommandInput, ListDeploymentsCommandOutput } from "../commands/ListDeploymentsCommand";
import { ListEngineVersionsCommandInput, ListEngineVersionsCommandOutput } from "../commands/ListEngineVersionsCommand";
import { ListEnvironmentsCommandInput, ListEnvironmentsCommandOutput } from "../commands/ListEnvironmentsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { StartApplicationCommandInput, StartApplicationCommandOutput } from "../commands/StartApplicationCommand";
import { StartBatchJobCommandInput, StartBatchJobCommandOutput } from "../commands/StartBatchJobCommand";
import { StopApplicationCommandInput, StopApplicationCommandOutput } from "../commands/StopApplicationCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateApplicationCommandInput, UpdateApplicationCommandOutput } from "../commands/UpdateApplicationCommand";
import { UpdateEnvironmentCommandInput, UpdateEnvironmentCommandOutput } from "../commands/UpdateEnvironmentCommand";
import { M2ServiceException as __BaseException } from "../models/M2ServiceException";
import {
  AccessDeniedException,
  AlternateKey,
  ApplicationSummary,
  ApplicationVersionSummary,
  BatchJobDefinition,
  BatchJobExecutionSummary,
  BatchJobIdentifier,
  ConflictException,
  DataSet,
  DatasetDetailOrgAttributes,
  DataSetImportConfig,
  DataSetImportItem,
  DataSetImportSummary,
  DataSetImportTask,
  DatasetOrgAttributes,
  DataSetSummary,
  Definition,
  DeployedVersionSummary,
  DeploymentSummary,
  EfsStorageConfiguration,
  EngineVersionsSummary,
  EnvironmentSummary,
  ExternalLocation,
  FileBatchJobDefinition,
  FileBatchJobIdentifier,
  FsxStorageConfiguration,
  GdgAttributes,
  GdgDetailAttributes,
  HighAvailabilityConfig,
  InternalServerException,
  LogGroupSummary,
  MaintenanceSchedule,
  PendingMaintenance,
  PrimaryKey,
  RecordLength,
  ResourceNotFoundException,
  ScriptBatchJobDefinition,
  ScriptBatchJobIdentifier,
  ServiceQuotaExceededException,
  StorageConfiguration,
  ThrottlingException,
  ValidationException,
  ValidationExceptionField,
  VsamAttributes,
  VsamDetailAttributes,
} from "../models/models_0";

export const serializeAws_restJson1CancelBatchJobExecutionCommand = async (
  input: CancelBatchJobExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/applications/{applicationId}/batch-job-executions/{executionId}/cancel";
  if (input.applicationId !== undefined) {
    const labelValue: string = input.applicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: applicationId.");
    }
    resolvedPath = resolvedPath.replace("{applicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: applicationId.");
  }
  if (input.executionId !== undefined) {
    const labelValue: string = input.executionId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: executionId.");
    }
    resolvedPath = resolvedPath.replace("{executionId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: executionId.");
  }
  let body: any;
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

export const serializeAws_restJson1CreateApplicationCommand = async (
  input: CreateApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/applications";
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.definition != null && { definition: serializeAws_restJson1Definition(input.definition, context) }),
    ...(input.description != null && { description: input.description }),
    ...(input.engineType != null && { engineType: input.engineType }),
    ...(input.name != null && { name: input.name }),
    ...(input.tags != null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
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

export const serializeAws_restJson1CreateDataSetImportTaskCommand = async (
  input: CreateDataSetImportTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/applications/{applicationId}/dataset-import-task";
  if (input.applicationId !== undefined) {
    const labelValue: string = input.applicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: applicationId.");
    }
    resolvedPath = resolvedPath.replace("{applicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: applicationId.");
  }
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.importConfig != null && {
      importConfig: serializeAws_restJson1DataSetImportConfig(input.importConfig, context),
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

export const serializeAws_restJson1CreateDeploymentCommand = async (
  input: CreateDeploymentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/applications/{applicationId}/deployments";
  if (input.applicationId !== undefined) {
    const labelValue: string = input.applicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: applicationId.");
    }
    resolvedPath = resolvedPath.replace("{applicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: applicationId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.applicationVersion != null && { applicationVersion: input.applicationVersion }),
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.environmentId != null && { environmentId: input.environmentId }),
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

export const serializeAws_restJson1CreateEnvironmentCommand = async (
  input: CreateEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/environments";
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.description != null && { description: input.description }),
    ...(input.engineType != null && { engineType: input.engineType }),
    ...(input.engineVersion != null && { engineVersion: input.engineVersion }),
    ...(input.highAvailabilityConfig != null && {
      highAvailabilityConfig: serializeAws_restJson1HighAvailabilityConfig(input.highAvailabilityConfig, context),
    }),
    ...(input.instanceType != null && { instanceType: input.instanceType }),
    ...(input.name != null && { name: input.name }),
    ...(input.preferredMaintenanceWindow != null && { preferredMaintenanceWindow: input.preferredMaintenanceWindow }),
    ...(input.publiclyAccessible != null && { publiclyAccessible: input.publiclyAccessible }),
    ...(input.securityGroupIds != null && {
      securityGroupIds: serializeAws_restJson1String50List(input.securityGroupIds, context),
    }),
    ...(input.storageConfigurations != null && {
      storageConfigurations: serializeAws_restJson1StorageConfigurationList(input.storageConfigurations, context),
    }),
    ...(input.subnetIds != null && { subnetIds: serializeAws_restJson1String50List(input.subnetIds, context) }),
    ...(input.tags != null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
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

export const serializeAws_restJson1DeleteApplicationCommand = async (
  input: DeleteApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/applications/{applicationId}";
  if (input.applicationId !== undefined) {
    const labelValue: string = input.applicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: applicationId.");
    }
    resolvedPath = resolvedPath.replace("{applicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: applicationId.");
  }
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

export const serializeAws_restJson1DeleteApplicationFromEnvironmentCommand = async (
  input: DeleteApplicationFromEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/applications/{applicationId}/environment/{environmentId}";
  if (input.applicationId !== undefined) {
    const labelValue: string = input.applicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: applicationId.");
    }
    resolvedPath = resolvedPath.replace("{applicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: applicationId.");
  }
  if (input.environmentId !== undefined) {
    const labelValue: string = input.environmentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: environmentId.");
    }
    resolvedPath = resolvedPath.replace("{environmentId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: environmentId.");
  }
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

export const serializeAws_restJson1DeleteEnvironmentCommand = async (
  input: DeleteEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/environments/{environmentId}";
  if (input.environmentId !== undefined) {
    const labelValue: string = input.environmentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: environmentId.");
    }
    resolvedPath = resolvedPath.replace("{environmentId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: environmentId.");
  }
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

export const serializeAws_restJson1GetApplicationCommand = async (
  input: GetApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/applications/{applicationId}";
  if (input.applicationId !== undefined) {
    const labelValue: string = input.applicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: applicationId.");
    }
    resolvedPath = resolvedPath.replace("{applicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: applicationId.");
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

export const serializeAws_restJson1GetApplicationVersionCommand = async (
  input: GetApplicationVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/applications/{applicationId}/versions/{applicationVersion}";
  if (input.applicationId !== undefined) {
    const labelValue: string = input.applicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: applicationId.");
    }
    resolvedPath = resolvedPath.replace("{applicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: applicationId.");
  }
  if (input.applicationVersion !== undefined) {
    const labelValue: string = input.applicationVersion.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: applicationVersion.");
    }
    resolvedPath = resolvedPath.replace("{applicationVersion}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: applicationVersion.");
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

export const serializeAws_restJson1GetBatchJobExecutionCommand = async (
  input: GetBatchJobExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/applications/{applicationId}/batch-job-executions/{executionId}";
  if (input.applicationId !== undefined) {
    const labelValue: string = input.applicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: applicationId.");
    }
    resolvedPath = resolvedPath.replace("{applicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: applicationId.");
  }
  if (input.executionId !== undefined) {
    const labelValue: string = input.executionId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: executionId.");
    }
    resolvedPath = resolvedPath.replace("{executionId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: executionId.");
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

export const serializeAws_restJson1GetDataSetDetailsCommand = async (
  input: GetDataSetDetailsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/applications/{applicationId}/datasets/{dataSetName}";
  if (input.applicationId !== undefined) {
    const labelValue: string = input.applicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: applicationId.");
    }
    resolvedPath = resolvedPath.replace("{applicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: applicationId.");
  }
  if (input.dataSetName !== undefined) {
    const labelValue: string = input.dataSetName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: dataSetName.");
    }
    resolvedPath = resolvedPath.replace("{dataSetName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: dataSetName.");
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

export const serializeAws_restJson1GetDataSetImportTaskCommand = async (
  input: GetDataSetImportTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/applications/{applicationId}/dataset-import-tasks/{taskId}";
  if (input.applicationId !== undefined) {
    const labelValue: string = input.applicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: applicationId.");
    }
    resolvedPath = resolvedPath.replace("{applicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: applicationId.");
  }
  if (input.taskId !== undefined) {
    const labelValue: string = input.taskId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: taskId.");
    }
    resolvedPath = resolvedPath.replace("{taskId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: taskId.");
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

export const serializeAws_restJson1GetDeploymentCommand = async (
  input: GetDeploymentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/applications/{applicationId}/deployments/{deploymentId}";
  if (input.deploymentId !== undefined) {
    const labelValue: string = input.deploymentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: deploymentId.");
    }
    resolvedPath = resolvedPath.replace("{deploymentId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: deploymentId.");
  }
  if (input.applicationId !== undefined) {
    const labelValue: string = input.applicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: applicationId.");
    }
    resolvedPath = resolvedPath.replace("{applicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: applicationId.");
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

export const serializeAws_restJson1GetEnvironmentCommand = async (
  input: GetEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/environments/{environmentId}";
  if (input.environmentId !== undefined) {
    const labelValue: string = input.environmentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: environmentId.");
    }
    resolvedPath = resolvedPath.replace("{environmentId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: environmentId.");
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

export const serializeAws_restJson1ListApplicationsCommand = async (
  input: ListApplicationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/applications";
  const query: any = {
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
    ...(input.names !== undefined && { names: (input.names || []).map((_entry) => _entry as any) }),
    ...(input.environmentId !== undefined && { environmentId: input.environmentId }),
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

export const serializeAws_restJson1ListApplicationVersionsCommand = async (
  input: ListApplicationVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/applications/{applicationId}/versions";
  if (input.applicationId !== undefined) {
    const labelValue: string = input.applicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: applicationId.");
    }
    resolvedPath = resolvedPath.replace("{applicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: applicationId.");
  }
  const query: any = {
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
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

export const serializeAws_restJson1ListBatchJobDefinitionsCommand = async (
  input: ListBatchJobDefinitionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/applications/{applicationId}/batch-job-definitions";
  if (input.applicationId !== undefined) {
    const labelValue: string = input.applicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: applicationId.");
    }
    resolvedPath = resolvedPath.replace("{applicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: applicationId.");
  }
  const query: any = {
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
    ...(input.prefix !== undefined && { prefix: input.prefix }),
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

export const serializeAws_restJson1ListBatchJobExecutionsCommand = async (
  input: ListBatchJobExecutionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/applications/{applicationId}/batch-job-executions";
  if (input.applicationId !== undefined) {
    const labelValue: string = input.applicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: applicationId.");
    }
    resolvedPath = resolvedPath.replace("{applicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: applicationId.");
  }
  const query: any = {
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
    ...(input.executionIds !== undefined && {
      executionIds: (input.executionIds || []).map((_entry) => _entry as any),
    }),
    ...(input.jobName !== undefined && { jobName: input.jobName }),
    ...(input.status !== undefined && { status: input.status }),
    ...(input.startedAfter !== undefined && {
      startedAfter: (input.startedAfter.toISOString().split(".")[0] + "Z").toString(),
    }),
    ...(input.startedBefore !== undefined && {
      startedBefore: (input.startedBefore.toISOString().split(".")[0] + "Z").toString(),
    }),
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

export const serializeAws_restJson1ListDataSetImportHistoryCommand = async (
  input: ListDataSetImportHistoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/applications/{applicationId}/dataset-import-tasks";
  if (input.applicationId !== undefined) {
    const labelValue: string = input.applicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: applicationId.");
    }
    resolvedPath = resolvedPath.replace("{applicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: applicationId.");
  }
  const query: any = {
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
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

export const serializeAws_restJson1ListDataSetsCommand = async (
  input: ListDataSetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/applications/{applicationId}/datasets";
  if (input.applicationId !== undefined) {
    const labelValue: string = input.applicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: applicationId.");
    }
    resolvedPath = resolvedPath.replace("{applicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: applicationId.");
  }
  const query: any = {
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
    ...(input.prefix !== undefined && { prefix: input.prefix }),
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

export const serializeAws_restJson1ListDeploymentsCommand = async (
  input: ListDeploymentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/applications/{applicationId}/deployments";
  if (input.applicationId !== undefined) {
    const labelValue: string = input.applicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: applicationId.");
    }
    resolvedPath = resolvedPath.replace("{applicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: applicationId.");
  }
  const query: any = {
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
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

export const serializeAws_restJson1ListEngineVersionsCommand = async (
  input: ListEngineVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/engine-versions";
  const query: any = {
    ...(input.engineType !== undefined && { engineType: input.engineType }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
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

export const serializeAws_restJson1ListEnvironmentsCommand = async (
  input: ListEnvironmentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/environments";
  const query: any = {
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
    ...(input.names !== undefined && { names: (input.names || []).map((_entry) => _entry as any) }),
    ...(input.engineType !== undefined && { engineType: input.engineType }),
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

export const serializeAws_restJson1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{resourceArn}";
  if (input.resourceArn !== undefined) {
    const labelValue: string = input.resourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: resourceArn.");
    }
    resolvedPath = resolvedPath.replace("{resourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: resourceArn.");
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

export const serializeAws_restJson1StartApplicationCommand = async (
  input: StartApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/applications/{applicationId}/start";
  if (input.applicationId !== undefined) {
    const labelValue: string = input.applicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: applicationId.");
    }
    resolvedPath = resolvedPath.replace("{applicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: applicationId.");
  }
  let body: any;
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

export const serializeAws_restJson1StartBatchJobCommand = async (
  input: StartBatchJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/applications/{applicationId}/batch-job";
  if (input.applicationId !== undefined) {
    const labelValue: string = input.applicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: applicationId.");
    }
    resolvedPath = resolvedPath.replace("{applicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: applicationId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.batchJobIdentifier != null && {
      batchJobIdentifier: serializeAws_restJson1BatchJobIdentifier(input.batchJobIdentifier, context),
    }),
    ...(input.jobParams != null && {
      jobParams: serializeAws_restJson1BatchJobParametersMap(input.jobParams, context),
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

export const serializeAws_restJson1StopApplicationCommand = async (
  input: StopApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/applications/{applicationId}/stop";
  if (input.applicationId !== undefined) {
    const labelValue: string = input.applicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: applicationId.");
    }
    resolvedPath = resolvedPath.replace("{applicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: applicationId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.forceStop != null && { forceStop: input.forceStop }),
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

export const serializeAws_restJson1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{resourceArn}";
  if (input.resourceArn !== undefined) {
    const labelValue: string = input.resourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: resourceArn.");
    }
    resolvedPath = resolvedPath.replace("{resourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: resourceArn.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.tags != null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
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

export const serializeAws_restJson1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{resourceArn}";
  if (input.resourceArn !== undefined) {
    const labelValue: string = input.resourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: resourceArn.");
    }
    resolvedPath = resolvedPath.replace("{resourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: resourceArn.");
  }
  const query: any = {
    ...(input.tagKeys !== undefined && { tagKeys: (input.tagKeys || []).map((_entry) => _entry as any) }),
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

export const serializeAws_restJson1UpdateApplicationCommand = async (
  input: UpdateApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/applications/{applicationId}";
  if (input.applicationId !== undefined) {
    const labelValue: string = input.applicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: applicationId.");
    }
    resolvedPath = resolvedPath.replace("{applicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: applicationId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.currentApplicationVersion != null && { currentApplicationVersion: input.currentApplicationVersion }),
    ...(input.definition != null && { definition: serializeAws_restJson1Definition(input.definition, context) }),
    ...(input.description != null && { description: input.description }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateEnvironmentCommand = async (
  input: UpdateEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/environments/{environmentId}";
  if (input.environmentId !== undefined) {
    const labelValue: string = input.environmentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: environmentId.");
    }
    resolvedPath = resolvedPath.replace("{environmentId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: environmentId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.applyDuringMaintenanceWindow != null && {
      applyDuringMaintenanceWindow: input.applyDuringMaintenanceWindow,
    }),
    ...(input.desiredCapacity != null && { desiredCapacity: input.desiredCapacity }),
    ...(input.engineVersion != null && { engineVersion: input.engineVersion }),
    ...(input.instanceType != null && { instanceType: input.instanceType }),
    ...(input.preferredMaintenanceWindow != null && { preferredMaintenanceWindow: input.preferredMaintenanceWindow }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

export const deserializeAws_restJson1CancelBatchJobExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelBatchJobExecutionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CancelBatchJobExecutionCommandError(output, context);
  }
  const contents: CancelBatchJobExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CancelBatchJobExecutionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelBatchJobExecutionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.m2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.m2#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.m2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.m2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.m2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.m2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1CreateApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateApplicationCommandError(output, context);
  }
  const contents: CreateApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    applicationArn: undefined,
    applicationId: undefined,
    applicationVersion: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.applicationArn !== undefined && data.applicationArn !== null) {
    contents.applicationArn = __expectString(data.applicationArn);
  }
  if (data.applicationId !== undefined && data.applicationId !== null) {
    contents.applicationId = __expectString(data.applicationId);
  }
  if (data.applicationVersion !== undefined && data.applicationVersion !== null) {
    contents.applicationVersion = __expectInt32(data.applicationVersion);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.m2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.m2#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.m2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.m2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.m2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.m2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1CreateDataSetImportTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDataSetImportTaskCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateDataSetImportTaskCommandError(output, context);
  }
  const contents: CreateDataSetImportTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    taskId: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.taskId !== undefined && data.taskId !== null) {
    contents.taskId = __expectString(data.taskId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateDataSetImportTaskCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDataSetImportTaskCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.m2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.m2#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.m2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.m2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.m2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.m2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.m2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1CreateDeploymentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDeploymentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateDeploymentCommandError(output, context);
  }
  const contents: CreateDeploymentCommandOutput = {
    $metadata: deserializeMetadata(output),
    deploymentId: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.deploymentId !== undefined && data.deploymentId !== null) {
    contents.deploymentId = __expectString(data.deploymentId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateDeploymentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDeploymentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.m2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.m2#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.m2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.m2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.m2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.m2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.m2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
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
    environmentId: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.environmentId !== undefined && data.environmentId !== null) {
    contents.environmentId = __expectString(data.environmentId);
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
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.m2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.m2#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.m2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.m2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.m2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.m2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DeleteApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteApplicationCommandError(output, context);
  }
  const contents: DeleteApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.m2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.m2#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.m2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.m2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.m2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DeleteApplicationFromEnvironmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationFromEnvironmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteApplicationFromEnvironmentCommandError(output, context);
  }
  const contents: DeleteApplicationFromEnvironmentCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteApplicationFromEnvironmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationFromEnvironmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.m2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.m2#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.m2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.m2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.m2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.m2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
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
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.m2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.m2#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.m2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.m2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.m2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetApplicationCommandError(output, context);
  }
  const contents: GetApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    applicationArn: undefined,
    applicationId: undefined,
    creationTime: undefined,
    deployedVersion: undefined,
    description: undefined,
    engineType: undefined,
    environmentId: undefined,
    lastStartTime: undefined,
    latestVersion: undefined,
    listenerArns: undefined,
    listenerPorts: undefined,
    loadBalancerDnsName: undefined,
    logGroups: undefined,
    name: undefined,
    status: undefined,
    statusReason: undefined,
    tags: undefined,
    targetGroupArns: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.applicationArn !== undefined && data.applicationArn !== null) {
    contents.applicationArn = __expectString(data.applicationArn);
  }
  if (data.applicationId !== undefined && data.applicationId !== null) {
    contents.applicationId = __expectString(data.applicationId);
  }
  if (data.creationTime !== undefined && data.creationTime !== null) {
    contents.creationTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.creationTime)));
  }
  if (data.deployedVersion !== undefined && data.deployedVersion !== null) {
    contents.deployedVersion = deserializeAws_restJson1DeployedVersionSummary(data.deployedVersion, context);
  }
  if (data.description !== undefined && data.description !== null) {
    contents.description = __expectString(data.description);
  }
  if (data.engineType !== undefined && data.engineType !== null) {
    contents.engineType = __expectString(data.engineType);
  }
  if (data.environmentId !== undefined && data.environmentId !== null) {
    contents.environmentId = __expectString(data.environmentId);
  }
  if (data.lastStartTime !== undefined && data.lastStartTime !== null) {
    contents.lastStartTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.lastStartTime)));
  }
  if (data.latestVersion !== undefined && data.latestVersion !== null) {
    contents.latestVersion = deserializeAws_restJson1ApplicationVersionSummary(data.latestVersion, context);
  }
  if (data.listenerArns !== undefined && data.listenerArns !== null) {
    contents.listenerArns = deserializeAws_restJson1ArnList(data.listenerArns, context);
  }
  if (data.listenerPorts !== undefined && data.listenerPorts !== null) {
    contents.listenerPorts = deserializeAws_restJson1PortList(data.listenerPorts, context);
  }
  if (data.loadBalancerDnsName !== undefined && data.loadBalancerDnsName !== null) {
    contents.loadBalancerDnsName = __expectString(data.loadBalancerDnsName);
  }
  if (data.logGroups !== undefined && data.logGroups !== null) {
    contents.logGroups = deserializeAws_restJson1LogGroupSummaries(data.logGroups, context);
  }
  if (data.name !== undefined && data.name !== null) {
    contents.name = __expectString(data.name);
  }
  if (data.status !== undefined && data.status !== null) {
    contents.status = __expectString(data.status);
  }
  if (data.statusReason !== undefined && data.statusReason !== null) {
    contents.statusReason = __expectString(data.statusReason);
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  if (data.targetGroupArns !== undefined && data.targetGroupArns !== null) {
    contents.targetGroupArns = deserializeAws_restJson1ArnList(data.targetGroupArns, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.m2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.m2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.m2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.m2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.m2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetApplicationVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApplicationVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetApplicationVersionCommandError(output, context);
  }
  const contents: GetApplicationVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    applicationVersion: undefined,
    creationTime: undefined,
    definitionContent: undefined,
    description: undefined,
    name: undefined,
    status: undefined,
    statusReason: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.applicationVersion !== undefined && data.applicationVersion !== null) {
    contents.applicationVersion = __expectInt32(data.applicationVersion);
  }
  if (data.creationTime !== undefined && data.creationTime !== null) {
    contents.creationTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.creationTime)));
  }
  if (data.definitionContent !== undefined && data.definitionContent !== null) {
    contents.definitionContent = __expectString(data.definitionContent);
  }
  if (data.description !== undefined && data.description !== null) {
    contents.description = __expectString(data.description);
  }
  if (data.name !== undefined && data.name !== null) {
    contents.name = __expectString(data.name);
  }
  if (data.status !== undefined && data.status !== null) {
    contents.status = __expectString(data.status);
  }
  if (data.statusReason !== undefined && data.statusReason !== null) {
    contents.statusReason = __expectString(data.statusReason);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetApplicationVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApplicationVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.m2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.m2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.m2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.m2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.m2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetBatchJobExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBatchJobExecutionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetBatchJobExecutionCommandError(output, context);
  }
  const contents: GetBatchJobExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    applicationId: undefined,
    endTime: undefined,
    executionId: undefined,
    jobId: undefined,
    jobName: undefined,
    jobType: undefined,
    jobUser: undefined,
    startTime: undefined,
    status: undefined,
    statusReason: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.applicationId !== undefined && data.applicationId !== null) {
    contents.applicationId = __expectString(data.applicationId);
  }
  if (data.endTime !== undefined && data.endTime !== null) {
    contents.endTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.endTime)));
  }
  if (data.executionId !== undefined && data.executionId !== null) {
    contents.executionId = __expectString(data.executionId);
  }
  if (data.jobId !== undefined && data.jobId !== null) {
    contents.jobId = __expectString(data.jobId);
  }
  if (data.jobName !== undefined && data.jobName !== null) {
    contents.jobName = __expectString(data.jobName);
  }
  if (data.jobType !== undefined && data.jobType !== null) {
    contents.jobType = __expectString(data.jobType);
  }
  if (data.jobUser !== undefined && data.jobUser !== null) {
    contents.jobUser = __expectString(data.jobUser);
  }
  if (data.startTime !== undefined && data.startTime !== null) {
    contents.startTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.startTime)));
  }
  if (data.status !== undefined && data.status !== null) {
    contents.status = __expectString(data.status);
  }
  if (data.statusReason !== undefined && data.statusReason !== null) {
    contents.statusReason = __expectString(data.statusReason);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetBatchJobExecutionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBatchJobExecutionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.m2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.m2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.m2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.m2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.m2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetDataSetDetailsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataSetDetailsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetDataSetDetailsCommandError(output, context);
  }
  const contents: GetDataSetDetailsCommandOutput = {
    $metadata: deserializeMetadata(output),
    blocksize: undefined,
    creationTime: undefined,
    dataSetName: undefined,
    dataSetOrg: undefined,
    lastReferencedTime: undefined,
    lastUpdatedTime: undefined,
    location: undefined,
    recordLength: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.blocksize !== undefined && data.blocksize !== null) {
    contents.blocksize = __expectInt32(data.blocksize);
  }
  if (data.creationTime !== undefined && data.creationTime !== null) {
    contents.creationTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.creationTime)));
  }
  if (data.dataSetName !== undefined && data.dataSetName !== null) {
    contents.dataSetName = __expectString(data.dataSetName);
  }
  if (data.dataSetOrg !== undefined && data.dataSetOrg !== null) {
    contents.dataSetOrg = deserializeAws_restJson1DatasetDetailOrgAttributes(__expectUnion(data.dataSetOrg), context);
  }
  if (data.lastReferencedTime !== undefined && data.lastReferencedTime !== null) {
    contents.lastReferencedTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.lastReferencedTime)));
  }
  if (data.lastUpdatedTime !== undefined && data.lastUpdatedTime !== null) {
    contents.lastUpdatedTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.lastUpdatedTime)));
  }
  if (data.location !== undefined && data.location !== null) {
    contents.location = __expectString(data.location);
  }
  if (data.recordLength !== undefined && data.recordLength !== null) {
    contents.recordLength = __expectInt32(data.recordLength);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetDataSetDetailsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataSetDetailsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.m2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.m2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.m2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.m2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.m2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetDataSetImportTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataSetImportTaskCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetDataSetImportTaskCommandError(output, context);
  }
  const contents: GetDataSetImportTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    status: undefined,
    summary: undefined,
    taskId: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.status !== undefined && data.status !== null) {
    contents.status = __expectString(data.status);
  }
  if (data.summary !== undefined && data.summary !== null) {
    contents.summary = deserializeAws_restJson1DataSetImportSummary(data.summary, context);
  }
  if (data.taskId !== undefined && data.taskId !== null) {
    contents.taskId = __expectString(data.taskId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetDataSetImportTaskCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataSetImportTaskCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.m2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.m2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.m2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.m2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.m2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetDeploymentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeploymentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetDeploymentCommandError(output, context);
  }
  const contents: GetDeploymentCommandOutput = {
    $metadata: deserializeMetadata(output),
    applicationId: undefined,
    applicationVersion: undefined,
    creationTime: undefined,
    deploymentId: undefined,
    environmentId: undefined,
    status: undefined,
    statusReason: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.applicationId !== undefined && data.applicationId !== null) {
    contents.applicationId = __expectString(data.applicationId);
  }
  if (data.applicationVersion !== undefined && data.applicationVersion !== null) {
    contents.applicationVersion = __expectInt32(data.applicationVersion);
  }
  if (data.creationTime !== undefined && data.creationTime !== null) {
    contents.creationTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.creationTime)));
  }
  if (data.deploymentId !== undefined && data.deploymentId !== null) {
    contents.deploymentId = __expectString(data.deploymentId);
  }
  if (data.environmentId !== undefined && data.environmentId !== null) {
    contents.environmentId = __expectString(data.environmentId);
  }
  if (data.status !== undefined && data.status !== null) {
    contents.status = __expectString(data.status);
  }
  if (data.statusReason !== undefined && data.statusReason !== null) {
    contents.statusReason = __expectString(data.statusReason);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetDeploymentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeploymentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.m2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.m2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.m2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.m2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.m2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
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
    actualCapacity: undefined,
    creationTime: undefined,
    description: undefined,
    engineType: undefined,
    engineVersion: undefined,
    environmentArn: undefined,
    environmentId: undefined,
    highAvailabilityConfig: undefined,
    instanceType: undefined,
    loadBalancerArn: undefined,
    name: undefined,
    pendingMaintenance: undefined,
    preferredMaintenanceWindow: undefined,
    publiclyAccessible: undefined,
    securityGroupIds: undefined,
    status: undefined,
    statusReason: undefined,
    storageConfigurations: undefined,
    subnetIds: undefined,
    tags: undefined,
    vpcId: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.actualCapacity !== undefined && data.actualCapacity !== null) {
    contents.actualCapacity = __expectInt32(data.actualCapacity);
  }
  if (data.creationTime !== undefined && data.creationTime !== null) {
    contents.creationTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.creationTime)));
  }
  if (data.description !== undefined && data.description !== null) {
    contents.description = __expectString(data.description);
  }
  if (data.engineType !== undefined && data.engineType !== null) {
    contents.engineType = __expectString(data.engineType);
  }
  if (data.engineVersion !== undefined && data.engineVersion !== null) {
    contents.engineVersion = __expectString(data.engineVersion);
  }
  if (data.environmentArn !== undefined && data.environmentArn !== null) {
    contents.environmentArn = __expectString(data.environmentArn);
  }
  if (data.environmentId !== undefined && data.environmentId !== null) {
    contents.environmentId = __expectString(data.environmentId);
  }
  if (data.highAvailabilityConfig !== undefined && data.highAvailabilityConfig !== null) {
    contents.highAvailabilityConfig = deserializeAws_restJson1HighAvailabilityConfig(
      data.highAvailabilityConfig,
      context
    );
  }
  if (data.instanceType !== undefined && data.instanceType !== null) {
    contents.instanceType = __expectString(data.instanceType);
  }
  if (data.loadBalancerArn !== undefined && data.loadBalancerArn !== null) {
    contents.loadBalancerArn = __expectString(data.loadBalancerArn);
  }
  if (data.name !== undefined && data.name !== null) {
    contents.name = __expectString(data.name);
  }
  if (data.pendingMaintenance !== undefined && data.pendingMaintenance !== null) {
    contents.pendingMaintenance = deserializeAws_restJson1PendingMaintenance(data.pendingMaintenance, context);
  }
  if (data.preferredMaintenanceWindow !== undefined && data.preferredMaintenanceWindow !== null) {
    contents.preferredMaintenanceWindow = __expectString(data.preferredMaintenanceWindow);
  }
  if (data.publiclyAccessible !== undefined && data.publiclyAccessible !== null) {
    contents.publiclyAccessible = __expectBoolean(data.publiclyAccessible);
  }
  if (data.securityGroupIds !== undefined && data.securityGroupIds !== null) {
    contents.securityGroupIds = deserializeAws_restJson1String50List(data.securityGroupIds, context);
  }
  if (data.status !== undefined && data.status !== null) {
    contents.status = __expectString(data.status);
  }
  if (data.statusReason !== undefined && data.statusReason !== null) {
    contents.statusReason = __expectString(data.statusReason);
  }
  if (data.storageConfigurations !== undefined && data.storageConfigurations !== null) {
    contents.storageConfigurations = deserializeAws_restJson1StorageConfigurationList(
      data.storageConfigurations,
      context
    );
  }
  if (data.subnetIds !== undefined && data.subnetIds !== null) {
    contents.subnetIds = deserializeAws_restJson1String50List(data.subnetIds, context);
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  if (data.vpcId !== undefined && data.vpcId !== null) {
    contents.vpcId = __expectString(data.vpcId);
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
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.m2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.m2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.m2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.m2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.m2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListApplicationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListApplicationsCommandError(output, context);
  }
  const contents: ListApplicationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    applications: undefined,
    nextToken: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.applications !== undefined && data.applications !== null) {
    contents.applications = deserializeAws_restJson1ApplicationSummaryList(data.applications, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListApplicationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.m2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.m2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.m2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.m2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListApplicationVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListApplicationVersionsCommandError(output, context);
  }
  const contents: ListApplicationVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    applicationVersions: undefined,
    nextToken: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.applicationVersions !== undefined && data.applicationVersions !== null) {
    contents.applicationVersions = deserializeAws_restJson1ApplicationVersionSummaryList(
      data.applicationVersions,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListApplicationVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.m2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.m2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.m2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.m2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.m2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListBatchJobDefinitionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBatchJobDefinitionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListBatchJobDefinitionsCommandError(output, context);
  }
  const contents: ListBatchJobDefinitionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    batchJobDefinitions: undefined,
    nextToken: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.batchJobDefinitions !== undefined && data.batchJobDefinitions !== null) {
    contents.batchJobDefinitions = deserializeAws_restJson1BatchJobDefinitions(data.batchJobDefinitions, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListBatchJobDefinitionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBatchJobDefinitionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.m2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.m2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.m2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.m2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.m2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListBatchJobExecutionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBatchJobExecutionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListBatchJobExecutionsCommandError(output, context);
  }
  const contents: ListBatchJobExecutionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    batchJobExecutions: undefined,
    nextToken: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.batchJobExecutions !== undefined && data.batchJobExecutions !== null) {
    contents.batchJobExecutions = deserializeAws_restJson1BatchJobExecutionSummaryList(
      data.batchJobExecutions,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListBatchJobExecutionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBatchJobExecutionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.m2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.m2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.m2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.m2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.m2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListDataSetImportHistoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDataSetImportHistoryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListDataSetImportHistoryCommandError(output, context);
  }
  const contents: ListDataSetImportHistoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    dataSetImportTasks: undefined,
    nextToken: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.dataSetImportTasks !== undefined && data.dataSetImportTasks !== null) {
    contents.dataSetImportTasks = deserializeAws_restJson1DataSetImportTaskList(data.dataSetImportTasks, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListDataSetImportHistoryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDataSetImportHistoryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.m2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.m2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.m2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.m2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.m2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListDataSetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDataSetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListDataSetsCommandError(output, context);
  }
  const contents: ListDataSetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    dataSets: undefined,
    nextToken: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.dataSets !== undefined && data.dataSets !== null) {
    contents.dataSets = deserializeAws_restJson1DataSetsSummaryList(data.dataSets, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListDataSetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDataSetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.m2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.m2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.m2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.m2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.m2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListDeploymentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeploymentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListDeploymentsCommandError(output, context);
  }
  const contents: ListDeploymentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    deployments: undefined,
    nextToken: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.deployments !== undefined && data.deployments !== null) {
    contents.deployments = deserializeAws_restJson1DeploymentList(data.deployments, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListDeploymentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeploymentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.m2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.m2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.m2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.m2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.m2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListEngineVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEngineVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListEngineVersionsCommandError(output, context);
  }
  const contents: ListEngineVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    engineVersions: undefined,
    nextToken: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.engineVersions !== undefined && data.engineVersions !== null) {
    contents.engineVersions = deserializeAws_restJson1EngineVersionsSummaryList(data.engineVersions, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListEngineVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEngineVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.m2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.m2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.m2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.m2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
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
    environments: undefined,
    nextToken: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.environments !== undefined && data.environments !== null) {
    contents.environments = deserializeAws_restJson1EnvironmentSummaryList(data.environments, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
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
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.m2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.m2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.m2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.m2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
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
    tags: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
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
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.m2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.m2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.m2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.m2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.m2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1StartApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartApplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartApplicationCommandError(output, context);
  }
  const contents: StartApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1StartApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.m2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.m2#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.m2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.m2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.m2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.m2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1StartBatchJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartBatchJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartBatchJobCommandError(output, context);
  }
  const contents: StartBatchJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    executionId: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.executionId !== undefined && data.executionId !== null) {
    contents.executionId = __expectString(data.executionId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1StartBatchJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartBatchJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.m2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.m2#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.m2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.m2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.m2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.m2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1StopApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopApplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StopApplicationCommandError(output, context);
  }
  const contents: StopApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1StopApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.m2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.m2#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.m2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.m2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.m2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.m2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
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
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.m2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.m2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.m2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.m2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.m2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.m2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
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
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.m2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.m2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.m2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.m2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.m2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1UpdateApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateApplicationCommandError(output, context);
  }
  const contents: UpdateApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    applicationVersion: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.applicationVersion !== undefined && data.applicationVersion !== null) {
    contents.applicationVersion = __expectInt32(data.applicationVersion);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.m2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.m2#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.m2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.m2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.m2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.m2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
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
    environmentId: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.environmentId !== undefined && data.environmentId !== null) {
    contents.environmentId = __expectString(data.environmentId);
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
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.m2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.m2#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.m2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.m2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.m2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.m2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.m2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

const deserializeAws_restJson1AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  if (data.resourceId !== undefined && data.resourceId !== null) {
    contents.resourceId = __expectString(data.resourceId);
  }
  if (data.resourceType !== undefined && data.resourceType !== null) {
    contents.resourceType = __expectString(data.resourceType);
  }
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1InternalServerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: any = {};
  if (parsedOutput.headers["retry-after"] !== undefined) {
    contents.retryAfterSeconds = __strictParseInt32(parsedOutput.headers["retry-after"]);
  }
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  const exception = new InternalServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  if (data.resourceId !== undefined && data.resourceId !== null) {
    contents.resourceId = __expectString(data.resourceId);
  }
  if (data.resourceType !== undefined && data.resourceType !== null) {
    contents.resourceType = __expectString(data.resourceType);
  }
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ServiceQuotaExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  if (data.quotaCode !== undefined && data.quotaCode !== null) {
    contents.quotaCode = __expectString(data.quotaCode);
  }
  if (data.resourceId !== undefined && data.resourceId !== null) {
    contents.resourceId = __expectString(data.resourceId);
  }
  if (data.resourceType !== undefined && data.resourceType !== null) {
    contents.resourceType = __expectString(data.resourceType);
  }
  if (data.serviceCode !== undefined && data.serviceCode !== null) {
    contents.serviceCode = __expectString(data.serviceCode);
  }
  const exception = new ServiceQuotaExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const contents: any = {};
  if (parsedOutput.headers["retry-after"] !== undefined) {
    contents.retryAfterSeconds = __strictParseInt32(parsedOutput.headers["retry-after"]);
  }
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  if (data.quotaCode !== undefined && data.quotaCode !== null) {
    contents.quotaCode = __expectString(data.quotaCode);
  }
  if (data.serviceCode !== undefined && data.serviceCode !== null) {
    contents.serviceCode = __expectString(data.serviceCode);
  }
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.fieldList !== undefined && data.fieldList !== null) {
    contents.fieldList = deserializeAws_restJson1ValidationExceptionFieldList(data.fieldList, context);
  }
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  if (data.reason !== undefined && data.reason !== null) {
    contents.reason = __expectString(data.reason);
  }
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const serializeAws_restJson1AlternateKey = (input: AlternateKey, context: __SerdeContext): any => {
  return {
    ...(input.allowDuplicates != null && { allowDuplicates: input.allowDuplicates }),
    ...(input.length != null && { length: input.length }),
    ...(input.name != null && { name: input.name }),
    ...(input.offset != null && { offset: input.offset }),
  };
};

const serializeAws_restJson1AlternateKeyList = (input: AlternateKey[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AlternateKey(entry, context);
    });
};

const serializeAws_restJson1BatchJobIdentifier = (input: BatchJobIdentifier, context: __SerdeContext): any => {
  return BatchJobIdentifier.visit(input, {
    fileBatchJobIdentifier: (value) => ({
      fileBatchJobIdentifier: serializeAws_restJson1FileBatchJobIdentifier(value, context),
    }),
    scriptBatchJobIdentifier: (value) => ({
      scriptBatchJobIdentifier: serializeAws_restJson1ScriptBatchJobIdentifier(value, context),
    }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_restJson1BatchJobParametersMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_restJson1DataSet = (input: DataSet, context: __SerdeContext): any => {
  return {
    ...(input.datasetName != null && { datasetName: input.datasetName }),
    ...(input.datasetOrg != null && {
      datasetOrg: serializeAws_restJson1DatasetOrgAttributes(input.datasetOrg, context),
    }),
    ...(input.recordLength != null && {
      recordLength: serializeAws_restJson1RecordLength(input.recordLength, context),
    }),
    ...(input.relativePath != null && { relativePath: input.relativePath }),
    ...(input.storageType != null && { storageType: input.storageType }),
  };
};

const serializeAws_restJson1DataSetImportConfig = (input: DataSetImportConfig, context: __SerdeContext): any => {
  return DataSetImportConfig.visit(input, {
    dataSets: (value) => ({ dataSets: serializeAws_restJson1DataSetImportList(value, context) }),
    s3Location: (value) => ({ s3Location: value }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_restJson1DataSetImportItem = (input: DataSetImportItem, context: __SerdeContext): any => {
  return {
    ...(input.dataSet != null && { dataSet: serializeAws_restJson1DataSet(input.dataSet, context) }),
    ...(input.externalLocation != null && {
      externalLocation: serializeAws_restJson1ExternalLocation(input.externalLocation, context),
    }),
  };
};

const serializeAws_restJson1DataSetImportList = (input: DataSetImportItem[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1DataSetImportItem(entry, context);
    });
};

const serializeAws_restJson1DatasetOrgAttributes = (input: DatasetOrgAttributes, context: __SerdeContext): any => {
  return DatasetOrgAttributes.visit(input, {
    gdg: (value) => ({ gdg: serializeAws_restJson1GdgAttributes(value, context) }),
    vsam: (value) => ({ vsam: serializeAws_restJson1VsamAttributes(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_restJson1Definition = (input: Definition, context: __SerdeContext): any => {
  return Definition.visit(input, {
    content: (value) => ({ content: value }),
    s3Location: (value) => ({ s3Location: value }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_restJson1EfsStorageConfiguration = (
  input: EfsStorageConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.fileSystemId != null && { "file-system-id": input.fileSystemId }),
    ...(input.mountPoint != null && { "mount-point": input.mountPoint }),
  };
};

const serializeAws_restJson1ExternalLocation = (input: ExternalLocation, context: __SerdeContext): any => {
  return ExternalLocation.visit(input, {
    s3Location: (value) => ({ s3Location: value }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_restJson1FileBatchJobIdentifier = (input: FileBatchJobIdentifier, context: __SerdeContext): any => {
  return {
    ...(input.fileName != null && { fileName: input.fileName }),
    ...(input.folderPath != null && { folderPath: input.folderPath }),
  };
};

const serializeAws_restJson1FsxStorageConfiguration = (
  input: FsxStorageConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.fileSystemId != null && { "file-system-id": input.fileSystemId }),
    ...(input.mountPoint != null && { "mount-point": input.mountPoint }),
  };
};

const serializeAws_restJson1GdgAttributes = (input: GdgAttributes, context: __SerdeContext): any => {
  return {
    ...(input.limit != null && { limit: input.limit }),
    ...(input.rollDisposition != null && { rollDisposition: input.rollDisposition }),
  };
};

const serializeAws_restJson1HighAvailabilityConfig = (input: HighAvailabilityConfig, context: __SerdeContext): any => {
  return {
    ...(input.desiredCapacity != null && { desiredCapacity: input.desiredCapacity }),
  };
};

const serializeAws_restJson1PrimaryKey = (input: PrimaryKey, context: __SerdeContext): any => {
  return {
    ...(input.length != null && { length: input.length }),
    ...(input.name != null && { name: input.name }),
    ...(input.offset != null && { offset: input.offset }),
  };
};

const serializeAws_restJson1RecordLength = (input: RecordLength, context: __SerdeContext): any => {
  return {
    ...(input.max != null && { max: input.max }),
    ...(input.min != null && { min: input.min }),
  };
};

const serializeAws_restJson1ScriptBatchJobIdentifier = (
  input: ScriptBatchJobIdentifier,
  context: __SerdeContext
): any => {
  return {
    ...(input.scriptName != null && { scriptName: input.scriptName }),
  };
};

const serializeAws_restJson1StorageConfiguration = (input: StorageConfiguration, context: __SerdeContext): any => {
  return StorageConfiguration.visit(input, {
    efs: (value) => ({ efs: serializeAws_restJson1EfsStorageConfiguration(value, context) }),
    fsx: (value) => ({ fsx: serializeAws_restJson1FsxStorageConfiguration(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_restJson1StorageConfigurationList = (
  input: StorageConfiguration[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1StorageConfiguration(entry, context);
    });
};

const serializeAws_restJson1String50List = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1TagMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_restJson1VsamAttributes = (input: VsamAttributes, context: __SerdeContext): any => {
  return {
    ...(input.alternateKeys != null && {
      alternateKeys: serializeAws_restJson1AlternateKeyList(input.alternateKeys, context),
    }),
    ...(input.compressed != null && { compressed: input.compressed }),
    ...(input.encoding != null && { encoding: input.encoding }),
    ...(input.format != null && { format: input.format }),
    ...(input.primaryKey != null && { primaryKey: serializeAws_restJson1PrimaryKey(input.primaryKey, context) }),
  };
};

const deserializeAws_restJson1AlternateKey = (output: any, context: __SerdeContext): AlternateKey => {
  return {
    allowDuplicates: __expectBoolean(output.allowDuplicates),
    length: __expectInt32(output.length),
    name: __expectString(output.name),
    offset: __expectInt32(output.offset),
  } as any;
};

const deserializeAws_restJson1AlternateKeyList = (output: any, context: __SerdeContext): AlternateKey[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AlternateKey(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ApplicationSummary = (output: any, context: __SerdeContext): ApplicationSummary => {
  return {
    applicationArn: __expectString(output.applicationArn),
    applicationId: __expectString(output.applicationId),
    applicationVersion: __expectInt32(output.applicationVersion),
    creationTime:
      output.creationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationTime)))
        : undefined,
    deploymentStatus: __expectString(output.deploymentStatus),
    description: __expectString(output.description),
    engineType: __expectString(output.engineType),
    environmentId: __expectString(output.environmentId),
    lastStartTime:
      output.lastStartTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastStartTime)))
        : undefined,
    name: __expectString(output.name),
    status: __expectString(output.status),
    versionStatus: __expectString(output.versionStatus),
  } as any;
};

const deserializeAws_restJson1ApplicationSummaryList = (output: any, context: __SerdeContext): ApplicationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ApplicationSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ApplicationVersionSummary = (
  output: any,
  context: __SerdeContext
): ApplicationVersionSummary => {
  return {
    applicationVersion: __expectInt32(output.applicationVersion),
    creationTime:
      output.creationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationTime)))
        : undefined,
    status: __expectString(output.status),
    statusReason: __expectString(output.statusReason),
  } as any;
};

const deserializeAws_restJson1ApplicationVersionSummaryList = (
  output: any,
  context: __SerdeContext
): ApplicationVersionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ApplicationVersionSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ArnList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1BatchJobDefinition = (output: any, context: __SerdeContext): BatchJobDefinition => {
  if (output.fileBatchJobDefinition !== undefined && output.fileBatchJobDefinition !== null) {
    return {
      fileBatchJobDefinition: deserializeAws_restJson1FileBatchJobDefinition(output.fileBatchJobDefinition, context),
    };
  }
  if (output.scriptBatchJobDefinition !== undefined && output.scriptBatchJobDefinition !== null) {
    return {
      scriptBatchJobDefinition: deserializeAws_restJson1ScriptBatchJobDefinition(
        output.scriptBatchJobDefinition,
        context
      ),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1BatchJobDefinitions = (output: any, context: __SerdeContext): BatchJobDefinition[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1BatchJobDefinition(__expectUnion(entry), context);
    });
  return retVal;
};

const deserializeAws_restJson1BatchJobExecutionSummary = (
  output: any,
  context: __SerdeContext
): BatchJobExecutionSummary => {
  return {
    applicationId: __expectString(output.applicationId),
    endTime:
      output.endTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.endTime))) : undefined,
    executionId: __expectString(output.executionId),
    jobId: __expectString(output.jobId),
    jobName: __expectString(output.jobName),
    jobType: __expectString(output.jobType),
    startTime:
      output.startTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.startTime))) : undefined,
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_restJson1BatchJobExecutionSummaryList = (
  output: any,
  context: __SerdeContext
): BatchJobExecutionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1BatchJobExecutionSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1DatasetDetailOrgAttributes = (
  output: any,
  context: __SerdeContext
): DatasetDetailOrgAttributes => {
  if (output.gdg !== undefined && output.gdg !== null) {
    return {
      gdg: deserializeAws_restJson1GdgDetailAttributes(output.gdg, context),
    };
  }
  if (output.vsam !== undefined && output.vsam !== null) {
    return {
      vsam: deserializeAws_restJson1VsamDetailAttributes(output.vsam, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1DataSetImportSummary = (output: any, context: __SerdeContext): DataSetImportSummary => {
  return {
    failed: __expectInt32(output.failed),
    inProgress: __expectInt32(output.inProgress),
    pending: __expectInt32(output.pending),
    succeeded: __expectInt32(output.succeeded),
    total: __expectInt32(output.total),
  } as any;
};

const deserializeAws_restJson1DataSetImportTask = (output: any, context: __SerdeContext): DataSetImportTask => {
  return {
    status: __expectString(output.status),
    summary: output.summary != null ? deserializeAws_restJson1DataSetImportSummary(output.summary, context) : undefined,
    taskId: __expectString(output.taskId),
  } as any;
};

const deserializeAws_restJson1DataSetImportTaskList = (output: any, context: __SerdeContext): DataSetImportTask[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DataSetImportTask(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1DataSetsSummaryList = (output: any, context: __SerdeContext): DataSetSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DataSetSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1DataSetSummary = (output: any, context: __SerdeContext): DataSetSummary => {
  return {
    creationTime:
      output.creationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationTime)))
        : undefined,
    dataSetName: __expectString(output.dataSetName),
    dataSetOrg: __expectString(output.dataSetOrg),
    format: __expectString(output.format),
    lastReferencedTime:
      output.lastReferencedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastReferencedTime)))
        : undefined,
    lastUpdatedTime:
      output.lastUpdatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedTime)))
        : undefined,
  } as any;
};

const deserializeAws_restJson1DeployedVersionSummary = (
  output: any,
  context: __SerdeContext
): DeployedVersionSummary => {
  return {
    applicationVersion: __expectInt32(output.applicationVersion),
    status: __expectString(output.status),
    statusReason: __expectString(output.statusReason),
  } as any;
};

const deserializeAws_restJson1DeploymentList = (output: any, context: __SerdeContext): DeploymentSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DeploymentSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1DeploymentSummary = (output: any, context: __SerdeContext): DeploymentSummary => {
  return {
    applicationId: __expectString(output.applicationId),
    applicationVersion: __expectInt32(output.applicationVersion),
    creationTime:
      output.creationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationTime)))
        : undefined,
    deploymentId: __expectString(output.deploymentId),
    environmentId: __expectString(output.environmentId),
    status: __expectString(output.status),
    statusReason: __expectString(output.statusReason),
  } as any;
};

const deserializeAws_restJson1EfsStorageConfiguration = (
  output: any,
  context: __SerdeContext
): EfsStorageConfiguration => {
  return {
    fileSystemId: __expectString(output["file-system-id"]),
    mountPoint: __expectString(output["mount-point"]),
  } as any;
};

const deserializeAws_restJson1EngineVersionsSummary = (output: any, context: __SerdeContext): EngineVersionsSummary => {
  return {
    engineType: __expectString(output.engineType),
    engineVersion: __expectString(output.engineVersion),
  } as any;
};

const deserializeAws_restJson1EngineVersionsSummaryList = (
  output: any,
  context: __SerdeContext
): EngineVersionsSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1EngineVersionsSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1EnvironmentSummary = (output: any, context: __SerdeContext): EnvironmentSummary => {
  return {
    creationTime:
      output.creationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationTime)))
        : undefined,
    engineType: __expectString(output.engineType),
    engineVersion: __expectString(output.engineVersion),
    environmentArn: __expectString(output.environmentArn),
    environmentId: __expectString(output.environmentId),
    instanceType: __expectString(output.instanceType),
    name: __expectString(output.name),
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_restJson1EnvironmentSummaryList = (output: any, context: __SerdeContext): EnvironmentSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1EnvironmentSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1FileBatchJobDefinition = (
  output: any,
  context: __SerdeContext
): FileBatchJobDefinition => {
  return {
    fileName: __expectString(output.fileName),
    folderPath: __expectString(output.folderPath),
  } as any;
};

const deserializeAws_restJson1FsxStorageConfiguration = (
  output: any,
  context: __SerdeContext
): FsxStorageConfiguration => {
  return {
    fileSystemId: __expectString(output["file-system-id"]),
    mountPoint: __expectString(output["mount-point"]),
  } as any;
};

const deserializeAws_restJson1GdgDetailAttributes = (output: any, context: __SerdeContext): GdgDetailAttributes => {
  return {
    limit: __expectInt32(output.limit),
    rollDisposition: __expectString(output.rollDisposition),
  } as any;
};

const deserializeAws_restJson1HighAvailabilityConfig = (
  output: any,
  context: __SerdeContext
): HighAvailabilityConfig => {
  return {
    desiredCapacity: __expectInt32(output.desiredCapacity),
  } as any;
};

const deserializeAws_restJson1LogGroupSummaries = (output: any, context: __SerdeContext): LogGroupSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1LogGroupSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1LogGroupSummary = (output: any, context: __SerdeContext): LogGroupSummary => {
  return {
    logGroupName: __expectString(output.logGroupName),
    logType: __expectString(output.logType),
  } as any;
};

const deserializeAws_restJson1MaintenanceSchedule = (output: any, context: __SerdeContext): MaintenanceSchedule => {
  return {
    endTime:
      output.endTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.endTime))) : undefined,
    startTime:
      output.startTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.startTime))) : undefined,
  } as any;
};

const deserializeAws_restJson1PendingMaintenance = (output: any, context: __SerdeContext): PendingMaintenance => {
  return {
    engineVersion: __expectString(output.engineVersion),
    schedule:
      output.schedule != null ? deserializeAws_restJson1MaintenanceSchedule(output.schedule, context) : undefined,
  } as any;
};

const deserializeAws_restJson1PortList = (output: any, context: __SerdeContext): number[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectInt32(entry) as any;
    });
  return retVal;
};

const deserializeAws_restJson1PrimaryKey = (output: any, context: __SerdeContext): PrimaryKey => {
  return {
    length: __expectInt32(output.length),
    name: __expectString(output.name),
    offset: __expectInt32(output.offset),
  } as any;
};

const deserializeAws_restJson1ScriptBatchJobDefinition = (
  output: any,
  context: __SerdeContext
): ScriptBatchJobDefinition => {
  return {
    scriptName: __expectString(output.scriptName),
  } as any;
};

const deserializeAws_restJson1StorageConfiguration = (output: any, context: __SerdeContext): StorageConfiguration => {
  if (output.efs !== undefined && output.efs !== null) {
    return {
      efs: deserializeAws_restJson1EfsStorageConfiguration(output.efs, context),
    };
  }
  if (output.fsx !== undefined && output.fsx !== null) {
    return {
      fsx: deserializeAws_restJson1FsxStorageConfiguration(output.fsx, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1StorageConfigurationList = (
  output: any,
  context: __SerdeContext
): StorageConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1StorageConfiguration(__expectUnion(entry), context);
    });
  return retVal;
};

const deserializeAws_restJson1String50List = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1TagMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectString(value) as any,
    };
  }, {});
};

const deserializeAws_restJson1ValidationExceptionField = (
  output: any,
  context: __SerdeContext
): ValidationExceptionField => {
  return {
    message: __expectString(output.message),
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_restJson1ValidationExceptionFieldList = (
  output: any,
  context: __SerdeContext
): ValidationExceptionField[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ValidationExceptionField(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1VsamDetailAttributes = (output: any, context: __SerdeContext): VsamDetailAttributes => {
  return {
    alternateKeys:
      output.alternateKeys != null
        ? deserializeAws_restJson1AlternateKeyList(output.alternateKeys, context)
        : undefined,
    cacheAtStartup: __expectBoolean(output.cacheAtStartup),
    compressed: __expectBoolean(output.compressed),
    encoding: __expectString(output.encoding),
    primaryKey: output.primaryKey != null ? deserializeAws_restJson1PrimaryKey(output.primaryKey, context) : undefined,
    recordFormat: __expectString(output.recordFormat),
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
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string | undefined => {
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
};
