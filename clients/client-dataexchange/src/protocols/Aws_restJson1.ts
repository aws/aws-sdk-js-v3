// smithy-typescript generated code
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse,
  isValidHostname as __isValidHostname,
} from "@aws-sdk/protocol-http";
import {
  convertMap,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  limitedParseDouble as __limitedParseDouble,
  map as __map,
  parseRfc3339DateTime as __parseRfc3339DateTime,
  resolvedPath as __resolvedPath,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { CancelJobCommandInput, CancelJobCommandOutput } from "../commands/CancelJobCommand";
import { CreateDataSetCommandInput, CreateDataSetCommandOutput } from "../commands/CreateDataSetCommand";
import { CreateEventActionCommandInput, CreateEventActionCommandOutput } from "../commands/CreateEventActionCommand";
import { CreateJobCommandInput, CreateJobCommandOutput } from "../commands/CreateJobCommand";
import { CreateRevisionCommandInput, CreateRevisionCommandOutput } from "../commands/CreateRevisionCommand";
import { DeleteAssetCommandInput, DeleteAssetCommandOutput } from "../commands/DeleteAssetCommand";
import { DeleteDataSetCommandInput, DeleteDataSetCommandOutput } from "../commands/DeleteDataSetCommand";
import { DeleteEventActionCommandInput, DeleteEventActionCommandOutput } from "../commands/DeleteEventActionCommand";
import { DeleteRevisionCommandInput, DeleteRevisionCommandOutput } from "../commands/DeleteRevisionCommand";
import { GetAssetCommandInput, GetAssetCommandOutput } from "../commands/GetAssetCommand";
import { GetDataSetCommandInput, GetDataSetCommandOutput } from "../commands/GetDataSetCommand";
import { GetEventActionCommandInput, GetEventActionCommandOutput } from "../commands/GetEventActionCommand";
import { GetJobCommandInput, GetJobCommandOutput } from "../commands/GetJobCommand";
import { GetRevisionCommandInput, GetRevisionCommandOutput } from "../commands/GetRevisionCommand";
import {
  ListDataSetRevisionsCommandInput,
  ListDataSetRevisionsCommandOutput,
} from "../commands/ListDataSetRevisionsCommand";
import { ListDataSetsCommandInput, ListDataSetsCommandOutput } from "../commands/ListDataSetsCommand";
import { ListEventActionsCommandInput, ListEventActionsCommandOutput } from "../commands/ListEventActionsCommand";
import { ListJobsCommandInput, ListJobsCommandOutput } from "../commands/ListJobsCommand";
import { ListRevisionAssetsCommandInput, ListRevisionAssetsCommandOutput } from "../commands/ListRevisionAssetsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { RevokeRevisionCommandInput, RevokeRevisionCommandOutput } from "../commands/RevokeRevisionCommand";
import { SendApiAssetCommandInput, SendApiAssetCommandOutput } from "../commands/SendApiAssetCommand";
import { StartJobCommandInput, StartJobCommandOutput } from "../commands/StartJobCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateAssetCommandInput, UpdateAssetCommandOutput } from "../commands/UpdateAssetCommand";
import { UpdateDataSetCommandInput, UpdateDataSetCommandOutput } from "../commands/UpdateDataSetCommand";
import { UpdateEventActionCommandInput, UpdateEventActionCommandOutput } from "../commands/UpdateEventActionCommand";
import { UpdateRevisionCommandInput, UpdateRevisionCommandOutput } from "../commands/UpdateRevisionCommand";
import { DataExchangeServiceException as __BaseException } from "../models/DataExchangeServiceException";
import {
  AccessDeniedException,
  Action,
  ApiGatewayApiAsset,
  AssetDestinationEntry,
  AssetDetails,
  AssetEntry,
  AssetSourceEntry,
  AutoExportRevisionDestinationEntry,
  AutoExportRevisionToS3RequestDetails,
  ConflictException,
  CreateS3DataAccessFromS3BucketRequestDetails,
  CreateS3DataAccessFromS3BucketResponseDetails,
  DatabaseLFTagPolicy,
  DatabaseLFTagPolicyAndPermissions,
  DatabaseLFTagPolicyPermission,
  DataSetEntry,
  Details,
  Event,
  EventActionEntry,
  ExportAssetsToS3RequestDetails,
  ExportAssetsToS3ResponseDetails,
  ExportAssetToSignedUrlRequestDetails,
  ExportAssetToSignedUrlResponseDetails,
  ExportRevisionsToS3RequestDetails,
  ExportRevisionsToS3ResponseDetails,
  ExportServerSideEncryption,
  ImportAssetFromApiGatewayApiRequestDetails,
  ImportAssetFromApiGatewayApiResponseDetails,
  ImportAssetFromSignedUrlJobErrorDetails,
  ImportAssetFromSignedUrlRequestDetails,
  ImportAssetFromSignedUrlResponseDetails,
  ImportAssetsFromLakeFormationTagPolicyRequestDetails,
  ImportAssetsFromLakeFormationTagPolicyResponseDetails,
  ImportAssetsFromRedshiftDataSharesRequestDetails,
  ImportAssetsFromRedshiftDataSharesResponseDetails,
  ImportAssetsFromS3RequestDetails,
  ImportAssetsFromS3ResponseDetails,
  InternalServerException,
  JobEntry,
  JobError,
  LakeFormationDataPermissionAsset,
  LakeFormationDataPermissionDetails,
  LFPermission,
  LFResourceDetails,
  LFTag,
  LFTagPolicyDetails,
  OriginDetails,
  RedshiftDataShareAsset,
  RedshiftDataShareAssetSourceEntry,
  RequestDetails,
  ResourceNotFoundException,
  ResponseDetails,
  RevisionDestinationEntry,
  RevisionEntry,
  RevisionPublished,
  S3DataAccessAsset,
  S3DataAccessAssetSourceEntry,
  S3SnapshotAsset,
  ServiceLimitExceededException,
  TableLFTagPolicy,
  TableLFTagPolicyAndPermissions,
  TableTagPolicyLFPermission,
  ThrottlingException,
  ValidationException,
} from "../models/models_0";

export const serializeAws_restJson1CancelJobCommand = async (
  input: CancelJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/jobs/{JobId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "JobId", () => input.JobId!, "{JobId}", false);
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
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/data-sets";
  let body: any;
  body = JSON.stringify({
    ...(input.AssetType != null && { AssetType: input.AssetType }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Tags != null && { Tags: serializeAws_restJson1MapOf__string(input.Tags, context) }),
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

export const serializeAws_restJson1CreateEventActionCommand = async (
  input: CreateEventActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/event-actions";
  let body: any;
  body = JSON.stringify({
    ...(input.Action != null && { Action: serializeAws_restJson1Action(input.Action, context) }),
    ...(input.Event != null && { Event: serializeAws_restJson1Event(input.Event, context) }),
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
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/jobs";
  let body: any;
  body = JSON.stringify({
    ...(input.Details != null && { Details: serializeAws_restJson1RequestDetails(input.Details, context) }),
    ...(input.Type != null && { Type: input.Type }),
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
  resolvedPath = __resolvedPath(resolvedPath, input, "DataSetId", () => input.DataSetId!, "{DataSetId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Comment != null && { Comment: input.Comment }),
    ...(input.Tags != null && { Tags: serializeAws_restJson1MapOf__string(input.Tags, context) }),
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
  resolvedPath = __resolvedPath(resolvedPath, input, "AssetId", () => input.AssetId!, "{AssetId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "DataSetId", () => input.DataSetId!, "{DataSetId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "RevisionId", () => input.RevisionId!, "{RevisionId}", false);
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
  resolvedPath = __resolvedPath(resolvedPath, input, "DataSetId", () => input.DataSetId!, "{DataSetId}", false);
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

export const serializeAws_restJson1DeleteEventActionCommand = async (
  input: DeleteEventActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/event-actions/{EventActionId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "EventActionId",
    () => input.EventActionId!,
    "{EventActionId}",
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

export const serializeAws_restJson1DeleteRevisionCommand = async (
  input: DeleteRevisionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/data-sets/{DataSetId}/revisions/{RevisionId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "DataSetId", () => input.DataSetId!, "{DataSetId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "RevisionId", () => input.RevisionId!, "{RevisionId}", false);
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
  resolvedPath = __resolvedPath(resolvedPath, input, "AssetId", () => input.AssetId!, "{AssetId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "DataSetId", () => input.DataSetId!, "{DataSetId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "RevisionId", () => input.RevisionId!, "{RevisionId}", false);
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
  resolvedPath = __resolvedPath(resolvedPath, input, "DataSetId", () => input.DataSetId!, "{DataSetId}", false);
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

export const serializeAws_restJson1GetEventActionCommand = async (
  input: GetEventActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/event-actions/{EventActionId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "EventActionId",
    () => input.EventActionId!,
    "{EventActionId}",
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

export const serializeAws_restJson1GetJobCommand = async (
  input: GetJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/jobs/{JobId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "JobId", () => input.JobId!, "{JobId}", false);
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
  resolvedPath = __resolvedPath(resolvedPath, input, "DataSetId", () => input.DataSetId!, "{DataSetId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "RevisionId", () => input.RevisionId!, "{RevisionId}", false);
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
  resolvedPath = __resolvedPath(resolvedPath, input, "DataSetId", () => input.DataSetId!, "{DataSetId}", false);
  const query: any = map({
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    nextToken: [, input.NextToken!],
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

export const serializeAws_restJson1ListDataSetsCommand = async (
  input: ListDataSetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/data-sets";
  const query: any = map({
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    nextToken: [, input.NextToken!],
    origin: [, input.Origin!],
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

export const serializeAws_restJson1ListEventActionsCommand = async (
  input: ListEventActionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/event-actions";
  const query: any = map({
    eventSourceId: [, input.EventSourceId!],
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    nextToken: [, input.NextToken!],
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

export const serializeAws_restJson1ListJobsCommand = async (
  input: ListJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/jobs";
  const query: any = map({
    dataSetId: [, input.DataSetId!],
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    nextToken: [, input.NextToken!],
    revisionId: [, input.RevisionId!],
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

export const serializeAws_restJson1ListRevisionAssetsCommand = async (
  input: ListRevisionAssetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/data-sets/{DataSetId}/revisions/{RevisionId}/assets";
  resolvedPath = __resolvedPath(resolvedPath, input, "DataSetId", () => input.DataSetId!, "{DataSetId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "RevisionId", () => input.RevisionId!, "{RevisionId}", false);
  const query: any = map({
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    nextToken: [, input.NextToken!],
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{ResourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
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

export const serializeAws_restJson1RevokeRevisionCommand = async (
  input: RevokeRevisionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/data-sets/{DataSetId}/revisions/{RevisionId}/revoke";
  resolvedPath = __resolvedPath(resolvedPath, input, "DataSetId", () => input.DataSetId!, "{DataSetId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "RevisionId", () => input.RevisionId!, "{RevisionId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.RevocationComment != null && { RevocationComment: input.RevocationComment }),
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

export const serializeAws_restJson1SendApiAssetCommand = async (
  input: SendApiAssetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "text/plain",
    "x-amzn-dataexchange-asset-id": input.AssetId!,
    "x-amzn-dataexchange-data-set-id": input.DataSetId!,
    "x-amzn-dataexchange-http-method": input.Method!,
    "x-amzn-dataexchange-path": input.Path!,
    "x-amzn-dataexchange-revision-id": input.RevisionId!,
    ...(input.RequestHeaders !== undefined &&
      Object.keys(input.RequestHeaders).reduce((acc: any, suffix: string) => {
        acc[`x-amzn-dataexchange-header-${suffix.toLowerCase()}`] = input.RequestHeaders![suffix];
        return acc;
      }, {})),
  });
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1";
  const query: any = map({
    ...convertMap(input.QueryStringParameters),
  });
  let body: any;
  if (input.Body !== undefined) {
    body = input.Body;
  }
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api-fulfill." + resolvedHostname;
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

export const serializeAws_restJson1StartJobCommand = async (
  input: StartJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/jobs/{JobId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "JobId", () => input.JobId!, "{JobId}", false);
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
  resolvedPath = __resolvedPath(resolvedPath, input, "ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Tags != null && { tags: serializeAws_restJson1MapOf__string(input.Tags, context) }),
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
  resolvedPath = __resolvedPath(resolvedPath, input, "ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  const query: any = map({
    tagKeys: [
      __expectNonNull(input.TagKeys, `TagKeys`) != null,
      () => (input.TagKeys! || []).map((_entry) => _entry as any),
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
  resolvedPath = __resolvedPath(resolvedPath, input, "AssetId", () => input.AssetId!, "{AssetId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "DataSetId", () => input.DataSetId!, "{DataSetId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "RevisionId", () => input.RevisionId!, "{RevisionId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Name != null && { Name: input.Name }),
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
  resolvedPath = __resolvedPath(resolvedPath, input, "DataSetId", () => input.DataSetId!, "{DataSetId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Name != null && { Name: input.Name }),
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

export const serializeAws_restJson1UpdateEventActionCommand = async (
  input: UpdateEventActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/event-actions/{EventActionId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "EventActionId",
    () => input.EventActionId!,
    "{EventActionId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.Action != null && { Action: serializeAws_restJson1Action(input.Action, context) }),
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
  resolvedPath = __resolvedPath(resolvedPath, input, "DataSetId", () => input.DataSetId!, "{DataSetId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "RevisionId", () => input.RevisionId!, "{RevisionId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Comment != null && { Comment: input.Comment }),
    ...(input.Finalized != null && { Finalized: input.Finalized }),
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
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1CancelJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.dataexchange#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.dataexchange#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dataexchange#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.dataexchange#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.dataexchange#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateDataSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDataSetCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateDataSetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.AssetType != null) {
    contents.AssetType = __expectString(data.AssetType);
  }
  if (data.CreatedAt != null) {
    contents.CreatedAt = __expectNonNull(__parseRfc3339DateTime(data.CreatedAt));
  }
  if (data.Description != null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.Id != null) {
    contents.Id = __expectString(data.Id);
  }
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.Origin != null) {
    contents.Origin = __expectString(data.Origin);
  }
  if (data.OriginDetails != null) {
    contents.OriginDetails = deserializeAws_restJson1OriginDetails(data.OriginDetails, context);
  }
  if (data.SourceId != null) {
    contents.SourceId = __expectString(data.SourceId);
  }
  if (data.Tags != null) {
    contents.Tags = deserializeAws_restJson1MapOf__string(data.Tags, context);
  }
  if (data.UpdatedAt != null) {
    contents.UpdatedAt = __expectNonNull(__parseRfc3339DateTime(data.UpdatedAt));
  }
  return contents;
};

const deserializeAws_restJson1CreateDataSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDataSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.dataexchange#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.dataexchange#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ServiceLimitExceededException":
    case "com.amazonaws.dataexchange#ServiceLimitExceededException":
      throw await deserializeAws_restJson1ServiceLimitExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.dataexchange#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.dataexchange#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateEventActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEventActionCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateEventActionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Action != null) {
    contents.Action = deserializeAws_restJson1Action(data.Action, context);
  }
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.CreatedAt != null) {
    contents.CreatedAt = __expectNonNull(__parseRfc3339DateTime(data.CreatedAt));
  }
  if (data.Event != null) {
    contents.Event = deserializeAws_restJson1Event(data.Event, context);
  }
  if (data.Id != null) {
    contents.Id = __expectString(data.Id);
  }
  if (data.UpdatedAt != null) {
    contents.UpdatedAt = __expectNonNull(__parseRfc3339DateTime(data.UpdatedAt));
  }
  return contents;
};

const deserializeAws_restJson1CreateEventActionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEventActionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.dataexchange#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.dataexchange#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ServiceLimitExceededException":
    case "com.amazonaws.dataexchange#ServiceLimitExceededException":
      throw await deserializeAws_restJson1ServiceLimitExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.dataexchange#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.dataexchange#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateJobCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.CreatedAt != null) {
    contents.CreatedAt = __expectNonNull(__parseRfc3339DateTime(data.CreatedAt));
  }
  if (data.Details != null) {
    contents.Details = deserializeAws_restJson1ResponseDetails(data.Details, context);
  }
  if (data.Errors != null) {
    contents.Errors = deserializeAws_restJson1ListOfJobError(data.Errors, context);
  }
  if (data.Id != null) {
    contents.Id = __expectString(data.Id);
  }
  if (data.State != null) {
    contents.State = __expectString(data.State);
  }
  if (data.Type != null) {
    contents.Type = __expectString(data.Type);
  }
  if (data.UpdatedAt != null) {
    contents.UpdatedAt = __expectNonNull(__parseRfc3339DateTime(data.UpdatedAt));
  }
  return contents;
};

const deserializeAws_restJson1CreateJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.dataexchange#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.dataexchange#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.dataexchange#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dataexchange#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.dataexchange#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.dataexchange#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateRevisionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRevisionCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateRevisionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.Comment != null) {
    contents.Comment = __expectString(data.Comment);
  }
  if (data.CreatedAt != null) {
    contents.CreatedAt = __expectNonNull(__parseRfc3339DateTime(data.CreatedAt));
  }
  if (data.DataSetId != null) {
    contents.DataSetId = __expectString(data.DataSetId);
  }
  if (data.Finalized != null) {
    contents.Finalized = __expectBoolean(data.Finalized);
  }
  if (data.Id != null) {
    contents.Id = __expectString(data.Id);
  }
  if (data.RevocationComment != null) {
    contents.RevocationComment = __expectString(data.RevocationComment);
  }
  if (data.Revoked != null) {
    contents.Revoked = __expectBoolean(data.Revoked);
  }
  if (data.RevokedAt != null) {
    contents.RevokedAt = __expectNonNull(__parseRfc3339DateTime(data.RevokedAt));
  }
  if (data.SourceId != null) {
    contents.SourceId = __expectString(data.SourceId);
  }
  if (data.Tags != null) {
    contents.Tags = deserializeAws_restJson1MapOf__string(data.Tags, context);
  }
  if (data.UpdatedAt != null) {
    contents.UpdatedAt = __expectNonNull(__parseRfc3339DateTime(data.UpdatedAt));
  }
  return contents;
};

const deserializeAws_restJson1CreateRevisionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRevisionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.dataexchange#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.dataexchange#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dataexchange#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.dataexchange#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.dataexchange#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteAssetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAssetCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteAssetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteAssetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAssetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.dataexchange#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.dataexchange#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.dataexchange#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dataexchange#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.dataexchange#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.dataexchange#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteDataSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDataSetCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteDataSetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteDataSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDataSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.dataexchange#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.dataexchange#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.dataexchange#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dataexchange#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.dataexchange#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.dataexchange#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteEventActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEventActionCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteEventActionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteEventActionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEventActionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.dataexchange#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dataexchange#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.dataexchange#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.dataexchange#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteRevisionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRevisionCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteRevisionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteRevisionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRevisionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.dataexchange#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.dataexchange#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.dataexchange#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dataexchange#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.dataexchange#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.dataexchange#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetAssetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAssetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetAssetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.AssetDetails != null) {
    contents.AssetDetails = deserializeAws_restJson1AssetDetails(data.AssetDetails, context);
  }
  if (data.AssetType != null) {
    contents.AssetType = __expectString(data.AssetType);
  }
  if (data.CreatedAt != null) {
    contents.CreatedAt = __expectNonNull(__parseRfc3339DateTime(data.CreatedAt));
  }
  if (data.DataSetId != null) {
    contents.DataSetId = __expectString(data.DataSetId);
  }
  if (data.Id != null) {
    contents.Id = __expectString(data.Id);
  }
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.RevisionId != null) {
    contents.RevisionId = __expectString(data.RevisionId);
  }
  if (data.SourceId != null) {
    contents.SourceId = __expectString(data.SourceId);
  }
  if (data.UpdatedAt != null) {
    contents.UpdatedAt = __expectNonNull(__parseRfc3339DateTime(data.UpdatedAt));
  }
  return contents;
};

const deserializeAws_restJson1GetAssetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAssetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.dataexchange#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dataexchange#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.dataexchange#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.dataexchange#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetDataSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetDataSetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.AssetType != null) {
    contents.AssetType = __expectString(data.AssetType);
  }
  if (data.CreatedAt != null) {
    contents.CreatedAt = __expectNonNull(__parseRfc3339DateTime(data.CreatedAt));
  }
  if (data.Description != null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.Id != null) {
    contents.Id = __expectString(data.Id);
  }
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.Origin != null) {
    contents.Origin = __expectString(data.Origin);
  }
  if (data.OriginDetails != null) {
    contents.OriginDetails = deserializeAws_restJson1OriginDetails(data.OriginDetails, context);
  }
  if (data.SourceId != null) {
    contents.SourceId = __expectString(data.SourceId);
  }
  if (data.Tags != null) {
    contents.Tags = deserializeAws_restJson1MapOf__string(data.Tags, context);
  }
  if (data.UpdatedAt != null) {
    contents.UpdatedAt = __expectNonNull(__parseRfc3339DateTime(data.UpdatedAt));
  }
  return contents;
};

const deserializeAws_restJson1GetDataSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.dataexchange#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dataexchange#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.dataexchange#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.dataexchange#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetEventActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEventActionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetEventActionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Action != null) {
    contents.Action = deserializeAws_restJson1Action(data.Action, context);
  }
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.CreatedAt != null) {
    contents.CreatedAt = __expectNonNull(__parseRfc3339DateTime(data.CreatedAt));
  }
  if (data.Event != null) {
    contents.Event = deserializeAws_restJson1Event(data.Event, context);
  }
  if (data.Id != null) {
    contents.Id = __expectString(data.Id);
  }
  if (data.UpdatedAt != null) {
    contents.UpdatedAt = __expectNonNull(__parseRfc3339DateTime(data.UpdatedAt));
  }
  return contents;
};

const deserializeAws_restJson1GetEventActionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEventActionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.dataexchange#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dataexchange#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.dataexchange#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.dataexchange#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.CreatedAt != null) {
    contents.CreatedAt = __expectNonNull(__parseRfc3339DateTime(data.CreatedAt));
  }
  if (data.Details != null) {
    contents.Details = deserializeAws_restJson1ResponseDetails(data.Details, context);
  }
  if (data.Errors != null) {
    contents.Errors = deserializeAws_restJson1ListOfJobError(data.Errors, context);
  }
  if (data.Id != null) {
    contents.Id = __expectString(data.Id);
  }
  if (data.State != null) {
    contents.State = __expectString(data.State);
  }
  if (data.Type != null) {
    contents.Type = __expectString(data.Type);
  }
  if (data.UpdatedAt != null) {
    contents.UpdatedAt = __expectNonNull(__parseRfc3339DateTime(data.UpdatedAt));
  }
  return contents;
};

const deserializeAws_restJson1GetJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.dataexchange#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dataexchange#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.dataexchange#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.dataexchange#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetRevisionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRevisionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetRevisionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.Comment != null) {
    contents.Comment = __expectString(data.Comment);
  }
  if (data.CreatedAt != null) {
    contents.CreatedAt = __expectNonNull(__parseRfc3339DateTime(data.CreatedAt));
  }
  if (data.DataSetId != null) {
    contents.DataSetId = __expectString(data.DataSetId);
  }
  if (data.Finalized != null) {
    contents.Finalized = __expectBoolean(data.Finalized);
  }
  if (data.Id != null) {
    contents.Id = __expectString(data.Id);
  }
  if (data.RevocationComment != null) {
    contents.RevocationComment = __expectString(data.RevocationComment);
  }
  if (data.Revoked != null) {
    contents.Revoked = __expectBoolean(data.Revoked);
  }
  if (data.RevokedAt != null) {
    contents.RevokedAt = __expectNonNull(__parseRfc3339DateTime(data.RevokedAt));
  }
  if (data.SourceId != null) {
    contents.SourceId = __expectString(data.SourceId);
  }
  if (data.Tags != null) {
    contents.Tags = deserializeAws_restJson1MapOf__string(data.Tags, context);
  }
  if (data.UpdatedAt != null) {
    contents.UpdatedAt = __expectNonNull(__parseRfc3339DateTime(data.UpdatedAt));
  }
  return contents;
};

const deserializeAws_restJson1GetRevisionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRevisionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.dataexchange#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dataexchange#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.dataexchange#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.dataexchange#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListDataSetRevisionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDataSetRevisionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListDataSetRevisionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Revisions != null) {
    contents.Revisions = deserializeAws_restJson1ListOfRevisionEntry(data.Revisions, context);
  }
  return contents;
};

const deserializeAws_restJson1ListDataSetRevisionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDataSetRevisionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.dataexchange#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dataexchange#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.dataexchange#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.dataexchange#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListDataSetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDataSetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListDataSetsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DataSets != null) {
    contents.DataSets = deserializeAws_restJson1ListOfDataSetEntry(data.DataSets, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListDataSetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDataSetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.dataexchange#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dataexchange#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.dataexchange#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.dataexchange#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListEventActionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEventActionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListEventActionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.EventActions != null) {
    contents.EventActions = deserializeAws_restJson1ListOfEventActionEntry(data.EventActions, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListEventActionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEventActionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.dataexchange#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dataexchange#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.dataexchange#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.dataexchange#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListJobsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Jobs != null) {
    contents.Jobs = deserializeAws_restJson1ListOfJobEntry(data.Jobs, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.dataexchange#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dataexchange#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.dataexchange#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.dataexchange#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListRevisionAssetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRevisionAssetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListRevisionAssetsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Assets != null) {
    contents.Assets = deserializeAws_restJson1ListOfAssetEntry(data.Assets, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListRevisionAssetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRevisionAssetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.dataexchange#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dataexchange#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.dataexchange#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.dataexchange#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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
    contents.Tags = deserializeAws_restJson1MapOf__string(data.tags, context);
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
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restJson1RevokeRevisionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RevokeRevisionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1RevokeRevisionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.Comment != null) {
    contents.Comment = __expectString(data.Comment);
  }
  if (data.CreatedAt != null) {
    contents.CreatedAt = __expectNonNull(__parseRfc3339DateTime(data.CreatedAt));
  }
  if (data.DataSetId != null) {
    contents.DataSetId = __expectString(data.DataSetId);
  }
  if (data.Finalized != null) {
    contents.Finalized = __expectBoolean(data.Finalized);
  }
  if (data.Id != null) {
    contents.Id = __expectString(data.Id);
  }
  if (data.RevocationComment != null) {
    contents.RevocationComment = __expectString(data.RevocationComment);
  }
  if (data.Revoked != null) {
    contents.Revoked = __expectBoolean(data.Revoked);
  }
  if (data.RevokedAt != null) {
    contents.RevokedAt = __expectNonNull(__parseRfc3339DateTime(data.RevokedAt));
  }
  if (data.SourceId != null) {
    contents.SourceId = __expectString(data.SourceId);
  }
  if (data.UpdatedAt != null) {
    contents.UpdatedAt = __expectNonNull(__parseRfc3339DateTime(data.UpdatedAt));
  }
  return contents;
};

const deserializeAws_restJson1RevokeRevisionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RevokeRevisionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.dataexchange#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.dataexchange#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.dataexchange#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dataexchange#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.dataexchange#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.dataexchange#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1SendApiAssetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendApiAssetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1SendApiAssetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    ResponseHeaders: [
      ,
      Object.keys(output.headers)
        .filter((header) => header.startsWith(""))
        .reduce((acc, header) => {
          acc[header.substring(0)] = output.headers[header];
          return acc;
        }, {} as any),
    ],
  });
  const data: any = await collectBodyString(output.body, context);
  contents.Body = __expectString(data);
  return contents;
};

const deserializeAws_restJson1SendApiAssetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendApiAssetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.dataexchange#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.dataexchange#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dataexchange#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.dataexchange#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.dataexchange#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1StartJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartJobCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1StartJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.dataexchange#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.dataexchange#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.dataexchange#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dataexchange#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.dataexchange#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.dataexchange#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
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
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restJson1UpdateAssetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAssetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateAssetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.AssetDetails != null) {
    contents.AssetDetails = deserializeAws_restJson1AssetDetails(data.AssetDetails, context);
  }
  if (data.AssetType != null) {
    contents.AssetType = __expectString(data.AssetType);
  }
  if (data.CreatedAt != null) {
    contents.CreatedAt = __expectNonNull(__parseRfc3339DateTime(data.CreatedAt));
  }
  if (data.DataSetId != null) {
    contents.DataSetId = __expectString(data.DataSetId);
  }
  if (data.Id != null) {
    contents.Id = __expectString(data.Id);
  }
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.RevisionId != null) {
    contents.RevisionId = __expectString(data.RevisionId);
  }
  if (data.SourceId != null) {
    contents.SourceId = __expectString(data.SourceId);
  }
  if (data.UpdatedAt != null) {
    contents.UpdatedAt = __expectNonNull(__parseRfc3339DateTime(data.UpdatedAt));
  }
  return contents;
};

const deserializeAws_restJson1UpdateAssetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAssetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.dataexchange#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.dataexchange#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.dataexchange#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dataexchange#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.dataexchange#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.dataexchange#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateDataSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDataSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateDataSetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.AssetType != null) {
    contents.AssetType = __expectString(data.AssetType);
  }
  if (data.CreatedAt != null) {
    contents.CreatedAt = __expectNonNull(__parseRfc3339DateTime(data.CreatedAt));
  }
  if (data.Description != null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.Id != null) {
    contents.Id = __expectString(data.Id);
  }
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.Origin != null) {
    contents.Origin = __expectString(data.Origin);
  }
  if (data.OriginDetails != null) {
    contents.OriginDetails = deserializeAws_restJson1OriginDetails(data.OriginDetails, context);
  }
  if (data.SourceId != null) {
    contents.SourceId = __expectString(data.SourceId);
  }
  if (data.UpdatedAt != null) {
    contents.UpdatedAt = __expectNonNull(__parseRfc3339DateTime(data.UpdatedAt));
  }
  return contents;
};

const deserializeAws_restJson1UpdateDataSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDataSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.dataexchange#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.dataexchange#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dataexchange#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.dataexchange#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.dataexchange#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateEventActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEventActionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateEventActionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Action != null) {
    contents.Action = deserializeAws_restJson1Action(data.Action, context);
  }
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.CreatedAt != null) {
    contents.CreatedAt = __expectNonNull(__parseRfc3339DateTime(data.CreatedAt));
  }
  if (data.Event != null) {
    contents.Event = deserializeAws_restJson1Event(data.Event, context);
  }
  if (data.Id != null) {
    contents.Id = __expectString(data.Id);
  }
  if (data.UpdatedAt != null) {
    contents.UpdatedAt = __expectNonNull(__parseRfc3339DateTime(data.UpdatedAt));
  }
  return contents;
};

const deserializeAws_restJson1UpdateEventActionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEventActionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.dataexchange#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.dataexchange#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dataexchange#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.dataexchange#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.dataexchange#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateRevisionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRevisionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateRevisionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.Comment != null) {
    contents.Comment = __expectString(data.Comment);
  }
  if (data.CreatedAt != null) {
    contents.CreatedAt = __expectNonNull(__parseRfc3339DateTime(data.CreatedAt));
  }
  if (data.DataSetId != null) {
    contents.DataSetId = __expectString(data.DataSetId);
  }
  if (data.Finalized != null) {
    contents.Finalized = __expectBoolean(data.Finalized);
  }
  if (data.Id != null) {
    contents.Id = __expectString(data.Id);
  }
  if (data.RevocationComment != null) {
    contents.RevocationComment = __expectString(data.RevocationComment);
  }
  if (data.Revoked != null) {
    contents.Revoked = __expectBoolean(data.Revoked);
  }
  if (data.RevokedAt != null) {
    contents.RevokedAt = __expectNonNull(__parseRfc3339DateTime(data.RevokedAt));
  }
  if (data.SourceId != null) {
    contents.SourceId = __expectString(data.SourceId);
  }
  if (data.UpdatedAt != null) {
    contents.UpdatedAt = __expectNonNull(__parseRfc3339DateTime(data.UpdatedAt));
  }
  return contents;
};

const deserializeAws_restJson1UpdateRevisionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRevisionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.dataexchange#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.dataexchange#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.dataexchange#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dataexchange#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.dataexchange#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.dataexchange#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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
const deserializeAws_restJson1AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
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
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.ResourceId != null) {
    contents.ResourceId = __expectString(data.ResourceId);
  }
  if (data.ResourceType != null) {
    contents.ResourceType = __expectString(data.ResourceType);
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
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
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
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.ResourceId != null) {
    contents.ResourceId = __expectString(data.ResourceId);
  }
  if (data.ResourceType != null) {
    contents.ResourceType = __expectString(data.ResourceType);
  }
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ServiceLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceLimitExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.LimitName != null) {
    contents.LimitName = __expectString(data.LimitName);
  }
  if (data.LimitValue != null) {
    contents.LimitValue = __limitedParseDouble(data.LimitValue);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ServiceLimitExceededException({
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
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
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
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.ExceptionCause != null) {
    contents.ExceptionCause = __expectString(data.ExceptionCause);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const serializeAws_restJson1Action = (input: Action, context: __SerdeContext): any => {
  return {
    ...(input.ExportRevisionToS3 != null && {
      ExportRevisionToS3: serializeAws_restJson1AutoExportRevisionToS3RequestDetails(input.ExportRevisionToS3, context),
    }),
  };
};

const serializeAws_restJson1AssetDestinationEntry = (input: AssetDestinationEntry, context: __SerdeContext): any => {
  return {
    ...(input.AssetId != null && { AssetId: input.AssetId }),
    ...(input.Bucket != null && { Bucket: input.Bucket }),
    ...(input.Key != null && { Key: input.Key }),
  };
};

const serializeAws_restJson1AssetSourceEntry = (input: AssetSourceEntry, context: __SerdeContext): any => {
  return {
    ...(input.Bucket != null && { Bucket: input.Bucket }),
    ...(input.Key != null && { Key: input.Key }),
  };
};

const serializeAws_restJson1AutoExportRevisionDestinationEntry = (
  input: AutoExportRevisionDestinationEntry,
  context: __SerdeContext
): any => {
  return {
    ...(input.Bucket != null && { Bucket: input.Bucket }),
    ...(input.KeyPattern != null && { KeyPattern: input.KeyPattern }),
  };
};

const serializeAws_restJson1AutoExportRevisionToS3RequestDetails = (
  input: AutoExportRevisionToS3RequestDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Encryption != null && {
      Encryption: serializeAws_restJson1ExportServerSideEncryption(input.Encryption, context),
    }),
    ...(input.RevisionDestination != null && {
      RevisionDestination: serializeAws_restJson1AutoExportRevisionDestinationEntry(input.RevisionDestination, context),
    }),
  };
};

const serializeAws_restJson1CreateS3DataAccessFromS3BucketRequestDetails = (
  input: CreateS3DataAccessFromS3BucketRequestDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.AssetSource != null && {
      AssetSource: serializeAws_restJson1S3DataAccessAssetSourceEntry(input.AssetSource, context),
    }),
    ...(input.DataSetId != null && { DataSetId: input.DataSetId }),
    ...(input.RevisionId != null && { RevisionId: input.RevisionId }),
  };
};

const serializeAws_restJson1DatabaseLFTagPolicyAndPermissions = (
  input: DatabaseLFTagPolicyAndPermissions,
  context: __SerdeContext
): any => {
  return {
    ...(input.Expression != null && { Expression: serializeAws_restJson1ListOfLFTags(input.Expression, context) }),
    ...(input.Permissions != null && {
      Permissions: serializeAws_restJson1ListOfDatabaseLFTagPolicyPermissions(input.Permissions, context),
    }),
  };
};

const serializeAws_restJson1Event = (input: Event, context: __SerdeContext): any => {
  return {
    ...(input.RevisionPublished != null && {
      RevisionPublished: serializeAws_restJson1RevisionPublished(input.RevisionPublished, context),
    }),
  };
};

const serializeAws_restJson1ExportAssetsToS3RequestDetails = (
  input: ExportAssetsToS3RequestDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.AssetDestinations != null && {
      AssetDestinations: serializeAws_restJson1ListOfAssetDestinationEntry(input.AssetDestinations, context),
    }),
    ...(input.DataSetId != null && { DataSetId: input.DataSetId }),
    ...(input.Encryption != null && {
      Encryption: serializeAws_restJson1ExportServerSideEncryption(input.Encryption, context),
    }),
    ...(input.RevisionId != null && { RevisionId: input.RevisionId }),
  };
};

const serializeAws_restJson1ExportAssetToSignedUrlRequestDetails = (
  input: ExportAssetToSignedUrlRequestDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.AssetId != null && { AssetId: input.AssetId }),
    ...(input.DataSetId != null && { DataSetId: input.DataSetId }),
    ...(input.RevisionId != null && { RevisionId: input.RevisionId }),
  };
};

const serializeAws_restJson1ExportRevisionsToS3RequestDetails = (
  input: ExportRevisionsToS3RequestDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.DataSetId != null && { DataSetId: input.DataSetId }),
    ...(input.Encryption != null && {
      Encryption: serializeAws_restJson1ExportServerSideEncryption(input.Encryption, context),
    }),
    ...(input.RevisionDestinations != null && {
      RevisionDestinations: serializeAws_restJson1ListOfRevisionDestinationEntry(input.RevisionDestinations, context),
    }),
  };
};

