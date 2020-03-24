import {
  BatchPutMessageCommandInput,
  BatchPutMessageCommandOutput
} from "../commands/BatchPutMessageCommand";
import {
  CancelPipelineReprocessingCommandInput,
  CancelPipelineReprocessingCommandOutput
} from "../commands/CancelPipelineReprocessingCommand";
import {
  CreateChannelCommandInput,
  CreateChannelCommandOutput
} from "../commands/CreateChannelCommand";
import {
  CreateDatasetCommandInput,
  CreateDatasetCommandOutput
} from "../commands/CreateDatasetCommand";
import {
  CreateDatasetContentCommandInput,
  CreateDatasetContentCommandOutput
} from "../commands/CreateDatasetContentCommand";
import {
  CreateDatastoreCommandInput,
  CreateDatastoreCommandOutput
} from "../commands/CreateDatastoreCommand";
import {
  CreatePipelineCommandInput,
  CreatePipelineCommandOutput
} from "../commands/CreatePipelineCommand";
import {
  DeleteChannelCommandInput,
  DeleteChannelCommandOutput
} from "../commands/DeleteChannelCommand";
import {
  DeleteDatasetCommandInput,
  DeleteDatasetCommandOutput
} from "../commands/DeleteDatasetCommand";
import {
  DeleteDatasetContentCommandInput,
  DeleteDatasetContentCommandOutput
} from "../commands/DeleteDatasetContentCommand";
import {
  DeleteDatastoreCommandInput,
  DeleteDatastoreCommandOutput
} from "../commands/DeleteDatastoreCommand";
import {
  DeletePipelineCommandInput,
  DeletePipelineCommandOutput
} from "../commands/DeletePipelineCommand";
import {
  DescribeChannelCommandInput,
  DescribeChannelCommandOutput
} from "../commands/DescribeChannelCommand";
import {
  DescribeDatasetCommandInput,
  DescribeDatasetCommandOutput
} from "../commands/DescribeDatasetCommand";
import {
  DescribeDatastoreCommandInput,
  DescribeDatastoreCommandOutput
} from "../commands/DescribeDatastoreCommand";
import {
  DescribeLoggingOptionsCommandInput,
  DescribeLoggingOptionsCommandOutput
} from "../commands/DescribeLoggingOptionsCommand";
import {
  DescribePipelineCommandInput,
  DescribePipelineCommandOutput
} from "../commands/DescribePipelineCommand";
import {
  GetDatasetContentCommandInput,
  GetDatasetContentCommandOutput
} from "../commands/GetDatasetContentCommand";
import {
  ListChannelsCommandInput,
  ListChannelsCommandOutput
} from "../commands/ListChannelsCommand";
import {
  ListDatasetContentsCommandInput,
  ListDatasetContentsCommandOutput
} from "../commands/ListDatasetContentsCommand";
import {
  ListDatasetsCommandInput,
  ListDatasetsCommandOutput
} from "../commands/ListDatasetsCommand";
import {
  ListDatastoresCommandInput,
  ListDatastoresCommandOutput
} from "../commands/ListDatastoresCommand";
import {
  ListPipelinesCommandInput,
  ListPipelinesCommandOutput
} from "../commands/ListPipelinesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput
} from "../commands/ListTagsForResourceCommand";
import {
  PutLoggingOptionsCommandInput,
  PutLoggingOptionsCommandOutput
} from "../commands/PutLoggingOptionsCommand";
import {
  RunPipelineActivityCommandInput,
  RunPipelineActivityCommandOutput
} from "../commands/RunPipelineActivityCommand";
import {
  SampleChannelDataCommandInput,
  SampleChannelDataCommandOutput
} from "../commands/SampleChannelDataCommand";
import {
  StartPipelineReprocessingCommandInput,
  StartPipelineReprocessingCommandOutput
} from "../commands/StartPipelineReprocessingCommand";
import {
  TagResourceCommandInput,
  TagResourceCommandOutput
} from "../commands/TagResourceCommand";
import {
  UntagResourceCommandInput,
  UntagResourceCommandOutput
} from "../commands/UntagResourceCommand";
import {
  UpdateChannelCommandInput,
  UpdateChannelCommandOutput
} from "../commands/UpdateChannelCommand";
import {
  UpdateDatasetCommandInput,
  UpdateDatasetCommandOutput
} from "../commands/UpdateDatasetCommand";
import {
  UpdateDatastoreCommandInput,
  UpdateDatastoreCommandOutput
} from "../commands/UpdateDatastoreCommand";
import {
  UpdatePipelineCommandInput,
  UpdatePipelineCommandOutput
} from "../commands/UpdatePipelineCommand";
import {
  AddAttributesActivity,
  BatchPutMessageErrorEntry,
  Channel,
  ChannelActivity,
  ChannelStatistics,
  ChannelStorage,
  ChannelStorageSummary,
  ChannelSummary,
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
  DatastoreStatistics,
  DatastoreStorage,
  DatastoreStorageSummary,
  DatastoreSummary,
  DeltaTime,
  DeviceRegistryEnrichActivity,
  DeviceShadowEnrichActivity,
  EstimatedResourceSize,
  FilterActivity,
  GlueConfiguration,
  InternalFailureException,
  InvalidRequestException,
  IotEventsDestinationConfiguration,
  LambdaActivity,
  LimitExceededException,
  LoggingOptions,
  MathActivity,
  Message,
  OutputFileUriValue,
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
  SelectAttributesActivity,
  ServiceManagedChannelS3Storage,
  ServiceManagedChannelS3StorageSummary,
  ServiceManagedDatastoreS3Storage,
  ServiceManagedDatastoreS3StorageSummary,
  ServiceUnavailableException,
  SqlQueryDatasetAction,
  Tag,
  ThrottlingException,
  TriggeringDataset,
  Variable,
  VersioningConfiguration
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export async function serializeAws_restJson1_1CancelPipelineReprocessingCommand(
  input: CancelPipelineReprocessingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/pipelines/{pipelineName}/reprocessing/{reprocessingId}";
  if (input.pipelineName !== undefined) {
    const labelValue: any = input.pipelineName.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: pipelineName."
      );
    }
    resolvedPath = resolvedPath.replace("{pipelineName}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: pipelineName.");
  }
  if (input.reprocessingId !== undefined) {
    const labelValue: any = input.reprocessingId.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: reprocessingId."
      );
    }
    resolvedPath = resolvedPath.replace("{reprocessingId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: reprocessingId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1CreateChannelCommand(
  input: CreateChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/channels";
  let body: any = {};
  const bodyParams: any = {};
  if (input.channelName !== undefined) {
    bodyParams["channelName"] = input.channelName;
  }
  if (input.channelStorage !== undefined) {
    bodyParams["channelStorage"] = serializeAws_restJson1_1ChannelStorage(
      input.channelStorage,
      context
    );
  }
  if (input.retentionPeriod !== undefined) {
    bodyParams["retentionPeriod"] = serializeAws_restJson1_1RetentionPeriod(
      input.retentionPeriod,
      context
    );
  }
  if (input.tags !== undefined) {
    bodyParams["tags"] = serializeAws_restJson1_1TagList(input.tags, context);
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1CreateDatasetCommand(
  input: CreateDatasetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/datasets";
  let body: any = {};
  const bodyParams: any = {};
  if (input.actions !== undefined) {
    bodyParams["actions"] = serializeAws_restJson1_1DatasetActions(
      input.actions,
      context
    );
  }
  if (input.contentDeliveryRules !== undefined) {
    bodyParams[
      "contentDeliveryRules"
    ] = serializeAws_restJson1_1DatasetContentDeliveryRules(
      input.contentDeliveryRules,
      context
    );
  }
  if (input.datasetName !== undefined) {
    bodyParams["datasetName"] = input.datasetName;
  }
  if (input.retentionPeriod !== undefined) {
    bodyParams["retentionPeriod"] = serializeAws_restJson1_1RetentionPeriod(
      input.retentionPeriod,
      context
    );
  }
  if (input.tags !== undefined) {
    bodyParams["tags"] = serializeAws_restJson1_1TagList(input.tags, context);
  }
  if (input.triggers !== undefined) {
    bodyParams["triggers"] = serializeAws_restJson1_1DatasetTriggers(
      input.triggers,
      context
    );
  }
  if (input.versioningConfiguration !== undefined) {
    bodyParams[
      "versioningConfiguration"
    ] = serializeAws_restJson1_1VersioningConfiguration(
      input.versioningConfiguration,
      context
    );
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1CreateDatasetContentCommand(
  input: CreateDatasetContentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/datasets/{datasetName}/content";
  if (input.datasetName !== undefined) {
    const labelValue: any = input.datasetName.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: datasetName."
      );
    }
    resolvedPath = resolvedPath.replace("{datasetName}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: datasetName.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1CreateDatastoreCommand(
  input: CreateDatastoreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/datastores";
  let body: any = {};
  const bodyParams: any = {};
  if (input.datastoreName !== undefined) {
    bodyParams["datastoreName"] = input.datastoreName;
  }
  if (input.datastoreStorage !== undefined) {
    bodyParams["datastoreStorage"] = serializeAws_restJson1_1DatastoreStorage(
      input.datastoreStorage,
      context
    );
  }
  if (input.retentionPeriod !== undefined) {
    bodyParams["retentionPeriod"] = serializeAws_restJson1_1RetentionPeriod(
      input.retentionPeriod,
      context
    );
  }
  if (input.tags !== undefined) {
    bodyParams["tags"] = serializeAws_restJson1_1TagList(input.tags, context);
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1CreatePipelineCommand(
  input: CreatePipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/pipelines";
  let body: any = {};
  const bodyParams: any = {};
  if (input.pipelineActivities !== undefined) {
    bodyParams[
      "pipelineActivities"
    ] = serializeAws_restJson1_1PipelineActivities(
      input.pipelineActivities,
      context
    );
  }
  if (input.pipelineName !== undefined) {
    bodyParams["pipelineName"] = input.pipelineName;
  }
  if (input.tags !== undefined) {
    bodyParams["tags"] = serializeAws_restJson1_1TagList(input.tags, context);
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1DeleteChannelCommand(
  input: DeleteChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/channels/{channelName}";
  if (input.channelName !== undefined) {
    const labelValue: any = input.channelName.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: channelName."
      );
    }
    resolvedPath = resolvedPath.replace("{channelName}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: channelName.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DeleteDatasetCommand(
  input: DeleteDatasetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/datasets/{datasetName}";
  if (input.datasetName !== undefined) {
    const labelValue: any = input.datasetName.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: datasetName."
      );
    }
    resolvedPath = resolvedPath.replace("{datasetName}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: datasetName.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DeleteDatasetContentCommand(
  input: DeleteDatasetContentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/datasets/{datasetName}/content";
  if (input.datasetName !== undefined) {
    const labelValue: any = input.datasetName.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: datasetName."
      );
    }
    resolvedPath = resolvedPath.replace("{datasetName}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: datasetName.");
  }
  const query: any = {};
  if (input.versionId !== undefined) {
    query["versionId"] = input.versionId.toString();
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1DeleteDatastoreCommand(
  input: DeleteDatastoreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/datastores/{datastoreName}";
  if (input.datastoreName !== undefined) {
    const labelValue: any = input.datastoreName.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: datastoreName."
      );
    }
    resolvedPath = resolvedPath.replace("{datastoreName}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: datastoreName.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DeletePipelineCommand(
  input: DeletePipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/pipelines/{pipelineName}";
  if (input.pipelineName !== undefined) {
    const labelValue: any = input.pipelineName.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: pipelineName."
      );
    }
    resolvedPath = resolvedPath.replace("{pipelineName}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: pipelineName.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DescribeChannelCommand(
  input: DescribeChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/channels/{channelName}";
  if (input.channelName !== undefined) {
    const labelValue: any = input.channelName.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: channelName."
      );
    }
    resolvedPath = resolvedPath.replace("{channelName}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: channelName.");
  }
  const query: any = {};
  if (input.includeStatistics !== undefined) {
    query["includeStatistics"] = input.includeStatistics.toString();
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1DescribeDatasetCommand(
  input: DescribeDatasetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/datasets/{datasetName}";
  if (input.datasetName !== undefined) {
    const labelValue: any = input.datasetName.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: datasetName."
      );
    }
    resolvedPath = resolvedPath.replace("{datasetName}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: datasetName.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DescribeDatastoreCommand(
  input: DescribeDatastoreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/datastores/{datastoreName}";
  if (input.datastoreName !== undefined) {
    const labelValue: any = input.datastoreName.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: datastoreName."
      );
    }
    resolvedPath = resolvedPath.replace("{datastoreName}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: datastoreName.");
  }
  const query: any = {};
  if (input.includeStatistics !== undefined) {
    query["includeStatistics"] = input.includeStatistics.toString();
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1DescribeLoggingOptionsCommand(
  input: DescribeLoggingOptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/logging";
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DescribePipelineCommand(
  input: DescribePipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/pipelines/{pipelineName}";
  if (input.pipelineName !== undefined) {
    const labelValue: any = input.pipelineName.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: pipelineName."
      );
    }
    resolvedPath = resolvedPath.replace("{pipelineName}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: pipelineName.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1GetDatasetContentCommand(
  input: GetDatasetContentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/datasets/{datasetName}/content";
  if (input.datasetName !== undefined) {
    const labelValue: any = input.datasetName.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: datasetName."
      );
    }
    resolvedPath = resolvedPath.replace("{datasetName}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: datasetName.");
  }
  const query: any = {};
  if (input.versionId !== undefined) {
    query["versionId"] = input.versionId.toString();
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1ListChannelsCommand(
  input: ListChannelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/channels";
  const query: any = {};
  if (input.maxResults !== undefined) {
    query["maxResults"] = input.maxResults.toString();
  }
  if (input.nextToken !== undefined) {
    query["nextToken"] = input.nextToken.toString();
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1ListDatasetContentsCommand(
  input: ListDatasetContentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/datasets/{datasetName}/contents";
  if (input.datasetName !== undefined) {
    const labelValue: any = input.datasetName.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: datasetName."
      );
    }
    resolvedPath = resolvedPath.replace("{datasetName}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: datasetName.");
  }
  const query: any = {};
  if (input.maxResults !== undefined) {
    query["maxResults"] = input.maxResults.toString();
  }
  if (input.nextToken !== undefined) {
    query["nextToken"] = input.nextToken.toString();
  }
  if (input.scheduledBefore !== undefined) {
    query["scheduledBefore"] = input.scheduledBefore.toISOString();
  }
  if (input.scheduledOnOrAfter !== undefined) {
    query["scheduledOnOrAfter"] = input.scheduledOnOrAfter.toISOString();
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1ListDatasetsCommand(
  input: ListDatasetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/datasets";
  const query: any = {};
  if (input.maxResults !== undefined) {
    query["maxResults"] = input.maxResults.toString();
  }
  if (input.nextToken !== undefined) {
    query["nextToken"] = input.nextToken.toString();
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1ListDatastoresCommand(
  input: ListDatastoresCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/datastores";
  const query: any = {};
  if (input.maxResults !== undefined) {
    query["maxResults"] = input.maxResults.toString();
  }
  if (input.nextToken !== undefined) {
    query["nextToken"] = input.nextToken.toString();
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1ListPipelinesCommand(
  input: ListPipelinesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/pipelines";
  const query: any = {};
  if (input.maxResults !== undefined) {
    query["maxResults"] = input.maxResults.toString();
  }
  if (input.nextToken !== undefined) {
    query["nextToken"] = input.nextToken.toString();
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1ListTagsForResourceCommand(
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/tags";
  const query: any = {};
  if (input.resourceArn !== undefined) {
    query["resourceArn"] = input.resourceArn.toString();
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1PutLoggingOptionsCommand(
  input: PutLoggingOptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/logging";
  let body: any = {};
  const bodyParams: any = {};
  if (input.loggingOptions !== undefined) {
    bodyParams["loggingOptions"] = serializeAws_restJson1_1LoggingOptions(
      input.loggingOptions,
      context
    );
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1RunPipelineActivityCommand(
  input: RunPipelineActivityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/pipelineactivities/run";
  let body: any = {};
  const bodyParams: any = {};
  if (input.payloads !== undefined) {
    bodyParams["payloads"] = serializeAws_restJson1_1MessagePayloads(
      input.payloads,
      context
    );
  }
  if (input.pipelineActivity !== undefined) {
    bodyParams["pipelineActivity"] = serializeAws_restJson1_1PipelineActivity(
      input.pipelineActivity,
      context
    );
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1SampleChannelDataCommand(
  input: SampleChannelDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/channels/{channelName}/sample";
  if (input.channelName !== undefined) {
    const labelValue: any = input.channelName.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: channelName."
      );
    }
    resolvedPath = resolvedPath.replace("{channelName}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: channelName.");
  }
  const query: any = {};
  if (input.endTime !== undefined) {
    query["endTime"] = input.endTime.toISOString();
  }
  if (input.maxMessages !== undefined) {
    query["maxMessages"] = input.maxMessages.toString();
  }
  if (input.startTime !== undefined) {
    query["startTime"] = input.startTime.toISOString();
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1StartPipelineReprocessingCommand(
  input: StartPipelineReprocessingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/pipelines/{pipelineName}/reprocessing";
  if (input.pipelineName !== undefined) {
    const labelValue: any = input.pipelineName.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: pipelineName."
      );
    }
    resolvedPath = resolvedPath.replace("{pipelineName}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: pipelineName.");
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.endTime !== undefined) {
    bodyParams["endTime"] = Math.round(input.endTime.getTime() / 1000);
  }
  if (input.startTime !== undefined) {
    bodyParams["startTime"] = Math.round(input.startTime.getTime() / 1000);
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1TagResourceCommand(
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/tags";
  const query: any = {};
  if (input.resourceArn !== undefined) {
    query["resourceArn"] = input.resourceArn.toString();
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.tags !== undefined) {
    bodyParams["tags"] = serializeAws_restJson1_1TagList(input.tags, context);
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    query: query,
    body: body
  });
}

export async function serializeAws_restJson1_1UntagResourceCommand(
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/tags";
  const query: any = {};
  if (input.resourceArn !== undefined) {
    query["resourceArn"] = input.resourceArn.toString();
  }
  if (input.tagKeys !== undefined) {
    query["tagKeys"] = input.tagKeys;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1UpdateChannelCommand(
  input: UpdateChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/channels/{channelName}";
  if (input.channelName !== undefined) {
    const labelValue: any = input.channelName.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: channelName."
      );
    }
    resolvedPath = resolvedPath.replace("{channelName}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: channelName.");
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.channelStorage !== undefined) {
    bodyParams["channelStorage"] = serializeAws_restJson1_1ChannelStorage(
      input.channelStorage,
      context
    );
  }
  if (input.retentionPeriod !== undefined) {
    bodyParams["retentionPeriod"] = serializeAws_restJson1_1RetentionPeriod(
      input.retentionPeriod,
      context
    );
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1UpdateDatasetCommand(
  input: UpdateDatasetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/datasets/{datasetName}";
  if (input.datasetName !== undefined) {
    const labelValue: any = input.datasetName.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: datasetName."
      );
    }
    resolvedPath = resolvedPath.replace("{datasetName}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: datasetName.");
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.actions !== undefined) {
    bodyParams["actions"] = serializeAws_restJson1_1DatasetActions(
      input.actions,
      context
    );
  }
  if (input.contentDeliveryRules !== undefined) {
    bodyParams[
      "contentDeliveryRules"
    ] = serializeAws_restJson1_1DatasetContentDeliveryRules(
      input.contentDeliveryRules,
      context
    );
  }
  if (input.retentionPeriod !== undefined) {
    bodyParams["retentionPeriod"] = serializeAws_restJson1_1RetentionPeriod(
      input.retentionPeriod,
      context
    );
  }
  if (input.triggers !== undefined) {
    bodyParams["triggers"] = serializeAws_restJson1_1DatasetTriggers(
      input.triggers,
      context
    );
  }
  if (input.versioningConfiguration !== undefined) {
    bodyParams[
      "versioningConfiguration"
    ] = serializeAws_restJson1_1VersioningConfiguration(
      input.versioningConfiguration,
      context
    );
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1UpdateDatastoreCommand(
  input: UpdateDatastoreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/datastores/{datastoreName}";
  if (input.datastoreName !== undefined) {
    const labelValue: any = input.datastoreName.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: datastoreName."
      );
    }
    resolvedPath = resolvedPath.replace("{datastoreName}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: datastoreName.");
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.datastoreStorage !== undefined) {
    bodyParams["datastoreStorage"] = serializeAws_restJson1_1DatastoreStorage(
      input.datastoreStorage,
      context
    );
  }
  if (input.retentionPeriod !== undefined) {
    bodyParams["retentionPeriod"] = serializeAws_restJson1_1RetentionPeriod(
      input.retentionPeriod,
      context
    );
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1UpdatePipelineCommand(
  input: UpdatePipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/pipelines/{pipelineName}";
  if (input.pipelineName !== undefined) {
    const labelValue: any = input.pipelineName.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: pipelineName."
      );
    }
    resolvedPath = resolvedPath.replace("{pipelineName}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: pipelineName.");
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.pipelineActivities !== undefined) {
    bodyParams[
      "pipelineActivities"
    ] = serializeAws_restJson1_1PipelineActivities(
      input.pipelineActivities,
      context
    );
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1BatchPutMessageCommand(
  input: BatchPutMessageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/messages/batch";
  let body: any = {};
  const bodyParams: any = {};
  if (input.channelName !== undefined) {
    bodyParams["channelName"] = input.channelName;
  }
  if (input.messages !== undefined) {
    bodyParams["messages"] = serializeAws_restJson1_1Messages(
      input.messages,
      context
    );
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function deserializeAws_restJson1_1CancelPipelineReprocessingCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelPipelineReprocessingCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1CancelPipelineReprocessingCommandError(
      output,
      context
    );
  }
  const contents: CancelPipelineReprocessingCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CancelPipelineReprocessingResponse"
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CancelPipelineReprocessingCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelPipelineReprocessingCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot.common.types#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot.common.types#InvalidRequestException":
      response = await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iot.common.types#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iot.common.types#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazonaws.iot.common.types#ThrottlingException":
      response = await deserializeAws_restJson1_1ThrottlingExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.iot.krieger#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1CreateChannelCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateChannelCommandOutput> {
  if (output.statusCode !== 201) {
    return deserializeAws_restJson1_1CreateChannelCommandError(output, context);
  }
  const contents: CreateChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateChannelResponse",
    channelArn: undefined,
    channelName: undefined,
    retentionPeriod: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.channelArn !== undefined) {
    contents.channelArn = data.channelArn;
  }
  if (data.channelName !== undefined) {
    contents.channelName = data.channelName;
  }
  if (data.retentionPeriod !== undefined) {
    contents.retentionPeriod = deserializeAws_restJson1_1RetentionPeriod(
      data.retentionPeriod,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateChannelCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateChannelCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot.common.types#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot.common.types#InvalidRequestException":
      response = await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.iot.common.types#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.iot.common.types#ResourceAlreadyExistsException":
      response = await deserializeAws_restJson1_1ResourceAlreadyExistsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iot.common.types#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazonaws.iot.common.types#ThrottlingException":
      response = await deserializeAws_restJson1_1ThrottlingExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.iot.krieger#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1CreateDatasetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDatasetCommandOutput> {
  if (output.statusCode !== 201) {
    return deserializeAws_restJson1_1CreateDatasetCommandError(output, context);
  }
  const contents: CreateDatasetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateDatasetResponse",
    datasetArn: undefined,
    datasetName: undefined,
    retentionPeriod: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.datasetArn !== undefined) {
    contents.datasetArn = data.datasetArn;
  }
  if (data.datasetName !== undefined) {
    contents.datasetName = data.datasetName;
  }
  if (data.retentionPeriod !== undefined) {
    contents.retentionPeriod = deserializeAws_restJson1_1RetentionPeriod(
      data.retentionPeriod,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateDatasetCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDatasetCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot.common.types#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot.common.types#InvalidRequestException":
      response = await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.iot.common.types#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.iot.common.types#ResourceAlreadyExistsException":
      response = await deserializeAws_restJson1_1ResourceAlreadyExistsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iot.common.types#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazonaws.iot.common.types#ThrottlingException":
      response = await deserializeAws_restJson1_1ThrottlingExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.iot.krieger#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1CreateDatasetContentCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDatasetContentCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1CreateDatasetContentCommandError(
      output,
      context
    );
  }
  const contents: CreateDatasetContentCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateDatasetContentResponse",
    versionId: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.versionId !== undefined) {
    contents.versionId = data.versionId;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateDatasetContentCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDatasetContentCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot.common.types#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot.common.types#InvalidRequestException":
      response = await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iot.common.types#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iot.common.types#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazonaws.iot.common.types#ThrottlingException":
      response = await deserializeAws_restJson1_1ThrottlingExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.iot.krieger#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1CreateDatastoreCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDatastoreCommandOutput> {
  if (output.statusCode !== 201) {
    return deserializeAws_restJson1_1CreateDatastoreCommandError(
      output,
      context
    );
  }
  const contents: CreateDatastoreCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateDatastoreResponse",
    datastoreArn: undefined,
    datastoreName: undefined,
    retentionPeriod: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.datastoreArn !== undefined) {
    contents.datastoreArn = data.datastoreArn;
  }
  if (data.datastoreName !== undefined) {
    contents.datastoreName = data.datastoreName;
  }
  if (data.retentionPeriod !== undefined) {
    contents.retentionPeriod = deserializeAws_restJson1_1RetentionPeriod(
      data.retentionPeriod,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateDatastoreCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDatastoreCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot.common.types#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot.common.types#InvalidRequestException":
      response = await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.iot.common.types#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.iot.common.types#ResourceAlreadyExistsException":
      response = await deserializeAws_restJson1_1ResourceAlreadyExistsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iot.common.types#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazonaws.iot.common.types#ThrottlingException":
      response = await deserializeAws_restJson1_1ThrottlingExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.iot.krieger#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1CreatePipelineCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePipelineCommandOutput> {
  if (output.statusCode !== 201) {
    return deserializeAws_restJson1_1CreatePipelineCommandError(
      output,
      context
    );
  }
  const contents: CreatePipelineCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreatePipelineResponse",
    pipelineArn: undefined,
    pipelineName: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.pipelineArn !== undefined) {
    contents.pipelineArn = data.pipelineArn;
  }
  if (data.pipelineName !== undefined) {
    contents.pipelineName = data.pipelineName;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreatePipelineCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePipelineCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot.common.types#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot.common.types#InvalidRequestException":
      response = await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.iot.common.types#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.iot.common.types#ResourceAlreadyExistsException":
      response = await deserializeAws_restJson1_1ResourceAlreadyExistsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iot.common.types#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazonaws.iot.common.types#ThrottlingException":
      response = await deserializeAws_restJson1_1ThrottlingExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.iot.krieger#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1DeleteChannelCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteChannelCommandOutput> {
  if (output.statusCode !== 204) {
    return deserializeAws_restJson1_1DeleteChannelCommandError(output, context);
  }
  const contents: DeleteChannelCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteChannelCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteChannelCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot.common.types#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot.common.types#InvalidRequestException":
      response = await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iot.common.types#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iot.common.types#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazonaws.iot.common.types#ThrottlingException":
      response = await deserializeAws_restJson1_1ThrottlingExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.iot.krieger#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1DeleteDatasetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDatasetCommandOutput> {
  if (output.statusCode !== 204) {
    return deserializeAws_restJson1_1DeleteDatasetCommandError(output, context);
  }
  const contents: DeleteDatasetCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteDatasetCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDatasetCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot.common.types#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot.common.types#InvalidRequestException":
      response = await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iot.common.types#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iot.common.types#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazonaws.iot.common.types#ThrottlingException":
      response = await deserializeAws_restJson1_1ThrottlingExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.iot.krieger#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1DeleteDatasetContentCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDatasetContentCommandOutput> {
  if (output.statusCode !== 204) {
    return deserializeAws_restJson1_1DeleteDatasetContentCommandError(
      output,
      context
    );
  }
  const contents: DeleteDatasetContentCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteDatasetContentCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDatasetContentCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot.common.types#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot.common.types#InvalidRequestException":
      response = await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iot.common.types#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iot.common.types#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazonaws.iot.common.types#ThrottlingException":
      response = await deserializeAws_restJson1_1ThrottlingExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.iot.krieger#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1DeleteDatastoreCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDatastoreCommandOutput> {
  if (output.statusCode !== 204) {
    return deserializeAws_restJson1_1DeleteDatastoreCommandError(
      output,
      context
    );
  }
  const contents: DeleteDatastoreCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteDatastoreCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDatastoreCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot.common.types#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot.common.types#InvalidRequestException":
      response = await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iot.common.types#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iot.common.types#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazonaws.iot.common.types#ThrottlingException":
      response = await deserializeAws_restJson1_1ThrottlingExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.iot.krieger#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1DeletePipelineCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePipelineCommandOutput> {
  if (output.statusCode !== 204) {
    return deserializeAws_restJson1_1DeletePipelineCommandError(
      output,
      context
    );
  }
  const contents: DeletePipelineCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeletePipelineCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePipelineCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot.common.types#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot.common.types#InvalidRequestException":
      response = await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iot.common.types#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iot.common.types#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazonaws.iot.common.types#ThrottlingException":
      response = await deserializeAws_restJson1_1ThrottlingExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.iot.krieger#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1DescribeChannelCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeChannelCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1DescribeChannelCommandError(
      output,
      context
    );
  }
  const contents: DescribeChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeChannelResponse",
    channel: undefined,
    statistics: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.channel !== undefined) {
    contents.channel = deserializeAws_restJson1_1Channel(data.channel, context);
  }
  if (data.statistics !== undefined) {
    contents.statistics = deserializeAws_restJson1_1ChannelStatistics(
      data.statistics,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeChannelCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeChannelCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot.common.types#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot.common.types#InvalidRequestException":
      response = await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iot.common.types#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iot.common.types#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazonaws.iot.common.types#ThrottlingException":
      response = await deserializeAws_restJson1_1ThrottlingExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.iot.krieger#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1DescribeDatasetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDatasetCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1DescribeDatasetCommandError(
      output,
      context
    );
  }
  const contents: DescribeDatasetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeDatasetResponse",
    dataset: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.dataset !== undefined) {
    contents.dataset = deserializeAws_restJson1_1Dataset(data.dataset, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeDatasetCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDatasetCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot.common.types#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot.common.types#InvalidRequestException":
      response = await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iot.common.types#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iot.common.types#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazonaws.iot.common.types#ThrottlingException":
      response = await deserializeAws_restJson1_1ThrottlingExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.iot.krieger#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1DescribeDatastoreCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDatastoreCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1DescribeDatastoreCommandError(
      output,
      context
    );
  }
  const contents: DescribeDatastoreCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeDatastoreResponse",
    datastore: undefined,
    statistics: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.datastore !== undefined) {
    contents.datastore = deserializeAws_restJson1_1Datastore(
      data.datastore,
      context
    );
  }
  if (data.statistics !== undefined) {
    contents.statistics = deserializeAws_restJson1_1DatastoreStatistics(
      data.statistics,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeDatastoreCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDatastoreCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot.common.types#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot.common.types#InvalidRequestException":
      response = await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iot.common.types#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iot.common.types#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazonaws.iot.common.types#ThrottlingException":
      response = await deserializeAws_restJson1_1ThrottlingExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.iot.krieger#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1DescribeLoggingOptionsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLoggingOptionsCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1DescribeLoggingOptionsCommandError(
      output,
      context
    );
  }
  const contents: DescribeLoggingOptionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeLoggingOptionsResponse",
    loggingOptions: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.loggingOptions !== undefined) {
    contents.loggingOptions = deserializeAws_restJson1_1LoggingOptions(
      data.loggingOptions,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeLoggingOptionsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLoggingOptionsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot.common.types#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot.common.types#InvalidRequestException":
      response = await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iot.common.types#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iot.common.types#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazonaws.iot.common.types#ThrottlingException":
      response = await deserializeAws_restJson1_1ThrottlingExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.iot.krieger#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1DescribePipelineCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePipelineCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1DescribePipelineCommandError(
      output,
      context
    );
  }
  const contents: DescribePipelineCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribePipelineResponse",
    pipeline: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.pipeline !== undefined) {
    contents.pipeline = deserializeAws_restJson1_1Pipeline(
      data.pipeline,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribePipelineCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePipelineCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot.common.types#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot.common.types#InvalidRequestException":
      response = await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iot.common.types#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iot.common.types#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazonaws.iot.common.types#ThrottlingException":
      response = await deserializeAws_restJson1_1ThrottlingExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.iot.krieger#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1GetDatasetContentCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDatasetContentCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1GetDatasetContentCommandError(
      output,
      context
    );
  }
  const contents: GetDatasetContentCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetDatasetContentResponse",
    entries: undefined,
    status: undefined,
    timestamp: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.entries !== undefined) {
    contents.entries = deserializeAws_restJson1_1DatasetEntries(
      data.entries,
      context
    );
  }
  if (data.status !== undefined) {
    contents.status = deserializeAws_restJson1_1DatasetContentStatus(
      data.status,
      context
    );
  }
  if (data.timestamp !== undefined) {
    contents.timestamp = new Date(
      data.timestamp % 1 != 0
        ? Math.round(data.timestamp * 1000)
        : data.timestamp
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetDatasetContentCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDatasetContentCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot.common.types#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot.common.types#InvalidRequestException":
      response = await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iot.common.types#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iot.common.types#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazonaws.iot.common.types#ThrottlingException":
      response = await deserializeAws_restJson1_1ThrottlingExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.iot.krieger#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1ListChannelsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChannelsCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1ListChannelsCommandError(output, context);
  }
  const contents: ListChannelsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListChannelsResponse",
    channelSummaries: undefined,
    nextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.channelSummaries !== undefined) {
    contents.channelSummaries = deserializeAws_restJson1_1ChannelSummaries(
      data.channelSummaries,
      context
    );
  }
  if (data.nextToken !== undefined) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListChannelsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChannelsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot.common.types#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot.common.types#InvalidRequestException":
      response = await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iot.common.types#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazonaws.iot.common.types#ThrottlingException":
      response = await deserializeAws_restJson1_1ThrottlingExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.iot.krieger#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1ListDatasetContentsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDatasetContentsCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1ListDatasetContentsCommandError(
      output,
      context
    );
  }
  const contents: ListDatasetContentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListDatasetContentsResponse",
    datasetContentSummaries: undefined,
    nextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.datasetContentSummaries !== undefined) {
    contents.datasetContentSummaries = deserializeAws_restJson1_1DatasetContentSummaries(
      data.datasetContentSummaries,
      context
    );
  }
  if (data.nextToken !== undefined) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListDatasetContentsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDatasetContentsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot.common.types#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot.common.types#InvalidRequestException":
      response = await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iot.common.types#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iot.common.types#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazonaws.iot.common.types#ThrottlingException":
      response = await deserializeAws_restJson1_1ThrottlingExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.iot.krieger#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1ListDatasetsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDatasetsCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1ListDatasetsCommandError(output, context);
  }
  const contents: ListDatasetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListDatasetsResponse",
    datasetSummaries: undefined,
    nextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.datasetSummaries !== undefined) {
    contents.datasetSummaries = deserializeAws_restJson1_1DatasetSummaries(
      data.datasetSummaries,
      context
    );
  }
  if (data.nextToken !== undefined) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListDatasetsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDatasetsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot.common.types#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot.common.types#InvalidRequestException":
      response = await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iot.common.types#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazonaws.iot.common.types#ThrottlingException":
      response = await deserializeAws_restJson1_1ThrottlingExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.iot.krieger#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1ListDatastoresCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDatastoresCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1ListDatastoresCommandError(
      output,
      context
    );
  }
  const contents: ListDatastoresCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListDatastoresResponse",
    datastoreSummaries: undefined,
    nextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.datastoreSummaries !== undefined) {
    contents.datastoreSummaries = deserializeAws_restJson1_1DatastoreSummaries(
      data.datastoreSummaries,
      context
    );
  }
  if (data.nextToken !== undefined) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListDatastoresCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDatastoresCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot.common.types#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot.common.types#InvalidRequestException":
      response = await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iot.common.types#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazonaws.iot.common.types#ThrottlingException":
      response = await deserializeAws_restJson1_1ThrottlingExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.iot.krieger#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1ListPipelinesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPipelinesCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1ListPipelinesCommandError(output, context);
  }
  const contents: ListPipelinesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListPipelinesResponse",
    nextToken: undefined,
    pipelineSummaries: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined) {
    contents.nextToken = data.nextToken;
  }
  if (data.pipelineSummaries !== undefined) {
    contents.pipelineSummaries = deserializeAws_restJson1_1PipelineSummaries(
      data.pipelineSummaries,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListPipelinesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPipelinesCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot.common.types#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot.common.types#InvalidRequestException":
      response = await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iot.common.types#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazonaws.iot.common.types#ThrottlingException":
      response = await deserializeAws_restJson1_1ThrottlingExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.iot.krieger#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1ListTagsForResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1ListTagsForResourceCommandError(
      output,
      context
    );
  }
  const contents: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTagsForResourceResponse",
    tags: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.tags !== undefined) {
    contents.tags = deserializeAws_restJson1_1TagList(data.tags, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListTagsForResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot.common.types#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot.common.types#InvalidRequestException":
      response = await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.iot.common.types#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iot.common.types#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iot.common.types#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazonaws.iot.common.types#ThrottlingException":
      response = await deserializeAws_restJson1_1ThrottlingExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.iot.krieger#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1PutLoggingOptionsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutLoggingOptionsCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1PutLoggingOptionsCommandError(
      output,
      context
    );
  }
  const contents: PutLoggingOptionsCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1PutLoggingOptionsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutLoggingOptionsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot.common.types#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot.common.types#InvalidRequestException":
      response = await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iot.common.types#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazonaws.iot.common.types#ThrottlingException":
      response = await deserializeAws_restJson1_1ThrottlingExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.iot.krieger#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1RunPipelineActivityCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RunPipelineActivityCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1RunPipelineActivityCommandError(
      output,
      context
    );
  }
  const contents: RunPipelineActivityCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "RunPipelineActivityResponse",
    logResult: undefined,
    payloads: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.logResult !== undefined) {
    contents.logResult = data.logResult;
  }
  if (data.payloads !== undefined) {
    contents.payloads = deserializeAws_restJson1_1MessagePayloads(
      data.payloads,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1RunPipelineActivityCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RunPipelineActivityCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot.common.types#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot.common.types#InvalidRequestException":
      response = await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iot.common.types#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazonaws.iot.common.types#ThrottlingException":
      response = await deserializeAws_restJson1_1ThrottlingExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.iot.krieger#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1SampleChannelDataCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SampleChannelDataCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1SampleChannelDataCommandError(
      output,
      context
    );
  }
  const contents: SampleChannelDataCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "SampleChannelDataResponse",
    payloads: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.payloads !== undefined) {
    contents.payloads = deserializeAws_restJson1_1MessagePayloads(
      data.payloads,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1SampleChannelDataCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SampleChannelDataCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot.common.types#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot.common.types#InvalidRequestException":
      response = await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iot.common.types#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iot.common.types#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazonaws.iot.common.types#ThrottlingException":
      response = await deserializeAws_restJson1_1ThrottlingExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.iot.krieger#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1StartPipelineReprocessingCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartPipelineReprocessingCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1StartPipelineReprocessingCommandError(
      output,
      context
    );
  }
  const contents: StartPipelineReprocessingCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StartPipelineReprocessingResponse",
    reprocessingId: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.reprocessingId !== undefined) {
    contents.reprocessingId = data.reprocessingId;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1StartPipelineReprocessingCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartPipelineReprocessingCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot.common.types#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot.common.types#InvalidRequestException":
      response = await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.iot.common.types#ResourceAlreadyExistsException":
      response = await deserializeAws_restJson1_1ResourceAlreadyExistsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iot.common.types#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iot.common.types#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazonaws.iot.common.types#ThrottlingException":
      response = await deserializeAws_restJson1_1ThrottlingExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.iot.krieger#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1TagResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> {
  if (output.statusCode !== 204) {
    return deserializeAws_restJson1_1TagResourceCommandError(output, context);
  }
  const contents: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "TagResourceResponse"
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1TagResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot.common.types#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot.common.types#InvalidRequestException":
      response = await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.iot.common.types#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iot.common.types#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iot.common.types#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazonaws.iot.common.types#ThrottlingException":
      response = await deserializeAws_restJson1_1ThrottlingExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.iot.krieger#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1UntagResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> {
  if (output.statusCode !== 204) {
    return deserializeAws_restJson1_1UntagResourceCommandError(output, context);
  }
  const contents: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UntagResourceResponse"
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UntagResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot.common.types#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot.common.types#InvalidRequestException":
      response = await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.iot.common.types#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iot.common.types#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iot.common.types#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazonaws.iot.common.types#ThrottlingException":
      response = await deserializeAws_restJson1_1ThrottlingExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.iot.krieger#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1UpdateChannelCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateChannelCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1UpdateChannelCommandError(output, context);
  }
  const contents: UpdateChannelCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateChannelCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateChannelCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot.common.types#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot.common.types#InvalidRequestException":
      response = await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iot.common.types#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iot.common.types#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazonaws.iot.common.types#ThrottlingException":
      response = await deserializeAws_restJson1_1ThrottlingExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.iot.krieger#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1UpdateDatasetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDatasetCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1UpdateDatasetCommandError(output, context);
  }
  const contents: UpdateDatasetCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateDatasetCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDatasetCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot.common.types#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot.common.types#InvalidRequestException":
      response = await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iot.common.types#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iot.common.types#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazonaws.iot.common.types#ThrottlingException":
      response = await deserializeAws_restJson1_1ThrottlingExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.iot.krieger#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1UpdateDatastoreCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDatastoreCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1UpdateDatastoreCommandError(
      output,
      context
    );
  }
  const contents: UpdateDatastoreCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateDatastoreCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDatastoreCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot.common.types#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot.common.types#InvalidRequestException":
      response = await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iot.common.types#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iot.common.types#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazonaws.iot.common.types#ThrottlingException":
      response = await deserializeAws_restJson1_1ThrottlingExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.iot.krieger#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1UpdatePipelineCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePipelineCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1UpdatePipelineCommandError(
      output,
      context
    );
  }
  const contents: UpdatePipelineCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdatePipelineCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePipelineCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot.common.types#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot.common.types#InvalidRequestException":
      response = await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.iot.common.types#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iot.common.types#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iot.common.types#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazonaws.iot.common.types#ThrottlingException":
      response = await deserializeAws_restJson1_1ThrottlingExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.iot.krieger#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1BatchPutMessageCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchPutMessageCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1BatchPutMessageCommandError(
      output,
      context
    );
  }
  const contents: BatchPutMessageCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "BatchPutMessageResponse",
    batchPutMessageErrorEntries: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.batchPutMessageErrorEntries !== undefined) {
    contents.batchPutMessageErrorEntries = deserializeAws_restJson1_1BatchPutMessageErrorEntries(
      data.batchPutMessageErrorEntries,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1BatchPutMessageCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchPutMessageCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot.common.types#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot.common.types#InvalidRequestException":
      response = await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iot.common.types#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iot.common.types#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazonaws.iot.common.types#ThrottlingException":
      response = await deserializeAws_restJson1_1ThrottlingExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.iot.krieger.data#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

const deserializeAws_restJson1_1InternalFailureExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InternalFailureException> => {
  const contents: InternalFailureException = {
    __type: "InternalFailureException",
    $fault: "server",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = output.body;
  if (data.message !== undefined) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1InvalidRequestExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const contents: InvalidRequestException = {
    __type: "InvalidRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = output.body;
  if (data.message !== undefined) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1LimitExceededExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const contents: LimitExceededException = {
    __type: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = output.body;
  if (data.message !== undefined) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ResourceAlreadyExistsExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ResourceAlreadyExistsException> => {
  const contents: ResourceAlreadyExistsException = {
    __type: "ResourceAlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined,
    resourceArn: undefined,
    resourceId: undefined
  };
  const data: any = output.body;
  if (data.message !== undefined) {
    contents.message = data.message;
  }
  if (data.resourceArn !== undefined) {
    contents.resourceArn = data.resourceArn;
  }
  if (data.resourceId !== undefined) {
    contents.resourceId = data.resourceId;
  }
  return contents;
};

const deserializeAws_restJson1_1ResourceNotFoundExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: ResourceNotFoundException = {
    __type: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = output.body;
  if (data.message !== undefined) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ServiceUnavailableExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const contents: ServiceUnavailableException = {
    __type: "ServiceUnavailableException",
    $fault: "server",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = output.body;
  if (data.message !== undefined) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ThrottlingExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const contents: ThrottlingException = {
    __type: "ThrottlingException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = output.body;
  if (data.message !== undefined) {
    contents.message = data.message;
  }
  return contents;
};

const serializeAws_restJson1_1AddAttributesActivity = (
  input: AddAttributesActivity,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.attributes !== undefined) {
    bodyParams["attributes"] = serializeAws_restJson1_1AttributeNameMapping(
      input.attributes,
      context
    );
  }
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  if (input.next !== undefined) {
    bodyParams["next"] = input.next;
  }
  return bodyParams;
};

const serializeAws_restJson1_1AttributeNameMapping = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  let mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = input[key];
  });
  return mapParams;
};

const serializeAws_restJson1_1AttributeNames = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_restJson1_1ChannelActivity = (
  input: ChannelActivity,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.channelName !== undefined) {
    bodyParams["channelName"] = input.channelName;
  }
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  if (input.next !== undefined) {
    bodyParams["next"] = input.next;
  }
  return bodyParams;
};

const serializeAws_restJson1_1ChannelStorage = (
  input: ChannelStorage,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.customerManagedS3 !== undefined) {
    bodyParams[
      "customerManagedS3"
    ] = serializeAws_restJson1_1CustomerManagedChannelS3Storage(
      input.customerManagedS3,
      context
    );
  }
  if (input.serviceManagedS3 !== undefined) {
    bodyParams[
      "serviceManagedS3"
    ] = serializeAws_restJson1_1ServiceManagedChannelS3Storage(
      input.serviceManagedS3,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1ContainerDatasetAction = (
  input: ContainerDatasetAction,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.executionRoleArn !== undefined) {
    bodyParams["executionRoleArn"] = input.executionRoleArn;
  }
  if (input.image !== undefined) {
    bodyParams["image"] = input.image;
  }
  if (input.resourceConfiguration !== undefined) {
    bodyParams[
      "resourceConfiguration"
    ] = serializeAws_restJson1_1ResourceConfiguration(
      input.resourceConfiguration,
      context
    );
  }
  if (input.variables !== undefined) {
    bodyParams["variables"] = serializeAws_restJson1_1Variables(
      input.variables,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1CustomerManagedChannelS3Storage = (
  input: CustomerManagedChannelS3Storage,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.bucket !== undefined) {
    bodyParams["bucket"] = input.bucket;
  }
  if (input.keyPrefix !== undefined) {
    bodyParams["keyPrefix"] = input.keyPrefix;
  }
  if (input.roleArn !== undefined) {
    bodyParams["roleArn"] = input.roleArn;
  }
  return bodyParams;
};

const serializeAws_restJson1_1CustomerManagedDatastoreS3Storage = (
  input: CustomerManagedDatastoreS3Storage,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.bucket !== undefined) {
    bodyParams["bucket"] = input.bucket;
  }
  if (input.keyPrefix !== undefined) {
    bodyParams["keyPrefix"] = input.keyPrefix;
  }
  if (input.roleArn !== undefined) {
    bodyParams["roleArn"] = input.roleArn;
  }
  return bodyParams;
};

const serializeAws_restJson1_1DatasetAction = (
  input: DatasetAction,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.actionName !== undefined) {
    bodyParams["actionName"] = input.actionName;
  }
  if (input.containerAction !== undefined) {
    bodyParams[
      "containerAction"
    ] = serializeAws_restJson1_1ContainerDatasetAction(
      input.containerAction,
      context
    );
  }
  if (input.queryAction !== undefined) {
    bodyParams["queryAction"] = serializeAws_restJson1_1SqlQueryDatasetAction(
      input.queryAction,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1DatasetActions = (
  input: Array<DatasetAction>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_restJson1_1DatasetAction(entry, context)
  );
};

const serializeAws_restJson1_1DatasetContentDeliveryDestination = (
  input: DatasetContentDeliveryDestination,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.iotEventsDestinationConfiguration !== undefined) {
    bodyParams[
      "iotEventsDestinationConfiguration"
    ] = serializeAws_restJson1_1IotEventsDestinationConfiguration(
      input.iotEventsDestinationConfiguration,
      context
    );
  }
  if (input.s3DestinationConfiguration !== undefined) {
    bodyParams[
      "s3DestinationConfiguration"
    ] = serializeAws_restJson1_1S3DestinationConfiguration(
      input.s3DestinationConfiguration,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1DatasetContentDeliveryRule = (
  input: DatasetContentDeliveryRule,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.destination !== undefined) {
    bodyParams[
      "destination"
    ] = serializeAws_restJson1_1DatasetContentDeliveryDestination(
      input.destination,
      context
    );
  }
  if (input.entryName !== undefined) {
    bodyParams["entryName"] = input.entryName;
  }
  return bodyParams;
};

const serializeAws_restJson1_1DatasetContentDeliveryRules = (
  input: Array<DatasetContentDeliveryRule>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_restJson1_1DatasetContentDeliveryRule(entry, context)
  );
};

const serializeAws_restJson1_1DatasetContentVersionValue = (
  input: DatasetContentVersionValue,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.datasetName !== undefined) {
    bodyParams["datasetName"] = input.datasetName;
  }
  return bodyParams;
};

const serializeAws_restJson1_1DatasetTrigger = (
  input: DatasetTrigger,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.dataset !== undefined) {
    bodyParams["dataset"] = serializeAws_restJson1_1TriggeringDataset(
      input.dataset,
      context
    );
  }
  if (input.schedule !== undefined) {
    bodyParams["schedule"] = serializeAws_restJson1_1Schedule(
      input.schedule,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1DatasetTriggers = (
  input: Array<DatasetTrigger>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_restJson1_1DatasetTrigger(entry, context)
  );
};

const serializeAws_restJson1_1DatastoreActivity = (
  input: DatastoreActivity,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.datastoreName !== undefined) {
    bodyParams["datastoreName"] = input.datastoreName;
  }
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  return bodyParams;
};

const serializeAws_restJson1_1DatastoreStorage = (
  input: DatastoreStorage,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.customerManagedS3 !== undefined) {
    bodyParams[
      "customerManagedS3"
    ] = serializeAws_restJson1_1CustomerManagedDatastoreS3Storage(
      input.customerManagedS3,
      context
    );
  }
  if (input.serviceManagedS3 !== undefined) {
    bodyParams[
      "serviceManagedS3"
    ] = serializeAws_restJson1_1ServiceManagedDatastoreS3Storage(
      input.serviceManagedS3,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1DeltaTime = (
  input: DeltaTime,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.offsetSeconds !== undefined) {
    bodyParams["offsetSeconds"] = input.offsetSeconds;
  }
  if (input.timeExpression !== undefined) {
    bodyParams["timeExpression"] = input.timeExpression;
  }
  return bodyParams;
};

const serializeAws_restJson1_1DeviceRegistryEnrichActivity = (
  input: DeviceRegistryEnrichActivity,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.attribute !== undefined) {
    bodyParams["attribute"] = input.attribute;
  }
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  if (input.next !== undefined) {
    bodyParams["next"] = input.next;
  }
  if (input.roleArn !== undefined) {
    bodyParams["roleArn"] = input.roleArn;
  }
  if (input.thingName !== undefined) {
    bodyParams["thingName"] = input.thingName;
  }
  return bodyParams;
};

const serializeAws_restJson1_1DeviceShadowEnrichActivity = (
  input: DeviceShadowEnrichActivity,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.attribute !== undefined) {
    bodyParams["attribute"] = input.attribute;
  }
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  if (input.next !== undefined) {
    bodyParams["next"] = input.next;
  }
  if (input.roleArn !== undefined) {
    bodyParams["roleArn"] = input.roleArn;
  }
  if (input.thingName !== undefined) {
    bodyParams["thingName"] = input.thingName;
  }
  return bodyParams;
};

const serializeAws_restJson1_1FilterActivity = (
  input: FilterActivity,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.filter !== undefined) {
    bodyParams["filter"] = input.filter;
  }
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  if (input.next !== undefined) {
    bodyParams["next"] = input.next;
  }
  return bodyParams;
};

const serializeAws_restJson1_1GlueConfiguration = (
  input: GlueConfiguration,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.databaseName !== undefined) {
    bodyParams["databaseName"] = input.databaseName;
  }
  if (input.tableName !== undefined) {
    bodyParams["tableName"] = input.tableName;
  }
  return bodyParams;
};

const serializeAws_restJson1_1IotEventsDestinationConfiguration = (
  input: IotEventsDestinationConfiguration,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.inputName !== undefined) {
    bodyParams["inputName"] = input.inputName;
  }
  if (input.roleArn !== undefined) {
    bodyParams["roleArn"] = input.roleArn;
  }
  return bodyParams;
};

const serializeAws_restJson1_1LambdaActivity = (
  input: LambdaActivity,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.batchSize !== undefined) {
    bodyParams["batchSize"] = input.batchSize;
  }
  if (input.lambdaName !== undefined) {
    bodyParams["lambdaName"] = input.lambdaName;
  }
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  if (input.next !== undefined) {
    bodyParams["next"] = input.next;
  }
  return bodyParams;
};

