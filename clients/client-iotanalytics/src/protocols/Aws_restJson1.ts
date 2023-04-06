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
  limitedParseDouble as __limitedParseDouble,
  map as __map,
  parseEpochTimestamp as __parseEpochTimestamp,
  resolvedPath as __resolvedPath,
  serializeFloat as __serializeFloat,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { BatchPutMessageCommandInput, BatchPutMessageCommandOutput } from "../commands/BatchPutMessageCommand";
import {
  CancelPipelineReprocessingCommandInput,
  CancelPipelineReprocessingCommandOutput,
} from "../commands/CancelPipelineReprocessingCommand";
import { CreateChannelCommandInput, CreateChannelCommandOutput } from "../commands/CreateChannelCommand";
import { CreateDatasetCommandInput, CreateDatasetCommandOutput } from "../commands/CreateDatasetCommand";
import {
  CreateDatasetContentCommandInput,
  CreateDatasetContentCommandOutput,
} from "../commands/CreateDatasetContentCommand";
import { CreateDatastoreCommandInput, CreateDatastoreCommandOutput } from "../commands/CreateDatastoreCommand";
import { CreatePipelineCommandInput, CreatePipelineCommandOutput } from "../commands/CreatePipelineCommand";
import { DeleteChannelCommandInput, DeleteChannelCommandOutput } from "../commands/DeleteChannelCommand";
import { DeleteDatasetCommandInput, DeleteDatasetCommandOutput } from "../commands/DeleteDatasetCommand";
import {
  DeleteDatasetContentCommandInput,
  DeleteDatasetContentCommandOutput,
} from "../commands/DeleteDatasetContentCommand";
import { DeleteDatastoreCommandInput, DeleteDatastoreCommandOutput } from "../commands/DeleteDatastoreCommand";
import { DeletePipelineCommandInput, DeletePipelineCommandOutput } from "../commands/DeletePipelineCommand";
import { DescribeChannelCommandInput, DescribeChannelCommandOutput } from "../commands/DescribeChannelCommand";
import { DescribeDatasetCommandInput, DescribeDatasetCommandOutput } from "../commands/DescribeDatasetCommand";
import { DescribeDatastoreCommandInput, DescribeDatastoreCommandOutput } from "../commands/DescribeDatastoreCommand";
import {
  DescribeLoggingOptionsCommandInput,
  DescribeLoggingOptionsCommandOutput,
} from "../commands/DescribeLoggingOptionsCommand";
import { DescribePipelineCommandInput, DescribePipelineCommandOutput } from "../commands/DescribePipelineCommand";
import { GetDatasetContentCommandInput, GetDatasetContentCommandOutput } from "../commands/GetDatasetContentCommand";
import { ListChannelsCommandInput, ListChannelsCommandOutput } from "../commands/ListChannelsCommand";
import {
  ListDatasetContentsCommandInput,
  ListDatasetContentsCommandOutput,
} from "../commands/ListDatasetContentsCommand";
import { ListDatasetsCommandInput, ListDatasetsCommandOutput } from "../commands/ListDatasetsCommand";
import { ListDatastoresCommandInput, ListDatastoresCommandOutput } from "../commands/ListDatastoresCommand";
import { ListPipelinesCommandInput, ListPipelinesCommandOutput } from "../commands/ListPipelinesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { PutLoggingOptionsCommandInput, PutLoggingOptionsCommandOutput } from "../commands/PutLoggingOptionsCommand";
import {
  RunPipelineActivityCommandInput,
  RunPipelineActivityCommandOutput,
} from "../commands/RunPipelineActivityCommand";
import { SampleChannelDataCommandInput, SampleChannelDataCommandOutput } from "../commands/SampleChannelDataCommand";
import {
  StartPipelineReprocessingCommandInput,
  StartPipelineReprocessingCommandOutput,
} from "../commands/StartPipelineReprocessingCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateChannelCommandInput, UpdateChannelCommandOutput } from "../commands/UpdateChannelCommand";
import { UpdateDatasetCommandInput, UpdateDatasetCommandOutput } from "../commands/UpdateDatasetCommand";
import { UpdateDatastoreCommandInput, UpdateDatastoreCommandOutput } from "../commands/UpdateDatastoreCommand";
import { UpdatePipelineCommandInput, UpdatePipelineCommandOutput } from "../commands/UpdatePipelineCommand";
import { IoTAnalyticsServiceException as __BaseException } from "../models/IoTAnalyticsServiceException";
import {
  AddAttributesActivity,
  BatchPutMessageErrorEntry,
  Channel,
  ChannelActivity,
  ChannelMessages,
  ChannelStatistics,
  ChannelStorage,
  ChannelStorageSummary,
  ChannelSummary,
  Column,
  ContainerDatasetAction,
  CustomerManagedChannelS3Storage,
  CustomerManagedChannelS3StorageSummary,
  CustomerManagedDatastoreS3Storage,
  CustomerManagedDatastoreS3StorageSummary,
  Dataset,
  DatasetAction,
  DatasetActionSummary,
  DatasetContentDeliveryDestination,
  DatasetContentDeliveryRule,
  DatasetContentStatus,
  DatasetContentSummary,
  DatasetContentVersionValue,
  DatasetEntry,
  DatasetSummary,
  DatasetTrigger,
  Datastore,
  DatastoreActivity,
  DatastoreIotSiteWiseMultiLayerStorage,
  DatastoreIotSiteWiseMultiLayerStorageSummary,
  DatastorePartition,
  DatastorePartitions,
  DatastoreStatistics,
  DatastoreStorage,
  DatastoreStorageSummary,
  DatastoreSummary,
  DeltaTime,
  DeltaTimeSessionWindowConfiguration,
  DeviceRegistryEnrichActivity,
  DeviceShadowEnrichActivity,
  EstimatedResourceSize,
  FileFormatConfiguration,
  FilterActivity,
  GlueConfiguration,
  InternalFailureException,
  InvalidRequestException,
  IotEventsDestinationConfiguration,
  IotSiteWiseCustomerManagedDatastoreS3Storage,
  IotSiteWiseCustomerManagedDatastoreS3StorageSummary,
  JsonConfiguration,
  LambdaActivity,
  LateDataRule,
  LateDataRuleConfiguration,
  LimitExceededException,
  LoggingOptions,
  MathActivity,
  Message,
  OutputFileUriValue,
  ParquetConfiguration,
  Partition,
  Pipeline,
  PipelineActivity,
  PipelineSummary,
  QueryFilter,
  RemoveAttributesActivity,
  ReprocessingSummary,
  ResourceAlreadyExistsException,
  ResourceConfiguration,
  ResourceNotFoundException,
  RetentionPeriod,
  S3DestinationConfiguration,
  Schedule,
  SchemaDefinition,
  SelectAttributesActivity,
  ServiceManagedChannelS3Storage,
  ServiceManagedChannelS3StorageSummary,
  ServiceManagedDatastoreS3Storage,
  ServiceManagedDatastoreS3StorageSummary,
  ServiceUnavailableException,
  SqlQueryDatasetAction,
  Tag,
  ThrottlingException,
  TimestampPartition,
  TriggeringDataset,
  Variable,
  VersioningConfiguration,
} from "../models/models_0";

/**
 * serializeAws_restJson1BatchPutMessageCommand
 */