const serializeAws_restJson1ExportServerSideEncryption = (
  input: ExportServerSideEncryption,
  context: __SerdeContext
): any => {
  return {
    ...(input.KmsKeyArn != null && { KmsKeyArn: input.KmsKeyArn }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

const serializeAws_restJson1ImportAssetFromApiGatewayApiRequestDetails = (
  input: ImportAssetFromApiGatewayApiRequestDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApiDescription != null && { ApiDescription: input.ApiDescription }),
    ...(input.ApiId != null && { ApiId: input.ApiId }),
    ...(input.ApiKey != null && { ApiKey: input.ApiKey }),
    ...(input.ApiName != null && { ApiName: input.ApiName }),
    ...(input.ApiSpecificationMd5Hash != null && { ApiSpecificationMd5Hash: input.ApiSpecificationMd5Hash }),
    ...(input.DataSetId != null && { DataSetId: input.DataSetId }),
    ...(input.ProtocolType != null && { ProtocolType: input.ProtocolType }),
    ...(input.RevisionId != null && { RevisionId: input.RevisionId }),
    ...(input.Stage != null && { Stage: input.Stage }),
  };
};

const serializeAws_restJson1ImportAssetFromSignedUrlRequestDetails = (
  input: ImportAssetFromSignedUrlRequestDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.AssetName != null && { AssetName: input.AssetName }),
    ...(input.DataSetId != null && { DataSetId: input.DataSetId }),
    ...(input.Md5Hash != null && { Md5Hash: input.Md5Hash }),
    ...(input.RevisionId != null && { RevisionId: input.RevisionId }),
  };
};

