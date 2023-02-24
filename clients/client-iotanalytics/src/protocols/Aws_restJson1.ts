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

export const serializeAws_restJson1BatchPutMessageCommand = async (
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
    ...(input.messages != null && { messages: serializeAws_restJson1Messages(input.messages, context) }),
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

export const serializeAws_restJson1CancelPipelineReprocessingCommand = async (
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

export const serializeAws_restJson1CreateChannelCommand = async (
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
    ...(input.channelStorage != null && {
      channelStorage: serializeAws_restJson1ChannelStorage(input.channelStorage, context),
    }),
    ...(input.retentionPeriod != null && {
      retentionPeriod: serializeAws_restJson1RetentionPeriod(input.retentionPeriod, context),
    }),
    ...(input.tags != null && { tags: serializeAws_restJson1TagList(input.tags, context) }),
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

export const serializeAws_restJson1CreateDatasetCommand = async (
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
    ...(input.actions != null && { actions: serializeAws_restJson1DatasetActions(input.actions, context) }),
    ...(input.contentDeliveryRules != null && {
      contentDeliveryRules: serializeAws_restJson1DatasetContentDeliveryRules(input.contentDeliveryRules, context),
    }),
    ...(input.datasetName != null && { datasetName: input.datasetName }),
    ...(input.lateDataRules != null && {
      lateDataRules: serializeAws_restJson1LateDataRules(input.lateDataRules, context),
    }),
    ...(input.retentionPeriod != null && {
      retentionPeriod: serializeAws_restJson1RetentionPeriod(input.retentionPeriod, context),
    }),
    ...(input.tags != null && { tags: serializeAws_restJson1TagList(input.tags, context) }),
    ...(input.triggers != null && { triggers: serializeAws_restJson1DatasetTriggers(input.triggers, context) }),
    ...(input.versioningConfiguration != null && {
      versioningConfiguration: serializeAws_restJson1VersioningConfiguration(input.versioningConfiguration, context),
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

export const serializeAws_restJson1CreateDatasetContentCommand = async (
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

export const serializeAws_restJson1CreateDatastoreCommand = async (
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
      datastorePartitions: serializeAws_restJson1DatastorePartitions(input.datastorePartitions, context),
    }),
    ...(input.datastoreStorage != null && {
      datastoreStorage: serializeAws_restJson1DatastoreStorage(input.datastoreStorage, context),
    }),
    ...(input.fileFormatConfiguration != null && {
      fileFormatConfiguration: serializeAws_restJson1FileFormatConfiguration(input.fileFormatConfiguration, context),
    }),
    ...(input.retentionPeriod != null && {
      retentionPeriod: serializeAws_restJson1RetentionPeriod(input.retentionPeriod, context),
    }),
    ...(input.tags != null && { tags: serializeAws_restJson1TagList(input.tags, context) }),
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

export const serializeAws_restJson1CreatePipelineCommand = async (
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
      pipelineActivities: serializeAws_restJson1PipelineActivities(input.pipelineActivities, context),
    }),
    ...(input.pipelineName != null && { pipelineName: input.pipelineName }),
    ...(input.tags != null && { tags: serializeAws_restJson1TagList(input.tags, context) }),
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

export const serializeAws_restJson1DeleteChannelCommand = async (
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

export const serializeAws_restJson1DeleteDatasetCommand = async (
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

export const serializeAws_restJson1DeleteDatasetContentCommand = async (
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

export const serializeAws_restJson1DeleteDatastoreCommand = async (
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

export const serializeAws_restJson1DeletePipelineCommand = async (
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

export const serializeAws_restJson1DescribeChannelCommand = async (
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

export const serializeAws_restJson1DescribeDatasetCommand = async (
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

export const serializeAws_restJson1DescribeDatastoreCommand = async (
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

export const serializeAws_restJson1DescribeLoggingOptionsCommand = async (
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

export const serializeAws_restJson1DescribePipelineCommand = async (
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

export const serializeAws_restJson1GetDatasetContentCommand = async (
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

export const serializeAws_restJson1ListChannelsCommand = async (
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

export const serializeAws_restJson1ListDatasetContentsCommand = async (
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

export const serializeAws_restJson1ListDatasetsCommand = async (
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

export const serializeAws_restJson1ListDatastoresCommand = async (
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

export const serializeAws_restJson1ListPipelinesCommand = async (
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

export const serializeAws_restJson1ListTagsForResourceCommand = async (
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

export const serializeAws_restJson1PutLoggingOptionsCommand = async (
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
    ...(input.loggingOptions != null && {
      loggingOptions: serializeAws_restJson1LoggingOptions(input.loggingOptions, context),
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

export const serializeAws_restJson1RunPipelineActivityCommand = async (
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
    ...(input.payloads != null && { payloads: serializeAws_restJson1MessagePayloads(input.payloads, context) }),
    ...(input.pipelineActivity != null && {
      pipelineActivity: serializeAws_restJson1PipelineActivity(input.pipelineActivity, context),
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

export const serializeAws_restJson1SampleChannelDataCommand = async (
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

export const serializeAws_restJson1StartPipelineReprocessingCommand = async (
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
    ...(input.channelMessages != null && {
      channelMessages: serializeAws_restJson1ChannelMessages(input.channelMessages, context),
    }),
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

export const serializeAws_restJson1TagResourceCommand = async (
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
    ...(input.tags != null && { tags: serializeAws_restJson1TagList(input.tags, context) }),
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

export const serializeAws_restJson1UntagResourceCommand = async (
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

export const serializeAws_restJson1UpdateChannelCommand = async (
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
    ...(input.channelStorage != null && {
      channelStorage: serializeAws_restJson1ChannelStorage(input.channelStorage, context),
    }),
    ...(input.retentionPeriod != null && {
      retentionPeriod: serializeAws_restJson1RetentionPeriod(input.retentionPeriod, context),
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

export const serializeAws_restJson1UpdateDatasetCommand = async (
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
    ...(input.actions != null && { actions: serializeAws_restJson1DatasetActions(input.actions, context) }),
    ...(input.contentDeliveryRules != null && {
      contentDeliveryRules: serializeAws_restJson1DatasetContentDeliveryRules(input.contentDeliveryRules, context),
    }),
    ...(input.lateDataRules != null && {
      lateDataRules: serializeAws_restJson1LateDataRules(input.lateDataRules, context),
    }),
    ...(input.retentionPeriod != null && {
      retentionPeriod: serializeAws_restJson1RetentionPeriod(input.retentionPeriod, context),
    }),
    ...(input.triggers != null && { triggers: serializeAws_restJson1DatasetTriggers(input.triggers, context) }),
    ...(input.versioningConfiguration != null && {
      versioningConfiguration: serializeAws_restJson1VersioningConfiguration(input.versioningConfiguration, context),
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

export const serializeAws_restJson1UpdateDatastoreCommand = async (
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
    ...(input.datastoreStorage != null && {
      datastoreStorage: serializeAws_restJson1DatastoreStorage(input.datastoreStorage, context),
    }),
    ...(input.fileFormatConfiguration != null && {
      fileFormatConfiguration: serializeAws_restJson1FileFormatConfiguration(input.fileFormatConfiguration, context),
    }),
    ...(input.retentionPeriod != null && {
      retentionPeriod: serializeAws_restJson1RetentionPeriod(input.retentionPeriod, context),
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

export const serializeAws_restJson1UpdatePipelineCommand = async (
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
      pipelineActivities: serializeAws_restJson1PipelineActivities(input.pipelineActivities, context),
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

export const deserializeAws_restJson1BatchPutMessageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchPutMessageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1BatchPutMessageCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.batchPutMessageErrorEntries != null) {
    contents.batchPutMessageErrorEntries = deserializeAws_restJson1BatchPutMessageErrorEntries(
      data.batchPutMessageErrorEntries,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1BatchPutMessageCommandError = async (
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
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotanalytics#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotanalytics#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotanalytics#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotanalytics#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CancelPipelineReprocessingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelPipelineReprocessingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CancelPipelineReprocessingCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1CancelPipelineReprocessingCommandError = async (
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
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotanalytics#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotanalytics#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotanalytics#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotanalytics#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateChannelCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateChannelCommandError(output, context);
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
    contents.retentionPeriod = deserializeAws_restJson1RetentionPeriod(data.retentionPeriod, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateChannelCommandError = async (
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
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotanalytics#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.iotanalytics#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.iotanalytics#ResourceAlreadyExistsException":
      throw await deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotanalytics#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotanalytics#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateDatasetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDatasetCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateDatasetCommandError(output, context);
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
    contents.retentionPeriod = deserializeAws_restJson1RetentionPeriod(data.retentionPeriod, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateDatasetCommandError = async (
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
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotanalytics#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.iotanalytics#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.iotanalytics#ResourceAlreadyExistsException":
      throw await deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotanalytics#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotanalytics#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateDatasetContentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDatasetContentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateDatasetContentCommandError(output, context);
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

const deserializeAws_restJson1CreateDatasetContentCommandError = async (
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
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotanalytics#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotanalytics#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotanalytics#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotanalytics#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateDatastoreCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDatastoreCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateDatastoreCommandError(output, context);
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
    contents.retentionPeriod = deserializeAws_restJson1RetentionPeriod(data.retentionPeriod, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateDatastoreCommandError = async (
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
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotanalytics#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.iotanalytics#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.iotanalytics#ResourceAlreadyExistsException":
      throw await deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotanalytics#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotanalytics#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreatePipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePipelineCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreatePipelineCommandError(output, context);
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

const deserializeAws_restJson1CreatePipelineCommandError = async (
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
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotanalytics#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.iotanalytics#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.iotanalytics#ResourceAlreadyExistsException":
      throw await deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotanalytics#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotanalytics#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteChannelCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteChannelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteChannelCommandError = async (
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
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotanalytics#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotanalytics#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotanalytics#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotanalytics#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteDatasetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDatasetCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteDatasetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteDatasetCommandError = async (
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
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotanalytics#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotanalytics#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotanalytics#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotanalytics#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteDatasetContentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDatasetContentCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteDatasetContentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteDatasetContentCommandError = async (
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
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotanalytics#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotanalytics#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotanalytics#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotanalytics#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteDatastoreCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDatastoreCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteDatastoreCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteDatastoreCommandError = async (
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
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotanalytics#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotanalytics#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotanalytics#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotanalytics#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeletePipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePipelineCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeletePipelineCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeletePipelineCommandError = async (
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
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotanalytics#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotanalytics#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotanalytics#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotanalytics#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DescribeChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeChannelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.channel != null) {
    contents.channel = deserializeAws_restJson1Channel(data.channel, context);
  }
  if (data.statistics != null) {
    contents.statistics = deserializeAws_restJson1ChannelStatistics(data.statistics, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeChannelCommandError = async (
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
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotanalytics#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotanalytics#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotanalytics#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotanalytics#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DescribeDatasetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDatasetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeDatasetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.dataset != null) {
    contents.dataset = deserializeAws_restJson1Dataset(data.dataset, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeDatasetCommandError = async (
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
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotanalytics#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotanalytics#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotanalytics#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotanalytics#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DescribeDatastoreCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDatastoreCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeDatastoreCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.datastore != null) {
    contents.datastore = deserializeAws_restJson1Datastore(data.datastore, context);
  }
  if (data.statistics != null) {
    contents.statistics = deserializeAws_restJson1DatastoreStatistics(data.statistics, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeDatastoreCommandError = async (
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
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotanalytics#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotanalytics#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotanalytics#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotanalytics#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DescribeLoggingOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLoggingOptionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeLoggingOptionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.loggingOptions != null) {
    contents.loggingOptions = deserializeAws_restJson1LoggingOptions(data.loggingOptions, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeLoggingOptionsCommandError = async (
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
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotanalytics#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotanalytics#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotanalytics#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotanalytics#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DescribePipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePipelineCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribePipelineCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.pipeline != null) {
    contents.pipeline = deserializeAws_restJson1Pipeline(data.pipeline, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribePipelineCommandError = async (
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
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotanalytics#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotanalytics#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotanalytics#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotanalytics#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetDatasetContentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDatasetContentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetDatasetContentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.entries != null) {
    contents.entries = deserializeAws_restJson1DatasetEntries(data.entries, context);
  }
  if (data.status != null) {
    contents.status = deserializeAws_restJson1DatasetContentStatus(data.status, context);
  }
  if (data.timestamp != null) {
    contents.timestamp = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.timestamp)));
  }
  return contents;
};

const deserializeAws_restJson1GetDatasetContentCommandError = async (
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
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotanalytics#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotanalytics#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotanalytics#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotanalytics#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListChannelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChannelsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListChannelsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.channelSummaries != null) {
    contents.channelSummaries = deserializeAws_restJson1ChannelSummaries(data.channelSummaries, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListChannelsCommandError = async (
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
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotanalytics#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotanalytics#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotanalytics#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListDatasetContentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDatasetContentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListDatasetContentsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.datasetContentSummaries != null) {
    contents.datasetContentSummaries = deserializeAws_restJson1DatasetContentSummaries(
      data.datasetContentSummaries,
      context
    );
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListDatasetContentsCommandError = async (
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
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotanalytics#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotanalytics#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotanalytics#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotanalytics#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListDatasetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDatasetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListDatasetsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.datasetSummaries != null) {
    contents.datasetSummaries = deserializeAws_restJson1DatasetSummaries(data.datasetSummaries, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListDatasetsCommandError = async (
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
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotanalytics#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotanalytics#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotanalytics#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListDatastoresCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDatastoresCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListDatastoresCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.datastoreSummaries != null) {
    contents.datastoreSummaries = deserializeAws_restJson1DatastoreSummaries(data.datastoreSummaries, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListDatastoresCommandError = async (
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
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotanalytics#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotanalytics#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotanalytics#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListPipelinesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPipelinesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListPipelinesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.pipelineSummaries != null) {
    contents.pipelineSummaries = deserializeAws_restJson1PipelineSummaries(data.pipelineSummaries, context);
  }
  return contents;
};

const deserializeAws_restJson1ListPipelinesCommandError = async (
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
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotanalytics#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotanalytics#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotanalytics#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTagsForResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1TagList(data.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1ListTagsForResourceCommandError = async (
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
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotanalytics#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.iotanalytics#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotanalytics#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotanalytics#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotanalytics#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1PutLoggingOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutLoggingOptionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutLoggingOptionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1PutLoggingOptionsCommandError = async (
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
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotanalytics#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotanalytics#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotanalytics#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1RunPipelineActivityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RunPipelineActivityCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1RunPipelineActivityCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.logResult != null) {
    contents.logResult = __expectString(data.logResult);
  }
  if (data.payloads != null) {
    contents.payloads = deserializeAws_restJson1MessagePayloads(data.payloads, context);
  }
  return contents;
};

const deserializeAws_restJson1RunPipelineActivityCommandError = async (
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
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotanalytics#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotanalytics#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotanalytics#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1SampleChannelDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SampleChannelDataCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1SampleChannelDataCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.payloads != null) {
    contents.payloads = deserializeAws_restJson1MessagePayloads(data.payloads, context);
  }
  return contents;
};

const deserializeAws_restJson1SampleChannelDataCommandError = async (
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
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotanalytics#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotanalytics#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotanalytics#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotanalytics#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1StartPipelineReprocessingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartPipelineReprocessingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartPipelineReprocessingCommandError(output, context);
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

const deserializeAws_restJson1StartPipelineReprocessingCommandError = async (
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
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotanalytics#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.iotanalytics#ResourceAlreadyExistsException":
      throw await deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotanalytics#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotanalytics#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotanalytics#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1TagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1TagResourceCommandError = async (
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
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotanalytics#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.iotanalytics#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotanalytics#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotanalytics#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotanalytics#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1UntagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UntagResourceCommandError = async (
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
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotanalytics#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.iotanalytics#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotanalytics#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotanalytics#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotanalytics#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateChannelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateChannelCommandError = async (
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
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotanalytics#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotanalytics#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotanalytics#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotanalytics#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateDatasetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDatasetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateDatasetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateDatasetCommandError = async (
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
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotanalytics#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotanalytics#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotanalytics#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotanalytics#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateDatastoreCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDatastoreCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateDatastoreCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateDatastoreCommandError = async (
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
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotanalytics#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotanalytics#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotanalytics#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotanalytics#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdatePipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePipelineCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdatePipelineCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdatePipelineCommandError = async (
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
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotanalytics#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.iotanalytics#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotanalytics#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotanalytics#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotanalytics#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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
const deserializeAws_restJson1InternalFailureExceptionResponse = async (
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

const deserializeAws_restJson1InvalidRequestExceptionResponse = async (
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

const deserializeAws_restJson1LimitExceededExceptionResponse = async (
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

const deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse = async (
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

const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (
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

const deserializeAws_restJson1ThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
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

const serializeAws_restJson1AddAttributesActivity = (input: AddAttributesActivity, context: __SerdeContext): any => {
  return {
    ...(input.attributes != null && {
      attributes: serializeAws_restJson1AttributeNameMapping(input.attributes, context),
    }),
    ...(input.name != null && { name: input.name }),
    ...(input.next != null && { next: input.next }),
  };
};

const serializeAws_restJson1AttributeNameMapping = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1AttributeNames = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1ChannelActivity = (input: ChannelActivity, context: __SerdeContext): any => {
  return {
    ...(input.channelName != null && { channelName: input.channelName }),
    ...(input.name != null && { name: input.name }),
    ...(input.next != null && { next: input.next }),
  };
};

const serializeAws_restJson1ChannelMessages = (input: ChannelMessages, context: __SerdeContext): any => {
  return {
    ...(input.s3Paths != null && { s3Paths: serializeAws_restJson1S3PathChannelMessages(input.s3Paths, context) }),
  };
};

const serializeAws_restJson1ChannelStorage = (input: ChannelStorage, context: __SerdeContext): any => {
  return {
    ...(input.customerManagedS3 != null && {
      customerManagedS3: serializeAws_restJson1CustomerManagedChannelS3Storage(input.customerManagedS3, context),
    }),
    ...(input.serviceManagedS3 != null && {
      serviceManagedS3: serializeAws_restJson1ServiceManagedChannelS3Storage(input.serviceManagedS3, context),
    }),
  };
};

const serializeAws_restJson1Column = (input: Column, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.type != null && { type: input.type }),
  };
};

const serializeAws_restJson1Columns = (input: Column[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1Column(entry, context);
    });
};

const serializeAws_restJson1ContainerDatasetAction = (input: ContainerDatasetAction, context: __SerdeContext): any => {
  return {
    ...(input.executionRoleArn != null && { executionRoleArn: input.executionRoleArn }),
    ...(input.image != null && { image: input.image }),
    ...(input.resourceConfiguration != null && {
      resourceConfiguration: serializeAws_restJson1ResourceConfiguration(input.resourceConfiguration, context),
    }),
    ...(input.variables != null && { variables: serializeAws_restJson1Variables(input.variables, context) }),
  };
};

const serializeAws_restJson1CustomerManagedChannelS3Storage = (
  input: CustomerManagedChannelS3Storage,
  context: __SerdeContext
): any => {
  return {
    ...(input.bucket != null && { bucket: input.bucket }),
    ...(input.keyPrefix != null && { keyPrefix: input.keyPrefix }),
    ...(input.roleArn != null && { roleArn: input.roleArn }),
  };
};

const serializeAws_restJson1CustomerManagedDatastoreS3Storage = (
  input: CustomerManagedDatastoreS3Storage,
  context: __SerdeContext
): any => {
  return {
    ...(input.bucket != null && { bucket: input.bucket }),
    ...(input.keyPrefix != null && { keyPrefix: input.keyPrefix }),
    ...(input.roleArn != null && { roleArn: input.roleArn }),
  };
};

const serializeAws_restJson1DatasetAction = (input: DatasetAction, context: __SerdeContext): any => {
  return {
    ...(input.actionName != null && { actionName: input.actionName }),
    ...(input.containerAction != null && {
      containerAction: serializeAws_restJson1ContainerDatasetAction(input.containerAction, context),
    }),
    ...(input.queryAction != null && {
      queryAction: serializeAws_restJson1SqlQueryDatasetAction(input.queryAction, context),
    }),
  };
};

const serializeAws_restJson1DatasetActions = (input: DatasetAction[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1DatasetAction(entry, context);
    });
};

const serializeAws_restJson1DatasetContentDeliveryDestination = (
  input: DatasetContentDeliveryDestination,
  context: __SerdeContext
): any => {
  return {
    ...(input.iotEventsDestinationConfiguration != null && {
      iotEventsDestinationConfiguration: serializeAws_restJson1IotEventsDestinationConfiguration(
        input.iotEventsDestinationConfiguration,
        context
      ),
    }),
    ...(input.s3DestinationConfiguration != null && {
      s3DestinationConfiguration: serializeAws_restJson1S3DestinationConfiguration(
        input.s3DestinationConfiguration,
        context
      ),
    }),
  };
};

const serializeAws_restJson1DatasetContentDeliveryRule = (
  input: DatasetContentDeliveryRule,
  context: __SerdeContext
): any => {
  return {
    ...(input.destination != null && {
      destination: serializeAws_restJson1DatasetContentDeliveryDestination(input.destination, context),
    }),
    ...(input.entryName != null && { entryName: input.entryName }),
  };
};

const serializeAws_restJson1DatasetContentDeliveryRules = (
  input: DatasetContentDeliveryRule[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1DatasetContentDeliveryRule(entry, context);
    });
};

const serializeAws_restJson1DatasetContentVersionValue = (
  input: DatasetContentVersionValue,
  context: __SerdeContext
): any => {
  return {
    ...(input.datasetName != null && { datasetName: input.datasetName }),
  };
};

const serializeAws_restJson1DatasetTrigger = (input: DatasetTrigger, context: __SerdeContext): any => {
  return {
    ...(input.dataset != null && { dataset: serializeAws_restJson1TriggeringDataset(input.dataset, context) }),
    ...(input.schedule != null && { schedule: serializeAws_restJson1Schedule(input.schedule, context) }),
  };
};

const serializeAws_restJson1DatasetTriggers = (input: DatasetTrigger[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1DatasetTrigger(entry, context);
    });
};

const serializeAws_restJson1DatastoreActivity = (input: DatastoreActivity, context: __SerdeContext): any => {
  return {
    ...(input.datastoreName != null && { datastoreName: input.datastoreName }),
    ...(input.name != null && { name: input.name }),
  };
};

const serializeAws_restJson1DatastoreIotSiteWiseMultiLayerStorage = (
  input: DatastoreIotSiteWiseMultiLayerStorage,
  context: __SerdeContext
): any => {
  return {
    ...(input.customerManagedS3Storage != null && {
      customerManagedS3Storage: serializeAws_restJson1IotSiteWiseCustomerManagedDatastoreS3Storage(
        input.customerManagedS3Storage,
        context
      ),
    }),
  };
};

const serializeAws_restJson1DatastorePartition = (input: DatastorePartition, context: __SerdeContext): any => {
  return {
    ...(input.attributePartition != null && {
      attributePartition: serializeAws_restJson1Partition(input.attributePartition, context),
    }),
    ...(input.timestampPartition != null && {
      timestampPartition: serializeAws_restJson1TimestampPartition(input.timestampPartition, context),
    }),
  };
};

const serializeAws_restJson1DatastorePartitions = (input: DatastorePartitions, context: __SerdeContext): any => {
  return {
    ...(input.partitions != null && { partitions: serializeAws_restJson1Partitions(input.partitions, context) }),
  };
};

const serializeAws_restJson1DatastoreStorage = (input: DatastoreStorage, context: __SerdeContext): any => {
  return DatastoreStorage.visit(input, {
    customerManagedS3: (value) => ({
      customerManagedS3: serializeAws_restJson1CustomerManagedDatastoreS3Storage(value, context),
    }),
    iotSiteWiseMultiLayerStorage: (value) => ({
      iotSiteWiseMultiLayerStorage: serializeAws_restJson1DatastoreIotSiteWiseMultiLayerStorage(value, context),
    }),
    serviceManagedS3: (value) => ({
      serviceManagedS3: serializeAws_restJson1ServiceManagedDatastoreS3Storage(value, context),
    }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_restJson1DeltaTime = (input: DeltaTime, context: __SerdeContext): any => {
  return {
    ...(input.offsetSeconds != null && { offsetSeconds: input.offsetSeconds }),
    ...(input.timeExpression != null && { timeExpression: input.timeExpression }),
  };
};

const serializeAws_restJson1DeltaTimeSessionWindowConfiguration = (
  input: DeltaTimeSessionWindowConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.timeoutInMinutes != null && { timeoutInMinutes: input.timeoutInMinutes }),
  };
};

const serializeAws_restJson1DeviceRegistryEnrichActivity = (
  input: DeviceRegistryEnrichActivity,
  context: __SerdeContext
): any => {
  return {
    ...(input.attribute != null && { attribute: input.attribute }),
    ...(input.name != null && { name: input.name }),
    ...(input.next != null && { next: input.next }),
    ...(input.roleArn != null && { roleArn: input.roleArn }),
    ...(input.thingName != null && { thingName: input.thingName }),
  };
};

const serializeAws_restJson1DeviceShadowEnrichActivity = (
  input: DeviceShadowEnrichActivity,
  context: __SerdeContext
): any => {
  return {
    ...(input.attribute != null && { attribute: input.attribute }),
    ...(input.name != null && { name: input.name }),
    ...(input.next != null && { next: input.next }),
    ...(input.roleArn != null && { roleArn: input.roleArn }),
    ...(input.thingName != null && { thingName: input.thingName }),
  };
};

const serializeAws_restJson1FileFormatConfiguration = (
  input: FileFormatConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.jsonConfiguration != null && {
      jsonConfiguration: serializeAws_restJson1JsonConfiguration(input.jsonConfiguration, context),
    }),
    ...(input.parquetConfiguration != null && {
      parquetConfiguration: serializeAws_restJson1ParquetConfiguration(input.parquetConfiguration, context),
    }),
  };
};

const serializeAws_restJson1FilterActivity = (input: FilterActivity, context: __SerdeContext): any => {
  return {
    ...(input.filter != null && { filter: input.filter }),
    ...(input.name != null && { name: input.name }),
    ...(input.next != null && { next: input.next }),
  };
};

const serializeAws_restJson1GlueConfiguration = (input: GlueConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.databaseName != null && { databaseName: input.databaseName }),
    ...(input.tableName != null && { tableName: input.tableName }),
  };
};

const serializeAws_restJson1IotEventsDestinationConfiguration = (
  input: IotEventsDestinationConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.inputName != null && { inputName: input.inputName }),
    ...(input.roleArn != null && { roleArn: input.roleArn }),
  };
};

const serializeAws_restJson1IotSiteWiseCustomerManagedDatastoreS3Storage = (
  input: IotSiteWiseCustomerManagedDatastoreS3Storage,
  context: __SerdeContext
): any => {
  return {
    ...(input.bucket != null && { bucket: input.bucket }),
    ...(input.keyPrefix != null && { keyPrefix: input.keyPrefix }),
  };
};

const serializeAws_restJson1JsonConfiguration = (input: JsonConfiguration, context: __SerdeContext): any => {
  return {};
};

const serializeAws_restJson1LambdaActivity = (input: LambdaActivity, context: __SerdeContext): any => {
  return {
    ...(input.batchSize != null && { batchSize: input.batchSize }),
    ...(input.lambdaName != null && { lambdaName: input.lambdaName }),
    ...(input.name != null && { name: input.name }),
    ...(input.next != null && { next: input.next }),
  };
};

const serializeAws_restJson1LateDataRule = (input: LateDataRule, context: __SerdeContext): any => {
  return {
    ...(input.ruleConfiguration != null && {
      ruleConfiguration: serializeAws_restJson1LateDataRuleConfiguration(input.ruleConfiguration, context),
    }),
    ...(input.ruleName != null && { ruleName: input.ruleName }),
  };
};

const serializeAws_restJson1LateDataRuleConfiguration = (
  input: LateDataRuleConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.deltaTimeSessionWindowConfiguration != null && {
      deltaTimeSessionWindowConfiguration: serializeAws_restJson1DeltaTimeSessionWindowConfiguration(
        input.deltaTimeSessionWindowConfiguration,
        context
      ),
    }),
  };
};

const serializeAws_restJson1LateDataRules = (input: LateDataRule[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1LateDataRule(entry, context);
    });
};

const serializeAws_restJson1LoggingOptions = (input: LoggingOptions, context: __SerdeContext): any => {
  return {
    ...(input.enabled != null && { enabled: input.enabled }),
    ...(input.level != null && { level: input.level }),
    ...(input.roleArn != null && { roleArn: input.roleArn }),
  };
};

const serializeAws_restJson1MathActivity = (input: MathActivity, context: __SerdeContext): any => {
  return {
    ...(input.attribute != null && { attribute: input.attribute }),
    ...(input.math != null && { math: input.math }),
    ...(input.name != null && { name: input.name }),
    ...(input.next != null && { next: input.next }),
  };
};

const serializeAws_restJson1Message = (input: Message, context: __SerdeContext): any => {
  return {
    ...(input.messageId != null && { messageId: input.messageId }),
    ...(input.payload != null && { payload: context.base64Encoder(input.payload) }),
  };
};

const serializeAws_restJson1MessagePayloads = (input: Uint8Array[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return context.base64Encoder(entry);
    });
};

const serializeAws_restJson1Messages = (input: Message[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1Message(entry, context);
    });
};

const serializeAws_restJson1OutputFileUriValue = (input: OutputFileUriValue, context: __SerdeContext): any => {
  return {
    ...(input.fileName != null && { fileName: input.fileName }),
  };
};

const serializeAws_restJson1ParquetConfiguration = (input: ParquetConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.schemaDefinition != null && {
      schemaDefinition: serializeAws_restJson1SchemaDefinition(input.schemaDefinition, context),
    }),
  };
};

const serializeAws_restJson1Partition = (input: Partition, context: __SerdeContext): any => {
  return {
    ...(input.attributeName != null && { attributeName: input.attributeName }),
  };
};

const serializeAws_restJson1Partitions = (input: DatastorePartition[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1DatastorePartition(entry, context);
    });
};

const serializeAws_restJson1PipelineActivities = (input: PipelineActivity[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1PipelineActivity(entry, context);
    });
};

const serializeAws_restJson1PipelineActivity = (input: PipelineActivity, context: __SerdeContext): any => {
  return {
    ...(input.addAttributes != null && {
      addAttributes: serializeAws_restJson1AddAttributesActivity(input.addAttributes, context),
    }),
    ...(input.channel != null && { channel: serializeAws_restJson1ChannelActivity(input.channel, context) }),
    ...(input.datastore != null && { datastore: serializeAws_restJson1DatastoreActivity(input.datastore, context) }),
    ...(input.deviceRegistryEnrich != null && {
      deviceRegistryEnrich: serializeAws_restJson1DeviceRegistryEnrichActivity(input.deviceRegistryEnrich, context),
    }),
    ...(input.deviceShadowEnrich != null && {
      deviceShadowEnrich: serializeAws_restJson1DeviceShadowEnrichActivity(input.deviceShadowEnrich, context),
    }),
    ...(input.filter != null && { filter: serializeAws_restJson1FilterActivity(input.filter, context) }),
    ...(input.lambda != null && { lambda: serializeAws_restJson1LambdaActivity(input.lambda, context) }),
    ...(input.math != null && { math: serializeAws_restJson1MathActivity(input.math, context) }),
    ...(input.removeAttributes != null && {
      removeAttributes: serializeAws_restJson1RemoveAttributesActivity(input.removeAttributes, context),
    }),
    ...(input.selectAttributes != null && {
      selectAttributes: serializeAws_restJson1SelectAttributesActivity(input.selectAttributes, context),
    }),
  };
};

const serializeAws_restJson1QueryFilter = (input: QueryFilter, context: __SerdeContext): any => {
  return {
    ...(input.deltaTime != null && { deltaTime: serializeAws_restJson1DeltaTime(input.deltaTime, context) }),
  };
};

const serializeAws_restJson1QueryFilters = (input: QueryFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1QueryFilter(entry, context);
    });
};

const serializeAws_restJson1RemoveAttributesActivity = (
  input: RemoveAttributesActivity,
  context: __SerdeContext
): any => {
  return {
    ...(input.attributes != null && { attributes: serializeAws_restJson1AttributeNames(input.attributes, context) }),
    ...(input.name != null && { name: input.name }),
    ...(input.next != null && { next: input.next }),
  };
};

const serializeAws_restJson1ResourceConfiguration = (input: ResourceConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.computeType != null && { computeType: input.computeType }),
    ...(input.volumeSizeInGB != null && { volumeSizeInGB: input.volumeSizeInGB }),
  };
};

const serializeAws_restJson1RetentionPeriod = (input: RetentionPeriod, context: __SerdeContext): any => {
  return {
    ...(input.numberOfDays != null && { numberOfDays: input.numberOfDays }),
    ...(input.unlimited != null && { unlimited: input.unlimited }),
  };
};

const serializeAws_restJson1S3DestinationConfiguration = (
  input: S3DestinationConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.bucket != null && { bucket: input.bucket }),
    ...(input.glueConfiguration != null && {
      glueConfiguration: serializeAws_restJson1GlueConfiguration(input.glueConfiguration, context),
    }),
    ...(input.key != null && { key: input.key }),
    ...(input.roleArn != null && { roleArn: input.roleArn }),
  };
};

const serializeAws_restJson1S3PathChannelMessages = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1Schedule = (input: Schedule, context: __SerdeContext): any => {
  return {
    ...(input.expression != null && { expression: input.expression }),
  };
};

const serializeAws_restJson1SchemaDefinition = (input: SchemaDefinition, context: __SerdeContext): any => {
  return {
    ...(input.columns != null && { columns: serializeAws_restJson1Columns(input.columns, context) }),
  };
};

const serializeAws_restJson1SelectAttributesActivity = (
  input: SelectAttributesActivity,
  context: __SerdeContext
): any => {
  return {
    ...(input.attributes != null && { attributes: serializeAws_restJson1AttributeNames(input.attributes, context) }),
    ...(input.name != null && { name: input.name }),
    ...(input.next != null && { next: input.next }),
  };
};

const serializeAws_restJson1ServiceManagedChannelS3Storage = (
  input: ServiceManagedChannelS3Storage,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_restJson1ServiceManagedDatastoreS3Storage = (
  input: ServiceManagedDatastoreS3Storage,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_restJson1SqlQueryDatasetAction = (input: SqlQueryDatasetAction, context: __SerdeContext): any => {
  return {
    ...(input.filters != null && { filters: serializeAws_restJson1QueryFilters(input.filters, context) }),
    ...(input.sqlQuery != null && { sqlQuery: input.sqlQuery }),
  };
};

const serializeAws_restJson1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.key != null && { key: input.key }),
    ...(input.value != null && { value: input.value }),
  };
};

const serializeAws_restJson1TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1Tag(entry, context);
    });
};

const serializeAws_restJson1TimestampPartition = (input: TimestampPartition, context: __SerdeContext): any => {
  return {
    ...(input.attributeName != null && { attributeName: input.attributeName }),
    ...(input.timestampFormat != null && { timestampFormat: input.timestampFormat }),
  };
};

const serializeAws_restJson1TriggeringDataset = (input: TriggeringDataset, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
  };
};

const serializeAws_restJson1Variable = (input: Variable, context: __SerdeContext): any => {
  return {
    ...(input.datasetContentVersionValue != null && {
      datasetContentVersionValue: serializeAws_restJson1DatasetContentVersionValue(
        input.datasetContentVersionValue,
        context
      ),
    }),
    ...(input.doubleValue != null && { doubleValue: __serializeFloat(input.doubleValue) }),
    ...(input.name != null && { name: input.name }),
    ...(input.outputFileUriValue != null && {
      outputFileUriValue: serializeAws_restJson1OutputFileUriValue(input.outputFileUriValue, context),
    }),
    ...(input.stringValue != null && { stringValue: input.stringValue }),
  };
};

const serializeAws_restJson1Variables = (input: Variable[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1Variable(entry, context);
    });
};

const serializeAws_restJson1VersioningConfiguration = (
  input: VersioningConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.maxVersions != null && { maxVersions: input.maxVersions }),
    ...(input.unlimited != null && { unlimited: input.unlimited }),
  };
};

const deserializeAws_restJson1AddAttributesActivity = (output: any, context: __SerdeContext): AddAttributesActivity => {
  return {
    attributes:
      output.attributes != null ? deserializeAws_restJson1AttributeNameMapping(output.attributes, context) : undefined,
    name: __expectString(output.name),
    next: __expectString(output.next),
  } as any;
};

const deserializeAws_restJson1AttributeNameMapping = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1AttributeNames = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1BatchPutMessageErrorEntries = (
  output: any,
  context: __SerdeContext
): BatchPutMessageErrorEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1BatchPutMessageErrorEntry(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1BatchPutMessageErrorEntry = (
  output: any,
  context: __SerdeContext
): BatchPutMessageErrorEntry => {
  return {
    errorCode: __expectString(output.errorCode),
    errorMessage: __expectString(output.errorMessage),
    messageId: __expectString(output.messageId),
  } as any;
};

const deserializeAws_restJson1Channel = (output: any, context: __SerdeContext): Channel => {
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
    retentionPeriod:
      output.retentionPeriod != null
        ? deserializeAws_restJson1RetentionPeriod(output.retentionPeriod, context)
        : undefined,
    status: __expectString(output.status),
    storage: output.storage != null ? deserializeAws_restJson1ChannelStorage(output.storage, context) : undefined,
  } as any;
};

const deserializeAws_restJson1ChannelActivity = (output: any, context: __SerdeContext): ChannelActivity => {
  return {
    channelName: __expectString(output.channelName),
    name: __expectString(output.name),
    next: __expectString(output.next),
  } as any;
};

const deserializeAws_restJson1ChannelStatistics = (output: any, context: __SerdeContext): ChannelStatistics => {
  return {
    size: output.size != null ? deserializeAws_restJson1EstimatedResourceSize(output.size, context) : undefined,
  } as any;
};

const deserializeAws_restJson1ChannelStorage = (output: any, context: __SerdeContext): ChannelStorage => {
  return {
    customerManagedS3:
      output.customerManagedS3 != null
        ? deserializeAws_restJson1CustomerManagedChannelS3Storage(output.customerManagedS3, context)
        : undefined,
    serviceManagedS3:
      output.serviceManagedS3 != null
        ? deserializeAws_restJson1ServiceManagedChannelS3Storage(output.serviceManagedS3, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ChannelStorageSummary = (output: any, context: __SerdeContext): ChannelStorageSummary => {
  return {
    customerManagedS3:
      output.customerManagedS3 != null
        ? deserializeAws_restJson1CustomerManagedChannelS3StorageSummary(output.customerManagedS3, context)
        : undefined,
    serviceManagedS3:
      output.serviceManagedS3 != null
        ? deserializeAws_restJson1ServiceManagedChannelS3StorageSummary(output.serviceManagedS3, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ChannelSummaries = (output: any, context: __SerdeContext): ChannelSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ChannelSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ChannelSummary = (output: any, context: __SerdeContext): ChannelSummary => {
  return {
    channelName: __expectString(output.channelName),
    channelStorage:
      output.channelStorage != null
        ? deserializeAws_restJson1ChannelStorageSummary(output.channelStorage, context)
        : undefined,
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

const deserializeAws_restJson1Column = (output: any, context: __SerdeContext): Column => {
  return {
    name: __expectString(output.name),
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_restJson1Columns = (output: any, context: __SerdeContext): Column[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Column(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ContainerDatasetAction = (
  output: any,
  context: __SerdeContext
): ContainerDatasetAction => {
  return {
    executionRoleArn: __expectString(output.executionRoleArn),
    image: __expectString(output.image),
    resourceConfiguration:
      output.resourceConfiguration != null
        ? deserializeAws_restJson1ResourceConfiguration(output.resourceConfiguration, context)
        : undefined,
    variables: output.variables != null ? deserializeAws_restJson1Variables(output.variables, context) : undefined,
  } as any;
};

const deserializeAws_restJson1CustomerManagedChannelS3Storage = (
  output: any,
  context: __SerdeContext
): CustomerManagedChannelS3Storage => {
  return {
    bucket: __expectString(output.bucket),
    keyPrefix: __expectString(output.keyPrefix),
    roleArn: __expectString(output.roleArn),
  } as any;
};

const deserializeAws_restJson1CustomerManagedChannelS3StorageSummary = (
  output: any,
  context: __SerdeContext
): CustomerManagedChannelS3StorageSummary => {
  return {
    bucket: __expectString(output.bucket),
    keyPrefix: __expectString(output.keyPrefix),
    roleArn: __expectString(output.roleArn),
  } as any;
};

const deserializeAws_restJson1CustomerManagedDatastoreS3Storage = (
  output: any,
  context: __SerdeContext
): CustomerManagedDatastoreS3Storage => {
  return {
    bucket: __expectString(output.bucket),
    keyPrefix: __expectString(output.keyPrefix),
    roleArn: __expectString(output.roleArn),
  } as any;
};

const deserializeAws_restJson1CustomerManagedDatastoreS3StorageSummary = (
  output: any,
  context: __SerdeContext
): CustomerManagedDatastoreS3StorageSummary => {
  return {
    bucket: __expectString(output.bucket),
    keyPrefix: __expectString(output.keyPrefix),
    roleArn: __expectString(output.roleArn),
  } as any;
};

const deserializeAws_restJson1Dataset = (output: any, context: __SerdeContext): Dataset => {
  return {
    actions: output.actions != null ? deserializeAws_restJson1DatasetActions(output.actions, context) : undefined,
    arn: __expectString(output.arn),
    contentDeliveryRules:
      output.contentDeliveryRules != null
        ? deserializeAws_restJson1DatasetContentDeliveryRules(output.contentDeliveryRules, context)
        : undefined,
    creationTime:
      output.creationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationTime)))
        : undefined,
    lastUpdateTime:
      output.lastUpdateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdateTime)))
        : undefined,
    lateDataRules:
      output.lateDataRules != null ? deserializeAws_restJson1LateDataRules(output.lateDataRules, context) : undefined,
    name: __expectString(output.name),
    retentionPeriod:
      output.retentionPeriod != null
        ? deserializeAws_restJson1RetentionPeriod(output.retentionPeriod, context)
        : undefined,
    status: __expectString(output.status),
    triggers: output.triggers != null ? deserializeAws_restJson1DatasetTriggers(output.triggers, context) : undefined,
    versioningConfiguration:
      output.versioningConfiguration != null
        ? deserializeAws_restJson1VersioningConfiguration(output.versioningConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1DatasetAction = (output: any, context: __SerdeContext): DatasetAction => {
  return {
    actionName: __expectString(output.actionName),
    containerAction:
      output.containerAction != null
        ? deserializeAws_restJson1ContainerDatasetAction(output.containerAction, context)
        : undefined,
    queryAction:
      output.queryAction != null
        ? deserializeAws_restJson1SqlQueryDatasetAction(output.queryAction, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1DatasetActions = (output: any, context: __SerdeContext): DatasetAction[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DatasetAction(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1DatasetActionSummaries = (
  output: any,
  context: __SerdeContext
): DatasetActionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DatasetActionSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1DatasetActionSummary = (output: any, context: __SerdeContext): DatasetActionSummary => {
  return {
    actionName: __expectString(output.actionName),
    actionType: __expectString(output.actionType),
  } as any;
};

const deserializeAws_restJson1DatasetContentDeliveryDestination = (
  output: any,
  context: __SerdeContext
): DatasetContentDeliveryDestination => {
  return {
    iotEventsDestinationConfiguration:
      output.iotEventsDestinationConfiguration != null
        ? deserializeAws_restJson1IotEventsDestinationConfiguration(output.iotEventsDestinationConfiguration, context)
        : undefined,
    s3DestinationConfiguration:
      output.s3DestinationConfiguration != null
        ? deserializeAws_restJson1S3DestinationConfiguration(output.s3DestinationConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1DatasetContentDeliveryRule = (
  output: any,
  context: __SerdeContext
): DatasetContentDeliveryRule => {
  return {
    destination:
      output.destination != null
        ? deserializeAws_restJson1DatasetContentDeliveryDestination(output.destination, context)
        : undefined,
    entryName: __expectString(output.entryName),
  } as any;
};

const deserializeAws_restJson1DatasetContentDeliveryRules = (
  output: any,
  context: __SerdeContext
): DatasetContentDeliveryRule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DatasetContentDeliveryRule(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1DatasetContentStatus = (output: any, context: __SerdeContext): DatasetContentStatus => {
  return {
    reason: __expectString(output.reason),
    state: __expectString(output.state),
  } as any;
};

const deserializeAws_restJson1DatasetContentSummaries = (
  output: any,
  context: __SerdeContext
): DatasetContentSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DatasetContentSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1DatasetContentSummary = (output: any, context: __SerdeContext): DatasetContentSummary => {
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
    status: output.status != null ? deserializeAws_restJson1DatasetContentStatus(output.status, context) : undefined,
    version: __expectString(output.version),
  } as any;
};

const deserializeAws_restJson1DatasetContentVersionValue = (
  output: any,
  context: __SerdeContext
): DatasetContentVersionValue => {
  return {
    datasetName: __expectString(output.datasetName),
  } as any;
};

const deserializeAws_restJson1DatasetEntries = (output: any, context: __SerdeContext): DatasetEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DatasetEntry(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1DatasetEntry = (output: any, context: __SerdeContext): DatasetEntry => {
  return {
    dataURI: __expectString(output.dataURI),
    entryName: __expectString(output.entryName),
  } as any;
};

const deserializeAws_restJson1DatasetSummaries = (output: any, context: __SerdeContext): DatasetSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DatasetSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1DatasetSummary = (output: any, context: __SerdeContext): DatasetSummary => {
  return {
    actions:
      output.actions != null ? deserializeAws_restJson1DatasetActionSummaries(output.actions, context) : undefined,
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
    triggers: output.triggers != null ? deserializeAws_restJson1DatasetTriggers(output.triggers, context) : undefined,
  } as any;
};

const deserializeAws_restJson1DatasetTrigger = (output: any, context: __SerdeContext): DatasetTrigger => {
  return {
    dataset: output.dataset != null ? deserializeAws_restJson1TriggeringDataset(output.dataset, context) : undefined,
    schedule: output.schedule != null ? deserializeAws_restJson1Schedule(output.schedule, context) : undefined,
  } as any;
};

const deserializeAws_restJson1DatasetTriggers = (output: any, context: __SerdeContext): DatasetTrigger[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DatasetTrigger(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Datastore = (output: any, context: __SerdeContext): Datastore => {
  return {
    arn: __expectString(output.arn),
    creationTime:
      output.creationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationTime)))
        : undefined,
    datastorePartitions:
      output.datastorePartitions != null
        ? deserializeAws_restJson1DatastorePartitions(output.datastorePartitions, context)
        : undefined,
    fileFormatConfiguration:
      output.fileFormatConfiguration != null
        ? deserializeAws_restJson1FileFormatConfiguration(output.fileFormatConfiguration, context)
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
    retentionPeriod:
      output.retentionPeriod != null
        ? deserializeAws_restJson1RetentionPeriod(output.retentionPeriod, context)
        : undefined,
    status: __expectString(output.status),
    storage:
      output.storage != null
        ? deserializeAws_restJson1DatastoreStorage(__expectUnion(output.storage), context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1DatastoreActivity = (output: any, context: __SerdeContext): DatastoreActivity => {
  return {
    datastoreName: __expectString(output.datastoreName),
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_restJson1DatastoreIotSiteWiseMultiLayerStorage = (
  output: any,
  context: __SerdeContext
): DatastoreIotSiteWiseMultiLayerStorage => {
  return {
    customerManagedS3Storage:
      output.customerManagedS3Storage != null
        ? deserializeAws_restJson1IotSiteWiseCustomerManagedDatastoreS3Storage(output.customerManagedS3Storage, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1DatastoreIotSiteWiseMultiLayerStorageSummary = (
  output: any,
  context: __SerdeContext
): DatastoreIotSiteWiseMultiLayerStorageSummary => {
  return {
    customerManagedS3Storage:
      output.customerManagedS3Storage != null
        ? deserializeAws_restJson1IotSiteWiseCustomerManagedDatastoreS3StorageSummary(
            output.customerManagedS3Storage,
            context
          )
        : undefined,
  } as any;
};

const deserializeAws_restJson1DatastorePartition = (output: any, context: __SerdeContext): DatastorePartition => {
  return {
    attributePartition:
      output.attributePartition != null
        ? deserializeAws_restJson1Partition(output.attributePartition, context)
        : undefined,
    timestampPartition:
      output.timestampPartition != null
        ? deserializeAws_restJson1TimestampPartition(output.timestampPartition, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1DatastorePartitions = (output: any, context: __SerdeContext): DatastorePartitions => {
  return {
    partitions: output.partitions != null ? deserializeAws_restJson1Partitions(output.partitions, context) : undefined,
  } as any;
};

const deserializeAws_restJson1DatastoreStatistics = (output: any, context: __SerdeContext): DatastoreStatistics => {
  return {
    size: output.size != null ? deserializeAws_restJson1EstimatedResourceSize(output.size, context) : undefined,
  } as any;
};

const deserializeAws_restJson1DatastoreStorage = (output: any, context: __SerdeContext): DatastoreStorage => {
  if (output.customerManagedS3 != null) {
    return {
      customerManagedS3: deserializeAws_restJson1CustomerManagedDatastoreS3Storage(output.customerManagedS3, context),
    };
  }
  if (output.iotSiteWiseMultiLayerStorage != null) {
    return {
      iotSiteWiseMultiLayerStorage: deserializeAws_restJson1DatastoreIotSiteWiseMultiLayerStorage(
        output.iotSiteWiseMultiLayerStorage,
        context
      ),
    };
  }
  if (output.serviceManagedS3 != null) {
    return {
      serviceManagedS3: deserializeAws_restJson1ServiceManagedDatastoreS3Storage(output.serviceManagedS3, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1DatastoreStorageSummary = (
  output: any,
  context: __SerdeContext
): DatastoreStorageSummary => {
  return {
    customerManagedS3:
      output.customerManagedS3 != null
        ? deserializeAws_restJson1CustomerManagedDatastoreS3StorageSummary(output.customerManagedS3, context)
        : undefined,
    iotSiteWiseMultiLayerStorage:
      output.iotSiteWiseMultiLayerStorage != null
        ? deserializeAws_restJson1DatastoreIotSiteWiseMultiLayerStorageSummary(
            output.iotSiteWiseMultiLayerStorage,
            context
          )
        : undefined,
    serviceManagedS3:
      output.serviceManagedS3 != null
        ? deserializeAws_restJson1ServiceManagedDatastoreS3StorageSummary(output.serviceManagedS3, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1DatastoreSummaries = (output: any, context: __SerdeContext): DatastoreSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DatastoreSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1DatastoreSummary = (output: any, context: __SerdeContext): DatastoreSummary => {
  return {
    creationTime:
      output.creationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationTime)))
        : undefined,
    datastoreName: __expectString(output.datastoreName),
    datastorePartitions:
      output.datastorePartitions != null
        ? deserializeAws_restJson1DatastorePartitions(output.datastorePartitions, context)
        : undefined,
    datastoreStorage:
      output.datastoreStorage != null
        ? deserializeAws_restJson1DatastoreStorageSummary(output.datastoreStorage, context)
        : undefined,
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

const deserializeAws_restJson1DeltaTime = (output: any, context: __SerdeContext): DeltaTime => {
  return {
    offsetSeconds: __expectInt32(output.offsetSeconds),
    timeExpression: __expectString(output.timeExpression),
  } as any;
};

const deserializeAws_restJson1DeltaTimeSessionWindowConfiguration = (
  output: any,
  context: __SerdeContext
): DeltaTimeSessionWindowConfiguration => {
  return {
    timeoutInMinutes: __expectInt32(output.timeoutInMinutes),
  } as any;
};

const deserializeAws_restJson1DeviceRegistryEnrichActivity = (
  output: any,
  context: __SerdeContext
): DeviceRegistryEnrichActivity => {
  return {
    attribute: __expectString(output.attribute),
    name: __expectString(output.name),
    next: __expectString(output.next),
    roleArn: __expectString(output.roleArn),
    thingName: __expectString(output.thingName),
  } as any;
};

const deserializeAws_restJson1DeviceShadowEnrichActivity = (
  output: any,
  context: __SerdeContext
): DeviceShadowEnrichActivity => {
  return {
    attribute: __expectString(output.attribute),
    name: __expectString(output.name),
    next: __expectString(output.next),
    roleArn: __expectString(output.roleArn),
    thingName: __expectString(output.thingName),
  } as any;
};

const deserializeAws_restJson1EstimatedResourceSize = (output: any, context: __SerdeContext): EstimatedResourceSize => {
  return {
    estimatedOn:
      output.estimatedOn != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.estimatedOn)))
        : undefined,
    estimatedSizeInBytes: __limitedParseDouble(output.estimatedSizeInBytes),
  } as any;
};

const deserializeAws_restJson1FileFormatConfiguration = (
  output: any,
  context: __SerdeContext
): FileFormatConfiguration => {
  return {
    jsonConfiguration:
      output.jsonConfiguration != null
        ? deserializeAws_restJson1JsonConfiguration(output.jsonConfiguration, context)
        : undefined,
    parquetConfiguration:
      output.parquetConfiguration != null
        ? deserializeAws_restJson1ParquetConfiguration(output.parquetConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1FilterActivity = (output: any, context: __SerdeContext): FilterActivity => {
  return {
    filter: __expectString(output.filter),
    name: __expectString(output.name),
    next: __expectString(output.next),
  } as any;
};

const deserializeAws_restJson1GlueConfiguration = (output: any, context: __SerdeContext): GlueConfiguration => {
  return {
    databaseName: __expectString(output.databaseName),
    tableName: __expectString(output.tableName),
  } as any;
};

const deserializeAws_restJson1IotEventsDestinationConfiguration = (
  output: any,
  context: __SerdeContext
): IotEventsDestinationConfiguration => {
  return {
    inputName: __expectString(output.inputName),
    roleArn: __expectString(output.roleArn),
  } as any;
};

const deserializeAws_restJson1IotSiteWiseCustomerManagedDatastoreS3Storage = (
  output: any,
  context: __SerdeContext
): IotSiteWiseCustomerManagedDatastoreS3Storage => {
  return {
    bucket: __expectString(output.bucket),
    keyPrefix: __expectString(output.keyPrefix),
  } as any;
};

const deserializeAws_restJson1IotSiteWiseCustomerManagedDatastoreS3StorageSummary = (
  output: any,
  context: __SerdeContext
): IotSiteWiseCustomerManagedDatastoreS3StorageSummary => {
  return {
    bucket: __expectString(output.bucket),
    keyPrefix: __expectString(output.keyPrefix),
  } as any;
};

const deserializeAws_restJson1JsonConfiguration = (output: any, context: __SerdeContext): JsonConfiguration => {
  return {} as any;
};

const deserializeAws_restJson1LambdaActivity = (output: any, context: __SerdeContext): LambdaActivity => {
  return {
    batchSize: __expectInt32(output.batchSize),
    lambdaName: __expectString(output.lambdaName),
    name: __expectString(output.name),
    next: __expectString(output.next),
  } as any;
};

const deserializeAws_restJson1LateDataRule = (output: any, context: __SerdeContext): LateDataRule => {
  return {
    ruleConfiguration:
      output.ruleConfiguration != null
        ? deserializeAws_restJson1LateDataRuleConfiguration(output.ruleConfiguration, context)
        : undefined,
    ruleName: __expectString(output.ruleName),
  } as any;
};

const deserializeAws_restJson1LateDataRuleConfiguration = (
  output: any,
  context: __SerdeContext
): LateDataRuleConfiguration => {
  return {
    deltaTimeSessionWindowConfiguration:
      output.deltaTimeSessionWindowConfiguration != null
        ? deserializeAws_restJson1DeltaTimeSessionWindowConfiguration(
            output.deltaTimeSessionWindowConfiguration,
            context
          )
        : undefined,
  } as any;
};

const deserializeAws_restJson1LateDataRules = (output: any, context: __SerdeContext): LateDataRule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1LateDataRule(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1LoggingOptions = (output: any, context: __SerdeContext): LoggingOptions => {
  return {
    enabled: __expectBoolean(output.enabled),
    level: __expectString(output.level),
    roleArn: __expectString(output.roleArn),
  } as any;
};

const deserializeAws_restJson1MathActivity = (output: any, context: __SerdeContext): MathActivity => {
  return {
    attribute: __expectString(output.attribute),
    math: __expectString(output.math),
    name: __expectString(output.name),
    next: __expectString(output.next),
  } as any;
};

const deserializeAws_restJson1MessagePayloads = (output: any, context: __SerdeContext): Uint8Array[] => {
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

const deserializeAws_restJson1OutputFileUriValue = (output: any, context: __SerdeContext): OutputFileUriValue => {
  return {
    fileName: __expectString(output.fileName),
  } as any;
};

const deserializeAws_restJson1ParquetConfiguration = (output: any, context: __SerdeContext): ParquetConfiguration => {
  return {
    schemaDefinition:
      output.schemaDefinition != null
        ? deserializeAws_restJson1SchemaDefinition(output.schemaDefinition, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1Partition = (output: any, context: __SerdeContext): Partition => {
  return {
    attributeName: __expectString(output.attributeName),
  } as any;
};

const deserializeAws_restJson1Partitions = (output: any, context: __SerdeContext): DatastorePartition[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DatastorePartition(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Pipeline = (output: any, context: __SerdeContext): Pipeline => {
  return {
    activities:
      output.activities != null ? deserializeAws_restJson1PipelineActivities(output.activities, context) : undefined,
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
        ? deserializeAws_restJson1ReprocessingSummaries(output.reprocessingSummaries, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1PipelineActivities = (output: any, context: __SerdeContext): PipelineActivity[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1PipelineActivity(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1PipelineActivity = (output: any, context: __SerdeContext): PipelineActivity => {
  return {
    addAttributes:
      output.addAttributes != null
        ? deserializeAws_restJson1AddAttributesActivity(output.addAttributes, context)
        : undefined,
    channel: output.channel != null ? deserializeAws_restJson1ChannelActivity(output.channel, context) : undefined,
    datastore:
      output.datastore != null ? deserializeAws_restJson1DatastoreActivity(output.datastore, context) : undefined,
    deviceRegistryEnrich:
      output.deviceRegistryEnrich != null
        ? deserializeAws_restJson1DeviceRegistryEnrichActivity(output.deviceRegistryEnrich, context)
        : undefined,
    deviceShadowEnrich:
      output.deviceShadowEnrich != null
        ? deserializeAws_restJson1DeviceShadowEnrichActivity(output.deviceShadowEnrich, context)
        : undefined,
    filter: output.filter != null ? deserializeAws_restJson1FilterActivity(output.filter, context) : undefined,
    lambda: output.lambda != null ? deserializeAws_restJson1LambdaActivity(output.lambda, context) : undefined,
    math: output.math != null ? deserializeAws_restJson1MathActivity(output.math, context) : undefined,
    removeAttributes:
      output.removeAttributes != null
        ? deserializeAws_restJson1RemoveAttributesActivity(output.removeAttributes, context)
        : undefined,
    selectAttributes:
      output.selectAttributes != null
        ? deserializeAws_restJson1SelectAttributesActivity(output.selectAttributes, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1PipelineSummaries = (output: any, context: __SerdeContext): PipelineSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1PipelineSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1PipelineSummary = (output: any, context: __SerdeContext): PipelineSummary => {
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
        ? deserializeAws_restJson1ReprocessingSummaries(output.reprocessingSummaries, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1QueryFilter = (output: any, context: __SerdeContext): QueryFilter => {
  return {
    deltaTime: output.deltaTime != null ? deserializeAws_restJson1DeltaTime(output.deltaTime, context) : undefined,
  } as any;
};

const deserializeAws_restJson1QueryFilters = (output: any, context: __SerdeContext): QueryFilter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1QueryFilter(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1RemoveAttributesActivity = (
  output: any,
  context: __SerdeContext
): RemoveAttributesActivity => {
  return {
    attributes:
      output.attributes != null ? deserializeAws_restJson1AttributeNames(output.attributes, context) : undefined,
    name: __expectString(output.name),
    next: __expectString(output.next),
  } as any;
};

const deserializeAws_restJson1ReprocessingSummaries = (output: any, context: __SerdeContext): ReprocessingSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ReprocessingSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ReprocessingSummary = (output: any, context: __SerdeContext): ReprocessingSummary => {
  return {
    creationTime:
      output.creationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationTime)))
        : undefined,
    id: __expectString(output.id),
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_restJson1ResourceConfiguration = (output: any, context: __SerdeContext): ResourceConfiguration => {
  return {
    computeType: __expectString(output.computeType),
    volumeSizeInGB: __expectInt32(output.volumeSizeInGB),
  } as any;
};

const deserializeAws_restJson1RetentionPeriod = (output: any, context: __SerdeContext): RetentionPeriod => {
  return {
    numberOfDays: __expectInt32(output.numberOfDays),
    unlimited: __expectBoolean(output.unlimited),
  } as any;
};

const deserializeAws_restJson1S3DestinationConfiguration = (
  output: any,
  context: __SerdeContext
): S3DestinationConfiguration => {
  return {
    bucket: __expectString(output.bucket),
    glueConfiguration:
      output.glueConfiguration != null
        ? deserializeAws_restJson1GlueConfiguration(output.glueConfiguration, context)
        : undefined,
    key: __expectString(output.key),
    roleArn: __expectString(output.roleArn),
  } as any;
};

const deserializeAws_restJson1Schedule = (output: any, context: __SerdeContext): Schedule => {
  return {
    expression: __expectString(output.expression),
  } as any;
};

const deserializeAws_restJson1SchemaDefinition = (output: any, context: __SerdeContext): SchemaDefinition => {
  return {
    columns: output.columns != null ? deserializeAws_restJson1Columns(output.columns, context) : undefined,
  } as any;
};

const deserializeAws_restJson1SelectAttributesActivity = (
  output: any,
  context: __SerdeContext
): SelectAttributesActivity => {
  return {
    attributes:
      output.attributes != null ? deserializeAws_restJson1AttributeNames(output.attributes, context) : undefined,
    name: __expectString(output.name),
    next: __expectString(output.next),
  } as any;
};

const deserializeAws_restJson1ServiceManagedChannelS3Storage = (
  output: any,
  context: __SerdeContext
): ServiceManagedChannelS3Storage => {
  return {} as any;
};

const deserializeAws_restJson1ServiceManagedChannelS3StorageSummary = (
  output: any,
  context: __SerdeContext
): ServiceManagedChannelS3StorageSummary => {
  return {} as any;
};

const deserializeAws_restJson1ServiceManagedDatastoreS3Storage = (
  output: any,
  context: __SerdeContext
): ServiceManagedDatastoreS3Storage => {
  return {} as any;
};

const deserializeAws_restJson1ServiceManagedDatastoreS3StorageSummary = (
  output: any,
  context: __SerdeContext
): ServiceManagedDatastoreS3StorageSummary => {
  return {} as any;
};

const deserializeAws_restJson1SqlQueryDatasetAction = (output: any, context: __SerdeContext): SqlQueryDatasetAction => {
  return {
    filters: output.filters != null ? deserializeAws_restJson1QueryFilters(output.filters, context) : undefined,
    sqlQuery: __expectString(output.sqlQuery),
  } as any;
};

const deserializeAws_restJson1Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    key: __expectString(output.key),
    value: __expectString(output.value),
  } as any;
};

const deserializeAws_restJson1TagList = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Tag(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1TimestampPartition = (output: any, context: __SerdeContext): TimestampPartition => {
  return {
    attributeName: __expectString(output.attributeName),
    timestampFormat: __expectString(output.timestampFormat),
  } as any;
};

const deserializeAws_restJson1TriggeringDataset = (output: any, context: __SerdeContext): TriggeringDataset => {
  return {
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_restJson1Variable = (output: any, context: __SerdeContext): Variable => {
  return {
    datasetContentVersionValue:
      output.datasetContentVersionValue != null
        ? deserializeAws_restJson1DatasetContentVersionValue(output.datasetContentVersionValue, context)
        : undefined,
    doubleValue: __limitedParseDouble(output.doubleValue),
    name: __expectString(output.name),
    outputFileUriValue:
      output.outputFileUriValue != null
        ? deserializeAws_restJson1OutputFileUriValue(output.outputFileUriValue, context)
        : undefined,
    stringValue: __expectString(output.stringValue),
  } as any;
};

const deserializeAws_restJson1Variables = (output: any, context: __SerdeContext): Variable[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Variable(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1VersioningConfiguration = (
  output: any,
  context: __SerdeContext
): VersioningConfiguration => {
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
