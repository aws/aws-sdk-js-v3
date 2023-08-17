// smithy-typescript generated code
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse,
  isValidHostname as __isValidHostname,
} from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  convertMap,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  limitedParseDouble as __limitedParseDouble,
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
  DatabaseLFTagPolicyAndPermissions,
  DatabaseLFTagPolicyPermission,
  DataSetEntry,
  Event,
  EventActionEntry,
  ExportAssetsToS3RequestDetails,
  ExportAssetToSignedUrlRequestDetails,
  ExportAssetToSignedUrlResponseDetails,
  ExportRevisionsToS3RequestDetails,
  ExportServerSideEncryption,
  ImportAssetFromApiGatewayApiRequestDetails,
  ImportAssetFromApiGatewayApiResponseDetails,
  ImportAssetFromSignedUrlRequestDetails,
  ImportAssetFromSignedUrlResponseDetails,
  ImportAssetsFromLakeFormationTagPolicyRequestDetails,
  ImportAssetsFromRedshiftDataSharesRequestDetails,
  ImportAssetsFromS3RequestDetails,
  InternalServerException,
  JobEntry,
  JobError,
  KmsKeyToGrant,
  LFTag,
  RedshiftDataShareAssetSourceEntry,
  RequestDetails,
  ResourceNotFoundException,
  ResponseDetails,
  RevisionDestinationEntry,
  RevisionEntry,
  RevisionPublished,
  S3DataAccessAssetSourceEntry,
  S3SnapshotAsset,
  ServiceLimitExceededException,
  TableLFTagPolicyAndPermissions,
  TableTagPolicyLFPermission,
  ThrottlingException,
  ValidationException,
} from "../models/models_0";

/**
 * serializeAws_restJson1CancelJobCommand
 */
