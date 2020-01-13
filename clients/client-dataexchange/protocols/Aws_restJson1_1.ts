import {
  CancelJobCommandInput,
  CancelJobCommandOutput
} from "../commands/CancelJobCommand";
import {
  CreateDataSetCommandInput,
  CreateDataSetCommandOutput
} from "../commands/CreateDataSetCommand";
import {
  CreateJobCommandInput,
  CreateJobCommandOutput
} from "../commands/CreateJobCommand";
import {
  CreateRevisionCommandInput,
  CreateRevisionCommandOutput
} from "../commands/CreateRevisionCommand";
import {
  DeleteAssetCommandInput,
  DeleteAssetCommandOutput
} from "../commands/DeleteAssetCommand";
import {
  DeleteDataSetCommandInput,
  DeleteDataSetCommandOutput
} from "../commands/DeleteDataSetCommand";
import {
  DeleteRevisionCommandInput,
  DeleteRevisionCommandOutput
} from "../commands/DeleteRevisionCommand";
import {
  GetAssetCommandInput,
  GetAssetCommandOutput
} from "../commands/GetAssetCommand";
import {
  GetDataSetCommandInput,
  GetDataSetCommandOutput
} from "../commands/GetDataSetCommand";
import {
  GetJobCommandInput,
  GetJobCommandOutput
} from "../commands/GetJobCommand";
import {
  GetRevisionCommandInput,
  GetRevisionCommandOutput
} from "../commands/GetRevisionCommand";
import {
  ListDataSetRevisionsCommandInput,
  ListDataSetRevisionsCommandOutput
} from "../commands/ListDataSetRevisionsCommand";
import {
  ListDataSetsCommandInput,
  ListDataSetsCommandOutput
} from "../commands/ListDataSetsCommand";
import {
  ListJobsCommandInput,
  ListJobsCommandOutput
} from "../commands/ListJobsCommand";
import {
  ListRevisionAssetsCommandInput,
  ListRevisionAssetsCommandOutput
} from "../commands/ListRevisionAssetsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput
} from "../commands/ListTagsForResourceCommand";
import {
  StartJobCommandInput,
  StartJobCommandOutput
} from "../commands/StartJobCommand";
import {
  TagResourceCommandInput,
  TagResourceCommandOutput
} from "../commands/TagResourceCommand";
import {
  UntagResourceCommandInput,
  UntagResourceCommandOutput
} from "../commands/UntagResourceCommand";
import {
  UpdateAssetCommandInput,
  UpdateAssetCommandOutput
} from "../commands/UpdateAssetCommand";
import {
  UpdateDataSetCommandInput,
  UpdateDataSetCommandOutput
} from "../commands/UpdateDataSetCommand";
import {
  UpdateRevisionCommandInput,
  UpdateRevisionCommandOutput
} from "../commands/UpdateRevisionCommand";
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
  RevisionEntry,
  S3SnapshotAsset,
  ServiceLimitExceededException,
  ThrottlingException,
  ValidationException
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