const serializeAws_restJson1_1LoggingOptions = (
  input: LoggingOptions,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.enabled !== undefined) {
    bodyParams["enabled"] = input.enabled;
  }
  if (input.level !== undefined) {
    bodyParams["level"] = input.level;
  }
  if (input.roleArn !== undefined) {
    bodyParams["roleArn"] = input.roleArn;
  }
  return bodyParams;
};

const serializeAws_restJson1_1MathActivity = (
  input: MathActivity,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.attribute !== undefined) {
    bodyParams["attribute"] = input.attribute;
  }
  if (input.math !== undefined) {
    bodyParams["math"] = input.math;
  }
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  if (input.next !== undefined) {
    bodyParams["next"] = input.next;
  }
  return bodyParams;
};

const serializeAws_restJson1_1MessagePayloads = (
  input: Array<Uint8Array>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => context.base64Encoder(entry));
};

const serializeAws_restJson1_1OutputFileUriValue = (
  input: OutputFileUriValue,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.fileName !== undefined) {
    bodyParams["fileName"] = input.fileName;
  }
  return bodyParams;
};

const serializeAws_restJson1_1PipelineActivities = (
  input: Array<PipelineActivity>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_restJson1_1PipelineActivity(entry, context)
  );
};

const serializeAws_restJson1_1PipelineActivity = (
  input: PipelineActivity,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.addAttributes !== undefined) {
    bodyParams["addAttributes"] = serializeAws_restJson1_1AddAttributesActivity(
      input.addAttributes,
      context
    );
  }
  if (input.channel !== undefined) {
    bodyParams["channel"] = serializeAws_restJson1_1ChannelActivity(
      input.channel,
      context
    );
  }
  if (input.datastore !== undefined) {
    bodyParams["datastore"] = serializeAws_restJson1_1DatastoreActivity(
      input.datastore,
      context
    );
  }
  if (input.deviceRegistryEnrich !== undefined) {
    bodyParams[
      "deviceRegistryEnrich"
    ] = serializeAws_restJson1_1DeviceRegistryEnrichActivity(
      input.deviceRegistryEnrich,
      context
    );
  }
  if (input.deviceShadowEnrich !== undefined) {
    bodyParams[
      "deviceShadowEnrich"
    ] = serializeAws_restJson1_1DeviceShadowEnrichActivity(
      input.deviceShadowEnrich,
      context
    );
  }
  if (input.filter !== undefined) {
    bodyParams["filter"] = serializeAws_restJson1_1FilterActivity(
      input.filter,
      context
    );
  }
  if (input.lambda !== undefined) {
    bodyParams["lambda"] = serializeAws_restJson1_1LambdaActivity(
      input.lambda,
      context
    );
  }
  if (input.math !== undefined) {
    bodyParams["math"] = serializeAws_restJson1_1MathActivity(
      input.math,
      context
    );
  }
  if (input.removeAttributes !== undefined) {
    bodyParams[
      "removeAttributes"
    ] = serializeAws_restJson1_1RemoveAttributesActivity(
      input.removeAttributes,
      context
    );
  }
  if (input.selectAttributes !== undefined) {
    bodyParams[
      "selectAttributes"
    ] = serializeAws_restJson1_1SelectAttributesActivity(
      input.selectAttributes,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1QueryFilter = (
  input: QueryFilter,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.deltaTime !== undefined) {
    bodyParams["deltaTime"] = serializeAws_restJson1_1DeltaTime(
      input.deltaTime,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1QueryFilters = (
  input: Array<QueryFilter>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_restJson1_1QueryFilter(entry, context)
  );
};

const serializeAws_restJson1_1RemoveAttributesActivity = (
  input: RemoveAttributesActivity,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.attributes !== undefined) {
    bodyParams["attributes"] = serializeAws_restJson1_1AttributeNames(
      input.attributes,
      context
    );
  }
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  if (input.next !== undefined) {
    bodyParams["next"] = input.next;
  }
  return bodyParams;
};

const serializeAws_restJson1_1ResourceConfiguration = (
  input: ResourceConfiguration,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.computeType !== undefined) {
    bodyParams["computeType"] = input.computeType;
  }
  if (input.volumeSizeInGB !== undefined) {
    bodyParams["volumeSizeInGB"] = input.volumeSizeInGB;
  }
  return bodyParams;
};

const serializeAws_restJson1_1RetentionPeriod = (
  input: RetentionPeriod,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.numberOfDays !== undefined) {
    bodyParams["numberOfDays"] = input.numberOfDays;
  }
  if (input.unlimited !== undefined) {
    bodyParams["unlimited"] = input.unlimited;
  }
  return bodyParams;
};