const serializeAws_restJson1ImportAssetsFromLakeFormationTagPolicyRequestDetails = (
  input: ImportAssetsFromLakeFormationTagPolicyRequestDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.CatalogId != null && { CatalogId: input.CatalogId }),
    ...(input.DataSetId != null && { DataSetId: input.DataSetId }),
    ...(input.Database != null && {
      Database: serializeAws_restJson1DatabaseLFTagPolicyAndPermissions(input.Database, context),
    }),
    ...(input.RevisionId != null && { RevisionId: input.RevisionId }),
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
    ...(input.Table != null && { Table: serializeAws_restJson1TableLFTagPolicyAndPermissions(input.Table, context) }),
  };
};

const serializeAws_restJson1ImportAssetsFromRedshiftDataSharesRequestDetails = (
  input: ImportAssetsFromRedshiftDataSharesRequestDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.AssetSources != null && {
      AssetSources: serializeAws_restJson1ListOfRedshiftDataShareAssetSourceEntry(input.AssetSources, context),
    }),
    ...(input.DataSetId != null && { DataSetId: input.DataSetId }),
    ...(input.RevisionId != null && { RevisionId: input.RevisionId }),
  };
};

const serializeAws_restJson1ImportAssetsFromS3RequestDetails = (
  input: ImportAssetsFromS3RequestDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.AssetSources != null && {
      AssetSources: serializeAws_restJson1ListOfAssetSourceEntry(input.AssetSources, context),
    }),
    ...(input.DataSetId != null && { DataSetId: input.DataSetId }),
    ...(input.RevisionId != null && { RevisionId: input.RevisionId }),
  };
};

