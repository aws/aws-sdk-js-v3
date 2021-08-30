import { CancelJobCommandInput, CancelJobCommandOutput } from "../commands/CancelJobCommand";
import { CreateDataSetCommandInput, CreateDataSetCommandOutput } from "../commands/CreateDataSetCommand";
import { CreateJobCommandInput, CreateJobCommandOutput } from "../commands/CreateJobCommand";
import { CreateRevisionCommandInput, CreateRevisionCommandOutput } from "../commands/CreateRevisionCommand";
import { DeleteAssetCommandInput, DeleteAssetCommandOutput } from "../commands/DeleteAssetCommand";
import { DeleteDataSetCommandInput, DeleteDataSetCommandOutput } from "../commands/DeleteDataSetCommand";
import { DeleteRevisionCommandInput, DeleteRevisionCommandOutput } from "../commands/DeleteRevisionCommand";
import { GetAssetCommandInput, GetAssetCommandOutput } from "../commands/GetAssetCommand";
import { GetDataSetCommandInput, GetDataSetCommandOutput } from "../commands/GetDataSetCommand";
import { GetJobCommandInput, GetJobCommandOutput } from "../commands/GetJobCommand";
import { GetRevisionCommandInput, GetRevisionCommandOutput } from "../commands/GetRevisionCommand";
import {
  ListDataSetRevisionsCommandInput,
  ListDataSetRevisionsCommandOutput,
} from "../commands/ListDataSetRevisionsCommand";
import { ListDataSetsCommandInput, ListDataSetsCommandOutput } from "../commands/ListDataSetsCommand";
import { ListJobsCommandInput, ListJobsCommandOutput } from "../commands/ListJobsCommand";
import { ListRevisionAssetsCommandInput, ListRevisionAssetsCommandOutput } from "../commands/ListRevisionAssetsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { StartJobCommandInput, StartJobCommandOutput } from "../commands/StartJobCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateAssetCommandInput, UpdateAssetCommandOutput } from "../commands/UpdateAssetCommand";
import { UpdateDataSetCommandInput, UpdateDataSetCommandOutput } from "../commands/UpdateDataSetCommand";
import { UpdateRevisionCommandInput, UpdateRevisionCommandOutput } from "../commands/UpdateRevisionCommand";
import {
  AccessDeniedException,
  AssetDestinationEntry,
  AssetDetails,
  AssetEntry,
  AssetSourceEntry,
  ConflictException,
  DataSetEntry,
  Details,
  ExportAssetToSignedUrlRequestDetails,
  ExportAssetToSignedUrlResponseDetails,
  ExportAssetsToS3RequestDetails,
  ExportAssetsToS3ResponseDetails,
  ExportRevisionsToS3RequestDetails,
  ExportRevisionsToS3ResponseDetails,
  ExportServerSideEncryption,
  ImportAssetFromSignedUrlJobErrorDetails,
  ImportAssetFromSignedUrlRequestDetails,
  ImportAssetFromSignedUrlResponseDetails,
  ImportAssetsFromS3RequestDetails,
  ImportAssetsFromS3ResponseDetails,
  InternalServerException,
  JobEntry,
  JobError,
  OriginDetails,
  RequestDetails,
  ResourceNotFoundException,
  ResponseDetails,
  RevisionDestinationEntry,
  RevisionEntry,
  S3SnapshotAsset,
  ServiceLimitExceededException,
  ThrottlingException,
  ValidationException,
} from "../models/models_0";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  expectBoolean as __expectBoolean,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  limitedParseDouble as __limitedParseDouble,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
  SmithyException as __SmithyException,
} from "@aws-sdk/types";