export const se_CancelJobCommand = async (
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

/**
 * serializeAws_restJson1CreateDataSetCommand
 */
export const se_CreateDataSetCommand = async (
  input: CreateDataSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/data-sets";
  let body: any;
  body = JSON.stringify(
    take(input, {
      AssetType: [],
      Description: [],
      Name: [],
      Tags: (_) => _json(_),
    })
  );
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
 * serializeAws_restJson1CreateEventActionCommand
 */
export const se_CreateEventActionCommand = async (
  input: CreateEventActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/event-actions";
  let body: any;
  body = JSON.stringify(
    take(input, {
      Action: (_) => _json(_),
      Event: (_) => _json(_),
    })
  );
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
 * serializeAws_restJson1CreateJobCommand
 */
export const se_CreateJobCommand = async (
  input: CreateJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/jobs";
  let body: any;
  body = JSON.stringify(
    take(input, {
      Details: (_) => _json(_),
      Type: [],
    })
  );
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
 * serializeAws_restJson1CreateRevisionCommand
 */
export const se_CreateRevisionCommand = async (
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
  body = JSON.stringify(
    take(input, {
      Comment: [],
      Tags: (_) => _json(_),
    })
  );
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
 * serializeAws_restJson1DeleteAssetCommand
 */
export const se_DeleteAssetCommand = async (
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

/**
 * serializeAws_restJson1DeleteDataSetCommand
 */
export const se_DeleteDataSetCommand = async (
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

/**
 * serializeAws_restJson1DeleteEventActionCommand
 */
export const se_DeleteEventActionCommand = async (
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

/**
 * serializeAws_restJson1DeleteRevisionCommand
 */
export const se_DeleteRevisionCommand = async (
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

/**
 * serializeAws_restJson1GetAssetCommand
 */
export const se_GetAssetCommand = async (
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

/**
 * serializeAws_restJson1GetDataSetCommand
 */
export const se_GetDataSetCommand = async (
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

/**
 * serializeAws_restJson1GetEventActionCommand
 */
export const se_GetEventActionCommand = async (
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

/**
 * serializeAws_restJson1GetJobCommand
 */
export const se_GetJobCommand = async (input: GetJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> => {
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

/**
 * serializeAws_restJson1GetRevisionCommand
 */
export const se_GetRevisionCommand = async (
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

/**
 * serializeAws_restJson1ListDataSetRevisionsCommand
 */
export const se_ListDataSetRevisionsCommand = async (
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

/**
 * serializeAws_restJson1ListDataSetsCommand
 */
export const se_ListDataSetsCommand = async (
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

/**
 * serializeAws_restJson1ListEventActionsCommand
 */
export const se_ListEventActionsCommand = async (
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

/**
 * serializeAws_restJson1ListJobsCommand
 */
export const se_ListJobsCommand = async (
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

/**
 * serializeAws_restJson1ListRevisionAssetsCommand
 */
export const se_ListRevisionAssetsCommand = async (
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

/**
 * serializeAws_restJson1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
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

/**
 * serializeAws_restJson1RevokeRevisionCommand
 */
export const se_RevokeRevisionCommand = async (
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
  body = JSON.stringify(
    take(input, {
      RevocationComment: [],
    })
  );
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
 * serializeAws_restJson1SendApiAssetCommand
 */
export const se_SendApiAssetCommand = async (
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

/**
 * serializeAws_restJson1StartJobCommand
 */
export const se_StartJobCommand = async (
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{ResourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      tags: [, (_) => _json(_), `Tags`],
    })
  );
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
 * serializeAws_restJson1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
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

/**
 * serializeAws_restJson1UpdateAssetCommand
 */
export const se_UpdateAssetCommand = async (
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
  body = JSON.stringify(
    take(input, {
      Name: [],
    })
  );
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

/**
 * serializeAws_restJson1UpdateDataSetCommand
 */
export const se_UpdateDataSetCommand = async (
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
  body = JSON.stringify(
    take(input, {
      Description: [],
      Name: [],
    })
  );
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

/**
 * serializeAws_restJson1UpdateEventActionCommand
 */
export const se_UpdateEventActionCommand = async (
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
  body = JSON.stringify(
    take(input, {
      Action: (_) => _json(_),
    })
  );
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

/**
 * serializeAws_restJson1UpdateRevisionCommand
 */
export const se_UpdateRevisionCommand = async (
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
  body = JSON.stringify(
    take(input, {
      Comment: [],
      Finalized: [],
    })
  );
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

/**
 * deserializeAws_restJson1CancelJobCommand
 */
export const de_CancelJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelJobCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CancelJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1CancelJobCommandError
 */
const de_CancelJobCommandError = async (
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
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.dataexchange#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dataexchange#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.dataexchange#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.dataexchange#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateDataSetCommand
 */
export const de_CreateDataSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDataSetCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateDataSetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    AssetType: __expectString,
    CreatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    Description: __expectString,
    Id: __expectString,
    Name: __expectString,
    Origin: __expectString,
    OriginDetails: _json,
    SourceId: __expectString,
    Tags: _json,
    UpdatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateDataSetCommandError
 */
const de_CreateDataSetCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.dataexchange#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ServiceLimitExceededException":
    case "com.amazonaws.dataexchange#ServiceLimitExceededException":
      throw await de_ServiceLimitExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.dataexchange#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.dataexchange#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateEventActionCommand
 */
export const de_CreateEventActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEventActionCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateEventActionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Action: _json,
    Arn: __expectString,
    CreatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    Event: _json,
    Id: __expectString,
    UpdatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateEventActionCommandError
 */
const de_CreateEventActionCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.dataexchange#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ServiceLimitExceededException":
    case "com.amazonaws.dataexchange#ServiceLimitExceededException":
      throw await de_ServiceLimitExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.dataexchange#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.dataexchange#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateJobCommand
 */
export const de_CreateJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateJobCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    CreatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    Details: (_) => de_ResponseDetails(_, context),
    Errors: (_) => de_ListOfJobError(_, context),
    Id: __expectString,
    State: __expectString,
    Type: __expectString,
    UpdatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateJobCommandError
 */
const de_CreateJobCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.dataexchange#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.dataexchange#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dataexchange#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.dataexchange#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.dataexchange#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateRevisionCommand
 */
export const de_CreateRevisionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRevisionCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateRevisionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    Comment: __expectString,
    CreatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    DataSetId: __expectString,
    Finalized: __expectBoolean,
    Id: __expectString,
    RevocationComment: __expectString,
    Revoked: __expectBoolean,
    RevokedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    SourceId: __expectString,
    Tags: _json,
    UpdatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateRevisionCommandError
 */
const de_CreateRevisionCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.dataexchange#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dataexchange#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.dataexchange#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.dataexchange#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteAssetCommand
 */
export const de_DeleteAssetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAssetCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteAssetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteAssetCommandError
 */
const de_DeleteAssetCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.dataexchange#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.dataexchange#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dataexchange#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.dataexchange#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.dataexchange#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteDataSetCommand
 */
export const de_DeleteDataSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDataSetCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteDataSetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteDataSetCommandError
 */
const de_DeleteDataSetCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.dataexchange#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.dataexchange#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dataexchange#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.dataexchange#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.dataexchange#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteEventActionCommand
 */
export const de_DeleteEventActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEventActionCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteEventActionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteEventActionCommandError
 */
const de_DeleteEventActionCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dataexchange#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.dataexchange#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.dataexchange#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteRevisionCommand
 */
export const de_DeleteRevisionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRevisionCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteRevisionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteRevisionCommandError
 */
const de_DeleteRevisionCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.dataexchange#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.dataexchange#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dataexchange#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.dataexchange#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.dataexchange#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetAssetCommand
 */
export const de_GetAssetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAssetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetAssetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    AssetDetails: (_) => de_AssetDetails(_, context),
    AssetType: __expectString,
    CreatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    DataSetId: __expectString,
    Id: __expectString,
    Name: __expectString,
    RevisionId: __expectString,
    SourceId: __expectString,
    UpdatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetAssetCommandError
 */
const de_GetAssetCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dataexchange#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.dataexchange#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.dataexchange#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetDataSetCommand
 */
export const de_GetDataSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetDataSetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    AssetType: __expectString,
    CreatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    Description: __expectString,
    Id: __expectString,
    Name: __expectString,
    Origin: __expectString,
    OriginDetails: _json,
    SourceId: __expectString,
    Tags: _json,
    UpdatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetDataSetCommandError
 */
const de_GetDataSetCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dataexchange#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.dataexchange#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.dataexchange#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetEventActionCommand
 */
export const de_GetEventActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEventActionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetEventActionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Action: _json,
    Arn: __expectString,
    CreatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    Event: _json,
    Id: __expectString,
    UpdatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetEventActionCommandError
 */
const de_GetEventActionCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dataexchange#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.dataexchange#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.dataexchange#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetJobCommand
 */
export const de_GetJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    CreatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    Details: (_) => de_ResponseDetails(_, context),
    Errors: (_) => de_ListOfJobError(_, context),
    Id: __expectString,
    State: __expectString,
    Type: __expectString,
    UpdatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetJobCommandError
 */
const de_GetJobCommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<GetJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.dataexchange#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dataexchange#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.dataexchange#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.dataexchange#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetRevisionCommand
 */
export const de_GetRevisionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRevisionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetRevisionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    Comment: __expectString,
    CreatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    DataSetId: __expectString,
    Finalized: __expectBoolean,
    Id: __expectString,
    RevocationComment: __expectString,
    Revoked: __expectBoolean,
    RevokedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    SourceId: __expectString,
    Tags: _json,
    UpdatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetRevisionCommandError
 */
const de_GetRevisionCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dataexchange#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.dataexchange#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.dataexchange#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListDataSetRevisionsCommand
 */
export const de_ListDataSetRevisionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDataSetRevisionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListDataSetRevisionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    Revisions: (_) => de_ListOfRevisionEntry(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListDataSetRevisionsCommandError
 */
const de_ListDataSetRevisionsCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dataexchange#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.dataexchange#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.dataexchange#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListDataSetsCommand
 */
export const de_ListDataSetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDataSetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListDataSetsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DataSets: (_) => de_ListOfDataSetEntry(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListDataSetsCommandError
 */
const de_ListDataSetsCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dataexchange#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.dataexchange#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.dataexchange#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListEventActionsCommand
 */
export const de_ListEventActionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEventActionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListEventActionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    EventActions: (_) => de_ListOfEventActionEntry(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListEventActionsCommandError
 */
const de_ListEventActionsCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dataexchange#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.dataexchange#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.dataexchange#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListJobsCommand
 */
export const de_ListJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListJobsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Jobs: (_) => de_ListOfJobEntry(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListJobsCommandError
 */
const de_ListJobsCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dataexchange#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.dataexchange#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.dataexchange#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListRevisionAssetsCommand
 */
export const de_ListRevisionAssetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRevisionAssetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListRevisionAssetsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Assets: (_) => de_ListOfAssetEntry(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListRevisionAssetsCommandError
 */
const de_ListRevisionAssetsCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dataexchange#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.dataexchange#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.dataexchange#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Tags: [, _json, `tags`],
  });
  Object.assign(contents, doc);
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
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1RevokeRevisionCommand
 */
export const de_RevokeRevisionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RevokeRevisionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_RevokeRevisionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    Comment: __expectString,
    CreatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    DataSetId: __expectString,
    Finalized: __expectBoolean,
    Id: __expectString,
    RevocationComment: __expectString,
    Revoked: __expectBoolean,
    RevokedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    SourceId: __expectString,
    UpdatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1RevokeRevisionCommandError
 */
const de_RevokeRevisionCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.dataexchange#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.dataexchange#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dataexchange#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.dataexchange#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.dataexchange#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1SendApiAssetCommand
 */
export const de_SendApiAssetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendApiAssetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_SendApiAssetCommandError(output, context);
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

/**
 * deserializeAws_restJson1SendApiAssetCommandError
 */
const de_SendApiAssetCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.dataexchange#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dataexchange#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.dataexchange#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.dataexchange#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1StartJobCommand
 */
export const de_StartJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartJobCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_StartJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1StartJobCommandError
 */
const de_StartJobCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.dataexchange#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.dataexchange#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dataexchange#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.dataexchange#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.dataexchange#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
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
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
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
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1UpdateAssetCommand
 */
export const de_UpdateAssetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAssetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateAssetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    AssetDetails: (_) => de_AssetDetails(_, context),
    AssetType: __expectString,
    CreatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    DataSetId: __expectString,
    Id: __expectString,
    Name: __expectString,
    RevisionId: __expectString,
    SourceId: __expectString,
    UpdatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateAssetCommandError
 */
const de_UpdateAssetCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.dataexchange#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.dataexchange#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dataexchange#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.dataexchange#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.dataexchange#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateDataSetCommand
 */
export const de_UpdateDataSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDataSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateDataSetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    AssetType: __expectString,
    CreatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    Description: __expectString,
    Id: __expectString,
    Name: __expectString,
    Origin: __expectString,
    OriginDetails: _json,
    SourceId: __expectString,
    UpdatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateDataSetCommandError
 */
const de_UpdateDataSetCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.dataexchange#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dataexchange#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.dataexchange#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.dataexchange#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateEventActionCommand
 */
export const de_UpdateEventActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEventActionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateEventActionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Action: _json,
    Arn: __expectString,
    CreatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    Event: _json,
    Id: __expectString,
    UpdatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateEventActionCommandError
 */
const de_UpdateEventActionCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.dataexchange#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dataexchange#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.dataexchange#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.dataexchange#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateRevisionCommand
 */
export const de_UpdateRevisionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRevisionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateRevisionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    Comment: __expectString,
    CreatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    DataSetId: __expectString,
    Finalized: __expectBoolean,
    Id: __expectString,
    RevocationComment: __expectString,
    Revoked: __expectBoolean,
    RevokedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    SourceId: __expectString,
    UpdatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateRevisionCommandError
 */
const de_UpdateRevisionCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.dataexchange#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.dataexchange#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dataexchange#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.dataexchange#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.dataexchange#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
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
    Message: __expectString,
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
    Message: __expectString,
    ResourceId: __expectString,
    ResourceType: __expectString,
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
    Message: __expectString,
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
    Message: __expectString,
    ResourceId: __expectString,
    ResourceType: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ServiceLimitExceededExceptionRes
 */
const de_ServiceLimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceLimitExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    LimitName: __expectString,
    LimitValue: __limitedParseDouble,
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ServiceLimitExceededException({
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
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ThrottlingException({
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
    ExceptionCause: __expectString,
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_Action omitted.

// se_AssetDestinationEntry omitted.

// se_AssetSourceEntry omitted.

// se_AutoExportRevisionDestinationEntry omitted.

// se_AutoExportRevisionToS3RequestDetails omitted.

// se_CreateS3DataAccessFromS3BucketRequestDetails omitted.

// se_DatabaseLFTagPolicyAndPermissions omitted.

// se_Event omitted.

// se_ExportAssetsToS3RequestDetails omitted.

// se_ExportAssetToSignedUrlRequestDetails omitted.

// se_ExportRevisionsToS3RequestDetails omitted.

// se_ExportServerSideEncryption omitted.

// se_ImportAssetFromApiGatewayApiRequestDetails omitted.

// se_ImportAssetFromSignedUrlRequestDetails omitted.

// se_ImportAssetsFromLakeFormationTagPolicyRequestDetails omitted.

// se_ImportAssetsFromRedshiftDataSharesRequestDetails omitted.

// se_ImportAssetsFromS3RequestDetails omitted.

// se_KmsKeyToGrant omitted.

// se_LFTag omitted.

// se_ListOf__string omitted.

// se_ListOfAssetDestinationEntry omitted.

// se_ListOfAssetSourceEntry omitted.

// se_ListOfDatabaseLFTagPolicyPermissions omitted.

// se_ListOfKmsKeysToGrant omitted.

// se_ListOfLFTags omitted.

// se_ListOfLFTagValues omitted.

// se_ListOfRedshiftDataShareAssetSourceEntry omitted.

// se_ListOfRevisionDestinationEntry omitted.

// se_ListOfTableTagPolicyLFPermissions omitted.

// se_MapOf__string omitted.

// se_RedshiftDataShareAssetSourceEntry omitted.

// se_RequestDetails omitted.

// se_RevisionDestinationEntry omitted.

// se_RevisionPublished omitted.

// se_S3DataAccessAssetSourceEntry omitted.

// se_TableLFTagPolicyAndPermissions omitted.

// de_Action omitted.

/**
 * deserializeAws_restJson1ApiGatewayApiAsset
 */
const de_ApiGatewayApiAsset = (output: any, context: __SerdeContext): ApiGatewayApiAsset => {
  return take(output, {
    ApiDescription: __expectString,
    ApiEndpoint: __expectString,
    ApiId: __expectString,
    ApiKey: __expectString,
    ApiName: __expectString,
    ApiSpecificationDownloadUrl: __expectString,
    ApiSpecificationDownloadUrlExpiresAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    ProtocolType: __expectString,
    Stage: __expectString,
  }) as any;
};

// de_AssetDestinationEntry omitted.

/**
 * deserializeAws_restJson1AssetDetails
 */
const de_AssetDetails = (output: any, context: __SerdeContext): AssetDetails => {
  return take(output, {
    ApiGatewayApiAsset: (_: any) => de_ApiGatewayApiAsset(_, context),
    LakeFormationDataPermissionAsset: _json,
    RedshiftDataShareAsset: _json,
    S3DataAccessAsset: _json,
    S3SnapshotAsset: (_: any) => de_S3SnapshotAsset(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1AssetEntry
 */
const de_AssetEntry = (output: any, context: __SerdeContext): AssetEntry => {
  return take(output, {
    Arn: __expectString,
    AssetDetails: (_: any) => de_AssetDetails(_, context),
    AssetType: __expectString,
    CreatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    DataSetId: __expectString,
    Id: __expectString,
    Name: __expectString,
    RevisionId: __expectString,
    SourceId: __expectString,
    UpdatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

// de_AssetSourceEntry omitted.

// de_AutoExportRevisionDestinationEntry omitted.

// de_AutoExportRevisionToS3RequestDetails omitted.

// de_CreateS3DataAccessFromS3BucketResponseDetails omitted.

// de_DatabaseLFTagPolicy omitted.

// de_DatabaseLFTagPolicyAndPermissions omitted.

/**
 * deserializeAws_restJson1DataSetEntry
 */
const de_DataSetEntry = (output: any, context: __SerdeContext): DataSetEntry => {
  return take(output, {
    Arn: __expectString,
    AssetType: __expectString,
    CreatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    Description: __expectString,
    Id: __expectString,
    Name: __expectString,
    Origin: __expectString,
    OriginDetails: _json,
    SourceId: __expectString,
    UpdatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

// de_Details omitted.

// de_Event omitted.

/**
 * deserializeAws_restJson1EventActionEntry
 */
const de_EventActionEntry = (output: any, context: __SerdeContext): EventActionEntry => {
  return take(output, {
    Action: _json,
    Arn: __expectString,
    CreatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    Event: _json,
    Id: __expectString,
    UpdatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

// de_ExportAssetsToS3ResponseDetails omitted.

/**
 * deserializeAws_restJson1ExportAssetToSignedUrlResponseDetails
 */
const de_ExportAssetToSignedUrlResponseDetails = (
  output: any,
  context: __SerdeContext
): ExportAssetToSignedUrlResponseDetails => {
  return take(output, {
    AssetId: __expectString,
    DataSetId: __expectString,
    RevisionId: __expectString,
    SignedUrl: __expectString,
    SignedUrlExpiresAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

// de_ExportRevisionsToS3ResponseDetails omitted.

// de_ExportServerSideEncryption omitted.

/**
 * deserializeAws_restJson1ImportAssetFromApiGatewayApiResponseDetails
 */
const de_ImportAssetFromApiGatewayApiResponseDetails = (
  output: any,
  context: __SerdeContext
): ImportAssetFromApiGatewayApiResponseDetails => {
  return take(output, {
    ApiDescription: __expectString,
    ApiId: __expectString,
    ApiKey: __expectString,
    ApiName: __expectString,
    ApiSpecificationMd5Hash: __expectString,
    ApiSpecificationUploadUrl: __expectString,
    ApiSpecificationUploadUrlExpiresAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    DataSetId: __expectString,
    ProtocolType: __expectString,
    RevisionId: __expectString,
    Stage: __expectString,
  }) as any;
};

// de_ImportAssetFromSignedUrlJobErrorDetails omitted.

/**
 * deserializeAws_restJson1ImportAssetFromSignedUrlResponseDetails
 */
const de_ImportAssetFromSignedUrlResponseDetails = (
  output: any,
  context: __SerdeContext
): ImportAssetFromSignedUrlResponseDetails => {
  return take(output, {
    AssetName: __expectString,
    DataSetId: __expectString,
    Md5Hash: __expectString,
    RevisionId: __expectString,
    SignedUrl: __expectString,
    SignedUrlExpiresAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

// de_ImportAssetsFromLakeFormationTagPolicyResponseDetails omitted.

// de_ImportAssetsFromRedshiftDataSharesResponseDetails omitted.

// de_ImportAssetsFromS3ResponseDetails omitted.

/**
 * deserializeAws_restJson1JobEntry
 */
const de_JobEntry = (output: any, context: __SerdeContext): JobEntry => {
  return take(output, {
    Arn: __expectString,
    CreatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    Details: (_: any) => de_ResponseDetails(_, context),
    Errors: (_: any) => de_ListOfJobError(_, context),
    Id: __expectString,
    State: __expectString,
    Type: __expectString,
    UpdatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1JobError
 */
const de_JobError = (output: any, context: __SerdeContext): JobError => {
  return take(output, {
    Code: __expectString,
    Details: _json,
    LimitName: __expectString,
    LimitValue: __limitedParseDouble,
    Message: __expectString,
    ResourceId: __expectString,
    ResourceType: __expectString,
  }) as any;
};

// de_KmsKeyToGrant omitted.

// de_LakeFormationDataPermissionAsset omitted.

// de_LakeFormationDataPermissionDetails omitted.

// de_LFResourceDetails omitted.

// de_LFTag omitted.

// de_LFTagPolicyDetails omitted.

// de_ListOf__string omitted.

// de_ListOfAssetDestinationEntry omitted.

/**
 * deserializeAws_restJson1ListOfAssetEntry
 */
const de_ListOfAssetEntry = (output: any, context: __SerdeContext): AssetEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AssetEntry(entry, context);
    });
  return retVal;
};

// de_ListOfAssetSourceEntry omitted.

// de_ListOfDatabaseLFTagPolicyPermissions omitted.

/**
 * deserializeAws_restJson1ListOfDataSetEntry
 */
const de_ListOfDataSetEntry = (output: any, context: __SerdeContext): DataSetEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DataSetEntry(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ListOfEventActionEntry
 */
const de_ListOfEventActionEntry = (output: any, context: __SerdeContext): EventActionEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_EventActionEntry(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ListOfJobEntry
 */
const de_ListOfJobEntry = (output: any, context: __SerdeContext): JobEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_JobEntry(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ListOfJobError
 */
const de_ListOfJobError = (output: any, context: __SerdeContext): JobError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_JobError(entry, context);
    });
  return retVal;
};

// de_ListOfKmsKeysToGrant omitted.

// de_ListOfLFPermissions omitted.

// de_ListOfLFTags omitted.

// de_ListOfLFTagValues omitted.

// de_ListOfRedshiftDataShareAssetSourceEntry omitted.

// de_ListOfRevisionDestinationEntry omitted.

/**
 * deserializeAws_restJson1ListOfRevisionEntry
 */
const de_ListOfRevisionEntry = (output: any, context: __SerdeContext): RevisionEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RevisionEntry(entry, context);
    });
  return retVal;
};

// de_ListOfTableTagPolicyLFPermissions omitted.

// de_MapOf__string omitted.

// de_OriginDetails omitted.

// de_RedshiftDataShareAsset omitted.

// de_RedshiftDataShareAssetSourceEntry omitted.

/**
 * deserializeAws_restJson1ResponseDetails
 */
const de_ResponseDetails = (output: any, context: __SerdeContext): ResponseDetails => {
  return take(output, {
    CreateS3DataAccessFromS3Bucket: _json,
    ExportAssetToSignedUrl: (_: any) => de_ExportAssetToSignedUrlResponseDetails(_, context),
    ExportAssetsToS3: _json,
    ExportRevisionsToS3: _json,
    ImportAssetFromApiGatewayApi: (_: any) => de_ImportAssetFromApiGatewayApiResponseDetails(_, context),
    ImportAssetFromSignedUrl: (_: any) => de_ImportAssetFromSignedUrlResponseDetails(_, context),
    ImportAssetsFromLakeFormationTagPolicy: _json,
    ImportAssetsFromRedshiftDataShares: _json,
    ImportAssetsFromS3: _json,
  }) as any;
};

// de_RevisionDestinationEntry omitted.

/**
 * deserializeAws_restJson1RevisionEntry
 */
const de_RevisionEntry = (output: any, context: __SerdeContext): RevisionEntry => {
  return take(output, {
    Arn: __expectString,
    Comment: __expectString,
    CreatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    DataSetId: __expectString,
    Finalized: __expectBoolean,
    Id: __expectString,
    RevocationComment: __expectString,
    Revoked: __expectBoolean,
    RevokedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    SourceId: __expectString,
    UpdatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

// de_RevisionPublished omitted.

// de_S3DataAccessAsset omitted.

// de_S3DataAccessAssetSourceEntry omitted.

/**
 * deserializeAws_restJson1S3SnapshotAsset
 */
const de_S3SnapshotAsset = (output: any, context: __SerdeContext): S3SnapshotAsset => {
  return take(output, {
    Size: __limitedParseDouble,
  }) as any;
};

// de_TableLFTagPolicy omitted.

// de_TableLFTagPolicyAndPermissions omitted.

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
