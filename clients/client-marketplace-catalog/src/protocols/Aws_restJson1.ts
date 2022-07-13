// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { CancelChangeSetCommandInput, CancelChangeSetCommandOutput } from "../commands/CancelChangeSetCommand";
import { DescribeChangeSetCommandInput, DescribeChangeSetCommandOutput } from "../commands/DescribeChangeSetCommand";
import { DescribeEntityCommandInput, DescribeEntityCommandOutput } from "../commands/DescribeEntityCommand";
import { ListChangeSetsCommandInput, ListChangeSetsCommandOutput } from "../commands/ListChangeSetsCommand";
import { ListEntitiesCommandInput, ListEntitiesCommandOutput } from "../commands/ListEntitiesCommand";
import { StartChangeSetCommandInput, StartChangeSetCommandOutput } from "../commands/StartChangeSetCommand";
import { MarketplaceCatalogServiceException as __BaseException } from "../models/MarketplaceCatalogServiceException";
import {
  AccessDeniedException,
  Change,
  ChangeSetSummaryListItem,
  ChangeSummary,
  Entity,
  EntitySummary,
  ErrorDetail,
  Filter,
  InternalServiceException,
  ResourceInUseException,
  ResourceNotFoundException,
  ResourceNotSupportedException,
  ServiceQuotaExceededException,
  Sort,
  ThrottlingException,
  ValidationException,
} from "../models/models_0";