export const serializeAws_restJson1CancelJobCommand = async (
  input: CancelJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/jobs/{JobId}";
  if (input.JobId !== undefined) {
    const labelValue: string = input.JobId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: JobId.");
    }
    resolvedPath = resolvedPath.replace("{JobId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: JobId.");
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

export const serializeAws_restJson1CreateDataSetCommand = async (
  input: CreateDataSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/data-sets";
  let body: any;
  body = JSON.stringify({
    ...(input.AssetType !== undefined && input.AssetType !== null && { AssetType: input.AssetType }),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Tags !== undefined &&
      input.Tags !== null && { Tags: serializeAws_restJson1MapOf__string(input.Tags, context) }),
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

export const serializeAws_restJson1CreateJobCommand = async (
  input: CreateJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/jobs";
  let body: any;
  body = JSON.stringify({
    ...(input.Details !== undefined &&
      input.Details !== null && { Details: serializeAws_restJson1RequestDetails(input.Details, context) }),
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
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

export const serializeAws_restJson1CreateRevisionCommand = async (
  input: CreateRevisionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/data-sets/{DataSetId}/revisions";
  if (input.DataSetId !== undefined) {
    const labelValue: string = input.DataSetId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DataSetId.");
    }
    resolvedPath = resolvedPath.replace("{DataSetId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DataSetId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Comment !== undefined && input.Comment !== null && { Comment: input.Comment }),
    ...(input.Tags !== undefined &&
      input.Tags !== null && { Tags: serializeAws_restJson1MapOf__string(input.Tags, context) }),
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

export const serializeAws_restJson1DeleteAssetCommand = async (
  input: DeleteAssetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/data-sets/{DataSetId}/revisions/{RevisionId}/assets/{AssetId}";
  if (input.AssetId !== undefined) {
    const labelValue: string = input.AssetId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AssetId.");
    }
    resolvedPath = resolvedPath.replace("{AssetId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AssetId.");
  }
  if (input.DataSetId !== undefined) {
    const labelValue: string = input.DataSetId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DataSetId.");
    }
    resolvedPath = resolvedPath.replace("{DataSetId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DataSetId.");
  }
  if (input.RevisionId !== undefined) {
    const labelValue: string = input.RevisionId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: RevisionId.");
    }
    resolvedPath = resolvedPath.replace("{RevisionId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: RevisionId.");
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

export const serializeAws_restJson1DeleteDataSetCommand = async (
  input: DeleteDataSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/data-sets/{DataSetId}";
  if (input.DataSetId !== undefined) {
    const labelValue: string = input.DataSetId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DataSetId.");
    }
    resolvedPath = resolvedPath.replace("{DataSetId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DataSetId.");
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

export const serializeAws_restJson1DeleteRevisionCommand = async (
  input: DeleteRevisionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/data-sets/{DataSetId}/revisions/{RevisionId}";
  if (input.DataSetId !== undefined) {
    const labelValue: string = input.DataSetId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DataSetId.");
    }
    resolvedPath = resolvedPath.replace("{DataSetId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DataSetId.");
  }
  if (input.RevisionId !== undefined) {
    const labelValue: string = input.RevisionId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: RevisionId.");
    }
    resolvedPath = resolvedPath.replace("{RevisionId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: RevisionId.");
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

export const serializeAws_restJson1GetAssetCommand = async (
  input: GetAssetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/data-sets/{DataSetId}/revisions/{RevisionId}/assets/{AssetId}";
  if (input.AssetId !== undefined) {
    const labelValue: string = input.AssetId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AssetId.");
    }
    resolvedPath = resolvedPath.replace("{AssetId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AssetId.");
  }
  if (input.DataSetId !== undefined) {
    const labelValue: string = input.DataSetId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DataSetId.");
    }
    resolvedPath = resolvedPath.replace("{DataSetId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DataSetId.");
  }
  if (input.RevisionId !== undefined) {
    const labelValue: string = input.RevisionId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: RevisionId.");
    }
    resolvedPath = resolvedPath.replace("{RevisionId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: RevisionId.");
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

export const serializeAws_restJson1GetDataSetCommand = async (
  input: GetDataSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/data-sets/{DataSetId}";
  if (input.DataSetId !== undefined) {
    const labelValue: string = input.DataSetId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DataSetId.");
    }
    resolvedPath = resolvedPath.replace("{DataSetId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DataSetId.");
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

export const serializeAws_restJson1GetJobCommand = async (
  input: GetJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/jobs/{JobId}";
  if (input.JobId !== undefined) {
    const labelValue: string = input.JobId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: JobId.");
    }
    resolvedPath = resolvedPath.replace("{JobId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: JobId.");
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

export const serializeAws_restJson1GetRevisionCommand = async (
  input: GetRevisionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/data-sets/{DataSetId}/revisions/{RevisionId}";
  if (input.DataSetId !== undefined) {
    const labelValue: string = input.DataSetId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DataSetId.");
    }
    resolvedPath = resolvedPath.replace("{DataSetId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DataSetId.");
  }
  if (input.RevisionId !== undefined) {
    const labelValue: string = input.RevisionId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: RevisionId.");
    }
    resolvedPath = resolvedPath.replace("{RevisionId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: RevisionId.");
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

export const serializeAws_restJson1ListDataSetRevisionsCommand = async (
  input: ListDataSetRevisionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/data-sets/{DataSetId}/revisions";
  if (input.DataSetId !== undefined) {
    const labelValue: string = input.DataSetId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DataSetId.");
    }
    resolvedPath = resolvedPath.replace("{DataSetId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DataSetId.");
  }
  const query: any = {
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/data-sets";
  const query: any = {
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
    ...(input.Origin !== undefined && { origin: input.Origin }),
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

export const serializeAws_restJson1ListJobsCommand = async (
  input: ListJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/jobs";
  const query: any = {
    ...(input.DataSetId !== undefined && { dataSetId: input.DataSetId }),
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
    ...(input.RevisionId !== undefined && { revisionId: input.RevisionId }),
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

export const serializeAws_restJson1ListRevisionAssetsCommand = async (
  input: ListRevisionAssetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/data-sets/{DataSetId}/revisions/{RevisionId}/assets";
  if (input.DataSetId !== undefined) {
    const labelValue: string = input.DataSetId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DataSetId.");
    }
    resolvedPath = resolvedPath.replace("{DataSetId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DataSetId.");
  }
  if (input.RevisionId !== undefined) {
    const labelValue: string = input.RevisionId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: RevisionId.");
    }
    resolvedPath = resolvedPath.replace("{RevisionId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: RevisionId.");
  }
  const query: any = {
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue: string = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceArn.");
    }
    resolvedPath = resolvedPath.replace("{ResourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
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

export const serializeAws_restJson1StartJobCommand = async (
  input: StartJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/jobs/{JobId}";
  if (input.JobId !== undefined) {
    const labelValue: string = input.JobId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: JobId.");
    }
    resolvedPath = resolvedPath.replace("{JobId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: JobId.");
  }
  let body: any;
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

export const serializeAws_restJson1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue: string = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceArn.");
    }
    resolvedPath = resolvedPath.replace("{ResourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Tags !== undefined &&
      input.Tags !== null && { tags: serializeAws_restJson1MapOf__string(input.Tags, context) }),
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue: string = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceArn.");
    }
    resolvedPath = resolvedPath.replace("{ResourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
  const query: any = {
    ...(input.TagKeys !== undefined && { tagKeys: (input.TagKeys || []).map((_entry) => _entry as any) }),
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

export const serializeAws_restJson1UpdateAssetCommand = async (
  input: UpdateAssetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/data-sets/{DataSetId}/revisions/{RevisionId}/assets/{AssetId}";
  if (input.AssetId !== undefined) {
    const labelValue: string = input.AssetId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AssetId.");
    }
    resolvedPath = resolvedPath.replace("{AssetId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AssetId.");
  }
  if (input.DataSetId !== undefined) {
    const labelValue: string = input.DataSetId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DataSetId.");
    }
    resolvedPath = resolvedPath.replace("{DataSetId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DataSetId.");
  }
  if (input.RevisionId !== undefined) {
    const labelValue: string = input.RevisionId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: RevisionId.");
    }
    resolvedPath = resolvedPath.replace("{RevisionId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: RevisionId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
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

export const serializeAws_restJson1UpdateDataSetCommand = async (
  input: UpdateDataSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/data-sets/{DataSetId}";
  if (input.DataSetId !== undefined) {
    const labelValue: string = input.DataSetId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DataSetId.");
    }
    resolvedPath = resolvedPath.replace("{DataSetId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DataSetId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
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

export const serializeAws_restJson1UpdateRevisionCommand = async (
  input: UpdateRevisionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/data-sets/{DataSetId}/revisions/{RevisionId}";
  if (input.DataSetId !== undefined) {
    const labelValue: string = input.DataSetId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DataSetId.");
    }
    resolvedPath = resolvedPath.replace("{DataSetId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DataSetId.");
  }
  if (input.RevisionId !== undefined) {
    const labelValue: string = input.RevisionId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: RevisionId.");
    }
    resolvedPath = resolvedPath.replace("{RevisionId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: RevisionId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Comment !== undefined && input.Comment !== null && { Comment: input.Comment }),
    ...(input.Finalized !== undefined && input.Finalized !== null && { Finalized: input.Finalized }),
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

export const deserializeAws_restJson1CancelJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelJobCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1CancelJobCommandError(output, context);
  }
  const contents: CancelJobCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CancelJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.dataexchange#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.dataexchange#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dataexchange#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.dataexchange#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.dataexchange#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateDataSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDataSetCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateDataSetCommandError(output, context);
  }
  const contents: CreateDataSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    Arn: undefined,
    AssetType: undefined,
    CreatedAt: undefined,
    Description: undefined,
    Id: undefined,
    Name: undefined,
    Origin: undefined,
    OriginDetails: undefined,
    SourceId: undefined,
    Tags: undefined,
    UpdatedAt: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn !== undefined && data.Arn !== null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.AssetType !== undefined && data.AssetType !== null) {
    contents.AssetType = __expectString(data.AssetType);
  }
  if (data.CreatedAt !== undefined && data.CreatedAt !== null) {
    contents.CreatedAt = new Date(data.CreatedAt);
  }
  if (data.Description !== undefined && data.Description !== null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.Id !== undefined && data.Id !== null) {
    contents.Id = __expectString(data.Id);
  }
  if (data.Name !== undefined && data.Name !== null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.Origin !== undefined && data.Origin !== null) {
    contents.Origin = __expectString(data.Origin);
  }
  if (data.OriginDetails !== undefined && data.OriginDetails !== null) {
    contents.OriginDetails = deserializeAws_restJson1OriginDetails(data.OriginDetails, context);
  }
  if (data.SourceId !== undefined && data.SourceId !== null) {
    contents.SourceId = __expectString(data.SourceId);
  }
  if (data.Tags !== undefined && data.Tags !== null) {
    contents.Tags = deserializeAws_restJson1MapOf__string(data.Tags, context);
  }
  if (data.UpdatedAt !== undefined && data.UpdatedAt !== null) {
    contents.UpdatedAt = new Date(data.UpdatedAt);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateDataSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDataSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.dataexchange#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.dataexchange#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceLimitExceededException":
    case "com.amazonaws.dataexchange#ServiceLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.dataexchange#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.dataexchange#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateJobCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateJobCommandError(output, context);
  }
  const contents: CreateJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    Arn: undefined,
    CreatedAt: undefined,
    Details: undefined,
    Errors: undefined,
    Id: undefined,
    State: undefined,
    Type: undefined,
    UpdatedAt: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn !== undefined && data.Arn !== null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.CreatedAt !== undefined && data.CreatedAt !== null) {
    contents.CreatedAt = new Date(data.CreatedAt);
  }
  if (data.Details !== undefined && data.Details !== null) {
    contents.Details = deserializeAws_restJson1ResponseDetails(data.Details, context);
  }
  if (data.Errors !== undefined && data.Errors !== null) {
    contents.Errors = deserializeAws_restJson1ListOfJobError(data.Errors, context);
  }
  if (data.Id !== undefined && data.Id !== null) {
    contents.Id = __expectString(data.Id);
  }
  if (data.State !== undefined && data.State !== null) {
    contents.State = __expectString(data.State);
  }
  if (data.Type !== undefined && data.Type !== null) {
    contents.Type = __expectString(data.Type);
  }
  if (data.UpdatedAt !== undefined && data.UpdatedAt !== null) {
    contents.UpdatedAt = new Date(data.UpdatedAt);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.dataexchange#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.dataexchange#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dataexchange#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.dataexchange#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.dataexchange#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateRevisionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRevisionCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateRevisionCommandError(output, context);
  }
  const contents: CreateRevisionCommandOutput = {
    $metadata: deserializeMetadata(output),
    Arn: undefined,
    Comment: undefined,
    CreatedAt: undefined,
    DataSetId: undefined,
    Finalized: undefined,
    Id: undefined,
    SourceId: undefined,
    Tags: undefined,
    UpdatedAt: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn !== undefined && data.Arn !== null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.Comment !== undefined && data.Comment !== null) {
    contents.Comment = __expectString(data.Comment);
  }
  if (data.CreatedAt !== undefined && data.CreatedAt !== null) {
    contents.CreatedAt = new Date(data.CreatedAt);
  }
  if (data.DataSetId !== undefined && data.DataSetId !== null) {
    contents.DataSetId = __expectString(data.DataSetId);
  }
  if (data.Finalized !== undefined && data.Finalized !== null) {
    contents.Finalized = __expectBoolean(data.Finalized);
  }
  if (data.Id !== undefined && data.Id !== null) {
    contents.Id = __expectString(data.Id);
  }
  if (data.SourceId !== undefined && data.SourceId !== null) {
    contents.SourceId = __expectString(data.SourceId);
  }
  if (data.Tags !== undefined && data.Tags !== null) {
    contents.Tags = deserializeAws_restJson1MapOf__string(data.Tags, context);
  }
  if (data.UpdatedAt !== undefined && data.UpdatedAt !== null) {
    contents.UpdatedAt = new Date(data.UpdatedAt);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateRevisionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRevisionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.dataexchange#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.dataexchange#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dataexchange#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.dataexchange#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.dataexchange#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteAssetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAssetCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteAssetCommandError(output, context);
  }
  const contents: DeleteAssetCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteAssetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAssetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.dataexchange#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.dataexchange#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.dataexchange#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dataexchange#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.dataexchange#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.dataexchange#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteDataSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDataSetCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteDataSetCommandError(output, context);
  }
  const contents: DeleteDataSetCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteDataSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDataSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.dataexchange#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.dataexchange#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.dataexchange#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dataexchange#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.dataexchange#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.dataexchange#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteRevisionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRevisionCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteRevisionCommandError(output, context);
  }
  const contents: DeleteRevisionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteRevisionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRevisionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.dataexchange#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.dataexchange#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.dataexchange#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dataexchange#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.dataexchange#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.dataexchange#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetAssetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAssetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetAssetCommandError(output, context);
  }
  const contents: GetAssetCommandOutput = {
    $metadata: deserializeMetadata(output),
    Arn: undefined,
    AssetDetails: undefined,
    AssetType: undefined,
    CreatedAt: undefined,
    DataSetId: undefined,
    Id: undefined,
    Name: undefined,
    RevisionId: undefined,
    SourceId: undefined,
    UpdatedAt: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn !== undefined && data.Arn !== null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.AssetDetails !== undefined && data.AssetDetails !== null) {
    contents.AssetDetails = deserializeAws_restJson1AssetDetails(data.AssetDetails, context);
  }
  if (data.AssetType !== undefined && data.AssetType !== null) {
    contents.AssetType = __expectString(data.AssetType);
  }
  if (data.CreatedAt !== undefined && data.CreatedAt !== null) {
    contents.CreatedAt = new Date(data.CreatedAt);
  }
  if (data.DataSetId !== undefined && data.DataSetId !== null) {
    contents.DataSetId = __expectString(data.DataSetId);
  }
  if (data.Id !== undefined && data.Id !== null) {
    contents.Id = __expectString(data.Id);
  }
  if (data.Name !== undefined && data.Name !== null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.RevisionId !== undefined && data.RevisionId !== null) {
    contents.RevisionId = __expectString(data.RevisionId);
  }
  if (data.SourceId !== undefined && data.SourceId !== null) {
    contents.SourceId = __expectString(data.SourceId);
  }
  if (data.UpdatedAt !== undefined && data.UpdatedAt !== null) {
    contents.UpdatedAt = new Date(data.UpdatedAt);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetAssetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAssetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.dataexchange#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dataexchange#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.dataexchange#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.dataexchange#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetDataSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetDataSetCommandError(output, context);
  }
  const contents: GetDataSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    Arn: undefined,
    AssetType: undefined,
    CreatedAt: undefined,
    Description: undefined,
    Id: undefined,
    Name: undefined,
    Origin: undefined,
    OriginDetails: undefined,
    SourceId: undefined,
    Tags: undefined,
    UpdatedAt: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn !== undefined && data.Arn !== null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.AssetType !== undefined && data.AssetType !== null) {
    contents.AssetType = __expectString(data.AssetType);
  }
  if (data.CreatedAt !== undefined && data.CreatedAt !== null) {
    contents.CreatedAt = new Date(data.CreatedAt);
  }
  if (data.Description !== undefined && data.Description !== null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.Id !== undefined && data.Id !== null) {
    contents.Id = __expectString(data.Id);
  }
  if (data.Name !== undefined && data.Name !== null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.Origin !== undefined && data.Origin !== null) {
    contents.Origin = __expectString(data.Origin);
  }
  if (data.OriginDetails !== undefined && data.OriginDetails !== null) {
    contents.OriginDetails = deserializeAws_restJson1OriginDetails(data.OriginDetails, context);
  }
  if (data.SourceId !== undefined && data.SourceId !== null) {
    contents.SourceId = __expectString(data.SourceId);
  }
  if (data.Tags !== undefined && data.Tags !== null) {
    contents.Tags = deserializeAws_restJson1MapOf__string(data.Tags, context);
  }
  if (data.UpdatedAt !== undefined && data.UpdatedAt !== null) {
    contents.UpdatedAt = new Date(data.UpdatedAt);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetDataSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.dataexchange#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dataexchange#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.dataexchange#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.dataexchange#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetJobCommandError(output, context);
  }
  const contents: GetJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    Arn: undefined,
    CreatedAt: undefined,
    Details: undefined,
    Errors: undefined,
    Id: undefined,
    State: undefined,
    Type: undefined,
    UpdatedAt: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn !== undefined && data.Arn !== null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.CreatedAt !== undefined && data.CreatedAt !== null) {
    contents.CreatedAt = new Date(data.CreatedAt);
  }
  if (data.Details !== undefined && data.Details !== null) {
    contents.Details = deserializeAws_restJson1ResponseDetails(data.Details, context);
  }
  if (data.Errors !== undefined && data.Errors !== null) {
    contents.Errors = deserializeAws_restJson1ListOfJobError(data.Errors, context);
  }
  if (data.Id !== undefined && data.Id !== null) {
    contents.Id = __expectString(data.Id);
  }
  if (data.State !== undefined && data.State !== null) {
    contents.State = __expectString(data.State);
  }
  if (data.Type !== undefined && data.Type !== null) {
    contents.Type = __expectString(data.Type);
  }
  if (data.UpdatedAt !== undefined && data.UpdatedAt !== null) {
    contents.UpdatedAt = new Date(data.UpdatedAt);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.dataexchange#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dataexchange#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.dataexchange#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.dataexchange#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetRevisionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRevisionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetRevisionCommandError(output, context);
  }
  const contents: GetRevisionCommandOutput = {
    $metadata: deserializeMetadata(output),
    Arn: undefined,
    Comment: undefined,
    CreatedAt: undefined,
    DataSetId: undefined,
    Finalized: undefined,
    Id: undefined,
    SourceId: undefined,
    Tags: undefined,
    UpdatedAt: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn !== undefined && data.Arn !== null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.Comment !== undefined && data.Comment !== null) {
    contents.Comment = __expectString(data.Comment);
  }
  if (data.CreatedAt !== undefined && data.CreatedAt !== null) {
    contents.CreatedAt = new Date(data.CreatedAt);
  }
  if (data.DataSetId !== undefined && data.DataSetId !== null) {
    contents.DataSetId = __expectString(data.DataSetId);
  }
  if (data.Finalized !== undefined && data.Finalized !== null) {
    contents.Finalized = __expectBoolean(data.Finalized);
  }
  if (data.Id !== undefined && data.Id !== null) {
    contents.Id = __expectString(data.Id);
  }
  if (data.SourceId !== undefined && data.SourceId !== null) {
    contents.SourceId = __expectString(data.SourceId);
  }
  if (data.Tags !== undefined && data.Tags !== null) {
    contents.Tags = deserializeAws_restJson1MapOf__string(data.Tags, context);
  }
  if (data.UpdatedAt !== undefined && data.UpdatedAt !== null) {
    contents.UpdatedAt = new Date(data.UpdatedAt);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetRevisionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRevisionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.dataexchange#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dataexchange#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.dataexchange#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.dataexchange#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListDataSetRevisionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDataSetRevisionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListDataSetRevisionsCommandError(output, context);
  }
  const contents: ListDataSetRevisionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    Revisions: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Revisions !== undefined && data.Revisions !== null) {
    contents.Revisions = deserializeAws_restJson1ListOfRevisionEntry(data.Revisions, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListDataSetRevisionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDataSetRevisionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.dataexchange#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dataexchange#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.dataexchange#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.dataexchange#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    DataSets: undefined,
    NextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DataSets !== undefined && data.DataSets !== null) {
    contents.DataSets = deserializeAws_restJson1ListOfDataSetEntry(data.DataSets, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.dataexchange#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dataexchange#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.dataexchange#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.dataexchange#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListJobsCommandError(output, context);
  }
  const contents: ListJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    Jobs: undefined,
    NextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Jobs !== undefined && data.Jobs !== null) {
    contents.Jobs = deserializeAws_restJson1ListOfJobEntry(data.Jobs, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.dataexchange#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dataexchange#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.dataexchange#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.dataexchange#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListRevisionAssetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRevisionAssetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListRevisionAssetsCommandError(output, context);
  }
  const contents: ListRevisionAssetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    Assets: undefined,
    NextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Assets !== undefined && data.Assets !== null) {
    contents.Assets = deserializeAws_restJson1ListOfAssetEntry(data.Assets, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListRevisionAssetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRevisionAssetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.dataexchange#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dataexchange#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.dataexchange#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.dataexchange#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    Tags: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1MapOf__string(data.tags, context);
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1StartJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartJobCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartJobCommandError(output, context);
  }
  const contents: StartJobCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1StartJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.dataexchange#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.dataexchange#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.dataexchange#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dataexchange#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.dataexchange#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.dataexchange#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateAssetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAssetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateAssetCommandError(output, context);
  }
  const contents: UpdateAssetCommandOutput = {
    $metadata: deserializeMetadata(output),
    Arn: undefined,
    AssetDetails: undefined,
    AssetType: undefined,
    CreatedAt: undefined,
    DataSetId: undefined,
    Id: undefined,
    Name: undefined,
    RevisionId: undefined,
    SourceId: undefined,
    UpdatedAt: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn !== undefined && data.Arn !== null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.AssetDetails !== undefined && data.AssetDetails !== null) {
    contents.AssetDetails = deserializeAws_restJson1AssetDetails(data.AssetDetails, context);
  }
  if (data.AssetType !== undefined && data.AssetType !== null) {
    contents.AssetType = __expectString(data.AssetType);
  }
  if (data.CreatedAt !== undefined && data.CreatedAt !== null) {
    contents.CreatedAt = new Date(data.CreatedAt);
  }
  if (data.DataSetId !== undefined && data.DataSetId !== null) {
    contents.DataSetId = __expectString(data.DataSetId);
  }
  if (data.Id !== undefined && data.Id !== null) {
    contents.Id = __expectString(data.Id);
  }
  if (data.Name !== undefined && data.Name !== null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.RevisionId !== undefined && data.RevisionId !== null) {
    contents.RevisionId = __expectString(data.RevisionId);
  }
  if (data.SourceId !== undefined && data.SourceId !== null) {
    contents.SourceId = __expectString(data.SourceId);
  }
  if (data.UpdatedAt !== undefined && data.UpdatedAt !== null) {
    contents.UpdatedAt = new Date(data.UpdatedAt);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateAssetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAssetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.dataexchange#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.dataexchange#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.dataexchange#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dataexchange#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.dataexchange#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.dataexchange#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateDataSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDataSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateDataSetCommandError(output, context);
  }
  const contents: UpdateDataSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    Arn: undefined,
    AssetType: undefined,
    CreatedAt: undefined,
    Description: undefined,
    Id: undefined,
    Name: undefined,
    Origin: undefined,
    OriginDetails: undefined,
    SourceId: undefined,
    UpdatedAt: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn !== undefined && data.Arn !== null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.AssetType !== undefined && data.AssetType !== null) {
    contents.AssetType = __expectString(data.AssetType);
  }
  if (data.CreatedAt !== undefined && data.CreatedAt !== null) {
    contents.CreatedAt = new Date(data.CreatedAt);
  }
  if (data.Description !== undefined && data.Description !== null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.Id !== undefined && data.Id !== null) {
    contents.Id = __expectString(data.Id);
  }
  if (data.Name !== undefined && data.Name !== null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.Origin !== undefined && data.Origin !== null) {
    contents.Origin = __expectString(data.Origin);
  }
  if (data.OriginDetails !== undefined && data.OriginDetails !== null) {
    contents.OriginDetails = deserializeAws_restJson1OriginDetails(data.OriginDetails, context);
  }
  if (data.SourceId !== undefined && data.SourceId !== null) {
    contents.SourceId = __expectString(data.SourceId);
  }
  if (data.UpdatedAt !== undefined && data.UpdatedAt !== null) {
    contents.UpdatedAt = new Date(data.UpdatedAt);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateDataSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDataSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.dataexchange#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.dataexchange#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dataexchange#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.dataexchange#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.dataexchange#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateRevisionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRevisionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateRevisionCommandError(output, context);
  }
  const contents: UpdateRevisionCommandOutput = {
    $metadata: deserializeMetadata(output),
    Arn: undefined,
    Comment: undefined,
    CreatedAt: undefined,
    DataSetId: undefined,
    Finalized: undefined,
    Id: undefined,
    SourceId: undefined,
    UpdatedAt: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn !== undefined && data.Arn !== null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.Comment !== undefined && data.Comment !== null) {
    contents.Comment = __expectString(data.Comment);
  }
  if (data.CreatedAt !== undefined && data.CreatedAt !== null) {
    contents.CreatedAt = new Date(data.CreatedAt);
  }
  if (data.DataSetId !== undefined && data.DataSetId !== null) {
    contents.DataSetId = __expectString(data.DataSetId);
  }
  if (data.Finalized !== undefined && data.Finalized !== null) {
    contents.Finalized = __expectBoolean(data.Finalized);
  }
  if (data.Id !== undefined && data.Id !== null) {
    contents.Id = __expectString(data.Id);
  }
  if (data.SourceId !== undefined && data.SourceId !== null) {
    contents.SourceId = __expectString(data.SourceId);
  }
  if (data.UpdatedAt !== undefined && data.UpdatedAt !== null) {
    contents.UpdatedAt = new Date(data.UpdatedAt);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateRevisionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRevisionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.dataexchange#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.dataexchange#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.dataexchange#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dataexchange#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.dataexchange#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.dataexchange#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

const deserializeAws_restJson1AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: AccessDeniedException = {
    name: "AccessDeniedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  return contents;
};

const deserializeAws_restJson1ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
  const contents: ConflictException = {
    name: "ConflictException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
    ResourceId: undefined,
    ResourceType: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.ResourceId !== undefined && data.ResourceId !== null) {
    contents.ResourceId = __expectString(data.ResourceId);
  }
  if (data.ResourceType !== undefined && data.ResourceType !== null) {
    contents.ResourceType = __expectString(data.ResourceType);
  }
  return contents;
};

const deserializeAws_restJson1InternalServerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: InternalServerException = {
    name: "InternalServerException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  return contents;
};

const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
    ResourceId: undefined,
    ResourceType: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.ResourceId !== undefined && data.ResourceId !== null) {
    contents.ResourceId = __expectString(data.ResourceId);
  }
  if (data.ResourceType !== undefined && data.ResourceType !== null) {
    contents.ResourceType = __expectString(data.ResourceType);
  }
  return contents;
};

const deserializeAws_restJson1ServiceLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceLimitExceededException> => {
  const contents: ServiceLimitExceededException = {
    name: "ServiceLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    LimitName: undefined,
    LimitValue: undefined,
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.LimitName !== undefined && data.LimitName !== null) {
    contents.LimitName = __expectString(data.LimitName);
  }
  if (data.LimitValue !== undefined && data.LimitValue !== null) {
    contents.LimitValue = __limitedParseDouble(data.LimitValue);
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  return contents;
};

const deserializeAws_restJson1ThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const contents: ThrottlingException = {
    name: "ThrottlingException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  return contents;
};

const deserializeAws_restJson1ValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const contents: ValidationException = {
    name: "ValidationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  return contents;
};

const serializeAws_restJson1AssetDestinationEntry = (input: AssetDestinationEntry, context: __SerdeContext): any => {
  return {
    ...(input.AssetId !== undefined && input.AssetId !== null && { AssetId: input.AssetId }),
    ...(input.Bucket !== undefined && input.Bucket !== null && { Bucket: input.Bucket }),
    ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
  };
};

const serializeAws_restJson1AssetSourceEntry = (input: AssetSourceEntry, context: __SerdeContext): any => {
  return {
    ...(input.Bucket !== undefined && input.Bucket !== null && { Bucket: input.Bucket }),
    ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
  };
};

const serializeAws_restJson1ExportAssetsToS3RequestDetails = (
  input: ExportAssetsToS3RequestDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.AssetDestinations !== undefined &&
      input.AssetDestinations !== null && {
        AssetDestinations: serializeAws_restJson1ListOfAssetDestinationEntry(input.AssetDestinations, context),
      }),
    ...(input.DataSetId !== undefined && input.DataSetId !== null && { DataSetId: input.DataSetId }),
    ...(input.Encryption !== undefined &&
      input.Encryption !== null && {
        Encryption: serializeAws_restJson1ExportServerSideEncryption(input.Encryption, context),
      }),
    ...(input.RevisionId !== undefined && input.RevisionId !== null && { RevisionId: input.RevisionId }),
  };
};

const serializeAws_restJson1ExportAssetToSignedUrlRequestDetails = (
  input: ExportAssetToSignedUrlRequestDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.AssetId !== undefined && input.AssetId !== null && { AssetId: input.AssetId }),
    ...(input.DataSetId !== undefined && input.DataSetId !== null && { DataSetId: input.DataSetId }),
    ...(input.RevisionId !== undefined && input.RevisionId !== null && { RevisionId: input.RevisionId }),
  };
};

const serializeAws_restJson1ExportRevisionsToS3RequestDetails = (
  input: ExportRevisionsToS3RequestDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.DataSetId !== undefined && input.DataSetId !== null && { DataSetId: input.DataSetId }),
    ...(input.Encryption !== undefined &&
      input.Encryption !== null && {
        Encryption: serializeAws_restJson1ExportServerSideEncryption(input.Encryption, context),
      }),
    ...(input.RevisionDestinations !== undefined &&
      input.RevisionDestinations !== null && {
        RevisionDestinations: serializeAws_restJson1ListOfRevisionDestinationEntry(input.RevisionDestinations, context),
      }),
  };
};

