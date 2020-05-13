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
import {
  SmithyException as __SmithyException,
  extendedEncodeURIComponent as __extendedEncodeURIComponent
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export const serializeAws_restJson1_1CancelPipelineReprocessingCommand = async (
  input: CancelPipelineReprocessingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/pipelines/{pipelineName}/reprocessing/{reprocessingId}";
  if (input.pipelineName !== undefined) {
    const labelValue: string = input.pipelineName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: pipelineName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{pipelineName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: pipelineName.");
  }
  if (input.reprocessingId !== undefined) {
    const labelValue: string = input.reprocessingId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: reprocessingId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{reprocessingId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: reprocessingId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1CreateChannelCommand = async (
  input: CreateChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/channels";
  let body: any;
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
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1CreateDatasetCommand = async (
  input: CreateDatasetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/datasets";
  let body: any;
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
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1CreateDatasetContentCommand = async (
  input: CreateDatasetContentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/datasets/{datasetName}/content";
  if (input.datasetName !== undefined) {
    const labelValue: string = input.datasetName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: datasetName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{datasetName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: datasetName.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1CreateDatastoreCommand = async (
  input: CreateDatastoreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/datastores";
  let body: any;
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
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1CreatePipelineCommand = async (
  input: CreatePipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/pipelines";
  let body: any;
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
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1DeleteChannelCommand = async (
  input: DeleteChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/channels/{channelName}";
  if (input.channelName !== undefined) {
    const labelValue: string = input.channelName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: channelName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{channelName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: channelName.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1DeleteDatasetCommand = async (
  input: DeleteDatasetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/datasets/{datasetName}";
  if (input.datasetName !== undefined) {
    const labelValue: string = input.datasetName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: datasetName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{datasetName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: datasetName.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1DeleteDatasetContentCommand = async (
  input: DeleteDatasetContentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/datasets/{datasetName}/content";
  if (input.datasetName !== undefined) {
    const labelValue: string = input.datasetName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: datasetName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{datasetName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: datasetName.");
  }
  const query: any = {
    ...(input.versionId !== undefined && { versionId: input.versionId })
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1_1DeleteDatastoreCommand = async (
  input: DeleteDatastoreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/datastores/{datastoreName}";
  if (input.datastoreName !== undefined) {
    const labelValue: string = input.datastoreName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: datastoreName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{datastoreName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: datastoreName.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1DeletePipelineCommand = async (
  input: DeletePipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/pipelines/{pipelineName}";
  if (input.pipelineName !== undefined) {
    const labelValue: string = input.pipelineName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: pipelineName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{pipelineName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: pipelineName.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1DescribeChannelCommand = async (
  input: DescribeChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/channels/{channelName}";
  if (input.channelName !== undefined) {
    const labelValue: string = input.channelName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: channelName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{channelName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: channelName.");
  }
  const query: any = {
    ...(input.includeStatistics !== undefined && {
      includeStatistics: input.includeStatistics.toString()
    })
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1_1DescribeDatasetCommand = async (
  input: DescribeDatasetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/datasets/{datasetName}";
  if (input.datasetName !== undefined) {
    const labelValue: string = input.datasetName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: datasetName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{datasetName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: datasetName.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1DescribeDatastoreCommand = async (
  input: DescribeDatastoreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/datastores/{datastoreName}";
  if (input.datastoreName !== undefined) {
    const labelValue: string = input.datastoreName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: datastoreName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{datastoreName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: datastoreName.");
  }
  const query: any = {
    ...(input.includeStatistics !== undefined && {
      includeStatistics: input.includeStatistics.toString()
    })
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1_1DescribeLoggingOptionsCommand = async (
  input: DescribeLoggingOptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/logging";
  let body: any;
  body = "{}";
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1DescribePipelineCommand = async (
  input: DescribePipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/pipelines/{pipelineName}";
  if (input.pipelineName !== undefined) {
    const labelValue: string = input.pipelineName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: pipelineName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{pipelineName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: pipelineName.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1GetDatasetContentCommand = async (
  input: GetDatasetContentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/datasets/{datasetName}/content";
  if (input.datasetName !== undefined) {
    const labelValue: string = input.datasetName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: datasetName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{datasetName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: datasetName.");
  }
  const query: any = {
    ...(input.versionId !== undefined && { versionId: input.versionId })
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1_1ListChannelsCommand = async (
  input: ListChannelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/channels";
  const query: any = {
    ...(input.maxResults !== undefined && {
      maxResults: input.maxResults.toString()
    }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken })
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1_1ListDatasetContentsCommand = async (
  input: ListDatasetContentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/datasets/{datasetName}/contents";
  if (input.datasetName !== undefined) {
    const labelValue: string = input.datasetName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: datasetName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{datasetName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: datasetName.");
  }
  const query: any = {
    ...(input.maxResults !== undefined && {
      maxResults: input.maxResults.toString()
    }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.scheduledBefore !== undefined && {
      scheduledBefore: (
        input.scheduledBefore.toISOString().split(".")[0] + "Z"
      ).toString()
    }),
    ...(input.scheduledOnOrAfter !== undefined && {
      scheduledOnOrAfter: (
        input.scheduledOnOrAfter.toISOString().split(".")[0] + "Z"
      ).toString()
    })
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1_1ListDatasetsCommand = async (
  input: ListDatasetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/datasets";
  const query: any = {
    ...(input.maxResults !== undefined && {
      maxResults: input.maxResults.toString()
    }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken })
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1_1ListDatastoresCommand = async (
  input: ListDatastoresCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/datastores";
  const query: any = {
    ...(input.maxResults !== undefined && {
      maxResults: input.maxResults.toString()
    }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken })
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1_1ListPipelinesCommand = async (
  input: ListPipelinesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/pipelines";
  const query: any = {
    ...(input.maxResults !== undefined && {
      maxResults: input.maxResults.toString()
    }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken })
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1_1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/tags";
  const query: any = {
    ...(input.resourceArn !== undefined && { resourceArn: input.resourceArn })
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1_1PutLoggingOptionsCommand = async (
  input: PutLoggingOptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/logging";
  let body: any;
  const bodyParams: any = {};
  if (input.loggingOptions !== undefined) {
    bodyParams["loggingOptions"] = serializeAws_restJson1_1LoggingOptions(
      input.loggingOptions,
      context
    );
  }
  body = JSON.stringify(bodyParams);
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1RunPipelineActivityCommand = async (
  input: RunPipelineActivityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/pipelineactivities/run";
  let body: any;
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
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1SampleChannelDataCommand = async (
  input: SampleChannelDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/channels/{channelName}/sample";
  if (input.channelName !== undefined) {
    const labelValue: string = input.channelName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: channelName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{channelName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: channelName.");
  }
  const query: any = {
    ...(input.endTime !== undefined && {
      endTime: (input.endTime.toISOString().split(".")[0] + "Z").toString()
    }),
    ...(input.maxMessages !== undefined && {
      maxMessages: input.maxMessages.toString()
    }),
    ...(input.startTime !== undefined && {
      startTime: (input.startTime.toISOString().split(".")[0] + "Z").toString()
    })
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1_1StartPipelineReprocessingCommand = async (
  input: StartPipelineReprocessingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/pipelines/{pipelineName}/reprocessing";
  if (input.pipelineName !== undefined) {
    const labelValue: string = input.pipelineName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: pipelineName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{pipelineName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: pipelineName.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.endTime !== undefined) {
    bodyParams["endTime"] = Math.round(input.endTime.getTime() / 1000);
  }
  if (input.startTime !== undefined) {
    bodyParams["startTime"] = Math.round(input.startTime.getTime() / 1000);
  }
  body = JSON.stringify(bodyParams);
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/tags";
  const query: any = {
    ...(input.resourceArn !== undefined && { resourceArn: input.resourceArn })
  };
  let body: any;
  const bodyParams: any = {};
  if (input.tags !== undefined) {
    bodyParams["tags"] = serializeAws_restJson1_1TagList(input.tags, context);
  }
  body = JSON.stringify(bodyParams);
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1_1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/tags";
  const query: any = {
    ...(input.resourceArn !== undefined && { resourceArn: input.resourceArn }),
    ...(input.tagKeys !== undefined && {
      tagKeys: (input.tagKeys || []).map(_entry => _entry)
    })
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1_1UpdateChannelCommand = async (
  input: UpdateChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/channels/{channelName}";
  if (input.channelName !== undefined) {
    const labelValue: string = input.channelName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: channelName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{channelName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: channelName.");
  }
  let body: any;
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
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1UpdateDatasetCommand = async (
  input: UpdateDatasetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/datasets/{datasetName}";
  if (input.datasetName !== undefined) {
    const labelValue: string = input.datasetName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: datasetName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{datasetName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: datasetName.");
  }
  let body: any;
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
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1UpdateDatastoreCommand = async (
  input: UpdateDatastoreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/datastores/{datastoreName}";
  if (input.datastoreName !== undefined) {
    const labelValue: string = input.datastoreName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: datastoreName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{datastoreName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: datastoreName.");
  }
  let body: any;
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
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1UpdatePipelineCommand = async (
  input: UpdatePipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/pipelines/{pipelineName}";
  if (input.pipelineName !== undefined) {
    const labelValue: string = input.pipelineName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: pipelineName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{pipelineName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: pipelineName.");
  }
  let body: any;
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
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1BatchPutMessageCommand = async (
  input: BatchPutMessageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/messages/batch";
  let body: any;
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
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const deserializeAws_restJson1_1CancelPipelineReprocessingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelPipelineReprocessingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CancelPipelineReprocessingCommandError(
      output,
      context
    );
  }
  const contents: CancelPipelineReprocessingCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CancelPipelineReprocessingResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1CancelPipelineReprocessingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelPipelineReprocessingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot.common.types#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot.common.types#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iot.common.types#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iot.common.types#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iot.common.types#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1CreateChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateChannelCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 400) {
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
  if (data.channelArn !== undefined && data.channelArn !== null) {
    contents.channelArn = data.channelArn;
  }
  if (data.channelName !== undefined && data.channelName !== null) {
    contents.channelName = data.channelName;
  }
  if (data.retentionPeriod !== undefined && data.retentionPeriod !== null) {
    contents.retentionPeriod = deserializeAws_restJson1_1RetentionPeriod(
      data.retentionPeriod,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1CreateChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot.common.types#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot.common.types#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.iot.common.types#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.iot.common.types#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iot.common.types#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iot.common.types#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1CreateDatasetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDatasetCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 400) {
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
  if (data.datasetArn !== undefined && data.datasetArn !== null) {
    contents.datasetArn = data.datasetArn;
  }
  if (data.datasetName !== undefined && data.datasetName !== null) {
    contents.datasetName = data.datasetName;
  }
  if (data.retentionPeriod !== undefined && data.retentionPeriod !== null) {
    contents.retentionPeriod = deserializeAws_restJson1_1RetentionPeriod(
      data.retentionPeriod,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1CreateDatasetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDatasetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot.common.types#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot.common.types#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.iot.common.types#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.iot.common.types#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iot.common.types#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iot.common.types#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1CreateDatasetContentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDatasetContentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
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
  if (data.versionId !== undefined && data.versionId !== null) {
    contents.versionId = data.versionId;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1CreateDatasetContentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDatasetContentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot.common.types#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot.common.types#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iot.common.types#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iot.common.types#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iot.common.types#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1CreateDatastoreCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDatastoreCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 400) {
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
  if (data.datastoreArn !== undefined && data.datastoreArn !== null) {
    contents.datastoreArn = data.datastoreArn;
  }
  if (data.datastoreName !== undefined && data.datastoreName !== null) {
    contents.datastoreName = data.datastoreName;
  }
  if (data.retentionPeriod !== undefined && data.retentionPeriod !== null) {
    contents.retentionPeriod = deserializeAws_restJson1_1RetentionPeriod(
      data.retentionPeriod,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1CreateDatastoreCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDatastoreCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot.common.types#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot.common.types#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.iot.common.types#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.iot.common.types#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iot.common.types#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iot.common.types#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1CreatePipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePipelineCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 400) {
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
  if (data.pipelineArn !== undefined && data.pipelineArn !== null) {
    contents.pipelineArn = data.pipelineArn;
  }
  if (data.pipelineName !== undefined && data.pipelineName !== null) {
    contents.pipelineName = data.pipelineName;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1CreatePipelineCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePipelineCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot.common.types#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot.common.types#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.iot.common.types#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.iot.common.types#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iot.common.types#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iot.common.types#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1DeleteChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteChannelCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteChannelCommandError(output, context);
  }
  const contents: DeleteChannelCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1DeleteChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot.common.types#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot.common.types#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iot.common.types#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iot.common.types#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iot.common.types#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1DeleteDatasetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDatasetCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteDatasetCommandError(output, context);
  }
  const contents: DeleteDatasetCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1DeleteDatasetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDatasetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot.common.types#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot.common.types#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iot.common.types#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iot.common.types#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iot.common.types#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1DeleteDatasetContentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDatasetContentCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteDatasetContentCommandError(
      output,
      context
    );
  }
  const contents: DeleteDatasetContentCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1DeleteDatasetContentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDatasetContentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot.common.types#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot.common.types#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iot.common.types#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iot.common.types#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iot.common.types#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1DeleteDatastoreCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDatastoreCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteDatastoreCommandError(
      output,
      context
    );
  }
  const contents: DeleteDatastoreCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1DeleteDatastoreCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDatastoreCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot.common.types#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot.common.types#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iot.common.types#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iot.common.types#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iot.common.types#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1DeletePipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePipelineCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeletePipelineCommandError(
      output,
      context
    );
  }
  const contents: DeletePipelineCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1DeletePipelineCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePipelineCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot.common.types#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot.common.types#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iot.common.types#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iot.common.types#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iot.common.types#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1DescribeChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
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
  if (data.channel !== undefined && data.channel !== null) {
    contents.channel = deserializeAws_restJson1_1Channel(data.channel, context);
  }
  if (data.statistics !== undefined && data.statistics !== null) {
    contents.statistics = deserializeAws_restJson1_1ChannelStatistics(
      data.statistics,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1DescribeChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot.common.types#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot.common.types#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iot.common.types#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iot.common.types#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iot.common.types#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1DescribeDatasetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDatasetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
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
  if (data.dataset !== undefined && data.dataset !== null) {
    contents.dataset = deserializeAws_restJson1_1Dataset(data.dataset, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1DescribeDatasetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDatasetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot.common.types#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot.common.types#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iot.common.types#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iot.common.types#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iot.common.types#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1DescribeDatastoreCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDatastoreCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
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
  if (data.datastore !== undefined && data.datastore !== null) {
    contents.datastore = deserializeAws_restJson1_1Datastore(
      data.datastore,
      context
    );
  }
  if (data.statistics !== undefined && data.statistics !== null) {
    contents.statistics = deserializeAws_restJson1_1DatastoreStatistics(
      data.statistics,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1DescribeDatastoreCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDatastoreCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot.common.types#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot.common.types#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iot.common.types#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iot.common.types#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iot.common.types#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1DescribeLoggingOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLoggingOptionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
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
  if (data.loggingOptions !== undefined && data.loggingOptions !== null) {
    contents.loggingOptions = deserializeAws_restJson1_1LoggingOptions(
      data.loggingOptions,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1DescribeLoggingOptionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLoggingOptionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot.common.types#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot.common.types#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iot.common.types#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iot.common.types#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iot.common.types#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1DescribePipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePipelineCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
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
  if (data.pipeline !== undefined && data.pipeline !== null) {
    contents.pipeline = deserializeAws_restJson1_1Pipeline(
      data.pipeline,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1DescribePipelineCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePipelineCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot.common.types#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot.common.types#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iot.common.types#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iot.common.types#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iot.common.types#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1GetDatasetContentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDatasetContentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
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
  if (data.entries !== undefined && data.entries !== null) {
    contents.entries = deserializeAws_restJson1_1DatasetEntries(
      data.entries,
      context
    );
  }
  if (data.status !== undefined && data.status !== null) {
    contents.status = deserializeAws_restJson1_1DatasetContentStatus(
      data.status,
      context
    );
  }
  if (data.timestamp !== undefined && data.timestamp !== null) {
    contents.timestamp = new Date(Math.round(data.timestamp * 1000));
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1GetDatasetContentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDatasetContentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot.common.types#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot.common.types#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iot.common.types#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iot.common.types#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iot.common.types#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1ListChannelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChannelsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListChannelsCommandError(output, context);
  }
  const contents: ListChannelsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListChannelsResponse",
    channelSummaries: undefined,
    nextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.channelSummaries !== undefined && data.channelSummaries !== null) {
    contents.channelSummaries = deserializeAws_restJson1_1ChannelSummaries(
      data.channelSummaries,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1ListChannelsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChannelsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot.common.types#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot.common.types#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iot.common.types#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iot.common.types#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1ListDatasetContentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDatasetContentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
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
  if (
    data.datasetContentSummaries !== undefined &&
    data.datasetContentSummaries !== null
  ) {
    contents.datasetContentSummaries = deserializeAws_restJson1_1DatasetContentSummaries(
      data.datasetContentSummaries,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1ListDatasetContentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDatasetContentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot.common.types#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot.common.types#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iot.common.types#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iot.common.types#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iot.common.types#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1ListDatasetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDatasetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListDatasetsCommandError(output, context);
  }
  const contents: ListDatasetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListDatasetsResponse",
    datasetSummaries: undefined,
    nextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.datasetSummaries !== undefined && data.datasetSummaries !== null) {
    contents.datasetSummaries = deserializeAws_restJson1_1DatasetSummaries(
      data.datasetSummaries,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1ListDatasetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDatasetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot.common.types#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot.common.types#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iot.common.types#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iot.common.types#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1ListDatastoresCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDatastoresCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
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
  if (
    data.datastoreSummaries !== undefined &&
    data.datastoreSummaries !== null
  ) {
    contents.datastoreSummaries = deserializeAws_restJson1_1DatastoreSummaries(
      data.datastoreSummaries,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1ListDatastoresCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDatastoresCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot.common.types#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot.common.types#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iot.common.types#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iot.common.types#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1ListPipelinesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPipelinesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListPipelinesCommandError(output, context);
  }
  const contents: ListPipelinesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListPipelinesResponse",
    nextToken: undefined,
    pipelineSummaries: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  if (data.pipelineSummaries !== undefined && data.pipelineSummaries !== null) {
    contents.pipelineSummaries = deserializeAws_restJson1_1PipelineSummaries(
      data.pipelineSummaries,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1ListPipelinesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPipelinesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot.common.types#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot.common.types#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iot.common.types#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iot.common.types#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
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
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1_1TagList(data.tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot.common.types#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot.common.types#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.iot.common.types#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iot.common.types#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iot.common.types#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iot.common.types#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1PutLoggingOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutLoggingOptionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1PutLoggingOptionsCommandError(
      output,
      context
    );
  }
  const contents: PutLoggingOptionsCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1PutLoggingOptionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutLoggingOptionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot.common.types#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot.common.types#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iot.common.types#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iot.common.types#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1RunPipelineActivityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RunPipelineActivityCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
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
  if (data.logResult !== undefined && data.logResult !== null) {
    contents.logResult = data.logResult;
  }
  if (data.payloads !== undefined && data.payloads !== null) {
    contents.payloads = deserializeAws_restJson1_1MessagePayloads(
      data.payloads,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1RunPipelineActivityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RunPipelineActivityCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot.common.types#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot.common.types#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iot.common.types#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iot.common.types#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1SampleChannelDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SampleChannelDataCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
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
  if (data.payloads !== undefined && data.payloads !== null) {
    contents.payloads = deserializeAws_restJson1_1MessagePayloads(
      data.payloads,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1SampleChannelDataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SampleChannelDataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot.common.types#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot.common.types#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iot.common.types#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iot.common.types#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iot.common.types#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1StartPipelineReprocessingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartPipelineReprocessingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
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
  if (data.reprocessingId !== undefined && data.reprocessingId !== null) {
    contents.reprocessingId = data.reprocessingId;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1StartPipelineReprocessingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartPipelineReprocessingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot.common.types#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot.common.types#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.iot.common.types#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iot.common.types#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iot.common.types#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iot.common.types#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1TagResourceCommandError(output, context);
  }
  const contents: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "TagResourceResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot.common.types#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot.common.types#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.iot.common.types#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iot.common.types#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iot.common.types#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iot.common.types#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UntagResourceCommandError(output, context);
  }
  const contents: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UntagResourceResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot.common.types#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot.common.types#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.iot.common.types#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iot.common.types#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iot.common.types#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iot.common.types#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1UpdateChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateChannelCommandError(output, context);
  }
  const contents: UpdateChannelCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1UpdateChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot.common.types#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot.common.types#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iot.common.types#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iot.common.types#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iot.common.types#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1UpdateDatasetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDatasetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateDatasetCommandError(output, context);
  }
  const contents: UpdateDatasetCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1UpdateDatasetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDatasetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot.common.types#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot.common.types#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iot.common.types#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iot.common.types#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iot.common.types#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1UpdateDatastoreCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDatastoreCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateDatastoreCommandError(
      output,
      context
    );
  }
  const contents: UpdateDatastoreCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1UpdateDatastoreCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDatastoreCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot.common.types#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot.common.types#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iot.common.types#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iot.common.types#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iot.common.types#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1UpdatePipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePipelineCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdatePipelineCommandError(
      output,
      context
    );
  }
  const contents: UpdatePipelineCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1UpdatePipelineCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePipelineCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot.common.types#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot.common.types#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.iot.common.types#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iot.common.types#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iot.common.types#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iot.common.types#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1BatchPutMessageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchPutMessageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
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
  if (
    data.batchPutMessageErrorEntries !== undefined &&
    data.batchPutMessageErrorEntries !== null
  ) {
    contents.batchPutMessageErrorEntries = deserializeAws_restJson1_1BatchPutMessageErrorEntries(
      data.batchPutMessageErrorEntries,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1BatchPutMessageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchPutMessageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot.common.types#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot.common.types#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iot.common.types#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iot.common.types#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iot.common.types#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

const deserializeAws_restJson1_1InternalFailureExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalFailureException> => {
  const contents: InternalFailureException = {
    name: "InternalFailureException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1InvalidRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const contents: InvalidRequestException = {
    name: "InvalidRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const contents: LimitExceededException = {
    name: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ResourceAlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceAlreadyExistsException> => {
  const contents: ResourceAlreadyExistsException = {
    name: "ResourceAlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
    resourceArn: undefined,
    resourceId: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  if (data.resourceArn !== undefined && data.resourceArn !== null) {
    contents.resourceArn = data.resourceArn;
  }
  if (data.resourceId !== undefined && data.resourceId !== null) {
    contents.resourceId = data.resourceId;
  }
  return contents;
};

const deserializeAws_restJson1_1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ServiceUnavailableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const contents: ServiceUnavailableException = {
    name: "ServiceUnavailableException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const contents: ThrottlingException = {
    name: "ThrottlingException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const serializeAws_restJson1_1AddAttributesActivity = (
  input: AddAttributesActivity,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
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
  return Object.keys(input).reduce((acc: any, key: string) => {
    acc[key] = input[key];
    return acc;
  }, {});
};

const serializeAws_restJson1_1AttributeNames = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1_1ChannelActivity = (
  input: ChannelActivity,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
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
  const bodyParams: any = {};
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
  const bodyParams: any = {};
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
  const bodyParams: any = {};
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
  const bodyParams: any = {};
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
  const bodyParams: any = {};
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
  input: DatasetAction[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1_1DatasetAction(entry, context)
  );
};

const serializeAws_restJson1_1DatasetContentDeliveryDestination = (
  input: DatasetContentDeliveryDestination,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
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
  const bodyParams: any = {};
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
  input: DatasetContentDeliveryRule[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1_1DatasetContentDeliveryRule(entry, context)
  );
};

const serializeAws_restJson1_1DatasetContentVersionValue = (
  input: DatasetContentVersionValue,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.datasetName !== undefined) {
    bodyParams["datasetName"] = input.datasetName;
  }
  return bodyParams;
};

const serializeAws_restJson1_1DatasetTrigger = (
  input: DatasetTrigger,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
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
  input: DatasetTrigger[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1_1DatasetTrigger(entry, context)
  );
};

const serializeAws_restJson1_1DatastoreActivity = (
  input: DatastoreActivity,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
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
  const bodyParams: any = {};
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
  const bodyParams: any = {};
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
  const bodyParams: any = {};
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
  const bodyParams: any = {};
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
  const bodyParams: any = {};
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
  const bodyParams: any = {};
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
  const bodyParams: any = {};
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
  const bodyParams: any = {};
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
  const bodyParams: any = {};
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
  const bodyParams: any = {};
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
  input: Uint8Array[],
  context: __SerdeContext
): any => {
  return input.map(entry => context.base64Encoder(entry));
};

const serializeAws_restJson1_1OutputFileUriValue = (
  input: OutputFileUriValue,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.fileName !== undefined) {
    bodyParams["fileName"] = input.fileName;
  }
  return bodyParams;
};

const serializeAws_restJson1_1PipelineActivities = (
  input: PipelineActivity[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1_1PipelineActivity(entry, context)
  );
};

const serializeAws_restJson1_1PipelineActivity = (
  input: PipelineActivity,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
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
  const bodyParams: any = {};
  if (input.deltaTime !== undefined) {
    bodyParams["deltaTime"] = serializeAws_restJson1_1DeltaTime(
      input.deltaTime,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1QueryFilters = (
  input: QueryFilter[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1_1QueryFilter(entry, context)
  );
};

const serializeAws_restJson1_1RemoveAttributesActivity = (
  input: RemoveAttributesActivity,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
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
  const bodyParams: any = {};
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
  const bodyParams: any = {};
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
  const bodyParams: any = {};
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
  const bodyParams: any = {};
  if (input.expression !== undefined) {
    bodyParams["expression"] = input.expression;
  }
  return bodyParams;
};

const serializeAws_restJson1_1SelectAttributesActivity = (
  input: SelectAttributesActivity,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
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
  const bodyParams: any = {};
  return bodyParams;
};

const serializeAws_restJson1_1ServiceManagedDatastoreS3Storage = (
  input: ServiceManagedDatastoreS3Storage,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  return bodyParams;
};

const serializeAws_restJson1_1SqlQueryDatasetAction = (
  input: SqlQueryDatasetAction,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
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
  const bodyParams: any = {};
  if (input.key !== undefined) {
    bodyParams["key"] = input.key;
  }
  if (input.value !== undefined) {
    bodyParams["value"] = input.value;
  }
  return bodyParams;
};

const serializeAws_restJson1_1TagList = (
  input: Tag[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_restJson1_1Tag(entry, context));
};

const serializeAws_restJson1_1TriggeringDataset = (
  input: TriggeringDataset,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  return bodyParams;
};

const serializeAws_restJson1_1Variable = (
  input: Variable,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
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
  input: Variable[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_restJson1_1Variable(entry, context));
};

const serializeAws_restJson1_1VersioningConfiguration = (
  input: VersioningConfiguration,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
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
  const bodyParams: any = {};
  if (input.messageId !== undefined) {
    bodyParams["messageId"] = input.messageId;
  }
  if (input.payload !== undefined) {
    bodyParams["payload"] = context.base64Encoder(input.payload);
  }
  return bodyParams;
};

const serializeAws_restJson1_1Messages = (
  input: Message[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_restJson1_1Message(entry, context));
};

const deserializeAws_restJson1_1AddAttributesActivity = (
  output: any,
  context: __SerdeContext
): AddAttributesActivity => {
  return {
    __type: "AddAttributesActivity",
    attributes:
      output.attributes !== undefined && output.attributes !== null
        ? deserializeAws_restJson1_1AttributeNameMapping(
            output.attributes,
            context
          )
        : undefined,
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined,
    next:
      output.next !== undefined && output.next !== null
        ? output.next
        : undefined
  } as any;
};

const deserializeAws_restJson1_1AttributeNameMapping = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  return Object.keys(output).reduce((acc: any, key: string) => {
    acc[key] = output[key];
    return acc;
  }, {});
};

const deserializeAws_restJson1_1AttributeNames = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1Channel = (
  output: any,
  context: __SerdeContext
): Channel => {
  return {
    __type: "Channel",
    arn:
      output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    creationTime:
      output.creationTime !== undefined && output.creationTime !== null
        ? new Date(Math.round(output.creationTime * 1000))
        : undefined,
    lastUpdateTime:
      output.lastUpdateTime !== undefined && output.lastUpdateTime !== null
        ? new Date(Math.round(output.lastUpdateTime * 1000))
        : undefined,
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined,
    retentionPeriod:
      output.retentionPeriod !== undefined && output.retentionPeriod !== null
        ? deserializeAws_restJson1_1RetentionPeriod(
            output.retentionPeriod,
            context
          )
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? output.status
        : undefined,
    storage:
      output.storage !== undefined && output.storage !== null
        ? deserializeAws_restJson1_1ChannelStorage(output.storage, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1_1ChannelActivity = (
  output: any,
  context: __SerdeContext
): ChannelActivity => {
  return {
    __type: "ChannelActivity",
    channelName:
      output.channelName !== undefined && output.channelName !== null
        ? output.channelName
        : undefined,
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined,
    next:
      output.next !== undefined && output.next !== null
        ? output.next
        : undefined
  } as any;
};

const deserializeAws_restJson1_1ChannelStatistics = (
  output: any,
  context: __SerdeContext
): ChannelStatistics => {
  return {
    __type: "ChannelStatistics",
    size:
      output.size !== undefined && output.size !== null
        ? deserializeAws_restJson1_1EstimatedResourceSize(output.size, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1_1ChannelStorage = (
  output: any,
  context: __SerdeContext
): ChannelStorage => {
  return {
    __type: "ChannelStorage",
    customerManagedS3:
      output.customerManagedS3 !== undefined &&
      output.customerManagedS3 !== null
        ? deserializeAws_restJson1_1CustomerManagedChannelS3Storage(
            output.customerManagedS3,
            context
          )
        : undefined,
    serviceManagedS3:
      output.serviceManagedS3 !== undefined && output.serviceManagedS3 !== null
        ? deserializeAws_restJson1_1ServiceManagedChannelS3Storage(
            output.serviceManagedS3,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1_1ChannelStorageSummary = (
  output: any,
  context: __SerdeContext
): ChannelStorageSummary => {
  return {
    __type: "ChannelStorageSummary",
    customerManagedS3:
      output.customerManagedS3 !== undefined &&
      output.customerManagedS3 !== null
        ? deserializeAws_restJson1_1CustomerManagedChannelS3StorageSummary(
            output.customerManagedS3,
            context
          )
        : undefined,
    serviceManagedS3:
      output.serviceManagedS3 !== undefined && output.serviceManagedS3 !== null
        ? deserializeAws_restJson1_1ServiceManagedChannelS3StorageSummary(
            output.serviceManagedS3,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1_1ChannelSummaries = (
  output: any,
  context: __SerdeContext
): ChannelSummary[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1ChannelSummary(entry, context)
  );
};

const deserializeAws_restJson1_1ChannelSummary = (
  output: any,
  context: __SerdeContext
): ChannelSummary => {
  return {
    __type: "ChannelSummary",
    channelName:
      output.channelName !== undefined && output.channelName !== null
        ? output.channelName
        : undefined,
    channelStorage:
      output.channelStorage !== undefined && output.channelStorage !== null
        ? deserializeAws_restJson1_1ChannelStorageSummary(
            output.channelStorage,
            context
          )
        : undefined,
    creationTime:
      output.creationTime !== undefined && output.creationTime !== null
        ? new Date(Math.round(output.creationTime * 1000))
        : undefined,
    lastUpdateTime:
      output.lastUpdateTime !== undefined && output.lastUpdateTime !== null
        ? new Date(Math.round(output.lastUpdateTime * 1000))
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? output.status
        : undefined
  } as any;
};

const deserializeAws_restJson1_1ContainerDatasetAction = (
  output: any,
  context: __SerdeContext
): ContainerDatasetAction => {
  return {
    __type: "ContainerDatasetAction",
    executionRoleArn:
      output.executionRoleArn !== undefined && output.executionRoleArn !== null
        ? output.executionRoleArn
        : undefined,
    image:
      output.image !== undefined && output.image !== null
        ? output.image
        : undefined,
    resourceConfiguration:
      output.resourceConfiguration !== undefined &&
      output.resourceConfiguration !== null
        ? deserializeAws_restJson1_1ResourceConfiguration(
            output.resourceConfiguration,
            context
          )
        : undefined,
    variables:
      output.variables !== undefined && output.variables !== null
        ? deserializeAws_restJson1_1Variables(output.variables, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1_1CustomerManagedChannelS3Storage = (
  output: any,
  context: __SerdeContext
): CustomerManagedChannelS3Storage => {
  return {
    __type: "CustomerManagedChannelS3Storage",
    bucket:
      output.bucket !== undefined && output.bucket !== null
        ? output.bucket
        : undefined,
    keyPrefix:
      output.keyPrefix !== undefined && output.keyPrefix !== null
        ? output.keyPrefix
        : undefined,
    roleArn:
      output.roleArn !== undefined && output.roleArn !== null
        ? output.roleArn
        : undefined
  } as any;
};

const deserializeAws_restJson1_1CustomerManagedChannelS3StorageSummary = (
  output: any,
  context: __SerdeContext
): CustomerManagedChannelS3StorageSummary => {
  return {
    __type: "CustomerManagedChannelS3StorageSummary",
    bucket:
      output.bucket !== undefined && output.bucket !== null
        ? output.bucket
        : undefined,
    keyPrefix:
      output.keyPrefix !== undefined && output.keyPrefix !== null
        ? output.keyPrefix
        : undefined,
    roleArn:
      output.roleArn !== undefined && output.roleArn !== null
        ? output.roleArn
        : undefined
  } as any;
};

const deserializeAws_restJson1_1CustomerManagedDatastoreS3Storage = (
  output: any,
  context: __SerdeContext
): CustomerManagedDatastoreS3Storage => {
  return {
    __type: "CustomerManagedDatastoreS3Storage",
    bucket:
      output.bucket !== undefined && output.bucket !== null
        ? output.bucket
        : undefined,
    keyPrefix:
      output.keyPrefix !== undefined && output.keyPrefix !== null
        ? output.keyPrefix
        : undefined,
    roleArn:
      output.roleArn !== undefined && output.roleArn !== null
        ? output.roleArn
        : undefined
  } as any;
};

const deserializeAws_restJson1_1CustomerManagedDatastoreS3StorageSummary = (
  output: any,
  context: __SerdeContext
): CustomerManagedDatastoreS3StorageSummary => {
  return {
    __type: "CustomerManagedDatastoreS3StorageSummary",
    bucket:
      output.bucket !== undefined && output.bucket !== null
        ? output.bucket
        : undefined,
    keyPrefix:
      output.keyPrefix !== undefined && output.keyPrefix !== null
        ? output.keyPrefix
        : undefined,
    roleArn:
      output.roleArn !== undefined && output.roleArn !== null
        ? output.roleArn
        : undefined
  } as any;
};

const deserializeAws_restJson1_1Dataset = (
  output: any,
  context: __SerdeContext
): Dataset => {
  return {
    __type: "Dataset",
    actions:
      output.actions !== undefined && output.actions !== null
        ? deserializeAws_restJson1_1DatasetActions(output.actions, context)
        : undefined,
    arn:
      output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    contentDeliveryRules:
      output.contentDeliveryRules !== undefined &&
      output.contentDeliveryRules !== null
        ? deserializeAws_restJson1_1DatasetContentDeliveryRules(
            output.contentDeliveryRules,
            context
          )
        : undefined,
    creationTime:
      output.creationTime !== undefined && output.creationTime !== null
        ? new Date(Math.round(output.creationTime * 1000))
        : undefined,
    lastUpdateTime:
      output.lastUpdateTime !== undefined && output.lastUpdateTime !== null
        ? new Date(Math.round(output.lastUpdateTime * 1000))
        : undefined,
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined,
    retentionPeriod:
      output.retentionPeriod !== undefined && output.retentionPeriod !== null
        ? deserializeAws_restJson1_1RetentionPeriod(
            output.retentionPeriod,
            context
          )
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? output.status
        : undefined,
    triggers:
      output.triggers !== undefined && output.triggers !== null
        ? deserializeAws_restJson1_1DatasetTriggers(output.triggers, context)
        : undefined,
    versioningConfiguration:
      output.versioningConfiguration !== undefined &&
      output.versioningConfiguration !== null
        ? deserializeAws_restJson1_1VersioningConfiguration(
            output.versioningConfiguration,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1_1DatasetAction = (
  output: any,
  context: __SerdeContext
): DatasetAction => {
  return {
    __type: "DatasetAction",
    actionName:
      output.actionName !== undefined && output.actionName !== null
        ? output.actionName
        : undefined,
    containerAction:
      output.containerAction !== undefined && output.containerAction !== null
        ? deserializeAws_restJson1_1ContainerDatasetAction(
            output.containerAction,
            context
          )
        : undefined,
    queryAction:
      output.queryAction !== undefined && output.queryAction !== null
        ? deserializeAws_restJson1_1SqlQueryDatasetAction(
            output.queryAction,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1_1DatasetActionSummaries = (
  output: any,
  context: __SerdeContext
): DatasetActionSummary[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1DatasetActionSummary(entry, context)
  );
};

const deserializeAws_restJson1_1DatasetActionSummary = (
  output: any,
  context: __SerdeContext
): DatasetActionSummary => {
  return {
    __type: "DatasetActionSummary",
    actionName:
      output.actionName !== undefined && output.actionName !== null
        ? output.actionName
        : undefined,
    actionType:
      output.actionType !== undefined && output.actionType !== null
        ? output.actionType
        : undefined
  } as any;
};

const deserializeAws_restJson1_1DatasetActions = (
  output: any,
  context: __SerdeContext
): DatasetAction[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1DatasetAction(entry, context)
  );
};

const deserializeAws_restJson1_1DatasetContentDeliveryDestination = (
  output: any,
  context: __SerdeContext
): DatasetContentDeliveryDestination => {
  return {
    __type: "DatasetContentDeliveryDestination",
    iotEventsDestinationConfiguration:
      output.iotEventsDestinationConfiguration !== undefined &&
      output.iotEventsDestinationConfiguration !== null
        ? deserializeAws_restJson1_1IotEventsDestinationConfiguration(
            output.iotEventsDestinationConfiguration,
            context
          )
        : undefined,
    s3DestinationConfiguration:
      output.s3DestinationConfiguration !== undefined &&
      output.s3DestinationConfiguration !== null
        ? deserializeAws_restJson1_1S3DestinationConfiguration(
            output.s3DestinationConfiguration,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1_1DatasetContentDeliveryRule = (
  output: any,
  context: __SerdeContext
): DatasetContentDeliveryRule => {
  return {
    __type: "DatasetContentDeliveryRule",
    destination:
      output.destination !== undefined && output.destination !== null
        ? deserializeAws_restJson1_1DatasetContentDeliveryDestination(
            output.destination,
            context
          )
        : undefined,
    entryName:
      output.entryName !== undefined && output.entryName !== null
        ? output.entryName
        : undefined
  } as any;
};

const deserializeAws_restJson1_1DatasetContentDeliveryRules = (
  output: any,
  context: __SerdeContext
): DatasetContentDeliveryRule[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1DatasetContentDeliveryRule(entry, context)
  );
};

const deserializeAws_restJson1_1DatasetContentStatus = (
  output: any,
  context: __SerdeContext
): DatasetContentStatus => {
  return {
    __type: "DatasetContentStatus",
    reason:
      output.reason !== undefined && output.reason !== null
        ? output.reason
        : undefined,
    state:
      output.state !== undefined && output.state !== null
        ? output.state
        : undefined
  } as any;
};

const deserializeAws_restJson1_1DatasetContentSummaries = (
  output: any,
  context: __SerdeContext
): DatasetContentSummary[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1DatasetContentSummary(entry, context)
  );
};

const deserializeAws_restJson1_1DatasetContentSummary = (
  output: any,
  context: __SerdeContext
): DatasetContentSummary => {
  return {
    __type: "DatasetContentSummary",
    completionTime:
      output.completionTime !== undefined && output.completionTime !== null
        ? new Date(Math.round(output.completionTime * 1000))
        : undefined,
    creationTime:
      output.creationTime !== undefined && output.creationTime !== null
        ? new Date(Math.round(output.creationTime * 1000))
        : undefined,
    scheduleTime:
      output.scheduleTime !== undefined && output.scheduleTime !== null
        ? new Date(Math.round(output.scheduleTime * 1000))
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? deserializeAws_restJson1_1DatasetContentStatus(output.status, context)
        : undefined,
    version:
      output.version !== undefined && output.version !== null
        ? output.version
        : undefined
  } as any;
};

const deserializeAws_restJson1_1DatasetContentVersionValue = (
  output: any,
  context: __SerdeContext
): DatasetContentVersionValue => {
  return {
    __type: "DatasetContentVersionValue",
    datasetName:
      output.datasetName !== undefined && output.datasetName !== null
        ? output.datasetName
        : undefined
  } as any;
};

const deserializeAws_restJson1_1DatasetEntries = (
  output: any,
  context: __SerdeContext
): DatasetEntry[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1DatasetEntry(entry, context)
  );
};

const deserializeAws_restJson1_1DatasetEntry = (
  output: any,
  context: __SerdeContext
): DatasetEntry => {
  return {
    __type: "DatasetEntry",
    dataURI:
      output.dataURI !== undefined && output.dataURI !== null
        ? output.dataURI
        : undefined,
    entryName:
      output.entryName !== undefined && output.entryName !== null
        ? output.entryName
        : undefined
  } as any;
};

const deserializeAws_restJson1_1DatasetSummaries = (
  output: any,
  context: __SerdeContext
): DatasetSummary[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1DatasetSummary(entry, context)
  );
};

const deserializeAws_restJson1_1DatasetSummary = (
  output: any,
  context: __SerdeContext
): DatasetSummary => {
  return {
    __type: "DatasetSummary",
    actions:
      output.actions !== undefined && output.actions !== null
        ? deserializeAws_restJson1_1DatasetActionSummaries(
            output.actions,
            context
          )
        : undefined,
    creationTime:
      output.creationTime !== undefined && output.creationTime !== null
        ? new Date(Math.round(output.creationTime * 1000))
        : undefined,
    datasetName:
      output.datasetName !== undefined && output.datasetName !== null
        ? output.datasetName
        : undefined,
    lastUpdateTime:
      output.lastUpdateTime !== undefined && output.lastUpdateTime !== null
        ? new Date(Math.round(output.lastUpdateTime * 1000))
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? output.status
        : undefined,
    triggers:
      output.triggers !== undefined && output.triggers !== null
        ? deserializeAws_restJson1_1DatasetTriggers(output.triggers, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1_1DatasetTrigger = (
  output: any,
  context: __SerdeContext
): DatasetTrigger => {
  return {
    __type: "DatasetTrigger",
    dataset:
      output.dataset !== undefined && output.dataset !== null
        ? deserializeAws_restJson1_1TriggeringDataset(output.dataset, context)
        : undefined,
    schedule:
      output.schedule !== undefined && output.schedule !== null
        ? deserializeAws_restJson1_1Schedule(output.schedule, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1_1DatasetTriggers = (
  output: any,
  context: __SerdeContext
): DatasetTrigger[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1DatasetTrigger(entry, context)
  );
};

const deserializeAws_restJson1_1Datastore = (
  output: any,
  context: __SerdeContext
): Datastore => {
  return {
    __type: "Datastore",
    arn:
      output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    creationTime:
      output.creationTime !== undefined && output.creationTime !== null
        ? new Date(Math.round(output.creationTime * 1000))
        : undefined,
    lastUpdateTime:
      output.lastUpdateTime !== undefined && output.lastUpdateTime !== null
        ? new Date(Math.round(output.lastUpdateTime * 1000))
        : undefined,
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined,
    retentionPeriod:
      output.retentionPeriod !== undefined && output.retentionPeriod !== null
        ? deserializeAws_restJson1_1RetentionPeriod(
            output.retentionPeriod,
            context
          )
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? output.status
        : undefined,
    storage:
      output.storage !== undefined && output.storage !== null
        ? deserializeAws_restJson1_1DatastoreStorage(output.storage, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1_1DatastoreActivity = (
  output: any,
  context: __SerdeContext
): DatastoreActivity => {
  return {
    __type: "DatastoreActivity",
    datastoreName:
      output.datastoreName !== undefined && output.datastoreName !== null
        ? output.datastoreName
        : undefined,
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined
  } as any;
};

const deserializeAws_restJson1_1DatastoreStatistics = (
  output: any,
  context: __SerdeContext
): DatastoreStatistics => {
  return {
    __type: "DatastoreStatistics",
    size:
      output.size !== undefined && output.size !== null
        ? deserializeAws_restJson1_1EstimatedResourceSize(output.size, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1_1DatastoreStorage = (
  output: any,
  context: __SerdeContext
): DatastoreStorage => {
  return {
    __type: "DatastoreStorage",
    customerManagedS3:
      output.customerManagedS3 !== undefined &&
      output.customerManagedS3 !== null
        ? deserializeAws_restJson1_1CustomerManagedDatastoreS3Storage(
            output.customerManagedS3,
            context
          )
        : undefined,
    serviceManagedS3:
      output.serviceManagedS3 !== undefined && output.serviceManagedS3 !== null
        ? deserializeAws_restJson1_1ServiceManagedDatastoreS3Storage(
            output.serviceManagedS3,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1_1DatastoreStorageSummary = (
  output: any,
  context: __SerdeContext
): DatastoreStorageSummary => {
  return {
    __type: "DatastoreStorageSummary",
    customerManagedS3:
      output.customerManagedS3 !== undefined &&
      output.customerManagedS3 !== null
        ? deserializeAws_restJson1_1CustomerManagedDatastoreS3StorageSummary(
            output.customerManagedS3,
            context
          )
        : undefined,
    serviceManagedS3:
      output.serviceManagedS3 !== undefined && output.serviceManagedS3 !== null
        ? deserializeAws_restJson1_1ServiceManagedDatastoreS3StorageSummary(
            output.serviceManagedS3,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1_1DatastoreSummaries = (
  output: any,
  context: __SerdeContext
): DatastoreSummary[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1DatastoreSummary(entry, context)
  );
};

const deserializeAws_restJson1_1DatastoreSummary = (
  output: any,
  context: __SerdeContext
): DatastoreSummary => {
  return {
    __type: "DatastoreSummary",
    creationTime:
      output.creationTime !== undefined && output.creationTime !== null
        ? new Date(Math.round(output.creationTime * 1000))
        : undefined,
    datastoreName:
      output.datastoreName !== undefined && output.datastoreName !== null
        ? output.datastoreName
        : undefined,
    datastoreStorage:
      output.datastoreStorage !== undefined && output.datastoreStorage !== null
        ? deserializeAws_restJson1_1DatastoreStorageSummary(
            output.datastoreStorage,
            context
          )
        : undefined,
    lastUpdateTime:
      output.lastUpdateTime !== undefined && output.lastUpdateTime !== null
        ? new Date(Math.round(output.lastUpdateTime * 1000))
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? output.status
        : undefined
  } as any;
};

const deserializeAws_restJson1_1DeltaTime = (
  output: any,
  context: __SerdeContext
): DeltaTime => {
  return {
    __type: "DeltaTime",
    offsetSeconds:
      output.offsetSeconds !== undefined && output.offsetSeconds !== null
        ? output.offsetSeconds
        : undefined,
    timeExpression:
      output.timeExpression !== undefined && output.timeExpression !== null
        ? output.timeExpression
        : undefined
  } as any;
};

const deserializeAws_restJson1_1DeviceRegistryEnrichActivity = (
  output: any,
  context: __SerdeContext
): DeviceRegistryEnrichActivity => {
  return {
    __type: "DeviceRegistryEnrichActivity",
    attribute:
      output.attribute !== undefined && output.attribute !== null
        ? output.attribute
        : undefined,
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined,
    next:
      output.next !== undefined && output.next !== null
        ? output.next
        : undefined,
    roleArn:
      output.roleArn !== undefined && output.roleArn !== null
        ? output.roleArn
        : undefined,
    thingName:
      output.thingName !== undefined && output.thingName !== null
        ? output.thingName
        : undefined
  } as any;
};

const deserializeAws_restJson1_1DeviceShadowEnrichActivity = (
  output: any,
  context: __SerdeContext
): DeviceShadowEnrichActivity => {
  return {
    __type: "DeviceShadowEnrichActivity",
    attribute:
      output.attribute !== undefined && output.attribute !== null
        ? output.attribute
        : undefined,
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined,
    next:
      output.next !== undefined && output.next !== null
        ? output.next
        : undefined,
    roleArn:
      output.roleArn !== undefined && output.roleArn !== null
        ? output.roleArn
        : undefined,
    thingName:
      output.thingName !== undefined && output.thingName !== null
        ? output.thingName
        : undefined
  } as any;
};

const deserializeAws_restJson1_1EstimatedResourceSize = (
  output: any,
  context: __SerdeContext
): EstimatedResourceSize => {
  return {
    __type: "EstimatedResourceSize",
    estimatedOn:
      output.estimatedOn !== undefined && output.estimatedOn !== null
        ? new Date(Math.round(output.estimatedOn * 1000))
        : undefined,
    estimatedSizeInBytes:
      output.estimatedSizeInBytes !== undefined &&
      output.estimatedSizeInBytes !== null
        ? output.estimatedSizeInBytes
        : undefined
  } as any;
};

const deserializeAws_restJson1_1FilterActivity = (
  output: any,
  context: __SerdeContext
): FilterActivity => {
  return {
    __type: "FilterActivity",
    filter:
      output.filter !== undefined && output.filter !== null
        ? output.filter
        : undefined,
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined,
    next:
      output.next !== undefined && output.next !== null
        ? output.next
        : undefined
  } as any;
};

const deserializeAws_restJson1_1GlueConfiguration = (
  output: any,
  context: __SerdeContext
): GlueConfiguration => {
  return {
    __type: "GlueConfiguration",
    databaseName:
      output.databaseName !== undefined && output.databaseName !== null
        ? output.databaseName
        : undefined,
    tableName:
      output.tableName !== undefined && output.tableName !== null
        ? output.tableName
        : undefined
  } as any;
};

const deserializeAws_restJson1_1IotEventsDestinationConfiguration = (
  output: any,
  context: __SerdeContext
): IotEventsDestinationConfiguration => {
  return {
    __type: "IotEventsDestinationConfiguration",
    inputName:
      output.inputName !== undefined && output.inputName !== null
        ? output.inputName
        : undefined,
    roleArn:
      output.roleArn !== undefined && output.roleArn !== null
        ? output.roleArn
        : undefined
  } as any;
};

const deserializeAws_restJson1_1LambdaActivity = (
  output: any,
  context: __SerdeContext
): LambdaActivity => {
  return {
    __type: "LambdaActivity",
    batchSize:
      output.batchSize !== undefined && output.batchSize !== null
        ? output.batchSize
        : undefined,
    lambdaName:
      output.lambdaName !== undefined && output.lambdaName !== null
        ? output.lambdaName
        : undefined,
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined,
    next:
      output.next !== undefined && output.next !== null
        ? output.next
        : undefined
  } as any;
};

const deserializeAws_restJson1_1LoggingOptions = (
  output: any,
  context: __SerdeContext
): LoggingOptions => {
  return {
    __type: "LoggingOptions",
    enabled:
      output.enabled !== undefined && output.enabled !== null
        ? output.enabled
        : undefined,
    level:
      output.level !== undefined && output.level !== null
        ? output.level
        : undefined,
    roleArn:
      output.roleArn !== undefined && output.roleArn !== null
        ? output.roleArn
        : undefined
  } as any;
};

const deserializeAws_restJson1_1MathActivity = (
  output: any,
  context: __SerdeContext
): MathActivity => {
  return {
    __type: "MathActivity",
    attribute:
      output.attribute !== undefined && output.attribute !== null
        ? output.attribute
        : undefined,
    math:
      output.math !== undefined && output.math !== null
        ? output.math
        : undefined,
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined,
    next:
      output.next !== undefined && output.next !== null
        ? output.next
        : undefined
  } as any;
};

const deserializeAws_restJson1_1MessagePayloads = (
  output: any,
  context: __SerdeContext
): Uint8Array[] => {
  return (output || []).map((entry: any) => context.base64Decoder(entry));
};

const deserializeAws_restJson1_1OutputFileUriValue = (
  output: any,
  context: __SerdeContext
): OutputFileUriValue => {
  return {
    __type: "OutputFileUriValue",
    fileName:
      output.fileName !== undefined && output.fileName !== null
        ? output.fileName
        : undefined
  } as any;
};

const deserializeAws_restJson1_1Pipeline = (
  output: any,
  context: __SerdeContext
): Pipeline => {
  return {
    __type: "Pipeline",
    activities:
      output.activities !== undefined && output.activities !== null
        ? deserializeAws_restJson1_1PipelineActivities(
            output.activities,
            context
          )
        : undefined,
    arn:
      output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    creationTime:
      output.creationTime !== undefined && output.creationTime !== null
        ? new Date(Math.round(output.creationTime * 1000))
        : undefined,
    lastUpdateTime:
      output.lastUpdateTime !== undefined && output.lastUpdateTime !== null
        ? new Date(Math.round(output.lastUpdateTime * 1000))
        : undefined,
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined,
    reprocessingSummaries:
      output.reprocessingSummaries !== undefined &&
      output.reprocessingSummaries !== null
        ? deserializeAws_restJson1_1ReprocessingSummaries(
            output.reprocessingSummaries,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1_1PipelineActivities = (
  output: any,
  context: __SerdeContext
): PipelineActivity[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1PipelineActivity(entry, context)
  );
};

const deserializeAws_restJson1_1PipelineActivity = (
  output: any,
  context: __SerdeContext
): PipelineActivity => {
  return {
    __type: "PipelineActivity",
    addAttributes:
      output.addAttributes !== undefined && output.addAttributes !== null
        ? deserializeAws_restJson1_1AddAttributesActivity(
            output.addAttributes,
            context
          )
        : undefined,
    channel:
      output.channel !== undefined && output.channel !== null
        ? deserializeAws_restJson1_1ChannelActivity(output.channel, context)
        : undefined,
    datastore:
      output.datastore !== undefined && output.datastore !== null
        ? deserializeAws_restJson1_1DatastoreActivity(output.datastore, context)
        : undefined,
    deviceRegistryEnrich:
      output.deviceRegistryEnrich !== undefined &&
      output.deviceRegistryEnrich !== null
        ? deserializeAws_restJson1_1DeviceRegistryEnrichActivity(
            output.deviceRegistryEnrich,
            context
          )
        : undefined,
    deviceShadowEnrich:
      output.deviceShadowEnrich !== undefined &&
      output.deviceShadowEnrich !== null
        ? deserializeAws_restJson1_1DeviceShadowEnrichActivity(
            output.deviceShadowEnrich,
            context
          )
        : undefined,
    filter:
      output.filter !== undefined && output.filter !== null
        ? deserializeAws_restJson1_1FilterActivity(output.filter, context)
        : undefined,
    lambda:
      output.lambda !== undefined && output.lambda !== null
        ? deserializeAws_restJson1_1LambdaActivity(output.lambda, context)
        : undefined,
    math:
      output.math !== undefined && output.math !== null
        ? deserializeAws_restJson1_1MathActivity(output.math, context)
        : undefined,
    removeAttributes:
      output.removeAttributes !== undefined && output.removeAttributes !== null
        ? deserializeAws_restJson1_1RemoveAttributesActivity(
            output.removeAttributes,
            context
          )
        : undefined,
    selectAttributes:
      output.selectAttributes !== undefined && output.selectAttributes !== null
        ? deserializeAws_restJson1_1SelectAttributesActivity(
            output.selectAttributes,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1_1PipelineSummaries = (
  output: any,
  context: __SerdeContext
): PipelineSummary[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1PipelineSummary(entry, context)
  );
};

const deserializeAws_restJson1_1PipelineSummary = (
  output: any,
  context: __SerdeContext
): PipelineSummary => {
  return {
    __type: "PipelineSummary",
    creationTime:
      output.creationTime !== undefined && output.creationTime !== null
        ? new Date(Math.round(output.creationTime * 1000))
        : undefined,
    lastUpdateTime:
      output.lastUpdateTime !== undefined && output.lastUpdateTime !== null
        ? new Date(Math.round(output.lastUpdateTime * 1000))
        : undefined,
    pipelineName:
      output.pipelineName !== undefined && output.pipelineName !== null
        ? output.pipelineName
        : undefined,
    reprocessingSummaries:
      output.reprocessingSummaries !== undefined &&
      output.reprocessingSummaries !== null
        ? deserializeAws_restJson1_1ReprocessingSummaries(
            output.reprocessingSummaries,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1_1QueryFilter = (
  output: any,
  context: __SerdeContext
): QueryFilter => {
  return {
    __type: "QueryFilter",
    deltaTime:
      output.deltaTime !== undefined && output.deltaTime !== null
        ? deserializeAws_restJson1_1DeltaTime(output.deltaTime, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1_1QueryFilters = (
  output: any,
  context: __SerdeContext
): QueryFilter[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1QueryFilter(entry, context)
  );
};

const deserializeAws_restJson1_1RemoveAttributesActivity = (
  output: any,
  context: __SerdeContext
): RemoveAttributesActivity => {
  return {
    __type: "RemoveAttributesActivity",
    attributes:
      output.attributes !== undefined && output.attributes !== null
        ? deserializeAws_restJson1_1AttributeNames(output.attributes, context)
        : undefined,
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined,
    next:
      output.next !== undefined && output.next !== null
        ? output.next
        : undefined
  } as any;
};

const deserializeAws_restJson1_1ReprocessingSummaries = (
  output: any,
  context: __SerdeContext
): ReprocessingSummary[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1ReprocessingSummary(entry, context)
  );
};

const deserializeAws_restJson1_1ReprocessingSummary = (
  output: any,
  context: __SerdeContext
): ReprocessingSummary => {
  return {
    __type: "ReprocessingSummary",
    creationTime:
      output.creationTime !== undefined && output.creationTime !== null
        ? new Date(Math.round(output.creationTime * 1000))
        : undefined,
    id: output.id !== undefined && output.id !== null ? output.id : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? output.status
        : undefined
  } as any;
};

const deserializeAws_restJson1_1ResourceConfiguration = (
  output: any,
  context: __SerdeContext
): ResourceConfiguration => {
  return {
    __type: "ResourceConfiguration",
    computeType:
      output.computeType !== undefined && output.computeType !== null
        ? output.computeType
        : undefined,
    volumeSizeInGB:
      output.volumeSizeInGB !== undefined && output.volumeSizeInGB !== null
        ? output.volumeSizeInGB
        : undefined
  } as any;
};

const deserializeAws_restJson1_1RetentionPeriod = (
  output: any,
  context: __SerdeContext
): RetentionPeriod => {
  return {
    __type: "RetentionPeriod",
    numberOfDays:
      output.numberOfDays !== undefined && output.numberOfDays !== null
        ? output.numberOfDays
        : undefined,
    unlimited:
      output.unlimited !== undefined && output.unlimited !== null
        ? output.unlimited
        : undefined
  } as any;
};

const deserializeAws_restJson1_1S3DestinationConfiguration = (
  output: any,
  context: __SerdeContext
): S3DestinationConfiguration => {
  return {
    __type: "S3DestinationConfiguration",
    bucket:
      output.bucket !== undefined && output.bucket !== null
        ? output.bucket
        : undefined,
    glueConfiguration:
      output.glueConfiguration !== undefined &&
      output.glueConfiguration !== null
        ? deserializeAws_restJson1_1GlueConfiguration(
            output.glueConfiguration,
            context
          )
        : undefined,
    key:
      output.key !== undefined && output.key !== null ? output.key : undefined,
    roleArn:
      output.roleArn !== undefined && output.roleArn !== null
        ? output.roleArn
        : undefined
  } as any;
};

const deserializeAws_restJson1_1Schedule = (
  output: any,
  context: __SerdeContext
): Schedule => {
  return {
    __type: "Schedule",
    expression:
      output.expression !== undefined && output.expression !== null
        ? output.expression
        : undefined
  } as any;
};

const deserializeAws_restJson1_1SelectAttributesActivity = (
  output: any,
  context: __SerdeContext
): SelectAttributesActivity => {
  return {
    __type: "SelectAttributesActivity",
    attributes:
      output.attributes !== undefined && output.attributes !== null
        ? deserializeAws_restJson1_1AttributeNames(output.attributes, context)
        : undefined,
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined,
    next:
      output.next !== undefined && output.next !== null
        ? output.next
        : undefined
  } as any;
};

const deserializeAws_restJson1_1ServiceManagedChannelS3Storage = (
  output: any,
  context: __SerdeContext
): ServiceManagedChannelS3Storage => {
  return {
    __type: "ServiceManagedChannelS3Storage"
  } as any;
};

const deserializeAws_restJson1_1ServiceManagedChannelS3StorageSummary = (
  output: any,
  context: __SerdeContext
): ServiceManagedChannelS3StorageSummary => {
  return {
    __type: "ServiceManagedChannelS3StorageSummary"
  } as any;
};

const deserializeAws_restJson1_1ServiceManagedDatastoreS3Storage = (
  output: any,
  context: __SerdeContext
): ServiceManagedDatastoreS3Storage => {
  return {
    __type: "ServiceManagedDatastoreS3Storage"
  } as any;
};

const deserializeAws_restJson1_1ServiceManagedDatastoreS3StorageSummary = (
  output: any,
  context: __SerdeContext
): ServiceManagedDatastoreS3StorageSummary => {
  return {
    __type: "ServiceManagedDatastoreS3StorageSummary"
  } as any;
};

const deserializeAws_restJson1_1SqlQueryDatasetAction = (
  output: any,
  context: __SerdeContext
): SqlQueryDatasetAction => {
  return {
    __type: "SqlQueryDatasetAction",
    filters:
      output.filters !== undefined && output.filters !== null
        ? deserializeAws_restJson1_1QueryFilters(output.filters, context)
        : undefined,
    sqlQuery:
      output.sqlQuery !== undefined && output.sqlQuery !== null
        ? output.sqlQuery
        : undefined
  } as any;
};

const deserializeAws_restJson1_1Tag = (
  output: any,
  context: __SerdeContext
): Tag => {
  return {
    __type: "Tag",
    key:
      output.key !== undefined && output.key !== null ? output.key : undefined,
    value:
      output.value !== undefined && output.value !== null
        ? output.value
        : undefined
  } as any;
};

const deserializeAws_restJson1_1TagList = (
  output: any,
  context: __SerdeContext
): Tag[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Tag(entry, context)
  );
};

const deserializeAws_restJson1_1TriggeringDataset = (
  output: any,
  context: __SerdeContext
): TriggeringDataset => {
  return {
    __type: "TriggeringDataset",
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined
  } as any;
};

const deserializeAws_restJson1_1Variable = (
  output: any,
  context: __SerdeContext
): Variable => {
  return {
    __type: "Variable",
    datasetContentVersionValue:
      output.datasetContentVersionValue !== undefined &&
      output.datasetContentVersionValue !== null
        ? deserializeAws_restJson1_1DatasetContentVersionValue(
            output.datasetContentVersionValue,
            context
          )
        : undefined,
    doubleValue:
      output.doubleValue !== undefined && output.doubleValue !== null
        ? output.doubleValue
        : undefined,
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined,
    outputFileUriValue:
      output.outputFileUriValue !== undefined &&
      output.outputFileUriValue !== null
        ? deserializeAws_restJson1_1OutputFileUriValue(
            output.outputFileUriValue,
            context
          )
        : undefined,
    stringValue:
      output.stringValue !== undefined && output.stringValue !== null
        ? output.stringValue
        : undefined
  } as any;
};

const deserializeAws_restJson1_1Variables = (
  output: any,
  context: __SerdeContext
): Variable[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Variable(entry, context)
  );
};

const deserializeAws_restJson1_1VersioningConfiguration = (
  output: any,
  context: __SerdeContext
): VersioningConfiguration => {
  return {
    __type: "VersioningConfiguration",
    maxVersions:
      output.maxVersions !== undefined && output.maxVersions !== null
        ? output.maxVersions
        : undefined,
    unlimited:
      output.unlimited !== undefined && output.unlimited !== null
        ? output.unlimited
        : undefined
  } as any;
};

const deserializeAws_restJson1_1BatchPutMessageErrorEntries = (
  output: any,
  context: __SerdeContext
): BatchPutMessageErrorEntry[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1BatchPutMessageErrorEntry(entry, context)
  );
};

const deserializeAws_restJson1_1BatchPutMessageErrorEntry = (
  output: any,
  context: __SerdeContext
): BatchPutMessageErrorEntry => {
  return {
    __type: "BatchPutMessageErrorEntry",
    errorCode:
      output.errorCode !== undefined && output.errorCode !== null
        ? output.errorCode
        : undefined,
    errorMessage:
      output.errorMessage !== undefined && output.errorMessage !== null
        ? output.errorMessage
        : undefined,
    messageId:
      output.messageId !== undefined && output.messageId !== null
        ? output.messageId
        : undefined
  } as any;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (
  streamBody: any = new Uint8Array(),
  context: __SerdeContext
): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return (
    context.streamCollector(streamBody) || Promise.resolve(new Uint8Array())
  );
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (
  streamBody: any,
  context: __SerdeContext
): Promise<string> =>
  collectBody(streamBody, context).then(body => context.utf8Encoder(body));

const isSerializableHeaderValue = (value: any): boolean =>
  value !== undefined &&
  value !== "" &&
  (!Object.getOwnPropertyNames(value).includes("length") ||
    value.length != 0) &&
  (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string => {
  const findKey = (object: any, key: string) =>
    Object.keys(object).find(k => k.toLowerCase() === key.toLowerCase());

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

  return "";
};