const serializeAws_restJson1_1S3DestinationConfiguration = (
  input: S3DestinationConfiguration,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.bucket !== undefined) {
    bodyParams["bucket"] = input.bucket;
  }
  if (input.glueConfiguration !== undefined) {
    bodyParams["glueConfiguration"] = serializeAws_restJson1_1GlueConfiguration(
      input.glueConfiguration,
      context
    );
  }
  if (input.key !== undefined) {
    bodyParams["key"] = input.key;
  }
  if (input.roleArn !== undefined) {
    bodyParams["roleArn"] = input.roleArn;
  }
  return bodyParams;
};

const serializeAws_restJson1_1Schedule = (
  input: Schedule,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.expression !== undefined) {
    bodyParams["expression"] = input.expression;
  }
  return bodyParams;
};

const serializeAws_restJson1_1SelectAttributesActivity = (
  input: SelectAttributesActivity,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.attributes !== undefined) {
    bodyParams["attributes"] = serializeAws_restJson1_1AttributeNames(
      input.attributes,
      context
    );
  }
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  if (input.next !== undefined) {
    bodyParams["next"] = input.next;
  }
  return bodyParams;
};

const serializeAws_restJson1_1ServiceManagedChannelS3Storage = (
  input: ServiceManagedChannelS3Storage,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  return bodyParams;
};