export async function serializeAws_restJson1_1CancelJobCommand(
  input: CancelJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/v1/jobs/{JobId}";
  if (input.JobId !== undefined) {
    const labelValue: any = input.JobId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: JobId.");
    }
    resolvedPath = resolvedPath.replace("{JobId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: JobId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1CreateDataSetCommand(
  input: CreateDataSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/v1/data-sets";
  let body: any = {};
  const bodyParams: any = {};
  if (input.AssetType !== undefined) {
    bodyParams["AssetType"] = input.AssetType;
  }
  if (input.Description !== undefined) {
    bodyParams["Description"] = input.Description;
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_restJson1_1MapOf__string(
      input.Tags,
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

export async function serializeAws_restJson1_1CreateJobCommand(
  input: CreateJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/v1/jobs";
  let body: any = {};
  const bodyParams: any = {};
  if (input.Details !== undefined) {
    bodyParams["Details"] = serializeAws_restJson1_1RequestDetails(
      input.Details,
      context
    );
  }
  if (input.Type !== undefined) {
    bodyParams["Type"] = input.Type;
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

export async function serializeAws_restJson1_1CreateRevisionCommand(
  input: CreateRevisionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/v1/data-sets/{DataSetId}/revisions";
  if (input.DataSetId !== undefined) {
    const labelValue: any = input.DataSetId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DataSetId.");
    }
    resolvedPath = resolvedPath.replace("{DataSetId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: DataSetId.");
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.Comment !== undefined) {
    bodyParams["Comment"] = input.Comment;
  }
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_restJson1_1MapOf__string(
      input.Tags,
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

export async function serializeAws_restJson1_1DeleteAssetCommand(
  input: DeleteAssetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath =
    "/v1/data-sets/{DataSetId}/revisions/{RevisionId}/assets/{AssetId}";
  if (input.AssetId !== undefined) {
    const labelValue: any = input.AssetId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AssetId.");
    }
    resolvedPath = resolvedPath.replace("{AssetId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: AssetId.");
  }
  if (input.DataSetId !== undefined) {
    const labelValue: any = input.DataSetId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DataSetId.");
    }
    resolvedPath = resolvedPath.replace("{DataSetId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: DataSetId.");
  }
  if (input.RevisionId !== undefined) {
    const labelValue: any = input.RevisionId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: RevisionId.");
    }
    resolvedPath = resolvedPath.replace("{RevisionId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: RevisionId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DeleteDataSetCommand(
  input: DeleteDataSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/v1/data-sets/{DataSetId}";
  if (input.DataSetId !== undefined) {
    const labelValue: any = input.DataSetId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DataSetId.");
    }
    resolvedPath = resolvedPath.replace("{DataSetId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: DataSetId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DeleteRevisionCommand(
  input: DeleteRevisionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/v1/data-sets/{DataSetId}/revisions/{RevisionId}";
  if (input.DataSetId !== undefined) {
    const labelValue: any = input.DataSetId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DataSetId.");
    }
    resolvedPath = resolvedPath.replace("{DataSetId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: DataSetId.");
  }
  if (input.RevisionId !== undefined) {
    const labelValue: any = input.RevisionId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: RevisionId.");
    }
    resolvedPath = resolvedPath.replace("{RevisionId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: RevisionId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1GetAssetCommand(
  input: GetAssetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath =
    "/v1/data-sets/{DataSetId}/revisions/{RevisionId}/assets/{AssetId}";
  if (input.AssetId !== undefined) {
    const labelValue: any = input.AssetId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AssetId.");
    }
    resolvedPath = resolvedPath.replace("{AssetId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: AssetId.");
  }
  if (input.DataSetId !== undefined) {
    const labelValue: any = input.DataSetId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DataSetId.");
    }
    resolvedPath = resolvedPath.replace("{DataSetId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: DataSetId.");
  }
  if (input.RevisionId !== undefined) {
    const labelValue: any = input.RevisionId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: RevisionId.");
    }
    resolvedPath = resolvedPath.replace("{RevisionId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: RevisionId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1GetDataSetCommand(
  input: GetDataSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/v1/data-sets/{DataSetId}";
  if (input.DataSetId !== undefined) {
    const labelValue: any = input.DataSetId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DataSetId.");
    }
    resolvedPath = resolvedPath.replace("{DataSetId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: DataSetId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1GetJobCommand(
  input: GetJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/v1/jobs/{JobId}";
  if (input.JobId !== undefined) {
    const labelValue: any = input.JobId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: JobId.");
    }
    resolvedPath = resolvedPath.replace("{JobId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: JobId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1GetRevisionCommand(
  input: GetRevisionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/v1/data-sets/{DataSetId}/revisions/{RevisionId}";
  if (input.DataSetId !== undefined) {
    const labelValue: any = input.DataSetId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DataSetId.");
    }
    resolvedPath = resolvedPath.replace("{DataSetId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: DataSetId.");
  }
  if (input.RevisionId !== undefined) {
    const labelValue: any = input.RevisionId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: RevisionId.");
    }
    resolvedPath = resolvedPath.replace("{RevisionId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: RevisionId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1ListDataSetRevisionsCommand(
  input: ListDataSetRevisionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/v1/data-sets/{DataSetId}/revisions";
  if (input.DataSetId !== undefined) {
    const labelValue: any = input.DataSetId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DataSetId.");
    }
    resolvedPath = resolvedPath.replace("{DataSetId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: DataSetId.");
  }
  const query: any = {};
  if (input.MaxResults !== undefined) {
    query["maxResults"] = input.MaxResults.toString();
  }
  if (input.NextToken !== undefined) {
    query["nextToken"] = input.NextToken.toString();
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

export async function serializeAws_restJson1_1ListDataSetsCommand(
  input: ListDataSetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/v1/data-sets";
  const query: any = {};
  if (input.MaxResults !== undefined) {
    query["maxResults"] = input.MaxResults.toString();
  }
  if (input.NextToken !== undefined) {
    query["nextToken"] = input.NextToken.toString();
  }
  if (input.Origin !== undefined) {
    query["origin"] = input.Origin.toString();
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

export async function serializeAws_restJson1_1ListJobsCommand(
  input: ListJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/v1/jobs";
  const query: any = {};
  if (input.DataSetId !== undefined) {
    query["dataSetId"] = input.DataSetId.toString();
  }
  if (input.MaxResults !== undefined) {
    query["maxResults"] = input.MaxResults.toString();
  }
  if (input.NextToken !== undefined) {
    query["nextToken"] = input.NextToken.toString();
  }
  if (input.RevisionId !== undefined) {
    query["revisionId"] = input.RevisionId.toString();
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

export async function serializeAws_restJson1_1ListRevisionAssetsCommand(
  input: ListRevisionAssetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/v1/data-sets/{DataSetId}/revisions/{RevisionId}/assets";
  if (input.DataSetId !== undefined) {
    const labelValue: any = input.DataSetId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DataSetId.");
    }
    resolvedPath = resolvedPath.replace("{DataSetId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: DataSetId.");
  }
  if (input.RevisionId !== undefined) {
    const labelValue: any = input.RevisionId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: RevisionId.");
    }
    resolvedPath = resolvedPath.replace("{RevisionId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: RevisionId.");
  }
  const query: any = {};
  if (input.MaxResults !== undefined) {
    query["maxResults"] = input.MaxResults.toString();
  }
  if (input.NextToken !== undefined) {
    query["nextToken"] = input.NextToken.toString();
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
  let resolvedPath = "/tags/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue: any = input.ResourceArn.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ResourceArn."
      );
    }
    resolvedPath = resolvedPath.replace("{ResourceArn}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1StartJobCommand(
  input: StartJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/v1/jobs/{JobId}";
  if (input.JobId !== undefined) {
    const labelValue: any = input.JobId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: JobId.");
    }
    resolvedPath = resolvedPath.replace("{JobId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: JobId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PATCH",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1TagResourceCommand(
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/tags/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue: any = input.ResourceArn.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ResourceArn."
      );
    }
    resolvedPath = resolvedPath.replace("{ResourceArn}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.Tags !== undefined) {
    bodyParams["tags"] = serializeAws_restJson1_1MapOf__string(
      input.Tags,
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

export async function serializeAws_restJson1_1UntagResourceCommand(
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/tags/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue: any = input.ResourceArn.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ResourceArn."
      );
    }
    resolvedPath = resolvedPath.replace("{ResourceArn}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
  const query: any = {};
  if (input.TagKeys !== undefined) {
    query["tagKeys"] = input.TagKeys;
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

export async function serializeAws_restJson1_1UpdateAssetCommand(
  input: UpdateAssetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath =
    "/v1/data-sets/{DataSetId}/revisions/{RevisionId}/assets/{AssetId}";
  if (input.AssetId !== undefined) {
    const labelValue: any = input.AssetId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AssetId.");
    }
    resolvedPath = resolvedPath.replace("{AssetId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: AssetId.");
  }
  if (input.DataSetId !== undefined) {
    const labelValue: any = input.DataSetId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DataSetId.");
    }
    resolvedPath = resolvedPath.replace("{DataSetId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: DataSetId.");
  }
  if (input.RevisionId !== undefined) {
    const labelValue: any = input.RevisionId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: RevisionId.");
    }
    resolvedPath = resolvedPath.replace("{RevisionId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: RevisionId.");
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PATCH",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1UpdateDataSetCommand(
  input: UpdateDataSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/v1/data-sets/{DataSetId}";
  if (input.DataSetId !== undefined) {
    const labelValue: any = input.DataSetId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DataSetId.");
    }
    resolvedPath = resolvedPath.replace("{DataSetId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: DataSetId.");
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.Description !== undefined) {
    bodyParams["Description"] = input.Description;
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PATCH",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1UpdateRevisionCommand(
  input: UpdateRevisionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/v1/data-sets/{DataSetId}/revisions/{RevisionId}";
  if (input.DataSetId !== undefined) {
    const labelValue: any = input.DataSetId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DataSetId.");
    }
    resolvedPath = resolvedPath.replace("{DataSetId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: DataSetId.");
  }
  if (input.RevisionId !== undefined) {
    const labelValue: any = input.RevisionId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: RevisionId.");
    }
    resolvedPath = resolvedPath.replace("{RevisionId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: RevisionId.");
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.Comment !== undefined) {
    bodyParams["Comment"] = input.Comment;
  }
  if (input.Finalized !== undefined) {
    bodyParams["Finalized"] = input.Finalized;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PATCH",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function deserializeAws_restJson1_1CancelJobCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelJobCommandOutput> {
  if (output.statusCode !== 204) {
    return deserializeAws_restJson1_1CancelJobCommandError(output, context);
  }
  const contents: CancelJobCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CancelJobCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelJobCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.dataexchange#ConflictException":
      response = await deserializeAws_restJson1_1ConflictExceptionResponse(
        output,
        context
      );
      break;
    case "InternalServerException":
    case "com.amazonaws.dataexchange#InternalServerException":
      response = await deserializeAws_restJson1_1InternalServerExceptionResponse(
        output,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dataexchange#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazonaws.dataexchange#ThrottlingException":
      response = await deserializeAws_restJson1_1ThrottlingExceptionResponse(
        output,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.dataexchange#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.dataexchange#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1CreateDataSetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDataSetCommandOutput> {
  if (output.statusCode !== 201) {
    return deserializeAws_restJson1_1CreateDataSetCommandError(output, context);
  }
  const contents: CreateDataSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateDataSetResponse",
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
    UpdatedAt: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Arn !== undefined) {
    contents.Arn = data.Arn;
  }
  if (data.AssetType !== undefined) {
    contents.AssetType = data.AssetType;
  }
  if (data.CreatedAt !== undefined) {
    contents.CreatedAt = new Date(data.CreatedAt);
  }
  if (data.Description !== undefined) {
    contents.Description = data.Description;
  }
  if (data.Id !== undefined) {
    contents.Id = data.Id;
  }
  if (data.Name !== undefined) {
    contents.Name = data.Name;
  }
  if (data.Origin !== undefined) {
    contents.Origin = data.Origin;
  }
  if (data.OriginDetails !== undefined) {
    contents.OriginDetails = deserializeAws_restJson1_1OriginDetails(
      data.OriginDetails,
      context
    );
  }
  if (data.SourceId !== undefined) {
    contents.SourceId = data.SourceId;
  }
  if (data.Tags !== undefined) {
    contents.Tags = deserializeAws_restJson1_1MapOf__string(data.Tags, context);
  }
  if (data.UpdatedAt !== undefined) {
    contents.UpdatedAt = new Date(data.UpdatedAt);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateDataSetCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDataSetCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.dataexchange#AccessDeniedException":
      response = await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
        output,
        context
      );
      break;
    case "InternalServerException":
    case "com.amazonaws.dataexchange#InternalServerException":
      response = await deserializeAws_restJson1_1InternalServerExceptionResponse(
        output,
        context
      );
      break;
    case "ServiceLimitExceededException":
    case "com.amazonaws.dataexchange#ServiceLimitExceededException":
      response = await deserializeAws_restJson1_1ServiceLimitExceededExceptionResponse(
        output,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazonaws.dataexchange#ThrottlingException":
      response = await deserializeAws_restJson1_1ThrottlingExceptionResponse(
        output,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.dataexchange#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.dataexchange#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1CreateJobCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateJobCommandOutput> {
  if (output.statusCode !== 201) {
    return deserializeAws_restJson1_1CreateJobCommandError(output, context);
  }
  const contents: CreateJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateJobResponse",
    Arn: undefined,
    CreatedAt: undefined,
    Details: undefined,
    Errors: undefined,
    Id: undefined,
    State: undefined,
    Type: undefined,
    UpdatedAt: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Arn !== undefined) {
    contents.Arn = data.Arn;
  }
  if (data.CreatedAt !== undefined) {
    contents.CreatedAt = new Date(data.CreatedAt);
  }
  if (data.Details !== undefined) {
    contents.Details = deserializeAws_restJson1_1ResponseDetails(
      data.Details,
      context
    );
  }
  if (data.Errors !== undefined) {
    contents.Errors = deserializeAws_restJson1_1ListOfJobError(
      data.Errors,
      context
    );
  }
  if (data.Id !== undefined) {
    contents.Id = data.Id;
  }
  if (data.State !== undefined) {
    contents.State = data.State;
  }
  if (data.Type !== undefined) {
    contents.Type = data.Type;
  }
  if (data.UpdatedAt !== undefined) {
    contents.UpdatedAt = new Date(data.UpdatedAt);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateJobCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateJobCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.dataexchange#AccessDeniedException":
      response = await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
        output,
        context
      );
      break;
    case "InternalServerException":
    case "com.amazonaws.dataexchange#InternalServerException":
      response = await deserializeAws_restJson1_1InternalServerExceptionResponse(
        output,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dataexchange#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazonaws.dataexchange#ThrottlingException":
      response = await deserializeAws_restJson1_1ThrottlingExceptionResponse(
        output,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.dataexchange#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.dataexchange#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1CreateRevisionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRevisionCommandOutput> {
  if (output.statusCode !== 201) {
    return deserializeAws_restJson1_1CreateRevisionCommandError(
      output,
      context
    );
  }
  const contents: CreateRevisionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateRevisionResponse",
    Arn: undefined,
    Comment: undefined,
    CreatedAt: undefined,
    DataSetId: undefined,
    Finalized: undefined,
    Id: undefined,
    SourceId: undefined,
    Tags: undefined,
    UpdatedAt: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Arn !== undefined) {
    contents.Arn = data.Arn;
  }
  if (data.Comment !== undefined) {
    contents.Comment = data.Comment;
  }
  if (data.CreatedAt !== undefined) {
    contents.CreatedAt = new Date(data.CreatedAt);
  }
  if (data.DataSetId !== undefined) {
    contents.DataSetId = data.DataSetId;
  }
  if (data.Finalized !== undefined) {
    contents.Finalized = data.Finalized;
  }
  if (data.Id !== undefined) {
    contents.Id = data.Id;
  }
  if (data.SourceId !== undefined) {
    contents.SourceId = data.SourceId;
  }
  if (data.Tags !== undefined) {
    contents.Tags = deserializeAws_restJson1_1MapOf__string(data.Tags, context);
  }
  if (data.UpdatedAt !== undefined) {
    contents.UpdatedAt = new Date(data.UpdatedAt);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateRevisionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRevisionCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.dataexchange#AccessDeniedException":
      response = await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
        output,
        context
      );
      break;
    case "InternalServerException":
    case "com.amazonaws.dataexchange#InternalServerException":
      response = await deserializeAws_restJson1_1InternalServerExceptionResponse(
        output,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dataexchange#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazonaws.dataexchange#ThrottlingException":
      response = await deserializeAws_restJson1_1ThrottlingExceptionResponse(
        output,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.dataexchange#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.dataexchange#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1DeleteAssetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAssetCommandOutput> {
  if (output.statusCode !== 204) {
    return deserializeAws_restJson1_1DeleteAssetCommandError(output, context);
  }
  const contents: DeleteAssetCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteAssetCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAssetCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.dataexchange#AccessDeniedException":
      response = await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
        output,
        context
      );
      break;
    case "ConflictException":
    case "com.amazonaws.dataexchange#ConflictException":
      response = await deserializeAws_restJson1_1ConflictExceptionResponse(
        output,
        context
      );
      break;
    case "InternalServerException":
    case "com.amazonaws.dataexchange#InternalServerException":
      response = await deserializeAws_restJson1_1InternalServerExceptionResponse(
        output,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dataexchange#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazonaws.dataexchange#ThrottlingException":
      response = await deserializeAws_restJson1_1ThrottlingExceptionResponse(
        output,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.dataexchange#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.dataexchange#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1DeleteDataSetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDataSetCommandOutput> {
  if (output.statusCode !== 204) {
    return deserializeAws_restJson1_1DeleteDataSetCommandError(output, context);
  }
  const contents: DeleteDataSetCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteDataSetCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDataSetCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.dataexchange#AccessDeniedException":
      response = await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
        output,
        context
      );
      break;
    case "ConflictException":
    case "com.amazonaws.dataexchange#ConflictException":
      response = await deserializeAws_restJson1_1ConflictExceptionResponse(
        output,
        context
      );
      break;
    case "InternalServerException":
    case "com.amazonaws.dataexchange#InternalServerException":
      response = await deserializeAws_restJson1_1InternalServerExceptionResponse(
        output,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dataexchange#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazonaws.dataexchange#ThrottlingException":
      response = await deserializeAws_restJson1_1ThrottlingExceptionResponse(
        output,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.dataexchange#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.dataexchange#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1DeleteRevisionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRevisionCommandOutput> {
  if (output.statusCode !== 204) {
    return deserializeAws_restJson1_1DeleteRevisionCommandError(
      output,
      context
    );
  }
  const contents: DeleteRevisionCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteRevisionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRevisionCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.dataexchange#AccessDeniedException":
      response = await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
        output,
        context
      );
      break;
    case "ConflictException":
    case "com.amazonaws.dataexchange#ConflictException":
      response = await deserializeAws_restJson1_1ConflictExceptionResponse(
        output,
        context
      );
      break;
    case "InternalServerException":
    case "com.amazonaws.dataexchange#InternalServerException":
      response = await deserializeAws_restJson1_1InternalServerExceptionResponse(
        output,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dataexchange#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazonaws.dataexchange#ThrottlingException":
      response = await deserializeAws_restJson1_1ThrottlingExceptionResponse(
        output,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.dataexchange#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.dataexchange#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1GetAssetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAssetCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1GetAssetCommandError(output, context);
  }
  const contents: GetAssetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetAssetResponse",
    Arn: undefined,
    AssetDetails: undefined,
    AssetType: undefined,
    CreatedAt: undefined,
    DataSetId: undefined,
    Id: undefined,
    Name: undefined,
    RevisionId: undefined,
    SourceId: undefined,
    UpdatedAt: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Arn !== undefined) {
    contents.Arn = data.Arn;
  }
  if (data.AssetDetails !== undefined) {
    contents.AssetDetails = deserializeAws_restJson1_1AssetDetails(
      data.AssetDetails,
      context
    );
  }
  if (data.AssetType !== undefined) {
    contents.AssetType = data.AssetType;
  }
  if (data.CreatedAt !== undefined) {
    contents.CreatedAt = new Date(data.CreatedAt);
  }
  if (data.DataSetId !== undefined) {
    contents.DataSetId = data.DataSetId;
  }
  if (data.Id !== undefined) {
    contents.Id = data.Id;
  }
  if (data.Name !== undefined) {
    contents.Name = data.Name;
  }
  if (data.RevisionId !== undefined) {
    contents.RevisionId = data.RevisionId;
  }
  if (data.SourceId !== undefined) {
    contents.SourceId = data.SourceId;
  }
  if (data.UpdatedAt !== undefined) {
    contents.UpdatedAt = new Date(data.UpdatedAt);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetAssetCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAssetCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.dataexchange#InternalServerException":
      response = await deserializeAws_restJson1_1InternalServerExceptionResponse(
        output,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dataexchange#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazonaws.dataexchange#ThrottlingException":
      response = await deserializeAws_restJson1_1ThrottlingExceptionResponse(
        output,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.dataexchange#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.dataexchange#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1GetDataSetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataSetCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1GetDataSetCommandError(output, context);
  }
  const contents: GetDataSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetDataSetResponse",
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
    UpdatedAt: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Arn !== undefined) {
    contents.Arn = data.Arn;
  }
  if (data.AssetType !== undefined) {
    contents.AssetType = data.AssetType;
  }
  if (data.CreatedAt !== undefined) {
    contents.CreatedAt = new Date(data.CreatedAt);
  }
  if (data.Description !== undefined) {
    contents.Description = data.Description;
  }
  if (data.Id !== undefined) {
    contents.Id = data.Id;
  }
  if (data.Name !== undefined) {
    contents.Name = data.Name;
  }
  if (data.Origin !== undefined) {
    contents.Origin = data.Origin;
  }
  if (data.OriginDetails !== undefined) {
    contents.OriginDetails = deserializeAws_restJson1_1OriginDetails(
      data.OriginDetails,
      context
    );
  }
  if (data.SourceId !== undefined) {
    contents.SourceId = data.SourceId;
  }
  if (data.Tags !== undefined) {
    contents.Tags = deserializeAws_restJson1_1MapOf__string(data.Tags, context);
  }
  if (data.UpdatedAt !== undefined) {
    contents.UpdatedAt = new Date(data.UpdatedAt);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetDataSetCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataSetCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.dataexchange#InternalServerException":
      response = await deserializeAws_restJson1_1InternalServerExceptionResponse(
        output,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dataexchange#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazonaws.dataexchange#ThrottlingException":
      response = await deserializeAws_restJson1_1ThrottlingExceptionResponse(
        output,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.dataexchange#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.dataexchange#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1GetJobCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJobCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1GetJobCommandError(output, context);
  }
  const contents: GetJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetJobResponse",
    Arn: undefined,
    CreatedAt: undefined,
    Details: undefined,
    Errors: undefined,
    Id: undefined,
    State: undefined,
    Type: undefined,
    UpdatedAt: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Arn !== undefined) {
    contents.Arn = data.Arn;
  }
  if (data.CreatedAt !== undefined) {
    contents.CreatedAt = new Date(data.CreatedAt);
  }
  if (data.Details !== undefined) {
    contents.Details = deserializeAws_restJson1_1ResponseDetails(
      data.Details,
      context
    );
  }
  if (data.Errors !== undefined) {
    contents.Errors = deserializeAws_restJson1_1ListOfJobError(
      data.Errors,
      context
    );
  }
  if (data.Id !== undefined) {
    contents.Id = data.Id;
  }
  if (data.State !== undefined) {
    contents.State = data.State;
  }
  if (data.Type !== undefined) {
    contents.Type = data.Type;
  }
  if (data.UpdatedAt !== undefined) {
    contents.UpdatedAt = new Date(data.UpdatedAt);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetJobCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJobCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.dataexchange#InternalServerException":
      response = await deserializeAws_restJson1_1InternalServerExceptionResponse(
        output,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dataexchange#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazonaws.dataexchange#ThrottlingException":
      response = await deserializeAws_restJson1_1ThrottlingExceptionResponse(
        output,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.dataexchange#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.dataexchange#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1GetRevisionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRevisionCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1GetRevisionCommandError(output, context);
  }
  const contents: GetRevisionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetRevisionResponse",
    Arn: undefined,
    Comment: undefined,
    CreatedAt: undefined,
    DataSetId: undefined,
    Finalized: undefined,
    Id: undefined,
    SourceId: undefined,
    Tags: undefined,
    UpdatedAt: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Arn !== undefined) {
    contents.Arn = data.Arn;
  }
  if (data.Comment !== undefined) {
    contents.Comment = data.Comment;
  }
  if (data.CreatedAt !== undefined) {
    contents.CreatedAt = new Date(data.CreatedAt);
  }
  if (data.DataSetId !== undefined) {
    contents.DataSetId = data.DataSetId;
  }
  if (data.Finalized !== undefined) {
    contents.Finalized = data.Finalized;
  }
  if (data.Id !== undefined) {
    contents.Id = data.Id;
  }
  if (data.SourceId !== undefined) {
    contents.SourceId = data.SourceId;
  }
  if (data.Tags !== undefined) {
    contents.Tags = deserializeAws_restJson1_1MapOf__string(data.Tags, context);
  }
  if (data.UpdatedAt !== undefined) {
    contents.UpdatedAt = new Date(data.UpdatedAt);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetRevisionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRevisionCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.dataexchange#InternalServerException":
      response = await deserializeAws_restJson1_1InternalServerExceptionResponse(
        output,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dataexchange#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazonaws.dataexchange#ThrottlingException":
      response = await deserializeAws_restJson1_1ThrottlingExceptionResponse(
        output,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.dataexchange#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.dataexchange#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1ListDataSetRevisionsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDataSetRevisionsCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1ListDataSetRevisionsCommandError(
      output,
      context
    );
  }
  const contents: ListDataSetRevisionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListDataSetRevisionsResponse",
    NextToken: undefined,
    Revisions: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.NextToken !== undefined) {
    contents.NextToken = data.NextToken;
  }
  if (data.Revisions !== undefined) {
    contents.Revisions = deserializeAws_restJson1_1ListOfRevisionEntry(
      data.Revisions,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListDataSetRevisionsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDataSetRevisionsCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.dataexchange#InternalServerException":
      response = await deserializeAws_restJson1_1InternalServerExceptionResponse(
        output,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dataexchange#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazonaws.dataexchange#ThrottlingException":
      response = await deserializeAws_restJson1_1ThrottlingExceptionResponse(
        output,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.dataexchange#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.dataexchange#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1ListDataSetsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDataSetsCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1ListDataSetsCommandError(output, context);
  }
  const contents: ListDataSetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListDataSetsResponse",
    DataSets: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.DataSets !== undefined) {
    contents.DataSets = deserializeAws_restJson1_1ListOfDataSetEntry(
      data.DataSets,
      context
    );
  }
  if (data.NextToken !== undefined) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListDataSetsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDataSetsCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.dataexchange#InternalServerException":
      response = await deserializeAws_restJson1_1InternalServerExceptionResponse(
        output,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dataexchange#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazonaws.dataexchange#ThrottlingException":
      response = await deserializeAws_restJson1_1ThrottlingExceptionResponse(
        output,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.dataexchange#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.dataexchange#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1ListJobsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobsCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1ListJobsCommandError(output, context);
  }
  const contents: ListJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListJobsResponse",
    Jobs: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Jobs !== undefined) {
    contents.Jobs = deserializeAws_restJson1_1ListOfJobEntry(
      data.Jobs,
      context
    );
  }
  if (data.NextToken !== undefined) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListJobsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobsCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.dataexchange#InternalServerException":
      response = await deserializeAws_restJson1_1InternalServerExceptionResponse(
        output,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dataexchange#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazonaws.dataexchange#ThrottlingException":
      response = await deserializeAws_restJson1_1ThrottlingExceptionResponse(
        output,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.dataexchange#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.dataexchange#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1ListRevisionAssetsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRevisionAssetsCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1ListRevisionAssetsCommandError(
      output,
      context
    );
  }
  const contents: ListRevisionAssetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListRevisionAssetsResponse",
    Assets: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Assets !== undefined) {
    contents.Assets = deserializeAws_restJson1_1ListOfAssetEntry(
      data.Assets,
      context
    );
  }
  if (data.NextToken !== undefined) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListRevisionAssetsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRevisionAssetsCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.dataexchange#InternalServerException":
      response = await deserializeAws_restJson1_1InternalServerExceptionResponse(
        output,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dataexchange#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazonaws.dataexchange#ThrottlingException":
      response = await deserializeAws_restJson1_1ThrottlingExceptionResponse(
        output,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.dataexchange#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.dataexchange#${errorCode}`,
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
    Tags: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.tags !== undefined) {
    contents.Tags = deserializeAws_restJson1_1MapOf__string(data.tags, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListTagsForResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    default:
      response = {
        __type: `com.amazonaws.dataexchange#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1StartJobCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartJobCommandOutput> {
  if (output.statusCode !== 202) {
    return deserializeAws_restJson1_1StartJobCommandError(output, context);
  }
  const contents: StartJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StartJobResponse"
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1StartJobCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartJobCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.dataexchange#AccessDeniedException":
      response = await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
        output,
        context
      );
      break;
    case "ConflictException":
    case "com.amazonaws.dataexchange#ConflictException":
      response = await deserializeAws_restJson1_1ConflictExceptionResponse(
        output,
        context
      );
      break;
    case "InternalServerException":
    case "com.amazonaws.dataexchange#InternalServerException":
      response = await deserializeAws_restJson1_1InternalServerExceptionResponse(
        output,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dataexchange#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazonaws.dataexchange#ThrottlingException":
      response = await deserializeAws_restJson1_1ThrottlingExceptionResponse(
        output,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.dataexchange#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.dataexchange#${errorCode}`,
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
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1TagResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    default:
      response = {
        __type: `com.amazonaws.dataexchange#${errorCode}`,
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
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UntagResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    default:
      response = {
        __type: `com.amazonaws.dataexchange#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1UpdateAssetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAssetCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1UpdateAssetCommandError(output, context);
  }
  const contents: UpdateAssetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateAssetResponse",
    Arn: undefined,
    AssetDetails: undefined,
    AssetType: undefined,
    CreatedAt: undefined,
    DataSetId: undefined,
    Id: undefined,
    Name: undefined,
    RevisionId: undefined,
    SourceId: undefined,
    UpdatedAt: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Arn !== undefined) {
    contents.Arn = data.Arn;
  }
  if (data.AssetDetails !== undefined) {
    contents.AssetDetails = deserializeAws_restJson1_1AssetDetails(
      data.AssetDetails,
      context
    );
  }
  if (data.AssetType !== undefined) {
    contents.AssetType = data.AssetType;
  }
  if (data.CreatedAt !== undefined) {
    contents.CreatedAt = new Date(data.CreatedAt);
  }
  if (data.DataSetId !== undefined) {
    contents.DataSetId = data.DataSetId;
  }
  if (data.Id !== undefined) {
    contents.Id = data.Id;
  }
  if (data.Name !== undefined) {
    contents.Name = data.Name;
  }
  if (data.RevisionId !== undefined) {
    contents.RevisionId = data.RevisionId;
  }
  if (data.SourceId !== undefined) {
    contents.SourceId = data.SourceId;
  }
  if (data.UpdatedAt !== undefined) {
    contents.UpdatedAt = new Date(data.UpdatedAt);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateAssetCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAssetCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.dataexchange#AccessDeniedException":
      response = await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
        output,
        context
      );
      break;
    case "ConflictException":
    case "com.amazonaws.dataexchange#ConflictException":
      response = await deserializeAws_restJson1_1ConflictExceptionResponse(
        output,
        context
      );
      break;
    case "InternalServerException":
    case "com.amazonaws.dataexchange#InternalServerException":
      response = await deserializeAws_restJson1_1InternalServerExceptionResponse(
        output,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dataexchange#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazonaws.dataexchange#ThrottlingException":
      response = await deserializeAws_restJson1_1ThrottlingExceptionResponse(
        output,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.dataexchange#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.dataexchange#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1UpdateDataSetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDataSetCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1UpdateDataSetCommandError(output, context);
  }
  const contents: UpdateDataSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateDataSetResponse",
    Arn: undefined,
    AssetType: undefined,
    CreatedAt: undefined,
    Description: undefined,
    Id: undefined,
    Name: undefined,
    Origin: undefined,
    OriginDetails: undefined,
    SourceId: undefined,
    UpdatedAt: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Arn !== undefined) {
    contents.Arn = data.Arn;
  }
  if (data.AssetType !== undefined) {
    contents.AssetType = data.AssetType;
  }
  if (data.CreatedAt !== undefined) {
    contents.CreatedAt = new Date(data.CreatedAt);
  }
  if (data.Description !== undefined) {
    contents.Description = data.Description;
  }
  if (data.Id !== undefined) {
    contents.Id = data.Id;
  }
  if (data.Name !== undefined) {
    contents.Name = data.Name;
  }
  if (data.Origin !== undefined) {
    contents.Origin = data.Origin;
  }
  if (data.OriginDetails !== undefined) {
    contents.OriginDetails = deserializeAws_restJson1_1OriginDetails(
      data.OriginDetails,
      context
    );
  }
  if (data.SourceId !== undefined) {
    contents.SourceId = data.SourceId;
  }
  if (data.UpdatedAt !== undefined) {
    contents.UpdatedAt = new Date(data.UpdatedAt);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateDataSetCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDataSetCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.dataexchange#AccessDeniedException":
      response = await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
        output,
        context
      );
      break;
    case "InternalServerException":
    case "com.amazonaws.dataexchange#InternalServerException":
      response = await deserializeAws_restJson1_1InternalServerExceptionResponse(
        output,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dataexchange#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazonaws.dataexchange#ThrottlingException":
      response = await deserializeAws_restJson1_1ThrottlingExceptionResponse(
        output,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.dataexchange#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.dataexchange#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1UpdateRevisionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRevisionCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1UpdateRevisionCommandError(
      output,
      context
    );
  }
  const contents: UpdateRevisionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateRevisionResponse",
    Arn: undefined,
    Comment: undefined,
    CreatedAt: undefined,
    DataSetId: undefined,
    Finalized: undefined,
    Id: undefined,
    SourceId: undefined,
    UpdatedAt: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Arn !== undefined) {
    contents.Arn = data.Arn;
  }
  if (data.Comment !== undefined) {
    contents.Comment = data.Comment;
  }
  if (data.CreatedAt !== undefined) {
    contents.CreatedAt = new Date(data.CreatedAt);
  }
  if (data.DataSetId !== undefined) {
    contents.DataSetId = data.DataSetId;
  }
  if (data.Finalized !== undefined) {
    contents.Finalized = data.Finalized;
  }
  if (data.Id !== undefined) {
    contents.Id = data.Id;
  }
  if (data.SourceId !== undefined) {
    contents.SourceId = data.SourceId;
  }
  if (data.UpdatedAt !== undefined) {
    contents.UpdatedAt = new Date(data.UpdatedAt);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateRevisionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRevisionCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.dataexchange#AccessDeniedException":
      response = await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
        output,
        context
      );
      break;
    case "ConflictException":
    case "com.amazonaws.dataexchange#ConflictException":
      response = await deserializeAws_restJson1_1ConflictExceptionResponse(
        output,
        context
      );
      break;
    case "InternalServerException":
    case "com.amazonaws.dataexchange#InternalServerException":
      response = await deserializeAws_restJson1_1InternalServerExceptionResponse(
        output,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dataexchange#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazonaws.dataexchange#ThrottlingException":
      response = await deserializeAws_restJson1_1ThrottlingExceptionResponse(
        output,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.dataexchange#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.dataexchange#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

const deserializeAws_restJson1_1AccessDeniedExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: AccessDeniedException = {
    name: "AccessDeniedException",
    __type: "AccessDeniedException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1ConflictExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ConflictException> => {
  const contents: ConflictException = {
    name: "ConflictException",
    __type: "ConflictException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined,
    ResourceId: undefined,
    ResourceType: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  if (data.ResourceId !== undefined) {
    contents.ResourceId = data.ResourceId;
  }
  if (data.ResourceType !== undefined) {
    contents.ResourceType = data.ResourceType;
  }
  return contents;
};

const deserializeAws_restJson1_1InternalServerExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: InternalServerException = {
    name: "InternalServerException",
    __type: "InternalServerException",
    $fault: "server",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1ResourceNotFoundExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    __type: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined,
    ResourceId: undefined,
    ResourceType: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  if (data.ResourceId !== undefined) {
    contents.ResourceId = data.ResourceId;
  }
  if (data.ResourceType !== undefined) {
    contents.ResourceType = data.ResourceType;
  }
  return contents;
};

const deserializeAws_restJson1_1ServiceLimitExceededExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ServiceLimitExceededException> => {
  const contents: ServiceLimitExceededException = {
    name: "ServiceLimitExceededException",
    __type: "ServiceLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    LimitName: undefined,
    LimitValue: undefined,
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.LimitName !== undefined) {
    contents.LimitName = data.LimitName;
  }
  if (data.LimitValue !== undefined) {
    contents.LimitValue = data.LimitValue;
  }
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1ThrottlingExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const contents: ThrottlingException = {
    name: "ThrottlingException",
    __type: "ThrottlingException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1ValidationExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const contents: ValidationException = {
    name: "ValidationException",
    __type: "ValidationException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const serializeAws_restJson1_1AssetDestinationEntry = (
  input: AssetDestinationEntry,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.AssetId !== undefined) {
    bodyParams["AssetId"] = input.AssetId;
  }
  if (input.Bucket !== undefined) {
    bodyParams["Bucket"] = input.Bucket;
  }
  if (input.Key !== undefined) {
    bodyParams["Key"] = input.Key;
  }
  return bodyParams;
};

const serializeAws_restJson1_1AssetSourceEntry = (
  input: AssetSourceEntry,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Bucket !== undefined) {
    bodyParams["Bucket"] = input.Bucket;
  }
  if (input.Key !== undefined) {
    bodyParams["Key"] = input.Key;
  }
  return bodyParams;
};

const serializeAws_restJson1_1ExportAssetToSignedUrlRequestDetails = (
  input: ExportAssetToSignedUrlRequestDetails,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.AssetId !== undefined) {
    bodyParams["AssetId"] = input.AssetId;
  }
  if (input.DataSetId !== undefined) {
    bodyParams["DataSetId"] = input.DataSetId;
  }
  if (input.RevisionId !== undefined) {
    bodyParams["RevisionId"] = input.RevisionId;
  }
  return bodyParams;
};

const serializeAws_restJson1_1ExportAssetsToS3RequestDetails = (
  input: ExportAssetsToS3RequestDetails,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.AssetDestinations !== undefined) {
    bodyParams[
      "AssetDestinations"
    ] = serializeAws_restJson1_1ListOfAssetDestinationEntry(
      input.AssetDestinations,
      context
    );
  }
  if (input.DataSetId !== undefined) {
    bodyParams["DataSetId"] = input.DataSetId;
  }
  if (input.RevisionId !== undefined) {
    bodyParams["RevisionId"] = input.RevisionId;
  }
  return bodyParams;
};

const serializeAws_restJson1_1ImportAssetFromSignedUrlRequestDetails = (
  input: ImportAssetFromSignedUrlRequestDetails,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.AssetName !== undefined) {
    bodyParams["AssetName"] = input.AssetName;
  }
  if (input.DataSetId !== undefined) {
    bodyParams["DataSetId"] = input.DataSetId;
  }
  if (input.Md5Hash !== undefined) {
    bodyParams["Md5Hash"] = input.Md5Hash;
  }
  if (input.RevisionId !== undefined) {
    bodyParams["RevisionId"] = input.RevisionId;
  }
  return bodyParams;
};

const serializeAws_restJson1_1ImportAssetsFromS3RequestDetails = (
  input: ImportAssetsFromS3RequestDetails,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.AssetSources !== undefined) {
    bodyParams["AssetSources"] = serializeAws_restJson1_1ListOfAssetSourceEntry(
      input.AssetSources,
      context
    );
  }
  if (input.DataSetId !== undefined) {
    bodyParams["DataSetId"] = input.DataSetId;
  }
  if (input.RevisionId !== undefined) {
    bodyParams["RevisionId"] = input.RevisionId;
  }
  return bodyParams;
};

const serializeAws_restJson1_1ListOfAssetDestinationEntry = (
  input: Array<AssetDestinationEntry>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_restJson1_1AssetDestinationEntry(entry, context)
  );
};

const serializeAws_restJson1_1ListOfAssetSourceEntry = (
  input: Array<AssetSourceEntry>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_restJson1_1AssetSourceEntry(entry, context)
  );
};

const serializeAws_restJson1_1MapOf__string = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  let mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = input[key];
  });
  return mapParams;
};

const serializeAws_restJson1_1RequestDetails = (
  input: RequestDetails,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ExportAssetToSignedUrl !== undefined) {
    bodyParams[
      "ExportAssetToSignedUrl"
    ] = serializeAws_restJson1_1ExportAssetToSignedUrlRequestDetails(
      input.ExportAssetToSignedUrl,
      context
    );
  }
  if (input.ExportAssetsToS3 !== undefined) {
    bodyParams[
      "ExportAssetsToS3"
    ] = serializeAws_restJson1_1ExportAssetsToS3RequestDetails(
      input.ExportAssetsToS3,
      context
    );
  }
  if (input.ImportAssetFromSignedUrl !== undefined) {
    bodyParams[
      "ImportAssetFromSignedUrl"
    ] = serializeAws_restJson1_1ImportAssetFromSignedUrlRequestDetails(
      input.ImportAssetFromSignedUrl,
      context
    );
  }
  if (input.ImportAssetsFromS3 !== undefined) {
    bodyParams[
      "ImportAssetsFromS3"
    ] = serializeAws_restJson1_1ImportAssetsFromS3RequestDetails(
      input.ImportAssetsFromS3,
      context
    );
  }
  return bodyParams;
};

const deserializeAws_restJson1_1AssetDestinationEntry = (
  output: any,
  context: __SerdeContext
): AssetDestinationEntry => {
  let contents: any = {
    __type: "AssetDestinationEntry",
    AssetId: undefined,
    Bucket: undefined,
    Key: undefined
  };
  if (output.AssetId !== undefined) {
    contents.AssetId = output.AssetId;
  }
  if (output.Bucket !== undefined) {
    contents.Bucket = output.Bucket;
  }
  if (output.Key !== undefined) {
    contents.Key = output.Key;
  }
  return contents;
};

const deserializeAws_restJson1_1AssetDetails = (
  output: any,
  context: __SerdeContext
): AssetDetails => {
  let contents: any = {
    __type: "AssetDetails",
    S3SnapshotAsset: undefined
  };
  if (output.S3SnapshotAsset !== undefined) {
    contents.S3SnapshotAsset = deserializeAws_restJson1_1S3SnapshotAsset(
      output.S3SnapshotAsset,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1AssetEntry = (
  output: any,
  context: __SerdeContext
): AssetEntry => {
  let contents: any = {
    __type: "AssetEntry",
    Arn: undefined,
    AssetDetails: undefined,
    AssetType: undefined,
    CreatedAt: undefined,
    DataSetId: undefined,
    Id: undefined,
    Name: undefined,
    RevisionId: undefined,
    SourceId: undefined,
    UpdatedAt: undefined
  };
  if (output.Arn !== undefined) {
    contents.Arn = output.Arn;
  }
  if (output.AssetDetails !== undefined) {
    contents.AssetDetails = deserializeAws_restJson1_1AssetDetails(
      output.AssetDetails,
      context
    );
  }
  if (output.AssetType !== undefined) {
    contents.AssetType = output.AssetType;
  }
  if (output.CreatedAt !== undefined) {
    contents.CreatedAt = new Date(output.CreatedAt);
  }
  if (output.DataSetId !== undefined) {
    contents.DataSetId = output.DataSetId;
  }
  if (output.Id !== undefined) {
    contents.Id = output.Id;
  }
  if (output.Name !== undefined) {
    contents.Name = output.Name;
  }
  if (output.RevisionId !== undefined) {
    contents.RevisionId = output.RevisionId;
  }
  if (output.SourceId !== undefined) {
    contents.SourceId = output.SourceId;
  }
  if (output.UpdatedAt !== undefined) {
    contents.UpdatedAt = new Date(output.UpdatedAt);
  }
  return contents;
};

const deserializeAws_restJson1_1AssetSourceEntry = (
  output: any,
  context: __SerdeContext
): AssetSourceEntry => {
  let contents: any = {
    __type: "AssetSourceEntry",
    Bucket: undefined,
    Key: undefined
  };
  if (output.Bucket !== undefined) {
    contents.Bucket = output.Bucket;
  }
  if (output.Key !== undefined) {
    contents.Key = output.Key;
  }
  return contents;
};

const deserializeAws_restJson1_1DataSetEntry = (
  output: any,
  context: __SerdeContext
): DataSetEntry => {
  let contents: any = {
    __type: "DataSetEntry",
    Arn: undefined,
    AssetType: undefined,
    CreatedAt: undefined,
    Description: undefined,
    Id: undefined,
    Name: undefined,
    Origin: undefined,
    OriginDetails: undefined,
    SourceId: undefined,
    UpdatedAt: undefined
  };
  if (output.Arn !== undefined) {
    contents.Arn = output.Arn;
  }
  if (output.AssetType !== undefined) {
    contents.AssetType = output.AssetType;
  }
  if (output.CreatedAt !== undefined) {
    contents.CreatedAt = new Date(output.CreatedAt);
  }
  if (output.Description !== undefined) {
    contents.Description = output.Description;
  }
  if (output.Id !== undefined) {
    contents.Id = output.Id;
  }
  if (output.Name !== undefined) {
    contents.Name = output.Name;
  }
  if (output.Origin !== undefined) {
    contents.Origin = output.Origin;
  }
  if (output.OriginDetails !== undefined) {
    contents.OriginDetails = deserializeAws_restJson1_1OriginDetails(
      output.OriginDetails,
      context
    );
  }
  if (output.SourceId !== undefined) {
    contents.SourceId = output.SourceId;
  }
  if (output.UpdatedAt !== undefined) {
    contents.UpdatedAt = new Date(output.UpdatedAt);
  }
  return contents;
};

const deserializeAws_restJson1_1Details = (
  output: any,
  context: __SerdeContext
): Details => {
  let contents: any = {
    __type: "Details",
    ImportAssetFromSignedUrlJobErrorDetails: undefined,
    ImportAssetsFromS3JobErrorDetails: undefined
  };
  if (output.ImportAssetFromSignedUrlJobErrorDetails !== undefined) {
    contents.ImportAssetFromSignedUrlJobErrorDetails = deserializeAws_restJson1_1ImportAssetFromSignedUrlJobErrorDetails(
      output.ImportAssetFromSignedUrlJobErrorDetails,
      context
    );
  }
  if (output.ImportAssetsFromS3JobErrorDetails !== undefined) {
    contents.ImportAssetsFromS3JobErrorDetails = deserializeAws_restJson1_1ListOfAssetSourceEntry(
      output.ImportAssetsFromS3JobErrorDetails,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1ExportAssetToSignedUrlResponseDetails = (
  output: any,
  context: __SerdeContext
): ExportAssetToSignedUrlResponseDetails => {
  let contents: any = {
    __type: "ExportAssetToSignedUrlResponseDetails",
    AssetId: undefined,
    DataSetId: undefined,
    RevisionId: undefined,
    SignedUrl: undefined,
    SignedUrlExpiresAt: undefined
  };
  if (output.AssetId !== undefined) {
    contents.AssetId = output.AssetId;
  }
  if (output.DataSetId !== undefined) {
    contents.DataSetId = output.DataSetId;
  }
  if (output.RevisionId !== undefined) {
    contents.RevisionId = output.RevisionId;
  }
  if (output.SignedUrl !== undefined) {
    contents.SignedUrl = output.SignedUrl;
  }
  if (output.SignedUrlExpiresAt !== undefined) {
    contents.SignedUrlExpiresAt = new Date(output.SignedUrlExpiresAt);
  }
  return contents;
};

const deserializeAws_restJson1_1ExportAssetsToS3ResponseDetails = (
  output: any,
  context: __SerdeContext
): ExportAssetsToS3ResponseDetails => {
  let contents: any = {
    __type: "ExportAssetsToS3ResponseDetails",
    AssetDestinations: undefined,
    DataSetId: undefined,
    RevisionId: undefined
  };
  if (output.AssetDestinations !== undefined) {
    contents.AssetDestinations = deserializeAws_restJson1_1ListOfAssetDestinationEntry(
      output.AssetDestinations,
      context
    );
  }
  if (output.DataSetId !== undefined) {
    contents.DataSetId = output.DataSetId;
  }
  if (output.RevisionId !== undefined) {
    contents.RevisionId = output.RevisionId;
  }
  return contents;
};

const deserializeAws_restJson1_1ImportAssetFromSignedUrlJobErrorDetails = (
  output: any,
  context: __SerdeContext
): ImportAssetFromSignedUrlJobErrorDetails => {
  let contents: any = {
    __type: "ImportAssetFromSignedUrlJobErrorDetails",
    AssetName: undefined
  };
  if (output.AssetName !== undefined) {
    contents.AssetName = output.AssetName;
  }
  return contents;
};

const deserializeAws_restJson1_1ImportAssetFromSignedUrlResponseDetails = (
  output: any,
  context: __SerdeContext
): ImportAssetFromSignedUrlResponseDetails => {
  let contents: any = {
    __type: "ImportAssetFromSignedUrlResponseDetails",
    AssetName: undefined,
    DataSetId: undefined,
    Md5Hash: undefined,
    RevisionId: undefined,
    SignedUrl: undefined,
    SignedUrlExpiresAt: undefined
  };
  if (output.AssetName !== undefined) {
    contents.AssetName = output.AssetName;
  }
  if (output.DataSetId !== undefined) {
    contents.DataSetId = output.DataSetId;
  }
  if (output.Md5Hash !== undefined) {
    contents.Md5Hash = output.Md5Hash;
  }
  if (output.RevisionId !== undefined) {
    contents.RevisionId = output.RevisionId;
  }
  if (output.SignedUrl !== undefined) {
    contents.SignedUrl = output.SignedUrl;
  }
  if (output.SignedUrlExpiresAt !== undefined) {
    contents.SignedUrlExpiresAt = new Date(output.SignedUrlExpiresAt);
  }
  return contents;
};

const deserializeAws_restJson1_1ImportAssetsFromS3ResponseDetails = (
  output: any,
  context: __SerdeContext
): ImportAssetsFromS3ResponseDetails => {
  let contents: any = {
    __type: "ImportAssetsFromS3ResponseDetails",
    AssetSources: undefined,
    DataSetId: undefined,
    RevisionId: undefined
  };
  if (output.AssetSources !== undefined) {
    contents.AssetSources = deserializeAws_restJson1_1ListOfAssetSourceEntry(
      output.AssetSources,
      context
    );
  }
  if (output.DataSetId !== undefined) {
    contents.DataSetId = output.DataSetId;
  }
  if (output.RevisionId !== undefined) {
    contents.RevisionId = output.RevisionId;
  }
  return contents;
};

const deserializeAws_restJson1_1JobEntry = (
  output: any,
  context: __SerdeContext
): JobEntry => {
  let contents: any = {
    __type: "JobEntry",
    Arn: undefined,
    CreatedAt: undefined,
    Details: undefined,
    Errors: undefined,
    Id: undefined,
    State: undefined,
    Type: undefined,
    UpdatedAt: undefined
  };
  if (output.Arn !== undefined) {
    contents.Arn = output.Arn;
  }
  if (output.CreatedAt !== undefined) {
    contents.CreatedAt = new Date(output.CreatedAt);
  }
  if (output.Details !== undefined) {
    contents.Details = deserializeAws_restJson1_1ResponseDetails(
      output.Details,
      context
    );
  }
  if (output.Errors !== undefined) {
    contents.Errors = deserializeAws_restJson1_1ListOfJobError(
      output.Errors,
      context
    );
  }
  if (output.Id !== undefined) {
    contents.Id = output.Id;
  }
  if (output.State !== undefined) {
    contents.State = output.State;
  }
  if (output.Type !== undefined) {
    contents.Type = output.Type;
  }
  if (output.UpdatedAt !== undefined) {
    contents.UpdatedAt = new Date(output.UpdatedAt);
  }
  return contents;
};

const deserializeAws_restJson1_1JobError = (
  output: any,
  context: __SerdeContext
): JobError => {
  let contents: any = {
    __type: "JobError",
    Code: undefined,
    Details: undefined,
    LimitName: undefined,
    LimitValue: undefined,
    Message: undefined,
    ResourceId: undefined,
    ResourceType: undefined
  };
  if (output.Code !== undefined) {
    contents.Code = output.Code;
  }
  if (output.Details !== undefined) {
    contents.Details = deserializeAws_restJson1_1Details(
      output.Details,
      context
    );
  }
  if (output.LimitName !== undefined) {
    contents.LimitName = output.LimitName;
  }
  if (output.LimitValue !== undefined) {
    contents.LimitValue = output.LimitValue;
  }
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  if (output.ResourceId !== undefined) {
    contents.ResourceId = output.ResourceId;
  }
  if (output.ResourceType !== undefined) {
    contents.ResourceType = output.ResourceType;
  }
  return contents;
};

const deserializeAws_restJson1_1ListOfAssetDestinationEntry = (
  output: any,
  context: __SerdeContext
): Array<AssetDestinationEntry> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1AssetDestinationEntry(entry, context)
  );
};

const deserializeAws_restJson1_1ListOfAssetEntry = (
  output: any,
  context: __SerdeContext
): Array<AssetEntry> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1AssetEntry(entry, context)
  );
};

const deserializeAws_restJson1_1ListOfAssetSourceEntry = (
  output: any,
  context: __SerdeContext
): Array<AssetSourceEntry> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1AssetSourceEntry(entry, context)
  );
};

const deserializeAws_restJson1_1ListOfDataSetEntry = (
  output: any,
  context: __SerdeContext
): Array<DataSetEntry> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1DataSetEntry(entry, context)
  );
};

const deserializeAws_restJson1_1ListOfJobEntry = (
  output: any,
  context: __SerdeContext
): Array<JobEntry> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1JobEntry(entry, context)
  );
};

const deserializeAws_restJson1_1ListOfJobError = (
  output: any,
  context: __SerdeContext
): Array<JobError> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1JobError(entry, context)
  );
};

const deserializeAws_restJson1_1ListOfRevisionEntry = (
  output: any,
  context: __SerdeContext
): Array<RevisionEntry> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1RevisionEntry(entry, context)
  );
};

const deserializeAws_restJson1_1MapOf__string = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  let mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_restJson1_1OriginDetails = (
  output: any,
  context: __SerdeContext
): OriginDetails => {
  let contents: any = {
    __type: "OriginDetails",
    ProductId: undefined
  };
  if (output.ProductId !== undefined) {
    contents.ProductId = output.ProductId;
  }
  return contents;
};

const deserializeAws_restJson1_1ResponseDetails = (
  output: any,
  context: __SerdeContext
): ResponseDetails => {
  let contents: any = {
    __type: "ResponseDetails",
    ExportAssetToSignedUrl: undefined,
    ExportAssetsToS3: undefined,
    ImportAssetFromSignedUrl: undefined,
    ImportAssetsFromS3: undefined
  };
  if (output.ExportAssetToSignedUrl !== undefined) {
    contents.ExportAssetToSignedUrl = deserializeAws_restJson1_1ExportAssetToSignedUrlResponseDetails(
      output.ExportAssetToSignedUrl,
      context
    );
  }
  if (output.ExportAssetsToS3 !== undefined) {
    contents.ExportAssetsToS3 = deserializeAws_restJson1_1ExportAssetsToS3ResponseDetails(
      output.ExportAssetsToS3,
      context
    );
  }
  if (output.ImportAssetFromSignedUrl !== undefined) {
    contents.ImportAssetFromSignedUrl = deserializeAws_restJson1_1ImportAssetFromSignedUrlResponseDetails(
      output.ImportAssetFromSignedUrl,
      context
    );
  }
  if (output.ImportAssetsFromS3 !== undefined) {
    contents.ImportAssetsFromS3 = deserializeAws_restJson1_1ImportAssetsFromS3ResponseDetails(
      output.ImportAssetsFromS3,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1RevisionEntry = (
  output: any,
  context: __SerdeContext
): RevisionEntry => {
  let contents: any = {
    __type: "RevisionEntry",
    Arn: undefined,
    Comment: undefined,
    CreatedAt: undefined,
    DataSetId: undefined,
    Finalized: undefined,
    Id: undefined,
    SourceId: undefined,
    UpdatedAt: undefined
  };
  if (output.Arn !== undefined) {
    contents.Arn = output.Arn;
  }
  if (output.Comment !== undefined) {
    contents.Comment = output.Comment;
  }
  if (output.CreatedAt !== undefined) {
    contents.CreatedAt = new Date(output.CreatedAt);
  }
  if (output.DataSetId !== undefined) {
    contents.DataSetId = output.DataSetId;
  }
  if (output.Finalized !== undefined) {
    contents.Finalized = output.Finalized;
  }
  if (output.Id !== undefined) {
    contents.Id = output.Id;
  }
  if (output.SourceId !== undefined) {
    contents.SourceId = output.SourceId;
  }
  if (output.UpdatedAt !== undefined) {
    contents.UpdatedAt = new Date(output.UpdatedAt);
  }
  return contents;
};

const deserializeAws_restJson1_1S3SnapshotAsset = (
  output: any,
  context: __SerdeContext
): S3SnapshotAsset => {
  let contents: any = {
    __type: "S3SnapshotAsset",
    Size: undefined
  };
  if (output.Size !== undefined) {
    contents.Size = output.Size;
  }
  return contents;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (
  streamBody: any,
  context: __SerdeContext
): Promise<Uint8Array> => {
  return context.streamCollector(streamBody) || new Uint8Array();
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (
  streamBody: any,
  context: __SerdeContext
): Promise<string> => {
  return collectBody(streamBody, context).then(body =>
    context.utf8Encoder(body)
  );
};

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};