export const se_BatchPutMessageCommand = async (
  input: BatchPutMessageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/messages/batch";
  let body: any;
  body = JSON.stringify({
    ...(input.channelName != null && { channelName: input.channelName }),
    ...(input.messages != null && { messages: se_Messages(input.messages, context) }),
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
 * serializeAws_restJson1CancelPipelineReprocessingCommand
 */
export const se_CancelPipelineReprocessingCommand = async (
  input: CancelPipelineReprocessingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/pipelines/{pipelineName}/reprocessing/{reprocessingId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "pipelineName",
    () => input.pipelineName!,
    "{pipelineName}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "reprocessingId",
    () => input.reprocessingId!,
    "{reprocessingId}",
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
 * serializeAws_restJson1CreateChannelCommand
 */
export const se_CreateChannelCommand = async (
  input: CreateChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channels";
  let body: any;
  body = JSON.stringify({
    ...(input.channelName != null && { channelName: input.channelName }),
    ...(input.channelStorage != null && { channelStorage: se_ChannelStorage(input.channelStorage, context) }),
    ...(input.retentionPeriod != null && { retentionPeriod: se_RetentionPeriod(input.retentionPeriod, context) }),
    ...(input.tags != null && { tags: se_TagList(input.tags, context) }),
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
 * serializeAws_restJson1CreateDatasetCommand
 */
export const se_CreateDatasetCommand = async (
  input: CreateDatasetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/datasets";
  let body: any;
  body = JSON.stringify({
    ...(input.actions != null && { actions: se_DatasetActions(input.actions, context) }),
    ...(input.contentDeliveryRules != null && {
      contentDeliveryRules: se_DatasetContentDeliveryRules(input.contentDeliveryRules, context),
    }),
    ...(input.datasetName != null && { datasetName: input.datasetName }),
    ...(input.lateDataRules != null && { lateDataRules: se_LateDataRules(input.lateDataRules, context) }),
    ...(input.retentionPeriod != null && { retentionPeriod: se_RetentionPeriod(input.retentionPeriod, context) }),
    ...(input.tags != null && { tags: se_TagList(input.tags, context) }),
    ...(input.triggers != null && { triggers: se_DatasetTriggers(input.triggers, context) }),
    ...(input.versioningConfiguration != null && {
      versioningConfiguration: se_VersioningConfiguration(input.versioningConfiguration, context),
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
 * serializeAws_restJson1CreateDatasetContentCommand
 */
export const se_CreateDatasetContentCommand = async (
  input: CreateDatasetContentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/datasets/{datasetName}/content";
  resolvedPath = __resolvedPath(resolvedPath, input, "datasetName", () => input.datasetName!, "{datasetName}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.versionId != null && { versionId: input.versionId }),
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
 * serializeAws_restJson1CreateDatastoreCommand
 */
export const se_CreateDatastoreCommand = async (
  input: CreateDatastoreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/datastores";
  let body: any;
  body = JSON.stringify({
    ...(input.datastoreName != null && { datastoreName: input.datastoreName }),
    ...(input.datastorePartitions != null && {
      datastorePartitions: se_DatastorePartitions(input.datastorePartitions, context),
    }),
    ...(input.datastoreStorage != null && { datastoreStorage: se_DatastoreStorage(input.datastoreStorage, context) }),
    ...(input.fileFormatConfiguration != null && {
      fileFormatConfiguration: se_FileFormatConfiguration(input.fileFormatConfiguration, context),
    }),
    ...(input.retentionPeriod != null && { retentionPeriod: se_RetentionPeriod(input.retentionPeriod, context) }),
    ...(input.tags != null && { tags: se_TagList(input.tags, context) }),
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
 * serializeAws_restJson1CreatePipelineCommand
 */
export const se_CreatePipelineCommand = async (
  input: CreatePipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/pipelines";
  let body: any;
  body = JSON.stringify({
    ...(input.pipelineActivities != null && {
      pipelineActivities: se_PipelineActivities(input.pipelineActivities, context),
    }),
    ...(input.pipelineName != null && { pipelineName: input.pipelineName }),
    ...(input.tags != null && { tags: se_TagList(input.tags, context) }),
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
 * serializeAws_restJson1DeleteChannelCommand
 */
export const se_DeleteChannelCommand = async (
  input: DeleteChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channels/{channelName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "channelName", () => input.channelName!, "{channelName}", false);
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
 * serializeAws_restJson1DeleteDatasetCommand
 */
export const se_DeleteDatasetCommand = async (
  input: DeleteDatasetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/datasets/{datasetName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "datasetName", () => input.datasetName!, "{datasetName}", false);
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
 * serializeAws_restJson1DeleteDatasetContentCommand
 */
export const se_DeleteDatasetContentCommand = async (
  input: DeleteDatasetContentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/datasets/{datasetName}/content";
  resolvedPath = __resolvedPath(resolvedPath, input, "datasetName", () => input.datasetName!, "{datasetName}", false);
  const query: any = map({
    versionId: [, input.versionId!],
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
 * serializeAws_restJson1DeleteDatastoreCommand
 */
export const se_DeleteDatastoreCommand = async (
  input: DeleteDatastoreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/datastores/{datastoreName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "datastoreName",
    () => input.datastoreName!,
    "{datastoreName}",
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
 * serializeAws_restJson1DeletePipelineCommand
 */
export const se_DeletePipelineCommand = async (
  input: DeletePipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/pipelines/{pipelineName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "pipelineName",
    () => input.pipelineName!,
    "{pipelineName}",
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
 * serializeAws_restJson1DescribeChannelCommand
 */
export const se_DescribeChannelCommand = async (
  input: DescribeChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channels/{channelName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "channelName", () => input.channelName!, "{channelName}", false);
  const query: any = map({
    includeStatistics: [() => input.includeStatistics !== void 0, () => input.includeStatistics!.toString()],
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
 * serializeAws_restJson1DescribeDatasetCommand
 */
export const se_DescribeDatasetCommand = async (
  input: DescribeDatasetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/datasets/{datasetName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "datasetName", () => input.datasetName!, "{datasetName}", false);
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
 * serializeAws_restJson1DescribeDatastoreCommand
 */
export const se_DescribeDatastoreCommand = async (
  input: DescribeDatastoreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/datastores/{datastoreName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "datastoreName",
    () => input.datastoreName!,
    "{datastoreName}",
    false
  );
  const query: any = map({
    includeStatistics: [() => input.includeStatistics !== void 0, () => input.includeStatistics!.toString()],
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
 * serializeAws_restJson1DescribeLoggingOptionsCommand
 */
export const se_DescribeLoggingOptionsCommand = async (
  input: DescribeLoggingOptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/logging";
  let body: any;
  body = "";
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
 * serializeAws_restJson1DescribePipelineCommand
 */
export const se_DescribePipelineCommand = async (
  input: DescribePipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/pipelines/{pipelineName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "pipelineName",
    () => input.pipelineName!,
    "{pipelineName}",
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
 * serializeAws_restJson1GetDatasetContentCommand
 */
export const se_GetDatasetContentCommand = async (
  input: GetDatasetContentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/datasets/{datasetName}/content";
  resolvedPath = __resolvedPath(resolvedPath, input, "datasetName", () => input.datasetName!, "{datasetName}", false);
  const query: any = map({
    versionId: [, input.versionId!],
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
 * serializeAws_restJson1ListChannelsCommand
 */
export const se_ListChannelsCommand = async (
  input: ListChannelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channels";
  const query: any = map({
    nextToken: [, input.nextToken!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
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
 * serializeAws_restJson1ListDatasetContentsCommand
 */
export const se_ListDatasetContentsCommand = async (
  input: ListDatasetContentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/datasets/{datasetName}/contents";
  resolvedPath = __resolvedPath(resolvedPath, input, "datasetName", () => input.datasetName!, "{datasetName}", false);
  const query: any = map({
    nextToken: [, input.nextToken!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
    scheduledOnOrAfter: [
      () => input.scheduledOnOrAfter !== void 0,
      () => (input.scheduledOnOrAfter!.toISOString().split(".")[0] + "Z").toString(),
    ],
    scheduledBefore: [
      () => input.scheduledBefore !== void 0,
      () => (input.scheduledBefore!.toISOString().split(".")[0] + "Z").toString(),
    ],
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
 * serializeAws_restJson1ListDatasetsCommand
 */
export const se_ListDatasetsCommand = async (
  input: ListDatasetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/datasets";
  const query: any = map({
    nextToken: [, input.nextToken!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
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
 * serializeAws_restJson1ListDatastoresCommand
 */
export const se_ListDatastoresCommand = async (
  input: ListDatastoresCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/datastores";
  const query: any = map({
    nextToken: [, input.nextToken!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
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
 * serializeAws_restJson1ListPipelinesCommand
 */
export const se_ListPipelinesCommand = async (
  input: ListPipelinesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/pipelines";
  const query: any = map({
    nextToken: [, input.nextToken!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
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
 * serializeAws_restJson1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags";
  const query: any = map({
    resourceArn: [, __expectNonNull(input.resourceArn!, `resourceArn`)],
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
 * serializeAws_restJson1PutLoggingOptionsCommand
 */
export const se_PutLoggingOptionsCommand = async (
  input: PutLoggingOptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/logging";
  let body: any;
  body = JSON.stringify({
    ...(input.loggingOptions != null && { loggingOptions: se_LoggingOptions(input.loggingOptions, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1RunPipelineActivityCommand
 */
export const se_RunPipelineActivityCommand = async (
  input: RunPipelineActivityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/pipelineactivities/run";
  let body: any;
  body = JSON.stringify({
    ...(input.payloads != null && { payloads: se_MessagePayloads(input.payloads, context) }),
    ...(input.pipelineActivity != null && { pipelineActivity: se_PipelineActivity(input.pipelineActivity, context) }),
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
 * serializeAws_restJson1SampleChannelDataCommand
 */
export const se_SampleChannelDataCommand = async (
  input: SampleChannelDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channels/{channelName}/sample";
  resolvedPath = __resolvedPath(resolvedPath, input, "channelName", () => input.channelName!, "{channelName}", false);
  const query: any = map({
    maxMessages: [() => input.maxMessages !== void 0, () => input.maxMessages!.toString()],
    startTime: [
      () => input.startTime !== void 0,
      () => (input.startTime!.toISOString().split(".")[0] + "Z").toString(),
    ],
    endTime: [() => input.endTime !== void 0, () => (input.endTime!.toISOString().split(".")[0] + "Z").toString()],
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
 * serializeAws_restJson1StartPipelineReprocessingCommand
 */
export const se_StartPipelineReprocessingCommand = async (
  input: StartPipelineReprocessingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/pipelines/{pipelineName}/reprocessing";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "pipelineName",
    () => input.pipelineName!,
    "{pipelineName}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.channelMessages != null && { channelMessages: se_ChannelMessages(input.channelMessages, context) }),
    ...(input.endTime != null && { endTime: Math.round(input.endTime.getTime() / 1000) }),
    ...(input.startTime != null && { startTime: Math.round(input.startTime.getTime() / 1000) }),
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
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags";
  const query: any = map({
    resourceArn: [, __expectNonNull(input.resourceArn!, `resourceArn`)],
  });
  let body: any;
  body = JSON.stringify({
    ...(input.tags != null && { tags: se_TagList(input.tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
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
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags";
  const query: any = map({
    resourceArn: [, __expectNonNull(input.resourceArn!, `resourceArn`)],
    tagKeys: [
      __expectNonNull(input.tagKeys, `tagKeys`) != null,
      () => (input.tagKeys! || []).map((_entry) => _entry as any),
    ],
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
 * serializeAws_restJson1UpdateChannelCommand
 */
export const se_UpdateChannelCommand = async (
  input: UpdateChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channels/{channelName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "channelName", () => input.channelName!, "{channelName}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.channelStorage != null && { channelStorage: se_ChannelStorage(input.channelStorage, context) }),
    ...(input.retentionPeriod != null && { retentionPeriod: se_RetentionPeriod(input.retentionPeriod, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateDatasetCommand
 */
export const se_UpdateDatasetCommand = async (
  input: UpdateDatasetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/datasets/{datasetName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "datasetName", () => input.datasetName!, "{datasetName}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.actions != null && { actions: se_DatasetActions(input.actions, context) }),
    ...(input.contentDeliveryRules != null && {
      contentDeliveryRules: se_DatasetContentDeliveryRules(input.contentDeliveryRules, context),
    }),
    ...(input.lateDataRules != null && { lateDataRules: se_LateDataRules(input.lateDataRules, context) }),
    ...(input.retentionPeriod != null && { retentionPeriod: se_RetentionPeriod(input.retentionPeriod, context) }),
    ...(input.triggers != null && { triggers: se_DatasetTriggers(input.triggers, context) }),
    ...(input.versioningConfiguration != null && {
      versioningConfiguration: se_VersioningConfiguration(input.versioningConfiguration, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateDatastoreCommand
 */
export const se_UpdateDatastoreCommand = async (
  input: UpdateDatastoreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/datastores/{datastoreName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "datastoreName",
    () => input.datastoreName!,
    "{datastoreName}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.datastoreStorage != null && { datastoreStorage: se_DatastoreStorage(input.datastoreStorage, context) }),
    ...(input.fileFormatConfiguration != null && {
      fileFormatConfiguration: se_FileFormatConfiguration(input.fileFormatConfiguration, context),
    }),
    ...(input.retentionPeriod != null && { retentionPeriod: se_RetentionPeriod(input.retentionPeriod, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdatePipelineCommand
 */
export const se_UpdatePipelineCommand = async (
  input: UpdatePipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/pipelines/{pipelineName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "pipelineName",
    () => input.pipelineName!,
    "{pipelineName}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.pipelineActivities != null && {
      pipelineActivities: se_PipelineActivities(input.pipelineActivities, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * deserializeAws_restJson1BatchPutMessageCommand
 */
export const de_BatchPutMessageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchPutMessageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_BatchPutMessageCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.batchPutMessageErrorEntries != null) {
    contents.batchPutMessageErrorEntries = de_BatchPutMessageErrorEntries(data.batchPutMessageErrorEntries, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1BatchPutMessageCommandError
 */
const de_BatchPutMessageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchPutMessageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotanalytics#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotanalytics#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotanalytics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotanalytics#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotanalytics#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CancelPipelineReprocessingCommand
 */
export const de_CancelPipelineReprocessingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelPipelineReprocessingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CancelPipelineReprocessingCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1CancelPipelineReprocessingCommandError
 */
const de_CancelPipelineReprocessingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelPipelineReprocessingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotanalytics#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotanalytics#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotanalytics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotanalytics#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotanalytics#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateChannelCommand
 */
export const de_CreateChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateChannelCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateChannelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.channelArn != null) {
    contents.channelArn = __expectString(data.channelArn);
  }
  if (data.channelName != null) {
    contents.channelName = __expectString(data.channelName);
  }
  if (data.retentionPeriod != null) {
    contents.retentionPeriod = de_RetentionPeriod(data.retentionPeriod, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateChannelCommandError
 */
const de_CreateChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotanalytics#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotanalytics#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.iotanalytics#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.iotanalytics#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotanalytics#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotanalytics#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateDatasetCommand
 */
export const de_CreateDatasetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDatasetCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateDatasetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.datasetArn != null) {
    contents.datasetArn = __expectString(data.datasetArn);
  }
  if (data.datasetName != null) {
    contents.datasetName = __expectString(data.datasetName);
  }
  if (data.retentionPeriod != null) {
    contents.retentionPeriod = de_RetentionPeriod(data.retentionPeriod, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateDatasetCommandError
 */
const de_CreateDatasetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDatasetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotanalytics#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotanalytics#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.iotanalytics#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.iotanalytics#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotanalytics#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotanalytics#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateDatasetContentCommand
 */
export const de_CreateDatasetContentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDatasetContentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateDatasetContentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.versionId != null) {
    contents.versionId = __expectString(data.versionId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateDatasetContentCommandError
 */
const de_CreateDatasetContentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDatasetContentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotanalytics#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotanalytics#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotanalytics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotanalytics#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotanalytics#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateDatastoreCommand
 */
export const de_CreateDatastoreCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDatastoreCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateDatastoreCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.datastoreArn != null) {
    contents.datastoreArn = __expectString(data.datastoreArn);
  }
  if (data.datastoreName != null) {
    contents.datastoreName = __expectString(data.datastoreName);
  }
  if (data.retentionPeriod != null) {
    contents.retentionPeriod = de_RetentionPeriod(data.retentionPeriod, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateDatastoreCommandError
 */
const de_CreateDatastoreCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDatastoreCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotanalytics#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotanalytics#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.iotanalytics#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.iotanalytics#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotanalytics#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotanalytics#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreatePipelineCommand
 */
export const de_CreatePipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePipelineCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreatePipelineCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.pipelineArn != null) {
    contents.pipelineArn = __expectString(data.pipelineArn);
  }
  if (data.pipelineName != null) {
    contents.pipelineName = __expectString(data.pipelineName);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreatePipelineCommandError
 */
const de_CreatePipelineCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePipelineCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotanalytics#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotanalytics#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.iotanalytics#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.iotanalytics#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotanalytics#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotanalytics#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteChannelCommand
 */
export const de_DeleteChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteChannelCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteChannelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteChannelCommandError
 */
const de_DeleteChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotanalytics#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotanalytics#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotanalytics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotanalytics#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotanalytics#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteDatasetCommand
 */
export const de_DeleteDatasetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDatasetCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteDatasetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteDatasetCommandError
 */
const de_DeleteDatasetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDatasetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotanalytics#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotanalytics#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotanalytics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotanalytics#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotanalytics#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteDatasetContentCommand
 */
export const de_DeleteDatasetContentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDatasetContentCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteDatasetContentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteDatasetContentCommandError
 */
const de_DeleteDatasetContentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDatasetContentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotanalytics#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotanalytics#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotanalytics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotanalytics#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotanalytics#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteDatastoreCommand
 */
export const de_DeleteDatastoreCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDatastoreCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteDatastoreCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteDatastoreCommandError
 */
const de_DeleteDatastoreCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDatastoreCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotanalytics#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotanalytics#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotanalytics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotanalytics#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotanalytics#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeletePipelineCommand
 */
export const de_DeletePipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePipelineCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeletePipelineCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeletePipelineCommandError
 */
const de_DeletePipelineCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePipelineCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotanalytics#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotanalytics#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotanalytics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotanalytics#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotanalytics#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DescribeChannelCommand
 */
export const de_DescribeChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeChannelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.channel != null) {
    contents.channel = de_Channel(data.channel, context);
  }
  if (data.statistics != null) {
    contents.statistics = de_ChannelStatistics(data.statistics, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeChannelCommandError
 */
const de_DescribeChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotanalytics#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotanalytics#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotanalytics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotanalytics#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotanalytics#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DescribeDatasetCommand
 */
export const de_DescribeDatasetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDatasetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeDatasetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.dataset != null) {
    contents.dataset = de_Dataset(data.dataset, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeDatasetCommandError
 */
const de_DescribeDatasetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDatasetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotanalytics#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotanalytics#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotanalytics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotanalytics#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotanalytics#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DescribeDatastoreCommand
 */
export const de_DescribeDatastoreCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDatastoreCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeDatastoreCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.datastore != null) {
    contents.datastore = de_Datastore(data.datastore, context);
  }
  if (data.statistics != null) {
    contents.statistics = de_DatastoreStatistics(data.statistics, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeDatastoreCommandError
 */
const de_DescribeDatastoreCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDatastoreCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotanalytics#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotanalytics#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotanalytics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotanalytics#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotanalytics#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DescribeLoggingOptionsCommand
 */
export const de_DescribeLoggingOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLoggingOptionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeLoggingOptionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.loggingOptions != null) {
    contents.loggingOptions = de_LoggingOptions(data.loggingOptions, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeLoggingOptionsCommandError
 */
const de_DescribeLoggingOptionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLoggingOptionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotanalytics#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotanalytics#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotanalytics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotanalytics#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotanalytics#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DescribePipelineCommand
 */
export const de_DescribePipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePipelineCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribePipelineCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.pipeline != null) {
    contents.pipeline = de_Pipeline(data.pipeline, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribePipelineCommandError
 */
const de_DescribePipelineCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePipelineCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotanalytics#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotanalytics#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotanalytics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotanalytics#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotanalytics#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetDatasetContentCommand
 */
export const de_GetDatasetContentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDatasetContentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetDatasetContentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.entries != null) {
    contents.entries = de_DatasetEntries(data.entries, context);
  }
  if (data.status != null) {
    contents.status = de_DatasetContentStatus(data.status, context);
  }
  if (data.timestamp != null) {
    contents.timestamp = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.timestamp)));
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetDatasetContentCommandError
 */
const de_GetDatasetContentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDatasetContentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotanalytics#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotanalytics#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotanalytics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotanalytics#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotanalytics#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListChannelsCommand
 */
export const de_ListChannelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChannelsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListChannelsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.channelSummaries != null) {
    contents.channelSummaries = de_ChannelSummaries(data.channelSummaries, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListChannelsCommandError
 */
const de_ListChannelsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChannelsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotanalytics#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotanalytics#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotanalytics#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotanalytics#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListDatasetContentsCommand
 */
export const de_ListDatasetContentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDatasetContentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListDatasetContentsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.datasetContentSummaries != null) {
    contents.datasetContentSummaries = de_DatasetContentSummaries(data.datasetContentSummaries, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListDatasetContentsCommandError
 */
const de_ListDatasetContentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDatasetContentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotanalytics#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotanalytics#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotanalytics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotanalytics#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotanalytics#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListDatasetsCommand
 */
export const de_ListDatasetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDatasetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListDatasetsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.datasetSummaries != null) {
    contents.datasetSummaries = de_DatasetSummaries(data.datasetSummaries, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListDatasetsCommandError
 */
const de_ListDatasetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDatasetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotanalytics#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotanalytics#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotanalytics#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotanalytics#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListDatastoresCommand
 */
export const de_ListDatastoresCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDatastoresCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListDatastoresCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.datastoreSummaries != null) {
    contents.datastoreSummaries = de_DatastoreSummaries(data.datastoreSummaries, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListDatastoresCommandError
 */
const de_ListDatastoresCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDatastoresCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotanalytics#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotanalytics#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotanalytics#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotanalytics#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListPipelinesCommand
 */
export const de_ListPipelinesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPipelinesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListPipelinesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.pipelineSummaries != null) {
    contents.pipelineSummaries = de_PipelineSummaries(data.pipelineSummaries, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListPipelinesCommandError
 */
const de_ListPipelinesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPipelinesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotanalytics#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotanalytics#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotanalytics#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotanalytics#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
    contents.tags = de_TagList(data.tags, context);
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
    case "InternalFailureException":
    case "com.amazonaws.iotanalytics#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotanalytics#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.iotanalytics#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotanalytics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotanalytics#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotanalytics#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1PutLoggingOptionsCommand
 */
export const de_PutLoggingOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutLoggingOptionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutLoggingOptionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1PutLoggingOptionsCommandError
 */
const de_PutLoggingOptionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutLoggingOptionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotanalytics#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotanalytics#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotanalytics#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotanalytics#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1RunPipelineActivityCommand
 */
export const de_RunPipelineActivityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RunPipelineActivityCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_RunPipelineActivityCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.logResult != null) {
    contents.logResult = __expectString(data.logResult);
  }
  if (data.payloads != null) {
    contents.payloads = de_MessagePayloads(data.payloads, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1RunPipelineActivityCommandError
 */
const de_RunPipelineActivityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RunPipelineActivityCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotanalytics#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotanalytics#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotanalytics#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotanalytics#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1SampleChannelDataCommand
 */
export const de_SampleChannelDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SampleChannelDataCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_SampleChannelDataCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.payloads != null) {
    contents.payloads = de_MessagePayloads(data.payloads, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1SampleChannelDataCommandError
 */
const de_SampleChannelDataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SampleChannelDataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotanalytics#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotanalytics#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotanalytics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotanalytics#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotanalytics#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1StartPipelineReprocessingCommand
 */
export const de_StartPipelineReprocessingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartPipelineReprocessingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StartPipelineReprocessingCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.reprocessingId != null) {
    contents.reprocessingId = __expectString(data.reprocessingId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1StartPipelineReprocessingCommandError
 */
const de_StartPipelineReprocessingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartPipelineReprocessingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotanalytics#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotanalytics#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.iotanalytics#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotanalytics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotanalytics#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotanalytics#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
    case "InternalFailureException":
    case "com.amazonaws.iotanalytics#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotanalytics#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.iotanalytics#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotanalytics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotanalytics#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotanalytics#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
    case "InternalFailureException":
    case "com.amazonaws.iotanalytics#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotanalytics#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.iotanalytics#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotanalytics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotanalytics#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotanalytics#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateChannelCommand
 */
export const de_UpdateChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateChannelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateChannelCommandError
 */
const de_UpdateChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotanalytics#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotanalytics#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotanalytics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotanalytics#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotanalytics#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateDatasetCommand
 */
export const de_UpdateDatasetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDatasetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateDatasetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateDatasetCommandError
 */
const de_UpdateDatasetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDatasetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotanalytics#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotanalytics#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotanalytics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotanalytics#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotanalytics#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateDatastoreCommand
 */
export const de_UpdateDatastoreCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDatastoreCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateDatastoreCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateDatastoreCommandError
 */
const de_UpdateDatastoreCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDatastoreCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotanalytics#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotanalytics#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotanalytics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotanalytics#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotanalytics#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdatePipelineCommand
 */
export const de_UpdatePipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePipelineCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdatePipelineCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdatePipelineCommandError
 */
const de_UpdatePipelineCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePipelineCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotanalytics#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotanalytics#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.iotanalytics#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotanalytics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotanalytics#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotanalytics#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1InternalFailureExceptionRes
 */
const de_InternalFailureExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalFailureException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new InternalFailureException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InvalidRequestExceptionRes
 */
const de_InvalidRequestExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new InvalidRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1LimitExceededExceptionRes
 */
const de_LimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new LimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ResourceAlreadyExistsExceptionRes
 */
const de_ResourceAlreadyExistsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceAlreadyExistsException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  if (data.resourceArn != null) {
    contents.resourceArn = __expectString(data.resourceArn);
  }
  if (data.resourceId != null) {
    contents.resourceId = __expectString(data.resourceId);
  }
  const exception = new ResourceAlreadyExistsException({
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
 * serializeAws_restJson1AddAttributesActivity
 */
const se_AddAttributesActivity = (input: AddAttributesActivity, context: __SerdeContext): any => {
  return {
    ...(input.attributes != null && { attributes: se_AttributeNameMapping(input.attributes, context) }),
    ...(input.name != null && { name: input.name }),
    ...(input.next != null && { next: input.next }),
  };
};

/**
 * serializeAws_restJson1AttributeNameMapping
 */
const se_AttributeNameMapping = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1AttributeNames
 */
const se_AttributeNames = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1ChannelActivity
 */
const se_ChannelActivity = (input: ChannelActivity, context: __SerdeContext): any => {
  return {
    ...(input.channelName != null && { channelName: input.channelName }),
    ...(input.name != null && { name: input.name }),
    ...(input.next != null && { next: input.next }),
  };
};

/**
 * serializeAws_restJson1ChannelMessages
 */
const se_ChannelMessages = (input: ChannelMessages, context: __SerdeContext): any => {
  return {
    ...(input.s3Paths != null && { s3Paths: se_S3PathChannelMessages(input.s3Paths, context) }),
  };
};

/**
 * serializeAws_restJson1ChannelStorage
 */
const se_ChannelStorage = (input: ChannelStorage, context: __SerdeContext): any => {
  return {
    ...(input.customerManagedS3 != null && {
      customerManagedS3: se_CustomerManagedChannelS3Storage(input.customerManagedS3, context),
    }),
    ...(input.serviceManagedS3 != null && {
      serviceManagedS3: se_ServiceManagedChannelS3Storage(input.serviceManagedS3, context),
    }),
  };
};

/**
 * serializeAws_restJson1Column
 */
const se_Column = (input: Column, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.type != null && { type: input.type }),
  };
};

/**
 * serializeAws_restJson1Columns
 */
const se_Columns = (input: Column[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Column(entry, context);
    });
};

/**
 * serializeAws_restJson1ContainerDatasetAction
 */
const se_ContainerDatasetAction = (input: ContainerDatasetAction, context: __SerdeContext): any => {
  return {
    ...(input.executionRoleArn != null && { executionRoleArn: input.executionRoleArn }),
    ...(input.image != null && { image: input.image }),
    ...(input.resourceConfiguration != null && {
      resourceConfiguration: se_ResourceConfiguration(input.resourceConfiguration, context),
    }),
    ...(input.variables != null && { variables: se_Variables(input.variables, context) }),
  };
};

/**
 * serializeAws_restJson1CustomerManagedChannelS3Storage
 */
const se_CustomerManagedChannelS3Storage = (input: CustomerManagedChannelS3Storage, context: __SerdeContext): any => {
  return {
    ...(input.bucket != null && { bucket: input.bucket }),
    ...(input.keyPrefix != null && { keyPrefix: input.keyPrefix }),
    ...(input.roleArn != null && { roleArn: input.roleArn }),
  };
};

/**
 * serializeAws_restJson1CustomerManagedDatastoreS3Storage
 */
const se_CustomerManagedDatastoreS3Storage = (
  input: CustomerManagedDatastoreS3Storage,
  context: __SerdeContext
): any => {
  return {
    ...(input.bucket != null && { bucket: input.bucket }),
    ...(input.keyPrefix != null && { keyPrefix: input.keyPrefix }),
    ...(input.roleArn != null && { roleArn: input.roleArn }),
  };
};

/**
 * serializeAws_restJson1DatasetAction
 */
const se_DatasetAction = (input: DatasetAction, context: __SerdeContext): any => {
  return {
    ...(input.actionName != null && { actionName: input.actionName }),
    ...(input.containerAction != null && {
      containerAction: se_ContainerDatasetAction(input.containerAction, context),
    }),
    ...(input.queryAction != null && { queryAction: se_SqlQueryDatasetAction(input.queryAction, context) }),
  };
};

/**
 * serializeAws_restJson1DatasetActions
 */
const se_DatasetActions = (input: DatasetAction[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_DatasetAction(entry, context);
    });
};

/**
 * serializeAws_restJson1DatasetContentDeliveryDestination
 */
const se_DatasetContentDeliveryDestination = (
  input: DatasetContentDeliveryDestination,
  context: __SerdeContext
): any => {
  return {
    ...(input.iotEventsDestinationConfiguration != null && {
      iotEventsDestinationConfiguration: se_IotEventsDestinationConfiguration(
        input.iotEventsDestinationConfiguration,
        context
      ),
    }),
    ...(input.s3DestinationConfiguration != null && {
      s3DestinationConfiguration: se_S3DestinationConfiguration(input.s3DestinationConfiguration, context),
    }),
  };
};

/**
 * serializeAws_restJson1DatasetContentDeliveryRule
 */
const se_DatasetContentDeliveryRule = (input: DatasetContentDeliveryRule, context: __SerdeContext): any => {
  return {
    ...(input.destination != null && { destination: se_DatasetContentDeliveryDestination(input.destination, context) }),
    ...(input.entryName != null && { entryName: input.entryName }),
  };
};

/**
 * serializeAws_restJson1DatasetContentDeliveryRules
 */
const se_DatasetContentDeliveryRules = (input: DatasetContentDeliveryRule[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_DatasetContentDeliveryRule(entry, context);
    });
};

/**
 * serializeAws_restJson1DatasetContentVersionValue
 */
const se_DatasetContentVersionValue = (input: DatasetContentVersionValue, context: __SerdeContext): any => {
  return {
    ...(input.datasetName != null && { datasetName: input.datasetName }),
  };
};

/**
 * serializeAws_restJson1DatasetTrigger
 */
const se_DatasetTrigger = (input: DatasetTrigger, context: __SerdeContext): any => {
  return {
    ...(input.dataset != null && { dataset: se_TriggeringDataset(input.dataset, context) }),
    ...(input.schedule != null && { schedule: se_Schedule(input.schedule, context) }),
  };
};

/**
 * serializeAws_restJson1DatasetTriggers
 */
const se_DatasetTriggers = (input: DatasetTrigger[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_DatasetTrigger(entry, context);
    });
};

/**
 * serializeAws_restJson1DatastoreActivity
 */
const se_DatastoreActivity = (input: DatastoreActivity, context: __SerdeContext): any => {
  return {
    ...(input.datastoreName != null && { datastoreName: input.datastoreName }),
    ...(input.name != null && { name: input.name }),
  };
};

/**
 * serializeAws_restJson1DatastoreIotSiteWiseMultiLayerStorage
 */
const se_DatastoreIotSiteWiseMultiLayerStorage = (
  input: DatastoreIotSiteWiseMultiLayerStorage,
  context: __SerdeContext
): any => {
  return {
    ...(input.customerManagedS3Storage != null && {
      customerManagedS3Storage: se_IotSiteWiseCustomerManagedDatastoreS3Storage(
        input.customerManagedS3Storage,
        context
      ),
    }),
  };
};

/**
 * serializeAws_restJson1DatastorePartition
 */
const se_DatastorePartition = (input: DatastorePartition, context: __SerdeContext): any => {
  return {
    ...(input.attributePartition != null && { attributePartition: se_Partition(input.attributePartition, context) }),
    ...(input.timestampPartition != null && {
      timestampPartition: se_TimestampPartition(input.timestampPartition, context),
    }),
  };
};

/**
 * serializeAws_restJson1DatastorePartitions
 */
const se_DatastorePartitions = (input: DatastorePartitions, context: __SerdeContext): any => {
  return {
    ...(input.partitions != null && { partitions: se_Partitions(input.partitions, context) }),
  };
};

/**
 * serializeAws_restJson1DatastoreStorage
 */
const se_DatastoreStorage = (input: DatastoreStorage, context: __SerdeContext): any => {
  return DatastoreStorage.visit(input, {
    customerManagedS3: (value) => ({ customerManagedS3: se_CustomerManagedDatastoreS3Storage(value, context) }),
    iotSiteWiseMultiLayerStorage: (value) => ({
      iotSiteWiseMultiLayerStorage: se_DatastoreIotSiteWiseMultiLayerStorage(value, context),
    }),
    serviceManagedS3: (value) => ({ serviceManagedS3: se_ServiceManagedDatastoreS3Storage(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

/**
 * serializeAws_restJson1DeltaTime
 */
const se_DeltaTime = (input: DeltaTime, context: __SerdeContext): any => {
  return {
    ...(input.offsetSeconds != null && { offsetSeconds: input.offsetSeconds }),
    ...(input.timeExpression != null && { timeExpression: input.timeExpression }),
  };
};

/**
 * serializeAws_restJson1DeltaTimeSessionWindowConfiguration
 */
const se_DeltaTimeSessionWindowConfiguration = (
  input: DeltaTimeSessionWindowConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.timeoutInMinutes != null && { timeoutInMinutes: input.timeoutInMinutes }),
  };
};

/**
 * serializeAws_restJson1DeviceRegistryEnrichActivity
 */
const se_DeviceRegistryEnrichActivity = (input: DeviceRegistryEnrichActivity, context: __SerdeContext): any => {
  return {
    ...(input.attribute != null && { attribute: input.attribute }),
    ...(input.name != null && { name: input.name }),
    ...(input.next != null && { next: input.next }),
    ...(input.roleArn != null && { roleArn: input.roleArn }),
    ...(input.thingName != null && { thingName: input.thingName }),
  };
};

/**
 * serializeAws_restJson1DeviceShadowEnrichActivity
 */
const se_DeviceShadowEnrichActivity = (input: DeviceShadowEnrichActivity, context: __SerdeContext): any => {
  return {
    ...(input.attribute != null && { attribute: input.attribute }),
    ...(input.name != null && { name: input.name }),
    ...(input.next != null && { next: input.next }),
    ...(input.roleArn != null && { roleArn: input.roleArn }),
    ...(input.thingName != null && { thingName: input.thingName }),
  };
};

/**
 * serializeAws_restJson1FileFormatConfiguration
 */
const se_FileFormatConfiguration = (input: FileFormatConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.jsonConfiguration != null && {
      jsonConfiguration: se_JsonConfiguration(input.jsonConfiguration, context),
    }),
    ...(input.parquetConfiguration != null && {
      parquetConfiguration: se_ParquetConfiguration(input.parquetConfiguration, context),
    }),
  };
};

/**
 * serializeAws_restJson1FilterActivity
 */
const se_FilterActivity = (input: FilterActivity, context: __SerdeContext): any => {
  return {
    ...(input.filter != null && { filter: input.filter }),
    ...(input.name != null && { name: input.name }),
    ...(input.next != null && { next: input.next }),
  };
};

/**
 * serializeAws_restJson1GlueConfiguration
 */
const se_GlueConfiguration = (input: GlueConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.databaseName != null && { databaseName: input.databaseName }),
    ...(input.tableName != null && { tableName: input.tableName }),
  };
};

/**
 * serializeAws_restJson1IotEventsDestinationConfiguration
 */
const se_IotEventsDestinationConfiguration = (
  input: IotEventsDestinationConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.inputName != null && { inputName: input.inputName }),
    ...(input.roleArn != null && { roleArn: input.roleArn }),
  };
};

/**
 * serializeAws_restJson1IotSiteWiseCustomerManagedDatastoreS3Storage
 */
const se_IotSiteWiseCustomerManagedDatastoreS3Storage = (
  input: IotSiteWiseCustomerManagedDatastoreS3Storage,
  context: __SerdeContext
): any => {
  return {
    ...(input.bucket != null && { bucket: input.bucket }),
    ...(input.keyPrefix != null && { keyPrefix: input.keyPrefix }),
  };
};

/**
 * serializeAws_restJson1JsonConfiguration
 */
const se_JsonConfiguration = (input: JsonConfiguration, context: __SerdeContext): any => {
  return {};
};

/**
 * serializeAws_restJson1LambdaActivity
 */
const se_LambdaActivity = (input: LambdaActivity, context: __SerdeContext): any => {
  return {
    ...(input.batchSize != null && { batchSize: input.batchSize }),
    ...(input.lambdaName != null && { lambdaName: input.lambdaName }),
    ...(input.name != null && { name: input.name }),
    ...(input.next != null && { next: input.next }),
  };
};

/**
 * serializeAws_restJson1LateDataRule
 */
const se_LateDataRule = (input: LateDataRule, context: __SerdeContext): any => {
  return {
    ...(input.ruleConfiguration != null && {
      ruleConfiguration: se_LateDataRuleConfiguration(input.ruleConfiguration, context),
    }),
    ...(input.ruleName != null && { ruleName: input.ruleName }),
  };
};

/**
 * serializeAws_restJson1LateDataRuleConfiguration
 */
const se_LateDataRuleConfiguration = (input: LateDataRuleConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.deltaTimeSessionWindowConfiguration != null && {
      deltaTimeSessionWindowConfiguration: se_DeltaTimeSessionWindowConfiguration(
        input.deltaTimeSessionWindowConfiguration,
        context
      ),
    }),
  };
};

/**
 * serializeAws_restJson1LateDataRules
 */
const se_LateDataRules = (input: LateDataRule[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_LateDataRule(entry, context);
    });
};

/**
 * serializeAws_restJson1LoggingOptions
 */
const se_LoggingOptions = (input: LoggingOptions, context: __SerdeContext): any => {
  return {
    ...(input.enabled != null && { enabled: input.enabled }),
    ...(input.level != null && { level: input.level }),
    ...(input.roleArn != null && { roleArn: input.roleArn }),
  };
};

/**
 * serializeAws_restJson1MathActivity
 */
const se_MathActivity = (input: MathActivity, context: __SerdeContext): any => {
  return {
    ...(input.attribute != null && { attribute: input.attribute }),
    ...(input.math != null && { math: input.math }),
    ...(input.name != null && { name: input.name }),
    ...(input.next != null && { next: input.next }),
  };
};

/**
 * serializeAws_restJson1Message
 */
const se_Message = (input: Message, context: __SerdeContext): any => {
  return {
    ...(input.messageId != null && { messageId: input.messageId }),
    ...(input.payload != null && { payload: context.base64Encoder(input.payload) }),
  };
};

/**
 * serializeAws_restJson1MessagePayloads
 */
const se_MessagePayloads = (input: Uint8Array[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return context.base64Encoder(entry);
    });
};

/**
 * serializeAws_restJson1Messages
 */
const se_Messages = (input: Message[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Message(entry, context);
    });
};

/**
 * serializeAws_restJson1OutputFileUriValue
 */
const se_OutputFileUriValue = (input: OutputFileUriValue, context: __SerdeContext): any => {
  return {
    ...(input.fileName != null && { fileName: input.fileName }),
  };
};

/**
 * serializeAws_restJson1ParquetConfiguration
 */
const se_ParquetConfiguration = (input: ParquetConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.schemaDefinition != null && { schemaDefinition: se_SchemaDefinition(input.schemaDefinition, context) }),
  };
};

/**
 * serializeAws_restJson1Partition
 */
const se_Partition = (input: Partition, context: __SerdeContext): any => {
  return {
    ...(input.attributeName != null && { attributeName: input.attributeName }),
  };
};

/**
 * serializeAws_restJson1Partitions
 */
const se_Partitions = (input: DatastorePartition[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_DatastorePartition(entry, context);
    });
};

/**
 * serializeAws_restJson1PipelineActivities
 */
const se_PipelineActivities = (input: PipelineActivity[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_PipelineActivity(entry, context);
    });
};

/**
 * serializeAws_restJson1PipelineActivity
 */
const se_PipelineActivity = (input: PipelineActivity, context: __SerdeContext): any => {
  return {
    ...(input.addAttributes != null && { addAttributes: se_AddAttributesActivity(input.addAttributes, context) }),
    ...(input.channel != null && { channel: se_ChannelActivity(input.channel, context) }),
    ...(input.datastore != null && { datastore: se_DatastoreActivity(input.datastore, context) }),
    ...(input.deviceRegistryEnrich != null && {
      deviceRegistryEnrich: se_DeviceRegistryEnrichActivity(input.deviceRegistryEnrich, context),
    }),
    ...(input.deviceShadowEnrich != null && {
      deviceShadowEnrich: se_DeviceShadowEnrichActivity(input.deviceShadowEnrich, context),
    }),
    ...(input.filter != null && { filter: se_FilterActivity(input.filter, context) }),
    ...(input.lambda != null && { lambda: se_LambdaActivity(input.lambda, context) }),
    ...(input.math != null && { math: se_MathActivity(input.math, context) }),
    ...(input.removeAttributes != null && {
      removeAttributes: se_RemoveAttributesActivity(input.removeAttributes, context),
    }),
    ...(input.selectAttributes != null && {
      selectAttributes: se_SelectAttributesActivity(input.selectAttributes, context),
    }),
  };
};

/**
 * serializeAws_restJson1QueryFilter
 */
const se_QueryFilter = (input: QueryFilter, context: __SerdeContext): any => {
  return {
    ...(input.deltaTime != null && { deltaTime: se_DeltaTime(input.deltaTime, context) }),
  };
};

/**
 * serializeAws_restJson1QueryFilters
 */
const se_QueryFilters = (input: QueryFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_QueryFilter(entry, context);
    });
};

/**
 * serializeAws_restJson1RemoveAttributesActivity
 */
const se_RemoveAttributesActivity = (input: RemoveAttributesActivity, context: __SerdeContext): any => {
  return {
    ...(input.attributes != null && { attributes: se_AttributeNames(input.attributes, context) }),
    ...(input.name != null && { name: input.name }),
    ...(input.next != null && { next: input.next }),
  };
};

/**
 * serializeAws_restJson1ResourceConfiguration
 */
const se_ResourceConfiguration = (input: ResourceConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.computeType != null && { computeType: input.computeType }),
    ...(input.volumeSizeInGB != null && { volumeSizeInGB: input.volumeSizeInGB }),
  };
};

/**
 * serializeAws_restJson1RetentionPeriod
 */
const se_RetentionPeriod = (input: RetentionPeriod, context: __SerdeContext): any => {
  return {
    ...(input.numberOfDays != null && { numberOfDays: input.numberOfDays }),
    ...(input.unlimited != null && { unlimited: input.unlimited }),
  };
};

/**
 * serializeAws_restJson1S3DestinationConfiguration
 */
const se_S3DestinationConfiguration = (input: S3DestinationConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.bucket != null && { bucket: input.bucket }),
    ...(input.glueConfiguration != null && {
      glueConfiguration: se_GlueConfiguration(input.glueConfiguration, context),
    }),
    ...(input.key != null && { key: input.key }),
    ...(input.roleArn != null && { roleArn: input.roleArn }),
  };
};

/**
 * serializeAws_restJson1S3PathChannelMessages
 */
const se_S3PathChannelMessages = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1Schedule
 */
const se_Schedule = (input: Schedule, context: __SerdeContext): any => {
  return {
    ...(input.expression != null && { expression: input.expression }),
  };
};

/**
 * serializeAws_restJson1SchemaDefinition
 */
const se_SchemaDefinition = (input: SchemaDefinition, context: __SerdeContext): any => {
  return {
    ...(input.columns != null && { columns: se_Columns(input.columns, context) }),
  };
};

/**
 * serializeAws_restJson1SelectAttributesActivity
 */
const se_SelectAttributesActivity = (input: SelectAttributesActivity, context: __SerdeContext): any => {
  return {
    ...(input.attributes != null && { attributes: se_AttributeNames(input.attributes, context) }),
    ...(input.name != null && { name: input.name }),
    ...(input.next != null && { next: input.next }),
  };
};

/**
 * serializeAws_restJson1ServiceManagedChannelS3Storage
 */
const se_ServiceManagedChannelS3Storage = (input: ServiceManagedChannelS3Storage, context: __SerdeContext): any => {
  return {};
};

/**
 * serializeAws_restJson1ServiceManagedDatastoreS3Storage
 */
const se_ServiceManagedDatastoreS3Storage = (input: ServiceManagedDatastoreS3Storage, context: __SerdeContext): any => {
  return {};
};

/**
 * serializeAws_restJson1SqlQueryDatasetAction
 */
const se_SqlQueryDatasetAction = (input: SqlQueryDatasetAction, context: __SerdeContext): any => {
  return {
    ...(input.filters != null && { filters: se_QueryFilters(input.filters, context) }),
    ...(input.sqlQuery != null && { sqlQuery: input.sqlQuery }),
  };
};

/**
 * serializeAws_restJson1Tag
 */
const se_Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.key != null && { key: input.key }),
    ...(input.value != null && { value: input.value }),
  };
};

/**
 * serializeAws_restJson1TagList
 */
const se_TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Tag(entry, context);
    });
};

/**
 * serializeAws_restJson1TimestampPartition
 */
const se_TimestampPartition = (input: TimestampPartition, context: __SerdeContext): any => {
  return {
    ...(input.attributeName != null && { attributeName: input.attributeName }),
    ...(input.timestampFormat != null && { timestampFormat: input.timestampFormat }),
  };
};

/**
 * serializeAws_restJson1TriggeringDataset
 */
const se_TriggeringDataset = (input: TriggeringDataset, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
  };
};

/**
 * serializeAws_restJson1Variable
 */
const se_Variable = (input: Variable, context: __SerdeContext): any => {
  return {
    ...(input.datasetContentVersionValue != null && {
      datasetContentVersionValue: se_DatasetContentVersionValue(input.datasetContentVersionValue, context),
    }),
    ...(input.doubleValue != null && { doubleValue: __serializeFloat(input.doubleValue) }),
    ...(input.name != null && { name: input.name }),
    ...(input.outputFileUriValue != null && {
      outputFileUriValue: se_OutputFileUriValue(input.outputFileUriValue, context),
    }),
    ...(input.stringValue != null && { stringValue: input.stringValue }),
  };
};

/**
 * serializeAws_restJson1Variables
 */
const se_Variables = (input: Variable[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Variable(entry, context);
    });
};

/**
 * serializeAws_restJson1VersioningConfiguration
 */
const se_VersioningConfiguration = (input: VersioningConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.maxVersions != null && { maxVersions: input.maxVersions }),
    ...(input.unlimited != null && { unlimited: input.unlimited }),
  };
};

/**
 * deserializeAws_restJson1AddAttributesActivity
 */
const de_AddAttributesActivity = (output: any, context: __SerdeContext): AddAttributesActivity => {
  return {
    attributes: output.attributes != null ? de_AttributeNameMapping(output.attributes, context) : undefined,
    name: __expectString(output.name),
    next: __expectString(output.next),
  } as any;
};

/**
 * deserializeAws_restJson1AttributeNameMapping
 */
const de_AttributeNameMapping = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1AttributeNames
 */
const de_AttributeNames = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1BatchPutMessageErrorEntries
 */
const de_BatchPutMessageErrorEntries = (output: any, context: __SerdeContext): BatchPutMessageErrorEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BatchPutMessageErrorEntry(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1BatchPutMessageErrorEntry
 */
const de_BatchPutMessageErrorEntry = (output: any, context: __SerdeContext): BatchPutMessageErrorEntry => {
  return {
    errorCode: __expectString(output.errorCode),
    errorMessage: __expectString(output.errorMessage),
    messageId: __expectString(output.messageId),
  } as any;
};

/**
 * deserializeAws_restJson1Channel
 */
const de_Channel = (output: any, context: __SerdeContext): Channel => {
  return {
    arn: __expectString(output.arn),
    creationTime:
      output.creationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationTime)))
        : undefined,
    lastMessageArrivalTime:
      output.lastMessageArrivalTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastMessageArrivalTime)))
        : undefined,
    lastUpdateTime:
      output.lastUpdateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdateTime)))
        : undefined,
    name: __expectString(output.name),
    retentionPeriod: output.retentionPeriod != null ? de_RetentionPeriod(output.retentionPeriod, context) : undefined,
    status: __expectString(output.status),
    storage: output.storage != null ? de_ChannelStorage(output.storage, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ChannelActivity
 */
const de_ChannelActivity = (output: any, context: __SerdeContext): ChannelActivity => {
  return {
    channelName: __expectString(output.channelName),
    name: __expectString(output.name),
    next: __expectString(output.next),
  } as any;
};

/**
 * deserializeAws_restJson1ChannelStatistics
 */
const de_ChannelStatistics = (output: any, context: __SerdeContext): ChannelStatistics => {
  return {
    size: output.size != null ? de_EstimatedResourceSize(output.size, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ChannelStorage
 */
const de_ChannelStorage = (output: any, context: __SerdeContext): ChannelStorage => {
  return {
    customerManagedS3:
      output.customerManagedS3 != null
        ? de_CustomerManagedChannelS3Storage(output.customerManagedS3, context)
        : undefined,
    serviceManagedS3:
      output.serviceManagedS3 != null ? de_ServiceManagedChannelS3Storage(output.serviceManagedS3, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ChannelStorageSummary
 */
const de_ChannelStorageSummary = (output: any, context: __SerdeContext): ChannelStorageSummary => {
  return {
    customerManagedS3:
      output.customerManagedS3 != null
        ? de_CustomerManagedChannelS3StorageSummary(output.customerManagedS3, context)
        : undefined,
    serviceManagedS3:
      output.serviceManagedS3 != null
        ? de_ServiceManagedChannelS3StorageSummary(output.serviceManagedS3, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ChannelSummaries
 */
const de_ChannelSummaries = (output: any, context: __SerdeContext): ChannelSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ChannelSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ChannelSummary
 */
const de_ChannelSummary = (output: any, context: __SerdeContext): ChannelSummary => {
  return {
    channelName: __expectString(output.channelName),
    channelStorage:
      output.channelStorage != null ? de_ChannelStorageSummary(output.channelStorage, context) : undefined,
    creationTime:
      output.creationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationTime)))
        : undefined,
    lastMessageArrivalTime:
      output.lastMessageArrivalTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastMessageArrivalTime)))
        : undefined,
    lastUpdateTime:
      output.lastUpdateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdateTime)))
        : undefined,
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_restJson1Column
 */
const de_Column = (output: any, context: __SerdeContext): Column => {
  return {
    name: __expectString(output.name),
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_restJson1Columns
 */
const de_Columns = (output: any, context: __SerdeContext): Column[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Column(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ContainerDatasetAction
 */
const de_ContainerDatasetAction = (output: any, context: __SerdeContext): ContainerDatasetAction => {
  return {
    executionRoleArn: __expectString(output.executionRoleArn),
    image: __expectString(output.image),
    resourceConfiguration:
      output.resourceConfiguration != null
        ? de_ResourceConfiguration(output.resourceConfiguration, context)
        : undefined,
    variables: output.variables != null ? de_Variables(output.variables, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1CustomerManagedChannelS3Storage
 */
const de_CustomerManagedChannelS3Storage = (output: any, context: __SerdeContext): CustomerManagedChannelS3Storage => {
  return {
    bucket: __expectString(output.bucket),
    keyPrefix: __expectString(output.keyPrefix),
    roleArn: __expectString(output.roleArn),
  } as any;
};

/**
 * deserializeAws_restJson1CustomerManagedChannelS3StorageSummary
 */
const de_CustomerManagedChannelS3StorageSummary = (
  output: any,
  context: __SerdeContext
): CustomerManagedChannelS3StorageSummary => {
  return {
    bucket: __expectString(output.bucket),
    keyPrefix: __expectString(output.keyPrefix),
    roleArn: __expectString(output.roleArn),
  } as any;
};

/**
 * deserializeAws_restJson1CustomerManagedDatastoreS3Storage
 */
const de_CustomerManagedDatastoreS3Storage = (
  output: any,
  context: __SerdeContext
): CustomerManagedDatastoreS3Storage => {
  return {
    bucket: __expectString(output.bucket),
    keyPrefix: __expectString(output.keyPrefix),
    roleArn: __expectString(output.roleArn),
  } as any;
};

/**
 * deserializeAws_restJson1CustomerManagedDatastoreS3StorageSummary
 */
const de_CustomerManagedDatastoreS3StorageSummary = (
  output: any,
  context: __SerdeContext
): CustomerManagedDatastoreS3StorageSummary => {
  return {
    bucket: __expectString(output.bucket),
    keyPrefix: __expectString(output.keyPrefix),
    roleArn: __expectString(output.roleArn),
  } as any;
};

/**
 * deserializeAws_restJson1Dataset
 */
const de_Dataset = (output: any, context: __SerdeContext): Dataset => {
  return {
    actions: output.actions != null ? de_DatasetActions(output.actions, context) : undefined,
    arn: __expectString(output.arn),
    contentDeliveryRules:
      output.contentDeliveryRules != null
        ? de_DatasetContentDeliveryRules(output.contentDeliveryRules, context)
        : undefined,
    creationTime:
      output.creationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationTime)))
        : undefined,
    lastUpdateTime:
      output.lastUpdateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdateTime)))
        : undefined,
    lateDataRules: output.lateDataRules != null ? de_LateDataRules(output.lateDataRules, context) : undefined,
    name: __expectString(output.name),
    retentionPeriod: output.retentionPeriod != null ? de_RetentionPeriod(output.retentionPeriod, context) : undefined,
    status: __expectString(output.status),
    triggers: output.triggers != null ? de_DatasetTriggers(output.triggers, context) : undefined,
    versioningConfiguration:
      output.versioningConfiguration != null
        ? de_VersioningConfiguration(output.versioningConfiguration, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1DatasetAction
 */
const de_DatasetAction = (output: any, context: __SerdeContext): DatasetAction => {
  return {
    actionName: __expectString(output.actionName),
    containerAction:
      output.containerAction != null ? de_ContainerDatasetAction(output.containerAction, context) : undefined,
    queryAction: output.queryAction != null ? de_SqlQueryDatasetAction(output.queryAction, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1DatasetActions
 */
const de_DatasetActions = (output: any, context: __SerdeContext): DatasetAction[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DatasetAction(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DatasetActionSummaries
 */
const de_DatasetActionSummaries = (output: any, context: __SerdeContext): DatasetActionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DatasetActionSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DatasetActionSummary
 */
const de_DatasetActionSummary = (output: any, context: __SerdeContext): DatasetActionSummary => {
  return {
    actionName: __expectString(output.actionName),
    actionType: __expectString(output.actionType),
  } as any;
};

/**
 * deserializeAws_restJson1DatasetContentDeliveryDestination
 */
const de_DatasetContentDeliveryDestination = (
  output: any,
  context: __SerdeContext
): DatasetContentDeliveryDestination => {
  return {
    iotEventsDestinationConfiguration:
      output.iotEventsDestinationConfiguration != null
        ? de_IotEventsDestinationConfiguration(output.iotEventsDestinationConfiguration, context)
        : undefined,
    s3DestinationConfiguration:
      output.s3DestinationConfiguration != null
        ? de_S3DestinationConfiguration(output.s3DestinationConfiguration, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1DatasetContentDeliveryRule
 */
const de_DatasetContentDeliveryRule = (output: any, context: __SerdeContext): DatasetContentDeliveryRule => {
  return {
    destination:
      output.destination != null ? de_DatasetContentDeliveryDestination(output.destination, context) : undefined,
    entryName: __expectString(output.entryName),
  } as any;
};

/**
 * deserializeAws_restJson1DatasetContentDeliveryRules
 */
const de_DatasetContentDeliveryRules = (output: any, context: __SerdeContext): DatasetContentDeliveryRule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DatasetContentDeliveryRule(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DatasetContentStatus
 */
const de_DatasetContentStatus = (output: any, context: __SerdeContext): DatasetContentStatus => {
  return {
    reason: __expectString(output.reason),
    state: __expectString(output.state),
  } as any;
};

/**
 * deserializeAws_restJson1DatasetContentSummaries
 */
const de_DatasetContentSummaries = (output: any, context: __SerdeContext): DatasetContentSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DatasetContentSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DatasetContentSummary
 */
const de_DatasetContentSummary = (output: any, context: __SerdeContext): DatasetContentSummary => {
  return {
    completionTime:
      output.completionTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.completionTime)))
        : undefined,
    creationTime:
      output.creationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationTime)))
        : undefined,
    scheduleTime:
      output.scheduleTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.scheduleTime)))
        : undefined,
    status: output.status != null ? de_DatasetContentStatus(output.status, context) : undefined,
    version: __expectString(output.version),
  } as any;
};

/**
 * deserializeAws_restJson1DatasetContentVersionValue
 */
const de_DatasetContentVersionValue = (output: any, context: __SerdeContext): DatasetContentVersionValue => {
  return {
    datasetName: __expectString(output.datasetName),
  } as any;
};

/**
 * deserializeAws_restJson1DatasetEntries
 */
const de_DatasetEntries = (output: any, context: __SerdeContext): DatasetEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DatasetEntry(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DatasetEntry
 */
const de_DatasetEntry = (output: any, context: __SerdeContext): DatasetEntry => {
  return {
    dataURI: __expectString(output.dataURI),
    entryName: __expectString(output.entryName),
  } as any;
};

/**
 * deserializeAws_restJson1DatasetSummaries
 */
const de_DatasetSummaries = (output: any, context: __SerdeContext): DatasetSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DatasetSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DatasetSummary
 */
const de_DatasetSummary = (output: any, context: __SerdeContext): DatasetSummary => {
  return {
    actions: output.actions != null ? de_DatasetActionSummaries(output.actions, context) : undefined,
    creationTime:
      output.creationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationTime)))
        : undefined,
    datasetName: __expectString(output.datasetName),
    lastUpdateTime:
      output.lastUpdateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdateTime)))
        : undefined,
    status: __expectString(output.status),
    triggers: output.triggers != null ? de_DatasetTriggers(output.triggers, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1DatasetTrigger
 */
const de_DatasetTrigger = (output: any, context: __SerdeContext): DatasetTrigger => {
  return {
    dataset: output.dataset != null ? de_TriggeringDataset(output.dataset, context) : undefined,
    schedule: output.schedule != null ? de_Schedule(output.schedule, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1DatasetTriggers
 */
const de_DatasetTriggers = (output: any, context: __SerdeContext): DatasetTrigger[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DatasetTrigger(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Datastore
 */
const de_Datastore = (output: any, context: __SerdeContext): Datastore => {
  return {
    arn: __expectString(output.arn),
    creationTime:
      output.creationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationTime)))
        : undefined,
    datastorePartitions:
      output.datastorePartitions != null ? de_DatastorePartitions(output.datastorePartitions, context) : undefined,
    fileFormatConfiguration:
      output.fileFormatConfiguration != null
        ? de_FileFormatConfiguration(output.fileFormatConfiguration, context)
        : undefined,
    lastMessageArrivalTime:
      output.lastMessageArrivalTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastMessageArrivalTime)))
        : undefined,
    lastUpdateTime:
      output.lastUpdateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdateTime)))
        : undefined,
    name: __expectString(output.name),
    retentionPeriod: output.retentionPeriod != null ? de_RetentionPeriod(output.retentionPeriod, context) : undefined,
    status: __expectString(output.status),
    storage: output.storage != null ? de_DatastoreStorage(__expectUnion(output.storage), context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1DatastoreActivity
 */
const de_DatastoreActivity = (output: any, context: __SerdeContext): DatastoreActivity => {
  return {
    datastoreName: __expectString(output.datastoreName),
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_restJson1DatastoreIotSiteWiseMultiLayerStorage
 */
const de_DatastoreIotSiteWiseMultiLayerStorage = (
  output: any,
  context: __SerdeContext
): DatastoreIotSiteWiseMultiLayerStorage => {
  return {
    customerManagedS3Storage:
      output.customerManagedS3Storage != null
        ? de_IotSiteWiseCustomerManagedDatastoreS3Storage(output.customerManagedS3Storage, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1DatastoreIotSiteWiseMultiLayerStorageSummary
 */
const de_DatastoreIotSiteWiseMultiLayerStorageSummary = (
  output: any,
  context: __SerdeContext
): DatastoreIotSiteWiseMultiLayerStorageSummary => {
  return {
    customerManagedS3Storage:
      output.customerManagedS3Storage != null
        ? de_IotSiteWiseCustomerManagedDatastoreS3StorageSummary(output.customerManagedS3Storage, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1DatastorePartition
 */
const de_DatastorePartition = (output: any, context: __SerdeContext): DatastorePartition => {
  return {
    attributePartition:
      output.attributePartition != null ? de_Partition(output.attributePartition, context) : undefined,
    timestampPartition:
      output.timestampPartition != null ? de_TimestampPartition(output.timestampPartition, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1DatastorePartitions
 */
const de_DatastorePartitions = (output: any, context: __SerdeContext): DatastorePartitions => {
  return {
    partitions: output.partitions != null ? de_Partitions(output.partitions, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1DatastoreStatistics
 */
const de_DatastoreStatistics = (output: any, context: __SerdeContext): DatastoreStatistics => {
  return {
    size: output.size != null ? de_EstimatedResourceSize(output.size, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1DatastoreStorage
 */
const de_DatastoreStorage = (output: any, context: __SerdeContext): DatastoreStorage => {
  if (output.customerManagedS3 != null) {
    return {
      customerManagedS3: de_CustomerManagedDatastoreS3Storage(output.customerManagedS3, context),
    };
  }
  if (output.iotSiteWiseMultiLayerStorage != null) {
    return {
      iotSiteWiseMultiLayerStorage: de_DatastoreIotSiteWiseMultiLayerStorage(
        output.iotSiteWiseMultiLayerStorage,
        context
      ),
    };
  }
  if (output.serviceManagedS3 != null) {
    return {
      serviceManagedS3: de_ServiceManagedDatastoreS3Storage(output.serviceManagedS3, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1DatastoreStorageSummary
 */
const de_DatastoreStorageSummary = (output: any, context: __SerdeContext): DatastoreStorageSummary => {
  return {
    customerManagedS3:
      output.customerManagedS3 != null
        ? de_CustomerManagedDatastoreS3StorageSummary(output.customerManagedS3, context)
        : undefined,
    iotSiteWiseMultiLayerStorage:
      output.iotSiteWiseMultiLayerStorage != null
        ? de_DatastoreIotSiteWiseMultiLayerStorageSummary(output.iotSiteWiseMultiLayerStorage, context)
        : undefined,
    serviceManagedS3:
      output.serviceManagedS3 != null
        ? de_ServiceManagedDatastoreS3StorageSummary(output.serviceManagedS3, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1DatastoreSummaries
 */
const de_DatastoreSummaries = (output: any, context: __SerdeContext): DatastoreSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DatastoreSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DatastoreSummary
 */
const de_DatastoreSummary = (output: any, context: __SerdeContext): DatastoreSummary => {
  return {
    creationTime:
      output.creationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationTime)))
        : undefined,
    datastoreName: __expectString(output.datastoreName),
    datastorePartitions:
      output.datastorePartitions != null ? de_DatastorePartitions(output.datastorePartitions, context) : undefined,
    datastoreStorage:
      output.datastoreStorage != null ? de_DatastoreStorageSummary(output.datastoreStorage, context) : undefined,
    fileFormatType: __expectString(output.fileFormatType),
    lastMessageArrivalTime:
      output.lastMessageArrivalTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastMessageArrivalTime)))
        : undefined,
    lastUpdateTime:
      output.lastUpdateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdateTime)))
        : undefined,
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_restJson1DeltaTime
 */
const de_DeltaTime = (output: any, context: __SerdeContext): DeltaTime => {
  return {
    offsetSeconds: __expectInt32(output.offsetSeconds),
    timeExpression: __expectString(output.timeExpression),
  } as any;
};

/**
 * deserializeAws_restJson1DeltaTimeSessionWindowConfiguration
 */
const de_DeltaTimeSessionWindowConfiguration = (
  output: any,
  context: __SerdeContext
): DeltaTimeSessionWindowConfiguration => {
  return {
    timeoutInMinutes: __expectInt32(output.timeoutInMinutes),
  } as any;
};

/**
 * deserializeAws_restJson1DeviceRegistryEnrichActivity
 */
const de_DeviceRegistryEnrichActivity = (output: any, context: __SerdeContext): DeviceRegistryEnrichActivity => {
  return {
    attribute: __expectString(output.attribute),
    name: __expectString(output.name),
    next: __expectString(output.next),
    roleArn: __expectString(output.roleArn),
    thingName: __expectString(output.thingName),
  } as any;
};

/**
 * deserializeAws_restJson1DeviceShadowEnrichActivity
 */
const de_DeviceShadowEnrichActivity = (output: any, context: __SerdeContext): DeviceShadowEnrichActivity => {
  return {
    attribute: __expectString(output.attribute),
    name: __expectString(output.name),
    next: __expectString(output.next),
    roleArn: __expectString(output.roleArn),
    thingName: __expectString(output.thingName),
  } as any;
};

/**
 * deserializeAws_restJson1EstimatedResourceSize
 */
const de_EstimatedResourceSize = (output: any, context: __SerdeContext): EstimatedResourceSize => {
  return {
    estimatedOn:
      output.estimatedOn != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.estimatedOn)))
        : undefined,
    estimatedSizeInBytes: __limitedParseDouble(output.estimatedSizeInBytes),
  } as any;
};

/**
 * deserializeAws_restJson1FileFormatConfiguration
 */
const de_FileFormatConfiguration = (output: any, context: __SerdeContext): FileFormatConfiguration => {
  return {
    jsonConfiguration:
      output.jsonConfiguration != null ? de_JsonConfiguration(output.jsonConfiguration, context) : undefined,
    parquetConfiguration:
      output.parquetConfiguration != null ? de_ParquetConfiguration(output.parquetConfiguration, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1FilterActivity
 */
const de_FilterActivity = (output: any, context: __SerdeContext): FilterActivity => {
  return {
    filter: __expectString(output.filter),
    name: __expectString(output.name),
    next: __expectString(output.next),
  } as any;
};

/**
 * deserializeAws_restJson1GlueConfiguration
 */
const de_GlueConfiguration = (output: any, context: __SerdeContext): GlueConfiguration => {
  return {
    databaseName: __expectString(output.databaseName),
    tableName: __expectString(output.tableName),
  } as any;
};

/**
 * deserializeAws_restJson1IotEventsDestinationConfiguration
 */
const de_IotEventsDestinationConfiguration = (
  output: any,
  context: __SerdeContext
): IotEventsDestinationConfiguration => {
  return {
    inputName: __expectString(output.inputName),
    roleArn: __expectString(output.roleArn),
  } as any;
};

/**
 * deserializeAws_restJson1IotSiteWiseCustomerManagedDatastoreS3Storage
 */
const de_IotSiteWiseCustomerManagedDatastoreS3Storage = (
  output: any,
  context: __SerdeContext
): IotSiteWiseCustomerManagedDatastoreS3Storage => {
  return {
    bucket: __expectString(output.bucket),
    keyPrefix: __expectString(output.keyPrefix),
  } as any;
};

/**
 * deserializeAws_restJson1IotSiteWiseCustomerManagedDatastoreS3StorageSummary
 */
const de_IotSiteWiseCustomerManagedDatastoreS3StorageSummary = (
  output: any,
  context: __SerdeContext
): IotSiteWiseCustomerManagedDatastoreS3StorageSummary => {
  return {
    bucket: __expectString(output.bucket),
    keyPrefix: __expectString(output.keyPrefix),
  } as any;
};

/**
 * deserializeAws_restJson1JsonConfiguration
 */
const de_JsonConfiguration = (output: any, context: __SerdeContext): JsonConfiguration => {
  return {} as any;
};

/**
 * deserializeAws_restJson1LambdaActivity
 */
const de_LambdaActivity = (output: any, context: __SerdeContext): LambdaActivity => {
  return {
    batchSize: __expectInt32(output.batchSize),
    lambdaName: __expectString(output.lambdaName),
    name: __expectString(output.name),
    next: __expectString(output.next),
  } as any;
};

/**
 * deserializeAws_restJson1LateDataRule
 */
const de_LateDataRule = (output: any, context: __SerdeContext): LateDataRule => {
  return {
    ruleConfiguration:
      output.ruleConfiguration != null ? de_LateDataRuleConfiguration(output.ruleConfiguration, context) : undefined,
    ruleName: __expectString(output.ruleName),
  } as any;
};

/**
 * deserializeAws_restJson1LateDataRuleConfiguration
 */
const de_LateDataRuleConfiguration = (output: any, context: __SerdeContext): LateDataRuleConfiguration => {
  return {
    deltaTimeSessionWindowConfiguration:
      output.deltaTimeSessionWindowConfiguration != null
        ? de_DeltaTimeSessionWindowConfiguration(output.deltaTimeSessionWindowConfiguration, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1LateDataRules
 */
const de_LateDataRules = (output: any, context: __SerdeContext): LateDataRule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_LateDataRule(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1LoggingOptions
 */
const de_LoggingOptions = (output: any, context: __SerdeContext): LoggingOptions => {
  return {
    enabled: __expectBoolean(output.enabled),
    level: __expectString(output.level),
    roleArn: __expectString(output.roleArn),
  } as any;
};

/**
 * deserializeAws_restJson1MathActivity
 */
const de_MathActivity = (output: any, context: __SerdeContext): MathActivity => {
  return {
    attribute: __expectString(output.attribute),
    math: __expectString(output.math),
    name: __expectString(output.name),
    next: __expectString(output.next),
  } as any;
};

/**
 * deserializeAws_restJson1MessagePayloads
 */
const de_MessagePayloads = (output: any, context: __SerdeContext): Uint8Array[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return context.base64Decoder(entry);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1OutputFileUriValue
 */
const de_OutputFileUriValue = (output: any, context: __SerdeContext): OutputFileUriValue => {
  return {
    fileName: __expectString(output.fileName),
  } as any;
};

/**
 * deserializeAws_restJson1ParquetConfiguration
 */
const de_ParquetConfiguration = (output: any, context: __SerdeContext): ParquetConfiguration => {
  return {
    schemaDefinition:
      output.schemaDefinition != null ? de_SchemaDefinition(output.schemaDefinition, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1Partition
 */
const de_Partition = (output: any, context: __SerdeContext): Partition => {
  return {
    attributeName: __expectString(output.attributeName),
  } as any;
};

/**
 * deserializeAws_restJson1Partitions
 */
const de_Partitions = (output: any, context: __SerdeContext): DatastorePartition[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DatastorePartition(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Pipeline
 */
const de_Pipeline = (output: any, context: __SerdeContext): Pipeline => {
  return {
    activities: output.activities != null ? de_PipelineActivities(output.activities, context) : undefined,
    arn: __expectString(output.arn),
    creationTime:
      output.creationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationTime)))
        : undefined,
    lastUpdateTime:
      output.lastUpdateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdateTime)))
        : undefined,
    name: __expectString(output.name),
    reprocessingSummaries:
      output.reprocessingSummaries != null
        ? de_ReprocessingSummaries(output.reprocessingSummaries, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1PipelineActivities
 */
const de_PipelineActivities = (output: any, context: __SerdeContext): PipelineActivity[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PipelineActivity(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1PipelineActivity
 */
const de_PipelineActivity = (output: any, context: __SerdeContext): PipelineActivity => {
  return {
    addAttributes: output.addAttributes != null ? de_AddAttributesActivity(output.addAttributes, context) : undefined,
    channel: output.channel != null ? de_ChannelActivity(output.channel, context) : undefined,
    datastore: output.datastore != null ? de_DatastoreActivity(output.datastore, context) : undefined,
    deviceRegistryEnrich:
      output.deviceRegistryEnrich != null
        ? de_DeviceRegistryEnrichActivity(output.deviceRegistryEnrich, context)
        : undefined,
    deviceShadowEnrich:
      output.deviceShadowEnrich != null ? de_DeviceShadowEnrichActivity(output.deviceShadowEnrich, context) : undefined,
    filter: output.filter != null ? de_FilterActivity(output.filter, context) : undefined,
    lambda: output.lambda != null ? de_LambdaActivity(output.lambda, context) : undefined,
    math: output.math != null ? de_MathActivity(output.math, context) : undefined,
    removeAttributes:
      output.removeAttributes != null ? de_RemoveAttributesActivity(output.removeAttributes, context) : undefined,
    selectAttributes:
      output.selectAttributes != null ? de_SelectAttributesActivity(output.selectAttributes, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1PipelineSummaries
 */
const de_PipelineSummaries = (output: any, context: __SerdeContext): PipelineSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PipelineSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1PipelineSummary
 */
const de_PipelineSummary = (output: any, context: __SerdeContext): PipelineSummary => {
  return {
    creationTime:
      output.creationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationTime)))
        : undefined,
    lastUpdateTime:
      output.lastUpdateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdateTime)))
        : undefined,
    pipelineName: __expectString(output.pipelineName),
    reprocessingSummaries:
      output.reprocessingSummaries != null
        ? de_ReprocessingSummaries(output.reprocessingSummaries, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1QueryFilter
 */
const de_QueryFilter = (output: any, context: __SerdeContext): QueryFilter => {
  return {
    deltaTime: output.deltaTime != null ? de_DeltaTime(output.deltaTime, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1QueryFilters
 */
const de_QueryFilters = (output: any, context: __SerdeContext): QueryFilter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_QueryFilter(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1RemoveAttributesActivity
 */
const de_RemoveAttributesActivity = (output: any, context: __SerdeContext): RemoveAttributesActivity => {
  return {
    attributes: output.attributes != null ? de_AttributeNames(output.attributes, context) : undefined,
    name: __expectString(output.name),
    next: __expectString(output.next),
  } as any;
};

/**
 * deserializeAws_restJson1ReprocessingSummaries
 */
const de_ReprocessingSummaries = (output: any, context: __SerdeContext): ReprocessingSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ReprocessingSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ReprocessingSummary
 */
const de_ReprocessingSummary = (output: any, context: __SerdeContext): ReprocessingSummary => {
  return {
    creationTime:
      output.creationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationTime)))
        : undefined,
    id: __expectString(output.id),
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_restJson1ResourceConfiguration
 */
const de_ResourceConfiguration = (output: any, context: __SerdeContext): ResourceConfiguration => {
  return {
    computeType: __expectString(output.computeType),
    volumeSizeInGB: __expectInt32(output.volumeSizeInGB),
  } as any;
};

/**
 * deserializeAws_restJson1RetentionPeriod
 */
const de_RetentionPeriod = (output: any, context: __SerdeContext): RetentionPeriod => {
  return {
    numberOfDays: __expectInt32(output.numberOfDays),
    unlimited: __expectBoolean(output.unlimited),
  } as any;
};

/**
 * deserializeAws_restJson1S3DestinationConfiguration
 */
const de_S3DestinationConfiguration = (output: any, context: __SerdeContext): S3DestinationConfiguration => {
  return {
    bucket: __expectString(output.bucket),
    glueConfiguration:
      output.glueConfiguration != null ? de_GlueConfiguration(output.glueConfiguration, context) : undefined,
    key: __expectString(output.key),
    roleArn: __expectString(output.roleArn),
  } as any;
};

/**
 * deserializeAws_restJson1Schedule
 */
const de_Schedule = (output: any, context: __SerdeContext): Schedule => {
  return {
    expression: __expectString(output.expression),
  } as any;
};

/**
 * deserializeAws_restJson1SchemaDefinition
 */
const de_SchemaDefinition = (output: any, context: __SerdeContext): SchemaDefinition => {
  return {
    columns: output.columns != null ? de_Columns(output.columns, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1SelectAttributesActivity
 */
const de_SelectAttributesActivity = (output: any, context: __SerdeContext): SelectAttributesActivity => {
  return {
    attributes: output.attributes != null ? de_AttributeNames(output.attributes, context) : undefined,
    name: __expectString(output.name),
    next: __expectString(output.next),
  } as any;
};

/**
 * deserializeAws_restJson1ServiceManagedChannelS3Storage
 */
const de_ServiceManagedChannelS3Storage = (output: any, context: __SerdeContext): ServiceManagedChannelS3Storage => {
  return {} as any;
};

/**
 * deserializeAws_restJson1ServiceManagedChannelS3StorageSummary
 */
const de_ServiceManagedChannelS3StorageSummary = (
  output: any,
  context: __SerdeContext
): ServiceManagedChannelS3StorageSummary => {
  return {} as any;
};

/**
 * deserializeAws_restJson1ServiceManagedDatastoreS3Storage
 */
const de_ServiceManagedDatastoreS3Storage = (
  output: any,
  context: __SerdeContext
): ServiceManagedDatastoreS3Storage => {
  return {} as any;
};

/**
 * deserializeAws_restJson1ServiceManagedDatastoreS3StorageSummary
 */
const de_ServiceManagedDatastoreS3StorageSummary = (
  output: any,
  context: __SerdeContext
): ServiceManagedDatastoreS3StorageSummary => {
  return {} as any;
};

/**
 * deserializeAws_restJson1SqlQueryDatasetAction
 */
const de_SqlQueryDatasetAction = (output: any, context: __SerdeContext): SqlQueryDatasetAction => {
  return {
    filters: output.filters != null ? de_QueryFilters(output.filters, context) : undefined,
    sqlQuery: __expectString(output.sqlQuery),
  } as any;
};

/**
 * deserializeAws_restJson1Tag
 */
const de_Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    key: __expectString(output.key),
    value: __expectString(output.value),
  } as any;
};

/**
 * deserializeAws_restJson1TagList
 */
const de_TagList = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Tag(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1TimestampPartition
 */
const de_TimestampPartition = (output: any, context: __SerdeContext): TimestampPartition => {
  return {
    attributeName: __expectString(output.attributeName),
    timestampFormat: __expectString(output.timestampFormat),
  } as any;
};

/**
 * deserializeAws_restJson1TriggeringDataset
 */
const de_TriggeringDataset = (output: any, context: __SerdeContext): TriggeringDataset => {
  return {
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_restJson1Variable
 */
const de_Variable = (output: any, context: __SerdeContext): Variable => {
  return {
    datasetContentVersionValue:
      output.datasetContentVersionValue != null
        ? de_DatasetContentVersionValue(output.datasetContentVersionValue, context)
        : undefined,
    doubleValue: __limitedParseDouble(output.doubleValue),
    name: __expectString(output.name),
    outputFileUriValue:
      output.outputFileUriValue != null ? de_OutputFileUriValue(output.outputFileUriValue, context) : undefined,
    stringValue: __expectString(output.stringValue),
  } as any;
};

/**
 * deserializeAws_restJson1Variables
 */
const de_Variables = (output: any, context: __SerdeContext): Variable[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Variable(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1VersioningConfiguration
 */
const de_VersioningConfiguration = (output: any, context: __SerdeContext): VersioningConfiguration => {
  return {
    maxVersions: __expectInt32(output.maxVersions),
    unlimited: __expectBoolean(output.unlimited),
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
