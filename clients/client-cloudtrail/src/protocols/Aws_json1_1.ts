import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  parseEpochTimestamp as __parseEpochTimestamp,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { AddTagsCommandInput, AddTagsCommandOutput } from "../commands/AddTagsCommand";
import { CancelQueryCommandInput, CancelQueryCommandOutput } from "../commands/CancelQueryCommand";
import {
  CreateEventDataStoreCommandInput,
  CreateEventDataStoreCommandOutput,
} from "../commands/CreateEventDataStoreCommand";
import { CreateTrailCommandInput, CreateTrailCommandOutput } from "../commands/CreateTrailCommand";
import {
  DeleteEventDataStoreCommandInput,
  DeleteEventDataStoreCommandOutput,
} from "../commands/DeleteEventDataStoreCommand";
import { DeleteTrailCommandInput, DeleteTrailCommandOutput } from "../commands/DeleteTrailCommand";
import { DescribeQueryCommandInput, DescribeQueryCommandOutput } from "../commands/DescribeQueryCommand";
import { DescribeTrailsCommandInput, DescribeTrailsCommandOutput } from "../commands/DescribeTrailsCommand";
import { GetEventDataStoreCommandInput, GetEventDataStoreCommandOutput } from "../commands/GetEventDataStoreCommand";
import { GetEventSelectorsCommandInput, GetEventSelectorsCommandOutput } from "../commands/GetEventSelectorsCommand";
import {
  GetInsightSelectorsCommandInput,
  GetInsightSelectorsCommandOutput,
} from "../commands/GetInsightSelectorsCommand";
import { GetQueryResultsCommandInput, GetQueryResultsCommandOutput } from "../commands/GetQueryResultsCommand";
import { GetTrailCommandInput, GetTrailCommandOutput } from "../commands/GetTrailCommand";
import { GetTrailStatusCommandInput, GetTrailStatusCommandOutput } from "../commands/GetTrailStatusCommand";
import {
  ListEventDataStoresCommandInput,
  ListEventDataStoresCommandOutput,
} from "../commands/ListEventDataStoresCommand";
import { ListPublicKeysCommandInput, ListPublicKeysCommandOutput } from "../commands/ListPublicKeysCommand";
import { ListQueriesCommandInput, ListQueriesCommandOutput } from "../commands/ListQueriesCommand";
import { ListTagsCommandInput, ListTagsCommandOutput } from "../commands/ListTagsCommand";
import { ListTrailsCommandInput, ListTrailsCommandOutput } from "../commands/ListTrailsCommand";
import { LookupEventsCommandInput, LookupEventsCommandOutput } from "../commands/LookupEventsCommand";
import { PutEventSelectorsCommandInput, PutEventSelectorsCommandOutput } from "../commands/PutEventSelectorsCommand";
import {
  PutInsightSelectorsCommandInput,
  PutInsightSelectorsCommandOutput,
} from "../commands/PutInsightSelectorsCommand";
import { RemoveTagsCommandInput, RemoveTagsCommandOutput } from "../commands/RemoveTagsCommand";
import {
  RestoreEventDataStoreCommandInput,
  RestoreEventDataStoreCommandOutput,
} from "../commands/RestoreEventDataStoreCommand";
import { StartLoggingCommandInput, StartLoggingCommandOutput } from "../commands/StartLoggingCommand";
import { StartQueryCommandInput, StartQueryCommandOutput } from "../commands/StartQueryCommand";
import { StopLoggingCommandInput, StopLoggingCommandOutput } from "../commands/StopLoggingCommand";
import {
  UpdateEventDataStoreCommandInput,
  UpdateEventDataStoreCommandOutput,
} from "../commands/UpdateEventDataStoreCommand";
import { UpdateTrailCommandInput, UpdateTrailCommandOutput } from "../commands/UpdateTrailCommand";
import { CloudTrailServiceException as __BaseException } from "../models/CloudTrailServiceException";
import {
  AddTagsRequest,
  AddTagsResponse,
  AdvancedEventSelector,
  AdvancedFieldSelector,
  CancelQueryRequest,
  CancelQueryResponse,
  CloudTrailAccessNotEnabledException,
  CloudTrailARNInvalidException,
  CloudTrailInvalidClientTokenIdException,
  CloudWatchLogsDeliveryUnavailableException,
  ConflictException,
  CreateEventDataStoreRequest,
  CreateEventDataStoreResponse,
  CreateTrailRequest,
  CreateTrailResponse,
  DataResource,
  DeleteEventDataStoreRequest,
  DeleteEventDataStoreResponse,
  DeleteTrailRequest,
  DeleteTrailResponse,
  DescribeQueryRequest,
  DescribeQueryResponse,
  DescribeTrailsRequest,
  DescribeTrailsResponse,
  Event,
  EventDataStore,
  EventDataStoreAlreadyExistsException,
  EventDataStoreARNInvalidException,
  EventDataStoreMaxLimitExceededException,
  EventDataStoreNotFoundException,
  EventDataStoreTerminationProtectedException,
  EventSelector,
  GetEventDataStoreRequest,
  GetEventDataStoreResponse,
  GetEventSelectorsRequest,
  GetEventSelectorsResponse,
  GetInsightSelectorsRequest,
  GetInsightSelectorsResponse,
  GetQueryResultsRequest,
  GetQueryResultsResponse,
  GetTrailRequest,
  GetTrailResponse,
  GetTrailStatusRequest,
  GetTrailStatusResponse,
  InactiveEventDataStoreException,
  InactiveQueryException,
  InsightNotEnabledException,
  InsightSelector,
  InsufficientDependencyServiceAccessPermissionException,
  InsufficientEncryptionPolicyException,
  InsufficientS3BucketPolicyException,
  InsufficientSnsTopicPolicyException,
  InvalidCloudWatchLogsLogGroupArnException,
  InvalidCloudWatchLogsRoleArnException,
  InvalidDateRangeException,
  InvalidEventCategoryException,
  InvalidEventDataStoreStatusException,
  InvalidEventSelectorsException,
  InvalidHomeRegionException,
  InvalidInsightSelectorsException,
  InvalidKmsKeyIdException,
  InvalidLookupAttributesException,
  InvalidMaxResultsException,
  InvalidNextTokenException,
  InvalidParameterCombinationException,
  InvalidParameterException,
  InvalidQueryStatementException,
  InvalidQueryStatusException,
  InvalidS3BucketNameException,
  InvalidS3PrefixException,
  InvalidSnsTopicNameException,
  InvalidTagParameterException,
  InvalidTimeRangeException,
  InvalidTokenException,
  InvalidTrailNameException,
  KmsException,
  KmsKeyDisabledException,
  KmsKeyNotFoundException,
  ListEventDataStoresRequest,
  ListEventDataStoresResponse,
  ListPublicKeysRequest,
  ListPublicKeysResponse,
  ListQueriesRequest,
  ListQueriesResponse,
  ListTagsRequest,
  ListTagsResponse,
  ListTrailsRequest,
  ListTrailsResponse,
  LookupAttribute,
  LookupEventsRequest,
  LookupEventsResponse,
  MaxConcurrentQueriesException,
  MaximumNumberOfTrailsExceededException,
  NotOrganizationMasterAccountException,
  OperationNotPermittedException,
  OrganizationNotInAllFeaturesModeException,
  OrganizationsNotInUseException,
  PublicKey,
  PutEventSelectorsRequest,
  PutEventSelectorsResponse,
  PutInsightSelectorsRequest,
  PutInsightSelectorsResponse,
  Query,
  QueryIdNotFoundException,
  QueryStatistics,
  QueryStatisticsForDescribeQuery,
  RemoveTagsRequest,
  RemoveTagsResponse,
  Resource,
  ResourceNotFoundException,
  ResourceTag,
  ResourceTypeNotSupportedException,
  RestoreEventDataStoreRequest,
  RestoreEventDataStoreResponse,
  S3BucketDoesNotExistException,
  StartLoggingRequest,
  StartLoggingResponse,
  StartQueryRequest,
  StartQueryResponse,
  StopLoggingRequest,
  StopLoggingResponse,
  Tag,
  TagsLimitExceededException,
  Trail,
  TrailAlreadyExistsException,
  TrailInfo,
  TrailNotFoundException,
  TrailNotProvidedException,
  UnsupportedOperationException,
  UpdateEventDataStoreRequest,
  UpdateEventDataStoreResponse,
  UpdateTrailRequest,
  UpdateTrailResponse,
} from "../models/models_0";