const serializeAws_restJson1ExportServerSideEncryption = (
  input: ExportServerSideEncryption,
  context: __SerdeContext
): any => {
  return {
    ...(input.KmsKeyArn !== undefined && input.KmsKeyArn !== null && { KmsKeyArn: input.KmsKeyArn }),
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
  };
};

const serializeAws_restJson1ImportAssetFromSignedUrlRequestDetails = (
  input: ImportAssetFromSignedUrlRequestDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.AssetName !== undefined && input.AssetName !== null && { AssetName: input.AssetName }),
    ...(input.DataSetId !== undefined && input.DataSetId !== null && { DataSetId: input.DataSetId }),
    ...(input.Md5Hash !== undefined && input.Md5Hash !== null && { Md5Hash: input.Md5Hash }),
    ...(input.RevisionId !== undefined && input.RevisionId !== null && { RevisionId: input.RevisionId }),
  };
};

const serializeAws_restJson1ImportAssetsFromS3RequestDetails = (
  input: ImportAssetsFromS3RequestDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.AssetSources !== undefined &&
      input.AssetSources !== null && {
        AssetSources: serializeAws_restJson1ListOfAssetSourceEntry(input.AssetSources, context),
      }),
    ...(input.DataSetId !== undefined && input.DataSetId !== null && { DataSetId: input.DataSetId }),
    ...(input.RevisionId !== undefined && input.RevisionId !== null && { RevisionId: input.RevisionId }),
  };
};