const serializeAws_restJson1_1ServiceManagedDatastoreS3Storage = (
  input: ServiceManagedDatastoreS3Storage,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  return bodyParams;
};

const serializeAws_restJson1_1SqlQueryDatasetAction = (
  input: SqlQueryDatasetAction,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.filters !== undefined) {
    bodyParams["filters"] = serializeAws_restJson1_1QueryFilters(
      input.filters,
      context
    );
  }
  if (input.sqlQuery !== undefined) {
    bodyParams["sqlQuery"] = input.sqlQuery;
  }
  return bodyParams;
};

const serializeAws_restJson1_1Tag = (
  input: Tag,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.key !== undefined) {
    bodyParams["key"] = input.key;
  }
  if (input.value !== undefined) {
    bodyParams["value"] = input.value;
  }
  return bodyParams;
};

const serializeAws_restJson1_1TagList = (
  input: Array<Tag>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_restJson1_1Tag(entry, context)
  );
};

const serializeAws_restJson1_1TriggeringDataset = (
  input: TriggeringDataset,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  return bodyParams;
};

const serializeAws_restJson1_1Variable = (
  input: Variable,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.datasetContentVersionValue !== undefined) {
    bodyParams[
      "datasetContentVersionValue"
    ] = serializeAws_restJson1_1DatasetContentVersionValue(
      input.datasetContentVersionValue,
      context
    );
  }
  if (input.doubleValue !== undefined) {
    bodyParams["doubleValue"] = input.doubleValue;
  }
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  if (input.outputFileUriValue !== undefined) {
    bodyParams[
      "outputFileUriValue"
    ] = serializeAws_restJson1_1OutputFileUriValue(
      input.outputFileUriValue,
      context
    );
  }
  if (input.stringValue !== undefined) {
    bodyParams["stringValue"] = input.stringValue;
  }
  return bodyParams;
};