export const serializeAws_json1_1AddTagsCommand = async (
  input: AddTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CloudTrail_20131101.AddTags",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AddTagsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CancelQueryCommand = async (
  input: CancelQueryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CloudTrail_20131101.CancelQuery",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CancelQueryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateEventDataStoreCommand = async (
  input: CreateEventDataStoreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CloudTrail_20131101.CreateEventDataStore",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateEventDataStoreRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateTrailCommand = async (
  input: CreateTrailCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CloudTrail_20131101.CreateTrail",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateTrailRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteEventDataStoreCommand = async (
  input: DeleteEventDataStoreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CloudTrail_20131101.DeleteEventDataStore",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteEventDataStoreRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteTrailCommand = async (
  input: DeleteTrailCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CloudTrail_20131101.DeleteTrail",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteTrailRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeQueryCommand = async (
  input: DescribeQueryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CloudTrail_20131101.DescribeQuery",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeQueryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeTrailsCommand = async (
  input: DescribeTrailsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CloudTrail_20131101.DescribeTrails",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeTrailsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetEventDataStoreCommand = async (
  input: GetEventDataStoreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CloudTrail_20131101.GetEventDataStore",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetEventDataStoreRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetEventSelectorsCommand = async (
  input: GetEventSelectorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CloudTrail_20131101.GetEventSelectors",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetEventSelectorsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetInsightSelectorsCommand = async (
  input: GetInsightSelectorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CloudTrail_20131101.GetInsightSelectors",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetInsightSelectorsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetQueryResultsCommand = async (
  input: GetQueryResultsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CloudTrail_20131101.GetQueryResults",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetQueryResultsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetTrailCommand = async (
  input: GetTrailCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CloudTrail_20131101.GetTrail",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetTrailRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetTrailStatusCommand = async (
  input: GetTrailStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CloudTrail_20131101.GetTrailStatus",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetTrailStatusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListEventDataStoresCommand = async (
  input: ListEventDataStoresCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CloudTrail_20131101.ListEventDataStores",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListEventDataStoresRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListPublicKeysCommand = async (
  input: ListPublicKeysCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CloudTrail_20131101.ListPublicKeys",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListPublicKeysRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListQueriesCommand = async (
  input: ListQueriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CloudTrail_20131101.ListQueries",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListQueriesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTagsCommand = async (
  input: ListTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CloudTrail_20131101.ListTags",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListTagsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTrailsCommand = async (
  input: ListTrailsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CloudTrail_20131101.ListTrails",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListTrailsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1LookupEventsCommand = async (
  input: LookupEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CloudTrail_20131101.LookupEvents",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1LookupEventsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutEventSelectorsCommand = async (
  input: PutEventSelectorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CloudTrail_20131101.PutEventSelectors",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutEventSelectorsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutInsightSelectorsCommand = async (
  input: PutInsightSelectorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CloudTrail_20131101.PutInsightSelectors",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutInsightSelectorsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RemoveTagsCommand = async (
  input: RemoveTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CloudTrail_20131101.RemoveTags",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RemoveTagsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RestoreEventDataStoreCommand = async (
  input: RestoreEventDataStoreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CloudTrail_20131101.RestoreEventDataStore",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RestoreEventDataStoreRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartLoggingCommand = async (
  input: StartLoggingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CloudTrail_20131101.StartLogging",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartLoggingRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartQueryCommand = async (
  input: StartQueryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CloudTrail_20131101.StartQuery",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartQueryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StopLoggingCommand = async (
  input: StopLoggingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CloudTrail_20131101.StopLogging",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StopLoggingRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateEventDataStoreCommand = async (
  input: UpdateEventDataStoreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CloudTrail_20131101.UpdateEventDataStore",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateEventDataStoreRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateTrailCommand = async (
  input: UpdateTrailCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CloudTrail_20131101.UpdateTrail",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateTrailRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1AddTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AddTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AddTagsResponse(data, context);
  const response: AddTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AddTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CloudTrailARNInvalidException":
    case "com.amazonaws.cloudtrail#CloudTrailARNInvalidException":
      throw await deserializeAws_json1_1CloudTrailARNInvalidExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.cloudtrail#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "EventDataStoreNotFoundException":
    case "com.amazonaws.cloudtrail#EventDataStoreNotFoundException":
      throw await deserializeAws_json1_1EventDataStoreNotFoundExceptionResponse(parsedOutput, context);
    case "InactiveEventDataStoreException":
    case "com.amazonaws.cloudtrail#InactiveEventDataStoreException":
      throw await deserializeAws_json1_1InactiveEventDataStoreExceptionResponse(parsedOutput, context);
    case "InvalidTagParameterException":
    case "com.amazonaws.cloudtrail#InvalidTagParameterException":
      throw await deserializeAws_json1_1InvalidTagParameterExceptionResponse(parsedOutput, context);
    case "InvalidTrailNameException":
    case "com.amazonaws.cloudtrail#InvalidTrailNameException":
      throw await deserializeAws_json1_1InvalidTrailNameExceptionResponse(parsedOutput, context);
    case "NotOrganizationMasterAccountException":
    case "com.amazonaws.cloudtrail#NotOrganizationMasterAccountException":
      throw await deserializeAws_json1_1NotOrganizationMasterAccountExceptionResponse(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.cloudtrail#OperationNotPermittedException":
      throw await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudtrail#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ResourceTypeNotSupportedException":
    case "com.amazonaws.cloudtrail#ResourceTypeNotSupportedException":
      throw await deserializeAws_json1_1ResourceTypeNotSupportedExceptionResponse(parsedOutput, context);
    case "TagsLimitExceededException":
    case "com.amazonaws.cloudtrail#TagsLimitExceededException":
      throw await deserializeAws_json1_1TagsLimitExceededExceptionResponse(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.cloudtrail#UnsupportedOperationException":
      throw await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1CancelQueryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelQueryCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CancelQueryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CancelQueryResponse(data, context);
  const response: CancelQueryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CancelQueryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelQueryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.cloudtrail#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "EventDataStoreARNInvalidException":
    case "com.amazonaws.cloudtrail#EventDataStoreARNInvalidException":
      throw await deserializeAws_json1_1EventDataStoreARNInvalidExceptionResponse(parsedOutput, context);
    case "EventDataStoreNotFoundException":
    case "com.amazonaws.cloudtrail#EventDataStoreNotFoundException":
      throw await deserializeAws_json1_1EventDataStoreNotFoundExceptionResponse(parsedOutput, context);
    case "InactiveEventDataStoreException":
    case "com.amazonaws.cloudtrail#InactiveEventDataStoreException":
      throw await deserializeAws_json1_1InactiveEventDataStoreExceptionResponse(parsedOutput, context);
    case "InactiveQueryException":
    case "com.amazonaws.cloudtrail#InactiveQueryException":
      throw await deserializeAws_json1_1InactiveQueryExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.cloudtrail#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.cloudtrail#OperationNotPermittedException":
      throw await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context);
    case "QueryIdNotFoundException":
    case "com.amazonaws.cloudtrail#QueryIdNotFoundException":
      throw await deserializeAws_json1_1QueryIdNotFoundExceptionResponse(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.cloudtrail#UnsupportedOperationException":
      throw await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1CreateEventDataStoreCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEventDataStoreCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateEventDataStoreCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateEventDataStoreResponse(data, context);
  const response: CreateEventDataStoreCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateEventDataStoreCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEventDataStoreCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CloudTrailAccessNotEnabledException":
    case "com.amazonaws.cloudtrail#CloudTrailAccessNotEnabledException":
      throw await deserializeAws_json1_1CloudTrailAccessNotEnabledExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.cloudtrail#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "EventDataStoreAlreadyExistsException":
    case "com.amazonaws.cloudtrail#EventDataStoreAlreadyExistsException":
      throw await deserializeAws_json1_1EventDataStoreAlreadyExistsExceptionResponse(parsedOutput, context);
    case "EventDataStoreMaxLimitExceededException":
    case "com.amazonaws.cloudtrail#EventDataStoreMaxLimitExceededException":
      throw await deserializeAws_json1_1EventDataStoreMaxLimitExceededExceptionResponse(parsedOutput, context);
    case "InsufficientDependencyServiceAccessPermissionException":
    case "com.amazonaws.cloudtrail#InsufficientDependencyServiceAccessPermissionException":
      throw await deserializeAws_json1_1InsufficientDependencyServiceAccessPermissionExceptionResponse(
        parsedOutput,
        context
      );
    case "InvalidParameterException":
    case "com.amazonaws.cloudtrail#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidTagParameterException":
    case "com.amazonaws.cloudtrail#InvalidTagParameterException":
      throw await deserializeAws_json1_1InvalidTagParameterExceptionResponse(parsedOutput, context);
    case "NotOrganizationMasterAccountException":
    case "com.amazonaws.cloudtrail#NotOrganizationMasterAccountException":
      throw await deserializeAws_json1_1NotOrganizationMasterAccountExceptionResponse(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.cloudtrail#OperationNotPermittedException":
      throw await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context);
    case "OrganizationNotInAllFeaturesModeException":
    case "com.amazonaws.cloudtrail#OrganizationNotInAllFeaturesModeException":
      throw await deserializeAws_json1_1OrganizationNotInAllFeaturesModeExceptionResponse(parsedOutput, context);
    case "OrganizationsNotInUseException":
    case "com.amazonaws.cloudtrail#OrganizationsNotInUseException":
      throw await deserializeAws_json1_1OrganizationsNotInUseExceptionResponse(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.cloudtrail#UnsupportedOperationException":
      throw await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1CreateTrailCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTrailCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateTrailCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateTrailResponse(data, context);
  const response: CreateTrailCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateTrailCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTrailCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CloudTrailAccessNotEnabledException":
    case "com.amazonaws.cloudtrail#CloudTrailAccessNotEnabledException":
      throw await deserializeAws_json1_1CloudTrailAccessNotEnabledExceptionResponse(parsedOutput, context);
    case "CloudTrailInvalidClientTokenIdException":
    case "com.amazonaws.cloudtrail#CloudTrailInvalidClientTokenIdException":
      throw await deserializeAws_json1_1CloudTrailInvalidClientTokenIdExceptionResponse(parsedOutput, context);
    case "CloudWatchLogsDeliveryUnavailableException":
    case "com.amazonaws.cloudtrail#CloudWatchLogsDeliveryUnavailableException":
      throw await deserializeAws_json1_1CloudWatchLogsDeliveryUnavailableExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.cloudtrail#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InsufficientDependencyServiceAccessPermissionException":
    case "com.amazonaws.cloudtrail#InsufficientDependencyServiceAccessPermissionException":
      throw await deserializeAws_json1_1InsufficientDependencyServiceAccessPermissionExceptionResponse(
        parsedOutput,
        context
      );
    case "InsufficientEncryptionPolicyException":
    case "com.amazonaws.cloudtrail#InsufficientEncryptionPolicyException":
      throw await deserializeAws_json1_1InsufficientEncryptionPolicyExceptionResponse(parsedOutput, context);
    case "InsufficientS3BucketPolicyException":
    case "com.amazonaws.cloudtrail#InsufficientS3BucketPolicyException":
      throw await deserializeAws_json1_1InsufficientS3BucketPolicyExceptionResponse(parsedOutput, context);
    case "InsufficientSnsTopicPolicyException":
    case "com.amazonaws.cloudtrail#InsufficientSnsTopicPolicyException":
      throw await deserializeAws_json1_1InsufficientSnsTopicPolicyExceptionResponse(parsedOutput, context);
    case "InvalidCloudWatchLogsLogGroupArnException":
    case "com.amazonaws.cloudtrail#InvalidCloudWatchLogsLogGroupArnException":
      throw await deserializeAws_json1_1InvalidCloudWatchLogsLogGroupArnExceptionResponse(parsedOutput, context);
    case "InvalidCloudWatchLogsRoleArnException":
    case "com.amazonaws.cloudtrail#InvalidCloudWatchLogsRoleArnException":
      throw await deserializeAws_json1_1InvalidCloudWatchLogsRoleArnExceptionResponse(parsedOutput, context);
    case "InvalidKmsKeyIdException":
    case "com.amazonaws.cloudtrail#InvalidKmsKeyIdException":
      throw await deserializeAws_json1_1InvalidKmsKeyIdExceptionResponse(parsedOutput, context);
    case "InvalidParameterCombinationException":
    case "com.amazonaws.cloudtrail#InvalidParameterCombinationException":
      throw await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context);
    case "InvalidS3BucketNameException":
    case "com.amazonaws.cloudtrail#InvalidS3BucketNameException":
      throw await deserializeAws_json1_1InvalidS3BucketNameExceptionResponse(parsedOutput, context);
    case "InvalidS3PrefixException":
    case "com.amazonaws.cloudtrail#InvalidS3PrefixException":
      throw await deserializeAws_json1_1InvalidS3PrefixExceptionResponse(parsedOutput, context);
    case "InvalidSnsTopicNameException":
    case "com.amazonaws.cloudtrail#InvalidSnsTopicNameException":
      throw await deserializeAws_json1_1InvalidSnsTopicNameExceptionResponse(parsedOutput, context);
    case "InvalidTagParameterException":
    case "com.amazonaws.cloudtrail#InvalidTagParameterException":
      throw await deserializeAws_json1_1InvalidTagParameterExceptionResponse(parsedOutput, context);
    case "InvalidTrailNameException":
    case "com.amazonaws.cloudtrail#InvalidTrailNameException":
      throw await deserializeAws_json1_1InvalidTrailNameExceptionResponse(parsedOutput, context);
    case "KmsException":
    case "com.amazonaws.cloudtrail#KmsException":
      throw await deserializeAws_json1_1KmsExceptionResponse(parsedOutput, context);
    case "KmsKeyDisabledException":
    case "com.amazonaws.cloudtrail#KmsKeyDisabledException":
      throw await deserializeAws_json1_1KmsKeyDisabledExceptionResponse(parsedOutput, context);
    case "KmsKeyNotFoundException":
    case "com.amazonaws.cloudtrail#KmsKeyNotFoundException":
      throw await deserializeAws_json1_1KmsKeyNotFoundExceptionResponse(parsedOutput, context);
    case "MaximumNumberOfTrailsExceededException":
    case "com.amazonaws.cloudtrail#MaximumNumberOfTrailsExceededException":
      throw await deserializeAws_json1_1MaximumNumberOfTrailsExceededExceptionResponse(parsedOutput, context);
    case "NotOrganizationMasterAccountException":
    case "com.amazonaws.cloudtrail#NotOrganizationMasterAccountException":
      throw await deserializeAws_json1_1NotOrganizationMasterAccountExceptionResponse(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.cloudtrail#OperationNotPermittedException":
      throw await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context);
    case "OrganizationNotInAllFeaturesModeException":
    case "com.amazonaws.cloudtrail#OrganizationNotInAllFeaturesModeException":
      throw await deserializeAws_json1_1OrganizationNotInAllFeaturesModeExceptionResponse(parsedOutput, context);
    case "OrganizationsNotInUseException":
    case "com.amazonaws.cloudtrail#OrganizationsNotInUseException":
      throw await deserializeAws_json1_1OrganizationsNotInUseExceptionResponse(parsedOutput, context);
    case "S3BucketDoesNotExistException":
    case "com.amazonaws.cloudtrail#S3BucketDoesNotExistException":
      throw await deserializeAws_json1_1S3BucketDoesNotExistExceptionResponse(parsedOutput, context);
    case "TrailAlreadyExistsException":
    case "com.amazonaws.cloudtrail#TrailAlreadyExistsException":
      throw await deserializeAws_json1_1TrailAlreadyExistsExceptionResponse(parsedOutput, context);
    case "TrailNotProvidedException":
    case "com.amazonaws.cloudtrail#TrailNotProvidedException":
      throw await deserializeAws_json1_1TrailNotProvidedExceptionResponse(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.cloudtrail#UnsupportedOperationException":
      throw await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1DeleteEventDataStoreCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEventDataStoreCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteEventDataStoreCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteEventDataStoreResponse(data, context);
  const response: DeleteEventDataStoreCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteEventDataStoreCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEventDataStoreCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EventDataStoreARNInvalidException":
    case "com.amazonaws.cloudtrail#EventDataStoreARNInvalidException":
      throw await deserializeAws_json1_1EventDataStoreARNInvalidExceptionResponse(parsedOutput, context);
    case "EventDataStoreNotFoundException":
    case "com.amazonaws.cloudtrail#EventDataStoreNotFoundException":
      throw await deserializeAws_json1_1EventDataStoreNotFoundExceptionResponse(parsedOutput, context);
    case "EventDataStoreTerminationProtectedException":
    case "com.amazonaws.cloudtrail#EventDataStoreTerminationProtectedException":
      throw await deserializeAws_json1_1EventDataStoreTerminationProtectedExceptionResponse(parsedOutput, context);
    case "InsufficientDependencyServiceAccessPermissionException":
    case "com.amazonaws.cloudtrail#InsufficientDependencyServiceAccessPermissionException":
      throw await deserializeAws_json1_1InsufficientDependencyServiceAccessPermissionExceptionResponse(
        parsedOutput,
        context
      );
    case "InvalidParameterException":
    case "com.amazonaws.cloudtrail#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "NotOrganizationMasterAccountException":
    case "com.amazonaws.cloudtrail#NotOrganizationMasterAccountException":
      throw await deserializeAws_json1_1NotOrganizationMasterAccountExceptionResponse(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.cloudtrail#OperationNotPermittedException":
      throw await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.cloudtrail#UnsupportedOperationException":
      throw await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1DeleteTrailCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTrailCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteTrailCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteTrailResponse(data, context);
  const response: DeleteTrailCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteTrailCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTrailCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.cloudtrail#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InsufficientDependencyServiceAccessPermissionException":
    case "com.amazonaws.cloudtrail#InsufficientDependencyServiceAccessPermissionException":
      throw await deserializeAws_json1_1InsufficientDependencyServiceAccessPermissionExceptionResponse(
        parsedOutput,
        context
      );
    case "InvalidHomeRegionException":
    case "com.amazonaws.cloudtrail#InvalidHomeRegionException":
      throw await deserializeAws_json1_1InvalidHomeRegionExceptionResponse(parsedOutput, context);
    case "InvalidTrailNameException":
    case "com.amazonaws.cloudtrail#InvalidTrailNameException":
      throw await deserializeAws_json1_1InvalidTrailNameExceptionResponse(parsedOutput, context);
    case "NotOrganizationMasterAccountException":
    case "com.amazonaws.cloudtrail#NotOrganizationMasterAccountException":
      throw await deserializeAws_json1_1NotOrganizationMasterAccountExceptionResponse(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.cloudtrail#OperationNotPermittedException":
      throw await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context);
    case "TrailNotFoundException":
    case "com.amazonaws.cloudtrail#TrailNotFoundException":
      throw await deserializeAws_json1_1TrailNotFoundExceptionResponse(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.cloudtrail#UnsupportedOperationException":
      throw await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1DescribeQueryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeQueryCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeQueryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeQueryResponse(data, context);
  const response: DescribeQueryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeQueryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeQueryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EventDataStoreARNInvalidException":
    case "com.amazonaws.cloudtrail#EventDataStoreARNInvalidException":
      throw await deserializeAws_json1_1EventDataStoreARNInvalidExceptionResponse(parsedOutput, context);
    case "EventDataStoreNotFoundException":
    case "com.amazonaws.cloudtrail#EventDataStoreNotFoundException":
      throw await deserializeAws_json1_1EventDataStoreNotFoundExceptionResponse(parsedOutput, context);
    case "InactiveEventDataStoreException":
    case "com.amazonaws.cloudtrail#InactiveEventDataStoreException":
      throw await deserializeAws_json1_1InactiveEventDataStoreExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.cloudtrail#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.cloudtrail#OperationNotPermittedException":
      throw await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context);
    case "QueryIdNotFoundException":
    case "com.amazonaws.cloudtrail#QueryIdNotFoundException":
      throw await deserializeAws_json1_1QueryIdNotFoundExceptionResponse(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.cloudtrail#UnsupportedOperationException":
      throw await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1DescribeTrailsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTrailsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeTrailsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeTrailsResponse(data, context);
  const response: DescribeTrailsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeTrailsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTrailsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidTrailNameException":
    case "com.amazonaws.cloudtrail#InvalidTrailNameException":
      throw await deserializeAws_json1_1InvalidTrailNameExceptionResponse(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.cloudtrail#OperationNotPermittedException":
      throw await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.cloudtrail#UnsupportedOperationException":
      throw await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1GetEventDataStoreCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEventDataStoreCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetEventDataStoreCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetEventDataStoreResponse(data, context);
  const response: GetEventDataStoreCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetEventDataStoreCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEventDataStoreCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EventDataStoreARNInvalidException":
    case "com.amazonaws.cloudtrail#EventDataStoreARNInvalidException":
      throw await deserializeAws_json1_1EventDataStoreARNInvalidExceptionResponse(parsedOutput, context);
    case "EventDataStoreNotFoundException":
    case "com.amazonaws.cloudtrail#EventDataStoreNotFoundException":
      throw await deserializeAws_json1_1EventDataStoreNotFoundExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.cloudtrail#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.cloudtrail#OperationNotPermittedException":
      throw await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.cloudtrail#UnsupportedOperationException":
      throw await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1GetEventSelectorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEventSelectorsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetEventSelectorsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetEventSelectorsResponse(data, context);
  const response: GetEventSelectorsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetEventSelectorsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEventSelectorsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidTrailNameException":
    case "com.amazonaws.cloudtrail#InvalidTrailNameException":
      throw await deserializeAws_json1_1InvalidTrailNameExceptionResponse(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.cloudtrail#OperationNotPermittedException":
      throw await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context);
    case "TrailNotFoundException":
    case "com.amazonaws.cloudtrail#TrailNotFoundException":
      throw await deserializeAws_json1_1TrailNotFoundExceptionResponse(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.cloudtrail#UnsupportedOperationException":
      throw await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1GetInsightSelectorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInsightSelectorsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetInsightSelectorsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetInsightSelectorsResponse(data, context);
  const response: GetInsightSelectorsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetInsightSelectorsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInsightSelectorsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InsightNotEnabledException":
    case "com.amazonaws.cloudtrail#InsightNotEnabledException":
      throw await deserializeAws_json1_1InsightNotEnabledExceptionResponse(parsedOutput, context);
    case "InvalidTrailNameException":
    case "com.amazonaws.cloudtrail#InvalidTrailNameException":
      throw await deserializeAws_json1_1InvalidTrailNameExceptionResponse(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.cloudtrail#OperationNotPermittedException":
      throw await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context);
    case "TrailNotFoundException":
    case "com.amazonaws.cloudtrail#TrailNotFoundException":
      throw await deserializeAws_json1_1TrailNotFoundExceptionResponse(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.cloudtrail#UnsupportedOperationException":
      throw await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1GetQueryResultsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetQueryResultsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetQueryResultsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetQueryResultsResponse(data, context);
  const response: GetQueryResultsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetQueryResultsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetQueryResultsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EventDataStoreARNInvalidException":
    case "com.amazonaws.cloudtrail#EventDataStoreARNInvalidException":
      throw await deserializeAws_json1_1EventDataStoreARNInvalidExceptionResponse(parsedOutput, context);
    case "EventDataStoreNotFoundException":
    case "com.amazonaws.cloudtrail#EventDataStoreNotFoundException":
      throw await deserializeAws_json1_1EventDataStoreNotFoundExceptionResponse(parsedOutput, context);
    case "InactiveEventDataStoreException":
    case "com.amazonaws.cloudtrail#InactiveEventDataStoreException":
      throw await deserializeAws_json1_1InactiveEventDataStoreExceptionResponse(parsedOutput, context);
    case "InvalidMaxResultsException":
    case "com.amazonaws.cloudtrail#InvalidMaxResultsException":
      throw await deserializeAws_json1_1InvalidMaxResultsExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.cloudtrail#InvalidNextTokenException":
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.cloudtrail#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.cloudtrail#OperationNotPermittedException":
      throw await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context);
    case "QueryIdNotFoundException":
    case "com.amazonaws.cloudtrail#QueryIdNotFoundException":
      throw await deserializeAws_json1_1QueryIdNotFoundExceptionResponse(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.cloudtrail#UnsupportedOperationException":
      throw await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1GetTrailCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTrailCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetTrailCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetTrailResponse(data, context);
  const response: GetTrailCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetTrailCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTrailCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidTrailNameException":
    case "com.amazonaws.cloudtrail#InvalidTrailNameException":
      throw await deserializeAws_json1_1InvalidTrailNameExceptionResponse(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.cloudtrail#OperationNotPermittedException":
      throw await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context);
    case "TrailNotFoundException":
    case "com.amazonaws.cloudtrail#TrailNotFoundException":
      throw await deserializeAws_json1_1TrailNotFoundExceptionResponse(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.cloudtrail#UnsupportedOperationException":
      throw await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1GetTrailStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTrailStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetTrailStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetTrailStatusResponse(data, context);
  const response: GetTrailStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetTrailStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTrailStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidTrailNameException":
    case "com.amazonaws.cloudtrail#InvalidTrailNameException":
      throw await deserializeAws_json1_1InvalidTrailNameExceptionResponse(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.cloudtrail#OperationNotPermittedException":
      throw await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context);
    case "TrailNotFoundException":
    case "com.amazonaws.cloudtrail#TrailNotFoundException":
      throw await deserializeAws_json1_1TrailNotFoundExceptionResponse(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.cloudtrail#UnsupportedOperationException":
      throw await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1ListEventDataStoresCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEventDataStoresCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListEventDataStoresCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListEventDataStoresResponse(data, context);
  const response: ListEventDataStoresCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListEventDataStoresCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEventDataStoresCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidMaxResultsException":
    case "com.amazonaws.cloudtrail#InvalidMaxResultsException":
      throw await deserializeAws_json1_1InvalidMaxResultsExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.cloudtrail#InvalidNextTokenException":
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.cloudtrail#OperationNotPermittedException":
      throw await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.cloudtrail#UnsupportedOperationException":
      throw await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1ListPublicKeysCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPublicKeysCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListPublicKeysCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListPublicKeysResponse(data, context);
  const response: ListPublicKeysCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListPublicKeysCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPublicKeysCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidTimeRangeException":
    case "com.amazonaws.cloudtrail#InvalidTimeRangeException":
      throw await deserializeAws_json1_1InvalidTimeRangeExceptionResponse(parsedOutput, context);
    case "InvalidTokenException":
    case "com.amazonaws.cloudtrail#InvalidTokenException":
      throw await deserializeAws_json1_1InvalidTokenExceptionResponse(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.cloudtrail#OperationNotPermittedException":
      throw await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.cloudtrail#UnsupportedOperationException":
      throw await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1ListQueriesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListQueriesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListQueriesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListQueriesResponse(data, context);
  const response: ListQueriesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListQueriesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListQueriesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EventDataStoreARNInvalidException":
    case "com.amazonaws.cloudtrail#EventDataStoreARNInvalidException":
      throw await deserializeAws_json1_1EventDataStoreARNInvalidExceptionResponse(parsedOutput, context);
    case "EventDataStoreNotFoundException":
    case "com.amazonaws.cloudtrail#EventDataStoreNotFoundException":
      throw await deserializeAws_json1_1EventDataStoreNotFoundExceptionResponse(parsedOutput, context);
    case "InactiveEventDataStoreException":
    case "com.amazonaws.cloudtrail#InactiveEventDataStoreException":
      throw await deserializeAws_json1_1InactiveEventDataStoreExceptionResponse(parsedOutput, context);
    case "InvalidDateRangeException":
    case "com.amazonaws.cloudtrail#InvalidDateRangeException":
      throw await deserializeAws_json1_1InvalidDateRangeExceptionResponse(parsedOutput, context);
    case "InvalidMaxResultsException":
    case "com.amazonaws.cloudtrail#InvalidMaxResultsException":
      throw await deserializeAws_json1_1InvalidMaxResultsExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.cloudtrail#InvalidNextTokenException":
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.cloudtrail#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidQueryStatusException":
    case "com.amazonaws.cloudtrail#InvalidQueryStatusException":
      throw await deserializeAws_json1_1InvalidQueryStatusExceptionResponse(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.cloudtrail#OperationNotPermittedException":
      throw await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.cloudtrail#UnsupportedOperationException":
      throw await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1ListTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTagsResponse(data, context);
  const response: ListTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CloudTrailARNInvalidException":
    case "com.amazonaws.cloudtrail#CloudTrailARNInvalidException":
      throw await deserializeAws_json1_1CloudTrailARNInvalidExceptionResponse(parsedOutput, context);
    case "EventDataStoreNotFoundException":
    case "com.amazonaws.cloudtrail#EventDataStoreNotFoundException":
      throw await deserializeAws_json1_1EventDataStoreNotFoundExceptionResponse(parsedOutput, context);
    case "InactiveEventDataStoreException":
    case "com.amazonaws.cloudtrail#InactiveEventDataStoreException":
      throw await deserializeAws_json1_1InactiveEventDataStoreExceptionResponse(parsedOutput, context);
    case "InvalidTokenException":
    case "com.amazonaws.cloudtrail#InvalidTokenException":
      throw await deserializeAws_json1_1InvalidTokenExceptionResponse(parsedOutput, context);
    case "InvalidTrailNameException":
    case "com.amazonaws.cloudtrail#InvalidTrailNameException":
      throw await deserializeAws_json1_1InvalidTrailNameExceptionResponse(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.cloudtrail#OperationNotPermittedException":
      throw await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudtrail#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ResourceTypeNotSupportedException":
    case "com.amazonaws.cloudtrail#ResourceTypeNotSupportedException":
      throw await deserializeAws_json1_1ResourceTypeNotSupportedExceptionResponse(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.cloudtrail#UnsupportedOperationException":
      throw await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1ListTrailsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTrailsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListTrailsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTrailsResponse(data, context);
  const response: ListTrailsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListTrailsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTrailsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "OperationNotPermittedException":
    case "com.amazonaws.cloudtrail#OperationNotPermittedException":
      throw await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.cloudtrail#UnsupportedOperationException":
      throw await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1LookupEventsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<LookupEventsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1LookupEventsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1LookupEventsResponse(data, context);
  const response: LookupEventsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1LookupEventsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<LookupEventsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidEventCategoryException":
    case "com.amazonaws.cloudtrail#InvalidEventCategoryException":
      throw await deserializeAws_json1_1InvalidEventCategoryExceptionResponse(parsedOutput, context);
    case "InvalidLookupAttributesException":
    case "com.amazonaws.cloudtrail#InvalidLookupAttributesException":
      throw await deserializeAws_json1_1InvalidLookupAttributesExceptionResponse(parsedOutput, context);
    case "InvalidMaxResultsException":
    case "com.amazonaws.cloudtrail#InvalidMaxResultsException":
      throw await deserializeAws_json1_1InvalidMaxResultsExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.cloudtrail#InvalidNextTokenException":
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "InvalidTimeRangeException":
    case "com.amazonaws.cloudtrail#InvalidTimeRangeException":
      throw await deserializeAws_json1_1InvalidTimeRangeExceptionResponse(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.cloudtrail#OperationNotPermittedException":
      throw await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.cloudtrail#UnsupportedOperationException":
      throw await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1PutEventSelectorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutEventSelectorsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutEventSelectorsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutEventSelectorsResponse(data, context);
  const response: PutEventSelectorsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutEventSelectorsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutEventSelectorsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InsufficientDependencyServiceAccessPermissionException":
    case "com.amazonaws.cloudtrail#InsufficientDependencyServiceAccessPermissionException":
      throw await deserializeAws_json1_1InsufficientDependencyServiceAccessPermissionExceptionResponse(
        parsedOutput,
        context
      );
    case "InvalidEventSelectorsException":
    case "com.amazonaws.cloudtrail#InvalidEventSelectorsException":
      throw await deserializeAws_json1_1InvalidEventSelectorsExceptionResponse(parsedOutput, context);
    case "InvalidHomeRegionException":
    case "com.amazonaws.cloudtrail#InvalidHomeRegionException":
      throw await deserializeAws_json1_1InvalidHomeRegionExceptionResponse(parsedOutput, context);
    case "InvalidTrailNameException":
    case "com.amazonaws.cloudtrail#InvalidTrailNameException":
      throw await deserializeAws_json1_1InvalidTrailNameExceptionResponse(parsedOutput, context);
    case "NotOrganizationMasterAccountException":
    case "com.amazonaws.cloudtrail#NotOrganizationMasterAccountException":
      throw await deserializeAws_json1_1NotOrganizationMasterAccountExceptionResponse(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.cloudtrail#OperationNotPermittedException":
      throw await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context);
    case "TrailNotFoundException":
    case "com.amazonaws.cloudtrail#TrailNotFoundException":
      throw await deserializeAws_json1_1TrailNotFoundExceptionResponse(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.cloudtrail#UnsupportedOperationException":
      throw await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1PutInsightSelectorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutInsightSelectorsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutInsightSelectorsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutInsightSelectorsResponse(data, context);
  const response: PutInsightSelectorsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutInsightSelectorsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutInsightSelectorsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InsufficientEncryptionPolicyException":
    case "com.amazonaws.cloudtrail#InsufficientEncryptionPolicyException":
      throw await deserializeAws_json1_1InsufficientEncryptionPolicyExceptionResponse(parsedOutput, context);
    case "InsufficientS3BucketPolicyException":
    case "com.amazonaws.cloudtrail#InsufficientS3BucketPolicyException":
      throw await deserializeAws_json1_1InsufficientS3BucketPolicyExceptionResponse(parsedOutput, context);
    case "InvalidHomeRegionException":
    case "com.amazonaws.cloudtrail#InvalidHomeRegionException":
      throw await deserializeAws_json1_1InvalidHomeRegionExceptionResponse(parsedOutput, context);
    case "InvalidInsightSelectorsException":
    case "com.amazonaws.cloudtrail#InvalidInsightSelectorsException":
      throw await deserializeAws_json1_1InvalidInsightSelectorsExceptionResponse(parsedOutput, context);
    case "InvalidTrailNameException":
    case "com.amazonaws.cloudtrail#InvalidTrailNameException":
      throw await deserializeAws_json1_1InvalidTrailNameExceptionResponse(parsedOutput, context);
    case "KmsException":
    case "com.amazonaws.cloudtrail#KmsException":
      throw await deserializeAws_json1_1KmsExceptionResponse(parsedOutput, context);
    case "NotOrganizationMasterAccountException":
    case "com.amazonaws.cloudtrail#NotOrganizationMasterAccountException":
      throw await deserializeAws_json1_1NotOrganizationMasterAccountExceptionResponse(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.cloudtrail#OperationNotPermittedException":
      throw await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context);
    case "S3BucketDoesNotExistException":
    case "com.amazonaws.cloudtrail#S3BucketDoesNotExistException":
      throw await deserializeAws_json1_1S3BucketDoesNotExistExceptionResponse(parsedOutput, context);
    case "TrailNotFoundException":
    case "com.amazonaws.cloudtrail#TrailNotFoundException":
      throw await deserializeAws_json1_1TrailNotFoundExceptionResponse(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.cloudtrail#UnsupportedOperationException":
      throw await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1RemoveTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RemoveTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RemoveTagsResponse(data, context);
  const response: RemoveTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RemoveTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CloudTrailARNInvalidException":
    case "com.amazonaws.cloudtrail#CloudTrailARNInvalidException":
      throw await deserializeAws_json1_1CloudTrailARNInvalidExceptionResponse(parsedOutput, context);
    case "EventDataStoreNotFoundException":
    case "com.amazonaws.cloudtrail#EventDataStoreNotFoundException":
      throw await deserializeAws_json1_1EventDataStoreNotFoundExceptionResponse(parsedOutput, context);
    case "InactiveEventDataStoreException":
    case "com.amazonaws.cloudtrail#InactiveEventDataStoreException":
      throw await deserializeAws_json1_1InactiveEventDataStoreExceptionResponse(parsedOutput, context);
    case "InvalidTagParameterException":
    case "com.amazonaws.cloudtrail#InvalidTagParameterException":
      throw await deserializeAws_json1_1InvalidTagParameterExceptionResponse(parsedOutput, context);
    case "InvalidTrailNameException":
    case "com.amazonaws.cloudtrail#InvalidTrailNameException":
      throw await deserializeAws_json1_1InvalidTrailNameExceptionResponse(parsedOutput, context);
    case "NotOrganizationMasterAccountException":
    case "com.amazonaws.cloudtrail#NotOrganizationMasterAccountException":
      throw await deserializeAws_json1_1NotOrganizationMasterAccountExceptionResponse(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.cloudtrail#OperationNotPermittedException":
      throw await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudtrail#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ResourceTypeNotSupportedException":
    case "com.amazonaws.cloudtrail#ResourceTypeNotSupportedException":
      throw await deserializeAws_json1_1ResourceTypeNotSupportedExceptionResponse(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.cloudtrail#UnsupportedOperationException":
      throw await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1RestoreEventDataStoreCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreEventDataStoreCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RestoreEventDataStoreCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RestoreEventDataStoreResponse(data, context);
  const response: RestoreEventDataStoreCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RestoreEventDataStoreCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreEventDataStoreCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CloudTrailAccessNotEnabledException":
    case "com.amazonaws.cloudtrail#CloudTrailAccessNotEnabledException":
      throw await deserializeAws_json1_1CloudTrailAccessNotEnabledExceptionResponse(parsedOutput, context);
    case "EventDataStoreARNInvalidException":
    case "com.amazonaws.cloudtrail#EventDataStoreARNInvalidException":
      throw await deserializeAws_json1_1EventDataStoreARNInvalidExceptionResponse(parsedOutput, context);
    case "EventDataStoreMaxLimitExceededException":
    case "com.amazonaws.cloudtrail#EventDataStoreMaxLimitExceededException":
      throw await deserializeAws_json1_1EventDataStoreMaxLimitExceededExceptionResponse(parsedOutput, context);
    case "EventDataStoreNotFoundException":
    case "com.amazonaws.cloudtrail#EventDataStoreNotFoundException":
      throw await deserializeAws_json1_1EventDataStoreNotFoundExceptionResponse(parsedOutput, context);
    case "InsufficientDependencyServiceAccessPermissionException":
    case "com.amazonaws.cloudtrail#InsufficientDependencyServiceAccessPermissionException":
      throw await deserializeAws_json1_1InsufficientDependencyServiceAccessPermissionExceptionResponse(
        parsedOutput,
        context
      );
    case "InvalidEventDataStoreStatusException":
    case "com.amazonaws.cloudtrail#InvalidEventDataStoreStatusException":
      throw await deserializeAws_json1_1InvalidEventDataStoreStatusExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.cloudtrail#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "NotOrganizationMasterAccountException":
    case "com.amazonaws.cloudtrail#NotOrganizationMasterAccountException":
      throw await deserializeAws_json1_1NotOrganizationMasterAccountExceptionResponse(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.cloudtrail#OperationNotPermittedException":
      throw await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context);
    case "OrganizationNotInAllFeaturesModeException":
    case "com.amazonaws.cloudtrail#OrganizationNotInAllFeaturesModeException":
      throw await deserializeAws_json1_1OrganizationNotInAllFeaturesModeExceptionResponse(parsedOutput, context);
    case "OrganizationsNotInUseException":
    case "com.amazonaws.cloudtrail#OrganizationsNotInUseException":
      throw await deserializeAws_json1_1OrganizationsNotInUseExceptionResponse(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.cloudtrail#UnsupportedOperationException":
      throw await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1StartLoggingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartLoggingCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartLoggingCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartLoggingResponse(data, context);
  const response: StartLoggingCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartLoggingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartLoggingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InsufficientDependencyServiceAccessPermissionException":
    case "com.amazonaws.cloudtrail#InsufficientDependencyServiceAccessPermissionException":
      throw await deserializeAws_json1_1InsufficientDependencyServiceAccessPermissionExceptionResponse(
        parsedOutput,
        context
      );
    case "InvalidHomeRegionException":
    case "com.amazonaws.cloudtrail#InvalidHomeRegionException":
      throw await deserializeAws_json1_1InvalidHomeRegionExceptionResponse(parsedOutput, context);
    case "InvalidTrailNameException":
    case "com.amazonaws.cloudtrail#InvalidTrailNameException":
      throw await deserializeAws_json1_1InvalidTrailNameExceptionResponse(parsedOutput, context);
    case "NotOrganizationMasterAccountException":
    case "com.amazonaws.cloudtrail#NotOrganizationMasterAccountException":
      throw await deserializeAws_json1_1NotOrganizationMasterAccountExceptionResponse(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.cloudtrail#OperationNotPermittedException":
      throw await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context);
    case "TrailNotFoundException":
    case "com.amazonaws.cloudtrail#TrailNotFoundException":
      throw await deserializeAws_json1_1TrailNotFoundExceptionResponse(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.cloudtrail#UnsupportedOperationException":
      throw await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1StartQueryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartQueryCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartQueryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartQueryResponse(data, context);
  const response: StartQueryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartQueryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartQueryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EventDataStoreARNInvalidException":
    case "com.amazonaws.cloudtrail#EventDataStoreARNInvalidException":
      throw await deserializeAws_json1_1EventDataStoreARNInvalidExceptionResponse(parsedOutput, context);
    case "EventDataStoreNotFoundException":
    case "com.amazonaws.cloudtrail#EventDataStoreNotFoundException":
      throw await deserializeAws_json1_1EventDataStoreNotFoundExceptionResponse(parsedOutput, context);
    case "InactiveEventDataStoreException":
    case "com.amazonaws.cloudtrail#InactiveEventDataStoreException":
      throw await deserializeAws_json1_1InactiveEventDataStoreExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.cloudtrail#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidQueryStatementException":
    case "com.amazonaws.cloudtrail#InvalidQueryStatementException":
      throw await deserializeAws_json1_1InvalidQueryStatementExceptionResponse(parsedOutput, context);
    case "MaxConcurrentQueriesException":
    case "com.amazonaws.cloudtrail#MaxConcurrentQueriesException":
      throw await deserializeAws_json1_1MaxConcurrentQueriesExceptionResponse(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.cloudtrail#OperationNotPermittedException":
      throw await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.cloudtrail#UnsupportedOperationException":
      throw await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1StopLoggingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopLoggingCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StopLoggingCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StopLoggingResponse(data, context);
  const response: StopLoggingCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StopLoggingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopLoggingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InsufficientDependencyServiceAccessPermissionException":
    case "com.amazonaws.cloudtrail#InsufficientDependencyServiceAccessPermissionException":
      throw await deserializeAws_json1_1InsufficientDependencyServiceAccessPermissionExceptionResponse(
        parsedOutput,
        context
      );
    case "InvalidHomeRegionException":
    case "com.amazonaws.cloudtrail#InvalidHomeRegionException":
      throw await deserializeAws_json1_1InvalidHomeRegionExceptionResponse(parsedOutput, context);
    case "InvalidTrailNameException":
    case "com.amazonaws.cloudtrail#InvalidTrailNameException":
      throw await deserializeAws_json1_1InvalidTrailNameExceptionResponse(parsedOutput, context);
    case "NotOrganizationMasterAccountException":
    case "com.amazonaws.cloudtrail#NotOrganizationMasterAccountException":
      throw await deserializeAws_json1_1NotOrganizationMasterAccountExceptionResponse(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.cloudtrail#OperationNotPermittedException":
      throw await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context);
    case "TrailNotFoundException":
    case "com.amazonaws.cloudtrail#TrailNotFoundException":
      throw await deserializeAws_json1_1TrailNotFoundExceptionResponse(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.cloudtrail#UnsupportedOperationException":
      throw await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1UpdateEventDataStoreCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEventDataStoreCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateEventDataStoreCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateEventDataStoreResponse(data, context);
  const response: UpdateEventDataStoreCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateEventDataStoreCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEventDataStoreCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CloudTrailAccessNotEnabledException":
    case "com.amazonaws.cloudtrail#CloudTrailAccessNotEnabledException":
      throw await deserializeAws_json1_1CloudTrailAccessNotEnabledExceptionResponse(parsedOutput, context);
    case "EventDataStoreARNInvalidException":
    case "com.amazonaws.cloudtrail#EventDataStoreARNInvalidException":
      throw await deserializeAws_json1_1EventDataStoreARNInvalidExceptionResponse(parsedOutput, context);
    case "EventDataStoreNotFoundException":
    case "com.amazonaws.cloudtrail#EventDataStoreNotFoundException":
      throw await deserializeAws_json1_1EventDataStoreNotFoundExceptionResponse(parsedOutput, context);
    case "InactiveEventDataStoreException":
    case "com.amazonaws.cloudtrail#InactiveEventDataStoreException":
      throw await deserializeAws_json1_1InactiveEventDataStoreExceptionResponse(parsedOutput, context);
    case "InsufficientDependencyServiceAccessPermissionException":
    case "com.amazonaws.cloudtrail#InsufficientDependencyServiceAccessPermissionException":
      throw await deserializeAws_json1_1InsufficientDependencyServiceAccessPermissionExceptionResponse(
        parsedOutput,
        context
      );
    case "InvalidParameterException":
    case "com.amazonaws.cloudtrail#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "NotOrganizationMasterAccountException":
    case "com.amazonaws.cloudtrail#NotOrganizationMasterAccountException":
      throw await deserializeAws_json1_1NotOrganizationMasterAccountExceptionResponse(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.cloudtrail#OperationNotPermittedException":
      throw await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context);
    case "OrganizationNotInAllFeaturesModeException":
    case "com.amazonaws.cloudtrail#OrganizationNotInAllFeaturesModeException":
      throw await deserializeAws_json1_1OrganizationNotInAllFeaturesModeExceptionResponse(parsedOutput, context);
    case "OrganizationsNotInUseException":
    case "com.amazonaws.cloudtrail#OrganizationsNotInUseException":
      throw await deserializeAws_json1_1OrganizationsNotInUseExceptionResponse(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.cloudtrail#UnsupportedOperationException":
      throw await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1UpdateTrailCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTrailCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateTrailCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateTrailResponse(data, context);
  const response: UpdateTrailCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateTrailCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTrailCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CloudTrailAccessNotEnabledException":
    case "com.amazonaws.cloudtrail#CloudTrailAccessNotEnabledException":
      throw await deserializeAws_json1_1CloudTrailAccessNotEnabledExceptionResponse(parsedOutput, context);
    case "CloudTrailInvalidClientTokenIdException":
    case "com.amazonaws.cloudtrail#CloudTrailInvalidClientTokenIdException":
      throw await deserializeAws_json1_1CloudTrailInvalidClientTokenIdExceptionResponse(parsedOutput, context);
    case "CloudWatchLogsDeliveryUnavailableException":
    case "com.amazonaws.cloudtrail#CloudWatchLogsDeliveryUnavailableException":
      throw await deserializeAws_json1_1CloudWatchLogsDeliveryUnavailableExceptionResponse(parsedOutput, context);
    case "InsufficientDependencyServiceAccessPermissionException":
    case "com.amazonaws.cloudtrail#InsufficientDependencyServiceAccessPermissionException":
      throw await deserializeAws_json1_1InsufficientDependencyServiceAccessPermissionExceptionResponse(
        parsedOutput,
        context
      );
    case "InsufficientEncryptionPolicyException":
    case "com.amazonaws.cloudtrail#InsufficientEncryptionPolicyException":
      throw await deserializeAws_json1_1InsufficientEncryptionPolicyExceptionResponse(parsedOutput, context);
    case "InsufficientS3BucketPolicyException":
    case "com.amazonaws.cloudtrail#InsufficientS3BucketPolicyException":
      throw await deserializeAws_json1_1InsufficientS3BucketPolicyExceptionResponse(parsedOutput, context);
    case "InsufficientSnsTopicPolicyException":
    case "com.amazonaws.cloudtrail#InsufficientSnsTopicPolicyException":
      throw await deserializeAws_json1_1InsufficientSnsTopicPolicyExceptionResponse(parsedOutput, context);
    case "InvalidCloudWatchLogsLogGroupArnException":
    case "com.amazonaws.cloudtrail#InvalidCloudWatchLogsLogGroupArnException":
      throw await deserializeAws_json1_1InvalidCloudWatchLogsLogGroupArnExceptionResponse(parsedOutput, context);
    case "InvalidCloudWatchLogsRoleArnException":
    case "com.amazonaws.cloudtrail#InvalidCloudWatchLogsRoleArnException":
      throw await deserializeAws_json1_1InvalidCloudWatchLogsRoleArnExceptionResponse(parsedOutput, context);
    case "InvalidEventSelectorsException":
    case "com.amazonaws.cloudtrail#InvalidEventSelectorsException":
      throw await deserializeAws_json1_1InvalidEventSelectorsExceptionResponse(parsedOutput, context);
    case "InvalidHomeRegionException":
    case "com.amazonaws.cloudtrail#InvalidHomeRegionException":
      throw await deserializeAws_json1_1InvalidHomeRegionExceptionResponse(parsedOutput, context);
    case "InvalidKmsKeyIdException":
    case "com.amazonaws.cloudtrail#InvalidKmsKeyIdException":
      throw await deserializeAws_json1_1InvalidKmsKeyIdExceptionResponse(parsedOutput, context);
    case "InvalidParameterCombinationException":
    case "com.amazonaws.cloudtrail#InvalidParameterCombinationException":
      throw await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context);
    case "InvalidS3BucketNameException":
    case "com.amazonaws.cloudtrail#InvalidS3BucketNameException":
      throw await deserializeAws_json1_1InvalidS3BucketNameExceptionResponse(parsedOutput, context);
    case "InvalidS3PrefixException":
    case "com.amazonaws.cloudtrail#InvalidS3PrefixException":
      throw await deserializeAws_json1_1InvalidS3PrefixExceptionResponse(parsedOutput, context);
    case "InvalidSnsTopicNameException":
    case "com.amazonaws.cloudtrail#InvalidSnsTopicNameException":
      throw await deserializeAws_json1_1InvalidSnsTopicNameExceptionResponse(parsedOutput, context);
    case "InvalidTrailNameException":
    case "com.amazonaws.cloudtrail#InvalidTrailNameException":
      throw await deserializeAws_json1_1InvalidTrailNameExceptionResponse(parsedOutput, context);
    case "KmsException":
    case "com.amazonaws.cloudtrail#KmsException":
      throw await deserializeAws_json1_1KmsExceptionResponse(parsedOutput, context);
    case "KmsKeyDisabledException":
    case "com.amazonaws.cloudtrail#KmsKeyDisabledException":
      throw await deserializeAws_json1_1KmsKeyDisabledExceptionResponse(parsedOutput, context);
    case "KmsKeyNotFoundException":
    case "com.amazonaws.cloudtrail#KmsKeyNotFoundException":
      throw await deserializeAws_json1_1KmsKeyNotFoundExceptionResponse(parsedOutput, context);
    case "NotOrganizationMasterAccountException":
    case "com.amazonaws.cloudtrail#NotOrganizationMasterAccountException":
      throw await deserializeAws_json1_1NotOrganizationMasterAccountExceptionResponse(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.cloudtrail#OperationNotPermittedException":
      throw await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context);
    case "OrganizationNotInAllFeaturesModeException":
    case "com.amazonaws.cloudtrail#OrganizationNotInAllFeaturesModeException":
      throw await deserializeAws_json1_1OrganizationNotInAllFeaturesModeExceptionResponse(parsedOutput, context);
    case "OrganizationsNotInUseException":
    case "com.amazonaws.cloudtrail#OrganizationsNotInUseException":
      throw await deserializeAws_json1_1OrganizationsNotInUseExceptionResponse(parsedOutput, context);
    case "S3BucketDoesNotExistException":
    case "com.amazonaws.cloudtrail#S3BucketDoesNotExistException":
      throw await deserializeAws_json1_1S3BucketDoesNotExistExceptionResponse(parsedOutput, context);
    case "TrailNotFoundException":
    case "com.amazonaws.cloudtrail#TrailNotFoundException":
      throw await deserializeAws_json1_1TrailNotFoundExceptionResponse(parsedOutput, context);
    case "TrailNotProvidedException":
    case "com.amazonaws.cloudtrail#TrailNotProvidedException":
      throw await deserializeAws_json1_1TrailNotProvidedExceptionResponse(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.cloudtrail#UnsupportedOperationException":
      throw await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

const deserializeAws_json1_1CloudTrailAccessNotEnabledExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CloudTrailAccessNotEnabledException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1CloudTrailAccessNotEnabledException(body, context);
  const exception = new CloudTrailAccessNotEnabledException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1CloudTrailARNInvalidExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CloudTrailARNInvalidException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1CloudTrailARNInvalidException(body, context);
  const exception = new CloudTrailARNInvalidException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1CloudTrailInvalidClientTokenIdExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CloudTrailInvalidClientTokenIdException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1CloudTrailInvalidClientTokenIdException(body, context);
  const exception = new CloudTrailInvalidClientTokenIdException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1CloudWatchLogsDeliveryUnavailableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CloudWatchLogsDeliveryUnavailableException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1CloudWatchLogsDeliveryUnavailableException(body, context);
  const exception = new CloudWatchLogsDeliveryUnavailableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ConflictException(body, context);
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1EventDataStoreAlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EventDataStoreAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1EventDataStoreAlreadyExistsException(body, context);
  const exception = new EventDataStoreAlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1EventDataStoreARNInvalidExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EventDataStoreARNInvalidException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1EventDataStoreARNInvalidException(body, context);
  const exception = new EventDataStoreARNInvalidException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1EventDataStoreMaxLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EventDataStoreMaxLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1EventDataStoreMaxLimitExceededException(body, context);
  const exception = new EventDataStoreMaxLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1EventDataStoreNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EventDataStoreNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1EventDataStoreNotFoundException(body, context);
  const exception = new EventDataStoreNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1EventDataStoreTerminationProtectedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EventDataStoreTerminationProtectedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1EventDataStoreTerminationProtectedException(body, context);
  const exception = new EventDataStoreTerminationProtectedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InactiveEventDataStoreExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InactiveEventDataStoreException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InactiveEventDataStoreException(body, context);
  const exception = new InactiveEventDataStoreException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InactiveQueryExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InactiveQueryException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InactiveQueryException(body, context);
  const exception = new InactiveQueryException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InsightNotEnabledExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InsightNotEnabledException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InsightNotEnabledException(body, context);
  const exception = new InsightNotEnabledException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InsufficientDependencyServiceAccessPermissionExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InsufficientDependencyServiceAccessPermissionException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InsufficientDependencyServiceAccessPermissionException(body, context);
  const exception = new InsufficientDependencyServiceAccessPermissionException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InsufficientEncryptionPolicyExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InsufficientEncryptionPolicyException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InsufficientEncryptionPolicyException(body, context);
  const exception = new InsufficientEncryptionPolicyException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InsufficientS3BucketPolicyExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InsufficientS3BucketPolicyException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InsufficientS3BucketPolicyException(body, context);
  const exception = new InsufficientS3BucketPolicyException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InsufficientSnsTopicPolicyExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InsufficientSnsTopicPolicyException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InsufficientSnsTopicPolicyException(body, context);
  const exception = new InsufficientSnsTopicPolicyException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidCloudWatchLogsLogGroupArnExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidCloudWatchLogsLogGroupArnException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidCloudWatchLogsLogGroupArnException(body, context);
  const exception = new InvalidCloudWatchLogsLogGroupArnException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidCloudWatchLogsRoleArnExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidCloudWatchLogsRoleArnException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidCloudWatchLogsRoleArnException(body, context);
  const exception = new InvalidCloudWatchLogsRoleArnException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidDateRangeExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidDateRangeException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidDateRangeException(body, context);
  const exception = new InvalidDateRangeException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidEventCategoryExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidEventCategoryException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidEventCategoryException(body, context);
  const exception = new InvalidEventCategoryException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidEventDataStoreStatusExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidEventDataStoreStatusException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidEventDataStoreStatusException(body, context);
  const exception = new InvalidEventDataStoreStatusException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidEventSelectorsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidEventSelectorsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidEventSelectorsException(body, context);
  const exception = new InvalidEventSelectorsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidHomeRegionExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidHomeRegionException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidHomeRegionException(body, context);
  const exception = new InvalidHomeRegionException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidInsightSelectorsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidInsightSelectorsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidInsightSelectorsException(body, context);
  const exception = new InvalidInsightSelectorsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidKmsKeyIdExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidKmsKeyIdException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidKmsKeyIdException(body, context);
  const exception = new InvalidKmsKeyIdException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidLookupAttributesExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidLookupAttributesException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidLookupAttributesException(body, context);
  const exception = new InvalidLookupAttributesException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidMaxResultsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidMaxResultsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidMaxResultsException(body, context);
  const exception = new InvalidMaxResultsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidNextTokenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidNextTokenException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidNextTokenException(body, context);
  const exception = new InvalidNextTokenException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidParameterCombinationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterCombinationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidParameterCombinationException(body, context);
  const exception = new InvalidParameterCombinationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidParameterExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidParameterException(body, context);
  const exception = new InvalidParameterException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidQueryStatementExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidQueryStatementException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidQueryStatementException(body, context);
  const exception = new InvalidQueryStatementException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidQueryStatusExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidQueryStatusException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidQueryStatusException(body, context);
  const exception = new InvalidQueryStatusException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidS3BucketNameExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidS3BucketNameException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidS3BucketNameException(body, context);
  const exception = new InvalidS3BucketNameException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidS3PrefixExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidS3PrefixException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidS3PrefixException(body, context);
  const exception = new InvalidS3PrefixException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidSnsTopicNameExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidSnsTopicNameException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidSnsTopicNameException(body, context);
  const exception = new InvalidSnsTopicNameException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidTagParameterExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTagParameterException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidTagParameterException(body, context);
  const exception = new InvalidTagParameterException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidTimeRangeExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTimeRangeException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidTimeRangeException(body, context);
  const exception = new InvalidTimeRangeException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidTokenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTokenException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidTokenException(body, context);
  const exception = new InvalidTokenException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidTrailNameExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTrailNameException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidTrailNameException(body, context);
  const exception = new InvalidTrailNameException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1KmsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<KmsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1KmsException(body, context);
  const exception = new KmsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1KmsKeyDisabledExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<KmsKeyDisabledException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1KmsKeyDisabledException(body, context);
  const exception = new KmsKeyDisabledException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1KmsKeyNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<KmsKeyNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1KmsKeyNotFoundException(body, context);
  const exception = new KmsKeyNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1MaxConcurrentQueriesExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MaxConcurrentQueriesException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1MaxConcurrentQueriesException(body, context);
  const exception = new MaxConcurrentQueriesException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1MaximumNumberOfTrailsExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MaximumNumberOfTrailsExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1MaximumNumberOfTrailsExceededException(body, context);
  const exception = new MaximumNumberOfTrailsExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1NotOrganizationMasterAccountExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotOrganizationMasterAccountException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1NotOrganizationMasterAccountException(body, context);
  const exception = new NotOrganizationMasterAccountException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1OperationNotPermittedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OperationNotPermittedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1OperationNotPermittedException(body, context);
  const exception = new OperationNotPermittedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1OrganizationNotInAllFeaturesModeExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OrganizationNotInAllFeaturesModeException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1OrganizationNotInAllFeaturesModeException(body, context);
  const exception = new OrganizationNotInAllFeaturesModeException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1OrganizationsNotInUseExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OrganizationsNotInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1OrganizationsNotInUseException(body, context);
  const exception = new OrganizationsNotInUseException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1QueryIdNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<QueryIdNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1QueryIdNotFoundException(body, context);
  const exception = new QueryIdNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceNotFoundException(body, context);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ResourceTypeNotSupportedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceTypeNotSupportedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceTypeNotSupportedException(body, context);
  const exception = new ResourceTypeNotSupportedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1S3BucketDoesNotExistExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<S3BucketDoesNotExistException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1S3BucketDoesNotExistException(body, context);
  const exception = new S3BucketDoesNotExistException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1TagsLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TagsLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TagsLimitExceededException(body, context);
  const exception = new TagsLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1TrailAlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TrailAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TrailAlreadyExistsException(body, context);
  const exception = new TrailAlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1TrailNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TrailNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TrailNotFoundException(body, context);
  const exception = new TrailNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1TrailNotProvidedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TrailNotProvidedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TrailNotProvidedException(body, context);
  const exception = new TrailNotProvidedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1UnsupportedOperationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedOperationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1UnsupportedOperationException(body, context);
  const exception = new UnsupportedOperationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const serializeAws_json1_1AddTagsRequest = (input: AddTagsRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId }),
    ...(input.TagsList !== undefined &&
      input.TagsList !== null && { TagsList: serializeAws_json1_1TagsList(input.TagsList, context) }),
  };
};

const serializeAws_json1_1AdvancedEventSelector = (input: AdvancedEventSelector, context: __SerdeContext): any => {
  return {
    ...(input.FieldSelectors !== undefined &&
      input.FieldSelectors !== null && {
        FieldSelectors: serializeAws_json1_1AdvancedFieldSelectors(input.FieldSelectors, context),
      }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_json1_1AdvancedEventSelectors = (input: AdvancedEventSelector[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1AdvancedEventSelector(entry, context);
    });
};

const serializeAws_json1_1AdvancedFieldSelector = (input: AdvancedFieldSelector, context: __SerdeContext): any => {
  return {
    ...(input.EndsWith !== undefined &&
      input.EndsWith !== null && { EndsWith: serializeAws_json1_1Operator(input.EndsWith, context) }),
    ...(input.Equals !== undefined &&
      input.Equals !== null && { Equals: serializeAws_json1_1Operator(input.Equals, context) }),
    ...(input.Field !== undefined && input.Field !== null && { Field: input.Field }),
    ...(input.NotEndsWith !== undefined &&
      input.NotEndsWith !== null && { NotEndsWith: serializeAws_json1_1Operator(input.NotEndsWith, context) }),
    ...(input.NotEquals !== undefined &&
      input.NotEquals !== null && { NotEquals: serializeAws_json1_1Operator(input.NotEquals, context) }),
    ...(input.NotStartsWith !== undefined &&
      input.NotStartsWith !== null && { NotStartsWith: serializeAws_json1_1Operator(input.NotStartsWith, context) }),
    ...(input.StartsWith !== undefined &&
      input.StartsWith !== null && { StartsWith: serializeAws_json1_1Operator(input.StartsWith, context) }),
  };
};

const serializeAws_json1_1AdvancedFieldSelectors = (input: AdvancedFieldSelector[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1AdvancedFieldSelector(entry, context);
    });
};

const serializeAws_json1_1CancelQueryRequest = (input: CancelQueryRequest, context: __SerdeContext): any => {
  return {
    ...(input.EventDataStore !== undefined &&
      input.EventDataStore !== null && { EventDataStore: input.EventDataStore }),
    ...(input.QueryId !== undefined && input.QueryId !== null && { QueryId: input.QueryId }),
  };
};

const serializeAws_json1_1CreateEventDataStoreRequest = (
  input: CreateEventDataStoreRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AdvancedEventSelectors !== undefined &&
      input.AdvancedEventSelectors !== null && {
        AdvancedEventSelectors: serializeAws_json1_1AdvancedEventSelectors(input.AdvancedEventSelectors, context),
      }),
    ...(input.MultiRegionEnabled !== undefined &&
      input.MultiRegionEnabled !== null && { MultiRegionEnabled: input.MultiRegionEnabled }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.OrganizationEnabled !== undefined &&
      input.OrganizationEnabled !== null && { OrganizationEnabled: input.OrganizationEnabled }),
    ...(input.RetentionPeriod !== undefined &&
      input.RetentionPeriod !== null && { RetentionPeriod: input.RetentionPeriod }),
    ...(input.TagsList !== undefined &&
      input.TagsList !== null && { TagsList: serializeAws_json1_1TagsList(input.TagsList, context) }),
    ...(input.TerminationProtectionEnabled !== undefined &&
      input.TerminationProtectionEnabled !== null && {
        TerminationProtectionEnabled: input.TerminationProtectionEnabled,
      }),
  };
};

const serializeAws_json1_1CreateTrailRequest = (input: CreateTrailRequest, context: __SerdeContext): any => {
  return {
    ...(input.CloudWatchLogsLogGroupArn !== undefined &&
      input.CloudWatchLogsLogGroupArn !== null && { CloudWatchLogsLogGroupArn: input.CloudWatchLogsLogGroupArn }),
    ...(input.CloudWatchLogsRoleArn !== undefined &&
      input.CloudWatchLogsRoleArn !== null && { CloudWatchLogsRoleArn: input.CloudWatchLogsRoleArn }),
    ...(input.EnableLogFileValidation !== undefined &&
      input.EnableLogFileValidation !== null && { EnableLogFileValidation: input.EnableLogFileValidation }),
    ...(input.IncludeGlobalServiceEvents !== undefined &&
      input.IncludeGlobalServiceEvents !== null && { IncludeGlobalServiceEvents: input.IncludeGlobalServiceEvents }),
    ...(input.IsMultiRegionTrail !== undefined &&
      input.IsMultiRegionTrail !== null && { IsMultiRegionTrail: input.IsMultiRegionTrail }),
    ...(input.IsOrganizationTrail !== undefined &&
      input.IsOrganizationTrail !== null && { IsOrganizationTrail: input.IsOrganizationTrail }),
    ...(input.KmsKeyId !== undefined && input.KmsKeyId !== null && { KmsKeyId: input.KmsKeyId }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.S3BucketName !== undefined && input.S3BucketName !== null && { S3BucketName: input.S3BucketName }),
    ...(input.S3KeyPrefix !== undefined && input.S3KeyPrefix !== null && { S3KeyPrefix: input.S3KeyPrefix }),
    ...(input.SnsTopicName !== undefined && input.SnsTopicName !== null && { SnsTopicName: input.SnsTopicName }),
    ...(input.TagsList !== undefined &&
      input.TagsList !== null && { TagsList: serializeAws_json1_1TagsList(input.TagsList, context) }),
  };
};

const serializeAws_json1_1DataResource = (input: DataResource, context: __SerdeContext): any => {
  return {
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
    ...(input.Values !== undefined &&
      input.Values !== null && { Values: serializeAws_json1_1DataResourceValues(input.Values, context) }),
  };
};

const serializeAws_json1_1DataResources = (input: DataResource[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1DataResource(entry, context);
    });
};

const serializeAws_json1_1DataResourceValues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1DeleteEventDataStoreRequest = (
  input: DeleteEventDataStoreRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EventDataStore !== undefined &&
      input.EventDataStore !== null && { EventDataStore: input.EventDataStore }),
  };
};

const serializeAws_json1_1DeleteTrailRequest = (input: DeleteTrailRequest, context: __SerdeContext): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_json1_1DescribeQueryRequest = (input: DescribeQueryRequest, context: __SerdeContext): any => {
  return {
    ...(input.EventDataStore !== undefined &&
      input.EventDataStore !== null && { EventDataStore: input.EventDataStore }),
    ...(input.QueryId !== undefined && input.QueryId !== null && { QueryId: input.QueryId }),
  };
};

const serializeAws_json1_1DescribeTrailsRequest = (input: DescribeTrailsRequest, context: __SerdeContext): any => {
  return {
    ...(input.includeShadowTrails !== undefined &&
      input.includeShadowTrails !== null && { includeShadowTrails: input.includeShadowTrails }),
    ...(input.trailNameList !== undefined &&
      input.trailNameList !== null && {
        trailNameList: serializeAws_json1_1TrailNameList(input.trailNameList, context),
      }),
  };
};

const serializeAws_json1_1EventSelector = (input: EventSelector, context: __SerdeContext): any => {
  return {
    ...(input.DataResources !== undefined &&
      input.DataResources !== null && {
        DataResources: serializeAws_json1_1DataResources(input.DataResources, context),
      }),
    ...(input.ExcludeManagementEventSources !== undefined &&
      input.ExcludeManagementEventSources !== null && {
        ExcludeManagementEventSources: serializeAws_json1_1ExcludeManagementEventSources(
          input.ExcludeManagementEventSources,
          context
        ),
      }),
    ...(input.IncludeManagementEvents !== undefined &&
      input.IncludeManagementEvents !== null && { IncludeManagementEvents: input.IncludeManagementEvents }),
    ...(input.ReadWriteType !== undefined && input.ReadWriteType !== null && { ReadWriteType: input.ReadWriteType }),
  };
};

const serializeAws_json1_1EventSelectors = (input: EventSelector[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1EventSelector(entry, context);
    });
};

const serializeAws_json1_1ExcludeManagementEventSources = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1GetEventDataStoreRequest = (
  input: GetEventDataStoreRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EventDataStore !== undefined &&
      input.EventDataStore !== null && { EventDataStore: input.EventDataStore }),
  };
};

const serializeAws_json1_1GetEventSelectorsRequest = (
  input: GetEventSelectorsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.TrailName !== undefined && input.TrailName !== null && { TrailName: input.TrailName }),
  };
};

const serializeAws_json1_1GetInsightSelectorsRequest = (
  input: GetInsightSelectorsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.TrailName !== undefined && input.TrailName !== null && { TrailName: input.TrailName }),
  };
};

const serializeAws_json1_1GetQueryResultsRequest = (input: GetQueryResultsRequest, context: __SerdeContext): any => {
  return {
    ...(input.EventDataStore !== undefined &&
      input.EventDataStore !== null && { EventDataStore: input.EventDataStore }),
    ...(input.MaxQueryResults !== undefined &&
      input.MaxQueryResults !== null && { MaxQueryResults: input.MaxQueryResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.QueryId !== undefined && input.QueryId !== null && { QueryId: input.QueryId }),
  };
};

const serializeAws_json1_1GetTrailRequest = (input: GetTrailRequest, context: __SerdeContext): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_json1_1GetTrailStatusRequest = (input: GetTrailStatusRequest, context: __SerdeContext): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_json1_1InsightSelector = (input: InsightSelector, context: __SerdeContext): any => {
  return {
    ...(input.InsightType !== undefined && input.InsightType !== null && { InsightType: input.InsightType }),
  };
};

const serializeAws_json1_1InsightSelectors = (input: InsightSelector[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1InsightSelector(entry, context);
    });
};

const serializeAws_json1_1ListEventDataStoresRequest = (
  input: ListEventDataStoresRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListPublicKeysRequest = (input: ListPublicKeysRequest, context: __SerdeContext): any => {
  return {
    ...(input.EndTime !== undefined &&
      input.EndTime !== null && { EndTime: Math.round(input.EndTime.getTime() / 1000) }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.StartTime !== undefined &&
      input.StartTime !== null && { StartTime: Math.round(input.StartTime.getTime() / 1000) }),
  };
};

const serializeAws_json1_1ListQueriesRequest = (input: ListQueriesRequest, context: __SerdeContext): any => {
  return {
    ...(input.EndTime !== undefined &&
      input.EndTime !== null && { EndTime: Math.round(input.EndTime.getTime() / 1000) }),
    ...(input.EventDataStore !== undefined &&
      input.EventDataStore !== null && { EventDataStore: input.EventDataStore }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.QueryStatus !== undefined && input.QueryStatus !== null && { QueryStatus: input.QueryStatus }),
    ...(input.StartTime !== undefined &&
      input.StartTime !== null && { StartTime: Math.round(input.StartTime.getTime() / 1000) }),
  };
};

const serializeAws_json1_1ListTagsRequest = (input: ListTagsRequest, context: __SerdeContext): any => {
  return {
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.ResourceIdList !== undefined &&
      input.ResourceIdList !== null && {
        ResourceIdList: serializeAws_json1_1ResourceIdList(input.ResourceIdList, context),
      }),
  };
};

const serializeAws_json1_1ListTrailsRequest = (input: ListTrailsRequest, context: __SerdeContext): any => {
  return {
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1LookupAttribute = (input: LookupAttribute, context: __SerdeContext): any => {
  return {
    ...(input.AttributeKey !== undefined && input.AttributeKey !== null && { AttributeKey: input.AttributeKey }),
    ...(input.AttributeValue !== undefined &&
      input.AttributeValue !== null && { AttributeValue: input.AttributeValue }),
  };
};

const serializeAws_json1_1LookupAttributesList = (input: LookupAttribute[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1LookupAttribute(entry, context);
    });
};

const serializeAws_json1_1LookupEventsRequest = (input: LookupEventsRequest, context: __SerdeContext): any => {
  return {
    ...(input.EndTime !== undefined &&
      input.EndTime !== null && { EndTime: Math.round(input.EndTime.getTime() / 1000) }),
    ...(input.EventCategory !== undefined && input.EventCategory !== null && { EventCategory: input.EventCategory }),
    ...(input.LookupAttributes !== undefined &&
      input.LookupAttributes !== null && {
        LookupAttributes: serializeAws_json1_1LookupAttributesList(input.LookupAttributes, context),
      }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.StartTime !== undefined &&
      input.StartTime !== null && { StartTime: Math.round(input.StartTime.getTime() / 1000) }),
  };
};

const serializeAws_json1_1Operator = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1PutEventSelectorsRequest = (
  input: PutEventSelectorsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AdvancedEventSelectors !== undefined &&
      input.AdvancedEventSelectors !== null && {
        AdvancedEventSelectors: serializeAws_json1_1AdvancedEventSelectors(input.AdvancedEventSelectors, context),
      }),
    ...(input.EventSelectors !== undefined &&
      input.EventSelectors !== null && {
        EventSelectors: serializeAws_json1_1EventSelectors(input.EventSelectors, context),
      }),
    ...(input.TrailName !== undefined && input.TrailName !== null && { TrailName: input.TrailName }),
  };
};

const serializeAws_json1_1PutInsightSelectorsRequest = (
  input: PutInsightSelectorsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.InsightSelectors !== undefined &&
      input.InsightSelectors !== null && {
        InsightSelectors: serializeAws_json1_1InsightSelectors(input.InsightSelectors, context),
      }),
    ...(input.TrailName !== undefined && input.TrailName !== null && { TrailName: input.TrailName }),
  };
};

const serializeAws_json1_1RemoveTagsRequest = (input: RemoveTagsRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId }),
    ...(input.TagsList !== undefined &&
      input.TagsList !== null && { TagsList: serializeAws_json1_1TagsList(input.TagsList, context) }),
  };
};

const serializeAws_json1_1ResourceIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1RestoreEventDataStoreRequest = (
  input: RestoreEventDataStoreRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EventDataStore !== undefined &&
      input.EventDataStore !== null && { EventDataStore: input.EventDataStore }),
  };
};

const serializeAws_json1_1StartLoggingRequest = (input: StartLoggingRequest, context: __SerdeContext): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_json1_1StartQueryRequest = (input: StartQueryRequest, context: __SerdeContext): any => {
  return {
    ...(input.QueryStatement !== undefined &&
      input.QueryStatement !== null && { QueryStatement: input.QueryStatement }),
  };
};

const serializeAws_json1_1StopLoggingRequest = (input: StopLoggingRequest, context: __SerdeContext): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
    ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
  };
};

const serializeAws_json1_1TagsList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1Tag(entry, context);
    });
};