const serializeAws_restJson1LFTag = (input: LFTag, context: __SerdeContext): any => {
  return {
    ...(input.TagKey != null && { TagKey: input.TagKey }),
    ...(input.TagValues != null && { TagValues: serializeAws_restJson1ListOfLFTagValues(input.TagValues, context) }),
  };
};

const serializeAws_restJson1ListOf__string = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1ListOfAssetDestinationEntry = (
  input: AssetDestinationEntry[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AssetDestinationEntry(entry, context);
    });
};

const serializeAws_restJson1ListOfAssetSourceEntry = (input: AssetSourceEntry[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AssetSourceEntry(entry, context);
    });
};

const serializeAws_restJson1ListOfDatabaseLFTagPolicyPermissions = (
  input: (DatabaseLFTagPolicyPermission | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1ListOfLFTags = (input: LFTag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1LFTag(entry, context);
    });
};

const serializeAws_restJson1ListOfLFTagValues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1ListOfRedshiftDataShareAssetSourceEntry = (
  input: RedshiftDataShareAssetSourceEntry[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1RedshiftDataShareAssetSourceEntry(entry, context);
    });
};

const serializeAws_restJson1ListOfRevisionDestinationEntry = (
  input: RevisionDestinationEntry[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1RevisionDestinationEntry(entry, context);
    });
};

