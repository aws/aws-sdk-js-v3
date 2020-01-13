import {
  CreateProjectCommandInput,
  CreateProjectCommandOutput
} from "../commands/CreateProjectCommand";
import {
  DeleteProjectCommandInput,
  DeleteProjectCommandOutput
} from "../commands/DeleteProjectCommand";
import {
  DescribeBundleCommandInput,
  DescribeBundleCommandOutput
} from "../commands/DescribeBundleCommand";
import {
  DescribeProjectCommandInput,
  DescribeProjectCommandOutput
} from "../commands/DescribeProjectCommand";
import {
  ExportBundleCommandInput,
  ExportBundleCommandOutput
} from "../commands/ExportBundleCommand";
import {
  ExportProjectCommandInput,
  ExportProjectCommandOutput
} from "../commands/ExportProjectCommand";
import {
  ListBundlesCommandInput,
  ListBundlesCommandOutput
} from "../commands/ListBundlesCommand";
import {
  ListProjectsCommandInput,
  ListProjectsCommandOutput
} from "../commands/ListProjectsCommand";
import {
  UpdateProjectCommandInput,
  UpdateProjectCommandOutput
} from "../commands/UpdateProjectCommand";
import {
  AccountActionRequiredException,
  BadRequestException,
  BundleDetails,
  InternalFailureException,
  LimitExceededException,
  NotFoundException,
  Platform,
  ProjectDetails,
  ProjectSummary,
  Resource,
  ServiceUnavailableException,
  TooManyRequestsException,
  UnauthorizedException
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

export async function serializeAws_restJson1_1CreateProjectCommand(
  input: CreateProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/octet-stream";
  let resolvedPath = "/projects";
  const query: any = {};
  if (input.name !== undefined) {
    query["name"] = input.name.toString();
  }
  if (input.region !== undefined) {
    query["region"] = input.region.toString();
  }
  if (input.snapshotId !== undefined) {
    query["snapshotId"] = input.snapshotId.toString();
  }
  let body: any = {};
  if (input.contents !== undefined) {
    body = input.contents;
  }
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

export async function serializeAws_restJson1_1DeleteProjectCommand(
  input: DeleteProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/projects/{projectId}";
  if (input.projectId !== undefined) {
    const labelValue: any = input.projectId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: projectId.");
    }
    resolvedPath = resolvedPath.replace("{projectId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: projectId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DescribeBundleCommand(
  input: DescribeBundleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/bundles/{bundleId}";
  if (input.bundleId !== undefined) {
    const labelValue: any = input.bundleId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: bundleId.");
    }
    resolvedPath = resolvedPath.replace("{bundleId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: bundleId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DescribeProjectCommand(
  input: DescribeProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/project";
  const query: any = {};
  if (input.projectId !== undefined) {
    query["projectId"] = input.projectId.toString();
  }
  if (input.syncFromResources !== undefined) {
    query["syncFromResources"] = input.syncFromResources.toString();
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

export async function serializeAws_restJson1_1ExportBundleCommand(
  input: ExportBundleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/bundles/{bundleId}";
  if (input.bundleId !== undefined) {
    const labelValue: any = input.bundleId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: bundleId.");
    }
    resolvedPath = resolvedPath.replace("{bundleId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: bundleId.");
  }
  const query: any = {};
  if (input.platform !== undefined) {
    query["platform"] = input.platform.toString();
  }
  if (input.projectId !== undefined) {
    query["projectId"] = input.projectId.toString();
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1ExportProjectCommand(
  input: ExportProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/exports/{projectId}";
  if (input.projectId !== undefined) {
    const labelValue: any = input.projectId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: projectId.");
    }
    resolvedPath = resolvedPath.replace("{projectId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: projectId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1ListBundlesCommand(
  input: ListBundlesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/bundles";
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

export async function serializeAws_restJson1_1ListProjectsCommand(
  input: ListProjectsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/projects";
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

export async function serializeAws_restJson1_1UpdateProjectCommand(
  input: UpdateProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/octet-stream";
  let resolvedPath = "/update";
  const query: any = {};
  if (input.projectId !== undefined) {
    query["projectId"] = input.projectId.toString();
  }
  let body: any = {};
  if (input.contents !== undefined) {
    body = input.contents;
  }
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

export async function deserializeAws_restJson1_1CreateProjectCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProjectCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateProjectCommandError(output, context);
  }
  const contents: CreateProjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateProjectResult",
    details: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.details !== undefined) {
    contents.details = deserializeAws_restJson1_1ProjectDetails(
      data.details,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateProjectCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProjectCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.services.mobile.model#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        output,
        context
      );
      break;
    case "InternalFailureException":
    case "com.amazonaws.services.mobile.model#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        output,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.services.mobile.model#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        output,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.services.mobile.model#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.services.mobile.model#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        output,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.services.mobile.model#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedException":
    case "com.amazonaws.services.mobile.model#UnauthorizedException":
      response = await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.services.mobile.model#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1DeleteProjectCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProjectCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteProjectCommandError(output, context);
  }
  const contents: DeleteProjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteProjectResult",
    deletedResources: undefined,
    orphanedResources: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.deletedResources !== undefined) {
    contents.deletedResources = deserializeAws_restJson1_1Resources(
      data.deletedResources,
      context
    );
  }
  if (data.orphanedResources !== undefined) {
    contents.orphanedResources = deserializeAws_restJson1_1Resources(
      data.orphanedResources,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteProjectCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProjectCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.services.mobile.model#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        output,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.services.mobile.model#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.services.mobile.model#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        output,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.services.mobile.model#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedException":
    case "com.amazonaws.services.mobile.model#UnauthorizedException":
      response = await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.services.mobile.model#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1DescribeBundleCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBundleCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeBundleCommandError(
      output,
      context
    );
  }
  const contents: DescribeBundleCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeBundleResult",
    details: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.details !== undefined) {
    contents.details = deserializeAws_restJson1_1BundleDetails(
      data.details,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeBundleCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBundleCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.services.mobile.model#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        output,
        context
      );
      break;
    case "InternalFailureException":
    case "com.amazonaws.services.mobile.model#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        output,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.services.mobile.model#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.services.mobile.model#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        output,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.services.mobile.model#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedException":
    case "com.amazonaws.services.mobile.model#UnauthorizedException":
      response = await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.services.mobile.model#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1DescribeProjectCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProjectCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeProjectCommandError(
      output,
      context
    );
  }
  const contents: DescribeProjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeProjectResult",
    details: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.details !== undefined) {
    contents.details = deserializeAws_restJson1_1ProjectDetails(
      data.details,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeProjectCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProjectCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.services.mobile.model#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        output,
        context
      );
      break;
    case "InternalFailureException":
    case "com.amazonaws.services.mobile.model#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        output,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.services.mobile.model#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.services.mobile.model#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        output,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.services.mobile.model#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedException":
    case "com.amazonaws.services.mobile.model#UnauthorizedException":
      response = await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.services.mobile.model#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1ExportBundleCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExportBundleCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ExportBundleCommandError(output, context);
  }
  const contents: ExportBundleCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ExportBundleResult",
    downloadUrl: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.downloadUrl !== undefined) {
    contents.downloadUrl = data.downloadUrl;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ExportBundleCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExportBundleCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.services.mobile.model#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        output,
        context
      );
      break;
    case "InternalFailureException":
    case "com.amazonaws.services.mobile.model#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        output,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.services.mobile.model#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.services.mobile.model#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        output,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.services.mobile.model#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedException":
    case "com.amazonaws.services.mobile.model#UnauthorizedException":
      response = await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.services.mobile.model#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1ExportProjectCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExportProjectCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ExportProjectCommandError(output, context);
  }
  const contents: ExportProjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ExportProjectResult",
    downloadUrl: undefined,
    shareUrl: undefined,
    snapshotId: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.downloadUrl !== undefined) {
    contents.downloadUrl = data.downloadUrl;
  }
  if (data.shareUrl !== undefined) {
    contents.shareUrl = data.shareUrl;
  }
  if (data.snapshotId !== undefined) {
    contents.snapshotId = data.snapshotId;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ExportProjectCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExportProjectCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.services.mobile.model#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        output,
        context
      );
      break;
    case "InternalFailureException":
    case "com.amazonaws.services.mobile.model#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        output,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.services.mobile.model#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.services.mobile.model#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        output,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.services.mobile.model#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedException":
    case "com.amazonaws.services.mobile.model#UnauthorizedException":
      response = await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.services.mobile.model#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1ListBundlesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBundlesCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListBundlesCommandError(output, context);
  }
  const contents: ListBundlesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListBundlesResult",
    bundleList: undefined,
    nextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.bundleList !== undefined) {
    contents.bundleList = deserializeAws_restJson1_1BundleList(
      data.bundleList,
      context
    );
  }
  if (data.nextToken !== undefined) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListBundlesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBundlesCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.services.mobile.model#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        output,
        context
      );
      break;
    case "InternalFailureException":
    case "com.amazonaws.services.mobile.model#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        output,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.services.mobile.model#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        output,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.services.mobile.model#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedException":
    case "com.amazonaws.services.mobile.model#UnauthorizedException":
      response = await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.services.mobile.model#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1ListProjectsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProjectsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListProjectsCommandError(output, context);
  }
  const contents: ListProjectsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListProjectsResult",
    nextToken: undefined,
    projects: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined) {
    contents.nextToken = data.nextToken;
  }
  if (data.projects !== undefined) {
    contents.projects = deserializeAws_restJson1_1ProjectSummaries(
      data.projects,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListProjectsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProjectsCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.services.mobile.model#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        output,
        context
      );
      break;
    case "InternalFailureException":
    case "com.amazonaws.services.mobile.model#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        output,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.services.mobile.model#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        output,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.services.mobile.model#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedException":
    case "com.amazonaws.services.mobile.model#UnauthorizedException":
      response = await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.services.mobile.model#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1UpdateProjectCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProjectCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateProjectCommandError(output, context);
  }
  const contents: UpdateProjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateProjectResult",
    details: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.details !== undefined) {
    contents.details = deserializeAws_restJson1_1ProjectDetails(
      data.details,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateProjectCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProjectCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccountActionRequiredException":
    case "com.amazonaws.services.mobile.model#AccountActionRequiredException":
      response = await deserializeAws_restJson1_1AccountActionRequiredExceptionResponse(
        output,
        context
      );
      break;
    case "BadRequestException":
    case "com.amazonaws.services.mobile.model#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        output,
        context
      );
      break;
    case "InternalFailureException":
    case "com.amazonaws.services.mobile.model#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        output,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.services.mobile.model#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        output,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.services.mobile.model#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.services.mobile.model#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        output,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.services.mobile.model#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedException":
    case "com.amazonaws.services.mobile.model#UnauthorizedException":
      response = await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.services.mobile.model#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

const deserializeAws_restJson1_1AccountActionRequiredExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<AccountActionRequiredException> => {
  const contents: AccountActionRequiredException = {
    name: "AccountActionRequiredException",
    __type: "AccountActionRequiredException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1BadRequestExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<BadRequestException> => {
  const contents: BadRequestException = {
    name: "BadRequestException",
    __type: "BadRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1InternalFailureExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InternalFailureException> => {
  const contents: InternalFailureException = {
    name: "InternalFailureException",
    __type: "InternalFailureException",
    $fault: "server",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
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
    name: "LimitExceededException",
    __type: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined,
    retryAfterSeconds: undefined
  };
  if (output.headers["Retry-After"] !== undefined) {
    contents.retryAfterSeconds = output.headers["Retry-After"];
  }
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1NotFoundExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<NotFoundException> => {
  const contents: NotFoundException = {
    name: "NotFoundException",
    __type: "NotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
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
    name: "ServiceUnavailableException",
    __type: "ServiceUnavailableException",
    $fault: "server",
    $metadata: deserializeMetadata(output),
    message: undefined,
    retryAfterSeconds: undefined
  };
  if (output.headers["Retry-After"] !== undefined) {
    contents.retryAfterSeconds = output.headers["Retry-After"];
  }
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1TooManyRequestsExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<TooManyRequestsException> => {
  const contents: TooManyRequestsException = {
    name: "TooManyRequestsException",
    __type: "TooManyRequestsException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined,
    retryAfterSeconds: undefined
  };
  if (output.headers["Retry-After"] !== undefined) {
    contents.retryAfterSeconds = output.headers["Retry-After"];
  }
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1UnauthorizedExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<UnauthorizedException> => {
  const contents: UnauthorizedException = {
    name: "UnauthorizedException",
    __type: "UnauthorizedException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1Attributes = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  let mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_restJson1_1BundleDetails = (
  output: any,
  context: __SerdeContext
): BundleDetails => {
  let contents: any = {
    __type: "BundleDetails",
    availablePlatforms: undefined,
    bundleId: undefined,
    description: undefined,
    iconUrl: undefined,
    title: undefined,
    version: undefined
  };
  if (output.availablePlatforms !== undefined) {
    contents.availablePlatforms = deserializeAws_restJson1_1Platforms(
      output.availablePlatforms,
      context
    );
  }
  if (output.bundleId !== undefined) {
    contents.bundleId = output.bundleId;
  }
  if (output.description !== undefined) {
    contents.description = output.description;
  }
  if (output.iconUrl !== undefined) {
    contents.iconUrl = output.iconUrl;
  }
  if (output.title !== undefined) {
    contents.title = output.title;
  }
  if (output.version !== undefined) {
    contents.version = output.version;
  }
  return contents;
};

const deserializeAws_restJson1_1BundleList = (
  output: any,
  context: __SerdeContext
): Array<BundleDetails> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1BundleDetails(entry, context)
  );
};

const deserializeAws_restJson1_1Platforms = (
  output: any,
  context: __SerdeContext
): Array<Platform | string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1ProjectDetails = (
  output: any,
  context: __SerdeContext
): ProjectDetails => {
  let contents: any = {
    __type: "ProjectDetails",
    consoleUrl: undefined,
    createdDate: undefined,
    lastUpdatedDate: undefined,
    name: undefined,
    projectId: undefined,
    region: undefined,
    resources: undefined,
    state: undefined
  };
  if (output.consoleUrl !== undefined) {
    contents.consoleUrl = output.consoleUrl;
  }
  if (output.createdDate !== undefined) {
    contents.createdDate = new Date(
      output.createdDate % 1 != 0
        ? Math.round(output.createdDate * 1000)
        : output.createdDate
    );
  }
  if (output.lastUpdatedDate !== undefined) {
    contents.lastUpdatedDate = new Date(
      output.lastUpdatedDate % 1 != 0
        ? Math.round(output.lastUpdatedDate * 1000)
        : output.lastUpdatedDate
    );
  }
  if (output.name !== undefined) {
    contents.name = output.name;
  }
  if (output.projectId !== undefined) {
    contents.projectId = output.projectId;
  }
  if (output.region !== undefined) {
    contents.region = output.region;
  }
  if (output.resources !== undefined) {
    contents.resources = deserializeAws_restJson1_1Resources(
      output.resources,
      context
    );
  }
  if (output.state !== undefined) {
    contents.state = output.state;
  }
  return contents;
};

const deserializeAws_restJson1_1ProjectSummaries = (
  output: any,
  context: __SerdeContext
): Array<ProjectSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1ProjectSummary(entry, context)
  );
};

const deserializeAws_restJson1_1ProjectSummary = (
  output: any,
  context: __SerdeContext
): ProjectSummary => {
  let contents: any = {
    __type: "ProjectSummary",
    name: undefined,
    projectId: undefined
  };
  if (output.name !== undefined) {
    contents.name = output.name;
  }
  if (output.projectId !== undefined) {
    contents.projectId = output.projectId;
  }
  return contents;
};

const deserializeAws_restJson1_1Resource = (
  output: any,
  context: __SerdeContext
): Resource => {
  let contents: any = {
    __type: "Resource",
    arn: undefined,
    attributes: undefined,
    feature: undefined,
    name: undefined,
    type: undefined
  };
  if (output.arn !== undefined) {
    contents.arn = output.arn;
  }
  if (output.attributes !== undefined) {
    contents.attributes = deserializeAws_restJson1_1Attributes(
      output.attributes,
      context
    );
  }
  if (output.feature !== undefined) {
    contents.feature = output.feature;
  }
  if (output.name !== undefined) {
    contents.name = output.name;
  }
  if (output.type !== undefined) {
    contents.type = output.type;
  }
  return contents;
};

const deserializeAws_restJson1_1Resources = (
  output: any,
  context: __SerdeContext
): Array<Resource> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Resource(entry, context)
  );
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