const serializeAws_json1_1TrailNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1UpdateEventDataStoreRequest = (
  input: UpdateEventDataStoreRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AdvancedEventSelectors !== undefined &&
      input.AdvancedEventSelectors !== null && {
        AdvancedEventSelectors: serializeAws_json1_1AdvancedEventSelectors(input.AdvancedEventSelectors, context),
      }),
    ...(input.EventDataStore !== undefined &&
      input.EventDataStore !== null && { EventDataStore: input.EventDataStore }),
    ...(input.MultiRegionEnabled !== undefined &&
      input.MultiRegionEnabled !== null && { MultiRegionEnabled: input.MultiRegionEnabled }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.OrganizationEnabled !== undefined &&
      input.OrganizationEnabled !== null && { OrganizationEnabled: input.OrganizationEnabled }),
    ...(input.RetentionPeriod !== undefined &&
      input.RetentionPeriod !== null && { RetentionPeriod: input.RetentionPeriod }),
    ...(input.TerminationProtectionEnabled !== undefined &&
      input.TerminationProtectionEnabled !== null && {
        TerminationProtectionEnabled: input.TerminationProtectionEnabled,
      }),
  };
};

const serializeAws_json1_1UpdateTrailRequest = (input: UpdateTrailRequest, context: __SerdeContext): any => {
  return {
    ...(input.CloudWatchLogsLogGroupArn !== undefined &&
      input.CloudWatchLogsLogGroupArn !== null && { CloudWatchLogsLogGroupArn: input.CloudWatchLogsLogGroupArn }),
    ...(input.CloudWatchLogsRoleArn !== undefined &&
      input.CloudWatchLogsRoleArn !== null && { CloudWatchLogsRoleArn: input.CloudWatchLogsRoleArn }),
    ...(input.EnableLogFileValidation !== undefined &&
      input.EnableLogFileValidation !== null && { EnableLogFileValidation: input.EnableLogFileValidation }),
    ...(input.IncludeGlobalServiceEvents !== undefined &&
      input.IncludeGlobalServiceEvents !== null && { IncludeGlobalServiceEvents: input.IncludeGlobalServiceEvents }),
    ...(input.IsMultiRegionTrail !== undefined &&
      input.IsMultiRegionTrail !== null && { IsMultiRegionTrail: input.IsMultiRegionTrail }),
    ...(input.IsOrganizationTrail !== undefined &&
      input.IsOrganizationTrail !== null && { IsOrganizationTrail: input.IsOrganizationTrail }),
    ...(input.KmsKeyId !== undefined && input.KmsKeyId !== null && { KmsKeyId: input.KmsKeyId }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.S3BucketName !== undefined && input.S3BucketName !== null && { S3BucketName: input.S3BucketName }),
    ...(input.S3KeyPrefix !== undefined && input.S3KeyPrefix !== null && { S3KeyPrefix: input.S3KeyPrefix }),
    ...(input.SnsTopicName !== undefined && input.SnsTopicName !== null && { SnsTopicName: input.SnsTopicName }),
  };
};