const serializeAws_restJson1ListOfTableTagPolicyLFPermissions = (
  input: (TableTagPolicyLFPermission | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1MapOf__string = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1RedshiftDataShareAssetSourceEntry = (
  input: RedshiftDataShareAssetSourceEntry,
  context: __SerdeContext
): any => {
  return {
    ...(input.DataShareArn != null && { DataShareArn: input.DataShareArn }),
  };
};

const serializeAws_restJson1RequestDetails = (input: RequestDetails, context: __SerdeContext): any => {
  return {
    ...(input.CreateS3DataAccessFromS3Bucket != null && {
      CreateS3DataAccessFromS3Bucket: serializeAws_restJson1CreateS3DataAccessFromS3BucketRequestDetails(
        input.CreateS3DataAccessFromS3Bucket,
        context
      ),
    }),
    ...(input.ExportAssetToSignedUrl != null && {
      ExportAssetToSignedUrl: serializeAws_restJson1ExportAssetToSignedUrlRequestDetails(
        input.ExportAssetToSignedUrl,
        context
      ),
    }),
    ...(input.ExportAssetsToS3 != null && {
      ExportAssetsToS3: serializeAws_restJson1ExportAssetsToS3RequestDetails(input.ExportAssetsToS3, context),
    }),
    ...(input.ExportRevisionsToS3 != null && {
      ExportRevisionsToS3: serializeAws_restJson1ExportRevisionsToS3RequestDetails(input.ExportRevisionsToS3, context),
    }),
    ...(input.ImportAssetFromApiGatewayApi != null && {
      ImportAssetFromApiGatewayApi: serializeAws_restJson1ImportAssetFromApiGatewayApiRequestDetails(
        input.ImportAssetFromApiGatewayApi,
        context
      ),
    }),
    ...(input.ImportAssetFromSignedUrl != null && {
      ImportAssetFromSignedUrl: serializeAws_restJson1ImportAssetFromSignedUrlRequestDetails(
        input.ImportAssetFromSignedUrl,
        context
      ),
    }),
    ...(input.ImportAssetsFromLakeFormationTagPolicy != null && {
      ImportAssetsFromLakeFormationTagPolicy:
        serializeAws_restJson1ImportAssetsFromLakeFormationTagPolicyRequestDetails(
          input.ImportAssetsFromLakeFormationTagPolicy,
          context
        ),
    }),
    ...(input.ImportAssetsFromRedshiftDataShares != null && {
      ImportAssetsFromRedshiftDataShares: serializeAws_restJson1ImportAssetsFromRedshiftDataSharesRequestDetails(
        input.ImportAssetsFromRedshiftDataShares,
        context
      ),
    }),
    ...(input.ImportAssetsFromS3 != null && {
      ImportAssetsFromS3: serializeAws_restJson1ImportAssetsFromS3RequestDetails(input.ImportAssetsFromS3, context),
    }),
  };
};

const serializeAws_restJson1RevisionDestinationEntry = (
  input: RevisionDestinationEntry,
  context: __SerdeContext
): any => {
  return {
    ...(input.Bucket != null && { Bucket: input.Bucket }),
    ...(input.KeyPattern != null && { KeyPattern: input.KeyPattern }),
    ...(input.RevisionId != null && { RevisionId: input.RevisionId }),
  };
};

const serializeAws_restJson1RevisionPublished = (input: RevisionPublished, context: __SerdeContext): any => {
  return {
    ...(input.DataSetId != null && { DataSetId: input.DataSetId }),
  };
};

const serializeAws_restJson1S3DataAccessAssetSourceEntry = (
  input: S3DataAccessAssetSourceEntry,
  context: __SerdeContext
): any => {
  return {
    ...(input.Bucket != null && { Bucket: input.Bucket }),
    ...(input.KeyPrefixes != null && { KeyPrefixes: serializeAws_restJson1ListOf__string(input.KeyPrefixes, context) }),
    ...(input.Keys != null && { Keys: serializeAws_restJson1ListOf__string(input.Keys, context) }),
  };
};

const serializeAws_restJson1TableLFTagPolicyAndPermissions = (
  input: TableLFTagPolicyAndPermissions,
  context: __SerdeContext
): any => {
  return {
    ...(input.Expression != null && { Expression: serializeAws_restJson1ListOfLFTags(input.Expression, context) }),
    ...(input.Permissions != null && {
      Permissions: serializeAws_restJson1ListOfTableTagPolicyLFPermissions(input.Permissions, context),
    }),
  };
};

const deserializeAws_restJson1Action = (output: any, context: __SerdeContext): Action => {
  return {
    ExportRevisionToS3:
      output.ExportRevisionToS3 != null
        ? deserializeAws_restJson1AutoExportRevisionToS3RequestDetails(output.ExportRevisionToS3, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ApiGatewayApiAsset = (output: any, context: __SerdeContext): ApiGatewayApiAsset => {
  return {
    ApiDescription: __expectString(output.ApiDescription),
    ApiEndpoint: __expectString(output.ApiEndpoint),
    ApiId: __expectString(output.ApiId),
    ApiKey: __expectString(output.ApiKey),
    ApiName: __expectString(output.ApiName),
    ApiSpecificationDownloadUrl: __expectString(output.ApiSpecificationDownloadUrl),
    ApiSpecificationDownloadUrlExpiresAt:
      output.ApiSpecificationDownloadUrlExpiresAt != null
        ? __expectNonNull(__parseRfc3339DateTime(output.ApiSpecificationDownloadUrlExpiresAt))
        : undefined,
    ProtocolType: __expectString(output.ProtocolType),
    Stage: __expectString(output.Stage),
  } as any;
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
    ApiGatewayApiAsset:
      output.ApiGatewayApiAsset != null
        ? deserializeAws_restJson1ApiGatewayApiAsset(output.ApiGatewayApiAsset, context)
        : undefined,
    LakeFormationDataPermissionAsset:
      output.LakeFormationDataPermissionAsset != null
        ? deserializeAws_restJson1LakeFormationDataPermissionAsset(output.LakeFormationDataPermissionAsset, context)
        : undefined,
    RedshiftDataShareAsset:
      output.RedshiftDataShareAsset != null
        ? deserializeAws_restJson1RedshiftDataShareAsset(output.RedshiftDataShareAsset, context)
        : undefined,
    S3DataAccessAsset:
      output.S3DataAccessAsset != null
        ? deserializeAws_restJson1S3DataAccessAsset(output.S3DataAccessAsset, context)
        : undefined,
    S3SnapshotAsset:
      output.S3SnapshotAsset != null
        ? deserializeAws_restJson1S3SnapshotAsset(output.S3SnapshotAsset, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AssetEntry = (output: any, context: __SerdeContext): AssetEntry => {
  return {
    Arn: __expectString(output.Arn),
    AssetDetails:
      output.AssetDetails != null ? deserializeAws_restJson1AssetDetails(output.AssetDetails, context) : undefined,
    AssetType: __expectString(output.AssetType),
    CreatedAt: output.CreatedAt != null ? __expectNonNull(__parseRfc3339DateTime(output.CreatedAt)) : undefined,
    DataSetId: __expectString(output.DataSetId),
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
    RevisionId: __expectString(output.RevisionId),
    SourceId: __expectString(output.SourceId),
    UpdatedAt: output.UpdatedAt != null ? __expectNonNull(__parseRfc3339DateTime(output.UpdatedAt)) : undefined,
  } as any;
};

const deserializeAws_restJson1AssetSourceEntry = (output: any, context: __SerdeContext): AssetSourceEntry => {
  return {
    Bucket: __expectString(output.Bucket),
    Key: __expectString(output.Key),
  } as any;
};

const deserializeAws_restJson1AutoExportRevisionDestinationEntry = (
  output: any,
  context: __SerdeContext
): AutoExportRevisionDestinationEntry => {
  return {
    Bucket: __expectString(output.Bucket),
    KeyPattern: __expectString(output.KeyPattern),
  } as any;
};

const deserializeAws_restJson1AutoExportRevisionToS3RequestDetails = (
  output: any,
  context: __SerdeContext
): AutoExportRevisionToS3RequestDetails => {
  return {
    Encryption:
      output.Encryption != null
        ? deserializeAws_restJson1ExportServerSideEncryption(output.Encryption, context)
        : undefined,
    RevisionDestination:
      output.RevisionDestination != null
        ? deserializeAws_restJson1AutoExportRevisionDestinationEntry(output.RevisionDestination, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1CreateS3DataAccessFromS3BucketResponseDetails = (
  output: any,
  context: __SerdeContext
): CreateS3DataAccessFromS3BucketResponseDetails => {
  return {
    AssetSource:
      output.AssetSource != null
        ? deserializeAws_restJson1S3DataAccessAssetSourceEntry(output.AssetSource, context)
        : undefined,
    DataSetId: __expectString(output.DataSetId),
    RevisionId: __expectString(output.RevisionId),
  } as any;
};

const deserializeAws_restJson1DatabaseLFTagPolicy = (output: any, context: __SerdeContext): DatabaseLFTagPolicy => {
  return {
    Expression:
      output.Expression != null ? deserializeAws_restJson1ListOfLFTags(output.Expression, context) : undefined,
  } as any;
};

const deserializeAws_restJson1DatabaseLFTagPolicyAndPermissions = (
  output: any,
  context: __SerdeContext
): DatabaseLFTagPolicyAndPermissions => {
  return {
    Expression:
      output.Expression != null ? deserializeAws_restJson1ListOfLFTags(output.Expression, context) : undefined,
    Permissions:
      output.Permissions != null
        ? deserializeAws_restJson1ListOfDatabaseLFTagPolicyPermissions(output.Permissions, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1DataSetEntry = (output: any, context: __SerdeContext): DataSetEntry => {
  return {
    Arn: __expectString(output.Arn),
    AssetType: __expectString(output.AssetType),
    CreatedAt: output.CreatedAt != null ? __expectNonNull(__parseRfc3339DateTime(output.CreatedAt)) : undefined,
    Description: __expectString(output.Description),
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
    Origin: __expectString(output.Origin),
    OriginDetails:
      output.OriginDetails != null ? deserializeAws_restJson1OriginDetails(output.OriginDetails, context) : undefined,
    SourceId: __expectString(output.SourceId),
    UpdatedAt: output.UpdatedAt != null ? __expectNonNull(__parseRfc3339DateTime(output.UpdatedAt)) : undefined,
  } as any;
};

const deserializeAws_restJson1Details = (output: any, context: __SerdeContext): Details => {
  return {
    ImportAssetFromSignedUrlJobErrorDetails:
      output.ImportAssetFromSignedUrlJobErrorDetails != null
        ? deserializeAws_restJson1ImportAssetFromSignedUrlJobErrorDetails(
            output.ImportAssetFromSignedUrlJobErrorDetails,
            context
          )
        : undefined,
    ImportAssetsFromS3JobErrorDetails:
      output.ImportAssetsFromS3JobErrorDetails != null
        ? deserializeAws_restJson1ListOfAssetSourceEntry(output.ImportAssetsFromS3JobErrorDetails, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1Event = (output: any, context: __SerdeContext): Event => {
  return {
    RevisionPublished:
      output.RevisionPublished != null
        ? deserializeAws_restJson1RevisionPublished(output.RevisionPublished, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1EventActionEntry = (output: any, context: __SerdeContext): EventActionEntry => {
  return {
    Action: output.Action != null ? deserializeAws_restJson1Action(output.Action, context) : undefined,
    Arn: __expectString(output.Arn),
    CreatedAt: output.CreatedAt != null ? __expectNonNull(__parseRfc3339DateTime(output.CreatedAt)) : undefined,
    Event: output.Event != null ? deserializeAws_restJson1Event(output.Event, context) : undefined,
    Id: __expectString(output.Id),
    UpdatedAt: output.UpdatedAt != null ? __expectNonNull(__parseRfc3339DateTime(output.UpdatedAt)) : undefined,
  } as any;
};

const deserializeAws_restJson1ExportAssetsToS3ResponseDetails = (
  output: any,
  context: __SerdeContext
): ExportAssetsToS3ResponseDetails => {
  return {
    AssetDestinations:
      output.AssetDestinations != null
        ? deserializeAws_restJson1ListOfAssetDestinationEntry(output.AssetDestinations, context)
        : undefined,
    DataSetId: __expectString(output.DataSetId),
    Encryption:
      output.Encryption != null
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
      output.SignedUrlExpiresAt != null
        ? __expectNonNull(__parseRfc3339DateTime(output.SignedUrlExpiresAt))
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
      output.Encryption != null
        ? deserializeAws_restJson1ExportServerSideEncryption(output.Encryption, context)
        : undefined,
    EventActionArn: __expectString(output.EventActionArn),
    RevisionDestinations:
      output.RevisionDestinations != null
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

const deserializeAws_restJson1ImportAssetFromApiGatewayApiResponseDetails = (
  output: any,
  context: __SerdeContext
): ImportAssetFromApiGatewayApiResponseDetails => {
  return {
    ApiDescription: __expectString(output.ApiDescription),
    ApiId: __expectString(output.ApiId),
    ApiKey: __expectString(output.ApiKey),
    ApiName: __expectString(output.ApiName),
    ApiSpecificationMd5Hash: __expectString(output.ApiSpecificationMd5Hash),
    ApiSpecificationUploadUrl: __expectString(output.ApiSpecificationUploadUrl),
    ApiSpecificationUploadUrlExpiresAt:
      output.ApiSpecificationUploadUrlExpiresAt != null
        ? __expectNonNull(__parseRfc3339DateTime(output.ApiSpecificationUploadUrlExpiresAt))
        : undefined,
    DataSetId: __expectString(output.DataSetId),
    ProtocolType: __expectString(output.ProtocolType),
    RevisionId: __expectString(output.RevisionId),
    Stage: __expectString(output.Stage),
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
      output.SignedUrlExpiresAt != null
        ? __expectNonNull(__parseRfc3339DateTime(output.SignedUrlExpiresAt))
        : undefined,
  } as any;
};

const deserializeAws_restJson1ImportAssetsFromLakeFormationTagPolicyResponseDetails = (
  output: any,
  context: __SerdeContext
): ImportAssetsFromLakeFormationTagPolicyResponseDetails => {
  return {
    CatalogId: __expectString(output.CatalogId),
    DataSetId: __expectString(output.DataSetId),
    Database:
      output.Database != null
        ? deserializeAws_restJson1DatabaseLFTagPolicyAndPermissions(output.Database, context)
        : undefined,
    RevisionId: __expectString(output.RevisionId),
    RoleArn: __expectString(output.RoleArn),
    Table:
      output.Table != null ? deserializeAws_restJson1TableLFTagPolicyAndPermissions(output.Table, context) : undefined,
  } as any;
};

const deserializeAws_restJson1ImportAssetsFromRedshiftDataSharesResponseDetails = (
  output: any,
  context: __SerdeContext
): ImportAssetsFromRedshiftDataSharesResponseDetails => {
  return {
    AssetSources:
      output.AssetSources != null
        ? deserializeAws_restJson1ListOfRedshiftDataShareAssetSourceEntry(output.AssetSources, context)
        : undefined,
    DataSetId: __expectString(output.DataSetId),
    RevisionId: __expectString(output.RevisionId),
  } as any;
};

const deserializeAws_restJson1ImportAssetsFromS3ResponseDetails = (
  output: any,
  context: __SerdeContext
): ImportAssetsFromS3ResponseDetails => {
  return {
    AssetSources:
      output.AssetSources != null
        ? deserializeAws_restJson1ListOfAssetSourceEntry(output.AssetSources, context)
        : undefined,
    DataSetId: __expectString(output.DataSetId),
    RevisionId: __expectString(output.RevisionId),
  } as any;
};

const deserializeAws_restJson1JobEntry = (output: any, context: __SerdeContext): JobEntry => {
  return {
    Arn: __expectString(output.Arn),
    CreatedAt: output.CreatedAt != null ? __expectNonNull(__parseRfc3339DateTime(output.CreatedAt)) : undefined,
    Details: output.Details != null ? deserializeAws_restJson1ResponseDetails(output.Details, context) : undefined,
    Errors: output.Errors != null ? deserializeAws_restJson1ListOfJobError(output.Errors, context) : undefined,
    Id: __expectString(output.Id),
    State: __expectString(output.State),
    Type: __expectString(output.Type),
    UpdatedAt: output.UpdatedAt != null ? __expectNonNull(__parseRfc3339DateTime(output.UpdatedAt)) : undefined,
  } as any;
};

const deserializeAws_restJson1JobError = (output: any, context: __SerdeContext): JobError => {
  return {
    Code: __expectString(output.Code),
    Details: output.Details != null ? deserializeAws_restJson1Details(output.Details, context) : undefined,
    LimitName: __expectString(output.LimitName),
    LimitValue: __limitedParseDouble(output.LimitValue),
    Message: __expectString(output.Message),
    ResourceId: __expectString(output.ResourceId),
    ResourceType: __expectString(output.ResourceType),
  } as any;
};

const deserializeAws_restJson1LakeFormationDataPermissionAsset = (
  output: any,
  context: __SerdeContext
): LakeFormationDataPermissionAsset => {
  return {
    LakeFormationDataPermissionDetails:
      output.LakeFormationDataPermissionDetails != null
        ? deserializeAws_restJson1LakeFormationDataPermissionDetails(output.LakeFormationDataPermissionDetails, context)
        : undefined,
    LakeFormationDataPermissionType: __expectString(output.LakeFormationDataPermissionType),
    Permissions:
      output.Permissions != null ? deserializeAws_restJson1ListOfLFPermissions(output.Permissions, context) : undefined,
    RoleArn: __expectString(output.RoleArn),
  } as any;
};

const deserializeAws_restJson1LakeFormationDataPermissionDetails = (
  output: any,
  context: __SerdeContext
): LakeFormationDataPermissionDetails => {
  return {
    LFTagPolicy:
      output.LFTagPolicy != null ? deserializeAws_restJson1LFTagPolicyDetails(output.LFTagPolicy, context) : undefined,
  } as any;
};

const deserializeAws_restJson1LFResourceDetails = (output: any, context: __SerdeContext): LFResourceDetails => {
  return {
    Database:
      output.Database != null ? deserializeAws_restJson1DatabaseLFTagPolicy(output.Database, context) : undefined,
    Table: output.Table != null ? deserializeAws_restJson1TableLFTagPolicy(output.Table, context) : undefined,
  } as any;
};

const deserializeAws_restJson1LFTag = (output: any, context: __SerdeContext): LFTag => {
  return {
    TagKey: __expectString(output.TagKey),
    TagValues:
      output.TagValues != null ? deserializeAws_restJson1ListOfLFTagValues(output.TagValues, context) : undefined,
  } as any;
};

const deserializeAws_restJson1LFTagPolicyDetails = (output: any, context: __SerdeContext): LFTagPolicyDetails => {
  return {
    CatalogId: __expectString(output.CatalogId),
    ResourceDetails:
      output.ResourceDetails != null
        ? deserializeAws_restJson1LFResourceDetails(output.ResourceDetails, context)
        : undefined,
    ResourceType: __expectString(output.ResourceType),
  } as any;
};

const deserializeAws_restJson1ListOf__string = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1ListOfAssetDestinationEntry = (
  output: any,
  context: __SerdeContext
): AssetDestinationEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AssetDestinationEntry(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ListOfAssetEntry = (output: any, context: __SerdeContext): AssetEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AssetEntry(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ListOfAssetSourceEntry = (output: any, context: __SerdeContext): AssetSourceEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AssetSourceEntry(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ListOfDatabaseLFTagPolicyPermissions = (
  output: any,
  context: __SerdeContext
): (DatabaseLFTagPolicyPermission | string)[] => {
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

const deserializeAws_restJson1ListOfDataSetEntry = (output: any, context: __SerdeContext): DataSetEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DataSetEntry(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ListOfEventActionEntry = (output: any, context: __SerdeContext): EventActionEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1EventActionEntry(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ListOfJobEntry = (output: any, context: __SerdeContext): JobEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1JobEntry(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ListOfJobError = (output: any, context: __SerdeContext): JobError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1JobError(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ListOfLFPermissions = (
  output: any,
  context: __SerdeContext
): (LFPermission | string)[] => {
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

const deserializeAws_restJson1ListOfLFTags = (output: any, context: __SerdeContext): LFTag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1LFTag(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ListOfLFTagValues = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1ListOfRedshiftDataShareAssetSourceEntry = (
  output: any,
  context: __SerdeContext
): RedshiftDataShareAssetSourceEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1RedshiftDataShareAssetSourceEntry(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ListOfRevisionDestinationEntry = (
  output: any,
  context: __SerdeContext
): RevisionDestinationEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1RevisionDestinationEntry(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ListOfRevisionEntry = (output: any, context: __SerdeContext): RevisionEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1RevisionEntry(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ListOfTableTagPolicyLFPermissions = (
  output: any,
  context: __SerdeContext
): (TableTagPolicyLFPermission | string)[] => {
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

const deserializeAws_restJson1MapOf__string = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1OriginDetails = (output: any, context: __SerdeContext): OriginDetails => {
  return {
    ProductId: __expectString(output.ProductId),
  } as any;
};

const deserializeAws_restJson1RedshiftDataShareAsset = (
  output: any,
  context: __SerdeContext
): RedshiftDataShareAsset => {
  return {
    Arn: __expectString(output.Arn),
  } as any;
};

const deserializeAws_restJson1RedshiftDataShareAssetSourceEntry = (
  output: any,
  context: __SerdeContext
): RedshiftDataShareAssetSourceEntry => {
  return {
    DataShareArn: __expectString(output.DataShareArn),
  } as any;
};

const deserializeAws_restJson1ResponseDetails = (output: any, context: __SerdeContext): ResponseDetails => {
  return {
    CreateS3DataAccessFromS3Bucket:
      output.CreateS3DataAccessFromS3Bucket != null
        ? deserializeAws_restJson1CreateS3DataAccessFromS3BucketResponseDetails(
            output.CreateS3DataAccessFromS3Bucket,
            context
          )
        : undefined,
    ExportAssetToSignedUrl:
      output.ExportAssetToSignedUrl != null
        ? deserializeAws_restJson1ExportAssetToSignedUrlResponseDetails(output.ExportAssetToSignedUrl, context)
        : undefined,
    ExportAssetsToS3:
      output.ExportAssetsToS3 != null
        ? deserializeAws_restJson1ExportAssetsToS3ResponseDetails(output.ExportAssetsToS3, context)
        : undefined,
    ExportRevisionsToS3:
      output.ExportRevisionsToS3 != null
        ? deserializeAws_restJson1ExportRevisionsToS3ResponseDetails(output.ExportRevisionsToS3, context)
        : undefined,
    ImportAssetFromApiGatewayApi:
      output.ImportAssetFromApiGatewayApi != null
        ? deserializeAws_restJson1ImportAssetFromApiGatewayApiResponseDetails(
            output.ImportAssetFromApiGatewayApi,
            context
          )
        : undefined,
    ImportAssetFromSignedUrl:
      output.ImportAssetFromSignedUrl != null
        ? deserializeAws_restJson1ImportAssetFromSignedUrlResponseDetails(output.ImportAssetFromSignedUrl, context)
        : undefined,
    ImportAssetsFromLakeFormationTagPolicy:
      output.ImportAssetsFromLakeFormationTagPolicy != null
        ? deserializeAws_restJson1ImportAssetsFromLakeFormationTagPolicyResponseDetails(
            output.ImportAssetsFromLakeFormationTagPolicy,
            context
          )
        : undefined,
    ImportAssetsFromRedshiftDataShares:
      output.ImportAssetsFromRedshiftDataShares != null
        ? deserializeAws_restJson1ImportAssetsFromRedshiftDataSharesResponseDetails(
            output.ImportAssetsFromRedshiftDataShares,
            context
          )
        : undefined,
    ImportAssetsFromS3:
      output.ImportAssetsFromS3 != null
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
    CreatedAt: output.CreatedAt != null ? __expectNonNull(__parseRfc3339DateTime(output.CreatedAt)) : undefined,
    DataSetId: __expectString(output.DataSetId),
    Finalized: __expectBoolean(output.Finalized),
    Id: __expectString(output.Id),
    RevocationComment: __expectString(output.RevocationComment),
    Revoked: __expectBoolean(output.Revoked),
    RevokedAt: output.RevokedAt != null ? __expectNonNull(__parseRfc3339DateTime(output.RevokedAt)) : undefined,
    SourceId: __expectString(output.SourceId),
    UpdatedAt: output.UpdatedAt != null ? __expectNonNull(__parseRfc3339DateTime(output.UpdatedAt)) : undefined,
  } as any;
};

const deserializeAws_restJson1RevisionPublished = (output: any, context: __SerdeContext): RevisionPublished => {
  return {
    DataSetId: __expectString(output.DataSetId),
  } as any;
};

const deserializeAws_restJson1S3DataAccessAsset = (output: any, context: __SerdeContext): S3DataAccessAsset => {
  return {
    Bucket: __expectString(output.Bucket),
    KeyPrefixes:
      output.KeyPrefixes != null ? deserializeAws_restJson1ListOf__string(output.KeyPrefixes, context) : undefined,
    Keys: output.Keys != null ? deserializeAws_restJson1ListOf__string(output.Keys, context) : undefined,
    S3AccessPointAlias: __expectString(output.S3AccessPointAlias),
    S3AccessPointArn: __expectString(output.S3AccessPointArn),
  } as any;
};

const deserializeAws_restJson1S3DataAccessAssetSourceEntry = (
  output: any,
  context: __SerdeContext
): S3DataAccessAssetSourceEntry => {
  return {
    Bucket: __expectString(output.Bucket),
    KeyPrefixes:
      output.KeyPrefixes != null ? deserializeAws_restJson1ListOf__string(output.KeyPrefixes, context) : undefined,
    Keys: output.Keys != null ? deserializeAws_restJson1ListOf__string(output.Keys, context) : undefined,
  } as any;
};

const deserializeAws_restJson1S3SnapshotAsset = (output: any, context: __SerdeContext): S3SnapshotAsset => {
  return {
    Size: __limitedParseDouble(output.Size),
  } as any;
};

const deserializeAws_restJson1TableLFTagPolicy = (output: any, context: __SerdeContext): TableLFTagPolicy => {
  return {
    Expression:
      output.Expression != null ? deserializeAws_restJson1ListOfLFTags(output.Expression, context) : undefined,
  } as any;
};

const deserializeAws_restJson1TableLFTagPolicyAndPermissions = (
  output: any,
  context: __SerdeContext
): TableLFTagPolicyAndPermissions => {
  return {
    Expression:
      output.Expression != null ? deserializeAws_restJson1ListOfLFTags(output.Expression, context) : undefined,
    Permissions:
      output.Permissions != null
        ? deserializeAws_restJson1ListOfTableTagPolicyLFPermissions(output.Permissions, context)
        : undefined,
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