const serializeAws_restJson1ListOfAssetDestinationEntry = (
  input: AssetDestinationEntry[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AssetDestinationEntry(entry, context);
    });
};

const serializeAws_restJson1ListOfAssetSourceEntry = (input: AssetSourceEntry[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AssetSourceEntry(entry, context);
    });
};

const serializeAws_restJson1ListOfRevisionDestinationEntry = (
  input: RevisionDestinationEntry[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1RevisionDestinationEntry(entry, context);
    });
};

const serializeAws_restJson1MapOf__string = (input: { [key: string]: string }, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: { [key: string]: any }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_restJson1RequestDetails = (input: RequestDetails, context: __SerdeContext): any => {
  return {
    ...(input.ExportAssetToSignedUrl !== undefined &&
      input.ExportAssetToSignedUrl !== null && {
        ExportAssetToSignedUrl: serializeAws_restJson1ExportAssetToSignedUrlRequestDetails(
          input.ExportAssetToSignedUrl,
          context
        ),
      }),
    ...(input.ExportAssetsToS3 !== undefined &&
      input.ExportAssetsToS3 !== null && {
        ExportAssetsToS3: serializeAws_restJson1ExportAssetsToS3RequestDetails(input.ExportAssetsToS3, context),
      }),
    ...(input.ExportRevisionsToS3 !== undefined &&
      input.ExportRevisionsToS3 !== null && {
        ExportRevisionsToS3: serializeAws_restJson1ExportRevisionsToS3RequestDetails(
          input.ExportRevisionsToS3,
          context
        ),
      }),
    ...(input.ImportAssetFromSignedUrl !== undefined &&
      input.ImportAssetFromSignedUrl !== null && {
        ImportAssetFromSignedUrl: serializeAws_restJson1ImportAssetFromSignedUrlRequestDetails(
          input.ImportAssetFromSignedUrl,
          context
        ),
      }),
    ...(input.ImportAssetsFromS3 !== undefined &&
      input.ImportAssetsFromS3 !== null && {
        ImportAssetsFromS3: serializeAws_restJson1ImportAssetsFromS3RequestDetails(input.ImportAssetsFromS3, context),
      }),
  };
};

const serializeAws_restJson1RevisionDestinationEntry = (
  input: RevisionDestinationEntry,
  context: __SerdeContext
): any => {
  return {
    ...(input.Bucket !== undefined && input.Bucket !== null && { Bucket: input.Bucket }),
    ...(input.KeyPattern !== undefined && input.KeyPattern !== null && { KeyPattern: input.KeyPattern }),
    ...(input.RevisionId !== undefined && input.RevisionId !== null && { RevisionId: input.RevisionId }),
  };
};

const deserializeAws_restJson1AssetDestinationEntry = (output: any, context: __SerdeContext): AssetDestinationEntry => {
  return {
    AssetId: __expectString(output.AssetId),
    Bucket: __expectString(output.Bucket),
    Key: __expectString(output.Key),
  } as any;
};

const deserializeAws_restJson1AssetDetails = (output: any, context: __SerdeContext): AssetDetails => {
  return {
    S3SnapshotAsset:
      output.S3SnapshotAsset !== undefined && output.S3SnapshotAsset !== null
        ? deserializeAws_restJson1S3SnapshotAsset(output.S3SnapshotAsset, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AssetEntry = (output: any, context: __SerdeContext): AssetEntry => {
  return {
    Arn: __expectString(output.Arn),
    AssetDetails:
      output.AssetDetails !== undefined && output.AssetDetails !== null
        ? deserializeAws_restJson1AssetDetails(output.AssetDetails, context)
        : undefined,
    AssetType: __expectString(output.AssetType),
    CreatedAt: output.CreatedAt !== undefined && output.CreatedAt !== null ? new Date(output.CreatedAt) : undefined,
    DataSetId: __expectString(output.DataSetId),
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
    RevisionId: __expectString(output.RevisionId),
    SourceId: __expectString(output.SourceId),
    UpdatedAt: output.UpdatedAt !== undefined && output.UpdatedAt !== null ? new Date(output.UpdatedAt) : undefined,
  } as any;
};

const deserializeAws_restJson1AssetSourceEntry = (output: any, context: __SerdeContext): AssetSourceEntry => {
  return {
    Bucket: __expectString(output.Bucket),
    Key: __expectString(output.Key),
  } as any;
};

const deserializeAws_restJson1DataSetEntry = (output: any, context: __SerdeContext): DataSetEntry => {
  return {
    Arn: __expectString(output.Arn),
    AssetType: __expectString(output.AssetType),
    CreatedAt: output.CreatedAt !== undefined && output.CreatedAt !== null ? new Date(output.CreatedAt) : undefined,
    Description: __expectString(output.Description),
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
    Origin: __expectString(output.Origin),
    OriginDetails:
      output.OriginDetails !== undefined && output.OriginDetails !== null
        ? deserializeAws_restJson1OriginDetails(output.OriginDetails, context)
        : undefined,
    SourceId: __expectString(output.SourceId),
    UpdatedAt: output.UpdatedAt !== undefined && output.UpdatedAt !== null ? new Date(output.UpdatedAt) : undefined,
  } as any;
};

const deserializeAws_restJson1Details = (output: any, context: __SerdeContext): Details => {
  return {
    ImportAssetFromSignedUrlJobErrorDetails:
      output.ImportAssetFromSignedUrlJobErrorDetails !== undefined &&
      output.ImportAssetFromSignedUrlJobErrorDetails !== null
        ? deserializeAws_restJson1ImportAssetFromSignedUrlJobErrorDetails(
            output.ImportAssetFromSignedUrlJobErrorDetails,
            context
          )
        : undefined,
    ImportAssetsFromS3JobErrorDetails:
      output.ImportAssetsFromS3JobErrorDetails !== undefined && output.ImportAssetsFromS3JobErrorDetails !== null
        ? deserializeAws_restJson1ListOfAssetSourceEntry(output.ImportAssetsFromS3JobErrorDetails, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ExportAssetsToS3ResponseDetails = (
  output: any,
  context: __SerdeContext
): ExportAssetsToS3ResponseDetails => {
  return {
    AssetDestinations:
      output.AssetDestinations !== undefined && output.AssetDestinations !== null
        ? deserializeAws_restJson1ListOfAssetDestinationEntry(output.AssetDestinations, context)
        : undefined,
    DataSetId: __expectString(output.DataSetId),
    Encryption:
      output.Encryption !== undefined && output.Encryption !== null
        ? deserializeAws_restJson1ExportServerSideEncryption(output.Encryption, context)
        : undefined,
    RevisionId: __expectString(output.RevisionId),
  } as any;
};

const deserializeAws_restJson1ExportAssetToSignedUrlResponseDetails = (
  output: any,
  context: __SerdeContext
): ExportAssetToSignedUrlResponseDetails => {
  return {
    AssetId: __expectString(output.AssetId),
    DataSetId: __expectString(output.DataSetId),
    RevisionId: __expectString(output.RevisionId),
    SignedUrl: __expectString(output.SignedUrl),
    SignedUrlExpiresAt:
      output.SignedUrlExpiresAt !== undefined && output.SignedUrlExpiresAt !== null
        ? new Date(output.SignedUrlExpiresAt)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ExportRevisionsToS3ResponseDetails = (
  output: any,
  context: __SerdeContext
): ExportRevisionsToS3ResponseDetails => {
  return {
    DataSetId: __expectString(output.DataSetId),
    Encryption:
      output.Encryption !== undefined && output.Encryption !== null
        ? deserializeAws_restJson1ExportServerSideEncryption(output.Encryption, context)
        : undefined,
    RevisionDestinations:
      output.RevisionDestinations !== undefined && output.RevisionDestinations !== null
        ? deserializeAws_restJson1ListOfRevisionDestinationEntry(output.RevisionDestinations, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ExportServerSideEncryption = (
  output: any,
  context: __SerdeContext
): ExportServerSideEncryption => {
  return {
    KmsKeyArn: __expectString(output.KmsKeyArn),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1ImportAssetFromSignedUrlJobErrorDetails = (
  output: any,
  context: __SerdeContext
): ImportAssetFromSignedUrlJobErrorDetails => {
  return {
    AssetName: __expectString(output.AssetName),
  } as any;
};

const deserializeAws_restJson1ImportAssetFromSignedUrlResponseDetails = (
  output: any,
  context: __SerdeContext
): ImportAssetFromSignedUrlResponseDetails => {
  return {
    AssetName: __expectString(output.AssetName),
    DataSetId: __expectString(output.DataSetId),
    Md5Hash: __expectString(output.Md5Hash),
    RevisionId: __expectString(output.RevisionId),
    SignedUrl: __expectString(output.SignedUrl),
    SignedUrlExpiresAt:
      output.SignedUrlExpiresAt !== undefined && output.SignedUrlExpiresAt !== null
        ? new Date(output.SignedUrlExpiresAt)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ImportAssetsFromS3ResponseDetails = (
  output: any,
  context: __SerdeContext
): ImportAssetsFromS3ResponseDetails => {
  return {
    AssetSources:
      output.AssetSources !== undefined && output.AssetSources !== null
        ? deserializeAws_restJson1ListOfAssetSourceEntry(output.AssetSources, context)
        : undefined,
    DataSetId: __expectString(output.DataSetId),
    RevisionId: __expectString(output.RevisionId),
  } as any;
};

const deserializeAws_restJson1JobEntry = (output: any, context: __SerdeContext): JobEntry => {
  return {
    Arn: __expectString(output.Arn),
    CreatedAt: output.CreatedAt !== undefined && output.CreatedAt !== null ? new Date(output.CreatedAt) : undefined,
    Details:
      output.Details !== undefined && output.Details !== null
        ? deserializeAws_restJson1ResponseDetails(output.Details, context)
        : undefined,
    Errors:
      output.Errors !== undefined && output.Errors !== null
        ? deserializeAws_restJson1ListOfJobError(output.Errors, context)
        : undefined,
    Id: __expectString(output.Id),
    State: __expectString(output.State),
    Type: __expectString(output.Type),
    UpdatedAt: output.UpdatedAt !== undefined && output.UpdatedAt !== null ? new Date(output.UpdatedAt) : undefined,
  } as any;
};

const deserializeAws_restJson1JobError = (output: any, context: __SerdeContext): JobError => {
  return {
    Code: __expectString(output.Code),
    Details:
      output.Details !== undefined && output.Details !== null
        ? deserializeAws_restJson1Details(output.Details, context)
        : undefined,
    LimitName: __expectString(output.LimitName),
    LimitValue: __limitedParseDouble(output.LimitValue),
    Message: __expectString(output.Message),
    ResourceId: __expectString(output.ResourceId),
    ResourceType: __expectString(output.ResourceType),
  } as any;
};

const deserializeAws_restJson1ListOfAssetDestinationEntry = (
  output: any,
  context: __SerdeContext
): AssetDestinationEntry[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AssetDestinationEntry(entry, context);
    });
};

const deserializeAws_restJson1ListOfAssetEntry = (output: any, context: __SerdeContext): AssetEntry[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AssetEntry(entry, context);
    });
};

const deserializeAws_restJson1ListOfAssetSourceEntry = (output: any, context: __SerdeContext): AssetSourceEntry[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AssetSourceEntry(entry, context);
    });
};

const deserializeAws_restJson1ListOfDataSetEntry = (output: any, context: __SerdeContext): DataSetEntry[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DataSetEntry(entry, context);
    });
};

const deserializeAws_restJson1ListOfJobEntry = (output: any, context: __SerdeContext): JobEntry[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1JobEntry(entry, context);
    });
};

const deserializeAws_restJson1ListOfJobError = (output: any, context: __SerdeContext): JobError[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1JobError(entry, context);
    });
};

const deserializeAws_restJson1ListOfRevisionDestinationEntry = (
  output: any,
  context: __SerdeContext
): RevisionDestinationEntry[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1RevisionDestinationEntry(entry, context);
    });
};

const deserializeAws_restJson1ListOfRevisionEntry = (output: any, context: __SerdeContext): RevisionEntry[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1RevisionEntry(entry, context);
    });
};