const deserializeAws_json1_1AddTagsResponse = (output: any, context: __SerdeContext): AddTagsResponse => {
  return {} as any;
};

const deserializeAws_json1_1AdvancedEventSelector = (output: any, context: __SerdeContext): AdvancedEventSelector => {
  return {
    FieldSelectors:
      output.FieldSelectors !== undefined && output.FieldSelectors !== null
        ? deserializeAws_json1_1AdvancedFieldSelectors(output.FieldSelectors, context)
        : undefined,
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1AdvancedEventSelectors = (
  output: any,
  context: __SerdeContext
): AdvancedEventSelector[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1AdvancedEventSelector(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1AdvancedFieldSelector = (output: any, context: __SerdeContext): AdvancedFieldSelector => {
  return {
    EndsWith:
      output.EndsWith !== undefined && output.EndsWith !== null
        ? deserializeAws_json1_1Operator(output.EndsWith, context)
        : undefined,
    Equals:
      output.Equals !== undefined && output.Equals !== null
        ? deserializeAws_json1_1Operator(output.Equals, context)
        : undefined,
    Field: __expectString(output.Field),
    NotEndsWith:
      output.NotEndsWith !== undefined && output.NotEndsWith !== null
        ? deserializeAws_json1_1Operator(output.NotEndsWith, context)
        : undefined,
    NotEquals:
      output.NotEquals !== undefined && output.NotEquals !== null
        ? deserializeAws_json1_1Operator(output.NotEquals, context)
        : undefined,
    NotStartsWith:
      output.NotStartsWith !== undefined && output.NotStartsWith !== null
        ? deserializeAws_json1_1Operator(output.NotStartsWith, context)
        : undefined,
    StartsWith:
      output.StartsWith !== undefined && output.StartsWith !== null
        ? deserializeAws_json1_1Operator(output.StartsWith, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1AdvancedFieldSelectors = (
  output: any,
  context: __SerdeContext
): AdvancedFieldSelector[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1AdvancedFieldSelector(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1CancelQueryResponse = (output: any, context: __SerdeContext): CancelQueryResponse => {
  return {
    QueryId: __expectString(output.QueryId),
    QueryStatus: __expectString(output.QueryStatus),
  } as any;
};

const deserializeAws_json1_1CloudTrailAccessNotEnabledException = (
  output: any,
  context: __SerdeContext
): CloudTrailAccessNotEnabledException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1CloudTrailARNInvalidException = (
  output: any,
  context: __SerdeContext
): CloudTrailARNInvalidException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1CloudTrailInvalidClientTokenIdException = (
  output: any,
  context: __SerdeContext
): CloudTrailInvalidClientTokenIdException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1CloudWatchLogsDeliveryUnavailableException = (
  output: any,
  context: __SerdeContext
): CloudWatchLogsDeliveryUnavailableException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ConflictException = (output: any, context: __SerdeContext): ConflictException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1CreateEventDataStoreResponse = (
  output: any,
  context: __SerdeContext
): CreateEventDataStoreResponse => {
  return {
    AdvancedEventSelectors:
      output.AdvancedEventSelectors !== undefined && output.AdvancedEventSelectors !== null
        ? deserializeAws_json1_1AdvancedEventSelectors(output.AdvancedEventSelectors, context)
        : undefined,
    CreatedTimestamp:
      output.CreatedTimestamp !== undefined && output.CreatedTimestamp !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTimestamp)))
        : undefined,
    EventDataStoreArn: __expectString(output.EventDataStoreArn),
    MultiRegionEnabled: __expectBoolean(output.MultiRegionEnabled),
    Name: __expectString(output.Name),
    OrganizationEnabled: __expectBoolean(output.OrganizationEnabled),
    RetentionPeriod: __expectInt32(output.RetentionPeriod),
    Status: __expectString(output.Status),
    TagsList:
      output.TagsList !== undefined && output.TagsList !== null
        ? deserializeAws_json1_1TagsList(output.TagsList, context)
        : undefined,
    TerminationProtectionEnabled: __expectBoolean(output.TerminationProtectionEnabled),
    UpdatedTimestamp:
      output.UpdatedTimestamp !== undefined && output.UpdatedTimestamp !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.UpdatedTimestamp)))
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateTrailResponse = (output: any, context: __SerdeContext): CreateTrailResponse => {
  return {
    CloudWatchLogsLogGroupArn: __expectString(output.CloudWatchLogsLogGroupArn),
    CloudWatchLogsRoleArn: __expectString(output.CloudWatchLogsRoleArn),
    IncludeGlobalServiceEvents: __expectBoolean(output.IncludeGlobalServiceEvents),
    IsMultiRegionTrail: __expectBoolean(output.IsMultiRegionTrail),
    IsOrganizationTrail: __expectBoolean(output.IsOrganizationTrail),
    KmsKeyId: __expectString(output.KmsKeyId),
    LogFileValidationEnabled: __expectBoolean(output.LogFileValidationEnabled),
    Name: __expectString(output.Name),
    S3BucketName: __expectString(output.S3BucketName),
    S3KeyPrefix: __expectString(output.S3KeyPrefix),
    SnsTopicARN: __expectString(output.SnsTopicARN),
    SnsTopicName: __expectString(output.SnsTopicName),
    TrailARN: __expectString(output.TrailARN),
  } as any;
};

const deserializeAws_json1_1DataResource = (output: any, context: __SerdeContext): DataResource => {
  return {
    Type: __expectString(output.Type),
    Values:
      output.Values !== undefined && output.Values !== null
        ? deserializeAws_json1_1DataResourceValues(output.Values, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DataResources = (output: any, context: __SerdeContext): DataResource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1DataResource(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1DataResourceValues = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1DeleteEventDataStoreResponse = (
  output: any,
  context: __SerdeContext
): DeleteEventDataStoreResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeleteTrailResponse = (output: any, context: __SerdeContext): DeleteTrailResponse => {
  return {} as any;
};

const deserializeAws_json1_1DescribeQueryResponse = (output: any, context: __SerdeContext): DescribeQueryResponse => {
  return {
    ErrorMessage: __expectString(output.ErrorMessage),
    QueryId: __expectString(output.QueryId),
    QueryStatistics:
      output.QueryStatistics !== undefined && output.QueryStatistics !== null
        ? deserializeAws_json1_1QueryStatisticsForDescribeQuery(output.QueryStatistics, context)
        : undefined,
    QueryStatus: __expectString(output.QueryStatus),
    QueryString: __expectString(output.QueryString),
  } as any;
};

const deserializeAws_json1_1DescribeTrailsResponse = (output: any, context: __SerdeContext): DescribeTrailsResponse => {
  return {
    trailList:
      output.trailList !== undefined && output.trailList !== null
        ? deserializeAws_json1_1TrailList(output.trailList, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1Event = (output: any, context: __SerdeContext): Event => {
  return {
    AccessKeyId: __expectString(output.AccessKeyId),
    CloudTrailEvent: __expectString(output.CloudTrailEvent),
    EventId: __expectString(output.EventId),
    EventName: __expectString(output.EventName),
    EventSource: __expectString(output.EventSource),
    EventTime:
      output.EventTime !== undefined && output.EventTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EventTime)))
        : undefined,
    ReadOnly: __expectString(output.ReadOnly),
    Resources:
      output.Resources !== undefined && output.Resources !== null
        ? deserializeAws_json1_1ResourceList(output.Resources, context)
        : undefined,
    Username: __expectString(output.Username),
  } as any;
};

const deserializeAws_json1_1EventDataStore = (output: any, context: __SerdeContext): EventDataStore => {
  return {
    AdvancedEventSelectors:
      output.AdvancedEventSelectors !== undefined && output.AdvancedEventSelectors !== null
        ? deserializeAws_json1_1AdvancedEventSelectors(output.AdvancedEventSelectors, context)
        : undefined,
    CreatedTimestamp:
      output.CreatedTimestamp !== undefined && output.CreatedTimestamp !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTimestamp)))
        : undefined,
    EventDataStoreArn: __expectString(output.EventDataStoreArn),
    MultiRegionEnabled: __expectBoolean(output.MultiRegionEnabled),
    Name: __expectString(output.Name),
    OrganizationEnabled: __expectBoolean(output.OrganizationEnabled),
    RetentionPeriod: __expectInt32(output.RetentionPeriod),
    Status: __expectString(output.Status),
    TerminationProtectionEnabled: __expectBoolean(output.TerminationProtectionEnabled),
    UpdatedTimestamp:
      output.UpdatedTimestamp !== undefined && output.UpdatedTimestamp !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.UpdatedTimestamp)))
        : undefined,
  } as any;
};

const deserializeAws_json1_1EventDataStoreAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): EventDataStoreAlreadyExistsException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1EventDataStoreARNInvalidException = (
  output: any,
  context: __SerdeContext
): EventDataStoreARNInvalidException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1EventDataStoreMaxLimitExceededException = (
  output: any,
  context: __SerdeContext
): EventDataStoreMaxLimitExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1EventDataStoreNotFoundException = (
  output: any,
  context: __SerdeContext
): EventDataStoreNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1EventDataStores = (output: any, context: __SerdeContext): EventDataStore[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1EventDataStore(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1EventDataStoreTerminationProtectedException = (
  output: any,
  context: __SerdeContext
): EventDataStoreTerminationProtectedException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1EventSelector = (output: any, context: __SerdeContext): EventSelector => {
  return {
    DataResources:
      output.DataResources !== undefined && output.DataResources !== null
        ? deserializeAws_json1_1DataResources(output.DataResources, context)
        : undefined,
    ExcludeManagementEventSources:
      output.ExcludeManagementEventSources !== undefined && output.ExcludeManagementEventSources !== null
        ? deserializeAws_json1_1ExcludeManagementEventSources(output.ExcludeManagementEventSources, context)
        : undefined,
    IncludeManagementEvents: __expectBoolean(output.IncludeManagementEvents),
    ReadWriteType: __expectString(output.ReadWriteType),
  } as any;
};

const deserializeAws_json1_1EventSelectors = (output: any, context: __SerdeContext): EventSelector[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1EventSelector(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1EventsList = (output: any, context: __SerdeContext): Event[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Event(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ExcludeManagementEventSources = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1GetEventDataStoreResponse = (
  output: any,
  context: __SerdeContext
): GetEventDataStoreResponse => {
  return {
    AdvancedEventSelectors:
      output.AdvancedEventSelectors !== undefined && output.AdvancedEventSelectors !== null
        ? deserializeAws_json1_1AdvancedEventSelectors(output.AdvancedEventSelectors, context)
        : undefined,
    CreatedTimestamp:
      output.CreatedTimestamp !== undefined && output.CreatedTimestamp !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTimestamp)))
        : undefined,
    EventDataStoreArn: __expectString(output.EventDataStoreArn),
    MultiRegionEnabled: __expectBoolean(output.MultiRegionEnabled),
    Name: __expectString(output.Name),
    OrganizationEnabled: __expectBoolean(output.OrganizationEnabled),
    RetentionPeriod: __expectInt32(output.RetentionPeriod),
    Status: __expectString(output.Status),
    TerminationProtectionEnabled: __expectBoolean(output.TerminationProtectionEnabled),
    UpdatedTimestamp:
      output.UpdatedTimestamp !== undefined && output.UpdatedTimestamp !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.UpdatedTimestamp)))
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetEventSelectorsResponse = (
  output: any,
  context: __SerdeContext
): GetEventSelectorsResponse => {
  return {
    AdvancedEventSelectors:
      output.AdvancedEventSelectors !== undefined && output.AdvancedEventSelectors !== null
        ? deserializeAws_json1_1AdvancedEventSelectors(output.AdvancedEventSelectors, context)
        : undefined,
    EventSelectors:
      output.EventSelectors !== undefined && output.EventSelectors !== null
        ? deserializeAws_json1_1EventSelectors(output.EventSelectors, context)
        : undefined,
    TrailARN: __expectString(output.TrailARN),
  } as any;
};

const deserializeAws_json1_1GetInsightSelectorsResponse = (
  output: any,
  context: __SerdeContext
): GetInsightSelectorsResponse => {
  return {
    InsightSelectors:
      output.InsightSelectors !== undefined && output.InsightSelectors !== null
        ? deserializeAws_json1_1InsightSelectors(output.InsightSelectors, context)
        : undefined,
    TrailARN: __expectString(output.TrailARN),
  } as any;
};

const deserializeAws_json1_1GetQueryResultsResponse = (
  output: any,
  context: __SerdeContext
): GetQueryResultsResponse => {
  return {
    ErrorMessage: __expectString(output.ErrorMessage),
    NextToken: __expectString(output.NextToken),
    QueryResultRows:
      output.QueryResultRows !== undefined && output.QueryResultRows !== null
        ? deserializeAws_json1_1QueryResultRows(output.QueryResultRows, context)
        : undefined,
    QueryStatistics:
      output.QueryStatistics !== undefined && output.QueryStatistics !== null
        ? deserializeAws_json1_1QueryStatistics(output.QueryStatistics, context)
        : undefined,
    QueryStatus: __expectString(output.QueryStatus),
  } as any;
};

const deserializeAws_json1_1GetTrailResponse = (output: any, context: __SerdeContext): GetTrailResponse => {
  return {
    Trail:
      output.Trail !== undefined && output.Trail !== null
        ? deserializeAws_json1_1Trail(output.Trail, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetTrailStatusResponse = (output: any, context: __SerdeContext): GetTrailStatusResponse => {
  return {
    IsLogging: __expectBoolean(output.IsLogging),
    LatestCloudWatchLogsDeliveryError: __expectString(output.LatestCloudWatchLogsDeliveryError),
    LatestCloudWatchLogsDeliveryTime:
      output.LatestCloudWatchLogsDeliveryTime !== undefined && output.LatestCloudWatchLogsDeliveryTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LatestCloudWatchLogsDeliveryTime)))
        : undefined,
    LatestDeliveryAttemptSucceeded: __expectString(output.LatestDeliveryAttemptSucceeded),
    LatestDeliveryAttemptTime: __expectString(output.LatestDeliveryAttemptTime),
    LatestDeliveryError: __expectString(output.LatestDeliveryError),
    LatestDeliveryTime:
      output.LatestDeliveryTime !== undefined && output.LatestDeliveryTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LatestDeliveryTime)))
        : undefined,
    LatestDigestDeliveryError: __expectString(output.LatestDigestDeliveryError),
    LatestDigestDeliveryTime:
      output.LatestDigestDeliveryTime !== undefined && output.LatestDigestDeliveryTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LatestDigestDeliveryTime)))
        : undefined,
    LatestNotificationAttemptSucceeded: __expectString(output.LatestNotificationAttemptSucceeded),
    LatestNotificationAttemptTime: __expectString(output.LatestNotificationAttemptTime),
    LatestNotificationError: __expectString(output.LatestNotificationError),
    LatestNotificationTime:
      output.LatestNotificationTime !== undefined && output.LatestNotificationTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LatestNotificationTime)))
        : undefined,
    StartLoggingTime:
      output.StartLoggingTime !== undefined && output.StartLoggingTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartLoggingTime)))
        : undefined,
    StopLoggingTime:
      output.StopLoggingTime !== undefined && output.StopLoggingTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StopLoggingTime)))
        : undefined,
    TimeLoggingStarted: __expectString(output.TimeLoggingStarted),
    TimeLoggingStopped: __expectString(output.TimeLoggingStopped),
  } as any;
};