const serializeAws_restJson1_1Variables = (
  input: Array<Variable>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_restJson1_1Variable(entry, context)
  );
};

const serializeAws_restJson1_1VersioningConfiguration = (
  input: VersioningConfiguration,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.maxVersions !== undefined) {
    bodyParams["maxVersions"] = input.maxVersions;
  }
  if (input.unlimited !== undefined) {
    bodyParams["unlimited"] = input.unlimited;
  }
  return bodyParams;
};

const serializeAws_restJson1_1Message = (
  input: Message,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.messageId !== undefined) {
    bodyParams["messageId"] = input.messageId;
  }
  if (input.payload !== undefined) {
    bodyParams["payload"] = context.base64Encoder(input.payload);
  }
  return bodyParams;
};

const serializeAws_restJson1_1Messages = (
  input: Array<Message>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_restJson1_1Message(entry, context)
  );
};

const deserializeAws_restJson1_1AddAttributesActivity = (
  output: any,
  context: __SerdeContext
): AddAttributesActivity => {
  let contents: any = {
    __type: "AddAttributesActivity",
    attributes: undefined,
    name: undefined,
    next: undefined
  };
  if (output.attributes !== undefined) {
    contents.attributes = deserializeAws_restJson1_1AttributeNameMapping(
      output.attributes,
      context
    );
  }
  if (output.name !== undefined) {
    contents.name = output.name;
  }
  if (output.next !== undefined) {
    contents.next = output.next;
  }
  return contents;
};