const deserializeAws_restJson1MapOf__string = (output: any, context: __SerdeContext): { [key: string]: string } => {
  return Object.entries(output).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectString(value) as any,
    };
  }, {});
};

const deserializeAws_restJson1OriginDetails = (output: any, context: __SerdeContext): OriginDetails => {
  return {
    ProductId: __expectString(output.ProductId),
  } as any;
};

const deserializeAws_restJson1ResponseDetails = (output: any, context: __SerdeContext): ResponseDetails => {
  return {
    ExportAssetToSignedUrl:
      output.ExportAssetToSignedUrl !== undefined && output.ExportAssetToSignedUrl !== null
        ? deserializeAws_restJson1ExportAssetToSignedUrlResponseDetails(output.ExportAssetToSignedUrl, context)
        : undefined,
    ExportAssetsToS3:
      output.ExportAssetsToS3 !== undefined && output.ExportAssetsToS3 !== null
        ? deserializeAws_restJson1ExportAssetsToS3ResponseDetails(output.ExportAssetsToS3, context)
        : undefined,
    ExportRevisionsToS3:
      output.ExportRevisionsToS3 !== undefined && output.ExportRevisionsToS3 !== null
        ? deserializeAws_restJson1ExportRevisionsToS3ResponseDetails(output.ExportRevisionsToS3, context)
        : undefined,
    ImportAssetFromSignedUrl:
      output.ImportAssetFromSignedUrl !== undefined && output.ImportAssetFromSignedUrl !== null
        ? deserializeAws_restJson1ImportAssetFromSignedUrlResponseDetails(output.ImportAssetFromSignedUrl, context)
        : undefined,
    ImportAssetsFromS3:
      output.ImportAssetsFromS3 !== undefined && output.ImportAssetsFromS3 !== null
        ? deserializeAws_restJson1ImportAssetsFromS3ResponseDetails(output.ImportAssetsFromS3, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1RevisionDestinationEntry = (
  output: any,
  context: __SerdeContext
): RevisionDestinationEntry => {
  return {
    Bucket: __expectString(output.Bucket),
    KeyPattern: __expectString(output.KeyPattern),
    RevisionId: __expectString(output.RevisionId),
  } as any;
};

const deserializeAws_restJson1RevisionEntry = (output: any, context: __SerdeContext): RevisionEntry => {
  return {
    Arn: __expectString(output.Arn),
    Comment: __expectString(output.Comment),
    CreatedAt: output.CreatedAt !== undefined && output.CreatedAt !== null ? new Date(output.CreatedAt) : undefined,
    DataSetId: __expectString(output.DataSetId),
    Finalized: __expectBoolean(output.Finalized),
    Id: __expectString(output.Id),
    SourceId: __expectString(output.SourceId),
    UpdatedAt: output.UpdatedAt !== undefined && output.UpdatedAt !== null ? new Date(output.UpdatedAt) : undefined,
  } as any;
};

const deserializeAws_restJson1S3SnapshotAsset = (output: any, context: __SerdeContext): S3SnapshotAsset => {
  return {
    Size: __limitedParseDouble(output.Size),
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
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string => {
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

  return "";
};