const deserializeAws_json1_1InactiveEventDataStoreException = (
  output: any,
  context: __SerdeContext
): InactiveEventDataStoreException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InactiveQueryException = (output: any, context: __SerdeContext): InactiveQueryException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InsightNotEnabledException = (
  output: any,
  context: __SerdeContext
): InsightNotEnabledException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InsightSelector = (output: any, context: __SerdeContext): InsightSelector => {
  return {
    InsightType: __expectString(output.InsightType),
  } as any;
};

const deserializeAws_json1_1InsightSelectors = (output: any, context: __SerdeContext): InsightSelector[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1InsightSelector(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1InsufficientDependencyServiceAccessPermissionException = (
  output: any,
  context: __SerdeContext
): InsufficientDependencyServiceAccessPermissionException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InsufficientEncryptionPolicyException = (
  output: any,
  context: __SerdeContext
): InsufficientEncryptionPolicyException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InsufficientS3BucketPolicyException = (
  output: any,
  context: __SerdeContext
): InsufficientS3BucketPolicyException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InsufficientSnsTopicPolicyException = (
  output: any,
  context: __SerdeContext
): InsufficientSnsTopicPolicyException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidCloudWatchLogsLogGroupArnException = (
  output: any,
  context: __SerdeContext
): InvalidCloudWatchLogsLogGroupArnException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidCloudWatchLogsRoleArnException = (
  output: any,
  context: __SerdeContext
): InvalidCloudWatchLogsRoleArnException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidDateRangeException = (
  output: any,
  context: __SerdeContext
): InvalidDateRangeException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidEventCategoryException = (
  output: any,
  context: __SerdeContext
): InvalidEventCategoryException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidEventDataStoreStatusException = (
  output: any,
  context: __SerdeContext
): InvalidEventDataStoreStatusException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidEventSelectorsException = (
  output: any,
  context: __SerdeContext
): InvalidEventSelectorsException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidHomeRegionException = (
  output: any,
  context: __SerdeContext
): InvalidHomeRegionException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidInsightSelectorsException = (
  output: any,
  context: __SerdeContext
): InvalidInsightSelectorsException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidKmsKeyIdException = (
  output: any,
  context: __SerdeContext
): InvalidKmsKeyIdException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidLookupAttributesException = (
  output: any,
  context: __SerdeContext
): InvalidLookupAttributesException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidMaxResultsException = (
  output: any,
  context: __SerdeContext
): InvalidMaxResultsException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidNextTokenException = (
  output: any,
  context: __SerdeContext
): InvalidNextTokenException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidParameterCombinationException = (
  output: any,
  context: __SerdeContext
): InvalidParameterCombinationException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidParameterException = (
  output: any,
  context: __SerdeContext
): InvalidParameterException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidQueryStatementException = (
  output: any,
  context: __SerdeContext
): InvalidQueryStatementException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidQueryStatusException = (
  output: any,
  context: __SerdeContext
): InvalidQueryStatusException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidS3BucketNameException = (
  output: any,
  context: __SerdeContext
): InvalidS3BucketNameException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidS3PrefixException = (
  output: any,
  context: __SerdeContext
): InvalidS3PrefixException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidSnsTopicNameException = (
  output: any,
  context: __SerdeContext
): InvalidSnsTopicNameException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidTagParameterException = (
  output: any,
  context: __SerdeContext
): InvalidTagParameterException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidTimeRangeException = (
  output: any,
  context: __SerdeContext
): InvalidTimeRangeException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidTokenException = (output: any, context: __SerdeContext): InvalidTokenException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidTrailNameException = (
  output: any,
  context: __SerdeContext
): InvalidTrailNameException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1KmsException = (output: any, context: __SerdeContext): KmsException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1KmsKeyDisabledException = (
  output: any,
  context: __SerdeContext
): KmsKeyDisabledException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1KmsKeyNotFoundException = (
  output: any,
  context: __SerdeContext
): KmsKeyNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ListEventDataStoresResponse = (
  output: any,
  context: __SerdeContext
): ListEventDataStoresResponse => {
  return {
    EventDataStores:
      output.EventDataStores !== undefined && output.EventDataStores !== null
        ? deserializeAws_json1_1EventDataStores(output.EventDataStores, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListPublicKeysResponse = (output: any, context: __SerdeContext): ListPublicKeysResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    PublicKeyList:
      output.PublicKeyList !== undefined && output.PublicKeyList !== null
        ? deserializeAws_json1_1PublicKeyList(output.PublicKeyList, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListQueriesResponse = (output: any, context: __SerdeContext): ListQueriesResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Queries:
      output.Queries !== undefined && output.Queries !== null
        ? deserializeAws_json1_1Queries(output.Queries, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListTagsResponse = (output: any, context: __SerdeContext): ListTagsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    ResourceTagList:
      output.ResourceTagList !== undefined && output.ResourceTagList !== null
        ? deserializeAws_json1_1ResourceTagList(output.ResourceTagList, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListTrailsResponse = (output: any, context: __SerdeContext): ListTrailsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Trails:
      output.Trails !== undefined && output.Trails !== null
        ? deserializeAws_json1_1Trails(output.Trails, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1LookupEventsResponse = (output: any, context: __SerdeContext): LookupEventsResponse => {
  return {
    Events:
      output.Events !== undefined && output.Events !== null
        ? deserializeAws_json1_1EventsList(output.Events, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1MaxConcurrentQueriesException = (
  output: any,
  context: __SerdeContext
): MaxConcurrentQueriesException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1MaximumNumberOfTrailsExceededException = (
  output: any,
  context: __SerdeContext
): MaximumNumberOfTrailsExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1NotOrganizationMasterAccountException = (
  output: any,
  context: __SerdeContext
): NotOrganizationMasterAccountException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1OperationNotPermittedException = (
  output: any,
  context: __SerdeContext
): OperationNotPermittedException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1Operator = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1OrganizationNotInAllFeaturesModeException = (
  output: any,
  context: __SerdeContext
): OrganizationNotInAllFeaturesModeException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1OrganizationsNotInUseException = (
  output: any,
  context: __SerdeContext
): OrganizationsNotInUseException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1PublicKey = (output: any, context: __SerdeContext): PublicKey => {
  return {
    Fingerprint: __expectString(output.Fingerprint),
    ValidityEndTime:
      output.ValidityEndTime !== undefined && output.ValidityEndTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ValidityEndTime)))
        : undefined,
    ValidityStartTime:
      output.ValidityStartTime !== undefined && output.ValidityStartTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ValidityStartTime)))
        : undefined,
    Value: output.Value !== undefined && output.Value !== null ? context.base64Decoder(output.Value) : undefined,
  } as any;
};

const deserializeAws_json1_1PublicKeyList = (output: any, context: __SerdeContext): PublicKey[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1PublicKey(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1PutEventSelectorsResponse = (
  output: any,
  context: __SerdeContext
): PutEventSelectorsResponse => {
  return {
    AdvancedEventSelectors:
      output.AdvancedEventSelectors !== undefined && output.AdvancedEventSelectors !== null
        ? deserializeAws_json1_1AdvancedEventSelectors(output.AdvancedEventSelectors, context)
        : undefined,
    EventSelectors:
      output.EventSelectors !== undefined && output.EventSelectors !== null
        ? deserializeAws_json1_1EventSelectors(output.EventSelectors, context)
        : undefined,
    TrailARN: __expectString(output.TrailARN),
  } as any;
};

const deserializeAws_json1_1PutInsightSelectorsResponse = (
  output: any,
  context: __SerdeContext
): PutInsightSelectorsResponse => {
  return {
    InsightSelectors:
      output.InsightSelectors !== undefined && output.InsightSelectors !== null
        ? deserializeAws_json1_1InsightSelectors(output.InsightSelectors, context)
        : undefined,
    TrailARN: __expectString(output.TrailARN),
  } as any;
};

const deserializeAws_json1_1Queries = (output: any, context: __SerdeContext): Query[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Query(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1Query = (output: any, context: __SerdeContext): Query => {
  return {
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    QueryId: __expectString(output.QueryId),
    QueryStatus: __expectString(output.QueryStatus),
  } as any;
};

const deserializeAws_json1_1QueryIdNotFoundException = (
  output: any,
  context: __SerdeContext
): QueryIdNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1QueryResultColumn = (output: any, context: __SerdeContext): { [key: string]: string } => {
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

const deserializeAws_json1_1QueryResultRow = (output: any, context: __SerdeContext): { [key: string]: string }[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1QueryResultColumn(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1QueryResultRows = (output: any, context: __SerdeContext): { [key: string]: string }[][] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1QueryResultRow(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1QueryStatistics = (output: any, context: __SerdeContext): QueryStatistics => {
  return {
    ResultsCount: __expectInt32(output.ResultsCount),
    TotalResultsCount: __expectInt32(output.TotalResultsCount),
  } as any;
};

const deserializeAws_json1_1QueryStatisticsForDescribeQuery = (
  output: any,
  context: __SerdeContext
): QueryStatisticsForDescribeQuery => {
  return {
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    EventsMatched: __expectLong(output.EventsMatched),
    EventsScanned: __expectLong(output.EventsScanned),
    ExecutionTimeInMillis: __expectInt32(output.ExecutionTimeInMillis),
  } as any;
};

const deserializeAws_json1_1RemoveTagsResponse = (output: any, context: __SerdeContext): RemoveTagsResponse => {
  return {} as any;
};

const deserializeAws_json1_1Resource = (output: any, context: __SerdeContext): Resource => {
  return {
    ResourceName: __expectString(output.ResourceName),
    ResourceType: __expectString(output.ResourceType),
  } as any;
};

const deserializeAws_json1_1ResourceList = (output: any, context: __SerdeContext): Resource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Resource(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ResourceTag = (output: any, context: __SerdeContext): ResourceTag => {
  return {
    ResourceId: __expectString(output.ResourceId),
    TagsList:
      output.TagsList !== undefined && output.TagsList !== null
        ? deserializeAws_json1_1TagsList(output.TagsList, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ResourceTagList = (output: any, context: __SerdeContext): ResourceTag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ResourceTag(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ResourceTypeNotSupportedException = (
  output: any,
  context: __SerdeContext
): ResourceTypeNotSupportedException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1RestoreEventDataStoreResponse = (
  output: any,
  context: __SerdeContext
): RestoreEventDataStoreResponse => {
  return {
    AdvancedEventSelectors:
      output.AdvancedEventSelectors !== undefined && output.AdvancedEventSelectors !== null
        ? deserializeAws_json1_1AdvancedEventSelectors(output.AdvancedEventSelectors, context)
        : undefined,
    CreatedTimestamp:
      output.CreatedTimestamp !== undefined && output.CreatedTimestamp !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTimestamp)))
        : undefined,
    EventDataStoreArn: __expectString(output.EventDataStoreArn),
    MultiRegionEnabled: __expectBoolean(output.MultiRegionEnabled),
    Name: __expectString(output.Name),
    OrganizationEnabled: __expectBoolean(output.OrganizationEnabled),
    RetentionPeriod: __expectInt32(output.RetentionPeriod),
    Status: __expectString(output.Status),
    TerminationProtectionEnabled: __expectBoolean(output.TerminationProtectionEnabled),
    UpdatedTimestamp:
      output.UpdatedTimestamp !== undefined && output.UpdatedTimestamp !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.UpdatedTimestamp)))
        : undefined,
  } as any;
};

const deserializeAws_json1_1S3BucketDoesNotExistException = (
  output: any,
  context: __SerdeContext
): S3BucketDoesNotExistException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1StartLoggingResponse = (output: any, context: __SerdeContext): StartLoggingResponse => {
  return {} as any;
};

const deserializeAws_json1_1StartQueryResponse = (output: any, context: __SerdeContext): StartQueryResponse => {
  return {
    QueryId: __expectString(output.QueryId),
  } as any;
};

const deserializeAws_json1_1StopLoggingResponse = (output: any, context: __SerdeContext): StopLoggingResponse => {
  return {} as any;
};

const deserializeAws_json1_1Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_1TagsLimitExceededException = (
  output: any,
  context: __SerdeContext
): TagsLimitExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1TagsList = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Tag(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1Trail = (output: any, context: __SerdeContext): Trail => {
  return {
    CloudWatchLogsLogGroupArn: __expectString(output.CloudWatchLogsLogGroupArn),
    CloudWatchLogsRoleArn: __expectString(output.CloudWatchLogsRoleArn),
    HasCustomEventSelectors: __expectBoolean(output.HasCustomEventSelectors),
    HasInsightSelectors: __expectBoolean(output.HasInsightSelectors),
    HomeRegion: __expectString(output.HomeRegion),
    IncludeGlobalServiceEvents: __expectBoolean(output.IncludeGlobalServiceEvents),
    IsMultiRegionTrail: __expectBoolean(output.IsMultiRegionTrail),
    IsOrganizationTrail: __expectBoolean(output.IsOrganizationTrail),
    KmsKeyId: __expectString(output.KmsKeyId),
    LogFileValidationEnabled: __expectBoolean(output.LogFileValidationEnabled),
    Name: __expectString(output.Name),
    S3BucketName: __expectString(output.S3BucketName),
    S3KeyPrefix: __expectString(output.S3KeyPrefix),
    SnsTopicARN: __expectString(output.SnsTopicARN),
    SnsTopicName: __expectString(output.SnsTopicName),
    TrailARN: __expectString(output.TrailARN),
  } as any;
};

const deserializeAws_json1_1TrailAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): TrailAlreadyExistsException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1TrailInfo = (output: any, context: __SerdeContext): TrailInfo => {
  return {
    HomeRegion: __expectString(output.HomeRegion),
    Name: __expectString(output.Name),
    TrailARN: __expectString(output.TrailARN),
  } as any;
};

const deserializeAws_json1_1TrailList = (output: any, context: __SerdeContext): Trail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Trail(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1TrailNotFoundException = (output: any, context: __SerdeContext): TrailNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1TrailNotProvidedException = (
  output: any,
  context: __SerdeContext
): TrailNotProvidedException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1Trails = (output: any, context: __SerdeContext): TrailInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1TrailInfo(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1UnsupportedOperationException = (
  output: any,
  context: __SerdeContext
): UnsupportedOperationException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1UpdateEventDataStoreResponse = (
  output: any,
  context: __SerdeContext
): UpdateEventDataStoreResponse => {
  return {
    AdvancedEventSelectors:
      output.AdvancedEventSelectors !== undefined && output.AdvancedEventSelectors !== null
        ? deserializeAws_json1_1AdvancedEventSelectors(output.AdvancedEventSelectors, context)
        : undefined,
    CreatedTimestamp:
      output.CreatedTimestamp !== undefined && output.CreatedTimestamp !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTimestamp)))
        : undefined,
    EventDataStoreArn: __expectString(output.EventDataStoreArn),
    MultiRegionEnabled: __expectBoolean(output.MultiRegionEnabled),
    Name: __expectString(output.Name),
    OrganizationEnabled: __expectBoolean(output.OrganizationEnabled),
    RetentionPeriod: __expectInt32(output.RetentionPeriod),
    Status: __expectString(output.Status),
    TerminationProtectionEnabled: __expectBoolean(output.TerminationProtectionEnabled),
    UpdatedTimestamp:
      output.UpdatedTimestamp !== undefined && output.UpdatedTimestamp !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.UpdatedTimestamp)))
        : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateTrailResponse = (output: any, context: __SerdeContext): UpdateTrailResponse => {
  return {
    CloudWatchLogsLogGroupArn: __expectString(output.CloudWatchLogsLogGroupArn),
    CloudWatchLogsRoleArn: __expectString(output.CloudWatchLogsRoleArn),
    IncludeGlobalServiceEvents: __expectBoolean(output.IncludeGlobalServiceEvents),
    IsMultiRegionTrail: __expectBoolean(output.IsMultiRegionTrail),
    IsOrganizationTrail: __expectBoolean(output.IsOrganizationTrail),
    KmsKeyId: __expectString(output.KmsKeyId),
    LogFileValidationEnabled: __expectBoolean(output.LogFileValidationEnabled),
    Name: __expectString(output.Name),
    S3BucketName: __expectString(output.S3BucketName),
    S3KeyPrefix: __expectString(output.S3KeyPrefix),
    SnsTopicARN: __expectString(output.SnsTopicARN),
    SnsTopicName: __expectString(output.SnsTopicName),
    TrailARN: __expectString(output.TrailARN),
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

const buildHttpRpcRequest = async (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const contents: any = {
    protocol,
    hostname,
    port,
    method: "POST",
    path: basePath.endsWith("/") ? basePath.slice(0, -1) + path : basePath + path,
    headers,
  };
  if (resolvedHostname !== undefined) {
    contents.hostname = resolvedHostname;
  }
  if (body !== undefined) {
    contents.body = body;
  }
  return new __HttpRequest(contents);
};

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