const deserializeAws_restJson1_1AttributeNameMapping = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  let mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_restJson1_1AttributeNames = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1Channel = (
  output: any,
  context: __SerdeContext
): Channel => {
  let contents: any = {
    __type: "Channel",
    arn: undefined,
    creationTime: undefined,
    lastUpdateTime: undefined,
    name: undefined,
    retentionPeriod: undefined,
    status: undefined,
    storage: undefined
  };
  if (output.arn !== undefined) {
    contents.arn = output.arn;
  }
  if (output.creationTime !== undefined) {
    contents.creationTime = new Date(
      output.creationTime % 1 != 0
        ? Math.round(output.creationTime * 1000)
        : output.creationTime
    );
  }
  if (output.lastUpdateTime !== undefined) {
    contents.lastUpdateTime = new Date(
      output.lastUpdateTime % 1 != 0
        ? Math.round(output.lastUpdateTime * 1000)
        : output.lastUpdateTime
    );
  }
  if (output.name !== undefined) {
    contents.name = output.name;
  }
  if (output.retentionPeriod !== undefined) {
    contents.retentionPeriod = deserializeAws_restJson1_1RetentionPeriod(
      output.retentionPeriod,
      context
    );
  }
  if (output.status !== undefined) {
    contents.status = output.status;
  }
  if (output.storage !== undefined) {
    contents.storage = deserializeAws_restJson1_1ChannelStorage(
      output.storage,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1ChannelActivity = (
  output: any,
  context: __SerdeContext
): ChannelActivity => {
  let contents: any = {
    __type: "ChannelActivity",
    channelName: undefined,
    name: undefined,
    next: undefined
  };
  if (output.channelName !== undefined) {
    contents.channelName = output.channelName;
  }
  if (output.name !== undefined) {
    contents.name = output.name;
  }
  if (output.next !== undefined) {
    contents.next = output.next;
  }
  return contents;
};

const deserializeAws_restJson1_1ChannelStatistics = (
  output: any,
  context: __SerdeContext
): ChannelStatistics => {
  let contents: any = {
    __type: "ChannelStatistics",
    size: undefined
  };
  if (output.size !== undefined) {
    contents.size = deserializeAws_restJson1_1EstimatedResourceSize(
      output.size,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1ChannelStorage = (
  output: any,
  context: __SerdeContext
): ChannelStorage => {
  let contents: any = {
    __type: "ChannelStorage",
    customerManagedS3: undefined,
    serviceManagedS3: undefined
  };
  if (output.customerManagedS3 !== undefined) {
    contents.customerManagedS3 = deserializeAws_restJson1_1CustomerManagedChannelS3Storage(
      output.customerManagedS3,
      context
    );
  }
  if (output.serviceManagedS3 !== undefined) {
    contents.serviceManagedS3 = deserializeAws_restJson1_1ServiceManagedChannelS3Storage(
      output.serviceManagedS3,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1ChannelStorageSummary = (
  output: any,
  context: __SerdeContext
): ChannelStorageSummary => {
  let contents: any = {
    __type: "ChannelStorageSummary",
    customerManagedS3: undefined,
    serviceManagedS3: undefined
  };
  if (output.customerManagedS3 !== undefined) {
    contents.customerManagedS3 = deserializeAws_restJson1_1CustomerManagedChannelS3StorageSummary(
      output.customerManagedS3,
      context
    );
  }
  if (output.serviceManagedS3 !== undefined) {
    contents.serviceManagedS3 = deserializeAws_restJson1_1ServiceManagedChannelS3StorageSummary(
      output.serviceManagedS3,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1ChannelSummaries = (
  output: any,
  context: __SerdeContext
): Array<ChannelSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1ChannelSummary(entry, context)
  );
};

const deserializeAws_restJson1_1ChannelSummary = (
  output: any,
  context: __SerdeContext
): ChannelSummary => {
  let contents: any = {
    __type: "ChannelSummary",
    channelName: undefined,
    channelStorage: undefined,
    creationTime: undefined,
    lastUpdateTime: undefined,
    status: undefined
  };
  if (output.channelName !== undefined) {
    contents.channelName = output.channelName;
  }
  if (output.channelStorage !== undefined) {
    contents.channelStorage = deserializeAws_restJson1_1ChannelStorageSummary(
      output.channelStorage,
      context
    );
  }
  if (output.creationTime !== undefined) {
    contents.creationTime = new Date(
      output.creationTime % 1 != 0
        ? Math.round(output.creationTime * 1000)
        : output.creationTime
    );
  }
  if (output.lastUpdateTime !== undefined) {
    contents.lastUpdateTime = new Date(
      output.lastUpdateTime % 1 != 0
        ? Math.round(output.lastUpdateTime * 1000)
        : output.lastUpdateTime
    );
  }
  if (output.status !== undefined) {
    contents.status = output.status;
  }
  return contents;
};

const deserializeAws_restJson1_1ContainerDatasetAction = (
  output: any,
  context: __SerdeContext
): ContainerDatasetAction => {
  let contents: any = {
    __type: "ContainerDatasetAction",
    executionRoleArn: undefined,
    image: undefined,
    resourceConfiguration: undefined,
    variables: undefined
  };
  if (output.executionRoleArn !== undefined) {
    contents.executionRoleArn = output.executionRoleArn;
  }
  if (output.image !== undefined) {
    contents.image = output.image;
  }
  if (output.resourceConfiguration !== undefined) {
    contents.resourceConfiguration = deserializeAws_restJson1_1ResourceConfiguration(
      output.resourceConfiguration,
      context
    );
  }
  if (output.variables !== undefined) {
    contents.variables = deserializeAws_restJson1_1Variables(
      output.variables,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1CustomerManagedChannelS3Storage = (
  output: any,
  context: __SerdeContext
): CustomerManagedChannelS3Storage => {
  let contents: any = {
    __type: "CustomerManagedChannelS3Storage",
    bucket: undefined,
    keyPrefix: undefined,
    roleArn: undefined
  };
  if (output.bucket !== undefined) {
    contents.bucket = output.bucket;
  }
  if (output.keyPrefix !== undefined) {
    contents.keyPrefix = output.keyPrefix;
  }
  if (output.roleArn !== undefined) {
    contents.roleArn = output.roleArn;
  }
  return contents;
};

const deserializeAws_restJson1_1CustomerManagedChannelS3StorageSummary = (
  output: any,
  context: __SerdeContext
): CustomerManagedChannelS3StorageSummary => {
  let contents: any = {
    __type: "CustomerManagedChannelS3StorageSummary",
    bucket: undefined,
    keyPrefix: undefined,
    roleArn: undefined
  };
  if (output.bucket !== undefined) {
    contents.bucket = output.bucket;
  }
  if (output.keyPrefix !== undefined) {
    contents.keyPrefix = output.keyPrefix;
  }
  if (output.roleArn !== undefined) {
    contents.roleArn = output.roleArn;
  }
  return contents;
};

const deserializeAws_restJson1_1CustomerManagedDatastoreS3Storage = (
  output: any,
  context: __SerdeContext
): CustomerManagedDatastoreS3Storage => {
  let contents: any = {
    __type: "CustomerManagedDatastoreS3Storage",
    bucket: undefined,
    keyPrefix: undefined,
    roleArn: undefined
  };
  if (output.bucket !== undefined) {
    contents.bucket = output.bucket;
  }
  if (output.keyPrefix !== undefined) {
    contents.keyPrefix = output.keyPrefix;
  }
  if (output.roleArn !== undefined) {
    contents.roleArn = output.roleArn;
  }
  return contents;
};

const deserializeAws_restJson1_1CustomerManagedDatastoreS3StorageSummary = (
  output: any,
  context: __SerdeContext
): CustomerManagedDatastoreS3StorageSummary => {
  let contents: any = {
    __type: "CustomerManagedDatastoreS3StorageSummary",
    bucket: undefined,
    keyPrefix: undefined,
    roleArn: undefined
  };
  if (output.bucket !== undefined) {
    contents.bucket = output.bucket;
  }
  if (output.keyPrefix !== undefined) {
    contents.keyPrefix = output.keyPrefix;
  }
  if (output.roleArn !== undefined) {
    contents.roleArn = output.roleArn;
  }
  return contents;
};

const deserializeAws_restJson1_1Dataset = (
  output: any,
  context: __SerdeContext
): Dataset => {
  let contents: any = {
    __type: "Dataset",
    actions: undefined,
    arn: undefined,
    contentDeliveryRules: undefined,
    creationTime: undefined,
    lastUpdateTime: undefined,
    name: undefined,
    retentionPeriod: undefined,
    status: undefined,
    triggers: undefined,
    versioningConfiguration: undefined
  };
  if (output.actions !== undefined) {
    contents.actions = deserializeAws_restJson1_1DatasetActions(
      output.actions,
      context
    );
  }
  if (output.arn !== undefined) {
    contents.arn = output.arn;
  }
  if (output.contentDeliveryRules !== undefined) {
    contents.contentDeliveryRules = deserializeAws_restJson1_1DatasetContentDeliveryRules(
      output.contentDeliveryRules,
      context
    );
  }
  if (output.creationTime !== undefined) {
    contents.creationTime = new Date(
      output.creationTime % 1 != 0
        ? Math.round(output.creationTime * 1000)
        : output.creationTime
    );
  }
  if (output.lastUpdateTime !== undefined) {
    contents.lastUpdateTime = new Date(
      output.lastUpdateTime % 1 != 0
        ? Math.round(output.lastUpdateTime * 1000)
        : output.lastUpdateTime
    );
  }
  if (output.name !== undefined) {
    contents.name = output.name;
  }
  if (output.retentionPeriod !== undefined) {
    contents.retentionPeriod = deserializeAws_restJson1_1RetentionPeriod(
      output.retentionPeriod,
      context
    );
  }
  if (output.status !== undefined) {
    contents.status = output.status;
  }
  if (output.triggers !== undefined) {
    contents.triggers = deserializeAws_restJson1_1DatasetTriggers(
      output.triggers,
      context
    );
  }
  if (output.versioningConfiguration !== undefined) {
    contents.versioningConfiguration = deserializeAws_restJson1_1VersioningConfiguration(
      output.versioningConfiguration,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1DatasetAction = (
  output: any,
  context: __SerdeContext
): DatasetAction => {
  let contents: any = {
    __type: "DatasetAction",
    actionName: undefined,
    containerAction: undefined,
    queryAction: undefined
  };
  if (output.actionName !== undefined) {
    contents.actionName = output.actionName;
  }
  if (output.containerAction !== undefined) {
    contents.containerAction = deserializeAws_restJson1_1ContainerDatasetAction(
      output.containerAction,
      context
    );
  }
  if (output.queryAction !== undefined) {
    contents.queryAction = deserializeAws_restJson1_1SqlQueryDatasetAction(
      output.queryAction,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1DatasetActionSummaries = (
  output: any,
  context: __SerdeContext
): Array<DatasetActionSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1DatasetActionSummary(entry, context)
  );
};

const deserializeAws_restJson1_1DatasetActionSummary = (
  output: any,
  context: __SerdeContext
): DatasetActionSummary => {
  let contents: any = {
    __type: "DatasetActionSummary",
    actionName: undefined,
    actionType: undefined
  };
  if (output.actionName !== undefined) {
    contents.actionName = output.actionName;
  }
  if (output.actionType !== undefined) {
    contents.actionType = output.actionType;
  }
  return contents;
};

const deserializeAws_restJson1_1DatasetActions = (
  output: any,
  context: __SerdeContext
): Array<DatasetAction> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1DatasetAction(entry, context)
  );
};

const deserializeAws_restJson1_1DatasetContentDeliveryDestination = (
  output: any,
  context: __SerdeContext
): DatasetContentDeliveryDestination => {
  let contents: any = {
    __type: "DatasetContentDeliveryDestination",
    iotEventsDestinationConfiguration: undefined,
    s3DestinationConfiguration: undefined
  };
  if (output.iotEventsDestinationConfiguration !== undefined) {
    contents.iotEventsDestinationConfiguration = deserializeAws_restJson1_1IotEventsDestinationConfiguration(
      output.iotEventsDestinationConfiguration,
      context
    );
  }
  if (output.s3DestinationConfiguration !== undefined) {
    contents.s3DestinationConfiguration = deserializeAws_restJson1_1S3DestinationConfiguration(
      output.s3DestinationConfiguration,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1DatasetContentDeliveryRule = (
  output: any,
  context: __SerdeContext
): DatasetContentDeliveryRule => {
  let contents: any = {
    __type: "DatasetContentDeliveryRule",
    destination: undefined,
    entryName: undefined
  };
  if (output.destination !== undefined) {
    contents.destination = deserializeAws_restJson1_1DatasetContentDeliveryDestination(
      output.destination,
      context
    );
  }
  if (output.entryName !== undefined) {
    contents.entryName = output.entryName;
  }
  return contents;
};

const deserializeAws_restJson1_1DatasetContentDeliveryRules = (
  output: any,
  context: __SerdeContext
): Array<DatasetContentDeliveryRule> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1DatasetContentDeliveryRule(entry, context)
  );
};

const deserializeAws_restJson1_1DatasetContentStatus = (
  output: any,
  context: __SerdeContext
): DatasetContentStatus => {
  let contents: any = {
    __type: "DatasetContentStatus",
    reason: undefined,
    state: undefined
  };
  if (output.reason !== undefined) {
    contents.reason = output.reason;
  }
  if (output.state !== undefined) {
    contents.state = output.state;
  }
  return contents;
};

const deserializeAws_restJson1_1DatasetContentSummaries = (
  output: any,
  context: __SerdeContext
): Array<DatasetContentSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1DatasetContentSummary(entry, context)
  );
};

const deserializeAws_restJson1_1DatasetContentSummary = (
  output: any,
  context: __SerdeContext
): DatasetContentSummary => {
  let contents: any = {
    __type: "DatasetContentSummary",
    completionTime: undefined,
    creationTime: undefined,
    scheduleTime: undefined,
    status: undefined,
    version: undefined
  };
  if (output.completionTime !== undefined) {
    contents.completionTime = new Date(
      output.completionTime % 1 != 0
        ? Math.round(output.completionTime * 1000)
        : output.completionTime
    );
  }
  if (output.creationTime !== undefined) {
    contents.creationTime = new Date(
      output.creationTime % 1 != 0
        ? Math.round(output.creationTime * 1000)
        : output.creationTime
    );
  }
  if (output.scheduleTime !== undefined) {
    contents.scheduleTime = new Date(
      output.scheduleTime % 1 != 0
        ? Math.round(output.scheduleTime * 1000)
        : output.scheduleTime
    );
  }
  if (output.status !== undefined) {
    contents.status = deserializeAws_restJson1_1DatasetContentStatus(
      output.status,
      context
    );
  }
  if (output.version !== undefined) {
    contents.version = output.version;
  }
  return contents;
};

const deserializeAws_restJson1_1DatasetContentVersionValue = (
  output: any,
  context: __SerdeContext
): DatasetContentVersionValue => {
  let contents: any = {
    __type: "DatasetContentVersionValue",
    datasetName: undefined
  };
  if (output.datasetName !== undefined) {
    contents.datasetName = output.datasetName;
  }
  return contents;
};

const deserializeAws_restJson1_1DatasetEntries = (
  output: any,
  context: __SerdeContext
): Array<DatasetEntry> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1DatasetEntry(entry, context)
  );
};

const deserializeAws_restJson1_1DatasetEntry = (
  output: any,
  context: __SerdeContext
): DatasetEntry => {
  let contents: any = {
    __type: "DatasetEntry",
    dataURI: undefined,
    entryName: undefined
  };
  if (output.dataURI !== undefined) {
    contents.dataURI = output.dataURI;
  }
  if (output.entryName !== undefined) {
    contents.entryName = output.entryName;
  }
  return contents;
};

const deserializeAws_restJson1_1DatasetSummaries = (
  output: any,
  context: __SerdeContext
): Array<DatasetSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1DatasetSummary(entry, context)
  );
};

const deserializeAws_restJson1_1DatasetSummary = (
  output: any,
  context: __SerdeContext
): DatasetSummary => {
  let contents: any = {
    __type: "DatasetSummary",
    actions: undefined,
    creationTime: undefined,
    datasetName: undefined,
    lastUpdateTime: undefined,
    status: undefined,
    triggers: undefined
  };
  if (output.actions !== undefined) {
    contents.actions = deserializeAws_restJson1_1DatasetActionSummaries(
      output.actions,
      context
    );
  }
  if (output.creationTime !== undefined) {
    contents.creationTime = new Date(
      output.creationTime % 1 != 0
        ? Math.round(output.creationTime * 1000)
        : output.creationTime
    );
  }
  if (output.datasetName !== undefined) {
    contents.datasetName = output.datasetName;
  }
  if (output.lastUpdateTime !== undefined) {
    contents.lastUpdateTime = new Date(
      output.lastUpdateTime % 1 != 0
        ? Math.round(output.lastUpdateTime * 1000)
        : output.lastUpdateTime
    );
  }
  if (output.status !== undefined) {
    contents.status = output.status;
  }
  if (output.triggers !== undefined) {
    contents.triggers = deserializeAws_restJson1_1DatasetTriggers(
      output.triggers,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1DatasetTrigger = (
  output: any,
  context: __SerdeContext
): DatasetTrigger => {
  let contents: any = {
    __type: "DatasetTrigger",
    dataset: undefined,
    schedule: undefined
  };
  if (output.dataset !== undefined) {
    contents.dataset = deserializeAws_restJson1_1TriggeringDataset(
      output.dataset,
      context
    );
  }
  if (output.schedule !== undefined) {
    contents.schedule = deserializeAws_restJson1_1Schedule(
      output.schedule,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1DatasetTriggers = (
  output: any,
  context: __SerdeContext
): Array<DatasetTrigger> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1DatasetTrigger(entry, context)
  );
};

const deserializeAws_restJson1_1Datastore = (
  output: any,
  context: __SerdeContext
): Datastore => {
  let contents: any = {
    __type: "Datastore",
    arn: undefined,
    creationTime: undefined,
    lastUpdateTime: undefined,
    name: undefined,
    retentionPeriod: undefined,
    status: undefined,
    storage: undefined
  };
  if (output.arn !== undefined) {
    contents.arn = output.arn;
  }
  if (output.creationTime !== undefined) {
    contents.creationTime = new Date(
      output.creationTime % 1 != 0
        ? Math.round(output.creationTime * 1000)
        : output.creationTime
    );
  }
  if (output.lastUpdateTime !== undefined) {
    contents.lastUpdateTime = new Date(
      output.lastUpdateTime % 1 != 0
        ? Math.round(output.lastUpdateTime * 1000)
        : output.lastUpdateTime
    );
  }
  if (output.name !== undefined) {
    contents.name = output.name;
  }
  if (output.retentionPeriod !== undefined) {
    contents.retentionPeriod = deserializeAws_restJson1_1RetentionPeriod(
      output.retentionPeriod,
      context
    );
  }
  if (output.status !== undefined) {
    contents.status = output.status;
  }
  if (output.storage !== undefined) {
    contents.storage = deserializeAws_restJson1_1DatastoreStorage(
      output.storage,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1DatastoreActivity = (
  output: any,
  context: __SerdeContext
): DatastoreActivity => {
  let contents: any = {
    __type: "DatastoreActivity",
    datastoreName: undefined,
    name: undefined
  };
  if (output.datastoreName !== undefined) {
    contents.datastoreName = output.datastoreName;
  }
  if (output.name !== undefined) {
    contents.name = output.name;
  }
  return contents;
};

const deserializeAws_restJson1_1DatastoreStatistics = (
  output: any,
  context: __SerdeContext
): DatastoreStatistics => {
  let contents: any = {
    __type: "DatastoreStatistics",
    size: undefined
  };
  if (output.size !== undefined) {
    contents.size = deserializeAws_restJson1_1EstimatedResourceSize(
      output.size,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1DatastoreStorage = (
  output: any,
  context: __SerdeContext
): DatastoreStorage => {
  let contents: any = {
    __type: "DatastoreStorage",
    customerManagedS3: undefined,
    serviceManagedS3: undefined
  };
  if (output.customerManagedS3 !== undefined) {
    contents.customerManagedS3 = deserializeAws_restJson1_1CustomerManagedDatastoreS3Storage(
      output.customerManagedS3,
      context
    );
  }
  if (output.serviceManagedS3 !== undefined) {
    contents.serviceManagedS3 = deserializeAws_restJson1_1ServiceManagedDatastoreS3Storage(
      output.serviceManagedS3,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1DatastoreStorageSummary = (
  output: any,
  context: __SerdeContext
): DatastoreStorageSummary => {
  let contents: any = {
    __type: "DatastoreStorageSummary",
    customerManagedS3: undefined,
    serviceManagedS3: undefined
  };
  if (output.customerManagedS3 !== undefined) {
    contents.customerManagedS3 = deserializeAws_restJson1_1CustomerManagedDatastoreS3StorageSummary(
      output.customerManagedS3,
      context
    );
  }
  if (output.serviceManagedS3 !== undefined) {
    contents.serviceManagedS3 = deserializeAws_restJson1_1ServiceManagedDatastoreS3StorageSummary(
      output.serviceManagedS3,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1DatastoreSummaries = (
  output: any,
  context: __SerdeContext
): Array<DatastoreSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1DatastoreSummary(entry, context)
  );
};

const deserializeAws_restJson1_1DatastoreSummary = (
  output: any,
  context: __SerdeContext
): DatastoreSummary => {
  let contents: any = {
    __type: "DatastoreSummary",
    creationTime: undefined,
    datastoreName: undefined,
    datastoreStorage: undefined,
    lastUpdateTime: undefined,
    status: undefined
  };
  if (output.creationTime !== undefined) {
    contents.creationTime = new Date(
      output.creationTime % 1 != 0
        ? Math.round(output.creationTime * 1000)
        : output.creationTime
    );
  }
  if (output.datastoreName !== undefined) {
    contents.datastoreName = output.datastoreName;
  }
  if (output.datastoreStorage !== undefined) {
    contents.datastoreStorage = deserializeAws_restJson1_1DatastoreStorageSummary(
      output.datastoreStorage,
      context
    );
  }
  if (output.lastUpdateTime !== undefined) {
    contents.lastUpdateTime = new Date(
      output.lastUpdateTime % 1 != 0
        ? Math.round(output.lastUpdateTime * 1000)
        : output.lastUpdateTime
    );
  }
  if (output.status !== undefined) {
    contents.status = output.status;
  }
  return contents;
};

const deserializeAws_restJson1_1DeltaTime = (
  output: any,
  context: __SerdeContext
): DeltaTime => {
  let contents: any = {
    __type: "DeltaTime",
    offsetSeconds: undefined,
    timeExpression: undefined
  };
  if (output.offsetSeconds !== undefined) {
    contents.offsetSeconds = output.offsetSeconds;
  }
  if (output.timeExpression !== undefined) {
    contents.timeExpression = output.timeExpression;
  }
  return contents;
};

const deserializeAws_restJson1_1DeviceRegistryEnrichActivity = (
  output: any,
  context: __SerdeContext
): DeviceRegistryEnrichActivity => {
  let contents: any = {
    __type: "DeviceRegistryEnrichActivity",
    attribute: undefined,
    name: undefined,
    next: undefined,
    roleArn: undefined,
    thingName: undefined
  };
  if (output.attribute !== undefined) {
    contents.attribute = output.attribute;
  }
  if (output.name !== undefined) {
    contents.name = output.name;
  }
  if (output.next !== undefined) {
    contents.next = output.next;
  }
  if (output.roleArn !== undefined) {
    contents.roleArn = output.roleArn;
  }
  if (output.thingName !== undefined) {
    contents.thingName = output.thingName;
  }
  return contents;
};

const deserializeAws_restJson1_1DeviceShadowEnrichActivity = (
  output: any,
  context: __SerdeContext
): DeviceShadowEnrichActivity => {
  let contents: any = {
    __type: "DeviceShadowEnrichActivity",
    attribute: undefined,
    name: undefined,
    next: undefined,
    roleArn: undefined,
    thingName: undefined
  };
  if (output.attribute !== undefined) {
    contents.attribute = output.attribute;
  }
  if (output.name !== undefined) {
    contents.name = output.name;
  }
  if (output.next !== undefined) {
    contents.next = output.next;
  }
  if (output.roleArn !== undefined) {
    contents.roleArn = output.roleArn;
  }
  if (output.thingName !== undefined) {
    contents.thingName = output.thingName;
  }
  return contents;
};

const deserializeAws_restJson1_1EstimatedResourceSize = (
  output: any,
  context: __SerdeContext
): EstimatedResourceSize => {
  let contents: any = {
    __type: "EstimatedResourceSize",
    estimatedOn: undefined,
    estimatedSizeInBytes: undefined
  };
  if (output.estimatedOn !== undefined) {
    contents.estimatedOn = new Date(
      output.estimatedOn % 1 != 0
        ? Math.round(output.estimatedOn * 1000)
        : output.estimatedOn
    );
  }
  if (output.estimatedSizeInBytes !== undefined) {
    contents.estimatedSizeInBytes = output.estimatedSizeInBytes;
  }
  return contents;
};

const deserializeAws_restJson1_1FilterActivity = (
  output: any,
  context: __SerdeContext
): FilterActivity => {
  let contents: any = {
    __type: "FilterActivity",
    filter: undefined,
    name: undefined,
    next: undefined
  };
  if (output.filter !== undefined) {
    contents.filter = output.filter;
  }
  if (output.name !== undefined) {
    contents.name = output.name;
  }
  if (output.next !== undefined) {
    contents.next = output.next;
  }
  return contents;
};

const deserializeAws_restJson1_1GlueConfiguration = (
  output: any,
  context: __SerdeContext
): GlueConfiguration => {
  let contents: any = {
    __type: "GlueConfiguration",
    databaseName: undefined,
    tableName: undefined
  };
  if (output.databaseName !== undefined) {
    contents.databaseName = output.databaseName;
  }
  if (output.tableName !== undefined) {
    contents.tableName = output.tableName;
  }
  return contents;
};

const deserializeAws_restJson1_1IotEventsDestinationConfiguration = (
  output: any,
  context: __SerdeContext
): IotEventsDestinationConfiguration => {
  let contents: any = {
    __type: "IotEventsDestinationConfiguration",
    inputName: undefined,
    roleArn: undefined
  };
  if (output.inputName !== undefined) {
    contents.inputName = output.inputName;
  }
  if (output.roleArn !== undefined) {
    contents.roleArn = output.roleArn;
  }
  return contents;
};

const deserializeAws_restJson1_1LambdaActivity = (
  output: any,
  context: __SerdeContext
): LambdaActivity => {
  let contents: any = {
    __type: "LambdaActivity",
    batchSize: undefined,
    lambdaName: undefined,
    name: undefined,
    next: undefined
  };
  if (output.batchSize !== undefined) {
    contents.batchSize = output.batchSize;
  }
  if (output.lambdaName !== undefined) {
    contents.lambdaName = output.lambdaName;
  }
  if (output.name !== undefined) {
    contents.name = output.name;
  }
  if (output.next !== undefined) {
    contents.next = output.next;
  }
  return contents;
};

const deserializeAws_restJson1_1LoggingOptions = (
  output: any,
  context: __SerdeContext
): LoggingOptions => {
  let contents: any = {
    __type: "LoggingOptions",
    enabled: undefined,
    level: undefined,
    roleArn: undefined
  };
  if (output.enabled !== undefined) {
    contents.enabled = output.enabled;
  }
  if (output.level !== undefined) {
    contents.level = output.level;
  }
  if (output.roleArn !== undefined) {
    contents.roleArn = output.roleArn;
  }
  return contents;
};

const deserializeAws_restJson1_1MathActivity = (
  output: any,
  context: __SerdeContext
): MathActivity => {
  let contents: any = {
    __type: "MathActivity",
    attribute: undefined,
    math: undefined,
    name: undefined,
    next: undefined
  };
  if (output.attribute !== undefined) {
    contents.attribute = output.attribute;
  }
  if (output.math !== undefined) {
    contents.math = output.math;
  }
  if (output.name !== undefined) {
    contents.name = output.name;
  }
  if (output.next !== undefined) {
    contents.next = output.next;
  }
  return contents;
};

const deserializeAws_restJson1_1MessagePayloads = (
  output: any,
  context: __SerdeContext
): Array<Uint8Array> => {
  return (output || []).map((entry: any) => context.base64Decoder(entry));
};

const deserializeAws_restJson1_1OutputFileUriValue = (
  output: any,
  context: __SerdeContext
): OutputFileUriValue => {
  let contents: any = {
    __type: "OutputFileUriValue",
    fileName: undefined
  };
  if (output.fileName !== undefined) {
    contents.fileName = output.fileName;
  }
  return contents;
};

const deserializeAws_restJson1_1Pipeline = (
  output: any,
  context: __SerdeContext
): Pipeline => {
  let contents: any = {
    __type: "Pipeline",
    activities: undefined,
    arn: undefined,
    creationTime: undefined,
    lastUpdateTime: undefined,
    name: undefined,
    reprocessingSummaries: undefined
  };
  if (output.activities !== undefined) {
    contents.activities = deserializeAws_restJson1_1PipelineActivities(
      output.activities,
      context
    );
  }
  if (output.arn !== undefined) {
    contents.arn = output.arn;
  }
  if (output.creationTime !== undefined) {
    contents.creationTime = new Date(
      output.creationTime % 1 != 0
        ? Math.round(output.creationTime * 1000)
        : output.creationTime
    );
  }
  if (output.lastUpdateTime !== undefined) {
    contents.lastUpdateTime = new Date(
      output.lastUpdateTime % 1 != 0
        ? Math.round(output.lastUpdateTime * 1000)
        : output.lastUpdateTime
    );
  }
  if (output.name !== undefined) {
    contents.name = output.name;
  }
  if (output.reprocessingSummaries !== undefined) {
    contents.reprocessingSummaries = deserializeAws_restJson1_1ReprocessingSummaries(
      output.reprocessingSummaries,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1PipelineActivities = (
  output: any,
  context: __SerdeContext
): Array<PipelineActivity> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1PipelineActivity(entry, context)
  );
};

const deserializeAws_restJson1_1PipelineActivity = (
  output: any,
  context: __SerdeContext
): PipelineActivity => {
  let contents: any = {
    __type: "PipelineActivity",
    addAttributes: undefined,
    channel: undefined,
    datastore: undefined,
    deviceRegistryEnrich: undefined,
    deviceShadowEnrich: undefined,
    filter: undefined,
    lambda: undefined,
    math: undefined,
    removeAttributes: undefined,
    selectAttributes: undefined
  };
  if (output.addAttributes !== undefined) {
    contents.addAttributes = deserializeAws_restJson1_1AddAttributesActivity(
      output.addAttributes,
      context
    );
  }
  if (output.channel !== undefined) {
    contents.channel = deserializeAws_restJson1_1ChannelActivity(
      output.channel,
      context
    );
  }
  if (output.datastore !== undefined) {
    contents.datastore = deserializeAws_restJson1_1DatastoreActivity(
      output.datastore,
      context
    );
  }
  if (output.deviceRegistryEnrich !== undefined) {
    contents.deviceRegistryEnrich = deserializeAws_restJson1_1DeviceRegistryEnrichActivity(
      output.deviceRegistryEnrich,
      context
    );
  }
  if (output.deviceShadowEnrich !== undefined) {
    contents.deviceShadowEnrich = deserializeAws_restJson1_1DeviceShadowEnrichActivity(
      output.deviceShadowEnrich,
      context
    );
  }
  if (output.filter !== undefined) {
    contents.filter = deserializeAws_restJson1_1FilterActivity(
      output.filter,
      context
    );
  }
  if (output.lambda !== undefined) {
    contents.lambda = deserializeAws_restJson1_1LambdaActivity(
      output.lambda,
      context
    );
  }
  if (output.math !== undefined) {
    contents.math = deserializeAws_restJson1_1MathActivity(
      output.math,
      context
    );
  }
  if (output.removeAttributes !== undefined) {
    contents.removeAttributes = deserializeAws_restJson1_1RemoveAttributesActivity(
      output.removeAttributes,
      context
    );
  }
  if (output.selectAttributes !== undefined) {
    contents.selectAttributes = deserializeAws_restJson1_1SelectAttributesActivity(
      output.selectAttributes,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1PipelineSummaries = (
  output: any,
  context: __SerdeContext
): Array<PipelineSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1PipelineSummary(entry, context)
  );
};

const deserializeAws_restJson1_1PipelineSummary = (
  output: any,
  context: __SerdeContext
): PipelineSummary => {
  let contents: any = {
    __type: "PipelineSummary",
    creationTime: undefined,
    lastUpdateTime: undefined,
    pipelineName: undefined,
    reprocessingSummaries: undefined
  };
  if (output.creationTime !== undefined) {
    contents.creationTime = new Date(
      output.creationTime % 1 != 0
        ? Math.round(output.creationTime * 1000)
        : output.creationTime
    );
  }
  if (output.lastUpdateTime !== undefined) {
    contents.lastUpdateTime = new Date(
      output.lastUpdateTime % 1 != 0
        ? Math.round(output.lastUpdateTime * 1000)
        : output.lastUpdateTime
    );
  }
  if (output.pipelineName !== undefined) {
    contents.pipelineName = output.pipelineName;
  }
  if (output.reprocessingSummaries !== undefined) {
    contents.reprocessingSummaries = deserializeAws_restJson1_1ReprocessingSummaries(
      output.reprocessingSummaries,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1QueryFilter = (
  output: any,
  context: __SerdeContext
): QueryFilter => {
  let contents: any = {
    __type: "QueryFilter",
    deltaTime: undefined
  };
  if (output.deltaTime !== undefined) {
    contents.deltaTime = deserializeAws_restJson1_1DeltaTime(
      output.deltaTime,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1QueryFilters = (
  output: any,
  context: __SerdeContext
): Array<QueryFilter> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1QueryFilter(entry, context)
  );
};

const deserializeAws_restJson1_1RemoveAttributesActivity = (
  output: any,
  context: __SerdeContext
): RemoveAttributesActivity => {
  let contents: any = {
    __type: "RemoveAttributesActivity",
    attributes: undefined,
    name: undefined,
    next: undefined
  };
  if (output.attributes !== undefined) {
    contents.attributes = deserializeAws_restJson1_1AttributeNames(
      output.attributes,
      context
    );
  }
  if (output.name !== undefined) {
    contents.name = output.name;
  }
  if (output.next !== undefined) {
    contents.next = output.next;
  }
  return contents;
};

const deserializeAws_restJson1_1ReprocessingSummaries = (
  output: any,
  context: __SerdeContext
): Array<ReprocessingSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1ReprocessingSummary(entry, context)
  );
};

const deserializeAws_restJson1_1ReprocessingSummary = (
  output: any,
  context: __SerdeContext
): ReprocessingSummary => {
  let contents: any = {
    __type: "ReprocessingSummary",
    creationTime: undefined,
    id: undefined,
    status: undefined
  };
  if (output.creationTime !== undefined) {
    contents.creationTime = new Date(
      output.creationTime % 1 != 0
        ? Math.round(output.creationTime * 1000)
        : output.creationTime
    );
  }
  if (output.id !== undefined) {
    contents.id = output.id;
  }
  if (output.status !== undefined) {
    contents.status = output.status;
  }
  return contents;
};

const deserializeAws_restJson1_1ResourceConfiguration = (
  output: any,
  context: __SerdeContext
): ResourceConfiguration => {
  let contents: any = {
    __type: "ResourceConfiguration",
    computeType: undefined,
    volumeSizeInGB: undefined
  };
  if (output.computeType !== undefined) {
    contents.computeType = output.computeType;
  }
  if (output.volumeSizeInGB !== undefined) {
    contents.volumeSizeInGB = output.volumeSizeInGB;
  }
  return contents;
};

const deserializeAws_restJson1_1RetentionPeriod = (
  output: any,
  context: __SerdeContext
): RetentionPeriod => {
  let contents: any = {
    __type: "RetentionPeriod",
    numberOfDays: undefined,
    unlimited: undefined
  };
  if (output.numberOfDays !== undefined) {
    contents.numberOfDays = output.numberOfDays;
  }
  if (output.unlimited !== undefined) {
    contents.unlimited = output.unlimited;
  }
  return contents;
};

const deserializeAws_restJson1_1S3DestinationConfiguration = (
  output: any,
  context: __SerdeContext
): S3DestinationConfiguration => {
  let contents: any = {
    __type: "S3DestinationConfiguration",
    bucket: undefined,
    glueConfiguration: undefined,
    key: undefined,
    roleArn: undefined
  };
  if (output.bucket !== undefined) {
    contents.bucket = output.bucket;
  }
  if (output.glueConfiguration !== undefined) {
    contents.glueConfiguration = deserializeAws_restJson1_1GlueConfiguration(
      output.glueConfiguration,
      context
    );
  }
  if (output.key !== undefined) {
    contents.key = output.key;
  }
  if (output.roleArn !== undefined) {
    contents.roleArn = output.roleArn;
  }
  return contents;
};

const deserializeAws_restJson1_1Schedule = (
  output: any,
  context: __SerdeContext
): Schedule => {
  let contents: any = {
    __type: "Schedule",
    expression: undefined
  };
  if (output.expression !== undefined) {
    contents.expression = output.expression;
  }
  return contents;
};

const deserializeAws_restJson1_1SelectAttributesActivity = (
  output: any,
  context: __SerdeContext
): SelectAttributesActivity => {
  let contents: any = {
    __type: "SelectAttributesActivity",
    attributes: undefined,
    name: undefined,
    next: undefined
  };
  if (output.attributes !== undefined) {
    contents.attributes = deserializeAws_restJson1_1AttributeNames(
      output.attributes,
      context
    );
  }
  if (output.name !== undefined) {
    contents.name = output.name;
  }
  if (output.next !== undefined) {
    contents.next = output.next;
  }
  return contents;
};

const deserializeAws_restJson1_1ServiceManagedChannelS3Storage = (
  output: any,
  context: __SerdeContext
): ServiceManagedChannelS3Storage => {
  let contents: any = {
    __type: "ServiceManagedChannelS3Storage"
  };
  return contents;
};

const deserializeAws_restJson1_1ServiceManagedChannelS3StorageSummary = (
  output: any,
  context: __SerdeContext
): ServiceManagedChannelS3StorageSummary => {
  let contents: any = {
    __type: "ServiceManagedChannelS3StorageSummary"
  };
  return contents;
};

const deserializeAws_restJson1_1ServiceManagedDatastoreS3Storage = (
  output: any,
  context: __SerdeContext
): ServiceManagedDatastoreS3Storage => {
  let contents: any = {
    __type: "ServiceManagedDatastoreS3Storage"
  };
  return contents;
};

const deserializeAws_restJson1_1ServiceManagedDatastoreS3StorageSummary = (
  output: any,
  context: __SerdeContext
): ServiceManagedDatastoreS3StorageSummary => {
  let contents: any = {
    __type: "ServiceManagedDatastoreS3StorageSummary"
  };
  return contents;
};

const deserializeAws_restJson1_1SqlQueryDatasetAction = (
  output: any,
  context: __SerdeContext
): SqlQueryDatasetAction => {
  let contents: any = {
    __type: "SqlQueryDatasetAction",
    filters: undefined,
    sqlQuery: undefined
  };
  if (output.filters !== undefined) {
    contents.filters = deserializeAws_restJson1_1QueryFilters(
      output.filters,
      context
    );
  }
  if (output.sqlQuery !== undefined) {
    contents.sqlQuery = output.sqlQuery;
  }
  return contents;
};

const deserializeAws_restJson1_1Tag = (
  output: any,
  context: __SerdeContext
): Tag => {
  let contents: any = {
    __type: "Tag",
    key: undefined,
    value: undefined
  };
  if (output.key !== undefined) {
    contents.key = output.key;
  }
  if (output.value !== undefined) {
    contents.value = output.value;
  }
  return contents;
};

const deserializeAws_restJson1_1TagList = (
  output: any,
  context: __SerdeContext
): Array<Tag> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Tag(entry, context)
  );
};

const deserializeAws_restJson1_1TriggeringDataset = (
  output: any,
  context: __SerdeContext
): TriggeringDataset => {
  let contents: any = {
    __type: "TriggeringDataset",
    name: undefined
  };
  if (output.name !== undefined) {
    contents.name = output.name;
  }
  return contents;
};

const deserializeAws_restJson1_1Variable = (
  output: any,
  context: __SerdeContext
): Variable => {
  let contents: any = {
    __type: "Variable",
    datasetContentVersionValue: undefined,
    doubleValue: undefined,
    name: undefined,
    outputFileUriValue: undefined,
    stringValue: undefined
  };
  if (output.datasetContentVersionValue !== undefined) {
    contents.datasetContentVersionValue = deserializeAws_restJson1_1DatasetContentVersionValue(
      output.datasetContentVersionValue,
      context
    );
  }
  if (output.doubleValue !== undefined) {
    contents.doubleValue = output.doubleValue;
  }
  if (output.name !== undefined) {
    contents.name = output.name;
  }
  if (output.outputFileUriValue !== undefined) {
    contents.outputFileUriValue = deserializeAws_restJson1_1OutputFileUriValue(
      output.outputFileUriValue,
      context
    );
  }
  if (output.stringValue !== undefined) {
    contents.stringValue = output.stringValue;
  }
  return contents;
};

const deserializeAws_restJson1_1Variables = (
  output: any,
  context: __SerdeContext
): Array<Variable> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Variable(entry, context)
  );
};

const deserializeAws_restJson1_1VersioningConfiguration = (
  output: any,
  context: __SerdeContext
): VersioningConfiguration => {
  let contents: any = {
    __type: "VersioningConfiguration",
    maxVersions: undefined,
    unlimited: undefined
  };
  if (output.maxVersions !== undefined) {
    contents.maxVersions = output.maxVersions;
  }
  if (output.unlimited !== undefined) {
    contents.unlimited = output.unlimited;
  }
  return contents;
};

const deserializeAws_restJson1_1BatchPutMessageErrorEntries = (
  output: any,
  context: __SerdeContext
): Array<BatchPutMessageErrorEntry> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1BatchPutMessageErrorEntry(entry, context)
  );
};

const deserializeAws_restJson1_1BatchPutMessageErrorEntry = (
  output: any,
  context: __SerdeContext
): BatchPutMessageErrorEntry => {
  let contents: any = {
    __type: "BatchPutMessageErrorEntry",
    errorCode: undefined,
    errorMessage: undefined,
    messageId: undefined
  };
  if (output.errorCode !== undefined) {
    contents.errorCode = output.errorCode;
  }
  if (output.errorMessage !== undefined) {
    contents.errorMessage = output.errorMessage;
  }
  if (output.messageId !== undefined) {
    contents.messageId = output.messageId;
  }
  return contents;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return context.streamCollector(streamBody).then((body: any) => {
    const encoded = context.utf8Encoder(body);
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};