export const serializeAws_restJson1CancelChangeSetCommand = async (
  input: CancelChangeSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/CancelChangeSet";
  const query: any = {
    ...(input.Catalog !== undefined && { catalog: input.Catalog }),
    ...(input.ChangeSetId !== undefined && { changeSetId: input.ChangeSetId }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1DescribeChangeSetCommand = async (
  input: DescribeChangeSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/DescribeChangeSet";
  const query: any = {
    ...(input.Catalog !== undefined && { catalog: input.Catalog }),
    ...(input.ChangeSetId !== undefined && { changeSetId: input.ChangeSetId }),
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

export const serializeAws_restJson1DescribeEntityCommand = async (
  input: DescribeEntityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/DescribeEntity";
  const query: any = {
    ...(input.Catalog !== undefined && { catalog: input.Catalog }),
    ...(input.EntityId !== undefined && { entityId: input.EntityId }),
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

export const serializeAws_restJson1ListChangeSetsCommand = async (
  input: ListChangeSetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/ListChangeSets";
  let body: any;
  body = JSON.stringify({
    ...(input.Catalog != null && { Catalog: input.Catalog }),
    ...(input.FilterList != null && { FilterList: serializeAws_restJson1FilterList(input.FilterList, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.Sort != null && { Sort: serializeAws_restJson1Sort(input.Sort, context) }),
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

export const serializeAws_restJson1ListEntitiesCommand = async (
  input: ListEntitiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/ListEntities";
  let body: any;
  body = JSON.stringify({
    ...(input.Catalog != null && { Catalog: input.Catalog }),
    ...(input.EntityType != null && { EntityType: input.EntityType }),
    ...(input.FilterList != null && { FilterList: serializeAws_restJson1FilterList(input.FilterList, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.Sort != null && { Sort: serializeAws_restJson1Sort(input.Sort, context) }),
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

export const serializeAws_restJson1StartChangeSetCommand = async (
  input: StartChangeSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/StartChangeSet";
  let body: any;
  body = JSON.stringify({
    ...(input.Catalog != null && { Catalog: input.Catalog }),
    ...(input.ChangeSet != null && { ChangeSet: serializeAws_restJson1RequestedChangeList(input.ChangeSet, context) }),
    ...(input.ChangeSetName != null && { ChangeSetName: input.ChangeSetName }),
    ...(input.ClientRequestToken != null && { ClientRequestToken: input.ClientRequestToken }),
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

export const deserializeAws_restJson1CancelChangeSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelChangeSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CancelChangeSetCommandError(output, context);
  }
  const contents: CancelChangeSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ChangeSetArn: undefined,
    ChangeSetId: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ChangeSetArn !== undefined && data.ChangeSetArn !== null) {
    contents.ChangeSetArn = __expectString(data.ChangeSetArn);
  }
  if (data.ChangeSetId !== undefined && data.ChangeSetId !== null) {
    contents.ChangeSetId = __expectString(data.ChangeSetId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CancelChangeSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelChangeSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.marketplacecatalog#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.marketplacecatalog#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.marketplacecatalog#ResourceInUseException":
      throw await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.marketplacecatalog#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.marketplacecatalog#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.marketplacecatalog#ValidationException":
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

export const deserializeAws_restJson1DescribeChangeSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeChangeSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeChangeSetCommandError(output, context);
  }
  const contents: DescribeChangeSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ChangeSet: undefined,
    ChangeSetArn: undefined,
    ChangeSetId: undefined,
    ChangeSetName: undefined,
    EndTime: undefined,
    FailureCode: undefined,
    FailureDescription: undefined,
    StartTime: undefined,
    Status: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ChangeSet !== undefined && data.ChangeSet !== null) {
    contents.ChangeSet = deserializeAws_restJson1ChangeSetDescription(data.ChangeSet, context);
  }
  if (data.ChangeSetArn !== undefined && data.ChangeSetArn !== null) {
    contents.ChangeSetArn = __expectString(data.ChangeSetArn);
  }
  if (data.ChangeSetId !== undefined && data.ChangeSetId !== null) {
    contents.ChangeSetId = __expectString(data.ChangeSetId);
  }
  if (data.ChangeSetName !== undefined && data.ChangeSetName !== null) {
    contents.ChangeSetName = __expectString(data.ChangeSetName);
  }
  if (data.EndTime !== undefined && data.EndTime !== null) {
    contents.EndTime = __expectString(data.EndTime);
  }
  if (data.FailureCode !== undefined && data.FailureCode !== null) {
    contents.FailureCode = __expectString(data.FailureCode);
  }
  if (data.FailureDescription !== undefined && data.FailureDescription !== null) {
    contents.FailureDescription = __expectString(data.FailureDescription);
  }
  if (data.StartTime !== undefined && data.StartTime !== null) {
    contents.StartTime = __expectString(data.StartTime);
  }
  if (data.Status !== undefined && data.Status !== null) {
    contents.Status = __expectString(data.Status);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeChangeSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeChangeSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.marketplacecatalog#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.marketplacecatalog#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.marketplacecatalog#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.marketplacecatalog#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.marketplacecatalog#ValidationException":
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

export const deserializeAws_restJson1DescribeEntityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEntityCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeEntityCommandError(output, context);
  }
  const contents: DescribeEntityCommandOutput = {
    $metadata: deserializeMetadata(output),
    Details: undefined,
    EntityArn: undefined,
    EntityIdentifier: undefined,
    EntityType: undefined,
    LastModifiedDate: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Details !== undefined && data.Details !== null) {
    contents.Details = __expectString(data.Details);
  }
  if (data.EntityArn !== undefined && data.EntityArn !== null) {
    contents.EntityArn = __expectString(data.EntityArn);
  }
  if (data.EntityIdentifier !== undefined && data.EntityIdentifier !== null) {
    contents.EntityIdentifier = __expectString(data.EntityIdentifier);
  }
  if (data.EntityType !== undefined && data.EntityType !== null) {
    contents.EntityType = __expectString(data.EntityType);
  }
  if (data.LastModifiedDate !== undefined && data.LastModifiedDate !== null) {
    contents.LastModifiedDate = __expectString(data.LastModifiedDate);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeEntityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEntityCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.marketplacecatalog#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.marketplacecatalog#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.marketplacecatalog#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ResourceNotSupportedException":
    case "com.amazonaws.marketplacecatalog#ResourceNotSupportedException":
      throw await deserializeAws_restJson1ResourceNotSupportedExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.marketplacecatalog#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.marketplacecatalog#ValidationException":
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

export const deserializeAws_restJson1ListChangeSetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChangeSetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListChangeSetsCommandError(output, context);
  }
  const contents: ListChangeSetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ChangeSetSummaryList: undefined,
    NextToken: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ChangeSetSummaryList !== undefined && data.ChangeSetSummaryList !== null) {
    contents.ChangeSetSummaryList = deserializeAws_restJson1ChangeSetSummaryList(data.ChangeSetSummaryList, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListChangeSetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChangeSetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.marketplacecatalog#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.marketplacecatalog#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.marketplacecatalog#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.marketplacecatalog#ValidationException":
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

export const deserializeAws_restJson1ListEntitiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEntitiesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListEntitiesCommandError(output, context);
  }
  const contents: ListEntitiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    EntitySummaryList: undefined,
    NextToken: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.EntitySummaryList !== undefined && data.EntitySummaryList !== null) {
    contents.EntitySummaryList = deserializeAws_restJson1EntitySummaryList(data.EntitySummaryList, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListEntitiesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEntitiesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.marketplacecatalog#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.marketplacecatalog#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.marketplacecatalog#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.marketplacecatalog#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.marketplacecatalog#ValidationException":
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

export const deserializeAws_restJson1StartChangeSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartChangeSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartChangeSetCommandError(output, context);
  }
  const contents: StartChangeSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ChangeSetArn: undefined,
    ChangeSetId: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ChangeSetArn !== undefined && data.ChangeSetArn !== null) {
    contents.ChangeSetArn = __expectString(data.ChangeSetArn);
  }
  if (data.ChangeSetId !== undefined && data.ChangeSetId !== null) {
    contents.ChangeSetId = __expectString(data.ChangeSetId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1StartChangeSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartChangeSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.marketplacecatalog#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.marketplacecatalog#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.marketplacecatalog#ResourceInUseException":
      throw await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.marketplacecatalog#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.marketplacecatalog#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.marketplacecatalog#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.marketplacecatalog#ValidationException":
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
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1InternalServiceExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServiceException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new InternalServiceException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ResourceInUseExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceInUseException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ResourceInUseException({
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
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ResourceNotSupportedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotSupportedException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ResourceNotSupportedException({
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
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
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
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
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
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const serializeAws_restJson1Change = (input: Change, context: __SerdeContext): any => {
  return {
    ...(input.ChangeName != null && { ChangeName: input.ChangeName }),
    ...(input.ChangeType != null && { ChangeType: input.ChangeType }),
    ...(input.Details != null && { Details: input.Details }),
    ...(input.Entity != null && { Entity: serializeAws_restJson1Entity(input.Entity, context) }),
  };
};

const serializeAws_restJson1Entity = (input: Entity, context: __SerdeContext): any => {
  return {
    ...(input.Identifier != null && { Identifier: input.Identifier }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

const serializeAws_restJson1Filter = (input: Filter, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.ValueList != null && { ValueList: serializeAws_restJson1ValueList(input.ValueList, context) }),
  };
};

const serializeAws_restJson1FilterList = (input: Filter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1Filter(entry, context);
    });
};

const serializeAws_restJson1RequestedChangeList = (input: Change[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1Change(entry, context);
    });
};

const serializeAws_restJson1Sort = (input: Sort, context: __SerdeContext): any => {
  return {
    ...(input.SortBy != null && { SortBy: input.SortBy }),
    ...(input.SortOrder != null && { SortOrder: input.SortOrder }),
  };
};

const serializeAws_restJson1ValueList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const deserializeAws_restJson1ChangeSetDescription = (output: any, context: __SerdeContext): ChangeSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ChangeSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ChangeSetSummaryList = (
  output: any,
  context: __SerdeContext
): ChangeSetSummaryListItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ChangeSetSummaryListItem(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ChangeSetSummaryListItem = (
  output: any,
  context: __SerdeContext
): ChangeSetSummaryListItem => {
  return {
    ChangeSetArn: __expectString(output.ChangeSetArn),
    ChangeSetId: __expectString(output.ChangeSetId),
    ChangeSetName: __expectString(output.ChangeSetName),
    EndTime: __expectString(output.EndTime),
    EntityIdList:
      output.EntityIdList != null ? deserializeAws_restJson1ResourceIdList(output.EntityIdList, context) : undefined,
    FailureCode: __expectString(output.FailureCode),
    StartTime: __expectString(output.StartTime),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_restJson1ChangeSummary = (output: any, context: __SerdeContext): ChangeSummary => {
  return {
    ChangeName: __expectString(output.ChangeName),
    ChangeType: __expectString(output.ChangeType),
    Details: __expectString(output.Details),
    Entity: output.Entity != null ? deserializeAws_restJson1Entity(output.Entity, context) : undefined,
    ErrorDetailList:
      output.ErrorDetailList != null
        ? deserializeAws_restJson1ErrorDetailList(output.ErrorDetailList, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1Entity = (output: any, context: __SerdeContext): Entity => {
  return {
    Identifier: __expectString(output.Identifier),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1EntitySummary = (output: any, context: __SerdeContext): EntitySummary => {
  return {
    EntityArn: __expectString(output.EntityArn),
    EntityId: __expectString(output.EntityId),
    EntityType: __expectString(output.EntityType),
    LastModifiedDate: __expectString(output.LastModifiedDate),
    Name: __expectString(output.Name),
    Visibility: __expectString(output.Visibility),
  } as any;
};

const deserializeAws_restJson1EntitySummaryList = (output: any, context: __SerdeContext): EntitySummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1EntitySummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ErrorDetail = (output: any, context: __SerdeContext): ErrorDetail => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
    ErrorMessage: __expectString(output.ErrorMessage),
  } as any;
};

const deserializeAws_restJson1ErrorDetailList = (output: any, context: __SerdeContext): ErrorDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ErrorDetail(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ResourceIdList = (output: any, context: __SerdeContext): string[] => {
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

  const sanitizeErrorCode = (rawValue: string | number): string => {
    let cleanValue = rawValue;
    if (typeof cleanValue === "number") {
      cleanValue = cleanValue.toString();
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
