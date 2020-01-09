import {
  CancelChangeSetCommandInput,
  CancelChangeSetCommandOutput
} from "../commands/CancelChangeSetCommand";
import {
  DescribeChangeSetCommandInput,
  DescribeChangeSetCommandOutput
} from "../commands/DescribeChangeSetCommand";
import {
  DescribeEntityCommandInput,
  DescribeEntityCommandOutput
} from "../commands/DescribeEntityCommand";
import {
  ListChangeSetsCommandInput,
  ListChangeSetsCommandOutput
} from "../commands/ListChangeSetsCommand";
import {
  ListEntitiesCommandInput,
  ListEntitiesCommandOutput
} from "../commands/ListEntitiesCommand";
import {
  StartChangeSetCommandInput,
  StartChangeSetCommandOutput
} from "../commands/StartChangeSetCommand";
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

export async function serializeAws_restJson1_1CancelChangeSetCommand(
  input: CancelChangeSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/CancelChangeSet";
  const query: any = {};
  if (input.Catalog !== undefined) {
    query["catalog"] = input.Catalog.toString();
  }
  if (input.ChangeSetId !== undefined) {
    query["changeSetId"] = input.ChangeSetId.toString();
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PATCH",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1DescribeChangeSetCommand(
  input: DescribeChangeSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/DescribeChangeSet";
  const query: any = {};
  if (input.Catalog !== undefined) {
    query["catalog"] = input.Catalog.toString();
  }
  if (input.ChangeSetId !== undefined) {
    query["changeSetId"] = input.ChangeSetId.toString();
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

export async function serializeAws_restJson1_1DescribeEntityCommand(
  input: DescribeEntityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/DescribeEntity";
  const query: any = {};
  if (input.Catalog !== undefined) {
    query["catalog"] = input.Catalog.toString();
  }
  if (input.EntityId !== undefined) {
    query["entityId"] = input.EntityId.toString();
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

export async function serializeAws_restJson1_1ListChangeSetsCommand(
  input: ListChangeSetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/ListChangeSets";
  let body: any = {};
  const bodyParams: any = {};
  if (input.Catalog !== undefined) {
    bodyParams["Catalog"] = input.Catalog;
  }
  if (input.FilterList !== undefined) {
    bodyParams["FilterList"] = serializeAws_restJson1_1FilterList(
      input.FilterList,
      context
    );
  }
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.Sort !== undefined) {
    bodyParams["Sort"] = serializeAws_restJson1_1Sort(input.Sort, context);
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

export async function serializeAws_restJson1_1ListEntitiesCommand(
  input: ListEntitiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/ListEntities";
  let body: any = {};
  const bodyParams: any = {};
  if (input.Catalog !== undefined) {
    bodyParams["Catalog"] = input.Catalog;
  }
  if (input.EntityType !== undefined) {
    bodyParams["EntityType"] = input.EntityType;
  }
  if (input.FilterList !== undefined) {
    bodyParams["FilterList"] = serializeAws_restJson1_1FilterList(
      input.FilterList,
      context
    );
  }
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.Sort !== undefined) {
    bodyParams["Sort"] = serializeAws_restJson1_1Sort(input.Sort, context);
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

export async function serializeAws_restJson1_1StartChangeSetCommand(
  input: StartChangeSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/StartChangeSet";
  let body: any = {};
  const bodyParams: any = {};
  if (input.Catalog !== undefined) {
    bodyParams["Catalog"] = input.Catalog;
  }
  if (input.ChangeSet !== undefined) {
    bodyParams["ChangeSet"] = serializeAws_restJson1_1RequestedChangeList(
      input.ChangeSet,
      context
    );
  }
  if (input.ChangeSetName !== undefined) {
    bodyParams["ChangeSetName"] = input.ChangeSetName;
  }
  if (input.ClientRequestToken !== undefined) {
    bodyParams["ClientRequestToken"] = input.ClientRequestToken;
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

export async function deserializeAws_restJson1_1CancelChangeSetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelChangeSetCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1CancelChangeSetCommandError(
      output,
      context
    );
  }
  const contents: CancelChangeSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CancelChangeSetResponse",
    ChangeSetArn: undefined,
    ChangeSetId: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.ChangeSetArn !== undefined) {
    contents.ChangeSetArn = data.ChangeSetArn;
  }
  if (data.ChangeSetId !== undefined) {
    contents.ChangeSetId = data.ChangeSetId;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CancelChangeSetCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelChangeSetCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.marketplace.seymour.model#AccessDeniedException":
      response = await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServiceException":
    case "com.amazonaws.marketplace.seymour.model#InternalServiceException":
      response = await deserializeAws_restJson1_1InternalServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceInUseException":
    case "com.amazonaws.marketplace.seymour.model#ResourceInUseException":
      response = await deserializeAws_restJson1_1ResourceInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.marketplace.seymour.model#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazonaws.marketplace.seymour.model#ThrottlingException":
      response = await deserializeAws_restJson1_1ThrottlingExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.marketplace.seymour.model#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.marketplace.seymour.model#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1DescribeChangeSetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeChangeSetCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1DescribeChangeSetCommandError(
      output,
      context
    );
  }
  const contents: DescribeChangeSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeChangeSetResponse",
    ChangeSet: undefined,
    ChangeSetArn: undefined,
    ChangeSetId: undefined,
    ChangeSetName: undefined,
    EndTime: undefined,
    FailureDescription: undefined,
    StartTime: undefined,
    Status: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.ChangeSet !== undefined) {
    contents.ChangeSet = deserializeAws_restJson1_1ChangeSetDescription(
      data.ChangeSet,
      context
    );
  }
  if (data.ChangeSetArn !== undefined) {
    contents.ChangeSetArn = data.ChangeSetArn;
  }
  if (data.ChangeSetId !== undefined) {
    contents.ChangeSetId = data.ChangeSetId;
  }
  if (data.ChangeSetName !== undefined) {
    contents.ChangeSetName = data.ChangeSetName;
  }
  if (data.EndTime !== undefined) {
    contents.EndTime = data.EndTime;
  }
  if (data.FailureDescription !== undefined) {
    contents.FailureDescription = data.FailureDescription;
  }
  if (data.StartTime !== undefined) {
    contents.StartTime = data.StartTime;
  }
  if (data.Status !== undefined) {
    contents.Status = data.Status;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeChangeSetCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeChangeSetCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.marketplace.seymour.model#AccessDeniedException":
      response = await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServiceException":
    case "com.amazonaws.marketplace.seymour.model#InternalServiceException":
      response = await deserializeAws_restJson1_1InternalServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.marketplace.seymour.model#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazonaws.marketplace.seymour.model#ThrottlingException":
      response = await deserializeAws_restJson1_1ThrottlingExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.marketplace.seymour.model#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.marketplace.seymour.model#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1DescribeEntityCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEntityCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1DescribeEntityCommandError(
      output,
      context
    );
  }
  const contents: DescribeEntityCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeEntityResponse",
    Details: undefined,
    EntityArn: undefined,
    EntityIdentifier: undefined,
    EntityType: undefined,
    LastModifiedDate: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Details !== undefined) {
    contents.Details = data.Details;
  }
  if (data.EntityArn !== undefined) {
    contents.EntityArn = data.EntityArn;
  }
  if (data.EntityIdentifier !== undefined) {
    contents.EntityIdentifier = data.EntityIdentifier;
  }
  if (data.EntityType !== undefined) {
    contents.EntityType = data.EntityType;
  }
  if (data.LastModifiedDate !== undefined) {
    contents.LastModifiedDate = data.LastModifiedDate;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeEntityCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEntityCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.marketplace.seymour.model#AccessDeniedException":
      response = await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServiceException":
    case "com.amazonaws.marketplace.seymour.model#InternalServiceException":
      response = await deserializeAws_restJson1_1InternalServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.marketplace.seymour.model#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotSupportedException":
    case "com.amazonaws.marketplace.seymour.model#ResourceNotSupportedException":
      response = await deserializeAws_restJson1_1ResourceNotSupportedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazonaws.marketplace.seymour.model#ThrottlingException":
      response = await deserializeAws_restJson1_1ThrottlingExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.marketplace.seymour.model#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.marketplace.seymour.model#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1ListChangeSetsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChangeSetsCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1ListChangeSetsCommandError(
      output,
      context
    );
  }
  const contents: ListChangeSetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListChangeSetsResponse",
    ChangeSetSummaryList: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.ChangeSetSummaryList !== undefined) {
    contents.ChangeSetSummaryList = deserializeAws_restJson1_1ChangeSetSummaryList(
      data.ChangeSetSummaryList,
      context
    );
  }
  if (data.NextToken !== undefined) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListChangeSetsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChangeSetsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.marketplace.seymour.model#AccessDeniedException":
      response = await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServiceException":
    case "com.amazonaws.marketplace.seymour.model#InternalServiceException":
      response = await deserializeAws_restJson1_1InternalServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazonaws.marketplace.seymour.model#ThrottlingException":
      response = await deserializeAws_restJson1_1ThrottlingExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.marketplace.seymour.model#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.marketplace.seymour.model#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1ListEntitiesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEntitiesCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1ListEntitiesCommandError(output, context);
  }
  const contents: ListEntitiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListEntitiesResponse",
    EntitySummaryList: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.EntitySummaryList !== undefined) {
    contents.EntitySummaryList = deserializeAws_restJson1_1EntitySummaryList(
      data.EntitySummaryList,
      context
    );
  }
  if (data.NextToken !== undefined) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListEntitiesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEntitiesCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.marketplace.seymour.model#AccessDeniedException":
      response = await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServiceException":
    case "com.amazonaws.marketplace.seymour.model#InternalServiceException":
      response = await deserializeAws_restJson1_1InternalServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.marketplace.seymour.model#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazonaws.marketplace.seymour.model#ThrottlingException":
      response = await deserializeAws_restJson1_1ThrottlingExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.marketplace.seymour.model#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.marketplace.seymour.model#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1StartChangeSetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartChangeSetCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1StartChangeSetCommandError(
      output,
      context
    );
  }
  const contents: StartChangeSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StartChangeSetResponse",
    ChangeSetArn: undefined,
    ChangeSetId: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.ChangeSetArn !== undefined) {
    contents.ChangeSetArn = data.ChangeSetArn;
  }
  if (data.ChangeSetId !== undefined) {
    contents.ChangeSetId = data.ChangeSetId;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1StartChangeSetCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartChangeSetCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.marketplace.seymour.model#AccessDeniedException":
      response = await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServiceException":
    case "com.amazonaws.marketplace.seymour.model#InternalServiceException":
      response = await deserializeAws_restJson1_1InternalServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceInUseException":
    case "com.amazonaws.marketplace.seymour.model#ResourceInUseException":
      response = await deserializeAws_restJson1_1ResourceInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.marketplace.seymour.model#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.marketplace.seymour.model#ServiceQuotaExceededException":
      response = await deserializeAws_restJson1_1ServiceQuotaExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazonaws.marketplace.seymour.model#ThrottlingException":
      response = await deserializeAws_restJson1_1ThrottlingExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.marketplace.seymour.model#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.marketplace.seymour.model#${errorCode}`,
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
    __type: "AccessDeniedException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = output.body;
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1InternalServiceExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InternalServiceException> => {
  const contents: InternalServiceException = {
    __type: "InternalServiceException",
    $fault: "server",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = output.body;
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1ResourceInUseExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ResourceInUseException> => {
  const contents: ResourceInUseException = {
    __type: "ResourceInUseException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = output.body;
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
    __type: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = output.body;
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1ResourceNotSupportedExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ResourceNotSupportedException> => {
  const contents: ResourceNotSupportedException = {
    __type: "ResourceNotSupportedException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = output.body;
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1ServiceQuotaExceededExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const contents: ServiceQuotaExceededException = {
    __type: "ServiceQuotaExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = output.body;
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
    __type: "ThrottlingException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = output.body;
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
    __type: "ValidationException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = output.body;
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const serializeAws_restJson1_1Change = (
  input: Change,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ChangeType !== undefined) {
    bodyParams["ChangeType"] = input.ChangeType;
  }
  if (input.Details !== undefined) {
    bodyParams["Details"] = input.Details;
  }
  if (input.Entity !== undefined) {
    bodyParams["Entity"] = serializeAws_restJson1_1Entity(
      input.Entity,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1Entity = (
  input: Entity,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Identifier !== undefined) {
    bodyParams["Identifier"] = input.Identifier;
  }
  if (input.Type !== undefined) {
    bodyParams["Type"] = input.Type;
  }
  return bodyParams;
};

const serializeAws_restJson1_1Filter = (
  input: Filter,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.ValueList !== undefined) {
    bodyParams["ValueList"] = serializeAws_restJson1_1ValueList(
      input.ValueList,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1FilterList = (
  input: Array<Filter>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_restJson1_1Filter(entry, context)
  );
};

const serializeAws_restJson1_1RequestedChangeList = (
  input: Array<Change>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_restJson1_1Change(entry, context)
  );
};

const serializeAws_restJson1_1Sort = (
  input: Sort,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.SortBy !== undefined) {
    bodyParams["SortBy"] = input.SortBy;
  }
  if (input.SortOrder !== undefined) {
    bodyParams["SortOrder"] = input.SortOrder;
  }
  return bodyParams;
};

const serializeAws_restJson1_1ValueList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const deserializeAws_restJson1_1ChangeSetDescription = (
  output: any,
  context: __SerdeContext
): Array<ChangeSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1ChangeSummary(entry, context)
  );
};

const deserializeAws_restJson1_1ChangeSetSummaryList = (
  output: any,
  context: __SerdeContext
): Array<ChangeSetSummaryListItem> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1ChangeSetSummaryListItem(entry, context)
  );
};

const deserializeAws_restJson1_1ChangeSetSummaryListItem = (
  output: any,
  context: __SerdeContext
): ChangeSetSummaryListItem => {
  let contents: any = {
    __type: "ChangeSetSummaryListItem",
    ChangeSetArn: undefined,
    ChangeSetId: undefined,
    ChangeSetName: undefined,
    EndTime: undefined,
    EntityIdList: undefined,
    StartTime: undefined,
    Status: undefined
  };
  if (output.ChangeSetArn !== undefined) {
    contents.ChangeSetArn = output.ChangeSetArn;
  }
  if (output.ChangeSetId !== undefined) {
    contents.ChangeSetId = output.ChangeSetId;
  }
  if (output.ChangeSetName !== undefined) {
    contents.ChangeSetName = output.ChangeSetName;
  }
  if (output.EndTime !== undefined) {
    contents.EndTime = output.EndTime;
  }
  if (output.EntityIdList !== undefined) {
    contents.EntityIdList = deserializeAws_restJson1_1ResourceIdList(
      output.EntityIdList,
      context
    );
  }
  if (output.StartTime !== undefined) {
    contents.StartTime = output.StartTime;
  }
  if (output.Status !== undefined) {
    contents.Status = output.Status;
  }
  return contents;
};

const deserializeAws_restJson1_1ChangeSummary = (
  output: any,
  context: __SerdeContext
): ChangeSummary => {
  let contents: any = {
    __type: "ChangeSummary",
    ChangeType: undefined,
    Entity: undefined,
    ErrorDetailList: undefined
  };
  if (output.ChangeType !== undefined) {
    contents.ChangeType = output.ChangeType;
  }
  if (output.Entity !== undefined) {
    contents.Entity = deserializeAws_restJson1_1Entity(output.Entity, context);
  }
  if (output.ErrorDetailList !== undefined) {
    contents.ErrorDetailList = deserializeAws_restJson1_1ErrorDetailList(
      output.ErrorDetailList,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1Entity = (
  output: any,
  context: __SerdeContext
): Entity => {
  let contents: any = {
    __type: "Entity",
    Identifier: undefined,
    Type: undefined
  };
  if (output.Identifier !== undefined) {
    contents.Identifier = output.Identifier;
  }
  if (output.Type !== undefined) {
    contents.Type = output.Type;
  }
  return contents;
};

const deserializeAws_restJson1_1EntitySummary = (
  output: any,
  context: __SerdeContext
): EntitySummary => {
  let contents: any = {
    __type: "EntitySummary",
    EntityArn: undefined,
    EntityId: undefined,
    EntityType: undefined,
    LastModifiedDate: undefined,
    Name: undefined,
    Visibility: undefined
  };
  if (output.EntityArn !== undefined) {
    contents.EntityArn = output.EntityArn;
  }
  if (output.EntityId !== undefined) {
    contents.EntityId = output.EntityId;
  }
  if (output.EntityType !== undefined) {
    contents.EntityType = output.EntityType;
  }
  if (output.LastModifiedDate !== undefined) {
    contents.LastModifiedDate = output.LastModifiedDate;
  }
  if (output.Name !== undefined) {
    contents.Name = output.Name;
  }
  if (output.Visibility !== undefined) {
    contents.Visibility = output.Visibility;
  }
  return contents;
};

const deserializeAws_restJson1_1EntitySummaryList = (
  output: any,
  context: __SerdeContext
): Array<EntitySummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1EntitySummary(entry, context)
  );
};

const deserializeAws_restJson1_1ErrorDetail = (
  output: any,
  context: __SerdeContext
): ErrorDetail => {
  let contents: any = {
    __type: "ErrorDetail",
    ErrorCode: undefined,
    ErrorMessage: undefined
  };
  if (output.ErrorCode !== undefined) {
    contents.ErrorCode = output.ErrorCode;
  }
  if (output.ErrorMessage !== undefined) {
    contents.ErrorMessage = output.ErrorMessage;
  }
  return contents;
};

const deserializeAws_restJson1_1ErrorDetailList = (
  output: any,
  context: __SerdeContext
): Array<ErrorDetail> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1ErrorDetail(entry, context)
  );
};

const deserializeAws_restJson1_1ResourceIdList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
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
